var pattern="ABCADD"
// print first recussive character
var recc={}
for(let c of pattern){
    
    if(c in recc){
        console.log(c,"is recussive character");
        break

    }
    else{
        recc[c]=1
    }
}