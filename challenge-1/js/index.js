import { timerupdate ,starttimer,timerOn,make_timerOnNull,make_timerStart_startover,checkendcases,ifInteger,zerovalues} from "./functions.js";
import{min,sec,timerEnd,startButton,totalTime,settingButton} from "./query.js"

let togglesettings=false;
// creating event for click on start button
startButton.addEventListener("click",function togglestart(){
        togglesettings=false;
        //making them disabled so that values cannot be changed anymore
        min.disabled=true;
        sec.disabled=true;
        // calculating total value of time according the values in input field of minutes and second
        totalTime();
        if(startButton.textContent ==='stop'){
            //changing text of the button to start
            startButton.textContent ='start';
            //start timer function starts the timer
            starttimer();
        }
        else{
            if(!ifInteger(min.value,sec.value)){
                alert("enter correct number");
            }
            else if(checkendcases()){
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
                //alert if no value is entered in the timer
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
