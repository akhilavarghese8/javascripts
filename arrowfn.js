var add=(n1,n2)=>n1+n2
var sub=(n1,n2)=>n1-n2
var div=(n1,n2)=>n1/n2
console.log(add(10,2));
console.log(sub(10,2));
console.log(div(10,2));

var smartSub=(n1,n2)=>n1>n2?n1-n2:n2-n1
console.log(smartSub(10,2));

var oddEven=(n)=>n%2==0?"even":"odd"
console.log(oddEven(10));
