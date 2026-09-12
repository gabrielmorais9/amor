/* =========================================
   SISTEMA DE SENHA
========================================= */

const passwordScreen =
    document.getElementById("passwordScreen");

const passwordInput =
    document.getElementById("passwordInput");

const passwordButton =
    document.getElementById("passwordButton");

const passwordError =
    document.getElementById("passwordError");


/* ALTERE A SENHA AQUI */

const correctPassword = "1275";


function unlockSite() {

    const enteredPassword =
        passwordInput.value.trim();


    if (enteredPassword === correctPassword) {

        passwordError.classList.remove("show");

        /* Começa a animação */

        passwordScreen.classList.add("unlocking");


        /* Flash de luz */

        const flash =
            document.createElement("div");

        flash.classList.add("unlock-flash");

        document.body.appendChild(flash);


        /* Cria partículas */

        for (let i = 0; i < 80; i++) {

            const particle =
                document.createElement("div");

            particle.classList.add(
                "unlock-particle"
            );


            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                Math.random() * 500 + 100;


            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;


            particle.style.setProperty(
                "--x",
                `${x}px`
            );

            particle.style.setProperty(
                "--y",
                `${y}px`
            );


            particle.style.width =
                `${Math.random() * 5 + 2}px`;

            particle.style.height =
                particle.style.width;


            particle.style.animationDuration =
                `${Math.random() * .7 + 1.1}s`;


            document.body.appendChild(
                particle
            );


            setTimeout(() => {

                particle.remove();

            }, 2000);

        }


        /* Remove a tela depois da animação */

        setTimeout(() => {

            passwordScreen.style.display =
                "none";

            flash.remove();

        }, 2300);


    } else {

        passwordError.classList.add("show");

        passwordScreen.classList.add("wrong");

        passwordInput.value = "";

        passwordInput.focus();


        setTimeout(() => {

            passwordScreen.classList.remove(
                "wrong"
            );

        }, 500);

    }

}


/* Clicar no botão */

passwordButton.addEventListener(
    "click",
    unlockSite
);


/* Apertar ENTER */

passwordInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            unlockSite();

        }

    }
);

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
