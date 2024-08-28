(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function xl(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Gp(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var sd = {
        exports: {}
    },
    jo = {},
    od = {
        exports: {}
    },
    Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wi = Symbol.for("react.element"),
    Wp = Symbol.for("react.portal"),
    Kp = Symbol.for("react.fragment"),
    Qp = Symbol.for("react.strict_mode"),
    Yp = Symbol.for("react.profiler"),
    Xp = Symbol.for("react.provider"),
    qp = Symbol.for("react.context"),
    Jp = Symbol.for("react.forward_ref"),
    $p = Symbol.for("react.suspense"),
    e6 = Symbol.for("react.memo"),
    t6 = Symbol.for("react.lazy"),
    eu = Symbol.iterator;

function n6(e) {
    return e === null || typeof e != "object" ? null : (e = eu && e[eu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ad = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    ld = Object.assign,
    ud = {};

function wr(e, t, n) {
    this.props = e, this.context = t, this.refs = ud, this.updater = n || ad
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
wr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function cd() {}
cd.prototype = wr.prototype;

function _l(e, t, n) {
    this.props = e, this.context = t, this.refs = ud, this.updater = n || ad
}
var jl = _l.prototype = new cd;
jl.constructor = _l;
ld(jl, wr.prototype);
jl.isPureReactComponent = !0;
var tu = Array.isArray,
    dd = Object.prototype.hasOwnProperty,
    wl = {
        current: null
    },
    fd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function pd(e, t, n) {
    var r, i = {},
        o = null,
        a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t) dd.call(t, r) && !fd.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        i.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: wi,
        type: e,
        key: o,
        ref: a,
        props: i,
        _owner: wl.current
    }
}

function r6(e, t) {
    return {
        $$typeof: wi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Sl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === wi
}

function i6(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var nu = /\/+/g;

function ta(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? i6("" + e.key) : t.toString(36)
}

function ms(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else switch (o) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case wi:
                case Wp:
                    a = !0
            }
    }
    if (a) return a = e, i = i(a), e = r === "" ? "." + ta(a, 0) : r, tu(i) ? (n = "", e != null && (n = e.replace(nu, "$&/") + "/"), ms(i, t, n, "", function(c) {
        return c
    })) : i != null && (Sl(i) && (i = r6(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(nu, "$&/") + "/") + e)), t.push(i)), 1;
    if (a = 0, r = r === "" ? "." : r + ":", tu(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var u = r + ta(o, l);
            a += ms(o, t, n, u, i)
        } else if (u = n6(e), typeof u == "function")
            for (e = u.call(e), l = 0; !(o = e.next()).done;) o = o.value, u = r + ta(o, l++), a += ms(o, t, n, u, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}

function zi(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return ms(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function s6(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Re = {
        current: null
    },
    Cs = {
        transition: null
    },
    o6 = {
        ReactCurrentDispatcher: Re,
        ReactCurrentBatchConfig: Cs,
        ReactCurrentOwner: wl
    };
Z.Children = {
    map: zi,
    forEach: function(e, t, n) {
        zi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return zi(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return zi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Sl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Z.Component = wr;
Z.Fragment = Kp;
Z.Profiler = Yp;
Z.PureComponent = _l;
Z.StrictMode = Qp;
Z.Suspense = $p;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o6;
Z.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ld({}, e.props),
        i = e.key,
        o = e.ref,
        a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, a = wl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (u in t) dd.call(t, u) && !fd.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: wi,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: a
    }
};
Z.createContext = function(e) {
    return e = {
        $$typeof: qp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Xp,
        _context: e
    }, e.Consumer = e
};
Z.createElement = pd;
Z.createFactory = function(e) {
    var t = pd.bind(null, e);
    return t.type = e, t
};
Z.createRef = function() {
    return {
        current: null
    }
};
Z.forwardRef = function(e) {
    return {
        $$typeof: Jp,
        render: e
    }
};
Z.isValidElement = Sl;
Z.lazy = function(e) {
    return {
        $$typeof: t6,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: s6
    }
};
Z.memo = function(e, t) {
    return {
        $$typeof: e6,
        type: e,
        compare: t === void 0 ? null : t
    }
};
Z.startTransition = function(e) {
    var t = Cs.transition;
    Cs.transition = {};
    try {
        e()
    } finally {
        Cs.transition = t
    }
};
Z.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
Z.useCallback = function(e, t) {
    return Re.current.useCallback(e, t)
};
Z.useContext = function(e) {
    return Re.current.useContext(e)
};
Z.useDebugValue = function() {};
Z.useDeferredValue = function(e) {
    return Re.current.useDeferredValue(e)
};
Z.useEffect = function(e, t) {
    return Re.current.useEffect(e, t)
};
Z.useId = function() {
    return Re.current.useId()
};
Z.useImperativeHandle = function(e, t, n) {
    return Re.current.useImperativeHandle(e, t, n)
};
Z.useInsertionEffect = function(e, t) {
    return Re.current.useInsertionEffect(e, t)
};
Z.useLayoutEffect = function(e, t) {
    return Re.current.useLayoutEffect(e, t)
};
Z.useMemo = function(e, t) {
    return Re.current.useMemo(e, t)
};
Z.useReducer = function(e, t, n) {
    return Re.current.useReducer(e, t, n)
};
Z.useRef = function(e) {
    return Re.current.useRef(e)
};
Z.useState = function(e) {
    return Re.current.useState(e)
};
Z.useSyncExternalStore = function(e, t, n) {
    return Re.current.useSyncExternalStore(e, t, n)
};
Z.useTransition = function() {
    return Re.current.useTransition()
};
Z.version = "18.2.0";
od.exports = Z;
var U = od.exports;
const Tl = xl(U);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a6 = U,
    l6 = Symbol.for("react.element"),
    u6 = Symbol.for("react.fragment"),
    c6 = Object.prototype.hasOwnProperty,
    d6 = a6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f6 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function hd(e, t, n) {
    var r, i = {},
        o = null,
        a = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
    for (r in t) c6.call(t, r) && !f6.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: l6,
        type: e,
        key: o,
        ref: a,
        props: i,
        _owner: d6.current
    }
}
jo.Fragment = u6;
jo.jsx = hd;
jo.jsxs = hd;
sd.exports = jo;
var s = sd.exports,
    t1 = {},
    md = {
        exports: {}
    },
    Qe = {},
    Cd = {
        exports: {}
    },
    yd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, N) {
        var F = E.length;
        E.push(N);
        e: for (; 0 < F;) {
            var Q = F - 1 >>> 1,
                de = E[Q];
            if (0 < i(de, N)) E[Q] = N, E[F] = de, F = Q;
            else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var N = E[0],
            F = E.pop();
        if (F !== N) {
            E[0] = F;
            e: for (var Q = 0, de = E.length, Xe = de >>> 1; Q < Xe;) {
                var xt = 2 * (Q + 1) - 1,
                    _t = E[xt],
                    mn = xt + 1,
                    Hi = E[mn];
                if (0 > i(_t, F)) mn < de && 0 > i(Hi, _t) ? (E[Q] = Hi, E[mn] = F, Q = mn) : (E[Q] = _t, E[xt] = F, Q = xt);
                else if (mn < de && 0 > i(Hi, F)) E[Q] = Hi, E[mn] = F, Q = mn;
                else break e
            }
        }
        return N
    }

    function i(E, N) {
        var F = E.sortIndex - N.sortIndex;
        return F !== 0 ? F : E.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var a = Date,
            l = a.now();
        e.unstable_now = function() {
            return a.now() - l
        }
    }
    var u = [],
        c = [],
        d = 1,
        f = null,
        p = 3,
        y = !1,
        v = !1,
        g = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        C = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(E) {
        for (var N = n(c); N !== null;) {
            if (N.callback === null) r(c);
            else if (N.startTime <= E) r(c), N.sortIndex = N.expirationTime, t(u, N);
            else break;
            N = n(c)
        }
    }

    function x(E) {
        if (g = !1, m(E), !v)
            if (n(u) !== null) v = !0, W(j);
            else {
                var N = n(c);
                N !== null && ve(x, N.startTime - E)
            }
    }

    function j(E, N) {
        v = !1, g && (g = !1, C(T), T = -1), y = !0;
        var F = p;
        try {
            for (m(N), f = n(u); f !== null && (!(f.expirationTime > N) || E && !b());) {
                var Q = f.callback;
                if (typeof Q == "function") {
                    f.callback = null, p = f.priorityLevel;
                    var de = Q(f.expirationTime <= N);
                    N = e.unstable_now(), typeof de == "function" ? f.callback = de : f === n(u) && r(u), m(N)
                } else r(u);
                f = n(u)
            }
            if (f !== null) var Xe = !0;
            else {
                var xt = n(c);
                xt !== null && ve(x, xt.startTime - N), Xe = !1
            }
            return Xe
        } finally {
            f = null, p = F, y = !1
        }
    }
    var w = !1,
        k = null,
        T = -1,
        O = 5,
        S = -1;

    function b() {
        return !(e.unstable_now() - S < O)
    }

    function L() {
        if (k !== null) {
            var E = e.unstable_now();
            S = E;
            var N = !0;
            try {
                N = k(!0, E)
            } finally {
                N ? R() : (w = !1, k = null)
            }
        } else w = !1
    }
    var R;
    if (typeof h == "function") R = function() {
        h(L)
    };
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel,
            Y = D.port2;
        D.port1.onmessage = L, R = function() {
            Y.postMessage(null)
        }
    } else R = function() {
        _(L, 0)
    };

    function W(E) {
        k = E, w || (w = !0, R())
    }

    function ve(E, N) {
        T = _(function() {
            E(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
        E.callback = null
    }, e.unstable_continueExecution = function() {
        v || y || (v = !0, W(j))
    }, e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return p
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(E) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var N = 3;
                break;
            default:
                N = p
        }
        var F = p;
        p = N;
        try {
            return E()
        } finally {
            p = F
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, N) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var F = p;
        p = E;
        try {
            return N()
        } finally {
            p = F
        }
    }, e.unstable_scheduleCallback = function(E, N, F) {
        var Q = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? Q + F : Q) : F = Q, E) {
            case 1:
                var de = -1;
                break;
            case 2:
                de = 250;
                break;
            case 5:
                de = 1073741823;
                break;
            case 4:
                de = 1e4;
                break;
            default:
                de = 5e3
        }
        return de = F + de, E = {
            id: d++,
            callback: N,
            priorityLevel: E,
            startTime: F,
            expirationTime: de,
            sortIndex: -1
        }, F > Q ? (E.sortIndex = F, t(c, E), n(u) === null && E === n(c) && (g ? (C(T), T = -1) : g = !0, ve(x, F - Q))) : (E.sortIndex = de, t(u, E), v || y || (v = !0, W(j))), E
    }, e.unstable_shouldYield = b, e.unstable_wrapCallback = function(E) {
        var N = p;
        return function() {
            var F = p;
            p = N;
            try {
                return E.apply(this, arguments)
            } finally {
                p = F
            }
        }
    }
})(yd);
Cd.exports = yd;
var p6 = Cd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gd = U,
    We = p6;

function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var vd = new Set,
    ti = {};

function Rn(e, t) {
    cr(e, t), cr(e + "Capture", t)
}

function cr(e, t) {
    for (ti[e] = t, e = 0; e < t.length; e++) vd.add(t[e])
}
var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    n1 = Object.prototype.hasOwnProperty,
    h6 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ru = {},
    iu = {};

function m6(e) {
    return n1.call(iu, e) ? !0 : n1.call(ru, e) ? !1 : h6.test(e) ? iu[e] = !0 : (ru[e] = !0, !1)
}

function C6(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function y6(e, t, n, r) {
    if (t === null || typeof t > "u" || C6(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function De(e, t, n, r, i, o, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Se[e] = new De(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Se[t] = new De(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Se[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Se[e] = new De(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Se[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Se[e] = new De(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Se[e] = new De(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Se[e] = new De(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Se[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ol = /[\-:]([a-z])/g;

function kl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ol, kl);
    Se[t] = new De(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ol, kl);
    Se[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ol, kl);
    Se[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Se.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Al(e, t, n, r) {
    var i = Se.hasOwnProperty(t) ? Se[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (y6(t, n, i, r) && (n = null), r || i === null ? m6(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Rt = gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Zi = Symbol.for("react.element"),
    In = Symbol.for("react.portal"),
    Fn = Symbol.for("react.fragment"),
    Pl = Symbol.for("react.strict_mode"),
    r1 = Symbol.for("react.profiler"),
    xd = Symbol.for("react.provider"),
    _d = Symbol.for("react.context"),
    El = Symbol.for("react.forward_ref"),
    i1 = Symbol.for("react.suspense"),
    s1 = Symbol.for("react.suspense_list"),
    Ml = Symbol.for("react.memo"),
    It = Symbol.for("react.lazy"),
    jd = Symbol.for("react.offscreen"),
    su = Symbol.iterator;

function Ar(e) {
    return e === null || typeof e != "object" ? null : (e = su && e[su] || e["@@iterator"], typeof e == "function" ? e : null)
}
var le = Object.assign,
    na;

function Nr(e) {
    if (na === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        na = t && t[1] || ""
    }
    return `
` + na + e
}
var ra = !1;

function ia(e, t) {
    if (!e || ra) return "";
    ra = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = r.stack.split(`
`), a = i.length - 1, l = o.length - 1; 1 <= a && 0 <= l && i[a] !== o[l];) l--;
            for (; 1 <= a && 0 <= l; a--, l--)
                if (i[a] !== o[l]) {
                    if (a !== 1 || l !== 1)
                        do
                            if (a--, l--, 0 > l || i[a] !== o[l]) {
                                var u = `
` + i[a].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= a && 0 <= l);
                    break
                }
        }
    } finally {
        ra = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Nr(e) : ""
}

function g6(e) {
    switch (e.tag) {
        case 5:
            return Nr(e.type);
        case 16:
            return Nr("Lazy");
        case 13:
            return Nr("Suspense");
        case 19:
            return Nr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ia(e.type, !1), e;
        case 11:
            return e = ia(e.type.render, !1), e;
        case 1:
            return e = ia(e.type, !0), e;
        default:
            return ""
    }
}

function o1(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Fn:
            return "Fragment";
        case In:
            return "Portal";
        case r1:
            return "Profiler";
        case Pl:
            return "StrictMode";
        case i1:
            return "Suspense";
        case s1:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case _d:
            return (e.displayName || "Context") + ".Consumer";
        case xd:
            return (e._context.displayName || "Context") + ".Provider";
        case El:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ml:
            return t = e.displayName || null, t !== null ? t : o1(e.type) || "Memo";
        case It:
            t = e._payload, e = e._init;
            try {
                return o1(e(t))
            } catch {}
    }
    return null
}

function v6(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return o1(t);
        case 8:
            return t === Pl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function on(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function wd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function x6(e) {
    var t = wd(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(a) {
                r = "" + a, o.call(this, a)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Gi(e) {
    e._valueTracker || (e._valueTracker = x6(e))
}

function Sd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = wd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function bs(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function a1(e, t) {
    var n = t.checked;
    return le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function ou(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = on(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Td(e, t) {
    t = t.checked, t != null && Al(e, "checked", t, !1)
}

function l1(e, t) {
    Td(e, t);
    var n = on(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? u1(e, t.type, n) : t.hasOwnProperty("defaultValue") && u1(e, t.type, on(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function au(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function u1(e, t, n) {
    (t !== "number" || bs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Vr = Array.isArray;

function nr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + on(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function c1(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
    return le({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function lu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(A(92));
            if (Vr(n)) {
                if (1 < n.length) throw Error(A(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: on(n)
    }
}

function Od(e, t) {
    var n = on(t.value),
        r = on(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function uu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function kd(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function d1(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? kd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Wi, Ad = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Wi = Wi || document.createElement("div"), Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Wi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function ni(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Hr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    _6 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hr).forEach(function(e) {
    _6.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Hr[t] = Hr[e]
    })
});

function Pd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Hr.hasOwnProperty(e) && Hr[e] ? ("" + t).trim() : t + "px"
}

function Ed(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Pd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var j6 = le({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function f1(e, t) {
    if (t) {
        if (j6[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(A(62))
    }
}

function p1(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var h1 = null;

function bl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var m1 = null,
    rr = null,
    ir = null;

function cu(e) {
    if (e = Oi(e)) {
        if (typeof m1 != "function") throw Error(A(280));
        var t = e.stateNode;
        t && (t = ko(t), m1(e.stateNode, e.type, t))
    }
}

function Md(e) {
    rr ? ir ? ir.push(e) : ir = [e] : rr = e
}

function bd() {
    if (rr) {
        var e = rr,
            t = ir;
        if (ir = rr = null, cu(e), t)
            for (e = 0; e < t.length; e++) cu(t[e])
    }
}

function Ud(e, t) {
    return e(t)
}

function Ld() {}
var sa = !1;

function Rd(e, t, n) {
    if (sa) return e(t, n);
    sa = !0;
    try {
        return Ud(e, t, n)
    } finally {
        sa = !1, (rr !== null || ir !== null) && (Ld(), bd())
    }
}

function ri(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ko(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(A(231, t, typeof n));
    return n
}
var C1 = !1;
if (Mt) try {
    var Pr = {};
    Object.defineProperty(Pr, "passive", {
        get: function() {
            C1 = !0
        }
    }), window.addEventListener("test", Pr, Pr), window.removeEventListener("test", Pr, Pr)
} catch {
    C1 = !1
}

function w6(e, t, n, r, i, o, a, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var zr = !1,
    Us = null,
    Ls = !1,
    y1 = null,
    S6 = {
        onError: function(e) {
            zr = !0, Us = e
        }
    };

function T6(e, t, n, r, i, o, a, l, u) {
    zr = !1, Us = null, w6.apply(S6, arguments)
}

function O6(e, t, n, r, i, o, a, l, u) {
    if (T6.apply(this, arguments), zr) {
        if (zr) {
            var c = Us;
            zr = !1, Us = null
        } else throw Error(A(198));
        Ls || (Ls = !0, y1 = c)
    }
}

function Dn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Dd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function du(e) {
    if (Dn(e) !== e) throw Error(A(188))
}

function k6(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Dn(e), t === null) throw Error(A(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return du(i), e;
                if (o === r) return du(i), t;
                o = o.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var a = !1, l = i.child; l;) {
                if (l === n) {
                    a = !0, n = i, r = o;
                    break
                }
                if (l === r) {
                    a = !0, r = i, n = o;
                    break
                }
                l = l.sibling
            }
            if (!a) {
                for (l = o.child; l;) {
                    if (l === n) {
                        a = !0, n = o, r = i;
                        break
                    }
                    if (l === r) {
                        a = !0, r = o, n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!a) throw Error(A(189))
            }
        }
        if (n.alternate !== r) throw Error(A(190))
    }
    if (n.tag !== 3) throw Error(A(188));
    return n.stateNode.current === n ? e : t
}

function Nd(e) {
    return e = k6(e), e !== null ? Vd(e) : null
}

function Vd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Vd(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Bd = We.unstable_scheduleCallback,
    fu = We.unstable_cancelCallback,
    A6 = We.unstable_shouldYield,
    P6 = We.unstable_requestPaint,
    pe = We.unstable_now,
    E6 = We.unstable_getCurrentPriorityLevel,
    Ul = We.unstable_ImmediatePriority,
    Id = We.unstable_UserBlockingPriority,
    Rs = We.unstable_NormalPriority,
    M6 = We.unstable_LowPriority,
    Fd = We.unstable_IdlePriority,
    wo = null,
    Ct = null;

function b6(e) {
    if (Ct && typeof Ct.onCommitFiberRoot == "function") try {
        Ct.onCommitFiberRoot(wo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : R6,
    U6 = Math.log,
    L6 = Math.LN2;

function R6(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (U6(e) / L6 | 0) | 0
}
var Ki = 64,
    Qi = 4194304;

function Br(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Ds(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        a = n & 268435455;
    if (a !== 0) {
        var l = a & ~i;
        l !== 0 ? r = Br(l) : (o &= a, o !== 0 && (r = Br(o)))
    } else a = n & ~i, a !== 0 ? r = Br(a) : o !== 0 && (r = Br(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - ut(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function D6(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function N6(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var a = 31 - ut(o),
            l = 1 << a,
            u = i[a];
        u === -1 ? (!(l & n) || l & r) && (i[a] = D6(l, t)) : u <= t && (e.expiredLanes |= l), o &= ~l
    }
}

function g1(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Hd() {
    var e = Ki;
    return Ki <<= 1, !(Ki & 4194240) && (Ki = 64), e
}

function oa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Si(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n
}

function V6(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - ut(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function Ll(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - ut(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var K = 0;

function zd(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Zd, Rl, Gd, Wd, Kd, v1 = !1,
    Yi = [],
    Yt = null,
    Xt = null,
    qt = null,
    ii = new Map,
    si = new Map,
    Zt = [],
    B6 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function pu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Yt = null;
            break;
        case "dragenter":
        case "dragleave":
            Xt = null;
            break;
        case "mouseover":
        case "mouseout":
            qt = null;
            break;
        case "pointerover":
        case "pointerout":
            ii.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            si.delete(t.pointerId)
    }
}

function Er(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = Oi(t), t !== null && Rl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function I6(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Yt = Er(Yt, e, t, n, r, i), !0;
        case "dragenter":
            return Xt = Er(Xt, e, t, n, r, i), !0;
        case "mouseover":
            return qt = Er(qt, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return ii.set(o, Er(ii.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, si.set(o, Er(si.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Qd(e) {
    var t = jn(e.target);
    if (t !== null) {
        var n = Dn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Dd(n), t !== null) {
                    e.blockedOn = t, Kd(e.priority, function() {
                        Gd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function ys(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = x1(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            h1 = r, n.target.dispatchEvent(r), h1 = null
        } else return t = Oi(n), t !== null && Rl(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function hu(e, t, n) {
    ys(e) && n.delete(t)
}

function F6() {
    v1 = !1, Yt !== null && ys(Yt) && (Yt = null), Xt !== null && ys(Xt) && (Xt = null), qt !== null && ys(qt) && (qt = null), ii.forEach(hu), si.forEach(hu)
}

function Mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, v1 || (v1 = !0, We.unstable_scheduleCallback(We.unstable_NormalPriority, F6)))
}

function oi(e) {
    function t(i) {
        return Mr(i, e)
    }
    if (0 < Yi.length) {
        Mr(Yi[0], e);
        for (var n = 1; n < Yi.length; n++) {
            var r = Yi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Yt !== null && Mr(Yt, e), Xt !== null && Mr(Xt, e), qt !== null && Mr(qt, e), ii.forEach(t), si.forEach(t), n = 0; n < Zt.length; n++) r = Zt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Zt.length && (n = Zt[0], n.blockedOn === null);) Qd(n), n.blockedOn === null && Zt.shift()
}
var sr = Rt.ReactCurrentBatchConfig,
    Ns = !0;

function H6(e, t, n, r) {
    var i = K,
        o = sr.transition;
    sr.transition = null;
    try {
        K = 1, Dl(e, t, n, r)
    } finally {
        K = i, sr.transition = o
    }
}

function z6(e, t, n, r) {
    var i = K,
        o = sr.transition;
    sr.transition = null;
    try {
        K = 4, Dl(e, t, n, r)
    } finally {
        K = i, sr.transition = o
    }
}

function Dl(e, t, n, r) {
    if (Ns) {
        var i = x1(e, t, n, r);
        if (i === null) Ca(e, t, r, Vs, n), pu(e, r);
        else if (I6(i, e, t, n, r)) r.stopPropagation();
        else if (pu(e, r), t & 4 && -1 < B6.indexOf(e)) {
            for (; i !== null;) {
                var o = Oi(i);
                if (o !== null && Zd(o), o = x1(e, t, n, r), o === null && Ca(e, t, r, Vs, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else Ca(e, t, r, null, n)
    }
}
var Vs = null;

function x1(e, t, n, r) {
    if (Vs = null, e = bl(r), e = jn(e), e !== null)
        if (t = Dn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Dd(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Vs = e, null
}

function Yd(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (E6()) {
                case Ul:
                    return 1;
                case Id:
                    return 4;
                case Rs:
                case M6:
                    return 16;
                case Fd:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Kt = null,
    Nl = null,
    gs = null;

function Xd() {
    if (gs) return gs;
    var e, t = Nl,
        n = t.length,
        r, i = "value" in Kt ? Kt.value : Kt.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
    return gs = i.slice(e, 1 < r ? 1 - r : void 0)
}

function vs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Xi() {
    return !0
}

function mu() {
    return !1
}

function Ye(e) {
    function t(n, r, i, o, a) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Xi : mu, this.isPropagationStopped = mu, this
    }
    return le(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xi)
        },
        persist: function() {},
        isPersistent: Xi
    }), t
}
var Sr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Vl = Ye(Sr),
    Ti = le({}, Sr, {
        view: 0,
        detail: 0
    }),
    Z6 = Ye(Ti),
    aa, la, br, So = le({}, Ti, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Bl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== br && (br && e.type === "mousemove" ? (aa = e.screenX - br.screenX, la = e.screenY - br.screenY) : la = aa = 0, br = e), aa)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : la
        }
    }),
    Cu = Ye(So),
    G6 = le({}, So, {
        dataTransfer: 0
    }),
    W6 = Ye(G6),
    K6 = le({}, Ti, {
        relatedTarget: 0
    }),
    ua = Ye(K6),
    Q6 = le({}, Sr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Y6 = Ye(Q6),
    X6 = le({}, Sr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    q6 = Ye(X6),
    J6 = le({}, Sr, {
        data: 0
    }),
    yu = Ye(J6),
    $6 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    e7 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    t7 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function n7(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = t7[e]) ? !!t[e] : !1
}

function Bl() {
    return n7
}
var r7 = le({}, Ti, {
        key: function(e) {
            if (e.key) {
                var t = $6[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = vs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? e7[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Bl,
        charCode: function(e) {
            return e.type === "keypress" ? vs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? vs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    i7 = Ye(r7),
    s7 = le({}, So, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    gu = Ye(s7),
    o7 = le({}, Ti, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Bl
    }),
    a7 = Ye(o7),
    l7 = le({}, Sr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    u7 = Ye(l7),
    c7 = le({}, So, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    d7 = Ye(c7),
    f7 = [9, 13, 27, 32],
    Il = Mt && "CompositionEvent" in window,
    Zr = null;
Mt && "documentMode" in document && (Zr = document.documentMode);
var p7 = Mt && "TextEvent" in window && !Zr,
    qd = Mt && (!Il || Zr && 8 < Zr && 11 >= Zr),
    vu = " ",
    xu = !1;

function Jd(e, t) {
    switch (e) {
        case "keyup":
            return f7.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function $d(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Hn = !1;

function h7(e, t) {
    switch (e) {
        case "compositionend":
            return $d(t);
        case "keypress":
            return t.which !== 32 ? null : (xu = !0, vu);
        case "textInput":
            return e = t.data, e === vu && xu ? null : e;
        default:
            return null
    }
}

function m7(e, t) {
    if (Hn) return e === "compositionend" || !Il && Jd(e, t) ? (e = Xd(), gs = Nl = Kt = null, Hn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return qd && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var C7 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function _u(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!C7[e.type] : t === "textarea"
}

function e4(e, t, n, r) {
    Md(r), t = Bs(t, "onChange"), 0 < t.length && (n = new Vl("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Gr = null,
    ai = null;

function y7(e) {
    d4(e, 0)
}

function To(e) {
    var t = Gn(e);
    if (Sd(t)) return e
}

function g7(e, t) {
    if (e === "change") return t
}
var t4 = !1;
if (Mt) {
    var ca;
    if (Mt) {
        var da = "oninput" in document;
        if (!da) {
            var ju = document.createElement("div");
            ju.setAttribute("oninput", "return;"), da = typeof ju.oninput == "function"
        }
        ca = da
    } else ca = !1;
    t4 = ca && (!document.documentMode || 9 < document.documentMode)
}

function wu() {
    Gr && (Gr.detachEvent("onpropertychange", n4), ai = Gr = null)
}

function n4(e) {
    if (e.propertyName === "value" && To(ai)) {
        var t = [];
        e4(t, ai, e, bl(e)), Rd(y7, t)
    }
}

function v7(e, t, n) {
    e === "focusin" ? (wu(), Gr = t, ai = n, Gr.attachEvent("onpropertychange", n4)) : e === "focusout" && wu()
}

function x7(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return To(ai)
}

function _7(e, t) {
    if (e === "click") return To(t)
}

function j7(e, t) {
    if (e === "input" || e === "change") return To(t)
}

function w7(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var dt = typeof Object.is == "function" ? Object.is : w7;

function li(e, t) {
    if (dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!n1.call(t, i) || !dt(e[i], t[i])) return !1
    }
    return !0
}

function Su(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Tu(e, t) {
    var n = Su(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Su(n)
    }
}

function r4(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? r4(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function i4() {
    for (var e = window, t = bs(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = bs(e.document)
    }
    return t
}

function Fl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function S7(e) {
    var t = i4(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && r4(n.ownerDocument.documentElement, n)) {
        if (r !== null && Fl(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Tu(n, o);
                var a = Tu(n, r);
                i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var T7 = Mt && "documentMode" in document && 11 >= document.documentMode,
    zn = null,
    _1 = null,
    Wr = null,
    j1 = !1;

function Ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    j1 || zn == null || zn !== bs(r) || (r = zn, "selectionStart" in r && Fl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Wr && li(Wr, r) || (Wr = r, r = Bs(_1, "onSelect"), 0 < r.length && (t = new Vl("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = zn)))
}

function qi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Zn = {
        animationend: qi("Animation", "AnimationEnd"),
        animationiteration: qi("Animation", "AnimationIteration"),
        animationstart: qi("Animation", "AnimationStart"),
        transitionend: qi("Transition", "TransitionEnd")
    },
    fa = {},
    s4 = {};
Mt && (s4 = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);

function Oo(e) {
    if (fa[e]) return fa[e];
    if (!Zn[e]) return e;
    var t = Zn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in s4) return fa[e] = t[n];
    return e
}
var o4 = Oo("animationend"),
    a4 = Oo("animationiteration"),
    l4 = Oo("animationstart"),
    u4 = Oo("transitionend"),
    c4 = new Map,
    ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function dn(e, t) {
    c4.set(e, t), Rn(t, [e])
}
for (var pa = 0; pa < ku.length; pa++) {
    var ha = ku[pa],
        O7 = ha.toLowerCase(),
        k7 = ha[0].toUpperCase() + ha.slice(1);
    dn(O7, "on" + k7)
}
dn(o4, "onAnimationEnd");
dn(a4, "onAnimationIteration");
dn(l4, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(u4, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
Rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    A7 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));

function Au(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, O6(r, t, void 0, e), e.currentTarget = null
}

function d4(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var l = r[a],
                        u = l.instance,
                        c = l.currentTarget;
                    if (l = l.listener, u !== o && i.isPropagationStopped()) break e;
                    Au(i, l, c), o = u
                } else
                    for (a = 0; a < r.length; a++) {
                        if (l = r[a], u = l.instance, c = l.currentTarget, l = l.listener, u !== o && i.isPropagationStopped()) break e;
                        Au(i, l, c), o = u
                    }
        }
    }
    if (Ls) throw e = y1, Ls = !1, y1 = null, e
}

function q(e, t) {
    var n = t[k1];
    n === void 0 && (n = t[k1] = new Set);
    var r = e + "__bubble";
    n.has(r) || (f4(t, e, 2, !1), n.add(r))
}

function ma(e, t, n) {
    var r = 0;
    t && (r |= 4), f4(n, e, r, t)
}
var Ji = "_reactListening" + Math.random().toString(36).slice(2);

function ui(e) {
    if (!e[Ji]) {
        e[Ji] = !0, vd.forEach(function(n) {
            n !== "selectionchange" && (A7.has(n) || ma(n, !1, e), ma(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ji] || (t[Ji] = !0, ma("selectionchange", !1, t))
    }
}

function f4(e, t, n, r) {
    switch (Yd(t)) {
        case 1:
            var i = H6;
            break;
        case 4:
            i = z6;
            break;
        default:
            i = Dl
    }
    n = i.bind(null, t, n, e), i = void 0, !C1 || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Ca(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (a === 4)
                for (a = r.return; a !== null;) {
                    var u = a.tag;
                    if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) return;
                    a = a.return
                }
            for (; l !== null;) {
                if (a = jn(l), a === null) return;
                if (u = a.tag, u === 5 || u === 6) {
                    r = o = a;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    Rd(function() {
        var c = o,
            d = bl(n),
            f = [];
        e: {
            var p = c4.get(e);
            if (p !== void 0) {
                var y = Vl,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (vs(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = i7;
                        break;
                    case "focusin":
                        v = "focus", y = ua;
                        break;
                    case "focusout":
                        v = "blur", y = ua;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = ua;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = Cu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = W6;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = a7;
                        break;
                    case o4:
                    case a4:
                    case l4:
                        y = Y6;
                        break;
                    case u4:
                        y = u7;
                        break;
                    case "scroll":
                        y = Z6;
                        break;
                    case "wheel":
                        y = d7;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = q6;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = gu
                }
                var g = (t & 4) !== 0,
                    _ = !g && e === "scroll",
                    C = g ? p !== null ? p + "Capture" : null : p;
                g = [];
                for (var h = c, m; h !== null;) {
                    m = h;
                    var x = m.stateNode;
                    if (m.tag === 5 && x !== null && (m = x, C !== null && (x = ri(h, C), x != null && g.push(ci(h, x, m)))), _) break;
                    h = h.return
                }
                0 < g.length && (p = new y(p, v, null, n, d), f.push({
                    event: p,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && n !== h1 && (v = n.relatedTarget || n.fromElement) && (jn(v) || v[bt])) break e;
                if ((y || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = c, v = v ? jn(v) : null, v !== null && (_ = Dn(v), v !== _ || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = c), y !== v)) {
                    if (g = Cu, x = "onMouseLeave", C = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = gu, x = "onPointerLeave", C = "onPointerEnter", h = "pointer"), _ = y == null ? p : Gn(y), m = v == null ? p : Gn(v), p = new g(x, h + "leave", y, n, d), p.target = _, p.relatedTarget = m, x = null, jn(d) === c && (g = new g(C, h + "enter", v, n, d), g.target = m, g.relatedTarget = _, x = g), _ = x, y && v) t: {
                        for (g = y, C = v, h = 0, m = g; m; m = Vn(m)) h++;
                        for (m = 0, x = C; x; x = Vn(x)) m++;
                        for (; 0 < h - m;) g = Vn(g),
                        h--;
                        for (; 0 < m - h;) C = Vn(C),
                        m--;
                        for (; h--;) {
                            if (g === C || C !== null && g === C.alternate) break t;
                            g = Vn(g), C = Vn(C)
                        }
                        g = null
                    }
                    else g = null;
                    y !== null && Pu(f, p, y, g, !1), v !== null && _ !== null && Pu(f, _, v, g, !0)
                }
            }
            e: {
                if (p = c ? Gn(c) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file") var j = g7;
                else if (_u(p))
                    if (t4) j = j7;
                    else {
                        j = x7;
                        var w = v7
                    }
                else(y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (j = _7);
                if (j && (j = j(e, c))) {
                    e4(f, j, n, d);
                    break e
                }
                w && w(e, p, c),
                e === "focusout" && (w = p._wrapperState) && w.controlled && p.type === "number" && u1(p, "number", p.value)
            }
            switch (w = c ? Gn(c) : window, e) {
                case "focusin":
                    (_u(w) || w.contentEditable === "true") && (zn = w, _1 = c, Wr = null);
                    break;
                case "focusout":
                    Wr = _1 = zn = null;
                    break;
                case "mousedown":
                    j1 = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    j1 = !1, Ou(f, n, d);
                    break;
                case "selectionchange":
                    if (T7) break;
                case "keydown":
                case "keyup":
                    Ou(f, n, d)
            }
            var k;
            if (Il) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else Hn ? Jd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (qd && n.locale !== "ko" && (Hn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Hn && (k = Xd()) : (Kt = d, Nl = "value" in Kt ? Kt.value : Kt.textContent, Hn = !0)), w = Bs(c, T), 0 < w.length && (T = new yu(T, e, null, n, d), f.push({
                event: T,
                listeners: w
            }), k ? T.data = k : (k = $d(n), k !== null && (T.data = k)))),
            (k = p7 ? h7(e, n) : m7(e, n)) && (c = Bs(c, "onBeforeInput"), 0 < c.length && (d = new yu("onBeforeInput", "beforeinput", null, n, d), f.push({
                event: d,
                listeners: c
            }), d.data = k))
        }
        d4(f, t)
    })
}

function ci(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Bs(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = ri(e, n), o != null && r.unshift(ci(e, o, i)), o = ri(e, t), o != null && r.push(ci(e, o, i))), e = e.return
    }
    return r
}

function Vn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Pu(e, t, n, r, i) {
    for (var o = t._reactName, a = []; n !== null && n !== r;) {
        var l = n,
            u = l.alternate,
            c = l.stateNode;
        if (u !== null && u === r) break;
        l.tag === 5 && c !== null && (l = c, i ? (u = ri(n, o), u != null && a.unshift(ci(n, u, l))) : i || (u = ri(n, o), u != null && a.push(ci(n, u, l)))), n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var P7 = /\r\n?/g,
    E7 = /\u0000|\uFFFD/g;

function Eu(e) {
    return (typeof e == "string" ? e : "" + e).replace(P7, `
`).replace(E7, "")
}

function $i(e, t, n) {
    if (t = Eu(t), Eu(e) !== t && n) throw Error(A(425))
}

function Is() {}
var w1 = null,
    S1 = null;

function T1(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var O1 = typeof setTimeout == "function" ? setTimeout : void 0,
    M7 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Mu = typeof Promise == "function" ? Promise : void 0,
    b7 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mu < "u" ? function(e) {
        return Mu.resolve(null).then(e).catch(U7)
    } : O1;

function U7(e) {
    setTimeout(function() {
        throw e
    })
}

function ya(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), oi(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    oi(t)
}

function Jt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function bu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Tr = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + Tr,
    di = "__reactProps$" + Tr,
    bt = "__reactContainer$" + Tr,
    k1 = "__reactEvents$" + Tr,
    L7 = "__reactListeners$" + Tr,
    R7 = "__reactHandles$" + Tr;

function jn(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[bt] || n[mt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = bu(e); e !== null;) {
                    if (n = e[mt]) return n;
                    e = bu(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Oi(e) {
    return e = e[mt] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(A(33))
}

function ko(e) {
    return e[di] || null
}
var A1 = [],
    Wn = -1;

function fn(e) {
    return {
        current: e
    }
}

function J(e) {
    0 > Wn || (e.current = A1[Wn], A1[Wn] = null, Wn--)
}

function X(e, t) {
    Wn++, A1[Wn] = e.current, e.current = t
}
var an = {},
    Me = fn(an),
    Ie = fn(!1),
    Pn = an;

function dr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Fe(e) {
    return e = e.childContextTypes, e != null
}

function Fs() {
    J(Ie), J(Me)
}

function Uu(e, t, n) {
    if (Me.current !== an) throw Error(A(168));
    X(Me, t), X(Ie, n)
}

function p4(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(A(108, v6(e) || "Unknown", i));
    return le({}, n, r)
}

function Hs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, Pn = Me.current, X(Me, e), X(Ie, Ie.current), !0
}

function Lu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(A(169));
    n ? (e = p4(e, t, Pn), r.__reactInternalMemoizedMergedChildContext = e, J(Ie), J(Me), X(Me, e)) : J(Ie), X(Ie, n)
}
var wt = null,
    Ao = !1,
    ga = !1;

function h4(e) {
    wt === null ? wt = [e] : wt.push(e)
}

function D7(e) {
    Ao = !0, h4(e)
}

function pn() {
    if (!ga && wt !== null) {
        ga = !0;
        var e = 0,
            t = K;
        try {
            var n = wt;
            for (K = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            wt = null, Ao = !1
        } catch (i) {
            throw wt !== null && (wt = wt.slice(e + 1)), Bd(Ul, pn), i
        } finally {
            K = t, ga = !1
        }
    }
    return null
}
var Kn = [],
    Qn = 0,
    zs = null,
    Zs = 0,
    $e = [],
    et = 0,
    En = null,
    St = 1,
    Tt = "";

function gn(e, t) {
    Kn[Qn++] = Zs, Kn[Qn++] = zs, zs = e, Zs = t
}

function m4(e, t, n) {
    $e[et++] = St, $e[et++] = Tt, $e[et++] = En, En = e;
    var r = St;
    e = Tt;
    var i = 32 - ut(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - ut(t) + i;
    if (30 < o) {
        var a = i - i % 5;
        o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, St = 1 << 32 - ut(t) + i | n << i | r, Tt = o + e
    } else St = 1 << o | n << i | r, Tt = e
}

function Hl(e) {
    e.return !== null && (gn(e, 1), m4(e, 1, 0))
}

function zl(e) {
    for (; e === zs;) zs = Kn[--Qn], Kn[Qn] = null, Zs = Kn[--Qn], Kn[Qn] = null;
    for (; e === En;) En = $e[--et], $e[et] = null, Tt = $e[--et], $e[et] = null, St = $e[--et], $e[et] = null
}
var Ge = null,
    Ze = null,
    te = !1,
    lt = null;

function C4(e, t) {
    var n = tt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ru(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ze = Jt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ze = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? {
                id: St,
                overflow: Tt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ge = e, Ze = null, !0) : !1;
        default:
            return !1
    }
}

function P1(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function E1(e) {
    if (te) {
        var t = Ze;
        if (t) {
            var n = t;
            if (!Ru(e, t)) {
                if (P1(e)) throw Error(A(418));
                t = Jt(n.nextSibling);
                var r = Ge;
                t && Ru(e, t) ? C4(r, n) : (e.flags = e.flags & -4097 | 2, te = !1, Ge = e)
            }
        } else {
            if (P1(e)) throw Error(A(418));
            e.flags = e.flags & -4097 | 2, te = !1, Ge = e
        }
    }
}

function Du(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ge = e
}

function es(e) {
    if (e !== Ge) return !1;
    if (!te) return Du(e), te = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !T1(e.type, e.memoizedProps)), t && (t = Ze)) {
        if (P1(e)) throw y4(), Error(A(418));
        for (; t;) C4(e, t), t = Jt(t.nextSibling)
    }
    if (Du(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ze = Jt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ze = null
        }
    } else Ze = Ge ? Jt(e.stateNode.nextSibling) : null;
    return !0
}

function y4() {
    for (var e = Ze; e;) e = Jt(e.nextSibling)
}

function fr() {
    Ze = Ge = null, te = !1
}

function Zl(e) {
    lt === null ? lt = [e] : lt.push(e)
}
var N7 = Rt.ReactCurrentBatchConfig;

function ot(e, t) {
    if (e && e.defaultProps) {
        t = le({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Gs = fn(null),
    Ws = null,
    Yn = null,
    Gl = null;

function Wl() {
    Gl = Yn = Ws = null
}

function Kl(e) {
    var t = Gs.current;
    J(Gs), e._currentValue = t
}

function M1(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function or(e, t) {
    Ws = e, Gl = Yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), e.firstContext = null)
}

function rt(e) {
    var t = e._currentValue;
    if (Gl !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Yn === null) {
            if (Ws === null) throw Error(A(308));
            Yn = e, Ws.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Yn = Yn.next = e;
    return t
}
var wn = null;

function Ql(e) {
    wn === null ? wn = [e] : wn.push(e)
}

function g4(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Ql(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Ut(e, r)
}

function Ut(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ft = !1;

function Yl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function v4(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function kt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function $t(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, G & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Ut(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Ql(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Ut(e, n)
}

function xs(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ll(e, n)
    }
}

function Nu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = a : o = o.next = a, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ks(e, t, n, r) {
    var i = e.updateQueue;
    Ft = !1;
    var o = i.firstBaseUpdate,
        a = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var u = l,
            c = u.next;
        u.next = null, a === null ? o = c : a.next = c, a = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== a && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = u))
    }
    if (o !== null) {
        var f = i.baseState;
        a = 0, d = c = u = null, l = o;
        do {
            var p = l.lane,
                y = l.eventTime;
            if ((r & p) === p) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e,
                        g = l;
                    switch (p = t, y = n, g.tag) {
                        case 1:
                            if (v = g.payload, typeof v == "function") {
                                f = v.call(y, f, p);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = g.payload, p = typeof v == "function" ? v.call(y, f, p) : v, p == null) break e;
                            f = le({}, f, p);
                            break e;
                        case 2:
                            Ft = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [l] : p.push(l))
            } else y = {
                eventTime: y,
                lane: p,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, d === null ? (c = d = y, u = f) : d = d.next = y, a |= p;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                p = l, l = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = f), i.baseState = u, i.firstBaseUpdate = c, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
            i = t;
            do a |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        bn |= a, e.lanes = a, e.memoizedState = f
    }
}

function Vu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(A(191, i));
                i.call(r)
            }
        }
}
var x4 = new gd.Component().refs;

function b1(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : le({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Po = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Dn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le(),
            i = tn(e),
            o = kt(r, i);
        o.payload = t, n != null && (o.callback = n), t = $t(e, o, i), t !== null && (ct(t, e, i, r), xs(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le(),
            i = tn(e),
            o = kt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = $t(e, o, i), t !== null && (ct(t, e, i, r), xs(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Le(),
            r = tn(e),
            i = kt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = $t(e, i, r), t !== null && (ct(t, e, r, n), xs(t, e, r))
    }
};

function Bu(e, t, n, r, i, o, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !li(n, r) || !li(i, o) : !0
}

function _4(e, t, n) {
    var r = !1,
        i = an,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = rt(o) : (i = Fe(t) ? Pn : Me.current, r = t.contextTypes, o = (r = r != null) ? dr(e, i) : an), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Po, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Iu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Po.enqueueReplaceState(t, t.state, null)
}

function U1(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = x4, Yl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = rt(o) : (o = Fe(t) ? Pn : Me.current, i.context = dr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (b1(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Po.enqueueReplaceState(i, i.state, null), Ks(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ur(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(A(309));
                var r = n.stateNode
            }
            if (!r) throw Error(A(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
                var l = i.refs;
                l === x4 && (l = i.refs = {}), a === null ? delete l[o] : l[o] = a
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(A(284));
        if (!n._owner) throw Error(A(290, e))
    }
    return e
}

function ts(e, t) {
    throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Fu(e) {
    var t = e._init;
    return t(e._payload)
}

function j4(e) {
    function t(C, h) {
        if (e) {
            var m = C.deletions;
            m === null ? (C.deletions = [h], C.flags |= 16) : m.push(h)
        }
    }

    function n(C, h) {
        if (!e) return null;
        for (; h !== null;) t(C, h), h = h.sibling;
        return null
    }

    function r(C, h) {
        for (C = new Map; h !== null;) h.key !== null ? C.set(h.key, h) : C.set(h.index, h), h = h.sibling;
        return C
    }

    function i(C, h) {
        return C = nn(C, h), C.index = 0, C.sibling = null, C
    }

    function o(C, h, m) {
        return C.index = m, e ? (m = C.alternate, m !== null ? (m = m.index, m < h ? (C.flags |= 2, h) : m) : (C.flags |= 2, h)) : (C.flags |= 1048576, h)
    }

    function a(C) {
        return e && C.alternate === null && (C.flags |= 2), C
    }

    function l(C, h, m, x) {
        return h === null || h.tag !== 6 ? (h = Ta(m, C.mode, x), h.return = C, h) : (h = i(h, m), h.return = C, h)
    }

    function u(C, h, m, x) {
        var j = m.type;
        return j === Fn ? d(C, h, m.props.children, x, m.key) : h !== null && (h.elementType === j || typeof j == "object" && j !== null && j.$$typeof === It && Fu(j) === h.type) ? (x = i(h, m.props), x.ref = Ur(C, h, m), x.return = C, x) : (x = Os(m.type, m.key, m.props, null, C.mode, x), x.ref = Ur(C, h, m), x.return = C, x)
    }

    function c(C, h, m, x) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Oa(m, C.mode, x), h.return = C, h) : (h = i(h, m.children || []), h.return = C, h)
    }

    function d(C, h, m, x, j) {
        return h === null || h.tag !== 7 ? (h = kn(m, C.mode, x, j), h.return = C, h) : (h = i(h, m), h.return = C, h)
    }

    function f(C, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = Ta("" + h, C.mode, m), h.return = C, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Zi:
                    return m = Os(h.type, h.key, h.props, null, C.mode, m), m.ref = Ur(C, null, h), m.return = C, m;
                case In:
                    return h = Oa(h, C.mode, m), h.return = C, h;
                case It:
                    var x = h._init;
                    return f(C, x(h._payload), m)
            }
            if (Vr(h) || Ar(h)) return h = kn(h, C.mode, m, null), h.return = C, h;
            ts(C, h)
        }
        return null
    }

    function p(C, h, m, x) {
        var j = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return j !== null ? null : l(C, h, "" + m, x);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Zi:
                    return m.key === j ? u(C, h, m, x) : null;
                case In:
                    return m.key === j ? c(C, h, m, x) : null;
                case It:
                    return j = m._init, p(C, h, j(m._payload), x)
            }
            if (Vr(m) || Ar(m)) return j !== null ? null : d(C, h, m, x, null);
            ts(C, m)
        }
        return null
    }

    function y(C, h, m, x, j) {
        if (typeof x == "string" && x !== "" || typeof x == "number") return C = C.get(m) || null, l(h, C, "" + x, j);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Zi:
                    return C = C.get(x.key === null ? m : x.key) || null, u(h, C, x, j);
                case In:
                    return C = C.get(x.key === null ? m : x.key) || null, c(h, C, x, j);
                case It:
                    var w = x._init;
                    return y(C, h, m, w(x._payload), j)
            }
            if (Vr(x) || Ar(x)) return C = C.get(m) || null, d(h, C, x, j, null);
            ts(h, x)
        }
        return null
    }

    function v(C, h, m, x) {
        for (var j = null, w = null, k = h, T = h = 0, O = null; k !== null && T < m.length; T++) {
            k.index > T ? (O = k, k = null) : O = k.sibling;
            var S = p(C, k, m[T], x);
            if (S === null) {
                k === null && (k = O);
                break
            }
            e && k && S.alternate === null && t(C, k), h = o(S, h, T), w === null ? j = S : w.sibling = S, w = S, k = O
        }
        if (T === m.length) return n(C, k), te && gn(C, T), j;
        if (k === null) {
            for (; T < m.length; T++) k = f(C, m[T], x), k !== null && (h = o(k, h, T), w === null ? j = k : w.sibling = k, w = k);
            return te && gn(C, T), j
        }
        for (k = r(C, k); T < m.length; T++) O = y(k, C, T, m[T], x), O !== null && (e && O.alternate !== null && k.delete(O.key === null ? T : O.key), h = o(O, h, T), w === null ? j = O : w.sibling = O, w = O);
        return e && k.forEach(function(b) {
            return t(C, b)
        }), te && gn(C, T), j
    }

    function g(C, h, m, x) {
        var j = Ar(m);
        if (typeof j != "function") throw Error(A(150));
        if (m = j.call(m), m == null) throw Error(A(151));
        for (var w = j = null, k = h, T = h = 0, O = null, S = m.next(); k !== null && !S.done; T++, S = m.next()) {
            k.index > T ? (O = k, k = null) : O = k.sibling;
            var b = p(C, k, S.value, x);
            if (b === null) {
                k === null && (k = O);
                break
            }
            e && k && b.alternate === null && t(C, k), h = o(b, h, T), w === null ? j = b : w.sibling = b, w = b, k = O
        }
        if (S.done) return n(C, k), te && gn(C, T), j;
        if (k === null) {
            for (; !S.done; T++, S = m.next()) S = f(C, S.value, x), S !== null && (h = o(S, h, T), w === null ? j = S : w.sibling = S, w = S);
            return te && gn(C, T), j
        }
        for (k = r(C, k); !S.done; T++, S = m.next()) S = y(k, C, T, S.value, x), S !== null && (e && S.alternate !== null && k.delete(S.key === null ? T : S.key), h = o(S, h, T), w === null ? j = S : w.sibling = S, w = S);
        return e && k.forEach(function(L) {
            return t(C, L)
        }), te && gn(C, T), j
    }

    function _(C, h, m, x) {
        if (typeof m == "object" && m !== null && m.type === Fn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Zi:
                    e: {
                        for (var j = m.key, w = h; w !== null;) {
                            if (w.key === j) {
                                if (j = m.type, j === Fn) {
                                    if (w.tag === 7) {
                                        n(C, w.sibling), h = i(w, m.props.children), h.return = C, C = h;
                                        break e
                                    }
                                } else if (w.elementType === j || typeof j == "object" && j !== null && j.$$typeof === It && Fu(j) === w.type) {
                                    n(C, w.sibling), h = i(w, m.props), h.ref = Ur(C, w, m), h.return = C, C = h;
                                    break e
                                }
                                n(C, w);
                                break
                            } else t(C, w);
                            w = w.sibling
                        }
                        m.type === Fn ? (h = kn(m.props.children, C.mode, x, m.key), h.return = C, C = h) : (x = Os(m.type, m.key, m.props, null, C.mode, x), x.ref = Ur(C, h, m), x.return = C, C = x)
                    }
                    return a(C);
                case In:
                    e: {
                        for (w = m.key; h !== null;) {
                            if (h.key === w)
                                if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                    n(C, h.sibling), h = i(h, m.children || []), h.return = C, C = h;
                                    break e
                                } else {
                                    n(C, h);
                                    break
                                }
                            else t(C, h);
                            h = h.sibling
                        }
                        h = Oa(m, C.mode, x),
                        h.return = C,
                        C = h
                    }
                    return a(C);
                case It:
                    return w = m._init, _(C, h, w(m._payload), x)
            }
            if (Vr(m)) return v(C, h, m, x);
            if (Ar(m)) return g(C, h, m, x);
            ts(C, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(C, h.sibling), h = i(h, m), h.return = C, C = h) : (n(C, h), h = Ta(m, C.mode, x), h.return = C, C = h), a(C)) : n(C, h)
    }
    return _
}
var pr = j4(!0),
    w4 = j4(!1),
    ki = {},
    yt = fn(ki),
    fi = fn(ki),
    pi = fn(ki);

function Sn(e) {
    if (e === ki) throw Error(A(174));
    return e
}

function Xl(e, t) {
    switch (X(pi, t), X(fi, e), X(yt, ki), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : d1(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = d1(t, e)
    }
    J(yt), X(yt, t)
}

function hr() {
    J(yt), J(fi), J(pi)
}

function S4(e) {
    Sn(pi.current);
    var t = Sn(yt.current),
        n = d1(t, e.type);
    t !== n && (X(fi, e), X(yt, n))
}

function ql(e) {
    fi.current === e && (J(yt), J(fi))
}
var se = fn(0);

function Qs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var va = [];

function Jl() {
    for (var e = 0; e < va.length; e++) va[e]._workInProgressVersionPrimary = null;
    va.length = 0
}
var _s = Rt.ReactCurrentDispatcher,
    xa = Rt.ReactCurrentBatchConfig,
    Mn = 0,
    ae = null,
    me = null,
    ye = null,
    Ys = !1,
    Kr = !1,
    hi = 0,
    V7 = 0;

function Te() {
    throw Error(A(321))
}

function $l(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!dt(e[n], t[n])) return !1;
    return !0
}

function e2(e, t, n, r, i, o) {
    if (Mn = o, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _s.current = e === null || e.memoizedState === null ? H7 : z7, e = n(r, i), Kr) {
        o = 0;
        do {
            if (Kr = !1, hi = 0, 25 <= o) throw Error(A(301));
            o += 1, ye = me = null, t.updateQueue = null, _s.current = Z7, e = n(r, i)
        } while (Kr)
    }
    if (_s.current = Xs, t = me !== null && me.next !== null, Mn = 0, ye = me = ae = null, Ys = !1, t) throw Error(A(300));
    return e
}

function t2() {
    var e = hi !== 0;
    return hi = 0, e
}

function pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ye === null ? ae.memoizedState = ye = e : ye = ye.next = e, ye
}

function it() {
    if (me === null) {
        var e = ae.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = me.next;
    var t = ye === null ? ae.memoizedState : ye.next;
    if (t !== null) ye = t, me = e;
    else {
        if (e === null) throw Error(A(310));
        me = e, e = {
            memoizedState: me.memoizedState,
            baseState: me.baseState,
            baseQueue: me.baseQueue,
            queue: me.queue,
            next: null
        }, ye === null ? ae.memoizedState = ye = e : ye = ye.next = e
    }
    return ye
}

function mi(e, t) {
    return typeof t == "function" ? t(e) : t
}

function _a(e) {
    var t = it(),
        n = t.queue;
    if (n === null) throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = me,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var a = i.next;
            i.next = o.next, o.next = a
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var l = a = null,
            u = null,
            c = o;
        do {
            var d = c.lane;
            if ((Mn & d) === d) u !== null && (u = u.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = f, a = r) : u = u.next = f, ae.lanes |= d, bn |= d
            }
            c = c.next
        } while (c !== null && c !== o);
        u === null ? a = r : u.next = l, dt(r, t.memoizedState) || (Be = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, ae.lanes |= o, bn |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function ja(e) {
    var t = it(),
        n = t.queue;
    if (n === null) throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var a = i = i.next;
        do o = e(o, a.action), a = a.next; while (a !== i);
        dt(o, t.memoizedState) || (Be = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function T4() {}

function O4(e, t) {
    var n = ae,
        r = it(),
        i = t(),
        o = !dt(r.memoizedState, i);
    if (o && (r.memoizedState = i, Be = !0), r = r.queue, n2(P4.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ye !== null && ye.memoizedState.tag & 1) {
        if (n.flags |= 2048, Ci(9, A4.bind(null, n, r, i, t), void 0, null), ge === null) throw Error(A(349));
        Mn & 30 || k4(n, t, i)
    }
    return i
}

function k4(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ae.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function A4(e, t, n, r) {
    t.value = n, t.getSnapshot = r, E4(t) && M4(e)
}

function P4(e, t, n) {
    return n(function() {
        E4(t) && M4(e)
    })
}

function E4(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !dt(e, n)
    } catch {
        return !0
    }
}

function M4(e) {
    var t = Ut(e, 1);
    t !== null && ct(t, e, 1, -1)
}

function Hu(e) {
    var t = pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mi,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = F7.bind(null, ae, e), [t.memoizedState, e]
}

function Ci(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ae.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function b4() {
    return it().memoizedState
}

function js(e, t, n, r) {
    var i = pt();
    ae.flags |= e, i.memoizedState = Ci(1 | t, n, void 0, r === void 0 ? null : r)
}

function Eo(e, t, n, r) {
    var i = it();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (me !== null) {
        var a = me.memoizedState;
        if (o = a.destroy, r !== null && $l(r, a.deps)) {
            i.memoizedState = Ci(t, n, o, r);
            return
        }
    }
    ae.flags |= e, i.memoizedState = Ci(1 | t, n, o, r)
}

function zu(e, t) {
    return js(8390656, 8, e, t)
}

function n2(e, t) {
    return Eo(2048, 8, e, t)
}

function U4(e, t) {
    return Eo(4, 2, e, t)
}

function L4(e, t) {
    return Eo(4, 4, e, t)
}

function R4(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function D4(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Eo(4, 4, R4.bind(null, t, e), n)
}

function r2() {}

function N4(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $l(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function V4(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $l(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function B4(e, t, n) {
    return Mn & 21 ? (dt(n, t) || (n = Hd(), ae.lanes |= n, bn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Be = !0), e.memoizedState = n)
}

function B7(e, t) {
    var n = K;
    K = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = xa.transition;
    xa.transition = {};
    try {
        e(!1), t()
    } finally {
        K = n, xa.transition = r
    }
}

function I4() {
    return it().memoizedState
}

function I7(e, t, n) {
    var r = tn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, F4(e)) H4(t, n);
    else if (n = g4(e, t, n, r), n !== null) {
        var i = Le();
        ct(n, e, r, i), z4(n, t, r)
    }
}

function F7(e, t, n) {
    var r = tn(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (F4(e)) H4(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var a = t.lastRenderedState,
                l = o(a, n);
            if (i.hasEagerState = !0, i.eagerState = l, dt(l, a)) {
                var u = t.interleaved;
                u === null ? (i.next = i, Ql(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = g4(e, t, i, r), n !== null && (i = Le(), ct(n, e, r, i), z4(n, t, r))
    }
}

function F4(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae
}

function H4(e, t) {
    Kr = Ys = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function z4(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ll(e, n)
    }
}
var Xs = {
        readContext: rt,
        useCallback: Te,
        useContext: Te,
        useEffect: Te,
        useImperativeHandle: Te,
        useInsertionEffect: Te,
        useLayoutEffect: Te,
        useMemo: Te,
        useReducer: Te,
        useRef: Te,
        useState: Te,
        useDebugValue: Te,
        useDeferredValue: Te,
        useTransition: Te,
        useMutableSource: Te,
        useSyncExternalStore: Te,
        useId: Te,
        unstable_isNewReconciler: !1
    },
    H7 = {
        readContext: rt,
        useCallback: function(e, t) {
            return pt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: rt,
        useEffect: zu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, js(4194308, 4, R4.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return js(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return js(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = pt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = pt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = I7.bind(null, ae, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = pt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Hu,
        useDebugValue: r2,
        useDeferredValue: function(e) {
            return pt().memoizedState = e
        },
        useTransition: function() {
            var e = Hu(!1),
                t = e[0];
            return e = B7.bind(null, e[1]), pt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ae,
                i = pt();
            if (te) {
                if (n === void 0) throw Error(A(407));
                n = n()
            } else {
                if (n = t(), ge === null) throw Error(A(349));
                Mn & 30 || k4(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, zu(P4.bind(null, r, o, e), [e]), r.flags |= 2048, Ci(9, A4.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = pt(),
                t = ge.identifierPrefix;
            if (te) {
                var n = Tt,
                    r = St;
                n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = hi++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = V7++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    z7 = {
        readContext: rt,
        useCallback: N4,
        useContext: rt,
        useEffect: n2,
        useImperativeHandle: D4,
        useInsertionEffect: U4,
        useLayoutEffect: L4,
        useMemo: V4,
        useReducer: _a,
        useRef: b4,
        useState: function() {
            return _a(mi)
        },
        useDebugValue: r2,
        useDeferredValue: function(e) {
            var t = it();
            return B4(t, me.memoizedState, e)
        },
        useTransition: function() {
            var e = _a(mi)[0],
                t = it().memoizedState;
            return [e, t]
        },
        useMutableSource: T4,
        useSyncExternalStore: O4,
        useId: I4,
        unstable_isNewReconciler: !1
    },
    Z7 = {
        readContext: rt,
        useCallback: N4,
        useContext: rt,
        useEffect: n2,
        useImperativeHandle: D4,
        useInsertionEffect: U4,
        useLayoutEffect: L4,
        useMemo: V4,
        useReducer: ja,
        useRef: b4,
        useState: function() {
            return ja(mi)
        },
        useDebugValue: r2,
        useDeferredValue: function(e) {
            var t = it();
            return me === null ? t.memoizedState = e : B4(t, me.memoizedState, e)
        },
        useTransition: function() {
            var e = ja(mi)[0],
                t = it().memoizedState;
            return [e, t]
        },
        useMutableSource: T4,
        useSyncExternalStore: O4,
        useId: I4,
        unstable_isNewReconciler: !1
    };

function mr(e, t) {
    try {
        var n = "",
            r = t;
        do n += g6(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function wa(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function L1(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var G7 = typeof WeakMap == "function" ? WeakMap : Map;

function Z4(e, t, n) {
    n = kt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Js || (Js = !0, Z1 = r), L1(e, t)
    }, n
}

function G4(e, t, n) {
    n = kt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            L1(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        L1(e, t), typeof r != "function" && (en === null ? en = new Set([this]) : en.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }), n
}

function Zu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new G7;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = s8.bind(null, e, t, n), t.then(e, e))
}

function Gu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Wu(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = kt(-1, 1), t.tag = 2, $t(n, t, 1))), n.lanes |= 1), e)
}
var W7 = Rt.ReactCurrentOwner,
    Be = !1;

function Ue(e, t, n, r) {
    t.child = e === null ? w4(t, null, n, r) : pr(t, e.child, n, r)
}

function Ku(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return or(t, i), r = e2(e, t, n, r, o, i), n = t2(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Lt(e, t, i)) : (te && n && Hl(t), t.flags |= 1, Ue(e, t, r, i), t.child)
}

function Qu(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !d2(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, W4(e, t, o, r, i)) : (e = Os(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var a = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : li, n(a, r) && e.ref === t.ref) return Lt(e, t, i)
    }
    return t.flags |= 1, e = nn(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function W4(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (li(o, r) && e.ref === t.ref)
            if (Be = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Be = !0);
            else return t.lanes = e.lanes, Lt(e, t, i)
    }
    return R1(e, t, n, r, i)
}

function K4(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, X(qn, ze), ze |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, X(qn, ze), ze |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, X(qn, ze), ze |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, X(qn, ze), ze |= r;
    return Ue(e, t, i, n), t.child
}

function Q4(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function R1(e, t, n, r, i) {
    var o = Fe(n) ? Pn : Me.current;
    return o = dr(t, o), or(t, i), n = e2(e, t, n, r, o, i), r = t2(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Lt(e, t, i)) : (te && r && Hl(t), t.flags |= 1, Ue(e, t, n, i), t.child)
}

function Yu(e, t, n, r, i) {
    if (Fe(n)) {
        var o = !0;
        Hs(t)
    } else o = !1;
    if (or(t, i), t.stateNode === null) ws(e, t), _4(t, n, r), U1(t, n, r, i), r = !0;
    else if (e === null) {
        var a = t.stateNode,
            l = t.memoizedProps;
        a.props = l;
        var u = a.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = rt(c) : (c = Fe(n) ? Pn : Me.current, c = dr(t, c));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== r || u !== c) && Iu(t, a, r, c), Ft = !1;
        var p = t.memoizedState;
        a.state = p, Ks(t, r, a, i), u = t.memoizedState, l !== r || p !== u || Ie.current || Ft ? (typeof d == "function" && (b1(t, n, d, r), u = t.memoizedState), (l = Ft || Bu(t, n, l, r, p, u, c)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = c, r = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        a = t.stateNode, v4(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : ot(t.type, l), a.props = c, f = t.pendingProps, p = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = rt(u) : (u = Fe(n) ? Pn : Me.current, u = dr(t, u));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== f || p !== u) && Iu(t, a, r, u), Ft = !1, p = t.memoizedState, a.state = p, Ks(t, r, a, i);
        var v = t.memoizedState;
        l !== f || p !== v || Ie.current || Ft ? (typeof y == "function" && (b1(t, n, y, r), v = t.memoizedState), (c = Ft || Bu(t, n, c, r, p, v, u) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, v, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, v, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), a.props = r, a.state = v, a.context = u, r = c) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return D1(e, t, n, r, o, i)
}

function D1(e, t, n, r, i, o) {
    Q4(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return i && Lu(t, n, !1), Lt(e, t, o);
    r = t.stateNode, W7.current = t;
    var l = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = pr(t, e.child, null, o), t.child = pr(t, null, l, o)) : Ue(e, t, l, o), t.memoizedState = r.state, i && Lu(t, n, !0), t.child
}

function Y4(e) {
    var t = e.stateNode;
    t.pendingContext ? Uu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uu(e, t.context, !1), Xl(e, t.containerInfo)
}

function Xu(e, t, n, r, i) {
    return fr(), Zl(i), t.flags |= 256, Ue(e, t, n, r), t.child
}
var N1 = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function V1(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function X4(e, t, n) {
    var r = t.pendingProps,
        i = se.current,
        o = !1,
        a = (t.flags & 128) !== 0,
        l;
    if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), X(se, i & 1), e === null) return E1(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, a = {
        mode: "hidden",
        children: a
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = Uo(a, r, 0, null), e = kn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = V1(n), t.memoizedState = N1, e) : i2(t, a));
    if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return K7(e, t, a, r, l, i, n);
    if (o) {
        o = r.fallback, a = t.mode, i = e.child, l = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = nn(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = nn(l, o) : (o = kn(o, a, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, a = e.child.memoizedState, a = a === null ? V1(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        }, o.memoizedState = a, o.childLanes = e.childLanes & ~n, t.memoizedState = N1, r
    }
    return o = e.child, e = o.sibling, r = nn(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function i2(e, t) {
    return t = Uo({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function ns(e, t, n, r) {
    return r !== null && Zl(r), pr(t, e.child, null, n), e = i2(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function K7(e, t, n, r, i, o, a) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = wa(Error(A(422))), ns(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Uo({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = kn(o, i, a, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pr(t, e.child, null, a), t.child.memoizedState = V1(a), t.memoizedState = N1, o);
    if (!(t.mode & 1)) return ns(e, t, a, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
        return r = l, o = Error(A(419)), r = wa(o, r, void 0), ns(e, t, a, r)
    }
    if (l = (a & e.childLanes) !== 0, Be || l) {
        if (r = ge, r !== null) {
            switch (a & -a) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Ut(e, i), ct(r, e, i, -1))
        }
        return c2(), r = wa(Error(A(421))), ns(e, t, a, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = o8.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ze = Jt(i.nextSibling), Ge = t, te = !0, lt = null, e !== null && ($e[et++] = St, $e[et++] = Tt, $e[et++] = En, St = e.id, Tt = e.overflow, En = t), t = i2(t, r.children), t.flags |= 4096, t)
}

function qu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), M1(e.return, t, n)
}

function Sa(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function q4(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (Ue(e, t, r.children, n), r = se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && qu(e, n, t);
            else if (e.tag === 19) qu(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (X(se, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Qs(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Sa(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Qs(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Sa(t, !0, n, null, o);
            break;
        case "together":
            Sa(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ws(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Lt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), bn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Q7(e, t, n) {
    switch (t.tag) {
        case 3:
            Y4(t), fr();
            break;
        case 5:
            S4(t);
            break;
        case 1:
            Fe(t.type) && Hs(t);
            break;
        case 4:
            Xl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            X(Gs, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (X(se, se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? X4(e, t, n) : (X(se, se.current & 1), e = Lt(e, t, n), e !== null ? e.sibling : null);
            X(se, se.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return q4(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), X(se, se.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, K4(e, t, n)
    }
    return Lt(e, t, n)
}
var J4, B1, $4, ef;
J4 = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
B1 = function() {};
$4 = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Sn(yt.current);
        var o = null;
        switch (n) {
            case "input":
                i = a1(e, i), r = a1(e, r), o = [];
                break;
            case "select":
                i = le({}, i, {
                    value: void 0
                }), r = le({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = c1(e, i), r = c1(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Is)
        }
        f1(n, r);
        var a;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var l = i[c];
                    for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ti.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = i != null ? i[c] : void 0, r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (a in l) !l.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                        for (a in u) u.hasOwnProperty(a) && l[a] !== u[a] && (n || (n = {}), n[a] = u[a])
                    } else n || (o || (o = []), o.push(c, n)), n = u;
            else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ti.hasOwnProperty(c) ? (u != null && c === "onScroll" && q("scroll", e), o || l === u || (o = [])) : (o = o || []).push(c, u))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
ef = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Lr(e, t) {
    if (!te) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Y7(e, t, n) {
    var r = t.pendingProps;
    switch (zl(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Oe(t), null;
        case 1:
            return Fe(t.type) && Fs(), Oe(t), null;
        case 3:
            return r = t.stateNode, hr(), J(Ie), J(Me), Jl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (es(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (K1(lt), lt = null))), B1(e, t), Oe(t), null;
        case 5:
            ql(t);
            var i = Sn(pi.current);
            if (n = t.type, e !== null && t.stateNode != null) $4(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(A(166));
                    return Oe(t), null
                }
                if (e = Sn(yt.current), es(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[mt] = t, r[di] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            q("cancel", r), q("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            q("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Ir.length; i++) q(Ir[i], r);
                            break;
                        case "source":
                            q("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            q("error", r), q("load", r);
                            break;
                        case "details":
                            q("toggle", r);
                            break;
                        case "input":
                            ou(r, o), q("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, q("invalid", r);
                            break;
                        case "textarea":
                            lu(r, o), q("invalid", r)
                    }
                    f1(n, o), i = null;
                    for (var a in o)
                        if (o.hasOwnProperty(a)) {
                            var l = o[a];
                            a === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && $i(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && $i(r.textContent, l, e), i = ["children", "" + l]) : ti.hasOwnProperty(a) && l != null && a === "onScroll" && q("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Gi(r), au(r, o, !0);
                            break;
                        case "textarea":
                            Gi(r), uu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Is)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = kd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                        is: r.is
                    }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[mt] = t, e[di] = r, J4(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (a = p1(n, r), n) {
                            case "dialog":
                                q("cancel", e), q("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                q("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Ir.length; i++) q(Ir[i], e);
                                i = r;
                                break;
                            case "source":
                                q("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                q("error", e), q("load", e), i = r;
                                break;
                            case "details":
                                q("toggle", e), i = r;
                                break;
                            case "input":
                                ou(e, r), i = a1(e, r), q("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = le({}, r, {
                                    value: void 0
                                }), q("invalid", e);
                                break;
                            case "textarea":
                                lu(e, r), i = c1(e, r), q("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        f1(n, i),
                        l = i;
                        for (o in l)
                            if (l.hasOwnProperty(o)) {
                                var u = l[o];
                                o === "style" ? Ed(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ad(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ni(e, u) : typeof u == "number" && ni(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ti.hasOwnProperty(o) ? u != null && o === "onScroll" && q("scroll", e) : u != null && Al(e, o, u, a))
                            }
                        switch (n) {
                            case "input":
                                Gi(e), au(e, r, !1);
                                break;
                            case "textarea":
                                Gi(e), uu(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + on(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? nr(e, !!r.multiple, o, !1) : r.defaultValue != null && nr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Is)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Oe(t), null;
        case 6:
            if (e && t.stateNode != null) ef(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
                if (n = Sn(pi.current), Sn(yt.current), es(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[mt] = t, (o = r.nodeValue !== n) && (e = Ge, e !== null)) switch (e.tag) {
                        case 3:
                            $i(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && $i(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mt] = t, t.stateNode = r
            }
            return Oe(t), null;
        case 13:
            if (J(se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (te && Ze !== null && t.mode & 1 && !(t.flags & 128)) y4(), fr(), t.flags |= 98560, o = !1;
                else if (o = es(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(A(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(A(317));
                        o[mt] = t
                    } else fr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Oe(t), o = !1
                } else lt !== null && (K1(lt), lt = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || se.current & 1 ? Ce === 0 && (Ce = 3) : c2())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
        case 4:
            return hr(), B1(e, t), e === null && ui(t.stateNode.containerInfo), Oe(t), null;
        case 10:
            return Kl(t.type._context), Oe(t), null;
        case 17:
            return Fe(t.type) && Fs(), Oe(t), null;
        case 19:
            if (J(se), o = t.memoizedState, o === null) return Oe(t), null;
            if (r = (t.flags & 128) !== 0, a = o.rendering, a === null)
                if (r) Lr(o, !1);
                else {
                    if (Ce !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (a = Qs(e), a !== null) {
                                for (t.flags |= 128, Lr(o, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return X(se, se.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && pe() > Cr && (t.flags |= 128, r = !0, Lr(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Qs(a), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Lr(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !te) return Oe(t), null
                    } else 2 * pe() - o.renderingStartTime > Cr && n !== 1073741824 && (t.flags |= 128, r = !0, Lr(o, !1), t.lanes = 4194304);
                o.isBackwards ? (a.sibling = t.child, t.child = a) : (n = o.last, n !== null ? n.sibling = a : t.child = a, o.last = a)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = pe(), t.sibling = null, n = se.current, X(se, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
        case 22:
        case 23:
            return u2(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ze & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(A(156, t.tag))
}

function X7(e, t) {
    switch (zl(t), t.tag) {
        case 1:
            return Fe(t.type) && Fs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return hr(), J(Ie), J(Me), Jl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ql(t), null;
        case 13:
            if (J(se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(A(340));
                fr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return J(se), null;
        case 4:
            return hr(), null;
        case 10:
            return Kl(t.type._context), null;
        case 22:
        case 23:
            return u2(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var rs = !1,
    Ae = !1,
    q7 = typeof WeakSet == "function" ? WeakSet : Set,
    M = null;

function Xn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ce(e, t, r)
        } else n.current = null
}

function I1(e, t, n) {
    try {
        n()
    } catch (r) {
        ce(e, t, r)
    }
}
var Ju = !1;

function J7(e, t) {
    if (w1 = Ns, e = i4(), Fl(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var a = 0,
                    l = -1,
                    u = -1,
                    c = 0,
                    d = 0,
                    f = e,
                    p = null;
                t: for (;;) {
                    for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (l = a + i), f !== o || r !== 0 && f.nodeType !== 3 || (u = a + r), f.nodeType === 3 && (a += f.nodeValue.length), (y = f.firstChild) !== null;) p = f, f = y;
                    for (;;) {
                        if (f === e) break t;
                        if (p === n && ++c === i && (l = a), p === o && ++d === r && (u = a), (y = f.nextSibling) !== null) break;
                        f = p, p = f.parentNode
                    }
                    f = y
                }
                n = l === -1 || u === -1 ? null : {
                    start: l,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (S1 = {
            focusedElem: e,
            selectionRange: n
        }, Ns = !1, M = t; M !== null;)
        if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
        else
            for (; M !== null;) {
                t = M;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var g = v.memoizedProps,
                                    _ = v.memoizedState,
                                    C = t.stateNode,
                                    h = C.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ot(t.type, g), _);
                                C.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                    }
                } catch (x) {
                    ce(t, t.return, x)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, M = e;
                    break
                }
                M = t.return
            }
    return v = Ju, Ju = !1, v
}

function Qr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && I1(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function Mo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function F1(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function tf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, tf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[di], delete t[k1], delete t[L7], delete t[R7])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function nf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function $u(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || nf(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function H1(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Is));
    else if (r !== 4 && (e = e.child, e !== null))
        for (H1(e, t, n), e = e.sibling; e !== null;) H1(e, t, n), e = e.sibling
}

function z1(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (z1(e, t, n), e = e.sibling; e !== null;) z1(e, t, n), e = e.sibling
}
var xe = null,
    at = !1;

function Dt(e, t, n) {
    for (n = n.child; n !== null;) rf(e, t, n), n = n.sibling
}

function rf(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function") try {
        Ct.onCommitFiberUnmount(wo, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Ae || Xn(n, t);
        case 6:
            var r = xe,
                i = at;
            xe = null, Dt(e, t, n), xe = r, at = i, xe !== null && (at ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
            break;
        case 18:
            xe !== null && (at ? (e = xe, n = n.stateNode, e.nodeType === 8 ? ya(e.parentNode, n) : e.nodeType === 1 && ya(e, n), oi(e)) : ya(xe, n.stateNode));
            break;
        case 4:
            r = xe, i = at, xe = n.stateNode.containerInfo, at = !0, Dt(e, t, n), xe = r, at = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ae && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        a = o.destroy;
                    o = o.tag, a !== void 0 && (o & 2 || o & 4) && I1(n, t, a), i = i.next
                } while (i !== r)
            }
            Dt(e, t, n);
            break;
        case 1:
            if (!Ae && (Xn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                ce(n, t, l)
            }
            Dt(e, t, n);
            break;
        case 21:
            Dt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ae = (r = Ae) || n.memoizedState !== null, Dt(e, t, n), Ae = r) : Dt(e, t, n);
            break;
        default:
            Dt(e, t, n)
    }
}

function ec(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new q7), t.forEach(function(r) {
            var i = a8.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function st(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    a = t,
                    l = a;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            xe = l.stateNode, at = !1;
                            break e;
                        case 3:
                            xe = l.stateNode.containerInfo, at = !0;
                            break e;
                        case 4:
                            xe = l.stateNode.containerInfo, at = !0;
                            break e
                    }
                    l = l.return
                }
                if (xe === null) throw Error(A(160));
                rf(o, a, i), xe = null, at = !1;
                var u = i.alternate;
                u !== null && (u.return = null), i.return = null
            } catch (c) {
                ce(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) sf(t, e), t = t.sibling
}

function sf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (st(t, e), ft(e), r & 4) {
                try {
                    Qr(3, e, e.return), Mo(3, e)
                } catch (g) {
                    ce(e, e.return, g)
                }
                try {
                    Qr(5, e, e.return)
                } catch (g) {
                    ce(e, e.return, g)
                }
            }
            break;
        case 1:
            st(t, e), ft(e), r & 512 && n !== null && Xn(n, n.return);
            break;
        case 5:
            if (st(t, e), ft(e), r & 512 && n !== null && Xn(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    ni(i, "")
                } catch (g) {
                    ce(e, e.return, g)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    a = n !== null ? n.memoizedProps : o,
                    l = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    l === "input" && o.type === "radio" && o.name != null && Td(i, o), p1(l, a);
                    var c = p1(l, o);
                    for (a = 0; a < u.length; a += 2) {
                        var d = u[a],
                            f = u[a + 1];
                        d === "style" ? Ed(i, f) : d === "dangerouslySetInnerHTML" ? Ad(i, f) : d === "children" ? ni(i, f) : Al(i, d, f, c)
                    }
                    switch (l) {
                        case "input":
                            l1(i, o);
                            break;
                        case "textarea":
                            Od(i, o);
                            break;
                        case "select":
                            var p = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var y = o.value;
                            y != null ? nr(i, !!o.multiple, y, !1) : p !== !!o.multiple && (o.defaultValue != null ? nr(i, !!o.multiple, o.defaultValue, !0) : nr(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[di] = o
                } catch (g) {
                    ce(e, e.return, g)
                }
            }
            break;
        case 6:
            if (st(t, e), ft(e), r & 4) {
                if (e.stateNode === null) throw Error(A(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (g) {
                    ce(e, e.return, g)
                }
            }
            break;
        case 3:
            if (st(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                oi(t.containerInfo)
            } catch (g) {
                ce(e, e.return, g)
            }
            break;
        case 4:
            st(t, e), ft(e);
            break;
        case 13:
            st(t, e), ft(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (a2 = pe())), r & 4 && ec(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ae = (c = Ae) || d, st(t, e), Ae = c) : st(t, e), ft(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1)
                    for (M = e, d = e.child; d !== null;) {
                        for (f = M = d; M !== null;) {
                            switch (p = M, y = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Qr(4, p, p.return);
                                    break;
                                case 1:
                                    Xn(p, p.return);
                                    var v = p.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = p, n = p.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (g) {
                                            ce(r, n, g)
                                        }
                                    }
                                    break;
                                case 5:
                                    Xn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        nc(f);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = p, M = y) : nc(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null, f = e;;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                i = f.stateNode, c ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, u = f.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = Pd("display", a))
                            } catch (g) {
                                ce(e, e.return, g)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null) try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (g) {
                            ce(e, e.return, g)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), f = f.return
                    }
                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            st(t, e), ft(e), r & 4 && ec(e);
            break;
        case 21:
            break;
        default:
            st(t, e), ft(e)
    }
}

function ft(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (nf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (ni(i, ""), r.flags &= -33);
                    var o = $u(e);
                    z1(e, o, i);
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo,
                        l = $u(e);
                    H1(e, l, a);
                    break;
                default:
                    throw Error(A(161))
            }
        }
        catch (u) {
            ce(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function $7(e, t, n) {
    M = e, of (e)
}

function of (e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null;) {
        var i = M,
            o = i.child;
        if (i.tag === 22 && r) {
            var a = i.memoizedState !== null || rs;
            if (!a) {
                var l = i.alternate,
                    u = l !== null && l.memoizedState !== null || Ae;
                l = rs;
                var c = Ae;
                if (rs = a, (Ae = u) && !c)
                    for (M = i; M !== null;) a = M, u = a.child, a.tag === 22 && a.memoizedState !== null ? rc(i) : u !== null ? (u.return = a, M = u) : rc(i);
                for (; o !== null;) M = o, of (o), o = o.sibling;
                M = i, rs = l, Ae = c
            }
            tc(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, M = o) : tc(e)
    }
}

function tc(e) {
    for (; M !== null;) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ae || Mo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ae)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Vu(t, o, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Vu(t, a, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && oi(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(A(163))
                }
                Ae || t.flags & 512 && F1(t)
            } catch (p) {
                ce(t, t.return, p)
            }
        }
        if (t === e) {
            M = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, M = n;
            break
        }
        M = t.return
    }
}

function nc(e) {
    for (; M !== null;) {
        var t = M;
        if (t === e) {
            M = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, M = n;
            break
        }
        M = t.return
    }
}

function rc(e) {
    for (; M !== null;) {
        var t = M;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Mo(4, t)
                    } catch (u) {
                        ce(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            ce(t, i, u)
                        }
                    }
                    var o = t.return;
                    try {
                        F1(t)
                    } catch (u) {
                        ce(t, o, u)
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        F1(t)
                    } catch (u) {
                        ce(t, a, u)
                    }
            }
        } catch (u) {
            ce(t, t.return, u)
        }
        if (t === e) {
            M = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, M = l;
            break
        }
        M = t.return
    }
}
var e8 = Math.ceil,
    qs = Rt.ReactCurrentDispatcher,
    s2 = Rt.ReactCurrentOwner,
    nt = Rt.ReactCurrentBatchConfig,
    G = 0,
    ge = null,
    he = null,
    je = 0,
    ze = 0,
    qn = fn(0),
    Ce = 0,
    yi = null,
    bn = 0,
    bo = 0,
    o2 = 0,
    Yr = null,
    Ve = null,
    a2 = 0,
    Cr = 1 / 0,
    jt = null,
    Js = !1,
    Z1 = null,
    en = null,
    is = !1,
    Qt = null,
    $s = 0,
    Xr = 0,
    G1 = null,
    Ss = -1,
    Ts = 0;

function Le() {
    return G & 6 ? pe() : Ss !== -1 ? Ss : Ss = pe()
}

function tn(e) {
    return e.mode & 1 ? G & 2 && je !== 0 ? je & -je : N7.transition !== null ? (Ts === 0 && (Ts = Hd()), Ts) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yd(e.type)), e) : 1
}

function ct(e, t, n, r) {
    if (50 < Xr) throw Xr = 0, G1 = null, Error(A(185));
    Si(e, n, r), (!(G & 2) || e !== ge) && (e === ge && (!(G & 2) && (bo |= n), Ce === 4 && Gt(e, je)), He(e, r), n === 1 && G === 0 && !(t.mode & 1) && (Cr = pe() + 500, Ao && pn()))
}

function He(e, t) {
    var n = e.callbackNode;
    N6(e, t);
    var r = Ds(e, e === ge ? je : 0);
    if (r === 0) n !== null && fu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && fu(n), t === 1) e.tag === 0 ? D7(ic.bind(null, e)) : h4(ic.bind(null, e)), b7(function() {
            !(G & 6) && pn()
        }), n = null;
        else {
            switch (zd(r)) {
                case 1:
                    n = Ul;
                    break;
                case 4:
                    n = Id;
                    break;
                case 16:
                    n = Rs;
                    break;
                case 536870912:
                    n = Fd;
                    break;
                default:
                    n = Rs
            }
            n = hf(n, af.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function af(e, t) {
    if (Ss = -1, Ts = 0, G & 6) throw Error(A(327));
    var n = e.callbackNode;
    if (ar() && e.callbackNode !== n) return null;
    var r = Ds(e, e === ge ? je : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = eo(e, r);
    else {
        t = r;
        var i = G;
        G |= 2;
        var o = uf();
        (ge !== e || je !== t) && (jt = null, Cr = pe() + 500, On(e, t));
        do try {
            r8();
            break
        } catch (l) {
            lf(e, l)
        }
        while (!0);
        Wl(), qs.current = o, G = i, he !== null ? t = 0 : (ge = null, je = 0, t = Ce)
    }
    if (t !== 0) {
        if (t === 2 && (i = g1(e), i !== 0 && (r = i, t = W1(e, i))), t === 1) throw n = yi, On(e, 0), Gt(e, r), He(e, pe()), n;
        if (t === 6) Gt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !t8(i) && (t = eo(e, r), t === 2 && (o = g1(e), o !== 0 && (r = o, t = W1(e, o))), t === 1)) throw n = yi, On(e, 0), Gt(e, r), He(e, pe()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(A(345));
                case 2:
                    vn(e, Ve, jt);
                    break;
                case 3:
                    if (Gt(e, r), (r & 130023424) === r && (t = a2 + 500 - pe(), 10 < t)) {
                        if (Ds(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Le(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = O1(vn.bind(null, e, Ve, jt), t);
                        break
                    }
                    vn(e, Ve, jt);
                    break;
                case 4:
                    if (Gt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var a = 31 - ut(r);
                        o = 1 << a, a = t[a], a > i && (i = a), r &= ~o
                    }
                    if (r = i, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * e8(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = O1(vn.bind(null, e, Ve, jt), r);
                        break
                    }
                    vn(e, Ve, jt);
                    break;
                case 5:
                    vn(e, Ve, jt);
                    break;
                default:
                    throw Error(A(329))
            }
        }
    }
    return He(e, pe()), e.callbackNode === n ? af.bind(null, e) : null
}

function W1(e, t) {
    var n = Yr;
    return e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256), e = eo(e, t), e !== 2 && (t = Ve, Ve = n, t !== null && K1(t)), e
}

function K1(e) {
    Ve === null ? Ve = e : Ve.push.apply(Ve, e)
}

function t8(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!dt(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Gt(e, t) {
    for (t &= ~o2, t &= ~bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - ut(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function ic(e) {
    if (G & 6) throw Error(A(327));
    ar();
    var t = Ds(e, 0);
    if (!(t & 1)) return He(e, pe()), null;
    var n = eo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = g1(e);
        r !== 0 && (t = r, n = W1(e, r))
    }
    if (n === 1) throw n = yi, On(e, 0), Gt(e, t), He(e, pe()), n;
    if (n === 6) throw Error(A(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, vn(e, Ve, jt), He(e, pe()), null
}

function l2(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = n, G === 0 && (Cr = pe() + 500, Ao && pn())
    }
}

function Un(e) {
    Qt !== null && Qt.tag === 0 && !(G & 6) && ar();
    var t = G;
    G |= 1;
    var n = nt.transition,
        r = K;
    try {
        if (nt.transition = null, K = 1, e) return e()
    } finally {
        K = r, nt.transition = n, G = t, !(G & 6) && pn()
    }
}

function u2() {
    ze = qn.current, J(qn)
}

function On(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, M7(n)), he !== null)
        for (n = he.return; n !== null;) {
            var r = n;
            switch (zl(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Fs();
                    break;
                case 3:
                    hr(), J(Ie), J(Me), Jl();
                    break;
                case 5:
                    ql(r);
                    break;
                case 4:
                    hr();
                    break;
                case 13:
                    J(se);
                    break;
                case 19:
                    J(se);
                    break;
                case 10:
                    Kl(r.type._context);
                    break;
                case 22:
                case 23:
                    u2()
            }
            n = n.return
        }
    if (ge = e, he = e = nn(e.current, null), je = ze = t, Ce = 0, yi = null, o2 = bo = bn = 0, Ve = Yr = null, wn !== null) {
        for (t = 0; t < wn.length; t++)
            if (n = wn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var a = o.next;
                    o.next = i, r.next = a
                }
                n.pending = r
            }
        wn = null
    }
    return e
}

function lf(e, t) {
    do {
        var n = he;
        try {
            if (Wl(), _s.current = Xs, Ys) {
                for (var r = ae.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Ys = !1
            }
            if (Mn = 0, ye = me = ae = null, Kr = !1, hi = 0, s2.current = null, n === null || n.return === null) {
                Ce = 1, yi = t, he = null;
                break
            }
            e: {
                var o = e,
                    a = n.return,
                    l = n,
                    u = t;
                if (t = je, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u,
                        d = l,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var p = d.alternate;
                        p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var y = Gu(a);
                    if (y !== null) {
                        y.flags &= -257, Wu(y, a, l, o, t), y.mode & 1 && Zu(o, c, t), t = y, u = c;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(u), t.updateQueue = g
                        } else v.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Zu(o, c, t), c2();
                            break e
                        }
                        u = Error(A(426))
                    }
                } else if (te && l.mode & 1) {
                    var _ = Gu(a);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256), Wu(_, a, l, o, t), Zl(mr(u, l));
                        break e
                    }
                }
                o = u = mr(u, l),
                Ce !== 4 && (Ce = 2),
                Yr === null ? Yr = [o] : Yr.push(o),
                o = a;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var C = Z4(o, u, t);
                            Nu(o, C);
                            break e;
                        case 1:
                            l = u;
                            var h = o.type,
                                m = o.stateNode;
                            if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (en === null || !en.has(m)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var x = G4(o, l, t);
                                Nu(o, x);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            df(n)
        } catch (j) {
            t = j, he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}

function uf() {
    var e = qs.current;
    return qs.current = Xs, e === null ? Xs : e
}

function c2() {
    (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4), ge === null || !(bn & 268435455) && !(bo & 268435455) || Gt(ge, je)
}

function eo(e, t) {
    var n = G;
    G |= 2;
    var r = uf();
    (ge !== e || je !== t) && (jt = null, On(e, t));
    do try {
        n8();
        break
    } catch (i) {
        lf(e, i)
    }
    while (!0);
    if (Wl(), G = n, qs.current = r, he !== null) throw Error(A(261));
    return ge = null, je = 0, Ce
}

function n8() {
    for (; he !== null;) cf(he)
}

function r8() {
    for (; he !== null && !A6();) cf(he)
}

function cf(e) {
    var t = pf(e.alternate, e, ze);
    e.memoizedProps = e.pendingProps, t === null ? df(e) : he = t, s2.current = null
}

function df(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = X7(n, t), n !== null) {
                n.flags &= 32767, he = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Ce = 6, he = null;
                return
            }
        } else if (n = Y7(n, t, ze), n !== null) {
            he = n;
            return
        }
        if (t = t.sibling, t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    Ce === 0 && (Ce = 5)
}

function vn(e, t, n) {
    var r = K,
        i = nt.transition;
    try {
        nt.transition = null, K = 1, i8(e, t, n, r)
    } finally {
        nt.transition = i, K = r
    }
    return null
}

function i8(e, t, n, r) {
    do ar(); while (Qt !== null);
    if (G & 6) throw Error(A(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (V6(e, o), e === ge && (he = ge = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || is || (is = !0, hf(Rs, function() {
            return ar(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = nt.transition, nt.transition = null;
        var a = K;
        K = 1;
        var l = G;
        G |= 4, s2.current = null, J7(e, n), sf(n, e), S7(S1), Ns = !!w1, S1 = w1 = null, e.current = n, $7(n), P6(), G = l, K = a, nt.transition = o
    } else e.current = n;
    if (is && (is = !1, Qt = e, $s = i), o = e.pendingLanes, o === 0 && (en = null), b6(n.stateNode), He(e, pe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Js) throw Js = !1, e = Z1, Z1 = null, e;
    return $s & 1 && e.tag !== 0 && ar(), o = e.pendingLanes, o & 1 ? e === G1 ? Xr++ : (Xr = 0, G1 = e) : Xr = 0, pn(), null
}

function ar() {
    if (Qt !== null) {
        var e = zd($s),
            t = nt.transition,
            n = K;
        try {
            if (nt.transition = null, K = 16 > e ? 16 : e, Qt === null) var r = !1;
            else {
                if (e = Qt, Qt = null, $s = 0, G & 6) throw Error(A(331));
                var i = G;
                for (G |= 4, M = e.current; M !== null;) {
                    var o = M,
                        a = o.child;
                    if (M.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (M = c; M !== null;) {
                                    var d = M;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Qr(8, d, o)
                                    }
                                    var f = d.child;
                                    if (f !== null) f.return = d, M = f;
                                    else
                                        for (; M !== null;) {
                                            d = M;
                                            var p = d.sibling,
                                                y = d.return;
                                            if (tf(d), d === c) {
                                                M = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = y, M = p;
                                                break
                                            }
                                            M = y
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var _ = g.sibling;
                                        g.sibling = null, g = _
                                    } while (g !== null)
                                }
                            }
                            M = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && a !== null) a.return = o, M = a;
                    else e: for (; M !== null;) {
                        if (o = M, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Qr(9, o, o.return)
                        }
                        var C = o.sibling;
                        if (C !== null) {
                            C.return = o.return, M = C;
                            break e
                        }
                        M = o.return
                    }
                }
                var h = e.current;
                for (M = h; M !== null;) {
                    a = M;
                    var m = a.child;
                    if (a.subtreeFlags & 2064 && m !== null) m.return = a, M = m;
                    else e: for (a = h; M !== null;) {
                        if (l = M, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Mo(9, l)
                            }
                        } catch (j) {
                            ce(l, l.return, j)
                        }
                        if (l === a) {
                            M = null;
                            break e
                        }
                        var x = l.sibling;
                        if (x !== null) {
                            x.return = l.return, M = x;
                            break e
                        }
                        M = l.return
                    }
                }
                if (G = i, pn(), Ct && typeof Ct.onPostCommitFiberRoot == "function") try {
                    Ct.onPostCommitFiberRoot(wo, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            K = n, nt.transition = t
        }
    }
    return !1
}

function sc(e, t, n) {
    t = mr(n, t), t = Z4(e, t, 1), e = $t(e, t, 1), t = Le(), e !== null && (Si(e, 1, t), He(e, t))
}

function ce(e, t, n) {
    if (e.tag === 3) sc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                sc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
                    e = mr(n, e), e = G4(t, e, 1), t = $t(t, e, 1), e = Le(), t !== null && (Si(t, 1, e), He(t, e));
                    break
                }
            }
            t = t.return
        }
}

function s8(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, ge === e && (je & n) === n && (Ce === 4 || Ce === 3 && (je & 130023424) === je && 500 > pe() - a2 ? On(e, 0) : o2 |= n), He(e, t)
}

function ff(e, t) {
    t === 0 && (e.mode & 1 ? (t = Qi, Qi <<= 1, !(Qi & 130023424) && (Qi = 4194304)) : t = 1);
    var n = Le();
    e = Ut(e, t), e !== null && (Si(e, t, n), He(e, n))
}

function o8(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), ff(e, n)
}

function a8(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(A(314))
    }
    r !== null && r.delete(t), ff(e, n)
}
var pf;
pf = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ie.current) Be = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Be = !1, Q7(e, t, n);
            Be = !!(e.flags & 131072)
        }
    else Be = !1, te && t.flags & 1048576 && m4(t, Zs, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            ws(e, t), e = t.pendingProps;
            var i = dr(t, Me.current);
            or(t, n), i = e2(null, t, r, e, i, n);
            var o = t2();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (o = !0, Hs(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Yl(t), i.updater = Po, t.stateNode = i, i._reactInternals = t, U1(t, r, e, n), t = D1(null, t, r, !0, o, n)) : (t.tag = 0, te && o && Hl(t), Ue(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (ws(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = u8(r), e = ot(r, e), i) {
                    case 0:
                        t = R1(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Yu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ku(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Qu(null, t, r, ot(r.type, e), n);
                        break e
                }
                throw Error(A(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ot(r, i), R1(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ot(r, i), Yu(e, t, r, i, n);
        case 3:
            e: {
                if (Y4(t), e === null) throw Error(A(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                v4(e, t),
                Ks(t, r, null, n);
                var a = t.memoizedState;
                if (r = a.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                            transitions: a.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = mr(Error(A(423)), t), t = Xu(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = mr(Error(A(424)), t), t = Xu(e, t, r, n, i);
                    break e
                } else
                    for (Ze = Jt(t.stateNode.containerInfo.firstChild), Ge = t, te = !0, lt = null, n = w4(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (fr(), r === i) {
                        t = Lt(e, t, n);
                        break e
                    }
                    Ue(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return S4(t), e === null && E1(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, T1(r, i) ? a = null : o !== null && T1(r, o) && (t.flags |= 32), Q4(e, t), Ue(e, t, a, n), t.child;
        case 6:
            return e === null && E1(t), null;
        case 13:
            return X4(e, t, n);
        case 4:
            return Xl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pr(t, null, r, n) : Ue(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ot(r, i), Ku(e, t, r, i, n);
        case 7:
            return Ue(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ue(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ue(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, X(Gs, r._currentValue), r._currentValue = a, o !== null)
                    if (dt(o.value, a)) {
                        if (o.children === i.children && !Ie.current) {
                            t = Lt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var l = o.dependencies;
                            if (l !== null) {
                                a = o.child;
                                for (var u = l.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            u = kt(-1, n & -n), u.tag = 2;
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var d = c.pending;
                                                d === null ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                            }
                                        }
                                        o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), M1(o.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (a = o.return, a === null) throw Error(A(341));
                                a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), M1(a, n, t), a = o.sibling
                            } else a = o.child;
                            if (a !== null) a.return = o;
                            else
                                for (a = o; a !== null;) {
                                    if (a === t) {
                                        a = null;
                                        break
                                    }
                                    if (o = a.sibling, o !== null) {
                                        o.return = a.return, a = o;
                                        break
                                    }
                                    a = a.return
                                }
                            o = a
                        }
                Ue(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, or(t, n), i = rt(i), r = r(i), t.flags |= 1, Ue(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = ot(r, t.pendingProps), i = ot(r.type, i), Qu(e, t, r, i, n);
        case 15:
            return W4(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ot(r, i), ws(e, t), t.tag = 1, Fe(r) ? (e = !0, Hs(t)) : e = !1, or(t, n), _4(t, r, i), U1(t, r, i, n), D1(null, t, r, !0, e, n);
        case 19:
            return q4(e, t, n);
        case 22:
            return K4(e, t, n)
    }
    throw Error(A(156, t.tag))
};

function hf(e, t) {
    return Bd(e, t)
}

function l8(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function tt(e, t, n, r) {
    return new l8(e, t, n, r)
}

function d2(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function u8(e) {
    if (typeof e == "function") return d2(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === El) return 11;
        if (e === Ml) return 14
    }
    return 2
}

function nn(e, t) {
    var n = e.alternate;
    return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Os(e, t, n, r, i, o) {
    var a = 2;
    if (r = e, typeof e == "function") d2(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
        case Fn:
            return kn(n.children, i, o, t);
        case Pl:
            a = 8, i |= 8;
            break;
        case r1:
            return e = tt(12, n, t, i | 2), e.elementType = r1, e.lanes = o, e;
        case i1:
            return e = tt(13, n, t, i), e.elementType = i1, e.lanes = o, e;
        case s1:
            return e = tt(19, n, t, i), e.elementType = s1, e.lanes = o, e;
        case jd:
            return Uo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case xd:
                    a = 10;
                    break e;
                case _d:
                    a = 9;
                    break e;
                case El:
                    a = 11;
                    break e;
                case Ml:
                    a = 14;
                    break e;
                case It:
                    a = 16, r = null;
                    break e
            }
            throw Error(A(130, e == null ? e : typeof e, ""))
    }
    return t = tt(a, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function kn(e, t, n, r) {
    return e = tt(7, e, r, t), e.lanes = n, e
}

function Uo(e, t, n, r) {
    return e = tt(22, e, r, t), e.elementType = jd, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Ta(e, t, n) {
    return e = tt(6, e, null, t), e.lanes = n, e
}

function Oa(e, t, n) {
    return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function c8(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = oa(0), this.expirationTimes = oa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oa(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function f2(e, t, n, r, i, o, a, l, u) {
    return e = new c8(e, t, n, l, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = tt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Yl(o), e
}

function d8(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: In,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function mf(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
        if (Dn(e) !== e || e.tag !== 1) throw Error(A(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Fe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Fe(n)) return p4(e, n, t)
    }
    return t
}

function Cf(e, t, n, r, i, o, a, l, u) {
    return e = f2(n, r, !0, e, i, o, a, l, u), e.context = mf(null), n = e.current, r = Le(), i = tn(n), o = kt(r, i), o.callback = t ? ? null, $t(n, o, i), e.current.lanes = i, Si(e, i, r), He(e, r), e
}

function Lo(e, t, n, r) {
    var i = t.current,
        o = Le(),
        a = tn(i);
    return n = mf(n), t.context === null ? t.context = n : t.pendingContext = n, t = kt(o, a), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $t(i, t, a), e !== null && (ct(e, i, a, o), xs(e, i, a)), a
}

function to(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function oc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function p2(e, t) {
    oc(e, t), (e = e.alternate) && oc(e, t)
}

function f8() {
    return null
}
var yf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function h2(e) {
    this._internalRoot = e
}
Ro.prototype.render = h2.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(A(409));
    Lo(e, t, null, null)
};
Ro.prototype.unmount = h2.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Un(function() {
            Lo(null, e, null, null)
        }), t[bt] = null
    }
};

function Ro(e) {
    this._internalRoot = e
}
Ro.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Wd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
        Zt.splice(n, 0, e), n === 0 && Qd(e)
    }
};

function m2(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Do(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function ac() {}

function p8(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = to(a);
                o.call(c)
            }
        }
        var a = Cf(t, r, e, 0, null, !1, !1, "", ac);
        return e._reactRootContainer = a, e[bt] = a.current, ui(e.nodeType === 8 ? e.parentNode : e), Un(), a
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = to(u);
            l.call(c)
        }
    }
    var u = f2(e, 0, !1, null, null, !1, !1, "", ac);
    return e._reactRootContainer = u, e[bt] = u.current, ui(e.nodeType === 8 ? e.parentNode : e), Un(function() {
        Lo(t, u, n, r)
    }), u
}

function No(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var a = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var u = to(a);
                l.call(u)
            }
        }
        Lo(t, a, e, i)
    } else a = p8(n, t, e, i, r);
    return to(a)
}
Zd = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Br(t.pendingLanes);
                n !== 0 && (Ll(t, n | 1), He(t, pe()), !(G & 6) && (Cr = pe() + 500, pn()))
            }
            break;
        case 13:
            Un(function() {
                var r = Ut(e, 1);
                if (r !== null) {
                    var i = Le();
                    ct(r, e, 1, i)
                }
            }), p2(e, 1)
    }
};
Rl = function(e) {
    if (e.tag === 13) {
        var t = Ut(e, 134217728);
        if (t !== null) {
            var n = Le();
            ct(t, e, 134217728, n)
        }
        p2(e, 134217728)
    }
};
Gd = function(e) {
    if (e.tag === 13) {
        var t = tn(e),
            n = Ut(e, t);
        if (n !== null) {
            var r = Le();
            ct(n, e, t, r)
        }
        p2(e, t)
    }
};
Wd = function() {
    return K
};
Kd = function(e, t) {
    var n = K;
    try {
        return K = e, t()
    } finally {
        K = n
    }
};
m1 = function(e, t, n) {
    switch (t) {
        case "input":
            if (l1(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = ko(r);
                        if (!i) throw Error(A(90));
                        Sd(r), l1(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Od(e, n);
            break;
        case "select":
            t = n.value, t != null && nr(e, !!n.multiple, t, !1)
    }
};
Ud = l2;
Ld = Un;
var h8 = {
        usingClientEntryPoint: !1,
        Events: [Oi, Gn, ko, Md, bd, l2]
    },
    Rr = {
        findFiberByHostInstance: jn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    m8 = {
        bundleType: Rr.bundleType,
        version: Rr.version,
        rendererPackageName: Rr.rendererPackageName,
        rendererConfig: Rr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Rt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Nd(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Rr.findFiberByHostInstance || f8,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ss.isDisabled && ss.supportsFiber) try {
        wo = ss.inject(m8), Ct = ss
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h8;
Qe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m2(t)) throw Error(A(200));
    return d8(e, t, null, n)
};
Qe.createRoot = function(e, t) {
    if (!m2(e)) throw Error(A(299));
    var n = !1,
        r = "",
        i = yf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = f2(e, 1, !1, null, null, n, !1, r, i), e[bt] = t.current, ui(e.nodeType === 8 ? e.parentNode : e), new h2(t)
};
Qe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
    return e = Nd(t), e = e === null ? null : e.stateNode, e
};
Qe.flushSync = function(e) {
    return Un(e)
};
Qe.hydrate = function(e, t, n) {
    if (!Do(t)) throw Error(A(200));
    return No(null, e, t, !0, n)
};
Qe.hydrateRoot = function(e, t, n) {
    if (!m2(e)) throw Error(A(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        a = yf;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Cf(t, null, e, 1, n ? ? null, i, !1, o, a), e[bt] = t.current, ui(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ro(t)
};
Qe.render = function(e, t, n) {
    if (!Do(t)) throw Error(A(200));
    return No(null, e, t, !1, n)
};
Qe.unmountComponentAtNode = function(e) {
    if (!Do(e)) throw Error(A(40));
    return e._reactRootContainer ? (Un(function() {
        No(null, null, e, !1, function() {
            e._reactRootContainer = null, e[bt] = null
        })
    }), !0) : !1
};
Qe.unstable_batchedUpdates = l2;
Qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Do(n)) throw Error(A(200));
    if (e == null || e._reactInternals === void 0) throw Error(A(38));
    return No(e, t, n, !1, r)
};
Qe.version = "18.2.0-next-9e3b772b8-20220608";

function gf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gf)
    } catch (e) {
        console.error(e)
    }
}
gf(), md.exports = Qe;
var vf = md.exports,
    lc = vf;
t1.createRoot = lc.createRoot, t1.hydrateRoot = lc.hydrateRoot;
var xf = {
        exports: {}
    },
    C8 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    y8 = C8,
    g8 = y8;

function _f() {}

function jf() {}
jf.resetWarningCache = _f;
var v8 = function() {
    function e(r, i, o, a, l, u) {
        if (u !== g8) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: jf,
        resetWarningCache: _f
    };
    return n.PropTypes = n, n
};
xf.exports = v8();
var Ai = xf.exports;
const x8 = xl(Ai),
    Pi = ({
        children: e
    }) => s.jsx("div", {
        className: "max-w-[1280px] mx-auto px-4 sm:px-6 pt-4 md:mt-0 md:pt-4",
        children: e
    });
Pi.propTypes = {
    children: x8.node.isRequired
};
const C2 = () => {
        const e = "rayanramazan09@gmail.com",
            t = encodeURIComponent("Message from your portfolio site"),
            n = `mailto:${e}?subject=${t}`;
        window.location.href = n
    },
    wf = ({
        text: e,
        heightButton: t,
        fontSize: n
    }) => s.jsx("button", {
        className: `rounded-[10px] bg-gradient-to-tl from-[#00C16A] to-[#4AD07E] ${t} px-[15px] ${n} font-medium text-white`,
        children: e
    });
var ue = {},
    y2 = {},
    Ei = {},
    Mi = {},
    Sf = "Expected a function",
    uc = NaN,
    _8 = "[object Symbol]",
    j8 = /^\s+|\s+$/g,
    w8 = /^[-+]0x[0-9a-f]+$/i,
    S8 = /^0b[01]+$/i,
    T8 = /^0o[0-7]+$/i,
    O8 = parseInt,
    k8 = typeof Wt == "object" && Wt && Wt.Object === Object && Wt,
    A8 = typeof self == "object" && self && self.Object === Object && self,
    P8 = k8 || A8 || Function("return this")(),
    E8 = Object.prototype,
    M8 = E8.toString,
    b8 = Math.max,
    U8 = Math.min,
    ka = function() {
        return P8.Date.now()
    };

function L8(e, t, n) {
    var r, i, o, a, l, u, c = 0,
        d = !1,
        f = !1,
        p = !0;
    if (typeof e != "function") throw new TypeError(Sf);
    t = cc(t) || 0, no(n) && (d = !!n.leading, f = "maxWait" in n, o = f ? b8(cc(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);

    function y(w) {
        var k = r,
            T = i;
        return r = i = void 0, c = w, a = e.apply(T, k), a
    }

    function v(w) {
        return c = w, l = setTimeout(C, t), d ? y(w) : a
    }

    function g(w) {
        var k = w - u,
            T = w - c,
            O = t - k;
        return f ? U8(O, o - T) : O
    }

    function _(w) {
        var k = w - u,
            T = w - c;
        return u === void 0 || k >= t || k < 0 || f && T >= o
    }

    function C() {
        var w = ka();
        if (_(w)) return h(w);
        l = setTimeout(C, g(w))
    }

    function h(w) {
        return l = void 0, p && r ? y(w) : (r = i = void 0, a)
    }

    function m() {
        l !== void 0 && clearTimeout(l), c = 0, r = u = i = l = void 0
    }

    function x() {
        return l === void 0 ? a : h(ka())
    }

    function j() {
        var w = ka(),
            k = _(w);
        if (r = arguments, i = this, u = w, k) {
            if (l === void 0) return v(u);
            if (f) return l = setTimeout(C, t), y(u)
        }
        return l === void 0 && (l = setTimeout(C, t)), a
    }
    return j.cancel = m, j.flush = x, j
}

function R8(e, t, n) {
    var r = !0,
        i = !0;
    if (typeof e != "function") throw new TypeError(Sf);
    return no(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), L8(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}

function no(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}

function D8(e) {
    return !!e && typeof e == "object"
}

function N8(e) {
    return typeof e == "symbol" || D8(e) && M8.call(e) == _8
}

function cc(e) {
    if (typeof e == "number") return e;
    if (N8(e)) return uc;
    if (no(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = no(t) ? t + "" : t
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(j8, "");
    var n = S8.test(e);
    return n || T8.test(e) ? O8(e.slice(2), n ? 2 : 8) : w8.test(e) ? uc : +e
}
var V8 = R8,
    bi = {};
Object.defineProperty(bi, "__esModule", {
    value: !0
});
bi.addPassiveEventListener = function(t, n, r) {
    var i = r.name;
    i || (i = n, console.warn("Listener must be a named function.")), ks.has(n) || ks.set(n, new Set);
    var o = ks.get(n);
    if (!o.has(i)) {
        var a = function() {
            var l = !1;
            try {
                var u = Object.defineProperty({}, "passive", {
                    get: function() {
                        l = !0
                    }
                });
                window.addEventListener("test", null, u)
            } catch {}
            return l
        }();
        t.addEventListener(n, r, a ? {
            passive: !0
        } : !1), o.add(i)
    }
};
bi.removePassiveEventListener = function(t, n, r) {
    t.removeEventListener(n, r), ks.get(n).delete(r.name || n)
};
var ks = new Map;
Object.defineProperty(Mi, "__esModule", {
    value: !0
});
var B8 = V8,
    I8 = H8(B8),
    F8 = bi;

function H8(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var z8 = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
        return (0, I8.default)(t, n)
    },
    re = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function(t, n) {
            if (t) {
                var r = z8(function(i) {
                    re.scrollHandler(t)
                }, n);
                re.scrollSpyContainers.push(t), (0, F8.addPassiveEventListener)(t, "scroll", r)
            }
        },
        isMounted: function(t) {
            return re.scrollSpyContainers.indexOf(t) !== -1
        },
        currentPositionX: function(t) {
            if (t === document) {
                var n = window.pageYOffset !== void 0,
                    r = (document.compatMode || "") === "CSS1Compat";
                return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft
            } else return t.scrollLeft
        },
        currentPositionY: function(t) {
            if (t === document) {
                var n = window.pageXOffset !== void 0,
                    r = (document.compatMode || "") === "CSS1Compat";
                return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop
            } else return t.scrollTop
        },
        scrollHandler: function(t) {
            var n = re.scrollSpyContainers[re.scrollSpyContainers.indexOf(t)].spyCallbacks || [];
            n.forEach(function(r) {
                return r(re.currentPositionX(t), re.currentPositionY(t))
            })
        },
        addStateHandler: function(t) {
            re.spySetState.push(t)
        },
        addSpyHandler: function(t, n) {
            var r = re.scrollSpyContainers[re.scrollSpyContainers.indexOf(n)];
            r.spyCallbacks || (r.spyCallbacks = []), r.spyCallbacks.push(t), t(re.currentPositionX(n), re.currentPositionY(n))
        },
        updateStates: function() {
            re.spySetState.forEach(function(t) {
                return t()
            })
        },
        unmount: function(t, n) {
            re.scrollSpyContainers.forEach(function(r) {
                return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
            }), re.spySetState && re.spySetState.length && re.spySetState.indexOf(t) > -1 && re.spySetState.splice(re.spySetState.indexOf(t), 1), document.removeEventListener("scroll", re.scrollHandler)
        },
        update: function() {
            return re.scrollSpyContainers.forEach(function(t) {
                return re.scrollHandler(t)
            })
        }
    };
Mi.default = re;
var Or = {},
    Ui = {};
Object.defineProperty(Ui, "__esModule", {
    value: !0
});
var Z8 = function(t, n) {
        var r = t.indexOf("#") === 0 ? t.substring(1) : t,
            i = r ? "#" + r : "",
            o = window && window.location,
            a = i ? o.pathname + o.search + i : o.pathname + o.search;
        n ? history.pushState(history.state, "", a) : history.replaceState(history.state, "", a)
    },
    G8 = function() {
        return window.location.hash.replace(/^#/, "")
    },
    W8 = function(t) {
        return function(n) {
            return t.contains ? t != n && t.contains(n) : !!(t.compareDocumentPosition(n) & 16)
        }
    },
    K8 = function(t) {
        return getComputedStyle(t).position !== "static"
    },
    Aa = function(t, n) {
        for (var r = t.offsetTop, i = t.offsetParent; i && !n(i);) r += i.offsetTop, i = i.offsetParent;
        return {
            offsetTop: r,
            offsetParent: i
        }
    },
    Q8 = function(t, n, r) {
        if (r) return t === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(t).position !== "static" ? n.offsetLeft : n.offsetLeft - t.offsetLeft;
        if (t === document) return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        if (K8(t)) {
            if (n.offsetParent !== t) {
                var i = function(d) {
                        return d === t || d === document
                    },
                    o = Aa(n, i),
                    a = o.offsetTop,
                    l = o.offsetParent;
                if (l !== t) throw new Error("Seems containerElement is not an ancestor of the Element");
                return a
            }
            return n.offsetTop
        }
        if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
        var u = function(d) {
            return d === document
        };
        return Aa(n, u).offsetTop - Aa(t, u).offsetTop
    };
Ui.default = {
    updateHash: Z8,
    getHash: G8,
    filterElementInContainer: W8,
    scrollOffset: Q8
};
var Vo = {},
    g2 = {};
Object.defineProperty(g2, "__esModule", {
    value: !0
});
g2.default = {
    defaultEasing: function(t) {
        return t < .5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2
    },
    linear: function(t) {
        return t
    },
    easeInQuad: function(t) {
        return t * t
    },
    easeOutQuad: function(t) {
        return t * (2 - t)
    },
    easeInOutQuad: function(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic: function(t) {
        return t * t * t
    },
    easeOutCubic: function(t) {
        return --t * t * t + 1
    },
    easeInOutCubic: function(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart: function(t) {
        return t * t * t * t
    },
    easeOutQuart: function(t) {
        return 1 - --t * t * t * t
    },
    easeInOutQuart: function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
    },
    easeInQuint: function(t) {
        return t * t * t * t * t
    },
    easeOutQuint: function(t) {
        return 1 + --t * t * t * t * t
    },
    easeInOutQuint: function(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    }
};
var v2 = {};
Object.defineProperty(v2, "__esModule", {
    value: !0
});
var Y8 = bi,
    X8 = ["mousedown", "mousewheel", "touchmove", "keydown"];
v2.default = {
    subscribe: function(t) {
        return typeof document < "u" && X8.forEach(function(n) {
            return (0, Y8.addPassiveEventListener)(document, n, t)
        })
    }
};
var Li = {};
Object.defineProperty(Li, "__esModule", {
    value: !0
});
var Q1 = {
    registered: {},
    scrollEvent: {
        register: function(t, n) {
            Q1.registered[t] = n
        },
        remove: function(t) {
            Q1.registered[t] = null
        }
    }
};
Li.default = Q1;
Object.defineProperty(Vo, "__esModule", {
    value: !0
});
var q8 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    J8 = Ui;
Bo(J8);
var $8 = g2,
    dc = Bo($8),
    e3 = v2,
    t3 = Bo(e3),
    n3 = Li,
    ht = Bo(n3);

function Bo(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Tf = function(t) {
        return dc.default[t.smooth] || dc.default.defaultEasing
    },
    r3 = function(t) {
        return typeof t == "function" ? t : function() {
            return t
        }
    },
    i3 = function() {
        if (typeof window < "u") return window.requestAnimationFrame || window.webkitRequestAnimationFrame
    },
    Y1 = function() {
        return i3() || function(e, t, n) {
            window.setTimeout(e, n || 1e3 / 60, new Date().getTime())
        }
    }(),
    Of = function() {
        return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null
        }
    },
    kf = function(t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollLeft;
        var r = window.pageXOffset !== void 0,
            i = (document.compatMode || "") === "CSS1Compat";
        return r ? window.pageXOffset : i ? document.documentElement.scrollLeft : document.body.scrollLeft
    },
    Af = function(t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollTop;
        var r = window.pageXOffset !== void 0,
            i = (document.compatMode || "") === "CSS1Compat";
        return r ? window.pageYOffset : i ? document.documentElement.scrollTop : document.body.scrollTop
    },
    s3 = function(t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollWidth - n.offsetWidth;
        var r = document.body,
            i = document.documentElement;
        return Math.max(r.scrollWidth, r.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth)
    },
    o3 = function(t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollHeight - n.offsetHeight;
        var r = document.body,
            i = document.documentElement;
        return Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)
    },
    a3 = function e(t, n, r) {
        var i = n.data;
        if (!n.ignoreCancelEvents && i.cancel) {
            ht.default.registered.end && ht.default.registered.end(i.to, i.target, i.currentPositionY);
            return
        }
        if (i.delta = Math.round(i.targetPosition - i.startPosition), i.start === null && (i.start = r), i.progress = r - i.start, i.percent = i.progress >= i.duration ? 1 : t(i.progress / i.duration), i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent), i.containerElement && i.containerElement !== document && i.containerElement !== document.body ? n.horizontal ? i.containerElement.scrollLeft = i.currentPosition : i.containerElement.scrollTop = i.currentPosition : n.horizontal ? window.scrollTo(i.currentPosition, 0) : window.scrollTo(0, i.currentPosition), i.percent < 1) {
            var o = e.bind(null, t, n);
            Y1.call(window, o);
            return
        }
        ht.default.registered.end && ht.default.registered.end(i.to, i.target, i.currentPosition)
    },
    x2 = function(t) {
        t.data.containerElement = t ? t.containerId ? document.getElementById(t.containerId) : t.container && t.container.nodeType ? t.container : document : null
    },
    Ri = function(t, n, r, i) {
        n.data = n.data || Of(), window.clearTimeout(n.data.delayTimeout);
        var o = function() {
            n.data.cancel = !0
        };
        if (t3.default.subscribe(o), x2(n), n.data.start = null, n.data.cancel = !1, n.data.startPosition = n.horizontal ? kf(n) : Af(n), n.data.targetPosition = n.absolute ? t : t + n.data.startPosition, n.data.startPosition === n.data.targetPosition) {
            ht.default.registered.end && ht.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
            return
        }
        n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition), n.data.duration = r3(n.duration)(n.data.delta), n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration), n.data.to = r, n.data.target = i;
        var a = Tf(n),
            l = a3.bind(null, a, n);
        if (n && n.delay > 0) {
            n.data.delayTimeout = window.setTimeout(function() {
                ht.default.registered.begin && ht.default.registered.begin(n.data.to, n.data.target), Y1.call(window, l)
            }, n.delay);
            return
        }
        ht.default.registered.begin && ht.default.registered.begin(n.data.to, n.data.target), Y1.call(window, l)
    },
    Io = function(t) {
        return t = q8({}, t), t.data = t.data || Of(), t.absolute = !0, t
    },
    l3 = function(t) {
        Ri(0, Io(t))
    },
    u3 = function(t, n) {
        Ri(t, Io(n))
    },
    c3 = function(t) {
        t = Io(t), x2(t), Ri(t.horizontal ? s3(t) : o3(t), t)
    },
    d3 = function(t, n) {
        n = Io(n), x2(n);
        var r = n.horizontal ? kf(n) : Af(n);
        Ri(t + r, n)
    };
Vo.default = {
    animateTopScroll: Ri,
    getAnimationType: Tf,
    scrollToTop: l3,
    scrollToBottom: c3,
    scrollTo: u3,
    scrollMore: d3
};
Object.defineProperty(Or, "__esModule", {
    value: !0
});
var f3 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    p3 = Ui,
    h3 = _2(p3),
    m3 = Vo,
    C3 = _2(m3),
    y3 = Li,
    os = _2(y3);

function _2(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var as = {},
    fc = void 0;
Or.default = {
    unmount: function() {
        as = {}
    },
    register: function(t, n) {
        as[t] = n
    },
    unregister: function(t) {
        delete as[t]
    },
    get: function(t) {
        return as[t] || document.getElementById(t) || document.getElementsByName(t)[0] || document.getElementsByClassName(t)[0]
    },
    setActiveLink: function(t) {
        return fc = t
    },
    getActiveLink: function() {
        return fc
    },
    scrollTo: function(t, n) {
        var r = this.get(t);
        if (!r) {
            console.warn("target Element not found");
            return
        }
        n = f3({}, n, {
            absolute: !1
        });
        var i = n.containerId,
            o = n.container,
            a = void 0;
        i ? a = document.getElementById(i) : o && o.nodeType ? a = o : a = document, n.absolute = !0;
        var l = n.horizontal,
            u = h3.default.scrollOffset(a, r, l) + (n.offset || 0);
        if (!n.smooth) {
            os.default.registered.begin && os.default.registered.begin(t, r), a === document ? n.horizontal ? window.scrollTo(u, 0) : window.scrollTo(0, u) : a.scrollTop = u, os.default.registered.end && os.default.registered.end(t, r);
            return
        }
        C3.default.animateTopScroll(u, n, t, r)
    }
};
var Fo = {};
Object.defineProperty(Fo, "__esModule", {
    value: !0
});
var g3 = Ui,
    Pa = v3(g3);

function v3(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var x3 = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function(t) {
        this.scroller = t, this.handleHashChange = this.handleHashChange.bind(this), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), this.mountFlag = !0
    },
    mapContainer: function(t, n) {
        this.containers[t] = n
    },
    isMounted: function() {
        return this.mountFlag
    },
    isInitialized: function() {
        return this.initialized
    },
    initStateFromHash: function() {
        var t = this,
            n = this.getHash();
        n ? window.setTimeout(function() {
            t.scrollTo(n, !0), t.initialized = !0
        }, 10) : this.initialized = !0
    },
    scrollTo: function(t, n) {
        var r = this.scroller,
            i = r.get(t);
        if (i && (n || t !== r.getActiveLink())) {
            var o = this.containers[t] || document;
            r.scrollTo(t, {
                container: o
            })
        }
    },
    getHash: function() {
        return Pa.default.getHash()
    },
    changeHash: function(t, n) {
        this.isInitialized() && Pa.default.getHash() !== t && Pa.default.updateHash(t, n)
    },
    handleHashChange: function() {
        this.scrollTo(this.getHash())
    },
    unmount: function() {
        this.scroller = null, this.containers = null, window.removeEventListener("hashchange", this.handleHashChange)
    }
};
Fo.default = x3;
Object.defineProperty(Ei, "__esModule", {
    value: !0
});
var ls = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    _3 = function() {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    j3 = U,
    pc = Di(j3),
    w3 = Mi,
    us = Di(w3),
    S3 = Or,
    T3 = Di(S3),
    O3 = Ai,
    $ = Di(O3),
    k3 = Fo,
    Nt = Di(k3);

function Di(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function A3(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function P3(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function E3(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var hc = {
    to: $.default.string.isRequired,
    containerId: $.default.string,
    container: $.default.object,
    activeClass: $.default.string,
    activeStyle: $.default.object,
    spy: $.default.bool,
    horizontal: $.default.bool,
    smooth: $.default.oneOfType([$.default.bool, $.default.string]),
    offset: $.default.number,
    delay: $.default.number,
    isDynamic: $.default.bool,
    onClick: $.default.func,
    duration: $.default.oneOfType([$.default.number, $.default.func]),
    absolute: $.default.bool,
    onSetActive: $.default.func,
    onSetInactive: $.default.func,
    ignoreCancelEvents: $.default.bool,
    hashSpy: $.default.bool,
    saveHashHistory: $.default.bool,
    spyThrottle: $.default.number
};
Ei.default = function(e, t) {
    var n = t || T3.default,
        r = function(o) {
            E3(a, o);

            function a(l) {
                A3(this, a);
                var u = P3(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
                return i.call(u), u.state = {
                    active: !1
                }, u
            }
            return _3(a, [{
                key: "getScrollSpyContainer",
                value: function() {
                    var u = this.props.containerId,
                        c = this.props.container;
                    return u && !c ? document.getElementById(u) : c && c.nodeType ? c : document
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.props.spy || this.props.hashSpy) {
                        var u = this.getScrollSpyContainer();
                        us.default.isMounted(u) || us.default.mount(u, this.props.spyThrottle), this.props.hashSpy && (Nt.default.isMounted() || Nt.default.mount(n), Nt.default.mapContainer(this.props.to, u)), us.default.addSpyHandler(this.spyHandler, u), this.setState({
                            container: u
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    us.default.unmount(this.stateHandler, this.spyHandler)
                }
            }, {
                key: "render",
                value: function() {
                    var u = "";
                    this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
                    var c = {};
                    this.state && this.state.active ? c = ls({}, this.props.style, this.props.activeStyle) : c = ls({}, this.props.style);
                    var d = ls({}, this.props);
                    for (var f in hc) d.hasOwnProperty(f) && delete d[f];
                    return d.className = u, d.style = c, d.onClick = this.handleClick, pc.default.createElement(e, d)
                }
            }]), a
        }(pc.default.PureComponent),
        i = function() {
            var a = this;
            this.scrollTo = function(l, u) {
                n.scrollTo(l, ls({}, a.state, u))
            }, this.handleClick = function(l) {
                a.props.onClick && a.props.onClick(l), l.stopPropagation && l.stopPropagation(), l.preventDefault && l.preventDefault(), a.scrollTo(a.props.to, a.props)
            }, this.spyHandler = function(l, u) {
                var c = a.getScrollSpyContainer();
                if (!(Nt.default.isMounted() && !Nt.default.isInitialized())) {
                    var d = a.props.horizontal,
                        f = a.props.to,
                        p = null,
                        y = void 0,
                        v = void 0;
                    if (d) {
                        var g = 0,
                            _ = 0,
                            C = 0;
                        if (c.getBoundingClientRect) {
                            var h = c.getBoundingClientRect();
                            C = h.left
                        }
                        if (!p || a.props.isDynamic) {
                            if (p = n.get(f), !p) return;
                            var m = p.getBoundingClientRect();
                            g = m.left - C + l, _ = g + m.width
                        }
                        var x = l - a.props.offset;
                        y = x >= Math.floor(g) && x < Math.floor(_), v = x < Math.floor(g) || x >= Math.floor(_)
                    } else {
                        var j = 0,
                            w = 0,
                            k = 0;
                        if (c.getBoundingClientRect) {
                            var T = c.getBoundingClientRect();
                            k = T.top
                        }
                        if (!p || a.props.isDynamic) {
                            if (p = n.get(f), !p) return;
                            var O = p.getBoundingClientRect();
                            j = O.top - k + u, w = j + O.height
                        }
                        var S = u - a.props.offset;
                        y = S >= Math.floor(j) && S < Math.floor(w), v = S < Math.floor(j) || S >= Math.floor(w)
                    }
                    var b = n.getActiveLink();
                    if (v) {
                        if (f === b && n.setActiveLink(void 0), a.props.hashSpy && Nt.default.getHash() === f) {
                            var L = a.props.saveHashHistory,
                                R = L === void 0 ? !1 : L;
                            Nt.default.changeHash("", R)
                        }
                        a.props.spy && a.state.active && (a.setState({
                            active: !1
                        }), a.props.onSetInactive && a.props.onSetInactive(f, p))
                    }
                    if (y && (b !== f || a.state.active === !1)) {
                        n.setActiveLink(f);
                        var D = a.props.saveHashHistory,
                            Y = D === void 0 ? !1 : D;
                        a.props.hashSpy && Nt.default.changeHash(f, Y), a.props.spy && (a.setState({
                            active: !0
                        }), a.props.onSetActive && a.props.onSetActive(f, p))
                    }
                }
            }
        };
    return r.propTypes = hc, r.defaultProps = {
        offset: 0
    }, r
};
Object.defineProperty(y2, "__esModule", {
    value: !0
});
var M3 = U,
    mc = Pf(M3),
    b3 = Ei,
    U3 = Pf(b3);

function Pf(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function L3(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Cc(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function R3(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var D3 = function(e) {
    R3(t, e);

    function t() {
        var n, r, i, o;
        L3(this, t);
        for (var a = arguments.length, l = Array(a), u = 0; u < a; u++) l[u] = arguments[u];
        return o = (r = (i = Cc(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(l))), i), i.render = function() {
            return mc.default.createElement("a", i.props, i.props.children)
        }, r), Cc(i, o)
    }
    return t
}(mc.default.Component);
y2.default = (0, U3.default)(D3);
var j2 = {};
Object.defineProperty(j2, "__esModule", {
    value: !0
});
var N3 = function() {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    V3 = U,
    yc = Ef(V3),
    B3 = Ei,
    I3 = Ef(B3);

function Ef(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function F3(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function H3(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function z3(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Z3 = function(e) {
    z3(t, e);

    function t() {
        return F3(this, t), H3(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return N3(t, [{
        key: "render",
        value: function() {
            return yc.default.createElement("button", this.props, this.props.children)
        }
    }]), t
}(yc.default.Component);
j2.default = (0, I3.default)(Z3);
var w2 = {},
    Ho = {};
Object.defineProperty(Ho, "__esModule", {
    value: !0
});
var G3 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    W3 = function() {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    K3 = U,
    gc = zo(K3),
    Q3 = vf;
zo(Q3);
var Y3 = Or,
    vc = zo(Y3),
    X3 = Ai,
    xc = zo(X3);

function zo(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function q3(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function J3(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function $3(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
Ho.default = function(e) {
    var t = function(n) {
        $3(r, n);

        function r(i) {
            q3(this, r);
            var o = J3(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
            return o.childBindings = {
                domNode: null
            }, o
        }
        return W3(r, [{
            key: "componentDidMount",
            value: function() {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name)
            }
        }, {
            key: "componentDidUpdate",
            value: function(o) {
                this.props.name !== o.name && this.registerElems(this.props.name)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                if (typeof window > "u") return !1;
                vc.default.unregister(this.props.name)
            }
        }, {
            key: "registerElems",
            value: function(o) {
                vc.default.register(o, this.childBindings.domNode)
            }
        }, {
            key: "render",
            value: function() {
                return gc.default.createElement(e, G3({}, this.props, {
                    parentBindings: this.childBindings
                }))
            }
        }]), r
    }(gc.default.Component);
    return t.propTypes = {
        name: xc.default.string,
        id: xc.default.string
    }, t
};
Object.defineProperty(w2, "__esModule", {
    value: !0
});
var _c = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    e9 = function() {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    t9 = U,
    jc = S2(t9),
    n9 = Ho,
    r9 = S2(n9),
    i9 = Ai,
    wc = S2(i9);

function S2(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function s9(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function o9(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function a9(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Mf = function(e) {
    a9(t, e);

    function t() {
        return s9(this, t), o9(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return e9(t, [{
        key: "render",
        value: function() {
            var r = this,
                i = _c({}, this.props);
            return delete i.name, i.parentBindings && delete i.parentBindings, jc.default.createElement("div", _c({}, i, {
                ref: function(a) {
                    r.props.parentBindings.domNode = a
                }
            }), this.props.children)
        }
    }]), t
}(jc.default.Component);
Mf.propTypes = {
    name: wc.default.string,
    id: wc.default.string
};
w2.default = (0, r9.default)(Mf);
var Ea = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    Sc = function() {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();

function Tc(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Oc(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function kc(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var cs = U,
    Cn = Mi,
    Ma = Or,
    ie = Ai,
    Vt = Fo,
    Ac = {
        to: ie.string.isRequired,
        containerId: ie.string,
        container: ie.object,
        activeClass: ie.string,
        spy: ie.bool,
        smooth: ie.oneOfType([ie.bool, ie.string]),
        offset: ie.number,
        delay: ie.number,
        isDynamic: ie.bool,
        onClick: ie.func,
        duration: ie.oneOfType([ie.number, ie.func]),
        absolute: ie.bool,
        onSetActive: ie.func,
        onSetInactive: ie.func,
        ignoreCancelEvents: ie.bool,
        hashSpy: ie.bool,
        spyThrottle: ie.number
    },
    l9 = {
        Scroll: function(t, n) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var r = n || Ma,
                i = function(a) {
                    kc(l, a);

                    function l(u) {
                        Tc(this, l);
                        var c = Oc(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, u));
                        return o.call(c), c.state = {
                            active: !1
                        }, c
                    }
                    return Sc(l, [{
                        key: "getScrollSpyContainer",
                        value: function() {
                            var c = this.props.containerId,
                                d = this.props.container;
                            return c ? document.getElementById(c) : d && d.nodeType ? d : document
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            if (this.props.spy || this.props.hashSpy) {
                                var c = this.getScrollSpyContainer();
                                Cn.isMounted(c) || Cn.mount(c, this.props.spyThrottle), this.props.hashSpy && (Vt.isMounted() || Vt.mount(r), Vt.mapContainer(this.props.to, c)), this.props.spy && Cn.addStateHandler(this.stateHandler), Cn.addSpyHandler(this.spyHandler, c), this.setState({
                                    container: c
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            Cn.unmount(this.stateHandler, this.spyHandler)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var c = "";
                            this.state && this.state.active ? c = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : c = this.props.className;
                            var d = Ea({}, this.props);
                            for (var f in Ac) d.hasOwnProperty(f) && delete d[f];
                            return d.className = c, d.onClick = this.handleClick, cs.createElement(t, d)
                        }
                    }]), l
                }(cs.Component),
                o = function() {
                    var l = this;
                    this.scrollTo = function(u, c) {
                        r.scrollTo(u, Ea({}, l.state, c))
                    }, this.handleClick = function(u) {
                        l.props.onClick && l.props.onClick(u), u.stopPropagation && u.stopPropagation(), u.preventDefault && u.preventDefault(), l.scrollTo(l.props.to, l.props)
                    }, this.stateHandler = function() {
                        r.getActiveLink() !== l.props.to && (l.state !== null && l.state.active && l.props.onSetInactive && l.props.onSetInactive(), l.setState({
                            active: !1
                        }))
                    }, this.spyHandler = function(u) {
                        var c = l.getScrollSpyContainer();
                        if (!(Vt.isMounted() && !Vt.isInitialized())) {
                            var d = l.props.to,
                                f = null,
                                p = 0,
                                y = 0,
                                v = 0;
                            if (c.getBoundingClientRect) {
                                var g = c.getBoundingClientRect();
                                v = g.top
                            }
                            if (!f || l.props.isDynamic) {
                                if (f = r.get(d), !f) return;
                                var _ = f.getBoundingClientRect();
                                p = _.top - v + u, y = p + _.height
                            }
                            var C = u - l.props.offset,
                                h = C >= Math.floor(p) && C < Math.floor(y),
                                m = C < Math.floor(p) || C >= Math.floor(y),
                                x = r.getActiveLink();
                            if (m) return d === x && r.setActiveLink(void 0), l.props.hashSpy && Vt.getHash() === d && Vt.changeHash(), l.props.spy && l.state.active && (l.setState({
                                active: !1
                            }), l.props.onSetInactive && l.props.onSetInactive()), Cn.updateStates();
                            if (h && x !== d) return r.setActiveLink(d), l.props.hashSpy && Vt.changeHash(d), l.props.spy && (l.setState({
                                active: !0
                            }), l.props.onSetActive && l.props.onSetActive(d)), Cn.updateStates()
                        }
                    }
                };
            return i.propTypes = Ac, i.defaultProps = {
                offset: 0
            }, i
        },
        Element: function(t) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var n = function(r) {
                kc(i, r);

                function i(o) {
                    Tc(this, i);
                    var a = Oc(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, o));
                    return a.childBindings = {
                        domNode: null
                    }, a
                }
                return Sc(i, [{
                    key: "componentDidMount",
                    value: function() {
                        if (typeof window > "u") return !1;
                        this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(a) {
                        this.props.name !== a.name && this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if (typeof window > "u") return !1;
                        Ma.unregister(this.props.name)
                    }
                }, {
                    key: "registerElems",
                    value: function(a) {
                        Ma.register(a, this.childBindings.domNode)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return cs.createElement(t, Ea({}, this.props, {
                            parentBindings: this.childBindings
                        }))
                    }
                }]), i
            }(cs.Component);
            return n.propTypes = {
                name: ie.string,
                id: ie.string
            }, n
        }
    },
    u9 = l9;
Object.defineProperty(ue, "__esModule", {
    value: !0
});
ue.Helpers = ue.ScrollElement = ue.ScrollLink = ue.animateScroll = ue.scrollSpy = ue.Events = ue.scroller = ue.Element = ue.Button = Bn = ue.Link = void 0;
var c9 = y2,
    bf = vt(c9),
    d9 = j2,
    Uf = vt(d9),
    f9 = w2,
    Lf = vt(f9),
    p9 = Or,
    Rf = vt(p9),
    h9 = Li,
    Df = vt(h9),
    m9 = Mi,
    Nf = vt(m9),
    C9 = Vo,
    Vf = vt(C9),
    y9 = Ei,
    Bf = vt(y9),
    g9 = Ho,
    If = vt(g9),
    v9 = u9,
    Ff = vt(v9);

function vt(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Bn = ue.Link = bf.default;
ue.Button = Uf.default;
ue.Element = Lf.default;
ue.scroller = Rf.default;
ue.Events = Df.default;
ue.scrollSpy = Nf.default;
ue.animateScroll = Vf.default;
ue.ScrollLink = Bf.default;
ue.ScrollElement = If.default;
ue.Helpers = Ff.default;
ue.default = {
    Link: bf.default,
    Button: Uf.default,
    Element: Lf.default,
    scroller: Rf.default,
    Events: Df.default,
    scrollSpy: Nf.default,
    animateScroll: Vf.default,
    ScrollLink: Bf.default,
    ScrollElement: If.default,
    Helpers: Ff.default
};
const x9 = () => {
        const [e, t] = U.useState(!1), [n, r] = U.useState("home");
        return s.jsx("div", {
            className: " fixed z-50 w-full",
            children: s.jsx(Pi, {
                children: s.jsxs("div", {
                    className: "flex justify-between items-center px-6 py-[18px] bg-[#F2F6FA] border border-[rgba(0,0,0,0.05)] rounded-xl relative",
                    children: [s.jsx("div", {
                        children: s.jsxs("svg", {
                            className: "w-[114px] sm:w-[134px] sm:h-[43px]",
                            viewBox: "0 0 134 43",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [s.jsx("path", {
                                d: "M7.28 27.5609L1.596 21.3729L7.28 15.1849H13.3L7.588 21.3729L13.3 27.5609H7.28ZM27.1819 31.1729L23.0939 23.7529H21.9459V31.1729H17.1579V11.5169H25.1939C26.7432 11.5169 28.0592 11.7875 29.1419 12.3289C30.2432 12.8702 31.0645 13.6169 31.6059 14.5689C32.1472 15.5022 32.4179 16.5475 32.4179 17.7049C32.4179 19.0115 32.0445 20.1782 31.2979 21.2049C30.5699 22.2315 29.4872 22.9595 28.0499 23.3889L32.5859 31.1729H27.1819ZM21.9459 20.3649H24.9139C25.7912 20.3649 26.4445 20.1502 26.8739 19.7209C27.3219 19.2915 27.5459 18.6849 27.5459 17.9009C27.5459 17.1542 27.3219 16.5662 26.8739 16.1369C26.4445 15.7075 25.7912 15.4929 24.9139 15.4929H21.9459V20.3649ZM118.525 4.57285L111.021 36.4089H106.401L113.905 4.57285H118.525ZM120.573 15.1849H126.593L132.277 21.3729L126.593 27.5609H120.573L126.285 21.3729L120.573 15.1849Z",
                                fill: "#00C16A"
                            }), s.jsx("path", {
                                d: "M34.7235 23.3889C34.7235 21.8395 35.0408 20.4675 35.6755 19.2729C36.3288 18.0782 37.2062 17.1542 38.3075 16.5009C39.4275 15.8289 40.6595 15.4929 42.0035 15.4929C43.2168 15.4929 44.2715 15.7355 45.1675 16.2209C46.0822 16.6875 46.8102 17.2755 47.3515 17.9849V15.7449H50.5715V31.1729H47.3515V28.8769C46.8102 29.6049 46.0728 30.2115 45.1395 30.6969C44.2062 31.1822 43.1422 31.4249 41.9475 31.4249C40.6222 31.4249 39.4088 31.0889 38.3075 30.4169C37.2062 29.7262 36.3288 28.7742 35.6755 27.5609C35.0408 26.3289 34.7235 24.9382 34.7235 23.3889ZM47.3515 23.4449C47.3515 22.3809 47.1275 21.4569 46.6795 20.6729C46.2502 19.8889 45.6808 19.2915 44.9715 18.8809C44.2622 18.4702 43.4968 18.2649 42.6755 18.2649C41.8542 18.2649 41.0888 18.4702 40.3795 18.8809C39.6702 19.2729 39.0915 19.8609 38.6435 20.6449C38.2142 21.4102 37.9995 22.3249 37.9995 23.3889C37.9995 24.4529 38.2142 25.3862 38.6435 26.1889C39.0915 26.9915 39.6702 27.6075 40.3795 28.0369C41.1075 28.4475 41.8728 28.6529 42.6755 28.6529C43.4968 28.6529 44.2622 28.4475 44.9715 28.0369C45.6808 27.6262 46.2502 27.0289 46.6795 26.2449C47.1275 25.4422 47.3515 24.5089 47.3515 23.4449ZM68.6521 15.7449L59.1881 38.4249H55.8841L59.0201 30.9209L52.9441 15.7449H56.5001L60.8401 27.5049L65.3481 15.7449H68.6521ZM69.9969 23.3889C69.9969 21.8395 70.3143 20.4675 70.9489 19.2729C71.6023 18.0782 72.4796 17.1542 73.5809 16.5009C74.7009 15.8289 75.9329 15.4929 77.2769 15.4929C78.4903 15.4929 79.5449 15.7355 80.4409 16.2209C81.3556 16.6875 82.0836 17.2755 82.6249 17.9849V15.7449H85.8449V31.1729H82.6249V28.8769C82.0836 29.6049 81.3463 30.2115 80.4129 30.6969C79.4796 31.1822 78.4156 31.4249 77.2209 31.4249C75.8956 31.4249 74.6823 31.0889 73.5809 30.4169C72.4796 29.7262 71.6023 28.7742 70.9489 27.5609C70.3143 26.3289 69.9969 24.9382 69.9969 23.3889ZM82.6249 23.4449C82.6249 22.3809 82.4009 21.4569 81.9529 20.6729C81.5236 19.8889 80.9543 19.2915 80.2449 18.8809C79.5356 18.4702 78.7703 18.2649 77.9489 18.2649C77.1276 18.2649 76.3623 18.4702 75.6529 18.8809C74.9436 19.2729 74.3649 19.8609 73.9169 20.6449C73.4876 21.4102 73.2729 22.3249 73.2729 23.3889C73.2729 24.4529 73.4876 25.3862 73.9169 26.1889C74.3649 26.9915 74.9436 27.6075 75.6529 28.0369C76.3809 28.4475 77.1463 28.6529 77.9489 28.6529C78.7703 28.6529 79.5356 28.4475 80.2449 28.0369C80.9543 27.6262 81.5236 27.0289 81.9529 26.2449C82.4009 25.4422 82.6249 24.5089 82.6249 23.4449ZM97.8215 15.4929C99.0348 15.4929 100.118 15.7449 101.07 16.2489C102.04 16.7529 102.796 17.4995 103.338 18.4889C103.879 19.4782 104.15 20.6729 104.15 22.0729V31.1729H100.986V22.5489C100.986 21.1675 100.64 20.1129 99.9495 19.3849C99.2588 18.6382 98.3162 18.2649 97.1215 18.2649C95.9268 18.2649 94.9748 18.6382 94.2655 19.3849C93.5748 20.1129 93.2295 21.1675 93.2295 22.5489V31.1729H90.0375V15.7449H93.2295V17.5089C93.7522 16.8742 94.4148 16.3795 95.2175 16.0249C96.0388 15.6702 96.9068 15.4929 97.8215 15.4929Z",
                                fill: "#172635"
                            })]
                        })
                    }), s.jsxs("ul", {
                        className: `flex items-center md:flex-row flex-col gap-[24px] sm:gap-[36px] sm:text-lg md:static absolute top-24 ${e?"left-0 opacity-100":"-left-full opacity-0 md:opacity-100"} md:duration-0 duration-200 md:py-0 py-10 md:rounded-none rounded-[12px] bg-[#F2F6FA]/50 border md:border-0 md:w-auto w-full filter md:backdrop-blur-0 backdrop-blur-md md:bg-transparent z-20`,
                        children: [s.jsx("li", {
                            className: `font-medium hover:text-[#172635] ${n=="home"?"text-[#172635]":"text-[#172635]/60"} duration-300 cursor-pointer`,
                            children: s.jsx(Bn, {
                                href: "#home",
                                to: "home",
                                spy: !0,
                                smooth: !0,
                                offset: 0,
                                duration: 500,
                                onClick: () => {
                                    r("home"), t(!1)
                                },
                                children: "Home"
                            })
                        }), s.jsx("li", {
                            className: `font-medium hover:text-[#172635] ${n=="about-me"?"text-[#172635]":"text-[#172635]/60"}  duration-300 cursor-pointer`,
                            children: s.jsx(Bn, {
                                href: "#about-me",
                                to: "about-me",
                                spy: !0,
                                smooth: !0,
                                offset: -100,
                                duration: 500,
                                onClick: () => {
                                    r("about-me"), t(!1)
                                },
                                children: "About me"
                            })
                        }), s.jsx("li", {
                            className: `font-medium hover:text-[#172635] ${n=="skills"?"text-[#172635]":"text-[#172635]/60"} duration-300 cursor-pointer`,
                            children: s.jsx(Bn, {
                                href: "#skills",
                                to: "skills",
                                spy: !0,
                                smooth: !0,
                                offset: -100,
                                duration: 500,
                                onClick: () => {
                                    r("skills"), t(!1)
                                },
                                children: "Skills"
                            })
                        }), s.jsx("li", {
                            className: `font-medium hover:text-[#172635] ${n=="works"?"text-[#172635]":"text-[#172635]/60"} duration-300 cursor-pointer`,
                            children: s.jsx(Bn, {
                                href: "#works",
                                to: "works",
                                spy: !0,
                                smooth: !0,
                                offset: -100,
                                duration: 500,
                                onClick: () => {
                                    r("works"), t(!1)
                                },
                                children: "Works"
                            })
                        }), s.jsx("li", {
                            className: `font-medium hover:text-[#172635] ${n=="experience"?"text-[#172635]":"text-[#172635]/60"} duration-300 cursor-pointer`,
                            children: s.jsx(Bn, {
                                href: "#experience",
                                to: "experience",
                                spy: !0,
                                smooth: !0,
                                offset: -100,
                                duration: 500,
                                onClick: () => {
                                    r("experience"), t(!1)
                                },
                                children: "Experience"
                            })
                        })]
                    }), s.jsx("div", {
                        onClick: C2,
                        children: s.jsx(wf, {
                            text: "Contact Me",
                            heightButton: "h-[38.15px]",
                            fontSize: "text-base md:block hidden"
                        })
                    }), s.jsx("button", {
                        onClick: i => t(!e),
                        className: "md:hidden block",
                        "aria-label": "menu button",
                        children: s.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "32",
                            height: "32",
                            viewBox: "0 0 24 24",
                            children: s.jsxs("g", {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-width": "1.5",
                                children: [s.jsx("path", {
                                    d: "M20 7H4",
                                    className: `${e?"translate-x-6":"translate-x-0"} duration-300`
                                }), s.jsx("path", {
                                    d: "M20 12H4",
                                    color: "#00C16A",
                                    opacity: `${e?"1":".8"}`
                                }), s.jsx("path", {
                                    d: "M20 17H4",
                                    className: `${e?"-translate-x-6":"translate-y-0"} duration-300`
                                })]
                            })
                        })
                    })]
                })
            })
        })
    },
    _9 = "/assets/robotic-o1BDpC-w.png",
    Hf = U.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    Zo = U.createContext({}),
    T2 = U.createContext(null),
    O2 = typeof document < "u",
    j9 = O2 ? U.useLayoutEffect : U.useEffect,
    zf = U.createContext({
        strict: !1
    }),
    k2 = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    w9 = "framerAppearId",
    Zf = "data-" + k2(w9),
    S9 = {
        skipAnimations: !1,
        useManualTiming: !1
    };
class Pc {
    constructor() {
        this.order = [], this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0, this.scheduled.clear()
    }
}

function T9(e) {
    let t = new Pc,
        n = new Pc,
        r = 0,
        i = !1,
        o = !1;
    const a = new WeakSet,
        l = {
            schedule: (u, c = !1, d = !1) => {
                const f = d && i,
                    p = f ? t : n;
                return c && a.add(u), p.add(u) && f && i && (r = t.order.length), u
            },
            cancel: u => {
                n.remove(u), a.delete(u)
            },
            process: u => {
                if (i) {
                    o = !0;
                    return
                }
                if (i = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
                    for (let c = 0; c < r; c++) {
                        const d = t.order[c];
                        a.has(d) && (l.schedule(d), e()), d(u)
                    }
                i = !1, o && (o = !1, l.process(u))
            }
        };
    return l
}
const ds = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    O9 = 40;

function Gf(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = ds.reduce((f, p) => (f[p] = T9(() => n = !0), f), {}),
        a = f => {
            o[f].process(i)
        },
        l = () => {
            const f = performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, O9), 1), i.timestamp = f, i.isProcessing = !0, ds.forEach(a), i.isProcessing = !1, n && t && (r = !1, e(l))
        },
        u = () => {
            n = !0, r = !0, i.isProcessing || e(l)
        };
    return {
        schedule: ds.reduce((f, p) => {
            const y = o[p];
            return f[p] = (v, g = !1, _ = !1) => (n || u(), y.schedule(v, g, _)), f
        }, {}),
        cancel: f => ds.forEach(p => o[p].cancel(f)),
        state: i,
        steps: o
    }
}
const {
    schedule: A2,
    cancel: ox
} = Gf(queueMicrotask, !1);

function k9(e, t, n, r) {
    const {
        visualElement: i
    } = U.useContext(Zo), o = U.useContext(zf), a = U.useContext(T2), l = U.useContext(Hf).reducedMotion, u = U.useRef();
    r = r || o.renderer, !u.current && r && (u.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const c = u.current;
    U.useInsertionEffect(() => {
        c && c.update(n, a)
    });
    const d = U.useRef(!!(n[Zf] && !window.HandoffComplete));
    return j9(() => {
        c && (A2.postRender(c.render), d.current && c.animationState && c.animationState.animateChanges())
    }), U.useEffect(() => {
        c && (c.updateFeatures(), !d.current && c.animationState && c.animationState.animateChanges(), d.current && (d.current = !1, window.HandoffComplete = !0))
    }), c
}

function Jn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function A9(e, t, n) {
    return U.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Jn(n) && (n.current = r))
    }, [t])
}

function gi(e) {
    return typeof e == "string" || Array.isArray(e)
}

function Go(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const P2 = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    E2 = ["initial", ...P2];

function Wo(e) {
    return Go(e.animate) || E2.some(t => gi(e[t]))
}

function Wf(e) {
    return !!(Wo(e) || e.variants)
}

function P9(e, t) {
    if (Wo(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || gi(n) ? n : void 0,
            animate: gi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function E9(e) {
    const {
        initial: t,
        animate: n
    } = P9(e, U.useContext(Zo));
    return U.useMemo(() => ({
        initial: t,
        animate: n
    }), [Ec(t), Ec(n)])
}

function Ec(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Mc = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    vi = {};
for (const e in Mc) vi[e] = {
    isEnabled: t => Mc[e].some(n => !!t[n])
};

function M9(e) {
    for (const t in e) vi[t] = { ...vi[t],
        ...e[t]
    }
}
const Kf = U.createContext({}),
    Qf = U.createContext({}),
    b9 = Symbol.for("motionComponentSymbol");

function U9({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && M9(e);

    function o(l, u) {
        let c;
        const d = { ...U.useContext(Hf),
                ...l,
                layoutId: L9(l)
            },
            {
                isStatic: f
            } = d,
            p = E9(l),
            y = r(l, f);
        if (!f && O2) {
            p.visualElement = k9(i, y, d, t);
            const v = U.useContext(Qf),
                g = U.useContext(zf).strict;
            p.visualElement && (c = p.visualElement.loadFeatures(d, g, e, v))
        }
        return U.createElement(Zo.Provider, {
            value: p
        }, c && p.visualElement ? U.createElement(c, {
            visualElement: p.visualElement,
            ...d
        }) : null, n(i, l, A9(y, p.visualElement, u), y, f, p.visualElement))
    }
    const a = U.forwardRef(o);
    return a[b9] = i, a
}

function L9({
    layoutId: e
}) {
    const t = U.useContext(Kf).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function R9(e) {
    function t(r, i = {}) {
        return U9(e(r, i))
    }
    if (typeof Proxy > "u") return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
    })
}
const D9 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function M2(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(D9.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const ro = {};

function N9(e) {
    Object.assign(ro, e)
}
const Ni = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Nn = new Set(Ni);

function Yf(e, {
    layout: t,
    layoutId: n
}) {
    return Nn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ro[e] || e === "opacity")
}
const Pe = e => !!(e && e.getVelocity),
    V9 = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    B9 = Ni.length;

function I9(e, {
    enableHardwareAcceleration: t = !0,
    allowTransformNone: n = !0
}, r, i) {
    let o = "";
    for (let a = 0; a < B9; a++) {
        const l = Ni[a];
        if (e[l] !== void 0) {
            const u = V9[l] || l;
            o += `${u}(${e[l]}) `
        }
    }
    return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o
}
const Xf = e => t => typeof t == "string" && t.startsWith(e),
    qf = Xf("--"),
    F9 = Xf("var(--"),
    b2 = e => F9(e) ? H9.test(e.split("/*")[0].trim()) : !1,
    H9 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    z9 = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    ln = (e, t, n) => n > t ? t : n < e ? e : n,
    kr = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    qr = { ...kr,
        transform: e => ln(0, 1, e)
    },
    fs = { ...kr,
        default: 1
    },
    Jr = e => Math.round(e * 1e5) / 1e5,
    U2 = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
    Z9 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
    G9 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

function Vi(e) {
    return typeof e == "string"
}
const Bi = e => ({
        test: t => Vi(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    Bt = Bi("deg"),
    gt = Bi("%"),
    B = Bi("px"),
    W9 = Bi("vh"),
    K9 = Bi("vw"),
    bc = { ...gt,
        parse: e => gt.parse(e) / 100,
        transform: e => gt.transform(e * 100)
    },
    Uc = { ...kr,
        transform: Math.round
    },
    Jf = {
        borderWidth: B,
        borderTopWidth: B,
        borderRightWidth: B,
        borderBottomWidth: B,
        borderLeftWidth: B,
        borderRadius: B,
        radius: B,
        borderTopLeftRadius: B,
        borderTopRightRadius: B,
        borderBottomRightRadius: B,
        borderBottomLeftRadius: B,
        width: B,
        maxWidth: B,
        height: B,
        maxHeight: B,
        size: B,
        top: B,
        right: B,
        bottom: B,
        left: B,
        padding: B,
        paddingTop: B,
        paddingRight: B,
        paddingBottom: B,
        paddingLeft: B,
        margin: B,
        marginTop: B,
        marginRight: B,
        marginBottom: B,
        marginLeft: B,
        rotate: Bt,
        rotateX: Bt,
        rotateY: Bt,
        rotateZ: Bt,
        scale: fs,
        scaleX: fs,
        scaleY: fs,
        scaleZ: fs,
        skew: Bt,
        skewX: Bt,
        skewY: Bt,
        distance: B,
        translateX: B,
        translateY: B,
        translateZ: B,
        x: B,
        y: B,
        z: B,
        perspective: B,
        transformPerspective: B,
        opacity: qr,
        originX: bc,
        originY: bc,
        originZ: B,
        zIndex: Uc,
        backgroundPositionX: B,
        backgroundPositionY: B,
        fillOpacity: qr,
        strokeOpacity: qr,
        numOctaves: Uc
    };

function L2(e, t, n, r) {
    const {
        style: i,
        vars: o,
        transform: a,
        transformOrigin: l
    } = e;
    let u = !1,
        c = !1,
        d = !0;
    for (const f in t) {
        const p = t[f];
        if (qf(f)) {
            o[f] = p;
            continue
        }
        const y = Jf[f],
            v = z9(p, y);
        if (Nn.has(f)) {
            if (u = !0, a[f] = v, !d) continue;
            p !== (y.default || 0) && (d = !1)
        } else f.startsWith("origin") ? (c = !0, l[f] = v) : i[f] = v
    }
    if (t.transform || (u || r ? i.transform = I9(e.transform, n, d, r) : i.transform && (i.transform = "none")), c) {
        const {
            originX: f = "50%",
            originY: p = "50%",
            originZ: y = 0
        } = l;
        i.transformOrigin = `${f} ${p} ${y}`
    }
}
const R2 = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function $f(e, t, n) {
    for (const r in t) !Pe(t[r]) && !Yf(r, n) && (e[r] = t[r])
}

function Q9({
    transformTemplate: e
}, t, n) {
    return U.useMemo(() => {
        const r = R2();
        return L2(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function Y9(e, t, n) {
    const r = e.style || {},
        i = {};
    return $f(i, r, e), Object.assign(i, Q9(e, t, n)), i
}

function X9(e, t, n) {
    const r = {},
        i = Y9(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r
}
const q9 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function io(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || q9.has(e)
}
let e5 = e => !io(e);

function J9(e) {
    e && (e5 = t => t.startsWith("on") ? !io(t) : e(t))
}
try {
    J9(require("@emotion/is-prop-valid").default)
} catch {}

function $9(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (e5(i) || n === !0 && io(i) || !t && !io(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function Lc(e, t, n) {
    return typeof e == "string" ? e : B.transform(t + n * e)
}

function eh(e, t, n) {
    const r = Lc(t, e.x, e.width),
        i = Lc(n, e.y, e.height);
    return `${r} ${i}`
}
const th = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    nh = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function rh(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? th : nh;
    e[o.offset] = B.transform(-r);
    const a = B.transform(t),
        l = B.transform(n);
    e[o.array] = `${a} ${l}`
}

function D2(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: a,
    pathSpacing: l = 1,
    pathOffset: u = 0,
    ...c
}, d, f, p) {
    if (L2(e, c, d, p), f) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: y,
        style: v,
        dimensions: g
    } = e;
    y.transform && (g && (v.transform = y.transform), delete y.transform), g && (i !== void 0 || o !== void 0 || v.transform) && (v.transformOrigin = eh(g, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (y.x = t), n !== void 0 && (y.y = n), r !== void 0 && (y.scale = r), a !== void 0 && rh(y, a, l, u, !1)
}
const t5 = () => ({ ...R2(),
        attrs: {}
    }),
    N2 = e => typeof e == "string" && e.toLowerCase() === "svg";

function ih(e, t, n, r) {
    const i = U.useMemo(() => {
        const o = t5();
        return D2(o, t, {
            enableHardwareAcceleration: !1
        }, N2(r), e.transformTemplate), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [t]);
    if (e.style) {
        const o = {};
        $f(o, e.style, e), i.style = { ...o,
            ...i.style
        }
    }
    return i
}

function sh(e = !1) {
    return (n, r, i, {
        latestValues: o
    }, a) => {
        const u = (M2(n) ? ih : X9)(r, o, a, n),
            c = $9(r, typeof n == "string", e),
            d = n !== U.Fragment ? { ...c,
                ...u,
                ref: i
            } : {},
            {
                children: f
            } = r,
            p = U.useMemo(() => Pe(f) ? f.get() : f, [f]);
        return U.createElement(n, { ...d,
            children: p
        })
    }
}

function n5(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o])
}
const r5 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function i5(e, t, n, r) {
    n5(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(r5.has(i) ? i : k2(i), t.attrs[i])
}

function V2(e, t, n) {
    var r;
    const {
        style: i
    } = e, o = {};
    for (const a in i)(Pe(i[a]) || t.style && Pe(t.style[a]) || Yf(a, e) || ((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[a] = i[a]);
    return o
}

function s5(e, t, n) {
    const r = V2(e, t, n);
    for (const i in e)
        if (Pe(e[i]) || Pe(t[i])) {
            const o = Ni.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}

function B2(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t
}

function oh(e) {
    const t = U.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const X1 = e => Array.isArray(e),
    ah = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    lh = e => X1(e) ? e[e.length - 1] || 0 : e;

function As(e) {
    const t = Pe(e) ? e.get() : e;
    return ah(t) ? t.toValue() : t
}

function uh({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, i, o) {
    const a = {
        latestValues: ch(r, i, o, e),
        renderState: t()
    };
    return n && (a.mount = l => n(r, l, a)), a
}
const o5 = e => (t, n) => {
    const r = U.useContext(Zo),
        i = U.useContext(T2),
        o = () => uh(e, t, r, i);
    return n ? o() : oh(o)
};

function ch(e, t, n, r) {
    const i = {},
        o = r(e, {});
    for (const p in o) i[p] = As(o[p]);
    let {
        initial: a,
        animate: l
    } = e;
    const u = Wo(e),
        c = Wf(e);
    t && c && !u && e.inherit !== !1 && (a === void 0 && (a = t.initial), l === void 0 && (l = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || a === !1;
    const f = d ? l : a;
    return f && typeof f != "boolean" && !Go(f) && (Array.isArray(f) ? f : [f]).forEach(y => {
        const v = B2(e, y);
        if (!v) return;
        const {
            transitionEnd: g,
            transition: _,
            ...C
        } = v;
        for (const h in C) {
            let m = C[h];
            if (Array.isArray(m)) {
                const x = d ? m.length - 1 : 0;
                m = m[x]
            }
            m !== null && (i[h] = m)
        }
        for (const h in g) i[h] = g[h]
    }), i
}
const Ee = e => e,
    {
        schedule: we,
        cancel: un,
        state: _e,
        steps: ba
    } = Gf(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ee, !0),
    dh = {
        useVisualState: o5({
            scrapeMotionValuesFromProps: s5,
            createRenderState: t5,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                we.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), we.render(() => {
                    D2(n, r, {
                        enableHardwareAcceleration: !1
                    }, N2(t.tagName), e.transformTemplate), i5(t, n)
                })
            }
        })
    },
    fh = {
        useVisualState: o5({
            scrapeMotionValuesFromProps: V2,
            createRenderState: R2
        })
    };

function ph(e, {
    forwardMotionProps: t = !1
}, n, r) {
    return { ...M2(e) ? dh : fh,
        preloadedFeatures: n,
        useRender: sh(t),
        createVisualElement: r,
        Component: e
    }
}

function Ot(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const a5 = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function Ko(e, t = "page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const hh = e => t => a5(t) && e(t, Ko(t));

function At(e, t, n, r) {
    return Ot(e, t, hh(n), r)
}
const mh = (e, t) => n => t(e(n)),
    Pt = (...e) => e.reduce(mh);

function l5(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const Rc = l5("dragHorizontal"),
    Dc = l5("dragVertical");

function u5(e) {
    let t = !1;
    if (e === "y") t = Dc();
    else if (e === "x") t = Rc();
    else {
        const n = Rc(),
            r = Dc();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function c5() {
    const e = u5(!0);
    return e ? (e(), !1) : !0
}
class hn {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function Nc(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
        r = "onHover" + (t ? "Start" : "End"),
        i = (o, a) => {
            if (o.pointerType === "touch" || c5()) return;
            const l = e.getProps();
            e.animationState && l.whileHover && e.animationState.setActive("whileHover", t), l[r] && l[r](o, a)
        };
    return At(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class Ch extends hn {
    mount() {
        this.unmount = Pt(Nc(this.node, !0), Nc(this.node, !1))
    }
    unmount() {}
}
class yh extends hn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Pt(Ot(this.node.current, "focus", () => this.onFocus()), Ot(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const d5 = (e, t) => t ? e === t ? !0 : d5(e, t.parentElement) : !1;

function Ua(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, Ko(n))
}
class gh extends hn {
    constructor() {
        super(...arguments), this.removeStartListeners = Ee, this.removeEndListeners = Ee, this.removeAccessibleListeners = Ee, this.startPointerPress = (t, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const r = this.node.getProps(),
                o = At(window, "pointerup", (l, u) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: c,
                        onTapCancel: d,
                        globalTapTarget: f
                    } = this.node.getProps();
                    !f && !d5(this.node.current, l.target) ? d && d(l, u) : c && c(l, u)
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                a = At(window, "pointercancel", (l, u) => this.cancelPress(l, u), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = Pt(o, a), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = o => {
                    if (o.key !== "Enter" || this.isPressing) return;
                    const a = l => {
                        l.key !== "Enter" || !this.checkPressEnd() || Ua("up", (u, c) => {
                            const {
                                onTap: d
                            } = this.node.getProps();
                            d && d(u, c)
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = Ot(this.node.current, "keyup", a), Ua("down", (l, u) => {
                        this.startPress(l, u)
                    })
                },
                n = Ot(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && Ua("cancel", (o, a) => this.cancelPress(o, a))
                },
                i = Ot(this.node.current, "blur", r);
            this.removeAccessibleListeners = Pt(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && r(t, n)
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !c5()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && r(t, n)
    }
    mount() {
        const t = this.node.getProps(),
            n = At(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = Ot(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Pt(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const q1 = new WeakMap,
    La = new WeakMap,
    vh = e => {
        const t = q1.get(e.target);
        t && t(e)
    },
    xh = e => {
        e.forEach(vh)
    };

function _h({
    root: e,
    ...t
}) {
    const n = e || document;
    La.has(n) || La.set(n, {});
    const r = La.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(xh, {
        root: e,
        ...t
    })), r[i]
}

function jh(e, t, n) {
    const r = _h(t);
    return q1.set(e, n), r.observe(e), () => {
        q1.delete(e), r.unobserve(e)
    }
}
const wh = {
    some: 0,
    all: 1
};
class Sh extends hn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: o
        } = t, a = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : wh[i]
        }, l = u => {
            const {
                isIntersecting: c
            } = u;
            if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView)) return;
            c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {
                onViewportEnter: d,
                onViewportLeave: f
            } = this.node.getProps(), p = c ? d : f;
            p && p(u)
        };
        return jh(this.node.current, a, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(Th(t, n)) && this.startObserver()
    }
    unmount() {}
}

function Th({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const Oh = {
    inView: {
        Feature: Sh
    },
    tap: {
        Feature: gh
    },
    focus: {
        Feature: yh
    },
    hover: {
        Feature: Ch
    }
};

function f5(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function kh(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t
}

function Ah(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t
}

function Qo(e, t, n) {
    const r = e.getProps();
    return B2(r, t, n !== void 0 ? n : r.custom, kh(e), Ah(e))
}
const rn = e => e * 1e3,
    Et = e => e / 1e3,
    Ph = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Eh = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Mh = {
        type: "keyframes",
        duration: .8
    },
    bh = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Uh = (e, {
        keyframes: t
    }) => t.length > 2 ? Mh : Nn.has(e) ? e.startsWith("scale") ? Eh(t[1]) : Ph : bh;

function Lh({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: o,
    repeatType: a,
    repeatDelay: l,
    from: u,
    elapsed: c,
    ...d
}) {
    return !!Object.keys(d).length
}

function I2(e, t) {
    return e[t] || e.default || e
}
const Rh = e => e !== null;

function Yo(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(Rh),
        o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
let Ps;

function Dh() {
    Ps = void 0
}
const sn = {
        now: () => (Ps === void 0 && sn.set(_e.isProcessing || S9.useManualTiming ? _e.timestamp : performance.now()), Ps),
        set: e => {
            Ps = e, queueMicrotask(Dh)
        }
    },
    p5 = e => /^0[^.\s]+$/u.test(e);

function Nh(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || p5(e) : !0
}
let h5 = Ee;
const m5 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Vh = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Bh(e) {
    const t = Vh.exec(e);
    if (!t) return [, ];
    const [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function C5(e, t, n = 1) {
    const [r, i] = Bh(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const a = o.trim();
        return m5(a) ? parseFloat(a) : a
    }
    return b2(i) ? C5(i, t, n + 1) : i
}
const Ih = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    Vc = e => e === kr || e === B,
    Bc = (e, t) => parseFloat(e.split(", ")[t]),
    Ic = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return Bc(i[1], t); {
            const o = r.match(/^matrix\((.+)\)$/u);
            return o ? Bc(o[1], e) : 0
        }
    },
    Fh = new Set(["x", "y", "z"]),
    Hh = Ni.filter(e => !Fh.has(e));

function Fc(e) {
    const t = [];
    return Hh.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const yr = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: Ic(4, 13),
    y: Ic(5, 14)
};
yr.translateX = yr.x;
yr.translateY = yr.y;
const y5 = e => t => t.test(e),
    zh = {
        test: e => e === "auto",
        parse: e => e
    },
    g5 = [kr, B, gt, Bt, K9, W9, zh],
    Hc = e => g5.find(y5(e)),
    An = new Set;
let J1 = !1,
    $1 = !1;

function v5() {
    if ($1) {
        const e = Array.from(An).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            Fc(r).length && (n.set(r, Fc(r)), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render()
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    $1 = !1, J1 = !1, An.forEach(e => e.complete()), An.clear()
}

function x5() {
    An.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && ($1 = !0)
    })
}

function Zh() {
    x5(), v5()
}
class F2 {
    constructor(t, n, r, i, o, a = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = a
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (An.add(this), J1 || (J1 = !0, we.read(x5), we.resolveKeyframes(v5))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const a = i == null ? void 0 : i.get(),
                        l = t[t.length - 1];
                    if (a !== void 0) t[0] = a;
                    else if (r && n) {
                        const u = r.readValue(n, l);
                        u != null && (t[0] = u)
                    }
                    t[0] === void 0 && (t[0] = l), i && a === void 0 && i.set(t[0])
                } else t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), An.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, An.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const H2 = (e, t) => n => !!(Vi(n) && G9.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    _5 = (e, t, n) => r => {
        if (!Vi(r)) return r;
        const [i, o, a, l] = r.match(U2);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: l !== void 0 ? parseFloat(l) : 1
        }
    },
    Gh = e => ln(0, 255, e),
    Ra = { ...kr,
        transform: e => Math.round(Gh(e))
    },
    Tn = {
        test: H2("rgb", "red"),
        parse: _5("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Ra.transform(e) + ", " + Ra.transform(t) + ", " + Ra.transform(n) + ", " + Jr(qr.transform(r)) + ")"
    };

function Wh(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const el = {
        test: H2("#"),
        parse: Wh,
        transform: Tn.transform
    },
    $n = {
        test: H2("hsl", "hue"),
        parse: _5("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + gt.transform(Jr(t)) + ", " + gt.transform(Jr(n)) + ", " + Jr(qr.transform(r)) + ")"
    },
    ke = {
        test: e => Tn.test(e) || el.test(e) || $n.test(e),
        parse: e => Tn.test(e) ? Tn.parse(e) : $n.test(e) ? $n.parse(e) : el.parse(e),
        transform: e => Vi(e) ? e : e.hasOwnProperty("red") ? Tn.transform(e) : $n.transform(e)
    };

function Kh(e) {
    var t, n;
    return isNaN(e) && Vi(e) && (((t = e.match(U2)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Z9)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const j5 = "number",
    w5 = "color",
    Qh = "var",
    Yh = "var(",
    zc = "${}",
    Xh = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function so(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let o = 0;
    const l = t.replace(Xh, u => (ke.test(u) ? (r.color.push(o), i.push(w5), n.push(ke.parse(u))) : u.startsWith(Yh) ? (r.var.push(o), i.push(Qh), n.push(u)) : (r.number.push(o), i.push(j5), n.push(parseFloat(u))), ++o, zc)).split(zc);
    return {
        values: n,
        split: l,
        indexes: r,
        types: i
    }
}

function S5(e) {
    return so(e).values
}

function T5(e) {
    const {
        split: t,
        types: n
    } = so(e), r = t.length;
    return i => {
        let o = "";
        for (let a = 0; a < r; a++)
            if (o += t[a], i[a] !== void 0) {
                const l = n[a];
                l === j5 ? o += Jr(i[a]) : l === w5 ? o += ke.transform(i[a]) : o += i[a]
            }
        return o
    }
}
const qh = e => typeof e == "number" ? 0 : e;

function Jh(e) {
    const t = S5(e);
    return T5(e)(t.map(qh))
}
const cn = {
        test: Kh,
        parse: S5,
        createTransformer: T5,
        getAnimatableNone: Jh
    },
    $h = new Set(["brightness", "contrast", "saturate", "opacity"]);

function em(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(U2) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = $h.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}
const tm = /\b([a-z-]*)\(.*?\)/gu,
    tl = { ...cn,
        getAnimatableNone: e => {
            const t = e.match(tm);
            return t ? t.map(em).join(" ") : e
        }
    },
    nm = { ...Jf,
        color: ke,
        backgroundColor: ke,
        outlineColor: ke,
        fill: ke,
        stroke: ke,
        borderColor: ke,
        borderTopColor: ke,
        borderRightColor: ke,
        borderBottomColor: ke,
        borderLeftColor: ke,
        filter: tl,
        WebkitFilter: tl
    },
    z2 = e => nm[e];

function O5(e, t) {
    let n = z2(e);
    return n !== tl && (n = cn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}

function rm(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) typeof e[r] == "string" && e[r] !== "none" && e[r] !== "0" && (i = e[r]), r++;
    if (i && n)
        for (const o of t) e[o] = O5(n, i)
}
class k5 extends F2 {
    constructor(t, n, r, i) {
        super(t, n, r, i, i == null ? void 0 : i.owner, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n.current) return;
        super.readKeyframes();
        for (let u = 0; u < t.length; u++) {
            const c = t[u];
            if (typeof c == "string" && b2(c)) {
                const d = C5(c, n.current);
                d !== void 0 && (t[u] = d)
            }
        }
        if (!Ih.has(r) || t.length !== 2) return this.resolveNoneKeyframes();
        const [i, o] = t, a = Hc(i), l = Hc(o);
        if (a !== l)
            if (Vc(a) && Vc(l))
                for (let u = 0; u < t.length; u++) {
                    const c = t[u];
                    typeof c == "string" && (t[u] = parseFloat(c))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++) Nh(t[i]) && r.push(i);
        r.length && rm(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = yr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {
            element: n,
            name: r,
            unresolvedKeyframes: i
        } = this;
        if (!n.current) return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const a = i.length - 1,
            l = i[a];
        i[a] = yr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([u, c]) => {
            n.getValue(u).set(c)
        }), this.resolveNoneKeyframes()
    }
}

function im(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const Zc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (cn.test(e) || e === "0") && !e.startsWith("url("));

function sm(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function om(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    const o = e[e.length - 1],
        a = Zc(i, t),
        l = Zc(o, t);
    return !a || !l ? !1 : sm(e) || n === "spring" && r
}
class A5 {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        ...l
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: a,
            ...l
        }, this.updateFinishedPromise()
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Zh(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.hasAttemptedResolve = !0;
        const {
            name: r,
            type: i,
            velocity: o,
            delay: a,
            onComplete: l,
            onUpdate: u,
            isGenerator: c
        } = this.options;
        if (!c && !om(t, r, i, o))
            if (a) this.options.duration = 0;
            else {
                u == null || u(Yo(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
                return
            }
        const d = this.initPlayback(t, n);
        d !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...d
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}

function P5(e, t) {
    return t ? e * (1e3 / t) : 0
}
const am = 5;

function E5(e, t, n) {
    const r = Math.max(t - am, 0);
    return P5(n - e(r), t - r)
}
const Da = .001,
    lm = .01,
    um = 10,
    cm = .05,
    dm = 1;

function fm({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let i, o, a = 1 - t;
    a = ln(cm, dm, a), e = ln(lm, um, Et(e)), a < 1 ? (i = c => {
        const d = c * a,
            f = d * e,
            p = d - n,
            y = nl(c, a),
            v = Math.exp(-f);
        return Da - p / y * v
    }, o = c => {
        const f = c * a * e,
            p = f * n + n,
            y = Math.pow(a, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-f),
            g = nl(Math.pow(c, 2), a);
        return (-i(c) + Da > 0 ? -1 : 1) * ((p - y) * v) / g
    }) : (i = c => {
        const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
        return -Da + d * f
    }, o = c => {
        const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
        return d * f
    });
    const l = 5 / e,
        u = hm(i, o, l);
    if (e = rn(e), isNaN(u)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    }; {
        const c = Math.pow(u, 2) * r;
        return {
            stiffness: c,
            damping: a * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const pm = 12;

function hm(e, t, n) {
    let r = n;
    for (let i = 1; i < pm; i++) r = r - e(r) / t(r);
    return r
}

function nl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const mm = ["duration", "bounce"],
    Cm = ["stiffness", "damping", "mass"];

function Gc(e, t) {
    return t.some(n => e[n] !== void 0)
}

function ym(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Gc(e, Cm) && Gc(e, mm)) {
        const n = fm(e);
        t = { ...t,
            ...n,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function M5({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const i = e[0],
        o = e[e.length - 1],
        a = {
            done: !1,
            value: i
        },
        {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: f,
            isResolvedFromDuration: p
        } = ym({ ...r,
            velocity: -Et(r.velocity || 0)
        }),
        y = f || 0,
        v = u / (2 * Math.sqrt(l * c)),
        g = o - i,
        _ = Et(Math.sqrt(l / c)),
        C = Math.abs(g) < 5;
    n || (n = C ? .01 : 2), t || (t = C ? .005 : .5);
    let h;
    if (v < 1) {
        const m = nl(_, v);
        h = x => {
            const j = Math.exp(-v * _ * x);
            return o - j * ((y + v * _ * g) / m * Math.sin(m * x) + g * Math.cos(m * x))
        }
    } else if (v === 1) h = m => o - Math.exp(-_ * m) * (g + (y + _ * g) * m);
    else {
        const m = _ * Math.sqrt(v * v - 1);
        h = x => {
            const j = Math.exp(-v * _ * x),
                w = Math.min(m * x, 300);
            return o - j * ((y + v * _ * g) * Math.sinh(w) + m * g * Math.cosh(w)) / m
        }
    }
    return {
        calculatedDuration: p && d || null,
        next: m => {
            const x = h(m);
            if (p) a.done = m >= d;
            else {
                let j = y;
                m !== 0 && (v < 1 ? j = E5(h, m, x) : j = 0);
                const w = Math.abs(j) <= n,
                    k = Math.abs(o - x) <= t;
                a.done = w && k
            }
            return a.value = a.done ? o : x, a
        }
    }
}

function Wc({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: a,
    min: l,
    max: u,
    restDelta: c = .5,
    restSpeed: d
}) {
    const f = e[0],
        p = {
            done: !1,
            value: f
        },
        y = T => l !== void 0 && T < l || u !== void 0 && T > u,
        v = T => l === void 0 ? u : u === void 0 || Math.abs(l - T) < Math.abs(u - T) ? l : u;
    let g = n * t;
    const _ = f + g,
        C = a === void 0 ? _ : a(_);
    C !== _ && (g = C - f);
    const h = T => -g * Math.exp(-T / r),
        m = T => C + h(T),
        x = T => {
            const O = h(T),
                S = m(T);
            p.done = Math.abs(O) <= c, p.value = p.done ? C : S
        };
    let j, w;
    const k = T => {
        y(p.value) && (j = T, w = M5({
            keyframes: [p.value, v(p.value)],
            velocity: E5(m, T, p.value),
            damping: i,
            stiffness: o,
            restDelta: c,
            restSpeed: d
        }))
    };
    return k(0), {
        calculatedDuration: null,
        next: T => {
            let O = !1;
            return !w && j === void 0 && (O = !0, x(T), k(T)), j !== void 0 && T >= j ? w.next(T - j) : (!O && x(T), p)
        }
    }
}
const b5 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    gm = 1e-7,
    vm = 12;

function xm(e, t, n, r, i) {
    let o, a, l = 0;
    do a = t + (n - t) / 2, o = b5(a, r, i) - e, o > 0 ? n = a : t = a; while (Math.abs(o) > gm && ++l < vm);
    return a
}

function Ii(e, t, n, r) {
    if (e === t && n === r) return Ee;
    const i = o => xm(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : b5(i(o), t, r)
}
const _m = Ii(.42, 0, 1, 1),
    jm = Ii(0, 0, .58, 1),
    U5 = Ii(.42, 0, .58, 1),
    wm = e => Array.isArray(e) && typeof e[0] != "number",
    L5 = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    R5 = e => t => 1 - e(1 - t),
    Z2 = e => 1 - Math.sin(Math.acos(e)),
    D5 = R5(Z2),
    Sm = L5(Z2),
    N5 = Ii(.33, 1.53, .69, .99),
    G2 = R5(N5),
    Tm = L5(G2),
    Om = e => (e *= 2) < 1 ? .5 * G2(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    km = {
        linear: Ee,
        easeIn: _m,
        easeInOut: U5,
        easeOut: jm,
        circIn: Z2,
        circInOut: Sm,
        circOut: D5,
        backIn: G2,
        backInOut: Tm,
        backOut: N5,
        anticipate: Om
    },
    Kc = e => {
        if (Array.isArray(e)) {
            h5(e.length === 4);
            const [t, n, r, i] = e;
            return Ii(t, n, r, i)
        } else if (typeof e == "string") return km[e];
        return e
    },
    xi = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    oe = (e, t, n) => e + (t - e) * n;

function Na(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Am({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        o = 0,
        a = 0;
    if (!t) i = o = a = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t,
            u = 2 * n - l;
        i = Na(u, l, e + 1 / 3), o = Na(u, l, e), a = Na(u, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(a * 255),
        alpha: r
    }
}
const Va = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    Pm = [el, Tn, $n],
    Em = e => Pm.find(t => t.test(e));

function Qc(e) {
    const t = Em(e);
    let n = t.parse(e);
    return t === $n && (n = Am(n)), n
}
const Yc = (e, t) => {
    const n = Qc(e),
        r = Qc(t),
        i = { ...n
        };
    return o => (i.red = Va(n.red, r.red, o), i.green = Va(n.green, r.green, o), i.blue = Va(n.blue, r.blue, o), i.alpha = oe(n.alpha, r.alpha, o), Tn.transform(i))
};

function rl(e, t) {
    return n => n > 0 ? t : e
}

function Mm(e, t) {
    return n => oe(e, t, n)
}

function W2(e) {
    return typeof e == "number" ? Mm : typeof e == "string" ? b2(e) ? rl : ke.test(e) ? Yc : Lm : Array.isArray(e) ? V5 : typeof e == "object" ? ke.test(e) ? Yc : bm : rl
}

function V5(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((o, a) => W2(o)(o, t[a]));
    return o => {
        for (let a = 0; a < r; a++) n[a] = i[a](o);
        return n
    }
}

function bm(e, t) {
    const n = { ...e,
            ...t
        },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = W2(e[i])(e[i], t[i]));
    return i => {
        for (const o in r) n[o] = r[o](i);
        return n
    }
}

function Um(e, t) {
    var n;
    const r = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < t.values.length; o++) {
        const a = t.types[o],
            l = e.indexes[a][i[a]],
            u = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[o] = u, i[a]++
    }
    return r
}
const Lm = (e, t) => {
    const n = cn.createTransformer(t),
        r = so(e),
        i = so(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Pt(V5(Um(r, i), i.values), n) : rl(e, t)
};

function B5(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? oe(e, t, n) : W2(e)(e, t)
}

function Rm(e, t, n) {
    const r = [],
        i = n || B5,
        o = e.length - 1;
    for (let a = 0; a < o; a++) {
        let l = i(e[a], e[a + 1]);
        if (t) {
            const u = Array.isArray(t) ? t[a] || Ee : t;
            l = Pt(u, l)
        }
        r.push(l)
    }
    return r
}

function Dm(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const o = e.length;
    if (h5(o === t.length), o === 1) return () => t[0];
    if (o === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const a = Rm(t, r, i),
        l = a.length,
        u = c => {
            let d = 0;
            if (l > 1)
                for (; d < e.length - 2 && !(c < e[d + 1]); d++);
            const f = xi(e[d], e[d + 1], c);
            return a[d](f)
        };
    return n ? c => u(ln(e[0], e[o - 1], c)) : u
}

function Nm(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = xi(0, t, r);
        e.push(oe(n, 1, i))
    }
}

function Vm(e) {
    const t = [0];
    return Nm(t, e.length - 1), t
}

function Bm(e, t) {
    return e.map(n => n * t)
}

function Im(e, t) {
    return e.map(() => t || U5).splice(0, e.length - 1)
}

function oo({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = wm(r) ? r.map(Kc) : Kc(r),
        o = {
            done: !1,
            value: t[0]
        },
        a = Bm(n && n.length === t.length ? n : Vm(t), e),
        l = Dm(a, t, {
            ease: Array.isArray(i) ? i : Im(t, i)
        });
    return {
        calculatedDuration: e,
        next: u => (o.value = l(u), o.done = u >= e, o)
    }
}
const Xc = 2e4;

function Fm(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Xc;) t += n, r = e.next(t);
    return t >= Xc ? 1 / 0 : t
}
const Hm = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => we.update(t, !0),
            stop: () => un(t),
            now: () => _e.isProcessing ? _e.timestamp : sn.now()
        }
    },
    zm = {
        decay: Wc,
        inertia: Wc,
        tween: oo,
        keyframes: oo,
        spring: M5
    },
    Zm = e => e / 100;
class K2 extends A5 {
    constructor({
        KeyframeResolver: t = F2,
        ...n
    }) {
        super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle";
        const {
            name: r,
            motionValue: i,
            keyframes: o
        } = this.options, a = (l, u) => this.onKeyframesResolved(l, u);
        r && i && i.owner ? this.resolver = i.owner.resolveKeyframes(o, a, r, i) : this.resolver = new t(o, a, r, i), this.resolver.scheduleResolve()
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: a = 0
        } = this.options, l = zm[n] || oo;
        let u, c;
        l !== oo && typeof t[0] != "number" && (u = Pt(Zm, B5(t[0], t[1])), t = [0, 100]);
        const d = l({ ...this.options,
            keyframes: t
        });
        o === "mirror" && (c = l({ ...this.options,
            keyframes: [...t].reverse(),
            velocity: -a
        })), d.calculatedDuration === null && (d.calculatedDuration = Fm(d));
        const {
            calculatedDuration: f
        } = d, p = f + i, y = p * (r + 1) - i;
        return {
            generator: d,
            mirroredGenerator: c,
            mapPercentToKeyframes: u,
            calculatedDuration: f,
            resolvedDuration: p,
            totalDuration: y
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: r
        } = this;
        if (!r) {
            const {
                keyframes: T
            } = this.options;
            return {
                done: !0,
                value: T[T.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: o,
            mirroredGenerator: a,
            mapPercentToKeyframes: l,
            keyframes: u,
            calculatedDuration: c,
            totalDuration: d,
            resolvedDuration: f
        } = r;
        if (this.startTime === null) return o.next(0);
        const {
            delay: p,
            repeat: y,
            repeatType: v,
            repeatDelay: g,
            onUpdate: _
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const C = this.currentTime - p * (this.speed >= 0 ? 1 : -1),
            h = this.speed >= 0 ? C < 0 : C > d;
        this.currentTime = Math.max(C, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
        let m = this.currentTime,
            x = o;
        if (y) {
            const T = Math.min(this.currentTime, d) / f;
            let O = Math.floor(T),
                S = T % 1;
            !S && T >= 1 && (S = 1), S === 1 && O--, O = Math.min(O, y + 1), !!(O % 2) && (v === "reverse" ? (S = 1 - S, g && (S -= g / f)) : v === "mirror" && (x = a)), m = ln(0, 1, S) * f
        }
        const j = h ? {
            done: !1,
            value: u[0]
        } : x.next(m);
        l && (j.value = l(j.value));
        let {
            done: w
        } = j;
        !h && c !== null && (w = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && w);
        return k && i !== void 0 && (j.value = Yo(u, this.options, i)), _ && _(j.value), k && this.finish(), j
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? Et(t.calculatedDuration) : 0
    }
    get time() {
        return Et(this.currentTime)
    }
    set time(t) {
        t = rn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = Et(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = Hm,
            onPlay: n
        } = this.options;
        this.driver || (this.driver = t(i => this.tick(i))), n && n();
        const r = this.driver.now();
        this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.teardown();
        const {
            onStop: t
        } = this.options;
        t && t()
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const I5 = e => Array.isArray(e) && typeof e[0] == "number";

function F5(e) {
    return !!(!e || typeof e == "string" && H5[e] || I5(e) || Array.isArray(e) && e.every(F5))
}
const Fr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    H5 = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Fr([0, .65, .55, 1]),
        circOut: Fr([.55, 0, 1, .45]),
        backIn: Fr([.31, .01, .66, -.59]),
        backOut: Fr([.33, 1.53, .69, .99])
    };

function z5(e) {
    if (e) return I5(e) ? Fr(e) : Array.isArray(e) ? e.map(z5) : H5[e]
}

function Gm(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: a = "loop",
    ease: l,
    times: u
} = {}) {
    const c = {
        [t]: n
    };
    u && (c.offset = u);
    const d = z5(l);
    return Array.isArray(d) && (c.easing = d), e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: o + 1,
        direction: a === "reverse" ? "alternate" : "normal"
    })
}
const Wm = im(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Km = new Set(["opacity", "clipPath", "filter", "transform"]),
    ao = 10,
    Qm = 2e4;

function Ym(e) {
    return e.type === "spring" || e.name === "backgroundColor" || !F5(e.ease)
}

function Xm(e, t) {
    const n = new K2({ ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < Qm;) r = n.sample(o), i.push(r.value), o += ao;
    return {
        times: void 0,
        keyframes: i,
        duration: o - ao,
        ease: "linear"
    }
}
class qc extends A5 {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            keyframes: i
        } = this.options;
        this.resolver = new k5(i, (o, a) => this.onKeyframesResolved(o, a), n, r), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {
            duration: i = 300,
            times: o,
            ease: a,
            type: l,
            motionValue: u,
            name: c
        } = this.options;
        if (!(!((r = u.owner) === null || r === void 0) && r.current)) return !1;
        if (Ym(this.options)) {
            const {
                onComplete: f,
                onUpdate: p,
                motionValue: y,
                ...v
            } = this.options, g = Xm(t, v);
            t = g.keyframes, t.length === 1 && (t[1] = t[0]), i = g.duration, o = g.times, a = g.ease, l = "keyframes"
        }
        const d = Gm(u.owner.current, c, t, { ...this.options,
            duration: i,
            times: o,
            ease: a
        });
        return d.startTime = sn.now(), this.pendingTimeline ? (d.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : d.onfinish = () => {
            const {
                onComplete: f
            } = this.options;
            u.set(Yo(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: d,
            duration: i,
            times: o,
            type: l,
            ease: a,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return Et(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return Et(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.currentTime = rn(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return Ee;
            const {
                animation: r
            } = n;
            r.timeline = t, r.onfinish = null
        }
        return Ee
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: i,
            type: o,
            ease: a,
            times: l
        } = t;
        if (!(n.playState === "idle" || n.playState === "finished")) {
            if (this.time) {
                const {
                    motionValue: u,
                    onUpdate: c,
                    onComplete: d,
                    ...f
                } = this.options, p = new K2({ ...f,
                    keyframes: r,
                    duration: i,
                    type: o,
                    ease: a,
                    times: l,
                    isGenerator: !0
                }), y = rn(this.time);
                u.setWithVelocity(p.sample(y - ao).value, p.sample(y).value, ao)
            }
            this.cancel()
        }
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: i,
            repeatType: o,
            damping: a,
            type: l
        } = t;
        return Wm() && r && Km.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && a !== 0 && l !== "inertia"
    }
}
const Q2 = (e, t, n, r = {}, i, o) => a => {
    const l = I2(r, e) || {},
        u = l.delay || r.delay || 0;
    let {
        elapsed: c = 0
    } = r;
    c = c - rn(u);
    let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -c,
        onUpdate: p => {
            t.set(p), l.onUpdate && l.onUpdate(p)
        },
        onComplete: () => {
            a(), l.onComplete && l.onComplete()
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    Lh(l) || (d = { ...d,
        ...Uh(e, d)
    }), d.duration && (d.duration = rn(d.duration)), d.repeatDelay && (d.repeatDelay = rn(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if (d.type === !1 && (d.duration = 0, d.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
        const p = Yo(d.keyframes, l);
        if (p !== void 0) {
            we.update(() => {
                d.onUpdate(p), d.onComplete()
            });
            return
        }
    }
    return !o && qc.supports(d) ? new qc(d) : new K2(d)
};

function lo(e) {
    return !!(Pe(e) && e.add)
}

function Y2(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function X2(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class q2 {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Y2(this.subscriptions, t), () => X2(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const a = this.subscriptions[o];
                    a && a(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Jc = 30,
    qm = e => !isNaN(parseFloat(e));
class Jm {
    constructor(t, n = {}) {
        this.version = "11.0.25", this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            const o = sn.now();
            this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.canTrackVelocity = qm(this.current), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = sn.now()
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new q2);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), we.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = sn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Jc) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Jc);
        return P5(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function _i(e, t) {
    return new Jm(e, t)
}

function $m(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, _i(n))
}

function eC(e, t) {
    const n = Qo(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...o
    } = n || {};
    o = { ...o,
        ...r
    };
    for (const a in o) {
        const l = lh(o[a]);
        $m(e, a, l)
    }
}

function tC({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function Z5(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    var o;
    let {
        transition: a = e.getDefaultTransition(),
        transitionEnd: l,
        ...u
    } = t;
    const c = e.getValue("willChange");
    r && (a = r);
    const d = [],
        f = i && e.animationState && e.animationState.getState()[i];
    for (const p in u) {
        const y = e.getValue(p, (o = e.latestValues[p]) !== null && o !== void 0 ? o : null),
            v = u[p];
        if (v === void 0 || f && tC(f, p)) continue;
        const g = {
            delay: n,
            elapsed: 0,
            ...I2(a || {}, p)
        };
        let _ = !1;
        if (window.HandoffAppearAnimations) {
            const h = e.getProps()[Zf];
            if (h) {
                const m = window.HandoffAppearAnimations(h, p);
                m !== null && (g.elapsed = m, _ = !0)
            }
        }
        y.start(Q2(p, y, v, e.shouldReduceMotion && Nn.has(p) ? {
            type: !1
        } : g, e, _));
        const C = y.animation;
        C && (lo(c) && (c.add(p), C.then(() => c.remove(p))), d.push(C))
    }
    return l && Promise.all(d).then(() => {
        we.update(() => {
            l && eC(e, l)
        })
    }), d
}

function il(e, t, n = {}) {
    var r;
    const i = Qo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const a = i ? () => Promise.all(Z5(e, i, n)) : () => Promise.resolve(),
        l = e.variantChildren && e.variantChildren.size ? (c = 0) => {
            const {
                delayChildren: d = 0,
                staggerChildren: f,
                staggerDirection: p
            } = o;
            return nC(e, t, d + c, f, p, n)
        } : () => Promise.resolve(),
        {
            when: u
        } = o;
    if (u) {
        const [c, d] = u === "beforeChildren" ? [a, l] : [l, a];
        return c().then(() => d())
    } else return Promise.all([a(), l(n.delay)])
}

function nC(e, t, n = 0, r = 0, i = 1, o) {
    const a = [],
        l = (e.variantChildren.size - 1) * r,
        u = i === 1 ? (c = 0) => c * r : (c = 0) => l - c * r;
    return Array.from(e.variantChildren).sort(rC).forEach((c, d) => {
        c.notify("AnimationStart", t), a.push(il(c, t, { ...o,
            delay: n + u(d)
        }).then(() => c.notify("AnimationComplete", t)))
    }), Promise.all(a)
}

function rC(e, t) {
    return e.sortNodePosition(t)
}

function iC(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => il(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = il(e, t, n);
    else {
        const i = typeof t == "function" ? Qo(e, t, n.custom) : t;
        r = Promise.all(Z5(e, i, n))
    }
    return r.then(() => {
        we.postRender(() => {
            e.notify("AnimationComplete", t)
        })
    })
}
const sC = [...P2].reverse(),
    oC = P2.length;

function aC(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => iC(e, n, r)))
}

function lC(e) {
    let t = aC(e);
    const n = cC();
    let r = !0;
    const i = u => (c, d) => {
        var f;
        const p = Qo(e, d, u === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (p) {
            const {
                transition: y,
                transitionEnd: v,
                ...g
            } = p;
            c = { ...c,
                ...g,
                ...v
            }
        }
        return c
    };

    function o(u) {
        t = u(e)
    }

    function a(u) {
        const c = e.getProps(),
            d = e.getVariantContext(!0) || {},
            f = [],
            p = new Set;
        let y = {},
            v = 1 / 0;
        for (let _ = 0; _ < oC; _++) {
            const C = sC[_],
                h = n[C],
                m = c[C] !== void 0 ? c[C] : d[C],
                x = gi(m),
                j = C === u ? h.isActive : null;
            j === !1 && (v = _);
            let w = m === d[C] && m !== c[C] && x;
            if (w && r && e.manuallyAnimateOnMount && (w = !1), h.protectedKeys = { ...y
                }, !h.isActive && j === null || !m && !h.prevProp || Go(m) || typeof m == "boolean") continue;
            let T = uC(h.prevProp, m) || C === u && h.isActive && !w && x || _ > v && x,
                O = !1;
            const S = Array.isArray(m) ? m : [m];
            let b = S.reduce(i(C), {});
            j === !1 && (b = {});
            const {
                prevResolvedValues: L = {}
            } = h, R = { ...L,
                ...b
            }, D = Y => {
                T = !0, p.has(Y) && (O = !0, p.delete(Y)), h.needsAnimating[Y] = !0;
                const W = e.getValue(Y);
                W && (W.liveStyle = !1)
            };
            for (const Y in R) {
                const W = b[Y],
                    ve = L[Y];
                if (y.hasOwnProperty(Y)) continue;
                let E = !1;
                X1(W) && X1(ve) ? E = !f5(W, ve) : E = W !== ve, E ? W != null ? D(Y) : p.add(Y) : W !== void 0 && p.has(Y) ? D(Y) : h.protectedKeys[Y] = !0
            }
            h.prevProp = m, h.prevResolvedValues = b, h.isActive && (y = { ...y,
                ...b
            }), r && e.blockInitialAnimation && (T = !1), T && (!w || O) && f.push(...S.map(Y => ({
                animation: Y,
                options: {
                    type: C
                }
            })))
        }
        if (p.size) {
            const _ = {};
            p.forEach(C => {
                const h = e.getBaseTarget(C),
                    m = e.getValue(C);
                m && (m.liveStyle = !0), _[C] = h === void 0 ? null : h
            }), f.push({
                animation: _
            })
        }
        let g = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(f) : Promise.resolve()
    }

    function l(u, c) {
        var d;
        if (n[u].isActive === c) return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(p => {
            var y;
            return (y = p.animationState) === null || y === void 0 ? void 0 : y.setActive(u, c)
        }), n[u].isActive = c;
        const f = a(u);
        for (const p in n) n[p].protectedKeys = {};
        return f
    }
    return {
        animateChanges: a,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n
    }
}

function uC(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !f5(t, e) : !1
}

function yn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function cC() {
    return {
        animate: yn(!0),
        whileInView: yn(),
        whileHover: yn(),
        whileTap: yn(),
        whileDrag: yn(),
        whileFocus: yn(),
        exit: yn()
    }
}
class dC extends hn {
    constructor(t) {
        super(t), t.animationState || (t.animationState = lC(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        this.unmount(), Go(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let fC = 0;
class pC extends hn {
    constructor() {
        super(...arguments), this.id = fC++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const hC = {
        animation: {
            Feature: dC
        },
        exit: {
            Feature: pC
        }
    },
    $c = (e, t) => Math.abs(e - t);

function mC(e, t) {
    const n = $c(e.x, t.x),
        r = $c(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class G5 {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i,
        dragSnapToOrigin: o = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const f = Ia(this.lastMoveEventInfo, this.history),
                    p = this.startEvent !== null,
                    y = mC(f.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!p && !y) return;
                const {
                    point: v
                } = f, {
                    timestamp: g
                } = _e;
                this.history.push({ ...v,
                    timestamp: g
                });
                const {
                    onStart: _,
                    onMove: C
                } = this.handlers;
                p || (_ && _(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), C && C(this.lastMoveEvent, f)
            }, this.handlePointerMove = (f, p) => {
                this.lastMoveEvent = f, this.lastMoveEventInfo = Ba(p, this.transformPagePoint), we.update(this.updatePoint, !0)
            }, this.handlePointerUp = (f, p) => {
                this.end();
                const {
                    onEnd: y,
                    onSessionEnd: v,
                    resumeAnimation: g
                } = this.handlers;
                if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const _ = Ia(f.type === "pointercancel" ? this.lastMoveEventInfo : Ba(p, this.transformPagePoint), this.history);
                this.startEvent && y && y(f, _), v && v(f, _)
            }, !a5(t)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
        const a = Ko(t),
            l = Ba(a, this.transformPagePoint),
            {
                point: u
            } = l,
            {
                timestamp: c
            } = _e;
        this.history = [{ ...u,
            timestamp: c
        }];
        const {
            onSessionStart: d
        } = n;
        d && d(t, Ia(l, this.history)), this.removeListeners = Pt(At(this.contextWindow, "pointermove", this.handlePointerMove), At(this.contextWindow, "pointerup", this.handlePointerUp), At(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), un(this.updatePoint)
    }
}

function Ba(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function e0(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Ia({
    point: e
}, t) {
    return {
        point: e,
        delta: e0(e, W5(t)),
        offset: e0(e, CC(t)),
        velocity: yC(t, .1)
    }
}

function CC(e) {
    return e[0]
}

function W5(e) {
    return e[e.length - 1]
}

function yC(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = W5(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > rn(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const o = Et(i.timestamp - r.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const a = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}

function Ke(e) {
    return e.max - e.min
}

function sl(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function t0(e, t, n, r = .5) {
    e.origin = r, e.originPoint = oe(t.min, t.max, e.origin), e.scale = Ke(n) / Ke(t), (sl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = oe(n.min, n.max, e.origin) - e.originPoint, (sl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function $r(e, t, n, r) {
    t0(e.x, t.x, n.x, r ? r.originX : void 0), t0(e.y, t.y, n.y, r ? r.originY : void 0)
}

function n0(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Ke(t)
}

function gC(e, t, n) {
    n0(e.x, t.x, n.x), n0(e.y, t.y, n.y)
}

function r0(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Ke(t)
}

function ei(e, t, n) {
    r0(e.x, t.x, n.x), r0(e.y, t.y, n.y)
}

function vC(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? oe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? oe(n, e, r.max) : Math.min(e, n)), e
}

function i0(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function xC(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: i0(e.x, n, i),
        y: i0(e.y, t, r)
    }
}

function s0(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function _C(e, t) {
    return {
        x: s0(e.x, t.x),
        y: s0(e.y, t.y)
    }
}

function jC(e, t) {
    let n = .5;
    const r = Ke(e),
        i = Ke(t);
    return i > r ? n = xi(t.min, t.max - r, e.min) : r > i && (n = xi(e.min, e.max - i, t.min)), ln(0, 1, n)
}

function wC(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const ol = .35;

function SC(e = ol) {
    return e === !1 ? e = 0 : e === !0 && (e = ol), {
        x: o0(e, "left", "right"),
        y: o0(e, "top", "bottom")
    }
}

function o0(e, t, n) {
    return {
        min: a0(e, t),
        max: a0(e, n)
    }
}

function a0(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const l0 = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    er = () => ({
        x: l0(),
        y: l0()
    }),
    u0 = () => ({
        min: 0,
        max: 0
    }),
    fe = () => ({
        x: u0(),
        y: u0()
    });

function Je(e) {
    return [e("x"), e("y")]
}

function K5({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function TC({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function OC(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Fa(e) {
    return e === void 0 || e === 1
}

function al({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Fa(e) || !Fa(t) || !Fa(n)
}

function xn(e) {
    return al(e) || Q5(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Q5(e) {
    return c0(e.x) || c0(e.y)
}

function c0(e) {
    return e && e !== "0%"
}

function uo(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function d0(e, t, n, r, i) {
    return i !== void 0 && (e = uo(e, i, r)), uo(e, n, r) + t
}

function ll(e, t = 0, n = 1, r, i) {
    e.min = d0(e.min, t, n, r, i), e.max = d0(e.max, t, n, r, i)
}

function Y5(e, {
    x: t,
    y: n
}) {
    ll(e.x, t.translate, t.scale, t.originPoint), ll(e.y, n.translate, n.scale, n.originPoint)
}

function kC(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, a;
    for (let l = 0; l < i; l++) {
        o = n[l], a = o.projectionDelta;
        const u = o.instance;
        u && u.style && u.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && tr(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Y5(e, a)), r && xn(o.latestValues) && tr(e, o.latestValues))
    }
    t.x = f0(t.x), t.y = f0(t.y)
}

function f0(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function Ht(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function p0(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : .5,
        a = oe(e.min, e.max, o);
    ll(e, t[n], t[r], a, t.scale)
}
const AC = ["x", "scaleX", "originX"],
    PC = ["y", "scaleY", "originY"];

function tr(e, t) {
    p0(e.x, t, AC), p0(e.y, t, PC)
}

function X5(e, t) {
    return K5(OC(e.getBoundingClientRect(), t))
}

function EC(e, t, n) {
    const r = X5(e, n),
        {
            scroll: i
        } = t;
    return i && (Ht(r.x, i.offset.x), Ht(r.y, i.offset.y)), r
}
const q5 = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    MC = new WeakMap;
class bC {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = fe(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = d => {
                const {
                    dragSnapToOrigin: f
                } = this.getProps();
                f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ko(d, "page").point)
            },
            o = (d, f) => {
                const {
                    drag: p,
                    dragPropagation: y,
                    onDragStart: v
                } = this.getProps();
                if (p && !y && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = u5(p), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Je(_ => {
                    let C = this.getAxisMotionValue(_).get() || 0;
                    if (gt.test(C)) {
                        const {
                            projection: h
                        } = this.visualElement;
                        if (h && h.layout) {
                            const m = h.layout.layoutBox[_];
                            m && (C = Ke(m) * (parseFloat(C) / 100))
                        }
                    }
                    this.originPoint[_] = C
                }), v && v(d, f);
                const {
                    animationState: g
                } = this.visualElement;
                g && g.setActive("whileDrag", !0)
            },
            a = (d, f) => {
                const {
                    dragPropagation: p,
                    dragDirectionLock: y,
                    onDirectionLock: v,
                    onDrag: g
                } = this.getProps();
                if (!p && !this.openGlobalLock) return;
                const {
                    offset: _
                } = f;
                if (y && this.currentDirection === null) {
                    this.currentDirection = UC(_), this.currentDirection !== null && v && v(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, _), this.updateAxis("y", f.point, _), this.visualElement.render(), g && g(d, f)
            },
            l = (d, f) => this.stop(d, f),
            u = () => Je(d => {
                var f;
                return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play())
            }),
            {
                dragSnapToOrigin: c
            } = this.getProps();
        this.panSession = new G5(t, {
            onSessionStart: i,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            contextWindow: q5(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && o(t, n)
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !ps(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let a = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (a = vC(a, this.constraints[t], this.elastic[t])), o.set(a)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
        n && Jn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = xC(i.layoutBox, n) : this.constraints = !1, this.elastic = SC(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Je(a => {
            this.getAxisMotionValue(a) && (this.constraints[a] = wC(i.layoutBox[a], this.constraints[a]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Jn(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = EC(r, i.root, this.visualElement.getTransformPagePoint());
        let a = _C(i.layout.layoutBox, o);
        if (n) {
            const l = n(TC(a));
            this.hasMutatedConstraints = !!l, l && (a = K5(l))
        }
        return a
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: a,
            onDragTransitionEnd: l
        } = this.getProps(), u = this.constraints || {}, c = Je(d => {
            if (!ps(d, n, this.currentDirection)) return;
            let f = u && u[d] || {};
            a && (f = {
                min: 0,
                max: 0
            });
            const p = i ? 200 : 1e6,
                y = i ? 40 : 1e7,
                v = {
                    type: "inertia",
                    velocity: r ? t[d] : 0,
                    bounceStiffness: p,
                    bounceDamping: y,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...f
                };
            return this.startAxisValueAnimation(d, v)
        });
        return Promise.all(c).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Q2(t, r, 0, n, this.visualElement))
    }
    stopAnimation() {
        Je(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Je(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Je(n => {
            const {
                drag: r
            } = this.getProps();
            if (!ps(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: a,
                    max: l
                } = i.layout.layoutBox[n];
                o.set(t[n] - oe(a, l, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Jn(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Je(a => {
            const l = this.getAxisMotionValue(a);
            if (l) {
                const u = l.get();
                i[a] = jC({
                    min: u,
                    max: u
                }, this.constraints[a])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Je(a => {
            if (!ps(a, t, null)) return;
            const l = this.getAxisMotionValue(a),
                {
                    min: u,
                    max: c
                } = this.constraints[a];
            l.set(oe(u, c, i[a]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        MC.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = At(t, "pointerdown", u => {
                const {
                    drag: c,
                    dragListener: d = !0
                } = this.getProps();
                c && d && this.start(u)
            }),
            r = () => {
                const {
                    dragConstraints: u
                } = this.getProps();
                Jn(u) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
        const a = Ot(window, "resize", () => this.scalePositionWithinConstraints()),
            l = i.addEventListener("didUpdate", ({
                delta: u,
                hasLayoutChanged: c
            }) => {
                this.isDragging && c && (Je(d => {
                    const f = this.getAxisMotionValue(d);
                    f && (this.originPoint[d] += u[d].translate, f.set(f.get() + u[d].translate))
                }), this.visualElement.render())
            });
        return () => {
            a(), n(), o(), l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: a = ol,
                dragMomentum: l = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: a,
            dragMomentum: l
        }
    }
}

function ps(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function UC(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class LC extends hn {
    constructor(t) {
        super(t), this.removeGroupControls = Ee, this.removeListeners = Ee, this.controls = new bC(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ee
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const h0 = e => (t, n) => {
    e && e(t, n)
};
class RC extends hn {
    constructor() {
        super(...arguments), this.removePointerDownListener = Ee
    }
    onPointerDown(t) {
        this.session = new G5(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: q5(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: h0(t),
            onStart: h0(n),
            onMove: r,
            onEnd: (o, a) => {
                delete this.session, i && i(o, a)
            }
        }
    }
    mount() {
        this.removePointerDownListener = At(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function DC() {
    const e = U.useContext(T2);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = U.useId();
    return U.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]
}
const Es = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function m0(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Dr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (B.test(e)) e = parseFloat(e);
                else return e;
            const n = m0(e, t.target.x),
                r = m0(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    NC = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = cn.parse(e);
            if (i.length > 5) return r;
            const o = cn.createTransformer(e),
                a = typeof i[0] != "number" ? 1 : 0,
                l = n.x.scale * t.x,
                u = n.y.scale * t.y;
            i[0 + a] /= l, i[1 + a] /= u;
            const c = oe(l, u, .5);
            return typeof i[2 + a] == "number" && (i[2 + a] /= c), typeof i[3 + a] == "number" && (i[3 + a] /= c), o(i)
        }
    };
class VC extends Tl.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: o
        } = t;
        N9(BC), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({ ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), Es.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: o
        } = this.props, a = r.projection;
        return a && (a.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? a.promote() : a.relegate() || we.postRender(() => {
            const l = a.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), A2.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function J5(e) {
    const [t, n] = DC(), r = U.useContext(Kf);
    return Tl.createElement(VC, { ...e,
        layoutGroup: r,
        switchLayoutGroup: U.useContext(Qf),
        isPresent: t,
        safeToRemove: n
    })
}
const BC = {
        borderRadius: { ...Dr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Dr,
        borderTopRightRadius: Dr,
        borderBottomLeftRadius: Dr,
        borderBottomRightRadius: Dr,
        boxShadow: NC
    },
    $5 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    IC = $5.length,
    C0 = e => typeof e == "string" ? parseFloat(e) : e,
    y0 = e => typeof e == "number" || B.test(e);

function FC(e, t, n, r, i, o) {
    i ? (e.opacity = oe(0, n.opacity !== void 0 ? n.opacity : 1, HC(r)), e.opacityExit = oe(t.opacity !== void 0 ? t.opacity : 1, 0, zC(r))) : o && (e.opacity = oe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let a = 0; a < IC; a++) {
        const l = `border${$5[a]}Radius`;
        let u = g0(t, l),
            c = g0(n, l);
        if (u === void 0 && c === void 0) continue;
        u || (u = 0), c || (c = 0), u === 0 || c === 0 || y0(u) === y0(c) ? (e[l] = Math.max(oe(C0(u), C0(c), r), 0), (gt.test(c) || gt.test(u)) && (e[l] += "%")) : e[l] = c
    }(t.rotate || n.rotate) && (e.rotate = oe(t.rotate || 0, n.rotate || 0, r))
}

function g0(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const HC = ep(0, .5, D5),
    zC = ep(.5, .95, Ee);

function ep(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(xi(e, t, r))
}

function v0(e, t) {
    e.min = t.min, e.max = t.max
}

function qe(e, t) {
    v0(e.x, t.x), v0(e.y, t.y)
}

function x0(e, t, n, r, i) {
    return e -= t, e = uo(e, 1 / n, r), i !== void 0 && (e = uo(e, 1 / i, r)), e
}

function ZC(e, t = 0, n = 1, r = .5, i, o = e, a = e) {
    if (gt.test(t) && (t = parseFloat(t), t = oe(a.min, a.max, t / 100) - a.min), typeof t != "number") return;
    let l = oe(o.min, o.max, r);
    e === o && (l -= t), e.min = x0(e.min, t, n, l, i), e.max = x0(e.max, t, n, l, i)
}

function _0(e, t, [n, r, i], o, a) {
    ZC(e, t[n], t[r], t[i], t.scale, o, a)
}
const GC = ["x", "scaleX", "originX"],
    WC = ["y", "scaleY", "originY"];

function j0(e, t, n, r) {
    _0(e.x, t, GC, n ? n.x : void 0, r ? r.x : void 0), _0(e.y, t, WC, n ? n.y : void 0, r ? r.y : void 0)
}

function w0(e) {
    return e.translate === 0 && e.scale === 1
}

function tp(e) {
    return w0(e.x) && w0(e.y)
}

function KC(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function np(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}

function S0(e) {
    return Ke(e.x) / Ke(e.y)
}
class QC {
    constructor() {
        this.members = []
    }
    add(t) {
        Y2(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (X2(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function T0(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        o = e.y.translate / t.y,
        a = (n == null ? void 0 : n.z) || 0;
    if ((i || o || a) && (r = `translate3d(${i}px, ${o}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            rotate: c,
            rotateX: d,
            rotateY: f,
            skewX: p,
            skewY: y
        } = n;
        c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), p && (r += `skewX(${p}deg) `), y && (r += `skewY(${y}deg) `)
    }
    const l = e.x.scale * t.x,
        u = e.y.scale * t.y;
    return (l !== 1 || u !== 1) && (r += `scale(${l}, ${u})`), r || "none"
}
const YC = (e, t) => e.depth - t.depth;
class XC {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        Y2(this.children, t), this.isDirty = !0
    }
    remove(t) {
        X2(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(YC), this.isDirty = !1, this.children.forEach(t)
    }
}

function qC(e, t) {
    const n = sn.now(),
        r = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= t && (un(r), e(o - t))
        };
    return we.read(r, !0), () => un(r)
}

function JC(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}

function $C(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function ey(e, t, n) {
    const r = Pe(e) ? e : _i(e);
    return r.start(Q2("", r, t, n)), r.animation
}
const Ha = ["", "X", "Y", "Z"],
    ty = {
        visibility: "hidden"
    },
    O0 = 1e3;
let ny = 0;
const _n = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function za(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function rp({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(a = {}, l = t == null ? void 0 : t()) {
            this.id = ny++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, _n.totalNodes = _n.resolvedTargetDeltas = _n.recalculatedProjection = 0, this.nodes.forEach(sy), this.nodes.forEach(cy), this.nodes.forEach(dy), this.nodes.forEach(oy), JC(_n)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = a, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
            for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new XC)
        }
        addEventListener(a, l) {
            return this.eventHandlers.has(a) || this.eventHandlers.set(a, new q2), this.eventHandlers.get(a).add(l)
        }
        notifyListeners(a, ...l) {
            const u = this.eventHandlers.get(a);
            u && u.notify(...l)
        }
        hasListeners(a) {
            return this.eventHandlers.has(a)
        }
        mount(a, l = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = $C(a), this.instance = a;
            const {
                layoutId: u,
                layout: c,
                visualElement: d
            } = this.options;
            if (d && !d.current && d.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (c || u) && (this.isLayoutDirty = !0), e) {
                let f;
                const p = () => this.root.updateBlockedByResize = !1;
                e(a, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = qC(p, 250), Es.hasAnimatedSinceResize && (Es.hasAnimatedSinceResize = !1, this.nodes.forEach(A0))
                })
            }
            u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && d && (u || c) && this.addEventListener("didUpdate", ({
                delta: f,
                hasLayoutChanged: p,
                hasRelativeTargetChanged: y,
                layout: v
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const g = this.options.transition || d.getDefaultTransition() || Cy,
                    {
                        onLayoutAnimationStart: _,
                        onLayoutAnimationComplete: C
                    } = d.getProps(),
                    h = !this.targetLayout || !np(this.targetLayout, v) || y,
                    m = !p && y;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || p && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
                    const x = { ...I2(g, "layout"),
                        onPlay: _,
                        onComplete: C
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x)
                } else p || A0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const a = this.getStack();
            a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, un(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(fy), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: a
            } = this.options;
            return a && a.getProps().transformTemplate
        }
        willUpdate(a = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: l,
                layout: u
            } = this.options;
            if (l === void 0 && !u) return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(k0);
                return
            }
            this.isUpdating || this.nodes.forEach(ly), this.isUpdating = !1, window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(), this.nodes.forEach(uy), this.nodes.forEach(ry), this.nodes.forEach(iy), this.clearAllSnapshots();
            const l = sn.now();
            _e.delta = ln(0, 1e3 / 60, l - _e.timestamp), _e.timestamp = l, _e.isProcessing = !0, ba.update.process(_e), ba.preRender.process(_e), ba.render.process(_e), _e.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, A2.read(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(ay), this.sharedNodes.forEach(py)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, we.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            we.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
            const a = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = fe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: l
            } = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0)
        }
        updateScroll(a = "measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (l = !1), l && (this.scroll = {
                animationId: this.root.animationId,
                phase: a,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i) return;
            const a = this.isLayoutDirty || this.shouldResetTransform,
                l = this.projectionDelta && !tp(this.projectionDelta),
                u = this.getTransformTemplate(),
                c = u ? u(this.latestValues, "") : void 0,
                d = c !== this.prevTransformTemplateValue;
            a && (l || xn(this.latestValues) || d) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(a = !0) {
            const l = this.measurePageBox();
            let u = this.removeElementScroll(l);
            return a && (u = this.removeTransform(u)), yy(u), {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: u,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: a
            } = this.options;
            if (!a) return fe();
            const l = a.measureViewportBox(),
                {
                    scroll: u
                } = this.root;
            return u && (Ht(l.x, u.offset.x), Ht(l.y, u.offset.y)), l
        }
        removeElementScroll(a) {
            const l = fe();
            qe(l, a);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: d,
                        options: f
                    } = c;
                if (c !== this.root && d && f.layoutScroll) {
                    if (d.isRoot) {
                        qe(l, a);
                        const {
                            scroll: p
                        } = this.root;
                        p && (Ht(l.x, -p.offset.x), Ht(l.y, -p.offset.y))
                    }
                    Ht(l.x, d.offset.x), Ht(l.y, d.offset.y)
                }
            }
            return l
        }
        applyTransform(a, l = !1) {
            const u = fe();
            qe(u, a);
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                !l && d.options.layoutScroll && d.scroll && d !== d.root && tr(u, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }), xn(d.latestValues) && tr(u, d.latestValues)
            }
            return xn(this.latestValues) && tr(u, this.latestValues), u
        }
        removeTransform(a) {
            const l = fe();
            qe(l, a);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!c.instance || !xn(c.latestValues)) continue;
                al(c.latestValues) && c.updateSnapshot();
                const d = fe(),
                    f = c.measurePageBox();
                qe(d, f), j0(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d)
            }
            return xn(this.latestValues) && j0(l, this.latestValues), l
        }
        setTargetDelta(a) {
            this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(a) {
            this.options = { ...this.options,
                ...a,
                crossfade: a.crossfade !== void 0 ? a.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _e.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(a = !1) {
            var l;
            const u = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== u;
            if (!(a || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: f,
                layoutId: p
            } = this.options;
            if (!(!this.layout || !(f || p))) {
                if (this.resolvedRelativeTargetAt = _e.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = fe(), this.relativeTargetOrigin = fe(), ei(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), qe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = fe(), this.targetWithTransforms = fe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), gC(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : qe(this.target, this.layout.layoutBox), Y5(this.target, this.targetDelta)) : qe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const y = this.getClosestProjectingParent();
                        y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = fe(), this.relativeTargetOrigin = fe(), ei(this.relativeTargetOrigin, this.target, y.target), qe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    _n.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || al(this.parent.latestValues) || Q5(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var a;
            const l = this.getLead(),
                u = !!this.resumingFrom || this !== l;
            let c = !0;
            if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (c = !1), u && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === _e.timestamp && (c = !1), c) return;
            const {
                layout: d,
                layoutId: f
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || f)) return;
            qe(this.layoutCorrected, this.layout.layoutBox);
            const p = this.treeScale.x,
                y = this.treeScale.y;
            kC(this.layoutCorrected, this.treeScale, this.path, u), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = fe());
            const {
                target: v
            } = l;
            if (!v) {
                this.projectionTransform && (this.projectionDelta = er(), this.projectionTransform = "none", this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = er(), this.projectionDeltaWithTransform = er());
            const g = this.projectionTransform;
            $r(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = T0(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== p || this.treeScale.y !== y) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), _n.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(a = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), a) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(a, l = !1) {
            const u = this.snapshot,
                c = u ? u.latestValues : {},
                d = { ...this.latestValues
                },
                f = er();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
            const p = fe(),
                y = u ? u.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                g = y !== v,
                _ = this.getStack(),
                C = !_ || _.members.length <= 1,
                h = !!(g && !C && this.options.crossfade === !0 && !this.path.some(my));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = x => {
                const j = x / 1e3;
                P0(f.x, a.x, j), P0(f.y, a.y, j), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ei(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), hy(this.relativeTarget, this.relativeTargetOrigin, p, j), m && KC(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = fe()), qe(m, this.relativeTarget)), g && (this.animationValues = d, FC(d, c, this.latestValues, j, h, C)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(a) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (un(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = we.update(() => {
                Es.hasAnimatedSinceResize = !0, this.currentAnimation = ey(0, O0, { ...a,
                    onUpdate: l => {
                        this.mixTargetDelta(l), a.onUpdate && a.onUpdate(l)
                    },
                    onComplete: () => {
                        a.onComplete && a.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const a = this.getStack();
            a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(O0), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const a = this.getLead();
            let {
                targetWithTransforms: l,
                target: u,
                layout: c,
                latestValues: d
            } = a;
            if (!(!l || !u || !c)) {
                if (this !== a && this.layout && c && ip(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    u = this.target || fe();
                    const f = Ke(this.layout.layoutBox.x);
                    u.x.min = a.target.x.min, u.x.max = u.x.min + f;
                    const p = Ke(this.layout.layoutBox.y);
                    u.y.min = a.target.y.min, u.y.max = u.y.min + p
                }
                qe(l, u), tr(l, d), $r(this.projectionDeltaWithTransform, this.layoutCorrected, l, d)
            }
        }
        registerSharedNode(a, l) {
            this.sharedNodes.has(a) || this.sharedNodes.set(a, new QC), this.sharedNodes.get(a).add(l);
            const c = l.options.initialPromotionConfig;
            l.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const a = this.getStack();
            return a ? a.lead === this : !0
        }
        getLead() {
            var a;
            const {
                layoutId: l
            } = this.options;
            return l ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {
                layoutId: l
            } = this.options;
            return l ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: a
            } = this.options;
            if (a) return this.root.sharedNodes.get(a)
        }
        promote({
            needsReset: a,
            transition: l,
            preserveFollowOpacity: u
        } = {}) {
            const c = this.getStack();
            c && c.promote(this, u), a && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const a = this.getStack();
            return a ? a.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: a
            } = this.options;
            if (!a) return;
            let l = !1;
            const {
                latestValues: u
            } = a;
            if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (l = !0), !l) return;
            const c = {};
            u.z && za("z", a, c, this.animationValues);
            for (let d = 0; d < Ha.length; d++) za(`rotate${Ha[d]}`, a, c, this.animationValues), za(`skew${Ha[d]}`, a, c, this.animationValues);
            a.render();
            for (const d in c) a.setStaticValue(d, c[d]), this.animationValues && (this.animationValues[d] = c[d]);
            a.scheduleRender()
        }
        getProjectionStyles(a) {
            var l, u;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ty;
            const c = {
                    visibility: ""
                },
                d = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, c.opacity = "", c.pointerEvents = As(a == null ? void 0 : a.pointerEvents) || "", c.transform = d ? d(this.latestValues, "") : "none", c;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const g = {};
                return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = As(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !xn(this.latestValues) && (g.transform = d ? d({}, "") : "none", this.hasProjected = !1), g
            }
            const p = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), c.transform = T0(this.projectionDeltaWithTransform, this.treeScale, p), d && (c.transform = d(p, c.transform));
            const {
                x: y,
                y: v
            } = this.projectionDelta;
            c.transformOrigin = `${y.origin*100}% ${v.origin*100}% 0`, f.animationValues ? c.opacity = f === this ? (u = (l = p.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : c.opacity = f === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
            for (const g in ro) {
                if (p[g] === void 0) continue;
                const {
                    correct: _,
                    applyTo: C
                } = ro[g], h = c.transform === "none" ? p[g] : _(p[g], f);
                if (C) {
                    const m = C.length;
                    for (let x = 0; x < m; x++) c[C[x]] = h
                } else c[g] = h
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? As(a == null ? void 0 : a.pointerEvents) || "" : "none"), c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(a => {
                var l;
                return (l = a.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }), this.root.nodes.forEach(k0), this.root.sharedNodes.clear()
        }
    }
}

function ry(e) {
    e.updateLayout()
}

function iy(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: o
        } = e.options, a = n.source !== e.layout.source;
        o === "size" ? Je(f => {
            const p = a ? n.measuredBox[f] : n.layoutBox[f],
                y = Ke(p);
            p.min = r[f].min, p.max = p.min + y
        }) : ip(o, n.layoutBox, r) && Je(f => {
            const p = a ? n.measuredBox[f] : n.layoutBox[f],
                y = Ke(r[f]);
            p.max = p.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y)
        });
        const l = er();
        $r(l, r, n.layoutBox);
        const u = er();
        a ? $r(u, e.applyTransform(i, !0), n.measuredBox) : $r(u, r, n.layoutBox);
        const c = !tp(l);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: p,
                    layout: y
                } = f;
                if (p && y) {
                    const v = fe();
                    ei(v, n.layoutBox, p.layoutBox);
                    const g = fe();
                    ei(g, r, y.layoutBox), np(v, g) || (d = !0), f.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = v, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: u,
            layoutDelta: l,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function sy(e) {
    _n.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function oy(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function ay(e) {
    e.clearSnapshot()
}

function k0(e) {
    e.clearMeasurements()
}

function ly(e) {
    e.isLayoutDirty = !1
}

function uy(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function A0(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function cy(e) {
    e.resolveTargetDelta()
}

function dy(e) {
    e.calcProjection()
}

function fy(e) {
    e.resetSkewAndRotation()
}

function py(e) {
    e.removeLeadSnapshot()
}

function P0(e, t, n) {
    e.translate = oe(t.translate, 0, n), e.scale = oe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function E0(e, t, n, r) {
    e.min = oe(t.min, n.min, r), e.max = oe(t.max, n.max, r)
}

function hy(e, t, n, r) {
    E0(e.x, t.x, n.x, r), E0(e.y, t.y, n.y, r)
}

function my(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Cy = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    M0 = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    b0 = M0("applewebkit/") && !M0("chrome/") ? Math.round : Ee;

function U0(e) {
    e.min = b0(e.min), e.max = b0(e.max)
}

function yy(e) {
    U0(e.x), U0(e.y)
}

function ip(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !sl(S0(t), S0(n), .2)
}
const gy = rp({
        attachResizeListener: (e, t) => Ot(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Za = {
        current: void 0
    },
    sp = rp({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Za.current) {
                const e = new gy({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Za.current = e
            }
            return Za.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    vy = {
        pan: {
            Feature: RC
        },
        drag: {
            Feature: LC,
            ProjectionNode: sp,
            MeasureLayout: J5
        }
    },
    ul = {
        current: null
    },
    op = {
        current: !1
    };

function xy() {
    if (op.current = !0, !!O2)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => ul.current = e.matches;
            e.addListener(t), t()
        } else ul.current = !1
}

function _y(e, t, n) {
    const {
        willChange: r
    } = t;
    for (const i in t) {
        const o = t[i],
            a = n[i];
        if (Pe(o)) e.addValue(i, o), lo(r) && r.add(i);
        else if (Pe(a)) e.addValue(i, _i(o, {
            owner: e
        })), lo(r) && r.remove(i);
        else if (a !== o)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                l.liveStyle === !0 ? l.jump(o) : l.hasAnimated || l.set(o)
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, _i(l !== void 0 ? l : o, {
                    owner: e
                }))
            }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t
}
const L0 = new WeakMap,
    jy = [...g5, ke, cn],
    wy = e => jy.find(y5(e)),
    ap = Object.keys(vi),
    Sy = ap.length,
    R0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    Ty = E2.length;

function lp(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : lp(e.parent)
}
class Oy {
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: o,
        visualState: a
    }, l = {}) {
        this.resolveKeyframes = (p, y, v, g) => new this.KeyframeResolver(p, y, v, g, this), this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = F2, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => we.render(this.render, !1, !0);
        const {
            latestValues: u,
            renderState: c
        } = a;
        this.latestValues = u, this.baseTarget = { ...u
        }, this.initialValues = n.initial ? { ...u
        } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = Wo(n), this.isVariantNode = Wf(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: d,
            ...f
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const p in f) {
            const y = f[p];
            u[p] !== void 0 && Pe(y) && (y.set(u[p], !1), lo(d) && d.add(p))
        }
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    mount(t) {
        this.current = t, L0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), op.current || xy(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ul.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        L0.delete(this.current), this.projection && this.projection.unmount(), un(this.notifyUpdate), un(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = Nn.has(t),
            i = n.on("change", a => {
                this.latestValues[t] = a, this.props.onUpdate && we.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(), o(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({
        children: t,
        ...n
    }, r, i, o) {
        let a, l;
        for (let u = 0; u < Sy; u++) {
            const c = ap[u],
                {
                    isEnabled: d,
                    Feature: f,
                    ProjectionNode: p,
                    MeasureLayout: y
                } = vi[c];
            p && (a = p), d(n) && (!this.features[c] && f && (this.features[c] = new f(this)), y && (l = y))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && a) {
            this.projection = new a(this.latestValues, lp(this.parent));
            const {
                layoutId: u,
                layout: c,
                drag: d,
                dragConstraints: f,
                layoutScroll: p,
                layoutRoot: y
            } = n;
            this.projection.setOptions({
                layoutId: u,
                layout: c,
                alwaysMeasureLayout: !!d || f && Jn(f),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof c == "string" ? c : "both",
                initialPromotionConfig: o,
                layoutScroll: p,
                layoutRoot: y
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : fe()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < R0.length; r++) {
            const i = R0[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = t["on" + i];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = _y(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial), r
        }
        const n = {};
        for (let r = 0; r < Ty; r++) {
            const i = E2[r],
                o = this.props[i];
            (gi(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = _i(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (m5(i) || p5(i)) ? i = parseFloat(i) : !wy(i) && cn.test(n) && (i = O5(t, n)), this.setBaseTarget(t, Pe(i) ? i.get() : i)), Pe(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n, r;
        const {
            initial: i
        } = this.props, o = typeof i == "string" || typeof i == "object" ? (r = B2(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom)) === null || r === void 0 ? void 0 : r[t] : void 0;
        if (i && o !== void 0) return o;
        const a = this.getBaseTargetFromProps(this.props, t);
        return a !== void 0 && !Pe(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new q2), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class up extends Oy {
    constructor() {
        super(...arguments), this.KeyframeResolver = k5
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
}

function ky(e) {
    return window.getComputedStyle(e)
}
class Ay extends up {
    constructor() {
        super(...arguments), this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (Nn.has(n)) {
            const r = z2(n);
            return r && r.default || 0
        } else {
            const r = ky(t),
                i = (qf(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return X5(t, n)
    }
    build(t, n, r, i) {
        L2(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return V2(t, n, r)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Pe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(t, n, r, i) {
        n5(t, n, r, i)
    }
}
class Py extends up {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Nn.has(n)) {
            const r = z2(n);
            return r && r.default || 0
        }
        return n = r5.has(n) ? n : k2(n), t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return fe()
    }
    scrapeMotionValuesFromProps(t, n) {
        return s5(t, n, this)
    }
    build(t, n, r, i) {
        D2(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        i5(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = N2(t.tagName), super.mount(t)
    }
}
const Ey = (e, t) => M2(e) ? new Py(t, {
        enableHardwareAcceleration: !1
    }) : new Ay(t, {
        allowProjection: e !== U.Fragment,
        enableHardwareAcceleration: !0
    }),
    My = {
        layout: {
            ProjectionNode: sp,
            MeasureLayout: J5
        }
    },
    by = { ...hC,
        ...Oh,
        ...vy,
        ...My
    },
    I = R9((e, t) => ph(e, t, by, Ey)),
    Uy = ({
        classLine: e
    }) => {
        const t = {
            hidden: {
                pathLength: 0
            },
            visible: {
                pathLength: 1,
                transition: {
                    duration: 8,
                    repeat: 0
                }
            }
        };
        return s.jsxs("svg", {
            className: e,
            viewBox: "0 0 549 832",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [s.jsx(I.path, {
                d: "M121.189 0V96.9362C121.189 104.257 127.127 110.192 134.452 110.192H228.116C235.441 110.192 241.379 116.127 241.379 123.449V217.071C241.379 224.392 247.316 230.327 254.641 230.327H348.306C355.63 230.327 361.568 236.262 361.568 243.583V337.205C361.568 344.527 367.506 350.462 374.83 350.462H468.495C475.82 350.462 481.757 356.397 481.757 363.718V457.34C481.757 464.661 487.695 470.596 495.02 470.596H592M1 0V96.9362C1 104.257 6.93772 110.192 14.2623 110.192H107.927C115.252 110.192 121.189 116.127 121.189 123.449V217.071C121.189 224.392 127.127 230.327 134.452 230.327H228.116C235.441 230.327 241.379 236.262 241.379 243.583V337.205C241.379 344.527 235.441 350.462 228.116 350.462H134.452C127.127 350.462 121.189 344.527 121.189 337.205V241.926L121.073 241.143C120.183 235.139 115.085 230.656 109.013 230.539L97.9804 230.327H14.2623C6.93772 230.327 1 236.262 1 243.583V337.205C1 344.527 6.93772 350.462 14.2623 350.462H108.756L111.904 350.671C117.129 351.02 121.189 355.357 121.189 360.592V370.76M121.189 360.404V457.34C121.189 464.661 127.127 470.596 134.452 470.596H228.116C235.441 470.596 241.379 476.531 241.379 483.852V577.475C241.379 584.796 247.316 590.731 254.641 590.731H348.306C355.63 590.731 361.568 596.666 361.568 603.987V697.609C361.568 704.93 367.506 710.865 374.83 710.865H468.495C475.82 710.865 481.757 716.8 481.757 724.122V817.744C481.757 825.065 487.695 831 495.02 831H592",
                stroke: "url(#paint0_linear_112_2359)",
                "stroke-opacity": "0.8",
                "stroke-width": "0.431035",
                variants: t,
                initial: "hidden",
                animate: "visible"
            }), s.jsx("defs", {
                children: s.jsxs("linearGradient", {
                    id: "paint0_linear_112_2359",
                    x1: "1",
                    y1: "0",
                    x2: "578.419",
                    y2: "714.851",
                    gradientUnits: "userSpaceOnUse",
                    children: [s.jsx("stop", {
                        offset: "0.0819437",
                        "stop-color": "#F7F7F7"
                    }), s.jsx("stop", {
                        offset: "0.208333",
                        "stop-color": "#00C16A"
                    }), s.jsx("stop", {
                        offset: "0.526042",
                        "stop-color": "#00C16A"
                    }), s.jsx("stop", {
                        offset: "0.9375",
                        "stop-color": "#00C16A"
                    })]
                })
            })]
        })
    },
    Ly = ({
        classDot: e
    }) => s.jsxs("svg", {
        className: e,
        viewBox: "0 0 1440 1232",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [s.jsxs("g", {
            "clip-path": "url(#clip0_112_2360)",
            children: [s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 36.3795C2.87789 36.3795 5.21072 34.045 5.21072 31.1653C5.21072 28.2856 2.87789 25.9512 0.000198364 25.9512C-2.8775 25.9512 -5.21033 28.2856 -5.21033 31.1653C-5.21033 34.045 -2.8775 36.3795 0.000198364 36.3795Z",
                fill: "url(#paint0_radial_112_2360)"
            }), s.jsx("path", {
                d: "M79.9998 36.3795C82.8775 36.3795 85.2104 34.045 85.2104 31.1653C85.2104 28.2856 82.8775 25.9512 79.9998 25.9512C77.1221 25.9512 74.7893 28.2856 74.7893 31.1653C74.7893 34.045 77.1221 36.3795 79.9998 36.3795Z",
                fill: "url(#paint1_radial_112_2360)"
            }), s.jsx("path", {
                d: "M160 36.3795C162.878 36.3795 165.21 34.045 165.21 31.1653C165.21 28.2856 162.878 25.9512 160 25.9512C157.122 25.9512 154.789 28.2856 154.789 31.1653C154.789 34.045 157.122 36.3795 160 36.3795Z",
                fill: "url(#paint2_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 36.3795C242.878 36.3795 245.211 34.045 245.211 31.1653C245.211 28.2856 242.878 25.9512 240 25.9512C237.122 25.9512 234.79 28.2856 234.79 31.1653C234.79 34.045 237.122 36.3795 240 36.3795Z",
                fill: "url(#paint3_radial_112_2360)"
            }), s.jsx("path", {
                d: "M320 36.3795C322.878 36.3795 325.211 34.045 325.211 31.1653C325.211 28.2856 322.878 25.9512 320 25.9512C317.123 25.9512 314.79 28.2856 314.79 31.1653C314.79 34.045 317.123 36.3795 320 36.3795Z",
                fill: "url(#paint4_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 36.3795C402.878 36.3795 405.211 34.045 405.211 31.1653C405.211 28.2856 402.878 25.9512 400 25.9512C397.123 25.9512 394.79 28.2856 394.79 31.1653C394.79 34.045 397.123 36.3795 400 36.3795Z",
                fill: "url(#paint5_radial_112_2360)"
            }), s.jsx("path", {
                d: "M480.001 36.3795C482.878 36.3795 485.211 34.045 485.211 31.1653C485.211 28.2856 482.878 25.9512 480.001 25.9512C477.123 25.9512 474.79 28.2856 474.79 31.1653C474.79 34.045 477.123 36.3795 480.001 36.3795Z",
                fill: "url(#paint6_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M560 36.3795C562.878 36.3795 565.211 34.045 565.211 31.1653C565.211 28.2856 562.878 25.9512 560 25.9512C557.123 25.9512 554.79 28.2856 554.79 31.1653C554.79 34.045 557.123 36.3795 560 36.3795Z",
                fill: "url(#paint7_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 36.3795C642.878 36.3795 645.211 34.045 645.211 31.1653C645.211 28.2856 642.878 25.9512 640 25.9512C637.123 25.9512 634.79 28.2856 634.79 31.1653C634.79 34.045 637.123 36.3795 640 36.3795Z",
                fill: "url(#paint8_radial_112_2360)"
            }), s.jsx("path", {
                d: "M720 36.3795C722.878 36.3795 725.211 34.045 725.211 31.1653C725.211 28.2856 722.878 25.9512 720 25.9512C717.122 25.9512 714.79 28.2856 714.79 31.1653C714.79 34.045 717.122 36.3795 720 36.3795Z",
                fill: "url(#paint9_radial_112_2360)"
            }), s.jsx("path", {
                d: "M800 36.3795C802.878 36.3795 805.211 34.045 805.211 31.1653C805.211 28.2856 802.878 25.9512 800 25.9512C797.123 25.9512 794.79 28.2856 794.79 31.1653C794.79 34.045 797.123 36.3795 800 36.3795Z",
                fill: "url(#paint10_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 36.3795C882.878 36.3795 885.211 34.045 885.211 31.1653C885.211 28.2856 882.878 25.9512 880 25.9512C877.122 25.9512 874.79 28.2856 874.79 31.1653C874.79 34.045 877.122 36.3795 880 36.3795Z",
                fill: "url(#paint11_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 36.3795C962.877 36.3795 965.21 34.045 965.21 31.1653C965.21 28.2856 962.877 25.9512 960 25.9512C957.122 25.9512 954.789 28.2856 954.789 31.1653C954.789 34.045 957.122 36.3795 960 36.3795Z",
                fill: "url(#paint12_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 36.3795C1042.88 36.3795 1045.21 34.045 1045.21 31.1653C1045.21 28.2856 1042.88 25.9512 1040 25.9512C1037.12 25.9512 1034.79 28.2856 1034.79 31.1653C1034.79 34.045 1037.12 36.3795 1040 36.3795Z",
                fill: "url(#paint13_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 36.3795C1122.88 36.3795 1125.21 34.045 1125.21 31.1653C1125.21 28.2856 1122.88 25.9512 1120 25.9512C1117.12 25.9512 1114.79 28.2856 1114.79 31.1653C1114.79 34.045 1117.12 36.3795 1120 36.3795Z",
                fill: "url(#paint14_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 36.3795C1202.88 36.3795 1205.21 34.045 1205.21 31.1653C1205.21 28.2856 1202.88 25.9512 1200 25.9512C1197.12 25.9512 1194.79 28.2856 1194.79 31.1653C1194.79 34.045 1197.12 36.3795 1200 36.3795Z",
                fill: "url(#paint15_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 36.3795C1282.88 36.3795 1285.21 34.045 1285.21 31.1653C1285.21 28.2856 1282.88 25.9512 1280 25.9512C1277.12 25.9512 1274.79 28.2856 1274.79 31.1653C1274.79 34.045 1277.12 36.3795 1280 36.3795Z",
                fill: "url(#paint16_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1360 36.3795C1362.88 36.3795 1365.21 34.045 1365.21 31.1653C1365.21 28.2856 1362.88 25.9512 1360 25.9512C1357.12 25.9512 1354.79 28.2856 1354.79 31.1653C1354.79 34.045 1357.12 36.3795 1360 36.3795Z",
                fill: "url(#paint17_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 36.3795C1442.88 36.3795 1445.21 34.045 1445.21 31.1653C1445.21 28.2856 1442.88 25.9512 1440 25.9512C1437.12 25.9512 1434.79 28.2856 1434.79 31.1653C1434.79 34.045 1437.12 36.3795 1440 36.3795Z",
                fill: "url(#paint18_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 116.435C2.87789 116.435 5.21072 114.101 5.21072 111.221C5.21072 108.341 2.87789 106.007 0.000198364 106.007C-2.8775 106.007 -5.21033 108.341 -5.21033 111.221C-5.21033 114.101 -2.8775 116.435 0.000198364 116.435Z",
                fill: "url(#paint19_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M79.9998 116.435C82.8775 116.435 85.2104 114.101 85.2104 111.221C85.2104 108.341 82.8775 106.007 79.9998 106.007C77.1221 106.007 74.7893 108.341 74.7893 111.221C74.7893 114.101 77.1221 116.435 79.9998 116.435Z",
                fill: "url(#paint20_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 116.435C162.878 116.435 165.21 114.101 165.21 111.221C165.21 108.341 162.878 106.007 160 106.007C157.122 106.007 154.789 108.341 154.789 111.221C154.789 114.101 157.122 116.435 160 116.435Z",
                fill: "url(#paint21_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 116.435C242.878 116.435 245.211 114.101 245.211 111.221C245.211 108.341 242.878 106.007 240 106.007C237.122 106.007 234.79 108.341 234.79 111.221C234.79 114.101 237.122 116.435 240 116.435Z",
                fill: "url(#paint22_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M320 116.435C322.878 116.435 325.211 114.101 325.211 111.221C325.211 108.341 322.878 106.007 320 106.007C317.123 106.007 314.79 108.341 314.79 111.221C314.79 114.101 317.123 116.435 320 116.435Z",
                fill: "url(#paint23_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 116.435C402.878 116.435 405.211 114.101 405.211 111.221C405.211 108.341 402.878 106.007 400 106.007C397.123 106.007 394.79 108.341 394.79 111.221C394.79 114.101 397.123 116.435 400 116.435Z",
                fill: "url(#paint24_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M480.001 116.435C482.878 116.435 485.211 114.101 485.211 111.221C485.211 108.341 482.878 106.007 480.001 106.007C477.123 106.007 474.79 108.341 474.79 111.221C474.79 114.101 477.123 116.435 480.001 116.435Z",
                fill: "url(#paint25_radial_112_2360)"
            }), s.jsx("path", {
                d: "M560 116.435C562.878 116.435 565.211 114.101 565.211 111.221C565.211 108.341 562.878 106.007 560 106.007C557.123 106.007 554.79 108.341 554.79 111.221C554.79 114.101 557.123 116.435 560 116.435Z",
                fill: "url(#paint26_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 116.435C642.878 116.435 645.211 114.101 645.211 111.221C645.211 108.341 642.878 106.007 640 106.007C637.123 106.007 634.79 108.341 634.79 111.221C634.79 114.101 637.123 116.435 640 116.435Z",
                fill: "url(#paint27_radial_112_2360)"
            }), s.jsx("path", {
                d: "M720 116.435C722.878 116.435 725.211 114.101 725.211 111.221C725.211 108.341 722.878 106.007 720 106.007C717.122 106.007 714.79 108.341 714.79 111.221C714.79 114.101 717.122 116.435 720 116.435Z",
                fill: "url(#paint28_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 116.435C802.878 116.435 805.211 114.101 805.211 111.221C805.211 108.341 802.878 106.007 800 106.007C797.123 106.007 794.79 108.341 794.79 111.221C794.79 114.101 797.123 116.435 800 116.435Z",
                fill: "url(#paint29_radial_112_2360)"
            }), s.jsx("path", {
                d: "M880 116.435C882.878 116.435 885.211 114.101 885.211 111.221C885.211 108.341 882.878 106.007 880 106.007C877.122 106.007 874.79 108.341 874.79 111.221C874.79 114.101 877.122 116.435 880 116.435Z",
                fill: "url(#paint30_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 116.435C962.877 116.435 965.21 114.101 965.21 111.221C965.21 108.341 962.877 106.007 960 106.007C957.122 106.007 954.789 108.341 954.789 111.221C954.789 114.101 957.122 116.435 960 116.435Z",
                fill: "url(#paint31_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1040 116.435C1042.88 116.435 1045.21 114.101 1045.21 111.221C1045.21 108.341 1042.88 106.007 1040 106.007C1037.12 106.007 1034.79 108.341 1034.79 111.221C1034.79 114.101 1037.12 116.435 1040 116.435Z",
                fill: "url(#paint32_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 116.435C1122.88 116.435 1125.21 114.101 1125.21 111.221C1125.21 108.341 1122.88 106.007 1120 106.007C1117.12 106.007 1114.79 108.341 1114.79 111.221C1114.79 114.101 1117.12 116.435 1120 116.435Z",
                fill: "url(#paint33_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 116.435C1202.88 116.435 1205.21 114.101 1205.21 111.221C1205.21 108.341 1202.88 106.007 1200 106.007C1197.12 106.007 1194.79 108.341 1194.79 111.221C1194.79 114.101 1197.12 116.435 1200 116.435Z",
                fill: "url(#paint34_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 116.435C1282.88 116.435 1285.21 114.101 1285.21 111.221C1285.21 108.341 1282.88 106.007 1280 106.007C1277.12 106.007 1274.79 108.341 1274.79 111.221C1274.79 114.101 1277.12 116.435 1280 116.435Z",
                fill: "url(#paint35_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1360 116.435C1362.88 116.435 1365.21 114.101 1365.21 111.221C1365.21 108.341 1362.88 106.007 1360 106.007C1357.12 106.007 1354.79 108.341 1354.79 111.221C1354.79 114.101 1357.12 116.435 1360 116.435Z",
                fill: "url(#paint36_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 116.435C1442.88 116.435 1445.21 114.101 1445.21 111.221C1445.21 108.341 1442.88 106.007 1440 106.007C1437.12 106.007 1434.79 108.341 1434.79 111.221C1434.79 114.101 1437.12 116.435 1440 116.435Z",
                fill: "url(#paint37_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 196.491C2.87789 196.491 5.21072 194.156 5.21072 191.277C5.21072 188.397 2.87789 186.062 0.000198364 186.062C-2.8775 186.062 -5.21033 188.397 -5.21033 191.277C-5.21033 194.156 -2.8775 196.491 0.000198364 196.491Z",
                fill: "url(#paint38_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M79.9998 196.491C82.8775 196.491 85.2104 194.156 85.2104 191.277C85.2104 188.397 82.8775 186.062 79.9998 186.062C77.1221 186.062 74.7893 188.397 74.7893 191.277C74.7893 194.156 77.1221 196.491 79.9998 196.491Z",
                fill: "url(#paint39_radial_112_2360)"
            }), s.jsx("path", {
                d: "M160 196.491C162.878 196.491 165.21 194.156 165.21 191.277C165.21 188.397 162.878 186.062 160 186.062C157.122 186.062 154.789 188.397 154.789 191.277C154.789 194.156 157.122 196.491 160 196.491Z",
                fill: "url(#paint40_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 196.491C242.878 196.491 245.211 194.156 245.211 191.277C245.211 188.397 242.878 186.062 240 186.062C237.122 186.062 234.79 188.397 234.79 191.277C234.79 194.156 237.122 196.491 240 196.491Z",
                fill: "url(#paint41_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M320 196.491C322.878 196.491 325.211 194.156 325.211 191.277C325.211 188.397 322.878 186.062 320 186.062C317.123 186.062 314.79 188.397 314.79 191.277C314.79 194.156 317.123 196.491 320 196.491Z",
                fill: "url(#paint42_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 196.491C402.878 196.491 405.211 194.156 405.211 191.277C405.211 188.397 402.878 186.062 400 186.062C397.123 186.062 394.79 188.397 394.79 191.277C394.79 194.156 397.123 196.491 400 196.491Z",
                fill: "url(#paint43_radial_112_2360)"
            }), s.jsx("path", {
                d: "M480.001 196.491C482.878 196.491 485.211 194.156 485.211 191.277C485.211 188.397 482.878 186.062 480.001 186.062C477.123 186.062 474.79 188.397 474.79 191.277C474.79 194.156 477.123 196.491 480.001 196.491Z",
                fill: "url(#paint44_radial_112_2360)"
            }), s.jsx("path", {
                d: "M560 196.491C562.878 196.491 565.211 194.156 565.211 191.277C565.211 188.397 562.878 186.062 560 186.062C557.123 186.062 554.79 188.397 554.79 191.277C554.79 194.156 557.123 196.491 560 196.491Z",
                fill: "url(#paint45_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 196.491C642.878 196.491 645.211 194.156 645.211 191.277C645.211 188.397 642.878 186.062 640 186.062C637.123 186.062 634.79 188.397 634.79 191.277C634.79 194.156 637.123 196.491 640 196.491Z",
                fill: "url(#paint46_radial_112_2360)"
            }), s.jsx("path", {
                d: "M720 196.491C722.878 196.491 725.211 194.156 725.211 191.277C725.211 188.397 722.878 186.062 720 186.062C717.122 186.062 714.79 188.397 714.79 191.277C714.79 194.156 717.122 196.491 720 196.491Z",
                fill: "url(#paint47_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 196.491C802.878 196.491 805.211 194.156 805.211 191.277C805.211 188.397 802.878 186.062 800 186.062C797.123 186.062 794.79 188.397 794.79 191.277C794.79 194.156 797.123 196.491 800 196.491Z",
                fill: "url(#paint48_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 196.491C882.878 196.491 885.211 194.156 885.211 191.277C885.211 188.397 882.878 186.062 880 186.062C877.122 186.062 874.79 188.397 874.79 191.277C874.79 194.156 877.122 196.491 880 196.491Z",
                fill: "url(#paint49_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 196.491C962.877 196.491 965.21 194.156 965.21 191.277C965.21 188.397 962.877 186.062 960 186.062C957.122 186.062 954.789 188.397 954.789 191.277C954.789 194.156 957.122 196.491 960 196.491Z",
                fill: "url(#paint50_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 196.491C1042.88 196.491 1045.21 194.156 1045.21 191.277C1045.21 188.397 1042.88 186.062 1040 186.062C1037.12 186.062 1034.79 188.397 1034.79 191.277C1034.79 194.156 1037.12 196.491 1040 196.491Z",
                fill: "url(#paint51_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 196.491C1122.88 196.491 1125.21 194.156 1125.21 191.277C1125.21 188.397 1122.88 186.062 1120 186.062C1117.12 186.062 1114.79 188.397 1114.79 191.277C1114.79 194.156 1117.12 196.491 1120 196.491Z",
                fill: "url(#paint52_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 196.491C1202.88 196.491 1205.21 194.156 1205.21 191.277C1205.21 188.397 1202.88 186.062 1200 186.062C1197.12 186.062 1194.79 188.397 1194.79 191.277C1194.79 194.156 1197.12 196.491 1200 196.491Z",
                fill: "url(#paint53_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 196.491C1282.88 196.491 1285.21 194.156 1285.21 191.277C1285.21 188.397 1282.88 186.062 1280 186.062C1277.12 186.062 1274.79 188.397 1274.79 191.277C1274.79 194.156 1277.12 196.491 1280 196.491Z",
                fill: "url(#paint54_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1360 196.491C1362.88 196.491 1365.21 194.156 1365.21 191.277C1365.21 188.397 1362.88 186.062 1360 186.062C1357.12 186.062 1354.79 188.397 1354.79 191.277C1354.79 194.156 1357.12 196.491 1360 196.491Z",
                fill: "url(#paint55_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 196.491C1442.88 196.491 1445.21 194.156 1445.21 191.277C1445.21 188.397 1442.88 186.062 1440 186.062C1437.12 186.062 1434.79 188.397 1434.79 191.277C1434.79 194.156 1437.12 196.491 1440 196.491Z",
                fill: "url(#paint56_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 276.546C2.87789 276.546 5.21072 274.212 5.21072 271.332C5.21072 268.453 2.87789 266.118 0.000198364 266.118C-2.8775 266.118 -5.21033 268.453 -5.21033 271.332C-5.21033 274.212 -2.8775 276.546 0.000198364 276.546Z",
                fill: "url(#paint57_radial_112_2360)"
            }), s.jsx("path", {
                d: "M79.9998 276.546C82.8775 276.546 85.2104 274.212 85.2104 271.332C85.2104 268.453 82.8775 266.118 79.9998 266.118C77.1221 266.118 74.7893 268.453 74.7893 271.332C74.7893 274.212 77.1221 276.546 79.9998 276.546Z",
                fill: "url(#paint58_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 276.546C162.878 276.546 165.21 274.212 165.21 271.332C165.21 268.453 162.878 266.118 160 266.118C157.122 266.118 154.789 268.453 154.789 271.332C154.789 274.212 157.122 276.546 160 276.546Z",
                fill: "url(#paint59_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 276.546C242.878 276.546 245.211 274.212 245.211 271.332C245.211 268.453 242.878 266.118 240 266.118C237.122 266.118 234.79 268.453 234.79 271.332C234.79 274.212 237.122 276.546 240 276.546Z",
                fill: "url(#paint60_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M320 276.546C322.878 276.546 325.211 274.212 325.211 271.332C325.211 268.453 322.878 266.118 320 266.118C317.123 266.118 314.79 268.453 314.79 271.332C314.79 274.212 317.123 276.546 320 276.546Z",
                fill: "url(#paint61_radial_112_2360)"
            }), s.jsx("path", {
                d: "M400 276.546C402.878 276.546 405.211 274.212 405.211 271.332C405.211 268.453 402.878 266.118 400 266.118C397.123 266.118 394.79 268.453 394.79 271.332C394.79 274.212 397.123 276.546 400 276.546Z",
                fill: "url(#paint62_radial_112_2360)"
            }), s.jsx("path", {
                d: "M480.001 276.546C482.878 276.546 485.211 274.212 485.211 271.332C485.211 268.453 482.878 266.118 480.001 266.118C477.123 266.118 474.79 268.453 474.79 271.332C474.79 274.212 477.123 276.546 480.001 276.546Z",
                fill: "url(#paint63_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M560 276.546C562.878 276.546 565.211 274.212 565.211 271.332C565.211 268.453 562.878 266.118 560 266.118C557.123 266.118 554.79 268.453 554.79 271.332C554.79 274.212 557.123 276.546 560 276.546Z",
                fill: "url(#paint64_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 276.546C642.878 276.546 645.211 274.212 645.211 271.332C645.211 268.453 642.878 266.118 640 266.118C637.123 266.118 634.79 268.453 634.79 271.332C634.79 274.212 637.123 276.546 640 276.546Z",
                fill: "url(#paint65_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M720 276.546C722.878 276.546 725.211 274.212 725.211 271.332C725.211 268.453 722.878 266.118 720 266.118C717.122 266.118 714.79 268.453 714.79 271.332C714.79 274.212 717.122 276.546 720 276.546Z",
                fill: "url(#paint66_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 276.546C802.878 276.546 805.211 274.212 805.211 271.332C805.211 268.453 802.878 266.118 800 266.118C797.123 266.118 794.79 268.453 794.79 271.332C794.79 274.212 797.123 276.546 800 276.546Z",
                fill: "url(#paint67_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 276.546C882.878 276.546 885.211 274.212 885.211 271.332C885.211 268.453 882.878 266.118 880 266.118C877.122 266.118 874.79 268.453 874.79 271.332C874.79 274.212 877.122 276.546 880 276.546Z",
                fill: "url(#paint68_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 276.546C962.877 276.546 965.21 274.212 965.21 271.332C965.21 268.453 962.877 266.118 960 266.118C957.122 266.118 954.789 268.453 954.789 271.332C954.789 274.212 957.122 276.546 960 276.546Z",
                fill: "url(#paint69_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 276.546C1042.88 276.546 1045.21 274.212 1045.21 271.332C1045.21 268.453 1042.88 266.118 1040 266.118C1037.12 266.118 1034.79 268.453 1034.79 271.332C1034.79 274.212 1037.12 276.546 1040 276.546Z",
                fill: "url(#paint70_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 276.546C1122.88 276.546 1125.21 274.212 1125.21 271.332C1125.21 268.453 1122.88 266.118 1120 266.118C1117.12 266.118 1114.79 268.453 1114.79 271.332C1114.79 274.212 1117.12 276.546 1120 276.546Z",
                fill: "url(#paint71_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1200 276.546C1202.88 276.546 1205.21 274.212 1205.21 271.332C1205.21 268.453 1202.88 266.118 1200 266.118C1197.12 266.118 1194.79 268.453 1194.79 271.332C1194.79 274.212 1197.12 276.546 1200 276.546Z",
                fill: "url(#paint72_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 276.546C1282.88 276.546 1285.21 274.212 1285.21 271.332C1285.21 268.453 1282.88 266.118 1280 266.118C1277.12 266.118 1274.79 268.453 1274.79 271.332C1274.79 274.212 1277.12 276.546 1280 276.546Z",
                fill: "url(#paint73_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1360 276.546C1362.88 276.546 1365.21 274.212 1365.21 271.332C1365.21 268.453 1362.88 266.118 1360 266.118C1357.12 266.118 1354.79 268.453 1354.79 271.332C1354.79 274.212 1357.12 276.546 1360 276.546Z",
                fill: "url(#paint74_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 276.546C1442.88 276.546 1445.21 274.212 1445.21 271.332C1445.21 268.453 1442.88 266.118 1440 266.118C1437.12 266.118 1434.79 268.453 1434.79 271.332C1434.79 274.212 1437.12 276.546 1440 276.546Z",
                fill: "url(#paint75_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 356.602C2.87789 356.602 5.21072 354.268 5.21072 351.388C5.21072 348.508 2.87789 346.174 0.000198364 346.174C-2.8775 346.174 -5.21033 348.508 -5.21033 351.388C-5.21033 354.268 -2.8775 356.602 0.000198364 356.602Z",
                fill: "url(#paint76_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M79.9998 356.602C82.8775 356.602 85.2104 354.268 85.2104 351.388C85.2104 348.508 82.8775 346.174 79.9998 346.174C77.1221 346.174 74.7893 348.508 74.7893 351.388C74.7893 354.268 77.1221 356.602 79.9998 356.602Z",
                fill: "url(#paint77_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 356.602C162.878 356.602 165.21 354.268 165.21 351.388C165.21 348.508 162.878 346.174 160 346.174C157.122 346.174 154.789 348.508 154.789 351.388C154.789 354.268 157.122 356.602 160 356.602Z",
                fill: "url(#paint78_radial_112_2360)"
            }), s.jsx("path", {
                d: "M240 356.602C242.878 356.602 245.211 354.268 245.211 351.388C245.211 348.508 242.878 346.174 240 346.174C237.122 346.174 234.79 348.508 234.79 351.388C234.79 354.268 237.122 356.602 240 356.602Z",
                fill: "url(#paint79_radial_112_2360)"
            }), s.jsx("path", {
                d: "M320 356.602C322.878 356.602 325.211 354.268 325.211 351.388C325.211 348.508 322.878 346.174 320 346.174C317.123 346.174 314.79 348.508 314.79 351.388C314.79 354.268 317.123 356.602 320 356.602Z",
                fill: "url(#paint80_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 356.602C402.878 356.602 405.211 354.268 405.211 351.388C405.211 348.508 402.878 346.174 400 346.174C397.123 346.174 394.79 348.508 394.79 351.388C394.79 354.268 397.123 356.602 400 356.602Z",
                fill: "url(#paint81_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M480.001 356.602C482.878 356.602 485.211 354.268 485.211 351.388C485.211 348.508 482.878 346.174 480.001 346.174C477.123 346.174 474.79 348.508 474.79 351.388C474.79 354.268 477.123 356.602 480.001 356.602Z",
                fill: "url(#paint82_radial_112_2360)"
            }), s.jsx("path", {
                d: "M560 356.602C562.878 356.602 565.211 354.268 565.211 351.388C565.211 348.508 562.878 346.174 560 346.174C557.123 346.174 554.79 348.508 554.79 351.388C554.79 354.268 557.123 356.602 560 356.602Z",
                fill: "url(#paint83_radial_112_2360)"
            }), s.jsx("path", {
                d: "M640 356.602C642.878 356.602 645.211 354.268 645.211 351.388C645.211 348.508 642.878 346.174 640 346.174C637.123 346.174 634.79 348.508 634.79 351.388C634.79 354.268 637.123 356.602 640 356.602Z",
                fill: "url(#paint84_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M720 356.602C722.878 356.602 725.211 354.268 725.211 351.388C725.211 348.508 722.878 346.174 720 346.174C717.122 346.174 714.79 348.508 714.79 351.388C714.79 354.268 717.122 356.602 720 356.602Z",
                fill: "url(#paint85_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 356.602C802.878 356.602 805.211 354.268 805.211 351.388C805.211 348.508 802.878 346.174 800 346.174C797.123 346.174 794.79 348.508 794.79 351.388C794.79 354.268 797.123 356.602 800 356.602Z",
                fill: "url(#paint86_radial_112_2360)"
            }), s.jsx("path", {
                d: "M880 356.602C882.878 356.602 885.211 354.268 885.211 351.388C885.211 348.508 882.878 346.174 880 346.174C877.122 346.174 874.79 348.508 874.79 351.388C874.79 354.268 877.122 356.602 880 356.602Z",
                fill: "url(#paint87_radial_112_2360)"
            }), s.jsx("path", {
                d: "M960 356.602C962.877 356.602 965.21 354.268 965.21 351.388C965.21 348.508 962.877 346.174 960 346.174C957.122 346.174 954.789 348.508 954.789 351.388C954.789 354.268 957.122 356.602 960 356.602Z",
                fill: "url(#paint88_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 356.602C1042.88 356.602 1045.21 354.268 1045.21 351.388C1045.21 348.508 1042.88 346.174 1040 346.174C1037.12 346.174 1034.79 348.508 1034.79 351.388C1034.79 354.268 1037.12 356.602 1040 356.602Z",
                fill: "url(#paint89_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 356.602C1122.88 356.602 1125.21 354.268 1125.21 351.388C1125.21 348.508 1122.88 346.174 1120 346.174C1117.12 346.174 1114.79 348.508 1114.79 351.388C1114.79 354.268 1117.12 356.602 1120 356.602Z",
                fill: "url(#paint90_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 356.602C1202.88 356.602 1205.21 354.268 1205.21 351.388C1205.21 348.508 1202.88 346.174 1200 346.174C1197.12 346.174 1194.79 348.508 1194.79 351.388C1194.79 354.268 1197.12 356.602 1200 356.602Z",
                fill: "url(#paint91_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 356.602C1282.88 356.602 1285.21 354.268 1285.21 351.388C1285.21 348.508 1282.88 346.174 1280 346.174C1277.12 346.174 1274.79 348.508 1274.79 351.388C1274.79 354.268 1277.12 356.602 1280 356.602Z",
                fill: "url(#paint92_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1360 356.602C1362.88 356.602 1365.21 354.268 1365.21 351.388C1365.21 348.508 1362.88 346.174 1360 346.174C1357.12 346.174 1354.79 348.508 1354.79 351.388C1354.79 354.268 1357.12 356.602 1360 356.602Z",
                fill: "url(#paint93_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 356.602C1442.88 356.602 1445.21 354.268 1445.21 351.388C1445.21 348.508 1442.88 346.174 1440 346.174C1437.12 346.174 1434.79 348.508 1434.79 351.388C1434.79 354.268 1437.12 356.602 1440 356.602Z",
                fill: "url(#paint94_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 436.658C2.87789 436.658 5.21072 434.323 5.21072 431.444C5.21072 428.564 2.87789 426.229 0.000198364 426.229C-2.8775 426.229 -5.21033 428.564 -5.21033 431.444C-5.21033 434.323 -2.8775 436.658 0.000198364 436.658Z",
                fill: "url(#paint95_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M79.9998 436.658C82.8775 436.658 85.2104 434.323 85.2104 431.444C85.2104 428.564 82.8775 426.229 79.9998 426.229C77.1221 426.229 74.7893 428.564 74.7893 431.444C74.7893 434.323 77.1221 436.658 79.9998 436.658Z",
                fill: "url(#paint96_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 436.658C162.878 436.658 165.21 434.323 165.21 431.444C165.21 428.564 162.878 426.229 160 426.229C157.122 426.229 154.789 428.564 154.789 431.444C154.789 434.323 157.122 436.658 160 436.658Z",
                fill: "url(#paint97_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 436.658C242.878 436.658 245.211 434.323 245.211 431.444C245.211 428.564 242.878 426.229 240 426.229C237.122 426.229 234.79 428.564 234.79 431.444C234.79 434.323 237.122 436.658 240 436.658Z",
                fill: "url(#paint98_radial_112_2360)"
            }), s.jsx("path", {
                d: "M320 436.658C322.878 436.658 325.211 434.323 325.211 431.444C325.211 428.564 322.878 426.229 320 426.229C317.123 426.229 314.79 428.564 314.79 431.444C314.79 434.323 317.123 436.658 320 436.658Z",
                fill: "url(#paint99_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 436.658C402.878 436.658 405.211 434.323 405.211 431.444C405.211 428.564 402.878 426.229 400 426.229C397.123 426.229 394.79 428.564 394.79 431.444C394.79 434.323 397.123 436.658 400 436.658Z",
                fill: "url(#paint100_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M480.001 436.658C482.878 436.658 485.211 434.323 485.211 431.444C485.211 428.564 482.878 426.229 480.001 426.229C477.123 426.229 474.79 428.564 474.79 431.444C474.79 434.323 477.123 436.658 480.001 436.658Z",
                fill: "url(#paint101_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M560 436.658C562.878 436.658 565.211 434.323 565.211 431.444C565.211 428.564 562.878 426.229 560 426.229C557.123 426.229 554.79 428.564 554.79 431.444C554.79 434.323 557.123 436.658 560 436.658Z",
                fill: "url(#paint102_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 436.658C642.878 436.658 645.211 434.323 645.211 431.444C645.211 428.564 642.878 426.229 640 426.229C637.123 426.229 634.79 428.564 634.79 431.444C634.79 434.323 637.123 436.658 640 436.658Z",
                fill: "url(#paint103_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M720 436.658C722.878 436.658 725.211 434.323 725.211 431.444C725.211 428.564 722.878 426.229 720 426.229C717.122 426.229 714.79 428.564 714.79 431.444C714.79 434.323 717.122 436.658 720 436.658Z",
                fill: "url(#paint104_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 436.658C802.878 436.658 805.211 434.323 805.211 431.444C805.211 428.564 802.878 426.229 800 426.229C797.123 426.229 794.79 428.564 794.79 431.444C794.79 434.323 797.123 436.658 800 436.658Z",
                fill: "url(#paint105_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 436.658C882.878 436.658 885.211 434.323 885.211 431.444C885.211 428.564 882.878 426.229 880 426.229C877.122 426.229 874.79 428.564 874.79 431.444C874.79 434.323 877.122 436.658 880 436.658Z",
                fill: "url(#paint106_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 436.658C962.877 436.658 965.21 434.323 965.21 431.444C965.21 428.564 962.877 426.229 960 426.229C957.122 426.229 954.789 428.564 954.789 431.444C954.789 434.323 957.122 436.658 960 436.658Z",
                fill: "url(#paint107_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 436.658C1042.88 436.658 1045.21 434.323 1045.21 431.444C1045.21 428.564 1042.88 426.229 1040 426.229C1037.12 426.229 1034.79 428.564 1034.79 431.444C1034.79 434.323 1037.12 436.658 1040 436.658Z",
                fill: "url(#paint108_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 436.658C1122.88 436.658 1125.21 434.323 1125.21 431.444C1125.21 428.564 1122.88 426.229 1120 426.229C1117.12 426.229 1114.79 428.564 1114.79 431.444C1114.79 434.323 1117.12 436.658 1120 436.658Z",
                fill: "url(#paint109_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 436.658C1202.88 436.658 1205.21 434.323 1205.21 431.444C1205.21 428.564 1202.88 426.229 1200 426.229C1197.12 426.229 1194.79 428.564 1194.79 431.444C1194.79 434.323 1197.12 436.658 1200 436.658Z",
                fill: "url(#paint110_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 436.658C1282.88 436.658 1285.21 434.323 1285.21 431.444C1285.21 428.564 1282.88 426.229 1280 426.229C1277.12 426.229 1274.79 428.564 1274.79 431.444C1274.79 434.323 1277.12 436.658 1280 436.658Z",
                fill: "url(#paint111_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1360 436.658C1362.88 436.658 1365.21 434.323 1365.21 431.444C1365.21 428.564 1362.88 426.229 1360 426.229C1357.12 426.229 1354.79 428.564 1354.79 431.444C1354.79 434.323 1357.12 436.658 1360 436.658Z",
                fill: "url(#paint112_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 436.658C1442.88 436.658 1445.21 434.323 1445.21 431.444C1445.21 428.564 1442.88 426.229 1440 426.229C1437.12 426.229 1434.79 428.564 1434.79 431.444C1434.79 434.323 1437.12 436.658 1440 436.658Z",
                fill: "url(#paint113_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 516.713C2.87789 516.713 5.21072 514.379 5.21072 511.499C5.21072 508.62 2.87789 506.285 0.000198364 506.285C-2.8775 506.285 -5.21033 508.62 -5.21033 511.499C-5.21033 514.379 -2.8775 516.713 0.000198364 516.713Z",
                fill: "url(#paint114_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M79.9998 516.713C82.8775 516.713 85.2104 514.379 85.2104 511.499C85.2104 508.62 82.8775 506.285 79.9998 506.285C77.1221 506.285 74.7893 508.62 74.7893 511.499C74.7893 514.379 77.1221 516.713 79.9998 516.713Z",
                fill: "url(#paint115_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 516.713C162.878 516.713 165.21 514.379 165.21 511.499C165.21 508.62 162.878 506.285 160 506.285C157.122 506.285 154.789 508.62 154.789 511.499C154.789 514.379 157.122 516.713 160 516.713Z",
                fill: "url(#paint116_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 516.713C242.878 516.713 245.211 514.379 245.211 511.499C245.211 508.62 242.878 506.285 240 506.285C237.122 506.285 234.79 508.62 234.79 511.499C234.79 514.379 237.122 516.713 240 516.713Z",
                fill: "url(#paint117_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M320 516.713C322.878 516.713 325.211 514.379 325.211 511.499C325.211 508.62 322.878 506.285 320 506.285C317.123 506.285 314.79 508.62 314.79 511.499C314.79 514.379 317.123 516.713 320 516.713Z",
                fill: "url(#paint118_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 516.713C402.878 516.713 405.211 514.379 405.211 511.499C405.211 508.62 402.878 506.285 400 506.285C397.123 506.285 394.79 508.62 394.79 511.499C394.79 514.379 397.123 516.713 400 516.713Z",
                fill: "url(#paint119_radial_112_2360)"
            }), s.jsx("path", {
                d: "M480.001 516.713C482.878 516.713 485.211 514.379 485.211 511.499C485.211 508.62 482.878 506.285 480.001 506.285C477.123 506.285 474.79 508.62 474.79 511.499C474.79 514.379 477.123 516.713 480.001 516.713Z",
                fill: "url(#paint120_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M560 516.713C562.878 516.713 565.211 514.379 565.211 511.499C565.211 508.62 562.878 506.285 560 506.285C557.123 506.285 554.79 508.62 554.79 511.499C554.79 514.379 557.123 516.713 560 516.713Z",
                fill: "url(#paint121_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 516.713C642.878 516.713 645.211 514.379 645.211 511.499C645.211 508.62 642.878 506.285 640 506.285C637.123 506.285 634.79 508.62 634.79 511.499C634.79 514.379 637.123 516.713 640 516.713Z",
                fill: "url(#paint122_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M720 516.713C722.878 516.713 725.211 514.379 725.211 511.499C725.211 508.62 722.878 506.285 720 506.285C717.122 506.285 714.79 508.62 714.79 511.499C714.79 514.379 717.122 516.713 720 516.713Z",
                fill: "url(#paint123_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 516.713C802.878 516.713 805.211 514.379 805.211 511.499C805.211 508.62 802.878 506.285 800 506.285C797.123 506.285 794.79 508.62 794.79 511.499C794.79 514.379 797.123 516.713 800 516.713Z",
                fill: "url(#paint124_radial_112_2360)"
            }), s.jsx("path", {
                d: "M880 516.713C882.878 516.713 885.211 514.379 885.211 511.499C885.211 508.62 882.878 506.285 880 506.285C877.122 506.285 874.79 508.62 874.79 511.499C874.79 514.379 877.122 516.713 880 516.713Z",
                fill: "url(#paint125_radial_112_2360)"
            }), s.jsx("path", {
                d: "M960 516.713C962.877 516.713 965.21 514.379 965.21 511.499C965.21 508.62 962.877 506.285 960 506.285C957.122 506.285 954.789 508.62 954.789 511.499C954.789 514.379 957.122 516.713 960 516.713Z",
                fill: "url(#paint126_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 516.713C1042.88 516.713 1045.21 514.379 1045.21 511.499C1045.21 508.62 1042.88 506.285 1040 506.285C1037.12 506.285 1034.79 508.62 1034.79 511.499C1034.79 514.379 1037.12 516.713 1040 516.713Z",
                fill: "url(#paint127_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 516.713C1122.88 516.713 1125.21 514.379 1125.21 511.499C1125.21 508.62 1122.88 506.285 1120 506.285C1117.12 506.285 1114.79 508.62 1114.79 511.499C1114.79 514.379 1117.12 516.713 1120 516.713Z",
                fill: "url(#paint128_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 516.713C1202.88 516.713 1205.21 514.379 1205.21 511.499C1205.21 508.62 1202.88 506.285 1200 506.285C1197.12 506.285 1194.79 508.62 1194.79 511.499C1194.79 514.379 1197.12 516.713 1200 516.713Z",
                fill: "url(#paint129_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1280 516.713C1282.88 516.713 1285.21 514.379 1285.21 511.499C1285.21 508.62 1282.88 506.285 1280 506.285C1277.12 506.285 1274.79 508.62 1274.79 511.499C1274.79 514.379 1277.12 516.713 1280 516.713Z",
                fill: "url(#paint130_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1360 516.713C1362.88 516.713 1365.21 514.379 1365.21 511.499C1365.21 508.62 1362.88 506.285 1360 506.285C1357.12 506.285 1354.79 508.62 1354.79 511.499C1354.79 514.379 1357.12 516.713 1360 516.713Z",
                fill: "url(#paint131_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 516.713C1442.88 516.713 1445.21 514.379 1445.21 511.499C1445.21 508.62 1442.88 506.285 1440 506.285C1437.12 506.285 1434.79 508.62 1434.79 511.499C1434.79 514.379 1437.12 516.713 1440 516.713Z",
                fill: "url(#paint132_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 596.769C2.87789 596.769 5.21072 594.435 5.21072 591.555C5.21072 588.675 2.87789 586.341 0.000198364 586.341C-2.8775 586.341 -5.21033 588.675 -5.21033 591.555C-5.21033 594.435 -2.8775 596.769 0.000198364 596.769Z",
                fill: "url(#paint133_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M79.9998 596.769C82.8775 596.769 85.2104 594.435 85.2104 591.555C85.2104 588.675 82.8775 586.341 79.9998 586.341C77.1221 586.341 74.7893 588.675 74.7893 591.555C74.7893 594.435 77.1221 596.769 79.9998 596.769Z",
                fill: "url(#paint134_radial_112_2360)"
            }), s.jsx("path", {
                d: "M160 596.769C162.878 596.769 165.21 594.435 165.21 591.555C165.21 588.675 162.878 586.341 160 586.341C157.122 586.341 154.789 588.675 154.789 591.555C154.789 594.435 157.122 596.769 160 596.769Z",
                fill: "url(#paint135_radial_112_2360)"
            }), s.jsx("path", {
                d: "M240 596.769C242.878 596.769 245.211 594.435 245.211 591.555C245.211 588.675 242.878 586.341 240 586.341C237.122 586.341 234.79 588.675 234.79 591.555C234.79 594.435 237.122 596.769 240 596.769Z",
                fill: "url(#paint136_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M320 596.769C322.878 596.769 325.211 594.435 325.211 591.555C325.211 588.675 322.878 586.341 320 586.341C317.123 586.341 314.79 588.675 314.79 591.555C314.79 594.435 317.123 596.769 320 596.769Z",
                fill: "url(#paint137_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 596.769C402.878 596.769 405.211 594.435 405.211 591.555C405.211 588.675 402.878 586.341 400 586.341C397.123 586.341 394.79 588.675 394.79 591.555C394.79 594.435 397.123 596.769 400 596.769Z",
                fill: "url(#paint138_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M480.001 596.769C482.878 596.769 485.211 594.435 485.211 591.555C485.211 588.675 482.878 586.341 480.001 586.341C477.123 586.341 474.79 588.675 474.79 591.555C474.79 594.435 477.123 596.769 480.001 596.769Z",
                fill: "url(#paint139_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M560 596.769C562.878 596.769 565.211 594.435 565.211 591.555C565.211 588.675 562.878 586.341 560 586.341C557.123 586.341 554.79 588.675 554.79 591.555C554.79 594.435 557.123 596.769 560 596.769Z",
                fill: "url(#paint140_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 596.769C642.878 596.769 645.211 594.435 645.211 591.555C645.211 588.675 642.878 586.341 640 586.341C637.123 586.341 634.79 588.675 634.79 591.555C634.79 594.435 637.123 596.769 640 596.769Z",
                fill: "url(#paint141_radial_112_2360)"
            }), s.jsx("path", {
                d: "M720 596.769C722.878 596.769 725.211 594.435 725.211 591.555C725.211 588.675 722.878 586.341 720 586.341C717.122 586.341 714.79 588.675 714.79 591.555C714.79 594.435 717.122 596.769 720 596.769Z",
                fill: "url(#paint142_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 596.769C802.878 596.769 805.211 594.435 805.211 591.555C805.211 588.675 802.878 586.341 800 586.341C797.123 586.341 794.79 588.675 794.79 591.555C794.79 594.435 797.123 596.769 800 596.769Z",
                fill: "url(#paint143_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 596.769C882.878 596.769 885.211 594.435 885.211 591.555C885.211 588.675 882.878 586.341 880 586.341C877.122 586.341 874.79 588.675 874.79 591.555C874.79 594.435 877.122 596.769 880 596.769Z",
                fill: "url(#paint144_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 596.769C962.877 596.769 965.21 594.435 965.21 591.555C965.21 588.675 962.877 586.341 960 586.341C957.122 586.341 954.789 588.675 954.789 591.555C954.789 594.435 957.122 596.769 960 596.769Z",
                fill: "url(#paint145_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 596.769C1042.88 596.769 1045.21 594.435 1045.21 591.555C1045.21 588.675 1042.88 586.341 1040 586.341C1037.12 586.341 1034.79 588.675 1034.79 591.555C1034.79 594.435 1037.12 596.769 1040 596.769Z",
                fill: "url(#paint146_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1120 596.769C1122.88 596.769 1125.21 594.435 1125.21 591.555C1125.21 588.675 1122.88 586.341 1120 586.341C1117.12 586.341 1114.79 588.675 1114.79 591.555C1114.79 594.435 1117.12 596.769 1120 596.769Z",
                fill: "url(#paint147_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 596.769C1202.88 596.769 1205.21 594.435 1205.21 591.555C1205.21 588.675 1202.88 586.341 1200 586.341C1197.12 586.341 1194.79 588.675 1194.79 591.555C1194.79 594.435 1197.12 596.769 1200 596.769Z",
                fill: "url(#paint148_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 596.769C1282.88 596.769 1285.21 594.435 1285.21 591.555C1285.21 588.675 1282.88 586.341 1280 586.341C1277.12 586.341 1274.79 588.675 1274.79 591.555C1274.79 594.435 1277.12 596.769 1280 596.769Z",
                fill: "url(#paint149_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1360 596.769C1362.88 596.769 1365.21 594.435 1365.21 591.555C1365.21 588.675 1362.88 586.341 1360 586.341C1357.12 586.341 1354.79 588.675 1354.79 591.555C1354.79 594.435 1357.12 596.769 1360 596.769Z",
                fill: "url(#paint150_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 596.769C1442.88 596.769 1445.21 594.435 1445.21 591.555C1445.21 588.675 1442.88 586.341 1440 586.341C1437.12 586.341 1434.79 588.675 1434.79 591.555C1434.79 594.435 1437.12 596.769 1440 596.769Z",
                fill: "url(#paint151_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 676.825C2.87789 676.825 5.21072 674.49 5.21072 671.611C5.21072 668.731 2.87789 666.396 0.000198364 666.396C-2.8775 666.396 -5.21033 668.731 -5.21033 671.611C-5.21033 674.49 -2.8775 676.825 0.000198364 676.825Z",
                fill: "url(#paint152_radial_112_2360)"
            }), s.jsx("path", {
                d: "M79.9998 676.825C82.8775 676.825 85.2104 674.49 85.2104 671.611C85.2104 668.731 82.8775 666.396 79.9998 666.396C77.1221 666.396 74.7893 668.731 74.7893 671.611C74.7893 674.49 77.1221 676.825 79.9998 676.825Z",
                fill: "url(#paint153_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 676.825C162.878 676.825 165.21 674.49 165.21 671.611C165.21 668.731 162.878 666.396 160 666.396C157.122 666.396 154.789 668.731 154.789 671.611C154.789 674.49 157.122 676.825 160 676.825Z",
                fill: "url(#paint154_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 676.825C242.878 676.825 245.211 674.49 245.211 671.611C245.211 668.731 242.878 666.396 240 666.396C237.122 666.396 234.79 668.731 234.79 671.611C234.79 674.49 237.122 676.825 240 676.825Z",
                fill: "url(#paint155_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M320 676.825C322.878 676.825 325.211 674.49 325.211 671.611C325.211 668.731 322.878 666.396 320 666.396C317.123 666.396 314.79 668.731 314.79 671.611C314.79 674.49 317.123 676.825 320 676.825Z",
                fill: "url(#paint156_radial_112_2360)"
            }), s.jsx("path", {
                d: "M400 676.825C402.878 676.825 405.211 674.49 405.211 671.611C405.211 668.731 402.878 666.396 400 666.396C397.123 666.396 394.79 668.731 394.79 671.611C394.79 674.49 397.123 676.825 400 676.825Z",
                fill: "url(#paint157_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M480.001 676.825C482.878 676.825 485.211 674.49 485.211 671.611C485.211 668.731 482.878 666.396 480.001 666.396C477.123 666.396 474.79 668.731 474.79 671.611C474.79 674.49 477.123 676.825 480.001 676.825Z",
                fill: "url(#paint158_radial_112_2360)"
            }), s.jsx("path", {
                d: "M560 676.825C562.878 676.825 565.211 674.49 565.211 671.611C565.211 668.731 562.878 666.396 560 666.396C557.123 666.396 554.79 668.731 554.79 671.611C554.79 674.49 557.123 676.825 560 676.825Z",
                fill: "url(#paint159_radial_112_2360)"
            }), s.jsx("path", {
                d: "M640 676.825C642.878 676.825 645.211 674.49 645.211 671.611C645.211 668.731 642.878 666.396 640 666.396C637.123 666.396 634.79 668.731 634.79 671.611C634.79 674.49 637.123 676.825 640 676.825Z",
                fill: "url(#paint160_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M720 676.825C722.878 676.825 725.211 674.49 725.211 671.611C725.211 668.731 722.878 666.396 720 666.396C717.122 666.396 714.79 668.731 714.79 671.611C714.79 674.49 717.122 676.825 720 676.825Z",
                fill: "url(#paint161_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 676.825C802.878 676.825 805.211 674.49 805.211 671.611C805.211 668.731 802.878 666.396 800 666.396C797.123 666.396 794.79 668.731 794.79 671.611C794.79 674.49 797.123 676.825 800 676.825Z",
                fill: "url(#paint162_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 676.825C882.878 676.825 885.211 674.49 885.211 671.611C885.211 668.731 882.878 666.396 880 666.396C877.122 666.396 874.79 668.731 874.79 671.611C874.79 674.49 877.122 676.825 880 676.825Z",
                fill: "url(#paint163_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 676.825C962.877 676.825 965.21 674.49 965.21 671.611C965.21 668.731 962.877 666.396 960 666.396C957.122 666.396 954.789 668.731 954.789 671.611C954.789 674.49 957.122 676.825 960 676.825Z",
                fill: "url(#paint164_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1040 676.825C1042.88 676.825 1045.21 674.49 1045.21 671.611C1045.21 668.731 1042.88 666.396 1040 666.396C1037.12 666.396 1034.79 668.731 1034.79 671.611C1034.79 674.49 1037.12 676.825 1040 676.825Z",
                fill: "url(#paint165_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1120 676.825C1122.88 676.825 1125.21 674.49 1125.21 671.611C1125.21 668.731 1122.88 666.396 1120 666.396C1117.12 666.396 1114.79 668.731 1114.79 671.611C1114.79 674.49 1117.12 676.825 1120 676.825Z",
                fill: "url(#paint166_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1200 676.825C1202.88 676.825 1205.21 674.49 1205.21 671.611C1205.21 668.731 1202.88 666.396 1200 666.396C1197.12 666.396 1194.79 668.731 1194.79 671.611C1194.79 674.49 1197.12 676.825 1200 676.825Z",
                fill: "url(#paint167_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 676.825C1282.88 676.825 1285.21 674.49 1285.21 671.611C1285.21 668.731 1282.88 666.396 1280 666.396C1277.12 666.396 1274.79 668.731 1274.79 671.611C1274.79 674.49 1277.12 676.825 1280 676.825Z",
                fill: "url(#paint168_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1360 676.825C1362.88 676.825 1365.21 674.49 1365.21 671.611C1365.21 668.731 1362.88 666.396 1360 666.396C1357.12 666.396 1354.79 668.731 1354.79 671.611C1354.79 674.49 1357.12 676.825 1360 676.825Z",
                fill: "url(#paint169_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 676.825C1442.88 676.825 1445.21 674.49 1445.21 671.611C1445.21 668.731 1442.88 666.396 1440 666.396C1437.12 666.396 1434.79 668.731 1434.79 671.611C1434.79 674.49 1437.12 676.825 1440 676.825Z",
                fill: "url(#paint170_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 756.88C2.87789 756.88 5.21072 754.546 5.21072 751.666C5.21072 748.787 2.87789 746.452 0.000198364 746.452C-2.8775 746.452 -5.21033 748.787 -5.21033 751.666C-5.21033 754.546 -2.8775 756.88 0.000198364 756.88Z",
                fill: "url(#paint171_radial_112_2360)"
            }), s.jsx("path", {
                d: "M79.9998 756.88C82.8775 756.88 85.2104 754.546 85.2104 751.666C85.2104 748.787 82.8775 746.452 79.9998 746.452C77.1221 746.452 74.7893 748.787 74.7893 751.666C74.7893 754.546 77.1221 756.88 79.9998 756.88Z",
                fill: "url(#paint172_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 756.88C162.878 756.88 165.21 754.546 165.21 751.666C165.21 748.787 162.878 746.452 160 746.452C157.122 746.452 154.789 748.787 154.789 751.666C154.789 754.546 157.122 756.88 160 756.88Z",
                fill: "url(#paint173_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 756.88C242.878 756.88 245.211 754.546 245.211 751.666C245.211 748.787 242.878 746.452 240 746.452C237.122 746.452 234.79 748.787 234.79 751.666C234.79 754.546 237.122 756.88 240 756.88Z",
                fill: "url(#paint174_radial_112_2360)"
            }), s.jsx("path", {
                d: "M320 756.88C322.878 756.88 325.211 754.546 325.211 751.666C325.211 748.787 322.878 746.452 320 746.452C317.123 746.452 314.79 748.787 314.79 751.666C314.79 754.546 317.123 756.88 320 756.88Z",
                fill: "url(#paint175_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 756.88C402.878 756.88 405.211 754.546 405.211 751.666C405.211 748.787 402.878 746.452 400 746.452C397.123 746.452 394.79 748.787 394.79 751.666C394.79 754.546 397.123 756.88 400 756.88Z",
                fill: "url(#paint176_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M480.001 756.88C482.878 756.88 485.211 754.546 485.211 751.666C485.211 748.787 482.878 746.452 480.001 746.452C477.123 746.452 474.79 748.787 474.79 751.666C474.79 754.546 477.123 756.88 480.001 756.88Z",
                fill: "url(#paint177_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M560 756.88C562.878 756.88 565.211 754.546 565.211 751.666C565.211 748.787 562.878 746.452 560 746.452C557.123 746.452 554.79 748.787 554.79 751.666C554.79 754.546 557.123 756.88 560 756.88Z",
                fill: "url(#paint178_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 756.88C642.878 756.88 645.211 754.546 645.211 751.666C645.211 748.787 642.878 746.452 640 746.452C637.123 746.452 634.79 748.787 634.79 751.666C634.79 754.546 637.123 756.88 640 756.88Z",
                fill: "url(#paint179_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M720 756.88C722.878 756.88 725.211 754.546 725.211 751.666C725.211 748.787 722.878 746.452 720 746.452C717.122 746.452 714.79 748.787 714.79 751.666C714.79 754.546 717.122 756.88 720 756.88Z",
                fill: "url(#paint180_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 756.88C802.878 756.88 805.211 754.546 805.211 751.666C805.211 748.787 802.878 746.452 800 746.452C797.123 746.452 794.79 748.787 794.79 751.666C794.79 754.546 797.123 756.88 800 756.88Z",
                fill: "url(#paint181_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 756.88C882.878 756.88 885.211 754.546 885.211 751.666C885.211 748.787 882.878 746.452 880 746.452C877.122 746.452 874.79 748.787 874.79 751.666C874.79 754.546 877.122 756.88 880 756.88Z",
                fill: "url(#paint182_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 756.88C962.877 756.88 965.21 754.546 965.21 751.666C965.21 748.787 962.877 746.452 960 746.452C957.122 746.452 954.789 748.787 954.789 751.666C954.789 754.546 957.122 756.88 960 756.88Z",
                fill: "url(#paint183_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 756.88C1042.88 756.88 1045.21 754.546 1045.21 751.666C1045.21 748.787 1042.88 746.452 1040 746.452C1037.12 746.452 1034.79 748.787 1034.79 751.666C1034.79 754.546 1037.12 756.88 1040 756.88Z",
                fill: "url(#paint184_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 756.88C1122.88 756.88 1125.21 754.546 1125.21 751.666C1125.21 748.787 1122.88 746.452 1120 746.452C1117.12 746.452 1114.79 748.787 1114.79 751.666C1114.79 754.546 1117.12 756.88 1120 756.88Z",
                fill: "url(#paint185_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 756.88C1202.88 756.88 1205.21 754.546 1205.21 751.666C1205.21 748.787 1202.88 746.452 1200 746.452C1197.12 746.452 1194.79 748.787 1194.79 751.666C1194.79 754.546 1197.12 756.88 1200 756.88Z",
                fill: "url(#paint186_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 756.88C1282.88 756.88 1285.21 754.546 1285.21 751.666C1285.21 748.787 1282.88 746.452 1280 746.452C1277.12 746.452 1274.79 748.787 1274.79 751.666C1274.79 754.546 1277.12 756.88 1280 756.88Z",
                fill: "url(#paint187_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1360 756.88C1362.88 756.88 1365.21 754.546 1365.21 751.666C1365.21 748.787 1362.88 746.452 1360 746.452C1357.12 746.452 1354.79 748.787 1354.79 751.666C1354.79 754.546 1357.12 756.88 1360 756.88Z",
                fill: "url(#paint188_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 756.88C1442.88 756.88 1445.21 754.546 1445.21 751.666C1445.21 748.787 1442.88 746.452 1440 746.452C1437.12 746.452 1434.79 748.787 1434.79 751.666C1434.79 754.546 1437.12 756.88 1440 756.88Z",
                fill: "url(#paint189_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 836.935C2.87789 836.935 5.21072 834.601 5.21072 831.721C5.21072 828.841 2.87789 826.507 0.000198364 826.507C-2.8775 826.507 -5.21033 828.841 -5.21033 831.721C-5.21033 834.601 -2.8775 836.935 0.000198364 836.935Z",
                fill: "url(#paint190_radial_112_2360)"
            }), s.jsx("path", {
                d: "M79.9998 836.935C82.8775 836.935 85.2104 834.601 85.2104 831.721C85.2104 828.841 82.8775 826.507 79.9998 826.507C77.1221 826.507 74.7893 828.841 74.7893 831.721C74.7893 834.601 77.1221 836.935 79.9998 836.935Z",
                fill: "url(#paint191_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 836.935C162.878 836.935 165.21 834.601 165.21 831.721C165.21 828.841 162.878 826.507 160 826.507C157.122 826.507 154.789 828.841 154.789 831.721C154.789 834.601 157.122 836.935 160 836.935Z",
                fill: "url(#paint192_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 836.935C242.878 836.935 245.211 834.601 245.211 831.721C245.211 828.841 242.878 826.507 240 826.507C237.122 826.507 234.79 828.841 234.79 831.721C234.79 834.601 237.122 836.935 240 836.935Z",
                fill: "url(#paint193_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M320 836.935C322.878 836.935 325.211 834.601 325.211 831.721C325.211 828.841 322.878 826.507 320 826.507C317.123 826.507 314.79 828.841 314.79 831.721C314.79 834.601 317.123 836.935 320 836.935Z",
                fill: "url(#paint194_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 836.935C402.878 836.935 405.211 834.601 405.211 831.721C405.211 828.841 402.878 826.507 400 826.507C397.123 826.507 394.79 828.841 394.79 831.721C394.79 834.601 397.123 836.935 400 836.935Z",
                fill: "url(#paint195_radial_112_2360)"
            }), s.jsx("path", {
                d: "M480.001 836.935C482.878 836.935 485.211 834.601 485.211 831.721C485.211 828.841 482.878 826.507 480.001 826.507C477.123 826.507 474.79 828.841 474.79 831.721C474.79 834.601 477.123 836.935 480.001 836.935Z",
                fill: "url(#paint196_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M560 836.935C562.878 836.935 565.211 834.601 565.211 831.721C565.211 828.841 562.878 826.507 560 826.507C557.123 826.507 554.79 828.841 554.79 831.721C554.79 834.601 557.123 836.935 560 836.935Z",
                fill: "url(#paint197_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 836.935C642.878 836.935 645.211 834.601 645.211 831.721C645.211 828.841 642.878 826.507 640 826.507C637.123 826.507 634.79 828.841 634.79 831.721C634.79 834.601 637.123 836.935 640 836.935Z",
                fill: "url(#paint198_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M720 836.935C722.878 836.935 725.211 834.601 725.211 831.721C725.211 828.841 722.878 826.507 720 826.507C717.122 826.507 714.79 828.841 714.79 831.721C714.79 834.601 717.122 836.935 720 836.935Z",
                fill: "url(#paint199_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 836.935C802.878 836.935 805.211 834.601 805.211 831.721C805.211 828.841 802.878 826.507 800 826.507C797.123 826.507 794.79 828.841 794.79 831.721C794.79 834.601 797.123 836.935 800 836.935Z",
                fill: "url(#paint200_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 836.935C882.878 836.935 885.211 834.601 885.211 831.721C885.211 828.841 882.878 826.507 880 826.507C877.122 826.507 874.79 828.841 874.79 831.721C874.79 834.601 877.122 836.935 880 836.935Z",
                fill: "url(#paint201_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 836.935C962.877 836.935 965.21 834.601 965.21 831.721C965.21 828.841 962.877 826.507 960 826.507C957.122 826.507 954.789 828.841 954.789 831.721C954.789 834.601 957.122 836.935 960 836.935Z",
                fill: "url(#paint202_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1040 836.935C1042.88 836.935 1045.21 834.601 1045.21 831.721C1045.21 828.841 1042.88 826.507 1040 826.507C1037.12 826.507 1034.79 828.841 1034.79 831.721C1034.79 834.601 1037.12 836.935 1040 836.935Z",
                fill: "url(#paint203_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 836.935C1122.88 836.935 1125.21 834.601 1125.21 831.721C1125.21 828.841 1122.88 826.507 1120 826.507C1117.12 826.507 1114.79 828.841 1114.79 831.721C1114.79 834.601 1117.12 836.935 1120 836.935Z",
                fill: "url(#paint204_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 836.935C1202.88 836.935 1205.21 834.601 1205.21 831.721C1205.21 828.841 1202.88 826.507 1200 826.507C1197.12 826.507 1194.79 828.841 1194.79 831.721C1194.79 834.601 1197.12 836.935 1200 836.935Z",
                fill: "url(#paint205_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 836.935C1282.88 836.935 1285.21 834.601 1285.21 831.721C1285.21 828.841 1282.88 826.507 1280 826.507C1277.12 826.507 1274.79 828.841 1274.79 831.721C1274.79 834.601 1277.12 836.935 1280 836.935Z",
                fill: "url(#paint206_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1360 836.935C1362.88 836.935 1365.21 834.601 1365.21 831.721C1365.21 828.841 1362.88 826.507 1360 826.507C1357.12 826.507 1354.79 828.841 1354.79 831.721C1354.79 834.601 1357.12 836.935 1360 836.935Z",
                fill: "url(#paint207_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 836.935C1442.88 836.935 1445.21 834.601 1445.21 831.721C1445.21 828.841 1442.88 826.507 1440 826.507C1437.12 826.507 1434.79 828.841 1434.79 831.721C1434.79 834.601 1437.12 836.935 1440 836.935Z",
                fill: "url(#paint208_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 916.991C2.87789 916.991 5.21072 914.656 5.21072 911.777C5.21072 908.897 2.87789 906.562 0.000198364 906.562C-2.8775 906.562 -5.21033 908.897 -5.21033 911.777C-5.21033 914.656 -2.8775 916.991 0.000198364 916.991Z",
                fill: "url(#paint209_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M79.9998 916.991C82.8775 916.991 85.2104 914.656 85.2104 911.777C85.2104 908.897 82.8775 906.562 79.9998 906.562C77.1221 906.562 74.7893 908.897 74.7893 911.777C74.7893 914.656 77.1221 916.991 79.9998 916.991Z",
                fill: "url(#paint210_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 916.991C162.878 916.991 165.21 914.656 165.21 911.777C165.21 908.897 162.878 906.562 160 906.562C157.122 906.562 154.789 908.897 154.789 911.777C154.789 914.656 157.122 916.991 160 916.991Z",
                fill: "url(#paint211_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 916.991C242.878 916.991 245.211 914.656 245.211 911.777C245.211 908.897 242.878 906.562 240 906.562C237.122 906.562 234.79 908.897 234.79 911.777C234.79 914.656 237.122 916.991 240 916.991Z",
                fill: "url(#paint212_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M320 916.991C322.878 916.991 325.211 914.656 325.211 911.777C325.211 908.897 322.878 906.562 320 906.562C317.123 906.562 314.79 908.897 314.79 911.777C314.79 914.656 317.123 916.991 320 916.991Z",
                fill: "url(#paint213_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 916.991C402.878 916.991 405.211 914.656 405.211 911.777C405.211 908.897 402.878 906.562 400 906.562C397.123 906.562 394.79 908.897 394.79 911.777C394.79 914.656 397.123 916.991 400 916.991Z",
                fill: "url(#paint214_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M480.001 916.991C482.878 916.991 485.211 914.656 485.211 911.777C485.211 908.897 482.878 906.562 480.001 906.562C477.123 906.562 474.79 908.897 474.79 911.777C474.79 914.656 477.123 916.991 480.001 916.991Z",
                fill: "url(#paint215_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M560 916.991C562.878 916.991 565.211 914.656 565.211 911.777C565.211 908.897 562.878 906.562 560 906.562C557.123 906.562 554.79 908.897 554.79 911.777C554.79 914.656 557.123 916.991 560 916.991Z",
                fill: "url(#paint216_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 916.991C642.878 916.991 645.211 914.656 645.211 911.777C645.211 908.897 642.878 906.562 640 906.562C637.123 906.562 634.79 908.897 634.79 911.777C634.79 914.656 637.123 916.991 640 916.991Z",
                fill: "url(#paint217_radial_112_2360)"
            }), s.jsx("path", {
                d: "M720 916.991C722.878 916.991 725.211 914.656 725.211 911.777C725.211 908.897 722.878 906.562 720 906.562C717.122 906.562 714.79 908.897 714.79 911.777C714.79 914.656 717.122 916.991 720 916.991Z",
                fill: "url(#paint218_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 916.991C802.878 916.991 805.211 914.656 805.211 911.777C805.211 908.897 802.878 906.562 800 906.562C797.123 906.562 794.79 908.897 794.79 911.777C794.79 914.656 797.123 916.991 800 916.991Z",
                fill: "url(#paint219_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 916.991C882.878 916.991 885.211 914.656 885.211 911.777C885.211 908.897 882.878 906.562 880 906.562C877.122 906.562 874.79 908.897 874.79 911.777C874.79 914.656 877.122 916.991 880 916.991Z",
                fill: "url(#paint220_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M960 916.991C962.877 916.991 965.21 914.656 965.21 911.777C965.21 908.897 962.877 906.562 960 906.562C957.122 906.562 954.789 908.897 954.789 911.777C954.789 914.656 957.122 916.991 960 916.991Z",
                fill: "url(#paint221_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 916.991C1042.88 916.991 1045.21 914.656 1045.21 911.777C1045.21 908.897 1042.88 906.562 1040 906.562C1037.12 906.562 1034.79 908.897 1034.79 911.777C1034.79 914.656 1037.12 916.991 1040 916.991Z",
                fill: "url(#paint222_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 916.991C1122.88 916.991 1125.21 914.656 1125.21 911.777C1125.21 908.897 1122.88 906.562 1120 906.562C1117.12 906.562 1114.79 908.897 1114.79 911.777C1114.79 914.656 1117.12 916.991 1120 916.991Z",
                fill: "url(#paint223_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1200 916.991C1202.88 916.991 1205.21 914.656 1205.21 911.777C1205.21 908.897 1202.88 906.562 1200 906.562C1197.12 906.562 1194.79 908.897 1194.79 911.777C1194.79 914.656 1197.12 916.991 1200 916.991Z",
                fill: "url(#paint224_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1280 916.991C1282.88 916.991 1285.21 914.656 1285.21 911.777C1285.21 908.897 1282.88 906.562 1280 906.562C1277.12 906.562 1274.79 908.897 1274.79 911.777C1274.79 914.656 1277.12 916.991 1280 916.991Z",
                fill: "url(#paint225_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1360 916.991C1362.88 916.991 1365.21 914.656 1365.21 911.777C1365.21 908.897 1362.88 906.562 1360 906.562C1357.12 906.562 1354.79 908.897 1354.79 911.777C1354.79 914.656 1357.12 916.991 1360 916.991Z",
                fill: "url(#paint226_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 916.991C1442.88 916.991 1445.21 914.656 1445.21 911.777C1445.21 908.897 1442.88 906.562 1440 906.562C1437.12 906.562 1434.79 908.897 1434.79 911.777C1434.79 914.656 1437.12 916.991 1440 916.991Z",
                fill: "url(#paint227_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M0.000198364 997.046C2.87789 997.046 5.21072 994.712 5.21072 991.832C5.21072 988.953 2.87789 986.618 0.000198364 986.618C-2.8775 986.618 -5.21033 988.953 -5.21033 991.832C-5.21033 994.712 -2.8775 997.046 0.000198364 997.046Z",
                fill: "url(#paint228_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M79.9998 997.046C82.8775 997.046 85.2104 994.712 85.2104 991.832C85.2104 988.953 82.8775 986.618 79.9998 986.618C77.1221 986.618 74.7893 988.953 74.7893 991.832C74.7893 994.712 77.1221 997.046 79.9998 997.046Z",
                fill: "url(#paint229_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M160 997.046C162.878 997.046 165.21 994.712 165.21 991.832C165.21 988.953 162.878 986.618 160 986.618C157.122 986.618 154.789 988.953 154.789 991.832C154.789 994.712 157.122 997.046 160 997.046Z",
                fill: "url(#paint230_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M240 997.046C242.878 997.046 245.211 994.712 245.211 991.832C245.211 988.953 242.878 986.618 240 986.618C237.122 986.618 234.79 988.953 234.79 991.832C234.79 994.712 237.122 997.046 240 997.046Z",
                fill: "url(#paint231_radial_112_2360)"
            }), s.jsx("path", {
                d: "M320 997.046C322.878 997.046 325.211 994.712 325.211 991.832C325.211 988.953 322.878 986.618 320 986.618C317.123 986.618 314.79 988.953 314.79 991.832C314.79 994.712 317.123 997.046 320 997.046Z",
                fill: "url(#paint232_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M400 997.046C402.878 997.046 405.211 994.712 405.211 991.832C405.211 988.953 402.878 986.618 400 986.618C397.123 986.618 394.79 988.953 394.79 991.832C394.79 994.712 397.123 997.046 400 997.046Z",
                fill: "url(#paint233_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M480.001 997.046C482.878 997.046 485.211 994.712 485.211 991.832C485.211 988.953 482.878 986.618 480.001 986.618C477.123 986.618 474.79 988.953 474.79 991.832C474.79 994.712 477.123 997.046 480.001 997.046Z",
                fill: "url(#paint234_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M560 997.046C562.878 997.046 565.211 994.712 565.211 991.832C565.211 988.953 562.878 986.618 560 986.618C557.123 986.618 554.79 988.953 554.79 991.832C554.79 994.712 557.123 997.046 560 997.046Z",
                fill: "url(#paint235_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M640 997.046C642.878 997.046 645.211 994.712 645.211 991.832C645.211 988.953 642.878 986.618 640 986.618C637.123 986.618 634.79 988.953 634.79 991.832C634.79 994.712 637.123 997.046 640 997.046Z",
                fill: "url(#paint236_radial_112_2360)"
            }), s.jsx("path", {
                d: "M720 997.046C722.878 997.046 725.211 994.712 725.211 991.832C725.211 988.953 722.878 986.618 720 986.618C717.122 986.618 714.79 988.953 714.79 991.832C714.79 994.712 717.122 997.046 720 997.046Z",
                fill: "url(#paint237_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M800 997.046C802.878 997.046 805.211 994.712 805.211 991.832C805.211 988.953 802.878 986.618 800 986.618C797.123 986.618 794.79 988.953 794.79 991.832C794.79 994.712 797.123 997.046 800 997.046Z",
                fill: "url(#paint238_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M880 997.046C882.878 997.046 885.211 994.712 885.211 991.832C885.211 988.953 882.878 986.618 880 986.618C877.122 986.618 874.79 988.953 874.79 991.832C874.79 994.712 877.122 997.046 880 997.046Z",
                fill: "url(#paint239_radial_112_2360)"
            }), s.jsx("path", {
                d: "M960 997.046C962.877 997.046 965.21 994.712 965.21 991.832C965.21 988.953 962.877 986.618 960 986.618C957.122 986.618 954.789 988.953 954.789 991.832C954.789 994.712 957.122 997.046 960 997.046Z",
                fill: "url(#paint240_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1040 997.046C1042.88 997.046 1045.21 994.712 1045.21 991.832C1045.21 988.953 1042.88 986.618 1040 986.618C1037.12 986.618 1034.79 988.953 1034.79 991.832C1034.79 994.712 1037.12 997.046 1040 997.046Z",
                fill: "url(#paint241_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1120 997.046C1122.88 997.046 1125.21 994.712 1125.21 991.832C1125.21 988.953 1122.88 986.618 1120 986.618C1117.12 986.618 1114.79 988.953 1114.79 991.832C1114.79 994.712 1117.12 997.046 1120 997.046Z",
                fill: "url(#paint242_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1200 997.046C1202.88 997.046 1205.21 994.712 1205.21 991.832C1205.21 988.953 1202.88 986.618 1200 986.618C1197.12 986.618 1194.79 988.953 1194.79 991.832C1194.79 994.712 1197.12 997.046 1200 997.046Z",
                fill: "url(#paint243_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1280 997.046C1282.88 997.046 1285.21 994.712 1285.21 991.832C1285.21 988.953 1282.88 986.618 1280 986.618C1277.12 986.618 1274.79 988.953 1274.79 991.832C1274.79 994.712 1277.12 997.046 1280 997.046Z",
                fill: "url(#paint244_radial_112_2360)"
            }), s.jsx("path", {
                d: "M1360 997.046C1362.88 997.046 1365.21 994.712 1365.21 991.832C1365.21 988.953 1362.88 986.618 1360 986.618C1357.12 986.618 1354.79 988.953 1354.79 991.832C1354.79 994.712 1357.12 997.046 1360 997.046Z",
                fill: "url(#paint245_radial_112_2360)"
            }), s.jsx("path", {
                opacity: "0.35",
                d: "M1440 997.046C1442.88 997.046 1445.21 994.712 1445.21 991.832C1445.21 988.953 1442.88 986.618 1440 986.618C1437.12 986.618 1434.79 988.953 1434.79 991.832C1434.79 994.712 1437.12 997.046 1440 997.046Z",
                fill: "url(#paint246_radial_112_2360)"
            })]
        }), s.jsxs("defs", {
            children: [s.jsxs("radialGradient", {
                id: "paint0_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 31.1653) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint1_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 31.1653) rotate(90) scale(5.21415 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint2_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 31.1653) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint3_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 31.1653) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint4_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 31.1653) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint5_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 31.1653) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint6_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 31.1653) rotate(90) scale(5.21415 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint7_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 31.1653) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint8_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 31.1653) rotate(90) scale(5.21415 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint9_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 31.1653) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint10_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 31.1653) rotate(90) scale(5.21415 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint11_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 31.1653) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint12_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 31.1653) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint13_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 31.1653) rotate(90) scale(5.21415 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint14_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 31.1653) rotate(90) scale(5.21415 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint15_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 31.1653) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint16_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 31.1653) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint17_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 31.1653) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint18_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 31.1653) rotate(90) scale(5.21415 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint19_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 111.221) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint20_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 111.221) rotate(90) scale(5.21415 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint21_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 111.221) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint22_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 111.221) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint23_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 111.221) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint24_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 111.221) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint25_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 111.221) rotate(90) scale(5.21415 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint26_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 111.221) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint27_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 111.221) rotate(90) scale(5.21415 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint28_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 111.221) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint29_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 111.221) rotate(90) scale(5.21415 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint30_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 111.221) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint31_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 111.221) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint32_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 111.221) rotate(90) scale(5.21415 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint33_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 111.221) rotate(90) scale(5.21415 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint34_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 111.221) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint35_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 111.221) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint36_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 111.221) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint37_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 111.221) rotate(90) scale(5.21415 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint38_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 191.277) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint39_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 191.277) rotate(90) scale(5.21415 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint40_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 191.277) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint41_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 191.277) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint42_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 191.277) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint43_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 191.277) rotate(90) scale(5.21415 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint44_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 191.277) rotate(90) scale(5.21415 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint45_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 191.277) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint46_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 191.277) rotate(90) scale(5.21415 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint47_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 191.277) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint48_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 191.277) rotate(90) scale(5.21415 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint49_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 191.277) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint50_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 191.277) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint51_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 191.277) rotate(90) scale(5.21415 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint52_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 191.277) rotate(90) scale(5.21415 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint53_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 191.277) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint54_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 191.277) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint55_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 191.277) rotate(90) scale(5.21415 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint56_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 191.277) rotate(90) scale(5.21415 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint57_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 271.332) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint58_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 271.332) rotate(90) scale(5.21413 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint59_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 271.332) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint60_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 271.332) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint61_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 271.332) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint62_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 271.332) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint63_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 271.332) rotate(90) scale(5.21413 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint64_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 271.332) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint65_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 271.332) rotate(90) scale(5.21413 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint66_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 271.332) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint67_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 271.332) rotate(90) scale(5.21413 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint68_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 271.332) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint69_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 271.332) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint70_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 271.332) rotate(90) scale(5.21413 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint71_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 271.332) rotate(90) scale(5.21413 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint72_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 271.332) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint73_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 271.332) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint74_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 271.332) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint75_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 271.332) rotate(90) scale(5.21413 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint76_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 351.388) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint77_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 351.388) rotate(90) scale(5.21416 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint78_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 351.388) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint79_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 351.388) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint80_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 351.388) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint81_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 351.388) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint82_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 351.388) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint83_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 351.388) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint84_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 351.388) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint85_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 351.388) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint86_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 351.388) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint87_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 351.388) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint88_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 351.388) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint89_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 351.388) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint90_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 351.388) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint91_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 351.388) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint92_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 351.388) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint93_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 351.388) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint94_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 351.388) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint95_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 431.444) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint96_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 431.444) rotate(90) scale(5.21413 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint97_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 431.444) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint98_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 431.444) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint99_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 431.444) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint100_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 431.444) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint101_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 431.444) rotate(90) scale(5.21413 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint102_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 431.444) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint103_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 431.444) rotate(90) scale(5.21413 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint104_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 431.444) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint105_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 431.444) rotate(90) scale(5.21413 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint106_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 431.444) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint107_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 431.444) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint108_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 431.444) rotate(90) scale(5.21413 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint109_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 431.444) rotate(90) scale(5.21413 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint110_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 431.444) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint111_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 431.444) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint112_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 431.444) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint113_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 431.444) rotate(90) scale(5.21413 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint114_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 511.499) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint115_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 511.499) rotate(90) scale(5.21416 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint116_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 511.499) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint117_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 511.499) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint118_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 511.499) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint119_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 511.499) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint120_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 511.499) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint121_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 511.499) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint122_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 511.499) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint123_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 511.499) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint124_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 511.499) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint125_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 511.499) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint126_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 511.499) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint127_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 511.499) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint128_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 511.499) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint129_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 511.499) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint130_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 511.499) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint131_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 511.499) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint132_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 511.499) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint133_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 591.555) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint134_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 591.555) rotate(90) scale(5.21413 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint135_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 591.555) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint136_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 591.555) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint137_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 591.555) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint138_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 591.555) rotate(90) scale(5.21413 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint139_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 591.555) rotate(90) scale(5.21413 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint140_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 591.555) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint141_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 591.555) rotate(90) scale(5.21413 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint142_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 591.555) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint143_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 591.555) rotate(90) scale(5.21413 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint144_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 591.555) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint145_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 591.555) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint146_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 591.555) rotate(90) scale(5.21413 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint147_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 591.555) rotate(90) scale(5.21413 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint148_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 591.555) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint149_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 591.555) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint150_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 591.555) rotate(90) scale(5.21413 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint151_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 591.555) rotate(90) scale(5.21413 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint152_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 671.611) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint153_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 671.611) rotate(90) scale(5.21416 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint154_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 671.611) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint155_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 671.611) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint156_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 671.611) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint157_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 671.611) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint158_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 671.611) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint159_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 671.611) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint160_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 671.611) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint161_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 671.611) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint162_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 671.611) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint163_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 671.611) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint164_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 671.611) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint165_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 671.611) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint166_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 671.611) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint167_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 671.611) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint168_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 671.611) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint169_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 671.611) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint170_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 671.611) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint171_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 751.666) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint172_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 751.666) rotate(90) scale(5.21416 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint173_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 751.666) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint174_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 751.666) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint175_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 751.666) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint176_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 751.666) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint177_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 751.666) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint178_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 751.666) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint179_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 751.666) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint180_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 751.666) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint181_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 751.666) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint182_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 751.666) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint183_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 751.666) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint184_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 751.666) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint185_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 751.666) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint186_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 751.666) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint187_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 751.666) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint188_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 751.666) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint189_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 751.666) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint190_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 831.721) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint191_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 831.721) rotate(90) scale(5.2141 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint192_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 831.721) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint193_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 831.721) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint194_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 831.721) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint195_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 831.721) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint196_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 831.721) rotate(90) scale(5.2141 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint197_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 831.721) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint198_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 831.721) rotate(90) scale(5.2141 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint199_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 831.721) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint200_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 831.721) rotate(90) scale(5.2141 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint201_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 831.721) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint202_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 831.721) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint203_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 831.721) rotate(90) scale(5.2141 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint204_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 831.721) rotate(90) scale(5.2141 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint205_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 831.721) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint206_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 831.721) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint207_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 831.721) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint208_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 831.721) rotate(90) scale(5.2141 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint209_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 911.777) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint210_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 911.777) rotate(90) scale(5.2141 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint211_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 911.777) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint212_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 911.777) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint213_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 911.777) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint214_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 911.777) rotate(90) scale(5.2141 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint215_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 911.777) rotate(90) scale(5.2141 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint216_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 911.777) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint217_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 911.777) rotate(90) scale(5.2141 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint218_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 911.777) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint219_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 911.777) rotate(90) scale(5.2141 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint220_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 911.777) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint221_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 911.777) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint222_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 911.777) rotate(90) scale(5.2141 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint223_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 911.777) rotate(90) scale(5.2141 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint224_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 911.777) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint225_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 911.777) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint226_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 911.777) rotate(90) scale(5.2141 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint227_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 911.777) rotate(90) scale(5.2141 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint228_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(0.000198364 991.832) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint229_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(79.9998 991.832) rotate(90) scale(5.21416 5.21052)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint230_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(160 991.832) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint231_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(240 991.832) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint232_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(320 991.832) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint233_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(400 991.832) rotate(90) scale(5.21416 5.21053)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint234_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(480.001 991.832) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint235_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(560 991.832) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint236_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(640 991.832) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint237_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(720 991.832) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint238_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(800 991.832) rotate(90) scale(5.21416 5.21051)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint239_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(880 991.832) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint240_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(960 991.832) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint241_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1040 991.832) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint242_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1120 991.832) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint243_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1200 991.832) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint244_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1280 991.832) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint245_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1360 991.832) rotate(90) scale(5.21416 5.21054)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsxs("radialGradient", {
                id: "paint246_radial_112_2360",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1440 991.832) rotate(90) scale(5.21416 5.21049)",
                children: [s.jsx("stop", {
                    "stop-color": "#4CCC81"
                }), s.jsx("stop", {
                    offset: "0.276042",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0.1"
                })]
            }), s.jsx("clipPath", {
                id: "clip0_112_2360",
                children: s.jsx("rect", {
                    width: "1440",
                    height: "1441",
                    fill: "white",
                    transform: "translate(0 -209)"
                })
            })]
        })]
    }),
    D0 = ({
        classShape: e
    }) => s.jsxs("svg", {
        className: `filter backdrop-blur-lg rounded-[8px] sm:rounded-[12px] ${e}`,
        viewBox: "0 0 258 69",
        width: "100%",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [s.jsxs("g", {
            filter: "url(#filter0_b_112_2365)",
            children: [s.jsx("rect", {
                x: "1",
                y: "1.39648",
                className: "w-full",
                height: "66.1654",
                rx: "12",
                fill: "url(#paint0_radial_112_2365)",
                "fill-opacity": "0.2"
            }), s.jsx("rect", {
                x: "1",
                y: "1.39648",
                className: "w-full",
                height: "66.1654",
                rx: "12",
                stroke: "url(#paint1_linear_112_2365)",
                "stroke-width": "2"
            })]
        }), s.jsxs("defs", {
            children: [s.jsxs("filter", {
                id: "filter0_b_112_2365",
                x: "-24",
                y: "-23.6035",
                className: "w-fit",
                height: "116.165",
                filterUnits: "userSpaceOnUse",
                "color-interpolation-filters": "sRGB",
                children: [s.jsx("feFlood", {
                    "flood-opacity": "0",
                    result: "BackgroundImageFix"
                }), s.jsx("feGaussianBlur", { in: "BackgroundImageFix",
                    stdDeviation: "12"
                }), s.jsx("feComposite", {
                    in2: "SourceAlpha",
                    operator: "in",
                    result: "effect1_backgroundBlur_112_2365"
                }), s.jsx("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_backgroundBlur_112_2365",
                    result: "shape"
                })]
            }), s.jsxs(I.radialGradient, {
                id: "paint0_radial_112_2365",
                cx: "0",
                cy: "0",
                initial: {
                    r: 0
                },
                animate: {
                    r: 1
                },
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1 1.39648) rotate(14.4915) scale(264.412 128.121)",
                children: [s.jsx("stop", {
                    "stop-color": "#00C16A"
                }), s.jsx("stop", {
                    offset: "1",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0"
                })]
            }), s.jsxs(I.linearGradient, {
                animate: {
                    x1: [0, 500],
                    transition: {
                        duration: 5,
                        ease: "easeInOut",
                        repeat: 1 / 0,
                        repeatType: "reverse"
                    }
                },
                id: "paint1_linear_112_2365",
                y1: "1.39648",
                x2: "129",
                y2: "67.5619",
                gradientUnits: "userSpaceOnUse",
                children: [s.jsx("stop", {
                    "stop-color": "#00C16A"
                }), s.jsx("stop", {
                    offset: "1",
                    "stop-color": "#4CCC81",
                    "stop-opacity": "0"
                })]
            })]
        })]
    }),
    Ry = () => {
        const e = {
                hidden: {
                    opacity: 0,
                    y: -40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delayChildren: .1,
                        staggerChildren: .2
                    }
                }
            },
            t = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1
                }
            };
        return s.jsxs("div", {
            id: "home",
            className: "relative w-full bg-gradient-to-b select-none from-[#F5F8FA] to-[#E8F2FF] h-screen flex justify-center items-center pb-[180px] overflow-y-hidden pt-52 md:pt-72",
            children: [s.jsx(Pi, {
                children: s.jsxs("div", {
                    className: "flex md:flex-row flex-col-reverse justify-between items-center w-full relative z-10",
                    children: [s.jsxs(I.div, {
                        className: "flex flex-col w-full",
                        variants: e,
                        initial: "hidden",
                        animate: "visible",
                        children: [s.jsxs("div", {
                            className: "text-[#172635]",
                            children: [s.jsx(I.h3, {
                                variants: t,
                                whileHover: {
                                    scale: 1.1
                                },
                                className: "text-2xl sm:text-[30px] md:text-[40px] md:leading-[60px] font-medium w-fit",
                                children: "Hi, I’m"
                            }), s.jsxs(I.h1, {
                                variants: t,
                                whileHover: {
                                    scale: 1.1
                                },
                                className: "text-3xl sm:text-[42px] md:text-[56px] font-medium sm:leading-10 md:leading-[60px] w-fit",
                                children: ["Rayan Ramazan,", " "]
                            })]
                        }), s.jsxs(I.div, {
                            variants: t,
                            className: "text-[#172635]/60 sm:text-xl md:text-2xl sm:leading-[30px] md:leading-[36px] font-medium mt-2 sm:mt-4",
                            children: [s.jsx("span", {
                                children: "A Passionate"
                            }), s.jsx("span", {
                                className: "text-[#00C16A]",
                                children: " <Frontend Web Development /> "
                            }), s.jsx("span", {
                                children: "with 4 years experience creating user friendly websites."
                            })]
                        }), s.jsx(I.div, {
                            variants: t,
                            onClick: C2,
                            whileHover: {
                                y: "-6px"
                            },
                            className: "mt-5 md:mt-[30px] h-full w-fit",
                            children: s.jsx(wf, {
                                text: "Book a call",
                                heightButton: "h-[36px] sm:h-[42.15px]",
                                fontSize: "text-base sm:text-xl"
                            })
                        })]
                    }), s.jsxs(I.div, {
                        variants: e,
                        initial: "hidden",
                        animate: "visible",
                        className: "w-full relative md:mt-0 xs:mt-16 sm:mt-20",
                        children: [s.jsx(I.img, {
                            variants: t,
                            src: _9,
                            alt: "robotic",
                            className: "w-[200px] xs:w-[240px] md:w-[300px] h-full md:h-[480px] xl:w-[360px] xl:h-[595.04px] text-end mx-auto md:mx-0 md:ml-auto object-cover"
                        }), s.jsx(I.div, {
                            animate: {
                                y: ["-10px", "10px"],
                                transition: {
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: 1 / 0,
                                    repeatType: "reverse"
                                }
                            },
                            className: " absolute bottom-32 md:bottom-40 xl:bottom-48 right-0 xs:right-0 md:right-0 xl:-right-20",
                            children: s.jsxs(I.div, {
                                variants: t,
                                className: "relative w-fit",
                                children: [s.jsx(D0, {
                                    classShape: "w-[150px] sm:w-[200px] lg:w-[256px] "
                                }), s.jsxs("div", {
                                    className: " w-full flex items-center justify-center gap-1 sm:gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                    children: [s.jsxs("svg", {
                                        className: "w-[26px] sm:w-[36px] h-[21px] sm:h-[31px] xl:w-[50px] xl:h-[45px]",
                                        width: "50",
                                        height: "45",
                                        viewBox: "0 0 50 45",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [s.jsx("ellipse", {
                                            cx: "13.8886",
                                            cy: "15",
                                            rx: "13.8886",
                                            ry: "13.8886",
                                            fill: "url(#paint0_linear_133_6005)"
                                        }), s.jsx("g", {
                                            filter: "url(#filter0_b_133_6005)",
                                            children: s.jsxs("g", {
                                                filter: "url(#filter1_b_133_6005)",
                                                children: [s.jsx("path", {
                                                    "fill-rule": "evenodd",
                                                    "clip-rule": "evenodd",
                                                    d: "M46.2966 22.2223C46.2966 32.4496 38.0057 40.7404 27.7784 40.7404C17.5511 40.7404 9.26025 32.4496 9.26025 22.2223C9.26025 11.995 17.5511 3.7041 27.7784 3.7041C38.0057 3.7041 46.2966 11.995 46.2966 22.2223Z",
                                                    fill: "#00C16A",
                                                    "fill-opacity": "0.35"
                                                }), s.jsx("path", {
                                                    d: "M27.7784 41.2404C38.2818 41.2404 46.7966 32.7257 46.7966 22.2223C46.7966 11.7188 38.2818 3.2041 27.7784 3.2041C17.275 3.2041 8.76025 11.7188 8.76025 22.2223C8.76025 32.7257 17.275 41.2404 27.7784 41.2404Z",
                                                    stroke: "url(#paint1_linear_133_6005)",
                                                    "stroke-linecap": "round"
                                                })]
                                            })
                                        }), s.jsx("g", {
                                            filter: "url(#filter1_b_133_6005)",
                                            children: s.jsx("g", {
                                                filter: "url(#filter1_b_133_6005)",
                                                children: s.jsx("path", {
                                                    "fill-rule": "evenodd",
                                                    "clip-rule": "evenodd",
                                                    d: "M17.8802 24.6926C18.5612 24.3395 19.3994 24.6053 19.7525 25.2863C20.2508 26.2474 21.2875 27.4693 22.7263 28.4476C24.1525 29.4174 25.8914 30.0922 27.7786 30.0922C29.6658 30.0922 31.4047 29.4174 32.8309 28.4476C34.2697 27.4693 35.3064 26.2474 35.8047 25.2863C36.1578 24.6053 36.996 24.3395 37.677 24.6926C38.3579 25.0457 38.6237 25.884 38.2706 26.5649C37.5344 27.9847 36.1638 29.5405 34.3927 30.7447C32.6091 31.9575 30.3358 32.8699 27.7786 32.8699C25.2214 32.8699 22.9481 31.9575 21.1645 30.7447C19.3934 29.5405 18.0228 27.9847 17.2866 26.5649C16.9335 25.884 17.1993 25.0457 17.8802 24.6926ZM22.2232 16.6665C23.2459 16.6665 24.075 15.8374 24.075 14.8147C24.075 13.792 23.2459 12.9629 22.2232 12.9629C21.2004 12.9629 20.3713 13.792 20.3713 14.8147C20.3713 15.8374 21.2004 16.6665 22.2232 16.6665ZM33.334 16.6665C34.3568 16.6665 35.1859 15.8374 35.1859 14.8147C35.1859 13.792 34.3568 12.9629 33.334 12.9629C32.3113 12.9629 31.4822 13.792 31.4822 14.8147C31.4822 15.8374 32.3113 16.6665 33.334 16.6665Z",
                                                    fill: "url(#paint2_linear_133_6005)"
                                                })
                                            })
                                        }), s.jsxs("defs", {
                                            children: [s.jsxs("filter", {
                                                id: "filter0_b_133_6005",
                                                x: "-15.7397",
                                                y: "-21.2959",
                                                width: "87.0361",
                                                height: "87.0361",
                                                filterUnits: "userSpaceOnUse",
                                                "color-interpolation-filters": "sRGB",
                                                children: [s.jsx("feFlood", {
                                                    "flood-opacity": "0",
                                                    result: "BackgroundImageFix"
                                                }), s.jsx("feGaussianBlur", { in: "BackgroundImageFix",
                                                    stdDeviation: "12"
                                                }), s.jsx("feComposite", {
                                                    in2: "SourceAlpha",
                                                    operator: "in",
                                                    result: "effect1_backgroundBlur_133_6005"
                                                }), s.jsx("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_backgroundBlur_133_6005",
                                                    result: "shape"
                                                })]
                                            }), s.jsxs("filter", {
                                                id: "filter1_b_133_6005",
                                                x: "-15.7397",
                                                y: "-21.2959",
                                                width: "87.0361",
                                                height: "87.0361",
                                                filterUnits: "userSpaceOnUse",
                                                "color-interpolation-filters": "sRGB",
                                                children: [s.jsx("feFlood", {
                                                    "flood-opacity": "0",
                                                    result: "BackgroundImageFix"
                                                }), s.jsx("feGaussianBlur", { in: "BackgroundImageFix",
                                                    stdDeviation: "12"
                                                }), s.jsx("feComposite", {
                                                    in2: "SourceAlpha",
                                                    operator: "in",
                                                    result: "effect1_backgroundBlur_133_6005"
                                                }), s.jsx("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_backgroundBlur_133_6005",
                                                    result: "shape"
                                                })]
                                            }), s.jsxs("filter", {
                                                id: "filter2_d_133_6005",
                                                x: "13.8745",
                                                y: "9.70706",
                                                width: "34.3197",
                                                height: "32.9305",
                                                filterUnits: "userSpaceOnUse",
                                                "color-interpolation-filters": "sRGB",
                                                children: [s.jsx("feFlood", {
                                                    "flood-opacity": "0",
                                                    result: "BackgroundImageFix"
                                                }), s.jsx("feColorMatrix", { in: "SourceAlpha",
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                    result: "hardAlpha"
                                                }), s.jsx("feOffset", {
                                                    dx: "3.25583",
                                                    dy: "3.25583"
                                                }), s.jsx("feGaussianBlur", {
                                                    stdDeviation: "3.25583"
                                                }), s.jsx("feColorMatrix", {
                                                    type: "matrix",
                                                    values: "0 0 0 0 0.376471 0 0 0 0 0.156863 0 0 0 0 0.811765 0 0 0 0.5 0"
                                                }), s.jsx("feBlend", {
                                                    mode: "normal",
                                                    in2: "BackgroundImageFix",
                                                    result: "effect1_dropShadow_133_6005"
                                                }), s.jsx("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow_133_6005",
                                                    result: "shape"
                                                })]
                                            }), s.jsxs("filter", {
                                                id: "filter3_d_133_6005",
                                                x: "13.8745",
                                                y: "9.70706",
                                                width: "34.3197",
                                                height: "32.9305",
                                                filterUnits: "userSpaceOnUse",
                                                "color-interpolation-filters": "sRGB",
                                                children: [s.jsx("feFlood", {
                                                    "flood-opacity": "0",
                                                    result: "BackgroundImageFix"
                                                }), s.jsx("feColorMatrix", { in: "SourceAlpha",
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                    result: "hardAlpha"
                                                }), s.jsx("feOffset", {
                                                    dx: "3.25583",
                                                    dy: "3.25583"
                                                }), s.jsx("feGaussianBlur", {
                                                    stdDeviation: "3.25583"
                                                }), s.jsx("feColorMatrix", {
                                                    type: "matrix",
                                                    values: "0 0 0 0 0.298039 0 0 0 0 0.8 0 0 0 0 0.505882 0 0 0 0.6 0"
                                                }), s.jsx("feBlend", {
                                                    mode: "normal",
                                                    in2: "BackgroundImageFix",
                                                    result: "effect1_dropShadow_133_6005"
                                                }), s.jsx("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow_133_6005",
                                                    result: "shape"
                                                })]
                                            }), s.jsxs("linearGradient", {
                                                id: "paint0_linear_133_6005",
                                                x1: "1.11622e-07",
                                                y1: "28.8886",
                                                x2: "28.3691",
                                                y2: "1.72963",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [s.jsx("stop", {
                                                    "stop-color": "#00C16A"
                                                }), s.jsx("stop", {
                                                    offset: "1",
                                                    "stop-color": "#49D07E"
                                                })]
                                            }), s.jsxs("linearGradient", {
                                                id: "paint1_linear_133_6005",
                                                x1: "9.26025",
                                                y1: "3.7041",
                                                x2: "46.3153",
                                                y2: "40.7216",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [s.jsx("stop", {
                                                    "stop-color": "white",
                                                    "stop-opacity": "0.25"
                                                }), s.jsx("stop", {
                                                    offset: "1",
                                                    "stop-color": "white",
                                                    "stop-opacity": "0"
                                                })]
                                            }), s.jsxs("linearGradient", {
                                                id: "paint2_linear_133_6005",
                                                x1: "27.9579",
                                                y1: "37.111",
                                                x2: "55.4073",
                                                y2: "8.32582",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [s.jsx("stop", {
                                                    "stop-color": "white"
                                                }), s.jsx("stop", {
                                                    offset: "1",
                                                    "stop-color": "white",
                                                    "stop-opacity": "0.2"
                                                })]
                                            })]
                                        })]
                                    }), s.jsx("span", {
                                        className: "sm:text-lg xl:text-[22px] font-medium text-[#172635] ",
                                        children: "Best Quality"
                                    })]
                                })]
                            })
                        }), s.jsx(I.div, {
                            animate: {
                                y: ["10px", "-10px"],
                                transition: {
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: 1 / 0,
                                    repeatType: "reverse"
                                }
                            },
                            className: " absolute bottom-16 xl:bottom-24 xs:left-0 sm:left-40 md:left-56 xl:left-[150px] w-fit",
                            children: s.jsxs("div", {
                                className: " relative",
                                children: [s.jsx(D0, {
                                    classShape: "w-[150px] sm:w-[200px] lg:w-[240px]"
                                }), s.jsxs("div", {
                                    className: " w-full flex items-center justify-center gap-1 sm:gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                    children: [s.jsxs("svg", {
                                        className: "w-[26px] sm:w-[36px] h-[30px] sm:h-[40px] xl:w-[50px] xl:h-[54px]",
                                        width: "50",
                                        height: "54",
                                        viewBox: "0 0 50 54",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [s.jsx("circle", {
                                            cx: "35.89",
                                            cy: "19.89",
                                            r: "13.89",
                                            fill: "url(#paint0_linear_133_6012)"
                                        }), s.jsx("g", {
                                            "clip-path": "url(#clip0_133_6012)",
                                            children: s.jsxs("g", {
                                                filter: "url(#filter0_b_133_6012)",
                                                children: [s.jsx("path", {
                                                    d: "M29.3317 12.0225C31.643 12.0225 33.4551 12.0224 34.9116 12.1414C36.3946 12.2626 37.6198 12.5134 38.7287 13.0785C40.5518 14.0074 42.034 15.4896 42.9629 17.3126C43.5279 18.4216 43.7787 19.6467 43.8999 21.1298C44.0189 22.5861 44.0189 24.3982 44.0189 26.7094V26.8229C44.0189 29.134 44.0189 30.9463 43.8999 32.4026C43.7787 33.8857 43.5279 35.1109 42.9629 36.2198C42.034 38.0429 40.5518 39.5251 38.7287 40.4539C37.6198 41.019 36.3946 41.2698 34.9116 41.391C33.4552 41.51 31.6431 41.51 29.332 41.51H25.4839V44.6002C26.5359 44.6738 27.5831 44.8393 28.6134 45.0969L31.2666 45.7602C31.9437 45.9295 32.3554 46.6156 32.1862 47.2927C32.0169 47.9698 31.3307 48.3815 30.6536 48.2122L28.0004 47.5489C26.7594 47.2387 25.4898 47.0835 24.2201 47.0835C22.9505 47.0835 21.6809 47.2387 20.4399 47.5489L17.7866 48.2122C17.1095 48.3815 16.4234 47.9698 16.2541 47.2927C16.0848 46.6156 16.4965 45.9295 17.1736 45.7602L19.8269 45.0969C20.8571 44.8393 21.9043 44.6738 22.9564 44.6002V41.51H19.1085C16.7973 41.51 14.9851 41.51 13.5287 41.391C12.0457 41.2698 10.8205 41.019 9.71154 40.4539C7.88848 39.5251 6.40629 38.0429 5.4774 36.2198C4.91236 35.1109 4.66154 33.8857 4.54037 32.4026C4.42137 30.9462 4.42138 29.1341 4.42139 26.8228V26.7097C4.42138 24.3983 4.42137 22.5862 4.54037 21.1298C4.66154 19.6467 4.91236 18.4216 5.4774 17.3126C6.40629 15.4896 7.88848 14.0074 9.71154 13.0785C10.8205 12.5134 12.0457 12.2626 13.5287 12.1414C14.9851 12.0224 16.7972 12.0225 19.1086 12.0225H29.3317Z",
                                                    fill: "#00C16A",
                                                    "fill-opacity": "0.35"
                                                }), s.jsx("path", {
                                                    d: "M34.9523 11.6431C33.4755 11.5224 31.6467 11.5225 29.3533 11.5225L29.3317 11.5225H19.1086L19.087 11.5225C16.7936 11.5225 14.9648 11.5224 13.488 11.6431C11.974 11.7668 10.6757 12.026 9.48454 12.633C7.5674 13.6098 6.00872 15.1685 5.03189 17.0856C4.42497 18.2768 4.16573 19.575 4.04203 21.0891C3.92137 22.5658 3.92138 24.3947 3.92139 26.6881L3.92139 26.7097V26.8228L3.92139 26.8444C3.92138 29.1377 3.92137 30.9666 4.04203 32.4434C4.16573 33.9574 4.42497 35.2557 5.03189 36.4468C6.00872 38.3639 7.5674 39.9226 9.48454 40.8995C10.6757 41.5064 11.974 41.7656 13.488 41.8893C14.9646 42.01 16.7936 42.01 19.0867 42.01H19.1085H22.4564V44.1398C21.5319 44.2278 20.6124 44.3851 19.7056 44.6118L17.0524 45.2751L17.1736 45.7602L17.0524 45.2751C16.1074 45.5114 15.5328 46.469 15.769 47.414C16.0053 48.359 16.9629 48.9335 17.9079 48.6973L20.5612 48.034C21.7624 47.7337 22.9912 47.5835 24.2201 47.5835C25.449 47.5835 26.6779 47.7337 27.8791 48.034L30.5324 48.6973C31.4774 48.9335 32.435 48.359 32.6712 47.414C32.9075 46.469 32.3329 45.5114 31.3879 45.2751L28.7346 44.6118C27.8279 44.3851 26.9084 44.2278 25.9839 44.1398V42.01H29.332H29.3538C31.6469 42.01 33.4756 42.01 34.9523 41.8893C36.4663 41.7656 37.7646 41.5064 38.9557 40.8995C40.8729 39.9226 42.4315 38.3639 43.4084 36.4468C44.0153 35.2557 44.2745 33.9574 44.3982 32.4434C44.5189 30.9666 44.5189 29.1376 44.5189 26.8444V26.8229V26.7094V26.6879C44.5189 24.3946 44.5189 22.5658 44.3982 21.0891C44.2745 19.575 44.0153 18.2768 43.4084 17.0856C42.4315 15.1685 40.8729 13.6098 38.9557 12.633C37.7646 12.026 36.4663 11.7668 34.9523 11.6431Z",
                                                    stroke: "url(#paint1_linear_133_6012)",
                                                    "stroke-linecap": "round"
                                                })]
                                            })
                                        }), s.jsxs("defs", {
                                            children: [s.jsxs("filter", {
                                                id: "filter0_b_133_6012",
                                                x: "-20.5786",
                                                y: "-12.9775",
                                                width: "89.5977",
                                                height: "86.2285",
                                                filterUnits: "userSpaceOnUse",
                                                "color-interpolation-filters": "sRGB",
                                                children: [s.jsx("feFlood", {
                                                    "flood-opacity": "0",
                                                    result: "BackgroundImageFix"
                                                }), s.jsx("feGaussianBlur", { in: "BackgroundImageFix",
                                                    stdDeviation: "12"
                                                }), s.jsx("feComposite", {
                                                    in2: "SourceAlpha",
                                                    operator: "in",
                                                    result: "effect1_backgroundBlur_133_6012"
                                                }), s.jsx("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_backgroundBlur_133_6012",
                                                    result: "shape"
                                                })]
                                            }), s.jsxs("linearGradient", {
                                                id: "paint0_linear_133_6012",
                                                x1: "22",
                                                y1: "33.78",
                                                x2: "50.3719",
                                                y2: "6.61831",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [s.jsx("stop", {
                                                    "stop-color": "#00C16A"
                                                }), s.jsx("stop", {
                                                    offset: "1",
                                                    "stop-color": "#49D07E"
                                                })]
                                            }), s.jsxs("linearGradient", {
                                                id: "paint1_linear_133_6012",
                                                x1: "4.42139",
                                                y1: "12.0225",
                                                x2: "40.5279",
                                                y2: "51.4474",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [s.jsx("stop", {
                                                    "stop-color": "white",
                                                    "stop-opacity": "0.25"
                                                }), s.jsx("stop", {
                                                    offset: "1",
                                                    "stop-color": "white",
                                                    "stop-opacity": "0"
                                                })]
                                            }), s.jsx("clipPath", {
                                                id: "clip0_133_6012",
                                                children: s.jsx("rect", {
                                                    width: "40.44",
                                                    height: "40.44",
                                                    fill: "white",
                                                    transform: "translate(4 10)"
                                                })
                                            })]
                                        })]
                                    }), s.jsx("span", {
                                        className: "sm:text-lg xl:text-[22px] font-medium text-[#172635] ",
                                        children: "Responsive"
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }), s.jsx(Uy, {
                classLine: "w-[549px] h-[832px] absolute right-0 top-0 sm:opacity-100 opacity-60"
            }), s.jsx(Ly, {
                classDot: "w-full h-[200rem] sm:h-[1232px] absolute"
            })]
        })
    },
    Dy = "/assets/animoji-DjCMkRl5.png",
    Ny = () => {
        const e = {
                hidden: {
                    y: -40
                },
                visible: {
                    y: 0,
                    transition: {
                        delayChildren: .1,
                        staggerChildren: .2,
                        repeat: 0
                    }
                }
            },
            t = {
                hidden: {
                    opacity: 0,
                    y: -20
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            };
        return s.jsx("div", {
            className: "mt-[40px] sm:mt-[60px]",
            id: "about-me",
            children: s.jsx(Pi, {
                children: s.jsxs(I.div, {
                    className: "w-full flex md:flex-row flex-col gap-[30px] sm:gap-[90px] md:gap-[70px]",
                    variants: e,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    children: [s.jsxs("div", {
                        className: " relative w-full h-[260px] select-none",
                        children: [s.jsx(I.img, {
                            variants: t,
                            src: Dy,
                            className: "min-w-[210px] sm:min-w-[260px] h-[210px] sm:h-[260px] object-cover md:mx-0 mx-auto select-none",
                            alt: "emoji"
                        }), s.jsxs("div", {
                            className: "absolute md:px-0 px-6 left-1/2 transform -translate-x-1/2 md:w-full bottom-1 sm:-bottom-12 filter backdrop-blur-lg bg-[#00C16A]/10 rounded-[12px] border border-[#00C16A]/50 py-[8px] sm:py-[10px] flex justify-center items-center flex-col",
                            children: [s.jsx(I.h1, {
                                variants: t,
                                className: "sm:text-xl sm:font-normal font-medium leading-[31px] mb-[4px]",
                                children: "Rayan Ramazan"
                            }), s.jsxs("div", {
                                className: "flex gap-2",
                                children: [s.jsx(I.a, {
                                    variants: t,
                                    href: "https://instagram.com/rayan.ramazan",
                                    "aria-label": "link",
                                    className: "hover:-translate-y-1 duration-300",
                                    children: s.jsxs("svg", {
                                        className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                        viewBox: "0 0 23 23",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [s.jsx("path", {
                                            d: "M11.5 13.5125C10.4219 13.5125 9.4875 12.65 9.4875 11.5C9.4875 10.4219 10.35 9.4875 11.5 9.4875C12.5781 9.4875 13.5125 10.35 13.5125 11.5C13.5125 12.5781 12.5781 13.5125 11.5 13.5125Z",
                                            fill: "#172635"
                                        }), s.jsx("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M13.9437 6.6125H9.05625C8.48125 6.68437 8.19375 6.75625 7.97813 6.82812C7.69063 6.9 7.475 7.04375 7.25938 7.25937C7.08875 7.43 7.00814 7.60062 6.9107 7.80685C6.88502 7.8612 6.8581 7.91817 6.82812 7.97812C6.81701 8.01148 6.80417 8.04656 6.79041 8.08415C6.71521 8.28958 6.6125 8.5702 6.6125 9.05625V13.9437C6.68438 14.5187 6.75625 14.8062 6.82812 15.0219C6.9 15.3094 7.04375 15.525 7.25938 15.7406C7.43 15.9112 7.60062 15.9919 7.80685 16.0893C7.86125 16.115 7.91812 16.1419 7.97813 16.1719C8.01148 16.183 8.04656 16.1958 8.08415 16.2096C8.28958 16.2848 8.5702 16.3875 9.05625 16.3875H13.9437C14.5187 16.3156 14.8063 16.2437 15.0219 16.1719C15.3094 16.1 15.525 15.9562 15.7406 15.7406C15.9112 15.57 15.9919 15.3994 16.0893 15.1931C16.115 15.1388 16.1419 15.0819 16.1719 15.0219C16.183 14.9885 16.1958 14.9534 16.2096 14.9158C16.2848 14.7104 16.3875 14.4298 16.3875 13.9437V9.05625C16.3156 8.48125 16.2437 8.19375 16.1719 7.97812C16.1 7.69062 15.9562 7.475 15.7406 7.25937C15.57 7.08875 15.3994 7.00814 15.1931 6.9107C15.1388 6.88504 15.0818 6.85807 15.0219 6.82812C14.9885 6.817 14.9534 6.80416 14.9158 6.7904C14.7104 6.71521 14.4298 6.6125 13.9437 6.6125ZM11.5 8.40937C9.775 8.40937 8.40938 9.775 8.40938 11.5C8.40938 13.225 9.775 14.5906 11.5 14.5906C13.225 14.5906 14.5906 13.225 14.5906 11.5C14.5906 9.775 13.225 8.40937 11.5 8.40937ZM15.3812 8.3375C15.3812 8.73445 15.0595 9.05625 14.6625 9.05625C14.2655 9.05625 13.9437 8.73445 13.9437 8.3375C13.9437 7.94054 14.2655 7.61875 14.6625 7.61875C15.0595 7.61875 15.3812 7.94054 15.3812 8.3375Z",
                                            fill: "#172635"
                                        }), s.jsx("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5ZM9.05625 5.53437H13.9437C14.5906 5.60625 15.0219 5.67812 15.3812 5.82187C15.8125 6.0375 16.1 6.18125 16.4594 6.54062C16.8188 6.9 17.0344 7.25937 17.1781 7.61875C17.3219 7.97812 17.4656 8.40937 17.4656 9.05625V13.9437C17.3937 14.5906 17.3219 15.0219 17.1781 15.3812C16.9625 15.8125 16.8188 16.1 16.4594 16.4594C16.1 16.8187 15.7406 17.0344 15.3812 17.1781C15.0219 17.3219 14.5906 17.4656 13.9437 17.4656H9.05625C8.40938 17.3937 7.97813 17.3219 7.61875 17.1781C7.1875 16.9625 6.9 16.8187 6.54063 16.4594C6.18125 16.1 5.96563 15.7406 5.82188 15.3812C5.67813 15.0219 5.53437 14.5906 5.53437 13.9437V9.05625C5.60625 8.40937 5.67813 7.97812 5.82188 7.61875C6.0375 7.1875 6.18125 6.9 6.54063 6.54062C6.9 6.18125 7.25938 5.96562 7.61875 5.82187C7.97813 5.67812 8.40938 5.53437 9.05625 5.53437Z",
                                            fill: "#172635"
                                        })]
                                    })
                                }), s.jsx(I.a, {
                                    variants: t,
                                    href: "https://twitter.com/rayankrd_",
                                    "aria-label": "link",
                                    className: "hover:-translate-y-1 duration-300",
                                    children: s.jsx("svg", {
                                        className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: s.jsx("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM16.575 8.625C17.1 8.55 17.55 8.475 18 8.25C17.7 8.775 17.25 9.225 16.725 9.525C16.875 13.05 14.325 16.875 9.75 16.875C8.4 16.875 7.125 16.425 6 15.75C7.275 15.9 8.625 15.525 9.525 14.85C8.4 14.85 7.5 14.1 7.2 13.125C7.575 13.2 7.95 13.125 8.325 13.05C7.2 12.75 6.375 11.7 6.375 10.575C6.75 10.725 7.125 10.875 7.5 10.875C6.45 10.125 6.075 8.7 6.75 7.575C8.025 9.075 9.825 10.05 11.85 10.125C11.475 8.625 12.675 7.125 14.25 7.125C14.925 7.125 15.6 7.425 16.05 7.875C16.65 7.725 17.175 7.575 17.625 7.275C17.475 7.875 17.1 8.325 16.575 8.625Z",
                                            fill: "#172635"
                                        })
                                    })
                                }), s.jsx(I.a, {
                                    variants: t,
                                    href: "https://t.me/rayankrd",
                                    "aria-label": "link",
                                    className: "hover:-translate-y-1 duration-300",
                                    children: s.jsx("svg", {
                                        className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: s.jsx("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12.5189 9.00553C11.4441 9.45256 9.29616 10.3778 6.07494 11.7812C5.55186 11.9892 5.27785 12.1927 5.25291 12.3917C5.21075 12.728 5.63186 12.8604 6.2053 13.0407C6.28331 13.0652 6.36413 13.0906 6.44699 13.1176C7.01117 13.301 7.77009 13.5155 8.16462 13.524C8.5225 13.5318 8.92193 13.3842 9.36292 13.0814C12.3726 11.0498 13.9262 10.0229 14.0238 10.0008C14.0926 9.98516 14.1879 9.96553 14.2525 10.023C14.3171 10.0804 14.3108 10.1891 14.3039 10.2183C14.2622 10.3962 12.6092 11.9329 11.7538 12.7282C11.4871 12.9762 11.2979 13.152 11.2593 13.1922C11.1726 13.2822 11.0844 13.3673 10.9995 13.4491C10.4754 13.9543 10.0823 14.3332 11.0213 14.952C11.4725 15.2494 11.8336 15.4952 12.1938 15.7405C12.5872 16.0084 12.9795 16.2757 13.4872 16.6084C13.6165 16.6932 13.7401 16.7813 13.8604 16.8671C14.3182 17.1934 14.7295 17.4867 15.2376 17.4399C15.5329 17.4127 15.8379 17.1351 15.9928 16.307C16.3588 14.3501 17.0784 10.1101 17.2447 8.36285C17.2592 8.20977 17.2409 8.01386 17.2262 7.92786C17.2115 7.84186 17.1807 7.71932 17.0689 7.62862C16.9365 7.52119 16.7322 7.49854 16.6407 7.50007C16.2251 7.50747 15.5875 7.72919 12.5189 9.00553Z",
                                            fill: "#172635"
                                        })
                                    })
                                }), s.jsx(I.a, {
                                    variants: t,
                                    href: "https://www.behance.net/rayanramazan",
                                    "aria-label": "link",
                                    className: "hover:-translate-y-1 duration-300",
                                    children: s.jsxs("svg", {
                                        className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [s.jsx("path", {
                                            d: "M9.99652 11.0209C9.81001 11.1541 9.57022 11.2341 9.27714 11.2341H7.62525V9.50224H9.17057C9.33043 9.50224 9.46365 9.50224 9.59686 9.52888C9.73008 9.55553 9.83665 9.60881 9.94322 9.6621C10.0498 9.74203 10.1297 9.82196 10.183 9.92854C10.2363 10.0351 10.2629 10.195 10.2629 10.3548C10.2629 10.6479 10.183 10.8877 9.99652 11.0209Z",
                                            fill: "#172635"
                                        }), s.jsx("path", {
                                            d: "M9.81001 14.3247C9.6768 14.3513 9.51693 14.378 9.35707 14.378H7.62525V12.3264H9.38372C9.73008 12.3264 10.0232 12.4064 10.2363 12.5662C10.4495 12.7527 10.556 13.0192 10.556 13.3922C10.556 13.5787 10.5027 13.7385 10.4495 13.8718C10.3695 14.005 10.2896 14.0849 10.183 14.1648C10.0764 14.2448 9.94323 14.2981 9.81001 14.3247Z",
                                            fill: "#172635"
                                        }), s.jsx("path", {
                                            d: "M15.3518 11.2607C15.6982 11.2607 15.9913 11.3673 16.1778 11.5538C16.3643 11.7403 16.4975 12.0067 16.5508 12.4064H14.1529C14.1529 12.3181 14.1712 12.2298 14.1926 12.1264C14.197 12.1049 14.2016 12.0829 14.2062 12.06C14.2328 11.9268 14.2861 11.7936 14.3927 11.687C14.4993 11.5804 14.6058 11.4739 14.7657 11.3939C14.9256 11.314 15.1121 11.2607 15.3518 11.2607Z",
                                            fill: "#172635"
                                        }), s.jsx("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM10.4495 8.35657C10.1564 8.27664 9.83666 8.25 9.49029 8.25H6V15.6036H9.57022C9.88994 15.6036 10.2097 15.5503 10.5294 15.4704C10.8491 15.3904 11.1422 15.2572 11.382 15.0974C11.6218 14.9375 11.8349 14.6977 11.9681 14.4313C12.1013 14.1648 12.1813 13.8451 12.1813 13.4721C12.1813 13.0192 12.0481 12.6195 11.8349 12.2998C11.6218 11.9801 11.2754 11.7403 10.8225 11.6071C11.1422 11.4472 11.4086 11.2341 11.5685 10.9943C11.755 10.7545 11.8349 10.4348 11.8349 10.0618C11.8349 9.74203 11.7816 9.44895 11.6751 9.20916C11.5685 8.96937 11.4086 8.78287 11.1955 8.64965C10.9823 8.51643 10.7425 8.40986 10.4495 8.35657ZM15.4584 14.6711C15.0321 14.6711 14.7124 14.5645 14.4993 14.3513C14.2861 14.1382 14.1262 13.7385 14.1262 13.3123H17.9895C18.0162 12.886 17.9895 12.5129 17.9363 12.1399C17.8297 11.7669 17.6698 11.4206 17.4567 11.1275C17.2435 10.8078 16.9771 10.5946 16.6307 10.4081C16.2844 10.2216 15.8847 10.1417 15.4318 10.1417C15.0055 10.1417 14.6591 10.2216 14.3128 10.3548C13.993 10.488 13.7 10.7012 13.4602 10.941C13.2204 11.2074 13.0339 11.5005 12.9007 11.8469C12.7674 12.1932 12.7141 12.5662 12.7141 12.9659C12.7141 13.3922 12.7674 13.7652 12.9007 14.1116C13.0072 14.4579 13.1937 14.751 13.4335 14.9908C13.6733 15.2572 13.9397 15.4437 14.2861 15.5769C14.6325 15.7102 15.0055 15.7901 15.4318 15.7901C16.0446 15.7901 16.5508 15.6302 16.9771 15.3638C17.4034 15.0707 17.7231 14.6178 17.9363 13.9783H16.6307C16.5774 14.1382 16.4442 14.2981 16.2311 14.4579C16.0179 14.5911 15.7515 14.6711 15.4584 14.6711ZM16.8172 8.75623H13.8332V9.4756H16.8172V8.75623Z",
                                            fill: "#172635"
                                        })]
                                    })
                                }), s.jsx(I.a, {
                                    variants: t,
                                    href: "https://github.com/rayanramazan",
                                    "aria-label": "link",
                                    className: "hover:-translate-y-1 duration-300",
                                    children: s.jsx("svg", {
                                        className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: s.jsx("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM6 12.1257C6 8.8229 8.67888 6.144 11.9816 6.144C15.2844 6.144 17.9633 8.8229 18 12.1257C18 14.7679 16.3119 17.0064 13.9266 17.8137C13.633 17.8504 13.5229 17.6669 13.5229 17.5201V15.8688C13.5229 15.3183 13.3395 14.9513 13.1193 14.7679C14.4404 14.6211 15.8349 14.144 15.8349 11.8321C15.8349 11.1715 15.578 10.6211 15.211 10.2174C15.2139 10.2059 15.2179 10.1914 15.2227 10.1741C15.2789 9.97146 15.4419 9.38333 15.1376 8.63941C15.1376 8.63941 14.6239 8.49263 13.4862 9.26327C13.0092 9.15318 12.4954 9.07978 11.9816 9.07978C11.4679 9.07978 10.9541 9.11648 10.4771 9.26327C9.33943 8.49263 8.82568 8.63941 8.82568 8.63941C8.50136 9.43223 8.70786 10.0481 8.75015 10.1743L8.7523 10.1807C8.3486 10.6211 8.12842 11.1348 8.12842 11.7954C8.12842 14.1073 9.52295 14.6211 10.8441 14.7679C10.6973 14.9146 10.5138 15.1715 10.4771 15.5752C10.1468 15.722 9.30276 15.9789 8.7523 15.0614C8.7523 15.0614 8.42203 14.4743 7.83485 14.4376C7.83485 14.4376 7.24773 14.4376 7.79819 14.8046C7.79819 14.8046 8.20184 14.988 8.45869 15.6853C8.45869 15.6853 8.82568 16.8596 10.4771 16.4926V17.5201C10.4771 17.6669 10.367 17.8504 10.0734 17.8137C7.72476 17.0064 6 14.7679 6 12.1257Z",
                                            fill: "#172635"
                                        })
                                    })
                                }), s.jsx(I.a, {
                                    variants: t,
                                    href: "https://www.facebook.com/rayan.kordesh.5",
                                    "aria-label": "link",
                                    className: "hover:-translate-y-1 duration-300",
                                    children: s.jsx("svg", {
                                        className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: s.jsx("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12 6C15.3 6 18 8.7 18 12C18 15 15.825 17.55 12.825 18V13.725H14.25L14.55 12H12.9V10.875C12.9 10.425 13.125 9.975 13.875 9.975H14.625V8.475C14.625 8.475 13.95 8.325 13.275 8.325C11.925 8.325 11.025 9.15 11.025 10.65V12H9.525V13.725H11.025V17.925C8.175 17.475 6 15 6 12C6 8.7 8.7 6 12 6Z",
                                            fill: "#172635"
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "flex flex-col",
                        children: [s.jsx(I.span, {
                            variants: t,
                            className: "bg-slate-200 px-2 py-1 rounded-[8px] w-fit sm:text-base text-xs",
                            children: "About me"
                        }), s.jsx(I.h1, {
                            variants: t,
                            className: "sm:font-medium font-normal text-xl sm:text-[36px] sm:w-[610px] text-[#00C16A] sm:leading-[38px] md:leading-[48px] mt-3",
                            children: "Transforming visions into exceptional portfolios"
                        }), s.jsx(I.p, {
                            variants: t,
                            className: "text-[#172635]/60 sm:text-lg md:text-[22px] md:leading-[31px] mt-4 sm:mt-[20px] md:mt-[32px]",
                            children: "With over 4 years of hands-on experience in UX/UI design and frontend web development, I bring a wealth of expertise to every project. Meticulous attention to detail coupled with a deep understanding of user experience principles ensures that each design is not only visually captivating but also intuitive and user-friendly. From crafting elegant interfaces to implementing responsive layouts, I am dedicated to delivering top-notch solutions that exceed expectations."
                        })]
                    })]
                })
            })
        })
    },
    Vy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhSSURBVHgB7Z09jBxFFoDfq252ZySfGYNPMsFxTXbS+XS7GRwneTa7u+BsosPBSUvkOwnJEGCQMcusAYmfACOQwJENBCYzToBsFwljR7ASSJB5gABLGGgjox3s7n7U62XFYnu6q2pmunu63ydZsnZmdmf6m3r1815VAwiCIAiCIAiCIAiCIAiCIAjCZEGYAEc66130vb1ASaAAOiBkkqBaoyg+83TYXoUxM1bBS7cNDurf2AOR6kqfgJaf+rZ9EsbEWAQ/1lkPZnx1GojmQBgH/asxLTwbtvswIiMLTuV6uKL/G4AwTsYieSTBInfijCxZwQjMevgiiNxJEuhrfAJGwFnwE7evLxLAPhAmir7GXZ6VgCPOgpHwIAiF4Hn4JDjiJPhw5+qc7r1lxFwQo7RiJ8GeirogFAoqdGpQbiEavT0gFIoC/Cs44CRYAclKVdEgBeDASNMkofqI4JojgmuOCK45IrjmiOCaI4JrjgiuOSJ4SiByK4NyEkySAy4edBPsgwv8bZpIPWY2re0If96nwt/tGk9RXzSA8Mo3G8uu4ZcAFz8hGPxAUE2wQMFYfNVk61aA/6/cAp07cZx/+4bfFX5J0P8wgc/eSeBz/a86uK3/W7fDXmc9SDy8AAUT3KvggTO3QJGw7JUXYlg7FUMVmIlngyMhfmHzGus+OPKb0//qaAH3vezDwx/NQOcPJfRJ1xHBjzvAEvtBFiWNSxWyaI4eu3aXO+mIPc866W/9jhWpRpbqbEousyUj2UdPa8GEyqmyoA7wQG//m8WOA7aCoP4IlliPopEogPK7oxvon03gxN5rVq/h1sgtM7gXYX6/Z9Q6d+1G6B7yYPX54gdehNQFS6xacK/zfadO1ZThV5R+MVjWi/NX4fSDUfqzPO454Da7HAPBQx276ZKV4Mhv1br/XXsrhhP/vpYrmUM1T9vKYBsMrBxYvUuVUO13MrBcbsl5/OlfJY2oPbRyYPkuVSPKZTls989mt+KyRtNa2F7L55vBOwmbtJvhs3eyB1HtW6EsgsOdK8YejAXPKHoIGkR1kw566qM84zBtHqJRWYWGaYezS5UFlfHGPyPBvFUUGpYD7tyZ/fjXn5bZwqnzi5NcjAQjuG9fnFbypkE8ECsTdmIyJ84VvLTzJ5YbQMO462/DLw1PpSqQKw62q0HuuChTcDpyJupBw1g45KdLmMNYea4a+WFAfPLw77NH1EMFbzlgpVHM3++la83D4NbLK15VwU/802lDHMJNBfM8q2mn53C91z+f8WHfK8PXmVkuL2VWjLQhDpP8m0/DnfZ2dfWgThlxbK99Yp9Xo3b9BdMB1fz9Sq8xDw/LPC8+9d9rRsmIEmDJF5Zu+6l39LvZ5a0PINdYRZ6aQ8Q9SMkiVFRsXk3W4DLAxU/zBz4skZMFre2QKXQrPGI2zTRVgD4BrlKcvK5bb9/nAjrFlc40FW9+KJPI8LDYc8e5urI6fa4BAQItooeL/HUvLbFZZS7qRYyV5yPof1DlOmkzRPBN4KqN/W9sdAcs+9zxWMtOpiVE/wbZm5QDy+bSWe7/FzKmT1VFBBvCCx/dQ9WpkTalNiGaQ+m7j+dXYlwPi+NWesdulRbfmTyfWzMX+E1DyPZVPLsj8gdzimARCPfoVewAppDBZXJLAJz99b+82MGlOAuPZldYbkp+deFa+ncrBUGoHb6eIL3tR621Gz7F0s71nhZduexR3jzYpWw2i3/oVa17DmT3ueePRzpqVGQKxWIVvaSi1rFeiOHmj2/og49eavdUTHfpF/Shwbynwz2PnrO4+4Bfjf5Yu1IJzbO7rXKZmw6yemGbX7AgkvNXr+7+X8kj6w25C70hp8IPHUVvSI7uS5t+gzn3WnYrnvuPV+r1yZKbPp714l64bY3jOjSYvMR+uwOd0sI00XIv534OufNgjutNDtUcovNGypyRKhzt5Oh32k0ORgsdhLQMDWbwQ/bjrRJqpE2dGAlO78TV4L6YU4uVQrde07ujmS9VNrQv5v41L29cdA11gnDG9LnGglUEJ6GBBH/P71+52KBI/JiOmT7XWHA6WiNYg4ax8Ej+cr1JJcnY0A56FndCs8wmJe9Dg8grn2WKLoDX4dnKgZXgROHb0BB4HbprkP/9+FTBBfAxWTmwShf60WAt8dpQZzhlyC3XpL6rjBrpK9Cy6iatBPfCHeHS7YM+1KReenMFarN09o7daFW4V/gOB/19OnZdMiEP+4Q/0fuAGEDFYDHLl2ahKLjlFr7DAROrYwwZl5KdPjSctHrkcAl5YELrWYzDQWjNFvzxLyfxlFFOm2BiLdg6RMext+Z7VTpmtxhYKPe554+XWMERK+vlYmvBMxCHSRWPupsQLPbcawmc13nhsovgW9CyPsbZyZQeSRf+SdMDwVeLKVnlPvbC2Y0Dwcveyb+Vo9+2rD+865H+YdGnvvN6L/d9PKUx3TRm9/tp40j/y1U9YQedsnmuR/rzHyt8FyIvLEzj9pHxQE6C3XY2NLxOqxQcr7mTYEQRXDSu11z2JtUcEVxzRHDNEcE1RwTXHBFcc0RwzRHBNcft/sFE1pUFwmgQJE7V1443iKbG1UeXDZFaBQecBHtJc8pnq4KXRKvggJNgrqzXCbtVEIoh3c2wzSlqOg+y4oZvKS0SQveNf86Cn77UXpVWPHkQ8KTpVtGbMdI0CWN6oOkHtUwUfW0xTkaKlCPXvvB504nClWk9QK2y5JyeY8rICx1y5NL4Id31jUMuM9bqNb5ZE/IpedKa3SAIScHyU5daxhu885hIDeqRnetdlUAXEfl28LW/98OIhLrFfsFnS/LAFQRBEARBEARBEARBEARBEARhyvgZzqr5aHxYO+gAAAAASUVORK5CYII=",
    By = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAB4CAYAAABl7nX2AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhQSURBVHgB7Z3NbltVEMdnxkkapyS4u1aFypXYJxYP0BsJEEhQ0V1hUVJeIClrQhyyJ+4LEJcNsAoCJCQ+FHeNUMwT1OVDdFdD2xDa+gwz17EbN7e27018PW7PT3KSOtfN6O+Z8zFnxhchIXfefCFwSHMIfI4R5TvkoPk4UqZfegUGQB0Qa/K9Bsy/gnMVLJUrkACMc/HtIJcbm5lZZIAlGIBYUQxIwChq8qiImKsiZq3fF/Ul4J5wK3vCpUqKAu6n3K+Q1OuCu+fPLGZmZm4MQ7whsgBEW/zB+wu9Luwq4J3zZ9YdQAlSCldj5OWxISKud7soMoQ1ZDPT05sy0AYwZIYUwp0gV6HB8xLS9cd/FemBMt5tWRDPDIxzosdm1K8OCKhhK+PdHHg6EYeKCucOAf9568WFZ2yyiMuSiNihT1vA26+fzIvKK+DpxQovLbQn1baAmfFxFS8Pnl7kZInTdrRwFlbvy0xM3ACDmJiFo3DuhM7KoQfueZ8nDkThWNgMYb9kScKifkHNqrBsW8AoZkNYcW6eHFEAnmQQzREyz4InGcwBIWIePMlAnCX2a7/DkNNZ+FlMVR0VuZ4JVU93VMA6eJJS9wIeBjnZI5mKq+BJhnM3ZRbG6+BJBmKVHDvvgUmRA3k68e0fFfDjYBJqWs0QLmNkMX0VPHGp6JdQQEkolMATD+dW9Vso4ImvanXvhbEot8o+2jsR8cIi+LGwH2ot71PaAoZeyLAKnl50FB117IWf/+a3kg/lLjBfxU8+Le9/6kAy4fmvf1uSBWIFPJ3IohnXNw4UHURmYxqIF8QT/QK7hTpUozEf+atur/v7/JkS7p0+DYuhHypp2EZ4Xouu+cAwnJkvc7P89VlDVyRXuomn9Eyoznzze1mWOPMi4jV4VhCvk6XKWZkwem4w4hWZv53Pk3NF+fEcpnSWkmIIq8epcKWoQsonEUvA/dyWA3mSM2U51Ztl5rw8lcdRanMIHygTJV8X0apJ2xzGICFfPfc7ZBDq+g6wCrf3w1Fz6RNM9Caf/OFBgEBzgHRObJsj5hzvvcFNU1G3r4Dscg60ErwMSYhl3MbbnBubgmafCKdzmnfp8/4FzG1ybmoGFpF5ieNHQ02XK+7+7uqtN7K1fl/Ul3EqXCYLWsGVevVqPwKqcMdnYEWGkqOxD7Hcr5A9Z+Fr7/JiZgq0dtBk6e+pH3nx+DTfODLxFOYFGj+2dfr7hwu9Lu0q4Gfv8DoylNIK17ic/knsAy7xYIoD8ky0cUr+RreLIsMjHOuysCmGBTBkokJYQzY7DZsiXgDpUN3J4Hx9HvvsE8nClgXxnsTUc7yVonjKXLbB/fWJaNha7hPRsNVlCaSMhEEQFc4dAn52kRfAcJ+IDupHOlnERJdHp35oRPeJbFyU3QSC2WLzk9+xDupDt092Xiu5LY7oEyEw3SdCE2bsy2UddPaJqPfJtsxkn4jOwup9NM6m7JNZ+YTOys0+EbIbusqe95li6qHb1yfCdpcsIZzqkqU/EMNMPUn4BmB47NOsCti0L6e2ERleMCsEFIBRNF1GslGy3SeCZNg+DAgNh68iW7Y8GAUJZsmh+T6RPFhFslSERlNVLdh2H4vvEzksxGi7pA1tl9zVNYRNC8iIZu2Tk72ahrDtIiI2bB/zTWoAmO4TYXZm7ZMlVpVMv8OgDmi3j0UO5Ct0+QusWJ5Ibr06XrE4kWjFmtrWXMY422W9rNVSxkBoVvE2+0QmwXSfyMSYvT4W92D3UZ/I5TKa7hOpSeZXBmxD9mG5VfbxqE/kGBQtj4XjGSpaGAt17Gt5n9IWUL0QG3b7RNQLHfPQ7WPnOoqOOvbCl75E030if72aKQ0zlFn+9q3Xxsr7nzuQTHjvc1yS7V0FjPLnKxmt/atA2sh6+S/5248/HZmNeTgJpvtEjmXwAqRon75hO3cxfp/ItXd46H0i3QosT//YkCEHB2qfhm2U57Xomg/UcJb/wWyfiIazc25Q9tVlAX+lm3hKz4TqpS+w7BjmmW32ieigzg9wnh0fmX3qdTt38KxOWr2ujVdkfpHzonhRXpVan0icInMtAcGMKwJhEvvq2mCzc5dK9Qv95yAT94nogbyeKeuxqBqrh1ODOF+JI+B+wkNvoEA/YQ2aYuqjZV9dNw1ib1XC9LpmfDQxAAlILODkz8UAieb03ZZ/Dux+IjuF5cQ2pkGsRpvcdjF3HzI666V2PxHr9CWgCvcAaOU+oNnq1WHRU8Ds9trifZ04vMdF0lXA49sfr/vP1u9OpIAasv9BxkSfiHUiBZSJYgv9LTH64sBORMMWvHh90yHg5PbHC+xn2li0BZzcLublpMnflCAmbQEJx1asF1taJBRQvU97ZMETm1BA9T7wJKL5CZYW+zBGBAqzKn7sSwwR+bvZHAaCjOU+DPtofWAePInRSSQPnsT4+4kcEt8nckis3w7DdAuGovdUsmxkDYyj7a5mi4hkh3QTjEPcYLt9GCNwsxhiQrt9GEQVME546j+1vXYb7C1najuF5bNgnL0+EWewrHc0Pk09FHCC2F4fBjw0W/C+n1DAeqFYR1PdSljeLRRrMAK0dyLj1CiCjTVhbVS8T2kLqF4oR5pDNxwdr46K9ykde+F/Cx+WhhnKsiS4eu/lj8owQkQWL2a317S0I4B0qcqypQAjRmQ25hg0Uu/DmIDo+3VYp2v57PFf1kpMg+0TCcO2sDyy5SRd84H3Xl5ecsCD68MAvDLK4ik9E6q7hY/K3AyvI+vDUK+TkD2rkxaMOLEq4LUERI7xipzsfiLh/TpEuJIumeApIXmbw/ZaQM4FTDSLUX0YTcGq4Pi6Znx2C8sVeAr5H0o8/31dJyKYAAAAAElFTkSuQmCC",
    Iy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAeBSURBVHgB7d1fbhNHHMDx34zXhrYUfIS4qJX6RJBK2rcmb4iCoCcgPQH0BIQTADcgJwAkqHiLHwutFPepUtuQ9ATNS1oS7J3Ob8OmlNjr3Z2Z38xvMl+pKn+CsPhk196Z2VkBkff71S+WM9G5rnJ1AwQsFL+oYCSkGL5+s//g8+ejHYg4AZG2ubzY73/cvaOUuF31dfofYG3w9OVdiLQogRH33Jnehv7hYp2vjxk5OuCmuGWxIkcF3Ba3LEbkaIBNcctiQ44C2BZuWUzI7IFt45bFgswa2BVuWQzIbIFd45ZxR2YJTIVbxhmZHTA1bhlXZFbAvnDLOCJLYFT/9Om+nijog6eUBt6+unQHGMXuFL19+asF1ck3jmaGPMTpSGb5ISsh14/tZVJCrhfrgY6EPL8gP2Thp+Xfrlya+0l58PzHHTGRK/rTzw54KvQPXsEBl5dCmRQbCdm8oE7RU65zd8e5Wvnsh59G8/5sOl1PLxjgikGMhGxQEMA1RqgScsu8AzcYfkzI7V6Hv1qMLSfk5q/BTwYTBwm52d9Pn4VZoWbIWf5ICDHKlfrz8FdFX18fXlCgloEgn8jkwBan/Gojzwrx8yxfFaBuITo4zBcyKbCD+VxjZIzqVO4DmQzY4WS9HeQbi331prcZGzLJUKXjlRj9usOaVQ0ej3aLIU9Qu+Aw6mFN58BEy2zsIOtxbQXiATiOEtkpMPEaqn5XyFtgmMwO7gNBVMjOgH0skJvk4ydgGJ6q9f+M3s/rRoHsBNjX6seOkDtgIwW/AFGuka0D+1zaeup09y+wkBK0c8suka0C+163bC9FvjTXFbI14BBw//5n/yJYSIK8AB5ygWwFOJQjV3TkMlhIKbUAnrKNbAwc0mlZgLiJrwcME0p963rAoyqbyEbAAb7n9s+e6d0GwwZ62FPksBIDcuux6IA/UFkZm8a29ciYkrDheqapKtOx61bADD4tJ+S3NT5FM7kUwrHpTRunOO6n60ZHMMvrXAVPPnn28gYYxvVIrn0Ecx3EEEKdq/r9rStLa79eXlyAOXE9kmsBxzNCdTyhJ/hPdXsbsSLPBY4Z9ygVL3Il8InALYsUeSbwicItixB5KvCJxC2LDPkY8InGLWuFDCMhxEP9D363/E+PjQ+BoCrk7N2fJNx3+g95Zd5zHQaHI2ZTpyqpFte/RYb3r5OPjuCEO6UGR/KscKXm+acv18S4c9H1LgTTjuQCOOFWZAEZK7aa6B6QIxfAZz86dQ8S7uxsIRMurt/65sti2lTic4X0cN4qpKqzeCRTLK7XpnfwtUqpOjchVS+N3Mu6xgsKiBbX93tZb1Vq6XRqbpCa5EMwjGpxvR5nv4nvwQm4QawW1+szDqvthEOI2+J66XOHuJMdweJ6pUZSfyetQ6p2ewcHA7AQxeJ6AXIk5Vg+9DlYzi0NswyGFbsJEGwAMxaTdVlclykZ1P6KIScAbpkurp8cdI3XiM1LKPHw06c/D4sPWeefvbiPsx+QqpPR4nr85pAdYbzaszKlL8H2Pvgef3j0KRoHxBNyvfAobrtdRDEsrBxu9IJPN9/7cGUwHBZvu/+7TErItetnHfGoKfL2tUv3nA4Lv4eLHbsOTsg100dh3cX1ON7/6urS5rzHzRu+nmO4WDbtaxF5S08e61OR2/eKCMKZm1fXllZVLoYqV09UJ9/Nsmxnsp8vCpkv6LHg63pyYRlcNgMXy2b9mYTcIH0046lXdGC1GDsa5yA7+Bs4juT8756Je/gKKkqn68Cbg4vNHYtOyIFWAxerNdmQkAOrJi5WezYpIQdSA1ys0XRhQvZcQ1ys8XxwQvZUC1ys1YQ/H2Q1HIOqfJ25UsPg58Rb4mJGG4Lr6+S1UK+T8RsQvxHrfG0ID++YmQEuZrzje4jITXDLijnacWCL/w1xMWNgLCRknAcdPHvxHbTo8Aktk02f+3AcZQEXs7LoLqj35Ilo/TqoFqXPzRIuZm1VZQjIxdGrkcAgqh3fZ2YRF7O6bNY3sq0d36nu6z2WZVzM+rpon8i2FqWroyekEeYAF3Oy8N0XMtcd313hYs7ubOA94kW447tDXMzprSvUyOx2fHeMizm/N4kS2dqO75C7H+wgwMVIbj6jQrax4/sfVy6tOh/oIMLFyO4uJEJmsSidChcjvX2UAhmHTLksSqeI/P5gCuQ2D6r0sSidIiuTDW2imKDADbRfjw/WqzYyw0XpHZBudxnyhIt5A8ZoZqHUrlLycbkoHX9FTGQ/hEXpFHkFxkJeNGCcZ1zMOzAWJXIAuFgQwFhUyIHgYsEAY1EgB4SLBQWMsUYODBcLDhhjiRwgLhYkMMYKOVBcLFhgjAVywLhY0MBY0MiB42LBA2NBIjPAxVgAY0EhM8HF2ABjQSAzwsVYAWNekZnhYuyAMS/IDHExlsAYKTJTXIwtMEaCzBgXYw2MOUVmjouxB8acIEeAi0UBjFlFjgQXiwYYs4IcES4WFTBmhBwZLhYdMNYKOUJcLEpgrBFypLhYtE8+q3sHhQL1IFZcLNojuOzwEevqtgD1NZR3LyjYEVIMx2qyjo+egYj7Fw8oQkw40Q6pAAAAAElFTkSuQmCC",
    Fy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0eSURBVHgB7Z1NctvKEcd7QErlXZhcwJBzANMnMLTLypZ32T2o4vdepbKwfQLJJ7C8SKViKyX6BLaTTXZiTmD6AhHeCR6zSflJJOZ1YwYiCeIbMwMMhV+VbPFLJPHH9PT0dDcAenJx/b+5YDEO9GTywH9/AjB0oWf3cP13/oF/fgWW04/gFMgsM4ATDuFXsJxe4FT20DQzF4BPwXJ6gRPg6PUYcF/ccmZgOdYK7PoXI9DC3ovV78Ne4DYQS5fFGBQj5l5+FN8OJsdzsBwrBXZwjgwm309BOc7R6ncWwA5gncC0Ng0h/A9ogIHzNP6dAw9gBxiCRZADxAFOAZYHoBgxpy882DGsGcFifhxcMGCTYPLnAJTzTfmc3gUsMtFibRoC/wBacHqB24LChnJtOtfjXEVsCIyWwoUdoPMC09xIYUP6HR0fLc4VgQ7W/c17uKZ1tlk6L7ADixcibBjxCcwx0hdMMUenBSbHSnjNMTfaIktoHdzte689sJyOj+C9k/VbweQvhkOHzAPLaSSwThMmw4b+2l3Gw4boaH0HllNb4N8fn+OX/6ZxjtocvUgAGkEnK+0Ewnn4vQcWU0tgEpdz8PQEHFJHL86RekcwzziBHOAvwGIqC+z650chh9MQbl6DNgYeGCf8Ke1eDuzIZm+6ksByZF2gx/lB1+gl0Fy2MGryNheuX4KllBZYxoIv8Vc8m6+1rUfFXi9vIWyYnb1BJ5yto7i0wAyGFyLgwAK9y5X1PVmTRNkbWfP8CAMuJ2AhpQQW+cHg0e8YNpyCRtb3ZDfvB60jSGZvZJ646IS9xJi4dRsShQLTl1qPJunbzbkl4yAy7SYSv2eu44jr4guwjFyBZaD/4/p9GndzQI6QDCH1B//ld8tbjo3Rmr0Bi3DyH9wI9NMZPgWtLPNENBL85xC+zX+cTLU9wY9MgbcD/USobbtOfpyCOe7/Lmhn/wwKgipk1WwpSssUWHjNW0+fgl4KRuiedieHnK2iUYzg1LV3aYPIqQJTBgVIr3kT7YngbsHjhrxYGsVFWZXctUHkVIHjDIoEc/2J4IPf5D2KXuxjMIAYxey4+Jkk8vCL6/+9s5GuLYHF6GVu8n6es0ZUBSv2lMemIkrkUaPIRaaaQHPtvHngn190ZTQ/8N+9iE+6LYGz90B5R0opF4bMNIn8nA7StMxzMT7vC5MdTW+tQHnjB/77yxA3SILJj+Qsbgos16Fe+su59g13nrGjk3iW0VAmh+EzKF3lQCabXVDhuMnRTO+Fu3wXOF1cCutLn1mQGMF5uzjdqNUxnWUh5uPlIVQqZYnm5ivdZtv1/zqWwl6J/XMWcLg5XPeVNgRmuaPDhMCsjJUwnmVBW6PVRY7N9q3QHiiAfJDYFDPY/7KWGDHjMHiU3MYdrl4YzR0tb4nRNMDKPI9OxCkYhA4cHthDsWXK3CqvlUJTz4+ANmtCWH7GoNGs7J66sAIDzwHnMYcFfvfhaPPvA+4PDF+mrXLY6o+cf8wdwQPmXv3jeYk5sj6igqFUQB/N5vCgjfpdWaR2hgdOxVQR7WDhdw5Q9I1j68DgvkzlzYnPR+K+Qo//LOvx2xGM4nrQPmWXYiOZZXEKhpEnlY/TxEzGC5pYPXqtxykxKOEO0X350HzLj4s2f6K/KueHls0zsReUfWY7aT0raNSguXwkzKNZaH0u5tvinT152gyMLj2yEB5raUdm1Oaak6A5FA+yjyKjA2bCJ6BRC4e0Pi87PUUC4xzwEDpD+QIzHMUnXciVopF0Nfn+kA6+HNGqfYM5zbVXk+cHVffj4znYg+5A83BJB4ackHbm4jTkwZ+Kk27pSW//IauxSUKWDL3maRhlsNZPsmAUvcIR/KXoicI06MvmiBFZJIufK7ykNY+6LNLzHou0o2UkNnnJ9H8I8D+8jz77XMYBZuSLqPo+OIIdFwo9tuijGAryH89xET+F8lZl5MCS0mhK7P60gxRrKm9+AoM48RlVDDMiMMErZo5QIMH2GiJdkJPllnsqL/k8FeyfVXxBlPG4CwXbqnG2WxdkPFHOGSZImLSSUIB/8RF6NnDKml5uuJykKEc5A08m6fdIHF7eeXLBINJjLxu6vIUyQfv5eIVToV3Q6OBP58bMNIFWo0zKzBY2pbXqplL5KF+Gh2CQYPLDBOr1jLQmrVU3lQSm/UgwTLnsxtRXWpHWqptqI7iFkGYc/oNa9CJXbOHAXdPzcPSuwF9Bbe62yE7Vvsh8uXwGhsG5eIbefoOeILHI9tX3NqVyE5asAm39lCknySNKae10FYJqaL/cyegPlYfXRkhQJANAY+shqhB2PxgSf0eH12owdu1DCwhTDQ3mYwEFQ0wnp5uExMXVh0/LTAdKVRNs0p6ZjnOhVORBdb9wrCpkWSlfmk7g2Gdxas5rXrvhwCGJUjmMmUJUOLYLo1lc0OuGEjc80QmJgkSRwIMAatBmiz8xHy+egbIro5gpNdEBjVrqG7KqS6Ip6OY24shEg7PhFdSAw/C3babKyM9OZ61Cp48FDPgkhIXWbn4qEIUCcJLoo/Iap7HT+HZU2YB2m3KgKh8ksvPB5MdTaBGZUyY78Kmku0ILczy87V22ggWUeblxD/1DEzPUC0N2IuFNn8gCupRPCL+8Nd+QfBN0CI9kwr+3/WhcWbh5MjLxwndn+CVqzaldGMWEEJl6ejEXtEEHcYlbmOEnU6OaSkQd2H9K7Zsg+wSmgoFDWkYmH5ACv8chD5dQE3R4DrpgxlYNU5kL+sE1OXUduv4McG+m0oqRCXZg+BhFpbzqovBqpriEFDjKRSZHq66JizL7oQNIx4tys0zHnalKcBbC8iuVhuLPvMiki4gg9f6i9lCDhwxC+sy51YQJcsUlbstHG8zDEaYS48vi+uc47XSlW3vaco650AiaLsJneeISt5sN+OTP0OTtOpa2SgVaVF6pbq3cBOZu/zRiJhyqHwqdvrXdpPATNIK7XeupTNEc0XrBbDcAnVDpKE6Hj8r6PBv9EpqaafEBumWqY9KCAnZRruA7ycZ+MFfQbLSrFQbxaG6jYLshtE36uk7pKJHY8K9eMrINmeplJ3sqrwq2FwcWCB0JKwJJq9BjVbZa2qgw0wRag1dxt7WuIjYWhqd4EGj7sxNWR/TkJod3f6Jibb0lcNOgxzo4Zzwq4+m1jZhSbo5kkzUPDCPy4hwUlX9S7b+kNqU68N9dqXFG0uOjXWbVkwooPDjW5JTNcY1O1fvo87CpzkGQKjBlOdBGOKh5i0B0hOluBX4eq+p8ijIN0L8I7+NSZcQjk85HaaU/q0xVNsd98yAE5yeAZSD23m9mJk/4DIEbhy6T4MJ8eGiryDaTmjZbsq19FcZd9ax3nZy86OKLU1SB2ixQSgz0GCVTYJmH3KCaYJteZPOwoieo86g36OdkQxSWrtQv38xljE5cX79rgEKBaeGNa7aGO02pjPv6Xf2UKj4LYY9GsQZzGlcXnB9BjxYGZZ40n33+Nho/+QUn7D+Aeu7h3/3j78ZP4OfZvxrvZvVsUrp8lGqCNJnqCKqneeC/65unNCTZYrlSfbAw1fpSYNChO2r72kM2I5agzF2/r3CZlETlblMeItn85rVNGxVtscokZaNkZUPlCn9xyTe1AZA0unAlMRsQZSyUCw7jtDYXlUfw6g+/nyi68kgh/WhOh65RiNOaTKrYrkuK7oWayB2n6MwBQ+CHPbWh6k830iRTyNeL78uqLqkt8OqNjJWKSKKE79dxgfNdggaVA4sXyTqlZMnoOo0EFm+qo0a3DHdLaAoGMQjfbA+mdNN8+ygoeXO95Zv52FOwXYfsWmBBUeGfEoHFBzGzfMpDOmMk9BQsp0hYIs80xygTWHyo0tce1Iww3wDLqV0Jf5T/dY3H0KHVSa7zSifzfyfPC3f6lApMtGuuU8F1O//QZbHFpQX3n+Ic60Op41Y+kVG5wISZavtayKLtBW5q7E9bbiDjVRM1ploqshaBiXaWUJVJFG2rrdSPEab3G5pcZyybyFUp8l6H2kc9qmKJtAlMtFht3wDaTCHPPL6mL135nHKaiRDFz+rtSde+cEaUOy1uDx46wEfoC3iKTvLCav40tAoc061qeyupJS5RasO/KfPZP/89Gj9hrIW6nx2gtriEkREcY8m83CGa13ZV3i5sAn1QDnutXDXbQmYqCveMjuB17G+poA/qw0FNZEABrQlMrBVgG9lXtoA55aGjuMpy31oVOKafm+PK/sWx6mhbJwSOuZtmmxwpeKVy1G78deggd0RoKu57i1PUmc6QaScFjtlRoY0IG9NpgWMom8GB8DvKmwZ7MSpsjBUCx8QNUtrqhlMH4TxFG/NTaAGrBF6nw2LTSJ2p7HXVBGsFTiIu8xOi4NElcOtux9VBCsq+QlS7NZx1qbB9ZwROIi5E6bi41Td2gD2k1kfQTHgK+s8xtjsTbZFo/xhmXW/0trMC5yEjaK64RcKHCdFpz5fLnyX+3Jvb2m7iV1VDzSMLlggXAAAAAElFTkSuQmCC",
    Hy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB5CAYAAADyOOV3AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAa1SURBVHgB7Z1NbFRVFMcvtSrloy1WJQoR3FETyrJshh1loV1BQkjooiTKwhpcCBvADeDCutAUF7Coi5JgiN1YXbTs2k1Zgkll12CEKErsh1IERN//1mvGOjO95757Z54n/18ymabMMK/v9+7HO+feM2uWZrdvN0QtzcY8mTVELU2GqIaClUPByqFg5VCwcihYORSsHApWDgUrh4KVQ8HKoWDlULByKFg5FKwcClYOBSuHgpVDwcqhYOVQsHIoWDkUrBwKVg4FK4eClUPByqFg5VCwcihYORSsHApWDgUrh4KVQ8HKoWDlULByKFg5FKwcClYOBSuHgpVDwcqhYOVQsHIoWDkUrBwKVg4FK4eClUPByqFg5VCwcpoNScLcwhNzY+ahufX9H9njsbl1+7H9fXtrk2nb2GSfu157Jns8bX9OhVrBLa9+5/3a8cubzZ7dz5q8QOqlL34zY1fvm8np373fB9F9+9eb3p4Ws21rXCVrlmZf+dMopJ6CIfbTzxbN+eFF+3Me+g6sNyePtUUTzTE4J19OLJnO0h1z9uP53HLBSNYD7Dt01z7HgIJzAKkHj/4URWw5GLPfOn7PnPtk3uSFggOB3BgCUn8GBQeA7jO1XAckY2wPhYKFoPusl1zH2ezz8LkhULCQczlOdijz2RiPMTkEChYAsbFmt1KWgybyC4uRLAGS4IWjvXWNebu/1ezKIlZtWcQKrRH/D4IhiHL50Lu3xVz8qCMo4kXBAkZGfxW9fuDIRjN4etN/ft/bs84Mvr/JDA0vmBNn5qq+f9vWp8zFwY4sCLPWhMIuWsA3WTfpy+Es9FhJbjnvHGnNBD5X8d9wcUx//VIuuYAt2BN0rXML/lFdCPKh78AGGyhxLTlGqy2Hgj2RRqt2ZQkEX9CSx64umT3da+2FETO7RMGeSAS3BQiayBIeKeAY7ImkVS1353Hj06FQcCKQPiwCFOwJ8rO4p/VlKIsf1zviVQkKFrBTMHFCN428bkhwJCYULACzXAlowfsO/WjjyI1qzRQsIHRZD+LXO0p3GiKaggUg+FDKsXbLiUarrlfSgoKFnDrWZvKCcRmtGbIhOmWrpmAhaMVY+RgDt/YKk7FU3TcFB4AkAmLGsXB5ZrTo2AsKKDgAhCKxljqmZAfWYHHZbAFA4COVZNd1x+i2KTgHkHwty9li20kK3CL4PJIpOCforrGcBon7VK25+/UfzHXBYoNyKDgSSNyjyx7o90v0S3BhzxDJFBwRdNlYa3Vz6mXbbUuSE6sByQeP/ixOQ1JwAiAa3TbWVMXsutFdfyBcdE/BCYFodN03p7ZY0aXu/HuQpWlICq4TED3x+eZ/uu88XBr1v0em4Drjuu88oocEm9EouEE40eOXXxSP0Zhw+c6oKbjBIHkREhG7MfPI63UUXABsax7sEL3Hd6JFwQUBLVlSeEWN4KKsL14JjgupPaT4YqX3YtxGraTQgnECOwNO4HziiwJJAFdZx2V+YjC/GP+4Cyl4cvqBbRmuNJH0BEpjtm2eIUUcl1slWd6zYAlOjLIOvvuFJRRKsJO5MkWGEygpRCIJBIDVNoqVH1e1dc55K+KMTdy3u/h98R2vCyP4/PCC7faqrWRAIRKflikts4Cd99Vw42yt4/rXMWaST5z5RTxvwDEfr7ERvBK1jruchgtGt4d8J/7AWifGpcxqteTlheZ3jYSdndVbL1qVtIIdoky7s7/H9yLD6/B66Tyj5Ll/uKG1KpfHNJkQgO7JFu7c0mwT7jg5U9ceBG0TuXLheVtSoRo92Zg7Fbj9BDsSsY66K7uIyrtUG4n69qH5amIp6C4BC/DHPbebNrwY6Y7S7SSTCx8QPUKmpxYYF9HDFAlkppC88KHhXbQ0ghOTksdeI5T6/fB0uykKuCh95YKGC0YEJ8Uyl9XAiTr1rt8uBZRYaMQxVmJcWAmgELNonOguz1lhLAb6W0WhQSzFibWjIRScJ2kd6UIIxkTpyoUXkqxKrAQKnfhWwSkHw8nJCHuTQoDckM8uzH2wW0ieuiWjFa5Wv6oWONGplsjW+szQC6uQJf1T1WLOc6JWYqvOZsc5MppuG2iMmlmF/c4GnMA337uX3d/mL4GALA3kxiouVk4K0a6+ZYyaWYX/Ug7chyJ6NZkFMiT3yzhJh/dvsAGRFGJXAtEI3CAyFXJR4njf2LvODiExj/d/9a0rrqTu9ZlH9tnVo3IzSzzjgThtl6BgSj2OFeDZfm/S363SHS8iU7G/Tseh9mt1yDJcsqMcClYOBSuHgpVDwcqhYOVQsHIoWDl/AaSf6gQ8k2PPAAAAAElFTkSuQmCC",
    zy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAzbSURBVHgB7Z07bBRJGsf/GBts7cssiF3tQ/Syt9rVbmAg4bIdEgTRAcGxl4AJLiACdEiIANmQcBkgLsYmu4hHdiehs0nQnYSEEUggQMxY4v2yeb/pq397arZcU93TPe7pqh73T/rUPU+P+z/fo76q7gEKCgryyxy0B73CPGHLqtsl1a2nPN5reF1F2GTVuD9e3dLGqvfnmrwKTCFLwvqqWw+tgSJXhJ0WNlq9XdAC6H0lYUPCJoT5lqxc/QzrUJAKJdgXNcwmqp+thIJE0FsH4KaoUZ7dj9alirbAE3YA+RLWZEMohJ6Gh6mDkgfxCqETkMdQ3IwNwDxEa2tYhZaRL6FmYmVM5ei2xxM2gnyJk6YNoY3D9ma0fziOY2W0mTcz/7A6zosAWdkBtEFu9jC7cm1SKyPHIbuEIiTHFbmEnLEN+TrILth25IQB5OvAumQDcBx+wDwcyELkJuAHy8MBLERuAn6gPBy4QuQmKAqq1pn1wquEfB2wPFoJlvBQNDGysAlYaIawxVZGvg9cnqyMJtuac9Ec+4WtQUFWUNxuYf9GBvQjX9/+drLNaDEeitBs01qej4cA+IVZtRG0iH4AfmFOWOyF93FPXWGSP4diOagrVIQtR4xzp+JW0btQnK7hEnS415g6XyqSOB7sYaqwKnALei+9uBL1pDgezLVDy1DgGhwX05NPRj2pkQd7KLzXdb5DhBc38uDCe92HTvovNIEHC0MAyYcPH6Zt9f2BgQErQ5RNmzb5b9++DbUjR45k/ZnY/AjtU3cgnBIsMmfOHKodbE0MDg6iVCoha96/f4/Xr1/j1atXePPmTbCvGu/LGIobOm8cJfAALEBRaSZ0sY8dO4YlS5YgS0QUqQn58uXLaeJS9Hfv3sEC28IeCBO4BEtNDVXEMO+VLFiwACdOnECWSIFNRtEtCSwvcVFHmMCbYYmosKw+R277+vpw4MABZAUFpKdKQbkvb3Mr8jAsYdQsTGBrXSuTuDJsS2H152zbtg3bt2ezfEl6sCqsvM2tJQ8m1Kyu2OqI+8Qs0fMwBTUJL+/jVlTVWLas9SM6WWSpoqpm0YOpWd0BMAn8J1hGF1QKHha6+Vhvb29QdHHbSiiwLqzqzRY9mNSFaZPAJTiCGpJ1cU3h2vM8DA0NoZWoRZY6TJL7Fj2Y1KVWXWB5KUCrNPJYIh9Tn8ftunXrWpqPVQ825WHLAteFaV3gEhxAeqxaLUsqlUrdc/VxM6vqVjVBKLCsnvUw7UCIJiX1hi7wr3AE6Zm6J9NDKbJehOkwVDNkp43ayTKNhR0QuE+9oQvswRHUsKsyOTmJ9evXTwvRqthyn+IeP34caaPmYDVUOxKiSUm9oQpsLLOzJqxNqTI2NlbLs/oXQL3NYVPaTRC9itY92QGBPSjDXFVgZ6YFTSLr9x06dAgHDx4MLcbk8/lF2Lw5vcZc2DjYoRxMPLnTYbrTJo2aGip79+7F+Ph4sK8WZGr+JvwipDUpYZpNUoV2ROCaszonsCmfhoVt5uNVq1YFW4npi8Dmx+joaCpNEOZgPfeq+xamC014csdJD9b3o8bDrKj7+/uneaypC0YPTiMfqyHa0WESqYWrDtOdNtEnFuR9UZw8eTIIw7qw6heExi/CTJsgehWtzyy5nIOdueqanofVIVEYO3bsCMKw/hr9tTNtgoR5sENVNPHkjpMCE5MHN5on3rJlS63TZZqRksykCSKHSQ43OqbhXA4m+tAnjgcTmY/la0y5mMxkUkK2KqVJsaU54sHGcbATxJ05CuP06dNBuDa9r/p+DNPNFF2yita92JHZJIm7AquowsbpcElYcB09erTufr233UwTJCeNjhpOCmzy2Djeq0Lx9JknE0mbIKYJ/7zkYGeIm3OjMDVBdORKkCRNENNskhquHQnRNVSBG55rmgVq90qG1EYdrTDowWHjXvW9WHTFzcdqJ8s0o1QI3AA9T+qT/0lhLmYYVt9f3UpYfXN1ZiP0CX/pvfI+Pu4AFbnjdIiOe38jWFVzirERcZog0oOloOpwySEPrjmrKnAFjhG1FjopXCSg52PTXDLHx1FFl56DdQ92WeBxOIapWdEszMcUOQx1UmJ4eDj0eVJg/cQzx4ZJFbnjtAeTmYiqw2qZc8h6G1RfnhvVBAlbk+VYo8PorP1Apue1Gk3FdG6w8LAZ/43jx4+Hvr96n2iC1L22u7vbX7hwYc0WLVoUmNz/+OOPrR9DhPwu0zIHPpjfiDQEFmNev1wuG99fFXhiYsIXQ6hpr+3s7AxENNknn3ziz58/3/oxRMjy514HPlik96YlMK2vry8QUH1v/W8RfhH4hZCv6+jo8OfNm+d3dXUFJvflll8A28cQETODZdsfznSQ1fCZlsA00QQJ/TvqVlTWVo9JQjuHCIZtf0BTyJSWpgdLE00Q34QusmiCWDsmCS3yjPjttj+g7r06aQvM8Hvu3LmGf5ePM6zbOi4JLHJNkvVCSz2g6rZVAtNYSDEfN4L5uBV/P2VruL7d6u8NZu3B0sTYd9qXypSPxRjYP3XqVObHJIGVEYNhix+w7qBmJTBtcHCwLoJIKK5oZPjPnz/39+/fn+kxSWBDiEHJ4geMFLfVAtNGRkbqPFi0H33RufKfPXsWhPL79+/7a9asyeyYJLC6E8BNcAxlLUzrITJrgdUmCD8Dr1738uVL/+nTp/6jR48CcW/duuVfvHjR/+abbzI7LjFsAgZM04WciYi8gmmriVoR2Wrk6an8e5w4YG9ZNfacue3p6QnmmkX3Co5gHB6FzQcPwzFmOl2YBM4dc/JfFVUKq95evHgxdu7cCUc4arozTOBROLSER1+6kwWHDx8OPFQVVvVgaWvXrsXGjRthmQpCrv4etaLjECzhh5yRkKUXk927d0Pk47owrXoxbevWrVi6dCkssjfsgSiBuZDJihebVlVmLS55/PgxNmzYgIcPH07zXnlNSlXwPXv24KOPPoIlRsMeiBKY4h5FxsgCiyZmbqbdpskTvrPixo0b2Ldv37TQTHFVsWmff/45du3aBQsMYwZXfL8MB37D1jaXL18OvPOnn36qea66lca11Yw6ly5dQoZwHVJopG0kMF/4HYrL+uPMmTPBlW0XLVpUE5fLd1Svpv3www9BlLlz5w4yYBgNomycX13hetN+TP3Kx6xGzDph5cqV6O7urhNWzcc//vgjzp49G6zbajGR3kviCMw36IFD17C0hWhV4tq1a8GiPF1UNVQTVtX8QrRwlSUr5xONnhT3l8/oxb/BsZPEbXDv3j2ItiV++eWXOmHV3Dx//nzMnTs3+EK0gIqwLcIahoi4AvONWL7+hgJcuXIFX3/9ddDJMoVpefuLL74IftdB9K6RMjwB+r9xnpjkF8BZUZdQ/EBlwIULF7B8+XLMmzevrqJWhf72229x9epVvHjxAikxjIjGhk7Sn3g/jaLgCqCA58+fx4oVK4LbJg+W94lZp2ColcKJaRVMhebYDaikAvON76L4JdIAhl92u1g163lYNTZsFi5cmEY+ZmgeTfKCpAITFlwLhP0RBUF+7erqCvJt2LBJFl08M1HMJ6NJODfwdySkGYEJE3xRVVehZ37//fe18bEpXHOfv/NEgen5CakI+wtiVM06zQrMP8RFAf0o8nHA9evXgy4WW5WquLrQ7ITdvn07yfi4ImyVsKZaY80KTJiP/4eQE51mGzyzkMLRk015WArNMM1VIPRk7seA3arGZ6+HMBOBSUXYY2FrUBA0QFgps6AyNUCkyQUMT548afSWLKr+iRkwU4EJ8zEna0sowN27dwOB5fg4rLJm0cX7I/Ixx7qJiyqdNAQmoyhErnHz5k18+eWXtXxsCtXcZ/X9/Plz0/iY4g4iBdISmIyiEDmAufXBgwdBQcX9ME+msFJkhdTEJWkKTEZRiBwgV3ywoJJeq84fq0UXGyEs0pCyuCRtgckoisIrgEUXCyrm26hWJkUWM09/E7f3I2VauZKthKlzZTzMYjhlyCv3dHZ21jU+6NFif1I0QP48Pj7+H/FlSP0qaq1equgJG8EsF5l59quvvqqFaCmy8NzxpUuXrh4bG7smxI01KHYRtjO5BNel83gyt56eHl/0q4Or8Xz22We+8Np/rF69erGotJ2+pHMS+uHANUBsGi/B9Omnn04Kof8qhO0Slv1i7xbjwYHrgFi0kZ9//vkPQthOtDn9mF3eXEZ1Dr0dvTYM5uZB5EuopDZR/R9n9bSqh/YM20Mo1q9Nw0P+habHHkQhbCQe8peji1DcJCVMebXVSzshXNQhFH331GAVOgy7nq2KmgtvzWvJzrMdS8J+xVRIb9XZjxVMTZ6cr26bXjpji3YZk9GbKLJXtSX4/bfse2Eueibx+wLyStXGq9ux6taJ65QUFBTMVv4PC2+h9SZHmiYAAAAASUVORK5CYII=",
    Zy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgB7d3BSUNBFEDRibjXDiSrdBAtSrAWIQ1lF38XdhAriAYLUNCBz+WcxexmMVx4m7eYzXG7uwyybgZpAscJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxAscJHCdwnMBxt2OSu8f9uH/aD352Pi3j420ZM0wLfI378PI8+I3DtMBGdJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncNy0bdJavb8exgxrXY8K/E+uq9E1Bjai4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOm/a13fm0fJ1zvpFbo7+89/vuHJvjdncZZBnRcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwncJzAcZ/rbB7FpF/8PgAAAABJRU5ErkJggg==",
    Gy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAABzCAYAAADnhfJbAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAljSURBVHgB7Z3PbhRHEMarZ2xjRUk0SUiknGIfkiin2E+Q2TcIT8DyBCYvELcDd+AJME+AeYJdDjnHt0iQyHNKpBDCSoAiwJ5O9+yAcbzL7tb0n+ra/iFZPmCDvd/WdFV9VS1giZF/DjbefP55r4IEaQQsEfLRoBQr2XcK1PegYOvcXxAwVLW6J17CQRIvPZZCrE0EXRe3tUDLub9IwT68VHtJtHRgL9a9J/cvK6Vu6k8LWJwKjtUl+VnvEBLBYS1WLdRdLVQJ3RhpwfaSYMPDVqzy78H3kIm7YIcRvFDb6UgQlgwY0pxRM3ED7FHABWvCTyBhKVZYE7v64wbYZWv38eAqJILB7hjQRNUL4gjcMAKhNuVHvREkvMMvsl4QA3BHAXW2C4kgsBKrTqr6YP/xfxahrsq/BluQ8A4bscqjQaGTKj9Rb8Vq8paYEzZiFUW2A66j6imlad1CwissEizHSdU0Kn0k2E7Jlj94RNY1ESLp2YAaUinLI9FHVsudqkVJnS2PxB9Zs6DJThEoqi8lUYvVS6lqFgL6KdnyQ7Ribfv/NKJanqKrD+KNrG76/1jK5BtwT5QJVqBS1SySb8AxKxAj6zqpUkCNoi1lSQjBL7KA96DU4Wc8ESF0HfgZHMK2ZPPmiS6yNklVJm4DVV7o6OqzlPVA6t9HfhlAlZP/ghhCre7AVz/uQ+TEJ9Z/hubxvwF0GcqPyx645oHc0ondbVBiPlONibQv6x58IyuIlKgSLDNTBbSFanDvG2iEmg3mFqpB6d/bmv4a87WREo1YTVKllIoj484dHlN+lRtjoSKmdY1g8+xu8z0iJJ7IOi5VYcapQ7AhHw8kuGANKdTXGMGuEj7zv4MozqxES1WzsF/KapKpzI7QTupL8LU8gIiII7K6HVVxhd0RmPHj3973W8luNOWuiCAvVhL9fyxmBMZWsrWqhaos/h7M93pfRNV1Iy1WUv1/LDZ8A+OEqA+2EWInpmSLtFjFeqaL3ZFG1VPKxnPbhbXclV+3iCnZIivWtlQlgQOZ2AEsJqlSymFtVJTwUJYQAXQjKydT87H6ATCYBCj3sKfAVoXBMSTF2iRVwsEZLQQC9tEbCD/Md6wmVdMw/8bDn8gnWzQja+xJ1RnUHmAwiY/PY5CAXeqlLHJi3Xty3+f8v1uU2tNNgQowrHpfU1TA+7RXI5HqYLWdKtMA2ID4qeTH5SZgsNmpWhRV9+BLOQSC0IqstEZVulEjH/+GPGCEE3SPYGTE2kRVLkkVwIG82NsHDL9f2/WSVE1Fl7Ie/NQHgtCJrOuMNksLZKmq6SapPoQmA5K+ARJibUpVk+6lihFTquqSVCkSx6CCom+ARmTlU6qqOpWqgNAxyJxdifkGgos1klGV+ag7lKqMqZoaxHwDQUtXkZqqpxFnqWoWhEpZYSMrp/7/iboCGGybqm1j3kREkq1gYm328nPq/3/aGwKGtWyHSFI1GUIm7XCRdYXTJWhd+v8RLCQmYtIOItaoR1X+T6f+fx7LRRqFLqsF/796T7BS/7+FclI1jcDJlv/Iup7xcVXF2v9HE/ZKJa9ibaJqLFtVZnMYb/8fiRBbIU3afiPrOqPLzoS6BBh8m6ptE9Ck7U2sbf+/25QnFbr2/+MmmEnbX2RN/X+A36R5s/YhdoQutwWYiPUi1tT/bxHhyz/WCGDSdi7Wdv6/Dzyo0ElVM//P5A3b4N+k7T6y8hpVwZuqoyxVzSD3m2w5FSurURWTVF3s4VZE0jFV28Wzb8BtZI1zVeUUmJiqbePRN+BMrKn/3+JuqRoVvC13cyJWeTQoWJWqMrgJGJwvVaOCn+VuTsQqCl79f9SqdV9L1ajgwZRjXaysVlV2KVX5WqpGhWa5254Eh9iPrJxGVYTCXb4We/8fi0m2HJayrIq12fDMqVS1vP1/LAV84K5LZzeyZmxcVRW6VGWSKs6lqtn0XSVb1sTKqVSlz9y30FF1mZKqaTjyDVgRK4tbVU6p9j7p4UpVsZqqrWNKWfZN2nYia1pV+XqpGpcpiO44MGl3FivD/v8+YBj3/6O6sc8x1k3a3SPrepyX1k4GnVSZLlUfEmcxJm2LV8Z3Ems7qlICB7r0/8216InJWKwQdYusvPr/+4CBnanaNvZ8A2ixplEV4Guqto2l5W4osab+fwtXU7VtLJm0cZE19f/5m6ptY8GkvbBY2a2qxC9VY1QF8UJnk/bikZXPqspRt/6/KiGxIN2SrYXEymxUJfX/g4AvZc0tVm79f/lJTwKG1P/vRoflbvNH1rSqcnlN1bZB+gbmEiurVZVd+/8JG6B8A/NFVk6lqmVfqkYFxHK3mWJtkioupaouSRWnpWpUWNCkPTuypvl/gKNryzWp6o3Flru9U6x7T+5zm/+vYFFMUlUnU7UzFriBe6pY2/4/lxcp9f/pMvcN3NMjK6dRleMO+/9TUuWeOW/gnihWdqMqn/UOAQPFm6q5ModvYHJkXU/9/2Sq9s1s38A5sbajKjw232FLVclUHYYZJu3zkTX1/+nfVM2VGSbtM2LlNqoCGGK5qZor7zBpvxErs1GVA3ypKpqbqrlSTPNgnEZWXqMquFtVxqZqHrcgxs3E5W6NWOWjQZlGVSCZqikxwTcwjqx5WlWZTNXUOL/cTTRRNWdyBVCtrqDOquZAv5odQYIaI3hab8K2bO50yPQfLme0Kpmq2XHGpK3FKr4FDpyoK4AhLVWjjTFpt6WsjEm3aig/7Q0BQ9bMliUoszpuFJgEK/6dorW6A3j6kCCOuGw+ur8V2wc54FxVHm7FS1ihgD+uf2HEWkHcjHRdFSdWkadN1bHw/HjTiBX3QtNh8asqX1OfJLFGRKaUug/LS+xv1OVBwSgT443P+OgUHnx0XNVHIBH1z74sjOAreZg1Nz4rdQvipbj+789fAIZNaX72FF3pc2A+jKsB43n6aCPM8fOXuIXABoX0EiT88apuXqOx68pE1xPkBCgFsnEdDsWXcgjtOzdBEf3U/0ZW5rNT87XpANXIlmV4ysaQgyWvzc9dQYIaFTw9HQg40xRojCB1E2EriI28g3ncnF1f1eYoUUGCBiaXMK9J67gynJ9uvdg7aC6FUJ1amCEo2xkyHOZRk9fbHVu3CSvoR/8zrcH28f8a8a4vkU8GG1DDVRCNM6uECBBC9Hc/+q6b4JpRbCEhz77Vb1oeY+nUEeIQ6vqeFunNt6Pp2/wH41GpOTuKcCQAAAAASUVORK5CYII=",
    Wy = "/assets/postgresql-C46fNhde.png",
    Ky = "/assets/react-B1pCvFKs.png",
    Qy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABcCAYAAACMckwwAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlZSURBVHgB7Z1dUhtJEsczq2XUrL2zusHKJxj8sGt4srRmNmKfjE9gfALDCQZOgDnB4BMgnjZiF1vaJ2tiHpBPsD030O4MRsLqyqksqTVCHxZq9UdVd/8iHAaBMaC/MrOy8gMh59TOqXL98LrqOM4WgvMtAVUAqao+VNWfQKO/JyCALiJ01ZseEXQFCE/C4GeU2HF/dTutl9iFnIOQQ7b/fVND4bwglFtKJTWIGETsKMF1kOCi/MtGK49Cy42wAjFJkPvqh65AgigL10Cgi/bzzTPICZkX1vb7m31lQl7FYZlC4KEQDer5p+1/bHqQYTIrrJ3L/h4hnQDMxkhmgGdwK4+zKrDMCWv7nzdVKOMPhlioZXjqCTj9+Nx9CxkjU8J62uy9AQlHScdQEeDBLdWzZL0yISxOGfQqtycgaR9sRuBRu14+hgxgvbDY9eEDca7iqS3IBHjmio3DVt3uFIXVwtLx1AY2wdgAPTTWu0YBlpJhUTH6Z/vLv3611gpbKSyOqdj9QTZFFVAtOQ+anDYBC7FSWP1K//vsxFSL4XtL9XOebzdvX4FlWBdjcUoBJWQu77MUIfbb9Y13YAlWCWsUV/0X8opF4rLLFQ6D9fwi5ZnpbpEv+2tNqlgjLH2ZnO1g/X4YLC7tUYR4xTk4K4Slv2HA7yEEXJQHnBca/skGBoqLT+rsUVDSJ36/BDbgilfquqa69PMIWipo/OSD3xJfRGdegpHNdG/Q2yLBp0rxjB+y8G4xEBeYEHOxqPp/vNU5xQENWvyY8cH7skSoLhOWdOqT3/jp7486EALDarZWQj2Bh2lWRwSiGqV/vPZz9zE/br4rZGsF8+vOlRU73hTlx+3vNo/Ciorhys7239y6+np1sMxlqt/DyXazHypMWJcpUQGXYgcfM99ive9xeqF650Hl8sCh1+16PHdp6mRzBAJTebJCk3BlxFxPIuhx8JwYLazhSRB/mHxMJUcPP34Xv+nfbqpfnLTrLlI3cfTly7gvr/ngQFK+vRObqhd7e9etB++a7Qo57hkxcn31JETF6FeeoDohhHaxSUOkXJKyIqPUTOSw63v6vnfOB4eZAw/SnUOEsRZrKsuun+S4XN/S7+Xy5mxS5FaAKlzw6VjFny1Yk1Eh5RuSdLDgBD0O2gPMTTdsjE9oqYqKae9u7u9cfu4SijdgC3zCFVjb/tBrKVP2zv2/21i1vzFombuB/r4KQSqLrRDNxHbmWqwPvabuQk5ZVJNYGdRPoqwYkugEXdsqRdN1fEeLzXf8Skk8qEr0q6OO8L175vdmrNXwvzIQdoO0gVdSDOo/1R8ZFeNYL67IUafzOY24Zgbvyg0KCcemiYrhnBnnz6BAeVhoLOruNlNYAlpJnf7CoMVFZE1tVFygQ4cLPwYFobHytBgVUp84jxZ9uBDWmuQx5uIhJz8+d19+7XOs7dIxhRzGXB6KxS4woLBYEZEHy6UrSQQ9uU/6p7BYEZF1y8Wi4vTPfXOKhcWKGM5WK8vFF+dVyAiBqFZJ/xTCigEbKyO+gueLwctVc4qFsGLE+rhrjbq3QlgxY6trRILTj7vuAYSkEFZCWGO92ErR+uU2hbASRMdePhwZmq33uPwlqsnOhbBSgAVGA9pDoeu7qpAmumUOldsrNyBCCmGljI7BELj9jHscq5AMnsq58SV6K4oK03kUwjIILTKAGjj4jAi2Imyk9dRT3SLwP+EtNpKYFJi6sHQ9tdsb/gJLc16xA/DcntvN49qQoGtb3Y+ovBhUEbFCiH8a7fq5A+/0US6ti0T/I6Ku+jee7/udhw8eemnMM01MWKPmxhqbfB4ohghbkqi60qsShzMYJstr4zLlBesRm7C0JXrU2xotQ9qbt0UrMhBaRPJC+rK1Tkd0QXRELqw0lyGN8HTXyK0KTDO+r8ZkIhOWDjwdlQA0arBGtvfVmMzawuKR0U6pdGL2pJZCYEkTWlg6GOfpxRJC3yclToZWiphOKGFZPrw/cwuRTGTlClI9aWQDr8DeWiM9EyKtmVJ5YSWLpZ8MSUeQEbjbZFOUX9u+EMlE7i2srIlqgsI1xsC9XGGGRcVYvxDJRJZarLysGOF7toH/pV5k7qPhq8IKpr6gjeOqw2LZzhpTWegKxwPh8yQqxoK1IjawUFic/IQM9cathCXi0i9+Q5krLA5krcqox4EF4up/098HQ5krLMcpnUOB2QuR1EmdgIzNv80Mtw25ZcvTRXiEnn5vVOEYcXltOhi0syZgnP4R8BgMZeZUOHcTxDTD3rP/qLdabsntfC1zPS6vVW8S4guuHAUbMeS0qC2oErt60XZ+3HWfgKHcEda8TRBTn36mfqh365QD6zIb4RxYOQkvZXEFouK3k9rQEZYpYc23VnynxsO2ohyLrZs3SYnYto1bKZXezCSqJ/bWmMhYWAusFfefvY6zYWHnfe+AN1iBTSQsrp1m7+TOKX1qb42J/H4qnHZN6pt3RflJ3F0weteeevWBTevcVOC886F/Ndz8Gh/89XmRwkzqB82f2Kwt1vR2+HUnjYRBt50Tnqv/25rgnu8XuXEj6kWUS3bXzN0EYRraYlGJ9saPSPWLSlhUDMcLfbypczwHlsD9kXoRpYpNo9i4Ndyu9fmg903/iq3i/FSNHeMotcV6etm70mmAJbO7k8Li+ekegmiQ9C9WCSFWaJlLfWHVfcGxGzREVAG2D+fXE4Z51yEnjaX8mVvexx+UvHxK/JkTyaslkefvrTERZBOOhFtpuL9l5HrzwyxWxFYBKsYSz8pO+QgMhPcEFjtrAuwa9S1csXFocjNBIS4Gz2xxgQGRtdjHTY7dojUB+yTWbKbIreWS4cZhp41VK09YXEjyFPKCjGZZeBpYt0vn4+4fDnKxbcuw9M+qWBNjTZPpbVvK5WvXbzHWCov56+X1nkCHKyOqkBHSuKeNA6uFxWRqIZLl7m8S64UVYLNr5OsfQfg66iH+aZIZYTFWWq81NmyZTKaEFTCqhjW64VZbKQnHJtetr0MmhcUYta9mAl31IOnULblvszyXK7PCmkRbML4OSrNxQ7k8QnmxKTbP8jDoLRfCCtBWTCorhuJFQiKLfRmSqeRKWJNwI+1n/3PNAadGAr5dt2tbuziCjvoanwip4wq3kecRlLkV1jxYbNdfrqsOOhVejKR3/kicERsJ0guRJMmusoBeWouQCgoKCgqi4DcZ48oEtrhvLQAAAABJRU5ErkJggg==",
    Yy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAYAAABUx/9/AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZgSURBVHgB7Z1NaBxlGMef2Ra7Se1HxIpZK6Q1JGAv+ehF6qGh3mxyakACopc2RyuK9JbEU5EgBU9JT0XtRU8mubWkB/WULevB0hRNV5SN1I9EY9qNWMf5j7uySDM778w7k919/j+YNllIssxv36/nfd5nHKnQd37xYCabfcMV93Xv2y4hzY0jBcd1Cn9Leapwcaj470sefRcWuxzZsyiU3IoUXdkagnCHolVQdMtb/ZmMZCeEoludLsk+dj7jum6fkJbHEee1jPcvZeugKyNEDZStCMpWBGUrgrIVQdmKoGxFULYiKFsRlK0IylYEZSuCshVB2YqgbEVQtiIoWxGUrQjKVgRlK4KyFUHZiqBsRVC2IihbEZStCMpWBGUrgrIVQdmKoGxFULYiKFsRlK0IylYEZSuCshVB2YqgbEVQtiIoWxGUrQjKVgRlK2K3WCB3cI80O6X1LbFJb+de6elsl97cXuns2OPdo6zsa9sluY5H36uN8l+y8eChlNa2/K9Xvf9La2W5U7ovS3d/FxtYkT052i3Hj+6XZubs5a8lvxL9pu7L7pbhwSdl8OgB/17ge9Ofx7Xdh2HJe283bv3ivccNWV7dlChYka0ZyBk70emJPmQs2AR8gKoN6rP8TzL56TdiCmVHBGLHXzrsi06b7Vp/PSg7Aieff0KmRp9LtCUnAWUbMn7qWb9FNyNcehnQzKIBZYek2UUDyg4BJkTNLhpQdggunz0mrQAnaHXA+rmzw16EsORHxrb+i5ghquYHVNp2e1G3dkkSyq7D2ImcxAXRr6tfrPoROkgOoifX7oda/SDKkQNWP2hWZJ/zQo1xOX5kv8yeM+8ucSNt/P1HgbE6TmvDe5vwIl2Ic4cFsXBcc16UDAx60ke83mV44CmJC1t2AIMx4v2Lt36Vtz5clrigN8A1c+0Hf0iJE7Gj7ADQnUYBY/L0fFFsgt8J4WjxiOBFgbPxAHoiykb3bdJ1mwDpGP+jQNkBPBNxcpRf+U0aEcpOACyjGhHKToCoY2rSUHYCYI082ICZO5QdQNT0HzB1pttqQMQGlB1AKcaMGgEZxNQbSThlB7C0Ei+rE8IX3hnwt0cbAcoOIEwsOwzYHp33pA8PHJKdhLIDgOj8ip2cbbTyqdHuHZVO2XX4OGK0ajtqpU+mPImj7DrkK9uTtoF07GYtVKRj1y9pKDsE2IBIKtYNIB3bu7Pe7D3JLp6yQ4Cx+82PbluZrAWBYAy6+NmElmyUHRIkFOA8WNLCAaQvJDCmU7YBVeFJdum1oHtHYMZWrJ2yDUlbOCZy77/aayUwQ9kRQBj15fduysz17yUtEJiJK5yyY4BZ+mlP+tzNe5IGcYVTdkzQyic++TY16XGOCVO2Jf4vPckxHcKjzNIp2zJV6RjTTXPGw4ITJG+f7hJTKDtBkPYL6Zi9L1naUKky5C3HTFs3ZadAvnJq5ZUPvrIqfcQwtErZKYI1OqTb6t6HB82OBFH2DoDuHV07jgjFAQEXk7oulL1DYCKHs2Bxl2smlZMoe4eZnvtOllfvS1R6DE6ZUvYOg1206fm7kgaU3QDYSmysB2UHkEsxP+yPBw8laSg7gPFTh1PL+X68bZdEwaRHoOw6VHO+k8wCxTnwqKUxN8rhewTKDkHtyY4kpL97pluigkBNWFhmwwC0ctQ1QcgTiQtxo2DVDQ1USIrCndVNo26csg2p5nuPVKTP5e/5lf5NxEMy9qTHXnw6VmXj2yWz9Tllx6C24Puyd+NL63jMw6YfHauVD6GYgOEREj2VGmc2ME2LomxL9KJYnXcNpVR1AXF102GEE7QmJUrpLcpuQqJODim7yViqVDuMAmU3EVhTxymRyQlak4Bjw2jRcTZMKLvBgVxkq96ImdUCKDuAmeve2OiIlfLPpkAyWvPVz3+0tv1J2QFUc8CRTXLyWIcvPenHUFYfwziX/9n6HnfDyMaDT2eumR+UK60lf5oSNx1JgrUF31F0Hs/dzHVkIxegx+9F5A0x7qVKXfEkkxic/gtfukJi4z9Jt7IjFpT0UH1GCJIV0shOqYXduCVWa+LheWlMuM5WBGUrgrIVQdmKgOyikNbHkULGFfeKkJbHdZ1CRsp/XhK27lan6F1TmcKloXVXnCGh8FalCL+Fiy8U/QkavsALXijtirhSENIKeE7dKbfc1g+/eOEfzRZsHiPjresAAAAASUVORK5CYII=",
    Xy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABpCAYAAADx7ufsAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhgSURBVHgB7Z0/bxxFGMbfOXvtcxDWhSiAUIQc0RAqW0pIqnAugmwDUiKaCEhw+AJO6mBykekdfwI7EkJQkS6ukiuDhIQ7ypyokGgcEMEhvh323btD6/H92dmdZ3Zmw6+I/9uXe++dfZ53n9kV9fuNGQKx9+Mu0aPfCMGj7e9aZInZ+sVatVqtEYDqytuEZJxorCEEfU4AqnNH6ekvf5L84zmZ5vTCZ/M/bX/TJAsER15eb0uxTIYZf2eahBgjFJLEVoX22tdJ0C4BEJMVmjj7CiEQorJJFphduDxDgOJ2nptjBINrKvdvV5qXGrsyDDcIRBC9SsdOTBGAmXcvf9EgMEEluEUAgtmjVJkeJxQipI3mYqNViT/ak3eif1sEAvVKlU/2V2bry5BjI3Nm4coypHunA5o4h1nZurQeLK42+J24wHEXS7pGILiD+RULoBZMtSEdFiME5HdPnoUWl6SUt3vvV3rvNBdXmzJ6QyD4FcvHHfOI65HgqpNh4u6NDgNkGH6xs7hCIYjuNRe/2up9fPAZr1RuEAgubjCLWU2F4U6LhRWqey+8TkhC2T5QwwMFbr5/cyfqYpjgmjh3LD7+mEfUux1nhK6wmiHDcOcihRXbIhZWyc8dXjP/bjdQtompXniNIAixbkJwwWwRCyukLWKRHNki9ZOHChwLrra4TSD4GASyTbWJanidcjIugnUCMBEdnqDdGwkrtXsZMegH5rfXHhNgmYofTDTZ+muzRQiey39O7mQcY8bLvBDGByjcvS9dmyEgrYcLqyf7fWGgrEXaps5yhbEKgQiyF8hXWxTSQHE8sMBo2xREc2qQbapnsU1nlq6uEEJYvfUS1BbFwmpp9d6grw9/hmX7GnZOjREdPKfWEVwdYUW5j9/9mDj/KkHpI6ySDC0wH7Shc+q5GmxOrSO4fLVFQlJfYZVk9BrJc2qgbYLNqQWtxJ05Ap9tUUjtrVHfNLLAnbNNEjbhikd3pyDHqFqaM0HjeUTZEFhYFWGLVFKpHJ5tIgXXJGpOHXXmMMHFtkhEoowMw92LFFYRreS8eRjpn9VovScQ/IQUMqdG2aLzxwmJlO35tN+busCxbZJ0l0DEtgk0pz67eOWQ4Dq9dBUmrNgaoeg3bx6G5rqIm1PzEo2aU4ckbiVtEwurSIEuEwCwsBppi1S0Coy2Tcg5dTIYgLJF8BhOClt06GdIk/oPjZqYGvuZQHPq8Pdn9PTbXwnC/v7c87FwNxATj8kwfHiZ+vgEssAD583D0JauHdtEMNtUOT6JivdEB8ixdZ9tEWVAu4N71LfXHkY/XCcA8llITzcfx299wMLZombUvamVc5Ls5hNpm9CZYcPAQgxdJJ8TyEjmAnfPNkHn1Lxcu844Lvcdo2uLVPKNj8DxHvTAwARFxHB0yFVg9K4IoG0yAhcXHKLbyNO9TGaRlQQd72Hb5JrgYmF15JM3QaGFmEy2SMXIo0PHe1Bz6jywLQIWN7MtUjHyCP2N92QDfbaoI6zSnS0ahblnLYeUH0VsmxwSXDyxgpJTWCUxVuB4Ti1DmDcOwHYkLfAYTnfbJxnC7LrnabzHocfQCkX7DhnEaIFt7IoAxXtSAbdFKWM4OhhXLs2lL+9A4z3vHS9EcNnYtG1KWCXBPFPgOXURtgm+O6FduUQAIAWObZOgewQCtw21PzwTh9uiD27uEADcWhe2b3i5DbXf3/rwDYJi0BapwArscbznAC7sTsgDVq2Ar96D7mIbuxN6V8NBAS0wOt7TmVOD4j0RwalpJ2M4OsD9Bm9t9PHqPRZs0Q7CFqnYMZQexnvw17JqQ2yRipUC24j3mBRcVjZtA4VVEnsjIXC8x2QXgzdtt5C2SMVagW3Ee0zsCbJwLasNW93LGIns6OByvMfV3Ql5sD61dzne4+ruhDxYL7CVeE+GObVPMRwdigk6geM9WfLUaFtkU1glKaTA8ZwaaJtYbOnYpnjTNvISv4ZjODoUF1V0yDb5FsPRobAC24j3pJlTozdtI2I4OhQaNkbHe0bNqWPVPQdNh7SKEFZJik+TFzinxtsinCVMS+EFxtumWl/bZMcWrTapYNzYDwK86CnTLxgAj/wUZItUnCiw7XgPetM2Ooajgzs7uizEe3qCC26L9oqzRSq4OyNq0vq+uTfz6fwTIcRFAiAmo//qvow69wj2SnRS3mh+dOsROYL1s0mjQF+9h3F907ZJ3Fmie4BtE3bTdvqLhNrCuQKjL3qKwmYMRwf3OpgB3tMYRMsVW6TiZIHR8R7TRLborovdy7jZwQzYNhkEvjshD84WGH1PY1MUEcPRwTmbpIK0TXnhe/U+WFi1EmDPirtLdA/gPY3zot6r10WcLzD6nsZZcdUWqbjfwQw43pMBZ22RihcFRsd7dCk6hqOD8yIryfz2Gt8rYpaKxbl58zD8WKK7RLapcFGD3NCOwKsCo+M9oxh1r14X8arAMeB4z/C/7YewSuJdgdHxnkG4FMPRwb8OZsAXPe2DUzEcHbwsMPqexiqxLYr+JnmIVzZJxdKc2itbpOLnEt0DGO/57084GMPRwesCo+M9vsybh+F3BzOoeA//Tg9tkYr3BUbFe4rctG0S/zuYMR/vcTqGo0MpCmw63uN6DEcHr22SiiHblPlevS5SjiW6h4F4jwReAagISlXgvPGeMtgilXJ1MJM93uNNDEeH0hU4a7zHpxiODqUSWUk0L3rq9bx5GOVborvo2CbfYjg6lLbAaeM9PsZwdChtgWPSWJ4SCqskpS7wqHsa+xrD0aHcHcwMjve0QmpvUckpfYEH2aay2iKV0tokFWVOXVpbpFL+JbpHIt6Dulfv/xRM/f7aVn376016gcBdS9dJojm1pBeKfwF2t5J3JFVFKwAAAABJRU5ErkJggg==",
    qy = () => {
        const e = [{
                id: 1,
                name: "Javascript",
                icon: Hy,
                width: 40,
                height: 40.1
            }, {
                id: 2,
                name: "Typescript",
                icon: Yy,
                width: 41,
                height: 41
            }, {
                id: 3,
                name: "React",
                icon: Ky,
                width: 44,
                height: 40.33
            }, {
                id: 4,
                name: "Next.js",
                icon: zy,
                width: 40,
                height: 40
            }, {
                id: 5,
                name: "Vue.js",
                icon: Xy,
                width: 40,
                height: 34.59
            }, {
                id: 6,
                name: "Nuxt.js",
                icon: Gy,
                width: 56.75,
                height: 38.09
            }, {
                id: 7,
                name: "jQuery",
                icon: Fy,
                width: 40,
                height: 40
            }, {
                id: 8,
                name: "Tailwindcss",
                icon: Qy,
                width: 49.73,
                height: 30.39
            }, {
                id: 9,
                name: "Bootstrap",
                icon: Vy,
                width: 40,
                height: 40
            }, {
                id: 10,
                name: "Figma",
                icon: By,
                width: 26.67,
                height: 40
            }, {
                id: 11,
                name: "PostgreSQL",
                icon: Wy,
                width: 42,
                height: 43.32
            }, {
                id: 12,
                name: "NPM",
                icon: Zy,
                width: 40,
                height: 40
            }, {
                id: 13,
                name: "GIT",
                icon: Iy,
                width: 40,
                height: 40
            }],
            t = {
                hidden: {
                    y: -40
                },
                visible: {
                    y: 0,
                    transition: {
                        delayChildren: .1,
                        staggerChildren: .2,
                        repeat: 0
                    }
                }
            },
            n = {
                hidden: {
                    opacity: 0,
                    y: -20
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            };
        return s.jsxs(I.div, {
            id: "skills",
            variants: t,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            className: "flex flex-col items-center text-center max-w-[600px] mx-auto mt-[80px] sm:mt-[136px] sm:px-0 px-4",
            children: [s.jsx(I.span, {
                variants: n,
                className: "bg-slate-200 px-2 py-1 rounded-[8px] w-fit sm:text-base text-xs",
                children: "Skills"
            }), s.jsx(I.h1, {
                variants: n,
                className: "sm:font-medium font-normal text-xl sm:text-[36px] sm:w-[610px] text-[#00C16A] sm:leading-[38px] md:leading-[48px] mt-3",
                children: "The skills, tools and technologies I am really good at:"
            }), s.jsx("div", {
                className: "flex gap-x-[32px] gap-y-[26px] flex-wrap items-center justify-center mt-[32px]",
                children: e.map(r => s.jsxs("div", {
                    variants: n,
                    className: "flex items-center flex-col gap-2",
                    children: [s.jsx(I.img, {
                        src: r.icon,
                        alt: r.name,
                        width: r.width,
                        height: r.height,
                        whileTap: {
                            scale: .9
                        },
                        initial: {
                            scale: 1
                        },
                        whileHover: {
                            scale: 1.1,
                            transition: {
                                duration: .5
                            }
                        }
                    }), s.jsx(I.span, {
                        className: "text-sm text-[#4B5563] leading-[16px]",
                        children: r.name
                    })]
                }, r.id))
            })]
        })
    };
var cp = {},
    dp = {},
    Xo = {},
    fp = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: {
            startX: 0,
            startY: 0,
            curX: 0,
            curY: 0
        },
        trackStyle: {},
        trackWidth: 0,
        targetSlide: 0
    };
    e.default = t
})(fp);
var Jy = "Expected a function",
    N0 = NaN,
    $y = "[object Symbol]",
    eg = /^\s+|\s+$/g,
    tg = /^[-+]0x[0-9a-f]+$/i,
    ng = /^0b[01]+$/i,
    rg = /^0o[0-7]+$/i,
    ig = parseInt,
    sg = typeof Wt == "object" && Wt && Wt.Object === Object && Wt,
    og = typeof self == "object" && self && self.Object === Object && self,
    ag = sg || og || Function("return this")(),
    lg = Object.prototype,
    ug = lg.toString,
    cg = Math.max,
    dg = Math.min,
    Ga = function() {
        return ag.Date.now()
    };

function fg(e, t, n) {
    var r, i, o, a, l, u, c = 0,
        d = !1,
        f = !1,
        p = !0;
    if (typeof e != "function") throw new TypeError(Jy);
    t = V0(t) || 0, cl(n) && (d = !!n.leading, f = "maxWait" in n, o = f ? cg(V0(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);

    function y(w) {
        var k = r,
            T = i;
        return r = i = void 0, c = w, a = e.apply(T, k), a
    }

    function v(w) {
        return c = w, l = setTimeout(C, t), d ? y(w) : a
    }

    function g(w) {
        var k = w - u,
            T = w - c,
            O = t - k;
        return f ? dg(O, o - T) : O
    }

    function _(w) {
        var k = w - u,
            T = w - c;
        return u === void 0 || k >= t || k < 0 || f && T >= o
    }

    function C() {
        var w = Ga();
        if (_(w)) return h(w);
        l = setTimeout(C, g(w))
    }

    function h(w) {
        return l = void 0, p && r ? y(w) : (r = i = void 0, a)
    }

    function m() {
        l !== void 0 && clearTimeout(l), c = 0, r = u = i = l = void 0
    }

    function x() {
        return l === void 0 ? a : h(Ga())
    }

    function j() {
        var w = Ga(),
            k = _(w);
        if (r = arguments, i = this, u = w, k) {
            if (l === void 0) return v(u);
            if (f) return l = setTimeout(C, t), y(u)
        }
        return l === void 0 && (l = setTimeout(C, t)), a
    }
    return j.cancel = m, j.flush = x, j
}

function cl(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}

function pg(e) {
    return !!e && typeof e == "object"
}

function hg(e) {
    return typeof e == "symbol" || pg(e) && ug.call(e) == $y
}

function V0(e) {
    if (typeof e == "number") return e;
    if (hg(e)) return N0;
    if (cl(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = cl(t) ? t + "" : t
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(eg, "");
    var n = ng.test(e);
    return n || rg.test(e) ? ig(e.slice(2), n ? 2 : 8) : tg.test(e) ? N0 : +e
}
var mg = fg,
    pp = {
        exports: {}
    };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;

        function n() {
            for (var o = "", a = 0; a < arguments.length; a++) {
                var l = arguments[a];
                l && (o = i(o, r(l)))
            }
            return o
        }

        function r(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return n.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var a = "";
            for (var l in o) t.call(o, l) && o[l] && (a = i(a, l));
            return a
        }

        function i(o, a) {
            return a ? o ? o + " " + a : o + a : o
        }
        e.exports ? (n.default = n, e.exports = n) : window.classNames = n
    })()
})(pp);
var qo = pp.exports,
    P = {},
    J2 = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = n(U);

    function n(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    }
    var r = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(o) {
            return t.default.createElement("ul", {
                style: {
                    display: "block"
                }
            }, o)
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: "50px",
        className: "",
        cssEase: "ease",
        customPaging: function(o) {
            return t.default.createElement("button", null, o + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "div",
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0,
        asNavFor: null
    };
    e.default = r
})(J2);
Object.defineProperty(P, "__esModule", {
    value: !0
});
P.checkSpecKeys = P.checkNavigable = P.changeSlide = P.canUseDOM = P.canGoNext = void 0;
P.clamp = mp;
P.extractObject = void 0;
P.filterSettings = Eg;
P.validSettings = P.swipeStart = P.swipeMove = P.swipeEnd = P.slidesOnRight = P.slidesOnLeft = P.slideHandler = P.siblingDirection = P.safePreventDefault = P.lazyStartIndex = P.lazySlidesOnRight = P.lazySlidesOnLeft = P.lazyEndIndex = P.keyHandler = P.initializedState = P.getWidth = P.getTrackLeft = P.getTrackCSS = P.getTrackAnimateCSS = P.getTotalSlides = P.getSwipeDirection = P.getSlideCount = P.getRequiredLazySlides = P.getPreClones = P.getPostClones = P.getOnDemandLazySlides = P.getNavigableIndexes = P.getHeight = void 0;
var Cg = hp(U),
    yg = hp(J2);

function hp(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function ji(e) {
    "@babel/helpers - typeof";
    return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ji(e)
}

function B0(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? B0(Object(n), !0).forEach(function(r) {
            gg(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B0(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function gg(e, t, n) {
    return t = vg(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function vg(e) {
    var t = xg(e, "string");
    return ji(t) == "symbol" ? t : String(t)
}

function xg(e, t) {
    if (ji(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (ji(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function mp(e, t, n) {
    return Math.max(t, Math.min(e, n))
}
var lr = P.safePreventDefault = function(t) {
        var n = ["onTouchStart", "onTouchMove", "onWheel"];
        n.includes(t._reactName) || t.preventDefault()
    },
    Cp = P.getOnDemandLazySlides = function(t) {
        for (var n = [], r = yp(t), i = gp(t), o = r; o < i; o++) t.lazyLoadedList.indexOf(o) < 0 && n.push(o);
        return n
    };
P.getRequiredLazySlides = function(t) {
    for (var n = [], r = yp(t), i = gp(t), o = r; o < i; o++) n.push(o);
    return n
};
var yp = P.lazyStartIndex = function(t) {
        return t.currentSlide - _g(t)
    },
    gp = P.lazyEndIndex = function(t) {
        return t.currentSlide + jg(t)
    },
    _g = P.lazySlidesOnLeft = function(t) {
        return t.centerMode ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0) : 0
    },
    jg = P.lazySlidesOnRight = function(t) {
        return t.centerMode ? Math.floor((t.slidesToShow - 1) / 2) + 1 + (parseInt(t.centerPadding) > 0 ? 1 : 0) : t.slidesToShow
    },
    dl = P.getWidth = function(t) {
        return t && t.offsetWidth || 0
    },
    vp = P.getHeight = function(t) {
        return t && t.offsetHeight || 0
    },
    xp = P.getSwipeDirection = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            r, i, o, a;
        return r = t.startX - t.curX, i = t.startY - t.curY, o = Math.atan2(i, r), a = Math.round(o * 180 / Math.PI), a < 0 && (a = 360 - Math.abs(a)), a <= 45 && a >= 0 || a <= 360 && a >= 315 ? "left" : a >= 135 && a <= 225 ? "right" : n === !0 ? a >= 35 && a <= 135 ? "up" : "down" : "vertical"
    },
    _p = P.canGoNext = function(t) {
        var n = !0;
        return t.infinite || (t.centerMode && t.currentSlide >= t.slideCount - 1 || t.slideCount <= t.slidesToShow || t.currentSlide >= t.slideCount - t.slidesToShow) && (n = !1), n
    };
P.extractObject = function(t, n) {
    var r = {};
    return n.forEach(function(i) {
        return r[i] = t[i]
    }), r
};
P.initializedState = function(t) {
    var n = Cg.default.Children.count(t.children),
        r = t.listRef,
        i = Math.ceil(dl(r)),
        o = t.trackRef && t.trackRef.node,
        a = Math.ceil(dl(o)),
        l;
    if (t.vertical) l = i;
    else {
        var u = t.centerMode && parseInt(t.centerPadding) * 2;
        typeof t.centerPadding == "string" && t.centerPadding.slice(-1) === "%" && (u *= i / 100), l = Math.ceil((i - u) / t.slidesToShow)
    }
    var c = r && vp(r.querySelector('[data-index="0"]')),
        d = c * t.slidesToShow,
        f = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
    t.rtl && t.currentSlide === void 0 && (f = n - 1 - t.initialSlide);
    var p = t.lazyLoadedList || [],
        y = Cp(ee(ee({}, t), {}, {
            currentSlide: f,
            lazyLoadedList: p
        }));
    p = p.concat(y);
    var v = {
        slideCount: n,
        slideWidth: l,
        listWidth: i,
        trackWidth: a,
        currentSlide: f,
        slideHeight: c,
        listHeight: d,
        lazyLoadedList: p
    };
    return t.autoplaying === null && t.autoplay && (v.autoplaying = "playing"), v
};
P.slideHandler = function(t) {
    var n = t.waitForAnimate,
        r = t.animating,
        i = t.fade,
        o = t.infinite,
        a = t.index,
        l = t.slideCount,
        u = t.lazyLoad,
        c = t.currentSlide,
        d = t.centerMode,
        f = t.slidesToScroll,
        p = t.slidesToShow,
        y = t.useCSS,
        v = t.lazyLoadedList;
    if (n && r) return {};
    var g = a,
        _, C, h, m = {},
        x = {},
        j = o ? a : mp(a, 0, l - 1);
    if (i) {
        if (!o && (a < 0 || a >= l)) return {};
        a < 0 ? g = a + l : a >= l && (g = a - l), u && v.indexOf(g) < 0 && (v = v.concat(g)), m = {
            animating: !0,
            currentSlide: g,
            lazyLoadedList: v,
            targetSlide: g
        }, x = {
            animating: !1,
            targetSlide: g
        }
    } else _ = g, g < 0 ? (_ = g + l, o ? l % f !== 0 && (_ = l - l % f) : _ = 0) : !_p(t) && g > c ? g = _ = c : d && g >= l ? (g = o ? l : l - 1, _ = o ? 0 : l - 1) : g >= l && (_ = g - l, o ? l % f !== 0 && (_ = 0) : _ = l - p), !o && g + p >= l && (_ = l - p), C = fo(ee(ee({}, t), {}, {
        slideIndex: g
    })), h = fo(ee(ee({}, t), {}, {
        slideIndex: _
    })), o || (C === h && (g = _), C = h), u && (v = v.concat(Cp(ee(ee({}, t), {}, {
        currentSlide: g
    })))), y ? (m = {
        animating: !0,
        currentSlide: _,
        trackStyle: jp(ee(ee({}, t), {}, {
            left: C
        })),
        lazyLoadedList: v,
        targetSlide: j
    }, x = {
        animating: !1,
        currentSlide: _,
        trackStyle: co(ee(ee({}, t), {}, {
            left: h
        })),
        swipeLeft: null,
        targetSlide: j
    }) : m = {
        currentSlide: _,
        trackStyle: co(ee(ee({}, t), {}, {
            left: h
        })),
        lazyLoadedList: v,
        targetSlide: j
    };
    return {
        state: m,
        nextState: x
    }
};
P.changeSlide = function(t, n) {
    var r, i, o, a, l, u = t.slidesToScroll,
        c = t.slidesToShow,
        d = t.slideCount,
        f = t.currentSlide,
        p = t.targetSlide,
        y = t.lazyLoad,
        v = t.infinite;
    if (a = d % u !== 0, r = a ? 0 : (d - f) % u, n.message === "previous") o = r === 0 ? u : c - r, l = f - o, y && !v && (i = f - o, l = i === -1 ? d - 1 : i), v || (l = p - u);
    else if (n.message === "next") o = r === 0 ? u : r, l = f + o, y && !v && (l = (f + u) % d + r), v || (l = p + u);
    else if (n.message === "dots") l = n.index * n.slidesToScroll;
    else if (n.message === "children") {
        if (l = n.index, v) {
            var g = Og(ee(ee({}, t), {}, {
                targetSlide: l
            }));
            l > n.currentSlide && g === "left" ? l = l - d : l < n.currentSlide && g === "right" && (l = l + d)
        }
    } else n.message === "index" && (l = Number(n.index));
    return l
};
P.keyHandler = function(t, n, r) {
    return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : t.keyCode === 37 ? r ? "next" : "previous" : t.keyCode === 39 ? r ? "previous" : "next" : ""
};
P.swipeStart = function(t, n, r) {
    return t.target.tagName === "IMG" && lr(t), !n || !r && t.type.indexOf("mouse") !== -1 ? "" : {
        dragging: !0,
        touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY
        }
    }
};
P.swipeMove = function(t, n) {
    var r = n.scrolling,
        i = n.animating,
        o = n.vertical,
        a = n.swipeToSlide,
        l = n.verticalSwiping,
        u = n.rtl,
        c = n.currentSlide,
        d = n.edgeFriction,
        f = n.edgeDragged,
        p = n.onEdge,
        y = n.swiped,
        v = n.swiping,
        g = n.slideCount,
        _ = n.slidesToScroll,
        C = n.infinite,
        h = n.touchObject,
        m = n.swipeEvent,
        x = n.listHeight,
        j = n.listWidth;
    if (!r) {
        if (i) return lr(t);
        o && a && l && lr(t);
        var w, k = {},
            T = fo(n);
        h.curX = t.touches ? t.touches[0].pageX : t.clientX, h.curY = t.touches ? t.touches[0].pageY : t.clientY, h.swipeLength = Math.round(Math.sqrt(Math.pow(h.curX - h.startX, 2)));
        var O = Math.round(Math.sqrt(Math.pow(h.curY - h.startY, 2)));
        if (!l && !v && O > 10) return {
            scrolling: !0
        };
        l && (h.swipeLength = O);
        var S = (u ? -1 : 1) * (h.curX > h.startX ? 1 : -1);
        l && (S = h.curY > h.startY ? 1 : -1);
        var b = Math.ceil(g / _),
            L = xp(n.touchObject, l),
            R = h.swipeLength;
        return C || (c === 0 && (L === "right" || L === "down") || c + 1 >= b && (L === "left" || L === "up") || !_p(n) && (L === "left" || L === "up")) && (R = h.swipeLength * d, f === !1 && p && (p(L), k.edgeDragged = !0)), !y && m && (m(L), k.swiped = !0), o ? w = T + R * (x / j) * S : u ? w = T - R * S : w = T + R * S, l && (w = T + R * S), k = ee(ee({}, k), {}, {
            touchObject: h,
            swipeLeft: w,
            trackStyle: co(ee(ee({}, n), {}, {
                left: w
            }))
        }), Math.abs(h.curX - h.startX) < Math.abs(h.curY - h.startY) * .8 || h.swipeLength > 10 && (k.swiping = !0, lr(t)), k
    }
};
P.swipeEnd = function(t, n) {
    var r = n.dragging,
        i = n.swipe,
        o = n.touchObject,
        a = n.listWidth,
        l = n.touchThreshold,
        u = n.verticalSwiping,
        c = n.listHeight,
        d = n.swipeToSlide,
        f = n.scrolling,
        p = n.onSwipe,
        y = n.targetSlide,
        v = n.currentSlide,
        g = n.infinite;
    if (!r) return i && lr(t), {};
    var _ = u ? c / l : a / l,
        C = xp(o, u),
        h = {
            dragging: !1,
            edgeDragged: !1,
            scrolling: !1,
            swiping: !1,
            swiped: !1,
            swipeLeft: null,
            touchObject: {}
        };
    if (f || !o.swipeLength) return h;
    if (o.swipeLength > _) {
        lr(t), p && p(C);
        var m, x, j = g ? v : y;
        switch (C) {
            case "left":
            case "up":
                x = j + F0(n), m = d ? I0(n, x) : x, h.currentDirection = 0;
                break;
            case "right":
            case "down":
                x = j - F0(n), m = d ? I0(n, x) : x, h.currentDirection = 1;
                break;
            default:
                m = j
        }
        h.triggerSlideHandler = m
    } else {
        var w = fo(n);
        h.trackStyle = jp(ee(ee({}, n), {}, {
            left: w
        }))
    }
    return h
};
var wg = P.getNavigableIndexes = function(t) {
        for (var n = t.infinite ? t.slideCount * 2 : t.slideCount, r = t.infinite ? t.slidesToShow * -1 : 0, i = t.infinite ? t.slidesToShow * -1 : 0, o = []; r < n;) o.push(r), r = i + t.slidesToScroll, i += Math.min(t.slidesToScroll, t.slidesToShow);
        return o
    },
    I0 = P.checkNavigable = function(t, n) {
        var r = wg(t),
            i = 0;
        if (n > r[r.length - 1]) n = r[r.length - 1];
        else
            for (var o in r) {
                if (n < r[o]) {
                    n = i;
                    break
                }
                i = r[o]
            }
        return n
    },
    F0 = P.getSlideCount = function(t) {
        var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
        if (t.swipeToSlide) {
            var r, i = t.listRef,
                o = i.querySelectorAll && i.querySelectorAll(".slick-slide") || [];
            if (Array.from(o).every(function(u) {
                    if (t.vertical) {
                        if (u.offsetTop + vp(u) / 2 > t.swipeLeft * -1) return r = u, !1
                    } else if (u.offsetLeft - n + dl(u) / 2 > t.swipeLeft * -1) return r = u, !1;
                    return !0
                }), !r) return 0;
            var a = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
                l = Math.abs(r.dataset.index - a) || 1;
            return l
        } else return t.slidesToScroll
    },
    $2 = P.checkSpecKeys = function(t, n) {
        return n.reduce(function(r, i) {
            return r && t.hasOwnProperty(i)
        }, !0) ? null : console.error("Keys Missing:", t)
    },
    co = P.getTrackCSS = function(t) {
        $2(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
        var n, r, i = t.slideCount + 2 * t.slidesToShow;
        t.vertical ? r = i * t.slideHeight : n = Tg(t) * t.slideWidth;
        var o = {
            opacity: 1,
            transition: "",
            WebkitTransition: ""
        };
        if (t.useTransform) {
            var a = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)",
                l = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)",
                u = t.vertical ? "translateY(" + t.left + "px)" : "translateX(" + t.left + "px)";
            o = ee(ee({}, o), {}, {
                WebkitTransform: a,
                transform: l,
                msTransform: u
            })
        } else t.vertical ? o.top = t.left : o.left = t.left;
        return t.fade && (o = {
            opacity: 1
        }), n && (o.width = n), r && (o.height = r), window && !window.addEventListener && window.attachEvent && (t.vertical ? o.marginTop = t.left + "px" : o.marginLeft = t.left + "px"), o
    },
    jp = P.getTrackAnimateCSS = function(t) {
        $2(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
        var n = co(t);
        return t.useTransform ? (n.WebkitTransition = "-webkit-transform " + t.speed + "ms " + t.cssEase, n.transition = "transform " + t.speed + "ms " + t.cssEase) : t.vertical ? n.transition = "top " + t.speed + "ms " + t.cssEase : n.transition = "left " + t.speed + "ms " + t.cssEase, n
    },
    fo = P.getTrackLeft = function(t) {
        if (t.unslick) return 0;
        $2(t, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
        var n = t.slideIndex,
            r = t.trackRef,
            i = t.infinite,
            o = t.centerMode,
            a = t.slideCount,
            l = t.slidesToShow,
            u = t.slidesToScroll,
            c = t.slideWidth,
            d = t.listWidth,
            f = t.variableWidth,
            p = t.slideHeight,
            y = t.fade,
            v = t.vertical,
            g = 0,
            _, C, h = 0;
        if (y || t.slideCount === 1) return 0;
        var m = 0;
        if (i ? (m = -Ms(t), a % u !== 0 && n + u > a && (m = -(n > a ? l - (n - a) : a % u)), o && (m += parseInt(l / 2))) : (a % u !== 0 && n + u > a && (m = l - a % u), o && (m = parseInt(l / 2))), g = m * c, h = m * p, v ? _ = n * p * -1 + h : _ = n * c * -1 + g, f === !0) {
            var x, j = r && r.node;
            if (x = n + Ms(t), C = j && j.childNodes[x], _ = C ? C.offsetLeft * -1 : 0, o === !0) {
                x = i ? n + Ms(t) : n, C = j && j.children[x], _ = 0;
                for (var w = 0; w < x; w++) _ -= j && j.children[w] && j.children[w].offsetWidth;
                _ -= parseInt(t.centerPadding), _ += C && (d - C.offsetWidth) / 2
            }
        }
        return _
    },
    Ms = P.getPreClones = function(t) {
        return t.unslick || !t.infinite ? 0 : t.variableWidth ? t.slideCount : t.slidesToShow + (t.centerMode ? 1 : 0)
    },
    Sg = P.getPostClones = function(t) {
        return t.unslick || !t.infinite ? 0 : t.slideCount
    },
    Tg = P.getTotalSlides = function(t) {
        return t.slideCount === 1 ? 1 : Ms(t) + t.slideCount + Sg(t)
    },
    Og = P.siblingDirection = function(t) {
        return t.targetSlide > t.currentSlide ? t.targetSlide > t.currentSlide + kg(t) ? "left" : "right" : t.targetSlide < t.currentSlide - Ag(t) ? "right" : "left"
    },
    kg = P.slidesOnRight = function(t) {
        var n = t.slidesToShow,
            r = t.centerMode,
            i = t.rtl,
            o = t.centerPadding;
        if (r) {
            var a = (n - 1) / 2 + 1;
            return parseInt(o) > 0 && (a += 1), i && n % 2 === 0 && (a += 1), a
        }
        return i ? 0 : n - 1
    },
    Ag = P.slidesOnLeft = function(t) {
        var n = t.slidesToShow,
            r = t.centerMode,
            i = t.rtl,
            o = t.centerPadding;
        if (r) {
            var a = (n - 1) / 2 + 1;
            return parseInt(o) > 0 && (a += 1), !i && n % 2 === 0 && (a += 1), a
        }
        return i ? n - 1 : 0
    };
P.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
};
var Pg = P.validSettings = Object.keys(yg.default);

function Eg(e) {
    return Pg.reduce(function(t, n) {
        return e.hasOwnProperty(n) && (t[n] = e[n]), t
    }, {})
}
var Jo = {};
Object.defineProperty(Jo, "__esModule", {
    value: !0
});
Jo.Track = void 0;
var zt = wp(U),
    Wa = wp(qo),
    Ka = P;

function wp(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function gr(e) {
    "@babel/helpers - typeof";
    return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, gr(e)
}

function fl() {
    return fl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, fl.apply(this, arguments)
}

function Mg(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function H0(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Tp(r.key), r)
    }
}

function bg(e, t, n) {
    return t && H0(e.prototype, t), n && H0(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Ug(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && pl(e, t)
}

function pl(e, t) {
    return pl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r
    }, pl(e, t)
}

function Lg(e) {
    var t = Sp();
    return function() {
        var r = po(e),
            i;
        if (t) {
            var o = po(this).constructor;
            i = Reflect.construct(r, arguments, o)
        } else i = r.apply(this, arguments);
        return Rg(this, i)
    }
}

function Rg(e, t) {
    if (t && (gr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return hl(e)
}

function hl(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Sp() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Sp = function() {
        return !!e
    })()
}

function po(e) {
    return po = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, po(e)
}

function z0(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Ne(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? z0(Object(n), !0).forEach(function(r) {
            ml(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z0(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function ml(e, t, n) {
    return t = Tp(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Tp(e) {
    var t = Dg(e, "string");
    return gr(t) == "symbol" ? t : String(t)
}

function Dg(e, t) {
    if (gr(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (gr(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Qa = function(t) {
        var n, r, i, o, a;
        t.rtl ? a = t.slideCount - 1 - t.index : a = t.index, i = a < 0 || a >= t.slideCount, t.centerMode ? (o = Math.floor(t.slidesToShow / 2), r = (a - t.currentSlide) % t.slideCount === 0, a > t.currentSlide - o - 1 && a <= t.currentSlide + o && (n = !0)) : n = t.currentSlide <= a && a < t.currentSlide + t.slidesToShow;
        var l;
        t.targetSlide < 0 ? l = t.targetSlide + t.slideCount : t.targetSlide >= t.slideCount ? l = t.targetSlide - t.slideCount : l = t.targetSlide;
        var u = a === l;
        return {
            "slick-slide": !0,
            "slick-active": n,
            "slick-center": r,
            "slick-cloned": i,
            "slick-current": u
        }
    },
    Ng = function(t) {
        var n = {};
        return (t.variableWidth === void 0 || t.variableWidth === !1) && (n.width = t.slideWidth), t.fade && (n.position = "relative", t.vertical ? n.top = -t.index * parseInt(t.slideHeight) : n.left = -t.index * parseInt(t.slideWidth), n.opacity = t.currentSlide === t.index ? 1 : 0, n.zIndex = t.currentSlide === t.index ? 999 : 998, t.useCSS && (n.transition = "opacity " + t.speed + "ms " + t.cssEase + ", visibility " + t.speed + "ms " + t.cssEase)), n
    },
    Ya = function(t, n) {
        return t.key || n
    },
    Vg = function(t) {
        var n, r = [],
            i = [],
            o = [],
            a = zt.default.Children.count(t.children),
            l = (0, Ka.lazyStartIndex)(t),
            u = (0, Ka.lazyEndIndex)(t);
        return zt.default.Children.forEach(t.children, function(c, d) {
            var f, p = {
                message: "children",
                index: d,
                slidesToScroll: t.slidesToScroll,
                currentSlide: t.currentSlide
            };
            !t.lazyLoad || t.lazyLoad && t.lazyLoadedList.indexOf(d) >= 0 ? f = c : f = zt.default.createElement("div", null);
            var y = Ng(Ne(Ne({}, t), {}, {
                    index: d
                })),
                v = f.props.className || "",
                g = Qa(Ne(Ne({}, t), {}, {
                    index: d
                }));
            if (r.push(zt.default.cloneElement(f, {
                    key: "original" + Ya(f, d),
                    "data-index": d,
                    className: (0, Wa.default)(g, v),
                    tabIndex: "-1",
                    "aria-hidden": !g["slick-active"],
                    style: Ne(Ne({
                        outline: "none"
                    }, f.props.style || {}), y),
                    onClick: function(h) {
                        f.props && f.props.onClick && f.props.onClick(h), t.focusOnSelect && t.focusOnSelect(p)
                    }
                })), t.infinite && t.fade === !1) {
                var _ = a - d;
                _ <= (0, Ka.getPreClones)(t) && (n = -_, n >= l && (f = c), g = Qa(Ne(Ne({}, t), {}, {
                    index: n
                })), i.push(zt.default.cloneElement(f, {
                    key: "precloned" + Ya(f, n),
                    "data-index": n,
                    tabIndex: "-1",
                    className: (0, Wa.default)(g, v),
                    "aria-hidden": !g["slick-active"],
                    style: Ne(Ne({}, f.props.style || {}), y),
                    onClick: function(h) {
                        f.props && f.props.onClick && f.props.onClick(h), t.focusOnSelect && t.focusOnSelect(p)
                    }
                }))), n = a + d, n < u && (f = c), g = Qa(Ne(Ne({}, t), {}, {
                    index: n
                })), o.push(zt.default.cloneElement(f, {
                    key: "postcloned" + Ya(f, n),
                    "data-index": n,
                    tabIndex: "-1",
                    className: (0, Wa.default)(g, v),
                    "aria-hidden": !g["slick-active"],
                    style: Ne(Ne({}, f.props.style || {}), y),
                    onClick: function(h) {
                        f.props && f.props.onClick && f.props.onClick(h), t.focusOnSelect && t.focusOnSelect(p)
                    }
                }))
            }
        }), t.rtl ? i.concat(r, o).reverse() : i.concat(r, o)
    };
Jo.Track = function(e) {
    Ug(n, e);
    var t = Lg(n);

    function n() {
        var r;
        Mg(this, n);
        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
        return r = t.call.apply(t, [this].concat(o)), ml(hl(r), "node", null), ml(hl(r), "handleRef", function(l) {
            r.node = l
        }), r
    }
    return bg(n, [{
        key: "render",
        value: function() {
            var i = Vg(this.props),
                o = this.props,
                a = o.onMouseEnter,
                l = o.onMouseOver,
                u = o.onMouseLeave,
                c = {
                    onMouseEnter: a,
                    onMouseOver: l,
                    onMouseLeave: u
                };
            return zt.default.createElement("div", fl({
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle
            }, c), i)
        }
    }]), n
}(zt.default.PureComponent);
var $o = {};

function vr(e) {
    "@babel/helpers - typeof";
    return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, vr(e)
}
Object.defineProperty($o, "__esModule", {
    value: !0
});
$o.Dots = void 0;
var hs = Op(U),
    Bg = Op(qo),
    Z0 = P;

function Op(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function G0(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Ig(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? G0(Object(n), !0).forEach(function(r) {
            Fg(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G0(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function Fg(e, t, n) {
    return t = kp(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Hg(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function W0(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, kp(r.key), r)
    }
}

function zg(e, t, n) {
    return t && W0(e.prototype, t), n && W0(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function kp(e) {
    var t = Zg(e, "string");
    return vr(t) == "symbol" ? t : String(t)
}

function Zg(e, t) {
    if (vr(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (vr(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Gg(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Cl(e, t)
}

function Cl(e, t) {
    return Cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r
    }, Cl(e, t)
}

function Wg(e) {
    var t = Ap();
    return function() {
        var r = ho(e),
            i;
        if (t) {
            var o = ho(this).constructor;
            i = Reflect.construct(r, arguments, o)
        } else i = r.apply(this, arguments);
        return Kg(this, i)
    }
}

function Kg(e, t) {
    if (t && (vr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Qg(e)
}

function Qg(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Ap() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Ap = function() {
        return !!e
    })()
}

function ho(e) {
    return ho = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, ho(e)
}
var Yg = function(t) {
    var n;
    return t.infinite ? n = Math.ceil(t.slideCount / t.slidesToScroll) : n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1, n
};
$o.Dots = function(e) {
    Gg(n, e);
    var t = Wg(n);

    function n() {
        return Hg(this, n), t.apply(this, arguments)
    }
    return zg(n, [{
        key: "clickHandler",
        value: function(i, o) {
            o.preventDefault(), this.props.clickHandler(i)
        }
    }, {
        key: "render",
        value: function() {
            for (var i = this.props, o = i.onMouseEnter, a = i.onMouseOver, l = i.onMouseLeave, u = i.infinite, c = i.slidesToScroll, d = i.slidesToShow, f = i.slideCount, p = i.currentSlide, y = Yg({
                    slideCount: f,
                    slidesToScroll: c,
                    slidesToShow: d,
                    infinite: u
                }), v = {
                    onMouseEnter: o,
                    onMouseOver: a,
                    onMouseLeave: l
                }, g = [], _ = 0; _ < y; _++) {
                var C = (_ + 1) * c - 1,
                    h = u ? C : (0, Z0.clamp)(C, 0, f - 1),
                    m = h - (c - 1),
                    x = u ? m : (0, Z0.clamp)(m, 0, f - 1),
                    j = (0, Bg.default)({
                        "slick-active": u ? p >= x && p <= h : p === x
                    }),
                    w = {
                        message: "dots",
                        index: _,
                        slidesToScroll: c,
                        currentSlide: p
                    },
                    k = this.clickHandler.bind(this, w);
                g = g.concat(hs.default.createElement("li", {
                    key: _,
                    className: j
                }, hs.default.cloneElement(this.props.customPaging(_), {
                    onClick: k
                })))
            }
            return hs.default.cloneElement(this.props.appendDots(g), Ig({
                className: this.props.dotsClass
            }, v))
        }
    }]), n
}(hs.default.PureComponent);
var xr = {};

function _r(e) {
    "@babel/helpers - typeof";
    return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _r(e)
}
Object.defineProperty(xr, "__esModule", {
    value: !0
});
xr.PrevArrow = xr.NextArrow = void 0;
var ur = Ep(U),
    Pp = Ep(qo),
    Xg = P;

function Ep(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function mo() {
    return mo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, mo.apply(this, arguments)
}

function K0(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Co(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? K0(Object(n), !0).forEach(function(r) {
            qg(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K0(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function qg(e, t, n) {
    return t = Up(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Mp(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Q0(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Up(r.key), r)
    }
}

function bp(e, t, n) {
    return t && Q0(e.prototype, t), n && Q0(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Up(e) {
    var t = Jg(e, "string");
    return _r(t) == "symbol" ? t : String(t)
}

function Jg(e, t) {
    if (_r(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (_r(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Lp(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && yl(e, t)
}

function yl(e, t) {
    return yl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r
    }, yl(e, t)
}

function Rp(e) {
    var t = Dp();
    return function() {
        var r = yo(e),
            i;
        if (t) {
            var o = yo(this).constructor;
            i = Reflect.construct(r, arguments, o)
        } else i = r.apply(this, arguments);
        return $g(this, i)
    }
}

function $g(e, t) {
    if (t && (_r(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ev(e)
}

function ev(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Dp() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Dp = function() {
        return !!e
    })()
}

function yo(e) {
    return yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, yo(e)
}
xr.PrevArrow = function(e) {
    Lp(n, e);
    var t = Rp(n);

    function n() {
        return Mp(this, n), t.apply(this, arguments)
    }
    return bp(n, [{
        key: "clickHandler",
        value: function(i, o) {
            o && o.preventDefault(), this.props.clickHandler(i, o)
        }
    }, {
        key: "render",
        value: function() {
            var i = {
                    "slick-arrow": !0,
                    "slick-prev": !0
                },
                o = this.clickHandler.bind(this, {
                    message: "previous"
                });
            !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (i["slick-disabled"] = !0, o = null);
            var a = {
                    key: "0",
                    "data-role": "none",
                    className: (0, Pp.default)(i),
                    style: {
                        display: "block"
                    },
                    onClick: o
                },
                l = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                },
                u;
            return this.props.prevArrow ? u = ur.default.cloneElement(this.props.prevArrow, Co(Co({}, a), l)) : u = ur.default.createElement("button", mo({
                key: "0",
                type: "button"
            }, a), " ", "Previous"), u
        }
    }]), n
}(ur.default.PureComponent);
xr.NextArrow = function(e) {
    Lp(n, e);
    var t = Rp(n);

    function n() {
        return Mp(this, n), t.apply(this, arguments)
    }
    return bp(n, [{
        key: "clickHandler",
        value: function(i, o) {
            o && o.preventDefault(), this.props.clickHandler(i, o)
        }
    }, {
        key: "render",
        value: function() {
            var i = {
                    "slick-arrow": !0,
                    "slick-next": !0
                },
                o = this.clickHandler.bind(this, {
                    message: "next"
                });
            (0, Xg.canGoNext)(this.props) || (i["slick-disabled"] = !0, o = null);
            var a = {
                    key: "1",
                    "data-role": "none",
                    className: (0, Pp.default)(i),
                    style: {
                        display: "block"
                    },
                    onClick: o
                },
                l = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                },
                u;
            return this.props.nextArrow ? u = ur.default.cloneElement(this.props.nextArrow, Co(Co({}, a), l)) : u = ur.default.createElement("button", mo({
                key: "1",
                type: "button"
            }, a), " ", "Next"), u
        }
    }]), n
}(ur.default.PureComponent);
var Np = function() {
        if (typeof Map < "u") return Map;

        function e(t, n) {
            var r = -1;
            return t.some(function(i, o) {
                return i[0] === n ? (r = o, !0) : !1
            }), r
        }
        return function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(n) {
                var r = e(this.__entries__, n),
                    i = this.__entries__[r];
                return i && i[1]
            }, t.prototype.set = function(n, r) {
                var i = e(this.__entries__, n);
                ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r])
            }, t.prototype.delete = function(n) {
                var r = this.__entries__,
                    i = e(r, n);
                ~i && r.splice(i, 1)
            }, t.prototype.has = function(n) {
                return !!~e(this.__entries__, n)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(n, r) {
                r === void 0 && (r = null);
                for (var i = 0, o = this.__entries__; i < o.length; i++) {
                    var a = o[i];
                    n.call(r, a[1], a[0])
                }
            }, t
        }()
    }(),
    gl = typeof window < "u" && typeof document < "u" && window.document === document,
    go = function() {
        return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")()
    }(),
    tv = function() {
        return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(go) : function(e) {
            return setTimeout(function() {
                return e(Date.now())
            }, 1e3 / 60)
        }
    }(),
    nv = 2;

function rv(e, t) {
    var n = !1,
        r = !1,
        i = 0;

    function o() {
        n && (n = !1, e()), r && l()
    }

    function a() {
        tv(o)
    }

    function l() {
        var u = Date.now();
        if (n) {
            if (u - i < nv) return;
            r = !0
        } else n = !0, r = !1, setTimeout(a, t);
        i = u
    }
    return l
}
var iv = 20,
    sv = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    ov = typeof MutationObserver < "u",
    av = function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = rv(this.refresh.bind(this), iv)
        }
        return e.prototype.addObserver = function(t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(t) {
            var n = this.observers_,
                r = n.indexOf(t);
            ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            var t = this.updateObservers_();
            t && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var t = this.observers_.filter(function(n) {
                return n.gatherActive(), n.hasActive()
            });
            return t.forEach(function(n) {
                return n.broadcastActive()
            }), t.length > 0
        }, e.prototype.connect_ = function() {
            !gl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ov ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            !gl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(t) {
            var n = t.propertyName,
                r = n === void 0 ? "" : n,
                i = sv.some(function(o) {
                    return !!~r.indexOf(o)
                });
            i && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(),
    Vp = function(e, t) {
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
    jr = function(e) {
        var t = e && e.ownerDocument && e.ownerDocument.defaultView;
        return t || go
    },
    Bp = ea(0, 0, 0, 0);

function vo(e) {
    return parseFloat(e) || 0
}

function Y0(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce(function(r, i) {
        var o = e["border-" + i + "-width"];
        return r + vo(o)
    }, 0)
}

function lv(e) {
    for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r],
            a = e["padding-" + o];
        n[o] = vo(a)
    }
    return n
}

function uv(e) {
    var t = e.getBBox();
    return ea(0, 0, t.width, t.height)
}

function cv(e) {
    var t = e.clientWidth,
        n = e.clientHeight;
    if (!t && !n) return Bp;
    var r = jr(e).getComputedStyle(e),
        i = lv(r),
        o = i.left + i.right,
        a = i.top + i.bottom,
        l = vo(r.width),
        u = vo(r.height);
    if (r.boxSizing === "border-box" && (Math.round(l + o) !== t && (l -= Y0(r, "left", "right") + o), Math.round(u + a) !== n && (u -= Y0(r, "top", "bottom") + a)), !fv(e)) {
        var c = Math.round(l + o) - t,
            d = Math.round(u + a) - n;
        Math.abs(c) !== 1 && (l -= c), Math.abs(d) !== 1 && (u -= d)
    }
    return ea(i.left, i.top, l, u)
}
var dv = function() {
    return typeof SVGGraphicsElement < "u" ? function(e) {
        return e instanceof jr(e).SVGGraphicsElement
    } : function(e) {
        return e instanceof jr(e).SVGElement && typeof e.getBBox == "function"
    }
}();

function fv(e) {
    return e === jr(e).document.documentElement
}

function pv(e) {
    return gl ? dv(e) ? uv(e) : cv(e) : Bp
}

function hv(e) {
    var t = e.x,
        n = e.y,
        r = e.width,
        i = e.height,
        o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
        a = Object.create(o.prototype);
    return Vp(a, {
        x: t,
        y: n,
        width: r,
        height: i,
        top: n,
        right: t + r,
        bottom: i + n,
        left: t
    }), a
}

function ea(e, t, n, r) {
    return {
        x: e,
        y: t,
        width: n,
        height: r
    }
}
var mv = function() {
        function e(t) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ea(0, 0, 0, 0), this.target = t
        }
        return e.prototype.isActive = function() {
            var t = pv(this.target);
            return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        }, e
    }(),
    Cv = function() {
        function e(t, n) {
            var r = hv(n);
            Vp(this, {
                target: t,
                contentRect: r
            })
        }
        return e
    }(),
    yv = function() {
        function e(t, n, r) {
            if (this.activeObservations_ = [], this.observations_ = new Np, typeof t != "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r
        }
        return e.prototype.observe = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(t instanceof jr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var n = this.observations_;
                n.has(t) || (n.set(t, new mv(t)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(t instanceof jr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var n = this.observations_;
                n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var t = this;
            this.clearActive(), this.observations_.forEach(function(n) {
                n.isActive() && t.activeObservations_.push(n)
            })
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var t = this.callbackCtx_,
                    n = this.activeObservations_.map(function(r) {
                        return new Cv(r.target, r.broadcastRect())
                    });
                this.callback_.call(t, n, t), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    }(),
    Ip = typeof WeakMap < "u" ? new WeakMap : new Np,
    Fp = function() {
        function e(t) {
            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var n = av.getInstance(),
                r = new yv(t, n, this);
            Ip.set(this, r)
        }
        return e
    }();
["observe", "unobserve", "disconnect"].forEach(function(e) {
    Fp.prototype[e] = function() {
        var t;
        return (t = Ip.get(this))[e].apply(t, arguments)
    }
});
var gv = function() {
    return typeof go.ResizeObserver < "u" ? go.ResizeObserver : Fp
}();
const vv = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: gv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xv = Gp(vv);
Object.defineProperty(Xo, "__esModule", {
    value: !0
});
Xo.InnerSlider = void 0;
var be = Fi(U),
    _v = Fi(fp),
    jv = Fi(mg),
    wv = Fi(qo),
    ne = P,
    Sv = Jo,
    Tv = $o,
    X0 = xr,
    Ov = Fi(xv);

function Fi(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Ln(e) {
    "@babel/helpers - typeof";
    return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ln(e)
}

function xo() {
    return xo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, xo.apply(this, arguments)
}

function kv(e, t) {
    if (e == null) return {};
    var n = Av(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function Av(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function q0(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? q0(Object(n), !0).forEach(function(r) {
            z(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q0(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function Pv(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function J0(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, zp(r.key), r)
    }
}

function Ev(e, t, n) {
    return t && J0(e.prototype, t), n && J0(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Mv(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && vl(e, t)
}

function vl(e, t) {
    return vl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r
    }, vl(e, t)
}

function bv(e) {
    var t = Hp();
    return function() {
        var r = _o(e),
            i;
        if (t) {
            var o = _o(this).constructor;
            i = Reflect.construct(r, arguments, o)
        } else i = r.apply(this, arguments);
        return Uv(this, i)
    }
}

function Uv(e, t) {
    if (t && (Ln(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return H(e)
}

function H(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Hp() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Hp = function() {
        return !!e
    })()
}

function _o(e) {
    return _o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, _o(e)
}

function z(e, t, n) {
    return t = zp(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function zp(e) {
    var t = Lv(e, "string");
    return Ln(t) == "symbol" ? t : String(t)
}

function Lv(e, t) {
    if (Ln(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (Ln(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
Xo.InnerSlider = function(e) {
    Mv(n, e);
    var t = bv(n);

    function n(r) {
        var i;
        Pv(this, n), i = t.call(this, r), z(H(i), "listRefHandler", function(a) {
            return i.list = a
        }), z(H(i), "trackRefHandler", function(a) {
            return i.track = a
        }), z(H(i), "adaptHeight", function() {
            if (i.props.adaptiveHeight && i.list) {
                var a = i.list.querySelector('[data-index="'.concat(i.state.currentSlide, '"]'));
                i.list.style.height = (0, ne.getHeight)(a) + "px"
            }
        }), z(H(i), "componentDidMount", function() {
            if (i.props.onInit && i.props.onInit(), i.props.lazyLoad) {
                var a = (0, ne.getOnDemandLazySlides)(V(V({}, i.props), i.state));
                a.length > 0 && (i.setState(function(u) {
                    return {
                        lazyLoadedList: u.lazyLoadedList.concat(a)
                    }
                }), i.props.onLazyLoad && i.props.onLazyLoad(a))
            }
            var l = V({
                listRef: i.list,
                trackRef: i.track
            }, i.props);
            i.updateState(l, !0, function() {
                i.adaptHeight(), i.props.autoplay && i.autoPlay("update")
            }), i.props.lazyLoad === "progressive" && (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)), i.ro = new Ov.default(function() {
                i.state.animating ? (i.onWindowResized(!1), i.callbackTimers.push(setTimeout(function() {
                    return i.onWindowResized()
                }, i.props.speed))) : i.onWindowResized()
            }), i.ro.observe(i.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(u) {
                u.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null, u.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null
            }), window.addEventListener ? window.addEventListener("resize", i.onWindowResized) : window.attachEvent("onresize", i.onWindowResized)
        }), z(H(i), "componentWillUnmount", function() {
            i.animationEndCallback && clearTimeout(i.animationEndCallback), i.lazyLoadTimer && clearInterval(i.lazyLoadTimer), i.callbackTimers.length && (i.callbackTimers.forEach(function(a) {
                return clearTimeout(a)
            }), i.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", i.onWindowResized) : window.detachEvent("onresize", i.onWindowResized), i.autoplayTimer && clearInterval(i.autoplayTimer), i.ro.disconnect()
        }), z(H(i), "componentDidUpdate", function(a) {
            if (i.checkImagesLoad(), i.props.onReInit && i.props.onReInit(), i.props.lazyLoad) {
                var l = (0, ne.getOnDemandLazySlides)(V(V({}, i.props), i.state));
                l.length > 0 && (i.setState(function(d) {
                    return {
                        lazyLoadedList: d.lazyLoadedList.concat(l)
                    }
                }), i.props.onLazyLoad && i.props.onLazyLoad(l))
            }
            i.adaptHeight();
            var u = V(V({
                    listRef: i.list,
                    trackRef: i.track
                }, i.props), i.state),
                c = i.didPropsChange(a);
            c && i.updateState(u, c, function() {
                i.state.currentSlide >= be.default.Children.count(i.props.children) && i.changeSlide({
                    message: "index",
                    index: be.default.Children.count(i.props.children) - i.props.slidesToShow,
                    currentSlide: i.state.currentSlide
                }), i.props.autoplay ? i.autoPlay("update") : i.pause("paused")
            })
        }), z(H(i), "onWindowResized", function(a) {
            i.debouncedResize && i.debouncedResize.cancel(), i.debouncedResize = (0, jv.default)(function() {
                return i.resizeWindow(a)
            }, 50), i.debouncedResize()
        }), z(H(i), "resizeWindow", function() {
            var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
                l = !!(i.track && i.track.node);
            if (l) {
                var u = V(V({
                    listRef: i.list,
                    trackRef: i.track
                }, i.props), i.state);
                i.updateState(u, a, function() {
                    i.props.autoplay ? i.autoPlay("update") : i.pause("paused")
                }), i.setState({
                    animating: !1
                }), clearTimeout(i.animationEndCallback), delete i.animationEndCallback
            }
        }), z(H(i), "updateState", function(a, l, u) {
            var c = (0, ne.initializedState)(a);
            a = V(V(V({}, a), c), {}, {
                slideIndex: c.currentSlide
            });
            var d = (0, ne.getTrackLeft)(a);
            a = V(V({}, a), {}, {
                left: d
            });
            var f = (0, ne.getTrackCSS)(a);
            (l || be.default.Children.count(i.props.children) !== be.default.Children.count(a.children)) && (c.trackStyle = f), i.setState(c, u)
        }), z(H(i), "ssrInit", function() {
            if (i.props.variableWidth) {
                var a = 0,
                    l = 0,
                    u = [],
                    c = (0, ne.getPreClones)(V(V(V({}, i.props), i.state), {}, {
                        slideCount: i.props.children.length
                    })),
                    d = (0, ne.getPostClones)(V(V(V({}, i.props), i.state), {}, {
                        slideCount: i.props.children.length
                    }));
                i.props.children.forEach(function(k) {
                    u.push(k.props.style.width), a += k.props.style.width
                });
                for (var f = 0; f < c; f++) l += u[u.length - 1 - f], a += u[u.length - 1 - f];
                for (var p = 0; p < d; p++) a += u[p];
                for (var y = 0; y < i.state.currentSlide; y++) l += u[y];
                var v = {
                    width: a + "px",
                    left: -l + "px"
                };
                if (i.props.centerMode) {
                    var g = "".concat(u[i.state.currentSlide], "px");
                    v.left = "calc(".concat(v.left, " + (100% - ").concat(g, ") / 2 ) ")
                }
                return {
                    trackStyle: v
                }
            }
            var _ = be.default.Children.count(i.props.children),
                C = V(V(V({}, i.props), i.state), {}, {
                    slideCount: _
                }),
                h = (0, ne.getPreClones)(C) + (0, ne.getPostClones)(C) + _,
                m = 100 / i.props.slidesToShow * h,
                x = 100 / h,
                j = -x * ((0, ne.getPreClones)(C) + i.state.currentSlide) * m / 100;
            i.props.centerMode && (j += (100 - x * m / 100) / 2);
            var w = {
                width: m + "%",
                left: j + "%"
            };
            return {
                slideWidth: x + "%",
                trackStyle: w
            }
        }), z(H(i), "checkImagesLoad", function() {
            var a = i.list && i.list.querySelectorAll && i.list.querySelectorAll(".slick-slide img") || [],
                l = a.length,
                u = 0;
            Array.prototype.forEach.call(a, function(c) {
                var d = function() {
                    return ++u && u >= l && i.onWindowResized()
                };
                if (!c.onclick) c.onclick = function() {
                    return c.parentNode.focus()
                };
                else {
                    var f = c.onclick;
                    c.onclick = function(p) {
                        f(p), c.parentNode.focus()
                    }
                }
                c.onload || (i.props.lazyLoad ? c.onload = function() {
                    i.adaptHeight(), i.callbackTimers.push(setTimeout(i.onWindowResized, i.props.speed))
                } : (c.onload = d, c.onerror = function() {
                    d(), i.props.onLazyLoadError && i.props.onLazyLoadError()
                }))
            })
        }), z(H(i), "progressiveLazyLoad", function() {
            for (var a = [], l = V(V({}, i.props), i.state), u = i.state.currentSlide; u < i.state.slideCount + (0, ne.getPostClones)(l); u++)
                if (i.state.lazyLoadedList.indexOf(u) < 0) {
                    a.push(u);
                    break
                }
            for (var c = i.state.currentSlide - 1; c >= -(0, ne.getPreClones)(l); c--)
                if (i.state.lazyLoadedList.indexOf(c) < 0) {
                    a.push(c);
                    break
                }
            a.length > 0 ? (i.setState(function(d) {
                return {
                    lazyLoadedList: d.lazyLoadedList.concat(a)
                }
            }), i.props.onLazyLoad && i.props.onLazyLoad(a)) : i.lazyLoadTimer && (clearInterval(i.lazyLoadTimer), delete i.lazyLoadTimer)
        }), z(H(i), "slideHandler", function(a) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                u = i.props,
                c = u.asNavFor,
                d = u.beforeChange,
                f = u.onLazyLoad,
                p = u.speed,
                y = u.afterChange,
                v = i.state.currentSlide,
                g = (0, ne.slideHandler)(V(V(V({
                    index: a
                }, i.props), i.state), {}, {
                    trackRef: i.track,
                    useCSS: i.props.useCSS && !l
                })),
                _ = g.state,
                C = g.nextState;
            if (_) {
                d && d(v, _.currentSlide);
                var h = _.lazyLoadedList.filter(function(m) {
                    return i.state.lazyLoadedList.indexOf(m) < 0
                });
                f && h.length > 0 && f(h), !i.props.waitForAnimate && i.animationEndCallback && (clearTimeout(i.animationEndCallback), y && y(v), delete i.animationEndCallback), i.setState(_, function() {
                    c && i.asNavForIndex !== a && (i.asNavForIndex = a, c.innerSlider.slideHandler(a)), C && (i.animationEndCallback = setTimeout(function() {
                        var m = C.animating,
                            x = kv(C, ["animating"]);
                        i.setState(x, function() {
                            i.callbackTimers.push(setTimeout(function() {
                                return i.setState({
                                    animating: m
                                })
                            }, 10)), y && y(_.currentSlide), delete i.animationEndCallback
                        })
                    }, p))
                })
            }
        }), z(H(i), "changeSlide", function(a) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                u = V(V({}, i.props), i.state),
                c = (0, ne.changeSlide)(u, a);
            if (!(c !== 0 && !c) && (l === !0 ? i.slideHandler(c, l) : i.slideHandler(c), i.props.autoplay && i.autoPlay("update"), i.props.focusOnSelect)) {
                var d = i.list.querySelectorAll(".slick-current");
                d[0] && d[0].focus()
            }
        }), z(H(i), "clickHandler", function(a) {
            i.clickable === !1 && (a.stopPropagation(), a.preventDefault()), i.clickable = !0
        }), z(H(i), "keyHandler", function(a) {
            var l = (0, ne.keyHandler)(a, i.props.accessibility, i.props.rtl);
            l !== "" && i.changeSlide({
                message: l
            })
        }), z(H(i), "selectHandler", function(a) {
            i.changeSlide(a)
        }), z(H(i), "disableBodyScroll", function() {
            var a = function(u) {
                u = u || window.event, u.preventDefault && u.preventDefault(), u.returnValue = !1
            };
            window.ontouchmove = a
        }), z(H(i), "enableBodyScroll", function() {
            window.ontouchmove = null
        }), z(H(i), "swipeStart", function(a) {
            i.props.verticalSwiping && i.disableBodyScroll();
            var l = (0, ne.swipeStart)(a, i.props.swipe, i.props.draggable);
            l !== "" && i.setState(l)
        }), z(H(i), "swipeMove", function(a) {
            var l = (0, ne.swipeMove)(a, V(V(V({}, i.props), i.state), {}, {
                trackRef: i.track,
                listRef: i.list,
                slideIndex: i.state.currentSlide
            }));
            l && (l.swiping && (i.clickable = !1), i.setState(l))
        }), z(H(i), "swipeEnd", function(a) {
            var l = (0, ne.swipeEnd)(a, V(V(V({}, i.props), i.state), {}, {
                trackRef: i.track,
                listRef: i.list,
                slideIndex: i.state.currentSlide
            }));
            if (l) {
                var u = l.triggerSlideHandler;
                delete l.triggerSlideHandler, i.setState(l), u !== void 0 && (i.slideHandler(u), i.props.verticalSwiping && i.enableBodyScroll())
            }
        }), z(H(i), "touchEnd", function(a) {
            i.swipeEnd(a), i.clickable = !0
        }), z(H(i), "slickPrev", function() {
            i.callbackTimers.push(setTimeout(function() {
                return i.changeSlide({
                    message: "previous"
                })
            }, 0))
        }), z(H(i), "slickNext", function() {
            i.callbackTimers.push(setTimeout(function() {
                return i.changeSlide({
                    message: "next"
                })
            }, 0))
        }), z(H(i), "slickGoTo", function(a) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            if (a = Number(a), isNaN(a)) return "";
            i.callbackTimers.push(setTimeout(function() {
                return i.changeSlide({
                    message: "index",
                    index: a,
                    currentSlide: i.state.currentSlide
                }, l)
            }, 0))
        }), z(H(i), "play", function() {
            var a;
            if (i.props.rtl) a = i.state.currentSlide - i.props.slidesToScroll;
            else if ((0, ne.canGoNext)(V(V({}, i.props), i.state))) a = i.state.currentSlide + i.props.slidesToScroll;
            else return !1;
            i.slideHandler(a)
        }), z(H(i), "autoPlay", function(a) {
            i.autoplayTimer && clearInterval(i.autoplayTimer);
            var l = i.state.autoplaying;
            if (a === "update") {
                if (l === "hovered" || l === "focused" || l === "paused") return
            } else if (a === "leave") {
                if (l === "paused" || l === "focused") return
            } else if (a === "blur" && (l === "paused" || l === "hovered")) return;
            i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50), i.setState({
                autoplaying: "playing"
            })
        }), z(H(i), "pause", function(a) {
            i.autoplayTimer && (clearInterval(i.autoplayTimer), i.autoplayTimer = null);
            var l = i.state.autoplaying;
            a === "paused" ? i.setState({
                autoplaying: "paused"
            }) : a === "focused" ? (l === "hovered" || l === "playing") && i.setState({
                autoplaying: "focused"
            }) : l === "playing" && i.setState({
                autoplaying: "hovered"
            })
        }), z(H(i), "onDotsOver", function() {
            return i.props.autoplay && i.pause("hovered")
        }), z(H(i), "onDotsLeave", function() {
            return i.props.autoplay && i.state.autoplaying === "hovered" && i.autoPlay("leave")
        }), z(H(i), "onTrackOver", function() {
            return i.props.autoplay && i.pause("hovered")
        }), z(H(i), "onTrackLeave", function() {
            return i.props.autoplay && i.state.autoplaying === "hovered" && i.autoPlay("leave")
        }), z(H(i), "onSlideFocus", function() {
            return i.props.autoplay && i.pause("focused")
        }), z(H(i), "onSlideBlur", function() {
            return i.props.autoplay && i.state.autoplaying === "focused" && i.autoPlay("blur")
        }), z(H(i), "render", function() {
            var a = (0, wv.default)("slick-slider", i.props.className, {
                    "slick-vertical": i.props.vertical,
                    "slick-initialized": !0
                }),
                l = V(V({}, i.props), i.state),
                u = (0, ne.extractObject)(l, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]),
                c = i.props.pauseOnHover;
            u = V(V({}, u), {}, {
                onMouseEnter: c ? i.onTrackOver : null,
                onMouseLeave: c ? i.onTrackLeave : null,
                onMouseOver: c ? i.onTrackOver : null,
                focusOnSelect: i.props.focusOnSelect && i.clickable ? i.selectHandler : null
            });
            var d;
            if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
                var f = (0, ne.extractObject)(l, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                    p = i.props.pauseOnDotsHover;
                f = V(V({}, f), {}, {
                    clickHandler: i.changeSlide,
                    onMouseEnter: p ? i.onDotsLeave : null,
                    onMouseOver: p ? i.onDotsOver : null,
                    onMouseLeave: p ? i.onDotsLeave : null
                }), d = be.default.createElement(Tv.Dots, f)
            }
            var y, v, g = (0, ne.extractObject)(l, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
            g.clickHandler = i.changeSlide, i.props.arrows && (y = be.default.createElement(X0.PrevArrow, g), v = be.default.createElement(X0.NextArrow, g));
            var _ = null;
            i.props.vertical && (_ = {
                height: i.state.listHeight
            });
            var C = null;
            i.props.vertical === !1 ? i.props.centerMode === !0 && (C = {
                padding: "0px " + i.props.centerPadding
            }) : i.props.centerMode === !0 && (C = {
                padding: i.props.centerPadding + " 0px"
            });
            var h = V(V({}, _), C),
                m = i.props.touchMove,
                x = {
                    className: "slick-list",
                    style: h,
                    onClick: i.clickHandler,
                    onMouseDown: m ? i.swipeStart : null,
                    onMouseMove: i.state.dragging && m ? i.swipeMove : null,
                    onMouseUp: m ? i.swipeEnd : null,
                    onMouseLeave: i.state.dragging && m ? i.swipeEnd : null,
                    onTouchStart: m ? i.swipeStart : null,
                    onTouchMove: i.state.dragging && m ? i.swipeMove : null,
                    onTouchEnd: m ? i.touchEnd : null,
                    onTouchCancel: i.state.dragging && m ? i.swipeEnd : null,
                    onKeyDown: i.props.accessibility ? i.keyHandler : null
                },
                j = {
                    className: a,
                    dir: "ltr",
                    style: i.props.style
                };
            return i.props.unslick && (x = {
                className: "slick-list"
            }, j = {
                className: a
            }), be.default.createElement("div", j, i.props.unslick ? "" : y, be.default.createElement("div", xo({
                ref: i.listRefHandler
            }, x), be.default.createElement(Sv.Track, xo({
                ref: i.trackRefHandler
            }, u), i.props.children)), i.props.unslick ? "" : v, i.props.unslick ? "" : d)
        }), i.list = null, i.track = null, i.state = V(V({}, _v.default), {}, {
            currentSlide: i.props.initialSlide,
            targetSlide: i.props.initialSlide ? i.props.initialSlide : 0,
            slideCount: be.default.Children.count(i.props.children)
        }), i.callbackTimers = [], i.clickable = !0, i.debouncedResize = null;
        var o = i.ssrInit();
        return i.state = V(V({}, i.state), o), i
    }
    return Ev(n, [{
        key: "didPropsChange",
        value: function(i) {
            for (var o = !1, a = 0, l = Object.keys(this.props); a < l.length; a++) {
                var u = l[a];
                if (!i.hasOwnProperty(u)) {
                    o = !0;
                    break
                }
                if (!(Ln(i[u]) === "object" || typeof i[u] == "function" || isNaN(i[u])) && i[u] !== this.props[u]) {
                    o = !0;
                    break
                }
            }
            return o || be.default.Children.count(this.props.children) !== be.default.Children.count(i.children)
        }
    }]), n
}(be.default.Component);
var Rv = function(e) {
        return e.replace(/[A-Z]/g, function(t) {
            return "-" + t.toLowerCase()
        }).toLowerCase()
    },
    Dv = Rv,
    Nv = Dv,
    Vv = function(e) {
        var t = /[height|width]$/;
        return t.test(e)
    },
    $0 = function(e) {
        var t = "",
            n = Object.keys(e);
        return n.forEach(function(r, i) {
            var o = e[r];
            r = Nv(r), Vv(r) && typeof o == "number" && (o = o + "px"), o === !0 ? t += r : o === !1 ? t += "not " + r : t += "(" + r + ": " + o + ")", i < n.length - 1 && (t += " and ")
        }), t
    },
    Bv = function(e) {
        var t = "";
        return typeof e == "string" ? e : e instanceof Array ? (e.forEach(function(n, r) {
            t += $0(n), r < e.length - 1 && (t += ", ")
        }), t) : $0(e)
    },
    Iv = Bv,
    Xa, ed;

function Fv() {
    if (ed) return Xa;
    ed = 1;

    function e(t) {
        this.options = t, !t.deferSetup && this.setup()
    }
    return e.prototype = {
        constructor: e,
        setup: function() {
            this.options.setup && this.options.setup(), this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(t) {
            return this.options === t || this.options.match === t
        }
    }, Xa = e, Xa
}
var qa, td;

function Zp() {
    if (td) return qa;
    td = 1;

    function e(r, i) {
        var o = 0,
            a = r.length,
            l;
        for (o; o < a && (l = i(r[o], o), l !== !1); o++);
    }

    function t(r) {
        return Object.prototype.toString.apply(r) === "[object Array]"
    }

    function n(r) {
        return typeof r == "function"
    }
    return qa = {
        isFunction: n,
        isArray: t,
        each: e
    }, qa
}
var Ja, nd;

function Hv() {
    if (nd) return Ja;
    nd = 1;
    var e = Fv(),
        t = Zp().each;

    function n(r, i) {
        this.query = r, this.isUnconditional = i, this.handlers = [], this.mql = window.matchMedia(r);
        var o = this;
        this.listener = function(a) {
            o.mql = a.currentTarget || a, o.assess()
        }, this.mql.addListener(this.listener)
    }
    return n.prototype = {
        constuctor: n,
        addHandler: function(r) {
            var i = new e(r);
            this.handlers.push(i), this.matches() && i.on()
        },
        removeHandler: function(r) {
            var i = this.handlers;
            t(i, function(o, a) {
                if (o.equals(r)) return o.destroy(), !i.splice(a, 1)
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            t(this.handlers, function(r) {
                r.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        },
        assess: function() {
            var r = this.matches() ? "on" : "off";
            t(this.handlers, function(i) {
                i[r]()
            })
        }
    }, Ja = n, Ja
}
var $a, rd;

function zv() {
    if (rd) return $a;
    rd = 1;
    var e = Hv(),
        t = Zp(),
        n = t.each,
        r = t.isFunction,
        i = t.isArray;

    function o() {
        if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
    }
    return o.prototype = {
        constructor: o,
        register: function(a, l, u) {
            var c = this.queries,
                d = u && this.browserIsIncapable;
            return c[a] || (c[a] = new e(a, d)), r(l) && (l = {
                match: l
            }), i(l) || (l = [l]), n(l, function(f) {
                r(f) && (f = {
                    match: f
                }), c[a].addHandler(f)
            }), this
        },
        unregister: function(a, l) {
            var u = this.queries[a];
            return u && (l ? u.removeHandler(l) : (u.clear(), delete this.queries[a])), this
        }
    }, $a = o, $a
}
var e1, id;

function Zv() {
    if (id) return e1;
    id = 1;
    var e = zv();
    return e1 = new e, e1
}(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = a(U),
        n = Xo,
        r = a(Iv),
        i = a(J2),
        o = P;

    function a(O) {
        return O && O.__esModule ? O : {
            default: O
        }
    }

    function l(O) {
        "@babel/helpers - typeof";
        return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
            return typeof S
        } : function(S) {
            return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S
        }, l(O)
    }

    function u() {
        return u = Object.assign ? Object.assign.bind() : function(O) {
            for (var S = 1; S < arguments.length; S++) {
                var b = arguments[S];
                for (var L in b) Object.prototype.hasOwnProperty.call(b, L) && (O[L] = b[L])
            }
            return O
        }, u.apply(this, arguments)
    }

    function c(O, S) {
        var b = Object.keys(O);
        if (Object.getOwnPropertySymbols) {
            var L = Object.getOwnPropertySymbols(O);
            S && (L = L.filter(function(R) {
                return Object.getOwnPropertyDescriptor(O, R).enumerable
            })), b.push.apply(b, L)
        }
        return b
    }

    function d(O) {
        for (var S = 1; S < arguments.length; S++) {
            var b = arguments[S] != null ? arguments[S] : {};
            S % 2 ? c(Object(b), !0).forEach(function(L) {
                j(O, L, b[L])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(b)) : c(Object(b)).forEach(function(L) {
                Object.defineProperty(O, L, Object.getOwnPropertyDescriptor(b, L))
            })
        }
        return O
    }

    function f(O, S) {
        if (!(O instanceof S)) throw new TypeError("Cannot call a class as a function")
    }

    function p(O, S) {
        for (var b = 0; b < S.length; b++) {
            var L = S[b];
            L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(O, w(L.key), L)
        }
    }

    function y(O, S, b) {
        return S && p(O.prototype, S), b && p(O, b), Object.defineProperty(O, "prototype", {
            writable: !1
        }), O
    }

    function v(O, S) {
        if (typeof S != "function" && S !== null) throw new TypeError("Super expression must either be null or a function");
        O.prototype = Object.create(S && S.prototype, {
            constructor: {
                value: O,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(O, "prototype", {
            writable: !1
        }), S && g(O, S)
    }

    function g(O, S) {
        return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(L, R) {
            return L.__proto__ = R, L
        }, g(O, S)
    }

    function _(O) {
        var S = m();
        return function() {
            var L = x(O),
                R;
            if (S) {
                var D = x(this).constructor;
                R = Reflect.construct(L, arguments, D)
            } else R = L.apply(this, arguments);
            return C(this, R)
        }
    }

    function C(O, S) {
        if (S && (l(S) === "object" || typeof S == "function")) return S;
        if (S !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return h(O)
    }

    function h(O) {
        if (O === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return O
    }

    function m() {
        try {
            var O = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch {}
        return (m = function() {
            return !!O
        })()
    }

    function x(O) {
        return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(b) {
            return b.__proto__ || Object.getPrototypeOf(b)
        }, x(O)
    }

    function j(O, S, b) {
        return S = w(S), S in O ? Object.defineProperty(O, S, {
            value: b,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : O[S] = b, O
    }

    function w(O) {
        var S = k(O, "string");
        return l(S) == "symbol" ? S : String(S)
    }

    function k(O, S) {
        if (l(O) != "object" || !O) return O;
        var b = O[Symbol.toPrimitive];
        if (b !== void 0) {
            var L = b.call(O, S || "default");
            if (l(L) != "object") return L;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (S === "string" ? String : Number)(O)
    }
    var T = (0, o.canUseDOM)() && Zv();
    e.default = function(O) {
        v(b, O);
        var S = _(b);

        function b(L) {
            var R;
            return f(this, b), R = S.call(this, L), j(h(R), "innerSliderRefHandler", function(D) {
                return R.innerSlider = D
            }), j(h(R), "slickPrev", function() {
                return R.innerSlider.slickPrev()
            }), j(h(R), "slickNext", function() {
                return R.innerSlider.slickNext()
            }), j(h(R), "slickGoTo", function(D) {
                var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                return R.innerSlider.slickGoTo(D, Y)
            }), j(h(R), "slickPause", function() {
                return R.innerSlider.pause("paused")
            }), j(h(R), "slickPlay", function() {
                return R.innerSlider.autoPlay("play")
            }), R.state = {
                breakpoint: null
            }, R._responsiveMediaHandlers = [], R
        }
        return y(b, [{
            key: "media",
            value: function(R, D) {
                T.register(R, D), this._responsiveMediaHandlers.push({
                    query: R,
                    handler: D
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var R = this;
                if (this.props.responsive) {
                    var D = this.props.responsive.map(function(W) {
                        return W.breakpoint
                    });
                    D.sort(function(W, ve) {
                        return W - ve
                    }), D.forEach(function(W, ve) {
                        var E;
                        ve === 0 ? E = (0, r.default)({
                            minWidth: 0,
                            maxWidth: W
                        }) : E = (0, r.default)({
                            minWidth: D[ve - 1] + 1,
                            maxWidth: W
                        }), (0, o.canUseDOM)() && R.media(E, function() {
                            R.setState({
                                breakpoint: W
                            })
                        })
                    });
                    var Y = (0, r.default)({
                        minWidth: D.slice(-1)[0]
                    });
                    (0, o.canUseDOM)() && this.media(Y, function() {
                        R.setState({
                            breakpoint: null
                        })
                    })
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this._responsiveMediaHandlers.forEach(function(R) {
                    T.unregister(R.query, R.handler)
                })
            }
        }, {
            key: "render",
            value: function() {
                var R = this,
                    D, Y;
                this.state.breakpoint ? (Y = this.props.responsive.filter(function(_t) {
                    return _t.breakpoint === R.state.breakpoint
                }), D = Y[0].settings === "unslick" ? "unslick" : d(d(d({}, i.default), this.props), Y[0].settings)) : D = d(d({}, i.default), this.props), D.centerMode && (D.slidesToScroll > 1, D.slidesToScroll = 1), D.fade && (D.slidesToShow > 1, D.slidesToScroll > 1, D.slidesToShow = 1, D.slidesToScroll = 1);
                var W = t.default.Children.toArray(this.props.children);
                W = W.filter(function(_t) {
                    return typeof _t == "string" ? !!_t.trim() : !!_t
                }), D.variableWidth && (D.rows > 1 || D.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), D.variableWidth = !1);
                for (var ve = [], E = null, N = 0; N < W.length; N += D.rows * D.slidesPerRow) {
                    for (var F = [], Q = N; Q < N + D.rows * D.slidesPerRow; Q += D.slidesPerRow) {
                        for (var de = [], Xe = Q; Xe < Q + D.slidesPerRow && (D.variableWidth && W[Xe].props.style && (E = W[Xe].props.style.width), !(Xe >= W.length)); Xe += 1) de.push(t.default.cloneElement(W[Xe], {
                            key: 100 * N + 10 * Q + Xe,
                            tabIndex: -1,
                            style: {
                                width: "".concat(100 / D.slidesPerRow, "%"),
                                display: "inline-block"
                            }
                        }));
                        F.push(t.default.createElement("div", {
                            key: 10 * N + Q
                        }, de))
                    }
                    D.variableWidth ? ve.push(t.default.createElement("div", {
                        key: N,
                        style: {
                            width: E
                        }
                    }, F)) : ve.push(t.default.createElement("div", {
                        key: N
                    }, F))
                }
                if (D === "unslick") {
                    var xt = "regular slider " + (this.props.className || "");
                    return t.default.createElement("div", {
                        className: xt
                    }, W)
                } else ve.length <= D.slidesToShow && !D.infinite && (D.unslick = !0);
                return t.default.createElement(n.InnerSlider, u({
                    style: this.props.style,
                    ref: this.innerSliderRefHandler
                }, (0, o.filterSettings)(D)), ve)
            }
        }]), b
    }(t.default.Component)
})(dp);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = n(dp);

    function n(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    e.default = t.default
})(cp);
const Gv = xl(cp),
    Wv = () => s.jsx(I.div, {
        className: "max-h-[200px] min-h-[200px] w-full object-cover rounded-t-[16px] bg-[#2C3035]",
        animate: {
            opacity: [.5, .2],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: 1 / 0,
                repeatType: "reverse"
            }
        }
    }),
    Kv = "/assets/auk-BfEWKTcW.png",
    Qv = "/assets/kcode-D0SYYtwQ.jpg",
    Yv = "/assets/krdfonts-BjOy9qSz.jpg",
    Xv = "/assets/lelav-DixtAekI.png",
    qv = "/assets/laundry-Dw-Tkcgz.jpg",
    Jv = "/assets/m2phone-BRPsV-L6.png",
    $v = "/assets/travel-De1ijkVe.jpg",
    ex = [{
        id: 1,
        title: "AUK Employment Opportunities",
        description: "The American University of Kurdistan (AUK) offers a range of full-time, part-time, hybrid, internship, remote, freelance, and temporary employment opportunities across various departments and programs. ",
        tags: ["HTML", "TailwindCSS", "Vue.js", "Laravel"],
        live: "https://auk.edu.krd/employment/",
        code: "",
        image: Kv
    }, {
        id: 2,
        title: "Lelav Tech",
        description: "Lelav Tech is an IT solutions company based in Duhok, Iraq that provides services such as website development, software development, mobile app development, database design, hosting, and more. The company was founded by an experienced software developer with over 15 years of freelance experience.",
        tags: ["HTML", "TailwindCSS", "Vue.js", "Laravel"],
        live: "https://lelav.com",
        code: "",
        image: Xv
    }, {
        id: 3,
        title: "M2Phone",
        description: "The website M2 Phone is an online store based in Duhok, Iraq, specializing in a variety of mobile accessories and electronics.",
        tags: ["HTML", "TailwindCSS", "JQuery", "Laravel"],
        live: "https://m2phone.com/",
        code: "",
        image: Jv
    }, {
        id: 3,
        title: "Travel Booking Design",
        description: "The Travel Booking Design is a conceptual online platform that offers a seamless and intuitive booking experience for travelers looking to plan their next adventure. With a clean and modern design, the website provides users with a user-friendly interface to search, compare, and book flights, hotels, and rental cars with ease.",
        tags: ["Adobe Photoshop", "Figma"],
        live: "https://www.behance.net/gallery/200802323/Online-Booking-Website-UX-UI-Design",
        code: "",
        image: $v
    }, {
        id: 4,
        title: "KRDFonts Website",
        description: "KRDFonts is a dynamic online platform that caters to the diverse needs of designers, developers, and creative enthusiasts seeking high-quality typography solutions. With a vast array of fonts spanning various styles, from elegant serif to playful display fonts, KRDFonts provides an extensive library to elevate any project.",
        tags: ["HTML", "TailwindCSS", "next.js"],
        live: "https://www.behance.net/gallery/187457485/Online-Fonts-UI-Design-Website",
        code: "",
        image: Yv
    }, {
        id: 5,
        title: "Laundry App",
        description: "The Laundry App is your ultimate companion for managing all your laundry needs efficiently and conveniently. Designed with user convenience in mind, our app streamlines the entire laundry process, from scheduling pickups to tracking orders and making payments, all from the palm of your hand.",
        tags: ["Illustrator", "Figma"],
        live: "https://www.behance.net/gallery/194574463/Laundry-App-Design-System",
        code: "",
        image: qv
    }, {
        id: 6,
        title: "KCODE Generator CSS",
        description: "The KCODE Generator CSS is a powerful tool designed to simplify and streamline the process of generating custom CSS code for your web projects. With its intuitive interface and robust feature set, the KCODE Generator CSS empowers designers and developers to create stunning and responsive CSS styles with ease.",
        tags: ["HTML", "TailwindCSS", "Nuxt.js"],
        live: "https://kcode-generation.vercel.app/",
        code: "https://github.com/rayanramazan/kcode-generation",
        image: Qv
    }],
    tx = () => {
        const e = {
                hidden: {
                    opacity: 0,
                    y: -40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delayChildren: .1,
                        staggerChildren: .2
                    }
                }
            },
            t = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1
                }
            };
        var n = {
            dots: !0,
            infinite: !0,
            autoplay: !0,
            autoplaySpeed: 5e3,
            slidesToShow: 3,
            initialSlide: 0,
            spaceBetween: 20,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: !0,
                    dots: !0
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return s.jsxs(I.div, {
            id: "works",
            variants: e,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            className: "max-w-[920px] mx-auto mt-[70px] sm:mt-[130px] text-center lg:px-0 px-4",
            children: [s.jsx(I.span, {
                variants: t,
                className: "bg-slate-200 px-2 py-1 rounded-[8px] w-fit sm:text-base text-xs",
                children: "Works"
            }), s.jsx(I.h1, {
                variants: t,
                className: "sm:font-medium font-normal mx-auto text-xl sm:text-[36px] sm:w-[610px] text-[#00C16A] sm:leading-[38px] md:leading-[48px] mt-3",
                children: "Things I've built so far"
            }), s.jsx("div", {
                className: "slider-container mt-5 sm:mt-[32px]",
                children: s.jsx(Gv, { ...n,
                    children: ex.map(r => s.jsxs(I.div, {
                        variants: t,
                        className: "flex flex-col border rounded-[16px] w-full",
                        children: [s.jsx(U.Suspense, {
                            fallback: s.jsx(Wv, {}),
                            children: s.jsx("img", {
                                src: r.image,
                                width: "200",
                                height: "200",
                                className: "max-h-[200px] min-h-[200px] w-full object-cover rounded-t-[16px]",
                                alt: "auk"
                            })
                        }), s.jsxs("div", {
                            className: "flex flex-col p-[14px]",
                            children: [s.jsx("h1", {
                                className: "font-medium text-[#172635] text-start text-splice",
                                children: r.title.length > 14 ? r.title.slice(0, 20) + "..." : r.title
                            }), s.jsx("p", {
                                className: "text-xs text-[#172635]/60 text-start mt-[12px]",
                                children: r.description.length > 100 ? r.description.slice(0, 110) + "..." : r.description
                            }), s.jsx("div", {
                                className: "flex gap-[6px] mt-[8px]",
                                children: r.tags.map((i, o) => s.jsx("span", {
                                    className: "text-[10px] text-[#172635]/70 bg-[rgba(0,0,0,0.03)] hover:text-[#172635] duration-300 rounded-[4px] px-2 py-[2px]",
                                    children: i
                                }, o))
                            }), s.jsxs("div", {
                                className: "flex justify-between items-center mt-5",
                                children: [s.jsxs("a", {
                                    href: r.live,
                                    className: "flex items-center gap-[6px]",
                                    children: [s.jsxs("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 14 14",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [s.jsxs("g", {
                                            "clip-path": "url(#clip0_133_5885)",
                                            children: [s.jsx("path", {
                                                d: "M9.17542 2.26524C10.0119 1.42524 11.2358 1.40774 11.913 2.0879C12.592 2.76924 12.5739 4.00124 11.7363 4.84124L10.3228 6.26049C10.2433 6.34311 10.1993 6.45369 10.2005 6.5684C10.2016 6.68312 10.2478 6.79279 10.329 6.87379C10.4103 6.9548 10.5201 7.00065 10.6348 7.00149C10.7495 7.00232 10.8599 6.95806 10.9423 6.87824L12.3563 5.45899C13.4711 4.33957 13.6111 2.55282 12.5331 1.47015C11.4539 0.386905 9.67067 0.528072 8.55476 1.64749L5.72792 4.48657C4.61317 5.60599 4.47317 7.39274 5.55117 8.47482C5.59143 8.51669 5.63963 8.55012 5.69295 8.57317C5.74627 8.59622 5.80365 8.60841 5.86173 8.60905C5.91981 8.60969 5.97744 8.59875 6.03126 8.57688C6.08507 8.55501 6.13399 8.52264 6.17516 8.48166C6.21633 8.44069 6.24893 8.39192 6.27105 8.33821C6.29317 8.2845 6.30438 8.22693 6.30402 8.16884C6.30366 8.11076 6.29173 8.05332 6.26894 7.9999C6.24614 7.94647 6.21294 7.89811 6.17126 7.85765C5.49226 7.17632 5.51092 5.94432 6.34801 5.10432L9.17542 2.26524Z",
                                                fill: "#172635"
                                            }), s.jsx("path", {
                                                d: "M8.44969 5.52419C8.36769 5.44196 8.25639 5.39567 8.14027 5.39551C8.02414 5.39534 7.91271 5.44132 7.83048 5.52331C7.74825 5.60531 7.70197 5.71661 7.7018 5.83274C7.70164 5.94886 7.74761 6.06029 7.82961 6.14252C8.50861 6.82385 8.49052 8.05527 7.65286 8.89586L4.82544 11.7344C3.98836 12.5744 2.76452 12.5919 2.08727 11.9117C1.40827 11.2304 1.42694 9.99836 2.26402 9.15836L3.67802 7.73911C3.71858 7.69839 3.75073 7.65008 3.77262 7.59695C3.79452 7.54381 3.80573 7.48688 3.80562 7.42941C3.80551 7.37193 3.79409 7.31505 3.77199 7.26199C3.7499 7.20893 3.71757 7.16075 3.67686 7.12019C3.63614 7.07963 3.58783 7.04748 3.5347 7.02559C3.48156 7.00369 3.42463 6.99248 3.36716 6.99259C3.30968 6.9927 3.2528 7.00413 3.19974 7.02622C3.14669 7.04831 3.0985 7.08064 3.05794 7.12136L1.64394 8.54061C0.529188 9.66061 0.389188 11.4468 1.46719 12.5294C2.54636 13.6133 4.32961 13.4715 5.44552 12.3521L8.27294 9.51302C9.38769 8.39419 9.52769 6.60627 8.44969 5.52419Z",
                                                fill: "#172635"
                                            })]
                                        }), s.jsx("defs", {
                                            children: s.jsx("clipPath", {
                                                id: "clip0_133_5885",
                                                children: s.jsx("rect", {
                                                    width: "14",
                                                    height: "14",
                                                    fill: "white"
                                                })
                                            })
                                        })]
                                    }), s.jsx("span", {
                                        className: "text-[12px] underline",
                                        children: "Live Preview"
                                    })]
                                }), r.code === "" ? null : s.jsxs("a", {
                                    href: r.code,
                                    className: "flex items-center gap-[6px]",
                                    children: [s.jsx("svg", {
                                        width: "14",
                                        height: "15",
                                        viewBox: "0 0 14 15",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: s.jsx("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M7.00006 0.512695C3.22514 0.512695 0.164062 3.58087 0.164062 7.36582C0.164062 10.3937 2.12278 12.9626 4.83893 13.8687C5.18057 13.9322 5.306 13.7201 5.306 13.5391C5.306 13.3756 5.29966 12.8358 5.29672 12.2632C3.39494 12.6777 2.99364 11.4546 2.99364 11.4546C2.68268 10.6624 2.23463 10.4518 2.23463 10.4518C1.6144 10.0265 2.28138 10.0352 2.28138 10.0352C2.96783 10.0836 3.32928 10.7414 3.32928 10.7414C3.93898 11.7891 4.92847 11.4862 5.31857 11.3111C5.37992 10.8682 5.55708 10.5659 5.75258 10.3947C4.23421 10.2214 2.63807 9.63382 2.63807 7.00789C2.63807 6.25968 2.90512 5.64834 3.34241 5.16841C3.27144 4.9958 3.03745 4.29878 3.40864 3.35481C3.40864 3.35481 3.98268 3.17063 5.28902 4.05728C5.83431 3.90544 6.41911 3.82929 7.00006 3.82668C7.58101 3.82929 8.16625 3.90544 8.71256 4.05728C10.0173 3.17063 10.5906 3.35481 10.5906 3.35481C10.9627 4.29878 10.7286 4.9958 10.6576 5.16841C11.0959 5.64834 11.3611 6.25968 11.3611 7.00789C11.3611 9.64006 9.76194 10.2196 8.23972 10.3893C8.48492 10.602 8.70339 11.019 8.70339 11.6584C8.70339 12.5753 8.69547 13.3133 8.69547 13.5391C8.69547 13.7214 8.81852 13.9351 9.16503 13.8678C11.8797 12.9606 13.8359 10.3927 13.8359 7.36582C13.8359 3.58087 10.7753 0.512695 7.00006 0.512695ZM2.72436 10.2751C2.70931 10.3092 2.65588 10.3194 2.6072 10.296C2.55762 10.2736 2.52977 10.2272 2.54585 10.1931C2.56056 10.158 2.61411 10.1482 2.66358 10.1717C2.71327 10.1941 2.74157 10.241 2.72436 10.2751ZM3.06062 10.5759C3.02802 10.6062 2.96429 10.5921 2.92104 10.5442C2.87633 10.4965 2.86795 10.4326 2.90101 10.4018C2.93463 10.3715 2.99643 10.3857 3.04126 10.4335C3.08598 10.4818 3.09469 10.5453 3.06062 10.5759ZM3.2913 10.9608C3.24942 10.9899 3.18093 10.9626 3.13859 10.9016C3.09671 10.8407 3.09671 10.7676 3.1395 10.7383C3.18195 10.709 3.24942 10.7354 3.29232 10.7959C3.33409 10.8578 3.33409 10.9309 3.2913 10.9608ZM3.68144 11.4065C3.64397 11.4479 3.56416 11.4368 3.50575 11.3802C3.44598 11.325 3.42934 11.2466 3.46692 11.2051C3.50484 11.1636 3.5851 11.1753 3.64397 11.2314C3.70329 11.2865 3.7214 11.3655 3.68144 11.4065ZM4.18565 11.5569C4.16912 11.6106 4.09226 11.635 4.01483 11.6122C3.93751 11.5887 3.88691 11.5258 3.90253 11.4716C3.91861 11.4176 3.99581 11.3921 4.07381 11.4165C4.15101 11.4399 4.20173 11.5023 4.18565 11.5569ZM4.75947 11.6208C4.76139 11.6773 4.69573 11.7241 4.61445 11.7252C4.53272 11.727 4.46661 11.6812 4.46571 11.6256C4.46571 11.5685 4.52989 11.5221 4.61162 11.5208C4.6929 11.5192 4.75947 11.5646 4.75947 11.6208ZM5.32317 11.5991C5.33291 11.6542 5.27642 11.7109 5.19571 11.726C5.11635 11.7405 5.04289 11.7064 5.03281 11.6517C5.02296 11.5952 5.08047 11.5386 5.15971 11.524C5.24054 11.5099 5.31287 11.543 5.32317 11.5991Z",
                                            fill: "#161614"
                                        })
                                    }), s.jsx("span", {
                                        className: "text-[12px] underline",
                                        children: "View Code"
                                    })]
                                })]
                            })]
                        })]
                    }, r.id))
                })
            })]
        })
    },
    nx = () => {
        const e = {
                hidden: {
                    opacity: 0,
                    y: -40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delayChildren: .1,
                        staggerChildren: .2
                    }
                }
            },
            t = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1
                }
            },
            [n, r] = U.useState([{
                id: 1,
                title: "Frontend Web Developer @ Lelavtech",
                date: "Dec 2022 - Present",
                location: "Duhok, Iraq",
                company: "Lelav.com",
                description: "At Lelavtech, I design and develop captivating web solutions that seamlessly blend creativity and functionality.",
                skills: ["HTML", "CSS", "Javascript", "Vue.js", "Nuxt.js", "TailwindCSS"],
                visible: !0
            }, {
                id: 2,
                title: "Tutor @ Contract",
                date: "Jan 2024 - Present",
                location: "Duhok, Iraq",
                company: "The American University of Kurdistan",
                description: "I serve as a technology tutor, guiding students toward mastery in their chosen fields.",
                skills: ["HTML", "CSS", "Javascript", "C++", "C#", "PostgreSQL", "PHP", "MYSQL"],
                visible: !1
            }, {
                id: 3,
                title: "Full Stack Web Developer @ Freelancer",
                date: "Jan 2020 - Present",
                location: "Duhok, Iraq",
                company: "rayanramazan.com",
                description: "Developing front-end and back-end of websites for clients",
                skills: ["HTML", "CSS", "Javascript", "Vue.js", "Nuxt.js", "TailwindCSS", "React.js", "Next.js", "PostgreSQL", "PHP", "MYSQL"],
                visible: !1
            }, {
                id: 4,
                title: "UX/UI Designer @ Freelancer",
                date: "Nov 2021 - Present",
                location: "Duhok, Iraq",
                company: "Behance.net/rayanramazan",
                description: "Designing user interfaces and user experiences for websites and mobile applications",
                skills: ["Figma", "Adobe XD", "Adobe Photoshop"],
                visible: !1
            }]),
            i = o => {
                r(a => a.map(l => l.id === o ? { ...l,
                    visible: !l.visible
                } : l))
            };
        return s.jsxs(I.div, {
            id: "experience",
            variants: e,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            className: "mt-[70px] sm:mt-[130px] max-w-[920px] mx-auto flex flex-col items-center justify-center text-center",
            children: [s.jsx(I.span, {
                variants: t,
                className: "bg-slate-200 px-2 py-1 rounded-[8px] w-fit sm:text-base text-xs",
                children: "Experience"
            }), s.jsx(I.h1, {
                variants: t,
                className: "sm:font-medium font-normal text-xl sm:text-[36px] sm:w-[610px] text-[#00C16A] sm:leading-[38px] md:leading-[48px] mt-3",
                children: "Here is a quick summary of my most recent experiences"
            }), s.jsx("div", {
                className: "flex flex-col gap-[14px] w-full mt-5 sm:mt-[32px] lg:px-0 px-4",
                children: n.map((o, a) => s.jsxs(I.div, {
                    variants: t,
                    className: "flex flex-col border px-[12px] sm:px-[18px] py-[12px] rounded-[10px] sm:rounded-[16px]",
                    children: [s.jsxs("div", {
                        className: "flex justify-between items-center cursor-pointer select-none",
                        onClick: () => i(o.id),
                        children: [s.jsx("h1", {
                            className: "text-xs sm:text-base font-medium text-start leading-4 sm:leading-[30px] w-fit",
                            children: o.title
                        }), s.jsxs("div", {
                            className: "flex items-center gap-5 cursor-pointer",
                            children: [s.jsx("h3", {
                                className: "text-xs sm:text-base font-medium leading-4 sm:leading-[30px] sm:text-auto text-end w-full cursor-pointer",
                                children: o.date
                            }), s.jsx("button", {
                                onClick: () => i(o.id),
                                "aria-label": "button",
                                children: s.jsxs("svg", {
                                    className: "cursor-pointer w-[10px] h-[10px] sm:w-[14px] sm:h-[14px]",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [s.jsx("rect", {
                                        y: "6",
                                        width: "14",
                                        height: "2",
                                        rx: "1",
                                        fill: "#00C16A"
                                    }), s.jsx("rect", {
                                        x: "6",
                                        y: "14",
                                        width: "14",
                                        height: "2",
                                        className: `${o.visible?"opacity-0":"opacity-100"} duration-300`,
                                        rx: "1",
                                        transform: "rotate(-90 6 14)",
                                        fill: "#00C16A"
                                    })]
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: `${o.visible?"max-h-full opacity-100 visible":"max-h-0 opacity-0 invisible "} duration-300`,
                        children: [s.jsx("div", {
                            className: "w-full h-[1px] bg-[rgba(0,0,0,0.03)] my-[12px]"
                        }), s.jsxs("div", {
                            className: "flex items-center gap-[30px]",
                            children: [s.jsxs("div", {
                                className: "flex gap-1 sm:gap-2 items-center",
                                children: [s.jsx("svg", {
                                    className: "w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: s.jsx("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M5.99984 1.33301C3.0545 1.33301 0.666504 4.00167 0.666504 6.99968C0.666504 9.97434 2.3685 13.2077 5.02451 14.449C5.32978 14.592 5.66275 14.666 5.99984 14.666C6.33693 14.666 6.66989 14.592 6.97517 14.449C9.63117 13.2077 11.3332 9.97434 11.3332 6.99968C11.3332 4.00167 8.94517 1.33301 5.99984 1.33301ZM5.99984 7.99968C6.35346 7.99968 6.6926 7.8592 6.94265 7.60915C7.1927 7.3591 7.33317 7.01996 7.33317 6.66634C7.33317 6.31272 7.1927 5.97358 6.94265 5.72353C6.6926 5.47348 6.35346 5.33301 5.99984 5.33301C5.64622 5.33301 5.30708 5.47348 5.05703 5.72353C4.80698 5.97358 4.6665 6.31272 4.6665 6.66634C4.6665 7.01996 4.80698 7.3591 5.05703 7.60915C5.30708 7.8592 5.64622 7.99968 5.99984 7.99968Z",
                                        fill: "black",
                                        "fill-opacity": "0.7"
                                    })
                                }), s.jsx("span", {
                                    className: "text-xs sm:text-sm text-black/70",
                                    children: o.location
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-center gap-1 sm:gap-2",
                                children: [s.jsxs("svg", {
                                    className: "w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [s.jsxs("g", {
                                        "clip-path": "url(#clip0_133_5956)",
                                        children: [s.jsx("path", {
                                            d: "M6.69705 9.33289C5.69305 8.32489 5.78371 6.59956 6.89905 5.48023L10.131 2.23623C11.2464 1.11623 12.9644 1.02556 13.969 2.0329C14.9731 3.0409 14.8824 4.76623 13.767 5.88623L12.151 7.50823",
                                            stroke: "black",
                                            "stroke-opacity": "0.7",
                                            "stroke-width": "1.5",
                                            "stroke-linecap": "round"
                                        }), s.jsx("path", {
                                            d: "M9.30255 6.66602C10.3065 7.67402 10.2159 9.39935 9.10055 10.5187L7.48455 12.1407L5.86855 13.7627C4.75321 14.8827 3.03521 14.9733 2.03054 13.966C1.02654 12.958 1.11721 11.2327 2.23254 10.1127L3.84854 8.49068",
                                            stroke: "black",
                                            "stroke-opacity": "0.7",
                                            "stroke-width": "1.5",
                                            "stroke-linecap": "round"
                                        })]
                                    }), s.jsx("defs", {
                                        children: s.jsx("clipPath", {
                                            id: "clip0_133_5956",
                                            children: s.jsx("rect", {
                                                width: "16",
                                                height: "16",
                                                fill: "white"
                                            })
                                        })
                                    })]
                                }), s.jsx("span", {
                                    className: "text-xs sm:text-sm text-black/70",
                                    children: o.company
                                })]
                            })]
                        }), s.jsx("p", {
                            className: "mt-[10px] text-xs sm:text-sm sm:leading-[30px] text-start",
                            children: o.description
                        }), s.jsx("div", {
                            className: "flex gap-[6px] mt-[12px] flex-wrap",
                            children: o.skills.map((l, u) => s.jsx("span", {
                                className: "text-[10px] text-[#172635]/70 bg-[rgba(0,0,0,0.03)] hover:text-[#172635] duration-300 rounded-[4px] px-2 py-[2px]",
                                children: l
                            }, u))
                        })]
                    })]
                }, a))
            })]
        })
    },
    rx = () => {
        const e = {
                hidden: {
                    opacity: 0,
                    y: -40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delayChildren: .1,
                        staggerChildren: .2
                    }
                }
            },
            t = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1
                }
            };
        return s.jsx(I.div, {
            variants: e,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: !0
            },
            className: "max-w-[920px] mx-auto lg:px-0 px-4 mt-[70px] sm:mt-[130px]",
            children: s.jsxs("div", {
                className: " relative overflow-x-hidden bg-[#172635] px-[40px] sm:px-[56px] h-[200px] md:h-[144px] rounded-[12px] sm:rounded-[18px] flex md:flex-row flex-col md:gap-0 gap-3 justify-center md:justify-between items-center",
                children: [s.jsx(I.h1, {
                    variants: t,
                    className: "text-[20px] md:text-[26px] font-semibold text-white z-10",
                    children: "Start a project"
                }), s.jsx(I.span, {
                    variants: t,
                    className: "text-sm text-white max-w-[408px] sm:max-w-[338px] text-center z-10",
                    children: "Interested in working together? We should queue up a time to chat. I’ll buy the tea."
                }), s.jsxs(I.div, {
                    onClick: C2,
                    variants: t,
                    className: " relative w-[142px] h-[38px] cursor-pointer group z-10 md:mt-0 mt-4",
                    children: [s.jsxs("svg", {
                        className: " absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                        width: "142",
                        height: "38",
                        viewBox: "0 0 142 38",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [s.jsxs("g", {
                            filter: "url(#filter0_b_133_6134)",
                            children: [s.jsx("rect", {
                                x: "1",
                                y: "1",
                                width: "140",
                                height: "36",
                                rx: "12",
                                fill: "url(#paint0_radial_133_6134)",
                                className: "fill-[#00C16A]/10 group-hover:fill-[#00C16A]/20 transition-all duration-300 ease-in-out"
                            }), s.jsx("rect", {
                                x: "1",
                                y: "1",
                                width: "140",
                                height: "36",
                                rx: "12",
                                stroke: "url(#paint1_linear_133_6134)"
                            })]
                        }), s.jsxs("defs", {
                            children: [s.jsxs("filter", {
                                id: "filter0_b_133_6134",
                                x: "-23.5",
                                y: "-23.5",
                                width: "189",
                                height: "85",
                                filterUnits: "userSpaceOnUse",
                                "color-interpolation-filters": "sRGB",
                                children: [s.jsx("feFlood", {
                                    "flood-opacity": "0",
                                    result: "BackgroundImageFix"
                                }), s.jsx("feGaussianBlur", { in: "BackgroundImageFix",
                                    stdDeviation: "12"
                                }), s.jsx("feComposite", {
                                    in2: "SourceAlpha",
                                    operator: "in",
                                    result: "effect1_backgroundBlur_133_6134"
                                }), s.jsx("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_backgroundBlur_133_6134",
                                    result: "shape"
                                })]
                            }), s.jsxs("radialGradient", {
                                id: "paint0_radial_133_6134",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(1 1) rotate(14.4208) scale(144.554 69.7315)",
                                children: [s.jsx("stop", {
                                    "stop-color": "#00C16A"
                                }), s.jsx("stop", {
                                    offset: "1",
                                    "stop-color": "#4CCC81",
                                    "stop-opacity": "0"
                                })]
                            }), s.jsxs("linearGradient", {
                                id: "paint1_linear_133_6134",
                                x1: "71",
                                y1: "1",
                                x2: "71",
                                y2: "37",
                                gradientUnits: "userSpaceOnUse",
                                children: [s.jsx("stop", {
                                    "stop-color": "#00C16A"
                                }), s.jsx("stop", {
                                    offset: "1",
                                    "stop-color": "#4CCC81",
                                    "stop-opacity": "0"
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "flex w-full gap-2 items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ",
                        children: [s.jsx("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: s.jsx("path", {
                                d: "M15.625 6.56252H14.0625V5.00002C14.0623 4.52184 13.9054 4.05689 13.6158 3.67635C13.3263 3.2958 12.92 3.02062 12.4592 2.89292C11.9984 2.76522 11.5084 2.79204 11.0643 2.96927C10.6201 3.14649 10.2463 3.46437 10 3.87424C9.7537 3.46437 9.37987 3.14649 8.93574 2.96927C8.49161 2.79204 8.00164 2.76522 7.54083 2.89292C7.08001 3.02062 6.67372 3.2958 6.38416 3.67635C6.0946 4.05689 5.93771 4.52184 5.9375 5.00002V5.34612C5.6335 5.03585 5.24401 4.82311 4.81866 4.73501C4.39332 4.64691 3.95137 4.68744 3.54914 4.85143C3.14691 5.01543 2.80261 5.29546 2.56011 5.65584C2.31762 6.01623 2.1879 6.44065 2.1875 6.87502V10C2.1875 12.072 3.0106 14.0592 4.47573 15.5243C5.94086 16.9894 7.928 17.8125 10 17.8125C12.072 17.8125 14.0591 16.9894 15.5243 15.5243C16.9894 14.0592 17.8125 12.072 17.8125 10V8.75002C17.8125 8.16986 17.582 7.61346 17.1718 7.20323C16.7616 6.79299 16.2052 6.56252 15.625 6.56252ZM11.875 3.43752C12.2894 3.43752 12.6868 3.60214 12.9799 3.89517C13.2729 4.1882 13.4375 4.58562 13.4375 5.00002V6.56252H10.625C10.5185 6.56256 10.4127 6.58106 10.3125 6.61721V5.00002C10.3125 4.58562 10.4771 4.1882 10.7701 3.89517C11.0632 3.60214 11.4606 3.43752 11.875 3.43752ZM6.5625 5.00002C6.5625 4.58562 6.72712 4.1882 7.02015 3.89517C7.31317 3.60214 7.7106 3.43752 8.125 3.43752C8.5394 3.43752 8.93683 3.60214 9.22985 3.89517C9.52288 4.1882 9.6875 4.58562 9.6875 5.00002V8.12502C9.6875 8.53943 9.52288 8.93685 9.22985 9.22988C8.93683 9.5229 8.5394 9.68752 8.125 9.68752C7.7106 9.68752 7.31317 9.5229 7.02015 9.22988C6.72712 8.93685 6.5625 8.53943 6.5625 8.12502V5.00002ZM2.8125 6.87502C2.8125 6.46062 2.97712 6.0632 3.27015 5.77017C3.56317 5.47714 3.9606 5.31252 4.375 5.31252C4.7894 5.31252 5.18683 5.47714 5.47985 5.77017C5.77288 6.0632 5.9375 6.46062 5.9375 6.87502V8.12502C5.9375 8.53943 5.77288 8.93685 5.47985 9.22988C5.18683 9.5229 4.7894 9.68752 4.375 9.68752C3.9606 9.68752 3.56317 9.5229 3.27015 9.22988C2.97712 8.93685 2.8125 8.53943 2.8125 8.12502V6.87502ZM17.1875 10C17.1875 11.9063 16.4302 13.7344 15.0823 15.0824C13.7344 16.4303 11.9062 17.1875 10 17.1875C8.09376 17.1875 6.26559 16.4303 4.91767 15.0824C3.56975 13.7344 2.8125 11.9063 2.8125 10V9.65471C3.04636 9.89343 3.33181 10.0754 3.64694 10.1866C3.96206 10.2979 4.29848 10.3354 4.63038 10.2964C4.96228 10.2574 5.28084 10.1429 5.56159 9.96167C5.84235 9.78041 6.07784 9.53723 6.25 9.25081C6.43101 9.55193 6.68188 9.80502 6.9814 9.98866C7.28091 10.1723 7.62026 10.2811 7.97072 10.3059C8.32118 10.3306 8.67245 10.2706 8.99481 10.1309C9.31716 9.99115 9.60112 9.77584 9.82266 9.50315C9.9418 9.82645 10.1353 10.1172 10.3876 10.3518C10.6399 10.5865 10.9439 10.7585 11.275 10.8539C10.7885 11.1646 10.3881 11.5927 10.1107 12.0988C9.83322 12.605 9.68769 13.1728 9.6875 13.75C9.6875 13.8329 9.72042 13.9124 9.77903 13.971C9.83763 14.0296 9.91712 14.0625 10 14.0625C10.0829 14.0625 10.1624 14.0296 10.221 13.971C10.2796 13.9124 10.3125 13.8329 10.3125 13.75C10.3125 13.0041 10.6088 12.2887 11.1363 11.7613C11.6637 11.2338 12.3791 10.9375 13.125 10.9375C13.2079 10.9375 13.2874 10.9046 13.346 10.846C13.4046 10.7874 13.4375 10.7079 13.4375 10.625C13.4375 10.5421 13.4046 10.4627 13.346 10.4041C13.2874 10.3454 13.2079 10.3125 13.125 10.3125H11.875C11.4606 10.3125 11.0632 10.1479 10.7701 9.85488C10.4771 9.56185 10.3125 9.16443 10.3125 8.75002V7.50002C10.3125 7.41714 10.3454 7.33766 10.404 7.27905C10.4626 7.22045 10.5421 7.18752 10.625 7.18752H15.625C16.0394 7.18752 16.4368 7.35214 16.7299 7.64517C17.0229 7.9382 17.1875 8.33562 17.1875 8.75002V10Z",
                                fill: "white",
                                "fill-opacity": "0.9"
                            })
                        }), s.jsx("span", {
                            className: "text-sm text-white",
                            children: "Let’s do this"
                        })]
                    })]
                }), s.jsx("div", {
                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:block hidden",
                    children: s.jsxs("svg", {
                        className: "w-[920px] h-full md:h-[143px]",
                        viewBox: "0 0 920 143",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [s.jsxs("g", {
                            "clip-path": "url(#clip0_133_6119)",
                            children: [s.jsx("mask", {
                                id: "mask0_133_6119",
                                maskUnits: "userSpaceOnUse",
                                x: "-81",
                                y: "-496",
                                width: "992",
                                height: "992",
                                children: s.jsx("rect", {
                                    x: "911",
                                    y: "496",
                                    width: "992",
                                    height: "992",
                                    transform: "rotate(-180 911 496)",
                                    fill: "url(#paint0_linear_133_6119)"
                                })
                            }), s.jsxs("g", {
                                mask: "url(#mask0_133_6119)",
                                children: [s.jsx("circle", {
                                    opacity: "0.9",
                                    cx: "415",
                                    r: "111.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                }), s.jsx("circle", {
                                    opacity: "0.8",
                                    cx: "415",
                                    r: "159.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                }), s.jsx("circle", {
                                    opacity: "0.7",
                                    cx: "415",
                                    r: "207.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                }), s.jsx("circle", {
                                    opacity: "0.6",
                                    cx: "415",
                                    r: "255.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                }), s.jsx("circle", {
                                    opacity: "0.5",
                                    cx: "415",
                                    r: "303.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                }), s.jsx("circle", {
                                    opacity: "0.4",
                                    cx: "415",
                                    r: "351.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                }), s.jsx("circle", {
                                    opacity: "0.3",
                                    cx: "415",
                                    r: "399.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                }), s.jsx("circle", {
                                    opacity: "0.2",
                                    cx: "415",
                                    r: "447.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                }), s.jsx("circle", {
                                    opacity: "0.1",
                                    cx: "415",
                                    r: "495.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                }), s.jsx("circle", {
                                    cx: "415",
                                    r: "63.5",
                                    transform: "rotate(-180 415 0)",
                                    stroke: "#00C16A",
                                    "stroke-opacity": "0.08"
                                })]
                            })]
                        }), s.jsxs("defs", {
                            children: [s.jsxs("linearGradient", {
                                id: "paint0_linear_133_6119",
                                x1: "1407",
                                y1: "496",
                                x2: "1407",
                                y2: "1488",
                                gradientUnits: "userSpaceOnUse",
                                children: [s.jsx("stop", {
                                    offset: "0.437233",
                                    "stop-color": "white"
                                }), s.jsx("stop", {
                                    offset: "0.662338",
                                    "stop-color": "white",
                                    "stop-opacity": "0"
                                })]
                            }), s.jsx("clipPath", {
                                id: "clip0_133_6119",
                                children: s.jsx("rect", {
                                    width: "920",
                                    className: "h-full",
                                    fill: "white",
                                    transform: "matrix(-1 0 0 -1 920 143)"
                                })
                            })]
                        })]
                    })
                })]
            })
        })
    },
    ix = () => s.jsx("footer", {
        className: "mt-[70px] sm:mt-[130px] sm:mb-0 mb-2",
        children: s.jsx(Pi, {
            children: s.jsxs("div", {
                className: "flex flex-col",
                children: [s.jsx("div", {
                    className: "w-full h-[1px] bg-[rgba(0,0,0,0.03)] my-[12px]"
                }), s.jsxs("div", {
                    className: "flex justify-between items-center md:flex-row flex-col",
                    children: [s.jsx("div", {
                        children: s.jsxs("svg", {
                            className: "w-[114px] sm:w-[134px] sm:h-[43px]",
                            viewBox: "0 0 134 43",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [s.jsx("path", {
                                d: "M7.28 27.5609L1.596 21.3729L7.28 15.1849H13.3L7.588 21.3729L13.3 27.5609H7.28ZM27.1819 31.1729L23.0939 23.7529H21.9459V31.1729H17.1579V11.5169H25.1939C26.7432 11.5169 28.0592 11.7875 29.1419 12.3289C30.2432 12.8702 31.0645 13.6169 31.6059 14.5689C32.1472 15.5022 32.4179 16.5475 32.4179 17.7049C32.4179 19.0115 32.0445 20.1782 31.2979 21.2049C30.5699 22.2315 29.4872 22.9595 28.0499 23.3889L32.5859 31.1729H27.1819ZM21.9459 20.3649H24.9139C25.7912 20.3649 26.4445 20.1502 26.8739 19.7209C27.3219 19.2915 27.5459 18.6849 27.5459 17.9009C27.5459 17.1542 27.3219 16.5662 26.8739 16.1369C26.4445 15.7075 25.7912 15.4929 24.9139 15.4929H21.9459V20.3649ZM118.525 4.57285L111.021 36.4089H106.401L113.905 4.57285H118.525ZM120.573 15.1849H126.593L132.277 21.3729L126.593 27.5609H120.573L126.285 21.3729L120.573 15.1849Z",
                                fill: "#00C16A"
                            }), s.jsx("path", {
                                d: "M34.7235 23.3889C34.7235 21.8395 35.0408 20.4675 35.6755 19.2729C36.3288 18.0782 37.2062 17.1542 38.3075 16.5009C39.4275 15.8289 40.6595 15.4929 42.0035 15.4929C43.2168 15.4929 44.2715 15.7355 45.1675 16.2209C46.0822 16.6875 46.8102 17.2755 47.3515 17.9849V15.7449H50.5715V31.1729H47.3515V28.8769C46.8102 29.6049 46.0728 30.2115 45.1395 30.6969C44.2062 31.1822 43.1422 31.4249 41.9475 31.4249C40.6222 31.4249 39.4088 31.0889 38.3075 30.4169C37.2062 29.7262 36.3288 28.7742 35.6755 27.5609C35.0408 26.3289 34.7235 24.9382 34.7235 23.3889ZM47.3515 23.4449C47.3515 22.3809 47.1275 21.4569 46.6795 20.6729C46.2502 19.8889 45.6808 19.2915 44.9715 18.8809C44.2622 18.4702 43.4968 18.2649 42.6755 18.2649C41.8542 18.2649 41.0888 18.4702 40.3795 18.8809C39.6702 19.2729 39.0915 19.8609 38.6435 20.6449C38.2142 21.4102 37.9995 22.3249 37.9995 23.3889C37.9995 24.4529 38.2142 25.3862 38.6435 26.1889C39.0915 26.9915 39.6702 27.6075 40.3795 28.0369C41.1075 28.4475 41.8728 28.6529 42.6755 28.6529C43.4968 28.6529 44.2622 28.4475 44.9715 28.0369C45.6808 27.6262 46.2502 27.0289 46.6795 26.2449C47.1275 25.4422 47.3515 24.5089 47.3515 23.4449ZM68.6521 15.7449L59.1881 38.4249H55.8841L59.0201 30.9209L52.9441 15.7449H56.5001L60.8401 27.5049L65.3481 15.7449H68.6521ZM69.9969 23.3889C69.9969 21.8395 70.3143 20.4675 70.9489 19.2729C71.6023 18.0782 72.4796 17.1542 73.5809 16.5009C74.7009 15.8289 75.9329 15.4929 77.2769 15.4929C78.4903 15.4929 79.5449 15.7355 80.4409 16.2209C81.3556 16.6875 82.0836 17.2755 82.6249 17.9849V15.7449H85.8449V31.1729H82.6249V28.8769C82.0836 29.6049 81.3463 30.2115 80.4129 30.6969C79.4796 31.1822 78.4156 31.4249 77.2209 31.4249C75.8956 31.4249 74.6823 31.0889 73.5809 30.4169C72.4796 29.7262 71.6023 28.7742 70.9489 27.5609C70.3143 26.3289 69.9969 24.9382 69.9969 23.3889ZM82.6249 23.4449C82.6249 22.3809 82.4009 21.4569 81.9529 20.6729C81.5236 19.8889 80.9543 19.2915 80.2449 18.8809C79.5356 18.4702 78.7703 18.2649 77.9489 18.2649C77.1276 18.2649 76.3623 18.4702 75.6529 18.8809C74.9436 19.2729 74.3649 19.8609 73.9169 20.6449C73.4876 21.4102 73.2729 22.3249 73.2729 23.3889C73.2729 24.4529 73.4876 25.3862 73.9169 26.1889C74.3649 26.9915 74.9436 27.6075 75.6529 28.0369C76.3809 28.4475 77.1463 28.6529 77.9489 28.6529C78.7703 28.6529 79.5356 28.4475 80.2449 28.0369C80.9543 27.6262 81.5236 27.0289 81.9529 26.2449C82.4009 25.4422 82.6249 24.5089 82.6249 23.4449ZM97.8215 15.4929C99.0348 15.4929 100.118 15.7449 101.07 16.2489C102.04 16.7529 102.796 17.4995 103.338 18.4889C103.879 19.4782 104.15 20.6729 104.15 22.0729V31.1729H100.986V22.5489C100.986 21.1675 100.64 20.1129 99.9495 19.3849C99.2588 18.6382 98.3162 18.2649 97.1215 18.2649C95.9268 18.2649 94.9748 18.6382 94.2655 19.3849C93.5748 20.1129 93.2295 21.1675 93.2295 22.5489V31.1729H90.0375V15.7449H93.2295V17.5089C93.7522 16.8742 94.4148 16.3795 95.2175 16.0249C96.0388 15.6702 96.9068 15.4929 97.8215 15.4929Z",
                                fill: "#172635"
                            })]
                        })
                    }), s.jsxs("div", {
                        className: "flex items-center gap-[6px] md:gap-[22px] md:flex-row flex-col md:mt-0 mt-4",
                        children: [s.jsx("span", {
                            className: "text-[#172635]/60 md:text-base text-sm",
                            children: "+964 751 710 0944"
                        }), s.jsx("span", {
                            className: "text-[#172635]/60 md:text-base text-sm",
                            children: "rayanramazan09@gmail.com"
                        }), s.jsxs("div", {
                            className: "flex gap-2 md:mt-0 mt-4",
                            children: [s.jsx("a", {
                                href: "https://instagram.com/rayan.ramazan",
                                "aria-label": "link",
                                className: "hover:-translate-y-1 duration-300",
                                children: s.jsxs("svg", {
                                    className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                    viewBox: "0 0 23 23",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [s.jsx("path", {
                                        d: "M11.5 13.5125C10.4219 13.5125 9.4875 12.65 9.4875 11.5C9.4875 10.4219 10.35 9.4875 11.5 9.4875C12.5781 9.4875 13.5125 10.35 13.5125 11.5C13.5125 12.5781 12.5781 13.5125 11.5 13.5125Z",
                                        fill: "#172635"
                                    }), s.jsx("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M13.9437 6.6125H9.05625C8.48125 6.68437 8.19375 6.75625 7.97813 6.82812C7.69063 6.9 7.475 7.04375 7.25938 7.25937C7.08875 7.43 7.00814 7.60062 6.9107 7.80685C6.88502 7.8612 6.8581 7.91817 6.82812 7.97812C6.81701 8.01148 6.80417 8.04656 6.79041 8.08415C6.71521 8.28958 6.6125 8.5702 6.6125 9.05625V13.9437C6.68438 14.5187 6.75625 14.8062 6.82812 15.0219C6.9 15.3094 7.04375 15.525 7.25938 15.7406C7.43 15.9112 7.60062 15.9919 7.80685 16.0893C7.86125 16.115 7.91812 16.1419 7.97813 16.1719C8.01148 16.183 8.04656 16.1958 8.08415 16.2096C8.28958 16.2848 8.5702 16.3875 9.05625 16.3875H13.9437C14.5187 16.3156 14.8063 16.2437 15.0219 16.1719C15.3094 16.1 15.525 15.9562 15.7406 15.7406C15.9112 15.57 15.9919 15.3994 16.0893 15.1931C16.115 15.1388 16.1419 15.0819 16.1719 15.0219C16.183 14.9885 16.1958 14.9534 16.2096 14.9158C16.2848 14.7104 16.3875 14.4298 16.3875 13.9437V9.05625C16.3156 8.48125 16.2437 8.19375 16.1719 7.97812C16.1 7.69062 15.9562 7.475 15.7406 7.25937C15.57 7.08875 15.3994 7.00814 15.1931 6.9107C15.1388 6.88504 15.0818 6.85807 15.0219 6.82812C14.9885 6.817 14.9534 6.80416 14.9158 6.7904C14.7104 6.71521 14.4298 6.6125 13.9437 6.6125ZM11.5 8.40937C9.775 8.40937 8.40938 9.775 8.40938 11.5C8.40938 13.225 9.775 14.5906 11.5 14.5906C13.225 14.5906 14.5906 13.225 14.5906 11.5C14.5906 9.775 13.225 8.40937 11.5 8.40937ZM15.3812 8.3375C15.3812 8.73445 15.0595 9.05625 14.6625 9.05625C14.2655 9.05625 13.9437 8.73445 13.9437 8.3375C13.9437 7.94054 14.2655 7.61875 14.6625 7.61875C15.0595 7.61875 15.3812 7.94054 15.3812 8.3375Z",
                                        fill: "#172635"
                                    }), s.jsx("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5ZM9.05625 5.53437H13.9437C14.5906 5.60625 15.0219 5.67812 15.3812 5.82187C15.8125 6.0375 16.1 6.18125 16.4594 6.54062C16.8188 6.9 17.0344 7.25937 17.1781 7.61875C17.3219 7.97812 17.4656 8.40937 17.4656 9.05625V13.9437C17.3937 14.5906 17.3219 15.0219 17.1781 15.3812C16.9625 15.8125 16.8188 16.1 16.4594 16.4594C16.1 16.8187 15.7406 17.0344 15.3812 17.1781C15.0219 17.3219 14.5906 17.4656 13.9437 17.4656H9.05625C8.40938 17.3937 7.97813 17.3219 7.61875 17.1781C7.1875 16.9625 6.9 16.8187 6.54063 16.4594C6.18125 16.1 5.96563 15.7406 5.82188 15.3812C5.67813 15.0219 5.53437 14.5906 5.53437 13.9437V9.05625C5.60625 8.40937 5.67813 7.97812 5.82188 7.61875C6.0375 7.1875 6.18125 6.9 6.54063 6.54062C6.9 6.18125 7.25938 5.96562 7.61875 5.82187C7.97813 5.67812 8.40938 5.53437 9.05625 5.53437Z",
                                        fill: "#172635"
                                    })]
                                })
                            }), s.jsx("a", {
                                href: "https://twitter.com/rayankrd_",
                                "aria-label": "link",
                                className: "hover:-translate-y-1 duration-300",
                                children: s.jsx("svg", {
                                    className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: s.jsx("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM16.575 8.625C17.1 8.55 17.55 8.475 18 8.25C17.7 8.775 17.25 9.225 16.725 9.525C16.875 13.05 14.325 16.875 9.75 16.875C8.4 16.875 7.125 16.425 6 15.75C7.275 15.9 8.625 15.525 9.525 14.85C8.4 14.85 7.5 14.1 7.2 13.125C7.575 13.2 7.95 13.125 8.325 13.05C7.2 12.75 6.375 11.7 6.375 10.575C6.75 10.725 7.125 10.875 7.5 10.875C6.45 10.125 6.075 8.7 6.75 7.575C8.025 9.075 9.825 10.05 11.85 10.125C11.475 8.625 12.675 7.125 14.25 7.125C14.925 7.125 15.6 7.425 16.05 7.875C16.65 7.725 17.175 7.575 17.625 7.275C17.475 7.875 17.1 8.325 16.575 8.625Z",
                                        fill: "#172635"
                                    })
                                })
                            }), s.jsx("a", {
                                href: "https://t.me/rayankrd",
                                "aria-label": "link",
                                className: "hover:-translate-y-1 duration-300",
                                children: s.jsx("svg", {
                                    className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: s.jsx("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12.5189 9.00553C11.4441 9.45256 9.29616 10.3778 6.07494 11.7812C5.55186 11.9892 5.27785 12.1927 5.25291 12.3917C5.21075 12.728 5.63186 12.8604 6.2053 13.0407C6.28331 13.0652 6.36413 13.0906 6.44699 13.1176C7.01117 13.301 7.77009 13.5155 8.16462 13.524C8.5225 13.5318 8.92193 13.3842 9.36292 13.0814C12.3726 11.0498 13.9262 10.0229 14.0238 10.0008C14.0926 9.98516 14.1879 9.96553 14.2525 10.023C14.3171 10.0804 14.3108 10.1891 14.3039 10.2183C14.2622 10.3962 12.6092 11.9329 11.7538 12.7282C11.4871 12.9762 11.2979 13.152 11.2593 13.1922C11.1726 13.2822 11.0844 13.3673 10.9995 13.4491C10.4754 13.9543 10.0823 14.3332 11.0213 14.952C11.4725 15.2494 11.8336 15.4952 12.1938 15.7405C12.5872 16.0084 12.9795 16.2757 13.4872 16.6084C13.6165 16.6932 13.7401 16.7813 13.8604 16.8671C14.3182 17.1934 14.7295 17.4867 15.2376 17.4399C15.5329 17.4127 15.8379 17.1351 15.9928 16.307C16.3588 14.3501 17.0784 10.1101 17.2447 8.36285C17.2592 8.20977 17.2409 8.01386 17.2262 7.92786C17.2115 7.84186 17.1807 7.71932 17.0689 7.62862C16.9365 7.52119 16.7322 7.49854 16.6407 7.50007C16.2251 7.50747 15.5875 7.72919 12.5189 9.00553Z",
                                        fill: "#172635"
                                    })
                                })
                            }), s.jsx("a", {
                                href: "https://www.behance.net/rayanramazan",
                                "aria-label": "link",
                                className: "hover:-translate-y-1 duration-300",
                                children: s.jsxs("svg", {
                                    className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [s.jsx("path", {
                                        d: "M9.99652 11.0209C9.81001 11.1541 9.57022 11.2341 9.27714 11.2341H7.62525V9.50224H9.17057C9.33043 9.50224 9.46365 9.50224 9.59686 9.52888C9.73008 9.55553 9.83665 9.60881 9.94322 9.6621C10.0498 9.74203 10.1297 9.82196 10.183 9.92854C10.2363 10.0351 10.2629 10.195 10.2629 10.3548C10.2629 10.6479 10.183 10.8877 9.99652 11.0209Z",
                                        fill: "#172635"
                                    }), s.jsx("path", {
                                        d: "M9.81001 14.3247C9.6768 14.3513 9.51693 14.378 9.35707 14.378H7.62525V12.3264H9.38372C9.73008 12.3264 10.0232 12.4064 10.2363 12.5662C10.4495 12.7527 10.556 13.0192 10.556 13.3922C10.556 13.5787 10.5027 13.7385 10.4495 13.8718C10.3695 14.005 10.2896 14.0849 10.183 14.1648C10.0764 14.2448 9.94323 14.2981 9.81001 14.3247Z",
                                        fill: "#172635"
                                    }), s.jsx("path", {
                                        d: "M15.3518 11.2607C15.6982 11.2607 15.9913 11.3673 16.1778 11.5538C16.3643 11.7403 16.4975 12.0067 16.5508 12.4064H14.1529C14.1529 12.3181 14.1712 12.2298 14.1926 12.1264C14.197 12.1049 14.2016 12.0829 14.2062 12.06C14.2328 11.9268 14.2861 11.7936 14.3927 11.687C14.4993 11.5804 14.6058 11.4739 14.7657 11.3939C14.9256 11.314 15.1121 11.2607 15.3518 11.2607Z",
                                        fill: "#172635"
                                    }), s.jsx("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM10.4495 8.35657C10.1564 8.27664 9.83666 8.25 9.49029 8.25H6V15.6036H9.57022C9.88994 15.6036 10.2097 15.5503 10.5294 15.4704C10.8491 15.3904 11.1422 15.2572 11.382 15.0974C11.6218 14.9375 11.8349 14.6977 11.9681 14.4313C12.1013 14.1648 12.1813 13.8451 12.1813 13.4721C12.1813 13.0192 12.0481 12.6195 11.8349 12.2998C11.6218 11.9801 11.2754 11.7403 10.8225 11.6071C11.1422 11.4472 11.4086 11.2341 11.5685 10.9943C11.755 10.7545 11.8349 10.4348 11.8349 10.0618C11.8349 9.74203 11.7816 9.44895 11.6751 9.20916C11.5685 8.96937 11.4086 8.78287 11.1955 8.64965C10.9823 8.51643 10.7425 8.40986 10.4495 8.35657ZM15.4584 14.6711C15.0321 14.6711 14.7124 14.5645 14.4993 14.3513C14.2861 14.1382 14.1262 13.7385 14.1262 13.3123H17.9895C18.0162 12.886 17.9895 12.5129 17.9363 12.1399C17.8297 11.7669 17.6698 11.4206 17.4567 11.1275C17.2435 10.8078 16.9771 10.5946 16.6307 10.4081C16.2844 10.2216 15.8847 10.1417 15.4318 10.1417C15.0055 10.1417 14.6591 10.2216 14.3128 10.3548C13.993 10.488 13.7 10.7012 13.4602 10.941C13.2204 11.2074 13.0339 11.5005 12.9007 11.8469C12.7674 12.1932 12.7141 12.5662 12.7141 12.9659C12.7141 13.3922 12.7674 13.7652 12.9007 14.1116C13.0072 14.4579 13.1937 14.751 13.4335 14.9908C13.6733 15.2572 13.9397 15.4437 14.2861 15.5769C14.6325 15.7102 15.0055 15.7901 15.4318 15.7901C16.0446 15.7901 16.5508 15.6302 16.9771 15.3638C17.4034 15.0707 17.7231 14.6178 17.9363 13.9783H16.6307C16.5774 14.1382 16.4442 14.2981 16.2311 14.4579C16.0179 14.5911 15.7515 14.6711 15.4584 14.6711ZM16.8172 8.75623H13.8332V9.4756H16.8172V8.75623Z",
                                        fill: "#172635"
                                    })]
                                })
                            }), s.jsx("a", {
                                href: "https://github.com/rayanramazan",
                                "aria-label": "link",
                                className: "hover:-translate-y-1 duration-300",
                                children: s.jsx("svg", {
                                    className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: s.jsx("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM6 12.1257C6 8.8229 8.67888 6.144 11.9816 6.144C15.2844 6.144 17.9633 8.8229 18 12.1257C18 14.7679 16.3119 17.0064 13.9266 17.8137C13.633 17.8504 13.5229 17.6669 13.5229 17.5201V15.8688C13.5229 15.3183 13.3395 14.9513 13.1193 14.7679C14.4404 14.6211 15.8349 14.144 15.8349 11.8321C15.8349 11.1715 15.578 10.6211 15.211 10.2174C15.2139 10.2059 15.2179 10.1914 15.2227 10.1741C15.2789 9.97146 15.4419 9.38333 15.1376 8.63941C15.1376 8.63941 14.6239 8.49263 13.4862 9.26327C13.0092 9.15318 12.4954 9.07978 11.9816 9.07978C11.4679 9.07978 10.9541 9.11648 10.4771 9.26327C9.33943 8.49263 8.82568 8.63941 8.82568 8.63941C8.50136 9.43223 8.70786 10.0481 8.75015 10.1743L8.7523 10.1807C8.3486 10.6211 8.12842 11.1348 8.12842 11.7954C8.12842 14.1073 9.52295 14.6211 10.8441 14.7679C10.6973 14.9146 10.5138 15.1715 10.4771 15.5752C10.1468 15.722 9.30276 15.9789 8.7523 15.0614C8.7523 15.0614 8.42203 14.4743 7.83485 14.4376C7.83485 14.4376 7.24773 14.4376 7.79819 14.8046C7.79819 14.8046 8.20184 14.988 8.45869 15.6853C8.45869 15.6853 8.82568 16.8596 10.4771 16.4926V17.5201C10.4771 17.6669 10.367 17.8504 10.0734 17.8137C7.72476 17.0064 6 14.7679 6 12.1257Z",
                                        fill: "#172635"
                                    })
                                })
                            }), s.jsx("a", {
                                href: "https://www.facebook.com/rayan.kordesh.5",
                                "aria-label": "link",
                                className: "hover:-translate-y-1 duration-300",
                                children: s.jsx("svg", {
                                    className: "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: s.jsx("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12 6C15.3 6 18 8.7 18 12C18 15 15.825 17.55 12.825 18V13.725H14.25L14.55 12H12.9V10.875C12.9 10.425 13.125 9.975 13.875 9.975H14.625V8.475C14.625 8.475 13.95 8.325 13.275 8.325C11.925 8.325 11.025 9.15 11.025 10.65V12H9.525V13.725H11.025V17.925C8.175 17.475 6 15 6 12C6 8.7 8.7 6 12 6Z",
                                        fill: "#172635"
                                    })
                                })
                            })]
                        })]
                    })]
                })]
            })
        })
    });

function sx() {
    return U.useEffect(() => {
        (() => {
            const t = document.createElement("link");
            t.rel = "stylesheet", t.type = "text/css", t.charset = "UTF-8", t.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css", document.head.appendChild(t);
            const n = document.createElement("link");
            n.rel = "stylesheet", n.type = "text/css", n.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css", document.head.appendChild(n)
        })()
    }, []), s.jsxs(s.Fragment, {
        children: [s.jsx(x9, {}), s.jsx(Ry, {}), s.jsx(Ny, {}), s.jsxs("div", {
            className: " w-full relative",
            children: [s.jsx(qy, {}), s.jsx(tx, {}), s.jsxs("svg", {
                className: " absolute left-0 top-0 md:block hidden",
                width: "515",
                height: "992",
                viewBox: "0 0 515 992",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [s.jsx("mask", {
                    id: "mask0_112_2200",
                    maskUnits: "userSpaceOnUse",
                    x: "-477",
                    y: "0",
                    width: "992",
                    height: "992",
                    children: s.jsx("rect", {
                        x: "-477",
                        width: "992",
                        height: "992",
                        fill: "url(#paint0_linear_112_2200)"
                    })
                }), s.jsxs("g", {
                    mask: "url(#mask0_112_2200)",
                    children: [s.jsx("circle", {
                        opacity: "0.9",
                        cx: "19",
                        cy: "496",
                        r: "111.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.8",
                        cx: "19",
                        cy: "496",
                        r: "159.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.7",
                        cx: "19",
                        cy: "496",
                        r: "207.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.6",
                        cx: "19",
                        cy: "496",
                        r: "255.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.5",
                        cx: "19",
                        cy: "496",
                        r: "303.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.4",
                        cx: "19",
                        cy: "496",
                        r: "351.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.3",
                        cx: "19",
                        cy: "496",
                        r: "399.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.2",
                        cx: "19",
                        cy: "496",
                        r: "447.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.1",
                        cx: "19",
                        cy: "496",
                        r: "495.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        cx: "19",
                        cy: "496",
                        r: "63.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    })]
                }), s.jsx("defs", {
                    children: s.jsxs("linearGradient", {
                        id: "paint0_linear_112_2200",
                        x1: "19",
                        y1: "0",
                        x2: "19",
                        y2: "992",
                        gradientUnits: "userSpaceOnUse",
                        children: [s.jsx("stop", {
                            offset: "0.437233",
                            "stop-color": "white"
                        }), s.jsx("stop", {
                            offset: "0.662338",
                            "stop-color": "white",
                            "stop-opacity": "0"
                        })]
                    })
                })]
            }), s.jsxs("svg", {
                className: " absolute right-0 -top-44",
                width: "518",
                height: "992",
                viewBox: "0 0 518 992",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [s.jsx("mask", {
                    id: "mask0_112_2213",
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "992",
                    height: "992",
                    children: s.jsx("rect", {
                        width: "992",
                        height: "992",
                        fill: "url(#paint0_linear_112_2213)"
                    })
                }), s.jsxs("g", {
                    mask: "url(#mask0_112_2213)",
                    children: [s.jsx("circle", {
                        opacity: "0.9",
                        cx: "496",
                        cy: "496",
                        r: "111.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.8",
                        cx: "496",
                        cy: "496",
                        r: "159.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.7",
                        cx: "496",
                        cy: "496",
                        r: "207.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.6",
                        cx: "496",
                        cy: "496",
                        r: "255.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.5",
                        cx: "496",
                        cy: "496",
                        r: "303.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.4",
                        cx: "496",
                        cy: "496",
                        r: "351.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.3",
                        cx: "496",
                        cy: "496",
                        r: "399.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.2",
                        cx: "496",
                        cy: "496",
                        r: "447.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        opacity: "0.1",
                        cx: "496",
                        cy: "496",
                        r: "495.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    }), s.jsx("circle", {
                        cx: "496",
                        cy: "496",
                        r: "63.5",
                        stroke: "#172635",
                        "stroke-opacity": "0.08"
                    })]
                }), s.jsx("defs", {
                    children: s.jsxs("linearGradient", {
                        id: "paint0_linear_112_2213",
                        x1: "496",
                        y1: "0",
                        x2: "496",
                        y2: "992",
                        gradientUnits: "userSpaceOnUse",
                        children: [s.jsx("stop", {
                            offset: "0.437233",
                            "stop-color": "white"
                        }), s.jsx("stop", {
                            offset: "0.662338",
                            "stop-color": "white",
                            "stop-opacity": "0"
                        })]
                    })
                })]
            })]
        }), s.jsx(nx, {}), s.jsx(rx, {}), s.jsx(ix, {})]
    })
}
t1.createRoot(document.getElementById("root")).render(s.jsx(Tl.StrictMode, {
    children: s.jsx(sx, {})
}));