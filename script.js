const body=document.body;
const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{
  body.classList.toggle('light');
  toggle.textContent=body.classList.contains('light')?'☀':'☾';
  localStorage.setItem('theme',body.classList.contains('light')?'light':'dark');
});
if(localStorage.getItem('theme')==='light'){body.classList.add('light');toggle.textContent='☀'}

const progress=document.getElementById('progressBar');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/h*100)+'%';
},{passive:true});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.job').forEach(job=>{
  job.addEventListener('click',()=>{
    document.querySelectorAll('.job').forEach(j=>j.classList.remove('active'));
    job.classList.add('active');
  });
});

const counter=document.querySelector('[data-count]');
let counted=false;
const countObserver=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting&&!counted){
    counted=true; let n=0,target=+counter.dataset.count;
    const tick=()=>{n+=.25;counter.textContent=Math.min(Math.round(n),target);if(n<target)requestAnimationFrame(tick)};
    tick();
  }
});
countObserver.observe(counter);

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
  });
});
