import "./style.css"
import { addSidebar } from "./home";
import { addHeroText } from "./home";
import { showContact } from "./contact";
import { clearScreen } from "./clear";

addSidebar();
addHeroText();

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
    clearScreen();
    addHeroText();
})

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
    clearScreen();
})

const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", () => {
    console.log("I am contact");
    clearScreen();
    showContact();
})

