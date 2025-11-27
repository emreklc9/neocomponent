import ee, { useState as re } from "react";
var D = { exports: {} }, N = {};
var X;
function te() {
  if (X) return N;
  X = 1;
  var c = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function v(f, l, i) {
    var u = null;
    if (i !== void 0 && (u = "" + i), l.key !== void 0 && (u = "" + l.key), "key" in l) {
      i = {};
      for (var b in l)
        b !== "key" && (i[b] = l[b]);
    } else i = l;
    return l = i.ref, {
      $$typeof: c,
      type: f,
      key: u,
      ref: l !== void 0 ? l : null,
      props: i
    };
  }
  return N.Fragment = m, N.jsx = v, N.jsxs = v, N;
}
var w = {};
var H;
function ne() {
  return H || (H = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === _ ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case M:
          return "Profiler";
        case Y:
          return "StrictMode";
        case T:
          return "Suspense";
        case S:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case $:
            return "Portal";
          case d:
            return e.displayName || "Context";
          case t:
            return (e._context.displayName || "Context") + ".Consumer";
          case h:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case F:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case E:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function v(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), m(e);
      }
    }
    function f(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === E)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = I.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, r) {
      function n() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function p() {
      var e = c(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function R(e, r, n, o, C, W) {
      var s = n.ref;
      return e = {
        $$typeof: A,
        type: e,
        key: r,
        props: n,
        _owner: o
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
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
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, n, o, C, W) {
      var s = r.children;
      if (s !== void 0)
        if (o)
          if (Q(s)) {
            for (o = 0; o < s.length; o++)
              x(s[o]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(s);
      if (U.call(r, "key")) {
        s = c(e);
        var y = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        o = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", G[s + o] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          s,
          y,
          s
        ), G[s + o] = !0);
      }
      if (s = null, n !== void 0 && (v(n), s = "" + n), u(r) && (v(r.key), s = "" + r.key), "key" in r) {
        n = {};
        for (var L in r)
          L !== "key" && (n[L] = r[L]);
      } else n = r;
      return s && b(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        s,
        n,
        l(),
        C,
        W
      );
    }
    function x(e) {
      O(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === E && (e._payload.status === "fulfilled" ? O(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function O(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    var g = ee, A = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), t = Symbol.for("react.consumer"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), I = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, Q = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var V, q = {}, J = g.react_stack_bottom_frame.bind(
      g,
      i
    )(), B = z(f(i)), G = {};
    w.Fragment = k, w.jsx = function(e, r, n) {
      var o = 1e4 > I.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        n,
        !1,
        o ? Error("react-stack-top-frame") : J,
        o ? z(f(e)) : B
      );
    }, w.jsxs = function(e, r, n) {
      var o = 1e4 > I.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        n,
        !0,
        o ? Error("react-stack-top-frame") : J,
        o ? z(f(e)) : B
      );
    };
  })()), w;
}
var Z;
function ae() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? D.exports = te() : D.exports = ne()), D.exports;
}
var a = ae();
const se = ({
  selectedDate: c,
  onDateSelect: m,
  minDate: v,
  maxDate: f,
  weekStartsOn: l = 1,
  className: i = ""
}) => {
  const [u, b] = re(c || /* @__PURE__ */ new Date()), p = [
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
  ], R = l === 1 ? ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"] : ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], P = (t) => {
    const d = t.getFullYear(), h = t.getMonth(), T = new Date(d, h, 1), F = new Date(d, h + 1, 0).getDate();
    let E = T.getDay();
    l === 1 && (E = E === 0 ? 6 : E - 1);
    const j = [];
    for (let _ = 0; _ < E; _++)
      j.push(null);
    for (let _ = 1; _ <= F; _++)
      j.push(new Date(d, h, _));
    return j;
  }, x = (t) => !!(v && t < v || f && t > f), O = (t) => c ? t.getDate() === c.getDate() && t.getMonth() === c.getMonth() && t.getFullYear() === c.getFullYear() : !1, g = (t) => {
    const d = /* @__PURE__ */ new Date();
    return t.getDate() === d.getDate() && t.getMonth() === d.getMonth() && t.getFullYear() === d.getFullYear();
  }, A = (t) => {
    x(t) || m && m(t);
  }, $ = () => {
    b(new Date(u.getFullYear(), u.getMonth() - 1, 1));
  }, k = () => {
    b(new Date(u.getFullYear(), u.getMonth() + 1, 1));
  }, Y = () => {
    const t = /* @__PURE__ */ new Date();
    b(t), m && m(t);
  }, M = P(u);
  return /* @__PURE__ */ a.jsxs("div", { className: `neo-calendar ${i}`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "neo-calendar-header", children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "neo-calendar-nav-button",
          onClick: $,
          "aria-label": "Önceki ay",
          children: "‹"
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "neo-calendar-title", children: [
        /* @__PURE__ */ a.jsx("span", { className: "neo-calendar-month", children: p[u.getMonth()] }),
        /* @__PURE__ */ a.jsx("span", { className: "neo-calendar-year", children: u.getFullYear() })
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "neo-calendar-nav-button",
          onClick: k,
          "aria-label": "Sonraki ay",
          children: "›"
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "neo-calendar-weekdays", children: R.map((t, d) => /* @__PURE__ */ a.jsx("div", { className: "neo-calendar-weekday", children: t }, d)) }),
    /* @__PURE__ */ a.jsx("div", { className: "neo-calendar-days", children: M.map((t, d) => {
      if (!t)
        return /* @__PURE__ */ a.jsx("div", { className: "neo-calendar-day empty" }, d);
      const h = x(t), T = O(t), S = g(t);
      return /* @__PURE__ */ a.jsx(
        "button",
        {
          className: `neo-calendar-day ${T ? "selected" : ""} ${S ? "today" : ""} ${h ? "disabled" : ""}`,
          onClick: () => A(t),
          disabled: h,
          "aria-label": `${t.getDate()} ${p[t.getMonth()]} ${t.getFullYear()}`,
          children: t.getDate()
        },
        d
      );
    }) }),
    /* @__PURE__ */ a.jsx("div", { className: "neo-calendar-footer", children: /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "neo-calendar-today-button",
        onClick: Y,
        children: "Bugün"
      }
    ) })
  ] });
}, le = ({
  variant: c = "primary",
  size: m = "medium",
  fullWidth: v = !1,
  loading: f = !1,
  children: l,
  className: i = "",
  disabled: u,
  ...b
}) => {
  const p = [
    "neo-button",
    `neo-button--${c}`,
    `neo-button--${m}`,
    v && "neo-button--full-width",
    f && "neo-button--loading",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      className: p,
      disabled: u || f,
      ...b,
      children: [
        f && /* @__PURE__ */ a.jsx("span", { className: "neo-button-spinner", "aria-hidden": "true", children: /* @__PURE__ */ a.jsx(
          "svg",
          {
            className: "neo-button-spinner-svg",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ a.jsxs(
              "circle",
              {
                className: "neo-button-spinner-circle",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeDasharray: "32",
                strokeDashoffset: "32",
                children: [
                  /* @__PURE__ */ a.jsx(
                    "animate",
                    {
                      attributeName: "stroke-dasharray",
                      dur: "2s",
                      values: "0 32;16 16;0 32;0 32",
                      repeatCount: "indefinite"
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "animate",
                    {
                      attributeName: "stroke-dashoffset",
                      dur: "2s",
                      values: "0;-16;-32;-32",
                      repeatCount: "indefinite"
                    }
                  )
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ a.jsx("span", { className: f ? "neo-button-content--loading" : "neo-button-content", children: l })
      ]
    }
  );
}, ce = ({
  size: c = "md",
  weight: m = "normal",
  color: v = "default",
  as: f = "p",
  align: l = "left",
  children: i,
  className: u = "",
  ...b
}) => {
  const p = f, R = [
    "neo-text",
    `neo-text--${c}`,
    `neo-text--${m}`,
    `neo-text--${v}`,
    `neo-text--align-${l}`,
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(p, { className: R, ...b, children: i });
};
export {
  le as Button,
  se as Calendar,
  ce as Text
};
