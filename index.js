const menuData = {
  appetizers: [
    {
      name: "Crispy Calamari",
      description: "Golden-fried calamari with zesty marinara sauce",
      price: "₦8,000.99",
      image:
        "https://img.freepik.com/free-photo/fried-squid-calamari-rings_1339-4720.jpg?t=st=1743161732~exp=1743165332~hmac=4f9c701ac08d735d0f48bdb58d9177fe268060092fe607e1ba2d7ae0a1d8667a&w=900",
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
      price: "₦7,000.50",
      image:
        "https://img.freepik.com/free-photo/slices-bruschetta-basil-leaf_23-2148698648.jpg?t=st=1743161785~exp=1743165385~hmac=3538db32a5f0ea0827d4027438db5056b35d46ae3db33d643081a775b486f7e6&w=740",
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
  "shawarma-and-the-likes": [
    {
      name: "Chicken Shawarma",
      description:
        "Grilled chicken wrapped in pita with garlic sauce and veggies",
      price: "₦5,500.99",
      image:
        "https://img.freepik.com/free-photo/shawarma-wrap-with-chicken-vegetables-dark-background_2829-10748.jpg?w=900",
      ingredients: [
        "Marinated chicken",
        "Pita bread",
        "Garlic sauce",
        "Cabbage",
        "Tomatoes",
        "Cucumber",
        "Pickles",
        "Paprika",
      ],
      preparation:
        "Juicy marinated chicken is grilled and wrapped in soft pita bread with fresh veggies and creamy garlic sauce.",
    },
    {
      name: "Beef Shawarma",
      description: "Sliced beef in a warm pita with tahini sauce and pickles",
      price: "₦6,000.99",
      image:
        "https://img.freepik.com/free-photo/beef-shawarma-wrap-served-with-tahini_123827-21273.jpg?w=900",
      ingredients: [
        "Marinated beef",
        "Pita bread",
        "Tahini sauce",
        "Lettuce",
        "Onions",
        "Tomatoes",
        "Pickles",
        "Cumin",
      ],
      preparation:
        "Thinly sliced beef is grilled to perfection, then wrapped in a pita with a creamy tahini sauce and fresh vegetables.",
    },
    {
      name: "Falafel Wrap",
      description: "Crispy falafel balls with hummus and fresh veggies in pita",
      price: "₦5,000.99",
      image:
        "https://img.freepik.com/free-photo/falafel-wrap-with-lettuce-hummus-dark-background_2829-11997.jpg?w=900",
      ingredients: [
        "Chickpeas",
        "Garlic",
        "Cumin",
        "Coriander",
        "Pita bread",
        "Hummus",
        "Tomatoes",
        "Lettuce",
        "Cucumber",
      ],
      preparation:
        "Golden-fried falafel balls are wrapped in a warm pita with creamy hummus and fresh veggies for a delicious vegetarian delight.",
    },
  ],
  "main-course": [
    {
      name: "Grilled Salmon",
      description: "Atlantic salmon with herb crust and seasonal vegetables",
      price: "₦2,200.99",
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
      price: "₦1,800.50",
      image:
        "https://img.freepik.com/free-photo/risotto-with-asparagus-beans-zucchini-green-peas_2829-11776.jpg?t=st=1743161639~exp=1743165239~hmac=a797b9adc073398809cbea526629593d58012dc00cb5119e4120be1aef91988f&w=996",
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
      price: "₦9,000.99",
      image:
        "https://img.freepik.com/free-photo/front-view-delicious-chocolate-cakes-with-fresh-red-strawberries-light-white-surface-chocolate-sugar-biscuit-sweet-cake-bake-cookies_140725-52845.jpg?t=st=1743161493~exp=1743165093~hmac=a94babf205abfdb4c2b08fd74bdb0cbcf24694db152b57260788f06b652aef1a&w=996",
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
      price: "₦7,000.99",
      image:
        "https://img.freepik.com/free-photo/tasty-homemade-tiramisu-cake_114579-85350.jpg?t=st=1743161552~exp=1743165152~hmac=022fbdccbcfdf4d89896e57f0147879a6a6d1d9f969954de7008d32b4a75d5f4&w=996",
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
      price: "₦11,200.50",
      image:
        "https://img.freepik.com/free-photo/close-up-pink-cocktail-placed-glass-with-ice-dark-basil-leaves_141793-2047.jpg?t=st=1743161431~exp=1743165031~hmac=e3ca1031c3a2d6a30d604561c7d7cfae3752d5bb2bf5432d2cb524748d3fc18c&w=740",
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
      price: "₦6000.99",
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
