$(document).ready(function(){
    //Taille de l'écran
  var windows_height = $('.page_1').load().height();
  // Taille des parties du menu 2
  var picture = $('.chief_mobile_1 > .chief_picture').load().height();
  var description = $('.chief_mobile_1 > .chief_details_1').load().height();
  var bar = $('.page_2 > .chieves_nav').load().height();
  // Calcul du margin top
  var calculus_1 = bar + picture + description - windows_height;



  //Taille de l'écran

  // Taille des parties du menu 2
  var picture2 = $('.chief_mobile_2 > .chief_picture2').load().height();
  var description2 = $('.chief_mobile_2 > .chief_details_2').load().height();
  // Calcul du margin top
  var calculus_2 = bar + picture2 + description2 - windows_height;

  var calculus_3 = Math.max(calculus_1, calculus_2)

  $('.page_3').css({'margin-top': Math.max(0, calculus_3 ) });
});
