interface Persons {
  name: string;
  age: number;
}

// type Persons = {
//   name: string;
//   age: number;
// }

let test: Persons = {
  name: '인송',
  age: 27
}

// interfcae : 해당 interFace 로 이동이 가능
// type : type 에 대한 별칭을 바로 볼 수 있다, type 은 확장이 불가능하다.
// 좋은 소프트웨어는 언제나 확장이 용이해야한다는 원칙!! 따라서 type 보다는 interface 의 활용을 지향해야한다.
// open-closed principle