(this["webpackJsonpvideo-game-foro"]=this["webpackJsonpvideo-game-foro"]||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a(22),c=a(29),i=a.n(c),u=a(39),s=a(40),m=a(44),d=a(24),p=a(41),f=a.n(p),g=r.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)(!1),o=Object(d.a)(a,2),l=o[0],c=o[1],p=Object(n.useState)(!1),h=Object(d.a)(p,2),E=h[0],v=h[1],b=function(){v(!0)},O=Object(n.useState)({email:"",password:"",token:""}),j=Object(d.a)(O,2),C=j[0],w=j[1],k=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://testing-api-foro.herokuapp.com/api/auth/login",C).then((function(e){W({token:e.data.token}),console.log(e.data.status)})).catch((function(e){console.log("Algo paso, aqu\xed te lo muestro: ".concat(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=Object(n.useState)({name:"",username:"",email:"",password:"",token:""}),x=Object(d.a)(y,2),S=x[0],F=x[1],L=Object(n.useState)(void 0),A=Object(d.a)(L,2),N=A[0],W=A[1],D=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://testing-api-foro.herokuapp.com/api/auth/signup",S).then((function(e){W({token:e.data.token}),console.log(e)})).catch((function(e){console.log("Algo paso, aqu\xed te lo muestro: ".concat(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=r.a.useState(!1),B=Object(d.a)(q,2),G=B[0],I=B[1];return r.a.createElement(g.Provider,{value:{open:l,setOpen:c,openAlert:E,setOpenAlert:v,handleCloseAlert:function(e,t){"clickaway"!==t?v(!1):I(!1)},handleClickAlert:b,values:S,setValues:F,handleChange:function(e){F(Object(m.a)(Object(m.a)({},S),{},Object(s.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),b(),console.log("'Ah\xed van los datos del formulario: ".concat(S.name,"'")),D(),I(!1)},openFormDialog:G,setOpenFormDialog:I,handleClickOpenFormDialog:function(){I(!0)},handleCloseFormDialog:function(){I(!1)},valuesLogin:C,setValuesLogin:w,handleChangeLogin:function(e){w(Object(m.a)(Object(m.a)({},C),{},Object(s.a)({},e.target.name,e.target.value)))},handleSubmitLogin:function(e){e.preventDefault(),b(),I(!1),console.log("Ah\xed van los datos del Login"),k(),w({email:"",password:""})},user:N,setUser:W}},t)},E=a(12),v=a(177),b=a(168),O=a(169),j=a(167),C=a(160),w=a(163),k=a(174),y=a(166),x=Object(C.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},rootp:{"& > *":{margin:e.spacing(1)}}}}}));function S(){var e=Object(n.useContext)(g),t=e.values,a=e.handleChange,o=e.handleSubmit,l=x();return r.a.createElement("div",{className:l.rootp},r.a.createElement("form",{className:l.root,onSubmit:o},r.a.createElement(w.a,{variant:"fullWidth"}),r.a.createElement(k.a,{required:!0,fullWidth:!0,label:"Name",variant:"outlined",color:"primary",type:"text",name:"name",value:t.name,onChange:a}),r.a.createElement(k.a,{fullWidth:!0,id:"username",label:"User Name",variant:"outlined",color:"primary",name:"username",value:t.username,onChange:a}),r.a.createElement(k.a,{fullWidth:!0,required:!0,id:"email",label:"Email",variant:"outlined",color:"primary",name:"email",value:t.email,onChange:a}),r.a.createElement(k.a,{fullWidth:!0,required:!0,id:"password",label:"Password",type:"password",variant:"outlined",autoComplete:"current-password",name:"password",value:t.password,onChange:a}),r.a.createElement(y.a,{fullWidth:!0,variant:"contained",color:"secondary",type:"submit"},"Sign Up")))}var F=a(75),L=a.n(F),A=a(76),N=a.n(A),W=Object(C.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},rootp:{"& > *":{margin:e.spacing(1)}}}}));function D(){var e=Object(n.useContext)(g),t=e.valuesLogin,a=e.handleChangeLogin,o=e.handleSubmitLogin,l=W();return r.a.createElement("div",{className:l.rootp},r.a.createElement("form",{className:l.root,onSubmit:o},r.a.createElement(k.a,{required:!0,fullWidth:!0,id:"email",label:"Email",variant:"outlined",color:"primary",name:"email",value:t.email,onChange:a}),r.a.createElement(k.a,{required:!0,fullWidth:!0,id:"password",label:"Password",type:"password",variant:"outlined",autoComplete:"current-password",name:"password",value:t.password,onChange:a}),r.a.createElement(y.a,{variant:"contained",color:"secondary",type:"submit",fullWidth:!0},"Log in")),r.a.createElement(w.a,{variant:"fullWidth"}),r.a.createElement(y.a,{startIcon:r.a.createElement(L.a,null),variant:"contained",color:"primary",fullWidth:!0},"Facebook"),r.a.createElement(y.a,{startIcon:r.a.createElement(N.a,null),variant:"contained",color:"primary",fullWidth:!0},"Google"))}function q(e){var t=Object(n.useContext)(g),a=t.openFormDialog,o=t.handleCloseFormDialog;return r.a.createElement("div",null,r.a.createElement(v.a,{open:a,onClose:o,"aria-labelledby":"form-dialog-title"},r.a.createElement(j.a,{id:"form-dialog-title"},"Login"),r.a.createElement(b.a,null,r.a.createElement(O.a,null,"To be able to make comments and start interacting with your questions, please register."),r.a.createElement(D,null),r.a.createElement(S,null))))}var B=a(178),G=a(175);function I(e){return r.a.createElement(G.a,Object.assign({elevation:6,variant:"filled"},e))}var H=Object(C.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function P(){var e=H(),t=Object(n.useContext)(g),a=t.openAlert,o=t.handleCloseAlert;return r.a.createElement("div",{className:e.root},r.a.createElement(B.a,{open:a,autoHideDuration:6e3,onClose:o},r.a.createElement(I,{onClose:o,severity:"success"},"The form is send!")))}var T=Object(C.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function U(){var e=T(),t=r.a.useContext(g).user;return r.a.createElement("div",{className:e.root},r.a.createElement("h1",null,"Bienvenidos \xe9ste es Home"),void 0!==t?r.a.createElement(l.c,{to:"/posts"},r.a.createElement(y.a,{variant:"contained",color:"default"},"Go to Post")):null,r.a.createElement(q,null),r.a.createElement(P,null))}var J=a(171),V=Object(C.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function R(){var e=V();return r.a.createElement("div",{className:e.root},r.a.createElement(J.a,null),r.a.createElement(J.a,{color:"secondary"}))}function _(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://testing-api-foro.herokuapp.com/api/posts").then((function(e){o(e.data),console.log(e)})).catch((function(e){console.log("Algo paso, aqu\xed te lo muestro: ".concat(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),0===a.length?r.a.createElement(R,null):r.a.createElement("div",null,a.map((function(e,t){return r.a.createElement("div",{key:e._id},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.content," "),r.a.createElement("small",null,e.createdAt," "))})))}var z=a(172),K=a(173),M=a(82),Q=a(170),X=a(77),Y=a.n(X),Z=a(78),$=a.n(Z);function ee(){var e=T(),t=r.a.useContext(g),a=t.handleClickOpenFormDialog,n=t.user,o=t.setUser;return r.a.createElement("div",{className:e.root},r.a.createElement(z.a,{position:"static",color:"secondary"},r.a.createElement(K.a,null,r.a.createElement(Q.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(l.c,{to:"/"},r.a.createElement(Y.a,null))),r.a.createElement(M.a,{variant:"h6",className:e.title},"Foro Game"),void 0!==n?r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,null)," Hola ",n.name,r.a.createElement(y.a,{color:"inherit",onClick:function(){return o(void 0)}},"Log-uot")):r.a.createElement(y.a,{color:"inherit",onClick:a},"Login"))))}var te=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),e.children)},ae=a(79),ne=a.n(ae),re=a(80),oe=a.n(re);function le(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,{to:"/"},r.a.createElement(y.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(oe.a,null)},"Back to Home")),r.a.createElement("img",{src:ne.a,alt:"Logo"}),r.a.createElement("a",{href:"https://stories.freepik.com/web"},"Illustration by Freepik Stories"))}function ce(){return r.a.createElement(l.a,null,r.a.createElement(te,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:U}),r.a.createElement(E.a,{exact:!0,path:"/login",component:R}),r.a.createElement(E.a,{exact:!0,path:"/posts",component:_}),r.a.createElement(E.a,{component:le}))))}var ie=document.getElementById("root");Object(o.render)(r.a.createElement(h,null,r.a.createElement(l.b,null,r.a.createElement(ce,null))),ie)},79:function(e,t,a){e.exports=a.p+"static/media/404Error-bro.d85a0be9.svg"},93:function(e,t,a){e.exports=a(122)}},[[93,1,2]]]);
//# sourceMappingURL=main.b601ab51.chunk.js.map