const STORAGE_KEY = 'quimica-organica-revisao-v1';
let state = {completed:[],answers:{}};
try { const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)); if(saved && Array.isArray(saved.completed) && saved.answers && typeof saved.answers==='object') state=saved; } catch(_) {}
let currentLesson=0, currentFilter='all';
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
}
function renderNav(){
  $('#lessonNav').innerHTML=lessons.map((l,i)=>`<button class="lesson-link" data-lesson="${i}"><span class="number">${label(i)}</span><span>${l.title}</span></button>`).join('');
  $('#mapCards').innerHTML=lessons.map((l,i)=>`<button class="map-card" data-lesson="${i}"><span>AULA ${label(i)}</span><h3>${l.title}</h3><p>${l.map}</p></button>`).join('');
  updateProgress();
}
function highlight(view){
  document.querySelectorAll('.lesson-link').forEach((el,i)=>el.classList.toggle('active',view==='lesson' && i===currentLesson));
  document.querySelectorAll('.side-link,.mobile-nav button').forEach(el=>el.classList.toggle('active',el.dataset.view===view));
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
  if(/^aula-[1-8]$/.test(hash)){currentLesson=Number(hash.slice(5))-1;renderLesson(currentLesson);show('lesson');}
  else if(hash==='practice'){renderPractice();show('practice');}
  else if(hash==='exam'){renderExam();show('exam');}
  else if(hash==='review'){renderReview();show('review');}
  else show('home');
}
function renderLesson(i){
  const l=lessons[i], w=l.worked;
  $('#lessonView').innerHTML=`<div class="lesson-header"><span class="eyebrow">AULA ${label(i)} / 08</span><h1>${l.title}</h1><p>${l.subtitle}</p></div><div class="lesson-body"><article class="lesson-card"><h2>Entenda sem decorar</h2>${l.body}</article><article class="lesson-card worked"><span class="kicker">EXEMPLO RESOLVIDO · PASSO A PASSO</span><h2>${w.q}</h2><ol>${w.steps.map(s=>`<li>${s}</li>`).join('')}</ol><div class="answer-box">Resposta: ${w.answer}</div></article><article class="lesson-card mistake"><h2>Armadilha comum</h2><p>${l.mistake}</p></article>${i===7?'<section class="compare-lab" aria-label="Compare estruturas"><span class="kicker">LABORATÓRIO VISUAL</span><h2>Mude uma ligação, mude a resposta</h2><div id="comparison"></div></section>':''}<div class="lesson-actions"><button class="primary" data-complete="${i}">${state.completed.includes(i)?'Aula concluída ✓':'Marcar aula como estudada ✓'}</button><button class="secondary" data-practice="${i}">Praticar este assunto →</button>${i<7?`<button class="secondary" data-lesson="${i+1}">Próxima aula →</button>`:'<button class="secondary" data-view="exam">Fazer simulado →</button>'}</div></div>`;
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
  const topics=currentFilter==='all'?lessons.map((_,i)=>i):[Number(currentFilter)];
  const count=Object.keys(state.answers).length;
  $('#practiceView').innerHTML=`<span class="eyebrow">32 QUESTÕES INÉDITAS</span><h1 class="inner-title">Treine até fazer sentido.</h1><p class="intro-copy">Escolha uma resposta antes de ver a explicação. Ao errar, observe qual detalhe da estrutura mudou a conclusão. Você já respondeu ${count}/32 questões neste navegador.</p><div class="filter-row" role="group" aria-label="Filtrar por aula"><button class="filter ${currentFilter==='all'?'active':''}" data-filter="all">Todas</button>${lessons.map((l,i)=>`<button class="filter ${currentFilter===String(i)?'active':''}" data-filter="${i}">${label(i)} · ${l.title}</button>`).join('')}</div><div>${topics.map(t=>`<section><div class="section-title"><span>AULA ${label(t)}</span><h2>${lessons[t].title}</h2></div>${practice[t].map((_,n)=>card(t,n)).join('')}</section>`).join('')}</div>`;
}
function renderExam(){
  const chosen=state.exam;
  const completed=Array.isArray(chosen) && chosen.length===examQuestions.length;
  const score=completed?chosen.reduce((total,a,i)=>total+(a===examQuestions[i][2]?1:0),0):0;
  $('#examView').innerHTML=`<span class="eyebrow">DESAFIO FINAL · 12 QUESTÕES</span><h1 class="inner-title">Simulado misto</h1><p class="intro-copy">Resolva sem consultar as aulas. As questões misturam cadeia, hidrocarbonetos, nomes e funções. O gabarito aparece depois de enviar todas as respostas.</p>${completed?`<div class="exam-result" role="status"><strong>${score}/12 acertos</strong><p>${score>=10?'Muito bem. Revise os detalhes das questões erradas antes da prova.':score>=7?'Você já reconhece boa parte das pistas. Revise as questões erradas e tente outra vez.':'Volte aos exemplos das aulas e refaça os temas em que errou.'}</p><button class="secondary" data-reset-exam>Refazer o simulado</button></div>`:''}<form id="examForm" novalidate>${examQuestions.map(([q,options,correct,why],i)=>`<fieldset class="exam-question"><legend><span>${label(i)}.</span> ${q}</legend>${options.map((opt,k)=>`<label class="exam-option ${completed?(k===correct?'correct':k===chosen[i]?'wrong':''):''}"><input type="radio" name="q${i}" value="${k}" ${completed&&chosen[i]===k?'checked':''} ${completed?'disabled':''}><span><b>${'ABCD'[k]}.</b> ${opt}</span></label>`).join('')}${completed?`<p class="exam-explanation"><strong>Resposta ${'ABCD'[correct]}:</strong> ${why}</p>`:''}</fieldset>`).join('')}${completed?'':`<p id="examError" class="exam-error" role="alert" hidden>Responda todas as 12 questões para ver o resultado.</p><button class="primary" type="submit">Conferir respostas →</button>`}</form>`;
}
function reviewSection(title,rows,href){
  return `<div class="list-heading"><h2>${title}</h2><a href="${href}" target="_blank" rel="noopener">Abrir PDF original ↗</a></div>${rows.map((r,i)=>`<details class="review-card"><summary><span class="review-num">${label(i)}</span><span>${r[0]}</span></summary><div class="review-body"><p><strong>${r[1]==='Discursiva'?'Resposta discursiva':`Alternativa ${r[1]}`}</strong></p><p>${r[2]}</p></div></details>`).join('')}`;
}
function renderReview(){
  $('#reviewView').innerHTML=`<span class="eyebrow">GABARITO EXPLICADO · 30 QUESTÕES</span><h1 class="inner-title">Corrija suas duas listas.</h1><p class="intro-copy">Abra a lista, tente resolver a questão e então toque no número para ver a resposta e o raciocínio. As descrições abaixo resumem cada enunciado, na mesma ordem dos PDFs.</p>${reviewSection('Lista 1 · Cadeias e hidrocarbonetos',reviewA,'listas/Lista_Exercicios_Quimica_Organica.pdf')}${reviewSection('Lista 2 · Álcool, fenol e éter',reviewB,'listas/Lista_Exercicios_Funcoes_Organicas_Alcool_Fenol_Eter.pdf')}<div class="summary-card"><h2>Antes de fechar o estudo</h2><p>Faça as questões 14 e 15 da primeira lista e a 15 da segunda por escrito. Explique o motivo de cada classificação em uma frase — esse é o passo que mostra se você realmente entendeu.</p></div>`;
}
document.addEventListener('click',event=>{
  const target=event.target.closest('button');
  if(!target)return;
  if(target.hasAttribute('data-start'))navigate('lesson',0);
  else if(target.hasAttribute('data-first-lesson'))navigate('lesson',currentLesson);
  else if(target.hasAttribute('data-lesson'))navigate('lesson',Number(target.dataset.lesson));
  else if(target.hasAttribute('data-practice')){currentFilter=target.dataset.practice;navigate('practice');}
  else if(target.hasAttribute('data-view'))navigate(target.dataset.view);
  else if(target.hasAttribute('data-filter')){currentFilter=target.dataset.filter;renderPractice();target.scrollIntoView({block:'nearest'});}
  else if(target.hasAttribute('data-compare'))renderComparison(Number(target.dataset.compare));
  else if(target.hasAttribute('data-reset-exam')){delete state.exam;save();renderExam();window.scrollTo({top:0});}
  else if(target.hasAttribute('data-complete')){
    const i=Number(target.dataset.complete);
    if(!state.completed.includes(i))state.completed.push(i);
    save();updateProgress();renderLesson(i);highlight('lesson');
  }
  else if(target.hasAttribute('data-answer')){
    const [t,q,a]=target.dataset.answer.split(',').map(Number),key=`${t}-${q}`;
    if(state.answers[key]!==undefined)return;
    state.answers[key]=a;save();
    const old=target.closest('.question-card');
    const replacement=document.createElement('div');replacement.innerHTML=card(t,q);
    old.replaceWith(replacement.firstElementChild);
    const intro=$('#practiceView .intro-copy');
    if(intro)intro.textContent=`Escolha uma resposta antes de ver a explicação. Ao errar, observe qual detalhe da estrutura mudou a conclusão. Você já respondeu ${Object.keys(state.answers).length}/32 questões neste navegador.`;
  }
});
document.addEventListener('submit',event=>{
  if(event.target.id!=='examForm')return;
  event.preventDefault();
  const form=event.target;
  const selected=examQuestions.map((_,i)=>{
    const radio=form.querySelector(`input[name="q${i}"]:checked`);
    return radio?Number(radio.value):null;
  });
  if(selected.includes(null)){
    $('#examError').hidden=false;
    form.querySelector(`input[name="q${selected.indexOf(null)}"]`).focus();
    return;
  }
  state.exam=selected;save();renderExam();window.scrollTo({top:0});
});
window.addEventListener('hashchange',route);
renderNav();route();
