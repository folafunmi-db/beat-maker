/*jshint esversion: 10 */

window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sounds");
  const pads = document.querySelectorAll(".pads div");
  console.log(sounds);

  // Playing the sounds
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function () {
      sounds[index].play();
    });
  });
});
