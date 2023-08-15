export function showMenu() {
    const container = document.getElementById("content");

    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id","menu");
    container.appendChild(menuContainer);

    const appetizerHeader = document.createElement("h2");
    appetizerHeader.innerText = 
    "Appetizers:";
    const appetizer = document.createElement("div");
    appetizer.innerText = 
    "Seared Scallops with Citrus Reduction - $28.95 \n Truffle and Wild Mushroom Risotto - $24.50 \n Smoked Salmon Tartare with Avocado and Pomegranate Mousse - $26.75"

    const entreesHeader = document.createElement("h2");
    entreesHeader.innerText = 
    "Entrees:";
    const entrees = document.createElement("div");
    entrees.innerText = 
    "Grilled Filet Mignon with Red Wine Demi-Glace - $54.95 \n Pan-seared Sea Bass with Herb Butter and Lemongrass - $48.50 \n Vegetable Napoleon with Aged Balsamic Glaze - $42.25"

    const dessertsHeader = document.createElement("h2");
    dessertsHeader.innerText =
    "Desserts:"
    const desserts = document.createElement("div");
    desserts.innerText =
    "Chocolate Decadence Cake with Raspberry Coulis - $18.95 \n Vanilla Bean Crème Brûlée - $16.75 \n Exotic Fruit Platter with Honey Drizzle - $14.50"


    menuContainer.appendChild(appetizerHeader);
    menuContainer.appendChild(appetizer);
    menuContainer.appendChild(entreesHeader);
    menuContainer.appendChild(entrees);
    menuContainer.appendChild(dessertsHeader);
    menuContainer.appendChild(desserts);
}