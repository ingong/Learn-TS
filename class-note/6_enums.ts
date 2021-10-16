enum Shoes{
  Nike = '나이키',
  Adidas = '아디다스',
}

const myShoes = Shoes.Nike;
console.log(myShoes);

enum Answer {
  Yes = 'Yes',
  No = 'No',
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) console.log('정답입니다');
  if (answer === Answer.No) console.log('오답입니다');
}

// 드롭다운에서 특정 값만 활용하게 하는 경우 enums 을 활용할 수 있다.
askQuestion(Answer.Yes);