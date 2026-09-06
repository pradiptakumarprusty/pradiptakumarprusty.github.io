document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SMOOTH NAVIGATION
    ========================= */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    e.preventDefault();

                    const headerOffset = 300;

const elementPosition = targetSection.getBoundingClientRect().top;
const offsetPosition = elementPosition + window.scrollY - headerOffset;

window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
});
                }
            }

        });

    });


    /* =========================
       THEME TOGGLE
    ========================= */

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {

                themeIcon.textContent = "☀️";

                localStorage.setItem("theme", "light");

            } else {

                themeIcon.textContent = "🌙";

                localStorage.setItem("theme", "dark");

            }

        });

    }


    /* =========================
       LOAD SAVED THEME
    ========================= */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        if (themeIcon) {
            themeIcon.textContent = "☀️";
        }

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });

});
