// 특정 parameter 나 변수에 두 개 이상의 타이핑이 가능
function logMessage(value: string | number) {
  console.log(value);
  if (typeof value === 'number') value.toLocaleString();
  if (typeof value === 'string') value.toString();
  throw new TypeError('value must be string or number')
}

logMessage(10);
logMessage('abcdef');

interface Developer{
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// interface 를 두개 이상 연결했을 때, 공통된 속성에 대해서만 접근할 수 있다.
// 만약 공통되지 않는 속성에 대해서 사용하고 싶다면 typeGuar 를 사용하면 된다.
function askSomeone(someone: Developer | Person) {
  // someone.name;
  // someone.skill;
  // someone.age;
}

// Developer 와 Person 에 모두 접근
// type 을 연결
// function askSomeone(someone: Developer & Person) {
//   someone.name;
//   someone.skill;
//   someone.age;
// }

// askSomeone({ name: 'Developer', skill: '웹 개발' });
askSomeone({ name: 'Developer', age: 20 });