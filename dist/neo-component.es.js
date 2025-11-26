import ee, { useState as re } from "react";
var C = { exports: {} }, j = {};
var B;
function te() {
  if (B) return j;
  B = 1;
  var u = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function b(E, s, f) {
    var i = null;
    if (f !== void 0 && (i = "" + f), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      f = {};
      for (var m in s)
        m !== "key" && (f[m] = s[m]);
    } else f = s;
    return s = f.ref, {
      $$typeof: u,
      type: E,
      key: i,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return j.Fragment = d, j.jsx = b, j.jsxs = b, j;
}
var x = {};
var H;
function ae() {
  return H || (H = 1, process.env.NODE_ENV !== "production" && (function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === g ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case $:
          return "Profiler";
        case M:
          return "StrictMode";
        case T:
          return "Suspense";
        case A:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Y:
            return "Portal";
          case l:
            return e.displayName || "Context";
          case t:
            return (e._context.displayName || "Context") + ".Consumer";
          case _:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case F:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case v:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function b(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function E(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === v)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = I.A;
      return e === null ? null : e.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function a() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function w() {
      var e = u(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function D(e, r, a, n, S, W) {
      var o = a.ref;
      return e = {
        $$typeof: O,
        type: e,
        key: r,
        props: a,
        _owner: n
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function N(e, r, a, n, S, W) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (Q(o)) {
            for (n = 0; n < o.length; n++)
              y(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(o);
      if (U.call(r, "key")) {
        o = u(e);
        var R = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", X[o + n] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          R,
          o
        ), X[o + n] = !0);
      }
      if (o = null, a !== void 0 && (b(a), o = "" + a), i(r) && (b(r.key), o = "" + r.key), "key" in r) {
        a = {};
        for (var L in r)
          L !== "key" && (a[L] = r[L]);
      } else a = r;
      return o && m(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), D(
        e,
        o,
        a,
        s(),
        S,
        W
      );
    }
    function y(e) {
      P(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === v && (e._payload.status === "fulfilled" ? P(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function P(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    var p = ee, O = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), t = Symbol.for("react.consumer"), l = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), g = Symbol.for("react.client.reference"), I = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, Q = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var V, q = {}, J = p.react_stack_bottom_frame.bind(
      p,
      f
    )(), G = z(E(f)), X = {};
    x.Fragment = h, x.jsx = function(e, r, a) {
      var n = 1e4 > I.recentlyCreatedOwnerStacks++;
      return N(
        e,
        r,
        a,
        !1,
        n ? Error("react-stack-top-frame") : J,
        n ? z(E(e)) : G
      );
    }, x.jsxs = function(e, r, a) {
      var n = 1e4 > I.recentlyCreatedOwnerStacks++;
      return N(
        e,
        r,
        a,
        !0,
        n ? Error("react-stack-top-frame") : J,
        n ? z(E(e)) : G
      );
    };
  })()), x;
}
var Z;
function ne() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? C.exports = te() : C.exports = ae()), C.exports;
}
var c = ne();
const se = ({
  selectedDate: u,
  onDateSelect: d,
  minDate: b,
  maxDate: E,
  weekStartsOn: s = 1,
  className: f = ""
}) => {
  const [i, m] = re(u || /* @__PURE__ */ new Date()), w = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ], D = s === 1 ? ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"] : ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], N = (t) => {
    const l = t.getFullYear(), _ = t.getMonth(), T = new Date(l, _, 1), F = new Date(l, _ + 1, 0).getDate();
    let v = T.getDay();
    s === 1 && (v = v === 0 ? 6 : v - 1);
    const k = [];
    for (let g = 0; g < v; g++)
      k.push(null);
    for (let g = 1; g <= F; g++)
      k.push(new Date(l, _, g));
    return k;
  }, y = (t) => !!(b && t < b || E && t > E), P = (t) => u ? t.getDate() === u.getDate() && t.getMonth() === u.getMonth() && t.getFullYear() === u.getFullYear() : !1, p = (t) => {
    const l = /* @__PURE__ */ new Date();
    return t.getDate() === l.getDate() && t.getMonth() === l.getMonth() && t.getFullYear() === l.getFullYear();
  }, O = (t) => {
    y(t) || d && d(t);
  }, Y = () => {
    m(new Date(i.getFullYear(), i.getMonth() - 1, 1));
  }, h = () => {
    m(new Date(i.getFullYear(), i.getMonth() + 1, 1));
  }, M = () => {
    const t = /* @__PURE__ */ new Date();
    m(t), d && d(t);
  }, $ = N(i);
  return /* @__PURE__ */ c.jsxs("div", { className: `neo-calendar ${f}`, children: [
    /* @__PURE__ */ c.jsxs("div", { className: "neo-calendar-header", children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "neo-calendar-nav-button",
          onClick: Y,
          "aria-label": "Önceki ay",
          children: "‹"
        }
      ),
      /* @__PURE__ */ c.jsxs("div", { className: "neo-calendar-title", children: [
        /* @__PURE__ */ c.jsx("span", { className: "neo-calendar-month", children: w[i.getMonth()] }),
        /* @__PURE__ */ c.jsx("span", { className: "neo-calendar-year", children: i.getFullYear() })
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "neo-calendar-nav-button",
          onClick: h,
          "aria-label": "Sonraki ay",
          children: "›"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "neo-calendar-weekdays", children: D.map((t, l) => /* @__PURE__ */ c.jsx("div", { className: "neo-calendar-weekday", children: t }, l)) }),
    /* @__PURE__ */ c.jsx("div", { className: "neo-calendar-days", children: $.map((t, l) => {
      if (!t)
        return /* @__PURE__ */ c.jsx("div", { className: "neo-calendar-day empty" }, l);
      const _ = y(t), T = P(t), A = p(t);
      return /* @__PURE__ */ c.jsx(
        "button",
        {
          className: `neo-calendar-day ${T ? "selected" : ""} ${A ? "today" : ""} ${_ ? "disabled" : ""}`,
          onClick: () => O(t),
          disabled: _,
          "aria-label": `${t.getDate()} ${w[t.getMonth()]} ${t.getFullYear()}`,
          children: t.getDate()
        },
        l
      );
    }) }),
    /* @__PURE__ */ c.jsx("div", { className: "neo-calendar-footer", children: /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "neo-calendar-today-button",
        onClick: M,
        children: "Bugün"
      }
    ) })
  ] });
};
export {
  se as Calendar
};
