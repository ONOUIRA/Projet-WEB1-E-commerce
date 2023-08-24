const cartItems = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const totalElement = document.getElementById("total");

let cart = []; // Tableau pour stocker les articles du panier

// Ajouter un article au panier
function addItemToCart(itemName, price) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <span>${itemName}</span>
        <span>${price} TND</span>
        <button class="remove-btn">Supprimer</button>
    `;
    cartItems.appendChild(cartItem);
    
    // Ajouter l'article au tableau du panier
    cart.push({ itemName, price });
    
    // Mettre à jour le total
    updateTotal();
}

// Supprimer un article du panier
function removeItemFromCart(item) {
    const index = Array.from(cartItems.children).indexOf(item);
    cart.splice(index, 1); // Supprimer l'article du tableau
    cartItems.removeChild(item);
    
    // Mettre à jour le total
    updateTotal();
}

// Mettre à jour le total
function updateTotal() {
    let total = 0;
    for (const item of cart) {
        total += item.price;
    }
    totalElement.textContent = `Total: ${total} TND`;
}

// Gestionnaire d'événement pour le bouton "Supprimer"
cartItems.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const cartItem = event.target.parentElement;
        removeItemFromCart(cartItem);
    }
});


const cartCounter = document.querySelector(".cart-counter");
let cartItemCount = 0; // Initialiser le compteur à 0

// Fonction pour ajouter un produit au panier
function addToCart(productName, price) {
    // Logique pour ajouter au panier (voir votre code existant)
    // ...

    // Mettre à jour le compteur
    cartItemCount++;
    updateCartCounter();
}

// Fonction pour mettre à jour le compteur
function updateCartCounter() {
    cartCounter.textContent = cartItemCount;
}

// Ajouter d'autres fonctionnalités liées aux "Nouveautés"
// ...
