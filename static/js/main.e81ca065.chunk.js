(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(3),s=n.n(a),i=n(1),c=n(4),l=n(5),u=n(7),b=n(6),m=n(8),p=function(t){var e=t.goods;return r.a.createElement("ul",null,e.map(function(t){return r.a.createElement("li",null,t)}))},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(n=Object(u.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(a)))).state={isStarted:!1,visibleGoods:[].concat(d)},n.start=function(){n.setState({isStarted:!0})},n.reset=function(){n.setState({visibleGoods:[].concat(d)})},n.reverse=function(){n.setState(function(t){return{visibleGoods:Object(i.a)(t.visibleGoods).reverse()}})},n.sortByName=function(){n.setState(function(t){return{visibleGoods:Object(i.a)(t.visibleGoods).sort(function(t,e){return t.localeCompare(e)})}})},n.sortByLength=function(){n.setState(function(t){return{visibleGoods:Object(i.a)(t.visibleGoods).sort(function(t,e){return t.length-e.length})}})},n.selectOptions=function(){for(var t=[],e=1;e<11;e++)t.push(r.a.createElement("option",{value:e},e));return t},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.isStarted,n=t.visibleGoods;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"List of Goods"),e?r.a.createElement("section",null,r.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),r.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sortByName},"Sort by name"),r.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),r.a.createElement("select",null,this.selectOptions()),r.a.createElement(p,{goods:n})):r.a.createElement("button",{type:"button",onClick:this.start},"Start"))}}]),e}(r.a.Component);s.a.render(r.a.createElement(v,{test:123}),document.getElementById("root"))},9:function(t,e,n){t.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.e81ca065.chunk.js.map