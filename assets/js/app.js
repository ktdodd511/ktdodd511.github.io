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

  $('#pupshare-img').hover(function () {
    $('.pupshare-view').show();

  },
    function () {
      $('.pupshare-view').hide();
});



//HIPTRAVELER//


  $('#hiptraveler-img').on('click', function () {
    window.location.replace('hiptraveler.html');

  });

  $('#hiptraveler-img').hover(function () {
    $('.hip-view').show();

  },
    function () {
      $('.hip-view').hide();
});



//REVIEWTHATBOOK//


  $('#book-img').click(function () {
    window.location.replace('book.html');

  });

  $('#book-img').hover(function () {
    $('.book-view').show();

  },
    function () {
      $('.book-view').hide();
});




});
