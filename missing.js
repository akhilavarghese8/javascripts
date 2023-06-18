var arr=[1,2,3,4]
//       0,1,2
// find the first smallsst +ve missing number of array
// missing no+duplicate number
var flag=0


for(var i=0;i<arr.length;i++){
    if(arr[0]!=1){
        console.log(1,"is missing +ve num");
    }
    else if(arr[i+1]-arr[i]>1){
        console.log(arr[i]+1,"is missing");
        flag=1
        break
    }
    


    

}
if(flag==0){
    console.log(arr[i-1]+1,"is missing");
}


