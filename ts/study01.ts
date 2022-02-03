let nm: string[] = ["kim"];

let obj: { name: string } = { name: "kim" };

let obj2: string | number = "kim";

type MyType = string | number;

let obj3: MyType = "kim";

function 함수(x: number): number {
  return x * 2;
}

// 함수('123') // error

함수(123);

type Member = [number, boolean];
let john: Member = [123, true];

type Member2 = {
  name: string;
};

let john2: Member2 = { name: "kim" };

type Member3 = {
  [key: string]: string;
};

let john3: Member3 = { name: "kim", age: "123" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let john4 :string = 'kim';

