(this.webpackJsonprecipeapp=this.webpackJsonprecipeapp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),o=(a(11),a(2)),s=a.n(o),l=a(5),u=a(1),m=(a(13),function(e){var t=e.title,a=e.calorie,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:"c-card"},c.a.createElement("h2",{className:"c-card__headtitle"},t),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,"Calorie : ",a),c.a.createElement("img",{className:"c-card__image",src:n,alt:""}))}),p=(a(14),a(15),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{class:"smooth spinner"}))}),f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),f=o[0],d=o[1],h=Object(n.useState)(!1),b=Object(u.a)(h,2),E=b[0],v=b[1],g=Object(n.useState)("meat"),j=Object(u.a)(g,2),w=j[0],O=j[1];Object(n.useEffect)((function(){N()}),[w]);var N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,fetch("https://api.edamam.com/search?q=".concat(w,"&app_id=").concat("dbbd7f6f","&app_key=").concat("278118ad594740551b401fff3b389f13"));case 3:return t=e.sent,v(!1),e.next=7,t.json();case 7:a=e.sent,r(a.hits);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O(f),d("")},className:"c-search-form"},c.a.createElement("input",{className:"c-search-bar",type:"text",value:f,onChange:function(e){d(e.target.value)},required:"true"}),c.a.createElement("button",{className:"c-search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"c-row"},E&&E?c.a.createElement(p,null):a.map((function(e,t){return c.a.createElement(m,{key:t,title:e.recipe.label,calorie:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.66cc7e7a.chunk.js.map