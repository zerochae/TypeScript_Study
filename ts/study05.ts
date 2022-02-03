// Narrowing

function myFunction(x: number | string) {
  return typeof x === "number"
    ? console.log(x + 1)
    : typeof x === "string"
    ? console.log(x)
    : console.log("잘못된 타입");
}

function myFunction2(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
    array.push(1);
  }

  // Assertion
  // 타입 확정
  // 어떤 타입이 들어올지 알고 있을 때 사용한다.

  let array2: number[] = [];
  array2[0] = x as number;
}

function myFunction3(x: number | string) {
  let array: number[] = [];
  array.push(x as number);
}

let var6: string = "kim";

let var7: (number | string)[] = ["1", "2", 3, "4", 5, "6"];

function filter(arr: (number | string)[]): number[] {
  let result: number[] = [];

  arr.map((item: string | number) => {
    return typeof item === "string"
      ? result.push(parseInt(item))
      : result.push(item);
  });

  return result;
}

let 철수선생님 = { subject: "math" };
let 영희선생님 = { subject: ["science", "english"] };
let 민수선생님 = { subject: ["science", "art", "korean"] };

function filter2(obj: { subject: string | string[] }): string {

  return typeof obj.subject === 'string' ? obj.subject :
  obj.subject[obj.subject.length - 1]; 

  // Array.isArray(obj.subject); --> arr인지 판별

}

console.log(filter2(철수선생님))
console.log(filter2(영희선생님))
console.log(filter2(민수선생님))