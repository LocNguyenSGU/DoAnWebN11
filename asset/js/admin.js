import { listProducts } from "./script.js";

function renderProducts() {
    const productListContainer = document.querySelector(".contain-product");
    productListContainer.innerHTML = "";

    listProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product"); // Add the "product" class

        productDiv.innerHTML = `
            <img src="${product.image}" alt="" class="img-product" />
            <h2 class="name">${product.name}</h2>
            <span class="price">${product.price}</span>
            <div class="group-btn">
                <button class="edit-btn">
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

function deleteProduct(id) {
    const index = listProducts.findIndex((product) => product.id === id);
    if (index !== -1) {
        const shouldDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );
        if (shouldDelete) {
            listProducts.splice(index, 1);
            renderProducts();
            console.log("Deleted product with ID " + id);
        }
    } else {
        console.log("Product with ID " + id + " not found");
    }
}

document.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("delete-btn")) {
        const productId = parseInt(event.target.getAttribute("data-id"), 10);
        deleteProduct(productId);
    }
});

renderProducts();

const btnCloseForm = document.querySelector(".closeImg");
const addProduct = document.querySelector(".add-btn");
const editProducts = document.querySelectorAll(".edit-btn");
const addEditProductBackgroundForm = document.querySelector(
    ".add-edit-product-background-form"
);
const addEditProductForm = document.querySelector(".add-edit-product-form");

function addAnimate() {
    addEditProductBackgroundForm.classList.add("animate");
    addEditProductForm.classList.add("animate");
}
function rmvAnimate() {
    addEditProductBackgroundForm.classList.remove("animate");
    addEditProductForm.classList.remove("animate");
}

btnCloseForm.addEventListener("click", rmvAnimate);
addProduct.addEventListener("click", addAnimate);
addEditProductBackgroundForm.addEventListener("click", rmvAnimate);

addEditProductForm.onclick = function (event) {
    // cái này hay nè. Ngăn chặn sự kiên khi ấn vào form mà bị mất
    event.stopPropagation();
};
editProducts.forEach((editProduct) => {
    editProduct.addEventListener("click", addAnimate);
});








// import { listProducts } from "./script.js";

// function renderProducts() {
//     const productListContainer = document.querySelector(".contain-product");
//     productListContainer.innerHTML = "";

//     listProducts.forEach((product) => {
//         const productDiv = document.createElement("div");
//         productDiv.innerHTML = `
//             <div class="product">
//                 <img src="${product.image}" alt="" class="img-product" />
//                 <h2 class="name">${product.name}</h2>
//                 <span class="price">${product.price}</span>
//                 <div class="group-btn">
//                     <button class="edit-btn">
//                         <img src="./asset/img/admin-edit-product.png" alt="" class="icon-edit" />
//                         Edit Product
//                     </button>
//                     <button class="delete-btn" data-id="${product.id}">
//                         <img src="./asset/img/admin-delete-product.png" alt="" class="icon-delete" />
//                         Delete Product
//                     </button>
//                 </div>
//             </div>
//         `;

//         productListContainer.appendChild(productDiv);
//     });

//     // Gán lại sự kiện xóa sản phẩm sau khi cập nhật DOM
//     const btnDeleteProducts = document.querySelectorAll(".delete-btn");
//     btnDeleteProducts.forEach((button) => {
//         button.addEventListener("click", () => {
//             const productId = button.getAttribute("data-id");
//             deleteProduct(parseInt(productId, 10));
//         });
//     });
// }

// function deleteProduct(id) {
//     const index = listProducts.findIndex((product) => product.id == id);
//     if (index !== -1) {
//         listProducts.splice(index, 1);
//         console.log("Đã xóa sản phẩm");
//         renderProducts(); // Cập nhật DOM sau khi xóa sản phẩm
//     } else {
//         console.log("Không tìm thấy sản phẩm");
//     }
// }

// renderProducts(); // Gọi hàm renderProducts ban đầu
