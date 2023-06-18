var arr=[1,2,3,4,5,7,100,1000]
// arr.push(12)
console.log(arr);


// arr.pop()
console.log(arr);
console.log(arr.includes(4));

// pop-remove last element from array
// push-add last element to array
// lenth-attribute,pop & push are methds
// includes-if elements are prsnt in array it returns true otherwise false
// map,---take all objects---all names
// filter---conditions apply eg;P>30
// sort---sorting
// some()--boolean(t/f)
// reduce---max ,min,product

var cubes=arr.map(n=>n**3)   //method-mapping->one variable is used in maping
console.log(cubes);

var square=arr.map(n=>n**2)
console.log(square);

// num>5 num+1 num<5 num-1 num=5 5

// var number=arr.map(n=>n>5?n+1:n<5?n-1:n)
// console.log(number);

var evens=arr.filter(n=>n%2==0)   ///filter --one  arguments
console.log(evens);

var evesq=arr.filter(n=>n%2==0).map(n=>n**2)
console.log(evesq);

var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);

var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product);

var largest=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(largest);

// sorting
var srt=arr.sort()
// console.log(srt);

// function compare
var srt=arr.sort((o1,o2)=>o1-o2)
console.log(srt);

