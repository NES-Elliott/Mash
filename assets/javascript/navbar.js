$(document).ready(function(){
  $(".dropdown-toggle").on("click", function() {
    if ($(this).attr("aria-expanded") === "false") {
      $(this).parent().addClass("show");
      $(this).attr("aria-expanded", "true");
    } else if ($(this).attr("aria-expanded") === "true") {
      $(this).parent().removeClass("show");
      $(this).attr("aria-expanded", "false");
    };
  });
});