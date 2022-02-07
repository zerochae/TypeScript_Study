class 유저 {
    name;
    familyName;
    constructor() {
        this.name = 'kim';
        let hello = this.familyName + '하이 ㅋㅋ';
    }
    setFamilyName(familyName) {
        this.familyName = familyName;
    }
}
let 유저1 = new 유저();
유저1.name = 'park';
유저1.familyName = "ㅋㅋㅋ";
유저1.setFamilyName("ㅋㅋㅋ");
class 풔슨 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let 풔슨_권영채 = new 풔슨('권영채', 100);
class 풔슨2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let 풔슨2_권영채 = new 풔슨2('권영채', 300);
