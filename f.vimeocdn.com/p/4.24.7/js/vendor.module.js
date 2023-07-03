/* VimeoPlayer - v4.24.7 - 2023-06-29 - https://player.vimeo.com/NOTICE.txt */
const e = {
        MANIFEST: "manifest",
        SEGMENT: "segment"
    },
    t = {
        method: "GET",
        async: !0,
        retry: 0,
        throwHttpErrors: !0,
        headers: {},
        hooks: {
            beforeRequest: [],
            beforeRetry: [],
            afterResponse: []
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300
        },
        retryStatus: function(e) {
            return [408, 413, 429].includes(e) || e >= 500 && e < 600
        }
    };

function n(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function r(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e
}

function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(n), !0).forEach((function(t) {
            i(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function a(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function u(e) {
    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function c(e, t) {
    return (c = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function l() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
    } catch (fl) {
        return !1
    }
}

function h(e, t, n) {
    return (h = l() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && c(i, n.prototype), i
    }).apply(null, arguments)
}

function d(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return (d = function(e) {
        if (null === e || ! function(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return h(e, arguments, u(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), c(n, e)
    })(e)
}

function f(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function _(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function p(e) {
    return function(e) {
        if (Array.isArray(e)) return m(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }(e) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return m(e, void 0);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, void 0) : void 0
        }
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function v(e) {
    return e.filter((e, t, n) => n.indexOf(e) === t)
}

function g(e, t) {
    return e.reduce((e, n, r, i) => e.concat(t(n, r, i)), [])
}

function y(e) {
    return (t, ...n) => (n.forEach(n => {
        for (const r in n) {
            const i = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(t, r, Object.assign(i, e))
        }
    }), t)
}
const E = y({
        enumerable: !1,
        configurable: !0,
        writeable: !1
    }),
    S = y({
        enumerable: !1,
        configurable: !1,
        writeable: !1
    }),
    T = y({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    b = e => new Promise((t, n) => setTimeout(t, e));

function A(e) {
    e.substring(0, e.lastIndexOf("/") + 1)
}
const I = e => new Promise((t, n) => {
        const r = document.createElement("script");
        r.src = e, r.addEventListener("load", t), r.addEventListener("error", e => n(e.error)), document.head.appendChild(r)
    }),
    w = e => Math.pow(e, 2),
    R = e => Math.sqrt(e);

function P(e, ...t) {
    return t.reduce((e, t) => (Object.keys(t || {}).forEach(n => {
        const r = e[n],
            i = t[n];
        r && void 0 === i || (Array.isArray(i) ? e[n] = (r || []).concat(i) : (e => e && "object" == typeof e)(i) ? e[n] = P({}, r, i) : e[n] = i)
    }), e), e)
}

function D() {
    let e, t, n = new Promise((function(n, r) {
        e = n, t = r
    }));
    return n.resolve = e, n.reject = t, n
}

function k(e, t) {
    let n = e;
    for (let r = 0; r < t.length; r++)
        if (t.start(r) <= e && t.end(r) >= e) {
            n = t.end(r);
            break
        }
    return n - e
}

function O(e, t) {
    if (!t || !t.length) return 0;
    if (1 === t.length && t.end(0) - t.start(0) < 1e-6) return 0;
    let n = 0;
    for (let r = t.length - 1; r >= 0 && t.end(r) > e; --r) n += t.end(r) - Math.max(t.start(r), e);
    return n
}

function C() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function L(e) {
    return C() - e
}

function N(e) {
    if ("object" != typeof e) return "";
    let t = [];
    for (let n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.length ? t.join("&") : ""
}

function M(e) {
    return "string" != typeof e ? {} : e.replace("?", "").split("&").reduce((e, t) => {
        if (t.length > 0) {
            const n = t.substring(0, t.indexOf("=")),
                r = t.substring(t.indexOf("=") + 1);
            e[n] = decodeURIComponent(r)
        }
        return e
    }, {})
}

function x(e) {
    const t = document.createElement("a");
    return t.href = e, t
}

function F(e, t) {
    const n = N(t);
    let r = -1 === e.indexOf("?") ? "?" : "&";
    return `${e}${n?`${r}${n}`:""}`
}

function U(e) {
    const t = e.split("://");
    if (2 !== t.length) return null;
    const n = t[1].split("/");
    if (n.length > 1) return n[0];
    const r = t[1].split("?");
    if (r.length > 1) return r[0];
    const i = t[1].split("#");
    return i.length > 1 ? i[0] : t[1]
}

function j(e, t) {
    this.headers = {}, this.perfTimings = {}, P(this, t), this.ok = 2 == (this.status / 100 | 0), this.body = e, this.text = () => Promise.resolve(e), this.json = () => Promise.resolve(JSON.parse(e)), this.blob = () => Promise.resolve(new Blob([e])), this.arrayBuffer = () => Promise.resolve(e), this.clone = () => new j(e, this), this.isVimeoResponse = !0
}
let B = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "The operation was aborted.") || this).name = "AbortError", t
        }
        return a(t, e), t
    }(d(Error)),
    V = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t.statusText) || this).name = "HTTPError", n.response = t, n
        }
        return a(t, e), t
    }(d(Error)),
    H = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "A network error occurred.") || this).name = "NetworkError", t
        }
        return a(t, e), t
    }(d(Error)),
    X = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, "Request timed out.") || this).name = "TimeoutError", n.timeoutMs = t, n
        }
        return a(t, e), t
    }(d(Error));

function q(e, t) {
    let {
        url: n,
        method: r,
        body: i,
        onDownloadProgress: s
    } = e, o = 100;
    return new Promise((function(a, u) {
        const c = t ? new t : new XMLHttpRequest,
            l = window.performance;
        c.open(r.toUpperCase(), n, e.async), e.timeout && (c.timeout = e.timeout), c.onload = function() {
            if (0 === c.status && (!c.responseURL || 0 !== c.responseURL.indexOf("file:"))) return;
            const e = {};
            c.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (t, n, r) => {
                e[n] = e[n] ? `${e[n]},${r}` : r
            });
            let t = {};
            if (window.performance && void 0 !== window.performance.getEntriesByType) {
                const e = window.performance.getEntriesByType("resource");
                if (e.length && e.length >= o && ("function" == typeof l.clearResourceTimings && l.clearResourceTimings(), "function" == typeof l.setResourceTimingBufferSize && (l.setResourceTimingBufferSize(500), o = 500)), e.length) {
                    const n = e.filter(e => e.name === c.responseURL).sort((e, t) => e.connectStart - t.connectStart);
                    n.length && (t = n[n.length - 1].toJSON())
                }
            }
            a(new j(c.response, {
                headers: e,
                statusText: c.statusText,
                status: c.status,
                url: c.responseURL,
                perfTimings: t
            }))
        }, c.onabort = function() {
            u(new B)
        }, c.onerror = function() {
            u(new H)
        }, c.ontimeout = function() {
            u(new X(e.timeout))
        }, "function" == typeof s && c.addEventListener("progress", s);
        for (let t in e.headers) c.setRequestHeader(t, e.headers[t]);
        e.withCredentials && (c.withCredentials = !0), e.responseType && (c.responseType = e.responseType), e.abort = c.abort.bind(c), c.send(i || null)
    }))
}

function G() {}

function W(e, t, n) {
    if (!e.s) {
        if (n instanceof K) {
            if (!n.s) return void(n.o = W.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(W.bind(null, e, t), W.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const K = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    W(r, 1, e(this.v))
                } catch (fl) {
                    W(r, 2, fl)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? W(r, 1, t ? t(i) : i) : n ? W(r, 1, n(i)) : W(r, 2, i)
            } catch (fl) {
                W(r, 2, fl)
            }
        }, r
    }, e
}();

function Y(e) {
    return e instanceof K && 1 & e.s
}

function $(e) {
    const t = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (fl) {
                return Promise.reject(fl)
            }
        }
    }((function(r) {
        return function(e, t) {
            try {
                var n = e()
            } catch (fl) {
                return t(fl)
            }
            return n && n.then ? n.then(void 0, t) : n
        }(r, (function(i) {
            let s = !1;
            n++;
            const o = function(t) {
                if (!e.retryAbortErrors && t instanceof B) return 0;
                if (t instanceof X) return 0;
                if (n >= e.retry) return 0;
                if (t instanceof V) {
                    if (!e.retryStatus(t.response.status)) return 0;
                    const n = t.response.headers["retry-after"];
                    if (n && e.retryStatus(t.response.status)) {
                        let e = Number(n);
                        return isNaN(e) ? e = Date.parse(n) - Date.now() : e *= 1e3, e
                    }
                    if (413 === t.response.status) return 0
                }
                return .3 * 2 ** (n - 1) * 1e3
            }(i);
            return function(a, u) {
                var c = function() {
                    if (0 !== o && n > 0) return function(e, t, n) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(b(o), (function() {
                        const o = e.hooks.beforeRetry || [];
                        return function(e, t) {
                            return e && e.then ? e.then(t) : t()
                        }(function(e, t, n) {
                            var r, i, s = -1;
                            return function n(o) {
                                try {
                                    for (; ++s < e.length;)
                                        if ((o = t(s)) && o.then) {
                                            if (!Y(o)) return void o.then(n, i || (i = W.bind(null, r = new K, 2)));
                                            o = o.v
                                        }
                                    r ? W(r, 1, o) : r = o
                                } catch (fl) {
                                    W(r || (r = new K), 2, fl)
                                }
                            }(), r
                        }(o, (function(t) {
                            return function(e, t) {
                                return e && e.then ? e.then(G) : Promise.resolve()
                            }((0, o[t])(e, i, n))
                        })), (function() {
                            return s = !0, t(r)
                        }))
                    }))
                }();
                return c && c.then ? c.then(u) : u(c)
            }(0, (function(t) {
                if (s) return t;
                if (e.throwHttpErrors) throw i
            }))
        }))
    }));
    let n = 0;
    return t
}

function z(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Q(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }
}

function J(e, t, n) {
    if (!e.s) {
        if (n instanceof Z) {
            if (!n.s) return void(n.o = J.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(J.bind(null, e, t), J.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const Z = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    J(r, 1, e(this.v))
                } catch (fl) {
                    J(r, 2, fl)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? J(r, 1, t ? t(i) : i) : n ? J(r, 1, n(i)) : J(r, 2, i)
            } catch (fl) {
                J(r, 2, fl)
            }
        }, r
    }, e
}();

function ee(e) {
    return e instanceof Z && 1 & e.s
}

function te(e, t, n) {
    var r, i, s = -1;
    return function o(a) {
        try {
            for (; ++s < e.length && (!n || !n());)
                if ((a = t(s)) && a.then) {
                    if (!ee(a)) return void a.then(o, i || (i = J.bind(null, r = new Z, 2)));
                    a = a.v
                }
            r ? J(r, 1, a) : r = a
        } catch (fl) {
            J(r || (r = new Z), 2, fl)
        }
    }(), r
}

function ne(e, t) {
    return e && e.then ? e.then(t) : t(e)
}
const re = ["get", "post", "put", "patch", "head", "delete"],
    ie = {
        json: "application/json",
        text: "text/plain",
        arrayBuffer: "*/*",
        blob: "*/*"
    },
    se = ["get"];

function oe(e, t) {
    const n = Q((function() {
        let e = !1,
            n = !1;
        const r = t.hooks.beforeRequest || [];
        return ne(te(r, (function(i) {
            return z((0, r[i])(t), (function(r) {
                return r instanceof ae ? (t = r, void(n = !0)) : (null == r ? void 0 : r.isVimeoResponse) ? (e = !0, Promise.resolve(r).then(ue(t))) : void 0
            }))
        }), (function() {
            return n || e
        })), (function(n) {
            return e ? n : q(t).then(ue(t))
        }))
    }));
    t = new ae(e, t);
    const {
        method: r,
        json: i,
        jwt: s,
        searchParams: a
    } = t;
    if (i && (t.headers["Content-Type"] = ie.json, t.body = JSON.stringify(i)), s && (t.headers.Authorization = `jwt ${s}`), a) {
        const [e, n] = t.url.split("?");
        t.url = F(e, o(o({}, M(n)), a))
    }
    const u = -1 !== se.indexOf(r.toLowerCase()) ? $(t)(n) : n();
    for (const o in ie) u[o] = Q((function() {
        return t.headers["Content-Type"] = ie[o], z(u, (function(e) {
            return e.clone()[o]()
        }))
    }));
    return function e(t, n) {
        const r = t.then.bind(t);
        return Object.assign(t, {
            abort: n,
            then: (...t) => e(r.apply(void 0, t), n)
        })
    }(u, () => t.abort())
}

function ae(e, n) {
    P(this, t, e = "string" == typeof e ? {
        url: e
    } : e, n)
}

function ue(e) {
    const {
        validateStatus: t,
        throwHttpErrors: n,
        hooks: r
    } = e;
    return Q((function(i) {
        const s = r.afterResponse || [];
        return ne(te(s, (function(t) {
            return z((0, s[t])(e, i.clone()), (function(e) {
                e instanceof j && (i = e)
            }))
        })), (function() {
            if (!t || t(i.status)) return i;
            if (n) throw new V(i);
            return i
        }))
    }))
}
re.forEach((function(e) {
    return oe[e] = (t, n) => oe(t, o({
        method: e
    }, n)), oe[e]
}));
const {
    get: ce,
    post: le,
    put: he,
    patch: de,
    head: fe
} = oe, _e = {
    ARRAY_BUFFER: "arraybuffer"
};
var pe = Object.freeze({
        __proto__: null,
        ContentTypes: e,
        defaults: t,
        requestMethods: re,
        responseTypes: ie,
        retryMethods: se,
        request: oe,
        Request: ae,
        get: ce,
        post: le,
        put: he,
        patch: de,
        head: fe,
        Response: j,
        ResponseTypes: _e,
        AbortError: B,
        HTTPError: V,
        NetworkError: H,
        TimeoutError: X,
        xhr: q
    }),
    me = navigator.userAgent.toLowerCase();

function ve(e) {
    e = e.toLowerCase();
    var t = new RegExp(e).test(me);
    return "safari" === e ? t && new RegExp("version").test(me) : t
}

function ge(e) {
    var t = document.createElement("div"),
        n = e.charAt(0).toUpperCase() + e.slice(1),
        r = (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ");
    for (var i in r) {
        var s = r[i];
        if (void 0 !== t.style[s]) return s
    }
    return e
}
var ye = !!ve("android") && (parseFloat(me.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
    Ee = window.devicePixelRatio || 1,
    Se = !(!ve("windows phone") && !ve("iemobile")) && (parseFloat(me.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
    Te = !!ve("msie") && parseFloat(me.replace(/^.*msie (\d+).*$/, "$1")),
    be = !!ve("trident") && parseFloat(me.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
    Ae = ve("ipad;") || ve("iphone;") || ve("ipod touch;") ? parseFloat(me.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")) : navigator.userAgent.includes("Mac") && "ontouchend" in document,
    Ie = "MacIntel" === navigator.platform && void 0 !== navigator.standalone,
    we = ve("opera") || ve("opr"),
    Re = /^Mozilla\/5\.0 \(.* Mac OS X.*\(KHTML, like Gecko\)(?: Mobile\/[\S]*|)$/i.test(me);

function Pe() {
    if (!ve("safari")) return [];
    var e = me.split(" ").find((function(e) {
        return /version\//.test(e)
    }));
    return e ? e.replace("version/", "").split(".").map((function(e) {
        return parseInt(e, 10)
    })) : []
}
var De = ve("safari") && ve("apple") && !ve("chrome") && !ve("android") && Pe()[0] >= 11,
    ke = {
        airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window,
        android: ye,
        appleMail: Re,
        hasAutoplayPolicy: ye || Ae || De || function() {
            if (!ve("chrome")) return [];
            var e = me.split(" ").find((function(e) {
                return Ae ? /CriOS\//.test(e) : /chrome\//.test(e)
            }));
            return e ? e.replace("chrome/", "").split(".").map((function(e) {
                return parseInt(e, 10)
            })) : []
        }()[0] >= 66,
        iOS: Ae,
        iPadOS: Ie,
        mobileAndroid: ye && ve("mobile"),
        browser: {
            bb10: ve("bb10"),
            chrome: ve("chrome"),
            firefox: ve("firefox"),
            ie: Te || be,
            edge: ve("edge"),
            opera: we,
            safari: ve("safari") && ve("apple") && !ve("chrome") && !ve("android")
        },
        devicePixelRatio: Ee,
        iPhone: ve("iphone;") || ve("ipod touch;") || ve("ipod;"),
        iPad: ve("ipad;"),
        iPadNonRetina: ve("ipad;") && Ee < 2,
        mac: ve("mac os"),
        pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1,
        passiveEvents: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
            } catch (fl) {}
            return e
        }(),
        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || ve("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1,
        transformProperty: ge("transform"),
        transitionProperty: ge("transition"),
        webp: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
        }(),
        windowsPhone: Se
    },
    Oe = /mac os x 10_13/.test(me),
    Ce = ke.iOS && ke.iOS >= 11,
    Le = "undefined" != typeof matchMedia && (matchMedia("(color-gamut: p3)").matches && screen.pixelDepth > 24 || matchMedia("(dynamic-range: high), (video-dynamic-range: high)").matches);

function Ne(e = "hvc1") {
    return "undefined" != typeof MediaSource ? MediaSource.isTypeSupported(`video/mp4; codecs="${e}"`) : De && (Oe || Ce)
}

function Me() {
    return !(ke.iOS || ke.iPad || ke.browser.ie) && (!ve("safari") || Pe()[0] > 11 || 11 === Pe()[0] && (Pe()[2] > 1 || Pe()[1] > 0))
}
ke.hevc = Ne(), ke.hevcMain10 = Ne("hvc1.2.4.H150.90"), ke.hdr = Le, ke.dolbyVision = function() {
    var e = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="dvh1"');
    if (!e) {
        var t = document.createElement("video");
        "canPlayType" in t && (e = "probably" === t.canPlayType('video/mp4; codecs="dvh1"'))
    }
    if (Ie || ke.iOS) {
        var n = Pe(),
            r = n[0],
            i = n[1];
        if (r < 14 || 14 === r && i < 1) return !1
    }
    return e
}(), ke.vp9hdr = (window.matchMedia("(color-gamut: p3)").matches || window.matchMedia("(color-gamut: rec2020)").matches) && screen.colorDepth >= 48 && (MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.01"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.01"')), ke.av1 = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'), ke.webvr = !!(window.navigator && "getVRDisplays" in window.navigator), ke.webxr = !!(window.navigator && "xr" in window.navigator && "supportsSession" in window.navigator.xr), ke.spatialPlayback = Me(), ke.spatialHEVC = !ke.browser.safari && Me() && Ne(), ke.stereoscopic = ke.spatialPlayback && ke.mobileAndroid;
var xe = Array.isArray,
    Fe = "object" == typeof global && global && global.Object === Object && global,
    Ue = "object" == typeof self && self && self.Object === Object && self,
    je = Fe || Ue || Function("return this")(),
    Be = je.Symbol,
    Ve = Object.prototype,
    He = Ve.hasOwnProperty,
    Xe = Ve.toString,
    qe = Be ? Be.toStringTag : void 0,
    Ge = Object.prototype.toString,
    We = Be ? Be.toStringTag : void 0;

function Ke(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : We && We in Object(e) ? function(e) {
        var t = He.call(e, qe),
            n = e[qe];
        try {
            e[qe] = void 0;
            var r = !0
        } catch (fl) {}
        var i = Xe.call(e);
        return r && (t ? e[qe] = n : delete e[qe]), i
    }(e) : function(e) {
        return Ge.call(e)
    }(e)
}

function Ye(e) {
    return null != e && "object" == typeof e
}

function $e(e) {
    return "symbol" == typeof e || Ye(e) && "[object Symbol]" == Ke(e)
}
var ze = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Qe = /^\w*$/;

function Je(e, t) {
    if (xe(e)) return !1;
    var n = typeof e;
    return !("number" != n && "symbol" != n && "boolean" != n && null != e && !$e(e)) || Qe.test(e) || !ze.test(e) || null != t && e in Object(t)
}

function Ze(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
}

function et(e) {
    if (!Ze(e)) return !1;
    var t = Ke(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}
var tt = je["__core-js_shared__"],
    nt = function() {
        var e = /[^.]+$/.exec(tt && tt.keys && tt.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }(),
    rt = Function.prototype.toString;

function it(e) {
    if (null != e) {
        try {
            return rt.call(e)
        } catch (fl) {}
        try {
            return e + ""
        } catch (fl) {}
    }
    return ""
}
var st = /^\[object .+?Constructor\]$/,
    ot = Function.prototype,
    at = Object.prototype,
    ut = ot.toString,
    ct = at.hasOwnProperty,
    lt = RegExp("^" + ut.call(ct).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function ht(e, t) {
    var n = function(e, t) {
        return null == e ? void 0 : e[t]
    }(e, t);
    return function(e) {
        return !(!Ze(e) || function(e) {
            return !!nt && nt in e
        }(e)) && (et(e) ? lt : st).test(it(e))
    }(n) ? n : void 0
}
var dt = ht(Object, "create"),
    ft = Object.prototype.hasOwnProperty,
    _t = Object.prototype.hasOwnProperty;

function pt(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function mt(e, t) {
    return e === t || e != e && t != t
}

function vt(e, t) {
    for (var n = e.length; n--;)
        if (mt(e[n][0], t)) return n;
    return -1
}
pt.prototype.clear = function() {
    this.__data__ = dt ? dt(null) : {}, this.size = 0
}, pt.prototype.delete = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}, pt.prototype.get = function(e) {
    var t = this.__data__;
    if (dt) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n
    }
    return ft.call(t, e) ? t[e] : void 0
}, pt.prototype.has = function(e) {
    var t = this.__data__;
    return dt ? void 0 !== t[e] : _t.call(t, e)
}, pt.prototype.set = function(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = dt && void 0 === t ? "__lodash_hash_undefined__" : t, this
};
var gt = Array.prototype.splice;

function yt(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
yt.prototype.clear = function() {
    this.__data__ = [], this.size = 0
}, yt.prototype.delete = function(e) {
    var t = this.__data__,
        n = vt(t, e);
    return !(n < 0 || (n == t.length - 1 ? t.pop() : gt.call(t, n, 1), --this.size, 0))
}, yt.prototype.get = function(e) {
    var t = this.__data__,
        n = vt(t, e);
    return n < 0 ? void 0 : t[n][1]
}, yt.prototype.has = function(e) {
    return vt(this.__data__, e) > -1
}, yt.prototype.set = function(e, t) {
    var n = this.__data__,
        r = vt(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
};
var Et = ht(je, "Map");

function St(e, t) {
    var n = e.__data__;
    return function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
}

function Tt(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function bt(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
    var n = function n() {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            s = n.cache;
        if (s.has(i)) return s.get(i);
        var o = e.apply(this, r);
        return n.cache = s.set(i, o) || s, o
    };
    return n.cache = new(bt.Cache || Tt), n
}
Tt.prototype.clear = function() {
    this.size = 0, this.__data__ = {
        hash: new pt,
        map: new(Et || yt),
        string: new pt
    }
}, Tt.prototype.delete = function(e) {
    var t = St(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}, Tt.prototype.get = function(e) {
    return St(this, e).get(e)
}, Tt.prototype.has = function(e) {
    return St(this, e).has(e)
}, Tt.prototype.set = function(e, t) {
    var n = St(this, e),
        r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
}, bt.Cache = Tt;
var At = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    It = /\\(\\)?/g,
    wt = function(e) {
        var t = bt((function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(At, (function(e, n, r, i) {
                    t.push(r ? i.replace(It, "$1") : n || e)
                })), t
            }), (function(e) {
                return 500 === n.size && n.clear(), e
            })),
            n = t.cache;
        return t
    }(),
    Rt = Be ? Be.prototype : void 0,
    Pt = Rt ? Rt.toString : void 0;

function Dt(e) {
    if ("string" == typeof e) return e;
    if (xe(e)) return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }(e, Dt) + "";
    if ($e(e)) return Pt ? Pt.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function kt(e) {
    return null == e ? "" : Dt(e)
}

function Ot(e, t) {
    return xe(e) ? e : Je(e, t) ? [e] : wt(kt(e))
}

function Ct(e) {
    if ("string" == typeof e || $e(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function Lt(e, t) {
    for (var n = 0, r = (t = Ot(t, e)).length; null != e && n < r;) e = e[Ct(t[n++])];
    return n && n == r ? e : void 0
}

function Nt(e, t, n) {
    var r = null == e ? void 0 : Lt(e, t);
    return void 0 === r ? n : r
}
var Mt = "object" == typeof global && global && global.Object === Object && global,
    xt = "object" == typeof self && self && self.Object === Object && self,
    Ft = (Mt || xt || Function("return this")()).Symbol,
    Ut = Object.prototype,
    jt = Ut.hasOwnProperty,
    Bt = Ut.toString,
    Vt = Ft ? Ft.toStringTag : void 0,
    Ht = Object.prototype.toString,
    Xt = Ft ? Ft.toStringTag : void 0;
var qt = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }(Object.getPrototypeOf, Object),
    Gt = Function.prototype,
    Wt = Object.prototype,
    Kt = Gt.toString,
    Yt = Wt.hasOwnProperty,
    $t = Kt.call(Object),
    zt = function(e) {
        var t, n = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }();

function Qt(e, t, n) {
    var r;
    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
        if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
        return n(Qt)(e, t)
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var i = e,
        s = t,
        o = [],
        a = o,
        u = !1;

    function c() {
        a === o && (a = o.slice())
    }

    function l() {
        return s
    }

    function h(e) {
        if ("function" != typeof e) throw new Error("Expected listener to be a function.");
        var t = !0;
        return c(), a.push(e),
            function() {
                if (t) {
                    t = !1, c();
                    var n = a.indexOf(e);
                    a.splice(n, 1)
                }
            }
    }

    function d(e) {
        if (! function(e) {
                if (! function(e) {
                        return null != e && "object" == typeof e
                    }(e) || "[object Object]" != function(e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Xt && Xt in Object(e) ? function(e) {
                            var t = jt.call(e, Vt),
                                n = e[Vt];
                            try {
                                e[Vt] = void 0;
                                var r = !0
                            } catch (fl) {}
                            var i = Bt.call(e);
                            return r && (t ? e[Vt] = n : delete e[Vt]), i
                        }(e) : function(e) {
                            return Ht.call(e)
                        }(e)
                    }(e)) return !1;
                var t = qt(e);
                if (null === t) return !0;
                var n = Yt.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && Kt.call(n) == $t
            }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
            u = !0, s = i(s, e)
        } finally {
            u = !1
        }
        for (var t = o = a, n = 0; n < t.length; n++)(0, t[n])();
        return e
    }
    return d({
        type: "@@redux/INIT"
    }), (r = {
        dispatch: d,
        subscribe: h,
        getState: l,
        replaceReducer: function(e) {
            if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
            i = e, d({
                type: "@@redux/INIT"
            })
        }
    })[zt] = function() {
        var e, t = h;
        return (e = {
            subscribe: function(e) {
                if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                function n() {
                    e.next && e.next(l())
                }
                return n(), {
                    unsubscribe: t(n)
                }
            }
        })[zt] = function() {
            return this
        }, e
    }, r
}

function Jt() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function(e) {
        return e
    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }))
}
var Zt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
};

function en() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
        return function(n, r, i) {
            var s, o = e(n, r, i),
                a = o.dispatch,
                u = {
                    getState: o.getState,
                    dispatch: function(e) {
                        return a(e)
                    }
                };
            return s = t.map((function(e) {
                return e(u)
            })), a = Jt.apply(void 0, s)(o.dispatch), Zt({}, o, {
                dispatch: a
            })
        }
    }
}
var tn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function nn(e, t, n) {
    return e(n = {
        path: t,
        exports: {},
        require: function(e, t) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == t && n.path)
        }
    }, n.exports), n.exports
}
var rn = nn((function(e, t) {
    e.exports = function(e) {
        var t = {};
        return (e = e || {}).prependOn = function(t, n) {
            return e.on(t, n, !0)
        }, e.eventNames = function() {
            return Object.keys(t)
        }, e.on = function(n, r, i) {
            for (var s = 0, o = (n = [].concat(n)).length; s < o; s++) {
                var a = n[s];
                if (!a) throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []), i ? t[a].unshift(r) : t[a].push(r)
            }
            return e
        }, e.once = function(t, n, r) {
            function i() {
                n.apply(e.off(t, i), arguments)
            }
            return i.handler = n, e.on(t, i, r)
        }, e.off = function(n, r) {
            if (!n) return t = {}, e;
            for (var i = 0, s = (n = [].concat(n)).length; i < s; i++) {
                var o = n[i];
                if (!o) throw new Error("Tried to remove an undefined event.");
                if (o in t)
                    if (r) {
                        var a = t[o].indexOf(r);
                        if (-1 === a)
                            for (var u = 0, c = t[o].length; u < c; u++)
                                if (t[o][u].handler === r) {
                                    a = i;
                                    break
                                }
                        if (-1 === a) return e;
                        t[o].splice(a, 1)
                    } else delete t[o]
            }
            return e
        }, e.fire = function(n) {
            if (!n) throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var r = t[n].slice(0), i = 0, s = r.length; i < s; i++)
                    if (r[i].apply(e, r.slice.call(arguments, 1)), e.__isHalted) {
                        delete e.__isHalted;
                        break
                    }
            return e
        }, e.halt = function() {
            return e.__isHalted = !0, e
        }, e
    }
}));

function sn(e) {
    var t = this.__data__ = new yt(e);
    this.size = t.size
}
sn.prototype.clear = function() {
    this.__data__ = new yt, this.size = 0
}, sn.prototype.delete = function(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}, sn.prototype.get = function(e) {
    return this.__data__.get(e)
}, sn.prototype.has = function(e) {
    return this.__data__.has(e)
}, sn.prototype.set = function(e, t) {
    var n = this.__data__;
    if (n instanceof yt) {
        var r = n.__data__;
        if (!Et || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new Tt(r)
    }
    return n.set(e, t), this.size = n.size, this
};
var on = function() {
    try {
        var e = ht(Object, "defineProperty");
        return e({}, "", {}), e
    } catch (fl) {}
}();

function an(e, t, n) {
    "__proto__" == t && on ? on(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var un = Object.prototype.hasOwnProperty;

function cn(e, t, n) {
    var r = e[t];
    un.call(e, t) && mt(r, n) && (void 0 !== n || t in e) || an(e, t, n)
}

function ln(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var s = -1, o = t.length; ++s < o;) {
        var a = t[s],
            u = r ? r(n[a], e[a], a, n, e) : void 0;
        void 0 === u && (u = e[a]), i ? an(n, a, u) : cn(n, a, u)
    }
    return n
}

function hn(e) {
    return Ye(e) && "[object Arguments]" == Ke(e)
}
var dn = Object.prototype,
    fn = dn.hasOwnProperty,
    _n = dn.propertyIsEnumerable,
    pn = hn(function() {
        return arguments
    }()) ? hn : function(e) {
        return Ye(e) && fn.call(e, "callee") && !_n.call(e, "callee")
    },
    mn = "object" == typeof exports && exports && !exports.nodeType && exports,
    vn = mn && "object" == typeof module && module && !module.nodeType && module,
    gn = vn && vn.exports === mn ? je.Buffer : void 0,
    yn = (gn ? gn.isBuffer : void 0) || function() {
        return !1
    },
    En = /^(?:0|[1-9]\d*)$/;

function Sn(e, t) {
    var n = typeof e;
    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && En.test(e)) && e > -1 && e % 1 == 0 && e < t
}

function Tn(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}
var bn = {};

function An(e) {
    return function(t) {
        return e(t)
    }
}
bn["[object Float32Array]"] = bn["[object Float64Array]"] = bn["[object Int8Array]"] = bn["[object Int16Array]"] = bn["[object Int32Array]"] = bn["[object Uint8Array]"] = bn["[object Uint8ClampedArray]"] = bn["[object Uint16Array]"] = bn["[object Uint32Array]"] = !0, bn["[object Arguments]"] = bn["[object Array]"] = bn["[object ArrayBuffer]"] = bn["[object Boolean]"] = bn["[object DataView]"] = bn["[object Date]"] = bn["[object Error]"] = bn["[object Function]"] = bn["[object Map]"] = bn["[object Number]"] = bn["[object Object]"] = bn["[object RegExp]"] = bn["[object Set]"] = bn["[object String]"] = bn["[object WeakMap]"] = !1;
var In = "object" == typeof exports && exports && !exports.nodeType && exports,
    wn = In && "object" == typeof module && module && !module.nodeType && module,
    Rn = wn && wn.exports === In && Fe.process,
    Pn = function() {
        try {
            return wn && wn.require && wn.require("util").types || Rn && Rn.binding && Rn.binding("util")
        } catch (fl) {}
    }(),
    Dn = Pn && Pn.isTypedArray,
    kn = Dn ? An(Dn) : function(e) {
        return Ye(e) && Tn(e.length) && !!bn[Ke(e)]
    },
    On = Object.prototype.hasOwnProperty;

function Cn(e, t) {
    var n = xe(e),
        r = !n && pn(e),
        i = !n && !r && yn(e),
        s = !n && !r && !i && kn(e),
        o = n || r || i || s,
        a = o ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }(e.length, String) : [],
        u = a.length;
    for (var c in e) !t && !On.call(e, c) || o && ("length" == c || i && ("offset" == c || "parent" == c) || s && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Sn(c, u)) || a.push(c);
    return a
}
var Ln = Object.prototype;

function Nn(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || Ln)
}

function Mn(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var xn = Mn(Object.keys, Object),
    Fn = Object.prototype.hasOwnProperty;

function Un(e) {
    if (!Nn(e)) return xn(e);
    var t = [];
    for (var n in Object(e)) Fn.call(e, n) && "constructor" != n && t.push(n);
    return t
}

function jn(e) {
    return null != e && Tn(e.length) && !et(e)
}

function Bn(e) {
    return jn(e) ? Cn(e) : Un(e)
}
var Vn = Object.prototype.hasOwnProperty;

function Hn(e) {
    return jn(e) ? Cn(e, !0) : function(e) {
        if (!Ze(e)) return function(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        }(e);
        var t = Nn(e),
            n = [];
        for (var r in e)("constructor" != r || !t && Vn.call(e, r)) && n.push(r);
        return n
    }(e)
}
var Xn = "object" == typeof exports && exports && !exports.nodeType && exports,
    qn = Xn && "object" == typeof module && module && !module.nodeType && module,
    Gn = qn && qn.exports === Xn ? je.Buffer : void 0,
    Wn = Gn ? Gn.allocUnsafe : void 0;

function Kn(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = Wn ? Wn(n) : new e.constructor(n);
    return e.copy(r), r
}

function Yn(e, t) {
    var n = -1,
        r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}

function $n() {
    return []
}
var zn = Object.prototype.propertyIsEnumerable,
    Qn = Object.getOwnPropertySymbols,
    Jn = Qn ? function(e) {
        return null == e ? [] : (e = Object(e), function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, s = []; ++n < r;) {
                var o = e[n];
                t(o) && (s[i++] = o)
            }
            return s
        }(Qn(e), (function(t) {
            return zn.call(e, t)
        })))
    } : $n;

function Zn(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
    return e
}
var er = Mn(Object.getPrototypeOf, Object),
    tr = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e;) Zn(t, Jn(e)), e = er(e);
        return t
    } : $n;

function nr(e, t, n) {
    var r = t(e);
    return xe(e) ? r : Zn(r, n(e))
}

function rr(e) {
    return nr(e, Bn, Jn)
}

function ir(e) {
    return nr(e, Hn, tr)
}
var sr = ht(je, "DataView"),
    or = ht(je, "Promise"),
    ar = ht(je, "Set"),
    ur = ht(je, "WeakMap"),
    cr = it(sr),
    lr = it(Et),
    hr = it(or),
    dr = it(ar),
    fr = it(ur),
    _r = Ke;
(sr && "[object DataView]" != _r(new sr(new ArrayBuffer(1))) || Et && "[object Map]" != _r(new Et) || or && "[object Promise]" != _r(or.resolve()) || ar && "[object Set]" != _r(new ar) || ur && "[object WeakMap]" != _r(new ur)) && (_r = function(e) {
    var t = Ke(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? it(n) : "";
    if (r) switch (r) {
        case cr:
            return "[object DataView]";
        case lr:
            return "[object Map]";
        case hr:
            return "[object Promise]";
        case dr:
            return "[object Set]";
        case fr:
            return "[object WeakMap]"
    }
    return t
});
var pr = _r,
    mr = Object.prototype.hasOwnProperty,
    vr = je.Uint8Array;

function gr(e) {
    var t = new e.constructor(e.byteLength);
    return new vr(t).set(new vr(e)), t
}
var yr = /\w*$/,
    Er = Be ? Be.prototype : void 0,
    Sr = Er ? Er.valueOf : void 0;

function Tr(e, t) {
    var n = t ? gr(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
}
var br = Object.create,
    Ar = function() {
        function e() {}
        return function(t) {
            if (!Ze(t)) return {};
            if (br) return br(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n
        }
    }();

function Ir(e) {
    return "function" != typeof e.constructor || Nn(e) ? {} : Ar(er(e))
}
var wr = Pn && Pn.isMap,
    Rr = wr ? An(wr) : function(e) {
        return Ye(e) && "[object Map]" == pr(e)
    },
    Pr = Pn && Pn.isSet,
    Dr = Pr ? An(Pr) : function(e) {
        return Ye(e) && "[object Set]" == pr(e)
    },
    kr = {};

function Or(e, t, n, r, i, s) {
    var o, a = 1 & t,
        u = 2 & t,
        c = 4 & t;
    if (n && (o = i ? n(e, r, i, s) : n(e)), void 0 !== o) return o;
    if (!Ze(e)) return e;
    var l = xe(e);
    if (l) {
        if (o = function(e) {
                var t = e.length,
                    n = new e.constructor(t);
                return t && "string" == typeof e[0] && mr.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }(e), !a) return Yn(e, o)
    } else {
        var h = pr(e),
            d = "[object Function]" == h || "[object GeneratorFunction]" == h;
        if (yn(e)) return Kn(e, a);
        if ("[object Object]" == h || "[object Arguments]" == h || d && !i) {
            if (o = u || d ? {} : Ir(e), !a) return u ? function(e, t) {
                return ln(e, tr(e), t)
            }(e, function(e, t) {
                return e && ln(t, Hn(t), e)
            }(o, e)) : function(e, t) {
                return ln(e, Jn(e), t)
            }(e, function(e, t) {
                return e && ln(t, Bn(t), e)
            }(o, e))
        } else {
            if (!kr[h]) return i ? e : {};
            o = function(e, t, n) {
                var r = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return gr(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new r(+e);
                    case "[object DataView]":
                        return function(e, t) {
                            var n = t ? gr(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }(e, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return Tr(e, n);
                    case "[object Map]":
                        return new r;
                    case "[object Number]":
                    case "[object String]":
                        return new r(e);
                    case "[object RegExp]":
                        return function(e) {
                            var t = new e.constructor(e.source, yr.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }(e);
                    case "[object Set]":
                        return new r;
                    case "[object Symbol]":
                        return function(e) {
                            return Sr ? Object(Sr.call(e)) : {}
                        }(e)
                }
            }(e, h, a)
        }
    }
    s || (s = new sn);
    var f = s.get(e);
    if (f) return f;
    s.set(e, o), Dr(e) ? e.forEach((function(r) {
        o.add(Or(r, t, n, r, e, s))
    })) : Rr(e) && e.forEach((function(r, i) {
        o.set(i, Or(r, t, n, i, e, s))
    }));
    var _ = c ? u ? ir : rr : u ? keysIn : Bn,
        p = l ? void 0 : _(e);
    return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n););
    }(p || e, (function(r, i) {
        p && (r = e[i = r]), cn(o, i, Or(r, t, n, i, e, s))
    })), o
}

function Cr(e) {
    return Or(e, 5)
}

function Lr(e, t, n) {
    switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}

function Nr(e) {
    return e
}
kr["[object Arguments]"] = kr["[object Array]"] = kr["[object ArrayBuffer]"] = kr["[object DataView]"] = kr["[object Boolean]"] = kr["[object Date]"] = kr["[object Float32Array]"] = kr["[object Float64Array]"] = kr["[object Int8Array]"] = kr["[object Int16Array]"] = kr["[object Int32Array]"] = kr["[object Map]"] = kr["[object Number]"] = kr["[object Object]"] = kr["[object RegExp]"] = kr["[object Set]"] = kr["[object String]"] = kr["[object Symbol]"] = kr["[object Uint8Array]"] = kr["[object Uint8ClampedArray]"] = kr["[object Uint16Array]"] = kr["[object Uint32Array]"] = !0, kr["[object Error]"] = kr["[object Function]"] = kr["[object WeakMap]"] = !1;
var Mr = Math.max;

function xr(e, t, n) {
    return t = Mr(void 0 === t ? e.length - 1 : t, 0),
        function() {
            for (var r = arguments, i = -1, s = Mr(r.length - t, 0), o = Array(s); ++i < s;) o[i] = r[t + i];
            i = -1;
            for (var a = Array(t + 1); ++i < t;) a[i] = r[i];
            return a[t] = n(o), Lr(e, this, a)
        }
}

function Fr(e) {
    return function() {
        return e
    }
}
var Ur = on ? function(e, t) {
        return on(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Fr(t),
            writable: !0
        })
    } : Nr,
    jr = Date.now,
    Br = function(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = jr(),
                i = 16 - (r - n);
            if (n = r, i > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }(Ur);

function Vr(e, t) {
    return Br(xr(e, t, Nr), e + "")
}

function Hr(e, t, n) {
    (void 0 === n || mt(e[t], n)) && (void 0 !== n || t in e) || an(e, t, n)
}
var Xr = function(e, t, n) {
        for (var r = -1, i = Object(e), s = n(e), o = s.length; o--;) {
            var a = s[++r];
            if (!1 === t(i[a], a, i)) break
        }
        return e
    },
    qr = Function.prototype,
    Gr = Object.prototype,
    Wr = qr.toString,
    Kr = Gr.hasOwnProperty,
    Yr = Wr.call(Object);

function $r(e) {
    if (!Ye(e) || "[object Object]" != Ke(e)) return !1;
    var t = er(e);
    if (null === t) return !0;
    var n = Kr.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && Wr.call(n) == Yr
}

function zr(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
}

function Qr(e, t, n, r, i) {
    e !== t && Xr(t, (function(s, o) {
        if (i || (i = new sn), Ze(s)) ! function(e, t, n, r, i, s, o) {
            var a = zr(e, n),
                u = zr(t, n),
                c = o.get(u);
            if (c) Hr(e, n, c);
            else {
                var l = s ? s(a, u, n + "", e, t, o) : void 0,
                    h = void 0 === l;
                if (h) {
                    var d = xe(u),
                        f = !d && yn(u),
                        _ = !d && !f && kn(u);
                    l = u, d || f || _ ? xe(a) ? l = a : function(e) {
                        return Ye(e) && jn(e)
                    }(a) ? l = Yn(a) : f ? (h = !1, l = Kn(u, !0)) : _ ? (h = !1, l = Tr(u, !0)) : l = [] : $r(u) || pn(u) ? (l = a, pn(a) ? l = function(e) {
                        return ln(e, Hn(e))
                    }(a) : Ze(a) && !et(a) || (l = Ir(u))) : h = !1
                }
                h && (o.set(u, l), i(l, u, r, s, o), o.delete(u)), Hr(e, n, l)
            }
        }(e, t, o, n, Qr, r, i);
        else {
            var a = r ? r(zr(e, o), s, o + "", e, t, i) : void 0;
            void 0 === a && (a = s), Hr(e, o, a)
        }
    }), Hn)
}

function Jr(e, t, n, r, i, s) {
    return Ze(e) && Ze(t) && (s.set(t, e), Qr(e, t, void 0, Jr, s), s.delete(t)), e
}

function Zr(e) {
    return Vr((function(t, n) {
        var r = -1,
            i = n.length,
            s = i > 1 ? n[i - 1] : void 0,
            o = i > 2 ? n[2] : void 0;
        for (s = e.length > 3 && "function" == typeof s ? (i--, s) : void 0, o && function(e, t, n) {
                if (!Ze(n)) return !1;
                var r = typeof t;
                return !!("number" == r ? jn(n) && Sn(t, n.length) : "string" == r && t in n) && mt(n[t], e)
            }(n[0], n[1], o) && (s = i < 3 ? void 0 : s, i = 1), t = Object(t); ++r < i;) {
            var a = n[r];
            a && e(t, a, r, s)
        }
        return t
    }))
}
var ei = Zr((function(e, t, n, r) {
        Qr(e, t, n, r)
    })),
    ti = Vr((function(e) {
        return e.push(void 0, Jr), Lr(ei, void 0, e)
    }));
let ni = function() {
    function e(e) {
        this._available = !1, this._active = !1, this._video = e, rn(this)
    }
    r(e, null, [{
        key: "displayName",
        get: function() {
            return "ExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return !1
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return []
        }
    }]);
    var t = e.prototype;
    return t.showPicker = function() {}, t.getFile = function() {
        const e = this.constructor.displayName.replace("ExternalDisplay", "");
        if (this._video.externalDisplayFiles[e]) return this._video.externalDisplayFiles[e];
        const t = this.constructor.supportedVideoTypes,
            n = this._video.files.filter(e => -1 !== t.indexOf(e.mime)).sort((e, n) => e.mime === n.mime ? e.priority - n.priority : t.indexOf(e.mime) - t.indexOf(n.mime));
        if (!n.length) throw new Error(`No files available for ${this.constructor.displayName} external display.`);
        return n[0]
    }, r(e, [{
        key: "active",
        get: function() {
            return this._active
        }
    }, {
        key: "available",
        get: function() {
            return this._available
        }
    }, {
        key: "element",
        get: function() {
            return document.createElement("div")
        }
    }]), e
}();
const ri = {
        ABORT: "abort",
        CAN_PLAY: "canplay",
        CAN_PLAY_THROUGH: "canplaythrough",
        DURATION_CHANGE: "durationchange",
        EMPTIED: "emptied",
        ENDED: "ended",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        ERROR: "error",
        LOADED_DATA: "loadeddata",
        LOADED_METADATA: "loadedmetadata",
        LOAD_START: "loadstart",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PROGRESS: "progress",
        RATE_CHANGE: "ratechange",
        RESIZE: "resize",
        SEEKED: "seeked",
        SEEKING: "seeking",
        STALLED: "stalled",
        SUSPEND: "suspend",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        WEBKIT_BEGIN_FULLSCREEN: "webkitbeginfullscreen",
        WEBKIT_END_FULLSCREEN: "webkitendfullscreen",
        WEBKIT_PRESENTATION_MODE_CHANGED: "webkitpresentationmodechanged"
    },
    ii = {
        AVAILABLE: "externaldisplayavailable",
        UNAVAILABLE: "externaldisplayunavailable",
        ACTIVATED: "externaldisplayactivated",
        DEACTIVATED: "externaldisplaydeactivated"
    },
    si = {
        AIRPLAY_AVAILABLE: "available",
        AIRPLAY_UNAVAILABLE: "unavailable",
        AIRPLAY_ACTIVATED: "activated",
        AIRPLAY_DEACTIVATED: "deactivated"
    },
    oi = {
        SCANNER_CHANGE: "scannerchange",
        SCANNER_ERROR: "scannererror",
        FILE_ERROR: "fileerror",
        FILE_SRC_UPDATE: "filesrcupdate",
        DOWNLOAD_START: "downloadstart",
        DOWNLOAD_END: "downloadend",
        DOWNLOAD_ERROR: "downloaderror",
        DOWNLOAD_TIMEOUT: "downloadtimeout",
        DRM_AUTH_FAILURE: "drmauthfailure",
        DRM_AUTH_SUCCESS: "drmauthsuccess",
        DRM_FAILURE: "drmfailure",
        DRM_KEY_SWITCH: "drmkeyswitch",
        DRM_OUTPUT_RESTRICTED: "drmoutputrestricted",
        EME_UNSUPPORTED: "emeunsupported",
        CURRENT_FILE_CHANGE: "currentfilechange",
        MEDIA_URL_EXPIRED: "mediaurlexpired",
        MEDIA_URL_BAD_REQUEST: "mediaurlbadrequest",
        STREAM_CHANGE: "streamchange",
        STREAM_CHANGE_START: "streamchangestart",
        STREAM_UPDATED: "streamupdated",
        STREAM_BUFFER_START: "streambufferstart",
        STREAM_BUFFER_END: "streambufferend",
        DROPPED_FRAMES: "droppedframes",
        BANDWIDTH: "bandwidth",
        STREAM_TARGET_CHANGE: "streamtargetchange",
        CUE_POINT: "cuepoint",
        BUFFER_OCCUPANCY: "bufferoccupancy",
        MANIFEST_TIMEOUT: "manifesttimeout",
        MANIFEST_LOADED: "manifestloaded",
        STREAMS_LOADED: "streamsloaded",
        TEXT_SRC_UPDATE: "texttracksrcupdate",
        TEXT_TRACKS_AVAILABLE: "texttracksavailable",
        AV_DURATION_MISMATCH: "avdurationmismatch",
        BUFFER_STARTED: "bufferstarted",
        BUFFER_ENDED: "bufferended",
        QUOTA_EXCEEDED_ERROR: "quotaexceedederror",
        CHAPTER_CUES_UPDATED: "chaptercuesupdated",
        APPEND_BUFFER_END: "appendbufferend",
        DROPPED_FRAME_PERCENT_EXCEEDED: "droppedframepercentexceeded"
    },
    ai = {
        STREAM_ONLINE: "livestreamonline",
        STREAM_OFFLINE: "livestreamoffline",
        BUFFER_GAP_JUMP: "livebuffergapjump",
        BUFFER_GAP_JUMP_PREVENT: "livebuffergapjumpprevent",
        STALL_JUMP: "livestalljump"
    },
    ui = {
        CAMERA_UPDATE: "cameraupdate",
        CAMERA_CHANGE: "camerachange",
        MOTION_START: "motionstart",
        MOTION_END: "motionend",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        WEBVR_ENTER: "entervr",
        WEBVR_EXIT: "exitvr",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        AMBISONIC_UNSUPPORTED: "ambisonicunsupported"
    },
    ci = {
        MEDIASESSION_PLAY: "mediasessionplay",
        MEDIASESSION_PAUSE: "mediasessionpause",
        MEDIASESSION_SEEK_FORWARD: "mediasessionseekforward",
        MEDIASESSION_SEEK_BACKWARD: "mediasessionseekbackward"
    },
    li = {
        BRAIN_ML_MODEL_ERR: "brainmlmodelerr",
        BRAIN_ML_MODEL_NET_ERR: "brainmlmodelresperr",
        BRAIN_ML_MODEL_TIMEOUT: "brainmlmodeltimeout",
        BRAIN_ML_SWITCH_TO_SKYFIRE: "brainmlmodelswitchtoskyfire",
        BRAIN_ML_MODEL_INPUTS: "brainmlmodelinputs"
    },
    hi = Object.assign({}, ri, ii, si, oi, ui, ai, ci, li);
let di = function(e) {
    function t(t) {
        var n;
        return (n = e.call(this, t) || this)._videoElement = document.createElement("video"), n._videoElement.setAttribute("data-airplay", ""), n._videoElement.setAttribute("x-webkit-airplay", "allow"), n.addVideoEventListeners(), n
    }
    a(t, e), r(t, null, [{
        key: "displayName",
        get: function() {
            return "AirPlayExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return "WebKitPlaybackTargetAvailabilityEvent" in window
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/vnd.apple.mpegurl", "video/mp4"]
        }
    }]);
    var n = t.prototype;
    return n.addVideoEventListeners = function(e = this._videoElement) {
        e.addEventListener(ri.LOADED_METADATA, e => {
            this.fire(ri.LOADED_METADATA, e)
        }), e.addEventListener("webkitplaybacktargetavailabilitychanged", e => {
            switch (e.availability) {
                case "available":
                    this._available || (this._available = !0, this.fire(si.AIRPLAY_AVAILABLE));
                    break;
                case "not-available":
                    this._available && (this._available = !1, this.fire(si.AIRPLAY_UNAVAILABLE))
            }
        }), e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", e => {
            if (e.target.webkitCurrentPlaybackTargetIsWireless) return this._active = !0, void this.fire(si.AIRPLAY_ACTIVATED);
            this._active = !1, this.fire(si.AIRPLAY_DEACTIVATED)
        })
    }, n.showPicker = function() {
        this._videoElement.webkitShowPlaybackTargetPicker(), this.loadMetadata().then(() => this._videoElement.webkitShowPlaybackTargetPicker()).catch(() => {})
    }, n.loadMetadata = function() {
        return this._videoElement.readyState >= 1 ? Promise.resolve() : new Promise((e, t) => {
            this._videoElement.addEventListener(ri.LOADED_METADATA, () => {
                e()
            }), this._videoElement.src = this.getFile().src
        })
    }, r(t, [{
        key: "element",
        get: function() {
            return this._videoElement
        },
        set: function(e) {
            if (!(e instanceof HTMLVideoElement)) throw new TypeError("The element for AirPlay must be a <video>.");
            e !== this._videoElement && (this.addVideoEventListeners(e), this._videoElement = e, this._videoElement.setAttribute("x-webkit-airplay", "allow"))
        }
    }]), t
}(ni);
const fi = (() => {
        const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./);
        return !!e && {
            major: parseInt(e[1], 10),
            minor: parseInt(e[2], 10)
        }
    })(),
    _i = function(e) {
        for (let t = 0, n = this.length; t < n; t++)
            if (this[t].id === `${e}`) return this[t];
        return null
    };

function pi(e = []) {
    return e.item = function(e) {
        return this[e]
    }, e.getTrackById = _i, e
}

function mi() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function vi(e) {
    return mi() - e
}

function gi() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ (16 * Math.random() >> e) / 4).toString(16))
}

function yi(e) {
    const t = window.atob(e),
        n = t.length,
        r = new Uint8Array(n);
    for (let i = 0; i < n; i++) r[i] = t.charCodeAt(i);
    return r
}

function Ei(e, t, n, r) {
    let i = 0,
        s = 0,
        o = 0,
        a = 0;
    const u = e,
        c = t,
        l = n / r;
    return u / c >= l ? (s = c, i = (l * c).toFixed(2)) : (i = u, s = (u / l).toFixed(2)), o = Math.max((u - i) / 2, 0), a = Math.max((c - s) / 2, 0), {
        width: i,
        height: s,
        left: o,
        top: a
    }
}

function Si(e) {
    const t = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find(e => void 0 !== e);
    return void 0 !== t ? !!t : e.webkitDisplayingFullscreen
}

function Ti(e, t) {
    let n = e;
    return t && (n += `;codecs="${t}"`), n
}

function bi(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function Ai(e, t) {
    return e && e.tests && e.tests[t] ? e.tests[t] : null
}

function Ii(e) {
    return e && "ML" === e.displayName
}
let wi = function(e, t) {
    this.name = e, this.message = t, Object.freeze(this)
};
const Ri = new WeakMap;
let Pi = function() {
    function e(e, t = {}) {
        const n = parseFloat(e);
        if (isNaN(n)) throw new TypeError("Time must be a number.");
        if (n < 0) throw new TypeError("Time must be a positive number.");
        this.time = e, this.data = t, this.id = gi();
        try {
            const n = "undefined" == typeof VTTCue ? TextTrackCue : VTTCue;
            this.vttCue = new n(e, e + .25, JSON.stringify(t)), this.vttCue.id = this.id
        } catch (fl) {
            throw new wi("CuePointsNotSupported", "Cue points are not supported in this browser.")
        }
        Ri.set(this.vttCue, this), Object.freeze(this)
    }
    return e.fromVTTCue = function(t) {
        if (Ri.has(t)) return Ri.get(t);
        let n = {};
        try {
            n = JSON.parse(t.text)
        } catch (fl) {}
        return new e(t.startTime, n)
    }, e
}();

function Di(e, t, n) {
    let r;
    try {
        document.removeChild({})
    } catch (fl) {
        r = Object.create(Object.getPrototypeOf(fl), {
            name: {
                value: t,
                configurable: !0,
                writable: !0
            },
            code: {
                value: e,
                configurable: !0,
                writable: !0
            },
            message: {
                value: n,
                configurable: !0,
                writable: !0
            },
            toString: {
                value: () => `${t}: DOM Exception ${e}`,
                configurable: !0,
                writable: !0
            }
        })
    }
    return Object.freeze(r)
}
const ki = (e, t) => {
    if (!e || void 0 === e[t]) throw Di(1, "INDEX_SIZE_ERR");
    return e[t]
};

function Oi(e = [], t = []) {
    return Object.freeze({
        get length() {
            return e.length
        },
        start: t => ki(e, t),
        end: e => ki(t, e),
        [Symbol.iterator]: () => function(e, t) {
            let n = 0;
            return {
                [Symbol.iterator]() {
                    return this
                },
                next: () => n < e.length ? {
                    done: !1,
                    value: t ? [e[n], t[n++]] : e[n++]
                } : {
                    done: !0
                }
            }
        }(e, t)
    })
}
Oi.from = function(e) {
    if (!(e instanceof TimeRanges)) throw new TypeError("Can only create a TelecineTimeRange from a TimeRanges object.");
    const t = [],
        n = [];
    for (let r = 0, i = e.length; r < i; r++) t.push(e.start(r)), n.push(e.end(r));
    return Oi(t, n)
};
const Ci = "DRMFailure",
    Li = "MediaUrlBadRequest",
    Ni = "PlayInterrupted",
    Mi = "TextTracksNotSupported";

function xi() {}
const Fi = document.createElement("video"),
    Ui = {
        "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl",
        "video/mp4": 'video/mp4; codecs="avc1.64001E"',
        "video/webm": 'video/webm; codecs="vp8, vorbis"',
        "video/x-flv": 'video/x-flv; codecs="vp6"'
    },
    ji = function() {
        const e = "undefined" == typeof TextTrack ? {} : TextTrack;
        return {
            disabled: "DISABLED" in e ? e.DISABLED : "disabled",
            hidden: "HIDDEN" in e ? e.HIDDEN : "hidden",
            showing: "SHOWING" in e ? e.SHOWING : "showing"
        }
    }(),
    Bi = function() {
        const e = document.createElement("track");
        return "track" in e && "oncuechange" in e.track
    }(),
    Vi = new WeakMap;
let Hi = function() {
    function e(e, t = {}) {
        this._element = e, this._options = t, this._telecineVideo = null, this._currentFile = null, this._externalDisplays = [], rn(this), this.on(ri.LOADED_METADATA, () => this._initMediaSessionHandlers()), this.on(ri.PLAY, () => this._initMediaSessionMetadata());
        let n = e.querySelector("video");
        n || (n = document.createElement("video"), n.preload = "none", this._element.appendChild(n)), n.setAttribute("tabindex", "-1"), this._video = n, t.playRequest && (this._playRequest = t.playRequest, this._playRequest.video = n), t.htmlScanner && t.htmlScanner.controls && (this._video.controls = !0), this._boundHandleVideoEvent = this.handleVideoEvent.bind(this), this.addVideoEventListeners(), this._preload = "none", this._externalDisplayActivated = !1, this._inFullscreen = !1, this._lastCurrentTime = -1
    }
    r(e, null, [{
        key: "displayName",
        get: function() {
            return "HTMLScanner"
        }
    }, {
        key: "supported",
        get: function() {
            return e.supportedVideoTypes.length > 0
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            const e = [];
            if ("function" != typeof Fi.canPlayType) return e;
            for (const t in Ui) {
                const n = Ui[t];
                ke.android && "application/vnd.apple.mpegurl" === t || (ke.android && !ke.mobileAndroid && "video/mp4" === t && ke.android instanceof String ? parseInt(ke.android.split(".")[0], 10) > 3 && e.push(t) : Fi.canPlayType(n).replace(/^no$/, "") && e.push(t))
            }
            return e
        }
    }, {
        key: "supportedAudioTypes",
        get: function() {
            return []
        }
    }, {
        key: "supportedExternalDisplays",
        get: function() {
            return [di]
        }
    }, {
        key: "supportsSettingVolume",
        get: function() {
            if (ke.android || ke.iOS || ke.iPadOS) return !1;
            const e = Fi.volume;
            return Fi.volume = .5 * e, Fi.volume !== e
        }
    }, {
        key: "supportsTextTracks",
        get: function() {
            return void 0 !== Fi.textTracks && Fi.textTracks instanceof TextTrackList
        }
    }, {
        key: "supportsPlaybackRate",
        get: function() {
            if (ke.android && fi && fi.major < 52) return !1;
            const e = Fi.playbackRate;
            Fi.playbackRate = .5 * e;
            const t = e !== Fi.playbackRate;
            return Fi.playbackRate = e, t
        }
    }]);
    var t = e.prototype;
    return t.deactivate = function() {
        this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")), this.removeVideoEventListeners(), this.removeSnapshot(), this._video.style.display = "none"
    }, t.reactivate = function() {
        this.addVideoEventListeners(), this._video.style.display = ""
    }, t.addVideoEventListeners = function(e = this._video) {
        Object.keys(ri).forEach(t => {
            const n = ri[t];
            e.addEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.removeVideoEventListeners = function(e = this._video) {
        Object.keys(ri).forEach(t => {
            const n = ri[t];
            e.removeEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.play = function(e) {
        return this._playRequest.start(e).catch(e => {
            throw this._onPlayError(e), e
        })
    }, t._onPlayError = function(e) {
        this.fire(ri.ERROR, new wi(null == e ? void 0 : e.name, null == e ? void 0 : e.message))
    }, t.pause = function() {
        this._playRequest.cancel(), this._video.pause()
    }, t.onpause = function() {}, t.ontimeupdate = function() {
        this._lastCurrentTime = this.currentTime
    }, t.addTextTrack = function(e) {
        let t, n;
        e.src ? (t = document.createElement("track"), t.kind = e.kind, t.src = e.src, t.id = `telecine-track-${e.id}`, t.srclang = e.language, t.label = e.label, this._video.appendChild(t), n = t.track) : (n = this._video.addTextTrack(e.kind, e.label, e.language), this._textTracks = this._textTracks || {}, this._textTracks[`telecine-track-${e.id}`] = n), n.addEventListener("cuechange", () => e.dispatchEvent("cuechange")), this._video.addEventListener("timeupdate", () => {
            Si(this._video) && (e.mode = n.mode)
        });
        const r = () => {
                const t = ke.iOS && Si(this._video);
                !e._modeHasBeenSet || t ? e.mode = n.mode : n.mode = ji[e.mode]
            },
            i = [];
        if (t ? t.addEventListener("load", r) : r(), ["loadeddata", "seeking"].forEach(e => {
                this._video.addEventListener(e, r), i.push([e, r])
            }), e._modeHasBeenSet && (n.mode = ji[e.mode]), !Bi) {
            let t = [];
            const r = () => {
                if (n && "disabled" !== ji[n.mode]) {
                    if (t.length !== n.activeCues.length) return e.dispatchEvent("cuechange"), void(t = Array.from(n.activeCues));
                    for (let r = 0, i = n.activeCues.length; r < i; r++)
                        if (n.activeCues[r].startTime !== t[r].startTime) return e.dispatchEvent("cuechange"), void(t = Array.from(n.activeCues))
                }
            };
            this._video.addEventListener("timeupdate", r), i.push(["timeupdate", r])
        }
        return Vi.set(e, i), n
    }, t.removeTextTrack = function(e) {
        const t = this._video.querySelector(`#telecine-track-${e.id}`);
        t && this._video.removeChild(t);
        const n = Vi.get(e);
        Array.isArray(n) && n.forEach(([e, t]) => {
            this._video.removeEventListener(e, t)
        })
    }, t.getCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t ? Array.from(t.cues) : []
    }, t.getActiveCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t && t.activeCues ? Array.from(t.activeCues) : []
    }, t.setModeForTrack = function(e, t) {
        const n = this.getTrackById(`telecine-track-${e.id}`);
        return n && n.mode !== ji[t] && (n.mode = ji[t], Bi || "disabled" === t || e.dispatchEvent("cuechange")), this
    }, t.setSrcForTrack = function(e, t) {
        const n = this._video.querySelector(`#telecine-track-${e.id}`);
        return n && null === n.track.cues && (n.src = t), this
    }, t._createChapterCue = function(e, t, n = null) {
        let r;
        this._chaptersTrack || (this._chaptersTrack = this._video.addTextTrack("chapters"), this._chaptersTrack.mode = "hidden");
        const i = e.timecode,
            s = n ? n.timecode : t,
            o = window.VTTCue || window.TextTrackCue;
        try {
            r = new o(i, s, e.title)
        } catch (fl) {
            throw new wi("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        r.size = (s - i) / t, r.id = i, this._chaptersTrack.addCue(r)
    }, t.addChapter = function(e, t) {
        const n = this.video.chapters,
            r = {
                timecode: e,
                title: t
            };
        n.push(r), n.sort((e, t) => e.timecode - t.timecode);
        const i = n[n.indexOf(r) + 1];
        this._createChapterCue(r, this.video.duration, i), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t.removeChapter = function(e) {
        try {
            this._chaptersTrack.removeCue(e)
        } catch (fl) {
            throw new wi("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        const t = this.video.chapters.find(t => t.timecode === e.timecode);
        this.video.chapters.splice(t, 1), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t._updateChapterCues = function(e, t) {
        for (let n = 0; n < e.cues.length; n++) {
            let r = e.cues[n],
                i = e.cues[n + 1];
            const s = i ? i.startTime : t;
            r.endTime = s, r.size = (s - r.startTime) / t
        }
        this.fire(oi.CHAPTER_CUES_UPDATED)
    }, t.addChapters = function(e, t) {
        0 !== e.length && t && (e = e.filter(e => this._isValidChapter(e, t))).sort((e, t) => e.timecode - t.timecode).forEach((n, r) => this._createChapterCue(n, t, e[r + 1]))
    }, t.addCuePoint = function(e, t = {}) {
        if (this._cuePointTrack || (this._cuePointTrack = this._video.addTextTrack("metadata"), this._cuePointTrack.mode = "hidden", this._cuePointTrack.addEventListener("cuechange", e => {
                Array.from(e.target.activeCues).forEach(e => {
                    this.fire(oi.CUE_POINT, Pi.fromVTTCue(e))
                })
            }), this._video.addEventListener("canplay", e => {
                this._cuePointTrack.mode = "hidden"
            })), e = parseFloat(e), isNaN(e)) throw new TypeError("Time must be a number.");
        if (e < 0 || e >= this.duration) throw new TypeError("Time must be a positive number less than the duration of the video.");
        const n = new Pi(e, t);
        return this._cuePointTrack.addCue(n.vttCue), n
    }, t.removeCuePoint = function(e) {
        if (!e) throw new wi("InvalidCuePoint", "The specified cue point is not valid.");
        return this._cuePointTrack.removeCue(e.vttCue), !0
    }, t.removeAllCuePoints = function() {
        return this._cuePointTrack && this._cuePointTrack.length && Array.from(this._cuePointTrack.cues).forEach(e => {
            this._cuePointTrack.removeCue(e)
        }), !0
    }, t.requestPictureInPicture = function() {
        try {
            const e = this;
            return function(t, n) {
                var r = function() {
                    if (e._video.readyState < 1) return function(e, t) {
                        return e && e.then ? e.then(xi) : Promise.resolve()
                    }(e._initPreload())
                }();
                return r && r.then ? r.then(n) : n()
            }(0, (function() {
                switch (e.pictureInPictureSupportType) {
                    case "pip-api":
                        return e._video.requestPictureInPicture();
                    case "webkit-presentation-mode":
                        return e._video.webkitSetPresentationMode("picture-in-picture");
                    default:
                        throw new Error("Picture-in-picture is not supported by this browser")
                }
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, t._initPreload = function() {
        return this.preload = "auto", new Promise(e => {
            this.once(ri.LOADED_METADATA, e)
        })
    }, t.exitPictureInPicture = function() {
        try {
            const e = this;
            switch (e.pictureInPictureSupportType) {
                case "pip-api":
                    return document.exitPictureInPicture();
                case "webkit-presentation-mode":
                    return e._video.webkitSetPresentationMode("inline");
                default:
                    throw new Error("Picture-in-picture is not supported by this browser")
            }
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, t.onerror = function() {
        if (!this._video.error) return !1;
        switch (this._video.error.code) {
            case this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return this._fireVideoError("MediaSrcNotSupportedError", "The media was not suitable."), this._switchToNextFile(), !1;
            case this._video.error.MEDIA_ERR_DECODE:
                return -1 !== this._lastCurrentTime && ke.iOS ? (this._video.load(), this.currentTime = this._lastCurrentTime, this._lastCurrentTime = -1, !1) : (this._fireVideoError("MediaDecodeError", "The media could not be decoded."), this._switchToNextFile(), !1);
            case this._video.error.MEDIA_ERR_NETWORK:
                return this._fireVideoError("MediaNetworkError", "A network error ocurred while fetching the media."), !1;
            case this._video.error.MEDIA_ERR_ABORTED:
                return this._fireVideoError("MediaAbortedError", "The user agent aborted the fetching of the media."), !1;
            default:
                return this._fireVideoError("MediaUnknownError", "An unknown error occurred."), !1
        }
    }, t._fireVideoError = function(e, t) {
        this.fire(ri.ERROR, new wi(e, t))
    }, t.onended = function() {
        if (this._video.paused || this._video.pause(), this.currentTime < this._video.duration) return !1
    }, t.onwaiting = function() {
        return !1
    }, t.onwebkitbeginfullscreen = function() {
        this._inFullscreen = !0
    }, t.onwebkitendfullscreen = function() {
        this._inFullscreen = !1
    }, t.onwebkitpresentationmodechanged = function() {
        this.fire(this.pictureInPictureActive ? ri.ENTER_PICTURE_IN_PICTURE : ri.LEAVE_PICTURE_IN_PICTURE)
    }, t.shouldHandleVideoEvent = function(e) {
        return !0
    }, t.handleVideoEvent = function(e) {
        e.target === this._video && !1 !== this.shouldHandleVideoEvent(e) && ("function" == typeof this[`on${e.type}`] && !1 === this[`on${e.type}`](e) || this.fire(e.type))
    }, t.swapVideo = function(e, t) {
        const n = e.paused;
        this.removeVideoEventListeners(e), e.parentElement.replaceChild(t, e), e.pause(), t.currentTime = e.currentTime, n || t.play(), this.addVideoEventListeners(t), this._video = t
    }, t.onexternaldisplayactivated = function(e) {
        this._externalDisplayActivated || (this._video !== e.element && (this._originalVideo = this._video, this.swapVideo(this._video, e.element)), this._externalDisplayActivated = !0)
    }, t.onexternaldisplaydeactivated = function(e) {
        this._externalDisplayActivated && (this._originalVideo && (this.swapVideo(e.element, this._originalVideo), this._originalVideo = null), this._externalDisplayActivated = !1)
    }, t.setVideoSrc = function(e) {
        this._video.src = e
    }, t.canSeekTo = function(e) {
        const t = this.duration;
        if (t && e > t && (e = t), this._video.seekable.length > 0)
            for (let n = 0, r = this._video.seekable.length; n < r; n++)
                if (this._video.seekable.start(n) <= e && this._video.seekable.end(n) >= e) return !0;
        return !1
    }, t.seekToTime = function(e) {
        return this.canSeekTo(e) ? (this._video.currentTime = e, Promise.resolve(this._video.currentTime)) : new Promise((t, n) => {
            const r = () => {
                this.canSeekTo(e) && (Object.keys(ri).forEach(e => {
                    const t = ri[e];
                    this._video.removeEventListener(t, r)
                }), this._video.currentTime = e, t(this._video.currentTime))
            };
            Object.keys(ri).forEach(e => {
                const t = ri[e];
                this._video.addEventListener(t, r)
            })
        })
    }, t.takeSnapshot = function() {
        let e = this._element.querySelector("[telecine-snapshot]");
        e || (e = document.createElement("canvas"), e.setAttribute("telecine-snapshot", ""), this._element.appendChild(e)), e.setAttribute("width", `${this._element.clientWidth}px`), e.setAttribute("height", `${this._element.clientHeight}px`), e.style.display = "";
        const {
            width: t,
            height: n,
            left: r,
            top: i
        } = Ei(this._video.clientWidth, this._video.clientHeight, this._video.videoWidth, this._video.videoHeight);
        e.style.cssText = `position:absolute;width:${t}px;height:${n}px;left:${r}px;top:${i}px`;
        const s = e.getContext("2d");
        e.width > 0 && e.height > 0 && s.drawImage(this._video, 0, 0, e.width, e.height)
    }, t.removeSnapshot = function() {
        const e = this._element.querySelector("[telecine-snapshot]");
        e && (e.style.display = "none")
    }, t.getTrackById = function(e) {
        if (this._textTracks && this._textTracks[e]) return this._textTracks[e];
        if ("function" == typeof this._video.textTracks.getTrackById) return this._video.textTracks.getTrackById(e);
        const t = document.getElementById(e);
        return t ? t.track : null
    }, t.initDrm = function() {
        const e = this._telecineVideo.drmHandler;
        e && e.init(this)
    }, t.showExternalDisplayPicker = function(e) {
        if (!this._externalDisplays.length) throw new wi("ExternalDisplayUnvailable", "No external displays are available.");
        if (!e) return void this._externalDisplays[0].showPicker();
        const t = this._externalDisplays.filter(t => t.constructor.displayName.replace("ExternalDisplay", "") === e)[0];
        if (!t) throw new wi("InvalidExternalDisplay", "The specified external display is not available.");
        t.showPicker()
    }, t._pickFile = function() {
        return this._files.length < 1 ? null : this._files.slice(0).sort((e, t) => e.priority - t.priority)[0]
    }, t._updateCurrentFile = function() {
        const e = this._pickFile();
        e ? this.currentFile = e : this.fire(oi.SCANNER_ERROR, {
            reason: "all files failed"
        })
    }, t._isValidChapter = function(e, t) {
        return void 0 !== e.timecode && e.timecode >= 0 && e.timecode <= t && void 0 !== e.title
    }, t._switchToNextFile = function() {
        const e = this._files.indexOf(this._currentFile);
        this._files.splice(e, 1), this._updateCurrentFile()
    }, t._initMediaSessionMetadata = function() {
        if (!("mediaSession" in navigator)) return;
        const e = {
            title: this._telecineVideo.title,
            artist: this._telecineVideo.subtitle,
            artwork: []
        };
        this._telecineVideo.metadata.thumbnail && e.artwork.push({
            src: this._telecineVideo.metadata.thumbnail
        }), navigator.mediaSession.metadata = new MediaMetadata(e)
    }, t._initMediaSessionHandlers = function() {
        var e;
        "function" == typeof(null == (e = navigator.mediaSession) ? void 0 : e.setActionHandler) && (navigator.mediaSession.setActionHandler("play", () => {
            this.play().then(() => this.fire(ci.MEDIASESSION_PLAY)).catch(this._onPlayError.bind(this))
        }), navigator.mediaSession.setActionHandler("pause", () => {
            this.pause(), this.fire(ci.MEDIASESSION_PAUSE)
        }), navigator.mediaSession.setActionHandler("seekforward", () => {
            this.currentTime = Math.min(this.duration, this.currentTime + 10), this.fire(ci.MEDIASESSION_SEEK_FORWARD)
        }), navigator.mediaSession.setActionHandler("seekbackward", () => {
            this.currentTime = Math.max(0, this.currentTime - 10), this.fire(ci.MEDIASESSION_SEEK_BACKWARD)
        }))
    }, r(e, [{
        key: "chaptersTrack",
        get: function() {
            return this._chaptersTrack
        }
    }, {
        key: "manifest",
        get: function() {
            return this._manifest
        }
    }, {
        key: "buffered",
        get: function() {
            return Oi.from(this._video.buffered)
        }
    }, {
        key: "cuePoints",
        get: function() {
            var e, t;
            return (null == (e = this._cuePointTrack) ? void 0 : e.cues) && "function" == typeof(null == (t = this._cuePointTrack) ? void 0 : t.cues[Symbol.iterator]) ? Array.from(this._cuePointTrack.cues).map(e => Pi.fromVTTCue(e)) : []
        }
    }, {
        key: "currentFile",
        get: function() {
            return this._currentFile
        },
        set: function(t) {
            const n = !this._video.paused,
                r = this.currentTime,
                i = !this._currentFile || t.video.id !== this._currentFile.video.id;
            if (i || this.takeSnapshot(), this._currentFile = t, i && (this._video.preload = this._preload), this.constructor === e && this._video.readyState > 0 && (this._video.currentTime = 0), (ke.iOS || ke.android) && this._currentFile.video.title) {
                let e = this._currentFile.video.title;
                this._currentFile.video.subtitle && (e = `${e} ${this._currentFile.video.subtitle}`), this._video.setAttribute("title", e)
            } else this._video.removeAttribute("title");
            this.setVideoSrc(this._currentFile.src, i), this.fire(oi.CURRENT_FILE_CHANGE, t), ke.iOS && !i && this.play().catch(this._onPlayError.bind(this)), this.constructor !== e || i ? n && this.play().catch(this._onPlayError.bind(this)) : (this.seekToTime(r).then(e => (n && this.play().catch(this._onPlayError.bind(this)), e)).catch(() => {}), this.once("canplay", () => this.removeSnapshot()), this.once("playing", () => this.removeSnapshot()))
        }
    }, {
        key: "currentTime",
        get: function() {
            return this._video.currentTime
        },
        set: function(e) {
            this.seekToTime(e)
        }
    }, {
        key: "duration",
        get: function() {
            return this._video.duration
        }
    }, {
        key: "ended",
        get: function() {
            return this._video.ended
        }
    }, {
        key: "externalDisplayAvailable",
        get: function() {
            return this._externalDisplays.some(e => e.available)
        }
    }, {
        key: "externalDisplayActive",
        get: function() {
            return this._externalDisplays.some(e => e.active)
        }
    }, {
        key: "loop",
        get: function() {
            return this._video.loop
        },
        set: function(e) {
            this._video.loop = e
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return null
        }
    }, {
        key: "muted",
        get: function() {
            return this._video.muted
        },
        set: function(e) {
            this._video.muted = e
        }
    }, {
        key: "playsinline",
        get: function() {
            return this._video.playsinline
        },
        set: function(e) {
            this._video.playsinline = e, e ? this._video.setAttribute("playsinline", "") : this._video.removeAttribute("playsinline")
        }
    }, {
        key: "paused",
        get: function() {
            return this._video.paused
        }
    }, {
        key: "defaultPlaybackRate",
        get: function() {
            return this._video.defaultPlaybackRate
        },
        set: function(e) {
            this._video.defaultPlaybackRate = e
        }
    }, {
        key: "playbackRate",
        get: function() {
            return this._video.playbackRate
        },
        set: function(e) {
            this._video.playbackRate = e
        }
    }, {
        key: "played",
        get: function() {
            return this._video.played
        }
    }, {
        key: "seekable",
        get: function() {
            return this._video.seekable
        }
    }, {
        key: "seeking",
        get: function() {
            return this._video.seeking
        }
    }, {
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._video.preload = e, this._preload = e
        }
    }, {
        key: "autoPictureInPicture",
        get: function() {
            return this._video.autoPictureInPicture
        },
        set: function(e) {
            this._video.autoPictureInPicture = e
        }
    }, {
        key: "disablePictureInPicture",
        get: function() {
            return this._video.disablePictureInPicture
        },
        set: function(e) {
            this._video.disablePictureInPicture = e
        }
    }, {
        key: "pictureInPictureActive",
        get: function() {
            return "picture-in-picture" === this._video.webkitPresentationMode || !!document.pictureInPictureElement
        }
    }, {
        key: "pictureInPictureEnabled",
        get: function() {
            if (this.disablePictureInPicture) return !1;
            switch (this.pictureInPictureSupportType) {
                case "pip-api":
                    return document.pictureInPictureEnabled;
                case "webkit-presentation-mode":
                    return !0;
                default:
                    return !1
            }
        }
    }, {
        key: "pictureInPictureSupportType",
        get: function() {
            return "pictureInPictureEnabled" in document ? "pip-api" : !("function" != typeof this._video.webkitSetPresentationMode || !this._video.webkitSupportsPresentationMode("picture-in-picture")) && "webkit-presentation-mode"
        }
    }, {
        key: "video",
        get: function() {
            return this._telecineVideo
        },
        set: function(e) {
            if (this.reactivate(), this._telecineVideo !== e) {
                if (this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")), this.removeAllCuePoints(), this._telecineVideo = e, this._files = e.files.filter(e => -1 !== this.constructor.supportedVideoTypes.indexOf(e.mime)), this._telecineVideo.on("filesrcupdate", e => {
                        e === this._currentFile && this._updateCurrentFile()
                    }), this._telecineVideo.on("texttracksrcupdate", e => {
                        this.video.currentScanner && this.video.currentScanner.setSrcForTrack(e, e.src)
                    }), this._options.externalDisplays && this._options.externalDisplays.length) {
                    this._externalDisplays = [];
                    let t = this.constructor.supportedExternalDisplays;
                    Array.isArray(t) || (t = []);
                    const n = t.map(e => e.displayName);
                    this._options.externalDisplays.filter(e => e.supported && -1 !== n.indexOf(e.displayName)).forEach(t => {
                        const n = new t(e),
                            r = t.displayName.replace("ExternalDisplay", "");
                        n.on(ri.LOADED_METADATA, e => this.fire(ri.LOADED_METADATA, e)), n.on("available", () => this.fire(ii.AVAILABLE, {
                            type: r
                        })), n.on("unavailable", () => this.fire(ii.UNAVAILABLE, {
                            type: r
                        })), n.on("activated", () => {
                            "function" == typeof this.onexternaldisplayactivated && this.onexternaldisplayactivated(n), this.fire(ii.ACTIVATED, {
                                type: r
                            })
                        }), n.on("deactivated", () => {
                            "function" == typeof this.onexternaldisplaydeactivated && this.onexternaldisplaydeactivated(n), this.fire(ii.DEACTIVATED, {
                                type: r
                            })
                        }), this._externalDisplays.push(n)
                    })
                }
                this._updateCurrentFile(), ke.iOS && this._externalDisplays.forEach(e => {
                    "AirPlay" === e.constructor.displayName && (e.element = this._video)
                }), this.initDrm()
            }
        }
    }, {
        key: "videoElement",
        get: function() {
            return this._video
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._video.videoHeight
        }
    }, {
        key: "volume",
        get: function() {
            return R(this._video.volume)
        },
        set: function(e) {
            this._video.volume = w(e)
        }
    }, {
        key: "readyState",
        get: function() {
            return this._video.readyState
        }
    }]), e
}();

function Xi(e, t = []) {
    if (0 === e.length) return 0;
    let n = 0,
        r = 0;
    for (let i = 0; i < e.length; i++) {
        const s = t[i] || 1;
        r += s, n += e[i] * s
    }
    return n / r
}

function qi(e) {
    e.sort((e, t) => e - t);
    const t = Math.floor(e.length / 2);
    return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
}

function Gi() {
    return "undefined" != typeof performance ? performance.now() : Date.now()
}
let Wi = function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    return a(t, e), t
}(d(Error));

function Ki() {}
const Yi = [],
    $i = [],
    zi = [];

function Qi(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const Ji = [];
let Zi = function() {
        function t(e = {}) {
            const {
                retryCount: t = 3,
                parallel: n = 1,
                includeWithSpeeds: r = !0,
                timeout: i = 0,
                retryAbortErrors: s = !0
            } = e;
            this._queue = [], this._activeRequests = new Set, this._retries = new WeakMap, this._retryCount = t, this._running = !1, this._processingQueue = !1, this._parallel = n, this._includeWithSpeeds = r, this._timeout = i, this._retryAbortErrors = s, this._initialize()
        }
        t.getPercentileSpeed = function(e = 5, t = .8) {
            return function(e, t) {
                if (e.sort(), 0 === e.length) return 0;
                if (t <= 0) return e[0];
                if (t >= 1) return e[e.length - 1];
                const n = e.length * t,
                    r = Math.floor(n),
                    i = r + 1,
                    s = n % 1;
                return i >= e.length ? e[r] : e[r] * (1 - s) + e[i] * s
            }(Yi.slice(-e), t)
        }, t.getAverageSpeed = function(e = 5, t = []) {
            return Xi(Yi.slice(-e), t)
        }, t.getHarmonicAverageSpeed = function(e = 5) {
            return function(e) {
                if (0 === e.length) return 0;
                let t = 0;
                for (let n = 0; n < e.length; n++) t += 1 / e[n];
                return e.length / t
            }(Yi.slice(-e))
        }, t.getVolatilityScaler = function(e = 5) {
            const t = Yi.slice(-e);
            if (t.length < 3) return null;
            const n = Xi(t, []);
            return Math.min.apply(Math, p(t)) / n
        }, t.getMedianSpeed = function(e = 5) {
            return qi(Yi.slice(-e))
        }, t.getResponseSpeeds = function() {
            return Yi
        }, t.getProgressSpeeds = function() {
            return Ji
        }, t.getFailedSegments = function() {
            return $i
        }, t.getSuccessfulSegments = function() {
            return zi
        };
        var n = t.prototype;
        return n.add = function(e, t) {
            return new Promise((n, r) => {
                const i = this._createSegmentInfo(e, n, r);
                this._addSegmentToQueue(i, t), this._running && !this._processingQueue && this._processQueue()
            })
        }, n.start = function() {
            this._running || (this._running = !0, this._processQueue())
        }, n.stop = function() {
            this._running = !1
        }, n.abort = function(e = null) {
            this._queue.filter(t => !e || e === t.stream).forEach(e => {
                e.reject(new Wi("Stream manually aborted")), this.fire("downloadabort", e.identifier)
            }), this._queue = this._queue.filter(t => e && e !== t.stream), this._activeRequests.forEach(t => {
                e && e !== t.stream || t.request.abort()
            })
        }, n._insertAtPosition = function(e) {
            let t = 0;
            for (; t < this._queue.length && !(this._queue[t].priority > e.priority); t++);
            this._queue.splice(t, 0, e)
        }, n._initialize = function() {
            this._pendingFetchMap = new WeakMap, rn(this), window.addEventListener("online", () => {
                this.start(), this._waitUntilOnline && (this._waitUntilOnline.resolve(), this._waitUntilOnline = null)
            }), window.addEventListener("offline", () => {
                this.stop(), this.abort(), this._waitUntilOnline = new D
            })
        }, n._addSegmentToQueue = function(e, t) {
            e.hasOwnProperty("priority") ? this._insertAtPosition(e) : this._queue[t ? "unshift" : "push"](e)
        }, n._processQueue = function() {
            if (!this._running) return;
            this._processingQueue = !0;
            const e = this._parallel - this._activeRequests.size;
            for (let t = 0; t < e; t++) this._fetchOne()
        }, n._createSegmentInfo = function(e, t, n) {
            let r = e;
            return e.id && (r = e.id), o(o({}, e), {}, {
                identifier: r,
                resolve: t,
                reject: n
            })
        }, n._continueProcessingQueue = function() {
            0 !== this._activeRequests.size || 0 !== this._queue.length ? this._activeRequests.size < this._parallel && this._processQueue() : this._processingQueue = !1
        }, n._fetchOne = function() {
            if (0 === this._queue.length) return void(this._processingQueue = !1);
            const t = this._queue.shift(),
                {
                    url: n,
                    byteRange: r,
                    isInitSegmentRequest: i,
                    identifier: s,
                    timeout: o
                } = t,
                a = {
                    stream: t.stream,
                    data: {
                        url: n,
                        isInitSegmentRequest: i,
                        requestSendTime: Gi(),
                        uuid: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ 16 * Math.random() >> e / 4).toString(16))
                    }
                };
            let u = this._timeout;
            const c = parseInt(o, 10);
            c >= 0 && (u = c);
            const l = {
                url: n,
                type: e.SEGMENT,
                responseType: _e.ARRAY_BUFFER,
                retry: this._retryCount,
                hooks: {
                    beforeRetry: [this._beforeRetry.bind(this)]
                },
                onDownloadProgress: this._makeOnDownloadProgress(s, a),
                headers: r && {
                    Range: `bytes=${r}`
                },
                retryAbortErrors: this._retryAbortErrors,
                timeout: u
            };
            this.fire("downloadstart", s), a.request = oe(l).then(this._makeOnRequestLoad(a, t)).catch(this._makeOnRequestError(a, t)), this._activeRequests.add(a)
        }, n._beforeRetry = function() {
            try {
                const e = this;
                return function(t) {
                    var n = function() {
                        if (e._waitUntilOnline) return function(e, t) {
                            return e && e.then ? e.then(Ki) : Promise.resolve()
                        }(e._waitUntilOnline)
                    }();
                    if (n && n.then) return n.then(Ki)
                }()
            } catch (fl) {
                return Promise.reject(fl)
            }
        }, n._makeOnDownloadProgress = function(e, t) {
            let n = 0,
                r = 0,
                i = Gi();
            return s => {
                if (s.lengthComputable) {
                    const o = 8 * (s.loaded - r),
                        a = Gi(),
                        u = a - i,
                        c = {
                            startTime: i,
                            length: u,
                            bitrate: o / (u / 1e3),
                            index: n
                        };
                    n > 0 && (Ji.length >= 100 && Ji.shift(), Ji.push(c)), i = a, r = s.loaded, n += 1, this._pendingFetchMap.set(t, {
                        bytesTotal: s.total,
                        bytesLoaded: s.loaded,
                        percent: s.loaded / s.total,
                        identifier: e
                    }), this.fire("progress", e)
                }
            }
        }, n._makeOnRequestLoad = function(e, t) {
            const n = this,
                r = Gi(),
                {
                    identifier: i,
                    resolve: s
                } = t;
            return function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (fl) {
                        return Promise.reject(fl)
                    }
                }
            }((function(o) {
                let a = Gi() - r;
                return Qi(o.arrayBuffer(), (function(r) {
                    return e.data.duration = Gi() - e.data.requestSendTime, n._activeRequests.delete(e), n._pendingFetchMap.delete(e), n._saveResponseSpeeds(t, a, r.byteLength), n.fire("downloadend", i, {
                        request: e,
                        response: o
                    }), zi.push({
                        url: e.data.url,
                        status: 200,
                        duration: e.data.duration
                    }), Qi(n._processBuffer(e, r), (function(e) {
                        s(r = e), n._continueProcessingQueue()
                    }))
                }))
            }))
        }, n._saveResponseSpeeds = function(e, t, n) {
            const r = e.includeWithBandwidthChecks,
                i = t / 1e3;
            if (n > 8e3) {
                const t = 8 * n;
                let s = t / i;
                if (e.excludeConnectTime && t <= 16e5) {
                    const e = (50 * Math.max(0, 1 - t / 16e5) + 150) / 1e3;
                    s = t / Math.max(.1, i - e)
                }
                Yi.length > 100 && Yi.shift(), this._includeWithSpeeds && r && Yi.push(s)
            }
        }, n._processBuffer = function(e, t) {
            return e.data.url && e.data.url.match(".ts$") ? this._feedMuxer(e, t) : Promise.resolve(new Uint8Array(t))
        }, n._feedMuxer = function(e, t) {
            try {
                const n = this;
                return function(e, t) {
                    var r = function() {
                        if (!n._transmuxer) return Qi(n._loadMux(), (function(e) {
                            n._transmuxer = new e({
                                keepOriginalTimestamps: !0
                            })
                        }))
                    }();
                    return r && r.then ? r.then(t) : t()
                }(0, (function() {
                    return new Promise(r => {
                        n._transmuxer.on("data", t => {
                            n._transmuxer.off("data");
                            let i = new Uint8Array(t.initSegment.byteLength + t.data.byteLength);
                            i.set(t.initSegment, 0), i.set(t.data, t.initSegment.byteLength), r(e.data.isInitSegmentRequest ? t.initSegment : i)
                        }), n._transmuxer.push(new Uint8Array(t)), n._transmuxer.flush()
                    })
                }))
            } catch (fl) {
                return Promise.reject(fl)
            }
        }, n._makeOnRequestError = function(e, t) {
            const {
                identifier: n,
                reject: r,
                size: i
            } = t;
            return t => {
                const s = Gi() - e.data.requestSendTime;
                if (e.data.duration = s, t instanceof B) $i.push({
                    url: e.data.url,
                    status: "abort",
                    duration: s
                }), this.fire("downloadabort", n);
                else if (t instanceof V) $i.push({
                    url: e.data.url,
                    status: t.response.status,
                    duration: s
                }), this.fire("downloaderror", n, t.response.status);
                else if (t instanceof X) {
                    if ($i.push({
                            url: e.data.url,
                            status: "timeout",
                            duration: s
                        }), i > 0 && t.timeoutMs > 0) {
                        let e = 8 * i / (t.timeoutMs / 1e3);
                        e *= .5, Yi.push(e)
                    }
                    this.fire("downloadtimeout", n, {
                        timeoutMs: t.timeoutMs
                    })
                }
                this._pendingFetchMap.delete(e), this._activeRequests.delete(e), r(t), this._continueProcessingQueue()
            }
        }, n._loadMux = function() {
            return import ("./mux-mp4.module.js").then(({
                default: e
            }) => e)
        }, r(t, [{
            key: "parallel",
            get: function() {
                return this._parallel
            },
            set: function(e) {
                this._parallel = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                const e = [];
                return this._activeRequests.forEach(t => {
                    if (this._pendingFetchMap.get(t)) {
                        const n = this._pendingFetchMap.get(t);
                        n.elapsedTime = Gi() - t.data.requestSendTime, e.push(n)
                    }
                }), e
            }
        }]), t
    }(),
    es = function() {
        function e(e) {
            rn(this), this._sorcerer = e, this._sourceBuffer = null, this._activeStreamIndex = null, this._needsStreamSwitch = !1, this._needInitSegment = !0, this._lastAppended = null, this._toRemove = [], this._streams = [], this._quotaExceeded = !1, this._quotaExceededTimer = null, this._appendingFinalSegment = !1, this._finalSegmentTime = void 0, this._addingInitSegment = !1, this._isFirstSegment = !0, this._bufferState = {}, this._boundHandleUpdateEnd = this._handleUpdateEnd.bind(this), this._sorcerer.on("durationset", this._onDurationSet.bind(this))
        }
        var t = e.prototype;
        return t.addStream = function(e) {
            e.on("segmentadd", () => this._process());
            const t = this._streams.push(e) - 1;
            e.index = t, null === this._activeStreamIndex && (this._setActiveIndex(t), this._needsStreamSwitch = !0)
        }, t.streamIndexAtTime = function(e) {
            return this._bufferState[void 0] ? {
                stream: this.activeStreamIndex
            } : this._bufferState[Math.floor(e / 6)]
        }, t.switchTo = function(e, t = !0, n = {}) {
            let r = e;
            "object" == typeof e && (r = e.index);
            let i = this._activeStreamIndex !== r;
            const s = i;
            if (!i && this._needsStreamSwitch && (i = !0), i) {
                this._needsStreamSwitch = !1;
                const e = this._activeStreamIndex,
                    n = this._streams[e];
                this.fire("streamchangestart", e, r), n && s && t && n.abort(), this._switchToIndex = r, this._setActiveIndex(r)
            }
            return this._process(), new Promise(e => {
                i ? this._resolveSwitchComplete = () => {
                    this._switchToIndex === r && (this._resolveSwitchComplete = null, e(), this.fire("streamchange", r, n))
                } : e()
            })
        }, t.isTimeInBuffer = function(e) {
            for (let t = 0; t < this._sourceBuffer.buffered.length; t++) {
                const n = this._sourceBuffer.buffered.start(t),
                    r = this._sourceBuffer.buffered.end(t);
                if (n <= e && r >= e) return !0
            }
            return !1
        }, t.hasAppendedFinalSegment = function() {
            return void 0 !== this._finalSegmentTime && this.isTimeInBuffer(this._finalSegmentTime)
        }, t.clear = function() {
            this._streams.forEach(e => e.clear())
        }, t.remove = function(e, t = this._sorcerer._mediaSource.duration) {
            return new Promise((n, r) => {
                this._toRemove.push([e, t, n]), this._process()
            })
        }, t.removeEventListeners = function() {
            this._sourceBuffer && this._sourceBuffer.removeEventListener("updateend", this._boundHandleUpdateEnd)
        }, t._onDurationSet = function() {
            const e = this._sorcerer._mediaSource.duration;
            let t = Math.floor(e / 6);
            t += 6 % e > 1 ? 1 : 0;
            for (let n = 0; n < t; n++) this._bufferState[n] = {
                stream: null,
                segment: n,
                type: "video"
            }
        }, t._attachEvents = function() {
            this._sourceBuffer.addEventListener("updateend", this._boundHandleUpdateEnd)
        }, t._setActiveIndex = function(e) {
            this._needInitSegment = !0, this._activeStreamIndex = e, this._sorcerer._frameDropper.streamIndex = e
        }, t._handleUpdateEnd = function() {
            this._checkEndOfStream(), this._updateBufferEnd(), this._process()
        }, t._checkEndOfStream = function() {
            if (this._appendingFinalSegment && this.endTime) return this._appendingFinalSegment = !1, this._finalSegmentTime = this.endTime, void this._sorcerer.checkEndOfStream();
            !this.activeStream.hasNextSegment() && this._finalSegmentTime > 0 && "open" === this._sorcerer._mediaSource.readyState && this._sorcerer.checkEndOfStream()
        }, t._updateBufferEnd = function() {
            this._lastAppended && (this.fire("appendbufferend", this._lastAppended), this._lastAppended = null, this._resolveSwitchComplete && this._resolveSwitchComplete())
        }, t._process = function() {
            if (this._sourceBuffer) {
                if (this.activeStream && "closed" !== this._sorcerer._mediaSource.readyState && !this._sourceBuffer.updating)
                    if (this._toRemove.length) this._removeBuffer();
                    else if (!this._quotaExceeded && !this._addingInitSegment) return this._needInitSegment ? (this._needInitSegment = !1, void this._appendInitSegment()) : void this._appendSegment()
            } else this.on("sourcebufferattach", this._process)
        }, t._removeBuffer = function() {
            const [e, t, n] = this._toRemove.shift(), r = e => {
                this._sourceBuffer.removeEventListener("updateend", r), n(), clearTimeout(this._quotaExceededTimer), this._quotaExceededTimer = setTimeout(() => {
                    this._quotaExceeded = !1, this._process()
                }, 5e3)
            };
            this._sourceBuffer.addEventListener("updateend", r), this._sourceBuffer.remove(e, t)
        }, t._appendInitSegment = function() {
            this._addingInitSegment = !0, this.activeStream.getInitSegment().then(e => (this._lastAppended = null, this._sourceBuffer.appendBuffer(e), this._addingInitSegment = !1, e)).catch(e => {
                this._needInitSegment = !0, this._addingInitSegment = !1
            })
        }, t._appendSegment = function() {
            const e = this.activeStream.getNextSegment();
            if (null === e) return;
            const t = this.activeStream.getIdForSegment(e);
            this.activeStream.isFinal(e) && (this._appendingFinalSegment = !0), this._lastAppended = t, this.fire("appendbufferstart", t);
            try {
                this._sourceBuffer.appendBuffer(e), this._bufferState[t.segment] = t, this._isFirstSegment && (this._isFirstSegment = !1, this.fire("initialbufferstart"))
            } catch (fl) {
                if ("QuotaExceededError" === fl.name) {
                    this._quotaExceeded = !0, this.fire("quotaexceedederror", this._sourceBuffer.buffered);
                    const t = 6;
                    if (this._sorcerer._video.currentTime > t) {
                        const e = 0,
                            n = this._sorcerer._video.currentTime - t;
                        this._sorcerer.removeBuffer(e, n)
                    }
                    this.activeStream._readyToAppend.unshift(e)
                }
            }
        }, r(e, [{
            key: "streams",
            get: function() {
                return this._streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return this._activeStreamIndex
            }
        }, {
            key: "activeStream",
            get: function() {
                return this._streams[this._activeStreamIndex]
            }
        }, {
            key: "sourceBuffer",
            get: function() {
                return this._sourceBuffer
            },
            set: function(e) {
                this._sourceBuffer = e, this._attachEvents(), this.fire("sourcebufferattach")
            }
        }, {
            key: "endTime",
            get: function() {
                const e = this._sourceBuffer.buffered;
                if (e.length > 0) return e.end(e.length - 1)
            }
        }]), e
    }();

function ts() {}
let ns = function() {
        function e(e, t = "", n = new Zi) {
            rn(this), this._readyToAppend = [], this._initSegment = e, this._needInitSegment = !0, this._index = NaN, this._codec = t, this._fetcher = n, this._fetcher.start(), this._bufferData = new WeakMap, this._segmentToId = {}
        }
        e.isValidSegmentUrl = function(e) {
            return "string" == typeof e || "string" == typeof e.url && "string" == typeof e.byteRange
        };
        var t = e.prototype;
        return t.getIdForSegment = function(t) {
            return e.isValidSegmentUrl(t) ? this._segmentToId[t] : this._bufferData.get(t).id
        }, t.isFinal = function(e) {
            return this._bufferData.get(e).final
        }, t.addSegment = function(t, {
            identifier: n = null,
            isFinalSegment: r = !1,
            loadOnly: i = !1,
            priority: s = 0,
            includeWithBandwidthChecks: o = !0,
            excludeConnectTime: a = !1,
            timeout: u = null,
            size: c = null
        } = {}) {
            return this._needInitSegment && this.getInitSegment(), e.isValidSegmentUrl(t) ? (this._segmentToId[t] = n || t, this.fire("queued", this.getIdForSegment(t)), this._fetcher.add({
                url: t.url || t,
                byteRange: t.byteRange,
                id: this.getIdForSegment(t),
                stream: this,
                includeWithBandwidthChecks: o,
                excludeConnectTime: a,
                isInitSegmentRequest: !1,
                priority: s,
                timeout: u,
                size: c
            }).then(e => {
                this._bufferData.set(e, {
                    id: n || t,
                    final: r
                }), this._readyToAppend.push(e), this.fire("bufferqueueadd", this.getIdForSegment(t)), i || this.fire("segmentadd")
            })) : (this._bufferData.set(t, {
                id: n,
                final: r
            }), this._readyToAppend.push(t), this.fire("bufferqueueadd", n), Promise.resolve())
        }, t.clear = function() {
            this._readyToAppend = []
        }, t.abort = function() {
            try {
                const e = this;
                return function(t, n) {
                    var r = function() {
                        if (e._needInitSegment) return function(e) {
                            if (e && e.then) return e.then(ts)
                        }(function(t, n) {
                            try {
                                var r = function(e, t) {
                                    return e && e.then ? e.then(ts) : Promise.resolve()
                                }(e.getInitSegment())
                            } catch (fl) {
                                return
                            }
                            return r && r.then ? r.then(void 0, n) : r
                        }(0, (function(e) {})))
                    }();
                    return r && r.then ? r.then(n) : n()
                }(0, (function() {
                    e._fetcher.abort(e)
                }))
            } catch (fl) {
                return Promise.reject(fl)
            }
        }, t.hasNextSegment = function() {
            return this._readyToAppend.length > 0
        }, t.getNextSegment = function() {
            return 0 === this._readyToAppend.length ? null : this._readyToAppend.shift()
        }, t.getInitSegment = function() {
            const t = "object" == typeof this._initSegment && "url" in this._initSegment ? this._initSegment.url : this._initSegment;
            return t ? (this._needInitSegment = !1, e.isValidSegmentUrl(t) ? this._fetcher.add({
                url: t,
                byteRange: this._initSegment.byteRange,
                id: null,
                stream: this,
                isInitSegmentRequest: !0,
                priority: 0
            }).then(e => (this._initSegment = e, this._initSegment)) : Promise.resolve(this._initSegment)) : Promise.resolve(null)
        }, r(e, [{
            key: "codec",
            get: function() {
                return this._codec
            },
            set: function(e) {
                this._codec = e
            }
        }, {
            key: "index",
            get: function() {
                return this._index
            },
            set: function(e) {
                this._index = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }]), e
    }(),
    rs = function() {
        function e(e) {
            this._video = e, this._running = !1, this._droppedFramesTimeout = null, this._droppedFrameData = {}, this._decodedFrameData = {}, this._droppedFrames = 0, this._decodedFrames = 0, this._streamIndex = "default", this._attached = !1, this.bound = {
                startCheckingDroppedFrames: this._startCheckingDroppedFrames.bind(this),
                stopCheckingDroppedFrames: this._stopCheckingDroppedFrames.bind(this),
                handleVisibilityChanged: this._handleVisibilityChanged.bind(this)
            }
        }
        var t = e.prototype;
        return t.init = function() {
            this._attachEvents()
        }, t.start = function() {
            return this._startCheckingDroppedFrames(), this
        }, t.stop = function() {
            return this._stopCheckingDroppedFrames(), this
        }, t.destroy = function() {
            this._stopCheckingDroppedFrames(), this._removeEvents()
        }, t.getDroppedFrameRate = function(e, t, n = "average") {
            const r = this._droppedFrameData[t];
            if (!r) return 0;
            if (r.length < e) return 0;
            const i = r.slice(-e);
            return "median" === n ? qi(i) : Xi(i)
        }, t.getDroppedFrameTotal = function() {
            return {
                dropped: this._getTotalDroppedFrames(),
                total: this._getTotalFrames()
            }
        }, t._attachEvents = function() {
            this._attached || (this._video.addEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.addEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.addEventListener("ended", this.bound.stopCheckingDroppedFrames), document.addEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !0)
        }, t._removeEvents = function() {
            this._video.removeEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.removeEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.removeEventListener("ended", this.bound.stopCheckingDroppedFrames), document.removeEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !1
        }, t._startCheckingDroppedFrames = function() {
            this._running = !0, this._checkDroppedFrames()
        }, t._stopCheckingDroppedFrames = function() {
            this._running = !1
        }, t._checkDroppedFrames = function() {
            if (!this._running || null === this._streamIndex) return;
            if (ke.browser.safari && (document.hidden || "hidden" === document.visibilityState)) return;
            clearTimeout(this._droppedFramesTimeout);
            const e = this._getTotalDroppedFrames(),
                t = e - this._droppedFrames;
            this._droppedFrames = e;
            const n = this._getTotalDecodedFrames(),
                r = n - this._decodedFrames;
            this._decodedFrames = n, this._droppedFrameData[this._streamIndex] || (this._droppedFrameData[this._streamIndex] = []), this._decodedFrameData[this._streamIndex] || (this._decodedFrameData[this._streamIndex] = []), this._droppedFrameData[this._streamIndex].length > 100 && this._droppedFrameData[this._streamIndex].shift(), this._decodedFrameData[this._streamIndex].length > 100 && this._decodedFrameData[this._streamIndex].shift(), this._droppedFrameData[this._streamIndex].push(t), this._decodedFrameData[this._streamIndex].push(r), this._droppedFramesTimeout = setTimeout(() => {
                this._checkDroppedFrames()
            }, 1e3)
        }, t._handleVisibilityChanged = function() {
            !ke.browser.safari || document.hidden && "hidden" === document.visibilityState || this._checkDroppedFrames()
        }, t._getTotalDroppedFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().droppedVideoFrames : this._video.webkitDroppedFrameCount || 0
        }, t._getTotalFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().totalVideoFrames : this._video.webkitDecodedFrameCount || 0
        }, t._getTotalDecodedFrames = function() {
            if ("function" == typeof this._video.getVideoPlaybackQuality) {
                const e = this._video.getVideoPlaybackQuality();
                return e.totalVideoFrames - e.droppedVideoFrames - e.corruptedVideoFrames
            }
            return this._video.webkitDecodedFrameCount || 0
        }, r(e, [{
            key: "streamIndex",
            get: function() {
                return this._streamIndex
            },
            set: function(e) {
                this._streamIndex = e
            }
        }]), e
    }(),
    is = function() {
        function e(e, t = {}) {
            this._video = e, this._options = t, rn(this);
            const {
                fetcherTimeout: n = 0,
                fetcherRetryAbortErrors: r = !0
            } = this._options;
            this._frameDropper = new rs(e), this._mediaSource = new MediaSource, this._fetcher = new Zi({
                parallel: 1,
                timeout: n,
                retryAbortErrors: r
            }), this._buffersForCodec = {}, this._buffers = [], this._readyPromiseResolve = null, this._boundHandleSourceOpen = this._handleSourceOpen.bind(this), this._attachEvents()
        }
        var t = e.prototype;
        return t.switchTo = function(e) {
            return 1 === this._buffers.length && this.video.switchTo(e)
        }, t.getCurrentSpeed = function({
            type: e = "average",
            howMany: t = 10,
            weights: n = [],
            percentile: r = null
        } = {}) {
            return "harmonicAverage" === e ? Zi.getHarmonicAverageSpeed(t) : "average" === e ? Zi.getAverageSpeed(t, n) : "median" === e ? Zi.getMedianSpeed(t) : Zi.getPercentileSpeed(t, r)
        }, t.getVolatilityScaler = function(e) {
            return Zi.getVolatilityScaler(e)
        }, t.getResponseSpeeds = function() {
            return Zi.getResponseSpeeds()
        }, t.getFailedSegments = function() {
            return Zi.getFailedSegments()
        }, t.getSuccessfulSegments = function() {
            return Zi.getSuccessfulSegments()
        }, t.getDroppedFrameRate = function(e, t = this.activeStreamIndex, n = "average") {
            return this._frameDropper.getDroppedFrameRate(e, t, n)
        }, t.getDroppedFrameTotal = function() {
            return this._frameDropper.getDroppedFrameTotal()
        }, t.clear = function() {
            this._buffers.forEach(e => e.clear())
        }, t.initFrameDropper = function() {
            this._frameDropper.init()
        }, t.streamIndexAtTime = function(e, t) {
            return this._buffersForCodec[t].streamIndexAtTime(e) ? this._buffersForCodec[t].streamIndexAtTime(e).stream : null
        }, t.removeBuffer = function(e = 0, t = this._video.duration) {
            if (e >= (t = t || 0)) return Promise.resolve();
            const n = this._buffers.map(n => n.remove(e, t));
            return Promise.all(n)
        }, t.addStream = function(e, t) {
            const n = this._getCodecType(e);
            if (!this._buffersForCodec[n]) {
                const t = new es(this, n);
                this._buffersForCodec[n] = t, this._buffers.push(t), this.readyPromise.then(() => {
                    let r;
                    try {
                        r = this._mediaSource.addSourceBuffer(e)
                    } catch (fl) {
                        if (22 !== fl.code) return void this.fire("srcnotsupported", fl);
                        r = this._buffersForCodec[n]
                    }
                    if (this._options.duration) {
                        const e = .1;
                        r.appendWindowEnd = this._options.duration + e
                    }
                    t.sourceBuffer = r
                }).catch(e => {}), ["appendbufferstart", "appendbufferend", "streamchange", "streamchangestart", "initialbufferstart", "quotaexceedederror"].forEach(e => {
                    t.on(e, t => {
                        this.fire(e, t)
                    })
                })
            }
            const r = new ns(t, e, this._fetcher);
            return ["queued", "bufferqueueadd"].forEach(e => {
                r.on(e, t => {
                    this.fire(e, t)
                })
            }), this._buffersForCodec[n].addStream(r), r
        }, t.checkEndOfStream = function() {
            if (!this._buffers.every(e => e.hasAppendedFinalSegment())) return;
            const e = () => {
                this._video.removeEventListener("timeupdate", e), this._buffers.every(e => e.isTimeInBuffer(this._video.currentTime)) && this.endOfStream()
            };
            this._video.addEventListener("timeupdate", e)
        }, t.abortFetches = function() {
            this._fetcher.abort()
        }, t.endOfStream = function() {
            "open" === this._mediaSource.readyState && (this._sourceBuffersAreUpdating() || (this._mediaSource.endOfStream(), this.fire("endofstream")))
        }, t.destroy = function() {
            this.clear(), this._removeEventListeners(), this.off(), this._frameDropper.destroy(), this._fetcher.abort(), this._video.src && (this._video.removeAttribute("src"), this._video.load())
        }, t._attachEvents = function() {
            this.readyPromise = new Promise((e, t) => {
                this._readyPromiseResolve = e, this._mediaSource.addEventListener("sourceopen", this._boundHandleSourceOpen)
            }), ["downloadstart", "downloadend", "downloadabort", "downloaderror", "downloadtimeout", "progress"].forEach(e => {
                this._fetcher.on(e, (...t) => {
                    this.fire.apply(this, [e].concat(t))
                })
            })
        }, t._sourceBuffersAreUpdating = function() {
            for (let e = 0; e < this._mediaSource.sourceBuffers.length; e++)
                if (this._mediaSource.sourceBuffers[e].updating) return !0;
            return !1
        }, t._handleSourceOpen = function() {
            URL.revokeObjectURL(this._video.src), this._mediaSource.removeEventListener("sourceopen", this._boundHandleSourceOpen), this._options.duration && (this._mediaSource.duration = this._options.duration, this.fire("durationset")), this._readyPromiseResolve()
        }, t._removeEventListeners = function() {
            this._buffers.forEach(e => e.removeEventListeners())
        }, t._getCodecType = function(e) {
            return 0 === e.indexOf("audio") ? "audio" : "video"
        }, r(e, [{
            key: "mediaSource",
            get: function() {
                return this._mediaSource
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }, {
            key: "streams",
            get: function() {
                return 1 === this._buffers.length && this.video.streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return 1 === this._buffers.length && this.video.activeStreamIndex
            }
        }, {
            key: "video",
            get: function() {
                return !!this._buffersForCodec.video && this._buffersForCodec.video
            }
        }, {
            key: "audio",
            get: function() {
                return !!this._buffersForCodec.audio && this._buffersForCodec.audio
            }
        }]), e
    }(),
    ss = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t) || this)._options = n, r.blacklisted = [], r.whitelisted = [], r.MAX_LOADABLE_SEGMENTS_AUTO = 3, r.MAX_LOADABLE_SEGMENTS_LOCKED = 15, r.SEGMENT_DURATION = 6, r
        }
        a(t, e), r(t, [{
            key: "displayName",
            get: function() {
                return "MediaSource"
            }
        }]);
        var n = t.prototype;
        return n.isTimeInBuffer = function(e, t, n) {
            return this._timesAreInRange(e, e, t, n, 1)
        }, n.getDistanceFromBuffer = function(e, t) {
            let n = e;
            for (let r = 0; r < t.length; r++)
                if (t.start(r) <= e && t.end(r) >= e) {
                    n = t.end(r);
                    break
                }
            return n - e
        }, n.blacklist = function(e) {
            this.blacklisted[e] = 1
        }, n.lock = function(e = []) {
            this.whitelisted = e
        }, n.filterStreams = function(e, t, n, r = null) {
            const i = [];
            let s, o = !1;
            for (let a = 0; a < e.length; a++)
                if (s && s[0] === e[a].width && s[1] === e[a].height) i.push(e[a]);
                else {
                    if (o) break;
                    this.blacklisted[a] && -1 === this.whitelisted.indexOf(a) || this.whitelisted.length && -1 === this.whitelisted.indexOf(a) || (this.whitelisted.length ? i.push(e[a]) : (this._getScaleFromDimensions(t, n, e[a].width, e[a].height, r) >= (n < 1e3 / (window.devicePixelRatio || 1) ? 1.75 : 1) && (o = !0), i.push(e[a]), s = [e[a].width, e[a].height]))
                }
            return i
        }, n.getCurrentSpeed = function() {
            let e = "average",
                t = 3,
                n = [1, 2, 5];
            return this._options.tests && this._options.tests.harmonic_average && this._options.tests.harmonic_average.group && (e = "harmonicAverage", t = this._getMaxLoadableSegmentsAuto(), n = []), this.scanner.sorcerer.getCurrentSpeed({
                type: e,
                howMany: t,
                weights: n
            })
        }, n.shouldUseSurroundSound = function(e, t) {
            return "240p" !== e[t].quality
        }, n.getAudioIndexFromVideo = function(e, t, n) {
            if (0 === t.length) return !1;
            if (!e[n]) return 0;
            const r = t.filter(({
                channels: e
            }) => e > 2);
            if (r.length > 0 && this.shouldUseSurroundSound(e, n)) {
                const e = r[r.length - 1];
                return t.indexOf(e)
            }
            return t.length > 1 && 0 === n && e[n].height <= 360 && e.length > 1 ? "mp4a.40.2" === t[0].codecs && t[0].bitrate < 8e4 && "240p" !== e[n].quality ? 1 : 0 : t.length - 1
        }, n._getVisibleDimensions = function(e, t, n, r) {
            const i = n / r,
                s = e - t * i,
                o = t - e / i;
            let a = e - s,
                u = t - o;
            return s > 0 && (u = t), o > 0 && (a = e), [a, u]
        }, n._getScaleFromDimensions = function(e, t, n, r, i = null) {
            const s = this._getVisibleDimensions(e, t, n, r);
            let o = n * r;
            i && (o *= i);
            const a = window.devicePixelRatio || 1;
            return o / (s[0] * s[1] * a * a)
        }, n._getMaxLoadableSegmentsAuto = function() {
            const e = Ai(this._options, "lookahead_count");
            return e && e.group && e.data.count ? e.data.count : e && e.data.segment_lookahead_count ? e.data.segment_lookahead_count : this.MAX_LOADABLE_SEGMENTS_AUTO
        }, n._getSecondsToLoadAhead = function(e, t, n) {
            const r = n && n.bitrate > 11e6;
            return 1 === this.whitelisted.length ? r ? 30 : this.MAX_LOADABLE_SEGMENTS_LOCKED * this.SEGMENT_DURATION : this._getMaxLoadableSegmentsAuto() * this.SEGMENT_DURATION
        }, n._timesAreInRange = function(e, t, n, r, i = 0) {
            if (!n) return !1;
            t = Math.min(t, r);
            for (let s = 0; s < n.length; s++) {
                const r = n.start(s),
                    o = n.end(s),
                    a = bi(r) - i,
                    u = bi(o) + i;
                if (a <= e && u >= t) {
                    if (t < r || e > o) continue;
                    return !0
                }
            }
            return !1
        }, n._hasSeparateStreams = function(e) {
            return e.video.length > 0 && e.audio.length > 0
        }, n._isSegmentInBuffer = function(e, t, n, r) {
            let i = 1;
            return this._hasSeparateStreams(r) && (i = .05), this._timesAreInRange(e.start, e.end, t, n, i)
        }, t
    }(function() {
        function e(e) {
            this.scanner = e, this.STREAM_TYPE_VIDEO = "video", this.STREAM_TYPE_AUDIO = "audio"
        }
        r(e, [{
            key: "displayName",
            get: function() {
                return "Brain"
            }
        }]);
        var t = e.prototype;
        return t.destroy = function() {}, t.shouldPowerUp = function(e, t) {
            return !1
        }, t.shouldPowerDown = function(e, t) {
            return !1
        }, t.canPowerUp = function(e, t) {
            return 1 !== e.length && t < e.length - 1
        }, t.canPowerDown = function(e, t) {
            return 1 !== e.length && t > 0
        }, t.filterStreams = function(e) {
            return e
        }, e
    }());
let os = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).BANDWIDTH_UPSWITCH_THRESHOLD = .85, r.BANDWIDTH_DOWNSWITCH_THRESHOLD = .9, r.DEFAULT_TIMEOUT = 8e3, r.SEGMENT_RELATIVE_TIMEOUT_RATIO = 4 / 3, r.MINIMUM_TIMEOUT = 1e3, r.FRAME_DROP_WINDOW_SECONDS = 10, r
        }
        a(t, e), r(t, [{
            key: "displayName",
            get: function() {
                return "Skyfire"
            }
        }]);
        var n = t.prototype;
        return n.shouldPowerUp = function(e, t, n) {
            n && this._options.startingBandwidthThreshold && (this.BANDWIDTH_UPSWITCH_THRESHOLD = this._options.startingBandwidthThreshold);
            let r = e.indexOf(t);
            if (-1 === r && (r = 0), !this.canPowerUp(e, r)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const i = this.getCurrentSpeed();
            if (!i) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const s = this._getStreamFromSpeed(i, this.BANDWIDTH_UPSWITCH_THRESHOLD, e);
            return s === r || !n && s > r && k(this.scanner.currentTime, this.scanner._video.buffered) < 1.5 * this.SEGMENT_DURATION ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: s,
                reasonForSwitch: 3
            })
        }, n.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve({
                    index: e.length - 1,
                    reasonForSwitch: 6
                }) : Promise.resolve({
                    index: !1,
                    reasonForSwitch: null
                })
            }
            if (!this.canPowerDown(e, n)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = this.getCurrentSpeed();
            if (!r) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this.hasTooManyDroppedFrames(n, t, this._options.droppedFrameSwitchPercent)) return this.blacklist(n), Promise.resolve({
                index: n - 1,
                reasonForSwitch: 2
            });
            const i = this._getStreamFromSpeed(r, this.BANDWIDTH_DOWNSWITCH_THRESHOLD, e);
            return i === n ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: i,
                reasonForSwitch: 1
            })
        }, n.hasTooManyDroppedFrames = function(e, t, n) {
            return this.scanner.sorcerer.getDroppedFrameRate(this.FRAME_DROP_WINDOW_SECONDS, e, "median") / t.framerate * 100 >= n
        }, n.getTimeEstimateToLoad = function(e, t) {
            if (null === t) return 3;
            const n = t.segments[e],
                r = n.end - n.start,
                i = this.getCurrentSpeed();
            return r * (t.bitrate + t.audioBitrate) / i * 1.3
        }, n.canPlayFromTimeInStream = function(e, t) {
            if (!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration)) return !1;
            if (!t) return !1;
            const n = this.getSegmentsToLoad(!1, this.STREAM_TYPE_VIDEO, t);
            if (0 === n.length) return !0;
            const r = k(e, this.scanner._video.buffered);
            return this.getTimeEstimateToLoad(n[0], t) < r
        }, n.getSegmentsToLoad = function(e, t = this.STREAM_TYPE_VIDEO, n) {
            const r = this.scanner._video,
                i = this.scanner.currentTime,
                s = [],
                o = i + this._getSecondsToLoadAhead(i, r.duration, n),
                a = this.scanner.sorcerer[t].activeStreamIndex,
                u = this.scanner._streams[t][a];
            if (!u) return s;
            const c = this.scanner.sorcerer[t].sourceBuffer;
            let l = null;
            c && (l = c.buffered);
            for (let h = 0; h < u.segments.length; h++) {
                const t = u.segments[h];
                if (t.end < i || t.start > o) continue;
                const n = i >= t.start && i < t.end,
                    r = this._isSegmentInBuffer(t, l, this.scanner._video.duration, this.scanner._streams);
                !e && r || e && r && n || (n || o >= t.start) && s.push(h)
            }
            return s
        }, n.getSegmentRelativeTimeout = function(e, t, n) {
            var r;
            const i = null == t ? void 0 : t.bitrate,
                s = null == (r = e[0]) ? void 0 : r.bitrate;
            if (!i || !s || !n) return this.DEFAULT_TIMEOUT;
            if (i === s) return this.DEFAULT_TIMEOUT;
            const o = n * this.SEGMENT_RELATIVE_TIMEOUT_RATIO;
            return Math.max(this.MINIMUM_TIMEOUT, Math.min(this.DEFAULT_TIMEOUT, o))
        }, n._getStreamFromSpeed = function(e, t, n) {
            let r = 0;
            for (let i = r; i < n.length; i++) e * t > n[i].bitrate + n[i].audioBitrate && (r = i);
            return r
        }, t
    }(ss),
    as = function(e) {
        function n(n, r = {}) {
            var i, s, o;
            return (o = e.call(this, n, r) || this)._mimirURL = r.tests.ml_brain.data.mimir_url, o._geolocation = r.tests.ml_brain.data.geolocation, o._segmentToStreamDecisionMap = {}, o._pendingModelFetch = null, o._prevBufferDurations = [], o._prevSegmentDownloadTimes = [], o._prevSegmentByteLengths = [], o._prevDistancesFromBuffer = [], o._prevSegmentStreamIndexes = [], o._prevRemainingSegmentCounts = [], o._prevTTFBs = [], o._prevSegmentTimeouts = [], o._prevSegmentRequestIDs = [], o._prevModelInputs = null, o._lastModelResponseTime = 0, o._videoSegInProgress = null, o._audioSegInProgress = null, o._scrubInProgress = !1, o._hasPreloaded = !1, o._networkIssueCount = 0, o._audioStreams = [], o._videoBufferAppendCount = 0, o._scannerEventsHandlers = [
                [oi.DOWNLOAD_START, o._handleDownloadStart.bind(_(o))],
                [oi.DOWNLOAD_END, o._handleDownloadEnd.bind(_(o))],
                [oi.APPEND_BUFFER_END, o._handleAppendBufferEnd.bind(_(o))],
                [oi.DOWNLOAD_TIMEOUT, o._handleDownloadTimeout.bind(_(o))]
            ], o._beforeRequestHooks = [o._beforeSegmentQualityFetch], o._afterResponseHooks = [o._afterSegmentQualityFetch], o._scannerEventsHandlers.forEach(e => {
                o.scanner.on(e[0], e[1])
            }), (i = t.hooks.beforeRequest).push.apply(i, p(o._beforeRequestHooks)), (s = t.hooks.afterResponse).push.apply(s, p(o._afterResponseHooks)), o
        }
        a(n, e), r(n, [{
            key: "displayName",
            get: function() {
                return "ML"
            }
        }]);
        var i = n.prototype;
        return i.destroy = function() {
            this._scannerEventsHandlers.forEach(e => {
                this.scanner.off(e[0], e[1])
            }), this._beforeRequestHooks.forEach(e => {
                const n = t.hooks.beforeRequest,
                    r = n.indexOf(e);
                r >= 0 && n.splice(r, 1)
            }), this._afterResponseHooks.forEach(e => {
                const n = t.hooks.afterResponse,
                    r = n.indexOf(e);
                r >= 0 && n.splice(r, 1)
            })
        }, i._handleDownloadStart = function({
            identifier: e
        }) {
            e.type === this.STREAM_TYPE_VIDEO && (this._videoSegInProgress = {
                index: e.segment,
                streamIndex: e.stream,
                complete: null
            }), e.type === this.STREAM_TYPE_AUDIO && (this._audioSegInProgress = {
                index: e.segment,
                streamIndex: e.stream,
                complete: null
            })
        }, i._segmentInProgressMatchesIdentifer = function(e, t = this.STREAM_TYPE_VIDEO) {
            return t === this.STREAM_TYPE_VIDEO ? null !== this._videoSegInProgress && this._videoSegInProgress.index === e.segment && this._videoSegInProgress.streamIndex === e.stream : t === this.STREAM_TYPE_AUDIO && null !== this._audioSegInProgress && this._audioSegInProgress.index === e.segment
        }, i._isSegmentInProgress = function() {
            return null !== this._videoSegInProgress || null !== this._audioSegInProgress
        }, i._handleDownloadEnd = function({
            identifier: e,
            data: {
                request: t,
                response: n
            }
        }) {
            const r = t.data.duration / 1e3,
                i = n.body.byteLength;
            let s = null;
            n.perfTimings && (s = n.perfTimings.responseStart - n.perfTimings.connectStart), e.type === this.STREAM_TYPE_VIDEO && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && (this._videoSegInProgress.complete = {
                downloadTime: r,
                byteLength: i,
                ttfb: s,
                uuid: t.data.uuid
            }, this._hasPreloaded || (this._updateModelInputData({
                streamIndex: e.stream,
                segmentIndex: e.segment - 1,
                segmentDLTime: r,
                segmentLength: i,
                ttfb: s,
                didSegmentTimeout: !1
            }), this._hasPreloaded = !0)), e.type === this.STREAM_TYPE_AUDIO && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_AUDIO) && (this._audioSegInProgress.complete = {
                downloadTime: r,
                byteLength: i,
                ttfb: s,
                uuid: t.data.uuid
            })
        }, i._handleDownloadTimeout = function({
            identifier: e,
            data: t
        }) {
            const n = (t.timeoutMs || 8e3) / 1e3,
                r = e.segment,
                i = this.scanner._streams[e.type][e.stream].segments[r].size;
            delete this._segmentToStreamDecisionMap[r], this._updateModelInputData({
                streamIndex: e.stream,
                segmentIndex: r,
                segmentDLTime: n,
                segmentLength: i,
                ttfb: .1,
                didSegmentTimeout: !0
            })
        }, i._clearInProgress = function() {
            this._videoSegInProgress = null, this._audioSegInProgress = null
        }, i._handleAppendBufferEnd = function({
            identifier: e
        }) {
            if (e.type === this.STREAM_TYPE_VIDEO && (this._videoBufferAppendCount += 1), this._hasSeparateStreams(this.scanner._streams)) {
                if (this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_AUDIO) && null !== this._videoSegInProgress.complete && null !== this._audioSegInProgress.complete) {
                    const t = this._videoSegInProgress.complete,
                        n = this._audioSegInProgress.complete,
                        r = t.downloadTime + n.downloadTime,
                        i = t.byteLength + n.byteLength,
                        s = t.ttfb + n.ttfb;
                    this._updateModelInputData({
                        streamIndex: e.stream,
                        segmentIndex: e.segment - 1,
                        segmentDLTime: r,
                        segmentLength: i,
                        ttfb: s,
                        segmentRequestID: t.uuid,
                        didSegmentTimeout: !1
                    }), this._clearInProgress()
                }
            } else if (this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && null !== this._videoSegInProgress.complete) {
                const t = this._videoSegInProgress.complete;
                this._updateModelInputData({
                    streamIndex: e.stream,
                    segmentIndex: e.segment - 1,
                    segmentDLTime: t.downloadTime,
                    segmentLength: t.byteLength,
                    ttfb: t.ttfb,
                    segmentRequestID: t.uuid,
                    didSegmentTimeout: !1
                }), this._clearInProgress()
            }
        }, i._updateModelInputData = function(e) {
            const {
                streamIndex: t,
                segmentIndex: n,
                segmentDLTime: r,
                segmentLength: i,
                ttfb: s,
                segmentRequestID: o,
                didSegmentTimeout: a
            } = e, u = this.scanner._streams.video[t], c = this.scanner.sorcerer.video.sourceBuffer;
            if (!c || !u) return;
            this._prevBufferDurations.push(this.getTotalBufferDuration()), this._prevDistancesFromBuffer.push(k(this.scanner.currentTime, c.buffered)), this._prevSegmentStreamIndexes.push(t), this._prevSegmentDownloadTimes.push(r), this._prevSegmentByteLengths.push(i);
            const l = s + this._lastModelResponseTime;
            this._prevTTFBs.push(l), this._prevRemainingSegmentCounts.push(u.segments.length - n), this._prevSegmentRequestIDs.push(o), this._prevSegmentTimeouts.push(Number(a))
        }, i.handleScrubEnd = function(e) {
            const t = this._prevSegmentDownloadTimes.length,
                n = t ? this._prevSegmentDownloadTimes[t - 1] : 0,
                r = this._prevSegmentByteLengths.length,
                i = r ? this._prevSegmentByteLengths[r - 1] : 0,
                s = this._prevTTFBs.length,
                o = s ? this._prevTTFBs[s - 1] : 0,
                a = this.scanner._streams.video[e],
                u = this._getFirstLookaheadSegmentNotInBuffer(a),
                c = u ? u.index : this._prevRemainingSegmentCounts[this._prevRemainingSegmentCounts.length - 1],
                l = this._prevSegmentRequestIDs.length ? this._prevSegmentRequestIDs[this._prevSegmentRequestIDs.length - 1] : "";
            this._updateModelInputData({
                streamIndex: e,
                segmentIndex: c,
                segmentDLTime: n,
                segmentLength: i,
                ttfb: o,
                segmentRequestID: l,
                didSegmentTimeout: !1
            })
        }, i.shouldPowerUp = function(e, t, n) {
            let r = e.indexOf(t);
            if (-1 === r && (r = 0), 1 === this.whitelisted.length) return this.whitelisted[0] > r ? Promise.resolve(0) : Promise.resolve(!1);
            if (1 === this.scanner._streams.video.length) return Promise.resolve(!1);
            if (!this.canPowerUp(e, r)) return Promise.resolve(!1);
            if (this.scrubInProgress) return Promise.resolve(!1);
            const i = this._getFirstLookaheadSegmentNotInBuffer(t);
            if (null === i) return Promise.resolve(!1);
            const s = {
                    index: i.index,
                    streamIndex: i.streamIndex
                },
                o = i.index;
            if (null !== this._pendingModelFetch && this._pendingModelFetch.index === s.index && this._pendingModelFetch.streamIndex === s.streamIndex) return Promise.resolve(!1);
            if (!(o in this._segmentToStreamDecisionMap)) return this._fetchSegmentQualityFromModel(s, e, t).then(e => e > r && e).catch(console.error);
            const a = this._segmentToStreamDecisionMap[o];
            return a > r ? Promise.resolve(a) : Promise.resolve(!1)
        }, i.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve(e.length - 1) : Promise.resolve(!1)
            }
            if (1 === this.whitelisted.length) return this.whitelisted[0] < n ? Promise.resolve(0) : Promise.resolve(!1);
            if (1 === this.scanner._streams.video.length) return Promise.resolve(!1);
            if (!this.canPowerDown(e, n)) return Promise.resolve(!1);
            if (this.scrubInProgress) return Promise.resolve(!1);
            const r = this._getFirstLookaheadSegmentNotInBuffer(t);
            if (null === r) return Promise.resolve(!1);
            const i = {
                    index: r.index,
                    streamIndex: r.streamIndex
                },
                s = r.index;
            if (null !== this._pendingModelFetch && this._pendingModelFetch.index === i.index && this._pendingModelFetch.streamIndex === i.streamIndex) return Promise.resolve(!1);
            if (!(s in this._segmentToStreamDecisionMap)) return this._fetchSegmentQualityFromModel(i, e, t).then(e => e < n && e).catch(console.error);
            const o = this._segmentToStreamDecisionMap[s];
            return o < n ? Promise.resolve(o) : Promise.resolve(!1)
        }, i.getTotalBufferDuration = function() {
            const e = this.scanner.sorcerer.video.sourceBuffer;
            let t = 0;
            if (!e) return t;
            for (let n = 0; n < e.buffered.length; n++) {
                const r = e.buffered.start(n);
                t += e.buffered.end(n) - r
            }
            return t
        }, i.canPlayFromTimeInStream = function(e, t) {
            return !!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration) && !!t
        }, i._normalizeModelInput = function(e, t = 0) {
            let n = e.slice(0);
            if (n.length < 8) {
                const e = 8 - n.length;
                for (let r = 0; r < e; r++) n.unshift(t);
                return n
            }
            return n.slice(n.length - 8, n.length)
        }, i._getModelInputs = function(e, t) {
            const n = {
                    240: 1,
                    360: 2,
                    480: 3,
                    540: 3,
                    720: 4,
                    1080: 5,
                    1440: 6,
                    2160: 7
                },
                r = {
                    240: 0,
                    360: 1,
                    480: 2,
                    540: 2,
                    720: 3,
                    1080: 4,
                    1440: 5,
                    2160: 6
                };
            let i = [0, 0, 0, 0, 0, 0, 0, 0],
                s = [0, 0, 0, 0, 0, 0, 0, 0],
                o = [0, 0, 0, 0, 0, 0, 0, 0];
            this._videoBufferAppendCount < 3 && (o[o.length - 1] = 1);
            for (let u = 0; u < t.length; u++) {
                const o = t[u],
                    a = parseInt(o.quality, 10);
                a in n && (i[n[a]] = 1);
                const c = this.getAudioIndexFromVideo(t, this._audioStreams, u);
                let l = null;
                "number" == typeof c && (l = this._audioStreams[c]);
                for (let t = 0; t < o.segments.length; t++)
                    if (t === e && a in r) {
                        const e = o.segments[t].size;
                        let n = 0;
                        l && l.segments[t] && (n = l.segments[t].size), s[r[a]] = e + n
                    }
            }
            const a = this._prevSegmentStreamIndexes.map(e => parseInt(this.scanner._streams.video[e].quality, 10));
            return {
                availableQualities: i,
                nextChunkSizes: s,
                lastBufferSizes: this._normalizeModelInput(this._prevBufferDurations),
                lastChunkDownloadTimes: this._normalizeModelInput(this._prevSegmentDownloadTimes),
                lastTtfb: this._normalizeModelInput(this._prevTTFBs, .1),
                lastChunkSizes: this._normalizeModelInput(this._prevSegmentByteLengths),
                lastChunkQualities: this._normalizeModelInput(a),
                numRemainingChunks: this._normalizeModelInput(this._prevRemainingSegmentCounts),
                lastPlaybackHeads: this._normalizeModelInput(this._prevDistancesFromBuffer),
                geolocation: [
                    [this._geolocation]
                ],
                downloadTimeout: this._normalizeModelInput(this._prevSegmentTimeouts),
                videoStart: o
            }
        }, i._getStreamQualityFromModelOutput = function(e, t) {
            let n = -1,
                r = -1;
            for (let s = 0; s < e.length; s++) e[s] > r && (r = e[s], n = s);
            let i = [];
            for (let s = 0; s < t.length; s++) 1 === t[s] && i.push(s);
            return {
                1: 240,
                2: 360,
                3: 540,
                4: 720,
                5: 1080,
                6: 1440,
                7: 2160
            }[i[n]]
        }, i._getStreamIndexFromQuality = function(e, t) {
            for (let n = 0; n < t.length; n++) {
                const r = parseInt(t[n].quality, 10);
                if (r === e) return n;
                if (480 === r && 540 === e) return n
            }
            return 0
        }, i._beforeSegmentQualityFetch = function(e) {
            e.startTime = mi()
        }, i._afterSegmentQualityFetch = function(e, t) {
            return t.duration = vi(e.startTime), t
        }, i._fetchSegmentQualityFromModel = function(e, t, n) {
            const r = this._getModelInputs(e.index, t);
            return this._pendingModelFetch = e, oe.post(this._mimirURL, {
                json: {
                    inputs: r
                },
                timeout: 2e3
            }).then(n => {
                this._lastModelResponseTime = n.perfTimings.duration;
                const i = JSON.parse(n.body),
                    s = this._getStreamQualityFromModelOutput(i.outputs[0], r.availableQualities),
                    a = this._getStreamIndexFromQuality(s, t);
                if (this._segmentToStreamDecisionMap[e.index] = a, this._prevSegmentRequestIDs.length && this._prevModelInputs) {
                    const e = this._prevSegmentRequestIDs[this._prevSegmentRequestIDs.length - 1];
                    this.scanner.fire(li.BRAIN_ML_MODEL_INPUTS, o({
                        chunkRequestID: e,
                        duration: n.duration,
                        geolocation: this._geolocation
                    }, this._prevModelInputs))
                }
                return this._prevModelInputs = r, this._pendingModelFetch = null, a
            }).catch(t => {
                if (t instanceof V) {
                    const e = {
                        status: t.response.status,
                        resp: t.response.body,
                        url: this._mimirURL
                    };
                    this.scanner.fire(li.BRAIN_ML_MODEL_ERR, e), this._networkIssueCount++
                }
                if (t instanceof X) {
                    const e = {
                        url: this._mimirURL
                    };
                    this.scanner.fire(li.BRAIN_ML_MODEL_TIMEOUT, e), this._networkIssueCount++
                }
                if (t instanceof H) {
                    const e = {
                        url: this._mimirURL
                    };
                    this.scanner.fire(li.BRAIN_ML_MODEL_NET_ERR, e), this._networkIssueCount++
                }
                this._networkIssueCount >= 2 && this.scanner.resetBrain(!0);
                const n = e.streamIndex;
                return this._segmentToStreamDecisionMap[e.index] = n, this._pendingModelFetch = null, n
            })
        }, i._getFirstLookaheadSegmentNotInBuffer = function(e) {
            const t = this.scanner.sorcerer.video.sourceBuffer;
            let n = null;
            if (t && (n = t.buffered), null === n) return null;
            const r = this._getLookaheadSegments(e);
            for (let i = 0; i < r.length; i++) {
                const e = r[i].segment;
                if (!this._isSegmentInBuffer(e, n, this.scanner._video.duration, this.scanner._streams)) return r[i]
            }
            return null
        }, i._getLookaheadSegments = function(e, t = this.STREAM_TYPE_VIDEO) {
            const n = this.scanner._video,
                r = this.scanner.currentTime,
                i = r + this._getSecondsToLoadAhead(r, n.duration, e),
                s = [],
                o = this.scanner.sorcerer[t].activeStreamIndex,
                a = this.scanner._streams[t][o];
            if (!a) return s;
            for (let u = 0; u < a.segments.length; u++) {
                const e = a.segments[u];
                e.end < r || e.start > i || (r >= e.start && r < e.end || i >= e.start) && s.push({
                    segment: e,
                    index: u,
                    streamIndex: o
                })
            }
            return s
        }, i._clearSegmentsNotInBufferFromDecisionMap = function(e, t) {
            Object.keys(this._segmentToStreamDecisionMap).filter(t => -1 === e.indexOf(parseInt(t, 10))).forEach(e => {
                const n = this._segmentToStreamDecisionMap[e],
                    r = this.scanner._streams.video[n].segments[e];
                this._isSegmentInBuffer(r, t, this.scanner._video.duration, this.scanner._streams) || delete this._segmentToStreamDecisionMap[e]
            })
        }, i.getSegmentsToLoad = function(e, t, n) {
            const r = this._getLookaheadSegments(n, t),
                i = this.scanner.sorcerer[t].sourceBuffer;
            let s = null;
            i && (s = i.buffered), this._clearSegmentsNotInBufferFromDecisionMap(r.map(e => e.index), s);
            const o = [];
            for (let a = 0; a < r.length; a++) {
                const e = r[a].segment,
                    t = r[a].index,
                    n = this._isSegmentInBuffer(e, s, this.scanner._video.duration, this.scanner._streams),
                    i = t in this._segmentToStreamDecisionMap;
                n || !i && 1 !== this.whitelisted.length && 1 !== this.scanner._streams.video.length || o.push(t)
            }
            return o
        }, r(n, [{
            key: "audioStreams",
            get: function() {
                return this._audioStreams
            },
            set: function(e) {
                this._audioStreams = e
            }
        }, {
            key: "scrubInProgress",
            set: function(e) {
                this._scrubInProgress = e
            },
            get: function() {
                return this._scrubInProgress
            }
        }]), n
    }(ss),
    us = function() {
        function e(e, t) {
            this._video = e, this._getCurrentStream = t
        }
        var t = e.prototype;
        return t.start = function() {
            return clearInterval(this._checkGapInterval), this._checkGapInterval = setInterval(this._checkGap.bind(this), 200), this._checkGap()
        }, t.stop = function() {
            clearInterval(this._checkGapInterval)
        }, t.onSegmentAppended = function() {
            this._checkGap()
        }, t._checkGap = function() {
            const e = this._video.buffered,
                t = this._video.currentTime,
                n = this._getGapIndex(e, t);
            if (0 === this._video.readyState) return !1;
            if (this._video.paused) return !1;
            const r = this._video.duration;
            if (t >= r) return this._video.currentTime = r - .1, !0;
            if (e.length <= n) return !1;
            const i = e.start(n);
            return !(i >= r || i - t > .5 || 0 !== n || (this.stop(), this._correctFirstSegmentStart("audio", i), this._correctFirstSegmentStart("video", i), this._video.currentTime = i, 0))
        }, t._getGapIndex = function(e, t) {
            if (!e || !e.length) return null;
            let n = 0;
            for (; n < e.length; n++) {
                const r = e.start(n),
                    i = e.end(n);
                if (r > t && (0 === n || i - t <= .1)) break
            }
            return n >= 0 ? n : null
        }, t._correctFirstSegmentStart = function(e, t) {
            const n = this._getCurrentStream(0, e);
            n && n.segments && n.segments[0] && (n.segments[0].start = t)
        }, e
    }();
let cs = function() {
    function e(e, t = {}) {
        this._scanner = e, this.sessionId = t.sessionId, this.clipId = t.clipId
    }
    var t = e.prototype;
    return t.getLogAsQueryParam = function(e, t) {
        return this._buildCMCDQueryParam(this._getLog(e, t))
    }, t._getLog = function(e, t) {
        let n = {};
        return Object.assign(n, this._getStaticSessionData()), Object.assign(n, this._getDynamicSessionData(e, t)), n
    }, t._buildCMCDQueryParam = function(e) {
        return N({
            CMCD: this._getObjectAsAlphabetizedString(e)
        })
    }, t._getStaticSessionData = function() {
        return {
            sid: `"${this.sessionId}"`,
            cid: `"${this.clipId}"`,
            st: this._getStreamType(),
            sf: this._getStreamingFormat()
        }
    }, t._getDynamicSessionData = function(e, t) {
        return {
            pr: this._scanner.playbackRate,
            br: this._scanner.getBitrateAtTime(this._scanner.currentTime, t) / 1e3,
            ot: this._getObjectType(t),
            bl: this._getBufferLength(e)
        }
    }, t._getObjectType = function(e) {
        switch (e) {
            case "audio":
                return "a";
            case "video":
                return "v";
            default:
                return "av"
        }
    }, t._getBufferLength = function(e) {
        return Math.round(1e3 * (parseFloat(e.end) - parseFloat(e.start)))
    }, t._getStreamType = function() {
        switch (this._scanner.displayName) {
            case "HLSLiveScanner":
            case "NativeHLSLiveScanner":
                return "l";
            case "MediaSourceScanner":
            default:
                return "v"
        }
    }, t._getStreamingFormat = function() {
        switch (this._scanner.displayName) {
            case "HLSLiveScanner":
            case "NativeHLSLiveScanner":
                return '"hls"';
            case "MediaSourceScanner":
            default:
                return '"dash"'
        }
    }, t._getObjectAsAlphabetizedString = function(e) {
        let t = [],
            n = "";
        for (var r = 0, i = Object.entries(e); r < i.length; r++) {
            const [e, n] = i[r];
            t.push({
                key: e,
                value: n
            })
        }
        return t.sort((function(e, t) {
            return e.key.localeCompare(t.key)
        })).forEach(({
            key: e,
            value: t
        }) => {
            n += `${e}=${t},`
        }), n.replace(/,\s*$/, "")
    }, e
}();

function ls(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
let hs = function(t) {
        function n(e, n = {}) {
            var r;
            return (r = t.call(this, e, n) || this).reset(), r.manifestLoadDurations = [], n.mediaSourceScanner && (r._maxPreloadStreamIndex = n.mediaSourceScanner.maxPreloadStreamIndex), r
        }
        a(n, t), r(n, null, [{
            key: "displayName",
            get: function() {
                return "MediaSourceScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return "undefined" != typeof MediaSource && MediaSource.isTypeSupported
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return ["application/vnd.vimeo.dash+json", "video/vnd.mpeg.dash.mpd"]
            }
        }]);
        var i = n.prototype;
        return i.deactivate = function() {
            t.prototype.deactivate.call(this), this.sorcerer && this.sorcerer.destroy(), this.reset()
        }, i.reset = function() {
            this._waitingOnSet = new Set, this._streamsForSegment = {}, ke.browser.safari && (this._gapJumper = new us(this._video, this._getCurrentStream.bind(this))), this.resetBrain(), this._setupCMCDLogger(), this._ready = !1, this._startedPlaying = !1, this._manifest = null, this._streams = {}, this._streams.audio = [], this._streams.video = [], this._audioStreams = [], this._onReady = null, this._baseUrl = null, this._lastTargetStreamId = null, this._timeToSeekTo = null, this._resolveSeek = null, this._resolveStartPreload = null, this._reloadingExistingVideo = !1, this._lastStreamIndex = null, this._checkSwitchUp = !1, this._clearBufferAtTime = !1, this._preloadStream = null, this._removeBufferPromise = null, this._ranIntoBuffer = !1, this._restrictedStreamIndexes = [], this._switching = {}, this._lastDownloadBitrate = 0, this._preloadSegmentStreamIndex = null, clearInterval(this._loadSegmentsInterval), clearTimeout(this._slowLoadSegmentTimeout)
        }, i.resetBrain = function(e = !1) {
            const t = this._options.mediaSourceScanner || {};
            t.tests = this._options.tests;
            const n = ke.ie;
            if (this._brain && this._brain.destroy(), e || n) {
                const e = Ii(this._brain);
                return this._brain = new os(this, t), void((e || n) && this.fire(li.BRAIN_ML_SWITCH_TO_SKYFIRE))
            }
            this._brain = new os(this, t);
            const r = Ai(t, "ml_brain");
            r && r.group && r.data.use_model && (this._brain = new as(this, t))
        }, i.preloadStream = function() {
            if (this._preloadStream) return this._preloadStream;
            let e = 0,
                t = 1;
            this._streams.audio.length && (t = 2);
            let n = this.sorcerer.video.activeStreamIndex;
            this._restrictedStreamIndexes.length && (n = this._restrictedStreamIndexes[0]);
            let r = 0;
            const i = this._brain.getSegmentsToLoad(!1, "video", n);
            i.length > 0 && (r = i[0]);
            let s = () => {};
            const o = (e = !1) => {
                    e && (n = this.sorcerer.video.activeStreamIndex), this._preloadSegmentStreamIndex = n, this._restartLoadSegmentsIntervalWithBackoff(!0)
                },
                a = n => {
                    e += 1, e < t || (n.segment === r && 0 === this._restrictedStreamIndexes.length ? this._getStreamIndexToLoadAndSwitchReason(!0).then(t => {
                        let {
                            index: r,
                            reasonForSwitch: i
                        } = t, a = {
                            reasonForSwitch: i
                        };
                        if (!1 !== r && r > n.stream) {
                            if (this.sorcerer.video.switchTo(r, !1, a), this._streams.audio.length) {
                                const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, r);
                                this.sorcerer.audio.switchTo(e, !1)
                            }
                            return e = 0, void o(!0)
                        }
                        s()
                    }).catch(console.error) : s())
                };
            return this._preloadStream = new Promise((e, t) => {
                s = () => {
                    const t = this._getCurrentStream(n).segments[0].end,
                        r = this._getDuration(!0);
                    if (this.currentTime >= r && (this.currentTime = r), this.currentTime > t && (this.sorcerer.clear(), this._waitingOnSet = new Set), this.sorcerer.video.switchTo(n, !1), this._streams.audio.length) {
                        const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n);
                        this.sorcerer.audio.switchTo(e, !1)
                    }
                    this.sorcerer.off("bufferqueueadd", a), this._preloadSegmentStreamIndex = null, this._ready = !0, e()
                }, this.sorcerer.on("bufferqueueadd", a), o()
            }), this._preloadStream
        }, i.loadManifest = function(t) {
            try {
                const n = this;
                return ls(n.video.metadata.p2pReady, (function() {
                    const r = Date.now();
                    return ke.browser.ie && t && -1 !== t.indexOf("archive_playlist") ? (setTimeout(() => {
                        n._fireVideoError("MediaUnknownError", "An unknown error occurred.")
                    }, 250), new Promise(() => {})) : oe({
                        url: t,
                        timeout: 1e4,
                        type: e.MANIFEST
                    }).then(e => (e.url && e.url !== t && -1 !== e.url.indexOf("live-archive") && (n._baseUrl = e.url.split("/").slice(0, -2).join("/")), n.manifestLoadDurations.push({
                        url: t,
                        status: e.status,
                        duration: Date.now() - r
                    }), n.fire(oi.MANIFEST_LOADED), e.text())).then(function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            try {
                                return Promise.resolve(e.apply(this, t))
                            } catch (fl) {
                                return Promise.reject(fl)
                            }
                        }
                    }((function(e) {
                        let r;
                        return function(i, s) {
                            var o = function() {
                                if (-1 !== t.indexOf(".mpd")) return ls(n._loadMediaManifest(), (function({
                                    parseMPD: n
                                }) {
                                    r = n(e, t)
                                }));
                                r = JSON.parse(e)
                            }();
                            return o && o.then ? o.then(s) : s()
                        }(0, (function() {
                            return r
                        }))
                    }))).catch(e => {
                        if (n.manifestLoadDurations.push({
                                url: t,
                                status: e.response && e.response.status,
                                duration: Date.now() - r
                            }), n.reset(), e instanceof V && 410 === e.response.status) return n.fire(oi.MEDIA_URL_EXPIRED), new Promise(() => {});
                        throw e instanceof V && 400 === e.response.status ? n.fire(oi.MEDIA_URL_BAD_REQUEST, e.response.url) : e instanceof X && n.fire(oi.MANIFEST_TIMEOUT), e
                    })
                }))
            } catch (fl) {
                return Promise.reject(fl)
            }
        }, i.setVideoSrc = function(e, t, n = !0) {
            if (n && !t && this._onReady) {
                var r;
                if (("metadata" === this._preload || "none" === this._preload && !this.paused) && !this._ready) return void this._onReady.then(() => {
                    const t = this.paused;
                    this.setVideoSrc(e, t, !1)
                }).catch(console.error);
                if ("sd-fallback" === (null == (r = this._telecineVideo.drmHandler) ? void 0 : r.state)) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !0, !1)
                }).catch(console.error);
                if ("auto" === this._preload) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !1, !1)
                }).catch(console.error)
            }
            t && this.reset(), t || !this.paused || this.sorcerer || (t = !0);
            let i = this._initializeManifest;
            t && (i = this._initialize);
            const s = e.split("/");
            s.pop();
            const o = `${s.join("/")}/`;
            this._reloadingExistingVideo = !t, this._onReady = this._startPreload(e, this._preload).then(this.loadManifest.bind(this)).then(e => ("string" == typeof this._baseUrl && -1 !== this._baseUrl.indexOf("live-archive") || (this._baseUrl = o), e)).then(i.bind(this)), t && "auto" === this._preload && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this), !1)), this._onReady = this._addCatchToPromise(this._onReady)
        }, i.getBitrateAtTime = function(e, t) {
            if (!this.sorcerer) return 0;
            const n = this.sorcerer.streamIndexAtTime(e, t);
            return this._streams[t][n] ? this._streams[t][n].bitrate : 0
        }, i.lockStreamIndexes = function() {
            const e = this._restrictedStreamIndexes.map(e => this._streams.video.indexOf(this._streams.video[e])),
                t = !this.paused;
            if (t && (this._ignorePauseEvent = !0, this._video.pause()), this._switching.video = !1, this._brain.lock(e), !this._startedPlaying && "auto" !== this._preload) return;
            const n = Math.max(this.currentTime - 7, 0),
                r = Math.min(this.currentTime + 7, this._video.duration);
            this.sorcerer.removeBuffer(n, r).then(() => {
                !this._startedPlaying && "auto" === this._preload || this.ended ? this._loadSegments() : (this.seekToTime(this.currentTime), t && this.paused && (this._ignorePlayEvent = !0, this._video.play()))
            }).catch(console.error)
        }, i.seekToTime = function(e) {
            if (e === this.currentTime) return Promise.resolve();
            const t = null === this._timeToSeekTo;
            if (t || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, this._handleScrubbing(), this._ready)
                for (const n in this._streams)
                    if (this._streams[n].length > 0) {
                        const e = this.sorcerer[n].activeStreamIndex;
                        this.sorcerer[n].streams[e].abort()
                    }
            return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), Promise.all([this._onReady, this._removeBufferPromise]).then(() => {
                this._loadSegments()
            }).catch(console.error), this._paused && 0 === e && this.fire(ri.SEEKING), !t && this.wasPlaying && this.play().catch(this._onPlayError.bind(this)), this._onReady.then(() => this._seekInProgressPromise).catch(e => {})
        }, i.takeSnapshot = function() {}, i.initDrm = function() {}, i.onstalled = function() {
            return !1
        }, i.onseeked = function(e) {
            this._startedPlaying && this._restartLoadSegmentsIntervalWithBackoff()
        }, i.onended = function(e) {
            return t.prototype.onended.call(this, e), !0
        }, i.onseeking = function(e) {
            this._startedPlaying
        }, i._handleScrubbing = function() {
            this._scrubStart(), clearTimeout(this._scrubTimeout), this._scrubTimeout = setTimeout(() => {
                this._scrubEnd()
            }, 200)
        }, i._scrubStart = function() {
            this._scrubbing || (this._scrubbing = !0, Ii(this._brain) && (this._brain.scrubInProgress = !0))
        }, i._scrubEnd = function() {
            if (this._scrubbing = !1, Ii(this._brain)) {
                this._brain.scrubInProgress = !1;
                const e = this.sorcerer.video.activeStreamIndex;
                this._brain.handleScrubEnd(e), this._loadSegments()
            }
        }, i.ontimeupdate = function(e) {
            if (!this.sorcerer) return !1;
            if (t.prototype.ontimeupdate.call(this), this._gapJumper && this._gapJumper.stop(), 0 === this.currentTime) return this._startedPlaying;
            if (this._timeToSeekTo) return !1;
            if (this._startedPlaying || (this._startedPlaying = !0), this._clearBufferAtTime && this.currentTime >= this._clearBufferAtTime) {
                const e = 2;
                this.sorcerer.removeBuffer(0, this._clearBufferAtTime - e), this._clearBufferAtTime = !1
            }
            const n = this.sorcerer.getDroppedFrameTotal();
            this.fire(oi.DROPPED_FRAMES, n);
            const r = this.sorcerer.getResponseSpeeds(),
                i = this._streams.video[this.sorcerer.video.activeStreamIndex],
                s = this._options.tests && this._options.tests.download_bitrate;
            if ((!s || !s.group) && i && this._brain.getCurrentSpeed) {
                const e = {
                    speed: this._brain.getCurrentSpeed(),
                    bitrate: i.bitrate,
                    speeds: r
                };
                this.fire(oi.BANDWIDTH, e)
            }
            const o = this._video.buffered.length;
            if (!o) return !0;
            const a = this._video.buffered.end(o - 1);
            return Math.ceil(a) === Math.ceil(this._video.duration) || (Math.abs(this.currentTime - a) < .2 ? (this._ranIntoBuffer || (this.fire(oi.STREAM_BUFFER_START, {
                hasLowerStreamIndex: this.sorcerer.video.activeStreamIndex > 0
            }), this._ranIntoBuffer = !0), !1) : void 0)
        }, i._isEnded = function() {
            return !!this.ended || Math.ceil(this.currentTime) === Math.ceil(this._video.duration)
        }, i._loadSegmentsIntervalTick = function() {
            return !!this.sorcerer && !this._isEnded() && (null !== this._preloadSegmentStreamIndex ? (this._loadPreloadSegments(), !0) : 0 !== this.currentTime || this._ready ? (this._loadSegments(), !0) : this._startedPlaying)
        }, i.onprogress = function() {
            this._brain.canPlayFromTimeInStream(this.currentTime, this._getCurrentStream()) && this._ranIntoBuffer && (this.fire(oi.STREAM_BUFFER_END), this._ranIntoBuffer = !1)
        }, i.onwaiting = function() {
            return !this._gapJumper || !this._gapJumper.start()
        }, i.onerror = function() {
            return !!this._video.error && (this._video.error.code === this._video.error.MEDIA_ERR_DECODE ? (this.fire(oi.SCANNER_ERROR, {
                reason: "encountered media decode error"
            }), !1) : t.prototype.onerror.call(this))
        }, i.pause = function() {
            t.prototype.pause.call(this)
        }, i.play = function() {
            return this._restartLoadSegmentsIntervalWithBackoff(), t.prototype.play.call(this, () => (this._resolveStartPreload && this._resolveStartPreload(), this._reloadingExistingVideo || this._ready || "auto" === this._preload || (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), this._onReady.then(() => Promise.resolve(this._seekInProgressPromise))))
        }, i.onpause = function() {
            return this._ignorePauseEvent ? (this._ignorePauseEvent = !1, !1) : (t.prototype.onpause.call(this), !0)
        }, i.onplay = function() {
            return !this._ignorePlayEvent || (this._ignorePlayEvent = !1, !1)
        }, i._addCallbackToPromise = function(e, t, n = !0) {
            let r = e.then(t);
            return n && (r = this._addCatchToPromise(r)), r
        }, i._addCatchToPromise = function(e) {
            return e.catch(e => (this.fire(oi.FILE_ERROR, {
                reason: e
            }), new Promise((e, t) => {})))
        }, i._handleBufferForSeek = function() {
            this._ready && this._streams.video[this.sorcerer.video.activeStreamIndex].bitrate / 1e3 > 12e3 && (this._removeBufferPromise = this.sorcerer.removeBuffer())
        }, i._startPreload = function(e, t) {
            return new Promise((n, r) => {
                "none" !== t || this._reloadingExistingVideo && !this.paused ? n(e) : this._resolveStartPreload = () => {
                    n(e), this._resolveStartPreload = null
                }
            })
        }, i._getSeekReadyPromiseForTime = function(e = this._timeToSeekTo) {
            return new Promise((t, n) => {
                const r = this._startedPlaying && 0 === e,
                    i = this._brain.canPlayFromTimeInStream(e, this._getCurrentStream());
                r || i ? t(e) : (this._handleBufferForSeek(), this._resolveSeek = t)
            }).then(e => {
                this._timeToSeekTo = null, this._seekInProgressPromise = null;
                const t = new Promise((e, t) => {
                    this._lastSeekReject = t;
                    const n = () => {
                        e(this._video.currentTime), this._video.removeEventListener("seeked", n)
                    };
                    this._video.addEventListener("seeked", n)
                });
                return this._video.currentTime = e, t
            })
        }, i._handlePreloadChanged = function(e, t) {
            "auto" !== e && "auto" === t && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), e !== t && "none" !== t && this._resolveStartPreload && this._resolveStartPreload()
        }, i._avDurationDifference = function(e) {
            const t = e.audio.reduce((e, t) => e + t.duration, 0),
                n = e.video.reduce((e, t) => e + t.duration, 0),
                r = t / e.audio.length,
                i = n / e.video.length;
            return r + 4 < i ? i - r : 0
        }, i._manifestContainsSegmentSizes = function(e) {
            return e.video.every(e => e.segments.every(e => "size" in e))
        }, i._initializeManifest = function(e) {
            return new Promise((t, n) => {
                if (this._manifest = e, this._streams.video = this._sortVideoStreams(e.video), e.audio) {
                    const t = this._avDurationDifference(e);
                    if (t > 0) return this.fire(oi.AV_DURATION_MISMATCH, t), this.fire(oi.SCANNER_ERROR, {
                        reason: "Encountered A/V duration mismatch"
                    }), void n();
                    const r = e.audio.filter(e => "opus" === e.codecs),
                        i = e.audio.filter(e => "opus" !== e.codecs),
                        s = ke.browser.safari || ke.iOS || ke.iPadOS || !MediaSource.isTypeSupported('audio/mp4; codecs="opus"') || !r.length ? i : r;
                    this._streams.audio = this._sortAudioStreams(s)
                }
                for (let r = 0; r < this._streams.video.length; r++) {
                    let t = 0;
                    if (e.audio) {
                        const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, r),
                            n = this._streams.audio[e];
                        n && (t = n.bitrate)
                    }
                    this._streams.video[r].audioBitrate = t
                }
                Ii(this._brain) && this._streams.audio.length > 0 && (this._brain.audioStreams = this._streams.audio), this._initDrm(this._streams.video, this._streams.audio, this._manifest.key_info), this._manifestContainsSegmentSizes(e) || this.resetBrain(!0), this.fire(oi.STREAMS_LOADED, this._streams), t()
            })
        }, i._setUpSorcerer = function(e, t) {
            this.sorcerer && this.sorcerer.destroy(), this.sorcerer = new is(e, t), this._video.src = URL.createObjectURL(this.sorcerer.mediaSource), this.successfulSegments = this.sorcerer.getSuccessfulSegments(), this.failedSegments = this.sorcerer.getFailedSegments(), this._restartLoadSegmentsIntervalWithBackoff()
        }, i._restartLoadSegmentsIntervalWithBackoff = function(e = !1) {
            this._restartLoadSegmentsInterval(500), clearTimeout(this._slowLoadSegmentTimeout), this._slowLoadSegmentTimeout = setTimeout(() => {
                this._restartLoadSegmentsInterval(5e3)
            }, 6e4), e && this._loadSegmentsIntervalTick()
        }, i._restartLoadSegmentsInterval = function(e) {
            clearInterval(this._loadSegmentsInterval), this._loadSegmentsInterval = setInterval(() => {
                this._loadSegmentsIntervalTick()
            }, e)
        }, i._getDuration = function(e = !1) {
            let t = e ? 1 / 0 : 0;
            for (const n in this._streams) this._streams[n].length && (t = Math[e ? "min" : "max"](t, this._streams[n][0].duration));
            return t
        }, i._initialize = function(e) {
            return this._initializeManifest(e).then(() => {
                const t = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null,
                    n = this._brain.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, t).length - 1;
                let r = this._streams.video[0];
                this._restrictedStreamIndexes.length && (r = this._streams.video[this._restrictedStreamIndexes[0]]), void 0 !== this._maxPreloadStreamIndex && n <= this._streams.video.indexOf(e.video[this._maxPreloadStreamIndex]) && (r = this._streams.video[n]), this._setUpSorcerer(this._video, {
                    duration: this._getDuration(),
                    fetcherTimeout: 8e3,
                    fetcherRetryAbortErrors: !1
                }), this.sorcerer.on("srcnotsupported", () => {
                    this.fire(oi.SCANNER_ERROR, {
                        reason: "this codec is not supported for mediasource playback"
                    })
                });
                const i = this._streams.video.indexOf(r);
                for (const e in this._streams) this._streams[e].forEach((t, n) => {
                    let r = this._getSegmentUrl(n, "init", e);
                    this._useRangeRequests(n, e) && this._streams[e][n].init_segment_range && (r = {
                        url: r,
                        byteRange: this._getRangeForSegment(n, "init", e)
                    }), this.sorcerer.addStream(`${t.mime_type}; codecs="${this._streams[e][n].codecs}"`, r)
                });
                this.sorcerer.video.switchTo(i, !0, {
                    reasonForSwitch: 7
                }), this.sorcerer.on("queued", this._handleQueued.bind(this)), this.sorcerer.on("downloadabort", this._handleAborted.bind(this)), this.sorcerer.on("appendbufferend", this._handleAppendBufferEnd.bind(this)), this.sorcerer.on("downloadstart", this._handleDownloadStart.bind(this)), this.sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this.sorcerer.on("downloaderror", this._handleDownloadError.bind(this)), this.sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this.sorcerer.on("quotaexceedederror", this._handleQuotaExceededError.bind(this)), this.sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this.sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this.sorcerer.mediaSource.addEventListener("sourceended", () => {
                    this.fire(ri.PROGRESS)
                })
            })
        }, i._sortVideoStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                const n = e.width * e.height * e.bitrate,
                    r = t.width * t.height * t.bitrate;
                return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
            })), t
        }, i._sortAudioStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                return e.bitrate * e.channels - t.bitrate * t.channels
            })), t
        }, i._useRangeRequests = function(e, t) {
            return !!this._streams[t][e].segments[0].range
        }, i._getRangeForSegment = function(e, t, n) {
            return "init" === t ? this._streams[n][e].init_segment_range : this._streams[n][e].segments[t].range
        }, i._getSegmentPriority = function(e, t, n = "video") {
            return "init" === t ? 0 : this._streams[n][e].segments[t].start
        }, i._getSegmentUrl = function(e, t, n = "video", r = !1) {
            if ("init" === t && !this._streams[n][e].init_segment_range && -1 === this._streams[n][e].init_segment.indexOf(".")) return function(e) {
                return yi(e).buffer
            }(this._streams[n][e].init_segment);
            let i = this._baseUrl;
            const s = this._manifest.base_url && -1 !== this._manifest.base_url.indexOf("//");
            if (s && (i = this._manifest.base_url), this._manifest.base_url && !s && (i += this._manifest.base_url), this._streams[n][e].base_url && (i += this._streams[n][e].base_url), this._useRangeRequests(e, n)) return i;
            if ("init" === t) return i += this._streams[n][e].init_segment, i;
            const o = this._streams[n][e].segments[t];
            o.url && (i += o.url);
            const a = -1 !== i.indexOf("akamaized"),
                u = -1 === i.indexOf("?") ? "?" : "&";
            return r && this.CMCDLogger && a && (i += `${u}${this.CMCDLogger.getLogAsQueryParam(o,n)}`), i
        }, i._key = function(e, t, n) {
            return `${e}:${t}:${n}`
        }, i._isFinalSegment = function(e, t, n) {
            return t === this._streams[n][e].segments.length - 1
        }, i._getCurrentlyLoadingStreamsForSegment = function(e, t) {
            const n = [],
                r = this._streamsForSegment[e];
            if (!r) return n;
            for (let i = 0; i < r.length; i++) this._waitingOnSet.has(this._key(r[i], e, t)) && n.push(r[i]);
            return n
        }, i.getCurrentStream = function(e = "video") {
            return this._getCurrentStream(0, e)
        }, i._getCurrentStream = function(e = 0, t = "video") {
            return void 0 !== this.sorcerer && (e = this.sorcerer[t].activeStreamIndex), this._streams[t][e]
        }, i._getStreamIndexToLoadAndSwitchReason = function(e) {
            let t = this._streams.video;
            const n = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null;
            if (t = this._brain.filterStreams(t, this._video.clientWidth, this._video.clientHeight, n), 0 === t.length) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this._switching.video && !Ii(this._brain)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = t[t.length - 1];
            if (r.id !== this._lastTargetStreamId) {
                this._lastTargetStreamId = r.id;
                const e = {
                    index: this._streams.video.indexOf(r),
                    streams: this._streams.video
                };
                this.fire(oi.STREAM_TARGET_CHANGE, e)
            }
            const i = this._getCurrentStream();
            return this._brain.shouldPowerUp(t, i, e).then(e => !1 === e.index ? this._brain.shouldPowerDown(t, i).then(e => !1 === e.index ? {
                index: e.index,
                reasonForSwitch: e.reasonForSwitch
            } : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            }) : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            })
        }, i._loadSegmentsForType = function(e = "video") {
            this._getStreamIndexToLoadAndSwitchReason(!1).then(t => {
                let {
                    index: n,
                    reasonForSwitch: r
                } = t, i = {
                    reasonForSwitch: r
                };
                "audio" === e && (!1 === n && (n = this.sorcerer.video.activeStreamIndex), n = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n), this.sorcerer.audio.activeStreamIndex === n && (n = !1));
                let s = !1;
                !1 !== n && (s = n > this.sorcerer[e].activeStreamIndex, this._switching[e] = !0, this.sorcerer[e].switchTo(n, !0, i).then(() => {
                    this._switching[e] = !1
                }).catch(console.error));
                let o = s;
                const a = this._brain.getSegmentsToLoad(o, e, this._getCurrentStream()),
                    u = this.sorcerer[e].activeStreamIndex;
                for (let c = 0; c < a.length; c++) {
                    const t = this._getSegmentUrl(u, a[c], e, !0),
                        n = this._getCurrentlyLoadingStreamsForSegment(a[c], e);
                    if (n.length > 1) continue;
                    if (1 === n.length && u <= n[0]) continue;
                    const r = this._isFinalSegment(u, a[c], e),
                        i = {
                            stream: u,
                            segment: a[c],
                            type: e
                        },
                        s = this.sorcerer[e].streams[u];
                    let o = t;
                    this._useRangeRequests(u, e) && (o = {
                        url: o,
                        byteRange: this._getRangeForSegment(u, a[c], e)
                    });
                    const l = this._getSegmentPriority(u, a[c], e),
                        h = "video" === e;
                    let d = null;
                    0 === u && "video" === e && (d = 16e3);
                    let f = null;
                    try {
                        f = this._streams[e][u].segments[a[c]].size
                    } catch (fl) {}
                    s.addSegment(o, {
                        identifier: i,
                        isFinalSegment: r,
                        priority: l,
                        includeWithBandwidthChecks: h,
                        timeout: d,
                        size: f
                    }).catch(e => {})
                }
            }).catch(console.error)
        }, i._loadPreloadSegments = function() {
            for (const e in this._streams) {
                if (0 === this._streams[e].length) continue;
                let t = 0;
                const n = this._brain.getSegmentsToLoad(!1, e, this._getCurrentStream());
                n.length > 0 && (t = n[0]);
                let r = this._preloadSegmentStreamIndex;
                "audio" === e && (r = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, this._preloadSegmentStreamIndex));
                const i = this._key(r, t, e);
                if (this._waitingOnSet.has(i)) continue;
                const s = this._getSegmentUrl(r, t, e),
                    o = this._isFinalSegment(r, t, e),
                    a = this.sorcerer[e].streams[r],
                    u = {
                        stream: r,
                        segment: t,
                        type: e
                    },
                    c = !0;
                let l = s;
                this._useRangeRequests(r, e) && (l = {
                    url: l,
                    byteRange: this._getRangeForSegment(r, t, e)
                }), a.addSegment(l, {
                    identifier: u,
                    isFinalSegment: o,
                    loadOnly: c,
                    priority: 0
                }).catch(e => {})
            }
        }, i._loadSegments = function() {
            return this._onReady && this._onReady.then(() => {
                for (const e in this._streams) this._streams[e].length > 0 && this._loadSegmentsForType(e)
            })
        }, i._handleQueued = function(e) {
            this._waitingOnSet.add(this._key(e.stream, e.segment, e.type)), this._streamsForSegment[e.segment] || (this._streamsForSegment[e.segment] = []), -1 === this._streamsForSegment[e.segment].indexOf(e.stream) && this._streamsForSegment[e.segment].push(e.stream)
        }, i._clearWaitingOn = function(e) {
            (this._streamsForSegment[e.segment] || []).forEach(t => {
                this._waitingOnSet.delete(this._key(t, e.segment, e.type))
            })
        }, i._handleAborted = function(e) {
            this._streamsForSegment[e.segment] && this._clearWaitingOn(e)
        }, i._handleAppendBufferEnd = function(e) {
            this.fire(oi.APPEND_BUFFER_END, {
                identifier: e
            }), this._restartLoadSegmentsIntervalWithBackoff(), this._checkSwitchUp && e.stream === this._lastStreamIndex && (this._checkSwitchUp = !1, this._clearBufferAtTime = this._streams.video[e.stream].segments[e.segment].start), this._streamsForSegment[e.segment] && this._clearWaitingOn(e);
            const t = this._brain.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream());
            null !== this._timeToSeekTo && this._resolveSeek && t && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null), this._gapJumper && this._gapJumper.onSegmentAppended()
        }, i._handleDownloadStart = function(e) {
            this.fire(oi.DOWNLOAD_START, {
                identifier: e
            })
        }, i._handleDownloadEnd = function(e, t) {
            this.fire(oi.DOWNLOAD_END, {
                identifier: e,
                data: t
            })
        }, i._handleDownloadError = function(e, t) {
            this._clearWaitingOn(e);
            let n = oi.DOWNLOAD_ERROR;
            410 === t && (n = oi.MEDIA_URL_EXPIRED), this.fire(n, {
                identifier: e,
                status: t
            })
        }, i._handleDownloadTimeout = function(e, t) {
            this.fire(oi.DOWNLOAD_TIMEOUT, {
                identifier: e,
                data: t
            }), this._streamsForSegment[e.segment] && this._clearWaitingOn(e), "video" === e.type ? this._switching.video = !1 : "audio" === e.type && (this._switching.audio = !1)
        }, i._handleQuotaExceededError = function(e) {
            this.fire(oi.QUOTA_EXCEEDED_ERROR, {
                buffered: e
            })
        }, i._handleStreamChangeStart = function(e, t) {
            const n = {
                previousStreamIndex: this._manifest.video.indexOf(this._streams.video[e]),
                index: this._manifest.video.indexOf(this._streams.video[t]),
                streams: this._manifest.video
            };
            this.fire(oi.STREAM_CHANGE_START, n)
        }, i._handleStreamChange = function(e, t) {
            e > this._lastStreamIndex && this.currentTime > 0 && (this._checkSwitchUp = !0), this._lastStreamIndex = e;
            const n = {
                index: this._manifest.video.indexOf(this._streams.video[e]),
                streams: this._manifest.video,
                metadata: t
            };
            this.fire(oi.STREAM_CHANGE, n)
        }, i._initDrm = function(e = [], t = [], n = {}) {
            const r = this._telecineVideo.drmHandler;
            if (!r) return;
            const i = {
                audio: t.map(e => `${e.mime_type};codecs="${e.codecs}"`),
                video: e.map(e => `${e.mime_type};codecs="${e.codecs}"`)
            };
            r.init(this, i, n), r.setFallbackCallback(() => this.pause())
        }, i._setupCMCDLogger = function() {
            var e, t;
            (null == (e = this._options.tests) || null == (t = e.cmcd) ? void 0 : t.group) && (this.CMCDLogger = new cs(this, this._options.sessionMetadata))
        }, i._loadMediaManifest = function() {
            return import ("./media-manifest.module.js")
        }, r(n, [{
            key: "preload",
            get: function() {
                return this._preload
            },
            set: function(e) {
                this._handlePreloadChanged(this._preload, e), this._preload = e
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._video
            }
        }, {
            key: "videoWidth",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.width : this._video.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.height : this._video.videoHeight
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                return this._restrictedStreamIndexes
            },
            set: function(e = []) {
                this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._onReady.then(() => this.lockStreamIndexes()).catch(console.error))
            }
        }, {
            key: "currentTime",
            get: function() {
                return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
            },
            set: function(e) {
                (this._startedPlaying || 0 !== e) && this.seekToTime(e)
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._lastDownloadBitrate
            }
        }, {
            key: "brainDebug",
            get: function() {
                const e = this.sorcerer && this._brain && this._brain.getCurrentSpeed ? this._brain.getCurrentSpeed() : null;
                let t = this.sorcerer && this.sorcerer.getResponseSpeeds ? this.sorcerer.getResponseSpeeds() : null;
                return t = t ? t.slice(-20) : [], {
                    currentSpeed: e,
                    responseSpeeds: t
                }
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this.sorcerer ? this.sorcerer.video.activeStreamIndex > 0 : null
            }
        }]), n
    }(Hi),
    ds = function() {
        function e(e) {
            this._scanner = e, this._currentTime = 0, this._latencyInterval = setInterval(this._onLatencyInterval.bind(this), 500)
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._latencyInterval)
        }, t._onLatencyInterval = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return;
            this._currentTime = e.currentTime;
            const n = this._computeLatency();
            null !== n && (this._latency = n, this._scanner.lowLatencyMode ? ke.browser.ie || ke.browser.safari || null !== this._scanner.presentationDelay && (e.playbackRate = 1) : e.playbackRate = 1)
        }, t._estimateLiveEdge = function() {
            const e = this._scanner.getCurrentStream();
            if (!e) return null;
            const t = e.segments[0],
                n = this._scanner.videoElement.buffered.length && (null == t ? void 0 : t.start);
            return t && e.hasProgramDateTime && n ? n + (Date.now() - t.programDateTime) / 1e3 : e.edge
        }, t._computeLatency = function() {
            const e = this._estimateLiveEdge();
            return null === e || 0 === this._currentTime ? null : e - this._currentTime
        }, t._getForwardBufferLength = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return 0;
            const n = e.buffered.length;
            return n ? e.buffered.end(n - 1) : t.edge - this._currentTime
        }, r(e, [{
            key: "latency",
            get: function() {
                return this._latency
            }
        }, {
            key: "liveSyncPosition",
            get: function() {
                const e = this._estimateLiveEdge(),
                    t = this._scanner.presentationDelay,
                    n = this._scanner.getCurrentStream();
                return null === e || null === t || null === n ? 0 : Math.min(n.edge, e - t - this.edgeStalled)
            }
        }, {
            key: "edgeStalled",
            get: function() {
                const e = this._scanner.getCurrentStream();
                if (!e) return 0;
                const t = 3 * (this._scanner.lowLatencyMode && e.partTargetDuration || e.targetDuration);
                return Math.max(e.age - t, 0)
            }
        }]), e
    }();
const fs = [1, 2, 5];
let _s = function(e) {
    function t(t, n = {}) {
        var r;
        return (r = e.call(this, t, n) || this)._UPSHIFT_BANDWIDTH_THRESHOLD = .4, r._DOWNSHIFT_BANDWIDTH_THRESHOLD = .6, r.consecutiveStreamIndex = {}, r.isNewPlayback = !0, r
    }
    a(t, e), r(t, [{
        key: "displayName",
        get: function() {
            return "Live"
        }
    }]);
    var n = t.prototype;
    return n.optimalStream = function(e, t) {
        var n, r;
        this.isNewPlayback && ((null == (r = this.scanner.sorcerer) ? void 0 : r.getResponseSpeeds().length) >= 2 && (this.isNewPlayback = !1));
        if (1 === e.length) return {
            index: 0,
            reasonForSwitch: 6
        };
        if (this.isNewPlayback) {
            let t = 0,
                n = 0,
                r = this.scanner.videoElement.clientHeight,
                i = [];
            for (let s = 0; s < e.length; s++) {
                let o = e[s].height;
                i.push(o), o < r && o > n && (t = s, n = e[s].height)
            }
            return t = Math.max(0, t - 1), {
                index: t,
                reasonForSwitch: 4
            }
        }
        const i = this.getCurrentSpeed();
        let s = t,
            o = t;
        for (let f = 0; f < e.length; f++) i * this._UPSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (s = f), i * this._DOWNSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (o = f);
        const a = t < s ? s : o;
        this._clearConsecutiveStreamIndexes(a), this.consecutiveStreamIndex[a]++;
        const u = this.scanner.lowLatencyMode ? .5 : 1.5,
            c = this.scanner.segmentLength * u,
            l = this.scanner.videoElement,
            h = l.buffered,
            d = null == (n = this._options.mediaSourceScanner) ? void 0 : n.droppedFrameSwitchPercent;
        return h && 0 !== h.length ? h.end(h.length - 1) - l.currentTime < c ? {
            index: 0 !== t ? t - 1 : 0,
            reasonForSwitch: 1
        } : t > 0 && !isNaN(d) && this.hasTooManyDroppedFrames(t, this.scanner.getCurrentStream(), d) ? (this.blacklist(t), this.scanner.fire(oi.DROPPED_FRAME_PERCENT_EXCEEDED), {
            index: t - 1,
            reasonForSwitch: 2
        }) : this.consecutiveStreamIndex[a] > 2 && a !== t ? {
            index: a,
            reasonForSwitch: 3
        } : {
            index: t,
            reasonForSwitch: null
        } : {
            index: 0,
            reasonForSwitch: 5
        }
    }, n.getCurrentSpeed = function() {
        var e;
        return null == (e = this.scanner.sorcerer) ? void 0 : e.getCurrentSpeed({
            type: "average",
            howMany: 5,
            weights: fs
        })
    }, n._clearConsecutiveStreamIndexes = function(e) {
        this.consecutiveStreamIndex[e] || (this.consecutiveStreamIndex[e] = 0);
        for (const t in this.consecutiveStreamIndex) this.consecutiveStreamIndex.hasOwnProperty(t) && parseInt(t, 10) !== e && (this.consecutiveStreamIndex[t] = 0)
    }, n.getAvailabilityStart = function(e) {
        return this._getSegmentAvailabilityStart(e.edge)
    }, n.getAvailabilityEnd = function(e) {
        return this._getSegmentAvailabilityEnd(e.edge)
    }, n.getSegmentsToLoad = function(e, t, n) {
        var r, i, s;
        const {
            currentTime: o,
            sorcerer: a,
            bufferTarget: u
        } = this.scanner, c = null == (r = a[t]) || null == (i = r.sourceBuffer) ? void 0 : i.buffered, l = (null == c ? void 0 : c.length) ? c.start(c.length - 1) : 0, h = O(Math.max(o, l), c);
        if (!e && h >= u) return [];
        const d = this._getSegmentAvailabilityStart(n.edge),
            f = this._getSegmentAvailabilityEnd(n.edge),
            _ = this.scanner.lowLatencyMode && (null == (s = n.parts) ? void 0 : s.length),
            p = (_ ? n.parts : n.segments).filter(t => !!t.uri && (e || !this.scanner.isSegmentAdded(t)) && !(t.end < d || t.start > f));
        return _ && p.forEach((e, t) => {
            for (; e = e.dependentOn;) p.includes(e) || this.scanner.isStreamSegmentAdded(e) || p.splice(t, 0, e)
        }), a[t].activeStreamIndex, p
    }, n._getSegmentAvailabilityStart = function(e) {
        const t = e - this._getPresentationDelay();
        return Math.max(0, t)
    }, n._getSegmentAvailabilityEnd = function(e) {
        const t = this._getPresentationDelay(),
            n = this.scanner.bufferTarget,
            r = e - Math.max(0, t - n);
        return Math.max(0, r)
    }, n._getPresentationDelay = function() {
        return this.scanner.presentationDelay || this.scanner.manifest.presentationDelay
    }, t
}(os);
const ps = ["disabled", "hidden", "showing"],
    ms = ["subtitles", "captions", "descriptions", "chapters", "metadata"],
    vs = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"],
    gs = new WeakMap,
    ys = new WeakMap;
let Es = function() {
    function e({
        kind: e,
        src: t = null,
        label: n = "",
        language: r = "",
        id: i = gi()
    }, s) {
        if (-1 === ms.indexOf(e)) throw Di(12, "SYNTAX_ERR", "Syntax Error");
        rn(this), Object.defineProperties(this, {
            kind: {
                value: e,
                enumerable: !0
            },
            label: {
                value: n,
                enumerable: !0
            },
            language: {
                value: r,
                enumerable: !0
            },
            id: {
                value: `${i}`,
                enumerable: !0
            },
            rtl: {
                value: -1 !== vs.indexOf(r.substr(0, 2)),
                enumerable: !0
            }
        }), this.video = s, this.src = t, this._modeHasBeenSet = !1, gs.set(this, "disabled")
    }
    return e.prototype.dispatchEvent = function(e) {
        this.fire(e, {
            target: this
        })
    }, r(e, [{
        key: "mode",
        get: function() {
            return gs.get(this)
        },
        set: function(e) {
            if (ps.indexOf(e) > -1) {
                if (this._modeHasBeenSet = !0, gs.get(this) === e) return;
                gs.set(this, e), this.video.currentScanner && this.video.currentScanner.setModeForTrack(this, e), this.dispatchEvent("modechange")
            }
        }
    }, {
        key: "src",
        get: function() {
            return ys.get(this)
        },
        set: function(e) {
            ys.set(this, e), this.video.fire(oi.TEXT_SRC_UPDATE, this)
        }
    }, {
        key: "cues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getCuesForTrack(this) : []
        }
    }, {
        key: "activeCues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getActiveCuesForTrack(this) : []
        }
    }, {
        key: "trackElement",
        get: function() {
            return document.getElementById(`telecine-track-${this.id}`)
        }
    }]), e
}();

function Ss(e) {
    var t = /^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/.exec(e);
    if (!t) return -1;
    var n = parseInt(t[4], 10) / 1e3;
    return n += parseInt(t[3], 10), t[2] && (n += 60 * parseInt(t[2], 10)), t[1] && (n += 60 * parseInt(t[1], 10) * 60), n
}

function Ts(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function bs(e, t) {
    try {
        var n = e()
    } catch (fl) {
        return t(fl)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function As(e, t) {
    return e && e.then ? e.then(t) : t(e)
}
const Is = ke.browser.ie || ke.browser.edge ? .5 : .2;

function ws() {}

function Rs(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }
}

function Ps(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function Ds(e, t) {
    if (!t) return e && e.then ? e.then(ws) : Promise.resolve()
}
let ks = function(e) {
    function t(t, n = {}) {
        var r, i, s;
        (s = e.call(this, t, n) || this)._playInitiated = !1, s._captionsEnabled = !1, s._STREAM_SWITCH_CHECK_INTERVAL = 2e3, s._DOWN_SHIFT_CHECK_INTERVAL = 1e4, s.reset();
        const o = n.lowLatencyMode ? 5 : 12;
        return s.bufferTarget = n.bufferTarget || o, s.presentationDelay = n.presentationDelay || o, s.lowLatencyMode = n.lowLatencyMode, s._timeoutTest = null == (r = s._options.tests) || null == (i = r.llhls_timeout) ? void 0 : i.group, window.addEventListener("online", () => {
            s.play()
        }), s
    }
    a(t, e), r(t, null, [{
        key: "displayName",
        get: function() {
            return "HLSLiveScanner"
        }
    }, {
        key: "supported",
        get: function() {
            return "undefined" != typeof MediaSource && MediaSource.isTypeSupported
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/x-mpegURL"]
        }
    }, {
        key: "supportsPlaybackRate",
        get: function() {
            return !1
        }
    }]);
    var n = t.prototype;
    return n.deactivate = function() {
        e.prototype.deactivate.call(this), this.reset()
    }, n.reset = function() {
        var e, t, n;
        null == (e = this._sorcerer) || e.destroy(), null == (t = this._manifestLoader) || t.stop(), null == (n = this._latencyController) || n.destroy(), this._videoReady = new D, this._sorcerer = null, this._streams = {}, this._streams.video = [], this._streams.audio = [], this._lastStreamIndex = 0, this._isOnline = !1, this._hasLiveEventEnded = !1, this._timeSinceLastStreamSwitchCheck = 0, this._timeSinceLastDownShift = Number.NEGATIVE_INFINITY, this._lastStallCurrentTime = -1, this._abr = new _s(this, this._options), this._latencyController = new ds(this), this._restrictedStreamIndexes = [], this._switching = {}, this._segmentsAdded = {}, this._captionsAdded = {}
    }, n.endLive = function() {
        var t;
        this._isOnline = !1, null == (t = this._manifestLoader) || t.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._sorcerer.endOfStream()), this._hasLiveEventEnded = !0, e.prototype.deactivate.call(this), this.fire(ri.ENDED)
    }, n._signalOnline = function() {
        this._isOnline || (this._isOnline = !0, this.fire(ai.STREAM_ONLINE))
    }, n._signalOffline = function() {
        this._isOnline && (this._isOnline = !1, this.fire(ai.STREAM_OFFLINE))
    }, n._toggleConnection = function(e) {
        e ? this._signalOnline() : this._signalOffline()
    }, n._loadManifest = function(e) {
        try {
            const t = this;
            if (t._hasLiveEventEnded) return;
            t._manifestLoader && (t._manifestLoader.stop(), t._manifestLoader.off());
            let n = [t._loadMediaManifest()];
            return t.video.metadata.p2pReady && n.push(t.video.metadata.p2pReady), Ts(Promise.allSettled(n), (function([n]) {
                const {
                    M3U8Loader: r,
                    PLAYLIST_UPDATE: i,
                    PLAYLIST_ERROR: s,
                    convertTsCodecs: o
                } = n.value;
                return t._manifestLoader = new r, t._manifestLoader.lowLatencyMode = t.lowLatencyMode, t._manifestLoader.on(i, t._onPlaylistUpdate.bind(t)), t._manifestLoader.on(s, e => {
                    t._signalOffline()
                }), As(bs((function() {
                    const n = t.video.metadata.playlistRefreshUrl;
                    return Ts(t._manifestLoader.start(e, n), (function(e) {
                        t._manifest = e, t._signalOnline()
                    }))
                }), (function(e) {
                    throw t._signalOffline(), t.endLive(), e
                })), (function(e) {
                    t._streams.video = Os(function(e) {
                        return e.filter(t => t.codecs.split(".")[0] === e[0].codecs.split(".")[0])
                    }(function(e) {
                        const t = e.slice(0);
                        return t.sort((function(e, t) {
                            const n = e.width * e.height * e.bitrate,
                                r = t.width * t.height * t.bitrate;
                            return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
                        })), t
                    }(t._manifest.video))), t._streams.audio = Os(v(g(t._streams.video, ({
                        audio: e
                    }) => e)));
                    const {
                        index: n,
                        reasonForSwitch: r
                    } = t._getStream("video", !0);
                    let i = {
                        reasonForSwitch: r
                    };
                    return Ts(t._manifestLoader.switchTo("video", n), (function() {
                        let e, r = [];
                        if (t._streams.audio.length) {
                            let {
                                index: n
                            } = t._getStream("audio", !0);
                            e = n, r.push(t._manifestLoader.switchTo("audio", e))
                        }
                        if (t.manifest.captions && t.manifest.captions.length > 0) {
                            const {
                                index: e
                            } = t._getStream("subtitles", !0);
                            r.push(t._manifestLoader.switchTo("subtitles", e))
                        }
                        return Ts(Promise.all(r), (function() {
                            var r, s;
                            null == (r = t._sorcerer) || r.destroy(), t._sorcerer = new is(t._video, {
                                fetcherRetryAbortErrors: !1,
                                fetcherTimeout: 8e3
                            }), t._sorcerer.initFrameDropper(), t._streams.video.forEach(e => {
                                t._sorcerer.addStream(o(Ti(t._manifestLoader.activeStream("video").mimeType, e.codecs)), e.initSegment)
                            }), t._streams.audio.forEach(e => {
                                t._sorcerer.addStream(o(Ti(t._manifestLoader.activeStream("audio").mimeType, e.codecs)), e.initSegment)
                            }), t.fire(oi.STREAMS_LOADED, t._streams), t.manifest.captions && t.manifest.captions.length > 0 && (t.manifest.captions.forEach(t._loadTextTrack.bind(t)), t.fire(oi.TEXT_TRACKS_AVAILABLE)), t._setUpMediaSorcererEvents(), t._sorcerer.video.switchTo(n, !1, i), t._streams.audio.length && (null == (s = t._sorcerer.audio) || s.switchTo(e, !1))
                        }))
                    }))
                }))
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._refreshManifest = function() {
        try {
            const e = this;
            return function(e) {
                if (e && e.then) return e.then(ws)
            }(bs((function() {
                return Ts(e._manifestLoader.update(), (function() {
                    e._signalOnline()
                }))
            }), (function() {
                e._signalOffline()
            })))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._setUpMediaSorcererEvents = function() {
        this._sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this._sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this._sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this._sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this._sorcerer.on("downloadabort", this._handleDownloadAbort.bind(this)), this._sorcerer.on("appendbufferend", this._handleBufferAppend.bind(this))
    }, n._handleDownloadEnd = function(e, t) {
        if (e && e.isInitSegmentRequest) return;
        const n = this._getCurrentStream();
        t.extraContext = {
            liveAvail: {
                start: this._abr.getAvailabilityStart(n),
                end: this._abr.getAvailabilityEnd(n)
            }
        }, this.fire(oi.DOWNLOAD_END, {
            identifier: e,
            data: t
        })
    }, n._handleDownloadTimeout = function(e, t) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e), this._switching[e.type] = !1, this.fire(oi.DOWNLOAD_TIMEOUT, {
            identifier: e,
            data: t
        }))
    }, n._handleDownloadAbort = function(e) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e))
    }, n._handleStreamChangeStart = function(e, t) {
        const n = {
            previousStreamIndex: this._streams.video.indexOf(this._streams.video[e]),
            index: this._streams.video.indexOf(this._streams.video[t]),
            streams: this._streams.video
        };
        this.fire(oi.STREAM_CHANGE_START, n)
    }, n._handleStreamChange = function(e, t = {}) {
        this.fire(oi.STREAM_CHANGE, {
            index: e,
            streams: this._streams.video,
            metadata: t
        })
    }, n._handleBufferAppend = function(e) {
        const {
            type: t,
            stream: n
        } = e, r = this.sorcerer[t].sourceBuffer.buffered, i = this._getSegmentById(e);
        i && r.length && (this._streams[t][n].playlist.timeOffset = r.end(r.length - 1) - (i.end - i.timeOffset))
    }, n._key = function({
        type: e,
        segment: t,
        part: n
    }) {
        return `${e}_${t}_${n}`
    }, n._getSegmentById = function({
        type: e,
        stream: t,
        segment: n,
        part: r
    }) {
        const i = this._streams[e][t].getSegmentBySN(n);
        return (null == i ? void 0 : i.getPart(r)) || i
    }, n._clearSegment = function(e) {
        if (e.part > 0) {
            const t = o(o({}, e), {}, {
                part: e.part - 1
            });
            this._clearSegment(t)
        }
        const t = this._key(e);
        delete this._segmentsAdded[t]
    }, n.isSegmentAdded = function(e) {
        return !!this._segmentsAdded[this._key(e)]
    }, n.isStreamSegmentAdded = function(e) {
        const t = this._key(e),
            n = this._sorcerer[e.type].activeStreamIndex;
        return !!this._segmentsAdded[t] && this._segmentsAdded[t].stream === n
    }, n._onPlaylistUpdate = function(e, t) {
        try {
            const r = this,
                {
                    type: i
                } = e;
            var n;
            return r.fire(oi.STREAM_UPDATED, e), "subtitles" === i ? void(r._captionsEnabled && (null == (n = r.manifest.captions) ? void 0 : n.length) > 0 && r._addTextTrackCue()) : (t || r._loadSegmentsForType(i), r._toggleConnection(r._hasNewSegments(i) || !r._atDurationEnd()), r._checkForPlaybackGap(), (r.lowLatencyMode || r.video.metadata.p2pReady) && r._checkForPlaybackStall(), Ts())
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._loadTextTrack = function({
        label: e,
        language: t
    }, n) {
        if (!this._captionsTrack) {
            const r = new Es({
                label: e,
                id: n,
                kind: "captions",
                language: t
            }, this._telecineVideo);
            this._telecineVideo.textTracks = pi([r]), this._captionsTrack = this.addTextTrack(r)
        }
    }, n._addTextTrackCue = function() {
        try {
            const e = this;
            return Ts(e._videoReady, (function() {
                e.manifest.captions && e.manifest.captions[0].segments.forEach(Rs((function(t) {
                    const n = `${t.type}_${t.mediaSequenceNumber}`;
                    if (!e._captionsAdded[n]) return e._captionsAdded[n] = !0, Ts(oe(t.url).text(), (function(t) {
                        const n = function(e) {
                                var t = 0,
                                    n = e.split(/(?:(?:\r\n|\n){2,})/),
                                    r = [],
                                    i = null;
                                do {
                                    0 === t && /^\uFEFF?WEBVTT(?: .*)?/.test(n[t]) && t++, (i = /^(?:(.*)(?:\r\n|\n))?([\d:,.]+) --> ([\d:,.]+)(.*)?(?:\r\n|\n)([\s\S]*)/.exec(n[t])) && r.push({
                                        startTime: Ss(i[2]),
                                        endTime: Ss(i[3]),
                                        text: i[5]
                                    }), t++
                                } while (t < n.length);
                                return r
                            }(t),
                            r = function(e) {
                                const t = e.match(/=MPEGTS:(\d+),/);
                                return (t && t[1] || 0) / 9e4
                            }(t);
                        n.forEach(t => {
                            t.startTime = r + t.startTime, t.endTime = r + t.endTime;
                            const n = new(window.VTTCue || window.TextTrackCue)(t.startTime, t.endTime, t.text);
                            e._captionsTrack.addCue(n)
                        })
                    }))
                })))
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._hasNewSegments = function(e) {
        var t;
        const n = this._getCurrentStream(e),
            r = 3 * (this.lowLatencyMode ? 3 : 1);
        return (null == (t = n.playlist) ? void 0 : t.misses) < r
    }, n._waitForEnoughSegments = function() {
        try {
            var e, t, n;
            const r = this;
            if (!(null == (e = r._options) || null == (t = e.tests) || null == (n = t.live_verify_duration) ? void 0 : n.group)) return Promise.resolve();
            const i = 1e3 * r.bufferTarget,
                s = r.bufferTarget / 2,
                o = Date.now();
            return Ts(r._videoReady, (function() {
                const e = Rs((function() {
                    return r.availableDuration >= s ? Promise.resolve(!0) : Date.now() - o >= i ? Promise.resolve(!1) : Ts(b(100), (function() {
                        return Ts(r._refreshManifest(), (function() {
                            return e()
                        }))
                    }))
                }));
                return e()
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._loadSegments = function() {
        try {
            const e = this;
            return Ts(e._videoReady, (function() {
                for (const t in e._streams) e._streams[t].length > 0 && e._loadSegmentsForType(t)
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._loadSegmentsForType = function(e) {
        try {
            const t = this;
            return Ts(t._videoReady, (function() {
                const {
                    index: n,
                    reasonForSwitch: r
                } = t._getStream(e);
                let i;
                return Ps((function() {
                    if (n >= 0 && n !== t.sorcerer[e].activeStreamIndex) return i = n > t.sorcerer[e].activeStreamIndex, t._switching[e] = !0, Ts(t._manifestLoader.switchTo(e, n), (function() {
                        let i = {
                            reasonForSwitch: r
                        };
                        t.sorcerer[e].switchTo(n, !0, i).then(() => {
                            t._switching[e] = !1
                        }).catch(console.error)
                    }))
                }), (function() {
                    return Ts(b(0), (function() {
                        const n = t.lowLatencyMode && void 0 !== i,
                            r = t._sorcerer[e].activeStreamIndex,
                            s = t._getCurrentStream(e, r),
                            o = t._abr.getSegmentsToLoad(n, e, s),
                            a = t._getSegmentTimeoutMs();
                        o.forEach(n => {
                            const i = t._key(n),
                                o = {
                                    type: e,
                                    stream: r,
                                    segment: n.segment,
                                    part: n.part
                                },
                                u = "video" === e && !n.hint;
                            let c = a;
                            if (n.hint && t._playInitiated && n.start > t.currentTime) {
                                const e = 1e3 * (n.start - t.currentTime);
                                c = Math.min(8e3, e + a)
                            }
                            const l = s.bitrate / 8 * n.duration,
                                h = t.sorcerer[e].streams[r],
                                d = t._preventExpiredSegmentUsage(n);
                            h.addSegment(d, {
                                identifier: o,
                                includeWithBandwidthChecks: u,
                                priority: n.programDateTime,
                                excludeConnectTime: t.lowLatencyMode,
                                timeout: t._timeoutTest || t.lowLatencyMode ? c : 8e3,
                                size: t._timeoutTest || t.lowLatencyMode ? l : void 0
                            }).catch(e => {
                                e instanceof Wi || e instanceof B || t._clearSegment(o)
                            }), t._segmentsAdded[i] = o
                        })
                    }))
                }))
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._preventExpiredSegmentUsage = function(e) {
        var t;
        let n = null == e ? void 0 : e.url;
        const r = null == (t = this._manifestLoader) ? void 0 : t.baseUrl;
        return r && n && !n.startsWith(r) && (n = `${r}${e.uri}`), n
    }, n._getStream = function(e, t = !1) {
        var n, r;
        if (this._switching[e]) return {
            index: -1,
            reasonForSwitch: null
        };
        if ("subtitles" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.subtitles[e.currentRenditions.subtitles].index,
                reasonForSwitch: null
            }
        }
        if ("audio" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.audio[e.currentRenditions.audio].index,
                reasonForSwitch: null
            }
        }
        if (!t && vi(this._timeSinceLastStreamSwitchCheck) < this._STREAM_SWITCH_CHECK_INTERVAL) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        this._timeSinceLastStreamSwitchCheck = mi();
        const i = null == (n = this.video) || null == (r = n.metadata) ? void 0 : r.percentShown,
            s = this._abr.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, i);
        if (0 === s.length) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        const {
            index: o,
            reasonForSwitch: a
        } = this._abr.optimalStream(s, this._lastStreamIndex), u = s[o], c = this._streams.video.indexOf(u);
        if (c >= 0 && (t || c !== this._lastStreamIndex)) {
            if (c > this._lastStreamIndex && vi(this._timeSinceLastDownShift) < this._DOWN_SHIFT_CHECK_INTERVAL) return {
                index: this._lastStreamIndex,
                reasonForSwitch: a
            };
            c < this._lastStreamIndex && (this._timeSinceLastDownShift = mi());
            const e = {
                index: c,
                streams: this._streams.video
            };
            return this.fire(oi.STREAM_TARGET_CHANGE, e), this._lastStreamIndex = c, {
                index: c,
                reasonForSwitch: a
            }
        }
        return {
            index: this._lastStreamIndex,
            reasonForSwitch: a
        }
    }, n.getCurrentStream = function(e = "video") {
        return this._getCurrentStream(e)
    }, n._getCurrentStream = function(e = "video", t = 0) {
        return void 0 !== this._sorcerer && null !== this._sorcerer && (t = this._sorcerer[e].activeStreamIndex), this._streams[e][t]
    }, n._checkForPlaybackStall = function() {
        if (this._video.currentTime === this._lastStallCurrentTime && mi() - this._lastStallCheckTime >= 1e3 && this._shouldBeMakingProgress()) {
            const e = "Jumping forward 0.1s" + ` because of stall at time of ${this._video.currentTime}`;
            this.fire(ai.STALL_JUMP, {
                msg: e
            }), this._video.currentTime += .1
        }
        this._lastStallCurrentTime = this._video.currentTime, this._lastStallCheckTime = mi()
    }, n._shouldBeMakingProgress = function() {
        return 0 !== this._video.readyState && !!this._video.buffered.length && !this._video.paused && this._hasContentFor(this._video.buffered, this._video.currentTime)
    }, n._hasContentFor = function(e, t) {
        for (let n = 0; n < e.length; n++)
            if (!(t < e.start(n) - .1 || t > e.end(n) - .5)) return !0;
        return !1
    }, n._checkForPlaybackGap = function() {
        const e = this.buffered;
        if (!e.length) return;
        const t = e.length,
            n = this._video.currentTime;
        let r, i, s;
        try {
            r = function(e, t) {
                if (!e || !e.length) return null;
                if (1 === e.length && e.end(0) - e.start(0) < 1e-6) return null;
                let n;
                for (let r = 0; r < e.length; r++)
                    if (e.start(r) > t && (0 === r || e.end(r - 1) - t <= .5)) {
                        n = r;
                        break
                    }
                return n >= 0 ? n : null
            }(e, n)
        } catch (fl) {
            throw DOMException, fl
        }
        if (null === r) return;
        if (0 === this._video.readyState) return;
        if (this._video.paused) return;
        if (t <= r) return;
        try {
            i = e.start(r), s = e.end(t - 1)
        } catch (fl) {
            throw DOMException, fl
        }
        const o = i - n,
            a = s - i,
            u = this.lowLatencyMode ? 1 : 2;
        if (a > 0 && a <= this.segmentLength * u) {
            const e = "Preventing jump too close to buffered end time." + ` Would have jumped to: ${i}.` + ` Last buffered end time ${s}.`;
            this.fire(ai.BUFFER_GAP_JUMP_PREVENT, {
                msg: e
            })
        } else {
            if (0 === r) {
                const e = `Jumping forward ${o}` + ` seconds because of gap before start time of ${i}`;
                this.fire(ai.BUFFER_GAP_JUMP, {
                    msg: e
                })
            } else {
                const t = `Jumping forward ${o} seconds because of gap starting at` + ` ${e.end(r-1)} and ending at ${i}`;
                this.fire(ai.BUFFER_GAP_JUMP, {
                    msg: t
                })
            }
            this._video.currentTime = i + .1
        }
    }, n._atDurationEnd = function() {
        const e = this.buffered;
        return !!(e && e.length && this._video.currentTime + Is > e.end(e.length - 1))
    }, n.setVideoSrc = function(e) {
        try {
            const t = this;
            return Ts(t._startPreload(t._preload), (function() {
                return Ts(t._loadManifest(e), (function() {
                    t._video.src = URL.createObjectURL(t._sorcerer.mediaSource), t._videoReady.resolve()
                }))
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._startPreload = function(e) {
        try {
            const t = this;
            return t._preloadReady = new D, "none" === e && t.paused || t._preloadReady.resolve(), t._preloadReady
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n.getBitrateAtTime = function(e, t) {
        if (!this._sorcerer) return 0;
        const n = this._sorcerer.streamIndexAtTime(e, t);
        return this._streams[t][n] ? this._streams[t][n].bandwidth : 0
    }, n.onprogress = function() {
        this._checkForPlaybackGap()
    }, n.ondurationchange = function() {
        this._checkForPlaybackGap()
    }, n.ontimeupdate = function() {
        if (!this._sorcerer) return;
        e.prototype.ontimeupdate.call(this), this.fire(oi.DROPPED_FRAMES, this._sorcerer.getDroppedFrameTotal());
        const t = this._getCurrentStream();
        if (t) {
            const e = {
                speed: this._abr.getCurrentSpeed(),
                bitrate: t.bitrate,
                speeds: this._sorcerer.getResponseSpeeds()
            };
            this.fire(oi.BANDWIDTH, e)
        }!this._isOnline && this._atDurationEnd() && this.fire(ai.STREAM_OFFLINE), !this.lowLatencyMode && vi(this._timeSinceLastStreamSwitchCheck) > this._STREAM_SWITCH_CHECK_INTERVAL && this._loadSegments()
    }, n.seekToTime = function() {}, n.onpause = function() {
        var e;
        null == (e = this._manifestLoader) || e.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._segmentsAdded = {}, this._sorcerer.removeBuffer().catch(() => {}))
    }, n.onplay = function() {
        this._playInitiated && this._refreshManifest()
    }, n.pause = function() {
        e.prototype.pause.call(this)
    }, n.play = function() {
        const t = this;
        return e.prototype.play.call(this, Rs((function() {
            return t._preloadReady.resolve(), Ps((function() {
                if (t._playInitiated) return t._segmentsAdded = {}, As(bs((function() {
                    return Ds(t._sorcerer.removeBuffer())
                }), (function(e) {})), (function() {
                    return Ds(t._refreshManifest())
                }))
            }), (function() {
                return Ts(t._videoReady, (function() {
                    return Ts(t._waitForEnoughSegments(), (function() {
                        return t._loadSegments(), Ts(t._bufferAvailable(), (function() {
                            const e = Math.max(t._latencyController.liveSyncPosition, t._video.buffered.start(0));
                            t.currentTime = e, t._playInitiated = !0
                        }))
                    }))
                }))
            }))
        })))
    }, n._bufferAvailable = function() {
        return new Promise(e => {
            const t = () => {
                this.buffered.length && (this._sorcerer.off("appendbufferend", t), e())
            };
            this._sorcerer.on("appendbufferend", t), t()
        })
    }, n._getSegmentTimeoutMs = function() {
        return this._abr.getSegmentRelativeTimeout(this._streams.video, this._getCurrentStream("video"), 1e3 * this.segmentLength)
    }, n._loadMediaManifest = function() {
        return import ("./media-manifest.module.js")
    }, n.setCaptionsState = function(e) {
        this._captionsEnabled = e
    }, r(t, [{
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._preload !== e && "none" !== e && this._preloadReady.resolve(), this._preload = e
        }
    }, {
        key: "latency",
        get: function() {
            var e;
            return null == (e = this._latencyController) ? void 0 : e.latency
        }
    }, {
        key: "lowLatencyMode",
        get: function() {
            return this._lowLatencyMode
        },
        set: function(e) {
            this._lowLatencyMode = e, this._manifestLoader && (this._manifestLoader.lowLatencyMode = e)
        }
    }, {
        key: "downloadSpeed",
        get: function() {
            return this._abr.getCurrentSpeed()
        }
    }, {
        key: "restrictedStreamIndexes",
        get: function() {
            return this._restrictedStreamIndexes
        },
        set: function(e) {
            this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._abr.lock(this._restrictedStreamIndexes))
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._stream ? this._stream.width : this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._stream ? this._stream.height : this._video.videoHeight
        }
    }, {
        key: "currentTime",
        get: function() {
            return this._video.currentTime
        },
        set: function(e) {
            this._video.readyState > 0 && (this._video.currentTime = e)
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return this._sorcerer ? this._sorcerer.video.activeStreamIndex > 0 : null
        }
    }, {
        key: "sorcerer",
        get: function() {
            return this._sorcerer
        }
    }, {
        key: "segmentLength",
        get: function() {
            var e, t, n, r;
            return this.lowLatencyMode && (null == (e = this._manifestLoader) || null == (t = e.activeStream("video")) ? void 0 : t.partTargetDuration) || (null == (n = this._manifestLoader) || null == (r = n.activeStream("video")) ? void 0 : r.targetDuration)
        }
    }, {
        key: "segmentCount",
        get: function() {
            var e, t, n;
            return (null == (e = this._manifestLoader) || null == (t = e.activeStream("video")) || null == (n = t.segments) ? void 0 : n.length) || 0
        }
    }, {
        key: "availableDuration",
        get: function() {
            const e = this.segmentCount * this.segmentLength;
            return isNaN(e) ? 0 : e
        }
    }]), t
}(Hi);

function Os(e) {
    return e.forEach((e, t) => {
        e.index = t
    }), e
}
const Cs = document.createElement("video"),
    Ls = {
        "application/x-mpegURL": "application/x-mpegURL"
    };
let Ns = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._apiManifestUrl = null, r.reset(), window.addEventListener("online", () => {
                r.play()
            }), r
        }
        a(t, e), r(t, null, [{
            key: "displayName",
            get: function() {
                return "NativeHLSLiveScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return t.supportedVideoTypes.length > 0
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                const e = [];
                if ("function" != typeof Cs.canPlayType) return e;
                for (const t in Ls) {
                    const n = Ls[t];
                    Cs.canPlayType(n).replace(/^no$/, "") && e.push(t)
                }
                return e
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return !1
            }
        }]);
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.reset()
        }, n.reset = function() {
            this._manifestRefreshTimeout && clearTimeout(this._manifestRefreshTimeout), this._onReady = null, this._manifestRefreshTimeout = null, this._isOnline = !1, this._hasLiveEventEnded = !1, this._hlsAvailabilityCheckTimeout = null, this._bufferedIndex = 0, this._manifestRefreshTimeout = null, this._abr = new _s(this, this._options), this._restrictedStreamIndexes = []
        }, n.endLive = function() {
            this._isOnline = !1, this._hasLiveEventEnded = !0, clearTimeout(this._manifestRefreshTimeout), this._video.pause(),
                function(e) {
                    setTimeout(e, 0)
                }(() => {
                    e.prototype.deactivate.call(this), this.fire(ri.ENDED)
                })
        }, n._setUpRefreshTimer = function() {
            const e = M(this.video.metadata.playlistRefreshUrl.split("?")[1]);
            e.expires && (this._manifestRefreshTimeout = setTimeout(() => {
                this._refreshLiveApiPlaylistUrl()
            }, 1e3 * (e.expires - 10)))
        }, n._refreshLiveApiPlaylistUrl = function(e = 0) {
            const t = this.video.metadata.playlistRefreshUrl;
            return oe(t).json().then(n => {
                if (!("url" in n)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${n}`);
                return this._loadNativeHlsManifest(n.url.hls).then(() => (this.play(), this._checkHlsAvailability(5e3), null)).catch(() => this._refreshLiveApiPlaylistUrl(++e))
            }).catch(() => {
                if (e >= 3) throw new Error(`Manifest failed to load after ${e} attempts.`);
                return ++e, this._refreshLiveApiPlaylistUrl(e)
            })
        }, n._setUpLiveEventListeners = function() {
            this.on(ai.STREAM_OFFLINE, () => {
                this._isOnline = !1
            })
        }, n._setUpNativeHls = function(e) {
            return this._setUpLiveEventListeners(), this._isOnline = !0, this.fire(ai.STREAM_ONLINE), this._checkHlsAvailability(5e3), Promise.resolve(e)
        }, n._loadNativeHlsManifest = function(e) {
            return this._apiManifestUrl = e, /json=1/.test(e) ? oe(e).json().then(e => {
                if (!("url" in e)) throw new Error(`Error parsing 'url' key from Live API manifest endpoint: ${this._apiManifestUrl} ${e}`);
                this._video.src = e.url, this._setUpRefreshTimer()
            }).catch(e => {
                const t = this.video.metadata.playlistRefreshUrl;
                return oe(t).json().then(e => {
                    if (!("url" in e)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${e}`);
                    this._apiManifestUrl = e.url.ios, this._video.src = e.url.ios, this._setUpRefreshTimer()
                })
            }) : (this._video.src = e, this._setUpRefreshTimer(), Promise.resolve())
        }, n._checkHlsAvailability = function(e) {
            "number" == typeof ke.iOS && ke.iOS < 9 || this._hlsAvailabilityCheckTimeout || (this._hlsAvailabilityCheckTimeout = setTimeout(() => {
                if (!this._isOnline) return;
                const e = new XMLHttpRequest;
                e.onload = () => {
                    410 !== e.status ? (200 !== e.status && this.fire(ai.STREAM_OFFLINE), e.response.match(/^#EXTM3U\n#EXT-X-VERSION:3\n$/) && this.fire(ai.STREAM_OFFLINE)) : this._refreshLiveApiPlaylistUrl()
                }, e.onerror = () => {
                    this.fire(ai.STREAM_OFFLINE)
                }, /json=1/.test(this._apiManifestUrl) ? oe(this._apiManifestUrl).json().then(t => {
                    "url" in t || this.fire(ai.STREAM_OFFLINE), e.open("GET", t.url), e.send()
                }).catch(() => {
                    e.open("GET", this._apiManifestUrl), e.send()
                }) : (e.open("GET", this._apiManifestUrl), e.send())
            }, e))
        }, n.setVideoSrc = function(e) {
            this._onReady = this._setUpNativeHls(e).then(() => (this._apiManifestUrl = e, this._loadNativeHlsManifest(e)))
        }, n.onprogress = function() {
            this._hlsAvailabilityCheckTimeout && (clearTimeout(this._hlsAvailabilityCheckTimeout), this._hlsAvailabilityCheckTimeout = null)
        }, n.onstalled = function() {
            this._checkHlsAvailability(1e4)
        }, n.onerror = function() {
            return this._video.error.code === this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (oe(this._apiManifestUrl).then(() => {
                e.prototype.onerror.call(this)
            }).catch(t => {
                t instanceof H ? this.fire(ri.ERROR, new wi("MediaNetworkError", "A network error ocurred while fetching the media.")) : e.prototype.onerror.call(this)
            }), !1) : e.prototype.onerror.call(this)
        }, n.onwaiting = function() {
            this._checkHlsAvailability(1e4)
        }, n.seekToTime = function() {}, n.play = function() {
            return e.prototype.play.call(this, () => this._onReady)
        }, r(t, [{
            key: "currentTime",
            get: function() {
                return this._video.currentTime
            },
            set: function(e) {
                this._video.currentTime = e
            }
        }]), t
    }(Hi),
    Ms = function() {
        function e(e, t = {}) {
            this._telecine = e, this._element = e._element, this._options = t
        }
        r(e, null, [{
            key: "displayName",
            get: function() {
                return "Effect"
            }
        }, {
            key: "supported",
            get: function() {
                return !1
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return []
            }
        }]);
        var t = e.prototype;
        return t.activate = function() {
            throw new wi("NotImplemented", "The effect must implement the activate method.")
        }, t.deactivate = function() {
            throw new wi("NotImplemented", "The effect must implement the deactivate method.")
        }, e
    }();
const xs = new WeakMap,
    Fs = new WeakMap;
let Us = function() {
    function e({
        src: e,
        mime: t,
        id: n = gi(),
        priority: r = 0,
        metadata: i = {}
    }, s) {
        if (!e) throw new TypeError("Must provide a src for the file.");
        if (!t) throw new TypeError("Must provide a mime type for the file.");
        Object.defineProperties(this, {
            mime: {
                value: t,
                enumerable: !0
            },
            id: {
                value: `${n}`,
                enumerable: !0
            },
            metadata: {
                value: i,
                enumerable: !0
            }
        }), this.video = s, this.priority = r, this.src = e
    }
    return r(e, [{
        key: "priority",
        get: function() {
            return xs.get(this)
        },
        set: function(e) {
            if (!("number" == typeof(e = parseInt(e, 10)) && isFinite(e) && Math.floor(e) === e && e >= 0)) throw new TypeError("The file priority must be an integer greater than or equal to 0.");
            xs.set(this, e)
        }
    }, {
        key: "src",
        get: function() {
            return Fs.get(this)
        },
        set: function(e) {
            Fs.set(this, e), this.video.fire(oi.FILE_SRC_UPDATE, this)
        }
    }, {
        key: "restrictedStreamIndexes",
        get: function() {
            if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
            return this.video.currentScanner.restrictedStreamIndexes
        },
        set: function(e = []) {
            if (!Array.isArray(e)) throw new TypeError("Indexes must be an array.");
            if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
            this.video.currentScanner.restrictedStreamIndexes = e
        }
    }]), e
}();

function js() {
    return !!(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.WebKitMediaKeys)
}

function Bs(e, t, n) {
    "string" == typeof t && (t = function(e) {
        const t = new ArrayBuffer(2 * e.length),
            n = new Uint16Array(t);
        for (let r = 0, i = e.length; r < i; r++) n[r] = e.charCodeAt(r);
        return n
    }(t));
    let r = 0;
    const i = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + n.byteLength),
        s = new DataView(i);
    new Uint8Array(i, r, e.byteLength).set(e), r += e.byteLength, s.setUint32(r, t.byteLength, !0), r += 4;
    const o = new Uint8Array(i, r, t.byteLength);
    return o.set(t), r += o.byteLength, s.setUint32(r, n.byteLength, !0), r += 4, new Uint8Array(i, r, n.byteLength).set(n), new Uint8Array(i, 0, i.byteLength)
}

function Vs(e, t = !0) {
    const n = t ? e.buffer : e,
        r = String.fromCharCode.apply(null, new Uint16Array(n)),
        i = (new DOMParser).parseFromString(r, "application/xml"),
        s = {},
        o = i.getElementsByTagName("HttpHeader");
    for (let a = 0; a < o.length; ++a) {
        const e = o[a].querySelector("name"),
            t = o[a].querySelector("value");
        s[e.textContent] = t.textContent
    }
    return [s, e = yi(i.querySelector("Challenge").textContent)]
}

function Hs(e, t, n, r) {
    const i = r.audio || [],
        s = r.video || [],
        o = [{
            video: "HW_SECURE_ALL",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }].map(e => {
            const t = {
                persistentState: "optional",
                sessionTypes: ["temporary"]
            };
            return s.length && (t.videoCapabilities = s.map(t => ({
                contentType: t,
                robustness: e.video
            }))), i.length && (t.audioCapabilities = i.map(t => ({
                contentType: t,
                robustness: e.audio
            }))), t
        }),
        a = Object.keys(e).map(r => {
            const i = e[r].id;
            if (t || n) {
                let e = null;
                const n = t ? window.WebKitMediaKeys : window.MSMediaKeys;
                try {
                    e = new n(i)
                } catch (fl) {}
                return Promise.resolve({
                    name: i,
                    keySystem: e
                })
            }
            return navigator.requestMediaKeySystemAccess(i, o).then(e => e.createMediaKeys()).catch(e => {}).then(e => ({
                name: i,
                keySystem: e
            }))
        });
    return Promise.all(a)
}

function Xs(e, t) {
    let n = null;
    return Object.keys(e).forEach(r => {
        t.name === e[r].id && (n = e[r])
    }), n
}
let qs = function() {
        function e(e, t) {
            this._cdms = e.cdms, this._lrToken = e.lr_token, this._userId = e.user, this._assetId = e.asset, this._useHls = t, this._licenseUrl = null, this._keySession = null, this._preferredKeySystem = null, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}) {
            return this._video = e._video, this._scanner = e, js() ? (this._licenseRequestMetadata = function(e, t) {
                const n = {},
                    r = `${window.screen.availWidth}x${window.screen.availHeight}`,
                    i = window.devicePixelRatio;
                return n.merchant = "vimeo", n.sessionId = JSON.stringify({
                    ua: navigator.userAgent,
                    token: e,
                    resolution: r,
                    pixelRatio: i
                }), n.userId = t, n
            }(this._lrToken, this._userId), Hs(this._cdms, this._useHls, !1, t).then(e => {
                if (e.forEach(e => {
                        e.keySystem && (this._preferredKeySystem = e)
                    }), !this._preferredKeySystem) return this._scanner.fire(oi.EME_UNSUPPORTED), !1;
                const t = Xs(this._cdms, this._preferredKeySystem);
                return this._encryptedEventName = "encrypted", this._licenseUrl = t.license_url, this._useHls && (this._certificateUrl = t.certificate_url, this._encryptedEventName = "webkitneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest), this._useHls ? (this._video.webkitSetMediaKeys(this._preferredKeySystem.keySystem), !0) : this._video.mediaKeys ? (this._keySession = this._video.mediaKeys.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), !0) : (this._keySession = this._preferredKeySystem.keySystem.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), this._video.setMediaKeys(this._preferredKeySystem.keySystem), !0)
            })) : (this._scanner.fire(oi.EME_UNSUPPORTED), !1)
        }, t.destroy = function() {
            this._keySession && this._keySession.sessionId && this._keySession.close(), this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._generateRequest = function(e) {
            return "com.apple.fps.1_0" === this._preferredKeySystem.name ? (this._loadFairPlayCertificate().then(t => {
                this._contentId = `assetId=${this._assetId}`;
                const n = Bs(e.initData, this._contentId, t);
                return this._keySession = this._preferredKeySystem.keySystem.createSession("video/mp4", n), this._keySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), t
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : !this._keySession.sessionId && !this._activeKeySession && (this._activeKeySession = this._keySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(oi.DRM_FAILURE)
            }), !0)
        }, t._getLicense = function(e) {
            return new Promise((t, n) => {
                this._activeKeySession = null;
                const r = new XMLHttpRequest;
                r.keySession = e.target, r.responseType = "arraybuffer", r.open("POST", this._licenseUrl), r.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata)));
                let i = e.message;
                if ("com.microsoft.playready" === this._preferredKeySystem.name) {
                    const t = Vs(e.message, !1),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        r.setRequestHeader([e], n[e])
                    }), i = t[1]
                }
                if ("com.apple.fps.1_0" === this._preferredKeySystem.name) {
                    let e = btoa(String.fromCharCode.apply(null, i));
                    e = encodeURIComponent(e), i = `spc=${e}&${this._contentId}`, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                }
                r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: oi.DRM_FAILURE
                        });
                        else try {
                            this._scanner.fire(oi.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(r.response);
                            let n = e.buffer;
                            "com.apple.fps.1_0" === this._preferredKeySystem.name && (n = function(e) {
                                let t = window.atob(e.trim());
                                return "<ckc>" === t.substr(0, 5) && "</ckc>" === t.substr(-6) && (t = t.slice(5, -6)), new Uint8Array(atob(t).split("").map(e => e.charCodeAt(0)))
                            }(btoa(String.fromCharCode.apply(null, e)))), r.keySession.update(n), t()
                        } catch (fl) {
                            n(`Error updating key session: ${fl}`)
                        } else {
                            const e = JSON.parse(r.getResponseHeader("x-dt-error-message"));
                            n({
                                error: oi.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, r.onerror = n, r.send(i)
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            })
        }, t._loadFairPlayCertificate = function() {
            return new Promise((e, t) => {
                const n = new XMLHttpRequest;
                n.responseType = "arraybuffer", n.open("GET", this._certificateUrl), n.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata))), n.onload = () => {
                    if (403 !== n.status)
                        if (n.status >= 400) t({
                            error: oi.DRM_FAILURE
                        });
                        else try {
                            e(new Uint8Array(n.response))
                        } catch (fl) {
                            t(fl)
                        } else {
                            const e = JSON.parse(n.getResponseHeader("x-dt-error-message"));
                            t({
                                error: oi.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, n.onerror = t, n.send()
            })
        }, e
    }(),
    Gs = function() {
        function e() {
            this._cdmList = {}, this._preferredKeySystems = {}, this._licenseTokenUrls = {}, this._licenseUrls = {}, this._certificateUrls = {}, this._keySessions = {}, this._keyChainState = "default", this._keyTypes = {
                KEYCHAIN_DEFAULT: "default",
                KEYCHAIN_SD_FALLBACK: "sd-fallback"
            }
        }
        var t = e.prototype;
        return t.getAllKeySessions = function() {
            return Object.values(this._keySessions) || []
        }, t.getCdms = function(e) {
            return this._cdmList[e]
        }, t.getAllPreferredKeySystems = function() {
            return this._preferredKeySystems
        }, t.addCdms = function(e, t) {
            this._cdmList[t] = e
        }, t.addKeySession = function(e, t) {
            this._keySessions[t] = e
        }, t.addLicenseTokenUrl = function(e, t) {
            this._licenseTokenUrls[t] = e
        }, t.addLicenseUrl = function(e, t) {
            this._licenseUrls[t] = e
        }, t.addPreferedKeySystem = function(e, t) {
            this._preferredKeySystems[t] = e
        }, t.closeAllKeySessions = function() {
            for (let e in this._keySessions) this._keySessions[e] && this._keySessions[e].sessionId && this._keySessions[e].close()
        }, r(e, [{
            key: "state",
            get: function() {
                return this._keyChainState
            },
            set: function(e) {
                Object.values(this._keyTypes).indexOf(e) < 0 || (this._keyChainState = e)
            }
        }, {
            key: "activeKeySession",
            get: function() {
                return this._keySessions[this._keyChainState]
            }
        }, {
            key: "activeKeySystem",
            get: function() {
                return this._preferredKeySystems[this._keyChainState]
            }
        }, {
            key: "keyTypes",
            get: function() {
                return this._keyTypes
            }
        }, {
            key: "activeLicenseTokenUrl",
            get: function() {
                return this._licenseTokenUrls[this._keyChainState]
            }
        }, {
            key: "activeLicenseUrl",
            get: function() {
                return this._licenseUrls[this._keyChainState]
            }
        }]), e
    }(),
    Ws = function() {
        function e(e, t) {
            this._hasFallbackAssets = !!e.fallback_asset, this._useHls = t, this._fallbackCallback = () => null, this._currentTime = 0, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this), this._boundOnKeyStatus = this._onKeyStatus.bind(this), this._keyChain = new Gs, this._keyTypes = this._keyChain.keyTypes, this._keyChain.state = this._keyTypes.KEYCHAIN_DEFAULT, this._keyChain.addCdms(e.cdms, this._keyTypes.KEYCHAIN_DEFAULT), this._hasFallbackAssets && this._keyChain.addCdms(e.fallback_cdms, this._keyTypes.KEYCHAIN_SD_FALLBACK)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}, n = {}) {
            return this._video = e._video, this._scanner = e, this._useMs = !!window.MSMediaKeys, js() || this._useMs ? this._keyChain.state === this._keyTypes.KEYCHAIN_SD_FALLBACK ? this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                this._scanner.currentTime = this._currentTime, this._scanner.play()
            }) : this.setUpKeySystem(t, n).then(() => this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK)) : (this._scanner.fire(oi.EME_UNSUPPORTED), Promise.reject())
        }, t.setUpKeySystem = function(e, t, n = this._keyTypes.KEYCHAIN_DEFAULT) {
            return new Promise((r, i) => {
                const s = this._keyChain.getCdms(n);
                return s || i(), Hs(s, this._useHls, this._useMs, e).then(e => {
                    this._keyChain.addPreferedKeySystem(e.find(e => e.keySystem), n);
                    const r = this._keyChain.activeKeySystem && Xs(s, this._keyChain.activeKeySystem);
                    if (!r) throw this._scanner.fire(oi.EME_UNSUPPORTED), new Error("No valid key system was found.");
                    this._keyChain.addLicenseTokenUrl(r.license_url, n);
                    const i = t && t.inits && t.inits[r.id];
                    return i || this._addEncryptedHandler(r, n), this._setMediaKeys(n).then(() => {
                        const e = this._keyChain.state === n;
                        return i && e && this._generateRequest(i.cenc, n)
                    })
                }).then(r)
            })
        }, t.destroy = function() {
            this._keyChain && this._keyChain.closeAllKeySessions(), this._video && this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._switchKeyChainState = function(e) {
            return new Promise(t => {
                this._keyChain.state = e, this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), t()
            })
        }, t._addEncryptedHandler = function(e, t) {
            this._encryptedEventName = "encrypted", this._keyChain.addLicenseUrl(e.license_url, t), this._useHls ? (this._certificateUrl = e.certificate_url, this._encryptedEventName = "webkitneedkey") : this._useMs && (this._encryptedEventName = "msneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._setMediaKeys = function(e) {
            return new Promise(t => {
                if (this._useMs) {
                    const e = () => {
                        this._video.msSetMediaKeys(this._keyChain.activeKeySystem.keySystem), this._video.removeEventListener("loadedmetadata", e), t()
                    };
                    this._video.readyState >= 1 ? e() : this._video.addEventListener("loadedmetadata", e)
                } else {
                    if (this._useHls) this._video.webkitSetMediaKeys(this._keyChain.activeKeySystem.keySystem);
                    else {
                        const t = this._video.mediaKeys || this._keyChain.activeKeySystem.keySystem;
                        this._keyChain.addKeySession(this._createSession(t), e), e === this._keyChain.state && this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), this._video.mediaKeys || this._video.setMediaKeys(this._keyChain.activeKeySystem.keySystem)
                    }
                    t()
                }
            })
        }, t._createSession = function(e, t, n) {
            const r = e.createSession(t, n);
            if (!r) throw new Error("Could not create key session");
            return r
        }, t._generateRequest = function(e, t) {
            t = t || this._keyChain.state;
            const n = new Error("A decryption key error was encountered");
            return "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name ? (this._loadFairPlayCertificate(this._certificateUrl).then(r => {
                this._contentId = function(e) {
                    var t = function(e) {
                            const t = new Uint16Array(e.buffer);
                            return String.fromCharCode.apply(null, t)
                        }(e),
                        n = document.createElement("a");
                    return n.href = t, n.hostname
                }(e.initData);
                const i = Bs(e.initData, this._contentId, r);
                return this._keyChain.addKeySession(this._createSession(this._keyChain.activeKeySystem.keySystem, "video/mp4", i), t), this._keyChain.activeKeySession.contentId = this._contentId, this._keyChain.activeKeySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("webkitkeyerror", e => {
                    throw n
                }), r
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : "com.microsoft.playready" === this._keyChain.activeKeySystem.name ? (this._keyChain.addKeySession(this._createSession(this._video.msKeys, "video/mp4", e.initData), t), this._keyChain.activeKeySession.addEventListener("mskeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("mskeyerror", e => {
                throw n
            }), !0) : !this._keyChain.activeKeySession.sessionId && !this._activeKeySession && (this._keyChain.activeKeySession.addEventListener("keystatuseschange", this._boundOnKeyStatus), this._activeKeySession = this._keyChain.activeKeySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(oi.DRM_FAILURE)
            }), !0)
        }, t._onKeyStatus = function() {
            let e = !1;
            const t = Array.from(this._keyChain.activeKeySession.keyStatuses.values());
            if (t.forEach((t, n) => {
                    switch (t) {
                        case "expired":
                            e = !0
                    }
                }), t.every(e => "output-restricted" === e)) {
                if (this._hasFallbackAssets) return this._currentTime = this._scanner.currentTime, void this._switchKeyChainState(this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                    this._fallbackCallback(), this._scanner.fire(oi.DRM_KEY_SWITCH, this._keyTypes.KEYCHAIN_SD_FALLBACK)
                }).catch(e => {
                    this._scanner.fire(oi.DRM_OUTPUT_RESTRICTED)
                });
                this._scanner.fire(oi.DRM_OUTPUT_RESTRICTED)
            }
            e && this._keyChain.activeKeySession.close()
        }, t._getLicense = function(e) {
            return this._getLicenseUrl(this._keyChain.activeLicenseTokenUrl).then(t => new Promise((n, r) => {
                this._keyChain.addLicenseUrl(t, this._keyChain.state), this._activeKeySession = null;
                const i = new XMLHttpRequest;
                i.keySession = e.target, i.open("POST", this._keyChain.activeLicenseUrl), i.responseType = "arraybuffer";
                let s = e.message;
                if ("com.microsoft.playready" === this._keyChain.activeKeySystem.name) {
                    const t = Vs(e.message),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        i.setRequestHeader(e, n[e])
                    }), s = t[1]
                }
                "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name && (s = new Uint8Array(s), i.setRequestHeader("Content-type", "application/octet-stream")), i.onload = () => {
                    if (403 !== i.status)
                        if (i.status >= 400) r(new wi(oi.DRM_FAILURE));
                        else try {
                            this._scanner.fire(oi.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(i.response);
                            i.keySession.update(e), n()
                        } catch (fl) {
                            r(new wi(oi.DRM_FAILURE, `Error updating key session: ${fl}`))
                        } else r(new wi(oi.DRM_AUTH_FAILURE))
                }, i.onerror = r, i.send(s)
            }).catch(e => {
                this._scanner.fire(e.name, {
                    text: e.message || "License request failed."
                })
            }))
        }, t._getLicenseUrl = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.onload = () => {
                    if (r.status >= 400) n(new wi(oi.DRM_FAILURE));
                    else try {
                        try {
                            const e = JSON.parse(r.response),
                                {
                                    licenseAcquisitionUrl: n,
                                    token: i
                                } = e;
                            if (!n && !i) throw new Error;
                            t(`${n}?ExpressPlayToken=${i}`)
                        } catch (e) {
                            t(r.response)
                        }
                    } catch (fl) {
                        n(new wi(oi.DRM_FAILURE, `Error retrieving License Acquisition URL (LA_URL): ${fl}`))
                    }
                }, r.onerror = n, r.send()
            })
        }, t._loadFairPlayCertificate = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.responseType = "arraybuffer", r.setRequestHeader("Pragma", "Cache-Control: no-cache"), r.setRequestHeader("Cache-Control", "max-age=0"), r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: oi.DRM_FAILURE
                        });
                        else try {
                            t(new Uint8Array(r.response))
                        } catch (fl) {
                            n(fl)
                        } else n({
                            error: oi.DRM_AUTH_FAILURE
                        })
                }, r.onerror = n, r.send()
            })
        }, t.setFallbackCallback = function(e) {
            this._fallbackCallback = () => e()
        }, r(e, [{
            key: "state",
            get: function() {
                return this._keyChain.state
            }
        }, {
            key: "hasFallbackAssets",
            get: function() {
                return this._hasFallbackAssets
            }
        }]), e
    }();
const Ks = new WeakMap;
let Ys = function() {
        function e({
            files: e,
            id: t = gi(),
            title: n = null,
            subtitle: r = null,
            metadata: i = {},
            textTracks: s = pi(),
            externalDisplayFiles: o = {},
            chapters: a = [],
            duration: u
        }) {
            if (!e || !Array.isArray(e)) throw new TypeError("Must provide files for the video.");
            rn(this);
            const c = function(e = []) {
                    return e.getFileById = _i, e
                }(e.map(e => e instanceof Us ? (e.video = this, e) : new Us(e, this))),
                l = pi(s.map(e => e instanceof Es ? (e.video = this, e) : new Es(e, this)));
            Object.keys(o).forEach(e => {
                !o[e] || o[e] instanceof Us || (o[e] = new Us(o[e], this))
            }), Object.defineProperties(this, {
                id: {
                    value: `${t}`,
                    enumerable: !0
                },
                title: {
                    value: n,
                    enumerable: !0
                },
                subtitle: {
                    value: r,
                    enumerable: !0
                },
                metadata: {
                    value: i,
                    enumerable: !0
                },
                files: {
                    value: c,
                    enumerable: !0
                },
                textTracks: {
                    value: l,
                    enumerable: !0,
                    writable: !0
                },
                chapters: {
                    value: a,
                    enumerable: !0
                },
                duration: {
                    value: u,
                    enumerable: !0
                },
                externalDisplayFiles: {
                    value: o,
                    enumerable: !0
                }
            }), i.drm && (i.drm.fastly ? this._drmHandler = new Ws(i.drm, i.useHls) : this._drmHandler = new qs(i.drm, i.useHls))
        }
        return e.prototype.deactivate = function() {
            this._drmHandler && this._drmHandler.destroy(), this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e))
        }, r(e, [{
            key: "drmHandler",
            get: function() {
                return this._drmHandler || null
            }
        }, {
            key: "currentFile",
            get: function() {
                return this.currentScanner.currentFile
            },
            set: function(e) {
                this.currentScanner.currentFile = e
            }
        }, {
            key: "currentScanner",
            get: function() {
                return Ks.get(this)
            },
            set: function(e) {
                this.currentScanner && this.currentScanner.constructor.supportsTextTracks && this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e)), e.constructor.supportsTextTracks && this.textTracks.forEach(t => e.addTextTrack(t)), Ks.set(this, e)
            }
        }, {
            key: "chapters",
            get: function() {
                return this.chapters
            }
        }]), e
    }(),
    $s = function() {
        function e(e, t = {}) {
            this._telecine = e, this._options = t, this._bufferInterval = null, this._lastBufferCheckVideoTime = this._options.embedTime ? this._options.embedTime : 0, this._isBuffering = !1, this._isSeeking = !1, this._userPlayState = !1, this.playInitiated = !1, this._isLiveStreamOnline = !1, this._checkInterval = 250, rn(this), this._boundEndBuffering = this._endBuffering.bind(this), this._boundOnPause = this._onPause.bind(this), this._boundOnSeeking = this._onSeeking.bind(this), this._boundOnSeeked = this._onSeeked.bind(this), this._boundOnLiveOnline = this._onLiveOnline.bind(this), this._boundOnLiveOffline = this._onLiveOffline.bind(this), this._toggleEvents(this._telecine.on), this._options.noInterval || this._setUpRebufferMonitor()
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._bufferInterval), this._toggleEvents(this._telecine.off), this._endBuffering()
        }, t._toggleEvents = function(e) {
            e(ri.PAUSE, this._boundOnPause), e(ri.PLAYING, this._boundEndBuffering), e(ri.SEEKING, this._boundOnSeeking), e(ri.SEEKED, this._boundOnSeeked), e(ai.STREAM_ONLINE, this._boundOnLiveOnline), e(ai.STREAM_OFFLINE, this._boundOnLiveOffline)
        }, t._onPause = function() {
            this.userPlayState = !1
        }, t._endBuffering = function() {
            this._isBuffering && (this._isBuffering = !1, this.fire(oi.BUFFER_ENDED))
        }, t._onSeeking = function() {
            this._isSeeking = !0
        }, t._onSeeked = function() {
            this._isSeeking = !1
        }, t._onLiveOnline = function() {
            this._isLiveStreamOnline = !0
        }, t._onLiveOffline = function() {
            this._isLiveStreamOnline = !1
        }, t._setUpRebufferMonitor = function() {
            clearInterval(this._bufferInterval), this._bufferInterval = setInterval(this.runIntervalCheck.bind(this), this._checkInterval)
        }, t.runIntervalCheck = function() {
            if (!this._telecine.video) return;
            const e = this._telecine.video.currentScanner;
            if (!e) return;
            const t = this._telecine.isLive(),
                n = e.currentTime,
                r = this._checkInterval / 2 / 1e3;
            if (this.playInitiated && (!this._isSeeking || t) && (!this._telecine.paused || this.userPlayState) && !this._isBuffering && n < this._lastBufferCheckVideoTime + r) {
                if (t && !this._isLiveStreamOnline) return;
                const e = this._telecine.buffered;
                for (let t = 0; t < e.length; t++)
                    if (n >= e.start(t) && n + .2 <= e.end(t)) return;
                if (n + r >= this._telecine.duration) return;
                this._isBuffering = !0, this.fire(oi.BUFFER_STARTED)
            }(this.playInitiated && this._isBuffering && n > this._lastBufferCheckVideoTime + r || t && !this._isLiveStreamOnline && this._isBuffering) && (this._isBuffering = !1, this.fire(oi.BUFFER_ENDED)), this._lastBufferCheckVideoTime = n
        }, r(e, [{
            key: "userPlayState",
            get: function() {
                return this._userPlayState
            },
            set: function(e) {
                this._userPlayState = e, e || this._endBuffering()
            }
        }]), e
    }();

function zs() {
    let e, t;

    function n() {
        if (!t) return Promise.reject();
        e.preload = "";
        let n = e.play();
        return void 0 === n && (n = new Promise(t => {
            e.addEventListener("playing", t)
        })), n
    }

    function r() {
        t && (t.resolve(), t = null)
    }

    function i(e) {
        t && (t.reject(e), t = null)
    }
    return {
        set video(t) {
            e = t
        },
        get video() {
            return e
        },
        get active() {
            return !!t
        },
        start: function(s = Promise.resolve.bind(Promise)) {
            return t || (t = new D), e.src ? document.createElement("video").load() : e.load(), s().then(n).then(r).catch(i), t
        },
        cancel: function() {
            t && (t.reject(new wi("PlayInterrupted", "The play() request was interrupted by a call to pause()")), t = null)
        }
    }
}
let Qs = function() {
        function e(e, t, n = {}) {
            this._element = e, this._scanners = t, this._options = n, this._video = null, this._textTracks = pi(), this._properties = {}, this._currentScanner = new Hi(e), this._options.playRequest = new zs, this._blacklistedScanners = [], this._activeEffects = [], rn(this)
        }
        var t = e.prototype;
        return t.supportsEffect = function(e) {
            return !!e.supported && e.supportedScanners.some(e => this._getScannerName(this._currentScanner) === e.displayName)
        }, t.getEffectByName = function(e) {
            let t = null;
            return this._activeEffects.forEach(n => {
                e === this._getEffectName(n) && (t = n)
            }), t
        }, t.activateEffect = function(e, t) {
            const n = new e(this, t);
            return n.activate(), this._activeEffects.push(n), n
        }, t.deactivateEffect = function(e) {
            return this._activeEffects.some((t, n) => t.constructor === e && (t.deactivate(), this._activeEffects.splice(n, 1), !0))
        }, t.deactivateEffects = function() {
            this._activeEffects.forEach(e => this.deactivateEffect(e.constructor))
        }, t.play = function() {
            if (!this._video || this._video.files.length < 1) throw new wi("NoFiles", "There are no files to play.");
            this._rebufferMonitor.playInitiated || (this._rebufferMonitor.playInitiated = !0), this._rebufferMonitor.userPlayState = !0;
            const e = this._currentScanner.play();
            return this._properties.paused = !1, e
        }, t.pause = function() {
            if (!this._video || this._video.files.length < 1) throw new wi("NoFiles", "There are no files to play.");
            return this._rebufferMonitor.userPlayState = !1, this._currentScanner.pause(), this._properties.paused = !0, this
        }, t.isLive = function() {
            return this.currentScannerName.includes("Live")
        }, t.endLive = function() {
            this._currentScanner.endLive()
        }, t.getBitrateAtTime = function(e, t = "video") {
            return "MediaSourceScanner" !== this._getScannerName(this._currentScanner) && "HLSLiveScanner" !== this._getScannerName(this._currentScanner) || "audio" === t && this._currentScanner._streams[t].length <= 1 ? 0 : this._currentScanner.getBitrateAtTime(e, t)
        }, t.getCurrentStream = function(e = "video") {
            var t, n;
            return null == (t = (n = this._currentScanner).getCurrentStream) ? void 0 : t.call(n, e)
        }, t.showExternalDisplayPicker = function(e) {
            this._currentScanner.showExternalDisplayPicker(e)
        }, t.requestPictureInPicture = function() {
            return this._currentScanner.requestPictureInPicture()
        }, t.exitPictureInPicture = function() {
            return this._currentScanner.exitPictureInPicture()
        }, t.addChapter = function(e, t) {
            this._currentScanner.addChapter(e, t)
        }, t.removeChapter = function(e) {
            this._currentScanner.removeChapter(e)
        }, t.addCuePoint = function(e, t) {
            return this._currentScanner.addCuePoint(e, t)
        }, t.removeCuePoint = function(e) {
            return this._currentScanner.removeCuePoint(e)
        }, t.removeAllCuePoints = function() {
            return this._currentScanner.removeAllCuePoints()
        }, t.addVideoEventListeners = function() {
            return this._currentScanner.addVideoEventListeners()
        }, t.removeVideoEventListeners = function() {
            return this._currentScanner.removeVideoEventListeners()
        }, t._findScanner = function({
            textTrackSupport: e = !1
        } = {}) {
            const t = this._video.files.sort((e, t) => e.priority - t.priority),
                n = this._scanners;
            for (const r in t) {
                let i = t[r];
                for (const t in n) {
                    let r = n[t];
                    if (r.supported && (!e || r.supportsTextTracks) && -1 === this._blacklistedScanners.indexOf(this._getScannerName(r)) && r.supportedVideoTypes.some(e => i.mime === e)) return r
                }
            }
            return e ? (this._fireVideoError("TextTracksNotSupported", "None of the scanners support text tracks in this browser."), this._blacklistedScanners = [], this._findScanner()) : null
        }, t.reactivate = function() {
            var e;
            (null == (e = this._currentScanner) ? void 0 : e.reactivate) && this._currentScanner.reactivate(), this.play()
        }, t._initScanner = function(e, t) {
            if (this._currentScanner.constructor === e && this._currentScanner.video === t) return;
            this._currentScanner.deactivate();
            const n = new e(this._element, this._options);
            Object.keys(hi).forEach(e => {
                const t = hi[e];
                n.on(t, e => this._handleEvent(t, e, n))
            }), this._currentScanner = n, t.currentScanner = n, this._currentScanner.video = t;
            const r = Object.keys(this._properties);
            for (let i = 0; i < r.length; i++) {
                const e = r[i];
                "paused" !== e ? "currentTime" !== e && (this._currentScanner[e] = this._properties[e]) : !1 === this._properties.paused && this._currentScanner.play()
            }
            this._currentScanner.addChapters(t.chapters, t.duration), this.fire(oi.SCANNER_CHANGE, this._getScannerName(this._currentScanner))
        }, t._updateScanner = function() {
            if (null === this._video) return;
            const e = this._findScanner({
                textTrackSupport: this._video.textTracks.length > 0
            });
            e ? this._initScanner(e, this._video) : this._fireVideoError("FilesNotPlayable", "None of the files could be played in this browser.")
        }, t._resetScanner = function() {
            this._currentScanner.deactivate(), this._currentScanner = new Hi(this._element)
        }, t._handleEvent = function(e, t, n) {
            if (n === this._currentScanner) {
                switch (e) {
                    case ri.ERROR:
                        return void(t instanceof wi && this.fire(ri.ERROR, t));
                    case oi.SCANNER_ERROR:
                        this._fireVideoError("ScannerError", `The current scanner can no longer be used because ${t.reason}`), this._blacklistedScanners.push(this._getScannerName(this._currentScanner)), this._updateScanner([]);
                        break;
                    case oi.FILE_ERROR:
                        this._fireVideoError("FileError", `The current file can no longer be used because ${t.reason}`), this._currentScanner._switchToNextFile();
                        break;
                    case oi.DOWNLOAD_ERROR:
                        this._fireVideoError("DownloadError", t), this._currentScanner._switchToNextFile();
                        break;
                    case oi.EME_UNSUPPORTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "emeunsupported"
                        });
                        break;
                    case oi.DRM_FAILURE:
                    case oi.DRM_AUTH_FAILURE:
                        this._fireVideoError("DRMFailure", {
                            text: t.text,
                            code: t.code
                        });
                        break;
                    case oi.DRM_OUTPUT_RESTRICTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "outputrestricted"
                        });
                        break;
                    case oi.DRM_AUTH_SUCCESS:
                        this.fire(oi.DRM_AUTH_SUCCESS);
                        break;
                    case ri.TIME_UPDATE:
                        this._properties.currentTime = this._currentScanner.currentTime;
                        break;
                    case oi.MEDIA_URL_EXPIRED:
                        this._fireVideoError("MediaUrlExpired", t);
                        break;
                    case oi.MEDIA_URL_BAD_REQUEST:
                        this._fireVideoError("MediaUrlBadRequest", t);
                        break;
                    case li.BRAIN_ML_MODEL_ERR:
                        this._fireVideoError("MimirError", t);
                        break;
                    case li.BRAIN_ML_MODEL_NET_ERR:
                        this._fireVideoError("MimirNetworkError", t);
                        break;
                    case li.BRAIN_ML_MODEL_TIMEOUT:
                        this._fireVideoError("MimirNetworkTimeout", t);
                        break;
                    case ui.SPATIAL_UNSUPPORTED:
                        this.getEffectByName("ThreeSixtyEffect").deactivate();
                        break;
                    case ri.ENDED:
                        this._properties.paused = !0;
                        break;
                    case ri.WAITING:
                        this.fire(ri.WAITING)
                }
                this._activeEffects.forEach(t => {
                    "function" == typeof t[`on${e}`] && t[`on${e}`]()
                }), this.fire(e, t)
            }
        }, t._fireVideoError = function(e, t) {
            this.fire(ri.ERROR, new wi(e, t))
        }, t._getScannerName = function(e) {
            return e instanceof Hi ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t._setUpRebufferMonitor = function() {
            this._rebufferMonitor && this._rebufferMonitor.destroy(), this._rebufferMonitor = new $s(this, this._options), this._rebufferMonitor.on(oi.BUFFER_STARTED, () => {
                this.fire(oi.BUFFER_STARTED)
            }), this._rebufferMonitor.on(oi.BUFFER_ENDED, () => {
                this.fire(oi.BUFFER_ENDED)
            })
        }, t._getEffectName = function(e) {
            return e instanceof Ms ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t._setCaptionsState = function(e) {
            "HLSLiveScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.setCaptionsState(e)
        }, r(e, [{
            key: "element",
            get: function() {
                return this._element
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._currentScanner.videoElement
            }
        }, {
            key: "manifest",
            get: function() {
                return this._currentScanner.manifest || {
                    video: []
                }
            }
        }, {
            key: "supportsSettingVolume",
            get: function() {
                return this._scanners.some(e => e.supported && e.supportsSettingVolume)
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return this._currentScanner.constructor.supportsPlaybackRate
            }
        }, {
            key: "supportsTextTracks",
            get: function() {
                return this._scanners.some(e => e.supported && e.supportsTextTracks)
            }
        }, {
            key: "activeEffects",
            get: function() {
                return this._activeEffects
            }
        }, {
            key: "latency",
            get: function() {
                return this._currentScanner.latency
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._currentScanner.downloadSpeed || 0
            }
        }, {
            key: "pictureInPictureActive",
            get: function() {
                return this._currentScanner.pictureInPictureActive
            }
        }, {
            key: "pictureInPictureEnabled",
            get: function() {
                return this._currentScanner.pictureInPictureEnabled
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this._currentScanner.isLowerProfileAvailable
            }
        }, {
            key: "buffered",
            get: function() {
                return this._currentScanner.buffered
            }
        }, {
            key: "bufferTarget",
            get: function() {
                return this._currentScanner.bufferTarget
            },
            set: function(e) {
                this._properties.bufferTarget = e, this._currentScanner.bufferTarget = e
            }
        }, {
            key: "presentationDelay",
            get: function() {
                return this._currentScanner.presentationDelay
            },
            set: function(e) {
                this._properties.presentationDelay = e, this._currentScanner.presentationDelay = e
            }
        }, {
            key: "lowLatencyMode",
            get: function() {
                return this._currentScanner.lowLatencyMode
            },
            set: function(e) {
                this._properties.lowLatencyMode = e, this._currentScanner.lowLatencyMode = e
            }
        }, {
            key: "manifestLoadDurations",
            get: function() {
                return this._currentScanner.manifestLoadDurations ? this._currentScanner.manifestLoadDurations : []
            }
        }, {
            key: "successfulSegments",
            get: function() {
                return this._currentScanner.successfulSegments ? this._currentScanner.successfulSegments : []
            }
        }, {
            key: "failedSegments",
            get: function() {
                return this._currentScanner.failedSegments ? this._currentScanner.failedSegments : []
            }
        }, {
            key: "cuePoints",
            get: function() {
                return this._currentScanner.cuePoints
            }
        }, {
            key: "currentChapterID",
            get: function() {
                if (this._currentScanner && this._currentScanner.chaptersTrack && this._currentScanner.chaptersTrack.activeCues.length) {
                    const {
                        activeCues: e
                    } = this._currentScanner.chaptersTrack;
                    return e[e.length - 1].id
                }
                return null
            }
        }, {
            key: "chapters",
            get: function() {
                return this._currentScanner.chaptersTrack ? this._currentScanner.chaptersTrack.cues : []
            }
        }, {
            key: "chaptersTrack",
            get: function() {
                return this._currentScanner.chaptersTrack
            }
        }, {
            key: "currentFile",
            get: function() {
                return this._currentScanner.currentFile
            },
            set: function(e) {
                if ("string" == typeof e && (e = this._files.filter(t => t.id === e)[0]), !e) throw new wi("FileNotValid", "The file is not valid.");
                this._currentScanner.currentFile = e
            }
        }, {
            key: "currentScannerName",
            get: function() {
                return this._getScannerName(this._currentScanner)
            }
        }, {
            key: "currentScanner",
            get: function() {
                return this._currentScanner
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._currentScanner.currentTime
            },
            set: function(e) {
                this._properties.currentTime = e, this._currentScanner.currentTime = e
            }
        }, {
            key: "duration",
            get: function() {
                return this._currentScanner.duration
            }
        }, {
            key: "ended",
            get: function() {
                return this._currentScanner.ended
            }
        }, {
            key: "externalDisplayAvailable",
            get: function() {
                return this._currentScanner.externalDisplayAvailable
            }
        }, {
            key: "externalDisplayActive",
            get: function() {
                return this._currentScanner.externalDisplayActive
            }
        }, {
            key: "loop",
            get: function() {
                return this._currentScanner.loop
            },
            set: function(e) {
                this._properties.loop = e, this._currentScanner.loop = e
            }
        }, {
            key: "muted",
            get: function() {
                return this._currentScanner.muted
            },
            set: function(e) {
                this._properties.muted = !!e, this._currentScanner.muted = !!e
            }
        }, {
            key: "playsinline",
            get: function() {
                return this._currentScanner.playsinline
            },
            set: function(e) {
                this._properties.playsinline = !!e, this._currentScanner.playsinline = !!e
            }
        }, {
            key: "paused",
            get: function() {
                return this._currentScanner.paused
            }
        }, {
            key: "played",
            get: function() {
                return this._currentScanner.played
            }
        }, {
            key: "seekable",
            get: function() {
                return this._currentScanner.seekable
            }
        }, {
            key: "seeking",
            get: function() {
                return this._currentScanner.seeking
            }
        }, {
            key: "defaultPlaybackRate",
            get: function() {
                return this._currentScanner.defaultPlaybackRate
            },
            set: function(e) {
                this._properties.defaultPlaybackRate = e, this._currentScanner.defaultPlaybackRate = e
            }
        }, {
            key: "playbackRate",
            get: function() {
                return this._currentScanner.playbackRate
            },
            set: function(e) {
                this._properties.playbackRate = e, this._currentScanner.playbackRate = e
            }
        }, {
            key: "preload",
            get: function() {
                return this._currentScanner.preload
            },
            set: function(e) {
                this._properties.preload = e, this._currentScanner.preload = e
            }
        }, {
            key: "autoPictureInPicture",
            get: function() {
                return this._currentScanner.autoPictureInPicture
            },
            set: function(e) {
                this._properties.autoPictureInPicture = !!e, this._currentScanner.autoPictureInPicture = !!e
            }
        }, {
            key: "disablePictureInPicture",
            get: function() {
                return this._currentScanner.disablePictureInPicture
            },
            set: function(e) {
                this._properties.disablePictureInPicture = !!e, this._currentScanner.disablePictureInPicture = !!e
            }
        }, {
            key: "video",
            get: function() {
                return this._video
            },
            set: function(e) {
                this._video && this._video.deactivate(), this._blacklistedScanners = [], this._setUpRebufferMonitor(), null === e ? (this._video = null, this._resetScanner()) : (this._video = new Ys(e), this._updateScanner())
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._currentScanner.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._currentScanner.videoHeight
            }
        }, {
            key: "volume",
            get: function() {
                return this._currentScanner.volume
            },
            set: function(e) {
                if (e < 0 || e > 1) throw new wi("IndexSizeError", `Failed to set the 'volume' property: The volume provided (${e}) is outside of the range [0, 1].`);
                this._properties.volume = e, this._currentScanner.volume = e
            }
        }, {
            key: "brainDebug",
            get: function() {
                return this._currentScanner.brainDebug
            }
        }]), e
    }(),
    Js = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._video = r._telecine._currentScanner._video, r
        }
        a(t, e), r(t, null, [{
            key: "displayName",
            get: function() {
                return "CanvasEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return !0
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Hi, hs]
            }
        }]);
        var n = t.prototype;
        return n.activate = function() {
            this._activated = !0, this._canvas = document.createElement("canvas"), this._canvas.className = "vp-canvas-effect", this._canvas.style.cssText = "\n            position: absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n        ", this._ctx = this._canvas.getContext("2d", {
                alpha: !1
            }), this._element.appendChild(this._canvas), this._startRendering()
        }, n.deactivate = function() {
            this._canvas && this._element.removeChild(this._canvas), this._stopRendering(), this._activated = !1
        }, n._startRendering = function() {
            this._requestFrame()
        }, n._requestFrame = function() {
            this._animationFrame = window.requestAnimationFrame(this._renderFrame.bind(this))
        }, n._renderFrame = function() {
            const e = this._video,
                t = this._canvas;
            t.width = e.clientWidth, t.height = e.clientHeight;
            const n = Math.floor(this._videoContentWidth()),
                r = Math.floor(this._videoContentHeight()),
                i = Math.floor((e.clientWidth - n) / 2),
                s = Math.floor((e.clientHeight - r) / 2);
            this._ctx.fillStyle = "#000", this._ctx.fillRect(0, 0, t.width, t.height), this._ctx.drawImage(e, i, s, n, r), this._requestFrame()
        }, n._videoRatio = function() {
            return this._video.videoHeight / this._video.videoWidth
        }, n._videoContentWidth = function() {
            return Math.min(this._video.clientHeight / this._videoRatio(), this._video.clientWidth)
        }, n._videoContentHeight = function() {
            return Math.min(this._video.clientWidth * this._videoRatio(), this._video.clientHeight)
        }, n._stopRendering = function() {
            this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null)
        }, t
    }(Ms),
    Zs = function() {
        function e() {}
        return r(e, null, [{
            key: "Equirect",
            get: function() {
                return "equirectangular"
            }
        }]), e
    }(),
    eo = function() {
        function e() {}
        return r(e, null, [{
            key: "Mono",
            get: function() {
                return "mono"
            }
        }, {
            key: "TopBottom",
            get: function() {
                return "top-bottom"
            }
        }]), e
    }(),
    to = function() {
        function e(e, t, n) {
            switch (this.isStereo = t !== eo.Mono, this._leftEye = null, this._rightEye = null, e) {
                case Zs.Equirect:
                    this.createEquirectProjection(n, t);
                    break;
                default:
                    this.createEquirectProjection(n, eo.Mono)
            }
        }
        var t = e.prototype;
        return t.createEquirectProjection = function(e, t) {
            switch (t) {
                case eo.Mono:
                    this._leftEye = this._createEquirectangularSphereMesh(e);
                    break;
                case eo.TopBottom:
                    this._leftEye = this._createEquirectangularSphereMesh(e), this._rightEye = this._createEquirectangularSphereMesh(e), this._leftEye.layers.set(1), this._rightEye.layers.set(2), this._chopGeometryUvs(this._leftEye.geometry, .5, 0), this._chopGeometryUvs(this._rightEye.geometry, .5, .5)
            }
        }, t._createEquirectangularSphereMesh = function(t, n, r, i) {
            const s = new THREE.SphereBufferGeometry(n || e.SPHERE_RADIUS, r || e.TESSELATION_WIDTH, i || e.TESSELATION_HEIGHT);
            s.scale(-1, 1, 1);
            const o = new THREE.MeshBasicMaterial({
                map: t
            });
            return new THREE.Mesh(s, o)
        }, t._chopGeometryUvs = function(e, t, n, r = 1) {
            for (let i = 0; i < e.attributes.uv.array.length; i += 2) e.attributes.uv.array[i + r] *= t, e.attributes.uv.array[i + r] += n
        }, r(e, [{
            key: "left",
            get: function() {
                return this._leftEye
            }
        }, {
            key: "right",
            get: function() {
                return this._rightEye
            }
        }], [{
            key: "TESSELATION_WIDTH",
            get: function() {
                return 120
            }
        }, {
            key: "TESSELATION_HEIGHT",
            get: function() {
                return 80
            }
        }, {
            key: "SPHERE_RADIUS",
            get: function() {
                return 500
            }
        }]), e
    }(),
    no = function() {
        function e(e) {
            this._renderer = e
        }
        var t = e.prototype;
        return t.hasVRHeadset = function() {
            return ke.webvr ? navigator.getVRDisplays().then(e => e.length > 0 ? (this._renderer.vr.setDevice(e[0]), e[0]) : null) : null
        }, t.enter = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().requestPresent([{
                source: this._renderer.domElement
            }])
        }, t.exit = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().exitPresent()
        }, r(e, [{
            key: "supported",
            get: function() {
                return ke.webvr
            }
        }, {
            key: "device",
            get: function() {
                return this._renderer && this._renderer.vr.getDevice() ? this._renderer.vr.getDevice() : null
            }
        }, {
            key: "isPresenting",
            get: function() {
                return !(!this._renderer || !this._renderer.vr.getDevice()) && this._renderer.vr.getDevice().isPresenting
            }
        }]), e
    }(),
    ro = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._camera = null, r._scene = null, r._renderer = null, r.isUserInteracting = !1, r._onMouseDownMouseX = 0, r._onMouseDownMouseY = 0, r._coordinates = {
                lat: 0,
                long: 0
            }, r._previousCoordinates = {
                lat: 0,
                long: 0
            }, r._onMouseDownCoordinates = {
                lat: 0,
                long: 0
            }, r._previousCameraProps = r.cameraProps, r._phi = 0, r._theta = 0, r._rotation = 0, r._video = r._telecine._currentScanner._video, r._videoRefreshLoop = null, r._gyroVector = {
                x: 0,
                y: 0
            }, r._offset = {
                lat: 0,
                long: 0
            }, r._writeSpeeds = {
                videoFps: r._options.fps,
                motionRenderSpeed: 60
            }, r._maxTimeBetweenWrites = 1e3 / r._writeSpeeds.videoFps, r._motionTimeouts = [], r._movingAutomatically = !1, r._deviceMotionHasOccurred = !1, r._updateFromGyroscopePending = !1, r._keysPressed = {
                up: !1,
                down: !1,
                left: !1,
                right: !1
            }, r
        }
        a(t, e), r(t, [{
            key: "isUserInteracting",
            set: function(e) {
                e !== this._isUserInteracting && (this._isUserInteracting = e, e ? this._options.isMobile || this._telecine.fire(ui.MOTION_START) : this._options.isMobile || this._telecine.fire(ui.MOTION_END))
            },
            get: function() {
                return this._isUserInteracting
            }
        }], [{
            key: "displayName",
            get: function() {
                return "ThreeSixtyEffect"
            }
        }, {
            key: "supported",
            get: function() {
                try {
                    const e = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (fl) {
                    return this._telecine._currentScanner.fire(ui.SPATIAL_UNSUPPORTED), !1
                }
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Hi, hs]
            }
        }]), t.frustumSurfaceArea = function(e, t, n) {
            const r = 2 * to.SPHERE_RADIUS * 2 * Math.sin(Math.PI / 180 * (e / 2));
            return r * (r * t / n) / (4 * Math.PI * Math.pow(to.SPHERE_RADIUS, 2))
        };
        var n = t.prototype;
        return n.activate = function() {
            return new Promise((e, t) => {
                if (window.THREE) return void e();
                const n = document.createElement("script");
                n.src = this._options.threeUrl, document.body.appendChild(n), n.onload = () => {
                    e()
                }
            }).then(() => this._initialize())
        }, n._initialize = function() {
            this._activated = !0, this._camera = new THREE.PerspectiveCamera(this._options.fieldOfView, this._video.clientWidth / this._video.clientHeight, 1, 2 * to.SPHERE_RADIUS), this._camera.target = new THREE.Vector3(0, 0, 0), this._camera.layers.enable(1), this._initializeAutoMovement(this._options.directorTimeline), this._scene = new THREE.Scene, this._texture = new THREE.VideoTexture(this._video), this._texture.generateMipmaps = !1, this._texture.minFilter = THREE.NearestFilter, this._texture.maxFilter = THREE.NearestFilter, this._texture.format = THREE.RGBFormat, this._projector = new to(this._options.projection, this._options.stereoMode, this._texture), this._projector.isStereo && this._scene.add(this._projector.right), this._scene.add(this._projector.left), this._renderer = new THREE.WebGLRenderer, this._renderer.vr.enabled = !0, this._renderer.setPixelRatio(window.devicePixelRatio), this._output = document.createElement("div"), this._output.appendChild(this._renderer.domElement), this._element.appendChild(this._output), this._hideOutput(), this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"), this._startRendering(), this._telecine._currentScanner.paused || this._showOutput(), this._webvr = new no(this._renderer), this._webvr.supported && this._webvr.hasVRHeadset().then(e => {
                setTimeout(() => {
                    this._telecine.fire(ui.WEBVR_HARDWARE_AVAILABLE, this._webvr.device)
                }, 100)
            }).catch(e => {})
        }, n.toggleVR = function() {
            if (this._webvr.isPresenting) this._webvr.exit().then(() => {
                this.adjustRenderSize()
            }).catch(e => {});
            else {
                if (this._telecine._currentScanner.paused) return;
                this._webvr.enter().then(() => {
                    this.adjustRenderSize()
                }).catch(e => {})
            }
        }, n.onplay = function() {
            this._activated && (this._showOutput(), this.adjustRenderSize())
        }, n.deactivate = function() {
            this._output && this._element.removeChild(this._output), this._stopRendering(), this._activated = !1
        }, n.snapToCenter = function() {
            this._motionTimeouts.forEach(e => clearTimeout(e));
            const e = ((this._coordinates.long >= 180 ? 360 : 0) - this._coordinates.long) / 11,
                t = (0 - this._coordinates.lat) / 11;
            this._rotation = 0;
            for (let n = 0; n < 50; n++) this._motionTimeouts.push(setTimeout(() => {
                0 === n && (this._movingAutomatically = !0, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)), 49 === n && (this._movingAutomatically = !1, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps)), this._updateViewpoint(this._coordinates.lat + t / Math.pow(1.1, n), this._coordinates.long + e / Math.pow(1.1, n)), this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t / Math.pow(1.1, n), this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t / Math.pow(1.1, n)
            }, n * this._maxTimeBetweenWrites))
        }, n.isStereo = function() {
            return !!this._projector && this._projector.isStereo
        }, n._initializeAutoMovement = function(e) {
            e && e[0] && void 0 !== e[0].p && "undefined" !== e[0].y && this._updateViewpoint(e[0].p, e[0].y)
        }, n._updateViewpoint = function(e, t) {
            this._previousCoordinates.long = this._coordinates.long, this._previousCoordinates.lat = this._coordinates.lat, e %= 360, this._coordinates.lat = Math.max(-85, Math.min(85, e)), t = (t %= 360) >= 0 ? t : 360 + t, this._coordinates.long = t
        }, n.makeContact = function(e) {
            this.isUserInteracting = !0, this._motionTimeouts.forEach(e => clearTimeout(e)), this._movingAutomatically = !1, this._contactPoint = {
                x: e.x,
                y: e.y
            }, this._onMouseDownCoordinates.long = this._coordinates.long, this._onMouseDownCoordinates.lat = this._coordinates.lat, this._motionStart = {
                long: this._coordinates.long,
                lat: this._coordinates.lat
            }, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)
        }, n.move = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._motionStart.lat - .2 * (this._contactPoint.y - e.y),
                n = .2 * (this._contactPoint.x - e.x) + this._motionStart.long;
            this._updateViewpoint(t, n)
        }, n.moveWheel = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._coordinates.lat - .1 * e.y,
                n = this._coordinates.long + .1 * e.x;
            this._updateViewpoint(t, n)
        }, n.moveDevice = function(e, t, n, r) {
            this._updateFromGyroscopePending = !0;
            const i = new THREE.Quaternion;
            let s = window.orientation;
            null === s && (s = this._video.clientWidth > this._video.clientHeight ? 90 : 0), e = e ? THREE.Math.degToRad(e) : 0, t = t ? THREE.Math.degToRad(t) : 0, n = n ? THREE.Math.degToRad(n) : 0;
            const o = s ? THREE.Math.degToRad(s) : 0,
                a = new THREE.Vector3(0, 0, 1),
                u = new THREE.Euler,
                c = new THREE.Quaternion,
                l = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
            u.set(t, e, -n, "YXZ"), i.setFromEuler(u), i.multiply(l), i.multiply(c.setFromAxisAngle(a, -o)), this._gyroVector = (new THREE.Euler).setFromQuaternion(i, "YXZ"), this._rotation = this._gyroVector.z, this.isUserInteracting || this._movingAutomatically || this._updateViewpoint(THREE.Math.radToDeg(this._gyroVector.x) - this._offset.lat, -THREE.Math.radToDeg(this._gyroVector.y) + this._offset.long), this._deviceMotionHasOccurred || (this.snapToCenter(), this._telecine.fire(ui.MOTION_START), this._deviceMotionHasOccurred = !0)
        }, n.releaseContact = function(e) {
            if (this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) - this._coordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long, this.isUserInteracting = !1, this._motionStart && !e) {
                const e = Math.hypot(this._coordinates.long - this._motionStart.long, this._coordinates.lat - this._motionStart.lat);
                this._moveDueToMomentum(e)
            }
        }, n.abandonMotion = function() {
            this.isUserInteracting = !1, this._motionStart = null
        }, n.keyPress = function(e) {
            this._options.keyboardDisabled || (this._keyIsDown() || (this.isUserInteracting = !0, this._motionTimeouts && this._motionTimeouts.forEach(e => clearTimeout(e))), this._keysPressed[e] || (this._keysPressed[e] = !0))
        }, n.keyUp = function(e) {
            this._keysPressed[e] = !1, this._keyIsDown() || (this.isUserInteracting = !1, this._moveDueToMomentum(1 / 0))
        }, n._moveFromKeyPress = function() {
            Object.keys(this._keysPressed).forEach(e => {
                if (this._keysPressed[e]) switch (e) {
                    case "up":
                        this._updateViewpoint(this._coordinates.lat + 2, this._coordinates.long);
                        break;
                    case "down":
                        this._updateViewpoint(this._coordinates.lat - 2, this._coordinates.long);
                        break;
                    case "left":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long - 2);
                        break;
                    case "right":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long + 2)
                }
            })
        }, n._keyIsDown = function() {
            return Object.keys(this._keysPressed).map(e => this._keysPressed[e]).some(e => e)
        }, n._moveDueToMomentum = function(e) {
            if (e >= 20) {
                const t = {
                    long: this._coordinates.long - this._previousCoordinates.long,
                    lat: this._coordinates.lat - this._previousCoordinates.lat
                };
                e === 1 / 0 && (t.long /= 2, t.lat /= 2);
                for (let e = 1; e < 50; e++) this._motionTimeouts.push(setTimeout(() => {
                    1 === e && (this._movingAutomatically = !0), 49 === e && (this._movingAutomatically = !1, this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps);
                    const n = 2 / Math.pow(e, 1.5);
                    this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t.long, this._updateViewpoint(this._coordinates.lat + t.lat * n, this._coordinates.long + t.long * n)
                }, e * this._maxTimeBetweenWrites))
            }
        }, n.onseeked = function() {
            this._activated && this._update()
        }, n.onresize = function() {
            this.adjustRenderSize(), this.isUserInteracting = !1
        }, n._update = function() {
            if (!this.isVRPresenting) {
                this._phi = THREE.Math.degToRad(90 + this._coordinates.lat), this._theta = THREE.Math.degToRad(this._coordinates.long), this._camera.position.set(Math.sin(this._phi) * Math.cos(this._theta), Math.cos(this._phi), Math.sin(this._phi) * Math.sin(this._theta)), this._camera.lookAt(this._camera.target), this._camera.rotation.z += this._rotation;
                const e = this.cameraProps;
                this._telecine.fire(ui.CAMERA_UPDATE, e), this._previousCameraProps.yaw === e.yaw && this._previousCameraProps.pitch === e.pitch && this._previousCameraProps.roll === e.roll && this._previousCameraProps.fov === e.fov || (this._previousCameraProps = e, this._telecine.fire(ui.CAMERA_CHANGE, e))
            }
            this._renderer.render(this._scene, this._camera)
        }, n.adjustRenderSize = function() {
            if (this.isVRPresenting) this._camera.aspect = this._video.clientWidth / this._video.clientHeight, this._camera.updateProjectionMatrix(), this._renderer.setSize(this._video.clientWidth, this._video.clientHeight);
            else {
                this._video.clientWidth > this._video.clientHeight ? this._camera.aspect = Math.max(1, Math.min(2, this._video.clientWidth / this._video.clientHeight)) : this._camera.aspect = Math.max(1 / 3, Math.min(3, this._video.clientWidth / this._video.clientHeight)), this._camera.updateProjectionMatrix();
                const e = Ei(this._video.clientWidth, this._video.clientHeight, this._camera.aspect, 1);
                this._renderer.setSize(e.width, e.height), this._output.style.paddingTop = `${e.top}px`
            }
        }, n._startRendering = function() {
            this._renderer.setAnimationLoop(() => {
                this._keyIsDown() && this._moveFromKeyPress(), this._update()
            })
        }, n._stopRendering = function() {
            this._renderer.setAnimationLoop(null)
        }, n._showOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "block"
            })
        }, n._hideOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "none"
            })
        }, n._styleOutput = function({
            backgroundColor: e,
            display: t
        } = {}) {
            this._output.style.cssText = `position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:${e};width:100%;height:100%;text-align:center;display:${t}`
        }, r(t, [{
            key: "currentCoordinates",
            get: function() {
                return this._coordinates
            },
            set: function([e, t]) {
                if (e > 90 || e < -90) throw new RangeError("Latitude should be a float between -90 and 90.");
                if (t < 0 || t > 360) throw new RangeError("Longitude should be a float between 0 and 360.");
                this._updateViewpoint(e, t), this._update()
            }
        }, {
            key: "cameraProps",
            get: function() {
                return {
                    yaw: this._coordinates.long,
                    pitch: this._coordinates.lat,
                    roll: this.roll,
                    fov: this.fieldOfView
                }
            },
            set: function(e) {
                e = o(o({}, this.cameraProps), e), this.fieldOfView = e.fov, this.roll = e.roll, this.currentCoordinates = [e.pitch, e.yaw]
            }
        }, {
            key: "roll",
            get: function() {
                return 180 * this._rotation / Math.PI
            },
            set: function(e) {
                if (e < -180 || e > 180) throw new RangeError("Roll should be a float between -180 and 180.");
                this._rotation = THREE.Math.degToRad(e)
            }
        }, {
            key: "isVRPresenting",
            get: function() {
                return this._webvr && this._webvr.isPresenting
            }
        }, {
            key: "fieldOfView",
            get: function() {
                return this._camera ? this._camera.fov : this._options.fieldOfView
            },
            set: function(e) {
                this._camera.fov = e, this._camera.updateProjectionMatrix(), this._renderer.render(this._scene, this._camera)
            }
        }, {
            key: "hasVRHeadset",
            get: function() {
                return this._webvr && !!this._webvr.device
            }
        }]), t
    }(Ms),
    io = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).connected = !1, r._context = null, r._source = null, r._mirror = null, r._rotator = null, r._decoder = null, r
        }
        a(t, e), r(t, null, [{
            key: "displayName",
            get: function() {
                return "AmbisonicEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return void 0 !== window.AudioContext
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Hi, hs]
            }
        }]);
        var n = t.prototype;
        return n.activate = function() {
            return this._context = new AudioContext, new Promise((e, t) => {
                if ("undefined" != typeof ambisonics) return void e();
                const n = document.createElement("script");
                n.src = this._options.ambisonicsUrl, document.body.appendChild(n), n.onload = () => e(), n.onerror = () => t()
            }).then(() => this.toggleAmbisonics()).catch(() => {
                this._telecine._currentScanner.fire(ui.AMBISONIC_UNSUPPORTED)
            })
        }, n.deactivate = function() {
            this._disconnect(!0)
        }, n.toggleAmbisonics = function() {
            var e, t;
            (null !== (e = null == (t = this._telecine.getCurrentStream("audio")) ? void 0 : t.ambisonic_order) && void 0 !== e ? e : 0) < 1 ? this._disconnect() : this._connect()
        }, n._connect = function() {
            var e, t;
            if (!this._context) return;
            const n = null !== (e = null == (t = this._telecine.getCurrentStream("audio")) ? void 0 : t.ambisonic_order) && void 0 !== e ? e : 0;
            if (this.connected || n < 1) return;
            const r = this._telecine._currentScanner._video;
            this._source = this._context.createMediaElementSource(r), this._mirror = new ambisonics.sceneMirror(this._context, n), this._rotator = new ambisonics.sceneRotator(this._context, n), this._decoder = new ambisonics.binDecoder(this._context, n), this._source.connect(this._mirror.in), this._mirror.out.connect(this._rotator.in), this._rotator.out.connect(this._decoder.in), this._decoder.out.connect(this._context.destination), this._mirror.mirror(1), this.connected = !0
        }, n._disconnect = function(e = !1) {
            this._source && this._source.disconnect(), e && this._context && (this._context.close(), this._context = null), this._source = null, this._mirror = null, this._rotator = null, this._decoder = null, this.connected = !1
        }, n.updateRotation = function(e, t, n) {
            this._rotator && (this._rotator.yaw !== e || this._rotator.pitch !== t || this._rotator.roll !== n) && (this._rotator.yaw = e, this._rotator.pitch = t, this._rotator.roll = n, this._rotator.updateRotMtx())
        }, t
    }(Ms);
var so = /^\s+|\s+$/g,
    oo = /^[-+]0x[0-9a-f]+$/i,
    ao = /^0b[01]+$/i,
    uo = /^0o[0-7]+$/i,
    co = parseInt;

function lo(e) {
    if ("number" == typeof e) return e;
    if ($e(e)) return NaN;
    if (Ze(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = Ze(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(so, "");
    var n = ao.test(e);
    return n || uo.test(e) ? co(e.slice(2), n ? 2 : 8) : oo.test(e) ? NaN : +e
}

function ho(e) {
    var t = function(e) {
            return e ? (e = lo(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        }(e),
        n = t % 1;
    return t == t ? n ? t - n : t : 0
}
var fo = je.isFinite,
    _o = Math.min,
    po = function(e) {
        var t = Math.round;
        return function(e, n) {
            if (e = lo(e), (n = null == n ? 0 : _o(ho(n), 292)) && fo(e)) {
                var r = (kt(e) + "e").split("e");
                return +((r = (kt(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
            }
            return t(e)
        }
    }();

function mo(e) {
    return !isNaN(e)
}

function vo(e) {
    return po(e, 3)
}
let go = 0;

function yo(e = "b") {
    return `${e}${++go}`
}
yo(), yo();
const Eo = yo(),
    So = yo(),
    To = yo(),
    bo = yo(),
    Ao = yo(),
    Io = yo(),
    wo = yo(),
    Ro = yo(),
    Po = yo(),
    Do = yo(),
    ko = yo(),
    Oo = yo(),
    Co = yo(),
    Lo = yo(),
    No = yo(),
    Mo = yo();
var xo = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: Io,
        TELECINE_READY: wo,
        TELECINE_VIDEO_INIT: Ro,
        PLAY_INITIATED: Po,
        QUALITY_CHANGED: Do,
        FORCED_QUALITY: ko,
        CUE_CHANGED: Oo,
        CAPTIONS_CHANGED: Co,
        SPATIAL_PLAYBACK_TOGGLED: Lo,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: No,
        HLS_QUALITY_CHANGED: Mo
    }),
    Fo = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
const Uo = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    jo = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    Bo = (o(o(o(o(o(o(o(o(o({}, ri), oi), ai), Fo), ui), ii), ci), li), xo), o(o({}, ai), Fo));

function Vo(e) {
    var t;
    return "done" === (null == e || null == (t = e.archive) ? void 0 : t.status)
}

function Ho(e) {
    return "pending" === (null == e ? void 0 : e.status)
}

function Xo(e) {
    return "started" === (null == e ? void 0 : e.status)
}

function qo(e) {
    return "ended" === (null == e ? void 0 : e.status)
}

function Go(e) {
    return Wo(e, "/playlist/refresh")
}

function Wo(e, t) {
    var n;
    const r = null == (n = e.request.files.hls) ? void 0 : n.default_cdn,
        {
            signature: i,
            timestamp: s,
            expires: o
        } = e.request;
    return `${`https://${e.player_url}/live/${e.video.id}`}${t}${`?signature=${i}&time=${s}&expires=${o}&cdn=${r}`}`
}
var Ko = Object.prototype.hasOwnProperty;

function Yo(e) {
    if (null == e) return !0;
    if (jn(e) && (xe(e) || "string" == typeof e || "function" == typeof e.splice || yn(e) || kn(e) || pn(e))) return !e.length;
    var t = pr(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (Nn(e)) return !Un(e).length;
    for (var n in e)
        if (Ko.call(e, n)) return !1;
    return !0
}

function $o(e) {
    const t = this;
    let n = {};
    const r = {
        get attributes() {
            return Object.assign({}, t)
        },
        get previousAttributes() {
            return n
        },
        clear() {
            i();
            var e = t.attributes;
            for (var n in e) delete t[n]
        },
        set(e) {
            for (var n in i(), e = Cr(e)) t[n] = e[n]
        },
        clone: () => new $o(t.attributes),
        toJSON: () => Cr(t.attributes)
    };

    function i() {
        Yo(t.attributes) || (n = Cr(t.attributes))
    }
    return r.set(e), E(t, r)
}

function zo(e, t) {
    const n = new $o(ti(e, t));
    let r = !1;
    return S(n, {
        reset: function(e) {
            return n.clear(),
                function(e) {
                    r = !0, n.set(e), ti(n, t)
                }(e), n
        },
        isNewVideo: function() {
            const e = n.previousAttributes;
            return !r || e.video.id !== n.video.id || e.video.version.current !== n.video.version.current || e.video.live_event && !Vo(e.video.live_event) && (!n.video.live_event || Vo(n.video.live_event))
        }
    })
}

function Qo(e, t, n) {
    return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = lo(n)) == n ? n : 0), void 0 !== t && (t = (t = lo(t)) == t ? t : 0),
        function(e, t, n) {
            return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
        }(lo(e), t, n)
}

function Jo(e) {
    return e.quality || e.metadata.quality
}

function Zo(e, t = !1, n = !1) {
    let r = e.url;
    if ("avc_url" in e && (r = e.avc_url), n) return r;
    const i = ke.hevc && (!t || ke.spatialHEVC),
        s = ke.hdr && ke.hevcMain10 && (!t || ke.spatialHEVC);
    return ke.dolbyVision && "hevc_dvh1_url" in e ? r = e.hevc_dvh1_url : s && "hevc_hdr_url" in e ? r = e.hevc_hdr_url : i && "hevc_sdr_url" in e ? r = e.hevc_sdr_url : ke.av1 && "av1_url" in e && (r = e.av1_url), r
}

function ea(e) {
    return e.fallback_url
}

function ta(e, t = !1) {
    const n = e.request.files,
        r = n.hls.default_cdn,
        i = e.request.drm,
        s = n.hls.cdns[r],
        o = t ? ea(s) : Zo(s, e.video.spatial, i);
    return {
        id: `hls-${r}-${e.video.id}`,
        src: o,
        mime: Uo.hls,
        priority: 3,
        metadata: {
            cdn: r,
            origin: n.hls.cdns[r].origin,
            quality: "sd"
        }
    }
}

function na(e, t = !1) {
    const n = e.request.files;
    return Yo(n.dash) ? [] : Object.keys(n.dash.cdns).map(r => {
        const i = n.dash.cdns[r],
            s = t ? ea(i) : Zo(i, e.video.spatial);
        return {
            id: `dash-${r}-${e.video.id}`,
            src: s,
            mime: e.request.drm ? Uo.dashMpd : Uo.dash,
            priority: r === n.dash.default_cdn ? 1 : 2,
            metadata: {
                cdn: r,
                origin: n.dash.cdns[r].origin,
                quality: "sd"
            }
        }
    })
}

function ra(e) {
    if (Yo(e.progressive)) return [];
    let t = e.progressive;
    return "progressive_avc" in e && (t = e.progressive_avc), t.filter(sa(t))
}

function ia(e) {
    if ("number" == typeof e) return e;
    const t = e.split("-");
    return 5 === t.length ? t[0] : parseInt(t[0], 10)
}

function sa(e) {
    const t = e.filter(oa).map(Jo);
    return e => -1 === t.indexOf(Jo(e)) || oa(e)
}

function oa(e) {
    let t = e.fps;
    return "metadata" in e && (t = e.metadata.fps), t > 30
}

function aa(e) {
    return ua(e) >= 720
}

function ua(e) {
    return "string" != typeof e && (e = Jo(e)), parseInt(e, 10)
}

function ca(e) {
    const t = ra(e.request.files).map(e => e.quality);
    return la(e, e.embed.quality, t)
}

function la(e, t, n = []) {
    return e.embed.on_site || ke.android || ke.iOS || ke.windowsPhone || !t || n.length && -1 === n.indexOf(t) ? null : t
}

function ha(e = "desc") {
    return (t, n) => {
        const r = ua(t),
            i = da(t),
            s = ua(n),
            o = da(n);
        return "asc" === e ? r - s || i - o : s - r || o - i
    }
}

function da(e) {
    return "object" != typeof e ? 0 : "fps" in e ? e.fps : "metadata" in e && "fps" in e.metadata ? e.metadata.fps : 0
}

function fa(e) {
    const t = e.video.live_event,
        n = e.request.files;
    if (!Yo(n.hls)) {
        var r;
        const i = n.hls.default_cdn,
            s = n.hls.cdns[i].json_url || (null == (r = t.playback) ? void 0 : r.hls_noredirect),
            o = e.request.flags.live_dash ? 2 : 1;
        return {
            id: `hls-${i}-${e.video.id}`,
            src: s,
            mime: Uo.hlsLive,
            priority: o,
            metadata: {
                cdn: i,
                origin: n.hls.cdns[i].origin,
                quality: "sd"
            }
        }
    }
    return null
}

function _a(e, t) {
    let n = [];
    if (t.video) {
        const r = t.video.currentFile.mime;
        if (r === Uo.hlsLive) return t.manifest.video.map(e => o(o({}, e), {}, {
            quality: `${e.height}p`
        }));
        if ([Uo.dash, Uo.dashMpd].includes(r)) {
            const r = t.video.drmHandler && "sd-fallback" === t.video.drmHandler.state;
            n = function(e, t = !1, n = !1) {
                if (!e) return [];
                let r = e.streams;
                "streams_avc" in e && (r = e.streams_avc);
                const i = t ? ke.spatialHEVC && ke.hevc : ke.hevc,
                    s = t ? ke.spatialHEVC && ke.hdr : ke.hdr;
                return ke.dolbyVision && "streams_hevc_dvh1" in e ? r = e.streams_hevc_dvh1 : s && "streams_hevc_hdr" in e ? r = e.streams_hevc_hdr : i && "streams_hevc_sdr" in e ? r = e.streams_hevc_sdr : ke.av1 && "streams_av1" in e && (r = e.streams_av1), n && "streams_fallback" in e && (r = e.streams_fallback), r
            }(e.request.files.dash, e.video.spatial, r)
        } else n = t.video.files.filter(e => "progressive" === jo[e.mime])
    }
    return n.filter(sa(n)).sort(ha())
}

function pa(e) {
    let t = Jo(e);
    const n = {
        "1440p": "2K",
        "2160p": "4K",
        "2700p": "5K",
        "3240p": "6K",
        "3780p": "7K",
        "4320p": "8K"
    };
    for (const r in n) t = t.replace(r, n[r]);
    return t
}

function ma(e) {
    return ke.spatialPlayback && e.video.spatial ? 35 : 75
}

function va(e) {
    return e.request.text_tracks.map(e => ({
        id: e.id,
        src: e.url,
        kind: e.kind,
        label: e.label,
        language: e.lang
    }))
}
let ga = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    ya = ga;
var Ea = {
    set: function(e) {
        ya = Object.assign({}, ga, e)
    },
    captureException: function(e, t) {
        return ya.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return ya.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return ya.captureBreadcrumb(e, t, n, r)
    }
};

function Sa(e, t, n) {
    const r = !0 === ke.iOS,
        i = e.embed.playsinline && (ke.mobileAndroid || ke.iOS >= 10 || r);
    let s = !1,
        o = !1,
        a = !1,
        u = !0,
        c = "auto";

    function l(e) {
        var t, r, i, s, o, a;
        const {
            embed: u
        } = e;
        n.disablePictureInPicture = !(null === (t = null !== (r = u.pip) && void 0 !== r ? r : null == (i = u.settings) ? void 0 : i.pip) || void 0 === t || t), n.autoPictureInPicture = null === (s = null !== (o = u.auto_pip) && void 0 !== o ? o : null == (a = u.settings) ? void 0 : a.auto_pip) || void 0 === s || s
    }

    function h(e) {
        if (!u && n.buffered && n.buffered.length > 0) {
            e = e || n.currentTime;
            const r = function(e, t) {
                    var n = e.length - 1;
                    if (e.length > 1)
                        for (var r = 0, i = e.length; r < i; r++)
                            if (e.start(r) <= t && e.end(r) >= t) {
                                n = r;
                                break
                            }
                    return n
                }(n.buffered, e),
                i = n.buffered.end(r),
                o = i / n.duration,
                u = n.duration;
            if (t.fire(ri.PROGRESS, {
                    loaded: i,
                    duration: u,
                    loadProgress: o
                }), a && s && i === n.duration) return void(s && n.paused && n.play().catch(Ea.captureException))
        }
    }

    function d(t) {
        if ("auto" === t) return void(n.video.currentFile.restrictedStreamIndexes = []);
        const r = _a(e, n).reverse().map(e => e.quality).indexOf(t); - 1 !== r && (Ea.captureBreadcrumb(`Switched to ${t}`, {}, "video"), n.video.currentFile.restrictedStreamIndexes = [r])
    }

    function f(r) {
        const i = _a(e, n).map(e => e.quality),
            s = la(e, e.embed.quality, i);
        s && t.fire(ko, s), d(s || "auto")
    }
    return t.on(Ro, (function() {
        var t;
        n.playsinline = i, n.muted = e.embed.muted, n.lowLatencyMode = null == (t = e.video.live_event) ? void 0 : t.low_latency
    })), t.on(So, (function() {
        u = !0, n.paused || n.pause(), o = !1, s = !1, n.currentTime = 0
    })), t.on(To, (function() {
        n.paused || n.pause(), n.video = null
    })), n.on(ri.PLAY, (function() {
        u = !1, t.fire(ri.PLAY, n.currentTime)
    })), n.on(ri.PAUSE, (function() {
        s = !1, t.fire(ri.PAUSE, n.currentTime, n.ended)
    })), n.on(ri.PLAYING, (function(e) {
        h()
    })), n.on(ri.TIME_UPDATE, (function(e) {
        const r = n.currentTime;
        if (!u) {
            const e = n.duration,
                i = r / e,
                s = n.playbackRate;
            t.fire(ri.TIME_UPDATE, {
                currentTime: r,
                duration: e,
                timeProgress: i,
                playbackRate: s
            })
        }
    })), n.on(ri.ENDED, (function(e) {
        n.loop ? n.play().catch(Ea.captureException) : (s = !1, t.fire(ri.ENDED, e))
    })), n.on(ri.LOADED_METADATA, (function(t) {
        const r = n.duration;
        if (isFinite(r) && r > 0) {
            if (r < e.video.duration - 1 || r > e.video.duration + 1) return;
            e.video.duration = r
        }
        e.video.video_width = n.videoWidth, e.video.video_height = n.videoHeight
    })), n.on(ri.DURATION_CHANGE, (function(t) {
        const r = n.duration;
        isFinite(r) && (e.video.duration > 0 && (r < e.video.duration - 1 || r > e.video.duration + 1) || (e.video.duration = r))
    })), n.on(ri.PROGRESS, h), n.on(oi.BUFFER_STARTED, () => {
        a = !0
    }), n.on(oi.BUFFER_ENDED, () => {
        a = !1
    }), t.on(Eo, (function(t, r) {
        r || (r = (n.duration || e.video.duration) * Qo(t, 0, 1)), r = Qo(r, 0, vo(n.duration || e.video.duration)), n.currentTime = r
    })), n.on(ri.SEEKING, (function() {
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(ri.SEEKING, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(ri.SEEKED, (function() {
        h();
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(ri.SEEKED, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(oi.CURRENT_FILE_CHANGE, (function(r) {
        Ea.captureBreadcrumb("Current file changed", {
            id: r.id,
            mime: r.mime,
            src: r.src,
            metadata: r.metadata
        }, "video"), r.metadata.quality, [Uo.dash, Uo.dashMpd].includes(r.mime) && f(), [Uo.hlsLive].includes(r.mime) ? n.once(oi.STREAMS_LOADED, () => {
            f()
        }) : function(n) {
            const r = ca(e);
            r && t.fire(ko, r)
        }()
    })), n.on(ri.RESIZE, (function() {
        n.video.currentFile.mime === Uo.hls && n.videoHeight && t.fire(Mo, {
            height: n.videoHeight
        })
    })), l(e), t.on(Io, (e, t) => {
        var n, r;
        (null == t || null == (n = t.embed.settings) ? void 0 : n.pip) !== (null == (r = e.embed.settings) ? void 0 : r.pip) && l(e)
    }), {
        play: function() {
            return s = !0, o || (t.fire(Po), o = !0), n.play()
        },
        pause: function() {
            s = !1, n.pause()
        },
        get quality() {
            return c
        },
        set quality(r) {
            ! function(r) {
                const i = n.video.currentFile.mime;
                if ([Uo.dash, Uo.dashMpd, Uo.hlsLive].includes(i)) d(r);
                else {
                    const t = _a(e, n).filter(e => e.metadata.quality === r);
                    t.length > 0 && (u = !0, n.video.currentFile = t[0])
                }
                c = r, t.fire(Do, r)
            }(r)
        }
    }
}

function Ta(e, t, n) {
    let r = null;
    ke.spatialPlayback && (t.on(Ro, (function() {
        r && (n.deactivateEffect(ro), r = null, t.fire(Lo, r));
        const i = e.video.spatial;
        i && (e.request.drm || n.supportsEffect(ro) && (r = n.activateEffect(ro, {
            threeUrl: e.request.urls.three_js,
            fps: e.video.fps,
            fieldOfView: i.fov,
            directorTimeline: i.director_timeline,
            projection: i.projection,
            stereoMode: i.stereo_mode,
            initialView: i.initial_view,
            isMobile: ke.android,
            dimensions: e.embed.on_site ? {
                width: 1080,
                height: 540
            } : {
                width: 640,
                height: 360
            },
            keyboardDisabled: !e.embed.keyboard
        }), t.fire(Lo, r)))
    })), n.on(ui.SPATIAL_UNSUPPORTED, (function() {
        r && (n.deactivateEffect(ro), r = null, t.fire(Lo, r))
    })))
}

function ba(e, t, n) {
    let r = null;
    t.on(Ro, (function() {
        r && (n.deactivateEffect(Js), r = null), e.video.canvas && (e.request.drm || n.supportsEffect(Js) && (r = n.activateEffect(Js)))
    }))
}
var Aa = Zr((function(e, t, n) {
    Qr(e, t, n)
}));

function Ia(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
let wa = function() {
    function e(e, t, n) {
        rn(this), this._liveEventHasID = new D, this._liveEvent = Cr(e), this._sessionUrl = e.session_url || e.sessionUrl, this._sessionRefreshUrl = t, this._appPollUrl = n, this._forcedPoll = !1, this._disabled = !1, this._setupPolling()
    }
    var n = e.prototype;
    return n.disable = function() {
        this._disabled = !0
    }, n.forcePolling = function() {
        this.isForcePolling || (this._forcedPoll = !0, this._setupPolling())
    }, n.unforcePolling = function() {
        this._forcedPoll = !1
    }, n._setupPolling = function() {
        !1 !== this._liveEvent.polling && (this._liveEvent.id && this._liveEventHasID.resolve(), this._shouldPollApp() ? this._pollApp() : this._shouldPoll() && this._pollLiveApi())
    }, n._shouldPoll = function() {
        var e;
        return !(qo(this._liveEvent) && "started" !== (null == (e = this._liveEvent.archive) ? void 0 : e.status) || !this.isForcePolling && Xo(this._liveEvent))
    }, n._shouldPollApp = function() {
        return !this._sessionUrl || !(!Ho(this._liveEvent) || null !== this._liveEvent.id)
    }, n._refreshSessionUrl = function() {
        try {
            const e = this;
            return Ia(oe(e._sessionRefreshUrl).json(), (function(t) {
                return e._sessionUrl = t.url, t.url
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._pollLiveApi = function() {
        try {
            const e = this;
            if (e._disabled) return;
            let n, r = {};
            return ke.browser.ie && (r = {
                    Pragma: "no-cache",
                    "Cache-Control": "no-cache"
                }),
                function(e, t) {
                    return e && e.then ? e.then(t) : t()
                }(function(i, s) {
                    try {
                        var o = Ia(oe({
                            url: e._sessionUrl,
                            retry: 3,
                            retryStatus: e => [410].includes(e) || t.retryStatus(e),
                            hooks: {
                                beforeRetry: [e._beforeRetry.bind(e)]
                            },
                            headers: r
                        }).json(), (function(e) {
                            n = e
                        }))
                    } catch (fl) {
                        return s()
                    }
                    return o && o.then ? o.then(void 0, s) : o
                }(0, (function() {
                    throw new Error(`Hit max retries polling ${e._sessionUrl}`)
                })), (function(t) {
                    if (n.status !== e._liveEvent.status) {
                        if (qo(n) && "provision_expire" === n.terminate_reason) return e._sessionUrl = null, e._liveEvent.id = null, void setTimeout(e._setupPolling.bind(e), 5e3);
                        const t = {
                            active: Bo.EVENT_ACTIVE,
                            pending: Bo.EVENT_PENDING,
                            started: Bo.EVENT_STARTED,
                            ended: Bo.EVENT_ENDED
                        }[n.status];
                        try {
                            e.fire(t, n)
                        } catch (r) {
                            throw new Error(`Error firing live event status change ${r}`)
                        }
                    }
                    if (n.archive && (!e._liveEvent.archive || n.archive.status !== e._liveEvent.archive.status)) {
                        const t = {
                            started: Bo.ARCHIVE_STARTED,
                            done: Bo.ARCHIVE_DONE,
                            error: Bo.ARCHIVE_ERROR
                        }[n.archive.status];
                        e.fire(t, n)
                    }
                    e._liveEvent = Aa(e._liveEvent, n), e._shouldPoll() && setTimeout(e._pollLiveApi.bind(e), 5e3)
                }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._beforeRetry = function(e, t) {
        try {
            return Ia(this._refreshSessionUrl(), (function(t) {
                e.url = t
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, n._pollApp = function() {
        try {
            const e = this;
            if (e._disabled) return;
            return Ia(oe(e._appPollUrl).json(), (function(t) {
                let n = !1;
                return function(r, i) {
                    var s = function() {
                        if (null !== t.ingest.session_id) return e._liveEventHasID.resolve(), e._liveEvent.id = t.ingest.session_id, Ia(e._refreshSessionUrl(), (function() {
                            e._pollLiveApi(), n = !0
                        }))
                    }();
                    return s && s.then ? s.then(i) : i(s)
                }(0, (function(t) {
                    if (n) return t;
                    setTimeout(e._pollApp.bind(e), 5e3)
                }))
            }))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }, r(e, [{
        key: "isForcePolling",
        get: function() {
            return this._forcedPoll
        }
    }, {
        key: "liveEventIDReady",
        get: function() {
            return this._liveEventHasID
        }
    }]), e
}();

function Ra(e, t, n) {
    this.constructorName = "BackboneError", this.message = e, this.name = t, this.source = n
}

function Pa() {}

function Da(e, t) {
    if (!t) return e && e.then ? e.then(Pa) : Promise.resolve()
}

function ka(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }
}

function Oa(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var r = Promise.resolve(e());
        return t ? r.then(t) : r
    } catch (fl) {
        return Promise.reject(fl)
    }
}

function Ca(e) {
    var t = e();
    if (t && t.then) return t.then(Pa)
}

function La(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Na(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function Ma(e, t) {
    try {
        var n = e()
    } catch (fl) {
        return t(fl)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function xa(e, t, n) {
    const r = ka((function() {
            return Ma((function() {
                return Oa(S, (function(t) {
                    return t(n, e)
                }))
            }), (function(e) {
                throw Ea.captureException(e), new Error("Failed to create Hive Module", e)
            }))
        })),
        i = ka((function(e) {
            return Ma((function() {
                return Oa(E, (function(t) {
                    return t(n, {
                        TelecineEvents: oi,
                        VideoEvents: ri
                    }, e)
                }))
            }), (function(e) {
                return null
            }))
        })),
        s = ka((function() {
            var t;
            const {
                streamroot_key: r
            } = null !== (t = e.video.ecdn) && void 0 !== t ? t : {};
            if (r) return d = new D, Na((function() {
                if (!l) return function(e = 30) {
                    n.bufferTarget = e, n.presentationDelay = e
                }(), La(i(r), (function(e) {
                    l = e
                }))
            }), (function() {
                var e;
                null == (e = l) || e.setUp(), d.resolve()
            }))
        })),
        o = ka((function() {
            return d = new D, Ma((function() {
                return Na((function() {
                    if (!h) return Oa(r, (function(e) {
                        h = e
                    }))
                }), (function() {
                    return La(h.sessionSafeECDNBlock(c), (function({
                        hive_jwt: t
                    }) {
                        if (!t) return void d.reject();
                        const r = ka((function(e) {
                                var t;
                                return La(null == (t = h) ? void 0 : t.setUp(e), (function() {
                                    d.resolve()
                                }))
                            })),
                            i = function e(i) {
                                return La(Ca((function() {
                                    if ("HLSLiveScanner" === i) return La(r(t), (function() {
                                        n.off(oi.SCANNER_CHANGE, e)
                                    }))
                                })))
                            };
                        return Ca((function() {
                            if (!e.video.live_event || "HLSLiveScanner" === n.currentScannerName) return Da(r(t));
                            n.on(oi.SCANNER_CHANGE, i)
                        }))
                    }))
                }))
            }), (function(e) {
                var t;
                d.reject(), null == (t = h) || t.stop()
            }))
        })),
        a = ka((function() {
            return Da({
                hive: o,
                kollective: () => {},
                streamroot: s
            }[e.video.ecdn.ecdn_provider]())
        }));
    let u, c, l, h, d, f, _ = !1,
        p = 0,
        m = 0;

    function v() {
        c && (c.disable(), c = null)
    }

    function g() {
        d && (d.resolve(), d = null)
    }

    function y() {
        n.endLive()
    }

    function E() {
        return import ("./streamroot.module.js").then(({
            default: e
        }) => e)
    }

    function S() {
        return import ("./hive.module.js").then(({
            default: e
        }) => e)
    }
    return t.on(Io, (function() {
        u && !e.isNewVideo() || (u = !0, v(), g(), h && h.stop(), l && l.stop(), e.video.live_event && !Vo(e.video.live_event) && (function(n) {
            c = new wa(n, function(e) {
                return Wo(e, "/session/refresh")
            }(e), function(e) {
                return `https://${e.vimeo_url}/live_event/status?clip_id=${e.video.id}`
            }(e)), c.on(Bo.EVENT_ENDED, y), Object.keys(Bo).forEach(e => {
                const n = Bo[e];
                c.on(n, e => {
                    t.fire(n, e)
                })
            })
        }(e.video.live_event), function() {
            p = 0, m = 0;
            let e = !1;
            n.once(ri.PLAYING, () => e = !0);
            let r = C();
            clearInterval(f), f = setInterval(() => {
                n.paused || (p += L(r) / 1e3), e && _ && (m += L(r) / 1e3),
                    function(e) {
                        if (n.lowLatencyMode && e > 12 && n.latency > 10 && _) {
                            const e = "Rebuffer ratio > 12% and latency > 10s, fallback to normal HLS w/ target latency of 12s.";
                            t.fire(Bo.LOW_LATENCY_FALLBACK, {
                                msg: e
                            }), n.lowLatencyMode = !1, n.presentationDelay = 12, n.bufferTarget = 12
                        }
                    }(m / p * 100), r = C()
            }, 500)
        }()), e.video.ecdn && a())
    })), t.on(To, (function() {
        g(), l && (l.destroy(), l = null), h && (h.destroy(), h = null), v()
    })), n.on(Bo.STREAM_ONLINE, (function() {
        c.isForcePolling && c.unforcePolling()
    })), n.on(Bo.STREAM_OFFLINE, (function() {
        c.isForcePolling || c.forcePolling()
    })), n.on(oi.BUFFER_STARTED, (function() {
        _ = !0
    })), n.on(oi.BUFFER_ENDED, (function() {
        _ = !1
    })), {
        get p2pReady() {
            return d
        }
    }
}

function Fa(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var r = Promise.resolve(e());
        return t ? r.then(t) : r
    } catch (fl) {
        return Promise.reject(fl)
    }
}

function Ua(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (fl) {
            return Promise.reject(fl)
        }
    }
}

function ja(e, t, n) {
    const r = Ua((function() {
            return function(e, t) {
                try {
                    var r = Fa(u, (function(e) {
                        return e(n)
                    }))
                } catch (fl) {
                    return t(fl)
                }
                return r && r.then ? r.then(void 0, t) : r
            }(0, (function(e) {
                return Ea.captureException(e), null
            }))
        })),
        i = Ua((function() {
            var t;
            const {
                kollective_jwt: n,
                kollective_jitc: i
            } = null !== (t = e.video.ecdn) && void 0 !== t ? t : {};
            if (n && i) return a = new D,
                function(e, t) {
                    var n = function() {
                        if (!o) return Fa(r, (function(e) {
                            o = e
                        }))
                    }();
                    return n && n.then ? n.then(t) : t()
                }(0, (function() {
                    var e;
                    return function(e, t, n) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(null == (e = o) ? void 0 : e.setUp(i, n), (function() {
                        a.resolve()
                    }))
                }))
        }));
    let s, o, a;

    function u() {
        return import ("./kollective.module.js").then(({
            default: e
        }) => e)
    }

    function c() {
        a && (a.resolve(), a = null), o && (o.destroy(), o = null)
    }
    return t.on(Io, (function() {
        s && !e.isNewVideo() || (s = !0, c(), !e.video.ecdn) || {
            hive: () => {},
            kollective: i,
            streamroot: () => {}
        }[e.video.ecdn.ecdn_provider]()
    })), t.on(To, c), {
        get p2pReady() {
            return a
        }
    }
}

function Ba(e, t, n) {
    let r = null;

    function i() {
        n.deactivateEffect(io), r = null
    }
    t.on(Po, (function() {
        var t;
        r && i(), (null == (t = e.video.channel_layout) ? void 0 : t.startsWith("ambisonic")) && n.supportsEffect(io) && (r = n.activateEffect(io, {
            ambisonicsUrl: e.request.urls.ambisonics_js
        }))
    })), n.on(ui.CAMERA_UPDATE, (function({
        yaw: e,
        pitch: t,
        roll: n
    }) {
        r && r.updateRotation(e, t, n)
    })), n.on(ui.AMBISONIC_UNSUPPORTED, (function() {
        r && i()
    })), n.on(oi.STREAM_CHANGE, (function() {
        r && r.toggleAmbisonics()
    }))
}

function Va(e, t = []) {
    if (!e || "null" === e || 0 === t.length) return {
        track: null
    };
    const [n, r] = e.split("."), [i] = n.split(/[-_]/), s = n !== i, o = t.filter(e => s && e.language === n || e.language === i).sort((e, t) => {
        const s = 2 * (e.language === i && e.kind === r) + 2 * (e.language === n) + 1 * (e.kind === r);
        return 2 * (t.language === i && t.kind === r) + 2 * (t.language === n) + 1 * (t.kind === r) - s
    });
    return o.length > 0 ? {
        track: o[0],
        exactMatch: o[0].language === n && o[0].kind === r
    } : {
        track: null
    }
}

function Ha(e) {
    const t = e.split(/\n/g);
    let n = [],
        r = [];
    return t.forEach(e => {
        let t = e.match(/<[a-zA-Z]+ ?.*?>/g) || [],
            i = e.match(/<\/[a-zA-Z]+ ?.*?>/g) || [];
        const s = r.map(({
            startTag: e
        }) => e);
        r = [], t = s.concat(t), t.forEach(e => {
            let [t] = e.replace(/<|>/g, "").split(" ");
            const n = i.indexOf(`</${t}>`); - 1 !== n ? i.splice(n, 1) : r.push({
                startTag: e,
                closeTag: `</${t}>`
            })
        });
        const o = r.map(({
                closeTag: e
            }) => e).reverse().join(""),
            a = `${s.join("")}${e}${o}`;
        n.push(a)
    }), n.join("<br>")
}

function Xa(e) {
    return e ? e.split(/\n/g).join("↵") : e
}

function qa(e, t, n, r) {
    let i;

    function s() {
        return t.pictureInPictureActive ? "showing" : "hidden"
    }

    function o() {
        if (0 !== t.video.textTracks.length) {
            if (t.video.textTracks.forEach(e => {
                    e.on("cuechange", a), e.on("modechange", u)
                }), t.video.textTracks.language) {
                const [n] = t.video.textTracks.language.split(/[-_]/), [r] = t.video.textTracks.language.split(/[-_]/);
                if (n !== r) {
                    const n = `${t.video.textTracks.language}.subtitles`,
                        {
                            track: r
                        } = Va(n, t.video.textTracks);
                    if (r) return void e.fire(bo, n)
                }
            }
            e.fire(Ao)
        } else e.fire(Ao)
    }

    function a(t) {
        const n = t.target,
            r = n.activeCues,
            i = [];
        let s;
        for (var o = 0, a = r.length; o < a; o++) "" !== r[o].text.replace(/^\s+|\s+$/gm, "") && (s = document.createElement("span"), s.appendChild(r[o].getCueAsHTML()), i.push({
            html: Ha(s.innerHTML),
            text: Xa(r[o].text)
        }));
        e.fire(Oo, n, i)
    }

    function u(t) {
        const r = t.target,
            i = n.querySelector("video");
        ke.iOS && function(e) {
            const t = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find(e => void 0 !== e);
            return void 0 !== t ? !!t : e.webkitDisplayingFullscreen
        }(i) && "showing" === r.mode && e.fire(Co, r)
    }
    e.on(Ro, o), e.on(bo, (function(n) {
        if (i && i.id === n) return;
        let r = t.video.textTracks.getTrackById(n),
            o = !0;
        r || ({
            track: r,
            exactMatch: o
        } = Va(n, t.video.textTracks)), r !== i && setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = e === r ? s() : "disabled"
            }), e.fire(Co, r, !o), i = r
        }, 0)
    })), e.on(Ao, (function() {
        setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = "disabled"
            }), e.fire(Oo), i && (i = null, e.fire(Co, null))
        }, 0)
    })), e.on(oi.TEXT_TRACKS_AVAILABLE, o), e.on([ri.ENTER_PICTURE_IN_PICTURE, ri.LEAVE_PICTURE_IN_PICTURE], (function() {
        ! function(e) {
            i && i.mode !== e && (i.mode = e)
        }(s())
    }))
}

function Ga(e, t, n) {
    let r, i, s, o, a;

    function u() {
        const i = e.video.live_event;
        if (Ho(i) || function(e) {
                return "active" === (null == e ? void 0 : e.status)
            }(i) || qo(i) && !Vo(i)) return void(r.video = null);
        if (Xo(i) && r.video && !e.isNewVideo()) return;
        const u = Xo(i) ? function(e) {
                const t = [],
                    n = fa(e);
                n && t.push(n);
                const r = function(e) {
                    var t;
                    const n = e.video.live_event,
                        r = e.request.files;
                    if (Yo(r.dash)) return null;
                    const i = r.dash.default_cdn,
                        s = r.dash.cdns[i].url || (null == (t = n.playback) ? void 0 : t.dash_noredirect),
                        o = e.request.flags.live_dash ? 2 : 1;
                    return {
                        id: `dash-${i}-${e.video.id}`,
                        src: s,
                        mime: Uo.dashMpd,
                        priority: o,
                        metadata: {
                            cdn: i,
                            origin: r.dash.cdns[i].origin,
                            quality: "sd"
                        }
                    }
                }(e);
                return r && t.push(r), t
            }(e) : function(e) {
                const t = e.request.files,
                    n = ra(t),
                    r = ca(e),
                    i = e.request.cookie.quality || r || function(e) {
                        const t = ra(e.request.files);
                        let n = t.some(aa);
                        ke.mobileAndroid && (n = !1);
                        let r = "720p";
                        if (n) {
                            const e = t.map(Jo); - 1 !== e.indexOf("1080p") && -1 === e.indexOf("720p") && (r = "1080p")
                        }
                        return e.request.cookie.hd || e.video.default_to_hd ? r : "360p"
                    }(e);
                let s = function({
                    files: e = [],
                    preference: t = "360p",
                    priorityOffset: n = 0
                }) {
                    (e = Array.from(e)).sort(ha());
                    const r = e.map(Jo);
                    if (t) {
                        -1 === r.indexOf(t) && (r.push(t), r.sort((e, t) => ua(t) - ua(e)));
                        const e = r.indexOf(t),
                            n = r.splice(0, e);
                        n.reverse(), r.push.apply(r, p(n))
                    }
                    return e.map(e => ({
                        id: e.id,
                        src: e.url,
                        mime: e.mime,
                        priority: r.indexOf(e.quality) + 1 + n,
                        metadata: {
                            profile: e.profile,
                            cdn: e.cdn,
                            origin: e.origin,
                            quality: e.quality,
                            fps: e.fps
                        }
                    }))
                }({
                    files: n,
                    preference: i,
                    priorityOffset: 3
                });
                return t.hls && (s = s.concat(ta(e)), e.request.drm && ke.browser.safari) || t.dash && (s = s.concat(na(e))), s
            }(e),
            l = va(e);
        !r.video || e.isNewVideo() || a ? function(i, a) {
            var u;
            const c = e.video.live_event,
                l = n.getBoundingClientRect(),
                h = Xo(c) ? fa(e) : function(e) {
                    const t = e.request.files;
                    if (!Yo(t.hls)) {
                        const e = t.hls.default_cdn,
                            n = t.hls.cdns[e],
                            r = n.captions || n.url;
                        return r ? {
                            src: r,
                            mime: Uo.hls,
                            metadata: {
                                cdn: e,
                                origin: n.origin,
                                quality: "sd"
                            }
                        } : null
                    }
                    return null
                }(e);
            r.video = {
                id: e.video.id,
                title: e.video.title,
                subtitle: `from ${e.video.owner.name}`,
                files: i,
                textTracks: a,
                chapters: Nt(e, "embed.chapters", []),
                duration: e.video.duration,
                externalDisplayFiles: {
                    AirPlay: h
                },
                metadata: {
                    playlistRefreshUrl: Go(e),
                    thumbnail: e.video.thumbs[640],
                    useHls: e.request.drm && ke.browser.safari,
                    drm: e.request.drm,
                    p2pReady: e.video.ecdn && (null !== (u = s.p2pReady) && void 0 !== u ? u : o.p2pReady),
                    percentShown: ro.frustumSurfaceArea(e.video.spatial.fov, l.width, l.height)
                }
            }, t.fire(Ro)
        }(u, l) : c(u, l)
    }

    function c(e, t) {
        e.forEach(e => {
            const t = r.video.files.getFileById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        }), t.forEach(e => {
            const t = r.video.textTracks.getTrackById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        })
    }
    return function() {
            var t;
            r = new Qs(n, [hs, ks, Ns, Hi], {
                externalDisplays: [di],
                mediaSourceScanner: {
                    droppedFrameSwitchPercent: ma(e)
                },
                tests: e.request.ab_tests,
                fileCodecs: e.request.file_codecs,
                bufferTarget: e.video.buffer_target,
                presentationDelay: e.video.presentation_delay,
                lowLatencyMode: null == (t = e.video.live_event) ? void 0 : t.low_latency,
                sessionMetadata: {
                    clipId: e.video.id,
                    sessionId: e.request.session
                }
            })
        }(), Object.values(ri).filter(e => ![ri.TIME_UPDATE, ri.PROGRESS, ri.SUSPEND, ri.ERROR].includes(e)).forEach(e => {
            r.on(e, (t = "") => {
                Ea.captureBreadcrumb(e, t, "video event")
            })
        }), r.on(oi.STREAMS_LOADED, (function(t) {
            t.video.forEach(t => {
                const n = function(e, t) {
                    return t.find(t => ia(t.id) === String(e) || ia(t.id) === ia(e))
                }(t.id, _a(e, r));
                n ? (t.profile = n.profile, t.quality = n.quality, t.fps = n.fps) : (t.profile = null, t.quality = `${t.height}p`, t.fps = t.framerate)
            })
        })), r.on(oi.STREAM_CHANGE, (function({
            index: e,
            streams: n,
            metadata: r
        }) {
            const i = n[e];
            Ea.captureBreadcrumb("Stream changed", i, "video"), t.fire(oi.STREAM_CHANGE, i, e, n, r)
        })), r.on(oi.STREAM_TARGET_CHANGE, (function({
            index: e,
            streams: n
        }) {
            const r = n[e];
            t.fire(oi.STREAM_TARGET_CHANGE, r, e, n)
        })), r.on(oi.DRM_KEY_SWITCH, (function() {
            if (!e.request.drm.fallback_asset) return;
            const t = va(e);
            c(function(e) {
                const t = e.request.files;
                let n = [];
                const r = e.request.drm && ke.browser.safari;
                return (t.hls && (ke.iPhone || ke.iPad) || r) && (n = n.concat(ta(e, !0))), t.dash && !r && (n = n.concat(na(e, !0))), n
            }(e), t)
        })),
        function(e, t, n) {
            [ii.ACTIVATED, ii.AVAILABLE, ii.DEACTIVATED, ii.UNAVAILABLE, ai.STREAM_OFFLINE, ai.STREAM_ONLINE, ai.BUFFER_GAP_JUMP, ai.BUFFER_GAP_JUMP_PREVENT, ai.STALL_JUMP, ci.MEDIASESSION_PAUSE, ci.MEDIASESSION_PLAY, ci.MEDIASESSION_SEEK_BACKWARD, ci.MEDIASESSION_SEEK_FORWARD, oi.AV_DURATION_MISMATCH, oi.BANDWIDTH, oi.BUFFER_ENDED, oi.BUFFER_OCCUPANCY, oi.BUFFER_STARTED, oi.CHAPTER_CUES_UPDATED, oi.CUE_POINT, oi.CURRENT_FILE_CHANGE, oi.DOWNLOAD_END, oi.DOWNLOAD_TIMEOUT, oi.DRM_AUTH_SUCCESS, oi.DRM_KEY_SWITCH, oi.DROPPED_FRAMES, oi.MANIFEST_LOADED, oi.MANIFEST_TIMEOUT, oi.QUOTA_EXCEEDED_ERROR, oi.SCANNER_CHANGE, oi.STREAM_CHANGE_START, oi.STREAM_BUFFER_END, oi.STREAM_BUFFER_START, oi.TEXT_TRACKS_AVAILABLE, oi.DROPPED_FRAME_PERCENT_EXCEEDED, ui.CAMERA_UPDATE, ui.CAMERA_CHANGE, ui.MOTION_END, ui.MOTION_START, ui.SPATIAL_UNSUPPORTED, ui.WEBVR_ENTER, ui.WEBVR_EXIT, ui.WEBVR_HARDWARE_AVAILABLE, li.BRAIN_ML_SWITCH_TO_SKYFIRE, li.BRAIN_ML_MODEL_INPUTS, ri.DURATION_CHANGE, ri.ERROR, ri.LOAD_START, ri.LOADED_DATA, ri.LOADED_METADATA, ri.PLAYING, ri.RATE_CHANGE, ri.RESIZE, ri.STALLED, ri.VOLUME_CHANGE, ri.WAITING, ri.ENTER_PICTURE_IN_PICTURE, ri.LEAVE_PICTURE_IN_PICTURE, ri.WEBKIT_BEGIN_FULLSCREEN, ri.WEBKIT_END_FULLSCREEN].forEach(n => {
                e(n, (...e) => {
                    t.apply(void 0, [n].concat(e))
                })
            })
        }(r.on, t.fire), t.fire(wo), new qa(t, r, n, e), new Ta(e, t, r), new ba(e, t, r), new Ba(e, t, r), s = new xa(e, t, r), i = new Sa(e, t, r), o = new ja(e, t, r), t.on(Io, u), ke.browser.safari && window.addEventListener("pageshow", e => {
            e.persisted && (a = !0, u())
        }), T({
            telecine: r
        }, i)
}
Ra.prototype = new Error;
var Wa = {
    embed: {},
    request: {
        cookie: {},
        files: {},
        flags: {},
        urls: {},
        text_tracks: [],
        file_codecs: {}
    },
    video: {
        owner: {},
        thumbs: {},
        version: {}
    },
    user: {}
};

function Ka(e, t) {
    let n;
    const r = rn();
    let i, s, o = null,
        a = new zo(t, Wa);

    function u(e, t) {
        return r.fire(Io, e, t), e
    }
    const c = {
        play: () => i.play(),
        pause: () => i.pause(),
        get currentTime() {
            return s.currentTime > .1 ? vo(s.currentTime) : 0
        },
        set currentTime(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0) throw new Ra("Seconds must be a positive number less than the duration of the video.", "RangeError", "setCurrentTime");
            r.fire(Eo, null, e)
        },
        get duration() {
            return vo(a.video.duration)
        },
        get enabledTextTrack() {
            return o
        },
        loadVideo(e) {
            const t = Cr(a);
            return a.reset(e), a = u(a, t), this
        },
        reactivate() {
            var e;
            return (null == (e = s) ? void 0 : e.reactivate) && s.reactivate(), this
        },
        unload() {
            return r.fire(So), this
        },
        destroy() {
            return r.fire(To), this
        },
        on(e, t) {
            return r.on(e, t), this
        },
        once(e, t) {
            return r.once(e, t), this
        },
        off(e, t) {
            return r.off(e, t), this
        },
        hasTextTrack(e) {
            let t, n, r = this.textTracks;
            if (mo(e)) n = r.getTrackById(e);
            else {
                let n = e.split(".")[0];
                t = r.some(e => e.language.toLowerCase() === n.toLowerCase())
            }
            return !(!n && !t)
        },
        enableTextTrack(e, t = null) {
            let n, i, a = this.textTracks;
            if (mo(e)) o = a.getTrackById(e);
            else {
                if ([n, i = t] = e.split("."), !this.hasTextTrack(e)) throw new Ra(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
                o = Va(i ? `${n}.${i}` : n, a).track
            }
            if (!o || i && o.kind !== i) throw new Ra(`There are no ${i} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            s._setCaptionsState(!0), r.fire(bo, o.id)
        },
        disableTextTrack() {
            o = null, s._setCaptionsState(!1), r.fire(Ao)
        },
        get qualities() {
            return function(e) {
                var t;
                const n = e.representations.map(t => {
                        const n = Jo(t);
                        return {
                            id: n,
                            label: pa(t),
                            active: e.quality === n
                        }
                    }),
                    r = null == (t = e.video) ? void 0 : t.currentFile.mime;
                return [Uo.dash, Uo.dashMpd, Uo.hlsLive, Uo.hls].includes(r) && n.unshift({
                    id: "auto",
                    label: "Auto",
                    active: !e.quality || "auto" === e.quality
                }), n
            }(this)
        },
        get quality() {
            return i.quality
        },
        set quality(e) {
            i.quality = e
        },
        get playbackRate() {
            return s ? s.playbackRate : 1
        },
        set playbackRate(e) {
            s.playbackRate = e, s.defaultPlaybackRate = e
        },
        get textTracks() {
            return s.video ? s.video.textTracks : []
        },
        get representations() {
            return _a(a, s)
        },
        get volume() {
            return s ? s.volume : vo(a.request.cookie.volume)
        },
        set volume(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0 || e > 1) throw new Ra("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            s.volume = e
        },
        get videoId() {
            return a.video.id
        },
        get videoWidth() {
            return s.videoWidth || a.video.width
        },
        get videoHeight() {
            return s.videoHeight || a.video.height
        },
        get readyState() {
            return s.videoElement.readyState
        },
        get telecine() {
            return s
        },
        get pictureInPictureEnabled() {
            const e = ke.spatialPlayback && a.video.spatial,
                t = ke.browser.safari && this.readyState < 1;
            return t && s.once(ri.LOADED_METADATA, () => r.fire(No)), !t && !e && s.pictureInPictureEnabled
        }
    };
    return a = u(a), i = new Ga(a, r, e), s = i.telecine, n = Object.create(s), T(n, c)
}

function Ya(e) {
    return "string" == typeof e || !xe(e) && Ye(e) && "[object String]" == Ke(e)
}

function $a() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function za(e) {
    return $a() - e
}

function Qa() {
    let e = 0,
        t = null,
        n = 0,
        r = !1;

    function i() {
        return e / 1e3
    }
    return {
        trackBufferStart: function(e, i) {
            t = $a(), n++, r = !0, e(i)
        },
        trackBufferEnd: function(n, i = {}) {
            if (!r) return;
            const s = za(t);
            e += s, i.buffer_duration = s / 1e3, r = !1, n(i)
        },
        trackVideoExit: function(n) {
            r && !n && (e += za(t))
        },
        resetLastBufferTime: function() {
            t = null
        },
        getBufferRatio: function(e) {
            const t = i() / e * 100;
            return isNaN(t) ? 0 : Math.round(100 * t) / 100
        },
        getBufferCount: function() {
            return n
        },
        getTotalBufferDuration: i,
        isVideoBuffering: function() {
            return r
        }
    }
}
const Ja = {
    VIDEO_BUFFER_END: "video-buffer-end",
    VIDEO_BUFFER_START: "video-buffer-start",
    VIDEO_ENDED: "video-ended",
    VIDEO_EXIT: "video-exit",
    VIDEO_LOAD_FAILURE: "video-load-failure",
    VIDEO_MINUTE_WATCHED: "video-minute-watched",
    VIDEO_PAUSED: "video-paused",
    VIDEO_PLAYED: "video-played",
    VIDEO_PLAYBACK_ERROR: "video-playback-error",
    VIDEO_READY: "video-ready",
    VIDEO_START_ATTEMPT: "video-start-attempt",
    VIDEO_START_FAILURE: "video-start-failure",
    VIDEO_START_TIME: "video-start-time",
    VIDEO_SEEK: "video-seek",
    VIDEO_SEEKED: "video-seeked",
    CHUNK_DOWNLOADED: "chunk_downloaded"
};

function Za(e) {
    function t(e, t, n = !0, r = "POST") {
        return new Promise((i, s) => {
            "POST" === r && navigator.sendBeacon ? i({
                status: navigator.sendBeacon(e, t)
            }) : oe({
                url: e,
                body: t,
                method: r,
                async: n,
                headers: {
                    "Content-Type": "text/plain; charset=UTF-8"
                }
            }).then(e => {
                i({
                    response: e,
                    status: e.status
                })
            }).catch(s)
        })
    }
    return {
        log: function(n, r = !0, i = !0) {
            i && (n.event_time = n.event_time || $a());
            const s = [n];
            return t(e, JSON.stringify(s), r)
        },
        logRequestPromiseWithUrl: t
    }
}

function eu(e) {
    let t = 0,
        n = 0,
        r = 0,
        i = 0,
        s = !1,
        o = -1,
        a = null,
        u = null,
        c = null,
        l = {
            satisfied: 0,
            tolerable: 0,
            frustrated: 0
        },
        h = null;

    function d() {
        const t = e.getBoundingClientRect(),
            n = e.videoWidth,
            r = e.videoHeight;
        if (0 === n && 0 === r) return;
        let i = "satisfied";
        if (t.width > n && t.height > r && (n / t.width < .4 ? i = "satisfied" : n / t.width < 1 ? i = "tolerable" : n / t.width > 1 && (i = "frustrated")), u) {
            const e = za(u);
            l[c] += e
        }
        c = i, u = $a()
    }

    function f() {
        return s ? 0 : 1
    }

    function _() {
        return -1 === o ? null : o > 8e3 || -1 === o ? 0 : o > 2e3 ? .5 : 1
    }

    function p() {
        return h ? (i = r / za(h), t >= 4 || i >= .12 ? 0 : t < 4 && 0 !== t ? i < .12 ? .5 : 0 : 1) : null
    }

    function m() {
        if (-1 === o) return null;
        switch (d(), Object.keys(l).reduce((e, t) => l[e] > l[t] ? e : t)) {
            case "satisfied":
                return 1;
            case "tolerable":
                return .5;
            case "frustrated":
                return 0
        }
        return null
    }
    return e.addEventListener("playing", () => {
        -1 === o && (a = $a())
    }), e.addEventListener("progress", () => {
        -1 === o && (h = $a(), o = za(a)), d()
    }), {
        startupTimeScore: _,
        rebufferScore: p,
        failureScore: f,
        videoQualityScore: m,
        overallScore: function() {
            return Math.min(f(), _(), p(), m())
        },
        trackBufferStart: function() {
            -1 !== o && (t++, n = $a())
        },
        trackBufferEnd: function() {
            -1 !== o && (r += za(n))
        },
        onError: function(e) {
            e.final && (s = !0)
        }
    }
}

function tu(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function nu(e, t) {
    let n, r, i, s, o, a, u, c, l, h, d, f, _ = 0;

    function p() {
        n = 0, r = 0, i = 0, s = null, o = 0, a = !1, u = !1, c = null, l = !1, h = new eu(e), d = new Qa, f = {
            bufferTracker: d,
            videoBufferCheck: () => {
                setInterval(() => {
                    let t = e.currentTime;
                    u && !l && !e.paused && !f.bufferTracker.isVideoBuffering() && t < i + .125 && f.bufferTracker.trackBufferStart(v), u && !e.paused && f.bufferTracker.isVideoBuffering() && t > i + .125 && (f.bufferTracker.trackBufferEnd(g), f.bufferTracker.resetLastBufferTime()), i = t
                }, 250)
            },
            addEventData: e => null,
            playbackSessionTimer: () => {
                let t = $a();
                setInterval(() => {
                    (!e.paused && a || l || f.bufferTracker.isVideoBuffering()) && (o += za(t) / 1e3), t = $a()
                }, 500)
            }
        }
    }

    function m(e, n = {}) {
        0 === _ && (n = Object.assign(n, f.addEventData(e)), t(e, n))
    }

    function v(e = {}) {
        h.trackBufferStart(), m(Ja.VIDEO_BUFFER_START, e)
    }

    function g(e = {}) {
        h.trackBufferEnd(), m(Ja.VIDEO_BUFFER_END, e)
    }
    return p(), m(Ja.VIDEO_READY),
        function() {
            let t = Math.floor(60 * Math.random());
            setInterval(() => {
                !e.paused && a && (n++, 0 !== r ? n >= 60 && (n = 0, r++, m(Ja.VIDEO_MINUTE_WATCHED)) : n === t && (n = 0, r++, m(Ja.VIDEO_MINUTE_WATCHED)))
            }, 1e3)
        }(), window.addEventListener("unload", t => {
            f.bufferTracker.trackVideoExit(e.paused);
            const n = {
                startup: h.startupTimeScore(),
                rebuffer: h.rebufferScore(),
                failure: h.failureScore(),
                quality: h.videoQualityScore(),
                overall: h.overallScore()
            };
            c && m(Ja.VIDEO_EXIT, {
                vxs: n
            })
        }, !1), e.addEventListener("playing", () => {
            a = !0, l || u && m(Ja.VIDEO_PLAYED)
        }), e.addEventListener("timeupdate", () => {
            if (u) return;
            let e = {
                startup_duration: c ? tu(za(c) / 1e3, 2) : null
            };
            m(Ja.VIDEO_START_TIME, e), u = !0
        }), e.addEventListener("pause", () => {
            a = !1, m(Ja.VIDEO_PAUSED)
        }), e.addEventListener("seeking", () => {
            l || (s = $a(), l = !0, a = !1, m(Ja.VIDEO_SEEK))
        }), e.addEventListener("seeked", () => {
            l = !1, e.paused || (a = !0), m(Ja.VIDEO_SEEKED, {
                seek_duration: za(s) / 1e3
            }), s = null
        }), e.addEventListener("ended", () => {
            m(Ja.VIDEO_ENDED)
        }), e.addEventListener("waiting", () => {
            a = !1
        }), e.addEventListener("canplay", () => {
            l || f.bufferTracker.isVideoBuffering() && !a && (f.bufferTracker.trackBufferEnd(g), f.bufferTracker.resetLastBufferTime())
        }), {
            globalProperties: function() {
                return {
                    autoplay: e.autoplay,
                    buffer_count: f.bufferTracker.getBufferCount(),
                    total_buffer_duration: f.bufferTracker.getTotalBufferDuration(),
                    buffer_ratio: f.bufferTracker.getBufferRatio(o),
                    client_time: $a(),
                    is_buffering: f.bufferTracker.isVideoBuffering(),
                    looping: e.loop,
                    network_state: e.networkState,
                    playback_rate: e.playbackRate,
                    player_width: e.getBoundingClientRect().width,
                    player_height: e.getBoundingClientRect().height,
                    session_playback_duration: tu(o, 2),
                    video_time: e.currentTime,
                    video_height: e.videoHeight,
                    video_width: e.videoWidth,
                    volume: tu(e.volume, 2)
                }
            },
            logStartRequest: function() {
                c = $a(), m(Ja.VIDEO_START_ATTEMPT)
            },
            customizeHooks: function(e) {
                f = Object.assign(f, e)
            },
            initHooks: function() {
                f.videoBufferCheck(), f.playbackSessionTimer()
            },
            logBufferStart: v,
            logBufferEnd: g,
            setDisplayContext: function(e) {
                _ = e
            },
            handleExternalError: function(e, t) {
                a = !1, h.onError(t), m(u ? Ja.VIDEO_PLAYBACK_ERROR : u ? Ja.VIDEO_START_FAILURE : Ja.VIDEO_LOAD_FAILURE, e)
            },
            reset: p
        }
}
var ru = function() {
        return je.Date.now()
    },
    iu = Math.max,
    su = Math.min;

function ou(e, t, n) {
    var r, i, s, o, a, u, c = 0,
        l = !1,
        h = !1,
        d = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");

    function f(t) {
        var n = r,
            s = i;
        return r = i = void 0, c = t, o = e.apply(s, n)
    }

    function _(e) {
        return c = e, a = setTimeout(m, t), l ? f(e) : o
    }

    function p(e) {
        var n = e - u;
        return void 0 === u || n >= t || n < 0 || h && e - c >= s
    }

    function m() {
        var e = ru();
        if (p(e)) return v(e);
        a = setTimeout(m, function(e) {
            var n = t - (e - u);
            return h ? su(n, s - (e - c)) : n
        }(e))
    }

    function v(e) {
        return a = void 0, d && r ? f(e) : (r = i = void 0, o)
    }

    function g() {
        var e = ru(),
            n = p(e);
        if (r = arguments, i = this, u = e, n) {
            if (void 0 === a) return _(u);
            if (h) return clearTimeout(a), a = setTimeout(m, t), f(u)
        }
        return void 0 === a && (a = setTimeout(m, t)), o
    }
    return t = lo(t) || 0, Ze(n) && (l = !!n.leading, s = (h = "maxWait" in n) ? iu(lo(n.maxWait) || 0, t) : s, d = "trailing" in n ? !!n.trailing : d), g.cancel = function() {
        void 0 !== a && clearTimeout(a), c = 0, r = u = i = a = void 0
    }, g.flush = function() {
        return void 0 === a ? o : v(ru())
    }, g
}
const au = {
    SETUP_DONE: "SETUP_DONE",
    NOT_SETUP: "NOT_SETUP"
};
let uu = function() {
    function e() {
        this.version = "1.2.36", this.remotePlayer = null, this.remotePlayerController = null, this.CastContextEventType = null, this.RemotePlayerEventType = null, this.CastState = au, this.SessionState = null, this.PlayerState = null, this.currentLoadRequestId = null, this.currentLoadRequestPromise = null
    }
    var t = e.prototype;
    return t.init = function({
        receiverApplicationId: e = "",
        resumeSavedSession: t = !0,
        language: n = null,
        autoJoinPolicy: r = "TAB_AND_ORIGIN_SCOPED"
    } = {}) {
        if (!this.isGCastApiAvailable) throw new Error("CAF is not available. Call setup() first.");
        if ("string" != typeof e || "" === e.trim()) throw new Error("Parameter 'receiverApplicationId' must be valid.");
        switch (r) {
            case chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.PAGE_SCOPED:
                break;
            default:
                r = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
        }
        return this.CastContextEventType = cast.framework.CastContextEventType, this.RemotePlayerEventType = cast.framework.RemotePlayerEventType, this.CastState = Object.assign(this.CastState, cast.framework.CastState), this.SessionState = cast.framework.SessionState, this.PlayerState = chrome.cast.media.PlayerState, cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: e.trim(),
            resumeSavedSession: t,
            language: n,
            autoJoinPolicy: r
        }), this.isInitialized ? this.remotePlayerController : this.initRemotePlayer()
    }, t.initRemotePlayer = function() {
        if (!this.isGCastApiAvailable) throw new ReferenceError("CAF is not available. Call setup() first.");
        return this.remotePlayer = new cast.framework.RemotePlayer, this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer), this.remotePlayerController
    }, t.setup = function({
        loadLibrary: e = !0
    } = {}) {
        return new Promise((t, n) => {
            if (this.isGCastApiAvailable) return this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, void t(!0);
            window.__onGCastApiAvailable = (e, r) => {
                if (r) {
                    const e = new Error(r);
                    n(e)
                } else this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, t(e)
            };
            try {
                if (!1 === e) throw new ReferenceError("Cast is not available. Make sure the library has been loaded.");
                this.loadLibrary() || t(!1)
            } catch (r) {
                const e = new Error(r);
                n(e)
            }
        })
    }, t.loadLibrary = function() {
        if (this.isGCastApiAvailable) return !0;
        if (null !== window.chrome && void 0 !== window.chrome && "Google Inc." === window.navigator.vendor) {
            let e = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js";
            if (!(document.querySelectorAll('script[src^="' + e + '"]').length > 0)) {
                e += "?loadCastFramework=1";
                const t = document.createElement("script");
                return t.src = e, t.async = !0, t.defer = !0, document.head.appendChild(t), !0
            }
        }
        return !1
    }, t.loadMedia = function({
        contentId: e,
        contentType: t,
        currentTime: n = 0,
        duration: r = 0,
        requestCustomData: i = null,
        mediaCustomData: s = null,
        autoRequest: o = !1,
        tracks: a = [],
        ottCastOptions: u
    }) {
        return e ? this.isSessionEstablished ? this.loadMediaOnSession(this.currentSession, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: s,
            tracks: a,
            ottCastOptions: u
        }) : !0 !== o ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(o => this.loadMediaOnSession(o, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: s,
            tracks: a,
            ottCastOptions: u
        })) : Promise.reject(new TypeError("Option 'contentId' must be valid."))
    }, t.loadMediaOnSession = function(e, {
        contentId: t,
        contentType: n,
        currentTime: r = 0,
        duration: i,
        requestCustomData: s = null,
        mediaCustomData: o = null,
        tracks: a = [],
        ottCastOptions: u
    }) {
        if (e && e instanceof cast.framework.CastSession) {
            const c = e.getSessionState();
            if (c !== this.SessionState.SESSION_STARTING && c !== this.SessionState.SESSION_STARTED && c !== this.SessionState.SESSION_RESUMED) return Promise.reject(new ReferenceError("Session must be established."));
            const l = this.createLoadRequest(t, n, r, i, s, o, a, u);
            return null !== this.currentLoadRequestId && this.currentLoadRequestId === l.requestId || (this.currentLoadRequestId = l.requestId, this.currentLoadingMediaPromise = e.loadMedia(l).finally(() => {
                this.currentLoadRequestId = null, this.currentLoadingMediaPromise = null
            })), this.currentLoadingMediaPromise
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.requestSession = function() {
        return this.isSessionEstablished ? Promise.resolve(this.currentSession) : this.castContext ? this.castContext.requestSession().then(() => this.currentSession) : Promise.reject(new Error("CastContext is not available. Call setup() first."))
    }, t.sendMessage = function({
        namespace: e,
        data: t = {},
        autoRequest: n = !1
    }) {
        return this.isSessionEstablished ? this.sendMessageOnSession(this.currentSession, {
            namespace: e,
            data: t
        }) : !0 !== n ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(n => this.sendMessageOnSession(n, {
            namespace: e,
            data: t
        }))
    }, t.sendMessageOnSession = function(e, {
        namespace: t,
        data: n = {}
    }) {
        if (e || !(e instanceof cast.framework.CastSession)) {
            const r = e.getSessionState();
            return r !== this.SessionState.SESSION_STARTING && r !== this.SessionState.SESSION_STARTED && r !== this.SessionState.SESSION_RESUMED ? Promise.reject(new ReferenceError("Session must be established.")) : e.sendMessage(t, n)
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.createCastButton = function(e) {
        const t = document.createElement("button", "google-cast-button");
        return e && e.style && (null === e.style["--disconnected-color"] && (e.style["--disconnected-color"] = "#00ADEF"), null === e.style["--connected-color"] && (e.style["--connected-color"] = "#E5E500")), e && Object.keys(e).forEach(n => {
            if ("string" == typeof e[n]) t.setAttribute(n, e[n]);
            else if ("style" === n && "object" == typeof e[n]) {
                let r = "";
                Object.keys(e[n]).forEach(t => {
                    r += t + ":" + e[n][t] + ";"
                }), t.setAttribute(n, r)
            }
        }), t
    }, t.createLoadRequest = function(e, t, n, r, i, s, o, a) {
        const u = a ? new chrome.cast.media.MediaInfo(a.contentId) : new chrome.cast.media.MediaInfo(e.toString(), t);
        u.customData = s, u.duration = r;
        const c = {
            subtitles: chrome.cast.media.TextTrackType.SUBTITLES,
            captions: chrome.cast.media.TextTrackType.CAPTIONS
        };
        u.tracks = o.map(e => {
            const t = new chrome.cast.media.Track(e.id, chrome.cast.media.TrackType.TEXT);
            return t.trackContentId = e.url, t.trackContentType = "text/vtt", t.subtype = c[e.kind], t.name = e.label, t.language = e.lang, t
        });
        const l = new chrome.cast.media.LoadRequest(u);
        return l.customData = a ? a.customData : i, l.currentTime = n || 0, a && (l.credentials = a.credentials, l.credentialsType = a.credentialsType), l
    }, r(e, [{
        key: "isGCastApiAvailable",
        get: function() {
            return !!("undefined" != typeof cast && cast && cast.framework && cast.framework.VERSION)
        }
    }, {
        key: "castState",
        get: function() {
            return this.castContext ? this.castContext.getCastState() : this.isGCastApiAvailable ? this.CastState.SETUP_DONE : this.CastState.NOT_SETUP
        }
    }, {
        key: "versionGCastApi",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.VERSION : null
        }
    }, {
        key: "castContext",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.CastContext.getInstance() : null
        }
    }, {
        key: "currentSession",
        get: function() {
            return this.castContext ? this.castContext.getCurrentSession() : null
        }
    }, {
        key: "currentSessionObj",
        get: function() {
            const e = this.currentSession;
            return e ? e.getSessionObj() : null
        }
    }, {
        key: "isInitialized",
        get: function() {
            return !(!this.isGCastApiAvailable || !this.remotePlayerController)
        }
    }, {
        key: "isSessionEstablished",
        get: function() {
            const e = this.currentSessionObj;
            return !!e && e.status === chrome.cast.SessionStatus.CONNECTED
        }
    }, {
        key: "isCastConnected",
        get: function() {
            return this.castState === this.CastState.CONNECTED
        }
    }]), e
}();
var cu, lu = 0,
    hu = 0,
    du = {},
    fu = {};

function _u(e, t, n) {
    return "_root" == t ? n : e !== n ? function(e) {
        return cu || (cu = e.matches ? e.matches : e.webkitMatchesSelector ? e.webkitMatchesSelector : e.mozMatchesSelector ? e.mozMatchesSelector : e.msMatchesSelector ? e.msMatchesSelector : e.oMatchesSelector ? e.oMatchesSelector : gu.matchesSelector)
    }(e).call(e, t) ? e : e.parentNode ? (lu++, _u(e.parentNode, t, n)) : void 0 : void 0
}

function pu(e, t, n, r) {
    du[e.id] || (du[e.id] = {}), du[e.id][t] || (du[e.id][t] = {}), du[e.id][t][n] || (du[e.id][t][n] = []), du[e.id][t][n].push(r)
}

function mu(e, t, n, r) {
    if (du[e.id])
        if (t)
            if (r || n)
                if (r) {
                    if (du[e.id][t][n])
                        for (var i = 0; i < du[e.id][t][n].length; i++)
                            if (du[e.id][t][n][i] === r) {
                                du[e.id][t][n].splice(i, 1);
                                break
                            }
                } else delete du[e.id][t][n];
    else du[e.id][t] = {};
    else
        for (var s in du[e.id]) du[e.id].hasOwnProperty(s) && (du[e.id][s] = {})
}

function vu(e, t, n, r) {
    if (this.element) {
        e instanceof Array || (e = [e]), n || "function" != typeof t || (n = t, t = "_root");
        var i, s = this.id;
        for (i = 0; i < e.length; i++) r ? mu(this, e[i], t, n) : (du[s] && du[s][e[i]] || gu.addEvent(this, e[i], o(e[i])), pu(this, e[i], t, n));
        return this
    }

    function o(e) {
        return function(t) {
            ! function(e, t, n) {
                if (du[e][n]) {
                    var r, i, s = t.target || t.srcElement,
                        o = {},
                        a = 0,
                        u = 0;
                    for (r in lu = 0, du[e][n]) du[e][n].hasOwnProperty(r) && (i = _u(s, r, fu[e].element)) && gu.matchesEvent(n, fu[e].element, i, "_root" == r, t) && (lu++, du[e][n][r].match = i, o[lu] = du[e][n][r]);
                    for (t.stopPropagation = function() {
                            t.cancelBubble = !0
                        }, a = 0; a <= lu; a++)
                        if (o[a])
                            for (u = 0; u < o[a].length; u++) {
                                if (!1 === o[a][u].call(o[a].match, t)) return void gu.cancel(t);
                                if (t.cancelBubble) return
                            }
                }
            }(s, t, e)
        }
    }
}

function gu(e, t) {
    if (!(this instanceof gu)) {
        for (var n in fu)
            if (fu[n].element === e) return fu[n];
        return hu++, fu[hu] = new gu(e, hu), fu[hu]
    }
    this.element = e, this.id = t
}
gu.prototype.on = function(e, t, n) {
    return vu.call(this, e, t, n)
}, gu.prototype.off = function(e, t, n) {
    return vu.call(this, e, t, n, !0)
}, gu.matchesSelector = function() {}, gu.cancel = function(e) {
    e.preventDefault(), e.stopPropagation()
}, gu.addEvent = function(e, t, n) {
    var r = "blur" == t || "focus" == t,
        i = ke.passiveEvents ? {
            capture: r,
            passive: !1
        } : r;
    e.element.addEventListener(t, n, i)
}, gu.matchesEvent = function() {
    return !0
};
const yu = gu.addEvent,
    Eu = void 0 === window.PointerEvent && void 0 !== window.MSPointerEvent,
    Su = {
        pointerdown: "MSPointerDown",
        pointerup: "MSPointerUp",
        pointercancel: "MSPointerCancel",
        pointermove: "MSPointerMove",
        pointerenter: "MSPointerEnter",
        pointerleave: "MSPointerLeave",
        pointerover: "MSPointerOver",
        pointerout: "MSPointerOut"
    },
    Tu = "onmspointerenter" in document,
    bu = "onmspointerleave" in document;

function Au(e, t) {
    return null == e || e != e ? t : e
}
gu.addEvent = function(e, t, n) {
    Eu && Su[t] && (t = Su[t]), "transitionend" === t && (yu(e, "webkitTransitionEnd", n), yu(e, "otransitionend", n)), "mouseenter" === t && (t = "mouseover"), "mouseleave" === t && (t = "mouseout"), "MSPointerEnter" !== t || Tu || (t = "MSPointerOver"), "MSPointerLeave" !== t || bu || (t = "MSPointerOut"), yu(e, t, n)
}, gu.matchesEvent = function(e, t, n, r, i) {
    return !("mouseenter" === e || "mouseleave" === e || !Tu && "MSPointerEnter" === e || !bu && "MSPointerLeave" === e) || function(e, t, n, r) {
        return !r.relatedTarget || (!n || e === t) && t !== r.relatedTarget && !t.contains(r.relatedTarget)
    }(t, n, r, i)
};
var Iu = nn((function(e, t) {
        function n(e, t) {
            return e === t
        }

        function r(e, t, n) {
            if (null === t || null === n || t.length !== n.length) return !1;
            for (var r = t.length, i = 0; i < r; i++)
                if (!e(t[i], n[i])) return !1;
            return !0
        }

        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                i = null,
                s = null;
            return function() {
                return r(t, i, arguments) || (s = e.apply(null, arguments)), i = arguments, s
            }
        }

        function s(e) {
            var t = Array.isArray(e[0]) ? e[0] : e;
            if (!t.every((function(e) {
                    return "function" == typeof e
                }))) {
                var n = t.map((function(e) {
                    return typeof e
                })).join(", ");
                throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
            }
            return t
        }

        function o(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return function() {
                for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                var a = 0,
                    u = r.pop(),
                    c = s(r),
                    l = e.apply(void 0, [function() {
                        return a++, u.apply(null, arguments)
                    }].concat(n)),
                    h = i((function() {
                        for (var e = [], t = c.length, n = 0; n < t; n++) e.push(c[n].apply(null, arguments));
                        return l.apply(null, e)
                    }));
                return h.resultFunc = u, h.recomputations = function() {
                    return a
                }, h.resetRecomputations = function() {
                    return a = 0
                }, h
            }
        }
        t.__esModule = !0, t.defaultMemoize = i, t.createSelectorCreator = o, t.createStructuredSelector = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
            if ("object" != typeof e) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
            var n = Object.keys(e);
            return t(n.map((function(t) {
                return e[t]
            })), (function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.reduce((function(e, t, r) {
                    return e[n[r]] = t, e
                }), {})
            }))
        };
        var a = t.createSelector = o(i)
    })),
    wu = function() {
        if ("undefined" != typeof Map) return Map;

        function e(e, t) {
            var n = -1;
            return e.some((function(e, r) {
                return e[0] === t && (n = r, !0)
            })), n
        }
        return (function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(t) {
                var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                return r && r[1]
            }, t.prototype.set = function(t, n) {
                var r = e(this.__entries__, t);
                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
            }, t.prototype.delete = function(t) {
                var n = this.__entries__,
                    r = e(n, t);
                ~r && n.splice(r, 1)
            }, t.prototype.has = function(t) {
                return !!~e(this.__entries__, t)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var i = r[n];
                    e.call(t, i[1], i[0])
                }
            }, t
        }())
    }(),
    Ru = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
    Pu = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
    Du = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Pu) : function(e) {
        return setTimeout((function() {
            return e(Date.now())
        }), 1e3 / 60)
    },
    ku = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    Ou = "undefined" != typeof MutationObserver,
    Cu = function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                var n = !1,
                    r = !1,
                    i = 0;

                function s() {
                    n && (n = !1, e()), r && a()
                }

                function o() {
                    Du(s)
                }

                function a() {
                    var e = Date.now();
                    if (n) {
                        if (e - i < 2) return;
                        r = !0
                    } else n = !0, r = !1, setTimeout(o, 20);
                    i = e
                }
                return a
            }(this.refresh.bind(this))
        }
        return e.prototype.addObserver = function(e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(e) {
            var t = this.observers_,
                n = t.indexOf(e);
            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var e = this.observers_.filter((function(e) {
                return e.gatherActive(), e.hasActive()
            }));
            return e.forEach((function(e) {
                return e.broadcastActive()
            })), e.length > 0
        }, e.prototype.connect_ = function() {
            Ru && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ou ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            Ru && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(e) {
            var t = e.propertyName,
                n = void 0 === t ? "" : t;
            ku.some((function(e) {
                return !!~n.indexOf(e)
            })) && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(),
    Lu = function(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    },
    Nu = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || Pu
    },
    Mu = Bu(0, 0, 0, 0);

function xu(e) {
    return parseFloat(e) || 0
}

function Fu(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce((function(t, n) {
        return t + xu(e["border-" + n + "-width"])
    }), 0)
}
var Uu = "undefined" != typeof SVGGraphicsElement ? function(e) {
    return e instanceof Nu(e).SVGGraphicsElement
} : function(e) {
    return e instanceof Nu(e).SVGElement && "function" == typeof e.getBBox
};

function ju(e) {
    return Ru ? Uu(e) ? function(e) {
        var t = e.getBBox();
        return Bu(0, 0, t.width, t.height)
    }(e) : function(e) {
        var t = e.clientWidth,
            n = e.clientHeight;
        if (!t && !n) return Mu;
        var r = Nu(e).getComputedStyle(e),
            i = function(e) {
                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                    var i = r[n],
                        s = e["padding-" + i];
                    t[i] = xu(s)
                }
                return t
            }(r),
            s = i.left + i.right,
            o = i.top + i.bottom,
            a = xu(r.width),
            u = xu(r.height);
        if ("border-box" === r.boxSizing && (Math.round(a + s) !== t && (a -= Fu(r, "left", "right") + s), Math.round(u + o) !== n && (u -= Fu(r, "top", "bottom") + o)), ! function(e) {
                return e === Nu(e).document.documentElement
            }(e)) {
            var c = Math.round(a + s) - t,
                l = Math.round(u + o) - n;
            1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(l) && (u -= l)
        }
        return Bu(i.left, i.top, a, u)
    }(e) : Mu
}

function Bu(e, t, n, r) {
    return {
        x: e,
        y: t,
        width: n,
        height: r
    }
}
var Vu = function() {
        function e(e) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Bu(0, 0, 0, 0), this.target = e
        }
        return e.prototype.isActive = function() {
            var e = ju(this.target);
            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var e = this.contentRect_;
            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
        }, e
    }(),
    Hu = function(e, t) {
        var n = function(e) {
            var t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                o = Object.create(s.prototype);
            return Lu(o, {
                x: t,
                y: n,
                width: r,
                height: i,
                top: n,
                right: t + r,
                bottom: i + n,
                left: t
            }), o
        }(t);
        Lu(this, {
            target: e,
            contentRect: n
        })
    },
    Xu = function() {
        function e(e, t, n) {
            if (this.activeObservations_ = [], this.observations_ = new wu, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
        }
        return e.prototype.observe = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof Nu(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) || (t.set(e, new Vu(e)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof Nu(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var e = this;
            this.clearActive(), this.observations_.forEach((function(t) {
                t.isActive() && e.activeObservations_.push(t)
            }))
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var e = this.callbackCtx_,
                    t = this.activeObservations_.map((function(e) {
                        return new Hu(e.target, e.broadcastRect())
                    }));
                this.callback_.call(e, t, e), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    }(),
    qu = "undefined" != typeof WeakMap ? new WeakMap : new wu,
    Gu = function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = Cu.getInstance(),
            r = new Xu(t, n, this);
        qu.set(this, r)
    };
["observe", "unobserve", "disconnect"].forEach((function(e) {
    Gu.prototype[e] = function() {
        var t;
        return (t = qu.get(this))[e].apply(t, arguments)
    }
}));
var Wu = void 0 !== Pu.ResizeObserver ? Pu.ResizeObserver : Gu;

function Ku(e, t, n) {
    var r = !0,
        i = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return Ze(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), ou(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}

function Yu(e, t, n) {
    this.constructorName = "MessageApiError", this.message = e, this.name = t, this.source = n
}

function $u(e) {
    return e
}

function zu(e) {
    if (!e || "" === e) return {};
    if ("object" == typeof e) return e;
    try {
        return JSON.parse(e)
    } catch (t) {
        return {}
    }
}

function Qu(e) {}
Yu.prototype = new Error;
let Ju = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    Zu = Ju;
var ec = {
    set: function(e) {
        Zu = Object.assign({}, Ju, e)
    },
    captureException: function(e, t) {
        return Zu.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return Zu.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return Zu.captureBreadcrumb(e, t, n, r)
    }
};

function tc(e) {
    const t = function(e) {
            let t = document.referrer || e;
            try {
                t = decodeURIComponent(t)
            } catch (fl) {
                t = unescape(t)
            }
            return t
        }(e),
        n = {},
        r = {},
        i = {
            parseMessage: zu,
            buildMessage: $u,
            logError: Qu
        };
    let s = {};
    const o = {
        get methods() {
            return n
        },
        extendMethods(...e) {
            T.apply(void 0, [n].concat(e))
        },
        get listeners() {
            return s
        },
        set listeners(e) {
            s = e
        },
        emit(e, ...t) {
            if (a.apply(void 0, [e].concat(t))) {
                const n = {
                    event: e
                };
                t && t[0] && (n.data = t[0]), u(n)
            }
        },
        filter(e, t) {
            t || "function" != typeof e || (t = e, e = null), e ? function(e, t) {
                r.event = r.event || {}, r.event[e] = r.event[e] || [], r.event[e].push(t)
            }(e, t) : function(e) {
                r.global = r.global || [], r.global.push(e)
            }(t)
        },
        hooks: (...e) => T.apply(void 0, [i].concat(e))
    };

    function a(...e) {
        if (r) {
            let t, n;
            if (r.global && r.global.length)
                for (t = 0; t < r.global.length; t++)
                    if (n = r.global[t], !n.apply(n, e)) return !1;
            let i = e[0];
            if (r.event && r.event[i] && r.event[i].length)
                for (t = 0; t < r.event[i].length; t++)
                    if (n = r.event[i][t], !n.apply(n, e)) return !1
        }
        return !0
    }

    function u(e) {
        if (window.postMessage && window.parent.postMessage && (e = i.buildMessage(e), window.parent != window)) try {
            const n = t && "null" !== t ? t : "*";
            window.parent.postMessage(e, n)
        } catch (n) {}
    }
    return window.addEventListener("message", (function(e) {
        if (e.source !== window.parent) return;
        let t = i.parseMessage(e.data),
            {
                method: r,
                value: s
            } = t;
        if (!(void 0 === r || "string" != typeof r || r.indexOf("_") > -1)) try {
            let o = function(e, t) {
                if (!e) return null;
                let n = Object.getOwnPropertyDescriptor(t, e);
                if (n && "function" == typeof n.value) return n.value;
                if (n && "function" == typeof n.get) return n.get;
                const r = e.substr(0, 3),
                    i = e.substr(3, 1).toLowerCase() + e.substr(4);
                return n = Object.getOwnPropertyDescriptor(t, i), "get" === r && n && "function" == typeof n.get ? n.get : "set" === r && n && "function" == typeof n.set ? n.set : null
            }(r, n);
            if (!o) throw new Yu(`“${e}” is not a valid method. Valid methods are: ${function(e){return Object.keys(e).reduce((t,n)=>{const r=Object.getOwnPropertyDescriptor(e,n);return"function"==typeof r.value?(t.push(n),t):("function"==typeof r.get&&t.push("get"+n.charAt(0).toUpperCase()+n.slice(1)),"function"==typeof r.set&&t.push("set"+n.charAt(0).toUpperCase()+n.slice(1)),t)},[]).sort()}(n).join(", ")}.`, "TypeError", r);
            ec.captureBreadcrumb("API message received", t, "api"), Promise.resolve(o.call(e, s)).then(e => u({
                method: r,
                value: null == e ? s : e
            })).catch(i.logError)
        } catch (o) {
            i.logError(o)
        }
    }), !1), o
}
var nc = self !== top,
    rc = function() {
        var e = document.createElement("video"),
            t = {
                request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
            },
            n = {};
        for (var r in t)
            for (var i = 0, s = t[r].length; i < s; i++)
                if (t[r][i] in e || t[r][i] in document || "on" + t[r][i].toLowerCase() in document) {
                    n[r] = t[r][i];
                    break
                }
        return n
    }(),
    ic = {
        ENTER: "enter",
        EXIT: "exit",
        CHANGE: "change",
        ERROR: "error"
    },
    sc = [],
    oc = {};

function ac() {
    var e = Array.prototype.slice.apply(arguments),
        t = e.shift();
    oc[t].forEach((function(t) {
        "function" == typeof t && t.apply(t, e)
    }))
}

function uc(e) {
    return function(t, n) {
        -1 !== sc.indexOf(t) && e.call(this, t, n)
    }
}

function cc(e) {
    var t = null;
    if ("VIDEO" === e.tagName) t = e;
    else {
        var n = e.getElementsByTagName("video");
        n[0] && (t = n[0])
    }
    return t
}
Object.keys(ic).forEach((function(e) {
    sc.push(ic[e]), oc[ic[e]] = []
}));
var lc = null,
    hc = function() {},
    dc = [];

function fc(e) {
    var t = cc(e);
    if (t && t.webkitEnterFullscreen) {
        try {
            t.readyState < t.HAVE_METADATA ? (t.addEventListener("loadedmetadata", (function n() {
                t.removeEventListener("loadedmetadata", n, !1);
                try {
                    t.webkitEnterFullscreen()
                } catch (r) {
                    return mc("cannot_enter_fullscreen", e)
                }
            }), !1), t.load()) : t.webkitEnterFullscreen(), lc = t
        } catch (n) {
            return mc("not_supported", e)
        }
        return !0
    }
    return mc(void 0 === rc.request ? "not_supported" : "not_enabled", e)
}
var _c = function(e) {
        var t = dc[dc.length - 1];
        t && (e !== t.element && e !== lc || !t.hasEntered) && ("VIDEO" === e.tagName && (lc = e), 1 === dc.length && vc.onenter(vc.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0, ac(ic.ENTER, vc.element))
    },
    pc = function() {
        lc = null;
        var e = dc.pop();
        e && (e.exit.call(e.element), ac(ic.EXIT, e.element), vc.element || (dc.forEach((function(e) {
            e.exit.call(e.element), ac(ic.EXIT, e.element)
        })), dc = [], vc.onexit()))
    },
    mc = function(e, t) {
        if (dc.length > 0) {
            var n = dc.pop();
            t = t || n.element, n.error.call(t, e), vc.onerror(t, e), ac(ic.ERROR, t, e)
        }
    },
    vc = {
        request: function(e, t, n, r) {
            if (e = e || document.body, dc.push({
                    element: e,
                    enter: t || hc,
                    exit: n || hc,
                    error: r || hc
                }), void 0 === rc.request) return fc(e);
            if (nc && !1 === document[rc.enabled]) return fc(e);
            try {
                e[rc.request]()
            } catch (i) {
                mc("not_enabled", e)
            }
        },
        exit: function() {
            !document[rc.exit] && vc.element ? vc.element[rc.exit]() : document[rc.exit]()
        },
        toggle: function(e, t, n, r) {
            vc.element ? vc.exit() : vc.request(e, t, n, r)
        },
        videoEnabled: function(e) {
            if (vc.enabled) return !0;
            var t = cc(e = e || document.body);
            return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
        },
        on: uc((function(e, t) {
            oc[e].push(t)
        })),
        off: uc((function(e, t) {
            var n = oc[e].indexOf(t);
            n > -1 && oc[e].splice(n, 1)
        })),
        onenter: hc,
        onexit: hc,
        onchange: hc,
        onerror: hc
    };
try {
    Object.defineProperties(vc, {
        element: {
            enumerable: !0,
            get: function() {
                return lc && lc.webkitDisplayingFullscreen ? lc : document[rc.element] || null
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return document[rc.enabled] || !1
            }
        }
    })
} catch (Pf) {
    vc.element = null, vc.enabled = !1
}

function gc(e) {
    return Math.round(parseInt(e, 16) / 255 * 100) / 100
}

function yc(...e) {
    if (1 === e.length && e[0] instanceof yc) {
        var t = e[0];
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    }
    if (1 === e.length) {
        if ("string" == typeof e[0] && e[0].indexOf("rgb") >= 0) return this.rgba = function(e) {
            var t = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)/.exec(e);
            if (!t) throw new Error("Invalid rgb value");
            return {
                red: parseInt(t[1], 10),
                green: parseInt(t[2], 10),
                blue: parseInt(t[3], 10),
                alpha: parseFloat(t[5]) || 1
            }
        }(e[0]), this;
        if (! function(e) {
                return "string" == typeof(e = e.replace("#", "")) && [3, 4, 6, 8].includes(e.length) && !isNaN(parseInt(e, 16))
            }(`${e[0]}`)) throw new Error("Invalid hex value");
        const {
            hex: t,
            alpha: n
        } = function(e) {
            let t = 1;
            return 4 === (e = e.replace("#", "")).length && (t = gc(e.slice(3) + e.slice(3)), e = e.slice(0, 3)), 8 === e.length && (t = gc(e.slice(6, 8)), e = e.slice(0, 6)), {
                hex: e,
                alpha: t
            }
        }(`${e[0]}`);
        return this.hex = t, this.alpha = n, this
    }
    if (3 === e.length || 4 === e.length) {
        for (var n = 0; n < 3; n++)
            if (isNaN(parseInt(e[n], 10)) || parseInt(e[n], 10) < 0 || parseInt(e[n], 10) > 255) throw new Error("Invalid rgb value");
        if (e[3] && parseFloat(e[3]) < 0 || parseFloat(e[3]) > 1) throw new Error("Invalid alpha value");
        return this.rgba = {
            red: e[0],
            green: e[1],
            blue: e[2],
            alpha: parseFloat(e[3]) || 1
        }, this
    }
    throw new Error("Invalid color")
}
rc.change && document.addEventListener(rc.change, (function(e) {
    if (vc.onchange(vc.element), ac(ic.CHANGE, vc.element), vc.element) {
        var t = dc[dc.length - 2];
        t && t.element === vc.element ? pc() : _c(vc.element)
    } else pc()
}), !1), document.addEventListener("webkitbeginfullscreen", (function(e) {
    var t = !0;
    if (dc.length > 0)
        for (var n = 0, r = dc.length; n < r; n++)
            if (cc(dc[n].element) === e.srcElement) {
                t = !1;
                break
            }
    t && dc.push({
        element: e.srcElement,
        enter: hc,
        exit: hc,
        error: hc
    }), vc.onchange(e.srcElement), ac(ic.CHANGE, vc.srcElement), _c(e.srcElement)
}), !0), document.addEventListener("webkitendfullscreen", (function(e) {
    vc.onchange(e.srcElement), ac(ic.CHANGE, e.srcElement), pc(e.srcElement)
}), !0), rc.error && document.addEventListener(rc.error, (function(e) {
    mc("not_allowed")
}), !1), yc.prototype = {
    get complement() {
        var e = this.clone();
        return e.rgb = {
            red: 255 - this.red,
            green: 255 - this.green,
            blue: 255 - this.blue
        }, e
    },
    get hex() {
        return yc.rgbToHex(this.red, this.green, this.blue)
    },
    get hexWithAlpha() {
        const e = ("0" + Math.round(255 * this.alpha).toString(16)).slice(-2);
        return yc.rgbToHex(this.red, this.green, this.blue) + e
    },
    set hex(e) {
        return this.rgba = yc.hexToRgb(e), this
    },
    get hsl() {
        return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)"
    },
    set hsl(e) {
        this.hue = e.hue, this.saturation = e.saturation, this.lightness = e.lightness;
        var t = yc.hslToRgb(e.hue, e.saturation, e.lightness);
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this
    },
    get luminance() {
        function e(e) {
            return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        }
        return .2126 * e(this.red / 255) + .7152 * e(this.green / 255) + .0722 * e(this.blue / 255)
    },
    get rgb() {
        return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
    },
    set rgb(e) {
        return this.rgba = e, this
    },
    get rgba() {
        return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"
    },
    set rgba(e) {
        this.red = e.red, this.green = e.green, this.blue = e.blue, this.alpha = e.alpha || 1;
        var t = yc.rgbToHsl(e.red, e.green, e.blue);
        return this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    },
    get yiq() {
        return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3
    },
    clone: function() {
        return new yc(this)
    },
    lighten: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness + e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.lighten(5), r = n.contrast(this).ratio, !(this.lightness >= 100)););
        return this
    },
    darken: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness - e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.darken(5), r = n.contrast(this).ratio, !(this.lightness <= 0)););
        return this
    },
    overlayOn: function(e) {
        if (this.alpha >= 1) return this;
        var t = this.clone();
        return t.rgba = {
            red: t.red * this.alpha + e.red * e.alpha * (1 - this.alpha),
            green: t.green * this.alpha + e.green * e.alpha * (1 - this.alpha),
            blue: t.blue * this.alpha + e.blue * e.alpha * (1 - this.alpha),
            alpha: t.alpha + e.alpha * (1 - this.alpha)
        }, t
    },
    contrast: function(e) {
        var t = this.alpha;
        if (t >= 1) {
            e.alpha < 1 && (e = e.overlayOn(this));
            var n = this.luminance + .05,
                r = e.luminance + .05,
                i = n / r;
            return r > n && (i = 1 / i), {
                ratio: i = Math.round(10 * i) / 10,
                error: 0,
                min: i,
                max: i
            }
        }
        var s = this.overlayOn(yc.white).contrast(e).ratio,
            o = this.overlayOn(yc.black).contrast(e).ratio,
            a = Math.max(s, o),
            u = {
                red: Math.min(Math.max(0, (e.red - this.red * t) / (1 - t)), 255),
                green: Math.min(Math.max(0, (e.green - this.green * t) / (1 - t)), 255),
                blue: Math.min(Math.max(0, (e.blue - this.blue * t) / (1 - t)), 255)
            },
            c = this.clone();
        c.rgb = u;
        var l = this.overlayOn(c).contrast(e).ratio;
        return {
            ratio: Math.round((l + a) / 2 * 10) / 10,
            error: Math.round((a - l) / 2 * 10) / 10,
            min: l,
            max: a,
            closest: c,
            farthest: o === a ? yc.white : yc.black
        }
    },
    wcagAACompliant: function(e) {
        return this.contrast(e).ratio >= 4.5
    },
    wcagAAACompliant: function(e) {
        return this.contrast(e).ratio >= 7
    },
    yiqContrastColor: function() {
        return this.yiq >= 120 ? new yc(0, 0, 0) : new yc(255, 255, 255)
    }
}, yc.hexToRgb = function(e) {
    var t;
    return 3 === (e = String(e)).length || 4 === e.length ? (t = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(e)) && (t[1] += t[1], t[2] += t[2], t[3] += t[3]) : t = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(e), t ? {
        red: parseInt(t[1], 16),
        green: parseInt(t[2], 16),
        blue: parseInt(t[3], 16),
        alpha: 1
    } : null
}, yc.rgbToHex = function(e, t, n) {
    return "#" + ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(n)).toString(16).slice(1)
}, yc.rgbToHsl = function(e, t, n) {
    e /= 255, t /= 255, n /= 255;
    var r, i = Math.max(e, t, n),
        s = Math.min(e, t, n),
        o = (i + s) / 2,
        a = o;
    if (i === s) return {
        hue: 0,
        saturation: 0,
        lightness: 100 * a
    };
    var u = i - s;
    return r = a > .5 ? u / (2 - i - s) : u / (i + s), i === e ? o = (t - n) / u + (t < n ? 6 : 0) : i === t ? o = (n - e) / u + 2 : i === n && (o = (e - t) / u + 4), o /= 6, {
        hue: Math.round(360 * o),
        saturation: Math.round(100 * r),
        lightness: Math.round(100 * a)
    }
}, yc.hslToRgb = function(e, t, n) {
    function r(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + 6 * (t - e) * n : 2 * n < 1 ? t : 3 * n < 2 ? e + 6 * (2 / 3 - n) * (t - e) : e
    }
    if (e /= 360, n /= 100, 0 == (t /= 100)) return {
        red: Math.floor(255 * n),
        green: Math.floor(255 * n),
        blue: Math.floor(255 * n)
    };
    var i = n < .5 ? n * (1 + t) : n + t - t * n,
        s = 2 * n - i;
    return {
        red: Math.floor(255 * r(s, i, e + 1 / 3)),
        green: Math.floor(255 * r(s, i, e)),
        blue: Math.floor(255 * r(s, i, e - 1 / 3))
    }
}, yc.hslToHex = function(e, t, n) {
    var r = yc.hslToRgb(e, t, n);
    return yc.rgbToHex(r.red, r.green, r.blue)
}, yc.white = new yc("fff"), yc.black = new yc("000");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ec = function() {
    return (Ec = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }).apply(this, arguments)
};

function Sc(e) {
    return e.toLowerCase()
}
var Tc = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
    bc = /[^A-Z0-9]+/gi;

function Ac(e, t) {
    void 0 === t && (t = {});
    for (var n = t.splitRegexp, r = void 0 === n ? Tc : n, i = t.stripRegexp, s = void 0 === i ? bc : i, o = t.transform, a = void 0 === o ? Sc : o, u = t.delimiter, c = void 0 === u ? " " : u, l = Ic(Ic(e, r, "$1\0$2"), s, "\0"), h = 0, d = l.length;
        "\0" === l.charAt(h);) h++;
    for (;
        "\0" === l.charAt(d - 1);) d--;
    return l.slice(h, d).split("\0").map(a).join(c)
}

function Ic(e, t, n) {
    return t instanceof RegExp ? e.replace(t, n) : t.reduce((function(e, t) {
        return e.replace(t, n)
    }), e)
}

function wc(e, t) {
    var n = e.charAt(0),
        r = e.substr(1).toLowerCase();
    return t > 0 && n >= "0" && n <= "9" ? "_" + n + r : "" + n.toUpperCase() + r
}

function Rc(e) {
    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
}

function Pc(e, t) {
    return void 0 === t && (t = {}), Ac(e, Ec({
        delimiter: "",
        transform: wc
    }, t))
}

function Dc(e, t) {
    return 0 === t ? e.toLowerCase() : wc(e, t)
}

function kc(e) {
    return e.charAt(0).toUpperCase() + e.substr(1)
}

function Oc(e) {
    return kc(e.toLowerCase())
}

function Cc(e, t) {
    return void 0 === t && (t = {}), Ac(e, Ec({
        delimiter: " ",
        transform: Oc
    }, t))
}

function Lc(e) {
    return e.toUpperCase()
}

function Nc(e, t) {
    return void 0 === t && (t = {}), Ac(e, Ec({
        delimiter: "."
    }, t))
}

function Mc(e, t) {
    var n = e.toLowerCase();
    return 0 === t ? kc(n) : n
}
for (var xc = Object.freeze({
        __proto__: null,
        camelCaseTransform: Dc,
        camelCaseTransformMerge: function(e, t) {
            return 0 === t ? e.toLowerCase() : Rc(e)
        },
        camelCase: function(e, t) {
            return void 0 === t && (t = {}), Pc(e, Ec({
                transform: Dc
            }, t))
        },
        capitalCaseTransform: Oc,
        capitalCase: Cc,
        constantCase: function(e, t) {
            return void 0 === t && (t = {}), Ac(e, Ec({
                delimiter: "_",
                transform: Lc
            }, t))
        },
        dotCase: Nc,
        headerCase: function(e, t) {
            return void 0 === t && (t = {}), Cc(e, Ec({
                delimiter: "-"
            }, t))
        },
        noCase: Ac,
        paramCase: function(e, t) {
            return void 0 === t && (t = {}), Nc(e, Ec({
                delimiter: "-"
            }, t))
        },
        pascalCaseTransform: wc,
        pascalCaseTransformMerge: Rc,
        pascalCase: Pc,
        pathCase: function(e, t) {
            return void 0 === t && (t = {}), Nc(e, Ec({
                delimiter: "/"
            }, t))
        },
        sentenceCaseTransform: Mc,
        sentenceCase: function(e, t) {
            return void 0 === t && (t = {}), Ac(e, Ec({
                delimiter: " ",
                transform: Mc
            }, t))
        },
        snakeCase: function(e, t) {
            return void 0 === t && (t = {}), Nc(e, Ec({
                delimiter: "_"
            }, t))
        }
    }), Fc = nn((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Tracker = void 0;
        var n = function() {
            function e() {
                this.name = "bigpicture-client-ts", this.version = "1.2.1"
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "version",
                baseName: "version",
                type: "string"
            }], e
        }();
        t.Tracker = n
    })), Uc = nn((function(e) {
        var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (t) {
            var n = new Uint8Array(16);
            e.exports = function() {
                return t(n), n
            }
        } else {
            var r = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                return r
            }
        }
    })), jc = [], Bc = 0; Bc < 256; ++Bc) jc[Bc] = (Bc + 256).toString(16).substr(1);
var Vc, Hc, Xc = function(e, t) {
        var n = t || 0,
            r = jc;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    },
    qc = 0,
    Gc = 0,
    Wc = function(e, t, n) {
        var r = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var i = (e = e || {}).random || (e.rng || Uc)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
            for (var s = 0; s < 16; ++s) t[r + s] = i[s];
        return t || Xc(i)
    },
    Kc = Wc;
Kc.v1 = function(e, t, n) {
    var r = t && n || 0,
        i = t || [],
        s = (e = e || {}).node || Vc,
        o = void 0 !== e.clockseq ? e.clockseq : Hc;
    if (null == s || null == o) {
        var a = Uc();
        null == s && (s = Vc = [1 | a[0], a[1], a[2], a[3], a[4], a[5]]), null == o && (o = Hc = 16383 & (a[6] << 8 | a[7]))
    }
    var u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
        c = void 0 !== e.nsecs ? e.nsecs : Gc + 1,
        l = u - qc + (c - Gc) / 1e4;
    if (l < 0 && void 0 === e.clockseq && (o = o + 1 & 16383), (l < 0 || u > qc) && void 0 === e.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    qc = u, Gc = c, Hc = o;
    var h = (1e4 * (268435455 & (u += 122192928e5)) + c) % 4294967296;
    i[r++] = h >>> 24 & 255, i[r++] = h >>> 16 & 255, i[r++] = h >>> 8 & 255, i[r++] = 255 & h;
    var d = u / 4294967296 * 1e4 & 268435455;
    i[r++] = d >>> 8 & 255, i[r++] = 255 & d, i[r++] = d >>> 24 & 15 | 16, i[r++] = d >>> 16 & 255, i[r++] = o >>> 8 | 128, i[r++] = 255 & o;
    for (var f = 0; f < 6; ++f) i[r + f] = s[f];
    return t || Xc(i)
}, Kc.v4 = Wc;
var Yc = Kc,
    $c = nn((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Envelope = void 0;
        var n = function() {
            function e(e, t) {
                this.event = e, this.eid = Yc.v4(), this.ts_ms = Date.now(), this._tracker = new Fc.Tracker, this._globalBPO = t
            }
            return Object.defineProperty(e.prototype, "tracker", {
                get: function() {
                    return this._tracker
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "global", {
                get: function() {
                    return this._globalBPO
                },
                enumerable: !1,
                configurable: !0
            }), e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "eid",
                baseName: "eid",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "event",
                baseName: "event",
                type: "Event"
            }, {
                name: "global",
                baseName: "global",
                type: "Event"
            }, {
                name: "tracker",
                baseName: "tracker",
                type: "Tracker"
            }], e
        }();
        t.Envelope = n
    })),
    zc = nn((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Event = void 0;
        var n = function() {
            function e(e, t, n, r) {
                this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n, this.namespace = r
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "version",
                baseName: "version",
                type: "number"
            }, {
                name: "fields",
                baseName: "fields",
                type: "object"
            }, {
                name: "namespace",
                baseName: "namespace",
                type: "string"
            }], e
        }();
        t.Event = n
    })),
    Qc = nn((function(e, t) {
        var n = tn && tn.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = tn && tn.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ObjectSerializer = void 0, r($c, t), r(zc, t), r(Fc, t);
        var i = zc,
            s = Fc,
            o = ["string", "boolean", "double", "integer", "long", "float", "number", "any"],
            a = {},
            u = {
                Envelope: $c.Envelope,
                Event: i.Event,
                Tracker: s.Tracker
            },
            c = function() {
                function e() {}
                return e.findCorrectType = function(e, t) {
                    if (null == e) return t;
                    if (-1 !== o.indexOf(t.toLowerCase())) return t;
                    if ("Date" === t) return t;
                    if (a[t]) return t;
                    if (!u[t]) return t;
                    var n = u[t].discriminator;
                    if (null == n) return t;
                    if (e[n]) {
                        var r = e[n];
                        return u[r] ? r : t
                    }
                    return t
                }, e.serialize = function(t, n) {
                    if (null == t) return t;
                    if (-1 !== o.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var s in t) {
                            var c = t[s];
                            i.push(e.serialize(c, r))
                        }
                        return i
                    }
                    if ("Date" === n) return t.toISOString();
                    if (a[n]) return t;
                    if (!u[n]) return t;
                    n = this.findCorrectType(t, n);
                    var l = u[n].getAttributeTypeMap(),
                        h = {};
                    for (var s in l) {
                        var d = l[s];
                        h[d.baseName] = e.serialize(t[d.name], d.type)
                    }
                    return h
                }, e.deserialize = function(t, n) {
                    if (n = e.findCorrectType(t, n), null == t) return t;
                    if (-1 !== o.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var s in t) {
                            var c = t[s];
                            i.push(e.deserialize(c, r))
                        }
                        return i
                    }
                    if ("Date" === n) return new Date(t);
                    if (a[n]) return t;
                    if (!u[n]) return t;
                    var l = new u[n],
                        h = u[n].getAttributeTypeMap();
                    for (var s in h) {
                        var d = h[s];
                        l[d.name] = e.deserialize(t[d.baseName], d.type)
                    }
                    return l
                }, e
            }();
        t.ObjectSerializer = c
    })),
    Jc = function(e) {
        return e && e.default || e
    }(xc),
    Zc = nn((function(e, t) {
        var n, r = tn && tn.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, s) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (fl) {
                            s(fl)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (fl) {
                            s(fl)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : function(e) {
                            return e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))
                        }(e.value).then(o, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            i = tn && tn.__generator || function(e, t) {
                var n, r, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, r = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < i[1]) {
                                            o.label = i[1], i = s;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(s);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (fl) {
                                s = [6, fl], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BigPictureClient = t.Configuration = t.Service = void 0,
            function(e) {
                e.FRESNEL_PROD = "https://fresnel-events.vimeocdn.com", e.FRESNEL_DEV = "https://fresnel-event-staging.vimeows.com"
            }(n = t.Service || (t.Service = {}));
        var s = function(e, t) {
            void 0 === t && (t = null), this.service = e, this.globalBPO = t
        };
        t.Configuration = s;
        var o = function() {
            function e() {}
            return Object.defineProperty(e, "isInitalized", {
                get: function() {
                    return Boolean(e.conf.globalBPO)
                },
                enumerable: !1,
                configurable: !0
            }), e.configure = function(t) {
                e.conf = t, e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE.map((function(t) {
                    return e.sendEvent(t)
                })), e.WAIT_QUEUE = [])
            }, e.sendEvent = function(t) {
                return r(this, void 0, void 0, (function() {
                    var n, r, s, o, a;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == t) throw new Error("Required parameter event was null or undefined when calling sendEvent.");
                                return e.isInitalized ? (n = JSON.stringify(Qc.ObjectSerializer.serialize([new $c.Envelope(t, this.conf.globalBPO)], "Array<Envelope>")), r = t.name, null != t.namespace && (r = Jc.snakeCase(t.namespace) + "." + t.name), s = this.conf.service + "/add/" + encodeURIComponent(r), navigator.sendBeacon ? [3, 2] : (o = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "User-Agent": navigator.userAgent,
                                        Origin: location.origin,
                                        Referer: document.referrer
                                    },
                                    body: n
                                }, [4, fetch(s, o)])) : (e.WAIT_QUEUE.push(t), Boolean(e.flushQueueTimeoutHandler) || (e.flushQueueTimeoutHandler = setTimeout((function() {
                                    e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE = [])
                                }), e.FLUSH_QUEUE_TIMEOUT)), [2]);
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                a = new Blob([n]), navigator.sendBeacon(s, a), i.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.FLUSH_QUEUE_TIMEOUT = 1e4, e.conf = new s(n.FRESNEL_PROD), e.WAIT_QUEUE = [], e
        }();
        t.BigPictureClient = o
    })),
    el = nn((function(e, t) {
        var n = tn && tn.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = tn && tn.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(Zc, t), r(Qc, t)
    })),
    tl = Object.prototype.hasOwnProperty,
    nl = Zr((function(e, t) {
        if (Nn(t) || jn(t)) ln(t, Bn(t), e);
        else
            for (var n in t) tl.call(t, n) && cn(e, n, t[n])
    })),
    rl = nn((function(e) {
        ! function() {
            var t = "undefined" != typeof window && window === this ? this : void 0 !== tn && null != tn ? tn : this,
                n = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                };

            function r() {
                r = function() {}, t.Symbol || (t.Symbol = s)
            }
            var i = 0;

            function s(e) {
                return "jscomp_symbol_" + (e || "") + i++
            }

            function o() {
                r();
                var e = t.Symbol.iterator;
                e || (e = t.Symbol.iterator = t.Symbol("iterator")), "function" != typeof Array.prototype[e] && n(Array.prototype, e, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return a(this)
                    }
                }), o = function() {}
            }

            function a(e) {
                var n = 0;
                return function(e) {
                    return o(), (e = {
                        next: e
                    })[t.Symbol.iterator] = function() {
                        return this
                    }, e
                }((function() {
                    return n < e.length ? {
                        done: !1,
                        value: e[n++]
                    } : {
                        done: !0
                    }
                }))
            }

            function u(e) {
                o();
                var t = e[Symbol.iterator];
                return t ? t.call(e) : a(e)
            }

            function c(e) {
                if (!(e instanceof Array)) {
                    e = u(e);
                    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                    e = n
                }
                return e
            }
            var l = 0,
                h = "img script iframe link audio video source".split(" ");

            function d(e, t) {
                for (var n = (e = u(e)).next(); !n.done; n = e.next())
                    if (n = n.value, t.includes(n.nodeName.toLowerCase()) || d(n.children, t)) return !0;
                return !1
            }

            function f(e, t) {
                if (2 < e.length) return performance.now();
                for (var n = [], r = (t = u(t)).next(); !r.done; r = t.next()) r = r.value, n.push({
                    timestamp: r.start,
                    type: "requestStart"
                }), n.push({
                    timestamp: r.end,
                    type: "requestEnd"
                });
                for (r = (t = u(e)).next(); !r.done; r = t.next()) n.push({
                    timestamp: r.value,
                    type: "requestStart"
                });
                for (n.sort((function(e, t) {
                        return e.timestamp - t.timestamp
                    })), e = e.length, t = n.length - 1; 0 <= t; t--) switch (r = n[t], r.type) {
                    case "requestStart":
                        e--;
                        break;
                    case "requestEnd":
                        if (2 < ++e) return r.timestamp;
                        break;
                    default:
                        throw Error("Internal Error: This should never happen")
                }
                return 0
            }

            function _(e) {
                e = e || {}, this.w = !!e.useMutationObserver, this.u = e.minValue || null, e = window.__tti && window.__tti.e;
                var t = window.__tti && window.__tti.o;
                this.a = e ? e.map((function(e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    })) : [], t && t.disconnect(), this.b = [], this.f = new Map, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null,
                    function(e, t) {
                        var n = XMLHttpRequest.prototype.send,
                            r = l++;
                        XMLHttpRequest.prototype.send = function(i) {
                            for (var s = [], o = 0; o < arguments.length; ++o) s[o - 0] = arguments[o];
                            var a = this;
                            return e(r), this.addEventListener("readystatechange", (function() {
                                4 === a.readyState && t(r)
                            })), n.apply(this, s)
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function(e, t) {
                        var n = fetch;
                        fetch = function(r) {
                            for (var i = [], s = 0; s < arguments.length; ++s) i[s - 0] = arguments[s];
                            return new Promise((function(r, s) {
                                var o = l++;
                                e(o), n.apply(null, [].concat(c(i))).then((function(e) {
                                    t(o), r(e)
                                }), (function(e) {
                                    t(e), s(e)
                                }))
                            }))
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function(e) {
                        e.c = new PerformanceObserver((function(t) {
                            for (var n = (t = u(t.getEntries())).next(); !n.done; n = t.next())
                                if ("resource" === (n = n.value).entryType && (e.b.push({
                                        start: n.fetchStart,
                                        end: n.responseEnd
                                    }), m(e, f(e.g, e.b) + 5e3)), "longtask" === n.entryType) {
                                    var r = n.startTime + n.duration;
                                    e.a.push({
                                        start: n.startTime,
                                        end: r
                                    }), m(e, r + 5e3)
                                }
                        })), e.c.observe({
                            entryTypes: ["longtask", "resource"]
                        })
                    }(this), this.w && (this.h = function(e) {
                        var t = new MutationObserver((function(t) {
                            for (var n = (t = u(t)).next(); !n.done; n = t.next())("childList" == (n = n.value).type && d(n.addedNodes, h) || "attributes" == n.type && h.includes(n.target.tagName.toLowerCase())) && e(n)
                        }));
                        return t.observe(document, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            attributeFilter: ["href", "src"]
                        }), t
                    }(this.B.bind(this)))
            }

            function p(e) {
                e.i = !0;
                var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                    n = f(e.g, e.b);
                m(e, Math.max(n + 5e3, t))
            }

            function m(e, t) {
                !e.i || e.v > t || (clearTimeout(e.j), e.j = setTimeout((function() {
                    var t = performance.timing.navigationStart,
                        n = f(e.g, e.b);
                    if (t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t, e.u) var r = e.u;
                    else r = performance.timing.domContentLoadedEventEnd ? (r = performance.timing).domContentLoadedEventEnd - r.navigationStart : null;
                    var i = performance.now();
                    null === r && m(e, Math.max(n + 5e3, i + 1e3));
                    var s = e.a;
                    (n = 5e3 > i - n || 5e3 > i - (n = s.length ? s[s.length - 1].end : t) ? null : Math.max(n, r)) && (e.s(n), clearTimeout(e.j), e.i = !1, e.c && e.c.disconnect(), e.h && e.h.disconnect()), m(e, performance.now() + 1e3)
                }), t - performance.now()), e.v = t)
            }
            _.prototype.getFirstConsistentlyInteractive = function() {
                var e = this;
                return new Promise((function(t) {
                    e.s = t, "complete" == document.readyState ? p(e) : window.addEventListener("load", (function() {
                        p(e)
                    }))
                }))
            }, _.prototype.m = function(e) {
                this.f.set(e, performance.now())
            }, _.prototype.l = function(e) {
                this.f.delete(e)
            }, _.prototype.B = function() {
                m(this, performance.now() + 5e3)
            }, t.Object.defineProperties(_.prototype, {
                g: {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return [].concat(c(this.f.values()))
                    }
                }
            });
            var v = {
                getFirstConsistentlyInteractive: function(e) {
                    return e = e || {}, "PerformanceLongTaskTiming" in window ? new _(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                }
            };
            e.exports ? e.exports = v : window.ttiPolyfill = v
        }()
    }));
const il = function(e) {
        return (t, ...n) => (n.forEach(n => {
            for (const r in n) {
                const i = Object.getOwnPropertyDescriptor(n, r);
                Object.defineProperty(t, r, Object.assign(i, e))
            }
        }), t)
    }({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    sl = {
        AD_BUFFERING: "ad-buffering",
        AD_COMPLETE: "ad-complete",
        AD_CLICK: "ad-click",
        AD_SKIPPED: "ad-skipped",
        ALL_ADS_COMPLETED: "all-ads-completed",
        AD_ERROR: "ad-error",
        AD_STARTED: "ad-started",
        ADS_MANAGER_LOADED: "ads-manager-loaded",
        CONTENT_PAUSE_REQUESTED: "content-pause-requested",
        CONTENT_RESUME_REQUESTED: "content-resume-requested"
    };

function ol(e, t) {
    const n = rn();
    let r, i, s, o, a;

    function u(e) {
        var s = new r.AdsRenderingSettings;
        s.restoreCustomPlaybackStateOnAdBreakComplete = !0, s.uiElements = [], i = e.getAdsManager(t.videoPlayer, s), n.fire(sl.ADS_MANAGER_LOADED), i.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), i.addEventListener(r.AdEvent.Type.CONTENT_PAUSE_REQUESTED, c), i.addEventListener(r.AdEvent.Type.CONTENT_RESUME_REQUESTED, l), i.addEventListener(r.AdEvent.Type.AD_BUFFERING, h), i.addEventListener(r.AdEvent.Type.STARTED, d), i.addEventListener(r.AdEvent.Type.COMPLETE, f), i.addEventListener(r.AdEvent.Type.CLICK, _), i.addEventListener(r.AdEvent.Type.SKIPPED, p), i.addEventListener(r.AdEvent.Type.ALL_ADS_COMPLETED, m)
    }

    function c(e) {
        n.fire(sl.CONTENT_PAUSE_REQUESTED, e)
    }

    function l(e) {
        n.fire(sl.CONTENT_RESUME_REQUESTED, e)
    }

    function h(e) {
        n.fire(sl.AD_BUFFERING, e)
    }

    function d(e) {
        n.fire(sl.AD_STARTED, e)
    }

    function f(e) {
        n.fire(sl.AD_COMPLETE, e)
    }

    function _(e) {
        i.pause(), n.fire(sl.AD_CLICK, e)
    }

    function p(e) {
        n.fire(sl.AD_SKIPPED, e)
    }

    function m(e) {
        n.fire(sl.ALL_ADS_COMPLETED, e)
    }

    function v(e) {
        n.fire(sl.AD_ERROR, e.getError()), i && i.destroy()
    }
    const g = {
        start: (e, t) => (a.initialize(), i.init(e, t, r.ViewMode.NORMAL), i.start()),
        stop: () => i.stop(),
        pause: () => i.pause(),
        play: () => i.resume(),
        skip: () => i.skip(),
        resize: (e, t, n) => n ? i.resize(e, t, r.ViewMode.FULLSCREEN) : i.resize(e, t, r.ViewMode.NORMAL),
        destroy() {
            n.off(), i.destroy(), s.destroy(), a.destroy()
        },
        get volume() {
            return R(i.getVolume())
        },
        set volume(e) {
            i.setVolume(w(e))
        },
        get adsManager() {
            return i
        },
        get adsLoader() {
            return s
        },
        get remainingTime() {
            return i.getRemainingTime()
        },
        setContentComplete() {
            s.contentComplete()
        },
        on(e, t) {
            return n.on(e, t), this
        },
        off(e, t) {
            return n.off(e, t), this
        }
    };
    return function(e, t, n) {
        if (document.getElementById("vp-ima-sdk")) n();
        else {
            var r = document.createElement("script");
            r.id = "vp-ima-sdk", r.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js", r.onreadystatechange = r.onload = () => {
                n && n()
            }, document.getElementsByTagName("body")[0].appendChild(r)
        }
    }(0, 0, (function() {
        r = google.ima;
        let n = ke.iOS ? t.videoPlayer.videoElement : t.videoPlayer;
        a = new r.AdDisplayContainer(e, n), s = new r.AdsLoader(a), s.addEventListener(r.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, u), s.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), o = new r.AdsRequest, t.adUrl && (o.adTagUrl = t.adUrl), o.linearAdSlotWidth = t.width.linear, o.linearAdSlotHeight = t.height.linear, o.nonLinearAdSlotWidth = t.width.nonlinear, o.nonLinearAdSlotHeight = t.height.nonlinear, s.requestAds(o)
    })), il(this, g)
}

function al(e, t, n, r) {
    if (!Ze(e)) return e;
    for (var i = -1, s = (t = Ot(t, e)).length, o = s - 1, a = e; null != a && ++i < s;) {
        var u = Ct(t[i]),
            c = n;
        if (i != o) {
            var l = a[u];
            void 0 === (c = r ? r(l, u, a) : void 0) && (c = Ze(l) ? l : Sn(t[i + 1]) ? [] : {})
        }
        cn(a, u, c), a = a[u]
    }
    return e
}

function ul(e, t) {
    return null != e && t in Object(e)
}

function cl(e, t) {
    return null != e && function(e, t, n) {
        for (var r = -1, i = (t = Ot(t, e)).length, s = !1; ++r < i;) {
            var o = Ct(t[r]);
            if (!(s = null != e && n(e, o))) break;
            e = e[o]
        }
        return s || ++r != i ? s : !!(i = null == e ? 0 : e.length) && Tn(i) && Sn(o, i) && (xe(e) || pn(e))
    }(e, t, ul)
}
var ll = Be ? Be.isConcatSpreadable : void 0;

function hl(e) {
    return xe(e) || pn(e) || !!(ll && e && e[ll])
}

function dl(e) {
    return null != e && e.length ? function e(t, n, r, i, s) {
        var o = -1,
            a = t.length;
        for (r || (r = hl), s || (s = []); ++o < a;) {
            var u = t[o];
            n > 0 && r(u) ? n > 1 ? e(u, n - 1, r, i, s) : Zn(s, u) : i || (s[s.length] = u)
        }
        return s
    }(e, 1) : []
}
var fl, _l, pl, ml, vl = function(e) {
        return Br(xr(e, void 0, dl), e + "")
    }((function(e, t) {
        return null == e ? {} : function(e, t) {
            return function(e, t, n) {
                for (var r = -1, i = t.length, s = {}; ++r < i;) {
                    var o = t[r],
                        a = Lt(e, o);
                    n(0, o) && al(s, Ot(o, e), a)
                }
                return s
            }(e, t, (function(t, n) {
                return cl(e, n)
            }))
        }(e, t)
    })),
    gl = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    },
    yl = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                var n = new PerformanceObserver((function(e) {
                    return e.getEntries().map(t)
                }));
                return n.observe({
                    type: e,
                    buffered: !0
                }), n
            }
        } catch (e) {}
    },
    El = function(e, t) {
        var n = function n(r) {
            "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
    },
    Sl = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && e(t)
        }), !0)
    },
    Tl = function(e, t, n) {
        var r;
        return function(i) {
            t.value >= 0 && (i || n) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
        }
    },
    bl = -1,
    Al = function() {
        return "hidden" === document.visibilityState ? 0 : 1 / 0
    },
    Il = function() {
        El((function(e) {
            var t = e.timeStamp;
            bl = t
        }), !0)
    },
    wl = function() {
        return bl < 0 && (bl = Al(), Il(), Sl((function() {
            setTimeout((function() {
                bl = Al(), Il()
            }), 0)
        }))), {
            get firstHiddenTime() {
                return bl
            }
        }
    },
    Rl = function(e, t) {
        var n, r = wl(),
            i = gl("FCP"),
            s = function(e) {
                "first-contentful-paint" === e.name && (a && a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = e.startTime, i.entries.push(e), n(!0)))
            },
            o = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
            a = o ? null : yl("paint", s);
        (o || a) && (n = Tl(e, i, t), o && s(o), Sl((function(r) {
            i = gl("FCP"), n = Tl(e, i, t), requestAnimationFrame((function() {
                requestAnimationFrame((function() {
                    i.value = performance.now() - r.timeStamp, n(!0)
                }))
            }))
        })))
    },
    Pl = !1,
    Dl = -1,
    kl = function(e, t) {
        Pl || (Rl((function(e) {
            Dl = e.value
        })), Pl = !0);
        var n, r = function(t) {
                Dl > -1 && e(t)
            },
            i = gl("CLS", 0),
            s = 0,
            o = [],
            a = function(e) {
                if (!e.hadRecentInput) {
                    var t = o[0],
                        r = o[o.length - 1];
                    s && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (s += e.value, o.push(e)) : (s = e.value, o = [e]), s > i.value && (i.value = s, i.entries = o, n())
                }
            },
            u = yl("layout-shift", a);
        u && (n = Tl(r, i, t), El((function() {
            u.takeRecords().map(a), n(!0)
        })), Sl((function() {
            s = 0, Dl = -1, i = gl("CLS", 0), n = Tl(r, i, t)
        })))
    },
    Ol = {
        passive: !0,
        capture: !0
    },
    Cl = new Date,
    Ll = function(e, t) {
        fl || (fl = t, _l = e, pl = new Date, xl(removeEventListener), Nl())
    },
    Nl = function() {
        if (_l >= 0 && _l < pl - Cl) {
            var e = {
                entryType: "first-input",
                name: fl.type,
                target: fl.target,
                cancelable: fl.cancelable,
                startTime: fl.timeStamp,
                processingStart: fl.timeStamp + _l
            };
            ml.forEach((function(t) {
                t(e)
            })), ml = []
        }
    },
    Ml = function(e) {
        if (e.cancelable) {
            var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
            "pointerdown" == e.type ? function(e, t) {
                var n = function() {
                        Ll(e, t), i()
                    },
                    r = function() {
                        i()
                    },
                    i = function() {
                        removeEventListener("pointerup", n, Ol), removeEventListener("pointercancel", r, Ol)
                    };
                addEventListener("pointerup", n, Ol), addEventListener("pointercancel", r, Ol)
            }(t, e) : Ll(t, e)
        }
    },
    xl = function(e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
            return e(t, Ml, Ol)
        }))
    },
    Fl = function(e, t) {
        var n, r = wl(),
            i = gl("FID"),
            s = function(e) {
                e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), n(!0))
            },
            o = yl("first-input", s);
        n = Tl(e, i, t), o && El((function() {
            o.takeRecords().map(s), o.disconnect()
        }), !0), o && Sl((function() {
            var r;
            i = gl("FID"), n = Tl(e, i, t), ml = [], _l = -1, fl = null, xl(addEventListener), r = s, ml.push(r), Nl()
        }))
    },
    Ul = {},
    jl = function(e, t) {
        var n, r = wl(),
            i = gl("LCP"),
            s = function(e) {
                var t = e.startTime;
                t < r.firstHiddenTime && (i.value = t, i.entries.push(e), n())
            },
            o = yl("largest-contentful-paint", s);
        if (o) {
            n = Tl(e, i, t);
            var a = function() {
                Ul[i.id] || (o.takeRecords().map(s), o.disconnect(), Ul[i.id] = !0, n(!0))
            };
            ["keydown", "click"].forEach((function(e) {
                addEventListener(e, a, {
                    once: !0,
                    capture: !0
                })
            })), El(a, !0), Sl((function(r) {
                i = gl("LCP"), n = Tl(e, i, t), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        i.value = performance.now() - r.timeStamp, Ul[i.id] = !0, n(!0)
                    }))
                }))
            }))
        }
    },
    Bl = function(e) {
        return function(t) {
            return null == e ? void 0 : e[t]
        }
    }({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }),
    Vl = /[&<>"']/g,
    Hl = RegExp(Vl.source);

function Xl(e) {
    return (e = kt(e)) && Hl.test(e) ? e.replace(Vl, Bl) : e
}
var ql, Gl, Wl, Kl, Yl, $l, zl, Ql = {},
    Jl = [],
    Zl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function eh(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function th(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function nh(e, t, n) {
    var r, i, s, o = {};
    for (s in t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : o[s] = t[s];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? ql.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
        for (s in e.defaultProps) void 0 === o[s] && (o[s] = e.defaultProps[s]);
    return rh(e, o, r, i, null)
}

function rh(e, t, n, r, i) {
    var s = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i ? ++Wl : i
    };
    return null == i && null != Gl.vnode && Gl.vnode(s), s
}

function ih(e) {
    return e.children
}

function sh(e, t) {
    this.props = e, this.context = t
}

function oh(e, t) {
    if (null == t) return e.__ ? oh(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? oh(e) : null
}

function ah(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return ah(e)
    }
}

function uh(e) {
    (!e.__d && (e.__d = !0) && Kl.push(e) && !ch.__r++ || $l !== Gl.debounceRendering) && (($l = Gl.debounceRendering) || Yl)(ch)
}

function ch() {
    for (var e; ch.__r = Kl.length;) e = Kl.sort((function(e, t) {
        return e.__v.__b - t.__v.__b
    })), Kl = [], e.some((function(e) {
        var t, n, r, i, s, o;
        e.__d && (s = (i = (t = e).__v).__e, (o = t.__P) && (n = [], (r = eh({}, i)).__v = i.__v + 1, gh(o, i, r, t.__n, void 0 !== o.ownerSVGElement, null != i.__h ? [s] : null, n, null == s ? oh(i) : s, i.__h), yh(n, i), i.__e != s && ah(i)))
    }))
}

function lh(e, t, n, r, i, s, o, a, u, c) {
    var l, h, d, f, _, p, m, v = r && r.__k || Jl,
        g = v.length;
    for (n.__k = [], l = 0; l < t.length; l++)
        if (null != (f = n.__k[l] = null == (f = t[l]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? rh(null, f, null, null, f) : Array.isArray(f) ? rh(ih, {
                children: f
            }, null, null, null) : f.__b > 0 ? rh(f.type, f.props, f.key, null, f.__v) : f)) {
            if (f.__ = n, f.__b = n.__b + 1, null === (d = v[l]) || d && f.key == d.key && f.type === d.type) v[l] = void 0;
            else
                for (h = 0; h < g; h++) {
                    if ((d = v[h]) && f.key == d.key && f.type === d.type) {
                        v[h] = void 0;
                        break
                    }
                    d = null
                }
            gh(e, f, d = d || Ql, i, s, o, a, u, c), _ = f.__e, (h = f.ref) && d.ref != h && (m || (m = []), d.ref && m.push(d.ref, null, f), m.push(h, f.__c || _, f)), null != _ ? (null == p && (p = _), "function" == typeof f.type && f.__k === d.__k ? f.__d = u = hh(f, u, e) : u = fh(e, f, d, v, _, u), "function" == typeof n.type && (n.__d = u)) : u && d.__e == u && u.parentNode != e && (u = oh(d))
        }
    for (n.__e = p, l = g; l--;) null != v[l] && ("function" == typeof n.type && null != v[l].__e && v[l].__e == n.__d && (n.__d = oh(r, l + 1)), Th(v[l], v[l]));
    if (m)
        for (l = 0; l < m.length; l++) Sh(m[l], m[++l], m[++l])
}

function hh(e, t, n) {
    for (var r, i = e.__k, s = 0; i && s < i.length; s++)(r = i[s]) && (r.__ = e, t = "function" == typeof r.type ? hh(r, t, n) : fh(n, r, r, i, r.__e, t));
    return t
}

function dh(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
        dh(e, t)
    })) : t.push(e)), t
}

function fh(e, t, n, r, i, s) {
    var o, a, u;
    if (void 0 !== t.__d) o = t.__d, t.__d = void 0;
    else if (null == n || i != s || null == i.parentNode) e: if (null == s || s.parentNode !== e) e.appendChild(i), o = null;
        else {
            for (a = s, u = 0;
                (a = a.nextSibling) && u < r.length; u += 2)
                if (a == i) break e;
            e.insertBefore(i, s), o = s
        }
    return void 0 !== o ? o : i.nextSibling
}

function _h(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || Zl.test(t) ? n : n + "px"
}

function ph(e, t, n, r, i) {
    var s;
    e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || _h(e.style, t, "");
            if (n)
                for (t in n) r && n[t] === r[t] || _h(e.style, t, n[t])
        }
    else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r || e.addEventListener(t, s ? vh : mh, s) : e.removeEventListener(t, s ? vh : mh, s);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
            e[t] = null == n ? "" : n;
            break e
        } catch (e) {}
        "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
    }
}

function mh(e) {
    this.l[e.type + !1](Gl.event ? Gl.event(e) : e)
}

function vh(e) {
    this.l[e.type + !0](Gl.event ? Gl.event(e) : e)
}

function gh(e, t, n, r, i, s, o, a, u) {
    var c, l, h, d, f, _, p, m, v, g, y, E = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && (u = n.__h, a = t.__e = n.__e, t.__h = null, s = [a]), (c = Gl.__b) && c(t);
    try {
        e: if ("function" == typeof E) {
            if (m = t.props, v = (c = E.contextType) && r[c.__c], g = c ? v ? v.props.value : c.__ : r, n.__c ? p = (l = t.__c = n.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? t.__c = l = new E(m, g) : (t.__c = l = new sh(m, g), l.constructor = E, l.render = bh), v && v.sub(l), l.props = m, l.state || (l.state = {}), l.context = g, l.__n = r, h = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != E.getDerivedStateFromProps && (l.__s == l.state && (l.__s = eh({}, l.__s)), eh(l.__s, E.getDerivedStateFromProps(m, l.__s))), d = l.props, f = l.state, h) null == E.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if (null == E.getDerivedStateFromProps && m !== d && null != l.componentWillReceiveProps && l.componentWillReceiveProps(m, g), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(m, l.__s, g) || t.__v === n.__v) {
                    l.props = m, l.state = l.__s, t.__v !== n.__v && (l.__d = !1), l.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                        e && (e.__ = t)
                    })), l.__h.length && o.push(l);
                    break e
                }
                null != l.componentWillUpdate && l.componentWillUpdate(m, l.__s, g), null != l.componentDidUpdate && l.__h.push((function() {
                    l.componentDidUpdate(d, f, _)
                }))
            }
            l.context = g, l.props = m, l.state = l.__s, (c = Gl.__r) && c(t), l.__d = !1, l.__v = t, l.__P = e, c = l.render(l.props, l.state, l.context), l.state = l.__s, null != l.getChildContext && (r = eh(eh({}, r), l.getChildContext())), h || null == l.getSnapshotBeforeUpdate || (_ = l.getSnapshotBeforeUpdate(d, f)), y = null != c && c.type === ih && null == c.key ? c.props.children : c, lh(e, Array.isArray(y) ? y : [y], t, n, r, i, s, o, a, u), l.base = t.__e, t.__h = null, l.__h.length && o.push(l), p && (l.__E = l.__ = null), l.__e = !1
        } else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Eh(n.__e, t, n, r, i, s, o, u);
        (c = Gl.diffed) && c(t)
    }
    catch (e) {
        t.__v = null, (u || null != s) && (t.__e = a, t.__h = !!u, s[s.indexOf(a)] = null), Gl.__e(e, t, n)
    }
}

function yh(e, t) {
    Gl.__c && Gl.__c(t, e), e.some((function(t) {
        try {
            e = t.__h, t.__h = [], e.some((function(e) {
                e.call(t)
            }))
        } catch (e) {
            Gl.__e(e, t.__v)
        }
    }))
}

function Eh(e, t, n, r, i, s, o, a) {
    var u, c, l, h = n.props,
        d = t.props,
        f = t.type,
        _ = 0;
    if ("svg" === f && (i = !0), null != s)
        for (; _ < s.length; _++)
            if ((u = s[_]) && "setAttribute" in u == !!f && (f ? u.localName === f : 3 === u.nodeType)) {
                e = u, s[_] = null;
                break
            }
    if (null == e) {
        if (null === f) return document.createTextNode(d);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), s = null, a = !1
    }
    if (null === f) h === d || a && e.data === d || (e.data = d);
    else {
        if (s = s && ql.call(e.childNodes), c = (h = n.props || Ql).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !a) {
            if (null != s)
                for (h = {}, _ = 0; _ < e.attributes.length; _++) h[e.attributes[_].name] = e.attributes[_].value;
            (l || c) && (l && (c && l.__html == c.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""))
        }
        if (function(e, t, n, r, i) {
                var s;
                for (s in n) "children" === s || "key" === s || s in t || ph(e, s, null, n[s], r);
                for (s in t) i && "function" != typeof t[s] || "children" === s || "key" === s || "value" === s || "checked" === s || n[s] === t[s] || ph(e, s, t[s], n[s], r)
            }(e, d, h, i, a), l) t.__k = [];
        else if (_ = t.props.children, lh(e, Array.isArray(_) ? _ : [_], t, n, r, i && "foreignObject" !== f, s, o, s ? s[0] : n.__k && oh(n, 0), a), null != s)
            for (_ = s.length; _--;) null != s[_] && th(s[_]);
        a || ("value" in d && void 0 !== (_ = d.value) && (_ !== e.value || "progress" === f && !_ || "option" === f && _ !== h.value) && ph(e, "value", _, h.value, !1), "checked" in d && void 0 !== (_ = d.checked) && _ !== e.checked && ph(e, "checked", _, h.checked, !1))
    }
    return e
}

function Sh(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t
    } catch (e) {
        Gl.__e(e, n)
    }
}

function Th(e, t, n) {
    var r, i;
    if (Gl.unmount && Gl.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Sh(r, null, t)), null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (e) {
            Gl.__e(e, t)
        }
        r.base = r.__P = null
    }
    if (r = e.__k)
        for (i = 0; i < r.length; i++) r[i] && Th(r[i], t, "function" != typeof e.type);
    n || null == e.__e || th(e.__e), e.__e = e.__d = void 0
}

function bh(e, t, n) {
    return this.constructor(e, n)
}

function Ah(e, t, n) {
    var r, i, s;
    Gl.__ && Gl.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, s = [], gh(t, e = (!r && n || t).__k = nh(ih, null, [e]), i || Ql, Ql, void 0 !== t.ownerSVGElement, !r && n ? [n] : i ? null : t.firstChild ? ql.call(t.childNodes) : null, s, !r && n ? n : i ? i.__e : t.firstChild, r), yh(s, e)
}

function Ih(e, t) {
    Ah(e, t, Ih)
}

function wh(e, t, n) {
    var r, i, s, o = eh({}, e.props);
    for (s in t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : o[s] = t[s];
    return arguments.length > 2 && (o.children = arguments.length > 3 ? ql.call(arguments, 2) : n), rh(e.type, o, r || e.key, i || e.ref, null)
}

function Rh(e, t) {
    var n = {
        __c: t = "__cC" + zl++,
        __: e,
        Consumer: function(e, t) {
            return e.children(t)
        },
        Provider: function(e) {
            var n, r;
            return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                return r
            }, this.shouldComponentUpdate = function(e) {
                this.props.value !== e.value && n.some(uh)
            }, this.sub = function(e) {
                n.push(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function() {
                    n.splice(n.indexOf(e), 1), t && t.call(e)
                }
            }), e.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
ql = Jl.slice, Gl = {
    __e: function(e, t) {
        for (var n, r, i; t = t.__;)
            if ((n = t.__c) && !n.__) try {
                if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), i = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), i = n.__d), i) return n.__E = n
            } catch (t) {
                e = t
            }
        throw e
    }
}, Wl = 0, sh.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = eh({}, this.state), "function" == typeof e && (e = e(eh({}, n), this.props)), e && eh(n, e), null != e && this.__v && (t && this.__h.push(t), uh(this))
}, sh.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), uh(this))
}, sh.prototype.render = ih, Kl = [], Yl = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ch.__r = 0, zl = 0;
var Ph, Dh, kh, Oh = 0,
    Ch = [],
    Lh = Gl.__b,
    Nh = Gl.__r,
    Mh = Gl.diffed,
    xh = Gl.__c,
    Fh = Gl.unmount;

function Uh(e, t) {
    Gl.__h && Gl.__h(Dh, e, Oh || t), Oh = 0;
    var n = Dh.__H || (Dh.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}), n.__[e]
}

function jh(e) {
    return Oh = 1, Bh(td, e)
}

function Bh(e, t, n) {
    var r = Uh(Ph++, 2);
    return r.t = e, r.__c || (r.__ = [n ? n(t) : td(void 0, t), function(e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
    }], r.__c = Dh), r.__
}

function Vh(e, t) {
    var n = Uh(Ph++, 3);
    !Gl.__s && ed(n.__H, t) && (n.__ = e, n.__H = t, Dh.__H.__h.push(n))
}

function Hh(e, t) {
    var n = Uh(Ph++, 4);
    !Gl.__s && ed(n.__H, t) && (n.__ = e, n.__H = t, Dh.__h.push(n))
}

function Xh(e) {
    return Oh = 5, Gh((function() {
        return {
            current: e
        }
    }), [])
}

function qh(e, t, n) {
    Oh = 6, Hh((function() {
        "function" == typeof e ? e(t()) : e && (e.current = t())
    }), null == n ? n : n.concat(e))
}

function Gh(e, t) {
    var n = Uh(Ph++, 7);
    return ed(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
}

function Wh(e, t) {
    return Oh = 8, Gh((function() {
        return e
    }), t)
}

function Kh(e) {
    var t = Dh.context[e.__c],
        n = Uh(Ph++, 9);
    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(Dh)), t.props.value) : e.__
}

function Yh(e, t) {
    Gl.useDebugValue && Gl.useDebugValue(t ? t(e) : e)
}

function $h(e) {
    var t = Uh(Ph++, 10),
        n = jh();
    return t.__ = e, Dh.componentDidCatch || (Dh.componentDidCatch = function(e) {
        t.__ && t.__(e), n[1](e)
    }), [n[0], function() {
        n[1](void 0)
    }]
}

function zh() {
    for (var e; e = Ch.shift();)
        if (e.__P) try {
            e.__H.__h.forEach(Jh), e.__H.__h.forEach(Zh), e.__H.__h = []
        } catch (Sl) {
            e.__H.__h = [], Gl.__e(Sl, e.__v)
        }
}
Gl.__b = function(e) {
    Dh = null, Lh && Lh(e)
}, Gl.__r = function(e) {
    Nh && Nh(e), Ph = 0;
    var t = (Dh = e.__c).__H;
    t && (t.__h.forEach(Jh), t.__h.forEach(Zh), t.__h = [])
}, Gl.diffed = function(e) {
    Mh && Mh(e);
    var t = e.__c;
    t && t.__H && t.__H.__h.length && (1 !== Ch.push(t) && kh === Gl.requestAnimationFrame || ((kh = Gl.requestAnimationFrame) || function(e) {
        var t, n = function() {
                clearTimeout(r), Qh && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
        Qh && (t = requestAnimationFrame(n))
    })(zh)), Dh = null
}, Gl.__c = function(e, t) {
    t.some((function(e) {
        try {
            e.__h.forEach(Jh), e.__h = e.__h.filter((function(e) {
                return !e.__ || Zh(e)
            }))
        } catch (gl) {
            t.some((function(e) {
                e.__h && (e.__h = [])
            })), t = [], Gl.__e(gl, e.__v)
        }
    })), xh && xh(e, t)
}, Gl.unmount = function(e) {
    Fh && Fh(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach((function(e) {
        try {
            Jh(e)
        } catch (e) {
            t = e
        }
    })), t && Gl.__e(t, n.__v))
};
var Qh = "function" == typeof requestAnimationFrame;

function Jh(e) {
    var t = Dh,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), Dh = t
}

function Zh(e) {
    var t = Dh;
    e.__c = e.__(), Dh = t
}

function ed(e, t) {
    return !e || e.length !== t.length || t.some((function(t, n) {
        return t !== e[n]
    }))
}

function td(e, t) {
    return "function" == typeof t ? t(e) : t
}

function nd(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function rd(e, t) {
    for (var n in e)
        if ("__source" !== n && !(n in t)) return !0;
    for (var r in t)
        if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1
}

function id(e) {
    this.props = e
}(id.prototype = new sh).isPureReactComponent = !0, id.prototype.shouldComponentUpdate = function(e, t) {
    return rd(this.props, e) || rd(this.state, t)
};
var sd = Gl.__b;
Gl.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), sd && sd(e)
};
var od = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function ad(e) {
    function t(t, n) {
        var r = nd({}, t);
        return delete r.ref, e(r, (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null)
    }
    return t.$$typeof = od, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var ud = function(e, t) {
        return null == e ? null : dh(dh(e).map(t))
    },
    cd = {
        map: ud,
        forEach: ud,
        count: function(e) {
            return e ? dh(e).length : 0
        },
        only: function(e) {
            var t = dh(e);
            if (1 !== t.length) throw "Children.only";
            return t[0]
        },
        toArray: dh
    },
    ld = Gl.__e;
Gl.__e = function(e, t, n) {
    if (e.then)
        for (var r, i = t; i = i.__;)
            if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
    ld(e, t, n)
};
var hd = Gl.unmount;

function dd() {
    this.__u = 0, this.t = null, this.__b = null
}

function fd(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e)
}

function _d() {
    this.u = null, this.o = null
}
Gl.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), hd && hd(e)
}, (dd.prototype = new sh).__c = function(e, t) {
    var n = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = fd(r.__v),
        s = !1,
        o = function() {
            s || (s = !0, n.__R = null, i ? i(a) : a())
        };
    n.__R = o;
    var a = function() {
            if (!--r.__u) {
                if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                            return e(t, n, r)
                        })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                    }(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (r.setState({
                        __e: r.__b = null
                    }); t = r.t.pop();) t.forceUpdate()
            }
        },
        u = !0 === t.__h;
    r.__u++ || u || r.setState({
        __e: r.__b = r.__v.__k[0]
    }), e.then(o, o)
}, dd.prototype.componentWillUnmount = function() {
    this.t = []
}, dd.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = function e(t, n, r) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                    "function" == typeof e.__c && e.__c()
                })), t.__c.__H = null), null != (t = nd({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                    return e(t, n, r)
                }))), t
            }(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var i = t.__e && nh(ih, null, e.fallback);
    return i && (i.__h = null), [nh(ih, null, t.__e ? null : e.children), i]
};
var pd = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
};

function md(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function vd(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function() {
        Ah(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(e) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        insertBefore: function(e, n) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        removeChild: function(e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
        }
    }), Ah(nh(md, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function gd(e, t) {
    return nh(vd, {
        __v: e,
        i: t
    })
}(_d.prototype = new sh).__e = function(e) {
    var t = this,
        n = fd(t.__v),
        r = t.o.get(e);
    return r[0]++,
        function(i) {
            var s = function() {
                t.props.revealOrder ? (r.push(i), pd(t, e, r)) : i()
            };
            n ? n(s) : s()
        }
}, _d.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = dh(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}, _d.prototype.componentDidUpdate = _d.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach((function(t, n) {
        pd(e, n, t)
    }))
};
var yd = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    Ed = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Sd = "undefined" != typeof document,
    Td = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
sh.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
    Object.defineProperty(sh.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
}));
var bd = Gl.event;

function Ad() {}

function Id() {
    return this.cancelBubble
}

function wd() {
    return this.defaultPrevented
}
Gl.event = function(e) {
    return bd && (e = bd(e)), e.persist = Ad, e.isPropagationStopped = Id, e.isDefaultPrevented = wd, e.nativeEvent = e
};
var Rd, Pd = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    Dd = Gl.vnode;
Gl.vnode = function(e) {
    var t = e.type,
        n = e.props,
        r = n;
    if ("string" == typeof t) {
        var i = -1 === t.indexOf("-");
        for (var s in r = {}, n) {
            var o = n[s];
            Sd && "children" === s && "noscript" === t || "value" === s && "defaultValue" in n && null == o || ("defaultValue" === s && "value" in n && null == n.value ? s = "value" : "download" === s && !0 === o ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + t) && !Td(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && Ed.test(s) ? s = s.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === o && (o = void 0), r[s] = o)
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = dh(n.children).forEach((function(e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
        }))), "select" == t && null != r.defaultValue && (r.value = dh(n.children).forEach((function(e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
        }))), e.props = r, n.class != n.className && (Pd.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", Pd))
    }
    e.$$typeof = yd, Dd && Dd(e)
};
var kd = Gl.__r;

function Od(e) {
    return !!e && e.$$typeof === yd
}
Gl.__r = function(e) {
    kd && kd(e), Rd = e.__c
};
var Cd = {
    useState: jh,
    useReducer: Bh,
    useEffect: Vh,
    useLayoutEffect: Hh,
    useRef: Xh,
    useImperativeHandle: qh,
    useMemo: Gh,
    useCallback: Wh,
    useContext: Kh,
    useDebugValue: Yh,
    version: "17.0.2",
    Children: cd,
    render: function(e, t, n) {
        return null == t.__k && (t.textContent = ""), Ah(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    hydrate: function(e, t, n) {
        return Ih(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    unmountComponentAtNode: function(e) {
        return !!e.__k && (Ah(null, e), !0)
    },
    createPortal: gd,
    createElement: nh,
    createContext: Rh,
    createFactory: function(e) {
        return nh.bind(null, e)
    },
    cloneElement: function(e) {
        return Od(e) ? wh.apply(null, arguments) : e
    },
    createRef: function() {
        return {
            current: null
        }
    },
    Fragment: ih,
    isValidElement: Od,
    findDOMNode: function(e) {
        return e && (e.base || 1 === e.nodeType && e) || null
    },
    Component: sh,
    PureComponent: id,
    memo: function(e, t) {
        function n(e) {
            var n = this.props.ref,
                r = n == e.ref;
            return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : rd(this.props, e)
        }

        function r(t) {
            return this.shouldComponentUpdate = n, nh(e, t)
        }
        return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
    },
    forwardRef: ad,
    flushSync: function(e, t) {
        return e(t)
    },
    unstable_batchedUpdates: function(e, t) {
        return e(t)
    },
    StrictMode: ih,
    Suspense: dd,
    SuspenseList: _d,
    lazy: function(e) {
        var t, n, r;

        function i(i) {
            if (t || (t = e()).then((function(e) {
                    n = e.default || e
                }), (function(e) {
                    r = e
                })), r) throw r;
            if (!n) throw t;
            return nh(n, i)
        }
        return i.displayName = "Lazy", i.__f = !0, i
    },
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(e) {
                    return Rd.__n[e.__c].props.value
                }
            }
        }
    }
};
const Ld = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? Vh : Hh;

function Nd(e) {
    const t = "function" == typeof e ? function(e) {
            let t;
            const n = new Set,
                r = (e, r) => {
                    const i = "function" == typeof e ? e(t) : e;
                    if (i !== t) {
                        const e = t;
                        t = r ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                    }
                },
                i = () => t,
                s = {
                    setState: r,
                    getState: i,
                    subscribe: (e, r, s) => r || s ? ((e, r = i, s = Object.is) => {
                        let o = r(t);

                        function a() {
                            const n = r(t);
                            if (!s(o, n)) {
                                const t = o;
                                e(o = n, t)
                            }
                        }
                        return n.add(a), () => n.delete(a)
                    })(e, r, s) : (n.add(e), () => n.delete(e)),
                    destroy: () => n.clear()
                };
            return t = e(r, i, s), s
        }(e) : e,
        n = (e = t.getState, n = Object.is) => {
            const [, r] = Bh(e => e + 1, 0), i = t.getState(), s = Xh(i), o = Xh(e), a = Xh(n), u = Xh(!1), c = Xh();
            let l;
            void 0 === c.current && (c.current = e(i));
            let h = !1;
            (s.current !== i || o.current !== e || a.current !== n || u.current) && (l = e(i), h = !n(c.current, l)), Ld(() => {
                h && (c.current = l), s.current = i, o.current = e, a.current = n, u.current = !1
            });
            const d = Xh(i);
            Ld(() => {
                const e = () => {
                        try {
                            const e = t.getState(),
                                n = o.current(e);
                            a.current(c.current, n) || (s.current = e, c.current = n, r())
                        } catch (e) {
                            u.current = !0, r()
                        }
                    },
                    n = t.subscribe(e);
                return t.getState() !== d.current && e(), n
            }, []);
            const f = h ? l : c.current;
            return Yh(f), f
        };
    return Object.assign(n, t), n[Symbol.iterator] = function() {
        const e = [n, t];
        return {
            next() {
                const t = e.length <= 0;
                return {
                    value: e.shift(),
                    done: t
                }
            }
        }
    }, n
}

function Md() {
    const e = Rh(void 0);
    return {
        Provider: ({
            initialStore: t,
            createStore: n,
            children: r
        }) => {
            const i = Xh();
            return i.current || (t && (n || (n = () => t)), i.current = n()), nh(e.Provider, {
                value: i.current
            }, r)
        },
        useStore: (t, n = Object.is) => {
            const r = Kh(e);
            if (!r) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return r(t, n)
        },
        useStoreApi: () => {
            const t = Kh(e);
            if (!t) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return Gh(() => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy
            }), [t])
        }
    }
}
const xd = e => (t, n, r) => {
    const i = r.subscribe;
    return r.subscribe = (e, t, n) => {
        let s = e;
        if (t) {
            const i = (null == n ? void 0 : n.equalityFn) || Object.is;
            let o = e(r.getState());
            s = n => {
                const r = e(n);
                if (!i(o, r)) {
                    const e = o;
                    t(o = r, e)
                }
            }, (null == n ? void 0 : n.fireImmediately) && t(o, o)
        }
        return i(s)
    }, e(t, n, r)
};
var Fd;
! function(e) {
    e[e.APPEAR = 0] = "APPEAR", e[e.APPEARING = 1] = "APPEARING", e[e.APPEARED = 2] = "APPEARED", e[e.ENTER = 3] = "ENTER", e[e.ENTERING = 4] = "ENTERING", e[e.ENTERED = 5] = "ENTERED", e[e.EXIT = 6] = "EXIT", e[e.EXITING = 7] = "EXITING", e[e.EXITED = 8] = "EXITED"
}(Fd || (Fd = {}));
var Ud, jd = function() {},
    Bd = setTimeout(jd),
    Vd = function(e) {
        var t = e.children,
            n = e.in,
            r = void 0 !== n && n,
            i = e.appear,
            s = void 0 !== i && i,
            o = e.enter,
            a = void 0 === o || o,
            u = e.exit,
            c = void 0 === u || u,
            l = e.duration,
            h = void 0 === l ? 500 : l,
            d = e.alwaysMounted,
            f = void 0 !== d && d,
            _ = e.onEnter,
            p = void 0 === _ ? jd : _,
            m = e.onEntering,
            v = void 0 === m ? jd : m,
            g = e.onEntered,
            y = void 0 === g ? jd : g,
            E = e.onExit,
            S = void 0 === E ? jd : E,
            T = e.onExiting,
            b = void 0 === T ? jd : T,
            A = e.onExited,
            I = void 0 === A ? jd : A,
            w = Xh(Bd),
            R = !1,
            P = jh((function() {
                return R = !0, r ? s ? Fd.APPEAR : Fd.APPEARED : Fd.EXITED
            })),
            D = P[0],
            k = P[1];
        Vh((function() {
            switch (D) {
                case Fd.APPEAR:
                    p(), k(Fd.APPEARING);
                    break;
                case Fd.APPEARING:
                    v(), w.current = setTimeout((function() {
                        k(Fd.APPEARED)
                    }), h);
                    break;
                case Fd.APPEARED:
                    y();
                    break;
                case Fd.ENTER:
                    p(), k(Fd.ENTERING);
                    break;
                case Fd.ENTERING:
                    v(), w.current = setTimeout((function() {
                        k(Fd.ENTERED)
                    }), h);
                    break;
                case Fd.ENTERED:
                    y();
                    break;
                case Fd.EXIT:
                    S(), k(Fd.EXITING);
                    break;
                case Fd.EXITING:
                    b(), w.current = setTimeout((function() {
                        k(Fd.EXITED)
                    }), h);
                    break;
                case Fd.EXITED:
                    I()
            }
            return function() {
                clearTimeout(w.current)
            }
        }), [D]), Hh((function() {
            if (!R) switch (!0) {
                case !(!r || !a):
                    k(Fd.ENTER);
                    break;
                case !(!r || a):
                    k(Fd.ENTERED);
                    break;
                case !(r || !c):
                    k(Fd.EXIT);
                    break;
                case !(r || c):
                    k(Fd.EXITED)
            }
        }), [r]);
        var O = Gh((function() {
            return {
                appear: D === Fd.APPEAR,
                appearActive: D === Fd.APPEARING,
                appearDone: D === Fd.APPEARED,
                enter: D === Fd.ENTER,
                enterActive: D === Fd.ENTERING,
                enterDone: D === Fd.ENTERED,
                exit: D === Fd.EXIT,
                exitActive: D === Fd.EXITING,
                exitDone: D === Fd.EXITED
            }
        }), [D]);
        return (f || D !== Fd.EXITED) && t(O)
    };

function Hd() {
    return (Hd = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}! function(e) {
    e.APPEAR = "-appear", e.APPEAR_ACTIVE = "-appear-active", e.APPEAR_DONE = "-appear-done", e.ENTER = "-enter", e.ENTER_ACTIVE = "-enter-active", e.ENTER_DONE = "-enter-done", e.EXIT = "-exit", e.EXIT_ACTIVE = "-exit-active", e.EXIT_DONE = "-exit-done"
}(Ud || (Ud = {}));
var Xd = ["children", "styles"],
    qd = function(e) {
        var t = e.children,
            n = e.styles,
            r = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    s = Object.keys(e);
                for (r = 0; r < s.length; r++) t.indexOf(n = s[r]) >= 0 || (i[n] = e[n]);
                return i
            }(e, Xd);
        return nh(Vd, r, (function(e) {
            var r = t.props.style,
                i = Gh((function() {
                    return Hd({}, function(e, t) {
                        switch (!0) {
                            case e.appear:
                                return t.appear;
                            case e.appearActive:
                                return Hd({}, t.appear, t.appearActive);
                            case e.appearDone:
                                return t.appearDone;
                            case e.enter:
                                return t.enter;
                            case e.enterActive:
                                return Hd({}, t.enter, t.enterActive);
                            case e.enterDone:
                                return t.enterDone;
                            case e.exit:
                                return t.exit;
                            case e.exitActive:
                                return Hd({}, t.exit, t.exitActive);
                            case e.exitDone:
                                return t.exitDone;
                            default:
                                return {}
                        }
                    }(e, n), r)
                }), [r, n, e]);
            return wh(t, {
                style: i
            })
        }))
    },
    Gd = 0;

function Wd(e, t, n, r, i) {
    var s, o, a = {};
    for (o in t) "ref" == o ? s = t[o] : a[o] = t[o];
    var u = {
        type: e,
        props: a,
        key: n,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --Gd,
        __source: r,
        __self: i
    };
    if ("function" == typeof e && (s = e.defaultProps))
        for (o in s) void 0 === a[o] && (a[o] = s[o]);
    return Gl.vnode && Gl.vnode(u), u
}

function Kd(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.__data__ = new Tt; ++t < n;) this.add(e[t])
}

function Yd(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
    return !1
}

function $d(e, t) {
    return e.has(t)
}

function zd(e, t, n, r, i, s) {
    var o = 1 & n,
        a = e.length,
        u = t.length;
    if (a != u && !(o && u > a)) return !1;
    var c = s.get(e);
    if (c && s.get(t)) return c == t;
    var l = -1,
        h = !0,
        d = 2 & n ? new Kd : void 0;
    for (s.set(e, t), s.set(t, e); ++l < a;) {
        var f = e[l],
            _ = t[l];
        if (r) var p = o ? r(_, f, l, t, e, s) : r(f, _, l, e, t, s);
        if (void 0 !== p) {
            if (p) continue;
            h = !1;
            break
        }
        if (d) {
            if (!Yd(t, (function(e, t) {
                    if (!$d(d, t) && (f === e || i(f, e, n, r, s))) return d.push(t)
                }))) {
                h = !1;
                break
            }
        } else if (f !== _ && !i(f, _, n, r, s)) {
            h = !1;
            break
        }
    }
    return s.delete(e), s.delete(t), h
}

function Qd(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach((function(e, r) {
        n[++t] = [r, e]
    })), n
}

function Jd(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach((function(e) {
        n[++t] = e
    })), n
}
Kd.prototype.add = Kd.prototype.push = function(e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this
}, Kd.prototype.has = function(e) {
    return this.__data__.has(e)
};
var Zd = Be ? Be.prototype : void 0,
    ef = Zd ? Zd.valueOf : void 0,
    tf = Object.prototype.hasOwnProperty,
    nf = Object.prototype.hasOwnProperty;

function rf(e, t, n, r, i) {
    return e === t || (null == e || null == t || !Ye(e) && !Ye(t) ? e != e && t != t : function(e, t, n, r, i, s) {
        var o = xe(e),
            a = xe(t),
            u = o ? "[object Array]" : pr(e),
            c = a ? "[object Array]" : pr(t),
            l = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u),
            h = "[object Object]" == (c = "[object Arguments]" == c ? "[object Object]" : c),
            d = u == c;
        if (d && yn(e)) {
            if (!yn(t)) return !1;
            o = !0, l = !1
        }
        if (d && !l) return s || (s = new sn), o || kn(e) ? zd(e, t, n, r, i, s) : function(e, t, n, r, i, s, o) {
            switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !s(new vr(e), new vr(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return mt(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var a = Qd;
                case "[object Set]":
                    var u = 1 & r;
                    if (a || (a = Jd), e.size != t.size && !u) return !1;
                    var c = o.get(e);
                    if (c) return c == t;
                    r |= 2, o.set(e, t);
                    var l = zd(a(e), a(t), r, i, s, o);
                    return o.delete(e), l;
                case "[object Symbol]":
                    if (ef) return ef.call(e) == ef.call(t)
            }
            return !1
        }(e, t, u, n, r, i, s);
        if (!(1 & n)) {
            var f = l && nf.call(e, "__wrapped__"),
                _ = h && nf.call(t, "__wrapped__");
            if (f || _) {
                var p = f ? e.value() : e,
                    m = _ ? t.value() : t;
                return s || (s = new sn), i(p, m, n, r, s)
            }
        }
        return !!d && (s || (s = new sn), function(e, t, n, r, i, s) {
            var o = 1 & n,
                a = rr(e),
                u = a.length;
            if (u != rr(t).length && !o) return !1;
            for (var c = u; c--;) {
                var l = a[c];
                if (!(o ? l in t : tf.call(t, l))) return !1
            }
            var h = s.get(e);
            if (h && s.get(t)) return h == t;
            var d = !0;
            s.set(e, t), s.set(t, e);
            for (var f = o; ++c < u;) {
                var _ = e[l = a[c]],
                    p = t[l];
                if (r) var m = o ? r(p, _, l, t, e, s) : r(_, p, l, e, t, s);
                if (!(void 0 === m ? _ === p || i(_, p, n, r, s) : m)) {
                    d = !1;
                    break
                }
                f || (f = "constructor" == l)
            }
            if (d && !f) {
                var v = e.constructor,
                    g = t.constructor;
                v != g && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof g && g instanceof g) && (d = !1)
            }
            return s.delete(e), s.delete(t), d
        }(e, t, n, r, i, s))
    }(e, t, n, r, rf, i))
}

function sf(e) {
    return e == e && !Ze(e)
}

function of (e, t) {
    return function(n) {
        return null != n && n[e] === t && (void 0 !== t || e in Object(n))
    }
}

function af(e) {
    return "function" == typeof e ? e : null == e ? Nr : "object" == typeof e ? xe(e) ? function(e, t) {
        return Je(e) && sf(t) ? of (Ct(e), t) : function(n) {
            var r = Nt(n, e);
            return void 0 === r && r === t ? cl(n, e) : rf(t, r, 3)
        }
    }(e[0], e[1]) : function(e) {
        var t = function(e) {
            for (var t = Bn(e), n = t.length; n--;) {
                var r = t[n],
                    i = e[r];
                t[n] = [r, i, sf(i)]
            }
            return t
        }(e);
        return 1 == t.length && t[0][2] ? of (t[0][0], t[0][1]) : function(n) {
            return n === e || function(e, t, n, r) {
                var i = n.length,
                    s = i;
                if (null == e) return !s;
                for (e = Object(e); i--;) {
                    var o = n[i];
                    if (o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1
                }
                for (; ++i < s;) {
                    var a = (o = n[i])[0],
                        u = e[a],
                        c = o[1];
                    if (o[2]) {
                        if (void 0 === u && !(a in e)) return !1
                    } else {
                        var l, h = new sn;
                        if (!(void 0 === l ? rf(c, u, 3, void 0, h) : l)) return !1
                    }
                }
                return !0
            }(n, 0, t)
        }
    }(e) : function(e) {
        return Je(e) ? function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }(Ct(e)) : function(e) {
            return function(t) {
                return Lt(t, e)
            }
        }(e)
    }(e)
}
var uf = Math.max,
    cf = Math.min;

function lf(e, t, n) {
    var r = null == e ? 0 : e.length;
    if (!r) return -1;
    var i = r - 1;
    return void 0 !== n && (i = ho(n), i = n < 0 ? uf(r + i, 0) : cf(i, r - 1)),
        function(e, t, n, r) {
            e.length;
            for (var i = n + 1; i--;)
                if (t(e[i], i, e)) return i;
            return -1
        }(e, af(t), i)
}

function hf(e, t) {
    return rf(e, t)
}
var df = [],
    ff = [];

function _f(e, t) {
    if (e && "undefined" != typeof document) {
        var n, r = !0 === t.prepend ? "prepend" : "append",
            i = !0 === t.singleTag,
            s = "string" == typeof t.container ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
        if (i) {
            var o = df.indexOf(s); - 1 === o && (o = df.push(s) - 1, ff[o] = {}), n = ff[o] && ff[o][r] ? ff[o][r] : ff[o][r] = a()
        } else n = a();
        65279 === e.charCodeAt(0) && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e))
    }

    function a() {
        var e = document.createElement("style");
        if (e.setAttribute("type", "text/css"), t.attributes)
            for (var n = Object.keys(t.attributes), i = 0; i < n.length; i++) e.setAttribute(n[i], t.attributes[n[i]]);
        var o = "prepend" === r ? "afterbegin" : "beforeend";
        return s.insertAdjacentElement(o, e), e
    }
}
var pf = nn((function(e, t) {
    /*! For license information please see hls-parser.min.js.LICENSE.txt */
    self,
    e.exports = function() {
        return e = {
                851: (e, t, n) => {
                    var r = n(771),
                        i = r.getOptions,
                        s = r.setOptions,
                        o = n(463),
                        a = n(367),
                        u = n(890);
                    e.exports = {
                        parse: o,
                        stringify: a,
                        types: u,
                        getOptions: i,
                        setOptions: s
                    }
                },
                463: (e, t, n) => {
                    function r(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = s(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw o
                                }
                            }
                        }
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    s = void 0;
                                try {
                                    for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, s = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw s
                                    }
                                }
                                return n
                            }
                        }(e, t) || s(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function s(e, t) {
                        if (e) {
                            if ("string" == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                        }
                    }

                    function o(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var a = n(771),
                        u = n(890),
                        c = u.Rendition,
                        l = u.Variant,
                        h = u.SessionData,
                        d = u.Key,
                        f = u.MediaInitializationSection,
                        _ = u.DateRange,
                        p = u.SpliceInfo,
                        m = u.MasterPlaylist,
                        v = u.MediaPlaylist,
                        g = u.Segment,
                        y = u.PartialSegment,
                        E = u.RenditionReport;

                    function S(e) {
                        return a.trim(e, '"')
                    }

                    function T(e) {
                        var t = a.splitAt(e, ",");
                        return {
                            duration: a.toNumber(t[0]),
                            title: decodeURIComponent(escape(t[1]))
                        }
                    }

                    function b(e) {
                        var t = a.splitAt(e, "@");
                        return {
                            length: a.toNumber(t[0]),
                            offset: t[1] ? a.toNumber(t[1]) : -1
                        }
                    }

                    function A(e, t) {
                        t.IV && e.compatibleVersion < 2 && (e.compatibleVersion = 2), (t.KEYFORMAT || t.KEYFORMATVERSIONS) && e.compatibleVersion < 5 && (e.compatibleVersion = 5)
                    }

                    function I(e) {
                        var t = a.splitByCommaWithPreservingQuotes(e),
                            n = {};
                        return t.forEach((function(e) {
                            var t, r, s = i(a.splitAt(e, "="), 2),
                                o = s[0],
                                u = s[1],
                                c = S(u);
                            switch (o) {
                                case "URI":
                                    n[o] = c;
                                    break;
                                case "START-DATE":
                                case "END-DATE":
                                    n[o] = new Date(c);
                                    break;
                                case "IV":
                                    n[o] = (t = c, 16 !== (r = a.hexToByteSequence(t)).length && a.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r);
                                    break;
                                case "BYTERANGE":
                                    n[o] = b(c);
                                    break;
                                case "RESOLUTION":
                                    n[o] = function(e) {
                                        var t = a.splitAt(e, "x");
                                        return {
                                            width: a.toNumber(t[0]),
                                            height: a.toNumber(t[1])
                                        }
                                    }(c);
                                    break;
                                case "END-ON-NEXT":
                                case "DEFAULT":
                                case "AUTOSELECT":
                                case "FORCED":
                                case "PRECISE":
                                case "CAN-BLOCK-RELOAD":
                                case "INDEPENDENT":
                                case "GAP":
                                    n[o] = "YES" === c;
                                    break;
                                case "DURATION":
                                case "PLANNED-DURATION":
                                case "BANDWIDTH":
                                case "AVERAGE-BANDWIDTH":
                                case "FRAME-RATE":
                                case "TIME-OFFSET":
                                case "CAN-SKIP-UNTIL":
                                case "HOLD-BACK":
                                case "PART-HOLD-BACK":
                                case "PART-TARGET":
                                case "BYTERANGE-START":
                                case "BYTERANGE-LENGTH":
                                case "LAST-MSN":
                                case "LAST-PART":
                                case "SKIPPED-SEGMENTS":
                                    n[o] = a.toNumber(c);
                                    break;
                                default:
                                    o.startsWith("SCTE35-") ? n[o] = a.hexToByteSequence(c) : o.startsWith("X-") ? n[o] = function(e) {
                                        return e.startsWith('"') ? S(e) : e.startsWith("0x") || e.startsWith("0X") ? a.hexToByteSequence(e) : a.toNumber(e)
                                    }(u) : n[o] = c
                            }
                        })), n
                    }

                    function w() {
                        a.INVALIDPLAYLIST("The file contains both media and master playlist tags.")
                    }

                    function R(e, t, n) {
                        var i, s = (i = t.attributes, new c({
                                type: i.TYPE,
                                uri: i.URI,
                                groupId: i["GROUP-ID"],
                                language: i.LANGUAGE,
                                assocLanguage: i["ASSOC-LANGUAGE"],
                                name: i.NAME,
                                isDefault: i.DEFAULT,
                                autoselect: i.AUTOSELECT,
                                forced: i.FORCED,
                                instreamId: i["INSTREAM-ID"],
                                characteristics: i.CHARACTERISTICS,
                                channels: i.CHANNELS
                            })),
                            o = e[a.camelify(n)],
                            u = function(e, t) {
                                var n, i = !1,
                                    s = r(e);
                                try {
                                    for (s.s(); !(n = s.n()).done;) {
                                        var o = n.value;
                                        if (o.name === t.name) return "All EXT-X-MEDIA tags in the same Group MUST have different NAME attributes.";
                                        o.isDefault && (i = !0)
                                    }
                                } catch (e) {
                                    s.e(e)
                                } finally {
                                    s.f()
                                }
                                return i && t.isDefault ? "EXT-X-MEDIA A Group MUST NOT have more than one member with a DEFAULT attribute of YES." : ""
                            }(o, s);
                        u && a.INVALIDPLAYLIST(u), o.push(s), s.isDefault && (e.currentRenditions[a.camelify(n)] = o.length - 1)
                    }

                    function P(e, t, n, i, s) {
                        var o, u = new l({
                                uri: n,
                                bandwidth: t.BANDWIDTH,
                                averageBandwidth: t["AVERAGE-BANDWIDTH"],
                                codecs: t.CODECS,
                                resolution: t.RESOLUTION,
                                frameRate: t["FRAME-RATE"],
                                hdcpLevel: t["HDCP-LEVEL"]
                            }),
                            c = r(e);
                        try {
                            for (c.s(); !(o = c.n()).done;) {
                                var h = o.value;
                                if ("EXT-X-MEDIA" === h.name) {
                                    var d = h.attributes,
                                        f = d.TYPE;
                                    if (f && d["GROUP-ID"] || a.INVALIDPLAYLIST("EXT-X-MEDIA TYPE attribute is REQUIRED."), t[f] === d["GROUP-ID"] && (R(u, h, f), "CLOSED-CAPTIONS" === f)) {
                                        var _, p = r(u.closedCaptions);
                                        try {
                                            for (p.s(); !(_ = p.n()).done;) {
                                                var m = _.value.instreamId;
                                                if (m && m.startsWith("SERVICE") && s.compatibleVersion < 7) {
                                                    s.compatibleVersion = 7;
                                                    break
                                                }
                                            }
                                        } catch (e) {
                                            p.e(e)
                                        } finally {
                                            p.f()
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return function(e, t, n) {
                            ["AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(r) {
                                "CLOSED-CAPTIONS" === r && "NONE" === e[r] ? (n.isClosedCaptionsNone = !0, t.closedCaptions = []) : e[r] && !t[a.camelify(r)].find((function(t) {
                                    return t.groupId === e[r]
                                })) && a.INVALIDPLAYLIST("".concat(r, " attribute MUST match the value of the GROUP-ID attribute of an EXT-X-MEDIA tag whose TYPE attribute is ").concat(r, "."))
                            }))
                        }(t, u, s), u.isIFrameOnly = i, u
                    }

                    function D(e, t) {
                        if (e.method !== t.method) return !1;
                        if (e.uri !== t.uri) return !1;
                        if (e.iv) {
                            if (!t.iv) return !1;
                            if (e.iv.length !== t.iv.length) return !1;
                            for (var n = 0; n < e.iv.length; n++)
                                if (e.iv[n] !== t.iv[n]) return !1
                        } else if (t.iv) return !1;
                        return e.format === t.format && e.formatVersion === t.formatVersion
                    }

                    function k(e, t, n, r, i, s, o) {
                        for (var u = new g({
                                uri: t,
                                mediaSequenceNumber: i,
                                discontinuitySequence: s
                            }), c = !1, l = !1, h = function(t) {
                                var n = e[t],
                                    r = n.name,
                                    i = n.value,
                                    s = n.attributes;
                                if ("EXTINF" === r) !Number.isInteger(i.duration) && o.compatibleVersion < 3 && (o.compatibleVersion = 3), Math.round(i.duration) > o.targetDuration && a.INVALIDPLAYLIST("EXTINF duration, when rounded to the nearest integer, MUST be less than or equal to the target duration"), u.duration = i.duration, u.title = i.title;
                                else if ("EXT-X-BYTERANGE" === r) o.compatibleVersion < 4 && (o.compatibleVersion = 4), u.byterange = i;
                                else if ("EXT-X-DISCONTINUITY" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-DISCONTINUITY must appear before the first EXT-X-PART tag of the Parent Segment."), u.discontinuity = !0;
                                else if ("EXT-X-KEY" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-KEY must appear before the first EXT-X-PART tag of the Parent Segment."), A(o, s), u.key = new d({
                                    method: s.METHOD,
                                    uri: s.URI,
                                    iv: s.IV,
                                    format: s.KEYFORMAT,
                                    formatVersion: s.KEYFORMATVERSIONS
                                });
                                else if ("EXT-X-MAP" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-MAP must appear before the first EXT-X-PART tag of the Parent Segment."), o.compatibleVersion < 5 && (o.compatibleVersion = 5), o.hasMap = !0, u.map = new f({
                                    uri: s.URI,
                                    byterange: s.BYTERANGE
                                });
                                else if ("EXT-X-PROGRAM-DATE-TIME" === r) u.programDateTime = i;
                                else if ("EXT-X-DATERANGE" === r) {
                                    var h = {};
                                    Object.keys(s).forEach((function(e) {
                                        (e.startsWith("SCTE35-") || e.startsWith("X-")) && (h[e] = s[e])
                                    })), u.dateRange = new _({
                                        id: s.ID,
                                        classId: s.CLASS,
                                        start: s["START-DATE"],
                                        end: s["END-DATE"],
                                        duration: s.DURATION,
                                        plannedDuration: s["PLANNED-DURATION"],
                                        endOnNext: s["END-ON-NEXT"],
                                        attributes: h
                                    })
                                } else if ("EXT-X-CUE-OUT" === r) u.markers.push(new p({
                                    type: "OUT",
                                    duration: i
                                }));
                                else if ("EXT-X-CUE-IN" === r) u.markers.push(new p({
                                    type: "IN"
                                }));
                                else if ("EXT-X-CUE-OUT-CONT" === r || "EXT-X-CUE" === r || "EXT-OATCLS-SCTE35" === r || "EXT-X-ASSET" === r || "EXT-X-SCTE35" === r) u.markers.push(new p({
                                    type: "RAW",
                                    tagName: r,
                                    value: i
                                }));
                                else if ("EXT-X-PRELOAD-HINT" !== r || s.TYPE)
                                    if ("EXT-X-PRELOAD-HINT" === r && "PART" === s.TYPE && l) a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist.");
                                    else if ("EXT-X-PART" !== r && "EXT-X-PRELOAD-HINT" !== r || s.URI) {
                                    if ("EXT-X-PRELOAD-HINT" === r && "MAP" === s.TYPE) c && a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist."), c = !0, o.hasMap = !0, u.map = new f({
                                        hint: !0,
                                        uri: s.URI,
                                        byterange: {
                                            length: s["BYTERANGE-LENGTH"],
                                            offset: s["BYTERANGE-START"] || 0
                                        }
                                    });
                                    else if ("EXT-X-PART" === r || "EXT-X-PRELOAD-HINT" === r && "PART" === s.TYPE) {
                                        "EXT-X-PART" !== r || s.DURATION || a.INVALIDPLAYLIST("EXT-X-PART: DURATION attribute is mandatory"), "EXT-X-PRELOAD-HINT" === r && (l = !0);
                                        var m = new y({
                                            hint: "EXT-X-PRELOAD-HINT" === r,
                                            uri: s.URI,
                                            byterange: "EXT-X-PART" === r ? s.BYTERANGE : {
                                                length: s["BYTERANGE-LENGTH"],
                                                offset: s["BYTERANGE-START"] || 0
                                            },
                                            duration: s.DURATION,
                                            independent: s.INDEPENDENT,
                                            gap: s.GAP
                                        });
                                        u.parts.push(m)
                                    }
                                } else a.INVALIDPLAYLIST("EXT-X-PART / EXT-X-PRELOAD-HINT: URI attribute is mandatory");
                                else a.INVALIDPLAYLIST("EXT-X-PRELOAD-HINT: TYPE attribute is mandatory")
                            }, m = n; m <= r; m++) h(m);
                        return u
                    }

                    function O(e, t, n, r, i) {
                        var s = t.discontinuity,
                            o = t.key,
                            u = t.map,
                            c = t.byterange,
                            l = t.uri;
                        if (s && (t.discontinuitySequence = n + 1), o || (t.key = r), u || (t.map = i), c && -1 === c.offset) {
                            var h = e.segments;
                            if (h.length > 0) {
                                var d = h[h.length - 1];
                                d.byterange && d.uri === l ? c.offset = d.byterange.offset + d.byterange.length : a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST be a sub-range of the same media resource")
                            } else a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST appear in the Playlist file")
                        }
                        return e.segments.push(t), [t.discontinuitySequence, t.key, t.map]
                    }

                    function C(e, t) {
                        var n = i(function(e) {
                                var t = e.indexOf(":");
                                return -1 === t ? [e.slice(1).trim(), null] : [e.slice(1, t).trim(), e.slice(t + 1).trim()]
                            }(e), 2),
                            r = n[0],
                            s = n[1],
                            o = function(e) {
                                switch (e) {
                                    case "EXTM3U":
                                    case "EXT-X-VERSION":
                                        return "Basic";
                                    case "EXTINF":
                                    case "EXT-X-BYTERANGE":
                                    case "EXT-X-DISCONTINUITY":
                                    case "EXT-X-KEY":
                                    case "EXT-X-MAP":
                                    case "EXT-X-PROGRAM-DATE-TIME":
                                    case "EXT-X-DATERANGE":
                                    case "EXT-X-CUE-OUT":
                                    case "EXT-X-CUE-IN":
                                    case "EXT-X-CUE-OUT-CONT":
                                    case "EXT-X-CUE":
                                    case "EXT-OATCLS-SCTE35":
                                    case "EXT-X-ASSET":
                                    case "EXT-X-SCTE35":
                                    case "EXT-X-PART":
                                    case "EXT-X-PRELOAD-HINT":
                                        return "Segment";
                                    case "EXT-X-TARGETDURATION":
                                    case "EXT-X-MEDIA-SEQUENCE":
                                    case "EXT-X-DISCONTINUITY-SEQUENCE":
                                    case "EXT-X-ENDLIST":
                                    case "EXT-X-PLAYLIST-TYPE":
                                    case "EXT-X-I-FRAMES-ONLY":
                                    case "EXT-X-SERVER-CONTROL":
                                    case "EXT-X-PART-INF":
                                    case "EXT-X-RENDITION-REPORT":
                                    case "EXT-X-SKIP":
                                        return "MediaPlaylist";
                                    case "EXT-X-MEDIA":
                                    case "EXT-X-STREAM-INF":
                                    case "EXT-X-I-FRAME-STREAM-INF":
                                    case "EXT-X-SESSION-DATA":
                                    case "EXT-X-SESSION-KEY":
                                        return "MasterPlaylist";
                                    case "EXT-X-INDEPENDENT-SEGMENTS":
                                    case "EXT-X-START":
                                        return "MediaorMasterPlaylist";
                                    default:
                                        return "Unknown"
                                }
                            }(r);
                        if (function(e, t) {
                                if ("Segment" === e || "MediaPlaylist" === e) return void 0 === t.isMasterPlaylist ? void(t.isMasterPlaylist = !1) : void(t.isMasterPlaylist && w());
                                if ("MasterPlaylist" === e) {
                                    if (void 0 === t.isMasterPlaylist) return void(t.isMasterPlaylist = !0);
                                    !1 === t.isMasterPlaylist && w()
                                }
                            }(o, t), "Unknown" === o) return null;
                        "MediaPlaylist" === o && "EXT-X-RENDITION-REPORT" !== r && (t.hash[r] && a.INVALIDPLAYLIST("There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist"), t.hash[r] = !0);
                        var u = i(function(e, t) {
                            switch (e) {
                                case "EXTM3U":
                                case "EXT-X-DISCONTINUITY":
                                case "EXT-X-ENDLIST":
                                case "EXT-X-I-FRAMES-ONLY":
                                case "EXT-X-INDEPENDENT-SEGMENTS":
                                case "EXT-X-CUE-IN":
                                    return [null, null];
                                case "EXT-X-VERSION":
                                case "EXT-X-TARGETDURATION":
                                case "EXT-X-MEDIA-SEQUENCE":
                                case "EXT-X-DISCONTINUITY-SEQUENCE":
                                case "EXT-X-CUE-OUT":
                                    return [a.toNumber(t), null];
                                case "EXT-X-KEY":
                                case "EXT-X-MAP":
                                case "EXT-X-DATERANGE":
                                case "EXT-X-MEDIA":
                                case "EXT-X-STREAM-INF":
                                case "EXT-X-I-FRAME-STREAM-INF":
                                case "EXT-X-SESSION-DATA":
                                case "EXT-X-SESSION-KEY":
                                case "EXT-X-START":
                                case "EXT-X-SERVER-CONTROL":
                                case "EXT-X-PART-INF":
                                case "EXT-X-PART":
                                case "EXT-X-PRELOAD-HINT":
                                case "EXT-X-RENDITION-REPORT":
                                case "EXT-X-SKIP":
                                    return [null, I(t)];
                                case "EXTINF":
                                    return [T(t), null];
                                case "EXT-X-BYTERANGE":
                                    return [b(t), null];
                                case "EXT-X-PROGRAM-DATE-TIME":
                                    return [new Date(t), null];
                                case "EXT-X-PLAYLIST-TYPE":
                                default:
                                    return [t, null]
                            }
                        }(r, s), 2);
                        return {
                            name: r,
                            category: o,
                            value: u[0],
                            attributes: u[1]
                        }
                    }
                    e.exports = function(e) {
                        var t = {
                                version: void 0,
                                isMasterPlaylist: void 0,
                                hasMap: !1,
                                targetDuration: 0,
                                compatibleVersion: 1,
                                isClosedCaptionsNone: !1,
                                hash: {}
                            },
                            n = function(e, t) {
                                var n;
                                return t.isMasterPlaylist ? n = function(e, t) {
                                    var n, s = new m,
                                        o = r(e.entries());
                                    try {
                                        for (o.s(); !(n = o.n()).done;) {
                                            var u = i(n.value, 2),
                                                c = u[0],
                                                l = u[1],
                                                f = l.name,
                                                _ = l.value,
                                                p = l.attributes;
                                            if ("EXT-X-VERSION" === f) s.version = _;
                                            else if ("EXT-X-STREAM-INF" === f) {
                                                var v = e[c + 1];
                                                ("string" != typeof v || v.startsWith("#EXT")) && a.INVALIDPLAYLIST("EXT-X-STREAM-INF must be followed by a URI line");
                                                var g = P(e, p, v, !1, t);
                                                g && s.variants.push(g)
                                            } else if ("EXT-X-I-FRAME-STREAM-INF" === f) {
                                                var y = P(e, p, p.URI, !0, t);
                                                y && s.variants.push(y)
                                            } else "EXT-X-SESSION-DATA" === f ? function() {
                                                var e = new h({
                                                    id: p["DATA-ID"],
                                                    value: p.VALUE,
                                                    uri: p.URI,
                                                    language: p.LANGUAGE
                                                });
                                                s.sessionDataList.find((function(t) {
                                                    return t.id === e.id && t.language === e.language
                                                })) && a.INVALIDPLAYLIST("A Playlist MUST NOT contain more than one EXT-X-SESSION-DATA tag with the same DATA-ID attribute and the same LANGUAGE attribute."), s.sessionDataList.push(e)
                                            }() : "EXT-X-SESSION-KEY" === f ? function() {
                                                "NONE" === p.METHOD && a.INVALIDPLAYLIST("EXT-X-SESSION-KEY: The value of the METHOD attribute MUST NOT be NONE");
                                                var e = new d({
                                                    method: p.METHOD,
                                                    uri: p.URI,
                                                    iv: p.IV,
                                                    format: p.KEYFORMAT,
                                                    formatVersion: p.KEYFORMATVERSIONS
                                                });
                                                s.sessionKeyList.find((function(t) {
                                                    return D(t, e)
                                                })) && a.INVALIDPLAYLIST("A Master Playlist MUST NOT contain more than one EXT-X-SESSION-KEY tag with the same METHOD, URI, IV, KEYFORMAT, and KEYFORMATVERSIONS attribute values."), A(t, p), s.sessionKeyList.push(e)
                                            }() : "EXT-X-INDEPENDENT-SEGMENTS" === f ? (s.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), s.independentSegments = !0) : "EXT-X-START" === f && (s.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof p["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), s.start = {
                                                offset: p["TIME-OFFSET"],
                                                precise: p.PRECISE || !1
                                            })
                                        }
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                    if (t.isClosedCaptionsNone) {
                                        var E, S = r(s.variants);
                                        try {
                                            for (S.s(); !(E = S.n()).done;) E.value.closedCaptions.length > 0 && a.INVALIDPLAYLIST("If there is a variant with CLOSED-CAPTIONS attribute of NONE, all EXT-X-STREAM-INF tags MUST have this attribute with a value of NONE")
                                        } catch (e) {
                                            S.e(e)
                                        } finally {
                                            S.f()
                                        }
                                    }
                                    return s
                                }(e, t) : !(n = function(e, t) {
                                    var n, s = new v,
                                        o = -1,
                                        u = 0,
                                        c = !1,
                                        l = 0,
                                        h = null,
                                        d = null,
                                        f = !1,
                                        _ = r(e.entries());
                                    try {
                                        for (_.s(); !(n = _.n()).done;) {
                                            var p = i(n.value, 2),
                                                m = p[0],
                                                g = p[1],
                                                y = g.name,
                                                S = g.value,
                                                T = g.attributes;
                                            if ("Segment" !== g.category) {
                                                if ("EXT-X-VERSION" === y) void 0 === s.version ? s.version = S : a.INVALIDPLAYLIST("A Playlist file MUST NOT contain more than one EXT-X-VERSION tag.");
                                                else if ("EXT-X-TARGETDURATION" === y) s.targetDuration = t.targetDuration = S;
                                                else if ("EXT-X-MEDIA-SEQUENCE" === y) s.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-MEDIA-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), s.mediaSequenceBase = u = S;
                                                else if ("EXT-X-DISCONTINUITY-SEQUENCE" === y) s.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), c && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before any EXT-X-DISCONTINUITY tag."), s.discontinuitySequenceBase = l = S;
                                                else if ("EXT-X-ENDLIST" === y) s.endlist = !0;
                                                else if ("EXT-X-PLAYLIST-TYPE" === y) s.playlistType = S;
                                                else if ("EXT-X-I-FRAMES-ONLY" === y) t.compatibleVersion < 4 && (t.compatibleVersion = 4), s.isIFrame = !0;
                                                else if ("EXT-X-INDEPENDENT-SEGMENTS" === y) s.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), s.independentSegments = !0;
                                                else if ("EXT-X-START" === y) s.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof T["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), s.start = {
                                                    offset: T["TIME-OFFSET"],
                                                    precise: T.PRECISE || !1
                                                };
                                                else if ("EXT-X-SERVER-CONTROL" === y) T["CAN-BLOCK-RELOAD"] || a.INVALIDPLAYLIST("EXT-X-SERVER-CONTROL: CAN-BLOCK-RELOAD=YES is mandatory for Low-Latency HLS"), s.lowLatencyCompatibility = {
                                                    canBlockReload: T["CAN-BLOCK-RELOAD"],
                                                    canSkipUntil: T["CAN-SKIP-UNTIL"],
                                                    holdBack: T["HOLD-BACK"],
                                                    partHoldBack: T["PART-HOLD-BACK"]
                                                };
                                                else if ("EXT-X-PART-INF" === y) T["PART-TARGET"] || a.INVALIDPLAYLIST("EXT-X-PART-INF: PART-TARGET attribute is mandatory"), s.partTargetDuration = T["PART-TARGET"];
                                                else if ("EXT-X-RENDITION-REPORT" === y) T.URI || a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI attribute is mandatory"), 0 === T.URI.search(/^[a-z]+:/) && a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI must be relative to the playlist uri"), s.renditionReports.push(new E({
                                                    uri: T.URI,
                                                    lastMSN: T["LAST-MSN"],
                                                    lastPart: T["LAST-PART"]
                                                }));
                                                else if ("EXT-X-SKIP" === y) T["SKIPPED-SEGMENTS"] || a.INVALIDPLAYLIST("EXT-X-SKIP: SKIPPED-SEGMENTS attribute is mandatory"), t.compatibleVersion < 9 && (t.compatibleVersion = 9), s.skip = T["SKIPPED-SEGMENTS"], u += s.skip;
                                                else if ("string" == typeof g) {
                                                    -1 === o && a.INVALIDPLAYLIST("A URI line is not preceded by any segment tags"), s.targetDuration || a.INVALIDPLAYLIST("The EXT-X-TARGETDURATION tag is REQUIRED");
                                                    var b = k(e, g, o, m - 1, u++, l, t);
                                                    if (b) {
                                                        var A = i(O(s, b, l, h, d), 3);
                                                        l = A[0], h = A[1], d = A[2], !f && b.parts.length > 0 && (f = !0)
                                                    }
                                                    o = -1
                                                }
                                            } else -1 === o && (o = m), "EXT-X-DISCONTINUITY" === y && (c = !0)
                                        }
                                    } catch (e) {
                                        _.e(e)
                                    } finally {
                                        _.f()
                                    }
                                    if (-1 !== o) {
                                        var I = k(e, "", o, e.length - 1, u++, l, t);
                                        if (I) {
                                            var w = I.parts;
                                            w.length > 0 && !s.endlist && !w[w.length - 1].hint && a.INVALIDPLAYLIST("If the Playlist contains EXT-X-PART tags and does not contain an EXT-X-ENDLIST tag, the Playlist must contain an EXT-X-PRELOAD-HINT tag with a TYPE=PART attribute"), O(s, I, h, d), !f && I.parts.length > 0 && (f = !0)
                                        }
                                    }
                                    return function(e) {
                                        for (var t = new Map, n = new Map, i = !1, s = !1, o = e.length - 1; o >= 0; o--) {
                                            var u = e[o],
                                                c = u.programDateTime,
                                                l = u.dateRange;
                                            if (c && (s = !0), l && l.start) {
                                                i = !0, l.endOnNext && (l.end || l.duration) && a.INVALIDPLAYLIST("An EXT-X-DATERANGE tag with an END-ON-NEXT=YES attribute MUST NOT contain DURATION or END-DATE attributes.");
                                                var h = l.start.getTime(),
                                                    d = l.duration || 0;
                                                l.end && l.duration && h + 1e3 * d !== l.end.getTime() && a.INVALIDPLAYLIST("END-DATE MUST be equal to the value of the START-DATE attribute plus the value of the DURATION"), l.endOnNext && (l.end = t.get(l.classId)), t.set(l.classId, l.start);
                                                var f = l.end ? l.end.getTime() : l.start.getTime() + 1e3 * (l.duration || 0),
                                                    _ = n.get(l.classId);
                                                if (_) {
                                                    var p, m = r(_);
                                                    try {
                                                        for (m.s(); !(p = m.n()).done;) {
                                                            var v = p.value;
                                                            (v.start <= h && v.end > h || v.start >= h && v.start < f) && a.INVALIDPLAYLIST("DATERANGE tags with the same CLASS should not overlap")
                                                        }
                                                    } catch (e) {
                                                        m.e(e)
                                                    } finally {
                                                        m.f()
                                                    }
                                                    _.push({
                                                        start: h,
                                                        end: f
                                                    })
                                                } else n.set(l.classId, [{
                                                    start: h,
                                                    end: f
                                                }])
                                            }
                                        }
                                        i && !s && a.INVALIDPLAYLIST("If a Playlist contains an EXT-X-DATERANGE tag, it MUST also contain at least one EXT-X-PROGRAM-DATE-TIME tag.")
                                    }(s.segments), s.lowLatencyCompatibility && function(e, t) {
                                        var n = e.lowLatencyCompatibility,
                                            s = e.targetDuration,
                                            o = e.partTargetDuration,
                                            u = e.segments,
                                            c = e.renditionReports,
                                            l = n.canSkipUntil,
                                            h = n.holdBack,
                                            d = n.partHoldBack;
                                        if (l < 6 * s && a.INVALIDPLAYLIST("The Skip Boundary must be at least six times the EXT-X-TARGETDURATION."), h < 3 * s && a.INVALIDPLAYLIST("HOLD-BACK must be at least three times the EXT-X-TARGETDURATION."), t) {
                                            void 0 === o && a.INVALIDPLAYLIST("EXT-X-PART-INF is required if a Playlist contains one or more EXT-X-PART tags"), void 0 === d && a.INVALIDPLAYLIST("EXT-X-PART: PART-HOLD-BACK attribute is mandatory"), d < o && a.INVALIDPLAYLIST("PART-HOLD-BACK must be at least PART-TARGET");
                                            var f, _ = r(u.entries());
                                            try {
                                                for (_.s(); !(f = _.n()).done;) {
                                                    var p = i(f.value, 2),
                                                        m = p[0],
                                                        v = p[1].parts;
                                                    v.length > 0 && m < u.length - 3 && a.INVALIDPLAYLIST("Remove EXT-X-PART tags from the Playlist after they are greater than three target durations from the end of the Playlist.");
                                                    var g, y = r(v.entries());
                                                    try {
                                                        for (y.s(); !(g = y.n()).done;) {
                                                            var E = i(g.value, 2),
                                                                S = E[0],
                                                                T = E[1].duration;
                                                            void 0 !== T && (T > o && a.INVALIDPLAYLIST("PART-TARGET is the maximum duration of any Partial Segment"), S < v.length - 1 && T < .85 * o && a.INVALIDPLAYLIST("All Partial Segments except the last part of a segment must have a duration of at least 85% of PART-TARGET"))
                                                        }
                                                    } catch (e) {
                                                        y.e(e)
                                                    } finally {
                                                        y.f()
                                                    }
                                                }
                                            } catch (e) {
                                                _.e(e)
                                            } finally {
                                                _.f()
                                            }
                                        }
                                        var b, A = r(c);
                                        try {
                                            for (A.s(); !(b = A.n()).done;) {
                                                var I = b.value,
                                                    w = u[u.length - 1];
                                                I.lastMSN || (I.lastMSN = w.mediaSequenceNumber), !I.lastPart && w.parts.length > 0 && (I.lastPart = w.parts.length - 1)
                                            }
                                        } catch (e) {
                                            A.e(e)
                                        } finally {
                                            A.f()
                                        }
                                    }(s, f), s
                                }(e, t)).isIFrame && t.hasMap && t.compatibleVersion < 6 && (t.compatibleVersion = 6), t.compatibleVersion > 1 && (!n.version || n.version < t.compatibleVersion) && a.INVALIDPLAYLIST("EXT-X-VERSION needs to be ".concat(t.compatibleVersion, " or higher.")), n
                            }(function(e, t) {
                                var n = [];
                                return e.split("\n").forEach((function(e) {
                                    var r = e.trim();
                                    if (r)
                                        if (r.startsWith("#")) {
                                            if (r.startsWith("#EXT")) {
                                                var i = C(r, t);
                                                return void(i && n.push(i))
                                            }
                                        } else n.push(r)
                                })), 0 !== n.length && "EXTM3U" === n[0].name || a.INVALIDPLAYLIST("The EXTM3U tag MUST be the first line."), n
                            }(e, t), t);
                        return n.source = e, n
                    }
                },
                367: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    s = void 0;
                                try {
                                    for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, s = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw s
                                    }
                                }
                                return n
                            }
                        }(e, t) || o(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function s(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw s
                                }
                            }
                        }
                    }

                    function o(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                        }
                    }

                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function u(e, t, n) {
                        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                            var r = function(e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _(e)););
                                return e
                            }(e, t);
                            if (r) {
                                var i = Object.getOwnPropertyDescriptor(r, t);
                                return i.get ? i.get.call(n) : i.value
                            }
                        })(e, t, n || e)
                    }

                    function c(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function l(e) {
                        var t = "function" == typeof Map ? new Map : void 0;
                        return (l = function(e) {
                            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                            var n;
                            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== t) {
                                if (t.has(e)) return t.get(e);
                                t.set(e, r)
                            }

                            function r() {
                                return h(e, arguments, _(this).constructor)
                            }
                            return r.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), f(r, e)
                        })(e)
                    }

                    function h(e, t, n) {
                        return (h = d() ? Reflect.construct : function(e, t, n) {
                            var r = [null];
                            r.push.apply(r, t);
                            var i = new(Function.bind.apply(e, r));
                            return n && f(i, n.prototype), i
                        }).apply(null, arguments)
                    }

                    function d() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function f(e, t) {
                        return (f = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function _(e) {
                        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var p = n(771),
                        m = ["#EXTINF", "#EXT-X-BYTERANGE", "#EXT-X-DISCONTINUITY", "#EXT-X-STREAM-INF", "#EXT-X-CUE-OUT", "#EXT-X-CUE-IN", "#EXT-X-KEY", "#EXT-X-MAP"],
                        v = ["#EXT-X-MEDIA"],
                        g = function(e) {
                            ! function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && f(e, t)
                            }(s, e);
                            var t, n, r, i = (t = s, n = d(), function() {
                                var e, r = _(t);
                                if (n) {
                                    var i = _(this).constructor;
                                    e = Reflect.construct(r, arguments, i)
                                } else e = r.apply(this, arguments);
                                return c(this, e)
                            });

                            function s(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, s), (t = i.call(this)).baseUri = e, t
                            }
                            return (r = [{
                                key: "push",
                                value: function() {
                                    for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    for (var i = function() {
                                            var t = a[o];
                                            if (!t.startsWith("#")) return u(_(s.prototype), "push", e).call(e, t), "continue";
                                            if (m.some((function(e) {
                                                    return t.startsWith(e)
                                                }))) return u(_(s.prototype), "push", e).call(e, t), "continue";
                                            if (e.includes(t)) {
                                                if (v.some((function(e) {
                                                        return t.startsWith(e)
                                                    }))) return "continue";
                                                p.INVALIDPLAYLIST("Redundant item (".concat(t, ")"))
                                            }
                                            u(_(s.prototype), "push", e).call(e, t)
                                        }, o = 0, a = n; o < a.length; o++) i()
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }(s.prototype, r), s
                        }(l(Array));

                    function y(e, t) {
                        var n = 1e3;
                        t && (n = Math.pow(10, t));
                        var r = Math.round(e * n) / n;
                        return t ? r.toFixed(t) : r
                    }

                    function E(e) {
                        var t = e.toString(10),
                            n = t.indexOf(".");
                        return -1 === n ? 0 : t.length - n - 1
                    }

                    function S(e) {
                        var t = ['DATA-ID="'.concat(e.id, '"')];
                        return e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.value ? t.push('VALUE="'.concat(e.value, '"')) : e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-SESSION-DATA:".concat(t.join(","))
                    }

                    function T(e, t) {
                        var n = t ? "#EXT-X-SESSION-KEY" : "#EXT-X-KEY",
                            r = ["METHOD=".concat(e.method)];
                        return e.uri && r.push('URI="'.concat(e.uri, '"')), e.iv && (16 !== e.iv.length && p.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r.push("IV=".concat(p.byteSequenceToHex(e.iv)))), e.format && r.push('KEYFORMAT="'.concat(e.format, '"')), e.formatVersion && r.push('KEYFORMATVERSIONS="'.concat(e.formatVersion, '"')), "".concat(n, ":").concat(r.join(","))
                    }

                    function b(e, t) {
                        var n = t.isIFrameOnly ? "#EXT-X-I-FRAME-STREAM-INF" : "#EXT-X-STREAM-INF",
                            r = ["BANDWIDTH=".concat(t.bandwidth)];
                        if (t.averageBandwidth && r.push("AVERAGE-BANDWIDTH=".concat(t.averageBandwidth)), t.isIFrameOnly && r.push('URI="'.concat(t.uri, '"')), t.codecs && r.push('CODECS="'.concat(t.codecs, '"')), t.resolution && r.push("RESOLUTION=".concat(t.resolution.width, "x").concat(t.resolution.height)), t.frameRate && r.push("FRAME-RATE=".concat(y(t.frameRate, 3))), t.hdcpLevel && r.push("HDCP-LEVEL=".concat(t.hdcpLevel)), t.audio.length > 0) {
                            r.push('AUDIO="'.concat(t.audio[0].groupId, '"'));
                            var i, o = s(t.audio);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    var a = i.value;
                                    e.push(A(a))
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                        }
                        if (t.video.length > 0) {
                            r.push('VIDEO="'.concat(t.video[0].groupId, '"'));
                            var u, c = s(t.video);
                            try {
                                for (c.s(); !(u = c.n()).done;) {
                                    var l = u.value;
                                    e.push(A(l))
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        }
                        if (t.subtitles.length > 0) {
                            r.push('SUBTITLES="'.concat(t.subtitles[0].groupId, '"'));
                            var h, d = s(t.subtitles);
                            try {
                                for (d.s(); !(h = d.n()).done;) {
                                    var f = h.value;
                                    e.push(A(f))
                                }
                            } catch (e) {
                                d.e(e)
                            } finally {
                                d.f()
                            }
                        }
                        if (p.getOptions().allowClosedCaptionsNone && 0 === t.closedCaptions.length) r.push("CLOSED-CAPTIONS=NONE");
                        else if (t.closedCaptions.length > 0) {
                            r.push('CLOSED-CAPTIONS="'.concat(t.closedCaptions[0].groupId, '"'));
                            var _, m = s(t.closedCaptions);
                            try {
                                for (m.s(); !(_ = m.n()).done;) {
                                    var v = _.value;
                                    e.push(A(v))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }
                        e.push("".concat(n, ":").concat(r.join(","))), t.isIFrameOnly || e.push("".concat(t.uri))
                    }

                    function A(e) {
                        var t = ["TYPE=".concat(e.type), 'GROUP-ID="'.concat(e.groupId, '"'), 'NAME="'.concat(e.name, '"')];
                        return void 0 !== e.isDefault && t.push("DEFAULT=".concat(e.isDefault ? "YES" : "NO")), void 0 !== e.autoselect && t.push("AUTOSELECT=".concat(e.autoselect ? "YES" : "NO")), void 0 !== e.forced && t.push("FORCED=".concat(e.forced ? "YES" : "NO")), e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.assocLanguage && t.push('ASSOC-LANGUAGE="'.concat(e.assocLanguage, '"')), e.instreamId && t.push('INSTREAM-ID="'.concat(e.instreamId, '"')), e.characteristics && t.push('CHARACTERISTICS="'.concat(e.characteristics, '"')), e.channels && t.push('CHANNELS="'.concat(e.channels, '"')), e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-MEDIA:".concat(t.join(","))
                    }

                    function I(e, t, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                            s = !1;
                        if (t.byterange && e.push("#EXT-X-BYTERANGE:".concat(R(t.byterange))), t.discontinuity && e.push("#EXT-X-DISCONTINUITY"), t.key) {
                            var o = T(t.key);
                            o !== n && (e.push(o), n = o)
                        }
                        if (t.map) {
                            var a = w(t.map);
                            a !== r && (e.push(a), r = a)
                        }
                        if (t.programDateTime && e.push("#EXT-X-PROGRAM-DATE-TIME:".concat(p.formatDate(t.programDateTime))), t.dateRange && e.push(P(t.dateRange)), t.markers.length > 0 && D(e, t.markers), t.parts.length > 0 && (s = k(e, t.parts)), s) return [n, r];
                        var u = i < 3 ? Math.round(t.duration) : y(t.duration, E(t.duration));
                        return e.push("#EXTINF:".concat(u, ",").concat(unescape(encodeURIComponent(t.title || "")))), Array.prototype.push.call(e, "".concat(t.uri)), [n, r]
                    }

                    function w(e) {
                        var t = ['URI="'.concat(e.uri, '"')];
                        return e.byterange && t.push('BYTERANGE="'.concat(R(e.byterange), '"')), "#EXT-X-MAP:".concat(t.join(","))
                    }

                    function R(e) {
                        var t = e.offset,
                            n = e.length;
                        return "".concat(n, "@").concat(t)
                    }

                    function P(e) {
                        var t = ['ID="'.concat(e.id, '"')];
                        return e.start && t.push('START-DATE="'.concat(p.formatDate(e.start), '"')), e.end && t.push('END-DATE="'.concat(e.end, '"')), e.duration && t.push("DURATION=".concat(e.duration)), e.plannedDuration && t.push("PLANNED-DURATION=".concat(e.plannedDuration)), e.classId && t.push('CLASS="'.concat(e.classId, '"')), e.endOnNext && t.push("END-ON-NEXT=YES"), Object.keys(e.attributes).forEach((function(n) {
                            n.startsWith("X-") ? "number" == typeof e.attributes[n] ? t.push("".concat(n, "=").concat(e.attributes[n])) : t.push("".concat(n, '="').concat(e.attributes[n], '"')) : n.startsWith("SCTE35-") && t.push("".concat(n, "=").concat(p.byteSequenceToHex(e.attributes[n])))
                        })), "#EXT-X-DATERANGE:".concat(t.join(","))
                    }

                    function D(e, t) {
                        var n, r = s(t);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                if ("OUT" === i.type) e.push("#EXT-X-CUE-OUT:".concat(i.duration));
                                else if ("IN" === i.type) e.push("#EXT-X-CUE-IN");
                                else if ("RAW" === i.type) {
                                    var o = i.value ? ":".concat(i.value) : "";
                                    e.push("#".concat(i.tagName).concat(o))
                                }
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }

                    function k(e, t) {
                        var n, r = !1,
                            i = s(t);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var o = n.value;
                                if (o.hint) {
                                    var a = [];
                                    if (a.push("TYPE=PART"), a.push('URI="'.concat(o.uri, '"')), o.byterange) {
                                        var u = o.byterange,
                                            c = u.offset,
                                            l = u.length;
                                        a.push("BYTERANGE-START=".concat(c)), l && a.push("BYTERANGE-LENGTH=".concat(l))
                                    }
                                    e.push("#EXT-X-PRELOAD-HINT:".concat(a.join(","))), r = !0
                                } else {
                                    var h = [];
                                    h.push("DURATION=".concat(o.duration)), h.push('URI="'.concat(o.uri, '"')), o.byterange && h.push("BYTERANGE=".concat(R(o.byterange))), o.independent && h.push("INDEPENDENT=YES"), o.gap && h.push("GAP=YES"), e.push("#EXT-X-PART:".concat(h.join(",")))
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return r
                    }
                    e.exports = function(e) {
                        p.PARAMCHECK(e), p.ASSERT("Not a playlist", "playlist" === e.type);
                        var t = new g(e.uri);
                        return t.push("#EXTM3U"), e.version && t.push("#EXT-X-VERSION:".concat(e.version)), e.independentSegments && t.push("#EXT-X-INDEPENDENT-SEGMENTS"), e.start && t.push("#EXT-X-START:TIME-OFFSET=".concat(y(e.start.offset)).concat(e.start.precise ? ",PRECISE=YES" : "")), e.isMasterPlaylist ? function(e, t) {
                            var n, r = s(t.sessionDataList);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var i = n.value;
                                    e.push(S(i))
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var o, a = s(t.sessionKeyList);
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = o.value;
                                    e.push(T(u, !0))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            var c, l = s(t.variants);
                            try {
                                for (l.s(); !(c = l.n()).done;) b(e, c.value)
                            } catch (e) {
                                l.e(e)
                            } finally {
                                l.f()
                            }
                        }(t, e) : function(e, t) {
                            var n = "",
                                r = "";
                            if (t.targetDuration && e.push("#EXT-X-TARGETDURATION:".concat(t.targetDuration)), t.lowLatencyCompatibility) {
                                var o = t.lowLatencyCompatibility,
                                    a = o.canBlockReload,
                                    u = o.canSkipUntil,
                                    c = o.holdBack,
                                    l = o.partHoldBack,
                                    h = [];
                                h.push("CAN-BLOCK-RELOAD=".concat(a ? "YES" : "NO")), void 0 !== u && h.push("CAN-SKIP-UNTIL=".concat(u)), void 0 !== c && h.push("HOLD-BACK=".concat(c)), void 0 !== l && h.push("PART-HOLD-BACK=".concat(l)), e.push("#EXT-X-SERVER-CONTROL:".concat(h.join(",")))
                            }
                            t.partTargetDuration && e.push("#EXT-X-PART-INF:PART-TARGET=".concat(t.partTargetDuration)), t.mediaSequenceBase && e.push("#EXT-X-MEDIA-SEQUENCE:".concat(t.mediaSequenceBase)), t.discontinuitySequenceBase && e.push("#EXT-X-DISCONTINUITY-SEQUENCE:".concat(t.discontinuitySequenceBase)), t.playlistType && e.push("#EXT-X-PLAYLIST-TYPE:".concat(t.playlistType)), t.isIFrame && e.push("#EXT-X-I-FRAMES-ONLY"), t.skip > 0 && e.push("#EXT-X-SKIP:SKIPPED-SEGMENTS=".concat(t.skip));
                            var d, f = s(t.segments);
                            try {
                                for (f.s(); !(d = f.n()).done;) {
                                    var _ = i(I(e, d.value, n, r, t.version), 2);
                                    n = _[0], r = _[1]
                                }
                            } catch (e) {
                                f.e(e)
                            } finally {
                                f.f()
                            }
                            t.endlist && e.push("#EXT-X-ENDLIST");
                            var p, m = s(t.renditionReports);
                            try {
                                for (m.s(); !(p = m.n()).done;) {
                                    var v = p.value,
                                        g = [];
                                    g.push('URI="'.concat(v.uri, '"')), g.push("LAST-MSN=".concat(v.lastMSN)), void 0 !== v.lastPart && g.push("LAST-PART=".concat(v.lastPart)), e.push("#EXT-X-RENDITION-REPORT:".concat(g.join(",")))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }(t, e), t.join("\n")
                    }
                },
                890: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && function(e, t) {
                            (Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e
                            })(e, t)
                        }(e, t)
                    }

                    function s(e) {
                        var t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = a(e);
                            if (t) {
                                var i = a(this).constructor;
                                n = Reflect.construct(r, arguments, i)
                            } else n = r.apply(this, arguments);
                            return o(this, n)
                        }
                    }

                    function o(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function a(e) {
                        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function u(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    var c = n(771),
                        l = function e(t) {
                            u(this, e), c.PARAMCHECK(t), this.type = t
                        },
                        h = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n(e) {
                                var r, i = e.isMasterPlaylist,
                                    s = e.uri,
                                    o = e.version,
                                    a = e.independentSegments,
                                    l = void 0 !== a && a,
                                    h = e.start,
                                    d = e.source;
                                return u(this, n), r = t.call(this, "playlist"), c.PARAMCHECK(i), r.isMasterPlaylist = i, r.uri = s, r.version = o, r.independentSegments = l, r.start = h, r.source = d, r
                            }
                            return n
                        }(l),
                        d = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                u(this, n), r.isMasterPlaylist = !0, e = t.call(this, r);
                                var i = r.variants,
                                    s = void 0 === i ? [] : i,
                                    o = r.currentVariant,
                                    a = r.sessionDataList,
                                    c = void 0 === a ? [] : a,
                                    l = r.sessionKeyList,
                                    h = void 0 === l ? [] : l;
                                return e.variants = s, e.currentVariant = o, e.sessionDataList = c, e.sessionKeyList = h, e
                            }
                            return n
                        }(h),
                        f = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                u(this, n), r.isMasterPlaylist = !1, e = t.call(this, r);
                                var i = r.targetDuration,
                                    s = r.mediaSequenceBase,
                                    o = void 0 === s ? 0 : s,
                                    a = r.discontinuitySequenceBase,
                                    c = void 0 === a ? 0 : a,
                                    l = r.endlist,
                                    h = void 0 !== l && l,
                                    d = r.playlistType,
                                    f = r.isIFrame,
                                    _ = r.segments,
                                    p = void 0 === _ ? [] : _,
                                    m = r.lowLatencyCompatibility,
                                    v = r.partTargetDuration,
                                    g = r.renditionReports,
                                    y = void 0 === g ? [] : g,
                                    E = r.skip,
                                    S = void 0 === E ? 0 : E,
                                    T = r.hash;
                                return e.targetDuration = i, e.mediaSequenceBase = o, e.discontinuitySequenceBase = c, e.endlist = h, e.playlistType = d, e.isIFrame = f, e.segments = p, e.lowLatencyCompatibility = m, e.partTargetDuration = v, e.renditionReports = y, e.skip = S, e.hash = T, e
                            }
                            return n
                        }(h),
                        _ = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n(e) {
                                var r, i = e.uri,
                                    s = e.mimeType,
                                    o = e.data,
                                    a = e.duration,
                                    c = e.title,
                                    l = e.byterange,
                                    h = e.discontinuity,
                                    d = e.mediaSequenceNumber,
                                    f = void 0 === d ? 0 : d,
                                    _ = e.discontinuitySequence,
                                    p = void 0 === _ ? 0 : _,
                                    m = e.key,
                                    v = e.map,
                                    g = e.programDateTime,
                                    y = e.dateRange,
                                    E = e.markers,
                                    S = void 0 === E ? [] : E,
                                    T = e.parts,
                                    b = void 0 === T ? [] : T;
                                return u(this, n), (r = t.call(this, "segment")).uri = i, r.mimeType = s, r.data = o, r.duration = a, r.title = c, r.byterange = l, r.discontinuity = h, r.mediaSequenceNumber = f, r.discontinuitySequence = p, r.key = m, r.map = v, r.programDateTime = g, r.dateRange = y, r.markers = S, r.parts = b, r
                            }
                            return n
                        }(l),
                        p = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n(e) {
                                var r, i = e.hint,
                                    s = void 0 !== i && i,
                                    o = e.uri,
                                    a = e.duration,
                                    l = e.independent,
                                    h = e.byterange,
                                    d = e.gap;
                                return u(this, n), r = t.call(this, "part"), c.PARAMCHECK(o), r.hint = s, r.uri = o, r.duration = a, r.independent = l, r.duration = a, r.byterange = h, r.gap = d, r
                            }
                            return n
                        }(l);
                    e.exports = {
                        Rendition: function e(t) {
                            var n = t.type,
                                r = t.uri,
                                i = t.groupId,
                                s = t.language,
                                o = t.assocLanguage,
                                a = t.name,
                                l = t.isDefault,
                                h = t.autoselect,
                                d = t.forced,
                                f = t.instreamId,
                                _ = t.characteristics,
                                p = t.channels;
                            u(this, e), c.PARAMCHECK(n, i, a), c.CONDITIONALASSERT(["SUBTITLES" === n, r], ["CLOSED-CAPTIONS" === n, f], ["CLOSED-CAPTIONS" === n, !r], [d, "SUBTITLES" === n]), this.type = n, this.uri = r, this.groupId = i, this.language = s, this.assocLanguage = o, this.name = a, this.isDefault = l, this.autoselect = h, this.forced = d, this.instreamId = f, this.characteristics = _, this.channels = p
                        },
                        Variant: function e(t) {
                            var n = t.uri,
                                r = t.isIFrameOnly,
                                i = void 0 !== r && r,
                                s = t.bandwidth,
                                o = t.averageBandwidth,
                                a = t.codecs,
                                l = t.resolution,
                                h = t.frameRate,
                                d = t.hdcpLevel,
                                f = t.audio,
                                _ = void 0 === f ? [] : f,
                                p = t.video,
                                m = void 0 === p ? [] : p,
                                v = t.subtitles,
                                g = void 0 === v ? [] : v,
                                y = t.closedCaptions,
                                E = void 0 === y ? [] : y,
                                S = t.currentRenditions,
                                T = void 0 === S ? {
                                    audio: 0,
                                    video: 0,
                                    subtitles: 0,
                                    closedCaptions: 0
                                } : S;
                            u(this, e), c.PARAMCHECK(n, s), this.uri = n, this.isIFrameOnly = i, this.bandwidth = s, this.averageBandwidth = o, this.codecs = a, this.resolution = l, this.frameRate = h, this.hdcpLevel = d, this.audio = _, this.video = m, this.subtitles = g, this.closedCaptions = E, this.currentRenditions = T
                        },
                        SessionData: function e(t) {
                            var n = t.id,
                                r = t.value,
                                i = t.uri,
                                s = t.language;
                            u(this, e), c.PARAMCHECK(n, r || i), c.ASSERT("SessionData cannot have both value and uri, shoud be either.", !(r && i)), this.id = n, this.value = r, this.uri = i, this.language = s
                        },
                        Key: function e(t) {
                            var n = t.method,
                                r = t.uri,
                                i = t.iv,
                                s = t.format,
                                o = t.formatVersion;
                            u(this, e), c.PARAMCHECK(n), c.CONDITIONALPARAMCHECK(["NONE" !== n, r]), c.CONDITIONALASSERT(["NONE" === n, !(r || i || s || o)]), this.method = n, this.uri = r, this.iv = i, this.format = s, this.formatVersion = o
                        },
                        MediaInitializationSection: function e(t) {
                            var n = t.hint,
                                r = void 0 !== n && n,
                                i = t.uri,
                                s = t.mimeType,
                                o = t.byterange;
                            u(this, e), c.PARAMCHECK(i), this.hint = r, this.uri = i, this.mimeType = s, this.byterange = o
                        },
                        DateRange: function e(t) {
                            var n = t.id,
                                r = t.classId,
                                i = t.start,
                                s = t.end,
                                o = t.duration,
                                a = t.plannedDuration,
                                l = t.endOnNext,
                                h = t.attributes,
                                d = void 0 === h ? {} : h;
                            u(this, e), c.PARAMCHECK(n), c.CONDITIONALPARAMCHECK([!0 === l, r]), c.CONDITIONALASSERT([s, i], [s, i <= s], [o, o >= 0], [a, a >= 0]), this.id = n, this.classId = r, this.start = i, this.end = s, this.duration = o, this.plannedDuration = a, this.endOnNext = l, this.attributes = d
                        },
                        SpliceInfo: function e(t) {
                            var n = t.type,
                                r = t.duration,
                                i = t.tagName,
                                s = t.value;
                            u(this, e), c.PARAMCHECK(n), c.CONDITIONALPARAMCHECK(["OUT" === n, r]), c.CONDITIONALPARAMCHECK(["RAW" === n, i]), this.type = n, this.duration = r, this.tagName = i, this.value = s
                        },
                        Playlist: h,
                        MasterPlaylist: d,
                        MediaPlaylist: f,
                        Segment: _,
                        PartialSegment: p,
                        RenditionReport: function e(t) {
                            var n = t.uri,
                                r = t.lastMSN,
                                i = t.lastPart;
                            u(this, e), c.PARAMCHECK(n), this.uri = n, this.lastMSN = r, this.lastPart = i
                        }
                    }
                },
                771: e => {
                    function t(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    s = void 0;
                                try {
                                    for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, s = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw s
                                    }
                                }
                                return n
                            }
                        }(e, t) || r(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function n(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    s = function() {};
                                return {
                                    s,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: s
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw o
                                }
                            }
                        }
                    }

                    function r(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                        }
                    }

                    function i(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var s = {};

                    function o(e) {
                        if (s.strictMode) throw e;
                        s.silent
                    }

                    function a(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        if ("number" == typeof e) return e;
                        var n = 10 === t ? Number.parseFloat(e, t) : Number.parseInt(e, t);
                        return Number.isNaN(n) ? 0 : n
                    }
                    e.exports = {
                        THROW: o,
                        ASSERT: function(e) {
                            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                            var a, u = n(i.entries());
                            try {
                                for (u.s(); !(a = u.n()).done;) {
                                    var c = t(a.value, 2),
                                        l = c[0],
                                        h = c[1];
                                    h || o(new Error("".concat(e, " : Failed at [").concat(l, "]")))
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        },
                        CONDITIONALASSERT: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var s, a = n(r.entries());
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var u = t(s.value, 2),
                                        c = u[0],
                                        l = t(u[1], 2),
                                        h = l[0],
                                        d = l[1];
                                    h && (d || o(new Error("Conditional Assert : Failed at [".concat(c, "]"))))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        PARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var s, a = n(r.entries());
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var u = t(s.value, 2),
                                        c = u[0],
                                        l = u[1];
                                    void 0 === l && o(new Error("Param Check : Failed at [".concat(c, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        CONDITIONALPARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var s, a = n(r.entries());
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var u = t(s.value, 2),
                                        c = u[0],
                                        l = t(u[1], 2),
                                        h = l[0],
                                        d = l[1];
                                    h && void 0 === d && o(new Error("Conditional Param Check : Failed at [".concat(c, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        INVALIDPLAYLIST: function(e) {
                            o(new Error("Invalid Playlist : ".concat(e)))
                        },
                        toNumber: a,
                        hexToByteSequence: function(e) {
                            (e.startsWith("0x") || e.startsWith("0X")) && (e = e.slice(2));
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(a(e.slice(n, n + 2), 16));
                            return Buffer.from(t)
                        },
                        byteSequenceToHex: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length;
                            n <= t && o(new Error("end must be larger than start : start=".concat(t, ", end=").concat(n)));
                            for (var r = [], i = t; i < n; i++) r.push("0".concat((255 & e[i]).toString(16).toUpperCase()).slice(-2));
                            return "0x".concat(r.join(""))
                        },
                        tryCatch: function(e, t) {
                            try {
                                return e()
                            } catch (e) {
                                return t(e)
                            }
                        },
                        splitAt: function(e, t) {
                            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = -1, i = 0, s = 0; i < e.length; i++)
                                if (e[i] === t) {
                                    if (s++ === n) return [e.slice(0, i), e.slice(i + 1)];
                                    r = i
                                }
                            return -1 !== r ? [e.slice(0, r), e.slice(r + 1)] : [e]
                        },
                        trim: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
                            return e ? (e = e.trim(), " " === t || (e.startsWith(t) && (e = e.slice(1)), e.endsWith(t) && (e = e.slice(0, -1))), e) : e
                        },
                        splitByCommaWithPreservingQuotes: function(e) {
                            for (var t = [], n = !0, r = 0, i = [], s = 0; s < e.length; s++) {
                                var o = e[s];
                                n && "," === o ? (t.push(e.slice(r, s).trim()), r = s + 1) : '"' !== o && "'" !== o || (n ? (i.push(o), n = !1) : o === i[i.length - 1] ? (i.pop(), n = !0) : i.push(o))
                            }
                            return t.push(e.slice(r).trim()), t
                        },
                        camelify: function(e) {
                            var t, r = [],
                                i = !1,
                                s = n(e);
                            try {
                                for (s.s(); !(t = s.n()).done;) {
                                    var o = t.value;
                                    "-" !== o && "_" !== o ? i ? (r.push(o.toUpperCase()), i = !1) : r.push(o.toLowerCase()) : i = !0
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            return r.join("")
                        },
                        formatDate: function(e) {
                            var t = e.getUTCFullYear(),
                                n = ("0" + (e.getUTCMonth() + 1)).slice(-2),
                                r = ("0" + e.getUTCDate()).slice(-2),
                                i = ("0" + e.getUTCHours()).slice(-2),
                                s = ("0" + e.getUTCMinutes()).slice(-2),
                                o = ("0" + e.getUTCSeconds()).slice(-2),
                                a = ("00" + e.getUTCMilliseconds()).slice(-3);
                            return "".concat(t, "-").concat(n, "-").concat(r, "T").concat(i, ":").concat(s, ":").concat(o, ".").concat(a, "Z")
                        },
                        hasOwnProp: function(e, t) {
                            return Object.hasOwnProperty.call(e, t)
                        },
                        setOptions: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            s = Object.assign(s, e)
                        },
                        getOptions: function() {
                            return Object.assign({}, s)
                        }
                    }
                }
            }, t = {},
            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {}
                };
                return e[r](i, i.exports, n), i.exports
            }(851);
        var e, t
    }()
}));

function mf() {
    return (mf = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}
var vf, gf = ["bottom", "height", "left", "right", "top", "width"],
    yf = new Map,
    Ef = "undefined" != typeof window ? Cd.useLayoutEffect : Cd.useEffect;

function Sf(e, t) {
    void 0 === t && (t = {
        width: 0,
        height: 0
    });
    var n = Cd.useState(e.current),
        r = n[0],
        i = n[1],
        s = Cd.useReducer(Tf, t),
        o = s[0],
        a = s[1],
        u = Cd.useRef(!1);
    return Ef((function() {
        e.current !== r && i(e.current)
    })), Ef((function() {
        if (r && !u.current) {
            u.current = !0;
            var e = r.getBoundingClientRect();
            a({
                rect: e
            })
        }
    }), [r]), Cd.useEffect((function() {
        if (r) {
            var e = function(e, t) {
                return {
                    observe: function() {
                        var n = 0 === yf.size;
                        yf.has(e) ? yf.get(e).callbacks.push(t) : yf.set(e, {
                            rect: void 0,
                            hasRectChanged: !1,
                            callbacks: [t]
                        }), n && function e() {
                            var t = [];
                            yf.forEach((function(e, n) {
                                var r = n.getBoundingClientRect();
                                (function(e, t) {
                                    return void 0 === e && (e = {}), void 0 === t && (t = {}), gf.some((function(n) {
                                        return e[n] !== t[n]
                                    }))
                                })(r, e.rect) && (e.rect = r, t.push(e))
                            })), t.forEach((function(e) {
                                e.callbacks.forEach((function(t) {
                                    return t(e.rect)
                                }))
                            })), vf = window.requestAnimationFrame(e)
                        }()
                    },
                    unobserve: function() {
                        var n = yf.get(e);
                        if (n) {
                            var r = n.callbacks.indexOf(t);
                            r >= 0 && n.callbacks.splice(r, 1), n.callbacks.length || yf.delete(e), yf.size || cancelAnimationFrame(vf)
                        }
                    }
                }
            }(r, (function(e) {
                a({
                    rect: e
                })
            }));
            return e.observe(),
                function() {
                    e.unobserve()
                }
        }
    }), [r]), o
}

function Tf(e, t) {
    var n = t.rect;
    return e.height !== n.height || e.width !== n.width ? n : e
}
var bf = function() {
        return 50
    },
    Af = function(e) {
        return e
    },
    If = function(e, t) {
        return e[t ? "offsetWidth" : "offsetHeight"]
    },
    wf = function(e) {
        for (var t = Math.max(e.start - e.overscan, 0), n = Math.min(e.end + e.overscan, e.size - 1), r = [], i = t; i <= n; i++) r.push(i);
        return r
    };

function Rf(e) {
    var t, n = e.size,
        r = void 0 === n ? 0 : n,
        i = e.estimateSize,
        s = void 0 === i ? bf : i,
        o = e.overscan,
        a = void 0 === o ? 1 : o,
        u = e.paddingStart,
        c = void 0 === u ? 0 : u,
        l = e.paddingEnd,
        h = void 0 === l ? 0 : l,
        d = e.parentRef,
        f = e.horizontal,
        _ = e.scrollToFn,
        p = e.useObserver,
        m = e.initialRect,
        v = e.onScrollElement,
        g = e.scrollOffsetFn,
        y = e.keyExtractor,
        E = void 0 === y ? Af : y,
        S = e.measureSize,
        T = void 0 === S ? If : S,
        b = e.rangeExtractor,
        A = void 0 === b ? wf : b,
        I = f ? "width" : "height",
        w = f ? "scrollLeft" : "scrollTop",
        R = Cd.useRef({
            scrollOffset: 0,
            measurements: []
        }),
        P = Cd.useState(0),
        D = P[0],
        k = P[1];
    R.current.scrollOffset = D;
    var O = (p || Sf)(d, m)[I];
    R.current.outerSize = O;
    var C = Cd.useCallback((function(e) {
            d.current && (d.current[w] = e)
        }), [d, w]),
        L = _ || C;
    _ = Cd.useCallback((function(e) {
        L(e, C)
    }), [C, L]);
    var N = Cd.useState({}),
        M = N[0],
        x = N[1],
        F = Cd.useCallback((function() {
            return x({})
        }), []),
        U = Cd.useRef([]),
        j = Cd.useMemo((function() {
            var e = U.current.length > 0 ? Math.min.apply(Math, U.current) : 0;
            U.current = [];
            for (var t = R.current.measurements.slice(0, e), n = e; n < r; n++) {
                var i = E(n),
                    o = M[i],
                    a = t[n - 1] ? t[n - 1].end : c,
                    u = "number" == typeof o ? o : s(n),
                    l = a + u;
                t[n] = {
                    index: n,
                    start: a,
                    size: u,
                    end: l,
                    key: i
                }
            }
            return t
        }), [s, M, c, r, E]),
        B = ((null == (t = j[r - 1]) ? void 0 : t.end) || c) + h;
    R.current.measurements = j, R.current.totalSize = B;
    var V = v ? v.current : d.current,
        H = Cd.useRef(g);
    H.current = g, Ef((function() {
        if (V) {
            var e = function(e) {
                var t = H.current ? H.current(e) : V[w];
                k(t)
            };
            return e(), V.addEventListener("scroll", e, {
                    capture: !1,
                    passive: !0
                }),
                function() {
                    V.removeEventListener("scroll", e)
                }
        }
        k(0)
    }), [V, w]);
    var X = function(e) {
            for (var t = e.measurements, n = e.outerSize, r = e.scrollOffset, i = t.length - 1, s = function(e, t, n, r) {
                    for (; e <= t;) {
                        var i = (e + t) / 2 | 0,
                            s = n(i);
                        if (s < r) e = i + 1;
                        else {
                            if (!(s > r)) return i;
                            t = i - 1
                        }
                    }
                    return e > 0 ? e - 1 : 0
                }(0, i, (function(e) {
                    return t[e].start
                }), r), o = s; o < i && t[o].end < r + n;) o++;
            return {
                start: s,
                end: o
            }
        }(R.current),
        q = X.start,
        G = X.end,
        W = Cd.useMemo((function() {
            return A({
                start: q,
                end: G,
                overscan: a,
                size: j.length
            })
        }), [q, G, a, j.length, A]),
        K = Cd.useRef(T);
    K.current = T;
    var Y = Cd.useMemo((function() {
            for (var e = [], t = function(t, n) {
                    var r = W[t],
                        i = mf(mf({}, j[r]), {}, {
                            measureRef: function(e) {
                                if (e) {
                                    var t = K.current(e, f);
                                    if (t !== i.size) {
                                        var n = R.current.scrollOffset;
                                        i.start < n && C(n + (t - i.size)), U.current.push(r), x((function(e) {
                                            var n;
                                            return mf(mf({}, e), {}, ((n = {})[i.key] = t, n))
                                        }))
                                    }
                                }
                            }
                        });
                    e.push(i)
                }, n = 0, r = W.length; n < r; n++) t(n);
            return e
        }), [W, C, f, j]),
        $ = Cd.useRef(!1);
    Ef((function() {
        $.current && x({}), $.current = !0
    }), [s]);
    var z = Cd.useCallback((function(e, t) {
            var n = (void 0 === t ? {} : t).align,
                r = void 0 === n ? "start" : n,
                i = R.current,
                s = i.scrollOffset,
                o = i.outerSize;
            "auto" === r && (r = e <= s ? "start" : e >= s + o ? "end" : "start"), "start" === r ? _(e) : "end" === r ? _(e - o) : "center" === r && _(e - o / 2)
        }), [_]),
        Q = Cd.useCallback((function(e, t) {
            var n = void 0 === t ? {} : t,
                i = n.align,
                s = void 0 === i ? "auto" : i,
                o = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(n, ["align"]),
                a = R.current,
                u = a.measurements,
                c = a.scrollOffset,
                l = a.outerSize,
                h = u[Math.max(0, Math.min(e, r - 1))];
            if (h) {
                if ("auto" === s)
                    if (h.end >= c + l) s = "end";
                    else {
                        if (!(h.start <= c)) return;
                        s = "start"
                    }
                var d = "center" === s ? h.start + h.size / 2 : "end" === s ? h.end : h.start;
                z(d, mf({
                    align: s
                }, o))
            }
        }), [z, r]),
        J = Cd.useCallback((function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            Q.apply(void 0, t), requestAnimationFrame((function() {
                Q.apply(void 0, t)
            }))
        }), [Q]);
    return {
        virtualItems: Y,
        totalSize: B,
        scrollToOffset: z,
        scrollToIndex: J,
        measure: F
    }
}
export {
    rl as $, Au as A, li as B, uu as C, Ci as D, ii as E, ko as F, Iu as G, Mo as H, Yo as I, nn as J, Ku as K, Za as L, ci as M, Wu as N, Yu as O, Po as P, Do as Q, el as R, Lo as S, oi as T, tc as U, ri as V, vc as W, $r as X, yc as Y, Ja as Z, p as _, F as a, nu as a0, O as a1, Qa as a2, ha as a3, U as a4, nl as a5, ol as a6, sl as a7, vl as a8, Fl as a9, Xh as aA, wh as aB, qh as aC, hf as aD, Md as aE, Nd as aF, xd as aG, le as aH, $h as aI, gd as aJ, _f as aK, Ah as aL, pe as aM, pf as aN, v as aO, g as aP, _ as aQ, e as aR, V as aS, t as aT, B as aU, lf as aV, Gh as aW, Rf as aX, j as aY, q as aZ, kl as aa, jl as ab, Ea as ac, Qt as ad, en as ae, Jt as af, Ka as ag, A as ah, ec as ai, gu as aj, Xl as ak, ai as al, I as am, k as an, Wd as ao, qd as ap, Cr as aq, Vh as ar, f as as, nh as at, Rh as au, jh as av, Kh as aw, Wh as ax, ih as ay, ad as az, o as b, r as c, M as d, ou as e, rn as f, Nt as g, a as h, Ya as i, Co as j, Oo as k, No as l, Aa as m, wo as n, Ro as o, x as p, Bo as q, oe as r, ke as s, ui as t, Ni as u, Mi as v, Li as w, b as x, bt as y, et as z
};