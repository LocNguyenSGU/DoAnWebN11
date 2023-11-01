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

function deleteText() {
    textInput.addEventListener("input", function () {
        if (textInput.value.length > 0) {
            iconDelete.classList.remove("hidden");
            console.log("thay");
            iconDelete.addEventListener("click", function () {
                textInput.value = "";
                iconDelete.classList.add("hidden");
            });
        } else {
            iconDelete.classList.add("hidden");
            console.log("k thay");
        }
    });
    console.log(iconDelete);
}
deleteText();
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

// document.addEventListener('DOMContentLoaded', function () {
//   const filterToggle = document.querySelector('.filter-toggle');
//   const filterForm = document.querySelector('.filter');

//   // Ban đầu ẩn form
//   filterForm.classList.add('hidde-form');

//   // Theo dõi trạng thái hiện tại của form
//   let isFormVisible = false;

//   // Thêm sự kiện click vào phần tử "filter-toggle"
//   filterToggle.addEventListener('click', function () {
//       console.log("Click event fired");
//       if (isFormVisible) {
//           // Nếu form đang hiển thị, ẩn form
//           filterForm.classList.add('hidde-form');
//           isFormVisible = false;
//       } else {
//           // Nếu form đang ẩn, hiển thị form
//           filterForm.classList.remove('hidde-form');
//           isFormVisible = true;
//       }
//   });
// });

// // const itemSubmit = document.getElementById("item submit");
// // itemSubmit.addEventListener("click", function () {
// //   // Lưu thông tin giỏ hàng vào Local Storage trước khi chuyển hướng
// //   localStorage.setItem("index", JSON.stringify(SearchItems));

// //   // window.location.href = "index.html";
// // });

// function showProduct(productFilter) {
//   // Clear the existing product list
//   list.

// innerHTML = '';

//   // Check if any products are found after filtering
//   if (productFilter.length === 0) {
//     list.
//     list
// innerHTML = '<p>No products found.</p>';
//   } else {
//     // Update the product count
//     count.

// innerText = productFilter.length;

// // Iterate through the filtered products and display them
//     productFilter.
//     product

// forEach(item => {
//       let newItem = document.createElement('div');
//       newItem.classList.add('item');

//       // Create image
//       let newImage = new Image();
//       newImage.src = item.image;
//       newItem.

// appendChild(newImage);

// // Create product name

// let newTitle = document.createElement('div');
//       newTitle.classList.add('title');
//       newTitle.innerText = item.name;
//       newItem.

// appendChild(newTitle);

//       // Create price
//       let newPrice = document.createElement('div');
//       newPrice.classList.add('price');
//       newPrice.innerText = item.price.toLocaleString() + ' đ';
//       newItem.appendChild(newPrice);

//       // Append the new item to the product list
//       list.appendChild(newItem);
//     });
//   }
// }
// const SearchItems = [];
// const itemSubmitButton = document.getElementById("item-submit");

// if (itemSubmitButton) {
//   itemSubmitButton.addEventListener("click", function () {
//     localStorage.setItem("index", JSON.stringify(SearchItems));
//   });

// }

// let list = document.getElementById('list');
// let count = document.getElementById('count');
// let filter = document.querySelector('.filter');
// let productType;
// filter.addEventListener('submit', function(event) {
//   event.preventDefault();
//   let valueFilter = event.target.elements.category.value;

//   if (data[productType]) {
//     let  productFilter = data[productType].filter(item => {
//           if (valueFilter !== '') {
//               return item.nature.type === valueFilter;
//           }
//           return true;
//       });

//       // Tiếp tục xử lý sản phẩm sau khi đã lọc
//       showProduct(productFilter);
//   }
// })

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
