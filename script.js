/*jshint esversion: 10 */

window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sounds");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#b0d360",
    "#6084d3",
    "#ae60d3",
    "#d37b60",
    "#e44949",
  ];
  // console.log(sounds);

  // Playing the sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      // Reset the current time to enable the sound to interrupt another
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });
  // Bubble function
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
