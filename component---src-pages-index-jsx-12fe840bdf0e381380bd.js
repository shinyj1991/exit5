(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Dtc0:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),r=n("ntAx"),a=n("bSql"),l=n("PZY4"),c=n("XUsr");t.default=function(e){var t=e.data.allMarkdownRemark.nodes;return 0===t.length?i.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):i.a.createElement(r.a,null,i.a.createElement(a.a,null),i.a.createElement(c.a,null),i.a.createElement(l.a,{postList:t}))}},DzJC:function(e,t,n){var o=n("sEfC"),i=n("GoyQ");e.exports=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),o(e,t,{leading:r,maxWait:t,trailing:a})}},PZY4:function(e,t,n){"use strict";var o=n("DzJC"),i=n.n(o),r=n("q1tI"),a=n.n(r),l=n("vOnD"),c=n("Wbzz"),s=n("PyCY"),u=n("XUsr"),d=n("GxtF"),f=n("sNMZ"),m=l.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1yxgspy-0"})(["@media (max-width:768px){padding:0 10px;}"]),p=l.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1yxgspy-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),h=l.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1yxgspy-2"})(["margin-bottom:15px;font-size:12px;color:",";"],(function(e){return e.theme.colors.tertiaryText})),g=l.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1yxgspy-3"})(["margin-bottom:32px;line-height:1.6;max-height:3.4em;font-size:14px;color:",";overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;"],(function(e){return e.theme.colors.secondaryText}));t.a=function(e){var t=e.postList,n=Object(r.useState)(!1),o=n[0],l=n[1],x=Object(r.useState)(10),v=x[0],w=x[1],y=i()((function(){document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&v<t.length&&(l(!0),setTimeout((function(){w(v+10),l(!1)}),300))}),250);return Object(r.useEffect)((function(){return window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[v,t]),Object(r.useEffect)((function(){w(10)}),[t]),a.a.createElement(m,null,t.slice(0,v).map((function(e,n){var o=e.frontmatter,i=o.title,r=o.date,l=o.tags,f=e.excerpt,m=e.fields.slug;return a.a.createElement("div",{key:e.fields.slug},a.a.createElement(p,null,a.a.createElement(s.a,{size:"bg"},a.a.createElement(c.Link,{to:m},i)),a.a.createElement(h,null,r),a.a.createElement(g,null,f),a.a.createElement(d.a,{tagList:l})),v-1!==n&&t.length-1!==n&&a.a.createElement(u.a,{mt:"48px",mb:"32px"}))})),o&&a.a.createElement(f.a,null))}},PyCY:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("vOnD").default.h1.withConfig({displayName:"Title__Wrapper",componentId:"sc-1oag5ys-0"})(["margin-bottom:15px;font-size:",";font-weight:700;line-height:1.2;color:",";word-break:break-all;> a{text-decoration:none;color:inherit;transition:color 0.2s;&:hover{color:",";}}"],(function(e){return e.size}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.accentColor1}));t.a=function(e){var t=e.size,n=e.children;return i.a.createElement(r,{size:{sm:"16px",md:"20px",bg:"24px"}[t]},n)}},QIyF:function(e,t,n){var o=n("Kz5y");e.exports=function(){return o.Date.now()}},bSql:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("vOnD"),a=n("Wbzz"),l=n("ma3e"),c=n("LjP0"),s=n("C4nX"),u=r.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-1eq4c5c-0"})(["display:flex;align-items:center;column-gap:16px;@media (max-width:768px){padding-inline:15px;}"]),d="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":s.siteUrl,f=r.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-1eq4c5c-1"})(["flex:0 0 auto;width:128px;height:128px;border-radius:50%;background:#f7f7f7 url(","/profile.jpg) center center / cover no-repeat;"],d),m=r.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-1eq4c5c-2"})(["margin-bottom:4.8px;a{font-size:24px;font-weight:700;text-decoration:none;color:",";}"],(function(e){return e.theme.colors.text})),p=r.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-1eq4c5c-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(function(e){return e.theme.colors.secondaryText})),h=r.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-1eq4c5c-4"})(["display:flex;column-gap:9.6px;svg{width:25.6px;height:25.6px;cursor:pointer;path{fill:",";transition:fill 0.3s;}}a:hover svg path{fill:",";}"],(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.text}));t.a=function(){var e=s.links.github,t=s.links.email,n=s.links.notion;return i.a.createElement(u,{id:"bio"},i.a.createElement(f,null),i.a.createElement("div",null,i.a.createElement(m,null,i.a.createElement(a.Link,{to:"/about"},"@",s.author)),i.a.createElement(p,null,s.description),i.a.createElement(h,null,i.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer"},i.a.createElement(l.b,null)),i.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer"},i.a.createElement(c.a,null)),i.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},i.a.createElement(l.a,null)))))}},sEfC:function(e,t,n){var o=n("GoyQ"),i=n("QIyF"),r=n("tLB3"),a=Math.max,l=Math.min;e.exports=function(e,t,n){var c,s,u,d,f,m,p=0,h=!1,g=!1,x=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=c,o=s;return c=s=void 0,p=t,d=e.apply(o,n)}function w(e){return p=e,f=setTimeout(E,t),h?v(e):d}function y(e){var n=e-m;return void 0===m||n>=t||n<0||g&&e-p>=u}function E(){var e=i();if(y(e))return b(e);f=setTimeout(E,function(e){var n=t-(e-m);return g?l(n,u-(e-p)):n}(e))}function b(e){return f=void 0,x&&c?v(e):(c=s=void 0,d)}function k(){var e=i(),n=y(e);if(c=arguments,s=this,m=e,n){if(void 0===f)return w(m);if(g)return clearTimeout(f),f=setTimeout(E,t),v(m)}return void 0===f&&(f=setTimeout(E,t)),d}return t=r(t)||0,o(n)&&(h=!!n.leading,u=(g="maxWait"in n)?a(r(n.maxWait)||0,t):u,x="trailing"in n?!!n.trailing:x),k.cancel=function(){void 0!==f&&clearTimeout(f),p=0,c=m=s=f=void 0},k.flush=function(){return void 0===f?d:b(i())},k}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-12fe840bdf0e381380bd.js.map