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
let listUsers = JSON.parse(localStorage.getItem("DataUsers"));
console.log(listProducts); // Đây là danh sách sản phẩm từ localStorage
renderAdmin();
function renderAdmin() {
    renderProductManagement();
    document.querySelector(".productManagement").onclick = function () {
        renderProductManagement();
    };
    document.querySelector(".orderManagement").onclick = function () {
        renderOrderManagement();
    };
    document.querySelector(".userManagement").onclick = function () {
        renderUserManagement();
    };
    document.querySelector(".orderStartictis").onclick = function () {
        renderOrderStartictis();
    };
    document.querySelector(".logout").onclick = function () {
        window.location = "./index.html";
    };
}
function renderProductManagement() {
    document.querySelector('.div-title').innerHTML = `
        <h1 class="title">Product Management</h1>
    `

    document.querySelector(".contain-add-product-search").innerHTML = `
    <div class="add-product-search">
        <button class="add-btn" onclick = "openAddForm()">Add Product</button>
            <div class="search">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search for..."
                    class="search-field"
                    />
                <svg
                    xmlns=""
                    height="1em"
                    viewBox="0 0 512 512"
                    class="icon-delete hidden"
                >
                    <path
                        fill="currentColor"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        ></path>
                </svg>
                <button class="btn-search">
                    <img
                        src="./asset/img/header-search.svg"
                        alt=""
                        class="search-icon"
                    />
                </button>
            </div>
            </div>
            <div class="contain-product">
        </div>    
    `;
    renderProducts(listProducts);
    handleProductManagement();
}

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
                <button class="edit-btn" onclick = "openEditForm(${product.id})">
                    <img src="./asset/img/admin-edit-product.png" alt="" class="icon-edit" />
                    Edit Product
                </button>
                <button class="delete-btn" onclick = "deleteProduct(${product.id})">
                    <img src="./asset/img/admin-delete-product.png" alt="" class="icon-delete" />
                    Delete Product
                </button>
            </div>
        `;

        productListContainer.appendChild(productDiv);
    });
}
function renderOrderManagement() {
    document.querySelector('.div-title').innerHTML = `
        <h1 class="title">Order Management</h1>
    `
    const orderManagementContainer = document.querySelector(
        ".contain-add-product-search"
    );
    orderManagementContainer.innerHTML = `
    <div class="historyOrder">
    <p class="helloUser-Order">User kjashhdkjash@gmail.com</p>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quatity</th>    
                    <th>Price</th>
                    <th>Order time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody class = "tableHistory">
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
            </tbody>
        </table>
    </div>
    <button class="adminAcceptOrder">Xac nhan don hang</button>
</div>
<div class="historyOrder">
    <p class="helloUser-Order">User kjashhdkjash@gmail.com</p>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quatity</th>    
                    <th>Price</th>
                    <th>Order time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody class = "tableHistory">
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img class="img-history" src="./asset/img/product-sweater/sweater-106.jpg" alt=""></td>
                    <td>Sweater</td>
                    <td>2</td>
                    <td>$32</td>
                    <td>8:32 13/10/2023</td>
                    <td>Dang cho</td>
                </tr>
            </tbody>
        </table>
    </div>
    <button class="adminAcceptOrder">Xac nhan don hang</button>
</div>
    `;
}
function renderUserManagement() {
    document.querySelector('.div-title').innerHTML = `
        <h1 class="title">User Management</h1>
    `
    document.querySelector(".contain-add-product-search").innerHTML = `
        <table class="userTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    `;
    renderUser(listUsers);
}
function renderUser(arr) {
    const userManagementContainer = document.querySelector(".userTable tbody");
    userManagementContainer.innerHTML = "";

    arr.forEach((user) => {
        const userTr = document.createElement("tr");
        userTr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>
                <button class="delete-btn product" onclick = "deleteUser(${user.id})">
                    Delete User
                </button>
                </td>
        `;
        userManagementContainer.appendChild(userTr);
    });
}
function renderOrderStartictis() {
    document.querySelector('.div-title').innerHTML = `
        <h1 class="title">Order Startictis</h1>
    `
    const orderStartictisContainer = document.querySelector(
        ".contain-add-product-search"
    );
    orderStartictisContainer.innerHTML = `
        <p>I'm Order Startictis</p>
    `;
}
function handleProductManagement() {
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
    }
    deleteText();

    // console.log(btnSave);
    // btnSave.addEventListener("click", function() {
    //    if(checkEdit === 0)
    //    {
    //       addProduct();
    //       console.log("day la add");
    //    }
    //    else {
    //       editProduct();
    //       checkEdit = 0;
    //       console.log("day la edit")
    //    }
    // })
}
function addAnimate() {
    addEditProductBackgroundForm.classList.add("animate");
    addEditProductForm.classList.add("animate");
}
function rmvAnimate() {
    if (checkEdit == 1) clearForm();
    addEditProductBackgroundForm.classList.remove("animate");
    addEditProductForm.classList.remove("animate");
    var allDiv = document.querySelectorAll(".div");
    var allFormError = document.querySelectorAll(".form-error");

    for (let i = 0; i < allDiv.length; i++) {
        Object.assign(allDiv[i].style, {
            "border-color": "#b3b3b3",
        });
    }
    for (let j = 0; j < allFormError.length; j++) {
        allFormError[j].innerText = "";
    }
}

// Function to clear the form
function clearForm() {
    document.getElementById("nameProduct").value = "";
    document.getElementById("price").value = "";
    document.getElementById("type").value = "";
    document.getElementById("linkImage").value = "";
}

// ============= Xu li form an hien ================
let checkEdit = 0;
const btnCloseForm = document.querySelector(".closeImg");
const btnAddProduct = document.querySelector(".add-btn");
function openAddForm() {
    addAnimate();
    btnCloseForm.addEventListener("click", rmvAnimate);
}

const addEditProductBackgroundForm = document.querySelector(
    ".add-edit-product-background-form"
);
addEditProductBackgroundForm.addEventListener("click", rmvAnimate);
const addEditProductForm = document.querySelector(".add-edit-product-form");
addEditProductForm.onclick = function (event) {
    // Ngăn chặn sự kiện khi ấn vào form mà bị mất
    event.stopPropagation();
};

// =========== hàm xét id tự động =================
function setId() {
    let max = listProducts[0].id;
    for (let i = 1; i < listProducts.length; i++) {
        if (listProducts[i].id > max) max = listProducts[i].id;
    }
    return max + 1;
}

// Function to delete a product
function deleteProduct(productId) {
    const shouldDelete = window.confirm(
        "Are you sure you want to delete this product"
    );
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id === productId && shouldDelete) {
            listProducts.splice(i, 1);
            console.log("da xoa  " + listProducts[i].id);
            console.log(listProducts);
        }
    }
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    renderProducts(listProducts);
}
// Function to delete a user
function deleteUser(userId) {
    const shouldDelete = window.confirm(
        "Are you sure you want to delete this user"
    );
    for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].id === userId && shouldDelete) {
            listUsers.splice(i, 1);
            // console.log("da xoa  " + listUsers[i].id);
            console.log(listUsers);
        }
    }
    localStorage.setItem("DataUsers", JSON.stringify(listUsers));
    renderUser(listUsers);
}
// Hàm để hiển thị form chỉnh sửa sản phẩm với thông tin sản phẩm cần chỉnh sửa
function openEditForm(productId) {
    document.getElementById("idProduct").value = productId;
    checkEdit = 1;
    const productName = document.getElementById("nameProduct");
    const productPrice = document.getElementById("price");
    const productType = document.getElementById("type");
    const productImg = document.getElementById("linkImage");

    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].id === productId) {
            const product = listProducts[i];
            productName.value = product.name;
            productPrice.value = product.price;
            productType.value = product.nature.type;
            productImg.value = product.image;
        }
    }
    addAnimate();
    btnCloseForm.addEventListener("click", rmvAnimate);
}

// Function to edit a product
function editProduct() {
    const productId = parseInt(document.getElementById("idProduct").value);
    const productName = document.getElementById("nameProduct").value;
    const productPrice = parseFloat(document.getElementById("price").value);
    const productType = document.getElementById("type").value;
    const productImg = document.getElementById("linkImage").value;
    const productToEdit = listProducts.find(
        (product) => product.id === productId
    );
    if (productToEdit) {
        productToEdit.name = productName;
        productToEdit.price = productPrice;
        productToEdit.nature.type = productType;
        productToEdit.image = productImg;
        localStorage.setItem("listProducts", JSON.stringify(listProducts));
        renderProducts(listProducts);
        rmvAnimate();
    } else {
        console.log("Product not found for editing with ID " + productId);
    }
}
// ============ Hàm thêm sản phẩm ==================
function addProduct(data) {
    const productId = setId();
    const productName = data.nameProduct;
    const productPrice = parseFloat(data.price);
    const productType = data.type;
    const productImg = data.linkImage;
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
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
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    console.log(listProducts);
    renderProducts(listProducts);
    rmvAnimate();
}
// ======== Ham xu li thong bao khi them san pham ===========
function addSuccessForm() {
    const toast = document.querySelector(".toast");
    const closeIcon = document.querySelector(".close");
    const progress = document.querySelector(".progress");
    let timer1, timer2;

    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 2500); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 2800);

    closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");

        setTimeout(() => {
            progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
    });
}
// Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};
    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(
            inputElement,
            options.formGroupSelector
        ).querySelector(options.errorSelector);
        var errorMessage;
        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            var validateElement = getParent(
                inputElement,
                options.formGroupSelector
            ).querySelector(".div");
            Object.assign(validateElement.style, {
                "border-color": "red",
            });
        } else {
            errorElement.innerText = "";
            var validateElement = getParent(
                inputElement,
                options.formGroupSelector
            ).querySelector(".div");
            Object.assign(validateElement.style, {
                "border-color": "#b3b3b3",
            });
        }
        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === "function") {
                    var enableInputs = formElement.querySelectorAll("[name]");
                    var formValues = Array.from(enableInputs).reduce(function (
                        values,
                        input
                    ) {
                        values[input.name] = input.value;
                        return values;
                    },
                    {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        };

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {
            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector(options.errorSelector);
                    errorElement.innerText = "";
                    var validateElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector(".div");
                    Object.assign(validateElement.style, {
                        "border-color": "#b3b3b3",
                    });
                    document.querySelector(".form-error").innerHTML = "";
                };
            }
        });
    }
}
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim()
                ? undefined
                : message || "Vui lòng nhập trường này";
        },
    };
};
runCheckAddForm();
function runCheckAddForm() {
    Validator({
        form: "#add-form",
        formGroupSelector: ".form-group",
        errorSelector: ".form-error",
        rules: [
            Validator.isRequired("#nameProduct", "Vui lòng nhập tên sản phẩm"),
            Validator.isRequired("#price", "Vui lòng nhập đơn giá"),
            Validator.isRequired("#type", "Vui lòng chọn loại sản phẩm"),
            Validator.isRequired("#linkImage", "Vui lòng chọn link hình ảnh"),
        ],
        onSubmit: function (data) {
            if (checkEdit === 0) {
                addSuccessForm();
                console.log(data);
                clearForm();
                addProduct(data);
            } else {
                editProduct();
            }
        },
    });
}

// // order.js

// // Function to render detailed order information
// function renderOrderDetails(orderIndex) {
//     // Retrieve orders from localStorage or from your server
//     let orders = JSON.parse(localStorage.getItem('DataUsers'));

//     // Check if orders exist and if the given index is valid
//     if (orders && orderIndex >= 0 && orderIndex < orders.length) {
//         let order = orders[orderIndex];

//         // Assuming you have an element with the ID "order-details"
//         let orderDetailsContainer = document.getElementById('order-details');

//         // Clear previous content if any
//         orderDetailsContainer.innerHTML = '';

//         // Render order details
//         orderDetailsContainer.innerHTML += '<h2>Order Details</h2>';
//         orderDetailsContainer.innerHTML += '<p><strong>Customer Name:</strong> ' + order.name + '</p>';
//         orderDetailsContainer.innerHTML += '<p><strong>Phone:</strong> ' + order.phone + '</p>';
//         orderDetailsContainer.innerHTML += '<p><strong>Address:</strong> ' + order.address + '</p>';
//         orderDetailsContainer.innerHTML += '<h3>Order Items</h3>';

//         // Render each item in the order
//         order.cart.forEach(function (item, index) {
//             orderDetailsContainer.innerHTML += '<div class="order-item">';
//             orderDetailsContainer.innerHTML += '<p><strong>Product Name:</strong> ' + item.name + '</p>';
//             orderDetailsContainer.innerHTML += '<p><strong>Price:</strong> ' + item.price + '</p>';
//             orderDetailsContainer.innerHTML += '<p><strong>Quantity:</strong> ' + item.quantity + '</p>';
//             orderDetailsContainer.innerHTML += '</div>';
//         });

//         // Add more details as needed
//     } else {
//         console.error('Invalid order index or no orders available.');
//     }
// }

// // Function to show order customer table
// function showOrderCustomer() {
//     let order = JSON.parse(localStorage.getItem('DataUsers'));
//     let orderTable = '<div class="order-heading">ID</div>' +
//         '<div class="order-heading">Tên khách hàng</div>' +
//         '<div class="order-heading">Đơn hàng</div>' +
//         '<div class="order-heading">Số điện thoại</div>' +
//         '<div class="order-heading">Địa chỉ</div>' +
//         '<div class="order-heading">Tổng tiền</div>' +
//         '<div class="order-heading">Tình trạng</div>';
//     let id = 1;

//     for (let i = 0; i < order.length; i++) {
//         let total = 0;
//         let order_price = order[i].cart;

//         for (let j = 0; j < order_price.length; j++) {
//             total += parseFloat(order_price[j].price) * parseFloat(order_price[j].quantity);
//         }

//         orderTable += '<div class="order-heading">' + (id++) + '</div>' +
//             '<div class="order-heading">' + order[i].name + '</div>' +
//             '<button class="check-order-btn" data-order-index="' + i + '">Xem đơn hàng</button>' +
//             '<div class="order-heading">' + order[i].phone + '</div>' +
//             '<div class="order-heading">' + order[i].address + '</div>' +
//             '<div class="order-heading">' + total + '.000Đ' + '</div>' +
//             '<div class="order-heading">' +
//             '<select type="text" class="check-order-status-optn">' +
//             '<option value="isDelivered">Đã giao hàng</option>' +
//             '<option value="isNotDelivered">Đang xử lí</option>' +
//             '</select>' +
//             '</div>';
//     }

//     // Assuming you have an element with the ID "render-order"
//     document.getElementById('render-order').innerHTML = orderTable;

//     // Add click event listeners to the "Xem đơn hàng" buttons
//     let buttons = document.querySelectorAll('.check-order-btn');
//     buttons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             // Extract the order index from the data attribute
//             let orderIndex = parseInt(button.getAttribute('data-order-index'), 10);
//             renderOrderDetails(orderIndex);
//         });
//     });
// }

// // Attach the click event handler to the "Order Startictis" list item
// document.querySelector('.orderManagement').addEventListener('click', function () {
//     // Call the showOrderCustomer function to display order information
//     showOrderCustomer();

//     // You can add additional logic or functions here if needed
// });
