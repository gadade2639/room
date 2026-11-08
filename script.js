
const header=document.querySelector('header'),nav=document.querySelector('nav'),menu=document.querySelector('.menu');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>35),{passive:true});
if(menu)menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.textContent=nav.classList.contains('open')?'×':'☰'});
if(nav)nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');if(menu)menu.textContent='☰'}));
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const lb=document.querySelector('.lightbox'),lbimg=lb&&lb.querySelector('img');
document.querySelectorAll('.gallery-item img').forEach(img=>img.addEventListener('click',()=>{lbimg.src=img.src;lb.classList.add('open')}));
function closeLb(){if(lb){lb.classList.remove('open');lbimg.src=''}}
if(lb){lb.querySelector('button').addEventListener('click',closeLb);lb.addEventListener('click',e=>{if(e.target===lb)closeLb()})}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});
