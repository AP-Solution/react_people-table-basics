(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(19),c(20),c(2)),s=(c(21),c(0)),j=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{className:"title",children:"Home Page"})})},i=c(8),o=c(4),l=c(1),b=(c(23),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})}),d=c(6),h=c.n(d),x=function(e){var t=e.person;return Object(s.jsx)(a.b,{to:"../".concat(t.slug),className:h()({"has-text-danger":"f"===t.sex}),children:t.name})},O=function(e){var t=e.person,c=Object(r.h)().slug;return Object(s.jsxs)("tr",{"data-cy":"person",className:h()({"has-background-warning":t.slug===c}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(x,{person:t})}),Object(s.jsx)("td",{children:t.sex}),Object(s.jsx)("td",{children:t.born}),Object(s.jsx)("td",{children:t.died}),Object(s.jsxs)("td",{children:[t.mother&&Object(s.jsx)(x,{person:t.mother}),t.motherName&&!t.mother&&Object(s.jsx)("p",{children:t.motherName}),!t.motherName&&"-"]}),Object(s.jsxs)("td",{children:[t.father&&Object(s.jsx)(x,{person:t.father}),t.fatherName&&!t.father&&Object(s.jsx)("p",{children:t.fatherName}),!t.fatherName&&"-"]})]},t.name)},u=function(e){var t=e.people,c=e.isLoading,n=e.error;return Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"box table-container",children:[c&&Object(s.jsx)(b,{}),!c&&Object(s.jsxs)(s.Fragment,{children:[n&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:n}),!t.length&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(O,{person:e})}))})]})]})]})})};function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!0),r=Object(o.a)(a,2),j=r[0],b=r[1],d=Object(l.useState)(null),h=Object(o.a)(d,2),x=h[0],O=h[1];return Object(l.useEffect)((function(){m().then((function(e){var t=e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName}));return Object(i.a)(Object(i.a)({},t),{},{mother:c,father:n})}));n(t)})).catch((function(){O("Failed to load people")})).finally((function(){b(!1)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),c&&Object(s.jsx)(u,{people:c,isLoading:j,error:x})]})},f=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{className:"title",children:"Page not found"})})},v=function(e){var t=e.to,c=e.text,n=e.end;return Object(s.jsx)(a.c,{to:t,end:n,className:function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})},children:c})},N=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(v,{to:"/",text:"Home"}),Object(s.jsx)(v,{to:"people",text:"People",end:!0})]})})})},g=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(N,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsxs)(r.b,{path:"people",children:[Object(s.jsx)(r.b,{index:!0,element:Object(s.jsx)(p,{})}),Object(s.jsx)(r.b,{path:":slug",element:Object(s.jsx)(p,{})})]}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(f,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(g,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.ca0fe1b5.chunk.js.map