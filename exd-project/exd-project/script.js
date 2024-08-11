window.addEventListener("load", () => {
  const video = document.querySelector(".straight-video");
  setTimeout(() => {
    video.play();
  }, 500);
});

window.onscroll = function () {
  scrollAnime();
};

const title = document.getElementById("title-Id");
const cards = document.querySelectorAll(".card");

function scrollAnime() {
  if (document.documentElement.scrollTop > 150) {
    title.className = "animate-slam1";
    cards.forEach((card) => {
      card.classList.add("animate-slam2");
    });
  } else {
    title.className = "";
    cards.forEach((card) => {
      card.classList.remove("animate-slam2");
    });
  }
}
