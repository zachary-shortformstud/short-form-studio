(function(){
  var container = document.querySelector('.tools-marquee');
  if(!container) return;
  var items = container.querySelectorAll('li');
  var maxDist = 150;
  function update(){
    var rect = container.getBoundingClientRect();
    var centerY = rect.top + rect.height / 2;
    items.forEach(function(li){
      var r = li.getBoundingClientRect();
      var itemCenter = r.top + r.height / 2;
      var d = Math.abs(itemCenter - centerY);
      var t = Math.max(0, 1 - d / maxDist);
      var rr = Math.round(26 + (238 - 26) * t);
      var gg = Math.round(20 + (106 - 20) * t);
      var bb = Math.round(16 + (26 - 16) * t);
      var aa = (0.08 + (1 - 0.08) * t).toFixed(3);
      li.style.color = 'rgba(' + rr + ',' + gg + ',' + bb + ',' + aa + ')';
    });
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
})();

(function(){
  function closeModal(){ var o=document.getElementById('optin'); if(o){ o.classList.remove('open'); document.body.style.overflow=''; } }
  document.addEventListener('click', function(e){
    var t=e.target;
    if(t.closest && t.closest('a.btn')){ e.preventDefault(); var o=document.getElementById('optin'); if(o){ o.classList.add('open'); document.body.style.overflow='hidden'; } return; }
    if(t.closest && t.closest('#optinClose')){ closeModal(); return; }
    if(t.id==='optin'){ closeModal(); }
  });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ closeModal(); } });
})();
