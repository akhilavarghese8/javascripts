// number palindrome

var num=123
result=""
while(num !=0){
    let lastdigit=num%10
    result=result+lastdigit
    
    num=Math.floor(num/10)


}
console.log(result)

