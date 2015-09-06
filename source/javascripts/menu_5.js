$(document).ready(function(){
  //Taille de l'écran
  $(document).on('scroll', function(){
    var windows_height = $('.page_1').height();
    // Taille des parties du menu 2
    var menu_height = $('.page_4 > .menu_zone').height();
    console.log(menu_height)

    // Calcul du margin top
    var calculus = menu_height - windows_height;

    $('.page_5').css({
      'margin-top': Math.max(0, calculus )
    });
  })
});
