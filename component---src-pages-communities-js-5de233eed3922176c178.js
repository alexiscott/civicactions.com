(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{206:function(e,t,a){"use strict";a.r(t),a.d(t,"communitiesQuery",function(){return d});var n=a(1),r=a.n(n),s=a(231),i=a.n(s),c=a(223),l=a.n(c),m=a(217),o=a(229),u=a(222),p=a(300);t.default=function(e){var t=e.data,a=t.markdownRemark,n=t.allMediumPost,s=a.frontmatter,c=s.title,d=s.subtitle,_=s.agile_intro_text,E=s.dkan_intro_text,f=s.agl_logo,g=s.dkan_logo,v=n.group,N=i.a.first(v,function(e){return e}),h=i.a.map(N,function(e,t){return r.a.createElement(p.a,{posts:{post:e}})}),k=f?f.childImageSharp.resolutions:"",b=i.a.last(v,function(e){return e}),w=i.a.map(b,function(e,t){return r.a.createElement(p.a,{posts:{post:e}})}),y=g?g.childImageSharp.resolutions:"";return r.a.createElement(u.a,{heroTitle:c,heroSubtitle:d},r.a.createElement("section",{className:"section section__recent-posts"},r.a.createElement("div",{className:"usa-grid community__wrapper"},r.a.createElement("span",{className:"community__logo"},r.a.createElement(l.a,{resolutions:k})),r.a.createElement(m.a,{title:"Agile Government Leadership",subtitle:_}),h),r.a.createElement("div",{className:"usa-grid"},r.a.createElement(o.a,{button_text:"Visit AGL",link:"https://medium.com/agile-government-leadership",isExternal:!0}))),r.a.createElement("section",{className:"section section__recent-posts right-flipped"},r.a.createElement("div",{className:"usa-grid community__wrapper"},r.a.createElement("span",{className:"community__logo dkan"},r.a.createElement(l.a,{resolutions:y})),r.a.createElement(m.a,{title:"DKAN Open Data Plaform",subtitle:E}),w),r.a.createElement("div",{className:"usa-grid align-right"},r.a.createElement(o.a,{button_text:"Visit DKAN",link:"https://medium.com/dkan-blog",isExternal:!0}))))};var d="2416931207"},217:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.title,a=e.subtitle,n=a?r.a.createElement("p",{className:"section__subtitle"},a):"";return r.a.createElement("div",{className:"section__title--wrapper"},r.a.createElement("h2",{className:"section__title"},t),n)}},219:function(e,t,a){var n=a(16).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},284:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t,a=e.teaserDate,n=e.teaserImage,s=e.teaserTitle,i=e.teaserText,c=e.teaserLink,l=e.teaserClass,m=(e.teaserType,"teaser"),o="";return l&&(m="teaser "+l),n&&(o=r.a.createElement("div",{className:"teaser__image--wrapper"},r.a.createElement("img",{src:n,alt:s}))),i&&(t=r.a.createElement("p",{className:"teaser__text"}," ",i," ")),r.a.createElement("div",{className:m},o,r.a.createElement("div",{className:"teaser__date"}," ",a," "),r.a.createElement("h3",{className:"teaser__title"}," ",s," "),t,r.a.createElement("div",{className:"teaser__link"}," ",r.a.createElement("a",{href:c},"Read More")," "))}},300:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(231),i=a.n(s),c=a(284);function l(e){var t=e.single,a="https://medium.com/civicactions/"+t.uniqueSlug,n=t.createdAt,s=t.title;return r.a.createElement(c.a,{teaserDate:n,teaserTitle:s,teaserLink:a})}var m=function(e){var t=e.data;return i.a.map(t,function(e){return i.a.map(e,function(e,t){return r.a.createElement("li",{key:t,className:"medium--teaser__item teaser__item"},r.a.createElement(l,{key:t,single:e.node}))})})};t.a=function(e){var t=e.posts;return i.a.map(t,function(e,t){return r.a.createElement("ul",{className:"medium--teasers teaser--wrapper"},r.a.createElement(m,{data:{article:e}}))})}}}]);
//# sourceMappingURL=component---src-pages-communities-js-5de233eed3922176c178.js.map