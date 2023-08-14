export function addSidebar() {
    
    const sidebarMenu = document.getElementById("sidebarMenu");

    const homeButton = document.createElement("button");
    homeButton.innerText = "Home";
    const menuButton = document.createElement("button");
    menuButton.innerText = "Menu"
    const contactButton = document.createElement("button");
    contactButton.innerText = "Contact"

    sidebarMenu.appendChild(homeButton);
    sidebarMenu.appendChild(menuButton);
    sidebarMenu.appendChild(contactButton);
    
}

export function addWelcomeText() {
    
}