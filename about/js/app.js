Array.prototype.slice.call(document.querySelectorAll("[data-random-content]"))
  .forEach(function (element) {
    var content = element.getAttribute("data-random-content").split("/");
    element.innerHTML = content[Math.floor(Math.random()*content.length)];
  });
var MrWoodman = MrWoodman || {};

MrWoodman.resources = [
	{
		title: "Лепим CSS3 градиенты",
		links: ["http://www.colorzilla.com/gradient-editor/"]
	},
	{
		title: "Иконки в шрифт",
		links: ["http://icomoon.io/app/#/select", "http://fontastic.me/app"],
		highlight: true
	},
	{
		title: "ANSI art",
		links: ["http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Utilities"]
	},
	{
		title: "Unicode & HTML entities",
		links: ["http://dev.w3.org/html5/html-author/charref", "http://unicode-table.com/ru/"]
	},
/*	{
		title: "Кавычки",
		links: ["http://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B2%D1%8B%D1%87%D0%BA%D0%B8"]
	},
*/	{
		title: "Генерируем image map",
		links: ["http://summerstyle.github.io/summer/"]
	},
	{
		title: "Плейсхолдеры картинок",
		links: ["http://placekitten.com"]
	},
	// {
	// 	title: "Прелоадеры",
	// 	links: ["http://preloaders.net/ru"]
	// },
	{
		title: "Перевод картинок в base64",
		links: ["http://webcodertools.com/imagetobase64converter/"]
	},
	{
		title: "JavaScript/JSON бьютифаер",
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
		title: "Разрешения iPhone",
		links: ["http://www.iphoneresolution.com/"]
	},
/*	{
		title: "Расчет размеров шрифтов",
		links: ["http://type-scale.com/", "http://modularscale.com/"]
	},*/
	{
		title: "Конвертеры XML&rarr;JSON и др.",
		links: ["http://codebeautify.org/xmltojson/"]
	},
	{
		title: "Regexp хелп &amp; тест онлайн",
		links: ["http://www.regexr.com/","http://regex101.com/"]
	},
/*	{
		title: "Favicon вакханалия",
		links: ["http://realfavicongenerator.net/"]
	}*/
];

function getResourceHTML(resourceJSON) {
	var li = $("<li"+ (resourceJSON.highlight ? " class='highlight'" : "") + "><div>" + resourceJSON.title + "</div></li>");
	var links = '';
	for(var i = 0; i < resourceJSON.links.length; i++) {
		links += '<a href="' + resourceJSON.links[i] + '" target="_blank">'
						+ trimLink(resourceJSON.links[i])
						+ '</a>';
		if(resourceJSON.links.length > 1) {
			links += "<br>";
		}
	}
	li.append("<div><small>" + links + "</small></div>");
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

$(document).ready(function () {
  for(var i = 0; i < MrWoodman.resources.length; i++) {
    $("#resources").find("ul").append(getResourceHTML(MrWoodman.resources[i]));
  }
});

$(document).on("click", "[data-scroll-to]", function () {
  var target = $($(this).data("scroll-to"));
  var offset = parseInt($(this).data("scroll-offset"));
  $("body, html").animate({
    scrollTop: target.offset().top - (offset ? offset : 0)
  });
});
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
var MrWoodman = MrWoodman || {};
MrWoodman.works = [
	// {
	// 	title: "Магазин-ателье Ito-sama",
	// 	path: "2009-xx ito-sama/www/",
	// 	pages: ["http://ito-sama.ru/index.php","http://ito-sama.ru/catalog.php","http://ito-sama.ru/fabric.php"],
	// 	description: "Мужская и женская одежда, революционная бахрома детектед.",
	// 	devices: "desktop",
	// 	alive: "http://ito-sama.ru"
	// },
	{
		title: "PCNews",
		path: "2009-07 neq4 - pcnews/www/",
		pages: ["pcnews-start.html","pcnews-index-news.html","pcnews-article-top20.html","pcnews-search-results.html","pcnews-tear.html","pcnews-text.html"],
		description: "Beware! 2009 год, первый летописный заказ, ох и намучался я с ним.",
		devices: "desktop",
		alive: "http://pcnews.ru"
	},
	{
		title: "КиноЗавод",
		path: "2009-07 slava komarov - kinozavod/www/",
		pages: ["index-202.html","index-302.html","index-402.html","index-502.html","index-602.html"],
		description: "Операторское оборудование",
		devices: "desktop",
		alive: "http://www.kinozavod.ru"
	},
	{
		title: "Little Fish",
		path: "2009-08 smile - little-fish v1/www/",
		pages: ["index.html"],
		description: "Старый дизайн студии рисунка little-fish",
		devices: "desktop"
	},
	{
		title: "Aster Gold",
		path: "2009-10 roman mandrik - aster gold/www/",
		pages: ["astergold.html","astergold-basket.html","astergold-inner.html","astergold-order-register.html","astergold-product.html","astergold-profile.html","astergold-static-page.html"],
		description: "Брюлики & колечки",
		devices: "desktop"
	},
	{
		title: "Сны i секреты",
		path: "2009-12 roman mandrik - sni i secreti/www/",
		pages: ["sny-main.html","sny-basket.html","sny-catalog.html","sny-checkout.html","sny-product.html","sny-text.html"],
		description: "Интернет-магазин подушек и спанья",
		devices: "desktop"
	},
	{
		title: "Mr. Woodman v1.0",
		path: "2010-xx mr-woodman v1/www/",
		pages: ["index.html"],
		description: "Мой мегасайт первой версии. #Дизайн",
		devices: "desktop"
	},

	{
		title: "Маша Краснова-Шабаева",
		path: "2010-04 sergey kruk - masha krasnova-shabaeva/www/",
		pages: ["main.html","background-ver1.html","background-ver2.html","background-ver3.html","blog.html","post-and-comments.html"],
		description: "Нужно признать современное искусство я совершенно не врубаю, но верстать это не мешает.",
		devices: "desktop",
		alive: "http://mashushka.com"
	},
	{
		title: "Western Union",
		path: "2010-05 aries - western union/www/",
		pages: ["wu-search-mainpage.html","wu-search-citiespage.html","wu-search-officepage.html"],
		description: "Поиск офисов",
		devices: "desktop",
		alive: "http://maps.westernunion.ru"
	},
	{
		title: "Друидский калькулятор",
		path: "2010-06 krvss - resto druid healer calculator/www/",
		pages: ["index.html"],
		description: "Строим ресто-билды. #lolW00t",
		devices: "desktop",
		alive: "http://treecalcs.com"
	},
	{
		title: "Серебро Непала",
		path: "2010-07 roman vorushin - serebro nepala/www/",
		pages: ["serebro-main.html","serebro-basket.html","serebro-form.html","serebro-info.html","serebro-tovar.html"],
		description: "Интернет-магазин прикольных безделушек",
		devices: "desktop"
	},
	{
		title: "Nia Style",
		path: "2010-09 eugene mesherjakov - nia style/www/",
		pages: ["nia-style-default.html","nia-style-art.html","nia-style-cat1.html","nia-style-cat2.html","nia-style-text.html"],
		description: "Что-то несусветное (<q>ня-стайл</q>??), но такое я тоже верстаю",
		devices: "desktop",
	},
	{
		title: "SmartTrans",
		path: "2010-10 al-niko - smarttrans/www/",
		pages: ["smarttrans-about.html"],
		description: "Это не транспорт, это языковые переводы",
		devices: "desktop",
	},
	{
		title: "UniCredit",
		path: "2010-11 dasha karandasheva - unicredit widget/www/",
		pages: ["index.html"],
		description: "Виджет для Mac",
		devices: "desktop",
	},
	{
		title: "Ухтышка",
		path: "2011-03 smile - uhtyshka/www/",
		pages: ["uhty-main.html","uhty-about-us.html","uhty-activation.html","uhty-contacts.html","uhty-dostavka.html","uhty-goodies.html","uhty-how-this-works.html","uhty-photo.html","uhty-product.html"],
		description: "Скромно но мило",
		devices: "desktop",
	},
	{
		title: "YogaDa",
		path: "2011-05 seanat - yogada/www/",
		pages: ["yogada-main.html","yogada-404.html","yogada-all-users.html","yogada-blog.html","yogada-blog-post.html","yogada-blogs.html","yogada-blogs-all-entries.html","yogada-blogs-newpost.html","yogada-comments.html","yogada-eastpractices.html","yogada-freedive.html","yogada-main-login.html","yogada-meroprijatija.html","yogada-news.html","yogada-photo.html","yogada-photos.html","yogada-photos-album.html","yogada-places.html","yogada-profile.html","yogada-search-results.html","yogada-text.html","yogada-text-print.html","yogada-texts.html","yogada-theme.html","yogada-themes.html","yogada-travel.html","yogada-videos.html","yogada-zaglushka.html"],
		description: "Переусложненный сайт, ошеломляющее ведение проекта. #МильярдШаблонов, #МильярдПравок",
		devices: "desktop",
	},
	{
		title: "Лекция Ahmad Tea",
		path: "2011-07 samartsev - ahmad tea lecture/www/",
		pages: ["index.html"],
		description: "Про чай, естественно. Простенько, но четко.",
		devices: "desktop",
	},
	{
		title: "Bars",
		path: "2011-08 dima komissarov - bars/www/",
		pages: ["bars-index.html","bars-advantages.html","bars-all-over-russia.html","bars-configurator.html","bars-contacts.html","bars-dealer.html","bars-dealers.html","bars-door-cover-ebony.html","bars-door-covers.html","bars-door-cover-venge.html","bars-door-design-classica.html","bars-door-designs.html","bars-information.html","bars-photogallery.html"],
		description: "Навороченная вёрстка про двери. #КрутаяРезина, #МильярдШаблонов",
		devices: "desktop",
	},
	{
		title: "Bars II",
		path: "2011-08 dima komissarov - bars 2/www/",
		pages: ["bars2-index.html","bars2-about.html","bars2-about-old.html","bars2-dealers.html","bars2-doors.html","bars2-doors-locksnhandles.html","bars2-doors-nonstandard.html","bars2-doors-whybars.html","bars2-forum-post-comments.html","bars2-forum-posts-list.html","bars2-konfigurator-models.html","bars2-konfigurator-vars.html","bars2-konfigurator-vars2.html","bars2-minora.html","bars2-minora-about.html","bars2-minora-techs.html","bars2-minora-vars.html","bars2-showroom.html","bars2-showroom-print.html"],
		description: "Вторая версия сайта. #КрутаяРезина",
		devices: "desktop",
		alive: "http://www.barsdoors.ru"
	},
	{
		title: "Bars",
		path: "2011-08 dima komissarov - bars for designers/www/",
		pages: ["bars2designers-index.html","bars2designers-scheme.html","bars2designers-reserve.html","bars2designers-photo.html"],
		description: "Двери. Сайт производителя для дизайнеров интерьеров",
		devices: "desktop",
	},
	{
		title: "Адвокатский клуб",
		path: "2011-12 dima komissarov - advocate club/www/",
		pages: ["ac-index-temp.html","ac-index-customers.html","ac-index-advocats.html","customers-index.html","customers-how.html","customers-faq.html","advocats-registration.html","advocats-privileges.html","ac-reviews.html","ac-info.html","ac-how-customers.html","ac-customer-personal-cabinet.html","ac-article.html","ac-advocat-homepage.html","ac-advices.html"],
		description: "Мильярд шаблонов, интересные ходы с шрифтами и дореволюционный виджет <q>аккордеон</q>",
		devices: "desktop",
	},
	{
		title: "Facebook-магазин Ahmad Tea",
		path: "2012-03 aries - ahmad tea facebook/www/",
		pages: ["ahmad-index.html","ahmad-category.html","ahmad-search.html","ahmad-item.html","ahmad-step1.html","ahmad-history.html","ahmad-step3.html","ahmad-email.html","ahmad-step4.html","ahmad-step2.html","ahmad-about.html"],
		description: "Просто и клево",
		devices: "desktop tablet",
		alive: "https://apps.facebook.com/ahmadteastore/"
	},
	{
		title: "Дымов",
		path: "2012-04 rudy - dymov/www/",
		pages: ["dymov-index.html","dymov-recepty.html","dymov-recepty-inside.html","dymov-produkcia.html","dymov-produkcia-inside.html","dymov-o-nas.html","dymov-novosti.html","dymov-novosti-inside.html","dymov-kontakty.html","dymov-karjera.html","dymov-kachestvo-i-bezopasnost.html","dymov-istorija.html","dymov-investoram.html"],
		description: "Мясо. Колбаса. Даже ТВ-канал про котлеты! В общем, простой информационный сайт/интернет-магазин",
		devices: "desktop",
		alive: "http://v-dymov.ru"
	},
	{
		title: "Ост-мед",
		path: "2012-06 handyweb - ostmed/www/",
		pages: ["index.html"],
		description: "Мобильный сайт про медиков",
		devices: "mobile",
	},
	{
		title: "Открытка Ahmad Tea",
		path: "2012-12 aries - ahmad new year/www/",
		pages: ["index.html"],
		description: "На новый год. Снег детектед. И <q>всё на мне шевелится</q>",
		devices: "desktop",
	},
	{
		title: "Киндерино",
		path: "2012-xx aries - kinderino/www/",
		pages: ["kinder-index.html"],
		description: "Страшная в своей сложности анимация. #AdobeEdge",
		devices: "desktop",
	},
	{
		title: "Трансдепот",
		path: "2012-xx aries - transdepot/www/",
		pages: ["transdepot-index.html","transdepot-tamozhennoe-oformlenie.html","transdepot-dostavka-gruzov.html","transdepot-cabinet.html","transdepot-autsorsing-ved.html","transdepot-about.html"],
		description: "Пролетарно, про машинки & помороченный калькулятор на главной.",
		devices: "desktop",
		alive: "http://transdepot.ru"
	},
	{
		title: "Броско Home Couture",
		path: "2012-xx dima komissarov - brosko/www/",
		pages: ["brosko-index.html","brosko-catalog.html","brosko-category.html","brosko-product.html","brosko-text.html"],
		description: "Понтовым штукам - понтовый дизайн. #КрутаяРезина",
		devices: "desktop",
		alive: "http://brosko-home.ru"
	},
	{
		title: "Capital View",
		path: "2012-xx dima komissarov - capital view/www/",
		pages: ["capitalview-index.html","capitalview-projectmembers.html","capitalview-katok.html","capitalview-about.html"],
		description: "А это полный улёт потому что 3d transformations. Мы как-бы внутри цилиндра, надо понаводить на меню. #3dУлёт, #Укачивает",
		devices: "desktop",
	},
	{
		title: "Любовь",
		path: "2012-xx dima komissarov - dk love/www/",
		pages: ["index.html"],
		description: "Что-то явно милое, но непонятное... )))",
		devices: "desktop",
	},
	{
		title: "Американская мечта на Дмитровке",
		path: "2012-xx dima komissarov - dmitrovka/www/",
		pages: ["index.html"],
		description: "Гениальный css-мудрёж с глобусом. Это заглушка. #КрутаяРезина",
		devices: "desktop",
	},
	{
		title: "Национальный сквош-центр",
		path: "2012-xx dima komissarov - squash/www/",
		pages: ["index.html","reserve.html","profile.html","player.html","knowledge.html","ratings.html","players.html","tournament.html","tournaments.html","club.html","news.html","rules.html","clubs.html"],
		description: "Помороченный информационный сайт по турнирам",
		devices: "desktop",
	},

	{
		title: "Територрия удовольствия",
		path: "2012-xx dima komissarov - terra pleasure/www/",
		pages: ["tu-index.html","tu-wine.html","tu-gift.html","tu-wines.html","tu-review.html","tu-recommend-articles.html","tu-recommend-article.html","tu-index.html","tu-gifts.html","tu-contacts.html","tu-about.html"],
		description: "Про бухло. Красиво, с бутылками.",
		devices: "desktop",
	},
	{
		title: "Коттеджи Весенино",
		path: "2012-xx dima komissarov - vesenino 1/www/",
		pages: ["index.html#no-animation","raspolozhenie.html","novosti.html","kontakty.html","kommunikacii-i-materialy.html","infrastruktura-rajona.html","infrastruktura-poselka.html","genplan.html","ekologija.html","developer.html","detjam.html"],
		description: "Прикольный дизайн. #Поморочка, #КрутаяРезина",
		devices: "desktop",
		alive: "http://www.vesenino.ru"
	},
	{
		title: "Коттеджи Весенино (переделка)",
		path: "2012-xx dima komissarov - vesenino 3/www/",
		pages: ["index.html","vid-sverhu.html","s-zabotoj-o-detjah.html","readme-changes.html","novosti.html","kontakty.html","kak-proehat.html","chto-poblizosti.html","article-novosti.html"],
		description: "Жуткое дело - третья версия сайта. #КрутаяРезина",
		devices: "desktop",
		alive: "http://www.vesenino.ru"
	},
	{
		title: "Tiktok Lunatik",
		path: "2012-xx sambul - lunatik/www/",
		pages: ["lunatiktok-index.html", "lunatiktok-ipod.html","lunatiktok-inner-tiktok.html","lunatiktok-inner-lunatik.html","lunatiktok-inner-lunatik-not-present.html","lunatiktok-history.html","lunatiktok-feedback.html","lunatiktok-complects.html","lunatiktok-buy-step-6.html","lunatiktok-buy-step-5.html","lunatiktok-buy-step-4.html","lunatiktok-buy-step-3.html","lunatiktok-buy-step-2c.html","lunatiktok-faq.html","lunatiktok-buy-step-2b.html","lunatiktok-buy-step-2a.html","lunatiktok-buy-step-1b.html","lunatiktok-buy-step-1a.html","lunatiktok-accessories.html","lunatiktok-accessories-and-all.html","lunatiktok-about.html"],
		description: "Интересный был дизайн... #ПриAppleнность",
		devices: "desktop",
		alive: "https://www.tiktok-lunatik.ru"
	},
	{
		title: "Сайт Ahmad Tea",
		path: "2013-03 masha niggol - ahmad/www/",
		pages: ["ahmad-index.html","ahmad-404.html","ahmad-chajnaja-karta.html","ahmad-chajnyj-slovar.html","ahmad-contemporary.html","ahmad-faq.html","ahmad-filtr-po-tegu.html","ahmad-kontakty.html","ahmad-novejshaja-istorija.html","ahmad-rezultaty-poiska-po-articulu.html","ahmad-rezultaty-poiska-po-materialam.html","ahmad-tea.html","ahmad-tea-times.html","ahmad-tea-times-afisha.html","ahmad-tea-times-article.html","ahmad-tea-times-article-afisha.html","ahmad-tea-times-article-gallery.html","ahmad-tea-times-article-photos.html","ahmad-tea-times-events.html","ahmad-tea-times-gallery.html","ahmad-tea-times-moscow-map.html","ahmad-tea-times-polls.html","ahmad-tea-times-recommends.html"],
		description: "Куча чаезапчастей, отдельный микросайт в виде газеты",
		devices: "desktop",
		alive: "http://ahmadtea.ru"
	},
	{
		title: "Кото-интерактив Ahmad Tea",
		path: "2013-xx masha niggol - ahmad catanimation/www/",
		pages: ["index.html"],
		description: "Несусветная помороченность. Навроде игры - нужно всё <q>включить</q> и тогда будет бонус. На этом проекте стало понятно что аниматор - это отдельная профессия. ))) И что html5 реально заменяет flash. #СамыйСложный, #AdobeEdgeAnimation",
		devices: "desktop",
		alive: "http://ahmadtea.ru/tour/"
	},
	{
		title: "DIMG",
		path: "2013-09 apollo - disney departments/www/",
		pages: ["index.html"],
		description: "Векторная, интерактивная, анимационная схема отделений Disney в России. #Поморочка, #SVG, #D3js",
		devices: "desktop"
	},
	{
		title: "ТАО Медиа",
		path: "2013-09 seanat - tao media/www/",
		pages: ["index.html"],
		description: "Лендинг интернет-студии. #Приадаптивленный",
		devices: "desktop tablet mobile",
		alive: "http://tao-media.ru"
	},
	{
		title: "Виджет Choister.ru",
		path: "2013-10 apollo - choister widget/www/",
		pages: ["index.html"],
		description: "Цены на недвижимость в реальном времени. #Angularjs",
		devices: "desktop",
		alive: "http://choister.ru/modules/infographics/"
	},
	{
		title: "Панорама",
		path: "2013-10 masha niggol - panorama/www/",
		pages: ["index.html"],
		description: "Недоделка основе моего движка панорам. #jQuery-плагин, #Поморочка",
		devices: "desktop"
	},
	{
		title: "Сайт таблеток от красоты",
		path: "2013-xx melis - medical/www/",
		pages: ["index.html", "triumph.html","mesotherapy.html","contact.html","beautelle.html"],
		description: "Чтоб богатые старухи казались красивей чем они есть на самом деле.",
		devices: "desktop"
	},
	{
		title: "Русский Ипотечный Банк",
		path: "2014-01 apollo - rib/www/",
		pages: ["index1-application.html","index2-prichini.html","index3-stavka.html","index4-ipoteka.html","index6-terms.html"],
		description: "Симпатичные страницы, чёткие запчасти. #Всегда-бы-так",
		devices: "desktop"
	},
	{
		title: "Комфортная стоматология",
		path: "2014-02 slava komarov - stomatology/www/",
		pages: ["index.html"],
		description: "Красивый лэндинг с простым параллаксом",
		devices: "desktop"
	},
	{
		title: "Oh My Mentor",
		path: "2014-03 ilya nikolaev - oh my mentor/www/",
		pages: ["mentors.html","startups.html","landing.html"],
		description: "Суровый параллакс + адаптивность. #Поморочка, #Skrollr",
		devices: "desktop tablet mobile",
		alive: "http://ohmymentor.ru"
	},
	{
		title: "Footbox.me",
		path: "2014-03 natasha kotlyarevskaya - footbox.me/www/",
		pages: ["index.html"],
		description: "Страница-заглушка. Все ресурсы в одном файле",
		devices: "desktop",
		alive: "http://footbox.me"
	},
	{
		title: "Федерация пожарных",
		path: "2014-04 aries - firefighters/www/",
		pages: ["activity.html","documents.html","leaders.html","main.html","map.html","nagrady.html","news.html","news-post.html","smi.html","styles.html","temp.html","ustav.html"],
		description: "Простой сайт",
		devices: "desktop",
		alive: "http://interfiresport.com"
	},
	{
		title: "Prodmag",
		path: "2014-04 seanat - prodmag/www/",
		pages: ["category.html","inner.html","main.html","tovar.html"],
		description: "Простой интернет-магазин",
		devices: "desktop"
	},
	{
		title: "Shedule Edit",
		path: "2014-xx apollo - schedit/www/",
		pages: ["index.html"],
		description: "Редактирование таблицы - запчасть для админки. #Angularjs",
		devices: "desktop"
	},
	{
		title: "Inteduca",
		path: "2014-04 ksan - inteduca/www/",
		pages: ["index.html","blog.html","contacts.html"],
		description: "Красивые три страницы",
		devices: "desktop",
		alive: "http://www.inteduca.ru"
	},
	{
		title: "Mr. Woodman v4.0",
		path: "../",
		pages: ["http://mr-woodman.ru/index.html"],
		description: "Мой мегасайт. #Адаптивность, #Angularjs, #ПравилаРаботыСНеопределённостью",
		devices: "desktop tablet mobile",
		alive: "http://mr-woodman.ru"
	},
	{
		title: "Кофемания",
		path: "2014-05 masha niggol - coffeemania/www/",
		pages: ["coffemania-index.html","coffeemania-email-1.html","coffemania-404.html","coffemania-about.html","coffemania-address.html","coffemania-app.html","coffemania-barista.html","coffemania-cooperation.html","coffemania-delivery.html","coffemania-feedback.html","coffemania-index-notification.html","coffemania-index-with-panorama.html","coffemania-job.html","coffemania-job-apply.html","coffemania-kids.html","coffemania-menu.html","coffemania-menu2.html","coffemania-menu3.html","coffemania-news.html","coffemania-news-post.html","coffemania-press.html","coffemania-team.html","coffemania-zavsegdatai.html"],
		description: "Типа простой, но сложный. #Адаптивность, #Тутулечность",
		devices: "desktop tablet mobile",
		alive: "http://coffeemania.ru"
	},
	{
		title: "Кофемания FM",
		path: "2014-07 masha niggol - coffeemania fm/www/",
		pages: ["coffemania-fm-index.html"],
		description: "Радио! Хоть раз со звуком поработал. #Aдаптивноcть, #Angularjs",
		devices: "desktop tablet mobile",
		alive: "http://coffeemania.fm"
	},
	{
		title: "Allsweets",
		path: "2014-08 seanat - allsweets/www/",
		pages: ["allsweets-index.html","allsweets-404.html","allsweets-cabinet.html","allsweets-cart.html","allsweets-cart-checkout.html","allsweets-category.html","allsweets-contacts.html","allsweets-css.html","allsweets-gallery.html","allsweets-item.html","allsweets-manufacturers.html","allsweets-news.html","allsweets-news-post.html","allsweets-portfolio.html"],
		description: "Конфетоиды",
		devices: "desktop",
		alive: "http://allsweets.ru/"
	},
	{
		title: "Sound Bureau",
		path: "2014-08 masha niggol - soundbureau/www/",
		pages: ["soundbureau-index.html","soundbureau-about.html","soundbureau-business.html","soundbureau-home.html"],
		description: "Что-то про звук. Крутая продуманность дизайна. #Аж-блестит",
		devices: "desktop tablet",
		alive: "http://soundbureau.ru"
	},
];

angular.module("MrWoodman", ["ngSanitize"])
	.controller("WorksCtrl", ["$scope", "$sce", function($scope, $sce) {
		MrWoodman.works.reverse();
		$scope.works = MrWoodman.works;
		// $scope.work = $scope.works[$scope.works.length - 1];
		$scope.work = $scope.works[0];
		$scope.page = $scope.work.pages[0];
		$scope.ios = "";
		if(navigator.userAgent.search("iPad") < 0 && navigator.userAgent.search("iPhone") < 0) {
			$scope.ios = "not-ios";
		}

		var worksPath = "http://works.mr-woodman.ru/";
		// $scope.trustSrc = function(src) {
		// 	return $sce.trustAsResourceUrl(src);
		// }
		$scope.getPath = function(work, isIndex) {
			if(work.pages[0].search("http://") > -1) {
				return $sce.trustAsResourceUrl($scope.page);
			} else {
				return $sce.trustAsResourceUrl(worksPath + work.path + (isIndex ? "" : $scope.page));
			}
		};
		$scope.getAlive = function(work) {
			if(!work.alive) return "";
			else return work.alive.split("#")[0].split("?")[0].split("http://")[1];
		}
		$scope.isAdaptive = function(work) {
			return work.devices.split(" ").length > 1;
		};
		$scope.hasMobile = function(work) {
			return work.devices.search("mobile") > -1;
		};
		$scope.hasTablet = function(work) {
			return work.devices.search("tablet") > -1;
		};
		$scope.hasDesktop = function(work) {
			return work.devices.search("desktop") > -1;
		};
		$scope.prevWork = function() {
			var id = $scope.works.indexOf($scope.work);
			$scope.work = $scope.works[id == 0 ? $scope.works.length-1 : id-1];
		};
		$scope.nextWork = function() {
			var id = $scope.works.indexOf($scope.work);
			$scope.work = $scope.works[id == $scope.works.length-1 ? 0 : id+1];
		};
		$scope.selectWork = function(id) {
			$scope.work = $scope.works[id];
		}
		$scope.prevPage = function() {
			var id = $scope.work.pages.indexOf($scope.page);
			$scope.page = $scope.work.pages[id == 0 ? $scope.work.pages.length-1 : id-1];
		};
		$scope.nextPage = function() {
			var id = $scope.work.pages.indexOf($scope.page);
			$scope.page = $scope.work.pages[id == $scope.work.pages.length-1 ? 0 : id+1];
		};
		$scope.setPage = function(id) {
			console.log(id);
			$scope.page = $scope.work.pages[id];
		};
		$scope.$watch("work", function() {
			$scope.page = $scope.work.pages[0]
		});
	}]);