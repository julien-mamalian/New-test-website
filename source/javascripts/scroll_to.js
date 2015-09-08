$(document).ready(function(){

  $("#anchor1").click(function() {
      $('html, body').animate({
          scrollTop: $("#page2").offset().top
      }, 1000);
      return false;
  });

  $("#anchor2").click(function() {
      $('html, body').animate({
          scrollTop: $("#page3").offset().top
      }, 1000);
      return false;
  });
  $("#anchor2_mobile").click(function() {
      $('html, body').animate({
          scrollTop: $("#page3").offset().top
      }, 1000);
      return false;
  });
  $("#anchor_2_mobile").click(function() {
      $('html, body').animate({
          scrollTop: $("#page3").offset().top
      }, 1000);
      return false;
  });
  $("#anchor3").click(function() {
      $('html, body').animate({
          scrollTop: $("#page4").offset().top
      }, 1000);
      return false;
  });
  $("#anchor4").click(function() {
      $('html, body').animate({
          scrollTop: $("#page5").offset().top
      }, 1000);
      return false;
  });
  $("#anchor5").click(function() {
      $('html, body').animate({
          scrollTop: $("#page6").offset().top
      }, 1000);
      return false;
  });
});
