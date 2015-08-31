// Menu 2, height

$(document).ready(function(){
  var height = $('#menu-2').height();

  $('.pict-content').css({
    'height': height * 0.60
  });

  var height_all = $('#contain_under_home_1').height();
  $('#row-1').css({
    'height': height_all * 0.70
  })
  $('.first_band').css({
    'height': height_all * 0.30
     });


  $('#menu-2').css({
    'height': height_all * 0.70
  })
  $('#menu-3').css({
    'height': height_all
  })

  $('#food_1').css({
    'height': height_all
  })
  $('#food_2').css({
    'height': height_all
  })

});

