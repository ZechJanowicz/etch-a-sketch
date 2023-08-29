var slider = document.getElementById("sliderQuerry")
var output = document.getElementById("sliderInfo");
output.innerHTML = slider.value;
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


newDiv.className = "divClass"
return document.getElementById('grid').appendChild(newDiv) + newDiv;
}


function blue () {
    choice = "blue";
}

function red () {
    choice = "red";
}

function green() {
    choice = "green";
}

function purple() {
    choice = "purple";
}

function yellow() {
    choice = "yellow";
}

function black() {
    choice = "black";
}

function white() {
    choice = "white";
}  

function random () {
    x = (Math.floor(Math.random() * 1001) +1);
    y = (Math.floor(Math.random() * 1001) +1);
    z = (Math.floor(Math.random() * 1001) +1);
    choice = "random";
}



function colorSquare() {
    if (choice === "blue") {
        color = "blue";
        this.style.backgroundColor = `${color}`;
}
    else if(choice === "red") {
        color = "red";
        this.style.backgroundColor = `${color}`;
    }
    else if (choice === "green") {
        color = "green";
        this.style.backgroundColor = `${color}`;
    }
    else if (choice === "purple") {
        color = "purple";
        this.style.backgroundColor = `${color}`;
    }
    else if (choice === "yellow") {
        color = "yellow";
        this.style.backgroundColor = `${color}`;
    }
    else if (choice === "black") {
        color = "black";
        this.style.backgroundColor = `${color}`;
    }
    else if (choice === "white") {
        color = "white";
        this.style.backgroundColor = `${color}`;
    }
    else if (choice === "random") {
        color = `${x}, ${y}, ${z}`;
        this.style.backgroundColor = `rgb(${color})`
        random();
    }
    else {
        color = "white";
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
