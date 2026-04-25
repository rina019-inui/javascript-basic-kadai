
let num = Math.floor(Math.random() * 15) + 1;

console.log(num)

if (num%3===0&&num%5!==0){
  console.log('3の倍数です');
}
else if (num%5===0&&num%3!==0){
  console.log('5の倍数です');
}
else if(num%3===0 && num%5===0){
  console.log('3と5の倍数です')
}
else{
console.log('num');
}

// letnum=数字の値に対して、ifの内容に適しているかを
// 記載する。3だったら3の倍数ですがでるし、5だったら5の倍数ですがでる。
// その数値に応じて適した反応を出せるかがキーになる
// 論理的思考が鍛えられる