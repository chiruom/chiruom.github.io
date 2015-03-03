function toast(t, e, n, r) {
	function i(t) {
		var e = $("<div class='toast'></div>").addClass(n).html(t);
		return e.hammer({
			prevent_default: !1
		}).bind("pan", function(t) {
			var n = t.gesture.deltaX,
				r = 80;
			e.hasClass("panning") || e.addClass("panning");
			var i = 1 - Math.abs(n / r);
			0 > i && (i = 0), e.velocity({
				left: n,
				opacity: i
			}, {
				duration: 50,
				queue: !1,
				easing: "easeOutQuad"
			})
		}).bind("panend", function(t) {
			var n = t.gesture.deltaX,
				r = 80;
			Math.abs(n) > r ? e.velocity({
				marginTop: "-40px"
			}, {
				duration: 375,
				easing: "easeOutExpo",
				queue: !1,
				complete: function() {
					e.remove()
				}
			}) : (e.removeClass("panning"), e.velocity({
				left: 0,
				opacity: 1
			}, {
				duration: 300,
				easing: "easeOutExpo",
				queue: !1
			}))
		}), e
	}
	if (n = n || "", 0 == $("#toast-container").length) {
		var o = $("<div></div>").attr("id", "toast-container");
		$("body").append(o)
	}
	var o = $("#toast-container"),
		a = i(t);
	o.append(a), a.css({
		top: parseFloat(a.css("top")) + 35 + "px",
		opacity: 0
	}), a.velocity({
		top: "0px",
		opacity: 1
	}, {
		duration: 300,
		easing: "easeOutCubic",
		queue: !1
	});
	var s = e,
		u = setInterval(function() {
			0 === a.parent().length && window.clearInterval(u), a.hasClass("panning") || (s -= 100), 0 >= s && (a.velocity({
				opacity: 0,
				marginTop: "-40px"
			}, {
				duration: 375,
				easing: "easeOutExpo",
				queue: !1,
				complete: function() {
					$(this).remove(), "function" == typeof r && r()
				}
			}), window.clearInterval(u))
		}, 100)
}! function(t, e, n) {
	"use strict";

	function r(t, e) {
		return e = e || Error,
		function() {
			var n, r, i = arguments[0],
				o = "[" + (t ? t + ":" : "") + i + "] ",
				a = arguments[1],
				s = arguments;
			for (n = o + a.replace(/\{\d+\}/g, function(t) {
				var e = +t.slice(1, -1);
				return e + 2 < s.length ? he(s[e + 2]) : t
			}), n = n + "\nhttp://errors.angularjs.org/1.3.8/" + (t ? t + "/" : "") + i, r = 2; r < arguments.length; r++) n = n + (2 == r ? "?" : "&") + "p" + (r - 2) + "=" + encodeURIComponent(he(arguments[r]));
			return new e(n)
		}
	}

	function i(t) {
		if (null == t || S(t)) return !1;
		var e = t.length;
		return t.nodeType === vi && e ? !0 : $(t) || ci(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}

	function o(t, e, n) {
		var r, a;
		if (t)
			if (x(t))
				for (r in t) "prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r, t);
			else
		if (ci(t) || i(t)) {
			var s = "object" != typeof t;
			for (r = 0, a = t.length; a > r; r++)(s || r in t) && e.call(n, t[r], r, t)
		} else if (t.forEach && t.forEach !== o) t.forEach(e, n, t);
		else
			for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
		return t
	}

	function a(t) {
		return Object.keys(t).sort()
	}

	function s(t, e, n) {
		for (var r = a(t), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
		return r
	}

	function u(t) {
		return function(e, n) {
			t(n, e)
		}
	}

	function l() {
		return ++ui
	}

	function c(t, e) {
		e ? t.$$hashKey = e : delete t.$$hashKey
	}

	function f(t) {
		for (var e = t.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
			var i = arguments[n];
			if (i)
				for (var o = Object.keys(i), a = 0, s = o.length; s > a; a++) {
					var u = o[a];
					t[u] = i[u]
				}
		}
		return c(t, e), t
	}

	function h(t) {
		return parseInt(t, 10)
	}

	function d(t, e) {
		return f(Object.create(t), e)
	}

	function p() {}

	function m(t) {
		return t
	}

	function g(t) {
		return function() {
			return t
		}
	}

	function v(t) {
		return "undefined" == typeof t
	}

	function y(t) {
		return "undefined" != typeof t
	}

	function _(t) {
		return null !== t && "object" == typeof t
	}

	function $(t) {
		return "string" == typeof t
	}

	function b(t) {
		return "number" == typeof t
	}

	function w(t) {
		return "[object Date]" === oi.call(t)
	}

	function x(t) {
		return "function" == typeof t
	}

	function T(t) {
		return "[object RegExp]" === oi.call(t)
	}

	function S(t) {
		return t && t.window === t
	}

	function C(t) {
		return t && t.$evalAsync && t.$watch
	}

	function k(t) {
		return "[object File]" === oi.call(t)
	}

	function P(t) {
		return "[object FormData]" === oi.call(t)
	}

	function O(t) {
		return "[object Blob]" === oi.call(t)
	}

	function A(t) {
		return "boolean" == typeof t
	}

	function E(t) {
		return t && x(t.then)
	}

	function D(t) {
		return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
	}

	function M(t) {
		var e, n = {}, r = t.split(",");
		for (e = 0; e < r.length; e++) n[r[e]] = !0;
		return n
	}

	function j(t) {
		return Br(t.nodeName || t[0] && t[0].nodeName)
	}

	function N(t, e) {
		var n = t.indexOf(e);
		return n >= 0 && t.splice(n, 1), e
	}

	function R(t, e, n, r) {
		if (S(t) || C(t)) throw ai("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
		if (e) {
			if (t === e) throw ai("cpi", "Can't copy! Source and destination are identical.");
			if (n = n || [], r = r || [], _(t)) {
				var i = n.indexOf(t);
				if (-1 !== i) return r[i];
				n.push(t), r.push(e)
			}
			var a;
			if (ci(t)) {
				e.length = 0;
				for (var s = 0; s < t.length; s++) a = R(t[s], null, n, r), _(t[s]) && (n.push(t[s]), r.push(a)), e.push(a)
			} else {
				var u = e.$$hashKey;
				ci(e) ? e.length = 0 : o(e, function(t, n) {
					delete e[n]
				});
				for (var l in t) t.hasOwnProperty(l) && (a = R(t[l], null, n, r), _(t[l]) && (n.push(t[l]), r.push(a)), e[l] = a);
				c(e, u)
			}
		} else if (e = t, t)
			if (ci(t)) e = R(t, [], n, r);
			else
		if (w(t)) e = new Date(t.getTime());
		else if (T(t)) e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex;
		else if (_(t)) {
			var f = Object.create(Object.getPrototypeOf(t));
			e = R(t, f, n, r)
		}
		return e
	}

	function I(t, e) {
		if (ci(t)) {
			e = e || [];
			for (var n = 0, r = t.length; r > n; n++) e[n] = t[n]
		} else if (_(t)) {
			e = e || {};
			for (var i in t)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (e[i] = t[i])
		}
		return e || t
	}

	function q(t, e) {
		if (t === e) return !0;
		if (null === t || null === e) return !1;
		if (t !== t && e !== e) return !0;
		var r, i, o, a = typeof t,
			s = typeof e;
		if (a == s && "object" == a) {
			if (!ci(t)) {
				if (w(t)) return w(e) ? q(t.getTime(), e.getTime()) : !1;
				if (T(t) && T(e)) return t.toString() == e.toString();
				if (C(t) || C(e) || S(t) || S(e) || ci(e)) return !1;
				o = {};
				for (i in t)
					if ("$" !== i.charAt(0) && !x(t[i])) {
						if (!q(t[i], e[i])) return !1;
						o[i] = !0
					}
				for (i in e)
					if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !x(e[i])) return !1;
				return !0
			}
			if (!ci(e)) return !1;
			if ((r = t.length) == e.length) {
				for (i = 0; r > i; i++)
					if (!q(t[i], e[i])) return !1;
				return !0
			}
		}
		return !1
	}

	function F(t, e, n) {
		return t.concat(ni.call(e, n))
	}

	function L(t, e) {
		return ni.call(t, e || 0)
	}

	function V(t, e) {
		var n = arguments.length > 2 ? L(arguments, 2) : [];
		return !x(e) || e instanceof RegExp ? e : n.length ? function() {
			return arguments.length ? e.apply(t, F(n, arguments, 0)) : e.apply(t, n)
		} : function() {
			return arguments.length ? e.apply(t, arguments) : e.call(t)
		}
	}

	function z(t, r) {
		var i = r;
		return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = n : S(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : C(r) && (i = "$SCOPE"), i
	}

	function H(t, e) {
		return "undefined" == typeof t ? n : (b(e) || (e = e ? 2 : null), JSON.stringify(t, z, e))
	}

	function Y(t) {
		return $(t) ? JSON.parse(t) : t
	}

	function U(t) {
		t = Kr(t).clone();
		try {
			t.empty()
		} catch (e) {}
		var n = Kr("<div>").append(t).html();
		try {
			return t[0].nodeType === yi ? Br(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(t, e) {
				return "<" + Br(e)
			})
		} catch (e) {
			return Br(n)
		}
	}

	function W(t) {
		try {
			return decodeURIComponent(t)
		} catch (e) {}
	}

	function B(t) {
		var e, n, r = {};
		return o((t || "").split("&"), function(t) {
			if (t && (e = t.replace(/\+/g, "%20").split("="), n = W(e[0]), y(n))) {
				var i = y(e[1]) ? W(e[1]) : !0;
				Xr.call(r, n) ? ci(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
			}
		}), r
	}

	function X(t) {
		var e = [];
		return o(t, function(t, n) {
			ci(t) ? o(t, function(t) {
				e.push(G(n, !0) + (t === !0 ? "" : "=" + G(t, !0)))
			}) : e.push(G(n, !0) + (t === !0 ? "" : "=" + G(t, !0)))
		}), e.length ? e.join("&") : ""
	}

	function Q(t) {
		return G(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}

	function G(t, e) {
		return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
	}

	function Z(t, e) {
		var n, r, i = pi.length;
		for (t = Kr(t), r = 0; i > r; ++r)
			if (n = pi[r] + e, $(n = t.attr(n))) return n;
		return null
	}

	function J(t, e) {
		var n, r, i = {};
		o(pi, function(e) {
			var i = e + "app";
			!n && t.hasAttribute && t.hasAttribute(i) && (n = t, r = t.getAttribute(i))
		}), o(pi, function(e) {
			var i, o = e + "app";
			!n && (i = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
		}), n && (i.strictDi = null !== Z(n, "strict-di"), e(n, r ? [r] : [], i))
	}

	function K(n, r, i) {
		_(i) || (i = {});
		var a = {
			strictDi: !1
		};
		i = f(a, i);
		var s = function() {
			if (n = Kr(n), n.injector()) {
				var t = n[0] === e ? "document" : U(n);
				throw ai("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
			}
			r = r || [], r.unshift(["$provide",
				function(t) {
					t.value("$rootElement", n)
				}
			]), i.debugInfoEnabled && r.push(["$compileProvider",
				function(t) {
					t.debugInfoEnabled(!0)
				}
			]), r.unshift("ng");
			var o = Ye(r, i.strictDi);
			return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector",
				function(t, e, n, r) {
					t.$apply(function() {
						e.data("$injector", r), n(e)(t)
					})
				}
			]), o
		}, u = /^NG_ENABLE_DEBUG_INFO!/,
			l = /^NG_DEFER_BOOTSTRAP!/;
		return t && u.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(u, "")), t && !l.test(t.name) ? s() : (t.name = t.name.replace(l, ""), void(si.resumeBootstrap = function(t) {
			o(t, function(t) {
				r.push(t)
			}), s()
		}))
	}

	function te() {
		t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
	}

	function ee(t) {
		var e = si.element(t).injector();
		if (!e) throw ai("test", "no injector found for element argument to getTestability");
		return e.get("$$testability")
	}

	function ne(t, e) {
		return e = e || "_", t.replace(mi, function(t, n) {
			return (n ? e : "") + t.toLowerCase()
		})
	}

	function re() {
		var e;
		gi || (ti = t.jQuery, ti && ti.fn.on ? (Kr = ti, f(ti.fn, {
			scope: Ri.scope,
			isolateScope: Ri.isolateScope,
			controller: Ri.controller,
			injector: Ri.injector,
			inheritedData: Ri.inheritedData
		}), e = ti.cleanData, ti.cleanData = function(t) {
			var n;
			if (li) li = !1;
			else
				for (var r, i = 0; null != (r = t[i]); i++) n = ti._data(r, "events"), n && n.$destroy && ti(r).triggerHandler("$destroy");
			e(t)
		}) : Kr = $e, si.element = Kr, gi = !0)
	}

	function ie(t, e, n) {
		if (!t) throw ai("areq", "Argument '{0}' is {1}", e || "?", n || "required");
		return t
	}

	function oe(t, e, n) {
		return n && ci(t) && (t = t[t.length - 1]), ie(x(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
	}

	function ae(t, e) {
		if ("hasOwnProperty" === t) throw ai("badname", "hasOwnProperty is not a valid {0} name", e)
	}

	function se(t, e, n) {
		if (!e) return t;
		for (var r, i = e.split("."), o = t, a = i.length, s = 0; a > s; s++) r = i[s], t && (t = (o = t)[r]);
		return !n && x(t) ? V(o, t) : t
	}

	function ue(t) {
		var e = t[0],
			n = t[t.length - 1],
			r = [e];
		do {
			if (e = e.nextSibling, !e) break;
			r.push(e)
		} while (e !== n);
		return Kr(r)
	}

	function le() {
		return Object.create(null)
	}

	function ce(t) {
		function e(t, e, n) {
			return t[e] || (t[e] = n())
		}
		var n = r("$injector"),
			i = r("ng"),
			o = e(t, "angular", Object);
		return o.$$minErr = o.$$minErr || r, e(o, "module", function() {
			var t = {};
			return function(r, o, a) {
				var s = function(t, e) {
					if ("hasOwnProperty" === t) throw i("badname", "hasOwnProperty is not a valid {0} name", e)
				};
				return s(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function() {
					function t(t, n, r, i) {
						return i || (i = e),
						function() {
							return i[r || "push"]([t, n, arguments]), l
						}
					}
					if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
					var e = [],
						i = [],
						s = [],
						u = t("$injector", "invoke", "push", i),
						l = {
							_invokeQueue: e,
							_configBlocks: i,
							_runBlocks: s,
							requires: o,
							name: r,
							provider: t("$provide", "provider"),
							factory: t("$provide", "factory"),
							service: t("$provide", "service"),
							value: t("$provide", "value"),
							constant: t("$provide", "constant", "unshift"),
							animation: t("$animateProvider", "register"),
							filter: t("$filterProvider", "register"),
							controller: t("$controllerProvider", "register"),
							directive: t("$compileProvider", "directive"),
							config: u,
							run: function(t) {
								return s.push(t), this
							}
						};
					return a && u(a), l
				})
			}
		})
	}

	function fe(t) {
		var e = [];
		return JSON.stringify(t, function(t, n) {
			if (n = z(t, n), _(n)) {
				if (e.indexOf(n) >= 0) return "<<already seen>>";
				e.push(n)
			}
			return n
		})
	}

	function he(t) {
		return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? fe(t) : t
	}

	function de(e) {
		f(e, {
			bootstrap: K,
			copy: R,
			extend: f,
			equals: q,
			element: Kr,
			forEach: o,
			injector: Ye,
			noop: p,
			bind: V,
			toJson: H,
			fromJson: Y,
			identity: m,
			isUndefined: v,
			isDefined: y,
			isString: $,
			isFunction: x,
			isObject: _,
			isNumber: b,
			isElement: D,
			isArray: ci,
			version: wi,
			isDate: w,
			lowercase: Br,
			uppercase: Qr,
			callbacks: {
				counter: 0
			},
			getTestability: ee,
			$$minErr: r,
			$$csp: di,
			reloadWithDebugInfo: te
		}), ei = ce(t);
		try {
			ei("ngLocale")
		} catch (n) {
			ei("ngLocale", []).provider("$locale", vn)
		}
		ei("ng", ["ngLocale"], ["$provide",
			function(t) {
				t.provider({
					$$sanitizeUri: Qn
				}), t.provider("$compile", Ze).directive({
					a: Po,
					input: Bo,
					textarea: Bo,
					form: Mo,
					script: qa,
					select: Va,
					style: Ha,
					option: za,
					ngBind: ha,
					ngBindHtml: pa,
					ngBindTemplate: da,
					ngClass: ma,
					ngClassEven: va,
					ngClassOdd: ga,
					ngCloak: ya,
					ngController: _a,
					ngForm: jo,
					ngHide: Da,
					ngIf: wa,
					ngInclude: xa,
					ngInit: Sa,
					ngNonBindable: Ca,
					ngPluralize: ka,
					ngRepeat: Pa,
					ngShow: Ea,
					ngStyle: Ma,
					ngSwitch: ja,
					ngSwitchWhen: Na,
					ngSwitchDefault: Ra,
					ngOptions: La,
					ngTransclude: Ia,
					ngModel: na,
					ngList: ua,
					ngChange: ra,
					pattern: oa,
					ngPattern: oa,
					required: ia,
					ngRequired: ia,
					minlength: sa,
					ngMinlength: sa,
					maxlength: aa,
					ngMaxlength: aa,
					ngValue: ca,
					ngModelOptions: fa
				}).directive({
					ngInclude: Ta
				}).directive(Oo).directive($a), t.provider({
					$anchorScroll: Ue,
					$animate: Wi,
					$browser: Xe,
					$cacheFactory: Qe,
					$controller: en,
					$document: nn,
					$exceptionHandler: rn,
					$filter: sr,
					$interpolate: mn,
					$interval: gn,
					$http: fn,
					$httpBackend: dn,
					$location: En,
					$log: Dn,
					$parse: Hn,
					$rootScope: Xn,
					$q: Yn,
					$$q: Un,
					$sce: Kn,
					$sceDelegate: Jn,
					$sniffer: tr,
					$templateCache: Ge,
					$templateRequest: er,
					$$testability: nr,
					$timeout: rr,
					$window: ar,
					$$rAF: Bn,
					$$asyncCallback: We,
					$$jqLite: Fe
				})
			}
		])
	}

	function pe() {
		return ++Ti
	}

	function me(t) {
		return t.replace(ki, function(t, e, n, r) {
			return r ? n.toUpperCase() : n
		}).replace(Pi, "Moz$1")
	}

	function ge(t) {
		return !Di.test(t)
	}

	function ve(t) {
		var e = t.nodeType;
		return e === vi || !e || e === $i
	}

	function ye(t, e) {
		var n, r, i, a, s = e.createDocumentFragment(),
			u = [];
		if (ge(t)) u.push(e.createTextNode(t));
		else {
			for (n = n || s.appendChild(e.createElement("div")), r = (Mi.exec(t) || ["", ""])[1].toLowerCase(), i = Ni[r] || Ni._default, n.innerHTML = i[1] + t.replace(ji, "<$1></$2>") + i[2], a = i[0]; a--;) n = n.lastChild;
			u = F(u, n.childNodes), n = s.firstChild, n.textContent = ""
		}
		return s.textContent = "", s.innerHTML = "", o(u, function(t) {
			s.appendChild(t)
		}), s
	}

	function _e(t, n) {
		n = n || e;
		var r;
		return (r = Ei.exec(t)) ? [n.createElement(r[1])] : (r = ye(t, n)) ? r.childNodes : []
	}

	function $e(t) {
		if (t instanceof $e) return t;
		var e;
		if ($(t) && (t = fi(t), e = !0), !(this instanceof $e)) {
			if (e && "<" != t.charAt(0)) throw Ai("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
			return new $e(t)
		}
		e ? Ae(this, _e(t)) : Ae(this, t)
	}

	function be(t) {
		return t.cloneNode(!0)
	}

	function we(t, e) {
		if (e || Te(t), t.querySelectorAll)
			for (var n = t.querySelectorAll("*"), r = 0, i = n.length; i > r; r++) Te(n[r])
	}

	function xe(t, e, n, r) {
		if (y(r)) throw Ai("offargs", "jqLite#off() does not support the `selector` argument");
		var i = Se(t),
			a = i && i.events,
			s = i && i.handle;
		if (s)
			if (e) o(e.split(" "), function(e) {
				if (y(n)) {
					var r = a[e];
					if (N(r || [], n), r && r.length > 0) return
				}
				Ci(t, e, s), delete a[e]
			});
			else
				for (e in a) "$destroy" !== e && Ci(t, e, s), delete a[e]
	}

	function Te(t, e) {
		var r = t.ng339,
			i = r && xi[r];
		if (i) {
			if (e) return void delete i.data[e];
			i.handle && (i.events.$destroy && i.handle({}, "$destroy"), xe(t)), delete xi[r], t.ng339 = n
		}
	}

	function Se(t, e) {
		var r = t.ng339,
			i = r && xi[r];
		return e && !i && (t.ng339 = r = pe(), i = xi[r] = {
			events: {},
			data: {},
			handle: n
		}), i
	}

	function Ce(t, e, n) {
		if (ve(t)) {
			var r = y(n),
				i = !r && e && !_(e),
				o = !e,
				a = Se(t, !i),
				s = a && a.data;
			if (r) s[e] = n;
			else {
				if (o) return s;
				if (i) return s && s[e];
				f(s, e)
			}
		}
	}

	function ke(t, e) {
		return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
	}

	function Pe(t, e) {
		e && t.setAttribute && o(e.split(" "), function(e) {
			t.setAttribute("class", fi((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + fi(e) + " ", " ")))
		})
	}

	function Oe(t, e) {
		if (e && t.setAttribute) {
			var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			o(e.split(" "), function(t) {
				t = fi(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
			}), t.setAttribute("class", fi(n))
		}
	}

	function Ae(t, e) {
		if (e)
			if (e.nodeType) t[t.length++] = e;
			else {
				var n = e.length;
				if ("number" == typeof n && e.window !== e) {
					if (n)
						for (var r = 0; n > r; r++) t[t.length++] = e[r]
				} else t[t.length++] = e
			}
	}

	function Ee(t, e) {
		return De(t, "$" + (e || "ngController") + "Controller")
	}

	function De(t, e, r) {
		t.nodeType == $i && (t = t.documentElement);
		for (var i = ci(e) ? e : [e]; t;) {
			for (var o = 0, a = i.length; a > o; o++)
				if ((r = Kr.data(t, i[o])) !== n) return r;
			t = t.parentNode || t.nodeType === bi && t.host
		}
	}

	function Me(t) {
		for (we(t, !0); t.firstChild;) t.removeChild(t.firstChild)
	}

	function je(t, e) {
		e || we(t);
		var n = t.parentNode;
		n && n.removeChild(t)
	}

	function Ne(e, n) {
		n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : Kr(n).on("load", e)
	}

	function Re(t, e) {
		var n = Ii[e.toLowerCase()];
		return n && qi[j(t)] && n
	}

	function Ie(t, e) {
		var n = t.nodeName;
		return ("INPUT" === n || "TEXTAREA" === n) && Fi[e]
	}

	function qe(t, e) {
		var n = function(n, r) {
			n.isDefaultPrevented = function() {
				return n.defaultPrevented
			};
			var i = e[r || n.type],
				o = i ? i.length : 0;
			if (o) {
				if (v(n.immediatePropagationStopped)) {
					var a = n.stopImmediatePropagation;
					n.stopImmediatePropagation = function() {
						n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
					}
				}
				n.isImmediatePropagationStopped = function() {
					return n.immediatePropagationStopped === !0
				}, o > 1 && (i = I(i));
				for (var s = 0; o > s; s++) n.isImmediatePropagationStopped() || i[s].call(t, n)
			}
		};
		return n.elem = t, n
	}

	function Fe() {
		this.$get = function() {
			return f($e, {
				hasClass: function(t, e) {
					return t.attr && (t = t[0]), ke(t, e)
				},
				addClass: function(t, e) {
					return t.attr && (t = t[0]), Oe(t, e)
				},
				removeClass: function(t, e) {
					return t.attr && (t = t[0]), Pe(t, e)
				}
			})
		}
	}

	function Le(t, e) {
		var n = t && t.$$hashKey;
		if (n) return "function" == typeof n && (n = t.$$hashKey()), n;
		var r = typeof t;
		return n = "function" == r || "object" == r && null !== t ? t.$$hashKey = r + ":" + (e || l)() : r + ":" + t
	}

	function Ve(t, e) {
		if (e) {
			var n = 0;
			this.nextUid = function() {
				return ++n
			}
		}
		o(t, this.put, this)
	}

	function ze(t) {
		var e = t.toString().replace(Hi, ""),
			n = e.match(Li);
		return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
	}

	function He(t, e, n) {
		var r, i, a, s;
		if ("function" == typeof t) {
			if (!(r = t.$inject)) {
				if (r = [], t.length) {
					if (e) throw $(n) && n || (n = t.name || ze(t)), Yi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
					i = t.toString().replace(Hi, ""), a = i.match(Li), o(a[1].split(Vi), function(t) {
						t.replace(zi, function(t, e, n) {
							r.push(n)
						})
					})
				}
				t.$inject = r
			}
		} else ci(t) ? (s = t.length - 1, oe(t[s], "fn"), r = t.slice(0, s)) : oe(t, "fn", !0);
		return r
	}

	function Ye(t, e) {
		function r(t) {
			return function(e, n) {
				return _(e) ? void o(e, u(t)) : t(e, n)
			}
		}

		function i(t, e) {
			if (ae(t, "service"), (x(e) || ci(e)) && (e = C.instantiate(e)), !e.$get) throw Yi("pget", "Provider '{0}' must define $get factory method.", t);
			return S[t + b] = e
		}

		function a(t, e) {
			return function() {
				var n = P.invoke(e, this);
				if (v(n)) throw Yi("undef", "Provider '{0}' must return a value from $get factory method.", t);
				return n
			}
		}

		function s(t, e, n) {
			return i(t, {
				$get: n !== !1 ? a(t, e) : e
			})
		}

		function l(t, e) {
			return s(t, ["$injector",
				function(t) {
					return t.instantiate(e)
				}
			])
		}

		function c(t, e) {
			return s(t, g(e), !1)
		}

		function f(t, e) {
			ae(t, "constant"), S[t] = e, k[t] = e
		}

		function h(t, e) {
			var n = C.get(t + b),
				r = n.$get;
			n.$get = function() {
				var t = P.invoke(r, n);
				return P.invoke(e, null, {
					$delegate: t
				})
			}
		}

		function d(t) {
			var e, n = [];
			return o(t, function(t) {
				function r(t) {
					var e, n;
					for (e = 0, n = t.length; n > e; e++) {
						var r = t[e],
							i = C.get(r[0]);
						i[r[1]].apply(i, r[2])
					}
				}
				if (!T.get(t)) {
					T.put(t, !0);
					try {
						$(t) ? (e = ei(t), n = n.concat(d(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : x(t) ? n.push(C.invoke(t)) : ci(t) ? n.push(C.invoke(t)) : oe(t, "module")
					} catch (i) {
						throw ci(t) && (t = t[t.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Yi("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, i.stack || i.message || i)
					}
				}
			}), n
		}

		function m(t, n) {
			function r(e, r) {
				if (t.hasOwnProperty(e)) {
					if (t[e] === y) throw Yi("cdep", "Circular dependency found: {0}", e + " <- " + w.join(" <- "));
					return t[e]
				}
				try {
					return w.unshift(e), t[e] = y, t[e] = n(e, r)
				} catch (i) {
					throw t[e] === y && delete t[e], i
				} finally {
					w.shift()
				}
			}

			function i(t, n, i, o) {
				"string" == typeof i && (o = i, i = null);
				var a, s, u, l = [],
					c = He(t, e, o);
				for (s = 0, a = c.length; a > s; s++) {
					if (u = c[s], "string" != typeof u) throw Yi("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
					l.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o))
				}
				return ci(t) && (t = t[a]), t.apply(n, l)
			}

			function o(t, e, n) {
				var r = Object.create((ci(t) ? t[t.length - 1] : t).prototype),
					o = i(t, r, e, n);
				return _(o) || x(o) ? o : r
			}
			return {
				invoke: i,
				instantiate: o,
				get: r,
				annotate: He,
				has: function(e) {
					return S.hasOwnProperty(e + b) || t.hasOwnProperty(e)
				}
			}
		}
		e = e === !0;
		var y = {}, b = "Provider",
			w = [],
			T = new Ve([], !0),
			S = {
				$provide: {
					provider: r(i),
					factory: r(s),
					service: r(l),
					value: r(c),
					constant: r(f),
					decorator: h
				}
			}, C = S.$injector = m(S, function(t, e) {
				throw si.isString(e) && w.push(e), Yi("unpr", "Unknown provider: {0}", w.join(" <- "))
			}),
			k = {}, P = k.$injector = m(k, function(t, e) {
				var r = C.get(t + b, e);
				return P.invoke(r.$get, r, n, t)
			});
		return o(d(t), function(t) {
			P.invoke(t || p)
		}), P
	}

	function Ue() {
		var t = !0;
		this.disableAutoScrolling = function() {
			t = !1
		}, this.$get = ["$window", "$location", "$rootScope",
			function(e, n, r) {
				function i(t) {
					var e = null;
					return Array.prototype.some.call(t, function(t) {
						return "a" === j(t) ? (e = t, !0) : void 0
					}), e
				}

				function o() {
					var t = s.yOffset;
					if (x(t)) t = t();
					else if (D(t)) {
						var n = t[0],
							r = e.getComputedStyle(n);
						t = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
					} else b(t) || (t = 0);
					return t
				}

				function a(t) {
					if (t) {
						t.scrollIntoView();
						var n = o();
						if (n) {
							var r = t.getBoundingClientRect().top;
							e.scrollBy(0, r - n)
						}
					} else e.scrollTo(0, 0)
				}

				function s() {
					var t, e = n.hash();
					e ? (t = u.getElementById(e)) ? a(t) : (t = i(u.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
				}
				var u = e.document;
				return t && r.$watch(function() {
					return n.hash()
				}, function(t, e) {
					(t !== e || "" !== t) && Ne(function() {
						r.$evalAsync(s)
					})
				}), s
			}
		]
	}

	function We() {
		this.$get = ["$$rAF", "$timeout",
			function(t, e) {
				return t.supported ? function(e) {
					return t(e)
				} : function(t) {
					return e(t, 0, !1)
				}
			}
		]
	}

	function Be(t, e, r, i) {
		function a(t) {
			try {
				t.apply(null, L(arguments, 1))
			} finally {
				if (x--, 0 === x)
					for (; T.length;) try {
						T.pop()()
					} catch (e) {
						r.error(e)
					}
			}
		}

		function s(t) {
			var e = t.indexOf("#");
			return -1 === e ? "" : t.substr(e + 1)
		}

		function u(t, e) {
			! function n() {
				o(C, function(t) {
					t()
				}), S = e(n, t)
			}()
		}

		function l() {
			c(), f()
		}

		function c() {
			k = t.history.state, k = v(k) ? null : k, q(k, j) && (k = j), j = k
		}

		function f() {
			(O !== d.url() || P !== k) && (O = d.url(), P = k, o(D, function(t) {
				t(d.url(), k)
			}))
		}

		function h(t) {
			try {
				return decodeURIComponent(t)
			} catch (e) {
				return t
			}
		}
		var d = this,
			m = e[0],
			g = t.location,
			y = t.history,
			_ = t.setTimeout,
			b = t.clearTimeout,
			w = {};
		d.isMock = !1;
		var x = 0,
			T = [];
		d.$$completeOutstandingRequest = a, d.$$incOutstandingRequestCount = function() {
			x++
		}, d.notifyWhenNoOutstandingRequests = function(t) {
			o(C, function(t) {
				t()
			}), 0 === x ? t() : T.push(t)
		};
		var S, C = [];
		d.addPollFn = function(t) {
			return v(S) && u(100, _), C.push(t), t
		};
		var k, P, O = g.href,
			A = e.find("base"),
			E = null;
		c(), P = k, d.url = function(e, n, r) {
			if (v(r) && (r = null), g !== t.location && (g = t.location), y !== t.history && (y = t.history), e) {
				var o = P === r;
				if (O === e && (!i.history || o)) return d;
				var a = O && wn(O) === wn(e);
				return O = e, P = r, !i.history || a && o ? (a || (E = e), n ? g.replace(e) : a ? g.hash = s(e) : g.href = e) : (y[n ? "replaceState" : "pushState"](r, "", e), c(), P = k), d
			}
			return E || g.href.replace(/%27/g, "'")
		}, d.state = function() {
			return k
		};
		var D = [],
			M = !1,
			j = null;
		d.onUrlChange = function(e) {
			return M || (i.history && Kr(t).on("popstate", l), Kr(t).on("hashchange", l), M = !0), D.push(e), e
		}, d.$$checkUrlChange = f, d.baseHref = function() {
			var t = A.attr("href");
			return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
		};
		var N = {}, R = "",
			I = d.baseHref();
		d.cookies = function(t, e) {
			var i, o, a, s, u;
			if (!t) {
				if (m.cookie !== R)
					for (R = m.cookie, o = R.split("; "), N = {}, s = 0; s < o.length; s++) a = o[s], u = a.indexOf("="), u > 0 && (t = h(a.substring(0, u)), N[t] === n && (N[t] = h(a.substring(u + 1))));
				return N
			}
			e === n ? m.cookie = encodeURIComponent(t) + "=;path=" + I + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : $(e) && (i = (m.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=" + I).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
		}, d.defer = function(t, e) {
			var n;
			return x++, n = _(function() {
				delete w[n], a(t)
			}, e || 0), w[n] = !0, n
		}, d.defer.cancel = function(t) {
			return w[t] ? (delete w[t], b(t), a(p), !0) : !1
		}
	}

	function Xe() {
		this.$get = ["$window", "$log", "$sniffer", "$document",
			function(t, e, n, r) {
				return new Be(t, r, e, n)
			}
		]
	}

	function Qe() {
		this.$get = function() {
			function t(t, n) {
				function i(t) {
					t != h && (d ? d == t && (d = t.n) : d = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
				}

				function o(t, e) {
					t != e && (t && (t.p = e), e && (e.n = t))
				}
				if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
				var a = 0,
					s = f({}, n, {
						id: t
					}),
					u = {}, l = n && n.capacity || Number.MAX_VALUE,
					c = {}, h = null,
					d = null;
				return e[t] = {
					put: function(t, e) {
						if (l < Number.MAX_VALUE) {
							var n = c[t] || (c[t] = {
								key: t
							});
							i(n)
						}
						if (!v(e)) return t in u || a++, u[t] = e, a > l && this.remove(d.key), e
					},
					get: function(t) {
						if (l < Number.MAX_VALUE) {
							var e = c[t];
							if (!e) return;
							i(e)
						}
						return u[t]
					},
					remove: function(t) {
						if (l < Number.MAX_VALUE) {
							var e = c[t];
							if (!e) return;
							e == h && (h = e.p), e == d && (d = e.n), o(e.n, e.p), delete c[t]
						}
						delete u[t], a--
					},
					removeAll: function() {
						u = {}, a = 0, c = {}, h = d = null
					},
					destroy: function() {
						u = null, s = null, c = null, delete e[t]
					},
					info: function() {
						return f({}, s, {
							size: a
						})
					}
				}
			}
			var e = {};
			return t.info = function() {
				var t = {};
				return o(e, function(e, n) {
					t[n] = e.info()
				}), t
			}, t.get = function(t) {
				return e[t]
			}, t
		}
	}

	function Ge() {
		this.$get = ["$cacheFactory",
			function(t) {
				return t("templates")
			}
		]
	}

	function Ze(t, r) {
		function i(t, e) {
			var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
				r = {};
			return o(t, function(t, i) {
				var o = t.match(n);
				if (!o) throw Bi("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, i, t);
				r[i] = {
					mode: o[1][0],
					collection: "*" === o[2],
					optional: "?" === o[3],
					attrName: o[4] || i
				}
			}), r
		}
		var a = {}, s = "Directive",
			l = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
			c = /(([\w\-]+)(?:\:([^;]+))?;?)/,
			h = M("ngSrc,ngSrcset,src,srcset"),
			v = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
			b = /^(on[a-z]+|formaction)$/;
		this.directive = function T(e, n) {
			return ae(e, "directive"), $(e) ? (ie(n, "directiveFactory"), a.hasOwnProperty(e) || (a[e] = [], t.factory(e + s, ["$injector", "$exceptionHandler",
				function(t, n) {
					var r = [];
					return o(a[e], function(o, a) {
						try {
							var s = t.invoke(o);
							x(s) ? s = {
								compile: g(s)
							} : !s.compile && s.link && (s.compile = g(s.link)), s.priority = s.priority || 0, s.index = a, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA", _(s.scope) && (s.$$isolateBindings = i(s.scope, s.name)), r.push(s)
						} catch (u) {
							n(u)
						}
					}), r
				}
			])), a[e].push(n)) : o(e, u(T)), this
		}, this.aHrefSanitizationWhitelist = function(t) {
			return y(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
		}, this.imgSrcSanitizationWhitelist = function(t) {
			return y(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
		};
		var w = !0;
		this.debugInfoEnabled = function(t) {
			return y(t) ? (w = t, this) : w
		}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
			function(t, r, i, u, g, y, T, S, k, P, O) {
				function A(t, e) {
					try {
						t.addClass(e)
					} catch (n) {}
				}

				function E(t, e, n, r, i) {
					t instanceof Kr || (t = Kr(t)), o(t, function(e, n) {
						e.nodeType == yi && e.nodeValue.match(/\S+/) && (t[n] = Kr(e).wrap("<span></span>").parent()[0])
					});
					var a = M(t, e, t, n, r, i);
					E.$$addScopeClass(t);
					var s = null;
					return function(e, n, r) {
						ie(e, "scope"), r = r || {};
						var i = r.parentBoundTranscludeFn,
							o = r.transcludeControllers,
							u = r.futureParentElement;
						i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = D(u));
						var l;
						if (l = "html" !== s ? Kr(J(s, Kr("<div>").append(t).html())) : n ? Ri.clone.call(t) : t, o)
							for (var c in o) l.data("$" + c + "Controller", o[c].instance);
						return E.$$addScopeInfo(l, e), n && n(l, e), a && a(e, l, l, i), l
					}
				}

				function D(t) {
					var e = t && t[0];
					return e && "foreignobject" !== j(e) && e.toString().match(/SVG/) ? "svg" : "html"
				}

				function M(t, e, r, i, o, a) {
					function s(t, r, i, o) {
						var a, s, u, l, c, f, h, d, g;
						if (p) {
							var v = r.length;
							for (g = new Array(v), c = 0; c < m.length; c += 3) h = m[c], g[h] = r[h]
						} else g = r;
						for (c = 0, f = m.length; f > c;) u = g[m[c++]], a = m[c++], s = m[c++], a ? (a.scope ? (l = t.$new(), E.$$addScopeInfo(Kr(u), l)) : l = t, d = a.transcludeOnThisElement ? R(t, a.transclude, o, a.elementTranscludeOnThisElement) : !a.templateOnThisElement && o ? o : !o && e ? R(t, e) : null, a(s, l, u, i, d)) : s && s(t, u.childNodes, n, o)
					}
					for (var u, l, c, f, h, d, p, m = [], g = 0; g < t.length; g++) u = new ae, l = I(t[g], [], u, 0 === g ? i : n, o), c = l.length ? z(l, t[g], u, e, r, null, [], [], a) : null, c && c.scope && E.$$addScopeClass(u.$$element), h = c && c.terminal || !(f = t[g].childNodes) || !f.length ? null : M(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : e), (c || h) && (m.push(g, c, h), d = !0, p = p || c), a = null;
					return d ? s : null
				}

				function R(t, e, n) {
					var r = function(r, i, o, a, s) {
						return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
							parentBoundTranscludeFn: n,
							transcludeControllers: o,
							futureParentElement: a
						})
					};
					return r
				}

				function I(t, e, n, r, i) {
					var o, a, s = t.nodeType,
						u = n.$attr;
					switch (s) {
						case vi:
							Y(e, Je(j(t)), "E", r, i);
							for (var f, h, d, p, m, g, v = t.attributes, y = 0, _ = v && v.length; _ > y; y++) {
								var b = !1,
									w = !1;
								f = v[y], h = f.name, m = fi(f.value), p = Je(h), (g = fe.test(p)) && (h = h.replace(Xi, "").substr(8).replace(/_(.)/g, function(t, e) {
									return e.toUpperCase()
								}));
								var x = p.replace(/(Start|End)$/, "");
								W(x) && p === x + "Start" && (b = h, w = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), d = Je(h.toLowerCase()), u[d] = h, (g || !n.hasOwnProperty(d)) && (n[d] = m, Re(t, d) && (n[d] = !0)), te(t, e, m, d, g), Y(e, d, "A", r, i, b, w)
							}
							if (a = t.className, $(a) && "" !== a)
								for (; o = c.exec(a);) d = Je(o[2]), Y(e, d, "C", r, i) && (n[d] = fi(o[3])), a = a.substr(o.index + o[0].length);
							break;
						case yi:
							Z(e, t.nodeValue);
							break;
						case _i:
							try {
								o = l.exec(t.nodeValue), o && (d = Je(o[1]), Y(e, d, "M", r, i) && (n[d] = fi(o[2])))
							} catch (T) {}
					}
					return e.sort(Q), e
				}

				function F(t, e, n) {
					var r = [],
						i = 0;
					if (e && t.hasAttribute && t.hasAttribute(e)) {
						do {
							if (!t) throw Bi("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
							t.nodeType == vi && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
						} while (i > 0)
					} else r.push(t);
					return Kr(r)
				}

				function V(t, e, n) {
					return function(r, i, o, a, s) {
						return i = F(i[0], e, n), t(r, i, o, a, s)
					}
				}

				function z(t, a, s, u, l, c, f, h, d) {
					function p(t, e, n, r) {
						t && (n && (t = V(t, n, r)), t.require = S.require, t.directiveName = k, (j === S || S.$$isolateScope) && (t = re(t, {
							isolateScope: !0
						})), f.push(t)), e && (n && (e = V(e, n, r)), e.require = S.require, e.directiveName = k, (j === S || S.$$isolateScope) && (e = re(e, {
							isolateScope: !0
						})), h.push(e))
					}

					function m(t, e, n, r) {
						var i, a, s = "data",
							u = !1,
							l = n;
						if ($(e)) {
							if (a = e.match(v), e = e.substring(a[0].length), a[3] && (a[1] ? a[3] = null : a[1] = a[3]), "^" === a[1] ? s = "inheritedData" : "^^" === a[1] && (s = "inheritedData", l = n.parent()), "?" === a[2] && (u = !0), i = null, r && "data" === s && (i = r[e]) && (i = i.instance), i = i || l[s]("$" + e + "Controller"), !i && !u) throw Bi("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
							return i || null
						}
						return ci(e) && (i = [], o(e, function(e) {
							i.push(m(t, e, n, r))
						})), i
					}

					function b(t, e, i, u, l) {
						function c(t, e, r) {
							var i;
							return C(t) || (r = e, e = t, t = n), W && (i = b), r || (r = W ? x.parent() : x), l(t, e, i, r, O)
						}
						var d, p, v, _, $, b, w, x, S;
						if (a === i ? (S = s, x = s.$$element) : (x = Kr(i), S = new ae(x, s)), j && ($ = e.$new(!0)), l && (w = c, w.$$boundTransclude = l), M && (T = {}, b = {}, o(M, function(t) {
							var n, r = {
									$scope: t === j || t.$$isolateScope ? $ : e,
									$element: x,
									$attrs: S,
									$transclude: w
								};
							_ = t.controller, "@" == _ && (_ = S[t.name]), n = y(_, r, !0, t.controllerAs), b[t.name] = n, W || x.data("$" + t.name + "Controller", n.instance), T[t.name] = n
						})), j) {
							E.$$addScopeInfo(x, $, !0, !(N && (N === j || N === j.$$originalDirective))), E.$$addScopeClass(x, !0);
							var k = T && T[j.name],
								P = $;
							k && k.identifier && j.bindToController === !0 && (P = k.instance), o($.$$isolateBindings = j.$$isolateBindings, function(t, n) {
								var i, o, a, s, u = t.attrName,
									l = t.optional,
									c = t.mode;
								switch (c) {
									case "@":
										S.$observe(u, function(t) {
											P[n] = t
										}), S.$$observers[u].$$scope = e, S[u] && (P[n] = r(S[u])(e));
										break;
									case "=":
										if (l && !S[u]) return;
										o = g(S[u]), s = o.literal ? q : function(t, e) {
											return t === e || t !== t && e !== e
										}, a = o.assign || function() {
											throw i = P[n] = o(e), Bi("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", S[u], j.name)
										}, i = P[n] = o(e);
										var f = function(t) {
											return s(t, P[n]) || (s(t, i) ? a(e, t = P[n]) : P[n] = t), i = t
										};
										f.$stateful = !0;
										var h;
										h = t.collection ? e.$watchCollection(S[u], f) : e.$watch(g(S[u], f), null, o.literal), $.$on("$destroy", h);
										break;
									case "&":
										o = g(S[u]), P[n] = function(t) {
											return o(e, t)
										}
								}
							})
						}
						for (T && (o(T, function(t) {
							t()
						}), T = null), d = 0, p = f.length; p > d; d++) v = f[d], oe(v, v.isolateScope ? $ : e, x, S, v.require && m(v.directiveName, v.require, x, b), w);
						var O = e;
						for (j && (j.template || null === j.templateUrl) && (O = $), t && t(O, i.childNodes, n, l), d = h.length - 1; d >= 0; d--) v = h[d], oe(v, v.isolateScope ? $ : e, x, S, v.require && m(v.directiveName, v.require, x, b), w)
					}
					d = d || {};
					for (var w, T, S, k, P, O, A, D = -Number.MAX_VALUE, M = d.controllerDirectives, j = d.newIsolateScopeDirective, N = d.templateDirective, R = d.nonTlbTranscludeDirective, z = !1, Y = !1, W = d.hasElementTranscludeDirective, Q = s.$$element = Kr(a), Z = c, K = u, te = 0, ne = t.length; ne > te; te++) {
						S = t[te];
						var ie = S.$$start,
							se = S.$$end;
						if (ie && (Q = F(a, ie, se)), P = n, D > S.priority) break;
						if ((A = S.scope) && (S.templateUrl || (_(A) ? (G("new/isolated scope", j || w, S, Q), j = S) : G("new/isolated scope", j, S, Q)), w = w || S), k = S.name, !S.templateUrl && S.controller && (A = S.controller, M = M || {}, G("'" + k + "' controller", M[k], S, Q), M[k] = S), (A = S.transclude) && (z = !0, S.$$tlb || (G("transclusion", R, S, Q), R = S), "element" == A ? (W = !0, D = S.priority, P = Q, Q = s.$$element = Kr(e.createComment(" " + k + ": " + s[k] + " ")), a = Q[0], ee(l, L(P), a), K = E(P, u, D, Z && Z.name, {
							nonTlbTranscludeDirective: R
						})) : (P = Kr(be(a)).contents(), Q.empty(), K = E(P, u))), S.template)
							if (Y = !0, G("template", N, S, Q), N = S, A = x(S.template) ? S.template(Q, s) : S.template, A = ce(A), S.replace) {
								if (Z = S, P = ge(A) ? [] : tn(J(S.templateNamespace, fi(A))), a = P[0], 1 != P.length || a.nodeType !== vi) throw Bi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", k, "");
								ee(l, Q, a);
								var ue = {
									$attr: {}
								}, le = I(a, [], ue),
									fe = t.splice(te + 1, t.length - (te + 1));
								j && H(le), t = t.concat(le).concat(fe), B(s, ue), ne = t.length
							} else Q.html(A);
						if (S.templateUrl) Y = !0, G("template", N, S, Q), N = S, S.replace && (Z = S), b = X(t.splice(te, t.length - te), Q, s, l, z && K, f, h, {
							controllerDirectives: M,
							newIsolateScopeDirective: j,
							templateDirective: N,
							nonTlbTranscludeDirective: R
						}), ne = t.length;
						else if (S.compile) try {
							O = S.compile(Q, s, K), x(O) ? p(null, O, ie, se) : O && p(O.pre, O.post, ie, se)
						} catch (he) {
							i(he, U(Q))
						}
						S.terminal && (b.terminal = !0, D = Math.max(D, S.priority))
					}
					return b.scope = w && w.scope === !0, b.transcludeOnThisElement = z, b.elementTranscludeOnThisElement = W, b.templateOnThisElement = Y, b.transclude = K, d.hasElementTranscludeDirective = W, b
				}

				function H(t) {
					for (var e = 0, n = t.length; n > e; e++) t[e] = d(t[e], {
						$$isolateScope: !0
					})
				}

				function Y(e, r, o, u, l, c, f) {
					if (r === l) return null;
					var h = null;
					if (a.hasOwnProperty(r))
						for (var p, m = t.get(r + s), g = 0, v = m.length; v > g; g++) try {
							p = m[g], (u === n || u > p.priority) && -1 != p.restrict.indexOf(o) && (c && (p = d(p, {
								$$start: c,
								$$end: f
							})), e.push(p), h = p)
						} catch (y) {
							i(y)
						}
					return h
				}

				function W(e) {
					if (a.hasOwnProperty(e))
						for (var n, r = t.get(e + s), i = 0, o = r.length; o > i; i++)
							if (n = r[i], n.multiElement) return !0;
					return !1
				}

				function B(t, e) {
					var n = e.$attr,
						r = t.$attr,
						i = t.$$element;
					o(t, function(r, i) {
						"$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
					}), o(e, function(e, o) {
						"class" == o ? (A(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
					})
				}

				function X(t, e, n, r, i, a, s, l) {
					var c, h, d = [],
						p = e[0],
						m = t.shift(),
						g = f({}, m, {
							templateUrl: null,
							transclude: null,
							replace: null,
							$$originalDirective: m
						}),
						v = x(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl,
						y = m.templateNamespace;
					return e.empty(), u(k.getTrustedResourceUrl(v)).then(function(u) {
						var f, $, b, w;
						if (u = ce(u), m.replace) {
							if (b = ge(u) ? [] : tn(J(y, fi(u))), f = b[0], 1 != b.length || f.nodeType !== vi) throw Bi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m.name, v);
							$ = {
								$attr: {}
							}, ee(r, e, f);
							var x = I(f, [], $);
							_(m.scope) && H(x), t = x.concat(t), B(n, $)
						} else f = p, e.html(u);
						for (t.unshift(g), c = z(t, f, n, i, e, m, a, s, l), o(r, function(t, n) {
							t == f && (r[n] = e[0])
						}), h = M(e[0].childNodes, i); d.length;) {
							var T = d.shift(),
								S = d.shift(),
								C = d.shift(),
								k = d.shift(),
								P = e[0];
							if (!T.$$destroyed) {
								if (S !== p) {
									var O = S.className;
									l.hasElementTranscludeDirective && m.replace || (P = be(f)), ee(C, Kr(S), P), A(Kr(P), O)
								}
								w = c.transcludeOnThisElement ? R(T, c.transclude, k) : k, c(h, T, P, r, w)
							}
						}
						d = null
					}),
					function(t, e, n, r, i) {
						var o = i;
						e.$$destroyed || (d ? d.push(e, n, r, o) : (c.transcludeOnThisElement && (o = R(e, c.transclude, i)), c(h, e, n, r, o)))
					}
				}

				function Q(t, e) {
					var n = e.priority - t.priority;
					return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
				}

				function G(t, e, n, r) {
					if (e) throw Bi("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, U(r))
				}

				function Z(t, e) {
					var n = r(e, !0);
					n && t.push({
						priority: 0,
						compile: function(t) {
							var e = t.parent(),
								r = !! e.length;
							return r && E.$$addBindingClass(e),
							function(t, e) {
								var i = e.parent();
								r || E.$$addBindingClass(i), E.$$addBindingInfo(i, n.expressions), t.$watch(n, function(t) {
									e[0].nodeValue = t
								})
							}
						}
					})
				}

				function J(t, n) {
					switch (t = Br(t || "html")) {
						case "svg":
						case "math":
							var r = e.createElement("div");
							return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
						default:
							return n
					}
				}

				function K(t, e) {
					if ("srcdoc" == e) return k.HTML;
					var n = j(t);
					return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? k.RESOURCE_URL : void 0
				}

				function te(t, e, n, i, o) {
					var a = K(t, i);
					o = h[i] || o;
					var s = r(n, !0, a, o);
					if (s) {
						if ("multiple" === i && "select" === j(t)) throw Bi("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", U(t));
						e.push({
							priority: 100,
							compile: function() {
								return {
									pre: function(t, e, u) {
										var l = u.$$observers || (u.$$observers = {});
										if (b.test(i)) throw Bi("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
										var c = u[i];
										c !== n && (s = c && r(c, !0, a, o), n = c), s && (u[i] = s(t), (l[i] || (l[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(s, function(t, e) {
											"class" === i && t != e ? u.$updateClass(t, e) : u.$set(i, t)
										}))
									}
								}
							}
						})
					}
				}

				function ee(t, n, r) {
					var i, o, a = n[0],
						s = n.length,
						u = a.parentNode;
					if (t)
						for (i = 0, o = t.length; o > i; i++)
							if (t[i] == a) {
								t[i++] = r;
								for (var l = i, c = l + s - 1, f = t.length; f > l; l++, c++) f > c ? t[l] = t[c] : delete t[l];
								t.length -= s - 1, t.context === a && (t.context = r);
								break
							}
					u && u.replaceChild(r, a);
					var h = e.createDocumentFragment();
					h.appendChild(a), Kr(r).data(Kr(a).data()), ti ? (li = !0, ti.cleanData([a])) : delete Kr.cache[a[Kr.expando]];
					for (var d = 1, p = n.length; p > d; d++) {
						var m = n[d];
						Kr(m).remove(), h.appendChild(m), delete n[d]
					}
					n[0] = r, n.length = 1
				}

				function re(t, e) {
					return f(function() {
						return t.apply(null, arguments)
					}, t, e)
				}

				function oe(t, e, n, r, o, a) {
					try {
						t(e, n, r, o, a)
					} catch (s) {
						i(s, U(n))
					}
				}
				var ae = function(t, e) {
					if (e) {
						var n, r, i, o = Object.keys(e);
						for (n = 0, r = o.length; r > n; n++) i = o[n], this[i] = e[i]
					} else this.$attr = {};
					this.$$element = t
				};
				ae.prototype = {
					$normalize: Je,
					$addClass: function(t) {
						t && t.length > 0 && P.addClass(this.$$element, t)
					},
					$removeClass: function(t) {
						t && t.length > 0 && P.removeClass(this.$$element, t)
					},
					$updateClass: function(t, e) {
						var n = Ke(t, e);
						n && n.length && P.addClass(this.$$element, n);
						var r = Ke(e, t);
						r && r.length && P.removeClass(this.$$element, r)
					},
					$set: function(t, e, r, a) {
						var s, u = this.$$element[0],
							l = Re(u, t),
							c = Ie(u, t),
							f = t;
						if (l ? (this.$$element.prop(t, e), a = l) : c && (this[c] = e, f = c), this[t] = e, a ? this.$attr[t] = a : (a = this.$attr[t], a || (this.$attr[t] = a = ne(t, "-"))), s = j(this.$$element), "a" === s && "href" === t || "img" === s && "src" === t) this[t] = e = O(e, "src" === t);
						else if ("img" === s && "srcset" === t) {
							for (var h = "", d = fi(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, m = /\s/.test(d) ? p : /(,)/, g = d.split(m), v = Math.floor(g.length / 2), y = 0; v > y; y++) {
								var _ = 2 * y;
								h += O(fi(g[_]), !0), h += " " + fi(g[_ + 1])
							}
							var $ = fi(g[2 * y]).split(/\s/);
							h += O(fi($[0]), !0), 2 === $.length && (h += " " + fi($[1])), this[t] = e = h
						}
						r !== !1 && (null === e || e === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, e));
						var b = this.$$observers;
						b && o(b[f], function(t) {
							try {
								t(e)
							} catch (n) {
								i(n)
							}
						})
					},
					$observe: function(t, e) {
						var n = this,
							r = n.$$observers || (n.$$observers = le()),
							i = r[t] || (r[t] = []);
						return i.push(e), T.$evalAsync(function() {
							!i.$$inter && n.hasOwnProperty(t) && e(n[t])
						}),
						function() {
							N(i, e)
						}
					}
				};
				var se = r.startSymbol(),
					ue = r.endSymbol(),
					ce = "{{" == se || "}}" == ue ? m : function(t) {
						return t.replace(/\{\{/g, se).replace(/}}/g, ue)
					}, fe = /^ngAttr[A-Z]/;
				return E.$$addBindingInfo = w ? function(t, e) {
					var n = t.data("$binding") || [];
					ci(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
				} : p, E.$$addBindingClass = w ? function(t) {
					A(t, "ng-binding")
				} : p, E.$$addScopeInfo = w ? function(t, e, n, r) {
					var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
					t.data(i, e)
				} : p, E.$$addScopeClass = w ? function(t, e) {
					A(t, e ? "ng-isolate-scope" : "ng-scope")
				} : p, E
			}
		]
	}

	function Je(t) {
		return me(t.replace(Xi, ""))
	}

	function Ke(t, e) {
		var n = "",
			r = t.split(/\s+/),
			i = e.split(/\s+/);
		t: for (var o = 0; o < r.length; o++) {
			for (var a = r[o], s = 0; s < i.length; s++)
				if (a == i[s]) continue t;
			n += (n.length > 0 ? " " : "") + a
		}
		return n
	}

	function tn(t) {
		t = Kr(t);
		var e = t.length;
		if (1 >= e) return t;
		for (; e--;) {
			var n = t[e];
			n.nodeType === _i && ri.call(t, e, 1)
		}
		return t
	}

	function en() {
		var t = {}, e = !1,
			i = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function(e, n) {
			ae(e, "controller"), _(e) ? f(t, e) : t[e] = n
		}, this.allowGlobals = function() {
			e = !0
		}, this.$get = ["$injector", "$window",
			function(o, a) {
				function s(t, e, n, i) {
					if (!t || !_(t.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, e);
					t.$scope[e] = n
				}
				return function(r, u, l, c) {
					var h, d, p, m;
					if (l = l === !0, c && $(c) && (m = c), $(r) && (d = r.match(i), p = d[1], m = m || d[3], r = t.hasOwnProperty(p) ? t[p] : se(u.$scope, p, !0) || (e ? se(a, p, !0) : n), oe(r, p, !0)), l) {
						var g = (ci(r) ? r[r.length - 1] : r).prototype;
						return h = Object.create(g), m && s(u, m, h, p || r.name), f(function() {
							return o.invoke(r, h, u, p), h
						}, {
							instance: h,
							identifier: m
						})
					}
					return h = o.instantiate(r, u, p), m && s(u, m, h, p || r.name), h
				}
			}
		]
	}

	function nn() {
		this.$get = ["$window",
			function(t) {
				return Kr(t.document)
			}
		]
	}

	function rn() {
		this.$get = ["$log",
			function(t) {
				return function() {
					t.error.apply(t, arguments)
				}
			}
		]
	}

	function on(t, e) {
		if ($(t)) {
			var n = t.replace(Ki, "").trim();
			if (n) {
				var r = e("Content-Type");
				(r && 0 === r.indexOf(Qi) || an(n)) && (t = Y(n))
			}
		}
		return t
	}

	function an(t) {
		var e = t.match(Zi);
		return e && Ji[e[0]].test(t)
	}

	function sn(t) {
		var e, n, r, i = le();
		return t ? (o(t.split("\n"), function(t) {
			r = t.indexOf(":"), e = Br(fi(t.substr(0, r))), n = fi(t.substr(r + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n)
		}), i) : i
	}

	function un(t) {
		var e = _(t) ? t : n;
		return function(n) {
			if (e || (e = sn(t)), n) {
				var r = e[Br(n)];
				return void 0 === r && (r = null), r
			}
			return e
		}
	}

	function ln(t, e, n, r) {
		return x(r) ? r(t, e, n) : (o(r, function(r) {
			t = r(t, e, n)
		}), t)
	}

	function cn(t) {
		return t >= 200 && 300 > t
	}

	function fn() {
		var t = this.defaults = {
			transformResponse: [on],
			transformRequest: [
				function(t) {
					return !_(t) || k(t) || O(t) || P(t) ? t : H(t)
				}
			],
			headers: {
				common: {
					Accept: "application/json, text/plain, */*"
				},
				post: I(Gi),
				put: I(Gi),
				patch: I(Gi)
			},
			xsrfCookieName: "XSRF-TOKEN",
			xsrfHeaderName: "X-XSRF-TOKEN"
		}, e = !1;
		this.useApplyAsync = function(t) {
			return y(t) ? (e = !! t, this) : e
		};
		var i = this.interceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
			function(a, u, l, c, h, d) {
				function p(e) {
					function i(t) {
						var e = f({}, t);
						return e.data = t.data ? ln(t.data, t.headers, t.status, u.transformResponse) : t.data, cn(t.status) ? e : h.reject(e)
					}

					function a(t) {
						var e, n = {};
						return o(t, function(t, r) {
							x(t) ? (e = t(), null != e && (n[r] = e)) : n[r] = t
						}), n
					}

					function s(e) {
						var n, r, i, o = t.headers,
							s = f({}, e.headers);
						o = f({}, o.common, o[Br(e.method)]);
						t: for (n in o) {
							r = Br(n);
							for (i in s)
								if (Br(i) === r) continue t;
							s[n] = o[n]
						}
						return a(s)
					}
					if (!si.isObject(e)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
					var u = f({
						method: "get",
						transformRequest: t.transformRequest,
						transformResponse: t.transformResponse
					}, e);
					u.headers = s(e), u.method = Qr(u.method);
					var l = function(e) {
						var r = e.headers,
							a = ln(e.data, un(r), n, e.transformRequest);
						return v(a) && o(r, function(t, e) {
							"content-type" === Br(e) && delete r[e]
						}), v(e.withCredentials) && !v(t.withCredentials) && (e.withCredentials = t.withCredentials), b(e, a).then(i, i)
					}, c = [l, n],
						d = h.when(u);
					for (o(C, function(t) {
						(t.request || t.requestError) && c.unshift(t.request, t.requestError), (t.response || t.responseError) && c.push(t.response, t.responseError)
					}); c.length;) {
						var p = c.shift(),
							m = c.shift();
						d = d.then(p, m)
					}
					return d.success = function(t) {
						return d.then(function(e) {
							t(e.data, e.status, e.headers, u)
						}), d
					}, d.error = function(t) {
						return d.then(null, function(e) {
							t(e.data, e.status, e.headers, u)
						}), d
					}, d
				}

				function m() {
					o(arguments, function(t) {
						p[t] = function(e, n) {
							return p(f(n || {}, {
								method: t,
								url: e
							}))
						}
					})
				}

				function g() {
					o(arguments, function(t) {
						p[t] = function(e, n, r) {
							return p(f(r || {}, {
								method: t,
								url: e,
								data: n
							}))
						}
					})
				}

				function b(r, i) {
					function o(t, n, r, i) {
						function o() {
							s(n, t, r, i)
						}
						d && (cn(t) ? d.put(w, [t, n, sn(r), i]) : d.remove(w)), e ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
					}

					function s(t, e, n, i) {
						e = Math.max(e, 0), (cn(e) ? g.resolve : g.reject)({
							data: t,
							status: e,
							headers: un(n),
							config: r,
							statusText: i
						})
					}

					function l(t) {
						s(t.data, t.status, I(t.headers()), t.statusText)
					}

					function f() {
						var t = p.pendingRequests.indexOf(r); - 1 !== t && p.pendingRequests.splice(t, 1)
					}
					var d, m, g = h.defer(),
						$ = g.promise,
						b = r.headers,
						w = T(r.url, r.params);
					if (p.pendingRequests.push(r), $.then(f, f), !r.cache && !t.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (d = _(r.cache) ? r.cache : _(t.cache) ? t.cache : S), d && (m = d.get(w), y(m) ? E(m) ? m.then(l, l) : ci(m) ? s(m[1], m[0], I(m[2]), m[3]) : s(m, 200, {}, "OK") : d.put(w, $)), v(m)) {
						var x = or(r.url) ? u.cookies()[r.xsrfCookieName || t.xsrfCookieName] : n;
						x && (b[r.xsrfHeaderName || t.xsrfHeaderName] = x), a(r.method, w, i, o, b, r.timeout, r.withCredentials, r.responseType)
					}
					return $
				}

				function T(t, e) {
					if (!e) return t;
					var n = [];
					return s(e, function(t, e) {
						null === t || v(t) || (ci(t) || (t = [t]), o(t, function(t) {
							_(t) && (t = w(t) ? t.toISOString() : H(t)), n.push(G(e) + "=" + G(t))
						}))
					}), n.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")), t
				}
				var S = l("$http"),
					C = [];
				return o(i, function(t) {
					C.unshift($(t) ? d.get(t) : d.invoke(t))
				}), p.pendingRequests = [], m("get", "delete", "head", "jsonp"), g("post", "put", "patch"), p.defaults = t, p
			}
		]
	}

	function hn() {
		return new t.XMLHttpRequest
	}

	function dn() {
		this.$get = ["$browser", "$window", "$document",
			function(t, e, n) {
				return pn(t, hn, t.defer, e.angular.callbacks, n[0])
			}
		]
	}

	function pn(t, e, r, i, a) {
		function s(t, e, n) {
			var r = a.createElement("script"),
				o = null;
			return r.type = "text/javascript", r.src = t, r.async = !0, o = function(t) {
				Ci(r, "load", o), Ci(r, "error", o), a.body.removeChild(r), r = null;
				var s = -1,
					u = "unknown";
				t && ("load" !== t.type || i[e].called || (t = {
					type: "error"
				}), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
			}, Si(r, "load", o), Si(r, "error", o), a.body.appendChild(r), o
		}
		return function(a, u, l, c, f, h, d, m) {
			function g() {
				$ && $(), b && b.abort()
			}

			function v(e, i, o, a, s) {
				T !== n && r.cancel(T), $ = b = null, e(i, o, a, s), t.$$completeOutstandingRequest(p)
			}
			if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Br(a)) {
				var _ = "_" + (i.counter++).toString(36);
				i[_] = function(t) {
					i[_].data = t, i[_].called = !0
				};
				var $ = s(u.replace("JSON_CALLBACK", "angular.callbacks." + _), _, function(t, e) {
					v(c, t, i[_].data, "", e), i[_] = p
				})
			} else {
				var b = e();
				b.open(a, u, !0), o(f, function(t, e) {
					y(t) && b.setRequestHeader(e, t)
				}), b.onload = function() {
					var t = b.statusText || "",
						e = "response" in b ? b.response : b.responseText,
						n = 1223 === b.status ? 204 : b.status;
					0 === n && (n = e ? 200 : "file" == ir(u).protocol ? 404 : 0), v(c, n, e, b.getAllResponseHeaders(), t)
				};
				var w = function() {
					v(c, -1, null, null, "")
				};
				if (b.onerror = w, b.onabort = w, d && (b.withCredentials = !0), m) try {
					b.responseType = m
				} catch (x) {
					if ("json" !== m) throw x
				}
				b.send(l || null)
			} if (h > 0) var T = r(g, h);
			else E(h) && h.then(g)
		}
	}

	function mn() {
		var t = "{{",
			e = "}}";
		this.startSymbol = function(e) {
			return e ? (t = e, this) : t
		}, this.endSymbol = function(t) {
			return t ? (e = t, this) : e
		}, this.$get = ["$parse", "$exceptionHandler", "$sce",
			function(n, r, i) {
				function o(t) {
					return "\\\\\\" + t
				}

				function a(o, a, h, d) {
					function p(n) {
						return n.replace(l, t).replace(c, e)
					}

					function m(t) {
						try {
							return t = O(t), d && !y(t) ? t : A(t)
						} catch (e) {
							var n = to("interr", "Can't interpolate: {0}\n{1}", o, e.toString());
							r(n)
						}
					}
					d = !! d;
					for (var g, _, $, b = 0, w = [], T = [], S = o.length, C = [], k = []; S > b;) {
						if (-1 == (g = o.indexOf(t, b)) || -1 == (_ = o.indexOf(e, g + s))) {
							b !== S && C.push(p(o.substring(b)));
							break
						}
						b !== g && C.push(p(o.substring(b, g))), $ = o.substring(g + s, _), w.push($), T.push(n($, m)), b = _ + u, k.push(C.length), C.push("")
					}
					if (h && C.length > 1) throw to("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
					if (!a || w.length) {
						var P = function(t) {
							for (var e = 0, n = w.length; n > e; e++) {
								if (d && v(t[e])) return;
								C[k[e]] = t[e]
							}
							return C.join("")
						}, O = function(t) {
								return h ? i.getTrusted(h, t) : i.valueOf(t)
							}, A = function(t) {
								if (null == t) return "";
								switch (typeof t) {
									case "string":
										break;
									case "number":
										t = "" + t;
										break;
									default:
										t = H(t)
								}
								return t
							};
						return f(function(t) {
							var e = 0,
								n = w.length,
								i = new Array(n);
							try {
								for (; n > e; e++) i[e] = T[e](t);
								return P(i)
							} catch (a) {
								var s = to("interr", "Can't interpolate: {0}\n{1}", o, a.toString());
								r(s)
							}
						}, {
							exp: o,
							expressions: w,
							$$watchDelegate: function(t, e, n) {
								var r;
								return t.$watchGroup(T, function(n, i) {
									var o = P(n);
									x(e) && e.call(this, o, n !== i ? r : o, t), r = o
								}, n)
							}
						})
					}
				}
				var s = t.length,
					u = e.length,
					l = new RegExp(t.replace(/./g, o), "g"),
					c = new RegExp(e.replace(/./g, o), "g");
				return a.startSymbol = function() {
					return t
				}, a.endSymbol = function() {
					return e
				}, a
			}
		]
	}

	function gn() {
		this.$get = ["$rootScope", "$window", "$q", "$$q",
			function(t, e, n, r) {
				function i(i, a, s, u) {
					var l = e.setInterval,
						c = e.clearInterval,
						f = 0,
						h = y(u) && !u,
						d = (h ? r : n).defer(),
						p = d.promise;
					return s = y(s) ? s : 0, p.then(null, null, i), p.$$intervalId = l(function() {
						d.notify(f++), s > 0 && f >= s && (d.resolve(f), c(p.$$intervalId), delete o[p.$$intervalId]), h || t.$apply()
					}, a), o[p.$$intervalId] = d, p
				}
				var o = {};
				return i.cancel = function(t) {
					return t && t.$$intervalId in o ? (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0) : !1
				}, i
			}
		]
	}

	function vn() {
		this.$get = function() {
			return {
				id: "en-us",
				NUMBER_FORMATS: {
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						minInt: 1,
						minFrac: 0,
						maxFrac: 3,
						posPre: "",
						posSuf: "",
						negPre: "-",
						negSuf: "",
						gSize: 3,
						lgSize: 3
					}, {
						minInt: 1,
						minFrac: 2,
						maxFrac: 2,
						posPre: "¤",
						posSuf: "",
						negPre: "(¤",
						negSuf: ")",
						gSize: 3,
						lgSize: 3
					}],
					CURRENCY_SYM: "$"
				},
				DATETIME_FORMATS: {
					MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
					SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
					DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
					SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
					AMPMS: ["AM", "PM"],
					medium: "MMM d, y h:mm:ss a",
					"short": "M/d/yy h:mm a",
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					mediumDate: "MMM d, y",
					shortDate: "M/d/yy",
					mediumTime: "h:mm:ss a",
					shortTime: "h:mm a"
				},
				pluralCat: function(t) {
					return 1 === t ? "one" : "other"
				}
			}
		}
	}

	function yn(t) {
		for (var e = t.split("/"), n = e.length; n--;) e[n] = Q(e[n]);
		return e.join("/")
	}

	function _n(t, e) {
		var n = ir(t);
		e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = h(n.port) || no[n.protocol] || null
	}

	function $n(t, e) {
		var n = "/" !== t.charAt(0);
		n && (t = "/" + t);
		var r = ir(t);
		e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = B(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
	}

	function bn(t, e) {
		return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
	}

	function wn(t) {
		var e = t.indexOf("#");
		return -1 == e ? t : t.substr(0, e)
	}

	function xn(t) {
		return t.replace(/(#.+)|#$/, "$1")
	}

	function Tn(t) {
		return t.substr(0, wn(t).lastIndexOf("/") + 1)
	}

	function Sn(t) {
		return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
	}

	function Cn(t, e) {
		this.$$html5 = !0, e = e || "";
		var r = Tn(t);
		_n(t, this), this.$$parse = function(t) {
			var e = bn(r, t);
			if (!$(e)) throw ro("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, r);
			$n(e, this), this.$$path || (this.$$path = "/"), this.$$compose()
		}, this.$$compose = function() {
			var t = X(this.$$search),
				e = this.$$hash ? "#" + Q(this.$$hash) : "";
			this.$$url = yn(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = r + this.$$url.substr(1)
		}, this.$$parseLinkUrl = function(i, o) {
			if (o && "#" === o[0]) return this.hash(o.slice(1)), !0;
			var a, s, u;
			return (a = bn(t, i)) !== n ? (s = a, u = (a = bn(e, a)) !== n ? r + (bn("/", a) || a) : t + s) : (a = bn(r, i)) !== n ? u = r + a : r == i + "/" && (u = r), u && this.$$parse(u), !! u
		}
	}

	function kn(t, e) {
		var n = Tn(t);
		_n(t, this), this.$$parse = function(r) {
			function i(t, e, n) {
				var r, i = /^\/[A-Z]:(\/.*)/;
				return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
			}
			var o, a = bn(t, r) || bn(n, r);
			"#" === a.charAt(0) ? (o = bn(e, a), v(o) && (o = a)) : o = this.$$html5 ? a : "", $n(o, this), this.$$path = i(this.$$path, o, t), this.$$compose()
		}, this.$$compose = function() {
			var n = X(this.$$search),
				r = this.$$hash ? "#" + Q(this.$$hash) : "";
			this.$$url = yn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
		}, this.$$parseLinkUrl = function(e) {
			return wn(t) == wn(e) ? (this.$$parse(e), !0) : !1
		}
	}

	function Pn(t, e) {
		this.$$html5 = !0, kn.apply(this, arguments);
		var n = Tn(t);
		this.$$parseLinkUrl = function(r, i) {
			if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
			var o, a;
			return t == wn(r) ? o = r : (a = bn(n, r)) ? o = t + e + a : n === r + "/" && (o = n), o && this.$$parse(o), !! o
		}, this.$$compose = function() {
			var n = X(this.$$search),
				r = this.$$hash ? "#" + Q(this.$$hash) : "";
			this.$$url = yn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + e + this.$$url
		}
	}

	function On(t) {
		return function() {
			return this[t]
		}
	}

	function An(t, e) {
		return function(n) {
			return v(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
		}
	}

	function En() {
		var t = "",
			e = {
				enabled: !1,
				requireBase: !0,
				rewriteLinks: !0
			};
		this.hashPrefix = function(e) {
			return y(e) ? (t = e, this) : t
		}, this.html5Mode = function(t) {
			return A(t) ? (e.enabled = t, this) : _(t) ? (A(t.enabled) && (e.enabled = t.enabled), A(t.requireBase) && (e.requireBase = t.requireBase), A(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
		}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window",
			function(n, r, i, o, a) {
				function s(t, e, n) {
					var i = l.url(),
						o = l.$$state;
					try {
						r.url(t, e, n), l.$$state = r.state()
					} catch (a) {
						throw l.url(i), l.$$state = o, a
					}
				}

				function u(t, e) {
					n.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e)
				}
				var l, c, f, h = r.baseHref(),
					d = r.url();
				if (e.enabled) {
					if (!h && e.requireBase) throw ro("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
					f = Sn(d) + (h || "/"), c = i.history ? Cn : Pn
				} else f = wn(d), c = kn;
				l = new c(f, "#" + t), l.$$parseLinkUrl(d, d), l.$$state = r.state();
				var p = /^\s*(javascript|mailto):/i;
				o.on("click", function(t) {
					if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && 2 != t.which) {
						for (var i = Kr(t.target);
							"a" !== j(i[0]);)
							if (i[0] === o[0] || !(i = i.parent())[0]) return;
						var s = i.prop("href"),
							u = i.attr("href") || i.attr("xlink:href");
						_(s) && "[object SVGAnimatedString]" === s.toString() && (s = ir(s.animVal).href), p.test(s) || !s || i.attr("target") || t.isDefaultPrevented() || l.$$parseLinkUrl(s, u) && (t.preventDefault(), l.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
					}
				}), l.absUrl() != d && r.url(l.absUrl(), !0);
				var m = !0;
				return r.onUrlChange(function(t, e) {
					n.$evalAsync(function() {
						var r, i = l.absUrl(),
							o = l.$$state;
						l.$$parse(t), l.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, l.absUrl() === t && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (m = !1, u(i, o)))
					}), n.$$phase || n.$digest()
				}), n.$watch(function() {
					var t = xn(r.url()),
						e = xn(l.absUrl()),
						o = r.state(),
						a = l.$$replace,
						c = t !== e || l.$$html5 && i.history && o !== l.$$state;
					(m || c) && (m = !1, n.$evalAsync(function() {
							var e = l.absUrl(),
								r = n.$broadcast("$locationChangeStart", e, t, l.$$state, o).defaultPrevented;
							l.absUrl() === e && (r ? (l.$$parse(t), l.$$state = o) : (c && s(e, a, o === l.$$state ? null : l.$$state), u(t, o)))
						})), l.$$replace = !1
				}), l
			}
		]
	}

	function Dn() {
		var t = !0,
			e = this;
		this.debugEnabled = function(e) {
			return y(e) ? (t = e, this) : t
		}, this.$get = ["$window",
			function(n) {
				function r(t) {
					return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
				}

				function i(t) {
					var e = n.console || {}, i = e[t] || e.log || p,
						a = !1;
					try {
						a = !! i.apply
					} catch (s) {}
					return a ? function() {
						var t = [];
						return o(arguments, function(e) {
							t.push(r(e))
						}), i.apply(e, t)
					} : function(t, e) {
						i(t, null == e ? "" : e)
					}
				}
				return {
					log: i("log"),
					info: i("info"),
					warn: i("warn"),
					error: i("error"),
					debug: function() {
						var n = i("debug");
						return function() {
							t && n.apply(e, arguments)
						}
					}()
				}
			}
		]
	}

	function Mn(t, e) {
		if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw oo("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
		return t
	}

	function jn(t, e) {
		if (t) {
			if (t.constructor === t) throw oo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
			if (t.window === t) throw oo("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
			if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw oo("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
			if (t === Object) throw oo("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
		}
		return t
	}

	function Nn(t, e) {
		if (t) {
			if (t.constructor === t) throw oo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
			if (t === ao || t === so || t === uo) throw oo("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
		}
	}

	function Rn(t) {
		return t.constant
	}

	function In(t, e, n, r) {
		jn(t, r);
		for (var i, o = e.split("."), a = 0; o.length > 1; a++) {
			i = Mn(o.shift(), r);
			var s = jn(t[i], r);
			s || (s = {}, t[i] = s), t = s
		}
		return i = Mn(o.shift(), r), jn(t[i], r), t[i] = n, n
	}

	function qn(t) {
		return "constructor" == t
	}

	function Fn(t, e, r, i, o, a, s) {
		Mn(t, a), Mn(e, a), Mn(r, a), Mn(i, a), Mn(o, a);
		var u = function(t) {
			return jn(t, a)
		}, l = s || qn(t) ? u : m,
			c = s || qn(e) ? u : m,
			f = s || qn(r) ? u : m,
			h = s || qn(i) ? u : m,
			d = s || qn(o) ? u : m;
		return function(a, s) {
			var u = s && s.hasOwnProperty(t) ? s : a;
			return null == u ? u : (u = l(u[t]), e ? null == u ? n : (u = c(u[e]), r ? null == u ? n : (u = f(u[r]), i ? null == u ? n : (u = h(u[i]), o ? null == u ? n : u = d(u[o]) : u) : u) : u) : u)
		}
	}

	function Ln(t, e) {
		return function(n, r) {
			return t(n, r, jn, e)
		}
	}

	function Vn(t, e, r) {
		var i = e.expensiveChecks,
			a = i ? go : mo,
			s = a[t];
		if (s) return s;
		var u = t.split("."),
			l = u.length;
		if (e.csp) s = 6 > l ? Fn(u[0], u[1], u[2], u[3], u[4], r, i) : function(t, e) {
			var o, a = 0;
			do o = Fn(u[a++], u[a++], u[a++], u[a++], u[a++], r, i)(t, e), e = n, t = o; while (l > a);
			return o
		};
		else {
			var c = "";
			i && (c += "s = eso(s, fe);\nl = eso(l, fe);\n");
			var f = i;
			o(u, function(t, e) {
				Mn(t, r);
				var n = (e ? "s" : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + "." + t;
				(i || qn(t)) && (n = "eso(" + n + ", fe)", f = !0), c += "if(s == null) return undefined;\ns=" + n + ";\n"
			}), c += "return s;";
			var h = new Function("s", "l", "eso", "fe", c);
			h.toString = g(c), f && (h = Ln(h, r)), s = h
		}
		return s.sharedGetter = !0, s.assign = function(e, n) {
			return In(e, t, n, t)
		}, a[t] = s, s
	}

	function zn(t) {
		return x(t.valueOf) ? t.valueOf() : vo.call(t)
	}

	function Hn() {
		var t = le(),
			e = le();
		this.$get = ["$filter", "$sniffer",
			function(n, r) {
				function i(t) {
					var e = t;
					return t.sharedGetter && (e = function(e, n) {
						return t(e, n)
					}, e.literal = t.literal, e.constant = t.constant, e.assign = t.assign), e
				}

				function a(t, e) {
					for (var n = 0, r = t.length; r > n; n++) {
						var i = t[n];
						i.constant || (i.inputs ? a(i.inputs, e) : -1 === e.indexOf(i) && e.push(i))
					}
					return e
				}

				function s(t, e) {
					return null == t || null == e ? t === e : "object" == typeof t && (t = zn(t), "object" == typeof t) ? !1 : t === e || t !== t && e !== e
				}

				function u(t, e, n, r) {
					var i, o = r.$$inputs || (r.$$inputs = a(r.inputs, []));
					if (1 === o.length) {
						var u = s;
						return o = o[0], t.$watch(function(t) {
							var e = o(t);
							return s(e, u) || (i = r(t), u = e && zn(e)), i
						}, e, n)
					}
					for (var l = [], c = 0, f = o.length; f > c; c++) l[c] = s;
					return t.$watch(function(t) {
						for (var e = !1, n = 0, a = o.length; a > n; n++) {
							var u = o[n](t);
							(e || (e = !s(u, l[n]))) && (l[n] = u && zn(u))
						}
						return e && (i = r(t)), i
					}, e, n)
				}

				function l(t, e, n, r) {
					var i, o;
					return i = t.$watch(function(t) {
						return r(t)
					}, function(t, n, r) {
						o = t, x(e) && e.apply(this, arguments), y(t) && r.$$postDigest(function() {
							y(o) && i()
						})
					}, n)
				}

				function c(t, e, n, r) {
					function i(t) {
						var e = !0;
						return o(t, function(t) {
							y(t) || (e = !1)
						}), e
					}
					var a, s;
					return a = t.$watch(function(t) {
						return r(t)
					}, function(t, n, r) {
						s = t, x(e) && e.call(this, t, n, r), i(t) && r.$$postDigest(function() {
							i(s) && a()
						})
					}, n)
				}

				function f(t, e, n, r) {
					var i;
					return i = t.$watch(function(t) {
						return r(t)
					}, function() {
						x(e) && e.apply(this, arguments), i()
					}, n)
				}

				function h(t, e) {
					if (!e) return t;
					var n = t.$$watchDelegate,
						r = n !== c && n !== l,
						i = r ? function(n, r) {
							var i = t(n, r);
							return e(i, n, r)
						} : function(n, r) {
							var i = t(n, r),
								o = e(i, n, r);
							return y(i) ? o : i
						};
					return t.$$watchDelegate && t.$$watchDelegate !== u ? i.$$watchDelegate = t.$$watchDelegate : e.$stateful || (i.$$watchDelegate = u, i.inputs = [t]), i
				}
				var d = {
					csp: r.csp,
					expensiveChecks: !1
				}, m = {
						csp: r.csp,
						expensiveChecks: !0
					};
				return function(r, o, a) {
					var s, g, v;
					switch (typeof r) {
						case "string":
							v = r = r.trim();
							var y = a ? e : t;
							if (s = y[v], !s) {
								":" === r.charAt(0) && ":" === r.charAt(1) && (g = !0, r = r.substring(2));
								var _ = a ? m : d,
									$ = new ho(_),
									b = new po($, n, _);
								s = b.parse(r), s.constant ? s.$$watchDelegate = f : g ? (s = i(s), s.$$watchDelegate = s.literal ? c : l) : s.inputs && (s.$$watchDelegate = u), y[v] = s
							}
							return h(s, o);
						case "function":
							return h(r, o);
						default:
							return h(p, o)
					}
				}
			}
		]
	}

	function Yn() {
		this.$get = ["$rootScope", "$exceptionHandler",
			function(t, e) {
				return Wn(function(e) {
					t.$evalAsync(e)
				}, e)
			}
		]
	}

	function Un() {
		this.$get = ["$browser", "$exceptionHandler",
			function(t, e) {
				return Wn(function(e) {
					t.defer(e)
				}, e)
			}
		]
	}

	function Wn(t, e) {
		function i(t, e, n) {
			function r(e) {
				return function(n) {
					i || (i = !0, e.call(t, n))
				}
			}
			var i = !1;
			return [r(e), r(n)]
		}

		function a() {
			this.$$state = {
				status: 0
			}
		}

		function s(t, e) {
			return function(n) {
				e.call(t, n)
			}
		}

		function u(t) {
			var r, i, o;
			o = t.pending, t.processScheduled = !1, t.pending = n;
			for (var a = 0, s = o.length; s > a; ++a) {
				i = o[a][0], r = o[a][t.status];
				try {
					x(r) ? i.resolve(r(t.value)) : 1 === t.status ? i.resolve(t.value) : i.reject(t.value)
				} catch (u) {
					i.reject(u), e(u)
				}
			}
		}

		function l(e) {
			!e.processScheduled && e.pending && (e.processScheduled = !0, t(function() {
				u(e)
			}))
		}

		function c() {
			this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
		}

		function f(t) {
			var e = new c,
				n = 0,
				r = ci(t) ? [] : {};
			return o(t, function(t, i) {
				n++, v(t).then(function(t) {
					r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
				}, function(t) {
					r.hasOwnProperty(i) || e.reject(t)
				})
			}), 0 === n && e.resolve(r), e.promise
		}
		var h = r("$q", TypeError),
			d = function() {
				return new c
			};
		a.prototype = {
			then: function(t, e, n) {
				var r = new c;
				return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), this.$$state.status > 0 && l(this.$$state), r.promise
			},
			"catch": function(t) {
				return this.then(null, t)
			},
			"finally": function(t, e) {
				return this.then(function(e) {
					return g(e, !0, t)
				}, function(e) {
					return g(e, !1, t)
				}, e)
			}
		}, c.prototype = {
			resolve: function(t) {
				this.promise.$$state.status || (t === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
			},
			$$resolve: function(t) {
				var n, r;
				r = i(this, this.$$resolve, this.$$reject);
				try {
					(_(t) || x(t)) && (n = t && t.then), x(n) ? (this.promise.$$state.status = -1, n.call(t, r[0], r[1], this.notify)) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, l(this.promise.$$state))
				} catch (o) {
					r[1](o), e(o)
				}
			},
			reject: function(t) {
				this.promise.$$state.status || this.$$reject(t)
			},
			$$reject: function(t) {
				this.promise.$$state.value = t, this.promise.$$state.status = 2, l(this.promise.$$state)
			},
			notify: function(n) {
				var r = this.promise.$$state.pending;
				this.promise.$$state.status <= 0 && r && r.length && t(function() {
					for (var t, i, o = 0, a = r.length; a > o; o++) {
						i = r[o][0], t = r[o][3];
						try {
							i.notify(x(t) ? t(n) : n)
						} catch (s) {
							e(s)
						}
					}
				})
			}
		};
		var p = function(t) {
			var e = new c;
			return e.reject(t), e.promise
		}, m = function(t, e) {
				var n = new c;
				return e ? n.resolve(t) : n.reject(t), n.promise
			}, g = function(t, e, n) {
				var r = null;
				try {
					x(n) && (r = n())
				} catch (i) {
					return m(i, !1)
				}
				return E(r) ? r.then(function() {
					return m(t, e)
				}, function(t) {
					return m(t, !1)
				}) : m(t, e)
			}, v = function(t, e, n, r) {
				var i = new c;
				return i.resolve(t), i.promise.then(e, n, r)
			}, y = function $(t) {
				function e(t) {
					r.resolve(t)
				}

				function n(t) {
					r.reject(t)
				}
				if (!x(t)) throw h("norslvr", "Expected resolverFn, got '{0}'", t);
				if (!(this instanceof $)) return new $(t);
				var r = new c;
				return t(e, n), r.promise
			};
		return y.defer = d, y.reject = p, y.when = v, y.all = f, y
	}

	function Bn() {
		this.$get = ["$window", "$timeout",
			function(t, e) {
				var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
					r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
					i = !! n,
					o = i ? function(t) {
						var e = n(t);
						return function() {
							r(e)
						}
					} : function(t) {
						var n = e(t, 16.66, !1);
						return function() {
							e.cancel(n)
						}
					};
				return o.supported = i, o
			}
		]
	}

	function Xn() {
		var t = 10,
			e = r("$rootScope"),
			n = null,
			a = null;
		this.digestTtl = function(e) {
			return arguments.length && (t = e), t
		}, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
			function(r, s, u, c) {
				function f() {
					this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
				}

				function h(t) {
					if (b.$$phase) throw e("inprog", "{0} already in progress", b.$$phase);
					b.$$phase = t
				}

				function d() {
					b.$$phase = null
				}

				function m(t, e, n) {
					do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
				}

				function g() {}

				function y() {
					for (; S.length;) try {
						S.shift()()
					} catch (t) {
						s(t)
					}
					a = null
				}

				function $() {
					null === a && (a = c.defer(function() {
						b.$apply(y)
					}))
				}
				f.prototype = {
					constructor: f,
					$new: function(t, e) {
						function n() {
							r.$$destroyed = !0
						}
						var r;
						return e = e || this, t ? (r = new f, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
							this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = l(), this.$$ChildScope = null
						}, this.$$ChildScope.prototype = this), r = new this.$$ChildScope), r.$parent = e, r.$$prevSibling = e.$$childTail, e.$$childHead ? (e.$$childTail.$$nextSibling = r, e.$$childTail = r) : e.$$childHead = e.$$childTail = r, (t || e != this) && r.$on("$destroy", n), r
					},
					$watch: function(t, e, r) {
						var i = u(t);
						if (i.$$watchDelegate) return i.$$watchDelegate(this, e, r, i);
						var o = this,
							a = o.$$watchers,
							s = {
								fn: e,
								last: g,
								get: i,
								exp: t,
								eq: !! r
							};
						return n = null, x(e) || (s.fn = p), a || (a = o.$$watchers = []), a.unshift(s),
						function() {
							N(a, s), n = null
						}
					},
					$watchGroup: function(t, e) {
						function n() {
							u = !1, l ? (l = !1, e(i, i, s)) : e(i, r, s)
						}
						var r = new Array(t.length),
							i = new Array(t.length),
							a = [],
							s = this,
							u = !1,
							l = !0;
						if (!t.length) {
							var c = !0;
							return s.$evalAsync(function() {
								c && e(i, i, s)
							}),
							function() {
								c = !1
							}
						}
						return 1 === t.length ? this.$watch(t[0], function(t, n, o) {
							i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
						}) : (o(t, function(t, e) {
							var o = s.$watch(t, function(t, o) {
								i[e] = t, r[e] = o, u || (u = !0, s.$evalAsync(n))
							});
							a.push(o)
						}), function() {
							for (; a.length;) a.shift()()
						})
					},
					$watchCollection: function(t, e) {
						function n(t) {
							o = t;
							var e, n, r, s, u;
							if (!v(o)) {
								if (_(o))
									if (i(o)) {
										a !== d && (a = d, g = a.length = 0, f++), e = o.length, g !== e && (f++, a.length = g = e);
										for (var l = 0; e > l; l++) u = a[l], s = o[l], r = u !== u && s !== s, r || u === s || (f++, a[l] = s)
									} else {
										a !== p && (a = p = {}, g = 0, f++), e = 0;
										for (n in o) o.hasOwnProperty(n) && (e++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (g++, a[n] = s, f++));
										if (g > e) {
											f++;
											for (n in a) o.hasOwnProperty(n) || (g--, delete a[n])
										}
									} else a !== o && (a = o, f++);
								return f
							}
						}

						function r() {
							if (m ? (m = !1, e(o, o, l)) : e(o, s, l), c)
								if (_(o))
									if (i(o)) {
										s = new Array(o.length);
										for (var t = 0; t < o.length; t++) s[t] = o[t]
									} else {
										s = {};
										for (var n in o) Xr.call(o, n) && (s[n] = o[n])
									} else s = o
						}
						n.$stateful = !0;
						var o, a, s, l = this,
							c = e.length > 1,
							f = 0,
							h = u(t, n),
							d = [],
							p = {}, m = !0,
							g = 0;
						return this.$watch(h, r)
					},
					$digest: function() {
						var r, i, o, u, l, f, p, m, v, _, $ = t,
							S = this,
							C = [];
						h("$digest"), c.$$checkUrlChange(), this === b && null !== a && (c.defer.cancel(a), y()), n = null;
						do {
							for (f = !1, m = S; w.length;) {
								try {
									_ = w.shift(), _.scope.$eval(_.expression, _.locals)
								} catch (k) {
									s(k)
								}
								n = null
							}
							t: do {
								if (u = m.$$watchers)
									for (l = u.length; l--;) try {
										if (r = u[l])
											if ((i = r.get(m)) === (o = r.last) || (r.eq ? q(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
												if (r === n) {
													f = !1;
													break t
												}
											} else f = !0, n = r, r.last = r.eq ? R(i, null) : i, r.fn(i, o === g ? i : o, m), 5 > $ && (v = 4 - $, C[v] || (C[v] = []), C[v].push({
												msg: x(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp,
												newVal: i,
												oldVal: o
											}))
									} catch (k) {
										s(k)
									}
								if (!(p = m.$$childHead || m !== S && m.$$nextSibling))
									for (; m !== S && !(p = m.$$nextSibling);) m = m.$parent
							} while (m = p);
							if ((f || w.length) && !$--) throw d(), e("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, C)
						} while (f || w.length);
						for (d(); T.length;) try {
							T.shift()()
						} catch (k) {
							s(k)
						}
					},
					$destroy: function() {
						if (!this.$$destroyed) {
							var t = this.$parent;
							if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== b) {
								for (var e in this.$$listenerCount) m(this, this.$$listenerCount[e], e);
								t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
									return p
								}, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
							}
						}
					},
					$eval: function(t, e) {
						return u(t)(this, e)
					},
					$evalAsync: function(t, e) {
						b.$$phase || w.length || c.defer(function() {
							w.length && b.$digest()
						}), w.push({
							scope: this,
							expression: t,
							locals: e
						})
					},
					$$postDigest: function(t) {
						T.push(t)
					},
					$apply: function(t) {
						try {
							return h("$apply"), this.$eval(t)
						} catch (e) {
							s(e)
						} finally {
							d();
							try {
								b.$digest()
							} catch (e) {
								throw s(e), e
							}
						}
					},
					$applyAsync: function(t) {
						function e() {
							n.$eval(t)
						}
						var n = this;
						t && S.push(e), $()
					},
					$on: function(t, e) {
						var n = this.$$listeners[t];
						n || (this.$$listeners[t] = n = []), n.push(e);
						var r = this;
						do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
						var i = this;
						return function() {
							var r = n.indexOf(e); - 1 !== r && (n[r] = null, m(i, 1, t))
						}
					},
					$emit: function(t) {
						var e, n, r, i = [],
							o = this,
							a = !1,
							u = {
								name: t,
								targetScope: o,
								stopPropagation: function() {
									a = !0
								},
								preventDefault: function() {
									u.defaultPrevented = !0
								},
								defaultPrevented: !1
							}, l = F([u], arguments, 1);
						do {
							for (e = o.$$listeners[t] || i, u.currentScope = o, n = 0, r = e.length; r > n; n++)
								if (e[n]) try {
									e[n].apply(null, l)
								} catch (c) {
									s(c)
								} else e.splice(n, 1), n--, r--;
							if (a) return u.currentScope = null, u;
							o = o.$parent
						} while (o);
						return u.currentScope = null, u
					},
					$broadcast: function(t) {
						var e = this,
							n = e,
							r = e,
							i = {
								name: t,
								targetScope: e,
								preventDefault: function() {
									i.defaultPrevented = !0
								},
								defaultPrevented: !1
							};
						if (!e.$$listenerCount[t]) return i;
						for (var o, a, u, l = F([i], arguments, 1); n = r;) {
							for (i.currentScope = n, o = n.$$listeners[t] || [], a = 0, u = o.length; u > a; a++)
								if (o[a]) try {
									o[a].apply(null, l)
								} catch (c) {
									s(c)
								} else o.splice(a, 1), a--, u--;
							if (!(r = n.$$listenerCount[t] && n.$$childHead || n !== e && n.$$nextSibling))
								for (; n !== e && !(r = n.$$nextSibling);) n = n.$parent
						}
						return i.currentScope = null, i
					}
				};
				var b = new f,
					w = b.$$asyncQueue = [],
					T = b.$$postDigestQueue = [],
					S = b.$$applyAsyncQueue = [];
				return b
			}
		]
	}

	function Qn() {
		var t = /^\s*(https?|ftp|mailto|tel|file):/,
			e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
		this.aHrefSanitizationWhitelist = function(e) {
			return y(e) ? (t = e, this) : t
		}, this.imgSrcSanitizationWhitelist = function(t) {
			return y(t) ? (e = t, this) : e
		}, this.$get = function() {
			return function(n, r) {
				var i, o = r ? e : t;
				return i = ir(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
			}
		}
	}

	function Gn(t) {
		if ("self" === t) return t;
		if ($(t)) {
			if (t.indexOf("***") > -1) throw yo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
			return t = hi(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
		}
		if (T(t)) return new RegExp("^" + t.source + "$");
		throw yo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
	}

	function Zn(t) {
		var e = [];
		return y(t) && o(t, function(t) {
			e.push(Gn(t))
		}), e
	}

	function Jn() {
		this.SCE_CONTEXTS = _o;
		var t = ["self"],
			e = [];
		this.resourceUrlWhitelist = function(e) {
			return arguments.length && (t = Zn(e)), t
		}, this.resourceUrlBlacklist = function(t) {
			return arguments.length && (e = Zn(t)), e
		}, this.$get = ["$injector",
			function(r) {
				function i(t, e) {
					return "self" === t ? or(e) : !! t.exec(e.href)
				}

				function o(n) {
					var r, o, a = ir(n.toString()),
						s = !1;
					for (r = 0, o = t.length; o > r; r++)
						if (i(t[r], a)) {
							s = !0;
							break
						}
					if (s)
						for (r = 0, o = e.length; o > r; r++)
							if (i(e[r], a)) {
								s = !1;
								break
							}
					return s
				}

				function a(t) {
					var e = function(t) {
						this.$$unwrapTrustedValue = function() {
							return t
						}
					};
					return t && (e.prototype = new t), e.prototype.valueOf = function() {
						return this.$$unwrapTrustedValue()
					}, e.prototype.toString = function() {
						return this.$$unwrapTrustedValue().toString()
					}, e
				}

				function s(t, e) {
					var r = h.hasOwnProperty(t) ? h[t] : null;
					if (!r) throw yo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
					if (null === e || e === n || "" === e) return e;
					if ("string" != typeof e) throw yo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
					return new r(e)
				}

				function u(t) {
					return t instanceof f ? t.$$unwrapTrustedValue() : t
				}

				function l(t, e) {
					if (null === e || e === n || "" === e) return e;
					var r = h.hasOwnProperty(t) ? h[t] : null;
					if (r && e instanceof r) return e.$$unwrapTrustedValue();
					if (t === _o.RESOURCE_URL) {
						if (o(e)) return e;
						throw yo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
					}
					if (t === _o.HTML) return c(e);
					throw yo("unsafe", "Attempting to use an unsafe value in a safe context.")
				}
				var c = function() {
					throw yo("unsafe", "Attempting to use an unsafe value in a safe context.")
				};
				r.has("$sanitize") && (c = r.get("$sanitize"));
				var f = a(),
					h = {};
				return h[_o.HTML] = a(f), h[_o.CSS] = a(f), h[_o.URL] = a(f), h[_o.JS] = a(f), h[_o.RESOURCE_URL] = a(h[_o.URL]), {
					trustAs: s,
					getTrusted: l,
					valueOf: u
				}
			}
		]
	}

	function Kn() {
		var t = !0;
		this.enabled = function(e) {
			return arguments.length && (t = !! e), t
		}, this.$get = ["$parse", "$sceDelegate",
			function(e, n) {
				if (t && 8 > Jr) throw yo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
				var r = I(_o);
				r.isEnabled = function() {
					return t
				}, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function(t, e) {
					return e
				}, r.valueOf = m), r.parseAs = function(t, n) {
					var i = e(n);
					return i.literal && i.constant ? i : e(n, function(e) {
						return r.getTrusted(t, e)
					})
				};
				var i = r.parseAs,
					a = r.getTrusted,
					s = r.trustAs;
				return o(_o, function(t, e) {
					var n = Br(e);
					r[me("parse_as_" + n)] = function(e) {
						return i(t, e)
					}, r[me("get_trusted_" + n)] = function(e) {
						return a(t, e)
					}, r[me("trust_as_" + n)] = function(e) {
						return s(t, e)
					}
				}), r
			}
		]
	}

	function tr() {
		this.$get = ["$window", "$document",
			function(t, e) {
				var n, r, i = {}, o = h((/android (\d+)/.exec(Br((t.navigator || {}).userAgent)) || [])[1]),
					a = /Boxee/i.test((t.navigator || {}).userAgent),
					s = e[0] || {}, u = /^(Moz|webkit|ms)(?=[A-Z])/,
					l = s.body && s.body.style,
					c = !1,
					f = !1;
				if (l) {
					for (var d in l)
						if (r = u.exec(d)) {
							n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
							break
						}
					n || (n = "WebkitOpacity" in l && "webkit"), c = !! ("transition" in l || n + "Transition" in l), f = !! ("animation" in l || n + "Animation" in l), !o || c && f || (c = $(s.body.style.webkitTransition), f = $(s.body.style.webkitAnimation))
				}
				return {
					history: !(!t.history || !t.history.pushState || 4 > o || a),
					hasEvent: function(t) {
						if ("input" === t && 11 >= Jr) return !1;
						if (v(i[t])) {
							var e = s.createElement("div");
							i[t] = "on" + t in e
						}
						return i[t]
					},
					csp: di(),
					vendorPrefix: n,
					transitions: c,
					animations: f,
					android: o
				}
			}
		]
	}

	function er() {
		this.$get = ["$templateCache", "$http", "$q",
			function(t, e, n) {
				function r(i, o) {
					function a(t) {
						if (s.totalPendingRequests--, !o) throw Bi("tpload", "Failed to load template: {0}", i);
						return n.reject(t)
					}
					var s = r;
					s.totalPendingRequests++;
					var u = e.defaults && e.defaults.transformResponse;
					ci(u) ? u = u.filter(function(t) {
						return t !== on
					}) : u === on && (u = null);
					var l = {
						cache: t,
						transformResponse: u
					};
					return e.get(i, l).then(function(t) {
						return s.totalPendingRequests--, t.data
					}, a)
				}
				return r.totalPendingRequests = 0, r
			}
		]
	}

	function nr() {
		this.$get = ["$rootScope", "$browser", "$location",
			function(t, e, n) {
				var r = {};
				return r.findBindings = function(t, e, n) {
					var r = t.getElementsByClassName("ng-binding"),
						i = [];
					return o(r, function(t) {
						var r = si.element(t).data("$binding");
						r && o(r, function(r) {
							if (n) {
								var o = new RegExp("(^|\\s)" + hi(e) + "(\\s|\\||$)");
								o.test(r) && i.push(t)
							} else -1 != r.indexOf(e) && i.push(t)
						})
					}), i
				}, r.findModels = function(t, e, n) {
					for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
						var o = n ? "=" : "*=",
							a = "[" + r[i] + "model" + o + '"' + e + '"]',
							s = t.querySelectorAll(a);
						if (s.length) return s
					}
				}, r.getLocation = function() {
					return n.url()
				}, r.setLocation = function(e) {
					e !== n.url() && (n.url(e), t.$digest())
				}, r.whenStable = function(t) {
					e.notifyWhenNoOutstandingRequests(t)
				}, r
			}
		]
	}

	function rr() {
		this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler",
			function(t, e, n, r, i) {
				function o(o, s, u) {
					var l, c = y(u) && !u,
						f = (c ? r : n).defer(),
						h = f.promise;
					return l = e.defer(function() {
						try {
							f.resolve(o())
						} catch (e) {
							f.reject(e), i(e)
						} finally {
							delete a[h.$$timeoutId]
						}
						c || t.$apply()
					}, s), h.$$timeoutId = l, a[l] = f, h
				}
				var a = {};
				return o.cancel = function(t) {
					return t && t.$$timeoutId in a ? (a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
				}, o
			}
		]
	}

	function ir(t) {
		var e = t;
		return Jr && ($o.setAttribute("href", e), e = $o.href), $o.setAttribute("href", e), {
			href: $o.href,
			protocol: $o.protocol ? $o.protocol.replace(/:$/, "") : "",
			host: $o.host,
			search: $o.search ? $o.search.replace(/^\?/, "") : "",
			hash: $o.hash ? $o.hash.replace(/^#/, "") : "",
			hostname: $o.hostname,
			port: $o.port,
			pathname: "/" === $o.pathname.charAt(0) ? $o.pathname : "/" + $o.pathname
		}
	}

	function or(t) {
		var e = $(t) ? ir(t) : t;
		return e.protocol === bo.protocol && e.host === bo.host
	}

	function ar() {
		this.$get = g(t)
	}

	function sr(t) {
		function e(r, i) {
			if (_(r)) {
				var a = {};
				return o(r, function(t, n) {
					a[n] = e(n, t)
				}), a
			}
			return t.factory(r + n, i)
		}
		var n = "Filter";
		this.register = e, this.$get = ["$injector",
			function(t) {
				return function(e) {
					return t.get(e + n)
				}
			}
		], e("currency", fr), e("date", wr), e("filter", ur), e("json", xr), e("limitTo", Tr), e("lowercase", Co), e("number", hr), e("orderBy", Sr), e("uppercase", ko)
	}

	function ur() {
		return function(t, e, n) {
			if (!ci(t)) return t;
			var r, i;
			switch (typeof e) {
				case "function":
					r = e;
					break;
				case "boolean":
				case "number":
				case "string":
					i = !0;
				case "object":
					r = lr(e, n, i);
					break;
				default:
					return t
			}
			return t.filter(r)
		}
	}

	function lr(t, e, n) {
		var r, i = _(t) && "$" in t;
		return e === !0 ? e = q : x(e) || (e = function(t, e) {
			return _(t) || _(e) ? !1 : (t = Br("" + t), e = Br("" + e), -1 !== t.indexOf(e))
		}), r = function(r) {
			return i && !_(r) ? cr(r, t.$, e, !1) : cr(r, t, e, n)
		}
	}

	function cr(t, e, n, r, i) {
		var o = typeof t,
			a = typeof e;
		if ("string" === a && "!" === e.charAt(0)) return !cr(t, e.substring(1), n, r);
		if ("array" === o) return t.some(function(t) {
			return cr(t, e, n, r)
		});
		switch (o) {
			case "object":
				var s;
				if (r) {
					for (s in t)
						if ("$" !== s.charAt(0) && cr(t[s], e, n, !0)) return !0;
					return i ? !1 : cr(t, e, n, !1)
				}
				if ("object" === a) {
					for (s in e) {
						var u = e[s];
						if (!x(u)) {
							var l = "$" === s,
								c = l ? t : t[s];
							if (!cr(c, u, n, l, l)) return !1
						}
					}
					return !0
				}
				return n(t, e);
			case "function":
				return !1;
			default:
				return n(t, e)
		}
	}

	function fr(t) {
		var e = t.NUMBER_FORMATS;
		return function(t, n, r) {
			return v(n) && (n = e.CURRENCY_SYM), v(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : dr(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
		}
	}

	function hr(t) {
		var e = t.NUMBER_FORMATS;
		return function(t, n) {
			return null == t ? t : dr(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
		}
	}

	function dr(t, e, n, r, i) {
		if (!isFinite(t) || _(t)) return "";
		var o = 0 > t;
		t = Math.abs(t);
		var a = t + "",
			s = "",
			u = [],
			l = !1;
		if (-1 !== a.indexOf("e")) {
			var c = a.match(/([\d\.]+)e(-?)(\d+)/);
			c && "-" == c[2] && c[3] > i + 1 ? t = 0 : (s = a, l = !0)
		}
		if (l) i > 0 && 1 > t && (s = t.toFixed(i), t = parseFloat(s));
		else {
			var f = (a.split(wo)[1] || "").length;
			v(i) && (i = Math.min(Math.max(e.minFrac, f), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
			var h = ("" + t).split(wo),
				d = h[0];
			h = h[1] || "";
			var p, m = 0,
				g = e.lgSize,
				y = e.gSize;
			if (d.length >= g + y)
				for (m = d.length - g, p = 0; m > p; p++)(m - p) % y === 0 && 0 !== p && (s += n), s += d.charAt(p);
			for (p = m; p < d.length; p++)(d.length - p) % g === 0 && 0 !== p && (s += n), s += d.charAt(p);
			for (; h.length < i;) h += "0";
			i && "0" !== i && (s += r + h.substr(0, i))
		}
		return 0 === t && (o = !1), u.push(o ? e.negPre : e.posPre, s, o ? e.negSuf : e.posSuf), u.join("")
	}

	function pr(t, e, n) {
		var r = "";
		for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
		return n && (t = t.substr(t.length - e)), r + t
	}

	function mr(t, e, n, r) {
		return n = n || 0,
		function(i) {
			var o = i["get" + t]();
			return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), pr(o, e, r)
		}
	}

	function gr(t, e) {
		return function(n, r) {
			var i = n["get" + t](),
				o = Qr(e ? "SHORT" + t : t);
			return r[o][i]
		}
	}

	function vr(t) {
		var e = -1 * t.getTimezoneOffset(),
			n = e >= 0 ? "+" : "";
		return n += pr(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + pr(Math.abs(e % 60), 2)
	}

	function yr(t) {
		var e = new Date(t, 0, 1).getDay();
		return new Date(t, 0, (4 >= e ? 5 : 12) - e)
	}

	function _r(t) {
		return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
	}

	function $r(t) {
		return function(e) {
			var n = yr(e.getFullYear()),
				r = _r(e),
				i = +r - +n,
				o = 1 + Math.round(i / 6048e5);
			return pr(o, t)
		}
	}

	function br(t, e) {
		return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
	}

	function wr(t) {
		function e(t) {
			var e;
			if (e = t.match(n)) {
				var r = new Date(0),
					i = 0,
					o = 0,
					a = e[8] ? r.setUTCFullYear : r.setFullYear,
					s = e[8] ? r.setUTCHours : r.setHours;
				e[9] && (i = h(e[9] + e[10]), o = h(e[9] + e[11])), a.call(r, h(e[1]), h(e[2]) - 1, h(e[3]));
				var u = h(e[4] || 0) - i,
					l = h(e[5] || 0) - o,
					c = h(e[6] || 0),
					f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
				return s.call(r, u, l, c, f), r
			}
			return t
		}
		var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function(n, r, i) {
			var a, s, u = "",
				l = [];
			if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, $(n) && (n = So.test(n) ? h(n) : e(n)), b(n) && (n = new Date(n)), !w(n)) return n;
			for (; r;) s = To.exec(r), s ? (l = F(l, s, 1), r = l.pop()) : (l.push(r), r = null);
			return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(l, function(e) {
				a = xo[e], u += a ? a(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			}), u
		}
	}

	function xr() {
		return function(t, e) {
			return v(e) && (e = 2), H(t, e)
		}
	}

	function Tr() {
		return function(t, e) {
			if (b(t) && (t = t.toString()), !ci(t) && !$(t)) return t;
			if (e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : h(e), $(t)) return e ? e >= 0 ? t.slice(0, e) : t.slice(e, t.length) : "";
			var n, r;
			if (e > t.length ? e = t.length : e < -t.length && (e = -t.length), e > 0) n = 0, r = e;
			else {
				if (!e) return [];
				n = t.length + e, r = t.length
			}
			return t.slice(n, r)
		}
	}

	function Sr(t) {
		return function(e, n, r) {
			function o(t, e) {
				for (var r = 0; r < n.length; r++) {
					var i = n[r](t, e);
					if (0 !== i) return i
				}
				return 0
			}

			function a(t, e) {
				return e ? function(e, n) {
					return t(n, e)
				} : t
			}

			function s(t) {
				switch (typeof t) {
					case "number":
					case "boolean":
					case "string":
						return !0;
					default:
						return !1
				}
			}

			function u(t) {
				return null === t ? "null" : "function" == typeof t.valueOf && (t = t.valueOf(), s(t)) ? t : "function" == typeof t.toString && (t = t.toString(), s(t)) ? t : ""
			}

			function l(t, e) {
				var n = typeof t,
					r = typeof e;
				return n === r && "object" === n && (t = u(t), e = u(e)), n === r ? ("string" === n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : r > n ? -1 : 1
			}
			return i(e) ? (n = ci(n) ? n : [n], 0 === n.length && (n = ["+"]), n = n.map(function(e) {
				var n = !1,
					r = e || m;
				if ($(e)) {
					if (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), "" === e) return a(l, n);
					if (r = t(e), r.constant) {
						var i = r();
						return a(function(t, e) {
							return l(t[i], e[i])
						}, n)
					}
				}
				return a(function(t, e) {
					return l(r(t), r(e))
				}, n)
			}), ni.call(e).sort(a(o, r))) : e
		}
	}

	function Cr(t) {
		return x(t) && (t = {
			link: t
		}), t.restrict = t.restrict || "AC", g(t)
	}

	function kr(t, e) {
		t.$name = e
	}

	function Pr(t, e, r, i, a) {
		var s = this,
			u = [],
			l = s.$$parentForm = t.parent().controller("form") || Ao;
		s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(e.name || e.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, l.$addControl(s), s.$rollbackViewValue = function() {
			o(u, function(t) {
				t.$rollbackViewValue()
			})
		}, s.$commitViewValue = function() {
			o(u, function(t) {
				t.$commitViewValue()
			})
		}, s.$addControl = function(t) {
			ae(t.$name, "input"), u.push(t), t.$name && (s[t.$name] = t)
		}, s.$$renameControl = function(t, e) {
			var n = t.$name;
			s[n] === t && delete s[n], s[e] = t, t.$name = e
		}, s.$removeControl = function(t) {
			t.$name && s[t.$name] === t && delete s[t.$name], o(s.$pending, function(e, n) {
				s.$setValidity(n, null, t)
			}), o(s.$error, function(e, n) {
				s.$setValidity(n, null, t)
			}), N(u, t)
		}, zr({
			ctrl: this,
			$element: t,
			set: function(t, e, n) {
				var r = t[e];
				if (r) {
					var i = r.indexOf(n); - 1 === i && r.push(n)
				} else t[e] = [n]
			},
			unset: function(t, e, n) {
				var r = t[e];
				r && (N(r, n), 0 === r.length && delete t[e])
			},
			parentForm: l,
			$animate: i
		}), s.$setDirty = function() {
			i.removeClass(t, Go), i.addClass(t, Zo), s.$dirty = !0, s.$pristine = !1, l.$setDirty()
		}, s.$setPristine = function() {
			i.setClass(t, Go, Zo + " " + Eo), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(u, function(t) {
				t.$setPristine()
			})
		}, s.$setUntouched = function() {
			o(u, function(t) {
				t.$setUntouched()
			})
		}, s.$setSubmitted = function() {
			i.addClass(t, Eo), s.$submitted = !0, l.$setSubmitted()
		}
	}

	function Or(t) {
		t.$formatters.push(function(e) {
			return t.$isEmpty(e) ? e : e.toString()
		})
	}

	function Ar(t, e, n, r, i, o) {
		Er(t, e, n, r, i, o), Or(r)
	}

	function Er(t, e, n, r, i, o) {
		var a = Br(e[0].type);
		if (!i.android) {
			var s = !1;
			e.on("compositionstart", function() {
				s = !0
			}), e.on("compositionend", function() {
				s = !1, u()
			})
		}
		var u = function(t) {
			if (l && (o.defer.cancel(l), l = null), !s) {
				var i = e.val(),
					u = t && t.type;
				"password" === a || n.ngTrim && "false" === n.ngTrim || (i = fi(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
			}
		};
		if (i.hasEvent("input")) e.on("input", u);
		else {
			var l, c = function(t, e, n) {
					l || (l = o.defer(function() {
						l = null, e && e.value === n || u(t)
					}))
				};
			e.on("keydown", function(t) {
				var e = t.keyCode;
				91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || c(t, this, this.value)
			}), i.hasEvent("paste") && e.on("paste cut", c)
		}
		e.on("change", u), r.$render = function() {
			e.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
		}
	}

	function Dr(t, e) {
		if (w(t)) return t;
		if ($(t)) {
			Vo.lastIndex = 0;
			var n = Vo.exec(t);
			if (n) {
				var r = +n[1],
					i = +n[2],
					o = 0,
					a = 0,
					s = 0,
					u = 0,
					l = yr(r),
					c = 7 * (i - 1);
				return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()), new Date(r, 0, l.getDate() + c, o, a, s, u)
			}
		}
		return 0 / 0
	}

	function Mr(t, e) {
		return function(n, r) {
			var i, a;
			if (w(n)) return n;
			if ($(n)) {
				if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), No.test(n)) return new Date(n);
				if (t.lastIndex = 0, i = t.exec(n)) return i.shift(), a = r ? {
					yyyy: r.getFullYear(),
					MM: r.getMonth() + 1,
					dd: r.getDate(),
					HH: r.getHours(),
					mm: r.getMinutes(),
					ss: r.getSeconds(),
					sss: r.getMilliseconds() / 1e3
				} : {
					yyyy: 1970,
					MM: 1,
					dd: 1,
					HH: 0,
					mm: 0,
					ss: 0,
					sss: 0
				}, o(i, function(t, n) {
					n < e.length && (a[e[n]] = +t)
				}), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
			}
			return 0 / 0
		}
	}

	function jr(t, e, r, i) {
		return function(o, a, s, u, l, c, f) {
			function h(t) {
				return t && !(t.getTime && t.getTime() !== t.getTime())
			}

			function d(t) {
				return y(t) ? w(t) ? t : r(t) : n
			}
			Nr(o, a, s, u), Er(o, a, s, u, l, c);
			var p, m = u && u.$options && u.$options.timezone;
			if (u.$$parserName = t, u.$parsers.push(function(t) {
				if (u.$isEmpty(t)) return null;
				if (e.test(t)) {
					var i = r(t, p);
					return "UTC" === m && i.setMinutes(i.getMinutes() - i.getTimezoneOffset()), i
				}
				return n
			}), u.$formatters.push(function(t) {
				if (t && !w(t)) throw Uo("datefmt", "Expected `{0}` to be a date", t);
				if (h(t)) {
					if (p = t, p && "UTC" === m) {
						var e = 6e4 * p.getTimezoneOffset();
						p = new Date(p.getTime() + e)
					}
					return f("date")(t, i, m)
				}
				return p = null, ""
			}), y(s.min) || s.ngMin) {
				var g;
				u.$validators.min = function(t) {
					return !h(t) || v(g) || r(t) >= g
				}, s.$observe("min", function(t) {
					g = d(t), u.$validate()
				})
			}
			if (y(s.max) || s.ngMax) {
				var _;
				u.$validators.max = function(t) {
					return !h(t) || v(_) || r(t) <= _
				}, s.$observe("max", function(t) {
					_ = d(t), u.$validate()
				})
			}
		}
	}

	function Nr(t, e, r, i) {
		var o = e[0],
			a = i.$$hasNativeValidators = _(o.validity);
		a && i.$parsers.push(function(t) {
			var r = e.prop(Wr) || {};
			return r.badInput && !r.typeMismatch ? n : t
		})
	}

	function Rr(t, e, r, i, o, a) {
		if (Nr(t, e, r, i), Er(t, e, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function(t) {
			return i.$isEmpty(t) ? null : qo.test(t) ? parseFloat(t) : n
		}), i.$formatters.push(function(t) {
			if (!i.$isEmpty(t)) {
				if (!b(t)) throw Uo("numfmt", "Expected `{0}` to be a number", t);
				t = t.toString()
			}
			return t
		}), r.min || r.ngMin) {
			var s;
			i.$validators.min = function(t) {
				return i.$isEmpty(t) || v(s) || t >= s
			}, r.$observe("min", function(t) {
				y(t) && !b(t) && (t = parseFloat(t, 10)), s = b(t) && !isNaN(t) ? t : n, i.$validate()
			})
		}
		if (r.max || r.ngMax) {
			var u;
			i.$validators.max = function(t) {
				return i.$isEmpty(t) || v(u) || u >= t
			}, r.$observe("max", function(t) {
				y(t) && !b(t) && (t = parseFloat(t, 10)), u = b(t) && !isNaN(t) ? t : n, i.$validate()
			})
		}
	}

	function Ir(t, e, n, r, i, o) {
		Er(t, e, n, r, i, o), Or(r), r.$$parserName = "url", r.$validators.url = function(t, e) {
			var n = t || e;
			return r.$isEmpty(n) || Ro.test(n)
		}
	}

	function qr(t, e, n, r, i, o) {
		Er(t, e, n, r, i, o), Or(r), r.$$parserName = "email", r.$validators.email = function(t, e) {
			var n = t || e;
			return r.$isEmpty(n) || Io.test(n)
		}
	}

	function Fr(t, e, n, r) {
		v(n.name) && e.attr("name", l());
		var i = function(t) {
			e[0].checked && r.$setViewValue(n.value, t && t.type)
		};
		e.on("click", i), r.$render = function() {
			var t = n.value;
			e[0].checked = t == r.$viewValue
		}, n.$observe("value", r.$render)
	}

	function Lr(t, e, n, i, o) {
		var a;
		if (y(i)) {
			if (a = t(i), !a.constant) throw r("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
			return a(e)
		}
		return o
	}

	function Vr(t, e, n, r, i, o, a, s) {
		var u = Lr(s, t, "ngTrueValue", n.ngTrueValue, !0),
			l = Lr(s, t, "ngFalseValue", n.ngFalseValue, !1),
			c = function(t) {
				r.$setViewValue(e[0].checked, t && t.type)
			};
		e.on("click", c), r.$render = function() {
			e[0].checked = r.$viewValue
		}, r.$isEmpty = function(t) {
			return t === !1
		}, r.$formatters.push(function(t) {
			return q(t, u)
		}), r.$parsers.push(function(t) {
			return t ? u : l
		})
	}

	function zr(t) {
		function e(t, e, u) {
			e === n ? r("$pending", t, u) : i("$pending", t, u), A(e) ? e ? (f(s.$error, t, u), c(s.$$success, t, u)) : (c(s.$error, t, u), f(s.$$success, t, u)) : (f(s.$error, t, u), f(s.$$success, t, u)), s.$pending ? (o(ta, !0), s.$valid = s.$invalid = n, a("", null)) : (o(ta, !1), s.$valid = Hr(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
			var l;
			l = s.$pending && s.$pending[t] ? n : s.$error[t] ? !1 : s.$$success[t] ? !0 : null, a(t, l), h.$setValidity(t, l, s)
		}

		function r(t, e, n) {
			s[t] || (s[t] = {}), c(s[t], e, n)
		}

		function i(t, e, r) {
			s[t] && f(s[t], e, r), Hr(s[t]) && (s[t] = n)
		}

		function o(t, e) {
			e && !l[t] ? (d.addClass(u, t), l[t] = !0) : !e && l[t] && (d.removeClass(u, t), l[t] = !1)
		}

		function a(t, e) {
			t = t ? "-" + ne(t, "-") : "", o(Xo + t, e === !0), o(Qo + t, e === !1)
		}
		var s = t.ctrl,
			u = t.$element,
			l = {}, c = t.set,
			f = t.unset,
			h = t.parentForm,
			d = t.$animate;
		l[Qo] = !(l[Xo] = u.hasClass(Xo)), s.$setValidity = e
	}

	function Hr(t) {
		if (t)
			for (var e in t) return !1;
		return !0
	}

	function Yr(t, e) {
		return t = "ngClass" + t, ["$animate",
			function(n) {
				function r(t, e) {
					var n = [];
					t: for (var r = 0; r < t.length; r++) {
						for (var i = t[r], o = 0; o < e.length; o++)
							if (i == e[o]) continue t;
						n.push(i)
					}
					return n
				}

				function i(t) {
					if (ci(t)) return t;
					if ($(t)) return t.split(" ");
					if (_(t)) {
						var e = [];
						return o(t, function(t, n) {
							t && (e = e.concat(n.split(" ")))
						}), e
					}
					return t
				}
				return {
					restrict: "AC",
					link: function(a, s, u) {
						function l(t) {
							var e = f(t, 1);
							u.$addClass(e)
						}

						function c(t) {
							var e = f(t, -1);
							u.$removeClass(e)
						}

						function f(t, e) {
							var n = s.data("$classCounts") || {}, r = [];
							return o(t, function(t) {
								(e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
							}), s.data("$classCounts", n), r.join(" ")
						}

						function h(t, e) {
							var i = r(e, t),
								o = r(t, e);
							i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
						}

						function d(t) {
							if (e === !0 || a.$index % 2 === e) {
								var n = i(t || []);
								if (p) {
									if (!q(t, p)) {
										var r = i(p);
										h(r, n)
									}
								} else l(n)
							}
							p = I(t)
						}
						var p;
						a.$watch(u[t], d, !0), u.$observe("class", function() {
							d(a.$eval(u[t]))
						}), "ngClass" !== t && a.$watch("$index", function(n, r) {
							var o = 1 & n;
							if (o !== (1 & r)) {
								var s = i(a.$eval(u[t]));
								o === e ? l(s) : c(s)
							}
						})
					}
				}
			}
		]
	}
	var Ur = /^\/(.+)\/([a-z]*)$/,
		Wr = "validity",
		Br = function(t) {
			return $(t) ? t.toLowerCase() : t
		}, Xr = Object.prototype.hasOwnProperty,
		Qr = function(t) {
			return $(t) ? t.toUpperCase() : t
		}, Gr = function(t) {
			return $(t) ? t.replace(/[A-Z]/g, function(t) {
				return String.fromCharCode(32 | t.charCodeAt(0))
			}) : t
		}, Zr = function(t) {
			return $(t) ? t.replace(/[a-z]/g, function(t) {
				return String.fromCharCode(-33 & t.charCodeAt(0))
			}) : t
		};
	"i" !== "I".toLowerCase() && (Br = Gr, Qr = Zr);
	var Jr, Kr, ti, ei, ni = [].slice,
		ri = [].splice,
		ii = [].push,
		oi = Object.prototype.toString,
		ai = r("ng"),
		si = t.angular || (t.angular = {}),
		ui = 0;
	Jr = e.documentMode, p.$inject = [], m.$inject = [];
	var li, ci = Array.isArray,
		fi = function(t) {
			return $(t) ? t.trim() : t
		}, hi = function(t) {
			return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
		}, di = function() {
			if (y(di.isActive_)) return di.isActive_;
			var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
			if (!t) try {
				new Function("")
			} catch (n) {
				t = !0
			}
			return di.isActive_ = t
		}, pi = ["ng-", "data-ng-", "ng:", "x-ng-"],
		mi = /[A-Z]/g,
		gi = !1,
		vi = 1,
		yi = 3,
		_i = 8,
		$i = 9,
		bi = 11,
		wi = {
			full: "1.3.8",
			major: 1,
			minor: 3,
			dot: 8,
			codeName: "prophetic-narwhal"
		};
	$e.expando = "ng339";
	var xi = $e.cache = {}, Ti = 1,
		Si = function(t, e, n) {
			t.addEventListener(e, n, !1)
		}, Ci = function(t, e, n) {
			t.removeEventListener(e, n, !1)
		};
	$e._data = function(t) {
		return this.cache[t[this.expando]] || {}
	};
	var ki = /([\:\-\_]+(.))/g,
		Pi = /^moz([A-Z])/,
		Oi = {
			mouseleave: "mouseout",
			mouseenter: "mouseover"
		}, Ai = r("jqLite"),
		Ei = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		Di = /<|&#?\w+;/,
		Mi = /<([\w:]+)/,
		ji = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Ni = {
			option: [1, '<select multiple="multiple">', "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Ni.optgroup = Ni.option, Ni.tbody = Ni.tfoot = Ni.colgroup = Ni.caption = Ni.thead, Ni.th = Ni.td;
	var Ri = $e.prototype = {
		ready: function(n) {
			function r() {
				i || (i = !0, n())
			}
			var i = !1;
			"complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), $e(t).on("load", r))
		},
		toString: function() {
			var t = [];
			return o(this, function(e) {
				t.push("" + e)
			}), "[" + t.join(", ") + "]"
		},
		eq: function(t) {
			return Kr(t >= 0 ? this[t] : this[this.length + t])
		},
		length: 0,
		push: ii,
		sort: [].sort,
		splice: [].splice
	}, Ii = {};
	o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(t) {
		Ii[Br(t)] = t
	});
	var qi = {};
	o("input,select,option,textarea,button,form,details".split(","), function(t) {
		qi[t] = !0
	});
	var Fi = {
		ngMinlength: "minlength",
		ngMaxlength: "maxlength",
		ngMin: "min",
		ngMax: "max",
		ngPattern: "pattern"
	};
	o({
		data: Ce,
		removeData: Te
	}, function(t, e) {
		$e[e] = t
	}), o({
		data: Ce,
		inheritedData: De,
		scope: function(t) {
			return Kr.data(t, "$scope") || De(t.parentNode || t, ["$isolateScope", "$scope"])
		},
		isolateScope: function(t) {
			return Kr.data(t, "$isolateScope") || Kr.data(t, "$isolateScopeNoTemplate")
		},
		controller: Ee,
		injector: function(t) {
			return De(t, "$injector")
		},
		removeAttr: function(t, e) {
			t.removeAttribute(e)
		},
		hasClass: ke,
		css: function(t, e, n) {
			return e = me(e), y(n) ? void(t.style[e] = n) : t.style[e]
		},
		attr: function(t, e, r) {
			var i = Br(e);
			if (Ii[i]) {
				if (!y(r)) return t[e] || (t.attributes.getNamedItem(e) || p).specified ? i : n;
				r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i))
			} else if (y(r)) t.setAttribute(e, r);
			else if (t.getAttribute) {
				var o = t.getAttribute(e, 2);
				return null === o ? n : o
			}
		},
		prop: function(t, e, n) {
			return y(n) ? void(t[e] = n) : t[e]
		},
		text: function() {
			function t(t, e) {
				if (v(e)) {
					var n = t.nodeType;
					return n === vi || n === yi ? t.textContent : ""
				}
				t.textContent = e
			}
			return t.$dv = "", t
		}(),
		val: function(t, e) {
			if (v(e)) {
				if (t.multiple && "select" === j(t)) {
					var n = [];
					return o(t.options, function(t) {
						t.selected && n.push(t.value || t.text)
					}), 0 === n.length ? null : n
				}
				return t.value
			}
			t.value = e
		},
		html: function(t, e) {
			return v(e) ? t.innerHTML : (we(t, !0), void(t.innerHTML = e))
		},
		empty: Me
	}, function(t, e) {
		$e.prototype[e] = function(e, r) {
			var i, o, a = this.length;
			if (t !== Me && (2 == t.length && t !== ke && t !== Ee ? e : r) === n) {
				if (_(e)) {
					for (i = 0; a > i; i++)
						if (t === Ce) t(this[i], e);
						else
							for (o in e) t(this[i], o, e[o]);
					return this
				}
				for (var s = t.$dv, u = s === n ? Math.min(a, 1) : a, l = 0; u > l; l++) {
					var c = t(this[l], e, r);
					s = s ? s + c : c
				}
				return s
			}
			for (i = 0; a > i; i++) t(this[i], e, r);
			return this
		}
	}), o({
		removeData: Te,
		on: function Ya(t, e, n, r) {
			if (y(r)) throw Ai("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
			if (ve(t)) {
				var i = Se(t, !0),
					o = i.events,
					a = i.handle;
				a || (a = i.handle = qe(t, o));
				for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = s.length; u--;) {
					e = s[u];
					var l = o[e];
					l || (o[e] = [], "mouseenter" === e || "mouseleave" === e ? Ya(t, Oi[e], function(t) {
						var n = this,
							r = t.relatedTarget;
						(!r || r !== n && !n.contains(r)) && a(t, e)
					}) : "$destroy" !== e && Si(t, e, a), l = o[e]), l.push(n)
				}
			}
		},
		off: xe,
		one: function(t, e, n) {
			t = Kr(t), t.on(e, function r() {
				t.off(e, n), t.off(e, r)
			}), t.on(e, n)
		},
		replaceWith: function(t, e) {
			var n, r = t.parentNode;
			we(t), o(new $e(e), function(e) {
				n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
			})
		},
		children: function(t) {
			var e = [];
			return o(t.childNodes, function(t) {
				t.nodeType === vi && e.push(t)
			}), e
		},
		contents: function(t) {
			return t.contentDocument || t.childNodes || []
		},
		append: function(t, e) {
			var n = t.nodeType;
			if (n === vi || n === bi) {
				e = new $e(e);
				for (var r = 0, i = e.length; i > r; r++) {
					var o = e[r];
					t.appendChild(o)
				}
			}
		},
		prepend: function(t, e) {
			if (t.nodeType === vi) {
				var n = t.firstChild;
				o(new $e(e), function(e) {
					t.insertBefore(e, n)
				})
			}
		},
		wrap: function(t, e) {
			e = Kr(e).eq(0).clone()[0];
			var n = t.parentNode;
			n && n.replaceChild(e, t), e.appendChild(t)
		},
		remove: je,
		detach: function(t) {
			je(t, !0)
		},
		after: function(t, e) {
			var n = t,
				r = t.parentNode;
			e = new $e(e);
			for (var i = 0, o = e.length; o > i; i++) {
				var a = e[i];
				r.insertBefore(a, n.nextSibling), n = a
			}
		},
		addClass: Oe,
		removeClass: Pe,
		toggleClass: function(t, e, n) {
			e && o(e.split(" "), function(e) {
				var r = n;
				v(r) && (r = !ke(t, e)), (r ? Oe : Pe)(t, e)
			})
		},
		parent: function(t) {
			var e = t.parentNode;
			return e && e.nodeType !== bi ? e : null
		},
		next: function(t) {
			return t.nextElementSibling
		},
		find: function(t, e) {
			return t.getElementsByTagName ? t.getElementsByTagName(e) : []
		},
		clone: be,
		triggerHandler: function(t, e, n) {
			var r, i, a, s = e.type || e,
				u = Se(t),
				l = u && u.events,
				c = l && l[s];
			c && (r = {
				preventDefault: function() {
					this.defaultPrevented = !0
				},
				isDefaultPrevented: function() {
					return this.defaultPrevented === !0
				},
				stopImmediatePropagation: function() {
					this.immediatePropagationStopped = !0
				},
				isImmediatePropagationStopped: function() {
					return this.immediatePropagationStopped === !0
				},
				stopPropagation: p,
				type: s,
				target: t
			}, e.type && (r = f(r, e)), i = I(c), a = n ? [r].concat(n) : [r], o(i, function(e) {
				r.isImmediatePropagationStopped() || e.apply(t, a)
			}))
		}
	}, function(t, e) {
		$e.prototype[e] = function(e, n, r) {
			for (var i, o = 0, a = this.length; a > o; o++) v(i) ? (i = t(this[o], e, n, r), y(i) && (i = Kr(i))) : Ae(i, t(this[o], e, n, r));
			return y(i) ? i : this
		}, $e.prototype.bind = $e.prototype.on, $e.prototype.unbind = $e.prototype.off
	}), Ve.prototype = {
		put: function(t, e) {
			this[Le(t, this.nextUid)] = e
		},
		get: function(t) {
			return this[Le(t, this.nextUid)]
		},
		remove: function(t) {
			var e = this[t = Le(t, this.nextUid)];
			return delete this[t], e
		}
	};
	var Li = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
		Vi = /,/,
		zi = /^\s*(_?)(\S+?)\1\s*$/,
		Hi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
		Yi = r("$injector");
	Ye.$$annotate = He;
	var Ui = r("$animate"),
		Wi = ["$provide",
			function(t) {
				this.$$selectors = {}, this.register = function(e, n) {
					var r = e + "-animation";
					if (e && "." != e.charAt(0)) throw Ui("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
					this.$$selectors[e.substr(1)] = r, t.factory(r, n)
				}, this.classNameFilter = function(t) {
					return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
				}, this.$get = ["$$q", "$$asyncCallback", "$rootScope",
					function(t, e, n) {
						function r(e) {
							var r, i = t.defer();
							return i.promise.$$cancelFn = function() {
								r && r()
							}, n.$$postDigest(function() {
								r = e(function() {
									i.resolve()
								})
							}), i.promise
						}

						function i(t, e) {
							var n = [],
								r = [],
								i = le();
							return o((t.attr("class") || "").split(/\s+/), function(t) {
								i[t] = !0
							}), o(e, function(t, e) {
								var o = i[e];
								t === !1 && o ? r.push(e) : t !== !0 || o || n.push(e)
							}), n.length + r.length > 0 && [n.length ? n : null, r.length ? r : null]
						}

						function a(t, e, n) {
							for (var r = 0, i = e.length; i > r; ++r) {
								var o = e[r];
								t[o] = n
							}
						}

						function s() {
							return l || (l = t.defer(), e(function() {
								l.resolve(), l = null
							})), l.promise
						}

						function u(t, e) {
							if (si.isObject(e)) {
								var n = f(e.from || {}, e.to || {});
								t.css(n)
							}
						}
						var l;
						return {
							animate: function(t, e, n) {
								return u(t, {
									from: e,
									to: n
								}), s()
							},
							enter: function(t, e, n, r) {
								return u(t, r), n ? n.after(t) : e.prepend(t), s()
							},
							leave: function(t) {
								return t.remove(), s()
							},
							move: function(t, e, n, r) {
								return this.enter(t, e, n, r)
							},
							addClass: function(t, e, n) {
								return this.setClass(t, e, [], n)
							},
							$$addClassImmediately: function(t, e, n) {
								return t = Kr(t), e = $(e) ? e : ci(e) ? e.join(" ") : "", o(t, function(t) {
									Oe(t, e)
								}), u(t, n), s()
							},
							removeClass: function(t, e, n) {
								return this.setClass(t, [], e, n)
							},
							$$removeClassImmediately: function(t, e, n) {
								return t = Kr(t), e = $(e) ? e : ci(e) ? e.join(" ") : "", o(t, function(t) {
									Pe(t, e)
								}), u(t, n), s()
							},
							setClass: function(t, e, n, o) {
								var s = this,
									u = "$$animateClasses",
									l = !1;
								t = Kr(t);
								var c = t.data(u);
								c ? o && c.options && (c.options = si.extend(c.options || {}, o)) : (c = {
									classes: {},
									options: o
								}, l = !0);
								var f = c.classes;
								return e = ci(e) ? e : e.split(" "), n = ci(n) ? n : n.split(" "), a(f, e, !0), a(f, n, !1), l && (c.promise = r(function(e) {
									var n = t.data(u);
									if (t.removeData(u), n) {
										var r = i(t, n.classes);
										r && s.$$setClassImmediately(t, r[0], r[1], n.options)
									}
									e()
								}), t.data(u, c)), c.promise
							},
							$$setClassImmediately: function(t, e, n, r) {
								return e && this.$$addClassImmediately(t, e), n && this.$$removeClassImmediately(t, n), u(t, r), s()
							},
							enabled: p,
							cancel: p
						}
					}
				]
			}
		],
		Bi = r("$compile");
	Ze.$inject = ["$provide", "$$sanitizeUriProvider"];
	var Xi = /^((?:x|data)[\:\-_])/i,
		Qi = "application/json",
		Gi = {
			"Content-Type": Qi + ";charset=utf-8"
		}, Zi = /^\[|^\{(?!\{)/,
		Ji = {
			"[": /]$/,
			"{": /}$/
		}, Ki = /^\)\]\}',?\n/,
		to = r("$interpolate"),
		eo = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
		no = {
			http: 80,
			https: 443,
			ftp: 21
		}, ro = r("$location"),
		io = {
			$$html5: !1,
			$$replace: !1,
			absUrl: On("$$absUrl"),
			url: function(t) {
				if (v(t)) return this.$$url;
				var e = eo.exec(t);
				return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
			},
			protocol: On("$$protocol"),
			host: On("$$host"),
			port: On("$$port"),
			path: An("$$path", function(t) {
				return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
			}),
			search: function(t, e) {
				switch (arguments.length) {
					case 0:
						return this.$$search;
					case 1:
						if ($(t) || b(t)) t = t.toString(), this.$$search = B(t);
						else {
							if (!_(t)) throw ro("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
							t = R(t, {}), o(t, function(e, n) {
								null == e && delete t[n]
							}), this.$$search = t
						}
						break;
					default:
						v(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
				}
				return this.$$compose(), this
			},
			hash: An("$$hash", function(t) {
				return null !== t ? t.toString() : ""
			}),
			replace: function() {
				return this.$$replace = !0, this
			}
		};
	o([Pn, kn, Cn], function(t) {
		t.prototype = Object.create(io), t.prototype.state = function(e) {
			if (!arguments.length) return this.$$state;
			if (t !== Cn || !this.$$html5) throw ro("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
			return this.$$state = v(e) ? null : e, this
		}
	});
	var oo = r("$parse"),
		ao = Function.prototype.call,
		so = Function.prototype.apply,
		uo = Function.prototype.bind,
		lo = le();
	o({
		"null": function() {
			return null
		},
		"true": function() {
			return !0
		},
		"false": function() {
			return !1
		},
		undefined: function() {}
	}, function(t, e) {
		t.constant = t.literal = t.sharedGetter = !0, lo[e] = t
	}), lo["this"] = function(t) {
		return t
	}, lo["this"].sharedGetter = !0;
	var co = f(le(), {
		"+": function(t, e, r, i) {
			return r = r(t, e), i = i(t, e), y(r) ? y(i) ? r + i : r : y(i) ? i : n
		},
		"-": function(t, e, n, r) {
			return n = n(t, e), r = r(t, e), (y(n) ? n : 0) - (y(r) ? r : 0)
		},
		"*": function(t, e, n, r) {
			return n(t, e) * r(t, e)
		},
		"/": function(t, e, n, r) {
			return n(t, e) / r(t, e)
		},
		"%": function(t, e, n, r) {
			return n(t, e) % r(t, e)
		},
		"===": function(t, e, n, r) {
			return n(t, e) === r(t, e)
		},
		"!==": function(t, e, n, r) {
			return n(t, e) !== r(t, e)
		},
		"==": function(t, e, n, r) {
			return n(t, e) == r(t, e)
		},
		"!=": function(t, e, n, r) {
			return n(t, e) != r(t, e)
		},
		"<": function(t, e, n, r) {
			return n(t, e) < r(t, e)
		},
		">": function(t, e, n, r) {
			return n(t, e) > r(t, e)
		},
		"<=": function(t, e, n, r) {
			return n(t, e) <= r(t, e)
		},
		">=": function(t, e, n, r) {
			return n(t, e) >= r(t, e)
		},
		"&&": function(t, e, n, r) {
			return n(t, e) && r(t, e)
		},
		"||": function(t, e, n, r) {
			return n(t, e) || r(t, e)
		},
		"!": function(t, e, n) {
			return !n(t, e)
		},
		"=": !0,
		"|": !0
	}),
		fo = {
			n: "\n",
			f: "\f",
			r: "\r",
			t: "	",
			v: "",
			"'": "'",
			'"': '"'
		}, ho = function(t) {
			this.options = t
		};
	ho.prototype = {
		constructor: ho,
		lex: function(t) {
			for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
				var e = this.text.charAt(this.index);
				if ('"' === e || "'" === e) this.readString(e);
				else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber();
				else if (this.isIdent(e)) this.readIdent();
				else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
					index: this.index,
					text: e
				}), this.index++;
				else if (this.isWhitespace(e)) this.index++;
				else {
					var n = e + this.peek(),
						r = n + this.peek(2),
						i = co[e],
						o = co[n],
						a = co[r];
					if (i || o || a) {
						var s = a ? r : o ? n : e;
						this.tokens.push({
							index: this.index,
							text: s,
							operator: !0
						}), this.index += s.length
					} else this.throwError("Unexpected next character ", this.index, this.index + 1)
				}
			}
			return this.tokens
		},
		is: function(t, e) {
			return -1 !== e.indexOf(t)
		},
		peek: function(t) {
			var e = t || 1;
			return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
		},
		isNumber: function(t) {
			return t >= "0" && "9" >= t && "string" == typeof t
		},
		isWhitespace: function(t) {
			return " " === t || "\r" === t || "	" === t || "\n" === t || "" === t || " " === t
		},
		isIdent: function(t) {
			return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
		},
		isExpOperator: function(t) {
			return "-" === t || "+" === t || this.isNumber(t)
		},
		throwError: function(t, e, n) {
			n = n || this.index;
			var r = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
			throw oo("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
		},
		readNumber: function() {
			for (var t = "", e = this.index; this.index < this.text.length;) {
				var n = Br(this.text.charAt(this.index));
				if ("." == n || this.isNumber(n)) t += n;
				else {
					var r = this.peek();
					if ("e" == n && this.isExpOperator(r)) t += n;
					else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1)) t += n;
					else {
						if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1)) break;
						this.throwError("Invalid exponent")
					}
				}
				this.index++
			}
			this.tokens.push({
				index: e,
				text: t,
				constant: !0,
				value: Number(t)
			})
		},
		readIdent: function() {
			for (var t = this.index; this.index < this.text.length;) {
				var e = this.text.charAt(this.index);
				if (!this.isIdent(e) && !this.isNumber(e)) break;
				this.index++
			}
			this.tokens.push({
				index: t,
				text: this.text.slice(t, this.index),
				identifier: !0
			})
		},
		readString: function(t) {
			var e = this.index;
			this.index++;
			for (var n = "", r = t, i = !1; this.index < this.text.length;) {
				var o = this.text.charAt(this.index);
				if (r += o, i) {
					if ("u" === o) {
						var a = this.text.substring(this.index + 1, this.index + 5);
						a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
					} else {
						var s = fo[o];
						n += s || o
					}
					i = !1
				} else if ("\\" === o) i = !0;
				else {
					if (o === t) return this.index++, void this.tokens.push({
						index: e,
						text: r,
						constant: !0,
						value: n
					});
					n += o
				}
				this.index++
			}
			this.throwError("Unterminated quote", e)
		}
	};
	var po = function(t, e, n) {
		this.lexer = t, this.$filter = e, this.options = n
	};
	po.ZERO = f(function() {
		return 0
	}, {
		sharedGetter: !0,
		constant: !0
	}), po.prototype = {
		constructor: po,
		parse: function(t) {
			this.text = t, this.tokens = this.lexer.lex(t);
			var e = this.statements();
			return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !! e.literal, e.constant = !! e.constant, e
		},
		primary: function() {
			var t;
			this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.peek().identifier && this.peek().text in lo ? t = lo[this.consume().text] : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
			for (var e, n; e = this.expect("(", "[", ".");) "(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
			return t
		},
		throwError: function(t, e) {
			throw oo("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
		},
		peekToken: function() {
			if (0 === this.tokens.length) throw oo("ueoe", "Unexpected end of expression: {0}", this.text);
			return this.tokens[0]
		},
		peek: function(t, e, n, r) {
			return this.peekAhead(0, t, e, n, r)
		},
		peekAhead: function(t, e, n, r, i) {
			if (this.tokens.length > t) {
				var o = this.tokens[t],
					a = o.text;
				if (a === e || a === n || a === r || a === i || !e && !n && !r && !i) return o
			}
			return !1
		},
		expect: function(t, e, n, r) {
			var i = this.peek(t, e, n, r);
			return i ? (this.tokens.shift(), i) : !1
		},
		consume: function(t) {
			if (0 === this.tokens.length) throw oo("ueoe", "Unexpected end of expression: {0}", this.text);
			var e = this.expect(t);
			return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
		},
		unaryFn: function(t, e) {
			var n = co[t];
			return f(function(t, r) {
				return n(t, r, e)
			}, {
				constant: e.constant,
				inputs: [e]
			})
		},
		binaryFn: function(t, e, n, r) {
			var i = co[e];
			return f(function(e, r) {
				return i(e, r, t, n)
			}, {
				constant: t.constant && n.constant,
				inputs: !r && [t, n]
			})
		},
		identifier: function() {
			for (var t = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) t += this.consume().text + this.consume().text;
			return Vn(t, this.options, this.text)
		},
		constant: function() {
			var t = this.consume().value;
			return f(function() {
				return t
			}, {
				constant: !0,
				literal: !0
			})
		},
		statements: function() {
			for (var t = [];;)
				if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";")) return 1 === t.length ? t[0] : function(e, n) {
					for (var r, i = 0, o = t.length; o > i; i++) r = t[i](e, n);
					return r
				}
		},
		filterChain: function() {
			for (var t, e = this.expression(); t = this.expect("|");) e = this.filter(e);
			return e
		},
		filter: function(t) {
			var e, r, i = this.$filter(this.consume().text);
			if (this.peek(":"))
				for (e = [], r = []; this.expect(":");) e.push(this.expression());
			var o = [t].concat(e || []);
			return f(function(o, a) {
				var s = t(o, a);
				if (r) {
					r[0] = s;
					for (var u = e.length; u--;) r[u + 1] = e[u](o, a);
					return i.apply(n, r)
				}
				return i(s)
			}, {
				constant: !i.$stateful && o.every(Rn),
				inputs: !i.$stateful && o
			})
		},
		expression: function() {
			return this.assignment()
		},
		assignment: function() {
			var t, e, n = this.ternary();
			return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), f(function(e, r) {
				return n.assign(e, t(e, r), r)
			}, {
				inputs: [n, t]
			})) : n
		},
		ternary: function() {
			var t, e, n = this.logicalOR();
			if ((e = this.expect("?")) && (t = this.assignment(), this.consume(":"))) {
				var r = this.assignment();
				return f(function(e, i) {
					return n(e, i) ? t(e, i) : r(e, i)
				}, {
					constant: n.constant && t.constant && r.constant
				})
			}
			return n
		},
		logicalOR: function() {
			for (var t, e = this.logicalAND(); t = this.expect("||");) e = this.binaryFn(e, t.text, this.logicalAND(), !0);
			return e
		},
		logicalAND: function() {
			for (var t, e = this.equality(); t = this.expect("&&");) e = this.binaryFn(e, t.text, this.equality(), !0);
			return e
		},
		equality: function() {
			for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = this.binaryFn(e, t.text, this.relational());
			return e
		},
		relational: function() {
			for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = this.binaryFn(e, t.text, this.additive());
			return e
		},
		additive: function() {
			for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = this.binaryFn(e, t.text, this.multiplicative());
			return e
		},
		multiplicative: function() {
			for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = this.binaryFn(e, t.text, this.unary());
			return e
		},
		unary: function() {
			var t;
			return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(po.ZERO, t.text, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.text, this.unary()) : this.primary()
		},
		fieldAccess: function(t) {
			var e = this.identifier();
			return f(function(r, i, o) {
				var a = o || t(r, i);
				return null == a ? n : e(a)
			}, {
				assign: function(n, r, i) {
					var o = t(n, i);
					return o || t.assign(n, o = {}), e.assign(o, r)
				}
			})
		},
		objectIndex: function(t) {
			var e = this.text,
				r = this.expression();
			return this.consume("]"), f(function(i, o) {
				var a, s = t(i, o),
					u = r(i, o);
				return Mn(u, e), s ? a = jn(s[u], e) : n
			}, {
				assign: function(n, i, o) {
					var a = Mn(r(n, o), e),
						s = jn(t(n, o), e);
					return s || t.assign(n, s = {}), s[a] = i
				}
			})
		},
		functionCall: function(t, e) {
			var r = [];
			if (")" !== this.peekToken().text)
				do r.push(this.expression()); while (this.expect(","));
			this.consume(")");
			var i = this.text,
				o = r.length ? [] : null;
			return function(a, s) {
				var u = e ? e(a, s) : y(e) ? n : a,
					l = t(a, s, u) || p;
				if (o)
					for (var c = r.length; c--;) o[c] = jn(r[c](a, s), i);
				jn(u, i), Nn(l, i);
				var f = l.apply ? l.apply(u, o) : l(o[0], o[1], o[2], o[3], o[4]);
				return jn(f, i)
			}
		},
		arrayDeclaration: function() {
			var t = [];
			if ("]" !== this.peekToken().text)
				do {
					if (this.peek("]")) break;
					t.push(this.expression())
				} while (this.expect(","));
			return this.consume("]"), f(function(e, n) {
				for (var r = [], i = 0, o = t.length; o > i; i++) r.push(t[i](e, n));
				return r
			}, {
				literal: !0,
				constant: t.every(Rn),
				inputs: t
			})
		},
		object: function() {
			var t = [],
				e = [];
			if ("}" !== this.peekToken().text)
				do {
					if (this.peek("}")) break;
					var n = this.consume();
					n.constant ? t.push(n.value) : n.identifier ? t.push(n.text) : this.throwError("invalid key", n), this.consume(":"), e.push(this.expression())
				} while (this.expect(","));
			return this.consume("}"), f(function(n, r) {
				for (var i = {}, o = 0, a = e.length; a > o; o++) i[t[o]] = e[o](n, r);
				return i
			}, {
				literal: !0,
				constant: e.every(Rn),
				inputs: e
			})
		}
	};
	var mo = le(),
		go = le(),
		vo = Object.prototype.valueOf,
		yo = r("$sce"),
		_o = {
			HTML: "html",
			CSS: "css",
			URL: "url",
			RESOURCE_URL: "resourceUrl",
			JS: "js"
		}, Bi = r("$compile"),
		$o = e.createElement("a"),
		bo = ir(t.location.href);
	sr.$inject = ["$provide"], fr.$inject = ["$locale"], hr.$inject = ["$locale"];
	var wo = ".",
		xo = {
			yyyy: mr("FullYear", 4),
			yy: mr("FullYear", 2, 0, !0),
			y: mr("FullYear", 1),
			MMMM: gr("Month"),
			MMM: gr("Month", !0),
			MM: mr("Month", 2, 1),
			M: mr("Month", 1, 1),
			dd: mr("Date", 2),
			d: mr("Date", 1),
			HH: mr("Hours", 2),
			H: mr("Hours", 1),
			hh: mr("Hours", 2, -12),
			h: mr("Hours", 1, -12),
			mm: mr("Minutes", 2),
			m: mr("Minutes", 1),
			ss: mr("Seconds", 2),
			s: mr("Seconds", 1),
			sss: mr("Milliseconds", 3),
			EEEE: gr("Day"),
			EEE: gr("Day", !0),
			a: br,
			Z: vr,
			ww: $r(2),
			w: $r(1)
		}, To = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
		So = /^\-?\d+$/;
	wr.$inject = ["$locale"];
	var Co = g(Br),
		ko = g(Qr);
	Sr.$inject = ["$parse"];
	var Po = g({
		restrict: "E",
		compile: function(t, e) {
			return e.href || e.xlinkHref || e.name ? void 0 : function(t, e) {
				var n = "[object SVGAnimatedString]" === oi.call(e.prop("href")) ? "xlink:href" : "href";
				e.on("click", function(t) {
					e.attr(n) || t.preventDefault()
				})
			}
		}
	}),
		Oo = {};
	o(Ii, function(t, e) {
		if ("multiple" != t) {
			var n = Je("ng-" + e);
			Oo[n] = function() {
				return {
					restrict: "A",
					priority: 100,
					link: function(t, r, i) {
						t.$watch(i[n], function(t) {
							i.$set(e, !! t)
						})
					}
				}
			}
		}
	}), o(Fi, function(t, e) {
		Oo[e] = function() {
			return {
				priority: 100,
				link: function(t, n, r) {
					if ("ngPattern" === e && "/" == r.ngPattern.charAt(0)) {
						var i = r.ngPattern.match(Ur);
						if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
					}
					t.$watch(r[e], function(t) {
						r.$set(e, t)
					})
				}
			}
		}
	}), o(["src", "srcset", "href"], function(t) {
		var e = Je("ng-" + t);
		Oo[e] = function() {
			return {
				priority: 99,
				link: function(n, r, i) {
					var o = t,
						a = t;
					"href" === t && "[object SVGAnimatedString]" === oi.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(e, function(e) {
						return e ? (i.$set(a, e), void(Jr && o && r.prop(o, i[a]))) : void("href" === t && i.$set(a, null))
					})
				}
			}
		}
	});
	var Ao = {
		$addControl: p,
		$$renameControl: kr,
		$removeControl: p,
		$setValidity: p,
		$setDirty: p,
		$setPristine: p,
		$setSubmitted: p
	}, Eo = "ng-submitted";
	Pr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
	var Do = function(t) {
		return ["$timeout", function(e) {
			var r = {
				name: "form",
				restrict: t ? "EAC" : "E",
				controller: Pr,
				compile: function(t) {
					return t.addClass(Go).addClass(Xo), {
						pre: function(t, r, i, o) {
							if (!("action" in i)) {
								var a = function(e) {
									t.$apply(function() {
										o.$commitViewValue(), o.$setSubmitted()
									}), e.preventDefault()
								};
								Si(r[0], "submit", a), r.on("$destroy", function() {
									e(function() {
										Ci(r[0], "submit", a)
									}, 0, !1)
								})
							}
							var s = o.$$parentForm,
								u = o.$name;
							u && (In(t, u, o, u), i.$observe(i.name ? "name" : "ngForm", function(e) {
								u !== e && (In(t, u, n, u), u = e, In(t, u, o, u), s.$$renameControl(o, u))
							})), r.on("$destroy", function() {
								s.$removeControl(o), u && In(t, u, n, u), f(o, Ao)
							})
						}
					}
				}
			};
			return r
		}]
	}, Mo = Do(),
		jo = Do(!0),
		No = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
		Ro = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
		Io = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
		qo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
		Fo = /^(\d{4})-(\d{2})-(\d{2})$/,
		Lo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
		Vo = /^(\d{4})-W(\d\d)$/,
		zo = /^(\d{4})-(\d\d)$/,
		Ho = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
		Yo = /(\s+|^)default(\s+|$)/,
		Uo = new r("ngModel"),
		Wo = {
			text: Ar,
			date: jr("date", Fo, Mr(Fo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
			"datetime-local": jr("datetimelocal", Lo, Mr(Lo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
			time: jr("time", Ho, Mr(Ho, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
			week: jr("week", Vo, Dr, "yyyy-Www"),
			month: jr("month", zo, Mr(zo, ["yyyy", "MM"]), "yyyy-MM"),
			number: Rr,
			url: Ir,
			email: qr,
			radio: Fr,
			checkbox: Vr,
			hidden: p,
			button: p,
			submit: p,
			reset: p,
			file: p
		}, Bo = ["$browser", "$sniffer", "$filter", "$parse",
			function(t, e, n, r) {
				return {
					restrict: "E",
					require: ["?ngModel"],
					link: {
						pre: function(i, o, a, s) {
							s[0] && (Wo[Br(a.type)] || Wo.text)(i, o, a, s[0], e, t, n, r)
						}
					}
				}
			}
		],
		Xo = "ng-valid",
		Qo = "ng-invalid",
		Go = "ng-pristine",
		Zo = "ng-dirty",
		Jo = "ng-untouched",
		Ko = "ng-touched",
		ta = "ng-pending",
		ea = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate",
			function(t, e, r, i, a, s, u, l, c, f) {
				this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(t);
				var h = a(r.ngModel),
					d = h.assign,
					m = h,
					g = d,
					_ = null,
					$ = this;
				this.$$setOptions = function(t) {
					if ($.$options = t, t && t.getterSetter) {
						var e = a(r.ngModel + "()"),
							n = a(r.ngModel + "($$$p)");
						m = function(t) {
							var n = h(t);
							return x(n) && (n = e(t)), n
						}, g = function(t) {
							x(h(t)) ? n(t, {
								$$$p: $.$modelValue
							}) : d(t, $.$modelValue)
						}
					} else if (!h.assign) throw Uo("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, U(i))
				}, this.$render = p, this.$isEmpty = function(t) {
					return v(t) || "" === t || null === t || t !== t
				};
				var w = i.inheritedData("$formController") || Ao,
					T = 0;
				zr({
					ctrl: this,
					$element: i,
					set: function(t, e) {
						t[e] = !0
					},
					unset: function(t, e) {
						delete t[e]
					},
					parentForm: w,
					$animate: s
				}), this.$setPristine = function() {
					$.$dirty = !1, $.$pristine = !0, s.removeClass(i, Zo), s.addClass(i, Go)
				}, this.$setDirty = function() {
					$.$dirty = !0, $.$pristine = !1, s.removeClass(i, Go), s.addClass(i, Zo), w.$setDirty()
				}, this.$setUntouched = function() {
					$.$touched = !1, $.$untouched = !0, s.setClass(i, Jo, Ko)
				}, this.$setTouched = function() {
					$.$touched = !0, $.$untouched = !1, s.setClass(i, Ko, Jo)
				}, this.$rollbackViewValue = function() {
					u.cancel(_), $.$viewValue = $.$$lastCommittedViewValue, $.$render()
				}, this.$validate = function() {
					if (!b($.$modelValue) || !isNaN($.$modelValue)) {
						var t = $.$$lastCommittedViewValue,
							e = $.$$rawModelValue,
							r = $.$$parserName || "parse",
							i = $.$error[r] ? !1 : n,
							o = $.$valid,
							a = $.$modelValue,
							s = $.$options && $.$options.allowInvalid;
						$.$$runValidators(i, e, t, function(t) {
							s || o === t || ($.$modelValue = t ? e : n, $.$modelValue !== a && $.$$writeModelToScope())
						})
					}
				}, this.$$runValidators = function(t, e, r, i) {
					function a(t) {
						var e = $.$$parserName || "parse";
						if (t === n) l(e, null);
						else if (l(e, t), !t) return o($.$validators, function(t, e) {
							l(e, null)
						}), o($.$asyncValidators, function(t, e) {
							l(e, null)
						}), !1;
						return !0
					}

					function s() {
						var t = !0;
						return o($.$validators, function(n, i) {
							var o = n(e, r);
							t = t && o, l(i, o)
						}), t ? !0 : (o($.$asyncValidators, function(t, e) {
							l(e, null)
						}), !1)
					}

					function u() {
						var t = [],
							i = !0;
						o($.$asyncValidators, function(o, a) {
							var s = o(e, r);
							if (!E(s)) throw Uo("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
							l(a, n), t.push(s.then(function() {
								l(a, !0)
							}, function() {
								i = !1, l(a, !1)
							}))
						}), t.length ? c.all(t).then(function() {
							f(i)
						}, p) : f(!0)
					}

					function l(t, e) {
						h === T && $.$setValidity(t, e)
					}

					function f(t) {
						h === T && i(t)
					}
					T++;
					var h = T;
					return a(t) && s() ? void u() : void f(!1)
				}, this.$commitViewValue = function() {
					var t = $.$viewValue;
					u.cancel(_), ($.$$lastCommittedViewValue !== t || "" === t && $.$$hasNativeValidators) && ($.$$lastCommittedViewValue = t, $.$pristine && this.$setDirty(), this.$$parseAndValidate())
				}, this.$$parseAndValidate = function() {
					function e() {
						$.$modelValue !== s && $.$$writeModelToScope()
					}
					var r = $.$$lastCommittedViewValue,
						i = r,
						o = v(i) ? n : !0;
					if (o)
						for (var a = 0; a < $.$parsers.length; a++)
							if (i = $.$parsers[a](i), v(i)) {
								o = !1;
								break
							}
					b($.$modelValue) && isNaN($.$modelValue) && ($.$modelValue = m(t));
					var s = $.$modelValue,
						u = $.$options && $.$options.allowInvalid;
					$.$$rawModelValue = i, u && ($.$modelValue = i, e()), $.$$runValidators(o, i, $.$$lastCommittedViewValue, function(t) {
						u || ($.$modelValue = t ? i : n, e())
					})
				}, this.$$writeModelToScope = function() {
					g(t, $.$modelValue), o($.$viewChangeListeners, function(t) {
						try {
							t()
						} catch (n) {
							e(n)
						}
					})
				}, this.$setViewValue = function(t, e) {
					$.$viewValue = t, (!$.$options || $.$options.updateOnDefault) && $.$$debounceViewValueCommit(e)
				}, this.$$debounceViewValueCommit = function(e) {
					var n, r = 0,
						i = $.$options;
					i && y(i.debounce) && (n = i.debounce, b(n) ? r = n : b(n[e]) ? r = n[e] : b(n["default"]) && (r = n["default"])), u.cancel(_), r ? _ = u(function() {
						$.$commitViewValue()
					}, r) : l.$$phase ? $.$commitViewValue() : t.$apply(function() {
						$.$commitViewValue()
					})
				}, t.$watch(function() {
					var e = m(t);
					if (e !== $.$modelValue) {
						$.$modelValue = $.$$rawModelValue = e;
						for (var r = $.$formatters, i = r.length, o = e; i--;) o = r[i](o);
						$.$viewValue !== o && ($.$viewValue = $.$$lastCommittedViewValue = o, $.$render(), $.$$runValidators(n, e, o, p))
					}
					return e
				})
			}
		],
		na = ["$rootScope",
			function(t) {
				return {
					restrict: "A",
					require: ["ngModel", "^?form", "^?ngModelOptions"],
					controller: ea,
					priority: 1,
					compile: function(e) {
						return e.addClass(Go).addClass(Jo).addClass(Xo), {
							pre: function(t, e, n, r) {
								var i = r[0],
									o = r[1] || Ao;
								i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function(t) {
									i.$name !== t && o.$$renameControl(i, t)
								}), t.$on("$destroy", function() {
									o.$removeControl(i)
								})
							},
							post: function(e, n, r, i) {
								var o = i[0];
								o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(t) {
									o.$$debounceViewValueCommit(t && t.type)
								}), n.on("blur", function() {
									o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
								})
							}
						}
					}
				}
			}
		],
		ra = g({
			restrict: "A",
			require: "ngModel",
			link: function(t, e, n, r) {
				r.$viewChangeListeners.push(function() {
					t.$eval(n.ngChange)
				})
			}
		}),
		ia = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(t, e, n, r) {
					r && (n.required = !0, r.$validators.required = function(t, e) {
						return !n.required || !r.$isEmpty(e)
					}, n.$observe("required", function() {
						r.$validate()
					}))
				}
			}
		}, oa = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(t, e, i, o) {
					if (o) {
						var a, s = i.ngPattern || i.pattern;
						i.$observe("pattern", function(t) {
							if ($(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, t, U(e));
							a = t || n, o.$validate()
						}), o.$validators.pattern = function(t) {
							return o.$isEmpty(t) || v(a) || a.test(t)
						}
					}
				}
			}
		}, aa = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(t, e, n, r) {
					if (r) {
						var i = -1;
						n.$observe("maxlength", function(t) {
							var e = h(t);
							i = isNaN(e) ? -1 : e, r.$validate()
						}), r.$validators.maxlength = function(t, e) {
							return 0 > i || r.$isEmpty(t) || e.length <= i
						}
					}
				}
			}
		}, sa = function() {
			return {
				restrict: "A",
				require: "?ngModel",
				link: function(t, e, n, r) {
					if (r) {
						var i = 0;
						n.$observe("minlength", function(t) {
							i = h(t) || 0, r.$validate()
						}), r.$validators.minlength = function(t, e) {
							return r.$isEmpty(e) || e.length >= i
						}
					}
				}
			}
		}, ua = function() {
			return {
				restrict: "A",
				priority: 100,
				require: "ngModel",
				link: function(t, e, r, i) {
					var a = e.attr(r.$attr.ngList) || ", ",
						s = "false" !== r.ngTrim,
						u = s ? fi(a) : a,
						l = function(t) {
							if (!v(t)) {
								var e = [];
								return t && o(t.split(u), function(t) {
									t && e.push(s ? fi(t) : t)
								}), e
							}
						};
					i.$parsers.push(l), i.$formatters.push(function(t) {
						return ci(t) ? t.join(a) : n
					}), i.$isEmpty = function(t) {
						return !t || !t.length
					}
				}
			}
		}, la = /^(true|false|\d+)$/,
		ca = function() {
			return {
				restrict: "A",
				priority: 100,
				compile: function(t, e) {
					return la.test(e.ngValue) ? function(t, e, n) {
						n.$set("value", t.$eval(n.ngValue))
					} : function(t, e, n) {
						t.$watch(n.ngValue, function(t) {
							n.$set("value", t)
						})
					}
				}
			}
		}, fa = function() {
			return {
				restrict: "A",
				controller: ["$scope", "$attrs",
					function(t, e) {
						var r = this;
						this.$options = t.$eval(e.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = fi(this.$options.updateOn.replace(Yo, function() {
							return r.$options.updateOnDefault = !0, " "
						}))) : this.$options.updateOnDefault = !0
					}
				]
			}
		}, ha = ["$compile",
			function(t) {
				return {
					restrict: "AC",
					compile: function(e) {
						return t.$$addBindingClass(e),
						function(e, r, i) {
							t.$$addBindingInfo(r, i.ngBind), r = r[0], e.$watch(i.ngBind, function(t) {
								r.textContent = t === n ? "" : t
							})
						}
					}
				}
			}
		],
		da = ["$interpolate", "$compile",
			function(t, e) {
				return {
					compile: function(r) {
						return e.$$addBindingClass(r),
						function(r, i, o) {
							var a = t(i.attr(o.$attr.ngBindTemplate));
							e.$$addBindingInfo(i, a.expressions), i = i[0], o.$observe("ngBindTemplate", function(t) {
								i.textContent = t === n ? "" : t
							})
						}
					}
				}
			}
		],
		pa = ["$sce", "$parse", "$compile",
			function(t, e, n) {
				return {
					restrict: "A",
					compile: function(r, i) {
						var o = e(i.ngBindHtml),
							a = e(i.ngBindHtml, function(t) {
								return (t || "").toString()
							});
						return n.$$addBindingClass(r),
						function(e, r, i) {
							n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function() {
								r.html(t.getTrustedHtml(o(e)) || "")
							})
						}
					}
				}
			}
		],
		ma = Yr("", !0),
		ga = Yr("Odd", 0),
		va = Yr("Even", 1),
		ya = Cr({
			compile: function(t, e) {
				e.$set("ngCloak", n), t.removeClass("ng-cloak")
			}
		}),
		_a = [
			function() {
				return {
					restrict: "A",
					scope: !0,
					controller: "@",
					priority: 500
				}
			}
		],
		$a = {}, ba = {
			blur: !0,
			focus: !0
		};
	o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
		var e = Je("ng-" + t);
		$a[e] = ["$parse", "$rootScope",
			function(n, r) {
				return {
					restrict: "A",
					compile: function(i, o) {
						var a = n(o[e], null, !0);
						return function(e, n) {
							n.on(t, function(n) {
								var i = function() {
									a(e, {
										$event: n
									})
								};
								ba[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
							})
						}
					}
				}
			}
		]
	});
	var wa = ["$animate",
		function(t) {
			return {
				multiElement: !0,
				transclude: "element",
				priority: 600,
				terminal: !0,
				restrict: "A",
				$$tlb: !0,
				link: function(n, r, i, o, a) {
					var s, u, l;
					n.$watch(i.ngIf, function(n) {
						n ? u || a(function(n, o) {
							u = o, n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), s = {
								clone: n
							}, t.enter(n, r.parent(), r)
						}) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), s && (l = ue(s.clone), t.leave(l).then(function() {
							l = null
						}), s = null))
					})
				}
			}
		}
	],
		xa = ["$templateRequest", "$anchorScroll", "$animate", "$sce",
			function(t, e, n, r) {
				return {
					restrict: "ECA",
					priority: 400,
					terminal: !0,
					transclude: "element",
					controller: si.noop,
					compile: function(i, o) {
						var a = o.ngInclude || o.src,
							s = o.onload || "",
							u = o.autoscroll;
						return function(i, o, l, c, f) {
							var h, d, p, m = 0,
								g = function() {
									d && (d.remove(), d = null), h && (h.$destroy(), h = null), p && (n.leave(p).then(function() {
										d = null
									}), d = p, p = null)
								};
							i.$watch(r.parseAsResourceUrl(a), function(r) {
								var a = function() {
									!y(u) || u && !i.$eval(u) || e()
								}, l = ++m;
								r ? (t(r, !0).then(function(t) {
									if (l === m) {
										var e = i.$new();
										c.template = t;
										var u = f(e, function(t) {
											g(), n.enter(t, null, o).then(a)
										});
										h = e, p = u, h.$emit("$includeContentLoaded", r), i.$eval(s)
									}
								}, function() {
									l === m && (g(), i.$emit("$includeContentError", r))
								}), i.$emit("$includeContentRequested", r)) : (g(), c.template = null)
							})
						}
					}
				}
			}
		],
		Ta = ["$compile",
			function(t) {
				return {
					restrict: "ECA",
					priority: -400,
					require: "ngInclude",
					link: function(n, r, i, o) {
						return /SVG/.test(r[0].toString()) ? (r.empty(), void t(ye(o.template, e).childNodes)(n, function(t) {
							r.append(t)
						}, {
							futureParentElement: r
						})) : (r.html(o.template), void t(r.contents())(n))
					}
				}
			}
		],
		Sa = Cr({
			priority: 450,
			compile: function() {
				return {
					pre: function(t, e, n) {
						t.$eval(n.ngInit)
					}
				}
			}
		}),
		Ca = Cr({
			terminal: !0,
			priority: 1e3
		}),
		ka = ["$locale", "$interpolate",
			function(t, e) {
				var n = /{}/g,
					r = /^when(Minus)?(.+)$/;
				return {
					restrict: "EA",
					link: function(i, a, s) {
						function u(t) {
							a.text(t || "")
						}
						var l, c = s.count,
							f = s.$attr.when && a.attr(s.$attr.when),
							h = s.offset || 0,
							d = i.$eval(f) || {}, p = {}, m = e.startSymbol(),
							g = e.endSymbol(),
							v = m + c + "-" + h + g,
							y = si.noop;
						o(s, function(t, e) {
							var n = r.exec(e);
							if (n) {
								var i = (n[1] ? "-" : "") + Br(n[2]);
								d[i] = a.attr(s.$attr[e])
							}
						}), o(d, function(t, r) {
							p[r] = e(t.replace(n, v))
						}), i.$watch(c, function(e) {
							var n = parseFloat(e),
								r = isNaN(n);
							r || n in d || (n = t.pluralCat(n - h)), n === l || r && isNaN(l) || (y(), y = i.$watch(p[n], u), l = n)
						})
					}
				}
			}
		],
		Pa = ["$parse", "$animate",
			function(t, a) {
				var s = "$$NG_REMOVED",
					u = r("ngRepeat"),
					l = function(t, e, n, r, i, o, a) {
						t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
					}, c = function(t) {
						return t.clone[0]
					}, f = function(t) {
						return t.clone[t.clone.length - 1]
					};
				return {
					restrict: "A",
					multiElement: !0,
					transclude: "element",
					priority: 1e3,
					terminal: !0,
					$$tlb: !0,
					compile: function(r, h) {
						var d = h.ngRepeat,
							p = e.createComment(" end ngRepeat: " + d + " "),
							m = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
						if (!m) throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", d);
						var g = m[1],
							v = m[2],
							y = m[3],
							_ = m[4];
						if (m = g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !m) throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", g);
						var $ = m[3] || m[1],
							b = m[2];
						if (y && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(y))) throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", y);
						var w, x, T, S, C = {
								$id: Le
							};
						return _ ? w = t(_) : (T = function(t, e) {
							return Le(e)
						}, S = function(t) {
							return t
						}),
						function(t, e, r, h, m) {
							w && (x = function(e, n, r) {
								return b && (C[b] = e), C[$] = n, C.$index = r, w(t, C)
							});
							var g = le();
							t.$watchCollection(v, function(r) {
								var h, v, _, w, C, k, P, O, A, E, D, M, j = e[0],
									N = le();
								if (y && (t[y] = r), i(r)) A = r, O = x || T;
								else {
									O = x || S, A = [];
									for (var R in r) r.hasOwnProperty(R) && "$" != R.charAt(0) && A.push(R);
									A.sort()
								}
								for (w = A.length, D = new Array(w), h = 0; w > h; h++)
									if (C = r === A ? h : A[h], k = r[C], P = O(C, k, h), g[P]) E = g[P], delete g[P], N[P] = E, D[h] = E;
									else {
										if (N[P]) throw o(D, function(t) {
											t && t.scope && (g[t.id] = t)
										}), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", d, P, k);
										D[h] = {
											id: P,
											scope: n,
											clone: n
										}, N[P] = !0
									}
								for (var I in g) {
									if (E = g[I], M = ue(E.clone), a.leave(M), M[0].parentNode)
										for (h = 0, v = M.length; v > h; h++) M[h][s] = !0;
									E.scope.$destroy()
								}
								for (h = 0; w > h; h++)
									if (C = r === A ? h : A[h], k = r[C], E = D[h], E.scope) {
										_ = j;
										do _ = _.nextSibling; while (_ && _[s]);
										c(E) != _ && a.move(ue(E.clone), null, Kr(j)), j = f(E), l(E.scope, h, $, k, b, C, w)
									} else m(function(t, e) {
										E.scope = e;
										var n = p.cloneNode(!1);
										t[t.length++] = n, a.enter(t, null, Kr(j)), j = n, E.clone = t, N[E.id] = E, l(E.scope, h, $, k, b, C, w)
									});
								g = N
							})
						}
					}
				}
			}
		],
		Oa = "ng-hide",
		Aa = "ng-hide-animate",
		Ea = ["$animate",
			function(t) {
				return {
					restrict: "A",
					multiElement: !0,
					link: function(e, n, r) {
						e.$watch(r.ngShow, function(e) {
							t[e ? "removeClass" : "addClass"](n, Oa, {
								tempClasses: Aa
							})
						})
					}
				}
			}
		],
		Da = ["$animate",
			function(t) {
				return {
					restrict: "A",
					multiElement: !0,
					link: function(e, n, r) {
						e.$watch(r.ngHide, function(e) {
							t[e ? "addClass" : "removeClass"](n, Oa, {
								tempClasses: Aa
							})
						})
					}
				}
			}
		],
		Ma = Cr(function(t, e, n) {
			t.$watch(n.ngStyle, function(t, n) {
				n && t !== n && o(n, function(t, n) {
					e.css(n, "")
				}), t && e.css(t)
			}, !0)
		}),
		ja = ["$animate",
			function(t) {
				return {
					restrict: "EA",
					require: "ngSwitch",
					controller: ["$scope",
						function() {
							this.cases = {}
						}
					],
					link: function(n, r, i, a) {
						var s = i.ngSwitch || i.on,
							u = [],
							l = [],
							c = [],
							f = [],
							h = function(t, e) {
								return function() {
									t.splice(e, 1)
								}
							};
						n.$watch(s, function(n) {
							var r, i;
							for (r = 0, i = c.length; i > r; ++r) t.cancel(c[r]);
							for (c.length = 0, r = 0, i = f.length; i > r; ++r) {
								var s = ue(l[r].clone);
								f[r].$destroy();
								var d = c[r] = t.leave(s);
								d.then(h(c, r))
							}
							l.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function(n) {
								n.transclude(function(r, i) {
									f.push(i);
									var o = n.element;
									r[r.length++] = e.createComment(" end ngSwitchWhen: ");
									var a = {
										clone: r
									};
									l.push(a), t.enter(r, o.parent(), o)
								})
							})
						})
					}
				}
			}
		],
		Na = Cr({
			transclude: "element",
			priority: 1200,
			require: "^ngSwitch",
			multiElement: !0,
			link: function(t, e, n, r, i) {
				r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
					transclude: i,
					element: e
				})
			}
		}),
		Ra = Cr({
			transclude: "element",
			priority: 1200,
			require: "^ngSwitch",
			multiElement: !0,
			link: function(t, e, n, r, i) {
				r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
					transclude: i,
					element: e
				})
			}
		}),
		Ia = Cr({
			restrict: "EAC",
			link: function(t, e, n, i, o) {
				if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", U(e));
				o(function(t) {
					e.empty(), e.append(t)
				})
			}
		}),
		qa = ["$templateCache",
			function(t) {
				return {
					restrict: "E",
					terminal: !0,
					compile: function(e, n) {
						if ("text/ng-template" == n.type) {
							var r = n.id,
								i = e[0].text;
							t.put(r, i)
						}
					}
				}
			}
		],
		Fa = r("ngOptions"),
		La = g({
			restrict: "A",
			terminal: !0
		}),
		Va = ["$compile", "$parse",
			function(t, r) {
				var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
					s = {
						$setViewValue: p
					};
				return {
					restrict: "E",
					require: ["select", "?ngModel"],
					controller: ["$element", "$scope", "$attrs",
						function(t, e, n) {
							var r, i, o = this,
								a = {}, u = s;
							o.databound = n.ngModel, o.init = function(t, e, n) {
								u = t, r = e, i = n
							}, o.addOption = function(e, n) {
								ae(e, '"option value"'), a[e] = !0, u.$viewValue == e && (t.val(e), i.parent() && i.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0)
							}, o.removeOption = function(t) {
								this.hasOption(t) && (delete a[t], u.$viewValue === t && this.renderUnknownOption(t))
							}, o.renderUnknownOption = function(e) {
								var n = "? " + Le(e) + " ?";
								i.val(n), t.prepend(i), t.val(n), i.prop("selected", !0)
							}, o.hasOption = function(t) {
								return a.hasOwnProperty(t)
							}, e.$on("$destroy", function() {
								o.renderUnknownOption = p
							})
						}
					],
					link: function(s, u, l, c) {
						function f(t, e, n, r) {
							n.$render = function() {
								var t = n.$viewValue;
								r.hasOption(t) ? (S.parent() && S.remove(), e.val(t), "" === t && p.prop("selected", !0)) : v(t) && p ? e.val("") : r.renderUnknownOption(t)
							}, e.on("change", function() {
								t.$apply(function() {
									S.parent() && S.remove(), n.$setViewValue(e.val())
								})
							})
						}

						function h(t, e, n) {
							var r;
							n.$render = function() {
								var t = new Ve(n.$viewValue);
								o(e.find("option"), function(e) {
									e.selected = y(t.get(e.value))
								})
							}, t.$watch(function() {
								q(r, n.$viewValue) || (r = I(n.$viewValue), n.$render())
							}), e.on("change", function() {
								t.$apply(function() {
									var t = [];
									o(e.find("option"), function(e) {
										e.selected && t.push(e.value)
									}), n.$setViewValue(t)
								})
							})
						}

						function d(e, s, u) {
							function l(t, n, r) {
								return q[k] = r, A && (q[A] = n), t(e, q)
							}

							function c() {
								e.$apply(function() {
									var t, n = M(e) || [];
									if (_) t = [], o(s.val(), function(e) {
										e = N ? R[e] : e, t.push(f(e, n[e]))
									});
									else {
										var r = N ? R[s.val()] : s.val();
										t = f(r, n[r])
									}
									u.$setViewValue(t), v()
								})
							}

							function f(t, e) {
								if ("?" === t) return n;
								if ("" === t) return null;
								var r = O ? O : D;
								return l(r, t, e)
							}

							function h() {
								var t, n = M(e);
								if (n && ci(n)) {
									t = new Array(n.length);
									for (var r = 0, i = n.length; i > r; r++) t[r] = l(C, r, n[r]);
									return t
								}
								if (n) {
									t = {};
									for (var o in n) n.hasOwnProperty(o) && (t[o] = l(C, o, n[o]))
								}
								return t
							}

							function d(t) {
								var e;
								if (_)
									if (N && ci(t)) {
										e = new Ve([]);
										for (var n = 0; n < t.length; n++) e.put(l(N, null, t[n]), !0)
									} else e = new Ve(t);
									else N && (t = l(N, null, t));
								return function(n, r) {
									var i;
									return i = N ? N : O ? O : D, _ ? y(e.remove(l(i, n, r))) : t === l(i, n, r)
								}
							}

							function p() {
								w || (e.$$postDigest(v), w = !0)
							}

							function g(t, e, n) {
								t[e] = t[e] || 0, t[e] += n ? 1 : -1
							}

							function v() {
								w = !1;
								var t, n, r, i, c, f, h, p, v, $, S, k, P, O, D, j, F, L = {
										"": []
									}, V = [""],
									z = u.$viewValue,
									H = M(e) || [],
									Y = A ? a(H) : H,
									U = {}, W = d(z),
									B = !1;
								for (R = {}, k = 0; $ = Y.length, $ > k; k++) h = k, A && (h = Y[k], "$" === h.charAt(0)) || (p = H[h], t = l(E, h, p) || "", (n = L[t]) || (n = L[t] = [], V.push(t)), P = W(h, p), B = B || P, j = l(C, h, p), j = y(j) ? j : "", F = N ? N(e, q) : A ? Y[k] : k, N && (R[F] = h), n.push({
									id: F,
									label: j,
									selected: P
								}));
								for (_ || (b || null === z ? L[""].unshift({
									id: "",
									label: "",
									selected: !B
								}) : B || L[""].unshift({
									id: "?",
									label: "",
									selected: !0
								})), S = 0, v = V.length; v > S; S++) {
									for (t = V[S], n = L[t], I.length <= S ? (i = {
										element: T.clone().attr("label", t),
										label: n.label
									}, c = [i], I.push(c), s.append(i.element)) : (c = I[S], i = c[0], i.label != t && i.element.attr("label", i.label = t)), O = null, k = 0, $ = n.length; $ > k; k++) r = n[k], (f = c[k + 1]) ? (O = f.element, f.label !== r.label && (g(U, f.label, !1), g(U, r.label, !0), O.text(f.label = r.label), O.prop("label", f.label)), f.id !== r.id && O.val(f.id = r.id), O[0].selected !== r.selected && (O.prop("selected", f.selected = r.selected), Jr && O.prop("selected", f.selected))) : ("" === r.id && b ? D = b : (D = x.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), c.push(f = {
										element: D,
										label: r.label,
										id: r.id,
										selected: r.selected
									}), g(U, r.label, !0), O ? O.after(D) : i.element.append(D), O = D);
									for (k++; c.length > k;) r = c.pop(), g(U, r.label, !1), r.element.remove()
								}
								for (; I.length > S;) {
									for (n = I.pop(), k = 1; k < n.length; ++k) g(U, n[k].label, !1);
									n[0].element.remove()
								}
								o(U, function(t, e) {
									t > 0 ? m.addOption(e) : 0 > t && m.removeOption(e)
								})
							}
							var S;
							if (!(S = $.match(i))) throw Fa("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", $, U(s));
							var C = r(S[2] || S[1]),
								k = S[4] || S[6],
								P = / as /.test(S[0]) && S[1],
								O = P ? r(P) : null,
								A = S[5],
								E = r(S[3] || ""),
								D = r(S[2] ? S[1] : k),
								M = r(S[7]),
								j = S[8],
								N = j ? r(S[8]) : null,
								R = {}, I = [
									[{
										element: s,
										label: ""
									}]
								],
								q = {};
							b && (t(b)(e), b.removeClass("ng-scope"), b.remove()), s.empty(), s.on("change", c), u.$render = v, e.$watchCollection(M, p), e.$watchCollection(h, p), _ && e.$watchCollection(function() {
								return u.$modelValue
							}, p)
						}
						if (c[1]) {
							for (var p, m = c[0], g = c[1], _ = l.multiple, $ = l.ngOptions, b = !1, w = !1, x = Kr(e.createElement("option")), T = Kr(e.createElement("optgroup")), S = x.clone(), C = 0, k = u.children(), P = k.length; P > C; C++)
								if ("" === k[C].value) {
									p = b = k.eq(C);
									break
								}
							m.init(g, b, S), _ && (g.$isEmpty = function(t) {
								return !t || 0 === t.length
							}), $ ? d(s, u, g) : _ ? h(s, u, g) : f(s, u, g, m)
						}
					}
				}
			}
		],
		za = ["$interpolate",
			function(t) {
				var e = {
					addOption: p,
					removeOption: p
				};
				return {
					restrict: "E",
					priority: 100,
					compile: function(n, r) {
						if (v(r.value)) {
							var i = t(n.text(), !0);
							i || r.$set("value", n.text())
						}
						return function(t, n, r) {
							var o = "$selectController",
								a = n.parent(),
								s = a.data(o) || a.parent().data(o);
							s && s.databound || (s = e), i ? t.$watch(i, function(t, e) {
								r.$set("value", t), e !== t && s.removeOption(e), s.addOption(t, n)
							}) : s.addOption(r.value, n), n.on("$destroy", function() {
								s.removeOption(r.value)
							})
						}
					}
				}
			}
		],
		Ha = g({
			restrict: "E",
			terminal: !1
		});
	return t.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (re(), de(si), void Kr(e).ready(function() {
		J(e, K)
	}))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),
function(t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
	function n(t) {
		var e = t.length,
			n = K.type(t);
		return "function" === n || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}

	function r(t, e, n) {
		if (K.isFunction(e)) return K.grep(t, function(t, r) {
			return !!e.call(t, r, t) !== n
		});
		if (e.nodeType) return K.grep(t, function(t) {
			return t === e !== n
		});
		if ("string" == typeof e) {
			if (se.test(e)) return K.filter(e, t, n);
			e = K.filter(e, t)
		}
		return K.grep(t, function(t) {
			return W.call(e, t) >= 0 !== n
		})
	}

	function i(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}

	function o(t) {
		var e = pe[t] = {};
		return K.each(t.match(de) || [], function(t, n) {
			e[n] = !0
		}), e
	}

	function a() {
		Z.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), K.ready()
	}

	function s() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = K.expando + s.uid++
	}

	function u(t, e, n) {
		var r;
		if (void 0 === n && 1 === t.nodeType)
			if (r = "data-" + e.replace($e, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : _e.test(n) ? K.parseJSON(n) : n
				} catch (i) {}
				ye.set(t, e, n)
			} else n = void 0;
		return n
	}

	function l() {
		return !0
	}

	function c() {
		return !1
	}

	function f() {
		try {
			return Z.activeElement
		} catch (t) {}
	}

	function h(t, e) {
		return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function d(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function p(t) {
		var e = Re.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function m(t, e) {
		for (var n = 0, r = t.length; r > n; n++) ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
	}

	function g(t, e) {
		var n, r, i, o, a, s, u, l;
		if (1 === e.nodeType) {
			if (ve.hasData(t) && (o = ve.access(t), a = ve.set(e, o), l = o.events)) {
				delete a.handle, a.events = {};
				for (i in l)
					for (n = 0, r = l[i].length; r > n; n++) K.event.add(e, i, l[i][n])
			}
			ye.hasData(t) && (s = ye.access(t), u = K.extend({}, s), ye.set(e, u))
		}
	}

	function v(t, e) {
		var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], n) : n
	}

	function y(t, e) {
		var n = e.nodeName.toLowerCase();
		"input" === n && Te.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
	}

	function _(e, n) {
		var r, i = K(n.createElement(e)).appendTo(n.body),
			o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display : K.css(i[0], "display");
		return i.detach(), o
	}

	function $(t) {
		var e = Z,
			n = Le[t];
		return n || (n = _(t, e), "none" !== n && n || (Fe = (Fe || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Fe[0].contentDocument, e.write(), e.close(), n = _(t, e), Fe.detach()), Le[t] = n), n
	}

	function b(t, e, n) {
		var r, i, o, a, s = t.style;
		return n = n || He(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || K.contains(t.ownerDocument, t) || (a = K.style(t, e)), ze.test(a) && Ve.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function w(t, e) {
		return {
			get: function() {
				return t() ? void delete this.get : (this.get = e).apply(this, arguments)
			}
		}
	}

	function x(t, e) {
		if (e in t) return e;
		for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Qe.length; i--;)
			if (e = Qe[i] + n, e in t) return e;
		return r
	}

	function T(t, e, n) {
		var r = Ue.exec(e);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
	}

	function S(t, e, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += K.css(t, n + we[o], !0, i)), r ? ("content" === n && (a -= K.css(t, "padding" + we[o], !0, i)), "margin" !== n && (a -= K.css(t, "border" + we[o] + "Width", !0, i))) : (a += K.css(t, "padding" + we[o], !0, i), "padding" !== n && (a += K.css(t, "border" + we[o] + "Width", !0, i)));
		return a
	}

	function C(t, e, n) {
		var r = !0,
			i = "width" === e ? t.offsetWidth : t.offsetHeight,
			o = He(t),
			a = "border-box" === K.css(t, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = b(t, e, o), (0 > i || null == i) && (i = t.style[e]), ze.test(i)) return i;
			r = a && (G.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
		}
		return i + S(t, e, n || (a ? "border" : "content"), r, o) + "px"
	}

	function k(t, e) {
		for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++) r = t[a], r.style && (o[a] = ve.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && xe(r) && (o[a] = ve.access(r, "olddisplay", $(r.nodeName)))) : (i = xe(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : K.css(r, "display"))));
		for (a = 0; s > a; a++) r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
		return t
	}

	function P(t, e, n, r, i) {
		return new P.prototype.init(t, e, n, r, i)
	}

	function O() {
		return setTimeout(function() {
			Ge = void 0
		}), Ge = K.now()
	}

	function A(t, e) {
		var n, r = 0,
			i = {
				height: t
			};
		for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = we[r], i["margin" + n] = i["padding" + n] = t;
		return e && (i.opacity = i.width = t), i
	}

	function E(t, e, n) {
		for (var r, i = (nn[e] || []).concat(nn["*"]), o = 0, a = i.length; a > o; o++)
			if (r = i[o].call(n, e, t)) return r
	}

	function D(t, e, n) {
		var r, i, o, a, s, u, l, c, f = this,
			h = {}, d = t.style,
			p = t.nodeType && xe(t),
			m = ve.get(t, "fxshow");
		n.queue || (s = K._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
			s.unqueued || u()
		}), s.unqueued++, f.always(function() {
			f.always(function() {
				s.unqueued--, K.queue(t, "fx").length || s.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = K.css(t, "display"), c = "none" === l ? ve.get(t, "olddisplay") || $(t.nodeName) : l, "inline" === c && "none" === K.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for (r in e)
			if (i = e[r], Je.exec(i)) {
				if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
					if ("show" !== i || !m || void 0 === m[r]) continue;
					p = !0
				}
				h[r] = m && m[r] || K.style(t, r)
			} else l = void 0;
		if (K.isEmptyObject(h)) "inline" === ("none" === l ? $(t.nodeName) : l) && (d.display = l);
		else {
			m ? "hidden" in m && (p = m.hidden) : m = ve.access(t, "fxshow", {}), o && (m.hidden = !p), p ? K(t).show() : f.done(function() {
				K(t).hide()
			}), f.done(function() {
				var e;
				ve.remove(t, "fxshow");
				for (e in h) K.style(t, e, h[e])
			});
			for (r in h) a = E(p ? m[r] : 0, r, f), r in m || (m[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function M(t, e) {
		var n, r, i, o, a;
		for (n in t)
			if (r = K.camelCase(n), i = e[r], o = t[n], K.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = K.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete t[r];
				for (n in o) n in t || (t[n] = o[n], e[n] = i)
			} else e[r] = i
	}

	function j(t, e, n) {
		var r, i, o = 0,
			a = en.length,
			s = K.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) return !1;
				for (var e = Ge || O(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
				return s.notifyWith(t, [l, o, n]), 1 > o && u ? n : (s.resolveWith(t, [l]), !1)
			}, l = s.promise({
				elem: t,
				props: K.extend({}, e),
				opts: K.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: e,
				originalOptions: n,
				startTime: Ge || O(),
				duration: n.duration,
				tweens: [],
				createTween: function(e, n) {
					var r = K.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(e) {
					var n = 0,
						r = e ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) l.tweens[n].run(1);
					return e ? s.resolveWith(t, [l, e]) : s.rejectWith(t, [l, e]), this
				}
			}),
			c = l.props;
		for (M(c, l.opts.specialEasing); a > o; o++)
			if (r = en[o].call(l, t, c, l.opts)) return r;
		return K.map(c, E, l), K.isFunction(l.opts.start) && l.opts.start.call(t, l), K.fx.timer(K.extend(u, {
			elem: t,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function N(t) {
		return function(e, n) {
			"string" != typeof e && (n = e, e = "*");
			var r, i = 0,
				o = e.toLowerCase().match(de) || [];
			if (K.isFunction(n))
				for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
		}
	}

	function R(t, e, n, r) {
		function i(s) {
			var u;
			return o[s] = !0, K.each(t[s] || [], function(t, s) {
				var l = s(e, n, r);
				return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
			}), u
		}
		var o = {}, a = t === $n;
		return i(e.dataTypes[0]) || !o["*"] && i("*")
	}

	function I(t, e) {
		var n, r, i = K.ajaxSettings.flatOptions || {};
		for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
		return r && K.extend(!0, t, r), t
	}

	function q(t, e, n) {
		for (var r, i, o, a, s = t.contents, u = t.dataTypes;
			"*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
		if (r)
			for (i in s)
				if (s[i] && s[i].test(r)) {
					u.unshift(i);
					break
				}
		if (u[0] in n) o = u[0];
		else {
			for (i in n) {
				if (!u[0] || t.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				a || (a = i)
			}
			o = o || a
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
	}

	function F(t, e, n, r) {
		var i, o, a, s, u, l = {}, c = t.dataTypes.slice();
		if (c[1])
			for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
		for (o = c.shift(); o;)
			if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
				if ("*" === o) o = u;
				else
		if ("*" !== u && u !== o) {
			if (a = l[u + " " + o] || l["* " + o], !a)
				for (i in l)
					if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
						a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && t["throws"]) e = a(e);
				else try {
					e = a(e)
				} catch (f) {
					return {
						state: "parsererror",
						error: a ? f : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: e
		}
	}

	function L(t, e, n, r) {
		var i;
		if (K.isArray(e)) K.each(e, function(e, i) {
			n || Sn.test(t) ? r(t, i) : L(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
		});
		else if (n || "object" !== K.type(e)) r(t, e);
		else
			for (i in e) L(t + "[" + i + "]", e[i], n, r)
	}

	function V(t) {
		return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	var z = [],
		H = z.slice,
		Y = z.concat,
		U = z.push,
		W = z.indexOf,
		B = {}, X = B.toString,
		Q = B.hasOwnProperty,
		G = {}, Z = t.document,
		J = "2.1.3",
		K = function(t, e) {
			return new K.fn.init(t, e)
		}, te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ee = /^-ms-/,
		ne = /-([\da-z])/gi,
		re = function(t, e) {
			return e.toUpperCase()
		};
	K.fn = K.prototype = {
		jquery: J,
		constructor: K,
		selector: "",
		length: 0,
		toArray: function() {
			return H.call(this)
		},
		get: function(t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : H.call(this)
		},
		pushStack: function(t) {
			var e = K.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t, e) {
			return K.each(this, t, e)
		},
		map: function(t) {
			return this.pushStack(K.map(this, function(e, n) {
				return t.call(e, n, e)
			}))
		},
		slice: function() {
			return this.pushStack(H.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				n = +t + (0 > t ? e : 0);
			return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: U,
		sort: z.sort,
		splice: z.splice
	}, K.extend = K.fn.extend = function() {
		var t, e, n, r, i, o, a = arguments[0] || {}, s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || K.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
			if (null != (t = arguments[s]))
				for (e in t) n = a[e], r = t[e], a !== r && (l && r && (K.isPlainObject(r) || (i = K.isArray(r))) ? (i ? (i = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, a[e] = K.extend(l, o, r)) : void 0 !== r && (a[e] = r));
		return a
	}, K.extend({
		expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t) {
			return "function" === K.type(t)
		},
		isArray: Array.isArray,
		isWindow: function(t) {
			return null != t && t === t.window
		},
		isNumeric: function(t) {
			return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
		},
		isPlainObject: function(t) {
			return "object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? B[X.call(t)] || "object" : typeof t
		},
		globalEval: function(t) {
			var e, n = eval;
			t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : n(t))
		},
		camelCase: function(t) {
			return t.replace(ee, "ms-").replace(ne, re)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, r) {
			var i, o = 0,
				a = t.length,
				s = n(t);
			if (r) {
				if (s)
					for (; a > o && (i = e.apply(t[o], r), i !== !1); o++);
				else
					for (o in t)
						if (i = e.apply(t[o], r), i === !1) break
			} else if (s)
				for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
			else
				for (o in t)
					if (i = e.call(t[o], o, t[o]), i === !1) break; return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(te, "")
		},
		makeArray: function(t, e) {
			var r = e || [];
			return null != t && (n(Object(t)) ? K.merge(r, "string" == typeof t ? [t] : t) : U.call(r, t)), r
		},
		inArray: function(t, e, n) {
			return null == e ? -1 : W.call(e, t, n)
		},
		merge: function(t, e) {
			for (var n = +e.length, r = 0, i = t.length; n > r; r++) t[i++] = e[r];
			return t.length = i, t
		},
		grep: function(t, e, n) {
			for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
			return i
		},
		map: function(t, e, r) {
			var i, o = 0,
				a = t.length,
				s = n(t),
				u = [];
			if (s)
				for (; a > o; o++) i = e(t[o], o, r), null != i && u.push(i);
			else
				for (o in t) i = e(t[o], o, r), null != i && u.push(i);
			return Y.apply([], u)
		},
		guid: 1,
		proxy: function(t, e) {
			var n, r, i;
			return "string" == typeof e && (n = t[e], e = t, t = n), K.isFunction(t) ? (r = H.call(arguments, 2), i = function() {
				return t.apply(e || this, r.concat(H.call(arguments)))
			}, i.guid = t.guid = t.guid || K.guid++, i) : void 0
		},
		now: Date.now,
		support: G
	}), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		B["[object " + e + "]"] = e.toLowerCase()
	});
	var ie = function(t) {
		function e(t, e, n, r) {
			var i, o, a, s, u, l, f, d, p, m;
			if ((e ? e.ownerDocument || e : L) !== D && E(e), e = e || D, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
			if (!r && j) {
				if (11 !== s && (i = ye.exec(t)))
					if (a = i[1]) {
						if (9 === s) {
							if (o = e.getElementById(a), !o || !o.parentNode) return n;
							if (o.id === a) return n.push(o), n
						} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && q(e, o) && o.id === a) return n.push(o), n
					} else {
						if (i[2]) return J.apply(n, e.getElementsByTagName(t)), n;
						if ((a = i[3]) && b.getElementsByClassName) return J.apply(n, e.getElementsByClassName(a)), n
					}
				if (b.qsa && (!N || !N.test(t))) {
					if (d = f = F, p = e, m = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
						for (l = S(t), (f = e.getAttribute("id")) ? d = f.replace($e, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + h(l[u]);
						p = _e.test(t) && c(e.parentNode) || e, m = l.join(",")
					}
					if (m) try {
						return J.apply(n, p.querySelectorAll(m)), n
					} catch (g) {} finally {
						f || e.removeAttribute("id")
					}
				}
			}
			return k(t.replace(ue, "$1"), e, n, r)
		}

		function n() {
			function t(n, r) {
				return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = r
			}
			var e = [];
			return t
		}

		function r(t) {
			return t[F] = !0, t
		}

		function i(t) {
			var e = D.createElement("div");
			try {
				return !!t(e)
			} catch (n) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function o(t, e) {
			for (var n = t.split("|"), r = t.length; r--;) w.attrHandle[n[r]] = e
		}

		function a(t, e) {
			var n = e && t,
				r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || B) - (~t.sourceIndex || B);
			if (r) return r;
			if (n)
				for (; n = n.nextSibling;)
					if (n === e) return -1;
			return t ? 1 : -1
		}

		function s(t) {
			return function(e) {
				var n = e.nodeName.toLowerCase();
				return "input" === n && e.type === t
			}
		}

		function u(t) {
			return function(e) {
				var n = e.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && e.type === t
			}
		}

		function l(t) {
			return r(function(e) {
				return e = +e, r(function(n, r) {
					for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function c(t) {
			return t && "undefined" != typeof t.getElementsByTagName && t
		}

		function f() {}

		function h(t) {
			for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
			return r
		}

		function d(t, e, n) {
			var r = e.dir,
				i = n && "parentNode" === r,
				o = z++;
			return e.first ? function(e, n, o) {
				for (; e = e[r];)
					if (1 === e.nodeType || i) return t(e, n, o)
			} : function(e, n, a) {
				var s, u, l = [V, o];
				if (a) {
					for (; e = e[r];)
						if ((1 === e.nodeType || i) && t(e, n, a)) return !0
				} else
					for (; e = e[r];)
						if (1 === e.nodeType || i) {
							if (u = e[F] || (e[F] = {}), (s = u[r]) && s[0] === V && s[1] === o) return l[2] = s[2];
							if (u[r] = l, l[2] = t(e, n, a)) return !0
						}
			}
		}

		function p(t) {
			return t.length > 1 ? function(e, n, r) {
				for (var i = t.length; i--;)
					if (!t[i](e, n, r)) return !1;
				return !0
			} : t[0]
		}

		function m(t, n, r) {
			for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
			return r
		}

		function g(t, e, n, r, i) {
			for (var o, a = [], s = 0, u = t.length, l = null != e; u > s; s++)(o = t[s]) && (!n || n(o, r, i)) && (a.push(o), l && e.push(s));
			return a
		}

		function v(t, e, n, i, o, a) {
			return i && !i[F] && (i = v(i)), o && !o[F] && (o = v(o, a)), r(function(r, a, s, u) {
				var l, c, f, h = [],
					d = [],
					p = a.length,
					v = r || m(e || "*", s.nodeType ? [s] : s, []),
					y = !t || !r && e ? v : g(v, h, t, s, u),
					_ = n ? o || (r ? t : p || i) ? [] : a : y;
				if (n && n(y, _, s, u), i)
					for (l = g(_, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (_[d[c]] = !(y[d[c]] = f));
				if (r) {
					if (o || t) {
						if (o) {
							for (l = [], c = _.length; c--;)(f = _[c]) && l.push(y[c] = f);
							o(null, _ = [], l, u)
						}
						for (c = _.length; c--;)(f = _[c]) && (l = o ? te(r, f) : h[c]) > -1 && (r[l] = !(a[l] = f))
					}
				} else _ = g(_ === a ? _.splice(p, _.length) : _), o ? o(null, a, _, u) : J.apply(a, _)
			})
		}

		function y(t) {
			for (var e, n, r, i = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = d(function(t) {
					return t === e
				}, a, !0), l = d(function(t) {
					return te(e, t) > -1
				}, a, !0), c = [
					function(t, n, r) {
						var i = !o && (r || n !== P) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
						return e = null, i
					}
				]; i > s; s++)
				if (n = w.relative[t[s].type]) c = [d(p(c), n)];
				else {
					if (n = w.filter[t[s].type].apply(null, t[s].matches), n[F]) {
						for (r = ++s; i > r && !w.relative[t[r].type]; r++);
						return v(s > 1 && p(c), s > 1 && h(t.slice(0, s - 1).concat({
							value: " " === t[s - 2].type ? "*" : ""
						})).replace(ue, "$1"), n, r > s && y(t.slice(s, r)), i > r && y(t = t.slice(r)), i > r && h(t))
					}
					c.push(n)
				}
			return p(c)
		}

		function _(t, n) {
			var i = n.length > 0,
				o = t.length > 0,
				a = function(r, a, s, u, l) {
					var c, f, h, d = 0,
						p = "0",
						m = r && [],
						v = [],
						y = P,
						_ = r || o && w.find.TAG("*", l),
						$ = V += null == y ? 1 : Math.random() || .1,
						b = _.length;
					for (l && (P = a !== D && a); p !== b && null != (c = _[p]); p++) {
						if (o && c) {
							for (f = 0; h = t[f++];)
								if (h(c, a, s)) {
									u.push(c);
									break
								}
							l && (V = $)
						}
						i && ((c = !h && c) && d--, r && m.push(c))
					}
					if (d += p, i && p !== d) {
						for (f = 0; h = n[f++];) h(m, v, a, s);
						if (r) {
							if (d > 0)
								for (; p--;) m[p] || v[p] || (v[p] = G.call(u));
							v = g(v)
						}
						J.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && e.uniqueSort(u)
					}
					return l && (V = $, P = y), m
				};
			return i ? r(a) : a
		}
		var $, b, w, x, T, S, C, k, P, O, A, E, D, M, j, N, R, I, q, F = "sizzle" + 1 * new Date,
			L = t.document,
			V = 0,
			z = 0,
			H = n(),
			Y = n(),
			U = n(),
			W = function(t, e) {
				return t === e && (A = !0), 0
			}, B = 1 << 31,
			X = {}.hasOwnProperty,
			Q = [],
			G = Q.pop,
			Z = Q.push,
			J = Q.push,
			K = Q.slice,
			te = function(t, e) {
				for (var n = 0, r = t.length; r > n; n++)
					if (t[n] === e) return n;
				return -1
			}, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ie = re.replace("w", "w#"),
			oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
			ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
			se = new RegExp(ne + "+", "g"),
			ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			le = new RegExp("^" + ne + "*," + ne + "*"),
			ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			he = new RegExp(ae),
			de = new RegExp("^" + ie + "$"),
			pe = {
				ID: new RegExp("^#(" + re + ")"),
				CLASS: new RegExp("^\\.(" + re + ")"),
				TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + oe),
				PSEUDO: new RegExp("^" + ae),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ee + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			}, me = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			ve = /^[^{]+\{\s*\[native \w/,
			ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			_e = /[+~]/,
			$e = /'|\\/g,
			be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			we = function(t, e, n) {
				var r = "0x" + e - 65536;
				return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			}, xe = function() {
				E()
			};
		try {
			J.apply(Q = K.call(L.childNodes), L.childNodes), Q[L.childNodes.length].nodeType
		} catch (Te) {
			J = {
				apply: Q.length ? function(t, e) {
					Z.apply(t, K.call(e))
				} : function(t, e) {
					for (var n = t.length, r = 0; t[n++] = e[r++];);
					t.length = n - 1
				}
			}
		}
		b = e.support = {}, T = e.isXML = function(t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return e ? "HTML" !== e.nodeName : !1
		}, E = e.setDocument = function(t) {
			var e, n, r = t ? t.ownerDocument || t : L;
			return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, M = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), j = !T(r), b.attributes = i(function(t) {
				return t.className = "i", !t.getAttribute("className")
			}), b.getElementsByTagName = i(function(t) {
				return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
			}), b.getElementsByClassName = ve.test(r.getElementsByClassName), b.getById = i(function(t) {
				return M.appendChild(t).id = F, !r.getElementsByName || !r.getElementsByName(F).length
			}), b.getById ? (w.find.ID = function(t, e) {
				if ("undefined" != typeof e.getElementById && j) {
					var n = e.getElementById(t);
					return n && n.parentNode ? [n] : []
				}
			}, w.filter.ID = function(t) {
				var e = t.replace(be, we);
				return function(t) {
					return t.getAttribute("id") === e
				}
			}) : (delete w.find.ID, w.filter.ID = function(t) {
				var e = t.replace(be, we);
				return function(t) {
					var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
					return n && n.value === e
				}
			}), w.find.TAG = b.getElementsByTagName ? function(t, e) {
				return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
			} : function(t, e) {
				var n, r = [],
					i = 0,
					o = e.getElementsByTagName(t);
				if ("*" === t) {
					for (; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, w.find.CLASS = b.getElementsByClassName && function(t, e) {
				return j ? e.getElementsByClassName(t) : void 0
			}, R = [], N = [], (b.qsa = ve.test(r.querySelectorAll)) && (i(function(t) {
				M.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + F + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || N.push(".#.+[+~]")
			}), i(function(t) {
				var e = r.createElement("input");
				e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
			})), (b.matchesSelector = ve.test(I = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && i(function(t) {
				b.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), R.push("!=", ae)
			}), N = N.length && new RegExp(N.join("|")), R = R.length && new RegExp(R.join("|")), e = ve.test(M.compareDocumentPosition), q = e || ve.test(M.contains) ? function(t, e) {
				var n = 9 === t.nodeType ? t.documentElement : t,
					r = e && e.parentNode;
				return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
			} : function(t, e) {
				if (e)
					for (; e = e.parentNode;)
						if (e === t) return !0;
				return !1
			}, W = e ? function(t, e) {
				if (t === e) return A = !0, 0;
				var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
				return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === L && q(L, t) ? -1 : e === r || e.ownerDocument === L && q(L, e) ? 1 : O ? te(O, t) - te(O, e) : 0 : 4 & n ? -1 : 1)
			} : function(t, e) {
				if (t === e) return A = !0, 0;
				var n, i = 0,
					o = t.parentNode,
					s = e.parentNode,
					u = [t],
					l = [e];
				if (!o || !s) return t === r ? -1 : e === r ? 1 : o ? -1 : s ? 1 : O ? te(O, t) - te(O, e) : 0;
				if (o === s) return a(t, e);
				for (n = t; n = n.parentNode;) u.unshift(n);
				for (n = e; n = n.parentNode;) l.unshift(n);
				for (; u[i] === l[i];) i++;
				return i ? a(u[i], l[i]) : u[i] === L ? -1 : l[i] === L ? 1 : 0
			}, r) : D
		}, e.matches = function(t, n) {
			return e(t, null, null, n)
		}, e.matchesSelector = function(t, n) {
			if ((t.ownerDocument || t) !== D && E(t), n = n.replace(fe, "='$1']"), !(!b.matchesSelector || !j || R && R.test(n) || N && N.test(n))) try {
				var r = I.call(t, n);
				if (r || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
			} catch (i) {}
			return e(n, D, null, [t]).length > 0
		}, e.contains = function(t, e) {
			return (t.ownerDocument || t) !== D && E(t), q(t, e)
		}, e.attr = function(t, e) {
			(t.ownerDocument || t) !== D && E(t);
			var n = w.attrHandle[e.toLowerCase()],
				r = n && X.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
			return void 0 !== r ? r : b.attributes || !j ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
		}, e.error = function(t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, e.uniqueSort = function(t) {
			var e, n = [],
				r = 0,
				i = 0;
			if (A = !b.detectDuplicates, O = !b.sortStable && t.slice(0), t.sort(W), A) {
				for (; e = t[i++];) e === t[i] && (r = n.push(i));
				for (; r--;) t.splice(n[r], 1)
			}
			return O = null, t
		}, x = e.getText = function(t) {
			var e, n = "",
				r = 0,
				i = t.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof t.textContent) return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling) n += x(t)
				} else if (3 === i || 4 === i) return t.nodeValue
			} else
				for (; e = t[r++];) n += x(e);
			return n
		}, w = e.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: pe,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(t) {
					return t[1] = t[1].replace(be, we), t[3] = (t[3] || t[4] || t[5] || "").replace(be, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				},
				CHILD: function(t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
				},
				PSEUDO: function(t) {
					var e, n = !t[6] && t[2];
					return pe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function(t) {
					var e = t.replace(be, we).toLowerCase();
					return "*" === t ? function() {
						return !0
					} : function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				},
				CLASS: function(t) {
					var e = H[t + " "];
					return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && H(t, function(t) {
						return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
					})
				},
				ATTR: function(t, n, r) {
					return function(i) {
						var o = e.attr(i, t);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
					}
				},
				CHILD: function(t, e, n, r, i) {
					var o = "nth" !== t.slice(0, 3),
						a = "last" !== t.slice(-4),
						s = "of-type" === e;
					return 1 === r && 0 === i ? function(t) {
						return !!t.parentNode
					} : function(e, n, u) {
						var l, c, f, h, d, p, m = o !== a ? "nextSibling" : "previousSibling",
							g = e.parentNode,
							v = s && e.nodeName.toLowerCase(),
							y = !u && !s;
						if (g) {
							if (o) {
								for (; m;) {
									for (f = e; f = f[m];)
										if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
									p = m = "only" === t && !p && "nextSibling"
								}
								return !0
							}
							if (p = [a ? g.firstChild : g.lastChild], a && y) {
								for (c = g[F] || (g[F] = {}), l = c[t] || [], d = l[0] === V && l[1], h = l[0] === V && l[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (h = d = 0) || p.pop();)
									if (1 === f.nodeType && ++h && f === e) {
										c[t] = [V, d, h];
										break
									}
							} else if (y && (l = (e[F] || (e[F] = {}))[t]) && l[0] === V) h = l[1];
							else
								for (;
									(f = ++d && f && f[m] || (h = d = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++h || (y && ((f[F] || (f[F] = {}))[t] = [V, h]), f !== e)););
							return h -= i, h === r || h % r === 0 && h / r >= 0
						}
					}
				},
				PSEUDO: function(t, n) {
					var i, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
					return o[F] ? o(n) : o.length > 1 ? (i = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
						for (var r, i = o(t, n), a = i.length; a--;) r = te(t, i[a]), t[r] = !(e[r] = i[a])
					}) : function(t) {
						return o(t, 0, i)
					}) : o
				}
			},
			pseudos: {
				not: r(function(t) {
					var e = [],
						n = [],
						i = C(t.replace(ue, "$1"));
					return i[F] ? r(function(t, e, n, r) {
						for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
					}) : function(t, r, o) {
						return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
					}
				}),
				has: r(function(t) {
					return function(n) {
						return e(t, n).length > 0
					}
				}),
				contains: r(function(t) {
					return t = t.replace(be, we),
					function(e) {
						return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
					}
				}),
				lang: r(function(t) {
					return de.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(be, we).toLowerCase(),
					function(e) {
						var n;
						do
							if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
						return !1
					}
				}),
				target: function(e) {
					var n = t.location && t.location.hash;
					return n && n.slice(1) === e.id
				},
				root: function(t) {
					return t === M
				},
				focus: function(t) {
					return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
				},
				enabled: function(t) {
					return t.disabled === !1
				},
				disabled: function(t) {
					return t.disabled === !0
				},
				checked: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !! t.checked || "option" === e && !! t.selected
				},
				selected: function(t) {
					return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
				},
				empty: function(t) {
					for (t = t.firstChild; t; t = t.nextSibling)
						if (t.nodeType < 6) return !1;
					return !0
				},
				parent: function(t) {
					return !w.pseudos.empty(t)
				},
				header: function(t) {
					return ge.test(t.nodeName)
				},
				input: function(t) {
					return me.test(t.nodeName)
				},
				button: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				},
				text: function(t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
				},
				first: l(function() {
					return [0]
				}),
				last: l(function(t, e) {
					return [e - 1]
				}),
				eq: l(function(t, e, n) {
					return [0 > n ? n + e : n]
				}),
				even: l(function(t, e) {
					for (var n = 0; e > n; n += 2) t.push(n);
					return t
				}),
				odd: l(function(t, e) {
					for (var n = 1; e > n; n += 2) t.push(n);
					return t
				}),
				lt: l(function(t, e, n) {
					for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
					return t
				}),
				gt: l(function(t, e, n) {
					for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
					return t
				})
			}
		}, w.pseudos.nth = w.pseudos.eq;
		for ($ in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) w.pseudos[$] = s($);
		for ($ in {
			submit: !0,
			reset: !0
		}) w.pseudos[$] = u($);
		return f.prototype = w.filters = w.pseudos, w.setFilters = new f, S = e.tokenize = function(t, n) {
			var r, i, o, a, s, u, l, c = Y[t + " "];
			if (c) return n ? 0 : c.slice(0);
			for (s = t, u = [], l = w.preFilter; s;) {
				(!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(ue, " ")
				}), s = s.slice(r.length));
				for (a in w.filter)!(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
					value: r,
					type: a,
					matches: i
				}), s = s.slice(r.length));
				if (!r) break
			}
			return n ? s.length : s ? e.error(t) : Y(t, u).slice(0)
		}, C = e.compile = function(t, e) {
			var n, r = [],
				i = [],
				o = U[t + " "];
			if (!o) {
				for (e || (e = S(t)), n = e.length; n--;) o = y(e[n]), o[F] ? r.push(o) : i.push(o);
				o = U(t, _(i, r)), o.selector = t
			}
			return o
		}, k = e.select = function(t, e, n, r) {
			var i, o, a, s, u, l = "function" == typeof t && t,
				f = !r && S(t = l.selector || t);
			if (n = n || [], 1 === f.length) {
				if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === e.nodeType && j && w.relative[o[1].type]) {
					if (e = (w.find.ID(a.matches[0].replace(be, we), e) || [])[0], !e) return n;
					l && (e = e.parentNode), t = t.slice(o.shift().value.length)
				}
				for (i = pe.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
					if ((u = w.find[s]) && (r = u(a.matches[0].replace(be, we), _e.test(o[0].type) && c(e.parentNode) || e))) {
						if (o.splice(i, 1), t = r.length && h(o), !t) return J.apply(n, r), n;
						break
					}
			}
			return (l || C(t, f))(r, e, !j, n, _e.test(t) && c(e.parentNode) || e), n
		}, b.sortStable = F.split("").sort(W).join("") === F, b.detectDuplicates = !! A, E(), b.sortDetached = i(function(t) {
			return 1 & t.compareDocumentPosition(D.createElement("div"))
		}), i(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(t, e, n) {
			return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), b.attributes && i(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || o("value", function(t, e, n) {
			return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), i(function(t) {
			return null == t.getAttribute("disabled")
		}) || o(ee, function(t, e, n) {
			var r;
			return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
		}), e
	}(t);
	K.find = ie, K.expr = ie.selectors, K.expr[":"] = K.expr.pseudos, K.unique = ie.uniqueSort, K.text = ie.getText, K.isXMLDoc = ie.isXML, K.contains = ie.contains;
	var oe = K.expr.match.needsContext,
		ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		se = /^.[^:#\[\.,]*$/;
	K.filter = function(t, e, n) {
		var r = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? K.find.matchesSelector(r, t) ? [r] : [] : K.find.matches(t, K.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, K.fn.extend({
		find: function(t) {
			var e, n = this.length,
				r = [],
				i = this;
			if ("string" != typeof t) return this.pushStack(K(t).filter(function() {
				for (e = 0; n > e; e++)
					if (K.contains(i[e], this)) return !0
			}));
			for (e = 0; n > e; e++) K.find(t, i[e], r);
			return r = this.pushStack(n > 1 ? K.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
		},
		filter: function(t) {
			return this.pushStack(r(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(r(this, t || [], !0))
		},
		is: function(t) {
			return !!r(this, "string" == typeof t && oe.test(t) ? K(t) : t || [], !1).length
		}
	});
	var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ce = K.fn.init = function(t, e) {
			var n, r;
			if (!t) return this;
			if ("string" == typeof t) {
				if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : le.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ue).find(t) : this.constructor(e).find(t);
				if (n[1]) {
					if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), ae.test(n[1]) && K.isPlainObject(e))
						for (n in e) K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
					return this
				}
				return r = Z.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Z, this.selector = t, this
			}
			return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof ue.ready ? ue.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
		};
	ce.prototype = K.fn, ue = K(Z);
	var fe = /^(?:parents|prev(?:Until|All))/,
		he = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	K.extend({
		dir: function(t, e, n) {
			for (var r = [], i = void 0 !== n;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (i && K(t).is(n)) break;
					r.push(t)
				}
			return r
		},
		sibling: function(t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		}
	}), K.fn.extend({
		has: function(t) {
			var e = K(t, this),
				n = e.length;
			return this.filter(function() {
				for (var t = 0; n > t; t++)
					if (K.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			for (var n, r = 0, i = this.length, o = [], a = oe.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; i > r; r++)
				for (n = this[r]; n && n !== e; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? K.unique(o) : o)
		},
		index: function(t) {
			return t ? "string" == typeof t ? W.call(K(t), this[0]) : W.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), K.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return K.dir(t, "parentNode")
		},
		parentsUntil: function(t, e, n) {
			return K.dir(t, "parentNode", n)
		},
		next: function(t) {
			return i(t, "nextSibling")
		},
		prev: function(t) {
			return i(t, "previousSibling")
		},
		nextAll: function(t) {
			return K.dir(t, "nextSibling")
		},
		prevAll: function(t) {
			return K.dir(t, "previousSibling")
		},
		nextUntil: function(t, e, n) {
			return K.dir(t, "nextSibling", n)
		},
		prevUntil: function(t, e, n) {
			return K.dir(t, "previousSibling", n)
		},
		siblings: function(t) {
			return K.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return K.sibling(t.firstChild)
		},
		contents: function(t) {
			return t.contentDocument || K.merge([], t.childNodes)
		}
	}, function(t, e) {
		K.fn[t] = function(n, r) {
			var i = K.map(this, e, n);
			return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = K.filter(r, i)), this.length > 1 && (he[t] || K.unique(i), fe.test(t) && i.reverse()), this.pushStack(i)
		}
	});
	var de = /\S+/g,
		pe = {};
	K.Callbacks = function(t) {
		t = "string" == typeof t ? pe[t] || o(t) : K.extend({}, t);
		var e, n, r, i, a, s, u = [],
			l = !t.once && [],
			c = function(o) {
				for (e = t.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
					if (u[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
						e = !1;
						break
					}
				r = !1, u && (l ? l.length && c(l.shift()) : e ? u = [] : f.disable())
			}, f = {
				add: function() {
					if (u) {
						var n = u.length;
						! function o(e) {
							K.each(e, function(e, n) {
								var r = K.type(n);
								"function" === r ? t.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
							})
						}(arguments), r ? a = u.length : e && (i = n, c(e))
					}
					return this
				},
				remove: function() {
					return u && K.each(arguments, function(t, e) {
						for (var n;
							(n = K.inArray(e, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
					}), this
				},
				has: function(t) {
					return t ? K.inArray(t, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], a = 0, this
				},
				disable: function() {
					return u = l = e = void 0, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return l = void 0, e || f.disable(), this
				},
				locked: function() {
					return !l
				},
				fireWith: function(t, e) {
					return !u || n && !l || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? l.push(e) : c(e)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return f
	}, K.extend({
		Deferred: function(t) {
			var e = [
				["resolve", "done", K.Callbacks("once memory"), "resolved"],
				["reject", "fail", K.Callbacks("once memory"), "rejected"],
				["notify", "progress", K.Callbacks("memory")]
			],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var t = arguments;
						return K.Deferred(function(n) {
							K.each(e, function(e, o) {
								var a = K.isFunction(t[e]) && t[e];
								i[o[1]](function() {
									var t = a && a.apply(this, arguments);
									t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function(t) {
						return null != t ? K.extend(t, r) : r
					}
				}, i = {};
			return r.pipe = r.then, K.each(e, function(t, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), t && t.call(i, i), i
		},
		when: function(t) {
			var e, n, r, i = 0,
				o = H.call(arguments),
				a = o.length,
				s = 1 !== a || t && K.isFunction(t.promise) ? a : 0,
				u = 1 === s ? t : K.Deferred(),
				l = function(t, n, r) {
					return function(i) {
						n[t] = this, r[t] = arguments.length > 1 ? H.call(arguments) : i, r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
					}
				};
			if (a > 1)
				for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, e)) : --s;
			return s || u.resolveWith(r, o), u.promise()
		}
	});
	var me;
	K.fn.ready = function(t) {
		return K.ready.promise().done(t), this
	}, K.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? K.readyWait++ : K.ready(!0)
		},
		ready: function(t) {
			(t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (me.resolveWith(Z, [K]), K.fn.triggerHandler && (K(Z).triggerHandler("ready"), K(Z).off("ready"))))
		}
	}), K.ready.promise = function(e) {
		return me || (me = K.Deferred(), "complete" === Z.readyState ? setTimeout(K.ready) : (Z.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), me.promise(e)
	}, K.ready.promise();
	var ge = K.access = function(t, e, n, r, i, o, a) {
		var s = 0,
			u = t.length,
			l = null == n;
		if ("object" === K.type(n)) {
			i = !0;
			for (s in n) K.access(t, e, s, n[s], !0, o, a)
		} else if (void 0 !== r && (i = !0, K.isFunction(r) || (a = !0), l && (a ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
			return l.call(K(t), n)
		})), e))
			for (; u > s; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
		return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
	};
	K.acceptData = function(t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
	}, s.uid = 1, s.accepts = K.acceptData, s.prototype = {
		key: function(t) {
			if (!s.accepts(t)) return 0;
			var e = {}, n = t[this.expando];
			if (!n) {
				n = s.uid++;
				try {
					e[this.expando] = {
						value: n
					}, Object.defineProperties(t, e)
				} catch (r) {
					e[this.expando] = n, K.extend(t, e)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(t, e, n) {
			var r, i = this.key(t),
				o = this.cache[i];
			if ("string" == typeof e) o[e] = n;
			else if (K.isEmptyObject(o)) K.extend(this.cache[i], e);
			else
				for (r in e) o[r] = e[r];
			return o
		},
		get: function(t, e) {
			var n = this.cache[this.key(t)];
			return void 0 === e ? n : n[e]
		},
		access: function(t, e, n) {
			var r;
			return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, K.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
		},
		remove: function(t, e) {
			var n, r, i, o = this.key(t),
				a = this.cache[o];
			if (void 0 === e) this.cache[o] = {};
			else {
				K.isArray(e) ? r = e.concat(e.map(K.camelCase)) : (i = K.camelCase(e), e in a ? r = [e, i] : (r = i, r = r in a ? [r] : r.match(de) || [])), n = r.length;
				for (; n--;) delete a[r[n]]
			}
		},
		hasData: function(t) {
			return !K.isEmptyObject(this.cache[t[this.expando]] || {})
		},
		discard: function(t) {
			t[this.expando] && delete this.cache[t[this.expando]]
		}
	};
	var ve = new s,
		ye = new s,
		_e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		$e = /([A-Z])/g;
	K.extend({
		hasData: function(t) {
			return ye.hasData(t) || ve.hasData(t)
		},
		data: function(t, e, n) {
			return ye.access(t, e, n)
		},
		removeData: function(t, e) {
			ye.remove(t, e)
		},
		_data: function(t, e, n) {
			return ve.access(t, e, n)
		},
		_removeData: function(t, e) {
			ve.remove(t, e)
		}
	}), K.fn.extend({
		data: function(t, e) {
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === t) {
				if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
					for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = K.camelCase(r.slice(5)), u(o, r, i[r])));
					ve.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof t ? this.each(function() {
				ye.set(this, t)
			}) : ge(this, function(e) {
				var n, r = K.camelCase(t);
				if (o && void 0 === e) {
					if (n = ye.get(o, t), void 0 !== n) return n;
					if (n = ye.get(o, r), void 0 !== n) return n;
					if (n = u(o, r, void 0), void 0 !== n) return n
				} else this.each(function() {
					var n = ye.get(this, r);
					ye.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
				})
			}, null, e, arguments.length > 1, null, !0)
		},
		removeData: function(t) {
			return this.each(function() {
				ye.remove(this, t)
			})
		}
	}), K.extend({
		queue: function(t, e, n) {
			var r;
			return t ? (e = (e || "fx") + "queue", r = ve.get(t, e), n && (!r || K.isArray(n) ? r = ve.access(t, e, K.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var n = K.queue(t, e),
				r = n.length,
				i = n.shift(),
				o = K._queueHooks(t, e),
				a = function() {
					K.dequeue(t, e)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(t, e) {
			var n = e + "queueHooks";
			return ve.get(t, n) || ve.access(t, n, {
				empty: K.Callbacks("once memory").add(function() {
					ve.remove(t, [e + "queue", n])
				})
			})
		}
	}), K.fn.extend({
		queue: function(t, e) {
			var n = 2;
			return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
				var n = K.queue(this, t, e);
				K._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				K.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var n, r = 1,
				i = K.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = ve.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(e)
		}
	});
	var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		we = ["Top", "Right", "Bottom", "Left"],
		xe = function(t, e) {
			return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
		}, Te = /^(?:checkbox|radio)$/i;
	! function() {
		var t = Z.createDocumentFragment(),
			e = t.appendChild(Z.createElement("div")),
			n = Z.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue
	}();
	var Se = "undefined";
	G.focusinBubbles = "onfocusin" in t;
	var Ce = /^key/,
		ke = /^(?:mouse|pointer|contextmenu)|click/,
		Pe = /^(?:focusinfocus|focusoutblur)$/,
		Oe = /^([^.]*)(?:\.(.+)|)$/;
	K.event = {
		global: {},
		add: function(t, e, n, r, i) {
			var o, a, s, u, l, c, f, h, d, p, m, g = ve.get(t);
			if (g)
				for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = K.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
					return typeof K !== Se && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
				}), e = (e || "").match(de) || [""], l = e.length; l--;) s = Oe.exec(e[l]) || [], d = m = s[1], p = (s[2] || "").split(".").sort(), d && (f = K.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = K.event.special[d] || {}, c = K.extend({
					type: d,
					origType: m,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && K.expr.match.needsContext.test(i),
					namespace: p.join(".")
				}, o), (h = u[d]) || (h = u[d] = [], h.delegateCount = 0, f.setup && f.setup.call(t, r, p, a) !== !1 || t.addEventListener && t.addEventListener(d, a, !1)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), K.event.global[d] = !0)
		},
		remove: function(t, e, n, r, i) {
			var o, a, s, u, l, c, f, h, d, p, m, g = ve.hasData(t) && ve.get(t);
			if (g && (u = g.events)) {
				for (e = (e || "").match(de) || [""], l = e.length; l--;)
					if (s = Oe.exec(e[l]) || [], d = m = s[1], p = (s[2] || "").split(".").sort(), d) {
						for (f = K.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, h = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) c = h[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
						a && !h.length && (f.teardown && f.teardown.call(t, p, g.handle) !== !1 || K.removeEvent(t, d, g.handle), delete u[d])
					} else
						for (d in u) K.event.remove(t, d + e[l], n, r, !0);
				K.isEmptyObject(u) && (delete g.handle, ve.remove(t, "events"))
			}
		},
		trigger: function(e, n, r, i) {
			var o, a, s, u, l, c, f, h = [r || Z],
				d = Q.call(e, "type") ? e.type : e,
				p = Q.call(e, "namespace") ? e.namespace.split(".") : [];
			if (a = s = r = r || Z, 3 !== r.nodeType && 8 !== r.nodeType && !Pe.test(d + K.event.triggered) && (d.indexOf(".") >= 0 && (p = d.split("."), d = p.shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, e = e[K.expando] ? e : new K.Event(d, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : K.makeArray(n, [e]), f = K.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if (!i && !f.noBubble && !K.isWindow(r)) {
					for (u = f.delegateType || d, Pe.test(u + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
					s === (r.ownerDocument || Z) && h.push(s.defaultView || s.parentWindow || t)
				}
				for (o = 0;
					(a = h[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : f.bindType || d, c = (ve.get(a, "events") || {})[e.type] && ve.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && K.acceptData(a) && (e.result = c.apply(a, n), e.result === !1 && e.preventDefault());
				return e.type = d, i || e.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !K.acceptData(r) || l && K.isFunction(r[d]) && !K.isWindow(r) && (s = r[l], s && (r[l] = null), K.event.triggered = d, r[d](), K.event.triggered = void 0, s && (r[l] = s)), e.result
			}
		},
		dispatch: function(t) {
			t = K.event.fix(t);
			var e, n, r, i, o, a = [],
				s = H.call(arguments),
				u = (ve.get(this, "events") || {})[t.type] || [],
				l = K.event.special[t.type] || {};
			if (s[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
				for (a = K.event.handlers.call(this, t, u), e = 0;
					(i = a[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((K.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var n, r, i, o, a = [],
				s = e.delegateCount,
				u = t.target;
			if (s && u.nodeType && (!t.button || "click" !== t.type))
				for (; u !== this; u = u.parentNode || this)
					if (u.disabled !== !0 || "click" !== t.type) {
						for (r = [], n = 0; s > n; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? K(i, this).index(u) >= 0 : K.find(i, this, null, [u]).length), r[i] && r.push(o);
						r.length && a.push({
							elem: u,
							handlers: r
						})
					}
			return s < e.length && a.push({
				elem: this,
				handlers: e.slice(s)
			}), a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, e) {
				var n, r, i, o = e.button;
				return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Z, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
			}
		},
		fix: function(t) {
			if (t[K.expando]) return t;
			var e, n, r, i = t.type,
				o = t,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = ke.test(i) ? this.mouseHooks : Ce.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new K.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
			return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== f() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === f() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(t) {
					return K.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function(t, e, n, r) {
			var i = K.extend(new K.Event, n, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? K.event.trigger(i, null, e) : K.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, K.removeEvent = function(t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n, !1)
	}, K.Event = function(t, e) {
		return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? l : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
	}, K.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = l, t && t.preventDefault && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = l, t && t.stopPropagation && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = l, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, K.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, e) {
		K.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var n, r = this,
					i = t.relatedTarget,
					o = t.handleObj;
				return (!i || i !== r && !K.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
			}
		}
	}), G.focusinBubbles || K.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		var n = function(t) {
			K.event.simulate(e, t.target, K.event.fix(t), !0)
		};
		K.event.special[e] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = ve.access(r, e);
				i || r.addEventListener(t, n, !0), ve.access(r, e, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = ve.access(r, e) - 1;
				i ? ve.access(r, e, i) : (r.removeEventListener(t, n, !0), ve.remove(r, e))
			}
		}
	}), K.fn.extend({
		on: function(t, e, n, r, i) {
			var o, a;
			if ("object" == typeof t) {
				"string" != typeof e && (n = n || e, e = void 0);
				for (a in t) this.on(a, e, n, t[a], i);
				return this
			}
			if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = c;
			else if (!r) return this;
			return 1 === i && (o = r, r = function(t) {
				return K().off(t), o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = K.guid++)), this.each(function() {
				K.event.add(this, t, r, n, e)
			})
		},
		one: function(t, e, n, r) {
			return this.on(t, e, n, r, 1)
		},
		off: function(t, e, n) {
			var r, i;
			if (t && t.preventDefault && t.handleObj) return r = t.handleObj, K(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof t) {
				for (i in t) this.off(i, e, t[i]);
				return this
			}
			return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function() {
				K.event.remove(this, t, n, e)
			})
		},
		trigger: function(t, e) {
			return this.each(function() {
				K.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var n = this[0];
			return n ? K.event.trigger(t, e, n, !0) : void 0
		}
	});
	var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Ee = /<([\w:]+)/,
		De = /<|&#?\w+;/,
		Me = /<(?:script|style|link)/i,
		je = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ne = /^$|\/(?:java|ecma)script/i,
		Re = /^true\/(.*)/,
		Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		qe = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, K.extend({
		clone: function(t, e, n) {
			var r, i, o, a, s = t.cloneNode(!0),
				u = K.contains(t.ownerDocument, t);
			if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
				for (a = v(s), o = v(t), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
			if (e)
				if (n)
					for (o = o || v(t), a = a || v(s), r = 0, i = o.length; i > r; r++) g(o[r], a[r]);
				else g(t, s);
			return a = v(s, "script"), a.length > 0 && m(a, !u && v(t, "script")), s
		},
		buildFragment: function(t, e, n, r) {
			for (var i, o, a, s, u, l, c = e.createDocumentFragment(), f = [], h = 0, d = t.length; d > h; h++)
				if (i = t[h], i || 0 === i)
					if ("object" === K.type(i)) K.merge(f, i.nodeType ? [i] : i);
					else
			if (De.test(i)) {
				for (o = o || c.appendChild(e.createElement("div")), a = (Ee.exec(i) || ["", ""])[1].toLowerCase(), s = qe[a] || qe._default, o.innerHTML = s[1] + i.replace(Ae, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
				K.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
			} else f.push(e.createTextNode(i));
			for (c.textContent = "", h = 0; i = f[h++];)
				if ((!r || -1 === K.inArray(i, r)) && (u = K.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && m(o), n))
					for (l = 0; i = o[l++];) Ne.test(i.type || "") && n.push(i);
			return c
		},
		cleanData: function(t) {
			for (var e, n, r, i, o = K.event.special, a = 0; void 0 !== (n = t[a]); a++) {
				if (K.acceptData(n) && (i = n[ve.expando], i && (e = ve.cache[i]))) {
					if (e.events)
						for (r in e.events) o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, e.handle);
					ve.cache[i] && delete ve.cache[i]
				}
				delete ye.cache[n[ye.expando]]
			}
		}
	}), K.fn.extend({
		text: function(t) {
			return ge(this, function(t) {
				return void 0 === t ? K.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = h(this, t);
					e.appendChild(t)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = h(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function(t, e) {
			for (var n, r = t ? K.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || K.cleanData(v(n)), n.parentNode && (e && K.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e) {
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
				return K.clone(this, t, e)
			})
		},
		html: function(t) {
			return ge(this, function(t) {
				var e = this[0] || {}, n = 0,
					r = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !Me.test(t) && !qe[(Ee.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = t.replace(Ae, "<$1></$2>");
					try {
						for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
						e = 0
					} catch (i) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var t = arguments[0];
			return this.domManip(arguments, function(e) {
				t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		},
		detach: function(t) {
			return this.remove(t, !0)
		},
		domManip: function(t, e) {
			t = Y.apply([], t);
			var n, r, i, o, a, s, u = 0,
				l = this.length,
				c = this,
				f = l - 1,
				h = t[0],
				m = K.isFunction(h);
			if (m || l > 1 && "string" == typeof h && !G.checkClone && je.test(h)) return this.each(function(n) {
				var r = c.eq(n);
				m && (t[0] = h.call(this, n, r.html())), r.domManip(t, e)
			});
			if (l && (n = K.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
				for (i = K.map(v(n, "script"), d), o = i.length; l > u; u++) a = n, u !== f && (a = K.clone(a, !0, !0), o && K.merge(i, v(a, "script"))), e.call(this[u], a, u);
				if (o)
					for (s = i[i.length - 1].ownerDocument, K.map(i, p), u = 0; o > u; u++) a = i[u], Ne.test(a.type || "") && !ve.access(a, "globalEval") && K.contains(s, a) && (a.src ? K._evalUrl && K._evalUrl(a.src) : K.globalEval(a.textContent.replace(Ie, "")))
			}
			return this
		}
	}), K.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e) {
		K.fn[t] = function(t) {
			for (var n, r = [], i = K(t), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), K(i[a])[e](n), U.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var Fe, Le = {}, Ve = /^margin/,
		ze = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
		He = function(e) {
			return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
		};
	! function() {
		function e() {
			a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
			var e = t.getComputedStyle(a, null);
			n = "1%" !== e.top, r = "4px" === e.width, i.removeChild(o)
		}
		var n, r, i = Z.documentElement,
			o = Z.createElement("div"),
			a = Z.createElement("div");
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), t.getComputedStyle && K.extend(G, {
			pixelPosition: function() {
				return e(), n
			},
			boxSizingReliable: function() {
				return null == r && e(), r
			},
			reliableMarginRight: function() {
				var e, n = a.appendChild(Z.createElement("div"));
				return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), e
			}
		}))
	}(), K.swap = function(t, e, n, r) {
		var i, o, a = {};
		for (o in e) a[o] = t.style[o], t.style[o] = e[o];
		i = n.apply(t, r || []);
		for (o in e) t.style[o] = a[o];
		return i
	};
	var Ye = /^(none|table(?!-c[ea]).+)/,
		Ue = new RegExp("^(" + be + ")(.*)$", "i"),
		We = new RegExp("^([+-])=(" + be + ")", "i"),
		Be = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}, Xe = {
			letterSpacing: "0",
			fontWeight: "400"
		}, Qe = ["Webkit", "O", "Moz", "ms"];
	K.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var n = b(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(t, e, n, r) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var i, o, a, s = K.camelCase(e),
					u = t.style;
				return e = K.cssProps[s] || (K.cssProps[s] = x(u, s)), a = K.cssHooks[e] || K.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = We.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(K.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || K.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u[e] = n)), void 0)
			}
		},
		css: function(t, e, n, r) {
			var i, o, a, s = K.camelCase(e);
			return e = K.cssProps[s] || (K.cssProps[s] = x(t.style, s)), a = K.cssHooks[e] || K.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = b(t, e, r)), "normal" === i && e in Xe && (i = Xe[e]), "" === n || n ? (o = parseFloat(i), n === !0 || K.isNumeric(o) ? o || 0 : i) : i
		}
	}), K.each(["height", "width"], function(t, e) {
		K.cssHooks[e] = {
			get: function(t, n, r) {
				return n ? Ye.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Be, function() {
					return C(t, e, r)
				}) : C(t, e, r) : void 0
			},
			set: function(t, n, r) {
				var i = r && He(t);
				return T(t, n, r ? S(t, e, r, "border-box" === K.css(t, "boxSizing", !1, i), i) : 0)
			}
		}
	}), K.cssHooks.marginRight = w(G.reliableMarginRight, function(t, e) {
		return e ? K.swap(t, {
			display: "inline-block"
		}, b, [t, "marginRight"]) : void 0
	}), K.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(t, e) {
		K.cssHooks[t + e] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + we[r] + e] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ve.test(t) || (K.cssHooks[t + e].set = T)
	}), K.fn.extend({
		css: function(t, e) {
			return ge(this, function(t, e, n) {
				var r, i, o = {}, a = 0;
				if (K.isArray(e)) {
					for (r = He(t), i = e.length; i > a; a++) o[e[a]] = K.css(t, e[a], !1, r);
					return o
				}
				return void 0 !== n ? K.style(t, e, n) : K.css(t, e)
			}, t, e, arguments.length > 1)
		},
		show: function() {
			return k(this, !0)
		},
		hide: function() {
			return k(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				xe(this) ? K(this).show() : K(this).hide()
			})
		}
	}), K.Tween = P, P.prototype = {
		constructor: P,
		init: function(t, e, n, r, i, o) {
			this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var t = P.propHooks[this.prop];
			return t && t.get ? t.get(this) : P.propHooks._default.get(this)
		},
		run: function(t) {
			var e, n = P.propHooks[this.prop];
			return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
		}
	}, P.prototype.init.prototype = P.prototype, P.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			},
			set: function(t) {
				K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, K.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, K.fx = P.prototype.init, K.fx.step = {};
	var Ge, Ze, Je = /^(?:toggle|show|hide)$/,
		Ke = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
		tn = /queueHooks$/,
		en = [D],
		nn = {
			"*": [
				function(t, e) {
					var n = this.createTween(t, e),
						r = n.cur(),
						i = Ke.exec(e),
						o = i && i[3] || (K.cssNumber[t] ? "" : "px"),
						a = (K.cssNumber[t] || "px" !== o && +r) && Ke.exec(K.css(n.elem, t)),
						s = 1,
						u = 20;
					if (a && a[3] !== o) {
						o = o || a[3], i = i || [], a = +r || 1;
						do s = s || ".5", a /= s, K.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
					}
					return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
				}
			]
		};
	K.Animation = K.extend(j, {
		tweener: function(t, e) {
			K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
			for (var n, r = 0, i = t.length; i > r; r++) n = t[r], nn[n] = nn[n] || [], nn[n].unshift(e)
		},
		prefilter: function(t, e) {
			e ? en.unshift(t) : en.push(t)
		}
	}), K.speed = function(t, e, n) {
		var r = t && "object" == typeof t ? K.extend({}, t) : {
			complete: n || !n && e || K.isFunction(t) && t,
			duration: t,
			easing: n && e || e && !K.isFunction(e) && e
		};
		return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
		}, r
	}, K.fn.extend({
		fadeTo: function(t, e, n, r) {
			return this.filter(xe).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, n, r)
		},
		animate: function(t, e, n, r) {
			var i = K.isEmptyObject(t),
				o = K.speed(e, n, r),
				a = function() {
					var e = j(this, K.extend({}, t), o);
					(i || ve.get(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(t, e, n) {
			var r = function(t) {
				var e = t.stop;
				delete t.stop, e(n)
			};
			return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
				var e = !0,
					i = null != t && t + "queueHooks",
					o = K.timers,
					a = ve.get(this);
				if (i) a[i] && a[i].stop && r(a[i]);
				else
					for (i in a) a[i] && a[i].stop && tn.test(i) && r(a[i]);
				for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
				(e || !n) && K.dequeue(this, t)
			})
		},
		finish: function(t) {
			return t !== !1 && (t = t || "fx"), this.each(function() {
				var e, n = ve.get(this),
					r = n[t + "queue"],
					i = n[t + "queueHooks"],
					o = K.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, K.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
				delete n.finish
			})
		}
	}), K.each(["toggle", "show", "hide"], function(t, e) {
		var n = K.fn[e];
		K.fn[e] = function(t, r, i) {
			return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(A(e, !0), t, r, i)
		}
	}), K.each({
		slideDown: A("show"),
		slideUp: A("hide"),
		slideToggle: A("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(t, e) {
		K.fn[t] = function(t, n, r) {
			return this.animate(e, t, n, r)
		}
	}), K.timers = [], K.fx.tick = function() {
		var t, e = 0,
			n = K.timers;
		for (Ge = K.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
		n.length || K.fx.stop(), Ge = void 0
	}, K.fx.timer = function(t) {
		K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
	}, K.fx.interval = 13, K.fx.start = function() {
		Ze || (Ze = setInterval(K.fx.tick, K.fx.interval))
	}, K.fx.stop = function() {
		clearInterval(Ze), Ze = null
	}, K.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, K.fn.delay = function(t, e) {
		return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
			var r = setTimeout(e, t);
			n.stop = function() {
				clearTimeout(r)
			}
		})
	},
	function() {
		var t = Z.createElement("input"),
			e = Z.createElement("select"),
			n = e.appendChild(Z.createElement("option"));
		t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = n.selected, e.disabled = !0, G.optDisabled = !n.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
	}();
	var rn, on, an = K.expr.attrHandle;
	K.fn.extend({
		attr: function(t, e) {
			return ge(this, K.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t) {
			return this.each(function() {
				K.removeAttr(this, t)
			})
		}
	}), K.extend({
		attr: function(t, e, n) {
			var r, i, o = t.nodeType;
			if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Se ? K.prop(t, e, n) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(), r = K.attrHooks[e] || (K.expr.match.bool.test(e) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = K.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void K.removeAttr(t, e))
		},
		removeAttr: function(t, e) {
			var n, r, i = 0,
				o = e && e.match(de);
			if (o && 1 === t.nodeType)
				for (; n = o[i++];) r = K.propFix[n] || n, K.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!G.radioValue && "radio" === e && K.nodeName(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		}
	}), on = {
		set: function(t, e, n) {
			return e === !1 ? K.removeAttr(t, n) : t.setAttribute(n, n), n
		}
	}, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var n = an[e] || K.find.attr;
		an[e] = function(t, e, r) {
			var i, o;
			return r || (o = an[e], an[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, an[e] = o), i
		}
	});
	var sn = /^(?:input|select|textarea|button)$/i;
	K.fn.extend({
		prop: function(t, e) {
			return ge(this, K.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t) {
			return this.each(function() {
				delete this[K.propFix[t] || t]
			})
		}
	}), K.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(t, e, n) {
			var r, i, o, a = t.nodeType;
			if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !K.isXMLDoc(t), o && (e = K.propFix[e] || e, i = K.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					return t.hasAttribute("tabindex") || sn.test(t.nodeName) || t.href ? t.tabIndex : -1
				}
			}
		}
	}), G.optSelected || (K.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		}
	}), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		K.propFix[this.toLowerCase()] = this
	});
	var un = /[\t\r\n\f]/g;
	K.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, a, s = "string" == typeof t && t,
				u = 0,
				l = this.length;
			if (K.isFunction(t)) return this.each(function(e) {
				K(this).addClass(t.call(this, e, this.className))
			});
			if (s)
				for (e = (t || "").match(de) || []; l > u; u++)
					if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
						for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						a = K.trim(r), n.className !== a && (n.className = a)
					}
			return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof t && t,
				u = 0,
				l = this.length;
			if (K.isFunction(t)) return this.each(function(e) {
				K(this).removeClass(t.call(this, e, this.className))
			});
			if (s)
				for (e = (t || "").match(de) || []; l > u; u++)
					if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
						for (o = 0; i = e[o++];)
							for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
						a = t ? K.trim(r) : "", n.className !== a && (n.className = a)
					}
			return this
		},
		toggleClass: function(t, e) {
			var n = typeof t;
			return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(K.isFunction(t) ? function(n) {
				K(this).toggleClass(t.call(this, n, this.className, e), e)
			} : function() {
				if ("string" === n)
					for (var e, r = 0, i = K(this), o = t.match(de) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
				else(n === Se || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(e) >= 0) return !0;
			return !1
		}
	});
	var ln = /\r/g;
	K.fn.extend({
		val: function(t) {
			var e, n, r, i = this[0]; {
				if (arguments.length) return r = K.isFunction(t), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? t.call(this, n, K(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : K.isArray(i) && (i = K.map(i, function(t) {
						return null == t ? "" : t + ""
					})), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
				});
				if (i) return e = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
			}
		}
	}), K.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = K.find.attr(t, "value");
					return null != e ? e : K.trim(K.text(t))
				}
			},
			select: {
				get: function(t) {
					for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
						if (n = r[u], !(!n.selected && u !== i || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
							if (e = K(n).val(), o) return e;
							a.push(e)
						}
					return a
				},
				set: function(t, e) {
					for (var n, r, i = t.options, o = K.makeArray(e), a = i.length; a--;) r = i[a], (r.selected = K.inArray(r.value, o) >= 0) && (n = !0);
					return n || (t.selectedIndex = -1), o
				}
			}
		}
	}), K.each(["radio", "checkbox"], function() {
		K.valHooks[this] = {
			set: function(t, e) {
				return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
			}
		}, G.checkOn || (K.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	}), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
		K.fn[e] = function(t, n) {
			return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
		}
	}), K.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, n, r) {
			return this.on(e, t, n, r)
		},
		undelegate: function(t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	});
	var cn = K.now(),
		fn = /\?/;
	K.parseJSON = function(t) {
		return JSON.parse(t + "")
	}, K.parseXML = function(t) {
		var e, n;
		if (!t || "string" != typeof t) return null;
		try {
			n = new DOMParser, e = n.parseFromString(t, "text/xml")
		} catch (r) {
			e = void 0
		}
		return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
	};
	var hn = /#.*$/,
		dn = /([?&])_=[^&]*/,
		pn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		gn = /^(?:GET|HEAD)$/,
		vn = /^\/\//,
		yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		_n = {}, $n = {}, bn = "*/".concat("*"),
		wn = t.location.href,
		xn = yn.exec(wn.toLowerCase()) || [];
	K.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: wn,
			type: "GET",
			isLocal: mn.test(xn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": bn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": K.parseJSON,
				"text xml": K.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? I(I(t, K.ajaxSettings), e) : I(K.ajaxSettings, t)
		},
		ajaxPrefilter: N(_n),
		ajaxTransport: N($n),
		ajax: function(t, e) {
			function n(t, e, n, a) {
				var u, c, v, y, $, w = e;
				2 !== _ && (_ = 2, s && clearTimeout(s), r = void 0, o = a || "", b.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (y = q(f, b, n)), y = F(f, y, b, u), u ? (f.ifModified && ($ = b.getResponseHeader("Last-Modified"), $ && (K.lastModified[i] = $), $ = b.getResponseHeader("etag"), $ && (K.etag[i] = $)), 204 === t || "HEAD" === f.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, u = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || w) + "", u ? p.resolveWith(h, [c, w, b]) : p.rejectWith(h, [b, w, v]), b.statusCode(g), g = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [b, f, u ? c : v]), m.fireWith(h, [b, w]), l && (d.trigger("ajaxComplete", [b, f]), --K.active || K.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var r, i, o, a, s, u, l, c, f = K.ajaxSetup({}, e),
				h = f.context || f,
				d = f.context && (h.nodeType || h.jquery) ? K(h) : K.event,
				p = K.Deferred(),
				m = K.Callbacks("once memory"),
				g = f.statusCode || {}, v = {}, y = {}, _ = 0,
				$ = "canceled",
				b = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (2 === _) {
							if (!a)
								for (a = {}; e = pn.exec(o);) a[e[1].toLowerCase()] = e[2];
							e = a[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === _ ? o : null
					},
					setRequestHeader: function(t, e) {
						var n = t.toLowerCase();
						return _ || (t = y[n] = y[n] || t, v[t] = e), this
					},
					overrideMimeType: function(t) {
						return _ || (f.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t)
							if (2 > _)
								for (e in t) g[e] = [g[e], t[e]];
							else b.always(t[b.status]);
						return this
					},
					abort: function(t) {
						var e = t || $;
						return r && r.abort(e), n(0, e), this
					}
				};
			if (p.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, f.url = ((t || f.url || wn) + "").replace(hn, "").replace(vn, xn[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = yn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === xn[1] && u[2] === xn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (xn[3] || ("http:" === xn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)), R(_n, f, e, b), 2 === _) return b;
			l = K.event && f.global, l && 0 === K.active++ && K.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dn.test(i) ? i.replace(dn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (K.lastModified[i] && b.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && b.setRequestHeader("If-None-Match", K.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", f.contentType), b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bn + "; q=0.01" : "") : f.accepts["*"]);
			for (c in f.headers) b.setRequestHeader(c, f.headers[c]);
			if (f.beforeSend && (f.beforeSend.call(h, b, f) === !1 || 2 === _)) return b.abort();
			$ = "abort";
			for (c in {
				success: 1,
				error: 1,
				complete: 1
			}) b[c](f[c]);
			if (r = R($n, f, e, b)) {
				b.readyState = 1, l && d.trigger("ajaxSend", [b, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
					b.abort("timeout")
				}, f.timeout));
				try {
					_ = 1, r.send(v, n)
				} catch (w) {
					if (!(2 > _)) throw w;
					n(-1, w)
				}
			} else n(-1, "No Transport");
			return b
		},
		getJSON: function(t, e, n) {
			return K.get(t, e, n, "json")
		},
		getScript: function(t, e) {
			return K.get(t, void 0, e, "script")
		}
	}), K.each(["get", "post"], function(t, e) {
		K[e] = function(t, n, r, i) {
			return K.isFunction(n) && (i = i || r, r = n, n = void 0), K.ajax({
				url: t,
				type: e,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), K._evalUrl = function(t) {
		return K.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, K.fn.extend({
		wrapAll: function(t) {
			var e;
			return K.isFunction(t) ? this.each(function(e) {
				K(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this)
		},
		wrapInner: function(t) {
			return this.each(K.isFunction(t) ? function(e) {
				K(this).wrapInner(t.call(this, e))
			} : function() {
				var e = K(this),
					n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			var e = K.isFunction(t);
			return this.each(function(n) {
				K(this).wrapAll(e ? t.call(this, n) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
			}).end()
		}
	}), K.expr.filters.hidden = function(t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0
	}, K.expr.filters.visible = function(t) {
		return !K.expr.filters.hidden(t)
	};
	var Tn = /%20/g,
		Sn = /\[\]$/,
		Cn = /\r?\n/g,
		kn = /^(?:submit|button|image|reset|file)$/i,
		Pn = /^(?:input|select|textarea|keygen)/i;
	K.param = function(t, e) {
		var n, r = [],
			i = function(t, e) {
				e = K.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function() {
			i(this.name, this.value)
		});
		else
			for (n in t) L(n, t[n], e, i);
		return r.join("&").replace(Tn, "+")
	}, K.fn.extend({
		serialize: function() {
			return K.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = K.prop(this, "elements");
				return t ? K.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !K(this).is(":disabled") && Pn.test(this.nodeName) && !kn.test(t) && (this.checked || !Te.test(t))
			}).map(function(t, e) {
				var n = K(this).val();
				return null == n ? null : K.isArray(n) ? K.map(n, function(t) {
					return {
						name: e.name,
						value: t.replace(Cn, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(Cn, "\r\n")
				}
			}).get()
		}
	}), K.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (t) {}
	};
	var On = 0,
		An = {}, En = {
			0: 200,
			1223: 204
		}, Dn = K.ajaxSettings.xhr();
	t.attachEvent && t.attachEvent("onunload", function() {
		for (var t in An) An[t]()
	}), G.cors = !! Dn && "withCredentials" in Dn, G.ajax = Dn = !! Dn, K.ajaxTransport(function(t) {
		var e;
		return G.cors || Dn && !t.crossDomain ? {
			send: function(n, r) {
				var i, o = t.xhr(),
					a = ++On;
				if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (i in t.xhrFields) o[i] = t.xhrFields[i];
				t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (i in n) o.setRequestHeader(i, n[i]);
				e = function(t) {
					return function() {
						e && (delete An[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(En[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
							text: o.responseText
						} : void 0, o.getAllResponseHeaders()))
					}
				}, o.onload = e(), o.onerror = e("error"), e = An[a] = e("abort");
				try {
					o.send(t.hasContent && t.data || null)
				} catch (s) {
					if (e) throw s
				}
			},
			abort: function() {
				e && e()
			}
		} : void 0
	}), K.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(t) {
				return K.globalEval(t), t
			}
		}
	}), K.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), K.ajaxTransport("script", function(t) {
		if (t.crossDomain) {
			var e, n;
			return {
				send: function(r, i) {
					e = K("<script>").prop({
						async: !0,
						charset: t.scriptCharset,
						src: t.url
					}).on("load error", n = function(t) {
						e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
					}), Z.head.appendChild(e[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var Mn = [],
		jn = /(=)\?(?=&|$)|\?\?/;
	K.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = Mn.pop() || K.expando + "_" + cn++;
			return this[t] = !0, t
		}
	}), K.ajaxPrefilter("json jsonp", function(e, n, r) {
		var i, o, a, s = e.jsonp !== !1 && (jn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && jn.test(e.data) && "data");
		return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(jn, "$1" + i) : e.jsonp !== !1 && (e.url += (fn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
			return a || K.error(i + " was not called"), a[0]
		}, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
			a = arguments
		}, r.always(function() {
			t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Mn.push(i)), a && K.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), K.parseHTML = function(t, e, n) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (n = e, e = !1), e = e || Z;
		var r = ae.exec(t),
			i = !n && [];
		return r ? [e.createElement(r[1])] : (r = K.buildFragment([t], e, i), i && i.length && K(i).remove(), K.merge([], r.childNodes))
	};
	var Nn = K.fn.load;
	K.fn.load = function(t, e, n) {
		if ("string" != typeof t && Nn) return Nn.apply(this, arguments);
		var r, i, o, a = this,
			s = t.indexOf(" ");
		return s >= 0 && (r = K.trim(t.slice(s)), t = t.slice(0, s)), K.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && K.ajax({
			url: t,
			type: i,
			dataType: "html",
			data: e
		}).done(function(t) {
			o = arguments, a.html(r ? K("<div>").append(K.parseHTML(t)).find(r) : t)
		}).complete(n && function(t, e) {
			a.each(n, o || [t.responseText, e, t])
		}), this
	}, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		K.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), K.expr.filters.animated = function(t) {
		return K.grep(K.timers, function(e) {
			return t === e.elem
		}).length
	};
	var Rn = t.document.documentElement;
	K.offset = {
		setOffset: function(t, e, n) {
			var r, i, o, a, s, u, l, c = K.css(t, "position"),
				f = K(t),
				h = {};
			"static" === c && (t.style.position = "relative"), s = f.offset(), o = K.css(t, "top"), u = K.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), K.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + i), "using" in e ? e.using.call(t, h) : f.css(h)
		}
	}, K.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				K.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0],
				i = {
					top: 0,
					left: 0
				}, o = r && r.ownerDocument;
			if (o) return e = o.documentElement, K.contains(e, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()), n = V(o), {
				top: i.top + n.pageYOffset - e.clientTop,
				left: i.left + n.pageXOffset - e.clientLeft
			}) : i
		},
		position: function() {
			if (this[0]) {
				var t, e, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (r = t.offset()), r.top += K.css(t[0], "borderTopWidth", !0), r.left += K.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - r.top - K.css(n, "marginTop", !0),
					left: e.left - r.left - K.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || Rn; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
				return t || Rn
			})
		}
	}), K.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var r = "pageYOffset" === n;
		K.fn[e] = function(i) {
			return ge(this, function(e, i, o) {
				var a = V(e);
				return void 0 === o ? a ? a[n] : e[i] : void(a ? a.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset) : e[i] = o)
			}, e, i, arguments.length, null)
		}
	}), K.each(["top", "left"], function(t, e) {
		K.cssHooks[e] = w(G.pixelPosition, function(t, n) {
			return n ? (n = b(t, e), ze.test(n) ? K(t).position()[e] + "px" : n) : void 0
		})
	}), K.each({
		Height: "height",
		Width: "width"
	}, function(t, e) {
		K.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, function(n, r) {
			K.fn[r] = function(r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
					a = n || (r === !0 || i === !0 ? "margin" : "border");
				return ge(this, function(e, n, r) {
					var i;
					return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? K.css(e, n, a) : K.style(e, n, r, a)
				}, e, o ? r : void 0, o, null)
			}
		})
	}), K.fn.size = function() {
		return this.length
	}, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return K
	});
	var In = t.jQuery,
		qn = t.$;
	return K.noConflict = function(e) {
		return t.$ === K && (t.$ = qn), e && t.jQuery === K && (t.jQuery = In), K
	}, typeof e === Se && (t.jQuery = t.$ = K), K
}),
function(t) {
	function e() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1
		}
	}

	function n(t, e) {
		function n() {
			ue.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
		}
		var r = !0;
		return u(function() {
			return r && (n(), r = !1), e.apply(this, arguments)
		}, e)
	}

	function r(t, e) {
		return function(n) {
			return f(t.call(this, n), e)
		}
	}

	function i(t, e) {
		return function(n) {
			return this.lang().ordinal(t.call(this, n), e)
		}
	}

	function o() {}

	function a(t) {
		T(t), u(this, t)
	}

	function s(t) {
		var e = v(t),
			n = e.year || 0,
			r = e.quarter || 0,
			i = e.month || 0,
			o = e.week || 0,
			a = e.day || 0,
			s = e.hour || 0,
			u = e.minute || 0,
			l = e.second || 0,
			c = e.millisecond || 0;
		this._milliseconds = +c + 1e3 * l + 6e4 * u + 36e5 * s, this._days = +a + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._bubble()
	}

	function u(t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		return e.hasOwnProperty("toString") && (t.toString = e.toString), e.hasOwnProperty("valueOf") && (t.valueOf = e.valueOf), t
	}

	function l(t) {
		var e, n = {};
		for (e in t) t.hasOwnProperty(e) && we.hasOwnProperty(e) && (n[e] = t[e]);
		return n
	}

	function c(t) {
		return 0 > t ? Math.ceil(t) : Math.floor(t)
	}

	function f(t, e, n) {
		for (var r = "" + Math.abs(t), i = t >= 0; r.length < e;) r = "0" + r;
		return (i ? n ? "+" : "" : "-") + r
	}

	function h(t, e, n, r) {
		var i = e._milliseconds,
			o = e._days,
			a = e._months;
		r = null == r ? !0 : r, i && t._d.setTime(+t._d + i * n), o && re(t, "Date", ne(t, "Date") + o * n), a && ee(t, ne(t, "Month") + a * n), r && ue.updateOffset(t, o || a)
	}

	function d(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}

	function p(t) {
		return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
	}

	function m(t, e, n) {
		var r, i = Math.min(t.length, e.length),
			o = Math.abs(t.length - e.length),
			a = 0;
		for (r = 0; i > r; r++)(n && t[r] !== e[r] || !n && _(t[r]) !== _(e[r])) && a++;
		return a + o
	}

	function g(t) {
		if (t) {
			var e = t.toLowerCase().replace(/(.)s$/, "$1");
			t = Ze[t] || Je[e] || e
		}
		return t
	}

	function v(t) {
		var e, n, r = {};
		for (n in t) t.hasOwnProperty(n) && (e = g(n), e && (r[e] = t[n]));
		return r
	}

	function y(e) {
		var n, r;
		if (0 === e.indexOf("week")) n = 7, r = "day";
		else {
			if (0 !== e.indexOf("month")) return;
			n = 12, r = "month"
		}
		ue[e] = function(i, o) {
			var a, s, u = ue.fn._lang[e],
				l = [];
			if ("number" == typeof i && (o = i, i = t), s = function(t) {
				var e = ue().utc().set(r, t);
				return u.call(ue.fn._lang, e, i || "")
			}, null != o) return s(o);
			for (a = 0; n > a; a++) l.push(s(a));
			return l
		}
	}

	function _(t) {
		var e = +t,
			n = 0;
		return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
	}

	function $(t, e) {
		return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
	}

	function b(t, e, n) {
		return J(ue([t, 11, 31 + e - n]), e, n).week
	}

	function w(t) {
		return x(t) ? 366 : 365
	}

	function x(t) {
		return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
	}

	function T(t) {
		var e;
		t._a && -2 === t._pf.overflow && (e = t._a[me] < 0 || t._a[me] > 11 ? me : t._a[ge] < 1 || t._a[ge] > $(t._a[pe], t._a[me]) ? ge : t._a[ve] < 0 || t._a[ve] > 23 ? ve : t._a[ye] < 0 || t._a[ye] > 59 ? ye : t._a[_e] < 0 || t._a[_e] > 59 ? _e : t._a[$e] < 0 || t._a[$e] > 999 ? $e : -1, t._pf._overflowDayOfYear && (pe > e || e > ge) && (e = ge), t._pf.overflow = e)
	}

	function S(t) {
		return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length)), t._isValid
	}

	function C(t) {
		return t ? t.toLowerCase().replace("_", "-") : t
	}

	function k(t, e) {
		return e._isUTC ? ue(t).zone(e._offset || 0) : ue(t).local()
	}

	function P(t, e) {
		return e.abbr = t, be[t] || (be[t] = new o), be[t].set(e), be[t]
	}

	function O(t) {
		delete be[t]
	}

	function A(t) {
		var e, n, r, i, o = 0,
			a = function(t) {
				if (!be[t] && xe) try {
					require("./lang/" + t)
				} catch (e) {}
				return be[t]
			};
		if (!t) return ue.fn._lang;
		if (!d(t)) {
			if (n = a(t)) return n;
			t = [t]
		}
		for (; o < t.length;) {
			for (i = C(t[o]).split("-"), e = i.length, r = C(t[o + 1]), r = r ? r.split("-") : null; e > 0;) {
				if (n = a(i.slice(0, e).join("-"))) return n;
				if (r && r.length >= e && m(i, r, !0) >= e - 1) break;
				e--
			}
			o++
		}
		return ue.fn._lang
	}

	function E(t) {
		return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
	}

	function D(t) {
		var e, n, r = t.match(ke);
		for (e = 0, n = r.length; n > e; e++) r[e] = nn[r[e]] ? nn[r[e]] : E(r[e]);
		return function(i) {
			var o = "";
			for (e = 0; n > e; e++) o += r[e] instanceof Function ? r[e].call(i, t) : r[e];
			return o
		}
	}

	function M(t, e) {
		return t.isValid() ? (e = j(e, t.lang()), Ke[e] || (Ke[e] = D(e)), Ke[e](t)) : t.lang().invalidDate()
	}

	function j(t, e) {
		function n(t) {
			return e.longDateFormat(t) || t
		}
		var r = 5;
		for (Pe.lastIndex = 0; r >= 0 && Pe.test(t);) t = t.replace(Pe, n), Pe.lastIndex = 0, r -= 1;
		return t
	}

	function N(t, e) {
		var n, r = e._strict;
		switch (t) {
			case "Q":
				return Fe;
			case "DDDD":
				return Ve;
			case "YYYY":
			case "GGGG":
			case "gggg":
				return r ? ze : Ee;
			case "Y":
			case "G":
			case "g":
				return Ye;
			case "YYYYYY":
			case "YYYYY":
			case "GGGGG":
			case "ggggg":
				return r ? He : De;
			case "S":
				if (r) return Fe;
			case "SS":
				if (r) return Le;
			case "SSS":
				if (r) return Ve;
			case "DDD":
				return Ae;
			case "MMM":
			case "MMMM":
			case "dd":
			case "ddd":
			case "dddd":
				return je;
			case "a":
			case "A":
				return A(e._l)._meridiemParse;
			case "X":
				return Ie;
			case "Z":
			case "ZZ":
				return Ne;
			case "T":
				return Re;
			case "SSSS":
				return Me;
			case "MM":
			case "DD":
			case "YY":
			case "GG":
			case "gg":
			case "HH":
			case "hh":
			case "mm":
			case "ss":
			case "ww":
			case "WW":
				return r ? Le : Oe;
			case "M":
			case "D":
			case "d":
			case "H":
			case "h":
			case "m":
			case "s":
			case "w":
			case "W":
			case "e":
			case "E":
				return Oe;
			case "Do":
				return qe;
			default:
				return n = new RegExp(H(z(t.replace("\\", "")), "i"))
		}
	}

	function R(t) {
		t = t || "";
		var e = t.match(Ne) || [],
			n = e[e.length - 1] || [],
			r = (n + "").match(Qe) || ["-", 0, 0],
			i = +(60 * r[1]) + _(r[2]);
		return "+" === r[0] ? -i : i
	}

	function I(t, e, n) {
		var r, i = n._a;
		switch (t) {
			case "Q":
				null != e && (i[me] = 3 * (_(e) - 1));
				break;
			case "M":
			case "MM":
				null != e && (i[me] = _(e) - 1);
				break;
			case "MMM":
			case "MMMM":
				r = A(n._l).monthsParse(e), null != r ? i[me] = r : n._pf.invalidMonth = e;
				break;
			case "D":
			case "DD":
				null != e && (i[ge] = _(e));
				break;
			case "Do":
				null != e && (i[ge] = _(parseInt(e, 10)));
				break;
			case "DDD":
			case "DDDD":
				null != e && (n._dayOfYear = _(e));
				break;
			case "YY":
				i[pe] = ue.parseTwoDigitYear(e);
				break;
			case "YYYY":
			case "YYYYY":
			case "YYYYYY":
				i[pe] = _(e);
				break;
			case "a":
			case "A":
				n._isPm = A(n._l).isPM(e);
				break;
			case "H":
			case "HH":
			case "h":
			case "hh":
				i[ve] = _(e);
				break;
			case "m":
			case "mm":
				i[ye] = _(e);
				break;
			case "s":
			case "ss":
				i[_e] = _(e);
				break;
			case "S":
			case "SS":
			case "SSS":
			case "SSSS":
				i[$e] = _(1e3 * ("0." + e));
				break;
			case "X":
				n._d = new Date(1e3 * parseFloat(e));
				break;
			case "Z":
			case "ZZ":
				n._useUTC = !0, n._tzm = R(e);
				break;
			case "w":
			case "ww":
			case "W":
			case "WW":
			case "d":
			case "dd":
			case "ddd":
			case "dddd":
			case "e":
			case "E":
				t = t.substr(0, 1);
			case "gg":
			case "gggg":
			case "GG":
			case "GGGG":
			case "GGGGG":
				t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = e)
		}
	}

	function q(t) {
		var e, n, r, i, o, a, s, u, l, c, f = [];
		if (!t._d) {
			for (r = L(t), t._w && null == t._a[ge] && null == t._a[me] && (o = function(e) {
				var n = parseInt(e, 10);
				return e ? e.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == t._a[pe] ? ue().weekYear() : t._a[pe]
			}, a = t._w, null != a.GG || null != a.W || null != a.E ? s = K(o(a.GG), a.W || 1, a.E, 4, 1) : (u = A(t._l), l = null != a.d ? Q(a.d, u) : null != a.e ? parseInt(a.e, 10) + u._week.dow : 0, c = parseInt(a.w, 10) || 1, null != a.d && l < u._week.dow && c++, s = K(o(a.gg), c, l, u._week.doy, u._week.dow)), t._a[pe] = s.year, t._dayOfYear = s.dayOfYear), t._dayOfYear && (i = null == t._a[pe] ? r[pe] : t._a[pe], t._dayOfYear > w(i) && (t._pf._overflowDayOfYear = !0), n = X(i, 0, t._dayOfYear), t._a[me] = n.getUTCMonth(), t._a[ge] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = f[e] = r[e];
			for (; 7 > e; e++) t._a[e] = f[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
			f[ve] += _((t._tzm || 0) / 60), f[ye] += _((t._tzm || 0) % 60), t._d = (t._useUTC ? X : B).apply(null, f)
		}
	}

	function F(t) {
		var e;
		t._d || (e = v(t._i), t._a = [e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond], q(t))
	}

	function L(t) {
		var e = new Date;
		return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
	}

	function V(t) {
		t._a = [], t._pf.empty = !0;
		var e, n, r, i, o, a = A(t._l),
			s = "" + t._i,
			u = s.length,
			l = 0;
		for (r = j(t._f, a).match(ke) || [], e = 0; e < r.length; e++) i = r[e], n = (s.match(N(i, t)) || [])[0], n && (o = s.substr(0, s.indexOf(n)), o.length > 0 && t._pf.unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), l += n.length), nn[i] ? (n ? t._pf.empty = !1 : t._pf.unusedTokens.push(i), I(i, n, t)) : t._strict && !n && t._pf.unusedTokens.push(i);
		t._pf.charsLeftOver = u - l, s.length > 0 && t._pf.unusedInput.push(s), t._isPm && t._a[ve] < 12 && (t._a[ve] += 12), t._isPm === !1 && 12 === t._a[ve] && (t._a[ve] = 0), q(t), T(t)
	}

	function z(t) {
		return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, i) {
			return e || n || r || i
		})
	}

	function H(t) {
		return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function Y(t) {
		var n, r, i, o, a;
		if (0 === t._f.length) return t._pf.invalidFormat = !0, void(t._d = new Date(0 / 0));
		for (o = 0; o < t._f.length; o++) a = 0, n = u({}, t), n._pf = e(), n._f = t._f[o], V(n), S(n) && (a += n._pf.charsLeftOver, a += 10 * n._pf.unusedTokens.length, n._pf.score = a, (null == i || i > a) && (i = a, r = n));
		u(t, r || n)
	}

	function U(t) {
		var e, n, r = t._i,
			i = Ue.exec(r);
		if (i) {
			for (t._pf.iso = !0, e = 0, n = Be.length; n > e; e++)
				if (Be[e][1].exec(r)) {
					t._f = Be[e][0] + (i[6] || " ");
					break
				}
			for (e = 0, n = Xe.length; n > e; e++)
				if (Xe[e][1].exec(r)) {
					t._f += Xe[e][0];
					break
				}
			r.match(Ne) && (t._f += "Z"), V(t)
		} else ue.createFromInputFallback(t)
	}

	function W(e) {
		var n = e._i,
			r = Te.exec(n);
		n === t ? e._d = new Date : r ? e._d = new Date(+r[1]) : "string" == typeof n ? U(e) : d(n) ? (e._a = n.slice(0), q(e)) : p(n) ? e._d = new Date(+n) : "object" == typeof n ? F(e) : "number" == typeof n ? e._d = new Date(n) : ue.createFromInputFallback(e)
	}

	function B(t, e, n, r, i, o, a) {
		var s = new Date(t, e, n, r, i, o, a);
		return 1970 > t && s.setFullYear(t), s
	}

	function X(t) {
		var e = new Date(Date.UTC.apply(null, arguments));
		return 1970 > t && e.setUTCFullYear(t), e
	}

	function Q(t, e) {
		if ("string" == typeof t)
			if (isNaN(t)) {
				if (t = e.weekdaysParse(t), "number" != typeof t) return null
			} else t = parseInt(t, 10);
		return t
	}

	function G(t, e, n, r, i) {
		return i.relativeTime(e || 1, !! n, t, r)
	}

	function Z(t, e, n) {
		var r = de(Math.abs(t) / 1e3),
			i = de(r / 60),
			o = de(i / 60),
			a = de(o / 24),
			s = de(a / 365),
			u = 45 > r && ["s", r] || 1 === i && ["m"] || 45 > i && ["mm", i] || 1 === o && ["h"] || 22 > o && ["hh", o] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", de(a / 30)] || 1 === s && ["y"] || ["yy", s];
		return u[2] = e, u[3] = t > 0, u[4] = n, G.apply({}, u)
	}

	function J(t, e, n) {
		var r, i = n - e,
			o = n - t.day();
		return o > i && (o -= 7), i - 7 > o && (o += 7), r = ue(t).add("d", o), {
			week: Math.ceil(r.dayOfYear() / 7),
			year: r.year()
		}
	}

	function K(t, e, n, r, i) {
		var o, a, s = X(t, 0, 1).getUTCDay();
		return n = null != n ? n : i, o = i - s + (s > r ? 7 : 0) - (i > s ? 7 : 0), a = 7 * (e - 1) + (n - i) + o + 1, {
			year: a > 0 ? t : t - 1,
			dayOfYear: a > 0 ? a : w(t - 1) + a
		}
	}

	function te(e) {
		var n = e._i,
			r = e._f;
		return null === n || r === t && "" === n ? ue.invalid({
			nullInput: !0
		}) : ("string" == typeof n && (e._i = n = A().preparse(n)), ue.isMoment(n) ? (e = l(n), e._d = new Date(+n._d)) : r ? d(r) ? Y(e) : V(e) : W(e), new a(e))
	}

	function ee(t, e) {
		var n;
		return "string" == typeof e && (e = t.lang().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), $(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
	}

	function ne(t, e) {
		return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
	}

	function re(t, e, n) {
		return "Month" === e ? ee(t, n) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
	}

	function ie(t, e) {
		return function(n) {
			return null != n ? (re(this, t, n), ue.updateOffset(this, e), this) : ne(this, t)
		}
	}

	function oe(t) {
		ue.duration.fn[t] = function() {
			return this._data[t]
		}
	}

	function ae(t, e) {
		ue.duration.fn["as" + t] = function() {
			return +this / e
		}
	}

	function se(t) {
		"undefined" == typeof ender && (le = he.moment, he.moment = t ? n("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ue) : ue)
	}
	for (var ue, le, ce, fe = "2.6.0", he = "undefined" != typeof global ? global : this, de = Math.round, pe = 0, me = 1, ge = 2, ve = 3, ye = 4, _e = 5, $e = 6, be = {}, we = {
			_isAMomentObject: null,
			_i: null,
			_f: null,
			_l: null,
			_strict: null,
			_isUTC: null,
			_offset: null,
			_pf: null,
			_lang: null
		}, xe = "undefined" != typeof module && module.exports, Te = /^\/?Date\((\-?\d+)/i, Se = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ce = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, ke = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Pe = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Oe = /\d\d?/, Ae = /\d{1,3}/, Ee = /\d{1,4}/, De = /[+\-]?\d{1,6}/, Me = /\d+/, je = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ne = /Z|[\+\-]\d\d:?\d\d/gi, Re = /T/i, Ie = /[\+\-]?\d+(\.\d{1,3})?/, qe = /\d{1,2}/, Fe = /\d/, Le = /\d\d/, Ve = /\d{3}/, ze = /\d{4}/, He = /[+-]?\d{6}/, Ye = /[+-]?\d+/, Ue = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, We = "YYYY-MM-DDTHH:mm:ssZ", Be = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
			["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
			["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
			["GGGG-[W]WW", /\d{4}-W\d{2}/],
			["YYYY-DDD", /\d{4}-\d{3}/]
		], Xe = [
			["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
			["HH:mm", /(T| )\d\d:\d\d/],
			["HH", /(T| )\d\d/]
		], Qe = /([\+\-]|\d\d)/gi, Ge = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
			Milliseconds: 1,
			Seconds: 1e3,
			Minutes: 6e4,
			Hours: 36e5,
			Days: 864e5,
			Months: 2592e6,
			Years: 31536e6
		}), Ze = {
			ms: "millisecond",
			s: "second",
			m: "minute",
			h: "hour",
			d: "day",
			D: "date",
			w: "week",
			W: "isoWeek",
			M: "month",
			Q: "quarter",
			y: "year",
			DDD: "dayOfYear",
			e: "weekday",
			E: "isoWeekday",
			gg: "weekYear",
			GG: "isoWeekYear"
		}, Je = {
			dayofyear: "dayOfYear",
			isoweekday: "isoWeekday",
			isoweek: "isoWeek",
			weekyear: "weekYear",
			isoweekyear: "isoWeekYear"
		}, Ke = {}, tn = "DDD w W M D d".split(" "), en = "M D H h m s w W".split(" "), nn = {
			M: function() {
				return this.month() + 1
			},
			MMM: function(t) {
				return this.lang().monthsShort(this, t)
			},
			MMMM: function(t) {
				return this.lang().months(this, t)
			},
			D: function() {
				return this.date()
			},
			DDD: function() {
				return this.dayOfYear()
			},
			d: function() {
				return this.day()
			},
			dd: function(t) {
				return this.lang().weekdaysMin(this, t)
			},
			ddd: function(t) {
				return this.lang().weekdaysShort(this, t)
			},
			dddd: function(t) {
				return this.lang().weekdays(this, t)
			},
			w: function() {
				return this.week()
			},
			W: function() {
				return this.isoWeek()
			},
			YY: function() {
				return f(this.year() % 100, 2)
			},
			YYYY: function() {
				return f(this.year(), 4)
			},
			YYYYY: function() {
				return f(this.year(), 5)
			},
			YYYYYY: function() {
				var t = this.year(),
					e = t >= 0 ? "+" : "-";
				return e + f(Math.abs(t), 6)
			},
			gg: function() {
				return f(this.weekYear() % 100, 2)
			},
			gggg: function() {
				return f(this.weekYear(), 4)
			},
			ggggg: function() {
				return f(this.weekYear(), 5)
			},
			GG: function() {
				return f(this.isoWeekYear() % 100, 2)
			},
			GGGG: function() {
				return f(this.isoWeekYear(), 4)
			},
			GGGGG: function() {
				return f(this.isoWeekYear(), 5)
			},
			e: function() {
				return this.weekday()
			},
			E: function() {
				return this.isoWeekday()
			},
			a: function() {
				return this.lang().meridiem(this.hours(), this.minutes(), !0)
			},
			A: function() {
				return this.lang().meridiem(this.hours(), this.minutes(), !1)
			},
			H: function() {
				return this.hours()
			},
			h: function() {
				return this.hours() % 12 || 12
			},
			m: function() {
				return this.minutes()
			},
			s: function() {
				return this.seconds()
			},
			S: function() {
				return _(this.milliseconds() / 100)
			},
			SS: function() {
				return f(_(this.milliseconds() / 10), 2)
			},
			SSS: function() {
				return f(this.milliseconds(), 3)
			},
			SSSS: function() {
				return f(this.milliseconds(), 3)
			},
			Z: function() {
				var t = -this.zone(),
					e = "+";
				return 0 > t && (t = -t, e = "-"), e + f(_(t / 60), 2) + ":" + f(_(t) % 60, 2)
			},
			ZZ: function() {
				var t = -this.zone(),
					e = "+";
				return 0 > t && (t = -t, e = "-"), e + f(_(t / 60), 2) + f(_(t) % 60, 2)
			},
			z: function() {
				return this.zoneAbbr()
			},
			zz: function() {
				return this.zoneName()
			},
			X: function() {
				return this.unix()
			},
			Q: function() {
				return this.quarter()
			}
		}, rn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; tn.length;) ce = tn.pop(), nn[ce + "o"] = i(nn[ce], ce);
	for (; en.length;) ce = en.pop(), nn[ce + ce] = r(nn[ce], 2);
	for (nn.DDDD = r(nn.DDD, 3), u(o.prototype, {
		set: function(t) {
			var e, n;
			for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
		},
		_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		months: function(t) {
			return this._months[t.month()]
		},
		_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		monthsShort: function(t) {
			return this._monthsShort[t.month()]
		},
		monthsParse: function(t) {
			var e, n, r;
			for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
				if (this._monthsParse[e] || (n = ue.utc([2e3, e]), r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(r.replace(".", ""), "i")), this._monthsParse[e].test(t)) return e
		},
		_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdays: function(t) {
			return this._weekdays[t.day()]
		},
		_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysShort: function(t) {
			return this._weekdaysShort[t.day()]
		},
		_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		weekdaysMin: function(t) {
			return this._weekdaysMin[t.day()]
		},
		weekdaysParse: function(t) {
			var e, n, r;
			for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
				if (this._weekdaysParse[e] || (n = ue([2e3, 1]).day(e), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
		},
		_longDateFormat: {
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D YYYY",
			LLL: "MMMM D YYYY LT",
			LLLL: "dddd, MMMM D YYYY LT"
		},
		longDateFormat: function(t) {
			var e = this._longDateFormat[t];
			return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
				return t.slice(1)
			}), this._longDateFormat[t] = e), e
		},
		isPM: function(t) {
			return "p" === (t + "").toLowerCase().charAt(0)
		},
		_meridiemParse: /[ap]\.?m?\.?/i,
		meridiem: function(t, e, n) {
			return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
		},
		_calendar: {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		calendar: function(t, e) {
			var n = this._calendar[t];
			return "function" == typeof n ? n.apply(e) : n
		},
		_relativeTime: {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		relativeTime: function(t, e, n, r) {
			var i = this._relativeTime[n];
			return "function" == typeof i ? i(t, e, n, r) : i.replace(/%d/i, t)
		},
		pastFuture: function(t, e) {
			var n = this._relativeTime[t > 0 ? "future" : "past"];
			return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
		},
		ordinal: function(t) {
			return this._ordinal.replace("%d", t)
		},
		_ordinal: "%d",
		preparse: function(t) {
			return t
		},
		postformat: function(t) {
			return t
		},
		week: function(t) {
			return J(t, this._week.dow, this._week.doy).week
		},
		_week: {
			dow: 0,
			doy: 6
		},
		_invalidDate: "Invalid date",
		invalidDate: function() {
			return this._invalidDate
		}
	}), ue = function(n, r, i, o) {
		var a;
		return "boolean" == typeof i && (o = i, i = t), a = {}, a._isAMomentObject = !0, a._i = n, a._f = r, a._l = i, a._strict = o, a._isUTC = !1, a._pf = e(), te(a)
	}, ue.suppressDeprecationWarnings = !1, ue.createFromInputFallback = n("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
		t._d = new Date(t._i)
	}), ue.utc = function(n, r, i, o) {
		var a;
		return "boolean" == typeof i && (o = i, i = t), a = {}, a._isAMomentObject = !0, a._useUTC = !0, a._isUTC = !0, a._l = i, a._i = n, a._f = r, a._strict = o, a._pf = e(), te(a).utc()
	}, ue.unix = function(t) {
		return ue(1e3 * t)
	}, ue.duration = function(t, e) {
		var n, r, i, o = t,
			a = null;
		return ue.isDuration(t) ? o = {
			ms: t._milliseconds,
			d: t._days,
			M: t._months
		} : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = Se.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
			y: 0,
			d: _(a[ge]) * n,
			h: _(a[ve]) * n,
			m: _(a[ye]) * n,
			s: _(a[_e]) * n,
			ms: _(a[$e]) * n
		}) : (a = Ce.exec(t)) && (n = "-" === a[1] ? -1 : 1, i = function(t) {
			var e = t && parseFloat(t.replace(",", "."));
			return (isNaN(e) ? 0 : e) * n
		}, o = {
			y: i(a[2]),
			M: i(a[3]),
			d: i(a[4]),
			h: i(a[5]),
			m: i(a[6]),
			s: i(a[7]),
			w: i(a[8])
		}), r = new s(o), ue.isDuration(t) && t.hasOwnProperty("_lang") && (r._lang = t._lang), r
	}, ue.version = fe, ue.defaultFormat = We, ue.momentProperties = we, ue.updateOffset = function() {}, ue.lang = function(t, e) {
		var n;
		return t ? (e ? P(C(t), e) : null === e ? (O(t), t = "en") : be[t] || A(t), n = ue.duration.fn._lang = ue.fn._lang = A(t), n._abbr) : ue.fn._lang._abbr
	}, ue.langData = function(t) {
		return t && t._lang && t._lang._abbr && (t = t._lang._abbr), A(t)
	}, ue.isMoment = function(t) {
		return t instanceof a || null != t && t.hasOwnProperty("_isAMomentObject")
	}, ue.isDuration = function(t) {
		return t instanceof s
	}, ce = rn.length - 1; ce >= 0; --ce) y(rn[ce]);
	ue.normalizeUnits = function(t) {
		return g(t)
	}, ue.invalid = function(t) {
		var e = ue.utc(0 / 0);
		return null != t ? u(e._pf, t) : e._pf.userInvalidated = !0, e
	}, ue.parseZone = function() {
		return ue.apply(null, arguments).parseZone()
	}, ue.parseTwoDigitYear = function(t) {
		return _(t) + (_(t) > 68 ? 1900 : 2e3)
	}, u(ue.fn = a.prototype, {
		clone: function() {
			return ue(this)
		},
		valueOf: function() {
			return +this._d + 6e4 * (this._offset || 0)
		},
		unix: function() {
			return Math.floor(+this / 1e3)
		},
		toString: function() {
			return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
		},
		toDate: function() {
			return this._offset ? new Date(+this) : this._d
		},
		toISOString: function() {
			var t = ue(this).utc();
			return 0 < t.year() && t.year() <= 9999 ? M(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
		},
		toArray: function() {
			var t = this;
			return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
		},
		isValid: function() {
			return S(this)
		},
		isDSTShifted: function() {
			return this._a ? this.isValid() && m(this._a, (this._isUTC ? ue.utc(this._a) : ue(this._a)).toArray()) > 0 : !1
		},
		parsingFlags: function() {
			return u({}, this._pf)
		},
		invalidAt: function() {
			return this._pf.overflow
		},
		utc: function() {
			return this.zone(0)
		},
		local: function() {
			return this.zone(0), this._isUTC = !1, this
		},
		format: function(t) {
			var e = M(this, t || ue.defaultFormat);
			return this.lang().postformat(e)
		},
		add: function(t, e) {
			var n;
			return n = "string" == typeof t ? ue.duration(+e, t) : ue.duration(t, e), h(this, n, 1), this
		},
		subtract: function(t, e) {
			var n;
			return n = "string" == typeof t ? ue.duration(+e, t) : ue.duration(t, e), h(this, n, -1), this
		},
		diff: function(t, e, n) {
			var r, i, o = k(t, this),
				a = 6e4 * (this.zone() - o.zone());
			return e = g(e), "year" === e || "month" === e ? (r = 432e5 * (this.daysInMonth() + o.daysInMonth()), i = 12 * (this.year() - o.year()) + (this.month() - o.month()), i += (this - ue(this).startOf("month") - (o - ue(o).startOf("month"))) / r, i -= 6e4 * (this.zone() - ue(this).startOf("month").zone() - (o.zone() - ue(o).startOf("month").zone())) / r, "year" === e && (i /= 12)) : (r = this - o, i = "second" === e ? r / 1e3 : "minute" === e ? r / 6e4 : "hour" === e ? r / 36e5 : "day" === e ? (r - a) / 864e5 : "week" === e ? (r - a) / 6048e5 : r), n ? i : c(i)
		},
		from: function(t, e) {
			return ue.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
		},
		fromNow: function(t) {
			return this.from(ue(), t)
		},
		calendar: function() {
			var t = k(ue(), this).startOf("day"),
				e = this.diff(t, "days", !0),
				n = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse";
			return this.format(this.lang().calendar(n, this))
		},
		isLeapYear: function() {
			return x(this.year())
		},
		isDST: function() {
			return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
		},
		day: function(t) {
			var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return null != t ? (t = Q(t, this.lang()), this.add({
				d: t - e
			})) : e
		},
		month: ie("Month", !0),
		startOf: function(t) {
			switch (t = g(t)) {
				case "year":
					this.month(0);
				case "quarter":
				case "month":
					this.date(1);
				case "week":
				case "isoWeek":
				case "day":
					this.hours(0);
				case "hour":
					this.minutes(0);
				case "minute":
					this.seconds(0);
				case "second":
					this.milliseconds(0)
			}
			return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
		},
		endOf: function(t) {
			return t = g(t), this.startOf(t).add("isoWeek" === t ? "week" : t, 1).subtract("ms", 1)
		},
		isAfter: function(t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +ue(t).startOf(e)
		},
		isBefore: function(t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +ue(t).startOf(e)
		},
		isSame: function(t, e) {
			return e = e || "ms", +this.clone().startOf(e) === +k(t, this).startOf(e)
		},
		min: function(t) {
			return t = ue.apply(null, arguments), this > t ? this : t
		},
		max: function(t) {
			return t = ue.apply(null, arguments), t > this ? this : t
		},
		zone: function(t, e) {
			var n = this._offset || 0;
			return null == t ? this._isUTC ? n : this._d.getTimezoneOffset() : ("string" == typeof t && (t = R(t)), Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC = !0, n !== t && (!e || this._changeInProgress ? h(this, ue.duration(n - t, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ue.updateOffset(this, !0), this._changeInProgress = null)), this)
		},
		zoneAbbr: function() {
			return this._isUTC ? "UTC" : ""
		},
		zoneName: function() {
			return this._isUTC ? "Coordinated Universal Time" : ""
		},
		parseZone: function() {
			return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
		},
		hasAlignedHourOffset: function(t) {
			return t = t ? ue(t).zone() : 0, (this.zone() - t) % 60 === 0
		},
		daysInMonth: function() {
			return $(this.year(), this.month())
		},
		dayOfYear: function(t) {
			var e = de((ue(this).startOf("day") - ue(this).startOf("year")) / 864e5) + 1;
			return null == t ? e : this.add("d", t - e)
		},
		quarter: function(t) {
			return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
		},
		weekYear: function(t) {
			var e = J(this, this.lang()._week.dow, this.lang()._week.doy).year;
			return null == t ? e : this.add("y", t - e)
		},
		isoWeekYear: function(t) {
			var e = J(this, 1, 4).year;
			return null == t ? e : this.add("y", t - e)
		},
		week: function(t) {
			var e = this.lang().week(this);
			return null == t ? e : this.add("d", 7 * (t - e))
		},
		isoWeek: function(t) {
			var e = J(this, 1, 4).week;
			return null == t ? e : this.add("d", 7 * (t - e))
		},
		weekday: function(t) {
			var e = (this.day() + 7 - this.lang()._week.dow) % 7;
			return null == t ? e : this.add("d", t - e)
		},
		isoWeekday: function(t) {
			return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
		},
		isoWeeksInYear: function() {
			return b(this.year(), 1, 4)
		},
		weeksInYear: function() {
			var t = this._lang._week;
			return b(this.year(), t.dow, t.doy)
		},
		get: function(t) {
			return t = g(t), this[t]()
		},
		set: function(t, e) {
			return t = g(t), "function" == typeof this[t] && this[t](e), this
		},
		lang: function(e) {
			return e === t ? this._lang : (this._lang = A(e), this)
		}
	}), ue.fn.millisecond = ue.fn.milliseconds = ie("Milliseconds", !1), ue.fn.second = ue.fn.seconds = ie("Seconds", !1), ue.fn.minute = ue.fn.minutes = ie("Minutes", !1), ue.fn.hour = ue.fn.hours = ie("Hours", !0), ue.fn.date = ie("Date", !0), ue.fn.dates = n("dates accessor is deprecated. Use date instead.", ie("Date", !0)), ue.fn.year = ie("FullYear", !0), ue.fn.years = n("years accessor is deprecated. Use year instead.", ie("FullYear", !0)), ue.fn.days = ue.fn.day, ue.fn.months = ue.fn.month, ue.fn.weeks = ue.fn.week, ue.fn.isoWeeks = ue.fn.isoWeek, ue.fn.quarters = ue.fn.quarter, ue.fn.toJSON = ue.fn.toISOString, u(ue.duration.fn = s.prototype, {
		_bubble: function() {
			var t, e, n, r, i = this._milliseconds,
				o = this._days,
				a = this._months,
				s = this._data;
			s.milliseconds = i % 1e3, t = c(i / 1e3), s.seconds = t % 60, e = c(t / 60), s.minutes = e % 60, n = c(e / 60), s.hours = n % 24, o += c(n / 24), s.days = o % 30, a += c(o / 30), s.months = a % 12, r = c(a / 12), s.years = r
		},
		weeks: function() {
			return c(this.days() / 7)
		},
		valueOf: function() {
			return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12)
		},
		humanize: function(t) {
			var e = +this,
				n = Z(e, !t, this.lang());
			return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
		},
		add: function(t, e) {
			var n = ue.duration(t, e);
			return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
		},
		subtract: function(t, e) {
			var n = ue.duration(t, e);
			return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
		},
		get: function(t) {
			return t = g(t), this[t.toLowerCase() + "s"]()
		},
		as: function(t) {
			return t = g(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
		},
		lang: ue.fn.lang,
		toIsoString: function() {
			var t = Math.abs(this.years()),
				e = Math.abs(this.months()),
				n = Math.abs(this.days()),
				r = Math.abs(this.hours()),
				i = Math.abs(this.minutes()),
				o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
			return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (r || i || o ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (o ? o + "S" : "") : "P0D"
		}
	});
	for (ce in Ge) Ge.hasOwnProperty(ce) && (ae(ce, Ge[ce]), oe(ce.toLowerCase()));
	ae("Weeks", 6048e5), ue.duration.fn.asMonths = function() {
		return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
	}, ue.lang("en", {
		ordinal: function(t) {
			var e = t % 10,
				n = 1 === _(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
			return t + n
		}
	}), xe ? module.exports = ue : "function" == typeof define && define.amd ? (define("moment", function(t, e, n) {
		return n.config && n.config() && n.config().noGlobal === !0 && (he.moment = le), ue
	}), se(!0)) : se()
}.call(this),
function(t, e) {
	"use strict";

	function n() {
		function t(t, n) {
			return e.extend(Object.create(t), n)
		}

		function n(t, e) {
			var n = e.caseInsensitiveMatch,
				r = {
					originalPath: t,
					regexp: t
				}, i = r.keys = [];
			return t = t.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(t, e, n, r) {
				var o = "?" === r ? r : null,
					a = "*" === r ? r : null;
				return i.push({
					name: n,
					optional: !! o
				}), e = e || "", "" + (o ? "" : e) + "(?:" + (o ? e : "") + (a && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "")
			}).replace(/([\/$\*])/g, "\\$1"), r.regexp = new RegExp("^" + t + "$", n ? "i" : ""), r
		}
		var r = {};
		this.when = function(t, i) {
			var o = e.copy(i);
			if (e.isUndefined(o.reloadOnSearch) && (o.reloadOnSearch = !0), e.isUndefined(o.caseInsensitiveMatch) && (o.caseInsensitiveMatch = this.caseInsensitiveMatch), r[t] = e.extend(o, t && n(t, o)), t) {
				var a = "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t + "/";
				r[a] = e.extend({
					redirectTo: t
				}, n(a, o))
			}
			return this
		}, this.caseInsensitiveMatch = !1, this.otherwise = function(t) {
			return "string" == typeof t && (t = {
				redirectTo: t
			}), this.when(null, t), this
		}, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce",
			function(n, i, o, a, u, l, c) {
				function f(t, e) {
					var n = e.keys,
						r = {};
					if (!e.regexp) return null;
					var i = e.regexp.exec(t);
					if (!i) return null;
					for (var o = 1, a = i.length; a > o; ++o) {
						var s = n[o - 1],
							u = i[o];
						s && u && (r[s.name] = u)
					}
					return r
				}

				function h(t) {
					var r = _.current;
					g = p(), v = g && r && g.$$route === r.$$route && e.equals(g.pathParams, r.pathParams) && !g.reloadOnSearch && !y, v || !r && !g || n.$broadcast("$routeChangeStart", g, r).defaultPrevented && t && t.preventDefault()
				}

				function d() {
					var t = _.current,
						r = g;
					v ? (t.params = r.params, e.copy(t.params, o), n.$broadcast("$routeUpdate", t)) : (r || t) && (y = !1, _.current = r, r && r.redirectTo && (e.isString(r.redirectTo) ? i.path(m(r.redirectTo, r.params)).search(r.params).replace() : i.url(r.redirectTo(r.pathParams, i.path(), i.search())).replace()), a.when(r).then(function() {
						if (r) {
							var t, n, i = e.extend({}, r.resolve);
							return e.forEach(i, function(t, n) {
								i[n] = e.isString(t) ? u.get(t) : u.invoke(t, null, null, n)
							}), e.isDefined(t = r.template) ? e.isFunction(t) && (t = t(r.params)) : e.isDefined(n = r.templateUrl) && (e.isFunction(n) && (n = n(r.params)), n = c.getTrustedResourceUrl(n), e.isDefined(n) && (r.loadedTemplateUrl = n, t = l(n))), e.isDefined(t) && (i.$template = t), a.all(i)
						}
					}).then(function(i) {
						r == _.current && (r && (r.locals = i, e.copy(r.params, o)), n.$broadcast("$routeChangeSuccess", r, t))
					}, function(e) {
						r == _.current && n.$broadcast("$routeChangeError", r, t, e)
					}))
				}

				function p() {
					var n, o;
					return e.forEach(r, function(r) {
						!o && (n = f(i.path(), r)) && (o = t(r, {
							params: e.extend({}, i.search(), n),
							pathParams: n
						}), o.$$route = r)
					}), o || r[null] && t(r[null], {
						params: {},
						pathParams: {}
					})
				}

				function m(t, n) {
					var r = [];
					return e.forEach((t || "").split(":"), function(t, e) {
						if (0 === e) r.push(t);
						else {
							var i = t.match(/(\w+)(?:[?*])?(.*)/),
								o = i[1];
							r.push(n[o]), r.push(i[2] || ""), delete n[o]
						}
					}), r.join("")
				}
				var g, v, y = !1,
					_ = {
						routes: r,
						reload: function() {
							y = !0, n.$evalAsync(function() {
								h(), d()
							})
						},
						updateParams: function(t) {
							if (!this.current || !this.current.$$route) throw s("norout", "Tried updating route when with no current route");
							var n = {}, r = this;
							e.forEach(Object.keys(t), function(e) {
								r.current.pathParams[e] || (n[e] = t[e])
							}), t = e.extend({}, this.current.params, t), i.path(m(this.current.$$route.originalPath, t)), i.search(e.extend({}, i.search(), n))
						}
					};
				return n.$on("$locationChangeStart", h), n.$on("$locationChangeSuccess", d), _
			}
		]
	}

	function r() {
		this.$get = function() {
			return {}
		}
	}

	function i(t, n, r) {
		return {
			restrict: "ECA",
			terminal: !0,
			priority: 400,
			transclude: "element",
			link: function(i, o, a, s, u) {
				function l() {
					d && (r.cancel(d), d = null), f && (f.$destroy(), f = null), h && (d = r.leave(h), d.then(function() {
						d = null
					}), h = null)
				}

				function c() {
					var a = t.current && t.current.locals,
						s = a && a.$template;
					if (e.isDefined(s)) {
						var c = i.$new(),
							d = t.current,
							g = u(c, function(t) {
								r.enter(t, null, h || o).then(function() {
									!e.isDefined(p) || p && !i.$eval(p) || n()
								}), l()
							});
						h = g, f = d.scope = c, f.$emit("$viewContentLoaded"), f.$eval(m)
					} else l()
				}
				var f, h, d, p = a.autoscroll,
					m = a.onload || "";
				i.$on("$routeChangeSuccess", c), c()
			}
		}
	}

	function o(t, e, n) {
		return {
			restrict: "ECA",
			priority: -400,
			link: function(r, i) {
				var o = n.current,
					a = o.locals;
				i.html(a.$template);
				var s = t(i.contents());
				if (o.controller) {
					a.$scope = r;
					var u = e(o.controller, a);
					o.controllerAs && (r[o.controllerAs] = u), i.data("$ngControllerController", u), i.children().data("$ngControllerController", u)
				}
				s(r)
			}
		}
	}
	var a = e.module("ngRoute", ["ng"]).provider("$route", n),
		s = e.$$minErr("ngRoute");
	a.provider("$routeParams", r), a.directive("ngView", i), a.directive("ngView", o), i.$inject = ["$route", "$anchorScroll", "$animate"], o.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular),
function(t, e, n) {
	"use strict";
	e.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
		var t = "$$ngAnimateChildren";
		return function(n, r, i) {
			var o = i.ngAnimateChildren;
			e.isString(o) && 0 === o.length ? r.data(t, !0) : n.$watch(o, function(e) {
				r.data(t, !! e)
			})
		}
	}).factory("$$animateReflow", ["$$rAF", "$document",
		function(t, e) {
			var n = e[0].body;
			return function(e) {
				return t(function() {
					n.offsetWidth + 1;
					e()
				})
			}
		}
	]).config(["$provide", "$animateProvider",
		function(r, i) {
			function o(t) {
				for (var e = 0; e < t.length; e++) {
					var n = t[e];
					if (n.nodeType == g) return n
				}
			}

			function a(t) {
				return t && e.element(t)
			}

			function s(t) {
				return e.element(o(t))
			}

			function u(t, e) {
				return o(t) == o(e)
			}
			var l, c = e.noop,
				f = e.forEach,
				h = i.$$selectors,
				d = e.isArray,
				p = e.isString,
				m = e.isObject,
				g = 1,
				v = "$$ngAnimateState",
				y = "$$ngAnimateChildren",
				_ = "ng-animate",
				$ = {
					running: !0
				};
			r.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite",
				function(t, n, r, g, b, w, x, T, S, C) {
					function k(t, e) {
						var n = t.data(v) || {};
						return e && (n.running = !0, n.structural = !0, t.data(v, n)), n.disabled || n.running && n.structural
					}

					function P(t) {
						var e, r = n.defer();
						return r.promise.$$cancelFn = function() {
							e && e()
						}, x.$$postDigest(function() {
							e = t(function() {
								r.resolve()
							})
						}), r.promise
					}

					function O(t) {
						return m(t) ? (t.tempClasses && p(t.tempClasses) && (t.tempClasses = t.tempClasses.split(/\s+/)), t) : void 0
					}

					function A(t, e, n) {
						n = n || {};
						var r = {};
						f(n, function(t, e) {
							f(e.split(" "), function(e) {
								r[e] = t
							})
						});
						var i = Object.create(null);
						f((t.attr("class") || "").split(/\s+/), function(t) {
							i[t] = !0
						});
						var o = [],
							a = [];
						return f(e && e.classes || [], function(t, e) {
							var n = i[e],
								s = r[e] || {};
							t === !1 ? (n || "addClass" == s.event) && a.push(e) : t === !0 && (n && "removeClass" != s.event || o.push(e))
						}), o.length + a.length > 0 && [o.join(" "), a.join(" ")]
					}

					function E(t) {
						if (t) {
							var e = [],
								n = {}, i = t.substr(1).split(".");
							(g.transitions || g.animations) && e.push(r.get(h[""]));
							for (var o = 0; o < i.length; o++) {
								var a = i[o],
									s = h[a];
								s && !n[a] && (e.push(r.get(s)), n[a] = !0)
							}
							return e
						}
					}

					function D(t, n, r, i) {
						function o(t, e) {
							var n = t[e],
								r = t["before" + e.charAt(0).toUpperCase() + e.substr(1)];
							return n || r ? ("leave" == e && (r = n, n = null), w.push({
								event: e,
								fn: n
							}), _.push({
								event: e,
								fn: r
							}), !0) : void 0
						}

						function a(e, n, o) {
							function a(t) {
								if (n) {
									if ((n[t] || c)(), ++h < s.length) return;
									n = null
								}
								o()
							}
							var s = [];
							f(e, function(t) {
								t.fn && s.push(t)
							});
							var h = 0;
							f(s, function(e, o) {
								var s = function() {
									a(o)
								};
								switch (e.event) {
									case "setClass":
										n.push(e.fn(t, u, l, s, i));
										break;
									case "animate":
										n.push(e.fn(t, r, i.from, i.to, s));
										break;
									case "addClass":
										n.push(e.fn(t, u || r, s, i));
										break;
									case "removeClass":
										n.push(e.fn(t, l || r, s, i));
										break;
									default:
										n.push(e.fn(t, s, i))
								}
							}), n && 0 === n.length && o()
						}
						var s = t[0];
						if (s) {
							i && (i.to = i.to || {}, i.from = i.from || {});
							var u, l;
							d(r) && (u = r[0], l = r[1], u ? l ? r = u + " " + l : (r = u, n = "addClass") : (r = l, n = "removeClass"));
							var h = "setClass" == n,
								p = h || "addClass" == n || "removeClass" == n || "animate" == n,
								m = t.attr("class"),
								g = m + " " + r;
							if (L(g)) {
								var v = c,
									y = [],
									_ = [],
									$ = c,
									b = [],
									w = [],
									x = (" " + g).replace(/\s+/g, ".");
								return f(E(x), function(t) {
									var e = o(t, n);
									!e && h && (o(t, "addClass"), o(t, "removeClass"))
								}), {
									node: s,
									event: n,
									className: r,
									isClassBased: p,
									isSetClassOperation: h,
									applyStyles: function() {
										i && t.css(e.extend(i.from || {}, i.to || {}))
									},
									before: function(t) {
										v = t, a(_, y, function() {
											v = c, t()
										})
									},
									after: function(t) {
										$ = t, a(w, b, function() {
											$ = c, t()
										})
									},
									cancel: function() {
										y && (f(y, function(t) {
											(t || c)(!0)
										}), v(!0)), b && (f(b, function(t) {
											(t || c)(!0)
										}), $(!0))
									}
								}
							}
						}
					}

					function M(t, n, r, i, o, a, s, u) {
						function h(e) {
							var i = "$animate:" + e;
							x && x[i] && x[i].length > 0 && w(function() {
								r.triggerHandler(i, {
									event: t,
									className: n
								})
							})
						}

						function d() {
							h("before")
						}

						function p() {
							h("after")
						}

						function m() {
							h("close"), u()
						}

						function g() {
							g.hasBeenRun || (g.hasBeenRun = !0, a())
						}

						function y() {
							if (!y.hasBeenRun) {
								b && b.applyStyles(), y.hasBeenRun = !0, s && s.tempClasses && f(s.tempClasses, function(t) {
									l.removeClass(r, t)
								});
								var e = r.data(v);
								e && (b && b.isClassBased ? N(r, n) : (w(function() {
									var e = r.data(v) || {};
									M == e.index && N(r, n, t)
								}), r.data(v, e))), m()
							}
						}
						var $ = c,
							b = D(r, t, n, s);
						if (!b) return g(), d(), p(), y(), $;
						t = b.event, n = b.className;
						var x = e.element._data(b.node);
						if (x = x && x.events, i || (i = o ? o.parent() : r.parent()), R(r, i)) return g(), d(), p(), y(), $;
						var T = r.data(v) || {}, S = T.active || {}, C = T.totalActive || 0,
							k = T.last,
							P = !1;
						if (C > 0) {
							var O = [];
							if (b.isClassBased) {
								if ("setClass" == k.event) O.push(k), N(r, n);
								else if (S[n]) {
									var A = S[n];
									A.event == t ? P = !0 : (O.push(A), N(r, n))
								}
							} else if ("leave" == t && S["ng-leave"]) P = !0;
							else {
								for (var E in S) O.push(S[E]);
								T = {}, N(r, !0)
							}
							O.length > 0 && f(O, function(t) {
								t.cancel()
							})
						}
						if (!b.isClassBased || b.isSetClassOperation || "animate" == t || P || (P = "addClass" == t == r.hasClass(n)), P) return g(), d(), p(), m(), $;
						S = T.active || {}, C = T.totalActive || 0, "leave" == t && r.one("$destroy", function() {
							var t = e.element(this),
								n = t.data(v);
							if (n) {
								var r = n.active["ng-leave"];
								r && (r.cancel(), N(t, "ng-leave"))
							}
						}), l.addClass(r, _), s && s.tempClasses && f(s.tempClasses, function(t) {
							l.addClass(r, t)
						});
						var M = q++;
						return C++, S[n] = b, r.data(v, {
							last: b,
							active: S,
							index: M,
							totalActive: C
						}), d(), b.before(function(e) {
							var i = r.data(v);
							e = e || !i || !i.active[n] || b.isClassBased && i.active[n].event != t, g(), e === !0 ? y() : (p(), b.after(y))
						}), b.cancel
					}

					function j(t) {
						var n = o(t);
						if (n) {
							var r = e.isFunction(n.getElementsByClassName) ? n.getElementsByClassName(_) : n.querySelectorAll("." + _);
							f(r, function(t) {
								t = e.element(t);
								var n = t.data(v);
								n && n.active && f(n.active, function(t) {
									t.cancel()
								})
							})
						}
					}

					function N(t, e) {
						if (u(t, b)) $.disabled || ($.running = !1, $.structural = !1);
						else if (e) {
							var n = t.data(v) || {}, r = e === !0;
							!r && n.active && n.active[e] && (n.totalActive--, delete n.active[e]), (r || !n.totalActive) && (l.removeClass(t, _), t.removeData(v))
						}
					}

					function R(t, n) {
						if ($.disabled) return !0;
						if (u(t, b)) return $.running;
						var r, i, o;
						do {
							if (0 === n.length) break;
							var a = u(n, b),
								s = a ? $ : n.data(v) || {};
							if (s.disabled) return !0;
							if (a && (o = !0), r !== !1) {
								var l = n.data(y);
								e.isDefined(l) && (r = l)
							}
							i = i || s.running || s.last && !s.last.isClassBased
						} while (n = n.parent());
						return !o || !r && i
					}
					l = C, b.data(v, $);
					var I = x.$watch(function() {
						return S.totalPendingRequests
					}, function(t) {
						0 === t && (I(), x.$$postDigest(function() {
							x.$$postDigest(function() {
								$.running = !1
							})
						}))
					}),
						q = 0,
						F = i.classNameFilter(),
						L = F ? function(t) {
							return F.test(t)
						} : function() {
							return !0
						};
					return {
						animate: function(t, e, n, r, i) {
							return r = r || "ng-inline-animate", i = O(i) || {}, i.from = n ? e : null, i.to = n ? n : e, P(function(e) {
								return M("animate", r, s(t), null, null, c, i, e)
							})
						},
						enter: function(n, r, i, o) {
							return o = O(o), n = e.element(n), r = a(r), i = a(i), k(n, !0), t.enter(n, r, i), P(function(t) {
								return M("enter", "ng-enter", s(n), r, i, c, o, t)
							})
						},
						leave: function(n, r) {
							return r = O(r), n = e.element(n), j(n), k(n, !0), P(function(e) {
								return M("leave", "ng-leave", s(n), null, null, function() {
									t.leave(n)
								}, r, e)
							})
						},
						move: function(n, r, i, o) {
							return o = O(o), n = e.element(n), r = a(r), i = a(i), j(n), k(n, !0), t.move(n, r, i), P(function(t) {
								return M("move", "ng-move", s(n), r, i, c, o, t)
							})
						},
						addClass: function(t, e, n) {
							return this.setClass(t, e, [], n)
						},
						removeClass: function(t, e, n) {
							return this.setClass(t, [], e, n)
						},
						setClass: function(n, r, i, a) {
							a = O(a);
							var u = "$$animateClasses";
							if (n = e.element(n), n = s(n), k(n)) return t.$$setClassImmediately(n, r, i, a);
							var l, c = n.data(u),
								h = !! c;
							return c || (c = {}, c.classes = {}), l = c.classes, r = d(r) ? r : r.split(" "), f(r, function(t) {
								t && t.length && (l[t] = !0)
							}), i = d(i) ? i : i.split(" "), f(i, function(t) {
								t && t.length && (l[t] = !1)
							}), h ? (a && c.options && (c.options = e.extend(c.options || {}, a)), c.promise) : (n.data(u, c = {
								classes: l,
								options: a
							}), c.promise = P(function(e) {
								var r = n.parent(),
									i = o(n),
									a = i.parentNode;
								if (!a || a.$$NG_REMOVED || i.$$NG_REMOVED) return void e();
								var s = n.data(u);
								n.removeData(u);
								var l = n.data(v) || {}, c = A(n, s, l.active);
								return c ? M("setClass", c, n, r, null, function() {
									c[0] && t.$$addClassImmediately(n, c[0]), c[1] && t.$$removeClassImmediately(n, c[1])
								}, s.options, e) : e()
							}))
						},
						cancel: function(t) {
							t.$$cancelFn()
						},
						enabled: function(t, e) {
							switch (arguments.length) {
								case 2:
									if (t) N(e);
									else {
										var n = e.data(v) || {};
										n.disabled = !0, e.data(v, n)
									}
									break;
								case 1:
									$.disabled = !t;
									break;
								default:
									t = !$.disabled
							}
							return !!t
						}
					}
				}
			]), i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow",
				function(r, i, a, s) {
					function u() {
						N || (N = s(function() {
							X = [], N = null, W = {}
						}))
					}

					function h(t, e) {
						N && N(), X.push(e), N = s(function() {
							f(X, function(t) {
								t()
							}), X = [], N = null, W = {}
						})
					}

					function m(t, n) {
						var r = o(t);
						t = e.element(r), Z.push(t);
						var i = Date.now() + n;
						G >= i || (a.cancel(Q), G = i, Q = a(function() {
							v(Z), Z = []
						}, n, !1))
					}

					function v(t) {
						f(t, function(t) {
							var e = t.data(z);
							e && f(e.closeAnimationFns, function(t) {
								t()
							})
						})
					}

					function y(t, e) {
						var n = e ? W[e] : null;
						if (!n) {
							var i = 0,
								o = 0,
								a = 0,
								s = 0;
							f(t, function(t) {
								if (t.nodeType == g) {
									var e = r.getComputedStyle(t) || {}, n = e[A + R];
									i = Math.max(_(n), i);
									var u = e[A + q];
									o = Math.max(_(u), o); {
										e[D + q]
									}
									s = Math.max(_(e[D + q]), s);
									var l = _(e[D + R]);
									l > 0 && (l *= parseInt(e[D + F], 10) || 1), a = Math.max(l, a)
								}
							}), n = {
								total: 0,
								transitionDelay: o,
								transitionDuration: i,
								animationDelay: s,
								animationDuration: a
							}, e && (W[e] = n)
						}
						return n
					}

					function _(t) {
						var e = 0,
							n = p(t) ? t.split(/\s*,\s*/) : [];
						return f(n, function(t) {
							e = Math.max(parseFloat(t) || 0, e)
						}), e
					}

					function $(t) {
						var e = t.parent(),
							n = e.data(V);
						return n || (e.data(V, ++B), n = B), n + "-" + o(t).getAttribute("class")
					}

					function b(t, e, n, r) {
						var i = ["ng-enter", "ng-leave", "ng-move"].indexOf(n) >= 0,
							a = $(e),
							s = a + " " + n,
							u = W[s] ? ++W[s].total : 0,
							c = {};
						if (u > 0) {
							var f = n + "-stagger",
								h = a + " " + f,
								d = !W[h];
							d && l.addClass(e, f), c = y(e, h), d && l.removeClass(e, f)
						}
						l.addClass(e, n);
						var p = e.data(z) || {}, m = y(e, s),
							g = m.transitionDuration,
							v = m.animationDuration;
						if (i && 0 === g && 0 === v) return l.removeClass(e, n), !1;
						var _ = r || i && g > 0,
							b = v > 0 && c.animationDelay > 0 && 0 === c.animationDuration,
							w = p.closeAnimationFns || [];
						e.data(z, {
							stagger: c,
							cacheKey: s,
							running: p.running || 0,
							itemIndex: u,
							blockTransition: _,
							closeAnimationFns: w
						});
						var S = o(e);
						return _ && (x(S, !0), r && e.css(r)), b && T(S, !0), !0
					}

					function w(t, e, n, r, i) {
						function s() {
							e.off(q, u), l.removeClass(e, d), l.removeClass(e, p), R && a.cancel(R), P(e, n);
							var t = o(e);
							for (var r in v) t.style.removeProperty(v[r])
						}

						function u(t) {
							t.stopPropagation();
							var e = t.originalEvent || t,
								n = e.$manualTimeStamp || e.timeStamp || Date.now(),
								i = parseFloat(e.elapsedTime.toFixed(H));
							Math.max(n - I, 0) >= D && i >= O && r()
						}
						var c = o(e),
							h = e.data(z);
						if (-1 == c.getAttribute("class").indexOf(n) || !h) return void r();
						var d = "",
							p = "";
						f(n.split(" "), function(t, e) {
							var n = (e > 0 ? " " : "") + t;
							d += n + "-active", p += n + "-pending"
						});
						var g = "",
							v = [],
							_ = h.itemIndex,
							$ = h.stagger,
							b = 0;
						if (_ > 0) {
							var w = 0;
							$.transitionDelay > 0 && 0 === $.transitionDuration && (w = $.transitionDelay * _);
							var S = 0;
							$.animationDelay > 0 && 0 === $.animationDuration && (S = $.animationDelay * _, v.push(j + "animation-play-state")), b = Math.round(100 * Math.max(w, S)) / 100
						}
						b || (l.addClass(e, d), h.blockTransition && x(c, !1));
						var C = h.cacheKey + " " + d,
							k = y(e, C),
							O = Math.max(k.transitionDuration, k.animationDuration);
						if (0 === O) return l.removeClass(e, d), P(e, n), void r();
						!b && i && (k.transitionDuration || (e.css("transition", k.animationDuration + "s linear all"), v.push("transition")), e.css(i));
						var A = Math.max(k.transitionDelay, k.animationDelay),
							D = A * U;
						if (v.length > 0) {
							var N = c.getAttribute("style") || "";
							";" !== N.charAt(N.length - 1) && (N += ";"), c.setAttribute("style", N + " " + g)
						}
						var R, I = Date.now(),
							q = M + " " + E,
							F = (A + O) * Y,
							L = (b + F) * U;
						return b > 0 && (l.addClass(e, p), R = a(function() {
							R = null, k.transitionDuration > 0 && x(c, !1), k.animationDuration > 0 && T(c, !1), l.addClass(e, d), l.removeClass(e, p), i && (0 === k.transitionDuration && e.css("transition", k.animationDuration + "s linear all"), e.css(i), v.push("transition"))
						}, b * U, !1)), e.on(q, u), h.closeAnimationFns.push(function() {
							s(), r()
						}), h.running++, m(e, L), s
					}

					function x(t, e) {
						t.style[A + I] = e ? "none" : ""
					}

					function T(t, e) {
						t.style[D + L] = e ? "paused" : ""
					}

					function S(t, e, n, r) {
						return b(t, e, n, r) ? function(t) {
							t && P(e, n)
						} : void 0
					}

					function C(t, e, n, r, i) {
						return e.data(z) ? w(t, e, n, r, i) : (P(e, n), void r())
					}

					function k(t, e, n, r, i) {
						var o = S(t, e, n, i.from);
						if (!o) return u(), void r();
						var a = o;
						return h(e, function() {
							a = C(t, e, n, r, i.to)
						}),
						function(t) {
							(a || c)(t)
						}
					}

					function P(t, e) {
						l.removeClass(t, e);
						var n = t.data(z);
						n && (n.running && n.running--, n.running && 0 !== n.running || t.removeData(z))
					}

					function O(t, e) {
						var n = "";
						return t = d(t) ? t : t.split(/\s+/), f(t, function(t, r) {
							t && t.length > 0 && (n += (r > 0 ? " " : "") + t + e)
						}), n
					}
					var A, E, D, M, j = "";
					t.ontransitionend === n && t.onwebkittransitionend !== n ? (j = "-webkit-", A = "WebkitTransition", E = "webkitTransitionEnd transitionend") : (A = "transition", E = "transitionend"), t.onanimationend === n && t.onwebkitanimationend !== n ? (j = "-webkit-", D = "WebkitAnimation", M = "webkitAnimationEnd animationend") : (D = "animation", M = "animationend");
					var N, R = "Duration",
						I = "Property",
						q = "Delay",
						F = "IterationCount",
						L = "PlayState",
						V = "$$ngAnimateKey",
						z = "$$ngAnimateCSS3Data",
						H = 3,
						Y = 1.5,
						U = 1e3,
						W = {}, B = 0,
						X = [],
						Q = null,
						G = 0,
						Z = [];
					return {
						animate: function(t, e, n, r, i, o) {
							return o = o || {}, o.from = n, o.to = r, k("animate", t, e, i, o)
						},
						enter: function(t, e, n) {
							return n = n || {}, k("enter", t, "ng-enter", e, n)
						},
						leave: function(t, e, n) {
							return n = n || {}, k("leave", t, "ng-leave", e, n)
						},
						move: function(t, e, n) {
							return n = n || {}, k("move", t, "ng-move", e, n)
						},
						beforeSetClass: function(t, e, n, r, i) {
							i = i || {};
							var o = O(n, "-remove") + " " + O(e, "-add"),
								a = S("setClass", t, o, i.from);
							return a ? (h(t, r), a) : (u(), void r())
						},
						beforeAddClass: function(t, e, n, r) {
							r = r || {};
							var i = S("addClass", t, O(e, "-add"), r.from);
							return i ? (h(t, n), i) : (u(), void n())
						},
						beforeRemoveClass: function(t, e, n, r) {
							r = r || {};
							var i = S("removeClass", t, O(e, "-remove"), r.from);
							return i ? (h(t, n), i) : (u(), void n())
						},
						setClass: function(t, e, n, r, i) {
							i = i || {}, n = O(n, "-remove"), e = O(e, "-add");
							var o = n + " " + e;
							return C("setClass", t, o, r, i.to)
						},
						addClass: function(t, e, n, r) {
							return r = r || {}, C("addClass", t, O(e, "-add"), n, r.to)
						},
						removeClass: function(t, e, n, r) {
							return r = r || {}, C("removeClass", t, O(e, "-remove"), n, r.to)
						}
					}
				}
			])
		}
	])
}(window, window.angular),
function(t, e) {
	"use strict";

	function n() {
		this.$get = ["$$sanitizeUri",
			function(t) {
				return function(e) {
					var n = [];
					return o(e, u(n, function(e, n) {
						return !/^unsafe/.test(t(e, n))
					})), n.join("")
				}
			}
		]
	}

	function r(t) {
		var n = [],
			r = u(n, e.noop);
		return r.chars(t), n.join("")
	}

	function i(t) {
		var e, n = {}, r = t.split(",");
		for (e = 0; e < r.length; e++) n[r[e]] = !0;
		return n
	}

	function o(t, n) {
		function r(t, r, o, s) {
			if (r = e.lowercase(r), T[r])
				for (; _.last() && S[_.last()];) i("", _.last());
			x[r] && _.last() == r && i("", r), s = $[r] || !! s, s || _.push(r);
			var u = {};
			o.replace(h, function(t, e, n, r, i) {
				var o = n || r || i || "";
				u[e] = a(o)
			}), n.start && n.start(r, u, s)
		}

		function i(t, r) {
			var i, o = 0;
			if (r = e.lowercase(r))
				for (o = _.length - 1; o >= 0 && _[o] != r; o--);
			if (o >= 0) {
				for (i = _.length - 1; i >= o; i--) n.end && n.end(_[i]);
				_.length = o
			}
		}
		"string" != typeof t && (t = null === t || "undefined" == typeof t ? "" : "" + t);
		var o, s, u, y, _ = [],
			b = t;
		for (_.last = function() {
			return _[_.length - 1]
		}; t;) {
			if (y = "", s = !0, _.last() && k[_.last()] ? (t = t.replace(new RegExp("(.*)<\\s*\\/\\s*" + _.last() + "[^>]*>", "i"), function(t, e) {
				return e = e.replace(m, "$1").replace(v, "$1"), n.chars && n.chars(a(e)), ""
			}), i("", _.last())) : (0 === t.indexOf("<!--") ? (o = t.indexOf("--", 4), o >= 0 && t.lastIndexOf("-->", o) === o && (n.comment && n.comment(t.substring(4, o)), t = t.substring(o + 3), s = !1)) : g.test(t) ? (u = t.match(g), u && (t = t.replace(u[0], ""), s = !1)) : p.test(t) ? (u = t.match(f), u && (t = t.substring(u[0].length), u[0].replace(f, i), s = !1)) : d.test(t) && (u = t.match(c), u ? (u[4] && (t = t.substring(u[0].length), u[0].replace(c, r)), s = !1) : (y += "<", t = t.substring(1))), s && (o = t.indexOf("<"), y += 0 > o ? t : t.substring(0, o), t = 0 > o ? "" : t.substring(o), n.chars && n.chars(a(y)))), t == b) throw l("badparse", "The sanitizer was unable to parse the following block of html: {0}", t);
			b = t
		}
		i()
	}

	function a(t) {
		if (!t) return "";
		var e = j.exec(t),
			n = e[1],
			r = e[3],
			i = e[2];
		return i && (M.innerHTML = i.replace(/</g, "&lt;"), i = "textContent" in M ? M.textContent : M.innerText), n + i + r
	}

	function s(t) {
		return t.replace(/&/g, "&amp;").replace(y, function(t) {
			var e = t.charCodeAt(0),
				n = t.charCodeAt(1);
			return "&#" + (1024 * (e - 55296) + (n - 56320) + 65536) + ";"
		}).replace(_, function(t) {
			return "&#" + t.charCodeAt(0) + ";"
		}).replace(/</g, "&lt;").replace(/>/g, "&gt;")
	}

	function u(t, n) {
		var r = !1,
			i = e.bind(t, t.push);
		return {
			start: function(t, o, a) {
				t = e.lowercase(t), !r && k[t] && (r = t), r || P[t] !== !0 || (i("<"), i(t), e.forEach(o, function(r, o) {
					var a = e.lowercase(o),
						u = "img" === t && "src" === a || "background" === a;
					D[a] !== !0 || O[a] === !0 && !n(r, u) || (i(" "), i(o), i('="'), i(s(r)), i('"'))
				}), i(a ? "/>" : ">"))
			},
			end: function(t) {
				t = e.lowercase(t), r || P[t] !== !0 || (i("</"), i(t), i(">")), t == r && (r = !1)
			},
			chars: function(t) {
				r || i(s(t))
			}
		}
	}
	var l = e.$$minErr("$sanitize"),
		c = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
		f = /^<\/\s*([\w:-]+)[^>]*>/,
		h = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
		d = /^</,
		p = /^<\//,
		m = /<!--(.*?)-->/g,
		g = /<!DOCTYPE([^>]*?)>/i,
		v = /<!\[CDATA\[(.*?)]]>/g,
		y = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
		_ = /([^\#-~| |!])/g,
		$ = i("area,br,col,hr,img,wbr"),
		b = i("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
		w = i("rp,rt"),
		x = e.extend({}, w, b),
		T = e.extend({}, b, i("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
		S = e.extend({}, w, i("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
		C = i("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),
		k = i("script,style"),
		P = e.extend({}, $, T, S, x, C),
		O = i("background,cite,href,longdesc,src,usemap,xlink:href"),
		A = i("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),
		E = i("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),
		D = e.extend({}, O, E, A),
		M = document.createElement("pre"),
		j = /^(\s*)([\s\S]*?)(\s*)$/;
	e.module("ngSanitize", []).provider("$sanitize", n), e.module("ngSanitize").filter("linky", ["$sanitize",
		function(t) {
			var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,
				i = /^mailto:/;
			return function(o, a) {
				function s(t) {
					t && d.push(r(t))
				}

				function u(t, n) {
					d.push("<a "), e.isDefined(a) && d.push('target="', a, '" '), d.push('href="', t.replace(/"/g, "&quot;"), '">'), s(n), d.push("</a>")
				}
				if (!o) return o;
				for (var l, c, f, h = o, d = []; l = h.match(n);) c = l[0], l[2] || l[4] || (c = (l[3] ? "http://" : "mailto:") + c), f = l.index, s(h.substr(0, f)), u(c, l[0].replace(i, "")), h = h.substring(f + l[0].length);
				return s(h), t(d.join(""))
			}
		}
	])
}(window, window.angular),
function() {
	"use strict";

	function t() {
		return {}
	}

	function e(t) {
		t.interceptors.push("httpInterceptor")
	}

	function n(t, e, n, r) {
		function i() {
			return '<div id="ngplus-overlay-container" class="{{ngplusOverlayAnimation}}" data-ng-show="!!show"><div class="ngplus-overlay-background"></div><div id="ngplus-overlay-content" class="ngplus-overlay-content" data-ng-transclude></div></div>'
		}

		function o(i) {
			function o() {
				a(), window.jQuery && s(), m = document.getElementById("ngplus-overlay-container")
			}

			function a() {
				r.request = function(e) {
					return u(), e || t.when(e)
				}, r.response = function(e) {
					return l(), e || t.when(e)
				}, r.responseError = function(e) {
					return l(), t.reject(e)
				}
			}

			function s() {
				$(document).ajaxStart(function() {
					u()
				}), $(document).ajaxComplete(function() {
					l()
				}), $(document).ajaxError(function() {
					l()
				})
			}

			function u() {
				g.push({}), 1 == g.length && (v = e(function() {
					g.length && c()
				}, d))
			}

			function l() {
				g.pop(), 0 == g.length && (y = e(function() {
					0 == g.length && (f(), y && e.cancel(y))
				}, p))
			}

			function c() {
				var t = 0,
					e = 0;
				n.innerWidth ? (t = n.innerWidth, e = n.innerHeight) : 0 != document.documentElement.clientWidth ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : (t = document.body.clientWidth, e = document.body.clientHeight);
				var r = document.getElementById("ngplus-overlay-content"),
					o = parseInt(_(r, "width").replace("px", "")),
					a = parseInt(_(r, "height").replace("px", ""));
				r.style.top = e / 2 - a / 2 + "px", r.style.left = t / 2 - o / 2 + "px", i.show = !0
			}

			function f() {
				v && e.cancel(v), i.show = !1
			}
			var h = {
				overlayDelayIn: 500,
				overlayDelayOut: 500
			}, d = i.ngplusOverlayDelayIn ? i.ngplusOverlayDelayIn : h.overlayDelayIn,
				p = i.ngplusOverlayDelayOut ? i.ngplusOverlayDelayOut : h.overlayDelayOut,
				m = null,
				g = [],
				v = null,
				y = null;
			o();
			var _ = function() {
				var t = null;
				return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle : "undefined" != typeof document.body.currentStyle && (t = function(t) {
					return t.currentStyle
				}),
				function(e, n) {
					return t(e, null)[n]
				}
			}()
		}
		var a = {
			scope: {
				ngplusOverlayDelayIn: "@",
				ngplusOverlayDelayOut: "@",
				ngplusOverlayAnimation: "@"
			},
			restrict: "EA",
			transclude: !0,
			template: i(),
			link: o
		};
		return a
	}
	var r = angular.module("ngplus", []);
	r.factory("httpInterceptor", t), r.config(["$httpProvider", e]), r.directive("ngplusOverlay", ["$q", "$timeout", "$window", "httpInterceptor", n])
}(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(t, e, n, r, i) {
		return jQuery.easing[jQuery.easing.def](t, e, n, r, i)
	},
	easeInQuad: function(t, e, n, r, i) {
		return r * (e /= i) * e + n
	},
	easeOutQuad: function(t, e, n, r, i) {
		return -r * (e /= i) * (e - 2) + n
	},
	easeInOutQuad: function(t, e, n, r, i) {
		return (e /= i / 2) < 1 ? r / 2 * e * e + n : -r / 2 * (--e * (e - 2) - 1) + n
	},
	easeInCubic: function(t, e, n, r, i) {
		return r * (e /= i) * e * e + n
	},
	easeOutCubic: function(t, e, n, r, i) {
		return r * ((e = e / i - 1) * e * e + 1) + n
	},
	easeInOutCubic: function(t, e, n, r, i) {
		return (e /= i / 2) < 1 ? r / 2 * e * e * e + n : r / 2 * ((e -= 2) * e * e + 2) + n
	},
	easeInQuart: function(t, e, n, r, i) {
		return r * (e /= i) * e * e * e + n
	},
	easeOutQuart: function(t, e, n, r, i) {
		return -r * ((e = e / i - 1) * e * e * e - 1) + n
	},
	easeInOutQuart: function(t, e, n, r, i) {
		return (e /= i / 2) < 1 ? r / 2 * e * e * e * e + n : -r / 2 * ((e -= 2) * e * e * e - 2) + n
	},
	easeInQuint: function(t, e, n, r, i) {
		return r * (e /= i) * e * e * e * e + n
	},
	easeOutQuint: function(t, e, n, r, i) {
		return r * ((e = e / i - 1) * e * e * e * e + 1) + n
	},
	easeInOutQuint: function(t, e, n, r, i) {
		return (e /= i / 2) < 1 ? r / 2 * e * e * e * e * e + n : r / 2 * ((e -= 2) * e * e * e * e + 2) + n
	},
	easeInSine: function(t, e, n, r, i) {
		return -r * Math.cos(e / i * (Math.PI / 2)) + r + n
	},
	easeOutSine: function(t, e, n, r, i) {
		return r * Math.sin(e / i * (Math.PI / 2)) + n
	},
	easeInOutSine: function(t, e, n, r, i) {
		return -r / 2 * (Math.cos(Math.PI * e / i) - 1) + n
	},
	easeInExpo: function(t, e, n, r, i) {
		return 0 == e ? n : r * Math.pow(2, 10 * (e / i - 1)) + n
	},
	easeOutExpo: function(t, e, n, r, i) {
		return e == i ? n + r : r * (-Math.pow(2, -10 * e / i) + 1) + n
	},
	easeInOutExpo: function(t, e, n, r, i) {
		return 0 == e ? n : e == i ? n + r : (e /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + n : r / 2 * (-Math.pow(2, -10 * --e) + 2) + n
	},
	easeInCirc: function(t, e, n, r, i) {
		return -r * (Math.sqrt(1 - (e /= i) * e) - 1) + n
	},
	easeOutCirc: function(t, e, n, r, i) {
		return r * Math.sqrt(1 - (e = e / i - 1) * e) + n
	},
	easeInOutCirc: function(t, e, n, r, i) {
		return (e /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + n : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
	},
	easeInElastic: function(t, e, n, r, i) {
		var o = 1.70158,
			a = 0,
			s = r;
		if (0 == e) return n;
		if (1 == (e /= i)) return n + r;
		if (a || (a = .3 * i), s < Math.abs(r)) {
			s = r;
			var o = a / 4
		} else var o = a / (2 * Math.PI) * Math.asin(r / s);
		return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * i - o) * Math.PI / a)) + n
	},
	easeOutElastic: function(t, e, n, r, i) {
		var o = 1.70158,
			a = 0,
			s = r;
		if (0 == e) return n;
		if (1 == (e /= i)) return n + r;
		if (a || (a = .3 * i), s < Math.abs(r)) {
			s = r;
			var o = a / 4
		} else var o = a / (2 * Math.PI) * Math.asin(r / s);
		return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * i - o) * Math.PI / a) + r + n
	},
	easeInOutElastic: function(t, e, n, r, i) {
		var o = 1.70158,
			a = 0,
			s = r;
		if (0 == e) return n;
		if (2 == (e /= i / 2)) return n + r;
		if (a || (a = .3 * i * 1.5), s < Math.abs(r)) {
			s = r;
			var o = a / 4
		} else var o = a / (2 * Math.PI) * Math.asin(r / s);
		return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * i - o) * Math.PI / a) + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * i - o) * Math.PI / a) * .5 + r + n
	},
	easeInBack: function(t, e, n, r, i, o) {
		return void 0 == o && (o = 1.70158), r * (e /= i) * e * ((o + 1) * e - o) + n
	},
	easeOutBack: function(t, e, n, r, i, o) {
		return void 0 == o && (o = 1.70158), r * ((e = e / i - 1) * e * ((o + 1) * e + o) + 1) + n
	},
	easeInOutBack: function(t, e, n, r, i, o) {
		return void 0 == o && (o = 1.70158), (e /= i / 2) < 1 ? r / 2 * e * e * (((o *= 1.525) + 1) * e - o) + n : r / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
	},
	easeInBounce: function(t, e, n, r, i) {
		return r - jQuery.easing.easeOutBounce(t, i - e, 0, r, i) + n
	},
	easeOutBounce: function(t, e, n, r, i) {
		return (e /= i) < 1 / 2.75 ? 7.5625 * r * e * e + n : 2 / 2.75 > e ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
	},
	easeInOutBounce: function(t, e, n, r, i) {
		return i / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, r, i) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - i, 0, r, i) + .5 * r + n
	}
}), ! function(t) {
	function e(t) {
		var e = t.length,
			r = n.type(t);
		return "function" === r || n.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}
	if (!t.jQuery) {
		var n = function(t, e) {
			return new n.fn.init(t, e)
		};
		n.isWindow = function(t) {
			return null != t && t == t.window
		}, n.type = function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[a.call(t)] || "object" : typeof t
		}, n.isArray = Array.isArray || function(t) {
			return "array" === n.type(t)
		}, n.isPlainObject = function(t) {
			var e;
			if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t)) return !1;
			try {
				if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf")) return !1
			} catch (r) {
				return !1
			}
			for (e in t);
			return void 0 === e || o.call(t, e)
		}, n.each = function(t, n, r) {
			var i, o = 0,
				a = t.length,
				s = e(t);
			if (r) {
				if (s)
					for (; a > o && (i = n.apply(t[o], r), i !== !1); o++);
				else
					for (o in t)
						if (i = n.apply(t[o], r), i === !1) break
			} else if (s)
				for (; a > o && (i = n.call(t[o], o, t[o]), i !== !1); o++);
			else
				for (o in t)
					if (i = n.call(t[o], o, t[o]), i === !1) break; return t
		}, n.data = function(t, e, i) {
			if (void 0 === i) {
				var o = t[n.expando],
					a = o && r[o];
				if (void 0 === e) return a;
				if (a && e in a) return a[e]
			} else if (void 0 !== e) {
				var o = t[n.expando] || (t[n.expando] = ++n.uuid);
				return r[o] = r[o] || {}, r[o][e] = i, i
			}
		}, n.removeData = function(t, e) {
			var i = t[n.expando],
				o = i && r[i];
			o && n.each(e, function(t, e) {
				delete o[e]
			})
		}, n.extend = function() {
			var t, e, r, i, o, a, s = arguments[0] || {}, u = 1,
				l = arguments.length,
				c = !1;
			for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" != typeof s && "function" !== n.type(s) && (s = {}), u === l && (s = this, u--); l > u; u++)
				if (null != (o = arguments[u]))
					for (i in o) t = s[i], r = o[i], s !== r && (c && r && (n.isPlainObject(r) || (e = n.isArray(r))) ? (e ? (e = !1, a = t && n.isArray(t) ? t : []) : a = t && n.isPlainObject(t) ? t : {}, s[i] = n.extend(c, a, r)) : void 0 !== r && (s[i] = r));
			return s
		}, n.queue = function(t, r, i) {
			function o(t, n) {
				var r = n || [];
				return null != t && (e(Object(t)) ? ! function(t, e) {
					for (var n = +e.length, r = 0, i = t.length; n > r;) t[i++] = e[r++];
					if (n !== n)
						for (; void 0 !== e[r];) t[i++] = e[r++];
					return t.length = i, t
				}(r, "string" == typeof t ? [t] : t) : [].push.call(r, t)), r
			}
			if (t) {
				r = (r || "fx") + "queue";
				var a = n.data(t, r);
				return i ? (!a || n.isArray(i) ? a = n.data(t, r, o(i)) : a.push(i), a) : a || []
			}
		}, n.dequeue = function(t, e) {
			n.each(t.nodeType ? [t] : t, function(t, r) {
				e = e || "fx";
				var i = n.queue(r, e),
					o = i.shift();
				"inprogress" === o && (o = i.shift()), o && ("fx" === e && i.unshift("inprogress"), o.call(r, function() {
					n.dequeue(r, e)
				}))
			})
		}, n.fn = n.prototype = {
			init: function(t) {
				if (t.nodeType) return this[0] = t, this;
				throw new Error("Not a DOM node.")
			},
			offset: function() {
				var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
					top: 0,
					left: 0
				};
				return {
					top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				}
			},
			position: function() {
				function t() {
					for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
					return t || document
				}
				var e = this[0],
					t = t.apply(e),
					r = this.offset(),
					i = /^(?:body|html)$/i.test(t.nodeName) ? {
						top: 0,
						left: 0
					} : n(t).offset();
				return r.top -= parseFloat(e.style.marginTop) || 0, r.left -= parseFloat(e.style.marginLeft) || 0, t.style && (i.top += parseFloat(t.style.borderTopWidth) || 0, i.left += parseFloat(t.style.borderLeftWidth) || 0), {
					top: r.top - i.top,
					left: r.left - i.left
				}
			}
		};
		var r = {};
		n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
		for (var i = {}, o = i.hasOwnProperty, a = i.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), u = 0; u < s.length; u++) i["[object " + s[u] + "]"] = s[u].toLowerCase();
		n.fn.init.prototype = n.fn, t.Velocity = {
			Utilities: n
		}
	}
}(window),
function(t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}(function() {
	return function(t, e, n, r) {
		function i(t) {
			for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
				var i = t[e];
				i && r.push(i)
			}
			return r
		}

		function o(t) {
			return m.isWrapped(t) ? t = [].slice.call(t) : m.isNode(t) && (t = [t]), t
		}

		function a(t) {
			var e = h.data(t, "velocity");
			return null === e ? r : e
		}

		function s(t) {
			return function(e) {
				return Math.round(e * t) * (1 / t)
			}
		}

		function u(t, n, r, i) {
			function o(t, e) {
				return 1 - 3 * e + 3 * t
			}

			function a(t, e) {
				return 3 * e - 6 * t
			}

			function s(t) {
				return 3 * t
			}

			function u(t, e, n) {
				return ((o(e, n) * t + a(e, n)) * t + s(e)) * t
			}

			function l(t, e, n) {
				return 3 * o(e, n) * t * t + 2 * a(e, n) * t + s(e)
			}

			function c(e, n) {
				for (var i = 0; m > i; ++i) {
					var o = l(n, t, r);
					if (0 === o) return n;
					var a = u(n, t, r) - e;
					n -= a / o
				}
				return n
			}

			function f() {
				for (var e = 0; _ > e; ++e) x[e] = u(e * $, t, r)
			}

			function h(e, n, i) {
				var o, a, s = 0;
				do a = n + (i - n) / 2, o = u(a, t, r) - e, o > 0 ? i = a : n = a; while (Math.abs(o) > v && ++s < y);
				return a
			}

			function d(e) {
				for (var n = 0, i = 1, o = _ - 1; i != o && x[i] <= e; ++i) n += $;
				--i;
				var a = (e - x[i]) / (x[i + 1] - x[i]),
					s = n + a * $,
					u = l(s, t, r);
				return u >= g ? c(e, s) : 0 == u ? s : h(e, n, n + $)
			}

			function p() {
				T = !0, (t != n || r != i) && f()
			}
			var m = 4,
				g = .001,
				v = 1e-7,
				y = 10,
				_ = 11,
				$ = 1 / (_ - 1),
				b = "Float32Array" in e;
			if (4 !== arguments.length) return !1;
			for (var w = 0; 4 > w; ++w)
				if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
			t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
			var x = b ? new Float32Array(_) : new Array(_),
				T = !1,
				S = function(e) {
					return T || p(), t === n && r === i ? e : 0 === e ? 0 : 1 === e ? 1 : u(d(e), n, i)
				};
			S.getControlPoints = function() {
				return [{
					x: t,
					y: n
				}, {
					x: r,
					y: i
				}]
			};
			var C = "generateBezier(" + [t, n, r, i] + ")";
			return S.toString = function() {
				return C
			}, S
		}

		function l(t, e) {
			var n = t;
			return m.isString(t) ? _.Easings[t] || (n = !1) : n = m.isArray(t) && 1 === t.length ? s.apply(null, t) : m.isArray(t) && 2 === t.length ? $.apply(null, t.concat([e])) : m.isArray(t) && 4 === t.length ? u.apply(null, t) : !1, n === !1 && (n = _.Easings[_.defaults.easing] ? _.defaults.easing : y), n
		}

		function c(t) {
			if (t)
				for (var e = (new Date).getTime(), n = 0, i = _.State.calls.length; i > n; n++)
					if (_.State.calls[n]) {
						var o = _.State.calls[n],
							s = o[0],
							u = o[2],
							l = o[3],
							d = !! l;
						l || (l = _.State.calls[n][3] = e - 16);
						for (var p = Math.min((e - l) / u.duration, 1), g = 0, v = s.length; v > g; g++) {
							var y = s[g],
								$ = y.element;
							if (a($)) {
								var w = !1;
								if (u.display !== r && null !== u.display && "none" !== u.display) {
									if ("flex" === u.display) {
										var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
										h.each(T, function(t, e) {
											b.setPropertyValue($, "display", e)
										})
									}
									b.setPropertyValue($, "display", u.display)
								}
								u.visibility !== r && "hidden" !== u.visibility && b.setPropertyValue($, "visibility", u.visibility);
								for (var S in y)
									if ("element" !== S) {
										var C, k = y[S],
											P = m.isString(k.easing) ? _.Easings[k.easing] : k.easing;
										if (1 === p) C = k.endValue;
										else if (C = k.startValue + (k.endValue - k.startValue) * P(p), !d && C === k.currentValue) continue;
										if (k.currentValue = C, b.Hooks.registered[S]) {
											var O = b.Hooks.getRoot(S),
												A = a($).rootPropertyValueCache[O];
											A && (k.rootPropertyValue = A)
										}
										var E = b.setPropertyValue($, S, k.currentValue + (0 === parseFloat(C) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
										b.Hooks.registered[S] && (a($).rootPropertyValueCache[O] = b.Normalizations.registered[O] ? b.Normalizations.registered[O]("extract", null, E[1]) : E[1]), "transform" === E[0] && (w = !0)
									}
								u.mobileHA && a($).transformCache.translate3d === r && (a($).transformCache.translate3d = "(0px, 0px, 0px)", w = !0), w && b.flushTransformCache($)
							}
						}
						u.display !== r && "none" !== u.display && (_.State.calls[n][2].display = !1), u.visibility !== r && "hidden" !== u.visibility && (_.State.calls[n][2].visibility = !1), u.progress && u.progress.call(o[1], o[1], p, Math.max(0, l + u.duration - e), l), 1 === p && f(n)
					}
			_.State.isTicking && x(c)
		}

		function f(t, e) {
			if (!_.State.calls[t]) return !1;
			for (var n = _.State.calls[t][0], i = _.State.calls[t][1], o = _.State.calls[t][2], s = _.State.calls[t][4], u = !1, l = 0, c = n.length; c > l; l++) {
				var f = n[l].element;
				if (e || o.loop || ("none" === o.display && b.setPropertyValue(f, "display", o.display), "hidden" === o.visibility && b.setPropertyValue(f, "visibility", o.visibility)), o.loop !== !0 && (h.queue(f)[1] === r || !/\.velocityQueueEntryFlag/i.test(h.queue(f)[1])) && a(f)) {
					a(f).isAnimating = !1, a(f).rootPropertyValueCache = {};
					var d = !1;
					h.each(b.Lists.transforms3D, function(t, e) {
						var n = /^scale/.test(e) ? 1 : 0,
							i = a(f).transformCache[e];
						a(f).transformCache[e] !== r && new RegExp("^\\(" + n + "[^.]").test(i) && (d = !0, delete a(f).transformCache[e])
					}), o.mobileHA && (d = !0, delete a(f).transformCache.translate3d), d && b.flushTransformCache(f), b.Values.removeClass(f, "velocity-animating")
				}
				if (!e && o.complete && !o.loop && l === c - 1) try {
					o.complete.call(i, i)
				} catch (p) {
					setTimeout(function() {
						throw p
					}, 1)
				}
				s && o.loop !== !0 && s(i), o.loop !== !0 || e || (h.each(a(f).tweensContainer, function(t, e) {
					/^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360)
				}), _(f, "reverse", {
					loop: !0,
					delay: o.delay
				})), o.queue !== !1 && h.dequeue(f, o.queue)
			}
			_.State.calls[t] = !1;
			for (var m = 0, g = _.State.calls.length; g > m; m++)
				if (_.State.calls[m] !== !1) {
					u = !0;
					break
				}
			u === !1 && (_.State.isTicking = !1, delete _.State.calls, _.State.calls = [])
		}
		var h, d = function() {
				if (n.documentMode) return n.documentMode;
				for (var t = 7; t > 4; t--) {
					var e = n.createElement("div");
					if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
				}
				return r
			}(),
			p = function() {
				var t = 0;
				return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
					var n, r = (new Date).getTime();
					return n = Math.max(0, 16 - (r - t)), t = r + n, setTimeout(function() {
						e(r + n)
					}, n)
				}
			}(),
			m = {
				isString: function(t) {
					return "string" == typeof t
				},
				isArray: Array.isArray || function(t) {
					return "[object Array]" === Object.prototype.toString.call(t)
				},
				isFunction: function(t) {
					return "[object Function]" === Object.prototype.toString.call(t)
				},
				isNode: function(t) {
					return t && t.nodeType
				},
				isNodeList: function(t) {
					return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== r && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
				},
				isWrapped: function(t) {
					return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
				},
				isSVG: function(t) {
					return e.SVGElement && t instanceof e.SVGElement
				},
				isEmptyObject: function(t) {
					for (var e in t) return !1;
					return !0
				}
			}, g = !1;
		if (t.fn && t.fn.jquery ? (h = t, g = !0) : h = e.Velocity.Utilities, 8 >= d && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
		if (7 >= d) return void(jQuery.fn.velocity = jQuery.fn.animate);
		var v = 400,
			y = "swing",
			_ = {
				State: {
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
					isAndroid: /Android/i.test(navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
					isChrome: e.chrome,
					isFirefox: /Firefox/i.test(navigator.userAgent),
					prefixElement: n.createElement("div"),
					prefixMatches: {},
					scrollAnchor: null,
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					isTicking: !1,
					calls: []
				},
				CSS: {},
				Utilities: h,
				Redirects: {},
				Easings: {},
				Promise: e.Promise,
				defaults: {
					queue: "",
					duration: v,
					easing: y,
					begin: r,
					complete: r,
					progress: r,
					display: r,
					visibility: r,
					loop: !1,
					delay: !1,
					mobileHA: !0,
					_cacheValues: !0
				},
				init: function(t) {
					h.data(t, "velocity", {
						isSVG: m.isSVG(t),
						isAnimating: !1,
						computedStyle: null,
						tweensContainer: null,
						rootPropertyValueCache: {},
						transformCache: {}
					})
				},
				hook: null,
				mock: !1,
				version: {
					major: 1,
					minor: 1,
					patch: 0
				},
				debug: !1
			};
		e.pageYOffset !== r ? (_.State.scrollAnchor = e, _.State.scrollPropertyLeft = "pageXOffset", _.State.scrollPropertyTop = "pageYOffset") : (_.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, _.State.scrollPropertyLeft = "scrollLeft", _.State.scrollPropertyTop = "scrollTop");
		var $ = function() {
			function t(t) {
				return -t.tension * t.x - t.friction * t.v
			}

			function e(e, n, r) {
				var i = {
					x: e.x + r.dx * n,
					v: e.v + r.dv * n,
					tension: e.tension,
					friction: e.friction
				};
				return {
					dx: i.v,
					dv: t(i)
				}
			}

			function n(n, r) {
				var i = {
					dx: n.v,
					dv: t(n)
				}, o = e(n, .5 * r, i),
					a = e(n, .5 * r, o),
					s = e(n, r, a),
					u = 1 / 6 * (i.dx + 2 * (o.dx + a.dx) + s.dx),
					l = 1 / 6 * (i.dv + 2 * (o.dv + a.dv) + s.dv);
				return n.x = n.x + u * r, n.v = n.v + l * r, n
			}
			return function r(t, e, i) {
				var o, a, s, u = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					}, l = [0],
					c = 0,
					f = 1e-4,
					h = .016;
				for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, i = i || null, u.tension = t, u.friction = e, o = null !== i, o ? (c = r(t, e), a = c / i * h) : a = h; s = n(s || u, a), l.push(1 + s.x), c += 16, Math.abs(s.x) > f && Math.abs(s.v) > f;);
				return o ? function(t) {
					return l[t * (l.length - 1) | 0]
				} : c
			}
		}();
		_.Easings = {
			linear: function(t) {
				return t
			},
			swing: function(t) {
				return .5 - Math.cos(t * Math.PI) / 2
			},
			spring: function(t) {
				return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
			}
		}, h.each([
			["ease", [.25, .1, .25, 1]],
			["ease-in", [.42, 0, 1, 1]],
			["ease-out", [0, 0, .58, 1]],
			["ease-in-out", [.42, 0, .58, 1]],
			["easeInSine", [.47, 0, .745, .715]],
			["easeOutSine", [.39, .575, .565, 1]],
			["easeInOutSine", [.445, .05, .55, .95]],
			["easeInQuad", [.55, .085, .68, .53]],
			["easeOutQuad", [.25, .46, .45, .94]],
			["easeInOutQuad", [.455, .03, .515, .955]],
			["easeInCubic", [.55, .055, .675, .19]],
			["easeOutCubic", [.215, .61, .355, 1]],
			["easeInOutCubic", [.645, .045, .355, 1]],
			["easeInQuart", [.895, .03, .685, .22]],
			["easeOutQuart", [.165, .84, .44, 1]],
			["easeInOutQuart", [.77, 0, .175, 1]],
			["easeInQuint", [.755, .05, .855, .06]],
			["easeOutQuint", [.23, 1, .32, 1]],
			["easeInOutQuint", [.86, 0, .07, 1]],
			["easeInExpo", [.95, .05, .795, .035]],
			["easeOutExpo", [.19, 1, .22, 1]],
			["easeInOutExpo", [1, 0, 0, 1]],
			["easeInCirc", [.6, .04, .98, .335]],
			["easeOutCirc", [.075, .82, .165, 1]],
			["easeInOutCirc", [.785, .135, .15, .86]]
		], function(t, e) {
			_.Easings[e[0]] = u.apply(null, e[1])
		});
		var b = _.CSS = {
			RegEx: {
				isHex: /^#([A-f\d]{3}){1,2}$/i,
				valueUnwrap: /^[A-z]+\((.*)\)$/i,
				wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
				valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
			},
			Lists: {
				colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
				transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
				transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
			},
			Hooks: {
				templates: {
					textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
					boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
					clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
					backgroundPosition: ["X Y", "0% 0%"],
					transformOrigin: ["X Y Z", "50% 50% 0px"],
					perspectiveOrigin: ["X Y", "50% 50%"]
				},
				registered: {},
				register: function() {
					for (var t = 0; t < b.Lists.colors.length; t++) {
						var e = "color" === b.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
						b.Hooks.templates[b.Lists.colors[t]] = ["Red Green Blue Alpha", e]
					}
					var n, r, i;
					if (d)
						for (n in b.Hooks.templates) {
							r = b.Hooks.templates[n], i = r[0].split(" ");
							var o = r[1].match(b.RegEx.valueSplit);
							"Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), b.Hooks.templates[n] = [i.join(" "), o.join(" ")])
						}
					for (n in b.Hooks.templates) {
						r = b.Hooks.templates[n], i = r[0].split(" ");
						for (var t in i) {
							var a = n + i[t],
								s = t;
							b.Hooks.registered[a] = [n, s]
						}
					}
				},
				getRoot: function(t) {
					var e = b.Hooks.registered[t];
					return e ? e[0] : t
				},
				cleanRootPropertyValue: function(t, e) {
					return b.RegEx.valueUnwrap.test(e) && (e = e.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(e) && (e = b.Hooks.templates[t][1]), e
				},
				extractValue: function(t, e) {
					var n = b.Hooks.registered[t];
					if (n) {
						var r = n[0],
							i = n[1];
						return e = b.Hooks.cleanRootPropertyValue(r, e), e.toString().match(b.RegEx.valueSplit)[i]
					}
					return e
				},
				injectValue: function(t, e, n) {
					var r = b.Hooks.registered[t];
					if (r) {
						var i, o, a = r[0],
							s = r[1];
						return n = b.Hooks.cleanRootPropertyValue(a, n), i = n.toString().match(b.RegEx.valueSplit), i[s] = e, o = i.join(" ")
					}
					return n
				}
			},
			Normalizations: {
				registered: {
					clip: function(t, e, n) {
						switch (t) {
							case "name":
								return "clip";
							case "extract":
								var r;
								return b.RegEx.wrappedValueAlreadyExtracted.test(n) ? r = n : (r = n.toString().match(b.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : n), r;
							case "inject":
								return "rect(" + n + ")"
						}
					},
					blur: function(t, e, n) {
						switch (t) {
							case "name":
								return "-webkit-filter";
							case "extract":
								var r = parseFloat(n);
								if (!r && 0 !== r) {
									var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
									r = i ? i[1] : 0
								}
								return r;
							case "inject":
								return parseFloat(n) ? "blur(" + n + ")" : "none"
						}
					},
					opacity: function(t, e, n) {
						if (8 >= d) switch (t) {
							case "name":
								return "filter";
							case "extract":
								var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
								return n = r ? r[1] / 100 : 1;
							case "inject":
								return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
						} else switch (t) {
							case "name":
								return "opacity";
							case "extract":
								return n;
							case "inject":
								return n
						}
					}
				},
				register: function() {
					9 >= d || _.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
					for (var t = 0; t < b.Lists.transformsBase.length; t++)! function() {
						var e = b.Lists.transformsBase[t];
						b.Normalizations.registered[e] = function(t, n, i) {
							switch (t) {
								case "name":
									return "transform";
								case "extract":
									return a(n) === r || a(n).transformCache[e] === r ? /^scale/i.test(e) ? 1 : 0 : a(n).transformCache[e].replace(/[()]/g, "");
								case "inject":
									var o = !1;
									switch (e.substr(0, e.length - 1)) {
										case "translate":
											o = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
											break;
										case "scal":
										case "scale":
											_.State.isAndroid && a(n).transformCache[e] === r && 1 > i && (i = 1), o = !/(\d)$/i.test(i);
											break;
										case "skew":
											o = !/(deg|\d)$/i.test(i);
											break;
										case "rotate":
											o = !/(deg|\d)$/i.test(i)
									}
									return o || (a(n).transformCache[e] = "(" + i + ")"), a(n).transformCache[e]
							}
						}
					}();
					for (var t = 0; t < b.Lists.colors.length; t++)! function() {
						var e = b.Lists.colors[t];
						b.Normalizations.registered[e] = function(t, n, i) {
							switch (t) {
								case "name":
									return e;
								case "extract":
									var o;
									if (b.RegEx.wrappedValueAlreadyExtracted.test(i)) o = i;
									else {
										var a, s = {
												black: "rgb(0, 0, 0)",
												blue: "rgb(0, 0, 255)",
												gray: "rgb(128, 128, 128)",
												green: "rgb(0, 128, 0)",
												red: "rgb(255, 0, 0)",
												white: "rgb(255, 255, 255)"
											};
										/^[A-z]+$/i.test(i) ? a = s[i] !== r ? s[i] : s.black : b.RegEx.isHex.test(i) ? a = "rgb(" + b.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (a = s.black), o = (a || i).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
									}
									return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;
								case "inject":
									return 8 >= d ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
							}
						}
					}()
				}
			},
			Names: {
				camelCase: function(t) {
					return t.replace(/-(\w)/g, function(t, e) {
						return e.toUpperCase()
					})
				},
				SVGAttribute: function(t) {
					var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
					return (d || _.State.isAndroid && !_.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
				},
				prefixCheck: function(t) {
					if (_.State.prefixMatches[t]) return [_.State.prefixMatches[t], !0];
					for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = e.length; r > n; n++) {
						var i;
						if (i = 0 === n ? t : e[n] + t.replace(/^\w/, function(t) {
							return t.toUpperCase()
						}), m.isString(_.State.prefixElement.style[i])) return _.State.prefixMatches[t] = i, [i, !0]
					}
					return [t, !1]
				}
			},
			Values: {
				hexToRgb: function(t) {
					var e, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
						r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
					return t = t.replace(n, function(t, e, n, r) {
						return e + e + n + n + r + r
					}), e = r.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
				},
				isCSSNullValue: function(t) {
					return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
				},
				getUnitType: function(t) {
					return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
				},
				getDisplayType: function(t) {
					var e = t && t.tagName.toString().toLowerCase();
					return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : "block"
				},
				addClass: function(t, e) {
					t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
				},
				removeClass: function(t, e) {
					t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
				}
			},
			getPropertyValue: function(t, n, i, o) {
				function s(t, n) {
					function i() {
						l && b.setPropertyValue(t, "display", "none")
					}
					var u = 0;
					if (8 >= d) u = h.css(t, n);
					else {
						var l = !1;
						if (/^(width|height)$/.test(n) && 0 === b.getPropertyValue(t, "display") && (l = !0, b.setPropertyValue(t, "display", b.Values.getDisplayType(t))), !o) {
							if ("height" === n && "border-box" !== b.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
								var c = t.offsetHeight - (parseFloat(b.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(t, "paddingBottom")) || 0);
								return i(), c
							}
							if ("width" === n && "border-box" !== b.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
								var f = t.offsetWidth - (parseFloat(b.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(t, "paddingRight")) || 0);
								return i(), f
							}
						}
						var p;
						p = a(t) === r ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), (d || _.State.isFirefox) && "borderColor" === n && (n = "borderTopColor"), u = 9 === d && "filter" === n ? p.getPropertyValue(n) : p[n], ("" === u || null === u) && (u = t.style[n]), i()
					} if ("auto" === u && /^(top|right|bottom|left)$/i.test(n)) {
						var m = s(t, "position");
						("fixed" === m || "absolute" === m && /top|left/i.test(n)) && (u = h(t).position()[n] + "px")
					}
					return u
				}
				var u;
				if (b.Hooks.registered[n]) {
					var l = n,
						c = b.Hooks.getRoot(l);
					i === r && (i = b.getPropertyValue(t, b.Names.prefixCheck(c)[0])), b.Normalizations.registered[c] && (i = b.Normalizations.registered[c]("extract", t, i)), u = b.Hooks.extractValue(l, i)
				} else if (b.Normalizations.registered[n]) {
					var f, p;
					f = b.Normalizations.registered[n]("name", t), "transform" !== f && (p = s(t, b.Names.prefixCheck(f)[0]), b.Values.isCSSNullValue(p) && b.Hooks.templates[n] && (p = b.Hooks.templates[n][1])), u = b.Normalizations.registered[n]("extract", t, p)
				}
				return /^[\d-]/.test(u) || (u = a(t) && a(t).isSVG && b.Names.SVGAttribute(n) ? /^(height|width)$/i.test(n) ? t.getBBox()[n] : t.getAttribute(n) : s(t, b.Names.prefixCheck(n)[0])), b.Values.isCSSNullValue(u) && (u = 0), _.debug >= 2 && console.log("Get " + n + ": " + u), u
			},
			setPropertyValue: function(t, n, r, i, o) {
				var s = n;
				if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = r : "Left" === o.direction ? e.scrollTo(r, o.alternateValue) : e.scrollTo(o.alternateValue, r);
				else if (b.Normalizations.registered[n] && "transform" === b.Normalizations.registered[n]("name", t)) b.Normalizations.registered[n]("inject", t, r), s = "transform", r = a(t).transformCache[n];
				else {
					if (b.Hooks.registered[n]) {
						var u = n,
							l = b.Hooks.getRoot(n);
						i = i || b.getPropertyValue(t, l), r = b.Hooks.injectValue(u, r, i), n = l
					}
					if (b.Normalizations.registered[n] && (r = b.Normalizations.registered[n]("inject", t, r), n = b.Normalizations.registered[n]("name", t)), s = b.Names.prefixCheck(n)[0], 8 >= d) try {
						t.style[s] = r
					} catch (c) {
						_.debug && console.log("Browser does not support [" + r + "] for [" + s + "]")
					} else a(t) && a(t).isSVG && b.Names.SVGAttribute(n) ? t.setAttribute(n, r) : t.style[s] = r;
					_.debug >= 2 && console.log("Set " + n + " (" + s + "): " + r)
				}
				return [s, r]
			},
			flushTransformCache: function(t) {
				function e(e) {
					return parseFloat(b.getPropertyValue(t, e))
				}
				var n = "";
				if ((d || _.State.isAndroid && !_.State.isChrome) && a(t).isSVG) {
					var r = {
						translate: [e("translateX"), e("translateY")],
						skewX: [e("skewX")],
						skewY: [e("skewY")],
						scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
						rotate: [e("rotateZ"), 0, 0]
					};
					h.each(a(t).transformCache, function(t) {
						/^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), r[t] && (n += t + "(" + r[t].join(" ") + ") ", delete r[t])
					})
				} else {
					var i, o;
					h.each(a(t).transformCache, function(e) {
						return i = a(t).transformCache[e], "transformPerspective" === e ? (o = i, !0) : (9 === d && "rotateZ" === e && (e = "rotate"), void(n += e + i + " "))
					}), o && (n = "perspective" + o + " " + n)
				}
				b.setPropertyValue(t, "transform", n)
			}
		};
		b.Hooks.register(), b.Normalizations.register(), _.hook = function(t, e, n) {
			var i = r;
			return t = o(t), h.each(t, function(t, o) {
				if (a(o) === r && _.init(o), n === r) i === r && (i = _.CSS.getPropertyValue(o, e));
				else {
					var s = _.CSS.setPropertyValue(o, e, n);
					"transform" === s[0] && _.CSS.flushTransformCache(o), i = s
				}
			}), i
		};
		var w = function() {
			function t() {
				return u ? P.promise || null : d
			}

			function s() {
				function t() {
					function t(t, e) {
						var n = r,
							i = r,
							o = r;
						return m.isArray(t) ? (n = t[0], !m.isArray(t[1]) && /^[\d-]/.test(t[1]) || m.isFunction(t[1]) || b.RegEx.isHex.test(t[1]) ? o = t[1] : (m.isString(t[1]) && !b.RegEx.isHex.test(t[1]) || m.isArray(t[1])) && (i = e ? t[1] : l(t[1], u.duration), t[2] !== r && (o = t[2]))) : n = t, e || (i = i || u.easing), m.isFunction(n) && (n = n.call(s, S, T)), m.isFunction(o) && (o = o.call(s, S, T)), [n || 0, i, o]
					}

					function d(t, e) {
						var n, r;
						return r = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
							return n = t, ""
						}), n || (n = b.Values.getUnitType(t)), [r, n]
					}

					function p() {
						var t = {
							myParent: s.parentNode || n.body,
							position: b.getPropertyValue(s, "position"),
							fontSize: b.getPropertyValue(s, "fontSize")
						}, r = t.position === N.lastPosition && t.myParent === N.lastParent,
							i = t.fontSize === N.lastFontSize;
						N.lastParent = t.myParent, N.lastPosition = t.position, N.lastFontSize = t.fontSize;
						var o = 100,
							u = {};
						if (i && r) u.emToPx = N.lastEmToPx, u.percentToPxWidth = N.lastPercentToPxWidth, u.percentToPxHeight = N.lastPercentToPxHeight;
						else {
							var l = a(s).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
							_.init(l), t.myParent.appendChild(l), h.each(["overflow", "overflowX", "overflowY"], function(t, e) {
								_.CSS.setPropertyValue(l, e, "hidden")
							}), _.CSS.setPropertyValue(l, "position", t.position), _.CSS.setPropertyValue(l, "fontSize", t.fontSize), _.CSS.setPropertyValue(l, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
								_.CSS.setPropertyValue(l, e, o + "%")
							}), _.CSS.setPropertyValue(l, "paddingLeft", o + "em"), u.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(l, "width", null, !0)) || 1) / o, u.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(l, "height", null, !0)) || 1) / o, u.emToPx = N.lastEmToPx = (parseFloat(b.getPropertyValue(l, "paddingLeft")) || 1) / o, t.myParent.removeChild(l)
						}
						return null === N.remToPx && (N.remToPx = parseFloat(b.getPropertyValue(n.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(e.innerWidth) / 100, N.vhToPx = parseFloat(e.innerHeight) / 100), u.remToPx = N.remToPx, u.vwToPx = N.vwToPx, u.vhToPx = N.vhToPx, _.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(u), s), u
					}
					if (u.begin && 0 === S) try {
						u.begin.call(g, g)
					} catch (v) {
						setTimeout(function() {
							throw v
						}, 1)
					}
					if ("scroll" === O) {
						var w, x, C, k = /^x$/i.test(u.axis) ? "Left" : "Top",
							A = parseFloat(u.offset) || 0;
						u.container ? m.isWrapped(u.container) || m.isNode(u.container) ? (u.container = u.container[0] || u.container, w = u.container["scroll" + k], C = w + h(s).position()[k.toLowerCase()] + A) : u.container = null : (w = _.State.scrollAnchor[_.State["scrollProperty" + k]], x = _.State.scrollAnchor[_.State["scrollProperty" + ("Left" === k ? "Top" : "Left")]], C = h(s).offset()[k.toLowerCase()] + A), f = {
							scroll: {
								rootPropertyValue: !1,
								startValue: w,
								currentValue: w,
								endValue: C,
								unitType: "",
								easing: u.easing,
								scrollData: {
									container: u.container,
									direction: k,
									alternateValue: x
								}
							},
							element: s
						}, _.debug && console.log("tweensContainer (scroll): ", f.scroll, s)
					} else if ("reverse" === O) {
						if (!a(s).tweensContainer) return void h.dequeue(s, u.queue);
						"none" === a(s).opts.display && (a(s).opts.display = "auto"), "hidden" === a(s).opts.visibility && (a(s).opts.visibility = "visible"), a(s).opts.loop = !1, a(s).opts.begin = null, a(s).opts.complete = null, $.easing || delete u.easing, $.duration || delete u.duration, u = h.extend({}, a(s).opts, u);
						var E = h.extend(!0, {}, a(s).tweensContainer);
						for (var D in E)
							if ("element" !== D) {
								var M = E[D].startValue;
								E[D].startValue = E[D].currentValue = E[D].endValue, E[D].endValue = M, m.isEmptyObject($) || (E[D].easing = u.easing), _.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(E[D]), s)
							}
						f = E
					} else if ("start" === O) {
						var E;
						a(s).tweensContainer && a(s).isAnimating === !0 && (E = a(s).tweensContainer), h.each(y, function(e, n) {
							if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
								var i = t(n, !0),
									o = i[0],
									a = i[1],
									s = i[2];
								if (b.RegEx.isHex.test(o)) {
									for (var u = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(o), c = s ? b.Values.hexToRgb(s) : r, f = 0; f < u.length; f++) {
										var h = [l[f]];
										a && h.push(a), c !== r && h.push(c[f]), y[e + u[f]] = h
									}
									delete y[e]
								}
							}
						});
						for (var j in y) {
							var I = t(y[j]),
								q = I[0],
								F = I[1],
								L = I[2];
							j = b.Names.camelCase(j);
							var V = b.Hooks.getRoot(j),
								z = !1;
							if (a(s).isSVG || b.Names.prefixCheck(V)[1] !== !1 || b.Normalizations.registered[V] !== r) {
								(u.display !== r && null !== u.display && "none" !== u.display || u.visibility !== r && "hidden" !== u.visibility) && /opacity|filter/.test(j) && !L && 0 !== q && (L = 0), u._cacheValues && E && E[j] ? (L === r && (L = E[j].endValue + E[j].unitType), z = a(s).rootPropertyValueCache[V]) : b.Hooks.registered[j] ? L === r ? (z = b.getPropertyValue(s, V), L = b.getPropertyValue(s, j, z)) : z = b.Hooks.templates[V][1] : L === r && (L = b.getPropertyValue(s, j));
								var H, Y, U, W = !1;
								if (H = d(j, L), L = H[0], U = H[1], H = d(j, q), q = H[0].replace(/^([+-\/*])=/, function(t, e) {
									return W = e, ""
								}), Y = H[1], L = parseFloat(L) || 0, q = parseFloat(q) || 0, "%" === Y && (/^(fontSize|lineHeight)$/.test(j) ? (q /= 100, Y = "em") : /^scale/.test(j) ? (q /= 100, Y = "") : /(Red|Green|Blue)$/i.test(j) && (q = q / 100 * 255, Y = "")), /[\/*]/.test(W)) Y = U;
								else if (U !== Y && 0 !== L)
									if (0 === q) Y = U;
									else {
										o = o || p();
										var B = /margin|padding|left|right|width|text|word|letter/i.test(j) || /X$/.test(j) || "x" === j ? "x" : "y";
										switch (U) {
											case "%":
												L *= "x" === B ? o.percentToPxWidth : o.percentToPxHeight;
												break;
											case "px":
												break;
											default:
												L *= o[U + "ToPx"]
										}
										switch (Y) {
											case "%":
												L *= 1 / ("x" === B ? o.percentToPxWidth : o.percentToPxHeight);
												break;
											case "px":
												break;
											default:
												L *= 1 / o[Y + "ToPx"]
										}
									}
								switch (W) {
									case "+":
										q = L + q;
										break;
									case "-":
										q = L - q;
										break;
									case "*":
										q = L * q;
										break;
									case "/":
										q = L / q
								}
								f[j] = {
									rootPropertyValue: z,
									startValue: L,
									currentValue: L,
									endValue: q,
									unitType: Y,
									easing: F
								}, _.debug && console.log("tweensContainer (" + j + "): " + JSON.stringify(f[j]), s)
							} else _.debug && console.log("Skipping [" + V + "] due to a lack of browser support.")
						}
						f.element = s
					}
					f.element && (b.Values.addClass(s, "velocity-animating"), R.push(f), "" === u.queue && (a(s).tweensContainer = f, a(s).opts = u), a(s).isAnimating = !0, S === T - 1 ? (_.State.calls.length > 1e4 && (_.State.calls = i(_.State.calls)), _.State.calls.push([R, g, u, null, P.resolver]), _.State.isTicking === !1 && (_.State.isTicking = !0, c())) : S++)
				}
				var o, s = this,
					u = h.extend({}, _.defaults, $),
					f = {};
				switch (a(s) === r && _.init(s), parseFloat(u.delay) && u.queue !== !1 && h.queue(s, u.queue, function(t) {
					_.velocityQueueEntryFlag = !0, a(s).delayTimer = {
						setTimeout: setTimeout(t, parseFloat(u.delay)),
						next: t
					}
				}), u.duration.toString().toLowerCase()) {
					case "fast":
						u.duration = 200;
						break;
					case "normal":
						u.duration = v;
						break;
					case "slow":
						u.duration = 600;
						break;
					default:
						u.duration = parseFloat(u.duration) || 1
				}
				_.mock !== !1 && (_.mock === !0 ? u.duration = u.delay = 1 : (u.duration *= parseFloat(_.mock) || 1, u.delay *= parseFloat(_.mock) || 1)), u.easing = l(u.easing, u.duration), u.begin && !m.isFunction(u.begin) && (u.begin = null), u.progress && !m.isFunction(u.progress) && (u.progress = null), u.complete && !m.isFunction(u.complete) && (u.complete = null), u.display !== r && null !== u.display && (u.display = u.display.toString().toLowerCase(), "auto" === u.display && (u.display = _.CSS.Values.getDisplayType(s))), u.visibility !== r && null !== u.visibility && (u.visibility = u.visibility.toString().toLowerCase()), u.mobileHA = u.mobileHA && _.State.isMobile && !_.State.isGingerbread, u.queue === !1 ? u.delay ? setTimeout(t, u.delay) : t() : h.queue(s, u.queue, function(e, n) {
					return n === !0 ? (P.promise && P.resolver(g), !0) : (_.velocityQueueEntryFlag = !0, void t(e))
				}), "" !== u.queue && "fx" !== u.queue || "inprogress" === h.queue(s)[0] || h.dequeue(s)
			}
			var u, d, p, g, y, $, x = arguments[0] && (h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
			if (m.isWrapped(this) ? (u = !1, p = 0, g = this, d = this) : (u = !0, p = 1, g = x ? arguments[0].elements : arguments[0]), g = o(g)) {
				x ? (y = arguments[0].properties, $ = arguments[0].options) : (y = arguments[p], $ = arguments[p + 1]);
				var T = g.length,
					S = 0;
				if ("stop" !== y && !h.isPlainObject($)) {
					var C = p + 1;
					$ = {};
					for (var k = C; k < arguments.length; k++) m.isArray(arguments[k]) || !/^(fast|normal|slow)$/i.test(arguments[k]) && !/^\d/.test(arguments[k]) ? m.isString(arguments[k]) || m.isArray(arguments[k]) ? $.easing = arguments[k] : m.isFunction(arguments[k]) && ($.complete = arguments[k]) : $.duration = arguments[k]
				}
				var P = {
					promise: null,
					resolver: null,
					rejecter: null
				};
				u && _.Promise && (P.promise = new _.Promise(function(t, e) {
					P.resolver = t, P.rejecter = e
				}));
				var O;
				switch (y) {
					case "scroll":
						O = "scroll";
						break;
					case "reverse":
						O = "reverse";
						break;
					case "stop":
						h.each(g, function(t, e) {
							a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer)
						});
						var A = [];
						return h.each(_.State.calls, function(t, e) {
							e && h.each(e[1], function(n, i) {
								var o = m.isString($) ? $ : "";
								return $ !== r && e[2].queue !== o ? !0 : void h.each(g, function(e, n) {
									n === i && ($ !== r && (h.each(h.queue(n, o), function(t, e) {
										m.isFunction(e) && e(null, !0)
									}), h.queue(n, o, [])), a(n) && "" === o && h.each(a(n).tweensContainer, function(t, e) {
										e.endValue = e.currentValue
									}), A.push(t))
								})
							})
						}), h.each(A, function(t, e) {
							f(e, !0)
						}), P.promise && P.resolver(g), t();
					default:
						if (!h.isPlainObject(y) || m.isEmptyObject(y)) {
							if (m.isString(y) && _.Redirects[y]) {
								var E = h.extend({}, $),
									D = E.duration,
									M = E.delay || 0;
								return E.backwards === !0 && (g = h.extend(!0, [], g).reverse()), h.each(g, function(t, e) {
									parseFloat(E.stagger) ? E.delay = M + parseFloat(E.stagger) * t : m.isFunction(E.stagger) && (E.delay = M + E.stagger.call(e, t, T)), E.drag && (E.duration = parseFloat(D) || (/^(callout|transition)/.test(y) ? 1e3 : v), E.duration = Math.max(E.duration * (E.backwards ? 1 - t / T : (t + 1) / T), .75 * E.duration, 200)), _.Redirects[y].call(e, e, E || {}, t, T, g, P.promise ? P : r)
								}), t()
							}
							var j = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
							return P.promise ? P.rejecter(new Error(j)) : console.log(j), t()
						}
						O = "start"
				}
				var N = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				}, R = [];
				h.each(g, function(t, e) {
					m.isNode(e) && s.call(e)
				});
				var I, E = h.extend({}, _.defaults, $);
				if (E.loop = parseInt(E.loop), I = 2 * E.loop - 1, E.loop)
					for (var q = 0; I > q; q++) {
						var F = {
							delay: E.delay,
							progress: E.progress
						};
						q === I - 1 && (F.display = E.display, F.visibility = E.visibility, F.complete = E.complete), w(g, "reverse", F)
					}
				return t()
			}
		};
		_ = h.extend(w, _), _.animate = w;
		var x = e.requestAnimationFrame || p;
		return _.State.isMobile || n.hidden === r || n.addEventListener("visibilitychange", function() {
			n.hidden ? (x = function(t) {
				return setTimeout(function() {
					t(!0)
				}, 16)
			}, c()) : x = e.requestAnimationFrame || p
		}), t.Velocity = _, t !== e && (t.fn.velocity = w, t.fn.velocity.defaults = _.defaults), h.each(["Down", "Up"], function(t, e) {
			_.Redirects["slide" + e] = function(t, n, i, o, a, s) {
				var u = h.extend({}, n),
					l = u.begin,
					c = u.complete,
					f = {
						height: "",
						marginTop: "",
						marginBottom: "",
						paddingTop: "",
						paddingBottom: ""
					}, d = {};
				u.display === r && (u.display = "Down" === e ? "inline" === _.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), u.begin = function() {
					l && l.call(a, a);
					for (var n in f) {
						d[n] = t.style[n];
						var r = _.CSS.getPropertyValue(t, n);
						f[n] = "Down" === e ? [r, 0] : [0, r]
					}
					d.overflow = t.style.overflow, t.style.overflow = "hidden"
				}, u.complete = function() {
					for (var e in d) t.style[e] = d[e];
					c && c.call(a, a), s && s.resolver(a)
				}, _(t, f, u)
			}
		}), h.each(["In", "Out"], function(t, e) {
			_.Redirects["fade" + e] = function(t, n, i, o, a, s) {
				var u = h.extend({}, n),
					l = {
						opacity: "In" === e ? 1 : 0
					}, c = u.complete;
				u.complete = i !== o - 1 ? u.begin = null : function() {
					c && c.call(a, a), s && s.resolver(a)
				}, u.display === r && (u.display = "In" === e ? "auto" : "none"), _(this, l, u)
			}
		}), _
	}(window.jQuery || window.Zepto || window, window, document)
}), ! function(t, e, n, r) {
	"use strict";

	function i(t, e, n) {
		return setTimeout(c(t, n), e)
	}

	function o(t, e, n) {
		return Array.isArray(t) ? (a(t, n[e], n), !0) : !1
	}

	function a(t, e, n) {
		var i;
		if (t)
			if (t.forEach) t.forEach(e, n);
			else
		if (t.length !== r)
			for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
		else
			for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
	}

	function s(t, e, n) {
		for (var i = Object.keys(e), o = 0; o < i.length;)(!n || n && t[i[o]] === r) && (t[i[o]] = e[i[o]]), o++;
		return t
	}

	function u(t, e) {
		return s(t, e, !0)
	}

	function l(t, e, n) {
		var r, i = e.prototype;
		r = t.prototype = Object.create(i), r.constructor = t, r._super = i, n && s(r, n)
	}

	function c(t, e) {
		return function() {
			return t.apply(e, arguments)
		}
	}

	function f(t, e) {
		return typeof t == ce ? t.apply(e ? e[0] || r : r, e) : t
	}

	function h(t, e) {
		return t === r ? e : t
	}

	function d(t, e, n) {
		a(v(e), function(e) {
			t.addEventListener(e, n, !1)
		})
	}

	function p(t, e, n) {
		a(v(e), function(e) {
			t.removeEventListener(e, n, !1)
		})
	}

	function m(t, e) {
		for (; t;) {
			if (t == e) return !0;
			t = t.parentNode
		}
		return !1
	}

	function g(t, e) {
		return t.indexOf(e) > -1
	}

	function v(t) {
		return t.trim().split(/\s+/g)
	}

	function y(t, e, n) {
		if (t.indexOf && !n) return t.indexOf(e);
		for (var r = 0; r < t.length;) {
			if (n && t[r][n] == e || !n && t[r] === e) return r;
			r++
		}
		return -1
	}

	function _(t) {
		return Array.prototype.slice.call(t, 0)
	}

	function $(t, e, n) {
		for (var r = [], i = [], o = 0; o < t.length;) {
			var a = e ? t[o][e] : t[o];
			y(i, a) < 0 && r.push(t[o]), i[o] = a, o++
		}
		return n && (r = e ? r.sort(function(t, n) {
			return t[e] > n[e]
		}) : r.sort()), r
	}

	function b(t, e) {
		for (var n, i, o = e[0].toUpperCase() + e.slice(1), a = 0; a < ue.length;) {
			if (n = ue[a], i = n ? n + o : e, i in t) return i;
			a++
		}
		return r
	}

	function w() {
		return pe++
	}

	function x(t) {
		var e = t.ownerDocument;
		return e.defaultView || e.parentWindow
	}

	function T(t, e) {
		var n = this;
		this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
			f(t.options.enable, [t]) && n.handler(e)
		}, this.init()
	}

	function S(t) {
		var e, n = t.options.inputClass;
		return new(e = n ? n : ve ? F : ye ? z : ge ? Y : q)(t, C)
	}

	function C(t, e, n) {
		var r = n.pointers.length,
			i = n.changedPointers.length,
			o = e & Te && 0 === r - i,
			a = e & (Ce | ke) && 0 === r - i;
		n.isFirst = !! o, n.isFinal = !! a, o && (t.session = {}), n.eventType = e, k(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
	}

	function k(t, e) {
		var n = t.session,
			r = e.pointers,
			i = r.length;
		n.firstInput || (n.firstInput = A(e)), i > 1 && !n.firstMultiple ? n.firstMultiple = A(e) : 1 === i && (n.firstMultiple = !1);
		var o = n.firstInput,
			a = n.firstMultiple,
			s = a ? a.center : o.center,
			u = e.center = E(r);
		e.timeStamp = de(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = N(s, u), e.distance = j(s, u), P(n, e), e.offsetDirection = M(e.deltaX, e.deltaY), e.scale = a ? I(a.pointers, r) : 1, e.rotation = a ? R(a.pointers, r) : 0, O(n, e);
		var l = t.element;
		m(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
	}

	function P(t, e) {
		var n = e.center,
			r = t.offsetDelta || {}, i = t.prevDelta || {}, o = t.prevInput || {};
		(e.eventType === Te || o.eventType === Ce) && (i = t.prevDelta = {
				x: o.deltaX || 0,
				y: o.deltaY || 0
			}, r = t.offsetDelta = {
				x: n.x,
				y: n.y
			}), e.deltaX = i.x + (n.x - r.x), e.deltaY = i.y + (n.y - r.y)
	}

	function O(t, e) {
		var n, i, o, a, s = t.lastInterval || e,
			u = e.timeStamp - s.timeStamp;
		if (e.eventType != ke && (u > xe || s.velocity === r)) {
			var l = s.deltaX - e.deltaX,
				c = s.deltaY - e.deltaY,
				f = D(u, l, c);
			i = f.x, o = f.y, n = he(f.x) > he(f.y) ? f.x : f.y, a = M(l, c), t.lastInterval = e
		} else n = s.velocity, i = s.velocityX, o = s.velocityY, a = s.direction;
		e.velocity = n, e.velocityX = i, e.velocityY = o, e.direction = a
	}

	function A(t) {
		for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
			clientX: fe(t.pointers[n].clientX),
			clientY: fe(t.pointers[n].clientY)
		}, n++;
		return {
			timeStamp: de(),
			pointers: e,
			center: E(e),
			deltaX: t.deltaX,
			deltaY: t.deltaY
		}
	}

	function E(t) {
		var e = t.length;
		if (1 === e) return {
			x: fe(t[0].clientX),
			y: fe(t[0].clientY)
		};
		for (var n = 0, r = 0, i = 0; e > i;) n += t[i].clientX, r += t[i].clientY, i++;
		return {
			x: fe(n / e),
			y: fe(r / e)
		}
	}

	function D(t, e, n) {
		return {
			x: e / t || 0,
			y: n / t || 0
		}
	}

	function M(t, e) {
		return t === e ? Pe : he(t) >= he(e) ? t > 0 ? Oe : Ae : e > 0 ? Ee : De
	}

	function j(t, e, n) {
		n || (n = Re);
		var r = e[n[0]] - t[n[0]],
			i = e[n[1]] - t[n[1]];
		return Math.sqrt(r * r + i * i)
	}

	function N(t, e, n) {
		n || (n = Re);
		var r = e[n[0]] - t[n[0]],
			i = e[n[1]] - t[n[1]];
		return 180 * Math.atan2(i, r) / Math.PI
	}

	function R(t, e) {
		return N(e[1], e[0], Ie) - N(t[1], t[0], Ie)
	}

	function I(t, e) {
		return j(e[0], e[1], Ie) / j(t[0], t[1], Ie)
	}

	function q() {
		this.evEl = Fe, this.evWin = Le, this.allow = !0, this.pressed = !1, T.apply(this, arguments)
	}

	function F() {
		this.evEl = He, this.evWin = Ye, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
	}

	function L() {
		this.evTarget = We, this.evWin = Be, this.started = !1, T.apply(this, arguments)
	}

	function V(t, e) {
		var n = _(t.touches),
			r = _(t.changedTouches);
		return e & (Ce | ke) && (n = $(n.concat(r), "identifier", !0)), [n, r]
	}

	function z() {
		this.evTarget = Qe, this.targetIds = {}, T.apply(this, arguments)
	}

	function H(t, e) {
		var n = _(t.touches),
			r = this.targetIds;
		if (e & (Te | Se) && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
		var i, o, a = _(t.changedTouches),
			s = [],
			u = this.target;
		if (o = n.filter(function(t) {
			return m(t.target, u)
		}), e === Te)
			for (i = 0; i < o.length;) r[o[i].identifier] = !0, i++;
		for (i = 0; i < a.length;) r[a[i].identifier] && s.push(a[i]), e & (Ce | ke) && delete r[a[i].identifier], i++;
		return s.length ? [$(o.concat(s), "identifier", !0), s] : void 0
	}

	function Y() {
		T.apply(this, arguments);
		var t = c(this.handler, this);
		this.touch = new z(this.manager, t), this.mouse = new q(this.manager, t)
	}

	function U(t, e) {
		this.manager = t, this.set(e)
	}

	function W(t) {
		if (g(t, en)) return en;
		var e = g(t, nn),
			n = g(t, rn);
		return e && n ? nn + " " + rn : e || n ? e ? nn : rn : g(t, tn) ? tn : Ke
	}

	function B(t) {
		this.id = w(), this.manager = null, this.options = u(t || {}, this.defaults), this.options.enable = h(this.options.enable, !0), this.state = on, this.simultaneous = {}, this.requireFail = []
	}

	function X(t) {
		return t & cn ? "cancel" : t & un ? "end" : t & sn ? "move" : t & an ? "start" : ""
	}

	function Q(t) {
		return t == De ? "down" : t == Ee ? "up" : t == Oe ? "left" : t == Ae ? "right" : ""
	}

	function G(t, e) {
		var n = e.manager;
		return n ? n.get(t) : t
	}

	function Z() {
		B.apply(this, arguments)
	}

	function J() {
		Z.apply(this, arguments), this.pX = null, this.pY = null
	}

	function K() {
		Z.apply(this, arguments)
	}

	function te() {
		B.apply(this, arguments), this._timer = null, this._input = null
	}

	function ee() {
		Z.apply(this, arguments)
	}

	function ne() {
		Z.apply(this, arguments)
	}

	function re() {
		B.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
	}

	function ie(t, e) {
		return e = e || {}, e.recognizers = h(e.recognizers, ie.defaults.preset), new oe(t, e)
	}

	function oe(t, e) {
		e = e || {}, this.options = u(e, ie.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = S(this), this.touchAction = new U(this, this.options.touchAction), ae(this, !0), a(e.recognizers, function(t) {
			var e = this.add(new t[0](t[1]));
			t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
		}, this)
	}

	function ae(t, e) {
		var n = t.element;
		a(t.options.cssProps, function(t, r) {
			n.style[b(n.style, r)] = e ? t : ""
		})
	}

	function se(t, n) {
		var r = e.createEvent("Event");
		r.initEvent(t, !0, !0), r.gesture = n, n.target.dispatchEvent(r)
	}
	var ue = ["", "webkit", "moz", "MS", "ms", "o"],
		le = e.createElement("div"),
		ce = "function",
		fe = Math.round,
		he = Math.abs,
		de = Date.now,
		pe = 1,
		me = /mobile|tablet|ip(ad|hone|od)|android/i,
		ge = "ontouchstart" in t,
		ve = b(t, "PointerEvent") !== r,
		ye = ge && me.test(navigator.userAgent),
		_e = "touch",
		$e = "pen",
		be = "mouse",
		we = "kinect",
		xe = 25,
		Te = 1,
		Se = 2,
		Ce = 4,
		ke = 8,
		Pe = 1,
		Oe = 2,
		Ae = 4,
		Ee = 8,
		De = 16,
		Me = Oe | Ae,
		je = Ee | De,
		Ne = Me | je,
		Re = ["x", "y"],
		Ie = ["clientX", "clientY"];
	T.prototype = {
		handler: function() {},
		init: function() {
			this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(x(this.element), this.evWin, this.domHandler)
		},
		destroy: function() {
			this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(x(this.element), this.evWin, this.domHandler)
		}
	};
	var qe = {
		mousedown: Te,
		mousemove: Se,
		mouseup: Ce
	}, Fe = "mousedown",
		Le = "mousemove mouseup";
	l(q, T, {
		handler: function(t) {
			var e = qe[t.type];
			e & Te && 0 === t.button && (this.pressed = !0), e & Se && 1 !== t.which && (e = Ce), this.pressed && this.allow && (e & Ce && (this.pressed = !1), this.callback(this.manager, e, {
				pointers: [t],
				changedPointers: [t],
				pointerType: be,
				srcEvent: t
			}))
		}
	});
	var Ve = {
		pointerdown: Te,
		pointermove: Se,
		pointerup: Ce,
		pointercancel: ke,
		pointerout: ke
	}, ze = {
			2: _e,
			3: $e,
			4: be,
			5: we
		}, He = "pointerdown",
		Ye = "pointermove pointerup pointercancel";
	t.MSPointerEvent && (He = "MSPointerDown", Ye = "MSPointerMove MSPointerUp MSPointerCancel"), l(F, T, {
		handler: function(t) {
			var e = this.store,
				n = !1,
				r = t.type.toLowerCase().replace("ms", ""),
				i = Ve[r],
				o = ze[t.pointerType] || t.pointerType,
				a = o == _e,
				s = y(e, t.pointerId, "pointerId");
			i & Te && (0 === t.button || a) ? 0 > s && (e.push(t), s = e.length - 1) : i & (Ce | ke) && (n = !0), 0 > s || (e[s] = t, this.callback(this.manager, i, {
				pointers: e,
				changedPointers: [t],
				pointerType: o,
				srcEvent: t
			}), n && e.splice(s, 1))
		}
	});
	var Ue = {
		touchstart: Te,
		touchmove: Se,
		touchend: Ce,
		touchcancel: ke
	}, We = "touchstart",
		Be = "touchstart touchmove touchend touchcancel";
	l(L, T, {
		handler: function(t) {
			var e = Ue[t.type];
			if (e === Te && (this.started = !0), this.started) {
				var n = V.call(this, t, e);
				e & (Ce | ke) && 0 === n[0].length - n[1].length && (this.started = !1), this.callback(this.manager, e, {
					pointers: n[0],
					changedPointers: n[1],
					pointerType: _e,
					srcEvent: t
				})
			}
		}
	});
	var Xe = {
		touchstart: Te,
		touchmove: Se,
		touchend: Ce,
		touchcancel: ke
	}, Qe = "touchstart touchmove touchend touchcancel";
	l(z, T, {
		handler: function(t) {
			var e = Xe[t.type],
				n = H.call(this, t, e);
			n && this.callback(this.manager, e, {
				pointers: n[0],
				changedPointers: n[1],
				pointerType: _e,
				srcEvent: t
			})
		}
	}), l(Y, T, {
		handler: function(t, e, n) {
			var r = n.pointerType == _e,
				i = n.pointerType == be;
			if (r) this.mouse.allow = !1;
			else if (i && !this.mouse.allow) return;
			e & (Ce | ke) && (this.mouse.allow = !0), this.callback(t, e, n)
		},
		destroy: function() {
			this.touch.destroy(), this.mouse.destroy()
		}
	});
	var Ge = b(le.style, "touchAction"),
		Ze = Ge !== r,
		Je = "compute",
		Ke = "auto",
		tn = "manipulation",
		en = "none",
		nn = "pan-x",
		rn = "pan-y";
	U.prototype = {
		set: function(t) {
			t == Je && (t = this.compute()), Ze && (this.manager.element.style[Ge] = t), this.actions = t.toLowerCase().trim()
		},
		update: function() {
			this.set(this.manager.options.touchAction)
		},
		compute: function() {
			var t = [];
			return a(this.manager.recognizers, function(e) {
				f(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
			}), W(t.join(" "))
		},
		preventDefaults: function(t) {
			if (!Ze) {
				var e = t.srcEvent,
					n = t.offsetDirection;
				if (this.manager.session.prevented) return void e.preventDefault();
				var r = this.actions,
					i = g(r, en),
					o = g(r, rn),
					a = g(r, nn);
				return i || o && n & Me || a && n & je ? this.preventSrc(e) : void 0
			}
		},
		preventSrc: function(t) {
			this.manager.session.prevented = !0, t.preventDefault()
		}
	};
	var on = 1,
		an = 2,
		sn = 4,
		un = 8,
		ln = un,
		cn = 16,
		fn = 32;
	B.prototype = {
		defaults: {},
		set: function(t) {
			return s(this.options, t), this.manager && this.manager.touchAction.update(), this
		},
		recognizeWith: function(t) {
			if (o(t, "recognizeWith", this)) return this;
			var e = this.simultaneous;
			return t = G(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
		},
		dropRecognizeWith: function(t) {
			return o(t, "dropRecognizeWith", this) ? this : (t = G(t, this), delete this.simultaneous[t.id], this)
		},
		requireFailure: function(t) {
			if (o(t, "requireFailure", this)) return this;
			var e = this.requireFail;
			return t = G(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
		},
		dropRequireFailure: function(t) {
			if (o(t, "dropRequireFailure", this)) return this;
			t = G(t, this);
			var e = y(this.requireFail, t);
			return e > -1 && this.requireFail.splice(e, 1), this
		},
		hasRequireFailures: function() {
			return this.requireFail.length > 0
		},
		canRecognizeWith: function(t) {
			return !!this.simultaneous[t.id]
		},
		emit: function(t) {
			function e(e) {
				n.manager.emit(n.options.event + (e ? X(r) : ""), t)
			}
			var n = this,
				r = this.state;
			un > r && e(!0), e(), r >= un && e(!0)
		},
		tryEmit: function(t) {
			return this.canEmit() ? this.emit(t) : void(this.state = fn)
		},
		canEmit: function() {
			for (var t = 0; t < this.requireFail.length;) {
				if (!(this.requireFail[t].state & (fn | on))) return !1;
				t++
			}
			return !0
		},
		recognize: function(t) {
			var e = s({}, t);
			return f(this.options.enable, [this, e]) ? (this.state & (ln | cn | fn) && (this.state = on), this.state = this.process(e), void(this.state & (an | sn | un | cn) && this.tryEmit(e))) : (this.reset(), void(this.state = fn))
		},
		process: function() {},
		getTouchAction: function() {},
		reset: function() {}
	}, l(Z, B, {
		defaults: {
			pointers: 1
		},
		attrTest: function(t) {
			var e = this.options.pointers;
			return 0 === e || t.pointers.length === e
		},
		process: function(t) {
			var e = this.state,
				n = t.eventType,
				r = e & (an | sn),
				i = this.attrTest(t);
			return r && (n & ke || !i) ? e | cn : r || i ? n & Ce ? e | un : e & an ? e | sn : an : fn
		}
	}), l(J, Z, {
		defaults: {
			event: "pan",
			threshold: 10,
			pointers: 1,
			direction: Ne
		},
		getTouchAction: function() {
			var t = this.options.direction,
				e = [];
			return t & Me && e.push(rn), t & je && e.push(nn), e
		},
		directionTest: function(t) {
			var e = this.options,
				n = !0,
				r = t.distance,
				i = t.direction,
				o = t.deltaX,
				a = t.deltaY;
			return i & e.direction || (e.direction & Me ? (i = 0 === o ? Pe : 0 > o ? Oe : Ae, n = o != this.pX, r = Math.abs(t.deltaX)) : (i = 0 === a ? Pe : 0 > a ? Ee : De, n = a != this.pY, r = Math.abs(t.deltaY))), t.direction = i, n && r > e.threshold && i & e.direction
		},
		attrTest: function(t) {
			return Z.prototype.attrTest.call(this, t) && (this.state & an || !(this.state & an) && this.directionTest(t))
		},
		emit: function(t) {
			this.pX = t.deltaX, this.pY = t.deltaY;
			var e = Q(t.direction);
			e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
		}
	}), l(K, Z, {
		defaults: {
			event: "pinch",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function() {
			return [en]
		},
		attrTest: function(t) {
			return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & an)
		},
		emit: function(t) {
			if (this._super.emit.call(this, t), 1 !== t.scale) {
				var e = t.scale < 1 ? "in" : "out";
				this.manager.emit(this.options.event + e, t)
			}
		}
	}), l(te, B, {
		defaults: {
			event: "press",
			pointers: 1,
			time: 500,
			threshold: 5
		},
		getTouchAction: function() {
			return [Ke]
		},
		process: function(t) {
			var e = this.options,
				n = t.pointers.length === e.pointers,
				r = t.distance < e.threshold,
				o = t.deltaTime > e.time;
			if (this._input = t, !r || !n || t.eventType & (Ce | ke) && !o) this.reset();
			else if (t.eventType & Te) this.reset(), this._timer = i(function() {
				this.state = ln, this.tryEmit()
			}, e.time, this);
			else if (t.eventType & Ce) return ln;
			return fn
		},
		reset: function() {
			clearTimeout(this._timer)
		},
		emit: function(t) {
			this.state === ln && (t && t.eventType & Ce ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = de(), this.manager.emit(this.options.event, this._input)))
		}
	}), l(ee, Z, {
		defaults: {
			event: "rotate",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function() {
			return [en]
		},
		attrTest: function(t) {
			return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & an)
		}
	}), l(ne, Z, {
		defaults: {
			event: "swipe",
			threshold: 10,
			velocity: .65,
			direction: Me | je,
			pointers: 1
		},
		getTouchAction: function() {
			return J.prototype.getTouchAction.call(this)
		},
		attrTest: function(t) {
			var e, n = this.options.direction;
			return n & (Me | je) ? e = t.velocity : n & Me ? e = t.velocityX : n & je && (e = t.velocityY), this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && he(e) > this.options.velocity && t.eventType & Ce
		},
		emit: function(t) {
			var e = Q(t.direction);
			e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
		}
	}), l(re, B, {
		defaults: {
			event: "tap",
			pointers: 1,
			taps: 1,
			interval: 300,
			time: 250,
			threshold: 2,
			posThreshold: 10
		},
		getTouchAction: function() {
			return [tn]
		},
		process: function(t) {
			var e = this.options,
				n = t.pointers.length === e.pointers,
				r = t.distance < e.threshold,
				o = t.deltaTime < e.time;
			if (this.reset(), t.eventType & Te && 0 === this.count) return this.failTimeout();
			if (r && o && n) {
				if (t.eventType != Ce) return this.failTimeout();
				var a = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
					s = !this.pCenter || j(this.pCenter, t.center) < e.posThreshold;
				this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t;
				var u = this.count % e.taps;
				if (0 === u) return this.hasRequireFailures() ? (this._timer = i(function() {
					this.state = ln, this.tryEmit()
				}, e.interval, this), an) : ln
			}
			return fn
		},
		failTimeout: function() {
			return this._timer = i(function() {
				this.state = fn
			}, this.options.interval, this), fn
		},
		reset: function() {
			clearTimeout(this._timer)
		},
		emit: function() {
			this.state == ln && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
		}
	}), ie.VERSION = "2.0.4", ie.defaults = {
		domEvents: !1,
		touchAction: Je,
		enable: !0,
		inputTarget: null,
		inputClass: null,
		preset: [
			[ee, {
				enable: !1
			}],
			[K, {
					enable: !1
				},
				["rotate"]
			],
			[ne, {
				direction: Me
			}],
			[J, {
					direction: Me
				},
				["swipe"]
			],
			[re],
			[re, {
					event: "doubletap",
					taps: 2
				},
				["tap"]
			],
			[te]
		],
		cssProps: {
			userSelect: "default",
			touchSelect: "none",
			touchCallout: "none",
			contentZooming: "none",
			userDrag: "none",
			tapHighlightColor: "rgba(0,0,0,0)"
		}
	};
	var hn = 1,
		dn = 2;
	oe.prototype = {
		set: function(t) {
			return s(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
		},
		stop: function(t) {
			this.session.stopped = t ? dn : hn
		},
		recognize: function(t) {
			var e = this.session;
			if (!e.stopped) {
				this.touchAction.preventDefaults(t);
				var n, r = this.recognizers,
					i = e.curRecognizer;
				(!i || i && i.state & ln) && (i = e.curRecognizer = null);
				for (var o = 0; o < r.length;) n = r[o], e.stopped === dn || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t), !i && n.state & (an | sn | un) && (i = e.curRecognizer = n), o++
			}
		},
		get: function(t) {
			if (t instanceof B) return t;
			for (var e = this.recognizers, n = 0; n < e.length; n++)
				if (e[n].options.event == t) return e[n];
			return null
		},
		add: function(t) {
			if (o(t, "add", this)) return this;
			var e = this.get(t.options.event);
			return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
		},
		remove: function(t) {
			if (o(t, "remove", this)) return this;
			var e = this.recognizers;
			return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
		},
		on: function(t, e) {
			var n = this.handlers;
			return a(v(t), function(t) {
				n[t] = n[t] || [], n[t].push(e)
			}), this
		},
		off: function(t, e) {
			var n = this.handlers;
			return a(v(t), function(t) {
				e ? n[t].splice(y(n[t], e), 1) : delete n[t]
			}), this
		},
		emit: function(t, e) {
			this.options.domEvents && se(t, e);
			var n = this.handlers[t] && this.handlers[t].slice();
			if (n && n.length) {
				e.type = t, e.preventDefault = function() {
					e.srcEvent.preventDefault()
				};
				for (var r = 0; r < n.length;) n[r](e), r++
			}
		},
		destroy: function() {
			this.element && ae(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
		}
	}, s(ie, {
		INPUT_START: Te,
		INPUT_MOVE: Se,
		INPUT_END: Ce,
		INPUT_CANCEL: ke,
		STATE_POSSIBLE: on,
		STATE_BEGAN: an,
		STATE_CHANGED: sn,
		STATE_ENDED: un,
		STATE_RECOGNIZED: ln,
		STATE_CANCELLED: cn,
		STATE_FAILED: fn,
		DIRECTION_NONE: Pe,
		DIRECTION_LEFT: Oe,
		DIRECTION_RIGHT: Ae,
		DIRECTION_UP: Ee,
		DIRECTION_DOWN: De,
		DIRECTION_HORIZONTAL: Me,
		DIRECTION_VERTICAL: je,
		DIRECTION_ALL: Ne,
		Manager: oe,
		Input: T,
		TouchAction: U,
		TouchInput: z,
		MouseInput: q,
		PointerEventInput: F,
		TouchMouseInput: Y,
		SingleTouchInput: L,
		Recognizer: B,
		AttrRecognizer: Z,
		Tap: re,
		Pan: J,
		Swipe: ne,
		Pinch: K,
		Rotate: ee,
		Press: te,
		on: d,
		off: p,
		each: a,
		merge: u,
		extend: s,
		inherit: l,
		bindFn: c,
		prefixed: b
	}), typeof define == ce && define.amd ? define(function() {
		return ie
	}) : "undefined" != typeof module && module.exports ? module.exports = ie : t[n] = ie
}(window, document, "Hammer"),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
}(function(t, e) {
	function n(n, r) {
		var i = t(n);
		i.data("hammer") || i.data("hammer", new e(i[0], r))
	}
	t.fn.hammer = function(t) {
		return this.each(function() {
			n(this, t)
		})
	}, e.Manager.prototype.emit = function(e) {
		return function(n, r) {
			e.call(this, n, r), t(this.element).trigger({
				type: n,
				gesture: r
			})
		}
	}(e.Manager.prototype.emit)
}),
function(t) {
	t.fn.collapsible = function(e) {
		var n = {
			accordion: !0
		};
		e = t.extend(n, e);
		var r = (t(this), t(this).find(".collapsible-header"));
		r.each(n.accordion ? function() {
			t(this).click(function() {
				t(this).parent().toggleClass("active"), t(this).parent().hasClass("active") ? t(this).siblings(".collapsible-body").stop(!0, !1).slideDown({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1
				}) : t(this).siblings(".collapsible-body").stop(!0, !1).slideUp({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1
				}), r.not(t(this)).parent().removeClass("active"), r.not(t(this)).parent().children(".collapsible-body").stop(!0, !1).slideUp({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1
				})
			})
		} : function() {
			t(this).click(function() {
				t(this).parent().toggleClass("active"), t(this).parent().hasClass("active") ? t(this).siblings(".collapsible-body").stop(!0, !1).slideDown({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1
				}) : t(this).siblings(".collapsible-body").stop(!0, !1).slideUp({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1
				})
			})
		})
	}
}(jQuery),
function(t) {
	t.fn.dropdown = function(e) {
		var n = {
			constrain_width: !0,
			hover: !0
		};
		e = t.extend(n, e), this.each(function() {
			function n() {
				e.constrain_width === !0 && o.css("width", i.outerWidth()), o.css("top", i.offset().top), o.css("left", i.offset().left), o.show({
					duration: 250,
					easing: "easeOutCubic"
				})
			}

			function r(e) {
				var n = t(e),
					r = n.add(n.parents()),
					i = !1;
				return r.each(function() {
					return "fixed" === t(this).css("position") ? (i = !0, !1) : void 0
				}), i
			}
			var i = t(this),
				o = t("#" + i.attr("data-activates"));
			if (o.hide(0), o.parent().is(t("body")) || (o.detach(), t("body").append(o)), r(i[0]) && (console.log("fixed it is"), o.css("position", "fixed")), e.hover) i.on("mouseover", function() {
				n()
			}), o.on("mouseleave", function() {
				o.hide({
					duration: 175,
					easing: "easeOutCubic"
				})
			});
			else {
				i.click(function(e) {
					e.preventDefault(), e.stopPropagation(), n(), t(document).bind("click." + o.attr("id"), function(e) {
						o.is(e.target) || i.is(e.target) || (o.hide({
							duration: 175,
							easing: "easeOutCubic"
						}), t(document).unbind("click." + o.attr("id")))
					})
				})
			}
			t(document).on("resize", function() {})
		})
	}
}(jQuery),
function(t) {
	t.fn.extend({
		openModal: function(e) {
			var n = this,
				r = t('<div id="lean-overlay"></div>');
			t("body").append(r);
			var i = {
				opacity: .5,
				in_duration: 300,
				out_duration: 200,
				ready: void 0,
				complete: void 0,
				dismissible: !0
			};
			e = t.extend(i, e), e.dismissible && t("#lean-overlay").click(function() {
				t(n).closeModal(e)
			}), t(n).find(".modal-close").click(function(r) {
				r.preventDefault(), t(n).closeModal(e)
			}), t("#lean-overlay").css({
				display: "block",
				opacity: 0
			}), t(n).css({
				display: "block",
				top: "4%",
				opacity: 0
			}), t("#lean-overlay").velocity({
				opacity: e.opacity
			}, {
				duration: e.in_duration,
				queue: !1,
				ease: "easeOutCubic"
			}), t(n).velocity({
				top: "10%",
				opacity: 1
			}, {
				duration: e.in_duration,
				queue: !1,
				ease: "easeOutCubic",
				complete: function() {
					"function" == typeof e.ready && e.ready()
				}
			})
		}
	}), t.fn.extend({
		closeModal: function(e) {
			var n = {
				out_duration: 200,
				complete: void 0
			}, e = t.extend(n, e);
			t("#lean-overlay").velocity({
				opacity: 0
			}, {
				duration: e.out_duration,
				queue: !1,
				ease: "easeOutQuart"
			}), t(this).fadeOut(e.out_duration, function() {
				t(this).css({
					top: 0
				}), t("#lean-overlay").css({
					display: "none"
				}), "function" == typeof e.complete && e.complete()
			})
		}
	}), t.fn.extend({
		leanModal: function(e) {
			return this.each(function() {
				t(this).click(function(n) {
					var r = t(this).attr("href");
					t(r).openModal(e), n.preventDefault()
				})
			})
		}
	})
}(jQuery),
function(t) {
	t.fn.materialbox = function() {
		return this.each(function() {
			function e() {
				var e = a.parent(".material-placeholder").attr("z-index");
				e || (e = 0), n = !1, t("#materialbox-overlay").fadeOut(o, function() {
					t(this).remove(), a.css("z-index", e)
				}), a.velocity({
					width: u
				}, {
					duration: o,
					queue: !1,
					easing: "easeOutQuad"
				}), a.velocity({
					height: l
				}, {
					duration: o,
					queue: !1,
					easing: "easeOutQuad"
				}), a.velocity({
					left: 0
				}, {
					duration: o,
					queue: !1,
					easing: "easeOutQuad"
				}), a.velocity({
					top: 0
				}, {
					duration: o,
					queue: !1,
					easing: "easeOutQuad"
				}), a.css("will-change", ""), a.removeClass("active"), t(".materialbox-caption").velocity({
					opacity: 0
				}, {
					duration: o,
					queue: !1,
					easing: "easeOutQuad",
					complete: function() {
						t(this).remove()
					}
				})
			}
			var n = !1,
				r = !0,
				i = 275,
				o = 225,
				a = t(this),
				s = t("<div></div>").addClass("material-placeholder"),
				u = a.width(),
				l = a.height();
			a.wrap(s), a.on("click", function() {
				var o = window.innerWidth,
					s = window.innerHeight;
				if (n || r === !1) return e(), !1;
				if (a.stop(), t("#materialbox-overlay").stop(!0, !0, !0), a.addClass("active"), u = a.width(), l = a.height(), a.parent(".material-placeholder").css("width", a.innerWidth()).css("height", l).css("position", "relative").css("top", 0).css("left", 0), a.css("position", "absolute"), "" !== a.data("caption")) {
					var c = t('<div class="materialbox-caption"></div');
					c.text(a.data("caption")), t("body").append(c)
				}
				var f = t("<div></div>");
				f.attr("id", "materialbox-overlay").css("width", t(document).width() + 100).css("height", t(document).height() + 100).css("top", 0).css("left", 0).css("opacity", 0).css("will-change", "opacity").click(function() {
					e()
				}), t("body").append(f), f.animate({
					opacity: 1
				}, {
					duration: i,
					queue: !1,
					easing: "easeOutQuad"
				}), n = !0, r = !1;
				var h = 0,
					d = u / o,
					p = l / s,
					m = 0,
					g = 0;
				d > p ? (h = l / u, m = .9 * o, g = .9 * o * h) : (h = u / l, m = .9 * s * h, g = .9 * s), "" !== a.data("caption") && (c.css({
					display: "inline"
				}), c.velocity({
					opacity: 1
				}, {
					duration: i,
					queue: !1,
					easing: "easeOutQuad"
				})), a.css("z-index", 1e3).css("will-change", "left, top"), a.hasClass("responsive-img") ? a.velocity({
					"max-width": m,
					width: u
				}, {
					duration: 0,
					queue: !1,
					complete: function() {
						a.css("left", 0).css("top", 0).velocity({
							height: g,
							width: m
						}, {
							duration: i,
							queue: !1,
							easing: "easeOutQuad"
						}).velocity({
							left: t(document).scrollLeft() + o / 2 - a.parent(".material-placeholder").offset().left - m / 2
						}, {
							duration: i,
							queue: !1,
							easing: "easeOutQuad"
						}).velocity({
							top: t(document).scrollTop() + s / 2 - a.parent(".material-placeholder").offset().top - g / 2
						}, {
							duration: i,
							queue: !1,
							easing: "easeOutQuad",
							complete: function() {
								r = !0
							}
						})
					}
				}) : a.css("left", 0).css("top", 0).velocity({
					height: g,
					width: m
				}, {
					duration: i,
					queue: !1,
					easing: "easeOutQuad"
				}).velocity({
					left: t(document).scrollLeft() + o / 2 - a.parent(".material-placeholder").offset().left - m / 2
				}, {
					duration: i,
					queue: !1,
					easing: "easeOutQuad"
				}).velocity({
					top: t(document).scrollTop() + s / 2 - a.parent(".material-placeholder").offset().top - g / 2
				}, {
					duration: i,
					queue: !1,
					easing: "easeOutQuad",
					complete: function() {
						r = !0
					}
				})
			}), t(window).scroll(function() {
				n && e()
			}), t(document).keyup(function(t) {
				27 === t.keyCode && n && e()
			})
		})
	}
}(jQuery),
function(t) {
	t.fn.parallax = function() {
		var e = t(window).width();
		return this.each(function() {
			function n(n) {
				if (e > 992) {
					var i = r.height(),
						o = r.children("img").height(),
						a = o - i,
						s = r.offset().top + i,
						u = r.offset().top,
						l = t(window).scrollTop(),
						c = window.innerHeight,
						f = l + c,
						h = (f - u) / (i + c),
						d = -1 * a * h;
					s > l && l + c > u && r.children("img").first().css("bottom", d + "px"), n && r.children("img").first().show()
				} else r.children("img").show()
			}
			var r = t(this);
			r.addClass("parallax"), n(!0), t(window).scroll(function() {
				e = t(window).width(), n(!1)
			})
		})
	}
}(jQuery),
function(t) {
	t.fn.tabs = function() {
		return this.each(function() {
			{
				var e = t(this);
				t(window).width()
			}
			e.width("100%");
			var n = t(this).children("li").length;
			e.children("li").each(function() {
				t(this).width(100 / n + "%")
			});
			var r, i, o = e.find("li.tab a"),
				a = e.width(),
				s = e.find("li").first().outerWidth(),
				u = 0;
			r = t(o.filter('[href="' + location.hash + '"]')[0] || o[0]), r.addClass("active"), u = o.index(r), 0 > u && (u = 0), i = t(r[0].hash), e.append('<div class="indicator"></div>');
			var l = e.find(".indicator");
			e.is(":visible") && (l.css({
				right: a - (u + 1) * s
			}), l.css({
				left: u * s
			})), t(window).resize(function() {
				a = e.width(), s = e.find("li").first().outerWidth(), 0 > u && (u = 0), 0 !== s && 0 !== a && (l.css({
					right: a - (u + 1) * s
				}), l.css({
					left: u * s
				}))
			}), o.not(r).each(function() {
				t(this.hash).hide()
			}), e.on("click", "a", function(n) {
				a = e.width(), s = e.find("li").first().outerWidth(), r.removeClass("active"), i.hide(), r = t(this), i = t(this.hash), o = e.find("li.tab a"), r.addClass("active");
				var c = u;
				u = o.index(t(this)), 0 > u && (u = 0), i.show(), u - c >= 0 ? (l.velocity({
					right: a - (u + 1) * s
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad"
				}), l.velocity({
					left: u * s
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad",
					delay: 80
				})) : (l.velocity({
					left: u * s
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad"
				}), l.velocity({
					right: a - (u + 1) * s
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad",
					delay: 80
				})), n.preventDefault()
			})
		})
	}
}(jQuery),
function(t) {
	var e, n, r;
	t.fn.tooltip = function(i) {
		var o = 5;
		n = !1;
		var a = {
			delay: 350
		};
		return i = t.extend(a, i), this.each(function() {
			var i = t(this),
				s = t("<div></div");
			s.addClass("material-tooltip").text(i.attr("data-tooltip")), s.appendTo(t("body"));
			var u = t("<div></div").addClass("backdrop");
			u.appendTo(s), u.css({
				top: 0,
				left: 0
			}), t(this).hover(function(t) {
				t.stopPropagation(), e = 0, r = setInterval(function() {
					if (e += 50, e >= a.delay && 0 == n) {
						n = !0, s.css({
							display: "block",
							left: "0px",
							top: "0px"
						});
						var t = i.outerWidth(),
							r = i.outerHeight(),
							l = i.attr("data-position"),
							c = s.outerHeight(),
							f = s.outerWidth(),
							h = "0px",
							d = "0px",
							p = 8;
						"top" === l ? (s.css({
							top: i.offset().top - c - o,
							left: i.offset().left + t / 2 - f / 2
						}), h = "-10px", u.css({
							borderRadius: "14px 14px 0 0",
							transformOrigin: "50% 90%",
							marginTop: c,
							marginLeft: f / 2 - u.width() / 2
						})) : "left" === l ? (s.css({
							top: i.offset().top + r / 2 - c / 2,
							left: i.offset().left - f - o
						}), d = "-10px", u.css({
							width: "14px",
							height: "14px",
							borderRadius: "14px 0 0 14px",
							transformOrigin: "95% 50%",
							marginTop: c / 2,
							marginLeft: f
						})) : "right" === l ? (s.css({
							top: i.offset().top + r / 2 - c / 2,
							left: i.offset().left + t + o
						}), d = "+10px", u.css({
							width: "14px",
							height: "14px",
							borderRadius: "0 14px 14px 0",
							transformOrigin: "5% 50%",
							marginTop: c / 2,
							marginLeft: "0px"
						})) : (s.css({
							top: i.offset().top + i.outerHeight() + o,
							left: i.offset().left + t / 2 - f / 2
						}), console.log(i.offset().left), console.log(t / 2), console.log(f / 2), h = "+10px", u.css({
							marginLeft: f / 2 - u.width() / 2
						})), p = f / 8, 8 > p && (p = 8), ("right" === l || "left" === l) && (p = f / 10, 6 > p && (p = 6)), s.velocity({
							opacity: 1,
							marginTop: h,
							marginLeft: d
						}, {
							duration: 350,
							queue: !1
						}), u.css({
							display: "block"
						}).velocity({
							opacity: 1
						}, {
							duration: 55,
							delay: 0,
							queue: !1
						}).velocity({
							scale: p
						}, {
							duration: 300,
							delay: 0,
							queue: !1,
							easing: "easeInOutQuad"
						})
					}
				}, 50)
			}, function() {
				clearInterval(r), e = 0, s.velocity({
					opacity: 0,
					marginTop: 0,
					marginLeft: 0
				}, {
					duration: 225,
					queue: !1,
					delay: 275
				}), u.velocity({
					opacity: 0,
					scale: 1
				}, {
					duration: 225,
					delay: 275,
					queue: !1,
					complete: function() {
						u.css("display", "none"), s.css("display", "none"), n = !1
					}
				})
			})
		})
	}
}(jQuery),
function(t) {
	"use strict";

	function e(t) {
		return null !== t && t === t.window
	}

	function n(t) {
		return e(t) ? t : 9 === t.nodeType && t.defaultView
	}

	function r(t) {
		var e, r, i = {
				top: 0,
				left: 0
			}, o = t && t.ownerDocument;
		return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (i = t.getBoundingClientRect()), r = n(o), {
			top: i.top + r.pageYOffset - e.clientTop,
			left: i.left + r.pageXOffset - e.clientLeft
		}
	}

	function i(t) {
		var e = "";
		for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
		return e
	}
	var o = o || {}, a = document.querySelectorAll.bind(document),
		s = {
			duration: 700,
			show: function(t) {
				if (2 === t.button) return !1;
				var e = this,
					n = document.createElement("div");
				n.className = "waves-ripple", e.appendChild(n);
				var o = r(e),
					a = t.pageY - o.top,
					s = t.pageX - o.left,
					u = "scale(" + e.clientWidth / 100 * 22 + ")";
				"touches" in t && (a = t.touches[0].pageY - o.top, s = t.touches[0].pageX - o.left), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-scale", u), n.setAttribute("data-x", s), n.setAttribute("data-y", a);
				var l = {
					top: a + "px",
					left: s + "px"
				};
				n.className = n.className + " waves-notransition", n.setAttribute("style", i(l)), n.className = n.className.replace("waves-notransition", ""), l["-webkit-transform"] = u, l["-moz-transform"] = u, l["-ms-transform"] = u, l["-o-transform"] = u, l.transform = u, l.opacity = "1", l["-webkit-transition-duration"] = "cubic-bezier(0.215, 0.610, 0.355, 1.000)", l["-moz-transition-duration"] = "cubic-bezier(0.215, 0.610, 0.355, 1.000)", l["-o-transition-duration"] = "cubic-bezier(0.215, 0.610, 0.355, 1.000)", l["transition-duration"] = "cubic-bezier(0.215, 0.610, 0.355, 1.000)", l["-webkit-transition-timing-function"] = "cubic-bezier(0.215, 0.610, 0.355, 1.000)", l["-moz-transition-timing-function"] = "cubic-bezier(0.215, 0.610, 0.355, 1.000)", l["-o-transition-timing-function"] = "cubic-bezier(0.215, 0.610, 0.355, 1.000)", l["transition-timing-function"] = "cubic-bezier(0.215, 0.610, 0.355, 1.000)", n.setAttribute("style", i(l))
			},
			hide: function() {
				for (var t = this, e = (1.4 * t.clientWidth, null), n = t.children.length, r = 0; n > r; r++) - 1 === t.children[r].className.indexOf("waves-ripple") || (e = t.children[r]);
				if (!e) return !1;
				var o = e.getAttribute("data-x"),
					a = e.getAttribute("data-y"),
					u = e.getAttribute("data-scale"),
					l = Date.now() - Number(e.getAttribute("data-hold")),
					c = 500 - l;
				0 > c && (c = 0), setTimeout(function() {
					var n = {
						top: a + "px",
						left: o + "px",
						opacity: "0",
						"-webkit-transition-duration": s.duration + "ms",
						"-moz-transition-duration": s.duration + "ms",
						"-o-transition-duration": s.duration + "ms",
						"transition-duration": s.duration + "ms",
						"-webkit-transform": u,
						"-moz-transform": u,
						"-ms-transform": u,
						"-o-transform": u,
						transform: u
					};
					e.setAttribute("style", i(n)), setTimeout(function() {
						try {
							t.removeChild(e)
						} catch (n) {
							return !1
						}
					}, s.duration)
				}, c)
			},
			wrapInput: function(t) {
				for (var e = 0; e < t.length; e++) {
					var n = t[e];
					if ("input" === n.tagName.toLowerCase()) {
						var r = n.parentNode;
						if ("i" === r.tagName.toLowerCase() && -1 !== r.className.indexOf("waves-effect")) return !1;
						var i = document.createElement("i");
						i.className = n.className + " waves-input-wrapper";
						var o = n.getAttribute("style");
						o || (o = ""), i.setAttribute("style", o), n.className = "waves-button-input", n.removeAttribute("style"), r.replaceChild(i, n), i.appendChild(n)
					}
				}
			}
		};
	o.displayEffect = function(e) {
		e = e || {}, "duration" in e && (s.duration = e.duration), s.wrapInput(a(".waves-effect")), Array.prototype.forEach.call(a(".waves-effect"), function(e) {
			"ontouchstart" in t ? (e.addEventListener("mouseup", s.hide, !1), e.addEventListener("touchstart", s.show, !1), e.addEventListener("mouseleave", s.hide, !1), e.addEventListener("touchend", s.hide, !1), e.addEventListener("touchcancel", s.hide, !1)) : (e.addEventListener("mousedown", s.show, !1), e.addEventListener("mouseup", s.hide, !1), e.addEventListener("mouseleave", s.hide, !1))
		})
	}, t.Waves = o, $(document).ready(function() {
		o.displayEffect()
	})
}(window),
function(t) {
	function e(t) {
		t = t || window.event, t.preventDefault && t.preventDefault(), t.returnValue = !1
	}

	function n(t) {
		for (var n = a.length; n--;)
			if (t.keyCode === a[n]) return void e(t)
	}

	function r(t) {
		e(t)
	}

	function i() {
		window.addEventListener && window.addEventListener("DOMMouseScroll", r, !1), window.onmousewheel = document.onmousewheel = r, document.onkeydown = n
	}

	function o() {
		window.removeEventListener && window.removeEventListener("DOMMouseScroll", r, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null
	}
	var a = [32, 33, 34, 35, 36, 37, 38, 39, 40];
	t.fn.sideNav = function(e) {
		var n = {
			menuWidth: 240,
			activationWidth: 70,
			edge: "left"
		};
		e = t.extend(n, e), t(this).each(function() {
			function n() {
				t("#sidenav-overlay").animate({
					opacity: 0
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad",
					complete: function() {
						t(this).remove()
					}
				}), "left" === e.edge ? a.velocity({
					left: -1 * (e.menuWidth + 10)
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad"
				}) : a.velocity({
					right: -1 * (e.menuWidth + 10)
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad"
				}), o()
			}
			var r = t(this),
				a = t("#" + r.attr("data-activates"));
			"left" != e.edge && a.addClass("right");
			var s = !1,
				u = !1;
			t("nothing").hammer({
				prevent_default: !1
			}).bind("pan", function(r) {
				if ("touch" === r.gesture.pointerType) {
					{
						var i = r.gesture.direction,
							o = r.gesture.center.x;
						r.gesture.center.y
					}
					if (s) {
						if (!t("#sidenav-overlay").length) {
							var l = t('<div id="sidenav-overlay"></div>');
							l.css("opacity", 0).click(function() {
								s = !1, u = !1, n(), "left" === e.edge ? a.velocity({
									left: -1 * e.menuWidth
								}, {
									duration: 300,
									queue: !1,
									easing: "easeOutQuad"
								}) : a.velocity({
									right: -1 * e.menuWidth
								}, {
									duration: 300,
									queue: !1,
									easing: "easeOutQuad"
								}), l.animate({
									opacity: 0
								}, {
									duration: 300,
									queue: !1,
									easing: "easeOutQuad",
									complete: function() {
										t(this).remove()
									}
								})
							}), t("body").append(l)
						}
						o > e.menuWidth ? o = e.menuWidth : 0 > o ? o = 0 : o < e.menuWidth / 2 ? u = !1 : o >= e.menuWidth / 2 && (u = !0), "left" === e.edge ? a.velocity({
							left: -1 * e.menuWidth + o
						}, {
							duration: 50,
							queue: !1,
							easing: "easeOutQuad"
						}) : a.velocity({
							right: -1 * e.menuWidth + o
						}, {
							duration: 50,
							queue: !1,
							easing: "easeOutQuad"
						});
						var c = o / e.menuWidth;
						t("#sidenav-overlay").velocity({
							opacity: c
						}, {
							duration: 50,
							queue: !1,
							easing: "easeOutQuad"
						})
					} else u ? r.gesture.center.x > e.menuWidth - e.activationWidth && 2 === i && (s = !0) : r.gesture.center.x < e.activationWidth && 4 === i && (s = !0)
				}
			}).bind("panend", function(e) {
				"touch" === e.gesture.pointerType && (s = !1, u ? (a.velocity({
					left: 0
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad"
				}), t("#sidenav-overlay").velocity({
					opacity: 1
				}, {
					duration: 50,
					queue: !1,
					easing: "easeOutQuad"
				})) : (a.velocity({
					left: -240
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad"
				}), t("#sidenav-overlay").velocity({
					opacity: 0
				}, {
					duration: 50,
					queue: !1,
					easing: "easeOutQuad",
					complete: function() {
						t(this).remove()
					}
				})))
			}), r.click(function() {
				if (a.hasClass("active")) u = !1, s = !1, n();
				else {
					i(), "left" === e.edge ? a.velocity({
						left: 0
					}, {
						duration: 300,
						queue: !1,
						easing: "easeOutQuad"
					}) : a.velocity({
						right: 0
					}, {
						duration: 300,
						queue: !1,
						easing: "easeOutQuad"
					});
					var r = t('<div id="sidenav-overlay"></div>');
					r.css("opacity", 0).click(function() {
						u = !1, s = !1, n(), r.animate({
							opacity: 0
						}, {
							duration: 300,
							queue: !1,
							easing: "easeOutQuad",
							complete: function() {
								t(this).remove()
							}
						})
					}), t("body").append(r), r.animate({
						opacity: 1
					}, {
						duration: 300,
						queue: !1,
						easing: "easeOutQuad",
						complete: function() {
							u = !0, s = !1
						}
					})
				}
				return !1
			})
		})
	}
}(jQuery),
function(t) {
	function e(e, n, r, i) {
		var o = t();
		return t.each(a, function(t, a) {
			if (a.height() > 0) {
				var s = a.offset().top,
					u = a.offset().left,
					l = u + a.width(),
					c = s + a.height(),
					f = !(u > n || i > l || s > r || e > c);
				f && o.push(a)
			}
		}), o
	}

	function n() {
		++l;
		var n = o.scrollTop(),
			r = o.scrollLeft(),
			i = r + o.width(),
			a = n + o.height(),
			u = e(n + c.top + 200, i + c.right, a + c.bottom, r + c.left);
		t.each(u, function(t, e) {
			var n = e.data("scrollSpy:ticks");
			"number" != typeof n && e.triggerHandler("scrollSpy:enter"), e.data("scrollSpy:ticks", l)
		}), t.each(s, function(t, e) {
			var n = e.data("scrollSpy:ticks");
			"number" == typeof n && n !== l && (e.triggerHandler("scrollSpy:exit"), e.data("scrollSpy:ticks", null))
		}), s = u
	}

	function r() {
		o.trigger("scrollSpy:winSize")
	}

	function i(t, e, n) {
		var r, i, o, a = null,
			s = 0;
		n || (n = {});
		var u = function() {
			s = n.leading === !1 ? 0 : f(), a = null, o = t.apply(r, i), r = i = null
		};
		return function() {
			var l = f();
			s || n.leading !== !1 || (s = l);
			var c = e - (l - s);
			return r = this, i = arguments, 0 >= c ? (clearTimeout(a), a = null, s = l, o = t.apply(r, i), r = i = null) : a || n.trailing === !1 || (a = setTimeout(u, c)), o
		}
	}
	var o = t(window),
		a = [],
		s = [],
		u = !1,
		l = 0,
		c = {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}, f = Date.now || function() {
			return (new Date).getTime()
		};
	t.scrollSpy = function(e, r) {
		var s = [];
		e = t(e), e.each(function(e, n) {
			a.push(t(n)), t(n).data("scrollSpy:id", e), t("a[href=#" + t(n).attr("id") + "]").click(function(e) {
				e.preventDefault();
				var n = t(this.hash).offset().top + 1;
				t(".tabs-wrapper").length ? t("html, body").animate({
					scrollTop: n - 60
				}, {
					duration: 400,
					easing: "easeOutCubic"
				}) : t("html, body").animate({
					scrollTop: n
				}, {
					duration: 400,
					easing: "easeOutCubic"
				})
			})
		}), r = r || {
			throttle: 100
		}, c.top = r.offsetTop || 0, c.right = r.offsetRight || 0, c.bottom = r.offsetBottom || 0, c.left = r.offsetLeft || 0;
		var l = i(n, r.throttle || 100),
			f = function() {
				t(document).ready(l)
			};
		return u || (o.on("scroll", f), o.on("resize", f), u = !0), setTimeout(f, 0), e.on("scrollSpy:enter", function() {
			s = t.grep(s, function(t) {
				return 0 != t.height()
			});
			var e = t(this);
			s[0] ? (t("a[href=#" + s[0].attr("id") + "]").removeClass("active"), e.data("scrollSpy:id") < s[0].data("scrollSpy:id") ? s.unshift(t(this)) : s.push(t(this))) : s.push(t(this)), t("a[href=#" + s[0].attr("id") + "]").addClass("active")
		}), e.on("scrollSpy:exit", function() {
			if (s = t.grep(s, function(t) {
				return 0 != t.height()
			}), s[0]) {
				t("a[href=#" + s[0].attr("id") + "]").removeClass("active");
				var e = t(this);
				s = t.grep(s, function(t) {
					return t.attr("id") != e.attr("id")
				}), s[0] && t("a[href=#" + s[0].attr("id") + "]").addClass("active")
			}
		}), e
	}, t.winSizeSpy = function(e) {
		return t.winSizeSpy = function() {
			return o
		}, e = e || {
			throttle: 100
		}, o.on("resize", i(r, e.throttle || 100))
	}, t.fn.scrollSpy = function(e) {
		return t.scrollSpy(t(this), e)
	}
}(jQuery),
function(t) {
	t(document).ready(function() {
		var e = "input[type=text], input[type=password], input[type=email], textarea";
		if (t(e).each(function() {
			0 !== t(this).val().length && t(this).siblings("label, i").addClass("active")
		}), t(document).on("focus", e, function() {
			t(this).siblings("label, i").addClass("active")
		}), t(document).on("blur", e, function() {
			console.log(t(this).is(":valid")), 0 === t(this).val().length ? (t(this).siblings("label, i").removeClass("active"), t(this).hasClass("validate") && (t(this).removeClass("valid"), t(this).removeClass("invalid"))) : t(this).hasClass("validate") && (t(this).is(":valid") ? (t(this).removeClass("invalid"), t(this).addClass("valid")) : (t(this).removeClass("valid"), t(this).addClass("invalid")))
		}), 0 === t(".hiddendiv").length) {
			var n = t('<div class="hiddendiv common"></div>'),
				r = null;
			t("body").append(n)
		}
		var i = (t(".hiddendiv"), ".materialize-textarea");
		t("body").on("keyup keydown", i, function() {
			r = t(this).val(), r = r.replace(/\n/g, "<br>"), n.html(r + "<br>"), t(this).css("height", n.height())
		});
		var o = "input[type=range]",
			a = !1;
		t(o).each(function() {
			var e = t('<span class="thumb"><span class="value"></span></span>');
			t(this).after(e)
		});
		var s = ".range-field";
		t(document).on("mousedown", s, function(e) {
			var n = t(this).children(".thumb");
			n.length <= 0 && (n = t('<span class="thumb"><span class="value"></span></span>'), t(this).append(n)), a = !0, t(this).addClass("active"), n.hasClass("active") || n.velocity({
				height: "30px",
				width: "30px",
				top: "-20px",
				marginLeft: "-15px"
			}, {
				duration: 300,
				easing: "easeOutExpo"
			});
			var r = e.pageX - t(this).offset().left,
				i = t(this).outerWidth();
			0 > r ? r = 0 : r > i && (r = i), n.addClass("active").css("left", r), n.find(".value").html(t(this).children("input[type=range]").val())
		}), t(document).on("mouseup", s, function() {
			a = !1, t(this).removeClass("active")
		}), t(document).on("mousemove", s, function(e) {
			var n = t(this).children(".thumb");
			if (a) {
				n.hasClass("active") || n.velocity({
					height: "30px",
					width: "30px",
					top: "-20px",
					marginLeft: "-15px"
				}, {
					duration: 300,
					easing: "easeOutExpo"
				});
				var r = e.pageX - t(this).offset().left,
					i = t(this).outerWidth();
				0 > r ? r = 0 : r > i && (r = i), n.addClass("active").css("left", r), n.find(".value").html(t(this).children("input[type=range]").val())
			}
		}), t(document).on("mouseout", s, function() {
			if (!a) {
				var e = t(this).children(".thumb");
				e.hasClass("active") && e.velocity({
					height: "0",
					width: "0",
					top: "10px",
					marginLeft: "-6px"
				}, {
					duration: 100
				}), e.removeClass("active")
			}
		}), t.fn.material_select = function() {
			t(this).each(function() {
				if ($select = t(this), !$select.hasClass("browser-default") && !$select.hasClass("initialized")) {
					var e = u(),
						n = t('<div class="select-wrapper"></div>'),
						r = t('<ul id="select-options-' + e + '" class="dropdown-content select-dropdown"></ul>'),
						i = $select.children("option"),
						o = i.first();
					i.each(function() {
						r.append(t('<li class="' + (t(this).is(":disabled") ? "disabled" : "") + '"><span>' + t(this).html() + "</span></li>"))
					}), r.find("li").each(function(e) {
						var n = $select;
						t(this).click(function() {
							t(this).hasClass("disabled") || (n.find("option").eq(e).prop("selected", !0), n.prev("span.select-dropdown").html(t(this).text()))
						})
					}), $select.wrap(n);
					var a = t('<span class="select-dropdown ' + ($select.is(":disabled") ? "disabled" : "") + '" data-activates="select-options-' + e + '">' + o.html() + "</span>");
					$select.before(a), t("body").append(r), $select.is(":disabled") || a.dropdown({
						hover: !1
					}), $select.addClass("initialized")
				}
			})
		};
		var u = function() {
			function t() {
				return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
			}
			return function() {
				return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
			}
		}()
	})
}(jQuery),
function(t) {
	t.fn.slider = function(e) {
		var n = {
			indicators: !0,
			height: 400,
			transition: 500,
			interval: 6e3
		};
		return e = t.extend(n, e), this.each(function() {
			function n(t, e) {
				t.hasClass("center-align") ? t.velocity({
					opacity: 0,
					translateY: -100
				}, {
					duration: e,
					queue: !1
				}) : t.hasClass("right-align") ? t.velocity({
					opacity: 0,
					translateX: 100
				}, {
					duration: e,
					queue: !1
				}) : t.hasClass("left-align") && t.velocity({
					opacity: 0,
					translateX: -100
				}, {
					duration: e,
					queue: !1
				})
			}

			function r(t) {
				t >= s.length ? t = 0 : 0 > t && (t = s.length - 1), u = a.find(".active").index(), u != t && (i = s.eq(u), $caption = i.find(".caption"), i.removeClass("active"), i.velocity({
					opacity: 0
				}, {
					duration: e.transition,
					queue: !1,
					easing: "easeOutQuad",
					complete: function() {
						s.not(".active").velocity({
							opacity: 0,
							translateX: 0,
							translateY: 0
						}, {
							duration: 0,
							queue: !1
						})
					}
				}), n($caption, e.transition), e.indicators && l.eq(u).removeClass("active"), s.eq(t).velocity({
					opacity: 1
				}, {
					duration: e.transition,
					queue: !1,
					easing: "easeOutQuad"
				}), s.eq(t).find(".caption").velocity({
					opacity: 1,
					translateX: 0,
					translateY: 0
				}, {
					duration: e.transition,
					delay: e.transition,
					queue: !1,
					easing: "easeOutQuad"
				}), s.eq(t).addClass("active"), e.indicators && l.eq(t).addClass("active"))
			}
			var i, o = t(this),
				a = o.find("ul.slides").first(),
				s = a.find("li"),
				u = a.find(".active").index();
			if (-1 != u && (i = s.eq(u)), o.height(e.height + 40), a.height(e.height), s.find(".caption").each(function() {
				n(t(this), 0)
			}), e.indicators) {
				var l = t('<ul class="indicators"></ul>');
				s.each(function() {
					var n = t('<li class="indicator-item"></li>');
					n.click(function() {
						var n = a.parent(),
							i = n.find(t(this)).index();
						r(i), clearInterval($interval), $interval = setInterval(function() {
							u = a.find(".active").index(), s.length == u + 1 ? u = 0 : u += 1, r(u)
						}, e.transition + e.interval)
					}), l.append(n)
				}), o.append(l), l = o.find("ul.indicators").find("li.indicator-item")
			}
			i ? i.show() : (s.first().addClass("active").velocity({
				opacity: 1
			}, {
				duration: e.transition,
				queue: !1,
				easing: "easeOutQuad"
			}), u = 0, i = s.eq(u), e.indicators && l.eq(u).addClass("active")), i.find("img").load(function() {
				i.find(".caption").velocity({
					opacity: 1,
					translateX: 0,
					translateY: 0
				}, {
					duration: e.transition,
					queue: !1,
					easing: "easeOutQuad"
				})
			}), $interval = setInterval(function() {
				u = a.find(".active").index(), r(u + 1)
			}, e.transition + e.interval);
			var c = !1,
				f = !1,
				h = !1;
			o.hammer({
				prevent_default: !1
			}).bind("pan", function(t) {
				if ("touch" === t.gesture.pointerType) {
					clearInterval($interval);
					var e = t.gesture.direction,
						n = t.gesture.deltaX,
						r = t.gesture.velocityX;
					$curr_slide = a.find(".active"), $curr_slide.velocity({
						translateX: n
					}, {
						duration: 50,
						queue: !1,
						easing: "easeOutQuad"
					}), 4 === e && (n > o.innerWidth() / 2 || -.65 > r) ? h = !0 : 2 === e && (n < -1 * o.innerWidth() / 2 || r > .65) && (f = !0);
					var i;
					f && (i = $curr_slide.next(), 0 === i.length && (i = s.first()), i.velocity({
						opacity: 1
					}, {
						duration: 300,
						queue: !1,
						easing: "easeOutQuad"
					})), h && (i = $curr_slide.prev(), 0 === i.length && (i = s.last()), i.velocity({
						opacity: 1
					}, {
						duration: 300,
						queue: !1,
						easing: "easeOutQuad"
					}))
				}
			}).bind("panend", function(t) {
				"touch" === t.gesture.pointerType && ($curr_slide = a.find(".active"), c = !1, curr_index = a.find(".active").index(), h || f ? f ? (r(curr_index + 1), $curr_slide.velocity({
					translateX: -1 * o.innerWidth()
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad",
					complete: function() {
						$curr_slide.velocity({
							opacity: 0,
							translateX: 0
						}, {
							duration: 0,
							queue: !1
						})
					}
				})) : h && (r(curr_index - 1), $curr_slide.velocity({
					translateX: o.innerWidth()
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad",
					complete: function() {
						$curr_slide.velocity({
							opacity: 0,
							translateX: 0
						}, {
							duration: 0,
							queue: !1
						})
					}
				})) : $curr_slide.velocity({
					translateX: 0
				}, {
					duration: 300,
					queue: !1,
					easing: "easeOutQuad"
				}), f = !1, h = !1, clearInterval($interval), $interval = setInterval(function() {
					u = a.find(".active").index(), s.length == u + 1 ? u = 0 : u += 1, r(u)
				}, e.transition + e.interval))
			})
		})
	}
}(jQuery),
function(t) {
	t(document).ready(function() {
		t(document).on("click.card", ".card", function(e) {
			t(this).find(".card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({
				translateY: 0
			}, {
				duration: 300,
				queue: !1,
				easing: "easeOutQuad"
			}) : (t(e.target).is(t(".card .card-title")) || t(e.target).is(t(".card .card-title i")) || t(e.target).is(t(".card .card-image"))) && t(this).find(".card-reveal").velocity({
				translateY: "-100%"
			}, {
				duration: 300,
				queue: !1,
				easing: "easeOutQuad"
			}))
		})
	})
}(jQuery),
function(t) {
	t(document).ready(function() {
		var e = function() {
			function t() {
				return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
			}
			return function() {
				return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
			}
		}();
		t.fn.pushpin = function(n) {
			var r = {
				top: 0,
				bottom: 1 / 0,
				offset: 0
			};
			return n = t.extend(r, n), $index = 0, this.each(function() {
				function r(t) {
					t.removeClass("pin-top"), t.removeClass("pinned"), t.removeClass("pin-bottom")
				}

				function i(e, i) {
					e.each(function() {
						n.top <= i && n.bottom >= i && !t(this).hasClass("pinned") && (r(t(this)), t(this).css("top", n.offset), t(this).addClass("pinned")), i < n.top && !t(this).hasClass("pin-top") && (r(t(this)), t(this).css("top", 0), t(this).addClass("pin-top")), i > n.bottom && !t(this).hasClass("pin-bottom") && (r(t(this)), t(this).addClass("pin-bottom"), t(this).css("top", n.bottom - s))
					})
				}
				var o = e(),
					a = t(this),
					s = t(this).offset().top;
				i(a, t(window).scrollTop()), t(window).on("scroll." + o, function() {
					var e = t(window).scrollTop() + n.offset;
					i(a, e)
				})
			})
		}
	})
}(jQuery),
function(t) {
	"function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery)
}(function(t) {
	function e(o, a, u, f) {
		function h() {
			return e._.node("div", e._.node("div", e._.node("div", e._.node("div", T.component.nodes(_.open), b.box), b.wrap), b.frame), b.holder)
		}

		function d() {
			w.data(a, T).addClass(b.input).attr("tabindex", -1).val(w.data("value") ? T.get("select", $.format) : o.value), $.editable || w.on("focus." + _.id + " click." + _.id, function(t) {
				t.preventDefault(), T.$root[0].focus()
			}).on("keydown." + _.id, g), i(o, {
				haspopup: !0,
				expanded: !1,
				readonly: !1,
				owns: o.id + "_root" + (T._hidden ? " " + T._hidden.id : "")
			})
		}

		function p() {
			T.$root.on({
				keydown: g,
				focusin: function(t) {
					T.$root.removeClass(b.focused), t.stopPropagation()
				},
				"mousedown click": function(e) {
					var n = e.target;
					n != T.$root.children()[0] && (e.stopPropagation(), "mousedown" != e.type || t(n).is(":input") || "OPTION" == n.nodeName || (e.preventDefault(), T.$root[0].focus()))
				}
			}).on({
				focus: function() {
					w.addClass(b.target)
				},
				blur: function() {
					w.removeClass(b.target)
				}
			}).on("focus.toOpen", v).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
				var e = t(this),
					n = e.data(),
					r = e.hasClass(b.navDisabled) || e.hasClass(b.disabled),
					i = s();
				i = i && (i.type || i.href), (r || i && !t.contains(T.$root[0], i)) && T.$root[0].focus(), !r && n.nav ? T.set("highlight", T.component.item.highlight, {
					nav: n.nav
				}) : !r && "pick" in n ? T.set("select", n.pick).close(!0) : n.clear ? T.clear().close(!0) : n.close && T.close(!0)
			}), i(T.$root[0], "hidden", !0)
		}

		function m() {
			var e;
			$.hiddenName === !0 ? (e = o.name, o.name = "") : (e = ["string" == typeof $.hiddenPrefix ? $.hiddenPrefix : "", "string" == typeof $.hiddenSuffix ? $.hiddenSuffix : "_submit"], e = e[0] + o.name + e[1]), T._hidden = t('<input type=hidden name="' + e + '"' + (w.data("value") || o.value ? ' value="' + T.get("select", $.formatSubmit) + '"' : "") + ">")[0], w.on("change." + _.id, function() {
				T._hidden.value = o.value ? T.get("select", $.formatSubmit) : ""
			}).after(T._hidden)
		}

		function g(t) {
			var e = t.keyCode,
				n = /^(8|46)$/.test(e);
			return 27 == e ? (T.close(), !1) : void((32 == e || n || !_.open && T.component.key[e]) && (t.preventDefault(), t.stopPropagation(), n ? T.clear().close() : T.open()))
		}

		function v(t) {
			t.stopPropagation(), "focus" == t.type && T.$root.addClass(b.focused), T.open()
		}
		if (!o) return e;
		var y = !1,
			_ = {
				id: o.id || "P" + Math.abs(~~(Math.random() * new Date))
			}, $ = u ? t.extend(!0, {}, u.defaults, f) : f || {}, b = t.extend({}, e.klasses(), $.klass),
			w = t(o),
			x = function() {
				return this.start()
			}, T = x.prototype = {
				constructor: x,
				$node: w,
				start: function() {
					return _ && _.start ? T : (_.methods = {}, _.start = !0, _.open = !1, _.type = o.type, o.autofocus = o == s(), o.readOnly = !$.editable, o.id = o.id || _.id, "text" != o.type && (o.type = "text"), T.component = new u(T, $), T.$root = t(e._.node("div", h(), b.picker, 'id="' + o.id + '_root" tabindex="0"')), p(), $.formatSubmit && m(), d(), $.container ? t($.container).append(T.$root) : w.after(T.$root), T.on({
						start: T.component.onStart,
						render: T.component.onRender,
						stop: T.component.onStop,
						open: T.component.onOpen,
						close: T.component.onClose,
						set: T.component.onSet
					}).on({
						start: $.onStart,
						render: $.onRender,
						stop: $.onStop,
						open: $.onOpen,
						close: $.onClose,
						set: $.onSet
					}), y = n(T.$root.children()[0]), o.autofocus && T.open(), T.trigger("start").trigger("render"))
				},
				render: function(t) {
					return t ? T.$root.html(h()) : T.$root.find("." + b.box).html(T.component.nodes(_.open)), T.trigger("render")
				},
				stop: function() {
					return _.start ? (T.close(), T._hidden && T._hidden.parentNode.removeChild(T._hidden), T.$root.remove(), w.removeClass(b.input).removeData(a), setTimeout(function() {
						w.off("." + _.id)
					}, 0), o.type = _.type, o.readOnly = !1, T.trigger("stop"), _.methods = {}, _.start = !1, T) : T
				},
				open: function(n) {
					return _.open ? T : (w.addClass(b.active), i(o, "expanded", !0), setTimeout(function() {
						T.$root.addClass(b.opened), i(T.$root[0], "hidden", !1)
					}, 0), n !== !1 && (_.open = !0, y && c.css("overflow", "hidden").css("padding-right", "+=" + r()), T.$root[0].focus(), l.on("click." + _.id + " focusin." + _.id, function(t) {
						var e = t.target;
						e != o && e != document && 3 != t.which && T.close(e === T.$root.children()[0])
					}).on("keydown." + _.id, function(n) {
						var r = n.keyCode,
							i = T.component.key[r],
							o = n.target;
						27 == r ? T.close(!0) : o != T.$root[0] || !i && 13 != r ? t.contains(T.$root[0], o) && 13 == r && (n.preventDefault(), o.click()) : (n.preventDefault(), i ? e._.trigger(T.component.key.go, T, [e._.trigger(i)]) : T.$root.find("." + b.highlighted).hasClass(b.disabled) || T.set("select", T.component.item.highlight).close())
					})), T.trigger("open"))
				},
				close: function(t) {
					return t && (T.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
						T.$root.on("focus.toOpen", v)
					}, 0)), w.removeClass(b.active), i(o, "expanded", !1), setTimeout(function() {
						T.$root.removeClass(b.opened + " " + b.focused), i(T.$root[0], "hidden", !0)
					}, 0), _.open ? (_.open = !1, y && c.css("overflow", "").css("padding-right", "-=" + r()), l.off("." + _.id), T.trigger("close")) : T
				},
				clear: function(t) {
					return T.set("clear", null, t)
				},
				set: function(e, n, r) {
					var i, o, a = t.isPlainObject(e),
						s = a ? e : {};
					if (r = a && t.isPlainObject(n) ? n : r || {}, e) {
						a || (s[e] = n);
						for (i in s) o = s[i], i in T.component.item && (void 0 === o && (o = null), T.component.set(i, o, r)), ("select" == i || "clear" == i) && w.val("clear" == i ? "" : T.get(i, $.format)).trigger("change");
						T.render()
					}
					return r.muted ? T : T.trigger("set", s)
				},
				get: function(t, n) {
					if (t = t || "value", null != _[t]) return _[t];
					if ("valueSubmit" == t) {
						if (T._hidden) return T._hidden.value;
						t = value
					}
					if ("value" == t) return o.value;
					if (t in T.component.item) {
						if ("string" == typeof n) {
							var r = T.component.get(t);
							return r ? e._.trigger(T.component.formats.toString, T.component, [n, r]) : ""
						}
						return T.component.get(t)
					}
				},
				on: function(e, n, r) {
					var i, o, a = t.isPlainObject(e),
						s = a ? e : {};
					if (e) {
						a || (s[e] = n);
						for (i in s) o = s[i], r && (i = "_" + i), _.methods[i] = _.methods[i] || [], _.methods[i].push(o)
					}
					return T
				},
				off: function() {
					var t, e, n = arguments;
					for (t = 0, namesCount = n.length; namesCount > t; t += 1) e = n[t], e in _.methods && delete _.methods[e];
					return T
				},
				trigger: function(t, n) {
					var r = function(t) {
						var r = _.methods[t];
						r && r.map(function(t) {
							e._.trigger(t, T, [n])
						})
					};
					return r("_" + t), r(t), T
				}
			};
		return new x
	}

	function n(t) {
		var e, n = "position";
		return t.currentStyle ? e = t.currentStyle[n] : window.getComputedStyle && (e = getComputedStyle(t)[n]), "fixed" == e
	}

	function r() {
		if (c.height() <= u.height()) return 0;
		var e = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
			n = e[0].offsetWidth;
		e.css("overflow", "scroll");
		var r = t('<div style="width:100%" />').appendTo(e),
			i = r[0].offsetWidth;
		return e.remove(), n - i
	}

	function i(e, n, r) {
		if (t.isPlainObject(n))
			for (var i in n) o(e, i, n[i]);
		else o(e, n, r)
	}

	function o(t, e, n) {
		t.setAttribute(("role" == e ? "" : "aria-") + e, n)
	}

	function a(e, n) {
		t.isPlainObject(e) || (e = {
			attribute: n
		}), n = "";
		for (var r in e) {
			var i = ("role" == r ? "" : "aria-") + r,
				o = e[r];
			n += null == o ? "" : i + '="' + e[r] + '"'
		}
		return n
	}

	function s() {
		try {
			return document.activeElement
		} catch (t) {}
	}
	var u = t(window),
		l = t(document),
		c = t(document.documentElement);
	return e.klasses = function(t) {
		return t = t || "picker", {
			picker: t,
			opened: t + "--opened",
			focused: t + "--focused",
			input: t + "__input",
			active: t + "__input--active",
			target: t + "__input--target",
			holder: t + "__holder",
			frame: t + "__frame",
			wrap: t + "__wrap",
			box: t + "__box"
		}
	}, e._ = {
		group: function(t) {
			for (var n, r = "", i = e._.trigger(t.min, t); i <= e._.trigger(t.max, t, [i]); i += t.i) n = e._.trigger(t.item, t, [i]), r += e._.node(t.node, n[0], n[1], n[2]);
			return r
		},
		node: function(e, n, r, i) {
			return n ? (n = t.isArray(n) ? n.join("") : n, r = r ? ' class="' + r + '"' : "", i = i ? " " + i : "", "<" + e + r + i + ">" + n + "</" + e + ">") : ""
		},
		lead: function(t) {
			return (10 > t ? "0" : "") + t
		},
		trigger: function(t, e, n) {
			return "function" == typeof t ? t.apply(e, n || []) : t
		},
		digits: function(t) {
			return /\d/.test(t[1]) ? 2 : 1
		},
		isDate: function(t) {
			return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
		},
		isInteger: function(t) {
			return {}.toString.call(t).indexOf("Number") > -1 && t % 1 === 0
		},
		ariaAttr: a
	}, e.extend = function(n, r) {
		t.fn[n] = function(i, o) {
			var a = this.data(n);
			return "picker" == i ? a : a && "string" == typeof i ? e._.trigger(a[i], a, [o]) : this.each(function() {
				var o = t(this);
				o.data(n) || new e(this, n, r, i)
			})
		}, t.fn[n].defaults = r.defaults
	}, e
}),
function(t) {
	"function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
}(function(t, e) {
	function n(t, e) {
		var n = this,
			r = t.$node[0],
			i = r.value,
			o = t.$node.data("value"),
			a = o || i,
			s = o ? e.formatSubmit : e.format,
			u = function() {
				return r.currentStyle ? "rtl" == r.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
			};
		n.settings = e, n.$node = t.$node, n.queue = {
			min: "measure create",
			max: "measure create",
			now: "now create",
			select: "parse create validate",
			highlight: "parse navigate create validate",
			view: "parse create validate viewset",
			disable: "deactivate",
			enable: "activate"
		}, n.item = {}, n.item.clear = null, n.item.disable = (e.disable || []).slice(0), n.item.enable = - function(t) {
			return t[0] === !0 ? t.shift() : -1
		}(n.item.disable), n.set("min", e.min).set("max", e.max).set("now"), a ? n.set("select", a, {
			format: s
		}) : n.set("select", null).set("highlight", n.item.now), n.key = {
			40: 7,
			38: -7,
			39: function() {
				return u() ? -1 : 1
			},
			37: function() {
				return u() ? 1 : -1
			},
			go: function(t) {
				var e = n.item.highlight,
					r = new Date(e.year, e.month, e.date + t);
				n.set("highlight", r, {
					interval: t
				}), this.render()
			}
		}, t.on("render", function() {
			t.$root.find("." + e.klass.selectMonth).on("change", function() {
				var n = this.value;
				n && (t.set("highlight", [t.get("view").year, n, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
			}), t.$root.find("." + e.klass.selectYear).on("change", function() {
				var n = this.value;
				n && (t.set("highlight", [n, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
			})
		}, 1).on("open", function() {
			var r = "";
			n.disabled(n.get("now")) && (r = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + r + ", select").attr("disabled", !1)
		}, 1).on("close", function() {
			t.$root.find("button, select").attr("disabled", !0)
		}, 1)
	}
	var r = 7,
		i = 6,
		o = t._,
		a = (new Date).getTimezoneOffset(),
		s = 60 * a * 1e3,
		u = function(t, e) {
			return t.getDate() === e.getUTCDate() && t.getMonth() === e.getUTCMonth() && t.getFullYear() === e.getUTCFullYear()
		}, l = function(t, e) {
			return new Date(t.year, t.month, t.date) < new Date(e.year, e.month, e.date)
		}, c = function(t, e) {
			return new Date(t.year, t.month, t.date) > new Date(e.year, e.month, e.date)
		};
	n.prototype.set = function(t, e, n) {
		var r = this,
			i = r.item;
		return null === e ? ("clear" == t && (t = "select"), i[t] = e, r) : (i["enable" == t ? "disable" : "flip" == t ? "enable" : t] = r.queue[t].split(" ").map(function(i) {
			return e = r[i](t, e, n)
		}).pop(), "select" == t ? r.set("highlight", i.select, n) : "highlight" == t ? r.set("view", i.highlight, n) : t.match(/^(flip|min|max|disable|enable)$/) && (i.select && r.disabled(i.select) && r.set("select", i.select, n), i.highlight && r.disabled(i.highlight) && r.set("highlight", i.highlight, n)), r)
	}, n.prototype.get = function(t) {
		return this.item[t]
	}, n.prototype.create = function(t, n, r) {
		return r = r || {}, n = void 0 === n ? t : n, n == -1 / 0 || 1 / 0 == n ? {
			year: n,
			month: n,
			date: n,
			day: n,
			obj: n,
			pick: n
		} : (n === !0 ? (n = new Date, r.rel && n.setDate(n.getDate() + r.rel)) : e.isPlainObject(n) && o.isInteger(n.pick) && (n = [n.year, n.month, n.date]), Array.isArray(n) && (n = new Date(n[0], n[1], n[2])), n = new Date(n), n.setHours(-a / 60, -a % 60, 0, 0), n = new Date(n.getTime() + s), {
			year: n.getFullYear(),
			month: n.getMonth(),
			date: n.getDate(),
			day: n.getDay(),
			obj: n,
			pick: n.getTime()
		})
	}, n.prototype.createRange = function(t, n) {
		var r = this,
			i = function(t) {
				return t === !0 || e.isArray(t) || o.isDate(t) ? r.create(t) : t
			};
		return o.isInteger(t) || (t = i(t)), o.isInteger(n) || (n = i(n)), o.isInteger(t) && e.isPlainObject(n) ? t = [n.year, n.month, n.date + t] : o.isInteger(n) && e.isPlainObject(t) && (n = [t.year, t.month, t.date + n]), {
			from: i(t),
			to: i(n)
		}
	}, n.prototype.withinRange = function(t, e) {
		return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
	}, n.prototype.overlapRanges = function(t, e) {
		var n = this;
		return t = n.createRange(t.from, t.to), e = n.createRange(e.from, e.to), n.withinRange(t, e.from) || n.withinRange(t, e.to) || n.withinRange(e, t.from) || n.withinRange(e, t.to)
	}, n.prototype.now = function() {
		return !0
	}, n.prototype.navigate = function(t, n, r) {
		var i, o, a, s, u = e.isArray(n),
			l = e.isPlainObject(n),
			c = this.item.view,
			f = 100;
		if (u || l) {
			for (l ? (o = n.year, a = n.month, s = n.date) : (o = +n[0], a = +n[1], s = +n[2]), r && r.nav && c && c.month !== a && (o = c.year, a = c.month), i = new Date(o, a + (r && r.nav ? r.nav : 0), 1), o = i.getFullYear(), a = i.getMonth(); f && new Date(o, a, s).getMonth() !== a;)
				if (s -= 1, f -= 1, !f) throw "Fell into an infinite loop while navigating to " + new Date(o, a, s) + ".";
			n = [o, a, s]
		}
		return n
	}, n.prototype.measure = function(t, e, n) {
		n = n || {};
		var r = this;
		return e ? "string" == typeof e ? e = r.parse(t, e) : o.isInteger(e) && (n.rel = e, e = !0) : e = "min" == t ? -1 / 0 : 1 / 0, e
	}, n.prototype.viewset = function(t, e) {
		return this.create([e.year, e.month, 1])
	}, n.prototype.validate = function(t, n, r) {
		var i, a, s, u, l = this,
			c = n,
			f = r && r.interval ? r.interval : 1,
			h = -1 === l.item.enable,
			d = l.item.min,
			p = l.item.max,
			m = h && l.item.disable.filter(function(t) {
				if (e.isArray(t)) {
					var r = l.create(t).pick;
					r < n.pick ? i = !0 : r > n.pick && (a = !0)
				}
				return o.isInteger(t)
			}).length,
			g = 100;
		if ((!r || !r.nav) && (!h && l.disabled(n) || h && l.disabled(n) && (m || i || a) || !h && (n.pick <= d.pick || n.pick >= p.pick)))
			for (h && !m && (!a && f > 0 || !i && 0 > f) && (f *= -1); g && l.disabled(n);) {
				if (g -= 1, !g) throw "Fell into an infinite loop while validating " + n.obj + ".";
				if (Math.abs(f) > 1 && (n.month < c.month || n.month > c.month) && (n = c, f = f > 0 ? 1 : -1), n.pick <= d.pick ? (s = !0, f = 1, n = l.create([d.year, d.month, d.date + (n.pick === d.pick ? 0 : -1)])) : n.pick >= p.pick && (u = !0, f = -1, n = l.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : 1)])), s && u) break;
				n = l.create([n.year, n.month, n.date + f])
			}
		return n
	}, n.prototype.disabled = function(t) {
		var n = this,
			r = n.item.disable.filter(function(r) {
				return o.isInteger(r) ? t.day === (n.settings.firstDay ? r : r - 1) % 7 : e.isArray(r) || o.isDate(r) ? t.pick === n.create(r).pick : e.isPlainObject(r) ? n.withinRange(r, t) : void 0
			});
		return r = r.length && !r.filter(function(t) {
			return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
		}).length, -1 === n.item.enable ? !r : r || t.pick < n.item.min.pick || t.pick > n.item.max.pick
	}, n.prototype.parse = function(t, e, n) {
		var r = this,
			i = {};
		return e && "string" == typeof e ? (n && n.format || (n = n || {}, n.format = r.settings.format), r.formats.toArray(n.format).map(function(t) {
			var n = r.formats[t],
				a = n ? o.trigger(n, r, [e, i]) : t.replace(/^!/, "").length;
			n && (i[t] = e.substr(0, a)), e = e.substr(a)
		}), [i.yyyy || i.yy, +(i.mm || i.m) - 1, i.dd || i.d]) : e
	}, n.prototype.formats = function() {
		function t(t, e, n) {
			var r = t.match(/\w+/)[0];
			return n.mm || n.m || (n.m = e.indexOf(r) + 1), r.length
		}

		function e(t) {
			return t.match(/\w+/)[0].length
		}
		return {
			d: function(t, e) {
				return t ? o.digits(t) : e.date
			},
			dd: function(t, e) {
				return t ? 2 : o.lead(e.date)
			},
			ddd: function(t, n) {
				return t ? e(t) : this.settings.weekdaysShort[n.day]
			},
			dddd: function(t, n) {
				return t ? e(t) : this.settings.weekdaysFull[n.day]
			},
			m: function(t, e) {
				return t ? o.digits(t) : e.month + 1
			},
			mm: function(t, e) {
				return t ? 2 : o.lead(e.month + 1)
			},
			mmm: function(e, n) {
				var r = this.settings.monthsShort;
				return e ? t(e, r, n) : r[n.month]
			},
			mmmm: function(e, n) {
				var r = this.settings.monthsFull;
				return e ? t(e, r, n) : r[n.month]
			},
			yy: function(t, e) {
				return t ? 2 : ("" + e.year).slice(2)
			},
			yyyy: function(t, e) {
				return t ? 4 : e.year
			},
			toArray: function(t) {
				return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
			},
			toString: function(t, e) {
				var n = this;
				return n.formats.toArray(t).map(function(t) {
					return o.trigger(n.formats[t], n, [0, e]) || t.replace(/^!/, "")
				}).join("")
			}
		}
	}(), n.prototype.isDateExact = function(t, n) {
		var r = this;
		return o.isInteger(t) && o.isInteger(n) || "boolean" == typeof t && "boolean" == typeof n ? t === n : (o.isDate(t) || e.isArray(t)) && (o.isDate(n) || e.isArray(n)) ? r.create(t).pick === r.create(n).pick : e.isPlainObject(t) && e.isPlainObject(n) ? r.isDateExact(t.from, n.from) && r.isDateExact(t.to, n.to) : !1
	}, n.prototype.isDateOverlap = function(t, n) {
		var r = this,
			i = r.settings.firstDay ? 1 : 0;
		return o.isInteger(t) && (o.isDate(n) || e.isArray(n)) ? (t = t % 7 + i, t === r.create(n).day + 1) : o.isInteger(n) && (o.isDate(t) || e.isArray(t)) ? (n = n % 7 + i, n === r.create(t).day + 1) : e.isPlainObject(t) && e.isPlainObject(n) ? r.overlapRanges(t, n) : !1
	}, n.prototype.flipEnable = function(t) {
		var e = this.item;
		e.enable = t || (-1 == e.enable ? 1 : -1)
	}, n.prototype.deactivate = function(t, n) {
		var r = this,
			i = r.item.disable.slice(0);
		return "flip" == n ? r.flipEnable() : n === !1 ? (r.flipEnable(1), i = []) : n === !0 ? (r.flipEnable(-1), i = []) : n.map(function(t) {
			for (var n, a = 0; a < i.length; a += 1)
				if (r.isDateExact(t, i[a])) {
					n = !0;
					break
				}
			n || (o.isInteger(t) || o.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && i.push(t)
		}), i
	}, n.prototype.activate = function(t, n) {
		var r = this,
			i = r.item.disable,
			a = i.length;
		return "flip" == n ? r.flipEnable() : n === !0 ? (r.flipEnable(1), i = []) : n === !1 ? (r.flipEnable(-1), i = []) : n.map(function(t) {
			var n, s, u, l;
			for (u = 0; a > u; u += 1) {
				if (s = i[u], r.isDateExact(s, t)) {
					n = i[u] = null, l = !0;
					break
				}
				if (r.isDateOverlap(s, t)) {
					e.isPlainObject(t) ? (t.inverted = !0, n = t) : e.isArray(t) ? (n = t, n[3] || n.push("inverted")) : o.isDate(t) && (n = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
					break
				}
			}
			if (n)
				for (u = 0; a > u; u += 1)
					if (r.isDateExact(i[u], t)) {
						i[u] = null;
						break
					}
			if (l)
				for (u = 0; a > u; u += 1)
					if (r.isDateOverlap(i[u], t)) {
						i[u] = null;
						break
					}
			n && i.push(n)
		}), i.filter(function(t) {
			return null != t
		})
	}, n.prototype.nodes = function(t) {
		var e = this,
			n = e.settings,
			a = e.item,
			s = a.now,
			f = a.select,
			h = a.highlight,
			d = a.view,
			p = a.disable,
			m = a.min,
			g = a.max,
			v = function(t, e) {
				return n.firstDay && (t.push(t.shift()), e.push(e.shift())), o.node("thead", o.node("tr", o.group({
					min: 0,
					max: r - 1,
					i: 1,
					node: "th",
					item: function(r) {
						return [t[r], n.klass.weekdays, 'scope=col title="' + e[r] + '"']
					}
				})))
			}((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysLetter).slice(0), n.weekdaysFull.slice(0)),
			y = function(t) {
				return o.node("div", " ", n.klass["nav" + (t ? "Next" : "Prev")] + (t && d.year >= g.year && d.month >= g.month || !t && d.year <= m.year && d.month <= m.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + o.ariaAttr({
					role: "button",
					controls: e.$node[0].id + "_table"
				}) + ' title="' + (t ? n.labelMonthNext : n.labelMonthPrev) + '"')
			}, _ = function(r) {
				var i = n.showMonthsShort ? n.monthsShort : n.monthsFull;
				return "short_months" == r && (i = n.monthsShort), n.selectMonths ? o.node("select", o.group({
					min: 0,
					max: 11,
					i: 1,
					node: "option",
					item: function(t) {
						return [i[t], 0, "value=" + t + (d.month == t ? " selected" : "") + (d.year == m.year && t < m.month || d.year == g.year && t > g.month ? " disabled" : "")]
					}
				}), n.klass.selectMonth, (t ? "" : "disabled") + " " + o.ariaAttr({
					controls: e.$node[0].id + "_table"
				}) + ' title="' + n.labelMonthSelect + '"') : "short_months" == r ? o.node("div", i[d.month]) : o.node("div", i[d.month], n.klass.month)
			}, $ = function(r) {
				var i = d.year,
					a = n.selectYears === !0 ? 5 : ~~(n.selectYears / 2);
				if (a) {
					var s = m.year,
						u = g.year,
						l = i - a,
						c = i + a;
					if (s > l && (c += s - l, l = s), c > u) {
						var f = l - s,
							h = c - u;
						l -= f > h ? h : f, c = u
					}
					return o.node("select", o.group({
						min: l,
						max: c,
						i: 1,
						node: "option",
						item: function(t) {
							return [t, 0, "value=" + t + (i == t ? " selected" : "")]
						}
					}), n.klass.selectYear, (t ? "" : "disabled") + " " + o.ariaAttr({
						controls: e.$node[0].id + "_table"
					}) + ' title="' + n.labelYearSelect + '"')
				}
				return "raw" == r ? o.node("div", i) : o.node("div", i, n.klass.year)
			};
		return createDayLabel = function() {
			return null != f ? o.node("div", f.date) : o.node("div", s.date)
		}, createWeekdayLabel = function() {
			var t;
			t = null != f ? f.day : s.day;
			var e = n.weekdaysFull[t];
			return e
		}, o.node("div", o.node("div", createWeekdayLabel(), "picker__weekday-display") + o.node("div", _("short_months"), n.klass.month_display) + o.node("div", createDayLabel(), n.klass.day_display) + o.node("div", $("raw"), n.klass.year_display), n.klass.date_display) + o.node("div", o.node("div", (n.selectYears ? $() + _() : _() + $()) + y() + y(1), n.klass.header) + o.node("table", v + o.node("tbody", o.group({
			min: 0,
			max: i - 1,
			i: 1,
			node: "tr",
			item: function(t) {
				var i = n.firstDay && 0 === e.create([d.year, d.month, 1]).day ? -7 : 0;
				return [o.group({
					min: r * t - d.day + i + 1,
					max: function() {
						return this.min + r - 1
					},
					i: 1,
					node: "td",
					item: function(t) {
						t = e.create([d.year, d.month, t + (n.firstDay ? 1 : 0)]);
						var r = u(s.obj, t.obj),
							i = f && u(f.obj, t.obj),
							a = h && u(h.obj, t.obj),
							v = p && e.disabled(t) || l(t, m) || c(t, g);
						return [o.node("div", t.obj.getUTCDate(), function(e) {
							return e.push(d.month == t.month ? n.klass.infocus : n.klass.outfocus), r && e.push(n.klass.now), i && e.push(n.klass.selected), a && e.push(n.klass.highlighted), v && e.push(n.klass.disabled), e.join(" ")
						}([n.klass.day]), "data-pick=" + t.pick + " " + o.ariaAttr({
							role: "gridcell",
							selected: i && e.$node.val() === o.trigger(e.formats.toString, e, [n.format, t]) ? !0 : null,
							activedescendant: a ? !0 : null,
							disabled: v ? !0 : null
						})), "", o.ariaAttr({
							role: "presentation"
						})]
					}
				})]
			}
		})), n.klass.table, 'id="' + e.$node[0].id + '_table" ' + o.ariaAttr({
			role: "grid",
			controls: e.$node[0].id,
			readonly: !0
		})), n.klass.calendar_container) + o.node("div", o.node("button", n.today, "btn-flat picker__today", "type=button data-pick=" + s.pick + (t && !e.disabled(s) ? "" : " disabled") + " " + o.ariaAttr({
			controls: e.$node[0].id
		})) + o.node("button", n.close, "btn-flat picker__close", "type=button data-close=true " + (t ? "" : " disabled") + " " + o.ariaAttr({
			controls: e.$node[0].id
		})), n.klass.footer)
	}, n.defaults = function(t) {
		return {
			labelMonthNext: "Next month",
			labelMonthPrev: "Previous month",
			labelMonthSelect: "Select a month",
			labelYearSelect: "Select a year",
			monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
			today: "Today",
			clear: "Clear",
			close: "Close",
			format: "d mmmm, yyyy",
			klass: {
				table: t + "table",
				header: t + "header",
				date_display: t + "date-display",
				day_display: t + "day-display",
				month_display: t + "month-display",
				year_display: t + "year-display",
				calendar_container: t + "calendar-container",
				navPrev: t + "nav--prev",
				navNext: t + "nav--next",
				navDisabled: t + "nav--disabled",
				month: t + "month",
				year: t + "year",
				selectMonth: t + "select--month",
				selectYear: t + "select--year",
				weekdays: t + "weekday",
				day: t + "day",
				disabled: t + "day--disabled",
				selected: t + "day--selected",
				highlighted: t + "day--highlighted",
				now: t + "day--today",
				infocus: t + "day--infocus",
				outfocus: t + "day--outfocus",
				footer: t + "footer",
				buttonClear: t + "button--clear",
				buttonToday: t + "button--today",
				buttonClose: t + "button--close"
			}
		}
	}(t.klasses().picker + "__"), t.extend("pickadate", n)
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
	"use strict";
	_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
		var r = function(t) {
			var e, n = [],
				r = t.length;
			for (e = 0; e !== r; n.push(t[e++]));
			return n
		}, i = function(t, e, r) {
				n.call(this, t, e, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = i.prototype.render
			}, o = 1e-10,
			a = n._internals,
			s = a.isSelector,
			u = a.isArray,
			l = i.prototype = n.to({}, .1, {}),
			c = [];
		i.version = "1.15.0", l.constructor = i, l.kill()._gc = !1, i.killTweensOf = i.killDelayedCallsTo = n.killTweensOf, i.getTweensOf = n.getTweensOf, i.lagSmoothing = n.lagSmoothing, i.ticker = n.ticker, i.render = n.render, l.invalidate = function() {
			return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
		}, l.updateTo = function(t, e) {
			var r, i = this.ratio,
				o = this.vars.immediateRender || t.immediateRender;
			e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
			for (r in t) this.vars[r] = t[r];
			if (this._initted || o)
				if (e) this._initted = !1, o && this.render(0, !0, !0);
				else
			if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
				var a = this._time;
				this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
			} else if (this._time > 0 || o) {
				this._initted = !1, this._init();
				for (var s, u = 1 / (1 - i), l = this._firstPT; l;) s = l.s + l.c, l.c *= u, l.s = s - l.c, l = l._next
			}
			return this
		}, l.render = function(t, e, n) {
			this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
			var r, i, s, u, l, f, h, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
				m = this._time,
				g = this._totalTime,
				v = this._cycle,
				y = this._duration,
				_ = this._rawPrevTime;
			if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, i = "onComplete"), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > _ || _ === o) && _ !== t && (n = !0, _ > o && (i = "onReverseComplete")), this._rawPrevTime = d = !e || t || _ === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && _ > 0 && _ !== o) && (i = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (_ >= 0 && (n = !0), this._rawPrevTime = d = !e || t || _ === t ? t : o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (u = y + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / y, f = this._easeType, h = this._easePower, (1 === f || 3 === f && l >= .5) && (l = 1 - l), 3 === f && (l *= 2), 1 === h ? l *= l : 2 === h ? l *= l * l : 3 === h ? l *= l * l * l : 4 === h && (l *= l * l * l * l), this.ratio = 1 === f ? 1 - l : 2 === f ? l : this._time / y < .5 ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / y)), m === this._time && !n && v === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)));
			if (!this._initted) {
				if (this._init(), !this._initted || this._gc) return;
				if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = _, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);
				this._time && !r ? this.ratio = this._ease.getRatio(this._time / y) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
			}
			for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
			this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, n), e || (this._totalTime !== g || r) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), i && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || c), 0 === y && this._rawPrevTime === o && d !== o && (this._rawPrevTime = 0))
		}, i.to = function(t, e, n) {
			return new i(t, e, n)
		}, i.from = function(t, e, n) {
			return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new i(t, e, n)
		}, i.fromTo = function(t, e, n, r) {
			return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new i(t, e, r)
		}, i.staggerTo = i.allTo = function(t, e, o, a, l, f, h) {
			a = a || 0;
			var d, p, m, g, v = o.delay || 0,
				y = [],
				_ = function() {
					o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), l.apply(h || this, f || c)
				};
			for (u(t) || ("string" == typeof t && (t = n.selector(t) || t), s(t) && (t = r(t))), t = t || [], 0 > a && (t = r(t), t.reverse(), a *= -1), d = t.length - 1, m = 0; d >= m; m++) {
				p = {};
				for (g in o) p[g] = o[g];
				p.delay = v, m === d && l && (p.onComplete = _), y[m] = new i(t[m], e, p), v += a
			}
			return y
		}, i.staggerFrom = i.allFrom = function(t, e, n, r, o, a, s) {
			return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, i.staggerTo(t, e, n, r, o, a, s)
		}, i.staggerFromTo = i.allFromTo = function(t, e, n, r, o, a, s, u) {
			return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, i.staggerTo(t, e, r, o, a, s, u)
		}, i.delayedCall = function(t, e, n, r, o) {
			return new i(e, 0, {
				delay: t,
				onComplete: e,
				onCompleteParams: n,
				onCompleteScope: r,
				onReverseComplete: e,
				onReverseCompleteParams: n,
				onReverseCompleteScope: r,
				immediateRender: !1,
				useFrames: o,
				overwrite: 0
			})
		}, i.set = function(t, e) {
			return new i(t, 0, e)
		}, i.isTweening = function(t) {
			return n.getTweensOf(t, !0).length > 0
		};
		var f = function(t, e) {
			for (var r = [], i = 0, o = t._first; o;) o instanceof n ? r[i++] = o : (e && (r[i++] = o), r = r.concat(f(o, e)), i = r.length), o = o._next;
			return r
		}, h = i.getAllTweens = function(e) {
				return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
			};
		i.killAll = function(t, n, r, i) {
			null == n && (n = !0), null == r && (r = !0);
			var o, a, s, u = h(0 != i),
				l = u.length,
				c = n && r && i;
			for (s = 0; l > s; s++) a = u[s], (c || a instanceof e || (o = a.target === a.vars.onComplete) && r || n && !o) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
		}, i.killChildTweensOf = function(t, e) {
			if (null != t) {
				var o, l, c, f, h, d = a.tweenLookup;
				if ("string" == typeof t && (t = n.selector(t) || t), s(t) && (t = r(t)), u(t))
					for (f = t.length; --f > -1;) i.killChildTweensOf(t[f], e);
				else {
					o = [];
					for (c in d)
						for (l = d[c].target.parentNode; l;) l === t && (o = o.concat(d[c].tweens)), l = l.parentNode;
					for (h = o.length, f = 0; h > f; f++) e && o[f].totalTime(o[f].totalDuration()), o[f]._enabled(!1, !1)
				}
			}
		};
		var d = function(t, n, r, i) {
			n = n !== !1, r = r !== !1, i = i !== !1;
			for (var o, a, s = h(i), u = n && r && i, l = s.length; --l > -1;) a = s[l], (u || a instanceof e || (o = a.target === a.vars.onComplete) && r || n && !o) && a.paused(t)
		};
		return i.pauseAll = function(t, e, n) {
			d(!0, t, e, n)
		}, i.resumeAll = function(t, e, n) {
			d(!1, t, e, n)
		}, i.globalTimeScale = function(e) {
			var r = t._rootTimeline,
				i = n.ticker.time;
			return arguments.length ? (e = e || o, r._startTime = i - (i - r._startTime) * r._timeScale / e, r = t._rootFramesTimeline, i = n.ticker.frame, r._startTime = i - (i - r._startTime) * r._timeScale / e, r._timeScale = t._rootTimeline._timeScale = e, e) : r._timeScale
		}, l.progress = function(t) {
			return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
		}, l.totalProgress = function(t) {
			return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
		}, l.time = function(t, e) {
			return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
		}, l.duration = function(e) {
			return arguments.length ? t.prototype.duration.call(this, e) : this._duration
		}, l.totalDuration = function(t) {
			return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
		}, l.repeat = function(t) {
			return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
		}, l.repeatDelay = function(t) {
			return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
		}, l.yoyo = function(t) {
			return arguments.length ? (this._yoyo = t, this) : this._yoyo
		}, i
	}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
		var r = function(t) {
			e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
			var n, r, i = this.vars;
			for (r in i) n = i[r], s(n) && -1 !== n.join("").indexOf("{self}") && (i[r] = this._swapSelfInParams(n));
			s(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
		}, i = 1e-10,
			o = n._internals,
			a = o.isSelector,
			s = o.isArray,
			u = o.lazyTweens,
			l = o.lazyRender,
			c = [],
			f = _gsScope._gsDefine.globals,
			h = function(t) {
				var e, n = {};
				for (e in t) n[e] = t[e];
				return n
			}, d = function(t, e, n, r) {
				var i = t._timeline,
					o = i._totalTime;
				!e && this._forcingPlayhead || i._rawPrevTime === t._startTime || (i.pause(t._startTime), e && e.apply(r || i, n || c), this._forcingPlayhead && i.seek(o))
			}, p = function(t) {
				var e, n = [],
					r = t.length;
				for (e = 0; e !== r; n.push(t[e++]));
				return n
			}, m = r.prototype = new e;
		return r.version = "1.15.0", m.constructor = r, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, r, i) {
			var o = r.repeat && f.TweenMax || n;
			return e ? this.add(new o(t, e, r), i) : this.set(t, r, i)
		}, m.from = function(t, e, r, i) {
			return this.add((r.repeat && f.TweenMax || n).from(t, e, r), i)
		}, m.fromTo = function(t, e, r, i, o) {
			var a = i.repeat && f.TweenMax || n;
			return e ? this.add(a.fromTo(t, e, r, i), o) : this.set(t, i, o)
		}, m.staggerTo = function(t, e, i, o, s, u, l, c) {
			var f, d = new r({
					onComplete: u,
					onCompleteParams: l,
					onCompleteScope: c,
					smoothChildTiming: this.smoothChildTiming
				});
			for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], a(t) && (t = p(t)), o = o || 0, 0 > o && (t = p(t), t.reverse(), o *= -1), f = 0; f < t.length; f++) i.startAt && (i.startAt = h(i.startAt)), d.to(t[f], e, h(i), f * o);
			return this.add(d, s)
		}, m.staggerFrom = function(t, e, n, r, i, o, a, s) {
			return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(t, e, n, r, i, o, a, s)
		}, m.staggerFromTo = function(t, e, n, r, i, o, a, s, u) {
			return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, this.staggerTo(t, e, r, i, o, a, s, u)
		}, m.call = function(t, e, r, i) {
			return this.add(n.delayedCall(0, t, e, r), i)
		}, m.set = function(t, e, r) {
			return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new n(t, 0, e), r)
		}, r.exportRoot = function(t, e) {
			t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
			var i, o, a = new r(t),
				s = a._timeline;
			for (null == e && (e = !0), s._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = s._time, i = s._first; i;) o = i._next, e && i instanceof n && i.target === i.vars.onComplete || a.add(i, i._startTime - i._delay), i = o;
			return s.add(a, 0), a
		}, m.add = function(i, o, a, u) {
			var l, c, f, h, d, p;
			if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, i)), !(i instanceof t)) {
				if (i instanceof Array || i && i.push && s(i)) {
					for (a = a || "normal", u = u || 0, l = o, c = i.length, f = 0; c > f; f++) s(h = i[f]) && (h = new r({
						tweens: h
					})), this.add(h, l), "string" != typeof h && "function" != typeof h && ("sequence" === a ? l = h._startTime + h.totalDuration() / h._timeScale : "start" === a && (h._startTime -= h.delay())), l += u;
					return this._uncache(!0)
				}
				if ("string" == typeof i) return this.addLabel(i, o);
				if ("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
				i = n.delayedCall(0, i)
			}
			if (e.prototype.add.call(this, i, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
				for (d = this, p = d.rawTime() > i._startTime; d._timeline;) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
			return this
		}, m.remove = function(e) {
			if (e instanceof t) return this._remove(e, !1);
			if (e instanceof Array || e && e.push && s(e)) {
				for (var n = e.length; --n > -1;) this.remove(e[n]);
				return this
			}
			return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
		}, m._remove = function(t, n) {
			e.prototype._remove.call(this, t, n);
			var r = this._last;
			return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
		}, m.append = function(t, e) {
			return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
		}, m.insert = m.insertMultiple = function(t, e, n, r) {
			return this.add(t, e || 0, n, r)
		}, m.appendMultiple = function(t, e, n, r) {
			return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, r)
		}, m.addLabel = function(t, e) {
			return this._labels[t] = this._parseTimeOrLabel(e), this
		}, m.addPause = function(t, e, r, i) {
			var o = n.delayedCall(0, d, ["{self}", e, r, i], this);
			return o.data = "isPause", this.add(o, t)
		}, m.removeLabel = function(t) {
			return delete this._labels[t], this
		}, m.getLabelTime = function(t) {
			return null != this._labels[t] ? this._labels[t] : -1
		}, m._parseTimeOrLabel = function(e, n, r, i) {
			var o;
			if (i instanceof t && i.timeline === this) this.remove(i);
			else if (i && (i instanceof Array || i.push && s(i)))
				for (o = i.length; --o > -1;) i[o] instanceof t && i[o].timeline === this && this.remove(i[o]);
			if ("string" == typeof n) return this._parseTimeOrLabel(n, r && "number" == typeof e && null == this._labels[n] ? e - this.duration() : 0, r);
			if (n = n || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
			else {
				if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? r ? this._labels[e] = this.duration() + n : n : this._labels[e] + n;
				n = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, r) : this.duration()
			}
			return Number(e) + n
		}, m.seek = function(t, e) {
			return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
		}, m.stop = function() {
			return this.paused(!0)
		}, m.gotoAndPlay = function(t, e) {
			return this.play(t, e)
		}, m.gotoAndStop = function(t, e) {
			return this.pause(t, e)
		}, m.render = function(t, e, n) {
			this._gc && this._enabled(!0, !1);
			var r, o, a, s, f, h = this._dirty ? this.totalDuration() : this._totalDuration,
				d = this._time,
				p = this._startTime,
				m = this._timeScale,
				g = this._paused;
			if (t >= h ? (this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (o = !0, s = "onComplete", 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === i) && this._rawPrevTime !== t && this._first && (f = !0, this._rawPrevTime > i && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : i, t = h + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== i && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (s = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (f = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : i, t = 0, this._initted || (f = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== d && this._first || n || f) {
				if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= d)
					for (r = this._first; r && (a = r._next, !this._paused || g);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = a;
				else
					for (r = this._last; r && (a = r._prev, !this._paused || g);)(r._active || r._startTime <= d && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = a;
				this._onUpdate && (e || (u.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))), s && (this._gc || (p === this._startTime || m !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (o && (u.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || c)))
			}
		}, m._hasPausedChild = function() {
			for (var t = this._first; t;) {
				if (t._paused || t instanceof r && t._hasPausedChild()) return !0;
				t = t._next
			}
			return !1
		}, m.getChildren = function(t, e, r, i) {
			i = i || -9999999999;
			for (var o = [], a = this._first, s = 0; a;) a._startTime < i || (a instanceof n ? e !== !1 && (o[s++] = a) : (r !== !1 && (o[s++] = a), t !== !1 && (o = o.concat(a.getChildren(!0, e, r)), s = o.length))), a = a._next;
			return o
		}, m.getTweensOf = function(t, e) {
			var r, i, o = this._gc,
				a = [],
				s = 0;
			for (o && this._enabled(!0, !0), r = n.getTweensOf(t), i = r.length; --i > -1;)(r[i].timeline === this || e && this._contains(r[i])) && (a[s++] = r[i]);
			return o && this._enabled(!1, !0), a
		}, m.recent = function() {
			return this._recent
		}, m._contains = function(t) {
			for (var e = t.timeline; e;) {
				if (e === this) return !0;
				e = e.timeline
			}
			return !1
		}, m.shiftChildren = function(t, e, n) {
			n = n || 0;
			for (var r, i = this._first, o = this._labels; i;) i._startTime >= n && (i._startTime += t), i = i._next;
			if (e)
				for (r in o) o[r] >= n && (o[r] += t);
			return this._uncache(!0)
		}, m._kill = function(t, e) {
			if (!t && !e) return this._enabled(!1, !1);
			for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = n.length, i = !1; --r > -1;) n[r]._kill(t, e) && (i = !0);
			return i
		}, m.clear = function(t) {
			var e = this.getChildren(!1, !0, !0),
				n = e.length;
			for (this._time = this._totalTime = 0; --n > -1;) e[n]._enabled(!1, !1);
			return t !== !1 && (this._labels = {}), this._uncache(!0)
		}, m.invalidate = function() {
			for (var e = this._first; e;) e.invalidate(), e = e._next;
			return t.prototype.invalidate.call(this)
		}, m._enabled = function(t, n) {
			if (t === this._gc)
				for (var r = this._first; r;) r._enabled(t, !0), r = r._next;
			return e.prototype._enabled.call(this, t, n)
		}, m.totalTime = function() {
			this._forcingPlayhead = !0;
			var e = t.prototype.totalTime.apply(this, arguments);
			return this._forcingPlayhead = !1, e
		}, m.duration = function(t) {
			return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
		}, m.totalDuration = function(t) {
			if (!arguments.length) {
				if (this._dirty) {
					for (var e, n, r = 0, i = this._last, o = 999999999999; i;) e = i._prev, i._dirty && i.totalDuration(), i._startTime > o && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : o = i._startTime, i._startTime < 0 && !i._paused && (r -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), o = 0), n = i._startTime + i._totalDuration / i._timeScale, n > r && (r = n), i = e;
					this._duration = this._totalDuration = r, this._dirty = !1
				}
				return this._totalDuration
			}
			return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
		}, m.usesFrames = function() {
			for (var e = this._timeline; e._timeline;) e = e._timeline;
			return e === t._rootFramesTimeline
		}, m.rawTime = function() {
			return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
		}, r
	}, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, n) {
		var r = function(e) {
			t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
		}, i = 1e-10,
			o = [],
			a = e._internals,
			s = a.lazyTweens,
			u = a.lazyRender,
			l = new n(null, null, 1, 0),
			c = r.prototype = new t;
		return c.constructor = r, c.kill()._gc = !1, r.version = "1.15.0", c.invalidate = function() {
			return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
		}, c.addCallback = function(t, n, r, i) {
			return this.add(e.delayedCall(0, t, r, i), n)
		}, c.removeCallback = function(t, e) {
			if (t)
				if (null == e) this._kill(null, t);
				else
					for (var n = this.getTweensOf(t, !1), r = n.length, i = this._parseTimeOrLabel(e); --r > -1;) n[r]._startTime === i && n[r]._enabled(!1, !1);
			return this
		}, c.tweenTo = function(t, n) {
			n = n || {};
			var r, i, a, s = {
					ease: l,
					overwrite: n.delay ? 2 : 1,
					useFrames: this.usesFrames(),
					immediateRender: !1
				};
			for (i in n) s[i] = n[i];
			return s.time = this._parseTimeOrLabel(t), r = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, a = new e(this, r, s), s.onStart = function() {
				a.target.paused(!0), a.vars.time !== a.target.time() && r === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || a, n.onStartParams || o)
			}, a
		}, c.tweenFromTo = function(t, e, n) {
			n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = {
				onComplete: this.seek,
				onCompleteParams: [t],
				onCompleteScope: this
			}, n.immediateRender = n.immediateRender !== !1;
			var r = this.tweenTo(e, n);
			return r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
		}, c.render = function(t, e, n) {
			this._gc && this._enabled(!0, !1);
			var r, a, l, c, f, h, d = this._dirty ? this.totalDuration() : this._totalDuration,
				p = this._duration,
				m = this._time,
				g = this._totalTime,
				v = this._startTime,
				y = this._timeScale,
				_ = this._rawPrevTime,
				$ = this._paused,
				b = this._cycle;
			if (t >= d ? (this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, c = "onComplete", 0 === this._duration && (0 === t || 0 > _ || _ === i) && _ !== t && this._first && (f = !0, _ > i && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : i, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === p && _ !== i && (_ > 0 || 0 > t && _ >= 0) && !this._locked) && (c = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, _ >= 0 && this._first && (f = !0), this._rawPrevTime = t) : (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : i, t = 0, this._initted || (f = !0))) : (0 === p && 0 > _ && (f = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = p + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time))), this._cycle !== b && !this._locked) {
				var w = this._yoyo && 0 !== (1 & b),
					x = w === (this._yoyo && 0 !== (1 & this._cycle)),
					T = this._totalTime,
					S = this._cycle,
					C = this._rawPrevTime,
					k = this._time;
				if (this._totalTime = b * p, this._cycle < b ? w = !w : this._totalTime += p, this._time = m, this._rawPrevTime = 0 === p ? _ - 1e-4 : _, this._cycle = b, this._locked = !0, m = w ? 0 : p, this.render(m, e, 0 === p), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o), x && (m = w ? p + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !$) return;
				this._time = k, this._totalTime = T, this._cycle = S, this._rawPrevTime = C
			}
			if (!(this._time !== m && this._first || n || f)) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
			if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= m)
				for (r = this._first; r && (l = r._next, !this._paused || $);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = l;
			else
				for (r = this._last; r && (l = r._prev, !this._paused || $);)(r._active || r._startTime <= m && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = l;
			this._onUpdate && (e || (s.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o))), c && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (a && (s.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || o)))
		}, c.getActive = function(t, e, n) {
			null == t && (t = !0), null == e && (e = !0), null == n && (n = !1);
			var r, i, o = [],
				a = this.getChildren(t, e, n),
				s = 0,
				u = a.length;
			for (r = 0; u > r; r++) i = a[r], i.isActive() && (o[s++] = i);
			return o
		}, c.getLabelAfter = function(t) {
			t || 0 !== t && (t = this._time);
			var e, n = this.getLabelsArray(),
				r = n.length;
			for (e = 0; r > e; e++)
				if (n[e].time > t) return n[e].name;
			return null
		}, c.getLabelBefore = function(t) {
			null == t && (t = this._time);
			for (var e = this.getLabelsArray(), n = e.length; --n > -1;)
				if (e[n].time < t) return e[n].name;
			return null
		}, c.getLabelsArray = function() {
			var t, e = [],
				n = 0;
			for (t in this._labels) e[n++] = {
				time: this._labels[t],
				name: t
			};
			return e.sort(function(t, e) {
				return t.time - e.time
			}), e
		}, c.progress = function(t, e) {
			return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
		}, c.totalProgress = function(t, e) {
			return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
		}, c.totalDuration = function(e) {
			return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
		}, c.time = function(t, e) {
			return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
		}, c.repeat = function(t) {
			return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
		}, c.repeatDelay = function(t) {
			return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
		}, c.yoyo = function(t) {
			return arguments.length ? (this._yoyo = t, this) : this._yoyo
		}, c.currentLabel = function(t) {
			return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
		}, r
	}, !0),
	function() {
		var t = 180 / Math.PI,
			e = [],
			n = [],
			r = [],
			i = {}, o = _gsScope._gsDefine.globals,
			a = function(t, e, n, r) {
				this.a = t, this.b = e, this.c = n, this.d = r, this.da = r - t, this.ca = n - t, this.ba = e - t
			}, s = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
			u = function(t, e, n, r) {
				var i = {
					a: t
				}, o = {}, a = {}, s = {
						c: r
					}, u = (t + e) / 2,
					l = (e + n) / 2,
					c = (n + r) / 2,
					f = (u + l) / 2,
					h = (l + c) / 2,
					d = (h - f) / 8;
				return i.b = u + (t - u) / 4, o.b = f + d, i.c = o.a = (i.b + o.b) / 2, o.c = a.a = (f + h) / 2, a.b = h - d, s.b = c + (r - c) / 4, a.c = s.a = (a.b + s.b) / 2, [i, o, a, s]
			}, l = function(t, i, o, a, s) {
				var l, c, f, h, d, p, m, g, v, y, _, $, b, w = t.length - 1,
					x = 0,
					T = t[0].a;
				for (l = 0; w > l; l++) d = t[x], c = d.a, f = d.d, h = t[x + 1].d, s ? (_ = e[l], $ = n[l], b = ($ + _) * i * .25 / (a ? .5 : r[l] || .5), p = f - (f - c) * (a ? .5 * i : 0 !== _ ? b / _ : 0), m = f + (h - f) * (a ? .5 * i : 0 !== $ ? b / $ : 0), g = f - (p + ((m - p) * (3 * _ / (_ + $) + .5) / 4 || 0))) : (p = f - (f - c) * i * .5, m = f + (h - f) * i * .5, g = f - (p + m) / 2), p += g, m += g, d.c = v = p, d.b = 0 !== l ? T : T = d.a + .6 * (d.c - d.a), d.da = f - c, d.ca = v - c, d.ba = T - c, o ? (y = u(c, T, v, f), t.splice(x, 1, y[0], y[1], y[2], y[3]), x += 4) : x++, T = m;
				d = t[x], d.b = T, d.c = T + .4 * (d.d - T), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = T - d.a, o && (y = u(d.a, T, d.c, d.d), t.splice(x, 1, y[0], y[1], y[2], y[3]))
			}, c = function(t, r, i, o) {
				var s, u, l, c, f, h, d = [];
				if (o)
					for (t = [o].concat(t), u = t.length; --u > -1;) "string" == typeof(h = t[u][r]) && "=" === h.charAt(1) && (t[u][r] = o[r] + Number(h.charAt(0) + h.substr(2)));
				if (s = t.length - 2, 0 > s) return d[0] = new a(t[0][r], 0, 0, t[-1 > s ? 0 : 1][r]), d;
				for (u = 0; s > u; u++) l = t[u][r], c = t[u + 1][r], d[u] = new a(l, 0, 0, c), i && (f = t[u + 2][r], e[u] = (e[u] || 0) + (c - l) * (c - l), n[u] = (n[u] || 0) + (f - c) * (f - c));
				return d[u] = new a(t[u][r], 0, 0, t[u + 1][r]), d
			}, f = function(t, o, a, u, f, h) {
				var d, p, m, g, v, y, _, $, b = {}, w = [],
					x = h || t[0];
				f = "string" == typeof f ? "," + f + "," : s, null == o && (o = 1);
				for (p in t[0]) w.push(p);
				if (t.length > 1) {
					for ($ = t[t.length - 1], _ = !0, d = w.length; --d > -1;)
						if (p = w[d], Math.abs(x[p] - $[p]) > .05) {
							_ = !1;
							break
						}
					_ && (t = t.concat(), h && t.unshift(h), t.push(t[1]), h = t[t.length - 3])
				}
				for (e.length = n.length = r.length = 0, d = w.length; --d > -1;) p = w[d], i[p] = -1 !== f.indexOf("," + p + ","), b[p] = c(t, p, i[p], h);
				for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), n[d] = Math.sqrt(n[d]);
				if (!u) {
					for (d = w.length; --d > -1;)
						if (i[p])
							for (m = b[w[d]], y = m.length - 1, g = 0; y > g; g++) v = m[g + 1].da / n[g] + m[g].da / e[g], r[g] = (r[g] || 0) + v * v;
					for (d = r.length; --d > -1;) r[d] = Math.sqrt(r[d])
				}
				for (d = w.length, g = a ? 4 : 1; --d > -1;) p = w[d], m = b[p], l(m, o, a, u, i[p]), _ && (m.splice(0, g), m.splice(m.length - g, g));
				return b
			}, h = function(t, e, n) {
				e = e || "soft";
				var r, i, o, s, u, l, c, f, h, d, p, m = {}, g = "cubic" === e ? 3 : 2,
					v = "soft" === e,
					y = [];
				if (v && n && (t = [n].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
				for (h in t[0]) y.push(h);
				for (l = y.length; --l > -1;) {
					for (h = y[l], m[h] = u = [], d = 0, f = t.length, c = 0; f > c; c++) r = null == n ? t[c][h] : "string" == typeof(p = t[c][h]) && "=" === p.charAt(1) ? n[h] + Number(p.charAt(0) + p.substr(2)) : Number(p), v && c > 1 && f - 1 > c && (u[d++] = (r + u[d - 2]) / 2), u[d++] = r;
					for (f = d - g + 1, d = 0, c = 0; f > c; c += g) r = u[c], i = u[c + 1], o = u[c + 2], s = 2 === g ? 0 : u[c + 3], u[d++] = p = 3 === g ? new a(r, i, o, s) : new a(r, (2 * i + r) / 3, (2 * i + o) / 3, o);
					u.length = d
				}
				return m
			}, d = function(t, e, n) {
				for (var r, i, o, a, s, u, l, c, f, h, d, p = 1 / n, m = t.length; --m > -1;)
					for (h = t[m], o = h.a, a = h.d - o, s = h.c - o, u = h.b - o, r = i = 0, c = 1; n >= c; c++) l = p * c, f = 1 - l, r = i - (i = (l * l * a + 3 * f * (l * s + f * u)) * l), d = m * n + c - 1, e[d] = (e[d] || 0) + r * r
			}, p = function(t, e) {
				e = e >> 0 || 6;
				var n, r, i, o, a = [],
					s = [],
					u = 0,
					l = 0,
					c = e - 1,
					f = [],
					h = [];
				for (n in t) d(t[n], a, e);
				for (i = a.length, r = 0; i > r; r++) u += Math.sqrt(a[r]), o = r % e, h[o] = u, o === c && (l += u, o = r / e >> 0, f[o] = h, s[o] = l, u = 0, h = []);
				return {
					length: l,
					lengths: s,
					segments: f
				}
			}, m = _gsScope._gsDefine.plugin({
				propName: "bezier",
				priority: -1,
				version: "1.3.4",
				API: 2,
				global: !0,
				init: function(t, e, n) {
					this._target = t, e instanceof Array && (e = {
						values: e
					}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
					var r, i, o, a, s, u = e.values || [],
						l = {}, c = u[0],
						d = e.autoRotate || n.vars.orientToBezier;
					this._autoRotate = d ? d instanceof Array ? d : [
						["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]
					] : null;
					for (r in c) this._props.push(r);
					for (o = this._props.length; --o > -1;) r = this._props[o], this._overwriteProps.push(r), i = this._func[r] = "function" == typeof t[r], l[r] = i ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), s || l[r] !== u[0][r] && (s = l);
					if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(u, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, s) : h(u, e.type, l), this._segCount = this._beziers[r].length, this._timeRes) {
						var m = p(this._beziers, this._timeRes);
						this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
					}
					if (d = this._autoRotate)
						for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), o = d.length; --o > -1;) {
							for (a = 0; 3 > a; a++) r = d[o][a], this._func[r] = "function" == typeof t[r] ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
							r = d[o][2], this._initialRotations[o] = this._func[r] ? this._func[r].call(this._target) : this._target[r]
						}
					return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
				},
				set: function(e) {
					var n, r, i, o, a, s, u, l, c, f, h = this._segCount,
						d = this._func,
						p = this._target,
						m = e !== this._startRatio;
					if (this._timeRes) {
						if (c = this._lengths, f = this._curSeg, e *= this._length, i = this._li, e > this._l2 && h - 1 > i) {
							for (l = h - 1; l > i && (this._l2 = c[++i]) <= e;);
							this._l1 = c[i - 1], this._li = i, this._curSeg = f = this._segments[i], this._s2 = f[this._s1 = this._si = 0]
						} else if (e < this._l1 && i > 0) {
							for (; i > 0 && (this._l1 = c[--i]) >= e;);
							0 === i && e < this._l1 ? this._l1 = 0 : i++, this._l2 = c[i], this._li = i, this._curSeg = f = this._segments[i], this._s1 = f[(this._si = f.length - 1) - 1] || 0, this._s2 = f[this._si]
						}
						if (n = i, e -= this._l1, i = this._si, e > this._s2 && i < f.length - 1) {
							for (l = f.length - 1; l > i && (this._s2 = f[++i]) <= e;);
							this._s1 = f[i - 1], this._si = i
						} else if (e < this._s1 && i > 0) {
							for (; i > 0 && (this._s1 = f[--i]) >= e;);
							0 === i && e < this._s1 ? this._s1 = 0 : i++, this._s2 = f[i], this._si = i
						}
						s = (i + (e - this._s1) / (this._s2 - this._s1)) * this._prec
					} else n = 0 > e ? 0 : e >= 1 ? h - 1 : h * e >> 0, s = (e - n * (1 / h)) * h;
					for (r = 1 - s, i = this._props.length; --i > -1;) o = this._props[i], a = this._beziers[o][n], u = (s * s * a.da + 3 * r * (s * a.ca + r * a.ba)) * s + a.a, this._round[o] && (u = Math.round(u)), d[o] ? p[o](u) : p[o] = u;
					if (this._autoRotate) {
						var g, v, y, _, $, b, w, x = this._autoRotate;
						for (i = x.length; --i > -1;) o = x[i][2], b = x[i][3] || 0, w = x[i][4] === !0 ? 1 : t, a = this._beziers[x[i][0]], g = this._beziers[x[i][1]], a && g && (a = a[n], g = g[n], v = a.a + (a.b - a.a) * s, _ = a.b + (a.c - a.b) * s, v += (_ - v) * s, _ += (a.c + (a.d - a.c) * s - _) * s, y = g.a + (g.b - g.a) * s, $ = g.b + (g.c - g.b) * s, y += ($ - y) * s, $ += (g.c + (g.d - g.c) * s - $) * s, u = m ? Math.atan2($ - y, _ - v) * w + b : this._initialRotations[i], d[o] ? p[o](u) : p[o] = u)
					}
				}
			}),
			g = m.prototype;
		m.bezierThrough = f, m.cubicToQuadratic = u, m._autoCSS = !0, m.quadraticToCubic = function(t, e, n) {
			return new a(t, (2 * e + t) / 3, (2 * e + n) / 3, n)
		}, m._cssRegister = function() {
			var t = o.CSSPlugin;
			if (t) {
				var e = t._internals,
					n = e._parseToProxy,
					r = e._setPluginRatio,
					i = e.CSSPropTween;
				e._registerComplexSpecialProp("bezier", {
					parser: function(t, e, o, a, s, u) {
						e instanceof Array && (e = {
							values: e
						}), u = new m;
						var l, c, f, h = e.values,
							d = h.length - 1,
							p = [],
							g = {};
						if (0 > d) return s;
						for (l = 0; d >= l; l++) f = n(t, h[l], a, s, u, d !== l), p[l] = f.end;
						for (c in e) g[c] = e[c];
						return g.values = p, s = new i(t, "bezier", 0, 0, f.pt, 2), s.data = f, s.plugin = u, s.setRatio = r, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (l = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != f.end.left ? [
							["left", "top", "rotation", l, !1]
						] : null != f.end.x ? [
							["x", "y", "rotation", l, !1]
						] : !1), g.autoRotate && (a._transform || a._enableTransforms(!1), f.autoRotate = a._target._gsTransform), u._onInitTween(f.proxy, g, a._tween), s
					}
				})
			}
		}, g._roundProps = function(t, e) {
			for (var n = this._overwriteProps, r = n.length; --r > -1;)(t[n[r]] || t.bezier || t.bezierThrough) && (this._round[n[r]] = e)
		}, g._kill = function(t) {
			var e, n, r = this._props;
			for (e in this._beziers)
				if (e in t)
					for (delete this._beziers[e], delete this._func[e], n = r.length; --n > -1;) r[n] === e && r.splice(n, 1);
			return this._super._kill.call(this, t)
		}
	}(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
		var n, r, i, o, a = function() {
				t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
			}, s = _gsScope._gsDefine.globals,
			u = {}, l = a.prototype = new t("css");
		l.constructor = a, a.version = "1.15.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = {
			top: l,
			right: l,
			bottom: l,
			left: l,
			width: l,
			height: l,
			fontSize: l,
			padding: l,
			margin: l,
			perspective: l,
			lineHeight: ""
		};
		var c, f, h, d, p, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
			v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
			_ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
			$ = /(?:\d|\-|\+|=|#|\.)*/g,
			b = /opacity *= *([^)]*)/i,
			w = /opacity:([^;]*)/i,
			x = /alpha\(opacity *=.+?\)/i,
			T = /^(rgb|hsl)/,
			S = /([A-Z])/g,
			C = /-([a-z])/gi,
			k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
			P = function(t, e) {
				return e.toUpperCase()
			}, O = /(?:Left|Right|Width)/i,
			A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			D = /,(?=[^\)]*(?:\(|$))/gi,
			M = Math.PI / 180,
			j = 180 / Math.PI,
			N = {}, R = document,
			I = function(t) {
				return R.createElementNS ? R.createElementNS("http://www.w3.org/1999/xhtml", t) : R.createElement(t)
			}, q = I("div"),
			F = I("img"),
			L = a._internals = {
				_specialProps: u
			}, V = navigator.userAgent,
			z = function() {
				var t = V.indexOf("Android"),
					e = I("a");
				return h = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || Number(V.substr(t + 8, 1)) > 3), p = h && Number(V.substr(V.indexOf("Version/") + 8, 1)) < 6, d = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
			}(),
			H = function(t) {
				return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
			}, Y = function(t) {
				window.console && console.log(t)
			}, U = "",
			W = "",
			B = function(t, e) {
				e = e || q;
				var n, r, i = e.style;
				if (void 0 !== i[t]) return t;
				for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + t];);
				return r >= 0 ? (W = 3 === r ? "ms" : n[r], U = "-" + W.toLowerCase() + "-", W + t) : null
			}, X = R.defaultView ? R.defaultView.getComputedStyle : function() {}, Q = a.getStyle = function(t, e, n, r, i) {
				var o;
				return z || "opacity" !== e ? (!r && t.style[e] ? o = t.style[e] : (n = n || X(t)) ? o = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == i || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : i) : H(t)
			}, G = L.convertToPixels = function(t, n, r, i, o) {
				if ("px" === i || !i) return r;
				if ("auto" === i || !r) return 0;
				var s, u, l, c = O.test(n),
					f = t,
					h = q.style,
					d = 0 > r;
				if (d && (r = -r), "%" === i && -1 !== n.indexOf("border")) s = r / 100 * (c ? t.clientWidth : t.clientHeight);
				else {
					if (h.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== i && f.appendChild) h[c ? "borderLeftWidth" : "borderTopWidth"] = r + i;
					else {
						if (f = t.parentNode || R.body, u = f._gsCache, l = e.ticker.frame, u && c && u.time === l) return u.width * r / 100;
						h[c ? "width" : "height"] = r + i
					}
					f.appendChild(q), s = parseFloat(q[c ? "offsetWidth" : "offsetHeight"]), f.removeChild(q), c && "%" === i && a.cacheWidths !== !1 && (u = f._gsCache = f._gsCache || {}, u.time = l, u.width = s / r * 100), 0 !== s || o || (s = G(t, n, r, i, !0))
				}
				return d ? -s : s
			}, Z = L.calculateOffset = function(t, e, n) {
				if ("absolute" !== Q(t, "position", n)) return 0;
				var r = "left" === e ? "Left" : "Top",
					i = Q(t, "margin" + r, n);
				return t["offset" + r] - (G(t, e, parseFloat(i), i.replace($, "")) || 0)
			}, J = function(t, e) {
				var n, r, i = {};
				if (e = e || X(t, null))
					if (n = e.length)
						for (; --n > -1;) i[e[n].replace(C, P)] = e.getPropertyValue(e[n]);
					else
						for (n in e) i[n] = e[n];
					else
				if (e = t.currentStyle || t.style)
					for (n in e) "string" == typeof n && void 0 === i[n] && (i[n.replace(C, P)] = e[n]);
				return z || (i.opacity = H(t)), r = De(t, e, !1), i.rotation = r.rotation, i.skewX = r.skewX, i.scaleX = r.scaleX, i.scaleY = r.scaleY, i.x = r.x, i.y = r.y, Se && (i.z = r.z, i.rotationX = r.rotationX, i.rotationY = r.rotationY, i.scaleZ = r.scaleZ), i.filters && delete i.filters, i
			}, K = function(t, e, n, r, i) {
				var o, a, s, u = {}, l = t.style;
				for (a in n) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (o = n[a]) || i && i[a]) && -1 === a.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (u[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[a] || "" === e[a].replace(_, "") ? o : 0 : Z(t, a), void 0 !== l[a] && (s = new de(l, a, l[a], s)));
				if (r)
					for (a in r) "className" !== a && (u[a] = r[a]);
				return {
					difs: u,
					firstMPT: s
				}
			}, te = {
				width: ["Left", "Right"],
				height: ["Top", "Bottom"]
			}, ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
			ne = function(t, e, n) {
				var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
					i = te[e],
					o = i.length;
				for (n = n || X(t, null); --o > -1;) r -= parseFloat(Q(t, "padding" + i[o], n, !0)) || 0, r -= parseFloat(Q(t, "border" + i[o] + "Width", n, !0)) || 0;
				return r
			}, re = function(t, e) {
				(null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
				var n = t.split(" "),
					r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
					i = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
				return null == i ? i = "0" : "center" === i && (i = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== i.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === i.charAt(1), e.ox = parseFloat(r.replace(_, "")), e.oy = parseFloat(i.replace(_, ""))), r + " " + i + (n.length > 2 ? " " + n[2] : "")
			}, ie = function(t, e) {
				return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
			}, oe = function(t, e) {
				return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
			}, ae = function(t, e, n, r) {
				var i, o, a, s, u = 1e-6;
				return null == t ? s = e : "number" == typeof t ? s = t : (i = 360, o = t.split("_"), a = Number(o[0].replace(_, "")) * (-1 === t.indexOf("rad") ? 1 : j) - ("=" === t.charAt(1) ? 0 : e), o.length && (r && (r[n] = e + a), -1 !== t.indexOf("short") && (a %= i, a !== a % (i / 2) && (a = 0 > a ? a + i : a - i)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * i) % i - (a / i | 0) * i : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * i) % i - (a / i | 0) * i)), s = e + a), u > s && s > -u && (s = 0), s
			}, se = {
				aqua: [0, 255, 255],
				lime: [0, 255, 0],
				silver: [192, 192, 192],
				black: [0, 0, 0],
				maroon: [128, 0, 0],
				teal: [0, 128, 128],
				blue: [0, 0, 255],
				navy: [0, 0, 128],
				white: [255, 255, 255],
				fuchsia: [255, 0, 255],
				olive: [128, 128, 0],
				yellow: [255, 255, 0],
				orange: [255, 165, 0],
				gray: [128, 128, 128],
				purple: [128, 0, 128],
				green: [0, 128, 0],
				red: [255, 0, 0],
				pink: [255, 192, 203],
				cyan: [0, 255, 255],
				transparent: [255, 255, 255, 0]
			}, ue = function(t, e, n) {
				return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (n - e) * t * 6 : .5 > t ? n : 2 > 3 * t ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
			}, le = a.parseColor = function(t) {
				var e, n, r, i, o, a;
				return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), se[t] ? se[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), n = t.charAt(2), r = t.charAt(3), t = "#" + e + e + n + n + r + r), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), i = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, a = Number(t[2]) / 100, n = .5 >= a ? a * (o + 1) : a + o - a * o, e = 2 * a - n, t.length > 3 && (t[3] = Number(t[3])), t[0] = ue(i + 1 / 3, e, n), t[1] = ue(i, e, n), t[2] = ue(i - 1 / 3, e, n), t) : (t = t.match(g) || se.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : se.black
			}, ce = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
		for (l in se) ce += "|" + l + "\\b";
		ce = new RegExp(ce + ")", "gi");
		var fe = function(t, e, n, r) {
			if (null == t) return function(t) {
				return t
			};
			var i, o = e ? (t.match(ce) || [""])[0] : "",
				a = t.split(o).join("").match(y) || [],
				s = t.substr(0, t.indexOf(a[0])),
				u = ")" === t.charAt(t.length - 1) ? ")" : "",
				l = -1 !== t.indexOf(" ") ? " " : ",",
				c = a.length,
				f = c > 0 ? a[0].replace(g, "") : "";
			return c ? i = e ? function(t) {
				var e, h, d, p;
				if ("number" == typeof t) t += f;
				else if (r && D.test(t)) {
					for (p = t.replace(D, "|").split("|"), d = 0; d < p.length; d++) p[d] = i(p[d]);
					return p.join(",")
				}
				if (e = (t.match(ce) || [o])[0], h = t.split(e).join("").match(y) || [], d = h.length, c > d--)
					for (; ++d < c;) h[d] = n ? h[(d - 1) / 2 | 0] : a[d];
				return s + h.join(l) + l + e + u + (-1 !== t.indexOf("inset") ? " inset" : "")
			} : function(t) {
				var e, o, h;
				if ("number" == typeof t) t += f;
				else if (r && D.test(t)) {
					for (o = t.replace(D, "|").split("|"), h = 0; h < o.length; h++) o[h] = i(o[h]);
					return o.join(",")
				}
				if (e = t.match(y) || [], h = e.length, c > h--)
					for (; ++h < c;) e[h] = n ? e[(h - 1) / 2 | 0] : a[h];
				return s + e.join(l) + u
			} : function(t) {
				return t
			}
		}, he = function(t) {
				return t = t.split(","),
				function(e, n, r, i, o, a, s) {
					var u, l = (n + "").split(" ");
					for (s = {}, u = 0; 4 > u; u++) s[t[u]] = l[u] = l[u] || l[(u - 1) / 2 >> 0];
					return i.parse(e, s, o, a)
				}
			}, de = (L._setPluginRatio = function(t) {
				this.plugin.setRatio(t);
				for (var e, n, r, i, o = this.data, a = o.proxy, s = o.firstMPT, u = 1e-6; s;) e = a[s.v], s.r ? e = Math.round(e) : u > e && e > -u && (e = 0), s.t[s.p] = e, s = s._next;
				if (o.autoRotate && (o.autoRotate.rotation = a.rotation), 1 === t)
					for (s = o.firstMPT; s;) {
						if (n = s.t, n.type) {
							if (1 === n.type) {
								for (i = n.xs0 + n.s + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
								n.e = i
							}
						} else n.e = n.s + n.xs0;
						s = s._next
					}
			}, function(t, e, n, r, i) {
				this.t = t, this.p = e, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
			}),
			pe = (L._parseToProxy = function(t, e, n, r, i, o) {
				var a, s, u, l, c, f = r,
					h = {}, d = {}, p = n._transform,
					m = N;
				for (n._transform = null, N = e, r = c = n.parse(t, e, r, i), N = m, o && (n._transform = p, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
					if (r.type <= 1 && (s = r.p, d[s] = r.s + r.c, h[s] = r.s, o || (l = new de(r, "s", s, l, r.r), r.c = 0), 1 === r.type))
						for (a = r.l; --a > 0;) u = "xn" + a, s = r.p + "_" + u, d[s] = r.data[u], h[s] = r[u], o || (l = new de(r, u, s, l, r.rxp[u]));
					r = r._next
				}
				return {
					proxy: h,
					end: d,
					firstMPT: l,
					pt: c
				}
			}, L.CSSPropTween = function(t, e, r, i, a, s, u, l, c, f, h) {
				this.t = t, this.p = e, this.s = r, this.c = i, this.n = u || e, t instanceof pe || o.push(this.n), this.r = l, this.type = s || 0, c && (this.pr = c, n = !0), this.b = void 0 === f ? r : f, this.e = void 0 === h ? r + i : h, a && (this._next = a, a._prev = this)
			}),
			me = a.parseComplex = function(t, e, n, r, i, o, a, s, u, l) {
				n = n || o || "", a = new pe(t, e, 0, 0, a, l ? 2 : 1, null, !1, s, n, r), r += "";
				var f, h, d, p, m, y, _, $, b, w, x, S, C = n.split(", ").join(",").split(" "),
					k = r.split(", ").join(",").split(" "),
					P = C.length,
					O = c !== !1;
				for ((-1 !== r.indexOf(",") || -1 !== n.indexOf(",")) && (C = C.join(" ").replace(D, ", ").split(" "), k = k.join(" ").replace(D, ", ").split(" "), P = C.length), P !== k.length && (C = (o || "").split(" "), P = C.length), a.plugin = u, a.setRatio = l, f = 0; P > f; f++)
					if (p = C[f], m = k[f], $ = parseFloat(p), $ || 0 === $) a.appendXtra("", $, ie(m, $), m.replace(v, ""), O && -1 !== m.indexOf("px"), !0);
					else
				if (i && ("#" === p.charAt(0) || se[p] || T.test(p))) S = "," === m.charAt(m.length - 1) ? ")," : ")", p = le(p), m = le(m), b = p.length + m.length > 6, b && !z && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[f]).join("transparent")) : (z || (b = !1), a.appendXtra(b ? "rgba(" : "rgb(", p[0], m[0] - p[0], ",", !0, !0).appendXtra("", p[1], m[1] - p[1], ",", !0).appendXtra("", p[2], m[2] - p[2], b ? "," : S, !0), b && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (m.length < 4 ? 1 : m[3]) - p, S, !1)));
				else if (y = p.match(g)) {
					if (_ = m.match(v), !_ || _.length !== y.length) return a;
					for (d = 0, h = 0; h < y.length; h++) x = y[h], w = p.indexOf(x, d), a.appendXtra(p.substr(d, w - d), Number(x), ie(_[h], x), "", O && "px" === p.substr(w + x.length, 2), 0 === h), d = w + x.length;
					a["xs" + a.l] += p.substr(d)
				} else a["xs" + a.l] += a.l ? " " + p : p; if (-1 !== r.indexOf("=") && a.data) {
					for (S = a.xs0 + a.data.s, f = 1; f < a.l; f++) S += a["xs" + f] + a.data["xn" + f];
					a.e = S + a["xs" + f]
				}
				return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
			}, ge = 9;
		for (l = pe.prototype, l.l = l.pr = 0; --ge > 0;) l["xn" + ge] = 0, l["xs" + ge] = "";
		l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, n, r, i, o) {
			var a = this,
				s = a.l;
			return a["xs" + s] += o && s ? " " + t : t || "", n || 0 === s || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", s > 0 ? (a.data["xn" + s] = e + n, a.rxp["xn" + s] = i, a["xn" + s] = e, a.plugin || (a.xfirst = new pe(a, "xn" + s, e, n, a.xfirst || a, 0, a.n, i, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
				s: e + n
			}, a.rxp = {}, a.s = e, a.c = n, a.r = i, a)) : (a["xs" + s] += e + (r || ""), a)
		};
		var ve = function(t, e) {
			e = e || {}, this.p = e.prefix ? B(t) || t : t, u[t] = u[this.p] = this, this.format = e.formatter || fe(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
		}, ye = L._registerComplexSpecialProp = function(t, e, n) {
				"object" != typeof e && (e = {
					parser: n
				});
				var r, i, o = t.split(","),
					a = e.defaultValue;
				for (n = n || [a], r = 0; r < o.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = n[r] || a, i = new ve(o[r], e)
			}, _e = function(t) {
				if (!u[t]) {
					var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
					ye(t, {
						parser: function(t, n, r, i, o, a, l) {
							var c = s.com.greensock.plugins[e];
							return c ? (c._cssRegister(), u[r].parse(t, n, r, i, o, a, l)) : (Y("Error: " + e + " js file not loaded."), o)
						}
					})
				}
			};
		l = ve.prototype, l.parseComplex = function(t, e, n, r, i, o) {
			var a, s, u, l, c, f, h = this.keyword;
			if (this.multi && (D.test(n) || D.test(e) ? (s = e.replace(D, "|").split("|"), u = n.replace(D, "|").split("|")) : h && (s = [e], u = [n])), u) {
				for (l = u.length > s.length ? u.length : s.length, a = 0; l > a; a++) e = s[a] = s[a] || this.dflt, n = u[a] = u[a] || this.dflt, h && (c = e.indexOf(h), f = n.indexOf(h), c !== f && (n = -1 === f ? u : s, n[a] += " " + h));
				e = s.join(", "), n = u.join(", ")
			}
			return me(t, this.p, e, n, this.clrs, this.dflt, r, this.pr, i, o)
		}, l.parse = function(t, e, n, r, o, a) {
			return this.parseComplex(t.style, this.format(Q(t, this.p, i, !1, this.dflt)), this.format(e), o, a)
		}, a.registerSpecialProp = function(t, e, n) {
			ye(t, {
				parser: function(t, r, i, o, a, s) {
					var u = new pe(t, i, 0, 0, a, 2, i, !1, n);
					return u.plugin = s, u.setRatio = e(t, r, o._tween, i), u
				},
				priority: n
			})
		};
		var $e, be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
			we = B("transform"),
			xe = U + "transform",
			Te = B("transformOrigin"),
			Se = null !== B("perspective"),
			Ce = L.Transform = function() {
				this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1
			}, ke = window.SVGElement,
			Pe = function(t, e, n) {
				var r, i = R.createElementNS("http://www.w3.org/2000/svg", t),
					o = /([a-z])([A-Z])/g;
				for (r in n) i.setAttributeNS(null, r.replace(o, "$1-$2").toLowerCase(), n[r]);
				return e.appendChild(i), i
			}, Oe = document.documentElement,
			Ae = function() {
				var t, e, n, r = m || /Android/i.test(V) && !window.chrome;
				return R.createElementNS && !r && (t = Pe("svg", Oe), e = Pe("rect", t, {
					width: 100,
					height: 50,
					x: 100
				}), n = e.getBoundingClientRect().width, e.style[Te] = "50% 50%", e.style[we] = "scaleX(0.5)", r = n === e.getBoundingClientRect().width, Oe.removeChild(t)), r
			}(),
			Ee = function(t, e, n) {
				var r = t.getBBox();
				e = re(e).split(" "), n.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * r.width : parseFloat(e[0])) + r.x, n.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * r.height : parseFloat(e[1])) + r.y
			}, De = L.getTransform = function(t, e, n, r) {
				if (t._gsTransform && n && !r) return t._gsTransform;
				var o, s, u, l, c, f, h, d, p, m, g = n ? t._gsTransform || new Ce : new Ce,
					v = g.scaleX < 0,
					y = 2e-5,
					_ = 1e5,
					$ = Se ? parseFloat(Q(t, Te, e, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0,
					b = parseFloat(a.defaultTransformPerspective) || 0;
				if (we ? s = Q(t, xe, e, !0) : t.currentStyle && (s = t.currentStyle.filter.match(A), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), g.x || 0, g.y || 0].join(",") : ""), o = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, g.svg = !! (ke && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), g.svg && (Ee(t, Q(t, Te, i, !1, "50% 50%") + "", g), $e = a.useSVGTransformAttr || Ae, u = t.getAttribute("transform"), o && u && -1 !== u.indexOf("matrix") && (s = u, o = 0)), !o) {
					for (u = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = u.length; --l > -1;) c = Number(u[l]), u[l] = (f = c - (c |= 0)) ? (f * _ + (0 > f ? -.5 : .5) | 0) / _ + c : c;
					if (16 === u.length) {
						var w = u[8],
							x = u[9],
							T = u[10],
							S = u[12],
							C = u[13],
							k = u[14];
						g.zOrigin && (k = -g.zOrigin, S = w * k - u[12], C = x * k - u[13], k = T * k + g.zOrigin - u[14]);
						var P, O, E, D, M, N = u[0],
							R = u[1],
							I = u[2],
							q = u[3],
							F = u[4],
							L = u[5],
							V = u[6],
							z = u[7],
							H = u[11],
							Y = Math.atan2(R, L);
						g.rotation = Y * j, Y && (D = Math.cos(-Y), M = Math.sin(-Y), N = N * D + F * M, O = R * D + L * M, L = R * -M + L * D, V = I * -M + V * D, R = O), Y = Math.atan2(w, N), g.rotationY = Y * j, Y && (D = Math.cos(-Y), M = Math.sin(-Y), P = N * D - w * M, O = R * D - x * M, E = I * D - T * M, x = R * M + x * D, T = I * M + T * D, H = q * M + H * D, N = P, R = O, I = E), Y = Math.atan2(V, T), g.rotationX = Y * j, Y && (D = Math.cos(-Y), M = Math.sin(-Y), P = F * D + w * M, O = L * D + x * M, E = V * D + T * M, w = F * -M + w * D, x = L * -M + x * D, T = V * -M + T * D, H = z * -M + H * D, F = P, L = O, V = E), g.scaleX = (Math.sqrt(N * N + R * R) * _ + .5 | 0) / _, g.scaleY = (Math.sqrt(L * L + x * x) * _ + .5 | 0) / _, g.scaleZ = (Math.sqrt(V * V + T * T) * _ + .5 | 0) / _, g.skewX = 0, g.perspective = H ? 1 / (0 > H ? -H : H) : 0, g.x = S, g.y = C, g.z = k
					} else if (!(Se && !r && u.length && g.x === u[4] && g.y === u[5] && (g.rotationX || g.rotationY) || void 0 !== g.x && "none" === Q(t, "display", e))) {
						var U = u.length >= 6,
							W = U ? u[0] : 1,
							B = u[1] || 0,
							X = u[2] || 0,
							G = U ? u[3] : 1;
						g.x = u[4] || 0, g.y = u[5] || 0, h = Math.sqrt(W * W + B * B), d = Math.sqrt(G * G + X * X), p = W || B ? Math.atan2(B, W) * j : g.rotation || 0, m = X || G ? Math.atan2(X, G) * j + p : g.skewX || 0, Math.abs(m) > 90 && Math.abs(m) < 270 && (v ? (h *= -1, m += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (d *= -1, m += 0 >= m ? 180 : -180)), g.scaleX = h, g.scaleY = d, g.rotation = p, g.skewX = m, Se && (g.rotationX = g.rotationY = g.z = 0, g.perspective = b, g.scaleZ = 1)
					}
					g.zOrigin = $;
					for (l in g) g[l] < y && g[l] > -y && (g[l] = 0)
				}
				return n && (t._gsTransform = g), g
			}, Me = function(t) {
				var e, n, r = this.data,
					i = -r.rotation * M,
					o = i + r.skewX * M,
					a = 1e5,
					s = (Math.cos(i) * r.scaleX * a | 0) / a,
					u = (Math.sin(i) * r.scaleX * a | 0) / a,
					l = (Math.sin(o) * -r.scaleY * a | 0) / a,
					c = (Math.cos(o) * r.scaleY * a | 0) / a,
					f = this.t.style,
					h = this.t.currentStyle;
				if (h) {
					n = u, u = -l, l = -n, e = h.filter, f.filter = "";
					var d, p, g = this.t.offsetWidth,
						v = this.t.offsetHeight,
						y = "absolute" !== h.position,
						_ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + u + ", M21=" + l + ", M22=" + c,
						w = r.x + g * r.xPercent / 100,
						x = r.y + v * r.yPercent / 100;
					if (null != r.ox && (d = (r.oxp ? g * r.ox * .01 : r.ox) - g / 2, p = (r.oyp ? v * r.oy * .01 : r.oy) - v / 2, w += d - (d * s + p * u), x += p - (d * l + p * c)), y ? (d = g / 2, p = v / 2, _ += ", Dx=" + (d - (d * s + p * u) + w) + ", Dy=" + (p - (d * l + p * c) + x) + ")") : _ += ", sizingMethod='auto expand')", f.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(E, _) : _ + " " + e, (0 === t || 1 === t) && 1 === s && 0 === u && 0 === l && 1 === c && (y && -1 === _.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && f.removeAttribute("filter")), !y) {
						var T, S, C, k = 8 > m ? 1 : -1;
						for (d = r.ieOffsetX || 0, p = r.ieOffsetY || 0, r.ieOffsetX = Math.round((g - ((0 > s ? -s : s) * g + (0 > u ? -u : u) * v)) / 2 + w), r.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > l ? -l : l) * g)) / 2 + x), ge = 0; 4 > ge; ge++) S = ee[ge], T = h[S], n = -1 !== T.indexOf("px") ? parseFloat(T) : G(this.t, S, parseFloat(T), T.replace($, "")) || 0, C = n !== r[S] ? 2 > ge ? -r.ieOffsetX : -r.ieOffsetY : 2 > ge ? d - r.ieOffsetX : p - r.ieOffsetY, f[S] = (r[S] = Math.round(n - C * (0 === ge || 2 === ge ? 1 : k))) + "px"
					}
				}
			}, je = L.set3DTransformRatio = function(t) {
				var e, n, r, i, o, a, s, u, l, c, f, h, p, m, g, v, y, _, $, b, w, x, T, S, C, k = this.data,
					P = this.t.style,
					O = k.rotation * M,
					A = k.scaleX,
					E = k.scaleY,
					D = k.scaleZ,
					j = k.x,
					N = k.y,
					R = k.z,
					I = k.perspective;
				if ((1 === t || 0 === t) && "auto" === k.force3D && !(k.rotationY || k.rotationX || 1 !== D || I || R)) return void Ne.call(this, t);
				if (d) {
					var q = 1e-4;
					q > A && A > -q && (A = D = 2e-5), q > E && E > -q && (E = D = 2e-5), !I || k.z || k.rotationX || k.rotationY || (I = 0)
				}
				if (O || k.skewX) _ = Math.cos(O), $ = Math.sin(O), e = _, o = $, k.skewX && (O -= k.skewX * M, _ = Math.cos(O), $ = Math.sin(O), "simple" === k.skewType && (b = Math.tan(k.skewX * M), b = Math.sqrt(1 + b * b), _ *= b, $ *= b)), n = -$, a = _;
				else {
					if (!(k.rotationY || k.rotationX || 1 !== D || I || k.svg)) return void(P[we] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + j + "px," + N + "px," + R + "px)" + (1 !== A || 1 !== E ? " scale(" + A + "," + E + ")" : ""));
					e = a = 1, n = o = 0
				}
				f = 1, r = i = s = u = l = c = h = p = m = 0, g = I ? -1 / I : 0, v = k.zOrigin, y = 1e5, C = ",", O = k.rotationY * M, O && (_ = Math.cos(O), $ = Math.sin(O), l = f * -$, p = g * -$, r = e * $, s = o * $, f *= _, g *= _, e *= _, o *= _), O = k.rotationX * M, O && (_ = Math.cos(O), $ = Math.sin(O), b = n * _ + r * $, w = a * _ + s * $, x = c * _ + f * $, T = m * _ + g * $, r = n * -$ + r * _, s = a * -$ + s * _, f = c * -$ + f * _, g = m * -$ + g * _, n = b, a = w, c = x, m = T), 1 !== D && (r *= D, s *= D, f *= D, g *= D), 1 !== E && (n *= E, a *= E, c *= E, m *= E), 1 !== A && (e *= A, o *= A, l *= A, p *= A), v && (h -= v, i = r * h, u = s * h, h = f * h + v), k.svg && (i += k.xOrigin - (k.xOrigin * e + k.yOrigin * n), u += k.yOrigin - (k.xOrigin * o + k.yOrigin * a)), i = (b = (i += j) - (i |= 0)) ? (b * y + (0 > b ? -.5 : .5) | 0) / y + i : i, u = (b = (u += N) - (u |= 0)) ? (b * y + (0 > b ? -.5 : .5) | 0) / y + u : u, h = (b = (h += R) - (h |= 0)) ? (b * y + (0 > b ? -.5 : .5) | 0) / y + h : h, S = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", S += (e * y | 0) / y + C + (o * y | 0) / y + C + (l * y | 0) / y, S += C + (p * y | 0) / y + C + (n * y | 0) / y + C + (a * y | 0) / y, S += C + (c * y | 0) / y + C + (m * y | 0) / y + C + (r * y | 0) / y, S += C + (s * y | 0) / y + C + (f * y | 0) / y + C + (g * y | 0) / y, S += C + i + C + u + C + h + C + (I ? 1 + -h / I : 1) + ")", P[we] = S
			}, Ne = L.set2DTransformRatio = function(t) {
				var e, n, r, i, o, a, s, u, l, c, f, h = this.data,
					d = this.t,
					p = d.style,
					m = h.x,
					g = h.y;
				return !(h.rotationX || h.rotationY || h.z || h.force3D === !0 || "auto" === h.force3D && 1 !== t && 0 !== t) || h.svg && $e || !Se ? (i = h.scaleX, o = h.scaleY, void(h.rotation || h.skewX || h.svg ? (e = h.rotation * M, n = e - h.skewX * M, r = 1e5, a = Math.cos(e) * i, s = Math.sin(e) * i, u = Math.sin(n) * -o, l = Math.cos(n) * o, h.svg && (m += h.xOrigin - (h.xOrigin * a + h.yOrigin * u), g += h.yOrigin - (h.xOrigin * s + h.yOrigin * l), f = 1e-6, f > m && m > -f && (m = 0), f > g && g > -f && (g = 0)), c = (a * r | 0) / r + "," + (s * r | 0) / r + "," + (u * r | 0) / r + "," + (l * r | 0) / r + "," + m + "," + g + ")", h.svg && $e ? d.setAttribute("transform", "matrix(" + c) : p[we] = (h.xPercent || h.yPercent ? "translate(" + h.xPercent + "%," + h.yPercent + "%) matrix(" : "matrix(") + c) : p[we] = (h.xPercent || h.yPercent ? "translate(" + h.xPercent + "%," + h.yPercent + "%) matrix(" : "matrix(") + i + ",0,0," + o + "," + m + "," + g + ")")) : (this.setRatio = je, void je.call(this, t))
			};
		l = Ce.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
			parser: function(t, e, n, r, o, s, u) {
				if (r._lastParsedTransform === u) return o;
				r._lastParsedTransform = u;
				var l, c, f, h, d, p, m, g = r._transform = De(t, i, !0, u.parseTransform),
					v = t.style,
					y = 1e-6,
					_ = be.length,
					$ = u,
					b = {};
				if ("string" == typeof $.transform && we) f = q.style, f[we] = $.transform, f.display = "block", f.position = "absolute", R.body.appendChild(q), l = De(q, null, !1), R.body.removeChild(q);
				else if ("object" == typeof $) {
					if (l = {
						scaleX: oe(null != $.scaleX ? $.scaleX : $.scale, g.scaleX),
						scaleY: oe(null != $.scaleY ? $.scaleY : $.scale, g.scaleY),
						scaleZ: oe($.scaleZ, g.scaleZ),
						x: oe($.x, g.x),
						y: oe($.y, g.y),
						z: oe($.z, g.z),
						xPercent: oe($.xPercent, g.xPercent),
						yPercent: oe($.yPercent, g.yPercent),
						perspective: oe($.transformPerspective, g.perspective)
					}, m = $.directionalRotation, null != m)
						if ("object" == typeof m)
							for (f in m) $[f] = m[f];
						else $.rotation = m;
						"string" == typeof $.x && -1 !== $.x.indexOf("%") && (l.x = 0, l.xPercent = oe($.x, g.xPercent)), "string" == typeof $.y && -1 !== $.y.indexOf("%") && (l.y = 0, l.yPercent = oe($.y, g.yPercent)), l.rotation = ae("rotation" in $ ? $.rotation : "shortRotation" in $ ? $.shortRotation + "_short" : "rotationZ" in $ ? $.rotationZ : g.rotation, g.rotation, "rotation", b), Se && (l.rotationX = ae("rotationX" in $ ? $.rotationX : "shortRotationX" in $ ? $.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", b), l.rotationY = ae("rotationY" in $ ? $.rotationY : "shortRotationY" in $ ? $.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", b)), l.skewX = null == $.skewX ? g.skewX : ae($.skewX, g.skewX), l.skewY = null == $.skewY ? g.skewY : ae($.skewY, g.skewY), (c = l.skewY - g.skewY) && (l.skewX += c, l.rotation += c)
				}
				for (Se && null != $.force3D && (g.force3D = $.force3D, p = !0), g.skewType = $.skewType || g.skewType || a.defaultSkewType, d = g.force3D || g.z || g.rotationX || g.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, d || null == $.scale || (l.scaleZ = 1); --_ > -1;) n = be[_], h = l[n] - g[n], (h > y || -y > h || null != $[n] || null != N[n]) && (p = !0, o = new pe(g, n, g[n], h, o), n in b && (o.e = b[n]), o.xs0 = 0, o.plugin = s, r._overwriteProps.push(o.n));
				return h = $.transformOrigin, h && g.svg && (Ee(t, h, l), o = new pe(g, "xOrigin", g.xOrigin, l.xOrigin - g.xOrigin, o, -1, "transformOrigin"), o.b = g.xOrigin, o.e = o.xs0 = l.xOrigin, o = new pe(g, "yOrigin", g.yOrigin, l.yOrigin - g.yOrigin, o, -1, "transformOrigin"), o.b = g.yOrigin, o.e = o.xs0 = l.yOrigin, h = "0px 0px"), (h || Se && d && g.zOrigin) && (we ? (p = !0, n = Te, h = (h || Q(t, n, i, !1, "50% 50%")) + "", o = new pe(v, n, 0, 0, o, -1, "transformOrigin"), o.b = v[n], o.plugin = s, Se ? (f = g.zOrigin, h = h.split(" "), g.zOrigin = (h.length > 2 && (0 === f || "0px" !== h[2]) ? parseFloat(h[2]) : f) || 0, o.xs0 = o.e = h[0] + " " + (h[1] || "50%") + " 0px", o = new pe(g, "zOrigin", 0, 0, o, -1, o.n), o.b = f, o.xs0 = o.e = g.zOrigin) : o.xs0 = o.e = h) : re(h + "", g)), p && (r._transformType = g.svg && $e || !d && 3 !== this._transformType ? 2 : 3), o
			},
			prefix: !0
		}), ye("boxShadow", {
			defaultValue: "0px 0px 0px 0px #999",
			prefix: !0,
			color: !0,
			multi: !0,
			keyword: "inset"
		}), ye("borderRadius", {
			defaultValue: "0px",
			parser: function(t, e, n, o, a) {
				e = this.format(e);
				var s, u, l, c, f, h, d, p, m, g, v, y, _, $, b, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
					T = t.style;
				for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), s = e.split(" "), u = 0; u < x.length; u++) this.p.indexOf("border") && (x[u] = B(x[u])), f = c = Q(t, x[u], i, !1, "0px"), -1 !== f.indexOf(" ") && (c = f.split(" "), f = c[0], c = c[1]), h = l = s[u], d = parseFloat(f), y = f.substr((d + "").length), _ = "=" === h.charAt(1), _ ? (p = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), p *= parseFloat(h), v = h.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(h), v = h.substr((p + "").length)), "" === v && (v = r[n] || y), v !== y && ($ = G(t, "borderLeft", d, y), b = G(t, "borderTop", d, y), "%" === v ? (f = $ / m * 100 + "%", c = b / g * 100 + "%") : "em" === v ? (w = G(t, "borderLeft", 1, "em"), f = $ / w + "em", c = b / w + "em") : (f = $ + "px", c = b + "px"), _ && (h = parseFloat(f) + p + v, l = parseFloat(c) + p + v)), a = me(T, x[u], f + " " + c, h + " " + l, !1, "0px", a);
				return a
			},
			prefix: !0,
			formatter: fe("0px 0px 0px 0px", !1, !0)
		}), ye("backgroundPosition", {
			defaultValue: "0 0",
			parser: function(t, e, n, r, o, a) {
				var s, u, l, c, f, h, d = "background-position",
					p = i || X(t, null),
					g = this.format((p ? m ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
					v = this.format(e);
				if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (h = Q(t, "backgroundImage").replace(k, ""), h && "none" !== h)) {
					for (s = g.split(" "), u = v.split(" "), F.setAttribute("src", h), l = 2; --l > -1;) g = s[l], c = -1 !== g.indexOf("%"), c !== (-1 !== u[l].indexOf("%")) && (f = 0 === l ? t.offsetWidth - F.width : t.offsetHeight - F.height, s[l] = c ? parseFloat(g) / 100 * f + "px" : parseFloat(g) / f * 100 + "%");
					g = s.join(" ")
				}
				return this.parseComplex(t.style, g, v, o, a)
			},
			formatter: re
		}), ye("backgroundSize", {
			defaultValue: "0 0",
			formatter: re
		}), ye("perspective", {
			defaultValue: "0px",
			prefix: !0
		}), ye("perspectiveOrigin", {
			defaultValue: "50% 50%",
			prefix: !0
		}), ye("transformStyle", {
			prefix: !0
		}), ye("backfaceVisibility", {
			prefix: !0
		}), ye("userSelect", {
			prefix: !0
		}), ye("margin", {
			parser: he("marginTop,marginRight,marginBottom,marginLeft")
		}), ye("padding", {
			parser: he("paddingTop,paddingRight,paddingBottom,paddingLeft")
		}), ye("clip", {
			defaultValue: "rect(0px,0px,0px,0px)",
			parser: function(t, e, n, r, o, a) {
				var s, u, l;
				return 9 > m ? (u = t.currentStyle, l = 8 > m ? " " : ",", s = "rect(" + u.clipTop + l + u.clipRight + l + u.clipBottom + l + u.clipLeft + ")", e = this.format(e).split(",").join(l)) : (s = this.format(Q(t, this.p, i, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, o, a)
			}
		}), ye("textShadow", {
			defaultValue: "0px 0px 0px #999",
			color: !0,
			multi: !0
		}), ye("autoRound,strictUnits", {
			parser: function(t, e, n, r, i) {
				return i
			}
		}), ye("border", {
			defaultValue: "0px solid #000",
			parser: function(t, e, n, r, o, a) {
				return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", i, !1, "0px") + " " + Q(t, "borderTopStyle", i, !1, "solid") + " " + Q(t, "borderTopColor", i, !1, "#000")), this.format(e), o, a)
			},
			color: !0,
			formatter: function(t) {
				var e = t.split(" ");
				return e[0] + " " + (e[1] || "solid") + " " + (t.match(ce) || ["#000"])[0]
			}
		}), ye("borderWidth", {
			parser: he("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
		}), ye("float,cssFloat,styleFloat", {
			parser: function(t, e, n, r, i) {
				var o = t.style,
					a = "cssFloat" in o ? "cssFloat" : "styleFloat";
				return new pe(o, a, 0, 0, i, -1, n, !1, 0, o[a], e)
			}
		});
		var Re = function(t) {
			var e, n = this.t,
				r = n.filter || Q(this.data, "filter") || "",
				i = this.s + this.c * t | 0;
			100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (n.removeAttribute("filter"), e = !Q(this.data, "filter")) : (n.filter = r.replace(x, ""), e = !0)), e || (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"), -1 === r.indexOf("pacity") ? 0 === i && this.xn1 || (n.filter = r + " alpha(opacity=" + i + ")") : n.filter = r.replace(b, "opacity=" + i))
		};
		ye("opacity,alpha,autoAlpha", {
			defaultValue: "1",
			parser: function(t, e, n, r, o, a) {
				var s = parseFloat(Q(t, "opacity", i, !1, "1")),
					u = t.style,
					l = "autoAlpha" === n;
				return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), l && 1 === s && "hidden" === Q(t, "visibility", i) && 0 !== e && (s = 0), z ? o = new pe(u, "opacity", s, e - s, o) : (o = new pe(u, "opacity", 100 * s, 100 * (e - s), o), o.xn1 = l ? 1 : 0, u.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = a, o.setRatio = Re), l && (o = new pe(u, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", r._overwriteProps.push(o.n), r._overwriteProps.push(n)), o
			}
		});
		var Ie = function(t, e) {
			e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
		}, qe = function(t) {
				if (this.t._gsClassPT = this, 1 === t || 0 === t) {
					this.t.setAttribute("class", 0 === t ? this.b : this.e);
					for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : Ie(n, e.p), e = e._next;
					1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
				} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
			};
		ye("className", {
			parser: function(t, e, r, o, a, s, u) {
				var l, c, f, h, d, p = t.getAttribute("class") || "",
					m = t.style.cssText;
				if (a = o._classNamePT = new pe(t, r, 0, 0, a, 2), a.setRatio = qe, a.pr = -11, n = !0, a.b = p, c = J(t, i), f = t._gsClassPT) {
					for (h = {}, d = f.data; d;) h[d.p] = 1, d = d._next;
					f.setRatio(1)
				}
				return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), o._tween._duration && (t.setAttribute("class", a.e), l = K(t, c, J(t), u, h), t.setAttribute("class", p), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = o.parse(t, l.difs, a, s)), a
			}
		});
		var Fe = function(t) {
			if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
				var e, n, r, i, o = this.t.style,
					a = u.transform.parse;
				if ("all" === this.e) o.cssText = "", i = !0;
				else
					for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) n = e[r], u[n] && (u[n].parse === a ? i = !0 : n = "transformOrigin" === n ? Te : u[n].p), Ie(o, n);
				i && (Ie(o, we), this.t._gsTransform && delete this.t._gsTransform)
			}
		};
		for (ye("clearProps", {
			parser: function(t, e, r, i, o) {
				return o = new pe(t, r, 0, 0, o, 2), o.setRatio = Fe, o.e = e, o.pr = -10, o.data = i._tween, n = !0, o
			}
		}), l = "bezier,throwProps,physicsProps,physics2D".split(","), ge = l.length; ge--;) _e(l[ge]);
		l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, s) {
			if (!t.nodeType) return !1;
			this._target = t, this._tween = s, this._vars = e, c = e.autoRound, n = !1, r = e.suffixMap || a.suffixMap, i = X(t, ""), o = this._overwriteProps;
			var u, l, d, m, g, v, y, _, $, b = t.style;
			if (f && "" === b.zIndex && (u = Q(t, "zIndex", i), ("auto" === u || "" === u) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (m = b.cssText, u = J(t, i), b.cssText = m + ";" + e, u = K(t, u, J(t)).difs, !z && w.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, b.cssText = m), this._firstPT = l = this.parse(t, e, null), this._transformType) {
				for ($ = 3 === this._transformType, we ? h && (f = !0, "" === b.zIndex && (y = Q(t, "zIndex", i), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || ($ ? "visible" : "hidden"))) : b.zoom = 1, d = l; d && d._next;) d = d._next;
				_ = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(_, null, d), _.setRatio = $ && Se ? je : we ? Ne : Me, _.data = this._transform || De(t, i, !0), o.pop()
			}
			if (n) {
				for (; l;) {
					for (v = l._next, d = m; d && d.pr > l.pr;) d = d._next;
					(l._prev = d ? d._prev : g) ? l._prev._next = l : m = l, (l._next = d) ? d._prev = l : g = l, l = v
				}
				this._firstPT = m
			}
			return !0
		}, l.parse = function(t, e, n, o) {
			var a, s, l, f, h, d, p, m, g, v, y = t.style;
			for (a in e) d = e[a], s = u[a], s ? n = s.parse(t, d, a, this, n, o, e) : (h = Q(t, a, i) + "", g = "string" == typeof d, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || g && T.test(d) ? (g || (d = le(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), n = me(y, a, h, d, !0, "transparent", n, 0, o)) : !g || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (l = parseFloat(h), p = l || 0 === l ? h.substr((l + "").length) : "", ("" === h || "auto" === h) && ("width" === a || "height" === a ? (l = ne(t, a, i), p = "px") : "left" === a || "top" === a ? (l = Z(t, a, i), p = "px") : (l = "opacity" !== a ? 0 : 1, p = "")), v = g && "=" === d.charAt(1), v ? (f = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), f *= parseFloat(d), m = d.replace($, "")) : (f = parseFloat(d), m = g ? d.substr((f + "").length) || "" : ""), "" === m && (m = a in r ? r[a] : p), d = f || 0 === f ? (v ? f + l : f) + m : e[a], p !== m && "" !== m && (f || 0 === f) && l && (l = G(t, a, l, p), "%" === m ? (l /= G(t, a, 100, "%") / 100, e.strictUnits !== !0 && (h = l + "%")) : "em" === m ? l /= G(t, a, 1, "em") : "px" !== m && (f = G(t, a, f, m), m = "px"), v && (f || 0 === f) && (d = f + l + m)), v && (f += l), !l && 0 !== l || !f && 0 !== f ? void 0 !== y[a] && (d || d + "" != "NaN" && null != d) ? (n = new pe(y, a, f || l || 0, 0, n, -1, a, !1, 0, h, d), n.xs0 = "none" !== d || "display" !== a && -1 === a.indexOf("Style") ? d : h) : Y("invalid " + a + " tween value: " + e[a]) : (n = new pe(y, a, l, f - l, n, 0, a, c !== !1 && ("px" === m || "zIndex" === a), 0, h, d), n.xs0 = m)) : n = me(y, a, h, d, !0, null, n, 0, o)), o && n && !n.plugin && (n.plugin = o);
			return n
		}, l.setRatio = function(t) {
			var e, n, r, i = this._firstPT,
				o = 1e-6;
			if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
				if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
					for (; i;) {
						if (e = i.c * t + i.s, i.r ? e = Math.round(e) : o > e && e > -o && (e = 0), i.type)
							if (1 === i.type)
								if (r = i.l, 2 === r) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2;
								else
						if (3 === r) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
						else if (4 === r) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
						else if (5 === r) i.t[i.p] = i.xs0 + e + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
						else {
							for (n = i.xs0 + e + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
							i.t[i.p] = n
						} else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(t);
						else i.t[i.p] = e + i.xs0;
						i = i._next
					} else
						for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(t), i = i._next;
				else
					for (; i;) 2 !== i.type ? i.t[i.p] = i.e : i.setRatio(t), i = i._next
		}, l._enableTransforms = function(t) {
			this._transform = this._transform || De(this._target, i, !0), this._transformType = this._transform.svg && $e || !t && 3 !== this._transformType ? 2 : 3
		};
		var Le = function() {
			this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
		};
		l._addLazySet = function(t, e, n) {
			var r = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2);
			r.e = n, r.setRatio = Le, r.data = this
		}, l._linkCSSP = function(t, e, n, r) {
			return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), n ? n._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
		}, l._kill = function(e) {
			var n, r, i, o = e;
			if (e.autoAlpha || e.alpha) {
				o = {};
				for (r in e) o[r] = e[r];
				o.opacity = 1, o.autoAlpha && (o.visibility = 1)
			}
			return e.className && (n = this._classNamePT) && (i = n.xfirst, i && i._prev ? this._linkCSSP(i._prev, n._next, i._prev._prev) : i === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, i._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
		};
		var Ve = function(t, e, n) {
			var r, i, o, a;
			if (t.slice)
				for (i = t.length; --i > -1;) Ve(t[i], e, n);
			else
				for (r = t.childNodes, i = r.length; --i > -1;) o = r[i], a = o.type, o.style && (e.push(J(o)), n && n.push(o)), 1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || Ve(o, e, n)
		};
		return a.cascadeTo = function(t, n, r) {
			var i, o, a, s = e.to(t, n, r),
				u = [s],
				l = [],
				c = [],
				f = [],
				h = e._internals.reservedProps;
			for (t = s._targets || s.target, Ve(t, l, f), s.render(n, !0), Ve(t, c), s.render(0, !0), s._enabled(!0), i = f.length; --i > -1;)
				if (o = K(f[i], l[i], c[i]), o.firstMPT) {
					o = o.difs;
					for (a in r) h[a] && (o[a] = r[a]);
					u.push(e.to(f[i], n, o))
				}
			return u
		}, t.activate([a]), a
	}, !0),
	function() {
		var t = _gsScope._gsDefine.plugin({
			propName: "roundProps",
			priority: -1,
			API: 2,
			init: function(t, e, n) {
				return this._tween = n, !0
			}
		}),
			e = t.prototype;
		e._onInitAllProps = function() {
			for (var t, e, n, r = this._tween, i = r.vars.roundProps instanceof Array ? r.vars.roundProps : r.vars.roundProps.split(","), o = i.length, a = {}, s = r._propLookup.roundProps; --o > -1;) a[i[o]] = 1;
			for (o = i.length; --o > -1;)
				for (t = i[o], e = r._firstPT; e;) n = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), n && (n._prev = e._prev), e._prev ? e._prev._next = n : r._firstPT === e && (r._firstPT = n), e._next = e._prev = null, r._propLookup[t] = s), e = n;
			return !1
		}, e._add = function(t, e, n, r) {
			this._addTween(t, e, n, n + r, e, !0), this._overwriteProps.push(e)
		}
	}(), _gsScope._gsDefine.plugin({
		propName: "attr",
		API: 2,
		version: "0.3.3",
		init: function(t, e) {
			var n, r, i;
			if ("function" != typeof t.setAttribute) return !1;
			this._target = t, this._proxy = {}, this._start = {}, this._end = {};
			for (n in e) this._start[n] = this._proxy[n] = r = t.getAttribute(n), i = this._addTween(this._proxy, n, parseFloat(r), e[n], n), this._end[n] = i ? i.s + i.c : e[n], this._overwriteProps.push(n);
			return !0
		},
		set: function(t) {
			this._super.setRatio.call(this, t);
			for (var e, n = this._overwriteProps, r = n.length, i = 1 === t ? this._end : t ? this._proxy : this._start; --r > -1;) e = n[r], this._target.setAttribute(e, i[e] + "")
		}
	}), _gsScope._gsDefine.plugin({
		propName: "directionalRotation",
		version: "0.2.1",
		API: 2,
		init: function(t, e) {
			"object" != typeof e && (e = {
				rotation: e
			}), this.finals = {};
			var n, r, i, o, a, s, u = e.useRadians === !0 ? 2 * Math.PI : 360,
				l = 1e-6;
			for (n in e) "useRadians" !== n && (s = (e[n] + "").split("_"), r = s[0], i = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), o = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? i + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = o - i, s.length && (r = s.join("_"), -1 !== r.indexOf("short") && (a %= u, a !== a % (u / 2) && (a = 0 > a ? a + u : a - u)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (a > l || -l > a) && (this._addTween(t, n, i, i + a, n), this._overwriteProps.push(n)));
			return !0
		},
		set: function(t) {
			var e;
			if (1 !== t) this._super.setRatio.call(this, t);
			else
				for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
		}
	})._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
		var e, n, r, i = _gsScope.GreenSockGlobals || _gsScope,
			o = i.com.greensock,
			a = 2 * Math.PI,
			s = Math.PI / 2,
			u = o._class,
			l = function(e, n) {
				var r = u("easing." + e, function() {}, !0),
					i = r.prototype = new t;
				return i.constructor = r, i.getRatio = n, r
			}, c = t.register || function() {}, f = function(t, e, n, r) {
				var i = u("easing." + t, {
					easeOut: new e,
					easeIn: new n,
					easeInOut: new r
				}, !0);
				return c(i, t), i
			}, h = function(t, e, n) {
				this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
			}, d = function(e, n) {
				var r = u("easing." + e, function(t) {
					this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
				}, !0),
					i = r.prototype = new t;
				return i.constructor = r, i.getRatio = n, i.config = function(t) {
					return new r(t)
				}, r
			}, p = f("Back", d("BackOut", function(t) {
				return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
			}), d("BackIn", function(t) {
				return t * t * ((this._p1 + 1) * t - this._p1)
			}), d("BackInOut", function(t) {
				return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
			})),
			m = u("easing.SlowMo", function(t, e, n) {
				e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
			}, !0),
			g = m.prototype = new t;
		return g.constructor = m, g.getRatio = function(t) {
			var e = t + (.5 - t) * this._p;
			return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
		}, m.ease = new m(.7, .7), g.config = m.config = function(t, e, n) {
			return new m(t, e, n)
		}, e = u("easing.SteppedEase", function(t) {
			t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
		}, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
			return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
		}, g.config = e.config = function(t) {
			return new e(t)
		}, n = u("easing.RoughEase", function(e) {
			e = e || {};
			for (var n, r, i, o, a, s, u = e.taper || "none", l = [], c = 0, f = 0 | (e.points || 20), d = f, p = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) n = p ? Math.random() : 1 / f * d, r = g ? g.getRatio(n) : n, "none" === u ? i = v : "out" === u ? (o = 1 - n, i = o * o * v) : "in" === u ? i = n * n * v : .5 > n ? (o = 2 * n, i = o * o * .5 * v) : (o = 2 * (1 - n), i = o * o * .5 * v), p ? r += Math.random() * i - .5 * i : d % 2 ? r += .5 * i : r -= .5 * i, m && (r > 1 ? r = 1 : 0 > r && (r = 0)), l[c++] = {
				x: n,
				y: r
			};
			for (l.sort(function(t, e) {
				return t.x - e.x
			}), s = new h(1, 1, null), d = f; --d > -1;) a = l[d], s = new h(a.x, a.y, s);
			this._prev = new h(0, 0, 0 !== s.t ? s : s.next)
		}, !0), g = n.prototype = new t, g.constructor = n, g.getRatio = function(t) {
			var e = this._prev;
			if (t > e.t) {
				for (; e.next && t >= e.t;) e = e.next;
				e = e.prev
			} else
				for (; e.prev && t <= e.t;) e = e.prev;
			return this._prev = e, e.v + (t - e.t) / e.gap * e.c
		}, g.config = function(t) {
			return new n(t)
		}, n.ease = new n, f("Bounce", l("BounceOut", function(t) {
			return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		}), l("BounceIn", function(t) {
			return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
		}), l("BounceInOut", function(t) {
			var e = .5 > t;
			return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
		})), f("Circ", l("CircOut", function(t) {
			return Math.sqrt(1 - (t -= 1) * t)
		}), l("CircIn", function(t) {
			return -(Math.sqrt(1 - t * t) - 1)
		}), l("CircInOut", function(t) {
			return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		})), r = function(e, n, r) {
			var i = u("easing." + e, function(t, e) {
				this._p1 = t || 1, this._p2 = e || r, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
			}, !0),
				o = i.prototype = new t;
			return o.constructor = i, o.getRatio = n, o.config = function(t, e) {
				return new i(t, e)
			}, i
		}, f("Elastic", r("ElasticOut", function(t) {
			return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
		}, .3), r("ElasticIn", function(t) {
			return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
		}, .3), r("ElasticInOut", function(t) {
			return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) * .5 + 1
		}, .45)), f("Expo", l("ExpoOut", function(t) {
			return 1 - Math.pow(2, -10 * t)
		}), l("ExpoIn", function(t) {
			return Math.pow(2, 10 * (t - 1)) - .001
		}), l("ExpoInOut", function(t) {
			return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
		})), f("Sine", l("SineOut", function(t) {
			return Math.sin(t * s)
		}), l("SineIn", function(t) {
			return -Math.cos(t * s) + 1
		}), l("SineInOut", function(t) {
			return -.5 * (Math.cos(Math.PI * t) - 1)
		})), u("easing.EaseLookup", {
			find: function(e) {
				return t.map[e]
			}
		}, !0), c(i.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), p
	}, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
	"use strict";
	var n = t.GreenSockGlobals = t.GreenSockGlobals || t;
	if (!n.TweenLite) {
		var r, i, o, a, s, u = function(t) {
				var e, r = t.split("."),
					i = n;
				for (e = 0; e < r.length; e++) i[r[e]] = i = i[r[e]] || {};
				return i
			}, l = u("com.greensock"),
			c = 1e-10,
			f = function(t) {
				var e, n = [],
					r = t.length;
				for (e = 0; e !== r; n.push(t[e++]));
				return n
			}, h = function() {}, d = function() {
				var t = Object.prototype.toString,
					e = t.call([]);
				return function(n) {
					return null != n && (n instanceof Array || "object" == typeof n && !! n.push && t.call(n) === e)
				}
			}(),
			p = {}, m = function(r, i, o, a) {
				this.sc = p[r] ? p[r].sc : [], p[r] = this, this.gsClass = null, this.func = o;
				var s = [];
				this.check = function(l) {
					for (var c, f, h, d, g = i.length, v = g; --g > -1;)(c = p[i[g]] || new m(i[g], [])).gsClass ? (s[g] = c.gsClass, v--) : l && c.sc.push(this);
					if (0 === v && o)
						for (f = ("com.greensock." + r).split("."), h = f.pop(), d = u(f.join("."))[h] = this.gsClass = o.apply(o, s), a && (n[h] = d, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
							return d
						}) : r === e && "undefined" != typeof module && module.exports && (module.exports = d)), g = 0; g < this.sc.length; g++) this.sc[g].check()
				}, this.check(!0)
			}, g = t._gsDefine = function(t, e, n, r) {
				return new m(t, e, n, r)
			}, v = l._class = function(t, e, n) {
				return e = e || function() {}, g(t, [], function() {
					return e
				}, n), e
			};
		g.globals = n;
		var y = [0, 0, 1, 1],
			_ = [],
			$ = v("easing.Ease", function(t, e, n, r) {
				this._func = t, this._type = n || 0, this._power = r || 0, this._params = e ? y.concat(e) : y
			}, !0),
			b = $.map = {}, w = $.register = function(t, e, n, r) {
				for (var i, o, a, s, u = e.split(","), c = u.length, f = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
					for (o = u[c], i = r ? v("easing." + o, null, !0) : l.easing[o] || {}, a = f.length; --a > -1;) s = f[a], b[o + "." + s] = b[s + o] = i[s] = t.getRatio ? t : t[s] || new t
			};
		for (o = $.prototype, o._calcEnd = !1, o.getRatio = function(t) {
			if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
			var e = this._type,
				n = this._power,
				r = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
			return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : .5 > t ? r / 2 : 1 - r / 2
		}, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = r.length; --i > -1;) o = r[i] + ",Power" + i, w(new $(null, null, 1, i), o, "easeOut", !0), w(new $(null, null, 2, i), o, "easeIn" + (0 === i ? ",easeNone" : "")), w(new $(null, null, 3, i), o, "easeInOut");
		b.linear = l.easing.Linear.easeIn, b.swing = l.easing.Quad.easeInOut;
		var x = v("events.EventDispatcher", function(t) {
			this._listeners = {}, this._eventTarget = t || this
		});
		o = x.prototype, o.addEventListener = function(t, e, n, r, i) {
			i = i || 0;
			var o, u, l = this._listeners[t],
				c = 0;
			for (null == l && (this._listeners[t] = l = []), u = l.length; --u > -1;) o = l[u], o.c === e && o.s === n ? l.splice(u, 1) : 0 === c && o.pr < i && (c = u + 1);
			l.splice(c, 0, {
				c: e,
				s: n,
				up: r,
				pr: i
			}), this !== a || s || a.wake()
		}, o.removeEventListener = function(t, e) {
			var n, r = this._listeners[t];
			if (r)
				for (n = r.length; --n > -1;)
					if (r[n].c === e) return void r.splice(n, 1)
		}, o.dispatchEvent = function(t) {
			var e, n, r, i = this._listeners[t];
			if (i)
				for (e = i.length, n = this._eventTarget; --e > -1;) r = i[e], r && (r.up ? r.c.call(r.s || n, {
					type: t,
					target: n
				}) : r.c.call(r.s || n))
		};
		var T = t.requestAnimationFrame,
			S = t.cancelAnimationFrame,
			C = Date.now || function() {
				return (new Date).getTime()
			}, k = C();
		for (r = ["ms", "moz", "webkit", "o"], i = r.length; --i > -1 && !T;) T = t[r[i] + "RequestAnimationFrame"], S = t[r[i] + "CancelAnimationFrame"] || t[r[i] + "CancelRequestAnimationFrame"];
		v("Ticker", function(t, e) {
			var n, r, i, o, u, l = this,
				f = C(),
				d = e !== !1 && T,
				p = 500,
				m = 33,
				g = "tick",
				v = function(t) {
					var e, a, s = C() - k;
					s > p && (f += s - m), k += s, l.time = (k - f) / 1e3, e = l.time - u, (!n || e > 0 || t === !0) && (l.frame++, u += e + (e >= o ? .004 : o - e), a = !0), t !== !0 && (i = r(v)), a && l.dispatchEvent(g)
				};
			x.call(l), l.time = l.frame = 0, l.tick = function() {
				v(!0)
			}, l.lagSmoothing = function(t, e) {
				p = t || 1 / c, m = Math.min(e, p, 0)
			}, l.sleep = function() {
				null != i && (d && S ? S(i) : clearTimeout(i), r = h, i = null, l === a && (s = !1))
			}, l.wake = function() {
				null !== i ? l.sleep() : l.frame > 10 && (k = C() - p + 5), r = 0 === n ? h : d && T ? T : function(t) {
					return setTimeout(t, 1e3 * (u - l.time) + 1 | 0)
				}, l === a && (s = !0), v(2)
			}, l.fps = function(t) {
				return arguments.length ? (n = t, o = 1 / (n || 60), u = this.time + o, void l.wake()) : n
			}, l.useRAF = function(t) {
				return arguments.length ? (l.sleep(), d = t, void l.fps(n)) : d
			}, l.fps(t), setTimeout(function() {
				d && (!i || l.frame < 5) && l.useRAF(!1)
			}, 1500)
		}), o = l.Ticker.prototype = new l.events.EventDispatcher, o.constructor = l.Ticker;
		var P = v("core.Animation", function(t, e) {
			if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, H) {
				s || a.wake();
				var n = this.vars.useFrames ? z : H;
				n.add(this, n._time), this.vars.paused && this.paused(!0)
			}
		});
		a = P.ticker = new l.Ticker, o = P.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
		var O = function() {
			s && C() - k > 2e3 && a.wake(), setTimeout(O, 2e3)
		};
		O(), o.play = function(t, e) {
			return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
		}, o.pause = function(t, e) {
			return null != t && this.seek(t, e), this.paused(!0)
		}, o.resume = function(t, e) {
			return null != t && this.seek(t, e), this.paused(!1)
		}, o.seek = function(t, e) {
			return this.totalTime(Number(t), e !== !1)
		}, o.restart = function(t, e) {
			return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
		}, o.reverse = function(t, e) {
			return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
		}, o.render = function() {}, o.invalidate = function() {
			return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
		}, o.isActive = function() {
			var t, e = this._timeline,
				n = this._startTime;
			return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= n && t < n + this.totalDuration() / this._timeScale
		}, o._enabled = function(t, e) {
			return s || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
		}, o._kill = function() {
			return this._enabled(!1, !1)
		}, o.kill = function(t, e) {
			return this._kill(t, e), this
		}, o._uncache = function(t) {
			for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
			return this
		}, o._swapSelfInParams = function(t) {
			for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
			return n
		}, o.eventCallback = function(t, e, n, r) {
			if ("on" === (t || "").substr(0, 2)) {
				var i = this.vars;
				if (1 === arguments.length) return i[t];
				null == e ? delete i[t] : (i[t] = e, i[t + "Params"] = d(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, i[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
			}
			return this
		}, o.delay = function(t) {
			return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
		}, o.duration = function(t) {
			return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
		}, o.totalDuration = function(t) {
			return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
		}, o.time = function(t, e) {
			return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
		}, o.totalTime = function(t, e, n) {
			if (s || a.wake(), !arguments.length) return this._totalTime;
			if (this._timeline) {
				if (0 > t && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
					this._dirty && this.totalDuration();
					var r = this._totalDuration,
						i = this._timeline;
					if (t > r && !n && (t = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - t : t) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
						for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
				}
				this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), j.length && Y())
			}
			return this
		}, o.progress = o.totalProgress = function(t, e) {
			return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
		}, o.startTime = function(t) {
			return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
		}, o.endTime = function(t) {
			return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
		}, o.timeScale = function(t) {
			if (!arguments.length) return this._timeScale;
			if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
				var e = this._pauseTime,
					n = e || 0 === e ? e : this._timeline.totalTime();
				this._startTime = n - (n - this._startTime) * this._timeScale / t
			}
			return this._timeScale = t, this._uncache(!1)
		}, o.reversed = function(t) {
			return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
		}, o.paused = function(t) {
			if (!arguments.length) return this._paused;
			if (t != this._paused && this._timeline) {
				s || t || a.wake();
				var e = this._timeline,
					n = e.rawTime(),
					r = n - this._pauseTime;
				!t && e.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = t ? n : null, this._paused = t, this._active = this.isActive(), !t && 0 !== r && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
			}
			return this._gc && !t && this._enabled(!0, !1), this
		};
		var A = v("core.SimpleTimeline", function(t) {
			P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
		});
		o = A.prototype = new P, o.constructor = A, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e) {
			var n, r;
			if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
				for (r = t._startTime; n && n._startTime > r;) n = n._prev;
			return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
		}, o._remove = function(t, e) {
			return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
		}, o.render = function(t, e, n) {
			var r, i = this._first;
			for (this._totalTime = this._time = this._rawPrevTime = t; i;) r = i._next, (i._active || t >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = r
		}, o.rawTime = function() {
			return s || a.wake(), this._totalTime
		};
		var E = v("TweenLite", function(e, n, r) {
			if (P.call(this, n, r), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
			this.target = e = "string" != typeof e ? e : E.selector(e) || e;
			var i, o, a, s = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
				u = this.vars.overwrite;
			if (this._overwrite = u = null == u ? V[E.defaultOverwrite] : "number" == typeof u ? u >> 0 : V[u], (s || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
				for (this._targets = a = f(e), this._propLookup = [], this._siblings = [], i = 0; i < a.length; i++) o = a[i], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(i--, 1), this._targets = a = a.concat(f(o))) : (this._siblings[i] = U(o, this, !1), 1 === u && this._siblings[i].length > 1 && B(o, this, null, 1, this._siblings[i])) : (o = a[i--] = E.selector(o), "string" == typeof o && a.splice(i + 1, 1)) : a.splice(i--, 1);
			else this._propLookup = {}, this._siblings = U(e, this, !1), 1 === u && this._siblings.length > 1 && B(e, this, null, 1, this._siblings);
			(this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
		}, !0),
			D = function(e) {
				return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
			}, M = function(t, e) {
				var n, r = {};
				for (n in t) L[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!I[n] || I[n] && I[n]._autoCSS) || (r[n] = t[n], delete t[n]);
				t.css = r
			};
		o = E.prototype = new P, o.constructor = E, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, E.version = "1.15.0", E.defaultEase = o._ease = new $(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = a, E.autoSleep = !0, E.lagSmoothing = function(t, e) {
			a.lagSmoothing(t, e)
		}, E.selector = t.$ || t.jQuery || function(e) {
			var n = t.$ || t.jQuery;
			return n ? (E.selector = n, n(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
		};
		var j = [],
			N = {}, R = E._internals = {
				isArray: d,
				isSelector: D,
				lazyTweens: j
			}, I = E._plugins = {}, q = R.tweenLookup = {}, F = 0,
			L = R.reservedProps = {
				ease: 1,
				delay: 1,
				overwrite: 1,
				onComplete: 1,
				onCompleteParams: 1,
				onCompleteScope: 1,
				useFrames: 1,
				runBackwards: 1,
				startAt: 1,
				onUpdate: 1,
				onUpdateParams: 1,
				onUpdateScope: 1,
				onStart: 1,
				onStartParams: 1,
				onStartScope: 1,
				onReverseComplete: 1,
				onReverseCompleteParams: 1,
				onReverseCompleteScope: 1,
				onRepeat: 1,
				onRepeatParams: 1,
				onRepeatScope: 1,
				easeParams: 1,
				yoyo: 1,
				immediateRender: 1,
				repeat: 1,
				repeatDelay: 1,
				data: 1,
				paused: 1,
				reversed: 1,
				autoCSS: 1,
				lazy: 1,
				onOverwrite: 1
			}, V = {
				none: 0,
				all: 1,
				auto: 2,
				concurrent: 3,
				allOnStart: 4,
				preexisting: 5,
				"true": 1,
				"false": 0
			}, z = P._rootFramesTimeline = new A,
			H = P._rootTimeline = new A,
			Y = R.lazyRender = function() {
				var t, e = j.length;
				for (N = {}; --e > -1;) t = j[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
				j.length = 0
			};
		H._startTime = a.time, z._startTime = a.frame, H._active = z._active = !0, setTimeout(Y, 1), P._updateRoot = E.render = function() {
			var t, e, n;
			if (j.length && Y(), H.render((a.time - H._startTime) * H._timeScale, !1, !1), z.render((a.frame - z._startTime) * z._timeScale, !1, !1), j.length && Y(), !(a.frame % 120)) {
				for (n in q) {
					for (e = q[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
					0 === e.length && delete q[n]
				}
				if (n = H._first, (!n || n._paused) && E.autoSleep && !z._first && 1 === a._listeners.tick.length) {
					for (; n && n._paused;) n = n._next;
					n || a.sleep()
				}
			}
		}, a.addEventListener("tick", P._updateRoot);
		var U = function(t, e, n) {
			var r, i, o = t._gsTweenID;
			if (q[o || (t._gsTweenID = o = "t" + F++)] || (q[o] = {
				target: t,
				tweens: []
			}), e && (r = q[o].tweens, r[i = r.length] = e, n))
				for (; --i > -1;) r[i] === e && r.splice(i, 1);
			return q[o].tweens
		}, W = function(t, e, n, r) {
				var i, o, a = t.vars.onOverwrite;
				return a && (i = a(t, e, n, r)), a = E.onOverwrite, a && (o = a(t, e, n, r)), i !== !1 && o !== !1
			}, B = function(t, e, n, r, i) {
				var o, a, s, u;
				if (1 === r || r >= 4) {
					for (u = i.length, o = 0; u > o; o++)
						if ((s = i[o]) !== e) s._gc || W(s, e) && s._enabled(!1, !1) && (a = !0);
						else
					if (5 === r) break;
					return a
				}
				var l, f = e._startTime + c,
					h = [],
					d = 0,
					p = 0 === e._duration;
				for (o = i.length; --o > -1;)(s = i[o]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (l = l || X(e, 0, p), 0 === X(s, l, p) && (h[d++] = s)) : s._startTime <= f && s._startTime + s.totalDuration() / s._timeScale > f && ((p || !s._initted) && f - s._startTime <= 2e-10 || (h[d++] = s)));
				for (o = d; --o > -1;)
					if (s = h[o], 2 === r && s._kill(n, t, e) && (a = !0), 2 !== r || !s._firstPT && s._initted) {
						if (2 !== r && !W(s, e)) continue;
						s._enabled(!1, !1) && (a = !0)
					}
				return a
			}, X = function(t, e, n) {
				for (var r = t._timeline, i = r._timeScale, o = t._startTime; r._timeline;) {
					if (o += r._startTime, i *= r._timeScale, r._paused) return -100;
					r = r._timeline
				}
				return o /= i, o > e ? o - e : n && o === e || !t._initted && 2 * c > o - e ? c : (o += t.totalDuration() / t._timeScale / i) > e + c ? 0 : o - e - c
			};
		o._init = function() {
			var t, e, n, r, i, o = this.vars,
				a = this._overwrittenProps,
				s = this._duration,
				u = !! o.immediateRender,
				l = o.ease;
			if (o.startAt) {
				this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), i = {};
				for (r in o.startAt) i[r] = o.startAt[r];
				if (i.overwrite = !1, i.immediateRender = !0, i.lazy = u && o.lazy !== !1, i.startAt = i.delay = null, this._startAt = E.to(this.target, 0, i), u)
					if (this._time > 0) this._startAt = null;
					else
				if (0 !== s) return
			} else if (o.runBackwards && 0 !== s)
				if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
				else {
					0 !== this._time && (u = !1), n = {};
					for (r in o) L[r] && "autoCSS" !== r || (n[r] = o[r]);
					if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && o.lazy !== !1, n.immediateRender = u, this._startAt = E.to(this.target, 0, n), u) {
						if (0 === this._time) return
					} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
				}
			if (this._ease = l = l ? l instanceof $ ? l : "function" == typeof l ? new $(l, o.easeParams) : b[l] || E.defaultEase : E.defaultEase, o.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
				for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
			else e = this._initProps(this.target, this._propLookup, this._siblings, a); if (e && E._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
				for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
			this._onUpdate = o.onUpdate, this._initted = !0
		}, o._initProps = function(e, n, r, i) {
			var o, a, s, u, l, c;
			if (null == e) return !1;
			N[e._gsTweenID] && Y(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && M(this.vars, e);
			for (o in this.vars) {
				if (c = this.vars[o], L[o]) c && (c instanceof Array || c.push && d(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
				else if (I[o] && (u = new I[o])._onInitTween(e, this.vars[o], this)) {
					for (this._firstPT = l = {
						_next: this._firstPT,
						t: u,
						p: "setRatio",
						s: 0,
						c: 1,
						f: !0,
						n: o,
						pg: !0,
						pr: u._priority
					}, a = u._overwriteProps.length; --a > -1;) n[u._overwriteProps[a]] = this._firstPT;
					(u._priority || u._onInitAllProps) && (s = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0)
				} else this._firstPT = n[o] = l = {
					_next: this._firstPT,
					t: e,
					p: o,
					f: "function" == typeof e[o],
					n: o,
					pg: !1,
					pr: 0
				}, l.s = l.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), l.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - l.s || 0;
				l && l._next && (l._next._prev = l)
			}
			return i && this._kill(i, e) ? this._initProps(e, n, r, i) : this._overwrite > 1 && this._firstPT && r.length > 1 && B(e, this, n, this._overwrite, r) ? (this._kill(n, e), this._initProps(e, n, r, i)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0), s)
		}, o.render = function(t, e, n) {
			var r, i, o, a, s = this._time,
				u = this._duration,
				l = this._rawPrevTime;
			if (t >= u) this._totalTime = this._time = u, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete"), 0 === u && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === c && "isPause" !== this.data) && l !== t && (n = !0, l > c && (i = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : c);
			else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === u && l > 0 && l !== c) && (i = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === u && (this._initted || !this.vars.lazy || n) && (l >= 0 && (l !== c || "isPause" !== this.data) && (n = !0), this._rawPrevTime = a = !e || t || l === t ? t : c)), this._initted || (n = !0);
			else if (this._totalTime = this._time = t, this._easeType) {
				var f = t / u,
					h = this._easeType,
					d = this._easePower;
				(1 === h || 3 === h && f >= .5) && (f = 1 - f), 3 === h && (f *= 2), 1 === d ? f *= f : 2 === d ? f *= f * f : 3 === d ? f *= f * f * f : 4 === d && (f *= f * f * f * f), this.ratio = 1 === h ? 1 - f : 2 === h ? f : .5 > t / u ? f / 2 : 1 - f / 2
			} else this.ratio = this._ease.getRatio(t / u); if (this._time !== s || n) {
				if (!this._initted) {
					if (this._init(), !this._initted || this._gc) return;
					if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = l, j.push(this), void(this._lazy = [t, e]);
					this._time && !r ? this.ratio = this._ease.getRatio(this._time / u) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
				}
				for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === u) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
				this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, n), e || (this._time !== s || r) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), i && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || _), 0 === u && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
			}
		}, o._kill = function(t, e, n) {
			if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
			e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
			var r, i, o, a, s, u, l, c, f;
			if ((d(e) || D(e)) && "number" != typeof e[0])
				for (r = e.length; --r > -1;) this._kill(t, e[r]) && (u = !0);
			else {
				if (this._targets) {
					for (r = this._targets.length; --r > -1;)
						if (e === this._targets[r]) {
							s = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
							break
						}
				} else {
					if (e !== this.target) return !1;
					s = this._propLookup, i = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
				} if (s) {
					if (l = t || s, c = t !== i && "all" !== i && t !== s && ("object" != typeof t || !t._tempKill), n && (E.onOverwrite || this.vars.onOverwrite)) {
						for (o in l) s[o] && (f || (f = []), f.push(o));
						if (!W(this, n, e, f)) return !1
					}
					for (o in l)(a = s[o]) && (a.pg && a.t._kill(l) && (u = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[o]), c && (i[o] = 1);
					!this._firstPT && this._initted && this._enabled(!1, !1)
				}
			}
			return u
		}, o.invalidate = function() {
			return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
		}, o._enabled = function(t, e) {
			if (s || a.wake(), t && this._gc) {
				var n, r = this._targets;
				if (r)
					for (n = r.length; --n > -1;) this._siblings[n] = U(r[n], this, !0);
				else this._siblings = U(this.target, this, !0)
			}
			return P.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
		}, E.to = function(t, e, n) {
			return new E(t, e, n)
		}, E.from = function(t, e, n) {
			return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new E(t, e, n)
		}, E.fromTo = function(t, e, n, r) {
			return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new E(t, e, r)
		}, E.delayedCall = function(t, e, n, r, i) {
			return new E(e, 0, {
				delay: t,
				onComplete: e,
				onCompleteParams: n,
				onCompleteScope: r,
				onReverseComplete: e,
				onReverseCompleteParams: n,
				onReverseCompleteScope: r,
				immediateRender: !1,
				lazy: !1,
				useFrames: i,
				overwrite: 0
			})
		}, E.set = function(t, e) {
			return new E(t, 0, e)
		}, E.getTweensOf = function(t, e) {
			if (null == t) return [];
			t = "string" != typeof t ? t : E.selector(t) || t;
			var n, r, i, o;
			if ((d(t) || D(t)) && "number" != typeof t[0]) {
				for (n = t.length, r = []; --n > -1;) r = r.concat(E.getTweensOf(t[n], e));
				for (n = r.length; --n > -1;)
					for (o = r[n], i = n; --i > -1;) o === r[i] && r.splice(n, 1)
			} else
				for (r = U(t).concat(), n = r.length; --n > -1;)(r[n]._gc || e && !r[n].isActive()) && r.splice(n, 1);
			return r
		}, E.killTweensOf = E.killDelayedCallsTo = function(t, e, n) {
			"object" == typeof e && (n = e, e = !1);
			for (var r = E.getTweensOf(t, e), i = r.length; --i > -1;) r[i]._kill(n, t)
		};
		var Q = v("plugins.TweenPlugin", function(t, e) {
			this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
		}, !0);
		if (o = Q.prototype, Q.version = "1.10.1", Q.API = 2, o._firstPT = null, o._addTween = function(t, e, n, r, i, o) {
			var a, s;
			return null != r && (a = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - n : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) ? (this._firstPT = s = {
				_next: this._firstPT,
				t: t,
				p: e,
				s: n,
				c: a,
				f: "function" == typeof t[e],
				n: i || e,
				r: o
			}, s._next && (s._next._prev = s), s) : void 0
		}, o.setRatio = function(t) {
			for (var e, n = this._firstPT, r = 1e-6; n;) e = n.c * t + n.s, n.r ? e = Math.round(e) : r > e && e > -r && (e = 0), n.f ? n.t[n.p](e) : n.t[n.p] = e, n = n._next
		}, o._kill = function(t) {
			var e, n = this._overwriteProps,
				r = this._firstPT;
			if (null != t[this._propName]) this._overwriteProps = [];
			else
				for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
			for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
			return !1
		}, o._roundProps = function(t, e) {
			for (var n = this._firstPT; n;)(t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && (n.r = e), n = n._next
		}, E._onPluginEvent = function(t, e) {
			var n, r, i, o, a, s = e._firstPT;
			if ("_onInitAllProps" === t) {
				for (; s;) {
					for (a = s._next, r = i; r && r.pr > s.pr;) r = r._next;
					(s._prev = r ? r._prev : o) ? s._prev._next = s : i = s, (s._next = r) ? r._prev = s : o = s, s = a
				}
				s = e._firstPT = i
			}
			for (; s;) s.pg && "function" == typeof s.t[t] && s.t[t]() && (n = !0), s = s._next;
			return n
		}, Q.activate = function(t) {
			for (var e = t.length; --e > -1;) t[e].API === Q.API && (I[(new t[e])._propName] = t[e]);
			return !0
		}, g.plugin = function(t) {
			if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
			var e, n = t.propName,
				r = t.priority || 0,
				i = t.overwriteProps,
				o = {
					init: "_onInitTween",
					set: "setRatio",
					kill: "_kill",
					round: "_roundProps",
					initAll: "_onInitAllProps"
				}, a = v("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
					Q.call(this, n, r), this._overwriteProps = i || []
				}, t.global === !0),
				s = a.prototype = new Q(n);
			s.constructor = a, a.API = t.API;
			for (e in o) "function" == typeof t[e] && (s[o[e]] = t[e]);
			return a.version = t.version, Q.activate([a]), a
		}, r = t._gsQueue) {
			for (i = 0; i < r.length; i++) r[i]();
			for (o in p) p[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
		}
		s = !1
	}
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
function(t, e, n) {
	"use strict";

	function r(t, e) {
		return q(new(q(function() {}, {
			prototype: t
		})), e)
	}

	function i(t) {
		return I(arguments, function(e) {
			e !== t && I(e, function(e, n) {
				t.hasOwnProperty(n) || (t[n] = e)
			})
		}), t
	}

	function o(t, e) {
		var n = [];
		for (var r in t.path) {
			if (t.path[r] !== e.path[r]) break;
			n.push(t.path[r])
		}
		return n
	}

	function a(t) {
		if (Object.keys) return Object.keys(t);
		var n = [];
		return e.forEach(t, function(t, e) {
			n.push(e)
		}), n
	}

	function s(t, e) {
		if (Array.prototype.indexOf) return t.indexOf(e, Number(arguments[2]) || 0);
		var n = t.length >>> 0,
			r = Number(arguments[2]) || 0;
		for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++)
			if (r in t && t[r] === e) return r;
		return -1
	}

	function u(t, e, n, r) {
		var i, u = o(n, r),
			l = {}, c = [];
		for (var f in u)
			if (u[f].params && (i = a(u[f].params), i.length))
				for (var h in i) s(c, i[h]) >= 0 || (c.push(i[h]), l[i[h]] = t[i[h]]);
		return q({}, l, e)
	}

	function l(t, e, n) {
		if (!n) {
			n = [];
			for (var r in t) n.push(r)
		}
		for (var i = 0; i < n.length; i++) {
			var o = n[i];
			if (t[o] != e[o]) return !1
		}
		return !0
	}

	function c(t, e) {
		var n = {};
		return I(t, function(t) {
			n[t] = e[t]
		}), n
	}

	function f(t) {
		var e = {}, n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
		for (var r in t) - 1 == s(n, r) && (e[r] = t[r]);
		return e
	}

	function h(t, e) {
		var n = R(t),
			r = n ? [] : {};
		return I(t, function(t, i) {
			e(t, i) && (r[n ? r.length : i] = t)
		}), r
	}

	function d(t, e) {
		var n = R(t) ? [] : {};
		return I(t, function(t, r) {
			n[r] = e(t, r)
		}), n
	}

	function p(t, e) {
		var r = 1,
			o = 2,
			u = {}, l = [],
			c = u,
			h = q(t.when(u), {
				$$promises: u,
				$$values: u
			});
		this.study = function(u) {
			function d(t, n) {
				if (y[n] !== o) {
					if (v.push(n), y[n] === r) throw v.splice(0, s(v, n)), new Error("Cyclic dependency: " + v.join(" -> "));
					if (y[n] = r, j(t)) g.push(n, [
						function() {
							return e.get(t)
						}
					], l);
					else {
						var i = e.annotate(t);
						I(i, function(t) {
							t !== n && u.hasOwnProperty(t) && d(u[t], t)
						}), g.push(n, t, i)
					}
					v.pop(), y[n] = o
				}
			}

			function p(t) {
				return N(t) && t.then && t.$$promises
			}
			if (!N(u)) throw new Error("'invocables' must be an object");
			var m = a(u || {}),
				g = [],
				v = [],
				y = {};
			return I(u, d), u = v = y = null,
			function(r, o, a) {
				function s() {
					--$ || (b || i(_, o.$$values), v.$$values = _, v.$$promises = v.$$promises || !0, delete v.$$inheritedValues, d.resolve(_))
				}

				function u(t) {
					v.$$failure = t, d.reject(t)
				}

				function l(n, i, o) {
					function l(t) {
						f.reject(t), u(t)
					}

					function c() {
						if (!D(v.$$failure)) try {
							f.resolve(e.invoke(i, a, _)), f.promise.then(function(t) {
								_[n] = t, s()
							}, l)
						} catch (t) {
							l(t)
						}
					}
					var f = t.defer(),
						h = 0;
					I(o, function(t) {
						y.hasOwnProperty(t) && !r.hasOwnProperty(t) && (h++, y[t].then(function(e) {
							_[t] = e, --h || c()
						}, l))
					}), h || c(), y[n] = f.promise
				}
				if (p(r) && a === n && (a = o, o = r, r = null), r) {
					if (!N(r)) throw new Error("'locals' must be an object")
				} else r = c; if (o) {
					if (!p(o)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
				} else o = h;
				var d = t.defer(),
					v = d.promise,
					y = v.$$promises = {}, _ = q({}, r),
					$ = 1 + g.length / 3,
					b = !1;
				if (D(o.$$failure)) return u(o.$$failure), v;
				o.$$inheritedValues && i(_, f(o.$$inheritedValues, m)), q(y, o.$$promises), o.$$values ? (b = i(_, f(o.$$values, m)), v.$$inheritedValues = f(o.$$values, m), s()) : (o.$$inheritedValues && (v.$$inheritedValues = f(o.$$inheritedValues, m)), o.then(s, u));
				for (var w = 0, x = g.length; x > w; w += 3) r.hasOwnProperty(g[w]) ? s() : l(g[w], g[w + 1], g[w + 2]);
				return v
			}
		}, this.resolve = function(t, e, n, r) {
			return this.study(t)(e, n, r)
		}
	}

	function m(t, e, n) {
		this.fromConfig = function(t, e, n) {
			return D(t.template) ? this.fromString(t.template, e) : D(t.templateUrl) ? this.fromUrl(t.templateUrl, e) : D(t.templateProvider) ? this.fromProvider(t.templateProvider, e, n) : null
		}, this.fromString = function(t, e) {
			return M(t) ? t(e) : t
		}, this.fromUrl = function(n, r) {
			return M(n) && (n = n(r)), null == n ? null : t.get(n, {
				cache: e,
				headers: {
					Accept: "text/html"
				}
			}).then(function(t) {
				return t.data
			})
		}, this.fromProvider = function(t, e, r) {
			return n.invoke(t, null, r || {
				params: e
			})
		}
	}

	function g(t, e, i) {
		function o(e, n, r, i) {
			if (g.push(e), p[e]) return p[e];
			if (!/^\w+(-+\w+)*(?:\[\])?$/.test(e)) throw new Error("Invalid parameter name '" + e + "' in pattern '" + t + "'");
			if (m[e]) throw new Error("Duplicate parameter name '" + e + "' in pattern '" + t + "'");
			return m[e] = new L.Param(e, n, r, i), m[e]
		}

		function a(t, e, n) {
			var r = ["", ""],
				i = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
			if (!e) return i;
			switch (n) {
				case !1:
					r = ["(", ")"];
					break;
				case !0:
					r = ["?(", ")?"];
					break;
				default:
					r = ["(" + n + "|", ")?"]
			}
			return i + r[0] + e + r[1]
		}

		function s(n, i) {
			var o, a, s, u, l;
			return o = n[2] || n[3], l = e.params[o], s = t.substring(h, n.index), a = i ? n[4] : n[4] || ("*" == n[1] ? ".*" : null), u = L.type(a || "string") || r(L.type("string"), {
				pattern: new RegExp(a)
			}), {
				id: o,
				regexp: a,
				segment: s,
				type: u,
				cfg: l
			}
		}
		e = q({
			params: {}
		}, N(e) ? e : {});
		var u, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
			c = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
			f = "^",
			h = 0,
			d = this.segments = [],
			p = i ? i.params : {}, m = this.params = i ? i.params.$$new() : new L.ParamSet,
			g = [];
		this.source = t;
		for (var v, y, _;
			(u = l.exec(t)) && (v = s(u, !1), !(v.segment.indexOf("?") >= 0));) y = o(v.id, v.type, v.cfg, "path"), f += a(v.segment, y.type.pattern.source, y.squash), d.push(v.segment), h = l.lastIndex;
		_ = t.substring(h);
		var $ = _.indexOf("?");
		if ($ >= 0) {
			var b = this.sourceSearch = _.substring($);
			if (_ = _.substring(0, $), this.sourcePath = t.substring(0, h + $), b.length > 0)
				for (h = 0; u = c.exec(b);) v = s(u, !0), y = o(v.id, v.type, v.cfg, "search"), h = l.lastIndex
		} else this.sourcePath = t, this.sourceSearch = "";
		f += a(_) + (e.strict === !1 ? "/?" : "") + "$", d.push(_), this.regexp = new RegExp(f, e.caseInsensitive ? "i" : n), this.prefix = d[0], this.$$paramNames = g
	}

	function v(t) {
		q(this, t)
	}

	function y() {
		function t(t) {
			return null != t ? t.toString().replace(/\//g, "%2F") : t
		}

		function i(t) {
			return null != t ? t.toString().replace(/%2F/g, "/") : t
		}

		function o(t) {
			return this.pattern.test(t)
		}

		function u() {
			return {
				strict: _,
				caseInsensitive: m
			}
		}

		function l(t) {
			return M(t) || R(t) && M(t[t.length - 1])
		}

		function c() {
			for (; x.length;) {
				var t = x.shift();
				if (t.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
				e.extend(b[t.name], p.invoke(t.def))
			}
		}

		function f(t) {
			q(this, t || {})
		}
		L = this;
		var p, m = !1,
			_ = !0,
			$ = !1,
			b = {}, w = !0,
			x = [],
			T = {
				string: {
					encode: t,
					decode: i,
					is: o,
					pattern: /[^/]*/
				},
				"int": {
					encode: t,
					decode: function(t) {
						return parseInt(t, 10)
					},
					is: function(t) {
						return D(t) && this.decode(t.toString()) === t
					},
					pattern: /\d+/
				},
				bool: {
					encode: function(t) {
						return t ? 1 : 0
					},
					decode: function(t) {
						return 0 !== parseInt(t, 10)
					},
					is: function(t) {
						return t === !0 || t === !1
					},
					pattern: /0|1/
				},
				date: {
					encode: function(t) {
						return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : n
					},
					decode: function(t) {
						if (this.is(t)) return t;
						var e = this.capture.exec(t);
						return e ? new Date(e[1], e[2] - 1, e[3]) : n
					},
					is: function(t) {
						return t instanceof Date && !isNaN(t.valueOf())
					},
					equals: function(t, e) {
						return this.is(t) && this.is(e) && t.toISOString() === e.toISOString()
					},
					pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
					capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
				},
				json: {
					encode: e.toJson,
					decode: e.fromJson,
					is: e.isObject,
					equals: e.equals,
					pattern: /[^/]*/
				},
				any: {
					encode: e.identity,
					decode: e.identity,
					is: e.identity,
					equals: e.equals,
					pattern: /.*/
				}
			};
		y.$$getDefaultValue = function(t) {
			if (!l(t.value)) return t.value;
			if (!p) throw new Error("Injectable functions cannot be called at configuration time");
			return p.invoke(t.value)
		}, this.caseInsensitive = function(t) {
			return D(t) && (m = t), m
		}, this.strictMode = function(t) {
			return D(t) && (_ = t), _
		}, this.defaultSquashPolicy = function(t) {
			if (!D(t)) return $;
			if (t !== !0 && t !== !1 && !j(t)) throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");
			return $ = t, t
		}, this.compile = function(t, e) {
			return new g(t, q(u(), e))
		}, this.isMatcher = function(t) {
			if (!N(t)) return !1;
			var e = !0;
			return I(g.prototype, function(n, r) {
				M(n) && (e = e && D(t[r]) && M(t[r]))
			}), e
		}, this.type = function(t, e, n) {
			if (!D(e)) return b[t];
			if (b.hasOwnProperty(t)) throw new Error("A type named '" + t + "' has already been defined.");
			return b[t] = new v(q({
				name: t
			}, e)), n && (x.push({
				name: t,
				def: n
			}), w || c()), this
		}, I(T, function(t, e) {
			b[e] = new v(q({
				name: e
			}, t))
		}), b = r(b, {}), this.$get = ["$injector",
			function(t) {
				return p = t, w = !1, c(), I(T, function(t, e) {
					b[e] || (b[e] = new v(t))
				}), this
			}
		], this.Param = function(t, e, r, i) {
			function o(t) {
				var e = N(t) ? a(t) : [],
					n = -1 === s(e, "value") && -1 === s(e, "type") && -1 === s(e, "squash") && -1 === s(e, "array");
				return n && (t = {
					value: t
				}), t.$$fn = l(t.value) ? t.value : function() {
					return t.value
				}, t
			}

			function u(e, n, r) {
				if (e.type && n) throw new Error("Param '" + t + "' has two type configurations.");
				return n ? n : e.type ? e.type instanceof v ? e.type : new v(e.type) : "config" === r ? b.any : b.string
			}

			function c() {
				var e = {
					array: "search" === i ? "auto" : !1
				}, n = t.match(/\[\]$/) ? {
						array: !0
					} : {};
				return q(e, n, r).array
			}

			function f(t, e) {
				var n = t.squash;
				if (!e || n === !1) return !1;
				if (!D(n) || null == n) return $;
				if (n === !0 || j(n)) return n;
				throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
			}

			function m(t, e, r, i) {
				var o, a, u = [{
						from: "",
						to: r || e ? n : ""
					}, {
						from: null,
						to: r || e ? n : ""
					}];
				return o = R(t.replace) ? t.replace : [], j(i) && o.push({
					from: i,
					to: n
				}), a = d(o, function(t) {
					return t.from
				}), h(u, function(t) {
					return -1 === s(a, t.from)
				}).concat(o)
			}

			function g() {
				if (!p) throw new Error("Injectable functions cannot be called at configuration time");
				return p.invoke(r.$$fn)
			}

			function y(t) {
				function e(t) {
					return function(e) {
						return e.from === t
					}
				}

				function n(t) {
					var n = d(h(w.replace, e(t)), function(t) {
						return t.to
					});
					return n.length ? n[0] : t
				}
				return t = n(t), D(t) ? w.type.decode(t) : g()
			}

			function _() {
				return "{Param:" + t + " " + e + " squash: '" + S + "' optional: " + T + "}"
			}
			var w = this;
			r = o(r), e = u(r, e, i);
			var x = c();
			e = x ? e.$asArray(x, "search" === i) : e, "string" !== e.name || x || "path" !== i || r.value !== n || (r.value = "");
			var T = r.value !== n,
				S = f(r, T),
				C = m(r, x, T, S);
			q(this, {
				id: t,
				type: e,
				location: i,
				array: x,
				squash: S,
				replace: C,
				isOptional: T,
				value: y,
				dynamic: n,
				config: r,
				toString: _
			})
		}, f.prototype = {
			$$new: function() {
				return r(this, q(new f, {
					$$parent: this
				}))
			},
			$$keys: function() {
				for (var t = [], e = [], n = this, r = a(f.prototype); n;) e.push(n), n = n.$$parent;
				return e.reverse(), I(e, function(e) {
					I(a(e), function(e) {
						-1 === s(t, e) && -1 === s(r, e) && t.push(e)
					})
				}), t
			},
			$$values: function(t) {
				var e = {}, n = this;
				return I(n.$$keys(), function(r) {
					e[r] = n[r].value(t && t[r])
				}), e
			},
			$$equals: function(t, e) {
				var n = !0,
					r = this;
				return I(r.$$keys(), function(i) {
					var o = t && t[i],
						a = e && e[i];
					r[i].type.equals(o, a) || (n = !1)
				}), n
			},
			$$validates: function(t) {
				var e, n, r, i = !0,
					o = this;
				return I(this.$$keys(), function(a) {
					r = o[a], n = t[a], e = !n && r.isOptional, i = i && (e || !! r.type.is(n))
				}), i
			},
			$$parent: n
		}, this.ParamSet = f
	}

	function _(t, r) {
		function i(t) {
			var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);
			return null != e ? e[1].replace(/\\(.)/g, "$1") : ""
		}

		function o(t, e) {
			return t.replace(/\$(\$|\d{1,2})/, function(t, n) {
				return e["$" === n ? 0 : Number(n)]
			})
		}

		function a(t, e, n) {
			if (!n) return !1;
			var r = t.invoke(e, e, {
				$match: n
			});
			return D(r) ? r : !0
		}

		function s(r, i, o, a) {
			function s(t, e, n) {
				return "/" === m ? t : e ? m.slice(0, -1) + t : n ? m.slice(1) + t : t
			}

			function h(t) {
				function e(t) {
					var e = t(o, r);
					return e ? (j(e) && r.replace().url(e), !0) : !1
				}
				if (!t || !t.defaultPrevented) {
					var i = p && r.url() === p;
					if (p = n, i) return !0;
					var a, s = l.length;
					for (a = 0; s > a; a++)
						if (e(l[a])) return;
					c && e(c)
				}
			}

			function d() {
				return u = u || i.$on("$locationChangeSuccess", h)
			}
			var p, m = a.baseHref(),
				g = r.url();
			return f || d(), {
				sync: function() {
					h()
				},
				listen: function() {
					return d()
				},
				update: function(t) {
					return t ? void(g = r.url()) : void(r.url() !== g && (r.url(g), r.replace()))
				},
				push: function(t, e, i) {
					r.url(t.format(e || {})), p = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
				},
				href: function(n, i, o) {
					if (!n.validates(i)) return null;
					var a = t.html5Mode();
					e.isObject(a) && (a = a.enabled);
					var u = n.format(i);
					if (o = o || {}, a || null === u || (u = "#" + t.hashPrefix() + u), u = s(u, a, o.absolute), !o.absolute || !u) return u;
					var l = !a && u ? "/" : "",
						c = r.port();
					return c = 80 === c || 443 === c ? "" : ":" + c, [r.protocol(), "://", r.host(), c, l, u].join("")
				}
			}
		}
		var u, l = [],
			c = null,
			f = !1;
		this.rule = function(t) {
			if (!M(t)) throw new Error("'rule' must be a function");
			return l.push(t), this
		}, this.otherwise = function(t) {
			if (j(t)) {
				var e = t;
				t = function() {
					return e
				}
			} else if (!M(t)) throw new Error("'rule' must be a function");
			return c = t, this
		}, this.when = function(t, e) {
			var n, s = j(e);
			if (j(t) && (t = r.compile(t)), !s && !M(e) && !R(e)) throw new Error("invalid 'handler' in when()");
			var u = {
				matcher: function(t, e) {
					return s && (n = r.compile(e), e = ["$match",
						function(t) {
							return n.format(t)
						}
					]), q(function(n, r) {
						return a(n, e, t.exec(r.path(), r.search()))
					}, {
						prefix: j(t.prefix) ? t.prefix : ""
					})
				},
				regex: function(t, e) {
					if (t.global || t.sticky) throw new Error("when() RegExp must not be global or sticky");
					return s && (n = e, e = ["$match",
						function(t) {
							return o(n, t)
						}
					]), q(function(n, r) {
						return a(n, e, t.exec(r.path()))
					}, {
						prefix: i(t)
					})
				}
			}, l = {
					matcher: r.isMatcher(t),
					regex: t instanceof RegExp
				};
			for (var c in l)
				if (l[c]) return this.rule(u[c](t, e));
			throw new Error("invalid 'what' in when()")
		}, this.deferIntercept = function(t) {
			t === n && (t = !0), f = t
		}, this.$get = s, s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
	}

	function $(t, i) {
		function o(t) {
			return 0 === t.indexOf(".") || 0 === t.indexOf("^")
		}

		function f(t, e) {
			if (!t) return n;
			var r = j(t),
				i = r ? t : t.name,
				a = o(i);
			if (a) {
				if (!e) throw new Error("No reference point given for path '" + i + "'");
				e = f(e);
				for (var s = i.split("."), u = 0, l = s.length, c = e; l > u; u++)
					if ("" !== s[u] || 0 !== u) {
						if ("^" !== s[u]) break;
						if (!c.parent) throw new Error("Path '" + i + "' not valid for state '" + e.name + "'");
						c = c.parent
					} else c = e;
				s = s.slice(u).join("."), i = c.name + (c.name && s ? "." : "") + s
			}
			var h = T[i];
			return !h || !r && (r || h !== t && h.self !== t) ? n : h
		}

		function h(t, e) {
			S[t] || (S[t] = []), S[t].push(e)
		}

		function p(t) {
			for (var e = S[t] || []; e.length;) m(e.shift())
		}

		function m(e) {
			e = r(e, {
				self: e,
				resolve: e.resolve || {},
				toString: function() {
					return this.name
				}
			});
			var n = e.name;
			if (!j(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
			if (T.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
			var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : j(e.parent) ? e.parent : N(e.parent) && j(e.parent.name) ? e.parent.name : "";
			if (i && !T[i]) return h(i, e.self);
			for (var o in k) M(k[o]) && (e[o] = k[o](e, k.$delegates[o]));
			return T[n] = e, !e[C] && e.url && t.when(e.url, ["$match", "$stateParams",
				function(t, n) {
					x.$current.navigable == e && l(t, n) || x.transitionTo(e, t, {
						inherit: !0,
						location: !1
					})
				}
			]), p(n), e
		}

		function g(t) {
			return t.indexOf("*") > -1
		}

		function v(t) {
			var e = t.split("."),
				n = x.$current.name.split(".");
			if ("**" === e[0] && (n = n.slice(s(n, e[1])), n.unshift("**")), "**" === e[e.length - 1] && (n.splice(s(n, e[e.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), e.length != n.length) return !1;
			for (var r = 0, i = e.length; i > r; r++) "*" === e[r] && (n[r] = "*");
			return n.join("") === e.join("")
		}

		function y(t, e) {
			return j(t) && !D(e) ? k[t] : M(e) && j(t) ? (k[t] && !k.$delegates[t] && (k.$delegates[t] = k[t]), k[t] = e, this) : this
		}

		function _(t, e) {
			return N(t) ? e = t : e.name = t, m(e), this
		}

		function $(t, i, o, s, h, p, m) {
			function y(e, n, r, o) {
				var a = t.$broadcast("$stateNotFound", e, n, r);
				if (a.defaultPrevented) return m.update(), k;
				if (!a.retry) return null;
				if (o.$retry) return m.update(), P;
				var s = x.transition = i.when(a.retry);
				return s.then(function() {
					return s !== x.transition ? $ : (e.options.$retry = !0, x.transitionTo(e.to, e.toParams, e.options))
				}, function() {
					return k
				}), m.update(), s
			}

			function _(t, n, r, a, u, l) {
				var f = r ? n : c(t.params.$$keys(), n),
					d = {
						$stateParams: f
					};
				u.resolve = h.resolve(t.resolve, d, u.resolve, t);
				var p = [u.resolve.then(function(t) {
					u.globals = t
				})];
				return a && p.push(a), I(t.views, function(n, r) {
					var i = n.resolve && n.resolve !== t.resolve ? n.resolve : {};
					i.$template = [
						function() {
							return o.load(r, {
								view: n,
								locals: d,
								params: f,
								notify: l.notify
							}) || ""
						}
					], p.push(h.resolve(i, d, u.resolve, t).then(function(o) {
						if (M(n.controllerProvider) || R(n.controllerProvider)) {
							var a = e.extend({}, i, d);
							o.$$controller = s.invoke(n.controllerProvider, null, a)
						} else o.$$controller = n.controller;
						o.$$state = t, o.$$controllerAs = n.controllerAs, u[r] = o
					}))
				}), i.all(p).then(function() {
					return u
				})
			}
			var $ = i.reject(new Error("transition superseded")),
				S = i.reject(new Error("transition prevented")),
				k = i.reject(new Error("transition aborted")),
				P = i.reject(new Error("transition failed"));
			return w.locals = {
				resolve: null,
				globals: {
					$stateParams: {}
				}
			}, x = {
				params: {},
				current: w.self,
				$current: w,
				transition: null
			}, x.reload = function() {
				return x.transitionTo(x.current, p, {
					reload: !0,
					inherit: !1,
					notify: !0
				})
			}, x.go = function(t, e, n) {
				return x.transitionTo(t, e, q({
					inherit: !0,
					relative: x.$current
				}, n))
			}, x.transitionTo = function(e, n, o) {
				n = n || {}, o = q({
					location: !0,
					inherit: !1,
					relative: null,
					notify: !0,
					reload: !1,
					$retry: !1
				}, o || {});
				var a, l = x.$current,
					h = x.params,
					d = l.path,
					g = f(e, o.relative);
				if (!D(g)) {
					var v = {
						to: e,
						toParams: n,
						options: o
					}, T = y(v, l.self, h, o);
					if (T) return T;
					if (e = v.to, n = v.toParams, o = v.options, g = f(e, o.relative), !D(g)) {
						if (!o.relative) throw new Error("No such state '" + e + "'");
						throw new Error("Could not resolve '" + e + "' from state '" + o.relative + "'")
					}
				}
				if (g[C]) throw new Error("Cannot transition to abstract state '" + e + "'");
				if (o.inherit && (n = u(p, n || {}, x.$current, g)), !g.params.$$validates(n)) return P;
				n = g.params.$$values(n), e = g;
				var k = e.path,
					O = 0,
					A = k[O],
					E = w.locals,
					M = [];
				if (!o.reload)
					for (; A && A === d[O] && A.ownParams.$$equals(n, h);) E = M[O] = A.locals, O++, A = k[O];
				if (b(e, l, E, o)) return e.self.reloadOnSearch !== !1 && m.update(), x.transition = null, i.when(x.current);
				if (n = c(e.params.$$keys(), n || {}), o.notify && t.$broadcast("$stateChangeStart", e.self, n, l.self, h).defaultPrevented) return m.update(), S;
				for (var j = i.when(E), N = O; N < k.length; N++, A = k[N]) E = M[N] = r(E), j = _(A, n, A === e, j, E, o);
				var R = x.transition = j.then(function() {
					var r, i, a;
					if (x.transition !== R) return $;
					for (r = d.length - 1; r >= O; r--) a = d[r], a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
					for (r = O; r < k.length; r++) i = k[r], i.locals = M[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
					return x.transition !== R ? $ : (x.$current = e, x.current = e.self, x.params = n, F(x.params, p), x.transition = null, o.location && e.navigable && m.push(e.navigable.url, e.navigable.locals.globals.$stateParams, {
						$$avoidResync: !0,
						replace: "replace" === o.location
					}), o.notify && t.$broadcast("$stateChangeSuccess", e.self, n, l.self, h), m.update(!0), x.current)
				}, function(r) {
					return x.transition !== R ? $ : (x.transition = null, a = t.$broadcast("$stateChangeError", e.self, n, l.self, h, r), a.defaultPrevented || m.update(), i.reject(r))
				});
				return R
			}, x.is = function(t, e, r) {
				r = q({
					relative: x.$current
				}, r || {});
				var i = f(t, r.relative);
				return D(i) ? x.$current !== i ? !1 : e ? l(i.params.$$values(e), p) : !0 : n
			}, x.includes = function(t, e, r) {
				if (r = q({
					relative: x.$current
				}, r || {}), j(t) && g(t)) {
					if (!v(t)) return !1;
					t = x.$current.name
				}
				var i = f(t, r.relative);
				return D(i) ? D(x.$current.includes[i.name]) ? e ? l(i.params.$$values(e), p, a(e)) : !0 : !1 : n
			}, x.href = function(t, e, r) {
				r = q({
					lossy: !0,
					inherit: !0,
					absolute: !1,
					relative: x.$current
				}, r || {});
				var i = f(t, r.relative);
				if (!D(i)) return null;
				r.inherit && (e = u(p, e || {}, x.$current, i));
				var o = i && r.lossy ? i.navigable : i;
				return o && o.url !== n && null !== o.url ? m.href(o.url, c(i.params.$$keys(), e || {}), {
					absolute: r.absolute
				}) : null
			}, x.get = function(t, e) {
				if (0 === arguments.length) return d(a(T), function(t) {
					return T[t].self
				});
				var n = f(t, e || x.$current);
				return n && n.self ? n.self : null
			}, x
		}

		function b(t, e, n, r) {
			return t !== e || (n !== e.locals || r.reload) && t.self.reloadOnSearch !== !1 ? void 0 : !0
		}
		var w, x, T = {}, S = {}, C = "abstract",
			k = {
				parent: function(t) {
					if (D(t.parent) && t.parent) return f(t.parent);
					var e = /^(.+)\.[^.]+$/.exec(t.name);
					return e ? f(e[1]) : w
				},
				data: function(t) {
					return t.parent && t.parent.data && (t.data = t.self.data = q({}, t.parent.data, t.data)), t.data
				},
				url: function(t) {
					var e = t.url,
						n = {
							params: t.params || {}
						};
					if (j(e)) return "^" == e.charAt(0) ? i.compile(e.substring(1), n) : (t.parent.navigable || w).url.concat(e, n);
					if (!e || i.isMatcher(e)) return e;
					throw new Error("Invalid url '" + e + "' in state '" + t + "'")
				},
				navigable: function(t) {
					return t.url ? t : t.parent ? t.parent.navigable : null
				},
				ownParams: function(t) {
					var e = t.url && t.url.params || new L.ParamSet;
					return I(t.params || {}, function(t, n) {
						e[n] || (e[n] = new L.Param(n, null, t, "config"))
					}), e
				},
				params: function(t) {
					return t.parent && t.parent.params ? q(t.parent.params.$$new(), t.ownParams) : new L.ParamSet
				},
				views: function(t) {
					var e = {};
					return I(D(t.views) ? t.views : {
						"": t
					}, function(n, r) {
						r.indexOf("@") < 0 && (r += "@" + t.parent.name), e[r] = n
					}), e
				},
				path: function(t) {
					return t.parent ? t.parent.path.concat(t) : []
				},
				includes: function(t) {
					var e = t.parent ? q({}, t.parent.includes) : {};
					return e[t.name] = !0, e
				},
				$delegates: {}
			};
		w = m({
			name: "",
			url: "^",
			views: null,
			"abstract": !0
		}), w.navigable = null, this.decorator = y, this.state = _, this.$get = $, $.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
	}

	function b() {
		function t(t, e) {
			return {
				load: function(n, r) {
					var i, o = {
							template: null,
							controller: null,
							view: null,
							locals: null,
							notify: !0,
							async: !0,
							params: {}
						};
					return r = q(o, r), r.view && (i = e.fromConfig(r.view, r.params, r.locals)), i && r.notify && t.$broadcast("$viewContentLoading", r), i
				}
			}
		}
		this.$get = t, t.$inject = ["$rootScope", "$templateFactory"]
	}

	function w() {
		var t = !1;
		this.useAnchorScroll = function() {
			t = !0
		}, this.$get = ["$anchorScroll", "$timeout",
			function(e, n) {
				return t ? e : function(t) {
					n(function() {
						t[0].scrollIntoView()
					}, 0, !1)
				}
			}
		]
	}

	function x(t, n, r, i) {
		function o() {
			return n.has ? function(t) {
				return n.has(t) ? n.get(t) : null
			} : function(t) {
				try {
					return n.get(t)
				} catch (e) {
					return null
				}
			}
		}

		function a(t, e) {
			var n = function() {
				return {
					enter: function(t, e, n) {
						e.after(t), n()
					},
					leave: function(t, e) {
						t.remove(), e()
					}
				}
			};
			if (l) return {
				enter: function(t, e, n) {
					var r = l.enter(t, null, e, n);
					r && r.then && r.then(n)
				},
				leave: function(t, e) {
					var n = l.leave(t, e);
					n && n.then && n.then(e)
				}
			};
			if (u) {
				var r = u && u(e, t);
				return {
					enter: function(t, e, n) {
						r.enter(t, null, e), n()
					},
					leave: function(t, e) {
						r.leave(t), e()
					}
				}
			}
			return n()
		}
		var s = o(),
			u = s("$animator"),
			l = s("$animate"),
			c = {
				restrict: "ECA",
				terminal: !0,
				priority: 400,
				transclude: "element",
				compile: function(n, o, s) {
					return function(n, o, u) {
						function l() {
							f && (f.remove(), f = null), d && (d.$destroy(), d = null), h && (v.leave(h, function() {
								f = null
							}), f = h, h = null)
						}

						function c(a) {
							var c, f = S(n, u, o, i),
								y = f && t.$current && t.$current.locals[f];
							if (a || y !== p) {
								c = n.$new(), p = t.$current.locals[f];
								var _ = s(c, function(t) {
									v.enter(t, o, function() {
										d && d.$emit("$viewContentAnimationEnded"), (e.isDefined(g) && !g || n.$eval(g)) && r(t)
									}), l()
								});
								h = _, d = c, d.$emit("$viewContentLoaded"), d.$eval(m)
							}
						}
						var f, h, d, p, m = u.onload || "",
							g = u.autoscroll,
							v = a(u, n);
						n.$on("$stateChangeSuccess", function() {
							c(!1)
						}), n.$on("$viewContentLoading", function() {
							c(!1)
						}), c(!0)
					}
				}
			};
		return c
	}

	function T(t, e, n, r) {
		return {
			restrict: "ECA",
			priority: -400,
			compile: function(i) {
				var o = i.html();
				return function(i, a, s) {
					var u = n.$current,
						l = S(i, s, a, r),
						c = u && u.locals[l];
					if (c) {
						a.data("$uiView", {
							name: l,
							state: c.$$state
						}), a.html(c.$template ? c.$template : o);
						var f = t(a.contents());
						if (c.$$controller) {
							c.$scope = i;
							var h = e(c.$$controller, c);
							c.$$controllerAs && (i[c.$$controllerAs] = h), a.data("$ngControllerController", h), a.children().data("$ngControllerController", h)
						}
						f(i)
					}
				}
			}
		}
	}

	function S(t, e, n, r) {
		var i = r(e.uiView || e.name || "")(t),
			o = n.inheritedData("$uiView");
		return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
	}

	function C(t, e) {
		var n, r = t.match(/^\s*({[^}]*})\s*$/);
		if (r && (t = e + "(" + r[1] + ")"), n = t.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + t + "'");
		return {
			state: n[1],
			paramExpr: n[3] || null
		}
	}

	function k(t) {
		var e = t.parent().inheritedData("$uiView");
		return e && e.state && e.state.name ? e.state : void 0
	}

	function P(t, n) {
		var r = ["location", "inherit", "reload"];
		return {
			restrict: "A",
			require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
			link: function(i, o, a, s) {
				var u = C(a.uiSref, t.current.name),
					l = null,
					c = k(o) || t.$current,
					f = null,
					h = "A" === o.prop("tagName"),
					d = "FORM" === o[0].nodeName,
					p = d ? "action" : "href",
					m = !0,
					g = {
						relative: c,
						inherit: !0
					}, v = i.$eval(a.uiSrefOpts) || {};
				e.forEach(r, function(t) {
					t in v && (g[t] = v[t])
				});
				var y = function(n) {
					if (n && (l = e.copy(n)), m) {
						f = t.href(u.state, l, g);
						var r = s[1] || s[0];
						return r && r.$$setStateInfo(u.state, l), null === f ? (m = !1, !1) : void a.$set(p, f)
					}
				};
				u.paramExpr && (i.$watch(u.paramExpr, function(t) {
					t !== l && y(t)
				}, !0), l = e.copy(i.$eval(u.paramExpr))), y(), d || o.bind("click", function(e) {
					var r = e.which || e.button;
					if (!(r > 1 || e.ctrlKey || e.metaKey || e.shiftKey || o.attr("target"))) {
						var i = n(function() {
							t.go(u.state, l, g)
						});
						e.preventDefault();
						var a = h && !f ? 1 : 0;
						e.preventDefault = function() {
							a-- <= 0 && n.cancel(i)
						}
					}
				})
			}
		}
	}

	function O(t, e, n) {
		return {
			restrict: "A",
			controller: ["$scope", "$element", "$attrs",
				function(e, r, i) {
					function o() {
						a() ? r.addClass(l) : r.removeClass(l)
					}

					function a() {
						return "undefined" != typeof i.uiSrefActiveEq ? s && t.is(s.name, u) : s && t.includes(s.name, u)
					}
					var s, u, l;
					l = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(e), this.$$setStateInfo = function(e, n) {
						s = t.get(e, k(r)), u = n, o()
					}, e.$on("$stateChangeSuccess", o)
				}
			]
		}
	}

	function A(t) {
		var e = function(e) {
			return t.is(e)
		};
		return e.$stateful = !0, e
	}

	function E(t) {
		var e = function(e) {
			return t.includes(e)
		};
		return e.$stateful = !0, e
	}
	var D = e.isDefined,
		M = e.isFunction,
		j = e.isString,
		N = e.isObject,
		R = e.isArray,
		I = e.forEach,
		q = e.extend,
		F = e.copy;
	e.module("ui.router.util", ["ng"]), e.module("ui.router.router", ["ui.router.util"]), e.module("ui.router.state", ["ui.router.router", "ui.router.util"]), e.module("ui.router", ["ui.router.state"]), e.module("ui.router.compat", ["ui.router"]), p.$inject = ["$q", "$injector"], e.module("ui.router.util").service("$resolve", p), m.$inject = ["$http", "$templateCache", "$injector"], e.module("ui.router.util").service("$templateFactory", m);
	var L;
	g.prototype.concat = function(t, e) {
		var n = {
			caseInsensitive: L.caseInsensitive(),
			strict: L.strictMode(),
			squash: L.defaultSquashPolicy()
		};
		return new g(this.sourcePath + t + this.sourceSearch, q(n, e), this)
	}, g.prototype.toString = function() {
		return this.source
	}, g.prototype.exec = function(t, e) {
		function n(t) {
			function e(t) {
				return t.split("").reverse().join("")
			}

			function n(t) {
				return t.replace(/\\-/, "-")
			}
			var r = e(t).split(/-(?!\\)/),
				i = d(r, e);
			return d(i, n).reverse()
		}
		var r = this.regexp.exec(t);
		if (!r) return null;
		e = e || {};
		var i, o, a, s = this.parameters(),
			u = s.length,
			l = this.segments.length - 1,
			c = {};
		if (l !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
		for (i = 0; l > i; i++) {
			a = s[i];
			var f = this.params[a],
				h = r[i + 1];
			for (o = 0; o < f.replace; o++) f.replace[o].from === h && (h = f.replace[o].to);
			h && f.array === !0 && (h = n(h)), c[a] = f.value(h)
		}
		for (; u > i; i++) a = s[i], c[a] = this.params[a].value(e[a]);
		return c
	}, g.prototype.parameters = function(t) {
		return D(t) ? this.params[t] || null : this.$$paramNames
	}, g.prototype.validates = function(t) {
		return this.params.$$validates(t)
	}, g.prototype.format = function(t) {
		function e(t) {
			return encodeURIComponent(t).replace(/-/g, function(t) {
				return "%5C%" + t.charCodeAt(0).toString(16).toUpperCase()
			})
		}
		t = t || {};
		var n = this.segments,
			r = this.parameters(),
			i = this.params;
		if (!this.validates(t)) return null;
		var o, a = !1,
			s = n.length - 1,
			u = r.length,
			l = n[0];
		for (o = 0; u > o; o++) {
			var c = s > o,
				f = r[o],
				h = i[f],
				p = h.value(t[f]),
				m = h.isOptional && h.type.equals(h.value(), p),
				g = m ? h.squash : !1,
				v = h.type.encode(p);
			if (c) {
				var y = n[o + 1];
				if (g === !1) null != v && (l += R(v) ? d(v, e).join("-") : encodeURIComponent(v)), l += y;
				else if (g === !0) {
					var _ = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
					l += y.match(_)[1]
				} else j(g) && (l += g + y)
			} else {
				if (null == v || m && g !== !1) continue;
				R(v) || (v = [v]), v = d(v, encodeURIComponent).join("&" + f + "="), l += (a ? "&" : "?") + (f + "=" + v), a = !0
			}
		}
		return l
	}, v.prototype.is = function() {
		return !0
	}, v.prototype.encode = function(t) {
		return t
	}, v.prototype.decode = function(t) {
		return t
	}, v.prototype.equals = function(t, e) {
		return t == e
	}, v.prototype.$subPattern = function() {
		var t = this.pattern.toString();
		return t.substr(1, t.length - 2)
	}, v.prototype.pattern = /.*/, v.prototype.toString = function() {
		return "{Type:" + this.name + "}"
	}, v.prototype.$asArray = function(t, e) {
		function r(t, e) {
			function r(t, e) {
				return function() {
					return t[e].apply(t, arguments)
				}
			}

			function i(t) {
				return R(t) ? t : D(t) ? [t] : []
			}

			function o(t) {
				switch (t.length) {
					case 0:
						return n;
					case 1:
						return "auto" === e ? t[0] : t;
					default:
						return t
				}
			}

			function a(t) {
				return !t
			}

			function s(t, e) {
				return function(n) {
					n = i(n);
					var r = d(n, t);
					return e === !0 ? 0 === h(r, a).length : o(r)
				}
			}

			function u(t) {
				return function(e, n) {
					var r = i(e),
						o = i(n);
					if (r.length !== o.length) return !1;
					for (var a = 0; a < r.length; a++)
						if (!t(r[a], o[a])) return !1;
					return !0
				}
			}
			this.encode = s(r(t, "encode")), this.decode = s(r(t, "decode")), this.is = s(r(t, "is"), !0), this.equals = u(r(t, "equals")), this.pattern = t.pattern, this.$arrayMode = e
		}
		if (!t) return this;
		if ("auto" === t && !e) throw new Error("'auto' array mode is for query parameters only");
		return new r(this, t)
	}, e.module("ui.router.util").provider("$urlMatcherFactory", y), e.module("ui.router.util").run(["$urlMatcherFactory",
		function() {}
	]), _.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.router").provider("$urlRouter", _), $.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.state").value("$stateParams", {}).provider("$state", $), b.$inject = [], e.module("ui.router.state").provider("$view", b), e.module("ui.router.state").provider("$uiViewScroll", w), x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], T.$inject = ["$compile", "$controller", "$state", "$interpolate"], e.module("ui.router.state").directive("uiView", x), e.module("ui.router.state").directive("uiView", T), P.$inject = ["$state", "$timeout"], O.$inject = ["$state", "$stateParams", "$interpolate"], e.module("ui.router.state").directive("uiSref", P).directive("uiSrefActive", O).directive("uiSrefActiveEq", O), A.$inject = ["$state"], E.$inject = ["$state"], e.module("ui.router.state").filter("isState", A).filter("includedByState", E)
}(window, window.angular),
function() {
	function t(t, e, n) {
		for (var r = (n || 0) - 1, i = t ? t.length : 0; ++r < i;)
			if (t[r] === e) return r;
		return -1
	}

	function e(e, n) {
		var r = typeof n;
		if (e = e.cache, "boolean" == r || null == n) return e[n] ? 0 : -1;
		"number" != r && "string" != r && (r = "object");
		var i = "number" == r ? n : _ + n;
		return e = (e = e[r]) && e[i], "object" == r ? e && t(e, n) > -1 ? 0 : -1 : e ? 0 : -1
	}

	function n(t) {
		var e = this.cache,
			n = typeof t;
		if ("boolean" == n || null == t) e[t] = !0;
		else {
			"number" != n && "string" != n && (n = "object");
			var r = "number" == n ? t : _ + t,
				i = e[n] || (e[n] = {});
			"object" == n ? (i[r] || (i[r] = [])).push(t) : i[r] = !0
		}
	}

	function r(t) {
		return t.charCodeAt(0)
	}

	function i(t, e) {
		for (var n = t.criteria, r = e.criteria, i = -1, o = n.length; ++i < o;) {
			var a = n[i],
				s = r[i];
			if (a !== s) {
				if (a > s || "undefined" == typeof a) return 1;
				if (s > a || "undefined" == typeof s) return -1
			}
		}
		return t.index - e.index
	}

	function o(t) {
		var e = -1,
			r = t.length,
			i = t[0],
			o = t[r / 2 | 0],
			a = t[r - 1];
		if (i && "object" == typeof i && o && "object" == typeof o && a && "object" == typeof a) return !1;
		var s = u();
		s["false"] = s["null"] = s["true"] = s.undefined = !1;
		var l = u();
		for (l.array = t, l.cache = s, l.push = n; ++e < r;) l.push(t[e]);
		return l
	}

	function a(t) {
		return "\\" + K[t]
	}

	function s() {
		return m.pop() || []
	}

	function u() {
		return g.pop() || {
			array: null,
			cache: null,
			criteria: null,
			"false": !1,
			index: 0,
			"null": !1,
			number: null,
			object: null,
			push: null,
			string: null,
			"true": !1,
			undefined: !1,
			value: null
		}
	}

	function l(t) {
		return "function" != typeof t.toString && "string" == typeof(t + "")
	}

	function c(t) {
		t.length = 0, m.length < b && m.push(t)
	}

	function f(t) {
		var e = t.cache;
		e && f(e), t.array = t.cache = t.criteria = t.object = t.number = t.string = t.value = null, g.length < b && g.push(t)
	}

	function h(t, e, n) {
		e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0);
		for (var r = -1, i = n - e || 0, o = Array(0 > i ? 0 : i); ++r < i;) o[r] = t[e + r];
		return o
	}

	function d(n) {
		function m(t) {
			return t && "object" == typeof t && !fi(t) && Yr.call(t, "__wrapped__") ? t : new g(t)
		}

		function g(t, e) {
			this.__chain__ = !! e, this.__wrapped__ = t
		}

		function b(t) {
			function e() {
				if (r) {
					var t = h(r);
					Ur.apply(t, arguments)
				}
				if (this instanceof e) {
					var o = ee(n.prototype),
						a = n.apply(o, t || arguments);
					return Ie(a) ? a : o
				}
				return n.apply(i, t || arguments)
			}
			var n = t[0],
				r = t[2],
				i = t[4];
			return ci(e, t), e
		}

		function K(t, e, n, r, i) {
			if (n) {
				var o = n(t);
				if ("undefined" != typeof o) return o
			}
			var a = Ie(t);
			if (!a) return t;
			var u = Ir.call(t);
			if (!X[u] || !ui.nodeClass && l(t)) return t;
			var f = ai[u];
			switch (u) {
				case L:
				case V:
					return new f(+t);
				case Y:
				case B:
					return new f(t);
				case W:
					return o = f(t.source, P.exec(t)), o.lastIndex = t.lastIndex, o
			}
			var d = fi(t);
			if (e) {
				var p = !r;
				r || (r = s()), i || (i = s());
				for (var m = r.length; m--;)
					if (r[m] == t) return i[m];
				o = d ? f(t.length) : {}
			} else o = d ? h(t) : wi({}, t);
			return d && (Yr.call(t, "index") && (o.index = t.index), Yr.call(t, "input") && (o.input = t.input)), e ? (r.push(t), i.push(o), (d ? bi : Si)(t, function(t, a) {
				o[a] = K(t, e, n, r, i)
			}), p && (c(r), c(i)), o) : o
		}

		function ee(t) {
			return Ie(t) ? Zr(t) : {}
		}

		function ne(t, e, n) {
			if ("function" != typeof t) return or;
			if ("undefined" == typeof e || !("prototype" in t)) return t;
			var r = t.__bindData__;
			if ("undefined" == typeof r && (ui.funcNames && (r = !t.name), r = r || !ui.funcDecomp, !r)) {
				var i = zr.call(t);
				ui.funcNames || (r = !O.test(i)), r || (r = M.test(i), ci(t, r))
			}
			if (r === !1 || r !== !0 && 1 & r[1]) return t;
			switch (n) {
				case 1:
					return function(n) {
						return t.call(e, n)
					};
				case 2:
					return function(n, r) {
						return t.call(e, n, r)
					};
				case 3:
					return function(n, r, i) {
						return t.call(e, n, r, i)
					};
				case 4:
					return function(n, r, i, o) {
						return t.call(e, n, r, i, o)
					}
			}
			return zn(t, e)
		}

		function re(t) {
			function e() {
				var t = u ? a : this;
				if (i) {
					var p = h(i);
					Ur.apply(p, arguments)
				}
				if ((o || c) && (p || (p = h(arguments)), o && Ur.apply(p, o), c && p.length < s)) return r |= 16, re([n, f ? r : -4 & r, p, null, a, s]);
				if (p || (p = arguments), l && (n = t[d]), this instanceof e) {
					t = ee(n.prototype);
					var m = n.apply(t, p);
					return Ie(m) ? m : t
				}
				return n.apply(t, p)
			}
			var n = t[0],
				r = t[1],
				i = t[2],
				o = t[3],
				a = t[4],
				s = t[5],
				u = 1 & r,
				l = 2 & r,
				c = 4 & r,
				f = 8 & r,
				d = n;
			return ci(e, t), e
		}

		function ie(n, r) {
			var i = -1,
				a = me(),
				s = n ? n.length : 0,
				u = s >= $ && a === t,
				l = [];
			if (u) {
				var c = o(r);
				c ? (a = e, r = c) : u = !1
			}
			for (; ++i < s;) {
				var h = n[i];
				a(r, h) < 0 && l.push(h)
			}
			return u && f(r), l
		}

		function ae(t, e, n, r) {
			for (var i = (r || 0) - 1, o = t ? t.length : 0, a = []; ++i < o;) {
				var s = t[i];
				if (s && "object" == typeof s && "number" == typeof s.length && (fi(s) || _e(s))) {
					e || (s = ae(s, e, n));
					var u = -1,
						l = s.length,
						c = a.length;
					for (a.length += l; ++u < l;) a[c++] = s[u]
				} else n || a.push(s)
			}
			return a
		}

		function se(t, e, n, r, i, o) {
			if (n) {
				var a = n(t, e);
				if ("undefined" != typeof a) return !!a
			}
			if (t === e) return 0 !== t || 1 / t == 1 / e;
			var u = typeof t,
				f = typeof e;
			if (!(t !== t || t && J[u] || e && J[f])) return !1;
			if (null == t || null == e) return t === e;
			var h = Ir.call(t),
				d = Ir.call(e);
			if (h == q && (h = U), d == q && (d = U), h != d) return !1;
			switch (h) {
				case L:
				case V:
					return +t == +e;
				case Y:
					return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
				case W:
				case B:
					return t == Ar(e)
			}
			var p = h == F;
			if (!p) {
				var m = Yr.call(t, "__wrapped__"),
					g = Yr.call(e, "__wrapped__");
				if (m || g) return se(m ? t.__wrapped__ : t, g ? e.__wrapped__ : e, n, r, i, o);
				if (h != U || !ui.nodeClass && (l(t) || l(e))) return !1;
				var v = !ui.argsObject && _e(t) ? Pr : t.constructor,
					y = !ui.argsObject && _e(e) ? Pr : e.constructor;
				if (v != y && !(Re(v) && v instanceof v && Re(y) && y instanceof y) && "constructor" in t && "constructor" in e) return !1
			}
			var _ = !i;
			i || (i = s()), o || (o = s());
			for (var $ = i.length; $--;)
				if (i[$] == t) return o[$] == e;
			var b = 0;
			if (a = !0, i.push(t), o.push(e), p) {
				if ($ = t.length, b = e.length, a = b == $, a || r)
					for (; b--;) {
						var w = $,
							x = e[b];
						if (r)
							for (; w-- && !(a = se(t[w], x, n, r, i, o)););
						else if (!(a = se(t[b], x, n, r, i, o))) break
					}
			} else Ti(e, function(e, s, u) {
				return Yr.call(u, s) ? (b++, a = Yr.call(t, s) && se(t[s], e, n, r, i, o)) : void 0
			}), a && !r && Ti(t, function(t, e, n) {
				return Yr.call(n, e) ? a = --b > -1 : void 0
			});
			return i.pop(), o.pop(), _ && (c(i), c(o)), a
		}

		function ue(t, e, n, r, i) {
			(fi(e) ? rn : Si)(e, function(e, o) {
				var a, s, u = e,
					l = t[o];
				if (e && ((s = fi(e)) || Ci(e))) {
					for (var c = r.length; c--;)
						if (a = r[c] == e) {
							l = i[c];
							break
						}
					if (!a) {
						var f;
						n && (u = n(l, e), (f = "undefined" != typeof u) && (l = u)), f || (l = s ? fi(l) ? l : [] : Ci(l) ? l : {}), r.push(e), i.push(l), f || ue(l, e, n, r, i)
					}
				} else n && (u = n(l, e), "undefined" == typeof u && (u = e)), "undefined" != typeof u && (l = u);
				t[o] = l
			})
		}

		function le(t, e) {
			return t + Vr(oi() * (e - t + 1))
		}

		function ce(n, r, i) {
			var a = -1,
				u = me(),
				l = n ? n.length : 0,
				h = [],
				d = !r && l >= $ && u === t,
				p = i || d ? s() : h;
			if (d) {
				var m = o(p);
				u = e, p = m
			}
			for (; ++a < l;) {
				var g = n[a],
					v = i ? i(g, a, n) : g;
				(r ? !a || p[p.length - 1] !== v : u(p, v) < 0) && ((i || d) && p.push(v), h.push(g))
			}
			return d ? (c(p.array), f(p)) : i && c(p), h
		}

		function fe(t) {
			return function(e, n, r) {
				var i = {};
				if (n = m.createCallback(n, r, 3), fi(e))
					for (var o = -1, a = e.length; ++o < a;) {
						var s = e[o];
						t(i, s, n(s, o, e), e)
					} else bi(e, function(e, r, o) {
						t(i, e, n(e, r, o), o)
					});
				return i
			}
		}

		function he(t, e, n, r, i, o) {
			var a = 1 & e,
				s = 2 & e,
				u = 4 & e,
				l = 16 & e,
				c = 32 & e;
			if (!s && !Re(t)) throw new Er;
			l && !n.length && (e &= -17, l = n = !1), c && !r.length && (e &= -33, c = r = !1);
			var f = t && t.__bindData__;
			if (f && f !== !0) return f = h(f), f[2] && (f[2] = h(f[2])), f[3] && (f[3] = h(f[3])), !a || 1 & f[1] || (f[4] = i), !a && 1 & f[1] && (e |= 8), !u || 4 & f[1] || (f[5] = o), l && Ur.apply(f[2] || (f[2] = []), n), c && Qr.apply(f[3] || (f[3] = []), r), f[1] |= e, he.apply(null, f);
			var d = 1 == e || 17 === e ? b : re;
			return d([t, e, n, r, i, o])
		}

		function de() {
			Z.shadowedProps = R, Z.array = Z.bottom = Z.loop = Z.top = "", Z.init = "iterable", Z.useHas = !0;
			for (var t, e = 0; t = arguments[e]; e++)
				for (var n in t) Z[n] = t[n];
			var r = Z.args;
			Z.firstArg = /^[^,]+/.exec(r)[0];
			var i = Sr("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + r + ") {\n" + li(Z) + "\n}");
			return i(ne, z, Mr, Yr, y, _e, fi, ze, Z.keys, jr, J, si, B, Nr, Ir)
		}

		function pe(t) {
			return vi[t]
		}

		function me() {
			var e = (e = m.indexOf) === Sn ? t : e;
			return e
		}

		function ge(t) {
			return "function" == typeof t && qr.test(t)
		}

		function ve(t) {
			var e, n;
			return !t || Ir.call(t) != U || (e = t.constructor, Re(e) && !(e instanceof e)) || !ui.argsClass && _e(t) || !ui.nodeClass && l(t) ? !1 : ui.ownLast ? (Ti(t, function(t, e, r) {
				return n = Yr.call(r, e), !1
			}), n !== !1) : (Ti(t, function(t, e) {
				n = e
			}), "undefined" == typeof n || Yr.call(t, n))
		}

		function ye(t) {
			return yi[t]
		}

		function _e(t) {
			return t && "object" == typeof t && "number" == typeof t.length && Ir.call(t) == q || !1
		}

		function $e(t, e, n, r) {
			return "boolean" != typeof e && null != e && (r = n, n = e, e = !1), K(t, e, "function" == typeof n && ne(n, r, 1))
		}

		function be(t, e, n) {
			return K(t, !0, "function" == typeof e && ne(e, n, 1))
		}

		function we(t, e) {
			var n = ee(t);
			return e ? wi(n, e) : n
		}

		function xe(t, e, n) {
			var r;
			return e = m.createCallback(e, n, 3), Si(t, function(t, n, i) {
				return e(t, n, i) ? (r = n, !1) : void 0
			}), r
		}

		function Te(t, e, n) {
			var r;
			return e = m.createCallback(e, n, 3), Ce(t, function(t, n, i) {
				return e(t, n, i) ? (r = n, !1) : void 0
			}), r
		}

		function Se(t, e, n) {
			var r = [];
			Ti(t, function(t, e) {
				r.push(e, t)
			});
			var i = r.length;
			for (e = ne(e, n, 3); i-- && e(r[i--], r[i], t) !== !1;);
			return t
		}

		function Ce(t, e, n) {
			var r = di(t),
				i = r.length;
			for (e = ne(e, n, 3); i--;) {
				var o = r[i];
				if (e(t[o], o, t) === !1) break
			}
			return t
		}

		function ke(t) {
			var e = [];
			return Ti(t, function(t, n) {
				Re(t) && e.push(n)
			}), e.sort()
		}

		function Pe(t, e) {
			return t ? Yr.call(t, e) : !1
		}

		function Oe(t) {
			for (var e = -1, n = di(t), r = n.length, i = {}; ++e < r;) {
				var o = n[e];
				i[t[o]] = o
			}
			return i
		}

		function Ae(t) {
			return t === !0 || t === !1 || t && "object" == typeof t && Ir.call(t) == L || !1
		}

		function Ee(t) {
			return t && "object" == typeof t && Ir.call(t) == V || !1
		}

		function De(t) {
			return t && 1 === t.nodeType || !1
		}

		function Me(t) {
			var e = !0;
			if (!t) return e;
			var n = Ir.call(t),
				r = t.length;
			return n == F || n == B || (ui.argsClass ? n == q : _e(t)) || n == U && "number" == typeof r && Re(t.splice) ? !r : (Si(t, function() {
				return e = !1
			}), e)
		}

		function je(t, e, n, r) {
			return se(t, e, "function" == typeof n && ne(n, r, 2))
		}

		function Ne(t) {
			return Kr(t) && !ti(parseFloat(t))
		}

		function Re(t) {
			return "function" == typeof t
		}

		function Ie(t) {
			return !(!t || !J[typeof t])
		}

		function qe(t) {
			return Le(t) && t != +t
		}

		function Fe(t) {
			return null === t
		}

		function Le(t) {
			return "number" == typeof t || t && "object" == typeof t && Ir.call(t) == Y || !1
		}

		function Ve(t) {
			return t && J[typeof t] && Ir.call(t) == W || !1
		}

		function ze(t) {
			return "string" == typeof t || t && "object" == typeof t && Ir.call(t) == B || !1
		}

		function He(t) {
			return "undefined" == typeof t
		}

		function Ye(t, e, n) {
			var r = {};
			return e = m.createCallback(e, n, 3), Si(t, function(t, n, i) {
				r[n] = e(t, n, i)
			}), r
		}

		function Ue(t) {
			var e = arguments,
				n = 2;
			if (!Ie(t)) return t;
			if ("number" != typeof e[2] && (n = e.length), n > 3 && "function" == typeof e[n - 2]) var r = ne(e[--n - 1], e[n--], 2);
			else n > 2 && "function" == typeof e[n - 1] && (r = e[--n]);
			for (var i = h(arguments, 1, n), o = -1, a = s(), u = s(); ++o < n;) ue(t, i[o], r, a, u);
			return c(a), c(u), t
		}

		function We(t, e, n) {
			var r = {};
			if ("function" != typeof e) {
				var i = [];
				Ti(t, function(t, e) {
					i.push(e)
				}), i = ie(i, ae(arguments, !0, !1, 1));
				for (var o = -1, a = i.length; ++o < a;) {
					var s = i[o];
					r[s] = t[s]
				}
			} else e = m.createCallback(e, n, 3), Ti(t, function(t, n, i) {
				e(t, n, i) || (r[n] = t)
			});
			return r
		}

		function Be(t) {
			for (var e = -1, n = di(t), r = n.length, i = br(r); ++e < r;) {
				var o = n[e];
				i[e] = [o, t[o]]
			}
			return i
		}

		function Xe(t, e, n) {
			var r = {};
			if ("function" != typeof e)
				for (var i = -1, o = ae(arguments, !0, !1, 1), a = Ie(t) ? o.length : 0; ++i < a;) {
					var s = o[i];
					s in t && (r[s] = t[s])
				} else e = m.createCallback(e, n, 3), Ti(t, function(t, n, i) {
					e(t, n, i) && (r[n] = t)
				});
			return r
		}

		function Qe(t, e, n, r) {
			var i = fi(t);
			if (null == n)
				if (i) n = [];
				else {
					var o = t && t.constructor,
						a = o && o.prototype;
					n = ee(a)
				}
			return e && (e = m.createCallback(e, r, 4), (i ? bi : Si)(t, function(t, r, i) {
				return e(n, t, r, i)
			})), n
		}

		function Ge(t) {
			for (var e = -1, n = di(t), r = n.length, i = br(r); ++e < r;) i[e] = t[n[e]];
			return i
		}

		function Ze(t) {
			var e = arguments,
				n = -1,
				r = ae(e, !0, !1, 1),
				i = e[2] && e[2][e[1]] === t ? 1 : r.length,
				o = br(i);
			for (ui.unindexedChars && ze(t) && (t = t.split("")); ++n < i;) o[n] = t[r[n]];
			return o
		}

		function Je(t, e, n) {
			var r = -1,
				i = me(),
				o = t ? t.length : 0,
				a = !1;
			return n = (0 > n ? ni(0, o + n) : n) || 0, fi(t) ? a = i(t, e, n) > -1 : "number" == typeof o ? a = (ze(t) ? t.indexOf(e, n) : i(t, e, n)) > -1 : bi(t, function(t) {
				return ++r >= n ? !(a = t === e) : void 0
			}), a
		}

		function Ke(t, e, n) {
			var r = !0;
			if (e = m.createCallback(e, n, 3), fi(t))
				for (var i = -1, o = t.length; ++i < o && (r = !! e(t[i], i, t)););
			else bi(t, function(t, n, i) {
				return r = !! e(t, n, i)
			});
			return r
		}

		function tn(t, e, n) {
			var r = [];
			if (e = m.createCallback(e, n, 3), fi(t))
				for (var i = -1, o = t.length; ++i < o;) {
					var a = t[i];
					e(a, i, t) && r.push(a)
				} else bi(t, function(t, n, i) {
					e(t, n, i) && r.push(t)
				});
			return r
		}

		function en(t, e, n) {
			if (e = m.createCallback(e, n, 3), !fi(t)) {
				var r;
				return bi(t, function(t, n, i) {
					return e(t, n, i) ? (r = t, !1) : void 0
				}), r
			}
			for (var i = -1, o = t.length; ++i < o;) {
				var a = t[i];
				if (e(a, i, t)) return a
			}
		}

		function nn(t, e, n) {
			var r;
			return e = m.createCallback(e, n, 3), on(t, function(t, n, i) {
				return e(t, n, i) ? (r = t, !1) : void 0
			}), r
		}

		function rn(t, e, n) {
			if (e && "undefined" == typeof n && fi(t))
				for (var r = -1, i = t.length; ++r < i && e(t[r], r, t) !== !1;);
			else bi(t, e, n);
			return t
		}

		function on(t, e, n) {
			var r = t,
				i = t ? t.length : 0;
			if (e = e && "undefined" == typeof n ? e : ne(e, n, 3), fi(t))
				for (; i-- && e(t[i], i, t) !== !1;);
			else {
				if ("number" != typeof i) {
					var o = di(t);
					i = o.length
				} else ui.unindexedChars && ze(t) && (r = t.split(""));
				bi(t, function(t, n, a) {
					return n = o ? o[--i] : --i, e(r[n], n, a)
				})
			}
			return t
		}

		function an(t, e) {
			var n = h(arguments, 2),
				r = -1,
				i = "function" == typeof e,
				o = t ? t.length : 0,
				a = br("number" == typeof o ? o : 0);
			return rn(t, function(t) {
				a[++r] = (i ? e : t[e]).apply(t, n)
			}), a
		}

		function sn(t, e, n) {
			var r = -1,
				i = t ? t.length : 0,
				o = br("number" == typeof i ? i : 0);
			if (e = m.createCallback(e, n, 3), fi(t))
				for (; ++r < i;) o[r] = e(t[r], r, t);
			else bi(t, function(t, n, i) {
				o[++r] = e(t, n, i)
			});
			return o
		}

		function un(t, e, n) {
			var i = -1 / 0,
				o = i;
			if ("function" != typeof e && n && n[e] === t && (e = null), null == e && fi(t))
				for (var a = -1, s = t.length; ++a < s;) {
					var u = t[a];
					u > o && (o = u)
				} else e = null == e && ze(t) ? r : m.createCallback(e, n, 3), bi(t, function(t, n, r) {
					var a = e(t, n, r);
					a > i && (i = a, o = t)
				});
			return o
		}

		function ln(t, e, n) {
			var i = 1 / 0,
				o = i;
			if ("function" != typeof e && n && n[e] === t && (e = null), null == e && fi(t))
				for (var a = -1, s = t.length; ++a < s;) {
					var u = t[a];
					o > u && (o = u)
				} else e = null == e && ze(t) ? r : m.createCallback(e, n, 3), bi(t, function(t, n, r) {
					var a = e(t, n, r);
					i > a && (i = a, o = t)
				});
			return o
		}

		function cn(t, e, n, r) {
			var i = arguments.length < 3;
			if (e = m.createCallback(e, r, 4), fi(t)) {
				var o = -1,
					a = t.length;
				for (i && (n = t[++o]); ++o < a;) n = e(n, t[o], o, t)
			} else bi(t, function(t, r, o) {
				n = i ? (i = !1, t) : e(n, t, r, o)
			});
			return n
		}

		function fn(t, e, n, r) {
			var i = arguments.length < 3;
			return e = m.createCallback(e, r, 4), on(t, function(t, r, o) {
				n = i ? (i = !1, t) : e(n, t, r, o)
			}), n
		}

		function hn(t, e, n) {
			return e = m.createCallback(e, n, 3), tn(t, function(t, n, r) {
				return !e(t, n, r)
			})
		}

		function dn(t, e, n) {
			if (t && "number" != typeof t.length ? t = Ge(t) : ui.unindexedChars && ze(t) && (t = t.split("")), null == e || n) return t ? t[le(0, t.length - 1)] : p;
			var r = pn(t);
			return r.length = ri(ni(0, e), r.length), r
		}

		function pn(t) {
			var e = -1,
				n = t ? t.length : 0,
				r = br("number" == typeof n ? n : 0);
			return rn(t, function(t) {
				var n = le(0, ++e);
				r[e] = r[n], r[n] = t
			}), r
		}

		function mn(t) {
			var e = t ? t.length : 0;
			return "number" == typeof e ? e : di(t).length
		}

		function gn(t, e, n) {
			var r;
			if (e = m.createCallback(e, n, 3), fi(t))
				for (var i = -1, o = t.length; ++i < o && !(r = e(t[i], i, t)););
			else bi(t, function(t, n, i) {
				return !(r = e(t, n, i))
			});
			return !!r
		}

		function vn(t, e, n) {
			var r = -1,
				o = fi(e),
				a = t ? t.length : 0,
				l = br("number" == typeof a ? a : 0);
			for (o || (e = m.createCallback(e, n, 3)), rn(t, function(t, n, i) {
				var a = l[++r] = u();
				o ? a.criteria = sn(e, function(e) {
					return t[e]
				}) : (a.criteria = s())[0] = e(t, n, i), a.index = r, a.value = t
			}), a = l.length, l.sort(i); a--;) {
				var h = l[a];
				l[a] = h.value, o || c(h.criteria), f(h)
			}
			return l
		}

		function yn(t) {
			return t && "number" == typeof t.length ? ui.unindexedChars && ze(t) ? t.split("") : h(t) : Ge(t)
		}

		function _n(t) {
			for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
				var i = t[e];
				i && r.push(i)
			}
			return r
		}

		function $n(t) {
			return ie(t, ae(arguments, !0, !0, 1))
		}

		function bn(t, e, n) {
			var r = -1,
				i = t ? t.length : 0;
			for (e = m.createCallback(e, n, 3); ++r < i;)
				if (e(t[r], r, t)) return r;
			return -1
		}

		function wn(t, e, n) {
			var r = t ? t.length : 0;
			for (e = m.createCallback(e, n, 3); r--;)
				if (e(t[r], r, t)) return r;
			return -1
		}

		function xn(t, e, n) {
			var r = 0,
				i = t ? t.length : 0;
			if ("number" != typeof e && null != e) {
				var o = -1;
				for (e = m.createCallback(e, n, 3); ++o < i && e(t[o], o, t);) r++
			} else if (r = e, null == r || n) return t ? t[0] : p;
			return h(t, 0, ri(ni(0, r), i))
		}

		function Tn(t, e, n, r) {
			return "boolean" != typeof e && null != e && (r = n, n = "function" != typeof e && r && r[e] === t ? null : e, e = !1), null != n && (t = sn(t, n, r)), ae(t, e)
		}

		function Sn(e, n, r) {
			if ("number" == typeof r) {
				var i = e ? e.length : 0;
				r = 0 > r ? ni(0, i + r) : r || 0
			} else if (r) {
				var o = jn(e, n);
				return e[o] === n ? o : -1
			}
			return t(e, n, r)
		}

		function Cn(t, e, n) {
			var r = 0,
				i = t ? t.length : 0;
			if ("number" != typeof e && null != e) {
				var o = i;
				for (e = m.createCallback(e, n, 3); o-- && e(t[o], o, t);) r++
			} else r = null == e || n ? 1 : e || r;
			return h(t, 0, ri(ni(0, i - r), i))
		}

		function kn() {
			for (var n = [], r = -1, i = arguments.length, a = s(), u = me(), l = u === t, h = s(); ++r < i;) {
				var d = arguments[r];
				(fi(d) || _e(d)) && (n.push(d), a.push(l && d.length >= $ && o(r ? n[r] : h)))
			}
			var p = n[0],
				m = -1,
				g = p ? p.length : 0,
				v = [];
			t: for (; ++m < g;) {
				var y = a[0];
				if (d = p[m], (y ? e(y, d) : u(h, d)) < 0) {
					for (r = i, (y || h).push(d); --r;)
						if (y = a[r], (y ? e(y, d) : u(n[r], d)) < 0) continue t;
					v.push(d)
				}
			}
			for (; i--;) y = a[i], y && f(y);
			return c(a), c(h), v
		}

		function Pn(t, e, n) {
			var r = 0,
				i = t ? t.length : 0;
			if ("number" != typeof e && null != e) {
				var o = i;
				for (e = m.createCallback(e, n, 3); o-- && e(t[o], o, t);) r++
			} else if (r = e, null == r || n) return t ? t[i - 1] : p;
			return h(t, ni(0, i - r))
		}

		function On(t, e, n) {
			var r = t ? t.length : 0;
			for ("number" == typeof n && (r = (0 > n ? ni(0, r + n) : ri(n, r - 1)) + 1); r--;)
				if (t[r] === e) return r;
			return -1
		}

		function An(t) {
			for (var e = arguments, n = 0, r = e.length, i = t ? t.length : 0; ++n < r;)
				for (var o = -1, a = e[n]; ++o < i;) t[o] === a && (Xr.call(t, o--, 1), i--);
			return t
		}

		function En(t, e, n) {
			t = +t || 0, n = "number" == typeof n ? n : +n || 1, null == e && (e = t, t = 0);
			for (var r = -1, i = ni(0, Fr((e - t) / (n || 1))), o = br(i); ++r < i;) o[r] = t, t += n;
			return o
		}

		function Dn(t, e, n) {
			var r = -1,
				i = t ? t.length : 0,
				o = [];
			for (e = m.createCallback(e, n, 3); ++r < i;) {
				var a = t[r];
				e(a, r, t) && (o.push(a), Xr.call(t, r--, 1), i--)
			}
			return o
		}

		function Mn(t, e, n) {
			if ("number" != typeof e && null != e) {
				var r = 0,
					i = -1,
					o = t ? t.length : 0;
				for (e = m.createCallback(e, n, 3); ++i < o && e(t[i], i, t);) r++
			} else r = null == e || n ? 1 : ni(0, e);
			return h(t, r)
		}

		function jn(t, e, n, r) {
			var i = 0,
				o = t ? t.length : i;
			for (n = n ? m.createCallback(n, r, 1) : or, e = n(e); o > i;) {
				var a = i + o >>> 1;
				n(t[a]) < e ? i = a + 1 : o = a
			}
			return i
		}

		function Nn() {
			return ce(ae(arguments, !0, !0))
		}

		function Rn(t, e, n, r) {
			return "boolean" != typeof e && null != e && (r = n, n = "function" != typeof e && r && r[e] === t ? null : e, e = !1), null != n && (n = m.createCallback(n, r, 3)), ce(t, e, n)
		}

		function In(t) {
			return ie(t, h(arguments, 1))
		}

		function qn() {
			for (var t = -1, e = arguments.length; ++t < e;) {
				var n = arguments[t];
				if (fi(n) || _e(n)) var r = r ? ce(ie(r, n).concat(ie(n, r))) : n
			}
			return r || []
		}

		function Fn() {
			for (var t = arguments.length > 1 ? arguments : arguments[0], e = -1, n = t ? un(Ai(t, "length")) : 0, r = br(0 > n ? 0 : n); ++e < n;) r[e] = Ai(t, e);
			return r
		}

		function Ln(t, e) {
			var n = -1,
				r = t ? t.length : 0,
				i = {};
			for (e || !r || fi(t[0]) || (e = []); ++n < r;) {
				var o = t[n];
				e ? i[o] = e[n] : o && (i[o[0]] = o[1])
			}
			return i
		}

		function Vn(t, e) {
			if (!Re(e)) throw new Er;
			return function() {
				return --t < 1 ? e.apply(this, arguments) : void 0
			}
		}

		function zn(t, e) {
			return arguments.length > 2 ? he(t, 17, h(arguments, 2), null, e) : he(t, 1, null, null, e)
		}

		function Hn(t) {
			for (var e = arguments.length > 1 ? ae(arguments, !0, !1, 1) : ke(t), n = -1, r = e.length; ++n < r;) {
				var i = e[n];
				t[i] = he(t[i], 1, null, null, t)
			}
			return t
		}

		function Yn(t, e) {
			return arguments.length > 2 ? he(e, 19, h(arguments, 2), null, t) : he(e, 3, null, null, t)
		}

		function Un() {
			for (var t = arguments, e = t.length; e--;)
				if (!Re(t[e])) throw new Er;
			return function() {
				for (var e = arguments, n = t.length; n--;) e = [t[n].apply(this, e)];
				return e[0]
			}
		}

		function Wn(t, e) {
			return e = "number" == typeof e ? e : +e || t.length, he(t, 4, null, null, null, e)
		}

		function Bn(t, e, n) {
			var r, i, o, a, s, u, l, c = 0,
				f = !1,
				h = !0;
			if (!Re(t)) throw new Er;
			if (e = ni(0, e) || 0, n === !0) {
				var d = !0;
				h = !1
			} else Ie(n) && (d = n.leading, f = "maxWait" in n && (ni(e, n.maxWait) || 0), h = "trailing" in n ? n.trailing : h);
			var m = function() {
				var n = e - (Di() - a);
				if (0 >= n) {
					i && Lr(i);
					var f = l;
					i = u = l = p, f && (c = Di(), o = t.apply(s, r), u || i || (r = s = null))
				} else u = Br(m, n)
			}, g = function() {
					u && Lr(u), i = u = l = p, (h || f !== e) && (c = Di(), o = t.apply(s, r), u || i || (r = s = null))
				};
			return function() {
				if (r = arguments, a = Di(), s = this, l = h && (u || !d), f === !1) var n = d && !u;
				else {
					i || d || (c = a);
					var p = f - (a - c),
						v = 0 >= p;
					v ? (i && (i = Lr(i)), c = a, o = t.apply(s, r)) : i || (i = Br(g, p))
				}
				return v && u ? u = Lr(u) : u || e === f || (u = Br(m, e)), n && (v = !0, o = t.apply(s, r)), !v || u || i || (r = s = null), o
			}
		}

		function Xn(t) {
			if (!Re(t)) throw new Er;
			var e = h(arguments, 1);
			return Br(function() {
				t.apply(p, e)
			}, 1)
		}

		function Qn(t, e) {
			if (!Re(t)) throw new Er;
			var n = h(arguments, 2);
			return Br(function() {
				t.apply(p, n)
			}, e)
		}

		function Gn(t, e) {
			if (!Re(t)) throw new Er;
			var n = function() {
				var r = n.cache,
					i = e ? e.apply(this, arguments) : _ + arguments[0];
				return Yr.call(r, i) ? r[i] : r[i] = t.apply(this, arguments)
			};
			return n.cache = {}, n
		}

		function Zn(t) {
			var e, n;
			if (!Re(t)) throw new Er;
			return function() {
				return e ? n : (e = !0, n = t.apply(this, arguments), t = null, n)
			}
		}

		function Jn(t) {
			return he(t, 16, h(arguments, 1))
		}

		function Kn(t) {
			return he(t, 32, null, h(arguments, 1))
		}

		function tr(t, e, n) {
			var r = !0,
				i = !0;
			if (!Re(t)) throw new Er;
			return n === !1 ? r = !1 : Ie(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), Q.leading = r, Q.maxWait = e, Q.trailing = i, Bn(t, e, Q)
		}

		function er(t, e) {
			return he(e, 16, [t])
		}

		function nr(t) {
			return function() {
				return t
			}
		}

		function rr(t, e, n) {
			var r = typeof t;
			if (null == t || "function" == r) return ne(t, e, n);
			if ("object" != r) return lr(t);
			var i = di(t),
				o = i[0],
				a = t[o];
			return 1 != i.length || a !== a || Ie(a) ? function(e) {
				for (var n = i.length, r = !1; n-- && (r = se(e[i[n]], t[i[n]], null, !0)););
				return r
			} : function(t) {
				var e = t[o];
				return a === e && (0 !== a || 1 / a == 1 / e)
			}
		}

		function ir(t) {
			return null == t ? "" : Ar(t).replace($i, pe)
		}

		function or(t) {
			return t
		}

		function ar(t, e, n) {
			var r = !0,
				i = e && ke(e);
			e && (n || i.length) || (null == n && (n = e), o = g, e = t, t = m, i = ke(e)), n === !1 ? r = !1 : Ie(n) && "chain" in n && (r = n.chain);
			var o = t,
				a = Re(o);
			rn(i, function(n) {
				var i = t[n] = e[n];
				a && (o.prototype[n] = function() {
					var e = this.__chain__,
						n = this.__wrapped__,
						a = [n];
					Ur.apply(a, arguments);
					var s = i.apply(t, a);
					if (r || e) {
						if (n === s && Ie(s)) return this;
						s = new o(s), s.__chain__ = e
					}
					return s
				})
			})
		}

		function sr() {
			return n._ = Rr, this
		}

		function ur() {}

		function lr(t) {
			return function(e) {
				return e[t]
			}
		}

		function cr(t, e, n) {
			var r = null == t,
				i = null == e;
			if (null == n && ("boolean" == typeof t && i ? (n = t, t = 1) : i || "boolean" != typeof e || (n = e, i = !0)), r && i && (e = 1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
				var o = oi();
				return ri(t + o * (e - t + parseFloat("1e-" + ((o + "").length - 1))), e)
			}
			return le(t, e)
		}

		function fr(t, e) {
			if (t) {
				var n = t[e];
				return Re(n) ? t[e]() : n
			}
		}

		function hr(t, e, n) {
			var r = m.templateSettings;
			t = Ar(t || ""), n = xi({}, n, r);
			var i, o = xi({}, n.imports, r.imports),
				s = di(o),
				u = Ge(o),
				l = 0,
				c = n.interpolate || D,
				f = "__p += '",
				h = Or((n.escape || D).source + "|" + c.source + "|" + (c === A ? C : D).source + "|" + (n.evaluate || D).source + "|$", "g");
			t.replace(h, function(e, n, r, o, s, u) {
				return r || (r = o), f += t.slice(l, u).replace(j, a), n && (f += "' +\n__e(" + n + ") +\n'"), s && (i = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + e.length, e
			}), f += "';\n";
			var d = n.variable,
				g = d;
			g || (d = "obj", f = "with (" + d + ") {\n" + f + "\n}\n"), f = (i ? f.replace(x, "") : f).replace(T, "$1").replace(S, "$1;"), f = "function(" + d + ") {\n" + (g ? "" : d + " || (" + d + " = {});\n") + "var __t, __p = '', __e = _.escape" + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
			var v = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + I+++"]") + "\n*/";
			try {
				var y = Sr(s, "return " + f + v).apply(p, u)
			} catch (_) {
				throw _.source = f, _
			}
			return e ? y(e) : (y.source = f, y)
		}

		function dr(t, e, n) {
			t = (t = +t) > -1 ? t : 0;
			var r = -1,
				i = br(t);
			for (e = ne(e, n, 1); ++r < t;) i[r] = e(r);
			return i
		}

		function pr(t) {
			return null == t ? "" : Ar(t).replace(_i, ye)
		}

		function mr(t) {
			var e = ++v;
			return Ar(null == t ? "" : t) + e
		}

		function gr(t) {
			return t = new g(t), t.__chain__ = !0, t
		}

		function vr(t, e) {
			return e(t), t
		}

		function yr() {
			return this.__chain__ = !0, this
		}

		function _r() {
			return Ar(this.__wrapped__)
		}

		function $r() {
			return this.__wrapped__
		}
		n = n ? oe.defaults(te.Object(), n, oe.pick(te, N)) : te;
		var br = n.Array,
			wr = n.Boolean,
			xr = n.Date,
			Tr = n.Error,
			Sr = n.Function,
			Cr = n.Math,
			kr = n.Number,
			Pr = n.Object,
			Or = n.RegExp,
			Ar = n.String,
			Er = n.TypeError,
			Dr = [],
			Mr = Tr.prototype,
			jr = Pr.prototype,
			Nr = Ar.prototype,
			Rr = n._,
			Ir = jr.toString,
			qr = Or("^" + Ar(Ir).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
			Fr = Cr.ceil,
			Lr = n.clearTimeout,
			Vr = Cr.floor,
			zr = Sr.prototype.toString,
			Hr = ge(Hr = Pr.getPrototypeOf) && Hr,
			Yr = jr.hasOwnProperty,
			Ur = Dr.push,
			Wr = jr.propertyIsEnumerable,
			Br = n.setTimeout,
			Xr = Dr.splice,
			Qr = Dr.unshift,
			Gr = function() {
				try {
					var t = {}, e = ge(e = Pr.defineProperty) && e,
						n = e(t, t, t) && e
				} catch (r) {}
				return n
			}(),
			Zr = ge(Zr = Pr.create) && Zr,
			Jr = ge(Jr = br.isArray) && Jr,
			Kr = n.isFinite,
			ti = n.isNaN,
			ei = ge(ei = Pr.keys) && ei,
			ni = Cr.max,
			ri = Cr.min,
			ii = n.parseInt,
			oi = Cr.random,
			ai = {};
		ai[F] = br, ai[L] = wr, ai[V] = xr, ai[H] = Sr, ai[U] = Pr, ai[Y] = kr, ai[W] = Or, ai[B] = Ar;
		var si = {};
		si[F] = si[V] = si[Y] = {
			constructor: !0,
			toLocaleString: !0,
			toString: !0,
			valueOf: !0
		}, si[L] = si[B] = {
			constructor: !0,
			toString: !0,
			valueOf: !0
		}, si[z] = si[H] = si[W] = {
			constructor: !0,
			toString: !0
		}, si[U] = {
			constructor: !0
		},
		function() {
			for (var t = R.length; t--;) {
				var e = R[t];
				for (var n in si) Yr.call(si, n) && !Yr.call(si[n], e) && (si[n][e] = !1)
			}
		}(), g.prototype = m.prototype;
		var ui = m.support = {};
		! function() {
			var t = function() {
				this.x = 1
			}, e = {
					0: 1,
					length: 1
				}, r = [];
			t.prototype = {
				valueOf: 1,
				y: 1
			};
			for (var i in new t) r.push(i);
			for (i in arguments);
			ui.argsClass = Ir.call(arguments) == q, ui.argsObject = arguments.constructor == Pr && !(arguments instanceof br), ui.enumErrorProps = Wr.call(Mr, "message") || Wr.call(Mr, "name"), ui.enumPrototypes = Wr.call(t, "prototype"), ui.funcDecomp = !ge(n.WinRTError) && M.test(d), ui.funcNames = "string" == typeof Sr.name, ui.nonEnumArgs = 0 != i, ui.nonEnumShadows = !/valueOf/.test(r), ui.ownLast = "x" != r[0], ui.spliceObjects = (Dr.splice.call(e, 0, 1), !e[0]), ui.unindexedChars = "x" [0] + Pr("x")[0] != "xx";
			try {
				ui.nodeClass = !(Ir.call(document) == U && !({
					toString: 0
				} + ""))
			} catch (o) {
				ui.nodeClass = !0
			}
		}(1), m.templateSettings = {
			escape: /<%-([\s\S]+?)%>/g,
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: A,
			variable: "",
			imports: {
				_: m
			}
		};
		var li = function(t) {
			var e = "var index, iterable = " + t.firstArg + ", result = " + t.init + ";\nif (!iterable) return result;\n" + t.top + ";";
			t.array ? (e += "\nvar length = iterable.length; index = -1;\nif (" + t.array + ") {  ", ui.unindexedChars && (e += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), e += "\n  while (++index < length) {\n    " + t.loop + ";\n  }\n}\nelse {  ") : ui.nonEnumArgs && (e += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + t.loop + ";\n    }\n  } else {  "), ui.enumPrototypes && (e += "\n  var skipProto = typeof iterable == 'function';\n  "), ui.enumErrorProps && (e += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
			var n = [];
			if (ui.enumPrototypes && n.push('!(skipProto && index == "prototype")'), ui.enumErrorProps && n.push('!(skipErrorProps && (index == "message" || index == "name"))'), t.useHas && t.keys) e += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", n.length && (e += "    if (" + n.join(" && ") + ") {\n  "), e += t.loop + ";    ", n.length && (e += "\n    }"), e += "\n  }  ";
			else if (e += "\n  for (index in iterable) {\n", t.useHas && n.push("hasOwnProperty.call(iterable, index)"), n.length && (e += "    if (" + n.join(" && ") + ") {\n  "), e += t.loop + ";    ", n.length && (e += "\n    }"), e += "\n  }    ", ui.nonEnumShadows) {
				for (e += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; 7 > k; k++) e += "\n    index = '" + t.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", t.useHas || (e += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), e += ") {\n      " + t.loop + ";\n    }      ";
				e += "\n  }    "
			}
			return (t.array || ui.nonEnumArgs) && (e += "\n}"), e += t.bottom + ";\nreturn result"
		};
		Zr || (ee = function() {
			function t() {}
			return function(e) {
				if (Ie(e)) {
					t.prototype = e;
					var r = new t;
					t.prototype = null
				}
				return r || n.Object()
			}
		}());
		var ci = Gr ? function(t, e) {
				G.value = e, Gr(t, "__bindData__", G)
			} : ur;
		ui.argsClass || (_e = function(t) {
			return t && "object" == typeof t && "number" == typeof t.length && Yr.call(t, "callee") && !Wr.call(t, "callee") || !1
		});
		var fi = Jr || function(t) {
				return t && "object" == typeof t && "number" == typeof t.length && Ir.call(t) == F || !1
			}, hi = de({
				args: "object",
				init: "[]",
				top: "if (!(objectTypes[typeof object])) return result",
				loop: "result.push(index)"
			}),
			di = ei ? function(t) {
				return Ie(t) ? ui.enumPrototypes && "function" == typeof t || ui.nonEnumArgs && t.length && _e(t) ? hi(t) : ei(t) : []
			} : hi,
			pi = {
				args: "collection, callback, thisArg",
				top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
				array: "typeof length == 'number'",
				keys: di,
				loop: "if (callback(iterable[index], index, collection) === false) return result"
			}, mi = {
				args: "object, source, guard",
				top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
				keys: di,
				loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
				bottom: "  }\n}"
			}, gi = {
				top: "if (!objectTypes[typeof iterable]) return result;\n" + pi.top,
				array: !1
			}, vi = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			}, yi = Oe(vi),
			_i = Or("(" + di(yi).join("|") + ")", "g"),
			$i = Or("[" + di(vi).join("") + "]", "g"),
			bi = de(pi),
			wi = de(mi, {
				top: mi.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
				loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
			}),
			xi = de(mi),
			Ti = de(pi, gi, {
				useHas: !1
			}),
			Si = de(pi, gi);
		Re(/x/) && (Re = function(t) {
			return "function" == typeof t && Ir.call(t) == H
		});
		var Ci = Hr ? function(t) {
				if (!t || Ir.call(t) != U || !ui.argsClass && _e(t)) return !1;
				var e = t.valueOf,
					n = ge(e) && (n = Hr(e)) && Hr(n);
				return n ? t == n || Hr(t) == n : ve(t)
			} : ve,
			ki = fe(function(t, e, n) {
				Yr.call(t, n) ? t[n]++ : t[n] = 1
			}),
			Pi = fe(function(t, e, n) {
				(Yr.call(t, n) ? t[n] : t[n] = []).push(e)
			}),
			Oi = fe(function(t, e, n) {
				t[n] = e
			}),
			Ai = sn,
			Ei = tn,
			Di = ge(Di = xr.now) && Di || function() {
				return (new xr).getTime()
			}, Mi = 8 == ii(w + "08") ? ii : function(t, e) {
				return ii(ze(t) ? t.replace(E, "") : t, e || 0)
			};
		return m.after = Vn, m.assign = wi, m.at = Ze, m.bind = zn, m.bindAll = Hn, m.bindKey = Yn, m.chain = gr, m.compact = _n, m.compose = Un, m.constant = nr, m.countBy = ki, m.create = we, m.createCallback = rr, m.curry = Wn, m.debounce = Bn, m.defaults = xi, m.defer = Xn, m.delay = Qn, m.difference = $n, m.filter = tn, m.flatten = Tn, m.forEach = rn, m.forEachRight = on, m.forIn = Ti, m.forInRight = Se, m.forOwn = Si, m.forOwnRight = Ce, m.functions = ke, m.groupBy = Pi, m.indexBy = Oi, m.initial = Cn, m.intersection = kn, m.invert = Oe, m.invoke = an, m.keys = di, m.map = sn, m.mapValues = Ye, m.max = un, m.memoize = Gn, m.merge = Ue, m.min = ln, m.omit = We, m.once = Zn, m.pairs = Be, m.partial = Jn, m.partialRight = Kn, m.pick = Xe, m.pluck = Ai, m.property = lr, m.pull = An, m.range = En, m.reject = hn, m.remove = Dn, m.rest = Mn, m.shuffle = pn, m.sortBy = vn, m.tap = vr, m.throttle = tr, m.times = dr, m.toArray = yn, m.transform = Qe, m.union = Nn, m.uniq = Rn, m.values = Ge, m.where = Ei, m.without = In, m.wrap = er, m.xor = qn, m.zip = Fn, m.zipObject = Ln, m.collect = sn, m.drop = Mn, m.each = rn, m.eachRight = on, m.extend = wi, m.methods = ke, m.object = Ln, m.select = tn, m.tail = Mn, m.unique = Rn, m.unzip = Fn, ar(m), m.clone = $e, m.cloneDeep = be, m.contains = Je, m.escape = ir, m.every = Ke, m.find = en, m.findIndex = bn, m.findKey = xe, m.findLast = nn, m.findLastIndex = wn, m.findLastKey = Te, m.has = Pe, m.identity = or, m.indexOf = Sn, m.isArguments = _e, m.isArray = fi, m.isBoolean = Ae, m.isDate = Ee, m.isElement = De, m.isEmpty = Me, m.isEqual = je, m.isFinite = Ne, m.isFunction = Re, m.isNaN = qe, m.isNull = Fe, m.isNumber = Le, m.isObject = Ie, m.isPlainObject = Ci, m.isRegExp = Ve, m.isString = ze, m.isUndefined = He, m.lastIndexOf = On, m.mixin = ar, m.noConflict = sr, m.noop = ur, m.now = Di, m.parseInt = Mi, m.random = cr, m.reduce = cn, m.reduceRight = fn, m.result = fr, m.runInContext = d, m.size = mn, m.some = gn, m.sortedIndex = jn, m.template = hr, m.unescape = pr, m.uniqueId = mr, m.all = Ke, m.any = gn, m.detect = en, m.findWhere = en, m.foldl = cn, m.foldr = fn, m.include = Je, m.inject = cn, ar(function() {
			var t = {};
			return Si(m, function(e, n) {
				m.prototype[n] || (t[n] = e)
			}), t
		}(), !1), m.first = xn, m.last = Pn, m.sample = dn, m.take = xn, m.head = xn, Si(m, function(t, e) {
			var n = "sample" !== e;
			m.prototype[e] || (m.prototype[e] = function(e, r) {
				var i = this.__chain__,
					o = t(this.__wrapped__, e, r);
				return i || null != e && (!r || n && "function" == typeof e) ? new g(o, i) : o
			})
		}), m.VERSION = "2.4.1", m.prototype.chain = yr, m.prototype.toString = _r, m.prototype.value = $r, m.prototype.valueOf = $r, bi(["join", "pop", "shift"], function(t) {
			var e = Dr[t];
			m.prototype[t] = function() {
				var t = this.__chain__,
					n = e.apply(this.__wrapped__, arguments);
				return t ? new g(n, t) : n
			}
		}), bi(["push", "reverse", "sort", "unshift"], function(t) {
			var e = Dr[t];
			m.prototype[t] = function() {
				return e.apply(this.__wrapped__, arguments), this
			}
		}), bi(["concat", "slice", "splice"], function(t) {
			var e = Dr[t];
			m.prototype[t] = function() {
				return new g(e.apply(this.__wrapped__, arguments), this.__chain__)
			}
		}), ui.spliceObjects || bi(["pop", "shift", "splice"], function(t) {
			var e = Dr[t],
				n = "splice" == t;
			m.prototype[t] = function() {
				var t = this.__chain__,
					r = this.__wrapped__,
					i = e.apply(r, arguments);
				return 0 === r.length && delete r[0], t || n ? new g(i, t) : i
			}
		}), m
	}
	var p, m = [],
		g = [],
		v = 0,
		y = {}, _ = +new Date + "",
		$ = 75,
		b = 40,
		w = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
		x = /\b__p \+= '';/g,
		T = /\b(__p \+=) '' \+/g,
		S = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
		C = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
		P = /\w*$/,
		O = /^\s*function[ \n\r\t]+\w/,
		A = /<%=([\s\S]+?)%>/g,
		E = RegExp("^[" + w + "]*0+(?=.$)"),
		D = /($^)/,
		M = /\bthis\b/,
		j = /['\n\r\t\u2028\u2029\\]/g,
		N = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
		R = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
		I = 0,
		q = "[object Arguments]",
		F = "[object Array]",
		L = "[object Boolean]",
		V = "[object Date]",
		z = "[object Error]",
		H = "[object Function]",
		Y = "[object Number]",
		U = "[object Object]",
		W = "[object RegExp]",
		B = "[object String]",
		X = {};
	X[H] = !1, X[q] = X[F] = X[L] = X[V] = X[Y] = X[U] = X[W] = X[B] = !0;
	var Q = {
		leading: !1,
		maxWait: 0,
		trailing: !1
	}, G = {
			configurable: !1,
			enumerable: !1,
			value: null,
			writable: !1
		}, Z = {
			args: "",
			array: null,
			bottom: "",
			firstArg: "",
			init: "",
			keys: null,
			loop: "",
			shadowedProps: null,
			support: null,
			top: "",
			useHas: !1
		}, J = {
			"boolean": !1,
			"function": !0,
			object: !0,
			number: !1,
			string: !1,
			undefined: !1
		}, K = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"	": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		}, te = J[typeof window] && window || this,
		ee = J[typeof exports] && exports && !exports.nodeType && exports,
		ne = J[typeof module] && module && !module.nodeType && module,
		re = ne && ne.exports === ee && ee,
		ie = J[typeof global] && global;
	!ie || ie.global !== ie && ie.window !== ie || (te = ie);
	var oe = d();
	"function" == typeof define && "object" == typeof define.amd && define.amd ? (te._ = oe, define(function() {
		return oe
	})) : ee && ne ? re ? (ne.exports = oe)._ = oe : ee._ = oe : te._ = oe
}.call(this);
var duScrollDefaultEasing = function(t) {
	"use strict";
	return .5 > t ? Math.pow(2 * t, 2) / 2 : 1 - Math.pow(2 * (1 - t), 2) / 2
};
angular.module("duScroll", ["duScroll.scrollspy", "duScroll.smoothScroll", "duScroll.scrollContainer", "duScroll.spyContext", "duScroll.scrollHelpers"]).value("duScrollDuration", 350).value("duScrollSpyWait", 100).value("duScrollGreedy", !1).value("duScrollOffset", 0).value("duScrollEasing", duScrollDefaultEasing), angular.module("duScroll.scrollHelpers", ["duScroll.requestAnimation"]).run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset",
	function(t, e, n, r, i, o, a) {
		"use strict";
		var s = {}, u = function(t) {
				return "undefined" != typeof HTMLDocument && t instanceof HTMLDocument || t.nodeType && t.nodeType === t.DOCUMENT_NODE
			}, l = function(t) {
				return "undefined" != typeof HTMLElement && t instanceof HTMLElement || t.nodeType && t.nodeType === t.ELEMENT_NODE
			}, c = function(t) {
				return l(t) || u(t) ? t : t[0]
			};
		s.duScrollTo = function(e, n, r) {
			var i;
			if (angular.isElement(e) ? i = this.duScrollToElement : angular.isDefined(r) && (i = this.duScrollToAnimated), i) return i.apply(this, arguments);
			var o = c(this);
			return u(o) ? t.scrollTo(e, n) : (o.scrollLeft = e, void(o.scrollTop = n))
		};
		var f, h;
		s.duScrollToAnimated = function(t, o, a, s) {
			a && !s && (s = i);
			var u = this.duScrollLeft(),
				l = this.duScrollTop(),
				c = Math.round(t - u),
				d = Math.round(o - l),
				p = null,
				m = this,
				g = "scroll mousedown mousewheel touchmove keydown",
				v = function(t) {
					(!t || t.which > 0) && (m.unbind(g, v), n(f), h.reject(), f = null)
				};
			if (f && v(), h = e.defer(), 0 === a || !c && !d) return 0 === a && m.duScrollTo(t, o), h.resolve(), h.promise;
			var y = function(t) {
				null === p && (p = t);
				var e = t - p,
					n = e >= a ? 1 : s(e / a);
				m.scrollTo(u + Math.ceil(c * n), l + Math.ceil(d * n)), 1 > n ? f = r(y) : (m.unbind(g, v), f = null, h.resolve())
			};
			return m.duScrollTo(u, l), m.bind(g, v), f = r(y), h.promise
		}, s.duScrollToElement = function(t, e, n, r) {
			var i = c(this);
			(!angular.isNumber(e) || isNaN(e)) && (e = a);
			var o = this.duScrollTop() + c(t).getBoundingClientRect().top - e;
			return l(i) && (o -= i.getBoundingClientRect().top), this.duScrollTo(0, o, n, r)
		}, s.duScrollLeft = function(e, n, r) {
			if (angular.isNumber(e)) return this.duScrollTo(e, this.duScrollTop(), n, r);
			var i = c(this);
			return u(i) ? t.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : i.scrollLeft
		}, s.duScrollTop = function(e, n, r) {
			if (angular.isNumber(e)) return this.duScrollTo(this.duScrollLeft(), e, n, r);
			var i = c(this);
			return u(i) ? t.scrollY || document.documentElement.scrollTop || document.body.scrollTop : i.scrollTop
		}, s.duScrollToElementAnimated = function(t, e, n, r) {
			return this.duScrollToElement(t, e, n || o, r)
		}, s.duScrollTopAnimated = function(t, e, n) {
			return this.duScrollTop(t, e || o, n)
		}, s.duScrollLeftAnimated = function(t, e, n) {
			return this.duScrollLeft(t, e || o, n)
		}, angular.forEach(s, function(t, e) {
			angular.element.prototype[e] = t;
			var n = e.replace(/^duScroll/, "scroll");
			angular.isUndefined(angular.element.prototype[n]) && (angular.element.prototype[n] = t)
		})
	}
]), angular.module("duScroll.polyfill", []).factory("polyfill", ["$window",
	function(t) {
		"use strict";
		var e = ["webkit", "moz", "o", "ms"];
		return function(n, r) {
			if (t[n]) return t[n];
			for (var i, o = n.substr(0, 1).toUpperCase() + n.substr(1), a = 0; a < e.length; a++)
				if (i = e[a] + o, t[i]) return t[i];
			return r
		}
	}
]), angular.module("duScroll.requestAnimation", ["duScroll.polyfill"]).factory("requestAnimation", ["polyfill", "$timeout",
	function(t, e) {
		"use strict";
		var n = 0,
			r = function(t) {
				var r = (new Date).getTime(),
					i = Math.max(0, 16 - (r - n)),
					o = e(function() {
						t(r + i)
					}, i);
				return n = r + i, o
			};
		return t("requestAnimationFrame", r)
	}
]).factory("cancelAnimation", ["polyfill", "$timeout",
	function(t, e) {
		"use strict";
		var n = function(t) {
			e.cancel(t)
		};
		return t("cancelAnimationFrame", n)
	}
]), angular.module("duScroll.spyAPI", ["duScroll.scrollContainerAPI"]).factory("spyAPI", ["$rootScope", "$timeout", "$window", "$document", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait",
	function(t, e, n, r, i, o, a) {
		"use strict";
		var s = function(i) {
			var s = !1,
				u = !1,
				l = function() {
					u = !1;
					var e, a = i.container,
						s = a[0],
						l = 0;
					"undefined" != typeof HTMLElement && s instanceof HTMLElement || s.nodeType && s.nodeType === s.ELEMENT_NODE ? (l = s.getBoundingClientRect().top, e = Math.round(s.scrollTop + s.clientHeight) >= s.scrollHeight) : e = Math.round(n.pageYOffset + n.innerHeight) >= r[0].body.scrollHeight;
					var c, f, h, d, p, m, g = e ? "bottom" : "top";
					for (d = i.spies, f = i.currentlyActive, h = void 0, c = 0; c < d.length; c++) p = d[c], m = p.getTargetPosition(), m && (e || m.top + p.offset - l < 20 && (o || -1 * m.top + l) < m.height) && (!h || h[g] < m[g]) && (h = {
						spy: p
					}, h[g] = m[g]);
					h && (h = h.spy), f === h || o && !h || (f && (f.$element.removeClass("active"), t.$broadcast("duScrollspy:becameInactive", f.$element)), h && (h.$element.addClass("active"), t.$broadcast("duScrollspy:becameActive", h.$element)), i.currentlyActive = h)
				};
			return a ? function() {
				s ? u = !0 : (l(), s = e(function() {
					s = !1, u && l()
				}, a, !1))
			} : l
		}, u = {}, l = function(t) {
				var e = t.$id,
					n = {
						spies: []
					};
				return n.handler = s(n), u[e] = n, t.$on("$destroy", function() {
					c(t)
				}), e
			}, c = function(t) {
				var e = t.$id,
					n = u[e],
					r = n.container;
				r && r.off("scroll", n.handler), delete u[e]
			}, f = l(t),
			h = function(t) {
				return u[t.$id] ? u[t.$id] : t.$parent ? h(t.$parent) : u[f]
			}, d = function(t) {
				var e, n, r = t.$scope;
				if (r) return h(r);
				for (n in u)
					if (e = u[n], -1 !== e.spies.indexOf(t)) return e
			}, p = function(t) {
				for (; t.parentNode;)
					if (t = t.parentNode, t === document) return !0;
				return !1
			}, m = function(t) {
				var e = d(t);
				e && (e.spies.push(t), e.container && p(e.container) || (e.container && e.container.off("scroll", e.handler), e.container = i.getContainer(t.$scope), e.container.on("scroll", e.handler).triggerHandler("scroll")))
			}, g = function(t) {
				var e = d(t);
				t === e.currentlyActive && (e.currentlyActive = null);
				var n = e.spies.indexOf(t); - 1 !== n && e.spies.splice(n, 1), t.$element = null
			};
		return {
			addSpy: m,
			removeSpy: g,
			createContext: l,
			destroyContext: c,
			getContextForScope: h
		}
	}
]), angular.module("duScroll.scrollContainerAPI", []).factory("scrollContainerAPI", ["$document",
	function(t) {
		"use strict";
		var e = {}, n = function(t, n) {
				var r = t.$id;
				return e[r] = n, r
			}, r = function(t) {
				return e[t.$id] ? t.$id : t.$parent ? r(t.$parent) : void 0
			}, i = function(n) {
				var i = r(n);
				return i ? e[i] : t
			}, o = function(t) {
				var n = r(t);
				n && delete e[n]
			};
		return {
			getContainerId: r,
			getContainer: i,
			setContainer: n,
			removeContainer: o
		}
	}
]), angular.module("duScroll.smoothScroll", ["duScroll.scrollHelpers", "duScroll.scrollContainerAPI"]).directive("duSmoothScroll", ["duScrollDuration", "duScrollOffset", "scrollContainerAPI",
	function(t, e, n) {
		"use strict";
		return {
			link: function(r, i, o) {
				i.on("click", function(i) {
					if (o.href && -1 !== o.href.indexOf("#")) {
						var a = document.getElementById(o.href.replace(/.*(?=#[^\s]+$)/, "").substring(1));
						if (a && a.getBoundingClientRect) {
							i.stopPropagation && i.stopPropagation(), i.preventDefault && i.preventDefault();
							var s = o.offset ? parseInt(o.offset, 10) : e,
								u = o.duration ? parseInt(o.duration, 10) : t,
								l = n.getContainer(r);
							l.duScrollToElement(angular.element(a), isNaN(s) ? 0 : s, isNaN(u) ? 0 : u)
						}
					}
				})
			}
		}
	}
]), angular.module("duScroll.spyContext", ["duScroll.spyAPI"]).directive("duSpyContext", ["spyAPI",
	function(t) {
		"use strict";
		return {
			restrict: "A",
			scope: !0,
			compile: function() {
				return {
					pre: function(e) {
						t.createContext(e)
					}
				}
			}
		}
	}
]), angular.module("duScroll.scrollContainer", ["duScroll.scrollContainerAPI"]).directive("duScrollContainer", ["scrollContainerAPI",
	function(t) {
		"use strict";
		return {
			restrict: "A",
			scope: !0,
			compile: function() {
				return {
					pre: function(e, n, r) {
						r.$observe("duScrollContainer", function(r) {
							angular.isString(r) && (r = document.getElementById(r)), r = angular.isElement(r) ? angular.element(r) : n, t.setContainer(e, r), e.$on("$destroy", function() {
								t.removeContainer(e)
							})
						})
					}
				}
			}
		}
	}
]), angular.module("duScroll.scrollspy", ["duScroll.spyAPI"]).directive("duScrollspy", ["spyAPI", "duScrollOffset", "$timeout", "$rootScope",
	function(t, e, n, r) {
		"use strict";
		var i = function(t, e, n, r) {
			angular.isElement(t) ? this.target = t : angular.isString(t) && (this.targetId = t), this.$scope = e, this.$element = n, this.offset = r
		};
		return i.prototype.getTargetElement = function() {
			return !this.target && this.targetId && (this.target = document.getElementById(this.targetId)), this.target
		}, i.prototype.getTargetPosition = function() {
			var t = this.getTargetElement();
			return t ? t.getBoundingClientRect() : void 0
		}, i.prototype.flushTargetCache = function() {
			this.targetId && (this.target = void 0)
		}, {
			link: function(o, a, s) {
				var u, l = s.ngHref || s.href;
				l && -1 !== l.indexOf("#") ? u = l.replace(/.*(?=#[^\s]+$)/, "").substring(1) : s.duScrollspy && (u = s.duScrollspy), u && n(function() {
					var n = new i(u, o, a, -(s.offset ? parseInt(s.offset, 10) : e));
					t.addSpy(n), o.$on("$destroy", function() {
						t.removeSpy(n)
					}), o.$on("$locationChangeSuccess", n.flushTargetCache.bind(n)), r.$on("$stateChangeSuccess", n.flushTargetCache.bind(n))
				}, 0, !1)
			}
		}
	}
]),
function(t) {
	t(["jquery"], function(t) {
		return function() {
			function e(t, e, n) {
				return p({
					type: $.error,
					iconClass: m().iconClasses.error,
					message: t,
					optionsOverride: n,
					title: e
				})
			}

			function n(e, n) {
				return e || (e = m()), v = t("#" + e.containerId), v.length ? v : (n && (v = f(e)), v)
			}

			function r(t, e, n) {
				return p({
					type: $.info,
					iconClass: m().iconClasses.info,
					message: t,
					optionsOverride: n,
					title: e
				})
			}

			function i(t) {
				y = t
			}

			function o(t, e, n) {
				return p({
					type: $.success,
					iconClass: m().iconClasses.success,
					message: t,
					optionsOverride: n,
					title: e
				})
			}

			function a(t, e, n) {
				return p({
					type: $.warning,
					iconClass: m().iconClasses.warning,
					message: t,
					optionsOverride: n,
					title: e
				})
			}

			function s(t) {
				var e = m();
				v || n(e), c(t, e) || l(e)
			}

			function u(e) {
				var r = m();
				return v || n(r), e && 0 === t(":focus", e).length ? void g(e) : void(v.children().length && v.remove())
			}

			function l(e) {
				for (var n = v.children(), r = n.length - 1; r >= 0; r--) c(t(n[r]), e)
			}

			function c(e, n) {
				return e && 0 === t(":focus", e).length ? (e[n.hideMethod]({
					duration: n.hideDuration,
					easing: n.hideEasing,
					complete: function() {
						g(e)
					}
				}), !0) : !1
			}

			function f(e) {
				return v = t("<div/>").attr("id", e.containerId).addClass(e.positionClass).attr("aria-live", "polite").attr("role", "alert"), v.appendTo(t(e.target)), v
			}

			function h() {
				return {
					tapToDismiss: !0,
					toastClass: "toast",
					containerId: "toast-container",
					debug: !1,
					showMethod: "fadeIn",
					showDuration: 300,
					showEasing: "swing",
					onShown: void 0,
					hideMethod: "fadeOut",
					hideDuration: 1e3,
					hideEasing: "swing",
					onHidden: void 0,
					extendedTimeOut: 1e3,
					iconClasses: {
						error: "toast-error",
						info: "toast-info",
						success: "toast-success",
						warning: "toast-warning"
					},
					iconClass: "toast-info",
					positionClass: "toast-top-right",
					timeOut: 5e3,
					titleClass: "toast-title",
					messageClass: "toast-message",
					target: "body",
					closeHtml: "<button>&times;</button>",
					newestOnTop: !0
				}
			}

			function d(t) {
				y && y(t)
			}

			function p(e) {
				function r(e) {
					return !t(":focus", l).length || e ? l[a.hideMethod]({
						duration: a.hideDuration,
						easing: a.hideEasing,
						complete: function() {
							g(l), a.onHidden && "hidden" !== p.state && a.onHidden(), p.state = "hidden", p.endTime = new Date, d(p)
						}
					}) : void 0
				}

				function i() {
					(a.timeOut > 0 || a.extendedTimeOut > 0) && (u = setTimeout(r, a.extendedTimeOut))
				}

				function o() {
					clearTimeout(u), l.stop(!0, !0)[a.showMethod]({
						duration: a.showDuration,
						easing: a.showEasing
					})
				}
				var a = m(),
					s = e.iconClass || a.iconClass;
				"undefined" != typeof e.optionsOverride && (a = t.extend(a, e.optionsOverride), s = e.optionsOverride.iconClass || s), _++, v = n(a, !0);
				var u = null,
					l = t("<div/>"),
					c = t("<div/>"),
					f = t("<div/>"),
					h = t(a.closeHtml),
					p = {
						toastId: _,
						state: "visible",
						startTime: new Date,
						options: a,
						map: e
					};
				return e.iconClass && l.addClass(a.toastClass).addClass(s), e.title && (c.append(e.title).addClass(a.titleClass), l.append(c)), e.message && (f.append(e.message).addClass(a.messageClass), l.append(f)), a.closeButton && (h.addClass("toast-close-button").attr("role", "button"), l.prepend(h)), l.hide(), a.newestOnTop ? v.prepend(l) : v.append(l), l[a.showMethod]({
					duration: a.showDuration,
					easing: a.showEasing,
					complete: a.onShown
				}), a.timeOut > 0 && (u = setTimeout(r, a.timeOut)), l.hover(o, i), !a.onclick && a.tapToDismiss && l.click(r), a.closeButton && h && h.click(function(t) {
					t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && t.cancelBubble !== !0 && (t.cancelBubble = !0), r(!0)
				}), a.onclick && l.click(function() {
					a.onclick(), r()
				}), d(p), a.debug && console && console.log(p), l
			}

			function m() {
				return t.extend({}, h(), b.options)
			}

			function g(t) {
				v || (v = n()), t.is(":visible") || (t.remove(), t = null, 0 === v.children().length && v.remove())
			}
			var v, y, _ = 0,
				$ = {
					error: "error",
					info: "info",
					success: "success",
					warning: "warning"
				}, b = {
					clear: s,
					remove: u,
					error: e,
					getContainer: n,
					info: r,
					options: {},
					subscribe: i,
					success: o,
					version: "2.0.3",
					warning: a
				};
			return b
		}()
	})
}("function" == typeof define && define.amd ? define : function(t, e) {
	"undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery)
});