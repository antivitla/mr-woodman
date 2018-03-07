'use strict';

const data = [
  // {
  //  title: "Магазин-ателье Ito-sama",
  //  path: "2009-xx--ito-sama/www/",
  //  pages: ["http://ito-sama.ru/index.php","http://ito-sama.ru/catalog.php","http://ito-sama.ru/fabric.php"],
  //  description: "Мужская и женская одежда, революционная бахрома детектед.",
  //  devices: "desktop",
  //  alive: "http://ito-sama.ru"
  // },
  {
    title: "PCNews",
    path: "2009-07--neq4--pcnews/www/",
    pages: ["pcnews-start.html","pcnews-index-news.html","pcnews-article-top20.html","pcnews-search-results.html","pcnews-tear.html","pcnews-text.html"],
    description: "Beware! 2009 год, первый летописный заказ, ох и намучался я с ним.",
    devices: "desktop",
    alive: "http://pcnews.ru"
  },

  {
    title: "КиноЗавод",
    path: "2009-07--slava-komarov--kinozavod/www/",
    pages: ["index-202.html","index-302.html","index-402.html","index-502.html","index-602.html"],
    description: "Операторское оборудование",
    devices: "desktop",
    alive: "http://www.kinozavod.ru"
  },

  {
    title: "Little Fish",
    path: "2009-08--smile--little-fish-v1/www/",
    pages: ["index.html"],
    description: "Старый дизайн студии рисунка little-fish",
    devices: "desktop"
  },

  {
    title: "Aster Gold",
    path: "2009-10--roman-mandrik--aster-gold/www/",
    pages: ["astergold.html","astergold-basket.html","astergold-inner.html","astergold-order-register.html","astergold-product.html","astergold-profile.html","astergold-static-page.html"],
    description: "Брюлики & колечки",
    devices: "desktop"
  },

  {
    title: "Сны i секреты",
    path: "2009-12--roman-mandrik--sni-i-secreti/www/",
    pages: ["sny-main.html","sny-basket.html","sny-catalog.html","sny-checkout.html","sny-product.html","sny-text.html"],
    description: "Интернет-магазин подушек и спанья",
    devices: "desktop"
  },

  {
    title: "Маша Краснова-Шабаева",
    path: "2010-04--sergey-kruk--masha-krasnova-shabaeva/www/",
    pages: ["main.html","background-ver1.html","background-ver2.html","background-ver3.html","blog.html","post-and-comments.html"],
    description: "Нужно признать современное искусство я совершенно не врубаю, но верстать это не мешает.",
    devices: "desktop",
    alive: "http://mashushka.com"
  },

  // {
  //   title: "Western Union",
  //   path: "2010-05--aries--western-union/www/",
  //   pages: ["wu-search-mainpage.html","wu-search-citiespage.html","wu-search-officepage.html"],
  //   description: "Поиск офисов",
  //   devices: "desktop"
  // },

  {
    title: "Друидский калькулятор",
    path: "2010-06--krvss--resto-druid-healer-calculator/www/",
    pages: ["index.html"],
    description: "Строим ресто-билды. <small>#lolW00t</small>",
    devices: "desktop",
    alive: "http://treecalcs.com"
  },

  {
    title: "Серебро Непала",
    path: "2010-07--roman-vorushin--serebro-nepala/www/",
    pages: ["serebro-main.html","serebro-basket.html","serebro-form.html","serebro-info.html","serebro-tovar.html"],
    description: "Интернет-магазин прикольных безделушек",
    devices: "desktop"
  },

  {
    title: "Nia Style",
    path: "2010-09--eugene-mesherjakov--nia-style/www/",
    pages: ["nia-style-default.html","nia-style-art.html","nia-style-cat1.html","nia-style-cat2.html","nia-style-text.html"],
    description: "Что-то несусветное (<q>ня-стайл</q>??), но такое я тоже верстаю",
    devices: "desktop",
  },

  {
    title: "SmartTrans",
    path: "2010-10--al-niko--smarttrans/www/",
    pages: ["smarttrans-about.html"],
    description: "Это не транспорт, это языковые переводы",
    devices: "desktop",
  },

  {
    title: "UniCredit",
    path: "2010-11--dasha-karandasheva--unicredit-widget/www/",
    pages: ["index.html"],
    description: "Виджет для Mac",
    devices: "desktop",
  },

  {
    title: "Mr. Woodman v1.0",
    path: "2010-xx--mr-woodman-v1/www/",
    pages: ["index.html"],
    description: "Мой мегасайт первой версии. <small>#Дизайн&UX</small>",
    devices: "desktop"
  },

  {
    title: "Ухтышка",
    path: "2011-03--smile--uhtyshka/www/",
    pages: ["uhty-main.html","uhty-about-us.html","uhty-activation.html","uhty-contacts.html","uhty-dostavka.html","uhty-goodies.html","uhty-how-this-works.html","uhty-photo.html","uhty-product.html"],
    description: "Скромно но мило",
    devices: "desktop",
  },

  {
    title: "YogaDa",
    path: "2011-05--seanat--yogada/www/",
    pages: ["yogada-main.html","yogada-404.html","yogada-all-users.html","yogada-blog.html","yogada-blog-post.html","yogada-blogs.html","yogada-blogs-all-entries.html","yogada-blogs-newpost.html","yogada-comments.html","yogada-eastpractices.html","yogada-freedive.html","yogada-main-login.html","yogada-meroprijatija.html","yogada-news.html","yogada-photo.html","yogada-photos.html","yogada-photos-album.html","yogada-places.html","yogada-profile.html","yogada-search-results.html","yogada-text.html","yogada-text-print.html","yogada-texts.html","yogada-theme.html","yogada-themes.html","yogada-travel.html","yogada-videos.html","yogada-zaglushka.html"],
    description: "Переусложненный сайт, ошеломляющее ведение проекта. <small>#Мильярд-Шаблонов, #Мильярд-Правок</small>",
    devices: "desktop",
  },

  {
    title: "Лекция Ahmad Tea",
    path: "2011-07--samartsev--ahmad-tea-lecture/www/",
    pages: ["index.html"],
    description: "Про чай, естественно. Простенько, но четко.",
    devices: "desktop",
  },

  {
    title: "Bars II",
    path: "2011-08--dima-komissarov--bars-2/www/",
    pages: ["bars2-index.html","bars2-about.html","bars2-about-old.html","bars2-dealers.html","bars2-doors.html","bars2-doors-locksnhandles.html","bars2-doors-nonstandard.html","bars2-doors-whybars.html","bars2-forum-post-comments.html","bars2-forum-posts-list.html","bars2-konfigurator-models.html","bars2-konfigurator-vars.html","bars2-konfigurator-vars2.html","bars2-minora.html","bars2-minora-about.html","bars2-minora-techs.html","bars2-minora-vars.html","bars2-showroom.html","bars2-showroom-print.html"],
    description: "Вторая версия сайта. <small>#Крутая-Резина</small>",
    devices: "desktop",
    alive: "http://www.barsdoors.ru"
  },

  {
    title: "Bars",
    path: "2011-08--dima-komissarov--bars-for-designers/www/",
    pages: ["bars2designers-index.html","bars2designers-scheme.html","bars2designers-reserve.html","bars2designers-photo.html"],
    description: "Двери. Сайт производителя для дизайнеров интерьеров",
    devices: "desktop",
  },

  {
    title: "Адвокатский клуб",
    path: "2011-12--dima-komissarov--advocate-club/www/",
    pages: ["ac-index-temp.html","ac-index-customers.html","ac-index-advocats.html","customers-index.html","customers-how.html","customers-faq.html","advocats-registration.html","advocats-privileges.html","ac-reviews.html","ac-info.html","ac-how-customers.html","ac-customer-personal-cabinet.html","ac-article.html","ac-advocat-homepage.html","ac-advices.html"],
    description: "Мильярд шаблонов, интересные ходы с шрифтами и дореволюционный виджет <q>аккордеон</q>",
    devices: "desktop",
  },

  {
    title: "Facebook-магазин Ahmad Tea",
    path: "2012-03--aries--ahmad-tea-facebook/www/",
    pages: ["ahmad-index.html","ahmad-category.html","ahmad-search.html","ahmad-item.html","ahmad-step1.html","ahmad-history.html","ahmad-step3.html","ahmad-email.html","ahmad-step4.html","ahmad-step2.html","ahmad-about.html"],
    description: "Просто и клево",
    devices: "desktop tablet",
    alive: "https://apps.facebook.com/ahmadteastore/"
  },

  {
    title: "Дымов",
    path: "2012-04--rudy--dymov/www/",
    pages: ["dymov-index.html","dymov-recepty.html","dymov-recepty-inside.html","dymov-produkcia.html","dymov-produkcia-inside.html","dymov-o-nas.html","dymov-novosti.html","dymov-novosti-inside.html","dymov-kontakty.html","dymov-karjera.html","dymov-kachestvo-i-bezopasnost.html","dymov-istorija.html","dymov-investoram.html"],
    description: "Мясо. Колбаса. Даже ТВ-канал про котлеты! В общем, простой информационный сайт/интернет-магазин",
    devices: "desktop",
    alive: "http://v-dymov.ru"
  },

  {
    title: "Ост-мед",
    path: "2012-06--handyweb--ostmed/www/",
    pages: ["index.html"],
    description: "Мобильный сайт про медиков",
    devices: "mobile",
  },

  {
    title: "Трансдепот",
    path: "2012-xx--aries--transdepot/www/",
    pages: ["transdepot-index.html","transdepot-tamozhennoe-oformlenie.html","transdepot-dostavka-gruzov.html","transdepot-cabinet.html","transdepot-autsorsing-ved.html","transdepot-about.html"],
    description: "Пролетарно, про машинки & помороченный калькулятор на главной.",
    devices: "desktop",
    alive: "http://transdepot.ru"
  },

  {
    title: "Capital View",
    path: "2012-xx--dima-komissarov--capital-view/www/",
    pages: ["capitalview-index.html","capitalview-projectmembers.html","capitalview-katok.html","capitalview-about.html"],
    description: "А это полный улёт потому что 3d transformations. Мы как-бы внутри цилиндра, надо понаводить на меню. <small>#3d-Улёт, #Укачивает</small>",
    devices: "desktop",
  },

  {
    title: "Tiktok Lunatik",
    path: "2012-xx--sambul--lunatik/www/",
    pages: ["lunatiktok-index.html", "lunatiktok-ipod.html","lunatiktok-inner-tiktok.html","lunatiktok-inner-lunatik.html","lunatiktok-inner-lunatik-not-present.html","lunatiktok-history.html","lunatiktok-feedback.html","lunatiktok-complects.html","lunatiktok-buy-step-6.html","lunatiktok-buy-step-5.html","lunatiktok-buy-step-4.html","lunatiktok-buy-step-3.html","lunatiktok-buy-step-2c.html","lunatiktok-faq.html","lunatiktok-buy-step-2b.html","lunatiktok-buy-step-2a.html","lunatiktok-buy-step-1b.html","lunatiktok-buy-step-1a.html","lunatiktok-accessories.html","lunatiktok-accessories-and-all.html","lunatiktok-about.html"],
    description: "Интересный был дизайн... <small>#При-Apple-енность</small>",
    devices: "desktop"
  },

  // {
  //   title: "Открытка Ahmad Tea",
  //   path: "2012-12--aries--ahmad-new-year/www/",
  //   pages: ["index.html"],
  //   description: "На новый год. Снег детектед.",
  //   devices: "desktop",
  // },

  // {
  //   title: "Киндерино",
  //   path: "2012-xx--aries--kinderino/www/",
  //   pages: ["kinder-index.html"],
  //   description: "Страшная в своей сложности анимация. #AdobeEdge",
  //   devices: "desktop",
  // },

  // {
  //   title: "Любовь",
  //   path: "2012-xx--dima-komissarov--dk-love/www/",
  //   pages: ["index.html"],
  //   description: "Что-то явно милое, но непонятное... )))",
  //   devices: "desktop",
  // },

  // {
  //   title: "Американская мечта на Дмитровке",
  //   path: "2012-xx--dima-komissarov--dmitrovka/www/",
  //   pages: ["index.html"],
  //   description: "Гениальный css-мудрёж с глобусом. Это заглушка. #КрутаяРезина",
  //   devices: "desktop",
  // },

  // {
  //   title: "Коттеджи Весенино",
  //   path: "2012-xx--dima-komissarov--vesenino-1/www/",
  //   pages: ["index.html#no-animation","raspolozhenie.html","novosti.html","kontakty.html","kommunikacii-i-materialy.html","infrastruktura-rajona.html","infrastruktura-poselka.html","genplan.html","ekologija.html","developer.html","detjam.html"],
  //   description: "Прикольный дизайн. #Поморочка, #КрутаяРезина",
  //   devices: "desktop",
  //   alive: "http://www.vesenino.ru"
  // },

  // {
  //   title: "Коттеджи Весенино (переделка)",
  //   path: "2012-xx--dima-komissarov--vesenino-3/www/",
  //   pages: ["index.html","vid-sverhu.html","s-zabotoj-o-detjah.html","readme-changes.html","novosti.html","kontakty.html","kak-proehat.html","chto-poblizosti.html","article-novosti.html"],
  //   description: "Жуткое дело — третья версия сайта. #КрутаяРезина",
  //   devices: "desktop",
  //   alive: "http://www.vesenino.ru"
  // },

  // {
  //   title: "Панорама",
  //   path: "2013-10--masha-niggol--panorama/www/",
  //   pages: ["index.html"],
  //   description: "Недоделка основе моего движка панорам. #jQuery-плагин, #Поморочка",
  //   devices: "desktop"
  // },

  // {
  //   title: "Сайт таблеток от красоты",
  //   path: "2013-xx--melis--medical/www/",
  //   pages: ["index.html", "triumph.html","mesotherapy.html","contact.html","beautelle.html"],
  //   description: "Чтоб богатые старухи казались красивей чем они есть на самом деле.",
  //   devices: "desktop"
  // },

  // {
  //   title: "Footbox.me",
  //   path: "2014-03--natasha-kotlyarevskaya--footbox.me/www/",
  //   pages: ["index.html"],
  //   description: "Страница-заглушка. Все ресурсы в одном файле",
  //   devices: "desktop"
  // },

  // {
  //   title: "Prodmag",
  //   path: "2014-04--seanat--prodmag/www/",
  //   pages: ["category.html","inner.html","main.html","tovar.html"],
  //   description: "Простой интернет-магазин",
  //   devices: "desktop"
  // },

  // {
  //   title: "Mr. Woodman v4.0",
  //   path: "../",
  //   pages: ["http://mr-woodman.ru/index.html"],
  //   description: "Мой мегасайт. #Адаптивность, #Angularjs, #ПравилаРаботыСНеопределённостью",
  //   devices: "desktop tablet mobile",
  //   alive: "http://mr-woodman.ru"
  // },

  // {
  //   title: "Shedule Edit",
  //   path: "2014-xx--apollo--schedit/www/",
  //   pages: ["index.html"],
  //   description: "Редактирование таблицы — запчасть для админки. #Angularjs",
  //   devices: "desktop"
  // },

  // {
  //   title: "ООО «Проминжиниринг»",
  //   path: "2015-01--slava-komarov--promengineering/www/",
  //   pages: ["index.html", "about.html", "haimer.html", "iew.html", "iruba.html", "news-post-01.html", "news-post-02.html", "post.html", "sab.html"],
  //   description: "Суровый сайт для суровой отрасли",
  //   devices: "desktop"
  // },

  // {
  //   title: "Авторские торты Coffeemania",
  //   path: "2015-08--masha-niggol--top-tort/www/",
  //   pages: ["main.html", "about.html", "cabinet.html", "contacts.html", "ready.html"],
  //   description: "Хочется съесть сайт.",
  //   devices: "desktop tablet mobile"
  // },

  // {
  //   title: "Виджет Choister.ru",
  //   path: "2013-10--apollo--choister-widget/www/",
  //   pages: ["index.html"],
  //   description: "Цены на недвижимость в реальном времени. #Angularjs",
  //   devices: "desktop",
  //   alive: "http://choister.ru/modules/infographics/"
  // },

  {
    title: "Idealmaster",
    path: "2014-10--masha-niggol--idealmaster/www/",
    pages: ["idealmaster-index.html", "idealmaster-article-list.html", "idealmaster-article.html", "idealmaster-brand.html", "idealmaster-collection-special.html", "idealmaster-collection.html", "idealmaster-glossary.html", "idealmaster-model.html", "idealmaster-model2.html", "idealmaster-service.html"],
    description: "Крутые часики, много-и-долго-дизайн",
    devices: "desktop tablet mobile",
    alive: "http://watches.idealmaster.ru"
  },

  {
    title: "Allsweets",
    path: "2014-08--seanat--allsweets/www/",
    pages: ["allsweets-index.html","allsweets-404.html","allsweets-cabinet.html","allsweets-cart.html","allsweets-cart-checkout.html","allsweets-category.html","allsweets-contacts.html","allsweets-css.html","allsweets-gallery.html","allsweets-item.html","allsweets-manufacturers.html","allsweets-news.html","allsweets-news-post.html","allsweets-portfolio.html"],
    description: "Конфетоиды",
    devices: "desktop",
    alive: "http://allsweets.ru/"
  },

  {
    title: "Клуб Ахмад",
    path: "2014-12--masha-niggol--club-ahmad/www/",
    pages: ["index.html#/contest/works"],
    description: "Клуб окончательных фанатов чая Ахмад. Angular.js для удобства нарезания на запчасти для программиста",
    devices: "desktop",
    alive: "http://club.ahmadtea.ru"
  },

  {
    title: "Федерация пожарных",
    path: "2014-04--aries--firefighters/www/",
    pages: ["activity.html","documents.html","leaders.html","main.html","map.html","nagrady.html","news.html","news-post.html","smi.html","styles.html","temp.html","ustav.html"],
    description: "Простой сайт",
    devices: "desktop",
    alive: "http://interfiresport.com"
  },

  {
    title: "Русский Ипотечный Банк",
    path: "2014-01--apollo--rib/www/",
    pages: ["index1-application.html","index2-prichini.html","index3-stavka.html","index4-ipoteka.html","index6-terms.html"],
    description: "Симпатичные страницы, чёткие запчасти. <small>#Всегда-бы-так</small>",
    devices: "desktop",
    alive: "https://www.russipoteka.ru"
  },

  {
    title: "Inteduca",
    path: "2014-04--ksan--inteduca/www/",
    pages: ["index.html","blog.html","contacts.html"],
    description: "Красивые три страницы",
    devices: "desktop",
    alive: "http://www.inteduca.ru"
  },


  // {
  //   title: "Active Learning",
  //   path: "2016-01--mandrik--activelearning/www/",
  //   pages: ["demo/landing.html", "demo/index.html", "demo/latest-events.html", "demo/stats.html", "demo/today.html"],
  //   description: "Какое-то обучение...",
  //   devices: "desktop tablet"
  // },

  {
    title: {
      ru: "Устройства 4Good",
      en: "4Good devices"
    },
    path: "2016-05--andreikis--4good/www/",
    pages: ["pages/4good-home.html", "pages/4good-blog.html", "pages/4good-catalog.html", "pages/4good-components.html", "pages/4good-contacts.html", "pages/4good-faq-search-results.html", "pages/4good-faq.html", "pages/4good-feedback.html", "pages/4good-notification.html", "pages/4good-post.html", "pages/4good-product.html", "pages/4good-service.html", "pages/4good-software-and-docs.html", "pages/4good-where-to-buy.html"],
    description: "",
    devices: "desktop tablet mobile",
    alive: "https://4good.ru"
  },

  // {
  //   title: "Отчёты",
  //   path: "2017-02--almiashev--report/www/",
  //   pages: ["index.html"],
  //   description: "",
  //   devices: "desktop"
  // },

  {
    title: "Сайт Ahmad Tea",
    path: "2013-03--masha-niggol--ahmad/www/",
    pages: ["ahmad-index.html","ahmad-404.html","ahmad-chajnaja-karta.html","ahmad-chajnyj-slovar.html","ahmad-contemporary.html","ahmad-faq.html","ahmad-filtr-po-tegu.html","ahmad-kontakty.html","ahmad-novejshaja-istorija.html","ahmad-rezultaty-poiska-po-articulu.html","ahmad-rezultaty-poiska-po-materialam.html","ahmad-tea.html","ahmad-tea-times.html","ahmad-tea-times-afisha.html","ahmad-tea-times-article.html","ahmad-tea-times-article-afisha.html","ahmad-tea-times-article-gallery.html","ahmad-tea-times-article-photos.html","ahmad-tea-times-events.html","ahmad-tea-times-gallery.html","ahmad-tea-times-moscow-map.html","ahmad-tea-times-polls.html","ahmad-tea-times-recommends.html"],
    description: "Куча чаезапчастей, отдельный микросайт в виде газеты",
    devices: "desktop",
    alive: "http://ahmadtea.ru"
  },

  {
    title: "Територрия удовольствия",
    path: "2012-xx--dima-komissarov--terra-pleasure/www/",
    pages: ["tu-index.html","tu-wine.html","tu-gift.html","tu-wines.html","tu-review.html","tu-recommend-articles.html","tu-recommend-article.html","tu-gifts.html","tu-contacts.html","tu-about.html"],
    description: "Про бухло. Красиво, с бутылками.",
    devices: "desktop",
  },

  {
    title: "Национальный сквош-центр",
    path: "2012-xx--dima-komissarov--squash/www/",
    pages: ["index.html","reserve.html","profile.html","player.html","knowledge.html","ratings.html","players.html","tournament.html","tournaments.html","club.html","news.html","rules.html","clubs.html"],
    description: "Помороченный информационный сайт по турнирам",
    devices: "desktop",
  },

  {
    title: "Ферма Mortenstuen",
    path: "2015-03--shashnia--mortenstuen/www/",
    pages: ["mortenstuen-index.html", "mortenstuen-blog.html", "mortenstuen-contact.html", "mortenstuen-gallery.html", "mortenstuen-health.html", "mortenstuen-history.html", "mortenstuen-post.html"],
    description: "Эпичность норвежского сельского хозяйства.",
    devices: "desktop tablet"
  },

  {
    title: "Волоколамское фермерское хозяйство",
    path: "2014-12--masha-niggol--volokolamskoe-moloko/www/",
    pages: ["index.html"],
    description: "Мета-модное молоко и козы, лендинг.",
    devices: "desktop tablet mobile"
  },

  {
    title: "СДС-ФУДС",
    path: "2015-11--masha-niggol--sds-foods/www/",
    pages: ["index.html"],
    description: "Дистрибьютор чая Ahmad",
    devices: "desktop tablet mobile"
  },

  {
    title: "Easylife Menu",
    path: "2015-09--masha-niggol--easylifemenu/www/",
    pages: ["markup-index.html"],
    description: "Coffeemania за здоровый образ жизни.",
    devices: "desktop tablet mobile"
  },

  {
    title: "Sofits Me",
    path: "2014-04--natasha-kotlyarevskaya-sofitsme-lookbook/www/",
    pages: ["sfm-style.html", "sfm-lookbook.html"],
    description: "Онлайн-гардероб, лендинг.",
    devices: "desktop"
  },

  {
    title: "Комфортная стоматология",
    path: "2014-02--slava-komarov--stomatology/www/",
    pages: ["index.html"],
    description: "Красивый лэндинг с простым параллаксом",
    devices: "desktop"
  },

  {
    title: "Bars",
    path: "2011-08--dima-komissarov--bars/www/",
    pages: ["bars-index.html","bars-advantages.html","bars-all-over-russia.html","bars-configurator.html","bars-contacts.html","bars-dealer.html","bars-dealers.html","bars-door-cover-ebony.html","bars-door-covers.html","bars-door-cover-venge.html","bars-door-design-classica.html","bars-door-designs.html","bars-information.html","bars-photogallery.html"],
    description: "Навороченная вёрстка про двери. <small>#Крутая-Резина, #Мильярд-Шаблонов</small>",
    devices: "desktop"
  },

  {
    title: "Oh My Mentor",
    path: "2014-03--ilya-nikolaev--ohmymentor/www/",
    pages: ["mentors.html","startups.html","landing.html"],
    description: "Суровый параллакс + адаптивность. <small>#Поморочка, #Skrollr</small>",
    devices: "desktop tablet mobile"
  },

  {
    title: "ТАО Медиа",
    path: "2013-09--seanat--tao-media/www/",
    pages: ["index.html"],
    description: "Лендинг интернет-студии. <small>#Приадаптивленный</small>",
    devices: "desktop tablet mobile",
    alive: "http://tao-media.ru"
  },

  {
    title: "Ресторан «Узбечка» в аэропортах Москвы",
    path: "2015-12--masha-niggol--uzbechka/www/",
    pages: ["markup/index.html"],
    description: "Порция успокаивающего Узбекистана перед отлётом.",
    devices: "desktop tablet mobile"
  },

  {
    title: "Конкурс на название бургерной Кофемании",
    path: "2016-04--masha-niggol--burger-name/www/",
    pages: ["pages/burger-name-landing.html", "pages/burger-name-components.html", , "pages/burger-name-names.html", "pages/burger-name-text.html", "pages/burger-share.html"],
    description: "",
    devices: "desktop tablet mobile"
  },

  {
    title: "Броско Home Couture",
    path: "2012-xx--dima-komissarov--brosko/www/",
    pages: ["brosko-index.html","brosko-catalog.html","brosko-category.html","brosko-product.html","brosko-text.html"],
    description: "Понтовым штукам — понтовый дизайн. <small>#Крутая-резина</small>",
    devices: "desktop",
    alive: "http://brosko-home.ru"
  },

  {
    title: "Кофемания",
    path: "2014-05--masha-niggol--coffeemania/www/",
    pages: ["coffemania-index.html","coffeemania-email-1.html","coffemania-404.html","coffemania-about.html","coffemania-address.html","coffemania-app.html","coffemania-barista.html","coffemania-cooperation.html","coffemania-delivery.html","coffemania-feedback.html","coffemania-index-notification.html","coffemania-index-with-panorama.html","coffemania-job.html","coffemania-job-apply.html","coffemania-kids.html","coffemania-menu.html","coffemania-menu2.html","coffemania-menu3.html","coffemania-news.html","coffemania-news-post.html","coffemania-press.html","coffemania-team.html","coffemania-zavsegdatai.html"],
    description: "Типа простой, но сложный. <small>#Адаптивность, #Тутулечность</small>",
    devices: "desktop tablet mobile",
    alive: "http://coffeemania.ru"
  },

  {
    title: "Reebok Парки",
    path: "2016-02--rudy--reebokinparks/www/",
    pages: ["html/main.html", "html/about.html", "html/events.html", "html/personal-results.html", "html/results.html", "html/schedule.html"],
    description: "Тренировки и другие события в парках.",
    devices: "desktop tablet mobile",
    alive: "http://www.reebokinparks.com"
  },

  // {
  //   title: "Кото-интерактив Ahmad Tea",
  //   path: "2013-xx--masha-niggol--ahmad-catanimation/www/",
  //   pages: ["index.html"],
  //   description: "Несусветная помороченность. Навроде игры — нужно всё <q>включить</q> и тогда будет бонус. На этом проекте стало понятно что аниматор — это отдельная профессия. ))) И что html5 реально заменяет flash. #СамыйСложный, #AdobeEdgeAnimation",
  //   devices: "desktop",
  //   alive: "http://ahmadtea.ru/tour/"
  // },

  {
    title: "DIMG",
    path: "2013-09--apollo--disney-departments/www/",
    pages: ["index.html"],
    description: "Векторная, интерактивная, анимационная схема отделений Disney в России. <small>#Поморочка, #SVG, #D3js</small>",
    devices: "desktop"
  },

  {
    title: "Scoblimora",
    path: "2017-12--vitaly-kuleshin--titamota/www/",
    pages: ["http://mr-woodman.ru/scoblimora"],
    description: {
      ru: "Алхимический помощник для Skyrim. И тебе fus-ro-dah, Довакин. <small>#Vuejs</small>",
      en: "Meet Skyrim Alchemy Helper. Something very complicated, even I did not fully understand it. <small>#Vuejs, #Fus-Ro-Dah</small>"
    },
    devices: "desktop tablet mobile",
    alive: "http://mr-woodman.ru/scoblimora"
  },

  {
    title: "Сеть магазинов Дикси",
    path: "2016-03--chuprik--diksi/www/",
    pages: ["pages/dixy-main.html", "pages/dixy-list.html", "pages/dixy-recipe.html"],
    description: "Модно но не взяли",
    devices: "desktop"
  },

  {
    title: "Love Eat",
    path: "2016-04--chuprik--loveeat/www/",
    pages: ["pages/loveeat-main.html", "pages/loveeat-blog.html", "pages/loveeat-collection.html", "pages/loveeat-collections.html", "pages/loveeat-components.html", "pages/loveeat-edit-profile.html", "pages/loveeat-followers-following-modal.html", "pages/loveeat-my-profile-collection.html", "pages/loveeat-my-profile-collections.html", "pages/loveeat-my-profile-posts.html", "pages/loveeat-my-recipe.html", "pages/loveeat-notifications-messages-modal.html", "pages/loveeat-other-profile-posts.html", "pages/loveeat-people.html", "pages/loveeat-post.html", "pages/loveeat-recipe.html", "pages/loveeat-recipes-with-filter-another-layout.html", "pages/loveeat-recipes-with-filter.html", "pages/loveeat-search.html", "pages/loveeat-tabs-modal.html"],
    description: "Ещё что-то модное про еду. Дофигища шаблонов. Моя утилита <a href=\"https://github.com/antivitla/mr-testwood\">вёрстки-через-тестирование</a> просто спасение",
    devices: "desktop tablet mobile"
  },

  {
    title: "Neq4",
    path: "2014-09--masha-niggol--neq4/www/",
    pages: ["panorama-neq4-index.html", "panorama-neq4-about.html", "panorama-neq4-contact.html", "panorama-neq4-job.html", "panorama-neq4-pak.html", "panorama-neq4-panorama.html", "panorama-neq4-press.html", "panorama-neq4-projects.html", "panorama-neq4-yandex-panoramas.html", "digital-neq4-index.html"],
    description: "Любимый клиент, корпорация и просто красавица. <small>#Классика HTML/CSS/JavaScript</small>",
    devices: "desktop tablet mobile",
    alive: "http://neq4.ru"
  },

  {
    title: "Sound Bureau",
    path: "2014-08--masha-niggol--soundbureau/www/",
    pages: ["soundbureau-index.html","soundbureau-about.html","soundbureau-business.html","soundbureau-home.html"],
    description: "Что-то про звук. Крутая продуманность дизайна. <small>#Аж-блестит</small>",
    devices: "desktop tablet",
    alive: "http://soundbureau.ru"
  },

  {
    title: {
      ru: "Онлайн-радио «Кофемания FM»",
      en: "Online Radio \"Coffeemania FM\""
    },
    path: "2014-07--masha-niggol--coffeemania-fm/www/",
    pages: ["coffemania-fm-index.html"],
    description: {
      ru: "Хоть раз со звуком поработал! Не так сложно, как думал. <small>#Aдаптивноcть, #HTML5 API, #CSS3, #Angularjs</small>",
      en: "Interesting experience with sound API. Easier than I thought. <small>#Responsive, #HTML5 API, #CSS3, #Angular.js</small>"
    },
    devices: "desktop tablet mobile",
    alive: "http://coffeemania.fm"
  },

  {
    title: {
      ru: "Виртуальная Арктика",
      en: "Russian Arctic"
    },
    path: "2015-08--masha-niggol--arctic/www/",
    pages: ["index.html"],
    description: {
      en: "<a href=\"http://neq4.ru\">Neq4</a> project. Cold edge of the earth. <small>#Angular.js, #SVG</small>",
      ru: "Проект <a href=\"http://neq4.ru\">Neq4</a>. На краю земли ожидаемо безлюдно, забыто и заброшено. Хорошо, что можем на это поглядеть из тёплого броузера. <small>#Angular.js, #SVG</small>"
    },
    devices: "desktop tablet mobile"
  },

  {
    title: {
      ru: "Нетюленьи путешествия",
      en: "Netuleny Tours"
    },
    path: "",
    pages: ["https://netuleny.com"],
    description: {
      ru: "Сервис подбора туров активного отдыха. Выступил как Senior-Frontend-UI-UX-FeautureArchitect (oh yeah), было много системного рефакторинга. <small>#Angular.js, #Планирование, #Ruby-Rails</small>",
      en: "Active trips finder. My role was Senior-Frontend-UI-UX-FeatureArchitect (yeah baby), which required much business planning and refactoring. <small>#Angular.js, #UI-UX, #Ruby-Rails</small>"
    },
    devices: "desktop tablet mobile",
    alive: "https://netuleny.com"
  },

  {
    title: {
      ru: "Таймер времени и денег Titamóta",
      en: "Titamóta"
    },
    path: "2017-12--vitaly-kuleshin--titamota/www/",
    pages: ["http://titamota.ru", "http://mr-woodman.ru/titamota"],
    description: {
      ru: "Пятая мажорная версия моего широко известного в узких кругах проекта. Выступил fullstack-программистом (если долго делать OAuth-авторизацию, можно сойти с ума). <small>#Vuejs, #Django/Python/DRF/PostgreSQL, #Docker</small>",
      en: "Time, task and money tracker. Proud UX and inner algrorythms. Being fullstack coder. <small>#Vue.js, #DjangoRestFramework, #PostgreSQL, #Docker, #it-even-has-landing-page</small>"
    },
    devices: "desktop tablet mobile",
    alive: "http://titamota.ru"
  },

  {
    title: "Mr. Woodman v4.1",
    path: "2018-02--vitaly-kuleshin--mr-woodman/www/",
    pages: ["http://mr-woodman.ru"],
    description: {
      ru: "Минорный апдейт. Добавлены новые работы, вписаны новые тексты. <small><strong>#iframe-рекурсия</strong>, #Vue.js, #Webpack, #frontend-porn</small>",
      en: "Another minor update. New works, new texts. <small>#Vuejs, #Webpack, #Babel-porn, #iframe-recursion</small>"
    },
    devices: "desktop tablet mobile",
    alive: "http://mr-woodman.ru"
  },
];

export default data;
