(this.webpackJsonpdrinks_app=this.webpackJsonpdrinks_app||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(85),i=n.n(c),l=(n(100),function(e){return r.a.createElement("img",{className:"home-image ".concat(e.side),src:e.src,alt:"home"})}),o=(n(101),function(e){return r.a.createElement("button",{onClick:function(){"number"===typeof e.clickScrollValue&&window.scrollTo({top:window.innerHeight*e.clickScrollValue+50,behavior:"smooth"})},className:"main-button"},e.children)}),s=n(9),u=function(){return r.a.createElement(s.b,{to:"/drinks",style:{textDecoration:"none"}},r.a.createElement(o,{clickScrollValue:!1},"Browse drinks!"))},m=n(1),f=n(87),d=n(35),b=(n(106),function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),c=n[0],i=n[1],l=Object(f.a)({threshold:.6}),o=Object(m.a)(l,3),s=o[0],u=o[1],b=o[2];Object(a.useEffect)((function(){u&&!c&&p()}));var p=function(){if(void 0!==(null===b||void 0===b?void 0:b.target)){var e=d.a.timeline({defaults:{stagger:.3}}),t=Array.from(b.target.getElementsByTagName("img")),n=Array.from(b.target.getElementsByTagName("h1")),a=Array.from(b.target.getElementsByTagName("button"));[t,n,Array.from(b.target.getElementsByTagName("p")),a,Array.from(b.target.getElementsByClassName("filters-introduction-container-image-container"))].flat().forEach((function(t){var n="DIV"===t.tagName;t&&e.to(t,{autoAlpha:1,x:0,y:0,duration:n?.2:.5})})),i(!0)}};return r.a.createElement("section",{className:"home-section",ref:s},e.children)}),p=n(56),E=n.n(p),h=n(88),g=n.n(h),v=n(89),k=n.n(v),j=n(90),O=n.n(j),y=n(91),w=n.n(y),x=n(92),N=n.n(x),C=function(e){return r.a.createElement("div",{className:"filters-introduction-container-image-container"},r.a.createElement("div",{className:"filters-introduction-container-image-container-hidden-content"},r.a.createElement("h2",null,e.filterName)),r.a.createElement("img",{className:"filters-introduction-container-image",src:e.src,alt:""}))},F=(n(107),function(){return r.a.createElement("div",{className:"filters-introduction-container"},r.a.createElement(C,{src:k.a,filterName:"Category"}),r.a.createElement(C,{src:w.a,filterName:"Ingredient"}),r.a.createElement(C,{src:O.a,filterName:"Alcohol content"}),r.a.createElement(C,{src:N.a,filterName:"Glass"}))}),S=(n(108),function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("fas fa-envelope"),l=Object(m.a)(i,2),o=l[0],u=l[1];return Object(a.useEffect)((function(){setTimeout((function(){return c(!0)}),4e3)})),r.a.createElement(s.b,{to:"/contact",style:{textDecoration:"none"}},r.a.createElement("button",{style:{opacity:n?1:0},className:"contact",onMouseOut:function(){u("fas fa-envelope")},onMouseOver:function(){u("fas fa-envelope-open")}},r.a.createElement("i",{className:o})))}),A=(n(109),function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1];return window.addEventListener("scroll",(function(){window.scrollY>window.innerHeight/2&&""===n?c("shown"):window.scrollY<window.innerHeight/2&&"shown"===n&&c("")})),r.a.createElement("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"scroll-to-top-button ".concat(n)},r.a.createElement("i",{className:"fas fa-arrow-up"}))}),D=(n(110),function(){return r.a.createElement("div",{className:"home"},r.a.createElement(b,null,r.a.createElement(l,{side:"left",src:E.a}),r.a.createElement(l,{side:"right",src:E.a}),r.a.createElement("h1",null,"Welcome on Drinkify!"),r.a.createElement("p",null,r.a.createElement("b",null,"Find Your ambrozia nectar!")),r.a.createElement(u,null),r.a.createElement(o,{clickScrollValue:1},"About site")),r.a.createElement(b,null,r.a.createElement(l,{side:"left",src:g.a}),r.a.createElement("h1",null,"Our mission"),r.a.createElement("p",{style:{maxWidth:"40ch"}},"This website has been created for people who have a desire to try new flavours and aromas. Our database contains over 500 drinks, their ingredients and recipes. You can search within multiple categories of drinks or just find your dreamed cocktail by name. The choice is Yours!",r.a.createElement("br",null)," ",r.a.createElement("b",null,"Drinkify is a perfect place for finding Your ambrozia nectar!")),r.a.createElement(o,{clickScrollValue:2},"See filters")),r.a.createElement(b,null,r.a.createElement("h1",null,"Filters"),r.a.createElement("p",null,"You can filter drinks by:"),r.a.createElement(F,null)),r.a.createElement(S,null),r.a.createElement(A,null))}),I=n(2),V=n.n(I),L=n(5),P=n(94);n(112);var T=function(){return r.a.createElement("div",{className:"logo-container"},r.a.createElement("i",{className:"fas fa-glass-cheers"}),r.a.createElement("span",null," Drinkify"))},Y=function(){var e=Object(L.a)(V.a.mark((function e(t,n,a){var r,c,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://the-cocktail-db.p.rapidapi.com/".concat(t,".php?").concat(n,"=").concat(a),{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"4d50f7c52amsh2ec8508c35a7811p1c477ajsn875d8e36fd67"}});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,i=c[Object.keys(c)[0]],e.abrupt("return",i);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,a){return e.apply(this,arguments)}}(),B=(n(113),function(e){return r.a.createElement("ul",{style:{background:e.background},className:"drink-ingredients-list"},e.ingredients.map((function(e,t){return e.length>0&&r.a.createElement("li",{key:t},e)})))}),H=n(34);n(239);var G=function(e){var t=Object(m.a)(e.details,3),n=t[0],a=t[1],c=t[2],i=Object(H.usePalette)(c).data;return r.a.createElement("div",{className:"drink",style:{background:i.lightVibrant,color:i.darkVibrant}},r.a.createElement("img",{className:"drink-image",src:c,alt:a}),r.a.createElement("h3",{className:"drink-name-container"},a),r.a.createElement("button",{style:{background:i.darkVibrant},className:"drink-ingredients"},r.a.createElement("span",null,"Ingredients"),r.a.createElement(B,{background:i.darkVibrant,ingredients:e.ingredients})),r.a.createElement(s.b,{to:"drinks/".concat(n)},r.a.createElement("button",{style:{background:i.vibrant},className:"drink-details"},r.a.createElement("span",null,"More details"))))},q=function(e){return Y("search","s",e).then((function(e){return e.map((function(e){return e}))})).catch((function(e){return[]}))},z=(n(240),function(){var e=Object(a.useRef)(null),t=Object(a.useContext)(se),n=function(){var n=Object(L.a)(V.a.mark((function n(){var a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=t.updateDrinks,n.t0=a,null===e.current){n.next=8;break}return n.next=5,q(e.current.value);case 5:n.t1=n.sent,n.next=9;break;case 8:n.t1=[];case 9:n.t2=n.t1,(0,n.t0)(n.t2);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r.a.createElement("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{ref:e,placeholder:"Find by name",className:"search-form-input",type:"text"}),r.a.createElement("button",{className:"search-form-submit",onClick:n},r.a.createElement("i",{className:"fa fa-search"})))}),M=function(e){return Y("list",e.charAt(0).toLowerCase(),"list").then((function(e){return e.map((function(e){return Object.values(e)[0]}))}))},W={category:"",ingredient:"",alcoholic:"",glass:""},J=function(e,t){W[e]=t},R=W,_=(n(241),function(e){var t=Object(a.useContext)(ce);return r.a.createElement("button",{onClick:function(){if(null!==t){var n=t.chosenFilter,a=t.changeChosenFilters,r=t.toggleFilterPickerVisibility;J(n.toLowerCase(),e.value),r(!1),a(Object.values(R))}},className:"filter-picker-button"},e.value)}),U=(n(242),function(e){return r.a.createElement("input",{placeholder:"Find ".concat(e.currentFilter),onChange:function(t){return n=t,void e.setSearch(n.target.value.toLowerCase());var n},className:"filter-picker-input"})}),X=(n(243),function(e){return r.a.createElement("button",{onClick:e.exitFunction,className:"exit-button"},"X")}),K={},Q=(n(244),function(e){var t=Object(a.useContext)(ce),n=Object(a.useState)([]),c=Object(m.a)(n,2),i=c[0],l=c[1],o=Object(a.useState)(""),s=Object(m.a)(o,2),u=s[0],f=s[1],d=function(){var e=Object(L.a)(V.a.mark((function e(){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==t&&t.chosenFilter.length>0&&(n=t.chosenFilter,Object.keys(K).includes(n)?l(K[n]):b(n));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(L.a)(V.a.mark((function e(t){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:n=e.sent,K[t]=n,l(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){e.visible&&d()})),r.a.createElement("div",{style:{display:e.visible?"flex":"none"},className:"filter-picker"},r.a.createElement(X,{exitFunction:function(){return e.setVisibility(!1)}}),r.a.createElement(U,{setSearch:f,currentFilter:null===t||void 0===t?void 0:t.chosenFilter}),i.map((function(e,t){return e.toLowerCase().includes(u)&&e.length>0&&r.a.createElement(_,{value:e,key:t})})))}),Z=(n(53),function(e){var t=Object(a.useContext)(ce);return r.a.createElement("button",{onClick:function(){if(null!==t){var n=t.changeChosenFilter,a=t.toggleFilterPickerVisibility;n(e.filterName),a(!0)}},className:"filter-list-button"},e.filterName,r.a.createElement("span",{style:{fontSize:".75rem",display:"block"}},e.chosenFilter))}),$=function(e){return Object.entries(e).filter((function(e){var t=Object(m.a)(e,2),n=t[0],a=t[1];return n.includes("strIngredient")&&null!==a&&a.length>0})).map((function(e){return e[1]}))},ee=function(){var e=Object(L.a)(V.a.mark((function e(){var t,n,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.entries(R).filter((function(e){var t=Object(m.a)(e,2);t[0];return t[1].length>0})),e.next=3,Y("filter",t[0][0].charAt(0),t[0][1]).then(function(){var e=Object(L.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(L.a)(V.a.mark((function e(t){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.strDrink,e.next=3,q(n);case 3:return e.abrupt("return",e.sent[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:return n=e.sent.flat().flat(),a=n.filter((function(e){var t=R.category,n=R.ingredient,a=R.alcoholic,r=R.glass,c=e.strCategory,i=e.strAlcoholic,l=e.strGlass,o=$(e);return t.toLowerCase().includes(c.toLowerCase())&&n.length>0?o.includes(n):!(l.toLowerCase().includes(r.toLowerCase())&&a.length>0)||a.toLowerCase().startsWith(i.toLowerCase())})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=(n(245),function(){var e=Object(a.useContext)(se),t=function(){var t=Object(L.a)(V.a.mark((function t(){var n;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Array.from(new Set(Object.values(R))).length>1)){t.next=6;break}return t.next=3,ee();case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,q("");case 8:t.t0=t.sent;case 9:n=t.t0,e.updateDrinks(n);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("button",{onClick:t,className:"filter-list-button confirm-filter-button"},r.a.createElement("span",null,"Filter  "),r.a.createElement("i",{className:"fas fa-sync-alt"}))}),ne=(n(246),function(){var e=Object(a.useContext)(ce);return r.a.createElement("button",{onClick:function(){Object.keys(W).forEach((function(e){return J(e,"")})),null!==e&&e.changeChosenFilters(["","","",""])},className:"filter-list-button clear-filters-button"},r.a.createElement("span",null,"Clear filters  "),r.a.createElement("i",{className:"fas fa-broom"}))}),ae=function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1).toLowerCase())},re=(n(247),function(){var e=Object(a.useContext)(ce),t=Object(a.useState)(["","","",""]),n=Object(m.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){null!==e&&i(e.chosenFilters)}),[e]),Object(a.useEffect)((function(){i(Object.values(R))}),[]),r.a.createElement("div",{className:"filter-list-container"},r.a.createElement(te,null),c.map((function(e,t){return r.a.createElement(Z,{key:t,filterName:ae(Object.keys(R)[t]),chosenFilter:e})})),r.a.createElement(ne,null))}),ce=(n(248),Object(a.createContext)(null)),ie=function(){var e=Object.values(R),t=Object(a.useState)(""),n=Object(m.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)(e),o=Object(m.a)(l,2),s=o[0],u=o[1],f=Object(a.useState)(!1),d=Object(m.a)(f,2),b=d[0],p=d[1],E={changeChosenFilter:i,changeChosenFilters:u,toggleFilterPickerVisibility:p,chosenFilter:c,chosenFilters:s};return r.a.createElement("div",{className:"filter"},r.a.createElement("i",{className:"filter-icon fas fa-sort-amount-down"}),r.a.createElement(ce.Provider,{value:E},r.a.createElement(Q,{visible:b,setVisibility:p}),r.a.createElement(re,null)))},le=(n(249),function(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement(T,null),r.a.createElement(z,null),r.a.createElement(ie,null))}),oe=(n(250),function(e){var t=function(e){return e.map((function(e,t){var n=e.idDrink,a=e.strDrink,c=e.strDrinkThumb,i=$(e),l=[n,a,c];return r.a.createElement(G,{details:l,ingredients:i,key:"".concat(t)})}))},n=Object(a.useState)(15),c=Object(m.a)(n,2),i=c[0],l=c[1],o=Object(a.useState)(!1),s=Object(m.a)(o,2),u=s[0],f=s[1],d=Object(a.useState)([]),b=Object(m.a)(d,2),p=b[0],E=b[1];return Object(a.useEffect)((function(){f(!0),u&&p.length!==e.drinks.length&&E(t(e.drinks.slice(0,i))),f(!1)}),[i,e.drinks]),Object(a.useEffect)((function(){E([]),l(15)}),[e.drinks]),r.a.createElement("div",{onScroll:function(){var e=document.querySelector(".drinks-container");if(null!==e){var t=e.scrollHeight-e.clientHeight;e.scrollTop>=t&&l(i+15),f(!0)}},className:"drinks-container"},0===p.length?t(e.drinks.slice(0,15)):p)}),se=Object(a.createContext)({updateDrinks:function(e){}}),ue=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),l=Object(m.a)(i,2),o=l[0],s=l[1],u=function(e){c(Object(P.a)(e))},f=function(){var e=Object(L.a)(V.a.mark((function e(){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),void 0===Object.values(R).find((function(e){return e.length>0}))){e.next=7;break}return e.next=4,ee();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,q("");case 9:e.t0=e.sent;case 10:t=e.t0,u(t);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){!o&&f()})),r.a.createElement(r.a.Fragment,null,r.a.createElement(se.Provider,{value:{updateDrinks:u}},r.a.createElement(le,null),r.a.createElement(oe,{drinks:n})))},me=(n(251),n(252),function(){return r.a.createElement("form",{className:"contact-section-form",onSubmit:function(e){return function(e){e.preventDefault()}(e)}},r.a.createElement("label",{htmlFor:"email"},"Your e-mail adress:",r.a.createElement("input",{type:"text",id:"email",placeholder:""})),r.a.createElement("label",{htmlFor:"message"},"Your message:",r.a.createElement("textarea",{id:"message"})),r.a.createElement("label",{htmlFor:"notes"},"Any notes on Drinkify usage?",r.a.createElement("textarea",{id:"notes"})),r.a.createElement("label",{htmlFor:"send-message"},r.a.createElement("input",{className:"contact-section-form-submit",type:"submit",id:"send-message",value:"Ask question"})))}),fe=(n(253),function(e){return r.a.createElement("button",{className:"social-media-button"},r.a.createElement("i",{className:e.icon}))}),de=n(93),be=n.n(de),pe=(n(254),function(e){return r.a.createElement(s.b,{className:"browse-drinks-button ".concat(e.side,"-redirect-button"),to:"/".concat(e.targetPage)},e.children)}),Ee=function(){var e=Object(a.useRef)(null);Object(a.useEffect)((function(){t()}),[e]);var t=function(){var t,n=null===(t=e.current)||void 0===t?void 0:t.childNodes,a=d.a.timeline({defaults:{duration:.5}});void 0!==n&&a.to(n,{autoAlpha:1,x:0,y:0,stagger:.35})};return r.a.createElement("div",{className:"contact-section",ref:e},r.a.createElement(l,{side:"left",src:be.a}),r.a.createElement("h1",null,"Got any questions?"),r.a.createElement("h3",null,"You are few clicks away from answer!"),r.a.createElement(me,null),r.a.createElement("div",null,r.a.createElement(fe,{icon:"fab fa-facebook-f"}),r.a.createElement(fe,{icon:"fab fa-instagram"}),r.a.createElement(fe,{icon:"fab fa-twitter"}),r.a.createElement(fe,{icon:"fab fa-youtube"})),r.a.createElement(pe,{side:"left",targetPage:""},"Home Page"),r.a.createElement(pe,{side:"right",targetPage:"drinks"},"Browse drinks"))},he=function(e){return Y("lookup","i",e).then((function(e){return Object(m.a)(e,1)[0]}))},ge=(n(255),function(e){var t=Object(m.a)(e.details,5),n=t[0],a=t[1],c=t[2],i=t[3],l=t[4],o=Object(H.usePalette)(i).data;return r.a.createElement("div",{className:"detailed-drink",style:{color:o.darkVibrant,background:o.lightVibrant,boxShadow:"0px 0px 90px 10px ".concat(o.vibrant)}},r.a.createElement("img",{src:i,alt:""}),r.a.createElement("div",{className:"detailed-drink-details"},r.a.createElement("h1",null,n),r.a.createElement("h3",null,"".concat(c," ").concat(a.toLowerCase())),r.a.createElement("h2",null,"Ingredients"),r.a.createElement("ul",null,e.ingredients.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("h2",null,"Instruction"),r.a.createElement("p",null,l)))}),ve=n(3),ke=(n(256),function(){var e=Object(ve.f)().id,t=Object(a.useState)(!1),n=Object(m.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)(r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-spinner"})," Loading drink ")),o=Object(m.a)(l,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){!c&&Object(L.a)(V.a.mark((function t(){var n,a,c,l,o,s,m;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,he(e);case 2:n=t.sent,a=$(n),c=n.strDrink,l=n.strAlcoholic,o=n.strCategory,s=n.strDrinkThumb,m=n.strInstructions,i(!0),u(r.a.createElement(ge,{details:[c,o,l,s,m],ingredients:a}));case 7:case"end":return t.stop()}}),t)})))()})),r.a.createElement("div",{className:"drink-details-container"},r.a.createElement(pe,{targetPage:"drinks",side:"left"},"Browse drinks"),s)}),je=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"white"}},"404 - not found"))},Oe=function(){return r.a.createElement(s.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.c,null,r.a.createElement(ve.a,{path:"/",exact:!0,component:D}),r.a.createElement(ve.a,{path:"/drinks",exact:!0,component:ue}),r.a.createElement(ve.a,{path:"/drinks/:id/",component:ke}),r.a.createElement(ve.a,{path:"/contact",component:Ee}),r.a.createElement(ve.a,{component:je}))))};n(257);i.a.render(r.a.createElement(Oe,null),document.getElementById("root"))},53:function(e,t,n){},56:function(e,t,n){e.exports=n.p+"static/media/IntroductionImg.f49e0959.jpg"},88:function(e,t,n){e.exports=n.p+"static/media/AboutImg.ec303732.jpg"},89:function(e,t,n){e.exports=n.p+"static/media/CategoryImg.f108d502.jpg"},90:function(e,t,n){e.exports=n.p+"static/media/AlcoholicImg.adc071b7.jpg"},91:function(e,t,n){e.exports=n.p+"static/media/IngredientImg.9aa7acea.jpg"},92:function(e,t,n){e.exports=n.p+"static/media/GlassImg.0b64fb43.jpg"},93:function(e,t,n){e.exports=n.p+"static/media/ContactImg.27eca137.jpg"},95:function(e,t,n){e.exports=n(258)}},[[95,1,2]]]);
//# sourceMappingURL=main.22f35985.chunk.js.map