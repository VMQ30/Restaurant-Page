import bgImg from "./pics/cafe-coffee.png";

export function generateMenu(){
    const bgImage = document.createElement("img");
    bgImage.src = bgImg;

    const content = document.getElementById("content");
    content.innerHTML = "";
    content.style.backgroundImage = `url(${bgImg})`;
    content.style.width = '100vw';
    content.style.height = '100vh';
    content.style.display = 'flex';
    content.style.justifyContent = 'center';
    content.style.alignItems = 'center';
    
    const menuContainer = document.createElement("div");
    menuContainer.style.width = '80vw';
    menuContainer.style.height = '80vh';
    menuContainer.style.backgroundColor = "rgba(208, 208, 208, 0.5)";
    menuContainer.style.borderRadius = "10px";
    menuContainer.style.backdropFilter  = "blur(10px)";
    content.appendChild(menuContainer);

    const menuGrid = document.createElement('div');
    menuGrid.style.display = "grid";
    menuGrid.style.gridTemplateColumns = "1fr 1fr 1fr";
    menuContainer.appendChild(menuGrid);
}