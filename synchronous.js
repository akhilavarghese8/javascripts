// synchronous--keep order--javasc is  synchronous ,single threaded
// asynchronous--doesn't keep order

console.log("ordered staters");
setTimeout(()=>console.log("maincourse"),2000)
console.log("dessert");



// in js engine=> we have call stack and memory heap
// call stack=>all functions will come to callstack .call stack will print the content
// memory heap=>variables
// event loop=>check the call stack is empty 


// in web API
// DOM events()
// XMLHttp()
// fetch()
// setTimeout()
// setInterval()

setTimeout(()=>console.log("line 1"),2000);
console.log("line 2");
setInterval(()=>console.log("line 3"),0);
setTimeout(()=>console.log("line 4"),1000);
console.log("line 5");