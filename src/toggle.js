$(document).on("click", "[data-toggle]", function (event) {
	var target = $($(this).attr("data-toggle"));
  target.toggleClass("active");
  target.slideToggle();
  target.trigger("toggle");
	$(this).toggleClass("active");
	$(this).trigger("toggle");
  console.log("click");
});


$(document).ready(function () {

  $("[data-toggle]").each(function () {
    var target = $($(this).data("toggle"));
    if (!target.hasClass("active")) {
      target.slideUp();
    }
  });

  $("[data-persist-active]").each(function () {
    var element = $(this),
      id = element.attr("id");
    // console.log(element.get(0));
    if (localStorage.getItem("dataPersistActive"+id) == "true") {
      element.addClass("active");
      if(!element.attr("data-toggle")) {
        element.slideDown();
      }
    } else if (localStorage.getItem("dataPersistActive"+id) == "false") {
      element.removeClass("active");
      if(!element.attr("data-toggle")) {
        element.slideUp();
      }
    }
  });

  $("[data-persist-active]").on("toggle", function () {
    var element = $(this),
      id = element.attr("id");
    // console.log(element.get(0));
    if ($(this).hasClass("active")) {
      localStorage.setItem("dataPersistActive"+id, "true");
    } else {
      localStorage.setItem("dataPersistActive"+id, "false");
    }
  });
});