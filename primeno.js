var num=7
var isPrime=true;

if(num==2){

}
else{for(let i=2;i<num;i++){   //i=2,....6,7

    if(num%i==0){        //8%2==0
        isPrime=false
        break
    }

}
}
console.log(isPrime)