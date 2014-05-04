document.addEventListener("DOMContentLoaded", function() {
  //AppBar Code
  document.querySelector('#header').value = document.querySelector('x-appbar h1').innerHTML;
  document.querySelector('#subheader').value = document.querySelector('x-appbar').getAttribute('subheading');
  document.querySelector('#header').addEventListener('keyup', function() {
    document.querySelector('x-appbar').heading = document.querySelector('#header').value;
    document.querySelector('#header-code').textContent = "document.querySelector('x-appbar').heading = '" + document.querySelector('#header').value + "';";
    Prism.highlightElement(document.querySelector('#header-code'));
  });
  document.querySelector('#subheader').addEventListener('keyup', function() {
    document.querySelector('x-appbar').subheading = document.querySelector('#subheader').value;
    document.querySelector('#subheader-code').textContent = "document.querySelector('x-appbar').subheading = '" + document.querySelector('#subheader').value + "';";
    Prism.highlightElement(document.querySelector('#subheader-code'));
  });
  //Calendar Code
  document.querySelector('#calendar-controls').addEventListener('change', function() {
    if (document.querySelector('#calendar-controls').checked) {
      document.querySelector('x-calendar').setAttribute('controls');
      document.querySelector('#calendar-controls-code').textContent = "document.querySelector('x-calendar').setAttribute('controls');";
    } else {
      document.querySelector('x-calendar').removeAttribute('controls');
      document.querySelector('#calendar-controls-code').textContent = "document.querySelector('x-calendar').removeAttribute('controls');";
    }
    Prism.highlightElement(document.querySelector('#calendar-controls-code'));
  });
  document.querySelector('#calendar-viewport').addEventListener('keyup', function() {
    if (document.querySelector('#calendar-viewport').value.length === 10) {
      document.querySelector('x-calendar').setAttribute('view', document.querySelector('#calendar-viewport').value);
      document.querySelector('#calendar-viewport-code').textContent = "document.querySelector('x-calendar').setAttribute('view', '" + document.querySelector('#calendar-viewport').value + "');";
      Prism.highlightElement(document.querySelector('#calendar-viewport-code'));
      update_code(document.querySelector('.xcalendar'));
    }
  });
  document.querySelector('#calendar-chosen').addEventListener('keyup', function() {
    if (document.querySelector('#calendar-viewport').value.length === 10) {
      document.querySelector('x-calendar').chosen = document.querySelector('#calendar-chosen').value;
      document.querySelector('#calendar-chosen-code').textContent = "document.querySelector('x-calendar').chosen = '" + document.querySelector('#calendar-chosen').value + "';";
      Prism.highlightElement(document.querySelector('#calendar-chosen-code'));
      update_code(document.querySelector('.xcalendar'));
    }
  });
  document.querySelector('#calendar-multiple').addEventListener('change', function() {
    if (document.querySelector('#calendar-multiple').checked) {
      document.querySelector('x-calendar').setAttribute('multiple');
      document.querySelector('#calendar-multiple-code').textContent = "document.querySelector('x-calendar').setAttribute('multiple');";
    } else {
      document.querySelector('x-calendar').removeAttribute('multiple');
      document.querySelector('#calendar-multiple-code').textContent = "document.querySelector('x-calendar').removeAttribute('multiple');";
    }
    Prism.highlightElement(document.querySelector('#calendar-multiple-code'));
  });
  document.querySelector('#calendar-notoggle').addEventListener('change', function() {
    if (document.querySelector('#calendar-notoggle').checked) {
      document.querySelector('x-calendar').setAttribute('notoggle');
      document.querySelector('#calendar-notoggle-code').textContent = "document.querySelector('x-calendar').setAttribute('notoggle');";
    } else {
      document.querySelector('x-calendar').removeAttribute('notoggle');
      document.querySelector('#calendar-notoggle-code').textContent = "document.querySelector('x-calendar').removeAttribute('notoggle');";
    }
    Prism.highlightElement(document.querySelector('#calendar-notoggle-code'));
  });
  document.querySelector('#calendar-span').addEventListener('keyup', function() {
    document.querySelector('x-calendar').setAttribute('span', document.querySelector('#calendar-span').value);
    document.querySelector('#calendar-span-code').textContent = "document.querySelector('x-calendar').setAttribute('span', '" + document.querySelector('#calendar-span').value + "');";
    Prism.highlightElement(document.querySelector('#calendar-span-code'));
  });
  document.querySelector('#calendar-weekday').addEventListener('keyup', function() {
    document.querySelector('x-calendar').setAttribute('first-weekday-num', document.querySelector('#calendar-weekday').value);
    document.querySelector('#calendar-weekday-code').textContent = "document.querySelector('x-calendar').setAttribute('first-weekday-num', '" + document.querySelector('#calendar-weekday').value + "');";
    Prism.highlightElement(document.querySelector('#calendar-weekday-code'));
  });
  //Deck Code
  document.querySelector('#deck-loop').addEventListener('change', function() {
    if (document.querySelector('#deck-loop').checked) {
      document.querySelector('x-deck').setAttribute('loop');
      document.querySelector('#deck-loop-code').textContent = "document.querySelector('x-deck').setAttribute('loop');";
    } else {
      document.querySelector('x-deck').removeAttribute('loop');
      document.querySelector('#deck-loop-code').textContent = "document.querySelector('x-deck').removeAttribute('loop');";
    }
    Prism.highlightElement(document.querySelector('#deck-loop-code'));
  });
  document.querySelector('#deck-previous').addEventListener('click', function() {
    document.querySelector('x-deck').previousCard();
    document.querySelector('#deck-previous-code').textContent = "document.querySelector('x-deck').previousCard();";
    Prism.highlightElement(document.querySelector('#deck-previous-code'));
  });
  document.querySelector('#deck-next').addEventListener('click', function() {
    document.querySelector('x-deck').nextCard();
    document.querySelector('x-card[selected]').style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.querySelector('#deck-next-code').textContent = "document.querySelector('x-deck').nextCard();";
    Prism.highlightElement(document.querySelector('#deck-next-code'));
  });
  document.querySelector('#deck-show').addEventListener('click', function() {
    document.querySelector('x-deck').showCard(document.querySelector('#deck-show-number').value);
    document.querySelector('x-card[selected]').style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.querySelector('#deck-show-code').textContent = "document.querySelector('x-deck').showCard(" + document.querySelector('#deck-show-number').value + ");";
    Prism.highlightElement(document.querySelector('#deck-show-code'));
  });
  //Popup Code
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
                var w = window.open('', "", "width=240, height=360, scrollbars=no");
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
      document.querySelector('.' + el.classList[0] + ' #html-code').textContent = document.querySelector('.' + el.classList[0] + ' .mobile-view').innerHTML.replace(/>/gi, '>\n');
      Prism.highlightElement(document.querySelector('.' + el.classList[0] + ' #html-code'));
    }
  }
});
