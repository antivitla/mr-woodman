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
      devices: ['desktop', 'tablet', 'mobile']
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
  },

  computed: {
    work: function work() {
      var work = works.data[works.data.length - this.workId - 1];
      return work || works.data[works.data.length - 1];
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
}, {
  title: "Western Union",
  path: "2010-05--aries--western-union/www/",
  pages: ["wu-search-mainpage.html", "wu-search-citiespage.html", "wu-search-officepage.html"],
  description: "Поиск офисов",
  devices: "desktop"
}, {
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
},
// {
//   title: "Nia Style",
//   path: "2010-09--eugene-mesherjakov--nia-style/www/",
//   pages: ["nia-style-default.html","nia-style-art.html","nia-style-cat1.html","nia-style-cat2.html","nia-style-text.html"],
//   description: "Что-то несусветное (<q>ня-стайл</q>??), но такое я тоже верстаю",
//   devices: "desktop",
// },
// {
//   title: "SmartTrans",
//   path: "2010-10--al-niko--smarttrans/www/",
//   pages: ["smarttrans-about.html"],
//   description: "Это не транспорт, это языковые переводы",
//   devices: "desktop",
// },
// {
//   title: "UniCredit",
//   path: "2010-11--dasha-karandasheva--unicredit-widget/www/",
//   pages: ["index.html"],
//   description: "Виджет для Mac",
//   devices: "desktop",
// },
{
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
},
// {
//   title: "YogaDa",
//   path: "2011-05--seanat--yogada/www/",
//   pages: ["yogada-main.html","yogada-404.html","yogada-all-users.html","yogada-blog.html","yogada-blog-post.html","yogada-blogs.html","yogada-blogs-all-entries.html","yogada-blogs-newpost.html","yogada-comments.html","yogada-eastpractices.html","yogada-freedive.html","yogada-main-login.html","yogada-meroprijatija.html","yogada-news.html","yogada-photo.html","yogada-photos.html","yogada-photos-album.html","yogada-places.html","yogada-profile.html","yogada-search-results.html","yogada-text.html","yogada-text-print.html","yogada-texts.html","yogada-theme.html","yogada-themes.html","yogada-travel.html","yogada-videos.html","yogada-zaglushka.html"],
//   description: "Переусложненный сайт, ошеломляющее ведение проекта. #МильярдШаблонов, #МильярдПравок",
//   devices: "desktop",
// },
{
  title: "Лекция Ahmad Tea",
  path: "2011-07--samartsev--ahmad-tea-lecture/www/",
  pages: ["index.html"],
  description: "Про чай, естественно. Простенько, но четко.",
  devices: "desktop"
}, {
  title: "Bars",
  path: "2011-08--dima-komissarov--bars/www/",
  pages: ["bars-index.html", "bars-advantages.html", "bars-all-over-russia.html", "bars-configurator.html", "bars-contacts.html", "bars-dealer.html", "bars-dealers.html", "bars-door-cover-ebony.html", "bars-door-covers.html", "bars-door-cover-venge.html", "bars-door-design-classica.html", "bars-door-designs.html", "bars-information.html", "bars-photogallery.html"],
  description: "Навороченная вёрстка про двери. #КрутаяРезина, #МильярдШаблонов",
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
  title: "Открытка Ahmad Tea",
  path: "2012-12--aries--ahmad-new-year/www/",
  pages: ["index.html"],
  description: "На новый год. Снег детектед.",
  devices: "desktop"
}, {
  title: "Киндерино",
  path: "2012-xx--aries--kinderino/www/",
  pages: ["kinder-index.html"],
  description: "Страшная в своей сложности анимация. #AdobeEdge",
  devices: "desktop"
}, {
  title: "Трансдепот",
  path: "2012-xx--aries--transdepot/www/",
  pages: ["transdepot-index.html", "transdepot-tamozhennoe-oformlenie.html", "transdepot-dostavka-gruzov.html", "transdepot-cabinet.html", "transdepot-autsorsing-ved.html", "transdepot-about.html"],
  description: "Пролетарно, про машинки & помороченный калькулятор на главной.",
  devices: "desktop",
  alive: "http://transdepot.ru"
}, {
  title: "Броско Home Couture",
  path: "2012-xx--dima-komissarov--brosko/www/",
  pages: ["brosko-index.html", "brosko-catalog.html", "brosko-category.html", "brosko-product.html", "brosko-text.html"],
  description: "Понтовым штукам — понтовый дизайн. #КрутаяРезина",
  devices: "desktop",
  alive: "http://brosko-home.ru"
}, {
  title: "Capital View",
  path: "2012-xx--dima-komissarov--capital-view/www/",
  pages: ["capitalview-index.html", "capitalview-projectmembers.html", "capitalview-katok.html", "capitalview-about.html"],
  description: "А это полный улёт потому что 3d transformations. Мы как-бы внутри цилиндра, надо понаводить на меню. #3dУлёт, #Укачивает",
  devices: "desktop"
}, {
  title: "Любовь",
  path: "2012-xx--dima-komissarov--dk-love/www/",
  pages: ["index.html"],
  description: "Что-то явно милое, но непонятное... )))",
  devices: "desktop"
}, {
  title: "Американская мечта на Дмитровке",
  path: "2012-xx--dima-komissarov--dmitrovka/www/",
  pages: ["index.html"],
  description: "Гениальный css-мудрёж с глобусом. Это заглушка. #КрутаяРезина",
  devices: "desktop"
}, {
  title: "Национальный сквош-центр",
  path: "2012-xx--dima-komissarov--squash/www/",
  pages: ["index.html", "reserve.html", "profile.html", "player.html", "knowledge.html", "ratings.html", "players.html", "tournament.html", "tournaments.html", "club.html", "news.html", "rules.html", "clubs.html"],
  description: "Помороченный информационный сайт по турнирам",
  devices: "desktop"
}, {
  title: "Територрия удовольствия",
  path: "2012-xx--dima-komissarov--terra-pleasure/www/",
  pages: ["tu-index.html", "tu-wine.html", "tu-gift.html", "tu-wines.html", "tu-review.html", "tu-recommend-articles.html", "tu-recommend-article.html", "tu-index.html", "tu-gifts.html", "tu-contacts.html", "tu-about.html"],
  description: "Про бухло. Красиво, с бутылками.",
  devices: "desktop"
}, {
  title: "Коттеджи Весенино",
  path: "2012-xx--dima-komissarov--vesenino-1/www/",
  pages: ["index.html#no-animation", "raspolozhenie.html", "novosti.html", "kontakty.html", "kommunikacii-i-materialy.html", "infrastruktura-rajona.html", "infrastruktura-poselka.html", "genplan.html", "ekologija.html", "developer.html", "detjam.html"],
  description: "Прикольный дизайн. #Поморочка, #КрутаяРезина",
  devices: "desktop",
  alive: "http://www.vesenino.ru"
}, {
  title: "Коттеджи Весенино (переделка)",
  path: "2012-xx--dima-komissarov--vesenino-3/www/",
  pages: ["index.html", "vid-sverhu.html", "s-zabotoj-o-detjah.html", "readme-changes.html", "novosti.html", "kontakty.html", "kak-proehat.html", "chto-poblizosti.html", "article-novosti.html"],
  description: "Жуткое дело — третья версия сайта. #КрутаяРезина",
  devices: "desktop",
  alive: "http://www.vesenino.ru"
}, {
  title: "Tiktok Lunatik",
  path: "2012-xx--sambul--lunatik/www/",
  pages: ["lunatiktok-index.html", "lunatiktok-ipod.html", "lunatiktok-inner-tiktok.html", "lunatiktok-inner-lunatik.html", "lunatiktok-inner-lunatik-not-present.html", "lunatiktok-history.html", "lunatiktok-feedback.html", "lunatiktok-complects.html", "lunatiktok-buy-step-6.html", "lunatiktok-buy-step-5.html", "lunatiktok-buy-step-4.html", "lunatiktok-buy-step-3.html", "lunatiktok-buy-step-2c.html", "lunatiktok-faq.html", "lunatiktok-buy-step-2b.html", "lunatiktok-buy-step-2a.html", "lunatiktok-buy-step-1b.html", "lunatiktok-buy-step-1a.html", "lunatiktok-accessories.html", "lunatiktok-accessories-and-all.html", "lunatiktok-about.html"],
  description: "Интересный был дизайн... #ПриAppleнность",
  devices: "desktop"
}, {
  title: "Сайт Ahmad Tea",
  path: "2013-03--masha-niggol--ahmad/www/",
  pages: ["ahmad-index.html", "ahmad-404.html", "ahmad-chajnaja-karta.html", "ahmad-chajnyj-slovar.html", "ahmad-contemporary.html", "ahmad-faq.html", "ahmad-filtr-po-tegu.html", "ahmad-kontakty.html", "ahmad-novejshaja-istorija.html", "ahmad-rezultaty-poiska-po-articulu.html", "ahmad-rezultaty-poiska-po-materialam.html", "ahmad-tea.html", "ahmad-tea-times.html", "ahmad-tea-times-afisha.html", "ahmad-tea-times-article.html", "ahmad-tea-times-article-afisha.html", "ahmad-tea-times-article-gallery.html", "ahmad-tea-times-article-photos.html", "ahmad-tea-times-events.html", "ahmad-tea-times-gallery.html", "ahmad-tea-times-moscow-map.html", "ahmad-tea-times-polls.html", "ahmad-tea-times-recommends.html"],
  description: "Куча чаезапчастей, отдельный микросайт в виде газеты",
  devices: "desktop",
  alive: "http://ahmadtea.ru"
}, {
  title: "DIMG",
  path: "2013-09--apollo--disney-departments/www/",
  pages: ["index.html"],
  description: "Векторная, интерактивная, анимационная схема отделений Disney в России. #Поморочка, #SVG, #D3js",
  devices: "desktop"
}, {
  title: "ТАО Медиа",
  path: "2013-09--seanat--tao-media/www/",
  pages: ["index.html"],
  description: "Лендинг интернет-студии. #Приадаптивленный",
  devices: "desktop tablet mobile",
  alive: "http://tao-media.ru"
}, {
  title: "Виджет Choister.ru",
  path: "2013-10--apollo--choister-widget/www/",
  pages: ["index.html"],
  description: "Цены на недвижимость в реальном времени. #Angularjs",
  devices: "desktop",
  alive: "http://choister.ru/modules/infographics/"
},
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
{
  title: "Кото-интерактив Ahmad Tea",
  path: "2013-xx--masha-niggol--ahmad-catanimation/www/",
  pages: ["index.html"],
  description: "Несусветная помороченность. Навроде игры — нужно всё <q>включить</q> и тогда будет бонус. На этом проекте стало понятно что аниматор — это отдельная профессия. ))) И что html5 реально заменяет flash. #СамыйСложный, #AdobeEdgeAnimation",
  devices: "desktop",
  alive: "http://ahmadtea.ru/tour/"
}, {
  title: "Русский Ипотечный Банк",
  path: "2014-01--apollo--rib/www/",
  pages: ["index1-application.html", "index2-prichini.html", "index3-stavka.html", "index4-ipoteka.html", "index6-terms.html"],
  description: "Симпатичные страницы, чёткие запчасти. #Всегда-бы-так",
  devices: "desktop",
  alive: "https://www.russipoteka.ru"
}, {
  title: "Комфортная стоматология",
  path: "2014-02--slava-komarov--stomatology/www/",
  pages: ["index.html"],
  description: "Красивый лэндинг с простым параллаксом",
  devices: "desktop"
}, {
  title: "Oh My Mentor",
  path: "2014-03--ilya-nikolaev--ohmymentor/www/",
  pages: ["mentors.html", "startups.html", "landing.html"],
  description: "Суровый параллакс + адаптивность. #Поморочка, #Skrollr",
  devices: "desktop tablet mobile"
}, {
  title: "Footbox.me",
  path: "2014-03--natasha-kotlyarevskaya--footbox.me/www/",
  pages: ["index.html"],
  description: "Страница-заглушка. Все ресурсы в одном файле",
  devices: "desktop"
}, {
  title: "Федерация пожарных",
  path: "2014-04--aries--firefighters/www/",
  pages: ["activity.html", "documents.html", "leaders.html", "main.html", "map.html", "nagrady.html", "news.html", "news-post.html", "smi.html", "styles.html", "temp.html", "ustav.html"],
  description: "Простой сайт",
  devices: "desktop",
  alive: "http://interfiresport.com"
}, {
  title: "Inteduca",
  path: "2014-04--ksan--inteduca/www/",
  pages: ["index.html", "blog.html", "contacts.html"],
  description: "Красивые три страницы",
  devices: "desktop",
  alive: "http://www.inteduca.ru"
}, {
  title: "Sofits Me",
  path: "2014-04--natasha-kotlyarevskaya-sofitsme-lookbook/www/",
  pages: ["sfm-style.html", "sfm-lookbook.html"],
  description: "Онлайн-гардероб, лендинг.",
  devices: "desktop"
}, {
  title: "Prodmag",
  path: "2014-04--seanat--prodmag/www/",
  pages: ["category.html", "inner.html", "main.html", "tovar.html"],
  description: "Простой интернет-магазин",
  devices: "desktop"
},
// {
//   title: "Mr. Woodman v4.0",
//   path: "../",
//   pages: ["http://mr-woodman.ru/index.html"],
//   description: "Мой мегасайт. #Адаптивность, #Angularjs, #ПравилаРаботыСНеопределённостью",
//   devices: "desktop tablet mobile",
//   alive: "http://mr-woodman.ru"
// },
{
  title: "Кофемания",
  path: "2014-05--masha-niggol--coffeemania/www/",
  pages: ["coffemania-index.html", "coffeemania-email-1.html", "coffemania-404.html", "coffemania-about.html", "coffemania-address.html", "coffemania-app.html", "coffemania-barista.html", "coffemania-cooperation.html", "coffemania-delivery.html", "coffemania-feedback.html", "coffemania-index-notification.html", "coffemania-index-with-panorama.html", "coffemania-job.html", "coffemania-job-apply.html", "coffemania-kids.html", "coffemania-menu.html", "coffemania-menu2.html", "coffemania-menu3.html", "coffemania-news.html", "coffemania-news-post.html", "coffemania-press.html", "coffemania-team.html", "coffemania-zavsegdatai.html"],
  description: "Типа простой, но сложный. #Адаптивность, #Тутулечность",
  devices: "desktop tablet mobile",
  alive: "http://coffeemania.ru"
}, {
  title: "Кофемания FM",
  path: "2014-07--masha-niggol--coffeemania-fm/www/",
  pages: ["coffemania-fm-index.html"],
  description: "Радио! Хоть раз со звуком поработал. #Aдаптивноcть, #Angularjs",
  devices: "desktop tablet mobile",
  alive: "http://coffeemania.fm"
}, {
  title: "Allsweets",
  path: "2014-08--seanat--allsweets/www/",
  pages: ["allsweets-index.html", "allsweets-404.html", "allsweets-cabinet.html", "allsweets-cart.html", "allsweets-cart-checkout.html", "allsweets-category.html", "allsweets-contacts.html", "allsweets-css.html", "allsweets-gallery.html", "allsweets-item.html", "allsweets-manufacturers.html", "allsweets-news.html", "allsweets-news-post.html", "allsweets-portfolio.html"],
  description: "Конфетоиды",
  devices: "desktop",
  alive: "http://allsweets.ru/"
}, {
  title: "Sound Bureau",
  path: "2014-08--masha-niggol--soundbureau/www/",
  pages: ["soundbureau-index.html", "soundbureau-about.html", "soundbureau-business.html", "soundbureau-home.html"],
  description: "Что-то про звук. Крутая продуманность дизайна. #Аж-блестит",
  devices: "desktop tablet",
  alive: "http://soundbureau.ru"
}, {
  title: "Neq4",
  path: "2014-09--masha-niggol--neq4/www/",
  pages: ["panorama-neq4-index.html", "panorama-neq4-about.html", "panorama-neq4-contact.html", "panorama-neq4-job.html", "panorama-neq4-pak.html", "panorama-neq4-panorama.html", "panorama-neq4-press.html", "panorama-neq4-projects.html", "panorama-neq4-yandex-panoramas.html", "digital-neq4-index.html"],
  description: "Любимый клиент, корпорация и просто красавица. Классика HTML/CSS/JavaScript",
  devices: "desktop tablet mobile",
  alive: "http://neq4.ru"
}, {
  title: "Idealmaster",
  path: "2014-10--masha-niggol--idealmaster/www/",
  pages: ["idealmaster-index.html", "idealmaster-article-list.html", "idealmaster-article.html", "idealmaster-brand.html", "idealmaster-collection-special.html", "idealmaster-collection.html", "idealmaster-glossary.html", "idealmaster-model.html", "idealmaster-model2.html", "idealmaster-service.html"],
  description: "Крутые часики, много-и-долго-дизайн",
  devices: "desktop tablet mobile",
  alive: "http://watches.idealmaster.ru"
}, {
  title: "Клуб Ахмад",
  path: "2014-12--masha-niggol--club-ahmad/www/",
  pages: ["index.html#/contest/works"],
  description: "Клуб окончательных фанатов чая Ахмад. Angularjs для удобства нарезания на запчасти для программиста",
  devices: "desktop",
  alive: "http://club.ahmadtea.ru"
}, {
  title: "Волоколамское фермерское хозяйство",
  path: "2014-12--masha-niggol--volokolamskoe-moloko/www/",
  pages: ["index.html"],
  description: "Мета-модное молоко и козы, лендинг.",
  devices: "desktop tablet mobile"
},
// {
//   title: "Shedule Edit",
//   path: "2014-xx--apollo--schedit/www/",
//   pages: ["index.html"],
//   description: "Редактирование таблицы — запчасть для админки. #Angularjs",
//   devices: "desktop"
// },
{
  title: "ООО «Проминжиниринг»",
  path: "2015-01--slava-komarov--promengineering/www/",
  pages: ["index.html", "about.html", "haimer.html", "iew.html", "iruba.html", "news-post-01.html", "news-post-02.html", "post.html", "sab.html"],
  description: "Суровый сайт для суровой отрасли",
  devices: "desktop"
}, {
  title: "Ферма Mortenstuen",
  path: "2015-03--shashnia--mortenstuen/www/",
  pages: ["mortenstuen-index.html", "mortenstuen-blog.html", "mortenstuen-contact.html", "mortenstuen-gallery.html", "mortenstuen-health.html", "mortenstuen-history.html", "mortenstuen-post.html"],
  description: "Эпичность норвежского сельского хозяйства.",
  devices: "desktop tablet"
}, {
  title: "Виртуальная Арктика",
  path: "2015-08--masha-niggol--arctic/www/",
  pages: ["index.html"],
  description: "Проект <a href=\"http://neq4.ru\">Neq4</a>. На краю земли ожидаемо безлюдно, забыто и заброшено.  #Angularjs",
  devices: "desktop tablet mobile"
}, {
  title: "Авторские торты Coffeemania",
  path: "2015-08--masha-niggol--top-tort/www/",
  pages: ["main.html", "about.html", "cabinet.html", "contacts.html", "ready.html"],
  description: "Хочется съесть сайт.",
  devices: "desktop tablet mobile"
}, {
  title: "Easylife Menu",
  path: "2015-09--masha-niggol--easylifemenu/www/",
  pages: ["markup-index.html"],
  description: "Coffeemania за здоровый образ жизни.",
  devices: "desktop tablet mobile"
}, {
  title: "СДС-ФУДС",
  path: "2015-11--masha-niggol--sds-foods/www/",
  pages: ["index.html"],
  description: "Дистрибьютор чая Ahmad",
  devices: "desktop tablet mobile"
}, {
  title: "Ресторан «Узбечка» в аэропортах Москвы",
  path: "2015-12--masha-niggol--uzbechka/www/",
  pages: ["markup/index.html"],
  description: "Порция успокаивающего Узбекистана перед отлётом.",
  devices: "desktop tablet mobile"
}, {
  title: "Active Learning",
  path: "2016-01--mandrik--activelearning/www/",
  pages: ["demo/landing.html", "demo/index.html", "demo/latest-events.html", "demo/stats.html", "demo/today.html"],
  description: "Какое-то обучение...",
  devices: "desktop tablet"
}, {
  title: "Reebok Парки",
  path: "2016-02--rudy--reebokinparks/www/",
  pages: ["html/main.html", "html/about.html", "html/events.html", "html/personal-results.html", "html/results.html", "html/schedule.html"],
  description: "Тренировки и другие события в парках.",
  devices: "desktop tablet mobile",
  alive: "http://www.reebokinparks.com"
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
  title: "Конкурс на название бургерной Кофемании",
  path: "2016-04--masha-niggol--burger-name/www/",
  pages: ["pages/burger-name-landing.html", "pages/burger-name-components.html",, "pages/burger-name-names.html", "pages/burger-name-text.html", "pages/burger-share.html"],
  description: "",
  devices: "desktop tablet mobile"
}, {
  title: "Устройства 4Good",
  path: "2016-05--andreikis--4good/www/",
  pages: ["pages/4good-home.html", "pages/4good-blog.html", "pages/4good-catalog.html", "pages/4good-components.html", "pages/4good-contacts.html", "pages/4good-faq-search-results.html", "pages/4good-faq.html", "pages/4good-feedback.html", "pages/4good-notification.html", "pages/4good-post.html", "pages/4good-product.html", "pages/4good-service.html", "pages/4good-software-and-docs.html", "pages/4good-where-to-buy.html"],
  description: "ss",
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
  title: "Scoblimora",
  path: "2017-12--vitaly-kuleshin--titamota/www/",
  pages: ["http://mr-woodman.ru/scoblimora"],
  description: "Алхимический помощник для Skyrim, всем фус-ро-да в этом чате. #Vuejs",
  devices: "desktop tablet mobile",
  alive: "http://mr-woodman.ru/scoblimora"
}, {
  title: "Titamota",
  path: "2017-12--vitaly-kuleshin--titamota/www/",
  pages: ["http://titamota.ru", "http://mr-woodman.ru/titamota"],
  description: "",
  devices: "desktop tablet mobile",
  alive: "http://titamota.ru"
}, {
  title: "Mr. Woodman v4.1",
  path: "2018-02--vitaly-kuleshin--mr-woodman/www/",
  pages: ["http://mr-woodman.ru"],
  description: "dfsdfsdf",
  devices: "desktop tablet mobile",
  alive: "http://mr-woodman.ru"
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

  var spyOn = [];
  document.getElementById('navbar').querySelectorAll('ul.top a[href]').forEach(function (element) {
    spyOn.push(element.getAttribute('href'));
  });

  window.addEventListener('scroll', function (event) {
    whoIsInView(spyOn);
  });
});

function whoIsInView(spies) {
  spies.forEach(function (spy) {
    var items = document.querySelectorAll('a[href="' + spy + '"]');
    if (isInView(document.getElementById(spy.split('#')[1]), 150)) {
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

function isInView(element, offset) {
  var box = element.getBoundingClientRect();
  return box.top - offset < 0 && box.top + box.height - offset > 0;
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjk5NzQ0NzdlMWQ1MDg5MzZjNGEiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL2Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC1ncmlkLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvaW5kZXguY3NzIiwid2VicGFjazovLy8uL2Fib3V0L25hdmJhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvc2VjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvd2VsY29tZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvcHJvZmlsZS1wYXJ0LmNzcyIsIndlYnBhY2s6Ly8vLi9hYm91dC9wcm9kdWN0cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvcHJvamVjdHMuY3NzIiwid2VicGFjazovLy8uL2Fib3V0L2RpYWdvbmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9hYm91dC93b3Jrcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWJvdXQvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21yLWZvbnRmaXQvbXItZm9udGZpdC5qcyIsIndlYnBhY2s6Ly8vLi9hYm91dC93b3Jrcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9hYm91dC93b3Jrcy1kYXRhLmpzIiwid2VicGFjazovLy8uL2Fib3V0L25hdmJhci5qcyJdLCJuYW1lcyI6WyJnIiwiRnVuY3Rpb24iLCJldmFsIiwiZSIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb250Zml0IiwiY29sbGVjdGlvbiIsIml0ZW0iLCJ0ZXh0V2lkdGgiLCJ3aWR0aCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsInNhdmVOYXRpdmVTdHlsZSIsInJ1bGVzIiwic3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udGZpdHNhdmUiLCJpIiwibGVuZ3RoIiwicmVzdG9yZU5hdGl2ZVN0eWxlIiwid2hpdGVTcGFjZSIsImRpc3BsYXkiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJmbG9vciIsInBhcnNlSW50IiwiZG9jdW1lbnQiLCJib2R5Iiwicm91bmQiLCJ0cmFuc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwid29ya3MiLCJkYXRhIiwiYXBwIiwiZWwiLCJ3b3JrSWQiLCJwYWdlSWQiLCJkb21haW4iLCJkZXZpY2VzIiwiY3JlYXRlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb21wdXRlZCIsIndvcmsiLCJwYWdlIiwicGFnZXMiLCJoYXNOZXh0IiwiaGFzUHJldiIsIm1ldGhvZHMiLCJuZXh0V29yayIsInNldEl0ZW0iLCJwcmV2V29yayIsImhhc0RldmljZSIsImRldmljZSIsInNlYXJjaCIsImdldFBhdGgiLCJwYXRoIiwiZ2V0QWxpdmUiLCJhbGl2ZSIsInNwbGl0IiwiaXNBY3RpdmVQYWdlIiwiaW5kZXhPZiIsInNldFBhZ2UiLCJ0IiwiVnVlIiwibiIsInIiLCJvIiwiTm4iLCJjYWxsIiwiYSIsInBhcnNlRmxvYXQiLCJTdHJpbmciLCJpc0Zpbml0ZSIsInMiLCJKU09OIiwic3RyaW5naWZ5IiwiYyIsImlzTmFOIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsInRvTG93ZXJDYXNlIiwibCIsInNwbGljZSIsImYiLCJNbiIsInAiLCJkIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbGVuZ3RoIiwidiIsIkFycmF5IiwiaCIsIm0iLCJ5IiwiaXNBcnJheSIsImV2ZXJ5Iiwia2V5cyIsIl8iLCJiIiwiJCIsImNoYXJDb2RlQXQiLCJDIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsInciLCJ0ZXN0IiwidG9TdHJpbmciLCJ4IiwibXIiLCJrIiwiY29tcG9uZW50T3B0aW9ucyIsInRhZyIsImNoaWxkcmVuIiwidGV4dCIsImVsbSIsImNvbnRleHQiLCJhc3luY0ZhY3RvcnkiLCJucyIsImlzU3RhdGljIiwia2V5IiwiaXNDb21tZW50IiwiZm5Db250ZXh0IiwiZm5PcHRpb25zIiwiZm5TY29wZUlkIiwiaXNDbG9uZWQiLCJBIiwiTyIsIl9fcHJvdG9fXyIsIlMiLCJUIiwiX19vYl9fIiwid3IiLCJDciIsInNob3VsZENvbnZlcnQiLCJ1ciIsImlzRXh0ZW5zaWJsZSIsIl9pc1Z1ZSIsInZtQ291bnQiLCJFIiwidnIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXQiLCJzZXQiLCJ0YXJnZXQiLCJkZXBlbmQiLCJkZXAiLCJJIiwibm90aWZ5IiwiaiIsIm1heCIsInByb3RvdHlwZSIsIk4iLCJMIiwiTSIsIkQiLCJjb25jYXQiLCJQIiwiRiIsInhyIiwiT3IiLCJvcHRpb25zIiwicHJvcHMiLCJQbiIsInR5cGUiLCJpbmplY3QiLCJmcm9tIiwiZGlyZWN0aXZlcyIsImJpbmQiLCJ1cGRhdGUiLCJleHRlbmRzIiwibWl4aW5zIiwiUiIsIkZuIiwiSCIsIlUiLCJCb29sZWFuIiwiSG4iLCJkZWZhdWx0IiwiJG9wdGlvbnMiLCJwcm9wc0RhdGEiLCJfcHJvcHMiLCJCIiwibWF0Y2giLCJWIiwiJHBhcmVudCIsImVycm9yQ2FwdHVyZWQiLCJ6IiwiSm4iLCJlcnJvckhhbmRsZXIiLCJLIiwiR24iLCJabiIsImNvbnNvbGUiLCJlcnJvciIsIkoiLCJUciIsIlNyIiwic2xpY2UiLCJxIiwicHVzaCIsIkVyIiwiQXIiLCJrciIsIlByb21pc2UiLCJXIiwiRyIsIk1yIiwiY2xlYXIiLCJpc0Zyb3plbiIsImlkIiwiaGFzIiwiYWRkIiwiWiIsImZucyIsIlgiLCJEciIsIm5hbWUiLCJvbmNlIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJwYXJhbXMiLCJZIiwiaG9vayIsIm1lcmdlZCIsIlEiLCJ0dCIsImV0Iiwic2hpZnQiLCJfaXNWTGlzdCIsIm50IiwiX19lc01vZHVsZSIsImZyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJleHRlbmQiLCJydCIsIml0Iiwib3QiLCJMciIsIiRvbmNlIiwiJG9uIiwiYXQiLCIkb2ZmIiwic3QiLCJjdCIsImF0dHJzIiwic2xvdCIsInV0IiwibHQiLCJmbiIsImZ0IiwiX2luYWN0aXZlIiwicHQiLCJfZGlyZWN0SW5hY3RpdmUiLCIkY2hpbGRyZW4iLCJ2dCIsImR0IiwiX2hhc0hvb2tFdmVudCIsIiRlbWl0IiwiaHQiLCJVciIsIkZyIiwic29ydCIsIlZyIiwiSHIiLCJydW4iLCJSciIsIkJyIiwidm0iLCJfd2F0Y2hlciIsIl9pc01vdW50ZWQiLCJsciIsImRldnRvb2xzIiwiZW1pdCIsIm10IiwiSnIiLCJ5dCIsIl93YXRjaGVycyIsIl9wcm9wS2V5cyIsIl9kYXRhIiwiX2NvbXB1dGVkV2F0Y2hlcnMiLCJLciIsInFyIiwiZ3QiLCJ3YXRjaCIsImlyIiwiYnQiLCJfdCIsImNhY2hlIiwiZGlydHkiLCJldmFsdWF0ZSIsImhhbmRsZXIiLCIkd2F0Y2giLCIkdCIsIlJlZmxlY3QiLCJvd25LZXlzIiwiZmlsdGVyIiwiX3Byb3ZpZGVkIiwiQ3QiLCJ3dCIsIiRzY29wZWRTbG90cyIsIiRzbG90cyIsIl9yZW5kZXJlZCIsIiRjcmVhdGVFbGVtZW50IiwieHQiLCJVbiIsImt0Iiwia2V5Q29kZXMiLCJBdCIsIkxuIiwibXVzdFVzZVByb3AiLCJkb21Qcm9wcyIsIm9uIiwiT3QiLCJfc3RhdGljVHJlZXMiLCJzdGF0aWNSZW5kZXJGbnMiLCJfcmVuZGVyUHJveHkiLCJUdCIsIlN0IiwiRXQiLCJpc09uY2UiLCJqdCIsIk50IiwiX28iLCJfbiIsIl9zIiwiX2wiLCJfcSIsIl9pIiwiX20iLCJfZiIsIl9rIiwiX2IiLCJfdiIsIl9lIiwiZ3IiLCJfdSIsIl9nIiwiSXQiLCJwYXJlbnQiLCJsaXN0ZW5lcnMiLCJqbiIsImluamVjdGlvbnMiLCJzbG90cyIsIl9jb21waWxlZCIsInNjb3BlZFNsb3RzIiwiX3Njb3BlSWQiLCJfYyIsIkR0IiwiTHQiLCJNdCIsIl9iYXNlIiwiY2lkIiwiZXJyb3JDb21wIiwicmVzb2x2ZWQiLCJsb2FkaW5nIiwibG9hZGluZ0NvbXAiLCJjb250ZXh0cyIsIiRmb3JjZVVwZGF0ZSIsInRoZW4iLCJjb21wb25lbnQiLCJkZWxheSIsInRpbWVvdXQiLCJhc3luY01ldGEiLCJGdCIsIm1vZGVsIiwicHJvcCIsImV2ZW50IiwiY2FsbGJhY2siLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwibmF0aXZlT24iLCJhYnN0cmFjdCIsIkdyIiwiV3IiLCJDdG9yIiwiWHIiLCJpcyIsIlpyIiwiJHZub2RlIiwiZ2V0VGFnTmFtZXNwYWNlIiwiaXNSZXNlcnZlZFRhZyIsInBhcnNlUGxhdGZvcm1UYWdOYW1lIiwiUHQiLCJzdXBlciIsInN1cGVyT3B0aW9ucyIsImV4dGVuZE9wdGlvbnMiLCJzZWFsZWRPcHRpb25zIiwiY29tcG9uZW50cyIsIlJ0IiwiX2luaXQiLCJIdCIsIl9DdG9yIiwiY29uc3RydWN0b3IiLCJtaXhpbiIsInVzZSIsInpuIiwiZm9yRWFjaCIsIkJ0IiwiVXQiLCJWdCIsIl92bm9kZSIsInp0IiwiY29tcG9uZW50SW5zdGFuY2UiLCIkZGVzdHJveSIsIkt0IiwiSnQiLCJxdCIsIld0Iiwic3RhdGljQ2xhc3MiLCJjbGFzcyIsIkd0IiwiYmkiLCJadCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiWHQiLCJyZWYiLCIkcmVmcyIsInJlZkluRm9yIiwiWXQiLCJ3aSIsImlzQXN5bmNQbGFjZWhvbGRlciIsIlF0IiwidGUiLCJBaSIsImVlIiwib2xkVmFsdWUiLCJuZSIsImRlZiIsImNvbXBvbmVudFVwZGF0ZWQiLCJpbnNlcnRlZCIsIm1vZGlmaWVycyIsIlRpIiwicmF3TmFtZSIsImpvaW4iLCJyZSIsImluaGVyaXRBdHRycyIsImllIiwiUW4iLCJlciIsImhpIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJ2aSIsIm1pIiwicGkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkaSIsInlpIiwidGFnTmFtZSIsInNldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZU5TIiwidHIiLCJfX2llcGgiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2UiLCJfdHJhbnNpdGlvbkNsYXNzZXMiLCJfcHJldkNsYXNzIiwiYWUiLCJ0cmltIiwiY2hhckF0IiwiSWkiLCJzZSIsImNlIiwibWFwIiwidWUiLCJwbGFpbiIsImxlIiwiZmUiLCJhdHRyc01hcCIsImF0dHJzTGlzdCIsInBlIiwiYXJnIiwiZGUiLCJyaWdodCIsIm1pZGRsZSIsIm5hdGl2ZSIsIm5hdGl2ZUV2ZW50cyIsImV2ZW50cyIsInVuc2hpZnQiLCJ2ZSIsImhlIiwibWUiLCJudW1iZXIiLCJ5ZSIsImV4cHJlc3Npb24iLCJlaSIsImxhc3RJbmRleE9mIiwiaWkiLCJleHAiLCJuaSIsIm9pIiwiYWkiLCJiZSIsInJpIiwiZ2UiLCIkZSIsIkNlIiwiX3dpdGhUYXNrIiwic2kiLCJ3ZSIsIm9yIiwieGUiLCJMaSIsIk1pIiwiY2hhbmdlIiwia2UiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJfdmFsdWUiLCJjb21wb3NpbmciLCJhY3RpdmVFbGVtZW50IiwiX3ZNb2RpZmllcnMiLCJsYXp5IiwiQWUiLCJPZSIsInN0YXRpY1N0eWxlIiwiRmkiLCJTZSIsIm5vcm1hbGl6ZWRTdHlsZSIsIkJpIiwiVGUiLCJjbGFzc0xpc3QiLCJnZXRBdHRyaWJ1dGUiLCJFZSIsInJlbW92ZSIsInJlcGxhY2UiLCJqZSIsImNzcyIsIktpIiwiTmUiLCJRaSIsIkllIiwiTGUiLCJNZSIsIkRlIiwicHJvcENvdW50IiwicWkiLCJaaSIsIllpIiwiR2kiLCJQZSIsIlhpIiwiV2kiLCJoYXNUcmFuc2Zvcm0iLCJ0byIsIkZlIiwiTnVtYmVyIiwiUmUiLCJfbGVhdmVDYiIsImNhbmNlbGxlZCIsIl9lbnRlckNiIiwibm9kZVR5cGUiLCJlbnRlckNsYXNzIiwiZW50ZXJUb0NsYXNzIiwiZW50ZXJBY3RpdmVDbGFzcyIsImFwcGVhckNsYXNzIiwiYXBwZWFyVG9DbGFzcyIsImFwcGVhckFjdGl2ZUNsYXNzIiwiYmVmb3JlRW50ZXIiLCJlbnRlciIsImFmdGVyRW50ZXIiLCJlbnRlckNhbmNlbGxlZCIsImJlZm9yZUFwcGVhciIsImFwcGVhciIsImFmdGVyQXBwZWFyIiwiYXBwZWFyQ2FuY2VsbGVkIiwiZHVyYXRpb24iLCJQciIsImlzUm9vdEluc2VydCIsIlVlIiwic2hvdyIsInBhcmVudE5vZGUiLCJfcGVuZGluZyIsIkJlIiwiSGUiLCJsZWF2ZUNsYXNzIiwibGVhdmVUb0NsYXNzIiwibGVhdmVBY3RpdmVDbGFzcyIsImJlZm9yZUxlYXZlIiwibGVhdmUiLCJhZnRlckxlYXZlIiwibGVhdmVDYW5jZWxsZWQiLCJkZWxheUxlYXZlIiwiVmUiLCJ6ZSIsIktlIiwibXVsdGlwbGUiLCJxZSIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsIkplIiwiV2UiLCJHZSIsIlplIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiWGUiLCJZZSIsIlFlIiwiX3BhcmVudExpc3RlbmVycyIsInRuIiwiZW4iLCJfbW92ZUNiIiwibm4iLCJuZXdQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJybiIsInBvcyIsImxlZnQiLCJ0b3AiLCJtb3ZlZCIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInpvIiwiVm8iLCJVbyIsImFuIiwic24iLCJwcmUiLCJMbyIsIklvIiwid2FybiIsImlzUHJlVGFnIiwiQm4iLCJNbyIsIkRvIiwiam8iLCJtb2R1bGVzIiwiTm8iLCJFbyIsImRlbGltaXRlcnMiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJzdWJzdHJpbmciLCJsb3dlckNhc2VkVGFnIiwiZW5kIiwic3RhcnQiLCJleHBlY3RIVE1MIiwiaXNVbmFyeVRhZyIsImNhbkJlTGVmdE9wZW5UYWciLCJIbyIsIkJvIiwiUmVnRXhwIiwiSm8iLCJjaGFycyIsIkFvIiwic2hvdWxkS2VlcENvbW1lbnQiLCJjb21tZW50IiwiT28iLCJrbyIsInhvIiwiQ28iLCJ3byIsInVuYXJ5U2xhc2giLCJnbyIsIlNvIiwic2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmIiwic2hvdWxkRGVjb2RlTmV3bGluZXMiLCJUbyIsImNvbW1lbnRzIiwibmEiLCJyYSIsImZvcmJpZGRlbiIsInByb2Nlc3NlZCIsInVuIiwiaWYiLCJsbiIsImJsb2NrIiwiZWxzZSIsImVsc2VpZiIsImNuIiwicG9wIiwic2xvdFNjb3BlIiwic2xvdFRhcmdldCIsInBsYWNlaG9sZGVyIiwiZWEiLCJmbyIsInVvIiwibGFzdEluZGV4IiwiZXhlYyIsImluZGV4IiwidG9rZW5zIiwiZm9yIiwic2xvdE5hbWUiLCJpbmxpbmVUZW1wbGF0ZSIsIldvIiwiaGFzQmluZGluZ3MiLCJ0YSIsIlFvIiwiY2FtZWwiLCJzeW5jIiwicW8iLCJZbyIsIkdvIiwiWG8iLCJabyIsImFsaWFzIiwiaXRlcmF0b3IxIiwiaXRlcmF0b3IyIiwiaWZDb25kaXRpb25zIiwicG4iLCJzdGF0aWMiLCJJbiIsIkZvIiwiUG8iLCJkbiIsInN0YXRpY0luRm9yIiwic3RhdGljUm9vdCIsInZuIiwiaG4iLCJjYSIsInNhIiwiZmEiLCJ1YSIsImxhIiwibW4iLCJ5biIsImRhIiwiZ24iLCJzdGF0aWNQcm9jZXNzZWQiLCJvbmNlUHJvY2Vzc2VkIiwiYm4iLCJmb3JQcm9jZXNzZWQiLCJpZlByb2Nlc3NlZCIsIiRuIiwia24iLCJ3biIsInRyYW5zZm9ybXMiLCJvbmNlSWQiLCJDbiIsImRhdGFHZW5GbnMiLCJPbiIsInhuIiwid3JhcERhdGEiLCJ3cmFwTGlzdGVuZXJzIiwiQW4iLCJzb21lIiwibWF5YmVDb21wb25lbnQiLCJTbiIsIlRuIiwiZXJyIiwiY29kZSIsIkVuIiwiUm8iLCJpbm5lckhUTUwiLCJmcmVlemUiLCJoYXNPd25Qcm9wZXJ0eSIsIkRuIiwidG9VcHBlckNhc2UiLCJSbiIsIlZuIiwiS24iLCJvcHRpb25NZXJnZVN0cmF0ZWdpZXMiLCJzaWxlbnQiLCJwcm9kdWN0aW9uVGlwIiwicGVyZm9ybWFuY2UiLCJ3YXJuSGFuZGxlciIsImlnbm9yZWRFbGVtZW50cyIsImlzUmVzZXJ2ZWRBdHRyIiwiaXNVbmtub3duRWxlbWVudCIsIl9saWZlY3ljbGVIb29rcyIsInFuIiwiV24iLCJXWEVudmlyb25tZW50IiwicGxhdGZvcm0iLCJYbiIsIlluIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibnIiLCJyciIsImFyIiwic3IiLCJjciIsImdsb2JhbCIsInByb2Nlc3MiLCJlbnYiLCJWVUVfRU5WIiwiX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsIlNldCIsInByIiwiZHIiLCJzdWJzIiwiYWRkU3ViIiwicmVtb3ZlU3ViIiwiYWRkRGVwIiwiaHIiLCJyYXciLCJ5ciIsImNoaWxkIiwiZGVmaW5lUHJvcGVydGllcyIsIl9yIiwiYnIiLCJvYnNlcnZlQXJyYXkiLCIkciIsImdldE93blByb3BlcnR5TmFtZXMiLCJ3YWxrIiwicHJvdmlkZSIsInNldEltbWVkaWF0ZSIsIk1lc3NhZ2VDaGFubmVsIiwianIiLCJOciIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsIklyIiwicmVzb2x2ZSIsInpyIiwiZGVlcCIsInVzZXIiLCJjYiIsImFjdGl2ZSIsImRlcHMiLCJuZXdEZXBzIiwiZGVwSWRzIiwibmV3RGVwSWRzIiwiZ2V0dGVyIiwiY2xlYW51cERlcHMiLCJ0ZWFyZG93biIsIl9pc0JlaW5nRGVzdHJveWVkIiwiaW5pdCIsIl9pc0Rlc3Ryb3llZCIsIl9pc0NvbXBvbmVudCIsIl9wYXJlbnRWbm9kZSIsIl9wYXJlbnRFbG0iLCJfcmVmRWxtIiwiJG1vdW50Iiwia2VlcEFsaXZlIiwicHJlcGF0Y2giLCJfcmVuZGVyQ2hpbGRyZW4iLCIkYXR0cnMiLCIkbGlzdGVuZXJzIiwiaW5zZXJ0IiwiZGVzdHJveSIsIllyIiwiX3VpZCIsIl9jb21wb25lbnRUYWciLCJfc2VsZiIsIiRyb290IiwiX2V2ZW50cyIsIiRzZXQiLCIkZGVsZXRlIiwiaW1tZWRpYXRlIiwiX3VwZGF0ZSIsIiRlbCIsIl9fcGF0Y2hfXyIsIl9fdnVlX18iLCIkbmV4dFRpY2siLCJfcmVuZGVyIiwiUXIiLCJ0aSIsIktlZXBBbGl2ZSIsImluY2x1ZGUiLCJleGNsdWRlIiwiZGVzdHJveWVkIiwidXRpbCIsIm1lcmdlT3B0aW9ucyIsImRlZmluZVJlYWN0aXZlIiwiZGVsZXRlIiwibmV4dFRpY2siLCJfaW5zdGFsbGVkUGx1Z2lucyIsImluc3RhbGwiLCJzc3JDb250ZXh0IiwidmVyc2lvbiIsImNpIiwidWkiLCJsaSIsImZpIiwiZ2kiLCJzdmciLCJtYXRoIiwiJGkiLCJDaSIsInhpIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJuZXh0U2libGluZyIsInNldFRleHRDb250ZW50IiwidGV4dENvbnRlbnQiLCJraSIsIk9pIiwiU2kiLCJFaSIsImppIiwiTmkiLCJEaSIsIlBpIiwiUmkiLCJIaSIsInNldFByb3BlcnR5IiwiVmkiLCJVaSIsInppIiwiSmkiLCJvbnRyYW5zaXRpb25lbmQiLCJvbndlYmtpdHRyYW5zaXRpb25lbmQiLCJvbmFuaW1hdGlvbmVuZCIsIm9ud2Via2l0YW5pbWF0aW9uZW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZW8iLCJhY3RpdmF0ZSIsInBlbmRpbmdJbnNlcnQiLCJwb3N0cGF0Y2giLCJoYXNDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsIm5vZGVPcHMiLCJoYXNBdHRyaWJ1dGUiLCJ2bW9kZWwiLCJubyIsIl92T3B0aW9ucyIsInJvIiwiX192T3JpZ2luYWxEaXNwbGF5IiwidW5iaW5kIiwiaW8iLCJtb2RlIiwib28iLCJfbGVhdmluZyIsImFvIiwibW92ZUNsYXNzIiwic28iLCJUcmFuc2l0aW9uIiwiVHJhbnNpdGlvbkdyb3VwIiwicHJldkNoaWxkcmVuIiwia2VwdCIsInJlbW92ZWQiLCJiZWZvcmVVcGRhdGUiLCJ1cGRhdGVkIiwiaGFzTW92ZSIsIl9yZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJwcm9wZXJ0eU5hbWUiLCJfaGFzTW92ZSIsImNsb25lTm9kZSIsImNvbmZpZyIsIkhUTUxVbmtub3duRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiY28iLCJsbyIsInBvIiwic3RhdGljS2V5cyIsInRyYW5zZm9ybU5vZGUiLCJjbGFzc0JpbmRpbmciLCJnZW5EYXRhIiwidm8iLCJzdHlsZUJpbmRpbmciLCJobyIsIm1vIiwieW8iLCJibyIsIiRvIiwiS28iLCJpYSIsInByZVRyYW5zZm9ybU5vZGUiLCJvYSIsImh0bWwiLCJyZWR1Y2UiLCJhYSIsImVzYyIsInRhYiIsInNwYWNlIiwidXAiLCJkb3duIiwic3RvcCIsInByZXZlbnQiLCJzZWxmIiwiY3RybCIsImFsdCIsIm1ldGEiLCJwYSIsImNsb2FrIiwidmEiLCJlcnJvcnMiLCJ0aXBzIiwiY29tcGlsZSIsImNvbXBpbGVUb0Z1bmN0aW9ucyIsIm9wdGltaXplIiwiYXN0IiwiaGEiLCJtYSIsInlhIiwiZ2EiLCJkb2N1bWVudEVsZW1lbnQiLCJ0ZW1wbGF0ZSIsIm91dGVySFRNTCIsIlRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsImNsZWFyRm4iLCJfaWQiLCJfY2xlYXJGbiIsInVucmVmIiwiZW5yb2xsIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsInJlcXVpcmUiLCJjbGVhckltbWVkaWF0ZSIsInVuZGVmaW5lZCIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwicmVnaXN0ZXJJbW1lZGlhdGUiLCJhcmdzIiwidGFzayIsImhhbmRsZSIsInJ1bklmUHJlc2VudCIsImluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uIiwiY2FuVXNlUG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsInJhbmRvbSIsIm9uR2xvYmFsTWVzc2FnZSIsInNvdXJjZSIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsInNjcmlwdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsImdldFByb3RvdHlwZU9mIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJkcmFpblF1ZXVlIiwibGVuIiwiSXRlbSIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb25zIiwibm9vcCIsImFkZExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJkZXNjcmlwdGlvbiIsInRvZ2dsZSIsInNweU9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJlbGVtZW50Iiwid2hvSXNJblZpZXciLCJzcGllcyIsIml0ZW1zIiwic3B5IiwiaXNJblZpZXciLCJvZmZzZXQiLCJib3giLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBLElBQUlBLENBQUo7O0FBRUE7QUFDQUEsSUFBSyxZQUFXO0FBQ2YsUUFBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxLQUFJQSxLQUFLQyxTQUFTLGFBQVQsR0FBTCxJQUFrQyxDQUFDLEdBQUVDLElBQUgsRUFBUyxNQUFULENBQXRDO0FBQ0EsQ0FIRCxDQUdFLE9BQU1DLENBQU4sRUFBUztBQUNWO0FBQ0EsS0FBRyxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXJCLEVBQ0NKLElBQUlJLE1BQUo7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJOLENBQWpCLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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TUFBTVAsUUFBUXJkLHFCQUFSLEVBQVo7QUFDQSxTQUFPNGQsSUFBSXhkLEdBQUosR0FBVXVkLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0JDLElBQUl4ZCxHQUFKLEdBQVV3ZCxJQUFJQyxNQUFkLEdBQXVCRixNQUF2QixHQUFnQyxDQUEvRDtBQUNELEMiLCJmaWxlIjoiYWJvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmOTk3NDQ3N2UxZDUwODkzNmM0YSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIENTU1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAtZ3JpZC5taW4uY3NzJztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCAnLi9uYXZiYXIuY3NzJztcclxuaW1wb3J0ICcuL3NlY3Rpb24uY3NzJztcclxuaW1wb3J0ICcuL3dlbGNvbWUuY3NzJztcclxuaW1wb3J0ICcuL3Byb2ZpbGUtcGFydC5jc3MnO1xyXG5pbXBvcnQgJy4vcHJvZHVjdHMuY3NzJztcclxuaW1wb3J0ICcuL3Byb2plY3RzLmNzcyc7XHJcbmltcG9ydCAnLi9kaWFnb25hbC5jc3MnO1xyXG5pbXBvcnQgJy4vd29ya3MuY3NzJztcclxuaW1wb3J0ICcuL2Zvb3Rlci5jc3MnO1xyXG5cclxuLy8gSmF2YXNjcmlwdFxyXG5pbXBvcnQgJ21yLWZvbnRmaXQnO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC5qcyc7XHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9zY3JvbGxzcHkuanMnO1xyXG5pbXBvcnQgJy4vd29ya3MuanMnO1xyXG5pbXBvcnQgJy4vbmF2YmFyLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWJvdXQvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLWdyaWQubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWJvdXQvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hYm91dC9uYXZiYXIuY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hYm91dC9zZWN0aW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWJvdXQvd2VsY29tZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fib3V0L3Byb2ZpbGUtcGFydC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fib3V0L3Byb2R1Y3RzLmNzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWJvdXQvcHJvamVjdHMuY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hYm91dC9kaWFnb25hbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hYm91dC93b3Jrcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hYm91dC9mb290ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuKiAgINCf0L7QtNCz0L7QvdGP0LXQvCDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwINGH0YLQvtCxINGC0LXQutGB0YIg0LLQvNC10YHRgtC40LvRgdGPINCyINC+0LTQvdGDINGB0YLRgNC+0YfQutGDXG4qICAg0L3QsCDQstGB0Y4g0YjQuNGA0LjQvdGDINGA0L7QtNC40YLQtdC70YzRgdC60L7Qs9C+INC60L7QvdGC0LXQudC90LXRgNCwXG4qICAgbXItd29vZG1hbi5ydS9qcy9mb250Zml0XG4qXG4qICAg0KTRg9C90LrRhtC40Y4g0LzQvtC20L3QviDQvdCw0YLRgNCw0LLQuNGC0Ywg0L3QsCDQvdCw0LHQvtGAINGN0LvQtdC80LXQvdGC0L7QsiAoSFRNTENvbGxlY3Rpb24pINGB0LDQvNC+0YHRgtC+0Y/RgtC10LvRjNC90L4gKNC/0L7RgdC70LUg0LDRj9C60YHQsC/RgNC10YHQsNC50LfQsD8pXG4qICAg0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L7QvdCwINGB0LDQvNCwINC90LDRgtGA0LDQstC40YLRgdGPINC90LAg0Y3Qu9C10LzQtdC90YLRiyDRgSDQsNGC0YDQuNCx0YPRgtCw0LzQuCBkYXRhLWZvbnRmaXRcbiogICDQp9C40YHRgtGL0LkgSmF2YXNjcmlwdFxuKi9cblxuLy8g0KPQvNC10LXQvCDQtdGB0YLRjCBIVE1MQ29sbGVjdGlvbiDRjdC70LXQvNC10L3RgtC+0LJcblxud2luZG93LmZvbnRmaXQgPSBmdW5jdGlvbihjb2xsZWN0aW9uKSB7XG5cbiAgICB2YXIgaXRlbSwgdGV4dFdpZHRoLCB3aWR0aCwgbGluZUhlaWdodCwgZm9udFNpemUsXG4gICAgICAgIHNhdmVOYXRpdmVTdHlsZSA9IGZ1bmN0aW9uKGl0ZW0sIHJ1bGVzKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5mb250Zml0c2F2ZSA9IGl0ZW0uZm9udGZpdHNhdmUgfHwge307XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtLmZvbnRmaXRzYXZlW3J1bGVzW2ldXSA9IHN0eWxlW3J1bGVzW2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzdG9yZU5hdGl2ZVN0eWxlID0gZnVuY3Rpb24oaXRlbSwgcnVsZXMpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGVbcnVsZXNbaV1dID0gaXRlbS5mb250Zml0c2F2ZVtydWxlc1tpXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAvLyDQn9GA0L7RhdC+0LTQuNC80YHRjyDQv9C+INC60LDQttC00L7QvNGDINCyINC60L7Qu9C70LXQutGG0LjQuFxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSBjb2xsZWN0aW9uW2ldO1xuXG4gICAgICAgIC8vINGB0L7RhdGA0LDQvdGP0LXQvCDRgtC10LrRg9GJ0LjQtSDRgdGC0LjQu9C4INGH0YLQvtCxINCy0L7RgdGB0YLQsNC90L7QstC40YLRjCDQv9C+0LfQttC1XG4gICAgICAgIHNhdmVOYXRpdmVTdHlsZShpdGVtLCBbXCJkaXNwbGF5XCJdKTtcblxuICAgICAgICAvLyDQt9Cw0LTQsNGR0Lwg0LjQvdC70LDQudC90L7QstC+0LUg0L7RgtC+0LHRgNCw0LbQtdC90LjQtSDQsiDQvtC00L3RgyDRgdGC0YDQvtGH0LrRgyDRh9GC0L7QsSDRg9C30L3QsNGC0Ywg0LTQu9C40L3RgyDRgtC10LrRgdGC0LBcbiAgICAgICAgaXRlbS5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcbiAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgdGV4dFdpZHRoID0gaXRlbS5jbGllbnRXaWR0aDtcblxuICAgICAgICAvLyDRgtC10L/QtdGA0Ywg0LTQtdC70LDQtdC80YHRjyDQsdC70L7QutC+0LLRi9C8LCDRh9GC0L7QsSDQv9C+0L3Rj9GC0Ywg0L3QsCDQutCw0LrRg9GOINGI0LjRgNC40L3RgyDQvNGLINGA0LDRgdGB0YfQuNGC0YvQstCw0LXQvFxuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHdpZHRoID0gaXRlbS5jbGllbnRXaWR0aDtcblxuICAgICAgICAvLyDQktC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LjRgdGF0L7QtNC90YvQtSDRgdGC0LjQu9C4XG4gICAgICAgIHJlc3RvcmVOYXRpdmVTdHlsZShpdGVtLCBbXCJkaXNwbGF5XCJdKTtcblxuICAgICAgICAvLyDQstGL0YfQuNGB0LvRj9C10Lwg0Lgg0YHRgtCw0LLQuNC8INC90L7QstGL0LkgZm9udC1zaXplXG4gICAgICAgIGZvbnRTaXplID0gTWF0aC5mbG9vcigod2lkdGggLyB0ZXh0V2lkdGgpICogcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShpdGVtKS5mb250U2l6ZSkpO1xuICAgICAgICBpdGVtLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemUgKyBcInB4XCI7XG5cblxuICAgICAgICAvLyAtINCwINGC0LDQutC20LUg0L/QvtC00YXQvtC00Y/RidC40LkgbGluZS1oZWlnaHQgKNC60YDQsNGC0L3Ri9C5INC+0YHQvdC+0LLQvdC+0LzRgyDQvdCwINGB0LDQudGC0LUpXG4gICAgICAgIGxpbmVIZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmxpbmVIZWlnaHQpO1xuICAgICAgICBpdGVtLnN0eWxlLmxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKGZvbnRTaXplIC8gbGluZUhlaWdodCkgKiBsaW5lSGVpZ2h0ICsgXCJweFwiO1xuXG4gICAgICAgIC8vINCf0LvRjtGBINCw0L3QuNC80LDRiNC10YfQutGDXG4gICAgICAgIGl0ZW0uc3R5bGUudHJhbnNpdGlvbiA9IFwiZm9udC1zaXplIDAuMjVzXCI7XG4gICAgfVxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvbnRmaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWZvbnRmaXRdXCIpKTtcbiAgICB9LCAxMDApO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9udGZpdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZm9udGZpdF1cIikpO1xuICAgIH0sIDEwMCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgZm9udGZpdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZm9udGZpdF1cIikpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL21yLWZvbnRmaXQvbXItZm9udGZpdC5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlL2Rpc3QvdnVlLm1pbi5qcyc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4vd29ya3MtZGF0YS5qcyc7XHJcblxyXG52YXIgd29ya3MgPSB7XHJcbiAgZGF0YTogZGF0YVxyXG59O1xyXG5cclxud29ya3MuYXBwID0gbmV3IFZ1ZSh7XHJcbiAgZWw6ICcjd29ya3MnLFxyXG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdvcmtJZDogMCxcclxuICAgICAgcGFnZUlkOiAwLFxyXG4gICAgICBkb21haW46ICdodHRwOi8vd29ya3MubXItd29vZG1hbi5ydS8nLFxyXG4gICAgICBkZXZpY2VzOiBbJ2Rlc2t0b3AnLCAndGFibGV0JywgJ21vYmlsZSddXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCAoKSB7XHJcbiAgICB2YXIgd29ya0lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21yV29vZG1hbkFib3V0V29ya0lkJyk7XHJcbiAgICBpZiAod29ya0lkKSB7XHJcbiAgICAgIHRoaXMud29ya0lkID0gcGFyc2VJbnQod29ya0lkLCAxMCk7XHJcbiAgICAgIGlmICh0aGlzLndvcmtJZCA8IDApIHtcclxuICAgICAgICB0aGlzLndvcmtJZCA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy53b3JrSWQgPiB3b3Jrcy5kYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLndvcmtJZCA9IHdvcmtzLmRhdGEubGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHdvcms6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHdvcmsgPSB3b3Jrcy5kYXRhW3dvcmtzLmRhdGEubGVuZ3RoIC0gdGhpcy53b3JrSWQgLSAxXTtcclxuICAgICAgcmV0dXJuIHdvcmsgfHwgd29ya3MuZGF0YVt3b3Jrcy5kYXRhLmxlbmd0aCAtIDFdO1xyXG4gICAgfSxcclxuICAgIHBhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud29yay5wYWdlc1t0aGlzLnBhZ2VJZF07XHJcbiAgICB9LFxyXG4gICAgaGFzTmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy53b3JrSWQgPiAwO1xyXG4gICAgfSxcclxuICAgIGhhc1ByZXY6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud29ya0lkIDwgd29ya3MuZGF0YS5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgbmV4dFdvcms6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuaGFzTmV4dCkge1xyXG4gICAgICAgIHRoaXMud29ya0lkID0gdGhpcy53b3JrSWQgLSAxO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtcldvb2RtYW5BYm91dFdvcmtJZCcsIHRoaXMud29ya0lkKVxyXG4gICAgICAgIHRoaXMucGFnZUlkID0gMDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXZXb3JrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc1ByZXYpIHtcclxuICAgICAgICB0aGlzLndvcmtJZCA9IHRoaXMud29ya0lkICsgMTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXJXb29kbWFuQWJvdXRXb3JrSWQnLCB0aGlzLndvcmtJZClcclxuICAgICAgICB0aGlzLnBhZ2VJZCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYXNEZXZpY2U6IGZ1bmN0aW9uICh3b3JrLCBkZXZpY2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud29yay5kZXZpY2VzLnNlYXJjaChkZXZpY2UpID4gLTE7XHJcbiAgICB9LFxyXG4gICAgZ2V0UGF0aDogZnVuY3Rpb24gKHdvcmspIHtcclxuICAgICAgaWYodGhpcy5wYWdlLnNlYXJjaChcImh0dHA6Ly9cIikgPiAtMSB8fCB0aGlzLnBhZ2Uuc2VhcmNoKFwiaHR0cHM6Ly9cIikgPiAtMSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tYWluICsgdGhpcy53b3JrLnBhdGggKyB0aGlzLnBhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRBbGl2ZTogZnVuY3Rpb24gKHdvcmspIHtcclxuICAgICAgaWYoIXRoaXMud29yay5hbGl2ZSkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmsuYWxpdmUuc3BsaXQoXCIjXCIpWzBdLnNwbGl0KFwiP1wiKVswXS5zcGxpdChcIjovL1wiKVsxXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGlzQWN0aXZlUGFnZTogZnVuY3Rpb24gKHBhZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud29yay5wYWdlcy5pbmRleE9mKHBhZ2UpID09PSB0aGlzLnBhZ2VJZDtcclxuICAgIH0sXHJcbiAgICBzZXRQYWdlOiBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICB0aGlzLnBhZ2VJZCA9IHRoaXMud29yay5wYWdlcy5pbmRleE9mKHBhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fib3V0L3dvcmtzLmpzIiwiLyohXG4gKiBWdWUuanMgdjIuNS4xM1xuICogKGMpIDIwMTQtMjAxNyBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTp0LlZ1ZT1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3JldHVybiB2b2lkIDA9PT10fHxudWxsPT09dH1mdW5jdGlvbiBlKHQpe3JldHVybiB2b2lkIDAhPT10JiZudWxsIT09dH1mdW5jdGlvbiBuKHQpe3JldHVybiEwPT09dH1mdW5jdGlvbiByKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fHxcIm51bWJlclwiPT10eXBlb2YgdHx8XCJzeW1ib2xcIj09dHlwZW9mIHR8fFwiYm9vbGVhblwiPT10eXBlb2YgdH1mdW5jdGlvbiBpKHQpe3JldHVybiBudWxsIT09dCYmXCJvYmplY3RcIj09dHlwZW9mIHR9ZnVuY3Rpb24gbyh0KXtyZXR1cm5cIltvYmplY3QgT2JqZWN0XVwiPT09Tm4uY2FsbCh0KX1mdW5jdGlvbiBhKHQpe3ZhciBlPXBhcnNlRmxvYXQoU3RyaW5nKHQpKTtyZXR1cm4gZT49MCYmTWF0aC5mbG9vcihlKT09PWUmJmlzRmluaXRlKHQpfWZ1bmN0aW9uIHModCl7cmV0dXJuIG51bGw9PXQ/XCJcIjpcIm9iamVjdFwiPT10eXBlb2YgdD9KU09OLnN0cmluZ2lmeSh0LG51bGwsMik6U3RyaW5nKHQpfWZ1bmN0aW9uIGModCl7dmFyIGU9cGFyc2VGbG9hdCh0KTtyZXR1cm4gaXNOYU4oZSk/dDplfWZ1bmN0aW9uIHUodCxlKXtmb3IodmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPXQuc3BsaXQoXCIsXCIpLGk9MDtpPHIubGVuZ3RoO2krKyluW3JbaV1dPSEwO3JldHVybiBlP2Z1bmN0aW9uKHQpe3JldHVybiBuW3QudG9Mb3dlckNhc2UoKV19OmZ1bmN0aW9uKHQpe3JldHVybiBuW3RdfX1mdW5jdGlvbiBsKHQsZSl7aWYodC5sZW5ndGgpe3ZhciBuPXQuaW5kZXhPZihlKTtpZihuPi0xKXJldHVybiB0LnNwbGljZShuLDEpfX1mdW5jdGlvbiBmKHQsZSl7cmV0dXJuIE1uLmNhbGwodCxlKX1mdW5jdGlvbiBwKHQpe3ZhciBlPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBlW25dfHwoZVtuXT10KG4pKX19ZnVuY3Rpb24gZCh0LGUpe2Z1bmN0aW9uIG4obil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gcj9yPjE/dC5hcHBseShlLGFyZ3VtZW50cyk6dC5jYWxsKGUsbik6dC5jYWxsKGUpfXJldHVybiBuLl9sZW5ndGg9dC5sZW5ndGgsbn1mdW5jdGlvbiB2KHQsZSl7ZT1lfHwwO2Zvcih2YXIgbj10Lmxlbmd0aC1lLHI9bmV3IEFycmF5KG4pO24tLTspcltuXT10W24rZV07cmV0dXJuIHJ9ZnVuY3Rpb24gaCh0LGUpe2Zvcih2YXIgbiBpbiBlKXRbbl09ZVtuXTtyZXR1cm4gdH1mdW5jdGlvbiBtKHQpe2Zvcih2YXIgZT17fSxuPTA7bjx0Lmxlbmd0aDtuKyspdFtuXSYmaChlLHRbbl0pO3JldHVybiBlfWZ1bmN0aW9uIHkodCxlLG4pe31mdW5jdGlvbiBnKHQsZSl7aWYodD09PWUpcmV0dXJuITA7dmFyIG49aSh0KSxyPWkoZSk7aWYoIW58fCFyKXJldHVybiFuJiYhciYmU3RyaW5nKHQpPT09U3RyaW5nKGUpO3RyeXt2YXIgbz1BcnJheS5pc0FycmF5KHQpLGE9QXJyYXkuaXNBcnJheShlKTtpZihvJiZhKXJldHVybiB0Lmxlbmd0aD09PWUubGVuZ3RoJiZ0LmV2ZXJ5KGZ1bmN0aW9uKHQsbil7cmV0dXJuIGcodCxlW25dKX0pO2lmKG98fGEpcmV0dXJuITE7dmFyIHM9T2JqZWN0LmtleXModCksYz1PYmplY3Qua2V5cyhlKTtyZXR1cm4gcy5sZW5ndGg9PT1jLmxlbmd0aCYmcy5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4gZyh0W25dLGVbbl0pfSl9Y2F0Y2godCl7cmV0dXJuITF9fWZ1bmN0aW9uIF8odCxlKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKylpZihnKHRbbl0sZSkpcmV0dXJuIG47cmV0dXJuLTF9ZnVuY3Rpb24gYih0KXt2YXIgZT0hMTtyZXR1cm4gZnVuY3Rpb24oKXtlfHwoZT0hMCx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9fWZ1bmN0aW9uICQodCl7dmFyIGU9KHQrXCJcIikuY2hhckNvZGVBdCgwKTtyZXR1cm4gMzY9PT1lfHw5NT09PWV9ZnVuY3Rpb24gQyh0LGUsbixyKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpuLGVudW1lcmFibGU6ISFyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfWZ1bmN0aW9uIHcodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmL25hdGl2ZSBjb2RlLy50ZXN0KHQudG9TdHJpbmcoKSl9ZnVuY3Rpb24geCh0KXtyZXR1cm4gbmV3IG1yKHZvaWQgMCx2b2lkIDAsdm9pZCAwLFN0cmluZyh0KSl9ZnVuY3Rpb24gayh0LGUpe3ZhciBuPXQuY29tcG9uZW50T3B0aW9ucyxyPW5ldyBtcih0LnRhZyx0LmRhdGEsdC5jaGlsZHJlbix0LnRleHQsdC5lbG0sdC5jb250ZXh0LG4sdC5hc3luY0ZhY3RvcnkpO3JldHVybiByLm5zPXQubnMsci5pc1N0YXRpYz10LmlzU3RhdGljLHIua2V5PXQua2V5LHIuaXNDb21tZW50PXQuaXNDb21tZW50LHIuZm5Db250ZXh0PXQuZm5Db250ZXh0LHIuZm5PcHRpb25zPXQuZm5PcHRpb25zLHIuZm5TY29wZUlkPXQuZm5TY29wZUlkLHIuaXNDbG9uZWQ9ITAsZSYmKHQuY2hpbGRyZW4mJihyLmNoaWxkcmVuPUEodC5jaGlsZHJlbiwhMCkpLG4mJm4uY2hpbGRyZW4mJihuLmNoaWxkcmVuPUEobi5jaGlsZHJlbiwhMCkpKSxyfWZ1bmN0aW9uIEEodCxlKXtmb3IodmFyIG49dC5sZW5ndGgscj1uZXcgQXJyYXkobiksaT0wO2k8bjtpKyspcltpXT1rKHRbaV0sZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gTyh0LGUsbil7dC5fX3Byb3RvX189ZX1mdW5jdGlvbiBTKHQsZSxuKXtmb3IodmFyIHI9MCxpPW4ubGVuZ3RoO3I8aTtyKyspe3ZhciBvPW5bcl07Qyh0LG8sZVtvXSl9fWZ1bmN0aW9uIFQodCxlKXtpZihpKHQpJiYhKHQgaW5zdGFuY2VvZiBtcikpe3ZhciBuO3JldHVybiBmKHQsXCJfX29iX19cIikmJnQuX19vYl9fIGluc3RhbmNlb2Ygd3I/bj10Ll9fb2JfXzpDci5zaG91bGRDb252ZXJ0JiYhdXIoKSYmKEFycmF5LmlzQXJyYXkodCl8fG8odCkpJiZPYmplY3QuaXNFeHRlbnNpYmxlKHQpJiYhdC5faXNWdWUmJihuPW5ldyB3cih0KSksZSYmbiYmbi52bUNvdW50Kyssbn19ZnVuY3Rpb24gRSh0LGUsbixyLGkpe3ZhciBvPW5ldyB2cixhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKTtpZighYXx8ITEhPT1hLmNvbmZpZ3VyYWJsZSl7dmFyIHM9YSYmYS5nZXQsYz1hJiZhLnNldCx1PSFpJiZUKG4pO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3ZhciBlPXM/cy5jYWxsKHQpOm47cmV0dXJuIHZyLnRhcmdldCYmKG8uZGVwZW5kKCksdSYmKHUuZGVwLmRlcGVuZCgpLEFycmF5LmlzQXJyYXkoZSkmJkkoZSkpKSxlfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHI9cz9zLmNhbGwodCk6bjtlPT09cnx8ZSE9ZSYmciE9cnx8KGM/Yy5jYWxsKHQsZSk6bj1lLHU9IWkmJlQoZSksby5ub3RpZnkoKSl9fSl9fWZ1bmN0aW9uIGoodCxlLG4pe2lmKEFycmF5LmlzQXJyYXkodCkmJmEoZSkpcmV0dXJuIHQubGVuZ3RoPU1hdGgubWF4KHQubGVuZ3RoLGUpLHQuc3BsaWNlKGUsMSxuKSxuO2lmKGUgaW4gdCYmIShlIGluIE9iamVjdC5wcm90b3R5cGUpKXJldHVybiB0W2VdPW4sbjt2YXIgcj10Ll9fb2JfXztyZXR1cm4gdC5faXNWdWV8fHImJnIudm1Db3VudD9uOnI/KEUoci52YWx1ZSxlLG4pLHIuZGVwLm5vdGlmeSgpLG4pOih0W2VdPW4sbil9ZnVuY3Rpb24gTih0LGUpe2lmKEFycmF5LmlzQXJyYXkodCkmJmEoZSkpdC5zcGxpY2UoZSwxKTtlbHNle3ZhciBuPXQuX19vYl9fO3QuX2lzVnVlfHxuJiZuLnZtQ291bnR8fGYodCxlKSYmKGRlbGV0ZSB0W2VdLG4mJm4uZGVwLm5vdGlmeSgpKX19ZnVuY3Rpb24gSSh0KXtmb3IodmFyIGU9dm9pZCAwLG49MCxyPXQubGVuZ3RoO248cjtuKyspKGU9dFtuXSkmJmUuX19vYl9fJiZlLl9fb2JfXy5kZXAuZGVwZW5kKCksQXJyYXkuaXNBcnJheShlKSYmSShlKX1mdW5jdGlvbiBMKHQsZSl7aWYoIWUpcmV0dXJuIHQ7Zm9yKHZhciBuLHIsaSxhPU9iamVjdC5rZXlzKGUpLHM9MDtzPGEubGVuZ3RoO3MrKylyPXRbbj1hW3NdXSxpPWVbbl0sZih0LG4pP28ocikmJm8oaSkmJkwocixpKTpqKHQsbixpKTtyZXR1cm4gdH1mdW5jdGlvbiBNKHQsZSxuKXtyZXR1cm4gbj9mdW5jdGlvbigpe3ZhciByPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS5jYWxsKG4sbik6ZSxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5jYWxsKG4sbik6dDtyZXR1cm4gcj9MKHIsaSk6aX06ZT90P2Z1bmN0aW9uKCl7cmV0dXJuIEwoXCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmNhbGwodGhpcyx0aGlzKTplLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5jYWxsKHRoaXMsdGhpcyk6dCl9OmU6dH1mdW5jdGlvbiBEKHQsZSl7cmV0dXJuIGU/dD90LmNvbmNhdChlKTpBcnJheS5pc0FycmF5KGUpP2U6W2VdOnR9ZnVuY3Rpb24gUCh0LGUsbixyKXt2YXIgaT1PYmplY3QuY3JlYXRlKHR8fG51bGwpO3JldHVybiBlP2goaSxlKTppfWZ1bmN0aW9uIEYodCxlLG4pe2Z1bmN0aW9uIHIocil7dmFyIGk9eHJbcl18fE9yO3Vbcl09aSh0W3JdLGVbcl0sbixyKX1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYoZT1lLm9wdGlvbnMpLGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5wcm9wcztpZihuKXt2YXIgcixpLGE9e307aWYoQXJyYXkuaXNBcnJheShuKSlmb3Iocj1uLmxlbmd0aDtyLS07KVwic3RyaW5nXCI9PXR5cGVvZihpPW5bcl0pJiYoYVtQbihpKV09e3R5cGU6bnVsbH0pO2Vsc2UgaWYobyhuKSlmb3IodmFyIHMgaW4gbilpPW5bc10sYVtQbihzKV09byhpKT9pOnt0eXBlOml9O3QucHJvcHM9YX19KGUpLGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5pbmplY3Q7aWYobil7dmFyIHI9dC5pbmplY3Q9e307aWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKylyW25baV1dPXtmcm9tOm5baV19O2Vsc2UgaWYobyhuKSlmb3IodmFyIGEgaW4gbil7dmFyIHM9blthXTtyW2FdPW8ocyk/aCh7ZnJvbTphfSxzKTp7ZnJvbTpzfX19fShlKSxmdW5jdGlvbih0KXt2YXIgZT10LmRpcmVjdGl2ZXM7aWYoZSlmb3IodmFyIG4gaW4gZSl7dmFyIHI9ZVtuXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYoZVtuXT17YmluZDpyLHVwZGF0ZTpyfSl9fShlKTt2YXIgaT1lLmV4dGVuZHM7aWYoaSYmKHQ9Rih0LGksbikpLGUubWl4aW5zKWZvcih2YXIgYT0wLHM9ZS5taXhpbnMubGVuZ3RoO2E8czthKyspdD1GKHQsZS5taXhpbnNbYV0sbik7dmFyIGMsdT17fTtmb3IoYyBpbiB0KXIoYyk7Zm9yKGMgaW4gZSlmKHQsYyl8fHIoYyk7cmV0dXJuIHV9ZnVuY3Rpb24gUih0LGUsbixyKXtpZihcInN0cmluZ1wiPT10eXBlb2Ygbil7dmFyIGk9dFtlXTtpZihmKGksbikpcmV0dXJuIGlbbl07dmFyIG89UG4obik7aWYoZihpLG8pKXJldHVybiBpW29dO3ZhciBhPUZuKG8pO2lmKGYoaSxhKSlyZXR1cm4gaVthXTtyZXR1cm4gaVtuXXx8aVtvXXx8aVthXX19ZnVuY3Rpb24gSCh0LGUsbixyKXt2YXIgaT1lW3RdLG89IWYobix0KSxhPW5bdF07aWYoVShCb29sZWFuLGkudHlwZSkmJihvJiYhZihpLFwiZGVmYXVsdFwiKT9hPSExOlUoU3RyaW5nLGkudHlwZSl8fFwiXCIhPT1hJiZhIT09SG4odCl8fChhPSEwKSksdm9pZCAwPT09YSl7YT1mdW5jdGlvbih0LGUsbil7aWYoIWYoZSxcImRlZmF1bHRcIikpcmV0dXJuO3ZhciByPWUuZGVmYXVsdDtpZih0JiZ0LiRvcHRpb25zLnByb3BzRGF0YSYmdm9pZCAwPT09dC4kb3B0aW9ucy5wcm9wc0RhdGFbbl0mJnZvaWQgMCE9PXQuX3Byb3BzW25dKXJldHVybiB0Ll9wcm9wc1tuXTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZcIkZ1bmN0aW9uXCIhPT1CKGUudHlwZSk/ci5jYWxsKHQpOnJ9KHIsaSx0KTt2YXIgcz1Dci5zaG91bGRDb252ZXJ0O0NyLnNob3VsZENvbnZlcnQ9ITAsVChhKSxDci5zaG91bGRDb252ZXJ0PXN9cmV0dXJuIGF9ZnVuY3Rpb24gQih0KXt2YXIgZT10JiZ0LnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7cmV0dXJuIGU/ZVsxXTpcIlwifWZ1bmN0aW9uIFUodCxlKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gQihlKT09PUIodCk7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKEIoZVtuXSk9PT1CKHQpKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIFYodCxlLG4pe2lmKGUpZm9yKHZhciByPWU7cj1yLiRwYXJlbnQ7KXt2YXIgaT1yLiRvcHRpb25zLmVycm9yQ2FwdHVyZWQ7aWYoaSlmb3IodmFyIG89MDtvPGkubGVuZ3RoO28rKyl0cnl7aWYoITE9PT1pW29dLmNhbGwocix0LGUsbikpcmV0dXJufWNhdGNoKHQpe3oodCxyLFwiZXJyb3JDYXB0dXJlZCBob29rXCIpfX16KHQsZSxuKX1mdW5jdGlvbiB6KHQsZSxuKXtpZihKbi5lcnJvckhhbmRsZXIpdHJ5e3JldHVybiBKbi5lcnJvckhhbmRsZXIuY2FsbChudWxsLHQsZSxuKX1jYXRjaCh0KXtLKHQsbnVsbCxcImNvbmZpZy5lcnJvckhhbmRsZXJcIil9Syh0LGUsbil9ZnVuY3Rpb24gSyh0LGUsbil7aWYoIUduJiYhWm58fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBjb25zb2xlKXRocm93IHQ7Y29uc29sZS5lcnJvcih0KX1mdW5jdGlvbiBKKCl7VHI9ITE7dmFyIHQ9U3Iuc2xpY2UoMCk7U3IubGVuZ3RoPTA7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspdFtlXSgpfWZ1bmN0aW9uIHEodCxlKXt2YXIgbjtpZihTci5wdXNoKGZ1bmN0aW9uKCl7aWYodCl0cnl7dC5jYWxsKGUpfWNhdGNoKHQpe1YodCxlLFwibmV4dFRpY2tcIil9ZWxzZSBuJiZuKGUpfSksVHJ8fChUcj0hMCxFcj9BcigpOmtyKCkpLCF0JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSlyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCl7bj10fSl9ZnVuY3Rpb24gVyh0KXtHKHQsTXIpLE1yLmNsZWFyKCl9ZnVuY3Rpb24gRyh0LGUpe3ZhciBuLHIsbz1BcnJheS5pc0FycmF5KHQpO2lmKChvfHxpKHQpKSYmIU9iamVjdC5pc0Zyb3plbih0KSl7aWYodC5fX29iX18pe3ZhciBhPXQuX19vYl9fLmRlcC5pZDtpZihlLmhhcyhhKSlyZXR1cm47ZS5hZGQoYSl9aWYobylmb3Iobj10Lmxlbmd0aDtuLS07KUcodFtuXSxlKTtlbHNlIGZvcihuPShyPU9iamVjdC5rZXlzKHQpKS5sZW5ndGg7bi0tOylHKHRbcltuXV0sZSl9fWZ1bmN0aW9uIFoodCl7ZnVuY3Rpb24gZSgpe3ZhciB0PWFyZ3VtZW50cyxuPWUuZm5zO2lmKCFBcnJheS5pc0FycmF5KG4pKXJldHVybiBuLmFwcGx5KG51bGwsYXJndW1lbnRzKTtmb3IodmFyIHI9bi5zbGljZSgpLGk9MDtpPHIubGVuZ3RoO2krKylyW2ldLmFwcGx5KG51bGwsdCl9cmV0dXJuIGUuZm5zPXQsZX1mdW5jdGlvbiBYKGUsbixyLGksbyl7dmFyIGEscyxjLHU7Zm9yKGEgaW4gZSlzPWVbYV0sYz1uW2FdLHU9RHIoYSksdChzKXx8KHQoYyk/KHQocy5mbnMpJiYocz1lW2FdPVoocykpLHIodS5uYW1lLHMsdS5vbmNlLHUuY2FwdHVyZSx1LnBhc3NpdmUsdS5wYXJhbXMpKTpzIT09YyYmKGMuZm5zPXMsZVthXT1jKSk7Zm9yKGEgaW4gbil0KGVbYV0pJiZpKCh1PURyKGEpKS5uYW1lLG5bYV0sdS5jYXB0dXJlKX1mdW5jdGlvbiBZKHIsaSxvKXtmdW5jdGlvbiBhKCl7by5hcHBseSh0aGlzLGFyZ3VtZW50cyksbChzLmZucyxhKX1yIGluc3RhbmNlb2YgbXImJihyPXIuZGF0YS5ob29rfHwoci5kYXRhLmhvb2s9e30pKTt2YXIgcyxjPXJbaV07dChjKT9zPVooW2FdKTplKGMuZm5zKSYmbihjLm1lcmdlZCk/KHM9YykuZm5zLnB1c2goYSk6cz1aKFtjLGFdKSxzLm1lcmdlZD0hMCxyW2ldPXN9ZnVuY3Rpb24gUSh0LG4scixpLG8pe2lmKGUobikpe2lmKGYobixyKSlyZXR1cm4gdFtyXT1uW3JdLG98fGRlbGV0ZSBuW3JdLCEwO2lmKGYobixpKSlyZXR1cm4gdFtyXT1uW2ldLG98fGRlbGV0ZSBuW2ldLCEwfXJldHVybiExfWZ1bmN0aW9uIHR0KHQpe3JldHVybiBlKHQpJiZlKHQudGV4dCkmJmZ1bmN0aW9uKHQpe3JldHVybiExPT09dH0odC5pc0NvbW1lbnQpfWZ1bmN0aW9uIGV0KGksbyl7dmFyIGEscyxjLHUsbD1bXTtmb3IoYT0wO2E8aS5sZW5ndGg7YSsrKXQocz1pW2FdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBzfHwodT1sW2M9bC5sZW5ndGgtMV0sQXJyYXkuaXNBcnJheShzKT9zLmxlbmd0aD4wJiYodHQoKHM9ZXQocywob3x8XCJcIikrXCJfXCIrYSkpWzBdKSYmdHQodSkmJihsW2NdPXgodS50ZXh0K3NbMF0udGV4dCkscy5zaGlmdCgpKSxsLnB1c2guYXBwbHkobCxzKSk6cihzKT90dCh1KT9sW2NdPXgodS50ZXh0K3MpOlwiXCIhPT1zJiZsLnB1c2goeChzKSk6dHQocykmJnR0KHUpP2xbY109eCh1LnRleHQrcy50ZXh0KToobihpLl9pc1ZMaXN0KSYmZShzLnRhZykmJnQocy5rZXkpJiZlKG8pJiYocy5rZXk9XCJfX3ZsaXN0XCIrbytcIl9cIithK1wiX19cIiksbC5wdXNoKHMpKSk7cmV0dXJuIGx9ZnVuY3Rpb24gbnQodCxlKXtyZXR1cm4odC5fX2VzTW9kdWxlfHxmciYmXCJNb2R1bGVcIj09PXRbU3ltYm9sLnRvU3RyaW5nVGFnXSkmJih0PXQuZGVmYXVsdCksaSh0KT9lLmV4dGVuZCh0KTp0fWZ1bmN0aW9uIHJ0KHQpe3JldHVybiB0LmlzQ29tbWVudCYmdC5hc3luY0ZhY3Rvcnl9ZnVuY3Rpb24gaXQodCl7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtpZihlKHIpJiYoZShyLmNvbXBvbmVudE9wdGlvbnMpfHxydChyKSkpcmV0dXJuIHJ9fWZ1bmN0aW9uIG90KHQsZSxuKXtuP0xyLiRvbmNlKHQsZSk6THIuJG9uKHQsZSl9ZnVuY3Rpb24gYXQodCxlKXtMci4kb2ZmKHQsZSl9ZnVuY3Rpb24gc3QodCxlLG4pe0xyPXQsWChlLG58fHt9LG90LGF0KSxMcj12b2lkIDB9ZnVuY3Rpb24gY3QodCxlKXt2YXIgbj17fTtpZighdClyZXR1cm4gbjtmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspe3ZhciBvPXRbcl0sYT1vLmRhdGE7aWYoYSYmYS5hdHRycyYmYS5hdHRycy5zbG90JiZkZWxldGUgYS5hdHRycy5zbG90LG8uY29udGV4dCE9PWUmJm8uZm5Db250ZXh0IT09ZXx8IWF8fG51bGw9PWEuc2xvdCkobi5kZWZhdWx0fHwobi5kZWZhdWx0PVtdKSkucHVzaChvKTtlbHNle3ZhciBzPWEuc2xvdCxjPW5bc118fChuW3NdPVtdKTtcInRlbXBsYXRlXCI9PT1vLnRhZz9jLnB1c2guYXBwbHkoYyxvLmNoaWxkcmVufHxbXSk6Yy5wdXNoKG8pfX1mb3IodmFyIHUgaW4gbiluW3VdLmV2ZXJ5KHV0KSYmZGVsZXRlIG5bdV07cmV0dXJuIG59ZnVuY3Rpb24gdXQodCl7cmV0dXJuIHQuaXNDb21tZW50JiYhdC5hc3luY0ZhY3Rvcnl8fFwiIFwiPT09dC50ZXh0fWZ1bmN0aW9uIGx0KHQsZSl7ZT1lfHx7fTtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKylBcnJheS5pc0FycmF5KHRbbl0pP2x0KHRbbl0sZSk6ZVt0W25dLmtleV09dFtuXS5mbjtyZXR1cm4gZX1mdW5jdGlvbiBmdCh0KXtmb3IoO3QmJih0PXQuJHBhcmVudCk7KWlmKHQuX2luYWN0aXZlKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIHB0KHQsZSl7aWYoZSl7aWYodC5fZGlyZWN0SW5hY3RpdmU9ITEsZnQodCkpcmV0dXJufWVsc2UgaWYodC5fZGlyZWN0SW5hY3RpdmUpcmV0dXJuO2lmKHQuX2luYWN0aXZlfHxudWxsPT09dC5faW5hY3RpdmUpe3QuX2luYWN0aXZlPSExO2Zvcih2YXIgbj0wO248dC4kY2hpbGRyZW4ubGVuZ3RoO24rKylwdCh0LiRjaGlsZHJlbltuXSk7dnQodCxcImFjdGl2YXRlZFwiKX19ZnVuY3Rpb24gZHQodCxlKXtpZighKGUmJih0Ll9kaXJlY3RJbmFjdGl2ZT0hMCxmdCh0KSl8fHQuX2luYWN0aXZlKSl7dC5faW5hY3RpdmU9ITA7Zm9yKHZhciBuPTA7bjx0LiRjaGlsZHJlbi5sZW5ndGg7bisrKWR0KHQuJGNoaWxkcmVuW25dKTt2dCh0LFwiZGVhY3RpdmF0ZWRcIil9fWZ1bmN0aW9uIHZ0KHQsZSl7dmFyIG49dC4kb3B0aW9uc1tlXTtpZihuKWZvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl0cnl7bltyXS5jYWxsKHQpfWNhdGNoKG4pe1Yobix0LGUrXCIgaG9va1wiKX10Ll9oYXNIb29rRXZlbnQmJnQuJGVtaXQoXCJob29rOlwiK2UpfWZ1bmN0aW9uIGh0KCl7VXI9ITA7dmFyIHQsZTtmb3IoRnIuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiB0LmlkLWUuaWR9KSxWcj0wO1ZyPEZyLmxlbmd0aDtWcisrKWU9KHQ9RnJbVnJdKS5pZCxIcltlXT1udWxsLHQucnVuKCk7dmFyIG49UnIuc2xpY2UoKSxyPUZyLnNsaWNlKCk7VnI9RnIubGVuZ3RoPVJyLmxlbmd0aD0wLEhyPXt9LEJyPVVyPSExLGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKXRbZV0uX2luYWN0aXZlPSEwLHB0KHRbZV0sITApfShuKSxmdW5jdGlvbih0KXt2YXIgZT10Lmxlbmd0aDtmb3IoO2UtLTspe3ZhciBuPXRbZV0scj1uLnZtO3IuX3dhdGNoZXI9PT1uJiZyLl9pc01vdW50ZWQmJnZ0KHIsXCJ1cGRhdGVkXCIpfX0ociksbHImJkpuLmRldnRvb2xzJiZsci5lbWl0KFwiZmx1c2hcIil9ZnVuY3Rpb24gbXQodCxlLG4pe0pyLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzW2VdW25dfSxKci5zZXQ9ZnVuY3Rpb24odCl7dGhpc1tlXVtuXT10fSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLEpyKX1mdW5jdGlvbiB5dCh0KXt0Ll93YXRjaGVycz1bXTt2YXIgZT10LiRvcHRpb25zO2UucHJvcHMmJmZ1bmN0aW9uKHQsZSl7dmFyIG49dC4kb3B0aW9ucy5wcm9wc0RhdGF8fHt9LHI9dC5fcHJvcHM9e30saT10LiRvcHRpb25zLl9wcm9wS2V5cz1bXSxvPSF0LiRwYXJlbnQ7Q3Iuc2hvdWxkQ29udmVydD1vO3ZhciBhPWZ1bmN0aW9uKG8pe2kucHVzaChvKTt2YXIgYT1IKG8sZSxuLHQpO0UocixvLGEpLG8gaW4gdHx8bXQodCxcIl9wcm9wc1wiLG8pfTtmb3IodmFyIHMgaW4gZSlhKHMpO0NyLnNob3VsZENvbnZlcnQ9ITB9KHQsZS5wcm9wcyksZS5tZXRob2RzJiZmdW5jdGlvbih0LGUpe3QuJG9wdGlvbnMucHJvcHM7Zm9yKHZhciBuIGluIGUpdFtuXT1udWxsPT1lW25dP3k6ZChlW25dLHQpfSh0LGUubWV0aG9kcyksZS5kYXRhP2Z1bmN0aW9uKHQpe3ZhciBlPXQuJG9wdGlvbnMuZGF0YTtlPXQuX2RhdGE9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9mdW5jdGlvbih0LGUpe3RyeXtyZXR1cm4gdC5jYWxsKGUsZSl9Y2F0Y2godCl7cmV0dXJuIFYodCxlLFwiZGF0YSgpXCIpLHt9fX0oZSx0KTplfHx7fSxvKGUpfHwoZT17fSk7dmFyIG49T2JqZWN0LmtleXMoZSkscj10LiRvcHRpb25zLnByb3BzLGk9KHQuJG9wdGlvbnMubWV0aG9kcyxuLmxlbmd0aCk7Zm9yKDtpLS07KXt2YXIgYT1uW2ldO3ImJmYocixhKXx8JChhKXx8bXQodCxcIl9kYXRhXCIsYSl9VChlLCEwKX0odCk6VCh0Ll9kYXRhPXt9LCEwKSxlLmNvbXB1dGVkJiZmdW5jdGlvbih0LGUpe3ZhciBuPXQuX2NvbXB1dGVkV2F0Y2hlcnM9T2JqZWN0LmNyZWF0ZShudWxsKSxyPXVyKCk7Zm9yKHZhciBpIGluIGUpe3ZhciBvPWVbaV0sYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvP286by5nZXQ7cnx8KG5baV09bmV3IEtyKHQsYXx8eSx5LHFyKSksaSBpbiB0fHxndCh0LGksbyl9fSh0LGUuY29tcHV0ZWQpLGUud2F0Y2gmJmUud2F0Y2ghPT1pciYmZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSl7dmFyIHI9ZVtuXTtpZihBcnJheS5pc0FycmF5KHIpKWZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKWJ0KHQsbixyW2ldKTtlbHNlIGJ0KHQsbixyKX19KHQsZS53YXRjaCl9ZnVuY3Rpb24gZ3QodCxlLG4pe3ZhciByPSF1cigpO1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/KEpyLmdldD1yP190KGUpOm4sSnIuc2V0PXkpOihKci5nZXQ9bi5nZXQ/ciYmITEhPT1uLmNhY2hlP190KGUpOm4uZ2V0OnksSnIuc2V0PW4uc2V0P24uc2V0OnkpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUsSnIpfWZ1bmN0aW9uIF90KHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPXRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMmJnRoaXMuX2NvbXB1dGVkV2F0Y2hlcnNbdF07aWYoZSlyZXR1cm4gZS5kaXJ0eSYmZS5ldmFsdWF0ZSgpLHZyLnRhcmdldCYmZS5kZXBlbmQoKSxlLnZhbHVlfX1mdW5jdGlvbiBidCh0LGUsbixyKXtyZXR1cm4gbyhuKSYmKHI9bixuPW4uaGFuZGxlciksXCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPXRbbl0pLHQuJHdhdGNoKGUsbixyKX1mdW5jdGlvbiAkdCh0LGUpe2lmKHQpe2Zvcih2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9ZnI/UmVmbGVjdC5vd25LZXlzKHQpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KTpPYmplY3Qua2V5cyh0KSxpPTA7aTxyLmxlbmd0aDtpKyspe2Zvcih2YXIgbz1yW2ldLGE9dFtvXS5mcm9tLHM9ZTtzOyl7aWYocy5fcHJvdmlkZWQmJmEgaW4gcy5fcHJvdmlkZWQpe25bb109cy5fcHJvdmlkZWRbYV07YnJlYWt9cz1zLiRwYXJlbnR9aWYoIXMmJlwiZGVmYXVsdFwiaW4gdFtvXSl7dmFyIGM9dFtvXS5kZWZhdWx0O25bb109XCJmdW5jdGlvblwiPT10eXBlb2YgYz9jLmNhbGwoZSk6Y319cmV0dXJuIG59fWZ1bmN0aW9uIEN0KHQsbil7dmFyIHIsbyxhLHMsYztpZihBcnJheS5pc0FycmF5KHQpfHxcInN0cmluZ1wiPT10eXBlb2YgdClmb3Iocj1uZXcgQXJyYXkodC5sZW5ndGgpLG89MCxhPXQubGVuZ3RoO288YTtvKyspcltvXT1uKHRbb10sbyk7ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgdClmb3Iocj1uZXcgQXJyYXkodCksbz0wO288dDtvKyspcltvXT1uKG8rMSxvKTtlbHNlIGlmKGkodCkpZm9yKHM9T2JqZWN0LmtleXModCkscj1uZXcgQXJyYXkocy5sZW5ndGgpLG89MCxhPXMubGVuZ3RoO288YTtvKyspYz1zW29dLHJbb109bih0W2NdLGMsbyk7cmV0dXJuIGUocikmJihyLl9pc1ZMaXN0PSEwKSxyfWZ1bmN0aW9uIHd0KHQsZSxuLHIpe3ZhciBpLG89dGhpcy4kc2NvcGVkU2xvdHNbdF07aWYobyluPW58fHt9LHImJihuPWgoaCh7fSxyKSxuKSksaT1vKG4pfHxlO2Vsc2V7dmFyIGE9dGhpcy4kc2xvdHNbdF07YSYmKGEuX3JlbmRlcmVkPSEwKSxpPWF8fGV9dmFyIHM9biYmbi5zbG90O3JldHVybiBzP3RoaXMuJGNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiLHtzbG90OnN9LGkpOml9ZnVuY3Rpb24geHQodCl7cmV0dXJuIFIodGhpcy4kb3B0aW9ucyxcImZpbHRlcnNcIix0KXx8VW59ZnVuY3Rpb24ga3QodCxlLG4scil7dmFyIGk9Sm4ua2V5Q29kZXNbZV18fG47cmV0dXJuIGk/QXJyYXkuaXNBcnJheShpKT8tMT09PWkuaW5kZXhPZih0KTppIT09dDpyP0huKHIpIT09ZTp2b2lkIDB9ZnVuY3Rpb24gQXQodCxlLG4scixvKXtpZihuKWlmKGkobikpe0FycmF5LmlzQXJyYXkobikmJihuPW0obikpO3ZhciBhLHM9ZnVuY3Rpb24oaSl7aWYoXCJjbGFzc1wiPT09aXx8XCJzdHlsZVwiPT09aXx8TG4oaSkpYT10O2Vsc2V7dmFyIHM9dC5hdHRycyYmdC5hdHRycy50eXBlO2E9cnx8Sm4ubXVzdFVzZVByb3AoZSxzLGkpP3QuZG9tUHJvcHN8fCh0LmRvbVByb3BzPXt9KTp0LmF0dHJzfHwodC5hdHRycz17fSl9aWYoIShpIGluIGEpJiYoYVtpXT1uW2ldLG8pKXsodC5vbnx8KHQub249e30pKVtcInVwZGF0ZTpcIitpXT1mdW5jdGlvbih0KXtuW2ldPXR9fX07Zm9yKHZhciBjIGluIG4pcyhjKX1lbHNlO3JldHVybiB0fWZ1bmN0aW9uIE90KHQsZSl7dmFyIG49dGhpcy5fc3RhdGljVHJlZXN8fCh0aGlzLl9zdGF0aWNUcmVlcz1bXSkscj1uW3RdO3JldHVybiByJiYhZT9BcnJheS5pc0FycmF5KHIpP0Eocik6ayhyKToocj1uW3RdPXRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW3RdLmNhbGwodGhpcy5fcmVuZGVyUHJveHksbnVsbCx0aGlzKSxUdChyLFwiX19zdGF0aWNfX1wiK3QsITEpLHIpfWZ1bmN0aW9uIFN0KHQsZSxuKXtyZXR1cm4gVHQodCxcIl9fb25jZV9fXCIrZSsobj9cIl9cIituOlwiXCIpLCEwKSx0fWZ1bmN0aW9uIFR0KHQsZSxuKXtpZihBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJlwic3RyaW5nXCIhPXR5cGVvZiB0W3JdJiZFdCh0W3JdLGUrXCJfXCIrcixuKTtlbHNlIEV0KHQsZSxuKX1mdW5jdGlvbiBFdCh0LGUsbil7dC5pc1N0YXRpYz0hMCx0LmtleT1lLHQuaXNPbmNlPW59ZnVuY3Rpb24ganQodCxlKXtpZihlKWlmKG8oZSkpe3ZhciBuPXQub249dC5vbj9oKHt9LHQub24pOnt9O2Zvcih2YXIgciBpbiBlKXt2YXIgaT1uW3JdLGE9ZVtyXTtuW3JdPWk/W10uY29uY2F0KGksYSk6YX19ZWxzZTtyZXR1cm4gdH1mdW5jdGlvbiBOdCh0KXt0Ll9vPVN0LHQuX249Yyx0Ll9zPXMsdC5fbD1DdCx0Ll90PXd0LHQuX3E9Zyx0Ll9pPV8sdC5fbT1PdCx0Ll9mPXh0LHQuX2s9a3QsdC5fYj1BdCx0Ll92PXgsdC5fZT1ncix0Ll91PWx0LHQuX2c9anR9ZnVuY3Rpb24gSXQodCxlLHIsaSxvKXt2YXIgYT1vLm9wdGlvbnM7dGhpcy5kYXRhPXQsdGhpcy5wcm9wcz1lLHRoaXMuY2hpbGRyZW49cix0aGlzLnBhcmVudD1pLHRoaXMubGlzdGVuZXJzPXQub258fGpuLHRoaXMuaW5qZWN0aW9ucz0kdChhLmluamVjdCxpKSx0aGlzLnNsb3RzPWZ1bmN0aW9uKCl7cmV0dXJuIGN0KHIsaSl9O3ZhciBzPU9iamVjdC5jcmVhdGUoaSksYz1uKGEuX2NvbXBpbGVkKSx1PSFjO2MmJih0aGlzLiRvcHRpb25zPWEsdGhpcy4kc2xvdHM9dGhpcy5zbG90cygpLHRoaXMuJHNjb3BlZFNsb3RzPXQuc2NvcGVkU2xvdHN8fGpuKSxhLl9zY29wZUlkP3RoaXMuX2M9ZnVuY3Rpb24odCxlLG4scil7dmFyIG89RHQocyx0LGUsbixyLHUpO3JldHVybiBvJiYoby5mblNjb3BlSWQ9YS5fc2NvcGVJZCxvLmZuQ29udGV4dD1pKSxvfTp0aGlzLl9jPWZ1bmN0aW9uKHQsZSxuLHIpe3JldHVybiBEdChzLHQsZSxuLHIsdSl9fWZ1bmN0aW9uIEx0KHQsZSl7Zm9yKHZhciBuIGluIGUpdFtQbihuKV09ZVtuXX1mdW5jdGlvbiBNdChyLG8sYSxzLGMpe2lmKCF0KHIpKXt2YXIgdT1hLiRvcHRpb25zLl9iYXNlO2lmKGkocikmJihyPXUuZXh0ZW5kKHIpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiByKXt2YXIgbDtpZih0KHIuY2lkKSYmKGw9cix2b2lkIDA9PT0ocj1mdW5jdGlvbihyLG8sYSl7aWYobihyLmVycm9yKSYmZShyLmVycm9yQ29tcCkpcmV0dXJuIHIuZXJyb3JDb21wO2lmKGUoci5yZXNvbHZlZCkpcmV0dXJuIHIucmVzb2x2ZWQ7aWYobihyLmxvYWRpbmcpJiZlKHIubG9hZGluZ0NvbXApKXJldHVybiByLmxvYWRpbmdDb21wO2lmKCFlKHIuY29udGV4dHMpKXt2YXIgcz1yLmNvbnRleHRzPVthXSxjPSEwLHU9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MCxlPXMubGVuZ3RoO3Q8ZTt0Kyspc1t0XS4kZm9yY2VVcGRhdGUoKX0sbD1iKGZ1bmN0aW9uKHQpe3IucmVzb2x2ZWQ9bnQodCxvKSxjfHx1KCl9KSxmPWIoZnVuY3Rpb24odCl7ZShyLmVycm9yQ29tcCkmJihyLmVycm9yPSEwLHUoKSl9KSxwPXIobCxmKTtyZXR1cm4gaShwKSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHAudGhlbj90KHIucmVzb2x2ZWQpJiZwLnRoZW4obCxmKTplKHAuY29tcG9uZW50KSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcC5jb21wb25lbnQudGhlbiYmKHAuY29tcG9uZW50LnRoZW4obCxmKSxlKHAuZXJyb3IpJiYoci5lcnJvckNvbXA9bnQocC5lcnJvcixvKSksZShwLmxvYWRpbmcpJiYoci5sb2FkaW5nQ29tcD1udChwLmxvYWRpbmcsbyksMD09PXAuZGVsYXk/ci5sb2FkaW5nPSEwOnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KHIucmVzb2x2ZWQpJiZ0KHIuZXJyb3IpJiYoci5sb2FkaW5nPSEwLHUoKSl9LHAuZGVsYXl8fDIwMCkpLGUocC50aW1lb3V0KSYmc2V0VGltZW91dChmdW5jdGlvbigpe3Qoci5yZXNvbHZlZCkmJmYobnVsbCl9LHAudGltZW91dCkpKSxjPSExLHIubG9hZGluZz9yLmxvYWRpbmdDb21wOnIucmVzb2x2ZWR9ci5jb250ZXh0cy5wdXNoKGEpfShsLHUsYSkpKSlyZXR1cm4gZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbz1ncigpO3JldHVybiBvLmFzeW5jRmFjdG9yeT10LG8uYXN5bmNNZXRhPXtkYXRhOmUsY29udGV4dDpuLGNoaWxkcmVuOnIsdGFnOml9LG99KGwsbyxhLHMsYyk7bz1vfHx7fSxGdChyKSxlKG8ubW9kZWwpJiZmdW5jdGlvbih0LG4pe3ZhciByPXQubW9kZWwmJnQubW9kZWwucHJvcHx8XCJ2YWx1ZVwiLGk9dC5tb2RlbCYmdC5tb2RlbC5ldmVudHx8XCJpbnB1dFwiOyhuLnByb3BzfHwobi5wcm9wcz17fSkpW3JdPW4ubW9kZWwudmFsdWU7dmFyIG89bi5vbnx8KG4ub249e30pO2Uob1tpXSk/b1tpXT1bbi5tb2RlbC5jYWxsYmFja10uY29uY2F0KG9baV0pOm9baV09bi5tb2RlbC5jYWxsYmFja30oci5vcHRpb25zLG8pO3ZhciBmPWZ1bmN0aW9uKG4scixpKXt2YXIgbz1yLm9wdGlvbnMucHJvcHM7aWYoIXQobykpe3ZhciBhPXt9LHM9bi5hdHRycyxjPW4ucHJvcHM7aWYoZShzKXx8ZShjKSlmb3IodmFyIHUgaW4gbyl7dmFyIGw9SG4odSk7UShhLGMsdSxsLCEwKXx8UShhLHMsdSxsLCExKX1yZXR1cm4gYX19KG8scik7aWYobihyLm9wdGlvbnMuZnVuY3Rpb25hbCkpcmV0dXJuIGZ1bmN0aW9uKHQsbixyLGksbyl7dmFyIGE9dC5vcHRpb25zLHM9e30sYz1hLnByb3BzO2lmKGUoYykpZm9yKHZhciB1IGluIGMpc1t1XT1IKHUsYyxufHxqbik7ZWxzZSBlKHIuYXR0cnMpJiZMdChzLHIuYXR0cnMpLGUoci5wcm9wcykmJkx0KHMsci5wcm9wcyk7dmFyIGw9bmV3IEl0KHIscyxvLGksdCksZj1hLnJlbmRlci5jYWxsKG51bGwsbC5fYyxsKTtyZXR1cm4gZiBpbnN0YW5jZW9mIG1yJiYoZi5mbkNvbnRleHQ9aSxmLmZuT3B0aW9ucz1hLHIuc2xvdCYmKChmLmRhdGF8fChmLmRhdGE9e30pKS5zbG90PXIuc2xvdCkpLGZ9KHIsZixvLGEscyk7dmFyIHA9by5vbjtpZihvLm9uPW8ubmF0aXZlT24sbihyLm9wdGlvbnMuYWJzdHJhY3QpKXt2YXIgZD1vLnNsb3Q7bz17fSxkJiYoby5zbG90PWQpfSFmdW5jdGlvbih0KXt0Lmhvb2t8fCh0Lmhvb2s9e30pO2Zvcih2YXIgZT0wO2U8R3IubGVuZ3RoO2UrKyl7dmFyIG49R3JbZV0scj10Lmhvb2tbbl0saT1XcltuXTt0Lmhvb2tbbl09cj9mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihuLHIsaSxvKXt0KG4scixpLG8pLGUobixyLGksbyl9fShpLHIpOml9fShvKTt2YXIgdj1yLm9wdGlvbnMubmFtZXx8YztyZXR1cm4gbmV3IG1yKFwidnVlLWNvbXBvbmVudC1cIityLmNpZCsodj9cIi1cIit2OlwiXCIpLG8sdm9pZCAwLHZvaWQgMCx2b2lkIDAsYSx7Q3RvcjpyLHByb3BzRGF0YTpmLGxpc3RlbmVyczpwLHRhZzpjLGNoaWxkcmVuOnN9LGwpfX19ZnVuY3Rpb24gRHQodCxpLG8sYSxzLGMpe3JldHVybihBcnJheS5pc0FycmF5KG8pfHxyKG8pKSYmKHM9YSxhPW8sbz12b2lkIDApLG4oYykmJihzPVhyKSxmdW5jdGlvbih0LG4saSxvLGEpe2lmKGUoaSkmJmUoaS5fX29iX18pKXJldHVybiBncigpO2UoaSkmJmUoaS5pcykmJihuPWkuaXMpO2lmKCFuKXJldHVybiBncigpO0FycmF5LmlzQXJyYXkobykmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG9bMF0mJigoaT1pfHx7fSkuc2NvcGVkU2xvdHM9e2RlZmF1bHQ6b1swXX0sby5sZW5ndGg9MCk7YT09PVhyP289ZnVuY3Rpb24odCl7cmV0dXJuIHIodCk/W3godCldOkFycmF5LmlzQXJyYXkodCk/ZXQodCk6dm9pZCAwfShvKTphPT09WnImJihvPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKWlmKEFycmF5LmlzQXJyYXkodFtlXSkpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sdCk7cmV0dXJuIHR9KG8pKTt2YXIgcyxjO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgdTtjPXQuJHZub2RlJiZ0LiR2bm9kZS5uc3x8Sm4uZ2V0VGFnTmFtZXNwYWNlKG4pLHM9Sm4uaXNSZXNlcnZlZFRhZyhuKT9uZXcgbXIoSm4ucGFyc2VQbGF0Zm9ybVRhZ05hbWUobiksaSxvLHZvaWQgMCx2b2lkIDAsdCk6ZSh1PVIodC4kb3B0aW9ucyxcImNvbXBvbmVudHNcIixuKSk/TXQodSxpLHQsbyxuKTpuZXcgbXIobixpLG8sdm9pZCAwLHZvaWQgMCx0KX1lbHNlIHM9TXQobixpLHQsbyk7cmV0dXJuIGUocyk/KGMmJlB0KHMsYykscyk6Z3IoKX0odCxpLG8sYSxzKX1mdW5jdGlvbiBQdChyLGksbyl7aWYoci5ucz1pLFwiZm9yZWlnbk9iamVjdFwiPT09ci50YWcmJihpPXZvaWQgMCxvPSEwKSxlKHIuY2hpbGRyZW4pKWZvcih2YXIgYT0wLHM9ci5jaGlsZHJlbi5sZW5ndGg7YTxzO2ErKyl7dmFyIGM9ci5jaGlsZHJlblthXTtlKGMudGFnKSYmKHQoYy5ucyl8fG4obykpJiZQdChjLGksbyl9fWZ1bmN0aW9uIEZ0KHQpe3ZhciBlPXQub3B0aW9ucztpZih0LnN1cGVyKXt2YXIgbj1GdCh0LnN1cGVyKTtpZihuIT09dC5zdXBlck9wdGlvbnMpe3Quc3VwZXJPcHRpb25zPW47dmFyIHI9ZnVuY3Rpb24odCl7dmFyIGUsbj10Lm9wdGlvbnMscj10LmV4dGVuZE9wdGlvbnMsaT10LnNlYWxlZE9wdGlvbnM7Zm9yKHZhciBvIGluIG4pbltvXSE9PWlbb10mJihlfHwoZT17fSksZVtvXT1mdW5jdGlvbih0LGUsbil7e2lmKEFycmF5LmlzQXJyYXkodCkpe3ZhciByPVtdO249QXJyYXkuaXNBcnJheShuKT9uOltuXSxlPUFycmF5LmlzQXJyYXkoZSk/ZTpbZV07Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspKGUuaW5kZXhPZih0W2ldKT49MHx8bi5pbmRleE9mKHRbaV0pPDApJiZyLnB1c2godFtpXSk7cmV0dXJuIHJ9cmV0dXJuIHR9fShuW29dLHJbb10saVtvXSkpO3JldHVybiBlfSh0KTtyJiZoKHQuZXh0ZW5kT3B0aW9ucyxyKSwoZT10Lm9wdGlvbnM9RihuLHQuZXh0ZW5kT3B0aW9ucykpLm5hbWUmJihlLmNvbXBvbmVudHNbZS5uYW1lXT10KX19cmV0dXJuIGV9ZnVuY3Rpb24gUnQodCl7dGhpcy5faW5pdCh0KX1mdW5jdGlvbiBIdCh0KXt0LmNpZD0wO3ZhciBlPTE7dC5leHRlbmQ9ZnVuY3Rpb24odCl7dD10fHx7fTt2YXIgbj10aGlzLHI9bi5jaWQsaT10Ll9DdG9yfHwodC5fQ3Rvcj17fSk7aWYoaVtyXSlyZXR1cm4gaVtyXTt2YXIgbz10Lm5hbWV8fG4ub3B0aW9ucy5uYW1lLGE9ZnVuY3Rpb24odCl7dGhpcy5faW5pdCh0KX07cmV0dXJuIGEucHJvdG90eXBlPU9iamVjdC5jcmVhdGUobi5wcm90b3R5cGUpLGEucHJvdG90eXBlLmNvbnN0cnVjdG9yPWEsYS5jaWQ9ZSsrLGEub3B0aW9ucz1GKG4ub3B0aW9ucyx0KSxhLnN1cGVyPW4sYS5vcHRpb25zLnByb3BzJiZmdW5jdGlvbih0KXt2YXIgZT10Lm9wdGlvbnMucHJvcHM7Zm9yKHZhciBuIGluIGUpbXQodC5wcm90b3R5cGUsXCJfcHJvcHNcIixuKX0oYSksYS5vcHRpb25zLmNvbXB1dGVkJiZmdW5jdGlvbih0KXt2YXIgZT10Lm9wdGlvbnMuY29tcHV0ZWQ7Zm9yKHZhciBuIGluIGUpZ3QodC5wcm90b3R5cGUsbixlW25dKX0oYSksYS5leHRlbmQ9bi5leHRlbmQsYS5taXhpbj1uLm1peGluLGEudXNlPW4udXNlLHpuLmZvckVhY2goZnVuY3Rpb24odCl7YVt0XT1uW3RdfSksbyYmKGEub3B0aW9ucy5jb21wb25lbnRzW29dPWEpLGEuc3VwZXJPcHRpb25zPW4ub3B0aW9ucyxhLmV4dGVuZE9wdGlvbnM9dCxhLnNlYWxlZE9wdGlvbnM9aCh7fSxhLm9wdGlvbnMpLGlbcl09YSxhfX1mdW5jdGlvbiBCdCh0KXtyZXR1cm4gdCYmKHQuQ3Rvci5vcHRpb25zLm5hbWV8fHQudGFnKX1mdW5jdGlvbiBVdCh0LGUpe3JldHVybiBBcnJheS5pc0FycmF5KHQpP3QuaW5kZXhPZihlKT4tMTpcInN0cmluZ1wiPT10eXBlb2YgdD90LnNwbGl0KFwiLFwiKS5pbmRleE9mKGUpPi0xOiEhZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PU5uLmNhbGwodCl9KHQpJiZ0LnRlc3QoZSl9ZnVuY3Rpb24gVnQodCxlKXt2YXIgbj10LmNhY2hlLHI9dC5rZXlzLGk9dC5fdm5vZGU7Zm9yKHZhciBvIGluIG4pe3ZhciBhPW5bb107aWYoYSl7dmFyIHM9QnQoYS5jb21wb25lbnRPcHRpb25zKTtzJiYhZShzKSYmenQobixvLHIsaSl9fX1mdW5jdGlvbiB6dCh0LGUsbixyKXt2YXIgaT10W2VdOyFpfHxyJiZpLnRhZz09PXIudGFnfHxpLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCksdFtlXT1udWxsLGwobixlKX1mdW5jdGlvbiBLdCh0KXtmb3IodmFyIG49dC5kYXRhLHI9dCxpPXQ7ZShpLmNvbXBvbmVudEluc3RhbmNlKTspKGk9aS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUpJiZpLmRhdGEmJihuPUp0KGkuZGF0YSxuKSk7Zm9yKDtlKHI9ci5wYXJlbnQpOylyJiZyLmRhdGEmJihuPUp0KG4sci5kYXRhKSk7cmV0dXJuIGZ1bmN0aW9uKHQsbil7aWYoZSh0KXx8ZShuKSlyZXR1cm4gcXQodCxXdChuKSk7cmV0dXJuXCJcIn0obi5zdGF0aWNDbGFzcyxuLmNsYXNzKX1mdW5jdGlvbiBKdCh0LG4pe3JldHVybntzdGF0aWNDbGFzczpxdCh0LnN0YXRpY0NsYXNzLG4uc3RhdGljQ2xhc3MpLGNsYXNzOmUodC5jbGFzcyk/W3QuY2xhc3Msbi5jbGFzc106bi5jbGFzc319ZnVuY3Rpb24gcXQodCxlKXtyZXR1cm4gdD9lP3QrXCIgXCIrZTp0OmV8fFwiXCJ9ZnVuY3Rpb24gV3QodCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/ZnVuY3Rpb24odCl7Zm9yKHZhciBuLHI9XCJcIixpPTAsbz10Lmxlbmd0aDtpPG87aSsrKWUobj1XdCh0W2ldKSkmJlwiXCIhPT1uJiYociYmKHIrPVwiIFwiKSxyKz1uKTtyZXR1cm4gcn0odCk6aSh0KT9mdW5jdGlvbih0KXt2YXIgZT1cIlwiO2Zvcih2YXIgbiBpbiB0KXRbbl0mJihlJiYoZSs9XCIgXCIpLGUrPW4pO3JldHVybiBlfSh0KTpcInN0cmluZ1wiPT10eXBlb2YgdD90OlwiXCJ9ZnVuY3Rpb24gR3QodCl7cmV0dXJuIGJpKHQpP1wic3ZnXCI6XCJtYXRoXCI9PT10P1wibWF0aFwiOnZvaWQgMH1mdW5jdGlvbiBadCh0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTtyZXR1cm4gZXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKX1yZXR1cm4gdH1mdW5jdGlvbiBYdCh0LGUpe3ZhciBuPXQuZGF0YS5yZWY7aWYobil7dmFyIHI9dC5jb250ZXh0LGk9dC5jb21wb25lbnRJbnN0YW5jZXx8dC5lbG0sbz1yLiRyZWZzO2U/QXJyYXkuaXNBcnJheShvW25dKT9sKG9bbl0saSk6b1tuXT09PWkmJihvW25dPXZvaWQgMCk6dC5kYXRhLnJlZkluRm9yP0FycmF5LmlzQXJyYXkob1tuXSk/b1tuXS5pbmRleE9mKGkpPDAmJm9bbl0ucHVzaChpKTpvW25dPVtpXTpvW25dPWl9fWZ1bmN0aW9uIFl0KHIsaSl7cmV0dXJuIHIua2V5PT09aS5rZXkmJihyLnRhZz09PWkudGFnJiZyLmlzQ29tbWVudD09PWkuaXNDb21tZW50JiZlKHIuZGF0YSk9PT1lKGkuZGF0YSkmJmZ1bmN0aW9uKHQsbil7aWYoXCJpbnB1dFwiIT09dC50YWcpcmV0dXJuITA7dmFyIHIsaT1lKHI9dC5kYXRhKSYmZShyPXIuYXR0cnMpJiZyLnR5cGUsbz1lKHI9bi5kYXRhKSYmZShyPXIuYXR0cnMpJiZyLnR5cGU7cmV0dXJuIGk9PT1vfHx3aShpKSYmd2kobyl9KHIsaSl8fG4oci5pc0FzeW5jUGxhY2Vob2xkZXIpJiZyLmFzeW5jRmFjdG9yeT09PWkuYXN5bmNGYWN0b3J5JiZ0KGkuYXN5bmNGYWN0b3J5LmVycm9yKSl9ZnVuY3Rpb24gUXQodCxuLHIpe3ZhciBpLG8sYT17fTtmb3IoaT1uO2k8PXI7KytpKWUobz10W2ldLmtleSkmJihhW29dPWkpO3JldHVybiBhfWZ1bmN0aW9uIHRlKHQsZSl7KHQuZGF0YS5kaXJlY3RpdmVzfHxlLmRhdGEuZGlyZWN0aXZlcykmJmZ1bmN0aW9uKHQsZSl7dmFyIG4scixpLG89dD09PUFpLGE9ZT09PUFpLHM9ZWUodC5kYXRhLmRpcmVjdGl2ZXMsdC5jb250ZXh0KSxjPWVlKGUuZGF0YS5kaXJlY3RpdmVzLGUuY29udGV4dCksdT1bXSxsPVtdO2ZvcihuIGluIGMpcj1zW25dLGk9Y1tuXSxyPyhpLm9sZFZhbHVlPXIudmFsdWUsbmUoaSxcInVwZGF0ZVwiLGUsdCksaS5kZWYmJmkuZGVmLmNvbXBvbmVudFVwZGF0ZWQmJmwucHVzaChpKSk6KG5lKGksXCJiaW5kXCIsZSx0KSxpLmRlZiYmaS5kZWYuaW5zZXJ0ZWQmJnUucHVzaChpKSk7aWYodS5sZW5ndGgpe3ZhciBmPWZ1bmN0aW9uKCl7Zm9yKHZhciBuPTA7bjx1Lmxlbmd0aDtuKyspbmUodVtuXSxcImluc2VydGVkXCIsZSx0KX07bz9ZKGUsXCJpbnNlcnRcIixmKTpmKCl9bC5sZW5ndGgmJlkoZSxcInBvc3RwYXRjaFwiLGZ1bmN0aW9uKCl7Zm9yKHZhciBuPTA7bjxsLmxlbmd0aDtuKyspbmUobFtuXSxcImNvbXBvbmVudFVwZGF0ZWRcIixlLHQpfSk7aWYoIW8pZm9yKG4gaW4gcyljW25dfHxuZShzW25dLFwidW5iaW5kXCIsdCx0LGEpfSh0LGUpfWZ1bmN0aW9uIGVlKHQsZSl7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZighdClyZXR1cm4gbjt2YXIgcixpO2ZvcihyPTA7cjx0Lmxlbmd0aDtyKyspKGk9dFtyXSkubW9kaWZpZXJzfHwoaS5tb2RpZmllcnM9VGkpLG5bZnVuY3Rpb24odCl7cmV0dXJuIHQucmF3TmFtZXx8dC5uYW1lK1wiLlwiK09iamVjdC5rZXlzKHQubW9kaWZpZXJzfHx7fSkuam9pbihcIi5cIil9KGkpXT1pLGkuZGVmPVIoZS4kb3B0aW9ucyxcImRpcmVjdGl2ZXNcIixpLm5hbWUpO3JldHVybiBufWZ1bmN0aW9uIG5lKHQsZSxuLHIsaSl7dmFyIG89dC5kZWYmJnQuZGVmW2VdO2lmKG8pdHJ5e28obi5lbG0sdCxuLHIsaSl9Y2F0Y2gocil7VihyLG4uY29udGV4dCxcImRpcmVjdGl2ZSBcIit0Lm5hbWUrXCIgXCIrZStcIiBob29rXCIpfX1mdW5jdGlvbiByZShuLHIpe3ZhciBpPXIuY29tcG9uZW50T3B0aW9ucztpZighKGUoaSkmJiExPT09aS5DdG9yLm9wdGlvbnMuaW5oZXJpdEF0dHJzfHx0KG4uZGF0YS5hdHRycykmJnQoci5kYXRhLmF0dHJzKSkpe3ZhciBvLGEscz1yLmVsbSxjPW4uZGF0YS5hdHRyc3x8e30sdT1yLmRhdGEuYXR0cnN8fHt9O2UodS5fX29iX18pJiYodT1yLmRhdGEuYXR0cnM9aCh7fSx1KSk7Zm9yKG8gaW4gdSlhPXVbb10sY1tvXSE9PWEmJmllKHMsbyxhKTsoUW58fGVyKSYmdS52YWx1ZSE9PWMudmFsdWUmJmllKHMsXCJ2YWx1ZVwiLHUudmFsdWUpO2ZvcihvIGluIGMpdCh1W29dKSYmKGhpKG8pP3MucmVtb3ZlQXR0cmlidXRlTlModmksbWkobykpOnBpKG8pfHxzLnJlbW92ZUF0dHJpYnV0ZShvKSl9fWZ1bmN0aW9uIGllKHQsZSxuKXtpZihkaShlKSl5aShuKT90LnJlbW92ZUF0dHJpYnV0ZShlKToobj1cImFsbG93ZnVsbHNjcmVlblwiPT09ZSYmXCJFTUJFRFwiPT09dC50YWdOYW1lP1widHJ1ZVwiOmUsdC5zZXRBdHRyaWJ1dGUoZSxuKSk7ZWxzZSBpZihwaShlKSl0LnNldEF0dHJpYnV0ZShlLHlpKG4pfHxcImZhbHNlXCI9PT1uP1wiZmFsc2VcIjpcInRydWVcIik7ZWxzZSBpZihoaShlKSl5aShuKT90LnJlbW92ZUF0dHJpYnV0ZU5TKHZpLG1pKGUpKTp0LnNldEF0dHJpYnV0ZU5TKHZpLGUsbik7ZWxzZSBpZih5aShuKSl0LnJlbW92ZUF0dHJpYnV0ZShlKTtlbHNle2lmKFFuJiYhdHImJlwiVEVYVEFSRUFcIj09PXQudGFnTmFtZSYmXCJwbGFjZWhvbGRlclwiPT09ZSYmIXQuX19pZXBoKXt2YXIgcj1mdW5jdGlvbihlKXtlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIscil9O3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsciksdC5fX2llcGg9ITB9dC5zZXRBdHRyaWJ1dGUoZSxuKX19ZnVuY3Rpb24gb2UobixyKXt2YXIgaT1yLmVsbSxvPXIuZGF0YSxhPW4uZGF0YTtpZighKHQoby5zdGF0aWNDbGFzcykmJnQoby5jbGFzcykmJih0KGEpfHx0KGEuc3RhdGljQ2xhc3MpJiZ0KGEuY2xhc3MpKSkpe3ZhciBzPUt0KHIpLGM9aS5fdHJhbnNpdGlvbkNsYXNzZXM7ZShjKSYmKHM9cXQocyxXdChjKSkpLHMhPT1pLl9wcmV2Q2xhc3MmJihpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyksaS5fcHJldkNsYXNzPXMpfX1mdW5jdGlvbiBhZSh0KXtmdW5jdGlvbiBlKCl7KGF8fChhPVtdKSkucHVzaCh0LnNsaWNlKHYsaSkudHJpbSgpKSx2PWkrMX12YXIgbixyLGksbyxhLHM9ITEsYz0hMSx1PSExLGw9ITEsZj0wLHA9MCxkPTAsdj0wO2ZvcihpPTA7aTx0Lmxlbmd0aDtpKyspaWYocj1uLG49dC5jaGFyQ29kZUF0KGkpLHMpMzk9PT1uJiY5MiE9PXImJihzPSExKTtlbHNlIGlmKGMpMzQ9PT1uJiY5MiE9PXImJihjPSExKTtlbHNlIGlmKHUpOTY9PT1uJiY5MiE9PXImJih1PSExKTtlbHNlIGlmKGwpNDc9PT1uJiY5MiE9PXImJihsPSExKTtlbHNlIGlmKDEyNCE9PW58fDEyND09PXQuY2hhckNvZGVBdChpKzEpfHwxMjQ9PT10LmNoYXJDb2RlQXQoaS0xKXx8Znx8cHx8ZCl7c3dpdGNoKG4pe2Nhc2UgMzQ6Yz0hMDticmVhaztjYXNlIDM5OnM9ITA7YnJlYWs7Y2FzZSA5Njp1PSEwO2JyZWFrO2Nhc2UgNDA6ZCsrO2JyZWFrO2Nhc2UgNDE6ZC0tO2JyZWFrO2Nhc2UgOTE6cCsrO2JyZWFrO2Nhc2UgOTM6cC0tO2JyZWFrO2Nhc2UgMTIzOmYrKzticmVhaztjYXNlIDEyNTpmLS19aWYoNDc9PT1uKXtmb3IodmFyIGg9aS0xLG09dm9pZCAwO2g+PTAmJlwiIFwiPT09KG09dC5jaGFyQXQoaCkpO2gtLSk7bSYmSWkudGVzdChtKXx8KGw9ITApfX1lbHNlIHZvaWQgMD09PW8/KHY9aSsxLG89dC5zbGljZSgwLGkpLnRyaW0oKSk6ZSgpO2lmKHZvaWQgMD09PW8/bz10LnNsaWNlKDAsaSkudHJpbSgpOjAhPT12JiZlKCksYSlmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKW89ZnVuY3Rpb24odCxlKXt2YXIgbj1lLmluZGV4T2YoXCIoXCIpO3tpZihuPDApcmV0dXJuJ19mKFwiJytlKydcIikoJyt0K1wiKVwiO3ZhciByPWUuc2xpY2UoMCxuKSxpPWUuc2xpY2UobisxKTtyZXR1cm4nX2YoXCInK3IrJ1wiKSgnK3QrXCIsXCIraX19KG8sYVtpXSk7cmV0dXJuIG99ZnVuY3Rpb24gc2UodCl7Y29uc29sZS5lcnJvcihcIltWdWUgY29tcGlsZXJdOiBcIit0KX1mdW5jdGlvbiBjZSh0LGUpe3JldHVybiB0P3QubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0W2VdfSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0fSk6W119ZnVuY3Rpb24gdWUodCxlLG4peyh0LnByb3BzfHwodC5wcm9wcz1bXSkpLnB1c2goe25hbWU6ZSx2YWx1ZTpufSksdC5wbGFpbj0hMX1mdW5jdGlvbiBsZSh0LGUsbil7KHQuYXR0cnN8fCh0LmF0dHJzPVtdKSkucHVzaCh7bmFtZTplLHZhbHVlOm59KSx0LnBsYWluPSExfWZ1bmN0aW9uIGZlKHQsZSxuKXt0LmF0dHJzTWFwW2VdPW4sdC5hdHRyc0xpc3QucHVzaCh7bmFtZTplLHZhbHVlOm59KX1mdW5jdGlvbiBwZSh0LGUsbixyLGksbyl7KHQuZGlyZWN0aXZlc3x8KHQuZGlyZWN0aXZlcz1bXSkpLnB1c2goe25hbWU6ZSxyYXdOYW1lOm4sdmFsdWU6cixhcmc6aSxtb2RpZmllcnM6b30pLHQucGxhaW49ITF9ZnVuY3Rpb24gZGUodCxlLG4scixpLG8peyhyPXJ8fGpuKS5jYXB0dXJlJiYoZGVsZXRlIHIuY2FwdHVyZSxlPVwiIVwiK2UpLHIub25jZSYmKGRlbGV0ZSByLm9uY2UsZT1cIn5cIitlKSxyLnBhc3NpdmUmJihkZWxldGUgci5wYXNzaXZlLGU9XCImXCIrZSksXCJjbGlja1wiPT09ZSYmKHIucmlnaHQ/KGU9XCJjb250ZXh0bWVudVwiLGRlbGV0ZSByLnJpZ2h0KTpyLm1pZGRsZSYmKGU9XCJtb3VzZXVwXCIpKTt2YXIgYTtyLm5hdGl2ZT8oZGVsZXRlIHIubmF0aXZlLGE9dC5uYXRpdmVFdmVudHN8fCh0Lm5hdGl2ZUV2ZW50cz17fSkpOmE9dC5ldmVudHN8fCh0LmV2ZW50cz17fSk7dmFyIHM9e3ZhbHVlOm59O3IhPT1qbiYmKHMubW9kaWZpZXJzPXIpO3ZhciBjPWFbZV07QXJyYXkuaXNBcnJheShjKT9pP2MudW5zaGlmdChzKTpjLnB1c2gocyk6YVtlXT1jP2k/W3MsY106W2Msc106cyx0LnBsYWluPSExfWZ1bmN0aW9uIHZlKHQsZSxuKXt2YXIgcj1oZSh0LFwiOlwiK2UpfHxoZSh0LFwidi1iaW5kOlwiK2UpO2lmKG51bGwhPXIpcmV0dXJuIGFlKHIpO2lmKCExIT09bil7dmFyIGk9aGUodCxlKTtpZihudWxsIT1pKXJldHVybiBKU09OLnN0cmluZ2lmeShpKX19ZnVuY3Rpb24gaGUodCxlLG4pe3ZhciByO2lmKG51bGwhPShyPXQuYXR0cnNNYXBbZV0pKWZvcih2YXIgaT10LmF0dHJzTGlzdCxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKGlbb10ubmFtZT09PWUpe2kuc3BsaWNlKG8sMSk7YnJlYWt9cmV0dXJuIG4mJmRlbGV0ZSB0LmF0dHJzTWFwW2VdLHJ9ZnVuY3Rpb24gbWUodCxlLG4pe3ZhciByPW58fHt9LGk9XCIkJHZcIjtyLnRyaW0mJihpPVwiKHR5cGVvZiAkJHYgPT09ICdzdHJpbmcnPyAkJHYudHJpbSgpOiAkJHYpXCIpLHIubnVtYmVyJiYoaT1cIl9uKFwiK2krXCIpXCIpO3ZhciBvPXllKGUsaSk7dC5tb2RlbD17dmFsdWU6XCIoXCIrZStcIilcIixleHByZXNzaW9uOidcIicrZSsnXCInLGNhbGxiYWNrOlwiZnVuY3Rpb24gKCQkdikge1wiK28rXCJ9XCJ9fWZ1bmN0aW9uIHllKHQsZSl7dmFyIG49ZnVuY3Rpb24odCl7aWYoZWk9dC5sZW5ndGgsdC5pbmRleE9mKFwiW1wiKTwwfHx0Lmxhc3RJbmRleE9mKFwiXVwiKTxlaS0xKXJldHVybihpaT10Lmxhc3RJbmRleE9mKFwiLlwiKSk+LTE/e2V4cDp0LnNsaWNlKDAsaWkpLGtleTonXCInK3Quc2xpY2UoaWkrMSkrJ1wiJ306e2V4cDp0LGtleTpudWxsfTtuaT10LGlpPW9pPWFpPTA7Zm9yKDshX2UoKTspYmUocmk9Z2UoKSk/JGUocmkpOjkxPT09cmkmJmZ1bmN0aW9uKHQpe3ZhciBlPTE7b2k9aWk7Zm9yKDshX2UoKTspaWYodD1nZSgpLGJlKHQpKSRlKHQpO2Vsc2UgaWYoOTE9PT10JiZlKyssOTM9PT10JiZlLS0sMD09PWUpe2FpPWlpO2JyZWFrfX0ocmkpO3JldHVybntleHA6dC5zbGljZSgwLG9pKSxrZXk6dC5zbGljZShvaSsxLGFpKX19KHQpO3JldHVybiBudWxsPT09bi5rZXk/dCtcIj1cIitlOlwiJHNldChcIituLmV4cCtcIiwgXCIrbi5rZXkrXCIsIFwiK2UrXCIpXCJ9ZnVuY3Rpb24gZ2UoKXtyZXR1cm4gbmkuY2hhckNvZGVBdCgrK2lpKX1mdW5jdGlvbiBfZSgpe3JldHVybiBpaT49ZWl9ZnVuY3Rpb24gYmUodCl7cmV0dXJuIDM0PT09dHx8Mzk9PT10fWZ1bmN0aW9uICRlKHQpe2Zvcih2YXIgZT10OyFfZSgpJiYodD1nZSgpKSE9PWU7KTt9ZnVuY3Rpb24gQ2UodCxlLG4scixpKXtlPWZ1bmN0aW9uKHQpe3JldHVybiB0Ll93aXRoVGFza3x8KHQuX3dpdGhUYXNrPWZ1bmN0aW9uKCl7RXI9ITA7dmFyIGU9dC5hcHBseShudWxsLGFyZ3VtZW50cyk7cmV0dXJuIEVyPSExLGV9KX0oZSksbiYmKGU9ZnVuY3Rpb24odCxlLG4pe3ZhciByPXNpO3JldHVybiBmdW5jdGlvbiBpKCl7bnVsbCE9PXQuYXBwbHkobnVsbCxhcmd1bWVudHMpJiZ3ZShlLGksbixyKX19KGUsdCxyKSksc2kuYWRkRXZlbnRMaXN0ZW5lcih0LGUsb3I/e2NhcHR1cmU6cixwYXNzaXZlOml9OnIpfWZ1bmN0aW9uIHdlKHQsZSxuLHIpeyhyfHxzaSkucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LGUuX3dpdGhUYXNrfHxlLG4pfWZ1bmN0aW9uIHhlKG4scil7aWYoIXQobi5kYXRhLm9uKXx8IXQoci5kYXRhLm9uKSl7dmFyIGk9ci5kYXRhLm9ufHx7fSxvPW4uZGF0YS5vbnx8e307c2k9ci5lbG0sZnVuY3Rpb24odCl7aWYoZSh0W0xpXSkpe3ZhciBuPVFuP1wiY2hhbmdlXCI6XCJpbnB1dFwiO3Rbbl09W10uY29uY2F0KHRbTGldLHRbbl18fFtdKSxkZWxldGUgdFtMaV19ZSh0W01pXSkmJih0LmNoYW5nZT1bXS5jb25jYXQodFtNaV0sdC5jaGFuZ2V8fFtdKSxkZWxldGUgdFtNaV0pfShpKSxYKGksbyxDZSx3ZSxyLmNvbnRleHQpLHNpPXZvaWQgMH19ZnVuY3Rpb24ga2UobixyKXtpZighdChuLmRhdGEuZG9tUHJvcHMpfHwhdChyLmRhdGEuZG9tUHJvcHMpKXt2YXIgaSxvLGE9ci5lbG0scz1uLmRhdGEuZG9tUHJvcHN8fHt9LHU9ci5kYXRhLmRvbVByb3BzfHx7fTtlKHUuX19vYl9fKSYmKHU9ci5kYXRhLmRvbVByb3BzPWgoe30sdSkpO2ZvcihpIGluIHMpdCh1W2ldKSYmKGFbaV09XCJcIik7Zm9yKGkgaW4gdSl7aWYobz11W2ldLFwidGV4dENvbnRlbnRcIj09PWl8fFwiaW5uZXJIVE1MXCI9PT1pKXtpZihyLmNoaWxkcmVuJiYoci5jaGlsZHJlbi5sZW5ndGg9MCksbz09PXNbaV0pY29udGludWU7MT09PWEuY2hpbGROb2Rlcy5sZW5ndGgmJmEucmVtb3ZlQ2hpbGQoYS5jaGlsZE5vZGVzWzBdKX1pZihcInZhbHVlXCI9PT1pKXthLl92YWx1ZT1vO3ZhciBsPXQobyk/XCJcIjpTdHJpbmcobyk7KGZ1bmN0aW9uKHQsbil7cmV0dXJuIXQuY29tcG9zaW5nJiYoXCJPUFRJT05cIj09PXQudGFnTmFtZXx8ZnVuY3Rpb24odCxlKXt2YXIgbj0hMDt0cnl7bj1kb2N1bWVudC5hY3RpdmVFbGVtZW50IT09dH1jYXRjaCh0KXt9cmV0dXJuIG4mJnQudmFsdWUhPT1lfSh0LG4pfHxmdW5jdGlvbih0LG4pe3ZhciByPXQudmFsdWUsaT10Ll92TW9kaWZpZXJzO2lmKGUoaSkpe2lmKGkubGF6eSlyZXR1cm4hMTtpZihpLm51bWJlcilyZXR1cm4gYyhyKSE9PWMobik7aWYoaS50cmltKXJldHVybiByLnRyaW0oKSE9PW4udHJpbSgpfXJldHVybiByIT09bn0odCxuKSl9KShhLGwpJiYoYS52YWx1ZT1sKX1lbHNlIGFbaV09b319fWZ1bmN0aW9uIEFlKHQpe3ZhciBlPU9lKHQuc3R5bGUpO3JldHVybiB0LnN0YXRpY1N0eWxlP2godC5zdGF0aWNTdHlsZSxlKTplfWZ1bmN0aW9uIE9lKHQpe3JldHVybiBBcnJheS5pc0FycmF5KHQpP20odCk6XCJzdHJpbmdcIj09dHlwZW9mIHQ/RmkodCk6dH1mdW5jdGlvbiBTZShuLHIpe3ZhciBpPXIuZGF0YSxvPW4uZGF0YTtpZighKHQoaS5zdGF0aWNTdHlsZSkmJnQoaS5zdHlsZSkmJnQoby5zdGF0aWNTdHlsZSkmJnQoby5zdHlsZSkpKXt2YXIgYSxzLGM9ci5lbG0sdT1vLnN0YXRpY1N0eWxlLGw9by5ub3JtYWxpemVkU3R5bGV8fG8uc3R5bGV8fHt9LGY9dXx8bCxwPU9lKHIuZGF0YS5zdHlsZSl8fHt9O3IuZGF0YS5ub3JtYWxpemVkU3R5bGU9ZShwLl9fb2JfXyk/aCh7fSxwKTpwO3ZhciBkPWZ1bmN0aW9uKHQsZSl7dmFyIG4scj17fTtpZihlKWZvcih2YXIgaT10O2kuY29tcG9uZW50SW5zdGFuY2U7KShpPWkuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKSYmaS5kYXRhJiYobj1BZShpLmRhdGEpKSYmaChyLG4pOyhuPUFlKHQuZGF0YSkpJiZoKHIsbik7Zm9yKHZhciBvPXQ7bz1vLnBhcmVudDspby5kYXRhJiYobj1BZShvLmRhdGEpKSYmaChyLG4pO3JldHVybiByfShyLCEwKTtmb3IocyBpbiBmKXQoZFtzXSkmJkJpKGMscyxcIlwiKTtmb3IocyBpbiBkKShhPWRbc10pIT09ZltzXSYmQmkoYyxzLG51bGw9PWE/XCJcIjphKX19ZnVuY3Rpb24gVGUodCxlKXtpZihlJiYoZT1lLnRyaW0oKSkpaWYodC5jbGFzc0xpc3QpZS5pbmRleE9mKFwiIFwiKT4tMT9lLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gdC5jbGFzc0xpc3QuYWRkKGUpfSk6dC5jbGFzc0xpc3QuYWRkKGUpO2Vsc2V7dmFyIG49XCIgXCIrKHQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiO24uaW5kZXhPZihcIiBcIitlK1wiIFwiKTwwJiZ0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsKG4rZSkudHJpbSgpKX19ZnVuY3Rpb24gRWUodCxlKXtpZihlJiYoZT1lLnRyaW0oKSkpaWYodC5jbGFzc0xpc3QpZS5pbmRleE9mKFwiIFwiKT4tMT9lLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gdC5jbGFzc0xpc3QucmVtb3ZlKGUpfSk6dC5jbGFzc0xpc3QucmVtb3ZlKGUpLHQuY2xhc3NMaXN0Lmxlbmd0aHx8dC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtlbHNle2Zvcih2YXIgbj1cIiBcIisodC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIscj1cIiBcIitlK1wiIFwiO24uaW5kZXhPZihyKT49MDspbj1uLnJlcGxhY2UocixcIiBcIik7KG49bi50cmltKCkpP3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIixuKTp0LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpfX1mdW5jdGlvbiBqZSh0KXtpZih0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7dmFyIGU9e307cmV0dXJuITEhPT10LmNzcyYmaChlLEtpKHQubmFtZXx8XCJ2XCIpKSxoKGUsdCksZX1yZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9LaSh0KTp2b2lkIDB9fWZ1bmN0aW9uIE5lKHQpe1FpKGZ1bmN0aW9uKCl7UWkodCl9KX1mdW5jdGlvbiBJZSh0LGUpe3ZhciBuPXQuX3RyYW5zaXRpb25DbGFzc2VzfHwodC5fdHJhbnNpdGlvbkNsYXNzZXM9W10pO24uaW5kZXhPZihlKTwwJiYobi5wdXNoKGUpLFRlKHQsZSkpfWZ1bmN0aW9uIExlKHQsZSl7dC5fdHJhbnNpdGlvbkNsYXNzZXMmJmwodC5fdHJhbnNpdGlvbkNsYXNzZXMsZSksRWUodCxlKX1mdW5jdGlvbiBNZSh0LGUsbil7dmFyIHI9RGUodCxlKSxpPXIudHlwZSxvPXIudGltZW91dCxhPXIucHJvcENvdW50O2lmKCFpKXJldHVybiBuKCk7dmFyIHM9aT09PXFpP1ppOllpLGM9MCx1PWZ1bmN0aW9uKCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKHMsbCksbigpfSxsPWZ1bmN0aW9uKGUpe2UudGFyZ2V0PT09dCYmKytjPj1hJiZ1KCl9O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjPGEmJnUoKX0sbysxKSx0LmFkZEV2ZW50TGlzdGVuZXIocyxsKX1mdW5jdGlvbiBEZSh0LGUpe3ZhciBuLHI9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCksaT1yW0dpK1wiRGVsYXlcIl0uc3BsaXQoXCIsIFwiKSxvPXJbR2krXCJEdXJhdGlvblwiXS5zcGxpdChcIiwgXCIpLGE9UGUoaSxvKSxzPXJbWGkrXCJEZWxheVwiXS5zcGxpdChcIiwgXCIpLGM9cltYaStcIkR1cmF0aW9uXCJdLnNwbGl0KFwiLCBcIiksdT1QZShzLGMpLGw9MCxmPTA7ZT09PXFpP2E+MCYmKG49cWksbD1hLGY9by5sZW5ndGgpOmU9PT1XaT91PjAmJihuPVdpLGw9dSxmPWMubGVuZ3RoKTpmPShuPShsPU1hdGgubWF4KGEsdSkpPjA/YT51P3FpOldpOm51bGwpP249PT1xaT9vLmxlbmd0aDpjLmxlbmd0aDowO3JldHVybnt0eXBlOm4sdGltZW91dDpsLHByb3BDb3VudDpmLGhhc1RyYW5zZm9ybTpuPT09cWkmJnRvLnRlc3QocltHaStcIlByb3BlcnR5XCJdKX19ZnVuY3Rpb24gUGUodCxlKXtmb3IoO3QubGVuZ3RoPGUubGVuZ3RoOyl0PXQuY29uY2F0KHQpO3JldHVybiBNYXRoLm1heC5hcHBseShudWxsLGUubWFwKGZ1bmN0aW9uKGUsbil7cmV0dXJuIEZlKGUpK0ZlKHRbbl0pfSkpfWZ1bmN0aW9uIEZlKHQpe3JldHVybiAxZTMqTnVtYmVyKHQuc2xpY2UoMCwtMSkpfWZ1bmN0aW9uIFJlKG4scil7dmFyIG89bi5lbG07ZShvLl9sZWF2ZUNiKSYmKG8uX2xlYXZlQ2IuY2FuY2VsbGVkPSEwLG8uX2xlYXZlQ2IoKSk7dmFyIGE9amUobi5kYXRhLnRyYW5zaXRpb24pO2lmKCF0KGEpJiYhZShvLl9lbnRlckNiKSYmMT09PW8ubm9kZVR5cGUpe2Zvcih2YXIgcz1hLmNzcyx1PWEudHlwZSxsPWEuZW50ZXJDbGFzcyxmPWEuZW50ZXJUb0NsYXNzLHA9YS5lbnRlckFjdGl2ZUNsYXNzLGQ9YS5hcHBlYXJDbGFzcyx2PWEuYXBwZWFyVG9DbGFzcyxoPWEuYXBwZWFyQWN0aXZlQ2xhc3MsbT1hLmJlZm9yZUVudGVyLHk9YS5lbnRlcixnPWEuYWZ0ZXJFbnRlcixfPWEuZW50ZXJDYW5jZWxsZWQsJD1hLmJlZm9yZUFwcGVhcixDPWEuYXBwZWFyLHc9YS5hZnRlckFwcGVhcix4PWEuYXBwZWFyQ2FuY2VsbGVkLGs9YS5kdXJhdGlvbixBPVByLE89UHIuJHZub2RlO08mJk8ucGFyZW50OylBPShPPU8ucGFyZW50KS5jb250ZXh0O3ZhciBTPSFBLl9pc01vdW50ZWR8fCFuLmlzUm9vdEluc2VydDtpZighU3x8Q3x8XCJcIj09PUMpe3ZhciBUPVMmJmQ/ZDpsLEU9UyYmaD9oOnAsaj1TJiZ2P3Y6ZixOPVM/JHx8bTptLEk9UyYmXCJmdW5jdGlvblwiPT10eXBlb2YgQz9DOnksTD1TP3d8fGc6ZyxNPVM/eHx8XzpfLEQ9YyhpKGspP2suZW50ZXI6ayksUD0hMSE9PXMmJiF0cixGPVVlKEkpLFI9by5fZW50ZXJDYj1iKGZ1bmN0aW9uKCl7UCYmKExlKG8saiksTGUobyxFKSksUi5jYW5jZWxsZWQ/KFAmJkxlKG8sVCksTSYmTShvKSk6TCYmTChvKSxvLl9lbnRlckNiPW51bGx9KTtuLmRhdGEuc2hvd3x8WShuLFwiaW5zZXJ0XCIsZnVuY3Rpb24oKXt2YXIgdD1vLnBhcmVudE5vZGUsZT10JiZ0Ll9wZW5kaW5nJiZ0Ll9wZW5kaW5nW24ua2V5XTtlJiZlLnRhZz09PW4udGFnJiZlLmVsbS5fbGVhdmVDYiYmZS5lbG0uX2xlYXZlQ2IoKSxJJiZJKG8sUil9KSxOJiZOKG8pLFAmJihJZShvLFQpLEllKG8sRSksTmUoZnVuY3Rpb24oKXtJZShvLGopLExlKG8sVCksUi5jYW5jZWxsZWR8fEZ8fChCZShEKT9zZXRUaW1lb3V0KFIsRCk6TWUobyx1LFIpKX0pKSxuLmRhdGEuc2hvdyYmKHImJnIoKSxJJiZJKG8sUikpLFB8fEZ8fFIoKX19fWZ1bmN0aW9uIEhlKG4scil7ZnVuY3Rpb24gbygpe3guY2FuY2VsbGVkfHwobi5kYXRhLnNob3d8fCgoYS5wYXJlbnROb2RlLl9wZW5kaW5nfHwoYS5wYXJlbnROb2RlLl9wZW5kaW5nPXt9KSlbbi5rZXldPW4pLHYmJnYoYSksJCYmKEllKGEsZiksSWUoYSxkKSxOZShmdW5jdGlvbigpe0llKGEscCksTGUoYSxmKSx4LmNhbmNlbGxlZHx8Q3x8KEJlKHcpP3NldFRpbWVvdXQoeCx3KTpNZShhLGwseCkpfSkpLGgmJmgoYSx4KSwkfHxDfHx4KCkpfXZhciBhPW4uZWxtO2UoYS5fZW50ZXJDYikmJihhLl9lbnRlckNiLmNhbmNlbGxlZD0hMCxhLl9lbnRlckNiKCkpO3ZhciBzPWplKG4uZGF0YS50cmFuc2l0aW9uKTtpZih0KHMpfHwxIT09YS5ub2RlVHlwZSlyZXR1cm4gcigpO2lmKCFlKGEuX2xlYXZlQ2IpKXt2YXIgdT1zLmNzcyxsPXMudHlwZSxmPXMubGVhdmVDbGFzcyxwPXMubGVhdmVUb0NsYXNzLGQ9cy5sZWF2ZUFjdGl2ZUNsYXNzLHY9cy5iZWZvcmVMZWF2ZSxoPXMubGVhdmUsbT1zLmFmdGVyTGVhdmUseT1zLmxlYXZlQ2FuY2VsbGVkLGc9cy5kZWxheUxlYXZlLF89cy5kdXJhdGlvbiwkPSExIT09dSYmIXRyLEM9VWUoaCksdz1jKGkoXyk/Xy5sZWF2ZTpfKSx4PWEuX2xlYXZlQ2I9YihmdW5jdGlvbigpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLl9wZW5kaW5nJiYoYS5wYXJlbnROb2RlLl9wZW5kaW5nW24ua2V5XT1udWxsKSwkJiYoTGUoYSxwKSxMZShhLGQpKSx4LmNhbmNlbGxlZD8oJCYmTGUoYSxmKSx5JiZ5KGEpKToocigpLG0mJm0oYSkpLGEuX2xlYXZlQ2I9bnVsbH0pO2c/ZyhvKTpvKCl9fWZ1bmN0aW9uIEJlKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiYhaXNOYU4odCl9ZnVuY3Rpb24gVWUobil7aWYodChuKSlyZXR1cm4hMTt2YXIgcj1uLmZucztyZXR1cm4gZShyKT9VZShBcnJheS5pc0FycmF5KHIpP3JbMF06cik6KG4uX2xlbmd0aHx8bi5sZW5ndGgpPjF9ZnVuY3Rpb24gVmUodCxlKXshMCE9PWUuZGF0YS5zaG93JiZSZShlKX1mdW5jdGlvbiB6ZSh0LGUsbil7S2UodCxlLG4pLChRbnx8ZXIpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7S2UodCxlLG4pfSwwKX1mdW5jdGlvbiBLZSh0LGUsbil7dmFyIHI9ZS52YWx1ZSxpPXQubXVsdGlwbGU7aWYoIWl8fEFycmF5LmlzQXJyYXkocikpe2Zvcih2YXIgbyxhLHM9MCxjPXQub3B0aW9ucy5sZW5ndGg7czxjO3MrKylpZihhPXQub3B0aW9uc1tzXSxpKW89XyhyLHFlKGEpKT4tMSxhLnNlbGVjdGVkIT09byYmKGEuc2VsZWN0ZWQ9byk7ZWxzZSBpZihnKHFlKGEpLHIpKXJldHVybiB2b2lkKHQuc2VsZWN0ZWRJbmRleCE9PXMmJih0LnNlbGVjdGVkSW5kZXg9cykpO2l8fCh0LnNlbGVjdGVkSW5kZXg9LTEpfX1mdW5jdGlvbiBKZSh0LGUpe3JldHVybiBlLmV2ZXJ5KGZ1bmN0aW9uKGUpe3JldHVybiFnKGUsdCl9KX1mdW5jdGlvbiBxZSh0KXtyZXR1cm5cIl92YWx1ZVwiaW4gdD90Ll92YWx1ZTp0LnZhbHVlfWZ1bmN0aW9uIFdlKHQpe3QudGFyZ2V0LmNvbXBvc2luZz0hMH1mdW5jdGlvbiBHZSh0KXt0LnRhcmdldC5jb21wb3NpbmcmJih0LnRhcmdldC5jb21wb3Npbmc9ITEsWmUodC50YXJnZXQsXCJpbnB1dFwiKSl9ZnVuY3Rpb24gWmUodCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7bi5pbml0RXZlbnQoZSwhMCwhMCksdC5kaXNwYXRjaEV2ZW50KG4pfWZ1bmN0aW9uIFhlKHQpe3JldHVybiF0LmNvbXBvbmVudEluc3RhbmNlfHx0LmRhdGEmJnQuZGF0YS50cmFuc2l0aW9uP3Q6WGUodC5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUpfWZ1bmN0aW9uIFllKHQpe3ZhciBlPXQmJnQuY29tcG9uZW50T3B0aW9ucztyZXR1cm4gZSYmZS5DdG9yLm9wdGlvbnMuYWJzdHJhY3Q/WWUoaXQoZS5jaGlsZHJlbikpOnR9ZnVuY3Rpb24gUWUodCl7dmFyIGU9e30sbj10LiRvcHRpb25zO2Zvcih2YXIgciBpbiBuLnByb3BzRGF0YSllW3JdPXRbcl07dmFyIGk9bi5fcGFyZW50TGlzdGVuZXJzO2Zvcih2YXIgbyBpbiBpKWVbUG4obyldPWlbb107cmV0dXJuIGV9ZnVuY3Rpb24gdG4odCxlKXtpZigvXFxkLWtlZXAtYWxpdmUkLy50ZXN0KGUudGFnKSlyZXR1cm4gdChcImtlZXAtYWxpdmVcIix7cHJvcHM6ZS5jb21wb25lbnRPcHRpb25zLnByb3BzRGF0YX0pfWZ1bmN0aW9uIGVuKHQpe3QuZWxtLl9tb3ZlQ2ImJnQuZWxtLl9tb3ZlQ2IoKSx0LmVsbS5fZW50ZXJDYiYmdC5lbG0uX2VudGVyQ2IoKX1mdW5jdGlvbiBubih0KXt0LmRhdGEubmV3UG9zPXQuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpfWZ1bmN0aW9uIHJuKHQpe3ZhciBlPXQuZGF0YS5wb3Msbj10LmRhdGEubmV3UG9zLHI9ZS5sZWZ0LW4ubGVmdCxpPWUudG9wLW4udG9wO2lmKHJ8fGkpe3QuZGF0YS5tb3ZlZD0hMDt2YXIgbz10LmVsbS5zdHlsZTtvLnRyYW5zZm9ybT1vLldlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZShcIityK1wicHgsXCIraStcInB4KVwiLG8udHJhbnNpdGlvbkR1cmF0aW9uPVwiMHNcIn19ZnVuY3Rpb24gb24odCxlKXt2YXIgbj1lP3pvOlZvO3JldHVybiB0LnJlcGxhY2UobixmdW5jdGlvbih0KXtyZXR1cm4gVW9bdF19KX1mdW5jdGlvbiBhbih0LGUsbil7cmV0dXJue3R5cGU6MSx0YWc6dCxhdHRyc0xpc3Q6ZSxhdHRyc01hcDpmdW5jdGlvbih0KXtmb3IodmFyIGU9e30sbj0wLHI9dC5sZW5ndGg7bjxyO24rKyllW3Rbbl0ubmFtZV09dFtuXS52YWx1ZTtyZXR1cm4gZX0oZSkscGFyZW50Om4sY2hpbGRyZW46W119fWZ1bmN0aW9uIHNuKHQsZSl7ZnVuY3Rpb24gbih0KXt0LnByZSYmKHM9ITEpLExvKHQudGFnKSYmKGM9ITEpO2Zvcih2YXIgbj0wO248SW8ubGVuZ3RoO24rKylJb1tuXSh0LGUpfVRvPWUud2Fybnx8c2UsTG89ZS5pc1ByZVRhZ3x8Qm4sTW89ZS5tdXN0VXNlUHJvcHx8Qm4sRG89ZS5nZXRUYWdOYW1lc3BhY2V8fEJuLGpvPWNlKGUubW9kdWxlcyxcInRyYW5zZm9ybU5vZGVcIiksTm89Y2UoZS5tb2R1bGVzLFwicHJlVHJhbnNmb3JtTm9kZVwiKSxJbz1jZShlLm1vZHVsZXMsXCJwb3N0VHJhbnNmb3JtTm9kZVwiKSxFbz1lLmRlbGltaXRlcnM7dmFyIHIsaSxvPVtdLGE9ITEhPT1lLnByZXNlcnZlV2hpdGVzcGFjZSxzPSExLGM9ITE7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbihlKXtsKz1lLHQ9dC5zdWJzdHJpbmcoZSl9ZnVuY3Rpb24gcih0LG4scil7dmFyIGkscztpZihudWxsPT1uJiYobj1sKSxudWxsPT1yJiYocj1sKSx0JiYocz10LnRvTG93ZXJDYXNlKCkpLHQpZm9yKGk9YS5sZW5ndGgtMTtpPj0wJiZhW2ldLmxvd2VyQ2FzZWRUYWchPT1zO2ktLSk7ZWxzZSBpPTA7aWYoaT49MCl7Zm9yKHZhciBjPWEubGVuZ3RoLTE7Yz49aTtjLS0pZS5lbmQmJmUuZW5kKGFbY10udGFnLG4scik7YS5sZW5ndGg9aSxvPWkmJmFbaS0xXS50YWd9ZWxzZVwiYnJcIj09PXM/ZS5zdGFydCYmZS5zdGFydCh0LFtdLCEwLG4scik6XCJwXCI9PT1zJiYoZS5zdGFydCYmZS5zdGFydCh0LFtdLCExLG4sciksZS5lbmQmJmUuZW5kKHQsbixyKSl9Zm9yKHZhciBpLG8sYT1bXSxzPWUuZXhwZWN0SFRNTCxjPWUuaXNVbmFyeVRhZ3x8Qm4sdT1lLmNhbkJlTGVmdE9wZW5UYWd8fEJuLGw9MDt0Oyl7aWYoaT10LG8mJkhvKG8pKXt2YXIgZj0wLHA9by50b0xvd2VyQ2FzZSgpLGQ9Qm9bcF18fChCb1twXT1uZXcgUmVnRXhwKFwiKFtcXFxcc1xcXFxTXSo/KSg8L1wiK3ArXCJbXj5dKj4pXCIsXCJpXCIpKSx2PXQucmVwbGFjZShkLGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gZj1yLmxlbmd0aCxIbyhwKXx8XCJub3NjcmlwdFwiPT09cHx8KG49bi5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+L2csXCIkMVwiKS5yZXBsYWNlKC88IVxcW0NEQVRBXFxbKFtcXHNcXFNdKj8pXV0+L2csXCIkMVwiKSksSm8ocCxuKSYmKG49bi5zbGljZSgxKSksZS5jaGFycyYmZS5jaGFycyhuKSxcIlwifSk7bCs9dC5sZW5ndGgtdi5sZW5ndGgsdD12LHIocCxsLWYsbCl9ZWxzZXt2YXIgaD10LmluZGV4T2YoXCI8XCIpO2lmKDA9PT1oKXtpZihBby50ZXN0KHQpKXt2YXIgbT10LmluZGV4T2YoXCItLVxceDNlXCIpO2lmKG0+PTApe2Uuc2hvdWxkS2VlcENvbW1lbnQmJmUuY29tbWVudCh0LnN1YnN0cmluZyg0LG0pKSxuKG0rMyk7Y29udGludWV9fWlmKE9vLnRlc3QodCkpe3ZhciB5PXQuaW5kZXhPZihcIl0+XCIpO2lmKHk+PTApe24oeSsyKTtjb250aW51ZX19dmFyIGc9dC5tYXRjaChrbyk7aWYoZyl7bihnWzBdLmxlbmd0aCk7Y29udGludWV9dmFyIF89dC5tYXRjaCh4byk7aWYoXyl7dmFyIGI9bDtuKF9bMF0ubGVuZ3RoKSxyKF9bMV0sYixsKTtjb250aW51ZX12YXIgJD1mdW5jdGlvbigpe3ZhciBlPXQubWF0Y2goQ28pO2lmKGUpe3ZhciByPXt0YWdOYW1lOmVbMV0sYXR0cnM6W10sc3RhcnQ6bH07bihlWzBdLmxlbmd0aCk7Zm9yKHZhciBpLG87IShpPXQubWF0Y2god28pKSYmKG89dC5tYXRjaChfbykpOyluKG9bMF0ubGVuZ3RoKSxyLmF0dHJzLnB1c2gobyk7aWYoaSlyZXR1cm4gci51bmFyeVNsYXNoPWlbMV0sbihpWzBdLmxlbmd0aCksci5lbmQ9bCxyfX0oKTtpZigkKXshZnVuY3Rpb24odCl7dmFyIG49dC50YWdOYW1lLGk9dC51bmFyeVNsYXNoO3MmJihcInBcIj09PW8mJmdvKG4pJiZyKG8pLHUobikmJm89PT1uJiZyKG4pKTtmb3IodmFyIGw9YyhuKXx8ISFpLGY9dC5hdHRycy5sZW5ndGgscD1uZXcgQXJyYXkoZiksZD0wO2Q8ZjtkKyspe3ZhciB2PXQuYXR0cnNbZF07U28mJi0xPT09dlswXS5pbmRleE9mKCdcIlwiJykmJihcIlwiPT09dlszXSYmZGVsZXRlIHZbM10sXCJcIj09PXZbNF0mJmRlbGV0ZSB2WzRdLFwiXCI9PT12WzVdJiZkZWxldGUgdls1XSk7dmFyIGg9dlszXXx8dls0XXx8dls1XXx8XCJcIixtPVwiYVwiPT09biYmXCJocmVmXCI9PT12WzFdP2Uuc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmOmUuc2hvdWxkRGVjb2RlTmV3bGluZXM7cFtkXT17bmFtZTp2WzFdLHZhbHVlOm9uKGgsbSl9fWx8fChhLnB1c2goe3RhZzpuLGxvd2VyQ2FzZWRUYWc6bi50b0xvd2VyQ2FzZSgpLGF0dHJzOnB9KSxvPW4pLGUuc3RhcnQmJmUuc3RhcnQobixwLGwsdC5zdGFydCx0LmVuZCl9KCQpLEpvKG8sdCkmJm4oMSk7Y29udGludWV9fXZhciBDPXZvaWQgMCx3PXZvaWQgMCx4PXZvaWQgMDtpZihoPj0wKXtmb3Iodz10LnNsaWNlKGgpOyEoeG8udGVzdCh3KXx8Q28udGVzdCh3KXx8QW8udGVzdCh3KXx8T28udGVzdCh3KXx8KHg9dy5pbmRleE9mKFwiPFwiLDEpKTwwKTspaCs9eCx3PXQuc2xpY2UoaCk7Qz10LnN1YnN0cmluZygwLGgpLG4oaCl9aDwwJiYoQz10LHQ9XCJcIiksZS5jaGFycyYmQyYmZS5jaGFycyhDKX1pZih0PT09aSl7ZS5jaGFycyYmZS5jaGFycyh0KTticmVha319cigpfSh0LHt3YXJuOlRvLGV4cGVjdEhUTUw6ZS5leHBlY3RIVE1MLGlzVW5hcnlUYWc6ZS5pc1VuYXJ5VGFnLGNhbkJlTGVmdE9wZW5UYWc6ZS5jYW5CZUxlZnRPcGVuVGFnLHNob3VsZERlY29kZU5ld2xpbmVzOmUuc2hvdWxkRGVjb2RlTmV3bGluZXMsc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmOmUuc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmLHNob3VsZEtlZXBDb21tZW50OmUuY29tbWVudHMsc3RhcnQ6ZnVuY3Rpb24odCxhLHUpe3ZhciBsPWkmJmkubnN8fERvKHQpO1FuJiZcInN2Z1wiPT09bCYmKGE9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtuYS50ZXN0KHIubmFtZSl8fChyLm5hbWU9ci5uYW1lLnJlcGxhY2UocmEsXCJcIiksZS5wdXNoKHIpKX1yZXR1cm4gZX0oYSkpO3ZhciBmPWFuKHQsYSxpKTtsJiYoZi5ucz1sKSxmdW5jdGlvbih0KXtyZXR1cm5cInN0eWxlXCI9PT10LnRhZ3x8XCJzY3JpcHRcIj09PXQudGFnJiYoIXQuYXR0cnNNYXAudHlwZXx8XCJ0ZXh0L2phdmFzY3JpcHRcIj09PXQuYXR0cnNNYXAudHlwZSl9KGYpJiYhdXIoKSYmKGYuZm9yYmlkZGVuPSEwKTtmb3IodmFyIHA9MDtwPE5vLmxlbmd0aDtwKyspZj1Ob1twXShmLGUpfHxmO2lmKHN8fCghZnVuY3Rpb24odCl7bnVsbCE9aGUodCxcInYtcHJlXCIpJiYodC5wcmU9ITApfShmKSxmLnByZSYmKHM9ITApKSxMbyhmLnRhZykmJihjPSEwKSxzP2Z1bmN0aW9uKHQpe3ZhciBlPXQuYXR0cnNMaXN0Lmxlbmd0aDtpZihlKWZvcih2YXIgbj10LmF0dHJzPW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyluW3JdPXtuYW1lOnQuYXR0cnNMaXN0W3JdLm5hbWUsdmFsdWU6SlNPTi5zdHJpbmdpZnkodC5hdHRyc0xpc3Rbcl0udmFsdWUpfTtlbHNlIHQucHJlfHwodC5wbGFpbj0hMCl9KGYpOmYucHJvY2Vzc2VkfHwodW4oZiksZnVuY3Rpb24odCl7dmFyIGU9aGUodCxcInYtaWZcIik7aWYoZSl0LmlmPWUsbG4odCx7ZXhwOmUsYmxvY2s6dH0pO2Vsc2V7bnVsbCE9aGUodCxcInYtZWxzZVwiKSYmKHQuZWxzZT0hMCk7dmFyIG49aGUodCxcInYtZWxzZS1pZlwiKTtuJiYodC5lbHNlaWY9bil9fShmKSxmdW5jdGlvbih0KXtudWxsIT1oZSh0LFwidi1vbmNlXCIpJiYodC5vbmNlPSEwKX0oZiksY24oZixlKSkscj9vLmxlbmd0aHx8ci5pZiYmKGYuZWxzZWlmfHxmLmVsc2UpJiZsbihyLHtleHA6Zi5lbHNlaWYsYmxvY2s6Zn0pOnI9ZixpJiYhZi5mb3JiaWRkZW4paWYoZi5lbHNlaWZ8fGYuZWxzZSkhZnVuY3Rpb24odCxlKXt2YXIgbj1mdW5jdGlvbih0KXt2YXIgZT10Lmxlbmd0aDtmb3IoO2UtLTspe2lmKDE9PT10W2VdLnR5cGUpcmV0dXJuIHRbZV07dC5wb3AoKX19KGUuY2hpbGRyZW4pO24mJm4uaWYmJmxuKG4se2V4cDp0LmVsc2VpZixibG9jazp0fSl9KGYsaSk7ZWxzZSBpZihmLnNsb3RTY29wZSl7aS5wbGFpbj0hMTt2YXIgZD1mLnNsb3RUYXJnZXR8fCdcImRlZmF1bHRcIic7KGkuc2NvcGVkU2xvdHN8fChpLnNjb3BlZFNsb3RzPXt9KSlbZF09Zn1lbHNlIGkuY2hpbGRyZW4ucHVzaChmKSxmLnBhcmVudD1pO3U/bihmKTooaT1mLG8ucHVzaChmKSl9LGVuZDpmdW5jdGlvbigpe3ZhciB0PW9bby5sZW5ndGgtMV0sZT10LmNoaWxkcmVuW3QuY2hpbGRyZW4ubGVuZ3RoLTFdO2UmJjM9PT1lLnR5cGUmJlwiIFwiPT09ZS50ZXh0JiYhYyYmdC5jaGlsZHJlbi5wb3AoKSxvLmxlbmd0aC09MSxpPW9bby5sZW5ndGgtMV0sbih0KX0sY2hhcnM6ZnVuY3Rpb24odCl7aWYoaSYmKCFRbnx8XCJ0ZXh0YXJlYVwiIT09aS50YWd8fGkuYXR0cnNNYXAucGxhY2Vob2xkZXIhPT10KSl7dmFyIGU9aS5jaGlsZHJlbjtpZih0PWN8fHQudHJpbSgpP2Z1bmN0aW9uKHQpe3JldHVyblwic2NyaXB0XCI9PT10LnRhZ3x8XCJzdHlsZVwiPT09dC50YWd9KGkpP3Q6ZWEodCk6YSYmZS5sZW5ndGg/XCIgXCI6XCJcIil7dmFyIG47IXMmJlwiIFwiIT09dCYmKG49ZnVuY3Rpb24odCxlKXt2YXIgbj1lP2ZvKGUpOnVvO2lmKG4udGVzdCh0KSl7Zm9yKHZhciByLGksbyxhPVtdLHM9W10sYz1uLmxhc3RJbmRleD0wO3I9bi5leGVjKHQpOyl7KGk9ci5pbmRleCk+YyYmKHMucHVzaChvPXQuc2xpY2UoYyxpKSksYS5wdXNoKEpTT04uc3RyaW5naWZ5KG8pKSk7dmFyIHU9YWUoclsxXS50cmltKCkpO2EucHVzaChcIl9zKFwiK3UrXCIpXCIpLHMucHVzaCh7XCJAYmluZGluZ1wiOnV9KSxjPWkrclswXS5sZW5ndGh9cmV0dXJuIGM8dC5sZW5ndGgmJihzLnB1c2gobz10LnNsaWNlKGMpKSxhLnB1c2goSlNPTi5zdHJpbmdpZnkobykpKSx7ZXhwcmVzc2lvbjphLmpvaW4oXCIrXCIpLHRva2VuczpzfX19KHQsRW8pKT9lLnB1c2goe3R5cGU6MixleHByZXNzaW9uOm4uZXhwcmVzc2lvbix0b2tlbnM6bi50b2tlbnMsdGV4dDp0fSk6XCIgXCI9PT10JiZlLmxlbmd0aCYmXCIgXCI9PT1lW2UubGVuZ3RoLTFdLnRleHR8fGUucHVzaCh7dHlwZTozLHRleHQ6dH0pfX19LGNvbW1lbnQ6ZnVuY3Rpb24odCl7aS5jaGlsZHJlbi5wdXNoKHt0eXBlOjMsdGV4dDp0LGlzQ29tbWVudDohMH0pfX0pLHJ9ZnVuY3Rpb24gY24odCxlKXshZnVuY3Rpb24odCl7dmFyIGU9dmUodCxcImtleVwiKTtlJiYodC5rZXk9ZSl9KHQpLHQucGxhaW49IXQua2V5JiYhdC5hdHRyc0xpc3QubGVuZ3RoLGZ1bmN0aW9uKHQpe3ZhciBlPXZlKHQsXCJyZWZcIik7ZSYmKHQucmVmPWUsdC5yZWZJbkZvcj1mdW5jdGlvbih0KXt2YXIgZT10O2Zvcig7ZTspe2lmKHZvaWQgMCE9PWUuZm9yKXJldHVybiEwO2U9ZS5wYXJlbnR9cmV0dXJuITF9KHQpKX0odCksZnVuY3Rpb24odCl7aWYoXCJzbG90XCI9PT10LnRhZyl0LnNsb3ROYW1lPXZlKHQsXCJuYW1lXCIpO2Vsc2V7dmFyIGU7XCJ0ZW1wbGF0ZVwiPT09dC50YWc/KGU9aGUodCxcInNjb3BlXCIpLHQuc2xvdFNjb3BlPWV8fGhlKHQsXCJzbG90LXNjb3BlXCIpKTooZT1oZSh0LFwic2xvdC1zY29wZVwiKSkmJih0LnNsb3RTY29wZT1lKTt2YXIgbj12ZSh0LFwic2xvdFwiKTtuJiYodC5zbG90VGFyZ2V0PSdcIlwiJz09PW4/J1wiZGVmYXVsdFwiJzpuLFwidGVtcGxhdGVcIj09PXQudGFnfHx0LnNsb3RTY29wZXx8bGUodCxcInNsb3RcIixuKSl9fSh0KSxmdW5jdGlvbih0KXt2YXIgZTsoZT12ZSh0LFwiaXNcIikpJiYodC5jb21wb25lbnQ9ZSk7bnVsbCE9aGUodCxcImlubGluZS10ZW1wbGF0ZVwiKSYmKHQuaW5saW5lVGVtcGxhdGU9ITApfSh0KTtmb3IodmFyIG49MDtuPGpvLmxlbmd0aDtuKyspdD1qb1tuXSh0LGUpfHx0OyFmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyxjPXQuYXR0cnNMaXN0O2ZvcihlPTAsbj1jLmxlbmd0aDtlPG47ZSsrKWlmKHI9aT1jW2VdLm5hbWUsbz1jW2VdLnZhbHVlLFdvLnRlc3QocikpaWYodC5oYXNCaW5kaW5ncz0hMCwoYT1mdW5jdGlvbih0KXt2YXIgZT10Lm1hdGNoKHRhKTtpZihlKXt2YXIgbj17fTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe25bdC5zbGljZSgxKV09ITB9KSxufX0ocikpJiYocj1yLnJlcGxhY2UodGEsXCJcIikpLFFvLnRlc3Qocikpcj1yLnJlcGxhY2UoUW8sXCJcIiksbz1hZShvKSxzPSExLGEmJihhLnByb3AmJihzPSEwLFwiaW5uZXJIdG1sXCI9PT0ocj1QbihyKSkmJihyPVwiaW5uZXJIVE1MXCIpKSxhLmNhbWVsJiYocj1QbihyKSksYS5zeW5jJiZkZSh0LFwidXBkYXRlOlwiK1BuKHIpLHllKG8sXCIkZXZlbnRcIikpKSxzfHwhdC5jb21wb25lbnQmJk1vKHQudGFnLHQuYXR0cnNNYXAudHlwZSxyKT91ZSh0LHIsbyk6bGUodCxyLG8pO2Vsc2UgaWYocW8udGVzdChyKSlyPXIucmVwbGFjZShxbyxcIlwiKSxkZSh0LHIsbyxhLCExKTtlbHNle3ZhciB1PShyPXIucmVwbGFjZShXbyxcIlwiKSkubWF0Y2goWW8pLGw9dSYmdVsxXTtsJiYocj1yLnNsaWNlKDAsLShsLmxlbmd0aCsxKSkpLHBlKHQscixpLG8sbCxhKX1lbHNlIGxlKHQscixKU09OLnN0cmluZ2lmeShvKSksIXQuY29tcG9uZW50JiZcIm11dGVkXCI9PT1yJiZNbyh0LnRhZyx0LmF0dHJzTWFwLnR5cGUscikmJnVlKHQscixcInRydWVcIil9KHQpfWZ1bmN0aW9uIHVuKHQpe3ZhciBlO2lmKGU9aGUodCxcInYtZm9yXCIpKXt2YXIgbj1mdW5jdGlvbih0KXt2YXIgZT10Lm1hdGNoKEdvKTtpZighZSlyZXR1cm47dmFyIG49e307bi5mb3I9ZVsyXS50cmltKCk7dmFyIHI9ZVsxXS50cmltKCkucmVwbGFjZShYbyxcIlwiKSxpPXIubWF0Y2goWm8pO2k/KG4uYWxpYXM9ci5yZXBsYWNlKFpvLFwiXCIpLG4uaXRlcmF0b3IxPWlbMV0udHJpbSgpLGlbMl0mJihuLml0ZXJhdG9yMj1pWzJdLnRyaW0oKSkpOm4uYWxpYXM9cjtyZXR1cm4gbn0oZSk7biYmaCh0LG4pfX1mdW5jdGlvbiBsbih0LGUpe3QuaWZDb25kaXRpb25zfHwodC5pZkNvbmRpdGlvbnM9W10pLHQuaWZDb25kaXRpb25zLnB1c2goZSl9ZnVuY3Rpb24gZm4odCl7cmV0dXJuIGFuKHQudGFnLHQuYXR0cnNMaXN0LnNsaWNlKCksdC5wYXJlbnQpfWZ1bmN0aW9uIHBuKHQpe2lmKHQuc3RhdGljPWZ1bmN0aW9uKHQpe2lmKDI9PT10LnR5cGUpcmV0dXJuITE7aWYoMz09PXQudHlwZSlyZXR1cm4hMDtyZXR1cm4hKCF0LnByZSYmKHQuaGFzQmluZGluZ3N8fHQuaWZ8fHQuZm9yfHxJbih0LnRhZyl8fCFGbyh0LnRhZyl8fGZ1bmN0aW9uKHQpe2Zvcig7dC5wYXJlbnQ7KXtpZihcInRlbXBsYXRlXCIhPT0odD10LnBhcmVudCkudGFnKXJldHVybiExO2lmKHQuZm9yKXJldHVybiEwfXJldHVybiExfSh0KXx8IU9iamVjdC5rZXlzKHQpLmV2ZXJ5KFBvKSkpfSh0KSwxPT09dC50eXBlKXtpZighRm8odC50YWcpJiZcInNsb3RcIiE9PXQudGFnJiZudWxsPT10LmF0dHJzTWFwW1wiaW5saW5lLXRlbXBsYXRlXCJdKXJldHVybjtmb3IodmFyIGU9MCxuPXQuY2hpbGRyZW4ubGVuZ3RoO2U8bjtlKyspe3ZhciByPXQuY2hpbGRyZW5bZV07cG4ociksci5zdGF0aWN8fCh0LnN0YXRpYz0hMSl9aWYodC5pZkNvbmRpdGlvbnMpZm9yKHZhciBpPTEsbz10LmlmQ29uZGl0aW9ucy5sZW5ndGg7aTxvO2krKyl7dmFyIGE9dC5pZkNvbmRpdGlvbnNbaV0uYmxvY2s7cG4oYSksYS5zdGF0aWN8fCh0LnN0YXRpYz0hMSl9fX1mdW5jdGlvbiBkbih0LGUpe2lmKDE9PT10LnR5cGUpe2lmKCh0LnN0YXRpY3x8dC5vbmNlKSYmKHQuc3RhdGljSW5Gb3I9ZSksdC5zdGF0aWMmJnQuY2hpbGRyZW4ubGVuZ3RoJiYoMSE9PXQuY2hpbGRyZW4ubGVuZ3RofHwzIT09dC5jaGlsZHJlblswXS50eXBlKSlyZXR1cm4gdm9pZCh0LnN0YXRpY1Jvb3Q9ITApO2lmKHQuc3RhdGljUm9vdD0hMSx0LmNoaWxkcmVuKWZvcih2YXIgbj0wLHI9dC5jaGlsZHJlbi5sZW5ndGg7bjxyO24rKylkbih0LmNoaWxkcmVuW25dLGV8fCEhdC5mb3IpO2lmKHQuaWZDb25kaXRpb25zKWZvcih2YXIgaT0xLG89dC5pZkNvbmRpdGlvbnMubGVuZ3RoO2k8bztpKyspZG4odC5pZkNvbmRpdGlvbnNbaV0uYmxvY2ssZSl9fWZ1bmN0aW9uIHZuKHQsZSxuKXt2YXIgcj1lP1wibmF0aXZlT246e1wiOlwib246e1wiO2Zvcih2YXIgaSBpbiB0KXIrPSdcIicraSsnXCI6JytobihpLHRbaV0pK1wiLFwiO3JldHVybiByLnNsaWNlKDAsLTEpK1wifVwifWZ1bmN0aW9uIGhuKHQsZSl7aWYoIWUpcmV0dXJuXCJmdW5jdGlvbigpe31cIjtpZihBcnJheS5pc0FycmF5KGUpKXJldHVyblwiW1wiK2UubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBobih0LGUpfSkuam9pbihcIixcIikrXCJdXCI7dmFyIG49Y2EudGVzdChlLnZhbHVlKSxyPXNhLnRlc3QoZS52YWx1ZSk7aWYoZS5tb2RpZmllcnMpe3ZhciBpPVwiXCIsbz1cIlwiLGE9W107Zm9yKHZhciBzIGluIGUubW9kaWZpZXJzKWlmKGZhW3NdKW8rPWZhW3NdLHVhW3NdJiZhLnB1c2gocyk7ZWxzZSBpZihcImV4YWN0XCI9PT1zKXt2YXIgYz1lLm1vZGlmaWVycztvKz1sYShbXCJjdHJsXCIsXCJzaGlmdFwiLFwiYWx0XCIsXCJtZXRhXCJdLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4hY1t0XX0pLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIiRldmVudC5cIit0K1wiS2V5XCJ9KS5qb2luKFwifHxcIikpfWVsc2UgYS5wdXNoKHMpO2EubGVuZ3RoJiYoaSs9ZnVuY3Rpb24odCl7cmV0dXJuXCJpZighKCdidXR0b24nIGluICRldmVudCkmJlwiK3QubWFwKG1uKS5qb2luKFwiJiZcIikrXCIpcmV0dXJuIG51bGw7XCJ9KGEpKSxvJiYoaSs9byk7cmV0dXJuXCJmdW5jdGlvbigkZXZlbnQpe1wiK2krKG4/ZS52YWx1ZStcIigkZXZlbnQpXCI6cj9cIihcIitlLnZhbHVlK1wiKSgkZXZlbnQpXCI6ZS52YWx1ZSkrXCJ9XCJ9cmV0dXJuIG58fHI/ZS52YWx1ZTpcImZ1bmN0aW9uKCRldmVudCl7XCIrZS52YWx1ZStcIn1cIn1mdW5jdGlvbiBtbih0KXt2YXIgZT1wYXJzZUludCh0LDEwKTtpZihlKXJldHVyblwiJGV2ZW50LmtleUNvZGUhPT1cIitlO3ZhciBuPXVhW3RdO3JldHVyblwiX2soJGV2ZW50LmtleUNvZGUsXCIrSlNPTi5zdHJpbmdpZnkodCkrXCIsXCIrSlNPTi5zdHJpbmdpZnkobikrXCIsJGV2ZW50LmtleSlcIn1mdW5jdGlvbiB5bih0LGUpe3ZhciBuPW5ldyBkYShlKTtyZXR1cm57cmVuZGVyOlwid2l0aCh0aGlzKXtyZXR1cm4gXCIrKHQ/Z24odCxuKTonX2MoXCJkaXZcIiknKStcIn1cIixzdGF0aWNSZW5kZXJGbnM6bi5zdGF0aWNSZW5kZXJGbnN9fWZ1bmN0aW9uIGduKHQsZSl7aWYodC5zdGF0aWNSb290JiYhdC5zdGF0aWNQcm9jZXNzZWQpcmV0dXJuIF9uKHQsZSk7aWYodC5vbmNlJiYhdC5vbmNlUHJvY2Vzc2VkKXJldHVybiBibih0LGUpO2lmKHQuZm9yJiYhdC5mb3JQcm9jZXNzZWQpcmV0dXJuIGZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPXQuZm9yLG89dC5hbGlhcyxhPXQuaXRlcmF0b3IxP1wiLFwiK3QuaXRlcmF0b3IxOlwiXCIscz10Lml0ZXJhdG9yMj9cIixcIit0Lml0ZXJhdG9yMjpcIlwiO3JldHVybiB0LmZvclByb2Nlc3NlZD0hMCwocnx8XCJfbFwiKStcIigoXCIraStcIiksZnVuY3Rpb24oXCIrbythK3MrXCIpe3JldHVybiBcIisobnx8Z24pKHQsZSkrXCJ9KVwifSh0LGUpO2lmKHQuaWYmJiF0LmlmUHJvY2Vzc2VkKXJldHVybiAkbih0LGUpO2lmKFwidGVtcGxhdGVcIiE9PXQudGFnfHx0LnNsb3RUYXJnZXQpe2lmKFwic2xvdFwiPT09dC50YWcpcmV0dXJuIGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5zbG90TmFtZXx8J1wiZGVmYXVsdFwiJyxyPWtuKHQsZSksaT1cIl90KFwiK24rKHI/XCIsXCIrcjpcIlwiKSxvPXQuYXR0cnMmJlwie1wiK3QuYXR0cnMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBQbih0Lm5hbWUpK1wiOlwiK3QudmFsdWV9KS5qb2luKFwiLFwiKStcIn1cIixhPXQuYXR0cnNNYXBbXCJ2LWJpbmRcIl07IW8mJiFhfHxyfHwoaSs9XCIsbnVsbFwiKTtvJiYoaSs9XCIsXCIrbyk7YSYmKGkrPShvP1wiXCI6XCIsbnVsbFwiKStcIixcIithKTtyZXR1cm4gaStcIilcIn0odCxlKTt2YXIgbjtpZih0LmNvbXBvbmVudCluPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLmlubGluZVRlbXBsYXRlP251bGw6a24oZSxuLCEwKTtyZXR1cm5cIl9jKFwiK3QrXCIsXCIrd24oZSxuKSsocj9cIixcIityOlwiXCIpK1wiKVwifSh0LmNvbXBvbmVudCx0LGUpO2Vsc2V7dmFyIHI9dC5wbGFpbj92b2lkIDA6d24odCxlKSxpPXQuaW5saW5lVGVtcGxhdGU/bnVsbDprbih0LGUsITApO249XCJfYygnXCIrdC50YWcrXCInXCIrKHI/XCIsXCIrcjpcIlwiKSsoaT9cIixcIitpOlwiXCIpK1wiKVwifWZvcih2YXIgbz0wO288ZS50cmFuc2Zvcm1zLmxlbmd0aDtvKyspbj1lLnRyYW5zZm9ybXNbb10odCxuKTtyZXR1cm4gbn1yZXR1cm4ga24odCxlKXx8XCJ2b2lkIDBcIn1mdW5jdGlvbiBfbih0LGUpe3JldHVybiB0LnN0YXRpY1Byb2Nlc3NlZD0hMCxlLnN0YXRpY1JlbmRlckZucy5wdXNoKFwid2l0aCh0aGlzKXtyZXR1cm4gXCIrZ24odCxlKStcIn1cIiksXCJfbShcIisoZS5zdGF0aWNSZW5kZXJGbnMubGVuZ3RoLTEpKyh0LnN0YXRpY0luRm9yP1wiLHRydWVcIjpcIlwiKStcIilcIn1mdW5jdGlvbiBibih0LGUpe2lmKHQub25jZVByb2Nlc3NlZD0hMCx0LmlmJiYhdC5pZlByb2Nlc3NlZClyZXR1cm4gJG4odCxlKTtpZih0LnN0YXRpY0luRm9yKXtmb3IodmFyIG49XCJcIixyPXQucGFyZW50O3I7KXtpZihyLmZvcil7bj1yLmtleTticmVha31yPXIucGFyZW50fXJldHVybiBuP1wiX28oXCIrZ24odCxlKStcIixcIitlLm9uY2VJZCsrK1wiLFwiK24rXCIpXCI6Z24odCxlKX1yZXR1cm4gX24odCxlKX1mdW5jdGlvbiAkbih0LGUsbixyKXtyZXR1cm4gdC5pZlByb2Nlc3NlZD0hMCxDbih0LmlmQ29uZGl0aW9ucy5zbGljZSgpLGUsbixyKX1mdW5jdGlvbiBDbih0LGUsbixyKXtmdW5jdGlvbiBpKHQpe3JldHVybiBuP24odCxlKTp0Lm9uY2U/Ym4odCxlKTpnbih0LGUpfWlmKCF0Lmxlbmd0aClyZXR1cm4gcnx8XCJfZSgpXCI7dmFyIG89dC5zaGlmdCgpO3JldHVybiBvLmV4cD9cIihcIitvLmV4cCtcIik/XCIraShvLmJsb2NrKStcIjpcIitDbih0LGUsbixyKTpcIlwiK2koby5ibG9jayl9ZnVuY3Rpb24gd24odCxlKXt2YXIgbj1cIntcIixyPWZ1bmN0aW9uKHQsZSl7dmFyIG49dC5kaXJlY3RpdmVzO2lmKCFuKXJldHVybjt2YXIgcixpLG8sYSxzPVwiZGlyZWN0aXZlczpbXCIsYz0hMTtmb3Iocj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl7bz1uW3JdLGE9ITA7dmFyIHU9ZS5kaXJlY3RpdmVzW28ubmFtZV07dSYmKGE9ISF1KHQsbyxlLndhcm4pKSxhJiYoYz0hMCxzKz0ne25hbWU6XCInK28ubmFtZSsnXCIscmF3TmFtZTpcIicrby5yYXdOYW1lKydcIicrKG8udmFsdWU/XCIsdmFsdWU6KFwiK28udmFsdWUrXCIpLGV4cHJlc3Npb246XCIrSlNPTi5zdHJpbmdpZnkoby52YWx1ZSk6XCJcIikrKG8uYXJnPycsYXJnOlwiJytvLmFyZysnXCInOlwiXCIpKyhvLm1vZGlmaWVycz9cIixtb2RpZmllcnM6XCIrSlNPTi5zdHJpbmdpZnkoby5tb2RpZmllcnMpOlwiXCIpK1wifSxcIil9aWYoYylyZXR1cm4gcy5zbGljZSgwLC0xKStcIl1cIn0odCxlKTtyJiYobis9citcIixcIiksdC5rZXkmJihuKz1cImtleTpcIit0LmtleStcIixcIiksdC5yZWYmJihuKz1cInJlZjpcIit0LnJlZitcIixcIiksdC5yZWZJbkZvciYmKG4rPVwicmVmSW5Gb3I6dHJ1ZSxcIiksdC5wcmUmJihuKz1cInByZTp0cnVlLFwiKSx0LmNvbXBvbmVudCYmKG4rPSd0YWc6XCInK3QudGFnKydcIiwnKTtmb3IodmFyIGk9MDtpPGUuZGF0YUdlbkZucy5sZW5ndGg7aSsrKW4rPWUuZGF0YUdlbkZuc1tpXSh0KTtpZih0LmF0dHJzJiYobis9XCJhdHRyczp7XCIrT24odC5hdHRycykrXCJ9LFwiKSx0LnByb3BzJiYobis9XCJkb21Qcm9wczp7XCIrT24odC5wcm9wcykrXCJ9LFwiKSx0LmV2ZW50cyYmKG4rPXZuKHQuZXZlbnRzLCExLGUud2FybikrXCIsXCIpLHQubmF0aXZlRXZlbnRzJiYobis9dm4odC5uYXRpdmVFdmVudHMsITAsZS53YXJuKStcIixcIiksdC5zbG90VGFyZ2V0JiYhdC5zbG90U2NvcGUmJihuKz1cInNsb3Q6XCIrdC5zbG90VGFyZ2V0K1wiLFwiKSx0LnNjb3BlZFNsb3RzJiYobis9ZnVuY3Rpb24odCxlKXtyZXR1cm5cInNjb3BlZFNsb3RzOl91KFtcIitPYmplY3Qua2V5cyh0KS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIHhuKG4sdFtuXSxlKX0pLmpvaW4oXCIsXCIpK1wiXSlcIn0odC5zY29wZWRTbG90cyxlKStcIixcIiksdC5tb2RlbCYmKG4rPVwibW9kZWw6e3ZhbHVlOlwiK3QubW9kZWwudmFsdWUrXCIsY2FsbGJhY2s6XCIrdC5tb2RlbC5jYWxsYmFjaytcIixleHByZXNzaW9uOlwiK3QubW9kZWwuZXhwcmVzc2lvbitcIn0sXCIpLHQuaW5saW5lVGVtcGxhdGUpe3ZhciBvPWZ1bmN0aW9uKHQsZSl7dmFyIG49dC5jaGlsZHJlblswXTtpZigxPT09bi50eXBlKXt2YXIgcj15bihuLGUub3B0aW9ucyk7cmV0dXJuXCJpbmxpbmVUZW1wbGF0ZTp7cmVuZGVyOmZ1bmN0aW9uKCl7XCIrci5yZW5kZXIrXCJ9LHN0YXRpY1JlbmRlckZuczpbXCIrci5zdGF0aWNSZW5kZXJGbnMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb24oKXtcIit0K1wifVwifSkuam9pbihcIixcIikrXCJdfVwifX0odCxlKTtvJiYobis9bytcIixcIil9cmV0dXJuIG49bi5yZXBsYWNlKC8sJC8sXCJcIikrXCJ9XCIsdC53cmFwRGF0YSYmKG49dC53cmFwRGF0YShuKSksdC53cmFwTGlzdGVuZXJzJiYobj10LndyYXBMaXN0ZW5lcnMobikpLG59ZnVuY3Rpb24geG4odCxlLG4pe2lmKGUuZm9yJiYhZS5mb3JQcm9jZXNzZWQpcmV0dXJuIGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLmZvcixpPWUuYWxpYXMsbz1lLml0ZXJhdG9yMT9cIixcIitlLml0ZXJhdG9yMTpcIlwiLGE9ZS5pdGVyYXRvcjI/XCIsXCIrZS5pdGVyYXRvcjI6XCJcIjtyZXR1cm4gZS5mb3JQcm9jZXNzZWQ9ITAsXCJfbCgoXCIrcitcIiksZnVuY3Rpb24oXCIraStvK2ErXCIpe3JldHVybiBcIit4bih0LGUsbikrXCJ9KVwifSh0LGUsbik7cmV0dXJuXCJ7a2V5OlwiK3QrXCIsZm46XCIrKFwiZnVuY3Rpb24oXCIrU3RyaW5nKGUuc2xvdFNjb3BlKStcIil7cmV0dXJuIFwiKyhcInRlbXBsYXRlXCI9PT1lLnRhZz9lLmlmP2UuaWYrXCI/XCIrKGtuKGUsbil8fFwidW5kZWZpbmVkXCIpK1wiOnVuZGVmaW5lZFwiOmtuKGUsbil8fFwidW5kZWZpbmVkXCI6Z24oZSxuKSkrXCJ9XCIpK1wifVwifWZ1bmN0aW9uIGtuKHQsZSxuLHIsaSl7dmFyIG89dC5jaGlsZHJlbjtpZihvLmxlbmd0aCl7dmFyIGE9b1swXTtpZigxPT09by5sZW5ndGgmJmEuZm9yJiZcInRlbXBsYXRlXCIhPT1hLnRhZyYmXCJzbG90XCIhPT1hLnRhZylyZXR1cm4ocnx8Z24pKGEsZSk7dmFyIHM9bj9mdW5jdGlvbih0LGUpe2Zvcih2YXIgbj0wLHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGk9dFtyXTtpZigxPT09aS50eXBlKXtpZihBbihpKXx8aS5pZkNvbmRpdGlvbnMmJmkuaWZDb25kaXRpb25zLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIEFuKHQuYmxvY2spfSkpe249MjticmVha30oZShpKXx8aS5pZkNvbmRpdGlvbnMmJmkuaWZDb25kaXRpb25zLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIGUodC5ibG9jayl9KSkmJihuPTEpfX1yZXR1cm4gbn0obyxlLm1heWJlQ29tcG9uZW50KTowLGM9aXx8ZnVuY3Rpb24odCxlKXtpZigxPT09dC50eXBlKXJldHVybiBnbih0LGUpO3JldHVybiAzPT09dC50eXBlJiZ0LmlzQ29tbWVudD9mdW5jdGlvbih0KXtyZXR1cm5cIl9lKFwiK0pTT04uc3RyaW5naWZ5KHQudGV4dCkrXCIpXCJ9KHQpOmZ1bmN0aW9uKHQpe3JldHVyblwiX3YoXCIrKDI9PT10LnR5cGU/dC5leHByZXNzaW9uOlNuKEpTT04uc3RyaW5naWZ5KHQudGV4dCkpKStcIilcIn0odCl9O3JldHVyblwiW1wiK28ubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBjKHQsZSl9KS5qb2luKFwiLFwiKStcIl1cIisocz9cIixcIitzOlwiXCIpfX1mdW5jdGlvbiBBbih0KXtyZXR1cm4gdm9pZCAwIT09dC5mb3J8fFwidGVtcGxhdGVcIj09PXQudGFnfHxcInNsb3RcIj09PXQudGFnfWZ1bmN0aW9uIE9uKHQpe2Zvcih2YXIgZT1cIlwiLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtlKz0nXCInK3IubmFtZSsnXCI6JytTbihyLnZhbHVlKStcIixcIn1yZXR1cm4gZS5zbGljZSgwLC0xKX1mdW5jdGlvbiBTbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9cXHUyMDI4L2csXCJcXFxcdTIwMjhcIikucmVwbGFjZSgvXFx1MjAyOS9nLFwiXFxcXHUyMDI5XCIpfWZ1bmN0aW9uIFRuKHQsZSl7dHJ5e3JldHVybiBuZXcgRnVuY3Rpb24odCl9Y2F0Y2gobil7cmV0dXJuIGUucHVzaCh7ZXJyOm4sY29kZTp0fSkseX19ZnVuY3Rpb24gRW4odCl7cmV0dXJuIFJvPVJvfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFJvLmlubmVySFRNTD10Pyc8YSBocmVmPVwiXFxuXCIvPic6JzxkaXYgYT1cIlxcblwiLz4nLFJvLmlubmVySFRNTC5pbmRleE9mKFwiJiMxMDtcIik+MH12YXIgam49T2JqZWN0LmZyZWV6ZSh7fSksTm49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxJbj11KFwic2xvdCxjb21wb25lbnRcIiwhMCksTG49dShcImtleSxyZWYsc2xvdCxzbG90LXNjb3BlLGlzXCIpLE1uPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksRG49Ly0oXFx3KS9nLFBuPXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZShEbixmdW5jdGlvbih0LGUpe3JldHVybiBlP2UudG9VcHBlckNhc2UoKTpcIlwifSl9KSxGbj1wKGZ1bmN0aW9uKHQpe3JldHVybiB0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSl9KSxSbj0vXFxCKFtBLVpdKS9nLEhuPXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZShSbixcIi0kMVwiKS50b0xvd2VyQ2FzZSgpfSksQm49ZnVuY3Rpb24odCxlLG4pe3JldHVybiExfSxVbj1mdW5jdGlvbih0KXtyZXR1cm4gdH0sVm49XCJkYXRhLXNlcnZlci1yZW5kZXJlZFwiLHpuPVtcImNvbXBvbmVudFwiLFwiZGlyZWN0aXZlXCIsXCJmaWx0ZXJcIl0sS249W1wiYmVmb3JlQ3JlYXRlXCIsXCJjcmVhdGVkXCIsXCJiZWZvcmVNb3VudFwiLFwibW91bnRlZFwiLFwiYmVmb3JlVXBkYXRlXCIsXCJ1cGRhdGVkXCIsXCJiZWZvcmVEZXN0cm95XCIsXCJkZXN0cm95ZWRcIixcImFjdGl2YXRlZFwiLFwiZGVhY3RpdmF0ZWRcIixcImVycm9yQ2FwdHVyZWRcIl0sSm49e29wdGlvbk1lcmdlU3RyYXRlZ2llczpPYmplY3QuY3JlYXRlKG51bGwpLHNpbGVudDohMSxwcm9kdWN0aW9uVGlwOiExLGRldnRvb2xzOiExLHBlcmZvcm1hbmNlOiExLGVycm9ySGFuZGxlcjpudWxsLHdhcm5IYW5kbGVyOm51bGwsaWdub3JlZEVsZW1lbnRzOltdLGtleUNvZGVzOk9iamVjdC5jcmVhdGUobnVsbCksaXNSZXNlcnZlZFRhZzpCbixpc1Jlc2VydmVkQXR0cjpCbixpc1Vua25vd25FbGVtZW50OkJuLGdldFRhZ05hbWVzcGFjZTp5LHBhcnNlUGxhdGZvcm1UYWdOYW1lOlVuLG11c3RVc2VQcm9wOkJuLF9saWZlY3ljbGVIb29rczpLbn0scW49L1teXFx3LiRdLyxXbj1cIl9fcHJvdG9fX1wiaW57fSxHbj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LFpuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBXWEVudmlyb25tZW50JiYhIVdYRW52aXJvbm1lbnQucGxhdGZvcm0sWG49Wm4mJldYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKSxZbj1HbiYmd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxRbj1ZbiYmL21zaWV8dHJpZGVudC8udGVzdChZbiksdHI9WW4mJlluLmluZGV4T2YoXCJtc2llIDkuMFwiKT4wLGVyPVluJiZZbi5pbmRleE9mKFwiZWRnZS9cIik+MCxucj1ZbiYmWW4uaW5kZXhPZihcImFuZHJvaWRcIik+MHx8XCJhbmRyb2lkXCI9PT1Ybixycj1ZbiYmL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFluKXx8XCJpb3NcIj09PVhuLGlyPShZbiYmL2Nocm9tZVxcL1xcZCsvLnRlc3QoWW4pLHt9LndhdGNoKSxvcj0hMTtpZihHbil0cnl7dmFyIGFyPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhcixcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7b3I9ITB9fSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0LXBhc3NpdmVcIixudWxsLGFyKX1jYXRjaCh0KXt9dmFyIHNyLGNyLHVyPWZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PXNyJiYoc3I9IUduJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZcInNlcnZlclwiPT09Z2xvYmFsLnByb2Nlc3MuZW52LlZVRV9FTlYpLHNyfSxscj1HbiYmd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18sZnI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdyhTeW1ib2wpJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmdyhSZWZsZWN0Lm93bktleXMpO2NyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQmJncoU2V0KT9TZXQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX1yZXR1cm4gdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiEwPT09dGhpcy5zZXRbdF19LHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXt0aGlzLnNldFt0XT0hMH0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnNldD1PYmplY3QuY3JlYXRlKG51bGwpfSx0fSgpO3ZhciBwcj15LGRyPTAsdnI9ZnVuY3Rpb24oKXt0aGlzLmlkPWRyKyssdGhpcy5zdWJzPVtdfTt2ci5wcm90b3R5cGUuYWRkU3ViPWZ1bmN0aW9uKHQpe3RoaXMuc3Vicy5wdXNoKHQpfSx2ci5wcm90b3R5cGUucmVtb3ZlU3ViPWZ1bmN0aW9uKHQpe2wodGhpcy5zdWJzLHQpfSx2ci5wcm90b3R5cGUuZGVwZW5kPWZ1bmN0aW9uKCl7dnIudGFyZ2V0JiZ2ci50YXJnZXQuYWRkRGVwKHRoaXMpfSx2ci5wcm90b3R5cGUubm90aWZ5PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuc3Vicy5zbGljZSgpLGU9MCxuPXQubGVuZ3RoO2U8bjtlKyspdFtlXS51cGRhdGUoKX0sdnIudGFyZ2V0PW51bGw7dmFyIGhyPVtdLG1yPWZ1bmN0aW9uKHQsZSxuLHIsaSxvLGEscyl7dGhpcy50YWc9dCx0aGlzLmRhdGE9ZSx0aGlzLmNoaWxkcmVuPW4sdGhpcy50ZXh0PXIsdGhpcy5lbG09aSx0aGlzLm5zPXZvaWQgMCx0aGlzLmNvbnRleHQ9byx0aGlzLmZuQ29udGV4dD12b2lkIDAsdGhpcy5mbk9wdGlvbnM9dm9pZCAwLHRoaXMuZm5TY29wZUlkPXZvaWQgMCx0aGlzLmtleT1lJiZlLmtleSx0aGlzLmNvbXBvbmVudE9wdGlvbnM9YSx0aGlzLmNvbXBvbmVudEluc3RhbmNlPXZvaWQgMCx0aGlzLnBhcmVudD12b2lkIDAsdGhpcy5yYXc9ITEsdGhpcy5pc1N0YXRpYz0hMSx0aGlzLmlzUm9vdEluc2VydD0hMCx0aGlzLmlzQ29tbWVudD0hMSx0aGlzLmlzQ2xvbmVkPSExLHRoaXMuaXNPbmNlPSExLHRoaXMuYXN5bmNGYWN0b3J5PXMsdGhpcy5hc3luY01ldGE9dm9pZCAwLHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyPSExfSx5cj17Y2hpbGQ6e2NvbmZpZ3VyYWJsZTohMH19O3lyLmNoaWxkLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbXBvbmVudEluc3RhbmNlfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtci5wcm90b3R5cGUseXIpO3ZhciBncj1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cIlwiKTt2YXIgZT1uZXcgbXI7cmV0dXJuIGUudGV4dD10LGUuaXNDb21tZW50PSEwLGV9LF9yPUFycmF5LnByb3RvdHlwZSxicj1PYmplY3QuY3JlYXRlKF9yKTtbXCJwdXNoXCIsXCJwb3BcIixcInNoaWZ0XCIsXCJ1bnNoaWZ0XCIsXCJzcGxpY2VcIixcInNvcnRcIixcInJldmVyc2VcIl0uZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT1fclt0XTtDKGJyLHQsZnVuY3Rpb24oKXtmb3IodmFyIG49W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspbltyXT1hcmd1bWVudHNbcl07dmFyIGksbz1lLmFwcGx5KHRoaXMsbiksYT10aGlzLl9fb2JfXztzd2l0Y2godCl7Y2FzZVwicHVzaFwiOmNhc2VcInVuc2hpZnRcIjppPW47YnJlYWs7Y2FzZVwic3BsaWNlXCI6aT1uLnNsaWNlKDIpfXJldHVybiBpJiZhLm9ic2VydmVBcnJheShpKSxhLmRlcC5ub3RpZnkoKSxvfSl9KTt2YXIgJHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYnIpLENyPXtzaG91bGRDb252ZXJ0OiEwfSx3cj1mdW5jdGlvbih0KXtpZih0aGlzLnZhbHVlPXQsdGhpcy5kZXA9bmV3IHZyLHRoaXMudm1Db3VudD0wLEModCxcIl9fb2JfX1wiLHRoaXMpLEFycmF5LmlzQXJyYXkodCkpeyhXbj9POlMpKHQsYnIsJHIpLHRoaXMub2JzZXJ2ZUFycmF5KHQpfWVsc2UgdGhpcy53YWxrKHQpfTt3ci5wcm90b3R5cGUud2Fsaz1mdW5jdGlvbih0KXtmb3IodmFyIGU9T2JqZWN0LmtleXModCksbj0wO248ZS5sZW5ndGg7bisrKUUodCxlW25dLHRbZVtuXV0pfSx3ci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wLG49dC5sZW5ndGg7ZTxuO2UrKylUKHRbZV0pfTt2YXIgeHI9Sm4ub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO3hyLmRhdGE9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBuP00odCxlLG4pOmUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/dDpNKHQsZSl9LEtuLmZvckVhY2goZnVuY3Rpb24odCl7eHJbdF09RH0pLHpuLmZvckVhY2goZnVuY3Rpb24odCl7eHJbdCtcInNcIl09UH0pLHhyLndhdGNoPWZ1bmN0aW9uKHQsZSxuLHIpe2lmKHQ9PT1pciYmKHQ9dm9pZCAwKSxlPT09aXImJihlPXZvaWQgMCksIWUpcmV0dXJuIE9iamVjdC5jcmVhdGUodHx8bnVsbCk7aWYoIXQpcmV0dXJuIGU7dmFyIGk9e307aChpLHQpO2Zvcih2YXIgbyBpbiBlKXt2YXIgYT1pW29dLHM9ZVtvXTthJiYhQXJyYXkuaXNBcnJheShhKSYmKGE9W2FdKSxpW29dPWE/YS5jb25jYXQocyk6QXJyYXkuaXNBcnJheShzKT9zOltzXX1yZXR1cm4gaX0seHIucHJvcHM9eHIubWV0aG9kcz14ci5pbmplY3Q9eHIuY29tcHV0ZWQ9ZnVuY3Rpb24odCxlLG4scil7aWYoIXQpcmV0dXJuIGU7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gaChpLHQpLGUmJmgoaSxlKSxpfSx4ci5wcm92aWRlPU07dmFyIGtyLEFyLE9yPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMD09PWU/dDplfSxTcj1bXSxUcj0hMSxFcj0hMTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2V0SW1tZWRpYXRlJiZ3KHNldEltbWVkaWF0ZSkpQXI9ZnVuY3Rpb24oKXtzZXRJbW1lZGlhdGUoSil9O2Vsc2UgaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIE1lc3NhZ2VDaGFubmVsfHwhdyhNZXNzYWdlQ2hhbm5lbCkmJlwiW29iamVjdCBNZXNzYWdlQ2hhbm5lbENvbnN0cnVjdG9yXVwiIT09TWVzc2FnZUNoYW5uZWwudG9TdHJpbmcoKSlBcj1mdW5jdGlvbigpe3NldFRpbWVvdXQoSiwwKX07ZWxzZXt2YXIganI9bmV3IE1lc3NhZ2VDaGFubmVsLE5yPWpyLnBvcnQyO2pyLnBvcnQxLm9ubWVzc2FnZT1KLEFyPWZ1bmN0aW9uKCl7TnIucG9zdE1lc3NhZ2UoMSl9fWlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZ3KFByb21pc2UpKXt2YXIgSXI9UHJvbWlzZS5yZXNvbHZlKCk7a3I9ZnVuY3Rpb24oKXtJci50aGVuKEopLHJyJiZzZXRUaW1lb3V0KHkpfX1lbHNlIGtyPUFyO3ZhciBMcixNcj1uZXcgY3IsRHI9cChmdW5jdGlvbih0KXt2YXIgZT1cIiZcIj09PXQuY2hhckF0KDApLG49XCJ+XCI9PT0odD1lP3Quc2xpY2UoMSk6dCkuY2hhckF0KDApLHI9XCIhXCI9PT0odD1uP3Quc2xpY2UoMSk6dCkuY2hhckF0KDApO3JldHVybiB0PXI/dC5zbGljZSgxKTp0LHtuYW1lOnQsb25jZTpuLGNhcHR1cmU6cixwYXNzaXZlOmV9fSksUHI9bnVsbCxGcj1bXSxScj1bXSxIcj17fSxCcj0hMSxVcj0hMSxWcj0wLHpyPTAsS3I9ZnVuY3Rpb24odCxlLG4scixpKXt0aGlzLnZtPXQsaSYmKHQuX3dhdGNoZXI9dGhpcyksdC5fd2F0Y2hlcnMucHVzaCh0aGlzKSxyPyh0aGlzLmRlZXA9ISFyLmRlZXAsdGhpcy51c2VyPSEhci51c2VyLHRoaXMubGF6eT0hIXIubGF6eSx0aGlzLnN5bmM9ISFyLnN5bmMpOnRoaXMuZGVlcD10aGlzLnVzZXI9dGhpcy5sYXp5PXRoaXMuc3luYz0hMSx0aGlzLmNiPW4sdGhpcy5pZD0rK3pyLHRoaXMuYWN0aXZlPSEwLHRoaXMuZGlydHk9dGhpcy5sYXp5LHRoaXMuZGVwcz1bXSx0aGlzLm5ld0RlcHM9W10sdGhpcy5kZXBJZHM9bmV3IGNyLHRoaXMubmV3RGVwSWRzPW5ldyBjcix0aGlzLmV4cHJlc3Npb249XCJcIixcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP3RoaXMuZ2V0dGVyPWU6KHRoaXMuZ2V0dGVyPWZ1bmN0aW9uKHQpe2lmKCFxbi50ZXN0KHQpKXt2YXIgZT10LnNwbGl0KFwiLlwiKTtyZXR1cm4gZnVuY3Rpb24odCl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe2lmKCF0KXJldHVybjt0PXRbZVtuXV19cmV0dXJuIHR9fX0oZSksdGhpcy5nZXR0ZXJ8fCh0aGlzLmdldHRlcj1mdW5jdGlvbigpe30pKSx0aGlzLnZhbHVlPXRoaXMubGF6eT92b2lkIDA6dGhpcy5nZXQoKX07S3IucHJvdG90eXBlLmdldD1mdW5jdGlvbigpeyFmdW5jdGlvbih0KXt2ci50YXJnZXQmJmhyLnB1c2godnIudGFyZ2V0KSx2ci50YXJnZXQ9dH0odGhpcyk7dmFyIHQsZT10aGlzLnZtO3RyeXt0PXRoaXMuZ2V0dGVyLmNhbGwoZSxlKX1jYXRjaCh0KXtpZighdGhpcy51c2VyKXRocm93IHQ7Vih0LGUsJ2dldHRlciBmb3Igd2F0Y2hlciBcIicrdGhpcy5leHByZXNzaW9uKydcIicpfWZpbmFsbHl7dGhpcy5kZWVwJiZXKHQpLHZyLnRhcmdldD1oci5wb3AoKSx0aGlzLmNsZWFudXBEZXBzKCl9cmV0dXJuIHR9LEtyLnByb3RvdHlwZS5hZGREZXA9ZnVuY3Rpb24odCl7dmFyIGU9dC5pZDt0aGlzLm5ld0RlcElkcy5oYXMoZSl8fCh0aGlzLm5ld0RlcElkcy5hZGQoZSksdGhpcy5uZXdEZXBzLnB1c2godCksdGhpcy5kZXBJZHMuaGFzKGUpfHx0LmFkZFN1Yih0aGlzKSl9LEtyLnByb3RvdHlwZS5jbGVhbnVwRGVwcz1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspe3ZhciBlPXRoaXMuZGVwc1t0XTt0aGlzLm5ld0RlcElkcy5oYXMoZS5pZCl8fGUucmVtb3ZlU3ViKHRoaXMpfXZhciBuPXRoaXMuZGVwSWRzO3RoaXMuZGVwSWRzPXRoaXMubmV3RGVwSWRzLHRoaXMubmV3RGVwSWRzPW4sdGhpcy5uZXdEZXBJZHMuY2xlYXIoKSxuPXRoaXMuZGVwcyx0aGlzLmRlcHM9dGhpcy5uZXdEZXBzLHRoaXMubmV3RGVwcz1uLHRoaXMubmV3RGVwcy5sZW5ndGg9MH0sS3IucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbigpe3RoaXMubGF6eT90aGlzLmRpcnR5PSEwOnRoaXMuc3luYz90aGlzLnJ1bigpOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaWQ7aWYobnVsbD09SHJbZV0pe2lmKEhyW2VdPSEwLFVyKXtmb3IodmFyIG49RnIubGVuZ3RoLTE7bj5WciYmRnJbbl0uaWQ+dC5pZDspbi0tO0ZyLnNwbGljZShuKzEsMCx0KX1lbHNlIEZyLnB1c2godCk7QnJ8fChCcj0hMCxxKGh0KSl9fSh0aGlzKX0sS3IucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe2lmKHRoaXMuYWN0aXZlKXt2YXIgdD10aGlzLmdldCgpO2lmKHQhPT10aGlzLnZhbHVlfHxpKHQpfHx0aGlzLmRlZXApe3ZhciBlPXRoaXMudmFsdWU7aWYodGhpcy52YWx1ZT10LHRoaXMudXNlcil0cnl7dGhpcy5jYi5jYWxsKHRoaXMudm0sdCxlKX1jYXRjaCh0KXtWKHQsdGhpcy52bSwnY2FsbGJhY2sgZm9yIHdhdGNoZXIgXCInK3RoaXMuZXhwcmVzc2lvbisnXCInKX1lbHNlIHRoaXMuY2IuY2FsbCh0aGlzLnZtLHQsZSl9fX0sS3IucHJvdG90eXBlLmV2YWx1YXRlPWZ1bmN0aW9uKCl7dGhpcy52YWx1ZT10aGlzLmdldCgpLHRoaXMuZGlydHk9ITF9LEtyLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KXRoaXMuZGVwc1t0XS5kZXBlbmQoKX0sS3IucHJvdG90eXBlLnRlYXJkb3duPWZ1bmN0aW9uKCl7aWYodGhpcy5hY3RpdmUpe3RoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWR8fGwodGhpcy52bS5fd2F0Y2hlcnMsdGhpcyk7Zm9yKHZhciB0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyl0aGlzLmRlcHNbdF0ucmVtb3ZlU3ViKHRoaXMpO3RoaXMuYWN0aXZlPSExfX07dmFyIEpyPXtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6eSxzZXQ6eX0scXI9e2xhenk6ITB9O050KEl0LnByb3RvdHlwZSk7dmFyIFdyPXtpbml0OmZ1bmN0aW9uKHQsbixyLGkpe2lmKCF0LmNvbXBvbmVudEluc3RhbmNlfHx0LmNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCl7KHQuY29tcG9uZW50SW5zdGFuY2U9ZnVuY3Rpb24odCxuLHIsaSl7dmFyIG89e19pc0NvbXBvbmVudDohMCxwYXJlbnQ6bixfcGFyZW50Vm5vZGU6dCxfcGFyZW50RWxtOnJ8fG51bGwsX3JlZkVsbTppfHxudWxsfSxhPXQuZGF0YS5pbmxpbmVUZW1wbGF0ZTtyZXR1cm4gZShhKSYmKG8ucmVuZGVyPWEucmVuZGVyLG8uc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zKSxuZXcgdC5jb21wb25lbnRPcHRpb25zLkN0b3Iobyl9KHQsUHIscixpKSkuJG1vdW50KG4/dC5lbG06dm9pZCAwLG4pfWVsc2UgaWYodC5kYXRhLmtlZXBBbGl2ZSl7dmFyIG89dDtXci5wcmVwYXRjaChvLG8pfX0scHJlcGF0Y2g6ZnVuY3Rpb24odCxlKXt2YXIgbj1lLmNvbXBvbmVudE9wdGlvbnM7IWZ1bmN0aW9uKHQsZSxuLHIsaSl7dmFyIG89ISEoaXx8dC4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW58fHIuZGF0YS5zY29wZWRTbG90c3x8dC4kc2NvcGVkU2xvdHMhPT1qbik7aWYodC4kb3B0aW9ucy5fcGFyZW50Vm5vZGU9cix0LiR2bm9kZT1yLHQuX3Zub2RlJiYodC5fdm5vZGUucGFyZW50PXIpLHQuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuPWksdC4kYXR0cnM9ci5kYXRhJiZyLmRhdGEuYXR0cnN8fGpuLHQuJGxpc3RlbmVycz1ufHxqbixlJiZ0LiRvcHRpb25zLnByb3BzKXtDci5zaG91bGRDb252ZXJ0PSExO2Zvcih2YXIgYT10Ll9wcm9wcyxzPXQuJG9wdGlvbnMuX3Byb3BLZXlzfHxbXSxjPTA7YzxzLmxlbmd0aDtjKyspe3ZhciB1PXNbY107YVt1XT1IKHUsdC4kb3B0aW9ucy5wcm9wcyxlLHQpfUNyLnNob3VsZENvbnZlcnQ9ITAsdC4kb3B0aW9ucy5wcm9wc0RhdGE9ZX1pZihuKXt2YXIgbD10LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7dC4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzPW4sc3QodCxuLGwpfW8mJih0LiRzbG90cz1jdChpLHIuY29udGV4dCksdC4kZm9yY2VVcGRhdGUoKSl9KGUuY29tcG9uZW50SW5zdGFuY2U9dC5jb21wb25lbnRJbnN0YW5jZSxuLnByb3BzRGF0YSxuLmxpc3RlbmVycyxlLG4uY2hpbGRyZW4pfSxpbnNlcnQ6ZnVuY3Rpb24odCl7dmFyIGU9dC5jb250ZXh0LG49dC5jb21wb25lbnRJbnN0YW5jZTtuLl9pc01vdW50ZWR8fChuLl9pc01vdW50ZWQ9ITAsdnQobixcIm1vdW50ZWRcIikpLHQuZGF0YS5rZWVwQWxpdmUmJihlLl9pc01vdW50ZWQ/ZnVuY3Rpb24odCl7dC5faW5hY3RpdmU9ITEsUnIucHVzaCh0KX0obik6cHQobiwhMCkpfSxkZXN0cm95OmZ1bmN0aW9uKHQpe3ZhciBlPXQuY29tcG9uZW50SW5zdGFuY2U7ZS5faXNEZXN0cm95ZWR8fCh0LmRhdGEua2VlcEFsaXZlP2R0KGUsITApOmUuJGRlc3Ryb3koKSl9fSxHcj1PYmplY3Qua2V5cyhXciksWnI9MSxYcj0yLFlyPTA7IWZ1bmN0aW9uKHQpe3QucHJvdG90eXBlLl9pbml0PWZ1bmN0aW9uKHQpe3RoaXMuX3VpZD1ZcisrLHRoaXMuX2lzVnVlPSEwLHQmJnQuX2lzQ29tcG9uZW50P2Z1bmN0aW9uKHQsZSl7dmFyIG49dC4kb3B0aW9ucz1PYmplY3QuY3JlYXRlKHQuY29uc3RydWN0b3Iub3B0aW9ucykscj1lLl9wYXJlbnRWbm9kZTtuLnBhcmVudD1lLnBhcmVudCxuLl9wYXJlbnRWbm9kZT1yLG4uX3BhcmVudEVsbT1lLl9wYXJlbnRFbG0sbi5fcmVmRWxtPWUuX3JlZkVsbTt2YXIgaT1yLmNvbXBvbmVudE9wdGlvbnM7bi5wcm9wc0RhdGE9aS5wcm9wc0RhdGEsbi5fcGFyZW50TGlzdGVuZXJzPWkubGlzdGVuZXJzLG4uX3JlbmRlckNoaWxkcmVuPWkuY2hpbGRyZW4sbi5fY29tcG9uZW50VGFnPWkudGFnLGUucmVuZGVyJiYobi5yZW5kZXI9ZS5yZW5kZXIsbi5zdGF0aWNSZW5kZXJGbnM9ZS5zdGF0aWNSZW5kZXJGbnMpfSh0aGlzLHQpOnRoaXMuJG9wdGlvbnM9RihGdCh0aGlzLmNvbnN0cnVjdG9yKSx0fHx7fSx0aGlzKSx0aGlzLl9yZW5kZXJQcm94eT10aGlzLHRoaXMuX3NlbGY9dGhpcyxmdW5jdGlvbih0KXt2YXIgZT10LiRvcHRpb25zLG49ZS5wYXJlbnQ7aWYobiYmIWUuYWJzdHJhY3Qpe2Zvcig7bi4kb3B0aW9ucy5hYnN0cmFjdCYmbi4kcGFyZW50OyluPW4uJHBhcmVudDtuLiRjaGlsZHJlbi5wdXNoKHQpfXQuJHBhcmVudD1uLHQuJHJvb3Q9bj9uLiRyb290OnQsdC4kY2hpbGRyZW49W10sdC4kcmVmcz17fSx0Ll93YXRjaGVyPW51bGwsdC5faW5hY3RpdmU9bnVsbCx0Ll9kaXJlY3RJbmFjdGl2ZT0hMSx0Ll9pc01vdW50ZWQ9ITEsdC5faXNEZXN0cm95ZWQ9ITEsdC5faXNCZWluZ0Rlc3Ryb3llZD0hMX0odGhpcyksZnVuY3Rpb24odCl7dC5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdC5faGFzSG9va0V2ZW50PSExO3ZhciBlPXQuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztlJiZzdCh0LGUpfSh0aGlzKSxmdW5jdGlvbih0KXt0Ll92bm9kZT1udWxsLHQuX3N0YXRpY1RyZWVzPW51bGw7dmFyIGU9dC4kb3B0aW9ucyxuPXQuJHZub2RlPWUuX3BhcmVudFZub2RlLHI9biYmbi5jb250ZXh0O3QuJHNsb3RzPWN0KGUuX3JlbmRlckNoaWxkcmVuLHIpLHQuJHNjb3BlZFNsb3RzPWpuLHQuX2M9ZnVuY3Rpb24oZSxuLHIsaSl7cmV0dXJuIER0KHQsZSxuLHIsaSwhMSl9LHQuJGNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oZSxuLHIsaSl7cmV0dXJuIER0KHQsZSxuLHIsaSwhMCl9O3ZhciBpPW4mJm4uZGF0YTtFKHQsXCIkYXR0cnNcIixpJiZpLmF0dHJzfHxqbiwwLCEwKSxFKHQsXCIkbGlzdGVuZXJzXCIsZS5fcGFyZW50TGlzdGVuZXJzfHxqbiwwLCEwKX0odGhpcyksdnQodGhpcyxcImJlZm9yZUNyZWF0ZVwiKSxmdW5jdGlvbih0KXt2YXIgZT0kdCh0LiRvcHRpb25zLmluamVjdCx0KTtlJiYoQ3Iuc2hvdWxkQ29udmVydD0hMSxPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe0UodCxuLGVbbl0pfSksQ3Iuc2hvdWxkQ29udmVydD0hMCl9KHRoaXMpLHl0KHRoaXMpLGZ1bmN0aW9uKHQpe3ZhciBlPXQuJG9wdGlvbnMucHJvdmlkZTtlJiYodC5fcHJvdmlkZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmNhbGwodCk6ZSl9KHRoaXMpLHZ0KHRoaXMsXCJjcmVhdGVkXCIpLHRoaXMuJG9wdGlvbnMuZWwmJnRoaXMuJG1vdW50KHRoaXMuJG9wdGlvbnMuZWwpfX0oUnQpLGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2UuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGF9O3ZhciBuPXt9O24uZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3Byb3BzfSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCIkZGF0YVwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcIiRwcm9wc1wiLG4pLHQucHJvdG90eXBlLiRzZXQ9aix0LnByb3RvdHlwZS4kZGVsZXRlPU4sdC5wcm90b3R5cGUuJHdhdGNoPWZ1bmN0aW9uKHQsZSxuKXtpZihvKGUpKXJldHVybiBidCh0aGlzLHQsZSxuKTsobj1ufHx7fSkudXNlcj0hMDt2YXIgcj1uZXcgS3IodGhpcyx0LGUsbik7cmV0dXJuIG4uaW1tZWRpYXRlJiZlLmNhbGwodGhpcyxyLnZhbHVlKSxmdW5jdGlvbigpe3IudGVhcmRvd24oKX19fShSdCksZnVuY3Rpb24odCl7dmFyIGU9L15ob29rOi87dC5wcm90b3R5cGUuJG9uPWZ1bmN0aW9uKHQsbil7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspdGhpcy4kb24odFtyXSxuKTtlbHNlKHRoaXMuX2V2ZW50c1t0XXx8KHRoaXMuX2V2ZW50c1t0XT1bXSkpLnB1c2gobiksZS50ZXN0KHQpJiYodGhpcy5faGFzSG9va0V2ZW50PSEwKTtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGUuJG9uY2U9ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7ci4kb2ZmKHQsbiksZS5hcHBseShyLGFyZ3VtZW50cyl9dmFyIHI9dGhpcztyZXR1cm4gbi5mbj1lLHIuJG9uKHQsbikscn0sdC5wcm90b3R5cGUuJG9mZj1mdW5jdGlvbih0LGUpe2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzO2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl0aGlzLiRvZmYodFtuXSxlKTtyZXR1cm4gdGhpc312YXIgaT10aGlzLl9ldmVudHNbdF07aWYoIWkpcmV0dXJuIHRoaXM7aWYoIWUpcmV0dXJuIHRoaXMuX2V2ZW50c1t0XT1udWxsLHRoaXM7aWYoZSlmb3IodmFyIG8sYT1pLmxlbmd0aDthLS07KWlmKChvPWlbYV0pPT09ZXx8by5mbj09PWUpe2kuc3BsaWNlKGEsMSk7YnJlYWt9cmV0dXJuIHRoaXN9LHQucHJvdG90eXBlLiRlbWl0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj1lLl9ldmVudHNbdF07aWYobil7bj1uLmxlbmd0aD4xP3Yobik6bjtmb3IodmFyIHI9dihhcmd1bWVudHMsMSksaT0wLG89bi5sZW5ndGg7aTxvO2krKyl0cnl7bltpXS5hcHBseShlLHIpfWNhdGNoKG4pe1YobixlLCdldmVudCBoYW5kbGVyIGZvciBcIicrdCsnXCInKX19cmV0dXJuIGV9fShSdCksZnVuY3Rpb24odCl7dC5wcm90b3R5cGUuX3VwZGF0ZT1mdW5jdGlvbih0LGUpe3RoaXMuX2lzTW91bnRlZCYmdnQodGhpcyxcImJlZm9yZVVwZGF0ZVwiKTt2YXIgbj10aGlzLiRlbCxyPXRoaXMuX3Zub2RlLGk9UHI7UHI9dGhpcyx0aGlzLl92bm9kZT10LHI/dGhpcy4kZWw9dGhpcy5fX3BhdGNoX18ocix0KToodGhpcy4kZWw9dGhpcy5fX3BhdGNoX18odGhpcy4kZWwsdCxlLCExLHRoaXMuJG9wdGlvbnMuX3BhcmVudEVsbSx0aGlzLiRvcHRpb25zLl9yZWZFbG0pLHRoaXMuJG9wdGlvbnMuX3BhcmVudEVsbT10aGlzLiRvcHRpb25zLl9yZWZFbG09bnVsbCksUHI9aSxuJiYobi5fX3Z1ZV9fPW51bGwpLHRoaXMuJGVsJiYodGhpcy4kZWwuX192dWVfXz10aGlzKSx0aGlzLiR2bm9kZSYmdGhpcy4kcGFyZW50JiZ0aGlzLiR2bm9kZT09PXRoaXMuJHBhcmVudC5fdm5vZGUmJih0aGlzLiRwYXJlbnQuJGVsPXRoaXMuJGVsKX0sdC5wcm90b3R5cGUuJGZvcmNlVXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5fd2F0Y2hlciYmdGhpcy5fd2F0Y2hlci51cGRhdGUoKX0sdC5wcm90b3R5cGUuJGRlc3Ryb3k9ZnVuY3Rpb24oKXtpZighdGhpcy5faXNCZWluZ0Rlc3Ryb3llZCl7dnQodGhpcyxcImJlZm9yZURlc3Ryb3lcIiksdGhpcy5faXNCZWluZ0Rlc3Ryb3llZD0hMDt2YXIgdD10aGlzLiRwYXJlbnQ7IXR8fHQuX2lzQmVpbmdEZXN0cm95ZWR8fHRoaXMuJG9wdGlvbnMuYWJzdHJhY3R8fGwodC4kY2hpbGRyZW4sdGhpcyksdGhpcy5fd2F0Y2hlciYmdGhpcy5fd2F0Y2hlci50ZWFyZG93bigpO2Zvcih2YXIgZT10aGlzLl93YXRjaGVycy5sZW5ndGg7ZS0tOyl0aGlzLl93YXRjaGVyc1tlXS50ZWFyZG93bigpO3RoaXMuX2RhdGEuX19vYl9fJiZ0aGlzLl9kYXRhLl9fb2JfXy52bUNvdW50LS0sdGhpcy5faXNEZXN0cm95ZWQ9ITAsdGhpcy5fX3BhdGNoX18odGhpcy5fdm5vZGUsbnVsbCksdnQodGhpcyxcImRlc3Ryb3llZFwiKSx0aGlzLiRvZmYoKSx0aGlzLiRlbCYmKHRoaXMuJGVsLl9fdnVlX189bnVsbCksdGhpcy4kdm5vZGUmJih0aGlzLiR2bm9kZS5wYXJlbnQ9bnVsbCl9fX0oUnQpLGZ1bmN0aW9uKHQpe050KHQucHJvdG90eXBlKSx0LnByb3RvdHlwZS4kbmV4dFRpY2s9ZnVuY3Rpb24odCl7cmV0dXJuIHEodCx0aGlzKX0sdC5wcm90b3R5cGUuX3JlbmRlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LiRvcHRpb25zLG49ZS5yZW5kZXIscj1lLl9wYXJlbnRWbm9kZTtpZih0Ll9pc01vdW50ZWQpZm9yKHZhciBpIGluIHQuJHNsb3RzKXt2YXIgbz10LiRzbG90c1tpXTsoby5fcmVuZGVyZWR8fG9bMF0mJm9bMF0uZWxtKSYmKHQuJHNsb3RzW2ldPUEobywhMCkpfXQuJHNjb3BlZFNsb3RzPXImJnIuZGF0YS5zY29wZWRTbG90c3x8am4sdC4kdm5vZGU9cjt2YXIgYTt0cnl7YT1uLmNhbGwodC5fcmVuZGVyUHJveHksdC4kY3JlYXRlRWxlbWVudCl9Y2F0Y2goZSl7VihlLHQsXCJyZW5kZXJcIiksYT10Ll92bm9kZX1yZXR1cm4gYSBpbnN0YW5jZW9mIG1yfHwoYT1ncigpKSxhLnBhcmVudD1yLGF9fShSdCk7dmFyIFFyPVtTdHJpbmcsUmVnRXhwLEFycmF5XSx0aT17S2VlcEFsaXZlOntuYW1lOlwia2VlcC1hbGl2ZVwiLGFic3RyYWN0OiEwLHByb3BzOntpbmNsdWRlOlFyLGV4Y2x1ZGU6UXIsbWF4OltTdHJpbmcsTnVtYmVyXX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMuY2FjaGU9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLmtleXM9W119LGRlc3Ryb3llZDpmdW5jdGlvbigpe2Zvcih2YXIgdCBpbiB0aGlzLmNhY2hlKXp0KHRoaXMuY2FjaGUsdCx0aGlzLmtleXMpfSx3YXRjaDp7aW5jbHVkZTpmdW5jdGlvbih0KXtWdCh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBVdCh0LGUpfSl9LGV4Y2x1ZGU6ZnVuY3Rpb24odCl7VnQodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4hVXQodCxlKX0pfX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kc2xvdHMuZGVmYXVsdCxlPWl0KHQpLG49ZSYmZS5jb21wb25lbnRPcHRpb25zO2lmKG4pe3ZhciByPUJ0KG4pLGk9dGhpcy5pbmNsdWRlLG89dGhpcy5leGNsdWRlO2lmKGkmJighcnx8IVV0KGkscikpfHxvJiZyJiZVdChvLHIpKXJldHVybiBlO3ZhciBhPXRoaXMuY2FjaGUscz10aGlzLmtleXMsYz1udWxsPT1lLmtleT9uLkN0b3IuY2lkKyhuLnRhZz9cIjo6XCIrbi50YWc6XCJcIik6ZS5rZXk7YVtjXT8oZS5jb21wb25lbnRJbnN0YW5jZT1hW2NdLmNvbXBvbmVudEluc3RhbmNlLGwocyxjKSxzLnB1c2goYykpOihhW2NdPWUscy5wdXNoKGMpLHRoaXMubWF4JiZzLmxlbmd0aD5wYXJzZUludCh0aGlzLm1heCkmJnp0KGEsc1swXSxzLHRoaXMuX3Zub2RlKSksZS5kYXRhLmtlZXBBbGl2ZT0hMH1yZXR1cm4gZXx8dCYmdFswXX19fTshZnVuY3Rpb24odCl7dmFyIGU9e307ZS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gSm59LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiY29uZmlnXCIsZSksdC51dGlsPXt3YXJuOnByLGV4dGVuZDpoLG1lcmdlT3B0aW9uczpGLGRlZmluZVJlYWN0aXZlOkV9LHQuc2V0PWosdC5kZWxldGU9Tix0Lm5leHRUaWNrPXEsdC5vcHRpb25zPU9iamVjdC5jcmVhdGUobnVsbCksem4uZm9yRWFjaChmdW5jdGlvbihlKXt0Lm9wdGlvbnNbZStcInNcIl09T2JqZWN0LmNyZWF0ZShudWxsKX0pLHQub3B0aW9ucy5fYmFzZT10LGgodC5vcHRpb25zLmNvbXBvbmVudHMsdGkpLGZ1bmN0aW9uKHQpe3QudXNlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2luc3RhbGxlZFBsdWdpbnN8fCh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zPVtdKTtpZihlLmluZGV4T2YodCk+LTEpcmV0dXJuIHRoaXM7dmFyIG49dihhcmd1bWVudHMsMSk7cmV0dXJuIG4udW5zaGlmdCh0aGlzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lmluc3RhbGw/dC5pbnN0YWxsLmFwcGx5KHQsbik6XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdC5hcHBseShudWxsLG4pLGUucHVzaCh0KSx0aGlzfX0odCksZnVuY3Rpb24odCl7dC5taXhpbj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5vcHRpb25zPUYodGhpcy5vcHRpb25zLHQpLHRoaXN9fSh0KSxIdCh0KSxmdW5jdGlvbih0KXt6bi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3RbZV09ZnVuY3Rpb24odCxuKXtyZXR1cm4gbj8oXCJjb21wb25lbnRcIj09PWUmJm8obikmJihuLm5hbWU9bi5uYW1lfHx0LG49dGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChuKSksXCJkaXJlY3RpdmVcIj09PWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPXtiaW5kOm4sdXBkYXRlOm59KSx0aGlzLm9wdGlvbnNbZStcInNcIl1bdF09bixuKTp0aGlzLm9wdGlvbnNbZStcInNcIl1bdF19fSl9KHQpfShSdCksT2JqZWN0LmRlZmluZVByb3BlcnR5KFJ0LnByb3RvdHlwZSxcIiRpc1NlcnZlclwiLHtnZXQ6dXJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoUnQucHJvdG90eXBlLFwiJHNzckNvbnRleHRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHZub2RlJiZ0aGlzLiR2bm9kZS5zc3JDb250ZXh0fX0pLFJ0LnZlcnNpb249XCIyLjUuMTNcIjt2YXIgZWksbmkscmksaWksb2ksYWksc2ksY2ksdWk9dShcInN0eWxlLGNsYXNzXCIpLGxpPXUoXCJpbnB1dCx0ZXh0YXJlYSxvcHRpb24sc2VsZWN0LHByb2dyZXNzXCIpLGZpPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm5cInZhbHVlXCI9PT1uJiZsaSh0KSYmXCJidXR0b25cIiE9PWV8fFwic2VsZWN0ZWRcIj09PW4mJlwib3B0aW9uXCI9PT10fHxcImNoZWNrZWRcIj09PW4mJlwiaW5wdXRcIj09PXR8fFwibXV0ZWRcIj09PW4mJlwidmlkZW9cIj09PXR9LHBpPXUoXCJjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2tcIiksZGk9dShcImFsbG93ZnVsbHNjcmVlbixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY2hlY2tlZCxjb21wYWN0LGNvbnRyb2xzLGRlY2xhcmUsZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLGVuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsbXV0ZWQsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm92YWxpZGF0ZSxub3dyYXAsb3BlbixwYXVzZW9uZXhpdCxyZWFkb25seSxyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLHRydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGVcIiksdmk9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsaGk9ZnVuY3Rpb24odCl7cmV0dXJuXCI6XCI9PT10LmNoYXJBdCg1KSYmXCJ4bGlua1wiPT09dC5zbGljZSgwLDUpfSxtaT1mdW5jdGlvbih0KXtyZXR1cm4gaGkodCk/dC5zbGljZSg2LHQubGVuZ3RoKTpcIlwifSx5aT1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dHx8ITE9PT10fSxnaT17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixtYXRoOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwifSxfaT11KFwiaHRtbCxib2R5LGJhc2UsaGVhZCxsaW5rLG1ldGEsc3R5bGUsdGl0bGUsYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLGRpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxwaWN0dXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLGEsYixhYmJyLGJkaSxiZG8sYnIsY2l0ZSxjb2RlLGRhdGEsZGZuLGVtLGksa2JkLG1hcmsscSxycCxydCxydGMscnVieSxzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbyxlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucyxjYXB0aW9uLGNvbCxjb2xncm91cCx0YWJsZSx0aGVhZCx0Ym9keSx0ZCx0aCx0cixidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLG91dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsZGV0YWlscyxkaWFsb2csbWVudSxtZW51aXRlbSxzdW1tYXJ5LGNvbnRlbnQsZWxlbWVudCxzaGFkb3csdGVtcGxhdGUsYmxvY2txdW90ZSxpZnJhbWUsdGZvb3RcIiksYmk9dShcInN2ZyxhbmltYXRlLGNpcmNsZSxjbGlwcGF0aCxjdXJzb3IsZGVmcyxkZXNjLGVsbGlwc2UsZmlsdGVyLGZvbnQtZmFjZSxmb3JlaWduT2JqZWN0LGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybixwb2x5Z29uLHBvbHlsaW5lLHJlY3Qsc3dpdGNoLHN5bWJvbCx0ZXh0LHRleHRwYXRoLHRzcGFuLHVzZSx2aWV3XCIsITApLCRpPWZ1bmN0aW9uKHQpe3JldHVybiBfaSh0KXx8YmkodCl9LENpPU9iamVjdC5jcmVhdGUobnVsbCksd2k9dShcInRleHQsbnVtYmVyLHBhc3N3b3JkLHNlYXJjaCxlbWFpbCx0ZWwsdXJsXCIpLHhpPU9iamVjdC5mcmVlemUoe2NyZWF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpO3JldHVyblwic2VsZWN0XCIhPT10P246KGUuZGF0YSYmZS5kYXRhLmF0dHJzJiZ2b2lkIDAhPT1lLmRhdGEuYXR0cnMubXVsdGlwbGUmJm4uc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIixcIm11bHRpcGxlXCIpLG4pfSxjcmVhdGVFbGVtZW50TlM6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGdpW3RdLGUpfSxjcmVhdGVUZXh0Tm9kZTpmdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCl9LGNyZWF0ZUNvbW1lbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodCl9LGluc2VydEJlZm9yZTpmdW5jdGlvbih0LGUsbil7dC5pbnNlcnRCZWZvcmUoZSxuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24odCxlKXt0LnJlbW92ZUNoaWxkKGUpfSxhcHBlbmRDaGlsZDpmdW5jdGlvbih0LGUpe3QuYXBwZW5kQ2hpbGQoZSl9LHBhcmVudE5vZGU6ZnVuY3Rpb24odCl7cmV0dXJuIHQucGFyZW50Tm9kZX0sbmV4dFNpYmxpbmc6ZnVuY3Rpb24odCl7cmV0dXJuIHQubmV4dFNpYmxpbmd9LHRhZ05hbWU6ZnVuY3Rpb24odCl7cmV0dXJuIHQudGFnTmFtZX0sc2V0VGV4dENvbnRlbnQ6ZnVuY3Rpb24odCxlKXt0LnRleHRDb250ZW50PWV9LHNldEF0dHJpYnV0ZTpmdW5jdGlvbih0LGUsbil7dC5zZXRBdHRyaWJ1dGUoZSxuKX19KSxraT17Y3JlYXRlOmZ1bmN0aW9uKHQsZSl7WHQoZSl9LHVwZGF0ZTpmdW5jdGlvbih0LGUpe3QuZGF0YS5yZWYhPT1lLmRhdGEucmVmJiYoWHQodCwhMCksWHQoZSkpfSxkZXN0cm95OmZ1bmN0aW9uKHQpe1h0KHQsITApfX0sQWk9bmV3IG1yKFwiXCIse30sW10pLE9pPVtcImNyZWF0ZVwiLFwiYWN0aXZhdGVcIixcInVwZGF0ZVwiLFwicmVtb3ZlXCIsXCJkZXN0cm95XCJdLFNpPXtjcmVhdGU6dGUsdXBkYXRlOnRlLGRlc3Ryb3k6ZnVuY3Rpb24odCl7dGUodCxBaSl9fSxUaT1PYmplY3QuY3JlYXRlKG51bGwpLEVpPVtraSxTaV0samk9e2NyZWF0ZTpyZSx1cGRhdGU6cmV9LE5pPXtjcmVhdGU6b2UsdXBkYXRlOm9lfSxJaT0vW1xcdykuK1xcLV8kXFxdXS8sTGk9XCJfX3JcIixNaT1cIl9fY1wiLERpPXtjcmVhdGU6eGUsdXBkYXRlOnhlfSxQaT17Y3JlYXRlOmtlLHVwZGF0ZTprZX0sRmk9cChmdW5jdGlvbih0KXt2YXIgZT17fSxuPS86KC4rKS87cmV0dXJuIHQuc3BsaXQoLzsoPyFbXihdKlxcKSkvZykuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0KXt2YXIgcj10LnNwbGl0KG4pO3IubGVuZ3RoPjEmJihlW3JbMF0udHJpbSgpXT1yWzFdLnRyaW0oKSl9fSksZX0pLFJpPS9eLS0vLEhpPS9cXHMqIWltcG9ydGFudCQvLEJpPWZ1bmN0aW9uKHQsZSxuKXtpZihSaS50ZXN0KGUpKXQuc3R5bGUuc2V0UHJvcGVydHkoZSxuKTtlbHNlIGlmKEhpLnRlc3QobikpdC5zdHlsZS5zZXRQcm9wZXJ0eShlLG4ucmVwbGFjZShIaSxcIlwiKSxcImltcG9ydGFudFwiKTtlbHNle3ZhciByPVZpKGUpO2lmKEFycmF5LmlzQXJyYXkobikpZm9yKHZhciBpPTAsbz1uLmxlbmd0aDtpPG87aSsrKXQuc3R5bGVbcl09bltpXTtlbHNlIHQuc3R5bGVbcl09bn19LFVpPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxWaT1wKGZ1bmN0aW9uKHQpe2lmKGNpPWNpfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiZmlsdGVyXCIhPT0odD1Qbih0KSkmJnQgaW4gY2kpcmV0dXJuIHQ7Zm9yKHZhciBlPXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKSxuPTA7bjxVaS5sZW5ndGg7bisrKXt2YXIgcj1VaVtuXStlO2lmKHIgaW4gY2kpcmV0dXJuIHJ9fSksemk9e2NyZWF0ZTpTZSx1cGRhdGU6U2V9LEtpPXAoZnVuY3Rpb24odCl7cmV0dXJue2VudGVyQ2xhc3M6dCtcIi1lbnRlclwiLGVudGVyVG9DbGFzczp0K1wiLWVudGVyLXRvXCIsZW50ZXJBY3RpdmVDbGFzczp0K1wiLWVudGVyLWFjdGl2ZVwiLGxlYXZlQ2xhc3M6dCtcIi1sZWF2ZVwiLGxlYXZlVG9DbGFzczp0K1wiLWxlYXZlLXRvXCIsbGVhdmVBY3RpdmVDbGFzczp0K1wiLWxlYXZlLWFjdGl2ZVwifX0pLEppPUduJiYhdHIscWk9XCJ0cmFuc2l0aW9uXCIsV2k9XCJhbmltYXRpb25cIixHaT1cInRyYW5zaXRpb25cIixaaT1cInRyYW5zaXRpb25lbmRcIixYaT1cImFuaW1hdGlvblwiLFlpPVwiYW5pbWF0aW9uZW5kXCI7SmkmJih2b2lkIDA9PT13aW5kb3cub250cmFuc2l0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kJiYoR2k9XCJXZWJraXRUcmFuc2l0aW9uXCIsWmk9XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIpLHZvaWQgMD09PXdpbmRvdy5vbmFuaW1hdGlvbmVuZCYmdm9pZCAwIT09d2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kJiYoWGk9XCJXZWJraXRBbmltYXRpb25cIixZaT1cIndlYmtpdEFuaW1hdGlvbkVuZFwiKSk7dmFyIFFpPUduP3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk6c2V0VGltZW91dDpmdW5jdGlvbih0KXtyZXR1cm4gdCgpfSx0bz0vXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvLGVvPWZ1bmN0aW9uKGkpe2Z1bmN0aW9uIG8odCl7dmFyIG49QS5wYXJlbnROb2RlKHQpO2UobikmJkEucmVtb3ZlQ2hpbGQobix0KX1mdW5jdGlvbiBhKHQscixpLG8sYSl7aWYodC5pc1Jvb3RJbnNlcnQ9IWEsIWZ1bmN0aW9uKHQscixpLG8pe3ZhciBhPXQuZGF0YTtpZihlKGEpKXt2YXIgdT1lKHQuY29tcG9uZW50SW5zdGFuY2UpJiZhLmtlZXBBbGl2ZTtpZihlKGE9YS5ob29rKSYmZShhPWEuaW5pdCkmJmEodCwhMSxpLG8pLGUodC5jb21wb25lbnRJbnN0YW5jZSkpcmV0dXJuIHModCxyKSxuKHUpJiZmdW5jdGlvbih0LG4scixpKXtmb3IodmFyIG8sYT10O2EuY29tcG9uZW50SW5zdGFuY2U7KWlmKGE9YS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUsZShvPWEuZGF0YSkmJmUobz1vLnRyYW5zaXRpb24pKXtmb3Iobz0wO288eC5hY3RpdmF0ZS5sZW5ndGg7KytvKXguYWN0aXZhdGVbb10oQWksYSk7bi5wdXNoKGEpO2JyZWFrfWMocix0LmVsbSxpKX0odCxyLGksbyksITB9fSh0LHIsaSxvKSl7dmFyIHU9dC5kYXRhLGY9dC5jaGlsZHJlbix2PXQudGFnO2Uodik/KHQuZWxtPXQubnM/QS5jcmVhdGVFbGVtZW50TlModC5ucyx2KTpBLmNyZWF0ZUVsZW1lbnQodix0KSxkKHQpLGwodCxmLHIpLGUodSkmJnAodCxyKSxjKGksdC5lbG0sbykpOm4odC5pc0NvbW1lbnQpPyh0LmVsbT1BLmNyZWF0ZUNvbW1lbnQodC50ZXh0KSxjKGksdC5lbG0sbykpOih0LmVsbT1BLmNyZWF0ZVRleHROb2RlKHQudGV4dCksYyhpLHQuZWxtLG8pKX19ZnVuY3Rpb24gcyh0LG4pe2UodC5kYXRhLnBlbmRpbmdJbnNlcnQpJiYobi5wdXNoLmFwcGx5KG4sdC5kYXRhLnBlbmRpbmdJbnNlcnQpLHQuZGF0YS5wZW5kaW5nSW5zZXJ0PW51bGwpLHQuZWxtPXQuY29tcG9uZW50SW5zdGFuY2UuJGVsLGYodCk/KHAodCxuKSxkKHQpKTooWHQodCksbi5wdXNoKHQpKX1mdW5jdGlvbiBjKHQsbixyKXtlKHQpJiYoZShyKT9yLnBhcmVudE5vZGU9PT10JiZBLmluc2VydEJlZm9yZSh0LG4scik6QS5hcHBlbmRDaGlsZCh0LG4pKX1mdW5jdGlvbiBsKHQsZSxuKXtpZihBcnJheS5pc0FycmF5KGUpKWZvcih2YXIgaT0wO2k8ZS5sZW5ndGg7KytpKWEoZVtpXSxuLHQuZWxtLG51bGwsITApO2Vsc2Ugcih0LnRleHQpJiZBLmFwcGVuZENoaWxkKHQuZWxtLEEuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKHQudGV4dCkpKX1mdW5jdGlvbiBmKHQpe2Zvcig7dC5jb21wb25lbnRJbnN0YW5jZTspdD10LmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtyZXR1cm4gZSh0LnRhZyl9ZnVuY3Rpb24gcCh0LG4pe2Zvcih2YXIgcj0wO3I8eC5jcmVhdGUubGVuZ3RoOysrcil4LmNyZWF0ZVtyXShBaSx0KTtlKEM9dC5kYXRhLmhvb2spJiYoZShDLmNyZWF0ZSkmJkMuY3JlYXRlKEFpLHQpLGUoQy5pbnNlcnQpJiZuLnB1c2godCkpfWZ1bmN0aW9uIGQodCl7dmFyIG47aWYoZShuPXQuZm5TY29wZUlkKSlBLnNldEF0dHJpYnV0ZSh0LmVsbSxuLFwiXCIpO2Vsc2UgZm9yKHZhciByPXQ7cjspZShuPXIuY29udGV4dCkmJmUobj1uLiRvcHRpb25zLl9zY29wZUlkKSYmQS5zZXRBdHRyaWJ1dGUodC5lbG0sbixcIlwiKSxyPXIucGFyZW50O2Uobj1QcikmJm4hPT10LmNvbnRleHQmJm4hPT10LmZuQ29udGV4dCYmZShuPW4uJG9wdGlvbnMuX3Njb3BlSWQpJiZBLnNldEF0dHJpYnV0ZSh0LmVsbSxuLFwiXCIpfWZ1bmN0aW9uIHYodCxlLG4scixpLG8pe2Zvcig7cjw9aTsrK3IpYShuW3JdLG8sdCxlKX1mdW5jdGlvbiBoKHQpe3ZhciBuLHIsaT10LmRhdGE7aWYoZShpKSlmb3IoZShuPWkuaG9vaykmJmUobj1uLmRlc3Ryb3kpJiZuKHQpLG49MDtuPHguZGVzdHJveS5sZW5ndGg7KytuKXguZGVzdHJveVtuXSh0KTtpZihlKG49dC5jaGlsZHJlbikpZm9yKHI9MDtyPHQuY2hpbGRyZW4ubGVuZ3RoOysrciloKHQuY2hpbGRyZW5bcl0pfWZ1bmN0aW9uIG0odCxuLHIsaSl7Zm9yKDtyPD1pOysrcil7dmFyIGE9bltyXTtlKGEpJiYoZShhLnRhZyk/KHkoYSksaChhKSk6byhhLmVsbSkpfX1mdW5jdGlvbiB5KHQsbil7aWYoZShuKXx8ZSh0LmRhdGEpKXt2YXIgcixpPXgucmVtb3ZlLmxlbmd0aCsxO2ZvcihlKG4pP24ubGlzdGVuZXJzKz1pOm49ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7MD09LS1uLmxpc3RlbmVycyYmbyh0KX1yZXR1cm4gbi5saXN0ZW5lcnM9ZSxufSh0LmVsbSxpKSxlKHI9dC5jb21wb25lbnRJbnN0YW5jZSkmJmUocj1yLl92bm9kZSkmJmUoci5kYXRhKSYmeShyLG4pLHI9MDtyPHgucmVtb3ZlLmxlbmd0aDsrK3IpeC5yZW1vdmVbcl0odCxuKTtlKHI9dC5kYXRhLmhvb2spJiZlKHI9ci5yZW1vdmUpP3IodCxuKTpuKCl9ZWxzZSBvKHQuZWxtKX1mdW5jdGlvbiBnKG4scixpLG8scyl7Zm9yKHZhciBjLHUsbCxmPTAscD0wLGQ9ci5sZW5ndGgtMSxoPXJbMF0seT1yW2RdLGc9aS5sZW5ndGgtMSxiPWlbMF0sJD1pW2ddLEM9IXM7Zjw9ZCYmcDw9ZzspdChoKT9oPXJbKytmXTp0KHkpP3k9clstLWRdOll0KGgsYik/KF8oaCxiLG8pLGg9clsrK2ZdLGI9aVsrK3BdKTpZdCh5LCQpPyhfKHksJCxvKSx5PXJbLS1kXSwkPWlbLS1nXSk6WXQoaCwkKT8oXyhoLCQsbyksQyYmQS5pbnNlcnRCZWZvcmUobixoLmVsbSxBLm5leHRTaWJsaW5nKHkuZWxtKSksaD1yWysrZl0sJD1pWy0tZ10pOll0KHksYik/KF8oeSxiLG8pLEMmJkEuaW5zZXJ0QmVmb3JlKG4seS5lbG0saC5lbG0pLHk9clstLWRdLGI9aVsrK3BdKToodChjKSYmKGM9UXQocixmLGQpKSx0KHU9ZShiLmtleSk/Y1tiLmtleV06ZnVuY3Rpb24odCxuLHIsaSl7Zm9yKHZhciBvPXI7bzxpO28rKyl7dmFyIGE9bltvXTtpZihlKGEpJiZZdCh0LGEpKXJldHVybiBvfX0oYixyLGYsZCkpP2EoYixvLG4saC5lbG0pOll0KGw9clt1XSxiKT8oXyhsLGIsbyksclt1XT12b2lkIDAsQyYmQS5pbnNlcnRCZWZvcmUobixsLmVsbSxoLmVsbSkpOmEoYixvLG4saC5lbG0pLGI9aVsrK3BdKTtmPmQ/dihuLHQoaVtnKzFdKT9udWxsOmlbZysxXS5lbG0saSxwLGcsbyk6cD5nJiZtKDAscixmLGQpfWZ1bmN0aW9uIF8ocixpLG8sYSl7aWYociE9PWkpe3ZhciBzPWkuZWxtPXIuZWxtO2lmKG4oci5pc0FzeW5jUGxhY2Vob2xkZXIpKWUoaS5hc3luY0ZhY3RvcnkucmVzb2x2ZWQpPyQoci5lbG0saSxvKTppLmlzQXN5bmNQbGFjZWhvbGRlcj0hMDtlbHNlIGlmKG4oaS5pc1N0YXRpYykmJm4oci5pc1N0YXRpYykmJmkua2V5PT09ci5rZXkmJihuKGkuaXNDbG9uZWQpfHxuKGkuaXNPbmNlKSkpaS5jb21wb25lbnRJbnN0YW5jZT1yLmNvbXBvbmVudEluc3RhbmNlO2Vsc2V7dmFyIGMsdT1pLmRhdGE7ZSh1KSYmZShjPXUuaG9vaykmJmUoYz1jLnByZXBhdGNoKSYmYyhyLGkpO3ZhciBsPXIuY2hpbGRyZW4scD1pLmNoaWxkcmVuO2lmKGUodSkmJmYoaSkpe2ZvcihjPTA7Yzx4LnVwZGF0ZS5sZW5ndGg7KytjKXgudXBkYXRlW2NdKHIsaSk7ZShjPXUuaG9vaykmJmUoYz1jLnVwZGF0ZSkmJmMocixpKX10KGkudGV4dCk/ZShsKSYmZShwKT9sIT09cCYmZyhzLGwscCxvLGEpOmUocCk/KGUoci50ZXh0KSYmQS5zZXRUZXh0Q29udGVudChzLFwiXCIpLHYocyxudWxsLHAsMCxwLmxlbmd0aC0xLG8pKTplKGwpP20oMCxsLDAsbC5sZW5ndGgtMSk6ZShyLnRleHQpJiZBLnNldFRleHRDb250ZW50KHMsXCJcIik6ci50ZXh0IT09aS50ZXh0JiZBLnNldFRleHRDb250ZW50KHMsaS50ZXh0KSxlKHUpJiZlKGM9dS5ob29rKSYmZShjPWMucG9zdHBhdGNoKSYmYyhyLGkpfX19ZnVuY3Rpb24gYih0LHIsaSl7aWYobihpKSYmZSh0LnBhcmVudCkpdC5wYXJlbnQuZGF0YS5wZW5kaW5nSW5zZXJ0PXI7ZWxzZSBmb3IodmFyIG89MDtvPHIubGVuZ3RoOysrbylyW29dLmRhdGEuaG9vay5pbnNlcnQocltvXSl9ZnVuY3Rpb24gJCh0LHIsaSxvKXt2YXIgYSxjPXIudGFnLHU9ci5kYXRhLGY9ci5jaGlsZHJlbjtpZihvPW98fHUmJnUucHJlLHIuZWxtPXQsbihyLmlzQ29tbWVudCkmJmUoci5hc3luY0ZhY3RvcnkpKXJldHVybiByLmlzQXN5bmNQbGFjZWhvbGRlcj0hMCwhMDtpZihlKHUpJiYoZShhPXUuaG9vaykmJmUoYT1hLmluaXQpJiZhKHIsITApLGUoYT1yLmNvbXBvbmVudEluc3RhbmNlKSkpcmV0dXJuIHMocixpKSwhMDtpZihlKGMpKXtpZihlKGYpKWlmKHQuaGFzQ2hpbGROb2RlcygpKWlmKGUoYT11KSYmZShhPWEuZG9tUHJvcHMpJiZlKGE9YS5pbm5lckhUTUwpKXtpZihhIT09dC5pbm5lckhUTUwpcmV0dXJuITF9ZWxzZXtmb3IodmFyIGQ9ITAsdj10LmZpcnN0Q2hpbGQsaD0wO2g8Zi5sZW5ndGg7aCsrKXtpZighdnx8ISQodixmW2hdLGksbykpe2Q9ITE7YnJlYWt9dj12Lm5leHRTaWJsaW5nfWlmKCFkfHx2KXJldHVybiExfWVsc2UgbChyLGYsaSk7aWYoZSh1KSl7dmFyIG09ITE7Zm9yKHZhciB5IGluIHUpaWYoIU8oeSkpe209ITAscChyLGkpO2JyZWFrfSFtJiZ1LmNsYXNzJiZXKHUuY2xhc3MpfX1lbHNlIHQuZGF0YSE9PXIudGV4dCYmKHQuZGF0YT1yLnRleHQpO3JldHVybiEwfXZhciBDLHcseD17fSxrPWkubW9kdWxlcyxBPWkubm9kZU9wcztmb3IoQz0wO0M8T2kubGVuZ3RoOysrQylmb3IoeFtPaVtDXV09W10sdz0wO3c8ay5sZW5ndGg7Kyt3KWUoa1t3XVtPaVtDXV0pJiZ4W09pW0NdXS5wdXNoKGtbd11bT2lbQ11dKTt2YXIgTz11KFwiYXR0cnMsY2xhc3Msc3RhdGljQ2xhc3Msc3RhdGljU3R5bGUsa2V5XCIpO3JldHVybiBmdW5jdGlvbihyLGksbyxzLGMsdSl7aWYoIXQoaSkpe3ZhciBsPSExLHA9W107aWYodChyKSlsPSEwLGEoaSxwLGMsdSk7ZWxzZXt2YXIgZD1lKHIubm9kZVR5cGUpO2lmKCFkJiZZdChyLGkpKV8ocixpLHAscyk7ZWxzZXtpZihkKXtpZigxPT09ci5ub2RlVHlwZSYmci5oYXNBdHRyaWJ1dGUoVm4pJiYoci5yZW1vdmVBdHRyaWJ1dGUoVm4pLG89ITApLG4obykmJiQocixpLHApKXJldHVybiBiKGkscCwhMCkscjtyPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgbXIoQS50YWdOYW1lKHQpLnRvTG93ZXJDYXNlKCkse30sW10sdm9pZCAwLHQpfShyKX12YXIgdj1yLmVsbSx5PUEucGFyZW50Tm9kZSh2KTtpZihhKGkscCx2Ll9sZWF2ZUNiP251bGw6eSxBLm5leHRTaWJsaW5nKHYpKSxlKGkucGFyZW50KSlmb3IodmFyIGc9aS5wYXJlbnQsQz1mKGkpO2c7KXtmb3IodmFyIHc9MDt3PHguZGVzdHJveS5sZW5ndGg7Kyt3KXguZGVzdHJveVt3XShnKTtpZihnLmVsbT1pLmVsbSxDKXtmb3IodmFyIGs9MDtrPHguY3JlYXRlLmxlbmd0aDsrK2speC5jcmVhdGVba10oQWksZyk7dmFyIE89Zy5kYXRhLmhvb2suaW5zZXJ0O2lmKE8ubWVyZ2VkKWZvcih2YXIgUz0xO1M8Ty5mbnMubGVuZ3RoO1MrKylPLmZuc1tTXSgpfWVsc2UgWHQoZyk7Zz1nLnBhcmVudH1lKHkpP20oMCxbcl0sMCwwKTplKHIudGFnKSYmaChyKX19cmV0dXJuIGIoaSxwLGwpLGkuZWxtfWUocikmJmgocil9fSh7bm9kZU9wczp4aSxtb2R1bGVzOltqaSxOaSxEaSxQaSx6aSxHbj97Y3JlYXRlOlZlLGFjdGl2YXRlOlZlLHJlbW92ZTpmdW5jdGlvbih0LGUpeyEwIT09dC5kYXRhLnNob3c/SGUodCxlKTplKCl9fTp7fV0uY29uY2F0KEVpKX0pO3RyJiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgdD1kb2N1bWVudC5hY3RpdmVFbGVtZW50O3QmJnQudm1vZGVsJiZaZSh0LFwiaW5wdXRcIil9KTt2YXIgbm89e2luc2VydGVkOmZ1bmN0aW9uKHQsZSxuLHIpe1wic2VsZWN0XCI9PT1uLnRhZz8oci5lbG0mJiFyLmVsbS5fdk9wdGlvbnM/WShuLFwicG9zdHBhdGNoXCIsZnVuY3Rpb24oKXtuby5jb21wb25lbnRVcGRhdGVkKHQsZSxuKX0pOnplKHQsZSxuLmNvbnRleHQpLHQuX3ZPcHRpb25zPVtdLm1hcC5jYWxsKHQub3B0aW9ucyxxZSkpOihcInRleHRhcmVhXCI9PT1uLnRhZ3x8d2kodC50eXBlKSkmJih0Ll92TW9kaWZpZXJzPWUubW9kaWZpZXJzLGUubW9kaWZpZXJzLmxhenl8fCh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixHZSksbnJ8fCh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbnN0YXJ0XCIsV2UpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uZW5kXCIsR2UpKSx0ciYmKHQudm1vZGVsPSEwKSkpfSxjb21wb25lbnRVcGRhdGVkOmZ1bmN0aW9uKHQsZSxuKXtpZihcInNlbGVjdFwiPT09bi50YWcpe3plKHQsZSxuLmNvbnRleHQpO3ZhciByPXQuX3ZPcHRpb25zLGk9dC5fdk9wdGlvbnM9W10ubWFwLmNhbGwodC5vcHRpb25zLHFlKTtpZihpLnNvbWUoZnVuY3Rpb24odCxlKXtyZXR1cm4hZyh0LHJbZV0pfSkpeyh0Lm11bHRpcGxlP2UudmFsdWUuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gSmUodCxpKX0pOmUudmFsdWUhPT1lLm9sZFZhbHVlJiZKZShlLnZhbHVlLGkpKSYmWmUodCxcImNoYW5nZVwiKX19fX0scm89e21vZGVsOm5vLHNob3c6e2JpbmQ6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudmFsdWUsaT0obj1YZShuKSkuZGF0YSYmbi5kYXRhLnRyYW5zaXRpb24sbz10Ll9fdk9yaWdpbmFsRGlzcGxheT1cIm5vbmVcIj09PXQuc3R5bGUuZGlzcGxheT9cIlwiOnQuc3R5bGUuZGlzcGxheTtyJiZpPyhuLmRhdGEuc2hvdz0hMCxSZShuLGZ1bmN0aW9uKCl7dC5zdHlsZS5kaXNwbGF5PW99KSk6dC5zdHlsZS5kaXNwbGF5PXI/bzpcIm5vbmVcIn0sdXBkYXRlOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLnZhbHVlO2lmKHIhPT1lLm9sZFZhbHVlKXsobj1YZShuKSkuZGF0YSYmbi5kYXRhLnRyYW5zaXRpb24/KG4uZGF0YS5zaG93PSEwLHI/UmUobixmdW5jdGlvbigpe3Quc3R5bGUuZGlzcGxheT10Ll9fdk9yaWdpbmFsRGlzcGxheX0pOkhlKG4sZnVuY3Rpb24oKXt0LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9KSk6dC5zdHlsZS5kaXNwbGF5PXI/dC5fX3ZPcmlnaW5hbERpc3BsYXk6XCJub25lXCJ9fSx1bmJpbmQ6ZnVuY3Rpb24odCxlLG4scixpKXtpfHwodC5zdHlsZS5kaXNwbGF5PXQuX192T3JpZ2luYWxEaXNwbGF5KX19fSxpbz17bmFtZTpTdHJpbmcsYXBwZWFyOkJvb2xlYW4sY3NzOkJvb2xlYW4sbW9kZTpTdHJpbmcsdHlwZTpTdHJpbmcsZW50ZXJDbGFzczpTdHJpbmcsbGVhdmVDbGFzczpTdHJpbmcsZW50ZXJUb0NsYXNzOlN0cmluZyxsZWF2ZVRvQ2xhc3M6U3RyaW5nLGVudGVyQWN0aXZlQ2xhc3M6U3RyaW5nLGxlYXZlQWN0aXZlQ2xhc3M6U3RyaW5nLGFwcGVhckNsYXNzOlN0cmluZyxhcHBlYXJBY3RpdmVDbGFzczpTdHJpbmcsYXBwZWFyVG9DbGFzczpTdHJpbmcsZHVyYXRpb246W051bWJlcixTdHJpbmcsT2JqZWN0XX0sb289e25hbWU6XCJ0cmFuc2l0aW9uXCIscHJvcHM6aW8sYWJzdHJhY3Q6ITAscmVuZGVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRzbG90cy5kZWZhdWx0O2lmKG4mJihuPW4uZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0LnRhZ3x8cnQodCl9KSkubGVuZ3RoKXt2YXIgaT10aGlzLm1vZGUsbz1uWzBdO2lmKGZ1bmN0aW9uKHQpe2Zvcig7dD10LnBhcmVudDspaWYodC5kYXRhLnRyYW5zaXRpb24pcmV0dXJuITB9KHRoaXMuJHZub2RlKSlyZXR1cm4gbzt2YXIgYT1ZZShvKTtpZighYSlyZXR1cm4gbztpZih0aGlzLl9sZWF2aW5nKXJldHVybiB0bih0LG8pO3ZhciBzPVwiX190cmFuc2l0aW9uLVwiK3RoaXMuX3VpZCtcIi1cIjthLmtleT1udWxsPT1hLmtleT9hLmlzQ29tbWVudD9zK1wiY29tbWVudFwiOnMrYS50YWc6cihhLmtleSk/MD09PVN0cmluZyhhLmtleSkuaW5kZXhPZihzKT9hLmtleTpzK2Eua2V5OmEua2V5O3ZhciBjPShhLmRhdGF8fChhLmRhdGE9e30pKS50cmFuc2l0aW9uPVFlKHRoaXMpLHU9dGhpcy5fdm5vZGUsbD1ZZSh1KTtpZihhLmRhdGEuZGlyZWN0aXZlcyYmYS5kYXRhLmRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbih0KXtyZXR1cm5cInNob3dcIj09PXQubmFtZX0pJiYoYS5kYXRhLnNob3c9ITApLGwmJmwuZGF0YSYmIWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUua2V5PT09dC5rZXkmJmUudGFnPT09dC50YWd9KGEsbCkmJiFydChsKSYmKCFsLmNvbXBvbmVudEluc3RhbmNlfHwhbC5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUuaXNDb21tZW50KSl7dmFyIGY9bC5kYXRhLnRyYW5zaXRpb249aCh7fSxjKTtpZihcIm91dC1pblwiPT09aSlyZXR1cm4gdGhpcy5fbGVhdmluZz0hMCxZKGYsXCJhZnRlckxlYXZlXCIsZnVuY3Rpb24oKXtlLl9sZWF2aW5nPSExLGUuJGZvcmNlVXBkYXRlKCl9KSx0bih0LG8pO2lmKFwiaW4tb3V0XCI9PT1pKXtpZihydChhKSlyZXR1cm4gdTt2YXIgcCxkPWZ1bmN0aW9uKCl7cCgpfTtZKGMsXCJhZnRlckVudGVyXCIsZCksWShjLFwiZW50ZXJDYW5jZWxsZWRcIixkKSxZKGYsXCJkZWxheUxlYXZlXCIsZnVuY3Rpb24odCl7cD10fSl9fXJldHVybiBvfX19LGFvPWgoe3RhZzpTdHJpbmcsbW92ZUNsYXNzOlN0cmluZ30saW8pO2RlbGV0ZSBhby5tb2RlO3ZhciBzbz17VHJhbnNpdGlvbjpvbyxUcmFuc2l0aW9uR3JvdXA6e3Byb3BzOmFvLHJlbmRlcjpmdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50YWd8fHRoaXMuJHZub2RlLmRhdGEudGFnfHxcInNwYW5cIixuPU9iamVjdC5jcmVhdGUobnVsbCkscj10aGlzLnByZXZDaGlsZHJlbj10aGlzLmNoaWxkcmVuLGk9dGhpcy4kc2xvdHMuZGVmYXVsdHx8W10sbz10aGlzLmNoaWxkcmVuPVtdLGE9UWUodGhpcykscz0wO3M8aS5sZW5ndGg7cysrKXt2YXIgYz1pW3NdO2MudGFnJiZudWxsIT1jLmtleSYmMCE9PVN0cmluZyhjLmtleSkuaW5kZXhPZihcIl9fdmxpc3RcIikmJihvLnB1c2goYyksbltjLmtleV09YywoYy5kYXRhfHwoYy5kYXRhPXt9KSkudHJhbnNpdGlvbj1hKX1pZihyKXtmb3IodmFyIHU9W10sbD1bXSxmPTA7ZjxyLmxlbmd0aDtmKyspe3ZhciBwPXJbZl07cC5kYXRhLnRyYW5zaXRpb249YSxwLmRhdGEucG9zPXAuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG5bcC5rZXldP3UucHVzaChwKTpsLnB1c2gocCl9dGhpcy5rZXB0PXQoZSxudWxsLHUpLHRoaXMucmVtb3ZlZD1sfXJldHVybiB0KGUsbnVsbCxvKX0sYmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5fX3BhdGNoX18odGhpcy5fdm5vZGUsdGhpcy5rZXB0LCExLCEwKSx0aGlzLl92bm9kZT10aGlzLmtlcHR9LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByZXZDaGlsZHJlbixlPXRoaXMubW92ZUNsYXNzfHwodGhpcy5uYW1lfHxcInZcIikrXCItbW92ZVwiO3QubGVuZ3RoJiZ0aGlzLmhhc01vdmUodFswXS5lbG0sZSkmJih0LmZvckVhY2goZW4pLHQuZm9yRWFjaChubiksdC5mb3JFYWNoKHJuKSx0aGlzLl9yZWZsb3c9ZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQuZGF0YS5tb3ZlZCl7dmFyIG49dC5lbG0scj1uLnN0eWxlO0llKG4sZSksci50cmFuc2Zvcm09ci5XZWJraXRUcmFuc2Zvcm09ci50cmFuc2l0aW9uRHVyYXRpb249XCJcIixuLmFkZEV2ZW50TGlzdGVuZXIoWmksbi5fbW92ZUNiPWZ1bmN0aW9uIHQocil7ciYmIS90cmFuc2Zvcm0kLy50ZXN0KHIucHJvcGVydHlOYW1lKXx8KG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihaaSx0KSxuLl9tb3ZlQ2I9bnVsbCxMZShuLGUpKX0pfX0pKX0sbWV0aG9kczp7aGFzTW92ZTpmdW5jdGlvbih0LGUpe2lmKCFKaSlyZXR1cm4hMTtpZih0aGlzLl9oYXNNb3ZlKXJldHVybiB0aGlzLl9oYXNNb3ZlO3ZhciBuPXQuY2xvbmVOb2RlKCk7dC5fdHJhbnNpdGlvbkNsYXNzZXMmJnQuX3RyYW5zaXRpb25DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24odCl7RWUobix0KX0pLFRlKG4sZSksbi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHRoaXMuJGVsLmFwcGVuZENoaWxkKG4pO3ZhciByPURlKG4pO3JldHVybiB0aGlzLiRlbC5yZW1vdmVDaGlsZChuKSx0aGlzLl9oYXNNb3ZlPXIuaGFzVHJhbnNmb3JtfX19fTtSdC5jb25maWcubXVzdFVzZVByb3A9ZmksUnQuY29uZmlnLmlzUmVzZXJ2ZWRUYWc9JGksUnQuY29uZmlnLmlzUmVzZXJ2ZWRBdHRyPXVpLFJ0LmNvbmZpZy5nZXRUYWdOYW1lc3BhY2U9R3QsUnQuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQ9ZnVuY3Rpb24odCl7aWYoIUduKXJldHVybiEwO2lmKCRpKHQpKXJldHVybiExO2lmKHQ9dC50b0xvd2VyQ2FzZSgpLG51bGwhPUNpW3RdKXJldHVybiBDaVt0XTt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpO3JldHVybiB0LmluZGV4T2YoXCItXCIpPi0xP0NpW3RdPWUuY29uc3RydWN0b3I9PT13aW5kb3cuSFRNTFVua25vd25FbGVtZW50fHxlLmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxFbGVtZW50OkNpW3RdPS9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QoZS50b1N0cmluZygpKX0saChSdC5vcHRpb25zLmRpcmVjdGl2ZXMscm8pLGgoUnQub3B0aW9ucy5jb21wb25lbnRzLHNvKSxSdC5wcm90b3R5cGUuX19wYXRjaF9fPUduP2VvOnksUnQucHJvdG90eXBlLiRtb3VudD1mdW5jdGlvbih0LGUpe3JldHVybiB0PXQmJkduP1p0KHQpOnZvaWQgMCxmdW5jdGlvbih0LGUsbil7dC4kZWw9ZSx0LiRvcHRpb25zLnJlbmRlcnx8KHQuJG9wdGlvbnMucmVuZGVyPWdyKSx2dCh0LFwiYmVmb3JlTW91bnRcIik7dmFyIHI7cmV0dXJuIHI9ZnVuY3Rpb24oKXt0Ll91cGRhdGUodC5fcmVuZGVyKCksbil9LG5ldyBLcih0LHIseSxudWxsLCEwKSxuPSExLG51bGw9PXQuJHZub2RlJiYodC5faXNNb3VudGVkPSEwLHZ0KHQsXCJtb3VudGVkXCIpKSx0fSh0aGlzLHQsZSl9LFJ0Lm5leHRUaWNrKGZ1bmN0aW9uKCl7Sm4uZGV2dG9vbHMmJmxyJiZsci5lbWl0KFwiaW5pdFwiLFJ0KX0sMCk7dmFyIGNvLHVvPS9cXHtcXHsoKD86LnxcXG4pKz8pXFx9XFx9L2csbG89L1stLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZyxmbz1wKGZ1bmN0aW9uKHQpe3ZhciBlPXRbMF0ucmVwbGFjZShsbyxcIlxcXFwkJlwiKSxuPXRbMV0ucmVwbGFjZShsbyxcIlxcXFwkJlwiKTtyZXR1cm4gbmV3IFJlZ0V4cChlK1wiKCg/Oi58XFxcXG4pKz8pXCIrbixcImdcIil9KSxwbz17c3RhdGljS2V5czpbXCJzdGF0aWNDbGFzc1wiXSx0cmFuc2Zvcm1Ob2RlOmZ1bmN0aW9uKHQsZSl7ZS53YXJuO3ZhciBuPWhlKHQsXCJjbGFzc1wiKTtuJiYodC5zdGF0aWNDbGFzcz1KU09OLnN0cmluZ2lmeShuKSk7dmFyIHI9dmUodCxcImNsYXNzXCIsITEpO3ImJih0LmNsYXNzQmluZGluZz1yKX0sZ2VuRGF0YTpmdW5jdGlvbih0KXt2YXIgZT1cIlwiO3JldHVybiB0LnN0YXRpY0NsYXNzJiYoZSs9XCJzdGF0aWNDbGFzczpcIit0LnN0YXRpY0NsYXNzK1wiLFwiKSx0LmNsYXNzQmluZGluZyYmKGUrPVwiY2xhc3M6XCIrdC5jbGFzc0JpbmRpbmcrXCIsXCIpLGV9fSx2bz17c3RhdGljS2V5czpbXCJzdGF0aWNTdHlsZVwiXSx0cmFuc2Zvcm1Ob2RlOmZ1bmN0aW9uKHQsZSl7ZS53YXJuO3ZhciBuPWhlKHQsXCJzdHlsZVwiKTtuJiYodC5zdGF0aWNTdHlsZT1KU09OLnN0cmluZ2lmeShGaShuKSkpO3ZhciByPXZlKHQsXCJzdHlsZVwiLCExKTtyJiYodC5zdHlsZUJpbmRpbmc9cil9LGdlbkRhdGE6ZnVuY3Rpb24odCl7dmFyIGU9XCJcIjtyZXR1cm4gdC5zdGF0aWNTdHlsZSYmKGUrPVwic3RhdGljU3R5bGU6XCIrdC5zdGF0aWNTdHlsZStcIixcIiksdC5zdHlsZUJpbmRpbmcmJihlKz1cInN0eWxlOihcIit0LnN0eWxlQmluZGluZytcIiksXCIpLGV9fSxobz1mdW5jdGlvbih0KXtyZXR1cm4gY289Y298fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksY28uaW5uZXJIVE1MPXQsY28udGV4dENvbnRlbnR9LG1vPXUoXCJhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGZyYW1lLGhyLGltZyxpbnB1dCxpc2luZGV4LGtleWdlbixsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdiclwiKSx5bz11KFwiY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyLHNvdXJjZVwiKSxnbz11KFwiYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJhc2UsYmxvY2txdW90ZSxib2R5LGNhcHRpb24sY29sLGNvbGdyb3VwLGRkLGRldGFpbHMsZGlhbG9nLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxoMSxoMixoMyxoNCxoNSxoNixoZWFkLGhlYWRlcixoZ3JvdXAsaHIsaHRtbCxsZWdlbmQsbGksbWVudWl0ZW0sbWV0YSxvcHRncm91cCxvcHRpb24scGFyYW0scnAscnQsc291cmNlLHN0eWxlLHN1bW1hcnksdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdGl0bGUsdHIsdHJhY2tcIiksX289L15cXHMqKFteXFxzXCInPD5cXC89XSspKD86XFxzKig9KVxccyooPzpcIihbXlwiXSopXCIrfCcoW14nXSopJyt8KFteXFxzXCInPTw+YF0rKSkpPy8sYm89XCJbYS16QS1aX11bXFxcXHdcXFxcLVxcXFwuXSpcIiwkbz1cIigoPzpcIitibytcIlxcXFw6KT9cIitibytcIilcIixDbz1uZXcgUmVnRXhwKFwiXjxcIiskbyksd289L15cXHMqKFxcLz8pPi8seG89bmV3IFJlZ0V4cChcIl48XFxcXC9cIiskbytcIltePl0qPlwiKSxrbz0vXjwhRE9DVFlQRSBbXj5dKz4vaSxBbz0vXjwhLS0vLE9vPS9ePCFcXFsvLFNvPSExO1wieFwiLnJlcGxhY2UoL3goLik/L2csZnVuY3Rpb24odCxlKXtTbz1cIlwiPT09ZX0pO3ZhciBUbyxFbyxqbyxObyxJbyxMbyxNbyxEbyxQbyxGbyxSbyxIbz11KFwic2NyaXB0LHN0eWxlLHRleHRhcmVhXCIsITApLEJvPXt9LFVvPXtcIiZsdDtcIjpcIjxcIixcIiZndDtcIjpcIj5cIixcIiZxdW90O1wiOidcIicsXCImYW1wO1wiOlwiJlwiLFwiJiMxMDtcIjpcIlxcblwiLFwiJiM5O1wiOlwiXFx0XCJ9LFZvPS8mKD86bHR8Z3R8cXVvdHxhbXApOy9nLHpvPS8mKD86bHR8Z3R8cXVvdHxhbXB8IzEwfCM5KTsvZyxLbz11KFwicHJlLHRleHRhcmVhXCIsITApLEpvPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQmJktvKHQpJiZcIlxcblwiPT09ZVswXX0scW89L15AfF52LW9uOi8sV289L152LXxeQHxeOi8sR289LyguKj8pXFxzKyg/OmlufG9mKVxccysoLiopLyxabz0vLChbXixcXH1cXF1dKikoPzosKFteLFxcfVxcXV0qKSk/JC8sWG89L15cXCh8XFwpJC9nLFlvPS86KC4qKSQvLFFvPS9eOnxedi1iaW5kOi8sdGE9L1xcLlteLl0rL2csZWE9cChobyksbmE9L154bWxuczpOU1xcZCsvLHJhPS9eTlNcXGQrOi8saWE9W3BvLHZvLHtwcmVUcmFuc2Zvcm1Ob2RlOmZ1bmN0aW9uKHQsZSl7aWYoXCJpbnB1dFwiPT09dC50YWcpe3ZhciBuPXQuYXR0cnNNYXA7aWYobltcInYtbW9kZWxcIl0mJihuW1widi1iaW5kOnR5cGVcIl18fG5bXCI6dHlwZVwiXSkpe3ZhciByPXZlKHQsXCJ0eXBlXCIpLGk9aGUodCxcInYtaWZcIiwhMCksbz1pP1wiJiYoXCIraStcIilcIjpcIlwiLGE9bnVsbCE9aGUodCxcInYtZWxzZVwiLCEwKSxzPWhlKHQsXCJ2LWVsc2UtaWZcIiwhMCksYz1mbih0KTt1bihjKSxmZShjLFwidHlwZVwiLFwiY2hlY2tib3hcIiksY24oYyxlKSxjLnByb2Nlc3NlZD0hMCxjLmlmPVwiKFwiK3IrXCIpPT09J2NoZWNrYm94J1wiK28sbG4oYyx7ZXhwOmMuaWYsYmxvY2s6Y30pO3ZhciB1PWZuKHQpO2hlKHUsXCJ2LWZvclwiLCEwKSxmZSh1LFwidHlwZVwiLFwicmFkaW9cIiksY24odSxlKSxsbihjLHtleHA6XCIoXCIrcitcIik9PT0ncmFkaW8nXCIrbyxibG9jazp1fSk7dmFyIGw9Zm4odCk7cmV0dXJuIGhlKGwsXCJ2LWZvclwiLCEwKSxmZShsLFwiOnR5cGVcIixyKSxjbihsLGUpLGxuKGMse2V4cDppLGJsb2NrOmx9KSxhP2MuZWxzZT0hMDpzJiYoYy5lbHNlaWY9cyksY319fX1dLG9hPXtleHBlY3RIVE1MOiEwLG1vZHVsZXM6aWEsZGlyZWN0aXZlczp7bW9kZWw6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudmFsdWUsaT1lLm1vZGlmaWVycyxvPXQudGFnLGE9dC5hdHRyc01hcC50eXBlO2lmKHQuY29tcG9uZW50KXJldHVybiBtZSh0LHIsaSksITE7aWYoXCJzZWxlY3RcIj09PW8pIWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj0ndmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLGZ1bmN0aW9uKG8pe3JldHVybiBvLnNlbGVjdGVkfSkubWFwKGZ1bmN0aW9uKG8pe3ZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7cmV0dXJuICcrKG4mJm4ubnVtYmVyP1wiX24odmFsKVwiOlwidmFsXCIpK1wifSk7XCI7cj1yK1wiIFwiK3llKGUsXCIkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cIiksZGUodCxcImNoYW5nZVwiLHIsbnVsbCwhMCl9KHQscixpKTtlbHNlIGlmKFwiaW5wdXRcIj09PW8mJlwiY2hlY2tib3hcIj09PWEpIWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uJiZuLm51bWJlcixpPXZlKHQsXCJ2YWx1ZVwiKXx8XCJudWxsXCIsbz12ZSh0LFwidHJ1ZS12YWx1ZVwiKXx8XCJ0cnVlXCIsYT12ZSh0LFwiZmFsc2UtdmFsdWVcIil8fFwiZmFsc2VcIjt1ZSh0LFwiY2hlY2tlZFwiLFwiQXJyYXkuaXNBcnJheShcIitlK1wiKT9faShcIitlK1wiLFwiK2krXCIpPi0xXCIrKFwidHJ1ZVwiPT09bz9cIjooXCIrZStcIilcIjpcIjpfcShcIitlK1wiLFwiK28rXCIpXCIpKSxkZSh0LFwiY2hhbmdlXCIsXCJ2YXIgJCRhPVwiK2UrXCIsJCRlbD0kZXZlbnQudGFyZ2V0LCQkYz0kJGVsLmNoZWNrZWQ/KFwiK28rXCIpOihcIithK1wiKTtpZihBcnJheS5pc0FycmF5KCQkYSkpe3ZhciAkJHY9XCIrKHI/XCJfbihcIitpK1wiKVwiOmkpK1wiLCQkaT1faSgkJGEsJCR2KTtpZigkJGVsLmNoZWNrZWQpeyQkaTwwJiYoXCIrZStcIj0kJGEuY29uY2F0KFskJHZdKSl9ZWxzZXskJGk+LTEmJihcIitlK1wiPSQkYS5zbGljZSgwLCQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkrMSkpKX19ZWxzZXtcIit5ZShlLFwiJCRjXCIpK1wifVwiLG51bGwsITApfSh0LHIsaSk7ZWxzZSBpZihcImlucHV0XCI9PT1vJiZcInJhZGlvXCI9PT1hKSFmdW5jdGlvbih0LGUsbil7dmFyIHI9biYmbi5udW1iZXIsaT12ZSh0LFwidmFsdWVcIil8fFwibnVsbFwiO3VlKHQsXCJjaGVja2VkXCIsXCJfcShcIitlK1wiLFwiKyhpPXI/XCJfbihcIitpK1wiKVwiOmkpK1wiKVwiKSxkZSh0LFwiY2hhbmdlXCIseWUoZSxpKSxudWxsLCEwKX0odCxyLGkpO2Vsc2UgaWYoXCJpbnB1dFwiPT09b3x8XCJ0ZXh0YXJlYVwiPT09bykhZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuYXR0cnNNYXAudHlwZSxpPW58fHt9LG89aS5sYXp5LGE9aS5udW1iZXIscz1pLnRyaW0sYz0hbyYmXCJyYW5nZVwiIT09cix1PW8/XCJjaGFuZ2VcIjpcInJhbmdlXCI9PT1yP0xpOlwiaW5wdXRcIixsPVwiJGV2ZW50LnRhcmdldC52YWx1ZVwiO3MmJihsPVwiJGV2ZW50LnRhcmdldC52YWx1ZS50cmltKClcIiksYSYmKGw9XCJfbihcIitsK1wiKVwiKTt2YXIgZj15ZShlLGwpO2MmJihmPVwiaWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpcmV0dXJuO1wiK2YpLHVlKHQsXCJ2YWx1ZVwiLFwiKFwiK2UrXCIpXCIpLGRlKHQsdSxmLG51bGwsITApLChzfHxhKSYmZGUodCxcImJsdXJcIixcIiRmb3JjZVVwZGF0ZSgpXCIpfSh0LHIsaSk7ZWxzZSBpZighSm4uaXNSZXNlcnZlZFRhZyhvKSlyZXR1cm4gbWUodCxyLGkpLCExO3JldHVybiEwfSx0ZXh0OmZ1bmN0aW9uKHQsZSl7ZS52YWx1ZSYmdWUodCxcInRleHRDb250ZW50XCIsXCJfcyhcIitlLnZhbHVlK1wiKVwiKX0saHRtbDpmdW5jdGlvbih0LGUpe2UudmFsdWUmJnVlKHQsXCJpbm5lckhUTUxcIixcIl9zKFwiK2UudmFsdWUrXCIpXCIpfX0saXNQcmVUYWc6ZnVuY3Rpb24odCl7cmV0dXJuXCJwcmVcIj09PXR9LGlzVW5hcnlUYWc6bW8sbXVzdFVzZVByb3A6ZmksY2FuQmVMZWZ0T3BlblRhZzp5byxpc1Jlc2VydmVkVGFnOiRpLGdldFRhZ05hbWVzcGFjZTpHdCxzdGF0aWNLZXlzOmZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiB0LmNvbmNhdChlLnN0YXRpY0tleXN8fFtdKX0sW10pLmpvaW4oXCIsXCIpfShpYSl9LGFhPXAoZnVuY3Rpb24odCl7cmV0dXJuIHUoXCJ0eXBlLHRhZyxhdHRyc0xpc3QsYXR0cnNNYXAscGxhaW4scGFyZW50LGNoaWxkcmVuLGF0dHJzXCIrKHQ/XCIsXCIrdDpcIlwiKSl9KSxzYT0vXlxccyooW1xcdyRfXSt8XFwoW14pXSo/XFwpKVxccyo9PnxeZnVuY3Rpb25cXHMqXFwoLyxjYT0vXlxccypbQS1aYS16XyRdW1xcdyRdKig/OlxcLltBLVphLXpfJF1bXFx3JF0qfFxcWycuKj8nXXxcXFtcIi4qP1wiXXxcXFtcXGQrXXxcXFtbQS1aYS16XyRdW1xcdyRdKl0pKlxccyokLyx1YT17ZXNjOjI3LHRhYjo5LGVudGVyOjEzLHNwYWNlOjMyLHVwOjM4LGxlZnQ6MzcscmlnaHQ6MzksZG93bjo0MCxkZWxldGU6WzgsNDZdfSxsYT1mdW5jdGlvbih0KXtyZXR1cm5cImlmKFwiK3QrXCIpcmV0dXJuIG51bGw7XCJ9LGZhPXtzdG9wOlwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1wiLHByZXZlbnQ6XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtcIixzZWxmOmxhKFwiJGV2ZW50LnRhcmdldCAhPT0gJGV2ZW50LmN1cnJlbnRUYXJnZXRcIiksY3RybDpsYShcIiEkZXZlbnQuY3RybEtleVwiKSxzaGlmdDpsYShcIiEkZXZlbnQuc2hpZnRLZXlcIiksYWx0OmxhKFwiISRldmVudC5hbHRLZXlcIiksbWV0YTpsYShcIiEkZXZlbnQubWV0YUtleVwiKSxsZWZ0OmxhKFwiJ2J1dHRvbicgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDBcIiksbWlkZGxlOmxhKFwiJ2J1dHRvbicgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDFcIikscmlnaHQ6bGEoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMlwiKX0scGE9e29uOmZ1bmN0aW9uKHQsZSl7dC53cmFwTGlzdGVuZXJzPWZ1bmN0aW9uKHQpe3JldHVyblwiX2coXCIrdCtcIixcIitlLnZhbHVlK1wiKVwifX0sYmluZDpmdW5jdGlvbih0LGUpe3Qud3JhcERhdGE9ZnVuY3Rpb24obil7cmV0dXJuXCJfYihcIituK1wiLCdcIit0LnRhZytcIicsXCIrZS52YWx1ZStcIixcIisoZS5tb2RpZmllcnMmJmUubW9kaWZpZXJzLnByb3A/XCJ0cnVlXCI6XCJmYWxzZVwiKSsoZS5tb2RpZmllcnMmJmUubW9kaWZpZXJzLnN5bmM/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifX0sY2xvYWs6eX0sZGE9ZnVuY3Rpb24odCl7dGhpcy5vcHRpb25zPXQsdGhpcy53YXJuPXQud2Fybnx8c2UsdGhpcy50cmFuc2Zvcm1zPWNlKHQubW9kdWxlcyxcInRyYW5zZm9ybUNvZGVcIiksdGhpcy5kYXRhR2VuRm5zPWNlKHQubW9kdWxlcyxcImdlbkRhdGFcIiksdGhpcy5kaXJlY3RpdmVzPWgoaCh7fSxwYSksdC5kaXJlY3RpdmVzKTt2YXIgZT10LmlzUmVzZXJ2ZWRUYWd8fEJuO3RoaXMubWF5YmVDb21wb25lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIWUodC50YWcpfSx0aGlzLm9uY2VJZD0wLHRoaXMuc3RhdGljUmVuZGVyRm5zPVtdfSx2YT0obmV3IFJlZ0V4cChcIlxcXFxiXCIrXCJkbyxpZixmb3IsbGV0LG5ldyx0cnksdmFyLGNhc2UsZWxzZSx3aXRoLGF3YWl0LGJyZWFrLGNhdGNoLGNsYXNzLGNvbnN0LHN1cGVyLHRocm93LHdoaWxlLHlpZWxkLGRlbGV0ZSxleHBvcnQsaW1wb3J0LHJldHVybixzd2l0Y2gsZGVmYXVsdCxleHRlbmRzLGZpbmFsbHksY29udGludWUsZGVidWdnZXIsZnVuY3Rpb24sYXJndW1lbnRzXCIuc3BsaXQoXCIsXCIpLmpvaW4oXCJcXFxcYnxcXFxcYlwiKStcIlxcXFxiXCIpLG5ldyBSZWdFeHAoXCJcXFxcYlwiK1wiZGVsZXRlLHR5cGVvZix2b2lkXCIuc3BsaXQoXCIsXCIpLmpvaW4oXCJcXFxccypcXFxcKFteXFxcXCldKlxcXFwpfFxcXFxiXCIpK1wiXFxcXHMqXFxcXChbXlxcXFwpXSpcXFxcKVwiKSxmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbihuLHIpe3ZhciBpPU9iamVjdC5jcmVhdGUoZSksbz1bXSxhPVtdO2lmKGkud2Fybj1mdW5jdGlvbih0LGUpeyhlP2E6bykucHVzaCh0KX0scil7ci5tb2R1bGVzJiYoaS5tb2R1bGVzPShlLm1vZHVsZXN8fFtdKS5jb25jYXQoci5tb2R1bGVzKSksci5kaXJlY3RpdmVzJiYoaS5kaXJlY3RpdmVzPWgoT2JqZWN0LmNyZWF0ZShlLmRpcmVjdGl2ZXN8fG51bGwpLHIuZGlyZWN0aXZlcykpO2Zvcih2YXIgcyBpbiByKVwibW9kdWxlc1wiIT09cyYmXCJkaXJlY3RpdmVzXCIhPT1zJiYoaVtzXT1yW3NdKX12YXIgYz10KG4saSk7cmV0dXJuIGMuZXJyb3JzPW8sYy50aXBzPWEsY31yZXR1cm57Y29tcGlsZTpuLGNvbXBpbGVUb0Z1bmN0aW9uczpmdW5jdGlvbih0KXt2YXIgZT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBmdW5jdGlvbihuLHIsaSl7KHI9aCh7fSxyKSkud2FybixkZWxldGUgci53YXJuO3ZhciBvPXIuZGVsaW1pdGVycz9TdHJpbmcoci5kZWxpbWl0ZXJzKStuOm47aWYoZVtvXSlyZXR1cm4gZVtvXTt2YXIgYT10KG4scikscz17fSxjPVtdO3JldHVybiBzLnJlbmRlcj1UbihhLnJlbmRlcixjKSxzLnN0YXRpY1JlbmRlckZucz1hLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIFRuKHQsYyl9KSxlW29dPXN9fShuKX19fShmdW5jdGlvbih0LGUpe3ZhciBuPXNuKHQudHJpbSgpLGUpOyExIT09ZS5vcHRpbWl6ZSYmZnVuY3Rpb24odCxlKXt0JiYoUG89YWEoZS5zdGF0aWNLZXlzfHxcIlwiKSxGbz1lLmlzUmVzZXJ2ZWRUYWd8fEJuLHBuKHQpLGRuKHQsITEpKX0obixlKTt2YXIgcj15bihuLGUpO3JldHVybnthc3Q6bixyZW5kZXI6ci5yZW5kZXIsc3RhdGljUmVuZGVyRm5zOnIuc3RhdGljUmVuZGVyRm5zfX0pKG9hKS5jb21waWxlVG9GdW5jdGlvbnMpLGhhPSEhR24mJkVuKCExKSxtYT0hIUduJiZFbighMCkseWE9cChmdW5jdGlvbih0KXt2YXIgZT1adCh0KTtyZXR1cm4gZSYmZS5pbm5lckhUTUx9KSxnYT1SdC5wcm90b3R5cGUuJG1vdW50O3JldHVybiBSdC5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKHQsZSl7aWYoKHQ9dCYmWnQodCkpPT09ZG9jdW1lbnQuYm9keXx8dD09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudClyZXR1cm4gdGhpczt2YXIgbj10aGlzLiRvcHRpb25zO2lmKCFuLnJlbmRlcil7dmFyIHI9bi50ZW1wbGF0ZTtpZihyKWlmKFwic3RyaW5nXCI9PXR5cGVvZiByKVwiI1wiPT09ci5jaGFyQXQoMCkmJihyPXlhKHIpKTtlbHNle2lmKCFyLm5vZGVUeXBlKXJldHVybiB0aGlzO3I9ci5pbm5lckhUTUx9ZWxzZSB0JiYocj1mdW5jdGlvbih0KXtpZih0Lm91dGVySFRNTClyZXR1cm4gdC5vdXRlckhUTUw7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5hcHBlbmRDaGlsZCh0LmNsb25lTm9kZSghMCkpLGUuaW5uZXJIVE1MfSh0KSk7aWYocil7dmFyIGk9dmEocix7c2hvdWxkRGVjb2RlTmV3bGluZXM6aGEsc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmOm1hLGRlbGltaXRlcnM6bi5kZWxpbWl0ZXJzLGNvbW1lbnRzOm4uY29tbWVudHN9LHRoaXMpLG89aS5yZW5kZXIsYT1pLnN0YXRpY1JlbmRlckZucztuLnJlbmRlcj1vLG4uc3RhdGljUmVuZGVyRm5zPWF9fXJldHVybiBnYS5jYWxsKHRoaXMsdCxlKX0sUnQuY29tcGlsZT12YSxSdH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLm1pbi5qcyIsInZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1laWRhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgLy8ge1xyXG4gIC8vICB0aXRsZTogXCLQnNCw0LPQsNC30LjQvS3QsNGC0LXQu9GM0LUgSXRvLXNhbWFcIixcclxuICAvLyAgcGF0aDogXCIyMDA5LXh4LS1pdG8tc2FtYS93d3cvXCIsXHJcbiAgLy8gIHBhZ2VzOiBbXCJodHRwOi8vaXRvLXNhbWEucnUvaW5kZXgucGhwXCIsXCJodHRwOi8vaXRvLXNhbWEucnUvY2F0YWxvZy5waHBcIixcImh0dHA6Ly9pdG8tc2FtYS5ydS9mYWJyaWMucGhwXCJdLFxyXG4gIC8vICBkZXNjcmlwdGlvbjogXCLQnNGD0LbRgdC60LDRjyDQuCDQttC10L3RgdC60LDRjyDQvtC00LXQttC00LAsINGA0LXQstC+0LvRjtGG0LjQvtC90L3QsNGPINCx0LDRhdGA0L7QvNCwINC00LXRgtC10LrRgtC10LQuXCIsXHJcbiAgLy8gIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gIC8vICBhbGl2ZTogXCJodHRwOi8vaXRvLXNhbWEucnVcIlxyXG4gIC8vIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUENOZXdzXCIsXHJcbiAgICBwYXRoOiBcIjIwMDktMDctLW5lcTQtLXBjbmV3cy93d3cvXCIsXHJcbiAgICBwYWdlczogW1wicGNuZXdzLXN0YXJ0Lmh0bWxcIixcInBjbmV3cy1pbmRleC1uZXdzLmh0bWxcIixcInBjbmV3cy1hcnRpY2xlLXRvcDIwLmh0bWxcIixcInBjbmV3cy1zZWFyY2gtcmVzdWx0cy5odG1sXCIsXCJwY25ld3MtdGVhci5odG1sXCIsXCJwY25ld3MtdGV4dC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQmV3YXJlISAyMDA5INCz0L7QtCwg0L/QtdGA0LLRi9C5INC70LXRgtC+0L/QuNGB0L3Ri9C5INC30LDQutCw0LcsINC+0YUg0Lgg0L3QsNC80YPRh9Cw0LvRgdGPINGPINGBINC90LjQvC5cIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cDovL3BjbmV3cy5ydVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQmtC40L3QvtCX0LDQstC+0LRcIixcclxuICAgIHBhdGg6IFwiMjAwOS0wNy0tc2xhdmEta29tYXJvdi0ta2lub3phdm9kL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJpbmRleC0yMDIuaHRtbFwiLFwiaW5kZXgtMzAyLmh0bWxcIixcImluZGV4LTQwMi5odG1sXCIsXCJpbmRleC01MDIuaHRtbFwiLFwiaW5kZXgtNjAyLmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQntC/0LXRgNCw0YLQvtGA0YHQutC+0LUg0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1XCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly93d3cua2lub3phdm9kLnJ1XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxpdHRsZSBGaXNoXCIsXHJcbiAgICBwYXRoOiBcIjIwMDktMDgtLXNtaWxlLS1saXR0bGUtZmlzaC12MS93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCh0YLQsNGA0YvQuSDQtNC40LfQsNC50L0g0YHRgtGD0LTQuNC4INGA0LjRgdGD0L3QutCwIGxpdHRsZS1maXNoXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQXN0ZXIgR29sZFwiLFxyXG4gICAgcGF0aDogXCIyMDA5LTEwLS1yb21hbi1tYW5kcmlrLS1hc3Rlci1nb2xkL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJhc3RlcmdvbGQuaHRtbFwiLFwiYXN0ZXJnb2xkLWJhc2tldC5odG1sXCIsXCJhc3RlcmdvbGQtaW5uZXIuaHRtbFwiLFwiYXN0ZXJnb2xkLW9yZGVyLXJlZ2lzdGVyLmh0bWxcIixcImFzdGVyZ29sZC1wcm9kdWN0Lmh0bWxcIixcImFzdGVyZ29sZC1wcm9maWxlLmh0bWxcIixcImFzdGVyZ29sZC1zdGF0aWMtcGFnZS5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0JHRgNGO0LvQuNC60LggJiDQutC+0LvQtdGH0LrQuFwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCh0L3RiyBpINGB0LXQutGA0LXRgtGLXCIsXHJcbiAgICBwYXRoOiBcIjIwMDktMTItLXJvbWFuLW1hbmRyaWstLXNuaS1pLXNlY3JldGkvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcInNueS1tYWluLmh0bWxcIixcInNueS1iYXNrZXQuaHRtbFwiLFwic255LWNhdGFsb2cuaHRtbFwiLFwic255LWNoZWNrb3V0Lmh0bWxcIixcInNueS1wcm9kdWN0Lmh0bWxcIixcInNueS10ZXh0Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQmNC90YLQtdGA0L3QtdGCLdC80LDQs9Cw0LfQuNC9INC/0L7QtNGD0YjQtdC6INC4INGB0L/QsNC90YzRj1wiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCc0LDRiNCwINCa0YDQsNGB0L3QvtCy0LAt0KjQsNCx0LDQtdCy0LBcIixcclxuICAgIHBhdGg6IFwiMjAxMC0wNC0tc2VyZ2V5LWtydWstLW1hc2hhLWtyYXNub3ZhLXNoYWJhZXZhL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJtYWluLmh0bWxcIixcImJhY2tncm91bmQtdmVyMS5odG1sXCIsXCJiYWNrZ3JvdW5kLXZlcjIuaHRtbFwiLFwiYmFja2dyb3VuZC12ZXIzLmh0bWxcIixcImJsb2cuaHRtbFwiLFwicG9zdC1hbmQtY29tbWVudHMuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCd0YPQttC90L4g0L/RgNC40LfQvdCw0YLRjCDRgdC+0LLRgNC10LzQtdC90L3QvtC1INC40YHQutGD0YHRgdGC0LLQviDRjyDRgdC+0LLQtdGA0YjQtdC90L3QviDQvdC1INCy0YDRg9Cx0LDRjiwg0L3QviDQstC10YDRgdGC0LDRgtGMINGN0YLQviDQvdC1INC80LXRiNCw0LXRgi5cIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cDovL21hc2h1c2hrYS5jb21cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2VzdGVybiBVbmlvblwiLFxyXG4gICAgcGF0aDogXCIyMDEwLTA1LS1hcmllcy0td2VzdGVybi11bmlvbi93d3cvXCIsXHJcbiAgICBwYWdlczogW1wid3Utc2VhcmNoLW1haW5wYWdlLmh0bWxcIixcInd1LXNlYXJjaC1jaXRpZXNwYWdlLmh0bWxcIixcInd1LXNlYXJjaC1vZmZpY2VwYWdlLmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQn9C+0LjRgdC6INC+0YTQuNGB0L7QslwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCU0YDRg9C40LTRgdC60LjQuSDQutCw0LvRjNC60YPQu9GP0YLQvtGAXCIsXHJcbiAgICBwYXRoOiBcIjIwMTAtMDYtLWtydnNzLS1yZXN0by1kcnVpZC1oZWFsZXItY2FsY3VsYXRvci93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCh0YLRgNC+0LjQvCDRgNC10YHRgtC+LdCx0LjQu9C00YsuICNsb2xXMDB0XCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly90cmVlY2FsY3MuY29tXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCh0LXRgNC10LHRgNC+INCd0LXQv9Cw0LvQsFwiLFxyXG4gICAgcGF0aDogXCIyMDEwLTA3LS1yb21hbi12b3J1c2hpbi0tc2VyZWJyby1uZXBhbGEvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcInNlcmVicm8tbWFpbi5odG1sXCIsXCJzZXJlYnJvLWJhc2tldC5odG1sXCIsXCJzZXJlYnJvLWZvcm0uaHRtbFwiLFwic2VyZWJyby1pbmZvLmh0bWxcIixcInNlcmVicm8tdG92YXIuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCY0L3RgtC10YDQvdC10YIt0LzQsNCz0LDQt9C40L0g0L/RgNC40LrQvtC70YzQvdGL0YUg0LHQtdC30LTQtdC70YPRiNC10LpcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogXCJOaWEgU3R5bGVcIixcclxuICAvLyAgIHBhdGg6IFwiMjAxMC0wOS0tZXVnZW5lLW1lc2hlcmpha292LS1uaWEtc3R5bGUvd3d3L1wiLFxyXG4gIC8vICAgcGFnZXM6IFtcIm5pYS1zdHlsZS1kZWZhdWx0Lmh0bWxcIixcIm5pYS1zdHlsZS1hcnQuaHRtbFwiLFwibmlhLXN0eWxlLWNhdDEuaHRtbFwiLFwibmlhLXN0eWxlLWNhdDIuaHRtbFwiLFwibmlhLXN0eWxlLXRleHQuaHRtbFwiXSxcclxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCn0YLQvi3RgtC+INC90LXRgdGD0YHQstC10YLQvdC+0LUgKDxxPtC90Y8t0YHRgtCw0LnQuzwvcT4/PyksINC90L4g0YLQsNC60L7QtSDRjyDRgtC+0LbQtSDQstC10YDRgdGC0LDRjlwiLFxyXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogXCJTbWFydFRyYW5zXCIsXHJcbiAgLy8gICBwYXRoOiBcIjIwMTAtMTAtLWFsLW5pa28tLXNtYXJ0dHJhbnMvd3d3L1wiLFxyXG4gIC8vICAgcGFnZXM6IFtcInNtYXJ0dHJhbnMtYWJvdXQuaHRtbFwiXSxcclxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCt0YLQviDQvdC1INGC0YDQsNC90YHQv9C+0YDRgiwg0Y3RgtC+INGP0LfRi9C60L7QstGL0LUg0L/QtdGA0LXQstC+0LTRi1wiLFxyXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogXCJVbmlDcmVkaXRcIixcclxuICAvLyAgIHBhdGg6IFwiMjAxMC0xMS0tZGFzaGEta2FyYW5kYXNoZXZhLS11bmljcmVkaXQtd2lkZ2V0L3d3dy9cIixcclxuICAvLyAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxyXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0JLQuNC00LbQtdGCINC00LvRjyBNYWNcIixcclxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gIC8vIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTXIuIFdvb2RtYW4gdjEuMFwiLFxyXG4gICAgcGF0aDogXCIyMDEwLXh4LS1tci13b29kbWFuLXYxL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0JzQvtC5INC80LXQs9Cw0YHQsNC50YIg0L/QtdGA0LLQvtC5INCy0LXRgNGB0LjQuC4gI9CU0LjQt9Cw0LnQvSZVWFwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCj0YXRgtGL0YjQutCwXCIsXHJcbiAgICBwYXRoOiBcIjIwMTEtMDMtLXNtaWxlLS11aHR5c2hrYS93d3cvXCIsXHJcbiAgICBwYWdlczogW1widWh0eS1tYWluLmh0bWxcIixcInVodHktYWJvdXQtdXMuaHRtbFwiLFwidWh0eS1hY3RpdmF0aW9uLmh0bWxcIixcInVodHktY29udGFjdHMuaHRtbFwiLFwidWh0eS1kb3N0YXZrYS5odG1sXCIsXCJ1aHR5LWdvb2RpZXMuaHRtbFwiLFwidWh0eS1ob3ctdGhpcy13b3Jrcy5odG1sXCIsXCJ1aHR5LXBob3RvLmh0bWxcIixcInVodHktcHJvZHVjdC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0KHQutGA0L7QvNC90L4g0L3QviDQvNC40LvQvlwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogXCJZb2dhRGFcIixcclxuICAvLyAgIHBhdGg6IFwiMjAxMS0wNS0tc2VhbmF0LS15b2dhZGEvd3d3L1wiLFxyXG4gIC8vICAgcGFnZXM6IFtcInlvZ2FkYS1tYWluLmh0bWxcIixcInlvZ2FkYS00MDQuaHRtbFwiLFwieW9nYWRhLWFsbC11c2Vycy5odG1sXCIsXCJ5b2dhZGEtYmxvZy5odG1sXCIsXCJ5b2dhZGEtYmxvZy1wb3N0Lmh0bWxcIixcInlvZ2FkYS1ibG9ncy5odG1sXCIsXCJ5b2dhZGEtYmxvZ3MtYWxsLWVudHJpZXMuaHRtbFwiLFwieW9nYWRhLWJsb2dzLW5ld3Bvc3QuaHRtbFwiLFwieW9nYWRhLWNvbW1lbnRzLmh0bWxcIixcInlvZ2FkYS1lYXN0cHJhY3RpY2VzLmh0bWxcIixcInlvZ2FkYS1mcmVlZGl2ZS5odG1sXCIsXCJ5b2dhZGEtbWFpbi1sb2dpbi5odG1sXCIsXCJ5b2dhZGEtbWVyb3ByaWphdGlqYS5odG1sXCIsXCJ5b2dhZGEtbmV3cy5odG1sXCIsXCJ5b2dhZGEtcGhvdG8uaHRtbFwiLFwieW9nYWRhLXBob3Rvcy5odG1sXCIsXCJ5b2dhZGEtcGhvdG9zLWFsYnVtLmh0bWxcIixcInlvZ2FkYS1wbGFjZXMuaHRtbFwiLFwieW9nYWRhLXByb2ZpbGUuaHRtbFwiLFwieW9nYWRhLXNlYXJjaC1yZXN1bHRzLmh0bWxcIixcInlvZ2FkYS10ZXh0Lmh0bWxcIixcInlvZ2FkYS10ZXh0LXByaW50Lmh0bWxcIixcInlvZ2FkYS10ZXh0cy5odG1sXCIsXCJ5b2dhZGEtdGhlbWUuaHRtbFwiLFwieW9nYWRhLXRoZW1lcy5odG1sXCIsXCJ5b2dhZGEtdHJhdmVsLmh0bWxcIixcInlvZ2FkYS12aWRlb3MuaHRtbFwiLFwieW9nYWRhLXphZ2x1c2hrYS5odG1sXCJdLFxyXG4gIC8vICAgZGVzY3JpcHRpb246IFwi0J/QtdGA0LXRg9GB0LvQvtC20L3QtdC90L3Ri9C5INGB0LDQudGCLCDQvtGI0LXQu9C+0LzQu9GP0Y7RidC10LUg0LLQtdC00LXQvdC40LUg0L/RgNC+0LXQutGC0LAuICPQnNC40LvRjNGP0YDQtNCo0LDQsdC70L7QvdC+0LIsICPQnNC40LvRjNGP0YDQtNCf0YDQsNCy0L7QulwiLFxyXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQm9C10LrRhtC40Y8gQWhtYWQgVGVhXCIsXHJcbiAgICBwYXRoOiBcIjIwMTEtMDctLXNhbWFydHNldi0tYWhtYWQtdGVhLWxlY3R1cmUvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQn9GA0L4g0YfQsNC5LCDQtdGB0YLQtdGB0YLQstC10L3QvdC+LiDQn9GA0L7RgdGC0LXQvdGM0LrQviwg0L3QviDRh9C10YLQutC+LlwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYXJzXCIsXHJcbiAgICBwYXRoOiBcIjIwMTEtMDgtLWRpbWEta29taXNzYXJvdi0tYmFycy93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiYmFycy1pbmRleC5odG1sXCIsXCJiYXJzLWFkdmFudGFnZXMuaHRtbFwiLFwiYmFycy1hbGwtb3Zlci1ydXNzaWEuaHRtbFwiLFwiYmFycy1jb25maWd1cmF0b3IuaHRtbFwiLFwiYmFycy1jb250YWN0cy5odG1sXCIsXCJiYXJzLWRlYWxlci5odG1sXCIsXCJiYXJzLWRlYWxlcnMuaHRtbFwiLFwiYmFycy1kb29yLWNvdmVyLWVib255Lmh0bWxcIixcImJhcnMtZG9vci1jb3ZlcnMuaHRtbFwiLFwiYmFycy1kb29yLWNvdmVyLXZlbmdlLmh0bWxcIixcImJhcnMtZG9vci1kZXNpZ24tY2xhc3NpY2EuaHRtbFwiLFwiYmFycy1kb29yLWRlc2lnbnMuaHRtbFwiLFwiYmFycy1pbmZvcm1hdGlvbi5odG1sXCIsXCJiYXJzLXBob3RvZ2FsbGVyeS5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0J3QsNCy0L7RgNC+0YfQtdC90L3QsNGPINCy0ZHRgNGB0YLQutCwINC/0YDQviDQtNCy0LXRgNC4LiAj0JrRgNGD0YLQsNGP0KDQtdC30LjQvdCwLCAj0JzQuNC70YzRj9GA0LTQqNCw0LHQu9C+0L3QvtCyXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmFycyBJSVwiLFxyXG4gICAgcGF0aDogXCIyMDExLTA4LS1kaW1hLWtvbWlzc2Fyb3YtLWJhcnMtMi93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiYmFyczItaW5kZXguaHRtbFwiLFwiYmFyczItYWJvdXQuaHRtbFwiLFwiYmFyczItYWJvdXQtb2xkLmh0bWxcIixcImJhcnMyLWRlYWxlcnMuaHRtbFwiLFwiYmFyczItZG9vcnMuaHRtbFwiLFwiYmFyczItZG9vcnMtbG9ja3NuaGFuZGxlcy5odG1sXCIsXCJiYXJzMi1kb29ycy1ub25zdGFuZGFyZC5odG1sXCIsXCJiYXJzMi1kb29ycy13aHliYXJzLmh0bWxcIixcImJhcnMyLWZvcnVtLXBvc3QtY29tbWVudHMuaHRtbFwiLFwiYmFyczItZm9ydW0tcG9zdHMtbGlzdC5odG1sXCIsXCJiYXJzMi1rb25maWd1cmF0b3ItbW9kZWxzLmh0bWxcIixcImJhcnMyLWtvbmZpZ3VyYXRvci12YXJzLmh0bWxcIixcImJhcnMyLWtvbmZpZ3VyYXRvci12YXJzMi5odG1sXCIsXCJiYXJzMi1taW5vcmEuaHRtbFwiLFwiYmFyczItbWlub3JhLWFib3V0Lmh0bWxcIixcImJhcnMyLW1pbm9yYS10ZWNocy5odG1sXCIsXCJiYXJzMi1taW5vcmEtdmFycy5odG1sXCIsXCJiYXJzMi1zaG93cm9vbS5odG1sXCIsXCJiYXJzMi1zaG93cm9vbS1wcmludC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0JLRgtC+0YDQsNGPINCy0LXRgNGB0LjRjyDRgdCw0LnRgtCwLiAj0JrRgNGD0YLQsNGP0KDQtdC30LjQvdCwXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly93d3cuYmFyc2Rvb3JzLnJ1XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJhcnNcIixcclxuICAgIHBhdGg6IFwiMjAxMS0wOC0tZGltYS1rb21pc3Nhcm92LS1iYXJzLWZvci1kZXNpZ25lcnMvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImJhcnMyZGVzaWduZXJzLWluZGV4Lmh0bWxcIixcImJhcnMyZGVzaWduZXJzLXNjaGVtZS5odG1sXCIsXCJiYXJzMmRlc2lnbmVycy1yZXNlcnZlLmh0bWxcIixcImJhcnMyZGVzaWduZXJzLXBob3RvLmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQlNCy0LXRgNC4LiDQodCw0LnRgiDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjyDQtNC70Y8g0LTQuNC30LDQudC90LXRgNC+0LIg0LjQvdGC0LXRgNGM0LXRgNC+0LJcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi0JDQtNCy0L7QutCw0YLRgdC60LjQuSDQutC70YPQsVwiLFxyXG4gICAgcGF0aDogXCIyMDExLTEyLS1kaW1hLWtvbWlzc2Fyb3YtLWFkdm9jYXRlLWNsdWIvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImFjLWluZGV4LXRlbXAuaHRtbFwiLFwiYWMtaW5kZXgtY3VzdG9tZXJzLmh0bWxcIixcImFjLWluZGV4LWFkdm9jYXRzLmh0bWxcIixcImN1c3RvbWVycy1pbmRleC5odG1sXCIsXCJjdXN0b21lcnMtaG93Lmh0bWxcIixcImN1c3RvbWVycy1mYXEuaHRtbFwiLFwiYWR2b2NhdHMtcmVnaXN0cmF0aW9uLmh0bWxcIixcImFkdm9jYXRzLXByaXZpbGVnZXMuaHRtbFwiLFwiYWMtcmV2aWV3cy5odG1sXCIsXCJhYy1pbmZvLmh0bWxcIixcImFjLWhvdy1jdXN0b21lcnMuaHRtbFwiLFwiYWMtY3VzdG9tZXItcGVyc29uYWwtY2FiaW5ldC5odG1sXCIsXCJhYy1hcnRpY2xlLmh0bWxcIixcImFjLWFkdm9jYXQtaG9tZXBhZ2UuaHRtbFwiLFwiYWMtYWR2aWNlcy5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0JzQuNC70YzRj9GA0LQg0YjQsNCx0LvQvtC90L7Qsiwg0LjQvdGC0LXRgNC10YHQvdGL0LUg0YXQvtC00Ysg0YEg0YjRgNC40YTRgtCw0LzQuCDQuCDQtNC+0YDQtdCy0L7Qu9GO0YbQuNC+0L3QvdGL0Lkg0LLQuNC00LbQtdGCIDxxPtCw0LrQutC+0YDQtNC10L7QvTwvcT5cIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRmFjZWJvb2st0LzQsNCz0LDQt9C40L0gQWhtYWQgVGVhXCIsXHJcbiAgICBwYXRoOiBcIjIwMTItMDMtLWFyaWVzLS1haG1hZC10ZWEtZmFjZWJvb2svd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImFobWFkLWluZGV4Lmh0bWxcIixcImFobWFkLWNhdGVnb3J5Lmh0bWxcIixcImFobWFkLXNlYXJjaC5odG1sXCIsXCJhaG1hZC1pdGVtLmh0bWxcIixcImFobWFkLXN0ZXAxLmh0bWxcIixcImFobWFkLWhpc3RvcnkuaHRtbFwiLFwiYWhtYWQtc3RlcDMuaHRtbFwiLFwiYWhtYWQtZW1haWwuaHRtbFwiLFwiYWhtYWQtc3RlcDQuaHRtbFwiLFwiYWhtYWQtc3RlcDIuaHRtbFwiLFwiYWhtYWQtYWJvdXQuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCf0YDQvtGB0YLQviDQuCDQutC70LXQstC+XCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0XCIsXHJcbiAgICBhbGl2ZTogXCJodHRwczovL2FwcHMuZmFjZWJvb2suY29tL2FobWFkdGVhc3RvcmUvXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCU0YvQvNC+0LJcIixcclxuICAgIHBhdGg6IFwiMjAxMi0wNC0tcnVkeS0tZHltb3Yvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImR5bW92LWluZGV4Lmh0bWxcIixcImR5bW92LXJlY2VwdHkuaHRtbFwiLFwiZHltb3YtcmVjZXB0eS1pbnNpZGUuaHRtbFwiLFwiZHltb3YtcHJvZHVrY2lhLmh0bWxcIixcImR5bW92LXByb2R1a2NpYS1pbnNpZGUuaHRtbFwiLFwiZHltb3Ytby1uYXMuaHRtbFwiLFwiZHltb3Ytbm92b3N0aS5odG1sXCIsXCJkeW1vdi1ub3Zvc3RpLWluc2lkZS5odG1sXCIsXCJkeW1vdi1rb250YWt0eS5odG1sXCIsXCJkeW1vdi1rYXJqZXJhLmh0bWxcIixcImR5bW92LWthY2hlc3R2by1pLWJlem9wYXNub3N0Lmh0bWxcIixcImR5bW92LWlzdG9yaWphLmh0bWxcIixcImR5bW92LWludmVzdG9yYW0uaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCc0Y/RgdC+LiDQmtC+0LvQsdCw0YHQsC4g0JTQsNC20LUg0KLQki3QutCw0L3QsNC7INC/0YDQviDQutC+0YLQu9C10YLRiyEg0JIg0L7QsdGJ0LXQvCwg0L/RgNC+0YHRgtC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvQuSDRgdCw0LnRgi/QuNC90YLQtdGA0L3QtdGCLdC80LDQs9Cw0LfQuNC9XCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly92LWR5bW92LnJ1XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCe0YHRgi3QvNC10LRcIixcclxuICAgIHBhdGg6IFwiMjAxMi0wNi0taGFuZHl3ZWItLW9zdG1lZC93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCc0L7QsdC40LvRjNC90YvQuSDRgdCw0LnRgiDQv9GA0L4g0LzQtdC00LjQutC+0LJcIixcclxuICAgIGRldmljZXM6IFwibW9iaWxlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQntGC0LrRgNGL0YLQutCwIEFobWFkIFRlYVwiLFxyXG4gICAgcGF0aDogXCIyMDEyLTEyLS1hcmllcy0tYWhtYWQtbmV3LXllYXIvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQndCwINC90L7QstGL0Lkg0LPQvtC0LiDQodC90LXQsyDQtNC10YLQtdC60YLQtdC0LlwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQmtC40L3QtNC10YDQuNC90L5cIixcclxuICAgIHBhdGg6IFwiMjAxMi14eC0tYXJpZXMtLWtpbmRlcmluby93d3cvXCIsXHJcbiAgICBwYWdlczogW1wia2luZGVyLWluZGV4Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQodGC0YDQsNGI0L3QsNGPINCyINGB0LLQvtC10Lkg0YHQu9C+0LbQvdC+0YHRgtC4INCw0L3QuNC80LDRhtC40Y8uICNBZG9iZUVkZ2VcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi0KLRgNCw0L3RgdC00LXQv9C+0YJcIixcclxuICAgIHBhdGg6IFwiMjAxMi14eC0tYXJpZXMtLXRyYW5zZGVwb3Qvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcInRyYW5zZGVwb3QtaW5kZXguaHRtbFwiLFwidHJhbnNkZXBvdC10YW1vemhlbm5vZS1vZm9ybWxlbmllLmh0bWxcIixcInRyYW5zZGVwb3QtZG9zdGF2a2EtZ3J1em92Lmh0bWxcIixcInRyYW5zZGVwb3QtY2FiaW5ldC5odG1sXCIsXCJ0cmFuc2RlcG90LWF1dHNvcnNpbmctdmVkLmh0bWxcIixcInRyYW5zZGVwb3QtYWJvdXQuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCf0YDQvtC70LXRgtCw0YDQvdC+LCDQv9GA0L4g0LzQsNGI0LjQvdC60LggJiDQv9C+0LzQvtGA0L7Rh9C10L3QvdGL0Lkg0LrQsNC70YzQutGD0LvRj9GC0L7RgCDQvdCwINCz0LvQsNCy0L3QvtC5LlwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgICBhbGl2ZTogXCJodHRwOi8vdHJhbnNkZXBvdC5ydVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQkdGA0L7RgdC60L4gSG9tZSBDb3V0dXJlXCIsXHJcbiAgICBwYXRoOiBcIjIwMTIteHgtLWRpbWEta29taXNzYXJvdi0tYnJvc2tvL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJicm9za28taW5kZXguaHRtbFwiLFwiYnJvc2tvLWNhdGFsb2cuaHRtbFwiLFwiYnJvc2tvLWNhdGVnb3J5Lmh0bWxcIixcImJyb3Nrby1wcm9kdWN0Lmh0bWxcIixcImJyb3Nrby10ZXh0Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQn9C+0L3RgtC+0LLRi9C8INGI0YLRg9C60LDQvCDigJQg0L/QvtC90YLQvtCy0YvQuSDQtNC40LfQsNC50L0uICPQmtGA0YPRgtCw0Y/QoNC10LfQuNC90LBcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cDovL2Jyb3Nrby1ob21lLnJ1XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNhcGl0YWwgVmlld1wiLFxyXG4gICAgcGF0aDogXCIyMDEyLXh4LS1kaW1hLWtvbWlzc2Fyb3YtLWNhcGl0YWwtdmlldy93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiY2FwaXRhbHZpZXctaW5kZXguaHRtbFwiLFwiY2FwaXRhbHZpZXctcHJvamVjdG1lbWJlcnMuaHRtbFwiLFwiY2FwaXRhbHZpZXcta2F0b2suaHRtbFwiLFwiY2FwaXRhbHZpZXctYWJvdXQuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCQINGN0YLQviDQv9C+0LvQvdGL0Lkg0YPQu9GR0YIg0L/QvtGC0L7QvNGDINGH0YLQviAzZCB0cmFuc2Zvcm1hdGlvbnMuINCc0Ysg0LrQsNC6LdCx0Ysg0LLQvdGD0YLRgNC4INGG0LjQu9C40L3QtNGA0LAsINC90LDQtNC+INC/0L7QvdCw0LLQvtC00LjRgtGMINC90LAg0LzQtdC90Y4uICMzZNCj0LvRkdGCLCAj0KPQutCw0YfQuNCy0LDQtdGCXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCb0Y7QsdC+0LLRjFwiLFxyXG4gICAgcGF0aDogXCIyMDEyLXh4LS1kaW1hLWtvbWlzc2Fyb3YtLWRrLWxvdmUvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQp9GC0L4t0YLQviDRj9Cy0L3QviDQvNC40LvQvtC1LCDQvdC+INC90LXQv9C+0L3Rj9GC0L3QvtC1Li4uICkpKVwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQkNC80LXRgNC40LrQsNC90YHQutCw0Y8g0LzQtdGH0YLQsCDQvdCwINCU0LzQuNGC0YDQvtCy0LrQtVwiLFxyXG4gICAgcGF0aDogXCIyMDEyLXh4LS1kaW1hLWtvbWlzc2Fyb3YtLWRtaXRyb3ZrYS93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCT0LXQvdC40LDQu9GM0L3Ri9C5IGNzcy3QvNGD0LTRgNGR0LYg0YEg0LPQu9C+0LHRg9GB0L7QvC4g0K3RgtC+INC30LDQs9C70YPRiNC60LAuICPQmtGA0YPRgtCw0Y/QoNC10LfQuNC90LBcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INGB0LrQstC+0Ygt0YbQtdC90YLRgFwiLFxyXG4gICAgcGF0aDogXCIyMDEyLXh4LS1kaW1hLWtvbWlzc2Fyb3YtLXNxdWFzaC93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiLFwicmVzZXJ2ZS5odG1sXCIsXCJwcm9maWxlLmh0bWxcIixcInBsYXllci5odG1sXCIsXCJrbm93bGVkZ2UuaHRtbFwiLFwicmF0aW5ncy5odG1sXCIsXCJwbGF5ZXJzLmh0bWxcIixcInRvdXJuYW1lbnQuaHRtbFwiLFwidG91cm5hbWVudHMuaHRtbFwiLFwiY2x1Yi5odG1sXCIsXCJuZXdzLmh0bWxcIixcInJ1bGVzLmh0bWxcIixcImNsdWJzLmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQn9C+0LzQvtGA0L7Rh9C10L3QvdGL0Lkg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvQuSDRgdCw0LnRgiDQv9C+INGC0YPRgNC90LjRgNCw0LxcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCi0LXRgNC40YLQvtGA0YDQuNGPINGD0LTQvtCy0L7Qu9GM0YHRgtCy0LjRj1wiLFxyXG4gICAgcGF0aDogXCIyMDEyLXh4LS1kaW1hLWtvbWlzc2Fyb3YtLXRlcnJhLXBsZWFzdXJlL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJ0dS1pbmRleC5odG1sXCIsXCJ0dS13aW5lLmh0bWxcIixcInR1LWdpZnQuaHRtbFwiLFwidHUtd2luZXMuaHRtbFwiLFwidHUtcmV2aWV3Lmh0bWxcIixcInR1LXJlY29tbWVuZC1hcnRpY2xlcy5odG1sXCIsXCJ0dS1yZWNvbW1lbmQtYXJ0aWNsZS5odG1sXCIsXCJ0dS1pbmRleC5odG1sXCIsXCJ0dS1naWZ0cy5odG1sXCIsXCJ0dS1jb250YWN0cy5odG1sXCIsXCJ0dS1hYm91dC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0J/RgNC+INCx0YPRhdC70L4uINCa0YDQsNGB0LjQstC+LCDRgSDQsdGD0YLRi9C70LrQsNC80LguXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCa0L7RgtGC0LXQtNC20Lgg0JLQtdGB0LXQvdC40L3QvlwiLFxyXG4gICAgcGF0aDogXCIyMDEyLXh4LS1kaW1hLWtvbWlzc2Fyb3YtLXZlc2VuaW5vLTEvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWwjbm8tYW5pbWF0aW9uXCIsXCJyYXNwb2xvemhlbmllLmh0bWxcIixcIm5vdm9zdGkuaHRtbFwiLFwia29udGFrdHkuaHRtbFwiLFwia29tbXVuaWthY2lpLWktbWF0ZXJpYWx5Lmh0bWxcIixcImluZnJhc3RydWt0dXJhLXJham9uYS5odG1sXCIsXCJpbmZyYXN0cnVrdHVyYS1wb3NlbGthLmh0bWxcIixcImdlbnBsYW4uaHRtbFwiLFwiZWtvbG9naWphLmh0bWxcIixcImRldmVsb3Blci5odG1sXCIsXCJkZXRqYW0uaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCf0YDQuNC60L7Qu9GM0L3Ri9C5INC00LjQt9Cw0LnQvS4gI9Cf0L7QvNC+0YDQvtGH0LrQsCwgI9Ca0YDRg9GC0LDRj9Cg0LXQt9C40L3QsFwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgICBhbGl2ZTogXCJodHRwOi8vd3d3LnZlc2VuaW5vLnJ1XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCa0L7RgtGC0LXQtNC20Lgg0JLQtdGB0LXQvdC40L3QviAo0L/QtdGA0LXQtNC10LvQutCwKVwiLFxyXG4gICAgcGF0aDogXCIyMDEyLXh4LS1kaW1hLWtvbWlzc2Fyb3YtLXZlc2VuaW5vLTMvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIixcInZpZC1zdmVyaHUuaHRtbFwiLFwicy16YWJvdG9qLW8tZGV0amFoLmh0bWxcIixcInJlYWRtZS1jaGFuZ2VzLmh0bWxcIixcIm5vdm9zdGkuaHRtbFwiLFwia29udGFrdHkuaHRtbFwiLFwia2FrLXByb2VoYXQuaHRtbFwiLFwiY2h0by1wb2JsaXpvc3RpLmh0bWxcIixcImFydGljbGUtbm92b3N0aS5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0JbRg9GC0LrQvtC1INC00LXQu9C+IOKAlCDRgtGA0LXRgtGM0Y8g0LLQtdGA0YHQuNGPINGB0LDQudGC0LAuICPQmtGA0YPRgtCw0Y/QoNC10LfQuNC90LBcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cDovL3d3dy52ZXNlbmluby5ydVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJUaWt0b2sgTHVuYXRpa1wiLFxyXG4gICAgcGF0aDogXCIyMDEyLXh4LS1zYW1idWwtLWx1bmF0aWsvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImx1bmF0aWt0b2staW5kZXguaHRtbFwiLCBcImx1bmF0aWt0b2staXBvZC5odG1sXCIsXCJsdW5hdGlrdG9rLWlubmVyLXRpa3Rvay5odG1sXCIsXCJsdW5hdGlrdG9rLWlubmVyLWx1bmF0aWsuaHRtbFwiLFwibHVuYXRpa3Rvay1pbm5lci1sdW5hdGlrLW5vdC1wcmVzZW50Lmh0bWxcIixcImx1bmF0aWt0b2staGlzdG9yeS5odG1sXCIsXCJsdW5hdGlrdG9rLWZlZWRiYWNrLmh0bWxcIixcImx1bmF0aWt0b2stY29tcGxlY3RzLmh0bWxcIixcImx1bmF0aWt0b2stYnV5LXN0ZXAtNi5odG1sXCIsXCJsdW5hdGlrdG9rLWJ1eS1zdGVwLTUuaHRtbFwiLFwibHVuYXRpa3Rvay1idXktc3RlcC00Lmh0bWxcIixcImx1bmF0aWt0b2stYnV5LXN0ZXAtMy5odG1sXCIsXCJsdW5hdGlrdG9rLWJ1eS1zdGVwLTJjLmh0bWxcIixcImx1bmF0aWt0b2stZmFxLmh0bWxcIixcImx1bmF0aWt0b2stYnV5LXN0ZXAtMmIuaHRtbFwiLFwibHVuYXRpa3Rvay1idXktc3RlcC0yYS5odG1sXCIsXCJsdW5hdGlrdG9rLWJ1eS1zdGVwLTFiLmh0bWxcIixcImx1bmF0aWt0b2stYnV5LXN0ZXAtMWEuaHRtbFwiLFwibHVuYXRpa3Rvay1hY2Nlc3Nvcmllcy5odG1sXCIsXCJsdW5hdGlrdG9rLWFjY2Vzc29yaWVzLWFuZC1hbGwuaHRtbFwiLFwibHVuYXRpa3Rvay1hYm91dC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0JjQvdGC0LXRgNC10YHQvdGL0Lkg0LHRi9C7INC00LjQt9Cw0LnQvS4uLiAj0J/RgNC4QXBwbGXQvdC90L7RgdGC0YxcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQodCw0LnRgiBBaG1hZCBUZWFcIixcclxuICAgIHBhdGg6IFwiMjAxMy0wMy0tbWFzaGEtbmlnZ29sLS1haG1hZC93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiYWhtYWQtaW5kZXguaHRtbFwiLFwiYWhtYWQtNDA0Lmh0bWxcIixcImFobWFkLWNoYWpuYWphLWthcnRhLmh0bWxcIixcImFobWFkLWNoYWpueWotc2xvdmFyLmh0bWxcIixcImFobWFkLWNvbnRlbXBvcmFyeS5odG1sXCIsXCJhaG1hZC1mYXEuaHRtbFwiLFwiYWhtYWQtZmlsdHItcG8tdGVndS5odG1sXCIsXCJhaG1hZC1rb250YWt0eS5odG1sXCIsXCJhaG1hZC1ub3ZlanNoYWphLWlzdG9yaWphLmh0bWxcIixcImFobWFkLXJlenVsdGF0eS1wb2lza2EtcG8tYXJ0aWN1bHUuaHRtbFwiLFwiYWhtYWQtcmV6dWx0YXR5LXBvaXNrYS1wby1tYXRlcmlhbGFtLmh0bWxcIixcImFobWFkLXRlYS5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMuaHRtbFwiLFwiYWhtYWQtdGVhLXRpbWVzLWFmaXNoYS5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtYXJ0aWNsZS5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtYXJ0aWNsZS1hZmlzaGEuaHRtbFwiLFwiYWhtYWQtdGVhLXRpbWVzLWFydGljbGUtZ2FsbGVyeS5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtYXJ0aWNsZS1waG90b3MuaHRtbFwiLFwiYWhtYWQtdGVhLXRpbWVzLWV2ZW50cy5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtZ2FsbGVyeS5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtbW9zY293LW1hcC5odG1sXCIsXCJhaG1hZC10ZWEtdGltZXMtcG9sbHMuaHRtbFwiLFwiYWhtYWQtdGVhLXRpbWVzLXJlY29tbWVuZHMuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCa0YPRh9CwINGH0LDQtdC30LDQv9GH0LDRgdGC0LXQuSwg0L7RgtC00LXQu9GM0L3Ri9C5INC80LjQutGA0L7RgdCw0LnRgiDQsiDQstC40LTQtSDQs9Cw0LfQtdGC0YtcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cDovL2FobWFkdGVhLnJ1XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkRJTUdcIixcclxuICAgIHBhdGg6IFwiMjAxMy0wOS0tYXBvbGxvLS1kaXNuZXktZGVwYXJ0bWVudHMvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQktC10LrRgtC+0YDQvdCw0Y8sINC40L3RgtC10YDQsNC60YLQuNCy0L3QsNGPLCDQsNC90LjQvNCw0YbQuNC+0L3QvdCw0Y8g0YHRhdC10LzQsCDQvtGC0LTQtdC70LXQvdC40LkgRGlzbmV5INCyINCg0L7RgdGB0LjQuC4gI9Cf0L7QvNC+0YDQvtGH0LrQsCwgI1NWRywgI0QzanNcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQotCQ0J4g0JzQtdC00LjQsFwiLFxyXG4gICAgcGF0aDogXCIyMDEzLTA5LS1zZWFuYXQtLXRhby1tZWRpYS93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCb0LXQvdC00LjQvdCzINC40L3RgtC10YDQvdC10YIt0YHRgtGD0LTQuNC4LiAj0J/RgNC40LDQtNCw0L/RgtC40LLQu9C10L3QvdGL0LlcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXHJcbiAgICBhbGl2ZTogXCJodHRwOi8vdGFvLW1lZGlhLnJ1XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCS0LjQtNC20LXRgiBDaG9pc3Rlci5ydVwiLFxyXG4gICAgcGF0aDogXCIyMDEzLTEwLS1hcG9sbG8tLWNob2lzdGVyLXdpZGdldC93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCm0LXQvdGLINC90LAg0L3QtdC00LLQuNC20LjQvNC+0YHRgtGMINCyINGA0LXQsNC70YzQvdC+0Lwg0LLRgNC10LzQtdC90LguICNBbmd1bGFyanNcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cDovL2Nob2lzdGVyLnJ1L21vZHVsZXMvaW5mb2dyYXBoaWNzL1wiXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogXCLQn9Cw0L3QvtGA0LDQvNCwXCIsXHJcbiAgLy8gICBwYXRoOiBcIjIwMTMtMTAtLW1hc2hhLW5pZ2dvbC0tcGFub3JhbWEvd3d3L1wiLFxyXG4gIC8vICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXHJcbiAgLy8gICBkZXNjcmlwdGlvbjogXCLQndC10LTQvtC00LXQu9C60LAg0L7RgdC90L7QstC1INC80L7QtdCz0L4g0LTQstC40LbQutCwINC/0LDQvdC+0YDQsNC8LiAjalF1ZXJ5LdC/0LvQsNCz0LjQvSwgI9Cf0L7QvNC+0YDQvtGH0LrQsFwiLFxyXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCJcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRpdGxlOiBcItCh0LDQudGCINGC0LDQsdC70LXRgtC+0Log0L7RgiDQutGA0LDRgdC+0YLRi1wiLFxyXG4gIC8vICAgcGF0aDogXCIyMDEzLXh4LS1tZWxpcy0tbWVkaWNhbC93d3cvXCIsXHJcbiAgLy8gICBwYWdlczogW1wiaW5kZXguaHRtbFwiLCBcInRyaXVtcGguaHRtbFwiLFwibWVzb3RoZXJhcHkuaHRtbFwiLFwiY29udGFjdC5odG1sXCIsXCJiZWF1dGVsbGUuaHRtbFwiXSxcclxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCn0YLQvtCxINCx0L7Qs9Cw0YLRi9C1INGB0YLQsNGA0YPRhdC4INC60LDQt9Cw0LvQuNGB0Ywg0LrRgNCw0YHQuNCy0LXQuSDRh9C10Lwg0L7QvdC4INC10YHRgtGMINC90LAg0YHQsNC80L7QvCDQtNC10LvQtS5cIixcclxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcFwiXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQmtC+0YLQvi3QuNC90YLQtdGA0LDQutGC0LjQsiBBaG1hZCBUZWFcIixcclxuICAgIHBhdGg6IFwiMjAxMy14eC0tbWFzaGEtbmlnZ29sLS1haG1hZC1jYXRhbmltYXRpb24vd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQndC10YHRg9GB0LLQtdGC0L3QsNGPINC/0L7QvNC+0YDQvtGH0LXQvdC90L7RgdGC0YwuINCd0LDQstGA0L7QtNC1INC40LPRgNGLIOKAlCDQvdGD0LbQvdC+INCy0YHRkSA8cT7QstC60LvRjtGH0LjRgtGMPC9xPiDQuCDRgtC+0LPQtNCwINCx0YPQtNC10YIg0LHQvtC90YPRgS4g0J3QsCDRjdGC0L7QvCDQv9GA0L7QtdC60YLQtSDRgdGC0LDQu9C+INC/0L7QvdGP0YLQvdC+INGH0YLQviDQsNC90LjQvNCw0YLQvtGAIOKAlCDRjdGC0L4g0L7RgtC00LXQu9GM0L3QsNGPINC/0YDQvtGE0LXRgdGB0LjRjy4gKSkpINCYINGH0YLQviBodG1sNSDRgNC10LDQu9GM0L3QviDQt9Cw0LzQtdC90Y/QtdGCIGZsYXNoLiAj0KHQsNC80YvQudCh0LvQvtC20L3Ri9C5LCAjQWRvYmVFZGdlQW5pbWF0aW9uXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly9haG1hZHRlYS5ydS90b3VyL1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQoNGD0YHRgdC60LjQuSDQmNC/0L7RgtC10YfQvdGL0Lkg0JHQsNC90LpcIixcclxuICAgIHBhdGg6IFwiMjAxNC0wMS0tYXBvbGxvLS1yaWIvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4MS1hcHBsaWNhdGlvbi5odG1sXCIsXCJpbmRleDItcHJpY2hpbmkuaHRtbFwiLFwiaW5kZXgzLXN0YXZrYS5odG1sXCIsXCJpbmRleDQtaXBvdGVrYS5odG1sXCIsXCJpbmRleDYtdGVybXMuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCh0LjQvNC/0LDRgtC40YfQvdGL0LUg0YHRgtGA0LDQvdC40YbRiywg0YfRkdGC0LrQuNC1INC30LDQv9GH0LDRgdGC0LguICPQktGB0LXQs9C00LAt0LHRiy3RgtCw0LpcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cHM6Ly93d3cucnVzc2lwb3Rla2EucnVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi0JrQvtC80YTQvtGA0YLQvdCw0Y8g0YHRgtC+0LzQsNGC0L7Qu9C+0LPQuNGPXCIsXHJcbiAgICBwYXRoOiBcIjIwMTQtMDItLXNsYXZhLWtvbWFyb3YtLXN0b21hdG9sb2d5L3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0JrRgNCw0YHQuNCy0YvQuSDQu9GN0L3QtNC40L3QsyDRgSDQv9GA0L7RgdGC0YvQvCDQv9Cw0YDQsNC70LvQsNC60YHQvtC8XCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiT2ggTXkgTWVudG9yXCIsXHJcbiAgICBwYXRoOiBcIjIwMTQtMDMtLWlseWEtbmlrb2xhZXYtLW9obXltZW50b3Ivd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcIm1lbnRvcnMuaHRtbFwiLFwic3RhcnR1cHMuaHRtbFwiLFwibGFuZGluZy5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0KHRg9GA0L7QstGL0Lkg0L/QsNGA0LDQu9C70LDQutGBICsg0LDQtNCw0L/RgtC40LLQvdC+0YHRgtGMLiAj0J/QvtC80L7RgNC+0YfQutCwLCAjU2tyb2xsclwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRm9vdGJveC5tZVwiLFxyXG4gICAgcGF0aDogXCIyMDE0LTAzLS1uYXRhc2hhLWtvdGx5YXJldnNrYXlhLS1mb290Ym94Lm1lL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0KHRgtGA0LDQvdC40YbQsC3Qt9Cw0LPQu9GD0YjQutCwLiDQktGB0LUg0YDQtdGB0YPRgNGB0Ysg0LIg0L7QtNC90L7QvCDRhNCw0LnQu9C1XCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi0KTQtdC00LXRgNCw0YbQuNGPINC/0L7QttCw0YDQvdGL0YVcIixcclxuICAgIHBhdGg6IFwiMjAxNC0wNC0tYXJpZXMtLWZpcmVmaWdodGVycy93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiYWN0aXZpdHkuaHRtbFwiLFwiZG9jdW1lbnRzLmh0bWxcIixcImxlYWRlcnMuaHRtbFwiLFwibWFpbi5odG1sXCIsXCJtYXAuaHRtbFwiLFwibmFncmFkeS5odG1sXCIsXCJuZXdzLmh0bWxcIixcIm5ld3MtcG9zdC5odG1sXCIsXCJzbWkuaHRtbFwiLFwic3R5bGVzLmh0bWxcIixcInRlbXAuaHRtbFwiLFwidXN0YXYuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCf0YDQvtGB0YLQvtC5INGB0LDQudGCXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly9pbnRlcmZpcmVzcG9ydC5jb21cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSW50ZWR1Y2FcIixcclxuICAgIHBhdGg6IFwiMjAxNC0wNC0ta3Nhbi0taW50ZWR1Y2Evd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWxcIixcImJsb2cuaHRtbFwiLFwiY29udGFjdHMuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCa0YDQsNGB0LjQstGL0LUg0YLRgNC4INGB0YLRgNCw0L3QuNGG0YtcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cDovL3d3dy5pbnRlZHVjYS5ydVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTb2ZpdHMgTWVcIixcclxuICAgIHBhdGg6IFwiMjAxNC0wNC0tbmF0YXNoYS1rb3RseWFyZXZza2F5YS1zb2ZpdHNtZS1sb29rYm9vay93d3cvXCIsXHJcbiAgICBwYWdlczogW1wic2ZtLXN0eWxlLmh0bWxcIiwgXCJzZm0tbG9va2Jvb2suaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCe0L3Qu9Cw0LnQvS3Qs9Cw0YDQtNC10YDQvtCxLCDQu9C10L3QtNC40L3Qsy5cIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9kbWFnXCIsXHJcbiAgICBwYXRoOiBcIjIwMTQtMDQtLXNlYW5hdC0tcHJvZG1hZy93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiY2F0ZWdvcnkuaHRtbFwiLFwiaW5uZXIuaHRtbFwiLFwibWFpbi5odG1sXCIsXCJ0b3Zhci5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0J/RgNC+0YHRgtC+0Lkg0LjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvVwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCJcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRpdGxlOiBcIk1yLiBXb29kbWFuIHY0LjBcIixcclxuICAvLyAgIHBhdGg6IFwiLi4vXCIsXHJcbiAgLy8gICBwYWdlczogW1wiaHR0cDovL21yLXdvb2RtYW4ucnUvaW5kZXguaHRtbFwiXSxcclxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCc0L7QuSDQvNC10LPQsNGB0LDQudGCLiAj0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMLCAjQW5ndWxhcmpzLCAj0J/RgNCw0LLQuNC70LDQoNCw0LHQvtGC0YvQodCd0LXQvtC/0YDQtdC00LXQu9GR0L3QvdC+0YHRgtGM0Y5cIixcclxuICAvLyAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXHJcbiAgLy8gICBhbGl2ZTogXCJodHRwOi8vbXItd29vZG1hbi5ydVwiXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQmtC+0YTQtdC80LDQvdC40Y9cIixcclxuICAgIHBhdGg6IFwiMjAxNC0wNS0tbWFzaGEtbmlnZ29sLS1jb2ZmZWVtYW5pYS93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiY29mZmVtYW5pYS1pbmRleC5odG1sXCIsXCJjb2ZmZWVtYW5pYS1lbWFpbC0xLmh0bWxcIixcImNvZmZlbWFuaWEtNDA0Lmh0bWxcIixcImNvZmZlbWFuaWEtYWJvdXQuaHRtbFwiLFwiY29mZmVtYW5pYS1hZGRyZXNzLmh0bWxcIixcImNvZmZlbWFuaWEtYXBwLmh0bWxcIixcImNvZmZlbWFuaWEtYmFyaXN0YS5odG1sXCIsXCJjb2ZmZW1hbmlhLWNvb3BlcmF0aW9uLmh0bWxcIixcImNvZmZlbWFuaWEtZGVsaXZlcnkuaHRtbFwiLFwiY29mZmVtYW5pYS1mZWVkYmFjay5odG1sXCIsXCJjb2ZmZW1hbmlhLWluZGV4LW5vdGlmaWNhdGlvbi5odG1sXCIsXCJjb2ZmZW1hbmlhLWluZGV4LXdpdGgtcGFub3JhbWEuaHRtbFwiLFwiY29mZmVtYW5pYS1qb2IuaHRtbFwiLFwiY29mZmVtYW5pYS1qb2ItYXBwbHkuaHRtbFwiLFwiY29mZmVtYW5pYS1raWRzLmh0bWxcIixcImNvZmZlbWFuaWEtbWVudS5odG1sXCIsXCJjb2ZmZW1hbmlhLW1lbnUyLmh0bWxcIixcImNvZmZlbWFuaWEtbWVudTMuaHRtbFwiLFwiY29mZmVtYW5pYS1uZXdzLmh0bWxcIixcImNvZmZlbWFuaWEtbmV3cy1wb3N0Lmh0bWxcIixcImNvZmZlbWFuaWEtcHJlc3MuaHRtbFwiLFwiY29mZmVtYW5pYS10ZWFtLmh0bWxcIixcImNvZmZlbWFuaWEtemF2c2VnZGF0YWkuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCi0LjQv9CwINC/0YDQvtGB0YLQvtC5LCDQvdC+INGB0LvQvtC20L3Ri9C5LiAj0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMLCAj0KLRg9GC0YPQu9C10YfQvdC+0YHRgtGMXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0IG1vYmlsZVwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cDovL2NvZmZlZW1hbmlhLnJ1XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCa0L7RhNC10LzQsNC90LjRjyBGTVwiLFxyXG4gICAgcGF0aDogXCIyMDE0LTA3LS1tYXNoYS1uaWdnb2wtLWNvZmZlZW1hbmlhLWZtL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJjb2ZmZW1hbmlhLWZtLWluZGV4Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQoNCw0LTQuNC+ISDQpdC+0YLRjCDRgNCw0Lcg0YHQviDQt9Cy0YPQutC+0Lwg0L/QvtGA0LDQsdC+0YLQsNC7LiAjQdC00LDQv9GC0LjQstC90L5j0YLRjCwgI0FuZ3VsYXJqc1wiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly9jb2ZmZWVtYW5pYS5mbVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBbGxzd2VldHNcIixcclxuICAgIHBhdGg6IFwiMjAxNC0wOC0tc2VhbmF0LS1hbGxzd2VldHMvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImFsbHN3ZWV0cy1pbmRleC5odG1sXCIsXCJhbGxzd2VldHMtNDA0Lmh0bWxcIixcImFsbHN3ZWV0cy1jYWJpbmV0Lmh0bWxcIixcImFsbHN3ZWV0cy1jYXJ0Lmh0bWxcIixcImFsbHN3ZWV0cy1jYXJ0LWNoZWNrb3V0Lmh0bWxcIixcImFsbHN3ZWV0cy1jYXRlZ29yeS5odG1sXCIsXCJhbGxzd2VldHMtY29udGFjdHMuaHRtbFwiLFwiYWxsc3dlZXRzLWNzcy5odG1sXCIsXCJhbGxzd2VldHMtZ2FsbGVyeS5odG1sXCIsXCJhbGxzd2VldHMtaXRlbS5odG1sXCIsXCJhbGxzd2VldHMtbWFudWZhY3R1cmVycy5odG1sXCIsXCJhbGxzd2VldHMtbmV3cy5odG1sXCIsXCJhbGxzd2VldHMtbmV3cy1wb3N0Lmh0bWxcIixcImFsbHN3ZWV0cy1wb3J0Zm9saW8uaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCa0L7QvdGE0LXRgtC+0LjQtNGLXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3BcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly9hbGxzd2VldHMucnUvXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNvdW5kIEJ1cmVhdVwiLFxyXG4gICAgcGF0aDogXCIyMDE0LTA4LS1tYXNoYS1uaWdnb2wtLXNvdW5kYnVyZWF1L3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJzb3VuZGJ1cmVhdS1pbmRleC5odG1sXCIsXCJzb3VuZGJ1cmVhdS1hYm91dC5odG1sXCIsXCJzb3VuZGJ1cmVhdS1idXNpbmVzcy5odG1sXCIsXCJzb3VuZGJ1cmVhdS1ob21lLmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQp9GC0L4t0YLQviDQv9GA0L4g0LfQstGD0LouINCa0YDRg9GC0LDRjyDQv9GA0L7QtNGD0LzQsNC90L3QvtGB0YLRjCDQtNC40LfQsNC50L3QsC4gI9CQ0LYt0LHQu9C10YHRgtC40YJcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXRcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly9zb3VuZGJ1cmVhdS5ydVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJOZXE0XCIsXHJcbiAgICBwYXRoOiBcIjIwMTQtMDktLW1hc2hhLW5pZ2dvbC0tbmVxNC93d3cvXCIsXHJcbiAgICBwYWdlczogW1wicGFub3JhbWEtbmVxNC1pbmRleC5odG1sXCIsIFwicGFub3JhbWEtbmVxNC1hYm91dC5odG1sXCIsIFwicGFub3JhbWEtbmVxNC1jb250YWN0Lmh0bWxcIiwgXCJwYW5vcmFtYS1uZXE0LWpvYi5odG1sXCIsIFwicGFub3JhbWEtbmVxNC1wYWsuaHRtbFwiLCBcInBhbm9yYW1hLW5lcTQtcGFub3JhbWEuaHRtbFwiLCBcInBhbm9yYW1hLW5lcTQtcHJlc3MuaHRtbFwiLCBcInBhbm9yYW1hLW5lcTQtcHJvamVjdHMuaHRtbFwiLCBcInBhbm9yYW1hLW5lcTQteWFuZGV4LXBhbm9yYW1hcy5odG1sXCIsIFwiZGlnaXRhbC1uZXE0LWluZGV4Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQm9GO0LHQuNC80YvQuSDQutC70LjQtdC90YIsINC60L7RgNC/0L7RgNCw0YbQuNGPINC4INC/0YDQvtGB0YLQviDQutGA0LDRgdCw0LLQuNGG0LAuINCa0LvQsNGB0YHQuNC60LAgSFRNTC9DU1MvSmF2YVNjcmlwdFwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly9uZXE0LnJ1XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIklkZWFsbWFzdGVyXCIsXHJcbiAgICBwYXRoOiBcIjIwMTQtMTAtLW1hc2hhLW5pZ2dvbC0taWRlYWxtYXN0ZXIvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImlkZWFsbWFzdGVyLWluZGV4Lmh0bWxcIiwgXCJpZGVhbG1hc3Rlci1hcnRpY2xlLWxpc3QuaHRtbFwiLCBcImlkZWFsbWFzdGVyLWFydGljbGUuaHRtbFwiLCBcImlkZWFsbWFzdGVyLWJyYW5kLmh0bWxcIiwgXCJpZGVhbG1hc3Rlci1jb2xsZWN0aW9uLXNwZWNpYWwuaHRtbFwiLCBcImlkZWFsbWFzdGVyLWNvbGxlY3Rpb24uaHRtbFwiLCBcImlkZWFsbWFzdGVyLWdsb3NzYXJ5Lmh0bWxcIiwgXCJpZGVhbG1hc3Rlci1tb2RlbC5odG1sXCIsIFwiaWRlYWxtYXN0ZXItbW9kZWwyLmh0bWxcIiwgXCJpZGVhbG1hc3Rlci1zZXJ2aWNlLmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQmtGA0YPRgtGL0LUg0YfQsNGB0LjQutC4LCDQvNC90L7Qs9C+LdC4LdC00L7Qu9Cz0L4t0LTQuNC30LDQudC9XCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0IG1vYmlsZVwiLFxyXG4gICAgYWxpdmU6IFwiaHR0cDovL3dhdGNoZXMuaWRlYWxtYXN0ZXIucnVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi0JrQu9GD0LEg0JDRhdC80LDQtFwiLFxyXG4gICAgcGF0aDogXCIyMDE0LTEyLS1tYXNoYS1uaWdnb2wtLWNsdWItYWhtYWQvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImluZGV4Lmh0bWwjL2NvbnRlc3Qvd29ya3NcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQmtC70YPQsSDQvtC60L7QvdGH0LDRgtC10LvRjNC90YvRhSDRhNCw0L3QsNGC0L7QsiDRh9Cw0Y8g0JDRhdC80LDQtC4gQW5ndWxhcmpzINC00LvRjyDRg9C00L7QsdGB0YLQstCwINC90LDRgNC10LfQsNC90LjRjyDQvdCwINC30LDQv9GH0LDRgdGC0Lgg0LTQu9GPINC/0YDQvtCz0YDQsNC80LzQuNGB0YLQsFwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCIsXHJcbiAgICBhbGl2ZTogXCJodHRwOi8vY2x1Yi5haG1hZHRlYS5ydVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQktC+0LvQvtC60L7Qu9Cw0LzRgdC60L7QtSDRhNC10YDQvNC10YDRgdC60L7QtSDRhdC+0LfRj9C50YHRgtCy0L5cIixcclxuICAgIHBhdGg6IFwiMjAxNC0xMi0tbWFzaGEtbmlnZ29sLS12b2xva29sYW1za29lLW1vbG9rby93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCc0LXRgtCwLdC80L7QtNC90L7QtSDQvNC+0LvQvtC60L4g0Lgg0LrQvtC30YssINC70LXQvdC00LjQvdCzLlwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIlxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGl0bGU6IFwiU2hlZHVsZSBFZGl0XCIsXHJcbiAgLy8gICBwYXRoOiBcIjIwMTQteHgtLWFwb2xsby0tc2NoZWRpdC93d3cvXCIsXHJcbiAgLy8gICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAvLyAgIGRlc2NyaXB0aW9uOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YLQsNCx0LvQuNGG0Ysg4oCUINC30LDQv9GH0LDRgdGC0Ywg0LTQu9GPINCw0LTQvNC40L3QutC4LiAjQW5ndWxhcmpzXCIsXHJcbiAgLy8gICBkZXZpY2VzOiBcImRlc2t0b3BcIlxyXG4gIC8vIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi0J7QntCeIMKr0J/RgNC+0LzQuNC90LbQuNC90LjRgNC40L3Qs8K7XCIsXHJcbiAgICBwYXRoOiBcIjIwMTUtMDEtLXNsYXZhLWtvbWFyb3YtLXByb21lbmdpbmVlcmluZy93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiLCBcImFib3V0Lmh0bWxcIiwgXCJoYWltZXIuaHRtbFwiLCBcImlldy5odG1sXCIsIFwiaXJ1YmEuaHRtbFwiLCBcIm5ld3MtcG9zdC0wMS5odG1sXCIsIFwibmV3cy1wb3N0LTAyLmh0bWxcIiwgXCJwb3N0Lmh0bWxcIiwgXCJzYWIuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCh0YPRgNC+0LLRi9C5INGB0LDQudGCINC00LvRjyDRgdGD0YDQvtCy0L7QuSDQvtGC0YDQsNGB0LvQuFwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCk0LXRgNC80LAgTW9ydGVuc3R1ZW5cIixcclxuICAgIHBhdGg6IFwiMjAxNS0wMy0tc2hhc2huaWEtLW1vcnRlbnN0dWVuL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJtb3J0ZW5zdHVlbi1pbmRleC5odG1sXCIsIFwibW9ydGVuc3R1ZW4tYmxvZy5odG1sXCIsIFwibW9ydGVuc3R1ZW4tY29udGFjdC5odG1sXCIsIFwibW9ydGVuc3R1ZW4tZ2FsbGVyeS5odG1sXCIsIFwibW9ydGVuc3R1ZW4taGVhbHRoLmh0bWxcIiwgXCJtb3J0ZW5zdHVlbi1oaXN0b3J5Lmh0bWxcIiwgXCJtb3J0ZW5zdHVlbi1wb3N0Lmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQrdC/0LjRh9C90L7RgdGC0Ywg0L3QvtGA0LLQtdC20YHQutC+0LPQviDRgdC10LvRjNGB0LrQvtCz0L4g0YXQvtC30Y/QudGB0YLQstCwLlwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCLQktC40YDRgtGD0LDQu9GM0L3QsNGPINCQ0YDQutGC0LjQutCwXCIsXHJcbiAgICBwYXRoOiBcIjIwMTUtMDgtLW1hc2hhLW5pZ2dvbC0tYXJjdGljL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJpbmRleC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0J/RgNC+0LXQutGCIDxhIGhyZWY9XFxcImh0dHA6Ly9uZXE0LnJ1XFxcIj5OZXE0PC9hPi4g0J3QsCDQutGA0LDRjiDQt9C10LzQu9C4INC+0LbQuNC00LDQtdC80L4g0LHQtdC30LvRjtC00L3Qviwg0LfQsNCx0YvRgtC+INC4INC30LDQsdGA0L7RiNC10L3Qvi4gICNBbmd1bGFyanNcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCQ0LLRgtC+0YDRgdC60LjQtSDRgtC+0YDRgtGLIENvZmZlZW1hbmlhXCIsXHJcbiAgICBwYXRoOiBcIjIwMTUtMDgtLW1hc2hhLW5pZ2dvbC0tdG9wLXRvcnQvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcIm1haW4uaHRtbFwiLCBcImFib3V0Lmh0bWxcIiwgXCJjYWJpbmV0Lmh0bWxcIiwgXCJjb250YWN0cy5odG1sXCIsIFwicmVhZHkuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCl0L7Rh9C10YLRgdGPINGB0YrQtdGB0YLRjCDRgdCw0LnRgi5cIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkVhc3lsaWZlIE1lbnVcIixcclxuICAgIHBhdGg6IFwiMjAxNS0wOS0tbWFzaGEtbmlnZ29sLS1lYXN5bGlmZW1lbnUvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcIm1hcmt1cC1pbmRleC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ29mZmVlbWFuaWEg0LfQsCDQt9C00L7RgNC+0LLRi9C5INC+0LHRgNCw0Lcg0LbQuNC30L3QuC5cIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCh0JTQoS3QpNCj0JTQoVwiLFxyXG4gICAgcGF0aDogXCIyMDE1LTExLS1tYXNoYS1uaWdnb2wtLXNkcy1mb29kcy93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCU0LjRgdGC0YDQuNCx0YzRjtGC0L7RgCDRh9Cw0Y8gQWhtYWRcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCg0LXRgdGC0L7RgNCw0L0gwqvQo9C30LHQtdGH0LrQsMK7INCyINCw0Y3RgNC+0L/QvtGA0YLQsNGFINCc0L7RgdC60LLRi1wiLFxyXG4gICAgcGF0aDogXCIyMDE1LTEyLS1tYXNoYS1uaWdnb2wtLXV6YmVjaGthL3d3dy9cIixcclxuICAgIHBhZ2VzOiBbXCJtYXJrdXAvaW5kZXguaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCf0L7RgNGG0LjRjyDRg9GB0L/QvtC60LDQuNCy0LDRjtGJ0LXQs9C+INCj0LfQsdC10LrQuNGB0YLQsNC90LAg0L/QtdGA0LXQtCDQvtGC0LvRkdGC0L7QvC5cIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFjdGl2ZSBMZWFybmluZ1wiLFxyXG4gICAgcGF0aDogXCIyMDE2LTAxLS1tYW5kcmlrLS1hY3RpdmVsZWFybmluZy93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiZGVtby9sYW5kaW5nLmh0bWxcIiwgXCJkZW1vL2luZGV4Lmh0bWxcIiwgXCJkZW1vL2xhdGVzdC1ldmVudHMuaHRtbFwiLCBcImRlbW8vc3RhdHMuaHRtbFwiLCBcImRlbW8vdG9kYXkuaHRtbFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCa0LDQutC+0LUt0YLQviDQvtCx0YPRh9C10L3QuNC1Li4uXCIsXHJcbiAgICBkZXZpY2VzOiBcImRlc2t0b3AgdGFibGV0XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJlZWJvayDQn9Cw0YDQutC4XCIsXHJcbiAgICBwYXRoOiBcIjIwMTYtMDItLXJ1ZHktLXJlZWJva2lucGFya3Mvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImh0bWwvbWFpbi5odG1sXCIsIFwiaHRtbC9hYm91dC5odG1sXCIsIFwiaHRtbC9ldmVudHMuaHRtbFwiLCBcImh0bWwvcGVyc29uYWwtcmVzdWx0cy5odG1sXCIsIFwiaHRtbC9yZXN1bHRzLmh0bWxcIiwgXCJodG1sL3NjaGVkdWxlLmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCLQotGA0LXQvdC40YDQvtCy0LrQuCDQuCDQtNGA0YPQs9C40LUg0YHQvtCx0YvRgtC40Y8g0LIg0L/QsNGA0LrQsNGFLlwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly93d3cucmVlYm9raW5wYXJrcy5jb21cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi0KHQtdGC0Ywg0LzQsNCz0LDQt9C40L3QvtCyINCU0LjQutGB0LhcIixcclxuICAgIHBhdGg6IFwiMjAxNi0wMy0tY2h1cHJpay0tZGlrc2kvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcInBhZ2VzL2RpeHktbWFpbi5odG1sXCIsIFwicGFnZXMvZGl4eS1saXN0Lmh0bWxcIiwgXCJwYWdlcy9kaXh5LXJlY2lwZS5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0JzQvtC00L3QviDQvdC+INC90LUg0LLQt9GP0LvQuFwiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxvdmUgRWF0XCIsXHJcbiAgICBwYXRoOiBcIjIwMTYtMDQtLWNodXByaWstLWxvdmVlYXQvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcInBhZ2VzL2xvdmVlYXQtbWFpbi5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1ibG9nLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LWNvbGxlY3Rpb24uaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtY29sbGVjdGlvbnMuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtY29tcG9uZW50cy5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1lZGl0LXByb2ZpbGUuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtZm9sbG93ZXJzLWZvbGxvd2luZy1tb2RhbC5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1teS1wcm9maWxlLWNvbGxlY3Rpb24uaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtbXktcHJvZmlsZS1jb2xsZWN0aW9ucy5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1teS1wcm9maWxlLXBvc3RzLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LW15LXJlY2lwZS5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1ub3RpZmljYXRpb25zLW1lc3NhZ2VzLW1vZGFsLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LW90aGVyLXByb2ZpbGUtcG9zdHMuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtcGVvcGxlLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LXBvc3QuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtcmVjaXBlLmh0bWxcIiwgXCJwYWdlcy9sb3ZlZWF0LXJlY2lwZXMtd2l0aC1maWx0ZXItYW5vdGhlci1sYXlvdXQuaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtcmVjaXBlcy13aXRoLWZpbHRlci5odG1sXCIsIFwicGFnZXMvbG92ZWVhdC1zZWFyY2guaHRtbFwiLCBcInBhZ2VzL2xvdmVlYXQtdGFicy1tb2RhbC5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwi0JXRidGRINGH0YLQvi3RgtC+INC80L7QtNC90L7QtSDQv9GA0L4g0LXQtNGDLiDQlNC+0YTQuNCz0LjRidCwINGI0LDQsdC70L7QvdC+0LIuINCc0L7RjyDRg9GC0LjQu9C40YLQsCA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vYW50aXZpdGxhL21yLXRlc3R3b29kXFxcIj7QstGR0YDRgdGC0LrQuC3Rh9C10YDQtdC3LdGC0LXRgdGC0LjRgNC+0LLQsNC90LjQtTwvYT4g0L/RgNC+0YHRgtC+INGB0L/QsNGB0LXQvdC40LVcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCBtb2JpbGVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi0JrQvtC90LrRg9GA0YEg0L3QsCDQvdCw0LfQstCw0L3QuNC1INCx0YPRgNCz0LXRgNC90L7QuSDQmtC+0YTQtdC80LDQvdC40LhcIixcclxuICAgIHBhdGg6IFwiMjAxNi0wNC0tbWFzaGEtbmlnZ29sLS1idXJnZXItbmFtZS93d3cvXCIsXHJcbiAgICBwYWdlczogW1wicGFnZXMvYnVyZ2VyLW5hbWUtbGFuZGluZy5odG1sXCIsIFwicGFnZXMvYnVyZ2VyLW5hbWUtY29tcG9uZW50cy5odG1sXCIsICwgXCJwYWdlcy9idXJnZXItbmFtZS1uYW1lcy5odG1sXCIsIFwicGFnZXMvYnVyZ2VyLW5hbWUtdGV4dC5odG1sXCIsIFwicGFnZXMvYnVyZ2VyLXNoYXJlLmh0bWxcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcItCj0YHRgtGA0L7QudGB0YLQstCwIDRHb29kXCIsXHJcbiAgICBwYXRoOiBcIjIwMTYtMDUtLWFuZHJlaWtpcy0tNGdvb2Qvd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcInBhZ2VzLzRnb29kLWhvbWUuaHRtbFwiLCBcInBhZ2VzLzRnb29kLWJsb2cuaHRtbFwiLCBcInBhZ2VzLzRnb29kLWNhdGFsb2cuaHRtbFwiLCBcInBhZ2VzLzRnb29kLWNvbXBvbmVudHMuaHRtbFwiLCBcInBhZ2VzLzRnb29kLWNvbnRhY3RzLmh0bWxcIiwgXCJwYWdlcy80Z29vZC1mYXEtc2VhcmNoLXJlc3VsdHMuaHRtbFwiLCBcInBhZ2VzLzRnb29kLWZhcS5odG1sXCIsIFwicGFnZXMvNGdvb2QtZmVlZGJhY2suaHRtbFwiLCBcInBhZ2VzLzRnb29kLW5vdGlmaWNhdGlvbi5odG1sXCIsIFwicGFnZXMvNGdvb2QtcG9zdC5odG1sXCIsIFwicGFnZXMvNGdvb2QtcHJvZHVjdC5odG1sXCIsIFwicGFnZXMvNGdvb2Qtc2VydmljZS5odG1sXCIsIFwicGFnZXMvNGdvb2Qtc29mdHdhcmUtYW5kLWRvY3MuaHRtbFwiLCBcInBhZ2VzLzRnb29kLXdoZXJlLXRvLWJ1eS5odG1sXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwic3NcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXHJcbiAgICBhbGl2ZTogXCJodHRwczovLzRnb29kLnJ1XCJcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRpdGxlOiBcItCe0YLRh9GR0YLRi1wiLFxyXG4gIC8vICAgcGF0aDogXCIyMDE3LTAyLS1hbG1pYXNoZXYtLXJlcG9ydC93d3cvXCIsXHJcbiAgLy8gICBwYWdlczogW1wiaW5kZXguaHRtbFwiXSxcclxuICAvLyAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gIC8vICAgZGV2aWNlczogXCJkZXNrdG9wXCJcclxuICAvLyB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNjb2JsaW1vcmFcIixcclxuICAgIHBhdGg6IFwiMjAxNy0xMi0tdml0YWx5LWt1bGVzaGluLS10aXRhbW90YS93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaHR0cDovL21yLXdvb2RtYW4ucnUvc2NvYmxpbW9yYVwiXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcItCQ0LvRhdC40LzQuNGH0LXRgdC60LjQuSDQv9C+0LzQvtGJ0L3QuNC6INC00LvRjyBTa3lyaW0sINCy0YHQtdC8INGE0YPRgS3RgNC+LdC00LAg0LIg0Y3RgtC+0Lwg0YfQsNGC0LUuICNWdWVqc1wiLFxyXG4gICAgZGV2aWNlczogXCJkZXNrdG9wIHRhYmxldCBtb2JpbGVcIixcclxuICAgIGFsaXZlOiBcImh0dHA6Ly9tci13b29kbWFuLnJ1L3Njb2JsaW1vcmFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVGl0YW1vdGFcIixcclxuICAgIHBhdGg6IFwiMjAxNy0xMi0tdml0YWx5LWt1bGVzaGluLS10aXRhbW90YS93d3cvXCIsXHJcbiAgICBwYWdlczogW1wiaHR0cDovL3RpdGFtb3RhLnJ1XCIsIFwiaHR0cDovL21yLXdvb2RtYW4ucnUvdGl0YW1vdGFcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXHJcbiAgICBhbGl2ZTogXCJodHRwOi8vdGl0YW1vdGEucnVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTXIuIFdvb2RtYW4gdjQuMVwiLFxyXG4gICAgcGF0aDogXCIyMDE4LTAyLS12aXRhbHkta3VsZXNoaW4tLW1yLXdvb2RtYW4vd3d3L1wiLFxyXG4gICAgcGFnZXM6IFtcImh0dHA6Ly9tci13b29kbWFuLnJ1XCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwiZGZzZGZzZGZcIixcclxuICAgIGRldmljZXM6IFwiZGVza3RvcCB0YWJsZXQgbW9iaWxlXCIsXHJcbiAgICBhbGl2ZTogXCJodHRwOi8vbXItd29vZG1hbi5ydVwiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWJvdXQvd29ya3MtZGF0YS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhciAudG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci1hY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3B5T24gPSBbXVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKS5xdWVyeVNlbGVjdG9yQWxsKCd1bC50b3AgYVtocmVmXScpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBzcHlPbi5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZXZlbnQgPT4ge1xyXG4gICAgd2hvSXNJblZpZXcoc3B5T24pO1xyXG4gIH0pO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gd2hvSXNJblZpZXcgKHNwaWVzKSB7XHJcbiAgc3BpZXMuZm9yRWFjaChzcHkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWY9XCInICsgc3B5ICsgJ1wiXScpO1xyXG4gICAgaWYgKGlzSW5WaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNweS5zcGxpdCgnIycpWzFdKSwgMTUwKSkge1xyXG4gICAgICBpdGVtcy5mb3JFYWNoKGEgPT4gYS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1zLmZvckVhY2goYSA9PiBhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0luVmlldyAoZWxlbWVudCwgb2Zmc2V0KSB7XHJcbiAgY29uc3QgYm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICByZXR1cm4gYm94LnRvcCAtIG9mZnNldCA8IDAgJiYgYm94LnRvcCArIGJveC5oZWlnaHQgLSBvZmZzZXQgPiAwO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fib3V0L25hdmJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=