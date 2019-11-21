function Grid() {
    window.grid.name = "Grid";
    window.grid.cameraScrollingSpeed = 0;
    window.grid.startingWorldCoord = {x:10,y:10}
    window.grid.PercentOfGridOnScreen = 1/3;
    window.grid.tileSize = 92;
    window.grid.width = canvas.width;
    window.grid.height = canvas.height / window.grid.PercentOfGridOnScreen;
    window.grid.numRows = window.grid.height/window.grid.tileSize;
    window.grid.numCols = window.grid.width/window.grid.tileSize;
    window.grid.border = {right:470, left:10, top:10,bottom:470}
    window.grid.getTileID = function (col, row) {
        return (col + this.numCols * (row-Math.floor(this.numRows * this.PercentOfGridOnScreen)))
    }
    window.grid.displayStats = function (){
        console.log (this.name, this.width + " x " + this.height)
        console.log ("tiles: " + col+this.numCols*this.numRows, "   size: " + this.tileSize );
    }
    window.grid.getGridX = function(coord){
        return Math.floor(coord / window.grid.tileSize) + 1;
    }
    window.grid.getGridY = function(coord){
        return Math.floor(coord / window.grid.tileSize) + 21;
    }
    window.grid.getWorldX = function(gridCoord)
    {
        return Math.floor((gridCoord-1) * window.grid.tileSize);
    }
    window.grid.getWorldY = function(gridCoord)
    {
        return Math.floor((gridCoord-21) * window.grid.tileSize);
    }
}

function TileType (type, image, friction, offRoad, obstacle, hazard, size) {
    this.type = type || "";
    this.image = image || gameImages[0];
    this.friction = friction || 0;
    this.offRoad = offRoad || true;
    this.obstacle = obstacle || false;
    this.hazard = hazard || false;
    this.size = size || grid.defaultTileSize;
};

function initializeTileTypes () {
    tileTypes.push(new TileType("Road", gameImages[0], 0, false, false, false, tileSize));
    tileTypes.push(new TileType("Grass", gameImages[1], 0, true, false, false, tileSize));
}

/*
gridCoordFromWorldCoord = function(worldX,worldY) {
    //values of x =    33,    79,   125,   171,   217,   263,   309,   355,   401,   447  (10 columns on screen)
    //values of y =  -427,  -381,  -335,  -289,  -243,  -197,  -151,  -105,   =59,   -13  (10 rows above screen)
    //                 33,    79,   125,   171,   217,   263,   309,   355,   401,   447  (10 rows on screen)
    //                493,   539,   585,   631,   677,   723,   769,   815,   861,   907  (10 rows below screen)
    // 46
    // (15, 95)  25/46 = 7.826 = 8
    // 52
    let offsetX = (grid.defaultGridSize /2)+grid.border.left;
    let offsetY = (grid.defaultGridSize /2)+grid.border.top;
    let x = Math.round(worldX-offsetX);
    let y = Math.round(worldY-offsetY);
}*/

/*
GridSpace = function(tileType, position, active, size) {
    this.tile = tileType || tileTypes[0],
    this.position = position || {x:0,y:0},
    this.active = active || true,
    this.size = size || grid.defaultGridSize,
    getOffset = function() {return tileType.size / 2;},
    draw = function(){ctx.drawImage(tile.image, position.x-getOffset(), position.y-getOffset(), tile.size, tile.size);}
}*/

function CreateGrid()
{
    //let gridCoord = {x:0, y:0}
    window.grid = {}
    Grid.call(grid);
    //let testGridSpace = new GridSpace(tileTypes[0], {x:100, y:100}, true)
    return grid
}


