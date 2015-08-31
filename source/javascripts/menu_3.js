$(document).ready(function(){
  var height_all = $('#contain_under_home_2').height();
  $('#pict-content-container-2').css({
      'height': height_all * 0.65
    })

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    var x = $('#arrow-2').position().top;
    if (y > x ) {
      $('#pict-content-container-2').animate({
        'height': height_all * 0.70
      }, 3000);
    }
  });
});
