__NUXT_JSONP__("/article/dev/react-11", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$){return {data:[{article:{slug:"11",title:"[React] React로 사고하기",author:"신용준",date:"2021-04-17",toc:[{id:F,depth:s,text:G},{id:H,depth:s,text:I},{id:J,depth:s,text:K},{id:L,depth:3,text:M},{id:N,depth:s,text:O},{id:P,depth:s,text:Q},{id:R,depth:s,text:S},{id:T,depth:s,text:U}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"React는 Javascript로 규모가 크고 빠른 웹 애플리케이션을 만드는 가장 좋은 방법입니다. React는 Facebook과 Instagram을 통해 확장성을 입증했습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"React의 가장 멋진 점 중 하나는 앱을 설계하는 방식입니다. 이 문서를 통해 React로 상품들을 검색할 수 있는 데이터 테이블을 만드는 과정을 함께 생각해 봅시다."}]},{type:a,value:e},{type:b,tag:t,props:{id:F},children:[{type:b,tag:o,props:{href:"#%EB%AA%A9%EC%97%85%EC%9C%BC%EB%A1%9C-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0",ariaHidden:n,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:G}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"JSON API와 목업을 디자이너로부터 받았다고 가정해 봅시다. 목업은 다음과 같을 것입니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:V,props:{alt:W,src:"https:\u002F\u002Fko.reactjs.org\u002Fstatic\u002F1071fbcc9eed01fddc115b41e193ec11\u002Fd4770\u002Fthinking-in-react-mock.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"JSON API는 아래와 같은 데이터를 반환합니다."}]},{type:a,value:e},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"$49.99\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Football\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"$9.99\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Baseball\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"$29.99\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Basketball\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"$99.99\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"iPod Touch\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"$399.99\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"iPhone 5\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"$199.99\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Nexus 7\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:";"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:t,props:{id:H},children:[{type:b,tag:o,props:{href:"#1%EB%8B%A8%EA%B3%84--ui%EB%A5%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%84%EC%B8%B5-%EA%B5%AC%EC%A1%B0%EB%A1%9C-%EB%82%98%EB%88%84%EA%B8%B0",ariaHidden:n,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:I}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"우리가 할 첫 번째 일은 모든 컴포넌트(와 하위 컴포넌트)의 주변에 박스를 그리고 그 각각에 이름을 붙이는 것입니다. 디자이너와 함께 일한다면, 이것들을 이미 정해두었을 수 있으니 한번 대화해보세요! 디자이너의 Photoshop 레이어 이름이 React 컴포넌트의 이름이 될 수 있습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"하지만 어떤 것이 컴포넌트가 되어야 할지 어떻게 알 수 있을까요? 우리가 새로운 함수나 객체를 만들 때처럼 만드시면 됩니다. 한 가지 테크닉은 단일 책임 원칙입니다. 이는 하나의 컴포넌트는 한 가지 일을 하는게 이상적이라는 원칙입니다. 하나의 컴포넌트가 커지게 된다면 이는 보다 작은 하위 컴포넌트로 분리되어야 합니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"주로 JSON 데이터를 유저에게 보여주기 때문에, 데이터 모델이 적절하게 만들어졌다면, UI(컴포넌트 구조)가 잘 연결될 것입니다. 이는 UI와 데이터 모델이 같은 인포메이션 아키텍쳐(information architectur)를 가지는 경향이 있기 때문입니다. 각 컴포넌트가 데이터 모델의 한 조각을 나타내도록 분리해주세요."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:V,props:{alt:W,src:"https:\u002F\u002Fko.reactjs.org\u002Fstatic\u002Feb8bda25806a89ebdc838813bdfa3601\u002F6b2ea\u002Fthinking-in-react-components.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"다섯개의 컴포넌트로 이루어진 앱을 한번 봅시다."}]},{type:a,value:e},{type:b,tag:Y,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"FilterableProductTable(노란색) : 예시 전체를 포괄합니다."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"SearchBar(파란색) : 모든 유저의 입력(user input)을 받습니다."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"ProductTable(연두색) : 유저의 입력(user input)을 기반으로 데이터 콜렉션(data collection)을 필터링 해서 보여줍니다."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"ProductCategoryRow(하늘색) : 각 카테고리(category)의 헤더를 보여줍니다."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"ProductRow(빨강색) : 각각의 제품(product)에 해당하는 행을 보여줍니다."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"ProductTable을 보면 \"Name\"과 \"Price\"레이블을 포함한 테이블 헤더만을 가진 컴포넌트는 없습니다. 이 같은 경우, 데이터를 위한 독립된 컴포넌트를 생성할지 생성하지 않을지는 선택입니다. 이 예시에서는 ProductTable의 책임인 데이터 컬렉션(data collection)이 렌더링의 일부이기 때문에 ProductTable을 남겨두었습니다. 그러나 이 헤더가 복잡해지면 (즉 정렬을 위한 기능을 추가하는 등) ProductTableHeader 컴포넌트를 만드는 것이 더 합리적일 것입니다."}]},{type:a,value:e},{type:b,tag:t,props:{id:J},children:[{type:b,tag:o,props:{href:"#2%EB%8B%A8%EA%B3%84--react%EB%A1%9C-%EC%A0%95%EC%A0%81%EC%9D%B8-%EB%B2%84%EC%A0%84-%EB%A7%8C%EB%93%A4%EA%B8%B0",ariaHidden:n,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:K}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이제 컴포넌트 계층구조가 만들어졌으니 앱을 실제로 구현해볼 시간입니다. 가장 쉬운 방법은 데이터 모델을 가지고 UI를 렌더링은 되지만 아무 동작도 없는 버전을 만들어보는 것입니다. 이처럼 과정을 나누는 것이 좋은데 정적 버전을 만드는 것은 생각은 적게 필요하지만 타이핑은 많이 필요로 하고, 상호작용을 만드는 것은 생각은 많이 해야 하지만 타이핑은 적게 필요로 하기 때문입니다. 나중에 보다 자세히 살펴봅시다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"데이터 모델을 렌더링하는 앱의 정적 버전을 만들기 위해 다른 컴포넌트를 재사용하는 컴포넌트를 만들고 props 를 이용해 데이터를 전달해줍시다. props는 부모가 자식에게 데이터를 넘겨줄 때 사용할 수 있는 방법입니다. 정적 버전을 만들기 위해 state를 사용하지 마세요. state는 오직 상호작용을 위해, 즉 시간이 지남에 따라 데이터가 바뀌는 것에 사용합니다. 우리는 앱의 정적버전을 만들고 있기 때문에 지금은 필요하지 않습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"앱을 만들 때 하향식(top-down)이나 상향식(bottom-up)으로 만들 수 있습니다. 다시 말해 계층구조의 상층부에 있는 컴포넌트 (즉 FilterableProductTable 부터 시작하는 것)부터 만들거나 하층부에 있는 컴포넌트 (ProductRow) 부터 만들 수도 있습니다. 간단한 예시에서는 보통 하향식으로 만드는게 쉽지만 프로젝트가 커지면 상향식으로 만들고 테스트를 작성하면서 개발하기가 더 쉽습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이 단계가 끝나면 데이터 렌더링을 위해 만들어진 재사용 가능한 컴포넌트들의 라이브러리를 가지게 됩니다. 현재는 앱의 정적 버전이기 때문에 컴포넌트는 render() 메서드만 가지고 있을 것입니다. 계층구조의 최상단 컴포넌트 (FilterableProductTable)는 prop으로 데이터 모델을 받습니다. 데이터 모델이 변경되면 ReactDOM.render()를 다시 호출해서 UI가 업데이트 됩니다. UI가 어떻게 업데이트되고 어디에서 변경해야하는지 알 수 있습니다. React의 단방향 데이터 흐름(one-way data flow) (또는 단방향 바인딩(one-way binding))은 모든 것을 모듈화 하고 빠르게 만들어줍니다."}]},{type:a,value:e},{type:b,tag:"h3",props:{id:L},children:[{type:b,tag:o,props:{href:"#%EC%A7%A7%EC%9D%80-%EC%86%8C%EA%B0%9C--props-vs-state",ariaHidden:n,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:M}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"React에는 두 가지 데이터 \"모델\"인 props와 state가 있습니다. 이 둘 사이의 차이점을 이해하는것이 중요합니다."}]},{type:a,value:e},{type:b,tag:t,props:{id:N},children:[{type:b,tag:o,props:{href:"#3%EB%8B%A8%EA%B3%84--ui-state%EC%97%90-%EB%8C%80%ED%95%9C-%EC%B5%9C%EC%86%8C%ED%95%9C%EC%9D%98-%ED%95%98%EC%A7%80%EB%A7%8C-%EC%99%84%EC%A0%84%ED%95%9C-%ED%91%9C%ED%98%84-%EC%B0%BE%EC%95%84%EB%82%B4%EA%B8%B0",ariaHidden:n,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:O}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"UI를 상호작용하게 만들려면 기반 데이터 모델을 변경할 수 있는 방법이 있어야 합니다. 이를 React는 state를 통해 변경합니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"애플리케이션을 올바르게 만들기 위해서는 애플리케이션에서 필요로 하는 변경 가능한 state의 최소 집합을 생각해보어야 합니다. 여기서 핵심은 중복배제원칙입니다. 애플리케이션이 필요로 하는 가장 최소한의 state를 찾고 이를 통해 나머지 모든 것들이 필요에 따라 그때그때 계산되도록 만드세요. 예를 들어 TODO 리스트를 만든다고 하면, TODO 아이템을 저장하는 배열만 유지하고 TODO 아이템의 개수를 표현하는 state는 별도로 만들지 마세요. TODO 갯수를 렌더링해야 한다면 TODO 아이템 배열의 길이를 가져오면 됩니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"예시 애플리케이션 내 데이터들을 생각해봅시다. 애플리케이션은 다음과 같은 데이터를 가지고 있습니다."}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"제품의 원본 목록"}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:Z}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:_}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"필터링 된 제품들의 목록"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"각각 살펴보고 어떤 게 state가 되어야 하는지 살펴봅시다. 이는 각 데이터에 대해 아래의 세 가지 질문을 통해 결정할 수 있습니다."}]},{type:a,value:e},{type:b,tag:Y,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 state가 아닙니다."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"제품의 원본 목록은 props를 통해 전달되므로 state가 아닙니다. 검색어와 체크박스는 state로 볼 수 있는데 시간이 지남에 따라 변하기도 하면서 다른 것들로부터 계산될 수 없기 때문입니다.\n그리고 마지막으로 필터링된 목록은 state가 아닙니다. 제품의 원본 목록과 검색어, 체크박스의 값을 조합해서 계산해낼 수 있기 때문입니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"결과적으로 애플리케이션은 다음과 같은 state를 가집니다."}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:Z}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:_}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:t,props:{id:P},children:[{type:b,tag:o,props:{href:"#4%EB%8B%A8%EA%B3%84--state%EA%B0%80-%EC%96%B4%EB%94%94%EC%97%90-%EC%9E%88%EC%96%B4%EC%95%BC-%ED%95%A0-%EC%A7%80-%EC%B0%BE%EA%B8%B0",ariaHidden:n,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:Q}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"좋습니다. 이제 앱에서 최소한으로 필요한 state가 뭔지 찾아냈습니다. 다음으로는 어떤 컴포넌트가 state를 변경하거나 소유할지 찾아야 합니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"기억하세요: React는 항상 컴포넌트 계층구조를 따라 아래로 내려가는 단방향 데이터 흐름을 따릅니다. 어떤 컴포넌트가 어떤 state를 가져야 하는 지 바로 결정하기 어려울 수 있습니다. 많은 초보자가 이 부분을 가장 어려워합니다. 아래 과정을 따라 결정해 보세요."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"애플리케이션이 가지는 각각의 state에 대해서"}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"state를 기반으로 렌더링하는 모든 컴포넌트를 찾으세요."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"공통 소유 컴포넌트 (common owner component)를 찾으세요. (계층 구조 내에서 특정 state가 있어야 하는 모든 컴포넌트들의 상위에 있는 하나의 컴포넌트)."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"공통 혹은 더 상위에 있는 컴포넌트가 state를 가져야 합니다."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"state를 소유할 적절한 컴포넌트를 찾지 못하였다면, state를 소유하는 컴포넌트를 하나 만들어서 공통 오너 컴포넌트의 상위 계층에 추가하세요."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이 전략을 애플리케이션에 적용해봅시다."}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"ProductTable은 state에 의존한 상품 리스트의 필터링해야 하고 SearchBar는 검색어와 체크박스의 상태를 표시해주어야 합니다."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"공통 소유 컴포넌트는 FilterableProductTable입니다."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"의미상으로도 FilterableProductTable이 검색어와 체크박스의 체크 여부를 가지는 것이 타당합니다."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"좋습니다. state를 FilterableProductTable에 두기로 했습니다. 먼저 인스턴스 속성인 this.state = {filterText: '', inStockOnly: false} 를 FilterableProductTable의 constructor에 추가하여 애플리케이션의 초기 상태를 반영합니다. 그리고 나서 filterText와 inStockOnly를 ProductTable와 SearchBar에 prop으로 전달합니다. 마지막으로 이 props를 사용하여 ProductTable의 행을 정렬하고 SearchBar의 폼 필드 값을 설정하세요."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이제 애플리케이션의 동작을 볼 수 있습니다. filterText를 \"ball\"로 설정하고 앱을 새로고침 해보세요. 데이터 테이블이 올바르게 업데이트 된 것을 볼 수 있습니다."}]},{type:a,value:e},{type:b,tag:t,props:{id:R},children:[{type:b,tag:o,props:{href:"#5%EB%8B%A8%EA%B3%84--%EC%97%AD%EB%B0%A9%ED%96%A5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%9D%90%EB%A6%84-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0",ariaHidden:n,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:S}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"지금까지 우리는 계층 구조 아래로 흐르는 props와 state의 함수로써 앱을 만들었습니다. 이제 다른 방향의 데이터 흐름을 만들어볼 시간입니다. 계층 구조의 하단에 있는 폼 컴포넌트에서 FilterableProductTable의 state를 업데이트할 수 있어야 합니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"React는 전통적인 양방향 데이터 바인딩(two-way data binding)과 비교하면 더 많은 타이핑을 필요로 하지만 데이터 흐름을 명시적으로 보이게 만들어서 프로그램이 어떻게 동작하는지 파악할 수 있게 도와줍니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"현재 상태에서 input box를 체크하거나 키보드를 타이핑할 경우 React가 입력을 무시하는 것을 확인할 수 있습니다. 이는 input태그의 value속성이 항상 FilterableProductTable에서 전달된 state와 동일하도록 설정했기 때문입니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"우리가 원하는 것이 무엇인지를 한번 생각해봅시다. 우리는 사용자가 폼을 변경할 때마다 사용자의 입력을 반영할 수 있도록 state를 업데이트하기를 원합니다. 컴포넌트는 그 자신의 state만 변경할 수 있기 때문에 FilterableProductTable는 SearchBar에 콜백을 넘겨서 state가 업데이트되어야 할 때마다 호출되도록 할 것입니다. 우리는 input에 onChange 이벤트를 사용해서 알림을 받을 수 있습니다. FilterableProductTable에서 전달된 콜백은 setState()를 호출하고 앱이 업데이트될 것입니다."}]},{type:a,value:e},{type:b,tag:t,props:{id:T},children:[{type:b,tag:o,props:{href:"#%EC%9D%B4%EA%B2%8C-%EC%A0%84%EB%B6%80%EC%9E%85%EB%8B%88%EB%8B%A4",ariaHidden:n,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이 글을 통해 React를 가지고 애플리케이션과 컴포넌트를 만드는 데에 대한 사고방식을 얻어갈 수 있기를 바랍니다. 이전보다 더 많은 타이핑을 해야 할 수 있지만, 코드를 쓸 일보다 읽을 일이 더 많다는 사실을 기억하세요. 모듈화되고 명시적인 코드는 읽을 때 조금 덜 어렵습니다. 큰 컴포넌트 라이브러리를 만들게 되면 이 명시성과 모듈성에 감사할 것이며 코드 재사용성을 통해 코드 라인이 줄어들기 시작할 것입니다. :)"}]},{type:a,value:e},{type:b,tag:"br",props:{},children:[]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"출처 : "},{type:b,tag:o,props:{href:$,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:$}]}]}]},dir:"\u002Fdev\u002Freact",path:"\u002Fdev\u002Freact\u002F11",extension:".md",createdAt:"2021-09-14T02:27:36.180Z",updatedAt:"2021-09-14T02:27:36.184Z"}}],fetch:{"data-v-4b51cfe8:0":{categories:[{name:"dev",depth2:[{name:"css"},{name:"java"},{name:"react"},{name:"vue"}]},{name:"etc",depth2:[{name:"dystopia"}]}]}},mutations:[]}}("text","element","span","token","\n","punctuation","p","operator",":"," ",",","li","string","true","a",-1,"icon","icon-link",2,"h2","\n  ","{","category"," price"," stocked","boolean"," name","}","ul","\"Sporting Goods\"","\"Electronics\"","목업으로-시작하기","목업으로 시작하기","1단계--ui를-컴포넌트-계층-구조로-나누기","1단계 : UI를 컴포넌트 계층 구조로 나누기","2단계--react로-정적인-버전-만들기","2단계 : React로 정적인 버전 만들기","짧은-소개--props-vs-state","짧은 소개 : Props vs State","3단계--ui-state에-대한-최소한의-하지만-완전한-표현-찾아내기","3단계 : UI state에 대한 최소한의 (하지만 완전한) 표현 찾아내기","4단계--state가-어디에-있어야-할-지-찾기","4단계 : state가 어디에 있어야 할 지 찾기","5단계--역방향-데이터-흐름-추가하기","5단계 : 역방향 데이터 흐름 추가하기","이게-전부입니다","이게 전부입니다.","img","","false","ol","유저가 입력한 검색어","체크박스의 값","https:\u002F\u002Freactjs.org\u002Fdocs\u002Fcomposition-vs-inheritance.html")));