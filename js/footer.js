const footer = Array.from(document.querySelectorAll('footer > div'));
console.log(footer);

footer[0].addEventListener('click',function(){
  console.log('클릭');
  location.href="./main.html";
});
footer[1].addEventListener('click',function(){
  console.log('클릭');
  location.href="./category.html";
});
footer[2].addEventListener('click',function(){
  console.log('클릭');
});
footer[3].addEventListener('click',function(){
  console.log('클릭');
  location.href="./mypage.html";
});