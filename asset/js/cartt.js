document.addEventListener("DOMContentLoaded", function () {
  const cartItems = getCartItemsFromLocalStorage();
  const cartDropdown = document.querySelector(".cart-dropdown");
  const cartItemsList = document.getElementById("cart-items-list");
  const checkoutButton = document.getElementById("checkout-button");

  checkoutButton.addEventListener("click", function () {
    // Lưu thông tin giỏ hàng vào Local Storage trước khi chuyển hướng
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.location.href = "cart.html";
  });

  // Thêm sự kiện cho nút Xóa giỏ hàng
const clearCartButton = document.getElementById("clear-cart-button");
if (clearCartButton) {
  clearCartButton.addEventListener("click", () => {
    clearCartFromLocalStorage();
    cartItems.length = 0; // Xóa tất cả các mục trong mảng cartItems
    cartItemsList.innerHTML = "";
  });
}
displayCartItems(cartItems);

  // Hàm lấy thông tin giỏ hàng từ Local Storage
  function getCartItemsFromLocalStorage() {
    const cartItemsJSON = localStorage.getItem("cart");
    return JSON.parse(cartItemsJSON) || [];
  }

  // Hàm hiển thị thông tin giỏ hàng
  function displayCartItems(cartItems) {
    console.log("Displaying cart items");
    cartItemsList.innerHTML = ""; // Xóa tất cả các mục trong danh sách giỏ hàng trước khi hiển thị
    if (cartItems.length === 0) {
      // Nếu không có sản phẩm trong giỏ hàng, hiển thị thông báo rằng giỏ hàng trống
      const emptyCartMessage = document.createElement("li");
      emptyCartMessage.textContent = "Your cart is empty.";
      cartItemsList.appendChild(emptyCartMessage);
    } else {
      // Nếu có sản phẩm trong giỏ hàng, hiển thị từng mục sản phẩm
      cartItems.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
          <div class="cart-item-details">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <span class="cart-item-quantity">Quantity: ${item.quantity}</span>
          </div>
        `;
        cartItemsList.appendChild(cartItem);
      });
    }
  }

  function toggleCartDropdown(cartItems, cartItemsList, cartDropdown) {
    cartItemsList.innerHTML = ""; // Xóa tất cả các mục trong danh sách giỏ hàng trước khi hiển thị
  
    if (cartItems.length === 0) {
      // Nếu không có sản phẩm trong giỏ hàng, hiển thị thông báo rằng giỏ hàng trống
      const emptyCartMessage = document.createElement("li");
      emptyCartMessage.textContent = "Your cart is empty.";
      cartItemsList.appendChild(emptyCartMessage);
    } else {
      // Nếu có sản phẩm trong giỏ hàng, hiển thị từng mục sản phẩm
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
  }  
  // Hàm để xóa dữ liệu giỏ hàng khỏi Local Storage
  function clearCartFromLocalStorage() {
    localStorage.removeItem("cart");
  }
});
