(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{24:function(t,e,c){},26:function(t,e,c){"use strict";c.r(e);var n=c(4),s=c.n(n),a=c(18),r=c.n(a),i=(c(24),c(17)),u=c(34),o=c(29),b=c(32),l=c(33),j=c(30),d=c(19),f=c(31),O=c(2);var p=function(){var t=Object(n.useState)(0),e=Object(i.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(!1),r=Object(i.a)(a,2),p=r[0],h=r[1],m=Object(u.a)(0,1e3);return Object(n.useEffect)((function(){if(p){var t=m.subscribe((function(t){return s(c+t)}));return function(){return t.unsubscribe()}}}),[p]),Object(n.useEffect)((function(){var t=Object(o.a)(document.getElementById("waitBtn"),"click");return t.pipe(Object(l.a)(t.pipe(Object(j.a)(300))),Object(d.a)((function(t){return t.length})),Object(f.a)((function(t){return t>=2}))).subscribe((function(){return h(!1)})),function(){return b.a.unsubscribe()}}),[]),Object(O.jsx)("div",{className:"container mt-5",style:{width:"25rem"},children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-header",children:"Stopwatch App"}),Object(O.jsxs)("div",{className:"pt-0 d-flex flex-column align-items-center",children:[Object(O.jsx)("div",{className:"fs-1 m-3",children:function(){var t="0".concat(c%60).slice(-2),e="0".concat(Math.floor(c/60)%60).slice(-2),n="0".concat(Math.floor(c/3600)).slice(-2);return"".concat(n," : ").concat(e," : ").concat(t)}()}),Object(O.jsxs)("div",{className:"btn-group custom-btn-group",role:"group",children:[Object(O.jsx)("button",{type:"button",className:"btn-outline-success",onClick:function(){p?(h(!1),s(0)):h(!0)},children:p?"Stop":"Start"}),Object(O.jsx)("button",{type:"button",className:"btn-outline-success",id:"waitBtn",children:"Wait"}),Object(O.jsx)("button",{type:"button",className:"btn-outline-success",onClick:function(){s(0),h(!0)},children:"Reset"})]})]})]})})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3f1f0fa5.chunk.js.map