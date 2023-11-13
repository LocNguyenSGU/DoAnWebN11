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
            <div class="product-price">$${(
                cartItem.price * cartItem.quantity
            ).toFixed(2)}</div>
            <div class="product-quantity">x ${cartItem.quantity}</div>
          </div>
        </div>
        <button class="delete-button" onclick="handleDeleteCartItem(${
            cartItem.idProduct
        })">Delete</button>  
      </div>
    `;

        productDiv.innerHTML = productContent;

        return productDiv;
    }

    function updateCartSummary(cartItems) {
        const totalPrice = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        const shippingCost = 10;
        const totalPriceWithShipping = totalPrice + shippingCost;

        priceTotalElement.textContent = `$${totalPriceWithShipping.toFixed(2)}`;
    }

    // Lấy dữ liệu người dùng từ localStorage
    const storedDataUsers = localStorage.getItem("DataUsers");
    const dataUsers = storedDataUsers ? JSON.parse(storedDataUsers) : [];

    // Lấy giỏ hàng từ dataUsers
    const user = dataUsers[1]; // Chọn người dùng cụ thể, ví dụ: index 1
    const cartItems = user.cartItems || [];

    displayCartItems(cartItems);
    updateCartSummary(cartItems);
});
