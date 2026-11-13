(function(){
var de=document.documentElement;
var drawer=document.getElementById('drawer'),bd=document.getElementById('backdrop'),mb=document.getElementById('menu-btn');
function setOpen(o){if(!drawer)return;drawer.classList.toggle('open',o);bd.classList.toggle('open',o);de.classList.toggle('nav-open',o);mb.setAttribute('aria-expanded',o?'true':'false');if(o){var c=drawer.querySelector('.drawer-close');if(c)c.focus();}else{mb.focus();}}
if(mb){mb.addEventListener('click',function(){setOpen(true);});
document.getElementById('drawer-close').addEventListener('click',function(){setOpen(false);});
bd.addEventListener('click',function(){setOpen(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer.classList.contains('open'))setOpen(false);});
window.addEventListener('resize',function(){if(window.innerWidth>768&&drawer.classList.contains('open'))setOpen(false);});}
var qs=document.querySelectorAll('.faq-q');
for(var i=0;i<qs.length;i++){qs[i].addEventListener('click',function(){
var it=this.parentNode,a=it.querySelector('.faq-a'),open=it.classList.contains('open');
if(open){a.style.maxHeight='0px';it.classList.remove('open');this.setAttribute('aria-expanded','false');}
else{it.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';this.setAttribute('aria-expanded','true');}});}
})();
