
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

function SetupGameLoop()
{
    createTiles();
    createGrid();
    let framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond)
}