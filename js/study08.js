let 함수9 = () => {
    return 0;
};
함수9("a");
let 회원정보 = {
    name: "kim",
    age: 11,
    plusOne(a) {
        return a++;
    },
    changeName: () => {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
let cutZero = (str) => {
    return str.substring(0, 1) === "0" ? str.substring(1, str.length - 1) : str;
};
let removeDash = (str) => {
    return parseInt(str.replace(/-/g, ""));
};
myFunction6('011-123-123', cutZero, removeDash);
function myFunction6(a, func1, func2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
}
