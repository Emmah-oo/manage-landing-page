const burger = document.querySelector(".burger");
const links = document.querySelectorAll(".nav-links li");
const nav = document.querySelector(".nav-links");
const btn = document.querySelector(".grid-4 .btn");
const inputField = document.querySelector(".grid-4 input");
const mail = document.querySelector(".mail");
const invalid = document.querySelector(".invalid");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("toggle");
});

btn.addEventListener("click", () => {
  let input = inputField.value;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    invalid.textContent = "";
    inputField.className = "valid_Email";
    inputField.value = "";
  } else {
    inputField.className = "invalid_Email";
    invalid.textContent = "please insert a valid email";
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    // when window width is = 0px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
