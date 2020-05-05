(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{80:function(e,t,n){e.exports=n(93)},85:function(e,t,n){},86:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),l=n.n(i),c=(n(85),n(86),n(41)),r=n(42),u=n(52),d=n(51),m=n(122),p=n(5),s=function(e){var t=e.title;return o.a.createElement("div",null,o.a.createElement(m.a,{style:{padding:16},variant:"h1"},t))};s.prototype={title:n.n(p).a.string.isRequired};var f=s,E=n(136),h=n(135),v=n(129),O=n(128),b=n(134),T=n(132),y=n(133),g=n(16),j=function(e){return function(t){t({type:"SHOW_NOTIFICATION",payload:e}),setTimeout((function(){t(w())}),2e3)}},w=function(e){return{type:"HIDE_NOTIFICATION"}},D=n(73),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(D.a,{initialValues:{title:"",description:"",completed:!1,priority:"high"},onSubmit:function(t,n){var a=n.resetForm;e.props.addTodo(t),a({})}},(function(e){var t=e.values,n=e.handleChange,a=e.handleSubmit,i=e.setFieldValue;e.isSubmitting;return o.a.createElement("form",{onSubmit:a},o.a.createElement("div",null,o.a.createElement(E.a,{type:"text",name:"title",placeholder:"Add Todo Title",label:"Title",value:t.title,onChange:n})),o.a.createElement("div",null,o.a.createElement(E.a,{type:"text",placeholder:"Add Todo Description",label:"Description",name:"description",value:t.description,onChange:n})),o.a.createElement("div",null,o.a.createElement(h.a,{type:"checkbox",name:"completed",id:"completed-todo-field",value:t.completed,checked:t.completed,onChange:function(){i("completed",!0)}}),o.a.createElement(v.a,{htmlFor:"completed-todo-field"},"Completed")),o.a.createElement("div",null,o.a.createElement(h.a,{type:"checkbox",name:"completed",id:"completed-todo-field",value:t.completed,checked:!t.completed,onChange:function(){i("completed",!1)}}),o.a.createElement(v.a,{htmlFor:"uncompleted-todo-field"},"Not Completed")),o.a.createElement("div",null,o.a.createElement(O.a,null,o.a.createElement(b.a,{name:"priority",value:t.priority,onChange:n},o.a.createElement(T.a,{value:"high"},"High"),o.a.createElement(T.a,{value:"medium"},"Medium"),o.a.createElement(T.a,{value:"low"},"Low")))),o.a.createElement(y.a,{disabled:!t.title,type:"submit"},"Submit"))})))}}]),n}(a.Component),I={addTodo:function(e){return function(t){t({type:"ADD_TODO",payload:e}),t(j("".concat(e.title," added")))}}},N=Object(g.b)(null,I)(C),x=function(){return o.a.createElement("div",null,o.a.createElement(f,{title:"React Redux Todo"}),o.a.createElement(N,null))},k=n(94),_=n(131),A=n(71),F=n.n(A),S={toggleTodo:function(e){return function(t){t({type:"TOGGLE_TODO",payload:e}),t(j("toggled"))}},deleteTodo:function(e){return function(t){t({type:"DELETE_TODO",payload:e}),t(j("Item removed"))}}},R=Object(g.b)(null,S)((function(e){var t=e.title,n=e.description,a=e.priority,i=e.id,l=e.completed,c=e.toggleTodo,r=e.deleteTodo;return o.a.createElement(k.a,{style:{display:"center",flexDirection:"row",alignItems:"center",justifyContent:"center"}},o.a.createElement(h.a,{onClick:function(){return c(i)}}),o.a.createElement(m.a,{style:{textDecoration:l?"line-through":"initial"}},o.a.createElement("div",null,t),o.a.createElement("div",null,n),o.a.createElement("div",null,o.a.createElement("strong",null,"Priority:"),a)),o.a.createElement(_.a,{onClick:function(){return r(i)}},o.a.createElement(F.a,null)))})),H=n(130),L=Object(g.b)((function(e){return{todos:e.todoReducer}}))((function(e){return o.a.createElement(H.a,null,e.todos.map((function(e){return o.a.createElement(R,e)})))})),G=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(x,null),o.a.createElement(L,null),this.props.showNotification&&o.a.createElement("h3",null,this.props.notificationText))}}]),n}(a.Component),W=Object(g.b)((function(e){var t=e.notificationsReducer;return{showNotification:t.showNotification,notificationText:t.notificationText}}))(G);var M=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(39),J=n(74),V=n(35),q=n(72),P=Object(V.c)({todoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(J.a)(e),[Object(B.a)({id:Math.random()},t.payload)]);case"DELETE_TODO":return e.filter((function(e){return e.id!==t.payload}));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.payload?Object(B.a)({},e,{completed:!e.completed}):e}));default:return e}},notificationsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showNotification:!1,notificationText:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NOTIFICATION":return Object(B.a)({},e,{showNotification:!0,notificationText:t.payload});case"HIDE_NOTIFICATION":return Object(B.a)({},e,{showNotification:!1,notificationText:""});default:return e}}}),$=Object(V.d)(P,Object(V.a)(q.a));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g.a,{store:$},o.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[80,1,2]]]);
//# sourceMappingURL=main.0b5ad138.chunk.js.map