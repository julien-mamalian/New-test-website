$(document).ready(function(){

  function ScrollAnchor(anchor, page) {
    $(anchor).on('click',function(){
      $('html, body').animate({
        scrollTop: $(page).offset().top
      }, 1000);
    });
  };

  ScrollAnchor('#anchor1', '.page_2');
  ScrollAnchor('#anchor2', '.page_3');
  ScrollAnchor('#anchor3', '.page_4');
  ScrollAnchor('#anchor4', '.page_5');
  ScrollAnchor('#anchor5', '.page_6');
});
