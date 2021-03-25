import { Swiper, Navigation, Pagination, EffectFade, Controller } from "swiper";
// import Swiper styles
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

// 1st swiper for images

const swiperImg = new Swiper(".swiper-container", {
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
  controller: {
    control: swiperText,
  },
});

// 2nd swiper for text

const swiperText = new Swiper(".ls-panel__slider-container", {
  loop: true,
  effect: "fade",
  speed: 660,
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  controller: {
    control: swiperImg,
  },
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

// highlight each panel when clicking through the slides

swiperText.on("slideChange", function () {
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

swiperText.on("transitionStart", function () {
  let styledPanel = document
    .querySelector(`.rs-panel${swiperImg.realIndex + 1}`)
    .classList.add("active-panel");
  let styledPlusIcon = document
    .querySelector(`.plus-icon${swiperImg.realIndex + 1}`)
    .classList.add("active-panel-plus-icon");
  let styledLineH = document
    .querySelector(`.lineH${swiperImg.realIndex + 1}`)
    .classList.add("active-panel-line");
  let styledLineV = document
    .querySelector(`.lineV${swiperImg.realIndex + 1}`)
    .classList.add("active-panel-line");
});

const toggleMenu = () => {
  const hamburgerMenu = document.querySelector(".menu-btn-wrapper");
  const menu = document.querySelector(".menu-toggle");
  hamburgerMenu.addEventListener("click", () =>
    menu.classList.toggle("menu-toggle-active")
  );
};

const toggleCart = () => {
  const cart = document.querySelector(".cart-icon");
  const cartMenu = document.querySelector(".cart-toggle-wrapper");
  const closeCartIcon = document.querySelector(".close-icon");
  const closeCart = document.querySelector(".cart-toggle-wrapper");
  cart.addEventListener("click", () =>
    cartMenu.classList.toggle("cart-toggle-wrapper-active")
  );
  closeCartIcon.addEventListener("click", () =>
    cartMenu.classList.remove("cart-toggle-wrapper-active")
  );
  closeCart.addEventListener("click", () =>
    cartMenu.classList.remove("cart-toggle-wrapper-active")
  );
};

toggleCart();
toggleMenu();
