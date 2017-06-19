$(document).ready(function () {


  $('#first-para').fadeIn(2000).removeClass('hidden');
  $('#second-para').fadeIn(10000).removeClass('hidden');



  $('#my-name').on('click', function() {
      window.location.replace('index.html')

  });

  // magically write words across the screen

  var container = document.getElementById('homepage-sub-para');

  var things = ['full stack developer'];
  var t = -1;
  var thing = '';
  var message = container.innerHTML;
  var mode = 'write';
  var delay = 1000;

  function updateText(txt) {
      container.innerHTML = txt;
  }

  function tick() {

      if(container.innerHTML.length == 0) {
          t++;
          thing = things[t];
          message = '';
          mode = 'write';
      }

      switch(mode) {
          case 'write' :
              message += thing.slice(0, 1);
              thing = thing.substr(1);

              updateText(message);

              if(thing.length === 0 && t === (things.length - 1)) {
                  window.clearTimeout(timeout);
                  return;
              }

              if(thing.length == 0){
                  mode = 'delete';
                  delay = 1500;
              } else {
                  delay = 32 + Math.round(Math.random() * 40);
              }

              break;

          case 'delete' :
              message = message.slice(0, -1);
              updateText(message);

              if(message.length == 0)
              {
                  mode = 'write';
                  delay = 1500;
              } else {
                  delay = 32 + Math.round(Math.random() * 100);
              }
              break;
      }

      timeout = window.setTimeout(tick, delay);
  }

  var timeout = window.setTimeout(tick, delay);




  //PUPSHARE//


  $('#pupshare-img').on('click', function () {
    window.location.replace('pupshare.html');

  });




//HIPTRAVELER//


  $('#hiptraveler-img').on('click', function () {
    window.location.replace('hiptraveler.html');

  });




//REVIEWTHATBOOK//


  $('#book-img').click(function () {
    window.location.replace('book.html');

  });




//RESUME PAGE//

$('#contact-head').on('click', function () {
  $('#resume-contact').show(2000);

});

$('#skills-head').on('click', function () {
  $('#resume-skills').show(2000);

});

$('#experience-head').on('click', function () {
  $('.experience-body').show(2000);

});


//email button
$('.fa-envelope-open-o').on('click', function () {
  window.location.href = "mailto:ktdodd511@gmail.com";
});


//linkedin button
  $('.fa-linkedin-square').on('click', function () {
    window.location.replace('https://www.linkedin.com/in/katieadodd/');
  });

});
