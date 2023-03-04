
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

let date1 = document.getElementById("currentTime");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
date1.innerHTML = fulldate;

document.getElementById("currentDate").innerHTML = document.lastModified;

//Hamburger Menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Monday/Tuesday Banner
if (now.getDay() < 3 && now.getDay() > 0){
    document.getElementById("meetAndGreet").classList.toggle("activeBanner");
}

/*Progressive "lazy" loading*/
const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};


const loadImages = (image) => {
    if (image.getAttribute("src")){
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
    }
    else
    {
        image.setAttribute("srcset", image.getAttribute("data-src"));
    }
};

if("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    images.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {
}

/*Regular Expressions*/
/*const re = new RegExp("[a-zA-Z][\-][\s]{7}");
const setPattern = document.querySelector("input[pattern]");
setPattern.setAttribute("pattern", re);*/