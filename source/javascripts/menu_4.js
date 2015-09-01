$(document).ready(function(){
  if("matchMedia" in window) { // Détection
      if(window.matchMedia("(min-width:769px)").matches) {
        $('#two_2').removeClass("active_li");
        $('.chief_2').hide();

        $('.our_sous_chef').on('click', function(){
          $('.chief_1').fadeOut(500);
          $('.chief_2').fadeIn(1200);

          $('#one_2').removeClass("active_li");
          $('#two_2').addClass("active_li");

        })
        $('.our_chef').on('click', function(){
          $('.chief_2').fadeOut(500);
          $('.chief_1').fadeIn(1200);

          $('#two_2').removeClass("active_li");
          $('#one_2').addClass("active_li");
        })

      } else {
        $('.chief_mobile_2').hide();
        $('#two_2').removeClass("active_li");

        $('.our_sous_chef').on('click', function(){
          $('.chief_mobile_1').fadeOut(500);
          $('.chief_mobile_2').fadeIn(1200);

          $('#one_2').removeClass("active_li");
          $('#two_2').addClass("active_li");
        })
        $('.our_chef').on('click', function(){
          $('.chief_mobile_2').fadeOut(500);
          $('.chief_mobile_1').fadeIn(1200);

          $('#two_2').removeClass("active_li");
          $('#one_2').addClass("active_li");
        })
      }
    }

});
