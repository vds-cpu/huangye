// Loading

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.pointerEvents = "none";

        setTimeout(() => {

            loading.remove();

        }, 500);

    }, 800);

});

// 倒數計時

const endDate = new Date("2026-07-31T23:59:59").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = endDate - now;

    if (distance <= 0) {

        document.getElementById("day").innerText = "00";
        document.getElementById("hour").innerText = "00";
        document.getElementById("minute").innerText = "00";
        document.getElementById("second").innerText = "00";

        return;

    }

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const second = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerText = String(day).padStart(2, "0");

    document.getElementById("hour").innerText = String(hour).padStart(2, "0");

    document.getElementById("minute").innerText = String(minute).padStart(2, "0");

    document.getElementById("second").innerText = String(second).padStart(2, "0");

}

setInterval(updateCountdown, 1000);

updateCountdown();

// FAQ

document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        const open = answer.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach(item => {

            item.style.display = "none";

        });

        if (!open) {

            answer.style.display = "block";

        }

    });

});

// Scroll Reveal

const reveals = document.querySelectorAll(

".reward-card,.step-card,.feature-card,.event-card,.notice-box,.faq-item"

);

function reveal() {

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            el.classList.add("show");

            el.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// 回到頂部

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Navbar

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(20,20,40,.8)";

        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        nav.style.background = "rgba(18,18,40,.45)";

        nav.style.boxShadow = "none";

    }

});

// Hero 視差

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-image img");

    if (hero) {

        hero.style.transform = `translateY(${window.scrollY * 0.08}px)`;

    }

});
