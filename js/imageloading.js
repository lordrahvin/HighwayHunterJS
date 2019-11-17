
let gameImages = []

let imagesToLoad = [
      { name: "road", path:"", filename: "road.png"},
      { name: "grass", path:"images\\", filename: "grass.png"},
      { name: "road_left", path:"images\\", filename: "road_left.png"},
      { name: "road_right", path:"images\\", filename: "road_right.png"}
]

function beginLoadingImages (imageObjectArray) {
    let src = []
    let count = 0;
    for (let imageObject of imageObjectArray)
    {
        src[count] = (imageObject.path + imageObject.filename);
        count++;
    }
    imageCount = {numOfImages: src.length}
    loadImages(src, imageCount);
}

function loadImages (src, imageCount) {
    let fileArray = [];
    if (Array.isArray(src))
        for (let key of src)
            fileArray.push(key);
    else
        fileArray.push(src);
    for(let i = 0; i<fileArray.length; i++)
    {
        gameImages[i] = new Image();
        gameImages[i].onload = registerImageLoaded(imageCount);
        gameImages[i].src = fileArray[i];
    }
}

function registerImageLoaded (imageCount) {
    imageCount.numOfImages--;
    if (imageCount.numOfImages<=0) {imagesHaveBeenLoaded();}
}

function imagesHaveBeenLoaded() {
    SetupGameLoop();
}

