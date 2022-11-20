// Add js here.
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var slowerButton = document.getElementById("slower");
var fasterButton = document.getElementById("faster");
var skipButton = document.getElementById("skip");
var muteButton = document.getElementById("mute");

var output = document.getElementById("volume");
var slider = document.getElementById("slider");


var vid = document.getElementById("videoplayer"); 
var tempVolume = 0
vid.autoplay = false;
vid.loop = false;
vid.load();


playButton.addEventListener("click", function() {
    vid.play(); 
});

pauseButton.addEventListener("click", function() {
    vid.pause(); 
});

muteButton.addEventListener("click", function() {

    if (vid.muted == false) {
        vid.muted = true;
        muteButton.textContent = 'Unmute';
        tempVolume = slider.value;
        slider.value = 0;
        output.innerHTML = slider.value;
    }
    else {
        vid.muted = false;
        muteButton.textContent = 'Mute';
        slider.value = tempVolume;
        output.innerHTML = slider.value;
        vid.volume = tempVolume / 100;
    }
    
});

slowerButton.addEventListener("click", function() {

    if (vid.playbackRate == 2) {
        vid.playbackRate = 1;
    }
    else if (vid.playbackRate == 1){
        vid.playbackRate = 0.5;
    }
    else {
        alert("Video is at slowest speed!");
    }
    
});

fasterButton.addEventListener("click", function() {

    if (vid.playbackRate == 0.5) {
        vid.playbackRate = 1;
    }
    else if (vid.playbackRate == 1) {
        vid.playbackRate = 2;
    }
    else {
        alert("Video is at fastest speed!");
    }
});

skipButton.addEventListener("click", function() {
    vid.currentTime += 15;
    if (vid.currentTime >= vid.duration) {
        vid.load();
    }
});

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
    vid.volume = this.value / 100;
    if (vid.volume == 0) {
        vid.muted = true;
        muteButton.textContent = 'Unmute';
    } 
    else {
        vid.muted = false;
        muteButton.textContent = 'Mute';
    }
};