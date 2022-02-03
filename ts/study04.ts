function 함수2(x :number):number{
  return x * 2;
}

함수2(30);
함수2(60);

function 함수3() :void{

}

function 함수4(x? :number) :void{
  console.log(x);
}

function 함수5(x :number|undefined) :void{
  console.log(x);
}


함수4();

함수5(3);

function 함수6(x : number | string) :void {
  typeof x === 'number' ? console.log(x+1) : console.log(x);
}

함수(6);