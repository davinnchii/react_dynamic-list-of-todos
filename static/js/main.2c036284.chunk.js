(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s,a=c(8),n=c.n(a),l=c(3),i=c(2),o=c(1),r=(c(14),c(15),c(7)),d=c.n(r),j=c(0),u=function(e){var t=e.todo,c=e.onToggleModal,s=e.selectedTodo;return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:t.id}),Object(j.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:d()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t.userId,t.id,!0)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:d()("far",{"fa-eye":(null===s||void 0===s?void 0:s.id)!==t.id,"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===t.id})})})})})]},t.id)},b=function(e){var t=e.todos,c=e.selectedTodo,s=e.selectUser,a=e.selectTodo,n=function(e,t){s(e),a(t)};return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(u,{todo:e,onToggleModal:n,selectedTodo:c},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var h=function(e){var t=e.filterParam,c=e.onFilterChange,a=e.onSearch,n=e.onReset;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsx)("select",{"data-cy":"statusSelect",defaultValue:t.select,onChange:c,className:"is-capitalized",children:Object.values(s).map((function(e){return Object(j.jsx)("option",{value:e,className:"is-capitalized",children:e},e)}))})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:a}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.query&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:n,"aria-label":"clearSearchButton"})})]})]})},O=(c(17),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))}))}var x=function(e){var t=e.errorMessage;return Object(j.jsx)("article",{className:"message is-danger",children:Object(j.jsx)("div",{className:"message-body",children:t})})},f=function(e){var t=e.userId,c=e.todo,s=e.onHide,a=Object(o.useState)(!1),n=Object(i.a)(a,2),l=n[0],r=n[1],d=Object(o.useState)(null),u=Object(i.a)(d,2),b=u[0],h=u[1],f=Object(o.useState)(""),v=Object(i.a)(f,2),N=v[0],p=v[1];return Object(o.useEffect)((function(){r(!0),function(e){return m("/users/".concat(e))}(t).then(h).catch(p).finally((function(){return r(!1)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),l?Object(j.jsx)(O,{}):Object(j.jsx)(j.Fragment,{children:N?Object(j.jsx)(x,{errorMessage:N}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===c||void 0===c?void 0:c.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:s,"aria-label":"modal-close"})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===c||void 0===c?void 0:c.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==c&&void 0!==c&&c.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===b||void 0===b?void 0:b.email),children:null===b||void 0===b?void 0:b.name})]})]})]})})]})},v=c(9),N=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(""),r=Object(i.a)(n,2),d=r[0],u=r[1],N=Object(o.useState)({select:s.All,query:""}),p=Object(i.a)(N,2),y=p[0],g=p[1],S=Object(o.useState)(0),k=Object(i.a)(S,2),C=k[0],T=k[1],w=Object(o.useState)(null),q=Object(i.a)(w,2),I=q[0],M=q[1],E=Object(o.useState)(!1),L=Object(i.a)(E,2),_=L[0],A=L[1];Object(o.useEffect)((function(){A(!0),m("/todos").then(a).catch((function(){return u("Invalid request URL")})).finally((function(){return A(!1)}))}),[]);var B=Object(o.useMemo)((function(){return function(e,t){var c=e.select,a=e.query,n=Object(v.a)(t),l=a.toLowerCase();switch(a&&(n=n.filter((function(e){return e.title.toLowerCase().includes(l)}))),c){case s.Active:n=n.filter((function(e){return!e.completed}));break;case s.Completed:n=n.filter((function(e){return e.completed}))}return n}(y,c)}),[y,c]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{filterParam:y,onFilterChange:function(e){g((function(t){return Object(l.a)(Object(l.a)({},t),{},{select:e.target.value})}))},onSearch:function(e){g((function(t){return Object(l.a)(Object(l.a)({},t),{},{query:e.target.value})}))},onReset:function(){g((function(e){return Object(l.a)(Object(l.a)({},e),{},{query:""})}))}})}),Object(j.jsx)("div",{className:"block",children:_?Object(j.jsx)(O,{}):Object(j.jsx)(b,{todos:B,selectedTodo:I,selectTodo:function(e){M((null===c||void 0===c?void 0:c.find((function(t){return t.id===e})))||null)},selectUser:function(e){T(e)}})})]})})}),I&&Object(j.jsx)(f,{todo:I,userId:C,onHide:function(){M(null),T(0)}}),d&&Object(j.jsx)(x,{errorMessage:d})]})};n.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2c036284.chunk.js.map