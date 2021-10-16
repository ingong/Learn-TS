interface User {
  age: number;
  name: string;
}

const seho: User = {
  age: 27,
  name: 'insong'
}

//함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: 'insong',
  age: 28,
}

getUser(capt);

// 함수의 스펫(구조)에 인터페이스를 활용
interface SumFunction{
  (a: number, b: number): number
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
}

// 인덱싱 방식 정의
interface StringArray{
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0] = 'd';

// 딕셔너리 패턴
interface StringRegexDictionary{
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  // sth: /abc/, 
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// 객체의 key 를 접근했을 때 그 key 에 대한 타입 추론이 가능하다
Object.keys(obj).forEach(function (value) {
})

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

var capt: Developer = {
  language: 'js',
  name: 'insong',
  age: 27,
}