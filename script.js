/* =========================================================
   ARIFA DANCE ACADEMY
   MAIN JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

const header = document.querySelector(".site-header");

function handleHeaderScroll() {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.innerHTML = isOpen ? "✕" : "☰";
    });


    /* Close menu after clicking a link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML = "☰";
        });

    });
}


/* =========================================================
   FAQ ACCORDION
   ========================================================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = question.closest(".faq-item");

        if (!currentItem) return;

        const isAlreadyOpen =
            currentItem.classList.contains("active");


        /* Close all FAQ items */

        document.querySelectorAll(".faq-item").forEach(function (item) {
            item.classList.remove("active");

            const icon = item.querySelector(".faq-icon");

            if (icon) {
                icon.textContent = "+";
            }
        });


        /* Open clicked item */

        if (!isAlreadyOpen) {

            currentItem.classList.add("active");

            const icon =
                currentItem.querySelector(".faq-icon");

            if (icon) {
                icon.textContent = "×";
            }
        }

    });

});


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* Browser validation */

        if (!contactForm.checkValidity()) {

            contactForm.reportValidity();

            return;
        }


        /* Show success message */

        if (formMessage) {

            formMessage.textContent =
                "Thank you for contacting Arifa Dance Academy. " +
                "Your enquiry has been received. " +
                "Our team will contact you shortly.";

            formMessage.classList.add("show");
        }


        /* Reset form */

        contactForm.reset();


        /* Scroll to message */

        if (formMessage) {

            formMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}


/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const currentPage =
    window.location.pathname.split("/").pop();

const allNavLinks =
    document.querySelectorAll(".nav-menu a");

allNavLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (!linkPage) return;

    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
        link.classList.add("active");
    }

});


/* =========================================================
   IMAGE ERROR HANDLING
   ========================================================= */

const images =
    document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.backgroundColor = "#eee8dd";
        image.style.minHeight = "200px";

        console.warn(
            "Image could not be loaded:",
            image.src
        );

    });

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {

    element.textContent =
        new Date().getFullYear();

});


/* =========================================================
   WHATSAPP BUTTON
   ========================================================= */

const whatsappButtons =
    document.querySelectorAll(".whatsapp-btn");

whatsappButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const phoneNumber = "919666122173";

        const message =
            "Hello Arifa Dance Academy, " +
            "I would like to know more about your dance classes.";

        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(
            whatsappURL,
            "_blank"
        );

    });

});


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "✓ Arifa Dance Academy script.js loaded successfully."
);