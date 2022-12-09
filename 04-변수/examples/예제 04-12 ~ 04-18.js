// 1. 올바른 예제, 쉼표로 한번에 선언할 수 있으나 권장 X
var person, $elem, _name, first_name, val1;

// 2. 한글이나 일본어 식별자도 사용 가능 그러나 권장 X
var 이름, なまえ;

// 3. 위배되는 선언문
var first-name; // SyntaxError: Unexpected token –
var 1st;        // SyntaxError: Invalid or unexpected token
var this;       // SyntaxError: Unexpected token this

// 4. 대소문자를 구별하기 때문에 3개는 각각 다른 선언문이다.
var firstname;
var firstName;
var FIRSTNAME;

// 5. 변수명을 명확히 써야한다.
var x = 3;       // NG. x 변수가 의미하는 바를 알 수 없다.
var score = 100; // OK. score 변수는 점수를 의미한다.

// 6. 별도의 주석이 있는 것은 변수 존재 목적을 명확히 드러내지 못하는 것
// 경과 시간. 단위는 날짜다
var d;                 // NG
var elapsedTimeInDays; // OK

// 7. 다음과 같은 4가지 유형의 네이밍 컨벤션이 자주 사용된다.

// 카멜 케이스 (camelCase)
var firstName;

// 스네이크 케이스 (snake_case)
var first_name;

// 파스칼 케이스 (PascalCase)
var FirstName;

// 헝가리언 케이스 (typeHungarianCase)
var strFirstName; // type + identifier
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블
