document.addEventListener("DOMContentLoaded", function() {
  if (document.location.protocol === 'file:') {
    alert('The HTML5 History API must run through a server.');
  }

  var History = window.History;
  var first_url = History.getState().url;

  var pages = {
    'home': function() {
      change_page(null);
    },
    'xappbar': function() {
      change_page('xappbar');
    }
  };

  if (document.querySelector('.' + History.getState().data.state) !== null) {
    pages[History.getState().data.state]();
  } else {
    pages['home']();
  }

  document.querySelector('.topbar .next').addEventListener('click', function() {
    pages[document.querySelector('.show').nextElementSibling.className.split(' ')[0]]();
  });

  document.querySelector('.topbar .back').addEventListener('click', function() {
    pages[document.querySelector('.show').previousElementSibling.className.split(' ')[0]]();
  });

  function change_page(state_code) {
    [].forEach.call(
            document.querySelectorAll('.content'),
            function(el) {
              el.classList.add('hide');
              el.classList.remove('show');
            }
    );

    if (state_code === null) {
      var page_title = document.querySelector('.home').dataset.title;
      History.pushState({state: 'home'}, page_title, '#home');
      document.querySelector('.home').classList.add('show');
      document.querySelector('.home').classList.remove('hide');
      document.querySelector('.topbar .title').innerHTML = page_title;
    } else {
      var page_title = document.querySelector('.' + state_code).dataset.title;
      History.pushState({state: state_code}, page_title, '#' + state_code);
      document.querySelector('.' + state_code).classList.add('show');
      document.querySelector('.' + state_code).classList.remove('hide');
      document.querySelector('.topbar .title').innerHTML = page_title;
    }

    var next = document.querySelector('.show').nextElementSibling;
    if (next.dataset.title) {
      document.querySelector('.next').innerHTML = next.dataset.title;
      document.querySelector('.next').classList.remove('hide');
    } else {
      document.querySelector('.next').classList.add('hide');
    }

    var back = document.querySelector('.show').previousElementSibling;
    if (back.dataset.title) {
      document.querySelector('.back').innerHTML = back.dataset.title;
      document.querySelector('.back').classList.remove('hide');
    } else {
      document.querySelector('.back').classList.add('hide');
    }
  }

  [].forEach.call(
          document.querySelectorAll('.content'),
          function(el) {
            var new_child = document.createElement("li");
            new_child.innerHTML = '<a href="#' + el.className.split(' ')[0] + '">' + el.dataset.title + '</a><br>';
            document.querySelector('#example-list').insertBefore(new_child, null);
          }
  );

});
