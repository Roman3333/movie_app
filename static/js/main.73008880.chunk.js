(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(20),r=c.n(a),i=c(6),j=c(2),o=(c(27),c(1));var l=function(){return Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)(i.b,{to:"/home",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(o.jsx)(i.b,{to:"/about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})};var m=function(){return Object(o.jsx)("div",{children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u043e \u0444\u0438\u043b\u044c\u043c\u0430\u0445"})},b=c(11),u=c.n(b),d=c(21),O=c(5),x=c(22),h=c.n(x),v=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"movie",children:[Object(o.jsx)("img",{src:t.medium_cover_image,alt:t.title,title:t.title}),Object(o.jsxs)("div",{className:"movie__column",children:[Object(o.jsx)("h3",{className:"movie__title",children:t.title}),Object(o.jsx)("h5",{className:"movie__year",children:t.year}),Object(o.jsx)("ul",{className:"movie__genres",children:t.genres.map((function(e,t){return Object(o.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(o.jsxs)("p",{className:"movie__summary",children:[t.summary.slice(0,140),"..."]})]})]})},p=function(e){var t=e.movies;return console.log(t),Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)(v,{movie:e},e.id)}))})},f=function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(O.a)(a,2),i=r[0],j=r[1],l=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,n(t.data.data.movies),j(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){l()}),[]),Object(o.jsx)(o.Fragment,{children:i?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):Object(o.jsx)("div",{className:"movies",children:Object(o.jsx)(p,{movies:c})})})},_=function(){return Object(o.jsx)("section",{className:"container",children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{path:"/home",element:Object(o.jsx)(f,{})}),Object(o.jsx)(j.b,{path:"/about",element:Object(o.jsx)(m,{})}),Object(o.jsx)(j.b,{path:"*",element:Object(o.jsx)(j.a,{to:"/home"})})]})]})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.73008880.chunk.js.map