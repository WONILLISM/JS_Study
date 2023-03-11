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
