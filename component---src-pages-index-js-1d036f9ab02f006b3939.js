(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{203:function(e,a,t){"use strict";t.r(a),t(100);var s=t(0),n=t.n(s),i=t(236),c=t.n(i),r=t(344),l=t(12),o=t.n(l),u=t(229),m=t.n(u),d=t(213),M=t(225),g=t(345),p=t.n(g),N=t(214),E=function(e){var a=e.info,t=a.title,s=a.subtitle,i=a.cta_text,c=a.cta_link,r=n.a.createElement("div",{className:"hero__image--wrapper"},n.a.createElement("img",{src:p.a,alt:"Digital Services that work for everyone"}));return n.a.createElement("section",{className:"hero usa-grid hero--home"},n.a.createElement("div",{className:"hero__text"},n.a.createElement("h1",{className:"hero__title"},t),n.a.createElement("div",{className:"hero__intro-text"},s),n.a.createElement(N.a,{type:"hero",button_text:i,link:c})),r)},y=t(228),D=t(227),I=t(224),h=t.n(I),j=t(217),v=(t(346),t(226)),z=t.n(v),T=function(e){var a=e.children,t=(e.data,e.location);return n.a.createElement(d.StaticQuery,{query:"1108356428",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"},{name:"og:site_name",content:e.site.siteMetadata.title},{property:"og:type",content:"website"},{property:"og:url",content:t},{property:"og:title",content:e.site.siteMetadata.title},{property:"og:description",content:""},{property:"og:image",content:z.a},{name:"twitter:card",content:h.a.seo.twitterCard},{name:"twitter:site",content:h.a.seo.twitterSite},{property:"fb:app_id",content:h.a.seo.fbAppId},{property:"og:email",content:e.site.siteMetadata.email},{property:"og:phone_number",content:e.site.siteMetadata.phone}]}),n.a.createElement("header",{className:"section header__main usa-header usa-header-basic",style:{backgroundImage:"url("+z.a+")"}},n.a.createElement("section",{className:"usa-nav-container"},n.a.createElement("div",{className:"usa-navbar"},n.a.createElement(M.a,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("button",{className:"usa-menu-btn"}," Menu ")),n.a.createElement(j.a,{pages:e.allSitePage})),n.a.createElement(E,{info:e.markdownRemark.frontmatter})),n.a.createElement("main",null,n.a.createElement("div",null,a)),n.a.createElement(y.a,null),n.a.createElement(D.a,{email:e.site.siteMetadata.email,phone:e.site.siteMetadata.phone,address:e.site.siteMetadata.address,address_line_2:e.site.siteMetadata.address_line_2,city:e.site.siteMetadata.city}))},data:r})};T.propTypes={children:o.a.node.isRequired};var L=T,f=t(300),A=t(348),w=t.n(A),b=t(349),C=t.n(b),x=t(285),k=t(215),_=function(){return n.a.createElement("section",{className:"section section__government-services neutral-hex-bg"},n.a.createElement("div",{className:"usa-grid"},n.a.createElement(k.a,{title:"Modernizing Government Services"}),n.a.createElement(x.a,{teaserTitle:"Contracting and Capabilities",teaserImage:w.a,teaserText:"Years of work in the public sector have taught us how to meet the needs of today’s government.",teaserLink:"/capabilities",teaserClass:"teaser__contracting teaser__halves"}),n.a.createElement(x.a,{teaserTitle:"DKAN and Open Data",teaserImage:C.a,teaserText:"We help agencies comply with open data mandates by providing full-scale DKAN services and support.",teaserLink:"/",teaserClass:"teaser__dkan teaser__halves"})))},S=t(16),O=t.n(S),U=t(242),Y=t.n(U),Q=t(232),Z=t(364),G=t.n(Z),W=t(365),q=t.n(W),P=t(366),B=t.n(P),R=function(e){function a(){return e.apply(this,arguments)||this}return O()(a,e),a.prototype.render=function(){return n.a.createElement("section",{className:"section section__triple-quotes"},n.a.createElement("div",{className:"usa-grid"},n.a.createElement(k.a,{title:"Get to know us"}),n.a.createElement("div",{className:"blockquotes__list"},n.a.createElement(Y.a,{dots:!0,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]},n.a.createElement(Q.a,{quote:"The emphasis on balance and constant learning make CivicActions an incredibly fun and engaging community.",quote_source:"Karen Johnson, Systems Administrator",quote_image:G.a}),n.a.createElement(Q.a,{quote:"We build trust by giving clients insight into the people we are, so they relate to us as humans rather than just contractors.",quote_source:"Steve Wirt,  Engineer",quote_image:q.a}),n.a.createElement(Q.a,{quote:"We are each in charge of how we approach our own work, yet we’re accountable to each other. So we have to remain clear, focused, and transparent.",quote_source:"Steve Curtis, Project Manager",quote_image:B.a}))),n.a.createElement("div",{className:"align-right"},n.a.createElement(N.a,{button_text:"Meet Our Team",link:"/team"}))))},a}(s.Component),V=(t(237),t(249)),H=function(e){var a=e.posts.map(function(e,a){var t=e.node.frontmatter,s=t.title,i=t.client_name,c=t.preview_image,r=t.path,l=c.childImageSharp.fixed;return n.a.createElement(V.a,{title:s,image:l,client_name:i,link:r,key:a})});return n.a.createElement("div",{className:"related-content__list"},a)};t.d(a,"mediumQuery",function(){return K}),t(367),t(369),a.default=function(e){var a=e.data,t=a.allMediumPost,s=a.markdownRemark,i=a.allMarkdownRemark,r=t.group,l=s.html,o=s.frontmatter,u=i.edges,m=c.a.first(r,function(e){return e}),d=c.a.map(m,function(e,a){return n.a.createElement(f.a,{key:{index:a},posts:{post:e}})});return n.a.createElement(L,null,n.a.createElement("section",{className:"section__home-intro section"},n.a.createElement("div",{className:"usa-grid"},n.a.createElement("h3",{className:"section__home-intro--quote"},o.quote," "),n.a.createElement("div",{className:"section__home-intro--text",dangerouslySetInnerHTML:{__html:l}}))),n.a.createElement("section",{className:"section section__government-services neutral-hex-bg"},n.a.createElement("div",{className:"usa-grid"},n.a.createElement(k.a,{title:"Work That Matters"}),n.a.createElement(H,{posts:u})),n.a.createElement("div",{className:"usa-grid align-right"},n.a.createElement(N.a,{button_text:"See More Work",link:"/case-study"}))),n.a.createElement("section",{className:"section section__recent-posts"},n.a.createElement("div",{className:"usa-grid"},n.a.createElement(k.a,{title:"See what we've been up to"}),d)),n.a.createElement(_,null),n.a.createElement(R,null))};var K="3765564476"},214:function(e,a,t){"use strict";t(219);var s=t(0),n=t.n(s),i=t(12),c=t.n(i),r=t(213),l=function(e){var a=e.type,t=e.button_text,s=e.link,i=e.isExternal,c="secondary"===a?"usa-button-secondary":"dark"===a?"usa-button-secondary-inverse":"hero"===a?"usa-button-navy":"usa-button",l=i?n.a.createElement("a",{href:s,alt:t},t," "):n.a.createElement(r.Link,{alt:t,to:s},t," ");return n.a.createElement("button",{className:c},l)};a.a=l,l.propTypes={type:c.a.string,button_text:c.a.string,link:c.a.string,isExternal:c.a.bool}},215:function(e,a,t){"use strict";var s=t(0),n=t.n(s);a.a=function(e){var a=e.title,t=e.subtitle,s=t?n.a.createElement("p",{className:"section__subtitle"},t):"";return n.a.createElement("div",{className:"section__title--wrapper"},n.a.createElement("h2",{className:"section__title"},a),s)}},217:function(e,a,t){"use strict";var s=t(0),n=t.n(s),i=t(212),c=t.n(i),r=t(218),l=t.n(r),o=t(222);a.a=function(e){return e.pages,n.a.createElement("nav",{role:"navigation",className:"usa-nav"},n.a.createElement("div",{className:"usa-grid mobile-nav--logo"},n.a.createElement("div",{className:"mobile-nav--logo-container"},n.a.createElement(o.a,{siteTitle:"CivicActions"})),n.a.createElement("div",{className:"mobile-nav--close--container"},n.a.createElement("button",{className:"usa-nav-close"},"Menu ",n.a.createElement("img",{src:l.a,alt:"close menu"})))),n.a.createElement("ul",{className:"usa-nav-primary usa-accordion"},n.a.createElement("li",{className:"menu-item"},n.a.createElement("button",{className:"usa-accordion-button usa-nav-link","aria-expanded":"false","aria-controls":"basic-nav-section-one"},n.a.createElement("span",null,"About")),n.a.createElement("ul",{id:"basic-nav-section-one",className:"usa-nav-submenu","aria-hidden":"true"},n.a.createElement("li",null,n.a.createElement(c.a,{to:"/values",activeClassName:"usa-current"}," Our Values ")),n.a.createElement("li",null,n.a.createElement(c.a,{to:"/team",activeClassName:"usa-current"}," Our People ")),n.a.createElement("li",null,n.a.createElement(c.a,{to:"/communities",activeClassName:"usa-current"}," Our Community  ")),n.a.createElement("li",null,n.a.createElement(c.a,{to:"/press",activeClassName:"usa-current"}," Press ")))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("button",{className:"usa-accordion-button usa-nav-link","aria-expanded":"false","aria-controls":"basic-nav-section-two"},n.a.createElement("span",null,"Work")),n.a.createElement("ul",{id:"basic-nav-section-two",className:"usa-nav-submenu","aria-hidden":"true"},n.a.createElement("li",null,n.a.createElement(c.a,{to:"/approach",activeClassName:"usa-current"}," Our Approach ")),n.a.createElement("li",null,n.a.createElement(c.a,{to:"/case-study",activeClassName:"usa-current"}," Case Studies ")))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("a",{href:"https://medium.com/civicactions",className:"usa-nav-link"},n.a.createElement("span",null,"Blog"))),n.a.createElement("li",{className:"menu-item"},n.a.createElement("button",{className:"usa-accordion-button usa-nav-link","aria-expanded":"false","aria-controls":"basic-nav-section-three"},n.a.createElement("span",null,"Connect")),n.a.createElement("ul",{id:"basic-nav-section-three",className:"usa-nav-submenu","aria-hidden":"true"},n.a.createElement("li",null,n.a.createElement(c.a,{to:"/careers",activeClassName:"usa-current"}," Careers ")),n.a.createElement("li",null,n.a.createElement(c.a,{to:"/contact",activeClassName:"usa-current"}," Contact "))))))}},218:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMTUgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5VSSBlbGVtZW50IC8gSWNvbnMgLyBDbG9zZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJVSS1jb21wb25lbnRzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iSGVhZGVycy0tLU1vYmlsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI5OC4wMDAwMDAsIC0zNjIuMDAwMDAwKSIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8ZyBpZD0iSGVhZGVyLS0tTW9iaWxlLS0tQ29sbGFwc2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyNzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iVUktZWxlbWVudC0vLUljb25zLS8tQ2xvc2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5OC4wMDAwMDAsIDgzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC42NDY3Nzc4LDExLjIxMjYwMzcgQzE0Ljg4MTg0MDMsMTEuNDQ3NjY2MSAxNSwxMS43MzQyNjYzIDE1LDEyLjA3MTE0NzIgQzE1LDEyLjQwODAyODIgMTQuODgxODQwMywxMi42OTQ2MjgzIDE0LjY0Njc3NzgsMTIuOTI5NjkwOCBMMTIuOTI5NjkwOCwxNC42NDY3Nzc4IEMxMi42OTMzNzEzLDE0Ljg4MzA5NzMgMTIuNDA2NzcxMSwxNS4wMDEyNTcgMTIuMDY5ODkwMiwxNS4wMDEyNTcgQzExLjczNDI2NjMsMTUuMDAxMjU3IDExLjQ0NzY2NjEsMTQuODgzMDk3MyAxMS4yMTI2MDM3LDE0LjY0Njc3NzggTDcuNDk5MzcxNDksMTAuOTM0ODAyNiBMMy43ODczOTYzLDE0LjY0Njc3NzggQzMuNTUyMzMzODYsMTQuODgzMDk3MyAzLjI2NTczMzY4LDE1LjAwMTI1NyAyLjkyODg1Mjc2LDE1LjAwMTI1NyBDMi41OTE5NzE4NCwxNS4wMDEyNTcgMi4zMDY2Mjg2OCwxNC44ODMwOTczIDIuMDcwMzA5MjMsMTQuNjQ2Nzc3OCBMMC4zNTMyMjIxNTcsMTIuOTI5NjkwOCBDMC4xMTY5MDI3MDcsMTIuNjk0NjI4MyAwLDEyLjQwODAyODIgMCwxMi4wNzExNDcyIEMwLDExLjczNDI2NjMgMC4xMTY5MDI3MDcsMTEuNDQ3NjY2MSAwLjM1MzIyMjE1NywxMS4yMTI2MDM3IEw0LjA2NTE5NzM1LDcuNTAwNjI4NTEgTDAuMzUzMjIyMTU3LDMuNzg4NjUzMzEgQzAuMTE2OTAyNzA3LDMuNTUyMzMzODYgMCwzLjI2Njk5MDcgMCwyLjkyODg1Mjc2IEMwLDIuNTkzMjI4ODYgMC4xMTY5MDI3MDcsMi4zMDY2Mjg2OCAwLjM1MzIyMjE1NywyLjA3MTU2NjI0IEwyLjA3MDMwOTIzLDAuMzUzMjIyMTU3IEMyLjMwNjYyODY4LDAuMTE4MTU5NzI1IDIuNTkxOTcxODQsMCAyLjkyODg1Mjc2LDAgQzMuMjY1NzMzNjgsMCAzLjU1MjMzMzg2LDAuMTE4MTU5NzI1IDMuNzg3Mzk2MywwLjM1MzIyMjE1NyBMNy40OTkzNzE0OSw0LjA2NTE5NzM1IEwxMS4yMTI2MDM3LDAuMzUzMjIyMTU3IEMxMS40NDc2NjYxLDAuMTE4MTU5NzI1IDExLjczNDI2NjMsMCAxMi4wNjk4OTAyLDAgQzEyLjQwNjc3MTEsMCAxMi42OTMzNzEzLDAuMTE4MTU5NzI1IDEyLjkyOTY5MDgsMC4zNTMyMjIxNTcgTDE0LjY0Njc3NzgsMi4wNzE1NjYyNCBDMTQuODgxODQwMywyLjMwNjYyODY4IDE1LDIuNTkzMjI4ODYgMTUsMi45Mjg4NTI3NiBDMTUsMy4yNjY5OTA3IDE0Ljg4MTg0MDMsMy41NTIzMzM4NiAxNC42NDY3Nzc4LDMuNzg4NjUzMzEgTDEwLjkzNDgwMjYsNy41MDA2Mjg1MSBMMTQuNjQ2Nzc3OCwxMS4yMTI2MDM3IFoiIGlkPSJGaWxsLTE1LUNvcHkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},232:function(e,a,t){"use strict";var s=t(0),n=t.n(s),i=t(12),c=t.n(i),r=t(233),l=t.n(r),o=function(e){var a,t=e.quote,s=e.quote_source,i=e.quote_class,c=e.quote_image,r="blockquote__wrapper "+i;return c&&(a=n.a.createElement("div",{className:"blockquote__image"},n.a.createElement("img",{src:c,alt:s}))),n.a.createElement("div",{className:r},a,n.a.createElement("img",{className:"blockquote__icon ",src:l.a,alt:"blockquote icon"}),n.a.createElement("blockquote",{className:"blockquote__text"},n.a.createElement("p",null,t),n.a.createElement("cite",null," ",s," ")))};a.a=o,o.propTypes={quote:c.a.string,quote_class:c.a.string,quote_image:c.a.string,quote_source:c.a.string}},233:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjA1MyAzLjcxN2MtMS43MS44NzQtMi45OTIgMS44NzEtMy44NDggMi45OTMtLjg1NSAxLjEyLTEuMjgyIDIuNTM2LTEuMjgyIDQuMjQ2LjExNC0uMDM4LjMwNC0uMDU3LjU3LS4wNTcgMS4yMTYgMCAyLjI1MS4zNyAzLjEwNyAxLjExMi44NTUuNzQgMS4yODIgMS43NTcgMS4yODIgMy4wNDkgMCAxLjQ0NC0uNDE4IDIuNTg0LTEuMjU0IDMuNDItLjgzNi44MzYtMS44ODEgMS4yNTQtMy4xMzUgMS4yNTQtMS43ODYgMC0zLjEyNS0uNjU1LTQuMDE5LTEuOTY3LS44OTMtMS4zMS0xLjMzOS0zLjE0NC0xLjMzOS01LjUgMC0yLjY5OC42NjUtNS4wNzMgMS45OTUtNy4xMjVDMy40NiAzLjA5IDUuNDkzIDEuMzk5IDguMjI5LjA2OWwxLjgyNCAzLjY0OHptMTMuNDUyIDBjLTEuNzEuODc0LTIuOTkyIDEuODcxLTMuODQ4IDIuOTkzLS44NTUgMS4xMi0xLjI4MiAyLjUzNi0xLjI4MiA0LjI0Ni4xMTQtLjAzOC4zMDQtLjA1Ny41Ny0uMDU3IDEuMjE2IDAgMi4yNTEuMzcgMy4xMDcgMS4xMTIuODU1Ljc0IDEuMjgyIDEuNzU3IDEuMjgyIDMuMDQ5IDAgMS40NDQtLjQxOCAyLjU4NC0xLjI1NCAzLjQyLS44MzYuODM2LTEuODgxIDEuMjU0LTMuMTM1IDEuMjU0LTEuNzg2IDAtMy4xMjUtLjY1NS00LjAxOC0xLjk2Ny0uODk0LTEuMzEtMS4zNC0zLjE0NC0xLjM0LTUuNSAwLTIuNjk4LjY2NS01LjA3MyAxLjk5NS03LjEyNSAxLjMzLTIuMDUyIDMuMzYzLTMuNzQzIDYuMDk5LTUuMDczbDEuODI0IDMuNjQ4eiIgZmlsbD0iI0RCMUIzQiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"},237:function(e,a,t){"use strict";t(223)("fixed",function(e){return function(){return e(this,"tt","","")}})},249:function(e,a,t){"use strict";t(219);var s=t(0),n=t.n(s),i=t(212),c=t.n(i),r=t(234),l=t.n(r),o=t(12),u=t.n(o),m=function(e){var a=e.image,t=e.title,s=e.link,i=e.client_name,r=a?n.a.createElement("div",{className:"teaser--case-study__image"},n.a.createElement(l.a,{sizes:a})):null;return n.a.createElement(c.a,{to:s,className:"teaser--case-study--wrapper"},n.a.createElement("div",{className:"teaser--case-study"},r,n.a.createElement("div",{className:"teaser--case-study__text"},n.a.createElement("span",{className:"teaser--case-study__client"},i),n.a.createElement("h4",{className:"teaser--case-study__title"},t))))};a.a=m,m.propTypes={image:u.a.object,title:u.a.string,link:u.a.string,client_name:u.a.string}},285:function(e,a,t){"use strict";var s=t(0),n=t.n(s);a.a=function(e){var a,t=e.teaserDate,s=e.teaserImage,i=e.teaserTitle,c=e.teaserText,r=e.teaserLink,l=e.teaserClass,o=(e.teaserType,"teaser"),u="";return l&&(o="teaser "+l),s&&(u=n.a.createElement("div",{className:"teaser__image--wrapper"},n.a.createElement("img",{src:s,alt:i}))),c&&(a=n.a.createElement("p",{className:"teaser__text"}," ",c," ")),n.a.createElement("div",{className:o},u,n.a.createElement("div",{className:"teaser__date"}," ",t," "),n.a.createElement("h3",{className:"teaser__title"}," ",i," "),a,n.a.createElement("div",{className:"teaser__link"}," ",n.a.createElement("a",{href:r},"Read More")," "))}},300:function(e,a,t){"use strict";t(100);var s=t(0),n=t.n(s),i=t(236),c=t.n(i),r=t(285);function l(e){var a=e.single,t="https://medium.com/civicactions/"+a.uniqueSlug,s=a.createdAt,i=a.title;return n.a.createElement(r.a,{teaserDate:s,teaserTitle:i,teaserLink:t})}var o=function(e){var a=e.data;return c.a.map(a,function(e){return c.a.map(e,function(e,a){return n.a.createElement("li",{key:a,className:"medium--teaser__item teaser__item"},n.a.createElement(l,{key:a,single:e.node}))})})};a.a=function(e){var a=e.posts;return c.a.map(a,function(e,a){return n.a.createElement("ul",{key:a,className:"medium--teasers teaser--wrapper"},n.a.createElement(o,{data:{article:e}}))})}},344:function(e){e.exports={data:{site:{siteMetadata:{title:"CivicActions | Open and Agile Digital Government Services",email:"contact@civicactions.com",phone:"(510) 408-7510",address:"2625 Alcatraz Avenue,",address_line_2:"Suite 320,",city:"Berkeley, CA 94705"}},markdownRemark:{html:"<p>We focus on outcomes and help organizations accomplish their missions through:</p>\n<ul>\n<li>Agile approaches and human-centered design </li>\n<li>Culture of openness, learning, and collaboration</li>\n<li>Modern technologies and continuous improvement</li>\n</ul>",frontmatter:{path:"/",title:"Digital services that work for everyone",subtitle:"We help agencies improve lives through modern software and thoughtful experiences.",cta_text:"Learn How We Do It",cta_link:"/approach",quote:"Our goal is to transform the way governments procure, develop, and deliver digital services."}},allSitePage:{edges:[{node:{path:"/dev-404-page/",fields:{slug:"/dev-404-page/"}}},{node:{path:"/capabilities",fields:{slug:"/capabilities"}}},{node:{path:"/",fields:{slug:"/"}}},{node:{path:"/case-study/california-dmv",fields:{slug:"/case-study/california-dmv"}}},{node:{path:"/case-study/digital-democracy",fields:{slug:"/case-study/digital-democracy"}}},{node:{path:"/case-study/fcc",fields:{slug:"/case-study/fcc"}}},{node:{path:"/case-study/eatfresh",fields:{slug:"/case-study/eatfresh"}}},{node:{path:"/case-study/foss",fields:{slug:"/case-study/foss"}}},{node:{path:"/case-study/globalnet",fields:{slug:"/case-study/globalnet"}}},{node:{path:"/case-study/hhs",fields:{slug:"/case-study/hhs"}}},{node:{path:"/case-study/smithsonian",fields:{slug:"/case-study/smithsonian"}}},{node:{path:"/case-study/msf",fields:{slug:"/case-study/msf"}}},{node:{path:"/case-study/usva",fields:{slug:"/case-study/usva"}}},{node:{path:"/case-study/lincs",fields:{slug:"/case-study/lincs"}}},{node:{path:"/press/aaron-pava-executive-director-agl",fields:{slug:"/press/aaron-pava-executive-director-agl"}}},{node:{path:"/press/govtech-2018-top-100-companies",fields:{slug:"/press/govtech-2018-top-100-companies"}}},{node:{path:"/press/happy-productive-remote-teams",fields:{slug:"/press/happy-productive-remote-teams"}}},{node:{path:"/press/people-are-the-real-metrics",fields:{slug:"/press/people-are-the-real-metrics"}}},{node:{path:"/press/best-50-top-workplaces-2017",fields:{slug:"/press/best-50-top-workplaces-2017"}}},{node:{path:"/404.html",fields:{slug:"/404.html"}}},{node:{path:"/404",fields:{slug:"/404"}}},{node:{path:"/approach",fields:{slug:"/approach"}}},{node:{path:"/careers",fields:{slug:"/careers"}}},{node:{path:"/case-study",fields:{slug:"/case-study"}}},{node:{path:"/communities",fields:{slug:"/communities"}}},{node:{path:"/contact",fields:{slug:"/contact"}}},{node:{path:"/dkan-open-data",fields:{slug:"/dkan-open-data"}}},{node:{path:"/press",fields:{slug:"/press"}}},{node:{path:"/team",fields:{slug:"/team"}}},{node:{path:"/thank-you",fields:{slug:"/thank-you"}}},{node:{path:"/values",fields:{slug:"/values"}}},{node:{path:"/404/",fields:{slug:"/404/"}}},{node:{path:"/approach/",fields:{slug:"/approach/"}}},{node:{path:"/careers/",fields:{slug:"/careers/"}}},{node:{path:"/case-study/",fields:{slug:"/case-study/"}}},{node:{path:"/communities/",fields:{slug:"/communities/"}}},{node:{path:"/contact/",fields:{slug:"/contact/"}}},{node:{path:"/dkan-open-data/",fields:{slug:"/dkan-open-data/"}}},{node:{path:"/press/",fields:{slug:"/press/"}}},{node:{path:"/team/",fields:{slug:"/team/"}}},{node:{path:"/thank-you/",fields:{slug:"/thank-you/"}}},{node:{path:"/values/",fields:{slug:"/values/"}}}]}}}},345:function(e,a,t){e.exports=t.p+"11772cf4af27d42fcdd679d68f2e391e.jpg"},346:function(e,a,t){},348:function(e,a,t){e.exports=t.p+"bcf55423c25290a4c050d5ef528da6f3.jpg"},349:function(e,a,t){e.exports=t.p+"15a66e13ba1ecb34d2450262fe8c9f65.jpg"},364:function(e,a,t){e.exports=t.p+"55a69a7076c0450749c21807efa39a79.jpg"},365:function(e,a,t){e.exports=t.p+"d582fba2df659aa5b35fa673e078a54a.jpg"},366:function(e,a,t){e.exports=t.p+"7ebf6c4a489ec53a106b7c08b808fb02.jpg"},367:function(e,a,t){},369:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-1d036f9ab02f006b3939.js.map