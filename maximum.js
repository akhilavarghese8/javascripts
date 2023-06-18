var arr=[7,3,8,92]
// 92873

var srt=arr.sort()
console.log(srt);


var output=""
for (var i = 0; i < arr.length; i++) {
   output += arr[i] >= 10 ? arr[i] : "";
}

console.log(output);
