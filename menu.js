window.onload = function() {
  $(".button-container").click(function(){
    $(".button-container").toggleClass("active");
    $(".menu").toggleClass("active");
    $(".title").toggleClass("active");
  });
}
