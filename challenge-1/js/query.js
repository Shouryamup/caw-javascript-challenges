//constant variable initialisation
const startButton = document.querySelector(".start");
const settingButton = document.querySelector(".settings");

//Variable initialisation
let min = document.querySelector(".minutes input"),
    sec = document.querySelector(".seconds input"),
    timerEnd=parseInt(min.value) * 60 + parseInt(sec.value);

const totalTime =()=>{
        timerEnd=parseInt(min.value) * 60 + parseInt(sec.value);
    }
export{min,sec,timerEnd,startButton,settingButton,totalTime};