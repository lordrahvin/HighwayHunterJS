function grid() {
    cameraScrollingSpeed = 0;
    numRows = 100;



}

GridSpace = function(tileType, position, active) {
    this.tile = tileType || tileTypes[0],
    this.position = position || {x:0,y:0},
    this.active = active || true,
    getOffset = function() {return tileType.size / 2;},
    draw = function(){ctx.drawImage(tile.image, position.x-getOffset(), position.y-getOffset(), tile.size, tile.size);}
}

function createGrid()
{
    testGridSpace = new GridSpace(tileTypes[0], {x:100, y:100}, true)
}
