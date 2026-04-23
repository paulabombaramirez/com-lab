//add a event listener 

//the event we want to listen ti is called "scroll"

function windowWasScrolled(){
let percentage = getScrollpercentage();
//console.log("percentage", percentage);

if(percentage > 33){
    console.log("paragraph appeared");
    document.querySelector (".one p").style.transform="rotate(360deg)";
}else{
    document.querySelector (".one p").style.transform="rotate(0deg)";
}


if(percentage > 75){
    console.log("paragraph appeared");
    document.querySelector (".two p").style.transform="scale(3)";
     document.querySelector (".two p").style.color="yellow";
}else{
    document.querySelector (".two p").style.transform="scale(1)";
    document.querySelector (".two p").style.color="black";
}


}
window.addEventListener("scroll",windowWasScrolled)


function getScrollpercentage(){

//how many pixels already scrolled
let scrolledAlready = window.scrollY;

//how high is our page
let pageHeight = document.body.scrollHeight;

//how high is the window
let windowHeight = window.innerHeight;

//how far can we scroll
let possibleScrollSpace = pageHeight - windowHeight;



let percentage = (scrolledAlready/ possibleScrollSpace) * 100;
return percentage;

}