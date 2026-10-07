/* =====================================================
   BIRTHDAY PARTY JAVASCRIPT
===================================================== */


/* ---------------------------------------------
   ELEMENTS
--------------------------------------------- */

const body =
    document.body;


const giftWrapper =
    document.getElementById(
        "giftWrapper"
    );


const celebration =
    document.getElementById(
        "celebration"
    );


const instruction =
    document.getElementById(
        "instruction"
    );


const bottomHint =
    document.getElementById(
        "bottomHint"
    );


const confettiContainer =
    document.getElementById(
        "confettiContainer"
    );


const sparkleContainer =
    document.getElementById(
        "sparkleContainer"
    );


const finalMessage =
    document.getElementById(
        "finalMessage"
    );


/* ---------------------------------------------
   PARTY MUSIC
--------------------------------------------- */

const partyMusic =
    document.getElementById(
        "partyMusic"
    );


/* ---------------------------------------------
   PARTY STATE
--------------------------------------------- */

let partyStep = 0;


/*
    STEP 0
    ↓
    Gift box is visible

    FIRST TAP
    ↓
    Gift box opens

    SECOND TAP
    ↓
    Cake + teddy appear
    + party atmosphere
    + sparkles
    + confetti
    + poppers
    + candle blow-out
    + piano music
*/


/* =====================================================
   START PARTY MUSIC
===================================================== */

function startPartyMusic() {

    if (!partyMusic) {

        return;

    }


    /*
       Soft background volume.
    */

    partyMusic.volume = 0.35;


    /*
       Always start the song
       from the beginning.
    */

    partyMusic.currentTime = 0;


    /*
       Start the MP4.

       The browser uses the audio
       track contained inside the MP4.
    */

    partyMusic
        .play()
        .then(function () {

            console.log(
                "Birthday piano music started."
            );

        })
        .catch(function (error) {

            console.log(
                "Birthday music could not start:",
                error
            );

        });

}


/* =====================================================
   PARTY CLICK LISTENER
===================================================== */

document.addEventListener(
    "click",
    handlePartyClick
);


document.addEventListener(
    "touchstart",
    function () {

        /*
           We intentionally don't trigger
           the animation here because mobile
           browsers can fire both touchstart
           and click.

           The normal click event handles
           the interaction.
        */

    },
    {
        passive: true
    }
);


/* =====================================================
   HANDLE PARTY CLICK
===================================================== */

function handlePartyClick(event) {


    /*
       Prevent accidental triggering when
       clicking links or buttons.
    */

    if (
        event.target.closest("a") ||
        event.target.closest("button")
    ) {

        return;

    }



    /* =========================================
       FIRST CLICK
    ========================================== */

    if (partyStep === 0) {

        partyStep = 1;


        body.classList.add(
            "box-opened"
        );


        instruction.textContent =
            "Something special is hiding inside... ♡";


        bottomHint.innerHTML =
            "<span>♡</span> tap once more <span>♡</span>";


        return;

    }



    /* =========================================
       SECOND CLICK
       START EVERYTHING
    ========================================== */

    if (partyStep === 1) {

        partyStep = 2;


        /*
           Start the piano music at the
           exact moment the celebration starts.
        */

        startPartyMusic();


        /*
           Start all birthday animations.
        */

        startBirthdayParty();


        return;

    }


    /*
       Once the party has started,
       additional clicks don't restart it.
    */

}


/* =====================================================
   START PARTY
===================================================== */

function startBirthdayParty() {


    /*
       Start celebration state.
    */

    body.classList.add(
        "celebrating"
    );


    instruction.textContent =
        "And just like that... it's birthday time! 🎂♡";


    bottomHint.style.opacity =
        "0";



    /*
       Give the browser a tiny moment
       to register the celebration state
       before creating particles.
    */

    setTimeout(function () {


        body.classList.add(
            "final-party"
        );


        /*
           Confetti
        */

        createConfetti();


        /*
           Sparkles
        */

        createSparkles();


        /*
           Left party popper burst
        */

        createSideBurst(
            "left"
        );


        /*
           Right party popper burst
        */

        createSideBurst(
            "right"
        );


        /*
           Extra hearts
        */

        createExtraHearts();


    }, 250);



    /*
       Final message appears slightly
       after the main celebration.
    */

    setTimeout(function () {


        if (finalMessage) {

            finalMessage.style.opacity =
                "1";

        }


    }, 1800);

}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {


    const colors = [

        "#ff4fa3",

        "#ff82bd",

        "#e62f86",

        "#ffc0d9",

        "#f06ba8",

        "#d91c76",

        "#fff0f7"

    ];



    /*
       Lots of confetti so the screen
       doesn't feel empty.
    */

    for (
        let i = 0;
        i < 90;
        i++
    ) {


        const piece =
            document.createElement(
                "div"
            );


        piece.classList.add(
            "confetti"
        );



        const size =
            Math.random() * 9 + 5;


        piece.style.width =
            `${size}px`;


        piece.style.height =
            `${size * 1.6}px`;


        piece.style.left =
            `${Math.random() * 100}%`;


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";


        piece.style.animationDuration =
            `${Math.random() * 2.5 + 2.5}s`;


        piece.style.animationDelay =
            `${Math.random() * 1.2}s`;


        confettiContainer.appendChild(
            piece
        );



        /*
           Remove after animation.
        */

        setTimeout(function () {

            piece.remove();

        }, 6500);

    }

}


/* =====================================================
   SPARKLES
===================================================== */

function createSparkles() {


    const symbols = [

        "✦",

        "✧",

        "♡",

        "✦",

        "✧",

        "⋆"

    ];



    /*
       Full-screen sparkle effect.
    */

    for (
        let i = 0;
        i < 55;
        i++
    ) {


        setTimeout(function () {


            const sparkle =
                document.createElement(
                    "span"
                );


            sparkle.classList.add(
                "party-sparkle"
            );


            sparkle.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            sparkle.style.left =
                `${Math.random() * 100}%`;


            sparkle.style.top =
                `${Math.random() * 100}%`;


            sparkle.style.fontSize =
                `${Math.random() * 18 + 14}px`;


            sparkle.style.animationDelay =
                `${Math.random() * 0.3}s`;


            sparkleContainer.appendChild(
                sparkle
            );


            setTimeout(function () {

                sparkle.remove();

            }, 1600);


        }, i * 55);

    }

}


/* =====================================================
   PARTY POPPER BURST
===================================================== */

function createSideBurst(side) {


    const startX =
        side === "left"
            ? 4
            : 96;


    const direction =
        side === "left"
            ? 1
            : -1;



    /*
       Create a burst of tiny
       celebration pieces.
    */

    for (
        let i = 0;
        i < 28;
        i++
    ) {


        setTimeout(function () {


            const piece =
                document.createElement(
                    "span"
                );


            piece.classList.add(
                "party-sparkle"
            );


            const symbols = [

                "✦",

                "♡",

                "✧",

                "•"

            ];


            piece.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            piece.style.left =
                `${startX + (Math.random() * 5 * direction)}%`;


            piece.style.top =
                `${55 + Math.random() * 25}%`;


            piece.style.color =
                i % 2 === 0
                    ? "#ff3f9b"
                    : "#e72b83";


            piece.style.fontSize =
                `${Math.random() * 16 + 14}px`;


            piece.style.animationDuration =
                `${Math.random() * 0.7 + 0.7}s`;


            sparkleContainer.appendChild(
                piece
            );


            setTimeout(function () {

                piece.remove();

            }, 1500);


        }, i * 25);

    }

}


/* =====================================================
   EXTRA FLOATING HEARTS
===================================================== */

function createExtraHearts() {


    for (
        let i = 0;
        i < 18;
        i++
    ) {


        setTimeout(function () {


            const heart =
                document.createElement(
                    "span"
                );


            heart.classList.add(
                "party-sparkle"
            );


            heart.textContent =
                Math.random() > 0.5
                    ? "♡"
                    : "♥";


            heart.style.left =
                `${Math.random() * 100}%`;


            heart.style.top =
                `${70 + Math.random() * 20}%`;


            heart.style.color =
                "#f02689";


            heart.style.fontSize =
                `${Math.random() * 14 + 16}px`;


            sparkleContainer.appendChild(
                heart
            );


            setTimeout(function () {

                heart.remove();

            }, 1700);


        }, i * 100);

    }

}


/* =====================================================
   SMALL CAKE BOUNCE
===================================================== */

setTimeout(function () {


    /*
       This gives the cake a subtle
       pookie entrance after the
       celebration begins.
    */

    if (celebration) {


        celebration.addEventListener(
            "transitionend",
            function () {


                const cake =
                    document.querySelector(
                        ".cake"
                    );


                const teddy =
                    document.querySelector(
                        ".teddy"
                    );



                if (cake) {


                    cake.animate(
                        [

                            {

                                transform:
                                    "translateY(20px)"

                            },

                            {

                                transform:
                                    "translateY(-8px)"

                            },

                            {

                                transform:
                                    "translateY(0)"

                            }

                        ],
                        {

                            duration:
                                900,

                            easing:
                                "cubic-bezier(.2,.8,.2,1)"

                        }
                    );

                }



                if (teddy) {


                    teddy.animate(
                        [

                            {

                                transform:
                                    "translateY(20px) rotate(-3deg)"

                            },

                            {

                                transform:
                                    "translateY(-8px) rotate(3deg)"

                            },

                            {

                                transform:
                                    "translateY(0) rotate(0)"

                            }

                        ],
                        {

                            duration:
                                1000,

                            easing:
                                "cubic-bezier(.2,.8,.2,1)"

                        }
                    );

                }


            }
        );

    }


}, 100);