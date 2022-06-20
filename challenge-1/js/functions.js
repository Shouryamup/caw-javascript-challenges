
import{min,sec,timerEnd,startButton} from "./query.js"
let secLeft=0, 
    minLeft=0,
    timerStart=0,
    timerOn=null;
// timer update updates the value in the input field for every second
const timerupdate = () => {
    timerStart++;
    secLeft = Math.floor((timerEnd - timerStart) % 60);
    minLeft = Math.floor((timerEnd - timerStart) / 60);
    sec.value = secLeft.toString().length == 2 ? secLeft : `0${secLeft}`;
    min.value = minLeft.toString().length == 2 ? minLeft : `0${minLeft}`;
    //if the timer ends then setinterval ends, alert is popped and ring color is changed
    if (timerStart == timerEnd) {
            clearInterval(timerOn);
            timerOn = null;
            timerStart = 0;
            startButton.textContent ='start';
            document.querySelector(".ring").classList.add("ending");
                setTimeout(()=>alert(" TIMER ENDED!!!"),0);
          }
}

const  starttimer = () => {
    if (!timerOn) {
        //set inetval makes the timerupdate run for every second so it can update time
        timerOn = setInterval(timerupdate, 1000);
      }
      else {
        // if timer is already on, then then this function pauses the timer
        clearInterval(timerOn);
        timerOn=null;   
    }
};

//function to make timerOn variable null
const make_timerOnNull = ()=>{
    timerOn=null;
}
//function to make timerstart zero
const make_timerStart_startover = ()=>{
    timerStart=0;
}


const checkendcases =()=>{
    return (parseInt(min.value) >= 60 || parseInt(sec.value) >= 60 )
}

const zerovalues=()=>{
return (parseInt(min.value) === 0 && parseInt(sec.value) === 0)
}


export {timerupdate,starttimer,timerOn,make_timerOnNull,make_timerStart_startover,checkendcases,zerovalues};