function 생선새(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    else {
        return animal.fly;
    }
}
let 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log("데이트");
}
function 함수함수(param) {
    if (param.wheel === '4개') {
        console.log(`이 차는 ${param.color}`);
    }
    else {
        console.log(`이 바이크는 ${param.color}`);
    }
}
