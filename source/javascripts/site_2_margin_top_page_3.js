$(document).ready(function(){
  $(document).on('scroll', function(){
    //Taille de l'écran
    var windows_height = $('.page_1').height();
    // Taille des parties du menu 2
    var picture = $('.chief_mobile_1 > .chief_picture').height();
    var description = $('.chief_mobile_1 > .chief_details_1').height();
    var bar = $('.page_2 > .chieves_nav').height();
    // Calcul du margin top
    var calculus_1 = bar + picture + description - windows_height;



    //Taille de l'écran

    // Taille des parties du menu 2
    var picture2 = $('.chief_mobile_2 > .chief_picture2').height();
    var description2 = $('.chief_mobile_2 > .chief_details_2').height();
    // Calcul du margin top
    var calculus_2 = bar + picture2 + description2 - windows_height;

    var calculus_3 = Math.max(calculus_1, calculus_2)

    $('.page_3').css({'margin-top': Math.max(0, calculus_3 ) });
  });
});
