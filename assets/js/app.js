$(document).ready(function () {


  $('#first-para').fadeIn(2000).removeClass('hidden');
  $('#second-para').fadeIn(10000).removeClass('hidden');



  $('#my-name').on('click', function() {
      window.location.replace('index.html')

  });




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
