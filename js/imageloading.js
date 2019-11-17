
let images = []

let imagesToLoad = [
      { name: "road", path:"", filename: "road.png"},
      //{ name: "grass", path:"images\\", filename: "grass.png"},
      //{ name: "road_left", path:"images\\", filename: "road_left.png"},
      //{ name: "road_right", path:"images\\", filename: "road_right.png"}
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
        images[i] = new Image();
        images[i].onload = registerImageLoaded(imageCount);
        images[i].src = fileArray[i];
    }
}

function registerImageLoaded (imageCount) {
    imageCount.numOfImages--;
    if (imageCount.numOfImages<=0) {imagesHaveBeenLoaded();}
}

function imagesHaveBeenLoaded() {
    let x = 150;
    let y = 250;
    let size = 20;
    //ctx.fillStle = "black";
    //ctx.fillRect(0,0,640,640);
    //ctx.fillStyle = "snow";
    //ctx.fillRect(10,10,620,620);
    for (let i=0; i<images.length; i++) {
        x=x+25; 
        ctx.drawImage(images[i], x, y, 75, 75);
    }

    for (let anImage of images)
    {
        console.log(anImage);
        console.log(anImage['src']);
        ctx.drawImage(anImage, 75, 75);
    }
}

