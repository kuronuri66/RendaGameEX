const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let situation = "start";

let redClick = 0;
let blueClick = 0;
let redRect={x: 0,y: 0,width: 960,height: 1080}
let blueRect={x: 960,y: 0,width: 960,height: 1080}

function Rectfill(Rect) {
    ctx.fillRect(Rect.x, Rect.y, Rect.width, Rect.height);
}

function RectTouch(e,Rect) {
    const canvasRect = canvas.getBoundingClientRect();
    const xOnCanvas = e.clientX * canvas.width / canvasRect.width;
    const yOnCanvas = e.clientY * canvas.height / canvasRect.height;
    return(
        Rect.x < xOnCanvas && xOnCanvas < Rect.x + Rect.width &&
        Rect.y < yOnCanvas && yOnCanvas < Rect.y + Rect.height
    )
}

canvas.addEventListener('mousedown',(e) => {
    click(e);
}, { passive: false });
canvas.addEventListener('touchstart',(e) =>{
    click(e);
}, { passive: false });

function click(e) {
    if(RectTouch(e,redRect)){
        console.log("red")
        redClick++
    }
    if(RectTouch(e,blueRect)){
        blueClick++
    }
}

window.requestAnimationFrame(step);

function step() {
    window.requestAnimationFrame(step);
    ctx.clearRect(0, 0, 1920, 1080);

    ctx.fillStyle = "#ac0000ff";
    Rectfill(redRect);
    ctx.fillStyle = "#000861ff";
    Rectfill(blueRect);

    if(situation=="start"){
        
    }
    
}