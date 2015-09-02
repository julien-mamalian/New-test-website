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

  // // Taille des parties du menu 2
  // var windows_height_2 = $('.page_3').height();
  // var picture_meal = $('.page_3 > .flexslider').height();
  // var details_restaurant = $('#the_restaurant').height();

  // console.log(details_restaurant + "the restau")
  // console.log(picture_meal)


  // // Calcul du margin top
  // var calculus_2 = picture_meal + details_restaurant - windows_height_2;
  // console.log(calculus_2 + 'calcul')
  // $('.page_4').css({'margin-top': Math.max(0, calculus_2 ) });
});
