(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},63:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(20),r=n.n(i),o=(n(30),n(31),n(4)),s=n.n(o),l=n(8),u=n(5),d=n(21),h=n(24),b=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(n(63),n(25)),v=n.n(f),j=n(0),p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),r=Object(u.a)(i,2),o=r[0],h=r[1],f=Object(c.useState)(""),p=Object(u.a)(f,2),m=p[0],g=p[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"row__posters",children:o.map((function(e){return Object(j.jsx)("img",{onClick:function(){return function(e){m?g(""):v()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/w500").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(j.jsx)(d.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},m="85bb1d83b4eb2e6e58a16a57b2ace09d",g={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};n(73);var O=function(){var e,t,n=Object(c.useState)([]),a=Object(u.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(g.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsx)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/w500'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:Object(j.jsxs)("div",{className:"banner__contents",children:[Object(j.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(j.jsxs)("div",{className:"banner__buttons",children:[Object(j.jsx)("button",{className:"banner__button",children:"Play"}),Object(j.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(j.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)}),Object(j.jsx)("div",{className:"banner--fadeBottom"})]})})};n(74);var _=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>150?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(j.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(j.jsx)("img",{className:"nav__logo",src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",alt:"Netflix Logo"}),Object(j.jsx)("img",{className:"nav__avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Netflix Avatar"})]})};var x=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(_,{}),Object(j.jsx)(O,{}),Object(j.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:g.fetchNetflixOriginals,isLargeRow:!0}),Object(j.jsx)(p,{title:"Trending Now",fetchUrl:g.fetchTrending}),Object(j.jsx)(p,{title:"Top Rated",fetchUrl:g.fetchTopRated}),Object(j.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActionMovies}),Object(j.jsx)(p,{title:"Comedy Movies",fetchUrl:g.fetchComedyMovies}),Object(j.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies}),Object(j.jsx)(p,{title:"Romantic Movies",fetchUrl:g.fetchRomanceMovies}),Object(j.jsx)(p,{title:"Documentaries",fetchUrl:g.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),w()}},[[75,1,2]]]);
//# sourceMappingURL=main.5eef88a3.chunk.js.map