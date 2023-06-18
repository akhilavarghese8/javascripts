function add(n1,n2){
    return n1+n2
}
function cube(n){
    return n**3
}
function sub(n1,n2){
   return n1>n2 ?n1-n2:n2-n1
}  

function maxofTwo(n1,n2){
    return n2>n1 ? n2:n1
}
function oddEven(n){
    return n%2==0?"even":"odd"
}
console.log(add(10,20));
console.log(cube(2));
console.log(sub(2,10));
console.log(maxofTwo(10,2));
console.log(oddEven(2));

