/** 이 함수는 Book클래스의 생성자이다. */
// @ts-check
function Book(title, author) {}

/**
 * 책을 의미하는 함수이다.
 * @constructor
 * @param {string} title - 책의 제목
 * @param {string} author - 책의 저자
 */
function Book(title, author) {}

/**
 * 변수 타입
 */

/** @type {string} */
let str;

/** @type {number} */
let num;

/** @type {boolean} */
let bool;

/** @type {*} */
let any;

/** @type {?} */
let unknown;

/** @type {number[]} */
let nums;

/** @type { {id: number, content: string, completed: boolean} } */
let obj;

/** @type {string|number} */
let union;

/** @type {Array<{ id: number, content: string, completed: boolean }>} */
let generic;

/**
 * 함수 타입
 */

/**
 * @description TypeScript syntax를 사용하는 방법
 * @description 두 수의 합을 구한다.
 * @type { (a: number, b: number) => number }
 */
const add = (a, b) => a + b;

/**
 * @description Closure syntax를 사용하는 방법
 * @description 두 수의 곱을 구한다.
 * @type { function(number, number): number }
 */
const multiply = (a, b) => a * b;

/**
 * @description JSDoc syntax를 사용하는 방법
 * @description 두 수의 차를 구한다.
 * @param {number} a - the first thing
 * @param {number} b - the second thing
 * @returns {number}
 */
const subtract = (a, b) => a - b;

/**
 * @param {string}  p1 - A string param.
 * @param {string=} p2 - An optional param (Closure syntax)
 * @param {string} [p3] - Another optional param (JSDoc syntax).
 * @param {string} [p4="test"] - An optional param with a default value
 * @return {string} This is the result
 */
function stringsStringStrings(p1, p2, p3, p4) {
  return p1 + p2 + p3 + p4;
}

/**
 * 타입 정의
 */
/**
 * 할일
 * @typedef {Object} Todo
 * @property {number} id - 할일 id
 * @property {string} content - 할일 내용
 * @property {boolean} completed - 할일 완료 여부
 */

/**
 * 할일 목록
 * @type {Todo[]}
 */
const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "Javascript", completed: false },
];

/**
 * Callback
 */

// @ts-check

// TypeScript syntax를 사용하는 방법
/**
 * @typedef { (data: string, index?: number) => boolean } Predicate1
 */

// Closure syntax를 사용하는 방법
/**
 * @typedef { function(string, number=): boolean } Predicate2
 */

// JSDoc syntax를 사용하는 방법
/**
 * @callback Predicate3
 * @param {string} data
 * @param {number} [index]
 * @returns {boolean}
 */

/** @type {Predicate1} */
const ok = (s) => !(s.length % 2);
