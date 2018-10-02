var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1'){ //args == 1
  console.log('C1'); //C1 (true)
} else {
  console.log('C2'); //C2 (false)
}
console.log('D');
