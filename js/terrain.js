
tileTypes = []
tileSize = 10;

TileType = function (type, image, friction, offRoad, obstacle, hazard, size) {
    this.type = type || "";
    this.image = image || images[0];
    this.position = position || {x=0, y=0};
    this.friction = friction || 0;
    this.offRoad = offRoad || true;
    this.obstacle = obstacle || false;
    this.hazard = hazard || false;
    this.active = active || false;
    this.size = size || tileSize;
};
    
tileTypes.push(new TileType("Road", image[0], 0, false, false, false, tileSize));
tileTypes.push(new TileType("Grass", image[1], 0, true, false, false, tileSize));



