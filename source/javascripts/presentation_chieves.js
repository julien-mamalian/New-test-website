$(document).ready(function(){
  $('#two_2').removeClass("active_li");

  $('.our_sous_chef').on('click', function(){
    if( $('.version_nonmobile').is(':visible') ) {
      $('.chief_1').fadeOut(500);
      $('.chief_2').fadeIn(1200);

      $('#one_2').removeClass("active_li");
      $('#two_2').addClass("active_li");
    } else {
      $('.chief_mobile_1').fadeOut(500);
      $('.chief_mobile_2').fadeIn(1200);

      $('#one_2').removeClass("active_li");
      $('#two_2').addClass("active_li");
    }
  })

  $('.our_chef').on('click', function(){
    if( $('.version_nonmobile').is(':visible') ) {
      $('.chief_2').fadeOut(500);
      $('.chief_1').fadeIn(1200);

      $('#two_2').removeClass("active_li");
      $('#one_2').addClass("active_li");
    } else {
      $('.chief_mobile_2').fadeOut(500);
      $('.chief_mobile_1').fadeIn(1200);

      $('#two_2').removeClass("active_li");
      $('#one_2').addClass("active_li");
    }
  })
});
