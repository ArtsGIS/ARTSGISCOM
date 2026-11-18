/* ARTSGIS · artsgiscom — menu responsive, thème sombre, onglets et chargement des cartes AGOL */
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
  document.querySelectorAll('.onglets').forEach(function(tl){
    var tabs=tl.querySelectorAll('[role=tab]');
    tabs.forEach(function(tab){tab.addEventListener('click',function(){
      tabs.forEach(function(x){x.setAttribute('aria-selected','false');document.getElementById(x.getAttribute('aria-controls')).hidden=true;});
      tab.setAttribute('aria-selected','true');document.getElementById(tab.getAttribute('aria-controls')).hidden=false;
    });});
  });
  document.querySelectorAll('[data-charger]').forEach(function(b){b.addEventListener('click',function(){
    var c=b.closest('.carte-cadre');var f=document.createElement('iframe');
    f.src=c.dataset.src;f.title=c.dataset.titre;f.loading='lazy';f.allow='fullscreen; geolocation';f.referrerPolicy='strict-origin-when-cross-origin';
    var o=document.createElement('div');o.className='carte-outils';
    o.innerHTML='<a target="_blank" rel="noopener" href="'+c.dataset.src+'">Ouvrir dans un nouvel onglet ↗</a>';
    c.innerHTML='';c.appendChild(f);c.appendChild(o);
  });});
})();
