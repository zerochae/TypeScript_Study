
/* 

never type
return 이 없어야 한다 ( void? )
end point 가 없어야 한다 

사실 모든 함수는 기본으로 return undefined를 가지고 있다.

*/

function 함수ㅋㅋ() :never {
  while(true){ // 무한히 반복되기때문에 끝나지 않음 -> return이 없음
    console.log(123);
  }
}

function 함숰ㅋ() :never {
  throw new Error(); // 강제로 에러가 발생해서 코드 실행이 중단됨 -> return이 없음
}

/*

return 하지 않고, 끝나지도 않는 함수를 표현하고 싶을 때 never타입을 지정한다.

-> return 하고싶지 않으면 void 타입을 쓰자
-> 끝나지 않을 함수를 표현할 일이 거의 없다!!
-> never가 뭔지만 알아두자

 */

function 네버함수 (parameter :string){
  if(typeof parameter === 'string') {
    console.log(parameter)
  } else { // --> 여기서 파라미터의 타입이 never로 변한다.
    console.log(parameter)
  }
}

function 자동네버타입() { // 함수 선언문에서는 자동으로 void 타입이 할당된다.
  throw new Error();
}

let 자동네버타입2 = function () { // 함수 표현식에서는 자등으로 never 타입이 할당된다.
  throw new Error();
}

/*

tsconfig.json 에서 strict 옵션을 켜둘 경우 함부로 any타입을 지정해주지 앟는 경우
그럴때 array 같은거 타입지정 안하고 만들면 

let arr = [];
원래는 any[] 타입이 되는데 any를 가질 수 없어서 never[] 타입이 발견되기도 한다.


결론은 쓸 일이 별로 없기 때문에 등장한다는 걸 알아만 두자!

*/