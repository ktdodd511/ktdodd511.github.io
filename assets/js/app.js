$(document).ready(function () {


  $('#first-para').fadeIn(2000).removeClass('hidden');
  $('#second-para').fadeIn(10000).removeClass('hidden');

  $('#my-name').on('click', function() {
    window.location.replace('index.html')
  });

  $(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn(400);
		} else {
			$('.scrollToTop').fadeOut(400);
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function() {
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

  $('#pupshare').mouseover(function() {
    $(this).animate({opacity: 0.5})
    $(this).find('#pupshare-button').show();
  },
    function () {
      $(this).find('#pupshare-button').hide();
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
