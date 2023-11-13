document.addEventListener("DOMContentLoaded", function () {
    const cartItemsList = document.querySelector(".main-left__product");
    const priceTotalElement = document.getElementById("price-total");

    function displayCartItems(cartItems) {
        console.log(cartItems);
        cartItemsList.innerHTML = "";

        cartItems.forEach((item) => {
            const productDiv = createProductDiv(item);
            cartItemsList.appendChild(productDiv);
        });
    }

    function createProductDiv(cartItem) {
        console.log("Creating Product Div: ", cartItem);
        const productDiv = document.createElement("div");
        productDiv.classList.add("main-product");

        const productContent = `
            <img src="${cartItem.image}" alt="" class="product-image">
            <div class="information-product">
                <div class="product-details">
                    <h2 class="product-title">${cartItem.nameProduct}</h2>
                    <div class="data">
                        <div class="amount-action">
                            <button class="up-and-down" data-action="decrement"> - </button>
                            <div class="amount" id="quantity-${cartItem.idProduct}"> ${cartItem.quantity} </div>
                            <button class="up-and-down" data-action="increment"> + </button>
                        </div>
                    </div>
                </div>
                <div class="product-price">$${(cartItem.price).toFixed(2)}</div>
                <button type="button" class="delete-button" onclick="handleDeleteCartItem(${cartItem.idProduct})">Delete</button>
            </div>
        `;

        productDiv.innerHTML = productContent;
        const incrementButton = productDiv.querySelector('[data-action="increment"]');
        const decrementButton = productDiv.querySelector('[data-action="decrement"]');

        incrementButton.addEventListener("click", () => updateQuantity(cartItem.idProduct, 1));
        decrementButton.addEventListener("click", () => updateQuantity(cartItem.idProduct, -1));
        return productDiv;
    }

    function updateQuantity(productId, quantityChange) {
        const storedDataUsers = localStorage.getItem("DataUsers");
        const dataUsers = storedDataUsers ? JSON.parse(storedDataUsers) : [];

        const user = dataUsers[1];
        const updatedCartItems = user.cartItems.map(item => {
            if (item.idProduct === productId) {
                const newQuantity = item.quantity + quantityChange;
                item.quantity = Math.max(newQuantity, 1);
            }
            return item;
        });

        user.cartItems = updatedCartItems;

        localStorage.setItem("DataUsers", JSON.stringify(dataUsers));

        displayCartItems(updatedCartItems);
        updateCartSummary(updatedCartItems);
    }

    document.querySelectorAll(".up-and-down").forEach(function (button) {
        button.addEventListener("click", function () {
            const productId = button.getAttribute("data-product-id");
            const quantityChange = parseInt(button.getAttribute("data-quantity-change"));
            updateQuantity(productId, quantityChange);
        });
    });

    function updateCartSummary(cartItems) {
        const totalPrice = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        const shippingCost = 10;
        const totalPriceWithShipping = totalPrice + shippingCost;

        priceTotalElement.textContent = `$${totalPriceWithShipping.toFixed(2)}`;
    }

    const storedDataUsers = localStorage.getItem("DataUsers");
    const dataUsers = storedDataUsers ? JSON.parse(storedDataUsers) : [];

    const user = dataUsers[1];
    const cartItems = user.cartItems || [];

    displayCartItems(cartItems);
    updateCartSummary(cartItems);
});
