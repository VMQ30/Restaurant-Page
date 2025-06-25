import bgImg from "./pics/cafe-coffee.png";

export function generateHome(){
    const bgImage = document.createElement("img");
    bgImage.src = bgImg;

    const content = document.getElementById("content");
    content.style.backgroundImage = `url(${bgImg})`;
    content.style.width = '100vw';
    content.style.height = '100vh';
    
    const titleBox = document.createElement("div");
    titleBox.setAttribute("style", 
        "width: 100vw; height: 30vh; background-color: rgba(0,0,0,0.5); position: relative; top: 50vh; display:flex; box-shadow: 0 0 10px rgba(0,0,0,0.5)"
    );

    content.appendChild(titleBox);

    const titleStyle = "font-size: 90px; font-weight:bold; color: rgba(130, 139, 123, 1); font-style: italic; margin-left: 50px; display:flex; justify-content:center; align-items: center";

    const title1 = document.createElement("h1");
    title1.setAttribute("style", titleStyle)
    title1.textContent = `The Grind`;

    const title2 = document.createElement("h1");
    title2.setAttribute("style", titleStyle);
    title2.textContent = `Starts Here`;

    const titleContainer = document.createElement("div");
    titleContainer.setAttribute("style", "display:flex; flex-direction: column; justify-content: center; align-items: start;");

    titleContainer.appendChild(title1);
    titleContainer.appendChild(title2);

    titleBox.appendChild(titleContainer);
};



