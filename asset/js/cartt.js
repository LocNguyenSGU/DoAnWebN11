document.addEventListener("DOMContentLoaded", function () {
  // Lấy dữ liệu từ tệp JSON và hiển thị giỏ hàng
  fetch("./asset/js/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayCartItems(cartItems, data);
    })
    .catch((error) => {
      console.error("Error loading data:", error);
    });

  const cartIcon = document.getElementById("cart-icon");
  const cartDropdown = document.querySelector(".cart-dropdown");
  const cartItemsList = document.getElementById("cart-items-list");

  cartIcon.addEventListener("click", () => {
    toggleCartDropdown(cartItems, cartItemsList, cartDropdown);
  });
  
  const checkoutButton = document.getElementById("checkout-button");
  checkoutButton.addEventListener("click", function () {
    // Lưu thông tin giỏ hàng vào Local Storage trước khi chuyển hướng
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.location.href = "cart.html";
  });
});

// Hàm lấy thông tin giỏ hàng từ Local Storage
function getCartItemsFromLocalStorage() {
  const cartItemsJSON = localStorage.getItem("cart");
  return JSON.parse(cartItemsJSON) || [];
}

// Hàm hiển thị thông tin giỏ hàng
function displayCartItems() {
  const table = document.querySelector(".cart-table tbody");
  const cartItems = getCartItemsFromLocalStorage();

  cartItems.forEach((cartItem) => {
    const row = table.insertRow(-1);
    const productCell = row.insertCell(0);
    const priceCell = row.insertCell(1);
    const quantityCell = row.insertCell(2);
    const totalCell = row.insertCell(3);

    productCell.textContent = cartItem.name;
    priceCell.textContent = `$${cartItem.price.toFixed(2)}`;
    quantityCell.textContent = cartItem.quantity;
    totalCell.textContent = `$${(cartItem.price * cartItem.quantity).toFixed(2)}`;
  });
}
document.addEventListener("DOMContentLoaded", function () {
  displayCartItems();
});

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

  // Ẩn/hiện giỏ hàng
  if (cartDropdown.style.display === "block") {
    cartDropdown.style.display = "none";
  } else {
    cartDropdown.style.display = "block";
  }
}
