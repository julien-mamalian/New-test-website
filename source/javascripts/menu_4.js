$(document).ready(function(){
   var height_all = $('#contain_under_home_3').height();
  $('#food_11').css({
    'height': height_all * 0.84
  })
  $('.main').hide();
  $('.dessert').hide();

  $('#main').on('click', function(){

    if ($('.appetizers').is(":visible")) {
      $('.appetizers').fadeOut(0);
      $('.main').fadeIn(1500);
    }
    if ($('.dessert').is(":visible")) {
      $('.dessert').fadeOut(0);
      $('.main').fadeIn(1500);
    }
  })

  $('#appetizers').on('click', function(){
    if ($('.main').is(":visible")) {
      $('.main').fadeOut(0);
      $('.appetizers').fadeIn(1500);
    }
    if ($('.dessert').is(":visible")) {
      $('.dessert').fadeOut(0);
      $('.appetizers').fadeIn(1500);
    }
  })

  $('#dessert').on('click', function(){
    if ($('.main').is(":visible")) {
      $('.main').fadeOut(0);
      $('.dessert').fadeIn(1500);
    }
    if ($('.appetizers').is(":visible")) {
      $('.appetizers').fadeOut(0);
      $('.dessert').fadeIn(1500);
    }
  })
  $('.onglet').on('hover', function(){
    $(this).animate({
      'text-decoration': 'underline !important'
    }, 1500);
  })
});
