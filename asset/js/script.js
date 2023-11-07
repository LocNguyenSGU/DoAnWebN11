let listProducts = localStorage.getItem("listProducts")
    ? JSON.parse(localStorage.getItem("listProducts"))
    : [
          {
              id: 1,
              name: "sweater PEWARN",
              price: 20.99,
              description:
                  "Korean classic loose long-sleeve PEWARN sweater for plus size men and women",
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
              description:
                  "PEASE STAR Letter Printed Felt Hoodie Jacket Korean Fashion Style that men and women wear very well",
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
              description: "Áo thun đơn giản",
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
              description: "Áo thun đơn giản",
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
              description: "Áo thun đơn giản",
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
              description: "Áo thun đơn giản",
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
              description: "Áo thun đơn giản",
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
              description: "Áo thun đơn giản",
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
              description: "Áo thun đơn giản",
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
              description: "Mô tả sản phẩm quần jean J1",
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
              description: "Mô tả sản phẩm quần jean J1",
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
              description: "Mô tả sản phẩm quần jean J1",
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
              description: "Mô tả sản phẩm quần jean J1",
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
              description: "Mô tả sản phẩm quần jean J1",
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
              description: "Mô tả sản phẩm quần jean J1",
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
              description: "Mô tả sản phẩm quần jean J1",
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
              description: "Mô tả sản phẩm quần jean J1",
              image: "./asset/img/product-pants/pants-209.jpg",
              star: 4.2,
              nature: {
                  color: ["white", "black"],
                  size: ["S", "M", "L"],
                  type: "pants",
              },
          },
      ];

console.log(listProducts); // danh sách sản phẩm từ localStorage
// localStorage.setItem("listProducts", JSON.stringify(listProducts));

document.addEventListener("DOMContentLoaded", function () {
    let currentProductType = "sweater";
    let sumSweater = 0;
    let sumPants = 0;
    listProducts.map((item) => {
        if (item.nature.type === "sweater") {
            sumSweater++;
        } else sumPants++;
    });

    function renderProducts() {
        const noProduct = document.querySelector(".no-product-search");
        noProduct.classList.add("hidden");
        document.querySelector(".search-field").value = "";

        const productListContainer =
            document.querySelector(".list-show-product");
        productListContainer.innerHTML = "";

        // let indexOffset = 0;
        // Lặp qua mảng sản phẩm và tạo phần tử HTML cho mỗi sản phẩm
        listProducts.forEach((product) => {
            if (product.nature.type === currentProductType) {
                const productSection = document.createElement("section");
                productSection.classList.add("cart");

                productSection.innerHTML = `
                    <div class="wrap-img-cart">
                        <img src="${product.image}" alt="${
                    product.name
                }" class="img-cart" />
                    </div>
                    <h3 class="title">${product.name}</h3>
                    <div class="row">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <div class="row-price-star">
                            <img src="./asset/img/main-star.svg" alt="Star Rating" class="star" />
                            <span class="star-num">${product.star}</span>
                        </div>
                        <button class="add-to-cart-button">Add to Cart</button>
                    </div>
                `;
                
                productSection.querySelector(".add-to-cart-button").addEventListener("click", () => {
                    // addToCart(listProducts[index + indexOffset]);
                    updateCartDisplay();
                  });

                // Thêm sản phẩm vào danh sách sản phẩm
                productListContainer.appendChild(productSection);
            }
        });
    }

    // Gọi hàm render để hiển thị sản phẩm
    const showShirtsButton = document.querySelector(".btn-sweater");
    const showPantsButton = document.querySelector(".btn-pants");
    showShirtsButton.addEventListener("click", function () {
        currentProductType = "sweater";
        renderProducts();
        addToCartPaints(0);
    });
    showPantsButton.addEventListener("click", function () {
        currentProductType = "pants";
        console.log(currentProductType);
        renderProducts();
        addToCartPaints(sumSweater);
    });
    renderProducts();

    // Them san pham vao gio hang thong qua mang cartItems
    const cartItems = [];

    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            addToCart(listProducts[index]);
        });
    });

    function addToCartPaints(length) {
        const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
        addToCartButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                addToCart(listProducts[index + length]);
            });
        });
    }
    // Ham de day du lieu khi an nut addToCart vao mang cartItems
    function addToCart(product) {
        const existingCartItemIndex = cartItems.findIndex(
            (item) => item.id === product.id
        );
        if (existingCartItemIndex !== -1) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
            cartItems[existingCartItemIndex].quantity++;
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
            });
        }
        updateCartDisplay();
    }

    // goi cac bien day ben ngoai vi ham updateCartDisplay, minh phai click vao addToCart thi no moi thuc thi
    const haveProduct = document.querySelector(".have-product");
    const noProduct = document.querySelector(".no-product");
    const listPreview = document.querySelector(".list-preview");

    function updateCartDisplay() {
        const cartItemsList = document.querySelector(".row-2"); // the cha dung de bao cac the con trong viec render
        const cartQuantity = document.querySelector(".you-have"); // so luong cai sp dc them vao gio hang
        const cartTotal = document.querySelector("#price-total"); // tong chi phi cuoi cung (ship + gia sp), cai nay hien khi hover vao
        const subtotal = document.querySelector(".price-subtotal"); // chi phi khi chua tinh ship
        const shipping = document.querySelector(".price-shipping"); // tien ship = so luong sp * 10$
        const feeTotal = document.querySelector(".price-buy-cart"); // tong chi phi cuoi cung (ship + gia sp), cai nay hien o sat ben gio hang

        let totalQuantity = 0;
        let totalPrice = 0;
        let shippingPrice = 10; // gia van chuyen 1 san pham

        // Render ve mat hinh anh (hinh san pham, ten, gia tien)
        const renderImageCart = function () {
            cartItemsList.innerHTML = ""; // hay thu comment lai dong nay de hieu code hon
            cartItems.forEach((item) => {
                // duyet qua tung sp
                const cartItem = document.createElement("div"); // day la cac the con ma duoc the cha bao ben ngoai
                cartItem.className = "block-each-preview"; // gan cho the con class
                cartItem.innerHTML = `
                <img src="${item.image}" alt="" class="img-preview">
                <h2 class="title">${item.name}</h2>
                <span class="price">$${(item.price * item.quantity).toFixed(
                    2
                )}</span>
                <span class="quatity">x ${item.quantity}</span>
            `;
                cartItemsList.appendChild(cartItem); // cau lenh render, co nhieu cau lenh khac nua..
            });
        }; 

        // Render ve cac so lieu
        const renderNumberCart = function () {
            cartItems.forEach((item) => {
                totalQuantity += item.quantity;
                totalPrice += item.price * item.quantity;
                cartQuantity.textContent = `You have ${totalQuantity} item`;
                subtotal.textContent = `$${totalPrice.toFixed(2)}`;
                shipping.textContent = `$${shippingPrice * totalQuantity}`;
                cartTotal.textContent = `$${(
                    totalPrice +
                    shippingPrice * totalQuantity
                ).toFixed(2)}`; // day la tong tien cuoi cung hien khi hover vao gio hang
                feeTotal.textContent = cartTotal.textContent; // tong tien cuoi cung hien ben gio hang
            });
        };

        console.log(cartItems.length); // chi hien toi da 3 san pham trong gio hang
        const row2Element = document.querySelector(
        ".header .list-preview .row-2"
        );

        if (cartItems.length >= 1 && cartItems.length <= 3) {
            renderImageCart(); // render ve mat hinh anh la toi da 3 hinh
            noProduct.classList.add("hidden"); // mac dinh la chua co san pham => khi length = 1 tuc la phai an cai chua co san pham di
            haveProduct.classList.remove("hidden");
            listPreview.style.width = "500px"; // css lai vi 2 cai chua co sp va co sp no khac nhau ve width
            listPreview.style.top = "67px";
            listPreview.style.left = "-372px";
        }
        renderNumberCart(); // render so lieu thi render het
    }

    // hinh anh truot qua lai
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
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
        let autoSlideInterval = setInterval(nextSlide, 3000);
    };
    startAutoSlide();

    // Xu li nut backToTop
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            // Hiển thị nút khi người dùng cuộn xuống 20px
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
});
