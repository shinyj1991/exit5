__NUXT_JSONP__("/blog/java/5", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad){return {data:[{article:{slug:"5",title:"[Java] 상속의 개념",author:"신용준",date:"2021-03-07",toc:[{id:O,depth:u,text:P},{id:Q,depth:u,text:R},{id:S,depth:u,text:T},{id:U,depth:u,text:V}],body:{type:"root",children:[{type:b,tag:v,props:{id:O},children:[{type:b,tag:s,props:{href:"#%EC%83%81%EC%86%8Dinheritance%EC%9D%B4%EB%9E%80",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:P}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"상속(inheritance)이란 기존의 클래스에 기능을 추가하거나 재정의하여 새로운 클래스를 정의하는 것을 의미합니다.\n이러한 상속은 캡슐화, 추상화와 더불어 객체 지향 프로그래밍을 구성하는 중요한 특징 중 하나입니다."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"상속을 이용하면 기존에 정의되어 있는 클래스의 모든 필드와 메소드를 물려받아, 새로운 클래스를 생성할 수 있습니다.\n이때 기존에 정의되어 있던 클래스를 부모 클래스(parent class) 또는 상위 클래스(super class), 기초 클래스(base class)라고도합니다.\n그리고 상속을 통해 새롭게 작성되는 클래스를 자식 클래스(child class) 또는 하위 클래스(sub class), 파생 클래스(derived class)라고도 합니다."}]},{type:a,value:f},{type:b,tag:v,props:{id:Q},children:[{type:b,tag:s,props:{href:"#%EC%83%81%EC%86%8D%EC%9D%98-%EC%9E%A5%EC%A0%90",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:R}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"자바에서 클래스의 상속은 다음과 같은 장점을 가집니다."}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:E,props:{},children:[{type:a,value:"기존에 작성된 클래스를 재활용할 수 있습니다."}]},{type:a,value:f},{type:b,tag:E,props:{},children:[{type:a,value:"자식 클래스 설계 시 중복되는 멤버를 미리 부모 클래스에 작성해 놓으면, 자식 클래스에서는 해당 멤버를 작성하지 않아도 됩니다."}]},{type:a,value:f},{type:b,tag:E,props:{},children:[{type:a,value:"클래스 간의 계층적 관계를 구성함으로써 다형성의 문법적 토대를 마련합니다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:v,props:{id:S},children:[{type:b,tag:s,props:{href:"#%EC%9E%90%EC%8B%9D-%ED%81%B4%EB%9E%98%EC%8A%A4child-class",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:T}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"자식 클래스 (child class)란 부모 클래스의 모든 특성을 물려받아 새롭게 작성된 클래스를 의미합니다."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"자바에서 자식 클래스는 다음과 같은 문법을 통해 선언합니다."}]},{type:a,value:f},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,W]},children:[{type:b,tag:J,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:" 자식클래스이름 extend 부모클래스이름 "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"다음 그림은 부모 클래스와 자식 클래스 간의 포함 관계를 나타낸 그림입니다."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:"img",props:{alt:"image",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F63823237\u002F105988973-cc845780-60e3-11eb-8565-38e1da62d28b.png"},children:[]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"이처럼 부모 클래스는 자식 클래스에 포함된 것으로 볼 수 있습니다.\n따라서 부모 클래스에 새로운 필드를 하나 추가하면, 자식 클래스에도 자동으로 해당 필드가 추가된 것처럼 동작합니다."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"자식 클래스에는 부모 클래스의 필드와 메소드만이 상속되며, 생성자와 초기화 블록은 상속되지 않습니다.\n또한, 부모 클래스의 접근 제어가 private이나 default로 설정된 멤버는 자식 클래스에서 상속받지만 접근할 수는 없습니다."}]},{type:a,value:f},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,W]},children:[{type:b,tag:J,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"private"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:a,value:" a "},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"10"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F private 필드"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:a,value:" b "},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"20"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"extends"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:a,value:" c "},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"30"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Y}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F System.out.println(a); \u002F\u002F Error"}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"b"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F 20"}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"c"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\u002F\u002F 30"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"Inheritance01"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"static"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:_}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"main"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"String"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:" args"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:M}]},{type:a,value:" ch "},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"new"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n        ch"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,"language-text"]},children:[{type:b,tag:J,props:{},children:[{type:a,value:"실행 결과\n20\n30\n"}]}]}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"자바에서 클래스는 단 한 개의 클래스만을 상속받는 단일 상속만이 가능합니다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:v,props:{id:U},children:[{type:b,tag:s,props:{href:"#object-%ED%81%B4%EB%9E%98%EC%8A%A4",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"자바에서 Object 클래스는 모든 클래스의 부모 클래스가 되는 클래스입니다.\n따라서 자바의 모든 클래스는 자동으로 Object 클래스의 모든 필드와 메소드를 상속받게 됩니다."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"즉, 자바의 모든 클래스는 별도로 extends 키워드를 사용하여 Object 클래스의 상속을 명시하지 않아도 Object 클래스의 모든 멤버를 자유롭게 사용할 수 있습니다.\n자바의 모든 객체에서 toString()이나 clone()과 같은 메소드를 바로 사용할 수 있는 이유가 해당 메소드들이 Object 클래스의 메소드이기 때문입니다."}]},{type:a,value:f},{type:b,tag:"br",props:{},children:[]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"출처 : "},{type:b,tag:s,props:{href:ad,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:ad}]}]}]},dir:"\u002Fjava",path:"\u002Fjava\u002F5",extension:".md",createdAt:"2021-10-27T23:19:31.295Z",updatedAt:"2021-10-27T23:19:31.299Z"}}],fetch:{"data-v-cb593ac8:0":{directory_list:["java","react","vue"]}},mutations:[]}}("text","element","span","token","punctuation","\n"," ","keyword","p",".","class-name","\n    ","{","}",";","comment","(",")","a","function",2,"h2","true",-1,"icon","icon-link","class","operator","=","public","li","div","nuxt-content-highlight","pre","line-numbers","code","int","number","Child","\n       ","상속inheritance이란","상속(inheritance)이란?","상속의-장점","상속의 장점","자식-클래스child-class","자식 클래스(child class)","object-클래스","Object 클래스","language-java","Parent","\u002F\u002F public 필드","\n\n","void","display","System","out","println","http:\u002F\u002Fwww.tcpschool.com\u002Fjava\u002Fjava_inheritance_concept")));