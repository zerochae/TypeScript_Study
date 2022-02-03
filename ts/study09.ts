let title = document.querySelector("#title");

// 1

if (title != null) {
  title.innerHTML = "반갑스비다";
}

// 2

if (title instanceof HTMLElement) {
  title.innerHTML = "반갑다고";
}

// 3
let title2 = document.querySelector("#title") as HTMLElement;
title2.innerHTML = "반갑다";

// 4

if (title?.innerHTML != undefined) {
  title.innerHTML = "반가워요";
}

// 5

// tsconfig.json

/*
  {
    "strictNullChecks" : false;
  }

*/

let link = document.querySelector("#link");

if (link instanceof HTMLElement) {
  // link.href = 'https://kakao.com'  --> ERROR
}

if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}

// a태그 -> HTMLAnchorElement
// img 태그 -> HTMLImageElement
// h4 태그 -> HTMLHeadingElement

/*
    타입스크립트에서 쓸 수 있는 HTML 타입은
    Element, HTMLElement, HTMLAnchorElement ... 등 이 있는데
    Element에 들어있는걸 복사해서 몇개 더 추가해서 HTMLElement 타입을 만들었고
    HTMLElement에 들어있는걸 복사해서 몇개 더 추가해서 HTMLAnchorElement 타입을 만들었다

    셀렉터로 대충 찾으면 Element 타입이라는게 부여 된다
    아직 이 태그가 뭔지 몰라서 그냥 광범위한 타입하나를 달랑 지정해 주는 거야
    이건 광범위한 그냥 일반 html 태그의 특징을 정리해둔 타입이기 때문에 안에 .href .src 이런거 안들어있어

    반면 HTMLAnchorElement 이건 상세해
    이 타입은 href , style , class , id 이런 속성을 가질 수 있다 라고 타입이 정의되어있다
    그래서 a태그에게 어울리는 타입인 HTMLAnchorElement 라는 타입을 쓸 수 있는지 instanceof 키워드로 확인해야 한다
    확인하는 과정을 narrowing으로 인정해준다
*/

let btn = document.querySelector("button");
btn?.addEventListener("click", function () {
  console.log("hi~");
});

btn?.addEventListener("click", function () {
  let img = document.querySelector("#image");
  if (img instanceof HTMLImageElement) {
    img.src = "zzz.jpg";
  }
});

let links = document.querySelectorAll(".naver");

links.forEach((naver) => {
  if (naver instanceof HTMLAnchorElement) {
    naver.href = "kakao.com";
  }
});
