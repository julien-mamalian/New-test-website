$(document).ready(function(){
  $('.menu').hide();
  $('.closed').on('click', function(){
    $('.menu').fadeToggle();
    $('.menu_link').show();
    $('.page_1').animate({
      'margin-top': '0px'
    }, 800)
  });

  $('.menu_link').on('click', function(){
    $('.menu').slideToggle(800);
    $('.page_1').animate({
      'margin-top': '150px'
    }, 800)
    $(this).hide();
  });
});
