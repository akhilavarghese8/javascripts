// const pi=3.14
// var radius=4
// var height=5
// pi=3.45
// console.log(pi*(radius**2)*height)


// var =>global scope,mutable
// let=>block level scope,mutable
// const=>immutable

// js=>type
// console.log(type(15));
// console.log(type(30.5));
// console.log(type("hello"));
// console.log(type(true));

// // undefined,null,string,boolen,number

var num1=100;
var num2="100";
if(num1==num2){          //100==number("100") automatic type casting=>coercion
    console.log("equal");
}
else{
    console.log("not equal");
}

// ==content comparision
// ===strict match