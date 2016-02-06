var MrWoodman = MrWoodman || {};

MrWoodman.resources = [
	{
		title: "Лепим CSS3 градиенты",
		links: ["http://www.colorzilla.com/gradient-editor/"]
	},
	{
		title: "Unicode & Спецсимволы HTML",
		links: ["http://dev.w3.org/html5/html-author/charref", "http://unicode-table.com/ru/"]
	},
	{
		title: "Кавычки",
		links: ["http://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B2%D1%8B%D1%87%D0%BA%D0%B8"]
	},
	{
		title: "Генерируем image map",
		links: ["http://summerstyle.github.io/summer/"]
	},
	{
		title: "Плейсхолдеры картинок",
		links: ["http://placekitten.com"]
	},
	{
		title: "Прелоадеры",
		links: ["http://preloaders.net/ru"]
	},
	{
		title: "Генерация спрайтов",
		links: ["http://www.google.ru/search?q=generate+css+sprites+online", "http://css.spritegen.com/"]
	},
	{
		title: "Перевод картинок в base64",
		links: ["http://webcodertools.com/imagetobase64converter/"]
	},
	{
		title: "Иконки в шрифт",
		links: ["http://icomoon.io/app/#/select", "http://fontastic.me/app"],
		highlight: true
	},
	{
		title: "JavaScript/JSON анминифайер",
		links: ["http://jsbeautifier.org/"]
	},
	{
		title: "Сборка и потрошение GIF-анимаций",
		links: ["http://ezgif.com/"]
	},
	{
		title: "Карусели",
		links: ["http://fotorama.io/", "http://owlgraphic.com/owlcarousel/", "http://jquerytools.org/"]
	},
	{
		title: "Конструкторы карт",
		links: ["http://developers.google.com/maps/documentation/embed/start?hl=ru", "http://api.yandex.ru/maps/tools/constructor/"]
	},
	{
		title: "Анализ PSD",
		links: ["https://projectparfait.adobe.com/"]
	},
	{
		title: "ANSI art",
		links: ["http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Utilities"]
	},
	{
		title: "Разрешения iPhone",
		links: ["http://www.iphoneresolution.com/"]
	},
	{
		title: "Расчет размеров шрифтов",
		links: ["http://type-scale.com/", "http://modularscale.com/"]
	},
	{
		title: "Конвертеры XML&rarr;JSON и др.",
		links: ["http://codebeautify.org/xmltojson/"]
	},
	{
		title: "Regexp хелп &amp; тест онлайн",
		links: ["http://www.regexr.com/","http://regex101.com/"]
	},
	{
		title: "Favicon вакханалия",
		links: ["http://realfavicongenerator.net/"]
	}
];

function getResourceHTML(resourceJSON) {
	var li = $("<li"+ (resourceJSON.highlight ? " class='highlight'" : "") + ">" + resourceJSON.title + "</li>");
	var links = '';
	for(var i = 0; i < resourceJSON.links.length; i++) {
		links += '<a href="' + resourceJSON.links[i] + '" target="_blank">'
						+ trimLink(resourceJSON.links[i])
						+ '</a>';
		if(resourceJSON.links.length > 1) {
			links += "<br>";
		}
	}
	li.append("<br><small>" + links + "</small>");
	return li;
}

function trimLink(link) {
	var t = "";
	t = link.split("http://").length > 1 ? link.split("http://")[1] : link.split("http://")[0];
	t = t.split("www.").length > 1 ? t.split("www.")[1] : t.split("www.")[0];
	t = t.split("#")[0];
	t = t.split("?")[0];
	t = decodeURIComponent(t);
	return t;
}