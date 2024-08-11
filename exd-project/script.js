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
function scrollAnime() {
  if (document.documentElement.scrollTop > 150) {
    title.className = "animate-slam";
  } else {
    title.className = "";
  }
}
