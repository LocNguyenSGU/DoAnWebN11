// Lắng nghe sự kiện khi bạn nhấp vào biểu tượng giỏ hàng
const cartIcon = document.getElementById("cart-icon");
const cartDropdown = document.querySelector(".cart-dropdown");

cartIcon.addEventListener("click", () => {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";
    // danh sach gio hang
    cartItems.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.name}"
                class="cart-item-image"
            />
            <div class="cart-item-details">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                <span class="cart-item-quantity">Quantity: ${item.quantity}</span>
            </div>
        `;
        cartItemsList.appendChild(cartItem);
    });
// an/hien gio hang
    if (cartDropdown.style.display === "block") {
        cartDropdown.style.display = "none";
    } else {
        cartDropdown.style.display = "block";
    }
});

const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", function () {
    window.location.href = "cart.html";
});
