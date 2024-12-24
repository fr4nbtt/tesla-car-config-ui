"use strict";

const topBar = document.querySelector("#top-bar");
const exteriorColorSection = document.querySelector("#exterior-buttons");
const interiorColorSection = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");
const wheelButtonsSection = document.querySelector("#wheel-buttons");

/* Handle Top Bar On Scroll */
const handleScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};

/* Image Mapping */
const exteriorImages = {
  "Stealth Grey": "images/model-y-stealth-grey.jpg",
  "Pearl White": "images/model-y-pearl-white.jpg",
  "Deep Blue": "images/model-y-deep-blue-metallic.jpg",
  "Solid Black": "images/model-y-solid-black.jpg",
  "Ultra Red": "images/model-y-ultra-red.jpg",
  Quicksilver: "images/model-y-quicksilver.jpg",
};

const interiorImages = {
  Dark: "images/model-y-interior-dark.jpg",
  Light: "images/model-y-interior-light.jpg",
};

/* Handle Color Selection */
const handleColorButtonClick = (e) => {
  let button;

  if (e.target.tagName === "IMG") {
    button = e.target.closest("button");
  } else if (e.target.tagName === "BUTTON") {
    button = e.target;
  }

  if (button) {
    const buttons = e.currentTarget.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("btn-selected"));
    button.classList.add("btn-selected");

    /* Change exterior image */
    if (e.currentTarget === exteriorColorSection) {
      const color = button.querySelector("img").alt;
      exteriorImage.src = exteriorImages[color];
    }

    /* Change interior image */
    if (e.currentTarget === interiorColorSection) {
      const color = button.querySelector("img").alt;
      interiorImage.src = interiorImages[color];
    }
  }
};

/* Wheel Selection */
const handleWheelButtonClick = (e) => {
  if (e.target.tagName === "BUTTON") {
    const buttons = document.querySelectorAll("#wheel-buttons button");
    buttons.forEach((btn) => btn.classList.remove("bg-gray-700", "text-white"));

    // Add selected styles  to clicked button
    e.target.classList.add("bg-gray-700", "text-white");

    const selectedWheel = e.target.textContent.includes("Performance");

    exteriorImage.src = selectedWheel
      ? "images/model-y-stealth-grey-performance.jpg"
      : "images/model-y-stealth-grey.jpg";
  }
};

/* Event listeners */
window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
exteriorColorSection.addEventListener("click", handleColorButtonClick);
interiorColorSection.addEventListener("click", handleColorButtonClick);
wheelButtonsSection.addEventListener("click", handleWheelButtonClick);
