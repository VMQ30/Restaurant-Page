import "./style.css";
import { generateHome } from "./home";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", ()=>{
    generateHome();
})

generateHome();