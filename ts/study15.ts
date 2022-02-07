class 유저 {

  public name :string; // default는 public이 붙는다.
  private familyName : string;

  constructor() {
    this.name = 'kim';
    let hello = this.familyName + '하이 ㅋㅋ'; // 가능!!
  }
  setFamilyName(familyName :string) :void{
    this.familyName = familyName
  }

}

let 유저1 = new 유저();

유저1.name = 'park'; // 가능!!
유저1.familyName = "ㅋㅋㅋ"; // 에러난다 ㅋㅋ

유저1.setFamilyName("ㅋㅋㅋ") // 가능!!

class 풔슨 {
  name;
  age;
  constructor ( name : string, age :number){
    this.name = name;
    this.age = age;
  }
}

let 풔슨_권영채 = new 풔슨('권영채',100);

class 풔슨2 {
  constructor ( public name : string , public age :number){

  }
}

let 풔슨2_권영채 = new 풔슨2 ('권영채',300);