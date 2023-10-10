document.addEventListener("DOMContentLoaded", function () {
  // const cartItems = getCartItemsFromLocalStorage();
  console.log(localStorage.getItem("cart"),"123123");
  const cartIcon = document.getElementById("cart-icon");
  const cartDropdown = document.querySelector(".cart-dropdown");
  const cartItemsList = document.getElementById("cart-items-list");

  cartIcon.addEventListener("click", () => {
    toggleCartDropdown(cartItems, cartItemsList, cartDropdown);
    // Ẩn/hiện giỏ hàng ở đây
    if (cartDropdown.style.display === "block") {
      cartDropdown.style.display = "none";
    } else {
      cartDropdown.style.display = "block";
    }
  });

  const checkoutButton = document.getElementById("checkout-button");
  checkoutButton.addEventListener("click", function () {
    // Lưu thông tin giỏ hàng vào Local Storage trước khi chuyển hướng
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(localStorage.getItem(cartDropdown)); 
    window.location.href = "cart.html";
  });

  // Thêm sự kiện cho nút Xóa giỏ hàng
  const clearCartButton = document.getElementById("clear-cart-button");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", () => {
      clearCartFromLocalStorage();
    });
  }

  // Hàm lấy thông tin giỏ hàng từ Local Storage
  function getCartItemsFromLocalStorage() {
    const cartItemsJSON = localStorage.getItem("cart");
    console.log(cartItemsJSON);
    return JSON.parse(cartItemsJSON) || [];
  }

  // Hàm hiển thị thông tin giỏ hàng
  function displayCartItems(cartItems, data) {
    console.log("Displaying cart items"); // Kiểm tra xem hàm này đã được gọi hay chưa
    const table = document.querySelector(".cart-table tbody");

    cartItems.forEach((cartItem) => {
      const row = table.insertRow(-1);
      const productCell = row.insertCell(0);
      const priceCell = row.insertCell(1);
      const quantityCell = row.insertCell(2);
      const totalCell = row.insertCell(3);
      const productImage = document.createElement("img");

      productImage.src = cartItem.image; 
      productImage.alt = cartItem.name;

      productCell.appendChild(productImage);

      priceCell.textContent = `$${cartItem.price.toFixed(2)}`;
      quantityCell.textContent = cartItem.quantity;
      totalCell.textContent = `$${(cartItem.price * cartItem.quantity).toFixed(2)}`;
    });
  }

  function toggleCartDropdown(cartItems, cartItemsList, cartDropdown) {
    cartItemsList.innerHTML = "";

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
  }
  // Hàm để xóa dữ liệu giỏ hàng khỏi Local Storage
  function clearCartFromLocalStorage() {
    localStorage.removeItem("cart");
  }
});
