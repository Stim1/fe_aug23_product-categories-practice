(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(4),n=c.n(s),i=(c(9),c(10),c(3)),r=(c(11),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),l=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],d=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}],o=c(0),j=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),j=Object(i.a)(n,2),h=j[0],b=j[1],x=function(e){s(e)},u=d.filter((function(e){var t=e.categoryId;return(null===c||c===l.find((function(e){return e.id===t})).ownerId)&&e.name.toLowerCase().includes(h.toLowerCase())})).map((function(e){var t=e.id,c=e.name,a=e.categoryId,s=l.find((function(e){return e.id===a})),n=r.find((function(e){return e.id===s.ownerId})),i="m"===n.sex?"has-text-link":"has-text-danger";return Object(o.jsxs)("tr",{"data-cy":"Product",children:[Object(o.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:t}),Object(o.jsx)("td",{"data-cy":"ProductName",children:c}),Object(o.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(s.icon," - ").concat(s.title)}),Object(o.jsx)("td",{"data-cy":"ProductUser",className:i,children:n.name})]},t)}));return Object(o.jsx)("div",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"Product Categories"}),Object(o.jsxs)("div",{className:"box table-container",children:[Object(o.jsx)("nav",{className:"panel",children:Object(o.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(o.jsx)("a",{href:"#/",onClick:function(){return x(null)},"data-cy":"FilterAllUsers",className:'data-cy="FilterAllUsers"\n                  '.concat(null===c?"is-active":""),children:"All"}),r.map((function(e){return Object(o.jsx)("a",{href:"#/",onClick:function(){return x(e.id)},"data-cy":"FilterUser",className:'data-cy="FilterUser"\n                    '.concat(c===e.id?"is-active":""),children:e.name},e.id)}))]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:h,onChange:function(e){b(e.target.value)}}),h&&Object(o.jsx)("span",{className:"icon is-right",children:Object(o.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){b("")}})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s(null),b("")},children:"Reset All Filters"})}),u.length>0?Object(o.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(o.jsx)("tbody",{children:u})]}):Object(o.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})]})]})})};n.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d8af0f2b.chunk.js.map