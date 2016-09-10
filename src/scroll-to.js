$(document).on("click", "[data-scroll-to]", function () {
  var target = $($(this).data("scroll-to"));
  var offset = parseInt($(this).data("scroll-offset"));
  $("body, html").animate({
    scrollTop: target.offset().top - (offset ? offset : 0)
  });
});