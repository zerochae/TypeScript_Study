function 전부더하기(...a) {
    console.log(a);
}
전부더하기(1, 2, 3, 4, 5);
let person = { student: true, age: 20 };
function 함수임({ student, age }) {
    console.log(student, age);
}
함수임({ student: true, age: 20 });
function 전부더하는거(...num) {
    let result = 0;
    num.map(el => {
        return result += el;
    });
    return result;
}
function 함수라고({ user, comment, admin }) {
    console.log(user, comment, admin);
}
function 함수냐([age, drink, can]) {
    console.log(age, drink, can);
}
함수냐([40, 'wine', false]);
