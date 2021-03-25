import { Swiper, Navigation, Autoplay, Pagination, EffectFade } from "swiper";
// import Swiper styles
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Autoplay, Pagination, EffectFade]);

const swiper = new Swiper(".swiper-container", {
  loop: true,
  effect: "fade",
  speed: 660,
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

// each panel is highlighted when clicked through the slides.

swiper.on("slideChange", function () {
  for (let i = 1; i <= numberOfSlides; i++) {
    let panel = document
      .getElementById(`slide${i}`)
      .classList.remove("active-panel");
    let plusIcon = document
      .querySelector(`.plus-icon${i}`)
      .classList.remove("active-panel-plus-icon");
    let lineH = document
      .querySelector(`.lineH${i}`)
      .classList.remove("active-panel-line");
    let lineV = document
      .querySelector(`.lineV${i}`)
      .classList.remove("active-panel-line");
  }
});

swiper.on("transitionStart", function () {
  let styledPanel = document
    .querySelector(`.rs-panel${swiper.realIndex + 1}`)
    .classList.add("active-panel");
  let styledPlusIcon = document
    .querySelector(`.plus-icon${swiper.realIndex + 1}`)
    .classList.add("active-panel-plus-icon");
  let styledLineH = document
    .querySelector(`.lineH${swiper.realIndex + 1}`)
    .classList.add("active-panel-line");
  let styledLineV = document
    .querySelector(`.lineV${swiper.realIndex + 1}`)
    .classList.add("active-panel-line");
});

const numberOfSlides = document
  .querySelector(".swiper-container")
  .getElementsByClassName("rs-panel").length;

//change slide on mouseenter
for (let i = 1; i <= numberOfSlides; i++) {
  let slide = document.getElementById(`slide${i}`);
  let swipe = document.querySelector(
    `.swiper-pagination-bullet:nth-child(${i})`
  );
  slide.addEventListener("mouseenter", () => swipe.click());
}
