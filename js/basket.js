const basketPhoto = Array.from(document.getElementsByClassName('basketPhoto'));

console.log(basketPhoto);
basketPhoto[0].style.backgroundImage = "url(./css/image/basket/1.jpg)";
basketPhoto[1].style.backgroundImage = "url(./css/image/basket/2.jpg)";
basketPhoto[2].style.backgroundImage = "url(./css/image/basket/3.jpg)";

const back = document.getElementsByClassName('back')[0];
back.addEventListener('click',function(){
  console.log('클릭');
  history.back(-1);
});


const basketOrder = document.getElementsByClassName('basketOrder')[0];
basketOrder.addEventListener('click',function(){
  console.log('클릭');
  location.href="./order.html";
});
