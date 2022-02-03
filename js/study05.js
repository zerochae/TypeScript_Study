function myFunction(x) {
    return typeof x === "number"
        ? console.log(x + 1)
        : typeof x === "string"
            ? console.log(x)
            : console.log("잘못된 타입");
}
function myFunction2(x) {
    let array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    else {
        array.push(1);
    }
    let array2 = [];
    array2[0] = x;
}
function myFunction3(x) {
    let array = [];
    array.push(x);
}
let var6 = "kim";
let var7 = ["1", "2", 3, "4", 5, "6"];
function filter(arr) {
    let result = [];
    arr.map((item) => {
        return typeof item === "string"
            ? result.push(parseInt(item))
            : result.push(item);
    });
    return result;
}
let 철수선생님 = { subject: "math" };
let 영희선생님 = { subject: ["science", "english"] };
let 민수선생님 = { subject: ["science", "art", "korean"] };
function filter2(obj) {
    return typeof obj.subject === 'string' ? obj.subject :
        obj.subject[obj.subject.length - 1];
}
console.log(filter2(철수선생님));
console.log(filter2(영희선생님));
console.log(filter2(민수선생님));
