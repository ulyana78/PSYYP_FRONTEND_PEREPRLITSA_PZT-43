document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    burger.addEventListener("click", () => {
        burger.classList.toggle("open");
        nav.classList.toggle("open");
    });
});
