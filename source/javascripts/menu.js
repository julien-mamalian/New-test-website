$(document).ready(function(){

 $('#menu-link').on('click', function(event){
    $('#menu-link').hide();


    $('#contentt').animate({
      'width': '82%'
    }, 1000);

    $('#menu').animate({
      'right': '0%',
      'min-width': '250px'
    }, 800);

    $('body').css({
      'overflow': 'hidden'
    });
});


  $('#quit').on('click', function(event){

  $('#menu').animate({
    'right': '-18%',
    'min-width': '0px'
  }, 1400);
  $('#contentt').animate({
    'width': '100%'
  }, 1400);

  $('body').css({
      'overflow': 'scroll'
  });



  $('#menu-link').delay(1000).show(0);
  });
});
