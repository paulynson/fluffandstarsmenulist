// const menuData = {
//   appetizers: [
//     {
//       name: "Crispy Calamari",
//       description: "Golden-fried calamari with zesty marinara sauce",
//       price: "$8.99",
//       image:
//         "https://images.unsplash.com/photo-1576743364319-101b5f7257e5?w=500&h=500&fit=crop",
//     },
//     {
//       name: "Truffle Bruschetta",
//       description: "Toasted bread with truffle oil and fresh tomatoes",
//       price: "$7.50",
//       image:
//         "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=500&h=500&fit=crop",
//     },
//   ],
//   "main-course": [
//     {
//       name: "Grilled Salmon",
//       description: "Atlantic salmon with herb crust and seasonal vegetables",
//       price: "$22.99",
//       image:
//         "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=500&fit=crop",
//     },
//     {
//       name: "Vegetarian Risotto",
//       description: "Creamy arborio rice with wild mushrooms",
//       price: "$18.50",
//       image:
//         "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=500&h=500&fit=crop",
//     },
//   ],
//   desserts: [
//     {
//       name: "Chocolate Lava Cake",
//       description: "Warm chocolate cake with vanilla ice cream",
//       price: "$9.99",
//       image:
//         "https://images.unsplash.com/photo-1606188095970-4fe5bc3e74bd?w=500&h=500&fit=crop",
//     },
//     {
//       name: "Tiramisu",
//       description: "Classic Italian coffee-flavored dessert",
//       price: "$7.99",
//       image:
//         "https://images.unsplash.com/photo-1590841767916-2cec208a4d6d?w=500&h=500&fit=crop",
//     },
//   ],
//   beverages: [
//     {
//       name: "Craft Cocktail",
//       description: "Seasonal mixed drink with premium spirits",
//       price: "$12.50",
//       image:
//         "https://images.unsplash.com/photo-1601066525716-058a0bd36e91?w=500&h=500&fit=crop",
//     },
//     {
//       name: "Fresh Pressed Juice",
//       description: "Organic mixed fruit and vegetable juice",
//       price: "$6.99",
//       image:
//         "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&h=500&fit=crop",
//     },
//   ],
// };

// function renderMenuItems(category) {
//   const menuGrid = document.getElementById("menuGrid");
//   menuGrid.innerHTML = "";

//   menuData[category].forEach((item) => {
//     const menuItemElement = document.createElement("div");
//     menuItemElement.classList.add("menu-item");
//     menuItemElement.innerHTML = `
//             <img src="${item.image}" alt="${item.name}">
//             <div class="menu-item-details">
//                 <h3>${item.name}</h3>
//                 <p>${item.description}</p>
//                 <div class="price">${item.price}</div>
//             </div>
//         `;
//     menuGrid.appendChild(menuItemElement);
//   });
// }

// // Initial render
// renderMenuItems("appetizers");

// // Category selection
// document.getElementById("categoryList").addEventListener("click", function (e) {
//   const selectedCategory = e.target.closest("li");
//   if (selectedCategory) {
//     // Remove active class from all categories
//     this.querySelectorAll("li").forEach((li) => li.classList.remove("active"));

//     // Add active class to selected category
//     selectedCategory.classList.add("active");

//     // Render menu items for selected category
//     renderMenuItems(selectedCategory.dataset.category);
//   }
// });

const menuData = {
  appetizers: [
    {
      name: "Crispy Calamari",
      description: "Golden-fried calamari with zesty marinara sauce",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1576743364319-101b5f7257e5?w=500&h=500&fit=crop",
      ingredients: [
        "Fresh squid rings",
        "All-purpose flour",
        "Cornstarch",
        "Paprika",
        "Sea salt",
        "Black pepper",
        "Vegetable oil for frying",
        "Marinara sauce",
      ],
      preparation:
        "Calamari rings are coated in a seasoned flour mixture, deep-fried until golden and crispy, then served with a zesty marinara sauce.",
    },
    {
      name: "Truffle Bruschetta",
      description: "Toasted bread with truffle oil and fresh tomatoes",
      price: "$7.50",
      image:
        "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=500&h=500&fit=crop",
      ingredients: [
        "Artisan sourdough bread",
        "Fresh cherry tomatoes",
        "Garlic",
        "Fresh basil leaves",
        "Extra virgin olive oil",
        "White truffle oil",
        "Sea salt",
        "Freshly ground black pepper",
      ],
      preparation:
        "Sourdough bread is toasted to perfection, rubbed with garlic, topped with diced fresh tomatoes, and drizzled with truffle oil and fresh basil.",
    },
  ],
  "main-course": [
    {
      name: "Grilled Salmon",
      description: "Atlantic salmon with herb crust and seasonal vegetables",
      price: "$22.99",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=500&fit=crop",
      ingredients: [
        "Fresh Atlantic salmon fillet",
        "Fresh dill",
        "Fresh parsley",
        "Lemon zest",
        "Dijon mustard",
        "Olive oil",
        "Sea salt",
        "Black pepper",
        "Seasonal mixed vegetables",
      ],
      preparation:
        "Salmon is coated with a fresh herb crust, grilled to perfection, and served with a medley of seasonal roasted vegetables.",
    },
    {
      name: "Vegetarian Risotto",
      description: "Creamy arborio rice with wild mushrooms",
      price: "$18.50",
      image:
        "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=500&h=500&fit=crop",
      ingredients: [
        "Arborio rice",
        "Mixed wild mushrooms",
        "Vegetable broth",
        "White wine",
        "Shallots",
        "Garlic",
        "Parmesan cheese",
        "Fresh thyme",
        "Butter",
        "Olive oil",
      ],
      preparation:
        "Arborio rice is slowly cooked with vegetable broth, white wine, and a variety of wild mushrooms, finished with Parmesan cheese and fresh thyme.",
    },
  ],
  desserts: [
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with vanilla ice cream",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1606188095970-4fe5bc3e74bd?w=500&h=500&fit=crop",
      ingredients: [
        "Dark chocolate",
        "Unsalted butter",
        "Eggs",
        "Granulated sugar",
        "All-purpose flour",
        "Vanilla extract",
        "Vanilla ice cream",
        "Powdered sugar",
      ],
      preparation:
        "Rich dark chocolate cake is baked to create a warm, gooey center. Served hot with a scoop of creamy vanilla ice cream and dusted with powdered sugar.",
    },
    {
      name: "Tiramisu",
      description: "Classic Italian coffee-flavored dessert",
      price: "$7.99",
      image:
        "https://images.unsplash.com/photo-1590841767916-2cec208a4d6d?w=500&h=500&fit=crop",
      ingredients: [
        "Mascarpone cheese",
        "Heavy cream",
        "Eggs",
        "Sugar",
        "Espresso coffee",
        "Ladyfinger cookies",
        "Cocoa powder",
        "Marsala wine (optional)",
      ],
      preparation:
        "Layers of coffee-soaked ladyfinger cookies are alternated with a rich mascarpone cream, then chilled and dusted with cocoa powder for a classic Italian dessert experience.",
    },
  ],
  beverages: [
    {
      name: "Craft Cocktail",
      description: "Seasonal mixed drink with premium spirits",
      price: "$12.50",
      image:
        "https://images.unsplash.com/photo-1601066525716-058a0bd36e91?w=500&h=500&fit=crop",
      ingredients: [
        "Premium gin or vodka",
        "Fresh seasonal fruits",
        "Herb-infused simple syrup",
        "Fresh lemon or lime juice",
        "Garnish (herb sprig or fruit slice)",
        "Ice",
      ],
      preparation:
        "Our mixologists carefully craft a unique cocktail using premium spirits, fresh seasonal ingredients, and house-made herb-infused simple syrup, creating a balanced and refreshing drink.",
    },
    {
      name: "Fresh Pressed Juice",
      description: "Organic mixed fruit and vegetable juice",
      price: "$6.99",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&h=500&fit=crop",
      ingredients: [
        "Organic apples",
        "Organic carrots",
        "Fresh ginger",
        "Organic spinach",
        "Organic beets",
        "Lemon",
      ],
      preparation:
        "A vibrant blend of fresh, organic fruits and vegetables is cold-pressed to preserve maximum nutrients and flavor. Each juice is made to order, ensuring peak freshness and taste.",
    },
  ],
};

function renderMenuItems(category) {
  const menuGrid = document.getElementById("menuGrid");
  menuGrid.innerHTML = "";

  menuData[category].forEach((item) => {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("menu-item");
    menuItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
            </div>
        `;
    menuItemElement.dataset.itemName = item.name;
    menuGrid.appendChild(menuItemElement);

    // Add click event to show ingredients
    menuItemElement.addEventListener("click", () => {
      showItemIngredients(item);
    });
  });
}

function showItemIngredients(item) {
  const menuPage = document.getElementById("menuPage");
  const ingredientPage = document.getElementById("ingredientPage");
  const ingredientDetails = document.getElementById("ingredientDetails");

  // Switch pages
  menuPage.classList.remove("active");
  ingredientPage.classList.add("active");

  // Populate ingredient details
  ingredientDetails.innerHTML = `
        <h2>${item.name}</h2>
        <div class="ingredients-list">
            <h3>Ingredients</h3>
            <ul>
                ${item.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
            </ul>
        </div>
        <div class="preparation">
            <h3>Preparation</h3>
            <p>${item.preparation}</p>
        </div>
    `;
}

// Back button functionality
document.getElementById("backButton").addEventListener("click", () => {
  const menuPage = document.getElementById("menuPage");
  const ingredientPage = document.getElementById("ingredientPage");

  // Switch pages
  ingredientPage.classList.remove("active");
  menuPage.classList.add("active");
});

// Initial render
renderMenuItems("appetizers");

// Category selection
document.getElementById("categoryList").addEventListener("click", function (e) {
  const selectedCategory = e.target.closest("li");
  if (selectedCategory) {
    // Remove active class from all categories
    this.querySelectorAll("li").forEach((li) => li.classList.remove("active"));

    // Add active class to selected category
    selectedCategory.classList.add("active");

    // Render menu items for selected category
    renderMenuItems(selectedCategory.dataset.category);
  }
});
