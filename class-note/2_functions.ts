// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20);

function add(): number {
  return 10;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log('hello world');
