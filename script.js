/* =========================================================
   KIRAN ACADEMY
   INTERACTIONS
========================================================= */


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 900);

});


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuButton.querySelector("i");

    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= NAVBAR SCROLL ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= CAREER PATH DATA ================= */

const paths = {

    ai: {

        number: "01",

        icon: "fa-brain",

        title: "Artificial Intelligence",

        description:
            "Learn how intelligent systems are created, trained and applied to real-world problems.",

        skills:
            ["Python", "ML", "Deep Learning", "AI"]

    },

    web: {

        number: "02",

        icon: "fa-code",

        title: "Web Development",

        description:
            "Design and build modern websites and web applications from frontend to backend.",

        skills:
            ["HTML", "CSS", "JavaScript", "Backend"]

    },

    data: {

        number: "03",

        icon: "fa-chart-line",

        title: "Data & Analytics",

        description:
            "Transform raw data into meaningful insights and use information to support better decisions.",

        skills:
            ["SQL", "Python", "Analytics", "Visualization"]

    },

    cloud: {

        number: "04",

        icon: "fa-cloud",

        title: "Cloud Technology",

        description:
            "Understand modern cloud platforms, deployment, infrastructure and scalable applications.",

        skills:
            ["Cloud", "AWS", "DevOps", "Deployment"]

    }

};


/* ================= CHANGE PATH ================= */

function changePath(type) {

    const path = paths[type];

    if (!path) return;

    const number = document.getElementById("pathNumber");
    const icon = document.getElementById("pathIcon");
    const title = document.getElementById("pathTitle");
    const description = document.getElementById("pathDescription");
    const skillFlow = document.getElementById("skillFlow");

    number.textContent = path.number;

    icon.innerHTML =
        `<i class="fa-solid ${path.icon}"></i>`;

    title.textContent = path.title;

    description.textContent = path.description;

    skillFlow.innerHTML = "";

    path.skills.forEach((skill, index) => {

        const span = document.createElement("span");

        span.textContent = skill;

        skillFlow.appendChild(span);

        if (index < path.skills.length - 1) {

            const arrow = document.createElement("i");

            arrow.className =
                "fa-solid fa-arrow-right";

            skillFlow.appendChild(arrow);

        }

    });


    /* ACTIVE SIDEBAR */

    document.querySelectorAll(".path-button").forEach(button => {

        button.classList.remove("active");

        if (button.dataset.path === type) {

            button.classList.add("active");

        }

    });


    /* SMALL ANIMATION */

    const display = document.querySelector(".path-display");

    display.animate(

        [
            {
                opacity: .55,
                transform: "translateY(8px)"
            },

            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],

        {
            duration: 350,
            easing: "ease-out"
        }

    );

}


/* PATH BUTTONS */

document.querySelectorAll(".path-button").forEach(button => {

    button.addEventListener("click", () => {

        changePath(button.dataset.path);

    });

});


/* PLANETS */

document.querySelectorAll(".planet").forEach(planet => {

    planet.addEventListener("click", () => {

        const path = planet.dataset.path;

        if (paths[path]) {

            changePath(path);

            document
                .querySelector(".career-path")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});


/* ================= CAREER DNA ================= */

const dnaData = {

    creator: {

        title: "The Creator",

        avatar: "C",

        xp: "820",

        text:
            "You enjoy turning ideas into something people can actually use. Building is your superpower."

    },

    solver: {

        title: "The Solver",

        avatar: "S",

        xp: "760",

        text:
            "You enjoy breaking complex problems into smaller pieces and finding practical solutions."

    },

    analyst: {

        title: "The Analyst",

        avatar: "A",

        xp: "890",

        text:
            "You naturally look for patterns, connections and insights hidden inside information."

    },

    innovator: {

        title: "The Innovator",

        avatar: "I",

        xp: "940",

        text:
            "You constantly think about better possibilities and enjoy experimenting with new technology."

    }

};


/* DNA ELEMENTS */

const dnaTitle = document.getElementById("dnaTitle");
const dnaText = document.getElementById("dnaText");
const dnaAvatar = document.getElementById("dnaAvatar");
const dnaXP = document.getElementById("dnaXP");


/* DNA OPTIONS */

document.querySelectorAll(".dna-option").forEach(option => {

    option.addEventListener("click", () => {

        const type = option.dataset.dna;

        const data = dnaData[type];

        if (!data) return;


        document.querySelectorAll(".dna-option")
            .forEach(item => {
                item.classList.remove("active");
            });

        option.classList.add("active");


        dnaTitle.textContent = data.title;

        dnaText.textContent = data.text;

        dnaAvatar.textContent = data.avatar;

        dnaXP.textContent = data.xp;


        /* CARD ANIMATION */

        document
            .querySelector(".dna-card")
            .animate(

                [
                    {
                        transform: "scale(.98)",
                        opacity: .7
                    },

                    {
                        transform: "scale(1)",
                        opacity: 1
                    }

                ],

                {
                    duration: 350,
                    easing: "ease-out"
                }

            );

    });

});


/* ================= CTA SCROLL ================= */

document.querySelectorAll(
    ".primary-button, .nav-button, .dna-button, .cta-button"
).forEach(button => {

    button.addEventListener("click", event => {

        const href = button.getAttribute("href");

        if (!href || href === "#") return;

        event.preventDefault();

        const target =
            document.querySelector(href);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ================= FLOATING PLANETS ================= */

const planets =
    document.querySelectorAll(".planet");

let time = 0;

function animatePlanets() {

    time += 0.01;

    planets.forEach((planet, index) => {

        const offset =
            Math.sin(time * 1.5 + index) * 5;

        planet.style.marginTop =
            `${offset}px`;

    });

    requestAnimationFrame(animatePlanets);

}

animatePlanets();


/* ================= MOUSE CURSOR ================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");


document.addEventListener("mousemove", event => {

    cursorDot.style.left =
        `${event.clientX}px`;

    cursorDot.style.top =
        `${event.clientY}px`;


    cursorRing.style.left =
        `${event.clientX - 15}px`;

    cursorRing.style.top =
        `${event.clientY - 15}px`;

});


/* CURSOR HOVER */

document.querySelectorAll(
    "a, button"
).forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursorRing.style.width = "45px";
        cursorRing.style.height = "45px";

    });

    element.addEventListener("mouseleave", () => {

        cursorRing.style.width = "30px";
        cursorRing.style.height = "30px";

    });

});


/* ================= MISSION CARD TILT ================= */

document.querySelectorAll(".mission-card")
.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - .5) * -4;

        const rotateY =
            ((x / rect.width) - .5) * 4;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================= INITIAL PATH ================= */

changePath("ai");