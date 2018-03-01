/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// CSS

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(20);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

window.fontfit = function (collection) {

    var item,
        textWidth,
        width,
        lineHeight,
        fontSize,
        saveNativeStyle = function saveNativeStyle(item, rules) {
        var style = getComputedStyle(item);
        item.fontfitsave = item.fontfitsave || {};
        for (var i = 0; i < rules.length; i++) {
            item.fontfitsave[rules[i]] = style[rules[i]];
        }
    },
        restoreNativeStyle = function restoreNativeStyle(item, rules) {
        for (var i = 0; i < rules.length; i++) {
            item.style[rules[i]] = item.fontfitsave[rules[i]];
        }
    };

    // Проходимся по каждому в коллекции
    for (var i = 0; i < collection.length; i++) {
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
        fontSize = Math.floor(width / textWidth * parseInt(getComputedStyle(item).fontSize));
        item.style.fontSize = fontSize + "px";

        // - а также подходящий line-height (кратный основному на сайте)
        lineHeight = parseInt(getComputedStyle(document.body).lineHeight);
        item.style.lineHeight = Math.round(fontSize / lineHeight) * lineHeight + "px";

        // Плюс анимашечку
        item.style.transition = "font-size 0.25s";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        fontfit(document.querySelectorAll("[data-fontfit]"));
    }, 100);
});

window.addEventListener("load", function () {
    setTimeout(function () {
        fontfit(document.querySelectorAll("[data-fontfit]"));
    }, 100);
});

window.addEventListener("resize", function () {
    fontfit(document.querySelectorAll("[data-fontfit]"));
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueMin = __webpack_require__(15);

var _vueMin2 = _interopRequireDefault(_vueMin);

var _worksData = __webpack_require__(19);

var _worksData2 = _interopRequireDefault(_worksData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var works = {
  data: _worksData2.default
};

works.app = new _vueMin2.default({
  el: '#works',
  data: function data() {
    return {
      workId: 0,
      pageId: 0,
      domain: 'http://works.mr-woodman.ru/',
      devices: ['desktop', 'tablet', 'mobile'],
      lang: 'ru'
    };
  },
  created: function created() {
    var workId = localStorage.getItem('mrWoodmanAboutWorkId');
    if (workId) {
      this.workId = parseInt(workId, 10);
      if (this.workId < 0) {
        this.workId = 0;
      } else if (this.workId > works.data.length - 1) {
        this.workId = works.data.length - 1;
      }
    }
    this.lang = document.documentElement.getAttribute('lang') || 'en';
  },

  computed: {
    work: function work() {
      var work = works.data[works.data.length - this.workId - 1];
      return work || works.data[works.data.length - 1];
    },
    workTitle: function workTitle() {
      return typeof this.work.title === 'string' ? this.work.title : this.work.title[this.lang];
    },
    workDescription: function workDescription() {
      return typeof this.work.description === 'string' ? this.work.description : this.work.description[this.lang];
    },
    page: function page() {
      return this.work.pages[this.pageId];
    },
    hasNext: function hasNext() {
      return this.workId > 0;
    },
    hasPrev: function hasPrev() {
      return this.workId < works.data.length - 1;
    }
  },
  methods: {
    nextWork: function nextWork() {
      if (this.hasNext) {
        this.workId = this.workId - 1;
        localStorage.setItem('mrWoodmanAboutWorkId', this.workId);
        this.pageId = 0;
      }
    },
    prevWork: function prevWork() {
      if (this.hasPrev) {
        this.workId = this.workId + 1;
        localStorage.setItem('mrWoodmanAboutWorkId', this.workId);
        this.pageId = 0;
      }
    },
    hasDevice: function hasDevice(work, device) {
      return this.work.devices.search(device) > -1;
    },
    getPath: function getPath(work) {
      if (this.page.search("http://") > -1 || this.page.search("https://") > -1) {
        return this.page;
      } else {
        return this.domain + this.work.path + this.page;
      }
    },
    getAlive: function getAlive(work) {
      if (!this.work.alive) {
        return "";
      } else {
        return this.work.alive.split("#")[0].split("?")[0].split("://")[1];
      }
    },
    isActivePage: function isActivePage(page) {
      return this.work.pages.indexOf(page) === this.pageId;
    },
    setPage: function setPage(page) {
      this.pageId = this.work.pages.indexOf(page);
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t.Vue = e();
}(undefined, function () {
  "use strict";
  function t(t) {
    return void 0 === t || null === t;
  }function e(t) {
    return void 0 !== t && null !== t;
  }function n(t) {
    return !0 === t;
  }function r(t) {
    return "string" == typeof t || "number" == typeof t || "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "boolean" == typeof t;
  }function i(t) {
    return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
  }function o(t) {
    return "[object Object]" === Nn.call(t);
  }function a(t) {
    var e = parseFloat(String(t));return e >= 0 && Math.floor(e) === e && isFinite(t);
  }function s(t) {
    return null == t ? "" : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? JSON.stringify(t, null, 2) : String(t);
  }function c(t) {
    var e = parseFloat(t);return isNaN(e) ? t : e;
  }function u(t, e) {
    for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) {
      n[r[i]] = !0;
    }return e ? function (t) {
      return n[t.toLowerCase()];
    } : function (t) {
      return n[t];
    };
  }function l(t, e) {
    if (t.length) {
      var n = t.indexOf(e);if (n > -1) return t.splice(n, 1);
    }
  }function f(t, e) {
    return Mn.call(t, e);
  }function p(t) {
    var e = Object.create(null);return function (n) {
      return e[n] || (e[n] = t(n));
    };
  }function d(t, e) {
    function n(n) {
      var r = arguments.length;return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
    }return n._length = t.length, n;
  }function v(t, e) {
    e = e || 0;for (var n = t.length - e, r = new Array(n); n--;) {
      r[n] = t[n + e];
    }return r;
  }function h(t, e) {
    for (var n in e) {
      t[n] = e[n];
    }return t;
  }function m(t) {
    for (var e = {}, n = 0; n < t.length; n++) {
      t[n] && h(e, t[n]);
    }return e;
  }function y(t, e, n) {}function g(t, e) {
    if (t === e) return !0;var n = i(t),
        r = i(e);if (!n || !r) return !n && !r && String(t) === String(e);try {
      var o = Array.isArray(t),
          a = Array.isArray(e);if (o && a) return t.length === e.length && t.every(function (t, n) {
        return g(t, e[n]);
      });if (o || a) return !1;var s = Object.keys(t),
          c = Object.keys(e);return s.length === c.length && s.every(function (n) {
        return g(t[n], e[n]);
      });
    } catch (t) {
      return !1;
    }
  }function _(t, e) {
    for (var n = 0; n < t.length; n++) {
      if (g(t[n], e)) return n;
    }return -1;
  }function b(t) {
    var e = !1;return function () {
      e || (e = !0, t.apply(this, arguments));
    };
  }function $(t) {
    var e = (t + "").charCodeAt(0);return 36 === e || 95 === e;
  }function C(t, e, n, r) {
    Object.defineProperty(t, e, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
  }function w(t) {
    return "function" == typeof t && /native code/.test(t.toString());
  }function x(t) {
    return new mr(void 0, void 0, void 0, String(t));
  }function k(t, e) {
    var n = t.componentOptions,
        r = new mr(t.tag, t.data, t.children, t.text, t.elm, t.context, n, t.asyncFactory);return r.ns = t.ns, r.isStatic = t.isStatic, r.key = t.key, r.isComment = t.isComment, r.fnContext = t.fnContext, r.fnOptions = t.fnOptions, r.fnScopeId = t.fnScopeId, r.isCloned = !0, e && (t.children && (r.children = A(t.children, !0)), n && n.children && (n.children = A(n.children, !0))), r;
  }function A(t, e) {
    for (var n = t.length, r = new Array(n), i = 0; i < n; i++) {
      r[i] = k(t[i], e);
    }return r;
  }function O(t, e, n) {
    t.__proto__ = e;
  }function S(t, e, n) {
    for (var r = 0, i = n.length; r < i; r++) {
      var o = n[r];C(t, o, e[o]);
    }
  }function T(t, e) {
    if (i(t) && !(t instanceof mr)) {
      var n;return f(t, "__ob__") && t.__ob__ instanceof wr ? n = t.__ob__ : Cr.shouldConvert && !ur() && (Array.isArray(t) || o(t)) && Object.isExtensible(t) && !t._isVue && (n = new wr(t)), e && n && n.vmCount++, n;
    }
  }function E(t, e, n, r, i) {
    var o = new vr(),
        a = Object.getOwnPropertyDescriptor(t, e);if (!a || !1 !== a.configurable) {
      var s = a && a.get,
          c = a && a.set,
          u = !i && T(n);Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function get() {
          var e = s ? s.call(t) : n;return vr.target && (o.depend(), u && (u.dep.depend(), Array.isArray(e) && I(e))), e;
        }, set: function set(e) {
          var r = s ? s.call(t) : n;e === r || e != e && r != r || (c ? c.call(t, e) : n = e, u = !i && T(e), o.notify());
        } });
    }
  }function j(t, e, n) {
    if (Array.isArray(t) && a(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;if (e in t && !(e in Object.prototype)) return t[e] = n, n;var r = t.__ob__;return t._isVue || r && r.vmCount ? n : r ? (E(r.value, e, n), r.dep.notify(), n) : (t[e] = n, n);
  }function N(t, e) {
    if (Array.isArray(t) && a(e)) t.splice(e, 1);else {
      var n = t.__ob__;t._isVue || n && n.vmCount || f(t, e) && (delete t[e], n && n.dep.notify());
    }
  }function I(t) {
    for (var e = void 0, n = 0, r = t.length; n < r; n++) {
      (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && I(e);
    }
  }function L(t, e) {
    if (!e) return t;for (var n, r, i, a = Object.keys(e), s = 0; s < a.length; s++) {
      r = t[n = a[s]], i = e[n], f(t, n) ? o(r) && o(i) && L(r, i) : j(t, n, i);
    }return t;
  }function M(t, e, n) {
    return n ? function () {
      var r = "function" == typeof e ? e.call(n, n) : e,
          i = "function" == typeof t ? t.call(n, n) : t;return r ? L(r, i) : i;
    } : e ? t ? function () {
      return L("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t);
    } : e : t;
  }function D(t, e) {
    return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
  }function P(t, e, n, r) {
    var i = Object.create(t || null);return e ? h(i, e) : i;
  }function F(t, e, n) {
    function r(r) {
      var i = xr[r] || Or;u[r] = i(t[r], e[r], n, r);
    }"function" == typeof e && (e = e.options), function (t, e) {
      var n = t.props;if (n) {
        var r,
            i,
            a = {};if (Array.isArray(n)) for (r = n.length; r--;) {
          "string" == typeof (i = n[r]) && (a[Pn(i)] = { type: null });
        } else if (o(n)) for (var s in n) {
          i = n[s], a[Pn(s)] = o(i) ? i : { type: i };
        }t.props = a;
      }
    }(e), function (t, e) {
      var n = t.inject;if (n) {
        var r = t.inject = {};if (Array.isArray(n)) for (var i = 0; i < n.length; i++) {
          r[n[i]] = { from: n[i] };
        } else if (o(n)) for (var a in n) {
          var s = n[a];r[a] = o(s) ? h({ from: a }, s) : { from: s };
        }
      }
    }(e), function (t) {
      var e = t.directives;if (e) for (var n in e) {
        var r = e[n];"function" == typeof r && (e[n] = { bind: r, update: r });
      }
    }(e);var i = e.extends;if (i && (t = F(t, i, n)), e.mixins) for (var a = 0, s = e.mixins.length; a < s; a++) {
      t = F(t, e.mixins[a], n);
    }var c,
        u = {};for (c in t) {
      r(c);
    }for (c in e) {
      f(t, c) || r(c);
    }return u;
  }function R(t, e, n, r) {
    if ("string" == typeof n) {
      var i = t[e];if (f(i, n)) return i[n];var o = Pn(n);if (f(i, o)) return i[o];var a = Fn(o);if (f(i, a)) return i[a];return i[n] || i[o] || i[a];
    }
  }function H(t, e, n, r) {
    var i = e[t],
        o = !f(n, t),
        a = n[t];if (U(Boolean, i.type) && (o && !f(i, "default") ? a = !1 : U(String, i.type) || "" !== a && a !== Hn(t) || (a = !0)), void 0 === a) {
      a = function (t, e, n) {
        if (!f(e, "default")) return;var r = e.default;if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];return "function" == typeof r && "Function" !== B(e.type) ? r.call(t) : r;
      }(r, i, t);var s = Cr.shouldConvert;Cr.shouldConvert = !0, T(a), Cr.shouldConvert = s;
    }return a;
  }function B(t) {
    var e = t && t.toString().match(/^\s*function (\w+)/);return e ? e[1] : "";
  }function U(t, e) {
    if (!Array.isArray(e)) return B(e) === B(t);for (var n = 0, r = e.length; n < r; n++) {
      if (B(e[n]) === B(t)) return !0;
    }return !1;
  }function V(t, e, n) {
    if (e) for (var r = e; r = r.$parent;) {
      var i = r.$options.errorCaptured;if (i) for (var o = 0; o < i.length; o++) {
        try {
          if (!1 === i[o].call(r, t, e, n)) return;
        } catch (t) {
          z(t, r, "errorCaptured hook");
        }
      }
    }z(t, e, n);
  }function z(t, e, n) {
    if (Jn.errorHandler) try {
      return Jn.errorHandler.call(null, t, e, n);
    } catch (t) {
      K(t, null, "config.errorHandler");
    }K(t, e, n);
  }function K(t, e, n) {
    if (!Gn && !Zn || "undefined" == typeof console) throw t;console.error(t);
  }function J() {
    Tr = !1;var t = Sr.slice(0);Sr.length = 0;for (var e = 0; e < t.length; e++) {
      t[e]();
    }
  }function q(t, e) {
    var n;if (Sr.push(function () {
      if (t) try {
        t.call(e);
      } catch (t) {
        V(t, e, "nextTick");
      } else n && n(e);
    }), Tr || (Tr = !0, Er ? Ar() : kr()), !t && "undefined" != typeof Promise) return new Promise(function (t) {
      n = t;
    });
  }function W(t) {
    G(t, Mr), Mr.clear();
  }function G(t, e) {
    var n,
        r,
        o = Array.isArray(t);if ((o || i(t)) && !Object.isFrozen(t)) {
      if (t.__ob__) {
        var a = t.__ob__.dep.id;if (e.has(a)) return;e.add(a);
      }if (o) for (n = t.length; n--;) {
        G(t[n], e);
      } else for (n = (r = Object.keys(t)).length; n--;) {
        G(t[r[n]], e);
      }
    }
  }function Z(t) {
    function e() {
      var t = arguments,
          n = e.fns;if (!Array.isArray(n)) return n.apply(null, arguments);for (var r = n.slice(), i = 0; i < r.length; i++) {
        r[i].apply(null, t);
      }
    }return e.fns = t, e;
  }function X(e, n, r, i, o) {
    var a, s, c, u;for (a in e) {
      s = e[a], c = n[a], u = Dr(a), t(s) || (t(c) ? (t(s.fns) && (s = e[a] = Z(s)), r(u.name, s, u.once, u.capture, u.passive, u.params)) : s !== c && (c.fns = s, e[a] = c));
    }for (a in n) {
      t(e[a]) && i((u = Dr(a)).name, n[a], u.capture);
    }
  }function Y(r, i, o) {
    function a() {
      o.apply(this, arguments), l(s.fns, a);
    }r instanceof mr && (r = r.data.hook || (r.data.hook = {}));var s,
        c = r[i];t(c) ? s = Z([a]) : e(c.fns) && n(c.merged) ? (s = c).fns.push(a) : s = Z([c, a]), s.merged = !0, r[i] = s;
  }function Q(t, n, r, i, o) {
    if (e(n)) {
      if (f(n, r)) return t[r] = n[r], o || delete n[r], !0;if (f(n, i)) return t[r] = n[i], o || delete n[i], !0;
    }return !1;
  }function tt(t) {
    return e(t) && e(t.text) && function (t) {
      return !1 === t;
    }(t.isComment);
  }function et(i, o) {
    var a,
        s,
        c,
        u,
        l = [];for (a = 0; a < i.length; a++) {
      t(s = i[a]) || "boolean" == typeof s || (u = l[c = l.length - 1], Array.isArray(s) ? s.length > 0 && (tt((s = et(s, (o || "") + "_" + a))[0]) && tt(u) && (l[c] = x(u.text + s[0].text), s.shift()), l.push.apply(l, s)) : r(s) ? tt(u) ? l[c] = x(u.text + s) : "" !== s && l.push(x(s)) : tt(s) && tt(u) ? l[c] = x(u.text + s.text) : (n(i._isVList) && e(s.tag) && t(s.key) && e(o) && (s.key = "__vlist" + o + "_" + a + "__"), l.push(s)));
    }return l;
  }function nt(t, e) {
    return (t.__esModule || fr && "Module" === t[Symbol.toStringTag]) && (t = t.default), i(t) ? e.extend(t) : t;
  }function rt(t) {
    return t.isComment && t.asyncFactory;
  }function it(t) {
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) {
      var r = t[n];if (e(r) && (e(r.componentOptions) || rt(r))) return r;
    }
  }function ot(t, e, n) {
    n ? Lr.$once(t, e) : Lr.$on(t, e);
  }function at(t, e) {
    Lr.$off(t, e);
  }function st(t, e, n) {
    Lr = t, X(e, n || {}, ot, at), Lr = void 0;
  }function ct(t, e) {
    var n = {};if (!t) return n;for (var r = 0, i = t.length; r < i; r++) {
      var o = t[r],
          a = o.data;if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== e && o.fnContext !== e || !a || null == a.slot) (n.default || (n.default = [])).push(o);else {
        var s = a.slot,
            c = n[s] || (n[s] = []);"template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o);
      }
    }for (var u in n) {
      n[u].every(ut) && delete n[u];
    }return n;
  }function ut(t) {
    return t.isComment && !t.asyncFactory || " " === t.text;
  }function lt(t, e) {
    e = e || {};for (var n = 0; n < t.length; n++) {
      Array.isArray(t[n]) ? lt(t[n], e) : e[t[n].key] = t[n].fn;
    }return e;
  }function ft(t) {
    for (; t && (t = t.$parent);) {
      if (t._inactive) return !0;
    }return !1;
  }function pt(t, e) {
    if (e) {
      if (t._directInactive = !1, ft(t)) return;
    } else if (t._directInactive) return;if (t._inactive || null === t._inactive) {
      t._inactive = !1;for (var n = 0; n < t.$children.length; n++) {
        pt(t.$children[n]);
      }vt(t, "activated");
    }
  }function dt(t, e) {
    if (!(e && (t._directInactive = !0, ft(t)) || t._inactive)) {
      t._inactive = !0;for (var n = 0; n < t.$children.length; n++) {
        dt(t.$children[n]);
      }vt(t, "deactivated");
    }
  }function vt(t, e) {
    var n = t.$options[e];if (n) for (var r = 0, i = n.length; r < i; r++) {
      try {
        n[r].call(t);
      } catch (n) {
        V(n, t, e + " hook");
      }
    }t._hasHookEvent && t.$emit("hook:" + e);
  }function ht() {
    Ur = !0;var t, e;for (Fr.sort(function (t, e) {
      return t.id - e.id;
    }), Vr = 0; Vr < Fr.length; Vr++) {
      e = (t = Fr[Vr]).id, Hr[e] = null, t.run();
    }var n = Rr.slice(),
        r = Fr.slice();Vr = Fr.length = Rr.length = 0, Hr = {}, Br = Ur = !1, function (t) {
      for (var e = 0; e < t.length; e++) {
        t[e]._inactive = !0, pt(t[e], !0);
      }
    }(n), function (t) {
      var e = t.length;for (; e--;) {
        var n = t[e],
            r = n.vm;r._watcher === n && r._isMounted && vt(r, "updated");
      }
    }(r), lr && Jn.devtools && lr.emit("flush");
  }function mt(t, e, n) {
    Jr.get = function () {
      return this[e][n];
    }, Jr.set = function (t) {
      this[e][n] = t;
    }, Object.defineProperty(t, n, Jr);
  }function yt(t) {
    t._watchers = [];var e = t.$options;e.props && function (t, e) {
      var n = t.$options.propsData || {},
          r = t._props = {},
          i = t.$options._propKeys = [],
          o = !t.$parent;Cr.shouldConvert = o;var a = function a(o) {
        i.push(o);var a = H(o, e, n, t);E(r, o, a), o in t || mt(t, "_props", o);
      };for (var s in e) {
        a(s);
      }Cr.shouldConvert = !0;
    }(t, e.props), e.methods && function (t, e) {
      t.$options.props;for (var n in e) {
        t[n] = null == e[n] ? y : d(e[n], t);
      }
    }(t, e.methods), e.data ? function (t) {
      var e = t.$options.data;e = t._data = "function" == typeof e ? function (t, e) {
        try {
          return t.call(e, e);
        } catch (t) {
          return V(t, e, "data()"), {};
        }
      }(e, t) : e || {}, o(e) || (e = {});var n = Object.keys(e),
          r = t.$options.props,
          i = (t.$options.methods, n.length);for (; i--;) {
        var a = n[i];r && f(r, a) || $(a) || mt(t, "_data", a);
      }T(e, !0);
    }(t) : T(t._data = {}, !0), e.computed && function (t, e) {
      var n = t._computedWatchers = Object.create(null),
          r = ur();for (var i in e) {
        var o = e[i],
            a = "function" == typeof o ? o : o.get;r || (n[i] = new Kr(t, a || y, y, qr)), i in t || gt(t, i, o);
      }
    }(t, e.computed), e.watch && e.watch !== ir && function (t, e) {
      for (var n in e) {
        var r = e[n];if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
          bt(t, n, r[i]);
        } else bt(t, n, r);
      }
    }(t, e.watch);
  }function gt(t, e, n) {
    var r = !ur();"function" == typeof n ? (Jr.get = r ? _t(e) : n, Jr.set = y) : (Jr.get = n.get ? r && !1 !== n.cache ? _t(e) : n.get : y, Jr.set = n.set ? n.set : y), Object.defineProperty(t, e, Jr);
  }function _t(t) {
    return function () {
      var e = this._computedWatchers && this._computedWatchers[t];if (e) return e.dirty && e.evaluate(), vr.target && e.depend(), e.value;
    };
  }function bt(t, e, n, r) {
    return o(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
  }function $t(t, e) {
    if (t) {
      for (var n = Object.create(null), r = fr ? Reflect.ownKeys(t).filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      }) : Object.keys(t), i = 0; i < r.length; i++) {
        for (var o = r[i], a = t[o].from, s = e; s;) {
          if (s._provided && a in s._provided) {
            n[o] = s._provided[a];break;
          }s = s.$parent;
        }if (!s && "default" in t[o]) {
          var c = t[o].default;n[o] = "function" == typeof c ? c.call(e) : c;
        }
      }return n;
    }
  }function Ct(t, n) {
    var r, o, a, s, c;if (Array.isArray(t) || "string" == typeof t) for (r = new Array(t.length), o = 0, a = t.length; o < a; o++) {
      r[o] = n(t[o], o);
    } else if ("number" == typeof t) for (r = new Array(t), o = 0; o < t; o++) {
      r[o] = n(o + 1, o);
    } else if (i(t)) for (s = Object.keys(t), r = new Array(s.length), o = 0, a = s.length; o < a; o++) {
      c = s[o], r[o] = n(t[c], c, o);
    }return e(r) && (r._isVList = !0), r;
  }function wt(t, e, n, r) {
    var i,
        o = this.$scopedSlots[t];if (o) n = n || {}, r && (n = h(h({}, r), n)), i = o(n) || e;else {
      var a = this.$slots[t];a && (a._rendered = !0), i = a || e;
    }var s = n && n.slot;return s ? this.$createElement("template", { slot: s }, i) : i;
  }function xt(t) {
    return R(this.$options, "filters", t) || Un;
  }function kt(t, e, n, r) {
    var i = Jn.keyCodes[e] || n;return i ? Array.isArray(i) ? -1 === i.indexOf(t) : i !== t : r ? Hn(r) !== e : void 0;
  }function At(t, e, n, r, o) {
    if (n) if (i(n)) {
      Array.isArray(n) && (n = m(n));var a,
          s = function s(i) {
        if ("class" === i || "style" === i || Ln(i)) a = t;else {
          var s = t.attrs && t.attrs.type;a = r || Jn.mustUseProp(e, s, i) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
        }if (!(i in a) && (a[i] = n[i], o)) {
          (t.on || (t.on = {}))["update:" + i] = function (t) {
            n[i] = t;
          };
        }
      };for (var c in n) {
        s(c);
      }
    } else ;return t;
  }function Ot(t, e) {
    var n = this._staticTrees || (this._staticTrees = []),
        r = n[t];return r && !e ? Array.isArray(r) ? A(r) : k(r) : (r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), Tt(r, "__static__" + t, !1), r);
  }function St(t, e, n) {
    return Tt(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
  }function Tt(t, e, n) {
    if (Array.isArray(t)) for (var r = 0; r < t.length; r++) {
      t[r] && "string" != typeof t[r] && Et(t[r], e + "_" + r, n);
    } else Et(t, e, n);
  }function Et(t, e, n) {
    t.isStatic = !0, t.key = e, t.isOnce = n;
  }function jt(t, e) {
    if (e) if (o(e)) {
      var n = t.on = t.on ? h({}, t.on) : {};for (var r in e) {
        var i = n[r],
            a = e[r];n[r] = i ? [].concat(i, a) : a;
      }
    } else ;return t;
  }function Nt(t) {
    t._o = St, t._n = c, t._s = s, t._l = Ct, t._t = wt, t._q = g, t._i = _, t._m = Ot, t._f = xt, t._k = kt, t._b = At, t._v = x, t._e = gr, t._u = lt, t._g = jt;
  }function It(t, e, r, i, o) {
    var a = o.options;this.data = t, this.props = e, this.children = r, this.parent = i, this.listeners = t.on || jn, this.injections = $t(a.inject, i), this.slots = function () {
      return ct(r, i);
    };var s = Object.create(i),
        c = n(a._compiled),
        u = !c;c && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || jn), a._scopeId ? this._c = function (t, e, n, r) {
      var o = Dt(s, t, e, n, r, u);return o && (o.fnScopeId = a._scopeId, o.fnContext = i), o;
    } : this._c = function (t, e, n, r) {
      return Dt(s, t, e, n, r, u);
    };
  }function Lt(t, e) {
    for (var n in e) {
      t[Pn(n)] = e[n];
    }
  }function Mt(r, o, a, s, c) {
    if (!t(r)) {
      var u = a.$options._base;if (i(r) && (r = u.extend(r)), "function" == typeof r) {
        var l;if (t(r.cid) && (l = r, void 0 === (r = function (r, o, a) {
          if (n(r.error) && e(r.errorComp)) return r.errorComp;if (e(r.resolved)) return r.resolved;if (n(r.loading) && e(r.loadingComp)) return r.loadingComp;if (!e(r.contexts)) {
            var s = r.contexts = [a],
                c = !0,
                u = function u() {
              for (var t = 0, e = s.length; t < e; t++) {
                s[t].$forceUpdate();
              }
            },
                l = b(function (t) {
              r.resolved = nt(t, o), c || u();
            }),
                f = b(function (t) {
              e(r.errorComp) && (r.error = !0, u());
            }),
                p = r(l, f);return i(p) && ("function" == typeof p.then ? t(r.resolved) && p.then(l, f) : e(p.component) && "function" == typeof p.component.then && (p.component.then(l, f), e(p.error) && (r.errorComp = nt(p.error, o)), e(p.loading) && (r.loadingComp = nt(p.loading, o), 0 === p.delay ? r.loading = !0 : setTimeout(function () {
              t(r.resolved) && t(r.error) && (r.loading = !0, u());
            }, p.delay || 200)), e(p.timeout) && setTimeout(function () {
              t(r.resolved) && f(null);
            }, p.timeout))), c = !1, r.loading ? r.loadingComp : r.resolved;
          }r.contexts.push(a);
        }(l, u, a)))) return function (t, e, n, r, i) {
          var o = gr();return o.asyncFactory = t, o.asyncMeta = { data: e, context: n, children: r, tag: i }, o;
        }(l, o, a, s, c);o = o || {}, Ft(r), e(o.model) && function (t, n) {
          var r = t.model && t.model.prop || "value",
              i = t.model && t.model.event || "input";(n.props || (n.props = {}))[r] = n.model.value;var o = n.on || (n.on = {});e(o[i]) ? o[i] = [n.model.callback].concat(o[i]) : o[i] = n.model.callback;
        }(r.options, o);var f = function (n, r, i) {
          var o = r.options.props;if (!t(o)) {
            var a = {},
                s = n.attrs,
                c = n.props;if (e(s) || e(c)) for (var u in o) {
              var l = Hn(u);Q(a, c, u, l, !0) || Q(a, s, u, l, !1);
            }return a;
          }
        }(o, r);if (n(r.options.functional)) return function (t, n, r, i, o) {
          var a = t.options,
              s = {},
              c = a.props;if (e(c)) for (var u in c) {
            s[u] = H(u, c, n || jn);
          } else e(r.attrs) && Lt(s, r.attrs), e(r.props) && Lt(s, r.props);var l = new It(r, s, o, i, t),
              f = a.render.call(null, l._c, l);return f instanceof mr && (f.fnContext = i, f.fnOptions = a, r.slot && ((f.data || (f.data = {})).slot = r.slot)), f;
        }(r, f, o, a, s);var p = o.on;if (o.on = o.nativeOn, n(r.options.abstract)) {
          var d = o.slot;o = {}, d && (o.slot = d);
        }!function (t) {
          t.hook || (t.hook = {});for (var e = 0; e < Gr.length; e++) {
            var n = Gr[e],
                r = t.hook[n],
                i = Wr[n];t.hook[n] = r ? function (t, e) {
              return function (n, r, i, o) {
                t(n, r, i, o), e(n, r, i, o);
              };
            }(i, r) : i;
          }
        }(o);var v = r.options.name || c;return new mr("vue-component-" + r.cid + (v ? "-" + v : ""), o, void 0, void 0, void 0, a, { Ctor: r, propsData: f, listeners: p, tag: c, children: s }, l);
      }
    }
  }function Dt(t, i, o, a, s, c) {
    return (Array.isArray(o) || r(o)) && (s = a, a = o, o = void 0), n(c) && (s = Xr), function (t, n, i, o, a) {
      if (e(i) && e(i.__ob__)) return gr();e(i) && e(i.is) && (n = i.is);if (!n) return gr();Array.isArray(o) && "function" == typeof o[0] && ((i = i || {}).scopedSlots = { default: o[0] }, o.length = 0);a === Xr ? o = function (t) {
        return r(t) ? [x(t)] : Array.isArray(t) ? et(t) : void 0;
      }(o) : a === Zr && (o = function (t) {
        for (var e = 0; e < t.length; e++) {
          if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
        }return t;
      }(o));var s, c;if ("string" == typeof n) {
        var u;c = t.$vnode && t.$vnode.ns || Jn.getTagNamespace(n), s = Jn.isReservedTag(n) ? new mr(Jn.parsePlatformTagName(n), i, o, void 0, void 0, t) : e(u = R(t.$options, "components", n)) ? Mt(u, i, t, o, n) : new mr(n, i, o, void 0, void 0, t);
      } else s = Mt(n, i, t, o);return e(s) ? (c && Pt(s, c), s) : gr();
    }(t, i, o, a, s);
  }function Pt(r, i, o) {
    if (r.ns = i, "foreignObject" === r.tag && (i = void 0, o = !0), e(r.children)) for (var a = 0, s = r.children.length; a < s; a++) {
      var c = r.children[a];e(c.tag) && (t(c.ns) || n(o)) && Pt(c, i, o);
    }
  }function Ft(t) {
    var e = t.options;if (t.super) {
      var n = Ft(t.super);if (n !== t.superOptions) {
        t.superOptions = n;var r = function (t) {
          var e,
              n = t.options,
              r = t.extendOptions,
              i = t.sealedOptions;for (var o in n) {
            n[o] !== i[o] && (e || (e = {}), e[o] = function (t, e, n) {
              {
                if (Array.isArray(t)) {
                  var r = [];n = Array.isArray(n) ? n : [n], e = Array.isArray(e) ? e : [e];for (var i = 0; i < t.length; i++) {
                    (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);
                  }return r;
                }return t;
              }
            }(n[o], r[o], i[o]));
          }return e;
        }(t);r && h(t.extendOptions, r), (e = t.options = F(n, t.extendOptions)).name && (e.components[e.name] = t);
      }
    }return e;
  }function Rt(t) {
    this._init(t);
  }function Ht(t) {
    t.cid = 0;var e = 1;t.extend = function (t) {
      t = t || {};var n = this,
          r = n.cid,
          i = t._Ctor || (t._Ctor = {});if (i[r]) return i[r];var o = t.name || n.options.name,
          a = function a(t) {
        this._init(t);
      };return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, a.options = F(n.options, t), a.super = n, a.options.props && function (t) {
        var e = t.options.props;for (var n in e) {
          mt(t.prototype, "_props", n);
        }
      }(a), a.options.computed && function (t) {
        var e = t.options.computed;for (var n in e) {
          gt(t.prototype, n, e[n]);
        }
      }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, zn.forEach(function (t) {
        a[t] = n[t];
      }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, a.sealedOptions = h({}, a.options), i[r] = a, a;
    };
  }function Bt(t) {
    return t && (t.Ctor.options.name || t.tag);
  }function Ut(t, e) {
    return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!function (t) {
      return "[object RegExp]" === Nn.call(t);
    }(t) && t.test(e);
  }function Vt(t, e) {
    var n = t.cache,
        r = t.keys,
        i = t._vnode;for (var o in n) {
      var a = n[o];if (a) {
        var s = Bt(a.componentOptions);s && !e(s) && zt(n, o, r, i);
      }
    }
  }function zt(t, e, n, r) {
    var i = t[e];!i || r && i.tag === r.tag || i.componentInstance.$destroy(), t[e] = null, l(n, e);
  }function Kt(t) {
    for (var n = t.data, r = t, i = t; e(i.componentInstance);) {
      (i = i.componentInstance._vnode) && i.data && (n = Jt(i.data, n));
    }for (; e(r = r.parent);) {
      r && r.data && (n = Jt(n, r.data));
    }return function (t, n) {
      if (e(t) || e(n)) return qt(t, Wt(n));return "";
    }(n.staticClass, n.class);
  }function Jt(t, n) {
    return { staticClass: qt(t.staticClass, n.staticClass), class: e(t.class) ? [t.class, n.class] : n.class };
  }function qt(t, e) {
    return t ? e ? t + " " + e : t : e || "";
  }function Wt(t) {
    return Array.isArray(t) ? function (t) {
      for (var n, r = "", i = 0, o = t.length; i < o; i++) {
        e(n = Wt(t[i])) && "" !== n && (r && (r += " "), r += n);
      }return r;
    }(t) : i(t) ? function (t) {
      var e = "";for (var n in t) {
        t[n] && (e && (e += " "), e += n);
      }return e;
    }(t) : "string" == typeof t ? t : "";
  }function Gt(t) {
    return bi(t) ? "svg" : "math" === t ? "math" : void 0;
  }function Zt(t) {
    if ("string" == typeof t) {
      var e = document.querySelector(t);return e || document.createElement("div");
    }return t;
  }function Xt(t, e) {
    var n = t.data.ref;if (n) {
      var r = t.context,
          i = t.componentInstance || t.elm,
          o = r.$refs;e ? Array.isArray(o[n]) ? l(o[n], i) : o[n] === i && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [i] : o[n] = i;
    }
  }function Yt(r, i) {
    return r.key === i.key && (r.tag === i.tag && r.isComment === i.isComment && e(r.data) === e(i.data) && function (t, n) {
      if ("input" !== t.tag) return !0;var r,
          i = e(r = t.data) && e(r = r.attrs) && r.type,
          o = e(r = n.data) && e(r = r.attrs) && r.type;return i === o || wi(i) && wi(o);
    }(r, i) || n(r.isAsyncPlaceholder) && r.asyncFactory === i.asyncFactory && t(i.asyncFactory.error));
  }function Qt(t, n, r) {
    var i,
        o,
        a = {};for (i = n; i <= r; ++i) {
      e(o = t[i].key) && (a[o] = i);
    }return a;
  }function te(t, e) {
    (t.data.directives || e.data.directives) && function (t, e) {
      var n,
          r,
          i,
          o = t === Ai,
          a = e === Ai,
          s = ee(t.data.directives, t.context),
          c = ee(e.data.directives, e.context),
          u = [],
          l = [];for (n in c) {
        r = s[n], i = c[n], r ? (i.oldValue = r.value, ne(i, "update", e, t), i.def && i.def.componentUpdated && l.push(i)) : (ne(i, "bind", e, t), i.def && i.def.inserted && u.push(i));
      }if (u.length) {
        var f = function f() {
          for (var n = 0; n < u.length; n++) {
            ne(u[n], "inserted", e, t);
          }
        };o ? Y(e, "insert", f) : f();
      }l.length && Y(e, "postpatch", function () {
        for (var n = 0; n < l.length; n++) {
          ne(l[n], "componentUpdated", e, t);
        }
      });if (!o) for (n in s) {
        c[n] || ne(s[n], "unbind", t, t, a);
      }
    }(t, e);
  }function ee(t, e) {
    var n = Object.create(null);if (!t) return n;var r, i;for (r = 0; r < t.length; r++) {
      (i = t[r]).modifiers || (i.modifiers = Ti), n[function (t) {
        return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
      }(i)] = i, i.def = R(e.$options, "directives", i.name);
    }return n;
  }function ne(t, e, n, r, i) {
    var o = t.def && t.def[e];if (o) try {
      o(n.elm, t, n, r, i);
    } catch (r) {
      V(r, n.context, "directive " + t.name + " " + e + " hook");
    }
  }function re(n, r) {
    var i = r.componentOptions;if (!(e(i) && !1 === i.Ctor.options.inheritAttrs || t(n.data.attrs) && t(r.data.attrs))) {
      var o,
          a,
          s = r.elm,
          c = n.data.attrs || {},
          u = r.data.attrs || {};e(u.__ob__) && (u = r.data.attrs = h({}, u));for (o in u) {
        a = u[o], c[o] !== a && ie(s, o, a);
      }(Qn || er) && u.value !== c.value && ie(s, "value", u.value);for (o in c) {
        t(u[o]) && (hi(o) ? s.removeAttributeNS(vi, mi(o)) : pi(o) || s.removeAttribute(o));
      }
    }
  }function ie(t, e, n) {
    if (di(e)) yi(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n));else if (pi(e)) t.setAttribute(e, yi(n) || "false" === n ? "false" : "true");else if (hi(e)) yi(n) ? t.removeAttributeNS(vi, mi(e)) : t.setAttributeNS(vi, e, n);else if (yi(n)) t.removeAttribute(e);else {
      if (Qn && !tr && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
        var r = function r(e) {
          e.stopImmediatePropagation(), t.removeEventListener("input", r);
        };t.addEventListener("input", r), t.__ieph = !0;
      }t.setAttribute(e, n);
    }
  }function oe(n, r) {
    var i = r.elm,
        o = r.data,
        a = n.data;if (!(t(o.staticClass) && t(o.class) && (t(a) || t(a.staticClass) && t(a.class)))) {
      var s = Kt(r),
          c = i._transitionClasses;e(c) && (s = qt(s, Wt(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s);
    }
  }function ae(t) {
    function e() {
      (a || (a = [])).push(t.slice(v, i).trim()), v = i + 1;
    }var n,
        r,
        i,
        o,
        a,
        s = !1,
        c = !1,
        u = !1,
        l = !1,
        f = 0,
        p = 0,
        d = 0,
        v = 0;for (i = 0; i < t.length; i++) {
      if (r = n, n = t.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);else if (c) 34 === n && 92 !== r && (c = !1);else if (u) 96 === n && 92 !== r && (u = !1);else if (l) 47 === n && 92 !== r && (l = !1);else if (124 !== n || 124 === t.charCodeAt(i + 1) || 124 === t.charCodeAt(i - 1) || f || p || d) {
        switch (n) {case 34:
            c = !0;break;case 39:
            s = !0;break;case 96:
            u = !0;break;case 40:
            d++;break;case 41:
            d--;break;case 91:
            p++;break;case 93:
            p--;break;case 123:
            f++;break;case 125:
            f--;}if (47 === n) {
          for (var h = i - 1, m = void 0; h >= 0 && " " === (m = t.charAt(h)); h--) {}m && Ii.test(m) || (l = !0);
        }
      } else void 0 === o ? (v = i + 1, o = t.slice(0, i).trim()) : e();
    }if (void 0 === o ? o = t.slice(0, i).trim() : 0 !== v && e(), a) for (i = 0; i < a.length; i++) {
      o = function (t, e) {
        var n = e.indexOf("(");{
          if (n < 0) return '_f("' + e + '")(' + t + ")";var r = e.slice(0, n),
              i = e.slice(n + 1);return '_f("' + r + '")(' + t + "," + i;
        }
      }(o, a[i]);
    }return o;
  }function se(t) {
    console.error("[Vue compiler]: " + t);
  }function ce(t, e) {
    return t ? t.map(function (t) {
      return t[e];
    }).filter(function (t) {
      return t;
    }) : [];
  }function ue(t, e, n) {
    (t.props || (t.props = [])).push({ name: e, value: n }), t.plain = !1;
  }function le(t, e, n) {
    (t.attrs || (t.attrs = [])).push({ name: e, value: n }), t.plain = !1;
  }function fe(t, e, n) {
    t.attrsMap[e] = n, t.attrsList.push({ name: e, value: n });
  }function pe(t, e, n, r, i, o) {
    (t.directives || (t.directives = [])).push({ name: e, rawName: n, value: r, arg: i, modifiers: o }), t.plain = !1;
  }function de(t, e, n, r, i, o) {
    (r = r || jn).capture && (delete r.capture, e = "!" + e), r.once && (delete r.once, e = "~" + e), r.passive && (delete r.passive, e = "&" + e), "click" === e && (r.right ? (e = "contextmenu", delete r.right) : r.middle && (e = "mouseup"));var a;r.native ? (delete r.native, a = t.nativeEvents || (t.nativeEvents = {})) : a = t.events || (t.events = {});var s = { value: n };r !== jn && (s.modifiers = r);var c = a[e];Array.isArray(c) ? i ? c.unshift(s) : c.push(s) : a[e] = c ? i ? [s, c] : [c, s] : s, t.plain = !1;
  }function ve(t, e, n) {
    var r = he(t, ":" + e) || he(t, "v-bind:" + e);if (null != r) return ae(r);if (!1 !== n) {
      var i = he(t, e);if (null != i) return JSON.stringify(i);
    }
  }function he(t, e, n) {
    var r;if (null != (r = t.attrsMap[e])) for (var i = t.attrsList, o = 0, a = i.length; o < a; o++) {
      if (i[o].name === e) {
        i.splice(o, 1);break;
      }
    }return n && delete t.attrsMap[e], r;
  }function me(t, e, n) {
    var r = n || {},
        i = "$$v";r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"), r.number && (i = "_n(" + i + ")");var o = ye(e, i);t.model = { value: "(" + e + ")", expression: '"' + e + '"', callback: "function ($$v) {" + o + "}" };
  }function ye(t, e) {
    var n = function (t) {
      if (ei = t.length, t.indexOf("[") < 0 || t.lastIndexOf("]") < ei - 1) return (ii = t.lastIndexOf(".")) > -1 ? { exp: t.slice(0, ii), key: '"' + t.slice(ii + 1) + '"' } : { exp: t, key: null };ni = t, ii = oi = ai = 0;for (; !_e();) {
        be(ri = ge()) ? $e(ri) : 91 === ri && function (t) {
          var e = 1;oi = ii;for (; !_e();) {
            if (t = ge(), be(t)) $e(t);else if (91 === t && e++, 93 === t && e--, 0 === e) {
              ai = ii;break;
            }
          }
        }(ri);
      }return { exp: t.slice(0, oi), key: t.slice(oi + 1, ai) };
    }(t);return null === n.key ? t + "=" + e : "$set(" + n.exp + ", " + n.key + ", " + e + ")";
  }function ge() {
    return ni.charCodeAt(++ii);
  }function _e() {
    return ii >= ei;
  }function be(t) {
    return 34 === t || 39 === t;
  }function $e(t) {
    for (var e = t; !_e() && (t = ge()) !== e;) {}
  }function Ce(t, e, n, r, i) {
    e = function (t) {
      return t._withTask || (t._withTask = function () {
        Er = !0;var e = t.apply(null, arguments);return Er = !1, e;
      });
    }(e), n && (e = function (t, e, n) {
      var r = si;return function i() {
        null !== t.apply(null, arguments) && we(e, i, n, r);
      };
    }(e, t, r)), si.addEventListener(t, e, or ? { capture: r, passive: i } : r);
  }function we(t, e, n, r) {
    (r || si).removeEventListener(t, e._withTask || e, n);
  }function xe(n, r) {
    if (!t(n.data.on) || !t(r.data.on)) {
      var i = r.data.on || {},
          o = n.data.on || {};si = r.elm, function (t) {
        if (e(t[Li])) {
          var n = Qn ? "change" : "input";t[n] = [].concat(t[Li], t[n] || []), delete t[Li];
        }e(t[Mi]) && (t.change = [].concat(t[Mi], t.change || []), delete t[Mi]);
      }(i), X(i, o, Ce, we, r.context), si = void 0;
    }
  }function ke(n, r) {
    if (!t(n.data.domProps) || !t(r.data.domProps)) {
      var i,
          o,
          a = r.elm,
          s = n.data.domProps || {},
          u = r.data.domProps || {};e(u.__ob__) && (u = r.data.domProps = h({}, u));for (i in s) {
        t(u[i]) && (a[i] = "");
      }for (i in u) {
        if (o = u[i], "textContent" === i || "innerHTML" === i) {
          if (r.children && (r.children.length = 0), o === s[i]) continue;1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
        }if ("value" === i) {
          a._value = o;var l = t(o) ? "" : String(o);(function (t, n) {
            return !t.composing && ("OPTION" === t.tagName || function (t, e) {
              var n = !0;try {
                n = document.activeElement !== t;
              } catch (t) {}return n && t.value !== e;
            }(t, n) || function (t, n) {
              var r = t.value,
                  i = t._vModifiers;if (e(i)) {
                if (i.lazy) return !1;if (i.number) return c(r) !== c(n);if (i.trim) return r.trim() !== n.trim();
              }return r !== n;
            }(t, n));
          })(a, l) && (a.value = l);
        } else a[i] = o;
      }
    }
  }function Ae(t) {
    var e = Oe(t.style);return t.staticStyle ? h(t.staticStyle, e) : e;
  }function Oe(t) {
    return Array.isArray(t) ? m(t) : "string" == typeof t ? Fi(t) : t;
  }function Se(n, r) {
    var i = r.data,
        o = n.data;if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
      var a,
          s,
          c = r.elm,
          u = o.staticStyle,
          l = o.normalizedStyle || o.style || {},
          f = u || l,
          p = Oe(r.data.style) || {};r.data.normalizedStyle = e(p.__ob__) ? h({}, p) : p;var d = function (t, e) {
        var n,
            r = {};if (e) for (var i = t; i.componentInstance;) {
          (i = i.componentInstance._vnode) && i.data && (n = Ae(i.data)) && h(r, n);
        }(n = Ae(t.data)) && h(r, n);for (var o = t; o = o.parent;) {
          o.data && (n = Ae(o.data)) && h(r, n);
        }return r;
      }(r, !0);for (s in f) {
        t(d[s]) && Bi(c, s, "");
      }for (s in d) {
        (a = d[s]) !== f[s] && Bi(c, s, null == a ? "" : a);
      }
    }
  }function Te(t, e) {
    if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
      return t.classList.add(e);
    }) : t.classList.add(e);else {
      var n = " " + (t.getAttribute("class") || "") + " ";n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
    }
  }function Ee(t, e) {
    if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
      return t.classList.remove(e);
    }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");else {
      for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0;) {
        n = n.replace(r, " ");
      }(n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
    }
  }function je(t) {
    if (t) {
      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        var e = {};return !1 !== t.css && h(e, Ki(t.name || "v")), h(e, t), e;
      }return "string" == typeof t ? Ki(t) : void 0;
    }
  }function Ne(t) {
    Qi(function () {
      Qi(t);
    });
  }function Ie(t, e) {
    var n = t._transitionClasses || (t._transitionClasses = []);n.indexOf(e) < 0 && (n.push(e), Te(t, e));
  }function Le(t, e) {
    t._transitionClasses && l(t._transitionClasses, e), Ee(t, e);
  }function Me(t, e, n) {
    var r = De(t, e),
        i = r.type,
        o = r.timeout,
        a = r.propCount;if (!i) return n();var s = i === qi ? Zi : Yi,
        c = 0,
        u = function u() {
      t.removeEventListener(s, l), n();
    },
        l = function l(e) {
      e.target === t && ++c >= a && u();
    };setTimeout(function () {
      c < a && u();
    }, o + 1), t.addEventListener(s, l);
  }function De(t, e) {
    var n,
        r = window.getComputedStyle(t),
        i = r[Gi + "Delay"].split(", "),
        o = r[Gi + "Duration"].split(", "),
        a = Pe(i, o),
        s = r[Xi + "Delay"].split(", "),
        c = r[Xi + "Duration"].split(", "),
        u = Pe(s, c),
        l = 0,
        f = 0;e === qi ? a > 0 && (n = qi, l = a, f = o.length) : e === Wi ? u > 0 && (n = Wi, l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? qi : Wi : null) ? n === qi ? o.length : c.length : 0;return { type: n, timeout: l, propCount: f, hasTransform: n === qi && to.test(r[Gi + "Property"]) };
  }function Pe(t, e) {
    for (; t.length < e.length;) {
      t = t.concat(t);
    }return Math.max.apply(null, e.map(function (e, n) {
      return Fe(e) + Fe(t[n]);
    }));
  }function Fe(t) {
    return 1e3 * Number(t.slice(0, -1));
  }function Re(n, r) {
    var o = n.elm;e(o._leaveCb) && (o._leaveCb.cancelled = !0, o._leaveCb());var a = je(n.data.transition);if (!t(a) && !e(o._enterCb) && 1 === o.nodeType) {
      for (var s = a.css, u = a.type, l = a.enterClass, f = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, v = a.appearToClass, h = a.appearActiveClass, m = a.beforeEnter, y = a.enter, g = a.afterEnter, _ = a.enterCancelled, $ = a.beforeAppear, C = a.appear, w = a.afterAppear, x = a.appearCancelled, k = a.duration, A = Pr, O = Pr.$vnode; O && O.parent;) {
        A = (O = O.parent).context;
      }var S = !A._isMounted || !n.isRootInsert;if (!S || C || "" === C) {
        var T = S && d ? d : l,
            E = S && h ? h : p,
            j = S && v ? v : f,
            N = S ? $ || m : m,
            I = S && "function" == typeof C ? C : y,
            L = S ? w || g : g,
            M = S ? x || _ : _,
            D = c(i(k) ? k.enter : k),
            P = !1 !== s && !tr,
            F = Ue(I),
            R = o._enterCb = b(function () {
          P && (Le(o, j), Le(o, E)), R.cancelled ? (P && Le(o, T), M && M(o)) : L && L(o), o._enterCb = null;
        });n.data.show || Y(n, "insert", function () {
          var t = o.parentNode,
              e = t && t._pending && t._pending[n.key];e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(), I && I(o, R);
        }), N && N(o), P && (Ie(o, T), Ie(o, E), Ne(function () {
          Ie(o, j), Le(o, T), R.cancelled || F || (Be(D) ? setTimeout(R, D) : Me(o, u, R));
        })), n.data.show && (r && r(), I && I(o, R)), P || F || R();
      }
    }
  }function He(n, r) {
    function o() {
      x.cancelled || (n.data.show || ((a.parentNode._pending || (a.parentNode._pending = {}))[n.key] = n), v && v(a), $ && (Ie(a, f), Ie(a, d), Ne(function () {
        Ie(a, p), Le(a, f), x.cancelled || C || (Be(w) ? setTimeout(x, w) : Me(a, l, x));
      })), h && h(a, x), $ || C || x());
    }var a = n.elm;e(a._enterCb) && (a._enterCb.cancelled = !0, a._enterCb());var s = je(n.data.transition);if (t(s) || 1 !== a.nodeType) return r();if (!e(a._leaveCb)) {
      var u = s.css,
          l = s.type,
          f = s.leaveClass,
          p = s.leaveToClass,
          d = s.leaveActiveClass,
          v = s.beforeLeave,
          h = s.leave,
          m = s.afterLeave,
          y = s.leaveCancelled,
          g = s.delayLeave,
          _ = s.duration,
          $ = !1 !== u && !tr,
          C = Ue(h),
          w = c(i(_) ? _.leave : _),
          x = a._leaveCb = b(function () {
        a.parentNode && a.parentNode._pending && (a.parentNode._pending[n.key] = null), $ && (Le(a, p), Le(a, d)), x.cancelled ? ($ && Le(a, f), y && y(a)) : (r(), m && m(a)), a._leaveCb = null;
      });g ? g(o) : o();
    }
  }function Be(t) {
    return "number" == typeof t && !isNaN(t);
  }function Ue(n) {
    if (t(n)) return !1;var r = n.fns;return e(r) ? Ue(Array.isArray(r) ? r[0] : r) : (n._length || n.length) > 1;
  }function Ve(t, e) {
    !0 !== e.data.show && Re(e);
  }function ze(t, e, n) {
    Ke(t, e, n), (Qn || er) && setTimeout(function () {
      Ke(t, e, n);
    }, 0);
  }function Ke(t, e, n) {
    var r = e.value,
        i = t.multiple;if (!i || Array.isArray(r)) {
      for (var o, a, s = 0, c = t.options.length; s < c; s++) {
        if (a = t.options[s], i) o = _(r, qe(a)) > -1, a.selected !== o && (a.selected = o);else if (g(qe(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
      }i || (t.selectedIndex = -1);
    }
  }function Je(t, e) {
    return e.every(function (e) {
      return !g(e, t);
    });
  }function qe(t) {
    return "_value" in t ? t._value : t.value;
  }function We(t) {
    t.target.composing = !0;
  }function Ge(t) {
    t.target.composing && (t.target.composing = !1, Ze(t.target, "input"));
  }function Ze(t, e) {
    var n = document.createEvent("HTMLEvents");n.initEvent(e, !0, !0), t.dispatchEvent(n);
  }function Xe(t) {
    return !t.componentInstance || t.data && t.data.transition ? t : Xe(t.componentInstance._vnode);
  }function Ye(t) {
    var e = t && t.componentOptions;return e && e.Ctor.options.abstract ? Ye(it(e.children)) : t;
  }function Qe(t) {
    var e = {},
        n = t.$options;for (var r in n.propsData) {
      e[r] = t[r];
    }var i = n._parentListeners;for (var o in i) {
      e[Pn(o)] = i[o];
    }return e;
  }function tn(t, e) {
    if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", { props: e.componentOptions.propsData });
  }function en(t) {
    t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
  }function nn(t) {
    t.data.newPos = t.elm.getBoundingClientRect();
  }function rn(t) {
    var e = t.data.pos,
        n = t.data.newPos,
        r = e.left - n.left,
        i = e.top - n.top;if (r || i) {
      t.data.moved = !0;var o = t.elm.style;o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
    }
  }function on(t, e) {
    var n = e ? zo : Vo;return t.replace(n, function (t) {
      return Uo[t];
    });
  }function an(t, e, n) {
    return { type: 1, tag: t, attrsList: e, attrsMap: function (t) {
        for (var e = {}, n = 0, r = t.length; n < r; n++) {
          e[t[n].name] = t[n].value;
        }return e;
      }(e), parent: n, children: [] };
  }function sn(t, e) {
    function n(t) {
      t.pre && (s = !1), Lo(t.tag) && (c = !1);for (var n = 0; n < Io.length; n++) {
        Io[n](t, e);
      }
    }To = e.warn || se, Lo = e.isPreTag || Bn, Mo = e.mustUseProp || Bn, Do = e.getTagNamespace || Bn, jo = ce(e.modules, "transformNode"), No = ce(e.modules, "preTransformNode"), Io = ce(e.modules, "postTransformNode"), Eo = e.delimiters;var r,
        i,
        o = [],
        a = !1 !== e.preserveWhitespace,
        s = !1,
        c = !1;return function (t, e) {
      function n(e) {
        l += e, t = t.substring(e);
      }function r(t, n, r) {
        var i, s;if (null == n && (n = l), null == r && (r = l), t && (s = t.toLowerCase()), t) for (i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--) {} else i = 0;if (i >= 0) {
          for (var c = a.length - 1; c >= i; c--) {
            e.end && e.end(a[c].tag, n, r);
          }a.length = i, o = i && a[i - 1].tag;
        } else "br" === s ? e.start && e.start(t, [], !0, n, r) : "p" === s && (e.start && e.start(t, [], !1, n, r), e.end && e.end(t, n, r));
      }for (var i, o, a = [], s = e.expectHTML, c = e.isUnaryTag || Bn, u = e.canBeLeftOpenTag || Bn, l = 0; t;) {
        if (i = t, o && Ho(o)) {
          var f = 0,
              p = o.toLowerCase(),
              d = Bo[p] || (Bo[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")),
              v = t.replace(d, function (t, n, r) {
            return f = r.length, Ho(p) || "noscript" === p || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Jo(p, n) && (n = n.slice(1)), e.chars && e.chars(n), "";
          });l += t.length - v.length, t = v, r(p, l - f, l);
        } else {
          var h = t.indexOf("<");if (0 === h) {
            if (Ao.test(t)) {
              var m = t.indexOf("--\x3e");if (m >= 0) {
                e.shouldKeepComment && e.comment(t.substring(4, m)), n(m + 3);continue;
              }
            }if (Oo.test(t)) {
              var y = t.indexOf("]>");if (y >= 0) {
                n(y + 2);continue;
              }
            }var g = t.match(ko);if (g) {
              n(g[0].length);continue;
            }var _ = t.match(xo);if (_) {
              var b = l;n(_[0].length), r(_[1], b, l);continue;
            }var $ = function () {
              var e = t.match(Co);if (e) {
                var r = { tagName: e[1], attrs: [], start: l };n(e[0].length);for (var i, o; !(i = t.match(wo)) && (o = t.match(_o));) {
                  n(o[0].length), r.attrs.push(o);
                }if (i) return r.unarySlash = i[1], n(i[0].length), r.end = l, r;
              }
            }();if ($) {
              !function (t) {
                var n = t.tagName,
                    i = t.unarySlash;s && ("p" === o && go(n) && r(o), u(n) && o === n && r(n));for (var l = c(n) || !!i, f = t.attrs.length, p = new Array(f), d = 0; d < f; d++) {
                  var v = t.attrs[d];So && -1 === v[0].indexOf('""') && ("" === v[3] && delete v[3], "" === v[4] && delete v[4], "" === v[5] && delete v[5]);var h = v[3] || v[4] || v[5] || "",
                      m = "a" === n && "href" === v[1] ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;p[d] = { name: v[1], value: on(h, m) };
                }l || (a.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: p }), o = n), e.start && e.start(n, p, l, t.start, t.end);
              }($), Jo(o, t) && n(1);continue;
            }
          }var C = void 0,
              w = void 0,
              x = void 0;if (h >= 0) {
            for (w = t.slice(h); !(xo.test(w) || Co.test(w) || Ao.test(w) || Oo.test(w) || (x = w.indexOf("<", 1)) < 0);) {
              h += x, w = t.slice(h);
            }C = t.substring(0, h), n(h);
          }h < 0 && (C = t, t = ""), e.chars && C && e.chars(C);
        }if (t === i) {
          e.chars && e.chars(t);break;
        }
      }r();
    }(t, { warn: To, expectHTML: e.expectHTML, isUnaryTag: e.isUnaryTag, canBeLeftOpenTag: e.canBeLeftOpenTag, shouldDecodeNewlines: e.shouldDecodeNewlines, shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref, shouldKeepComment: e.comments, start: function start(t, a, u) {
        var l = i && i.ns || Do(t);Qn && "svg" === l && (a = function (t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var r = t[n];na.test(r.name) || (r.name = r.name.replace(ra, ""), e.push(r));
          }return e;
        }(a));var f = an(t, a, i);l && (f.ns = l), function (t) {
          return "style" === t.tag || "script" === t.tag && (!t.attrsMap.type || "text/javascript" === t.attrsMap.type);
        }(f) && !ur() && (f.forbidden = !0);for (var p = 0; p < No.length; p++) {
          f = No[p](f, e) || f;
        }if (s || (!function (t) {
          null != he(t, "v-pre") && (t.pre = !0);
        }(f), f.pre && (s = !0)), Lo(f.tag) && (c = !0), s ? function (t) {
          var e = t.attrsList.length;if (e) for (var n = t.attrs = new Array(e), r = 0; r < e; r++) {
            n[r] = { name: t.attrsList[r].name, value: JSON.stringify(t.attrsList[r].value) };
          } else t.pre || (t.plain = !0);
        }(f) : f.processed || (un(f), function (t) {
          var e = he(t, "v-if");if (e) t.if = e, ln(t, { exp: e, block: t });else {
            null != he(t, "v-else") && (t.else = !0);var n = he(t, "v-else-if");n && (t.elseif = n);
          }
        }(f), function (t) {
          null != he(t, "v-once") && (t.once = !0);
        }(f), cn(f, e)), r ? o.length || r.if && (f.elseif || f.else) && ln(r, { exp: f.elseif, block: f }) : r = f, i && !f.forbidden) if (f.elseif || f.else) !function (t, e) {
          var n = function (t) {
            var e = t.length;for (; e--;) {
              if (1 === t[e].type) return t[e];t.pop();
            }
          }(e.children);n && n.if && ln(n, { exp: t.elseif, block: t });
        }(f, i);else if (f.slotScope) {
          i.plain = !1;var d = f.slotTarget || '"default"';(i.scopedSlots || (i.scopedSlots = {}))[d] = f;
        } else i.children.push(f), f.parent = i;u ? n(f) : (i = f, o.push(f));
      }, end: function end() {
        var t = o[o.length - 1],
            e = t.children[t.children.length - 1];e && 3 === e.type && " " === e.text && !c && t.children.pop(), o.length -= 1, i = o[o.length - 1], n(t);
      }, chars: function chars(t) {
        if (i && (!Qn || "textarea" !== i.tag || i.attrsMap.placeholder !== t)) {
          var e = i.children;if (t = c || t.trim() ? function (t) {
            return "script" === t.tag || "style" === t.tag;
          }(i) ? t : ea(t) : a && e.length ? " " : "") {
            var n;!s && " " !== t && (n = function (t, e) {
              var n = e ? fo(e) : uo;if (n.test(t)) {
                for (var r, i, o, a = [], s = [], c = n.lastIndex = 0; r = n.exec(t);) {
                  (i = r.index) > c && (s.push(o = t.slice(c, i)), a.push(JSON.stringify(o)));var u = ae(r[1].trim());a.push("_s(" + u + ")"), s.push({ "@binding": u }), c = i + r[0].length;
                }return c < t.length && (s.push(o = t.slice(c)), a.push(JSON.stringify(o))), { expression: a.join("+"), tokens: s };
              }
            }(t, Eo)) ? e.push({ type: 2, expression: n.expression, tokens: n.tokens, text: t }) : " " === t && e.length && " " === e[e.length - 1].text || e.push({ type: 3, text: t });
          }
        }
      }, comment: function comment(t) {
        i.children.push({ type: 3, text: t, isComment: !0 });
      } }), r;
  }function cn(t, e) {
    !function (t) {
      var e = ve(t, "key");e && (t.key = e);
    }(t), t.plain = !t.key && !t.attrsList.length, function (t) {
      var e = ve(t, "ref");e && (t.ref = e, t.refInFor = function (t) {
        var e = t;for (; e;) {
          if (void 0 !== e.for) return !0;e = e.parent;
        }return !1;
      }(t));
    }(t), function (t) {
      if ("slot" === t.tag) t.slotName = ve(t, "name");else {
        var e;"template" === t.tag ? (e = he(t, "scope"), t.slotScope = e || he(t, "slot-scope")) : (e = he(t, "slot-scope")) && (t.slotScope = e);var n = ve(t, "slot");n && (t.slotTarget = '""' === n ? '"default"' : n, "template" === t.tag || t.slotScope || le(t, "slot", n));
      }
    }(t), function (t) {
      var e;(e = ve(t, "is")) && (t.component = e);null != he(t, "inline-template") && (t.inlineTemplate = !0);
    }(t);for (var n = 0; n < jo.length; n++) {
      t = jo[n](t, e) || t;
    }!function (t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          c = t.attrsList;for (e = 0, n = c.length; e < n; e++) {
        if (r = i = c[e].name, o = c[e].value, Wo.test(r)) {
          if (t.hasBindings = !0, (a = function (t) {
            var e = t.match(ta);if (e) {
              var n = {};return e.forEach(function (t) {
                n[t.slice(1)] = !0;
              }), n;
            }
          }(r)) && (r = r.replace(ta, "")), Qo.test(r)) r = r.replace(Qo, ""), o = ae(o), s = !1, a && (a.prop && (s = !0, "innerHtml" === (r = Pn(r)) && (r = "innerHTML")), a.camel && (r = Pn(r)), a.sync && de(t, "update:" + Pn(r), ye(o, "$event"))), s || !t.component && Mo(t.tag, t.attrsMap.type, r) ? ue(t, r, o) : le(t, r, o);else if (qo.test(r)) r = r.replace(qo, ""), de(t, r, o, a, !1);else {
            var u = (r = r.replace(Wo, "")).match(Yo),
                l = u && u[1];l && (r = r.slice(0, -(l.length + 1))), pe(t, r, i, o, l, a);
          }
        } else le(t, r, JSON.stringify(o)), !t.component && "muted" === r && Mo(t.tag, t.attrsMap.type, r) && ue(t, r, "true");
      }
    }(t);
  }function un(t) {
    var e;if (e = he(t, "v-for")) {
      var n = function (t) {
        var e = t.match(Go);if (!e) return;var n = {};n.for = e[2].trim();var r = e[1].trim().replace(Xo, ""),
            i = r.match(Zo);i ? (n.alias = r.replace(Zo, ""), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;return n;
      }(e);n && h(t, n);
    }
  }function ln(t, e) {
    t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
  }function fn(t) {
    return an(t.tag, t.attrsList.slice(), t.parent);
  }function pn(t) {
    if (t.static = function (t) {
      if (2 === t.type) return !1;if (3 === t.type) return !0;return !(!t.pre && (t.hasBindings || t.if || t.for || In(t.tag) || !Fo(t.tag) || function (t) {
        for (; t.parent;) {
          if ("template" !== (t = t.parent).tag) return !1;if (t.for) return !0;
        }return !1;
      }(t) || !Object.keys(t).every(Po)));
    }(t), 1 === t.type) {
      if (!Fo(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;for (var e = 0, n = t.children.length; e < n; e++) {
        var r = t.children[e];pn(r), r.static || (t.static = !1);
      }if (t.ifConditions) for (var i = 1, o = t.ifConditions.length; i < o; i++) {
        var a = t.ifConditions[i].block;pn(a), a.static || (t.static = !1);
      }
    }
  }function dn(t, e) {
    if (1 === t.type) {
      if ((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);if (t.staticRoot = !1, t.children) for (var n = 0, r = t.children.length; n < r; n++) {
        dn(t.children[n], e || !!t.for);
      }if (t.ifConditions) for (var i = 1, o = t.ifConditions.length; i < o; i++) {
        dn(t.ifConditions[i].block, e);
      }
    }
  }function vn(t, e, n) {
    var r = e ? "nativeOn:{" : "on:{";for (var i in t) {
      r += '"' + i + '":' + hn(i, t[i]) + ",";
    }return r.slice(0, -1) + "}";
  }function hn(t, e) {
    if (!e) return "function(){}";if (Array.isArray(e)) return "[" + e.map(function (e) {
      return hn(t, e);
    }).join(",") + "]";var n = ca.test(e.value),
        r = sa.test(e.value);if (e.modifiers) {
      var i = "",
          o = "",
          a = [];for (var s in e.modifiers) {
        if (fa[s]) o += fa[s], ua[s] && a.push(s);else if ("exact" === s) {
          var c = e.modifiers;o += la(["ctrl", "shift", "alt", "meta"].filter(function (t) {
            return !c[t];
          }).map(function (t) {
            return "$event." + t + "Key";
          }).join("||"));
        } else a.push(s);
      }a.length && (i += function (t) {
        return "if(!('button' in $event)&&" + t.map(mn).join("&&") + ")return null;";
      }(a)), o && (i += o);return "function($event){" + i + (n ? e.value + "($event)" : r ? "(" + e.value + ")($event)" : e.value) + "}";
    }return n || r ? e.value : "function($event){" + e.value + "}";
  }function mn(t) {
    var e = parseInt(t, 10);if (e) return "$event.keyCode!==" + e;var n = ua[t];return "_k($event.keyCode," + JSON.stringify(t) + "," + JSON.stringify(n) + ",$event.key)";
  }function yn(t, e) {
    var n = new da(e);return { render: "with(this){return " + (t ? gn(t, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns };
  }function gn(t, e) {
    if (t.staticRoot && !t.staticProcessed) return _n(t, e);if (t.once && !t.onceProcessed) return bn(t, e);if (t.for && !t.forProcessed) return function (t, e, n, r) {
      var i = t.for,
          o = t.alias,
          a = t.iterator1 ? "," + t.iterator1 : "",
          s = t.iterator2 ? "," + t.iterator2 : "";return t.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || gn)(t, e) + "})";
    }(t, e);if (t.if && !t.ifProcessed) return $n(t, e);if ("template" !== t.tag || t.slotTarget) {
      if ("slot" === t.tag) return function (t, e) {
        var n = t.slotName || '"default"',
            r = kn(t, e),
            i = "_t(" + n + (r ? "," + r : ""),
            o = t.attrs && "{" + t.attrs.map(function (t) {
          return Pn(t.name) + ":" + t.value;
        }).join(",") + "}",
            a = t.attrsMap["v-bind"];!o && !a || r || (i += ",null");o && (i += "," + o);a && (i += (o ? "" : ",null") + "," + a);return i + ")";
      }(t, e);var n;if (t.component) n = function (t, e, n) {
        var r = e.inlineTemplate ? null : kn(e, n, !0);return "_c(" + t + "," + wn(e, n) + (r ? "," + r : "") + ")";
      }(t.component, t, e);else {
        var r = t.plain ? void 0 : wn(t, e),
            i = t.inlineTemplate ? null : kn(t, e, !0);n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
      }for (var o = 0; o < e.transforms.length; o++) {
        n = e.transforms[o](t, n);
      }return n;
    }return kn(t, e) || "void 0";
  }function _n(t, e) {
    return t.staticProcessed = !0, e.staticRenderFns.push("with(this){return " + gn(t, e) + "}"), "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")";
  }function bn(t, e) {
    if (t.onceProcessed = !0, t.if && !t.ifProcessed) return $n(t, e);if (t.staticInFor) {
      for (var n = "", r = t.parent; r;) {
        if (r.for) {
          n = r.key;break;
        }r = r.parent;
      }return n ? "_o(" + gn(t, e) + "," + e.onceId++ + "," + n + ")" : gn(t, e);
    }return _n(t, e);
  }function $n(t, e, n, r) {
    return t.ifProcessed = !0, Cn(t.ifConditions.slice(), e, n, r);
  }function Cn(t, e, n, r) {
    function i(t) {
      return n ? n(t, e) : t.once ? bn(t, e) : gn(t, e);
    }if (!t.length) return r || "_e()";var o = t.shift();return o.exp ? "(" + o.exp + ")?" + i(o.block) + ":" + Cn(t, e, n, r) : "" + i(o.block);
  }function wn(t, e) {
    var n = "{",
        r = function (t, e) {
      var n = t.directives;if (!n) return;var r,
          i,
          o,
          a,
          s = "directives:[",
          c = !1;for (r = 0, i = n.length; r < i; r++) {
        o = n[r], a = !0;var u = e.directives[o.name];u && (a = !!u(t, o, e.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ',arg:"' + o.arg + '"' : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
      }if (c) return s.slice(0, -1) + "]";
    }(t, e);r && (n += r + ","), t.key && (n += "key:" + t.key + ","), t.ref && (n += "ref:" + t.ref + ","), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"' + t.tag + '",');for (var i = 0; i < e.dataGenFns.length; i++) {
      n += e.dataGenFns[i](t);
    }if (t.attrs && (n += "attrs:{" + On(t.attrs) + "},"), t.props && (n += "domProps:{" + On(t.props) + "},"), t.events && (n += vn(t.events, !1, e.warn) + ","), t.nativeEvents && (n += vn(t.nativeEvents, !0, e.warn) + ","), t.slotTarget && !t.slotScope && (n += "slot:" + t.slotTarget + ","), t.scopedSlots && (n += function (t, e) {
      return "scopedSlots:_u([" + Object.keys(t).map(function (n) {
        return xn(n, t[n], e);
      }).join(",") + "])";
    }(t.scopedSlots, e) + ","), t.model && (n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"), t.inlineTemplate) {
      var o = function (t, e) {
        var n = t.children[0];if (1 === n.type) {
          var r = yn(n, e.options);return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (t) {
            return "function(){" + t + "}";
          }).join(",") + "]}";
        }
      }(t, e);o && (n += o + ",");
    }return n = n.replace(/,$/, "") + "}", t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n;
  }function xn(t, e, n) {
    if (e.for && !e.forProcessed) return function (t, e, n) {
      var r = e.for,
          i = e.alias,
          o = e.iterator1 ? "," + e.iterator1 : "",
          a = e.iterator2 ? "," + e.iterator2 : "";return e.forProcessed = !0, "_l((" + r + "),function(" + i + o + a + "){return " + xn(t, e, n) + "})";
    }(t, e, n);return "{key:" + t + ",fn:" + ("function(" + String(e.slotScope) + "){return " + ("template" === e.tag ? e.if ? e.if + "?" + (kn(e, n) || "undefined") + ":undefined" : kn(e, n) || "undefined" : gn(e, n)) + "}") + "}";
  }function kn(t, e, n, r, i) {
    var o = t.children;if (o.length) {
      var a = o[0];if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) return (r || gn)(a, e);var s = n ? function (t, e) {
        for (var n = 0, r = 0; r < t.length; r++) {
          var i = t[r];if (1 === i.type) {
            if (An(i) || i.ifConditions && i.ifConditions.some(function (t) {
              return An(t.block);
            })) {
              n = 2;break;
            }(e(i) || i.ifConditions && i.ifConditions.some(function (t) {
              return e(t.block);
            })) && (n = 1);
          }
        }return n;
      }(o, e.maybeComponent) : 0,
          c = i || function (t, e) {
        if (1 === t.type) return gn(t, e);return 3 === t.type && t.isComment ? function (t) {
          return "_e(" + JSON.stringify(t.text) + ")";
        }(t) : function (t) {
          return "_v(" + (2 === t.type ? t.expression : Sn(JSON.stringify(t.text))) + ")";
        }(t);
      };return "[" + o.map(function (t) {
        return c(t, e);
      }).join(",") + "]" + (s ? "," + s : "");
    }
  }function An(t) {
    return void 0 !== t.for || "template" === t.tag || "slot" === t.tag;
  }function On(t) {
    for (var e = "", n = 0; n < t.length; n++) {
      var r = t[n];e += '"' + r.name + '":' + Sn(r.value) + ",";
    }return e.slice(0, -1);
  }function Sn(t) {
    return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }function Tn(t, e) {
    try {
      return new Function(t);
    } catch (n) {
      return e.push({ err: n, code: t }), y;
    }
  }function En(t) {
    return Ro = Ro || document.createElement("div"), Ro.innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>', Ro.innerHTML.indexOf("&#10;") > 0;
  }var jn = Object.freeze({}),
      Nn = Object.prototype.toString,
      In = u("slot,component", !0),
      Ln = u("key,ref,slot,slot-scope,is"),
      Mn = Object.prototype.hasOwnProperty,
      Dn = /-(\w)/g,
      Pn = p(function (t) {
    return t.replace(Dn, function (t, e) {
      return e ? e.toUpperCase() : "";
    });
  }),
      Fn = p(function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }),
      Rn = /\B([A-Z])/g,
      Hn = p(function (t) {
    return t.replace(Rn, "-$1").toLowerCase();
  }),
      Bn = function Bn(t, e, n) {
    return !1;
  },
      Un = function Un(t) {
    return t;
  },
      Vn = "data-server-rendered",
      zn = ["component", "directive", "filter"],
      Kn = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
      Jn = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: Bn, isReservedAttr: Bn, isUnknownElement: Bn, getTagNamespace: y, parsePlatformTagName: Un, mustUseProp: Bn, _lifecycleHooks: Kn },
      qn = /[^\w.$]/,
      Wn = "__proto__" in {},
      Gn = "undefined" != typeof window,
      Zn = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
      Xn = Zn && WXEnvironment.platform.toLowerCase(),
      Yn = Gn && window.navigator.userAgent.toLowerCase(),
      Qn = Yn && /msie|trident/.test(Yn),
      tr = Yn && Yn.indexOf("msie 9.0") > 0,
      er = Yn && Yn.indexOf("edge/") > 0,
      nr = Yn && Yn.indexOf("android") > 0 || "android" === Xn,
      rr = Yn && /iphone|ipad|ipod|ios/.test(Yn) || "ios" === Xn,
      ir = (Yn && /chrome\/\d+/.test(Yn), {}.watch),
      or = !1;if (Gn) try {
    var ar = {};Object.defineProperty(ar, "passive", { get: function get() {
        or = !0;
      } }), window.addEventListener("test-passive", null, ar);
  } catch (t) {}var sr,
      cr,
      ur = function ur() {
    return void 0 === sr && (sr = !Gn && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), sr;
  },
      lr = Gn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
      fr = "undefined" != typeof Symbol && w(Symbol) && "undefined" != typeof Reflect && w(Reflect.ownKeys);cr = "undefined" != typeof Set && w(Set) ? Set : function () {
    function t() {
      this.set = Object.create(null);
    }return t.prototype.has = function (t) {
      return !0 === this.set[t];
    }, t.prototype.add = function (t) {
      this.set[t] = !0;
    }, t.prototype.clear = function () {
      this.set = Object.create(null);
    }, t;
  }();var pr = y,
      dr = 0,
      vr = function vr() {
    this.id = dr++, this.subs = [];
  };vr.prototype.addSub = function (t) {
    this.subs.push(t);
  }, vr.prototype.removeSub = function (t) {
    l(this.subs, t);
  }, vr.prototype.depend = function () {
    vr.target && vr.target.addDep(this);
  }, vr.prototype.notify = function () {
    for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) {
      t[e].update();
    }
  }, vr.target = null;var hr = [],
      mr = function mr(t, e, n, r, i, o, a, s) {
    this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
  },
      yr = { child: { configurable: !0 } };yr.child.get = function () {
    return this.componentInstance;
  }, Object.defineProperties(mr.prototype, yr);var gr = function gr(t) {
    void 0 === t && (t = "");var e = new mr();return e.text = t, e.isComment = !0, e;
  },
      _r = Array.prototype,
      br = Object.create(_r);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
    var e = _r[t];C(br, t, function () {
      for (var n = [], r = arguments.length; r--;) {
        n[r] = arguments[r];
      }var i,
          o = e.apply(this, n),
          a = this.__ob__;switch (t) {case "push":case "unshift":
          i = n;break;case "splice":
          i = n.slice(2);}return i && a.observeArray(i), a.dep.notify(), o;
    });
  });var $r = Object.getOwnPropertyNames(br),
      Cr = { shouldConvert: !0 },
      wr = function wr(t) {
    if (this.value = t, this.dep = new vr(), this.vmCount = 0, C(t, "__ob__", this), Array.isArray(t)) {
      (Wn ? O : S)(t, br, $r), this.observeArray(t);
    } else this.walk(t);
  };wr.prototype.walk = function (t) {
    for (var e = Object.keys(t), n = 0; n < e.length; n++) {
      E(t, e[n], t[e[n]]);
    }
  }, wr.prototype.observeArray = function (t) {
    for (var e = 0, n = t.length; e < n; e++) {
      T(t[e]);
    }
  };var xr = Jn.optionMergeStrategies;xr.data = function (t, e, n) {
    return n ? M(t, e, n) : e && "function" != typeof e ? t : M(t, e);
  }, Kn.forEach(function (t) {
    xr[t] = D;
  }), zn.forEach(function (t) {
    xr[t + "s"] = P;
  }), xr.watch = function (t, e, n, r) {
    if (t === ir && (t = void 0), e === ir && (e = void 0), !e) return Object.create(t || null);if (!t) return e;var i = {};h(i, t);for (var o in e) {
      var a = i[o],
          s = e[o];a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
    }return i;
  }, xr.props = xr.methods = xr.inject = xr.computed = function (t, e, n, r) {
    if (!t) return e;var i = Object.create(null);return h(i, t), e && h(i, e), i;
  }, xr.provide = M;var kr,
      Ar,
      Or = function Or(t, e) {
    return void 0 === e ? t : e;
  },
      Sr = [],
      Tr = !1,
      Er = !1;if ("undefined" != typeof setImmediate && w(setImmediate)) Ar = function Ar() {
    setImmediate(J);
  };else if ("undefined" == typeof MessageChannel || !w(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Ar = function Ar() {
    setTimeout(J, 0);
  };else {
    var jr = new MessageChannel(),
        Nr = jr.port2;jr.port1.onmessage = J, Ar = function Ar() {
      Nr.postMessage(1);
    };
  }if ("undefined" != typeof Promise && w(Promise)) {
    var Ir = Promise.resolve();kr = function kr() {
      Ir.then(J), rr && setTimeout(y);
    };
  } else kr = Ar;var Lr,
      Mr = new cr(),
      Dr = p(function (t) {
    var e = "&" === t.charAt(0),
        n = "~" === (t = e ? t.slice(1) : t).charAt(0),
        r = "!" === (t = n ? t.slice(1) : t).charAt(0);return t = r ? t.slice(1) : t, { name: t, once: n, capture: r, passive: e };
  }),
      Pr = null,
      Fr = [],
      Rr = [],
      Hr = {},
      Br = !1,
      Ur = !1,
      Vr = 0,
      zr = 0,
      Kr = function Kr(t, e, n, r, i) {
    this.vm = t, i && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++zr, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new cr(), this.newDepIds = new cr(), this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = function (t) {
      if (!qn.test(t)) {
        var e = t.split(".");return function (t) {
          for (var n = 0; n < e.length; n++) {
            if (!t) return;t = t[e[n]];
          }return t;
        };
      }
    }(e), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
  };Kr.prototype.get = function () {
    !function (t) {
      vr.target && hr.push(vr.target), vr.target = t;
    }(this);var t,
        e = this.vm;try {
      t = this.getter.call(e, e);
    } catch (t) {
      if (!this.user) throw t;V(t, e, 'getter for watcher "' + this.expression + '"');
    } finally {
      this.deep && W(t), vr.target = hr.pop(), this.cleanupDeps();
    }return t;
  }, Kr.prototype.addDep = function (t) {
    var e = t.id;this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
  }, Kr.prototype.cleanupDeps = function () {
    for (var t = this.deps.length; t--;) {
      var e = this.deps[t];this.newDepIds.has(e.id) || e.removeSub(this);
    }var n = this.depIds;this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
  }, Kr.prototype.update = function () {
    this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (t) {
      var e = t.id;if (null == Hr[e]) {
        if (Hr[e] = !0, Ur) {
          for (var n = Fr.length - 1; n > Vr && Fr[n].id > t.id;) {
            n--;
          }Fr.splice(n + 1, 0, t);
        } else Fr.push(t);Br || (Br = !0, q(ht));
      }
    }(this);
  }, Kr.prototype.run = function () {
    if (this.active) {
      var t = this.get();if (t !== this.value || i(t) || this.deep) {
        var e = this.value;if (this.value = t, this.user) try {
          this.cb.call(this.vm, t, e);
        } catch (t) {
          V(t, this.vm, 'callback for watcher "' + this.expression + '"');
        } else this.cb.call(this.vm, t, e);
      }
    }
  }, Kr.prototype.evaluate = function () {
    this.value = this.get(), this.dirty = !1;
  }, Kr.prototype.depend = function () {
    for (var t = this.deps.length; t--;) {
      this.deps[t].depend();
    }
  }, Kr.prototype.teardown = function () {
    if (this.active) {
      this.vm._isBeingDestroyed || l(this.vm._watchers, this);for (var t = this.deps.length; t--;) {
        this.deps[t].removeSub(this);
      }this.active = !1;
    }
  };var Jr = { enumerable: !0, configurable: !0, get: y, set: y },
      qr = { lazy: !0 };Nt(It.prototype);var Wr = { init: function init(t, n, r, i) {
      if (!t.componentInstance || t.componentInstance._isDestroyed) {
        (t.componentInstance = function (t, n, r, i) {
          var o = { _isComponent: !0, parent: n, _parentVnode: t, _parentElm: r || null, _refElm: i || null },
              a = t.data.inlineTemplate;return e(a) && (o.render = a.render, o.staticRenderFns = a.staticRenderFns), new t.componentOptions.Ctor(o);
        }(t, Pr, r, i)).$mount(n ? t.elm : void 0, n);
      } else if (t.data.keepAlive) {
        var o = t;Wr.prepatch(o, o);
      }
    }, prepatch: function prepatch(t, e) {
      var n = e.componentOptions;!function (t, e, n, r, i) {
        var o = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== jn);if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = i, t.$attrs = r.data && r.data.attrs || jn, t.$listeners = n || jn, e && t.$options.props) {
          Cr.shouldConvert = !1;for (var a = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
            var u = s[c];a[u] = H(u, t.$options.props, e, t);
          }Cr.shouldConvert = !0, t.$options.propsData = e;
        }if (n) {
          var l = t.$options._parentListeners;t.$options._parentListeners = n, st(t, n, l);
        }o && (t.$slots = ct(i, r.context), t.$forceUpdate());
      }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
    }, insert: function insert(t) {
      var e = t.context,
          n = t.componentInstance;n._isMounted || (n._isMounted = !0, vt(n, "mounted")), t.data.keepAlive && (e._isMounted ? function (t) {
        t._inactive = !1, Rr.push(t);
      }(n) : pt(n, !0));
    }, destroy: function destroy(t) {
      var e = t.componentInstance;e._isDestroyed || (t.data.keepAlive ? dt(e, !0) : e.$destroy());
    } },
      Gr = Object.keys(Wr),
      Zr = 1,
      Xr = 2,
      Yr = 0;!function (t) {
    t.prototype._init = function (t) {
      this._uid = Yr++, this._isVue = !0, t && t._isComponent ? function (t, e) {
        var n = t.$options = Object.create(t.constructor.options),
            r = e._parentVnode;n.parent = e.parent, n._parentVnode = r, n._parentElm = e._parentElm, n._refElm = e._refElm;var i = r.componentOptions;n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
      }(this, t) : this.$options = F(Ft(this.constructor), t || {}, this), this._renderProxy = this, this._self = this, function (t) {
        var e = t.$options,
            n = e.parent;if (n && !e.abstract) {
          for (; n.$options.abstract && n.$parent;) {
            n = n.$parent;
          }n.$children.push(t);
        }t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
      }(this), function (t) {
        t._events = Object.create(null), t._hasHookEvent = !1;var e = t.$options._parentListeners;e && st(t, e);
      }(this), function (t) {
        t._vnode = null, t._staticTrees = null;var e = t.$options,
            n = t.$vnode = e._parentVnode,
            r = n && n.context;t.$slots = ct(e._renderChildren, r), t.$scopedSlots = jn, t._c = function (e, n, r, i) {
          return Dt(t, e, n, r, i, !1);
        }, t.$createElement = function (e, n, r, i) {
          return Dt(t, e, n, r, i, !0);
        };var i = n && n.data;E(t, "$attrs", i && i.attrs || jn, 0, !0), E(t, "$listeners", e._parentListeners || jn, 0, !0);
      }(this), vt(this, "beforeCreate"), function (t) {
        var e = $t(t.$options.inject, t);e && (Cr.shouldConvert = !1, Object.keys(e).forEach(function (n) {
          E(t, n, e[n]);
        }), Cr.shouldConvert = !0);
      }(this), yt(this), function (t) {
        var e = t.$options.provide;e && (t._provided = "function" == typeof e ? e.call(t) : e);
      }(this), vt(this, "created"), this.$options.el && this.$mount(this.$options.el);
    };
  }(Rt), function (t) {
    var e = {};e.get = function () {
      return this._data;
    };var n = {};n.get = function () {
      return this._props;
    }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = j, t.prototype.$delete = N, t.prototype.$watch = function (t, e, n) {
      if (o(e)) return bt(this, t, e, n);(n = n || {}).user = !0;var r = new Kr(this, t, e, n);return n.immediate && e.call(this, r.value), function () {
        r.teardown();
      };
    };
  }(Rt), function (t) {
    var e = /^hook:/;t.prototype.$on = function (t, n) {
      if (Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) {
        this.$on(t[r], n);
      } else (this._events[t] || (this._events[t] = [])).push(n), e.test(t) && (this._hasHookEvent = !0);return this;
    }, t.prototype.$once = function (t, e) {
      function n() {
        r.$off(t, n), e.apply(r, arguments);
      }var r = this;return n.fn = e, r.$on(t, n), r;
    }, t.prototype.$off = function (t, e) {
      if (!arguments.length) return this._events = Object.create(null), this;if (Array.isArray(t)) {
        for (var n = 0, r = t.length; n < r; n++) {
          this.$off(t[n], e);
        }return this;
      }var i = this._events[t];if (!i) return this;if (!e) return this._events[t] = null, this;if (e) for (var o, a = i.length; a--;) {
        if ((o = i[a]) === e || o.fn === e) {
          i.splice(a, 1);break;
        }
      }return this;
    }, t.prototype.$emit = function (t) {
      var e = this,
          n = e._events[t];if (n) {
        n = n.length > 1 ? v(n) : n;for (var r = v(arguments, 1), i = 0, o = n.length; i < o; i++) {
          try {
            n[i].apply(e, r);
          } catch (n) {
            V(n, e, 'event handler for "' + t + '"');
          }
        }
      }return e;
    };
  }(Rt), function (t) {
    t.prototype._update = function (t, e) {
      this._isMounted && vt(this, "beforeUpdate");var n = this.$el,
          r = this._vnode,
          i = Pr;Pr = this, this._vnode = t, r ? this.$el = this.__patch__(r, t) : (this.$el = this.__patch__(this.$el, t, e, !1, this.$options._parentElm, this.$options._refElm), this.$options._parentElm = this.$options._refElm = null), Pr = i, n && (n.__vue__ = null), this.$el && (this.$el.__vue__ = this), this.$vnode && this.$parent && this.$vnode === this.$parent._vnode && (this.$parent.$el = this.$el);
    }, t.prototype.$forceUpdate = function () {
      this._watcher && this._watcher.update();
    }, t.prototype.$destroy = function () {
      if (!this._isBeingDestroyed) {
        vt(this, "beforeDestroy"), this._isBeingDestroyed = !0;var t = this.$parent;!t || t._isBeingDestroyed || this.$options.abstract || l(t.$children, this), this._watcher && this._watcher.teardown();for (var e = this._watchers.length; e--;) {
          this._watchers[e].teardown();
        }this._data.__ob__ && this._data.__ob__.vmCount--, this._isDestroyed = !0, this.__patch__(this._vnode, null), vt(this, "destroyed"), this.$off(), this.$el && (this.$el.__vue__ = null), this.$vnode && (this.$vnode.parent = null);
      }
    };
  }(Rt), function (t) {
    Nt(t.prototype), t.prototype.$nextTick = function (t) {
      return q(t, this);
    }, t.prototype._render = function () {
      var t = this,
          e = t.$options,
          n = e.render,
          r = e._parentVnode;if (t._isMounted) for (var i in t.$slots) {
        var o = t.$slots[i];(o._rendered || o[0] && o[0].elm) && (t.$slots[i] = A(o, !0));
      }t.$scopedSlots = r && r.data.scopedSlots || jn, t.$vnode = r;var a;try {
        a = n.call(t._renderProxy, t.$createElement);
      } catch (e) {
        V(e, t, "render"), a = t._vnode;
      }return a instanceof mr || (a = gr()), a.parent = r, a;
    };
  }(Rt);var Qr = [String, RegExp, Array],
      ti = { KeepAlive: { name: "keep-alive", abstract: !0, props: { include: Qr, exclude: Qr, max: [String, Number] }, created: function created() {
        this.cache = Object.create(null), this.keys = [];
      }, destroyed: function destroyed() {
        for (var t in this.cache) {
          zt(this.cache, t, this.keys);
        }
      }, watch: { include: function include(t) {
          Vt(this, function (e) {
            return Ut(t, e);
          });
        }, exclude: function exclude(t) {
          Vt(this, function (e) {
            return !Ut(t, e);
          });
        } }, render: function render() {
        var t = this.$slots.default,
            e = it(t),
            n = e && e.componentOptions;if (n) {
          var r = Bt(n),
              i = this.include,
              o = this.exclude;if (i && (!r || !Ut(i, r)) || o && r && Ut(o, r)) return e;var a = this.cache,
              s = this.keys,
              c = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;a[c] ? (e.componentInstance = a[c].componentInstance, l(s, c), s.push(c)) : (a[c] = e, s.push(c), this.max && s.length > parseInt(this.max) && zt(a, s[0], s, this._vnode)), e.data.keepAlive = !0;
        }return e || t && t[0];
      } } };!function (t) {
    var e = {};e.get = function () {
      return Jn;
    }, Object.defineProperty(t, "config", e), t.util = { warn: pr, extend: h, mergeOptions: F, defineReactive: E }, t.set = j, t.delete = N, t.nextTick = q, t.options = Object.create(null), zn.forEach(function (e) {
      t.options[e + "s"] = Object.create(null);
    }), t.options._base = t, h(t.options.components, ti), function (t) {
      t.use = function (t) {
        var e = this._installedPlugins || (this._installedPlugins = []);if (e.indexOf(t) > -1) return this;var n = v(arguments, 1);return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this;
      };
    }(t), function (t) {
      t.mixin = function (t) {
        return this.options = F(this.options, t), this;
      };
    }(t), Ht(t), function (t) {
      zn.forEach(function (e) {
        t[e] = function (t, n) {
          return n ? ("component" === e && o(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = { bind: n, update: n }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
        };
      });
    }(t);
  }(Rt), Object.defineProperty(Rt.prototype, "$isServer", { get: ur }), Object.defineProperty(Rt.prototype, "$ssrContext", { get: function get() {
      return this.$vnode && this.$vnode.ssrContext;
    } }), Rt.version = "2.5.13";var ei,
      ni,
      ri,
      ii,
      oi,
      ai,
      si,
      ci,
      ui = u("style,class"),
      li = u("input,textarea,option,select,progress"),
      fi = function fi(t, e, n) {
    return "value" === n && li(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
  },
      pi = u("contenteditable,draggable,spellcheck"),
      di = u("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
      vi = "http://www.w3.org/1999/xlink",
      hi = function hi(t) {
    return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
  },
      mi = function mi(t) {
    return hi(t) ? t.slice(6, t.length) : "";
  },
      yi = function yi(t) {
    return null == t || !1 === t;
  },
      gi = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
      _i = u("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
      bi = u("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
      $i = function $i(t) {
    return _i(t) || bi(t);
  },
      Ci = Object.create(null),
      wi = u("text,number,password,search,email,tel,url"),
      xi = Object.freeze({ createElement: function createElement(t, e) {
      var n = document.createElement(t);return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n);
    }, createElementNS: function createElementNS(t, e) {
      return document.createElementNS(gi[t], e);
    }, createTextNode: function createTextNode(t) {
      return document.createTextNode(t);
    }, createComment: function createComment(t) {
      return document.createComment(t);
    }, insertBefore: function insertBefore(t, e, n) {
      t.insertBefore(e, n);
    }, removeChild: function removeChild(t, e) {
      t.removeChild(e);
    }, appendChild: function appendChild(t, e) {
      t.appendChild(e);
    }, parentNode: function parentNode(t) {
      return t.parentNode;
    }, nextSibling: function nextSibling(t) {
      return t.nextSibling;
    }, tagName: function tagName(t) {
      return t.tagName;
    }, setTextContent: function setTextContent(t, e) {
      t.textContent = e;
    }, setAttribute: function setAttribute(t, e, n) {
      t.setAttribute(e, n);
    } }),
      ki = { create: function create(t, e) {
      Xt(e);
    }, update: function update(t, e) {
      t.data.ref !== e.data.ref && (Xt(t, !0), Xt(e));
    }, destroy: function destroy(t) {
      Xt(t, !0);
    } },
      Ai = new mr("", {}, []),
      Oi = ["create", "activate", "update", "remove", "destroy"],
      Si = { create: te, update: te, destroy: function destroy(t) {
      te(t, Ai);
    } },
      Ti = Object.create(null),
      Ei = [ki, Si],
      ji = { create: re, update: re },
      Ni = { create: oe, update: oe },
      Ii = /[\w).+\-_$\]]/,
      Li = "__r",
      Mi = "__c",
      Di = { create: xe, update: xe },
      Pi = { create: ke, update: ke },
      Fi = p(function (t) {
    var e = {},
        n = /:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function (t) {
      if (t) {
        var r = t.split(n);r.length > 1 && (e[r[0].trim()] = r[1].trim());
      }
    }), e;
  }),
      Ri = /^--/,
      Hi = /\s*!important$/,
      Bi = function Bi(t, e, n) {
    if (Ri.test(e)) t.style.setProperty(e, n);else if (Hi.test(n)) t.style.setProperty(e, n.replace(Hi, ""), "important");else {
      var r = Vi(e);if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) {
        t.style[r] = n[i];
      } else t.style[r] = n;
    }
  },
      Ui = ["Webkit", "Moz", "ms"],
      Vi = p(function (t) {
    if (ci = ci || document.createElement("div").style, "filter" !== (t = Pn(t)) && t in ci) return t;for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Ui.length; n++) {
      var r = Ui[n] + e;if (r in ci) return r;
    }
  }),
      zi = { create: Se, update: Se },
      Ki = p(function (t) {
    return { enterClass: t + "-enter", enterToClass: t + "-enter-to", enterActiveClass: t + "-enter-active", leaveClass: t + "-leave", leaveToClass: t + "-leave-to", leaveActiveClass: t + "-leave-active" };
  }),
      Ji = Gn && !tr,
      qi = "transition",
      Wi = "animation",
      Gi = "transition",
      Zi = "transitionend",
      Xi = "animation",
      Yi = "animationend";Ji && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Gi = "WebkitTransition", Zi = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Xi = "WebkitAnimation", Yi = "webkitAnimationEnd"));var Qi = Gn ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (t) {
    return t();
  },
      to = /\b(transform|all)(,|$)/,
      eo = function (i) {
    function o(t) {
      var n = A.parentNode(t);e(n) && A.removeChild(n, t);
    }function a(t, r, i, o, a) {
      if (t.isRootInsert = !a, !function (t, r, i, o) {
        var a = t.data;if (e(a)) {
          var u = e(t.componentInstance) && a.keepAlive;if (e(a = a.hook) && e(a = a.init) && a(t, !1, i, o), e(t.componentInstance)) return s(t, r), n(u) && function (t, n, r, i) {
            for (var o, a = t; a.componentInstance;) {
              if (a = a.componentInstance._vnode, e(o = a.data) && e(o = o.transition)) {
                for (o = 0; o < x.activate.length; ++o) {
                  x.activate[o](Ai, a);
                }n.push(a);break;
              }
            }c(r, t.elm, i);
          }(t, r, i, o), !0;
        }
      }(t, r, i, o)) {
        var u = t.data,
            f = t.children,
            v = t.tag;e(v) ? (t.elm = t.ns ? A.createElementNS(t.ns, v) : A.createElement(v, t), d(t), l(t, f, r), e(u) && p(t, r), c(i, t.elm, o)) : n(t.isComment) ? (t.elm = A.createComment(t.text), c(i, t.elm, o)) : (t.elm = A.createTextNode(t.text), c(i, t.elm, o));
      }
    }function s(t, n) {
      e(t.data.pendingInsert) && (n.push.apply(n, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, f(t) ? (p(t, n), d(t)) : (Xt(t), n.push(t));
    }function c(t, n, r) {
      e(t) && (e(r) ? r.parentNode === t && A.insertBefore(t, n, r) : A.appendChild(t, n));
    }function l(t, e, n) {
      if (Array.isArray(e)) for (var i = 0; i < e.length; ++i) {
        a(e[i], n, t.elm, null, !0);
      } else r(t.text) && A.appendChild(t.elm, A.createTextNode(String(t.text)));
    }function f(t) {
      for (; t.componentInstance;) {
        t = t.componentInstance._vnode;
      }return e(t.tag);
    }function p(t, n) {
      for (var r = 0; r < x.create.length; ++r) {
        x.create[r](Ai, t);
      }e(C = t.data.hook) && (e(C.create) && C.create(Ai, t), e(C.insert) && n.push(t));
    }function d(t) {
      var n;if (e(n = t.fnScopeId)) A.setAttribute(t.elm, n, "");else for (var r = t; r;) {
        e(n = r.context) && e(n = n.$options._scopeId) && A.setAttribute(t.elm, n, ""), r = r.parent;
      }e(n = Pr) && n !== t.context && n !== t.fnContext && e(n = n.$options._scopeId) && A.setAttribute(t.elm, n, "");
    }function v(t, e, n, r, i, o) {
      for (; r <= i; ++r) {
        a(n[r], o, t, e);
      }
    }function h(t) {
      var n,
          r,
          i = t.data;if (e(i)) for (e(n = i.hook) && e(n = n.destroy) && n(t), n = 0; n < x.destroy.length; ++n) {
        x.destroy[n](t);
      }if (e(n = t.children)) for (r = 0; r < t.children.length; ++r) {
        h(t.children[r]);
      }
    }function m(t, n, r, i) {
      for (; r <= i; ++r) {
        var a = n[r];e(a) && (e(a.tag) ? (y(a), h(a)) : o(a.elm));
      }
    }function y(t, n) {
      if (e(n) || e(t.data)) {
        var r,
            i = x.remove.length + 1;for (e(n) ? n.listeners += i : n = function (t, e) {
          function n() {
            0 == --n.listeners && o(t);
          }return n.listeners = e, n;
        }(t.elm, i), e(r = t.componentInstance) && e(r = r._vnode) && e(r.data) && y(r, n), r = 0; r < x.remove.length; ++r) {
          x.remove[r](t, n);
        }e(r = t.data.hook) && e(r = r.remove) ? r(t, n) : n();
      } else o(t.elm);
    }function g(n, r, i, o, s) {
      for (var c, u, l, f = 0, p = 0, d = r.length - 1, h = r[0], y = r[d], g = i.length - 1, b = i[0], $ = i[g], C = !s; f <= d && p <= g;) {
        t(h) ? h = r[++f] : t(y) ? y = r[--d] : Yt(h, b) ? (_(h, b, o), h = r[++f], b = i[++p]) : Yt(y, $) ? (_(y, $, o), y = r[--d], $ = i[--g]) : Yt(h, $) ? (_(h, $, o), C && A.insertBefore(n, h.elm, A.nextSibling(y.elm)), h = r[++f], $ = i[--g]) : Yt(y, b) ? (_(y, b, o), C && A.insertBefore(n, y.elm, h.elm), y = r[--d], b = i[++p]) : (t(c) && (c = Qt(r, f, d)), t(u = e(b.key) ? c[b.key] : function (t, n, r, i) {
          for (var o = r; o < i; o++) {
            var a = n[o];if (e(a) && Yt(t, a)) return o;
          }
        }(b, r, f, d)) ? a(b, o, n, h.elm) : Yt(l = r[u], b) ? (_(l, b, o), r[u] = void 0, C && A.insertBefore(n, l.elm, h.elm)) : a(b, o, n, h.elm), b = i[++p]);
      }f > d ? v(n, t(i[g + 1]) ? null : i[g + 1].elm, i, p, g, o) : p > g && m(0, r, f, d);
    }function _(r, i, o, a) {
      if (r !== i) {
        var s = i.elm = r.elm;if (n(r.isAsyncPlaceholder)) e(i.asyncFactory.resolved) ? $(r.elm, i, o) : i.isAsyncPlaceholder = !0;else if (n(i.isStatic) && n(r.isStatic) && i.key === r.key && (n(i.isCloned) || n(i.isOnce))) i.componentInstance = r.componentInstance;else {
          var c,
              u = i.data;e(u) && e(c = u.hook) && e(c = c.prepatch) && c(r, i);var l = r.children,
              p = i.children;if (e(u) && f(i)) {
            for (c = 0; c < x.update.length; ++c) {
              x.update[c](r, i);
            }e(c = u.hook) && e(c = c.update) && c(r, i);
          }t(i.text) ? e(l) && e(p) ? l !== p && g(s, l, p, o, a) : e(p) ? (e(r.text) && A.setTextContent(s, ""), v(s, null, p, 0, p.length - 1, o)) : e(l) ? m(0, l, 0, l.length - 1) : e(r.text) && A.setTextContent(s, "") : r.text !== i.text && A.setTextContent(s, i.text), e(u) && e(c = u.hook) && e(c = c.postpatch) && c(r, i);
        }
      }
    }function b(t, r, i) {
      if (n(i) && e(t.parent)) t.parent.data.pendingInsert = r;else for (var o = 0; o < r.length; ++o) {
        r[o].data.hook.insert(r[o]);
      }
    }function $(t, r, i, o) {
      var a,
          c = r.tag,
          u = r.data,
          f = r.children;if (o = o || u && u.pre, r.elm = t, n(r.isComment) && e(r.asyncFactory)) return r.isAsyncPlaceholder = !0, !0;if (e(u) && (e(a = u.hook) && e(a = a.init) && a(r, !0), e(a = r.componentInstance))) return s(r, i), !0;if (e(c)) {
        if (e(f)) if (t.hasChildNodes()) {
          if (e(a = u) && e(a = a.domProps) && e(a = a.innerHTML)) {
            if (a !== t.innerHTML) return !1;
          } else {
            for (var d = !0, v = t.firstChild, h = 0; h < f.length; h++) {
              if (!v || !$(v, f[h], i, o)) {
                d = !1;break;
              }v = v.nextSibling;
            }if (!d || v) return !1;
          }
        } else l(r, f, i);if (e(u)) {
          var m = !1;for (var y in u) {
            if (!O(y)) {
              m = !0, p(r, i);break;
            }
          }!m && u.class && W(u.class);
        }
      } else t.data !== r.text && (t.data = r.text);return !0;
    }var C,
        w,
        x = {},
        k = i.modules,
        A = i.nodeOps;for (C = 0; C < Oi.length; ++C) {
      for (x[Oi[C]] = [], w = 0; w < k.length; ++w) {
        e(k[w][Oi[C]]) && x[Oi[C]].push(k[w][Oi[C]]);
      }
    }var O = u("attrs,class,staticClass,staticStyle,key");return function (r, i, o, s, c, u) {
      if (!t(i)) {
        var l = !1,
            p = [];if (t(r)) l = !0, a(i, p, c, u);else {
          var d = e(r.nodeType);if (!d && Yt(r, i)) _(r, i, p, s);else {
            if (d) {
              if (1 === r.nodeType && r.hasAttribute(Vn) && (r.removeAttribute(Vn), o = !0), n(o) && $(r, i, p)) return b(i, p, !0), r;r = function (t) {
                return new mr(A.tagName(t).toLowerCase(), {}, [], void 0, t);
              }(r);
            }var v = r.elm,
                y = A.parentNode(v);if (a(i, p, v._leaveCb ? null : y, A.nextSibling(v)), e(i.parent)) for (var g = i.parent, C = f(i); g;) {
              for (var w = 0; w < x.destroy.length; ++w) {
                x.destroy[w](g);
              }if (g.elm = i.elm, C) {
                for (var k = 0; k < x.create.length; ++k) {
                  x.create[k](Ai, g);
                }var O = g.data.hook.insert;if (O.merged) for (var S = 1; S < O.fns.length; S++) {
                  O.fns[S]();
                }
              } else Xt(g);g = g.parent;
            }e(y) ? m(0, [r], 0, 0) : e(r.tag) && h(r);
          }
        }return b(i, p, l), i.elm;
      }e(r) && h(r);
    };
  }({ nodeOps: xi, modules: [ji, Ni, Di, Pi, zi, Gn ? { create: Ve, activate: Ve, remove: function remove(t, e) {
        !0 !== t.data.show ? He(t, e) : e();
      } } : {}].concat(Ei) });tr && document.addEventListener("selectionchange", function () {
    var t = document.activeElement;t && t.vmodel && Ze(t, "input");
  });var no = { inserted: function inserted(t, e, n, r) {
      "select" === n.tag ? (r.elm && !r.elm._vOptions ? Y(n, "postpatch", function () {
        no.componentUpdated(t, e, n);
      }) : ze(t, e, n.context), t._vOptions = [].map.call(t.options, qe)) : ("textarea" === n.tag || wi(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("change", Ge), nr || (t.addEventListener("compositionstart", We), t.addEventListener("compositionend", Ge)), tr && (t.vmodel = !0)));
    }, componentUpdated: function componentUpdated(t, e, n) {
      if ("select" === n.tag) {
        ze(t, e, n.context);var r = t._vOptions,
            i = t._vOptions = [].map.call(t.options, qe);if (i.some(function (t, e) {
          return !g(t, r[e]);
        })) {
          (t.multiple ? e.value.some(function (t) {
            return Je(t, i);
          }) : e.value !== e.oldValue && Je(e.value, i)) && Ze(t, "change");
        }
      }
    } },
      ro = { model: no, show: { bind: function bind(t, e, n) {
        var r = e.value,
            i = (n = Xe(n)).data && n.data.transition,
            o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;r && i ? (n.data.show = !0, Re(n, function () {
          t.style.display = o;
        })) : t.style.display = r ? o : "none";
      }, update: function update(t, e, n) {
        var r = e.value;if (r !== e.oldValue) {
          (n = Xe(n)).data && n.data.transition ? (n.data.show = !0, r ? Re(n, function () {
            t.style.display = t.__vOriginalDisplay;
          }) : He(n, function () {
            t.style.display = "none";
          })) : t.style.display = r ? t.__vOriginalDisplay : "none";
        }
      }, unbind: function unbind(t, e, n, r, i) {
        i || (t.style.display = t.__vOriginalDisplay);
      } } },
      io = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] },
      oo = { name: "transition", props: io, abstract: !0, render: function render(t) {
      var e = this,
          n = this.$slots.default;if (n && (n = n.filter(function (t) {
        return t.tag || rt(t);
      })).length) {
        var i = this.mode,
            o = n[0];if (function (t) {
          for (; t = t.parent;) {
            if (t.data.transition) return !0;
          }
        }(this.$vnode)) return o;var a = Ye(o);if (!a) return o;if (this._leaving) return tn(t, o);var s = "__transition-" + this._uid + "-";a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : r(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;var c = (a.data || (a.data = {})).transition = Qe(this),
            u = this._vnode,
            l = Ye(u);if (a.data.directives && a.data.directives.some(function (t) {
          return "show" === t.name;
        }) && (a.data.show = !0), l && l.data && !function (t, e) {
          return e.key === t.key && e.tag === t.tag;
        }(a, l) && !rt(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
          var f = l.data.transition = h({}, c);if ("out-in" === i) return this._leaving = !0, Y(f, "afterLeave", function () {
            e._leaving = !1, e.$forceUpdate();
          }), tn(t, o);if ("in-out" === i) {
            if (rt(a)) return u;var p,
                d = function d() {
              p();
            };Y(c, "afterEnter", d), Y(c, "enterCancelled", d), Y(f, "delayLeave", function (t) {
              p = t;
            });
          }
        }return o;
      }
    } },
      ao = h({ tag: String, moveClass: String }, io);delete ao.mode;var so = { Transition: oo, TransitionGroup: { props: ao, render: function render(t) {
        for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Qe(this), s = 0; s < i.length; s++) {
          var c = i[s];c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a);
        }if (r) {
          for (var u = [], l = [], f = 0; f < r.length; f++) {
            var p = r[f];p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p);
          }this.kept = t(e, null, u), this.removed = l;
        }return t(e, null, o);
      }, beforeUpdate: function beforeUpdate() {
        this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
      }, updated: function updated() {
        var t = this.prevChildren,
            e = this.moveClass || (this.name || "v") + "-move";t.length && this.hasMove(t[0].elm, e) && (t.forEach(en), t.forEach(nn), t.forEach(rn), this._reflow = document.body.offsetHeight, t.forEach(function (t) {
          if (t.data.moved) {
            var n = t.elm,
                r = n.style;Ie(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Zi, n._moveCb = function t(r) {
              r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Zi, t), n._moveCb = null, Le(n, e));
            });
          }
        }));
      }, methods: { hasMove: function hasMove(t, e) {
          if (!Ji) return !1;if (this._hasMove) return this._hasMove;var n = t.cloneNode();t._transitionClasses && t._transitionClasses.forEach(function (t) {
            Ee(n, t);
          }), Te(n, e), n.style.display = "none", this.$el.appendChild(n);var r = De(n);return this.$el.removeChild(n), this._hasMove = r.hasTransform;
        } } } };Rt.config.mustUseProp = fi, Rt.config.isReservedTag = $i, Rt.config.isReservedAttr = ui, Rt.config.getTagNamespace = Gt, Rt.config.isUnknownElement = function (t) {
    if (!Gn) return !0;if ($i(t)) return !1;if (t = t.toLowerCase(), null != Ci[t]) return Ci[t];var e = document.createElement(t);return t.indexOf("-") > -1 ? Ci[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Ci[t] = /HTMLUnknownElement/.test(e.toString());
  }, h(Rt.options.directives, ro), h(Rt.options.components, so), Rt.prototype.__patch__ = Gn ? eo : y, Rt.prototype.$mount = function (t, e) {
    return t = t && Gn ? Zt(t) : void 0, function (t, e, n) {
      t.$el = e, t.$options.render || (t.$options.render = gr), vt(t, "beforeMount");var r;return r = function r() {
        t._update(t._render(), n);
      }, new Kr(t, r, y, null, !0), n = !1, null == t.$vnode && (t._isMounted = !0, vt(t, "mounted")), t;
    }(this, t, e);
  }, Rt.nextTick(function () {
    Jn.devtools && lr && lr.emit("init", Rt);
  }, 0);var co,
      uo = /\{\{((?:.|\n)+?)\}\}/g,
      lo = /[-.*+?^${}()|[\]\/\\]/g,
      fo = p(function (t) {
    var e = t[0].replace(lo, "\\$&"),
        n = t[1].replace(lo, "\\$&");return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
  }),
      po = { staticKeys: ["staticClass"], transformNode: function transformNode(t, e) {
      e.warn;var n = he(t, "class");n && (t.staticClass = JSON.stringify(n));var r = ve(t, "class", !1);r && (t.classBinding = r);
    }, genData: function genData(t) {
      var e = "";return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), e;
    } },
      vo = { staticKeys: ["staticStyle"], transformNode: function transformNode(t, e) {
      e.warn;var n = he(t, "style");n && (t.staticStyle = JSON.stringify(Fi(n)));var r = ve(t, "style", !1);r && (t.styleBinding = r);
    }, genData: function genData(t) {
      var e = "";return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), e;
    } },
      ho = function ho(t) {
    return co = co || document.createElement("div"), co.innerHTML = t, co.textContent;
  },
      mo = u("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
      yo = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
      go = u("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
      _o = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
      bo = "[a-zA-Z_][\\w\\-\\.]*",
      $o = "((?:" + bo + "\\:)?" + bo + ")",
      Co = new RegExp("^<" + $o),
      wo = /^\s*(\/?)>/,
      xo = new RegExp("^<\\/" + $o + "[^>]*>"),
      ko = /^<!DOCTYPE [^>]+>/i,
      Ao = /^<!--/,
      Oo = /^<!\[/,
      So = !1;"x".replace(/x(.)?/g, function (t, e) {
    So = "" === e;
  });var To,
      Eo,
      jo,
      No,
      Io,
      Lo,
      Mo,
      Do,
      Po,
      Fo,
      Ro,
      Ho = u("script,style,textarea", !0),
      Bo = {},
      Uo = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t" },
      Vo = /&(?:lt|gt|quot|amp);/g,
      zo = /&(?:lt|gt|quot|amp|#10|#9);/g,
      Ko = u("pre,textarea", !0),
      Jo = function Jo(t, e) {
    return t && Ko(t) && "\n" === e[0];
  },
      qo = /^@|^v-on:/,
      Wo = /^v-|^@|^:/,
      Go = /(.*?)\s+(?:in|of)\s+(.*)/,
      Zo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      Xo = /^\(|\)$/g,
      Yo = /:(.*)$/,
      Qo = /^:|^v-bind:/,
      ta = /\.[^.]+/g,
      ea = p(ho),
      na = /^xmlns:NS\d+/,
      ra = /^NS\d+:/,
      ia = [po, vo, { preTransformNode: function preTransformNode(t, e) {
      if ("input" === t.tag) {
        var n = t.attrsMap;if (n["v-model"] && (n["v-bind:type"] || n[":type"])) {
          var r = ve(t, "type"),
              i = he(t, "v-if", !0),
              o = i ? "&&(" + i + ")" : "",
              a = null != he(t, "v-else", !0),
              s = he(t, "v-else-if", !0),
              c = fn(t);un(c), fe(c, "type", "checkbox"), cn(c, e), c.processed = !0, c.if = "(" + r + ")==='checkbox'" + o, ln(c, { exp: c.if, block: c });var u = fn(t);he(u, "v-for", !0), fe(u, "type", "radio"), cn(u, e), ln(c, { exp: "(" + r + ")==='radio'" + o, block: u });var l = fn(t);return he(l, "v-for", !0), fe(l, ":type", r), cn(l, e), ln(c, { exp: i, block: l }), a ? c.else = !0 : s && (c.elseif = s), c;
        }
      }
    } }],
      oa = { expectHTML: !0, modules: ia, directives: { model: function model(t, e, n) {
        var r = e.value,
            i = e.modifiers,
            o = t.tag,
            a = t.attrsMap.type;if (t.component) return me(t, r, i), !1;if ("select" === o) !function (t, e, n) {
          var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";r = r + " " + ye(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), de(t, "change", r, null, !0);
        }(t, r, i);else if ("input" === o && "checkbox" === a) !function (t, e, n) {
          var r = n && n.number,
              i = ve(t, "value") || "null",
              o = ve(t, "true-value") || "true",
              a = ve(t, "false-value") || "false";ue(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + i + ")>-1" + ("true" === o ? ":(" + e + ")" : ":_q(" + e + "," + o + ")")), de(t, "change", "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + e + "=$$a.concat([$$v]))}else{$$i>-1&&(" + e + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + ye(e, "$$c") + "}", null, !0);
        }(t, r, i);else if ("input" === o && "radio" === a) !function (t, e, n) {
          var r = n && n.number,
              i = ve(t, "value") || "null";ue(t, "checked", "_q(" + e + "," + (i = r ? "_n(" + i + ")" : i) + ")"), de(t, "change", ye(e, i), null, !0);
        }(t, r, i);else if ("input" === o || "textarea" === o) !function (t, e, n) {
          var r = t.attrsMap.type,
              i = n || {},
              o = i.lazy,
              a = i.number,
              s = i.trim,
              c = !o && "range" !== r,
              u = o ? "change" : "range" === r ? Li : "input",
              l = "$event.target.value";s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");var f = ye(e, l);c && (f = "if($event.target.composing)return;" + f), ue(t, "value", "(" + e + ")"), de(t, u, f, null, !0), (s || a) && de(t, "blur", "$forceUpdate()");
        }(t, r, i);else if (!Jn.isReservedTag(o)) return me(t, r, i), !1;return !0;
      }, text: function text(t, e) {
        e.value && ue(t, "textContent", "_s(" + e.value + ")");
      }, html: function html(t, e) {
        e.value && ue(t, "innerHTML", "_s(" + e.value + ")");
      } }, isPreTag: function isPreTag(t) {
      return "pre" === t;
    }, isUnaryTag: mo, mustUseProp: fi, canBeLeftOpenTag: yo, isReservedTag: $i, getTagNamespace: Gt, staticKeys: function (t) {
      return t.reduce(function (t, e) {
        return t.concat(e.staticKeys || []);
      }, []).join(",");
    }(ia) },
      aa = p(function (t) {
    return u("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""));
  }),
      sa = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
      ca = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
      ua = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
      la = function la(t) {
    return "if(" + t + ")return null;";
  },
      fa = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: la("$event.target !== $event.currentTarget"), ctrl: la("!$event.ctrlKey"), shift: la("!$event.shiftKey"), alt: la("!$event.altKey"), meta: la("!$event.metaKey"), left: la("'button' in $event && $event.button !== 0"), middle: la("'button' in $event && $event.button !== 1"), right: la("'button' in $event && $event.button !== 2") },
      pa = { on: function on(t, e) {
      t.wrapListeners = function (t) {
        return "_g(" + t + "," + e.value + ")";
      };
    }, bind: function bind(t, e) {
      t.wrapData = function (n) {
        return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")";
      };
    }, cloak: y },
      da = function da(t) {
    this.options = t, this.warn = t.warn || se, this.transforms = ce(t.modules, "transformCode"), this.dataGenFns = ce(t.modules, "genData"), this.directives = h(h({}, pa), t.directives);var e = t.isReservedTag || Bn;this.maybeComponent = function (t) {
      return !e(t.tag);
    }, this.onceId = 0, this.staticRenderFns = [];
  },
      va = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), function (t) {
    return function (e) {
      function n(n, r) {
        var i = Object.create(e),
            o = [],
            a = [];if (i.warn = function (t, e) {
          (e ? a : o).push(t);
        }, r) {
          r.modules && (i.modules = (e.modules || []).concat(r.modules)), r.directives && (i.directives = h(Object.create(e.directives || null), r.directives));for (var s in r) {
            "modules" !== s && "directives" !== s && (i[s] = r[s]);
          }
        }var c = t(n, i);return c.errors = o, c.tips = a, c;
      }return { compile: n, compileToFunctions: function (t) {
          var e = Object.create(null);return function (n, r, i) {
            (r = h({}, r)).warn, delete r.warn;var o = r.delimiters ? String(r.delimiters) + n : n;if (e[o]) return e[o];var a = t(n, r),
                s = {},
                c = [];return s.render = Tn(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function (t) {
              return Tn(t, c);
            }), e[o] = s;
          };
        }(n) };
    };
  }(function (t, e) {
    var n = sn(t.trim(), e);!1 !== e.optimize && function (t, e) {
      t && (Po = aa(e.staticKeys || ""), Fo = e.isReservedTag || Bn, pn(t), dn(t, !1));
    }(n, e);var r = yn(n, e);return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
  })(oa).compileToFunctions),
      ha = !!Gn && En(!1),
      ma = !!Gn && En(!0),
      ya = p(function (t) {
    var e = Zt(t);return e && e.innerHTML;
  }),
      ga = Rt.prototype.$mount;return Rt.prototype.$mount = function (t, e) {
    if ((t = t && Zt(t)) === document.body || t === document.documentElement) return this;var n = this.$options;if (!n.render) {
      var r = n.template;if (r) {
        if ("string" == typeof r) "#" === r.charAt(0) && (r = ya(r));else {
          if (!r.nodeType) return this;r = r.innerHTML;
        }
      } else t && (r = function (t) {
        if (t.outerHTML) return t.outerHTML;var e = document.createElement("div");return e.appendChild(t.cloneNode(!0)), e.innerHTML;
      }(t));if (r) {
        var i = va(r, { shouldDecodeNewlines: ha, shouldDecodeNewlinesForHref: ma, delimiters: n.delimiters, comments: n.comments }, this),
            o = i.render,
            a = i.staticRenderFns;n.render = o, n.staticRenderFns = a;
      }
    }return ga.call(this, t, e);
  }, Rt.compile = va, Rt;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(16).setImmediate))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(17);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = [
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
  pages: ["pcnews-start.html", "pcnews-index-news.html", "pcnews-article-top20.html", "pcnews-search-results.html", "pcnews-tear.html", "pcnews-text.html"],
  description: "Beware! 2009 год, первый летописный заказ, ох и намучался я с ним.",
  devices: "desktop",
  alive: "http://pcnews.ru"
}, {
  title: "КиноЗавод",
  path: "2009-07--slava-komarov--kinozavod/www/",
  pages: ["index-202.html", "index-302.html", "index-402.html", "index-502.html", "index-602.html"],
  description: "Операторское оборудование",
  devices: "desktop",
  alive: "http://www.kinozavod.ru"
}, {
  title: "Little Fish",
  path: "2009-08--smile--little-fish-v1/www/",
  pages: ["index.html"],
  description: "Старый дизайн студии рисунка little-fish",
  devices: "desktop"
}, {
  title: "Aster Gold",
  path: "2009-10--roman-mandrik--aster-gold/www/",
  pages: ["astergold.html", "astergold-basket.html", "astergold-inner.html", "astergold-order-register.html", "astergold-product.html", "astergold-profile.html", "astergold-static-page.html"],
  description: "Брюлики & колечки",
  devices: "desktop"
}, {
  title: "Сны i секреты",
  path: "2009-12--roman-mandrik--sni-i-secreti/www/",
  pages: ["sny-main.html", "sny-basket.html", "sny-catalog.html", "sny-checkout.html", "sny-product.html", "sny-text.html"],
  description: "Интернет-магазин подушек и спанья",
  devices: "desktop"
}, {
  title: "Маша Краснова-Шабаева",
  path: "2010-04--sergey-kruk--masha-krasnova-shabaeva/www/",
  pages: ["main.html", "background-ver1.html", "background-ver2.html", "background-ver3.html", "blog.html", "post-and-comments.html"],
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
  description: "Строим ресто-билды. #lolW00t",
  devices: "desktop",
  alive: "http://treecalcs.com"
}, {
  title: "Серебро Непала",
  path: "2010-07--roman-vorushin--serebro-nepala/www/",
  pages: ["serebro-main.html", "serebro-basket.html", "serebro-form.html", "serebro-info.html", "serebro-tovar.html"],
  description: "Интернет-магазин прикольных безделушек",
  devices: "desktop"
}, {
  title: "Nia Style",
  path: "2010-09--eugene-mesherjakov--nia-style/www/",
  pages: ["nia-style-default.html", "nia-style-art.html", "nia-style-cat1.html", "nia-style-cat2.html", "nia-style-text.html"],
  description: "Что-то несусветное (<q>ня-стайл</q>??), но такое я тоже верстаю",
  devices: "desktop"
}, {
  title: "SmartTrans",
  path: "2010-10--al-niko--smarttrans/www/",
  pages: ["smarttrans-about.html"],
  description: "Это не транспорт, это языковые переводы",
  devices: "desktop"
}, {
  title: "UniCredit",
  path: "2010-11--dasha-karandasheva--unicredit-widget/www/",
  pages: ["index.html"],
  description: "Виджет для Mac",
  devices: "desktop"
}, {
  title: "Mr. Woodman v1.0",
  path: "2010-xx--mr-woodman-v1/www/",
  pages: ["index.html"],
  description: "Мой мегасайт первой версии. #Дизайн&UX",
  devices: "desktop"
}, {
  title: "Ухтышка",
  path: "2011-03--smile--uhtyshka/www/",
  pages: ["uhty-main.html", "uhty-about-us.html", "uhty-activation.html", "uhty-contacts.html", "uhty-dostavka.html", "uhty-goodies.html", "uhty-how-this-works.html", "uhty-photo.html", "uhty-product.html"],
  description: "Скромно но мило",
  devices: "desktop"
}, {
  title: "YogaDa",
  path: "2011-05--seanat--yogada/www/",
  pages: ["yogada-main.html", "yogada-404.html", "yogada-all-users.html", "yogada-blog.html", "yogada-blog-post.html", "yogada-blogs.html", "yogada-blogs-all-entries.html", "yogada-blogs-newpost.html", "yogada-comments.html", "yogada-eastpractices.html", "yogada-freedive.html", "yogada-main-login.html", "yogada-meroprijatija.html", "yogada-news.html", "yogada-photo.html", "yogada-photos.html", "yogada-photos-album.html", "yogada-places.html", "yogada-profile.html", "yogada-search-results.html", "yogada-text.html", "yogada-text-print.html", "yogada-texts.html", "yogada-theme.html", "yogada-themes.html", "yogada-travel.html", "yogada-videos.html", "yogada-zaglushka.html"],
  description: "Переусложненный сайт, ошеломляющее ведение проекта. #МильярдШаблонов, #МильярдПравок",
  devices: "desktop"
}, {
  title: "Лекция Ahmad Tea",
  path: "2011-07--samartsev--ahmad-tea-lecture/www/",
  pages: ["index.html"],
  description: "Про чай, естественно. Простенько, но четко.",
  devices: "desktop"
}, {
  title: "Bars II",
  path: "2011-08--dima-komissarov--bars-2/www/",
  pages: ["bars2-index.html", "bars2-about.html", "bars2-about-old.html", "bars2-dealers.html", "bars2-doors.html", "bars2-doors-locksnhandles.html", "bars2-doors-nonstandard.html", "bars2-doors-whybars.html", "bars2-forum-post-comments.html", "bars2-forum-posts-list.html", "bars2-konfigurator-models.html", "bars2-konfigurator-vars.html", "bars2-konfigurator-vars2.html", "bars2-minora.html", "bars2-minora-about.html", "bars2-minora-techs.html", "bars2-minora-vars.html", "bars2-showroom.html", "bars2-showroom-print.html"],
  description: "Вторая версия сайта. #КрутаяРезина",
  devices: "desktop",
  alive: "http://www.barsdoors.ru"
}, {
  title: "Bars",
  path: "2011-08--dima-komissarov--bars-for-designers/www/",
  pages: ["bars2designers-index.html", "bars2designers-scheme.html", "bars2designers-reserve.html", "bars2designers-photo.html"],
  description: "Двери. Сайт производителя для дизайнеров интерьеров",
  devices: "desktop"
}, {
  title: "Адвокатский клуб",
  path: "2011-12--dima-komissarov--advocate-club/www/",
  pages: ["ac-index-temp.html", "ac-index-customers.html", "ac-index-advocats.html", "customers-index.html", "customers-how.html", "customers-faq.html", "advocats-registration.html", "advocats-privileges.html", "ac-reviews.html", "ac-info.html", "ac-how-customers.html", "ac-customer-personal-cabinet.html", "ac-article.html", "ac-advocat-homepage.html", "ac-advices.html"],
  description: "Мильярд шаблонов, интересные ходы с шрифтами и дореволюционный виджет <q>аккордеон</q>",
  devices: "desktop"
}, {
  title: "Facebook-магазин Ahmad Tea",
  path: "2012-03--aries--ahmad-tea-facebook/www/",
  pages: ["ahmad-index.html", "ahmad-category.html", "ahmad-search.html", "ahmad-item.html", "ahmad-step1.html", "ahmad-history.html", "ahmad-step3.html", "ahmad-email.html", "ahmad-step4.html", "ahmad-step2.html", "ahmad-about.html"],
  description: "Просто и клево",
  devices: "desktop tablet",
  alive: "https://apps.facebook.com/ahmadteastore/"
}, {
  title: "Дымов",
  path: "2012-04--rudy--dymov/www/",
  pages: ["dymov-index.html", "dymov-recepty.html", "dymov-recepty-inside.html", "dymov-produkcia.html", "dymov-produkcia-inside.html", "dymov-o-nas.html", "dymov-novosti.html", "dymov-novosti-inside.html", "dymov-kontakty.html", "dymov-karjera.html", "dymov-kachestvo-i-bezopasnost.html", "dymov-istorija.html", "dymov-investoram.html"],
  description: "Мясо. Колбаса. Даже ТВ-канал про котлеты! В общем, простой информационный сайт/интернет-магазин",
  devices: "desktop",
  alive: "http://v-dymov.ru"
}, {
  title: "Ост-мед",
  path: "2012-06--handyweb--ostmed/www/",
  pages: ["index.html"],
  description: "Мобильный сайт про медиков",
  devices: "mobile"
}, {
  title: "Трансдепот",
  path: "2012-xx--aries--transdepot/www/",
  pages: ["transdepot-index.html", "transdepot-tamozhennoe-oformlenie.html", "transdepot-dostavka-gruzov.html", "transdepot-cabinet.html", "transdepot-autsorsing-ved.html", "transdepot-about.html"],
  description: "Пролетарно, про машинки & помороченный калькулятор на главной.",
  devices: "desktop",
  alive: "http://transdepot.ru"
}, {
  title: "Capital View",
  path: "2012-xx--dima-komissarov--capital-view/www/",
  pages: ["capitalview-index.html", "capitalview-projectmembers.html", "capitalview-katok.html", "capitalview-about.html"],
  description: "А это полный улёт потому что 3d transformations. Мы как-бы внутри цилиндра, надо понаводить на меню. #3dУлёт, #Укачивает",
  devices: "desktop"
}, {
  title: "Tiktok Lunatik",
  path: "2012-xx--sambul--lunatik/www/",
  pages: ["lunatiktok-index.html", "lunatiktok-ipod.html", "lunatiktok-inner-tiktok.html", "lunatiktok-inner-lunatik.html", "lunatiktok-inner-lunatik-not-present.html", "lunatiktok-history.html", "lunatiktok-feedback.html", "lunatiktok-complects.html", "lunatiktok-buy-step-6.html", "lunatiktok-buy-step-5.html", "lunatiktok-buy-step-4.html", "lunatiktok-buy-step-3.html", "lunatiktok-buy-step-2c.html", "lunatiktok-faq.html", "lunatiktok-buy-step-2b.html", "lunatiktok-buy-step-2a.html", "lunatiktok-buy-step-1b.html", "lunatiktok-buy-step-1a.html", "lunatiktok-accessories.html", "lunatiktok-accessories-and-all.html", "lunatiktok-about.html"],
  description: "Интересный был дизайн... #ПриAppleнность",
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
}, {
  title: "Allsweets",
  path: "2014-08--seanat--allsweets/www/",
  pages: ["allsweets-index.html", "allsweets-404.html", "allsweets-cabinet.html", "allsweets-cart.html", "allsweets-cart-checkout.html", "allsweets-category.html", "allsweets-contacts.html", "allsweets-css.html", "allsweets-gallery.html", "allsweets-item.html", "allsweets-manufacturers.html", "allsweets-news.html", "allsweets-news-post.html", "allsweets-portfolio.html"],
  description: "Конфетоиды",
  devices: "desktop",
  alive: "http://allsweets.ru/"
}, {
  title: "Клуб Ахмад",
  path: "2014-12--masha-niggol--club-ahmad/www/",
  pages: ["index.html#/contest/works"],
  description: "Клуб окончательных фанатов чая Ахмад. Angularjs для удобства нарезания на запчасти для программиста",
  devices: "desktop",
  alive: "http://club.ahmadtea.ru"
}, {
  title: "Федерация пожарных",
  path: "2014-04--aries--firefighters/www/",
  pages: ["activity.html", "documents.html", "leaders.html", "main.html", "map.html", "nagrady.html", "news.html", "news-post.html", "smi.html", "styles.html", "temp.html", "ustav.html"],
  description: "Простой сайт",
  devices: "desktop",
  alive: "http://interfiresport.com"
}, {
  title: "Русский Ипотечный Банк",
  path: "2014-01--apollo--rib/www/",
  pages: ["index1-application.html", "index2-prichini.html", "index3-stavka.html", "index4-ipoteka.html", "index6-terms.html"],
  description: "Симпатичные страницы, чёткие запчасти. #Всегда-бы-так",
  devices: "desktop",
  alive: "https://www.russipoteka.ru"
}, {
  title: "Inteduca",
  path: "2014-04--ksan--inteduca/www/",
  pages: ["index.html", "blog.html", "contacts.html"],
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
  pages: ["ahmad-index.html", "ahmad-404.html", "ahmad-chajnaja-karta.html", "ahmad-chajnyj-slovar.html", "ahmad-contemporary.html", "ahmad-faq.html", "ahmad-filtr-po-tegu.html", "ahmad-kontakty.html", "ahmad-novejshaja-istorija.html", "ahmad-rezultaty-poiska-po-articulu.html", "ahmad-rezultaty-poiska-po-materialam.html", "ahmad-tea.html", "ahmad-tea-times.html", "ahmad-tea-times-afisha.html", "ahmad-tea-times-article.html", "ahmad-tea-times-article-afisha.html", "ahmad-tea-times-article-gallery.html", "ahmad-tea-times-article-photos.html", "ahmad-tea-times-events.html", "ahmad-tea-times-gallery.html", "ahmad-tea-times-moscow-map.html", "ahmad-tea-times-polls.html", "ahmad-tea-times-recommends.html"],
  description: "Куча чаезапчастей, отдельный микросайт в виде газеты",
  devices: "desktop",
  alive: "http://ahmadtea.ru"
}, {
  title: "Територрия удовольствия",
  path: "2012-xx--dima-komissarov--terra-pleasure/www/",
  pages: ["tu-index.html", "tu-wine.html", "tu-gift.html", "tu-wines.html", "tu-review.html", "tu-recommend-articles.html", "tu-recommend-article.html", "tu-index.html", "tu-gifts.html", "tu-contacts.html", "tu-about.html"],
  description: "Про бухло. Красиво, с бутылками.",
  devices: "desktop"
}, {
  title: "Национальный сквош-центр",
  path: "2012-xx--dima-komissarov--squash/www/",
  pages: ["index.html", "reserve.html", "profile.html", "player.html", "knowledge.html", "ratings.html", "players.html", "tournament.html", "tournaments.html", "club.html", "news.html", "rules.html", "clubs.html"],
  description: "Помороченный информационный сайт по турнирам",
  devices: "desktop"
}, {
  title: "Ферма Mortenstuen",
  path: "2015-03--shashnia--mortenstuen/www/",
  pages: ["mortenstuen-index.html", "mortenstuen-blog.html", "mortenstuen-contact.html", "mortenstuen-gallery.html", "mortenstuen-health.html", "mortenstuen-history.html", "mortenstuen-post.html"],
  description: "Эпичность норвежского сельского хозяйства.",
  devices: "desktop tablet"
}, {
  title: "Волоколамское фермерское хозяйство",
  path: "2014-12--masha-niggol--volokolamskoe-moloko/www/",
  pages: ["index.html"],
  description: "Мета-модное молоко и козы, лендинг.",
  devices: "desktop tablet mobile"
}, {
  title: "СДС-ФУДС",
  path: "2015-11--masha-niggol--sds-foods/www/",
  pages: ["index.html"],
  description: "Дистрибьютор чая Ahmad",
  devices: "desktop tablet mobile"
}, {
  title: "Easylife Menu",
  path: "2015-09--masha-niggol--easylifemenu/www/",
  pages: ["markup-index.html"],
  description: "Coffeemania за здоровый образ жизни.",
  devices: "desktop tablet mobile"
}, {
  title: "Sofits Me",
  path: "2014-04--natasha-kotlyarevskaya-sofitsme-lookbook/www/",
  pages: ["sfm-style.html", "sfm-lookbook.html"],
  description: "Онлайн-гардероб, лендинг.",
  devices: "desktop"
}, {
  title: "Комфортная стоматология",
  path: "2014-02--slava-komarov--stomatology/www/",
  pages: ["index.html"],
  description: "Красивый лэндинг с простым параллаксом",
  devices: "desktop"
}, {
  title: "Bars",
  path: "2011-08--dima-komissarov--bars/www/",
  pages: ["bars-index.html", "bars-advantages.html", "bars-all-over-russia.html", "bars-configurator.html", "bars-contacts.html", "bars-dealer.html", "bars-dealers.html", "bars-door-cover-ebony.html", "bars-door-covers.html", "bars-door-cover-venge.html", "bars-door-design-classica.html", "bars-door-designs.html", "bars-information.html", "bars-photogallery.html"],
  description: "Навороченная вёрстка про двери. #КрутаяРезина, #МильярдШаблонов",
  devices: "desktop"
}, {
  title: "Oh My Mentor",
  path: "2014-03--ilya-nikolaev--ohmymentor/www/",
  pages: ["mentors.html", "startups.html", "landing.html"],
  description: "Суровый параллакс + адаптивность. #Поморочка, #Skrollr",
  devices: "desktop tablet mobile"
}, {
  title: "ТАО Медиа",
  path: "2013-09--seanat--tao-media/www/",
  pages: ["index.html"],
  description: "Лендинг интернет-студии. #Приадаптивленный",
  devices: "desktop tablet mobile",
  alive: "http://tao-media.ru"
}, {
  title: "Ресторан «Узбечка» в аэропортах Москвы",
  path: "2015-12--masha-niggol--uzbechka/www/",
  pages: ["markup/index.html"],
  description: "Порция успокаивающего Узбекистана перед отлётом.",
  devices: "desktop tablet mobile"
}, {
  title: "Конкурс на название бургерной Кофемании",
  path: "2016-04--masha-niggol--burger-name/www/",
  pages: ["pages/burger-name-landing.html", "pages/burger-name-components.html",, "pages/burger-name-names.html", "pages/burger-name-text.html", "pages/burger-share.html"],
  description: "",
  devices: "desktop tablet mobile"
}, {
  title: "Броско Home Couture",
  path: "2012-xx--dima-komissarov--brosko/www/",
  pages: ["brosko-index.html", "brosko-catalog.html", "brosko-category.html", "brosko-product.html", "brosko-text.html"],
  description: "Понтовым штукам — понтовый дизайн. #КрутаяРезина",
  devices: "desktop",
  alive: "http://brosko-home.ru"
}, {
  title: "Кофемания",
  path: "2014-05--masha-niggol--coffeemania/www/",
  pages: ["coffemania-index.html", "coffeemania-email-1.html", "coffemania-404.html", "coffemania-about.html", "coffemania-address.html", "coffemania-app.html", "coffemania-barista.html", "coffemania-cooperation.html", "coffemania-delivery.html", "coffemania-feedback.html", "coffemania-index-notification.html", "coffemania-index-with-panorama.html", "coffemania-job.html", "coffemania-job-apply.html", "coffemania-kids.html", "coffemania-menu.html", "coffemania-menu2.html", "coffemania-menu3.html", "coffemania-news.html", "coffemania-news-post.html", "coffemania-press.html", "coffemania-team.html", "coffemania-zavsegdatai.html"],
  description: "Типа простой, но сложный. #Адаптивность, #Тутулечность",
  devices: "desktop tablet mobile",
  alive: "http://coffeemania.ru"
}, {
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
  description: "Векторная, интерактивная, анимационная схема отделений Disney в России. #Поморочка, #SVG, #D3js",
  devices: "desktop"
}, {
  title: {
    en: "Scoblimora (Skyrim Alchemy)",
    ru: "Scoblimora"
  },
  path: "2017-12--vitaly-kuleshin--titamota/www/",
  pages: ["http://mr-woodman.ru/scoblimora"],
  description: {
    ru: "Алхимический помощник для Skyrim. И тебе fus-ro-dah, Довакин. #Vuejs",
    en: "Meet Skyrim Alchemy Helper. Something very complicated, even I did not fully understand it. #Vuejs"
  },
  devices: "desktop tablet mobile",
  alive: "http://mr-woodman.ru/scoblimora"
}, {
  title: "Сеть магазинов Дикси",
  path: "2016-03--chuprik--diksi/www/",
  pages: ["pages/dixy-main.html", "pages/dixy-list.html", "pages/dixy-recipe.html"],
  description: "Модно но не взяли",
  devices: "desktop"
}, {
  title: "Love Eat",
  path: "2016-04--chuprik--loveeat/www/",
  pages: ["pages/loveeat-main.html", "pages/loveeat-blog.html", "pages/loveeat-collection.html", "pages/loveeat-collections.html", "pages/loveeat-components.html", "pages/loveeat-edit-profile.html", "pages/loveeat-followers-following-modal.html", "pages/loveeat-my-profile-collection.html", "pages/loveeat-my-profile-collections.html", "pages/loveeat-my-profile-posts.html", "pages/loveeat-my-recipe.html", "pages/loveeat-notifications-messages-modal.html", "pages/loveeat-other-profile-posts.html", "pages/loveeat-people.html", "pages/loveeat-post.html", "pages/loveeat-recipe.html", "pages/loveeat-recipes-with-filter-another-layout.html", "pages/loveeat-recipes-with-filter.html", "pages/loveeat-search.html", "pages/loveeat-tabs-modal.html"],
  description: "Ещё что-то модное про еду. Дофигища шаблонов. Моя утилита <a href=\"https://github.com/antivitla/mr-testwood\">вёрстки-через-тестирование</a> просто спасение",
  devices: "desktop mobile"
}, {
  title: "Neq4",
  path: "2014-09--masha-niggol--neq4/www/",
  pages: ["panorama-neq4-index.html", "panorama-neq4-about.html", "panorama-neq4-contact.html", "panorama-neq4-job.html", "panorama-neq4-pak.html", "panorama-neq4-panorama.html", "panorama-neq4-press.html", "panorama-neq4-projects.html", "panorama-neq4-yandex-panoramas.html", "digital-neq4-index.html"],
  description: "Любимый клиент, корпорация и просто красавица. Классика HTML/CSS/JavaScript",
  devices: "desktop tablet mobile",
  alive: "http://neq4.ru"
}, {
  title: "Sound Bureau",
  path: "2014-08--masha-niggol--soundbureau/www/",
  pages: ["soundbureau-index.html", "soundbureau-about.html", "soundbureau-business.html", "soundbureau-home.html"],
  description: "Что-то про звук. Крутая продуманность дизайна. #Аж-блестит",
  devices: "desktop tablet",
  alive: "http://soundbureau.ru"
}, {
  title: "Mr. Woodman v4.1",
  path: "2018-02--vitaly-kuleshin--mr-woodman/www/",
  pages: ["http://mr-woodman.ru"],
  description: {
    ru: "Очередной апдейт. Добавлены работы за последние пару лет, вписаны новые тексты. #iframe-рекурсия. #Vuejs, #Webpack, #frontend-porn",
    en: "Another minor update. Added some works for last few years, text changes. Keeping cool recursion. #Vuejs, #Webpack, #Babel-porn"
  },
  devices: "desktop tablet mobile",
  alive: "http://mr-woodman.ru"
}, {
  title: "Кофемания FM",
  path: "2014-07--masha-niggol--coffeemania-fm/www/",
  pages: ["coffemania-fm-index.html"],
  description: "Радио! Хоть раз со звуком поработал. #Aдаптивноcть, #Angularjs",
  devices: "desktop tablet mobile",
  alive: "http://coffeemania.fm"
}, {
  title: "Виртуальная Арктика",
  path: "2015-08--masha-niggol--arctic/www/",
  pages: ["index.html"],
  description: "Проект <a href=\"http://neq4.ru\">Neq4</a>. На краю земли ожидаемо безлюдно, забыто и заброшено.  #Angularjs",
  devices: "desktop tablet mobile"
}, {
  title: "Titamota",
  path: "2017-12--vitaly-kuleshin--titamota/www/",
  pages: ["http://titamota.ru", "http://mr-woodman.ru/titamota"],
  description: {
    ru: "Таймтрекер. Кто знает, тот фанат. Выступил фулстек-программистом (заодно и база/бэкенд/авторизация). #Vuejs, #Django/Python/DRF/PostgreSQL, #Docker",
    en: "Freelance time-tracker. Proud UX and inner algrorythms. Being fullstack coder. #Vuejs, #Django/Python/DRF, #PostgreSQL, #Docker, #it-even-has-landing-page"
  },
  devices: "desktop tablet mobile",
  alive: "http://titamota.ru"
}];

exports.default = data;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#navbar .toggle').addEventListener('click', function (event) {
    document.body.classList.toggle('navbar-active');
  });

  document.querySelector('#navbar .menu').addEventListener('click', function (event) {
    document.body.classList.remove('navbar-active');
  });

  var spyOn = [];
  document.getElementById('navbar').querySelectorAll('ul a[href]').forEach(function (element) {
    var href = element.getAttribute('href');
    if (href.match(/^#\w/)) {
      spyOn.push(element.getAttribute('href'));
    }
  });

  window.addEventListener('scroll', function (event) {
    whoIsInView(spyOn);
    trackWelcomeScreen();
  });

  trackWelcomeScreen();
});

function whoIsInView(spies) {
  spies.forEach(function (spy) {
    var items = document.querySelectorAll('a[href="' + spy + '"]');
    var name = spy.split('#')[1];
    if (isInView(document.getElementById(name))) {
      document.body.classList.add(name + '-section-visible');
    } else {
      document.body.classList.remove(name + '-section-visible');
    }

    if (isInView(document.getElementById(name), 150)) {
      items.forEach(function (a) {
        return a.classList.add('active');
      });
    } else {
      items.forEach(function (a) {
        return a.classList.remove('active');
      });
    }
  });
}

function isInView(element) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var box = element.getBoundingClientRect();
  return box.top - offset < 0 && box.top + box.height - offset > 0;
}

function trackWelcomeScreen() {
  if (document.body.getBoundingClientRect().top + window.innerHeight < 0) {
    document.body.classList.add('not-first-screen');
  } else {
    document.body.classList.remove('not-first-screen');
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNThjYTkxMWViODBiMDM0MTFjOTMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL2Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC1ncmlkLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvaW5kZXguY3NzIiwid2VicGFjazovLy8uL2Fib3V0L25hdmJhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvc2VjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvd2VsY29tZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvcHJvZmlsZS1wYXJ0LmNzcyIsIndlYnBhY2s6Ly8vLi9hYm91dC9wcm9kdWN0cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvcHJvamVjdHMuY3NzIiwid2VicGFjazovLy8uL2Fib3V0L2RpYWdvbmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9hYm91dC93b3Jrcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21yLWZvbnRmaXQvbXItZm9udGZpdC5qcyIsIndlYnBhY2s6Ly8vLi9hYm91dC93b3Jrcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9hYm91dC93b3Jrcy1kYXRhLmpzIiwid2VicGFjazovLy8uL2Fib3V0L25hdmJhci5qcyJdLCJuYW1lcyI6WyJnIiwiRnVuY3Rpb24iLCJldmFsIiwiZSIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb250Zml0IiwiY29sbGVjdGlvbiIsIml0ZW0iLCJ0ZXh0V2lkdGgiLCJ3aWR0aCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsInNhdmVOYXRpdmVTdHlsZSIsInJ1bGVzIiwic3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udGZpdHNhdmUiLCJpIiwibGVuZ3RoIiwicmVzdG9yZU5hdGl2ZVN0eWxlIiwid2hpdGVTcGFjZSIsImRpc3BsYXkiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJmbG9vciIsInBhcnNlSW50IiwiZG9jdW1lbnQiLCJib2R5Iiwicm91bmQiLCJ0cmFuc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwid29ya3MiLCJkYXRhIiwiYXBwIiwiZWwiLCJ3b3JrSWQiLCJwYWdlSWQiLCJkb21haW4iLCJkZXZpY2VzIiwibGFuZyIsImNyZWF0ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiY29tcHV0ZWQiLCJ3b3JrIiwid29ya1RpdGxlIiwidGl0bGUiLCJ3b3JrRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInBhZ2UiLCJwYWdlcyIsImhhc05leHQiLCJoYXNQcmV2IiwibWV0aG9kcyIsIm5leHRXb3JrIiwic2V0SXRlbSIsInByZXZXb3JrIiwiaGFzRGV2aWNlIiwiZGV2aWNlIiwic2VhcmNoIiwiZ2V0UGF0aCIsInBhdGgiLCJnZXRBbGl2ZSIsImFsaXZlIiwic3BsaXQiLCJpc0FjdGl2ZVBhZ2UiLCJpbmRleE9mIiwic2V0UGFnZSIsInQiLCJWdWUiLCJuIiwiciIsIm8iLCJObiIsImNhbGwiLCJhIiwicGFyc2VGbG9hdCIsIlN0cmluZyIsImlzRmluaXRlIiwicyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjIiwiaXNOYU4iLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwidG9Mb3dlckNhc2UiLCJsIiwic3BsaWNlIiwiZiIsIk1uIiwicCIsImQiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9sZW5ndGgiLCJ2IiwiQXJyYXkiLCJoIiwibSIsInkiLCJpc0FycmF5IiwiZXZlcnkiLCJrZXlzIiwiXyIsImIiLCIkIiwiY2hhckNvZGVBdCIsIkMiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwidyIsInRlc3QiLCJ0b1N0cmluZyIsIngiLCJtciIsImsiLCJjb21wb25lbnRPcHRpb25zIiwidGFnIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiZWxtIiwiY29udGV4dCIsImFzeW5jRmFjdG9yeSIsIm5zIiwiaXNTdGF0aWMiLCJrZXkiLCJpc0NvbW1lbnQiLCJmbkNvbnRleHQiLCJmbk9wdGlvbnMiLCJmblNjb3BlSWQiLCJpc0Nsb25lZCIsIkEiLCJPIiwiX19wcm90b19fIiwiUyIsIlQiLCJfX29iX18iLCJ3ciIsIkNyIiwic2hvdWxkQ29udmVydCIsInVyIiwiaXNFeHRlbnNpYmxlIiwiX2lzVnVlIiwidm1Db3VudCIsIkUiLCJ2ciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsInNldCIsInRhcmdldCIsImRlcGVuZCIsImRlcCIsIkkiLCJub3RpZnkiLCJqIiwibWF4IiwicHJvdG90eXBlIiwiTiIsIkwiLCJNIiwiRCIsImNvbmNhdCIsIlAiLCJGIiwieHIiLCJPciIsIm9wdGlvbnMiLCJwcm9wcyIsIlBuIiwidHlwZSIsImluamVjdCIsImZyb20iLCJkaXJlY3RpdmVzIiwiYmluZCIsInVwZGF0ZSIsImV4dGVuZHMiLCJtaXhpbnMiLCJSIiwiRm4iLCJIIiwiVSIsIkJvb2xlYW4iLCJIbiIsImRlZmF1bHQiLCIkb3B0aW9ucyIsInByb3BzRGF0YSIsIl9wcm9wcyIsIkIiLCJtYXRjaCIsIlYiLCIkcGFyZW50IiwiZXJyb3JDYXB0dXJlZCIsInoiLCJKbiIsImVycm9ySGFuZGxlciIsIksiLCJHbiIsIlpuIiwiY29uc29sZSIsImVycm9yIiwiSiIsIlRyIiwiU3IiLCJzbGljZSIsInEiLCJwdXNoIiwiRXIiLCJBciIsImtyIiwiUHJvbWlzZSIsIlciLCJHIiwiTXIiLCJjbGVhciIsImlzRnJvemVuIiwiaWQiLCJoYXMiLCJhZGQiLCJaIiwiZm5zIiwiWCIsIkRyIiwibmFtZSIsIm9uY2UiLCJjYXB0dXJlIiwicGFzc2l2ZSIsInBhcmFtcyIsIlkiLCJob29rIiwibWVyZ2VkIiwiUSIsInR0IiwiZXQiLCJzaGlmdCIsIl9pc1ZMaXN0IiwibnQiLCJfX2VzTW9kdWxlIiwiZnIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImV4dGVuZCIsInJ0IiwiaXQiLCJvdCIsIkxyIiwiJG9uY2UiLCIkb24iLCJhdCIsIiRvZmYiLCJzdCIsImN0IiwiYXR0cnMiLCJzbG90IiwidXQiLCJsdCIsImZuIiwiZnQiLCJfaW5hY3RpdmUiLCJwdCIsIl9kaXJlY3RJbmFjdGl2ZSIsIiRjaGlsZHJlbiIsInZ0IiwiZHQiLCJfaGFzSG9va0V2ZW50IiwiJGVtaXQiLCJodCIsIlVyIiwiRnIiLCJzb3J0IiwiVnIiLCJIciIsInJ1biIsIlJyIiwiQnIiLCJ2bSIsIl93YXRjaGVyIiwiX2lzTW91bnRlZCIsImxyIiwiZGV2dG9vbHMiLCJlbWl0IiwibXQiLCJKciIsInl0IiwiX3dhdGNoZXJzIiwiX3Byb3BLZXlzIiwiX2RhdGEiLCJfY29tcHV0ZWRXYXRjaGVycyIsIktyIiwicXIiLCJndCIsIndhdGNoIiwiaXIiLCJidCIsIl90IiwiY2FjaGUiLCJkaXJ0eSIsImV2YWx1YXRlIiwiaGFuZGxlciIsIiR3YXRjaCIsIiR0IiwiUmVmbGVjdCIsIm93bktleXMiLCJmaWx0ZXIiLCJfcHJvdmlkZWQiLCJDdCIsInd0IiwiJHNjb3BlZFNsb3RzIiwiJHNsb3RzIiwiX3JlbmRlcmVkIiwiJGNyZWF0ZUVsZW1lbnQiLCJ4dCIsIlVuIiwia3QiLCJrZXlDb2RlcyIsIkF0IiwiTG4iLCJtdXN0VXNlUHJvcCIsImRvbVByb3BzIiwib24iLCJPdCIsIl9zdGF0aWNUcmVlcyIsInN0YXRpY1JlbmRlckZucyIsIl9yZW5kZXJQcm94eSIsIlR0IiwiU3QiLCJFdCIsImlzT25jZSIsImp0IiwiTnQiLCJfbyIsIl9uIiwiX3MiLCJfbCIsIl9xIiwiX2kiLCJfbSIsIl9mIiwiX2siLCJfYiIsIl92IiwiX2UiLCJnciIsIl91IiwiX2ciLCJJdCIsInBhcmVudCIsImxpc3RlbmVycyIsImpuIiwiaW5qZWN0aW9ucyIsInNsb3RzIiwiX2NvbXBpbGVkIiwic2NvcGVkU2xvdHMiLCJfc2NvcGVJZCIsIl9jIiwiRHQiLCJMdCIsIk10IiwiX2Jhc2UiLCJjaWQiLCJlcnJvckNvbXAiLCJyZXNvbHZlZCIsImxvYWRpbmciLCJsb2FkaW5nQ29tcCIsImNvbnRleHRzIiwiJGZvcmNlVXBkYXRlIiwidGhlbiIsImNvbXBvbmVudCIsImRlbGF5IiwidGltZW91dCIsImFzeW5jTWV0YSIsIkZ0IiwibW9kZWwiLCJwcm9wIiwiZXZlbnQiLCJjYWxsYmFjayIsImZ1bmN0aW9uYWwiLCJyZW5kZXIiLCJuYXRpdmVPbiIsImFic3RyYWN0IiwiR3IiLCJXciIsIkN0b3IiLCJYciIsImlzIiwiWnIiLCIkdm5vZGUiLCJnZXRUYWdOYW1lc3BhY2UiLCJpc1Jlc2VydmVkVGFnIiwicGFyc2VQbGF0Zm9ybVRhZ05hbWUiLCJQdCIsInN1cGVyIiwic3VwZXJPcHRpb25zIiwiZXh0ZW5kT3B0aW9ucyIsInNlYWxlZE9wdGlvbnMiLCJjb21wb25lbnRzIiwiUnQiLCJfaW5pdCIsIkh0IiwiX0N0b3IiLCJjb25zdHJ1Y3RvciIsIm1peGluIiwidXNlIiwiem4iLCJmb3JFYWNoIiwiQnQiLCJVdCIsIlZ0IiwiX3Zub2RlIiwienQiLCJjb21wb25lbnRJbnN0YW5jZSIsIiRkZXN0cm95IiwiS3QiLCJKdCIsInF0IiwiV3QiLCJzdGF0aWNDbGFzcyIsImNsYXNzIiwiR3QiLCJiaSIsIlp0IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJYdCIsInJlZiIsIiRyZWZzIiwicmVmSW5Gb3IiLCJZdCIsIndpIiwiaXNBc3luY1BsYWNlaG9sZGVyIiwiUXQiLCJ0ZSIsIkFpIiwiZWUiLCJvbGRWYWx1ZSIsIm5lIiwiZGVmIiwiY29tcG9uZW50VXBkYXRlZCIsImluc2VydGVkIiwibW9kaWZpZXJzIiwiVGkiLCJyYXdOYW1lIiwiam9pbiIsInJlIiwiaW5oZXJpdEF0dHJzIiwiaWUiLCJRbiIsImVyIiwiaGkiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInZpIiwibWkiLCJwaSIsInJlbW92ZUF0dHJpYnV0ZSIsImRpIiwieWkiLCJ0YWdOYW1lIiwic2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlTlMiLCJ0ciIsIl9faWVwaCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvZSIsIl90cmFuc2l0aW9uQ2xhc3NlcyIsIl9wcmV2Q2xhc3MiLCJhZSIsInRyaW0iLCJjaGFyQXQiLCJJaSIsInNlIiwiY2UiLCJtYXAiLCJ1ZSIsInBsYWluIiwibGUiLCJmZSIsImF0dHJzTWFwIiwiYXR0cnNMaXN0IiwicGUiLCJhcmciLCJkZSIsInJpZ2h0IiwibWlkZGxlIiwibmF0aXZlIiwibmF0aXZlRXZlbnRzIiwiZXZlbnRzIiwidW5zaGlmdCIsInZlIiwiaGUiLCJtZSIsIm51bWJlciIsInllIiwiZXhwcmVzc2lvbiIsImVpIiwibGFzdEluZGV4T2YiLCJpaSIsImV4cCIsIm5pIiwib2kiLCJhaSIsImJlIiwicmkiLCJnZSIsIiRlIiwiQ2UiLCJfd2l0aFRhc2siLCJzaSIsIndlIiwib3IiLCJ4ZSIsIkxpIiwiTWkiLCJjaGFuZ2UiLCJrZSIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsIl92YWx1ZSIsImNvbXBvc2luZyIsImFjdGl2ZUVsZW1lbnQiLCJfdk1vZGlmaWVycyIsImxhenkiLCJBZSIsIk9lIiwic3RhdGljU3R5bGUiLCJGaSIsIlNlIiwibm9ybWFsaXplZFN0eWxlIiwiQmkiLCJUZSIsImNsYXNzTGlzdCIsIkVlIiwicmVtb3ZlIiwicmVwbGFjZSIsImplIiwiY3NzIiwiS2kiLCJOZSIsIlFpIiwiSWUiLCJMZSIsIk1lIiwiRGUiLCJwcm9wQ291bnQiLCJxaSIsIlppIiwiWWkiLCJHaSIsIlBlIiwiWGkiLCJXaSIsImhhc1RyYW5zZm9ybSIsInRvIiwiRmUiLCJOdW1iZXIiLCJSZSIsIl9sZWF2ZUNiIiwiY2FuY2VsbGVkIiwiX2VudGVyQ2IiLCJub2RlVHlwZSIsImVudGVyQ2xhc3MiLCJlbnRlclRvQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwiYXBwZWFyQ2xhc3MiLCJhcHBlYXJUb0NsYXNzIiwiYXBwZWFyQWN0aXZlQ2xhc3MiLCJiZWZvcmVFbnRlciIsImVudGVyIiwiYWZ0ZXJFbnRlciIsImVudGVyQ2FuY2VsbGVkIiwiYmVmb3JlQXBwZWFyIiwiYXBwZWFyIiwiYWZ0ZXJBcHBlYXIiLCJhcHBlYXJDYW5jZWxsZWQiLCJkdXJhdGlvbiIsIlByIiwiaXNSb290SW5zZXJ0IiwiVWUiLCJzaG93IiwicGFyZW50Tm9kZSIsIl9wZW5kaW5nIiwiQmUiLCJIZSIsImxlYXZlQ2xhc3MiLCJsZWF2ZVRvQ2xhc3MiLCJsZWF2ZUFjdGl2ZUNsYXNzIiwiYmVmb3JlTGVhdmUiLCJsZWF2ZSIsImFmdGVyTGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImRlbGF5TGVhdmUiLCJWZSIsInplIiwiS2UiLCJtdWx0aXBsZSIsInFlIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwiSmUiLCJXZSIsIkdlIiwiWmUiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJYZSIsIlllIiwiUWUiLCJfcGFyZW50TGlzdGVuZXJzIiwidG4iLCJlbiIsIl9tb3ZlQ2IiLCJubiIsIm5ld1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJuIiwicG9zIiwibGVmdCIsInRvcCIsIm1vdmVkIiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiem8iLCJWbyIsIlVvIiwiYW4iLCJzbiIsInByZSIsIkxvIiwiSW8iLCJ3YXJuIiwiaXNQcmVUYWciLCJCbiIsIk1vIiwiRG8iLCJqbyIsIm1vZHVsZXMiLCJObyIsIkVvIiwiZGVsaW1pdGVycyIsInByZXNlcnZlV2hpdGVzcGFjZSIsInN1YnN0cmluZyIsImxvd2VyQ2FzZWRUYWciLCJlbmQiLCJzdGFydCIsImV4cGVjdEhUTUwiLCJpc1VuYXJ5VGFnIiwiY2FuQmVMZWZ0T3BlblRhZyIsIkhvIiwiQm8iLCJSZWdFeHAiLCJKbyIsImNoYXJzIiwiQW8iLCJzaG91bGRLZWVwQ29tbWVudCIsImNvbW1lbnQiLCJPbyIsImtvIiwieG8iLCJDbyIsIndvIiwidW5hcnlTbGFzaCIsImdvIiwiU28iLCJzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWYiLCJzaG91bGREZWNvZGVOZXdsaW5lcyIsIlRvIiwiY29tbWVudHMiLCJuYSIsInJhIiwiZm9yYmlkZGVuIiwicHJvY2Vzc2VkIiwidW4iLCJpZiIsImxuIiwiYmxvY2siLCJlbHNlIiwiZWxzZWlmIiwiY24iLCJwb3AiLCJzbG90U2NvcGUiLCJzbG90VGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJlYSIsImZvIiwidW8iLCJsYXN0SW5kZXgiLCJleGVjIiwiaW5kZXgiLCJ0b2tlbnMiLCJmb3IiLCJzbG90TmFtZSIsImlubGluZVRlbXBsYXRlIiwiV28iLCJoYXNCaW5kaW5ncyIsInRhIiwiUW8iLCJjYW1lbCIsInN5bmMiLCJxbyIsIllvIiwiR28iLCJYbyIsIlpvIiwiYWxpYXMiLCJpdGVyYXRvcjEiLCJpdGVyYXRvcjIiLCJpZkNvbmRpdGlvbnMiLCJwbiIsInN0YXRpYyIsIkluIiwiRm8iLCJQbyIsImRuIiwic3RhdGljSW5Gb3IiLCJzdGF0aWNSb290Iiwidm4iLCJobiIsImNhIiwic2EiLCJmYSIsInVhIiwibGEiLCJtbiIsInluIiwiZGEiLCJnbiIsInN0YXRpY1Byb2Nlc3NlZCIsIm9uY2VQcm9jZXNzZWQiLCJibiIsImZvclByb2Nlc3NlZCIsImlmUHJvY2Vzc2VkIiwiJG4iLCJrbiIsInduIiwidHJhbnNmb3JtcyIsIm9uY2VJZCIsIkNuIiwiZGF0YUdlbkZucyIsIk9uIiwieG4iLCJ3cmFwRGF0YSIsIndyYXBMaXN0ZW5lcnMiLCJBbiIsInNvbWUiLCJtYXliZUNvbXBvbmVudCIsIlNuIiwiVG4iLCJlcnIiLCJjb2RlIiwiRW4iLCJSbyIsImlubmVySFRNTCIsImZyZWV6ZSIsImhhc093blByb3BlcnR5IiwiRG4iLCJ0b1VwcGVyQ2FzZSIsIlJuIiwiVm4iLCJLbiIsIm9wdGlvbk1lcmdlU3RyYXRlZ2llcyIsInNpbGVudCIsInByb2R1Y3Rpb25UaXAiLCJwZXJmb3JtYW5jZSIsIndhcm5IYW5kbGVyIiwiaWdub3JlZEVsZW1lbnRzIiwiaXNSZXNlcnZlZEF0dHIiLCJpc1Vua25vd25FbGVtZW50IiwiX2xpZmVjeWNsZUhvb2tzIiwicW4iLCJXbiIsIldYRW52aXJvbm1lbnQiLCJwbGF0Zm9ybSIsIlhuIiwiWW4iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJuciIsInJyIiwiYXIiLCJzciIsImNyIiwiZ2xvYmFsIiwicHJvY2VzcyIsImVudiIsIlZVRV9FTlYiLCJfX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwiU2V0IiwicHIiLCJkciIsInN1YnMiLCJhZGRTdWIiLCJyZW1vdmVTdWIiLCJhZGREZXAiLCJociIsInJhdyIsInlyIiwiY2hpbGQiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3IiLCJiciIsIm9ic2VydmVBcnJheSIsIiRyIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIndhbGsiLCJwcm92aWRlIiwic2V0SW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJqciIsIk5yIiwicG9ydDIiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiSXIiLCJyZXNvbHZlIiwienIiLCJkZWVwIiwidXNlciIsImNiIiwiYWN0aXZlIiwiZGVwcyIsIm5ld0RlcHMiLCJkZXBJZHMiLCJuZXdEZXBJZHMiLCJnZXR0ZXIiLCJjbGVhbnVwRGVwcyIsInRlYXJkb3duIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJpbml0IiwiX2lzRGVzdHJveWVkIiwiX2lzQ29tcG9uZW50IiwiX3BhcmVudFZub2RlIiwiX3BhcmVudEVsbSIsIl9yZWZFbG0iLCIkbW91bnQiLCJrZWVwQWxpdmUiLCJwcmVwYXRjaCIsIl9yZW5kZXJDaGlsZHJlbiIsIiRhdHRycyIsIiRsaXN0ZW5lcnMiLCJpbnNlcnQiLCJkZXN0cm95IiwiWXIiLCJfdWlkIiwiX2NvbXBvbmVudFRhZyIsIl9zZWxmIiwiJHJvb3QiLCJfZXZlbnRzIiwiJHNldCIsIiRkZWxldGUiLCJpbW1lZGlhdGUiLCJfdXBkYXRlIiwiJGVsIiwiX19wYXRjaF9fIiwiX192dWVfXyIsIiRuZXh0VGljayIsIl9yZW5kZXIiLCJRciIsInRpIiwiS2VlcEFsaXZlIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJkZXN0cm95ZWQiLCJ1dGlsIiwibWVyZ2VPcHRpb25zIiwiZGVmaW5lUmVhY3RpdmUiLCJkZWxldGUiLCJuZXh0VGljayIsIl9pbnN0YWxsZWRQbHVnaW5zIiwiaW5zdGFsbCIsInNzckNvbnRleHQiLCJ2ZXJzaW9uIiwiY2kiLCJ1aSIsImxpIiwiZmkiLCJnaSIsInN2ZyIsIm1hdGgiLCIkaSIsIkNpIiwieGkiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVUZXh0Tm9kZSIsImNyZWF0ZUNvbW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsIm5leHRTaWJsaW5nIiwic2V0VGV4dENvbnRlbnQiLCJ0ZXh0Q29udGVudCIsImtpIiwiT2kiLCJTaSIsIkVpIiwiamkiLCJOaSIsIkRpIiwiUGkiLCJSaSIsIkhpIiwic2V0UHJvcGVydHkiLCJWaSIsIlVpIiwiemkiLCJKaSIsIm9udHJhbnNpdGlvbmVuZCIsIm9ud2Via2l0dHJhbnNpdGlvbmVuZCIsIm9uYW5pbWF0aW9uZW5kIiwib253ZWJraXRhbmltYXRpb25lbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlbyIsImFjdGl2YXRlIiwicGVuZGluZ0luc2VydCIsInBvc3RwYXRjaCIsImhhc0NoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwibm9kZU9wcyIsImhhc0F0dHJpYnV0ZSIsInZtb2RlbCIsIm5vIiwiX3ZPcHRpb25zIiwicm8iLCJfX3ZPcmlnaW5hbERpc3BsYXkiLCJ1bmJpbmQiLCJpbyIsIm1vZGUiLCJvbyIsIl9sZWF2aW5nIiwiYW8iLCJtb3ZlQ2xhc3MiLCJzbyIsIlRyYW5zaXRpb24iLCJUcmFuc2l0aW9uR3JvdXAiLCJwcmV2Q2hpbGRyZW4iLCJrZXB0IiwicmVtb3ZlZCIsImJlZm9yZVVwZGF0ZSIsInVwZGF0ZWQiLCJoYXNNb3ZlIiwiX3JlZmxvdyIsIm9mZnNldEhlaWdodCIsInByb3BlcnR5TmFtZSIsIl9oYXNNb3ZlIiwiY2xvbmVOb2RlIiwiY29uZmlnIiwiSFRNTFVua25vd25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJjbyIsImxvIiwicG8iLCJzdGF0aWNLZXlzIiwidHJhbnNmb3JtTm9kZSIsImNsYXNzQmluZGluZyIsImdlbkRhdGEiLCJ2byIsInN0eWxlQmluZGluZyIsImhvIiwibW8iLCJ5byIsImJvIiwiJG8iLCJLbyIsImlhIiwicHJlVHJhbnNmb3JtTm9kZSIsIm9hIiwiaHRtbCIsInJlZHVjZSIsImFhIiwiZXNjIiwidGFiIiwic3BhY2UiLCJ1cCIsImRvd24iLCJzdG9wIiwicHJldmVudCIsInNlbGYiLCJjdHJsIiwiYWx0IiwibWV0YSIsInBhIiwiY2xvYWsiLCJ2YSIsImVycm9ycyIsInRpcHMiLCJjb21waWxlIiwiY29tcGlsZVRvRnVuY3Rpb25zIiwib3B0aW1pemUiLCJhc3QiLCJoYSIsIm1hIiwieWEiLCJnYSIsInRlbXBsYXRlIiwib3V0ZXJIVE1MIiwiVGltZW91dCIsImNsZWFyVGltZW91dCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsb3NlIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJlbnJvbGwiLCJtc2VjcyIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJvblRpbWVvdXQiLCJfb25UaW1lb3V0IiwicmVxdWlyZSIsImNsZWFySW1tZWRpYXRlIiwidW5kZWZpbmVkIiwibmV4dEhhbmRsZSIsInRhc2tzQnlIYW5kbGUiLCJjdXJyZW50bHlSdW5uaW5nQVRhc2siLCJkb2MiLCJyZWdpc3RlckltbWVkaWF0ZSIsImFyZ3MiLCJ0YXNrIiwiaGFuZGxlIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJjYW5Vc2VQb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzIiwib2xkT25NZXNzYWdlIiwiaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24iLCJtZXNzYWdlUHJlZml4IiwicmFuZG9tIiwib25HbG9iYWxNZXNzYWdlIiwic291cmNlIiwiYXR0YWNoRXZlbnQiLCJpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbiIsImNoYW5uZWwiLCJpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uIiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwiZ2V0UHJvdG90eXBlT2YiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJsZW4iLCJJdGVtIiwiYXJyYXkiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb25zIiwibm9vcCIsImFkZExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJydSIsInRvZ2dsZSIsInNweU9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJocmVmIiwiZWxlbWVudCIsIndob0lzSW5WaWV3IiwidHJhY2tXZWxjb21lU2NyZWVuIiwic3BpZXMiLCJpdGVtcyIsInNweSIsImlzSW5WaWV3Iiwib2Zmc2V0IiwiYm94IiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBLElBQUlBLENBQUo7O0FBRUE7QUFDQUEsSUFBSyxZQUFXO0FBQ2YsUUFBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxLQUFJQSxLQUFLQyxTQUFTLGFBQVQsR0FBTCxJQUFrQyxDQUFDLEdBQUVDLElBQUgsRUFBUyxNQUFULENBQXRDO0FBQ0EsQ0FIRCxDQUdFLE9BQU1DLENBQU4sRUFBUztBQUNWO0FBQ0EsS0FBRyxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXJCLEVBQ0NKLElBQUlJLE1BQUo7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7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QkMsSUFBSXhkLEdBQUosR0FBVXdkLElBQUlDLE1BQWQsR0FBdUJGLE1BQXZCLEdBQWdDLENBQS9EO0FBQ0Q7O0FBRUQsU0FBU0wsa0JBQVQsR0FBOEI7QUFDNUIsTUFBSTFpQyxTQUFTQyxJQUFULENBQWNtbEIscUJBQWQsR0FBc0NJLEdBQXRDLEdBQTRDaG5CLE9BQU8wa0MsV0FBbkQsR0FBaUUsQ0FBckUsRUFBd0U7QUFDdEVsakMsYUFBU0MsSUFBVCxDQUFjK2YsU0FBZCxDQUF3QnhULEdBQXhCLENBQTRCLGtCQUE1QjtBQUNELEdBRkQsTUFFTztBQUNMeE0sYUFBU0MsSUFBVCxDQUFjK2YsU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0Isa0JBQS9CO0FBQ0Q7QUFDRixDIiwiZmlsZSI6ImFib3V0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNThjYTkxMWViODBiMDM0MTFjOTMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCIndXNlIHN0cmljdCc7XG5cbi8vIENTU1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLWdyaWQubWluLmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCAnLi9uYXZiYXIuY3NzJztcbmltcG9ydCAnLi9zZWN0aW9uLmNzcyc7XG5pbXBvcnQgJy4vd2VsY29tZS5jc3MnO1xuaW1wb3J0ICcuL3Byb2ZpbGUtcGFydC5jc3MnO1xuaW1wb3J0ICcuL3Byb2R1Y3RzLmNzcyc7XG5pbXBvcnQgJy4vcHJvamVjdHMuY3NzJztcbmltcG9ydCAnLi9kaWFnb25hbC5jc3MnO1xuaW1wb3J0ICcuL3dvcmtzLmNzcyc7XG5pbXBvcnQgJy4vZm9vdGVyLmNzcyc7XG5cbi8vIEphdmFzY3JpcHRcbmltcG9ydCAnbXItZm9udGZpdCc7XG5pbXBvcnQgJy4vd29ya3MuanMnO1xuaW1wb3J0ICcuL25hdmJhci5qcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hYm91dC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAtZ3JpZC5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hYm91dC9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fib3V0L25hdmJhci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fib3V0L3NlY3Rpb24uY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hYm91dC93ZWxjb21lLmNzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWJvdXQvcHJvZmlsZS1wYXJ0LmNzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWJvdXQvcHJvZHVjdHMuY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hYm91dC9wcm9qZWN0cy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fib3V0L2RpYWdvbmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fib3V0L3dvcmtzLmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fib3V0L2Zvb3Rlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4qICAg0J/QvtC00LPQvtC90Y/QtdC8INGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAg0YfRgtC+0LEg0YLQtdC60YHRgiDQstC80LXRgdGC0LjQu9GB0Y8g0LIg0L7QtNC90YMg0YHRgtGA0L7Rh9C60YNcbiogICDQvdCwINCy0YHRjiDRiNC40YDQuNC90YMg0YDQvtC00LjRgtC10LvRjNGB0LrQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LBcbiogICBtci13b29kbWFuLnJ1L2pzL2ZvbnRmaXRcbipcbiogICDQpNGD0L3QutGG0LjRjiDQvNC+0LbQvdC+INC90LDRgtGA0LDQstC40YLRjCDQvdCwINC90LDQsdC+0YAg0Y3Qu9C10LzQtdC90YLQvtCyIChIVE1MQ29sbGVjdGlvbikg0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3QviAo0L/QvtGB0LvQtSDQsNGP0LrRgdCwL9GA0LXRgdCw0LnQt9CwPylcbiogICDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDQvtC90LAg0YHQsNC80LAg0L3QsNGC0YDQsNCy0LjRgtGB0Y8g0L3QsCDRjdC70LXQvNC10L3RgtGLINGBINCw0YLRgNC40LHRg9GC0LDQvNC4IGRhdGEtZm9udGZpdFxuKiAgINCn0LjRgdGC0YvQuSBKYXZhc2NyaXB0XG4qL1xuXG4vLyDQo9C80LXQtdC8INC10YHRgtGMIEhUTUxDb2xsZWN0aW9uINGN0LvQtdC80LXQvdGC0L7QslxuXG53aW5kb3cuZm9udGZpdCA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcblxuICAgIHZhciBpdGVtLCB0ZXh0V2lkdGgsIHdpZHRoLCBsaW5lSGVpZ2h0LCBmb250U2l6ZSxcbiAgICAgICAgc2F2ZU5hdGl2ZVN0eWxlID0gZnVuY3Rpb24oaXRlbSwgcnVsZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoaXRlbSk7XG4gICAgICAgICAgICBpdGVtLmZvbnRmaXRzYXZlID0gaXRlbS5mb250Zml0c2F2ZSB8fCB7fTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0uZm9udGZpdHNhdmVbcnVsZXNbaV1dID0gc3R5bGVbcnVsZXNbaV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXN0b3JlTmF0aXZlU3R5bGUgPSBmdW5jdGlvbihpdGVtLCBydWxlcykge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZVtydWxlc1tpXV0gPSBpdGVtLmZvbnRmaXRzYXZlW3J1bGVzW2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIC8vINCf0YDQvtGF0L7QtNC40LzRgdGPINC/0L4g0LrQsNC20LTQvtC80YMg0LIg0LrQvtC70LvQtdC60YbQuNC4XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IGNvbGxlY3Rpb25baV07XG5cbiAgICAgICAgLy8g0YHQvtGF0YDQsNC90Y/QtdC8INGC0LXQutGD0YnQuNC1INGB0YLQuNC70Lgg0YfRgtC+0LEg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINC/0L7Qt9C20LVcbiAgICAgICAgc2F2ZU5hdGl2ZVN0eWxlKGl0ZW0sIFtcImRpc3BsYXlcIl0pO1xuXG4gICAgICAgIC8vINC30LDQtNCw0ZHQvCDQuNC90LvQsNC50L3QvtCy0L7QtSDQvtGC0L7QsdGA0LDQttC10L3QuNC1INCyINC+0LTQvdGDINGB0YLRgNC+0YfQutGDINGH0YLQvtCxINGD0LfQvdCw0YLRjCDQtNC70LjQvdGDINGC0LXQutGB0YLQsFxuICAgICAgICBpdGVtLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICB0ZXh0V2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuXG4gICAgICAgIC8vINGC0LXQv9C10YDRjCDQtNC10LvQsNC10LzRgdGPINCx0LvQvtC60L7QstGL0LwsINGH0YLQvtCxINC/0L7QvdGP0YLRjCDQvdCwINC60LDQutGD0Y4g0YjQuNGA0LjQvdGDINC80Ysg0YDQsNGB0YHRh9C40YLRi9Cy0LDQtdC8XG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgd2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuXG4gICAgICAgIC8vINCS0L7RgdGB0YLQsNC90LDQstC70LjQstCw0LXQvCDQuNGB0YXQvtC00L3Ri9C1INGB0YLQuNC70LhcbiAgICAgICAgcmVzdG9yZU5hdGl2ZVN0eWxlKGl0ZW0sIFtcImRpc3BsYXlcIl0pO1xuXG4gICAgICAgIC8vINCy0YvRh9C40YHQu9GP0LXQvCDQuCDRgdGC0LDQstC40Lwg0L3QvtCy0YvQuSBmb250LXNpemVcbiAgICAgICAgZm9udFNpemUgPSBNYXRoLmZsb29yKCh3aWR0aCAvIHRleHRXaWR0aCkgKiBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGl0ZW0pLmZvbnRTaXplKSk7XG4gICAgICAgIGl0ZW0uc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZSArIFwicHhcIjtcblxuXG4gICAgICAgIC8vIC0g0LAg0YLQsNC60LbQtSDQv9C+0LTRhdC+0LTRj9GJ0LjQuSBsaW5lLWhlaWdodCAo0LrRgNCw0YLQvdGL0Lkg0L7RgdC90L7QstC90L7QvNGDINC90LAg0YHQsNC50YLQtSlcbiAgICAgICAgbGluZUhlaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkubGluZUhlaWdodCk7XG4gICAgICAgIGl0ZW0uc3R5bGUubGluZUhlaWdodCA9IE1hdGgucm91bmQoZm9udFNpemUgLyBsaW5lSGVpZ2h0KSAqIGxpbmVIZWlnaHQgKyBcInB4XCI7XG5cbiAgICAgICAgLy8g0J/Qu9GO0YEg0LDQvdC40LzQsNGI0LXRh9C60YNcbiAgICAgICAgaXRlbS5zdHlsZS50cmFuc2l0aW9uID0gXCJmb250LXNpemUgMC4yNXNcIjtcbiAgICB9XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9udGZpdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZm9udGZpdF1cIikpO1xuICAgIH0sIDEwMCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb250Zml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1mb250Zml0XVwiKSk7XG4gICAgfSwgMTAwKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICBmb250Zml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1mb250Zml0XVwiKSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvbXItZm9udGZpdC9tci1mb250Zml0LmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUvZGlzdC92dWUubWluLmpzJztcbmltcG9ydCBkYXRhIGZyb20gJy4vd29ya3MtZGF0YS5qcyc7XG5cbnZhciB3b3JrcyA9IHtcbiAgZGF0YTogZGF0YVxufTtcblxud29ya3MuYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI3dvcmtzJyxcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3b3JrSWQ6IDAsXG4gICAgICBwYWdlSWQ6IDAsXG4gICAgICBkb21haW46ICdodHRwOi8vd29ya3MubXItd29vZG1hbi5ydS8nLFxuICAgICAgZGV2aWNlczogWydkZXNrdG9wJywgJ3RhYmxldCcsICdtb2JpbGUnXSxcbiAgICAgIGxhbmc6ICdydScsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgdmFyIHdvcmtJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtcldvb2RtYW5BYm91dFdvcmtJZCcpO1xuICAgIGlmICh3b3JrSWQpIHtcbiAgICAgIHRoaXMud29ya0lkID0gcGFyc2VJbnQod29ya0lkLCAxMCk7XG4gICAgICBpZiAodGhpcy53b3JrSWQgPCAwKSB7XG4gICAgICAgIHRoaXMud29ya0lkID0gMDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy53b3JrSWQgPiB3b3Jrcy5kYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy53b3JrSWQgPSB3b3Jrcy5kYXRhLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubGFuZyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2xhbmcnKSB8fCAnZW4nO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHdvcms6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB3b3JrID0gd29ya3MuZGF0YVt3b3Jrcy5kYXRhLmxlbmd0aCAtIHRoaXMud29ya0lkIC0gMV07XG4gICAgICByZXR1cm4gd29yayB8fCB3b3Jrcy5kYXRhW3dvcmtzLmRhdGEubGVuZ3RoIC0gMV07XG4gICAgfSxcbiAgICB3b3JrVGl0bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy53b3JrLnRpdGxlID09PSAnc3RyaW5nJyA/IHRoaXMud29yay50aXRsZSA6IHRoaXMud29yay50aXRsZVt0aGlzLmxhbmddO1xuICAgIH0sXG4gICAgd29ya0Rlc2NyaXB0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMud29yay5kZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyB0aGlzLndvcmsuZGVzY3JpcHRpb24gOiB0aGlzLndvcmsuZGVzY3JpcHRpb25bdGhpcy5sYW5nXTtcbiAgICB9LFxuICAgIHBhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLndvcmsucGFnZXNbdGhpcy5wYWdlSWRdO1xuICAgIH0sXG4gICAgaGFzTmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMud29ya0lkID4gMDtcbiAgICB9LFxuICAgIGhhc1ByZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLndvcmtJZCA8IHdvcmtzLmRhdGEubGVuZ3RoIC0gMTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBuZXh0V29yazogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuaGFzTmV4dCkge1xuICAgICAgICB0aGlzLndvcmtJZCA9IHRoaXMud29ya0lkIC0gMTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21yV29vZG1hbkFib3V0V29ya0lkJywgdGhpcy53b3JrSWQpXG4gICAgICAgIHRoaXMucGFnZUlkID0gMDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZXZXb3JrOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5oYXNQcmV2KSB7XG4gICAgICAgIHRoaXMud29ya0lkID0gdGhpcy53b3JrSWQgKyAxO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXJXb29kbWFuQWJvdXRXb3JrSWQnLCB0aGlzLndvcmtJZClcbiAgICAgICAgdGhpcy5wYWdlSWQgPSAwO1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFzRGV2aWNlOiBmdW5jdGlvbiAod29yaywgZGV2aWNlKSB7XG4gICAgICByZXR1cm4gdGhpcy53b3JrLmRldmljZXMuc2VhcmNoKGRldmljZSkgPiAtMTtcbiAgICB9LFxuICAgIGdldFBhdGg6IGZ1bmN0aW9uICh3b3JrKSB7XG4gICAgICBpZih0aGlzLnBhZ2Uuc2VhcmNoKFwiaHR0cDovL1wiKSA+IC0xIHx8IHRoaXMucGFnZS5zZWFyY2goXCJodHRwczovL1wiKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kb21haW4gKyB0aGlzLndvcmsucGF0aCArIHRoaXMucGFnZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEFsaXZlOiBmdW5jdGlvbiAod29yaykge1xuICAgICAgaWYoIXRoaXMud29yay5hbGl2ZSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmsuYWxpdmUuc3BsaXQoXCIjXCIpWzBdLnNwbGl0KFwiP1wiKVswXS5zcGxpdChcIjovL1wiKVsxXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzQWN0aXZlUGFnZTogZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLndvcmsucGFnZXMuaW5kZXhPZihwYWdlKSA9PT0gdGhpcy5wYWdlSWQ7XG4gICAgfSxcbiAgICBzZXRQYWdlOiBmdW5jdGlvbiAocGFnZSkge1xuICAgICAgdGhpcy5wYWdlSWQgPSB0aGlzLndvcmsucGFnZXMuaW5kZXhPZihwYWdlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWJvdXQvd29ya3MuanMiLCIvKiFcbiAqIFZ1ZS5qcyB2Mi41LjEzXG4gKiAoYykgMjAxNC0yMDE3IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOnQuVnVlPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuIHZvaWQgMD09PXR8fG51bGw9PT10fWZ1bmN0aW9uIGUodCl7cmV0dXJuIHZvaWQgMCE9PXQmJm51bGwhPT10fWZ1bmN0aW9uIG4odCl7cmV0dXJuITA9PT10fWZ1bmN0aW9uIHIodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR8fFwibnVtYmVyXCI9PXR5cGVvZiB0fHxcInN5bWJvbFwiPT10eXBlb2YgdHx8XCJib29sZWFuXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGkodCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdH1mdW5jdGlvbiBvKHQpe3JldHVyblwiW29iamVjdCBPYmplY3RdXCI9PT1Obi5jYWxsKHQpfWZ1bmN0aW9uIGEodCl7dmFyIGU9cGFyc2VGbG9hdChTdHJpbmcodCkpO3JldHVybiBlPj0wJiZNYXRoLmZsb29yKGUpPT09ZSYmaXNGaW5pdGUodCl9ZnVuY3Rpb24gcyh0KXtyZXR1cm4gbnVsbD09dD9cIlwiOlwib2JqZWN0XCI9PXR5cGVvZiB0P0pTT04uc3RyaW5naWZ5KHQsbnVsbCwyKTpTdHJpbmcodCl9ZnVuY3Rpb24gYyh0KXt2YXIgZT1wYXJzZUZsb2F0KHQpO3JldHVybiBpc05hTihlKT90OmV9ZnVuY3Rpb24gdSh0LGUpe2Zvcih2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9dC5zcGxpdChcIixcIiksaT0wO2k8ci5sZW5ndGg7aSsrKW5bcltpXV09ITA7cmV0dXJuIGU/ZnVuY3Rpb24odCl7cmV0dXJuIG5bdC50b0xvd2VyQ2FzZSgpXX06ZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19fWZ1bmN0aW9uIGwodCxlKXtpZih0Lmxlbmd0aCl7dmFyIG49dC5pbmRleE9mKGUpO2lmKG4+LTEpcmV0dXJuIHQuc3BsaWNlKG4sMSl9fWZ1bmN0aW9uIGYodCxlKXtyZXR1cm4gTW4uY2FsbCh0LGUpfWZ1bmN0aW9uIHAodCl7dmFyIGU9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIGVbbl18fChlW25dPXQobikpfX1mdW5jdGlvbiBkKHQsZSl7ZnVuY3Rpb24gbihuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoO3JldHVybiByP3I+MT90LmFwcGx5KGUsYXJndW1lbnRzKTp0LmNhbGwoZSxuKTp0LmNhbGwoZSl9cmV0dXJuIG4uX2xlbmd0aD10Lmxlbmd0aCxufWZ1bmN0aW9uIHYodCxlKXtlPWV8fDA7Zm9yKHZhciBuPXQubGVuZ3RoLWUscj1uZXcgQXJyYXkobik7bi0tOylyW25dPXRbbitlXTtyZXR1cm4gcn1mdW5jdGlvbiBoKHQsZSl7Zm9yKHZhciBuIGluIGUpdFtuXT1lW25dO3JldHVybiB0fWZ1bmN0aW9uIG0odCl7Zm9yKHZhciBlPXt9LG49MDtuPHQubGVuZ3RoO24rKyl0W25dJiZoKGUsdFtuXSk7cmV0dXJuIGV9ZnVuY3Rpb24geSh0LGUsbil7fWZ1bmN0aW9uIGcodCxlKXtpZih0PT09ZSlyZXR1cm4hMDt2YXIgbj1pKHQpLHI9aShlKTtpZighbnx8IXIpcmV0dXJuIW4mJiFyJiZTdHJpbmcodCk9PT1TdHJpbmcoZSk7dHJ5e3ZhciBvPUFycmF5LmlzQXJyYXkodCksYT1BcnJheS5pc0FycmF5KGUpO2lmKG8mJmEpcmV0dXJuIHQubGVuZ3RoPT09ZS5sZW5ndGgmJnQuZXZlcnkoZnVuY3Rpb24odCxuKXtyZXR1cm4gZyh0LGVbbl0pfSk7aWYob3x8YSlyZXR1cm4hMTt2YXIgcz1PYmplY3Qua2V5cyh0KSxjPU9iamVjdC5rZXlzKGUpO3JldHVybiBzLmxlbmd0aD09PWMubGVuZ3RoJiZzLmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiBnKHRbbl0sZVtuXSl9KX1jYXRjaCh0KXtyZXR1cm4hMX19ZnVuY3Rpb24gXyh0LGUpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKWlmKGcodFtuXSxlKSlyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBiKHQpe3ZhciBlPSExO3JldHVybiBmdW5jdGlvbigpe2V8fChlPSEwLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpKX19ZnVuY3Rpb24gJCh0KXt2YXIgZT0odCtcIlwiKS5jaGFyQ29kZUF0KDApO3JldHVybiAzNj09PWV8fDk1PT09ZX1mdW5jdGlvbiBDKHQsZSxuLHIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohIXIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9ZnVuY3Rpb24gdyh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYvbmF0aXZlIGNvZGUvLnRlc3QodC50b1N0cmluZygpKX1mdW5jdGlvbiB4KHQpe3JldHVybiBuZXcgbXIodm9pZCAwLHZvaWQgMCx2b2lkIDAsU3RyaW5nKHQpKX1mdW5jdGlvbiBrKHQsZSl7dmFyIG49dC5jb21wb25lbnRPcHRpb25zLHI9bmV3IG1yKHQudGFnLHQuZGF0YSx0LmNoaWxkcmVuLHQudGV4dCx0LmVsbSx0LmNvbnRleHQsbix0LmFzeW5jRmFjdG9yeSk7cmV0dXJuIHIubnM9dC5ucyxyLmlzU3RhdGljPXQuaXNTdGF0aWMsci5rZXk9dC5rZXksci5pc0NvbW1lbnQ9dC5pc0NvbW1lbnQsci5mbkNvbnRleHQ9dC5mbkNvbnRleHQsci5mbk9wdGlvbnM9dC5mbk9wdGlvbnMsci5mblNjb3BlSWQ9dC5mblNjb3BlSWQsci5pc0Nsb25lZD0hMCxlJiYodC5jaGlsZHJlbiYmKHIuY2hpbGRyZW49QSh0LmNoaWxkcmVuLCEwKSksbiYmbi5jaGlsZHJlbiYmKG4uY2hpbGRyZW49QShuLmNoaWxkcmVuLCEwKSkpLHJ9ZnVuY3Rpb24gQSh0LGUpe2Zvcih2YXIgbj10Lmxlbmd0aCxyPW5ldyBBcnJheShuKSxpPTA7aTxuO2krKylyW2ldPWsodFtpXSxlKTtyZXR1cm4gcn1mdW5jdGlvbiBPKHQsZSxuKXt0Ll9fcHJvdG9fXz1lfWZ1bmN0aW9uIFModCxlLG4pe2Zvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl7dmFyIG89bltyXTtDKHQsbyxlW29dKX19ZnVuY3Rpb24gVCh0LGUpe2lmKGkodCkmJiEodCBpbnN0YW5jZW9mIG1yKSl7dmFyIG47cmV0dXJuIGYodCxcIl9fb2JfX1wiKSYmdC5fX29iX18gaW5zdGFuY2VvZiB3cj9uPXQuX19vYl9fOkNyLnNob3VsZENvbnZlcnQmJiF1cigpJiYoQXJyYXkuaXNBcnJheSh0KXx8byh0KSkmJk9iamVjdC5pc0V4dGVuc2libGUodCkmJiF0Ll9pc1Z1ZSYmKG49bmV3IHdyKHQpKSxlJiZuJiZuLnZtQ291bnQrKyxufX1mdW5jdGlvbiBFKHQsZSxuLHIsaSl7dmFyIG89bmV3IHZyLGE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpO2lmKCFhfHwhMSE9PWEuY29uZmlndXJhYmxlKXt2YXIgcz1hJiZhLmdldCxjPWEmJmEuc2V0LHU9IWkmJlQobik7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7dmFyIGU9cz9zLmNhbGwodCk6bjtyZXR1cm4gdnIudGFyZ2V0JiYoby5kZXBlbmQoKSx1JiYodS5kZXAuZGVwZW5kKCksQXJyYXkuaXNBcnJheShlKSYmSShlKSkpLGV9LHNldDpmdW5jdGlvbihlKXt2YXIgcj1zP3MuY2FsbCh0KTpuO2U9PT1yfHxlIT1lJiZyIT1yfHwoYz9jLmNhbGwodCxlKTpuPWUsdT0haSYmVChlKSxvLm5vdGlmeSgpKX19KX19ZnVuY3Rpb24gaih0LGUsbil7aWYoQXJyYXkuaXNBcnJheSh0KSYmYShlKSlyZXR1cm4gdC5sZW5ndGg9TWF0aC5tYXgodC5sZW5ndGgsZSksdC5zcGxpY2UoZSwxLG4pLG47aWYoZSBpbiB0JiYhKGUgaW4gT2JqZWN0LnByb3RvdHlwZSkpcmV0dXJuIHRbZV09bixuO3ZhciByPXQuX19vYl9fO3JldHVybiB0Ll9pc1Z1ZXx8ciYmci52bUNvdW50P246cj8oRShyLnZhbHVlLGUsbiksci5kZXAubm90aWZ5KCksbik6KHRbZV09bixuKX1mdW5jdGlvbiBOKHQsZSl7aWYoQXJyYXkuaXNBcnJheSh0KSYmYShlKSl0LnNwbGljZShlLDEpO2Vsc2V7dmFyIG49dC5fX29iX187dC5faXNWdWV8fG4mJm4udm1Db3VudHx8Zih0LGUpJiYoZGVsZXRlIHRbZV0sbiYmbi5kZXAubm90aWZ5KCkpfX1mdW5jdGlvbiBJKHQpe2Zvcih2YXIgZT12b2lkIDAsbj0wLHI9dC5sZW5ndGg7bjxyO24rKykoZT10W25dKSYmZS5fX29iX18mJmUuX19vYl9fLmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KGUpJiZJKGUpfWZ1bmN0aW9uIEwodCxlKXtpZighZSlyZXR1cm4gdDtmb3IodmFyIG4scixpLGE9T2JqZWN0LmtleXMoZSkscz0wO3M8YS5sZW5ndGg7cysrKXI9dFtuPWFbc11dLGk9ZVtuXSxmKHQsbik/byhyKSYmbyhpKSYmTChyLGkpOmoodCxuLGkpO3JldHVybiB0fWZ1bmN0aW9uIE0odCxlLG4pe3JldHVybiBuP2Z1bmN0aW9uKCl7dmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmNhbGwobixuKTplLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwobixuKTp0O3JldHVybiByP0wocixpKTppfTplP3Q/ZnVuY3Rpb24oKXtyZXR1cm4gTChcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UuY2FsbCh0aGlzLHRoaXMpOmUsXCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwodGhpcyx0aGlzKTp0KX06ZTp0fWZ1bmN0aW9uIEQodCxlKXtyZXR1cm4gZT90P3QuY29uY2F0KGUpOkFycmF5LmlzQXJyYXkoZSk/ZTpbZV06dH1mdW5jdGlvbiBQKHQsZSxuLHIpe3ZhciBpPU9iamVjdC5jcmVhdGUodHx8bnVsbCk7cmV0dXJuIGU/aChpLGUpOml9ZnVuY3Rpb24gRih0LGUsbil7ZnVuY3Rpb24gcihyKXt2YXIgaT14cltyXXx8T3I7dVtyXT1pKHRbcl0sZVtyXSxuLHIpfVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJihlPWUub3B0aW9ucyksZnVuY3Rpb24odCxlKXt2YXIgbj10LnByb3BzO2lmKG4pe3ZhciByLGksYT17fTtpZihBcnJheS5pc0FycmF5KG4pKWZvcihyPW4ubGVuZ3RoO3ItLTspXCJzdHJpbmdcIj09dHlwZW9mKGk9bltyXSkmJihhW1BuKGkpXT17dHlwZTpudWxsfSk7ZWxzZSBpZihvKG4pKWZvcih2YXIgcyBpbiBuKWk9bltzXSxhW1BuKHMpXT1vKGkpP2k6e3R5cGU6aX07dC5wcm9wcz1hfX0oZSksZnVuY3Rpb24odCxlKXt2YXIgbj10LmluamVjdDtpZihuKXt2YXIgcj10LmluamVjdD17fTtpZihBcnJheS5pc0FycmF5KG4pKWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXJbbltpXV09e2Zyb206bltpXX07ZWxzZSBpZihvKG4pKWZvcih2YXIgYSBpbiBuKXt2YXIgcz1uW2FdO3JbYV09byhzKT9oKHtmcm9tOmF9LHMpOntmcm9tOnN9fX19KGUpLGZ1bmN0aW9uKHQpe3ZhciBlPXQuZGlyZWN0aXZlcztpZihlKWZvcih2YXIgbiBpbiBlKXt2YXIgcj1lW25dO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihlW25dPXtiaW5kOnIsdXBkYXRlOnJ9KX19KGUpO3ZhciBpPWUuZXh0ZW5kcztpZihpJiYodD1GKHQsaSxuKSksZS5taXhpbnMpZm9yKHZhciBhPTAscz1lLm1peGlucy5sZW5ndGg7YTxzO2ErKyl0PUYodCxlLm1peGluc1thXSxuKTt2YXIgYyx1PXt9O2ZvcihjIGluIHQpcihjKTtmb3IoYyBpbiBlKWYodCxjKXx8cihjKTtyZXR1cm4gdX1mdW5jdGlvbiBSKHQsZSxuLHIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgaT10W2VdO2lmKGYoaSxuKSlyZXR1cm4gaVtuXTt2YXIgbz1QbihuKTtpZihmKGksbykpcmV0dXJuIGlbb107dmFyIGE9Rm4obyk7aWYoZihpLGEpKXJldHVybiBpW2FdO3JldHVybiBpW25dfHxpW29dfHxpW2FdfX1mdW5jdGlvbiBIKHQsZSxuLHIpe3ZhciBpPWVbdF0sbz0hZihuLHQpLGE9blt0XTtpZihVKEJvb2xlYW4saS50eXBlKSYmKG8mJiFmKGksXCJkZWZhdWx0XCIpP2E9ITE6VShTdHJpbmcsaS50eXBlKXx8XCJcIiE9PWEmJmEhPT1Ibih0KXx8KGE9ITApKSx2b2lkIDA9PT1hKXthPWZ1bmN0aW9uKHQsZSxuKXtpZighZihlLFwiZGVmYXVsdFwiKSlyZXR1cm47dmFyIHI9ZS5kZWZhdWx0O2lmKHQmJnQuJG9wdGlvbnMucHJvcHNEYXRhJiZ2b2lkIDA9PT10LiRvcHRpb25zLnByb3BzRGF0YVtuXSYmdm9pZCAwIT09dC5fcHJvcHNbbl0pcmV0dXJuIHQuX3Byb3BzW25dO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHImJlwiRnVuY3Rpb25cIiE9PUIoZS50eXBlKT9yLmNhbGwodCk6cn0ocixpLHQpO3ZhciBzPUNyLnNob3VsZENvbnZlcnQ7Q3Iuc2hvdWxkQ29udmVydD0hMCxUKGEpLENyLnNob3VsZENvbnZlcnQ9c31yZXR1cm4gYX1mdW5jdGlvbiBCKHQpe3ZhciBlPXQmJnQudG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtyZXR1cm4gZT9lWzFdOlwiXCJ9ZnVuY3Rpb24gVSh0LGUpe2lmKCFBcnJheS5pc0FycmF5KGUpKXJldHVybiBCKGUpPT09Qih0KTtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoQihlW25dKT09PUIodCkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVih0LGUsbil7aWYoZSlmb3IodmFyIHI9ZTtyPXIuJHBhcmVudDspe3ZhciBpPXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtpZihpKWZvcih2YXIgbz0wO288aS5sZW5ndGg7bysrKXRyeXtpZighMT09PWlbb10uY2FsbChyLHQsZSxuKSlyZXR1cm59Y2F0Y2godCl7eih0LHIsXCJlcnJvckNhcHR1cmVkIGhvb2tcIil9fXoodCxlLG4pfWZ1bmN0aW9uIHoodCxlLG4pe2lmKEpuLmVycm9ySGFuZGxlcil0cnl7cmV0dXJuIEpuLmVycm9ySGFuZGxlci5jYWxsKG51bGwsdCxlLG4pfWNhdGNoKHQpe0sodCxudWxsLFwiY29uZmlnLmVycm9ySGFuZGxlclwiKX1LKHQsZSxuKX1mdW5jdGlvbiBLKHQsZSxuKXtpZighR24mJiFabnx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGNvbnNvbGUpdGhyb3cgdDtjb25zb2xlLmVycm9yKHQpfWZ1bmN0aW9uIEooKXtUcj0hMTt2YXIgdD1Tci5zbGljZSgwKTtTci5sZW5ndGg9MDtmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKyl0W2VdKCl9ZnVuY3Rpb24gcSh0LGUpe3ZhciBuO2lmKFNyLnB1c2goZnVuY3Rpb24oKXtpZih0KXRyeXt0LmNhbGwoZSl9Y2F0Y2godCl7Vih0LGUsXCJuZXh0VGlja1wiKX1lbHNlIG4mJm4oZSl9KSxUcnx8KFRyPSEwLEVyP0FyKCk6a3IoKSksIXQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlKXJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0KXtuPXR9KX1mdW5jdGlvbiBXKHQpe0codCxNciksTXIuY2xlYXIoKX1mdW5jdGlvbiBHKHQsZSl7dmFyIG4scixvPUFycmF5LmlzQXJyYXkodCk7aWYoKG98fGkodCkpJiYhT2JqZWN0LmlzRnJvemVuKHQpKXtpZih0Ll9fb2JfXyl7dmFyIGE9dC5fX29iX18uZGVwLmlkO2lmKGUuaGFzKGEpKXJldHVybjtlLmFkZChhKX1pZihvKWZvcihuPXQubGVuZ3RoO24tLTspRyh0W25dLGUpO2Vsc2UgZm9yKG49KHI9T2JqZWN0LmtleXModCkpLmxlbmd0aDtuLS07KUcodFtyW25dXSxlKX19ZnVuY3Rpb24gWih0KXtmdW5jdGlvbiBlKCl7dmFyIHQ9YXJndW1lbnRzLG49ZS5mbnM7aWYoIUFycmF5LmlzQXJyYXkobikpcmV0dXJuIG4uYXBwbHkobnVsbCxhcmd1bWVudHMpO2Zvcih2YXIgcj1uLnNsaWNlKCksaT0wO2k8ci5sZW5ndGg7aSsrKXJbaV0uYXBwbHkobnVsbCx0KX1yZXR1cm4gZS5mbnM9dCxlfWZ1bmN0aW9uIFgoZSxuLHIsaSxvKXt2YXIgYSxzLGMsdTtmb3IoYSBpbiBlKXM9ZVthXSxjPW5bYV0sdT1EcihhKSx0KHMpfHwodChjKT8odChzLmZucykmJihzPWVbYV09WihzKSkscih1Lm5hbWUscyx1Lm9uY2UsdS5jYXB0dXJlLHUucGFzc2l2ZSx1LnBhcmFtcykpOnMhPT1jJiYoYy5mbnM9cyxlW2FdPWMpKTtmb3IoYSBpbiBuKXQoZVthXSkmJmkoKHU9RHIoYSkpLm5hbWUsblthXSx1LmNhcHR1cmUpfWZ1bmN0aW9uIFkocixpLG8pe2Z1bmN0aW9uIGEoKXtvLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxsKHMuZm5zLGEpfXIgaW5zdGFuY2VvZiBtciYmKHI9ci5kYXRhLmhvb2t8fChyLmRhdGEuaG9vaz17fSkpO3ZhciBzLGM9cltpXTt0KGMpP3M9WihbYV0pOmUoYy5mbnMpJiZuKGMubWVyZ2VkKT8ocz1jKS5mbnMucHVzaChhKTpzPVooW2MsYV0pLHMubWVyZ2VkPSEwLHJbaV09c31mdW5jdGlvbiBRKHQsbixyLGksbyl7aWYoZShuKSl7aWYoZihuLHIpKXJldHVybiB0W3JdPW5bcl0sb3x8ZGVsZXRlIG5bcl0sITA7aWYoZihuLGkpKXJldHVybiB0W3JdPW5baV0sb3x8ZGVsZXRlIG5baV0sITB9cmV0dXJuITF9ZnVuY3Rpb24gdHQodCl7cmV0dXJuIGUodCkmJmUodC50ZXh0KSYmZnVuY3Rpb24odCl7cmV0dXJuITE9PT10fSh0LmlzQ29tbWVudCl9ZnVuY3Rpb24gZXQoaSxvKXt2YXIgYSxzLGMsdSxsPVtdO2ZvcihhPTA7YTxpLmxlbmd0aDthKyspdChzPWlbYV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIHN8fCh1PWxbYz1sLmxlbmd0aC0xXSxBcnJheS5pc0FycmF5KHMpP3MubGVuZ3RoPjAmJih0dCgocz1ldChzLChvfHxcIlwiKStcIl9cIithKSlbMF0pJiZ0dCh1KSYmKGxbY109eCh1LnRleHQrc1swXS50ZXh0KSxzLnNoaWZ0KCkpLGwucHVzaC5hcHBseShsLHMpKTpyKHMpP3R0KHUpP2xbY109eCh1LnRleHQrcyk6XCJcIiE9PXMmJmwucHVzaCh4KHMpKTp0dChzKSYmdHQodSk/bFtjXT14KHUudGV4dCtzLnRleHQpOihuKGkuX2lzVkxpc3QpJiZlKHMudGFnKSYmdChzLmtleSkmJmUobykmJihzLmtleT1cIl9fdmxpc3RcIitvK1wiX1wiK2ErXCJfX1wiKSxsLnB1c2gocykpKTtyZXR1cm4gbH1mdW5jdGlvbiBudCh0LGUpe3JldHVybih0Ll9fZXNNb2R1bGV8fGZyJiZcIk1vZHVsZVwiPT09dFtTeW1ib2wudG9TdHJpbmdUYWddKSYmKHQ9dC5kZWZhdWx0KSxpKHQpP2UuZXh0ZW5kKHQpOnR9ZnVuY3Rpb24gcnQodCl7cmV0dXJuIHQuaXNDb21tZW50JiZ0LmFzeW5jRmFjdG9yeX1mdW5jdGlvbiBpdCh0KXtpZihBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO2lmKGUocikmJihlKHIuY29tcG9uZW50T3B0aW9ucyl8fHJ0KHIpKSlyZXR1cm4gcn19ZnVuY3Rpb24gb3QodCxlLG4pe24/THIuJG9uY2UodCxlKTpMci4kb24odCxlKX1mdW5jdGlvbiBhdCh0LGUpe0xyLiRvZmYodCxlKX1mdW5jdGlvbiBzdCh0LGUsbil7THI9dCxYKGUsbnx8e30sb3QsYXQpLExyPXZvaWQgMH1mdW5jdGlvbiBjdCh0LGUpe3ZhciBuPXt9O2lmKCF0KXJldHVybiBuO2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKyl7dmFyIG89dFtyXSxhPW8uZGF0YTtpZihhJiZhLmF0dHJzJiZhLmF0dHJzLnNsb3QmJmRlbGV0ZSBhLmF0dHJzLnNsb3Qsby5jb250ZXh0IT09ZSYmby5mbkNvbnRleHQhPT1lfHwhYXx8bnVsbD09YS5zbG90KShuLmRlZmF1bHR8fChuLmRlZmF1bHQ9W10pKS5wdXNoKG8pO2Vsc2V7dmFyIHM9YS5zbG90LGM9bltzXXx8KG5bc109W10pO1widGVtcGxhdGVcIj09PW8udGFnP2MucHVzaC5hcHBseShjLG8uY2hpbGRyZW58fFtdKTpjLnB1c2gobyl9fWZvcih2YXIgdSBpbiBuKW5bdV0uZXZlcnkodXQpJiZkZWxldGUgblt1XTtyZXR1cm4gbn1mdW5jdGlvbiB1dCh0KXtyZXR1cm4gdC5pc0NvbW1lbnQmJiF0LmFzeW5jRmFjdG9yeXx8XCIgXCI9PT10LnRleHR9ZnVuY3Rpb24gbHQodCxlKXtlPWV8fHt9O2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKUFycmF5LmlzQXJyYXkodFtuXSk/bHQodFtuXSxlKTplW3Rbbl0ua2V5XT10W25dLmZuO3JldHVybiBlfWZ1bmN0aW9uIGZ0KHQpe2Zvcig7dCYmKHQ9dC4kcGFyZW50KTspaWYodC5faW5hY3RpdmUpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gcHQodCxlKXtpZihlKXtpZih0Ll9kaXJlY3RJbmFjdGl2ZT0hMSxmdCh0KSlyZXR1cm59ZWxzZSBpZih0Ll9kaXJlY3RJbmFjdGl2ZSlyZXR1cm47aWYodC5faW5hY3RpdmV8fG51bGw9PT10Ll9pbmFjdGl2ZSl7dC5faW5hY3RpdmU9ITE7Zm9yKHZhciBuPTA7bjx0LiRjaGlsZHJlbi5sZW5ndGg7bisrKXB0KHQuJGNoaWxkcmVuW25dKTt2dCh0LFwiYWN0aXZhdGVkXCIpfX1mdW5jdGlvbiBkdCh0LGUpe2lmKCEoZSYmKHQuX2RpcmVjdEluYWN0aXZlPSEwLGZ0KHQpKXx8dC5faW5hY3RpdmUpKXt0Ll9pbmFjdGl2ZT0hMDtmb3IodmFyIG49MDtuPHQuJGNoaWxkcmVuLmxlbmd0aDtuKyspZHQodC4kY2hpbGRyZW5bbl0pO3Z0KHQsXCJkZWFjdGl2YXRlZFwiKX19ZnVuY3Rpb24gdnQodCxlKXt2YXIgbj10LiRvcHRpb25zW2VdO2lmKG4pZm9yKHZhciByPTAsaT1uLmxlbmd0aDtyPGk7cisrKXRyeXtuW3JdLmNhbGwodCl9Y2F0Y2gobil7VihuLHQsZStcIiBob29rXCIpfXQuX2hhc0hvb2tFdmVudCYmdC4kZW1pdChcImhvb2s6XCIrZSl9ZnVuY3Rpb24gaHQoKXtVcj0hMDt2YXIgdCxlO2ZvcihGci5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuaWQtZS5pZH0pLFZyPTA7VnI8RnIubGVuZ3RoO1ZyKyspZT0odD1GcltWcl0pLmlkLEhyW2VdPW51bGwsdC5ydW4oKTt2YXIgbj1Sci5zbGljZSgpLHI9RnIuc2xpY2UoKTtWcj1Gci5sZW5ndGg9UnIubGVuZ3RoPTAsSHI9e30sQnI9VXI9ITEsZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspdFtlXS5faW5hY3RpdmU9ITAscHQodFtlXSwhMCl9KG4pLGZ1bmN0aW9uKHQpe3ZhciBlPXQubGVuZ3RoO2Zvcig7ZS0tOyl7dmFyIG49dFtlXSxyPW4udm07ci5fd2F0Y2hlcj09PW4mJnIuX2lzTW91bnRlZCYmdnQocixcInVwZGF0ZWRcIil9fShyKSxsciYmSm4uZGV2dG9vbHMmJmxyLmVtaXQoXCJmbHVzaFwiKX1mdW5jdGlvbiBtdCh0LGUsbil7SnIuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbZV1bbl19LEpyLnNldD1mdW5jdGlvbih0KXt0aGlzW2VdW25dPXR9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4sSnIpfWZ1bmN0aW9uIHl0KHQpe3QuX3dhdGNoZXJzPVtdO3ZhciBlPXQuJG9wdGlvbnM7ZS5wcm9wcyYmZnVuY3Rpb24odCxlKXt2YXIgbj10LiRvcHRpb25zLnByb3BzRGF0YXx8e30scj10Ll9wcm9wcz17fSxpPXQuJG9wdGlvbnMuX3Byb3BLZXlzPVtdLG89IXQuJHBhcmVudDtDci5zaG91bGRDb252ZXJ0PW87dmFyIGE9ZnVuY3Rpb24obyl7aS5wdXNoKG8pO3ZhciBhPUgobyxlLG4sdCk7RShyLG8sYSksbyBpbiB0fHxtdCh0LFwiX3Byb3BzXCIsbyl9O2Zvcih2YXIgcyBpbiBlKWEocyk7Q3Iuc2hvdWxkQ29udmVydD0hMH0odCxlLnByb3BzKSxlLm1ldGhvZHMmJmZ1bmN0aW9uKHQsZSl7dC4kb3B0aW9ucy5wcm9wcztmb3IodmFyIG4gaW4gZSl0W25dPW51bGw9PWVbbl0/eTpkKGVbbl0sdCl9KHQsZS5tZXRob2RzKSxlLmRhdGE/ZnVuY3Rpb24odCl7dmFyIGU9dC4kb3B0aW9ucy5kYXRhO2U9dC5fZGF0YT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2Z1bmN0aW9uKHQsZSl7dHJ5e3JldHVybiB0LmNhbGwoZSxlKX1jYXRjaCh0KXtyZXR1cm4gVih0LGUsXCJkYXRhKClcIikse319fShlLHQpOmV8fHt9LG8oZSl8fChlPXt9KTt2YXIgbj1PYmplY3Qua2V5cyhlKSxyPXQuJG9wdGlvbnMucHJvcHMsaT0odC4kb3B0aW9ucy5tZXRob2RzLG4ubGVuZ3RoKTtmb3IoO2ktLTspe3ZhciBhPW5baV07ciYmZihyLGEpfHwkKGEpfHxtdCh0LFwiX2RhdGFcIixhKX1UKGUsITApfSh0KTpUKHQuX2RhdGE9e30sITApLGUuY29tcHV0ZWQmJmZ1bmN0aW9uKHQsZSl7dmFyIG49dC5fY29tcHV0ZWRXYXRjaGVycz1PYmplY3QuY3JlYXRlKG51bGwpLHI9dXIoKTtmb3IodmFyIGkgaW4gZSl7dmFyIG89ZVtpXSxhPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8/bzpvLmdldDtyfHwobltpXT1uZXcgS3IodCxhfHx5LHkscXIpKSxpIGluIHR8fGd0KHQsaSxvKX19KHQsZS5jb21wdXRlZCksZS53YXRjaCYmZS53YXRjaCE9PWlyJiZmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKXt2YXIgcj1lW25dO2lmKEFycmF5LmlzQXJyYXkocikpZm9yKHZhciBpPTA7aTxyLmxlbmd0aDtpKyspYnQodCxuLHJbaV0pO2Vsc2UgYnQodCxuLHIpfX0odCxlLndhdGNoKX1mdW5jdGlvbiBndCh0LGUsbil7dmFyIHI9IXVyKCk7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj8oSnIuZ2V0PXI/X3QoZSk6bixKci5zZXQ9eSk6KEpyLmdldD1uLmdldD9yJiYhMSE9PW4uY2FjaGU/X3QoZSk6bi5nZXQ6eSxKci5zZXQ9bi5zZXQ/bi5zZXQ6eSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSxKcil9ZnVuY3Rpb24gX3QodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fY29tcHV0ZWRXYXRjaGVycyYmdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1t0XTtpZihlKXJldHVybiBlLmRpcnR5JiZlLmV2YWx1YXRlKCksdnIudGFyZ2V0JiZlLmRlcGVuZCgpLGUudmFsdWV9fWZ1bmN0aW9uIGJ0KHQsZSxuLHIpe3JldHVybiBvKG4pJiYocj1uLG49bi5oYW5kbGVyKSxcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49dFtuXSksdC4kd2F0Y2goZSxuLHIpfWZ1bmN0aW9uICR0KHQsZSl7aWYodCl7Zm9yKHZhciBuPU9iamVjdC5jcmVhdGUobnVsbCkscj1mcj9SZWZsZWN0Lm93bktleXModCkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pOk9iamVjdC5rZXlzKHQpLGk9MDtpPHIubGVuZ3RoO2krKyl7Zm9yKHZhciBvPXJbaV0sYT10W29dLmZyb20scz1lO3M7KXtpZihzLl9wcm92aWRlZCYmYSBpbiBzLl9wcm92aWRlZCl7bltvXT1zLl9wcm92aWRlZFthXTticmVha31zPXMuJHBhcmVudH1pZighcyYmXCJkZWZhdWx0XCJpbiB0W29dKXt2YXIgYz10W29dLmRlZmF1bHQ7bltvXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjP2MuY2FsbChlKTpjfX1yZXR1cm4gbn19ZnVuY3Rpb24gQ3QodCxuKXt2YXIgcixvLGEscyxjO2lmKEFycmF5LmlzQXJyYXkodCl8fFwic3RyaW5nXCI9PXR5cGVvZiB0KWZvcihyPW5ldyBBcnJheSh0Lmxlbmd0aCksbz0wLGE9dC5sZW5ndGg7bzxhO28rKylyW29dPW4odFtvXSxvKTtlbHNlIGlmKFwibnVtYmVyXCI9PXR5cGVvZiB0KWZvcihyPW5ldyBBcnJheSh0KSxvPTA7bzx0O28rKylyW29dPW4obysxLG8pO2Vsc2UgaWYoaSh0KSlmb3Iocz1PYmplY3Qua2V5cyh0KSxyPW5ldyBBcnJheShzLmxlbmd0aCksbz0wLGE9cy5sZW5ndGg7bzxhO28rKyljPXNbb10scltvXT1uKHRbY10sYyxvKTtyZXR1cm4gZShyKSYmKHIuX2lzVkxpc3Q9ITApLHJ9ZnVuY3Rpb24gd3QodCxlLG4scil7dmFyIGksbz10aGlzLiRzY29wZWRTbG90c1t0XTtpZihvKW49bnx8e30sciYmKG49aChoKHt9LHIpLG4pKSxpPW8obil8fGU7ZWxzZXt2YXIgYT10aGlzLiRzbG90c1t0XTthJiYoYS5fcmVuZGVyZWQ9ITApLGk9YXx8ZX12YXIgcz1uJiZuLnNsb3Q7cmV0dXJuIHM/dGhpcy4kY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIse3Nsb3Q6c30saSk6aX1mdW5jdGlvbiB4dCh0KXtyZXR1cm4gUih0aGlzLiRvcHRpb25zLFwiZmlsdGVyc1wiLHQpfHxVbn1mdW5jdGlvbiBrdCh0LGUsbixyKXt2YXIgaT1Kbi5rZXlDb2Rlc1tlXXx8bjtyZXR1cm4gaT9BcnJheS5pc0FycmF5KGkpPy0xPT09aS5pbmRleE9mKHQpOmkhPT10OnI/SG4ocikhPT1lOnZvaWQgMH1mdW5jdGlvbiBBdCh0LGUsbixyLG8pe2lmKG4paWYoaShuKSl7QXJyYXkuaXNBcnJheShuKSYmKG49bShuKSk7dmFyIGEscz1mdW5jdGlvbihpKXtpZihcImNsYXNzXCI9PT1pfHxcInN0eWxlXCI9PT1pfHxMbihpKSlhPXQ7ZWxzZXt2YXIgcz10LmF0dHJzJiZ0LmF0dHJzLnR5cGU7YT1yfHxKbi5tdXN0VXNlUHJvcChlLHMsaSk/dC5kb21Qcm9wc3x8KHQuZG9tUHJvcHM9e30pOnQuYXR0cnN8fCh0LmF0dHJzPXt9KX1pZighKGkgaW4gYSkmJihhW2ldPW5baV0sbykpeyh0Lm9ufHwodC5vbj17fSkpW1widXBkYXRlOlwiK2ldPWZ1bmN0aW9uKHQpe25baV09dH19fTtmb3IodmFyIGMgaW4gbilzKGMpfWVsc2U7cmV0dXJuIHR9ZnVuY3Rpb24gT3QodCxlKXt2YXIgbj10aGlzLl9zdGF0aWNUcmVlc3x8KHRoaXMuX3N0YXRpY1RyZWVzPVtdKSxyPW5bdF07cmV0dXJuIHImJiFlP0FycmF5LmlzQXJyYXkocik/QShyKTprKHIpOihyPW5bdF09dGhpcy4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNbdF0uY2FsbCh0aGlzLl9yZW5kZXJQcm94eSxudWxsLHRoaXMpLFR0KHIsXCJfX3N0YXRpY19fXCIrdCwhMSkscil9ZnVuY3Rpb24gU3QodCxlLG4pe3JldHVybiBUdCh0LFwiX19vbmNlX19cIitlKyhuP1wiX1wiK246XCJcIiksITApLHR9ZnVuY3Rpb24gVHQodCxlLG4pe2lmKEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmXCJzdHJpbmdcIiE9dHlwZW9mIHRbcl0mJkV0KHRbcl0sZStcIl9cIityLG4pO2Vsc2UgRXQodCxlLG4pfWZ1bmN0aW9uIEV0KHQsZSxuKXt0LmlzU3RhdGljPSEwLHQua2V5PWUsdC5pc09uY2U9bn1mdW5jdGlvbiBqdCh0LGUpe2lmKGUpaWYobyhlKSl7dmFyIG49dC5vbj10Lm9uP2goe30sdC5vbik6e307Zm9yKHZhciByIGluIGUpe3ZhciBpPW5bcl0sYT1lW3JdO25bcl09aT9bXS5jb25jYXQoaSxhKTphfX1lbHNlO3JldHVybiB0fWZ1bmN0aW9uIE50KHQpe3QuX289U3QsdC5fbj1jLHQuX3M9cyx0Ll9sPUN0LHQuX3Q9d3QsdC5fcT1nLHQuX2k9Xyx0Ll9tPU90LHQuX2Y9eHQsdC5faz1rdCx0Ll9iPUF0LHQuX3Y9eCx0Ll9lPWdyLHQuX3U9bHQsdC5fZz1qdH1mdW5jdGlvbiBJdCh0LGUscixpLG8pe3ZhciBhPW8ub3B0aW9uczt0aGlzLmRhdGE9dCx0aGlzLnByb3BzPWUsdGhpcy5jaGlsZHJlbj1yLHRoaXMucGFyZW50PWksdGhpcy5saXN0ZW5lcnM9dC5vbnx8am4sdGhpcy5pbmplY3Rpb25zPSR0KGEuaW5qZWN0LGkpLHRoaXMuc2xvdHM9ZnVuY3Rpb24oKXtyZXR1cm4gY3QocixpKX07dmFyIHM9T2JqZWN0LmNyZWF0ZShpKSxjPW4oYS5fY29tcGlsZWQpLHU9IWM7YyYmKHRoaXMuJG9wdGlvbnM9YSx0aGlzLiRzbG90cz10aGlzLnNsb3RzKCksdGhpcy4kc2NvcGVkU2xvdHM9dC5zY29wZWRTbG90c3x8am4pLGEuX3Njb3BlSWQ/dGhpcy5fYz1mdW5jdGlvbih0LGUsbixyKXt2YXIgbz1EdChzLHQsZSxuLHIsdSk7cmV0dXJuIG8mJihvLmZuU2NvcGVJZD1hLl9zY29wZUlkLG8uZm5Db250ZXh0PWkpLG99OnRoaXMuX2M9ZnVuY3Rpb24odCxlLG4scil7cmV0dXJuIER0KHMsdCxlLG4scix1KX19ZnVuY3Rpb24gTHQodCxlKXtmb3IodmFyIG4gaW4gZSl0W1BuKG4pXT1lW25dfWZ1bmN0aW9uIE10KHIsbyxhLHMsYyl7aWYoIXQocikpe3ZhciB1PWEuJG9wdGlvbnMuX2Jhc2U7aWYoaShyKSYmKHI9dS5leHRlbmQocikpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHIpe3ZhciBsO2lmKHQoci5jaWQpJiYobD1yLHZvaWQgMD09PShyPWZ1bmN0aW9uKHIsbyxhKXtpZihuKHIuZXJyb3IpJiZlKHIuZXJyb3JDb21wKSlyZXR1cm4gci5lcnJvckNvbXA7aWYoZShyLnJlc29sdmVkKSlyZXR1cm4gci5yZXNvbHZlZDtpZihuKHIubG9hZGluZykmJmUoci5sb2FkaW5nQ29tcCkpcmV0dXJuIHIubG9hZGluZ0NvbXA7aWYoIWUoci5jb250ZXh0cykpe3ZhciBzPXIuY29udGV4dHM9W2FdLGM9ITAsdT1mdW5jdGlvbigpe2Zvcih2YXIgdD0wLGU9cy5sZW5ndGg7dDxlO3QrKylzW3RdLiRmb3JjZVVwZGF0ZSgpfSxsPWIoZnVuY3Rpb24odCl7ci5yZXNvbHZlZD1udCh0LG8pLGN8fHUoKX0pLGY9YihmdW5jdGlvbih0KXtlKHIuZXJyb3JDb21wKSYmKHIuZXJyb3I9ITAsdSgpKX0pLHA9cihsLGYpO3JldHVybiBpKHApJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgcC50aGVuP3Qoci5yZXNvbHZlZCkmJnAudGhlbihsLGYpOmUocC5jb21wb25lbnQpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwLmNvbXBvbmVudC50aGVuJiYocC5jb21wb25lbnQudGhlbihsLGYpLGUocC5lcnJvcikmJihyLmVycm9yQ29tcD1udChwLmVycm9yLG8pKSxlKHAubG9hZGluZykmJihyLmxvYWRpbmdDb21wPW50KHAubG9hZGluZyxvKSwwPT09cC5kZWxheT9yLmxvYWRpbmc9ITA6c2V0VGltZW91dChmdW5jdGlvbigpe3Qoci5yZXNvbHZlZCkmJnQoci5lcnJvcikmJihyLmxvYWRpbmc9ITAsdSgpKX0scC5kZWxheXx8MjAwKSksZShwLnRpbWVvdXQpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dChyLnJlc29sdmVkKSYmZihudWxsKX0scC50aW1lb3V0KSkpLGM9ITEsci5sb2FkaW5nP3IubG9hZGluZ0NvbXA6ci5yZXNvbHZlZH1yLmNvbnRleHRzLnB1c2goYSl9KGwsdSxhKSkpKXJldHVybiBmdW5jdGlvbih0LGUsbixyLGkpe3ZhciBvPWdyKCk7cmV0dXJuIG8uYXN5bmNGYWN0b3J5PXQsby5hc3luY01ldGE9e2RhdGE6ZSxjb250ZXh0Om4sY2hpbGRyZW46cix0YWc6aX0sb30obCxvLGEscyxjKTtvPW98fHt9LEZ0KHIpLGUoby5tb2RlbCkmJmZ1bmN0aW9uKHQsbil7dmFyIHI9dC5tb2RlbCYmdC5tb2RlbC5wcm9wfHxcInZhbHVlXCIsaT10Lm1vZGVsJiZ0Lm1vZGVsLmV2ZW50fHxcImlucHV0XCI7KG4ucHJvcHN8fChuLnByb3BzPXt9KSlbcl09bi5tb2RlbC52YWx1ZTt2YXIgbz1uLm9ufHwobi5vbj17fSk7ZShvW2ldKT9vW2ldPVtuLm1vZGVsLmNhbGxiYWNrXS5jb25jYXQob1tpXSk6b1tpXT1uLm1vZGVsLmNhbGxiYWNrfShyLm9wdGlvbnMsbyk7dmFyIGY9ZnVuY3Rpb24obixyLGkpe3ZhciBvPXIub3B0aW9ucy5wcm9wcztpZighdChvKSl7dmFyIGE9e30scz1uLmF0dHJzLGM9bi5wcm9wcztpZihlKHMpfHxlKGMpKWZvcih2YXIgdSBpbiBvKXt2YXIgbD1Ibih1KTtRKGEsYyx1LGwsITApfHxRKGEscyx1LGwsITEpfXJldHVybiBhfX0obyxyKTtpZihuKHIub3B0aW9ucy5mdW5jdGlvbmFsKSlyZXR1cm4gZnVuY3Rpb24odCxuLHIsaSxvKXt2YXIgYT10Lm9wdGlvbnMscz17fSxjPWEucHJvcHM7aWYoZShjKSlmb3IodmFyIHUgaW4gYylzW3VdPUgodSxjLG58fGpuKTtlbHNlIGUoci5hdHRycykmJkx0KHMsci5hdHRycyksZShyLnByb3BzKSYmTHQocyxyLnByb3BzKTt2YXIgbD1uZXcgSXQocixzLG8saSx0KSxmPWEucmVuZGVyLmNhbGwobnVsbCxsLl9jLGwpO3JldHVybiBmIGluc3RhbmNlb2YgbXImJihmLmZuQ29udGV4dD1pLGYuZm5PcHRpb25zPWEsci5zbG90JiYoKGYuZGF0YXx8KGYuZGF0YT17fSkpLnNsb3Q9ci5zbG90KSksZn0ocixmLG8sYSxzKTt2YXIgcD1vLm9uO2lmKG8ub249by5uYXRpdmVPbixuKHIub3B0aW9ucy5hYnN0cmFjdCkpe3ZhciBkPW8uc2xvdDtvPXt9LGQmJihvLnNsb3Q9ZCl9IWZ1bmN0aW9uKHQpe3QuaG9va3x8KHQuaG9vaz17fSk7Zm9yKHZhciBlPTA7ZTxHci5sZW5ndGg7ZSsrKXt2YXIgbj1HcltlXSxyPXQuaG9va1tuXSxpPVdyW25dO3QuaG9va1tuXT1yP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKG4scixpLG8pe3QobixyLGksbyksZShuLHIsaSxvKX19KGkscik6aX19KG8pO3ZhciB2PXIub3B0aW9ucy5uYW1lfHxjO3JldHVybiBuZXcgbXIoXCJ2dWUtY29tcG9uZW50LVwiK3IuY2lkKyh2P1wiLVwiK3Y6XCJcIiksbyx2b2lkIDAsdm9pZCAwLHZvaWQgMCxhLHtDdG9yOnIscHJvcHNEYXRhOmYsbGlzdGVuZXJzOnAsdGFnOmMsY2hpbGRyZW46c30sbCl9fX1mdW5jdGlvbiBEdCh0LGksbyxhLHMsYyl7cmV0dXJuKEFycmF5LmlzQXJyYXkobyl8fHIobykpJiYocz1hLGE9byxvPXZvaWQgMCksbihjKSYmKHM9WHIpLGZ1bmN0aW9uKHQsbixpLG8sYSl7aWYoZShpKSYmZShpLl9fb2JfXykpcmV0dXJuIGdyKCk7ZShpKSYmZShpLmlzKSYmKG49aS5pcyk7aWYoIW4pcmV0dXJuIGdyKCk7QXJyYXkuaXNBcnJheShvKSYmXCJmdW5jdGlvblwiPT10eXBlb2Ygb1swXSYmKChpPWl8fHt9KS5zY29wZWRTbG90cz17ZGVmYXVsdDpvWzBdfSxvLmxlbmd0aD0wKTthPT09WHI/bz1mdW5jdGlvbih0KXtyZXR1cm4gcih0KT9beCh0KV06QXJyYXkuaXNBcnJheSh0KT9ldCh0KTp2b2lkIDB9KG8pOmE9PT1aciYmKG89ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspaWYoQXJyYXkuaXNBcnJheSh0W2VdKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSx0KTtyZXR1cm4gdH0obykpO3ZhciBzLGM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pe3ZhciB1O2M9dC4kdm5vZGUmJnQuJHZub2RlLm5zfHxKbi5nZXRUYWdOYW1lc3BhY2Uobikscz1Kbi5pc1Jlc2VydmVkVGFnKG4pP25ldyBtcihKbi5wYXJzZVBsYXRmb3JtVGFnTmFtZShuKSxpLG8sdm9pZCAwLHZvaWQgMCx0KTplKHU9Uih0LiRvcHRpb25zLFwiY29tcG9uZW50c1wiLG4pKT9NdCh1LGksdCxvLG4pOm5ldyBtcihuLGksbyx2b2lkIDAsdm9pZCAwLHQpfWVsc2Ugcz1NdChuLGksdCxvKTtyZXR1cm4gZShzKT8oYyYmUHQocyxjKSxzKTpncigpfSh0LGksbyxhLHMpfWZ1bmN0aW9uIFB0KHIsaSxvKXtpZihyLm5zPWksXCJmb3JlaWduT2JqZWN0XCI9PT1yLnRhZyYmKGk9dm9pZCAwLG89ITApLGUoci5jaGlsZHJlbikpZm9yKHZhciBhPTAscz1yLmNoaWxkcmVuLmxlbmd0aDthPHM7YSsrKXt2YXIgYz1yLmNoaWxkcmVuW2FdO2UoYy50YWcpJiYodChjLm5zKXx8bihvKSkmJlB0KGMsaSxvKX19ZnVuY3Rpb24gRnQodCl7dmFyIGU9dC5vcHRpb25zO2lmKHQuc3VwZXIpe3ZhciBuPUZ0KHQuc3VwZXIpO2lmKG4hPT10LnN1cGVyT3B0aW9ucyl7dC5zdXBlck9wdGlvbnM9bjt2YXIgcj1mdW5jdGlvbih0KXt2YXIgZSxuPXQub3B0aW9ucyxyPXQuZXh0ZW5kT3B0aW9ucyxpPXQuc2VhbGVkT3B0aW9ucztmb3IodmFyIG8gaW4gbiluW29dIT09aVtvXSYmKGV8fChlPXt9KSxlW29dPWZ1bmN0aW9uKHQsZSxuKXt7aWYoQXJyYXkuaXNBcnJheSh0KSl7dmFyIHI9W107bj1BcnJheS5pc0FycmF5KG4pP246W25dLGU9QXJyYXkuaXNBcnJheShlKT9lOltlXTtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKykoZS5pbmRleE9mKHRbaV0pPj0wfHxuLmluZGV4T2YodFtpXSk8MCkmJnIucHVzaCh0W2ldKTtyZXR1cm4gcn1yZXR1cm4gdH19KG5bb10scltvXSxpW29dKSk7cmV0dXJuIGV9KHQpO3ImJmgodC5leHRlbmRPcHRpb25zLHIpLChlPXQub3B0aW9ucz1GKG4sdC5leHRlbmRPcHRpb25zKSkubmFtZSYmKGUuY29tcG9uZW50c1tlLm5hbWVdPXQpfX1yZXR1cm4gZX1mdW5jdGlvbiBSdCh0KXt0aGlzLl9pbml0KHQpfWZ1bmN0aW9uIEh0KHQpe3QuY2lkPTA7dmFyIGU9MTt0LmV4dGVuZD1mdW5jdGlvbih0KXt0PXR8fHt9O3ZhciBuPXRoaXMscj1uLmNpZCxpPXQuX0N0b3J8fCh0Ll9DdG9yPXt9KTtpZihpW3JdKXJldHVybiBpW3JdO3ZhciBvPXQubmFtZXx8bi5vcHRpb25zLm5hbWUsYT1mdW5jdGlvbih0KXt0aGlzLl9pbml0KHQpfTtyZXR1cm4gYS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShuLnByb3RvdHlwZSksYS5wcm90b3R5cGUuY29uc3RydWN0b3I9YSxhLmNpZD1lKyssYS5vcHRpb25zPUYobi5vcHRpb25zLHQpLGEuc3VwZXI9bixhLm9wdGlvbnMucHJvcHMmJmZ1bmN0aW9uKHQpe3ZhciBlPXQub3B0aW9ucy5wcm9wcztmb3IodmFyIG4gaW4gZSltdCh0LnByb3RvdHlwZSxcIl9wcm9wc1wiLG4pfShhKSxhLm9wdGlvbnMuY29tcHV0ZWQmJmZ1bmN0aW9uKHQpe3ZhciBlPXQub3B0aW9ucy5jb21wdXRlZDtmb3IodmFyIG4gaW4gZSlndCh0LnByb3RvdHlwZSxuLGVbbl0pfShhKSxhLmV4dGVuZD1uLmV4dGVuZCxhLm1peGluPW4ubWl4aW4sYS51c2U9bi51c2Usem4uZm9yRWFjaChmdW5jdGlvbih0KXthW3RdPW5bdF19KSxvJiYoYS5vcHRpb25zLmNvbXBvbmVudHNbb109YSksYS5zdXBlck9wdGlvbnM9bi5vcHRpb25zLGEuZXh0ZW5kT3B0aW9ucz10LGEuc2VhbGVkT3B0aW9ucz1oKHt9LGEub3B0aW9ucyksaVtyXT1hLGF9fWZ1bmN0aW9uIEJ0KHQpe3JldHVybiB0JiYodC5DdG9yLm9wdGlvbnMubmFtZXx8dC50YWcpfWZ1bmN0aW9uIFV0KHQsZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/dC5pbmRleE9mKGUpPi0xOlwic3RyaW5nXCI9PXR5cGVvZiB0P3Quc3BsaXQoXCIsXCIpLmluZGV4T2YoZSk+LTE6ISFmdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgUmVnRXhwXVwiPT09Tm4uY2FsbCh0KX0odCkmJnQudGVzdChlKX1mdW5jdGlvbiBWdCh0LGUpe3ZhciBuPXQuY2FjaGUscj10LmtleXMsaT10Ll92bm9kZTtmb3IodmFyIG8gaW4gbil7dmFyIGE9bltvXTtpZihhKXt2YXIgcz1CdChhLmNvbXBvbmVudE9wdGlvbnMpO3MmJiFlKHMpJiZ6dChuLG8scixpKX19fWZ1bmN0aW9uIHp0KHQsZSxuLHIpe3ZhciBpPXRbZV07IWl8fHImJmkudGFnPT09ci50YWd8fGkuY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKSx0W2VdPW51bGwsbChuLGUpfWZ1bmN0aW9uIEt0KHQpe2Zvcih2YXIgbj10LmRhdGEscj10LGk9dDtlKGkuY29tcG9uZW50SW5zdGFuY2UpOykoaT1pLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSkmJmkuZGF0YSYmKG49SnQoaS5kYXRhLG4pKTtmb3IoO2Uocj1yLnBhcmVudCk7KXImJnIuZGF0YSYmKG49SnQobixyLmRhdGEpKTtyZXR1cm4gZnVuY3Rpb24odCxuKXtpZihlKHQpfHxlKG4pKXJldHVybiBxdCh0LFd0KG4pKTtyZXR1cm5cIlwifShuLnN0YXRpY0NsYXNzLG4uY2xhc3MpfWZ1bmN0aW9uIEp0KHQsbil7cmV0dXJue3N0YXRpY0NsYXNzOnF0KHQuc3RhdGljQ2xhc3Msbi5zdGF0aWNDbGFzcyksY2xhc3M6ZSh0LmNsYXNzKT9bdC5jbGFzcyxuLmNsYXNzXTpuLmNsYXNzfX1mdW5jdGlvbiBxdCh0LGUpe3JldHVybiB0P2U/dCtcIiBcIitlOnQ6ZXx8XCJcIn1mdW5jdGlvbiBXdCh0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT9mdW5jdGlvbih0KXtmb3IodmFyIG4scj1cIlwiLGk9MCxvPXQubGVuZ3RoO2k8bztpKyspZShuPVd0KHRbaV0pKSYmXCJcIiE9PW4mJihyJiYocis9XCIgXCIpLHIrPW4pO3JldHVybiByfSh0KTppKHQpP2Z1bmN0aW9uKHQpe3ZhciBlPVwiXCI7Zm9yKHZhciBuIGluIHQpdFtuXSYmKGUmJihlKz1cIiBcIiksZSs9bik7cmV0dXJuIGV9KHQpOlwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6XCJcIn1mdW5jdGlvbiBHdCh0KXtyZXR1cm4gYmkodCk/XCJzdmdcIjpcIm1hdGhcIj09PXQ/XCJtYXRoXCI6dm9pZCAwfWZ1bmN0aW9uIFp0KHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpO3JldHVybiBlfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfXJldHVybiB0fWZ1bmN0aW9uIFh0KHQsZSl7dmFyIG49dC5kYXRhLnJlZjtpZihuKXt2YXIgcj10LmNvbnRleHQsaT10LmNvbXBvbmVudEluc3RhbmNlfHx0LmVsbSxvPXIuJHJlZnM7ZT9BcnJheS5pc0FycmF5KG9bbl0pP2wob1tuXSxpKTpvW25dPT09aSYmKG9bbl09dm9pZCAwKTp0LmRhdGEucmVmSW5Gb3I/QXJyYXkuaXNBcnJheShvW25dKT9vW25dLmluZGV4T2YoaSk8MCYmb1tuXS5wdXNoKGkpOm9bbl09W2ldOm9bbl09aX19ZnVuY3Rpb24gWXQocixpKXtyZXR1cm4gci5rZXk9PT1pLmtleSYmKHIudGFnPT09aS50YWcmJnIuaXNDb21tZW50PT09aS5pc0NvbW1lbnQmJmUoci5kYXRhKT09PWUoaS5kYXRhKSYmZnVuY3Rpb24odCxuKXtpZihcImlucHV0XCIhPT10LnRhZylyZXR1cm4hMDt2YXIgcixpPWUocj10LmRhdGEpJiZlKHI9ci5hdHRycykmJnIudHlwZSxvPWUocj1uLmRhdGEpJiZlKHI9ci5hdHRycykmJnIudHlwZTtyZXR1cm4gaT09PW98fHdpKGkpJiZ3aShvKX0ocixpKXx8bihyLmlzQXN5bmNQbGFjZWhvbGRlcikmJnIuYXN5bmNGYWN0b3J5PT09aS5hc3luY0ZhY3RvcnkmJnQoaS5hc3luY0ZhY3RvcnkuZXJyb3IpKX1mdW5jdGlvbiBRdCh0LG4scil7dmFyIGksbyxhPXt9O2ZvcihpPW47aTw9cjsrK2kpZShvPXRbaV0ua2V5KSYmKGFbb109aSk7cmV0dXJuIGF9ZnVuY3Rpb24gdGUodCxlKXsodC5kYXRhLmRpcmVjdGl2ZXN8fGUuZGF0YS5kaXJlY3RpdmVzKSYmZnVuY3Rpb24odCxlKXt2YXIgbixyLGksbz10PT09QWksYT1lPT09QWkscz1lZSh0LmRhdGEuZGlyZWN0aXZlcyx0LmNvbnRleHQpLGM9ZWUoZS5kYXRhLmRpcmVjdGl2ZXMsZS5jb250ZXh0KSx1PVtdLGw9W107Zm9yKG4gaW4gYylyPXNbbl0saT1jW25dLHI/KGkub2xkVmFsdWU9ci52YWx1ZSxuZShpLFwidXBkYXRlXCIsZSx0KSxpLmRlZiYmaS5kZWYuY29tcG9uZW50VXBkYXRlZCYmbC5wdXNoKGkpKToobmUoaSxcImJpbmRcIixlLHQpLGkuZGVmJiZpLmRlZi5pbnNlcnRlZCYmdS5wdXNoKGkpKTtpZih1Lmxlbmd0aCl7dmFyIGY9ZnVuY3Rpb24oKXtmb3IodmFyIG49MDtuPHUubGVuZ3RoO24rKyluZSh1W25dLFwiaW5zZXJ0ZWRcIixlLHQpfTtvP1koZSxcImluc2VydFwiLGYpOmYoKX1sLmxlbmd0aCYmWShlLFwicG9zdHBhdGNoXCIsZnVuY3Rpb24oKXtmb3IodmFyIG49MDtuPGwubGVuZ3RoO24rKyluZShsW25dLFwiY29tcG9uZW50VXBkYXRlZFwiLGUsdCl9KTtpZighbylmb3IobiBpbiBzKWNbbl18fG5lKHNbbl0sXCJ1bmJpbmRcIix0LHQsYSl9KHQsZSl9ZnVuY3Rpb24gZWUodCxlKXt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKCF0KXJldHVybiBuO3ZhciByLGk7Zm9yKHI9MDtyPHQubGVuZ3RoO3IrKykoaT10W3JdKS5tb2RpZmllcnN8fChpLm1vZGlmaWVycz1UaSksbltmdW5jdGlvbih0KXtyZXR1cm4gdC5yYXdOYW1lfHx0Lm5hbWUrXCIuXCIrT2JqZWN0LmtleXModC5tb2RpZmllcnN8fHt9KS5qb2luKFwiLlwiKX0oaSldPWksaS5kZWY9UihlLiRvcHRpb25zLFwiZGlyZWN0aXZlc1wiLGkubmFtZSk7cmV0dXJuIG59ZnVuY3Rpb24gbmUodCxlLG4scixpKXt2YXIgbz10LmRlZiYmdC5kZWZbZV07aWYobyl0cnl7byhuLmVsbSx0LG4scixpKX1jYXRjaChyKXtWKHIsbi5jb250ZXh0LFwiZGlyZWN0aXZlIFwiK3QubmFtZStcIiBcIitlK1wiIGhvb2tcIil9fWZ1bmN0aW9uIHJlKG4scil7dmFyIGk9ci5jb21wb25lbnRPcHRpb25zO2lmKCEoZShpKSYmITE9PT1pLkN0b3Iub3B0aW9ucy5pbmhlcml0QXR0cnN8fHQobi5kYXRhLmF0dHJzKSYmdChyLmRhdGEuYXR0cnMpKSl7dmFyIG8sYSxzPXIuZWxtLGM9bi5kYXRhLmF0dHJzfHx7fSx1PXIuZGF0YS5hdHRyc3x8e307ZSh1Ll9fb2JfXykmJih1PXIuZGF0YS5hdHRycz1oKHt9LHUpKTtmb3IobyBpbiB1KWE9dVtvXSxjW29dIT09YSYmaWUocyxvLGEpOyhRbnx8ZXIpJiZ1LnZhbHVlIT09Yy52YWx1ZSYmaWUocyxcInZhbHVlXCIsdS52YWx1ZSk7Zm9yKG8gaW4gYyl0KHVbb10pJiYoaGkobyk/cy5yZW1vdmVBdHRyaWJ1dGVOUyh2aSxtaShvKSk6cGkobyl8fHMucmVtb3ZlQXR0cmlidXRlKG8pKX19ZnVuY3Rpb24gaWUodCxlLG4pe2lmKGRpKGUpKXlpKG4pP3QucmVtb3ZlQXR0cmlidXRlKGUpOihuPVwiYWxsb3dmdWxsc2NyZWVuXCI9PT1lJiZcIkVNQkVEXCI9PT10LnRhZ05hbWU/XCJ0cnVlXCI6ZSx0LnNldEF0dHJpYnV0ZShlLG4pKTtlbHNlIGlmKHBpKGUpKXQuc2V0QXR0cmlidXRlKGUseWkobil8fFwiZmFsc2VcIj09PW4/XCJmYWxzZVwiOlwidHJ1ZVwiKTtlbHNlIGlmKGhpKGUpKXlpKG4pP3QucmVtb3ZlQXR0cmlidXRlTlModmksbWkoZSkpOnQuc2V0QXR0cmlidXRlTlModmksZSxuKTtlbHNlIGlmKHlpKG4pKXQucmVtb3ZlQXR0cmlidXRlKGUpO2Vsc2V7aWYoUW4mJiF0ciYmXCJURVhUQVJFQVwiPT09dC50YWdOYW1lJiZcInBsYWNlaG9sZGVyXCI9PT1lJiYhdC5fX2llcGgpe3ZhciByPWZ1bmN0aW9uKGUpe2Uuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIixyKX07dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixyKSx0Ll9faWVwaD0hMH10LnNldEF0dHJpYnV0ZShlLG4pfX1mdW5jdGlvbiBvZShuLHIpe3ZhciBpPXIuZWxtLG89ci5kYXRhLGE9bi5kYXRhO2lmKCEodChvLnN0YXRpY0NsYXNzKSYmdChvLmNsYXNzKSYmKHQoYSl8fHQoYS5zdGF0aWNDbGFzcykmJnQoYS5jbGFzcykpKSl7dmFyIHM9S3QociksYz1pLl90cmFuc2l0aW9uQ2xhc3NlcztlKGMpJiYocz1xdChzLFd0KGMpKSkscyE9PWkuX3ByZXZDbGFzcyYmKGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKSxpLl9wcmV2Q2xhc3M9cyl9fWZ1bmN0aW9uIGFlKHQpe2Z1bmN0aW9uIGUoKXsoYXx8KGE9W10pKS5wdXNoKHQuc2xpY2UodixpKS50cmltKCkpLHY9aSsxfXZhciBuLHIsaSxvLGEscz0hMSxjPSExLHU9ITEsbD0hMSxmPTAscD0wLGQ9MCx2PTA7Zm9yKGk9MDtpPHQubGVuZ3RoO2krKylpZihyPW4sbj10LmNoYXJDb2RlQXQoaSkscykzOT09PW4mJjkyIT09ciYmKHM9ITEpO2Vsc2UgaWYoYykzND09PW4mJjkyIT09ciYmKGM9ITEpO2Vsc2UgaWYodSk5Nj09PW4mJjkyIT09ciYmKHU9ITEpO2Vsc2UgaWYobCk0Nz09PW4mJjkyIT09ciYmKGw9ITEpO2Vsc2UgaWYoMTI0IT09bnx8MTI0PT09dC5jaGFyQ29kZUF0KGkrMSl8fDEyND09PXQuY2hhckNvZGVBdChpLTEpfHxmfHxwfHxkKXtzd2l0Y2gobil7Y2FzZSAzNDpjPSEwO2JyZWFrO2Nhc2UgMzk6cz0hMDticmVhaztjYXNlIDk2OnU9ITA7YnJlYWs7Y2FzZSA0MDpkKys7YnJlYWs7Y2FzZSA0MTpkLS07YnJlYWs7Y2FzZSA5MTpwKys7YnJlYWs7Y2FzZSA5MzpwLS07YnJlYWs7Y2FzZSAxMjM6ZisrO2JyZWFrO2Nhc2UgMTI1OmYtLX1pZig0Nz09PW4pe2Zvcih2YXIgaD1pLTEsbT12b2lkIDA7aD49MCYmXCIgXCI9PT0obT10LmNoYXJBdChoKSk7aC0tKTttJiZJaS50ZXN0KG0pfHwobD0hMCl9fWVsc2Ugdm9pZCAwPT09bz8odj1pKzEsbz10LnNsaWNlKDAsaSkudHJpbSgpKTplKCk7aWYodm9pZCAwPT09bz9vPXQuc2xpY2UoMCxpKS50cmltKCk6MCE9PXYmJmUoKSxhKWZvcihpPTA7aTxhLmxlbmd0aDtpKyspbz1mdW5jdGlvbih0LGUpe3ZhciBuPWUuaW5kZXhPZihcIihcIik7e2lmKG48MClyZXR1cm4nX2YoXCInK2UrJ1wiKSgnK3QrXCIpXCI7dmFyIHI9ZS5zbGljZSgwLG4pLGk9ZS5zbGljZShuKzEpO3JldHVybidfZihcIicrcisnXCIpKCcrdCtcIixcIitpfX0obyxhW2ldKTtyZXR1cm4gb31mdW5jdGlvbiBzZSh0KXtjb25zb2xlLmVycm9yKFwiW1Z1ZSBjb21waWxlcl06IFwiK3QpfWZ1bmN0aW9uIGNlKHQsZSl7cmV0dXJuIHQ/dC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHRbZV19KS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHR9KTpbXX1mdW5jdGlvbiB1ZSh0LGUsbil7KHQucHJvcHN8fCh0LnByb3BzPVtdKSkucHVzaCh7bmFtZTplLHZhbHVlOm59KSx0LnBsYWluPSExfWZ1bmN0aW9uIGxlKHQsZSxuKXsodC5hdHRyc3x8KHQuYXR0cnM9W10pKS5wdXNoKHtuYW1lOmUsdmFsdWU6bn0pLHQucGxhaW49ITF9ZnVuY3Rpb24gZmUodCxlLG4pe3QuYXR0cnNNYXBbZV09bix0LmF0dHJzTGlzdC5wdXNoKHtuYW1lOmUsdmFsdWU6bn0pfWZ1bmN0aW9uIHBlKHQsZSxuLHIsaSxvKXsodC5kaXJlY3RpdmVzfHwodC5kaXJlY3RpdmVzPVtdKSkucHVzaCh7bmFtZTplLHJhd05hbWU6bix2YWx1ZTpyLGFyZzppLG1vZGlmaWVyczpvfSksdC5wbGFpbj0hMX1mdW5jdGlvbiBkZSh0LGUsbixyLGksbyl7KHI9cnx8am4pLmNhcHR1cmUmJihkZWxldGUgci5jYXB0dXJlLGU9XCIhXCIrZSksci5vbmNlJiYoZGVsZXRlIHIub25jZSxlPVwiflwiK2UpLHIucGFzc2l2ZSYmKGRlbGV0ZSByLnBhc3NpdmUsZT1cIiZcIitlKSxcImNsaWNrXCI9PT1lJiYoci5yaWdodD8oZT1cImNvbnRleHRtZW51XCIsZGVsZXRlIHIucmlnaHQpOnIubWlkZGxlJiYoZT1cIm1vdXNldXBcIikpO3ZhciBhO3IubmF0aXZlPyhkZWxldGUgci5uYXRpdmUsYT10Lm5hdGl2ZUV2ZW50c3x8KHQubmF0aXZlRXZlbnRzPXt9KSk6YT10LmV2ZW50c3x8KHQuZXZlbnRzPXt9KTt2YXIgcz17dmFsdWU6bn07ciE9PWpuJiYocy5tb2RpZmllcnM9cik7dmFyIGM9YVtlXTtBcnJheS5pc0FycmF5KGMpP2k/Yy51bnNoaWZ0KHMpOmMucHVzaChzKTphW2VdPWM/aT9bcyxjXTpbYyxzXTpzLHQucGxhaW49ITF9ZnVuY3Rpb24gdmUodCxlLG4pe3ZhciByPWhlKHQsXCI6XCIrZSl8fGhlKHQsXCJ2LWJpbmQ6XCIrZSk7aWYobnVsbCE9cilyZXR1cm4gYWUocik7aWYoITEhPT1uKXt2YXIgaT1oZSh0LGUpO2lmKG51bGwhPWkpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGkpfX1mdW5jdGlvbiBoZSh0LGUsbil7dmFyIHI7aWYobnVsbCE9KHI9dC5hdHRyc01hcFtlXSkpZm9yKHZhciBpPXQuYXR0cnNMaXN0LG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYoaVtvXS5uYW1lPT09ZSl7aS5zcGxpY2UobywxKTticmVha31yZXR1cm4gbiYmZGVsZXRlIHQuYXR0cnNNYXBbZV0scn1mdW5jdGlvbiBtZSh0LGUsbil7dmFyIHI9bnx8e30saT1cIiQkdlwiO3IudHJpbSYmKGk9XCIodHlwZW9mICQkdiA9PT0gJ3N0cmluZyc/ICQkdi50cmltKCk6ICQkdilcIiksci5udW1iZXImJihpPVwiX24oXCIraStcIilcIik7dmFyIG89eWUoZSxpKTt0Lm1vZGVsPXt2YWx1ZTpcIihcIitlK1wiKVwiLGV4cHJlc3Npb246J1wiJytlKydcIicsY2FsbGJhY2s6XCJmdW5jdGlvbiAoJCR2KSB7XCIrbytcIn1cIn19ZnVuY3Rpb24geWUodCxlKXt2YXIgbj1mdW5jdGlvbih0KXtpZihlaT10Lmxlbmd0aCx0LmluZGV4T2YoXCJbXCIpPDB8fHQubGFzdEluZGV4T2YoXCJdXCIpPGVpLTEpcmV0dXJuKGlpPXQubGFzdEluZGV4T2YoXCIuXCIpKT4tMT97ZXhwOnQuc2xpY2UoMCxpaSksa2V5OidcIicrdC5zbGljZShpaSsxKSsnXCInfTp7ZXhwOnQsa2V5Om51bGx9O25pPXQsaWk9b2k9YWk9MDtmb3IoOyFfZSgpOyliZShyaT1nZSgpKT8kZShyaSk6OTE9PT1yaSYmZnVuY3Rpb24odCl7dmFyIGU9MTtvaT1paTtmb3IoOyFfZSgpOylpZih0PWdlKCksYmUodCkpJGUodCk7ZWxzZSBpZig5MT09PXQmJmUrKyw5Mz09PXQmJmUtLSwwPT09ZSl7YWk9aWk7YnJlYWt9fShyaSk7cmV0dXJue2V4cDp0LnNsaWNlKDAsb2kpLGtleTp0LnNsaWNlKG9pKzEsYWkpfX0odCk7cmV0dXJuIG51bGw9PT1uLmtleT90K1wiPVwiK2U6XCIkc2V0KFwiK24uZXhwK1wiLCBcIituLmtleStcIiwgXCIrZStcIilcIn1mdW5jdGlvbiBnZSgpe3JldHVybiBuaS5jaGFyQ29kZUF0KCsraWkpfWZ1bmN0aW9uIF9lKCl7cmV0dXJuIGlpPj1laX1mdW5jdGlvbiBiZSh0KXtyZXR1cm4gMzQ9PT10fHwzOT09PXR9ZnVuY3Rpb24gJGUodCl7Zm9yKHZhciBlPXQ7IV9lKCkmJih0PWdlKCkpIT09ZTspO31mdW5jdGlvbiBDZSh0LGUsbixyLGkpe2U9ZnVuY3Rpb24odCl7cmV0dXJuIHQuX3dpdGhUYXNrfHwodC5fd2l0aFRhc2s9ZnVuY3Rpb24oKXtFcj0hMDt2YXIgZT10LmFwcGx5KG51bGwsYXJndW1lbnRzKTtyZXR1cm4gRXI9ITEsZX0pfShlKSxuJiYoZT1mdW5jdGlvbih0LGUsbil7dmFyIHI9c2k7cmV0dXJuIGZ1bmN0aW9uIGkoKXtudWxsIT09dC5hcHBseShudWxsLGFyZ3VtZW50cykmJndlKGUsaSxuLHIpfX0oZSx0LHIpKSxzaS5hZGRFdmVudExpc3RlbmVyKHQsZSxvcj97Y2FwdHVyZTpyLHBhc3NpdmU6aX06cil9ZnVuY3Rpb24gd2UodCxlLG4scil7KHJ8fHNpKS5yZW1vdmVFdmVudExpc3RlbmVyKHQsZS5fd2l0aFRhc2t8fGUsbil9ZnVuY3Rpb24geGUobixyKXtpZighdChuLmRhdGEub24pfHwhdChyLmRhdGEub24pKXt2YXIgaT1yLmRhdGEub258fHt9LG89bi5kYXRhLm9ufHx7fTtzaT1yLmVsbSxmdW5jdGlvbih0KXtpZihlKHRbTGldKSl7dmFyIG49UW4/XCJjaGFuZ2VcIjpcImlucHV0XCI7dFtuXT1bXS5jb25jYXQodFtMaV0sdFtuXXx8W10pLGRlbGV0ZSB0W0xpXX1lKHRbTWldKSYmKHQuY2hhbmdlPVtdLmNvbmNhdCh0W01pXSx0LmNoYW5nZXx8W10pLGRlbGV0ZSB0W01pXSl9KGkpLFgoaSxvLENlLHdlLHIuY29udGV4dCksc2k9dm9pZCAwfX1mdW5jdGlvbiBrZShuLHIpe2lmKCF0KG4uZGF0YS5kb21Qcm9wcyl8fCF0KHIuZGF0YS5kb21Qcm9wcykpe3ZhciBpLG8sYT1yLmVsbSxzPW4uZGF0YS5kb21Qcm9wc3x8e30sdT1yLmRhdGEuZG9tUHJvcHN8fHt9O2UodS5fX29iX18pJiYodT1yLmRhdGEuZG9tUHJvcHM9aCh7fSx1KSk7Zm9yKGkgaW4gcyl0KHVbaV0pJiYoYVtpXT1cIlwiKTtmb3IoaSBpbiB1KXtpZihvPXVbaV0sXCJ0ZXh0Q29udGVudFwiPT09aXx8XCJpbm5lckhUTUxcIj09PWkpe2lmKHIuY2hpbGRyZW4mJihyLmNoaWxkcmVuLmxlbmd0aD0wKSxvPT09c1tpXSljb250aW51ZTsxPT09YS5jaGlsZE5vZGVzLmxlbmd0aCYmYS5yZW1vdmVDaGlsZChhLmNoaWxkTm9kZXNbMF0pfWlmKFwidmFsdWVcIj09PWkpe2EuX3ZhbHVlPW87dmFyIGw9dChvKT9cIlwiOlN0cmluZyhvKTsoZnVuY3Rpb24odCxuKXtyZXR1cm4hdC5jb21wb3NpbmcmJihcIk9QVElPTlwiPT09dC50YWdOYW1lfHxmdW5jdGlvbih0LGUpe3ZhciBuPSEwO3RyeXtuPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPT10fWNhdGNoKHQpe31yZXR1cm4gbiYmdC52YWx1ZSE9PWV9KHQsbil8fGZ1bmN0aW9uKHQsbil7dmFyIHI9dC52YWx1ZSxpPXQuX3ZNb2RpZmllcnM7aWYoZShpKSl7aWYoaS5sYXp5KXJldHVybiExO2lmKGkubnVtYmVyKXJldHVybiBjKHIpIT09YyhuKTtpZihpLnRyaW0pcmV0dXJuIHIudHJpbSgpIT09bi50cmltKCl9cmV0dXJuIHIhPT1ufSh0LG4pKX0pKGEsbCkmJihhLnZhbHVlPWwpfWVsc2UgYVtpXT1vfX19ZnVuY3Rpb24gQWUodCl7dmFyIGU9T2UodC5zdHlsZSk7cmV0dXJuIHQuc3RhdGljU3R5bGU/aCh0LnN0YXRpY1N0eWxlLGUpOmV9ZnVuY3Rpb24gT2UodCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/bSh0KTpcInN0cmluZ1wiPT10eXBlb2YgdD9GaSh0KTp0fWZ1bmN0aW9uIFNlKG4scil7dmFyIGk9ci5kYXRhLG89bi5kYXRhO2lmKCEodChpLnN0YXRpY1N0eWxlKSYmdChpLnN0eWxlKSYmdChvLnN0YXRpY1N0eWxlKSYmdChvLnN0eWxlKSkpe3ZhciBhLHMsYz1yLmVsbSx1PW8uc3RhdGljU3R5bGUsbD1vLm5vcm1hbGl6ZWRTdHlsZXx8by5zdHlsZXx8e30sZj11fHxsLHA9T2Uoci5kYXRhLnN0eWxlKXx8e307ci5kYXRhLm5vcm1hbGl6ZWRTdHlsZT1lKHAuX19vYl9fKT9oKHt9LHApOnA7dmFyIGQ9ZnVuY3Rpb24odCxlKXt2YXIgbixyPXt9O2lmKGUpZm9yKHZhciBpPXQ7aS5jb21wb25lbnRJbnN0YW5jZTspKGk9aS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUpJiZpLmRhdGEmJihuPUFlKGkuZGF0YSkpJiZoKHIsbik7KG49QWUodC5kYXRhKSkmJmgocixuKTtmb3IodmFyIG89dDtvPW8ucGFyZW50OylvLmRhdGEmJihuPUFlKG8uZGF0YSkpJiZoKHIsbik7cmV0dXJuIHJ9KHIsITApO2ZvcihzIGluIGYpdChkW3NdKSYmQmkoYyxzLFwiXCIpO2ZvcihzIGluIGQpKGE9ZFtzXSkhPT1mW3NdJiZCaShjLHMsbnVsbD09YT9cIlwiOmEpfX1mdW5jdGlvbiBUZSh0LGUpe2lmKGUmJihlPWUudHJpbSgpKSlpZih0LmNsYXNzTGlzdCllLmluZGV4T2YoXCIgXCIpPi0xP2Uuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiB0LmNsYXNzTGlzdC5hZGQoZSl9KTp0LmNsYXNzTGlzdC5hZGQoZSk7ZWxzZXt2YXIgbj1cIiBcIisodC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCI7bi5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwobitlKS50cmltKCkpfX1mdW5jdGlvbiBFZSh0LGUpe2lmKGUmJihlPWUudHJpbSgpKSlpZih0LmNsYXNzTGlzdCllLmluZGV4T2YoXCIgXCIpPi0xP2Uuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiB0LmNsYXNzTGlzdC5yZW1vdmUoZSl9KTp0LmNsYXNzTGlzdC5yZW1vdmUoZSksdC5jbGFzc0xpc3QubGVuZ3RofHx0LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO2Vsc2V7Zm9yKHZhciBuPVwiIFwiKyh0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIixyPVwiIFwiK2UrXCIgXCI7bi5pbmRleE9mKHIpPj0wOyluPW4ucmVwbGFjZShyLFwiIFwiKTsobj1uLnRyaW0oKSk/dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLG4pOnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIil9fWZ1bmN0aW9uIGplKHQpe2lmKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgZT17fTtyZXR1cm4hMSE9PXQuY3NzJiZoKGUsS2kodC5uYW1lfHxcInZcIikpLGgoZSx0KSxlfXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P0tpKHQpOnZvaWQgMH19ZnVuY3Rpb24gTmUodCl7UWkoZnVuY3Rpb24oKXtRaSh0KX0pfWZ1bmN0aW9uIEllKHQsZSl7dmFyIG49dC5fdHJhbnNpdGlvbkNsYXNzZXN8fCh0Ll90cmFuc2l0aW9uQ2xhc3Nlcz1bXSk7bi5pbmRleE9mKGUpPDAmJihuLnB1c2goZSksVGUodCxlKSl9ZnVuY3Rpb24gTGUodCxlKXt0Ll90cmFuc2l0aW9uQ2xhc3NlcyYmbCh0Ll90cmFuc2l0aW9uQ2xhc3NlcyxlKSxFZSh0LGUpfWZ1bmN0aW9uIE1lKHQsZSxuKXt2YXIgcj1EZSh0LGUpLGk9ci50eXBlLG89ci50aW1lb3V0LGE9ci5wcm9wQ291bnQ7aWYoIWkpcmV0dXJuIG4oKTt2YXIgcz1pPT09cWk/Wmk6WWksYz0wLHU9ZnVuY3Rpb24oKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIocyxsKSxuKCl9LGw9ZnVuY3Rpb24oZSl7ZS50YXJnZXQ9PT10JiYrK2M+PWEmJnUoKX07c2V0VGltZW91dChmdW5jdGlvbigpe2M8YSYmdSgpfSxvKzEpLHQuYWRkRXZlbnRMaXN0ZW5lcihzLGwpfWZ1bmN0aW9uIERlKHQsZSl7dmFyIG4scj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxpPXJbR2krXCJEZWxheVwiXS5zcGxpdChcIiwgXCIpLG89cltHaStcIkR1cmF0aW9uXCJdLnNwbGl0KFwiLCBcIiksYT1QZShpLG8pLHM9cltYaStcIkRlbGF5XCJdLnNwbGl0KFwiLCBcIiksYz1yW1hpK1wiRHVyYXRpb25cIl0uc3BsaXQoXCIsIFwiKSx1PVBlKHMsYyksbD0wLGY9MDtlPT09cWk/YT4wJiYobj1xaSxsPWEsZj1vLmxlbmd0aCk6ZT09PVdpP3U+MCYmKG49V2ksbD11LGY9Yy5sZW5ndGgpOmY9KG49KGw9TWF0aC5tYXgoYSx1KSk+MD9hPnU/cWk6V2k6bnVsbCk/bj09PXFpP28ubGVuZ3RoOmMubGVuZ3RoOjA7cmV0dXJue3R5cGU6bix0aW1lb3V0OmwscHJvcENvdW50OmYsaGFzVHJhbnNmb3JtOm49PT1xaSYmdG8udGVzdChyW0dpK1wiUHJvcGVydHlcIl0pfX1mdW5jdGlvbiBQZSh0LGUpe2Zvcig7dC5sZW5ndGg8ZS5sZW5ndGg7KXQ9dC5jb25jYXQodCk7cmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsZS5tYXAoZnVuY3Rpb24oZSxuKXtyZXR1cm4gRmUoZSkrRmUodFtuXSl9KSl9ZnVuY3Rpb24gRmUodCl7cmV0dXJuIDFlMypOdW1iZXIodC5zbGljZSgwLC0xKSl9ZnVuY3Rpb24gUmUobixyKXt2YXIgbz1uLmVsbTtlKG8uX2xlYXZlQ2IpJiYoby5fbGVhdmVDYi5jYW5jZWxsZWQ9ITAsby5fbGVhdmVDYigpKTt2YXIgYT1qZShuLmRhdGEudHJhbnNpdGlvbik7aWYoIXQoYSkmJiFlKG8uX2VudGVyQ2IpJiYxPT09by5ub2RlVHlwZSl7Zm9yKHZhciBzPWEuY3NzLHU9YS50eXBlLGw9YS5lbnRlckNsYXNzLGY9YS5lbnRlclRvQ2xhc3MscD1hLmVudGVyQWN0aXZlQ2xhc3MsZD1hLmFwcGVhckNsYXNzLHY9YS5hcHBlYXJUb0NsYXNzLGg9YS5hcHBlYXJBY3RpdmVDbGFzcyxtPWEuYmVmb3JlRW50ZXIseT1hLmVudGVyLGc9YS5hZnRlckVudGVyLF89YS5lbnRlckNhbmNlbGxlZCwkPWEuYmVmb3JlQXBwZWFyLEM9YS5hcHBlYXIsdz1hLmFmdGVyQXBwZWFyLHg9YS5hcHBlYXJDYW5jZWxsZWQsaz1hLmR1cmF0aW9uLEE9UHIsTz1Qci4kdm5vZGU7TyYmTy5wYXJlbnQ7KUE9KE89Ty5wYXJlbnQpLmNvbnRleHQ7dmFyIFM9IUEuX2lzTW91bnRlZHx8IW4uaXNSb290SW5zZXJ0O2lmKCFTfHxDfHxcIlwiPT09Qyl7dmFyIFQ9UyYmZD9kOmwsRT1TJiZoP2g6cCxqPVMmJnY/djpmLE49Uz8kfHxtOm0sST1TJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBDP0M6eSxMPVM/d3x8ZzpnLE09Uz94fHxfOl8sRD1jKGkoayk/ay5lbnRlcjprKSxQPSExIT09cyYmIXRyLEY9VWUoSSksUj1vLl9lbnRlckNiPWIoZnVuY3Rpb24oKXtQJiYoTGUobyxqKSxMZShvLEUpKSxSLmNhbmNlbGxlZD8oUCYmTGUobyxUKSxNJiZNKG8pKTpMJiZMKG8pLG8uX2VudGVyQ2I9bnVsbH0pO24uZGF0YS5zaG93fHxZKG4sXCJpbnNlcnRcIixmdW5jdGlvbigpe3ZhciB0PW8ucGFyZW50Tm9kZSxlPXQmJnQuX3BlbmRpbmcmJnQuX3BlbmRpbmdbbi5rZXldO2UmJmUudGFnPT09bi50YWcmJmUuZWxtLl9sZWF2ZUNiJiZlLmVsbS5fbGVhdmVDYigpLEkmJkkobyxSKX0pLE4mJk4obyksUCYmKEllKG8sVCksSWUobyxFKSxOZShmdW5jdGlvbigpe0llKG8saiksTGUobyxUKSxSLmNhbmNlbGxlZHx8Rnx8KEJlKEQpP3NldFRpbWVvdXQoUixEKTpNZShvLHUsUikpfSkpLG4uZGF0YS5zaG93JiYociYmcigpLEkmJkkobyxSKSksUHx8Rnx8UigpfX19ZnVuY3Rpb24gSGUobixyKXtmdW5jdGlvbiBvKCl7eC5jYW5jZWxsZWR8fChuLmRhdGEuc2hvd3x8KChhLnBhcmVudE5vZGUuX3BlbmRpbmd8fChhLnBhcmVudE5vZGUuX3BlbmRpbmc9e30pKVtuLmtleV09biksdiYmdihhKSwkJiYoSWUoYSxmKSxJZShhLGQpLE5lKGZ1bmN0aW9uKCl7SWUoYSxwKSxMZShhLGYpLHguY2FuY2VsbGVkfHxDfHwoQmUodyk/c2V0VGltZW91dCh4LHcpOk1lKGEsbCx4KSl9KSksaCYmaChhLHgpLCR8fEN8fHgoKSl9dmFyIGE9bi5lbG07ZShhLl9lbnRlckNiKSYmKGEuX2VudGVyQ2IuY2FuY2VsbGVkPSEwLGEuX2VudGVyQ2IoKSk7dmFyIHM9amUobi5kYXRhLnRyYW5zaXRpb24pO2lmKHQocyl8fDEhPT1hLm5vZGVUeXBlKXJldHVybiByKCk7aWYoIWUoYS5fbGVhdmVDYikpe3ZhciB1PXMuY3NzLGw9cy50eXBlLGY9cy5sZWF2ZUNsYXNzLHA9cy5sZWF2ZVRvQ2xhc3MsZD1zLmxlYXZlQWN0aXZlQ2xhc3Msdj1zLmJlZm9yZUxlYXZlLGg9cy5sZWF2ZSxtPXMuYWZ0ZXJMZWF2ZSx5PXMubGVhdmVDYW5jZWxsZWQsZz1zLmRlbGF5TGVhdmUsXz1zLmR1cmF0aW9uLCQ9ITEhPT11JiYhdHIsQz1VZShoKSx3PWMoaShfKT9fLmxlYXZlOl8pLHg9YS5fbGVhdmVDYj1iKGZ1bmN0aW9uKCl7YS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuX3BlbmRpbmcmJihhLnBhcmVudE5vZGUuX3BlbmRpbmdbbi5rZXldPW51bGwpLCQmJihMZShhLHApLExlKGEsZCkpLHguY2FuY2VsbGVkPygkJiZMZShhLGYpLHkmJnkoYSkpOihyKCksbSYmbShhKSksYS5fbGVhdmVDYj1udWxsfSk7Zz9nKG8pOm8oKX19ZnVuY3Rpb24gQmUodCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJiFpc05hTih0KX1mdW5jdGlvbiBVZShuKXtpZih0KG4pKXJldHVybiExO3ZhciByPW4uZm5zO3JldHVybiBlKHIpP1VlKEFycmF5LmlzQXJyYXkocik/clswXTpyKToobi5fbGVuZ3RofHxuLmxlbmd0aCk+MX1mdW5jdGlvbiBWZSh0LGUpeyEwIT09ZS5kYXRhLnNob3cmJlJlKGUpfWZ1bmN0aW9uIHplKHQsZSxuKXtLZSh0LGUsbiksKFFufHxlcikmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtLZSh0LGUsbil9LDApfWZ1bmN0aW9uIEtlKHQsZSxuKXt2YXIgcj1lLnZhbHVlLGk9dC5tdWx0aXBsZTtpZighaXx8QXJyYXkuaXNBcnJheShyKSl7Zm9yKHZhciBvLGEscz0wLGM9dC5vcHRpb25zLmxlbmd0aDtzPGM7cysrKWlmKGE9dC5vcHRpb25zW3NdLGkpbz1fKHIscWUoYSkpPi0xLGEuc2VsZWN0ZWQhPT1vJiYoYS5zZWxlY3RlZD1vKTtlbHNlIGlmKGcocWUoYSkscikpcmV0dXJuIHZvaWQodC5zZWxlY3RlZEluZGV4IT09cyYmKHQuc2VsZWN0ZWRJbmRleD1zKSk7aXx8KHQuc2VsZWN0ZWRJbmRleD0tMSl9fWZ1bmN0aW9uIEplKHQsZSl7cmV0dXJuIGUuZXZlcnkoZnVuY3Rpb24oZSl7cmV0dXJuIWcoZSx0KX0pfWZ1bmN0aW9uIHFlKHQpe3JldHVyblwiX3ZhbHVlXCJpbiB0P3QuX3ZhbHVlOnQudmFsdWV9ZnVuY3Rpb24gV2UodCl7dC50YXJnZXQuY29tcG9zaW5nPSEwfWZ1bmN0aW9uIEdlKHQpe3QudGFyZ2V0LmNvbXBvc2luZyYmKHQudGFyZ2V0LmNvbXBvc2luZz0hMSxaZSh0LnRhcmdldCxcImlucHV0XCIpKX1mdW5jdGlvbiBaZSh0LGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtuLmluaXRFdmVudChlLCEwLCEwKSx0LmRpc3BhdGNoRXZlbnQobil9ZnVuY3Rpb24gWGUodCl7cmV0dXJuIXQuY29tcG9uZW50SW5zdGFuY2V8fHQuZGF0YSYmdC5kYXRhLnRyYW5zaXRpb24/dDpYZSh0LmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSl9ZnVuY3Rpb24gWWUodCl7dmFyIGU9dCYmdC5jb21wb25lbnRPcHRpb25zO3JldHVybiBlJiZlLkN0b3Iub3B0aW9ucy5hYnN0cmFjdD9ZZShpdChlLmNoaWxkcmVuKSk6dH1mdW5jdGlvbiBRZSh0KXt2YXIgZT17fSxuPXQuJG9wdGlvbnM7Zm9yKHZhciByIGluIG4ucHJvcHNEYXRhKWVbcl09dFtyXTt2YXIgaT1uLl9wYXJlbnRMaXN0ZW5lcnM7Zm9yKHZhciBvIGluIGkpZVtQbihvKV09aVtvXTtyZXR1cm4gZX1mdW5jdGlvbiB0bih0LGUpe2lmKC9cXGQta2VlcC1hbGl2ZSQvLnRlc3QoZS50YWcpKXJldHVybiB0KFwia2VlcC1hbGl2ZVwiLHtwcm9wczplLmNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhfSl9ZnVuY3Rpb24gZW4odCl7dC5lbG0uX21vdmVDYiYmdC5lbG0uX21vdmVDYigpLHQuZWxtLl9lbnRlckNiJiZ0LmVsbS5fZW50ZXJDYigpfWZ1bmN0aW9uIG5uKHQpe3QuZGF0YS5uZXdQb3M9dC5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9ZnVuY3Rpb24gcm4odCl7dmFyIGU9dC5kYXRhLnBvcyxuPXQuZGF0YS5uZXdQb3Mscj1lLmxlZnQtbi5sZWZ0LGk9ZS50b3Atbi50b3A7aWYocnx8aSl7dC5kYXRhLm1vdmVkPSEwO3ZhciBvPXQuZWxtLnN0eWxlO28udHJhbnNmb3JtPW8uV2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlKFwiK3IrXCJweCxcIitpK1wicHgpXCIsby50cmFuc2l0aW9uRHVyYXRpb249XCIwc1wifX1mdW5jdGlvbiBvbih0LGUpe3ZhciBuPWU/em86Vm87cmV0dXJuIHQucmVwbGFjZShuLGZ1bmN0aW9uKHQpe3JldHVybiBVb1t0XX0pfWZ1bmN0aW9uIGFuKHQsZSxuKXtyZXR1cm57dHlwZToxLHRhZzp0LGF0dHJzTGlzdDplLGF0dHJzTWFwOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxuPTAscj10Lmxlbmd0aDtuPHI7bisrKWVbdFtuXS5uYW1lXT10W25dLnZhbHVlO3JldHVybiBlfShlKSxwYXJlbnQ6bixjaGlsZHJlbjpbXX19ZnVuY3Rpb24gc24odCxlKXtmdW5jdGlvbiBuKHQpe3QucHJlJiYocz0hMSksTG8odC50YWcpJiYoYz0hMSk7Zm9yKHZhciBuPTA7bjxJby5sZW5ndGg7bisrKUlvW25dKHQsZSl9VG89ZS53YXJufHxzZSxMbz1lLmlzUHJlVGFnfHxCbixNbz1lLm11c3RVc2VQcm9wfHxCbixEbz1lLmdldFRhZ05hbWVzcGFjZXx8Qm4sam89Y2UoZS5tb2R1bGVzLFwidHJhbnNmb3JtTm9kZVwiKSxObz1jZShlLm1vZHVsZXMsXCJwcmVUcmFuc2Zvcm1Ob2RlXCIpLElvPWNlKGUubW9kdWxlcyxcInBvc3RUcmFuc2Zvcm1Ob2RlXCIpLEVvPWUuZGVsaW1pdGVyczt2YXIgcixpLG89W10sYT0hMSE9PWUucHJlc2VydmVXaGl0ZXNwYWNlLHM9ITEsYz0hMTtyZXR1cm4gZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKGUpe2wrPWUsdD10LnN1YnN0cmluZyhlKX1mdW5jdGlvbiByKHQsbixyKXt2YXIgaSxzO2lmKG51bGw9PW4mJihuPWwpLG51bGw9PXImJihyPWwpLHQmJihzPXQudG9Mb3dlckNhc2UoKSksdClmb3IoaT1hLmxlbmd0aC0xO2k+PTAmJmFbaV0ubG93ZXJDYXNlZFRhZyE9PXM7aS0tKTtlbHNlIGk9MDtpZihpPj0wKXtmb3IodmFyIGM9YS5sZW5ndGgtMTtjPj1pO2MtLSllLmVuZCYmZS5lbmQoYVtjXS50YWcsbixyKTthLmxlbmd0aD1pLG89aSYmYVtpLTFdLnRhZ31lbHNlXCJiclwiPT09cz9lLnN0YXJ0JiZlLnN0YXJ0KHQsW10sITAsbixyKTpcInBcIj09PXMmJihlLnN0YXJ0JiZlLnN0YXJ0KHQsW10sITEsbixyKSxlLmVuZCYmZS5lbmQodCxuLHIpKX1mb3IodmFyIGksbyxhPVtdLHM9ZS5leHBlY3RIVE1MLGM9ZS5pc1VuYXJ5VGFnfHxCbix1PWUuY2FuQmVMZWZ0T3BlblRhZ3x8Qm4sbD0wO3Q7KXtpZihpPXQsbyYmSG8obykpe3ZhciBmPTAscD1vLnRvTG93ZXJDYXNlKCksZD1Cb1twXXx8KEJvW3BdPW5ldyBSZWdFeHAoXCIoW1xcXFxzXFxcXFNdKj8pKDwvXCIrcCtcIltePl0qPilcIixcImlcIikpLHY9dC5yZXBsYWNlKGQsZnVuY3Rpb24odCxuLHIpe3JldHVybiBmPXIubGVuZ3RoLEhvKHApfHxcIm5vc2NyaXB0XCI9PT1wfHwobj1uLnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT4vZyxcIiQxXCIpLnJlcGxhY2UoLzwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPyldXT4vZyxcIiQxXCIpKSxKbyhwLG4pJiYobj1uLnNsaWNlKDEpKSxlLmNoYXJzJiZlLmNoYXJzKG4pLFwiXCJ9KTtsKz10Lmxlbmd0aC12Lmxlbmd0aCx0PXYscihwLGwtZixsKX1lbHNle3ZhciBoPXQuaW5kZXhPZihcIjxcIik7aWYoMD09PWgpe2lmKEFvLnRlc3QodCkpe3ZhciBtPXQuaW5kZXhPZihcIi0tXFx4M2VcIik7aWYobT49MCl7ZS5zaG91bGRLZWVwQ29tbWVudCYmZS5jb21tZW50KHQuc3Vic3RyaW5nKDQsbSkpLG4obSszKTtjb250aW51ZX19aWYoT28udGVzdCh0KSl7dmFyIHk9dC5pbmRleE9mKFwiXT5cIik7aWYoeT49MCl7bih5KzIpO2NvbnRpbnVlfX12YXIgZz10Lm1hdGNoKGtvKTtpZihnKXtuKGdbMF0ubGVuZ3RoKTtjb250aW51ZX12YXIgXz10Lm1hdGNoKHhvKTtpZihfKXt2YXIgYj1sO24oX1swXS5sZW5ndGgpLHIoX1sxXSxiLGwpO2NvbnRpbnVlfXZhciAkPWZ1bmN0aW9uKCl7dmFyIGU9dC5tYXRjaChDbyk7aWYoZSl7dmFyIHI9e3RhZ05hbWU6ZVsxXSxhdHRyczpbXSxzdGFydDpsfTtuKGVbMF0ubGVuZ3RoKTtmb3IodmFyIGksbzshKGk9dC5tYXRjaCh3bykpJiYobz10Lm1hdGNoKF9vKSk7KW4ob1swXS5sZW5ndGgpLHIuYXR0cnMucHVzaChvKTtpZihpKXJldHVybiByLnVuYXJ5U2xhc2g9aVsxXSxuKGlbMF0ubGVuZ3RoKSxyLmVuZD1sLHJ9fSgpO2lmKCQpeyFmdW5jdGlvbih0KXt2YXIgbj10LnRhZ05hbWUsaT10LnVuYXJ5U2xhc2g7cyYmKFwicFwiPT09byYmZ28obikmJnIobyksdShuKSYmbz09PW4mJnIobikpO2Zvcih2YXIgbD1jKG4pfHwhIWksZj10LmF0dHJzLmxlbmd0aCxwPW5ldyBBcnJheShmKSxkPTA7ZDxmO2QrKyl7dmFyIHY9dC5hdHRyc1tkXTtTbyYmLTE9PT12WzBdLmluZGV4T2YoJ1wiXCInKSYmKFwiXCI9PT12WzNdJiZkZWxldGUgdlszXSxcIlwiPT09dls0XSYmZGVsZXRlIHZbNF0sXCJcIj09PXZbNV0mJmRlbGV0ZSB2WzVdKTt2YXIgaD12WzNdfHx2WzRdfHx2WzVdfHxcIlwiLG09XCJhXCI9PT1uJiZcImhyZWZcIj09PXZbMV0/ZS5zaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWY6ZS5zaG91bGREZWNvZGVOZXdsaW5lcztwW2RdPXtuYW1lOnZbMV0sdmFsdWU6b24oaCxtKX19bHx8KGEucHVzaCh7dGFnOm4sbG93ZXJDYXNlZFRhZzpuLnRvTG93ZXJDYXNlKCksYXR0cnM6cH0pLG89biksZS5zdGFydCYmZS5zdGFydChuLHAsbCx0LnN0YXJ0LHQuZW5kKX0oJCksSm8obyx0KSYmbigxKTtjb250aW51ZX19dmFyIEM9dm9pZCAwLHc9dm9pZCAwLHg9dm9pZCAwO2lmKGg+PTApe2Zvcih3PXQuc2xpY2UoaCk7ISh4by50ZXN0KHcpfHxDby50ZXN0KHcpfHxBby50ZXN0KHcpfHxPby50ZXN0KHcpfHwoeD13LmluZGV4T2YoXCI8XCIsMSkpPDApOyloKz14LHc9dC5zbGljZShoKTtDPXQuc3Vic3RyaW5nKDAsaCksbihoKX1oPDAmJihDPXQsdD1cIlwiKSxlLmNoYXJzJiZDJiZlLmNoYXJzKEMpfWlmKHQ9PT1pKXtlLmNoYXJzJiZlLmNoYXJzKHQpO2JyZWFrfX1yKCl9KHQse3dhcm46VG8sZXhwZWN0SFRNTDplLmV4cGVjdEhUTUwsaXNVbmFyeVRhZzplLmlzVW5hcnlUYWcsY2FuQmVMZWZ0T3BlblRhZzplLmNhbkJlTGVmdE9wZW5UYWcsc2hvdWxkRGVjb2RlTmV3bGluZXM6ZS5zaG91bGREZWNvZGVOZXdsaW5lcyxzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWY6ZS5zaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWYsc2hvdWxkS2VlcENvbW1lbnQ6ZS5jb21tZW50cyxzdGFydDpmdW5jdGlvbih0LGEsdSl7dmFyIGw9aSYmaS5uc3x8RG8odCk7UW4mJlwic3ZnXCI9PT1sJiYoYT1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO25hLnRlc3Qoci5uYW1lKXx8KHIubmFtZT1yLm5hbWUucmVwbGFjZShyYSxcIlwiKSxlLnB1c2gocikpfXJldHVybiBlfShhKSk7dmFyIGY9YW4odCxhLGkpO2wmJihmLm5zPWwpLGZ1bmN0aW9uKHQpe3JldHVyblwic3R5bGVcIj09PXQudGFnfHxcInNjcmlwdFwiPT09dC50YWcmJighdC5hdHRyc01hcC50eXBlfHxcInRleHQvamF2YXNjcmlwdFwiPT09dC5hdHRyc01hcC50eXBlKX0oZikmJiF1cigpJiYoZi5mb3JiaWRkZW49ITApO2Zvcih2YXIgcD0wO3A8Tm8ubGVuZ3RoO3ArKylmPU5vW3BdKGYsZSl8fGY7aWYoc3x8KCFmdW5jdGlvbih0KXtudWxsIT1oZSh0LFwidi1wcmVcIikmJih0LnByZT0hMCl9KGYpLGYucHJlJiYocz0hMCkpLExvKGYudGFnKSYmKGM9ITApLHM/ZnVuY3Rpb24odCl7dmFyIGU9dC5hdHRyc0xpc3QubGVuZ3RoO2lmKGUpZm9yKHZhciBuPXQuYXR0cnM9bmV3IEFycmF5KGUpLHI9MDtyPGU7cisrKW5bcl09e25hbWU6dC5hdHRyc0xpc3Rbcl0ubmFtZSx2YWx1ZTpKU09OLnN0cmluZ2lmeSh0LmF0dHJzTGlzdFtyXS52YWx1ZSl9O2Vsc2UgdC5wcmV8fCh0LnBsYWluPSEwKX0oZik6Zi5wcm9jZXNzZWR8fCh1bihmKSxmdW5jdGlvbih0KXt2YXIgZT1oZSh0LFwidi1pZlwiKTtpZihlKXQuaWY9ZSxsbih0LHtleHA6ZSxibG9jazp0fSk7ZWxzZXtudWxsIT1oZSh0LFwidi1lbHNlXCIpJiYodC5lbHNlPSEwKTt2YXIgbj1oZSh0LFwidi1lbHNlLWlmXCIpO24mJih0LmVsc2VpZj1uKX19KGYpLGZ1bmN0aW9uKHQpe251bGwhPWhlKHQsXCJ2LW9uY2VcIikmJih0Lm9uY2U9ITApfShmKSxjbihmLGUpKSxyP28ubGVuZ3RofHxyLmlmJiYoZi5lbHNlaWZ8fGYuZWxzZSkmJmxuKHIse2V4cDpmLmVsc2VpZixibG9jazpmfSk6cj1mLGkmJiFmLmZvcmJpZGRlbilpZihmLmVsc2VpZnx8Zi5lbHNlKSFmdW5jdGlvbih0LGUpe3ZhciBuPWZ1bmN0aW9uKHQpe3ZhciBlPXQubGVuZ3RoO2Zvcig7ZS0tOyl7aWYoMT09PXRbZV0udHlwZSlyZXR1cm4gdFtlXTt0LnBvcCgpfX0oZS5jaGlsZHJlbik7biYmbi5pZiYmbG4obix7ZXhwOnQuZWxzZWlmLGJsb2NrOnR9KX0oZixpKTtlbHNlIGlmKGYuc2xvdFNjb3BlKXtpLnBsYWluPSExO3ZhciBkPWYuc2xvdFRhcmdldHx8J1wiZGVmYXVsdFwiJzsoaS5zY29wZWRTbG90c3x8KGkuc2NvcGVkU2xvdHM9e30pKVtkXT1mfWVsc2UgaS5jaGlsZHJlbi5wdXNoKGYpLGYucGFyZW50PWk7dT9uKGYpOihpPWYsby5wdXNoKGYpKX0sZW5kOmZ1bmN0aW9uKCl7dmFyIHQ9b1tvLmxlbmd0aC0xXSxlPXQuY2hpbGRyZW5bdC5jaGlsZHJlbi5sZW5ndGgtMV07ZSYmMz09PWUudHlwZSYmXCIgXCI9PT1lLnRleHQmJiFjJiZ0LmNoaWxkcmVuLnBvcCgpLG8ubGVuZ3RoLT0xLGk9b1tvLmxlbmd0aC0xXSxuKHQpfSxjaGFyczpmdW5jdGlvbih0KXtpZihpJiYoIVFufHxcInRleHRhcmVhXCIhPT1pLnRhZ3x8aS5hdHRyc01hcC5wbGFjZWhvbGRlciE9PXQpKXt2YXIgZT1pLmNoaWxkcmVuO2lmKHQ9Y3x8dC50cmltKCk/ZnVuY3Rpb24odCl7cmV0dXJuXCJzY3JpcHRcIj09PXQudGFnfHxcInN0eWxlXCI9PT10LnRhZ30oaSk/dDplYSh0KTphJiZlLmxlbmd0aD9cIiBcIjpcIlwiKXt2YXIgbjshcyYmXCIgXCIhPT10JiYobj1mdW5jdGlvbih0LGUpe3ZhciBuPWU/Zm8oZSk6dW87aWYobi50ZXN0KHQpKXtmb3IodmFyIHIsaSxvLGE9W10scz1bXSxjPW4ubGFzdEluZGV4PTA7cj1uLmV4ZWModCk7KXsoaT1yLmluZGV4KT5jJiYocy5wdXNoKG89dC5zbGljZShjLGkpKSxhLnB1c2goSlNPTi5zdHJpbmdpZnkobykpKTt2YXIgdT1hZShyWzFdLnRyaW0oKSk7YS5wdXNoKFwiX3MoXCIrdStcIilcIikscy5wdXNoKHtcIkBiaW5kaW5nXCI6dX0pLGM9aStyWzBdLmxlbmd0aH1yZXR1cm4gYzx0Lmxlbmd0aCYmKHMucHVzaChvPXQuc2xpY2UoYykpLGEucHVzaChKU09OLnN0cmluZ2lmeShvKSkpLHtleHByZXNzaW9uOmEuam9pbihcIitcIiksdG9rZW5zOnN9fX0odCxFbykpP2UucHVzaCh7dHlwZToyLGV4cHJlc3Npb246bi5leHByZXNzaW9uLHRva2VuczpuLnRva2Vucyx0ZXh0OnR9KTpcIiBcIj09PXQmJmUubGVuZ3RoJiZcIiBcIj09PWVbZS5sZW5ndGgtMV0udGV4dHx8ZS5wdXNoKHt0eXBlOjMsdGV4dDp0fSl9fX0sY29tbWVudDpmdW5jdGlvbih0KXtpLmNoaWxkcmVuLnB1c2goe3R5cGU6Myx0ZXh0OnQsaXNDb21tZW50OiEwfSl9fSkscn1mdW5jdGlvbiBjbih0LGUpeyFmdW5jdGlvbih0KXt2YXIgZT12ZSh0LFwia2V5XCIpO2UmJih0LmtleT1lKX0odCksdC5wbGFpbj0hdC5rZXkmJiF0LmF0dHJzTGlzdC5sZW5ndGgsZnVuY3Rpb24odCl7dmFyIGU9dmUodCxcInJlZlwiKTtlJiYodC5yZWY9ZSx0LnJlZkluRm9yPWZ1bmN0aW9uKHQpe3ZhciBlPXQ7Zm9yKDtlOyl7aWYodm9pZCAwIT09ZS5mb3IpcmV0dXJuITA7ZT1lLnBhcmVudH1yZXR1cm4hMX0odCkpfSh0KSxmdW5jdGlvbih0KXtpZihcInNsb3RcIj09PXQudGFnKXQuc2xvdE5hbWU9dmUodCxcIm5hbWVcIik7ZWxzZXt2YXIgZTtcInRlbXBsYXRlXCI9PT10LnRhZz8oZT1oZSh0LFwic2NvcGVcIiksdC5zbG90U2NvcGU9ZXx8aGUodCxcInNsb3Qtc2NvcGVcIikpOihlPWhlKHQsXCJzbG90LXNjb3BlXCIpKSYmKHQuc2xvdFNjb3BlPWUpO3ZhciBuPXZlKHQsXCJzbG90XCIpO24mJih0LnNsb3RUYXJnZXQ9J1wiXCInPT09bj8nXCJkZWZhdWx0XCInOm4sXCJ0ZW1wbGF0ZVwiPT09dC50YWd8fHQuc2xvdFNjb3BlfHxsZSh0LFwic2xvdFwiLG4pKX19KHQpLGZ1bmN0aW9uKHQpe3ZhciBlOyhlPXZlKHQsXCJpc1wiKSkmJih0LmNvbXBvbmVudD1lKTtudWxsIT1oZSh0LFwiaW5saW5lLXRlbXBsYXRlXCIpJiYodC5pbmxpbmVUZW1wbGF0ZT0hMCl9KHQpO2Zvcih2YXIgbj0wO248am8ubGVuZ3RoO24rKyl0PWpvW25dKHQsZSl8fHQ7IWZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLGM9dC5hdHRyc0xpc3Q7Zm9yKGU9MCxuPWMubGVuZ3RoO2U8bjtlKyspaWYocj1pPWNbZV0ubmFtZSxvPWNbZV0udmFsdWUsV28udGVzdChyKSlpZih0Lmhhc0JpbmRpbmdzPSEwLChhPWZ1bmN0aW9uKHQpe3ZhciBlPXQubWF0Y2godGEpO2lmKGUpe3ZhciBuPXt9O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24odCl7blt0LnNsaWNlKDEpXT0hMH0pLG59fShyKSkmJihyPXIucmVwbGFjZSh0YSxcIlwiKSksUW8udGVzdChyKSlyPXIucmVwbGFjZShRbyxcIlwiKSxvPWFlKG8pLHM9ITEsYSYmKGEucHJvcCYmKHM9ITAsXCJpbm5lckh0bWxcIj09PShyPVBuKHIpKSYmKHI9XCJpbm5lckhUTUxcIikpLGEuY2FtZWwmJihyPVBuKHIpKSxhLnN5bmMmJmRlKHQsXCJ1cGRhdGU6XCIrUG4ocikseWUobyxcIiRldmVudFwiKSkpLHN8fCF0LmNvbXBvbmVudCYmTW8odC50YWcsdC5hdHRyc01hcC50eXBlLHIpP3VlKHQscixvKTpsZSh0LHIsbyk7ZWxzZSBpZihxby50ZXN0KHIpKXI9ci5yZXBsYWNlKHFvLFwiXCIpLGRlKHQscixvLGEsITEpO2Vsc2V7dmFyIHU9KHI9ci5yZXBsYWNlKFdvLFwiXCIpKS5tYXRjaChZbyksbD11JiZ1WzFdO2wmJihyPXIuc2xpY2UoMCwtKGwubGVuZ3RoKzEpKSkscGUodCxyLGksbyxsLGEpfWVsc2UgbGUodCxyLEpTT04uc3RyaW5naWZ5KG8pKSwhdC5jb21wb25lbnQmJlwibXV0ZWRcIj09PXImJk1vKHQudGFnLHQuYXR0cnNNYXAudHlwZSxyKSYmdWUodCxyLFwidHJ1ZVwiKX0odCl9ZnVuY3Rpb24gdW4odCl7dmFyIGU7aWYoZT1oZSh0LFwidi1mb3JcIikpe3ZhciBuPWZ1bmN0aW9uKHQpe3ZhciBlPXQubWF0Y2goR28pO2lmKCFlKXJldHVybjt2YXIgbj17fTtuLmZvcj1lWzJdLnRyaW0oKTt2YXIgcj1lWzFdLnRyaW0oKS5yZXBsYWNlKFhvLFwiXCIpLGk9ci5tYXRjaChabyk7aT8obi5hbGlhcz1yLnJlcGxhY2UoWm8sXCJcIiksbi5pdGVyYXRvcjE9aVsxXS50cmltKCksaVsyXSYmKG4uaXRlcmF0b3IyPWlbMl0udHJpbSgpKSk6bi5hbGlhcz1yO3JldHVybiBufShlKTtuJiZoKHQsbil9fWZ1bmN0aW9uIGxuKHQsZSl7dC5pZkNvbmRpdGlvbnN8fCh0LmlmQ29uZGl0aW9ucz1bXSksdC5pZkNvbmRpdGlvbnMucHVzaChlKX1mdW5jdGlvbiBmbih0KXtyZXR1cm4gYW4odC50YWcsdC5hdHRyc0xpc3Quc2xpY2UoKSx0LnBhcmVudCl9ZnVuY3Rpb24gcG4odCl7aWYodC5zdGF0aWM9ZnVuY3Rpb24odCl7aWYoMj09PXQudHlwZSlyZXR1cm4hMTtpZigzPT09dC50eXBlKXJldHVybiEwO3JldHVybiEoIXQucHJlJiYodC5oYXNCaW5kaW5nc3x8dC5pZnx8dC5mb3J8fEluKHQudGFnKXx8IUZvKHQudGFnKXx8ZnVuY3Rpb24odCl7Zm9yKDt0LnBhcmVudDspe2lmKFwidGVtcGxhdGVcIiE9PSh0PXQucGFyZW50KS50YWcpcmV0dXJuITE7aWYodC5mb3IpcmV0dXJuITB9cmV0dXJuITF9KHQpfHwhT2JqZWN0LmtleXModCkuZXZlcnkoUG8pKSl9KHQpLDE9PT10LnR5cGUpe2lmKCFGbyh0LnRhZykmJlwic2xvdFwiIT09dC50YWcmJm51bGw9PXQuYXR0cnNNYXBbXCJpbmxpbmUtdGVtcGxhdGVcIl0pcmV0dXJuO2Zvcih2YXIgZT0wLG49dC5jaGlsZHJlbi5sZW5ndGg7ZTxuO2UrKyl7dmFyIHI9dC5jaGlsZHJlbltlXTtwbihyKSxyLnN0YXRpY3x8KHQuc3RhdGljPSExKX1pZih0LmlmQ29uZGl0aW9ucylmb3IodmFyIGk9MSxvPXQuaWZDb25kaXRpb25zLmxlbmd0aDtpPG87aSsrKXt2YXIgYT10LmlmQ29uZGl0aW9uc1tpXS5ibG9jaztwbihhKSxhLnN0YXRpY3x8KHQuc3RhdGljPSExKX19fWZ1bmN0aW9uIGRuKHQsZSl7aWYoMT09PXQudHlwZSl7aWYoKHQuc3RhdGljfHx0Lm9uY2UpJiYodC5zdGF0aWNJbkZvcj1lKSx0LnN0YXRpYyYmdC5jaGlsZHJlbi5sZW5ndGgmJigxIT09dC5jaGlsZHJlbi5sZW5ndGh8fDMhPT10LmNoaWxkcmVuWzBdLnR5cGUpKXJldHVybiB2b2lkKHQuc3RhdGljUm9vdD0hMCk7aWYodC5zdGF0aWNSb290PSExLHQuY2hpbGRyZW4pZm9yKHZhciBuPTAscj10LmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKWRuKHQuY2hpbGRyZW5bbl0sZXx8ISF0LmZvcik7aWYodC5pZkNvbmRpdGlvbnMpZm9yKHZhciBpPTEsbz10LmlmQ29uZGl0aW9ucy5sZW5ndGg7aTxvO2krKylkbih0LmlmQ29uZGl0aW9uc1tpXS5ibG9jayxlKX19ZnVuY3Rpb24gdm4odCxlLG4pe3ZhciByPWU/XCJuYXRpdmVPbjp7XCI6XCJvbjp7XCI7Zm9yKHZhciBpIGluIHQpcis9J1wiJytpKydcIjonK2huKGksdFtpXSkrXCIsXCI7cmV0dXJuIHIuc2xpY2UoMCwtMSkrXCJ9XCJ9ZnVuY3Rpb24gaG4odCxlKXtpZighZSlyZXR1cm5cImZ1bmN0aW9uKCl7fVwiO2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuXCJbXCIrZS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGhuKHQsZSl9KS5qb2luKFwiLFwiKStcIl1cIjt2YXIgbj1jYS50ZXN0KGUudmFsdWUpLHI9c2EudGVzdChlLnZhbHVlKTtpZihlLm1vZGlmaWVycyl7dmFyIGk9XCJcIixvPVwiXCIsYT1bXTtmb3IodmFyIHMgaW4gZS5tb2RpZmllcnMpaWYoZmFbc10pbys9ZmFbc10sdWFbc10mJmEucHVzaChzKTtlbHNlIGlmKFwiZXhhY3RcIj09PXMpe3ZhciBjPWUubW9kaWZpZXJzO28rPWxhKFtcImN0cmxcIixcInNoaWZ0XCIsXCJhbHRcIixcIm1ldGFcIl0uZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiFjW3RdfSkubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiJGV2ZW50LlwiK3QrXCJLZXlcIn0pLmpvaW4oXCJ8fFwiKSl9ZWxzZSBhLnB1c2gocyk7YS5sZW5ndGgmJihpKz1mdW5jdGlvbih0KXtyZXR1cm5cImlmKCEoJ2J1dHRvbicgaW4gJGV2ZW50KSYmXCIrdC5tYXAobW4pLmpvaW4oXCImJlwiKStcIilyZXR1cm4gbnVsbDtcIn0oYSkpLG8mJihpKz1vKTtyZXR1cm5cImZ1bmN0aW9uKCRldmVudCl7XCIraSsobj9lLnZhbHVlK1wiKCRldmVudClcIjpyP1wiKFwiK2UudmFsdWUrXCIpKCRldmVudClcIjplLnZhbHVlKStcIn1cIn1yZXR1cm4gbnx8cj9lLnZhbHVlOlwiZnVuY3Rpb24oJGV2ZW50KXtcIitlLnZhbHVlK1wifVwifWZ1bmN0aW9uIG1uKHQpe3ZhciBlPXBhcnNlSW50KHQsMTApO2lmKGUpcmV0dXJuXCIkZXZlbnQua2V5Q29kZSE9PVwiK2U7dmFyIG49dWFbdF07cmV0dXJuXCJfaygkZXZlbnQua2V5Q29kZSxcIitKU09OLnN0cmluZ2lmeSh0KStcIixcIitKU09OLnN0cmluZ2lmeShuKStcIiwkZXZlbnQua2V5KVwifWZ1bmN0aW9uIHluKHQsZSl7dmFyIG49bmV3IGRhKGUpO3JldHVybntyZW5kZXI6XCJ3aXRoKHRoaXMpe3JldHVybiBcIisodD9nbih0LG4pOidfYyhcImRpdlwiKScpK1wifVwiLHN0YXRpY1JlbmRlckZuczpuLnN0YXRpY1JlbmRlckZuc319ZnVuY3Rpb24gZ24odCxlKXtpZih0LnN0YXRpY1Jvb3QmJiF0LnN0YXRpY1Byb2Nlc3NlZClyZXR1cm4gX24odCxlKTtpZih0Lm9uY2UmJiF0Lm9uY2VQcm9jZXNzZWQpcmV0dXJuIGJuKHQsZSk7aWYodC5mb3ImJiF0LmZvclByb2Nlc3NlZClyZXR1cm4gZnVuY3Rpb24odCxlLG4scil7dmFyIGk9dC5mb3Isbz10LmFsaWFzLGE9dC5pdGVyYXRvcjE/XCIsXCIrdC5pdGVyYXRvcjE6XCJcIixzPXQuaXRlcmF0b3IyP1wiLFwiK3QuaXRlcmF0b3IyOlwiXCI7cmV0dXJuIHQuZm9yUHJvY2Vzc2VkPSEwLChyfHxcIl9sXCIpK1wiKChcIitpK1wiKSxmdW5jdGlvbihcIitvK2ErcytcIil7cmV0dXJuIFwiKyhufHxnbikodCxlKStcIn0pXCJ9KHQsZSk7aWYodC5pZiYmIXQuaWZQcm9jZXNzZWQpcmV0dXJuICRuKHQsZSk7aWYoXCJ0ZW1wbGF0ZVwiIT09dC50YWd8fHQuc2xvdFRhcmdldCl7aWYoXCJzbG90XCI9PT10LnRhZylyZXR1cm4gZnVuY3Rpb24odCxlKXt2YXIgbj10LnNsb3ROYW1lfHwnXCJkZWZhdWx0XCInLHI9a24odCxlKSxpPVwiX3QoXCIrbisocj9cIixcIityOlwiXCIpLG89dC5hdHRycyYmXCJ7XCIrdC5hdHRycy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIFBuKHQubmFtZSkrXCI6XCIrdC52YWx1ZX0pLmpvaW4oXCIsXCIpK1wifVwiLGE9dC5hdHRyc01hcFtcInYtYmluZFwiXTshbyYmIWF8fHJ8fChpKz1cIixudWxsXCIpO28mJihpKz1cIixcIitvKTthJiYoaSs9KG8/XCJcIjpcIixudWxsXCIpK1wiLFwiK2EpO3JldHVybiBpK1wiKVwifSh0LGUpO3ZhciBuO2lmKHQuY29tcG9uZW50KW49ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUuaW5saW5lVGVtcGxhdGU/bnVsbDprbihlLG4sITApO3JldHVyblwiX2MoXCIrdCtcIixcIit3bihlLG4pKyhyP1wiLFwiK3I6XCJcIikrXCIpXCJ9KHQuY29tcG9uZW50LHQsZSk7ZWxzZXt2YXIgcj10LnBsYWluP3ZvaWQgMDp3bih0LGUpLGk9dC5pbmxpbmVUZW1wbGF0ZT9udWxsOmtuKHQsZSwhMCk7bj1cIl9jKCdcIit0LnRhZytcIidcIisocj9cIixcIityOlwiXCIpKyhpP1wiLFwiK2k6XCJcIikrXCIpXCJ9Zm9yKHZhciBvPTA7bzxlLnRyYW5zZm9ybXMubGVuZ3RoO28rKyluPWUudHJhbnNmb3Jtc1tvXSh0LG4pO3JldHVybiBufXJldHVybiBrbih0LGUpfHxcInZvaWQgMFwifWZ1bmN0aW9uIF9uKHQsZSl7cmV0dXJuIHQuc3RhdGljUHJvY2Vzc2VkPSEwLGUuc3RhdGljUmVuZGVyRm5zLnB1c2goXCJ3aXRoKHRoaXMpe3JldHVybiBcIitnbih0LGUpK1wifVwiKSxcIl9tKFwiKyhlLnN0YXRpY1JlbmRlckZucy5sZW5ndGgtMSkrKHQuc3RhdGljSW5Gb3I/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifWZ1bmN0aW9uIGJuKHQsZSl7aWYodC5vbmNlUHJvY2Vzc2VkPSEwLHQuaWYmJiF0LmlmUHJvY2Vzc2VkKXJldHVybiAkbih0LGUpO2lmKHQuc3RhdGljSW5Gb3Ipe2Zvcih2YXIgbj1cIlwiLHI9dC5wYXJlbnQ7cjspe2lmKHIuZm9yKXtuPXIua2V5O2JyZWFrfXI9ci5wYXJlbnR9cmV0dXJuIG4/XCJfbyhcIitnbih0LGUpK1wiLFwiK2Uub25jZUlkKysrXCIsXCIrbitcIilcIjpnbih0LGUpfXJldHVybiBfbih0LGUpfWZ1bmN0aW9uICRuKHQsZSxuLHIpe3JldHVybiB0LmlmUHJvY2Vzc2VkPSEwLENuKHQuaWZDb25kaXRpb25zLnNsaWNlKCksZSxuLHIpfWZ1bmN0aW9uIENuKHQsZSxuLHIpe2Z1bmN0aW9uIGkodCl7cmV0dXJuIG4/bih0LGUpOnQub25jZT9ibih0LGUpOmduKHQsZSl9aWYoIXQubGVuZ3RoKXJldHVybiByfHxcIl9lKClcIjt2YXIgbz10LnNoaWZ0KCk7cmV0dXJuIG8uZXhwP1wiKFwiK28uZXhwK1wiKT9cIitpKG8uYmxvY2spK1wiOlwiK0NuKHQsZSxuLHIpOlwiXCIraShvLmJsb2NrKX1mdW5jdGlvbiB3bih0LGUpe3ZhciBuPVwie1wiLHI9ZnVuY3Rpb24odCxlKXt2YXIgbj10LmRpcmVjdGl2ZXM7aWYoIW4pcmV0dXJuO3ZhciByLGksbyxhLHM9XCJkaXJlY3RpdmVzOltcIixjPSExO2ZvcihyPTAsaT1uLmxlbmd0aDtyPGk7cisrKXtvPW5bcl0sYT0hMDt2YXIgdT1lLmRpcmVjdGl2ZXNbby5uYW1lXTt1JiYoYT0hIXUodCxvLGUud2FybikpLGEmJihjPSEwLHMrPSd7bmFtZTpcIicrby5uYW1lKydcIixyYXdOYW1lOlwiJytvLnJhd05hbWUrJ1wiJysoby52YWx1ZT9cIix2YWx1ZTooXCIrby52YWx1ZStcIiksZXhwcmVzc2lvbjpcIitKU09OLnN0cmluZ2lmeShvLnZhbHVlKTpcIlwiKSsoby5hcmc/Jyxhcmc6XCInK28uYXJnKydcIic6XCJcIikrKG8ubW9kaWZpZXJzP1wiLG1vZGlmaWVyczpcIitKU09OLnN0cmluZ2lmeShvLm1vZGlmaWVycyk6XCJcIikrXCJ9LFwiKX1pZihjKXJldHVybiBzLnNsaWNlKDAsLTEpK1wiXVwifSh0LGUpO3ImJihuKz1yK1wiLFwiKSx0LmtleSYmKG4rPVwia2V5OlwiK3Qua2V5K1wiLFwiKSx0LnJlZiYmKG4rPVwicmVmOlwiK3QucmVmK1wiLFwiKSx0LnJlZkluRm9yJiYobis9XCJyZWZJbkZvcjp0cnVlLFwiKSx0LnByZSYmKG4rPVwicHJlOnRydWUsXCIpLHQuY29tcG9uZW50JiYobis9J3RhZzpcIicrdC50YWcrJ1wiLCcpO2Zvcih2YXIgaT0wO2k8ZS5kYXRhR2VuRm5zLmxlbmd0aDtpKyspbis9ZS5kYXRhR2VuRm5zW2ldKHQpO2lmKHQuYXR0cnMmJihuKz1cImF0dHJzOntcIitPbih0LmF0dHJzKStcIn0sXCIpLHQucHJvcHMmJihuKz1cImRvbVByb3BzOntcIitPbih0LnByb3BzKStcIn0sXCIpLHQuZXZlbnRzJiYobis9dm4odC5ldmVudHMsITEsZS53YXJuKStcIixcIiksdC5uYXRpdmVFdmVudHMmJihuKz12bih0Lm5hdGl2ZUV2ZW50cywhMCxlLndhcm4pK1wiLFwiKSx0LnNsb3RUYXJnZXQmJiF0LnNsb3RTY29wZSYmKG4rPVwic2xvdDpcIit0LnNsb3RUYXJnZXQrXCIsXCIpLHQuc2NvcGVkU2xvdHMmJihuKz1mdW5jdGlvbih0LGUpe3JldHVyblwic2NvcGVkU2xvdHM6X3UoW1wiK09iamVjdC5rZXlzKHQpLm1hcChmdW5jdGlvbihuKXtyZXR1cm4geG4obix0W25dLGUpfSkuam9pbihcIixcIikrXCJdKVwifSh0LnNjb3BlZFNsb3RzLGUpK1wiLFwiKSx0Lm1vZGVsJiYobis9XCJtb2RlbDp7dmFsdWU6XCIrdC5tb2RlbC52YWx1ZStcIixjYWxsYmFjazpcIit0Lm1vZGVsLmNhbGxiYWNrK1wiLGV4cHJlc3Npb246XCIrdC5tb2RlbC5leHByZXNzaW9uK1wifSxcIiksdC5pbmxpbmVUZW1wbGF0ZSl7dmFyIG89ZnVuY3Rpb24odCxlKXt2YXIgbj10LmNoaWxkcmVuWzBdO2lmKDE9PT1uLnR5cGUpe3ZhciByPXluKG4sZS5vcHRpb25zKTtyZXR1cm5cImlubGluZVRlbXBsYXRlOntyZW5kZXI6ZnVuY3Rpb24oKXtcIityLnJlbmRlcitcIn0sc3RhdGljUmVuZGVyRm5zOltcIityLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvbigpe1wiK3QrXCJ9XCJ9KS5qb2luKFwiLFwiKStcIl19XCJ9fSh0LGUpO28mJihuKz1vK1wiLFwiKX1yZXR1cm4gbj1uLnJlcGxhY2UoLywkLyxcIlwiKStcIn1cIix0LndyYXBEYXRhJiYobj10LndyYXBEYXRhKG4pKSx0LndyYXBMaXN0ZW5lcnMmJihuPXQud3JhcExpc3RlbmVycyhuKSksbn1mdW5jdGlvbiB4bih0LGUsbil7aWYoZS5mb3ImJiFlLmZvclByb2Nlc3NlZClyZXR1cm4gZnVuY3Rpb24odCxlLG4pe3ZhciByPWUuZm9yLGk9ZS5hbGlhcyxvPWUuaXRlcmF0b3IxP1wiLFwiK2UuaXRlcmF0b3IxOlwiXCIsYT1lLml0ZXJhdG9yMj9cIixcIitlLml0ZXJhdG9yMjpcIlwiO3JldHVybiBlLmZvclByb2Nlc3NlZD0hMCxcIl9sKChcIityK1wiKSxmdW5jdGlvbihcIitpK28rYStcIil7cmV0dXJuIFwiK3huKHQsZSxuKStcIn0pXCJ9KHQsZSxuKTtyZXR1cm5cIntrZXk6XCIrdCtcIixmbjpcIisoXCJmdW5jdGlvbihcIitTdHJpbmcoZS5zbG90U2NvcGUpK1wiKXtyZXR1cm4gXCIrKFwidGVtcGxhdGVcIj09PWUudGFnP2UuaWY/ZS5pZitcIj9cIisoa24oZSxuKXx8XCJ1bmRlZmluZWRcIikrXCI6dW5kZWZpbmVkXCI6a24oZSxuKXx8XCJ1bmRlZmluZWRcIjpnbihlLG4pKStcIn1cIikrXCJ9XCJ9ZnVuY3Rpb24ga24odCxlLG4scixpKXt2YXIgbz10LmNoaWxkcmVuO2lmKG8ubGVuZ3RoKXt2YXIgYT1vWzBdO2lmKDE9PT1vLmxlbmd0aCYmYS5mb3ImJlwidGVtcGxhdGVcIiE9PWEudGFnJiZcInNsb3RcIiE9PWEudGFnKXJldHVybihyfHxnbikoYSxlKTt2YXIgcz1uP2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPTAscj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgaT10W3JdO2lmKDE9PT1pLnR5cGUpe2lmKEFuKGkpfHxpLmlmQ29uZGl0aW9ucyYmaS5pZkNvbmRpdGlvbnMuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gQW4odC5ibG9jayl9KSl7bj0yO2JyZWFrfShlKGkpfHxpLmlmQ29uZGl0aW9ucyYmaS5pZkNvbmRpdGlvbnMuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gZSh0LmJsb2NrKX0pKSYmKG49MSl9fXJldHVybiBufShvLGUubWF5YmVDb21wb25lbnQpOjAsYz1pfHxmdW5jdGlvbih0LGUpe2lmKDE9PT10LnR5cGUpcmV0dXJuIGduKHQsZSk7cmV0dXJuIDM9PT10LnR5cGUmJnQuaXNDb21tZW50P2Z1bmN0aW9uKHQpe3JldHVyblwiX2UoXCIrSlNPTi5zdHJpbmdpZnkodC50ZXh0KStcIilcIn0odCk6ZnVuY3Rpb24odCl7cmV0dXJuXCJfdihcIisoMj09PXQudHlwZT90LmV4cHJlc3Npb246U24oSlNPTi5zdHJpbmdpZnkodC50ZXh0KSkpK1wiKVwifSh0KX07cmV0dXJuXCJbXCIrby5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGModCxlKX0pLmpvaW4oXCIsXCIpK1wiXVwiKyhzP1wiLFwiK3M6XCJcIil9fWZ1bmN0aW9uIEFuKHQpe3JldHVybiB2b2lkIDAhPT10LmZvcnx8XCJ0ZW1wbGF0ZVwiPT09dC50YWd8fFwic2xvdFwiPT09dC50YWd9ZnVuY3Rpb24gT24odCl7Zm9yKHZhciBlPVwiXCIsbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO2UrPSdcIicrci5uYW1lKydcIjonK1NuKHIudmFsdWUpK1wiLFwifXJldHVybiBlLnNsaWNlKDAsLTEpfWZ1bmN0aW9uIFNuKHQpe3JldHVybiB0LnJlcGxhY2UoL1xcdTIwMjgvZyxcIlxcXFx1MjAyOFwiKS5yZXBsYWNlKC9cXHUyMDI5L2csXCJcXFxcdTIwMjlcIil9ZnVuY3Rpb24gVG4odCxlKXt0cnl7cmV0dXJuIG5ldyBGdW5jdGlvbih0KX1jYXRjaChuKXtyZXR1cm4gZS5wdXNoKHtlcnI6bixjb2RlOnR9KSx5fX1mdW5jdGlvbiBFbih0KXtyZXR1cm4gUm89Um98fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksUm8uaW5uZXJIVE1MPXQ/JzxhIGhyZWY9XCJcXG5cIi8+JzonPGRpdiBhPVwiXFxuXCIvPicsUm8uaW5uZXJIVE1MLmluZGV4T2YoXCImIzEwO1wiKT4wfXZhciBqbj1PYmplY3QuZnJlZXplKHt9KSxObj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLEluPXUoXCJzbG90LGNvbXBvbmVudFwiLCEwKSxMbj11KFwia2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXNcIiksTW49T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxEbj0vLShcXHcpL2csUG49cChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKERuLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGU/ZS50b1VwcGVyQ2FzZSgpOlwiXCJ9KX0pLEZuPXAoZnVuY3Rpb24odCl7cmV0dXJuIHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKX0pLFJuPS9cXEIoW0EtWl0pL2csSG49cChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKFJuLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCl9KSxCbj1mdW5jdGlvbih0LGUsbil7cmV0dXJuITF9LFVuPWZ1bmN0aW9uKHQpe3JldHVybiB0fSxWbj1cImRhdGEtc2VydmVyLXJlbmRlcmVkXCIsem49W1wiY29tcG9uZW50XCIsXCJkaXJlY3RpdmVcIixcImZpbHRlclwiXSxLbj1bXCJiZWZvcmVDcmVhdGVcIixcImNyZWF0ZWRcIixcImJlZm9yZU1vdW50XCIsXCJtb3VudGVkXCIsXCJiZWZvcmVVcGRhdGVcIixcInVwZGF0ZWRcIixcImJlZm9yZURlc3Ryb3lcIixcImRlc3Ryb3llZFwiLFwiYWN0aXZhdGVkXCIsXCJkZWFjdGl2YXRlZFwiLFwiZXJyb3JDYXB0dXJlZFwiXSxKbj17b3B0aW9uTWVyZ2VTdHJhdGVnaWVzOk9iamVjdC5jcmVhdGUobnVsbCksc2lsZW50OiExLHByb2R1Y3Rpb25UaXA6ITEsZGV2dG9vbHM6ITEscGVyZm9ybWFuY2U6ITEsZXJyb3JIYW5kbGVyOm51bGwsd2FybkhhbmRsZXI6bnVsbCxpZ25vcmVkRWxlbWVudHM6W10sa2V5Q29kZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxpc1Jlc2VydmVkVGFnOkJuLGlzUmVzZXJ2ZWRBdHRyOkJuLGlzVW5rbm93bkVsZW1lbnQ6Qm4sZ2V0VGFnTmFtZXNwYWNlOnkscGFyc2VQbGF0Zm9ybVRhZ05hbWU6VW4sbXVzdFVzZVByb3A6Qm4sX2xpZmVjeWNsZUhvb2tzOktufSxxbj0vW15cXHcuJF0vLFduPVwiX19wcm90b19fXCJpbnt9LEduPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3csWm49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdYRW52aXJvbm1lbnQmJiEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSxYbj1abiYmV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLFluPUduJiZ3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFFuPVluJiYvbXNpZXx0cmlkZW50Ly50ZXN0KFluKSx0cj1ZbiYmWW4uaW5kZXhPZihcIm1zaWUgOS4wXCIpPjAsZXI9WW4mJlluLmluZGV4T2YoXCJlZGdlL1wiKT4wLG5yPVluJiZZbi5pbmRleE9mKFwiYW5kcm9pZFwiKT4wfHxcImFuZHJvaWRcIj09PVhuLHJyPVluJiYvaXBob25lfGlwYWR8aXBvZHxpb3MvLnRlc3QoWW4pfHxcImlvc1wiPT09WG4saXI9KFluJiYvY2hyb21lXFwvXFxkKy8udGVzdChZbikse30ud2F0Y2gpLG9yPSExO2lmKEduKXRyeXt2YXIgYXI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KGFyLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtvcj0hMH19KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3QtcGFzc2l2ZVwiLG51bGwsYXIpfWNhdGNoKHQpe312YXIgc3IsY3IsdXI9ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09c3ImJihzcj0hR24mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJlwic2VydmVyXCI9PT1nbG9iYWwucHJvY2Vzcy5lbnYuVlVFX0VOViksc3J9LGxyPUduJiZ3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyxmcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZ3KFN5bWJvbCkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0JiZ3KFJlZmxlY3Qub3duS2V5cyk7Y3I9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCYmdyhTZXQpP1NldDpmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLnNldD1PYmplY3QuY3JlYXRlKG51bGwpfXJldHVybiB0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuITA9PT10aGlzLnNldFt0XX0sdC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3RoaXMuc2V0W3RdPSEwfSx0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9LHR9KCk7dmFyIHByPXksZHI9MCx2cj1mdW5jdGlvbigpe3RoaXMuaWQ9ZHIrKyx0aGlzLnN1YnM9W119O3ZyLnByb3RvdHlwZS5hZGRTdWI9ZnVuY3Rpb24odCl7dGhpcy5zdWJzLnB1c2godCl9LHZyLnByb3RvdHlwZS5yZW1vdmVTdWI9ZnVuY3Rpb24odCl7bCh0aGlzLnN1YnMsdCl9LHZyLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXt2ci50YXJnZXQmJnZyLnRhcmdldC5hZGREZXAodGhpcyl9LHZyLnByb3RvdHlwZS5ub3RpZnk9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5zdWJzLnNsaWNlKCksZT0wLG49dC5sZW5ndGg7ZTxuO2UrKyl0W2VdLnVwZGF0ZSgpfSx2ci50YXJnZXQ9bnVsbDt2YXIgaHI9W10sbXI9ZnVuY3Rpb24odCxlLG4scixpLG8sYSxzKXt0aGlzLnRhZz10LHRoaXMuZGF0YT1lLHRoaXMuY2hpbGRyZW49bix0aGlzLnRleHQ9cix0aGlzLmVsbT1pLHRoaXMubnM9dm9pZCAwLHRoaXMuY29udGV4dD1vLHRoaXMuZm5Db250ZXh0PXZvaWQgMCx0aGlzLmZuT3B0aW9ucz12b2lkIDAsdGhpcy5mblNjb3BlSWQ9dm9pZCAwLHRoaXMua2V5PWUmJmUua2V5LHRoaXMuY29tcG9uZW50T3B0aW9ucz1hLHRoaXMuY29tcG9uZW50SW5zdGFuY2U9dm9pZCAwLHRoaXMucGFyZW50PXZvaWQgMCx0aGlzLnJhdz0hMSx0aGlzLmlzU3RhdGljPSExLHRoaXMuaXNSb290SW5zZXJ0PSEwLHRoaXMuaXNDb21tZW50PSExLHRoaXMuaXNDbG9uZWQ9ITEsdGhpcy5pc09uY2U9ITEsdGhpcy5hc3luY0ZhY3Rvcnk9cyx0aGlzLmFzeW5jTWV0YT12b2lkIDAsdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXI9ITF9LHlyPXtjaGlsZDp7Y29uZmlndXJhYmxlOiEwfX07eXIuY2hpbGQuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2V9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1yLnByb3RvdHlwZSx5cik7dmFyIGdyPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiXCIpO3ZhciBlPW5ldyBtcjtyZXR1cm4gZS50ZXh0PXQsZS5pc0NvbW1lbnQ9ITAsZX0sX3I9QXJyYXkucHJvdG90eXBlLGJyPU9iamVjdC5jcmVhdGUoX3IpO1tcInB1c2hcIixcInBvcFwiLFwic2hpZnRcIixcInVuc2hpZnRcIixcInNwbGljZVwiLFwic29ydFwiLFwicmV2ZXJzZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPV9yW3RdO0MoYnIsdCxmdW5jdGlvbigpe2Zvcih2YXIgbj1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOyluW3JdPWFyZ3VtZW50c1tyXTt2YXIgaSxvPWUuYXBwbHkodGhpcyxuKSxhPXRoaXMuX19vYl9fO3N3aXRjaCh0KXtjYXNlXCJwdXNoXCI6Y2FzZVwidW5zaGlmdFwiOmk9bjticmVhaztjYXNlXCJzcGxpY2VcIjppPW4uc2xpY2UoMil9cmV0dXJuIGkmJmEub2JzZXJ2ZUFycmF5KGkpLGEuZGVwLm5vdGlmeSgpLG99KX0pO3ZhciAkcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiciksQ3I9e3Nob3VsZENvbnZlcnQ6ITB9LHdyPWZ1bmN0aW9uKHQpe2lmKHRoaXMudmFsdWU9dCx0aGlzLmRlcD1uZXcgdnIsdGhpcy52bUNvdW50PTAsQyh0LFwiX19vYl9fXCIsdGhpcyksQXJyYXkuaXNBcnJheSh0KSl7KFduP086UykodCxiciwkciksdGhpcy5vYnNlcnZlQXJyYXkodCl9ZWxzZSB0aGlzLndhbGsodCl9O3dyLnByb3RvdHlwZS53YWxrPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1PYmplY3Qua2V5cyh0KSxuPTA7bjxlLmxlbmd0aDtuKyspRSh0LGVbbl0sdFtlW25dXSl9LHdyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTAsbj10Lmxlbmd0aDtlPG47ZSsrKVQodFtlXSl9O3ZhciB4cj1Kbi5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7eHIuZGF0YT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIG4/TSh0LGUsbik6ZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT90Ok0odCxlKX0sS24uZm9yRWFjaChmdW5jdGlvbih0KXt4clt0XT1EfSksem4uZm9yRWFjaChmdW5jdGlvbih0KXt4clt0K1wic1wiXT1QfSkseHIud2F0Y2g9ZnVuY3Rpb24odCxlLG4scil7aWYodD09PWlyJiYodD12b2lkIDApLGU9PT1pciYmKGU9dm9pZCAwKSwhZSlyZXR1cm4gT2JqZWN0LmNyZWF0ZSh0fHxudWxsKTtpZighdClyZXR1cm4gZTt2YXIgaT17fTtoKGksdCk7Zm9yKHZhciBvIGluIGUpe3ZhciBhPWlbb10scz1lW29dO2EmJiFBcnJheS5pc0FycmF5KGEpJiYoYT1bYV0pLGlbb109YT9hLmNvbmNhdChzKTpBcnJheS5pc0FycmF5KHMpP3M6W3NdfXJldHVybiBpfSx4ci5wcm9wcz14ci5tZXRob2RzPXhyLmluamVjdD14ci5jb21wdXRlZD1mdW5jdGlvbih0LGUsbixyKXtpZighdClyZXR1cm4gZTt2YXIgaT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBoKGksdCksZSYmaChpLGUpLGl9LHhyLnByb3ZpZGU9TTt2YXIga3IsQXIsT3I9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09ZT90OmV9LFNyPVtdLFRyPSExLEVyPSExO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZXRJbW1lZGlhdGUmJncoc2V0SW1tZWRpYXRlKSlBcj1mdW5jdGlvbigpe3NldEltbWVkaWF0ZShKKX07ZWxzZSBpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgTWVzc2FnZUNoYW5uZWx8fCF3KE1lc3NhZ2VDaGFubmVsKSYmXCJbb2JqZWN0IE1lc3NhZ2VDaGFubmVsQ29uc3RydWN0b3JdXCIhPT1NZXNzYWdlQ2hhbm5lbC50b1N0cmluZygpKUFyPWZ1bmN0aW9uKCl7c2V0VGltZW91dChKLDApfTtlbHNle3ZhciBqcj1uZXcgTWVzc2FnZUNoYW5uZWwsTnI9anIucG9ydDI7anIucG9ydDEub25tZXNzYWdlPUosQXI9ZnVuY3Rpb24oKXtOci5wb3N0TWVzc2FnZSgxKX19aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJncoUHJvbWlzZSkpe3ZhciBJcj1Qcm9taXNlLnJlc29sdmUoKTtrcj1mdW5jdGlvbigpe0lyLnRoZW4oSikscnImJnNldFRpbWVvdXQoeSl9fWVsc2Uga3I9QXI7dmFyIExyLE1yPW5ldyBjcixEcj1wKGZ1bmN0aW9uKHQpe3ZhciBlPVwiJlwiPT09dC5jaGFyQXQoMCksbj1cIn5cIj09PSh0PWU/dC5zbGljZSgxKTp0KS5jaGFyQXQoMCkscj1cIiFcIj09PSh0PW4/dC5zbGljZSgxKTp0KS5jaGFyQXQoMCk7cmV0dXJuIHQ9cj90LnNsaWNlKDEpOnQse25hbWU6dCxvbmNlOm4sY2FwdHVyZTpyLHBhc3NpdmU6ZX19KSxQcj1udWxsLEZyPVtdLFJyPVtdLEhyPXt9LEJyPSExLFVyPSExLFZyPTAsenI9MCxLcj1mdW5jdGlvbih0LGUsbixyLGkpe3RoaXMudm09dCxpJiYodC5fd2F0Y2hlcj10aGlzKSx0Ll93YXRjaGVycy5wdXNoKHRoaXMpLHI/KHRoaXMuZGVlcD0hIXIuZGVlcCx0aGlzLnVzZXI9ISFyLnVzZXIsdGhpcy5sYXp5PSEhci5sYXp5LHRoaXMuc3luYz0hIXIuc3luYyk6dGhpcy5kZWVwPXRoaXMudXNlcj10aGlzLmxhenk9dGhpcy5zeW5jPSExLHRoaXMuY2I9bix0aGlzLmlkPSsrenIsdGhpcy5hY3RpdmU9ITAsdGhpcy5kaXJ0eT10aGlzLmxhenksdGhpcy5kZXBzPVtdLHRoaXMubmV3RGVwcz1bXSx0aGlzLmRlcElkcz1uZXcgY3IsdGhpcy5uZXdEZXBJZHM9bmV3IGNyLHRoaXMuZXhwcmVzc2lvbj1cIlwiLFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/dGhpcy5nZXR0ZXI9ZToodGhpcy5nZXR0ZXI9ZnVuY3Rpb24odCl7aWYoIXFuLnRlc3QodCkpe3ZhciBlPXQuc3BsaXQoXCIuXCIpO3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7aWYoIXQpcmV0dXJuO3Q9dFtlW25dXX1yZXR1cm4gdH19fShlKSx0aGlzLmdldHRlcnx8KHRoaXMuZ2V0dGVyPWZ1bmN0aW9uKCl7fSkpLHRoaXMudmFsdWU9dGhpcy5sYXp5P3ZvaWQgMDp0aGlzLmdldCgpfTtLci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7IWZ1bmN0aW9uKHQpe3ZyLnRhcmdldCYmaHIucHVzaCh2ci50YXJnZXQpLHZyLnRhcmdldD10fSh0aGlzKTt2YXIgdCxlPXRoaXMudm07dHJ5e3Q9dGhpcy5nZXR0ZXIuY2FsbChlLGUpfWNhdGNoKHQpe2lmKCF0aGlzLnVzZXIpdGhyb3cgdDtWKHQsZSwnZ2V0dGVyIGZvciB3YXRjaGVyIFwiJyt0aGlzLmV4cHJlc3Npb24rJ1wiJyl9ZmluYWxseXt0aGlzLmRlZXAmJlcodCksdnIudGFyZ2V0PWhyLnBvcCgpLHRoaXMuY2xlYW51cERlcHMoKX1yZXR1cm4gdH0sS3IucHJvdG90eXBlLmFkZERlcD1mdW5jdGlvbih0KXt2YXIgZT10LmlkO3RoaXMubmV3RGVwSWRzLmhhcyhlKXx8KHRoaXMubmV3RGVwSWRzLmFkZChlKSx0aGlzLm5ld0RlcHMucHVzaCh0KSx0aGlzLmRlcElkcy5oYXMoZSl8fHQuYWRkU3ViKHRoaXMpKX0sS3IucHJvdG90eXBlLmNsZWFudXBEZXBzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyl7dmFyIGU9dGhpcy5kZXBzW3RdO3RoaXMubmV3RGVwSWRzLmhhcyhlLmlkKXx8ZS5yZW1vdmVTdWIodGhpcyl9dmFyIG49dGhpcy5kZXBJZHM7dGhpcy5kZXBJZHM9dGhpcy5uZXdEZXBJZHMsdGhpcy5uZXdEZXBJZHM9bix0aGlzLm5ld0RlcElkcy5jbGVhcigpLG49dGhpcy5kZXBzLHRoaXMuZGVwcz10aGlzLm5ld0RlcHMsdGhpcy5uZXdEZXBzPW4sdGhpcy5uZXdEZXBzLmxlbmd0aD0wfSxLci5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5sYXp5P3RoaXMuZGlydHk9ITA6dGhpcy5zeW5jP3RoaXMucnVuKCk6ZnVuY3Rpb24odCl7dmFyIGU9dC5pZDtpZihudWxsPT1IcltlXSl7aWYoSHJbZV09ITAsVXIpe2Zvcih2YXIgbj1Gci5sZW5ndGgtMTtuPlZyJiZGcltuXS5pZD50LmlkOyluLS07RnIuc3BsaWNlKG4rMSwwLHQpfWVsc2UgRnIucHVzaCh0KTtCcnx8KEJyPSEwLHEoaHQpKX19KHRoaXMpfSxLci5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7aWYodGhpcy5hY3RpdmUpe3ZhciB0PXRoaXMuZ2V0KCk7aWYodCE9PXRoaXMudmFsdWV8fGkodCl8fHRoaXMuZGVlcCl7dmFyIGU9dGhpcy52YWx1ZTtpZih0aGlzLnZhbHVlPXQsdGhpcy51c2VyKXRyeXt0aGlzLmNiLmNhbGwodGhpcy52bSx0LGUpfWNhdGNoKHQpe1YodCx0aGlzLnZtLCdjYWxsYmFjayBmb3Igd2F0Y2hlciBcIicrdGhpcy5leHByZXNzaW9uKydcIicpfWVsc2UgdGhpcy5jYi5jYWxsKHRoaXMudm0sdCxlKX19fSxLci5wcm90b3R5cGUuZXZhbHVhdGU9ZnVuY3Rpb24oKXt0aGlzLnZhbHVlPXRoaXMuZ2V0KCksdGhpcy5kaXJ0eT0hMX0sS3IucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspdGhpcy5kZXBzW3RdLmRlcGVuZCgpfSxLci5wcm90b3R5cGUudGVhcmRvd249ZnVuY3Rpb24oKXtpZih0aGlzLmFjdGl2ZSl7dGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZHx8bCh0aGlzLnZtLl93YXRjaGVycyx0aGlzKTtmb3IodmFyIHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KXRoaXMuZGVwc1t0XS5yZW1vdmVTdWIodGhpcyk7dGhpcy5hY3RpdmU9ITF9fTt2YXIgSnI9e2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDp5LHNldDp5fSxxcj17bGF6eTohMH07TnQoSXQucHJvdG90eXBlKTt2YXIgV3I9e2luaXQ6ZnVuY3Rpb24odCxuLHIsaSl7aWYoIXQuY29tcG9uZW50SW5zdGFuY2V8fHQuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkKXsodC5jb21wb25lbnRJbnN0YW5jZT1mdW5jdGlvbih0LG4scixpKXt2YXIgbz17X2lzQ29tcG9uZW50OiEwLHBhcmVudDpuLF9wYXJlbnRWbm9kZTp0LF9wYXJlbnRFbG06cnx8bnVsbCxfcmVmRWxtOml8fG51bGx9LGE9dC5kYXRhLmlubGluZVRlbXBsYXRlO3JldHVybiBlKGEpJiYoby5yZW5kZXI9YS5yZW5kZXIsby5zdGF0aWNSZW5kZXJGbnM9YS5zdGF0aWNSZW5kZXJGbnMpLG5ldyB0LmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvKX0odCxQcixyLGkpKS4kbW91bnQobj90LmVsbTp2b2lkIDAsbil9ZWxzZSBpZih0LmRhdGEua2VlcEFsaXZlKXt2YXIgbz10O1dyLnByZXBhdGNoKG8sbyl9fSxwcmVwYXRjaDpmdW5jdGlvbih0LGUpe3ZhciBuPWUuY29tcG9uZW50T3B0aW9uczshZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbz0hIShpfHx0LiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbnx8ci5kYXRhLnNjb3BlZFNsb3RzfHx0LiRzY29wZWRTbG90cyE9PWpuKTtpZih0LiRvcHRpb25zLl9wYXJlbnRWbm9kZT1yLHQuJHZub2RlPXIsdC5fdm5vZGUmJih0Ll92bm9kZS5wYXJlbnQ9ciksdC4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW49aSx0LiRhdHRycz1yLmRhdGEmJnIuZGF0YS5hdHRyc3x8am4sdC4kbGlzdGVuZXJzPW58fGpuLGUmJnQuJG9wdGlvbnMucHJvcHMpe0NyLnNob3VsZENvbnZlcnQ9ITE7Zm9yKHZhciBhPXQuX3Byb3BzLHM9dC4kb3B0aW9ucy5fcHJvcEtleXN8fFtdLGM9MDtjPHMubGVuZ3RoO2MrKyl7dmFyIHU9c1tjXTthW3VdPUgodSx0LiRvcHRpb25zLnByb3BzLGUsdCl9Q3Iuc2hvdWxkQ29udmVydD0hMCx0LiRvcHRpb25zLnByb3BzRGF0YT1lfWlmKG4pe3ZhciBsPXQuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVyczt0LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM9bixzdCh0LG4sbCl9byYmKHQuJHNsb3RzPWN0KGksci5jb250ZXh0KSx0LiRmb3JjZVVwZGF0ZSgpKX0oZS5jb21wb25lbnRJbnN0YW5jZT10LmNvbXBvbmVudEluc3RhbmNlLG4ucHJvcHNEYXRhLG4ubGlzdGVuZXJzLGUsbi5jaGlsZHJlbil9LGluc2VydDpmdW5jdGlvbih0KXt2YXIgZT10LmNvbnRleHQsbj10LmNvbXBvbmVudEluc3RhbmNlO24uX2lzTW91bnRlZHx8KG4uX2lzTW91bnRlZD0hMCx2dChuLFwibW91bnRlZFwiKSksdC5kYXRhLmtlZXBBbGl2ZSYmKGUuX2lzTW91bnRlZD9mdW5jdGlvbih0KXt0Ll9pbmFjdGl2ZT0hMSxSci5wdXNoKHQpfShuKTpwdChuLCEwKSl9LGRlc3Ryb3k6ZnVuY3Rpb24odCl7dmFyIGU9dC5jb21wb25lbnRJbnN0YW5jZTtlLl9pc0Rlc3Ryb3llZHx8KHQuZGF0YS5rZWVwQWxpdmU/ZHQoZSwhMCk6ZS4kZGVzdHJveSgpKX19LEdyPU9iamVjdC5rZXlzKFdyKSxacj0xLFhyPTIsWXI9MDshZnVuY3Rpb24odCl7dC5wcm90b3R5cGUuX2luaXQ9ZnVuY3Rpb24odCl7dGhpcy5fdWlkPVlyKyssdGhpcy5faXNWdWU9ITAsdCYmdC5faXNDb21wb25lbnQ/ZnVuY3Rpb24odCxlKXt2YXIgbj10LiRvcHRpb25zPU9iamVjdC5jcmVhdGUodC5jb25zdHJ1Y3Rvci5vcHRpb25zKSxyPWUuX3BhcmVudFZub2RlO24ucGFyZW50PWUucGFyZW50LG4uX3BhcmVudFZub2RlPXIsbi5fcGFyZW50RWxtPWUuX3BhcmVudEVsbSxuLl9yZWZFbG09ZS5fcmVmRWxtO3ZhciBpPXIuY29tcG9uZW50T3B0aW9ucztuLnByb3BzRGF0YT1pLnByb3BzRGF0YSxuLl9wYXJlbnRMaXN0ZW5lcnM9aS5saXN0ZW5lcnMsbi5fcmVuZGVyQ2hpbGRyZW49aS5jaGlsZHJlbixuLl9jb21wb25lbnRUYWc9aS50YWcsZS5yZW5kZXImJihuLnJlbmRlcj1lLnJlbmRlcixuLnN0YXRpY1JlbmRlckZucz1lLnN0YXRpY1JlbmRlckZucyl9KHRoaXMsdCk6dGhpcy4kb3B0aW9ucz1GKEZ0KHRoaXMuY29uc3RydWN0b3IpLHR8fHt9LHRoaXMpLHRoaXMuX3JlbmRlclByb3h5PXRoaXMsdGhpcy5fc2VsZj10aGlzLGZ1bmN0aW9uKHQpe3ZhciBlPXQuJG9wdGlvbnMsbj1lLnBhcmVudDtpZihuJiYhZS5hYnN0cmFjdCl7Zm9yKDtuLiRvcHRpb25zLmFic3RyYWN0JiZuLiRwYXJlbnQ7KW49bi4kcGFyZW50O24uJGNoaWxkcmVuLnB1c2godCl9dC4kcGFyZW50PW4sdC4kcm9vdD1uP24uJHJvb3Q6dCx0LiRjaGlsZHJlbj1bXSx0LiRyZWZzPXt9LHQuX3dhdGNoZXI9bnVsbCx0Ll9pbmFjdGl2ZT1udWxsLHQuX2RpcmVjdEluYWN0aXZlPSExLHQuX2lzTW91bnRlZD0hMSx0Ll9pc0Rlc3Ryb3llZD0hMSx0Ll9pc0JlaW5nRGVzdHJveWVkPSExfSh0aGlzKSxmdW5jdGlvbih0KXt0Ll9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0Ll9oYXNIb29rRXZlbnQ9ITE7dmFyIGU9dC4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO2UmJnN0KHQsZSl9KHRoaXMpLGZ1bmN0aW9uKHQpe3QuX3Zub2RlPW51bGwsdC5fc3RhdGljVHJlZXM9bnVsbDt2YXIgZT10LiRvcHRpb25zLG49dC4kdm5vZGU9ZS5fcGFyZW50Vm5vZGUscj1uJiZuLmNvbnRleHQ7dC4kc2xvdHM9Y3QoZS5fcmVuZGVyQ2hpbGRyZW4sciksdC4kc2NvcGVkU2xvdHM9am4sdC5fYz1mdW5jdGlvbihlLG4scixpKXtyZXR1cm4gRHQodCxlLG4scixpLCExKX0sdC4kY3JlYXRlRWxlbWVudD1mdW5jdGlvbihlLG4scixpKXtyZXR1cm4gRHQodCxlLG4scixpLCEwKX07dmFyIGk9biYmbi5kYXRhO0UodCxcIiRhdHRyc1wiLGkmJmkuYXR0cnN8fGpuLDAsITApLEUodCxcIiRsaXN0ZW5lcnNcIixlLl9wYXJlbnRMaXN0ZW5lcnN8fGpuLDAsITApfSh0aGlzKSx2dCh0aGlzLFwiYmVmb3JlQ3JlYXRlXCIpLGZ1bmN0aW9uKHQpe3ZhciBlPSR0KHQuJG9wdGlvbnMuaW5qZWN0LHQpO2UmJihDci5zaG91bGRDb252ZXJ0PSExLE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7RSh0LG4sZVtuXSl9KSxDci5zaG91bGRDb252ZXJ0PSEwKX0odGhpcykseXQodGhpcyksZnVuY3Rpb24odCl7dmFyIGU9dC4kb3B0aW9ucy5wcm92aWRlO2UmJih0Ll9wcm92aWRlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UuY2FsbCh0KTplKX0odGhpcyksdnQodGhpcyxcImNyZWF0ZWRcIiksdGhpcy4kb3B0aW9ucy5lbCYmdGhpcy4kbW91bnQodGhpcy4kb3B0aW9ucy5lbCl9fShSdCksZnVuY3Rpb24odCl7dmFyIGU9e307ZS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YX07dmFyIG49e307bi5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcHJvcHN9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcIiRkYXRhXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiJHByb3BzXCIsbiksdC5wcm90b3R5cGUuJHNldD1qLHQucHJvdG90eXBlLiRkZWxldGU9Tix0LnByb3RvdHlwZS4kd2F0Y2g9ZnVuY3Rpb24odCxlLG4pe2lmKG8oZSkpcmV0dXJuIGJ0KHRoaXMsdCxlLG4pOyhuPW58fHt9KS51c2VyPSEwO3ZhciByPW5ldyBLcih0aGlzLHQsZSxuKTtyZXR1cm4gbi5pbW1lZGlhdGUmJmUuY2FsbCh0aGlzLHIudmFsdWUpLGZ1bmN0aW9uKCl7ci50ZWFyZG93bigpfX19KFJ0KSxmdW5jdGlvbih0KXt2YXIgZT0vXmhvb2s6Lzt0LnByb3RvdHlwZS4kb249ZnVuY3Rpb24odCxuKXtpZihBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKyl0aGlzLiRvbih0W3JdLG4pO2Vsc2UodGhpcy5fZXZlbnRzW3RdfHwodGhpcy5fZXZlbnRzW3RdPVtdKSkucHVzaChuKSxlLnRlc3QodCkmJih0aGlzLl9oYXNIb29rRXZlbnQ9ITApO3JldHVybiB0aGlzfSx0LnByb3RvdHlwZS4kb25jZT1mdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXtyLiRvZmYodCxuKSxlLmFwcGx5KHIsYXJndW1lbnRzKX12YXIgcj10aGlzO3JldHVybiBuLmZuPWUsci4kb24odCxuKSxyfSx0LnByb3RvdHlwZS4kb2ZmPWZ1bmN0aW9uKHQsZSl7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXM7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHZhciBuPTAscj10Lmxlbmd0aDtuPHI7bisrKXRoaXMuJG9mZih0W25dLGUpO3JldHVybiB0aGlzfXZhciBpPXRoaXMuX2V2ZW50c1t0XTtpZighaSlyZXR1cm4gdGhpcztpZighZSlyZXR1cm4gdGhpcy5fZXZlbnRzW3RdPW51bGwsdGhpcztpZihlKWZvcih2YXIgbyxhPWkubGVuZ3RoO2EtLTspaWYoKG89aVthXSk9PT1lfHxvLmZuPT09ZSl7aS5zcGxpY2UoYSwxKTticmVha31yZXR1cm4gdGhpc30sdC5wcm90b3R5cGUuJGVtaXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPWUuX2V2ZW50c1t0XTtpZihuKXtuPW4ubGVuZ3RoPjE/dihuKTpuO2Zvcih2YXIgcj12KGFyZ3VtZW50cywxKSxpPTAsbz1uLmxlbmd0aDtpPG87aSsrKXRyeXtuW2ldLmFwcGx5KGUscil9Y2F0Y2gobil7VihuLGUsJ2V2ZW50IGhhbmRsZXIgZm9yIFwiJyt0KydcIicpfX1yZXR1cm4gZX19KFJ0KSxmdW5jdGlvbih0KXt0LnByb3RvdHlwZS5fdXBkYXRlPWZ1bmN0aW9uKHQsZSl7dGhpcy5faXNNb3VudGVkJiZ2dCh0aGlzLFwiYmVmb3JlVXBkYXRlXCIpO3ZhciBuPXRoaXMuJGVsLHI9dGhpcy5fdm5vZGUsaT1QcjtQcj10aGlzLHRoaXMuX3Zub2RlPXQscj90aGlzLiRlbD10aGlzLl9fcGF0Y2hfXyhyLHQpOih0aGlzLiRlbD10aGlzLl9fcGF0Y2hfXyh0aGlzLiRlbCx0LGUsITEsdGhpcy4kb3B0aW9ucy5fcGFyZW50RWxtLHRoaXMuJG9wdGlvbnMuX3JlZkVsbSksdGhpcy4kb3B0aW9ucy5fcGFyZW50RWxtPXRoaXMuJG9wdGlvbnMuX3JlZkVsbT1udWxsKSxQcj1pLG4mJihuLl9fdnVlX189bnVsbCksdGhpcy4kZWwmJih0aGlzLiRlbC5fX3Z1ZV9fPXRoaXMpLHRoaXMuJHZub2RlJiZ0aGlzLiRwYXJlbnQmJnRoaXMuJHZub2RlPT09dGhpcy4kcGFyZW50Ll92bm9kZSYmKHRoaXMuJHBhcmVudC4kZWw9dGhpcy4kZWwpfSx0LnByb3RvdHlwZS4kZm9yY2VVcGRhdGU9ZnVuY3Rpb24oKXt0aGlzLl93YXRjaGVyJiZ0aGlzLl93YXRjaGVyLnVwZGF0ZSgpfSx0LnByb3RvdHlwZS4kZGVzdHJveT1mdW5jdGlvbigpe2lmKCF0aGlzLl9pc0JlaW5nRGVzdHJveWVkKXt2dCh0aGlzLFwiYmVmb3JlRGVzdHJveVwiKSx0aGlzLl9pc0JlaW5nRGVzdHJveWVkPSEwO3ZhciB0PXRoaXMuJHBhcmVudDshdHx8dC5faXNCZWluZ0Rlc3Ryb3llZHx8dGhpcy4kb3B0aW9ucy5hYnN0cmFjdHx8bCh0LiRjaGlsZHJlbix0aGlzKSx0aGlzLl93YXRjaGVyJiZ0aGlzLl93YXRjaGVyLnRlYXJkb3duKCk7Zm9yKHZhciBlPXRoaXMuX3dhdGNoZXJzLmxlbmd0aDtlLS07KXRoaXMuX3dhdGNoZXJzW2VdLnRlYXJkb3duKCk7dGhpcy5fZGF0YS5fX29iX18mJnRoaXMuX2RhdGEuX19vYl9fLnZtQ291bnQtLSx0aGlzLl9pc0Rlc3Ryb3llZD0hMCx0aGlzLl9fcGF0Y2hfXyh0aGlzLl92bm9kZSxudWxsKSx2dCh0aGlzLFwiZGVzdHJveWVkXCIpLHRoaXMuJG9mZigpLHRoaXMuJGVsJiYodGhpcy4kZWwuX192dWVfXz1udWxsKSx0aGlzLiR2bm9kZSYmKHRoaXMuJHZub2RlLnBhcmVudD1udWxsKX19fShSdCksZnVuY3Rpb24odCl7TnQodC5wcm90b3R5cGUpLHQucHJvdG90eXBlLiRuZXh0VGljaz1mdW5jdGlvbih0KXtyZXR1cm4gcSh0LHRoaXMpfSx0LnByb3RvdHlwZS5fcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuJG9wdGlvbnMsbj1lLnJlbmRlcixyPWUuX3BhcmVudFZub2RlO2lmKHQuX2lzTW91bnRlZClmb3IodmFyIGkgaW4gdC4kc2xvdHMpe3ZhciBvPXQuJHNsb3RzW2ldOyhvLl9yZW5kZXJlZHx8b1swXSYmb1swXS5lbG0pJiYodC4kc2xvdHNbaV09QShvLCEwKSl9dC4kc2NvcGVkU2xvdHM9ciYmci5kYXRhLnNjb3BlZFNsb3RzfHxqbix0LiR2bm9kZT1yO3ZhciBhO3RyeXthPW4uY2FsbCh0Ll9yZW5kZXJQcm94eSx0LiRjcmVhdGVFbGVtZW50KX1jYXRjaChlKXtWKGUsdCxcInJlbmRlclwiKSxhPXQuX3Zub2RlfXJldHVybiBhIGluc3RhbmNlb2YgbXJ8fChhPWdyKCkpLGEucGFyZW50PXIsYX19KFJ0KTt2YXIgUXI9W1N0cmluZyxSZWdFeHAsQXJyYXldLHRpPXtLZWVwQWxpdmU6e25hbWU6XCJrZWVwLWFsaXZlXCIsYWJzdHJhY3Q6ITAscHJvcHM6e2luY2x1ZGU6UXIsZXhjbHVkZTpRcixtYXg6W1N0cmluZyxOdW1iZXJdfSxjcmVhdGVkOmZ1bmN0aW9uKCl7dGhpcy5jYWNoZT1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMua2V5cz1bXX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIHRoaXMuY2FjaGUpenQodGhpcy5jYWNoZSx0LHRoaXMua2V5cyl9LHdhdGNoOntpbmNsdWRlOmZ1bmN0aW9uKHQpe1Z0KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIFV0KHQsZSl9KX0sZXhjbHVkZTpmdW5jdGlvbih0KXtWdCh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiFVdCh0LGUpfSl9fSxyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRzbG90cy5kZWZhdWx0LGU9aXQodCksbj1lJiZlLmNvbXBvbmVudE9wdGlvbnM7aWYobil7dmFyIHI9QnQobiksaT10aGlzLmluY2x1ZGUsbz10aGlzLmV4Y2x1ZGU7aWYoaSYmKCFyfHwhVXQoaSxyKSl8fG8mJnImJlV0KG8scikpcmV0dXJuIGU7dmFyIGE9dGhpcy5jYWNoZSxzPXRoaXMua2V5cyxjPW51bGw9PWUua2V5P24uQ3Rvci5jaWQrKG4udGFnP1wiOjpcIituLnRhZzpcIlwiKTplLmtleTthW2NdPyhlLmNvbXBvbmVudEluc3RhbmNlPWFbY10uY29tcG9uZW50SW5zdGFuY2UsbChzLGMpLHMucHVzaChjKSk6KGFbY109ZSxzLnB1c2goYyksdGhpcy5tYXgmJnMubGVuZ3RoPnBhcnNlSW50KHRoaXMubWF4KSYmenQoYSxzWzBdLHMsdGhpcy5fdm5vZGUpKSxlLmRhdGEua2VlcEFsaXZlPSEwfXJldHVybiBlfHx0JiZ0WzBdfX19OyFmdW5jdGlvbih0KXt2YXIgZT17fTtlLmdldD1mdW5jdGlvbigpe3JldHVybiBKbn0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJjb25maWdcIixlKSx0LnV0aWw9e3dhcm46cHIsZXh0ZW5kOmgsbWVyZ2VPcHRpb25zOkYsZGVmaW5lUmVhY3RpdmU6RX0sdC5zZXQ9aix0LmRlbGV0ZT1OLHQubmV4dFRpY2s9cSx0Lm9wdGlvbnM9T2JqZWN0LmNyZWF0ZShudWxsKSx6bi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3Qub3B0aW9uc1tlK1wic1wiXT1PYmplY3QuY3JlYXRlKG51bGwpfSksdC5vcHRpb25zLl9iYXNlPXQsaCh0Lm9wdGlvbnMuY29tcG9uZW50cyx0aSksZnVuY3Rpb24odCl7dC51c2U9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5faW5zdGFsbGVkUGx1Z2luc3x8KHRoaXMuX2luc3RhbGxlZFBsdWdpbnM9W10pO2lmKGUuaW5kZXhPZih0KT4tMSlyZXR1cm4gdGhpczt2YXIgbj12KGFyZ3VtZW50cywxKTtyZXR1cm4gbi51bnNoaWZ0KHRoaXMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQuaW5zdGFsbD90Lmluc3RhbGwuYXBwbHkodCxuKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0LmFwcGx5KG51bGwsbiksZS5wdXNoKHQpLHRoaXN9fSh0KSxmdW5jdGlvbih0KXt0Lm1peGluPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm9wdGlvbnM9Rih0aGlzLm9wdGlvbnMsdCksdGhpc319KHQpLEh0KHQpLGZ1bmN0aW9uKHQpe3puLmZvckVhY2goZnVuY3Rpb24oZSl7dFtlXT1mdW5jdGlvbih0LG4pe3JldHVybiBuPyhcImNvbXBvbmVudFwiPT09ZSYmbyhuKSYmKG4ubmFtZT1uLm5hbWV8fHQsbj10aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKG4pKSxcImRpcmVjdGl2ZVwiPT09ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49e2JpbmQ6bix1cGRhdGU6bn0pLHRoaXMub3B0aW9uc1tlK1wic1wiXVt0XT1uLG4pOnRoaXMub3B0aW9uc1tlK1wic1wiXVt0XX19KX0odCl9KFJ0KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoUnQucHJvdG90eXBlLFwiJGlzU2VydmVyXCIse2dldDp1cn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSdC5wcm90b3R5cGUsXCIkc3NyQ29udGV4dFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR9fSksUnQudmVyc2lvbj1cIjIuNS4xM1wiO3ZhciBlaSxuaSxyaSxpaSxvaSxhaSxzaSxjaSx1aT11KFwic3R5bGUsY2xhc3NcIiksbGk9dShcImlucHV0LHRleHRhcmVhLG9wdGlvbixzZWxlY3QscHJvZ3Jlc3NcIiksZmk9ZnVuY3Rpb24odCxlLG4pe3JldHVyblwidmFsdWVcIj09PW4mJmxpKHQpJiZcImJ1dHRvblwiIT09ZXx8XCJzZWxlY3RlZFwiPT09biYmXCJvcHRpb25cIj09PXR8fFwiY2hlY2tlZFwiPT09biYmXCJpbnB1dFwiPT09dHx8XCJtdXRlZFwiPT09biYmXCJ2aWRlb1wiPT09dH0scGk9dShcImNvbnRlbnRlZGl0YWJsZSxkcmFnZ2FibGUsc3BlbGxjaGVja1wiKSxkaT11KFwiYWxsb3dmdWxsc2NyZWVuLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjaGVja2VkLGNvbXBhY3QsY29udHJvbHMsZGVjbGFyZSxkZWZhdWx0LGRlZmF1bHRjaGVja2VkLGRlZmF1bHRtdXRlZCxkZWZhdWx0c2VsZWN0ZWQsZGVmZXIsZGlzYWJsZWQsZW5hYmxlZCxmb3Jtbm92YWxpZGF0ZSxoaWRkZW4saW5kZXRlcm1pbmF0ZSxpbmVydCxpc21hcCxpdGVtc2NvcGUsbG9vcCxtdWx0aXBsZSxtdXRlZCxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3ZhbGlkYXRlLG5vd3JhcCxvcGVuLHBhdXNlb25leGl0LHJlYWRvbmx5LHJlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzb3J0YWJsZSx0cmFuc2xhdGUsdHJ1ZXNwZWVkLHR5cGVtdXN0bWF0Y2gsdmlzaWJsZVwiKSx2aT1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixoaT1mdW5jdGlvbih0KXtyZXR1cm5cIjpcIj09PXQuY2hhckF0KDUpJiZcInhsaW5rXCI9PT10LnNsaWNlKDAsNSl9LG1pPWZ1bmN0aW9uKHQpe3JldHVybiBoaSh0KT90LnNsaWNlKDYsdC5sZW5ndGgpOlwiXCJ9LHlpPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10fHwhMT09PXR9LGdpPXtzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLG1hdGg6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCJ9LF9pPXUoXCJodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSxhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLHBpY3R1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LHMsc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLGVtYmVkLG9iamVjdCxwYXJhbSxzb3VyY2UsY2FudmFzLHNjcmlwdCxub3NjcmlwdCxkZWwsaW5zLGNhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLGJ1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sb3V0cHV0LHByb2dyZXNzLHNlbGVjdCx0ZXh0YXJlYSxkZXRhaWxzLGRpYWxvZyxtZW51LG1lbnVpdGVtLHN1bW1hcnksY29udGVudCxlbGVtZW50LHNoYWRvdyx0ZW1wbGF0ZSxibG9ja3F1b3RlLGlmcmFtZSx0Zm9vdFwiKSxiaT11KFwic3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udC1mYWNlLGZvcmVpZ25PYmplY3QsZyxnbHlwaCxpbWFnZSxsaW5lLG1hcmtlcixtYXNrLG1pc3NpbmctZ2x5cGgscGF0aCxwYXR0ZXJuLHBvbHlnb24scG9seWxpbmUscmVjdCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dHBhdGgsdHNwYW4sdXNlLHZpZXdcIiwhMCksJGk9ZnVuY3Rpb24odCl7cmV0dXJuIF9pKHQpfHxiaSh0KX0sQ2k9T2JqZWN0LmNyZWF0ZShudWxsKSx3aT11KFwidGV4dCxudW1iZXIscGFzc3dvcmQsc2VhcmNoLGVtYWlsLHRlbCx1cmxcIikseGk9T2JqZWN0LmZyZWV6ZSh7Y3JlYXRlRWxlbWVudDpmdW5jdGlvbih0LGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7cmV0dXJuXCJzZWxlY3RcIiE9PXQ/bjooZS5kYXRhJiZlLmRhdGEuYXR0cnMmJnZvaWQgMCE9PWUuZGF0YS5hdHRycy5tdWx0aXBsZSYmbi5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLFwibXVsdGlwbGVcIiksbil9LGNyZWF0ZUVsZW1lbnROUzpmdW5jdGlvbih0LGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZ2lbdF0sZSl9LGNyZWF0ZVRleHROb2RlOmZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KX0sY3JlYXRlQ29tbWVudDpmdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0KX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKHQsZSxuKXt0Lmluc2VydEJlZm9yZShlLG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbih0LGUpe3QucmVtb3ZlQ2hpbGQoZSl9LGFwcGVuZENoaWxkOmZ1bmN0aW9uKHQsZSl7dC5hcHBlbmRDaGlsZChlKX0scGFyZW50Tm9kZTpmdW5jdGlvbih0KXtyZXR1cm4gdC5wYXJlbnROb2RlfSxuZXh0U2libGluZzpmdW5jdGlvbih0KXtyZXR1cm4gdC5uZXh0U2libGluZ30sdGFnTmFtZTpmdW5jdGlvbih0KXtyZXR1cm4gdC50YWdOYW1lfSxzZXRUZXh0Q29udGVudDpmdW5jdGlvbih0LGUpe3QudGV4dENvbnRlbnQ9ZX0sc2V0QXR0cmlidXRlOmZ1bmN0aW9uKHQsZSxuKXt0LnNldEF0dHJpYnV0ZShlLG4pfX0pLGtpPXtjcmVhdGU6ZnVuY3Rpb24odCxlKXtYdChlKX0sdXBkYXRlOmZ1bmN0aW9uKHQsZSl7dC5kYXRhLnJlZiE9PWUuZGF0YS5yZWYmJihYdCh0LCEwKSxYdChlKSl9LGRlc3Ryb3k6ZnVuY3Rpb24odCl7WHQodCwhMCl9fSxBaT1uZXcgbXIoXCJcIix7fSxbXSksT2k9W1wiY3JlYXRlXCIsXCJhY3RpdmF0ZVwiLFwidXBkYXRlXCIsXCJyZW1vdmVcIixcImRlc3Ryb3lcIl0sU2k9e2NyZWF0ZTp0ZSx1cGRhdGU6dGUsZGVzdHJveTpmdW5jdGlvbih0KXt0ZSh0LEFpKX19LFRpPU9iamVjdC5jcmVhdGUobnVsbCksRWk9W2tpLFNpXSxqaT17Y3JlYXRlOnJlLHVwZGF0ZTpyZX0sTmk9e2NyZWF0ZTpvZSx1cGRhdGU6b2V9LElpPS9bXFx3KS4rXFwtXyRcXF1dLyxMaT1cIl9fclwiLE1pPVwiX19jXCIsRGk9e2NyZWF0ZTp4ZSx1cGRhdGU6eGV9LFBpPXtjcmVhdGU6a2UsdXBkYXRlOmtlfSxGaT1wKGZ1bmN0aW9uKHQpe3ZhciBlPXt9LG49LzooLispLztyZXR1cm4gdC5zcGxpdCgvOyg/IVteKF0qXFwpKS9nKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQpe3ZhciByPXQuc3BsaXQobik7ci5sZW5ndGg+MSYmKGVbclswXS50cmltKCldPXJbMV0udHJpbSgpKX19KSxlfSksUmk9L14tLS8sSGk9L1xccyohaW1wb3J0YW50JC8sQmk9ZnVuY3Rpb24odCxlLG4pe2lmKFJpLnRlc3QoZSkpdC5zdHlsZS5zZXRQcm9wZXJ0eShlLG4pO2Vsc2UgaWYoSGkudGVzdChuKSl0LnN0eWxlLnNldFByb3BlcnR5KGUsbi5yZXBsYWNlKEhpLFwiXCIpLFwiaW1wb3J0YW50XCIpO2Vsc2V7dmFyIHI9VmkoZSk7aWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspdC5zdHlsZVtyXT1uW2ldO2Vsc2UgdC5zdHlsZVtyXT1ufX0sVWk9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFZpPXAoZnVuY3Rpb24odCl7aWYoY2k9Y2l8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsXCJmaWx0ZXJcIiE9PSh0PVBuKHQpKSYmdCBpbiBjaSlyZXR1cm4gdDtmb3IodmFyIGU9dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpLG49MDtuPFVpLmxlbmd0aDtuKyspe3ZhciByPVVpW25dK2U7aWYociBpbiBjaSlyZXR1cm4gcn19KSx6aT17Y3JlYXRlOlNlLHVwZGF0ZTpTZX0sS2k9cChmdW5jdGlvbih0KXtyZXR1cm57ZW50ZXJDbGFzczp0K1wiLWVudGVyXCIsZW50ZXJUb0NsYXNzOnQrXCItZW50ZXItdG9cIixlbnRlckFjdGl2ZUNsYXNzOnQrXCItZW50ZXItYWN0aXZlXCIsbGVhdmVDbGFzczp0K1wiLWxlYXZlXCIsbGVhdmVUb0NsYXNzOnQrXCItbGVhdmUtdG9cIixsZWF2ZUFjdGl2ZUNsYXNzOnQrXCItbGVhdmUtYWN0aXZlXCJ9fSksSmk9R24mJiF0cixxaT1cInRyYW5zaXRpb25cIixXaT1cImFuaW1hdGlvblwiLEdpPVwidHJhbnNpdGlvblwiLFppPVwidHJhbnNpdGlvbmVuZFwiLFhpPVwiYW5pbWF0aW9uXCIsWWk9XCJhbmltYXRpb25lbmRcIjtKaSYmKHZvaWQgMD09PXdpbmRvdy5vbnRyYW5zaXRpb25lbmQmJnZvaWQgMCE9PXdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQmJihHaT1cIldlYmtpdFRyYW5zaXRpb25cIixaaT1cIndlYmtpdFRyYW5zaXRpb25FbmRcIiksdm9pZCAwPT09d2luZG93Lm9uYW5pbWF0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQmJihYaT1cIldlYmtpdEFuaW1hdGlvblwiLFlpPVwid2Via2l0QW5pbWF0aW9uRW5kXCIpKTt2YXIgUWk9R24/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTpzZXRUaW1lb3V0OmZ1bmN0aW9uKHQpe3JldHVybiB0KCl9LHRvPS9cXGIodHJhbnNmb3JtfGFsbCkoLHwkKS8sZW89ZnVuY3Rpb24oaSl7ZnVuY3Rpb24gbyh0KXt2YXIgbj1BLnBhcmVudE5vZGUodCk7ZShuKSYmQS5yZW1vdmVDaGlsZChuLHQpfWZ1bmN0aW9uIGEodCxyLGksbyxhKXtpZih0LmlzUm9vdEluc2VydD0hYSwhZnVuY3Rpb24odCxyLGksbyl7dmFyIGE9dC5kYXRhO2lmKGUoYSkpe3ZhciB1PWUodC5jb21wb25lbnRJbnN0YW5jZSkmJmEua2VlcEFsaXZlO2lmKGUoYT1hLmhvb2spJiZlKGE9YS5pbml0KSYmYSh0LCExLGksbyksZSh0LmNvbXBvbmVudEluc3RhbmNlKSlyZXR1cm4gcyh0LHIpLG4odSkmJmZ1bmN0aW9uKHQsbixyLGkpe2Zvcih2YXIgbyxhPXQ7YS5jb21wb25lbnRJbnN0YW5jZTspaWYoYT1hLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSxlKG89YS5kYXRhKSYmZShvPW8udHJhbnNpdGlvbikpe2ZvcihvPTA7bzx4LmFjdGl2YXRlLmxlbmd0aDsrK28peC5hY3RpdmF0ZVtvXShBaSxhKTtuLnB1c2goYSk7YnJlYWt9YyhyLHQuZWxtLGkpfSh0LHIsaSxvKSwhMH19KHQscixpLG8pKXt2YXIgdT10LmRhdGEsZj10LmNoaWxkcmVuLHY9dC50YWc7ZSh2KT8odC5lbG09dC5ucz9BLmNyZWF0ZUVsZW1lbnROUyh0Lm5zLHYpOkEuY3JlYXRlRWxlbWVudCh2LHQpLGQodCksbCh0LGYsciksZSh1KSYmcCh0LHIpLGMoaSx0LmVsbSxvKSk6bih0LmlzQ29tbWVudCk/KHQuZWxtPUEuY3JlYXRlQ29tbWVudCh0LnRleHQpLGMoaSx0LmVsbSxvKSk6KHQuZWxtPUEuY3JlYXRlVGV4dE5vZGUodC50ZXh0KSxjKGksdC5lbG0sbykpfX1mdW5jdGlvbiBzKHQsbil7ZSh0LmRhdGEucGVuZGluZ0luc2VydCkmJihuLnB1c2guYXBwbHkobix0LmRhdGEucGVuZGluZ0luc2VydCksdC5kYXRhLnBlbmRpbmdJbnNlcnQ9bnVsbCksdC5lbG09dC5jb21wb25lbnRJbnN0YW5jZS4kZWwsZih0KT8ocCh0LG4pLGQodCkpOihYdCh0KSxuLnB1c2godCkpfWZ1bmN0aW9uIGModCxuLHIpe2UodCkmJihlKHIpP3IucGFyZW50Tm9kZT09PXQmJkEuaW5zZXJ0QmVmb3JlKHQsbixyKTpBLmFwcGVuZENoaWxkKHQsbikpfWZ1bmN0aW9uIGwodCxlLG4pe2lmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHZhciBpPTA7aTxlLmxlbmd0aDsrK2kpYShlW2ldLG4sdC5lbG0sbnVsbCwhMCk7ZWxzZSByKHQudGV4dCkmJkEuYXBwZW5kQ2hpbGQodC5lbG0sQS5jcmVhdGVUZXh0Tm9kZShTdHJpbmcodC50ZXh0KSkpfWZ1bmN0aW9uIGYodCl7Zm9yKDt0LmNvbXBvbmVudEluc3RhbmNlOyl0PXQuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO3JldHVybiBlKHQudGFnKX1mdW5jdGlvbiBwKHQsbil7Zm9yKHZhciByPTA7cjx4LmNyZWF0ZS5sZW5ndGg7KytyKXguY3JlYXRlW3JdKEFpLHQpO2UoQz10LmRhdGEuaG9vaykmJihlKEMuY3JlYXRlKSYmQy5jcmVhdGUoQWksdCksZShDLmluc2VydCkmJm4ucHVzaCh0KSl9ZnVuY3Rpb24gZCh0KXt2YXIgbjtpZihlKG49dC5mblNjb3BlSWQpKUEuc2V0QXR0cmlidXRlKHQuZWxtLG4sXCJcIik7ZWxzZSBmb3IodmFyIHI9dDtyOyllKG49ci5jb250ZXh0KSYmZShuPW4uJG9wdGlvbnMuX3Njb3BlSWQpJiZBLnNldEF0dHJpYnV0ZSh0LmVsbSxuLFwiXCIpLHI9ci5wYXJlbnQ7ZShuPVByKSYmbiE9PXQuY29udGV4dCYmbiE9PXQuZm5Db250ZXh0JiZlKG49bi4kb3B0aW9ucy5fc2NvcGVJZCkmJkEuc2V0QXR0cmlidXRlKHQuZWxtLG4sXCJcIil9ZnVuY3Rpb24gdih0LGUsbixyLGksbyl7Zm9yKDtyPD1pOysrcilhKG5bcl0sbyx0LGUpfWZ1bmN0aW9uIGgodCl7dmFyIG4scixpPXQuZGF0YTtpZihlKGkpKWZvcihlKG49aS5ob29rKSYmZShuPW4uZGVzdHJveSkmJm4odCksbj0wO248eC5kZXN0cm95Lmxlbmd0aDsrK24peC5kZXN0cm95W25dKHQpO2lmKGUobj10LmNoaWxkcmVuKSlmb3Iocj0wO3I8dC5jaGlsZHJlbi5sZW5ndGg7KytyKWgodC5jaGlsZHJlbltyXSl9ZnVuY3Rpb24gbSh0LG4scixpKXtmb3IoO3I8PWk7KytyKXt2YXIgYT1uW3JdO2UoYSkmJihlKGEudGFnKT8oeShhKSxoKGEpKTpvKGEuZWxtKSl9fWZ1bmN0aW9uIHkodCxuKXtpZihlKG4pfHxlKHQuZGF0YSkpe3ZhciByLGk9eC5yZW1vdmUubGVuZ3RoKzE7Zm9yKGUobik/bi5saXN0ZW5lcnMrPWk6bj1mdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXswPT0tLW4ubGlzdGVuZXJzJiZvKHQpfXJldHVybiBuLmxpc3RlbmVycz1lLG59KHQuZWxtLGkpLGUocj10LmNvbXBvbmVudEluc3RhbmNlKSYmZShyPXIuX3Zub2RlKSYmZShyLmRhdGEpJiZ5KHIsbikscj0wO3I8eC5yZW1vdmUubGVuZ3RoOysrcil4LnJlbW92ZVtyXSh0LG4pO2Uocj10LmRhdGEuaG9vaykmJmUocj1yLnJlbW92ZSk/cih0LG4pOm4oKX1lbHNlIG8odC5lbG0pfWZ1bmN0aW9uIGcobixyLGksbyxzKXtmb3IodmFyIGMsdSxsLGY9MCxwPTAsZD1yLmxlbmd0aC0xLGg9clswXSx5PXJbZF0sZz1pLmxlbmd0aC0xLGI9aVswXSwkPWlbZ10sQz0hcztmPD1kJiZwPD1nOyl0KGgpP2g9clsrK2ZdOnQoeSk/eT1yWy0tZF06WXQoaCxiKT8oXyhoLGIsbyksaD1yWysrZl0sYj1pWysrcF0pOll0KHksJCk/KF8oeSwkLG8pLHk9clstLWRdLCQ9aVstLWddKTpZdChoLCQpPyhfKGgsJCxvKSxDJiZBLmluc2VydEJlZm9yZShuLGguZWxtLEEubmV4dFNpYmxpbmcoeS5lbG0pKSxoPXJbKytmXSwkPWlbLS1nXSk6WXQoeSxiKT8oXyh5LGIsbyksQyYmQS5pbnNlcnRCZWZvcmUobix5LmVsbSxoLmVsbSkseT1yWy0tZF0sYj1pWysrcF0pOih0KGMpJiYoYz1RdChyLGYsZCkpLHQodT1lKGIua2V5KT9jW2Iua2V5XTpmdW5jdGlvbih0LG4scixpKXtmb3IodmFyIG89cjtvPGk7bysrKXt2YXIgYT1uW29dO2lmKGUoYSkmJll0KHQsYSkpcmV0dXJuIG99fShiLHIsZixkKSk/YShiLG8sbixoLmVsbSk6WXQobD1yW3VdLGIpPyhfKGwsYixvKSxyW3VdPXZvaWQgMCxDJiZBLmluc2VydEJlZm9yZShuLGwuZWxtLGguZWxtKSk6YShiLG8sbixoLmVsbSksYj1pWysrcF0pO2Y+ZD92KG4sdChpW2crMV0pP251bGw6aVtnKzFdLmVsbSxpLHAsZyxvKTpwPmcmJm0oMCxyLGYsZCl9ZnVuY3Rpb24gXyhyLGksbyxhKXtpZihyIT09aSl7dmFyIHM9aS5lbG09ci5lbG07aWYobihyLmlzQXN5bmNQbGFjZWhvbGRlcikpZShpLmFzeW5jRmFjdG9yeS5yZXNvbHZlZCk/JChyLmVsbSxpLG8pOmkuaXNBc3luY1BsYWNlaG9sZGVyPSEwO2Vsc2UgaWYobihpLmlzU3RhdGljKSYmbihyLmlzU3RhdGljKSYmaS5rZXk9PT1yLmtleSYmKG4oaS5pc0Nsb25lZCl8fG4oaS5pc09uY2UpKSlpLmNvbXBvbmVudEluc3RhbmNlPXIuY29tcG9uZW50SW5zdGFuY2U7ZWxzZXt2YXIgYyx1PWkuZGF0YTtlKHUpJiZlKGM9dS5ob29rKSYmZShjPWMucHJlcGF0Y2gpJiZjKHIsaSk7dmFyIGw9ci5jaGlsZHJlbixwPWkuY2hpbGRyZW47aWYoZSh1KSYmZihpKSl7Zm9yKGM9MDtjPHgudXBkYXRlLmxlbmd0aDsrK2MpeC51cGRhdGVbY10ocixpKTtlKGM9dS5ob29rKSYmZShjPWMudXBkYXRlKSYmYyhyLGkpfXQoaS50ZXh0KT9lKGwpJiZlKHApP2whPT1wJiZnKHMsbCxwLG8sYSk6ZShwKT8oZShyLnRleHQpJiZBLnNldFRleHRDb250ZW50KHMsXCJcIiksdihzLG51bGwscCwwLHAubGVuZ3RoLTEsbykpOmUobCk/bSgwLGwsMCxsLmxlbmd0aC0xKTplKHIudGV4dCkmJkEuc2V0VGV4dENvbnRlbnQocyxcIlwiKTpyLnRleHQhPT1pLnRleHQmJkEuc2V0VGV4dENvbnRlbnQocyxpLnRleHQpLGUodSkmJmUoYz11Lmhvb2spJiZlKGM9Yy5wb3N0cGF0Y2gpJiZjKHIsaSl9fX1mdW5jdGlvbiBiKHQscixpKXtpZihuKGkpJiZlKHQucGFyZW50KSl0LnBhcmVudC5kYXRhLnBlbmRpbmdJbnNlcnQ9cjtlbHNlIGZvcih2YXIgbz0wO288ci5sZW5ndGg7KytvKXJbb10uZGF0YS5ob29rLmluc2VydChyW29dKX1mdW5jdGlvbiAkKHQscixpLG8pe3ZhciBhLGM9ci50YWcsdT1yLmRhdGEsZj1yLmNoaWxkcmVuO2lmKG89b3x8dSYmdS5wcmUsci5lbG09dCxuKHIuaXNDb21tZW50KSYmZShyLmFzeW5jRmFjdG9yeSkpcmV0dXJuIHIuaXNBc3luY1BsYWNlaG9sZGVyPSEwLCEwO2lmKGUodSkmJihlKGE9dS5ob29rKSYmZShhPWEuaW5pdCkmJmEociwhMCksZShhPXIuY29tcG9uZW50SW5zdGFuY2UpKSlyZXR1cm4gcyhyLGkpLCEwO2lmKGUoYykpe2lmKGUoZikpaWYodC5oYXNDaGlsZE5vZGVzKCkpaWYoZShhPXUpJiZlKGE9YS5kb21Qcm9wcykmJmUoYT1hLmlubmVySFRNTCkpe2lmKGEhPT10LmlubmVySFRNTClyZXR1cm4hMX1lbHNle2Zvcih2YXIgZD0hMCx2PXQuZmlyc3RDaGlsZCxoPTA7aDxmLmxlbmd0aDtoKyspe2lmKCF2fHwhJCh2LGZbaF0saSxvKSl7ZD0hMTticmVha312PXYubmV4dFNpYmxpbmd9aWYoIWR8fHYpcmV0dXJuITF9ZWxzZSBsKHIsZixpKTtpZihlKHUpKXt2YXIgbT0hMTtmb3IodmFyIHkgaW4gdSlpZighTyh5KSl7bT0hMCxwKHIsaSk7YnJlYWt9IW0mJnUuY2xhc3MmJlcodS5jbGFzcyl9fWVsc2UgdC5kYXRhIT09ci50ZXh0JiYodC5kYXRhPXIudGV4dCk7cmV0dXJuITB9dmFyIEMsdyx4PXt9LGs9aS5tb2R1bGVzLEE9aS5ub2RlT3BzO2ZvcihDPTA7QzxPaS5sZW5ndGg7KytDKWZvcih4W09pW0NdXT1bXSx3PTA7dzxrLmxlbmd0aDsrK3cpZShrW3ddW09pW0NdXSkmJnhbT2lbQ11dLnB1c2goa1t3XVtPaVtDXV0pO3ZhciBPPXUoXCJhdHRycyxjbGFzcyxzdGF0aWNDbGFzcyxzdGF0aWNTdHlsZSxrZXlcIik7cmV0dXJuIGZ1bmN0aW9uKHIsaSxvLHMsYyx1KXtpZighdChpKSl7dmFyIGw9ITEscD1bXTtpZih0KHIpKWw9ITAsYShpLHAsYyx1KTtlbHNle3ZhciBkPWUoci5ub2RlVHlwZSk7aWYoIWQmJll0KHIsaSkpXyhyLGkscCxzKTtlbHNle2lmKGQpe2lmKDE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShWbikmJihyLnJlbW92ZUF0dHJpYnV0ZShWbiksbz0hMCksbihvKSYmJChyLGkscCkpcmV0dXJuIGIoaSxwLCEwKSxyO3I9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBtcihBLnRhZ05hbWUodCkudG9Mb3dlckNhc2UoKSx7fSxbXSx2b2lkIDAsdCl9KHIpfXZhciB2PXIuZWxtLHk9QS5wYXJlbnROb2RlKHYpO2lmKGEoaSxwLHYuX2xlYXZlQ2I/bnVsbDp5LEEubmV4dFNpYmxpbmcodikpLGUoaS5wYXJlbnQpKWZvcih2YXIgZz1pLnBhcmVudCxDPWYoaSk7Zzspe2Zvcih2YXIgdz0wO3c8eC5kZXN0cm95Lmxlbmd0aDsrK3cpeC5kZXN0cm95W3ddKGcpO2lmKGcuZWxtPWkuZWxtLEMpe2Zvcih2YXIgaz0wO2s8eC5jcmVhdGUubGVuZ3RoOysrayl4LmNyZWF0ZVtrXShBaSxnKTt2YXIgTz1nLmRhdGEuaG9vay5pbnNlcnQ7aWYoTy5tZXJnZWQpZm9yKHZhciBTPTE7UzxPLmZucy5sZW5ndGg7UysrKU8uZm5zW1NdKCl9ZWxzZSBYdChnKTtnPWcucGFyZW50fWUoeSk/bSgwLFtyXSwwLDApOmUoci50YWcpJiZoKHIpfX1yZXR1cm4gYihpLHAsbCksaS5lbG19ZShyKSYmaChyKX19KHtub2RlT3BzOnhpLG1vZHVsZXM6W2ppLE5pLERpLFBpLHppLEduP3tjcmVhdGU6VmUsYWN0aXZhdGU6VmUscmVtb3ZlOmZ1bmN0aW9uKHQsZSl7ITAhPT10LmRhdGEuc2hvdz9IZSh0LGUpOmUoKX19Ont9XS5jb25jYXQoRWkpfSk7dHImJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3Rpb25jaGFuZ2VcIixmdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7dCYmdC52bW9kZWwmJlplKHQsXCJpbnB1dFwiKX0pO3ZhciBubz17aW5zZXJ0ZWQ6ZnVuY3Rpb24odCxlLG4scil7XCJzZWxlY3RcIj09PW4udGFnPyhyLmVsbSYmIXIuZWxtLl92T3B0aW9ucz9ZKG4sXCJwb3N0cGF0Y2hcIixmdW5jdGlvbigpe25vLmNvbXBvbmVudFVwZGF0ZWQodCxlLG4pfSk6emUodCxlLG4uY29udGV4dCksdC5fdk9wdGlvbnM9W10ubWFwLmNhbGwodC5vcHRpb25zLHFlKSk6KFwidGV4dGFyZWFcIj09PW4udGFnfHx3aSh0LnR5cGUpKSYmKHQuX3ZNb2RpZmllcnM9ZS5tb2RpZmllcnMsZS5tb2RpZmllcnMubGF6eXx8KHQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLEdlKSxucnx8KHQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uc3RhcnRcIixXZSksdC5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25lbmRcIixHZSkpLHRyJiYodC52bW9kZWw9ITApKSl9LGNvbXBvbmVudFVwZGF0ZWQ6ZnVuY3Rpb24odCxlLG4pe2lmKFwic2VsZWN0XCI9PT1uLnRhZyl7emUodCxlLG4uY29udGV4dCk7dmFyIHI9dC5fdk9wdGlvbnMsaT10Ll92T3B0aW9ucz1bXS5tYXAuY2FsbCh0Lm9wdGlvbnMscWUpO2lmKGkuc29tZShmdW5jdGlvbih0LGUpe3JldHVybiFnKHQscltlXSl9KSl7KHQubXVsdGlwbGU/ZS52YWx1ZS5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiBKZSh0LGkpfSk6ZS52YWx1ZSE9PWUub2xkVmFsdWUmJkplKGUudmFsdWUsaSkpJiZaZSh0LFwiY2hhbmdlXCIpfX19fSxybz17bW9kZWw6bm8sc2hvdzp7YmluZDpmdW5jdGlvbih0LGUsbil7dmFyIHI9ZS52YWx1ZSxpPShuPVhlKG4pKS5kYXRhJiZuLmRhdGEudHJhbnNpdGlvbixvPXQuX192T3JpZ2luYWxEaXNwbGF5PVwibm9uZVwiPT09dC5zdHlsZS5kaXNwbGF5P1wiXCI6dC5zdHlsZS5kaXNwbGF5O3ImJmk/KG4uZGF0YS5zaG93PSEwLFJlKG4sZnVuY3Rpb24oKXt0LnN0eWxlLmRpc3BsYXk9b30pKTp0LnN0eWxlLmRpc3BsYXk9cj9vOlwibm9uZVwifSx1cGRhdGU6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudmFsdWU7aWYociE9PWUub2xkVmFsdWUpeyhuPVhlKG4pKS5kYXRhJiZuLmRhdGEudHJhbnNpdGlvbj8obi5kYXRhLnNob3c9ITAscj9SZShuLGZ1bmN0aW9uKCl7dC5zdHlsZS5kaXNwbGF5PXQuX192T3JpZ2luYWxEaXNwbGF5fSk6SGUobixmdW5jdGlvbigpe3Quc3R5bGUuZGlzcGxheT1cIm5vbmVcIn0pKTp0LnN0eWxlLmRpc3BsYXk9cj90Ll9fdk9yaWdpbmFsRGlzcGxheTpcIm5vbmVcIn19LHVuYmluZDpmdW5jdGlvbih0LGUsbixyLGkpe2l8fCh0LnN0eWxlLmRpc3BsYXk9dC5fX3ZPcmlnaW5hbERpc3BsYXkpfX19LGlvPXtuYW1lOlN0cmluZyxhcHBlYXI6Qm9vbGVhbixjc3M6Qm9vbGVhbixtb2RlOlN0cmluZyx0eXBlOlN0cmluZyxlbnRlckNsYXNzOlN0cmluZyxsZWF2ZUNsYXNzOlN0cmluZyxlbnRlclRvQ2xhc3M6U3RyaW5nLGxlYXZlVG9DbGFzczpTdHJpbmcsZW50ZXJBY3RpdmVDbGFzczpTdHJpbmcsbGVhdmVBY3RpdmVDbGFzczpTdHJpbmcsYXBwZWFyQ2xhc3M6U3RyaW5nLGFwcGVhckFjdGl2ZUNsYXNzOlN0cmluZyxhcHBlYXJUb0NsYXNzOlN0cmluZyxkdXJhdGlvbjpbTnVtYmVyLFN0cmluZyxPYmplY3RdfSxvbz17bmFtZTpcInRyYW5zaXRpb25cIixwcm9wczppbyxhYnN0cmFjdDohMCxyZW5kZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPXRoaXMuJHNsb3RzLmRlZmF1bHQ7aWYobiYmKG49bi5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQudGFnfHxydCh0KX0pKS5sZW5ndGgpe3ZhciBpPXRoaXMubW9kZSxvPW5bMF07aWYoZnVuY3Rpb24odCl7Zm9yKDt0PXQucGFyZW50OylpZih0LmRhdGEudHJhbnNpdGlvbilyZXR1cm4hMH0odGhpcy4kdm5vZGUpKXJldHVybiBvO3ZhciBhPVllKG8pO2lmKCFhKXJldHVybiBvO2lmKHRoaXMuX2xlYXZpbmcpcmV0dXJuIHRuKHQsbyk7dmFyIHM9XCJfX3RyYW5zaXRpb24tXCIrdGhpcy5fdWlkK1wiLVwiO2Eua2V5PW51bGw9PWEua2V5P2EuaXNDb21tZW50P3MrXCJjb21tZW50XCI6cythLnRhZzpyKGEua2V5KT8wPT09U3RyaW5nKGEua2V5KS5pbmRleE9mKHMpP2Eua2V5OnMrYS5rZXk6YS5rZXk7dmFyIGM9KGEuZGF0YXx8KGEuZGF0YT17fSkpLnRyYW5zaXRpb249UWUodGhpcyksdT10aGlzLl92bm9kZSxsPVllKHUpO2lmKGEuZGF0YS5kaXJlY3RpdmVzJiZhLmRhdGEuZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uKHQpe3JldHVyblwic2hvd1wiPT09dC5uYW1lfSkmJihhLmRhdGEuc2hvdz0hMCksbCYmbC5kYXRhJiYhZnVuY3Rpb24odCxlKXtyZXR1cm4gZS5rZXk9PT10LmtleSYmZS50YWc9PT10LnRhZ30oYSxsKSYmIXJ0KGwpJiYoIWwuY29tcG9uZW50SW5zdGFuY2V8fCFsLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZS5pc0NvbW1lbnQpKXt2YXIgZj1sLmRhdGEudHJhbnNpdGlvbj1oKHt9LGMpO2lmKFwib3V0LWluXCI9PT1pKXJldHVybiB0aGlzLl9sZWF2aW5nPSEwLFkoZixcImFmdGVyTGVhdmVcIixmdW5jdGlvbigpe2UuX2xlYXZpbmc9ITEsZS4kZm9yY2VVcGRhdGUoKX0pLHRuKHQsbyk7aWYoXCJpbi1vdXRcIj09PWkpe2lmKHJ0KGEpKXJldHVybiB1O3ZhciBwLGQ9ZnVuY3Rpb24oKXtwKCl9O1koYyxcImFmdGVyRW50ZXJcIixkKSxZKGMsXCJlbnRlckNhbmNlbGxlZFwiLGQpLFkoZixcImRlbGF5TGVhdmVcIixmdW5jdGlvbih0KXtwPXR9KX19cmV0dXJuIG99fX0sYW89aCh7dGFnOlN0cmluZyxtb3ZlQ2xhc3M6U3RyaW5nfSxpbyk7ZGVsZXRlIGFvLm1vZGU7dmFyIHNvPXtUcmFuc2l0aW9uOm9vLFRyYW5zaXRpb25Hcm91cDp7cHJvcHM6YW8scmVuZGVyOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLnRhZ3x8dGhpcy4kdm5vZGUuZGF0YS50YWd8fFwic3BhblwiLG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPXRoaXMucHJldkNoaWxkcmVuPXRoaXMuY2hpbGRyZW4saT10aGlzLiRzbG90cy5kZWZhdWx0fHxbXSxvPXRoaXMuY2hpbGRyZW49W10sYT1RZSh0aGlzKSxzPTA7czxpLmxlbmd0aDtzKyspe3ZhciBjPWlbc107Yy50YWcmJm51bGwhPWMua2V5JiYwIT09U3RyaW5nKGMua2V5KS5pbmRleE9mKFwiX192bGlzdFwiKSYmKG8ucHVzaChjKSxuW2Mua2V5XT1jLChjLmRhdGF8fChjLmRhdGE9e30pKS50cmFuc2l0aW9uPWEpfWlmKHIpe2Zvcih2YXIgdT1bXSxsPVtdLGY9MDtmPHIubGVuZ3RoO2YrKyl7dmFyIHA9cltmXTtwLmRhdGEudHJhbnNpdGlvbj1hLHAuZGF0YS5wb3M9cC5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbltwLmtleV0/dS5wdXNoKHApOmwucHVzaChwKX10aGlzLmtlcHQ9dChlLG51bGwsdSksdGhpcy5yZW1vdmVkPWx9cmV0dXJuIHQoZSxudWxsLG8pfSxiZWZvcmVVcGRhdGU6ZnVuY3Rpb24oKXt0aGlzLl9fcGF0Y2hfXyh0aGlzLl92bm9kZSx0aGlzLmtlcHQsITEsITApLHRoaXMuX3Zub2RlPXRoaXMua2VwdH0sdXBkYXRlZDpmdW5jdGlvbigpe3ZhciB0PXRoaXMucHJldkNoaWxkcmVuLGU9dGhpcy5tb3ZlQ2xhc3N8fCh0aGlzLm5hbWV8fFwidlwiKStcIi1tb3ZlXCI7dC5sZW5ndGgmJnRoaXMuaGFzTW92ZSh0WzBdLmVsbSxlKSYmKHQuZm9yRWFjaChlbiksdC5mb3JFYWNoKG5uKSx0LmZvckVhY2gocm4pLHRoaXMuX3JlZmxvdz1kb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCx0LmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5kYXRhLm1vdmVkKXt2YXIgbj10LmVsbSxyPW4uc3R5bGU7SWUobixlKSxyLnRyYW5zZm9ybT1yLldlYmtpdFRyYW5zZm9ybT1yLnRyYW5zaXRpb25EdXJhdGlvbj1cIlwiLG4uYWRkRXZlbnRMaXN0ZW5lcihaaSxuLl9tb3ZlQ2I9ZnVuY3Rpb24gdChyKXtyJiYhL3RyYW5zZm9ybSQvLnRlc3Qoci5wcm9wZXJ0eU5hbWUpfHwobi5yZW1vdmVFdmVudExpc3RlbmVyKFppLHQpLG4uX21vdmVDYj1udWxsLExlKG4sZSkpfSl9fSkpfSxtZXRob2RzOntoYXNNb3ZlOmZ1bmN0aW9uKHQsZSl7aWYoIUppKXJldHVybiExO2lmKHRoaXMuX2hhc01vdmUpcmV0dXJuIHRoaXMuX2hhc01vdmU7dmFyIG49dC5jbG9uZU5vZGUoKTt0Ll90cmFuc2l0aW9uQ2xhc3NlcyYmdC5fdHJhbnNpdGlvbkNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbih0KXtFZShuLHQpfSksVGUobixlKSxuLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy4kZWwuYXBwZW5kQ2hpbGQobik7dmFyIHI9RGUobik7cmV0dXJuIHRoaXMuJGVsLnJlbW92ZUNoaWxkKG4pLHRoaXMuX2hhc01vdmU9ci5oYXNUcmFuc2Zvcm19fX19O1J0LmNvbmZpZy5tdXN0VXNlUHJvcD1maSxSdC5jb25maWcuaXNSZXNlcnZlZFRhZz0kaSxSdC5jb25maWcuaXNSZXNlcnZlZEF0dHI9dWksUnQuY29uZmlnLmdldFRhZ05hbWVzcGFjZT1HdCxSdC5jb25maWcuaXNVbmtub3duRWxlbWVudD1mdW5jdGlvbih0KXtpZighR24pcmV0dXJuITA7aWYoJGkodCkpcmV0dXJuITE7aWYodD10LnRvTG93ZXJDYXNlKCksbnVsbCE9Q2lbdF0pcmV0dXJuIENpW3RdO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7cmV0dXJuIHQuaW5kZXhPZihcIi1cIik+LTE/Q2lbdF09ZS5jb25zdHJ1Y3Rvcj09PXdpbmRvdy5IVE1MVW5rbm93bkVsZW1lbnR8fGUuY29uc3RydWN0b3I9PT13aW5kb3cuSFRNTEVsZW1lbnQ6Q2lbdF09L0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlLnRvU3RyaW5nKCkpfSxoKFJ0Lm9wdGlvbnMuZGlyZWN0aXZlcyxybyksaChSdC5vcHRpb25zLmNvbXBvbmVudHMsc28pLFJ0LnByb3RvdHlwZS5fX3BhdGNoX189R24/ZW86eSxSdC5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9dCYmR24/WnQodCk6dm9pZCAwLGZ1bmN0aW9uKHQsZSxuKXt0LiRlbD1lLHQuJG9wdGlvbnMucmVuZGVyfHwodC4kb3B0aW9ucy5yZW5kZXI9Z3IpLHZ0KHQsXCJiZWZvcmVNb3VudFwiKTt2YXIgcjtyZXR1cm4gcj1mdW5jdGlvbigpe3QuX3VwZGF0ZSh0Ll9yZW5kZXIoKSxuKX0sbmV3IEtyKHQscix5LG51bGwsITApLG49ITEsbnVsbD09dC4kdm5vZGUmJih0Ll9pc01vdW50ZWQ9ITAsdnQodCxcIm1vdW50ZWRcIikpLHR9KHRoaXMsdCxlKX0sUnQubmV4dFRpY2soZnVuY3Rpb24oKXtKbi5kZXZ0b29scyYmbHImJmxyLmVtaXQoXCJpbml0XCIsUnQpfSwwKTt2YXIgY28sdW89L1xce1xceygoPzoufFxcbikrPylcXH1cXH0vZyxsbz0vWy0uKis/XiR7fSgpfFtcXF1cXC9cXFxcXS9nLGZvPXAoZnVuY3Rpb24odCl7dmFyIGU9dFswXS5yZXBsYWNlKGxvLFwiXFxcXCQmXCIpLG49dFsxXS5yZXBsYWNlKGxvLFwiXFxcXCQmXCIpO3JldHVybiBuZXcgUmVnRXhwKGUrXCIoKD86LnxcXFxcbikrPylcIituLFwiZ1wiKX0pLHBvPXtzdGF0aWNLZXlzOltcInN0YXRpY0NsYXNzXCJdLHRyYW5zZm9ybU5vZGU6ZnVuY3Rpb24odCxlKXtlLndhcm47dmFyIG49aGUodCxcImNsYXNzXCIpO24mJih0LnN0YXRpY0NsYXNzPUpTT04uc3RyaW5naWZ5KG4pKTt2YXIgcj12ZSh0LFwiY2xhc3NcIiwhMSk7ciYmKHQuY2xhc3NCaW5kaW5nPXIpfSxnZW5EYXRhOmZ1bmN0aW9uKHQpe3ZhciBlPVwiXCI7cmV0dXJuIHQuc3RhdGljQ2xhc3MmJihlKz1cInN0YXRpY0NsYXNzOlwiK3Quc3RhdGljQ2xhc3MrXCIsXCIpLHQuY2xhc3NCaW5kaW5nJiYoZSs9XCJjbGFzczpcIit0LmNsYXNzQmluZGluZytcIixcIiksZX19LHZvPXtzdGF0aWNLZXlzOltcInN0YXRpY1N0eWxlXCJdLHRyYW5zZm9ybU5vZGU6ZnVuY3Rpb24odCxlKXtlLndhcm47dmFyIG49aGUodCxcInN0eWxlXCIpO24mJih0LnN0YXRpY1N0eWxlPUpTT04uc3RyaW5naWZ5KEZpKG4pKSk7dmFyIHI9dmUodCxcInN0eWxlXCIsITEpO3ImJih0LnN0eWxlQmluZGluZz1yKX0sZ2VuRGF0YTpmdW5jdGlvbih0KXt2YXIgZT1cIlwiO3JldHVybiB0LnN0YXRpY1N0eWxlJiYoZSs9XCJzdGF0aWNTdHlsZTpcIit0LnN0YXRpY1N0eWxlK1wiLFwiKSx0LnN0eWxlQmluZGluZyYmKGUrPVwic3R5bGU6KFwiK3Quc3R5bGVCaW5kaW5nK1wiKSxcIiksZX19LGhvPWZ1bmN0aW9uKHQpe3JldHVybiBjbz1jb3x8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxjby5pbm5lckhUTUw9dCxjby50ZXh0Q29udGVudH0sbW89dShcImFyZWEsYmFzZSxicixjb2wsZW1iZWQsZnJhbWUsaHIsaW1nLGlucHV0LGlzaW5kZXgsa2V5Z2VuLGxpbmssbWV0YSxwYXJhbSxzb3VyY2UsdHJhY2ssd2JyXCIpLHlvPXUoXCJjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHIsc291cmNlXCIpLGdvPXUoXCJhZGRyZXNzLGFydGljbGUsYXNpZGUsYmFzZSxibG9ja3F1b3RlLGJvZHksY2FwdGlvbixjb2wsY29sZ3JvdXAsZGQsZGV0YWlscyxkaWFsb2csZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGgxLGgyLGgzLGg0LGg1LGg2LGhlYWQsaGVhZGVyLGhncm91cCxocixodG1sLGxlZ2VuZCxsaSxtZW51aXRlbSxtZXRhLG9wdGdyb3VwLG9wdGlvbixwYXJhbSxycCxydCxzb3VyY2Usc3R5bGUsc3VtbWFyeSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0aXRsZSx0cix0cmFja1wiKSxfbz0vXlxccyooW15cXHNcIic8PlxcLz1dKykoPzpcXHMqKD0pXFxzKig/OlwiKFteXCJdKilcIit8JyhbXiddKiknK3woW15cXHNcIic9PD5gXSspKSk/Lyxibz1cIlthLXpBLVpfXVtcXFxcd1xcXFwtXFxcXC5dKlwiLCRvPVwiKCg/OlwiK2JvK1wiXFxcXDopP1wiK2JvK1wiKVwiLENvPW5ldyBSZWdFeHAoXCJePFwiKyRvKSx3bz0vXlxccyooXFwvPyk+Lyx4bz1uZXcgUmVnRXhwKFwiXjxcXFxcL1wiKyRvK1wiW14+XSo+XCIpLGtvPS9ePCFET0NUWVBFIFtePl0rPi9pLEFvPS9ePCEtLS8sT289L148IVxcWy8sU289ITE7XCJ4XCIucmVwbGFjZSgveCguKT8vZyxmdW5jdGlvbih0LGUpe1NvPVwiXCI9PT1lfSk7dmFyIFRvLEVvLGpvLE5vLElvLExvLE1vLERvLFBvLEZvLFJvLEhvPXUoXCJzY3JpcHQsc3R5bGUsdGV4dGFyZWFcIiwhMCksQm89e30sVW89e1wiJmx0O1wiOlwiPFwiLFwiJmd0O1wiOlwiPlwiLFwiJnF1b3Q7XCI6J1wiJyxcIiZhbXA7XCI6XCImXCIsXCImIzEwO1wiOlwiXFxuXCIsXCImIzk7XCI6XCJcXHRcIn0sVm89LyYoPzpsdHxndHxxdW90fGFtcCk7L2csem89LyYoPzpsdHxndHxxdW90fGFtcHwjMTB8IzkpOy9nLEtvPXUoXCJwcmUsdGV4dGFyZWFcIiwhMCksSm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gdCYmS28odCkmJlwiXFxuXCI9PT1lWzBdfSxxbz0vXkB8XnYtb246LyxXbz0vXnYtfF5AfF46LyxHbz0vKC4qPylcXHMrKD86aW58b2YpXFxzKyguKikvLFpvPS8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLyxYbz0vXlxcKHxcXCkkL2csWW89LzooLiopJC8sUW89L146fF52LWJpbmQ6Lyx0YT0vXFwuW14uXSsvZyxlYT1wKGhvKSxuYT0vXnhtbG5zOk5TXFxkKy8scmE9L15OU1xcZCs6LyxpYT1bcG8sdm8se3ByZVRyYW5zZm9ybU5vZGU6ZnVuY3Rpb24odCxlKXtpZihcImlucHV0XCI9PT10LnRhZyl7dmFyIG49dC5hdHRyc01hcDtpZihuW1widi1tb2RlbFwiXSYmKG5bXCJ2LWJpbmQ6dHlwZVwiXXx8bltcIjp0eXBlXCJdKSl7dmFyIHI9dmUodCxcInR5cGVcIiksaT1oZSh0LFwidi1pZlwiLCEwKSxvPWk/XCImJihcIitpK1wiKVwiOlwiXCIsYT1udWxsIT1oZSh0LFwidi1lbHNlXCIsITApLHM9aGUodCxcInYtZWxzZS1pZlwiLCEwKSxjPWZuKHQpO3VuKGMpLGZlKGMsXCJ0eXBlXCIsXCJjaGVja2JveFwiKSxjbihjLGUpLGMucHJvY2Vzc2VkPSEwLGMuaWY9XCIoXCIrcitcIik9PT0nY2hlY2tib3gnXCIrbyxsbihjLHtleHA6Yy5pZixibG9jazpjfSk7dmFyIHU9Zm4odCk7aGUodSxcInYtZm9yXCIsITApLGZlKHUsXCJ0eXBlXCIsXCJyYWRpb1wiKSxjbih1LGUpLGxuKGMse2V4cDpcIihcIityK1wiKT09PSdyYWRpbydcIitvLGJsb2NrOnV9KTt2YXIgbD1mbih0KTtyZXR1cm4gaGUobCxcInYtZm9yXCIsITApLGZlKGwsXCI6dHlwZVwiLHIpLGNuKGwsZSksbG4oYyx7ZXhwOmksYmxvY2s6bH0pLGE/Yy5lbHNlPSEwOnMmJihjLmVsc2VpZj1zKSxjfX19fV0sb2E9e2V4cGVjdEhUTUw6ITAsbW9kdWxlczppYSxkaXJlY3RpdmVzOnttb2RlbDpmdW5jdGlvbih0LGUsbil7dmFyIHI9ZS52YWx1ZSxpPWUubW9kaWZpZXJzLG89dC50YWcsYT10LmF0dHJzTWFwLnR5cGU7aWYodC5jb21wb25lbnQpcmV0dXJuIG1lKHQscixpKSwhMTtpZihcInNlbGVjdFwiPT09bykhZnVuY3Rpb24odCxlLG4pe3ZhciByPSd2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsZnVuY3Rpb24obyl7cmV0dXJuIG8uc2VsZWN0ZWR9KS5tYXAoZnVuY3Rpb24obyl7dmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtyZXR1cm4gJysobiYmbi5udW1iZXI/XCJfbih2YWwpXCI6XCJ2YWxcIikrXCJ9KTtcIjtyPXIrXCIgXCIreWUoZSxcIiRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVwiKSxkZSh0LFwiY2hhbmdlXCIscixudWxsLCEwKX0odCxyLGkpO2Vsc2UgaWYoXCJpbnB1dFwiPT09byYmXCJjaGVja2JveFwiPT09YSkhZnVuY3Rpb24odCxlLG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9dmUodCxcInZhbHVlXCIpfHxcIm51bGxcIixvPXZlKHQsXCJ0cnVlLXZhbHVlXCIpfHxcInRydWVcIixhPXZlKHQsXCJmYWxzZS12YWx1ZVwiKXx8XCJmYWxzZVwiO3VlKHQsXCJjaGVja2VkXCIsXCJBcnJheS5pc0FycmF5KFwiK2UrXCIpP19pKFwiK2UrXCIsXCIraStcIik+LTFcIisoXCJ0cnVlXCI9PT1vP1wiOihcIitlK1wiKVwiOlwiOl9xKFwiK2UrXCIsXCIrbytcIilcIikpLGRlKHQsXCJjaGFuZ2VcIixcInZhciAkJGE9XCIrZStcIiwkJGVsPSRldmVudC50YXJnZXQsJCRjPSQkZWwuY2hlY2tlZD8oXCIrbytcIik6KFwiK2ErXCIpO2lmKEFycmF5LmlzQXJyYXkoJCRhKSl7dmFyICQkdj1cIisocj9cIl9uKFwiK2krXCIpXCI6aSkrXCIsJCRpPV9pKCQkYSwkJHYpO2lmKCQkZWwuY2hlY2tlZCl7JCRpPDAmJihcIitlK1wiPSQkYS5jb25jYXQoWyQkdl0pKX1lbHNleyQkaT4tMSYmKFwiK2UrXCI9JCRhLnNsaWNlKDAsJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSsxKSkpfX1lbHNle1wiK3llKGUsXCIkJGNcIikrXCJ9XCIsbnVsbCwhMCl9KHQscixpKTtlbHNlIGlmKFwiaW5wdXRcIj09PW8mJlwicmFkaW9cIj09PWEpIWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uJiZuLm51bWJlcixpPXZlKHQsXCJ2YWx1ZVwiKXx8XCJudWxsXCI7dWUodCxcImNoZWNrZWRcIixcIl9xKFwiK2UrXCIsXCIrKGk9cj9cIl9uKFwiK2krXCIpXCI6aSkrXCIpXCIpLGRlKHQsXCJjaGFuZ2VcIix5ZShlLGkpLG51bGwsITApfSh0LHIsaSk7ZWxzZSBpZihcImlucHV0XCI9PT1vfHxcInRleHRhcmVhXCI9PT1vKSFmdW5jdGlvbih0LGUsbil7dmFyIHI9dC5hdHRyc01hcC50eXBlLGk9bnx8e30sbz1pLmxhenksYT1pLm51bWJlcixzPWkudHJpbSxjPSFvJiZcInJhbmdlXCIhPT1yLHU9bz9cImNoYW5nZVwiOlwicmFuZ2VcIj09PXI/TGk6XCJpbnB1dFwiLGw9XCIkZXZlbnQudGFyZ2V0LnZhbHVlXCI7cyYmKGw9XCIkZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKVwiKSxhJiYobD1cIl9uKFwiK2wrXCIpXCIpO3ZhciBmPXllKGUsbCk7YyYmKGY9XCJpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZylyZXR1cm47XCIrZiksdWUodCxcInZhbHVlXCIsXCIoXCIrZStcIilcIiksZGUodCx1LGYsbnVsbCwhMCksKHN8fGEpJiZkZSh0LFwiYmx1clwiLFwiJGZvcmNlVXBkYXRlKClcIil9KHQscixpKTtlbHNlIGlmKCFKbi5pc1Jlc2VydmVkVGFnKG8pKXJldHVybiBtZSh0LHIsaSksITE7cmV0dXJuITB9LHRleHQ6ZnVuY3Rpb24odCxlKXtlLnZhbHVlJiZ1ZSh0LFwidGV4dENvbnRlbnRcIixcIl9zKFwiK2UudmFsdWUrXCIpXCIpfSxodG1sOmZ1bmN0aW9uKHQsZSl7ZS52YWx1ZSYmdWUodCxcImlubmVySFRNTFwiLFwiX3MoXCIrZS52YWx1ZStcIilcIil9fSxpc1ByZVRhZzpmdW5jdGlvbih0KXtyZXR1cm5cInByZVwiPT09dH0saXNVbmFyeVRhZzptbyxtdXN0VXNlUHJvcDpmaSxjYW5CZUxlZnRPcGVuVGFnOnlvLGlzUmVzZXJ2ZWRUYWc6JGksZ2V0VGFnTmFtZXNwYWNlOkd0LHN0YXRpY0tleXM6ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuY29uY2F0KGUuc3RhdGljS2V5c3x8W10pfSxbXSkuam9pbihcIixcIil9KGlhKX0sYWE9cChmdW5jdGlvbih0KXtyZXR1cm4gdShcInR5cGUsdGFnLGF0dHJzTGlzdCxhdHRyc01hcCxwbGFpbixwYXJlbnQsY2hpbGRyZW4sYXR0cnNcIisodD9cIixcIit0OlwiXCIpKX0pLHNhPS9eXFxzKihbXFx3JF9dK3xcXChbXildKj9cXCkpXFxzKj0+fF5mdW5jdGlvblxccypcXCgvLGNhPS9eXFxzKltBLVphLXpfJF1bXFx3JF0qKD86XFwuW0EtWmEtel8kXVtcXHckXSp8XFxbJy4qPyddfFxcW1wiLio/XCJdfFxcW1xcZCtdfFxcW1tBLVphLXpfJF1bXFx3JF0qXSkqXFxzKiQvLHVhPXtlc2M6MjcsdGFiOjksZW50ZXI6MTMsc3BhY2U6MzIsdXA6MzgsbGVmdDozNyxyaWdodDozOSxkb3duOjQwLGRlbGV0ZTpbOCw0Nl19LGxhPWZ1bmN0aW9uKHQpe3JldHVyblwiaWYoXCIrdCtcIilyZXR1cm4gbnVsbDtcIn0sZmE9e3N0b3A6XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XCIscHJldmVudDpcIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1wiLHNlbGY6bGEoXCIkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldFwiKSxjdHJsOmxhKFwiISRldmVudC5jdHJsS2V5XCIpLHNoaWZ0OmxhKFwiISRldmVudC5zaGlmdEtleVwiKSxhbHQ6bGEoXCIhJGV2ZW50LmFsdEtleVwiKSxtZXRhOmxhKFwiISRldmVudC5tZXRhS2V5XCIpLGxlZnQ6bGEoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMFwiKSxtaWRkbGU6bGEoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMVwiKSxyaWdodDpsYShcIididXR0b24nIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAyXCIpfSxwYT17b246ZnVuY3Rpb24odCxlKXt0LndyYXBMaXN0ZW5lcnM9ZnVuY3Rpb24odCl7cmV0dXJuXCJfZyhcIit0K1wiLFwiK2UudmFsdWUrXCIpXCJ9fSxiaW5kOmZ1bmN0aW9uKHQsZSl7dC53cmFwRGF0YT1mdW5jdGlvbihuKXtyZXR1cm5cIl9iKFwiK24rXCIsJ1wiK3QudGFnK1wiJyxcIitlLnZhbHVlK1wiLFwiKyhlLm1vZGlmaWVycyYmZS5tb2RpZmllcnMucHJvcD9cInRydWVcIjpcImZhbHNlXCIpKyhlLm1vZGlmaWVycyYmZS5tb2RpZmllcnMuc3luYz9cIix0cnVlXCI6XCJcIikrXCIpXCJ9fSxjbG9hazp5fSxkYT1mdW5jdGlvbih0KXt0aGlzLm9wdGlvbnM9dCx0aGlzLndhcm49dC53YXJufHxzZSx0aGlzLnRyYW5zZm9ybXM9Y2UodC5tb2R1bGVzLFwidHJhbnNmb3JtQ29kZVwiKSx0aGlzLmRhdGFHZW5GbnM9Y2UodC5tb2R1bGVzLFwiZ2VuRGF0YVwiKSx0aGlzLmRpcmVjdGl2ZXM9aChoKHt9LHBhKSx0LmRpcmVjdGl2ZXMpO3ZhciBlPXQuaXNSZXNlcnZlZFRhZ3x8Qm47dGhpcy5tYXliZUNvbXBvbmVudD1mdW5jdGlvbih0KXtyZXR1cm4hZSh0LnRhZyl9LHRoaXMub25jZUlkPTAsdGhpcy5zdGF0aWNSZW5kZXJGbnM9W119LHZhPShuZXcgUmVnRXhwKFwiXFxcXGJcIitcImRvLGlmLGZvcixsZXQsbmV3LHRyeSx2YXIsY2FzZSxlbHNlLHdpdGgsYXdhaXQsYnJlYWssY2F0Y2gsY2xhc3MsY29uc3Qsc3VwZXIsdGhyb3csd2hpbGUseWllbGQsZGVsZXRlLGV4cG9ydCxpbXBvcnQscmV0dXJuLHN3aXRjaCxkZWZhdWx0LGV4dGVuZHMsZmluYWxseSxjb250aW51ZSxkZWJ1Z2dlcixmdW5jdGlvbixhcmd1bWVudHNcIi5zcGxpdChcIixcIikuam9pbihcIlxcXFxifFxcXFxiXCIpK1wiXFxcXGJcIiksbmV3IFJlZ0V4cChcIlxcXFxiXCIrXCJkZWxldGUsdHlwZW9mLHZvaWRcIi5zcGxpdChcIixcIikuam9pbihcIlxcXFxzKlxcXFwoW15cXFxcKV0qXFxcXCl8XFxcXGJcIikrXCJcXFxccypcXFxcKFteXFxcXCldKlxcXFwpXCIpLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiBuKG4scil7dmFyIGk9T2JqZWN0LmNyZWF0ZShlKSxvPVtdLGE9W107aWYoaS53YXJuPWZ1bmN0aW9uKHQsZSl7KGU/YTpvKS5wdXNoKHQpfSxyKXtyLm1vZHVsZXMmJihpLm1vZHVsZXM9KGUubW9kdWxlc3x8W10pLmNvbmNhdChyLm1vZHVsZXMpKSxyLmRpcmVjdGl2ZXMmJihpLmRpcmVjdGl2ZXM9aChPYmplY3QuY3JlYXRlKGUuZGlyZWN0aXZlc3x8bnVsbCksci5kaXJlY3RpdmVzKSk7Zm9yKHZhciBzIGluIHIpXCJtb2R1bGVzXCIhPT1zJiZcImRpcmVjdGl2ZXNcIiE9PXMmJihpW3NdPXJbc10pfXZhciBjPXQobixpKTtyZXR1cm4gYy5lcnJvcnM9byxjLnRpcHM9YSxjfXJldHVybntjb21waWxlOm4sY29tcGlsZVRvRnVuY3Rpb25zOmZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGZ1bmN0aW9uKG4scixpKXsocj1oKHt9LHIpKS53YXJuLGRlbGV0ZSByLndhcm47dmFyIG89ci5kZWxpbWl0ZXJzP1N0cmluZyhyLmRlbGltaXRlcnMpK246bjtpZihlW29dKXJldHVybiBlW29dO3ZhciBhPXQobixyKSxzPXt9LGM9W107cmV0dXJuIHMucmVuZGVyPVRuKGEucmVuZGVyLGMpLHMuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gVG4odCxjKX0pLGVbb109c319KG4pfX19KGZ1bmN0aW9uKHQsZSl7dmFyIG49c24odC50cmltKCksZSk7ITEhPT1lLm9wdGltaXplJiZmdW5jdGlvbih0LGUpe3QmJihQbz1hYShlLnN0YXRpY0tleXN8fFwiXCIpLEZvPWUuaXNSZXNlcnZlZFRhZ3x8Qm4scG4odCksZG4odCwhMSkpfShuLGUpO3ZhciByPXluKG4sZSk7cmV0dXJue2FzdDpuLHJlbmRlcjpyLnJlbmRlcixzdGF0aWNSZW5kZXJGbnM6ci5zdGF0aWNSZW5kZXJGbnN9fSkob2EpLmNvbXBpbGVUb0Z1bmN0aW9ucyksaGE9ISFHbiYmRW4oITEpLG1hPSEhR24mJkVuKCEwKSx5YT1wKGZ1bmN0aW9uKHQpe3ZhciBlPVp0KHQpO3JldHVybiBlJiZlLmlubmVySFRNTH0pLGdhPVJ0LnByb3RvdHlwZS4kbW91bnQ7cmV0dXJuIFJ0LnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24odCxlKXtpZigodD10JiZadCh0KSk9PT1kb2N1bWVudC5ib2R5fHx0PT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KXJldHVybiB0aGlzO3ZhciBuPXRoaXMuJG9wdGlvbnM7aWYoIW4ucmVuZGVyKXt2YXIgcj1uLnRlbXBsYXRlO2lmKHIpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpXCIjXCI9PT1yLmNoYXJBdCgwKSYmKHI9eWEocikpO2Vsc2V7aWYoIXIubm9kZVR5cGUpcmV0dXJuIHRoaXM7cj1yLmlubmVySFRNTH1lbHNlIHQmJihyPWZ1bmN0aW9uKHQpe2lmKHQub3V0ZXJIVE1MKXJldHVybiB0Lm91dGVySFRNTDt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmFwcGVuZENoaWxkKHQuY2xvbmVOb2RlKCEwKSksZS5pbm5lckhUTUx9KHQpKTtpZihyKXt2YXIgaT12YShyLHtzaG91bGREZWNvZGVOZXdsaW5lczpoYSxzaG91bGREZWNvZGVOZXdsaW5lc0ZvckhyZWY6bWEsZGVsaW1pdGVyczpuLmRlbGltaXRlcnMsY29tbWVudHM6bi5jb21tZW50c30sdGhpcyksbz1pLnJlbmRlcixhPWkuc3RhdGljUmVuZGVyRm5zO24ucmVuZGVyPW8sbi5zdGF0aWNSZW5kZXJGbnM9YX19cmV0dXJuIGdhLmNhbGwodGhpcyx0LGUpfSxSdC5jb21waWxlPXZhLFJ0fSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUubWluLmpzIiwidmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVpZGF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkYXRhID0gW1xuICAvLyB7XG4gIC8vICB0aXRsZTogXCLQnNCw0LPQsNC30LjQvS3QsNGC0LXQu9GM0LUgSXRvLXNhbWFcIixcbiAgLy8gIHBhdGg6IFwiMjAwOS14eC0taXRvLXNhbWEvd3d3L1wiLFxuICAvLyAgcGFnZXM6IFtcImh0dHA6Ly9pdG8tc2FtYS5ydS9pbmRleC5waHBcIixcImh0dHA6Ly9pdG8tc2FtYS5ydS9jYXRhbG9nLnBocFwiLFwiaHR0cDovL2l0by1zYW1hLnJ1L2ZhYnJpYy5waHBcIl0sXG4gIC8vICBkZXNjcmlwdGlvbjogXCLQnNGD0LbRgdC60LDRjyDQuCDQttC10L3RgdC60LDRjyDQvtC00LXQttC00LAsINGA0LXQstC+0LvRjtGG0LjQvtC90L3QsNGPINCx0LDRhdGA0L7QvNCwINC00LXRgtC10LrRgtC10LQuXCIsXG4gIC8vICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgLy8gIGFsaXZlOiBcImh0dHA6Ly9pdG8tc2FtYS5ydVwiXG4gIC8vIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQQ05ld3NcIixcbiAgICBwYXRoOiBcIjIwMDktMDctLW5lcTQtLXBjbmV3cy93d3cvXCIsXG4gICAgcGFnZXM6IFtcInBjbmV3cy1zdGFydC5odG1sXCIsXCJwY25ld3MtaW5kZXgtbmV3cy5odG1sXCIsXCJwY25ld3MtYXJ0aWNsZS10b3AyMC5odG1sXCIsXCJwY25ld3Mtc2VhcmNoLXJlc3VsdHMuaHRtbFwiLFwicGNuZXdzLXRlYXIuaHRtbFwiLFwicGNuZXdzLXRleHQuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCJCZXdhcmUhIDIwMDkg0LPQvtC0LCDQv9C10YDQstGL0Lkg0LvQtdGC0L7Qv9C40YHQvdGL0Lkg0LfQsNC60LDQtywg0L7RhSDQuCDQvdCw0LzRg9GH0LDQu9GB0Y8g0Y8g0YEg0L3QuNC8LlwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICAgIGFsaXZlOiBcImh0dHA6Ly9wY25ld3MucnVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQmtC40L3QvtCX0LDQstC+0LRcIixcbiAgICBwYXRoOiBcIjIwMDktMDctLXNsYXZhLWtvbWFyb3YtLWtpbm96YXZvZC93d3cvXCIsXG4gICAgcGFnZXM6IFtcImluZGV4LTIwMi5odG1sXCIsXCJpbmRleC0zMDIuaHRtbFwiLFwiaW5kZXgtNDAyLmh0bWxcIixcImluZGV4LTUwMi5odG1sXCIsXCJpbmRleC02MDIuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQntC/0LXRgNCw0YLQvtGA0YHQutC+0LUg0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1XCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL3d3dy5raW5vemF2b2QucnVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJMaXR0bGUgRmlzaFwiLFxuICAgIHBhdGg6IFwiMjAwOS0wOC0tc21pbGUtLWxpdHRsZS1maXNoLXYxL3d3dy9cIixcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQodGC0LDRgNGL0Lkg0LTQuNC30LDQudC9INGB0YLRg9C00LjQuCDRgNC40YHRg9C90LrQsCBsaXR0bGUtZmlzaFwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIkFzdGVyIEdvbGRcIixcbiAgICBwYXRoOiBcIjIwMDktMTAtLXJvbWFuLW1hbmRyaWstLWFzdGVyLWdvbGQvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJhc3RlcmdvbGQuaHRtbFwiLFwiYXN0ZXJnb2xkLWJhc2tldC5odG1sXCIsXCJhc3RlcmdvbGQtaW5uZXIuaHRtbFwiLFwiYXN0ZXJnb2xkLW9yZGVyLXJlZ2lzdGVyLmh0bWxcIixcImFzdGVyZ29sZC1wcm9kdWN0Lmh0bWxcIixcImFzdGVyZ29sZC1wcm9maWxlLmh0bWxcIixcImFzdGVyZ29sZC1zdGF0aWMtcGFnZS5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCR0YDRjtC70LjQutC4ICYg0LrQvtC70LXRh9C60LhcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQodC90YsgaSDRgdC10LrRgNC10YLRi1wiLFxuICAgIHBhdGg6IFwiMjAwOS0xMi0tcm9tYW4tbWFuZHJpay0tc25pLWktc2VjcmV0aS93d3cvXCIsXG4gICAgcGFnZXM6IFtcInNueS1tYWluLmh0bWxcIixcInNueS1iYXNrZXQuaHRtbFwiLFwic255LWNhdGFsb2cuaHRtbFwiLFwic255LWNoZWNrb3V0Lmh0bWxcIixcInNueS1wcm9kdWN0Lmh0bWxcIixcInNueS10ZXh0Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0JjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvSDQv9C+0LTRg9GI0LXQuiDQuCDRgdC/0LDQvdGM0Y9cIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQnNCw0YjQsCDQmtGA0LDRgdC90L7QstCwLdCo0LDQsdCw0LXQstCwXCIsXG4gICAgcGF0aDogXCIyMDEwLTA0LS1zZXJnZXkta3J1ay0tbWFzaGEta3Jhc25vdmEtc2hhYmFldmEvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJtYWluLmh0bWxcIixcImJhY2tncm91bmQtdmVyMS5odG1sXCIsXCJiYWNrZ3JvdW5kLXZlcjIuaHRtbFwiLFwiYmFja2dyb3VuZC12ZXIzLmh0bWxcIixcImJsb2cuaHRtbFwiLFwicG9zdC1hbmQtY29tbWVudHMuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQndGD0LbQvdC+INC/0YDQuNC30L3QsNGC0Ywg0YHQvtCy0YDQtdC80LXQvdC90L7QtSDQuNGB0LrRg9GB0YHRgtCy0L4g0Y8g0YHQvtCy0LXRgNGI0LXQvdC90L4g0L3QtSDQstGA0YPQsdCw0Y4sINC90L4g0LLQtdGA0YHRgtCw0YLRjCDRjdGC0L4g0L3QtSDQvNC10YjQsNC10YIuXCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL21hc2h1c2hrYS5jb21cIlxuICB9LFxuXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCJXZXN0ZXJuIFVuaW9uXCIsXG4gIC8vICAgcGF0aDogXCIyMDEwLTA1LS1hcmllcy0td2VzdGVybi11bmlvbi93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcInd1LXNlYXJjaC1tYWlucGFnZS5odG1sXCIsXCJ3dS1zZWFyY2gtY2l0aWVzcGFnZS5odG1sXCIsXCJ3dS1zZWFyY2gtb2ZmaWNlcGFnZS5odG1sXCJdLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCf0L7QuNGB0Log0L7RhNC40YHQvtCyXCIsXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCJcbiAgLy8gfSxcblxuICB7XG4gICAgdGl0bGU6IFwi0JTRgNGD0LjQtNGB0LrQuNC5INC60LDQu9GM0LrRg9C70Y/RgtC+0YBcIixcbiAgICBwYXRoOiBcIjIwMTAtMDYtLWtydnNzLS1yZXN0by1kcnVpZC1oZWFsZXItY2FsY3VsYXRvci93d3cvXCIsXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0KHRgtGA0L7QuNC8INGA0LXRgdGC0L4t0LHQuNC70LTRiy4gI2xvbFcwMHRcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgICBhbGl2ZTogXCJodHRwOi8vdHJlZWNhbGNzLmNvbVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcItCh0LXRgNC10LHRgNC+INCd0LXQv9Cw0LvQsFwiLFxuICAgIHBhdGg6IFwiMjAxMC0wNy0tcm9tYW4tdm9ydXNoaW4tLXNlcmVicm8tbmVwYWxhL3d3dy9cIixcbiAgICBwYWdlczogW1wic2VyZWJyby1tYWluLmh0bWxcIixcInNlcmVicm8tYmFza2V0Lmh0bWxcIixcInNlcmVicm8tZm9ybS5odG1sXCIsXCJzZXJlYnJvLWluZm8uaHRtbFwiLFwic2VyZWJyby10b3Zhci5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCY0L3RgtC10YDQvdC10YIt0LzQsNCz0LDQt9C40L0g0L/RgNC40LrQvtC70YzQvdGL0YUg0LHQtdC30LTQtdC70YPRiNC10LpcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJOaWEgU3R5bGVcIixcbiAgICBwYXRoOiBcIjIwMTAtMDktLWV1Z2VuZS1tZXNoZXJqYWtvdi0tbmlhLXN0eWxlL3d3dy9cIixcbiAgICBwYWdlczogW1wibmlhLXN0eWxlLWRlZmF1bHQuaHRtbFwiLFwibmlhLXN0eWxlLWFydC5odG1sXCIsXCJuaWEtc3R5bGUtY2F0MS5odG1sXCIsXCJuaWEtc3R5bGUtY2F0Mi5odG1sXCIsXCJuaWEtc3R5bGUtdGV4dC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCn0YLQvi3RgtC+INC90LXRgdGD0YHQstC10YLQvdC+0LUgKDxxPtC90Y8t0YHRgtCw0LnQuzwvcT4/PyksINC90L4g0YLQsNC60L7QtSDRjyDRgtC+0LbQtSDQstC10YDRgdGC0LDRjlwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJTbWFydFRyYW5zXCIsXG4gICAgcGF0aDogXCIyMDEwLTEwLS1hbC1uaWtvLS1zbWFydHRyYW5zL3d3dy9cIixcbiAgICBwYWdlczogW1wic21hcnR0cmFucy1hYm91dC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCt0YLQviDQvdC1INGC0YDQsNC90YHQv9C+0YDRgiwg0Y3RgtC+INGP0LfRi9C60L7QstGL0LUg0L/QtdGA0LXQstC+0LTRi1wiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJVbmlDcmVkaXRcIixcbiAgICBwYXRoOiBcIjIwMTAtMTEtLWRhc2hhLWthcmFuZGFzaGV2YS0tdW5pY3JlZGl0LXdpZGdldC93d3cvXCIsXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0JLQuNC00LbQtdGCINC00LvRjyBNYWNcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwiTXIuIFdvb2RtYW4gdjEuMFwiLFxuICAgIHBhdGg6IFwiMjAxMC14eC0tbXItd29vZG1hbi12MS93d3cvXCIsXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0JzQvtC5INC80LXQs9Cw0YHQsNC50YIg0L/QtdGA0LLQvtC5INCy0LXRgNGB0LjQuC4gI9CU0LjQt9Cw0LnQvSZVWFwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcItCj0YXRgtGL0YjQutCwXCIsXG4gICAgcGF0aDogXCIyMDExLTAzLS1zbWlsZS0tdWh0eXNoa2Evd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJ1aHR5LW1haW4uaHRtbFwiLFwidWh0eS1hYm91dC11cy5odG1sXCIsXCJ1aHR5LWFjdGl2YXRpb24uaHRtbFwiLFwidWh0eS1jb250YWN0cy5odG1sXCIsXCJ1aHR5LWRvc3RhdmthLmh0bWxcIixcInVodHktZ29vZGllcy5odG1sXCIsXCJ1aHR5LWhvdy10aGlzLXdvcmtzLmh0bWxcIixcInVodHktcGhvdG8uaHRtbFwiLFwidWh0eS1wcm9kdWN0Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0KHQutGA0L7QvNC90L4g0L3QviDQvNC40LvQvlwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJZb2dhRGFcIixcbiAgICBwYXRoOiBcIjIwMTEtMDUtLXNlYW5hdC0teW9nYWRhL3d3dy9cIixcbiAgICBwYWdlczogW1wieW9nYWRhLW1haW4uaHRtbFwiLFwieW9nYWRhLTQwNC5odG1sXCIsXCJ5b2dhZGEtYWxsLXVzZXJzLmh0bWxcIixcInlvZ2FkYS1ibG9nLmh0bWxcIixcInlvZ2FkYS1ibG9nLXBvc3QuaHRtbFwiLFwieW9nYWRhLWJsb2dzLmh0bWxcIixcInlvZ2FkYS1ibG9ncy1hbGwtZW50cmllcy5odG1sXCIsXCJ5b2dhZGEtYmxvZ3MtbmV3cG9zdC5odG1sXCIsXCJ5b2dhZGEtY29tbWVudHMuaHRtbFwiLFwieW9nYWRhLWVhc3RwcmFjdGljZXMuaHRtbFwiLFwieW9nYWRhLWZyZWVkaXZlLmh0bWxcIixcInlvZ2FkYS1tYWluLWxvZ2luLmh0bWxcIixcInlvZ2FkYS1tZXJvcHJpamF0aWphLmh0bWxcIixcInlvZ2FkYS1uZXdzLmh0bWxcIixcInlvZ2FkYS1waG90by5odG1sXCIsXCJ5b2dhZGEtcGhvdG9zLmh0bWxcIixcInlvZ2FkYS1waG90b3MtYWxidW0uaHRtbFwiLFwieW9nYWRhLXBsYWNlcy5odG1sXCIsXCJ5b2dhZGEtcHJvZmlsZS5odG1sXCIsXCJ5b2dhZGEtc2VhcmNoLXJlc3VsdHMuaHRtbFwiLFwieW9nYWRhLXRleHQuaHRtbFwiLFwieW9nYWRhLXRleHQtcHJpbnQuaHRtbFwiLFwieW9nYWRhLXRleHRzLmh0bWxcIixcInlvZ2FkYS10aGVtZS5odG1sXCIsXCJ5b2dhZGEtdGhlbWVzLmh0bWxcIixcInlvZ2FkYS10cmF2ZWwuaHRtbFwiLFwieW9nYWRhLXZpZGVvcy5odG1sXCIsXCJ5b2dhZGEtemFnbHVzaGthLmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0J/QtdGA0LXRg9GB0LvQvtC20L3QtdC90L3Ri9C5INGB0LDQudGCLCDQvtGI0LXQu9C+0LzQu9GP0Y7RidC10LUg0LLQtdC00LXQvdC40LUg0L/RgNC+0LXQutGC0LAuICPQnNC40LvRjNGP0YDQtNCo0LDQsdC70L7QvdC+0LIsICPQnNC40LvRjNGP0YDQtNCf0YDQsNCy0L7QulwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQm9C10LrRhtC40Y8gQWhtYWQgVGVhXCIsXG4gICAgcGF0aDogXCIyMDExLTA3LS1zYW1hcnRzZXYtLWFobWFkLXRlYS1sZWN0dXJlL3d3dy9cIixcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQn9GA0L4g0YfQsNC5LCDQtdGB0YLQtdGB0YLQstC10L3QvdC+LiDQn9GA0L7RgdGC0LXQvdGM0LrQviwg0L3QviDRh9C10YLQutC+LlwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJCYXJzIElJXCIsXG4gICAgcGF0aDogXCIyMDExLTA4LS1kaW1hLWtvbWlzc2Fyb3YtLWJhcnMtMi93d3cvXCIsXG4gICAgcGFnZXM6IFtcImJhcnMyLWluZGV4Lmh0bWxcIixcImJhcnMyLWFib3V0Lmh0bWxcIixcImJhcnMyLWFib3V0LW9sZC5odG1sXCIsXCJiYXJzMi1kZWFsZXJzLmh0bWxcIixcImJhcnMyLWRvb3JzLmh0bWxcIixcImJhcnMyLWRvb3JzLWxvY2tzbmhhbmRsZXMuaHRtbFwiLFwiYmFyczItZG9vcnMtbm9uc3RhbmRhcmQuaHRtbFwiLFwiYmFyczItZG9vcnMtd2h5YmFycy5odG1sXCIsXCJiYXJzMi1mb3J1bS1wb3N0LWNvbW1lbnRzLmh0bWxcIixcImJhcnMyLWZvcnVtLXBvc3RzLWxpc3QuaHRtbFwiLFwiYmFyczIta29uZmlndXJhdG9yLW1vZGVscy5odG1sXCIsXCJiYXJzMi1rb25maWd1cmF0b3ItdmFycy5odG1sXCIsXCJiYXJzMi1rb25maWd1cmF0b3ItdmFyczIuaHRtbFwiLFwiYmFyczItbWlub3JhLmh0bWxcIixcImJhcnMyLW1pbm9yYS1hYm91dC5odG1sXCIsXCJiYXJzMi1taW5vcmEtdGVjaHMuaHRtbFwiLFwiYmFyczItbWlub3JhLXZhcnMuaHRtbFwiLFwiYmFyczItc2hvd3Jvb20uaHRtbFwiLFwiYmFyczItc2hvd3Jvb20tcHJpbnQuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQktGC0L7RgNCw0Y8g0LLQtdGA0YHQuNGPINGB0LDQudGC0LAuICPQmtGA0YPRgtCw0Y/QoNC10LfQuNC90LBcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgICBhbGl2ZTogXCJodHRwOi8vd3d3LmJhcnNkb29ycy5ydVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIkJhcnNcIixcbiAgICBwYXRoOiBcIjIwMTEtMDgtLWRpbWEta29taXNzYXJvdi0tYmFycy1mb3ItZGVzaWduZXJzL3d3dy9cIixcbiAgICBwYWdlczogW1wiYmFyczJkZXNpZ25lcnMtaW5kZXguaHRtbFwiLFwiYmFyczJkZXNpZ25lcnMtc2NoZW1lLmh0bWxcIixcImJhcnMyZGVzaWduZXJzLXJlc2VydmUuaHRtbFwiLFwiYmFyczJkZXNpZ25lcnMtcGhvdG8uaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQlNCy0LXRgNC4LiDQodCw0LnRgiDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjyDQtNC70Y8g0LTQuNC30LDQudC90LXRgNC+0LIg0LjQvdGC0LXRgNGM0LXRgNC+0LJcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwi0JDQtNCy0L7QutCw0YLRgdC60LjQuSDQutC70YPQsVwiLFxuICAgIHBhdGg6IFwiMjAxMS0xMi0tZGltYS1rb21pc3Nhcm92LS1hZHZvY2F0ZS1jbHViL3d3dy9cIixcbiAgICBwYWdlczogW1wiYWMtaW5kZXgtdGVtcC5odG1sXCIsXCJhYy1pbmRleC1jdXN0b21lcnMuaHRtbFwiLFwiYWMtaW5kZXgtYWR2b2NhdHMuaHRtbFwiLFwiY3VzdG9tZXJzLWluZGV4Lmh0bWxcIixcImN1c3RvbWVycy1ob3cuaHRtbFwiLFwiY3VzdG9tZXJzLWZhcS5odG1sXCIsXCJhZHZvY2F0cy1yZWdpc3RyYXRpb24uaHRtbFwiLFwiYWR2b2NhdHMtcHJpdmlsZWdlcy5odG1sXCIsXCJhYy1yZXZpZXdzLmh0bWxcIixcImFjLWluZm8uaHRtbFwiLFwiYWMtaG93LWN1c3RvbWVycy5odG1sXCIsXCJhYy1jdXN0b21lci1wZXJzb25hbC1jYWJpbmV0Lmh0bWxcIixcImFjLWFydGljbGUuaHRtbFwiLFwiYWMtYWR2b2NhdC1ob21lcGFnZS5odG1sXCIsXCJhYy1hZHZpY2VzLmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0JzQuNC70YzRj9GA0LQg0YjQsNCx0LvQvtC90L7Qsiwg0LjQvdGC0LXRgNC10YHQvdGL0LUg0YXQvtC00Ysg0YEg0YjRgNC40YTRgtCw0LzQuCDQuCDQtNC+0YDQtdCy0L7Qu9GO0YbQuNC+0L3QvdGL0Lkg0LLQuNC00LbQtdGCIDxxPtCw0LrQutC+0YDQtNC10L7QvTwvcT5cIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwiRmFjZWJvb2st0LzQsNCz0LDQt9C40L0gQWhtYWQgVGVhXCIsXG4gICAgcGF0aDogXCIyMDEyLTAzLS1hcmllcy0tYWhtYWQtdGVhLWZhY2Vib29rL3d3dy9cIixcbiAgICBwYWdlczogW1wiYWhtYWQtaW5kZXguaHRtbFwiLFwiYWhtYWQtY2F0ZWdvcnkuaHRtbFwiLFwiYWhtYWQtc2VhcmNoLmh0bWxcIixcImFobWFkLWl0ZW0uaHRtbFwiLFwiYWhtYWQtc3RlcDEuaHRtbFwiLFwiYWhtYWQtaGlzdG9yeS5odG1sXCIsXCJhaG1hZC1zdGVwMy5odG1sXCIsXCJhaG1hZC1lbWFpbC5odG1sXCIsXCJhaG1hZC1zdGVwNC5odG1sXCIsXCJhaG1hZC1zdGVwMi5odG1sXCIsXCJhaG1hZC1hYm91dC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCf0YDQvtGB0YLQviDQuCDQutC70LXQstC+XCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldFwiLFxuICAgIGFsaXZlOiBcImh0dHBzOi8vYXBwcy5mYWNlYm9vay5jb20vYWhtYWR0ZWFzdG9yZS9cIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQlNGL0LzQvtCyXCIsXG4gICAgcGF0aDogXCIyMDEyLTA0LS1ydWR5LS1keW1vdi93d3cvXCIsXG4gICAgcGFnZXM6IFtcImR5bW92LWluZGV4Lmh0bWxcIixcImR5bW92LXJlY2VwdHkuaHRtbFwiLFwiZHltb3YtcmVjZXB0eS1pbnNpZGUuaHRtbFwiLFwiZHltb3YtcHJvZHVrY2lhLmh0bWxcIixcImR5bW92LXByb2R1a2NpYS1pbnNpZGUuaHRtbFwiLFwiZHltb3Ytby1uYXMuaHRtbFwiLFwiZHltb3Ytbm92b3N0aS5odG1sXCIsXCJkeW1vdi1ub3Zvc3RpLWluc2lkZS5odG1sXCIsXCJkeW1vdi1rb250YWt0eS5odG1sXCIsXCJkeW1vdi1rYXJqZXJhLmh0bWxcIixcImR5bW92LWthY2hlc3R2by1pLWJlem9wYXNub3N0Lmh0bWxcIixcImR5bW92LWlzdG9yaWphLmh0bWxcIixcImR5bW92LWludmVzdG9yYW0uaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQnNGP0YHQvi4g0JrQvtC70LHQsNGB0LAuINCU0LDQttC1INCi0JIt0LrQsNC90LDQuyDQv9GA0L4g0LrQvtGC0LvQtdGC0YshINCSINC+0LHRidC10LwsINC/0YDQvtGB0YLQvtC5INC40L3RhNC+0YDQvNCw0YbQuNC+0L3QvdGL0Lkg0YHQsNC50YIv0LjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvVwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICAgIGFsaXZlOiBcImh0dHA6Ly92LWR5bW92LnJ1XCJcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwi0J7RgdGCLdC80LXQtFwiLFxuICAgIHBhdGg6IFwiMjAxMi0wNi0taGFuZHl3ZWItLW9zdG1lZC93d3cvXCIsXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0JzQvtCx0LjQu9GM0L3Ri9C5INGB0LDQudGCINC/0YDQviDQvNC10LTQuNC60L7QslwiLFxuICAgIGRldmljZXM6IFwibW9iaWxlXCIsXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcItCi0YDQsNC90YHQtNC10L/QvtGCXCIsXG4gICAgcGF0aDogXCIyMDEyLXh4LS1hcmllcy0tdHJhbnNkZXBvdC93d3cvXCIsXG4gICAgcGFnZXM6IFtcInRyYW5zZGVwb3QtaW5kZXguaHRtbFwiLFwidHJhbnNkZXBvdC10YW1vemhlbm5vZS1vZm9ybWxlbmllLmh0bWxcIixcInRyYW5zZGVwb3QtZG9zdGF2a2EtZ3J1em92Lmh0bWxcIixcInRyYW5zZGVwb3QtY2FiaW5ldC5odG1sXCIsXCJ0cmFuc2RlcG90LWF1dHNvcnNpbmctdmVkLmh0bWxcIixcInRyYW5zZGVwb3QtYWJvdXQuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQn9GA0L7Qu9C10YLQsNGA0L3Qviwg0L/RgNC+INC80LDRiNC40L3QutC4ICYg0L/QvtC80L7RgNC+0YfQtdC90L3Ri9C5INC60LDQu9GM0LrRg9C70Y/RgtC+0YAg0L3QsCDQs9C70LDQstC90L7QuS5cIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgICBhbGl2ZTogXCJodHRwOi8vdHJhbnNkZXBvdC5ydVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIkNhcGl0YWwgVmlld1wiLFxuICAgIHBhdGg6IFwiMjAxMi14eC0tZGltYS1rb21pc3Nhcm92LS1jYXBpdGFsLXZpZXcvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJjYXBpdGFsdmlldy1pbmRleC5odG1sXCIsXCJjYXBpdGFsdmlldy1wcm9qZWN0bWVtYmVycy5odG1sXCIsXCJjYXBpdGFsdmlldy1rYXRvay5odG1sXCIsXCJjYXBpdGFsdmlldy1hYm91dC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCQINGN0YLQviDQv9C+0LvQvdGL0Lkg0YPQu9GR0YIg0L/QvtGC0L7QvNGDINGH0YLQviAzZCB0cmFuc2Zvcm1hdGlvbnMuINCc0Ysg0LrQsNC6LdCx0Ysg0LLQvdGD0YLRgNC4INGG0LjQu9C40L3QtNGA0LAsINC90LDQtNC+INC/0L7QvdCw0LLQvtC00LjRgtGMINC90LAg0LzQtdC90Y4uICMzZNCj0LvRkdGCLCAj0KPQutCw0YfQuNCy0LDQtdGCXCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIlRpa3RvayBMdW5hdGlrXCIsXG4gICAgcGF0aDogXCIyMDEyLXh4LS1zYW1idWwtLWx1bmF0aWsvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJsdW5hdGlrdG9rLWluZGV4Lmh0bWxcIiwgXCJsdW5hdGlrdG9rLWlwb2QuaHRtbFwiLFwibHVuYXRpa3Rvay1pbm5lci10aWt0b2suaHRtbFwiLFwibHVuYXRpa3Rvay1pbm5lci1sdW5hdGlrLmh0bWxcIixcImx1bmF0aWt0b2staW5uZXItbHVuYXRpay1ub3QtcHJlc2VudC5odG1sXCIsXCJsdW5hdGlrdG9rLWhpc3RvcnkuaHRtbFwiLFwibHVuYXRpa3Rvay1mZWVkYmFjay5odG1sXCIsXCJsdW5hdGlrdG9rLWNvbXBsZWN0cy5odG1sXCIsXCJsdW5hdGlrdG9rLWJ1eS1zdGVwLTYuaHRtbFwiLFwibHVuYXRpa3Rvay1idXktc3RlcC01Lmh0bWxcIixcImx1bmF0aWt0b2stYnV5LXN0ZXAtNC5odG1sXCIsXCJsdW5hdGlrdG9rLWJ1eS1zdGVwLTMuaHRtbFwiLFwibHVuYXRpa3Rvay1idXktc3RlcC0yYy5odG1sXCIsXCJsdW5hdGlrdG9rLWZhcS5odG1sXCIsXCJsdW5hdGlrdG9rLWJ1eS1zdGVwLTJiLmh0bWxcIixcImx1bmF0aWt0b2stYnV5LXN0ZXAtMmEuaHRtbFwiLFwibHVuYXRpa3Rvay1idXktc3RlcC0xYi5odG1sXCIsXCJsdW5hdGlrdG9rLWJ1eS1zdGVwLTFhLmh0bWxcIixcImx1bmF0aWt0b2stYWNjZXNzb3JpZXMuaHRtbFwiLFwibHVuYXRpa3Rvay1hY2Nlc3Nvcmllcy1hbmQtYWxsLmh0bWxcIixcImx1bmF0aWt0b2stYWJvdXQuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQmNC90YLQtdGA0LXRgdC90YvQuSDQsdGL0Lsg0LTQuNC30LDQudC9Li4uICPQn9GA0LhBcHBsZdC90L3QvtGB0YLRjFwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiXG4gIH0sXG5cbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcItCe0YLQutGA0YvRgtC60LAgQWhtYWQgVGVhXCIsXG4gIC8vICAgcGF0aDogXCIyMDEyLTEyLS1hcmllcy0tYWhtYWQtbmV3LXllYXIvd3d3L1wiLFxuICAvLyAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCd0LAg0L3QvtCy0YvQuSDQs9C+0LQuINCh0L3QtdCzINC00LXRgtC10LrRgtC10LQuXCIsXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gIC8vIH0sXG5cbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcItCa0LjQvdC00LXRgNC40L3QvlwiLFxuICAvLyAgIHBhdGg6IFwiMjAxMi14eC0tYXJpZXMtLWtpbmRlcmluby93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcImtpbmRlci1pbmRleC5odG1sXCJdLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCh0YLRgNCw0YjQvdCw0Y8g0LIg0YHQstC+0LXQuSDRgdC70L7QttC90L7RgdGC0Lgg0LDQvdC40LzQsNGG0LjRjy4gI0Fkb2JlRWRnZVwiLFxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICAvLyB9LFxuXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCLQm9GO0LHQvtCy0YxcIixcbiAgLy8gICBwYXRoOiBcIjIwMTIteHgtLWRpbWEta29taXNzYXJvdi0tZGstbG92ZS93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0KfRgtC+LdGC0L4g0Y/QstC90L4g0LzQuNC70L7QtSwg0L3QviDQvdC10L/QvtC90Y/RgtC90L7QtS4uLiApKSlcIixcbiAgLy8gICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgLy8gfSxcblxuICAvLyB7XG4gIC8vICAgdGl0bGU6IFwi0JDQvNC10YDQuNC60LDQvdGB0LrQsNGPINC80LXRh9GC0LAg0L3QsCDQlNC80LjRgtGA0L7QstC60LVcIixcbiAgLy8gICBwYXRoOiBcIjIwMTIteHgtLWRpbWEta29taXNzYXJvdi0tZG1pdHJvdmthL3d3dy9cIixcbiAgLy8gICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcbiAgLy8gICBkZXNjcmlwdGlvbjogXCLQk9C10L3QuNCw0LvRjNC90YvQuSBjc3Mt0LzRg9C00YDRkdC2INGBINCz0LvQvtCx0YPRgdC+0LwuINCt0YLQviDQt9Cw0LPQu9GD0YjQutCwLiAj0JrRgNGD0YLQsNGP0KDQtdC30LjQvdCwXCIsXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gIC8vIH0sXG5cbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcItCa0L7RgtGC0LXQtNC20Lgg0JLQtdGB0LXQvdC40L3QvlwiLFxuICAvLyAgIHBhdGg6IFwiMjAxMi14eC0tZGltYS1rb21pc3Nhcm92LS12ZXNlbmluby0xL3d3dy9cIixcbiAgLy8gICBwYWdlczogW1wiaW5kZXguaHRtbCNuby1hbmltYXRpb25cIixcInJhc3BvbG96aGVuaWUuaHRtbFwiLFwibm92b3N0aS5odG1sXCIsXCJrb250YWt0eS5odG1sXCIsXCJrb21tdW5pa2FjaWktaS1tYXRlcmlhbHkuaHRtbFwiLFwiaW5mcmFzdHJ1a3R1cmEtcmFqb25hLmh0bWxcIixcImluZnJhc3RydWt0dXJhLXBvc2Vsa2EuaHRtbFwiLFwiZ2VucGxhbi5odG1sXCIsXCJla29sb2dpamEuaHRtbFwiLFwiZGV2ZWxvcGVyLmh0bWxcIixcImRldGphbS5odG1sXCJdLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCf0YDQuNC60L7Qu9GM0L3Ri9C5INC00LjQt9Cw0LnQvS4gI9Cf0L7QvNC+0YDQvtGH0LrQsCwgI9Ca0YDRg9GC0LDRj9Cg0LXQt9C40L3QsFwiLFxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICAvLyAgIGFsaXZlOiBcImh0dHA6Ly93d3cudmVzZW5pbm8ucnVcIlxuICAvLyB9LFxuXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCLQmtC+0YLRgtC10LTQttC4INCS0LXRgdC10L3QuNC90L4gKNC/0LXRgNC10LTQtdC70LrQsClcIixcbiAgLy8gICBwYXRoOiBcIjIwMTIteHgtLWRpbWEta29taXNzYXJvdi0tdmVzZW5pbm8tMy93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIixcInZpZC1zdmVyaHUuaHRtbFwiLFwicy16YWJvdG9qLW8tZGV0amFoLmh0bWxcIixcInJlYWRtZS1jaGFuZ2VzLmh0bWxcIixcIm5vdm9zdGkuaHRtbFwiLFwia29udGFrdHkuaHRtbFwiLFwia2FrLXByb2VoYXQuaHRtbFwiLFwiY2h0by1wb2JsaXpvc3RpLmh0bWxcIixcImFydGljbGUtbm92b3N0aS5odG1sXCJdLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCW0YPRgtC60L7QtSDQtNC10LvQviDigJQg0YLRgNC10YLRjNGPINCy0LXRgNGB0LjRjyDRgdCw0LnRgtCwLiAj0JrRgNGD0YLQsNGP0KDQtdC30LjQvdCwXCIsXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gIC8vICAgYWxpdmU6IFwiaHR0cDovL3d3dy52ZXNlbmluby5ydVwiXG4gIC8vIH0sXG5cbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcItCf0LDQvdC+0YDQsNC80LBcIixcbiAgLy8gICBwYXRoOiBcIjIwMTMtMTAtLW1hc2hhLW5pZ2dvbC0tcGFub3JhbWEvd3d3L1wiLFxuICAvLyAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCd0LXQtNC+0LTQtdC70LrQsCDQvtGB0L3QvtCy0LUg0LzQvtC10LPQviDQtNCy0LjQttC60LAg0L/QsNC90L7RgNCw0LwuICNqUXVlcnkt0L/Qu9Cw0LPQuNC9LCAj0J/QvtC80L7RgNC+0YfQutCwXCIsXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCJcbiAgLy8gfSxcblxuICAvLyB7XG4gIC8vICAgdGl0bGU6IFwi0KHQsNC50YIg0YLQsNCx0LvQtdGC0L7QuiDQvtGCINC60YDQsNGB0L7RgtGLXCIsXG4gIC8vICAgcGF0aDogXCIyMDEzLXh4LS1tZWxpcy0tbWVkaWNhbC93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIiwgXCJ0cml1bXBoLmh0bWxcIixcIm1lc290aGVyYXB5Lmh0bWxcIixcImNvbnRhY3QuaHRtbFwiLFwiYmVhdXRlbGxlLmh0bWxcIl0sXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0KfRgtC+0LEg0LHQvtCz0LDRgtGL0LUg0YHRgtCw0YDRg9GF0Lgg0LrQsNC30LDQu9C40YHRjCDQutGA0LDRgdC40LLQtdC5INGH0LXQvCDQvtC90Lgg0LXRgdGC0Ywg0L3QsCDRgdCw0LzQvtC8INC00LXQu9C1LlwiLFxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcFwiXG4gIC8vIH0sXG5cbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIkZvb3Rib3gubWVcIixcbiAgLy8gICBwYXRoOiBcIjIwMTQtMDMtLW5hdGFzaGEta290bHlhcmV2c2theWEtLWZvb3Rib3gubWUvd3d3L1wiLFxuICAvLyAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCh0YLRgNCw0L3QuNGG0LAt0LfQsNCz0LvRg9GI0LrQsC4g0JLRgdC1INGA0LXRgdGD0YDRgdGLINCyINC+0LTQvdC+0Lwg0YTQsNC50LvQtVwiLFxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcFwiXG4gIC8vIH0sXG5cbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIlByb2RtYWdcIixcbiAgLy8gICBwYXRoOiBcIjIwMTQtMDQtLXNlYW5hdC0tcHJvZG1hZy93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcImNhdGVnb3J5Lmh0bWxcIixcImlubmVyLmh0bWxcIixcIm1haW4uaHRtbFwiLFwidG92YXIuaHRtbFwiXSxcbiAgLy8gICBkZXNjcmlwdGlvbjogXCLQn9GA0L7RgdGC0L7QuSDQuNC90YLQtdGA0L3QtdGCLdC80LDQs9Cw0LfQuNC9XCIsXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCJcbiAgLy8gfSxcblxuICAvLyB7XG4gIC8vICAgdGl0bGU6IFwiTXIuIFdvb2RtYW4gdjQuMFwiLFxuICAvLyAgIHBhdGg6IFwiLi4vXCIsXG4gIC8vICAgcGFnZXM6IFtcImh0dHA6Ly9tci13b29kbWFuLnJ1L2luZGV4Lmh0bWxcIl0sXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0JzQvtC5INC80LXQs9Cw0YHQsNC50YIuICPQkNC00LDQv9GC0LjQstC90L7RgdGC0YwsICNBbmd1bGFyanMsICPQn9GA0LDQstC40LvQsNCg0LDQsdC+0YLRi9Ch0J3QtdC+0L/RgNC10LTQtdC70ZHQvdC90L7RgdGC0YzRjlwiLFxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXG4gIC8vICAgYWxpdmU6IFwiaHR0cDovL21yLXdvb2RtYW4ucnVcIlxuICAvLyB9LFxuXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCJTaGVkdWxlIEVkaXRcIixcbiAgLy8gICBwYXRoOiBcIjIwMTQteHgtLWFwb2xsby0tc2NoZWRpdC93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDRgtCw0LHQu9C40YbRiyDigJQg0LfQsNC/0YfQsNGB0YLRjCDQtNC70Y8g0LDQtNC80LjQvdC60LguICNBbmd1bGFyanNcIixcbiAgLy8gICBkZXZpY2VzOiBcImRlc2t0b3BcIlxuICAvLyB9LFxuXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCLQntCe0J4gwqvQn9GA0L7QvNC40L3QttC40L3QuNGA0LjQvdCzwrtcIixcbiAgLy8gICBwYXRoOiBcIjIwMTUtMDEtLXNsYXZhLWtvbWFyb3YtLXByb21lbmdpbmVlcmluZy93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIiwgXCJhYm91dC5odG1sXCIsIFwiaGFpbWVyLmh0bWxcIiwgXCJpZXcuaHRtbFwiLCBcImlydWJhLmh0bWxcIiwgXCJuZXdzLXBvc3QtMDEuaHRtbFwiLCBcIm5ld3MtcG9zdC0wMi5odG1sXCIsIFwicG9zdC5odG1sXCIsIFwic2FiLmh0bWxcIl0sXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0KHRg9GA0L7QstGL0Lkg0YHQsNC50YIg0LTQu9GPINGB0YPRgNC+0LLQvtC5INC+0YLRgNCw0YHQu9C4XCIsXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCJcbiAgLy8gfSxcblxuICAvLyB7XG4gIC8vICAgdGl0bGU6IFwi0JDQstGC0L7RgNGB0LrQuNC1INGC0L7RgNGC0YsgQ29mZmVlbWFuaWFcIixcbiAgLy8gICBwYXRoOiBcIjIwMTUtMDgtLW1hc2hhLW5pZ2dvbC0tdG9wLXRvcnQvd3d3L1wiLFxuICAvLyAgIHBhZ2VzOiBbXCJtYWluLmh0bWxcIiwgXCJhYm91dC5odG1sXCIsIFwiY2FiaW5ldC5odG1sXCIsIFwiY29udGFjdHMuaHRtbFwiLCBcInJlYWR5Lmh0bWxcIl0sXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0KXQvtGH0LXRgtGB0Y8g0YHRitC10YHRgtGMINGB0LDQudGCLlwiLFxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCJcbiAgLy8gfSxcblxuICAvLyB7XG4gIC8vICAgdGl0bGU6IFwi0JLQuNC00LbQtdGCIENob2lzdGVyLnJ1XCIsXG4gIC8vICAgcGF0aDogXCIyMDEzLTEwLS1hcG9sbG8tLWNob2lzdGVyLXdpZGdldC93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0KbQtdC90Ysg0L3QsCDQvdC10LTQstC40LbQuNC80L7RgdGC0Ywg0LIg0YDQtdCw0LvRjNC90L7QvCDQstGA0LXQvNC10L3QuC4gI0FuZ3VsYXJqc1wiLFxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICAvLyAgIGFsaXZlOiBcImh0dHA6Ly9jaG9pc3Rlci5ydS9tb2R1bGVzL2luZm9ncmFwaGljcy9cIlxuICAvLyB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJJZGVhbG1hc3RlclwiLFxuICAgIHBhdGg6IFwiMjAxNC0xMC0tbWFzaGEtbmlnZ29sLS1pZGVhbG1hc3Rlci93d3cvXCIsXG4gICAgcGFnZXM6IFtcImlkZWFsbWFzdGVyLWluZGV4Lmh0bWxcIiwgXCJpZGVhbG1hc3Rlci1hcnRpY2xlLWxpc3QuaHRtbFwiLCBcImlkZWFsbWFzdGVyLWFydGljbGUuaHRtbFwiLCBcImlkZWFsbWFzdGVyLWJyYW5kLmh0bWxcIiwgXCJpZGVhbG1hc3Rlci1jb2xsZWN0aW9uLXNwZWNpYWwuaHRtbFwiLCBcImlkZWFsbWFzdGVyLWNvbGxlY3Rpb24uaHRtbFwiLCBcImlkZWFsbWFzdGVyLWdsb3NzYXJ5Lmh0bWxcIiwgXCJpZGVhbG1hc3Rlci1tb2RlbC5odG1sXCIsIFwiaWRlYWxtYXN0ZXItbW9kZWwyLmh0bWxcIiwgXCJpZGVhbG1hc3Rlci1zZXJ2aWNlLmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0JrRgNGD0YLRi9C1INGH0LDRgdC40LrQuCwg0LzQvdC+0LPQvi3QuC3QtNC+0LvQs9C+LdC00LjQt9Cw0LnQvVwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL3dhdGNoZXMuaWRlYWxtYXN0ZXIucnVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJBbGxzd2VldHNcIixcbiAgICBwYXRoOiBcIjIwMTQtMDgtLXNlYW5hdC0tYWxsc3dlZXRzL3d3dy9cIixcbiAgICBwYWdlczogW1wiYWxsc3dlZXRzLWluZGV4Lmh0bWxcIixcImFsbHN3ZWV0cy00MDQuaHRtbFwiLFwiYWxsc3dlZXRzLWNhYmluZXQuaHRtbFwiLFwiYWxsc3dlZXRzLWNhcnQuaHRtbFwiLFwiYWxsc3dlZXRzLWNhcnQtY2hlY2tvdXQuaHRtbFwiLFwiYWxsc3dlZXRzLWNhdGVnb3J5Lmh0bWxcIixcImFsbHN3ZWV0cy1jb250YWN0cy5odG1sXCIsXCJhbGxzd2VldHMtY3NzLmh0bWxcIixcImFsbHN3ZWV0cy1nYWxsZXJ5Lmh0bWxcIixcImFsbHN3ZWV0cy1pdGVtLmh0bWxcIixcImFsbHN3ZWV0cy1tYW51ZmFjdHVyZXJzLmh0bWxcIixcImFsbHN3ZWV0cy1uZXdzLmh0bWxcIixcImFsbHN3ZWV0cy1uZXdzLXBvc3QuaHRtbFwiLFwiYWxsc3dlZXRzLXBvcnRmb2xpby5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCa0L7QvdGE0LXRgtC+0LjQtNGLXCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL2FsbHN3ZWV0cy5ydS9cIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQmtC70YPQsSDQkNGF0LzQsNC0XCIsXG4gICAgcGF0aDogXCIyMDE0LTEyLS1tYXNoYS1uaWdnb2wtLWNsdWItYWhtYWQvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJpbmRleC5odG1sIy9jb250ZXN0L3dvcmtzXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCa0LvRg9CxINC+0LrQvtC90YfQsNGC0LXQu9GM0L3Ri9GFINGE0LDQvdCw0YLQvtCyINGH0LDRjyDQkNGF0LzQsNC0LiBBbmd1bGFyanMg0LTQu9GPINGD0LTQvtCx0YHRgtCy0LAg0L3QsNGA0LXQt9Cw0L3QuNGPINC90LAg0LfQsNC/0YfQsNGB0YLQuCDQtNC70Y8g0L/RgNC+0LPRgNCw0LzQvNC40YHRgtCwXCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL2NsdWIuYWhtYWR0ZWEucnVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQpNC10LTQtdGA0LDRhtC40Y8g0L/QvtC20LDRgNC90YvRhVwiLFxuICAgIHBhdGg6IFwiMjAxNC0wNC0tYXJpZXMtLWZpcmVmaWdodGVycy93d3cvXCIsXG4gICAgcGFnZXM6IFtcImFjdGl2aXR5Lmh0bWxcIixcImRvY3VtZW50cy5odG1sXCIsXCJsZWFkZXJzLmh0bWxcIixcIm1haW4uaHRtbFwiLFwibWFwLmh0bWxcIixcIm5hZ3JhZHkuaHRtbFwiLFwibmV3cy5odG1sXCIsXCJuZXdzLXBvc3QuaHRtbFwiLFwic21pLmh0bWxcIixcInN0eWxlcy5odG1sXCIsXCJ0ZW1wLmh0bWxcIixcInVzdGF2Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0J/RgNC+0YHRgtC+0Lkg0YHQsNC50YJcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgICBhbGl2ZTogXCJodHRwOi8vaW50ZXJmaXJlc3BvcnQuY29tXCJcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwi0KDRg9GB0YHQutC40Lkg0JjQv9C+0YLQtdGH0L3Ri9C5INCR0LDQvdC6XCIsXG4gICAgcGF0aDogXCIyMDE0LTAxLS1hcG9sbG8tLXJpYi93d3cvXCIsXG4gICAgcGFnZXM6IFtcImluZGV4MS1hcHBsaWNhdGlvbi5odG1sXCIsXCJpbmRleDItcHJpY2hpbmkuaHRtbFwiLFwiaW5kZXgzLXN0YXZrYS5odG1sXCIsXCJpbmRleDQtaXBvdGVrYS5odG1sXCIsXCJpbmRleDYtdGVybXMuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQodC40LzQv9Cw0YLQuNGH0L3Ri9C1INGB0YLRgNCw0L3QuNGG0YssINGH0ZHRgtC60LjQtSDQt9Cw0L/Rh9Cw0YHRgtC4LiAj0JLRgdC10LPQtNCwLdCx0Yst0YLQsNC6XCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gICAgYWxpdmU6IFwiaHR0cHM6Ly93d3cucnVzc2lwb3Rla2EucnVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJJbnRlZHVjYVwiLFxuICAgIHBhdGg6IFwiMjAxNC0wNC0ta3Nhbi0taW50ZWR1Y2Evd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCIsXCJibG9nLmh0bWxcIixcImNvbnRhY3RzLmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0JrRgNCw0YHQuNCy0YvQtSDRgtGA0Lgg0YHRgtGA0LDQvdC40YbRi1wiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICAgIGFsaXZlOiBcImh0dHA6Ly93d3cuaW50ZWR1Y2EucnVcIlxuICB9LFxuXG5cbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIkFjdGl2ZSBMZWFybmluZ1wiLFxuICAvLyAgIHBhdGg6IFwiMjAxNi0wMS0tbWFuZHJpay0tYWN0aXZlbGVhcm5pbmcvd3d3L1wiLFxuICAvLyAgIHBhZ2VzOiBbXCJkZW1vL2xhbmRpbmcuaHRtbFwiLCBcImRlbW8vaW5kZXguaHRtbFwiLCBcImRlbW8vbGF0ZXN0LWV2ZW50cy5odG1sXCIsIFwiZGVtby9zdGF0cy5odG1sXCIsIFwiZGVtby90b2RheS5odG1sXCJdLFxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCa0LDQutC+0LUt0YLQviDQvtCx0YPRh9C10L3QuNC1Li4uXCIsXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldFwiXG4gIC8vIH0sXG5cbiAge1xuICAgIHRpdGxlOiB7XG4gICAgICBydTogXCLQo9GB0YLRgNC+0LnRgdGC0LLQsCA0R29vZFwiLFxuICAgICAgZW46IFwiNEdvb2QgZGV2aWNlc1wiXG4gICAgfSxcbiAgICBwYXRoOiBcIjIwMTYtMDUtLWFuZHJlaWtpcy0tNGdvb2Qvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJwYWdlcy80Z29vZC1ob21lLmh0bWxcIiwgXCJwYWdlcy80Z29vZC1ibG9nLmh0bWxcIiwgXCJwYWdlcy80Z29vZC1jYXRhbG9nLmh0bWxcIiwgXCJwYWdlcy80Z29vZC1jb21wb25lbnRzLmh0bWxcIiwgXCJwYWdlcy80Z29vZC1jb250YWN0cy5odG1sXCIsIFwicGFnZXMvNGdvb2QtZmFxLXNlYXJjaC1yZXN1bHRzLmh0bWxcIiwgXCJwYWdlcy80Z29vZC1mYXEuaHRtbFwiLCBcInBhZ2VzLzRnb29kLWZlZWRiYWNrLmh0bWxcIiwgXCJwYWdlcy80Z29vZC1ub3RpZmljYXRpb24uaHRtbFwiLCBcInBhZ2VzLzRnb29kLXBvc3QuaHRtbFwiLCBcInBhZ2VzLzRnb29kLXByb2R1Y3QuaHRtbFwiLCBcInBhZ2VzLzRnb29kLXNlcnZpY2UuaHRtbFwiLCBcInBhZ2VzLzRnb29kLXNvZnR3YXJlLWFuZC1kb2NzLmh0bWxcIiwgXCJwYWdlcy80Z29vZC13aGVyZS10by1idXkuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0IG1vYmlsZVwiLFxuICAgIGFsaXZlOiBcImh0dHBzOi8vNGdvb2QucnVcIlxuICB9LFxuXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCLQntGC0YfRkdGC0YtcIixcbiAgLy8gICBwYXRoOiBcIjIwMTctMDItLWFsbWlhc2hldi0tcmVwb3J0L3d3dy9cIixcbiAgLy8gICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcbiAgLy8gICBkZXNjcmlwdGlvbjogXCJcIixcbiAgLy8gICBkZXZpY2VzOiBcImRlc2t0b3BcIlxuICAvLyB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQodCw0LnRgiBBaG1hZCBUZWFcIixcbiAgICBwYXRoOiBcIjIwMTMtMDMtLW1hc2hhLW5pZ2dvbC0tYWhtYWQvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJhaG1hZC1pbmRleC5odG1sXCIsXCJhaG1hZC00MDQuaHRtbFwiLFwiYWhtYWQtY2hham5hamEta2FydGEuaHRtbFwiLFwiYWhtYWQtY2hham55ai1zbG92YXIuaHRtbFwiLFwiYWhtYWQtY29udGVtcG9yYXJ5Lmh0bWxcIixcImFobWFkLWZhcS5odG1sXCIsXCJhaG1hZC1maWx0ci1wby10ZWd1Lmh0bWxcIixcImFobWFkLWtvbnRha3R5Lmh0bWxcIixcImFobWFkLW5vdmVqc2hhamEtaXN0b3JpamEuaHRtbFwiLFwiYWhtYWQtcmV6dWx0YXR5LXBvaXNrYS1wby1hcnRpY3VsdS5odG1sXCIsXCJhaG1hZC1yZXp1bHRhdHktcG9pc2thLXBvLW1hdGVyaWFsYW0uaHRtbFwiLFwiYWhtYWQtdGVhLmh0bWxcIixcImFobWFkLXRlYS10aW1lcy5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtYWZpc2hhLmh0bWxcIixcImFobWFkLXRlYS10aW1lcy1hcnRpY2xlLmh0bWxcIixcImFobWFkLXRlYS10aW1lcy1hcnRpY2xlLWFmaXNoYS5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtYXJ0aWNsZS1nYWxsZXJ5Lmh0bWxcIixcImFobWFkLXRlYS10aW1lcy1hcnRpY2xlLXBob3Rvcy5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtZXZlbnRzLmh0bWxcIixcImFobWFkLXRlYS10aW1lcy1nYWxsZXJ5Lmh0bWxcIixcImFobWFkLXRlYS10aW1lcy1tb3Njb3ctbWFwLmh0bWxcIixcImFobWFkLXRlYS10aW1lcy1wb2xscy5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtcmVjb21tZW5kcy5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCa0YPRh9CwINGH0LDQtdC30LDQv9GH0LDRgdGC0LXQuSwg0L7RgtC00LXQu9GM0L3Ri9C5INC80LjQutGA0L7RgdCw0LnRgiDQsiDQstC40LTQtSDQs9Cw0LfQtdGC0YtcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcbiAgICBhbGl2ZTogXCJodHRwOi8vYWhtYWR0ZWEucnVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQotC10YDQuNGC0L7RgNGA0LjRjyDRg9C00L7QstC+0LvRjNGB0YLQstC40Y9cIixcbiAgICBwYXRoOiBcIjIwMTIteHgtLWRpbWEta29taXNzYXJvdi0tdGVycmEtcGxlYXN1cmUvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJ0dS1pbmRleC5odG1sXCIsXCJ0dS13aW5lLmh0bWxcIixcInR1LWdpZnQuaHRtbFwiLFwidHUtd2luZXMuaHRtbFwiLFwidHUtcmV2aWV3Lmh0bWxcIixcInR1LXJlY29tbWVuZC1hcnRpY2xlcy5odG1sXCIsXCJ0dS1yZWNvbW1lbmQtYXJ0aWNsZS5odG1sXCIsXCJ0dS1pbmRleC5odG1sXCIsXCJ0dS1naWZ0cy5odG1sXCIsXCJ0dS1jb250YWN0cy5odG1sXCIsXCJ0dS1hYm91dC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCf0YDQviDQsdGD0YXQu9C+LiDQmtGA0LDRgdC40LLQviwg0YEg0LHRg9GC0YvQu9C60LDQvNC4LlwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0YHQutCy0L7RiC3RhtC10L3RgtGAXCIsXG4gICAgcGF0aDogXCIyMDEyLXh4LS1kaW1hLWtvbWlzc2Fyb3YtLXNxdWFzaC93d3cvXCIsXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIixcInJlc2VydmUuaHRtbFwiLFwicHJvZmlsZS5odG1sXCIsXCJwbGF5ZXIuaHRtbFwiLFwia25vd2xlZGdlLmh0bWxcIixcInJhdGluZ3MuaHRtbFwiLFwicGxheWVycy5odG1sXCIsXCJ0b3VybmFtZW50Lmh0bWxcIixcInRvdXJuYW1lbnRzLmh0bWxcIixcImNsdWIuaHRtbFwiLFwibmV3cy5odG1sXCIsXCJydWxlcy5odG1sXCIsXCJjbHVicy5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCf0L7QvNC+0YDQvtGH0LXQvdC90YvQuSDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9C5INGB0LDQudGCINC/0L4g0YLRg9GA0L3QuNGA0LDQvFwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQpNC10YDQvNCwIE1vcnRlbnN0dWVuXCIsXG4gICAgcGF0aDogXCIyMDE1LTAzLS1zaGFzaG5pYS0tbW9ydGVuc3R1ZW4vd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJtb3J0ZW5zdHVlbi1pbmRleC5odG1sXCIsIFwibW9ydGVuc3R1ZW4tYmxvZy5odG1sXCIsIFwibW9ydGVuc3R1ZW4tY29udGFjdC5odG1sXCIsIFwibW9ydGVuc3R1ZW4tZ2FsbGVyeS5odG1sXCIsIFwibW9ydGVuc3R1ZW4taGVhbHRoLmh0bWxcIiwgXCJtb3J0ZW5zdHVlbi1oaXN0b3J5Lmh0bWxcIiwgXCJtb3J0ZW5zdHVlbi1wb3N0Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0K3Qv9C40YfQvdC+0YHRgtGMINC90L7RgNCy0LXQttGB0LrQvtCz0L4g0YHQtdC70YzRgdC60L7Qs9C+INGF0L7Qt9GP0LnRgdGC0LLQsC5cIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0XCJcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwi0JLQvtC70L7QutC+0LvQsNC80YHQutC+0LUg0YTQtdGA0LzQtdGA0YHQutC+0LUg0YXQvtC30Y/QudGB0YLQstC+XCIsXG4gICAgcGF0aDogXCIyMDE0LTEyLS1tYXNoYS1uaWdnb2wtLXZvbG9rb2xhbXNrb2UtbW9sb2tvL3d3dy9cIixcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQnNC10YLQsC3QvNC+0LTQvdC+0LUg0LzQvtC70L7QutC+INC4INC60L7Qt9GLLCDQu9C10L3QtNC40L3Qsy5cIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0IG1vYmlsZVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcItCh0JTQoS3QpNCj0JTQoVwiLFxuICAgIHBhdGg6IFwiMjAxNS0xMS0tbWFzaGEtbmlnZ29sLS1zZHMtZm9vZHMvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCU0LjRgdGC0YDQuNCx0YzRjtGC0L7RgCDRh9Cw0Y8gQWhtYWRcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0IG1vYmlsZVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIkVhc3lsaWZlIE1lbnVcIixcbiAgICBwYXRoOiBcIjIwMTUtMDktLW1hc2hhLW5pZ2dvbC0tZWFzeWxpZmVtZW51L3d3dy9cIixcbiAgICBwYWdlczogW1wibWFya3VwLWluZGV4Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwiQ29mZmVlbWFuaWEg0LfQsCDQt9C00L7RgNC+0LLRi9C5INC+0LHRgNCw0Lcg0LbQuNC30L3QuC5cIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0IG1vYmlsZVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIlNvZml0cyBNZVwiLFxuICAgIHBhdGg6IFwiMjAxNC0wNC0tbmF0YXNoYS1rb3RseWFyZXZza2F5YS1zb2ZpdHNtZS1sb29rYm9vay93d3cvXCIsXG4gICAgcGFnZXM6IFtcInNmbS1zdHlsZS5odG1sXCIsIFwic2ZtLWxvb2tib29rLmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0J7QvdC70LDQudC9LdCz0LDRgNC00LXRgNC+0LEsINC70LXQvdC00LjQvdCzLlwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcItCa0L7QvNGE0L7RgNGC0L3QsNGPINGB0YLQvtC80LDRgtC+0LvQvtCz0LjRj1wiLFxuICAgIHBhdGg6IFwiMjAxNC0wMi0tc2xhdmEta29tYXJvdi0tc3RvbWF0b2xvZ3kvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCa0YDQsNGB0LjQstGL0Lkg0LvRjdC90LTQuNC90LMg0YEg0L/RgNC+0YHRgtGL0Lwg0L/QsNGA0LDQu9C70LDQutGB0L7QvFwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIkJhcnNcIixcbiAgICBwYXRoOiBcIjIwMTEtMDgtLWRpbWEta29taXNzYXJvdi0tYmFycy93d3cvXCIsXG4gICAgcGFnZXM6IFtcImJhcnMtaW5kZXguaHRtbFwiLFwiYmFycy1hZHZhbnRhZ2VzLmh0bWxcIixcImJhcnMtYWxsLW92ZXItcnVzc2lhLmh0bWxcIixcImJhcnMtY29uZmlndXJhdG9yLmh0bWxcIixcImJhcnMtY29udGFjdHMuaHRtbFwiLFwiYmFycy1kZWFsZXIuaHRtbFwiLFwiYmFycy1kZWFsZXJzLmh0bWxcIixcImJhcnMtZG9vci1jb3Zlci1lYm9ueS5odG1sXCIsXCJiYXJzLWRvb3ItY292ZXJzLmh0bWxcIixcImJhcnMtZG9vci1jb3Zlci12ZW5nZS5odG1sXCIsXCJiYXJzLWRvb3ItZGVzaWduLWNsYXNzaWNhLmh0bWxcIixcImJhcnMtZG9vci1kZXNpZ25zLmh0bWxcIixcImJhcnMtaW5mb3JtYXRpb24uaHRtbFwiLFwiYmFycy1waG90b2dhbGxlcnkuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQndCw0LLQvtGA0L7Rh9C10L3QvdCw0Y8g0LLRkdGA0YHRgtC60LAg0L/RgNC+INC00LLQtdGA0LguICPQmtGA0YPRgtCw0Y/QoNC10LfQuNC90LAsICPQnNC40LvRjNGP0YDQtNCo0LDQsdC70L7QvdC+0LJcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJPaCBNeSBNZW50b3JcIixcbiAgICBwYXRoOiBcIjIwMTQtMDMtLWlseWEtbmlrb2xhZXYtLW9obXltZW50b3Ivd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJtZW50b3JzLmh0bWxcIixcInN0YXJ0dXBzLmh0bWxcIixcImxhbmRpbmcuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQodGD0YDQvtCy0YvQuSDQv9Cw0YDQsNC70LvQsNC60YEgKyDQsNC00LDQv9GC0LjQstC90L7RgdGC0YwuICPQn9C+0LzQvtGA0L7Rh9C60LAsICNTa3JvbGxyXCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQotCQ0J4g0JzQtdC00LjQsFwiLFxuICAgIHBhdGg6IFwiMjAxMy0wOS0tc2VhbmF0LS10YW8tbWVkaWEvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCb0LXQvdC00LjQvdCzINC40L3RgtC10YDQvdC10YIt0YHRgtGD0LTQuNC4LiAj0J/RgNC40LDQtNCw0L/RgtC40LLQu9C10L3QvdGL0LlcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0IG1vYmlsZVwiLFxuICAgIGFsaXZlOiBcImh0dHA6Ly90YW8tbWVkaWEucnVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQoNC10YHRgtC+0YDQsNC9IMKr0KPQt9Cx0LXRh9C60LDCuyDQsiDQsNGN0YDQvtC/0L7RgNGC0LDRhSDQnNC+0YHQutCy0YtcIixcbiAgICBwYXRoOiBcIjIwMTUtMTItLW1hc2hhLW5pZ2dvbC0tdXpiZWNoa2Evd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJtYXJrdXAvaW5kZXguaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQn9C+0YDRhtC40Y8g0YPRgdC/0L7QutCw0LjQstCw0Y7RidC10LPQviDQo9C30LHQtdC60LjRgdGC0LDQvdCwINC/0LXRgNC10LQg0L7RgtC70ZHRgtC+0LwuXCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQmtC+0L3QutGD0YDRgSDQvdCwINC90LDQt9Cy0LDQvdC40LUg0LHRg9GA0LPQtdGA0L3QvtC5INCa0L7RhNC10LzQsNC90LjQuFwiLFxuICAgIHBhdGg6IFwiMjAxNi0wNC0tbWFzaGEtbmlnZ29sLS1idXJnZXItbmFtZS93d3cvXCIsXG4gICAgcGFnZXM6IFtcInBhZ2VzL2J1cmdlci1uYW1lLWxhbmRpbmcuaHRtbFwiLCBcInBhZ2VzL2J1cmdlci1uYW1lLWNvbXBvbmVudHMuaHRtbFwiLCAsIFwicGFnZXMvYnVyZ2VyLW5hbWUtbmFtZXMuaHRtbFwiLCBcInBhZ2VzL2J1cmdlci1uYW1lLXRleHQuaHRtbFwiLCBcInBhZ2VzL2J1cmdlci1zaGFyZS5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCJcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwi0JHRgNC+0YHQutC+IEhvbWUgQ291dHVyZVwiLFxuICAgIHBhdGg6IFwiMjAxMi14eC0tZGltYS1rb21pc3Nhcm92LS1icm9za28vd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJicm9za28taW5kZXguaHRtbFwiLFwiYnJvc2tvLWNhdGFsb2cuaHRtbFwiLFwiYnJvc2tvLWNhdGVnb3J5Lmh0bWxcIixcImJyb3Nrby1wcm9kdWN0Lmh0bWxcIixcImJyb3Nrby10ZXh0Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0J/QvtC90YLQvtCy0YvQvCDRiNGC0YPQutCw0Lwg4oCUINC/0L7QvdGC0L7QstGL0Lkg0LTQuNC30LDQudC9LiAj0JrRgNGD0YLQsNGP0KDQtdC30LjQvdCwXCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL2Jyb3Nrby1ob21lLnJ1XCJcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwi0JrQvtGE0LXQvNCw0L3QuNGPXCIsXG4gICAgcGF0aDogXCIyMDE0LTA1LS1tYXNoYS1uaWdnb2wtLWNvZmZlZW1hbmlhL3d3dy9cIixcbiAgICBwYWdlczogW1wiY29mZmVtYW5pYS1pbmRleC5odG1sXCIsXCJjb2ZmZWVtYW5pYS1lbWFpbC0xLmh0bWxcIixcImNvZmZlbWFuaWEtNDA0Lmh0bWxcIixcImNvZmZlbWFuaWEtYWJvdXQuaHRtbFwiLFwiY29mZmVtYW5pYS1hZGRyZXNzLmh0bWxcIixcImNvZmZlbWFuaWEtYXBwLmh0bWxcIixcImNvZmZlbWFuaWEtYmFyaXN0YS5odG1sXCIsXCJjb2ZmZW1hbmlhLWNvb3BlcmF0aW9uLmh0bWxcIixcImNvZmZlbWFuaWEtZGVsaXZlcnkuaHRtbFwiLFwiY29mZmVtYW5pYS1mZWVkYmFjay5odG1sXCIsXCJjb2ZmZW1hbmlhLWluZGV4LW5vdGlmaWNhdGlvbi5odG1sXCIsXCJjb2ZmZW1hbmlhLWluZGV4LXdpdGgtcGFub3JhbWEuaHRtbFwiLFwiY29mZmVtYW5pYS1qb2IuaHRtbFwiLFwiY29mZmVtYW5pYS1qb2ItYXBwbHkuaHRtbFwiLFwiY29mZmVtYW5pYS1raWRzLmh0bWxcIixcImNvZmZlbWFuaWEtbWVudS5odG1sXCIsXCJjb2ZmZW1hbmlhLW1lbnUyLmh0bWxcIixcImNvZmZlbWFuaWEtbWVudTMuaHRtbFwiLFwiY29mZmVtYW5pYS1uZXdzLmh0bWxcIixcImNvZmZlbWFuaWEtbmV3cy1wb3N0Lmh0bWxcIixcImNvZmZlbWFuaWEtcHJlc3MuaHRtbFwiLFwiY29mZmVtYW5pYS10ZWFtLmh0bWxcIixcImNvZmZlbWFuaWEtemF2c2VnZGF0YWkuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQotC40L/QsCDQv9GA0L7RgdGC0L7QuSwg0L3QviDRgdC70L7QttC90YvQuS4gI9CQ0LTQsNC/0YLQuNCy0L3QvtGB0YLRjCwgI9Ci0YPRgtGD0LvQtdGH0L3QvtGB0YLRjFwiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL2NvZmZlZW1hbmlhLnJ1XCJcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwiUmVlYm9rINCf0LDRgNC60LhcIixcbiAgICBwYXRoOiBcIjIwMTYtMDItLXJ1ZHktLXJlZWJva2lucGFya3Mvd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJodG1sL21haW4uaHRtbFwiLCBcImh0bWwvYWJvdXQuaHRtbFwiLCBcImh0bWwvZXZlbnRzLmh0bWxcIiwgXCJodG1sL3BlcnNvbmFsLXJlc3VsdHMuaHRtbFwiLCBcImh0bWwvcmVzdWx0cy5odG1sXCIsIFwiaHRtbC9zY2hlZHVsZS5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCi0YDQtdC90LjRgNC+0LLQutC4INC4INC00YDRg9Cz0LjQtSDRgdC+0LHRi9GC0LjRjyDQsiDQv9Cw0YDQutCw0YUuXCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIixcbiAgICBhbGl2ZTogXCJodHRwOi8vd3d3LnJlZWJva2lucGFya3MuY29tXCJcbiAgfSxcblxuICAvLyB7XG4gIC8vICAgdGl0bGU6IFwi0JrQvtGC0L4t0LjQvdGC0LXRgNCw0LrRgtC40LIgQWhtYWQgVGVhXCIsXG4gIC8vICAgcGF0aDogXCIyMDEzLXh4LS1tYXNoYS1uaWdnb2wtLWFobWFkLWNhdGFuaW1hdGlvbi93d3cvXCIsXG4gIC8vICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0J3QtdGB0YPRgdCy0LXRgtC90LDRjyDQv9C+0LzQvtGA0L7Rh9C10L3QvdC+0YHRgtGMLiDQndCw0LLRgNC+0LTQtSDQuNCz0YDRiyDigJQg0L3Rg9C20L3QviDQstGB0ZEgPHE+0LLQutC70Y7Rh9C40YLRjDwvcT4g0Lgg0YLQvtCz0LTQsCDQsdGD0LTQtdGCINCx0L7QvdGD0YEuINCd0LAg0Y3RgtC+0Lwg0L/RgNC+0LXQutGC0LUg0YHRgtCw0LvQviDQv9C+0L3Rj9GC0L3QviDRh9GC0L4g0LDQvdC40LzQsNGC0L7RgCDigJQg0Y3RgtC+INC+0YLQtNC10LvRjNC90LDRjyDQv9GA0L7RhNC10YHRgdC40Y8uICkpKSDQmCDRh9GC0L4gaHRtbDUg0YDQtdCw0LvRjNC90L4g0LfQsNC80LXQvdGP0LXRgiBmbGFzaC4gI9Ch0LDQvNGL0LnQodC70L7QttC90YvQuSwgI0Fkb2JlRWRnZUFuaW1hdGlvblwiLFxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxuICAvLyAgIGFsaXZlOiBcImh0dHA6Ly9haG1hZHRlYS5ydS90b3VyL1wiXG4gIC8vIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIkRJTUdcIixcbiAgICBwYXRoOiBcIjIwMTMtMDktLWFwb2xsby0tZGlzbmV5LWRlcGFydG1lbnRzL3d3dy9cIixcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQktC10LrRgtC+0YDQvdCw0Y8sINC40L3RgtC10YDQsNC60YLQuNCy0L3QsNGPLCDQsNC90LjQvNCw0YbQuNC+0L3QvdCw0Y8g0YHRhdC10LzQsCDQvtGC0LTQtdC70LXQvdC40LkgRGlzbmV5INCyINCg0L7RgdGB0LjQuC4gI9Cf0L7QvNC+0YDQvtGH0LrQsCwgI1NWRywgI0QzanNcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZToge1xuICAgICAgZW46IFwiU2NvYmxpbW9yYSAoU2t5cmltIEFsY2hlbXkpXCIsXG4gICAgICBydTogXCJTY29ibGltb3JhXCJcbiAgICB9LFxuICAgIHBhdGg6IFwiMjAxNy0xMi0tdml0YWx5LWt1bGVzaGluLS10aXRhbW90YS93d3cvXCIsXG4gICAgcGFnZXM6IFtcImh0dHA6Ly9tci13b29kbWFuLnJ1L3Njb2JsaW1vcmFcIl0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHJ1OiBcItCQ0LvRhdC40LzQuNGH0LXRgdC60LjQuSDQv9C+0LzQvtGJ0L3QuNC6INC00LvRjyBTa3lyaW0uINCYINGC0LXQsdC1IGZ1cy1yby1kYWgsINCU0L7QstCw0LrQuNC9LiAjVnVlanNcIixcbiAgICAgIGVuOiBcIk1lZXQgU2t5cmltIEFsY2hlbXkgSGVscGVyLiBTb21ldGhpbmcgdmVyeSBjb21wbGljYXRlZCwgZXZlbiBJIGRpZCBub3QgZnVsbHkgdW5kZXJzdGFuZCBpdC4gI1Z1ZWpzXCJcbiAgICB9LFxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL21yLXdvb2RtYW4ucnUvc2NvYmxpbW9yYVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcItCh0LXRgtGMINC80LDQs9Cw0LfQuNC90L7QsiDQlNC40LrRgdC4XCIsXG4gICAgcGF0aDogXCIyMDE2LTAzLS1jaHVwcmlrLS1kaWtzaS93d3cvXCIsXG4gICAgcGFnZXM6IFtcInBhZ2VzL2RpeHktbWFpbi5odG1sXCIsIFwicGFnZXMvZGl4eS1saXN0Lmh0bWxcIiwgXCJwYWdlcy9kaXh5LXJlY2lwZS5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCc0L7QtNC90L4g0L3QviDQvdC1INCy0LfRj9C70LhcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCJMb3ZlIEVhdFwiLFxuICAgIHBhdGg6IFwiMjAxNi0wNC0tY2h1cHJpay0tbG92ZWVhdC93d3cvXCIsXG4gICAgcGFnZXM6IFtcInBhZ2VzL2xvdmVlYXQtbWFpbi5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1ibG9nLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LWNvbGxlY3Rpb24uaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtY29sbGVjdGlvbnMuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtY29tcG9uZW50cy5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1lZGl0LXByb2ZpbGUuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtZm9sbG93ZXJzLWZvbGxvd2luZy1tb2RhbC5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1teS1wcm9maWxlLWNvbGxlY3Rpb24uaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtbXktcHJvZmlsZS1jb2xsZWN0aW9ucy5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1teS1wcm9maWxlLXBvc3RzLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LW15LXJlY2lwZS5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1ub3RpZmljYXRpb25zLW1lc3NhZ2VzLW1vZGFsLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LW90aGVyLXByb2ZpbGUtcG9zdHMuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtcGVvcGxlLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LXBvc3QuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtcmVjaXBlLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LXJlY2lwZXMtd2l0aC1maWx0ZXItYW5vdGhlci1sYXlvdXQuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtcmVjaXBlcy13aXRoLWZpbHRlci5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1zZWFyY2guaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtdGFicy1tb2RhbC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCV0YnRkSDRh9GC0L4t0YLQviDQvNC+0LTQvdC+0LUg0L/RgNC+INC10LTRgy4g0JTQvtGE0LjQs9C40YnQsCDRiNCw0LHQu9C+0L3QvtCyLiDQnNC+0Y8g0YPRgtC40LvQuNGC0LAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2FudGl2aXRsYS9tci10ZXN0d29vZFxcXCI+0LLRkdGA0YHRgtC60Lgt0YfQtdGA0LXQty3RgtC10YHRgtC40YDQvtCy0LDQvdC40LU8L2E+INC/0YDQvtGB0YLQviDRgdC/0LDRgdC10L3QuNC1XCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIG1vYmlsZVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIk5lcTRcIixcbiAgICBwYXRoOiBcIjIwMTQtMDktLW1hc2hhLW5pZ2dvbC0tbmVxNC93d3cvXCIsXG4gICAgcGFnZXM6IFtcInBhbm9yYW1hLW5lcTQtaW5kZXguaHRtbFwiLCBcInBhbm9yYW1hLW5lcTQtYWJvdXQuaHRtbFwiLCBcInBhbm9yYW1hLW5lcTQtY29udGFjdC5odG1sXCIsIFwicGFub3JhbWEtbmVxNC1qb2IuaHRtbFwiLCBcInBhbm9yYW1hLW5lcTQtcGFrLmh0bWxcIiwgXCJwYW5vcmFtYS1uZXE0LXBhbm9yYW1hLmh0bWxcIiwgXCJwYW5vcmFtYS1uZXE0LXByZXNzLmh0bWxcIiwgXCJwYW5vcmFtYS1uZXE0LXByb2plY3RzLmh0bWxcIiwgXCJwYW5vcmFtYS1uZXE0LXlhbmRleC1wYW5vcmFtYXMuaHRtbFwiLCBcImRpZ2l0YWwtbmVxNC1pbmRleC5odG1sXCJdLFxuICAgIGRlc2NyaXB0aW9uOiBcItCb0Y7QsdC40LzRi9C5INC60LvQuNC10L3Rgiwg0LrQvtGA0L/QvtGA0LDRhtC40Y8g0Lgg0L/RgNC+0YHRgtC+INC60YDQsNGB0LDQstC40YbQsC4g0JrQu9Cw0YHRgdC40LrQsCBIVE1ML0NTUy9KYXZhU2NyaXB0XCIsXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIixcbiAgICBhbGl2ZTogXCJodHRwOi8vbmVxNC5ydVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIlNvdW5kIEJ1cmVhdVwiLFxuICAgIHBhdGg6IFwiMjAxNC0wOC0tbWFzaGEtbmlnZ29sLS1zb3VuZGJ1cmVhdS93d3cvXCIsXG4gICAgcGFnZXM6IFtcInNvdW5kYnVyZWF1LWluZGV4Lmh0bWxcIixcInNvdW5kYnVyZWF1LWFib3V0Lmh0bWxcIixcInNvdW5kYnVyZWF1LWJ1c2luZXNzLmh0bWxcIixcInNvdW5kYnVyZWF1LWhvbWUuaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQp9GC0L4t0YLQviDQv9GA0L4g0LfQstGD0LouINCa0YDRg9GC0LDRjyDQv9GA0L7QtNGD0LzQsNC90L3QvtGB0YLRjCDQtNC40LfQsNC50L3QsC4gI9CQ0LYt0LHQu9C10YHRgtC40YJcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0XCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL3NvdW5kYnVyZWF1LnJ1XCJcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwiTXIuIFdvb2RtYW4gdjQuMVwiLFxuICAgIHBhdGg6IFwiMjAxOC0wMi0tdml0YWx5LWt1bGVzaGluLS1tci13b29kbWFuL3d3dy9cIixcbiAgICBwYWdlczogW1wiaHR0cDovL21yLXdvb2RtYW4ucnVcIl0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHJ1OiBcItCe0YfQtdGA0LXQtNC90L7QuSDQsNC/0LTQtdC50YIuINCU0L7QsdCw0LLQu9C10L3RiyDRgNCw0LHQvtGC0Ysg0LfQsCDQv9C+0YHQu9C10LTQvdC40LUg0L/QsNGA0YMg0LvQtdGCLCDQstC/0LjRgdCw0L3RiyDQvdC+0LLRi9C1INGC0LXQutGB0YLRiy4gI2lmcmFtZS3RgNC10LrRg9GA0YHQuNGPLiAjVnVlanMsICNXZWJwYWNrLCAjZnJvbnRlbmQtcG9yblwiLFxuICAgICAgZW46IFwiQW5vdGhlciBtaW5vciB1cGRhdGUuIEFkZGVkIHNvbWUgd29ya3MgZm9yIGxhc3QgZmV3IHllYXJzLCB0ZXh0IGNoYW5nZXMuIEtlZXBpbmcgY29vbCByZWN1cnNpb24uICNWdWVqcywgI1dlYnBhY2ssICNCYWJlbC1wb3JuXCJcbiAgICB9LFxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL21yLXdvb2RtYW4ucnVcIlxuICB9LFxuXG4gIHtcbiAgICB0aXRsZTogXCLQmtC+0YTQtdC80LDQvdC40Y8gRk1cIixcbiAgICBwYXRoOiBcIjIwMTQtMDctLW1hc2hhLW5pZ2dvbC0tY29mZmVlbWFuaWEtZm0vd3d3L1wiLFxuICAgIHBhZ2VzOiBbXCJjb2ZmZW1hbmlhLWZtLWluZGV4Lmh0bWxcIl0sXG4gICAgZGVzY3JpcHRpb246IFwi0KDQsNC00LjQviEg0KXQvtGC0Ywg0YDQsNC3INGB0L4g0LfQstGD0LrQvtC8INC/0L7RgNCw0LHQvtGC0LDQuy4gI0HQtNCw0L/RgtC40LLQvdC+Y9GC0YwsICNBbmd1bGFyanNcIixcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0IG1vYmlsZVwiLFxuICAgIGFsaXZlOiBcImh0dHA6Ly9jb2ZmZWVtYW5pYS5mbVwiXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcItCS0LjRgNGC0YPQsNC70YzQvdCw0Y8g0JDRgNC60YLQuNC60LBcIixcbiAgICBwYXRoOiBcIjIwMTUtMDgtLW1hc2hhLW5pZ2dvbC0tYXJjdGljL3d3dy9cIixcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcbiAgICBkZXNjcmlwdGlvbjogXCLQn9GA0L7QtdC60YIgPGEgaHJlZj1cXFwiaHR0cDovL25lcTQucnVcXFwiPk5lcTQ8L2E+LiDQndCwINC60YDQsNGOINC30LXQvNC70Lgg0L7QttC40LTQsNC10LzQviDQsdC10LfQu9GO0LTQvdC+LCDQt9Cw0LHRi9GC0L4g0Lgg0LfQsNCx0YDQvtGI0LXQvdC+LiAgI0FuZ3VsYXJqc1wiLFxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCJcbiAgfSxcblxuXG4gIHtcbiAgICB0aXRsZTogXCJUaXRhbW90YVwiLFxuICAgIHBhdGg6IFwiMjAxNy0xMi0tdml0YWx5LWt1bGVzaGluLS10aXRhbW90YS93d3cvXCIsXG4gICAgcGFnZXM6IFtcImh0dHA6Ly90aXRhbW90YS5ydVwiLCBcImh0dHA6Ly9tci13b29kbWFuLnJ1L3RpdGFtb3RhXCJdLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICBydTogXCLQotCw0LnQvNGC0YDQtdC60LXRgC4g0JrRgtC+INC30L3QsNC10YIsINGC0L7RgiDRhNCw0L3QsNGCLiDQktGL0YHRgtGD0L/QuNC7INGE0YPQu9GB0YLQtdC6LdC/0YDQvtCz0YDQsNC80LzQuNGB0YLQvtC8ICjQt9Cw0L7QtNC90L4g0Lgg0LHQsNC30LAv0LHRjdC60LXQvdC0L9Cw0LLRgtC+0YDQuNC30LDRhtC40Y8pLiAjVnVlanMsICNEamFuZ28vUHl0aG9uL0RSRi9Qb3N0Z3JlU1FMLCAjRG9ja2VyXCIsXG4gICAgICBlbjogXCJGcmVlbGFuY2UgdGltZS10cmFja2VyLiBQcm91ZCBVWCBhbmQgaW5uZXIgYWxncm9yeXRobXMuIEJlaW5nIGZ1bGxzdGFjayBjb2Rlci4gI1Z1ZWpzLCAjRGphbmdvL1B5dGhvbi9EUkYsICNQb3N0Z3JlU1FMLCAjRG9ja2VyLCAjaXQtZXZlbi1oYXMtbGFuZGluZy1wYWdlXCJcbiAgICB9LFxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXG4gICAgYWxpdmU6IFwiaHR0cDovL3RpdGFtb3RhLnJ1XCJcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fib3V0L3dvcmtzLWRhdGEuanMiLCIndXNlIHN0cmljdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXIgLnRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLWFjdGl2ZScpO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyIC5tZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduYXZiYXItYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGNvbnN0IHNweU9uID0gW11cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsIGFbaHJlZl0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmIChocmVmLm1hdGNoKC9eI1xcdy8pKSB7XG4gICAgICBzcHlPbi5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGV2ZW50ID0+IHtcbiAgICB3aG9Jc0luVmlldyhzcHlPbik7XG4gICAgdHJhY2tXZWxjb21lU2NyZWVuKCk7XG4gIH0pO1xuXG4gIHRyYWNrV2VsY29tZVNjcmVlbigpO1xufSk7XG5cbmZ1bmN0aW9uIHdob0lzSW5WaWV3IChzcGllcykge1xuICBzcGllcy5mb3JFYWNoKHNweSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWY9XCInICsgc3B5ICsgJ1wiXScpO1xuICAgIGNvbnN0IG5hbWUgPSBzcHkuc3BsaXQoJyMnKVsxXTtcbiAgICBpZiAoaXNJblZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSkpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobmFtZSArICctc2VjdGlvbi12aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShuYW1lICsgJy1zZWN0aW9uLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBpZiAoaXNJblZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSksIDE1MCkpIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goYSA9PiBhLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMuZm9yRWFjaChhID0+IGEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNJblZpZXcgKGVsZW1lbnQsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgYm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIGJveC50b3AgLSBvZmZzZXQgPCAwICYmIGJveC50b3AgKyBib3guaGVpZ2h0IC0gb2Zmc2V0ID4gMDtcbn1cblxuZnVuY3Rpb24gdHJhY2tXZWxjb21lU2NyZWVuKCkge1xuICBpZiAoZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPCAwKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub3QtZmlyc3Qtc2NyZWVuJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3QtZmlyc3Qtc2NyZWVuJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fib3V0L25hdmJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=