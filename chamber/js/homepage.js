//For the dynamic time & date//
const options = { year: "numeric" };
document.getElementById("currentyear").innerHTML =
  new Date().toLocaleDateString("en", options);
let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = text;

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
document.getElementById("headerdate").innerHTML = `<em>${fulldateUK}</em>`;

// For the responisive navigation//
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Locate the actual images to load (stored in data-src)
const imagesToLoad = document.querySelectorAll("img[data-src]");

//Function to change the data-src to be the src and then to remove the attribute 'data-src'
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

const daysBetween = document.querySelector('#daysleft');

let visitDay = Number(window.localStorage.getItem('last-visit'));
visitDay = Date.now();
localStorage.setItem('last-visit', visitDay);

const currentDay = Date.now();
const differance = (currentDay - visitDay) / 84600000;

daysBetween.textContent = differance.toFixed();

//code for 'JoinUsMessage'
const day = now.getDay();
const joinMess = document.querySelector(".joinUsMess");

if (day == 1) {
  joinMess.style.display = "block";
} else if (day == 2) {
  joinMess.style.display = "block";
} else {
  joinMess.style.display = "none";
}
