let video = document.getElementsByClassName("video")[0];

window.addEventListener("load", function () {
  console.log("Good job opening the window");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// playing controls
//

/*
feedback from the checker
----ERROR!!!!!!
-3: Video 'Old School' style class not set correctly. (Did you apply the class to the video tag?)
-3: Video unmute button text is not displaying correctly
-3: Video volume [ before ] play is not displaying correctly. It is supposed to be updated

*/

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

let slider = document.querySelector("#slider");
let volume = document.querySelector("#volume");

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.volume = slider.value / 100;
  volume.textContent = slider.value + "%";
  video.play();
});

slider.oninput = function () {
  volume.innerHTML = this.value + "%";
  video.volume = this.value / 100;
};

let mute = document.querySelector("#mute");
mute.addEventListener("click", updateMuteButton);

function updateMuteButton() {
  if (video.muted) {
    video.muted = false;
    slider.value = 10;
    volume.innerHTML = slider.value + "%";
    mute.innerHTML = "Mute";
  } else {
    video.muted = true;
    slider.value = 0;
    volume.innerHTML = slider.value + "%";
    mute.innerHTML = "Unmute";
  }
}

let speedup = document.querySelector("#faster");
speedup.addEventListener("click", function () {
  video.playbackRate += 0.1;
  console.log("Speed Up Video");
});

let slowdown = document.querySelector("#slower");
slowdown.addEventListener("click", function () {
  video.playbackRate -= 0.1;
  console.log("Slow Down Video");
});

let skip = document.querySelector("#skip");
skip.addEventListener("click", function () {
  video.currentTime += 10;
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
  console.log("Skip Ahead Video");
});

// change the video style between original and styled
const figcaption = document.querySelector("figcaption");
let original = document.querySelector("#orig");
let styled = document.querySelector("#vintage");

original.addEventListener("click", function () {
  video.classList.remove("oldSchool");
  figcaption.innerHTML = "Original Video";
});

styled.addEventListener("click", function () {
  video.classList.add("oldSchool");
  figcaption.innerHTML = "Styled Video";
});
