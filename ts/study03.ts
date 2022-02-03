let newName :string | number = 'kim';
let newAge :(string | number) = 100;
let arr :(number | string)[] = [1,2,'3'];
let obj4 :{a : string} = {a : '123'};
let newName2 :any; 
newName2 = 123;
newName2 = [];
let newType :unknown;
newType = 123;
newType = {};

let var1 :string = newName2;

let var2 :string|number = 1;

var2 + 1;

let var3 :unknown = 1;

// var3 - 1;

let user :string=  'kim';
let age :undefined = undefined;
let married :boolean = false;
// let 철수 :unknown[] = [user,age,married];
let 철수 :(string|number|undefined|boolean)[] = [user,age,married];

let 학교 :{
  score : (number|boolean)[]
  teacher: string,
  friend: string | string[]
} = {
  score : [100,97,84],
  teacher : "kim",
  friend: "park"
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];