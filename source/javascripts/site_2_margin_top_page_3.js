$(document).ready(function(){
  //Taille de l'écran
  var windows_height = $('.page_1').height();
  // Taille des parties du menu 2
  var picture = $('.chief_mobile_1 > .chief_picture').height();
  var description = $('.chief_mobile_1 > .chief_details_1').height();
  var bar = $('.page_2 > .chieves_nav').height();
  // Calcul du margin top
  var calculus_1 = bar + picture + description - windows_height;
  $('.page_3').css({'margin-top': Math.max(0, calculus_1 ) });

  // Taille des parties du menu 2
  var picture_meal = $('.page_3 > .flexslider').height();
  console.log(picture_meal);
  var details_restaurant = $('.restaurant_details > div:nth-child(1)').height();
  console.log(details_restaurant);
  var detail = $('.restaurant_details').height();
  console.log(detail);

  // Calcul du margin top
  var calculus_2 = picture_meal + details_restaurant - windows_height;
  console.log(calculus_2)
  $('.page_4').css({'margin-top': Math.max(0, calculus_2 ) });
});
