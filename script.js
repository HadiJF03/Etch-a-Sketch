
function gridCreator(gridCount, parent){
    for(let i = 0; i<gridCount*gridCount;i++){
        var div = document.createElement("div");
        div.classList.add("grid");
       
        div.style.width = `${canvas.offsetWidth/gridCount}px`;
        div.style.height = `${canvas.offserheight/gridCount}px`;
        parent.append(div);
    }
}
let rainbows = false;
function toggleRainbow(){
    if(rainbows) rainbows = false;
    else rainbows= true;
}

function changeColor(){
    if(!rainbows) this.style.background =color;
    else{
    const randomColors = "#" + (Math.floor(Math.random()*16777215).toString(16));
    this.style.background = randomColors;
    }
    function randomColor(){
        l
        this.style.background = randomColors;
    }
}

function resetCanvas(){
    divs.forEach(div=> div.style.background = "white");
}
const canvas = document.querySelector(".canvas");
gridCreator(16,canvas);

const divs = document.querySelectorAll(".grid")
divs.forEach(div => div.addEventListener("mouseover",changeColor));
   

let color = "red";
const cButtons = document.querySelectorAll(".color-button");
cButtons.forEach(cButton => cButton.addEventListener("click", function(){
    color = this.id;
}))

const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click",toggleRainbow)

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click",resetCanvas);

