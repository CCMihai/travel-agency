$(document).ready(function() {
var loadedCounter = false;
    $(window).scroll(function() {
   var anchor = $("#price");
   var offset = anchor.offset();
   var scrollTop =  $(window).scrollTop();
        if( scrollTop > offset.top && !loadedCounter){
          increaseCounter();
          loadedCounter = true;
        };

     });
   });
function increaseCounter(){
 $('.count').each(function() {
  $(this).prop('Counter', 0).animate({
   Counter: $(this).text()}, 
   {
   duration: 2000,
   easing: 'linear',
   step: function(now) {
    $(this).text(Math.ceil(now));
   }
  });
 });
}