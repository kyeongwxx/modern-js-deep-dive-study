> # 9.1 타입 변환이란?

- 자바스크립트의 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다. 이때 의도적으로 값의 타입을 변환하는 것을 **명시적 타입변환** 또는 **타입 캐스팅** 이라 한다.

```javascript
// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var x = 10;
var str = x.toString()
console.log(typeof str, str);; // string 10
console.log(typeof x, x) // number 10

// 암묵적 타입 변환(타입 강제 변환)
// 개발자의 의도와는 상관없이 표현식을 평가하는 도중에
// 자바스크립트 엔진에 의해 암묵적으로 타입이 자동변환되는것
var x = 10;
var str = x + '';
console.log(typeof str, str); // string 10
console.log(typeof x, x); // number 10

```

위의 예제처럼 **원시 값은 변경 불가능한 값이므로 변경할 수 없다**. 즉 타입 변환이란 **기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것**이다.

> # 9.2 암묵적 타입 변환

- 개발자의 의도와는 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 **암묵적으로 타입이 자동변환**되는것

- 암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 **원시 타입 중 하나로 타입을 자동 변환**한다.

### 9.2.1 문자열 타입으로 변환

- 문자열 연결 연산자의 역할을 문자열 값을 만드는 것이다.

- 그러므로 문자열 연결 연산자의 모든 피연산자는 코드의 문맥상 모두 문자열 타입이어야 한다.

```javascript
// 문자열 타입으로 변환
// 문자열 연결 연산자 표현식을 평가하기 위해 문자열 연결 연산자의 피연산자 중에서
// 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환한다.

1 + '2' // "12"
`1 + 1 = ${1 + 1}` // "1 + 1 = 2"

// 숫자 타입
0 + '' // "0"
-0 + '' // "0"
1 + '' // "1"
-1 + '' // "-1"
NaN + '' // "NaN"
Infinity + '' // "Infinity"
-Infinity + '' // "-Infinity"

// 불리언 타입
true + '' // "true"
false + '' // "false"

// null 타입
null + '' // "null"

// undefined  타입
undefined + '' // "undefined"

// 심벌 타입
(Symbol()) + '' // TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + '' // "[object Object]"
Math + '' // "[object Math]"
[] + '' // ""
[10, 20] + '' // "10, 20"
(function () {}) + '' // "function(){}"
Array + '' // "function Array() { [native code] }"
```

### 9.2.2 숫자 타입으로 변환

- 산술 연산자의 역할은 숫자 값을 만드는 것이다.

- 그러므로 산술 연산자의 모든 피연산자는 코드 문맥상 모두 숫자 타입이어야 한다.

```javascript
// 숫자 타입으로 변환
// 산술 연산자 표현식을 평가하기 위해 산술 연산자의 피연산자 중에서
// 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 반환한다.
// 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로
// 표현식의 평가 결과는 NaN이 된다.

// 문자열 타입
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN

// 불리언 타입
+true // 1
+false // 0

// null 타입
+null // 0

// undefined 타입
+undefined // NaN

// 심벌 타입
+Symbol() // TypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) // NaN

/*===================================*/

// 비교 연산자의 역할은 불리언 값을 만드는 것이다.
// > 비교 연산자는 피연산자의 크기를 비교하므로 모든 피연산자는 코드의 문맥상 모두 숫자 타입이여야 한다.

'1' > 0 // true
```

### 9.2.3 불리언 타입으로 변환

- 제어문 또는 삼항 조건 연산자의 조건식은 불리언 값, 즉 논리적 참/거짓으로 평가되어야 하는 표현식이다.

- 그러므로 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다.

```javascript
// 불리언 타입으로 변환
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값으로 구분한다.
// 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 Truthy값은 true로, Falsy 값은 false로 암묵적 타입 변환된다.
if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');
if(null) console.log('5');
// 2 4

/*===================================*/

// false로 평가되는 Falsy 값
// 이 외의 모든 값들은 true로 평가되는 Truthy 값이다.
false
undefined
null
0, -0
NaN
''(빈 문자열)
```

> # 9.3 명시적 타입 변환

- 명시적으로 타입을 변경하려면, 표준 빌트인 생성자 함수(String, Number...)를 new 연산자 없이 호출 하는 방법과, 빌트인 메서드를 사용하는 방법, 암묵적 타입 변환을 이용하는 방법이있다.


### 9.3.1 문자열 타입으로 변환

```javascript
// 문자열 타입으로 변환
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
String(1); // "1"
String(NaN); // "NaN"
String(Infinity); // "Infinity"
String(true); // "true"
String(false); // "false"

// 2. Object.prototype.toString 메서드를 사용하는 방법
(1).toString(); // "1"
(NaN).toString(); // "NaN"
(Infinity).toString(); // "Infinity"
(true).toString(); // "true"
(false).toString(); // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
1 + ''; // "1"
NaN + ''; // "NaN"
Infinity + ''; // "Infinity"
true + ''; // "true"
false + ''; // "false"
```

### 9.3.2 숫자 타입으로 변환

```javascript
// 숫자 타입으로 변환
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
Number('0') // 0
Number('-1') // -1
Number('10.53') // 10.53
Number(true) // 1
Number(false) // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능능
parseInt('0'); // 0
parseInt('-1') // -1
parseFloat('10.53') // 10.53

// 3. + 단항 산술 연산자를 이용하는 방법
+'0' // 0
+'-1' // -1
+'10.53' // 10.53
+true // 1
+false // 0

// 4. * 산술 연산자를 이용하는 방법
'0' * 1 // 0
'-1' * 1; // -1
'10.53' * 1 // 10.53
true * 1 // 1
false * 1 // 0
```

### 9.3.3 불리언 타입으로 변환

```javascript
// 불리언 타입으로 변환
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
Boolean('x') // true
Boolean('') // false
Boolean('false') // true
Boolean(0) // false
Boolean(1) // true
Boolean(NaN) // false
Boolean(Infinity) // true
Boolean(null) // false
Boolean(undefined) // false
Boolean({}) // true
Boolean([]) // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
!!'x' // true
!!'' // false
!!'false' // true
!!0 // false
!!1; // true
!!NaN // false
!!Infinity // true
!!null // false
!!undefined // false
!!{} // true
!![] // true
```

> # 9.4 단축 평가

### 9.4.1 논리 연산자를 사용한 단축 평가

- 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도있고, 아닐경우 2개의 피연산자 중 어느 한쪽으로 평가될수도 있다.

```javascript
// 아래의 예처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환하는것을 단축 평가라한다.
// 즉 단축평가는 표현식을 평가하는 도중에 평가결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.

// 논리 연산자를 사용한 단축 평가
// 논리곱 연산자는 두 개의 피연산자 모두 true로 평가될 때 true를 반환한다.
// 논리곱 연산자는 좌항에서 우항으로 평가가 진행된다.
// 첫번째 피연산자가 true로 평가되므로, 두 번째 피연산자까지 평가해보아야 표현식을 평가할 수 있다.
// 이때 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피 연산자 즉 문자열 'Dog'를 그대로 반환한다.
'Cat' && 'Dog' // "Dog"

/*===================================*/

// 논리합 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다.
// 첫 번째 피연산자가 true로 평가되므로, 두 번째 피연산자까지 평가해 보지 않아도 표현식을 평가할 수 있다.
// 이때 논리합 연산자는 논리 연산의 결과를 결정하는 첫 번째 피 연산자 즉 문자열 'Cat'을 그대로 반환한다.
'Cat' || 'Dog' // "Cat"

/*===================================*/

// 논리합 연산자의 예
'Cat' || 'Dog' // "Cat"
false || 'Dog' // "Dog"
'Cat' || false // "Cat"

// 논리곱 연산자의 예
'Cat' && 'Dog' // "Dog"
false && 'Dog' // false
'Cat' && false // false

/*===================================*/
// 어떤 조건이 Truthy 값일 때 무언가를 해야한다면 논리곱 연산자 표현식으로 if문을 대체할 수 있다.
var done = true;
var message = '';

// if문 사용
if(done) message = '완료';
// 논리곱 연산자 표현식 사용
message = done && '완료';
// 삼항 조건 연산자는 if ... else 문을 대체할수있음
message = done ? '완료' : '미완료';

/*===================================*/

// 단축 평가의 유용한 패턴
// 1. 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null
var value = elem && elem.value; // null

// 2. 함수 매개변수에 기본값을 설정할 때
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLengthOne(str) {
    str = str || '';
    return str.length;
}
getStringLengthOne(); // 0
getStringLengthOne('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLengthTwo(str = '') {
    return str.length;
}
getStringLengthTwo(); // 0
getStringLengthTwo('hi'); // 2

```

### 9.4.2 옵셔널 체이닝 연산자

- 옵셔널 체이닝 연산자(?)는 **좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다**.

```javascript
// 옵셔널 체이닝 연산자
var elem = null;
var value = elem?.value;
console.log(value); // undefined

/*===================================*/
// 옵셔널 체이닝 연산자가 도입되기 전에는 논리 연산자(&&)를 사용한 단축 평가를 사용했다.
var elem = null;
var value = elem && elem.value;
console.log(value); // null

/*===================================*/
// 논리 연산자 &&는 문자열의 길이(length)를 참조하지 못한다
var str = '';
var length = str && str.length;
console.log(length); // ""

// 옵셔널 체이닝 연산자를 쓰면 좌항 피연산자가 false 여도 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var str = '';
var length = str?.length;
console.log(length); // 0

```

### 9.4.3 null 병합 연산자

- null 병합 연산자(??)는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.

- 변수에 기본값을 설정할 때 유용하다

```javascript
// null 병합 연산자
var foo = null ?? 'default string';
console.log(foo); // default string

/*===================================*/
// null 병합 연산자가 도입되기 전에는 논리 연산자(||)를 사용한 단축 평가를 사용했다.
var foo = '' || 'default string';
console.log(foo); // default string

/*===================================*/
// 논리 연산자 ||는 Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있음
var foo = '' || 'default string';
console.log(foo); // default string

// null 병합 연산자는 좌항의 피연산자가 Falsy 값이더라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.
var foo = '' ?? 'default string';
console.log(foo); // ""
```