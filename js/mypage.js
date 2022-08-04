const back = document.getElementsByClassName('back')[0];
const basket = document.getElementsByClassName('basket')[0];



back.addEventListener('click',function(){
  console.log('클릭');
  history.back(-1);
});

basket.addEventListener('click',function(){
  console.log('클릭');
  location.href="./basket.html";
});

const viewed = Array.from(document.getElementsByClassName('viewed'));

for (let i=0; i< viewed.length; i++){
  viewed[i].addEventListener('click',function(){
    location.href="./page-renewal.html";
  });
}