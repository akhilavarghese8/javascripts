// arrays
// []
// no length limit
// same and different type of values
// mutable
// duplicates allowed
// var expenses=[2000,3000,4000,"hello",4000]
// for(let exp of expenses){
//     console.log(exp);
// }

var arr1=[2,3,4,6,8]
var arr2=[1,4,5,7,9]
// var counter=0;
// for(let n1 of arr1){
//     for(let n2 of arr2){
//         if(n1==n2){
//             console.log(n1)
//         }
//         counter++;
//     }
// }
// console.log(counter);
var p1=0,p2=0;
var counter=0
while(p1 < arr1.length && p2 < arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log("common element",arr1[p1]);
        p1++
        p2++

    }
    else if(arr1[p1] > arr2 [p2]){
        p2++
    }
    else if(arr1[p1] < arr2[p2]){
        p1++
    }

    counter++
}
console.log(counter)