type 타입명 = string;

// type Square = {color : string, width : number};

interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: "red", width: 30 };

// interface , type alias 기능 역할은 같음!!!

interface 학생 {
  name: string;
}

interface 선생 extends 학생 {
  age: number;
}

type Animal1 = {
  name: string;
};

type Cat1 = {
  age: number;
} & Animal1;

interface 학생 {
  score: number;
}

interface 학생 {
  gender: string;
}

let 학생: 학생 = { name: "kim", score: 11, gender: "남" };

let 선생: 선생 = { name: "kim", age: 30, score: 100, gender: "여" };

console.log(학생);
console.log(선생);

console.log(typeof 학생);

// 외부라이브러리에서는 interface쓴다 재정의,중복 선언 가능!!

// 일반 변수 type , object interface

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Apple",
  serialNumber: 1360,
  model: ["tv", "phone"],
};

interface 장바구니 extends 카드 {
  product: string;
  price: number;
}

interface 카드 {
  card: boolean;
}

let 장바구니: 장바구니[] = [
  {
    product: "청소기",
    price: 7000,
    card: false,
  },
  {
    product: "삼다수",
    price: 8000,
    card: true,
  },
];

type 함수객체1 = (a: number, b: number) => number;
type 함수객체2 = (a: number, b: number) => number;

function 함수객체1(a: number, b: number) {
  return a + b;
}

function 함수객체2(a: number, b: number) {
  return a - b;
}

interface 객체 {
  myFunc1: 함수객체1;
  myFunc2: 함수객체2;
}

let 객체: 객체 = {
  myFunc1(a, b) {
    return a + b;
  },
  myFunc2(a, b) {
    return a - b;
  },
};
