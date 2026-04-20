let monkeyEnclosure = docuement.querySelector ("#monkeyEnclosure")

function newMonkey(){
    console.log("making new monkey")

    // make div
 let div = document.createElement("div");

 //make p tag
 let p = document.createElement("p");

 //add class name
p.className= "monkey";

 //add text
p.innerText= "monkey"

 //make position random
 let randomY= Math.random()*200-100;
 div.style.top= randomY+"px";
 let randomX= Math.random()*200-100;
 div.style.left= randomY+"px";

 //attach p tag to div
 div.append(p);

 //attach dich to monkey enclosre
 monkeyEnclosure.append(div);

}

function newAnimal(name,enclosure){
   onsole.log("making new + name")

    // make div
 let div = document.createElement("div");

 //make p tag
 let p = document.createElement("p");

 //add class name
p.className= "monkey";

 //add text
p.innerText= "monkey"

 //make position random
 let randomY= Math.random()*200-100;
 div.style.top= randomY+"px";
 let randomX= Math.random()*200-100;
 div.style.left= randomY+"px";

 //attach p tag to div
 div.append(p);

 //attach dich to monkey enclosre
 monkeyEnclosure.append(div);

 
}