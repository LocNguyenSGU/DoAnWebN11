let listProducts = localStorage.getItem("listProducts")
    ? JSON.parse(localStorage.getItem("listProducts"))
    : [
          {
              id: 101,
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
              id: 102,
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
              id: 103,
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
              id: 104,
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
              id: 105,
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
              id: 106,
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
              id: 107,
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
              id: 108,
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
              id: 109,
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
              id: 201,
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
              id: 203,
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
              id: 204,
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
              id: 205,
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
              id: 206,
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
              id: 207,
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
              id: 208,
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
              id: 209,
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

function renderProducts(arr) {
    const productListContainer = document.querySelector(".list-show-product");
    productListContainer.innerHTML = "";

    // Lặp qua mảng sản phẩm và tạo phần tử HTML cho mỗi sản phẩm
    arr.forEach((product) => {
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

        // Thêm sản phẩm vào danh sách sản phẩm
        productListContainer.appendChild(productSection);
    });
}
const textInput = document.querySelector(".search-field");
const iconDelete = document.querySelector(".icon-delete");
const textInputAdvance = document.getElementById("name");
const iconDeleteAdvance = document.querySelector(".icon-delete-advance");

// ============ Xoa text in input =================
function deleteText(nameObj, nameIcon) {
    nameObj.addEventListener("input", function () {
        if (nameObj.value.length > 0) {
            nameIcon.classList.remove("hidden");
            console.log("thay");
            nameIcon.addEventListener("click", function () {
                nameObj.value = "";
                nameIcon.classList.add("hidden");
            });
        } else {
            nameIcon.classList.add("hidden");
            console.log("k thay");
        }
    });
}
deleteText(textInput, iconDelete); // Xoa ở header
deleteText(textInputAdvance, iconDeleteAdvance); // Xoá ở phần form tìm kiếm nâng cao

// =========== Tim kiem co ban ==============
function search() {
    const noProduct = document.querySelector(".no-product-search");
    if (textInput.value.trim() === "") return;
    let productSearch = listProducts.filter((value) => {
        return value.name
            .toLowerCase()
            .trim()
            .includes(textInput.value.trim().toLowerCase());
    });
    if (productSearch.length == 0) noProduct.classList.remove("hidden");
    if (productSearch.length > 0) noProduct.classList.add("hidden");
    renderProducts(productSearch);
}

document.querySelector(".btn-search").addEventListener("click", search);

// ===================   An-hien form tim kiem nang cao ====================
let isFormVisible = false;
const btnForm = document.querySelector(".filter-toggle");
btnForm.addEventListener("click", function () {
    if (isFormVisible == false) {
        btnForm.classList.add("active");
        isFormVisible = true;
    } else {
        btnForm.classList.remove("active");
        isFormVisible = false;
    }
});

// ============== tim kiem nang cao  ==================
const type = document.getElementById("type");
const color = document.getElementById("color");
// const textInputAdvance đã gọi bên trên
const minPrice = document.getElementById("min");
const maxPrice = document.getElementById("max");

function searchAdvance(type, color, name, minPrice, maxPrice) {
    console.log(listProducts);
    console.log(type);
    console.log(color);
    const noProduct = document.querySelector(".no-product-search");
    const productSearchAdvance = listProducts.filter((product, i) => {
        if (
            name &&
            !product.name
                .trim()
                .toLowerCase()
                .includes(name.trim().toLowerCase())
        ) {
            return false;
        }
        if (
            (minPrice && product.price < minPrice) ||
            (maxPrice && product.price > maxPrice)
        ) {
            return false;
        }
        if (type && !(product.nature.type == `${type}`)) {
            return false;
        }
        if (color && !product.nature.color.includes(color)) {
            return false;
        }
        return true;
    });

    if (productSearchAdvance.length === 0) {
        noProduct.classList.remove("hidden");
    } else {
        noProduct.classList.add("hidden");
    }
    renderProducts(productSearchAdvance); // Render the filtered products
}

const btnShowResultAdvance = document.querySelector(".btn-show-result");
const btnCancelAdvance = document.querySelector(".btn-cancel");

btnShowResultAdvance.addEventListener("click", function (e) {
    e.preventDefault();
    searchAdvance(
        type.value,
        color.value,
        textInputAdvance.value,
        minPrice.value,
        maxPrice.value
    );
    cancelAfterSearched();
});

btnCancelAdvance.onclick = cancelAfterSearched;
// ========== hàm dùng để huỷ các giá trị và ẩn form
function cancelAfterSearched(e) {
    if (e) e.preventDefault(); // nếu không có if(e) thì chương trình bị lỗi
    type.value = "";
    color.value = "";
    textInputAdvance.value = "";
    minPrice.value = "";
    maxPrice.value = "";
    btnForm.classList.remove("active");
    isFormVisible = false;
}
