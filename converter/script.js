
    

function FhToDegree(){
    let fh=document.querySelector("#id_fh").value
    let temp=(fh-32) * (5/9)
    let tbox=document.querySelector("#id_temp")
    tbox.value=temp
}