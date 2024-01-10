var a=document.getElementById("navbar");
console.log(a)
var b=1;

function check(){
    if(b===1){
        alert("Hello")
        a.style.display="none"
        b--;
    }
    else{
        alert("Else")
        a.style.display="none !important"
        console.log(a)
        b++;
    }
}
