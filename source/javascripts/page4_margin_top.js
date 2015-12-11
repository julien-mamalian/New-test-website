$(document).ready(function(){
  var menu_height = $('.menu_zone').height();
   var page_height = $('.page_4').height();
   if (menu_height > page_height) {
     $('.page_4').css({
       'height': menu_height
     })

   } else {
     $('.page_4').css({
       'height': '100%'
     })
   }
   $(document).on('resize',function(){
     var menu_height = $('.menu_zone').height();
    var page_height = $('.page_4').height();
     if (menu_height > page_height) {
      console.log('yes')
       $('.page_4').css({
                'height': menu_height
       })

     } else {
       $('.page_4').css({
         'height': '100%'
       })
       console.log('no')
     }
   })
 });
