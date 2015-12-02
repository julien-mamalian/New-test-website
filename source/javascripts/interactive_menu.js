$(document).ready(function(){

  // Hidden overflow
  // Add menu bouton
  // Finish menu design



  var MenuWidth = $('.menu').width() * -1;

  $('.menu_hamburger').on('click', function(){
    $(this).hide();
    MenuWidth = $('.menu').width() * -1;

    $('#activated_zone').css({
      'display': 'block'
    })

    $('.menu').animate({
      'right': 0
    }, 1000);
    $('[id^="page"]').animate({
      'left': MenuWidth
    }, 1000);
  });


  $('.closed').on('click', function(){
    MenuWidth = $('.menu').width() * -1;
    $('#activated_zone').css({
      'display': 'none'
    });
    $('.menu').animate({
      'right': MenuWidth
    }, 1000);
    $('[id^="page"]').animate({
      'left': '0'
    }, 1000);
    $('.menu_hamburger').fadeIn(500);

  });

  $('#activated_zone').on('click',function(){
    var LinkTo = $(this).find('.link_menu').attr('href');
    $(this).css({
      'display': 'none'
    })
    $('.menu').animate({
      'right': MenuWidth
    }, 1000);
    $('[id^="page"]').animate({
      'left': '0'
    }, 1000);
    $('.menu_hamburger').fadeIn(500);
    $('html, body').delay(1000).animate({
      scrollTop: $(LinkTo).offset().top
    }, 1000);

  });

  $('.rubriques li').on('click', function(event){
    event.preventDefault();
    var LinkTo = $(this).find('.link_menu').attr('href');
    MenuWidth = $('.menu').width() * -1;
    $('#activated_zone').css({
      'display': 'none'
    })
    $('.menu').animate({
      'right': MenuWidth
    }, 1000);
    $('[id^="page"]').animate({
      'left': '0'
    }, 1000);
    $('.menu_hamburger').fadeIn(500);
    $('html, body').delay(1000).animate({
      scrollTop: $(LinkTo).offset().top
    }, 1250);

  });
});
