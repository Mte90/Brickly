document.addEventListener("DOMContentLoaded", function() {
  //AppBar Code
  document.querySelector('#header').value = document.querySelector('brick-appbar h1').innerHTML;
  document.querySelector('#header').addEventListener('keyup', function() {
    document.querySelector('brick-appbar').heading = document.querySelector('#header').value;
    document.querySelector('#header-code').textContent = "document.querySelector('brick-appbar').heading = '" + document.querySelector('#header').value + "';";
    Prism.highlightElement(document.querySelector('#header-code'));
  });
  //Calendar Code
  document.querySelector('#calendar-controls').addEventListener('change', function() {
    if (document.querySelector('#calendar-controls').checked) {
      document.querySelector('brick-calendar').setAttribute('controls');
      document.querySelector('#calendar-controls-code').textContent = "document.querySelector('brick-calendar').setAttribute('controls');";
    } else {
      document.querySelector('brick-calendar').removeAttribute('controls');
      document.querySelector('#calendar-controls-code').textContent = "document.querySelector('brick-calendar').removeAttribute('controls');";
    }
    Prism.highlightElement(document.querySelector('#calendar-controls-code'));
  });
  document.querySelector('#calendar-viewport').addEventListener('keyup', function() {
    if (document.querySelector('#calendar-viewport').value.length === 10) {
      document.querySelector('brick-calendar').setAttribute('view', document.querySelector('#calendar-viewport').value);
      document.querySelector('#calendar-viewport-code').textContent = "document.querySelector('brick-calendar').setAttribute('view', '" + document.querySelector('#calendar-viewport').value + "');";
      Prism.highlightElement(document.querySelector('#calendar-viewport-code'));
      update_code(document.querySelector('.brick-calendar'));
    }
  });
  document.querySelector('#calendar-chosen').addEventListener('keyup', function() {
    if (document.querySelector('#calendar-viewport').value.length === 10) {
      document.querySelector('brick-calendar').chosen = document.querySelector('#calendar-chosen').value;
      document.querySelector('#calendar-chosen-code').textContent = "document.querySelector('brick-calendar').chosen = '" + document.querySelector('#calendar-chosen').value + "';";
      Prism.highlightElement(document.querySelector('#calendar-chosen-code'));
      update_code(document.querySelector('.brick-calendar'));
    }
  });
  document.querySelector('#calendar-multiple').addEventListener('change', function() {
    if (document.querySelector('#calendar-multiple').checked) {
      document.querySelector('brick-calendar').setAttribute('multiple');
      document.querySelector('#calendar-multiple-code').textContent = "document.querySelector('brick-calendar').setAttribute('multiple');";
    } else {
      document.querySelector('brick-calendar').removeAttribute('multiple');
      document.querySelector('#calendar-multiple-code').textContent = "document.querySelector('brick-calendar').removeAttribute('multiple');";
    }
    Prism.highlightElement(document.querySelector('#calendar-multiple-code'));
  });
  document.querySelector('#calendar-notoggle').addEventListener('change', function() {
    if (document.querySelector('#calendar-notoggle').checked) {
      document.querySelector('brick-calendar').setAttribute('notoggle');
      document.querySelector('#calendar-notoggle-code').textContent = "document.querySelector('brick-calendar').setAttribute('notoggle');";
    } else {
      document.querySelector('brick-calendar').removeAttribute('notoggle');
      document.querySelector('#calendar-notoggle-code').textContent = "document.querySelector('brick-calendar').removeAttribute('notoggle');";
    }
    Prism.highlightElement(document.querySelector('#calendar-notoggle-code'));
  });
  document.querySelector('#calendar-span').addEventListener('keyup', function() {
    document.querySelector('brick-calendar').setAttribute('span', document.querySelector('#calendar-span').value);
    document.querySelector('#calendar-span-code').textContent = "document.querySelector('brick-calendar').setAttribute('span', '" + document.querySelector('#calendar-span').value + "');";
    Prism.highlightElement(document.querySelector('#calendar-span-code'));
  });
  document.querySelector('#calendar-weekday').addEventListener('keyup', function() {
    document.querySelector('brick-calendar').setAttribute('first-weekday-num', document.querySelector('#calendar-weekday').value);
    document.querySelector('#calendar-weekday-code').textContent = "document.querySelector('brick-calendar').setAttribute('first-weekday-num', '" + document.querySelector('#calendar-weekday').value + "');";
    Prism.highlightElement(document.querySelector('#calendar-weekday-code'));
  });
  //Deck Code
  document.querySelector('#deck-loop').addEventListener('change', function() {
    if (document.querySelector('#deck-loop').checked) {
      document.querySelector('brick-deck').setAttribute('loop');
      document.querySelector('#deck-loop-code').textContent = "document.querySelector('brick-deck').setAttribute('loop');";
    } else {
      document.querySelector('brick-deck').removeAttribute('loop');
      document.querySelector('#deck-loop-code').textContent = "document.querySelector('brick-deck').removeAttribute('loop');";
    }
    Prism.highlightElement(document.querySelector('#deck-loop-code'));
  });
  document.querySelector('#deck-previous').addEventListener('click', function() {
    document.querySelector('brick-deck').previousCard();
    document.querySelector('#deck-previous-code').textContent = "document.querySelector('brick-deck').previousCard();";
    Prism.highlightElement(document.querySelector('#deck-previous-code'));
  });
  document.querySelector('#deck-next').addEventListener('click', function() {
    document.querySelector('brick-deck').nextCard();
    document.querySelector('brick-card[selected]').style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    document.querySelector('#deck-next-code').textContent = "document.querySelector('brick-deck').nextCard();";
    Prism.highlightElement(document.querySelector('#deck-next-code'));
  });
  document.querySelector('#deck-show').addEventListener('click', function() {
    document.querySelector('brick-deck').showCard(document.querySelector('#deck-show-number').value);
    document.querySelector('brick-card[selected]').style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    document.querySelector('#deck-show-code').textContent = "document.querySelector('brick-deck').showCard(" + document.querySelector('#deck-show-number').value + ");";
    Prism.highlightElement(document.querySelector('#deck-show-code'));
  });
  //Flipbox Code
  document.querySelector('#flipbox-flip').addEventListener('click', function() {
    document.querySelector('brick-flipbox').toggle();
    document.querySelector('#flipbox-flip-code').textContent = "document.querySelector('brick-flipbox').toggle();";
    Prism.highlightElement(document.querySelector('#flipbox-flip-code'));
  });
  document.querySelector('#flipbox-direction').addEventListener('change', function() {
    document.querySelector('brick-flipbox').setAttribute('direction', document.querySelector('#flipbox-direction').value);
    document.querySelector('#flipbox-direction-code').textContent = "document.querySelector('brick-flipbox').setAttribute('direction', '" + document.querySelector('#flipbox-direction').value + "');";
    Prism.highlightElement(document.querySelector('#flipbox-direction-code'));
  });
  //Popup Code
  [].forEach.call(
          document.querySelectorAll('.content'),
          function(el) {
            var classList = el.className.split(" ");
            if (classList[0] !== 'home' && classList[0] !== 'finish') {
              update_code(el);
              el.addEventListener('change', function() {
                update_code(el);
              });
            }
          }
  );
  //Update the code
  function update_code(el) {
    if (el !== null) {
      var classList = el.className.split(" ");
      if (classList[0] !== 'home' && classList[0] !== 'finish') {
        document.querySelector('.' + classList[0] + ' #html-code').textContent = document.querySelector('.' + classList[0] + ' .mobile-view').innerHTML.replace(/>/gi, '>\n');
        Prism.highlightElement(document.querySelector('.' + classList[0] + ' #html-code'));
      }
    }
  }
});
