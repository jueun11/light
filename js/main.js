const bestPhoto = Array.from(document.getElementsByClassName('bestphoto'));
// console.log(bestPhoto);
//*best포토부분
bestPhoto[0].style.backgroundImage = "url(/css/image/main/best/1.jpg)";
bestPhoto[1].style.backgroundImage = "url(/css/image/main/best/2.jpg)";
bestPhoto[2].style.backgroundImage = "url(/css/image/main/best/3.jpg)";
bestPhoto[3].style.backgroundImage = "url(/css/image/main/best/4.jpg)";


//*상단 배너 슬라이드

//배너 넓이

let oneHundred = 100;
let bannerWidth = oneHundred + "vw";
// console.log(bannerWidth);
let position = window.innerWidth;
//배열로 가져옴
const mainBanners = Array.from(document.getElementsByClassName('mainBanners'));
console.log(mainBanners);


for(let i=0; i< mainBanners.length; i++){
  if(mainBanners[i] !== mainBanners[0]){
    // mainBanners[i].style.backgroundColor = "red";
    // mainBanners[i].style.marginLeft = bannerWidth;
    mainBanners[i].style.transform = `translateX(${position}px)`
  }
}

function bannerIn() {
  let fadeIn = setInterval(function(){
    if(position > 0){
      mainBanners[1].style.transform = `translateX(${position}px)`
      position = position - 1;
      if(position < 2) {
        position = 0;
        mainBanners[1].style.transform = `translateX(${position}px)`
        console.log(mainBanners);
        console.log("ldldlld");
        // mainBanners.pop();
        // mainBanners.unshift(mainBanners[mainBanners.length-1]);
        // mainBanners.shift(mainBanners[0]);
        // mainBanners.push(mainBanners[0]);
        // mainBanners.shift(mainBanners[3]);
      }
    }
    if(position === 0){
      clearInterval(fadeIn);
      // for(let i=0; i< mainBanners.length; i++){
        // position = 100;
        // }
        // mainBanners.push(mainBanners[0]);
        // mainBanners.shift();
        // setTimeout(function(){
          position = window.innerWidth;
          mainBanners.push(mainBanners[0]);
          mainBanners.shift();
          console.log('몇번');
        mainBanners[1].style.transform = `translateX(${position}px)`  
        // },3000);
      }
    },0.01);
    
    
  }
  
let bannerTimeOut = setInterval(bannerIn , 3000);
// setInterval(bannerTimeOut,0.1);
// let bannerMove = setTimeout(bannerTimeOut,3000);

// setTimeout(bannerTimeOut,3000);


// const container = document.getElementById('mainBanner'),
// slides = document.querySelectorAll('.mainBanners'),
// slidecounter = slides.length;
// let currentIndex = 0;


// var lele = 0;
// var i = 0;
// function moveleft() {
// if (i < slidecounter - 1) {
//     lele += 100;
//     i++;
//     container.style.transition = '.3s'
//     setTimeout(moveleft(), 3000);
// } else {
//     container.style.transition = '0s'
//     lele = 0;
//     i = 0;
//     setTimeout(moveleft(), 0);
// }

// container.style.left = "-" + lele + "%";

// }

// // setInterval(moveleft);
// moveleft();