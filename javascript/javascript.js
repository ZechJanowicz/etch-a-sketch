console.log("Hello world")
amountSpace = ""
var slider = document.getElementById("sliderQuerry")
var output = document.getElementById("sliderInfo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

update=()=> {
    output.innerHTML = slider.value;
    newSelection = parseInt(slider.value);
    gridSelection = newSelection * newSelection
    
    document.getElementById('grid').style.gridTemplateColumns = `repeat(${newSelection}, 1fr)`
    document.getElementById('grid').style.gridTemplateRows = `repeat(${newSelection}, 1fr)`
    for (i = 0; i < gridSelection; i++) {
        addDiv();
    }
    placeEventListenerOnTiles();
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



let colorChoose = () => 
 color = prompt("What is the color you'd like to use: ")


function colorSquare() {
    this.style.backgroundColor = `${color}`;
    console.log(color);
    return color;
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


function gridSpace() {

}






colorChoose();
console.log(oninput)
