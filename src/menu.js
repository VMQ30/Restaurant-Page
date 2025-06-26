
import bgImg from "./pics/cafe-coffee.png";
import coffee from "./pics/coffee.png";

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
    menuContainer.style.overflowY = "scroll";
    content.appendChild(menuContainer);

    const menuGrid = document.createElement('div');
    menuGrid.style.display = "grid";
    menuGrid.style.gridTemplateColumns = "1fr 1fr 1fr";
    menuGrid.style.gap = "30px";
    menuGrid.style.margin = "30px";

    createButtons(menuContainer, menuGrid);

    menuContainer.appendChild(menuGrid);

    return menuContainer, menuGrid;
}

function createButtons(menuContainer, menuGrid){
    const drinksButton = document.createElement("button");
    const pastryButton = document.createElement("button");

    const buttonFormat = 'background:transparent; font-family:Cambria; transition: all ease 0.4s; cursor: pointer; border: none; font-size: 20px; margin-left: 30px; margin-top: 10px; color: white;'

    drinksButton.textContent = "Drinks";
    pastryButton.textContent = "Pastries";

    drinksButton.setAttribute("style", buttonFormat);
    pastryButton.setAttribute("style", buttonFormat);

    menuContainer.appendChild(drinksButton);
    menuContainer.appendChild(pastryButton);

    drinksButton.addEventListener("click", () =>{
        menuGrid.innerHTML = "";
        drinksButton.style.color = "rgb(83, 97, 71)";
        drinksButton.style.fontWeight = "bold";
        pastryButton.style.color = "white";
        pastryButton.style.fontWeight = "normal";

        drinksMenu(menuGrid);
    })

    pastryButton.addEventListener("click", () =>{
        menuGrid.innerHTML = "";
        
        pastryButton.style.color = "rgb(83, 97, 71)";
        pastryButton.style.fontWeight = "bold";
        drinksButton.style.color = "white";
        drinksButton.style.fontWeight = "normal";

        pastryMenu(menuGrid);
    })
}

class Drinks{
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

class Pastries extends Drinks{
    constructor(name, description, price){
        super(name, description, price);
    }
}

function drinksMenu(menuGrid){   
    const drinksArray = [
    new Drinks(
        "Daily Brew",
        "Our signature house blend — freshly ground, single-origin beans brewed to perfection. A full-bodied and aromatic cup that delivers a bold start to your day, perfect black or with a splash of milk.",
        "₱120.00"
    ),
    new Drinks(
        "Espresso Shot",
        "A rich and intense burst of flavor in every sip. Extracted from finely ground beans under high pressure, our espresso shot boasts a deep crema and robust character. Available as a single or a double shot for an extra caffeine kick.",
        "₱130.00"
    ),
    new Drinks(
        "Latte Love",
        "A smooth and creamy blend of velvety steamed milk and rich espresso, topped with hand-poured latte art. Balanced and comforting, this is the perfect drink for moments of calm and creativity.",
        "₱160.00"
    ),
    new Drinks(
        "Caramel Macchiato",
        "Layers of espresso and steamed milk come together with a luscious caramel drizzle, creating a decadent harmony of sweet and bold flavors. A delightful indulgence that’s both elegant and satisfying.",
        "₱175.00"
    ),
    new Drinks(
        "Mocha Madness",
        "For chocolate and coffee lovers alike. This drink combines rich espresso with velvety steamed milk and decadent chocolate syrup, finished with whipped cream for an irresistible treat.",
        "₱170.00"
    ),
    new Drinks(
        "Matcha Latte",
        "A modern classic made with finely ground Japanese matcha green tea and creamy milk. Its earthy, umami-rich flavor is both energizing and soothing — a healthy, mindful choice.",
        "₱160.00"
    ),
    new Drinks(
        "Chai Spice Latte",
        "A warm and fragrant blend of black tea, cinnamon, cardamom, cloves, and ginger, frothed together with milk. This spiced latte is cozy, invigorating, and perfect for a quiet afternoon.",
        "₱150.00"
    ),
    new Drinks(
        "Iced Americano",
        "A chilled, refreshing blend of bold espresso and cold water. This drink delivers a smooth, crisp flavor that’s perfect for warm days or those who love their coffee strong and straight-up.",
        "₱130.00"
    ),
    new Drinks(
        "Hot Chocolate",
        "Indulgent and comforting, our hot chocolate is made from premium Belgian chocolate melted into steamed milk. Rich, creamy, and topped with a sprinkle of cocoa — it’s warmth in a cup.",
        "₱160.00"
    )
];
    
    drinksArray.forEach((item) =>{
        const itemContainer = document.createElement("div");
        itemContainer.style.height = "65vh";
        itemContainer.style.backgroundColor = "rgba(255, 255, 255, 0.54)";
        itemContainer.style.borderRadius = "10px";
        itemContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.52)";
        itemContainer.style.padding = "10px";
        menuGrid.appendChild(itemContainer);

        const header = document.createElement("div");
        const picture = document.createElement("div");
        const desc = document.createElement("div");

        const itemName = document.createElement("h2");
        const itemPrice = document.createElement("h2");
        const itemDesc = document.createElement("p");

        itemName.innerText = item.name;
        itemPrice.innerText = item.price;
        itemDesc.innerText = item.description;

        itemPrice.style.color = "rgb(83, 97, 71)";
        itemName.style.fontSize = "36px";

        header.appendChild(itemName);
        header.appendChild(itemPrice);
        desc.appendChild(itemDesc);

        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";

        desc.style.display = "flex";
        desc.style.justifyContent = "center";
        desc.style.alignItems = "center";
        desc.style.textAlign = "justify";
        desc.style.fontSize = "17px";

        const coffeePic = document.createElement("img");
        coffeePic.src = coffee;
        picture.style.backgroundImage = `url(${coffee})`;
        picture.style.width = "20vw";
        picture.style.height = "15vw";
        picture.style.backgroundRepeat = "no-repeat";
        picture.style.backgroundSize = "cover";
        picture.style.marginTop = "30px";
        itemContainer.appendChild(header);
        itemContainer.appendChild(picture);
        itemContainer.appendChild(desc);

    });
}

function pastryMenu(menuGrid){
    const pastryArray = [
        new Pastries("Butter Croissant", "Flaky, golden layers with a buttery aroma", "₱85.00"),
        new Pastries("Chocolate Croissant", "Classic croissant with a sweet dark chocolate core", "₱100.00"),
        new Pastries("Almond Danish", "Buttery pastry topped with almond cream and sliced almonds", "₱110.00"),
        new Pastries("Cinnamon Roll", "Soft dough swirled with cinnamon sugar and drizzled with glaze", "₱120.00"),
        new Pastries("Banana Walnut Muffin", "Moist muffin packed with ripe bananas and crunchy walnuts", "₱95.00"),
        new Pastries("Blueberry Crumble Muffin", "Sweet blueberry muffin with a golden sugar crumble top", "₱95.00"),
        new Pastries("Cheesy Ensaymada", "Fluffy brioche topped with butter, sugar, and shredded cheese", "₱90.00"),
        new Pastries("Ube Cheese Roll", "Filipino-style roll with ube halaya and melty cheese", "₱100.00"),
        new Pastries("Lemon Tart", "Tangy lemon curd in a buttery tart crust", "₱115.00")
    ];

    pastryArray.forEach((item) =>{
        const itemContainer = document.createElement("div");
        itemContainer.style.height = "65vh";
        itemContainer.style.backgroundColor = "rgba(255, 255, 255, 0.54)";
        itemContainer.style.borderRadius = "10px";
        itemContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.52)";
        itemContainer.style.padding = "10px";
        menuGrid.appendChild(itemContainer);

        const header = document.createElement("div");
        const picture = document.createElement("div");
        const desc = document.createElement("div");

        const itemName = document.createElement("h2");
        const itemPrice = document.createElement("h2");
        const itemDesc = document.createElement("p");

        itemName.innerText = item.name;
        itemPrice.innerText = item.price;
        itemDesc.innerText = item.description;

        itemPrice.style.color = "rgb(83, 97, 71)";
        itemName.style.fontSize = "36px";

        header.appendChild(itemName);
        header.appendChild(itemPrice);
        desc.appendChild(itemDesc);

        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";

        desc.style.display = "flex";
        desc.style.justifyContent = "center";
        desc.style.alignItems = "center";
        desc.style.textAlign = "justify";
        desc.style.fontSize = "17px";

        const coffeePic = document.createElement("img");
        coffeePic.src = coffee;
        picture.style.backgroundImage = `url(${coffee})`;
        picture.style.width = "20vw";
        picture.style.height = "15vw";
        picture.style.backgroundRepeat = "no-repeat";
        picture.style.backgroundSize = "cover";
        picture.style.marginTop = "30px";
        itemContainer.appendChild(header);
        itemContainer.appendChild(picture);
        itemContainer.appendChild(desc);

    });
}