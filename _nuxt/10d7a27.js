(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{475:function(t,e,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("2b1f7ed1",content,!0,{sourceMap:!1})},476:function(t,e,r){"use strict";r(475)},477:function(t,e,r){var n=r(38)(!1);n.push([t.i,".article_list{padding:50px 50px 100px;max-width:1000px}.article_list ul li{border-left:3px solid #2c343e}.article_list ul li:not(:first-child){margin-top:24px}.article_list ul li a{padding:12px 24px;display:block}.article_list ul li a:hover{background:#2c343e}.article_list ul li a .category{margin-bottom:5px;font-size:12px}.article_list ul li a .subject{font-size:16px}.article_list ul li a .info{display:flex;margin-top:10px;font-size:12px}.article_list ul li a .info .author{margin-left:15px}.article_list .btn_area{margin-top:30px}.article_list .btn_area button{padding:12px 30px;background:#f7f7f7;transition:all .3s}.article_list .btn_area button:hover{background:#3273eb;color:#fff}",""]),t.exports=n},480:function(t,e,r){"use strict";r.r(e);r(476);var n=r(40),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"article_list"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},505:function(t,e,r){"use strict";r.r(e);var n,l=r(48),c=r(7),o=(r(41),r(34),r(42),r(80),r(79),r(52),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,o,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,l=10,e.next=4,r(n.directory,{deep:!0}).sortBy("createdAt","desc").fetch();case 4:return c=(c=e.sent).map((function(article){article.url="/article",article.split=article.path.split("/");for(var i=1;i<article.split.length;i++){var t=i<3?"/":"-";article.url+="".concat(t).concat(article.split[i])}return article})),o=c.length,d=Math.ceil(o/l),f=c.slice(0,l),e.abrupt("return",{visibleLength:l,lastPage:d,directory:n.directory,articles:f});case 10:case"end":return e.stop()}}),e)})))()},mounted:function(){},data:function(){return{page:1}},watch:{page:(n=Object(c.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content(this.directory).only(["title","description","slug","author","updatedAt","date"]).sortBy("createdAt","desc").limit(this.visibleLength).skip(this.visibleLength*r).fetch();case 2:n=t.sent,this.articles=[].concat(Object(l.a)(this.articles),Object(l.a)(n));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}}}),d=r(40),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ArticleList",[r("ul",t._l(t.articles,(function(article){return r("li",{key:article.path},[r("NuxtLink",{attrs:{to:{path:article.url}}},[r("div",{staticClass:"category"},[t._v(t._s(article.dir.replace("/","")))]),t._v(" "),r("div",{staticClass:"subject"},[t._v(t._s(article.title))]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"date"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),r("div",{staticClass:"author"},[t._v(t._s(article.author))])])])],1)})),0),t._v(" "),t.page<t.lastPage?r("div",{staticClass:"btn_area"},[r("button",{on:{click:function(e){t.page++}}},[t._v("더보기")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleList:r(480).default})}}]);