const orderPhoto = Array.from(document.getElementsByClassName('orderPhoto'));

orderPhoto[0].style.backgroundImage = "url(./css/image/order/1.jpg)";
orderPhoto[1].style.backgroundImage = "url(./css/image/order/2.jpg)";

const back = document.getElementsByClassName('back')[0];



back.addEventListener('click',function(){
  console.log('클릭');
  history.back(-1);
});
