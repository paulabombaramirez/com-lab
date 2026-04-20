function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

// Pre-defined positions for each zone (
const positions = {
    pear: [
        [38, 48], [55, 48], [30, 58],
        [47, 58], [62, 58], [35, 68],
        [52, 68], [40, 78], [57, 78]
    ],
    appleLeft: [
        [22, 45], [32, 40], [40, 52],
        [20, 60], [30, 58], [40, 68],
        [24, 72], [34, 76], [28, 85]
    ],
    appleRight: [
        [60, 45], [70, 40], [80, 52],
        [58, 60], [68, 58], [78, 68],
        [62, 72], [72, 76], [68, 85]
    ],
    watermelon: [
        [25,35],[42,28],[58,28],[75,35],[85,48],
        [18,50],[32,42],[48,38],[64,38],[78,45],
        [15,60],[28,54],[44,50],[60,50],[74,54],[85,62],
        [20,68],[36,64],[52,62],[68,64],[80,68],
        [25,75],[42,72],[58,72],[73,75],
        [30,80],[52,80],[70,80],
        [38,85],[58,85],
        [22,38],[80,38],[12,52],[88,52],
        [18,65],[82,65],[26,78],[74,78],
        [35,88],[58,88],[45,22],[62,22],
        [30,30],[70,30],[22,72],[78,72],
        [48,90],[40,18],[62,18],[50,15],
        [15,44],[85,44],[14,58],[86,58],
        [28,85],[72,85],[20,56],[80,56],
        [35,20],[65,20],[25,42],[75,42]
    ]
};

function addSeed(container, posArray, index) {
    let div = document.createElement("div");
    div.className = "seed";
    let pos = posArray[index % posArray.length];
    div.style.left = pos[0] + "%";
    div.style.top  = pos[1] + "%";
    container.append(div);
}

let prev_s  = -1;
let prev_m1 = -1;
let prev_m2 = -1;
let prev_h1 = -1;
let prev_h2 = -1;

function tick() {
    let now = new Date();
    let h  = now.getHours() % 12 || 12;
    let m  = now.getMinutes();
    let s  = now.getSeconds();

    let h1 = Math.floor(h / 10);
    let h2 = h % 10;
    let m1 = Math.floor(m / 10);
    let m2 = m % 10;

    let pear1      = document.querySelector(".pear1");
    let pear2      = document.querySelector(".pear2");
    let appleLeft  = document.querySelector(".apple-left");
    let appleRight = document.querySelector(".apple-right");
    let watermelon = document.querySelector(".watermelon");

    if (s === 0 && prev_s !== 0) {
        watermelon.innerHTML = "";
    } else if (s > prev_s) {
        addSeed(watermelon, positions.watermelon, prev_s);
    }

    if (m1 === 0 && prev_m1 !== 0) {
        appleLeft.innerHTML = "";
    } else if (m1 > prev_m1) {
        addSeed(appleLeft, positions.appleLeft, m1 - 1);
    }

    if (m2 === 0 && prev_m2 !== 0) {
        appleRight.innerHTML = "";
    } else if (m2 > prev_m2) {
        addSeed(appleRight, positions.appleRight, m2 - 1);
    }

    if (h1 === 0 && prev_h1 !== 0) {
        pear1.innerHTML = "";
    } else if (h1 > prev_h1) {
        addSeed(pear1, positions.pear, h1 - 1);
    }

    if (h2 === 0 && prev_h2 !== 0) {
        pear2.innerHTML = "";
    } else if (h2 > prev_h2) {
        addSeed(pear2, positions.pear, h2 - 1);
    }

    prev_s  = s;
    prev_m1 = m1;
    prev_m2 = m2;
    prev_h1 = h1;
    prev_h2 = h2;
}

// Wait for images to load before placing seeds so % positions resolve correctly
window.onload = function() {
    let now = new Date();
    let h  = now.getHours() % 12 || 12;
    let m  = now.getMinutes();
    let s  = now.getSeconds();

    let h1 = Math.floor(h / 10);
    let h2 = h % 10;
    let m1 = Math.floor(m / 10);
    let m2 = m % 10;

    let pear1      = document.querySelector(".pear1");
    let pear2      = document.querySelector(".pear2");
    let appleLeft  = document.querySelector(".apple-left");
    let appleRight = document.querySelector(".apple-right");
    let watermelon = document.querySelector(".watermelon");

    repeat(s,  function(i) { addSeed(watermelon, positions.watermelon, i); });
    repeat(m1, function(i) { addSeed(appleLeft,  positions.appleLeft,  i); });
    repeat(m2, function(i) { addSeed(appleRight, positions.appleRight, i); });
    repeat(h1, function(i) { addSeed(pear1,      positions.pear,       i); });
    repeat(h2, function(i) { addSeed(pear2,      positions.pear,       i); });

    prev_s  = s;
    prev_m1 = m1;
    prev_m2 = m2;
    prev_h1 = h1;
    prev_h2 = h2;

    setInterval(tick, 1000);
};

let sound = document.getElementById("rty");
let soundBtn = document.getElementById("soundBtn");

let isPlaying = false;

soundBtn.addEventListener("click", function() {

    if(isPlaying === false){
        sound.play();
        soundBtn.textContent = "OFF";
        isPlaying = true;
    } else{
        sound.pause();
        soundBtn.textContent = "ON";
        isPlaying = false;
    }

});


