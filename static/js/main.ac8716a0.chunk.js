(this["webpackJsonptodox-app"]=this["webpackJsonptodox-app"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);a(9);var s=a(1),n=a(7),o=a.n(n),c=(a(14),a(8)),r=a(2),d=a(3),i=a(5),l=a(4),u=a(0),b=function(t){var e=t.todos,a=t.onDelete,s=e.length?e.map((function(t){return Object(u.jsx)("div",{className:"list-group-item list-group-item-action d-flex gap-3 py-3",children:Object(u.jsxs)("div",{className:"d-flex gap-2 w-100 justify-content-between",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h6",{className:"text-dark mb-0",children:t.taskName})}),Object(u.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return a(t.id)},children:"Delete"})]})},t.id)})):Object(u.jsx)("h4",{className:"bg-dark rounded shadow text-white text-center p-3",children:"you got no task dude! why not add some... "});return Object(u.jsx)("div",{className:"task-list-group list-group",children:s})},j=function(t){Object(i.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={taskName:""},t.handleChange=function(e){t.setState({taskName:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state),t.setState({taskName:""})},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("form",{className:"row g-3 bg-light shadow rounded p-3 mt-5 mb-5",onSubmit:this.handleSubmit,children:[Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("label",{className:"col-form-label",children:"Add your task here"}),Object(u.jsx)("input",{onChange:this.handleChange,value:this.state.taskName,placeholder:"Task name",type:"text",className:"border form-control"})]}),Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-dark mb-3",children:"Add Now"})})]})}}]),a}(s.Component),h=j,m=(a(16),function(t){Object(i.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={todos:[{id:1,taskName:"Pray fajr prayer at mosque (5:20AM)"},{id:2,taskName:"Recite Quran at least one page (5:45AM)"},{id:3,taskName:"Take breakfast"}]},t.deleteTodo=function(e){var a=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:a})},t.addTodo=function(e){e.id=Math.random();var a=[].concat(Object(c.a)(t.state.todos),[e]);t.setState({todos:a})},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-6 offset-3",children:[Object(u.jsxs)("h1",{className:"app-title mt-5 mb-5 text-white",children:[" Todox - ",Object(u.jsx)("span",{className:"text-primary",children:" speed up your task "})]}),Object(u.jsx)(b,{todos:this.state.todos,onDelete:this.deleteTodo}),Object(u.jsx)(h,{addTodo:this.addTodo})]})})})}}]),a}(s.Component)),p=m,x=document.getElementById("root");o.a.render(Object(u.jsx)(p,{}),x)}},[[17,1,2]]]);
//# sourceMappingURL=main.ac8716a0.chunk.js.map