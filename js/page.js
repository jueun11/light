const pageSlide = Array.from(document.getElementsByClassName('pageSlide'));

console.log(pageSlide);
pageSlide[0].style.backgroundImage = "url(/css/image/page/slide_1.jpg)";



//*제품정보

const Btn = document.getElementById('more');
const rotate = document.getElementById('rotate');
const information = document.getElementById('information');
let clickValue = 0;


Btn.addEventListener('click',function(){
  console.log("누름");
  if(clickValue === 0 ){
    rotate.style.transform = "scaleY(-1)";
    information.style.backgroundColor = "#D9D9D9";
    information.style.borderBottom = "0px";
    information.children[1].style.display = "flex";
    clickValue++;
  }else{
    clickValue = 0;
    rotate.style.transform = "scaleY(1)";
    information.style.backgroundColor = "#fff";
    information.style.borderBottom = "1px solid #1b4159";
    information.children[1].style.display = "none";
  }
});