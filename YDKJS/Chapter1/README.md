# CHAPTER 1 타입

자바스크립트 같은 동적 언어는 타입 개념이 없다고 생각할 수 있다.

ECMA표준 명세서 5.1 (ES5)를 보면 아래와 같다.

- 이 명세에 수록된 알고리즘에서 사용되는 모든 값은 이 절에서 정의한 타입 목록 중 하나에 해당한다. 타입은 ECMAScript 언어 타입과 명세 타입으로 하위 분류된다.
- ECMAScript 개발자가 ECMAScript 언어를 이용하여 직접 조작하는 값들의 타입이 바로 ECMAScript 언어 타입이다. ECMAScript 언어 타입에는 Undefined, Null, Boolean, String, Number, Object가 있다.

명세의 대략적인 정의를 따르자면 타입이란 자바스크립트 엔진, 개발자 모두에게 어떤 값을 다른 값과 분별할 수 있는, 고유한 내부 특성의 집합이다.

## 1.1 타입, 그 실체를 이해하자

타입별로 내재된 특성을 제대로 알고 있어야 값을 다른 타입으로 변환하는 방법을 정확히 이해할 수 있다. 어떤 형태로든 거의 모든 자바스크립트 프로그램에서 강제변환이 일어나므로 타입을 확실하게 인지하고 사용하는 것이 중요하다.

## 1.2 내장 타입

자바스크립트에는 다음 7가지 내장 타입이 있다. object를 제외하면 이들을 원시 타입이라고 한다.

- null
- undefined
- boolean
- number
- string
- object
- symbol (ES6 부터 추가)

```js
typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
typeof 42 === "number"; // true
typeof "42" === "string"; // true
typeof { life: 42 } === "object"; // true
typeof Symbol() === "symbol"; // true

typeof null === "object"; // true

typeof function a() { ... } === "function"; // true

typeof [1,2,3] === "object"; // trueJAVASCRIPT
```

null은 falsy한 유일한 원시 값이지만, 타입은 object이다.

function은 최상위 레벨의 내장 타입이 아니라 object의 하위 타입이다. (호출 가능한 객체 - 내부 프로퍼티 [Call]로 호출할 수 있는 객체)

배열은 숫자 인덱스를 가지며, length 프로퍼티가 자동으로 관리되는 등의 특성을 지닌, 객체의 하위 타입이다.

## 1.3 값은 타입을 가진다

값에는 타입이 있지만, 변수엔 따로 타입이란 없다. 변수는 언제라도, 어떤 형태의 값이라도 가질 수 있다.

자바스크립트는 타입강제를 하지 않는다. 변숫값이 처음에 할당된 값과 동일한 타입일 필요가 없다.

### 1.3.1 undefined vs undeclared

undefined와 undeclared를 동의어처럼 생각하기 쉽지만, 자바스크립트에서 둘은 완전히 다른 개념이다.

- undefined : 접근 가능한 스코프에 변수가 선언되었으나 현재 아무런 값도 할당되지 않은 상태
- undeclared : 접근 가능한 스코프에 변수 자체가 선언조차 되지 않은 상태

```js
var a;
a; // undefined
b; // ReferenceError , undeclared
```

### 1.3.2 선언되지 않은 변수

예를들어, 프로그램의 디버그 모드를 `DEBUG` 라는 전역 변수로 조정한다면, 콘솔 창에 메시지 로깅 등 디버깅 작업을 수행하기 전, 이 변수의 선언 여부를 체크해야 한다.

`debug.js` 파일에만 선언하고, 개발/테스트 단계에서 이 파일을 브라우저가 로딩하기만 하면 될 것이다. 그러나 나머지 애플리케이션 코드에서 ReferenceError가 나지 않게 하려면 조심해서 DEBUG 전역 변수를 체크해야 한다. 이때 typeof 안전 가드가 유용하게 쓰인다.

`utility.js`

```js
function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

export { product, sum };
```

`app.js`

```js
import { product, sum } from "./1.3.utility";

console.log(product(1, 2)); //2
console.log(sum(1, 2)); //3

/**
 * DEBUG 임의로 정한 변수
 */
// 에러 발생
if (DEBUG) {
  console.log("디버깅을 시작합니다.");
}

// 존재 여부 체크 가능
if (typeof DEBUG !== "undefined") {
  console.log("디버깅을 시작합니다.");
}
```

`DEBUG`와 같이 임의로 정의한 변수를 쓰지 않더라도 이런 식으로 체크하는 것이 편리하며, 내장 API 기능을 체크할 때에도 에러가 나지 않게 도와준다.

```js
if (typeof atob === "undefined") {
  atob = function () {
    /* ... */
  };
}
```

존재하지 않는 기능을 추가하기 위해 Polyfill(폴리필: 브라우저가 지원하지 않는 자바스크립트 코드를 지원 가능하도록 변환한 코드) 을 정의하려면 atob 선언문에서 var키워드를 빼는 것이 좋다. `var atob` 로 선언하면 선언 자체가 최상위 스코프로 호이스팅 된다. (아래 코드 참고)

```js
var atob; // 선언문 호이스팅

if (typeof atob === "undefined") {
  atob = function () {
    /* ... */
  };
}
```

window 객체를 통한 전역 변수 참조는 가급적 삼가는 것이 좋다. 전역 변수를 꼭 window 객체로만 호출하지 않는 다중 자바스크립트 환경이라면 더욱 그렇다.
