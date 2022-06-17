import { timerupdate ,starttimer,timerOn,make_timerOnNull,make_timerStart_startover,checkendcases,zerovalues} from "./functions.js";
//xonstant variable initialisation
const startButton = document.querySelector(".start");
const settingButton = document.querySelector(".settings");
//Variable initialisation
let min = document.querySelector(".minutes input"),
    sec = document.querySelector(".seconds input"),
    timerEnd=parseInt(min.value) * 60 + parseInt(sec.value),
    togglesettings=false;
// creating event for click on start button
startButton.addEventListener("click",function togglestart(){
        togglesettings=false;
        //making them disabled so that values cannot be changed anymore
        min.disabled=true;
        sec.disabled=true;
        // calculating total value of time according the values in input field of minutes and second
        timerEnd=parseInt(min.value) * 60 + parseInt(sec.value)
        if(startButton.textContent ==='stop'){
            //changing text of the button to start
            startButton.textContent ='start';
            //start timer function starts the timer
            starttimer();
        }
        else{
           if(checkendcases()){
            alert("Enter correct value");
           }
            else if (!(zerovalues())) {
                //changing text of the button to stop
                startButton.textContent ='stop';
                //remove ending class from the ring to change the color back to green  
                document.querySelector(".ring").classList.remove("ending")
                starttimer();
            }
            else{
                //alert if no value is enetered in the timer
                alert("Enter Time in the Timer!");
            };
    
        };
})   
settingButton.addEventListener("click",function togglesetting(){
    //allow setting to only work if timer is not in progress
    if(!timerOn){
    //allow user to edit values in the input field and fetch the values
     togglesettings=true;
     min.disabled=false;
     sec.disabled=false;
     min.value= document.querySelector(".minutes input").value;
     sec.value= document.querySelector(".seconds input").value;
     clearInterval(timerOn);
     //function to make timerOn variable null
     make_timerOnNull(); 
     //function to make timerstart zero
     make_timerStart_startover();}
})
export{min,sec,timerEnd,startButton};