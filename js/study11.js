let 네모 = { color: "red", width: 30 };
let 학생 = { name: "kim", score: 11, gender: "남" };
let 선생 = { name: "kim", age: 30, score: 100, gender: "여" };
console.log(학생);
console.log(선생);
console.log(typeof 학생);
let 상품 = {
    brand: "Apple",
    serialNumber: 1360,
    model: ["tv", "phone"],
};
let 장바구니 = [
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
function 함수객체1(a, b) {
    return a + b;
}
function 함수객체2(a, b) {
    return a - b;
}
let 객체 = {
    myFunc1(a, b) {
        return a + b;
    },
    myFunc2(a, b) {
        return a - b;
    },
};
