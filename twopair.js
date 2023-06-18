var arr=[2,3,4,5]

// sum=8
// (5,3)
var sum=9
var p1=0;
var p2=arr.length-1
while(p1<p2){
    
        let curSum=arr[p1]+arr[p2]
        if(curSum == sum){
            console.log(arr[p1],arr[p2]);
            break;
        }
        else if(sum>curSum){
            p1++
        }
        else if(sum<curSum){
            p2--
        }
    }


