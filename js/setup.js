
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let input = {mouseX: 0, mouseY: 0}

function SetupGameLoop()
{
    initializeTileTypes();
    this.grid = CreateGrid();
    let framesPerSecond = 30;
    setInterval(function() {
        //moveEverything();
        drawEverything();
    }, 1000/framesPerSecond)

    canvas.addEventListener('mousemove', updateMousePos);
}

function updateMousePos(evt)
{
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    input.mouseX = evt.clientX - rect.left - root.scrollLeft;
    input.mouseY = evt.clientY - rect.top - root.scrollTop;
}