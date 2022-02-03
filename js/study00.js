function 기계(q, w) {
  this.q = q;
  this.w = w;
}

let 누누 = new 기계("consume", "snowball");

console.log(누누);

let 가렌 = new 기계("돌격", "용기");

console.log(가렌);

class Hero {
  constructor(q,w) {
    this.q = q;
    this.w = w;
  }
}


let 누누2 = new Hero('컨슘','눈덩이');

console.log(누누2);

기계.prototype.name = "kim";

console.log(누누.name);

let arr = [5,2,3,4];

arr.sort();

console.log(arr);

Array.prototype.함수 = function(){
  console.log(111);
}

arr.함수();