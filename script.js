const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector("header .nav");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  if (menuBtn.textContent === "☰") {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});

const images = [
  "https://justenterprise.org/wp-content/uploads/2023/08/Leadership-coaching.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDJBFN5S1X7U0hNJIkpTaACr-l7i6qwjIClNW2QmnEXdcU2gIesritnSW4qKFZ_YiAOw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUWLKOSIQvdS3v_LLjQ0uRB2U8xLJYscRqg&s",
  "https://img.freepik.com/premium-photo/school-drawing-images-background-copy-space_1179130-582093.jpg?semt=ais_incoming&w=740&q=80"
];

let index = 0;
let current = 0;
const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

bg1.style.backgroundImage = `url(${images[0]})`;

setInterval(() => {
  const nextIndex = (index + 1) % images.length;
  if (current === 0) {
    bg2.style.backgroundImage = `url(${images[nextIndex]})`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
    current = 1;
  } else {
    bg1.style.backgroundImage = `url(${images[nextIndex]})`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
    current = 0;
  }
  index = nextIndex;
}, 2000); 

document.getElementById("exploreBtn").addEventListener("click", () => {
  const coursesSection = document.getElementById("courses");
  coursesSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! We will contact you soon.");
  e.target.reset();
});
