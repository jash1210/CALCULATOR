let string = "";
let btnAC=document.querySelector('.btnAC');
let btn1=document.querySelectorAll('.btn1');
let btn2=document.querySelectorAll('.btn2');
let btn3=document.querySelectorAll('.btn3');
let btnback=document.querySelectorAll('.btnback');

btn1.forEach((btn1) => {
    btn1.addEventListener("click" , (e)=> {
        if(e.target.innerHTML == "="){
            string =eval(string);
            document.querySelector(".input").value =string;
        }
        else if(e.target.innerHTML == "AC"){
            string ="";
            document.querySelector(".input").value =string;
        }
        else if(e.target.innerHTML == "DEl"){
            string.slice ="0,-1";
            document.querySelector(".input").value =string;
        }
        else{
            string = string + e.target.innerHTML;
        document.querySelector(".input").value =string;
        }
        
    });
});

btnback.forEach((btnback) => {
    btnback.addEventListener("click" , (e)=> {
        if(e.target.innerHTML == "i"){
            string = "--"
        document.querySelector(".input").value =string;
        }
        
    });
});

