const body = document.querySelector("body");
const bgContainer = document.querySelector(".js-background");

const IMG_NUMBER = 3;

// function handleImageLoad(event){
//     console.log("finished loading")
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./images/raw/bg${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    bgContainer.appendChild(image);
    // image.addEventListener("loadend", handleImageLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * 4);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();