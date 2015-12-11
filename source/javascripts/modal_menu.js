$(document).ready(function(){
  $('.modal_menu').hide();


  $('.menu_text').on('click',function() {
    $('.modal_menu').show();
    $.fn.fullpage.destroy();
    $('body').css({ 'overflow-y' : 'hidden'});
  });
  $('.cross_zone').on('click',function() {
    $('.modal_menu').hide();
    $('#fullpage').fullpage();
  });
});
