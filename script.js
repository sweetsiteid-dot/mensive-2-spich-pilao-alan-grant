/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1200);

});


/* =========================
   PIN SYSTEM
========================= */

const unlockBtn =
    document.getElementById("unlockBtn");

const pinInput =
    document.getElementById("pinInput");

const pinError =
    document.getElementById("pinError");

const pinScreen =
    document.getElementById("pinScreen");

const website =
    document.getElementById("website");


unlockBtn.addEventListener("click", () => {

    const pin =
        pinInput.value.trim();

    /* PIN MENSIVE KE-2 */

    if(pin === "2126"){

        pinError.innerText = "";

        pinScreen.style.display = "none";

        website.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"instant"
        });

    }else{

        pinError.innerText =
            "Wrong PIN 💚 Coba lagi yaa.";

        pinInput.value = "";

        pinInput.focus();

    }

});


/* =========================
   OPEN BOOK
========================= */

const openBookBtn =
    document.getElementById("openBookBtn");

openBookBtn.addEventListener("click", () => {

    const music =
        document.getElementById("bgMusic");

    /*
       Browser biasanya mengizinkan
       audio setelah user melakukan klik.
    */

    music.play().catch(() => {
        console.log("Music waiting for interaction.");
    });

    document
        .getElementById("scrapbook")
        .scrollIntoView({
            behavior:"smooth"
        });

});


/* =========================
   LETTER OPEN
========================= */

const openLetter =
    document.getElementById("openLetter");

const letterPaper =
    document.getElementById("letterPaper");


openLetter.addEventListener("click", () => {

    if(letterPaper.style.display === "block"){

        letterPaper.style.display = "none";

    }else{

        letterPaper.style.display = "block";

        setTimeout(() => {

            letterPaper.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        }, 100);

    }

});


/* =========================
   QUIZ
========================= */

const checkQuiz =
    document.getElementById("checkQuiz");

checkQuiz.addEventListener("click", () => {

    const a1 =
        document
        .getElementById("answer1")
        .value
        .toLowerCase()
        .trim();

    const a2 =
        document
        .getElementById("answer2")
        .value
        .toLowerCase()
        .trim();

    const result =
        document.getElementById("quizResult");


    /*
       Normalisasi jawaban
       agar huruf besar/kecil
       tidak menjadi masalah.
    */

    const correctName =
        a1 === "spich pilao";

    const correctDate =
        a2 === "21 juni 2026" ||
        a2 === "21/06/2026" ||
        a2 === "21-06-2026" ||
        a2 === "21 06 2026";


    /* =========================
       CORRECT ANSWER
    ========================= */

    if(
        correctName &&
        correctDate
    ){

        result.style.color =
            "#3F7653";

        result.innerText =
            "Correct! Memory unlocked 💚✨";


        /*
           Sedikit delay supaya
           pesan terlihat terlebih dahulu.
        */

        setTimeout(() => {

            document
            .getElementById("specialMemory")
            .scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        }, 500);

    }


    /* =========================
       WRONG ANSWER
    ========================= */

    else{

        result.style.color =
            "#B34A4A";

        result.innerText =
            "Hmm... coba ingat lagi 🥹💚";

    }

});


/* =========================
   REVEAL SPECIAL MEMORY
========================= */

const revealBtn =
    document.getElementById("revealBtn");

revealBtn.addEventListener("click", () => {

    const specialPhoto =
        document.getElementById("specialPhoto");


    specialPhoto.classList.add("show");


    revealBtn.innerText =
        "Memory Revealed 💚";


    revealBtn.disabled = true;

    revealBtn.style.opacity = "0.75";

});


/* =========================
   RELATIONSHIP COUNTER
========================= */

function updateCounter(){

    /*
       Tanggal jadian:
       21 Juni 2026
    */

    const startDate =
        new Date("2026-06-21T00:00:00");


    const now =
        new Date();


    const diff =
        now.getTime() -
        startDate.getTime();


    /*
       Jika website dibuka
       sebelum tanggal jadian,
       counter tetap 0.
    */

    if(diff < 0){

        document.getElementById("days")
            .innerText = "0";

        document.getElementById("hours")
            .innerText = "0";

        document.getElementById("minutes")
            .innerText = "0";

        return;

    }


    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            diff /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            diff /
            (1000 * 60)
        );


    document.getElementById("days")
        .innerText = days;


    document.getElementById("hours")
        .innerText = hours;


    document.getElementById("minutes")
        .innerText = minutes;

}


updateCounter();

setInterval(
    updateCounter,
    1000
);


/* =========================
   SECRET MESSAGE
========================= */

const stars =
    document.querySelectorAll(".secret-star");

let clickedStars = 0;


stars.forEach(star => {

    star.addEventListener("click", () => {

        /*
           Cegah satu bintang
           dihitung dua kali.
        */

        if(
            !star.classList.contains("active")
        ){

            star.classList.add("active");

            clickedStars++;


            star.style.transform =
                "scale(1.5) rotate(15deg)";

            star.style.opacity =
                "0.7";


            /*
               Update progress
            */

            const progress =
                document.getElementById(
                    "starProgress"
                );

            progress.innerText =
                `Find all the stars (${clickedStars}/5)`;


            /*
               Kalau semua bintang
               sudah ditemukan
            */

            if(clickedStars >= 5){

                const secretMessage =
                    document.getElementById(
                        "secretMessage"
                    );


                secretMessage.style.display =
                    "block";


                progress.innerText =
                    "All stars found! 💚✨";


                setTimeout(() => {

                    secretMessage.scrollIntoView({
                        behavior:"smooth",
                        block:"center"
                    });

                }, 400);

            }

        }

    });

});


/* =========================
   REPLAY BUTTON
========================= */

const replayBtn =
    document.getElementById("replayBtn");


replayBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* =========================
   ENTER KEY PIN
========================= */

pinInput.addEventListener(
    "keypress",
    (e) => {

        if(e.key === "Enter"){

            unlockBtn.click();

        }

    }
);


/* =========================
   AUTO CLEAR PIN ERROR
========================= */

pinInput.addEventListener(
    "input",
    () => {

        pinError.innerText = "";

    }
);
