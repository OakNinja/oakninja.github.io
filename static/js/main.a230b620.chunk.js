(this.webpackJsonpOakNinja=this.webpackJsonpOakNinja||[]).push([[0],{39:function(e,a,t){e.exports=t(58)},44:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),s=(t(44),t(10)),c=t(14),o=t(15),i=t(20),m=t(18),d=t(33),u=t.n(d),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.parallax=new u.a(this.scene)}},{key:"componentWillUnmount",value:function(){this.parallax.disable()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"parallax-container"},l.a.createElement("div",{className:"scene"},l.a.createElement("ul",{ref:function(a){return e.scene=a}},l.a.createElement("li",{className:"layer","data-depth-x":"0.90","data-depth-y":"0.790"},l.a.createElement("img",{src:"img/leaf_back.gif"})),l.a.createElement("li",{className:"layer","data-depth-x":"-0.50","data-depth-y":"-0.60"},l.a.createElement("img",{src:"img/ninja.png"})),l.a.createElement("li",{className:"layer","data-depth-x":"-1.90","data-depth-y":"-1.90"},l.a.createElement("img",{src:"img/leaf_front.gif"})))))}}]),t}(n.Component);var h=function(e){return l.a.createElement("header",{id:"scroll-to-top",name:"scroll-to-top",className:"masthead"},l.a.createElement("div",{name:"home",className:"container d-flex h-100 align-items-center"},l.a.createElement(f,null),l.a.createElement("div",{className:"button-container"},l.a.createElement(s.Link,{smooth:!0,duration:500,spy:!0,to:"about",className:"btn-circle js-scroll-trigger"},l.a.createElement("i",{className:"fa fa-angle-double-down animated"})))))};var p=function(e){return l.a.createElement("section",{id:"#"+e.name,name:e.name,className:e.name+"-section "+e.classList},e.html)},E=t(16),b=t(62),v=t(61),g=t(63),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isTopOfPage:!0},n.handleScroll=n.handleScroll.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var a=window.scrollY;this.state.isTopOfPage&&a<10||(a<10?this.setState({isTopOfPage:!0}):this.setState({isTopOfPage:!1}))}},{key:"render",value:function(){return l.a.createElement(b.a,{fixed:"top",className:"topmenu-navbar navbar-custom "+(this.state.isTopOfPage?"":"top-nav-collapse"),expand:"sm"}," ",l.a.createElement(v.a,null,l.a.createElement(s.Link,{className:"navbar-brand custom-brand",smooth:!0,duration:500,spy:!0,href:"#scroll-to-top",to:"scroll-to-top"},l.a.createElement("span",{className:"light"},"Oak"),".Ninja"),l.a.createElement(b.a.Toggle,{className:"navbar-toggler-right","aria-controls":"responsive-navbar-nav","aria-expanded":"false","aria-label":"Toggle navigation"}),l.a.createElement(b.a.Collapse,{id:"navbarResponsive"},l.a.createElement(g.a,{className:"ml-auto"},l.a.createElement(s.Link,{smooth:!0,duration:500,spy:!0,className:"nav-link",href:"#about",to:"about"},"About")))))}}]),t}(l.a.Component);var N=function(){var e=(new Date).getFullYear();return l.a.createElement("div",{id:"home"},l.a.createElement(w,null),l.a.createElement(h,{title:"React-Grayscale",buttonLabel:"Get Started"}),l.a.createElement(p,{name:"about",classList:"text-center",html:l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8 mx-auto"},l.a.createElement("h2",{className:"text-white mb-4"},"About"),l.a.createElement("p",{className:"text-white-50"},"My name is Esse Woods and I work as a Software Developer in Stockholm, Sweden. When not at work, I spend time with my family, gardening, tinkering, and run a never-ending stream of hobby projects.",l.a.createElement("br",null),l.a.createElement("br",null)," Some of these are\xa0",l.a.createElement("a",{href:"https://github.com/OakNinja/MakeMeFish"},"MakeMeFish")," ","- a world first terminal tool to provide easy navigation and execution of make targets, and\xa0",l.a.createElement("a",{href:"https://www.microsoft.com/sv-se/store/apps/visa-vecka/9wzdncrdqz1x"},"Visa Vecka")," ","- a week number application for Windows 10, Windows 8.1 and Windows Phone (Swedish)."),l.a.createElement("ul",{class:"list-inline banner-social-buttons"},l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:oakninja@gmail.com",className:"btn btn-default btn-lg",title:"oakninja@gmail.com"},l.a.createElement("i",{className:"fa fa-envelope fa-fw"})," ",l.a.createElement("span",{className:"network-name"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/OakNinja",className:"btn btn-default btn-lg",title:"Github"},l.a.createElement("i",{className:"fa fa-github fa-fw"})," ",l.a.createElement("span",{className:"network-name"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"http://stackoverflow.com/users/1502563/oakninja",className:"btn btn-default btn-lg",title:"Stack Overflow"},l.a.createElement("i",{className:"fa fa-stack-overflow fa-fw"})," ",l.a.createElement("span",{className:"network-name"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/OakNinja",className:"btn btn-default btn-lg",title:"Twitter"},l.a.createElement("i",{className:"fa fa-twitter fa-fw"})," ",l.a.createElement("span",{className:"network-name"})))))))}),l.a.createElement("footer",{className:"bg-black small text-center text-white-50"},l.a.createElement("div",{class:"footer-image"}),l.a.createElement("div",{className:"container"},"Copyright \xa9 Esse Woods ",e)))},k=(t(57),document.getElementById("root"));k.hasChildNodes()?Object(r.hydrate)(l.a.createElement(N,null),k):Object(r.render)(l.a.createElement(N,null),k)}},[[39,1,2]]]);
//# sourceMappingURL=main.a230b620.chunk.js.map