// amstrong number

var num=153
var orginal=num
var len=num.toString().length
var sum=0

while(num!=0){
   let lastdigit=num%10
    sum=sum+(lastdigit**len)
    num=Math.floor(num/10)

}
console.log(sum)
if(sum==orginal){
    console.log("armstrong")
}
else{
    console.log("not")
}
