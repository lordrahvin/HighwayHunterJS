function drawEverything() {
     drawBorders();
     drawTest();
}

function drawBorders()
{
    ctx.fillStyle="Black";
    ctx.fillRect(0,0,480,480);
    ctx.fillStyle="Snow";
    ctx.fillRect(10,10,460,460);
}
function drawTest(){
    ctx.drawImage(testGridSpace.tile.image, 100, 300, testGridSpace.tile.size, testGridSpace.tile.size);
}