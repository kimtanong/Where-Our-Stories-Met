// MUSIC CONTROL
const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");
let playing = false;

btn.onclick = () => {
  if (!playing) {
    music.play();
    btn.textContent = "⏸ pause";
    playing = true;
  } else {
    music.pause();
    btn.textContent = "▶ play";
    playing = false;
  }
};

// FADE + BEAT ON SCROLL
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.5 });

fades.forEach(el => observer.observe(el));

// HYPERPOETRY INTERACTION
document.querySelectorAll(".link").forEach(word => {
  word.addEventListener("click", () => {
    alert("this word remembers you.");
  });
});


const popupImg = document.getElementById("popupImg");

document.querySelectorAll("[data-img]").forEach(word => {
  word.addEventListener("click", () => {
    popupImg.src = word.dataset.img;
    popupImg.style.display = "block";
  });
});

// click image to close
popupImg.addEventListener("click", () => {
  popupImg.style.display = "none";
});

const popupImg1 = document.getElementById("popupImg1");

document.querySelectorAll("[data-img]").forEach(word => {
  word.addEventListener("click", () => {
    popupImg1.src = word.dataset.img;
    popupImg1.style.display = "block";
  });
});

// click image to close
popupImg1.addEventListener("click", () => {
  popupImg1.style.display = "none";
});


document.querySelectorAll("[data-link]").forEach(word => {
  word.addEventListener("click", () => {
    window.open(word.dataset.link, "_blank");
  });
});


const videoPopup = document.getElementById("videoPopup");
const video = videoPopup.querySelector("video");
const source = video.querySelector("source");

document.querySelectorAll("[data-video]").forEach(word => {
  word.addEventListener("click", () => {
    source.src = word.dataset.video;
    video.load();
    videoPopup.style.display = "block";
    video.play();
  });
});

// click outside video to close
videoPopup.addEventListener("click", () => {
  video.pause();
  videoPopup.style.display = "none";
});
