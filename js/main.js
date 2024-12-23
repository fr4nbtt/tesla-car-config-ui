"use strict";

const topBar = document.querySelector("#top-bar");

/* Handle Top Bar On Scroll */
const handleScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};

/* Event listeners */
window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
