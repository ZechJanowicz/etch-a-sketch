console.log("Hello world")
amountSpace = ""

var addDiv = () => {

newDiv = document.createElement('div');
newDiv.style.borderWidth = "1px";
newDiv.style.borderColor = "white";
newDiv.style.borderStyle = "solid";
newDiv.innerHTML = "&nbsp";

newDiv.className = "divClass"
return document.getElementById('grid').appendChild(newDiv) + newDiv;
}

function colorSquare() {
    this.style.backgroundColor = "pink";
}

/*64 for now*/
/*Make a selector for a color*/

function placeEventListenerOnTiles() {
    let allTiles = document.querySelectorAll(".divClass");
    allTiles.forEach(element => {
        element.addEventListener("mouseover", colorSquare);
    })
}

const canvasSpace = () => {
    userInput = prompt("Amount: 1 to 64: ")
    sqrtInput = userInput * userInput;
    return sqrtInput + userInput;
}



function gridSpace() {
    document.getElementById('grid').style.gridTemplateColumns = `repeat(${userInput}, 1fr)`
    document.getElementById('grid').style.gridTemplateRows = `repeat(${userInput}, 1fr)`

}



function gridMod() {
    canvasSpace();
    gridSpace();
    for (i = 0; i < sqrtInput; i++) {
        addDiv();
    }
}



gridMod();
placeEventListenerOnTiles();