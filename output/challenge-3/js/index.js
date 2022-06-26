//gets array of queries for piano keys
const keys = document.querySelectorAll(".piano a");
//path for audio folder
const AUDIO_PATH = "./audio";
//plays the sound with url
const playsound = (audio_id) => {
  let audio = new Audio(AUDIO_PATH + `/key-${audio_id}.mp3`);
  audio.play();
};
//assigning sound and ids to keys.
keys.forEach((element, index) => {
  element.addEventListener("click", () => {
    return playsound(index + 1);
  });
});
