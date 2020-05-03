const windowFrame = document.querySelector("body");
const screenWidth = window.innerWidth;

function detectResponsive(event){
    const currentWidth = event.target.innerWidth;
    const currentHeight = event.target.innerHeight;
    handleMode(currentWidth);
}

function handleScreen(){
    window.addEventListener("resize", detectResponsive);
}

function handleMode(width){
    if(width > 1224){
        body.className = "pc";
    }else{
        body.className = "non-pc";
    }
}

function init(){
    handleMode(screenWidth);
    handleScreen();
    console.dir(windowFrame);
}

init();