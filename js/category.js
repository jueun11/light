//*페이지 이동

const search = document.getElementsByClassName('search')[0];
console.log(search);

search.addEventListener('click',function(){
  console.log('클릭');
  location.href="./search.html";
});