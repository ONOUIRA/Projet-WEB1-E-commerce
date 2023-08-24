const productContainer = document.getElementById("product-list");
document.addEventListener("DOMContentLoaded", function() {
    const cartCounter = document.querySelector(".cart-counter");
    // Reste du code...
});

// Fonction pour ajouter un produit au panier
function addToCart(productName, price) {
    // Vous pouvez réutiliser la même logique que dans la page "Panier"
    // pour ajouter l'article au panier (utilisation d'un tableau, etc.)
}

// Gestionnaire d'événement pour les boutons "Ajouter au panier"
productContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart-btn")) {
        const product = event.target.closest(".product");
        const productName = product.querySelector("h2").textContent;
        const price = parseFloat(product.querySelector("p").textContent);
        addToCart(productName, price);
    }
});

// Vous pouvez également ajouter ici d'autres fonctionnalités liées aux "Nouveautés"
// Exemple de correction pour "script.js"
