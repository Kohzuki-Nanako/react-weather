(this["webpackJsonpreact-tutorial-"]=this["webpackJsonpreact-tutorial-"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/kappa_man2.8e5e3010.png"},18:function(e,t,a){e.exports=a.p+"static/media/\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2020-06-25 0.36.56.aaae6431.png"},19:function(e,t,a){e.exports=a.p+"static/media/sky_line04_rainbow.f854319b.png"},20:function(e,t,a){e.exports=a(47)},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t),a.d(t,"FETCH_WEATHER",(function(){return _})),a.d(t,"fetchWeather",(function(){return k}));var n=a(0),c=a.n(n),r=a(5),l=a(6),s=a.n(l),i=a(15),m=a(2),o=a(16),u=a.n(o),p=a(3),E=a.n(p),d=(a(44),function(e){var t=e.city,a=e.country,n=e.temp,r=e.temp_max,l=e.temp_min,s=e.description;e.loadWeather;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"display-weather"},c.a.createElement("div",null,n?c.a.createElement("span",null,c.a.createElement("h2",null,Math.floor(n),"\xb0")):null,t&&a?c.a.createElement("span",null,c.a.createElement("h2",null,t,", ",a)):null,l&&r?c.a.createElement("span",null,c.a.createElement("h3",null,Math.floor(l),"\xb0 - ",Math.floor(r),"\xb0")):null,c.a.createElement("span",null,c.a.createElement("h3",null,s)))))}),f=(a(45),function(e){var t=e.loadWeather;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"box",onSubmit:t},c.a.createElement("input",{type:"text",name:"city",placeholder:"Enter city"}),c.a.createElement("input",{type:"text",name:"country",placeholder:"Enter country"}),c.a.createElement("span",{className:"button"},c.a.createElement("button",{type:"submit",value:"search"},"Get Weather"))))}),h=a(17),b=a.n(h),v=a(18),y=a.n(v),g=a(19),N=a.n(g),x={image:{border:"0px solid #ccc",background:"#fefefe"}},j=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(m.a)(l,2),u=o[0],p=o[1],h=Object(n.useState)(""),b=Object(m.a)(h,2),v=b[0],y=b[1],g=Object(n.useState)(""),N=Object(m.a)(g,2),x=N[0],j=N[1],w=Object(n.useState)(""),O=Object(m.a)(w,2),_=O[0],k=O[1],S=Object(n.useState)(""),W=Object(m.a)(S,2),T=W[0],F=W[1],H=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.elements.city.value,n=t.target.elements.country.value,!a||!n){e.next=17;break}return e.next=6,E.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(n,"&appid=").concat("4137c4ce4404f78ffb0df598b3efd8ea"));case 6:return c=e.sent,e.next=9,c;case 9:l=e.sent,r(l.data.name),p(l.data.sys.country),F(l.data.main.temp),k(l.data.main.temp_max),j(l.data.main.temp_min),y(l.data.weather[0].description),console.log(l);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement(d,{city:a,country:u,temp:T,temp_max:_,temp_min:x,description:v}),c.a.createElement(f,{loadWeather:H}))},w=function(){return c.a.createElement("div",null,c.a.createElement("section",{className:"hero is-medium is-primary is-bold"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"\u4e16\u754c\u306e\u5929\u6c17"),c.a.createElement("h2",{className:"subtitle"},"\u3044\u308d\u3093\u306a\u5730\u57df\u306e\u5929\u6c17\u3092\u77e5\u308d\u3046\uff01")))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"tile is-ancestor"},c.a.createElement("div",{className:"tile is-3 is-vertical is-parent"},c.a.createElement("div",{className:"tile is-child box"},c.a.createElement("p",{className:"title"},"TENKI\u541b"),c.a.createElement(u.a,{src:b.a,width:300,height:300,style:x.image}),c.a.createElement("p",null,"\u65b0\u4eba\u304f\u3093\u3002"),c.a.createElement("p",null,"\u96e8\u306e\u65e5\u304c\u597d\u304d\u3002")),c.a.createElement("div",{className:"tile is-child box"},c.a.createElement("p",{className:"title"},"\u30aa\u30b9\u30b9\u30e1\u306e\u753b\u50cf\u30b5\u30a4\u30c8"),c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-image"},c.a.createElement("figure",{class:"image is-5by3"},c.a.createElement("img",{src:y.a,alt:"\u3044\u3089\u3059\u3068\u3084"})))),c.a.createElement("a",{href:"https://www.irasutoya.com"},c.a.createElement("p",null,c.a.createElement("strong",null,"\u3044\u3089\u3059\u3068\u3084"))))),c.a.createElement("div",{className:"tile is-parent"},c.a.createElement("div",{className:"tile is-child box"},c.a.createElement("figure",{class:"image is-512x512"},c.a.createElement("img",{src:N.a,alt:"\u8679"})),c.a.createElement("p",{className:"title"},"\u4e16\u754c\u306e\u5929\u6c17\u306f\uff1f"),c.a.createElement(j,null)))),c.a.createElement("footer",{calssName:"footer"},c.a.createElement("div",{className:"content has-text-centered"},c.a.createElement("p",null,"2020 \xa9 Kohzuki_Nanako")))))},O=(a(46),"https://api.openweathermap.org/data/2.5/forecast?appid=".concat("4137c4ce4404f78ffb0df598b3efd8ea"));Object(r.render)(c.a.createElement(w,null),document.querySelector("#content"));var _="FETCH_WEATHER";function k(e){var t="".concat(O,"&q=").concat(e,",us"),a=E.a.get(t);return{type:_,payload:a}}}},[[20,1,2]]]);
//# sourceMappingURL=main.c7289b41.chunk.js.map