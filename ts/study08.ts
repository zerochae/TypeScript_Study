type 함수타입 = (a: string) => number;
type 함수타입2 = (a: number) => number;

let 함수9: 함수타입 = () => {
  return 0;
};

함수9("a");

type Member4 = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Member4 = {
  name: "kim",
  age: 11,
  plusOne(a: number): number {
    return a++;
  },
  changeName: (): void => {
    console.log("안녕");
  },
};

회원정보.plusOne(1);

// function 함수10(a :(a:()=>{}) => :void ){
//   a()
// }

// function 함수11() :void{
//   console.log("함수11");
// }

// 함수10(함수11);

type CutZero = (str: string) => string;
type RemoveDash = (str: string) => number;

let cutZero: CutZero = (str) => {
  return str.substring(0, 1) === "0" ? str.substring(1, str.length - 1) : str;
};

let removeDash: RemoveDash = (str) => {
  return parseInt(str.replace(/-/g,""));
};

myFunction6('011-123-123',cutZero,removeDash);

function myFunction6(a :string, func1 :CutZero ,func2 :RemoveDash){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}
