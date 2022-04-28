__NUXT_JSONP__("/blog/tech_react_2021-04-01", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP){return {data:[{article:{slug:as,title:"[React] 이벤트 처리하기",author:"신용준",date:as,toc:[{id:at,depth:2,text:au}],body:{type:"root",children:[{type:b,tag:r,props:{},children:[{type:a,value:"React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사합니다. 몇 가지 문법 차이는 다음과 같습니다."}]},{type:a,value:h},{type:b,tag:"ul",props:{},children:[{type:a,value:h},{type:b,tag:av,props:{},children:[{type:a,value:"React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용합니다."}]},{type:a,value:h},{type:b,tag:av,props:{},children:[{type:a,value:"JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달합니다."}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"예를 들어, HTML은 다음과 같습니다."}]},{type:a,value:h},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,af]},children:[{type:b,tag:I,props:{},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,e,X]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,ah,Y,ai]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"React에서는 약간 다릅니다."}]},{type:a,value:h},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,af]},children:[{type:b,tag:I,props:{},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:"onClick"}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,e,X]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,ah,Y,ai]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"또 다른 차이점으로, React에서는 false를 반환해도 기본 동작을 방지할 수 없습니다. 반드시 preventDefault를 명시적으로 호출해야 합니다. 예를 들어, 일반 HTML에서는 새 페이지를 여는 링크의 기본 동작ㅇ글 방지하기 위해 다음과 같은 코드를 작성합니다."}]},{type:a,value:h},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,af]},children:[{type:b,tag:I,props:{},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:"href"}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,e,X]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:"#"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,e,X]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,ah,Y,ai]},children:[{type:b,tag:c,props:{className:[d,J,A]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k,O]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aA]},children:[{type:a,value:"false"}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:"\n  Click me\n"},{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,z]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"React에서는 다음과 같이 작성할 수 있습니다."}]},{type:a,value:h},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,Q]},children:[{type:b,tag:I,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"ActionLink"}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n    e"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:"preventDefault"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,J,A]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,k,O]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:"a href"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"\"#\""}]},{type:a,value:" onClick"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ak}]},{type:a,value:" me\n    "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"여기서 e는 합성 이벤트입니다. React는 W3C 명세에 따라 합성 이벤트를 정의하기 때문에 브라우저 호환성에 대해 걱정할 필요가 없습니다. React 이벤트는 브라우저 고유 이벤트와 정확히 동일하게 동작하지는 않습니다."}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요가 없습니다. 대신, 엘리먼트가 처음 렌더링될 때 리스너를 제공하면 됩니다."}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"ES6 클래스를 사용하여 컴포넌트를 정의할 때, 일반적인 패턴은 이벤트 핸들러를 클래스의 메서드로 만드는 것입니다. 예를 들어, 다음 Toggle 컴포넌트는 사용자가 \"ON\"과 \"OFF\" 상태를 토글할 수 있는 버튼을 렌더링합니다."}]},{type:a,value:h},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,Q]},children:[{type:b,tag:I,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:am}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"constructor"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"super"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aA]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"\u002F\u002F 콜백에서 'this'가 작동하려면 아래와 같이 바인딩 해주어야 합니다."}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:"setState"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ab,g]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n      isToggleOn"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"!"}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ap}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k,O]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"?"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"'ON'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"'OFF'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"ReactDOM"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,"dom","variable"]},children:[{type:a,value:"document"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:"getElementById"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"'root'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"JSX 콜백 안에서 this의 의미에 대해 주의해야 합니다. Javascript에서 클래스 메서드는 기본적으로 바인딩되어 있지 않습니다. this.handleClick을 바인딩하지 않고 onClick에 전달하였다면, 함수가 실제 호출될 때 this는 undefined가 됩니다."}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"이는 React만의 특수한 동작이 아니며, Javascript에서 함수가 작동하는 방식의 일부입니다. 일반적으로 onClick={this.handleClick}과 같이 뒤에 ()를 사용하지 않고 메서드를 참조할 경우, 해당 메서드를 바인딩 해야 합니다."}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"만약 bind를 호출하는 것이 불편하다면, 이를 해결할 수 있는 두 가지 방법이 있습니다. 실험적인 퍼블릭 클래스 필드 문법을 사용하고 있다면, 클래스 필드를 사용하여 콜백을 올바르게 바인딩할 수 있습니다."}]},{type:a,value:h},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,Q]},children:[{type:b,tag:I,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"LoggingButton"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:am}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"\u002F\u002F 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다."}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"\u002F\u002F 주의 : 이 문법은 *실험적인* 문법입니다."}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,"function-variable",l]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ab,g]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,J,A]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k,O]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ak}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"Create React App에서는 이 문법이 기본적으로 설정되어 있습니다."}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"만약 클래스 필드 문법을 사용하고 있지 않다면, 콜백에 화살표 함수를 사용하는 방법도 있습니다."}]},{type:a,value:h},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,Q]},children:[{type:b,tag:I,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"LogginButton"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:am}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,J,A]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"\u002F\u002F 이 문법은 'this'가 handleClick 내에서 바인딩되도록 합니다."}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,k,O]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ab,g]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ak}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"이 문법의 문제점은 LogginButton이 렌더링될 때마다 다른 콜백이 생성된다는 것입니다. 대부분의 경우 문제가 되지 않으나, 콜백이 하위 컴포넌트에 props로서 전달된다면 그 컴포넌트들은 추가로 다시 렌더링을 수행할 수도 있습니다. 이러한 종류의 성능 문제를 피하고자, 생성자 안에서 바인딩하거나 클래스 필드 문법을 사용하는 것을 권장합니다."}]},{type:a,value:h},{type:b,tag:"h2",props:{id:at},children:[{type:b,tag:N,props:{href:"#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%ED%95%B8%EB%93%A4%EB%9F%AC%EC%97%90-%EC%9D%B8%EC%9E%90-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0",ariaHidden:aE,tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:au}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"루프 내부에서는 이벤트 핸들러에 추가적인 매개변수를 전달하는 것이 일반적입니다. 예를 들어, id가 행의 ID일 경우 다음 코드가 모두 작동합니다."}]},{type:a,value:h},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,Q]},children:[{type:b,tag:I,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ab,g]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"id"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:" e"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,l,p]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:" id"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"위 두 줄은 동등하며 각각 화살표 함수와 Function.prototype.bind를 사용합니다."}]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"두 경우 모두 React 이벤트를 나타내는 e 인자가 ID 뒤에 두 번째 인자로 전달됩니다. 화살표 함수를 사용하면 명시적으로 인자를 전달해야 하지만 bind를 사용할 경우 추가 인자가 자동으로 전달됩니다."}]},{type:a,value:h},{type:b,tag:"br",props:{},children:[]},{type:a,value:h},{type:b,tag:r,props:{},children:[{type:a,value:"출처 : "},{type:b,tag:N,props:{href:aL,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:aL}]}]}]},dir:"\u002Ftech\u002Freact",path:"\u002Ftech\u002Freact\u002F2021-04-01",extension:".md",createdAt:aM,updatedAt:aM}}],fetch:{"0":{category_list:[{name:aN,path:aN,depth:aO,child:[{name:"place",path:"life_place",depth:ae,child:[]}]},{name:aP,path:aP,depth:aO,child:[{name:Y,path:"tech_javascript",depth:ae,child:[]},{name:"react",path:"tech_react",depth:ae,child:[]},{name:"vue",path:"tech_vue",depth:ae,child:[]}]}]}},mutations:[["set_loading",false]]}}("text","element","span","token","punctuation"," ","operator","\n","(",")","keyword","function",".","{","}","property-access","\u003E","p","\n  ","\u003C","\n    ","=","method","this",";","tag","class-name","maybe-class-name","handleClick","button","div","nuxt-content-highlight","pre","line-numbers","code","console","string","\u002F","\"","a","control-flow","return","language-js","\n\n  ","\n      ","button onClick",",","attr-name","attr-value","attr-equals","javascript","log","parameter","state","comment","arrow","=\u003E","render",1,"language-html","special-attr","value","language-javascript","\u003C\u002F","Click","class","extends","React","Component","isToggleOn",":","\n        ","2021-04-01","이벤트-핸들러에-인자-전달하기","이벤트 핸들러에 인자 전달하기","li","onclick","activateLasers","\n  Activate Lasers\n","'The link was clicked.'","boolean","e","Toggle","props","true","bind","'this is:'"," me\n      ","deleteRow","Delete","Row","https:\u002F\u002Freactjs.org\u002Fdocs\u002Fhandling-events.html","2022-04-28T05:57:44.468Z","life",0,"tech")));