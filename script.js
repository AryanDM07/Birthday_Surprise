/* =========================================================
   BIRTHDAY WEBSITE
   COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");

    if (navMenu) {

        navMenu.classList.toggle("show");

    }

}


/* =========================================================
   POEM BACKGROUND MUSIC
   ========================================================= */

function startPoemMusic() {

    const poemMusic =
        document.getElementById("poemMusic");

    const musicControl =
        document.getElementById("musicControl");

    if (!poemMusic) {

        return;

    }

    poemMusic.volume = 0.25;

    poemMusic
        .play()
        .then(function () {

            if (musicControl) {

                musicControl.classList.add(
                    "playing"
                );

                musicControl.textContent =
                    "♫";

                musicControl.setAttribute(
                    "aria-label",
                    "Pause background music"
                );

            }

        })
        .catch(function () {

            if (musicControl) {

                musicControl.classList.remove(
                    "playing"
                );

                musicControl.textContent =
                    "♪";

                musicControl.setAttribute(
                    "aria-label",
                    "Play background music"
                );

            }

        });

}


/* =========================================================
   MUSIC PLAY / PAUSE
   ========================================================= */

function togglePoemMusic() {

    const poemMusic =
        document.getElementById("poemMusic");

    const musicControl =
        document.getElementById("musicControl");

    if (!poemMusic) {

        return;

    }

    if (poemMusic.paused) {

        poemMusic
            .play()
            .then(function () {

                if (musicControl) {

                    musicControl.classList.add(
                        "playing"
                    );

                    musicControl.textContent =
                        "♫";

                    musicControl.setAttribute(
                        "aria-label",
                        "Pause background music"
                    );

                }

            })
            .catch(function () {

                if (musicControl) {

                    musicControl.classList.remove(
                        "playing"
                    );

                    musicControl.textContent =
                        "♪";

                    musicControl.setAttribute(
                        "aria-label",
                        "Play background music"
                    );

                }

            });

    } else {

        poemMusic.pause();

        if (musicControl) {

            musicControl.classList.remove(
                "playing"
            );

            musicControl.textContent =
                "♪";

            musicControl.setAttribute(
                "aria-label",
                "Play background music"
            );

        }

    }

}


/* =========================================================
   POEM REVEAL
   ========================================================= */

function revealPoem() {

    const revealCard =
        document.getElementById("poemRevealCard");

    const poemSection =
        document.getElementById("poemSection");

    const afterPoem =
        document.getElementById("afterPoem");

    if (!poemSection) {

        return;

    }

    startPoemMusic();

    if (revealCard) {

        revealCard.style.transition =
            "all 0.5s ease";

        revealCard.style.opacity =
            "0";

        revealCard.style.transform =
            "translateY(-20px) scale(0.95)";

    }

    setTimeout(function () {

        if (revealCard) {

            revealCard.style.display =
                "none";

        }

        poemSection.classList.add(
            "show"
        );

        if (afterPoem) {

            afterPoem.classList.add(
                "show"
            );

        }

        createHearts();

        setTimeout(function () {

            poemSection.scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

        }, 150);

    }, 500);

}


/* =========================================================
   HEART BURST
   ========================================================= */

function createHearts() {

    const hearts = [
        "♡",
        "♥",
        "🩷",
        "💕",
        "🎀"
    ];

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];

        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top =
            "55vh";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "9999";

        heart.style.transition =
            "all 1.8s ease";

        document.body.appendChild(
            heart
        );

        setTimeout(function () {

            heart.style.transform =
                `translate(
                    ${(Math.random() - 0.5) * 300}px,
                    ${-200 - Math.random() * 400}px
                )
                rotate(
                    ${Math.random() * 360}deg
                )`;

            heart.style.opacity =
                "0";

        }, 50);

        setTimeout(function () {

            heart.remove();

        }, 2000);

    }

}


/* =========================================================
   FINAL PARTY MUSIC
   ========================================================= */

function startPartyMusic() {

    const partyMusic =
        document.getElementById("partyMusic");

    if (!partyMusic) {

        return;

    }

    /*
       Your MP4 contains the music.
       The browser will use its audio track.
    */

    partyMusic.volume = 0.35;

    partyMusic.currentTime = 0;

    partyMusic
        .play()
        .catch(function (error) {

            console.log(
                "Party music could not start:",
                error
            );

        });

}


/* =========================================================
   PARTY PAGE
   ========================================================= */

let partyStep = 0;


function partyClick() {

    const page =
        document.querySelector(".party-page");

    if (!page) {

        return;

    }

    const instruction =
        document.getElementById(
            "partyInstruction"
        );

    const title =
        document.getElementById(
            "partyTitle"
        );

    const text =
        document.getElementById(
            "partyText"
        );

    const gift =
        document.getElementById(
            "giftBox"
        );

    const cake =
        document.getElementById(
            "cakeScene"
        );


    /* =====================================================
       STEP 1 - SHOW GIFT BOX
       ===================================================== */

    if (partyStep === 0) {

        partyStep = 1;

        if (instruction) {

            instruction.classList.add(
                "hide"
            );

        }

        if (gift) {

            gift.classList.add(
                "show"
            );

        }

        return;

    }


    /* =====================================================
       STEP 2 - OPEN GIFT BOX
       ===================================================== */

    if (partyStep === 1) {

        partyStep = 2;

        if (gift) {

            gift.classList.add(
                "open"
            );

        }

        setTimeout(function () {

            if (gift) {

                gift.style.opacity =
                    "0";

                gift.style.transform =
                    "translate(-50%,-50%) scale(0.8)";

            }

        }, 700);

        return;

    }


    /* =====================================================
       STEP 3 - SHOW CAKE + TEDDY
       ===================================================== */

    if (partyStep === 2) {

        partyStep = 3;

        if (cake) {

            cake.classList.add(
                "show"
            );

        }

        return;

    }


    /* =====================================================
       STEP 4 - BLOW CANDLES
       ===================================================== */

    if (partyStep === 3) {

        partyStep = 4;

        if (cake) {

            cake.classList.add(
                "blown"
            );

        }

        if (title) {

            title.innerHTML =
                "Make a little wish... ✨";

        }

        if (text) {

            text.innerHTML =
                "And let the birthday magic begin ♡";

        }

        return;

    }


    /* =====================================================
       STEP 5 - PARTY MODE
       ===================================================== */

    if (partyStep === 4) {

        partyStep = 5;

        page.classList.add(
            "party-mode"
        );

        if (title) {

            title.innerHTML =
                "It's a little birthday party! 🎀";

        }

        if (text) {

            text.innerHTML =
                "One last tap for the final surprise...";

        }

        createPartySparkles(
            30
        );

        return;

    }


    /* =====================================================
       STEP 6 - FINAL PARTY
       ===================================================== */

    if (partyStep === 5) {

        partyStep = 6;


        /* START PIANO MUSIC */

        startPartyMusic();


        /* FINAL PARTY MODE */

        page.classList.add(
            "final-party"
        );


        /* CAKE */

        if (cake) {

            cake.classList.add(
                "blown"
            );

        }


        /* FINAL SPARKLES */

        createPartySparkles(
            100
        );


        /* CONFETTI / PARTY POPPERS */

        createConfetti(
            100
        );


        /* FINAL TEXT */

        if (title) {

            title.innerHTML =
                "Happy Birthday! 🎂🩷";

        }

        if (text) {

            text.innerHTML =
                "Today is officially a little more pink.";

        }

        return;

    }

}


/* =========================================================
   PARTY SPARKLES
   ========================================================= */

function createPartySparkles(amount) {

    const container =
        document.getElementById(
            "sparkleContainer"
        );

    if (!container) {

        return;

    }

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const sparkle =
            document.createElement("div");

        sparkle.className =
            "sparkle";

        sparkle.innerHTML =
            Math.random() > 0.5
                ? "✦"
                : "✧";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.animationDelay =
            Math.random() * 1.2 + "s";

        sparkle.style.fontSize =
            (12 + Math.random() * 25)
            + "px";

        container.appendChild(
            sparkle
        );

        setTimeout(function () {

            sparkle.remove();

        }, 2200);

    }

}


/* =========================================================
   CONFETTI / PARTY POPPERS
   ========================================================= */

function createConfetti(amount) {

    const colors = [
        "#FF69B4",
        "#FF1493",
        "#F8C8DC",
        "#FADADD",
        "#C71585",
        "#FFFFFF",
        "#FFD166"
    ];

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const confetti =
            document.createElement("div");

        confetti.style.position =
            "fixed";

        confetti.style.width =
            "8px";

        confetti.style.height =
            "14px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random()
                    * colors.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.zIndex =
            "95";

        confetti.style.pointerEvents =
            "none";

        confetti.style.borderRadius =
            "3px";

        const duration =
            2.5 +
            Math.random() * 3;

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity:
                        1
                },

                {
                    transform:
                        `translateY(110vh)
                         rotate(${360 + Math.random() * 720}deg)`,

                    opacity:
                        0.9
                }
            ],

            {
                duration:
                    duration * 1000,

                easing:
                    "cubic-bezier(.2,.7,.3,1)",

                fill:
                    "forwards"
            }
        );

        document.body.appendChild(
            confetti
        );

        setTimeout(function () {

            confetti.remove();

        }, duration * 1000 + 500);

    }

}


/* =========================================================
   PAGE CLICK LISTENER
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* PARTY PAGE */

        const partyPage =
            document.querySelector(
                ".party-page"
            );

        if (partyPage) {

            partyPage.addEventListener(
                "click",
                function () {

                    partyClick();

                }
            );

        }


        /* MOBILE MENU */

        const links =
            document.querySelectorAll(
                "#navMenu a"
            );

        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        const navMenu =
                            document.getElementById(
                                "navMenu"
                            );

                        if (navMenu) {

                            navMenu.classList.remove(
                                "show"
                            );

                        }

                    }
                );

            }
        );

    }
);