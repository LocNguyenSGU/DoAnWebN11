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

console.log(listProducts); // Đây là danh sách sản phẩm từ localStorage

function renderProducts(arr) {
    const productListContainer = document.querySelector(".contain-product");
    productListContainer.innerHTML = "";

    arr.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product"); // Add the "product" class

        productDiv.innerHTML = `
            <img src="${product.image}" alt="" class="img-product" />
            <h2 class="name">${product.name}</h2>
            <span class="price">${product.price}</span>
            <div class="group-btn">
                <button class="edit-btn" data-id="${product.id}">
                    <img src="./asset/img/admin-edit-product.png" alt="" class="icon-edit" />
                    Edit Product
                </button>
                <button class="delete-btn" data-id="${product.id}">
                    <img src="./asset/img/admin-delete-product.png" alt="" class="icon-delete" />
                    Delete Product
                </button>
            </div>
        `;

        productListContainer.appendChild(productDiv);
    });
}
renderProducts(listProducts);

// hàm xoá
function deleteProduct(id) {
    const index = listProducts.findIndex((product) => product.id == id);
    if (index !== -1) {
        const shouldDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );
        if (shouldDelete) {
            listProducts.splice(index, 1);
            renderProducts(listProducts);
            console.log("Deleted product with ID " + id);
            // Sau khi xoá sản phẩm, lưu trữ lại dữ liệu sản phẩm vào Local Storage
            localStorage.setItem("listProducts", JSON.stringify(listProducts));
        }
    } else {
        console.log("Product with ID " + id + " not found");
    }
}
// hàm ấn nút xoá
document.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("delete-btn")) {
        const productId = parseInt(event.target.getAttribute("data-id"), 10);
        deleteProduct(productId);
    }
});

// ============= Xu li form an hien ================
const btnCloseForm = document.querySelector(".closeImg");
const addProduct = document.querySelector(".add-btn");
const addEditProductBackgroundForm = document.querySelector(
    ".add-edit-product-background-form"
);
const addEditProductForm = document.querySelector(".add-edit-product-form");

function addAnimate() {
    addEditProductBackgroundForm.classList.add("animate");
    addEditProductForm.classList.add("animate");
}
function rmvAnimate() {
    if (checkEdit == 1) clearForm();
    addEditProductBackgroundForm.classList.remove("animate");
    addEditProductForm.classList.remove("animate");
}
addProduct.addEventListener("click", addAnimate);

btnCloseForm.addEventListener("click", rmvAnimate);
addEditProductBackgroundForm.addEventListener("click", rmvAnimate);

addEditProductForm.onclick = function (event) {
    // Ngăn chặn sự kiện khi ấn vào form mà bị mất
    event.stopPropagation();
};
// =========== hàm xử lí thêm và sửa ===============
let checkEdit = 0;
const btnSave = document.querySelector(".btn-save");
btnSave.addEventListener("click", function () {
    if (checkEdit == 0) {
        // nếu mà không sửa thì thêm
        const productId = parseInt(
            document.getElementById("idProduct").value,
            10
        );
        const productName = document.getElementById("nameProduct").value;
        const productPrice = parseFloat(
            document.getElementById("price").value,
            2
        );
        const productDesc = document.getElementById("desc").value;
        const productType = document.getElementById("type").value;
        const productImg = document.getElementById("linkImage").value;
        var product = {
            id: productId,
            name: productName,
            price: productPrice,
            description: productDesc,
            image: productImg,
            star: 5.0,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: productType,
            },
        };
        listProducts.unshift(product);
        clearForm();
        console.log("Added product with ID " + productId);
        renderProducts(listProducts);
        rmvAnimate();
        // Sau khi thay đổi thông tin sản phẩm, lưu trữ lại dữ liệu sản phẩm vào Local Storage
        localStorage.setItem("listProducts", JSON.stringify(listProducts));
    } else {
        saveEditedProduct();
        checkEdit = 0;
        clearForm();
        rmvAnimate();
    }
});

// Hàm để hiển thị form chỉnh sửa sản phẩm với thông tin sản phẩm cần chỉnh sửa
function openEditForm(product) {
    const productId = document.getElementById("idProduct");
    const productName = document.getElementById("nameProduct");
    const productPrice = document.getElementById("price");
    const productDesc = document.getElementById("desc");
    const productType = document.getElementById("type");
    const productImg = document.getElementById("linkImage");

    productId.value = product.id;
    productName.value = product.name;
    productPrice.value = product.price;
    productDesc.value = product.description;
    productType.value = product.nature.type;
    productImg.value = product.image;

    addAnimate();
}

document.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("edit-btn")) {
        const productId = parseInt(event.target.getAttribute("data-id"), 10);
        const productToEdit = listProducts.find(
            (product) => product.id === productId
        );
        openEditForm(productToEdit);
        checkEdit = 1;
    }
});

//  ========== Hàm thay đổi thông tin sản phẩm ==============
function saveEditedProduct() {
    const productId = parseInt(document.getElementById("idProduct").value, 10);
    const productName = document.getElementById("nameProduct").value;
    const productPrice = parseFloat(document.getElementById("price").value, 2);
    const productDesc = document.getElementById("desc").value;
    const productType = document.getElementById("type").value;
    const productImg = document.getElementById("linkImage").value;

    const productToEdit = listProducts.find(
        (product) => product.id === productId
    );

    if (productToEdit) {
        productToEdit.id = productId;
        productToEdit.name = productName;
        productToEdit.price = productPrice;
        productToEdit.description = productDesc;
        productToEdit.nature.type = productType;
        productToEdit.image = productImg;
        localStorage.setItem("listProducts", JSON.stringify(listProducts));
        console.log("edited success with ID " + productId);
    } else {
        console.log("Product not found for editing with ID " + productId);
    }

    rmvAnimate();
    renderProducts(listProducts);
}

function clearForm() {
    document.getElementById("idProduct").value = "";
    document.getElementById("nameProduct").value = "";
    document.getElementById("price").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("type").value = "";
    document.getElementById("linkImage").value = "";
}
// ======== Ham xu li thong bao khi them san pham ===========
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");
let timer1, timer2;

btnSave.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 2500); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 2800);
});

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
        progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
});

const textInput = document.querySelector(".search-field");
const iconDelete = document.querySelector(".icon-delete");

function search() {
    let productSearch = listProducts.filter((value) => {
        return value.name
            .toLowerCase()
            .trim()
            .includes(textInput.value.trim().toLowerCase());
    });
    if (productSearch.length == 0) {
        console.log("No products found");
    }
    renderProducts(productSearch);
}
document.querySelector(".btn-search").addEventListener("click", search);

function deleteText() {
    textInput.addEventListener("input", function () {
        if (textInput.value.length > 0) {
            iconDelete.classList.remove("hidden");
            console.log("thay");
            iconDelete.addEventListener("click", function () {
                textInput.value = "";
                iconDelete.classList.add("hidden");
                search();
            });
        } else {
            iconDelete.classList.add("hidden");
            console.log("k thay");
        }
    });
    console.log(iconDelete);
}
deleteText();
