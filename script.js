
function gridCreator(gridCount, parent){
    for(let i = 0; i<gridCount*gridCount;i++){
        var div = document.createElement("div");
        div.classList.add("grid");
       
        div.style.width = `${canvas.offsetWidth/gridCount}px`;
        div.style.height = `${canvas.offserheight/gridCount}px`;
        parent.append(div);
    }
}
function changeColor(){
    this.style.background =color
}
const canvas = document.querySelector(".canvas");
console.log(canvas);

gridCreator(16,canvas);

const divs = document.querySelectorAll(".grid")
console.log(divs)
divs.forEach(div => div.addEventListener("mouseover",changeColor))

let color = "red"
const cButtons = document.querySelectorAll(".color-button");
cButtons.forEach(cButton => cButton.addEventListener("click", function(){
    color = this.id;
}))
