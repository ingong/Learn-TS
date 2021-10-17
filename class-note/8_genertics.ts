// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText(10);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('하이');

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const flag = logText<boolean>(true);


// 다른 타입을 받기 위해 다른 함수를 작성해야하는 좋지 않은 코드를 작성해야함.

// 호출 시점에서 타입을 지정할 수 있음

// 인터페이스에서 제너릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {value: 'abc', selected: false}

// 제네릭의 타입 제한 1
// function logTextLength<T>(text: T[]): T[]{
//   console.log(text.length)
//   return text;
// }

// logTextLength(['hi', 'abc']);

//제네릭 타입 제한 2
interface LengthType{
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T{
  console.log(text.length);
  return text;
}

logTextLength('abcdef');

//제네릭 타입 제한 3 - keyof
interface ShoppingItem{
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name');