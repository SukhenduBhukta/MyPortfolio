VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "maxGlare": .01,
    gyroscope: true,
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navList").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))