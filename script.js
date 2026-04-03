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

//function for incrementing to the next photo
function rightClick(){
  currentIndex++;
  if (currentIndex >= photos.length) {
    currentIndex = 0; // wrap to start
  }
  section1.style.backgroundImage = `url('${photos[currentIndex]}')`;
}

//function for decrementing to the next photo
function leftClick(){
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = photos.length - 1; // wrap to end
  }
  section1.style.backgroundImage = `url('${photos[currentIndex]}')`;
}

// function setBg(url){
//   section1.classList.add("fading");
//   section1.style.setProperty("--bg", `url('${url}')`);
//   section1.style.setProperty("--opacity", "0");
//   setTimeout(() => {
//     section1.style.setProperty("--opacity", "1");
//   }, 20);
// }

// ************************* About Me ******************************

// About Me Section
const aboutMe = document.getElementById("aboutme");
const originalContent = aboutMe.innerHTML;

//About me content
const content = {
    Education: `
      <div class="info-panel">
        <h1>Education</h1>
        <p>Attending <strong style="color: orange">Clemson University</strong> was the best decision of my life. From the incredible education I received to the amazing relationships I made, I was able to grow in ways I could never imagine.</p>
        <p>I completed my <strong>Bachelor of Science in Computer Science</strong> in December of 2025 with a minor in <strong>Cyber Security</strong>.</p>
        <h2>Notable Courses</h2>
        <table class="course-table">
        <thead>
          <tr>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web Application Development</td>
          </tr>
          <tr>
            <td>Software Engineering</td>
          </tr>
          <tr>
            <td>Database Management Sytems</td>
          </tr>
          <tr>
            <td>Principals of Cyber Security</td>
          </tr>
          <tr>
            <td>System Admin and Security</td>
          </tr>
        </tbody>
      </table>
      </div>
    `,
    Home: `
      <div class="info-panel">
        <h1>Home</h1>
        <p><strong>Hickory</strong> is a small town west of North Carolina just below the Appalachian mountains. </p>
      </div>
    `
};

function showInfo(key) {
  aboutMe.innerHTML = `
    ${content[key]}
    <button class="back-btn" onclick="goBack()">&#8592;</button>
  `;
}

function goBack() {
  aboutMe.innerHTML = originalContent;
  attachButtonListeners();
}

//Initiliazing the button event listeners
function attachButtonListeners() {
  document.getElementById("Education").addEventListener("click", () => showInfo("Education"));
  document.getElementById("Home").addEventListener("click", () => showInfo("Home"));
  document.getElementById("Skills").addEventListener("click", () => showInfo("Skills"));
  document.getElementById("Fraternity").addEventListener("click", () => showInfo("Fraternity"));
}

//Initializing function call
attachButtonListeners();

