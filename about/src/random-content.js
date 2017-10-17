Array.prototype.slice.call(document.querySelectorAll("[data-random-content]"))
  .forEach(function (element) {
    var content = element.getAttribute("data-random-content").split("/");
    element.innerHTML = content[Math.floor(Math.random()*content.length)];
  });