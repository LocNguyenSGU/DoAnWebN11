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

//  ============= Hàm render ra giao diện sản phẩm =============
let currentProductType = "sweater";
function renderProducts() {
    const noProduct = document.querySelector(".no-product-search");
    if (noProduct) {
        noProduct.classList.add("hidden");
    }
    document.querySelector(".search-field").value = "";
    document.querySelector(".icon-delete").classList.add("hidden");
    const productListContainer = document.querySelector(".list-show-product");
    if (productListContainer) {
        productListContainer.innerHTML = "";

        listProducts.forEach((product) => {
            if (product.nature.type === currentProductType) {
                const productSection = document.createElement("section");
                productSection.classList.add("cart");

                productSection.innerHTML = `
                    <div class="wrap-img-cart">
                        <img src="${product.image}" alt="${product.name}" 
                        class="img-cart" onclick="window.location = './details.html?id=${
                            product.id
                        }' " />
                    </div>
                    <h3 class="title">${product.name}</h3>
                    <div class="row">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <div class="row-price-star">
                            <img src="./asset/img/main-star.svg" alt="Star Rating" class="star" />
                            <span class="star-num">${product.star}</span>
                        </div>
                        <button class="add-to-cart-button" onclick = "addToCart(${
                            product.id
                        })">Add to Cart</button>
                    </div>
                `;

                // Thêm sản phẩm vào danh sách sản phẩm
                productListContainer.appendChild(productSection);
            }
        });
    }
}

// ============= Gọi hàm render để hiển thị sản phẩm ============
const showShirtsButtons = document.querySelectorAll(".btn-sweater");
const showPantsButtons = document.querySelectorAll(".btn-pants");

showShirtsButtons.forEach(function (item) {
    item.addEventListener("click", function () {
        currentProductType = "sweater";
        renderProducts();
    });
});

showPantsButtons.forEach(function (item) {
    item.addEventListener("click", function () {
        currentProductType = "pants";
        renderProducts();
    });
});
// showShirtsButton.addEventListener("click", function () {
//     currentProductType = "sweater";
//     renderProducts();
// });
// showPantsButton.addEventListener("click", function () {
//     currentProductType = "pants";
//     renderProducts();
// });
renderProducts();

// ========== 2 biến toàn cục là dữ liệu data và tài khoản hiện tại đang login ==========
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
            renderProductQuantityMb()
        }
    }
}
// =========== thêm sản phẩm của mobile ===============
// hiển thị tổng số lượng sản phẩm

function renderProductQuantityMb() {
    let screenWidthNow = window.innerWidth;
    let maxWidthMobile = 767.98;
    if (screenWidthNow < maxWidthMobile) {
        let userIndex = dataUsers.findIndex((user) => user.id == login.id);
        const cartQuantity = document.querySelector(".cart-quantity");
        let totalQuantity = 0;
        dataUsers[userIndex].cartItems.forEach((item) => {
            if (item.check == 0) totalQuantity += item.quantity;
        });
        cartQuantity.textContent = totalQuantity;
    }
}
renderProductQuantityMb();

function handleDeleteCartItem(productId) {
    // Xử lý xóa sản phẩm từ giỏ hàng, cập nhật Local Storage và cập nhật giao diện
    const storedCartItems = localStorage.getItem("DataUsers");
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    const updatedCartItems = cartItems.filter(item => item.idProduct !== productId);

    localStorage.setItem("DataUsers", JSON.stringify(updatedCartItems));

    window.location.href = "cart.html";
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

// ============== hinh anh truot qua lai ===============
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;

const goToSlide = function (slide) {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
};

const nextSlide = function () {
    if (curSlide === slides.length - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
};
const prevSlide = function () {
    if (curSlide == 0) {
        curSlide = slides.length - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
};
// Nhan nut de qua lai slide
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
// Nhan ban phim mui ten de qua lai slide
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
});
// Dot
const createDots = function () {
    slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
        );
    });
};
const activateDot = function (slide) {
    document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
};
const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
};
init();
dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    }
});
const startAutoSlide = function () {
    setInterval(nextSlide, 3000);
};
startAutoSlide();

// =============== Xu li nut backToTop ======================
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
    ) {
        // Hiển thị nút khi người dùng cuộn xuống 30px
        document.querySelector(".backToTop").style.display = "block";
    } else {
        // Ẩn nút khi người dùng ở đầu trang
        document.querySelector(".backToTop").style.display = "none";
    }
}

// Xử lý khi người dùng nhấn nút "Back to Top"
document.querySelector(".backToTop").onclick = function () {
    document.body.scrollTop = 0; // Cho trình duyệt Chrome, Safari, Edge
    document.documentElement.scrollTop = 0; // Cho trình duyệt Firefox, IE
};
