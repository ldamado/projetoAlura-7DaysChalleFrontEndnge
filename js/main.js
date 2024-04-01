const hamburguer = document.querySelector(".hamburger");
const navBarMenu = document.querySelector(".navBar__menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navBarMenu.classList.toggle("active");
})

document.querySelectorAll(".navBar__link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navBarMenu.classList.remove("active");
}))