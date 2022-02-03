type Animal = string | number | undefined;

type Car = {
  number: number;
  name: string;
  owner: string;
  age: number;
  sell: boolean;
};

let 동물: Animal = "dog";

let car: Car = {
  number: 1,
  name: "소나타",
  owner: "권영채",
  age: 2022,
  sell: false,
};

const 출생지역 = "대전";

const 출생지역2 = {
  region: "서울",
};

출생지역2.region = "부산";

// 수정이 된다.

type Girlfriend = {
  readonly name?: string;
};

const 여친: Girlfriend = {
  name: "아이유",
};

type Name = string;
type Age = number;
type Person = Name | Age;

// extend 

type PositionX = { x: number };
type PositionY = { y: number };

type Position = PositionX & PositionY;

type Dog = { age: number; gender: string };
type Cat = { gender: string };

type Ani = Dog & Cat;

let newDog: Ani = {
  age: 1,
  gender: "남자",
};

type Data = {
  color?: string;
  size: number;
  readonly position: number[];
};

type People = {
  name: string;
  phone: number;
  email: string;
};

type isElder = {
  elder : boolean;
}

type People2 = People & isElder;