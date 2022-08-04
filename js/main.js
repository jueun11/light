const bestPhoto = Array.from(document.getElementsByClassName('bestphoto'));
// console.log(bestPhoto);
//*best포토부분
bestPhoto[0].style.backgroundImage = "url(./css/image/main/best/1.jpg)";
bestPhoto[1].style.backgroundImage = "url(./css/image/main/best/2.jpg)";
bestPhoto[2].style.backgroundImage = "url(./css/image/main/best/3.jpg)";
bestPhoto[3].style.backgroundImage = "url(./css/image/main/best/4.jpg)";

//*foryou
const foryouPhoto = Array.from(document.getElementsByClassName('foryouPhoto'));

foryouPhoto[0].style.backgroundImage = "url(./css/image/main/foryou/1.jpg)";
foryouPhoto[1].style.backgroundImage = "url(./css/image/main/foryou/2.jpg)";
foryouPhoto[2].style.backgroundImage = "url(./css/image/main/foryou/3.jpg)";
foryouPhoto[3].style.backgroundImage = "url(.//css/image/main/foryou/4.jpg)";


//*상세페이지 이동

for (let i=0; i< bestPhoto.length; i++){
  bestPhoto[i].addEventListener('click',function(){
    location.href="./page-renewal.html";
  });
}

for (let i=0; i< foryouPhoto.length; i++){
  foryouPhoto[i].addEventListener('click',function(){
    location.href="./page-renewal.html";
  });
}

const list = Array.from(document.getElementsByClassName('list'));

for (let i=0; i< list.length; i++){
  list[i].addEventListener('click',function(){
    location.href="./list.html";
  });
}


