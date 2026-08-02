const intro = document.getElementById("intro-screen");
const skip = document.getElementById("intro-skip");

function closeIntro() {
  if (!intro || intro.classList.contains("intro-hidden")) {
    return;
  }

  intro.classList.add("intro-hidden");
  document.body.classList.remove("intro-active");

  window.setTimeout(() => {
    intro.remove();
  }, 800);
}

if (intro) {
  document.body.classList.add("intro-active");

  window.setTimeout(() => {
    intro.classList.add("impact");
  }, 4320);

  window.setTimeout(closeIntro, 6500);

  skip?.addEventListener("click", closeIntro);
}
