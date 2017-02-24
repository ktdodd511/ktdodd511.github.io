// sanity check
console.log("app.js linked.");

$(document).ready(function () {

  $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn(400);
		} else {
			$('.scrollToTop').fadeOut(400);
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

//Navbar buttons to sections of website
  $('#about-button').on('click', function () {
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
