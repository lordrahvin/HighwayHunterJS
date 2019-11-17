function Grid() {
    this.cameraScrollingSpeed = 0;
    this.startingWorldCoord = {x:10,y:10}
    this.numRows = 30;
    this.numCols = 10;
    this.defaultGridSize = 46;
    this.border = {right:470, left:10, top:10,bottom:470}
}

gridCoordFromWorldCoord = function(worldX,worldY) {
    //values of x =    33,    79,   125,   171,   217,   263,   309,   355,   401,   447  (10 columns on screen)
    //values of y =  -427,  -381,  -335,  -289,  -243,  -197,  -151,  -105,   =59,   -13  (10 rows above screen)
    //                 33,    79,   125,   171,   217,   263,   309,   355,   401,   447  (10 rows on screen)
    //                493,   539,   585,   631,   677,   723,   769,   815,   861,   907  (10 rows below screen)
    

}

GridSpace = function(tileType, position, active, size) {
    this.tile = tileType || tileTypes[0],
    this.position = position || {x:0,y:0},
    this.active = active || true,
    this.size = size || grid.defaultGridSize,
    getOffset = function() {return tileType.size / 2;},
    draw = function(){ctx.drawImage(tile.image, position.x-getOffset(), position.y-getOffset(), tile.size, tile.size);}
}

function createGrid()
{
    gridCoord = {x,y}
    grid = new Grid();
    testGridSpace = new GridSpace(tileTypes[0], {x:100, y:100}, true)
}
