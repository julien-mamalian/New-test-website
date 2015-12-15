$(document).ready(function() {
  var SectionActivated = 1;
  var MenuWidth = $('.menu').width() * -1;

  $('#fullpage').fullpage({

    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      SectionActivated = index;
      ownlazyLoad(SectionActivated);
    }
  });

  // Menu du site internet

  function OverflowHidden(Decision) {
    if (Decision == true) {
      $('body').css({ 'overflow' : 'hidden'});

    } else {
      $('body').css({ 'overflow' : 'visible'});
    }
  }

  function FullPageState(State) {
    if (State == true) {
      $('#fullpage').fullpage({

        afterLoad: function(anchorLink, index){
          var loadedSection = $(this);
          SectionActivated = index;
          ownlazyLoad(SectionActivated);
        }
      });
    } else {
      $.fn.fullpage.destroy();
    }
  }

  function MenuRight(number) {
    $('.menu').animate({
      'right': number
    }, 1000);
  }

  function ActivatedZone(TypeOfDIsplay) {
    $('#activated_zone').css({
      'display': TypeOfDIsplay
    })
  }

  $('.menu_hamburger').on('click', function(){
    $(this).hide();
    MenuWidth = $('.menu').width() * -1;

    ActivatedZone('block');
    FullPageState(false);
    OverflowHidden(true);
    MenuRight(0);

    $('#page' + SectionActivated).animate({
      'left': MenuWidth
    }, 1000);
  });


  $('.closed').on('click', function(){
    MenuWidth = $('.menu').width() * -1;

    ActivatedZone('none');
    OverflowHidden(false);

    if (window.matchMedia("screen and (max-width:768px)").matches) {

    } else{
      FullPageState(true);
    }

    MenuRight(MenuWidth);

    $('#page' + SectionActivated).animate({
      'left': '0'
    }, 1000);
    $('.menu_hamburger').fadeIn(500);

  });

  $('#activated_zone').on('click',function(){
    var LinkTo = $(this).find('.link_menu').attr('href');

    ActivatedZone('none');
    OverflowHidden(false);
    if (window.matchMedia("screen and (max-width:768px)").matches) {

    } else{
      FullPageState(true);
    }
    MenuRight(MenuWidth);

    $('#page' + SectionActivated).animate({
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
    OverflowHidden(false);
    ActivatedZone('none');
    if (window.matchMedia("screen and (max-width:768px)").matches) {

    } else{
      FullPageState(true);
    }
    MenuRight(MenuWidth);

    $('#page' + SectionActivated).animate({
      'left': '0'
    }, 1000);
    $('.menu_hamburger').fadeIn(500);
    $('html, body').delay(1000).animate({
      scrollTop: $(LinkTo).offset().top
    }, 1250);

  });


  function ownlazyLoad(number) {
    //Lazy loading images, videos and audios
    var Section = number + 1;
    $('#page' + Section).find('img[data-src], soure[data-src], audio[data-src]').each(function(){
      $(this).attr('src', $(this).data('src'));
      $(this).removeAttr('data-src');

      if($(this).is('source')){
          $(this).closest('video').get(0).load();
      }
    });
  };


  // MOdale

  $('.modal_menu').hide();


  $('.menu_text').on('click',function() {
    $('.modal_menu').fadeIn(1700);
    $.fn.fullpage.destroy();
    $('body').css({ 'overflow-y' : 'hidden'});
  });
  $('.cross_zone').on('click',function() {
    $('.modal_menu').fadeOut(1700);

    if (window.matchMedia("screen and (max-width:768px)").matches) {

    } else{
      FullPageState(true);
    }
  });



});

