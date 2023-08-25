console.log("Hello world")
amountSpace = ""

function addDiv() {
var div = document.createElement('div');
div.style.background = "black";
div.style.borderWidth = "1px";
div.style.borderColor = "white";
div.style.borderStyle = "solid";

div.innerHTML = "&nbsp";

return document.getElementById('grid').appendChild(div);
}


/*64 for now*/


const canvasSpace = () => {
    userInput = prompt("Amount: 1 to 64: ")
    sqrtInput = userInput * userInput;
    return sqrtInput + userInput;
}

function gridSpace() {
    document.getElementById('grid').style.gridTemplateColumns = `repeat(${userInput}, 1fr)`
}

function gridMod() {
    canvasSpace();
    gridSpace();
    for (i = 0; i < sqrtInput; i++) {
        addDiv();
    }
}

gridMod();

