$(document).ready(function(){

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

  SlideUpOnScroll('.restaurant_details', '.page_3');
  SlideUpOnScroll('.menu_zone', '.page_4');
  SlideUpOnScroll('.contact', '.page_6');

});
