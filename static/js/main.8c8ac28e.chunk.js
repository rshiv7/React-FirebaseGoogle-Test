(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,a,t){e.exports=t(63)},51:function(e,a,t){},52:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(10),i=t.n(r),c=(t(51),t(52),t(27)),l=t(32),s=t(85),m=t(92),u=t(87),p=t(89),d=t(90),g=t(91),b=t(33),h=t(34),f=t(39),E=t(35),v=t(40),w=t(86),y=t(36),O=t(26),j=(t(55),{apiKey:"AIzaSyCXpi_aBcUODwqgVEENc4EXGJ8H44-igPE",authDomain:"campmom-b95e0.firebaseapp.com",databaseURL:"https://campmom-b95e0.firebaseio.com",projectId:"campmom-b95e0",storageBucket:"",messagingSenderId:"443742210904"}),N=O.initializeApp(j).auth(),k={googleProvider:new O.auth.GoogleAuthProvider};N.onAuthStateChanged(function(e){console.log("Auth state change noted",e),e?(console.log("user is signed in!"),console.log("USER: ",e)):console.log("User not signed in")});var S=Object(s.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},input:{margin:e.spacing(1)}}}),A=function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(f.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(o)))).state={},t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=S,a=this.props,t=a.user,n=a.signOut,r=a.signInWithGoogle;return o.a.createElement("div",{className:e.container},o.a.createElement(w.a,{container:!0,spacing:3},t?o.a.createElement("p",null,"Hello, ",t.displayName):o.a.createElement("p",null,"Please sign in."),t?o.a.createElement("button",{variant:"contained",color:"primary",className:e.button,onClick:n},"Sign out"):o.a.createElement("button",{variant:"contained",color:"primary",className:e.button,onClick:r},"Sign in with Google")))}}]),a}(o.a.Component),C=Object(y.a)({providers:k,firebaseAppAuth:N})(A),x=t(88),B=t(38),G=t.n(B),I=Object(s.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},paper:Object(l.a)({position:"absolute",transform:"translateX(-100px)",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,4),outline:"none"},"border","none")}});function U(){return Math.round(20*Math.random())-10}function P(){var e=50+U(),a=50+U();return{top:"".concat(e,"%"),left:"".concat(a,"%"),transform:"translate(-".concat(e,"%, -").concat(a,"%)")}}var W=function(){var e=I(),a=o.a.useState(P),t=Object(c.a)(a,1)[0],n=o.a.useState(!1),r=Object(c.a)(n,2),i=r[0],l=r[1];return o.a.createElement("div",null,o.a.createElement("div",{className:e.root},o.a.createElement(m.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement(x.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(G.a,null)),o.a.createElement(p.a,{variant:"h6",className:e.title},"Camp.Mom"),o.a.createElement(d.a,{className:"Login",onClick:function(){l(!0)},color:"inherit"},"Login")))),o.a.createElement(g.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:i,onClose:function(){l(!1)},className:"mod-log"},o.a.createElement("div",{style:t,className:e.paper},o.a.createElement("h2",{id:"modal-title"},"Sign Up"),o.a.createElement(C,null))))};var J=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.8c8ac28e.chunk.js.map