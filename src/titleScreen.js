function playGame() {
  const playButton = document.querySelector(".play-button");
  const background = document.querySelector(".background-wrap");
  const cactusList = document.querySelectorAll(".cactus");
  const title = document.querySelector(".title");
  const dino = document.querySelector(".dino");
  const floor = document.querySelector(".floor");

  playButton.addEventListener("click", function () {
    // Define opacity to 0
    const targetOpacity = 0.008;

    var audio = document.getElementById("powerOff");
    audio.volume = 0.6;
    audio.play();

    playButton.disabled = true;
    playButton.style.opacity = targetOpacity;
    background.style.opacity = targetOpacity;
    title.style.opacity = targetOpacity;
    floor.style.opacity = targetOpacity;

    cactusList.forEach((cactus) => {
      cactus.style.opacity = targetOpacity;
    });

    setTimeout(() => {
      var audio = document.getElementById("hide");
      audio.play();
      setTimeout(() => {
        dino.style.opacity = targetOpacity;
      }, 100) 
    }, 2750);
  });
}

export { playGame };
