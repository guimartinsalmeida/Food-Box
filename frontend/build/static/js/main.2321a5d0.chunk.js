(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,a){},175:function(e,t,a){e.exports=a(341)},341:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(104),a(46)),s=a(54);var u=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"food-box-logo"},r.a.createElement("h1",{className:"h1"},"Food-Box"),r.a.createElement("img",{src:"../../3.png",alt:"logo"})),r.a.createElement("div",{className:"food-box-card"},r.a.createElement("h2",null,"Food-box"),r.a.createElement("p",null," Escojas entre nuestros tres planes y te enviaremos productos que son adquiridos de productores locales",r.a.createElement("br",null),"le enviaremos las cantidades necesarias para que hagas las recetas sugeridas, evitando desperdicios de comida"),r.a.createElement("p",null,"Los paquetes que tenemos estan piensados para que te dure una semana "),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/plans"}," ",r.a.createElement("button",null,"escoja tu plan"))))))};var i=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not found"))},p=a(23),m=a(24),d=a(26),h=a(25),f=a(27),g=a(32),E=a.n(g),v=a(344),b=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={plans:[],user:{}},a.cardPlan=function(){return a.state.plans.map((function(e,t){return r.a.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},r.a.createElement(o.b,{onClick:function(){localStorage.setItem("plan",JSON.stringify(e._id))},to:"/places/".concat(e._id)},r.a.createElement(v.a,{className:"plan",bordered:!1,style:{width:300,backgroundImage:"url(".concat(e.image,")"),height:"400px",fontSize:"20px",backgroundPosition:"center",color:"white"}},r.a.createElement("p",null,e.name),r.a.createElement("p",null,"Price:",r.a.createElement("br",null),e.price),r.a.createElement("p",null,"Type:",r.a.createElement("br",null),e.role),r.a.createElement("p",null,e.description))))}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("mounting"),E.a.get("".concat("https://vast-meadow-96941.herokuapp.com","/plans")).then((function(t){console.log(t.data),e.setState({plans:t.data.plans}),console.log(e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"plans"},r.a.createElement("h1",null,"planes"),r.a.createElement("div",{className:"planes"},this.cardPlan()))}}]),t}(r.a.Component),y=a(19),w=a.n(y),j=a(33),O=a(345),x=a(346),k=a(14),S=a(342),I=a(132),C=a(347),P=(a(122),E.a.create({baseURL:"https://vast-meadow-96941.herokuapp.com",withCredentials:!0})),D={postaddress:function(){var e=Object(j.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("llega a service;;;;"+Object.values(t)),console.log(t),e.next=4,P.post("/places",t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getPlace:function(){var e=Object(j.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/places",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onDelete:function(){var e=Object(j.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.delete("/places/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onEdit:function(){var e=Object(j.a)(w.a.mark((function e(t,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.put("/edit-places/".concat(t),a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},N=function(e){return console.log("data",e),P.post("/places",e).then((function(e){return e.data})).catch((function(e){throw e}))},L=D,A=E.a.create({withCredentials:!0,baseURL:"https://vast-meadow-96941.herokuapp.com"}),U={signup:function(){var e=Object(j.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.post("/api/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(j.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.post("/api/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(j.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},T=S.a.Header,q=S.a.Content,J="https://vast-meadow-96941.herokuapp.com",M=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={unplan:{},user:{},places:[],lugar:void 0},a.handleInput=function(e){var t=a.state.user;t[e.target.name]=e.target.value,a.setState({user:t}),console.log(a.state.user),console.log(e.target.name)},a.onDelete=function(){var e=Object(j.a)(w.a.mark((function e(t,n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.state.places,e.next=3,L.onDelete(t);case 3:r.splice(n,1),a.setState({places:r});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.onLogout=Object(j.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.logOut();case 2:localStorage.clear(),a.props.history.push("/login");case 4:case"end":return e.stop()}}),e)}))),a.onSubmit=function(e){e.preventDefault(),E.a.get("".concat(J,"/places/").concat(a.state.places.id)).then((function(e){var t=e.data;console.log("2222222222222222222222",t),a.setState({lugares:t.place,lugar:r.a.createElement(v.a,null,r.a.createElement("p",null,"kjscbkja"),r.a.createElement("p",null,"kajcbikjbc"))})})).catch((function(e){console.log(e)}));var t=a.state.user;console.log("onsubmit",t),N(t).then((function(e){var t=a.state.places;t.push(e.place),console.log(".......",e),a.setState({places:t})})).catch((function(e){return console.log("el error en onsubmit",e)}))},a.cardPlace=function(){var e=a.state.places;console.log("este es el id ",e[0]),console.log(e)},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(!localStorage.getItem("user"))return this.props.history.push("/login");E.a.get("".concat(J,"/selectedPlan/").concat(this.props.match.params.id)).then((function(t){var a=t.data;e.setState({unplan:a.plan})})).catch((function(e){console.log(e)})),E.a.get("".concat(J,"/places/")).then((function(t){e.state.places;console.log("resasss",t),e.setState({places:t.data.place})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.unplan,a=this.state.places;return console.log(this.state),t?r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(S.a,null,r.a.createElement(T,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement(I.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},r.a.createElement(I.a.Item,{key:"3",onClick:this.onLogout},"Log out"))),r.a.createElement(q,{style:{padding:"0 50px",marginTop:64}},r.a.createElement(C.a,{style:{margin:"16px 0"}},r.a.createElement(C.a.Item,null,"Put your address to receive your food plan")),r.a.createElement("div",null,r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:380,display:"flex",justifyContent:"space-around"}},r.a.createElement(v.a,{style:{width:300,height:"400px",backgroundPosition:"center",color:"white",backgroundImage:"url(".concat(t.image,")")}},r.a.createElement("div",{className:"plan-place"},r.a.createElement("div",{style:{fontSize:"20px"}},r.a.createElement("p",null,t.name),r.a.createElement("p",null,"Price:",r.a.createElement("br",null),t.price),r.a.createElement("p",null,"Tipo:",r.a.createElement("br",null),t.role),r.a.createElement("p",null,t.description)))),r.a.createElement("div",null,this.state.lugar),r.a.createElement("div",null,a.length?a.map((function(t,a){return r.a.createElement("div",{key:a,style:{background:"#ECECEC",padding:"30px"}},r.a.createElement(v.a,{bordered:!1,style:{width:300}},r.a.createElement("h1",null,t.name),r.a.createElement("p",null,t.address),r.a.createElement("button",{type:"delete",id:t.id,key:"delete",onClick:function(){return e.onDelete(t._id,a)}},"delete"),r.a.createElement(o.b,{to:"/edit/".concat(t._id)},"  ",r.a.createElement("button",{type:"edit",id:t.id,key:"edit"},"Edit")," ")))})):r.a.createElement("div",null,r.a.createElement("span",null,"no hay nada mijo")))),r.a.createElement("p",null,t.name),r.a.createElement(O.a,{onSubmit:this.onSubmit,className:"login-form"},r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{onChange:this.handleInput,name:"name",prefix:r.a.createElement(k.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Address name"})),r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{onChange:this.handleInput,name:"address",prefix:r.a.createElement(k.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Put your address here"}),r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{type:"submit",value:"Submit"})))),r.a.createElement(o.b,{to:"/pedidoCreate/".concat(t._id)},r.a.createElement("button",null,"Add")))))):r.a.createElement("p",null,"Loading data...")}}]),t}(r.a.Component),_=a(343),z=a(171),B=E.a.create({withCredentials:!0,baseURL:"https://vast-meadow-96941.herokuapp.com"}),F=(function(){var e=Object(j.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.post("/api/pedidos");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}(),function(e){return console.log("data",e),B.post("/places",e).then((function(e){return e.data})).catch((function(e){throw e}))}),H=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={pedido:{fecha:"",hora:""},unplan:{},user:{}},a.handleInput=function(e){var t=a.state.user;t[e.target.name]=e.target.value,a.setState({user:t}),console.log(a.state.user),console.log(e.target.name)},a.onSubmit=function(e){e.preventDefault();var t=a.state.user;console.log("onsubmit",t),F(t).then((function(e){return console.log("la respuesta en onsubment",e)})).catch((function(e){return console.log("el error en onsubmit",e)}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("".concat("https://vast-meadow-96941.herokuapp.com","/selectedPlan/").concat(this.props.match.params.id)).then((function(t){var a=t.data;e.setState({unplan:a.plan})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.unplan;return e?r.a.createElement("div",{style:{display:"flex",marginTop:"3vw",justifyContent:"space-around"}},r.a.createElement(v.a,{style:{width:300}},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.price),r.a.createElement("p",null,e.role),r.a.createElement("p",null,e.description),r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("p",null,e.name),r.a.createElement(O.a,{onSubmit:this.onSubmit},r.a.createElement(O.a.Item,{onChange:this.handleInput,name:"fecha",label:"DatePicker"},r.a.createElement(_.a,null)),r.a.createElement(O.a.Item,{onChange:this.handleInput,name:"hora",label:"TimePicker"},r.a.createElement(z.a,null)))):r.a.createElement("p",null,"Loading data...")}}]),t}(r.a.Component),R=Object(n.createContext)(),W=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loggedUser:null},a.logUser=function(e){a.setState({loggedUser:e})},a.logOut=function(){U.logOut().then((function(e){console.log(e),a.setState({loggedUser:null})})).catch((function(e){return console.log(e)}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=this.logUser,a=this.logOut;return r.a.createElement(R.Provider,{value:{state:e,logUser:t,logOut:a}},this.props.children)}}]),t}(n.Component),K=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){if(!this.context.state.loggedUser)return this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Profile"),r.a.createElement("button",{onClick:this.context.logOut},"Log out"))}}]),t}(n.Component);K.contextType=R;var $=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a.handleInput=function(e){var t=a.state.user;t[e.target.name]=e.target.value,a.setState({user:t})},a.onSubmit=function(e){e.preventDefault(),U.signup(a.state.user).then((function(e){a.props.history.push("/login"),console.log(e.data)})).catch((function(e){console.log(e)}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100vw",height:"100vh"}},r.a.createElement("h2",null,"Signup"),r.a.createElement(v.a,{style:{width:"50vw"}},r.a.createElement(O.a,{onSubmit:this.onSubmit},r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{onChange:this.handleInput,type:"email",name:"email",placeholder:"Email"})),r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{onChange:this.handleInput,type:"password",name:"password",placeholder:"Password"})),r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{type:"submit",value:"Signup"})))))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a.handleInput=function(e){var t=a.state.user;t[e.target.name]=e.target.value,a.setState({user:t})},a.onSubmit=function(e){e.preventDefault(),U.login(a.state.user).then((function(e){localStorage.setItem("user",JSON.stringify(e.data.user));var t=JSON.parse(localStorage.getItem("plan"));a.props.history.push("/places/".concat(t))})).catch((function(e){console.log(e)}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100vw",height:"100vh"}},r.a.createElement("h2",null,"Login"),r.a.createElement(v.a,{style:{width:"50vw"}},r.a.createElement(O.a,{onSubmit:this.onSubmit},r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{onChange:this.handleInput,type:"email",name:"email",placeholder:"Email"})),r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{onChange:this.handleInput,type:"password",name:"password",placeholder:"Password"})),r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{type:"submit",value:"Login"}))),r.a.createElement("a",{href:"/signup"},r.a.createElement("button",null,"vete a hacer signup"))))}}]),t}(n.Component);G.contextType=R;var Q=G,V=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={place:{}},a.handleInput=function(e){var t=a.state.place;e.target.files?t.img=e.target.files[0]:t[e.target.name]=e.target.value;a.setState({place:t}),console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",a.state.place)},a.onSubmit=function(e){e.preventDefault();var t=new FormData;for(var n in a.state.place)t.append(n,a.state.place[n]),console.log("jjjjjj",a.props.match.params.id),L.onEdit(a.props.match.params.id,a.state.place).then((function(e){a.props.history.push("/plans")})).catch((function(e){return console.log(e)}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({place:this.state.place}),console.log(this.state)}},{key:"render",value:function(){this.state.place;return console.log("<<<<<<<<",this.state),r.a.createElement("div",null,r.a.createElement(O.a,{onSubmit:this.onSubmit,className:"login-form"},r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{onChange:this.handleInput,name:"name",prefix:r.a.createElement(k.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Address name"})),r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{onChange:this.handleInput,name:"address",prefix:r.a.createElement(k.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Put your address here"}),r.a.createElement(O.a.Item,null,r.a.createElement(x.a,{type:"submit",value:"Submit"})))))}}]),t}(n.Component),X=function(){return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:u}),r.a.createElement(s.a,{exact:!0,path:"/profile",component:K}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:$}),r.a.createElement(s.a,{exact:!0,path:"/login",component:Q}),r.a.createElement(s.a,{exact:!0,path:"/plans",component:b}),r.a.createElement(s.a,{exact:!0,path:"/places/:id",component:M}),r.a.createElement(s.a,{exact:!0,path:"/pedidoCreate/:id",component:H}),r.a.createElement(s.a,{exact:!0,path:"/edit/:id",component:V}),r.a.createElement(s.a,{component:i})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[175,1,2]]]);
//# sourceMappingURL=main.2321a5d0.chunk.js.map