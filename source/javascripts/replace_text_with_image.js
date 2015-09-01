$(document).ready(function () {
  $('.flex-next').each(function () {
      string = $(this).text('MENU');
      $(this).html('<i class="fa fa-angle-right fa-5x"></i>');
  });
  $('.flex-prev').each(function () {
      string = $(this).text('MENU');
      $(this).html('<i class="fa fa-angle-right fa-5x fa-rotate-180"></i>');
  });
});
