console.log("Hello world")
amountSpace = ""
var slider = document.getElementById("sliderQuerry")
var output = document.getElementById("sliderInfo");
output.innerHTML = slider.value;
i = 0;
slider.oninput = function() {
    output.innerHTML = this.value;
}


update=()=> {
    document.getElementById('grid').innerHTML = ''
    output.innerHTML = slider.value;
    newSelection = parseInt(slider.value);
    secondCondition = newSelection;
  
    gridSelection = newSelection * newSelection
    gridSpace();
    for (i = 0; i < gridSelection; i++) {
        addDiv();
    }
    placeEventListenerOnTiles();
}


function gridSpace() {
    document.getElementById('grid').style.gridTemplateColumns = `repeat(${newSelection}, 1fr)`
    document.getElementById('grid').style.gridTemplateRows = `repeat(${newSelection}, 1fr)`
}



var addDiv = () => {

newDiv = document.createElement('div');
newDiv.style.borderWidth = "1px";
newDiv.style.borderColor = "white";
newDiv.style.borderStyle = "solid";
newDiv.innerHTML = "&nbsp";


newDiv.className = "divClass"
return document.getElementById('grid').appendChild(newDiv) + newDiv;
}


function blue () {
    choice = "blue";
    choiceBlue = true;
    console.log("hentai");
}

function red () {
    choice = "red";
    choiceRed = true
    console.log("help")
}




function colorSquare() {
    if (choice === "blue" && choiceBlue == true) {
        choiceRed = false;
        color = "blue";
        this.style.backgroundColor = `${color}`;
}
    else if(choice === "red" && choiceRed == true) {
        color = "red";
        choiceBlue = false
        this.style.backgroundColor = `${color}`;
    }
}

/*64 for now*/
/*Make a selector for a color*/

function placeEventListenerOnTiles() {
    let allTiles = document.querySelectorAll(".divClass");
    allTiles.forEach(element => {
        element.addEventListener("mouseover", colorSquare);
    })
}

function sliderUpdate() {
    slider.addEventListener('input', update);
    updatedSelection = parseInt(update);
}



sliderUpdate();
console.log(oninput)
