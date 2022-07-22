const bestPhoto = Array.from(document.getElementsByClassName('bestphoto'));
// console.log(bestPhoto);
//*best포토부분
bestPhoto[0].style.backgroundImage = "url(/css/image/main/best/1.jpg)";
bestPhoto[1].style.backgroundImage = "url(/css/image/main/best/2.jpg)";
bestPhoto[2].style.backgroundImage = "url(/css/image/main/best/3.jpg)";
bestPhoto[3].style.backgroundImage = "url(/css/image/main/best/4.jpg)";

//*foryou
const foryouPhoto = Array.from(document.getElementsByClassName('foryouPhoto'));

foryouPhoto[0].style.backgroundImage = "url(/css/image/main/foryou/1.jpg)";


//*상단 배너 슬라이드

//배너 넓이

let oneHundred = 100;
let bannerWidth = oneHundred + "vw";
// console.log(bannerWidth);
let position = window.innerWidth;
//배열로 가져옴
const mainBanners = Array.from(document.getElementsByClassName('mainBanners'));
console.log(mainBanners);


