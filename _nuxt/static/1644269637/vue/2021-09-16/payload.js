__NUXT_JSONP__("/vue/2021-09-16", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:[{article:{slug:y,title:"[Nuxt.js] google map 적용하기",author:"신용준",date:y,toc:[],body:{type:"root",children:[{type:b,tag:z,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:g},{type:b,tag:A,props:{},children:[{type:a,value:"dependencies 설치 "},{type:b,tag:w,props:{},children:[{type:a,value:"npm install nuxt-gmaps"}]}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:g},{type:b,tag:A,props:{},children:[{type:a,value:"modules 추가"}]},{type:a,value:g}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:r,props:{className:[B]},children:[{type:b,tag:c,props:{className:[C]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:D,props:{className:[E,"language-js"]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,F,G]},children:[{type:a,value:"export"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,F,G]},children:[{type:a,value:"default"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,I,s]},children:[{type:a,value:J}]},{type:a,value:"\n  modules"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:K}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"'nuxt-gmaps'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:"\n      key"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:K}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"'Google API Key값'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,I,s]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:z,props:{start:3},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"적용"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:r,props:{className:[B]},children:[{type:b,tag:c,props:{className:[C]},children:[{type:a,value:"components\u002Fexample.vue"}]},{type:b,tag:D,props:{className:[E,"language-html"]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"map_area"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:R}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"gmap"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"ref"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"gMap"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"language"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"ko"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":center"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":options"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"{fullscreenControl: false, styles: {height: 600}}"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":height"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"600"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":zoom"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"16"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:T}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":position"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:g}]}]}]}]},dir:"\u002Fvue",path:"\u002Fvue\u002F2021-09-16",extension:".md",createdAt:U,updatedAt:U}}],fetch:{"data-v-5e65b66b:0":{directory_list:["javascript","react","vue"]}},mutations:[]}}("text","element","span","token","punctuation","\"","\n","tag","attr-name","attr-value","attr-equals","=","\u003E","\n      "," ","\n  ","\n    ","div","operator","\u003C","\u003C\u002F","li","code",",","2021-09-16","ol","p","nuxt-content-highlight","filename","pre","line-numbers","keyword","module","{","spread","...",":","[","string","}","]","template","class","GMap","{lat: 37.502478393636146, lng: 127.0551555637546}","GMapMarker","2022-02-07T21:32:33.968Z")));