function drawEverything() {
     drawBorders();
     //drawTest();
     drawMouseCoord();
}

function drawBorders()
{
    ctx.fillStyle="Black";
    padding = 5;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="Snow";
    ctx.fillRect(padding,padding,canvas.width-padding-padding,canvas.height-padding-padding);
}

/*function drawTest(){
    ctx.drawImage(testGridSpace.tile.image, 100, 300, testGridSpace.tile.size, testGridSpace.tile.size);
}*/

function drawMouseCoord()
{
    let x = input.mouseX; 
    let y = input.mouseY;
    let gridX = window.grid.getGridX(x); 
    let gridY = window.grid.getGridY(y);
    let topText = (`${x}, ${y}`);
    let botText = (`${gridX}, ${gridY}`);
    drawText(topText, input.mouseX, input.mouseY, 'green');
    drawText(botText, input.mouseX, input.mouseY+30, 'green');
    let startX = window.grid.getWorldX(gridX);
    let startY = window.grid.getWorldY(gridY);
    let size = window.grid.tileSize;
    drawRect(startX, startY, size, size, 'red');
}