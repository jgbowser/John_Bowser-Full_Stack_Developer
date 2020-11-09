(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a(10),i=a.n(n),r=(a(38),a(39),a(4)),o=function(){var e=Object(r.c)({opacity:1,from:{opacity:0},delay:250,config:{duration:250}}),t=Object(r.c)({transform:"translate3d(0%,0,0)",opacity:1,delay:500,from:{transform:"translate3d(0,-100%,0)",opacity:0},config:{duration:300}}),a=Object(r.c)({transform:"translate3d(0%,0,0)",opacity:1,delay:800,from:{transform:"translate3d(0,100%,0)",opacity:0},config:{duration:300}});return Object(c.jsx)("section",{className:"Hero",children:Object(c.jsx)(r.a.div,{className:"Hero__background",style:e,children:Object(c.jsxs)("div",{className:"Hero__content",children:[Object(c.jsx)(r.a.h1,{className:"Hero__title",style:t,children:"John Bowser"}),Object(c.jsx)(r.a.h2,{className:"Hero__subtitle",style:a,children:"Full Stack Developer"})]})})})},l=a(7),d=(a(49),function(){var e=Object(r.c)({opacity:1,from:{opacity:0},delay:1100}),t=Object(r.c)({opacity:1,delay:1300,from:{opacity:0}}),a=Object(r.c)({opacity:1,delay:1500,from:{opacity:0}});return Object(c.jsxs)(r.a.div,{className:"Header__container",style:e,children:[Object(c.jsx)("div",{className:"Header__title",children:Object(c.jsx)(r.a.p,{className:"Header__logo",style:t,children:"JGB"})}),Object(c.jsx)("nav",{className:"Header__links",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)(r.a.li,{style:a,children:Object(c.jsx)(l.Link,{to:"about",activeClass:"active",spy:!0,smooth:!0,duration:500,tabIndex:"0",children:"About"})}),Object(c.jsx)(r.a.li,{style:a,children:Object(c.jsx)(l.Link,{to:"projects",activeClass:"active",spy:!0,smooth:!0,duration:500,tabIndex:"0",children:"Projects"})}),Object(c.jsx)(r.a.li,{style:a,children:Object(c.jsx)(l.Link,{to:"contact",activeClass:"active",spy:!0,smooth:!0,duration:500,tabIndex:"0",children:"Contact"})})]})})]})}),j=a(6),p=a(32),h=a(31),b=a.n(h),m=(a(50),function(e){var t=e.content,a=e.img,s=e.imgAltText,n=e.animatedDirection,i=e.flexDirection;return Object(c.jsx)(b.a,{partialVisibility:!0,offset:{bottom:200},children:function(e){var r=e.isVisible;return Object(c.jsx)(p.Spring,{to:{opacity:r?1:0,transform:r?"translateX(0)":"translateX(".concat("right"===n?"10px":"-10px",")")},children:function(e){return Object(c.jsxs)("div",{className:"AboutContentRow ".concat(i),style:Object(j.a)({},e),children:[a&&Object(c.jsx)("div",{className:"row_image_container",children:Object(c.jsx)("img",{className:"row_image",src:a,alt:s})}),Object(c.jsx)("div",{className:"row_content",children:t.map((function(e,t){return Object(c.jsx)("p",{className:"row_text",children:e},t)}))})]})}})}})}),u=a.p+"static/media/profile_512.80861d46.jpg",g=a.p+"static/media/topshot_512.17ff3513.jpg",f=a.p+"static/media/marathon_512.82e1642f.jpg",x=a.p+"static/media/disc_caddy_1.39f0eaf1.jpg",_=a.p+"static/media/disc_caddy_2.1fc4e724.jpg",O=a.p+"static/media/disc_caddy_3.5838c377.jpg",y=a.p+"static/media/sr_1.062f241a.jpg",v=a.p+"static/media/sr_2.75de60f9.jpg",k=a.p+"static/media/sr_3.1cad992f.jpg",N=a.p+"static/media/zip_pal_1.d1f12cd9.jpg",w=a.p+"static/media/zip_pal_2.69119272.jpg",C=a.p+"static/media/zip_pal_3.09508c01.jpg",S=[{img:u,imgAltText:"John Bowser Sitting on a large boulder",content:["I am a Full Stack Developer located in Salt Lake City, UT.","I enjoy tackling difficult problems, creating applications that improve the user's quality of life, learning new techniques and skills, and surrounding myself with other developers that are passionate about what they do."],animatedDirection:"right"},{img:g,imgAltText:"top shot of macbook with code, headphones, and a notebox with wireframe sketches",content:["I love working with JavaScript, React, Node.js, Express, and PostgreSQL.","I jump at the opportunity to learn new things and improve my skills.","I think the programming community's willingness to share knowledge is invaluable; I strive to exemplify that mindset by sharing my knowledge with others and learning from others any chance that I get."],animatedDirection:"left"},{img:f,imgAltText:"John and his girlfriend Kasie at the Indianapolis Marathon",content:["Outside of programming, I have many interests.","I love spending time hiking with my girlfriend and practicing landscape photography.","I love traveling and seeing new places.","I am an avid reader who never seems to have enough space on my bookshelf for new books."],animatedDirection:"right"}],I=[{id:1,images:[{id:1,url:x},{id:2,url:_},{id:3,url:O}],content:{title:"DiscCaddy",desc:"DiscCaddy is your companion on the course. With DiscCaddy you can: keep track of your round by creating a scorecard, add the discs you own to your DiscCaddy bag, and get a recommended disc based on your selected shot type and the discs you own. DiscCaddy helps you think about shot shapes and disc flight characteristics. It also allows you to view all your previous scorecards to track your scores over time.",stack:{client:"JavaScript, React, React Router, Context, Jest",server:"Node.js, Express.js, bcryptjs, PostgreSQL, Mocha, Chai"},links:{client:"https://github.com/jgbowser/DiscCaddy-client",server:"https://github.com/jgbowser/DiscCaddy-server",live:"https://disccaddy.vercel.app/"}}},{id:2,images:[{id:1,url:y},{id:2,url:v},{id:3,url:k}],content:{title:"Spanish SRS",desc:"Spanish SRS is a language learning app that utilizes the spaced repetition technique to provide an optimized learning experience for the user. The app uses a linked list on the back end to handle reorganizing the list of words based on correct or incorrect guesses. Users can see an overall score as well as  their correct and incorrect guesses for each word. The back end is designed to scale, making the addition of new words and even languages simple.",stack:{client:"JavaScript, React, React Router, Context, Cypress",server:"Node.js, Express.js, bcryptjs, PostgreSQL, Mocha, Chai"},links:{client:"https://github.com/jgbowser/SR-Client-johnb-tiff",server:"https://github.com/jgbowser/SR-API-johnb-tiff",live:"https://language-spaced-repetition.vercel.app/register"}}},{id:3,images:[{id:1,url:N},{id:2,url:w},{id:3,url:C}],content:{title:"Zip Pal",desc:"Zip Pal is a pen pal app developed to help users escape the isolation of quarantine during the COVID-19 pandemic. The app aims to replicate a real pen pal experience. To accomplish this, there is a 6-hour delay before a sent message can be read, users take turns sending messages, and users are given random pen pals and decide to initiate a conversation based on a brief bio. These constraints reduce the pressure of immediate responses and promote long-form, thoughtful messages.",stack:{client:"JavaScript, React, React Router, Context, Jest, Enzyme",server:"Node.js, Express.js, bcryptjs, xss, PostgreSQL, Mocha, Chai"},links:{client:"https://github.com/jgbowser/zippal-client",server:"https://github.com/jgbowser/zippal-api",live:"https://zippals.vercel.app/"}}}],P=(a(66),function(){return Object(c.jsxs)("section",{id:"about",className:"About",children:[Object(c.jsx)("h3",{className:"About__header",children:"About Me"}),S.map((function(e,t){return Object(c.jsx)(m,Object(j.a)({flexDirection:t%2!==0?"":"reverse"},e),t)}))]})}),R=a(18),D=a(8),A=(a(70),function(e){var t=e.images,a=e.content,n=e.nextProjectHandler,i=Object(s.useState)(0),o=Object(R.a)(i,2),l=o[0],d=o[1],p=Object(r.d)(t[l],(function(e){return e.id}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:r.b.molasses}),h=function(){d(t.length-1===l?0:l+1)},b=function(){d(0===l?t.length-1:l-1)};return Object(c.jsxs)("div",{className:"ProjectScreen",children:[p.map((function(e){var t=e.item,a=e.props,s=e.key;return Object(c.jsxs)(r.a.div,{className:"ProjectScreen__image",style:Object(j.a)(Object(j.a)({},a),{},{backgroundImage:"url(".concat(t.url,")")}),children:[Object(c.jsx)("button",{className:"ProjectScreen__icon",onClick:b,type:"button",children:Object(c.jsx)(D.a,{className:"image_arrow",icon:"arrow-circle-left"})}),Object(c.jsx)("button",{className:"ProjectScreen__icon",onClick:h,type:"button",children:Object(c.jsx)(D.a,{className:"image_arrow",icon:"arrow-circle-right"})})]},s)})),Object(c.jsxs)("div",{className:"ProjectScreen__content",children:[Object(c.jsx)("h4",{className:"content__title",children:a.title}),Object(c.jsxs)("div",{className:"content__links_container",children:[Object(c.jsx)("a",{className:"content__links",href:a.links.live,target:"_blank",rel:"noreferrer",children:"Live App"}),Object(c.jsx)("a",{className:"content__links",href:a.links.client,target:"_blank",rel:"noreferrer",children:"Client Repo"}),Object(c.jsx)("a",{className:"content__links",href:a.links.server,target:"_blank",rel:"noreferrer",children:"API Repo"})]}),Object(c.jsx)("div",{className:"content__desc_container",children:Object(c.jsx)("p",{className:"content__desc",children:a.desc})}),Object(c.jsxs)("div",{className:"content__stack",children:[Object(c.jsx)("p",{className:"content__stack_header",children:"Tech Stack"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"content__stack_list_title",children:"Front End:"})," ",a.stack.client]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"content__stack_list_title",children:"Back End:"})," ",a.stack.server]})]}),Object(c.jsxs)("button",{type:"button",className:"content__next",onClick:n,children:["Next ",Object(c.jsx)(D.a,{icon:"forward"})]})]})]})}),H=(a(71),function(){var e=Object(s.useState)(0),t=Object(R.a)(e,2),a=t[0],n=t[1],i=Object(r.d)(I[a],(function(e){return e.id}),{from:{opcaity:0,transform:"translate3d(100%, 0, 0",display:"none"},enter:{opacity:1,transform:"translate3d(0%, 0, 0",display:"block"},leave:{opacity:0},config:Object(j.a)(Object(j.a)({},r.b.stiff),{},{clamp:!0})}),o=function(){n(I.length-1===a?0:a+1)};return Object(c.jsx)("div",{className:"ProjectSlider",children:i.map((function(e){var t=e.item,a=e.props,s=e.key;return Object(c.jsx)(r.a.div,{className:"screen_wrapper",style:a,children:Object(c.jsx)(A,{images:t.images,content:t.content,nextProjectHandler:o})},s)}))})}),E=(a(72),function(){return Object(c.jsxs)("section",{id:"projects",className:"Projects",children:[Object(c.jsx)("h3",{className:"Projects__header",children:"Projects"}),Object(c.jsx)(H,{})]})}),J=(a(73),function(){return Object(c.jsxs)("section",{id:"contact",className:"Contact",children:[Object(c.jsx)("h3",{className:"Contact__header",children:"Contact"}),Object(c.jsxs)("p",{children:["I am actively looking for new opportunities. ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})," If you are looking for a dedicated and hardworking full stack developer with strong technical skills, look no further. ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"My passion and experience will be a valuable asset to your team."]}),Object(c.jsx)("p",{children:"Feel free to reach out to me via email or LinkedIn and check out my GitHub"}),Object(c.jsxs)("div",{className:"Contact__info",children:[Object(c.jsxs)("a",{href:"http://www.linkedin.com/in/john-g-bowser",target:"_blank",rel:"noreferrer",className:"Contact__link",children:[Object(c.jsx)(D.a,{className:"Contact__icon",icon:{prefix:"fab",iconName:"linkedin"}}),Object(c.jsx)("span",{className:"link_text",children:"LinkedIn"})]}),Object(c.jsxs)("a",{href:"mailto:john.bow7720@gmail.com",className:"Contact__link",children:[Object(c.jsx)(D.a,{className:"Contact__icon",icon:"envelope"}),Object(c.jsx)("span",{className:"link_text",children:"Email Me"})]}),Object(c.jsxs)("a",{href:"https://github.com/jgbowser",target:"_blank",rel:"noreferrer",className:"Contact__link",children:[Object(c.jsx)(D.a,{className:"Contact__icon",icon:{prefix:"fab",iconName:"github"}}),Object(c.jsx)("span",{className:"link_text",children:"GitHub"})]})]})]})}),L=a(13),T=a(14),z=a(24);a(74);L.b.add(T.a,T.b,T.d,z.a,z.b,T.c);var M=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsx)(d,{})}),Object(c.jsxs)("main",{children:[Object(c.jsx)("div",{className:"heroWrapper",children:Object(c.jsx)(o,{})}),Object(c.jsx)("div",{className:"aboutWrapper",children:Object(c.jsx)(l.Element,{name:"about",children:Object(c.jsx)(P,{})})}),Object(c.jsx)("div",{className:"projectsWrapper",children:Object(c.jsx)(l.Element,{name:"projects",children:Object(c.jsx)(E,{})})}),Object(c.jsx)("div",{className:"contactWrapper",children:Object(c.jsx)(l.Element,{name:"contact",children:Object(c.jsx)(J,{})})})]})]})};i.a.render(Object(c.jsx)(M,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.3fb81338.chunk.js.map