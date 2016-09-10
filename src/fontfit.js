/*
*   Подгоняем размер шрифта чтоб текст вместился в одну строчку
*   на всю ширину родительского контейнера
*   mr-woodman.ru/js/fontfit
*
*   Функцию можно натравить на набор элементов (HTMLCollection) самостоятельно (после аякса/ресайза?)
*   По умолчанию она сама натравится на элементы с атрибутами data-fontfit
*   Чистый Javascript
*/

// Умеем есть HTMLCollection элементов

window.fontfit = function(collection) {

    var item, textWidth, width, lineHeight, fontSize,
        saveNativeStyle = function(item, rules) {
            var style = getComputedStyle(item);
            item.fontfitsave = item.fontfitsave || {};
            for(var i = 0; i < rules.length; i++) {
                item.fontfitsave[rules[i]] = style[rules[i]];
            }
        },
        restoreNativeStyle = function(item, rules) {
            for(var i = 0; i < rules.length; i++) {
                item.style[rules[i]] = item.fontfitsave[rules[i]];
            }
        };

    // Проходимся по каждому в коллекции
    for(var i = 0; i < collection.length; i++) {
        item = collection[i];

        // сохраняем текущие стили чтоб восстановить позже
        saveNativeStyle(item, ["display"]);

        // задаём инлайновое отображение в одну строчку чтоб узнать длину текста
        item.style.whiteSpace = "nowrap";
        item.style.display = "inline-block";
        textWidth = item.clientWidth;

        // теперь делаемся блоковым, чтоб понять на какую ширину мы рассчитываем
        item.style.display = "block";
        width = item.clientWidth;

        // Восстанавливаем исходные стили
        restoreNativeStyle(item, ["display"]);

        // вычисляем и ставим новый font-size
        fontSize = Math.floor((width / textWidth) * parseInt(getComputedStyle(item).fontSize));
        item.style.fontSize = fontSize + "px";


        // - а также подходящий line-height (кратный основному на сайте)
        lineHeight = parseInt(getComputedStyle(document.body).lineHeight);
        item.style.lineHeight = Math.round(fontSize / lineHeight) * lineHeight + "px";

        // Плюс анимашечку
        item.style.transition = "font-size 0.25s";
    }
};

document.addEventListener("DOMContentLoaded", function() {
    fontfit(document.querySelectorAll("[data-fontfit]"));
});

window.addEventListener("resize", function() {
    fontfit(document.querySelectorAll("[data-fontfit]"));
});