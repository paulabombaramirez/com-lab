setTimeout(function() {
    document.querySelector(".boy").style.transform = "translateX(0)";
    document.querySelector(".girl").style.transform = "translateX(0)";
}, 500);

let messagesStarted = false;

function windowWasScrolled() {
  let percentage = getScrollPercentage();

  if (percentage > 33 && percentage < 66) {
    document.querySelector(".leftside").style.transform = "translateX(0)";
    document.querySelector(".rightside").style.transform = "translateX(0)";
    document.querySelector(".topbar").style.transform = "translateY(0)";

    if (!messagesStarted) {
      messagesStarted = true;
      showNextMessage();
    }

  } else {
    document.querySelector(".leftside").style.transform = "translateX(-300px)";
    document.querySelector(".rightside").style.transform = "translateX(300px)";
    document.querySelector(".topbar").style.transform = "translateY(-60px)";
  }
}

window.addEventListener("scroll", windowWasScrolled);

function getScrollPercentage() {
  let scrolledAlready = window.scrollY;
  let pageHeight = document.body.scrollHeight;
  let windowHeight = window.innerHeight;
  let possibleScrollSpace = pageHeight - windowHeight;
  let percentage = (scrolledAlready / possibleScrollSpace) * 100;
  return percentage;
}

let texts = [
  { who: "romeo", text: "hey so… disney was not on my bingo card for finding someone actually cool" },
  { who: "romeo", text: "ur the only person i saw all day who looked genuinely unbothered waiting in a 2 hour line" },
  { who: "juliet", text: "LMAOO why are you like this" },
  { who: "juliet", text: "also what did u find" },
  { who: "romeo", text: "nothing which made it worse bc now im just thinking abt u" },
  { who: "romeo", text: "also ur family was SO loud at the parade 💀" },
  { who: "juliet", text: "DO NOT talk about my family i will block u" },
  { who: "juliet", text: "…they were a little loud" },
  { who: "romeo", text: "okay what are u doing rn" },
  { who: "juliet", text: "thinking abt u obviously 😭" },
  { who: "romeo", text: "can i call u" },
  { who: "juliet", text: "…yeah" },
  { who: "juliet", text: "💗" },
];

let container = document.getElementById("chatContainer");
let currentIndex = 0;

function showNextMessage() {
  if (currentIndex >= texts.length) return;

  let msg = texts[currentIndex];
  let bubble = document.createElement("div");
  bubble.classList.add("bubble", msg.who);
  bubble.textContent = msg.text;
  container.appendChild(bubble);

  currentIndex++;
  setTimeout(showNextMessage, 1500);
}