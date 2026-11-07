const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));}
const dlg=document.getElementById('lightbox');
if(dlg){document.querySelectorAll('.gallery-item button').forEach(b=>b.addEventListener('click',()=>{dlg.querySelector('img').src=b.dataset.image;dlg.querySelector('img').alt=b.dataset.title;dlg.querySelector('p').textContent=b.dataset.title;dlg.showModal()}));dlg.querySelector('.close-lightbox').addEventListener('click',()=>dlg.close());dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});}
document.querySelectorAll('.year-filter').forEach(button=>button.addEventListener('click',()=>{const year=button.dataset.year;document.querySelectorAll('.year-filter').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});document.querySelectorAll('.gallery-item').forEach(item=>{item.hidden=year!=='all'&&item.dataset.year!==year})}));
const yearNode=document.getElementById('year');if(yearNode)yearNode.textContent=new Date().getFullYear();
