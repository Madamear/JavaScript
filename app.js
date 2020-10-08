const quiz = [
  {question:'パパの年齢は？'
  ,answers: ['40歳','44歳','47歳','50歳']
  ,correct:'47歳'
  },
  {question:'ユナの年齢は？'
  ,answers: ['10歳','14歳','18歳','20歳']
  ,correct:'14歳'

  },
  {question:'レミの年齢は？'
  ,answers: ['6歳','8歳','10歳','12歳']
  ,correct:'12歳'

  },
  {question:'エマの年齢は？'
  ,answers: ['10歳','12歳','13歳','15歳']
  ,correct:'10歳'

  }
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]; 
    buttonIndex++;
  };
}
setupQuiz();

// ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
   window.alert('不正解！');
 }
quizIndex++;

if(quizIndex < quizLength){
setupQuiz();
}else{
window.alert('終了！あなたの正解数は' + score + '/' +quizLength + 'です！');
}

};
// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
$button[handlerIndex].addEventListener('click',(e) => {
  clickHandler(e);
});
handlerIndex++;
}