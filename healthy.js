var tummysize=35
var buttocksize=34

var bmi=tummysize/buttocksize
var gender="male"

if (gender=="female"){
    if (bmi<=0.80){
        console.log("helath risk Low and pear shape")
    }
    
    
    
    else if(bmi>=0.81 && bmi<=0.85){
        console.log("health risk moderate and avacado shape")
        
     }
     else if(bmi>=0.85){
        console.log("health risk high and apple shape")
     }
    }
if (gender=="male"){
    if (bmi>=0.95)
    console.log("helath risk Low and pear shape")
        
     }
    else if(bmi>=0.96 && bmi<=1.0){
    console.log("health risk moderate and avacado shape")
            
         }
    else if(bmi>=1.0){
    console.log("health risk high and apple shape")
         }
       
     