let title = document.querySelector("#title");
if (title != null) {
    title.innerHTML = "반갑스비다";
}
if (title instanceof HTMLElement) {
    title.innerHTML = "반갑다고";
}
let title2 = document.querySelector("#title");
title2.innerHTML = "반갑다";
if (title?.innerHTML != undefined) {
    title.innerHTML = "반가워요";
}
let link = document.querySelector("#link");
if (link instanceof HTMLElement) {
}
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
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
link.forEach((naver) => {
    if (naver instanceof HTMLAnchorElement) {
        naver.href = "kakao.com";
    }
});
