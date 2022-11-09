# 자바스크립트 개발 환경과 실행방법

- 모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있다.(node.js도 마찬가지)

* **BUT** 용도가 다르다!

브라우저는 HTML, CSS, 자바스크립트를 실행해 웹페이즈를 렌더링하는 것이 목적

Node.js는 브라우저 외부에서 자바스크립트 실행환경을 제공하는 것이 주된 목적

- 그래서 다른점은?

* 브라우저는 파싱된 HTML 요소를 선택하거나 조작하는 기능의 집합인 **DOM API** 를 기본적으로 제공 (Node.js는 아님)

반대로 Node.js에서는 파일을 생성하고 수정할 수 있는 파일시스템 제공(브라우저는 아님)

즉,
브라우저는 **EMCA SCRIPT** , Client-Side APIS
Node.js는 **EMCA SCRIPT** , Node.js HOST APIS

### 클라이언트 사이트 WEB API란?

- DOM, BOM, Canvas, XMLHTTPRequest, fetch, requestAnimationFrame, SVG, webStorage, web component, web worker 등

* 프로젝트 규모가 커짐에 따라 React, Angular, Lodash 같은 프레임워크 또는 라이브러리를 도입하거나 Babel, Webpack, Eslint 등 여러가지 도구가 필요하다
  이때, **Node.js** 와 **npm** 이 필요하다.

### npm(node package manager)

- 자바스크립트 패키지 매니저
- Node.js에서 사용할 수 있는 모듈들을 패키지화해서 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI를 제공한다.

* Code Runner 실행 단축키

- `Ctrl + Alt + N`
