document.addEventListener("DOMContentLoaded", function () {

    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const productId = button.getAttribute("data-product-id");
        const productName = button.getAttribute("data-product-name");
        const productPrice = parseFloat(button.getAttribute("data-product-price"));
  
        // Thêm sản phẩm vào giỏ hàng
        addToCart(productId, productName, productPrice);
      });
    });
  
    // Hàm thêm sản phẩm vào giỏ hàng
    function addToCart(id, name, price) {
      // Tạo một sản phẩm mới
      const product = {
        id: id,
        name: name, 
        price: price,
      };
  
      // Thêm sản phẩm vào danh sách giỏ hàng
      cartItems.push(product);
  
      // Cập nhật giao diện người dùng
      updateCartUI();
  
      // Tính tổng tiền và cập nhật tổng tiền
      calculateTotal();
    }
  
    // Hàm cập nhật giao diện giỏ hàng
    function updateCartUI() {
      const cartList = document.querySelector(".cart-items");
      cartList.innerHTML = "";
  
      cartItems.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
      });
    }
  
    // Hàm tính tổng tiền và cập nhật tổng tiền
    function calculateTotal() {
      const cartTotalElement = document.querySelector(".cart-total");
      const total = cartItems.reduce(function (acc, item) {
        return acc + item.price;
      }, 0);
  
      cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }
  
    // Danh sách sản phẩm trong giỏ hàng
    const cartItems = [];
  });
  