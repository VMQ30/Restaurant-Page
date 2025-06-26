import { generateMenu } from "./menu";
import bgImg from "./pics/cafe-coffee.png";

export function generateAbout(){
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
    menuContainer.classList.add("scrollable");
    menuContainer.style.width = '50vw';
    menuContainer.style.height = '80vh';
    menuContainer.style.backgroundColor = "rgba(208, 208, 208, 0.5)";
    menuContainer.style.borderRadius = "10px";
    menuContainer.style.backdropFilter  = "blur(10px)";
    menuContainer.style.padding = "30px";
    // menuContainer.style.boxSizing = ""
    content.appendChild(menuContainer);

    const aboutUs = document.createElement("p");
    const aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "About Us";
    aboutUs.textContent = "Welcome to The Daily Grind Café, your cozy corner in the city where every cup tells a story. We believe coffee is more than a beverage — it's a moment of pause, a shared smile, a creative spark. From the very beginning, our goal has been to create a space where people can slow down, connect, and enjoy the little things.";
    
    aboutUs.style.fontSize = "20px";
    aboutUs.style.marginBottom = "30px";
    aboutUs.style.textAlign = "justify";

    aboutHeader.style.marginBottom = "10px";
    aboutHeader.style.fontSize = "40px";
    aboutHeader.style.color = "rgb(83, 97, 71)";
    aboutHeader.style.fontWeight = "bold";
    menuContainer.appendChild(aboutHeader);
    menuContainer.appendChild(aboutUs);

    const ourStory = document.createElement("p");
    const storyHeader = document.createElement("h2");
    storyHeader.textContent = "About Us";
    ourStory.textContent = "Welcome to The Daily Grind Café, your cozy corner in the city where every cup tells a story. We believe coffee is more than a beverage — it's a moment of pause, a shared smile, a creative spark. From the very beginning, our goal has been to create a space where people can slow down, connect, and enjoy the little things.";
    
    ourStory.style.fontSize = "20px";
    ourStory.style.marginBottom = "30px";
    ourStory.style.textAlign = "justify";

    storyHeader.style.marginBottom = "10px";
    storyHeader.style.fontSize = "40px";
    storyHeader.style.color = "rgb(83, 97, 71)";
    storyHeader.style.fontWeight = "bold";
    menuContainer.appendChild(storyHeader);
    menuContainer.appendChild(ourStory);

    const order = document.createElement("button");
    order.innerText = "Order Now";
    order.style.backgroundColor = "rgb(83, 97, 71)";
    order.style.padding = "10px 20px";
    order.style.color = "white";
    order.style.border = "none";
    order.style.fontSize = "20px";
    order.style.borderRadius = "10px";
    order.style.boxShadow = "0 3px 5px rgba(0,0,0,0.5)";

    order.addEventListener("click", () =>{
        generateMenu();
    })

    menuContainer.appendChild(order);
}