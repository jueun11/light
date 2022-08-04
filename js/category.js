//*페이지 이동

const search = document.getElementsByClassName('search')[0];
console.log(search);

search.addEventListener('click',function(){
  console.log('클릭');
  location.href="./search.html";
});

const cateImg = Array.from(document.getElementsByClassName('categoryImg'));
console.log(cateImg);

cateImg[0].style.backgroundImage = "url(./css/image/category/1.jpg)";

cateImg[1].style.backgroundImage = "url(./css/image/category/2.jpg)";
cateImg[2].style.backgroundImage = "url(./css/image/category/3.jpg)";
cateImg[3].style.backgroundImage = "url(./css/image/category/4.jpg)";



for (let i=0; i< cateImg.length; i++){
  cateImg[i].addEventListener('click',function(){
    location.href="./list.html";
  });
}