

const startDate = new Date("2026-06-12T00:00:00");



function updateCounter() {

    const now = new Date();

    let difference = now - startDate;

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds =
        Math.floor(difference / 1000);

    const days =
        Math.floor(totalSeconds / 86400);

    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;


    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        hours;

    document.getElementById("minutes").textContent =
        minutes;

    document.getElementById("seconds").textContent =
        seconds;
}

setInterval(updateCounter, 1000);

updateCounter();




const heartsContainer =
    document.querySelector(".hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        Math.random() > .5
            ? "♥"
            : "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 10) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 6) + "s";

    heart.style.opacity =
        Math.random() * .5 + .2;

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 12000);
}


setInterval(createHeart, 600);




const surpriseButton =
    document.getElementById("surpriseButton");

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");


function openFirstModal() {

    modal.classList.add("active");

    createExplosion();
}


surpriseButton.addEventListener(
    "click",
    openFirstModal
);


closeModal.addEventListener(
    "click",
    () => {

        modal.classList.remove("active");

    }
);


modal.addEventListener(
    "click",
    (event) => {

        if (event.target === modal) {

            modal.classList.remove("active");

        }

    }
);




const finalButton =
    document.getElementById("finalButton");

const addressModal =
    document.getElementById("addressModal");

const addressClose =
    document.getElementById("addressClose");


finalButton.addEventListener(
    "click",
    () => {

        addressModal.classList.add("active");

        createExplosion();

    }
);


addressClose.addEventListener(
    "click",
    () => {

        addressModal.classList.remove("active");

    }
);


addressModal.addEventListener(
    "click",
    (event) => {

        if (event.target === addressModal) {

            addressModal.classList.remove("active");

        }

    }
);




function createExplosion() {

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            Math.random() > .5
                ? "♥"
                : "♡";

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.color =
            "#ff6b91";

        heart.style.fontSize =
            (Math.random() * 20 + 10) + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "200";


        document.body.appendChild(heart);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 300 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    Math.random() * 1200 + 800,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );


        setTimeout(() => {

            heart.remove();

        }, 2200);

    }
}



const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


let playing = false;


musicButton.addEventListener(
    "click",
    () => {

        if (!playing) {

            music.play();

            musicButton.innerHTML =
                "❚❚";

            playing = true;

        } else {

            music.pause();

            musicButton.innerHTML =
                "♫";

            playing = false;

        }

    }
);


const elements =
    document.querySelectorAll(
        ".letter, .photo, .counter div, .section-title"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.animate(

                        [
                            {
                                opacity: 0,

                                transform:
                                    "translateY(30px)"
                            },

                            {
                                opacity: 1,

                                transform:
                                    "translateY(0)"
                            }
                        ],

                        {
                            duration: 900,

                            easing:
                                "cubic-bezier(.2,.8,.2,1)",

                            fill: "forwards"
                        }
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .15
        }
    );


elements.forEach(
    element =>
        observer.observe(element)
);




document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            modal.classList.remove("active");

            addressModal.classList.remove("active");

        }

    }
);