console.log(score) // undefined

var score = 80 // 변수 선언 및 할당

console.log(score) // 80

// 1. 변수 선언 score가 먼저 런타임 이전에 실행되서 score에 undefined가 할당됨
// 2. 소스코드가 순차적으로 실행되면서 1번째 줄 score는 undefined
// 3. score = 80 이라고 재할당됨
// 4. 5번째 줄 score에는 80이 나온다.