(this["webpackJsonppotluck.io"]=this["webpackJsonppotluck.io"]||[]).push([[0],{123:function(e,t,s){},126:function(e,t,s){},211:function(e,t,s){},212:function(e,t,s){},217:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),l=s(32),b=s.n(l),n=(s(123),s(114)),i=s(6),r="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("5c1eda8a6df44682a349d0df7d3fcc09","&redirect_uri=").concat("https://nrenteria98.github.io/potluck/search","&scope=").concat(["user-read-currently-playing","user-read-playback-state","playlist-read-private","playlist-read-collaborative","playlist-modify-public","streaming"].join("%20"),"&response_type=token&show_dialogue=true");var o=function(){return Object(c.useEffect)((function(){localStorage.clear()})),Object(i.jsx)("div",{children:Object(i.jsx)(n.a,{shape:"round",style:{color:"silver",zIndex:2,borderColor:"#D4AF37",height:"5vw",width:"30vw",minHeight:"50px",minWidth:"250px",fontSize:"x-large",alignContent:"center",justifyContent:"center"},onClick:function(){window.location=r},children:"Welcome to Potluck!"})})};s(126);var j=function(){return Object(i.jsx)("div",{className:"Home",children:Object(i.jsx)(o,{})})},u=s(24),d=s(38),v=s(220),O=s(222);var x=function(e){var t=v.a.useForm(),s=Object(u.a)(t,1)[0],a=Object(c.useState)(!0),l=Object(u.a)(a,2),b=l[0],r=l[1],o=JSON.parse(localStorage.getItem("data"));return Object(i.jsxs)(v.a,{layout:"inline",action:"/search",method:"get",form:s,onFinish:function(t){var s=function(e){var t=[];for(var s in o){var c,a=o[s],l=Object(d.a)(a);try{for(l.s();!(c=l.n()).done;){var b=c.value;if(b.name.toLowerCase().includes(e)){var n={playlist:s,song:b.name,artists:b.artists};t.push(n)}}}catch(i){l.e(i)}finally{l.f()}}return t}(t.songName.toLowerCase());e.setResults(s),localStorage.setItem("queryResult",JSON.stringify(s)),b&&(e.displayResults(!0),r(!1))},children:[Object(i.jsx)(v.a.Item,{children:Object(i.jsx)("label",{htmlFor:"header-search",children:Object(i.jsx)("span",{className:"visually-hidden",children:"Search song name"})})}),Object(i.jsx)(v.a.Item,{name:"songName",children:Object(i.jsx)(O.a,{type:"text",placeholder:"Search song name",style:{color:"silver",zIndex:2,borderColor:"#D4AF37",height:"5vw",width:"30vw",minHeight:"50px",minWidth:"250px",fontSize:"x-large",alignContent:"center",justifyContent:"center"}})}),Object(i.jsx)(v.a.Item,{children:Object(i.jsx)(n.a,{type:"ghost",htmlType:"submit",style:{color:"black",zIndex:2,borderColor:"#D4AF37",height:"5vw",width:"10vw",minHeight:"50px",minWidth:"82.3px",fontSize:"large"},children:"Search"})})]})},h=s(221);var p=function(e){return Object(i.jsx)(h.a,{style:{margin:"2vw",zIndex:2,overflow:"scroll",maxHeight:300},children:e.results.map((function(e){return Object(i.jsxs)("p",{children:[e.song," by ",e.artists.join(", ")," from ",e.playlist]})}))})},f=s(51),m=s.n(f),g=s(111),y=s(85),S=s(112),k=s.n(S),w=[{name:"Musical Potluck 7: Gaslight Gatekeep Girlboss",id:"28tVYCoZGeTD9EYcMzSsnR"},{name:"Musical Potluck 6: Musical Potluck: The Musical",id:"48nqhJrBNn8LDsy33IgPXG"},{name:"Musical Potluck 5: Drippin' In Twang",id:"3UOwzMPZL2oHDMMhbcVsPP"},{name:"Musical Potluck 4: What Now?",id:"53tx1yiQp8J1dpv3AQLg6H"},{name:"Musical Potluck 3: The Search",id:"2HirbOELhh8RCEt2YusWCN"},{name:"Musical Potluck 2: The Squeaqual",id:"7J2fdxRz7TXJlxKTdT1HzT"},{name:"Musical Potluck",id:"1WVnOBghWI1cWJbSdKPQFB"}];var I=function(e){var t=Object(c.useState)(""),s=Object(u.a)(t,2),a=s[0],l=s[1],b=Object(c.useState)(!1),r=Object(u.a)(b,2),o=r[0],j=r[1];Object(c.useEffect)((function(){if(window.location.hash){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var s=t.split("="),c=Object(u.a)(s,2),a=c[0],l=c[1];return e[a]=l,e}),{}),t=e.access_token,s=e.expires_in,c=e.token_type;localStorage.clear(),localStorage.setItem("accessToken",t),localStorage.setItem("expiresIn",s),localStorage.setItem("tokenType",c)}localStorage.getItem("accessToken")&&l(localStorage.getItem("accessToken"))}),[]);var v=function e(t,s){return k.a.get(t,{headers:{Authorization:"Bearer "+a}}).then((function(t){var c=function(e){var t,s=[],c=Object(d.a)(e);try{for(c.s();!(t=c.n()).done;){var a,l=t.value,b=[],n=Object(d.a)(l.track.artists);try{for(n.s();!(a=n.n()).done;){var i=a.value;b.push(i.name)}}catch(o){n.e(o)}finally{n.f()}var r={name:l.track.name,artists:b};s.push(r)}}catch(o){c.e(o)}finally{c.f()}return s}(t.data.items),a=[].concat(Object(y.a)(s),Object(y.a)(c)),l=t.data.next;return null!=l?e(l,a):a})).catch((function(e){console.log(e)}))},O=function(){var t=Object(g.a)(m.a.mark((function t(){var s,c,a,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(!0),s={},c=Object(d.a)(w),t.prev=3,l=m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.value,c="https://api.spotify.com/v1/playlists/".concat(t.id,"/tracks"),e.next=4,v(c,[]).then((function(e){s[t.name]=e})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})),c.s();case 6:if((a=c.n()).done){t.next=10;break}return t.delegateYield(l(),"t0",8);case 8:t.next=6;break;case 10:t.next=15;break;case 12:t.prev=12,t.t1=t.catch(3),c.e(t.t1);case 15:return t.prev=15,c.f(),t.finish(15);case 18:localStorage.setItem("data",JSON.stringify(s)),e.displaySearchBar(!0),e.displaySpotifyGetPlaylist(!1);case 22:case"end":return t.stop()}}),t,null,[[3,12,15,18]])})));return function(){return t.apply(this,arguments)}}();return Object(i.jsx)("div",{children:Object(i.jsx)(n.a,{shape:"round",style:{color:"silver",zIndex:2,borderColor:"#D4AF37",height:"5vw",width:"30vw",minHeight:"50px",minWidth:"250px",fontSize:"x-large",alignContent:"center",justifyContent:"center"},onClick:O,loading:o,children:"Start Search"})})};s(211);var C=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),s=t[0],a=t[1],l=Object(c.useState)(!1),b=Object(u.a)(l,2),n=b[0],r=b[1],o=Object(c.useState)(!1),j=Object(u.a)(o,2),d=j[0],v=j[1],O=Object(c.useState)([]),h=Object(u.a)(O,2),f=h[0],m=h[1];return s?Object(i.jsx)("div",{className:"Search",children:Object(i.jsx)(I,{displaySpotifyGetPlaylist:a,displaySearchBar:r})}):n?d?Object(i.jsxs)("div",{className:"Search",children:[Object(i.jsx)(x,{setResults:m}),Object(i.jsx)(p,{results:f})]}):Object(i.jsx)("div",{className:"Search",children:Object(i.jsx)(x,{displayResults:v,setResults:m})}):void 0};var P=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"}),Object(i.jsx)("div",{class:"bubble"})]})},T=s(113),z=s(10);s(212);s(213).config();var M=function(){return Object(i.jsxs)("div",{className:"Main",children:[Object(i.jsx)(T.a,{basename:"/potluck",children:Object(i.jsxs)(z.c,{children:[Object(i.jsx)(z.a,{path:"/search",element:Object(i.jsx)(C,{})}),Object(i.jsx)(z.a,{path:"/",element:Object(i.jsx)(j,{})})]})}),Object(i.jsx)(P,{})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,223)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,b=t.getTTFB;s(e),c(e),a(e),l(e),b(e)}))};b.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root")),N()}},[[217,1,2]]]);
//# sourceMappingURL=main.c63afd93.chunk.js.map