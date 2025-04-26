const controls = document.querySelector(".controls");
const picture = document.querySelector("img");
const nextButton = document.querySelector(".right");
const slide1Progress = document.querySelector(".slide-1");
const slide2Progress = document.querySelector(".slide-2");
const slide3Progress = document.querySelector(".slide-3");
const path1 = "./red-panda.jpg";
const path2 = "./beluga.jpg";
const path3 = "./orangutan.jpg";

const intervalId = setInterval(nextSlide, 5000);

function nextSlide() {
    nextButton.click();
}

controls.addEventListener("click", (event) => {
    const path = picture.getAttribute("src");
    if (event.target.classList.contains("right")) {
        if (path === path1) {
            picture.setAttribute("src", path2);
            slide1Progress.classList.toggle("current");
            slide2Progress.classList.toggle("current");
        }
        else if (path === path2) {
            picture.setAttribute("src", path3);
            slide2Progress.classList.toggle("current");
            slide3Progress.classList.toggle("current");
        }
        else {
            picture.setAttribute("src", path1);
            slide3Progress.classList.toggle("current");
            slide1Progress.classList.toggle("current");
        }
    }
    else if (event.target.classList.contains("left")) {
        if (path === path3) {
            picture.setAttribute("src", path2);
            slide3Progress.classList.toggle("current");
            slide2Progress.classList.toggle("current");
        }
        else if (path === path2) {
            picture.setAttribute("src", path1);
            slide2Progress.classList.toggle("current");
            slide1Progress.classList.toggle("current");
        }
        else {
            picture.setAttribute("src", path3);
            slide1Progress.classList.toggle("current");
            slide3Progress.classList.toggle("current");
        }
    }

});