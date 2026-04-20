

let playBtn =  document.querySelector("#playButton");
let pauseBtn =  document.querySelector("#pauseButton");
let catSound = document.querySelector("catSound");

let fastBtn = docuemnt.querySelector("#fastButton");
let slowBtn = docuemnt.querySelector("#slowButton");
let speedBtn = docuemnt.querySelector("#Speed");

fastBtn.addEventListener("click", function(){
    soundSpeed = soundSpeed * 1.1;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;
})

slowBtn.addEventListener("click", function(){
    soundSpeed = soundSpeed * 0.9;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;
})


function playSound(){
    console.log("play now");
    catSound.loop = true;
    catSound.play();
}
playBtn.addEventListener ("click", playSound)


