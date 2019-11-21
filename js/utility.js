
function drawText(textToDisplay, textX, textY, fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fillText(textToDisplay, textX, textY);
}

function drawRect(startX, startY, width, height, fillColor)
{
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.rect(startX, startY, width, height);
    ctx.stroke();  
}