(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{207:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l}),a.d(t,"teamQuery",function(){return m}),a(220);var s=a(1),c=a.n(s),r=a(224),n=a(272),i=a(227),u=a(217);function l(e){var t,a,s,l,m=e.data.markdownRemark,M=m.frontmatter,o=m.html,N=M.name,L=M.role,E=M.location,j=M.social,D=M.medium_posts,g=M.specialties,I=M.image,y=M.quote,T=I?I.childImageSharp.resize.src:"";return g&&(t=g.map(function(e,t){return c.a.createElement("li",{className:"hero__specialties",key:t},e)}),a=c.a.createElement("ul",{className:"hero__specs--list"},t)),D&&(s=D.map(function(e,t){return c.a.createElement("li",{className:"medium--teaser__item teaser__item",key:t},c.a.createElement(n.a,{teaserDate:e.date,teaserTitle:e.title,teaserLink:e.url}))}),l=c.a.createElement("ul",{className:"team__medium-posts medium--teasers teaser--wrapper"},s)),c.a.createElement(r.a,{heroTitle:N,heroSubtitle:L,pageTitle:"CivicActions | "+N,teamImage:T,location:E,social:j},c.a.createElement("section",{className:" section usa-grid "},c.a.createElement("div",{className:"study__tech-specs "},c.a.createElement("h3",null," Specialties "),c.a.createElement("ul",null,a))),c.a.createElement("section",{className:"section text-container"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}}),c.a.createElement(i.a,{quote:y,quote_source:N})),c.a.createElement("section",{className:"section section__recent-posts team"},c.a.createElement("div",{className:"usa-grid"},c.a.createElement(u.a,{title:"Authored Articles"}),l)))}var m="1694751740"},217:function(e,t,a){"use strict";var s=a(1),c=a.n(s);t.a=function(e){var t=e.title,a=e.subtitle,s=a?c.a.createElement("p",{className:"section__subtitle"},a):"";return c.a.createElement("div",{className:"section__title--wrapper"},c.a.createElement("h2",{className:"section__title"},t),s)}},220:function(e,t,a){var s=a(16).f,c=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in c||a(17)&&s(c,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},227:function(e,t,a){"use strict";var s=a(1),c=a.n(s),r=a(0),n=a.n(r),i=a(228),u=a.n(i),l=function(e){var t,a=e.quote,s=e.quote_source,r=e.quote_class,n=e.quote_image,i="blockquote__wrapper "+r;return n&&(t=c.a.createElement("div",{className:"blockquote__image"},c.a.createElement("img",{src:n,alt:s}))),c.a.createElement("div",{className:i},t,c.a.createElement("img",{className:"blockquote__icon ",src:u.a,alt:"blockquote icon"}),c.a.createElement("blockquote",{className:"blockquote__text"},c.a.createElement("p",null,a),c.a.createElement("cite",null," ",s," ")))};t.a=l,l.propTypes={quote:n.a.string,quote_class:n.a.string,quote_image:n.a.string,quote_source:n.a.string}},228:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjA1MyAzLjcxN2MtMS43MS44NzQtMi45OTIgMS44NzEtMy44NDggMi45OTMtLjg1NSAxLjEyLTEuMjgyIDIuNTM2LTEuMjgyIDQuMjQ2LjExNC0uMDM4LjMwNC0uMDU3LjU3LS4wNTcgMS4yMTYgMCAyLjI1MS4zNyAzLjEwNyAxLjExMi44NTUuNzQgMS4yODIgMS43NTcgMS4yODIgMy4wNDkgMCAxLjQ0NC0uNDE4IDIuNTg0LTEuMjU0IDMuNDItLjgzNi44MzYtMS44ODEgMS4yNTQtMy4xMzUgMS4yNTQtMS43ODYgMC0zLjEyNS0uNjU1LTQuMDE5LTEuOTY3LS44OTMtMS4zMS0xLjMzOS0zLjE0NC0xLjMzOS01LjUgMC0yLjY5OC42NjUtNS4wNzMgMS45OTUtNy4xMjVDMy40NiAzLjA5IDUuNDkzIDEuMzk5IDguMjI5LjA2OWwxLjgyNCAzLjY0OHptMTMuNDUyIDBjLTEuNzEuODc0LTIuOTkyIDEuODcxLTMuODQ4IDIuOTkzLS44NTUgMS4xMi0xLjI4MiAyLjUzNi0xLjI4MiA0LjI0Ni4xMTQtLjAzOC4zMDQtLjA1Ny41Ny0uMDU3IDEuMjE2IDAgMi4yNTEuMzcgMy4xMDcgMS4xMTIuODU1Ljc0IDEuMjgyIDEuNzU3IDEuMjgyIDMuMDQ5IDAgMS40NDQtLjQxOCAyLjU4NC0xLjI1NCAzLjQyLS44MzYuODM2LTEuODgxIDEuMjU0LTMuMTM1IDEuMjU0LTEuNzg2IDAtMy4xMjUtLjY1NS00LjAxOC0xLjk2Ny0uODk0LTEuMzEtMS4zNC0zLjE0NC0xLjM0LTUuNSAwLTIuNjk4LjY2NS01LjA3MyAxLjk5NS03LjEyNSAxLjMzLTIuMDUyIDMuMzYzLTMuNzQzIDYuMDk5LTUuMDczbDEuODI0IDMuNjQ4eiIgZmlsbD0iI0RCMUIzQiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"},272:function(e,t,a){"use strict";var s=a(1),c=a.n(s);t.a=function(e){var t=e.teaserDate,a=e.teaserImage,s=e.teaserTitle,r=e.teaserText,n=e.teaserLink,i=e.teaserClass,u=(e.teaserType,"teaser"),l="";return i&&(u="teaser "+i),a&&(l=c.a.createElement("div",{className:"teaser__image--wrapper"},c.a.createElement("img",{src:a,alt:s}))),c.a.createElement("div",{className:u},l,c.a.createElement("div",{className:"teaser__date"}," ",t," "),c.a.createElement("h3",{className:"teaser__title"}," ",s," "),c.a.createElement("p",{className:"teaser__text"}," ",r," "),c.a.createElement("div",{className:"teaser__link"}," ",c.a.createElement("a",{href:n},"Read More")," "))}}}]);
//# sourceMappingURL=component---src-templates-team-member-template-js-d9f2b324c6644691e79d.js.map