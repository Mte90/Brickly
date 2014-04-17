document.addEventListener("DOMContentLoaded", function() {
  [].forEach.call(
          document.querySelectorAll('.content'),
          function(el) {
            if (el.classList[0] !== 'home') {
              update_code(el);
              //Add the button for open the poup
              var e = document.createElement('button');
              e.classList.add('popup');
              e.innerHTML = 'See in a popup';
              document.querySelector('.' + el.classList[0] + ' .mobile-view').parentNode.insertBefore(e, document.querySelector('.' + el.classList[0] + ' .mobile-view').parentNode.firstChild);
              //Create the popup
              e.addEventListener('click', function() {
                var w = window.open('', "", "width=320, height=480, scrollbars=no");
                w.document.body.innerHTML += '<link rel="stylesheet" type="text/css" href="http://' + window.location.hostname + window.location.pathname + '/css/brick-1.0.1.min.css">';
                w.document.body.innerHTML += '<script type="text/javascript" src="http://' + window.location.hostname + window.location.pathname + '/js/brick-1.0.1.min.js"></script>';
                w.document.body.innerHTML += document.querySelector('.' + el.classList[0] + ' .mobile-view').innerHTML;
              });
              el.addEventListener('change', function() {
                update_code(el);
              });
            }
          }
  );
  //Update the code
  function update_code(el) {
    if (el.classList[0] !== 'home') {
      document.querySelector('.' + el.classList[0] + ' .html-code').textContent = document.querySelector('.' + el.classList[0] + ' .mobile-view').innerHTML;
      Prism.highlightAll();
    }
  }


});
