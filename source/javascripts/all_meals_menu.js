$(document).ready(function(){

  $('.main_meals').hide();
  $('.dessert_meals').hide();

  $('.one_4').on('click', function(){
    $('ul').find('active_meal').removeClass('active_meal');
    $('.all_meals').find('.active_section').fadeOut(0).removeClass('active_section');

    $('.one_4').addClass('.active_meal');
    $('.appetizer_meals').fadeIn(1200).addClass('active_section');
  });

  $('.two_4').on('click', function(){
    $('ul').find('.active_meal').removeClass('active_meal');
    $('.all_meals').find('.active_section').fadeOut(0).removeClass('active_section');

    $('.two_4').addClass('active_meal');
    $('.main_meals').fadeIn(1200).addClass('active_section');
  });

  $('.three_4').on('click', function(){
    $('ul').find('.active_meal').removeClass('active_meal');
    $('.all_meals').find('.active_section').fadeOut(0).removeClass('active_section');

    $('.three_4').addClass('active_meal');
    $('.dessert_meals').fadeIn(1200).addClass('active_section');
  });
});
