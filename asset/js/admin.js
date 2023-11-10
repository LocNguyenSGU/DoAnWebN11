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
renderProducts(listProducts);
// ============= Xu li form an hien ================
let checkEdit = 0;
const btnCloseForm = document.querySelector(".closeImg");
const btnAddProduct = document.querySelector(".add-btn");
const btnEditProduct = document.querySelector(".edit-btn");
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
btnAddProduct.addEventListener("click", addAnimate);
btnCloseForm.addEventListener("click", rmvAnimate);
addEditProductBackgroundForm.addEventListener("click", rmvAnimate);
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

// Function to edit a product
// function editProduct() {
//     const productId = parseInt(document.getElementById("idProduct").value);
//     const productName = document.getElementById("nameProduct").value;
//     const productPrice = parseFloat(document.getElementById("price").value);
//     const productDesc = document.getElementById("desc").value;
//     const productType = document.getElementById("type").value;
//     const productImg = document.getElementById("linkImage").value;
//     const productToEdit = listProducts.find(
//         (product) => product.id === productId
//     );
//     if (productToEdit) {
//         productToEdit.name = productName;
//         productToEdit.price = productPrice;
//         productToEdit.description = productDesc;
//         productToEdit.nature.type = productType;
//         productToEdit.image = productImg;
//         localStorage.setItem("listProducts", JSON.stringify(listProducts));
//         renderProducts(listProducts);
//         rmvAnimate();
//     } else {
//         console.log("Product not found for editing with ID " + productId);
//     }
//  }

// Function to clear the form
function clearForm() {
    document.getElementById("nameProduct").value = "";
    document.getElementById("price").value = "";
    document.getElementById("type").value = "";
    document.getElementById("linkImage").value = "";
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
}

const btnSave = document.querySelector(".btn-save");
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


// ======== Ham xu li thong bao khi them san pham ===========
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");
let timer1, timer2;
function addSuccessForm(){
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
}

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
             ).querySelector('.div');
                 Object.assign(validateElement.style, {
                 'border-color': 'red',
             })
        } else {
            errorElement.innerText = "";
            var validateElement = getParent(
                 inputElement,
                 options.formGroupSelector
             ).querySelector('.div');
                 Object.assign(validateElement.style, {
                 'border-color': '#b3b3b3',
             })
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
                    var formValues = Array.from(enableInputs).reduce(function (values,input) {
                         values[input.name] = input.value
                         return values;
                    }, {});
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
 
            if(inputElement) {
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
                     ).querySelector('.div');
                     Object.assign(validateElement.style, {
                         'border-color': '#b3b3b3',
                     })
 
                     document.querySelector('.form-error').innerHTML = ''
                };
    }})}
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
 runCheckAddForm()
 function runCheckAddForm(){
     Validator({
         form: '#add-form',
         formGroupSelector: '.form-group',
         errorSelector: '.form-error',
         rules: [
            Validator.isRequired("#nameProduct",    'Vui lòng nhập tên sản phẩm'),
            Validator.isRequired("#price"  ,        'Vui lòng nhập đơn giá'),
            Validator.isRequired("#type",           'Vui lòng chọn loại sản phẩm'),
            Validator.isRequired("#linkImage",      'Vui lòng chọn link hình ảnh'),
         ],
         onSubmit: function (data) {
            console.log(data);
            clearForm();
            addProduct(data);
         }
     });
}

 