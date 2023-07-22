
function gridCreator(gridCount, parent){
    for(let i = 0; i<gridCount*gridCount;i++){
        var div = document.createElement("div");
        div.classList.add("grid");
       
        div.style.width = `${canvas.offsetWidth/gridCount}px`;
        div.style.height = `${canvas.offsetHeight/gridCount}px`;
        parent.append(div);
    }
}
let rainbows = false;
function toggleRainbow(){
    if(rainbows) rainbows = false;
    else rainbows= true;
}
function addListener(){
    const divs = document.querySelectorAll(".grid")
    divs.forEach(div => div.addEventListener("mouseover",changeColor));
}
function changeColor(){
    if(!rainbows) this.style.background =color;
    else{
    const randomColors = "#" + (Math.floor(Math.random()*16777215).toString(16));
    this.style.background = randomColors;
    }
}

function resetCanvas(){
    canvas.innerHTML = '';
    gridCreator(slider.value,canvas);
    addListener();
}
const slider = document.querySelector(".slider");
const dimensions = document.querySelector(".dimensions")
slider.defaultValue = 16;

dimensions.textContent = `${slider.value} X ${slider.value}`;
const canvas = document.querySelector(".canvas");
gridCreator(slider.value,canvas);
addListener();

slider.oninput = function(){
    resetCanvas();
    dimensions.innerHTML = `${slider.value} X ${slider.value}` ;
}


let color = "red";
const cButtons = document.querySelectorAll(".color-button");
cButtons.forEach(cButton => cButton.addEventListener("click", function(){
    color = this.id;
}))

const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click",toggleRainbow)

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click",resetCanvas);

