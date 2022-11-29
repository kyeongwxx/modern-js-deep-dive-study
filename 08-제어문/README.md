**제어문이란 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용한다. 기본적으로 코드는 위에서 아래 방향으로 순차적으로 실행되지만, 제어문을 사용하면 코드의 실행 흐름을 인위적으로 제어 가능하다. 제어문을 바르게 이해하는 것은 코딩 스킬에 많은 영향을 주기때문에 매우 중요하다.**

> # 8.1 블록문

- 블록문은 **0개 이상의 문을 중괄호로 묶은 것**이다. 코드 블록 또는 블록이라고 부른다.

- 단독으로 사용할 수도 있으나 **일반적으로 제어문이나 함수를 정의할 때 사용하는 것이 일반적**이다.

```
// 블록문
{
    var foo = 10;
}

// 제어문
var x = 1;
if(x < 10) {
    x++;
}

// 함수 선언문
function sum(a, b) {
    return a + b;
}
```

> # 8.2 조건문

- 조건문은 **주어진 조건식의 평가 결과에 따라 블록문의 실행을 결정**한다.

- 자바스크립트는 **if ... else문과 switch문으로 두 가지 조건문을 제공**한다.

### 8.2.1 if ... else 문

- if ... else 문은 **논리적 참 또는 거짓에 따라 실행할 코드 블록을 결정**한다.

- 조건식의 평가 결과가 true일 경우 if 문의 코드 블록이, false일 경우 else 문의 코드 블록이 실행된다.

```
// 조건문(if ... else 문) 기본 형식
if(조건식) {
    // 조건식이 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식이 거짓이면 이 코드 블록이 실행된다.
}

/*===================================*/
// 조건에 따라 실행될 코드 블록을 늘리고 싶으면 else if 문을 사용한다.
if(조건식1) {
    // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if(조건식2) {
    // 조건식2가 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}

/*===================================*/
var num = 2;
var kind;

// if문
if(num > 0) {
    kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if ... else 문
if(num > 0) {
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if ... else if 문
if(num > 0) {
    kind = '양수';
} else if ( num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); // 양수

/*===================================*/
// 만약 코드 블록 내의 문이 하나뿐이라면 중괄호 생략 가능
if(num > 0) kind = '양수';
else if(num < 0) kind = '음수';
else kind = '영';
console.log(kind); // 양수

/*===================================*/
// 삼항 조건 연산자로 바꿔 쓸 수 있다.
// x가 짝수이면 result 변수에 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.

// if ... else 문으로 표현
var x = 2;
var result;

if(x % 2) {
    result = '홀수';
} else {
    result = '짝수';
}
console.log(result); // 짝수

// 삼항 조건 연산자로 표현
var x = 2;
var result;

var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

// 삼항 조건 연산자로 표현하는데 경우의 수가 세 가지일경우
var num = 2;
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind); // 양수

```

### 8.2.2 switch 문

- switch문은 주어진 표현식을 평가하여 **그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮긴다**.

```
// 조건문(switch 문)기본 형식
// case 문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 그 뒤에 실행할 문들을 위치시킨다.
// switch 문의 표현식과 일치하는 case 문이 없다면 실행 순서는 default 문으로 이동한다. 이는 선택사항으로 사용할 수도 있고, 않을 수도 있다.
switch(표현식) {
    case 표현식1:
        // switch 문의 표현식과 표현식 1이 일치하면 실행될 문;
        break;
    case 표현식2:
        // switch 문의 표현식과 표현식 2이 일치하면 실행될 문;
        break;
    default:
        // switch 문의 표현식과 일치하는 case 문이 없을 때 실행될 문;
}

/*===================================*/
// 월을 영어로 변환한다. (11 => 'November')
// 실행결과를 보면 우리가 원하는 답이 나오지 않는 모습이 보인다.
// 왜냐하면 표현식의 평가 결과와 일치하는 case 문으로 실행 흐름이 이동하여 문을 실행한 것은 맞지만
// 문을 실행 후 switch 문을 탈출하지 않고 switch 문이 끝날때까지 이후의 모든 case 문과 default 문을 실행했기 때문이다.
// 이를 폴스루 라고 칭한다.
var month = 11;
var monthName;

switch(month) {
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
}
console.log(monthName) // Invalid month

// break 문은 코드 블록에서 탈출하는 역할을 한다.
// break 문이 없다면 case 문의 표현식과 일치하지 않더라도 실행 흐름이 다음 case 문으로 연이어 이동한다.
switch(month) {
    case 1: monthName = 'January';
        break;
    case 2: monthName = 'February';
        break;
    case 3: monthName = 'March';
        break;
    case 4: monthName = 'April';
        break;
    case 5: monthName = 'May';
        break;
    case 6: monthName = 'June';
        break;
    case 7: monthName = 'July';
        break;
    case 8: monthName = 'August';
        break;
    case 9: monthName = 'September';
        break;
    case 10: monthName = 'October';
        break;
    case 11: monthName = 'November';
        break;
    case 12: monthName = 'December';
        break;
    default: monthName = 'Invalid month';
}
console.log(monthName) // November

/*===================================*/
// 폴스루가 유용한 경우
// 윤년인지 판별해서 2월의 일수를 계산하는 식
var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch(month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 윤년 계산 알고리즘
        // 1. 연도가 4로 나누어 떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020...)는 윤년이다
        // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어 떨어지는 해 (2000, 2100, 2200...)는 평년이다.
        // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800...)는 윤년이다.
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}
console.log(days); // 29

```

> # 8.3 반복문

- 반복문은 조건식의 평가 결과가 참인 경우 코드 블록을 실행하면서, 그 후 **조건식을 다시 평가해 거짓일 때까지 반복해서 코드 블록을 다시 실행**한다.

- 자바스크립트는 세 가지 반복문인 for 문, while 문, do ... while 문을 제공한다.

### 8.3.1 for 문

- for 문은 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다.

- for 문은 **반복 횟수가 명확할 때** 주로 사용한다.

```
// for문 기본 방식
for(변수 선언문 또는 할당문; 조건식; 증감식;) {
    // 조건식이 참인 경우 반복 실행될 문;
}

/*===================================*/
// 1. for 문을 실행하면 먼저 변수 선언문 var i = 0이 실행됨
// 2. 그 다음은 조건식이 실행됨, 현재 i 변수의 값은 0 이므로 조건식의 평가 결과는 true
// 3. 조건식의 평가 결과가 true 이므로 코드 블록이 실행, 
// 4. 코드 블록의 실행이 종료되면 증감식 i++가 실행되어 i 변수의 값은 1이 된다.
// 5. 증감식 실행이 끝나면 다시 조건식이 실행된다. 여기서 반복되어 조건식이 false일떄까지 반복해서 실행

for(var i = 0; i < 2; i++) {
    console.log(i)
}
// 0
// 1

// 위 예제를 역으로 실행하면
for(var i = i; i >= 0; i--) {
    console.log(i)
}
// 0
// 1

/*===================================*/
// for 문 내에 for 문을 중첩해 사용 가능하다. 이를 중첩 for 문이라 한다.
// 두 눈의 합이 6이 되는 모든 경우의 수를 출력
for(var i = 1; i <= 6; i++) {
    for(var j = 1; j <= 6; j++) {
        if (i +  j === 6) console.log(`[${i}, ${j}]`);
    }
}
// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]
```

### 8.3.2 while 문

- while 문은 주어진 **조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행**한다.

- while 문은 **반복 횟수가 불명확할 때** 주로 사용한다.

```
// while 문
// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행
var count = 0;

while(count < 3) {
    console.log(count); // 0 1 2
    count++;
}

/*===================================*/
// 무한루프
var count = 0;

while (true) {
    console.log(count);
    count++;
    // count가 3이면 코드 블록을 탈출한다.
    if(count === 3) break;
} // 0 1 2
```

### 8.3.3 do ... while 문

- do ... while 문은 **코드 블록을 먼저 실행하고 조건식을 평가**한다. 따라서 **코드 블록은 무조건 한 번 이상 실행**된다.

```
// do ... while 문
// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행
var count = 0;

do {
    console.log(count); // 0 1 2
    count++;
} while (count < 3);
```

> # 8.4 break 문

- break문은 **레이블 문(식별자가 붙은 문), 반복문, switch 문의 코드 블록을 탈출**한다.

- 레이블 문, 반복문, switch 문의 코드 블록 외에 break문을 사용하면 문법 에러가 발생한다.

```
// break 문
if (true) {
    break; // Uncaught SyntaxError: Illegal break statement
}

/*===================================*/
// 레이블 문
// 프로그램의 실행 순서를 제어하는 데 사용한다.(switch 문의 case 문과 default 문도 레이블 문이다.)
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done!');

/*===================================*/
// outer 라는 식별자가 붙은 레이블 for 문
// 레이블 문은 중첩된 for 문 외부로 탈출할때 유용
// 하지만 레이블 문은 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문에 사용을 권장하진않음
outer: for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        // i + j === 3이먄 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if(i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}
console.log('Done!');

/*===================================*/
// 문자열에서 특정 문자의 인덱스를 검색하는 예
var string = 'Hello World';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회 가능
for(var i = 0; i < string.length; i++) {
    if(string[i] === search) {
        index = i;
        break;
    }
}
console.log(index); // 2
```

> # 8.5 continue 문

- 반복문의 **코드 블록 실행을 현 지점에서 중단하고, 반복문의 증감식으로 실행 흐름을 이동**시킨다. (탈출이 아님)

```
// continue 문
// 문자열에서 특정 문자의 개수를 세는 예
var string = 'Hello World';
var search = 'l';
var count = 0;

// continue 문을 사용하지 않았을 때(if 문 내에 코드를 작성해야함)
for(var i = 0; i < string.length; i++) {
    // 'l'이면 카운트 증가
    if(string[i] === search) {
        count++;
    }
}

// continue 문을 사용했을때(if 문 밖에 코드를 작성할수있음)
for(var i = 0; i < string.length; i++) {
    // 'l'이 아니면 카운트를 증가시키지 않음
    if(string[i] !== search) continue;
    count++;
}