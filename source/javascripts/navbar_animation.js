$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $('.navbar').css({
        'background-color': 'rgba(253,241,184,1)'
      });
    } else {
      $('.navbar').css({
        'background-color': 'rgba(253,241,184,0.8)'
      });
    };
  });
});
