document.addEventListener("DOMContentLoaded", function () {
  const cartItemsList = document.querySelector(".main-left__product .main-product");
  const cartItemCountElement = document.getElementById("cart-item-count");
  const priceTotalElement = document.getElementById("price-total");
  
  function displayCartItems(cartItems) {
    // cartItemsList.innerHTML = ""; 

    cartItems.forEach((cartItem) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("main-product");

      const image = document.createElement("img");
      image.classList.add("image");
      image.src = cartItem.image;
      image.alt = cartItem.name;

      const infoProductDiv = document.createElement("div");
      infoProductDiv.classList.add("info-product");

      const infoTitleDiv = document.createElement("div");
      infoTitleDiv.classList.add("info-product__title");

      const titleHeading = document.createElement("h3");
      titleHeading.classList.add("heading");
      titleHeading.textContent = cartItem.name;

      const priceDiv = document.createElement("div");
      priceDiv.classList.add("price");
      priceDiv.textContent = `$${cartItem.price.toFixed(2)}`;

      const infoActionDiv = document.createElement("div");
      infoActionDiv.classList.add("info-product__action");

      const amountActionDiv = document.createElement("div");
      amountActionDiv.classList.add("amount-aciton");

      const decreaseButton = document.createElement("button");
      decreaseButton.classList.add("up-and-down");
      decreaseButton.textContent = "-";
      decreaseButton.addEventListener("click", () => handleQuantityChange(cartItem, -1));

      const amountDiv = document.createElement("div");
      amountDiv.classList.add("amount");
      amountDiv.textContent = cartItem.quantity;

      const increaseButton = document.createElement("button");
      increaseButton.classList.add("up-and-down");
      increaseButton.textContent = "+";
      increaseButton.addEventListener("click", () => handleQuantityChange(cartItem, 1));

      const deleteActionDiv = document.createElement("div");
      deleteActionDiv.classList.add("delete-action");

      const deleteLink = document.createElement("a");
      deleteLink.addEventListener("click", () => handleDeleteCartItem(cartItem));

      const deleteImage = document.createElement("img");
      deleteImage.src = "./asset/img/Delete.svg";
      deleteImage.alt = "Delete";

      const deleteTitle = document.createElement("div");
      deleteTitle.classList.add("title");
      deleteTitle.textContent = "Delete";

      // Append elements to their parent containers
      deleteLink.appendChild(deleteImage);
      deleteActionDiv.appendChild(deleteLink);

      amountActionDiv.appendChild(decreaseButton);
      amountActionDiv.appendChild(amountDiv);
      amountActionDiv.appendChild(increaseButton);

      infoTitleDiv.appendChild(titleHeading);
      infoTitleDiv.appendChild(priceDiv);

      infoActionDiv.appendChild(amountActionDiv);
      infoActionDiv.appendChild(deleteActionDiv);

      infoProductDiv.appendChild(infoTitleDiv);
      infoProductDiv.appendChild(infoActionDiv);

      productDiv.appendChild(image);
      productDiv.appendChild(infoProductDiv);

      cartItemsList.appendChild(productDiv);
    });
  }

  function handleQuantityChange(cartItem, amount) {
    cartItem.quantity += amount;
    if (cartItem.quantity < 1) {
      // If the quantity becomes less than 1, remove the item
      cartItems.splice(cartItems.indexOf(cartItem), 1);
    }
    updateCart();
  }

  function handleDeleteCartItem(cartItem) {
    cartItems.splice(cartItems.indexOf(cartItem), 1);
    updateCart();
  }

  function updateCart() {
    displayCartItems(cartItems);
    updateCartInLocalStorage(cartItems);
    updateCartSummary();
  }

  function clearCartFromLocalStorage() {
    localStorage.removeItem("cartItems");
  }

  function updateCartInLocalStorage(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  function getCartItemsFromLocalStorage() {
    const cartItemsJSON = localStorage.getItem("cartItems");
    return JSON.parse(cartItemsJSON) || [];
  }

  const cartItems = getCartItemsFromLocalStorage();

  // Hiển thị thông tin giỏ hàng trên trang cart.html
  displayCartItems(cartItems);

  function updateCartSummary() {
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingCost = 10; 
    const totalPriceWithShipping = totalPrice + shippingCost;

    cartItemCountElement.textContent = itemCount;
    priceTotalElement.textContent = `$${totalPriceWithShipping.toFixed(2)}`;
  }

  updateCartSummary();

  const checkoutButton = document.getElementById("checkout-button");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", function () {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      window.location.href = "cart.html";
    });
  }

  const continueShoppingLink = document.querySelector(".continue a");
  if (continueShoppingLink) {
    continueShoppingLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "./index.html";
    });
  }
});