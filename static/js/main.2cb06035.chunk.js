(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){e.exports=n(75)},61:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(13),d=n.n(c),i=(n(61),n(29));!function(e){e.ADD="ADD",e.DELETE="DELETE",e.UPDATE="UPDATE",e.UNDO="UNDO"}(a||(a={}));var l=a,u=n(99),s=n(26),m=n(93),p=n(101),f=n(92),E=n(102),x=n(100),_=n(94),g=n(95),O=Object(f.a)(function(e){return Object(E.a)({heading:{padding:e.spacing(2),color:e.palette.text.primary,textAlign:"center"},container:{textAlign:"center"},todoItem__paper:{padding:e.spacing(2),color:e.palette.text.primary,display:"flex",alignItems:"center",marginBottom:"10px"},todoItem__text:{width:"calc(100% - 140px)"},todoItem__control:{padding:"10px"}})}),y=function(e){var t=e.done,n=e.text,a=e.deleteRecord,c=e.updateRecord,d=e.index,i=O(),l=Object(r.useState)(!1),u=Object(s.a)(l,2),f=u[0],E=u[1],y=Object(r.useState)(n),v=Object(s.a)(y,2),D=v[0],b=v[1],h=function(e){13===e.charCode&&w()},N=function(){return w()},w=function(){c({text:D,done:t,index:d}),E(!1)},I=function(e){return b(e.target.value)};return o.a.createElement(m.a,{className:i.todoItem__paper},o.a.createElement(x.a,{checked:t,onClick:function(){return c({text:n,done:!t,index:d})}}),o.a.createElement("div",{className:i.todoItem__text,id:"text".concat(d)},f?o.a.createElement(p.a,{className:i.todoItem__text,autoFocus:!0,value:D,onKeyPress:h,onChange:I,onBlur:N}):n),o.a.createElement("div",null,o.a.createElement(_.a,{className:i.todoItem__control,onClick:function(){return E(!f)}}),o.a.createElement(g.a,{className:i.todoItem__control,onClick:function(){return a({text:D,done:t,index:d})}})))},v=n(96),D=n(97),b=Object(f.a)(function(e){return Object(E.a)({addItem__container:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"10px",padding:"0 20px"},addItem__text:{width:"85%"},addItem__button:{margin:"10px"}})}),h=function(e){var t=e.addRecord,n=b(),a=Object(r.useState)(""),c=Object(s.a)(a,2),d=c[0],i=c[1];return o.a.createElement("div",{className:n.addItem__container},o.a.createElement(p.a,{className:n.addItem__text,value:d,onChange:function(e){return i(e.target.value)}}),o.a.createElement(v.a,{color:"primary","aria-label":"Add",className:n.addItem__button,onClick:function(){t({text:d,done:!1}),i("")}},o.a.createElement(D.a,null)))},N=n(98),w=function(e){var t=e.undoRecordDelete;return o.a.createElement(N.a,{onClick:function(){return t({text:""})}},"Undo")};var I=Object(i.b)(function(e){return{records:e.records}},function(e){return{addRecord:function(t){return e(function(e){return{type:l.ADD,payload:e}}(t))},deleteRecord:function(t){return e(function(e){return{type:l.DELETE,payload:e}}(t))},updateRecord:function(t){return e(function(e){return{type:l.UPDATE,payload:e}}(t))},undoRecordDelete:function(t){return e(function(e){return{type:l.UNDO,payload:e}}(t))}}})(function(e){var t=e.records,n=e.addRecord,a=e.deleteRecord,r=e.updateRecord,c=e.undoRecordDelete,d=O();return o.a.createElement("div",{className:"app"},o.a.createElement(u.a,{container:!0,spacing:3,justify:"center"},o.a.createElement(u.a,{item:!0,xs:10,md:8},o.a.createElement("h1",{className:d.heading},"My todo list for Ornament"),o.a.createElement(h,{addRecord:n}),o.a.createElement("div",{className:"todo-item-container"},t.map(function(e,t){return o.a.createElement(y,Object.assign({key:e.text},e,{deleteRecord:a,updateRecord:r,index:t}))})),o.a.createElement(w,{undoRecordDelete:c}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(22),j=n(47),S=[{text:"skype call with PO",done:!0},{text:"test task (todo)",done:!0},{text:"call with teamlead",done:!1},{text:"get offer",done:!1},{text:"relocation to Montenegro",done:!1}],k=[],T=function(e){return k.push(JSON.stringify(e))};var A=Object(R.b)({records:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"",payload:{}};switch(t.type){case l.ADD:return T(e),[{text:t.payload.text,done:!1}].concat(Object(j.a)(e));case l.DELETE:return T(e),e.filter(function(e,n){return n!==t.payload.index});case l.UPDATE:return T(e),e.map(function(e,n){return n===t.payload.index?t.payload:e});case l.UNDO:var n=JSON.parse(k[k.length-1]);if(n.length>e.length)return n;default:return e}}}),U=function(){var e=localStorage.getItem("state");if(null!==e)return JSON.parse(e)}(),C=Object(R.c)(A,U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());C.subscribe(function(){!function(e){var t=JSON.stringify(e);localStorage.setItem("state",t)}({records:C.getState().records})}),d.a.render(o.a.createElement(i.a,{store:C},o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,1,2]]]);
//# sourceMappingURL=main.2cb06035.chunk.js.map