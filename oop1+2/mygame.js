const csv = document.getElementById('breakOut');
const ctx  = csv.getContext('2d');
function drawreact(x,y){
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
}
drawreact(150,200);
let y=100
ctx.clearRect(0,0,400,500);
drawreact(200.250);

function loop(){
    ctx.clearRect(0,0,400,500);
    drawreact(150,y);
    y+=20;
    requestAnimationFrame(loop);
}
loop();
