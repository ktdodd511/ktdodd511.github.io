// sanity check
console.log("app.js linked.");

$(document).ready(function () {


  $('#about-button').on('click', function () {
    $('#about').fadeIn(4000);
  });

  $('#projects-button').on('click', function () {
    $('#projects').fadeIn(4000);
  });

  $('#contact-button').on('click', function () {
    $('#contact').fadeIn(4000);
  });

  $('#pupshare-button').click(function () {
    window.location.replace('http://pupshare.herokuapp.com');

  });

  $('#hiptraveler-button').click(function () {
    window.location.replace('http://hiptraveler.herokuapp.com');

  });

  $('#reviewthatbook-button').click(function () {
    window.location.replace('http://reviewthatbook.herokuapp.com');

  });
});
