// HOUDINI PARALLELEWOW -----------------------------
CSS.paintWorklet.addModule(
  "https://unpkg.com/parallelowow@0.1.5/parallelowow.js"
);
// Navigation -----------------------------
const nav = document.getElementById("nav");

const toggleMenu = () => {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
};

const hideMenu = () => {
  nav.classList.remove("active");
  menuIcon.classList.remove("active");
};

// SLIDESHOW -------------------------------------------------
let currentImageIndex = 0;

const images = document.querySelectorAll(".slide");
console.log(images.length);

const switchImage = () => {
  console.log("inside switchImage");
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
};

setInterval(() => {
  switchImage();
}, 5000);

// Banner -------------------------------------------------
document.getElementById("bannerContent");
let messageHTML =
  "<span class='contact-message'> Contact us at email@example.com - We're here to help!</span>";

let repeatedMessage = messageHTML.repeat(10);
bannerContent.innerHTML = repeatedMessage + repeatedMessage;
