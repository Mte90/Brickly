document.addEventListener("DOMContentLoaded", function() {
  [].forEach.call(
          document.querySelectorAll('.content'),
          function(el) {
            update_code(el);
            if (el.classList[0] !== 'home') {
              var e = document.createElement('button');
              e.classList.add('popup');
              e.innerHTML = 'Open popup';
              document.querySelector('.' + el.classList[0] + ' .mobile-view').parentNode.insertBefore(e, document.querySelector('.' + el.classList[0] + ' .mobile-view').parentNode.firstChild);
            }
            el.addEventListener('change', function() {
              update_code(el);
            });
          }
  );
  function update_code(el) {
    if (el.classList[0] !== 'home') {
      document.querySelector('.' + el.classList[0] + ' .html-code').textContent = document.querySelector('.' + el.classList[0] + ' .mobile-view').innerHTML;
      Prism.highlightAll();
    }
  }
});
