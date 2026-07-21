document.addEventListener('DOMContentLoaded', function(){
  var pills = document.querySelectorAll('.pill');
  var cards = document.querySelectorAll('.card');
  var emptyMsg = document.getElementById('empty-msg');

  function setActive(cat){
    pills.forEach(function(p){
      p.classList.toggle('active', p.dataset.cat === cat);
    });
    var visibleCount = 0;
    cards.forEach(function(c){
      var show = cat === 'all' || c.dataset.cat === cat;
      c.style.display = show ? 'flex' : 'none';
      if(show) visibleCount++;
    });
    emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  pills.forEach(function(p){
    p.addEventListener('click', function(){ setActive(p.dataset.cat); });
  });
});
