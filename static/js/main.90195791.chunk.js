(window["webpackJsonppzdnes-publicator-client"]=window["webpackJsonppzdnes-publicator-client"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),l=a.n(s),i=(a(15),a(9)),o=a(1),c=a(2),m=a(4),d=a(3),u=a(5),h=a(8),p=a.n(h),v=(a(16),new(function(){function e(){Object(o.a)(this,e),this.baseUrl="https://tgddml3e7h.execute-api.eu-central-1.amazonaws.com/Prod"}return Object(c.a)(e,[{key:"MakePost",value:function(e,t){var a=this.baseUrl+e;return fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})}}]),e}())),f=new(function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"GetNews",value:function(e){return v.MakePost("/api/Publicator/GetNews",e)}}]),e}()),w=(a(17),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Input"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:this.props.name},this.props.title)),r.a.createElement("div",null,r.a.createElement("input",{id:this.props.name,name:this.props.name,type:"text",value:this.props.value,placeholder:this.props.placeholder,onChange:this.props.onChange})))}}]),t}(r.a.Component)),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).loadEmailData=function(){var e=a.state,t=(e.articles,Object(i.a)(e,["articles"]));f.GetNews(t).then((function(e){e.ok?(console.log("success"),e.json().then((function(e){a.setState({articles:e.articles}),console.log(e)}))):console.error("fail")}))},a.handleChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t,(function(){return console.log(a.state)}))},a.saveCredentials=function(){var e=JSON.stringify(a.state);localStorage.setItem("credentials",e)},a.loadCredentials=function(){var e=localStorage.getItem("credentials");if(e){var t=JSON.parse(e);a.setState(t)}else alert("No credentials found")},a.state={emailSenderFilter:"",emailUsername:"",emailPassword:"",wordpressUsername:"",wordpressPassword:"",articles:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderArticles",value:function(){return this.state.articles.map((function(e){return r.a.createElement("div",{className:"Article"},r.a.createElement("p",null,e.content))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),r.a.createElement("section",null,r.a.createElement("div",{className:"Form"},r.a.createElement(w,{name:"emailSenderFilter",title:"Email Sender",value:this.state.emailSenderFilter,onChange:this.handleChange}),r.a.createElement(w,{name:"emailUsername",title:"Email Username",value:this.state.emailUsername,onChange:this.handleChange}),r.a.createElement(w,{name:"emailPassword",title:"Email Password",value:this.state.emailPassword,onChange:this.handleChange,type:"password"}),r.a.createElement(w,{name:"wordpressUsername",title:"Wordpress Username",value:this.state.wordpressUsername,onChange:this.handleChange}),r.a.createElement(w,{name:"wordpressPassword",title:"Wordpress Password",value:this.state.wordpressPassword,onChange:this.handleChange,type:"password"}),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.saveCredentials},"Save Credentials")),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.loadCredentials},"Load Credentials")),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.loadEmailData},"Load Email Data")))),r.a.createElement("section",{className:"Articles"},this.renderArticles()))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.90195791.chunk.js.map