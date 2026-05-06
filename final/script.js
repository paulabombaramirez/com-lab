// lock scroll on load until figures have appeared
document.body.style.overflow = "hidden";
let figuresAppeared = false;
 
window.addEventListener("wheel", function() {
  if (!figuresAppeared) {
    document.querySelector(".boy").style.transform = "translateX(0)";
    document.querySelector(".girl").style.transform = "translateX(0)";
    figuresAppeared = true;
    
    setTimeout(function() {
      document.body.style.overflow = "";
    }, 1000);
  }
});
 
// romeo and juliet sides 
let messagesStarted = false;
 
function windowWasScrolled() {
  let messagesSection = document.querySelector(".maincontent");
  let sectionTop = messagesSection.offsetTop;
  let sectionBottom = sectionTop + messagesSection.offsetHeight;
  let scrollMidpoint = window.scrollY + window.innerHeight;
 
  if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
    document.querySelector(".leftside").style.transform = "translateX(0)";
    document.querySelector(".rightside").style.transform = "translateX(0)";
    document.querySelector(".topbar").style.transform = "translateY(0)";
 
    if (!messagesStarted) {
      messagesStarted = true;
      document.body.style.overflow = "hidden";
      addNextMessage(function() {
        document.body.style.overflow = "";
      });
    }
 
  } else {
    document.querySelector(".leftside").style.transform = "translateX(-300px)";
    document.querySelector(".rightside").style.transform = "translateX(300px)";
    document.querySelector(".topbar").style.transform = "translateY(-60px)";
  }
}
 
window.addEventListener("scroll", windowWasScrolled);
 
 
 
// messages
let messages = document.querySelector("#messages");

function addNextMessage(onDone) {
    let delay = 0;

    function addBubble(who, text) {
        setTimeout(function() {
            let bubble = document.createElement("p");
            bubble.className = "bubble " + who;
            bubble.innerText = text;
            messages.append(bubble);
        }, delay);
        delay += 1500;
    }

    addBubble("romeo", "hey so… disney was not on my bingo card for finding someone actually cool");
    addBubble("romeo", "ur the only person i saw all day who looked genuinely unbothered waiting in a 2 hour line");
    addBubble("juliet", "LMAOO why are you like this");
    addBubble("juliet", "also what are you doin");
    addBubble("romeo", "nothing which made it worse bc now im just thinking abt u");
    addBubble("romeo", "also ur family was SO loud at the parade 💀");
    addBubble("juliet", "DO NOT talk about my family i will block u");
    addBubble("juliet", "…they were a little loud");
    addBubble("romeo", "okay what are u doing rn");
    addBubble("juliet", "thinking abt u obviously 😭");
    addBubble("romeo", "can i call u");
    addBubble("juliet", "…yeah");
    addBubble("juliet", "💗");

    setTimeout(onDone, delay);
}
 
// night background fade + lock at bottom of phone section
let callDone = false;
let finalMessageStarted = false;
window.addEventListener("scroll", function() {
  let phoneSection = document.querySelector(".telephonewrapper");
  let sectionTop = phoneSection.offsetTop;
  let sectionHeight = phoneSection.offsetHeight;
  let scrolled = window.scrollY;
 
  let progress = (scrolled - sectionTop) / (sectionHeight - window.innerHeight);
  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;
 
  let r = Math.floor(255 + (15 - 255) * progress);
  let g = Math.floor(255 + (12 - 255) * progress);
  let b = Math.floor(255 + (41 - 255) * progress);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
 
  // lock at the bottom of the phone section until call is done
  if (progress >= 0.97 && !callDone) {
    document.body.style.overflow = "hidden";
  }
 
  // trigger juliet's final message
  // final messages section — show/hide sidebars based on scroll position
  let finalSection = document.querySelector("#finalMessages");
  if (finalSection) {
    let finalTop = finalSection.offsetTop;
    let finalBottom = finalTop + finalSection.offsetHeight;
 
    if (window.scrollY >= finalTop && window.scrollY < finalBottom) {
      document.querySelector(".topbar2").style.transform = "translateY(0)";
      document.querySelector(".leftside2").style.transform = "translateX(0)";
      document.querySelector(".rightside2").style.transform = "translateX(0)";
 
      if (!finalMessageStarted) {
        finalMessageStarted = true;
        document.body.style.overflow = "hidden";

        function addFinalBubble(text, delay) {
          setTimeout(function() {
            let bubble = document.createElement("p");
            bubble.className = "bubble juliet";
            bubble.innerText = text;
            finalSection.append(bubble);
          }, delay);
        }

        addFinalBubble("hey", 1000);
        addFinalBubble("you there?", 2500);
        addFinalBubble("hello??", 4000);
        addFinalBubble("romeo wth", 5500);

        setTimeout(function() {
          document.body.style.overflow = "";
        }, 7000);
      }
    } else {
      document.querySelector(".topbar2").style.transform = "translateY(-60px)";
      document.querySelector(".leftside2").style.transform = "translateX(-300px)";
      document.querySelector(".rightside2").style.transform = "translateX(300px)";
    }
  }
});
 
let call = document.querySelector("#call");
 
// girl and boy slide in on endsection, then dialogue
let girlAppeared = false;
window.addEventListener("scroll", function() {
  let endSection = document.querySelector(".endsection");
  if (endSection && !girlAppeared) {
    let endTop = endSection.offsetTop;
    if (window.scrollY >= endTop) {
      girlAppeared = true;
 
      // girl slides in first
      let allGirls = document.querySelectorAll(".girl");
      allGirls.forEach(function(girl) {
        girl.style.transform = "translateX(0)";
      });
 
      // boy slides in after girl
      setTimeout(function() {
        document.querySelector(".endboy").style.transform = "translateX(0)";
      }, 1200);
 
      // dialogue starts after boy arrives
      setTimeout(function() {
        let girlSpeech = document.querySelector("#girlSpeech");
        let boySpeech = document.querySelector("#boySpeech");
 
        girlSpeech.innerText = "hey, what's your name?";
        girlSpeech.style.opacity = "1";
 
        setTimeout(function() {
          boySpeech.innerText = "james. can i get your number?";
          boySpeech.style.opacity = "1";
 
          setTimeout(function() {
            girlSpeech.innerText = "sure 😊";
          }, 2000);
        }, 2000);
      }, 2500);
    }
  }
});
 
// call 
if(call){
    call.addEventListener("click", function(){
        document.querySelector("#call img").style.animation = "none";
        document.body.style.overflow = "hidden";
 
        let romeo = document.querySelector("#romeoCall");
        let juliet = document.querySelector("#julietCall");
 
        function showRomeo(text) { romeo.innerText = text; juliet.innerText = ""; }
        function showJuliet(text) { juliet.innerText = text; romeo.innerText = ""; }
 
        setTimeout(function(){ showRomeo("okay hi"); }, 0);
setTimeout(function(){ showJuliet("hi 😭 why do you sound nervous"); }, 3000);
setTimeout(function(){ showRomeo("i'm not nervous"); }, 6000);
setTimeout(function(){ showJuliet("you're literally whispering"); }, 9000);
setTimeout(function(){ showRomeo("i just didn't want my family to hear"); }, 13000);
setTimeout(function(){ showJuliet("SAME my mom would actually kill me😭"); }, 17000);
setTimeout(function(){ showRomeo("okay we have so much in common it's actually concerning"); }, 21000);

// tension spike — faster + abrupt
setTimeout(function(){ showRomeo("OMG MY BROTHER HEARD US"); }, 24000);

setTimeout(function(){ showJuliet("what..."); }, 28000);
setTimeout(function(){ showJuliet("...romeo?"); }, 32000);
setTimeout(function(){ showJuliet("...hello.."); }, 37000);

setTimeout(function(){
    showJuliet("...hello...");
    callDone = true;
    document.body.style.overflow = "";

    setTimeout(function(){
        document.querySelector("#romeoCall").innerHTML = "";
        document.querySelector("#julietCall").innerHTML = "";
        document.querySelector("#call").style.display = "none";

        let ended = document.createElement("p");
        ended.innerText = "call ended";
        ended.style.color = "white";
        ended.style.fontSize = "20px";
        ended.style.textAlign = "center";
        ended.style.width = "100%";
        document.querySelector(".telephonewrapper").append(ended);

        setTimeout(function(){
            let snitched = document.createElement("p");
            snitched.innerText = "his brother snitched.";
            snitched.style.color = "white";
            snitched.style.fontSize = "20px";
            snitched.style.textAlign = "center";
            snitched.style.width = "100%";
            document.querySelector(".telephonewrapper").append(snitched);
        }, 2000);
    }, 2500);
}, 42000);
    });
}