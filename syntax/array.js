var arr = ['A','B','C','D']
console.log("arr : " + arr);
console.log("length of arr : " + arr.length);

arr[3]='E'
console.log("\narr[3] change to E\n");
var i = 0;
while(i<4){
  console.log("arr[" + i + "] = " + arr[i]);
  i=i+1;
}
