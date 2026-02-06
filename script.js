// ************************* Alternate Photo ******************************
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const section1 = document.getElementById("section1");

leftArrow.addEventListener("click", leftClick);
rightArrow.addEventListener("click", rightClick);

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg"
];

let currentIndex = 0;

// initialize
section1.style.backgroundImage = `url('${photos[currentIndex]}')`;

function rightClick(){
  currentIndex++;
  if (currentIndex >= photos.length) {
    currentIndex = 0; // wrap to start
  }
  section1.style.backgroundImage = `url('${photos[currentIndex]}')`;
}

function leftClick(){
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = photos.length - 1; // wrap to end
  }
  section1.style.backgroundImage = `url('${photos[currentIndex]}')`;
}


