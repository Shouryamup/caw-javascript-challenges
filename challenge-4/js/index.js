import {generateRandomKey,toggleJiggleClass} from './functions.js';
//array of queries all the keys in the keyboard
const allKeys = document.querySelectorAll(".key");
//fetching default variables
 let currentJiggleKey = document.querySelector('.jiggle').getAttribute('data-key'),
    randomKey = document.querySelector('.jiggle');
//performing operations based on the keypress
document.addEventListener('keydown', (event) => {
    //handling case sensitive errors
    let clickedKeyVal = event.key.toUpperCase();
    //handling key error
    if (clickedKeyVal === 'DELETE') 
        clickedKeyVal = "BACKSPACE";
    //stop jiggling and generating new random key
    if (clickedKeyVal == currentJiggleKey) { 
        if(currentJiggleKey == '\\')
           currentJiggleKey += `\\`;
        toggleJiggleClass(document.querySelector(`[data-key="${currentJiggleKey}"]`));
        randomKey = generateRandomKey(allKeys);
        currentJiggleKey = randomKey.getAttribute('data-key')
        currentJiggleKey=currentJiggleKey
        toggleJiggleClass(randomKey);
    }
});