(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),i=(n(9),n(3)),o=n(0),a=function(e){var t=e.name,n=e.email,c=e.id;return Object(o.jsxs)("div",{className:" tc bg-light-green dib pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{alt:"Robots",src:"https://robohash.org/".concat(c,"?200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:t}),Object(o.jsx)("p",{children:n})]})]})},b=function(e){var t=e.Robots;return Object(o.jsx)("div",{children:t.map((function(e,n){return Object(o.jsx)(a,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},h=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"},children:e.children})},j=function(e){var t=e.SearchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lighest-blue",type:"search",placeholder:"search Robots",onChange:t})})},l=(n(11),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),l=a[0],u=a[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return n.length?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f1",children:" Robofriends"}),Object(o.jsx)(j,{SearchChange:function(e){u(e.target.value)}}),Object(o.jsx)(h,{children:Object(o.jsx)(b,{Robots:d})})]}):Object(o.jsx)("h1",{children:" Loading"})}),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(12);s.a.render(Object(o.jsx)(l,{}),document.getElementById("root")),u()},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.53e6af41.chunk.js.map