import "./style.css"
import { addSidebar } from "./home";

const sidebarMenu = document.getElementById("sidebarMenu");
sidebarMenu.appendChild(addSidebar());
