// nul & undefined check

type Fish = {swim : string};
type Bird = {fly: string};

function 생선새 (animal :Fish|Bird){
  if("swim" in animal){
    return animal.swim
  } else {
    return animal.fly
  }
}

let 날짜 = new Date();
if(날짜 instanceof Date) {
  console.log("데이트")
}

type Car11 = {
  wheel : '4개'
  color : string
}

type Bike11 = {
  wheel : '2개'
  color: string
}

function 함수함수 (param :Car11 | Bike11) {
  if(param.wheel === '4개') {
    console.log(`이 차는 ${param.color}`)
  } else {
    console.log(`이 바이크는 ${param.color}`)
  }
}