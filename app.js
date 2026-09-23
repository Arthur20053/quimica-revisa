const STORAGE_KEY = 'quimica-organica-revisao-v1';
let state = {completed:[],answers:{}};
try { const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)); if(saved && Array.isArray(saved.completed) && saved.answers && typeof saved.answers==='object') state=saved; } catch(_) {}
let currentLesson=Number.isInteger(state.lastLesson)?state.lastLesson:0;
let practiceTopic=currentLesson, practiceIndex=0, examIndex=0;
const $ = sel => document.querySelector(sel);
const save = () => { try { localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); } catch(_) {} };
const label = i => String(i+1).padStart(2,'0');
const links = [$('#homeView'),$('#lessonView'),$('#practiceView'),$('#examView'),$('#reviewView')];

function updateProgress(){
  const count=state.completed.length;
  $('#progressTop').textContent=`${count}/8 aulas`;
  $('#progressPercent').textContent=`${Math.round(count/8*100)}%`;
  $('#progressBar').style.width=`${count/8*100}%`;
  document.querySelectorAll('.lesson-link').forEach((el,i)=>el.classList.toggle('done',state.completed.includes(i)));
  renderHome();
}
function nextLesson(){
  const next=lessons.findIndex((_,i)=>!state.completed.includes(i));
  return next<0?null:next;
}
function renderHome(){
  const next=nextLesson();
  $('#homeNextLabel').textContent=next===null?'Aulas concluídas · Faça o simulado':`Aula ${next+1} · ${lessons[next].title}`;
  $('#homeNextDescription').textContent=next===null?'Agora teste o que aprendeu com as questões misturadas.':lessons[next].map;
  $('#homeView .next-card button').textContent=next===null?'Abrir simulado →':'Continuar estudando →';
}
function renderNav(){
  $('#lessonNav').innerHTML=lessons.map((l,i)=>`<button class="lesson-link" data-lesson="${i}"><span class="number">${label(i)}</span><span>${l.title}</span></button>`).join('');
  $('#mapCards').innerHTML=lessons.map((l,i)=>`<button class="map-card" data-lesson="${i}"><span>AULA ${label(i)}</span><h3>${l.title}</h3><p>${l.map}</p></button>`).join('');
  updateProgress();
}
function highlight(view){
  document.querySelectorAll('.lesson-link').forEach((el,i)=>el.classList.toggle('active',view==='lesson' && i===currentLesson));
  document.querySelectorAll('.side-link,.mobile-nav button').forEach(el=>el.classList.toggle('active',el.dataset.view===view));
  if(view==='exam') $('.mobile-nav [data-view="practice"]').classList.add('active');
}
function show(view){
  links.forEach(el=>el.hidden=el.id!==view+'View');
  highlight(view);
  window.scrollTo({top:0,behavior:'auto'});
  $('#main').focus({preventScroll:true});
}
function navigate(view,i){
  const hash=view==='lesson'?`aula-${i+1}`:view;
  if(location.hash.slice(1)===hash) route(); else location.hash=hash;
}
function route(){
  const hash=decodeURIComponent(location.hash.slice(1));
  if(/^aula-[1-8]$/.test(hash)){currentLesson=Number(hash.slice(5))-1;state.lastLesson=currentLesson;save();renderLesson(currentLesson);show('lesson');}
  else if(hash==='practice'){renderPractice();show('practice');}
  else if(hash==='exam'){renderExam();show('exam');}
  else if(hash==='review'){renderReview();show('review');}
  else show('home');
}
function renderLesson(i){
  const l=lessons[i], w=l.worked;
  $('#lessonView').innerHTML=`<div class="lesson-header"><div class="lesson-picker"><label for="lessonSelect">Escolher aula</label><select id="lessonSelect">${lessons.map((x,n)=>`<option value="${n}" ${n===i?'selected':''}>${n+1}. ${x.title}</option>`).join('')}</select></div><span class="eyebrow">AULA ${label(i)} DE 08</span><h1>${l.title}</h1><p>${l.subtitle}</p><button class="primary lesson-jump" data-practice="${i}">Ir para as 4 questões →</button></div><div class="lesson-body"><article class="lesson-card"><h2>Entenda sem decorar</h2>${l.body}</article><article class="lesson-card worked"><span class="kicker">EXEMPLO RESOLVIDO · PASSO A PASSO</span><h2>${w.q}</h2><ol>${w.steps.map(s=>`<li>${s}</li>`).join('')}</ol><div class="answer-box">Resposta: ${w.answer}</div></article><article class="lesson-card mistake"><h2>Armadilha comum</h2><p>${l.mistake}</p></article>${i===7?'<section class="compare-lab" aria-label="Compare estruturas"><span class="kicker">LABORATÓRIO VISUAL</span><h2>Mude uma ligação, mude a resposta</h2><div id="comparison"></div></section>':''}<div class="lesson-actions"><button class="primary" data-practice="${i}">Resolver 4 questões →</button><button class="secondary" data-lesson="${(i+1)%8}">${i<7?'Ver a próxima aula →':'Voltar à primeira aula →'}</button></div></div>`;
  if(i===7)renderComparison(0);
}
function renderComparison(index){
  const c=comparisons[index];
  $('#comparison').innerHTML=`<div class="compare-tabs" role="group" aria-label="Escolha a comparação">${comparisons.map((x,j)=>`<button data-compare="${j}" aria-pressed="${index===j}">${x.name}</button>`).join('')}</div><div class="compare-pair"><div class="compare-molecule"><span>${c.leftLabel}</span><strong>${c.left}</strong></div><div class="compare-molecule"><span>${c.rightLabel}</span><strong>${c.right}</strong></div></div><p class="compare-explain"><strong>O que mudou?</strong> ${c.why}</p>`;
}
function card(topic,index){
  const [q,options,correct,why]=practice[topic][index], key=`${topic}-${index}`, answer=state.answers[key];
  return `<article class="question-card"><div class="q-label">AULA ${label(topic)} · QUESTÃO ${index+1}</div><h3>${q}</h3><div class="choices">${options.map((opt,k)=>`<button class="choice ${answer!==undefined?(k===correct?'correct':k===answer?'wrong':''):''}" data-answer="${topic},${index},${k}" ${answer!==undefined?'disabled':''}><span class="letter">${'ABCD'[k]}.</span><span>${opt}</span></button>`).join('')}</div>${answer!==undefined?`<div class="feedback ${answer===correct?'':'error'}" role="status"><strong>${answer===correct?'Acertou!':`Ainda não. Resposta: ${'ABCD'[correct]}.`}</strong><p>${why}</p></div>`:''}</article>`;
}
function renderPractice(){
  const topic=practiceTopic, index=practiceIndex, answered=state.answers[`${topic}-${index}`]!==undefined;
  const completed=practice[topic].every((_,i)=>state.answers[`${topic}-${i}`]!==undefined);
  const correct=practice[topic].reduce((sum,q,i)=>sum+(state.answers[`${topic}-${i}`]===q[2]?1:0),0);
  $('#practiceView').innerHTML=`<div class="practice-heading"><span class="eyebrow">TREINO · AULA ${label(topic)}</span><h1 class="inner-title">${lessons[topic].title}</h1><label for="topicSelect">Trocar de assunto</label><select id="topicSelect">${lessons.map((l,i)=>`<option value="${i}" ${i===topic?'selected':''}>${i+1}. ${l.title}</option>`).join('')}</select></div><div class="small-progress"><span>Questão ${index+1} de 4</span><span>${practice[topic].filter((_,i)=>state.answers[`${topic}-${i}`]!==undefined).length}/4 respondidas</span></div><div class="progress-track"><div style="width:${(index+1)*25}%"></div></div>${card(topic,index)}<div class="step-actions">${index>0?'<button class="secondary" data-practice-prev>← Anterior</button>':'<button class="secondary" data-lesson="'+topic+'">← Voltar à aula</button>'}${answered?`<button class="primary" data-practice-next>${index<3?'Próxima questão →':topic<7?'Próximo assunto →':'Ir ao simulado →'}</button>`:'<span class="step-hint">Escolha uma resposta para avançar.</span>'}</div>${completed?`<div class="topic-result"><strong>Assunto concluído: ${correct}/4 acertos.</strong><p>${correct<4?'Se errou, leia a explicação acima e volte à aula quando quiser.':'Você acertou todas as questões deste assunto.'}</p><button class="plain-link" data-reset-topic>Refazer as 4 questões</button></div>`:''}<button class="plain-link" data-view="exam">Fazer simulado misto</button>`;
}
function renderExam(){
  const chosen=state.exam;
  const completed=Array.isArray(chosen) && chosen.length===examQuestions.length;
  if(completed){
    const score=chosen.reduce((sum,a,i)=>sum+(a===examQuestions[i][2]?1:0),0);
    const wrong=examQuestions.map((q,i)=>i).filter(i=>chosen[i]!==examQuestions[i][2]);
    $('#examView').innerHTML=`<span class="eyebrow">SIMULADO CONCLUÍDO</span><h1 class="inner-title">Seu resultado</h1><div class="exam-result" role="status"><strong>${score}/12 acertos</strong><p>${score>=10?'Muito bem. Revise os detalhes abaixo antes da prova.':score>=7?'Você já reconhece boa parte das pistas. Revise o que errou.':'Volte aos exemplos das aulas e pratique os temas em que errou.'}</p><button class="primary" data-reset-exam>Refazer o simulado</button></div>${wrong.length?`<h2>Questões para revisar</h2>${wrong.map(i=>examExplanation(i,chosen[i])).join('')}`:'<p>Você acertou todas! Refaça as listas para fixar.</p>'}<details class="home-details"><summary>Ver explicação das 12 questões</summary>${examQuestions.map((_,i)=>examExplanation(i,chosen[i])).join('')}</details>`;
    return;
  }
  if(!Array.isArray(state.examDraft))state.examDraft=Array(examQuestions.length).fill(null);
  const [q,options]=examQuestions[examIndex],selected=state.examDraft[examIndex];
  $('#examView').innerHTML=`<span class="eyebrow">SIMULADO · QUESTÃO ${examIndex+1} DE 12</span><h1 class="inner-title">Uma questão por vez.</h1><p class="intro-copy">Responda sem consultar a aula. O gabarito aparece no final.</p><div class="small-progress"><span>Questão ${examIndex+1}/12</span><span>${state.examDraft.filter(x=>x!==null).length} respondidas</span></div><div class="progress-track"><div style="width:${(examIndex+1)/12*100}%"></div></div><fieldset class="exam-question"><legend><span>${label(examIndex)}.</span> ${q}</legend>${options.map((opt,k)=>`<button class="exam-pick ${selected===k?'selected':''}" data-exam-choice="${k}" aria-pressed="${selected===k}"><b>${'ABCD'[k]}.</b> ${opt}</button>`).join('')}</fieldset><div class="step-actions">${examIndex>0?'<button class="secondary" data-exam-prev>← Anterior</button>':'<button class="secondary" data-view="practice">← Voltar ao treino</button>'}${selected!==null?`<button class="primary" ${examIndex<11?'data-exam-next':'data-submit-exam'}>${examIndex<11?'Próxima questão →':'Ver meu resultado →'}</button>`:'<span class="step-hint">Escolha uma alternativa para avançar.</span>'}</div>`;
}
function examExplanation(i,selected){
  const [q,options,correct,why]=examQuestions[i];
  return `<article class="exam-review"><strong>${i+1}. ${q}</strong><p>Sua resposta: ${'ABCD'[selected]} · Resposta certa: ${'ABCD'[correct]}</p><p>${why}</p></article>`;
}
function reviewSection(title,rows,href){
  return `<details class="home-details review-group"><summary>${title} · 15 questões</summary><div class="review-group-body"><a href="${href}" target="_blank" rel="noopener">Abrir PDF original ↗</a>${rows.map((r,i)=>`<details class="review-card"><summary><span class="review-num">${label(i)}</span><span>${r[0]}</span></summary><div class="review-body"><p><strong>${r[1]==='Discursiva'?'Resposta discursiva':`Alternativa ${r[1]}`}</strong></p><p>${r[2]}</p></div></details>`).join('')}</div></details>`;
}
function renderReview(){
  $('#reviewView').innerHTML=`<span class="eyebrow">GABARITO EXPLICADO · 30 QUESTÕES</span><h1 class="inner-title">Corrija suas duas listas.</h1><p class="intro-copy">Escolha uma lista, tente resolver no PDF e toque na questão para ver a explicação.</p>${reviewSection('Lista 1 · Cadeias e hidrocarbonetos',reviewA,'listas/Lista_Exercicios_Quimica_Organica.pdf')}${reviewSection('Lista 2 · Álcool, fenol e éter',reviewB,'listas/Lista_Exercicios_Funcoes_Organicas_Alcool_Fenol_Eter.pdf')}<div class="summary-card"><h2>Antes de fechar o estudo</h2><p>Faça as questões 14 e 15 da primeira lista e a 15 da segunda por escrito. Explique o motivo de cada classificação em uma frase.</p></div>`;
}
function enterPractice(topic){
  practiceTopic=topic;
  currentLesson=topic;
  practiceIndex=practice[topic].findIndex((_,i)=>state.answers[`${topic}-${i}`]===undefined);
  if(practiceIndex<0)practiceIndex=0;
  navigate('practice');
}
function finishTopicIfReady(topic){
  if(practice[topic].every((_,i)=>state.answers[`${topic}-${i}`]!==undefined) && !state.completed.includes(topic)){
    state.completed.push(topic);
    updateProgress();
  }
}
document.addEventListener('click',event=>{
  const target=event.target.closest('button');
  if(!target)return;
  if(target.hasAttribute('data-continue')){const next=nextLesson();next===null?navigate('exam'):navigate('lesson',next);}
  else if(target.hasAttribute('data-open-practice'))enterPractice(nextLesson()??currentLesson);
  else if(target.hasAttribute('data-first-lesson'))navigate('lesson',currentLesson);
  else if(target.hasAttribute('data-lesson'))navigate('lesson',Number(target.dataset.lesson));
  else if(target.hasAttribute('data-practice'))enterPractice(Number(target.dataset.practice));
  else if(target.hasAttribute('data-view'))navigate(target.dataset.view);
  else if(target.hasAttribute('data-practice-prev')){practiceIndex--;renderPractice();window.scrollTo({top:0});}
  else if(target.hasAttribute('data-practice-next')){
    if(practiceIndex<3)practiceIndex++;
    else if(practiceTopic<7){practiceTopic++;currentLesson=practiceTopic;practiceIndex=0;}
    else {navigate('exam');return;}
    renderPractice();window.scrollTo({top:0});
  }
  else if(target.hasAttribute('data-reset-topic')){
    for(let i=0;i<4;i++)delete state.answers[`${practiceTopic}-${i}`];
    state.completed=state.completed.filter(i=>i!==practiceTopic);
    practiceIndex=0;save();updateProgress();renderPractice();window.scrollTo({top:0});
  }
  else if(target.hasAttribute('data-compare'))renderComparison(Number(target.dataset.compare));
  else if(target.hasAttribute('data-reset-exam')){delete state.exam;state.examDraft=Array(examQuestions.length).fill(null);examIndex=0;save();renderExam();window.scrollTo({top:0});}
  else if(target.hasAttribute('data-exam-choice')){state.examDraft[examIndex]=Number(target.dataset.examChoice);save();renderExam();$('#examView .step-actions .primary').focus({preventScroll:true});}
  else if(target.hasAttribute('data-exam-prev')){examIndex--;renderExam();window.scrollTo({top:0});}
  else if(target.hasAttribute('data-exam-next')){examIndex++;renderExam();window.scrollTo({top:0});}
  else if(target.hasAttribute('data-submit-exam')){
    const missing=state.examDraft.findIndex(x=>x===null);
    if(missing>=0){examIndex=missing;renderExam();window.scrollTo({top:0});return;}
    state.exam=[...state.examDraft];save();renderExam();window.scrollTo({top:0});
  }
  else if(target.hasAttribute('data-answer')){
    const [t,q,a]=target.dataset.answer.split(',').map(Number),key=`${t}-${q}`;
    if(state.answers[key]!==undefined)return;
    state.answers[key]=a;
    finishTopicIfReady(t);
    save();renderPractice();
  }
});
document.addEventListener('change',event=>{
  if(event.target.id==='topicSelect'){practiceTopic=Number(event.target.value);currentLesson=practiceTopic;practiceIndex=0;renderPractice();window.scrollTo({top:0});}
  else if(event.target.id==='lessonSelect')navigate('lesson',Number(event.target.value));
});
window.addEventListener('hashchange',route);
renderNav();route();
