// ************************* Alternate Photo ******************************
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const section1 = document.getElementById("section1");

leftArrow.addEventListener("click", leftClick);
rightArrow.addEventListener("click", rightClick);

const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg"
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

function setBg(url){
  section1.classList.add("fading");
  section1.style.setProperty("--bg", `url('${url}')`);
  section1.style.setProperty("--opacity", "0");
  setTimeout(() => {
    section1.style.setProperty("--opacity", "1");
  }, 20);
}


