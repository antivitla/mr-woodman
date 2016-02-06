/*
*	Типографская сеточка поверх страницы
*   mr-woodman.ru/js/typogrid
*
*   Базируется на существующем font-size/line-height
*   Вкл/выкл по кнопке "G" (исходно скрыта)
*   "Всё-в-одном", нужен только typogrid.js
*   Задать цвет строчек в переменной color, функции addTypogrid()
*   При перезагрузке помнит, спрятали ли мы сеточку
*   Чистый JavaScript 
*   Возможные проблемы совместимости:
*       - addEventListener
*       - classList
*       - rgba
*       - localStorage
*/


// Запускаем когда загрузилось всё полностью

window.addEventListener("load", function() {

    var grid, line, color, style;

    // клонируем кучу <p>&nbsp;</p> которые будут нашими строками,
    // внутрь нашего контейнера div.typogrid (тоже его создаём)
    // и цепляем всё это к <body>
    grid = document.createElement("div"); grid.classList.add("typogrid");
    line = document.createElement("p"); line.appendChild(document.createTextNode("\u00a0"));
    for(var i = 0; i < 200; i++) { grid.appendChild(line.cloneNode(true)); }; 
    document.body.appendChild(grid);

    // сами же и пишем стили для него,
    // цепляем тегом <style> в <head>
    color = { odd: "rgba(250, 199, 66, 0.35)", even: "transparent" }; // задаём клёвые цвета
    style = document.createElement("style"); style.appendChild(document.createTextNode(".typogrid { z-index: 9999; position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden; pointer-events: none; } .typogrid p { margin: 0 !important; padding: 0 !important; } .typogrid.hidden { display: none; } .typogrid p:nth-child(even) { background-color: " + color.even + "; } .typogrid p:nth-child(odd) { background-color: " + color.odd + "; }"));
    document.head.appendChild(style);

    // Не показываем первый раз или если спрятали её прошлый раз
    if(localStorage["typogrid"] != "visible") grid.classList.add("hidden");
});


// Прячем/показываем по кнопке "G"

document.addEventListener("keypress", function(event) {
	if(event.charCode == 103 || event.charCode == 1087) {
        document.querySelector(".typogrid").classList.toggle("hidden");
        
        // Запоминаем на следующий раз
        localStorage["typogrid"] = (localStorage["typogrid"] == "hidden") ? "visible" : "hidden";
    }
});