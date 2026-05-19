const section1 = document.getElementById("section1");
const layer1 = document.getElementById("bg-layer1");
const layer2 = document.getElementById("bg-layer2");

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg"
];

let currentIndex = 0;
let isLayer1Active = true;

// Set first image
layer1.style.backgroundImage = `url(${images[0]})`;
layer1.style.opacity = 1;
layer2.style.opacity = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;

  if (isLayer1Active) {
    layer2.style.backgroundImage = `url(${images[currentIndex]})`;
    layer2.style.opacity = 1;
    layer1.style.opacity = 0;
  } else {
    layer1.style.backgroundImage = `url(${images[currentIndex]})`;
    layer1.style.opacity = 1;
    layer2.style.opacity = 0;
  }

  isLayer1Active = !isLayer1Active;

}, 10000);