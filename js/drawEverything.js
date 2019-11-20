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
    grid = window.grid;
    x = input.mouseX;
    y = input.mouseY;
    gridX = grid.getX(x);
    gridY = grid.getY(y);
    
    textToDisplay = (`${x}, ${y} : ${gridX}, ${gridY}`);
    //textToDisplay = x + ', ' + input.mouseY + " : " + grid.getX(input.mouseX) + ", " + grid.getY(input.mouseY);
    drawText(textToDisplay, input.mouseX, input.mouseY, 'green');
 }