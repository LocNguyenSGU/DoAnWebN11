document.addEventListener("DOMContentLoaded", function () {
  const cartItemsList = document.getElementById("cart-items");
  const cartItems = getCartItemsFromLocalStorage();

  const checkoutButton = document.getElementById("checkout-button");

  function getCartItemsFromLocalStorage() {
    const cartItemsJSON = localStorage.getItem("cart");
    console.log(cartItemsJSON);
    return JSON.parse(cartItemsJSON) || [];
  }

  displayCartItems(cartItems);

  if (checkoutButton) {
    checkoutButton.addEventListener("click", function () {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      window.location.href = "cart.html";
    });
  }

  // const clearCartButton = document.getElementById("clear-cart-button");
  // if (clearCartButton) {
  //   clearCartButton.addEventListener("click", () => {
  //     clearCartFromLocalStorage();
  //     cartItems.length = 0;
  //     cartItemsList.innerHTML = "";
  //     updateCartItemsInLocalStorage(cartItems); // Thêm hàm này để cập nhật cartItems trong Local Storage
  //   });
  // }

  function displayCartItems(cartItems) {
    if (cartItemsList) {
      cartItemsList.innerHTML = "";
      cartItems.forEach((cartItem) => {
        const row = document.createElement("tr");
        const imageCell = document.createElement("td");
        const productCell = document.createElement("td");
        const priceCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const totalCell = document.createElement("td");
  
        const productImage = document.createElement("img");
        productImage.src = cartItem.image;
        productImage.alt = cartItem.name;
  
        imageCell.appendChild(productImage);
        productCell.textContent = cartItem.name;
        priceCell.textContent = `$${cartItem.price.toFixed(2)}`;
        quantityCell.textContent = cartItem.quantity;
        totalCell.textContent = `$${(cartItem.price * cartItem.quantity).toFixed(2)}`;
  
        row.appendChild(imageCell);
        row.appendChild(productCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);
        row.appendChild(totalCell);
  
        cartItemsList.appendChild(row);
      });
    }
  }
});