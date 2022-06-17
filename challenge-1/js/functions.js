
import {min,sec,timerEnd,startButton} from "./index.js";

let secLeft=0, 
    minLeft=0,
    timerStart=0,
    timerOn=null;
 
 
const timerupdate = () => {
    timerStart++;
    secLeft = Math.floor((timerEnd - timerStart) % 60);
    minLeft = Math.floor((timerEnd - timerStart) / 60);
    sec.value = secLeft.toString().length == 2 ? secLeft : `0${secLeft}`;
    min.value = minLeft.toString().length == 2 ? minLeft : `0${minLeft}`;
    if (timerStart == timerEnd) {
            clearInterval(timerOn);
            timerOn = null;
            timerStart = 0;
            startButton.textContent ='start';
            document.querySelector(".ring").classList.add("ending");
            // if (sec.value===0){
                alert(" TIMER ENDED!!!");
            // }
          }
}

const  starttimer = () => {
    if (!timerOn) {
        timerOn = setInterval(timerupdate, 1000);
      }
      else {
        clearInterval(timerOn);
        timerOn=null;   
    }
};

const make_timerOnNull = ()=>{
    timerOn=null;
}
const make_timerStart_startover = ()=>{
    timerStart=0;
}


export {timerupdate,starttimer,timerOn,make_timerOnNull,make_timerStart_startover};