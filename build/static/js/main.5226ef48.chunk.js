(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),c=a.n(s),o=(a(17),a(1)),i=a.n(o),l=a(4),u=a(5),m=a(6),d=a(9),p=a(7),h=a(10),f=a(8),g=a.n(f),E=(a(19),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).getUsers=Object(l.a)(i.a.mark(function e(){var t,n,r,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=3*Math.random()+1,n="https://reqres.in/api/users?page=".concat(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:s=e.sent,a.setState({isLoaded:!0,users:s.data});case 9:case"end":return e.stop()}},e)})),a.state={isLoaded:!1,users:null},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderUsers",value:function(){return this.state.isLoaded?r.a.createElement("div",null,this.state.users.map(function(e){return r.a.createElement("div",{className:"person"},r.a.createElement("img",{className:"avatar",src:e.avatar}),r.a.createElement("h2",null,e.first_name),r.a.createElement("p",null,"Email: ",r.a.createElement("b",null,e.email)))})):r.a.createElement("img",{src:"https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React!!"),r.a.createElement("button",{className:"b1",onClick:function(){return e.getUsers()}},"Load users")),this.renderUsers())}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.5226ef48.chunk.js.map