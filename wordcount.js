var text="hello hai hello hai"
// word count{hello:2,hai:2}
var word=text.split(" ")
var wordcount={}
for(let w of word){
    // if(w in wordcount){
    //     wordcount[w]+=1

    // }
    // else{
    //     wordcount[w]=1
    // }
    w in wordcount?wordcount[w]+=1:wordcount[w]=1

}

console.log(wordcount)

text.split(" ").map(w=>w in wordcount?wordcount[w]+=1:wordcount[w]=1)
console.log(wordcount);