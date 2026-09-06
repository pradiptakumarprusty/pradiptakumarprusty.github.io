/* ==========================================
   DARK / LIGHT MODE TOGGLE
========================================== */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        themeIcon.textContent = "☀";

    } else {

        themeIcon.textContent = "☾";

    }

});
