$(document).ready(function(){
  //Taille de l'écran
  var windows_height = $('.page_1').height();
  // Taille des parties du menu 2
  var picture = $('.chief_mobile_1 > .chief_picture').height();
  var description = $('.chief_mobile_1 > .chief_details_1').height();
  var bar = $('.page_2 > .chieves_nav').height();
  // Calcul du margin top
  var calculus = bar + picture + description - windows_height;
  console.log(calculus)
  $('.page_3').css({'margin-top': Math.max(0, calculus ) });
});
