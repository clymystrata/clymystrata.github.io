(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),a=n(17),s=n.n(a),l=(n(30),n(31),n(32),n(33),n(34),n(8));var o=function(e){return Object(c.jsxs)("div",{id:"content-container",children:[Object(c.jsx)("h1",{children:Object(c.jsx)(l.b,{to:"/",children:e.Title})}),Object(c.jsx)("h2",{children:e.SubTitle}),e.Text?Object(c.jsx)("p",{children:e.Text}):""]})},j=n(23);n(44),n(16),n(45),n(46);var h=function(e){return Object(c.jsx)(l.b,{to:e.navTo,id:e.id,className:e.className,onClick:function(t){return e.navHandler(t)},children:e.text},e.key)};var b=function(e){var t=e.links;return Object(c.jsx)("div",{id:"links",children:t.map((function(t,n){return Object(c.jsx)(h,{navTo:t.navTo,id:t.id,className:"linkitem",text:t.text,navHandler:e.clickHandler})}))})};var d=function(e){return Object(c.jsx)("nav",{id:"main-menu",role:"navigation",className:"main-menu","aria-label":"Main menu",children:Object(c.jsx)(b,{links:e.links,clickHandler:function(e){return null}})})},u=n(20),x=n(21),O=n(11),p=n(24),m=n(22),f=(n(47),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={showMenu:!1,iClass:"fa fa-bars"},e.toggleMenu=e.toggleMenu.bind(Object(O.a)(e)),e}return Object(x.a)(n,[{key:"toggleMenu",value:function(e){this.setState((function(e){var t=e.showMenu?"fa fa-bars":"fa fa-close";return{showMenu:!e.showMenu,iClass:t}}))}},{key:"render",value:function(){return Object(c.jsxs)("nav",{id:"main-menu",role:"navigation",className:"main-menu","aria-label":"Main menu",children:[Object(c.jsx)("button",{className:"menu-toggle",onClick:this.toggleMenu,children:Object(c.jsx)("i",{className:this.state.iClass})}),this.state.showMenu&&Object(c.jsx)(b,{links:this.props.links,clickHandler:this.toggleMenu})]})}}]),n}(r.a.Component));var g=function(e){return Object(c.jsx)("div",{id:"nav-container",children:Object(c.jsx)(j.a,{query:"(max-width: 768px)",children:function(t){return t?Object(c.jsx)(f,{links:e.links}):Object(c.jsx)(d,{links:e.links})}})})};var v=function(e){return Object(c.jsxs)("header",{children:[Object(c.jsx)(o,{Title:e.content.Title,SubTitle:e.content.SubTitle,Text:e.content.Text}),Object(c.jsx)(g,{links:e.links})]})},k=(n(48),n.p+"static/media/PiperKiss.1ef0543e.jpg");var w=function(e){return Object(c.jsxs)("main",{id:"home-page",children:[Object(c.jsx)("section",{className:"content",children:Object(c.jsxs)("article",{children:[Object(c.jsx)("h3",{children:"Welcome!"}),Object(c.jsx)("p",{children:"I'm glad you made it."}),Object(c.jsxs)("p",{children:["The ",Object(c.jsx)(l.b,{to:"/about",className:"page-link",children:"about page"})," has words about this site."]}),Object(c.jsx)("p",{children:"This is my daughter Piper:"})]})}),Object(c.jsx)("section",{className:"photo",children:Object(c.jsx)("div",{className:"frame",children:Object(c.jsx)("img",{src:k,alt:"featured"})})})]})};n(49);var T=function(e){return Object(c.jsx)("main",{id:"about-page",children:Object(c.jsx)("section",{className:"content",children:Object(c.jsxs)("article",{children:[Object(c.jsxs)("p",{children:["Although given the name:",Object(c.jsx)("h3",{children:"Randolph Scott Mellow"}),"pretty much everyone ",Object(c.jsx)("span",{className:"aside",children:"(with certain specific, endearing exceptions)"})," calls me ",Object(c.jsx)("span",{className:"h3",children:"Randy"}),"."]}),Object(c.jsxs)("p",{children:["I believe that people are a wonderment of divine complexity and, to wit, cannot be fathomed ",Object(c.jsx)("span",{className:"aside",children:"(let alone known)"})," via ",Object(c.jsx)("a",{href:"https://en.wikipedia.org/wiki/Wikipedia:Autobiography#The_problem_with_autobiographies",target:"_blank",rel:"noopener noreferrer",children:"autobiographical blurbs"})," posted here and there on the Internet."]}),Object(c.jsxs)("p",{children:["That being said, here are links to some autobiographical blurbs I've posted here and there on the Internet:",Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"http://www.linkedin.com/in/rsmellow",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/rsmellow",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:"http://www.facebook.com/rsmellow",target:"_blank",rel:"noopener noreferrer",children:"Facebook"}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"http://www.facebook.com/rsmellowphoto",target:"_blank",rel:"noopener noreferrer",children:"Photography Page"})})})]}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"http://www.instagram.com/rsmellow",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"http://www.twitter.com/rsmellow",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})})]})]}),Object(c.jsxs)("p",{children:["For those with deeper yearnings a quick ",Object(c.jsx)("a",{href:"https://bit.ly/3h730HT",target:"_blank",rel:"noopener noreferrer",children:"Google"})," should suffice."]}),Object(c.jsx)("p",{children:"I am a new father, an old programmer an out-of-practice musician and avid photographer who likes fantasy novels, science fiction movies and dramatically intense storytelling. This is my endevour to expound upon all that."})]})})})};n(50);var y=function(e){return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," RSMellow.com"]})})},N=n(4),M={Title:"Clymystrata",SubTitle:"Nothing's been settled",Text:""},_=[{navTo:"/",text:"Home"},{navTo:"/about",text:"About"},{navTo:"/tech",text:"Tech\xa0Blog"}];var C=function(e){return Object(c.jsxs)(l.a,{basename:"/",children:[Object(c.jsx)(v,{content:M,links:_}),Object(c.jsxs)(N.c,{children:[Object(c.jsx)(N.a,{path:"/main-menu",children:Object(c.jsx)(d,{})}),Object(c.jsx)(N.a,{path:"/tech",children:Object(c.jsx)(w,{})}),Object(c.jsx)(N.a,{path:"/about",children:Object(c.jsx)(T,{})}),Object(c.jsx)(N.a,{path:"/me",children:Object(c.jsx)(T,{})}),Object(c.jsx)(N.a,{exact:!0,path:"/",children:Object(c.jsx)(w,{})})]}),Object(c.jsx)(y,{})]})};var I=function(){return Object(c.jsx)(C,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),S()}],[[51,1,2]]]);
//# sourceMappingURL=main.45c1cbeb.chunk.js.map