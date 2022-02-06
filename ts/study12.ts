function 전부더하기(...a: number[]) {
  console.log(a);
}

전부더하기(1, 2, 3, 4, 5);

// rest parameter

let person = { student: true, age: 20 };

interface param {
  student : boolean,
  age : number,
}

function 함수임({ student, age } :param) :void{
  console.log(student, age);
}

함수임({ student : true, age : 20 })

function 전부더하는거 (...num:number[]) :number{
  let result :number = 0;

  num.map( el => {
    return result += el;
  })

  return result;

}

interface param2 {
  user : string,
  comment : number[],
  admin : boolean
}

function 함수라고 ( {user , comment, admin } :param2 ) {
  console.log(user,comment,admin);
}

type param3 = (number | string | boolean)[]

function 함수냐 ( [age , drink , can] :param3) {
  console.log(age,drink ,can);
} 

함수냐 ( [40 , 'wine' , false] )