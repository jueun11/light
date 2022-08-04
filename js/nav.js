const back = document.getElementsByClassName('back')[0];
const search = document.getElementsByClassName('search')[0];
const basket = document.getElementsByClassName('basket')[0];



back.addEventListener('click',function(){
  console.log('클릭');
  history.back(-1);
});

search.addEventListener('click',function(){
  console.log('클릭');
  location.href="./search.html";
});

basket.addEventListener('click',function(){
  console.log('클릭');
  location.href="./basket.html";
});