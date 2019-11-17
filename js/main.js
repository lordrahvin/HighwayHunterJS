
window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    beginLoadingImages(imagesToLoad);
}

function moveEverything() {

}

function drawEverything() {
   ctx.drawImage(images[0], 100, 100); 
}

