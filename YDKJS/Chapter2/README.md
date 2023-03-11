# CHAPTER 2 값

# CHATER 2 값

## 2.**1 배열**

자바스크립트 배열은 타입이 엄격한 다른 언어와 달리 문자열, 숫자, 객체 심지어 다른 배열이나 어떤 타입의 값이라도 담을 수 있는 그릇이다. 배열의 크기는 미리 정하지 않고도 선언할 수 있으며, 원하는 값을 추가하면 된다.

```jsx
var a = [];
a.length; // 0
a[0] = 1;
a[1] = "2";
a[2] = [3];

// a = [ 1, "2", [3]]

a.length; // 3JAVASCRIPT
```

구멍 난 배열을 다룰 때는 조심해야 한다.

```jsx
var a = [];

a[0] = 1;
a[2] = 3;

a[1]; // undefined

a.length; // 3JAVASCRIPT
```

실행은 되지만 중간에 건너뛴 빈 슬롯은 혼란을 부추길 수 있다. a[1] 슬롯 값이 undefined가 될 것 같지만, a[1] = undefined로 세팅한 것과 똑같지는 않다.

배열 인덱스는 숫자인데, 배열 자체도 하나의 객체여서 키/프로퍼티 문자열을 추가할 수 있다. 하지만 배열 length가 증가하지 않는다.

키로 넣은 문자열 값이 만약 표준 10진수 숫자로 타입이 바뀌면, 마치 문자열 키가 아닌 숫자 키를 사용한 것과 같은 결과가 나온다는 점은 주의해야한다.

```jsx
var a = [];

a[0] = 1;
a["foobar"] = 2;

a.length; // 1
a["foobar"]; // 2
a.foobar; // 2

a["13"] = 42;

a.length; // 14
```

배열에 문자열 타입의 키/프로퍼티를 두는건 추천하지 않는다. 만약 그렇게 해야 한다면 객체를 대용하고 배열 원소의 인덱스는 확실히 숫자만 쓰자.

### 2.1.1 **유사 배열**

```jsx
var a = [1, 2, 3];
array; // [1, 2, 3]

var n = document.querySelectorAll("div"); // NodeList [div, div, div, div, ...]
var e = document.body.children; // HTMLCollection [noscript, link, div, script ...]

Array.isArray(a); // true
Array.isArray(n); // false
Array.isArray(e); // falseJAVASCRIPT
```

위 예제에서 a는 배열이고, n과 e는 유사배열이다. 모두 []로 감싸져 있어 같아보이지만, Array.isArray 메서드를 사용하면 어떤 것이 배열인지 확인할 수 있다.

직접 배열 리터럴로 선언한 array만 배열이다.

```jsx
var arr = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
```

위의 arr 객체가 유사배열이다. 키가 숫자이고, length라는 속성을 가지고 있다. 배열도 객체라는 성질을 이용한 트릭이다. 배열처럼 arr[0], arr[1], arr[2], arr.length 같은 것을 모두 활용할 수 있다.

배열과 유사배열을 구분해야 하는 이유는, 유사배열의 경우 배열의 메서드를 쓸 수 없기 때문이다

```jsx
a.forEach(fucntion(el) { console.log(el); }); // 1, 2, 3
e.forEach(fucntion(el) { console.log(el); }); // Uncaught TypeError: e.forEach is not a fucntion

// 배열 프로토타입에서 forEach 메서드를 빌려와 forEach를 사용
Array.prototype.forEach.call(e, fucntion(el) { console.log(el); });

// ES6 이상 최신 자바스크립트에서 사용법
Array.from(e).forEach(function(el) { conosle.log(el); });
```

> 책의 유사배열이 잘 이해가 되지 않아서 제로초님의 글을 참고했다.
> [https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2](https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2)

## 2.2 문자열

흔히 문자열은 단지 문자의 배열이라고 생각한다. 자바스크립트 문자열은 실제로 생김새만 비슷할 뿐 문자 배열과 같지 않다.

```jsx
var a = "foo";
var b = ["f", "o", "o"];

a.length; // 3
b.length; // 3

var c = a.concat("bar"); // "foobar"
var d = b.concat(["b", "a", "r"]); // ["f", "o", "o", "b", "a", "r"]

a === c; // false
b === d; // false

a; // "foo"
b; // ["f", "o", "o"]
```

문자열은 배열과 겉모습이 닮았다(유사배열). 하지만 문자열은 Immutable(불변 값)이지만 배열은 Mutable(가변 값)이다. 문자열은 불변 값이므로 문자열 메서드는 그 내용을 바로 변경하지 않고 항상 새로운 문자열을 생성한 후 반환한다.

만약 문자열의 순서를 거꾸로 뒤집을 때, reverse를 사용하면, 문자열은 불변 값이라 바로 변경되지 않으므로 배열의 가변 메서드는 통하지 않는다. 여러가지 방법이 있지만 소개하지 않겠다.

## 2.3 숫자

Javascript의 숫자 타입은 number가 유일하며 정수, 부동 소수점 숫자를 모두 아우른다.

Javascript에는 진정한? 정수가 없다. 부동 소수점이든 정수이든 모두 number이다.

C언어를 공부하며 이진 부동 소수점 숫자가 메모리에 저장되는 방식과 그렇게 설계된 의미는 무엇인지에 대해 조금 알아 봤었다.

Javascript number도 정확한 사용 방법을 이해하고자 메모리 비트 패턴을 알고 싶다면 IEEE 754 상세 내용을 참고해보자.

### 2.3.1 숫자 구문

```jsx
// 소수점 앞 정수가 0이면 생략 가능
let a = 0.42;
let b = 0.42;

// 소수점 이하가 0일 때도 생략 가능
let a = 42.0;
let b = 42; // 틀린코드는 아니나 좋지 않은 코드

// 아주 크거나 아주 작은 숫자는 지수형으로 표시하며, toExponential() 메서드의 결과값과 같다.
let a = 5e10; // 50000000000 => 5 * 10^10
a.toExpotential(); // "5e+10"

let b = 1 / a; // 2e-11

// 숫자 값은 Number 객체 Wrapper로 Boxing할 수 있기 때문에 Number.prototype 메서드로 접근 가능
let a = 42.42;
a.toFixed(0); // 42
a.toFixed(1); // 42.4
a.toFixed(2); // 42.42
a.toFixed(3); // 42.420
a.toFixed(4); // 42.4200

// toPrecision()은 유효숫자 개수를 지정할 수 있다.
let a = 42.42;
a.toPrecision(1); // 4e+1
a.toPrecision(2); // 42
a.toPrecision(3); // 42.4
a.toPrecision(4); // 42.42
```

### 2.3.2 작은 소수 값

```jsx
0.1 + 0.2 === 0.3; // false
```

이진 부동 소수점으로 나타낸 0.1과 0.2는 원래의 숫자와 일치하지 않는다.

0.1 + 0.2는 0.300000000000000004에 가깝다.(같지 않다.)

두 수를 비교하기 위해서 Number.EPSILON으로 비교할 수 있다. 정확한 내용은 다루지 않겠다.

### 2.3.3 32비트 (부호 있는) 정수

정수의 '안전 범위'가 대략 9천 조(53비트)에 이르지만, 32비트 숫자에만 가능한 연산이 있으므로 실제 범위는 훨씬 줄어든다.

따라서 정수의 안전 범위는 Math.pow(-2,31) 약 -21억에서 Math.pow(2,31) - 1 약 +21억까지다.

## 2.4 특수 값

\*\*\*\*타입별로 조심해서 사용해야 할 특수한 값들이 있다.

### 2.4.1 값 아닌 값

undefined 타입의 값은 undefined밖에 없다. null 타입도 값은 null 뿐이다. 그래서 이 둘은 타입과 값이 항상 같다.

- undefined와 null은 종종 빈 값과 값 아닌 값을 나타낸다. 개발자에 따라서 다른 의미로 사용하기도 한다.
- undefined란 이름을 가진 지역변수를 생성할 수 있으나, 매우 매우 매우 좋지 않은 생각이다.

**void 연산자**

undefined는 내장 식별자로, 값은 undefined지만, 이 값은 void 연산자로도 얻을 수 있다.

```jsx
var a = 42;

console.log(void a, a); // undefined, 42
```

void 연산자는 어떤 표현식의 결과값이 없다는 걸 확실히 밝혀야 할 때 좋다.

### 2.4.2 **특수 숫자**

숫자 타입에는 몇가지 특수한 값이 있다.

The not number, number

수학 연산 시 두 피연산자가 전부 숫자가 아닐 경우 유효한 숫자가 나올 수 없으므로 그 결과는 NaN(Not a Number)이다.

NaN은 다른 NaN과 비교할 수 없다. 자기 자신과도 같지 않다.

```jsx
NaN === 1 / "string"; // false
```

NaN의 여부는 isNan() 함수로 NaN의 여부를 알 수 있다. 하지만 치명적인 결함이 있다.

```jsx
let a = 2 / "foo";
let b = "foo";

a; // NaN
b; // "foo"

window.isNaN(a); // true
window.isNaN(b); // true
```

"foo"는 당연히 숫자가 아니지만, 그렇다고 NaN은 아니다. 이 버그는 자바스크립트 탄생 이후 오늘까지 계속됐다.

ES6부터 이를 해결할 방법이 등장한다.

```jsx
// ES6 이전
if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return typeof n === "number" && window.isNaN(n);
  };
}

let a = 2 / "foo";
let b = "foo";

Number.isNaN(a); // true
Number.isNaN(b); // false
```

## 2.5 값 vs 레퍼런스

다른 언어에서 값을 사용하는 구문에 따라 Value-Copy(값 복사) 또는 Reference-Copy(레퍼런스 복사)의 형태로 할당/전달 한다.

자바스크립트는 포인터라는 개념 자체가 없고 레퍼런스는 값을 가리키므로 서로 다른 10개의 레퍼런스가 있다면 이들은 저마다 항상 공유된 단일 값을 개별적으로 참조한다. 말보다는 예시를 보자

```jsx
let a = 2;
let b = a; // b는 언제나 a에서 값을 복사한다.
b++;

// a는 2
// b는 3

let c = [1, 2, 3];
let d = c; // d는 공유된 [1,2,3] 값의 레퍼런스다.
d.push(4);

// c 는 [1,2,3,4]
// d 는 [1,2,3,4]

d = [4, 5, 6];

// c 는 [1,2,3,4]
// d 는 [4,5,6]
```

자바스크립트의 원시 값은 언제나 value-copy 방식으로 할당/전달된다.

객체나 함수 등 합성 값은 할당/전달 시 반드시 레퍼런스 사본을 생성한다.

`d = [4,5,6]` 으로 할당해도 `c` 가 참조하는 [1,2,3,4]는 영향을 받지 않는다. 만약 그렇게 되려면 다른 언어처럼 포인터의 개념이 필요한데, 자바스크립트에 포인터란 없다.

함수 인자 역시 많이 헷갈리는 부분이다.

```jsx
function foo(x) {
  x.push(4); // x는 [1,2,3]을 가리키는 별도의 레퍼런스
  // [1,2,3,4]

  x = [4, 5, 6]; // x는 이전의 [1,2,3]을 가리키지 않고 새로운 [4,5,6]을 가리킴
  x.push(7);
  // [4,5,6,7]
}

let e = [1, 2, 3]; // e는 [1,2,3]을 가리키는 별도의 레퍼런스
foo(e);
// e는 [4,5,6,7]이 아닌 [1,2,3,4]
```

e를 인자로 넘기면 e의 사본이 x에 할당된다. x와 e는 모두 동일한 [1,2,3]값을 가리키는 별도의 레퍼런스다. 함수 내부에서 `x=[4,5,6]` 으로 새 값을 할당해도 초기 레퍼런스 e가 참조하고 있던 값에는 아무런 영향이 없다.

레퍼런스 `x`로 `e`가 가리키고 있는 값을 바꿀 방법은 없다. 다만 `e`와 `x` 둘 다 가리키는 공유 값의 내용만 바꿀 수 있다. 즉, 값-복사냐 레퍼런스-복사냐를 마음대로 결정할 수 없다. 값의 타입을 보고 엔진의 재량으로 결졍된다.

인자 없이 `slice()`를 호출하면 새로운 배열의 사본(얕은 복사)을 만든다.
