class 인간 {
  name: string;
  constructor(name: string) {
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
  model :string;
  price :number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax() :number{
    return this.price / 10;
  }
}

let car1 = new CarCar('소나타',3000);

console.log(car1.tax());

class Word {

  num :number[];
  str :string[];

  constructor(...args :(number | string)[]){

    this.num = [];
    this.str = [];

    args.map( (arg :(number | string))=> {
      return typeof arg === 'number' ? this.num.push(arg) : this.str.push(arg);
    })

  }
}

let obj11 :{num: number[] , str: string[]} = new Word(1,2,"1");

console.log(obj11);