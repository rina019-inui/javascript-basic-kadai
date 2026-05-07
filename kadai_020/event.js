const changeBtn= document.getElementById('btn');
const textElement=document.getElementById('text');

changeBtn.addEventListener('click',function() {

  textElement.textContent = "ボタンをクリックしました";

});
