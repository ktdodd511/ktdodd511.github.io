$(document).ready(function () {


  $('#my-name').on('click', function() {
      window.location.replace('index.html')

  });


  $('#contact-head').on('click', function () {
    $('#resume-contact').show(2000);

  });

  $('#skills-head').on('click', function () {
    $('#resume-skills').show(2000);

  });

  $('#experience-head').on('click', function () {
    $('.experience-body').show(2000);

  });

  // email button
  $('.fa-envelope-open-o').on('click', function () {
    window.location.href = "mailto:ktdodd511@gmail.com";
  });


  // linkedin button
    $('.fa-linkedin-square').on('click', function () {
      window.location.replace('https://www.linkedin.com/in/katieadodd/');
    });


});
