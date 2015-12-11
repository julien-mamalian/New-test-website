$(document).ready(function(){
  window.sr = new scrollReveal();
  function SlideUpOnScroll(zone, page) {
    $(zone).css('bottom', '-30px');
    $(document).on('scroll',function(){
      var PagePosition = $(page).offset().top;
      var ScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      if (PagePosition == ScrollPosition) {
        $(zone).animate({
          'bottom' : '0'
        }, 2000)
      }
    })
    return false;
  }

  function SlideUpWithDelay(zone, page, duration) {
    $(zone).css('margin-top', '40px');
    $(document).on('scroll',function(){
      var PagePosition = $(page).offset().top;
      var ScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      if (PagePosition == ScrollPosition) {
        $(zone).animate({
          'margin-top' : '0'
        }, duration)
      }
    })
    return false;
  }

  // SlideUpOnScroll('.restaurant_details', '.page_3');
  // SlideUpOnScroll('.menu_zone', '.page_4');
  // SlideUpOnScroll('.contact', '.page_6');

//  SlideUpWithDelay('.hide_zone', '.page_2', 2000);
 // SlideUpWithDelay('.hide_zone_title', '.page_2', 1500);







});
