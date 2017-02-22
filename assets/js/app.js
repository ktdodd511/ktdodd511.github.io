// sanity check
console.log("app.js linked.");

$(document).ready(function () {

//Navbar buttons to sections of website
  $('#about-button').click(function () {
    $('#about').fadeIn(4000);
  });

  $('#projects-button').on('click', function () {
    $('#projects').fadeIn(4000);
  });

  $('#contact-button').on('click', function () {
    $('#contact').fadeIn(4000);
  });

//PupShare buttons
  $('#pupshare-button').click(function () {
    window.location.replace('http://pupshare.herokuapp.com');

  });

  $('#pupshare-github-button').click(function () {
    window.location.replace('https://github.com/ktdodd511/pupshare');

  });

//Hiptraveler buttons
  $('#hiptraveler-button').click(function () {
    window.location.replace('http://hiptraveler.herokuapp.com');

  });

  $('#hiptraveler-github-button').click(function () {
    window.location.replace('https://github.com/caseyjoneal/hip_traveler');

  });

//ReviewThatBook buttons
  $('#reviewthatbook-button').click(function () {
    window.location.replace('http://reviewthatbook.herokuapp.com');

  });

  $('#reviewthatbook-github-button').click(function () {
    window.location.replace('https://github.com/ktdodd511/book_it');

  });
  
});
