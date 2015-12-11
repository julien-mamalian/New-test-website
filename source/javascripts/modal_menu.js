$(document).ready(function(){
  $('.modal_menu').hide();


  $('.menu_text').on('click',function() {
    $('.modal_menu').show();
    $('body').css({ 'overflow' : 'hidden'})
  });
  $('.cross_zone').on('click',function() {
    $('.modal_menu').hide();
  });
});
