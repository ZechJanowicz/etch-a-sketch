console.log("Hello world")

function addDiv() {
var div = document.createElement('div');
div.style.flexGrow = "1";
div.style.background = "black";
div.style.borderWidth = "1px";
div.style.borderColor = "white";
div.style.borderStyle = "solid";
div.innerHTML = "&nbsp";

return document.getElementById('grid').appendChild(div);
}


/*64 for now*/


const canvasSpace = () => {
    userInput = prompt("Enter amount: ")
    return userInput;
}

function gridMod() {
    canvasSpace();
    for (i = 0; i < userInput; i++) {
        addDiv();
    }
}

gridMod();