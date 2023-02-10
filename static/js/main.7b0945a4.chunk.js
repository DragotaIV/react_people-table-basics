(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(5),a=(n(18),n(19),n(20),n(2)),r=n(4),j=n(1),i=n.n(j),o="https://mate-academy.github.io/react_people-table/api/people.json";function l(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(o)})).then((function(e){return e.json()}));var e}n(21);var b=n(0),d=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},h=n(6),x=n.n(h),O=function(e){var t=e.person;return Object(b.jsx)(s.b,{to:"../".concat(t.slug),className:x()({"has-text-danger":"f"===t.sex}),children:t.name})},u=function(e){var t=e.person,n=e.personMother,c=e.personFather,s=e.isSelected,a=t.name,r=t.sex,j=t.born,i=t.died;return Object(b.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":s(t)}),children:[Object(b.jsx)("td",{children:Object(b.jsx)(O,{person:t})}),Object(b.jsx)("td",{children:r}),Object(b.jsx)("td",{children:j}),Object(b.jsx)("td",{children:i}),Object(b.jsx)("td",{children:n?Object(b.jsx)(O,{person:n}):"-"}),Object(b.jsx)("td",{children:c?Object(b.jsx)(O,{person:c}):"-"})]},a)},p=function(e){var t=e.people,n=e.selectedPerson,c=function(e){return e.slug===n},s=function(e){return t.find((function(t){return t.name===e}))};return Object(b.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Sex"}),Object(b.jsx)("th",{children:"Born"}),Object(b.jsx)("th",{children:"Died"}),Object(b.jsx)("th",{children:"Mother"}),Object(b.jsx)("th",{children:"Father"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(u,{person:e,personMother:s(e.motherName),personFather:s(e.fatherName),isSelected:c},e.name)}))})]})},m=function(){var e=i.a.useState([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=i.a.useState(!1),j=Object(r.a)(s,2),o=j[0],h=j[1],x=i.a.useState(!1),O=Object(r.a)(x,2),u=O[0],m=O[1],f=Object(a.h)().slug,v=void 0===f?"":f;return i.a.useEffect((function(){h(!0),m(!1),l().then(c).catch((function(){return m(!0)})).finally((function(){return h(!1)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"People Page"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("div",{className:"box table-container",children:[o&&Object(b.jsx)(d,{}),u&&Object(b.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!o&&!n.length&&!u&&Object(b.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!o&&n.length&&Object(b.jsx)(p,{people:n,selectedPerson:v})]})})]})},f=function(e){var t=e.to,n=e.text;return Object(b.jsx)(s.c,{className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:n})},v=function(){return Object(b.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(f,{to:"/",text:"Home"}),Object(b.jsx)(f,{to:"people",text:"People"})]})})})},g=function(){return Object(b.jsxs)("div",{"data-cy":"app",children:[Object(b.jsx)(v,{}),Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(a.d,{children:[Object(b.jsx)(a.b,{path:"/",element:Object(b.jsx)("h1",{className:"title",children:"Home Page"})}),Object(b.jsx)(a.b,{path:"home",element:Object(b.jsx)(a.a,{to:"/",replace:!0})}),Object(b.jsx)(a.b,{path:"*",element:Object(b.jsx)("h1",{className:"title",children:"Page not found"})}),Object(b.jsxs)(a.b,{path:"people",children:[Object(b.jsx)(a.b,{index:!0,element:Object(b.jsx)(m,{})}),Object(b.jsx)(a.b,{path:":slug",element:Object(b.jsx)(m,{})})]})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(b.jsx)(s.a,{children:Object(b.jsx)(g,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7b0945a4.chunk.js.map