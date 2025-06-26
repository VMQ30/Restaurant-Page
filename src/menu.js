import { generateHome } from "./home";
import bgImg from "./pics/cafe-coffee.png";

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

    createButtons(menuContainer);

    const menuGrid = document.createElement('div');
    menuGrid.style.display = "grid";
    menuGrid.style.gridTemplateColumns = "1fr 1fr 1fr";
    menuContainer.appendChild(menuGrid);

    

    return menuContainer;
}

function createButtons(menuContainer){
    const drinksButton = document.createElement("button");
    const pastryButton = document.createElement("button");

    const buttonFormat = `
    background:transparent; 
    font-family:Cambria; 
    transition: all ease 0.4s; 
    cursor: pointer; 
    border: none; 
    font-size: 20px;
    margin-left: 30px;
    margin-top: 10px;
    color: white;`

    drinksButton.textContent = "Drinks";
    pastryButton.textContent = "Pastries";

    drinksButton.setAttribute("style", buttonFormat);
    pastryButton.setAttribute("style", buttonFormat);
    menuContainer.appendChild(drinksButton);
    menuContainer.appendChild(pastryButton);

    drinksButton.addEventListener("click", () =>{
        drinksMenu();
        drinksButton.style.color = "rgb(83, 97, 71)";
        drinksButton.style.fontWeight = "bold";
        pastryButton.style.color = "white";
        pastryButton.style.fontWeight = "normal";
    })

    pastryButton.addEventListener("click", () =>{
        pastryMenu();
        pastryButton.style.color = "rgb(83, 97, 71)";
        pastryButton.style.fontWeight = "bold";
        drinksButton.style.color = "white";
        drinksButton.style.fontWeight = "normal";
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

function drinksMenu(){   
    const drinksArray = [
        Drinks("Daily Brew", "Freshly ground single-origin coffee, brewed hot and strong", "₱120.00"),
        Drinks("Espresso Shot", "Bold and intense, served as a single or double shot", "₱100.00 / ₱130.00"),
        Drinks("Latte Love", "Smooth espresso with creamy steamed milk and latte art", "₱160.00"),
        Drinks("Caramel Macchiato", "Espresso layered over steamed milk and drizzled with caramel", "₱175.00"),
        Drinks("Mocha Madness", "Espresso with steamed milk, chocolate syrup, and whipped cream", "₱170.00"),
        Drinks("Matcha Latte", "Japanese green tea blended with milk – earthy and comforting", "₱160.00"),
        Drinks("Chai Spice Latte", "Aromatic black tea with warm spices and frothed milk", "₱150.00"),
        Drinks("Iced Americano", "Chilled espresso diluted with cold water – bold and refreshing", "₱130.00"),
        Drinks("Hot Chocolate", "Rich Belgian chocolate melted into steamed milk", "₱160.00")
    ]
    

}

function pastryMenu(){
    const pastryArray = [
        Pastries("Butter Croissant", "Flaky, golden layers with a buttery aroma", "₱85.00"),
        Pastries("Chocolate Croissant", "Classic croissant with a sweet dark chocolate core", "₱100.00"),
        Pastries("Almond Danish", "Buttery pastry topped with almond cream and sliced almonds", "₱110.00"),
        Pastries("Cinnamon Roll", "Soft dough swirled with cinnamon sugar and drizzled with glaze", "₱120.00"),
        Pastries("Banana Walnut Muffin", "Moist muffin packed with ripe bananas and crunchy walnuts", "₱95.00"),
        Pastries("Blueberry Crumble Muffin", "Sweet blueberry muffin with a golden sugar crumble top", "₱95.00"),
        Pastries("Cheesy Ensaymada", "Fluffy brioche topped with butter, sugar, and shredded cheese", "₱90.00"),
        Pastries("Ube Cheese Roll", "Filipino-style roll with ube halaya and melty cheese", "₱100.00"),
        Pastries("Lemon Tart", "Tangy lemon curd in a buttery tart crust", "₱115.00")
    ];
}