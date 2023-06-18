function addition(){
    let n1=document.querySelector("#id_num1").value
    let n2=document.querySelector("#id_num2").value
    let add=(+n1)+(+n2)
    let rst=document.querySelector("#id_rst")
    rst.value=add
}
function substraction(){
    let n1=document.querySelector("#id_num1").value
    let n2=document.querySelector("#id_num2").value
    let sub=(+n1)-(+n2)
    let rst=document.querySelector("#id_rst")
     rst.value=sub
}
function multiplication(){
    let n1=document.querySelector("#id_num1").value
    let n2=document.querySelector("#id_num2").value
    let mul=(+n1)*(+n2)
    let rst=document.querySelector("#id_rst")
    rst.value=mul
}
function division(){
    let n1=document.querySelector("#id_num1").value*1
    let n2=document.querySelector("#id_num2").value*1
    let div=n1/n2
    let rst=document.querySelector("#id_rst")
    rst.value=div
}
