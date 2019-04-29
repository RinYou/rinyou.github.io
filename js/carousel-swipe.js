$(document).ready(function() {
  $("#index-slider").swiperight(function() {
    $(this).carousel('prev');
  });
  $("#index-slider").swipeleft(function() {
    $(this).carousel('next');
   });
});//滑動前一張、下一張