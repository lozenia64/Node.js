//Sample array
var arr = ['A','B','C','D']
console.log(`arr : [${arr}]`);
console.log(`length of arr : ${arr.length}`);

arr[3]='E'
console.log(`
narr[3] change to E
`);
var i = 0;
while(i < arr.length){
  console.log(`arr[${i}] = ${arr[i]}`);
  i=i+1;
}

//Sample loop
var brr = [15, 324, 89, 34, 7]
console.log(`brr : ${brr}`);

var i = 0;
var sum = 0;
while(i < brr.length){
  sum = sum + brr[i];
  i = i + 1;
}
console.log(`Sum : ${sum}`);
