> # 10.1 객체란?

- 객체는 **0개 이상의 프로퍼티로 구성된 집합**이며 프로퍼티는 **키와 값으로 구성**된다.

- **원시 값을 제외한 나머지 값(함수, 배열, 정규표현식 등)**은 모두 객체다

- 원시 값은 변경 불가능한 값이지만, 객체 타입의 값, 즉 **객체는 변경 가능한 값**이다.

```javascript
// 객체의 형태
// 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다.
// 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부른다.
// 이처럼 객체는 프로퍼티와 메서드를 모두 포함할 수 있기 때문에 상태와 동작을 하나의 단위로 구조화할 수 있어 유용하다.
var person = {
    // 프로퍼티: 객체의 상태를 나타내는 값(data)
    name: 'Lee',
    age: 20,

    // 메서드: 프로퍼티를 참조하고 조작할 수 있는 동작
    increase: function() {
        this.age++;
    }
}
```

> # 10.2 객체 리터럴에 의한 객체 생성

- 자바스크립트는 프로토타입 기반 객체지향 언어로서 다양한 객체 생성 방법을 지원한다. (객체 리터럴, Object 생성자 함수, 생성자 함수, Object.create 메서드, 클래스(ES6))

```javascript
// 객체 리터럴을 사용해서 생성
// 중괄호({...}) 내에 0개 이상의 프로퍼티를 정의한다.
// 변수에 할당되는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성한다.
var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name},`);
    }
};
console.log(typeof person); // object
console.log(person); // { name: "Lee", sayHello: f }

/*===================================*/
// 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다.
// 객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다.
// 객체 리터럴은 값으로 평가되는 표현식이므로 닫는 중괄호 뒤에는 세미콜론을 붙인다.
var empty = {}; // 빈 객체
console.log(typeof empty); // object
```

객체 리터럴 외의 객체 생성 방식은 모두 함수를 사용해 객체를 생성한다. 이 방법들은 뒷 장의 함수에 대해 알아본 이후에 설명을 해준다고한다.

> # 10.3 프로퍼티

- 객체는 **프로퍼티의 집합**이며, 프로퍼티는 **키와 값으로 구성**된다.

```javascript
// 프로퍼티
// 프로퍼티를 나열할 때는 쉼표로 구분한다. 
// 프로퍼티 키: 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
// 프로퍼티 값: 자바스크립트에서 사용할 수 있는 모든 값
var person = {
    name: 'Lee',
    age: 20
};

/*===================================*/
// 프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로서 식별자 역할을 한다.
// 반드시 식별자 네이밍 규칙을 따라야 하는 것은 아니지만, 미묘한 차이가 있다.
// 심벌 값도 프로퍼티 키로 사용할 수 있지만 일반적으로 문자열을 사용한다.
// 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다.
var person = {
    firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name' : 'Lee' // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};
console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}

/*===================================*/
// 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성가능
// 이 경우에는 프로퍼티 키로 사용할 표현식을 대괄효로 묶어야한다.
var obj = {};
var key = 'hello';
obj[key] = 'world';
console.log(obj); // {hello: "world"}

/*===================================*/
// 빈 문자열을 프로퍼티 키로 사용해도 에러가 발생하지 않음
var foo = {
    '': ''
};
console.log(foo); // {"": ""} 

/*===================================*/
// 프로퍼티 키에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다.
var foo = {
    // 프로퍼티 키로 숫자 리터럴을 사용하면 따옴표는 붙지 않지만, 내부적으로는 문자열로 변환된다.
    0: 1,
    1: 2,
    2: 3
};
console.log(foo); // {0: 1, 1: 2, 2: 3}

/*===================================*/
// 예약어를 프로퍼티 키로 사용해도 에러가 발생하지는 않음
var foo = {
    var: '',
    function: ''
};
console.log(foo) // {var: "", function: ""}

/*===================================*/
// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어씌움
var foo = {
    name: 'Lee',
    name: 'Kim'
};
console.log(foo) // {name: "Kim"}
```

> # 10.4 메서드

- **함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다**.

- 프로퍼티 값이 함수일 경우 **일반 함수와 구분하기 위해 메서드라 부른다**.

- 즉 **메서드는 객체에 묶여 있는 함수**를 의미한다.

```javascript
// 메서드
var circle = {
    // 프로퍼티 
    radius: 5,
    // 메서드
    getDiameter: function() {
        return 2 * this.radius; // this는 circle을 가리킨다.
    }
};
console.log(circle.getDiameter()); // 10
```

> # 10.5 프로퍼티 접근

- 마침표 프로퍼티 접근 연산자(.)을 사용하는 마침표 표기법

- 대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법

```javascript
// 프로퍼티 접근
var person = {
    name: 'Lee'
};

// 마침표 표기법
console.log(person.name); // Lee

// 대괄호 표기법
// 대괄호 프로퍼티 접근 연사자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.
// 감싸지 않았을경우 자바스크립트 엔진은 식별자로 해석하여 ReferenceError가 발생한다.
console.log(person['name']); // Lee

/*===================================*/
// 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.
var person = {
    name: 'Lee'
};
console.log(person.age); // undefined

/*===================================*/
// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름이면 반드시 대괄호 표기법을 사용해야한다.
// 단 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
var person = {
    'last-name': 'Lee',
    1: 10
};
person.'last-name'; // SyntaxError: Unexpected string
person.last-name; // 브라우저 환경: NaN
                  // Node.js 환경: ReferenceError: name is not defined
person[last-name]; // ReferenceError: last is not defined
person['last-name']; // Lee

person.1; // SyntaxError: Unexpected number
person.'1'; // SyntaxError: Unexpected string
person[1]; // 10 
person['1']; // 10
```

> # 10.6 프로퍼티 값 갱신

- **이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신**된다.

```javascript
// 프로퍼티 값 갱신
var person = {
    name: 'Lee'
};
person.name = 'Kim';
console.log(person); // {name: "Kim"}
```

> # 10.7 프로퍼티 동적 생성

- 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.

```javascript
// 프로퍼티 동적 생성
var person = {
    name: 'Lee'
};
person.age = 20;
console.log(person); // {name: "Lee", age: 20}
```

> # 10.8 프로퍼티 삭제

- delete 연산자는 객체의 프로퍼티를 삭제한다.

- **delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 한다**.

```javascript
// 프로퍼티 삭제
var person = {
    name: 'Lee'
};
// 프로퍼티 동적생성
person.age = 20;
// age 프로퍼티 삭제
delete person.age;
// address 프로퍼티는 존재하지않는다. 그래서 delete 연산자로 삭제할수없지만 에러는 발생하지 않는다.
delete person.address;
console.log(person); // {name: "Lee"}
```

> # 10.9 ES6에서 추가된 객체 리터럴의 확장 기능

### 10.9.1 프로퍼티 축약 표현

- 프로퍼티 값은 **변수에 할당된 값, 즉 식별자 표현식일 수도 있다**.

- 프로퍼티 값으로 변수를 사용하는 경우 **변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략**할 수 있다.

```javascript
// 프로퍼티 축약 표현
let x = 1, y = 2;
const obj = { x, y }
console.log(obj); // {x: 1, y: 2}
```

### 10.9.2 계산된 프로퍼티 이름

- 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성 가능하다, 단 프로퍼티 키로 사용할 표현식을 대괄호로 묶어야 한다.

```javascript
// 계산된 프로퍼티 이름
// 1. ES5
var prefix = 'prop';
var i = 0;
var obj = {};

obj[prefix + '-' + ++i];
obj[prefix + '-' + ++i];
obj[prefix + '-' + ++i];

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 2. ES6
// 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 동적 생성 가능
const prefix = 'prop';
let i = 0;

const obj = {
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

```

### 10.9.3 메서드 축약 표현

```javascript
// 메서드 축약 표현
// 1. ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
};
obj.sayHi(); // Hi! Lee

// 2. ES6
const obj = {
    name: 'Lee',
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};
obj.sayHi(); // Hi! Lee
```