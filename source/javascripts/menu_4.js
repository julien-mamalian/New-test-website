$(document).ready(function(){


  $('.chief_picture2').hide();
  $('.chief_details_2').hide();


  $('.our_sous_chef').on('click', function(){
    $('.chief_picture').fadeOut(0);
    $('.chief_details_1').fadeOut(0);

    $('.chief_picture2').fadeIn(1500);
    $('.chief_details_2').fadeIn(1500);
  })
  $('.our_chef').on('click', function(){
    $('.chief_picture2').fadeOut(0);
    $('.chief_details_2').fadeOut(0);

    $('.chief_picture').fadeIn(1500);
    $('.chief_details_1').fadeIn(1500);
  })
});
