
tileTypes = []
tileSize = 46;

function TileType (type, image, friction, offRoad, obstacle, hazard, size) {
    this.type = type || "";
    this.image = image || gameImages[0];
    this.friction = friction || 0;
    this.offRoad = offRoad || true;
    this.obstacle = obstacle || false;
    this.hazard = hazard || false;
    this.size = size || tileSize;
};

function initializeTileTypes () {
    tileTypes.push(new TileType("Road", gameImages[0], 0, false, false, false, tileSize));
    tileTypes.push(new TileType("Grass", gameImages[1], 0, true, false, false, tileSize));
}



