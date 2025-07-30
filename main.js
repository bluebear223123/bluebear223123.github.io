//for the main menu of opening and closing
const ST1expand = document.querySelector("#ST1expand");
const ST1info = document.querySelector("#ST1info");
const ST2expand = document.querySelector("#ST2expand");
const ST2info = document.querySelector("#ST2info");
const ST3expand = document.querySelector("#ST3expand");
const ST3info = document.querySelector("#ST3info");
const closeall = document.querySelector("#closeall");

//for the subtopic 1 opening and closing
const mozartexpand = document.querySelector("#mozartexpand");
const mozartinfo = document.querySelector("#mozartinfo");
const bachexpand = document.querySelector("#bachexpand");
const bachinfo = document.querySelector("#bachinfo");
const chopinexpand = document.querySelector("#chopinexpand");
const chopininfo = document.querySelector("#chopininfo");
const beethovenexpand = document.querySelector("#beethovenexpand");
const beethoveninfo = document.querySelector("#beethoveninfo");

//for playing the music
const playmozart = document.querySelector("#playmozart");
const playbach = document.querySelector("#playbach");
const playchopin = document.querySelector("#playchopin");
const playbeethoven = document.querySelector("#playbeethoven");

//music
const mozartsong = new Audio("audio/SubTopic1_mozart_song.mp3");
const bachsong = new Audio("audio/SubTopic1_bach_song.mp3");
const chopinsong = new Audio("audio/SubTopic1_chopin_song.mp3");
const beethovensong = new Audio("audio/SubTopic1_beethoven_song.mp3");

//for the subtopic 3 of the minigame
//getting which key to play
const C1 = document.querySelector("#C1");
const D1 = document.querySelector("#D1");
const E1 = document.querySelector("#E1");
const F1 = document.querySelector("#F1");
const G1 = document.querySelector("#G1");
const A1 = document.querySelector("#A1");
const B1 = document.querySelector("#B1");
const C2 = document.querySelector("#C2");
const D2 = document.querySelector("#D2");
const E2 = document.querySelector("#E2");
const F2 = document.querySelector("#F2");
const G2 = document.querySelector("#G2");
const A2 = document.querySelector("#A2");
const B2 = document.querySelector("#B2");

//function to stop all other music (pause and reset the audio)
function stopplayingmusic() {
    mozartsong.pause();
    mozartsong.currentTime = 0;
    bachsong.pause();
    bachsong.currentTime = 0;
    chopinsong.pause();
    chopinsong.currentTime = 0;
    beethovensong.pause();
    beethovensong.currentTime = 0;
}

//funcitons to hide all from subtopic 1
function hideSubtopic1() {
    mozartinfo.style.display = "none";
    bachinfo.style.display = "none";
    chopininfo.style.display = "none";
    beethoveninfo.style.display = "none";
    stopplayingmusic();
}

//funcion to hide all opened things
function hideall() {
    ST1info.style.display = "none";
    ST2info.style.display = "none";
    ST3info.style.display = "none";
    hideSubtopic1();
}

//all the expanding and music playing
ST1expand.addEventListener("click", function () {
    hideall();
    ST1info.style.display = "block";
})
mozartexpand.addEventListener("click", function () {
    hideSubtopic1();
    mozartinfo.style.display = "block";
})
playmozart.addEventListener("click", function () {
    stopplayingmusic();
    mozartsong.play();
})
bachexpand.addEventListener("click", function () {
    hideSubtopic1();
    bachinfo.style.display = "block";
})
playbach.addEventListener("click", function () {
    stopplayingmusic();
    bachsong.play();
})
chopinexpand.addEventListener("click", function () {
    hideSubtopic1();
    chopininfo.style.display = "block";
})
playchopin.addEventListener("click", function () {
    stopplayingmusic();
    chopinsong.play();
})
beethovenexpand.addEventListener("click", function () {
    hideSubtopic1();
    beethoveninfo.style.display = "block";
})
playbeethoven.addEventListener("click", function () {
    stopplayingmusic();
    beethovensong.play();
})
ST2expand.addEventListener("click", function () {
    hideall();
    ST2info.style.display = "block";
})
ST3expand.addEventListener("click", function () {
    hideall();
    ST3info.style.display = "block";
})
closeall.addEventListener("click", function () {
    hideall();
})

//mini game
function getrand(min, max) {
    //randomiser
    return Math.round(Math.random() * (max - min)) + min;
}

//change the colour to indicate they can be clicked
function colorchanger() {
    const key = getrand(1, 14);

    if (key == 1) {
        C1.style.backgroundColor = "green";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 2) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "green";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 3) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "green";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 4) {
                C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "green";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 5) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "green";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 6) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "green";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 7) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "green";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 8) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "green";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 9) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "green";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 10) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "green";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 11) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "green";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 12) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "green";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "red";
    }
    if (key == 13) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "green";
        B2.style.backgroundColor = "red";
    }
    if (key == 14) {
        C1.style.backgroundColor = "red";
        D1.style.backgroundColor = "red";
        E1.style.backgroundColor = "red";
        F1.style.backgroundColor = "red";
        G1.style.backgroundColor = "red";
        A1.style.backgroundColor = "red";
        B1.style.backgroundColor = "red";
        C2.style.backgroundColor = "red";
        D2.style.backgroundColor = "red";
        E2.style.backgroundColor = "red";
        F2.style.backgroundColor = "red";
        G2.style.backgroundColor = "red";
        A2.style.backgroundColor = "red";
        B2.style.backgroundColor = "green";
    }
}

//upon clicking
function clickcheck() {
    if (C1.style.backgroundColor == "green") {
        C1.addEventListener("click", function () {
            C1.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (D1.style.backgroundColor == "green") {
        D1.addEventListener("click", function () {
            D1.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (E1.style.backgroundColor == "green") {
        E1.addEventListener("click", function () {
            E1.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (F1.style.backgroundColor == "green") {
        F1.addEventListener("click", function () {
            F1.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (G1.style.backgroundColor == "green") {
        G1.addEventListener("click", function () {
            G1.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (A1.style.backgroundColor == "green") {
        A1.addEventListener("click", function () {
            A1.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (B1.style.backgroundColor == "green") {
        B1.addEventListener("click", function () {
            B1.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (C2.style.backgroundColor == "green") {
        C2.addEventListener("click", function () {
            C2.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (D2.style.backgroundColor == "green") {
        D2.addEventListener("click", function () {
            D2.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (E2.style.backgroundColor == "green") {
        E2.addEventListener("click", function () {
            E2.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (F2.style.backgroundColor == "green") {
        F2.addEventListener("click", function () {
            F2.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (G2.style.backgroundColor == "green") {
        G2.addEventListener("click", function () {
            G2.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (A2.style.backgroundColor == "green") {
        A2.addEventListener("click", function () {
            A2.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
    else if (B2.style.backgroundColor == "green") {
        B2.addEventListener("click", function () {
            B2.style.backgroundColor = "red";
            colorchanger();
            clickcheck();
        })
    }
}

colorchanger();
clickcheck();
hideall();