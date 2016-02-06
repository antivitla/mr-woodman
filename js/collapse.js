$(document).on("ready", function () {
		$("*[data-persist-active]").each(function () {
		var element = $(this),
			id = element.attr("id");
		console.log(element.get(0));
		if (localStorage.getItem("dataPersistActive"+id) == "true") {
			element.addClass("active");
		}
	});

	$("*[data-persist-active]").on("toggle", function () {
		var element = $(this),
			id = element.attr("id");
		console.log(element.get(0));
		if ($(this).hasClass("active")) {
			localStorage.setItem("dataPersistActive"+id, "true");
		} else {
			localStorage.removeItem("dataPersistActive"+id);
		}
	});
});