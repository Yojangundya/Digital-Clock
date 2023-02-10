const hourE1 = document.getElementById("hour");
const minuteE1  = document.getElementById("minutes");
const secE1 = document.getElementById("seconds");
const amE1 = document.getElementById("am");

function c(){
    let h= new Date().getHours()
    let m= new Date().getMinutes()
    let s= new Date().getSeconds()
    
    let a= "AM"
    if(h>12){
        h=h-12
        a="PM"
    }
    hourE1.innerText=h
    minuteE1.innerText=m
    secE1.innerText=s
    amE1.innerText=a
    setTimeout(()=>{
        c()
    },1000
    )
}


c()
