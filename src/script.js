import "./style.css";
import { generateHome } from "./home";
import { generateMenu } from "./menu";
import { generateAbout } from "./about";
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", ()=>{
    generateHome();
})


menuButton.addEventListener("click", () =>{
    generateMenu();
})

aboutButton.addEventListener("click", () =>{
    generateAbout();
})

generateAbout();