__NUXT_JSONP__("/article/dev/java-4", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH){return {data:[{article:{slug:"4",title:"[Java] 초기화 블록",author:"신용준",toc:[{id:ap,depth:Y,text:aq},{id:ar,depth:Y,text:as},{id:at,depth:au,text:Z},{id:av,depth:au,text:_},{id:aw,depth:Y,text:ax}],body:{type:"root",children:[{type:b,tag:$,props:{id:ap},children:[{type:b,tag:J,props:{href:"#%ED%95%84%EB%93%9C%EC%9D%98-%EC%B4%88%EA%B8%B0%ED%99%94",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:aq}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"자바에서 필드는 초기화하지 않아도 변수의 타입에 맞는 초깃값으로 자동 초기화됩니다.\n하지만 지역 변수와 마찬가지로 적절한 값으로 초기화한 후에 사용하는 것이 좋습니다."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"이러한 필드는 지역 변수와는 달리 여러 가지 방법으로 초기화할 수 있습니다.\n자바에서는 필드를 초기화하기 위해 다음과 같은 방법들을 제공합니다."}]},{type:a,value:g},{type:b,tag:aa,props:{},children:[{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"명시적 초기화"}]},{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"생성자를 이용한 초기화"}]},{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"초기화 블록을 이용한 초기화"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"명시적 초기화는 지역 변수를 초기화하는 방법과 마찬가지로 필드를 선언과 동시에 초기화하는 방법입니다."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,R]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"Field"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ay}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:az}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"생성자를 이용한 초기화는 객체의 생성과 동시에 필드를 초기화하는 방법입니다.\n따라서 생성자를 이용한 초기화는 인스턴스를 생성할 때까지 필드를 초기화할 수 없습니다."}]},{type:a,value:g},{type:b,tag:$,props:{id:ar},children:[{type:b,tag:J,props:{href:"#%EC%B4%88%EA%B8%B0%ED%99%94-%EB%B8%94%EB%A1%9Dinitialization-block",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:as}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"필드를 초기화하는 마지막 방법으로는 자바에서 제공하는 초기화 블록(initialization block)을 이용하는 방법이 있습니다.\n초기화 블록이란 클래스 필드의 초기화만을 담당하는 중괄호({})로 둘러싸인 블록을 의미합니다.\n초기화 블록은 생성자보다 먼저 호출되며, static 키워드의 유무에 따라 다음과 같이 구분할 수 있습니다."}]},{type:a,value:g},{type:b,tag:aa,props:{},children:[{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:Z}]},{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:_}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"이러한 초기화 블록에는 다양한 명령문 및 제어문을 사용할 수 있으므로, 복잡한 초기화를 해야 할 경우 유용하게 사용됩니다."}]},{type:a,value:g},{type:b,tag:aA,props:{id:at},children:[{type:b,tag:J,props:{href:"#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%B4%88%EA%B8%B0%ED%99%94-%EB%B8%94%EB%A1%9D",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:Z}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"인스턴스 초기화 블록은 단순히 중괄호({})만을 사용하여 정의할 수 있습니다.\n이러한 인스턴스 초기화 블록은 생성자와 마찬가지로 인스턴스가 생성될 때마다 실행됩니다.\n하지만 언제나 인스턴스 초기화 블록이 생성자보다 먼저 실행됩니다."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"생성자와 인스턴스 초기호 ㅏ블록의 차이는 거의 없으므로 인스턴스 초기화 블록은 잘 사용되지 않습니다.\n단, 여러 개의 생성자가 있으면 모든 생성자에서 공통으로 수행되어야 할 코드를 인스턴스 초기화 블록에 포함하여 코드의 중복을 막을 수 있습니다."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"다음 예제는 인스턴스 초기화 블록을 이용하여 여러 생성자에서 공통된 부분을 분리하는 예제입니다."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,R]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u002F\u002F 인스턴스 초기화 블록"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"currentSpeed "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"modelName "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"modelYear "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"color "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"maxSpeed "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"return"}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"Member03"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:a,value:" myCar "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aD}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u002F\u002F 인스턴스 생성"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"myCar"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u002F\u002F 인스턴스 메소드의 호출"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,ao]},children:[{type:b,tag:E,props:{},children:[{type:a,value:"실행 결과\n0\n"}]}]}]},{type:a,value:g},{type:b,tag:aA,props:{id:av},children:[{type:b,tag:J,props:{href:"#%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%B4%88%EA%B8%B0%ED%99%94-%EB%B8%94%EB%A1%9D",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:_}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"클래스 초기화 블록은 인스턴스 초기화 블록에 static 키워드를 추가하여 정의할 수 있습니다.\n이러한 클래스 초기화 블록은 클래스가 처음으로 메모리에 로딩될 때 단 한 번만 실행됩니다."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"클래스 초기화 블록은 생성자나 인스턴스 초기화 블록으로는 수행할 수 없는 클래스 변수의 초기화를 수행할 때 사용됩니다."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"다음 예제는 클래스 초기화 블록을 이용하여 클래스 변수를 초기화하는 예제입니다."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,R]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:" classVar"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u002F\u002F 클래스 변수"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:" instanceVar"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u002F\u002F 인스턴스 변수"}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aE}]},{type:a,value:"\n        classVar "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"Member04"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u002F\u002F 클래스 변수에 접근"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,ao]},children:[{type:b,tag:E,props:{},children:[{type:a,value:"실행 결과\n10\n"}]}]}]},{type:a,value:g},{type:b,tag:$,props:{id:aw},children:[{type:b,tag:J,props:{href:"#%ED%95%84%EB%93%9C%EC%9D%98-%EC%B4%88%EA%B8%B0%ED%99%94-%EC%88%9C%EC%84%9C",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:ax}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"클래스의 필드는 앞서 살펴본 것과 같이 다양한 방법으로 초기화할 수 있습니다.\n따라서 같은 필드가 여러 번 초기화될 가능성이 있습니다."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"자바에서 필드는 다음과 같은 순서로 초기화됩니다."}]},{type:a,value:g},{type:b,tag:aa,props:{},children:[{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"클래스 변수 : 기본값 → 명시적 초기화 → 클래스 초기화 블록"}]},{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"인스턴스 변수 : 기본값 → 명시적 초기화 →인스턴스 초기화 블록 → 생성자"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"다음 예제는 클래스 변수와 인스턴스 변수가 초기화되는 순서를 보여주는 예제입니다."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,R]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ay}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:az}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aE}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u002F\u002F 인스턴스 초기화 블록을 이용한 초기화"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"30"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u002F\u002F 생성자를 이용한 초기화"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"Method05"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:a,value:" myInit "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aD}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"myInit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"instanceVar"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,ao]},children:[{type:b,tag:E,props:{},children:[{type:a,value:"실행 결과\n20\n30\n"}]}]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"위의 예제처럼 같은 필드를 여러 번 초기화하면, 제일 마지막으로 초기화한 값만이 남게 됩니다."}]},{type:a,value:g},{type:b,tag:"br",props:{},children:[]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"출처 : "},{type:b,tag:J,props:{href:aG,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:aG}]},{type:a,value:"{:target=\"_blank\"}"}]}]},dir:"\u002Fdev\u002Fjava",path:"\u002Fdev\u002Fjava\u002F4",extension:".md",createdAt:aH,updatedAt:aH}}],fetch:{"data-v-7fdb6c82:0":{categories:[{name:"dev",depth2:[{name:"java"},{name:"react"},{name:"vue"}]}]}},mutations:[]}}("text","element","span","token","punctuation"," ","\n","keyword","class-name",";","\n    ","{","}","p",".","operator","=","comment","(",")","int","\n        ","number","function","static","li","div","nuxt-content-highlight","pre","line-numbers","code","class","String","public","InitBlock","a","true",-1,"icon","icon-link","Car","private","this","language-java","10"," instanceVar ","\n\n    ","System","out","println",2,"인스턴스 초기화 블록","클래스 초기화 블록","h2","ol"," classVar ","20"," modelName"," modelYear"," color"," maxSpeed",",","\n\n","void","main","[","]"," args","language-text","필드의-초기화","필드의 초기화","초기화-블록initialization-block","초기화 블록(initialization block)","인스턴스-초기화-블록",3,"클래스-초기화-블록","필드의-초기화-순서","필드의 초기화 순서","\u002F\u002F 클래스 변수의 명시적 초기화","\u002F\u002F 인스턴스 변수의 명시적 초기화","h3"," currentSpeed","getSpeed","new","\u002F\u002F 클래스 초기화 블록을 이용한 초기화","classVar","http:\u002F\u002Fwww.tcpschool.com\u002Fjava\u002Fjava_member_initBlock","2021-09-07T01:19:16.800Z")));