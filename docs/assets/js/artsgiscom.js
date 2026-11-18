/* ARTSGIS · artsgiscom — menu responsive et thème sombre */
(function(){
  var root=document.documentElement;
  var bt=document.querySelector('.bouton-theme');
  if(bt){bt.addEventListener('click',function(){
    var t=root.dataset.theme==='sombre'?'clair':'sombre';root.dataset.theme=t;
    try{localStorage.setItem('artsgiscom_theme',t);}catch(_){}
  });}
  var bm=document.querySelector('.bouton-menu'),menu=document.getElementById('menu-principal');
  if(bm&&menu){bm.addEventListener('click',function(){
    var o=bm.getAttribute('aria-expanded')!=='true';bm.setAttribute('aria-expanded',String(o));
    bm.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu');menu.classList.toggle('ouvert',o);
  });}
})();
