import { timerupdate ,starttimer,timerOn,make_timerOnNull,make_timerStart_startover} from "./functions.js";

const startButton = document.querySelector(".start");
const settingButton = document.querySelector(".settings");

let min = document.querySelector(".minutes input"),
    sec = document.querySelector(".seconds input"),
    timerEnd=parseInt(min.value) * 60 + parseInt(sec.value),
    togglesettings=false;

startButton.addEventListener("click",function togglestart(){
        togglesettings=false;
        min.disabled=true;
        sec.disabled=true;
        timerEnd=parseInt(min.value) * 60 + parseInt(sec.value)
    
        if(startButton.textContent ==='stop'){
            startButton.textContent ='start';
            starttimer();
        }
        else{
           if(parseInt(min.value) >= 60 || parseInt(sec.value) >= 60 ){
            alert("Enter correct value");
           }
            else if (!(parseInt(min.value) === 0 && parseInt(sec.value) === 0)) {
                startButton.textContent ='stop';  
                document.querySelector(".ring").classList.remove("ending")
                starttimer();
            }
            else{
                alert("Enter Time Value in the Timer!");
            };
    
        };
})
    
settingButton.addEventListener("click",function togglesetting(){
    if(!timerOn){
     togglesettings=true;
     min.disabled=false;
     sec.disabled=false;
     min.value= document.querySelector(".minutes input").value;
     sec.value= document.querySelector(".seconds input").value;
     clearInterval(timerOn);
     make_timerOnNull(); 
     make_timerStart_startover();}
})


export{min,sec,timerEnd,startButton};