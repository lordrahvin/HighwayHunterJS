function Grid() {
    this.name = "Grid";
    this.cameraScrollingSpeed = 0;
    this.startingWorldCoord = {x:10,y:10}
    this.PercentOfGridOnScreen = 1/3;
    this.tileSize = 46;
    this.width = canvas.width;
    this.height = canvas.height / this.PercentOfGridOnScreen;
    this.numRows = this.height/this.tileSize;
    this.numCols = this.width/this.tileSize;
    this.border = {right:470, left:10, top:10,bottom:470}
    this.getTileID = function (col, row) {
        return (col + this.numCols * (row-Math.floor(this.numRows * this.PercentOfGridOnScreen)))
    }
    this.displayStats = function (){
        console.log (this.name, this.width + " x " + this.height)
        console.log ("tiles: " + col+this.numCols*this.numRows, "   size: " + this.tileSize );
    }
    this.getX = function(coord){
        return Math.floor(coord / canvas.width);
    }
    this.getY = function(coord){
        return Math.floor(coord / canvas.height);
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
    let grid = {}
    Grid.call(grid);
    //let testGridSpace = new GridSpace(tileTypes[0], {x:100, y:100}, true)
    return grid
}


