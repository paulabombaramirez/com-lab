let box1 = document.querySelector("#redButton");

function clickBox() {
  document.body.style.backgroundColor = "red";
  box1.classList.add("hidden");

  let blueBtn1 = document.createElement("button");
  blueBtn1.innerText = "blue";
  blueBtn1.className = "blueBtn";

  let blueBtn2 = document.createElement("button");
  blueBtn2.innerText = "blue";
  blueBtn2.className = "blueBtn";

  blueBtn1.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";

document.querySelectorAll(".blueBtn").forEach(function(btn) { btn.classList.add("hidden"); });

    let o1 = document.createElement("button"); o1.innerText = "orange"; o1.className = "orangeBtn";
    let o2 = document.createElement("button"); o2.innerText = "orange"; o2.className = "orangeBtn";
    let o3 = document.createElement("button"); o3.innerText = "orange"; o3.className = "orangeBtn";

    o1.addEventListener("click", function() {
      document.body.style.backgroundColor = "orange";

    document.querySelectorAll(".orangeBtn").forEach(function(btn) { btn.classList.add("hidden"); });

      let g1 = document.createElement("button"); g1.innerText = "green"; g1.className = "greenBtn";
      let g2 = document.createElement("button"); g2.innerText = "green"; g2.className = "greenBtn";
      let g3 = document.createElement("button"); g3.innerText = "green"; g3.className = "greenBtn";
      let g4 = document.createElement("button"); g4.innerText = "green"; g4.className = "greenBtn";

      g1.addEventListener("click", function() {
        // random surprise color 
        let colors = ["red", "blue", "orange", "green", "purple", "pink"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        document.querySelectorAll(".greenBtn").forEach(function(btn) { btn.classList.toggle("hidden"); });
        document.querySelector(".sub-head h3").innerText = "surprise! 🎨";
      });

      g2.addEventListener("click", g1.onclick);
      g3.addEventListener("click", g1.onclick);
      g4.addEventListener("click", g1.onclick);

      document.querySelector(".buttonContainer").append(g1);
      document.querySelector(".buttonContainer").append(g2);
      document.querySelector(".buttonContainer").append(g3);
      document.querySelector(".buttonContainer").append(g4);
    });

o2.addEventListener("click", o1.onclick);
o3.addEventListener("click", o1.onclick);

    document.querySelector(".buttonContainer").append(o1);
    document.querySelector(".buttonContainer").append(o2);
    document.querySelector(".buttonContainer").append(o3);
  });

  blueBtn2.addEventListener("click", blueBtn1.onclick);

  document.querySelector(".buttonContainer").append(blueBtn1);
  document.querySelector(".buttonContainer").append(blueBtn2);
}