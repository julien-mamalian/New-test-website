$(document).ready(function(){
  var MenuWidth = $('.menu').width() * -1;

  $('.chieves_nav_ul').on('click', function(){
    MenuWidth = $('.menu').width() * -1;
    $('.menu').animate({
      'right': 0
    }, 1500);
    $('[id^="page"]').animate({
      'left': MenuWidth
    }, 1500);
  });
  $('.closed').on('click', function(){
    MenuWidth = $('.menu').width() * -1;
    $('.menu').animate({
      'right': MenuWidth
    }, 1500);
    $('[id^="page"]').animate({
      'left': '0'
    }, 1500);
  });

});
