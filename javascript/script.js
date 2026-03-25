

let name = "paula";
let temperature = 25;

alert("hello" + name +"!i am"+temperature+ "old")

let language3 ="javascript"; //gloabl language

function greet(){
  //let language3 ="javascript"; //local language 
  console.log("speaking", language3)
  alert("this is tricky");
  console.log ("this function finished.")
}

function myFunction(){
  console.log(language3+ "is fun")
}

function greet2(theName){
  console.log("hello,"+ theName)
}

function changedHeadline(){
    console.log ("function runs. changing headline");
    document.querySelector("#programmimgLanguage").innerText="javascript";
}





