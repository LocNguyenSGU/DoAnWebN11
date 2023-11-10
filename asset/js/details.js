let listProducts = localStorage.getItem("listProducts")
    ? JSON.parse(localStorage.getItem("listProducts"))
    : [
          {
              id: 1,
              name: "sweater PEWARN",
              price: 20.99,
              image: "./asset/img/product-sweater/sweater-101.jpg",
              star: "4.5",
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "sweater",
              },
          },
          {
              id: 2,
              name: "sweater PEASE STAR",
              price: 39.99,
              image: "./asset/img/product-sweater/sweater-102.jpg",
              star: "5",
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "sweater",
              },
          },
          {
              id: 3,
              name: "Áo thun",
              price: 20.99,
              image: "./asset/img/product-sweater/sweater-103.jpg",
              star: "4.9",
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "sweater",
              },
          },
          {
              id: 4,
              name: "Áo thun",
              price: 20.99,
              image: "./asset/img/product-sweater/sweater-104.jpg",
              star: "4.8",
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "sweater",
              },
          },
          {
              id: 5,
              name: "Áo thun",
              price: 20.99,
              image: "./asset/img/product-sweater/sweater-105.jpg",
              star: "4.3",
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "sweater",
              },
          },
          {
              id: 6,
              name: "Áo thun",
              price: 20.99,
              image: "./asset/img/product-sweater/sweater-106.jpg",
              star: "4.3",
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "sweater",
              },
          },
          {
              id: 7,
              name: "Áo thun",
              price: 20.99,
              image: "./asset/img/product-sweater/sweater-107.jpg",
              star: "4.3",
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "sweater",
              },
          },
          {
              id: 8,
              name: "Áo thun",
              price: 20.99,
              image: "./asset/img/product-sweater/sweater-101.jpg",
              star: "4.3",
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "sweater",
              },
          },
          {
              id: 9,
              name: "Áo khoac",
              price: 20.99,
              image: "./asset/img/product-sweater/sweater-101.jpg",
              star: "4.3",
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "sweater",
              },
          },
          {
              id: 10,
              name: "Quần jean J1",
              price: 39.99,
              image: "./asset/img/product-pants/pants-201.jpg",
              star: 4.2,
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "pants",
              },
          },
          {
              id: 11,
              name: "Quần jean J1",
              price: 39.99,
              image: "./asset/img/product-pants/pants-203.jpg",
              star: 4.2,
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "pants",
              },
          },
          {
              id: 12,
              name: "Quần jean J1",
              price: 39.99,
              image: "./asset/img/product-pants/pants-204.jpg",
              star: 4.2,
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "pants",
              },
          },
          {
              id: 13,
              name: "Quần jean J1",
              price: 39.99,
              image: "./asset/img/product-pants/pants-205.jpg",
              star: 4.2,
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "pants",
              },
          },
          {
              id: 14,
              name: "Quần jean J1",
              price: 39.99,
              image: "./asset/img/product-pants/pants-206.jpg",
              star: 4.2,
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "pants",
              },
          },
          {
              id: 15,
              name: "Quần jean J1",
              price: 39.99,
              image: "./asset/img/product-pants/pants-207.jpg",
              star: 4.2,
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "pants",
              },
          },
          {
              id: 16,
              name: "Quần jean J1",
              price: 39.99,
              image: "./asset/img/product-pants/pants-208.jpg",
              star: 4.2,
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "pants",
              },
          },
          {
              id: 17,
              name: "Quần jean J1",
              price: 39.99,
              image: "./asset/img/product-pants/pants-209.jpg",
              star: 4.2,
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "pants",
              },
          },
      ];

    // Lấy ID sản phẩm từ URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    return parseInt(productId); // Chuyển đổi thành số nguyên
}

// Tìm sản phẩm dựa trên ID
function findProductById(productId) {
    return listProducts.find(product => product.id === productId);
}
document.addEventListener("DOMContentLoaded", displayProduct);

// Hiển thị thông tin sản phẩm
function displayProductDetails(product) {
    if (product) {
    const productTitle = document.querySelector(".heading");
    const productPrice = document.querySelector(".card .body-card .heading");
    const productImage = document.querySelector(".product-image");
    const productReviews = document.querySelector(".row-review .title");
    const addToCartButton=document.querySelector(".add-to-cart-button");
    // const addToCart=document.querySelector(".addToCart2");
    
    productTitle.textContent = product.name;
    productPrice.textContent = "$" + product.price.toFixed(2);
    productImage.src = product.image;
    productReviews.textContent = `(${product.star}) 1100 reviews`;

    if (addToCartButton) {
        addToCartButton.onclick = function () {
            addToCart(product.id); // Assuming product.id is the unique identifier for the product
        };
    } 
    } else {
        console.error("Sản phẩm không tồn tại");
 }
}

// Hàm chính để hiển thị chi tiết sản phẩm
function displayProduct() {
    const productId = getProductIdFromURL();
    const product = findProductById(productId);
    displayProductDetails(product);  
}

// Gọi hàm để hiển thị sản phẩm khi trang được tải
document.addEventListener("DOMContentLoaded", displayProduct);





let dataUsers = JSON.parse(localStorage.getItem("DataUsers"));
let login = JSON.parse(localStorage.getItem("loginUser"));

// =========== Thêm sản phẩm vào giỏ hàng =============
function addToCart(productId) {
    if (!login) {
        alert("Bạn phải đăng nhập để mua hàng");
        //sau đó hiện hộp thoại đăng nhập
        Object.assign(document.querySelector(".loginBackground").style, {
            visibility: "visible",
            "animation-name": "backgroundeffect1",
        });
        Object.assign(document.querySelector(".loginBlock").style, {
            display: "block",
        });
        return;
    }
    let userIndex = dataUsers.findIndex((user) => user.id == login.id);

    if (userIndex !== -1) {
        let productToAdd = listProducts.find(
            (product) => product.id == productId
        );

        if (productToAdd) {
            const existingCartItemIndex = dataUsers[
                userIndex
            ].cartItems.findIndex((item) => item.idProduct == productId);

            if (
                existingCartItemIndex !== -1 &&
                dataUsers[userIndex].cartItems[existingCartItemIndex].check == 0
            ) {
                dataUsers[userIndex].cartItems[existingCartItemIndex]
                    .quantity++;
            } else {
                let cartItem = {
                    idProduct: productToAdd.id,
                    nameProduct: productToAdd.name,
                    price: productToAdd.price,
                    image: productToAdd.image,
                    quantity: 1,
                    check: 0,
                    time: new Date(),
                };
                dataUsers[userIndex].cartItems.push(cartItem);
            }
            localStorage.setItem("DataUsers", JSON.stringify(dataUsers));
            renderCartUI();
        }
    }
}

// ============ render UI layout Cart ==============
function renderCartUI() {
    const noProduct = document.querySelector(".no-product");
    const haveProduct = document.querySelector(".have-product");
    // const listPreview = document.querySelector(".list-preview");
    if (!login) {
        return;
    }
    let userIndex = dataUsers.findIndex((user) => user.id === login.id);
    if (dataUsers[userIndex].cartItems.length > 0) {
        renderImageCart(dataUsers[userIndex].cartItems);
        renderNumberCart(dataUsers[userIndex].cartItems);
        // noProduct.classList.add("hidden");
        // haveProduct.classList.remove("hidden");
        // listPreview.style.width = "500px";
        // listPreview.style.top = "67px";
        // listPreview.style.left = "-372px";
    } else {
        noProduct.classList.remove("hidden");
        haveProduct.classList.add("hidden");
    }
}
renderCartUI();

// ============ render UI Cart về hình ảnh ============
function renderImageCart(cartItems) {
    const cartItemsList = document.querySelector(".row-2");
    const noProduct = document.querySelector(".no-product");
    const haveProduct = document.querySelector(".have-product");
    const listPreview = document.querySelector(".list-preview");
    cartItemsList.innerHTML = "";

    let itemCount = 1;

    cartItems.forEach((item) => {
        if (itemCount <= 3 && item.check == 0) {
            const cartItem = document.createElement("div");
            cartItem.className = "block-each-preview";
            cartItem.innerHTML = `
                <img src="${item.image}" alt="" class="img-preview">
                <h2 class="title">${item.nameProduct}</h2>
                <span class="price">$${(item.price * item.quantity).toFixed(
                    2
                )}</span>
                <span class="quantity">x ${item.quantity}</span>
            `;
            cartItemsList.appendChild(cartItem);
            itemCount++;
            noProduct.classList.add("hidden");
            haveProduct.classList.remove("hidden");
            listPreview.style.width = "500px";
            listPreview.style.top = "67px";
            listPreview.style.left = "-372px";
        }
    });
}

// ============ render UI Cart về số liệu =============
function renderNumberCart(cartItems) {
    const cartQuantity = document.querySelector(".you-have"); // Số lượng sản phẩm trong giỏ hàng
    const cartTotal = document.querySelector("#price-total"); // Tổng giá trị cuối cùng
    const subtotal = document.querySelector(".price-subtotal"); // Tổng giá trị trước khi tính phí vận chuyển
    const shipping = document.querySelector(".price-shipping"); // Phí vận chuyển
    const feeTotal = document.querySelector(".price-buy-cart"); // Tổng giá trị cuối cùng trong giỏ hàng

    let totalQuantity = 0; // Tổng số lượng tất cả sản phẩm
    let totalPrice = 0; // Tổng giá tiền tất cả sản phẩm
    let shippingPrice = 10; // Giá vận chuyển cho mỗi sản phẩm

    cartItems.forEach((item) => {
        if (item.check == 0) {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        }
    });

    cartQuantity.textContent = `You have ${totalQuantity} item`;
    subtotal.textContent = `$${totalPrice.toFixed(2)}`;
    shipping.textContent = `$${shippingPrice * totalQuantity}`;
    cartTotal.textContent = `$${(
        totalPrice +
        shippingPrice * totalQuantity
    ).toFixed(2)}`;
    feeTotal.textContent = cartTotal.textContent;
}

// ============ render tên người dùng khi đăng nhập ===============
function renderName() {
    const name = document.querySelector(".hello-name");
    if (login) {
        name.textContent = login.name;
    }
}
renderName();