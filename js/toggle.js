(function () {
	function clearGroup (group) {
		eachSelector(document.body, "*[data-toggle-group='" + group +"']", function (item) {
			item.classList.remove("active");
			eachSelector(document.body, item.getAttribute("data-toggle"), function (target) {
				target.classList.remove("active");
			});
		});
	}

	function toggleTarget (rootElement, selector, force) {
		eachSelector(rootElement, selector, function (target) {
			if (force === undefined) {
				target.classList.toggle("active");
			} else if (!force) {
				target.classList.remove("active");
			} else if (force) {
				target.classList.add("active");
			}
			triggerEvent(target, "toggle");
		});
	}

	delegate(document, "click", "*[data-toggle]", function (event) {

		var groupName = this.getAttribute("data-toggle-group"),
			targetSelector = this.getAttribute("data-toggle"),
			isActive = this.classList.contains("active");

		if (groupName) {
			if (!isActive) {
				clearGroup(groupName);
				toggleTarget (document.body, targetSelector, true);
				this.classList.add("active");
			}
		} else {
			toggleTarget(document.body, targetSelector, !isActive);
			this.classList.toggle("active");
		}
	});

	// Инициализация
	function setInitial (rootElement) {
		var groups = {};
		eachSelector(rootElement, "*[data-toggle-group]", function (element) {
			var groupName = element.getAttribute("data-toggle-group");
			if (groupName) {
				groups[groupName] = true;
			}
			if (element.classList.contains("active")) {
				var targetSelector = element.getAttribute("data-toggle");
				eachSelector(rootElement, targetSelector, function (target) {
					target.classList.add("active");
				});
			}
		});

		for (var i in groups) {
			if (groups.hasOwnProperty(i)) {
				// console.log(i);
				if (rootElement.querySelectorAll("*[data-toggle-group='" + i + "'].active").length == 0) {
					var element = rootElement.querySelector("*[data-toggle-group='"+i+"']"),
						targetSelector = element.getAttribute("data-toggle");
					element.classList.add("active");
					toggleTarget(rootElement, targetSelector, true);
				}
			}
		}
	}

	document.addEventListener("DOMContentLoaded", function () {
		setInitial (document.body);
	});

	document.addEventListener("include", function (event) {
		setInitial(event.target);
	});

}());