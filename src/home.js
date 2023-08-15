export function addSidebar() {
    
    const sidebarMenu = document.getElementById("sidebarMenu");

    const logo = document.createElement("div");
    logo.setAttribute("id", "logo");
    logo.innerText = "The Yarzo"

    const homeButton = document.createElement("button");
    homeButton.innerText = "Home";
    homeButton.setAttribute("id", "home-button");

    const menuButton = document.createElement("button");
    menuButton.innerText = "Menu"
    menuButton.setAttribute("id", "menu-button");

    const contactButton = document.createElement("button");
    contactButton.innerText = "Contact"
    contactButton.setAttribute("id","contact-button");

    //const footer = document.createElement("a");
    //footer.setAttribute("src","https://github.com/jericho909/");
    //footer.innerText = "jericho909";

    sidebarMenu.appendChild(logo);
    sidebarMenu.appendChild(homeButton);
    sidebarMenu.appendChild(menuButton);
    sidebarMenu.appendChild(contactButton);
    //sidebarMenu.appendChild(footer);
    
}

export function addHeroText() {

    const container = document.getElementById("content");

    const heading1 = document.createElement("h1");
    heading1.innerText = "Welcome to the greatest culinary journey of your life."
    heading1.setAttribute("id", "welcomeHeader")
    container.appendChild(heading1);

    const welcomeText = document.createElement("p");
    welcomeText.setAttribute("id", "welcomeText")
    welcomeText.innerText ="At 'The Yarzo,' we invite you to embark on a captivating culinary odyssey that transcends the ordinary. Our fine dining establishment is not merely a restaurant, but a voyage of flavors, where each dish is meticulously crafted to transport your senses to new and uncharted realms of gastronomy. Guided by a passion for excellence and an unwavering commitment to culinary innovation, 'The Yarzo' promises an unforgettable dining experience that will enthrall your palate, evoke emotions, and create cherished memories. Join us on this extraordinary journey as we redefine the art of fine dining and invite you to savor the magic of flavors, textures, and aromas that harmonize to tell a story of indulgence and refinement."
    container.appendChild(welcomeText);

}