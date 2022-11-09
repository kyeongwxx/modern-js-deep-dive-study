> # 3.1 자바스크립트 실행 환경

- 모든 브라우저와 Node.js는 **자바스크립트 엔진을 내장** 하고있기때문에 자바스크립트를 해석하고 실행할 수 있다.

하지만 브라우저와 Node.js는 용도가 다르다는 점을 명시하자.

브라우저는 **HTML, CSS, Javascript를 실행해 웹페이지를 브라우저 화면에 렌더링하는 것이 주된 목적**이지만, Node.js는 **브라우저 외부에서 Javascript 실행 환경을 제공하는 것이 주된 목적**이다.

> # 3.2 웹 브라우저

- 익스플로어, 파이어폭스, 웨일(네이버) 등등 많은 웹 브라우저가 있지만 **크롬 브라우저 사용하는 것을 권장**한다. 크롬은 ECMAScript 사양을 준수하는 것은 물론, 시장 점유율도 가장 높기 때문!!

_크롬 설치링크_
https://www.google.com/intl/ko_kr/chrome/


### 3.2.1 개발자 도구

- 크롬 브라우저는 개발자 도구를 제공한다. 웹 애플리케이션 개발에 필수적이므로 잘 알아두자

![](https://velog.velcdn.com/images/dnwndalsrl/post/090d957a-8203-415a-bb54-3e0fa1a84fc0/image.png)

개발자 도구는 웹 개발에 유용한 다양한 기능을 제공한다. 그 중 자주 사용하는 기능은 Elements, Console, Sources, Network, Application 이 있다.

### 3.2.2 콘솔(Console)

- Console 패널은 자바스크립트 코드에서 에러가 발생해 애플리케이션이 정상적으로 동작하지 않을 때 가장 우선적으로 봐야할 곳이다. 구현단계에서는 항상 콘솔을 열어둔 상태에서 개발하는 습관을 가지는것이 좋다.

- 굳이 에러가 발생한 경우가 아니라도, 코드의 실행 결과를 확인하면 개발을 진행하기 위해 Console 패널을 사용하는 경우가 많다.(console.log 활용)

![](https://velog.velcdn.com/images/dnwndalsrl/post/12bca3c9-366b-4834-ad63-ee652ed8116d/image.png)

이처럼 개발자 도구의 Console 패널을 활용해 다양한 자바스크립트 코드를 테스트 해볼수 있고 결과를 볼수있다. 맨 아래는 에러가 나왔을 시 에러의 내용이 콘솔에 출력되는 모습이다.

### 3.2.3 브라우저에서 자바스크립트 실행
- 브라우저는 HTML 파일을 로드하면 script 태그에 포함된 자바스크립트 코드를 실행한다.

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset = "UTF-8">
        <title>Counter</title>
    </head>
    <body>
        <div id = "counter">0</div>
        <button id = "increase">+</button>
        <button id = "decrease">-</button>
        <script>
            // 에러를 발생시키는 코드 $counter = 선택자는 'counter-x'가 아닌 'counter'를 지정해야 함
            const $counter = document.getElementById("counter-x")
            const $increase = document.getElementById("increase")
            const $decrease = document.getElementById("decrease")

            let num = 0;
            const render = function () { $counter.innerHTML = num; };

            $increase.onclick = function() {
                num++;
                console.log('increase 버튼 클릭', num)
                render();
            };

            $decrease.onclick = function() {
                num--;
                console.log("decrease 버튼 클릭", num);
                render();
            };
        </script>
    </body>
</html>

```
해당 코드를 작성한 html파일을 브라우저로 연 후 콘솔로 확인해보자.

![](https://velog.velcdn.com/images/dnwndalsrl/post/617e2c7e-9ed2-44dd-b912-f38c850a89c8/image.png)

html 파일을 더블클릭하면 브라우저에서 확인할 수 있다. 버튼을 클릭하니까 에러가 발생하기는 했지만, console.log가 실행된 것은 확인이 가능하다.

### 3.2.4 디버깅

- 위와 같이 에러가 발생했을때는 디버깅을 활용하면 에러를 파악하기에 시간을 절약할 수 있다.

![](https://velog.velcdn.com/images/dnwndalsrl/post/dfcce4ac-3a4e-4204-90fb-6c88d5dfedd5/image.png)

자바스크립트를 디버깅 할 수 있는 패널은 Source 패널이다.
Source 패널로 들어가보면 에러가 발생한 위치에 빨간색 밑줄로 표시가되고, 그 위에 마우스를 올려다보면 에러 정보가 표시되는 모습을 확인할 수 있다.

_크롬 브라우저 개발자 도구 디버깅 하는 방법_
https://mainia.tistory.com/2801

> # 3.3 Node.js

- 프로젝트의 규모가 커짐에 따라 프레임워크, 라이브러리, 여러 가지 도구를 사용해야 할 때는 Node.js와 npm이 필요하다

### 3.3.1 Node.js와 npm 소개

- Node.js는 2장에서 설명했다시피, 브라우저 이외의 한경에서 자바스크립트를 동작 시킬 수 있는 자바스크립트 실행 환경이다.

- npm(node package manager)은 자바스크립트 패키지 매니저다. npm을 통하여 다양한 패키지를 설치하거나, 공개할 수도 있다


### 3.3.2 Node.js 설치

- 들어가면 두가지 다운로드 버튼이 보이는데 LTS버전은 장기적으로 안정화된 버전이고, Current버전은 최신 기능을 제공하지만 업데이트가 발생하는 버전으로 안정적이지 않은 버전이다. 실제 개발환경이라면 LTS버전을 설치하는 것이 좋다

_Node.js 설치경로_
https://nodejs.org/ko/

설치가 완료되면 터미널에서 버전을 확인할 수 있다

![](https://velog.velcdn.com/images/dnwndalsrl/post/209b4733-0807-4de1-883e-5efe3f7994bb/image.png)

### 3.3.3 Node.js REPL

- REPL(Read Eval Print Loop)는 Node.js가 제공하는 간단한 자바스크립트 코드를 실행 시켜 결과를 확인해볼수있는 기능이다.

![](https://velog.velcdn.com/images/dnwndalsrl/post/d66b45e4-cc06-439d-b8bf-6294e586206f/image.png)

파일을 실행하려면 $ node index.js 이런식으로 쓰면 된다(.js는 생략하여도 된다고한다)

> # 3.4 Visual Studio Code

- 애플리케이션을 개발하는 단계에서 우리가 지금까지 사용했던 방법은 부족함이 많다. 그러므로 코드 에디터를 활용해 강력하고 편리한 기능을 활용해보자. 다양한 코드 에디터가 있지만 그 중에서도 가장 인기많은 **Visual Studio Code**를 사용해보자

- 비쥬얼 스튜디오코드는 줄여서 VSCode라고 부른다.

### 3.4.1 비쥬얼 스튜디오 코드 설치

_비쥬얼 스튜디오 코드 설치경로_
https://code.visualstudio.com/

설치가 완료된 후 실행시켜보자
![](https://velog.velcdn.com/images/dnwndalsrl/post/ee18a821-b094-454c-b702-26967482e251/image.png)

### 3.4.2 내장 터미널

- VSCode는 내장 터미널이 내장되어있다
![](https://velog.velcdn.com/images/dnwndalsrl/post/42375de8-2d90-43b6-b1bb-9074ac7274a4/image.png)

이런식으로 Node.js 명령어로 자바스크립트 파일을 실행시킬 수 있다.

### 3.4.3 확장 플러그인

- **Code Runner**라는 확장 플러그인이 있다. 이 플러그인은 단축키를 사용해 현재 표시된 자바스크립트 파일을 실행할 수 있는 플러그인이다.
Node.js 환경을 사용해 자바스크립트를 실행한다는거를 명시하자

- **Live Server**라는 이름의 확장 플러그인이 있다. 이 플러그인은 브라우저에서 실행해야할 파일이 생길때, 이 플러그인을 사용하면 소스코드를 수정할 때마다 수정 사항을 브라우저에 자동으로 반영해주기 때문에 매우 편리하다.(수정사항이 바뀔때마다 새로 열어줄 필요가 없음)