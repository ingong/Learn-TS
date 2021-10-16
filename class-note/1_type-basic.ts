// 1. 기본 타입
let str_: string = 'hello';

let num_: number = 10;

let arr_: Array<number> = [1, 2, 3];

let heroes: Array<string> = ['A', 'B', 'C'];

// 배열 리터럴로 선언할 수 있다.
let items_: number[] = [1, 2, 3];

// TS 튜플 (모든 인덱스에 대한 타입이 정의되어있는 배열)
let address_: [string, number] = ['gangnam', 1];

// TS 객체
let obj_: object = {};
// let person_: object = {
//   name: 'capt',
//   age: 100,
// };

// 객체 안에 들어갈 수 있는 속성에 타입 지정할 수 있다.
let person_: { name: string; age: number } = {
  name: 'thor',
  age: 10000,
};

// TS 진위값
let show: boolean = true;
