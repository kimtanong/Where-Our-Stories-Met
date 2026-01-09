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


// universal popup image
const popupImg = document.getElementById("popupImg");

// any clickable word with data-img
document.querySelectorAll("[data-img]").forEach(word => {
  word.addEventListener("click", () => {
    popupImg.src = word.dataset.img;    // set correct image
    popupImg.style.display = "block";   // show popup
    popupImg.style.zIndex = "99999";    // always on top
  });
});

// hide popup when clicked
popupImg.addEventListener("click", () => {
  popupImg.style.display = "none";
});


// hide when clicking the image itself
popupImg.addEventListener("click", () => {
  popupImg.style.display = "none";
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
