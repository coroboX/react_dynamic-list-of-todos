(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{30:function(t,e,n){t.exports=n(40)},36:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(10),c=n.n(a),s=n(24),i=n(6),u=n(17),l=n.n(u),d=n(20),m=n(21),f=n(22),p=n(26),h=n(25),b=n(41),y=n(55);n(36);function E(){return fetch("https://mate.academy/students-api/users").then((function(t){if(t.ok)return t.json();throw new Error("Response of Users API not successful ".concat(t.statusText))})).then((function(t){return t.data})).catch((function(t){throw console.error(t.message),new Error("Failed to Fetch Users, press button again")}))}function g(){return fetch("https://mate.academy/students-api/todos").then((function(t){if(t.ok)return t.json();throw new Error("Response of Todos API ot successful ".concat(t.statusText))})).then((function(t){return t.data})).catch((function(t){throw console.error(t.message),new Error("Failed to Fetch Todos, press button again")}))}var O={setLoading:!1,setLoaded:!1,gotError:!1,error:"",todos:[],sortedTodos:[],users:[]},j=function(t,e){return t.title.localeCompare(e.title)},v=function(t,e){return t.completed&&!e.completed?-1:1},S=function(t){return function(e,n){var r=t.find((function(t){return t.id===e.userId})),o=t.find((function(t){return t.id===n.userId}));if(r&&o){var a=r.name,c=o.name;return a.localeCompare(c)}return 0}},k=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(m.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state=O,t.loadData=Object(d.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([E(),g()]);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),t.onLoading=function(){t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{setLoading:!0})})),t.loadData().then((function(e){var n=Object(s.a)(e,2),r=n[0],o=n[1];t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{users:r,todos:o,sortedTodos:o,setLoading:!1,setLoaded:!0,error:"",gotError:!1})}))})).catch((function(e){t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{error:e.message,gotError:!0})}))}))},t.onSortByTitle=function(){var e=t.state.todos;t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{sortedTodos:e.sort(j)})}))},t.onSortByComplete=function(){var e=t.state.todos;t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{sortedTodos:e.sort(v)})}))},t.onSortByUser=function(){var e=t.state,n=e.todos,r=e.users;t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{sortedTodos:n.sort(S(r))})}))},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this.state,e=t.setLoading,n=t.setLoaded,r=t.sortedTodos,a=t.users,c=t.gotError,s=t.error;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Dynamic list of TODOs"),n?o.a.createElement("div",null,o.a.createElement("h2",null,"Users"),a.map((function(t){return o.a.createElement("p",{key:t.id},t.name)})),o.a.createElement("h2",null,"TODO:"),o.a.createElement("div",null,o.a.createElement("h3",null,"Sorting by:"),o.a.createElement(y.a,{color:"primary",variant:"outlined","aria-label":"outlined primary button group"},o.a.createElement(b.a,{onClick:this.onSortByTitle,disabled:e},"Sort by title"),o.a.createElement(b.a,{onClick:this.onSortByComplete,disabled:e},"Sort by completed"),o.a.createElement(b.a,{onClick:this.onSortByUser,disabled:e},"Sort by user"))),o.a.createElement("ol",null,r.map((function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("input",{type:"checkbox",defaultChecked:t.completed}),t.title)})))):o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{variant:"contained",color:"primary",type:"button",onClick:this.onLoading,disabled:e},e?"Loading...":"Load"),!0===c&&o.a.createElement("p",null,s," ",o.a.createElement(b.a,{variant:"outlined",color:"primary",type:"button",onClick:this.onLoading},"Retry Loading"))))}}]),n}(o.a.Component);c.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e01ebf95.chunk.js.map