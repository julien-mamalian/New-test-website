$(document).ready(function(){
  $('.menu').hide();
  $('.closed').on('click', function(){
    $('.menu').hide();
    $('.menu_link').show();
  });
  $('.menu_link').on('click', function(){
    $('.menu').show();
    $(this).hide();
  });
});
