let d1 = new Date(2023, 0, 27, 11, 30);
console.log(d1); // 2023-01-27T02:30:00.000Z
console.log(d1.toString()); //Fri Jan 27 2023 11:30:00 GMT+0900 (대한민국 표준시)

console.log("---------------------------------");

let d2 = new Date(1674786600000);
console.log(d2); // 2023-01-27T02:30:00.000Z
console.log(d2.toString()); // Fri Jan 27 2023 11:30:00 GMT+0900 (대한민국 표준시)

console.log("---------------------------------");

let d3 = new Date("2023-01-27T11:30:00");
let d4 = new Date("2023-01-27T11:30:00Z");
console.log(d3.toString()); // Fri Jan 27 2023 11:30:00 GMT+0900 (대한민국 표준시)
console.log(d4.toString()); // Fri Jan 27 2023 20:30:00 GMT+0900 (대한민국 표준시)

console.log("---------------------------------");

let d5 = new Date(2023, 0, 27, 11, 30);
let d6 = new Date("2023-01-27T11:30:00");
let d7 = new Date("2023-01-27T11:30:00Z");
console.log(d5.getTime()); // 1674786600000
console.log(d6.getTime()); // 1674786600000
console.log(d7.getTime()); // 1674819000000

console.log("---------------------------------");

let d8 = new Date(2023, 0, 27, 11, 30);
let d9 = new Date("hello");
console.log(d8.toJSON()); // 2023-01-27T02:30:00.000Z
console.log(d8.toISOString()); // 2023-01-27T02:30:00.000Z
// console.log(d9.toJSON()); // null
// console.log(d9.toISOString()); // Range Error: Invalid time value

console.log("---------------------------------");

let seoul = new Date(2023, 0, 27, 11, 30);
let newyork = new Date(seoul.getTime() - 840 * 60 * 1000);
console.log(seoul.toJSON());
console.log(newyork.toJSON());

console.log("---------------------------------");

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const d = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    year + "년 " + month + "월 " + d + "일 " + hours + "시 " + minutes + "분"
  );
}

const seo = new Date(2023, 0, 27, 11, 30);
const ny = new Date(seo.getTime() - 840 * 60 * 1000);

console.log(formatDate(seo)); // 2023년 1월 27일 11시 30분
console.log(formatDate(ny)); // 2023년 1월 26일 21시 30분
