# 전역변수의 문제점

> 전역변수의 무분별한 사용은 위험, 전역변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역변수를 사용

## 변수의 생명주기

> 변수는 선언에 의해 생성되고 할당을 통해 값을 갖는다. 그리고 언젠간 소멸한다.

1. **지역변수의 생명주기**
   -> 함수의 생명주기와 일치한다.

```javascript
function foo() {
  var x = "local"; // 변수 x 생성, 값 할당
  console.log(x);
  return x; // 변수 x 소멸
}
foo();
console.log(x); // ReferenceError: x is not defined
```

※ 호이스팅은 스코프 단위로 동작한다.

```javascript
var x = "global";

function foo() {
  console.log(x); // undefined 변수선언(var x)이 스코프의 선두로 끌어올려진 것
  var x = "local";
}

foo();
console.log(x); // global
```

2. **전역변수의 생명주기**

- var 키워드로 선언한 전역변수의 생명주기는 전역객체의 생명주기와 일치한다.
- 브라우저 환경에서 전역객체는 **window**이고 브라우저 환경에서 var키워드로 선언한 전역변수는 window의 프로퍼티. 웹페이지를 닫기 전까지 유효하다.

---

## 전역변수의 문제점

> 1.  **암묵적 결합**

- 모든 코드가 전역변수를 참조하고 변경이 가능하여 가독성이 나빠지고 의도치않게 상태변경이 됨
  >

2. **긴 생명주기**

- 메모리 리소스를 오랜기간 소비, 변수 이름 중복 가능성이 높다.
  >

3. **스코프체인 상에서 종점에 존재**

- 변수를 검색할 때 가장 안쪽 스코프부터 마지막에 검색함. 즉, **검색속도가 느리다**
  >

4. **네임스페이스 오염**

- 파일이 분리되어도 하나의 전역 스코프를 공유하기 때문에 이름이 겹칠 가능성이 높다.

### 전역변수의 사용을 억제하는 방법

1. **즉시실행함수**

```javascript
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
  // ...
})();

console.log(foo); // ReferenceError: foo is not defined
```

2. **네임스페이스 객체**

- 전역에 객체를 생성하고, 프로퍼티를 추가하는 방법
  -> 식별자 충돌 방지를 할 수 있으나 이 방법도 전역 변수를 생성하는 것이라 유용 X

```javascript
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};

console.log(MYAPP.person.name); // Lee
```

3. **모듈패턴**

- 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시실행함수로 감싸 모듈을 만드는 것
- 모듈패턴은 자바스크립트의 강력한 기능인 클로저를 기반으로 동작
- 모듈패턴의 특징은 **전역변수의 억제, 캡슐화 구현**

> **캡슐화**

- 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작하는 동작인 매서드를 하나로 묶는 것

```javascript
var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
```

4. **ES6 모듈**

- ES6모듈을 사용하면 전역변수 사용X, 파일자체의 독자적인 모듈스코프를 제공한다.
  (아직까지는 구형 브라우저에서 동작하지 않는다. 또한, 트랜스파일링과 번들링이 필요해 아직까지는 Webpack등의 모듈 번들러를 사용하고 있음)
