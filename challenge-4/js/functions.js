//function to generate random key
const generateRandomKey = (allKeys) => {
    const random = Math.floor(Math.random() * allKeys.length);
    return allKeys[random];
}
//to toggle jiggle class to the buttons
const toggleJiggleClass = (randomKey) => {
    randomKey.classList.toggle('jiggle');
}
export{generateRandomKey,toggleJiggleClass}