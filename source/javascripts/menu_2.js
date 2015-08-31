$(document).ready(function(){
  var height_all = $('#contain_under_home_1').height();
  $('#pict-content-container').css({
      'height': height_all * 0.52
    })

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    var x = $('#arrow-1').position().top
    if (y > x ) {
      $('#pict-content-container').animate({
        'height': height_all * 0.55
      }, 2000);
    }
  });
});
