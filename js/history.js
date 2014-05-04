document.addEventListener("DOMContentLoaded", function() {
  if (document.location.protocol === 'file:') {
    alert('The HTML5 History API must run through a server.');
  }
  //Initialize History.JS
  var History = window.History;
  //Create an object for simple use of history and navigation
  var pages = {
    'home': function() {
      change_page(null);
    },
    'xappbar': function() {
      change_page('xappbar');
    },
    'xcalendar': function() {
      change_page('xcalendar');
    },
    'xdeck': function() {
      change_page('xdeck');
    },
    'xflipbox': function() {
      change_page('xflipbox');
    }
  };
  //Check at page load if the page have a selector else load the home page
  if (document.querySelector('.' + History.getState().data.state) !== null) {
    pages[History.getState().data.state]();
  } else {
    pages['home']();
  }
  //Add back and next action 
  document.querySelector('.topbar .next').addEventListener('click', function() {
    pages[document.querySelector('.show').nextElementSibling.className.split(' ')[0]]();
  });
  document.querySelector('.topbar .back').addEventListener('click', function() {
    pages[document.querySelector('.show').previousElementSibling.className.split(' ')[0]]();
  });
  //Change the page with paramenter the class of page
  function change_page(state_code) {
    //hide all the page
    [].forEach.call(
            document.querySelectorAll('.content'),
            function(el) {
              el.classList.add('hide');
              el.classList.remove('show');
            }
    );
    //Check if home page
    if (state_code === null) {
      //Get the page title of the home
      var page_title = document.querySelector('.home').dataset.title;
      //Change the URL with history.js
      History.pushState({state: 'home'}, page_title, '#home');
      //Show the page
      document.querySelector('.home').classList.add('show');
      document.querySelector('.home').classList.remove('hide');
      //Insert the title in the header
      document.querySelector('.topbar .title').innerHTML = page_title;
    } else {
      //Get the page title
      var page_title = document.querySelector('.' + state_code).dataset.title;
      //Change the URL with history.js
      History.pushState({state: state_code}, page_title, '#' + state_code);
      //Show the page
      document.querySelector('.' + state_code).classList.add('show');
      document.querySelector('.' + state_code).classList.remove('hide');
      //Insert the title in the header
      document.querySelector('.topbar .title').innerHTML = page_title;
    }
    //Get the next page of the actual page
    var next = document.querySelector('.show').nextElementSibling;
    //Check if have a title
    if (next.dataset.title) {
      //Show the next button
      document.querySelector('.next').innerHTML = next.dataset.title;
      document.querySelector('.next').classList.remove('hide');
    } else {
      //Hide the button
      document.querySelector('.next').classList.add('hide');
    }
    //Get the next page of the actual page
    var back = document.querySelector('.show').previousElementSibling;
    //Check if have a title
    if (back.dataset.title) {
      //Show the next button
      document.querySelector('.back').innerHTML = back.dataset.title;
      document.querySelector('.back').classList.remove('hide');
    } else {
      //Hide the button
      document.querySelector('.back').classList.add('hide');
    }
  }
  //Create the menu list
  [].forEach.call(
          document.querySelectorAll('.content'),
          function(el) {
            var new_child = document.createElement("li");
            new_child.innerHTML = '<a data-link="' + el.className.split(' ')[0] + '" href="#' + el.className.split(' ')[0] + '">' + el.dataset.title + '</a><br>';
            document.querySelector('#example-list').insertBefore(new_child, null);
          }
  );
  //Add a click event to the menu list
  [].forEach.call(
          document.querySelectorAll('#example-list a'),
          function(el) {
            el.addEventListener('click', function() {
              pages[el.dataset.link]();
            });
          }
  );
});
