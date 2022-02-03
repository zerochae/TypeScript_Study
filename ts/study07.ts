// Literal Type

let name2 :'kim';

let 접니다 :'대머리' | '솔로';
접니다 = '대머리';
접니다 = '솔로';
// 접니다 = '권영채' 

function 함수(a :'hello') :1 | 0{
  console.log(a);
  return 1;
}

함수('hello')

// 가위 바위 보 
// 가위 바위 보 어레이 함수 리턴

function 가위바위보(a :'가위'|'바위'|'보') :('가위'|'바위'|'보')[]{
  return [a];
}

let 권영채 :'리액트'|'뷰';

let 자료 = {
  name : 'kim'
} as const

자료.name // 'kim'

function 니함수(a :'kim') :'kim'{
  return a;
}

// 니함수(자료.name);  --> 에러난다
// 니함수(자료.name as 'kim');
// as const --> 
//object value 값을 그대로 타입으로 지정해줌
//object value 값을 readonly로 바꿔줌

// 자료.name = 123; --> error 난다.