class 인간 {
    name;
    constructor(name) {
        this.name = name;
    }
    함수() {
        console.log("함수 ㅋㅋ");
    }
}
let 사람1 = new 인간("권영채1");
let 사람2 = new 인간("권영채2");
console.log(사람1);
인간.prototype.함수();
사람1.함수();
class CarCar {
    model;
    price;
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price / 10;
    }
}
let car1 = new CarCar('소나타', 3000);
console.log(car1.tax());
class Word {
    num;
    str;
    constructor(...args) {
        this.num = [];
        this.str = [];
        args.map((arg) => {
            return typeof arg === 'number' ? this.num.push(arg) : this.str.push(arg);
        });
    }
}
let obj11 = new Word(1, 2, "1");
console.log(obj11);
