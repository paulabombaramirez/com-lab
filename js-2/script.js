function addParagraph(){
    //create an element in JS world
    let paragraph=document.createElement('p');

// manipulate /configure the element
    paragraph.innerText= "does this work?";

    //put the element onto actual page
    document.body.append(paragraph);
}


function addBox(){
    let box = document.createdElement("div");
    box.className = "box";

    //select the container which the box should
    //go into:
    let container = document.querySelector(".boxContainer");

    //append to container:
    container.append(box);

}

function removeAll(){
    let container = document.querySelector(".boxContainer");
    container.remove();
}

function moveConatiner(){
    let randomNumber= (Math.random()*200)-100;
    console.log(r);
    let container = document.querySelector(".boxContainer");
    conatainer.style.left= randomNumber+"px";

}