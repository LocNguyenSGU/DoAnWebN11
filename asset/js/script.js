fetch("./asset/js/data.json")
    .then((response) => response.json())
    .then((data) => {
        const productList = document.querySelector(".list-show-product");
        const showShirtsButton = document.querySelector(".btn-sweater");
        const showPantsButton = document.querySelector(".btn-pants");

        if (productList && showShirtsButton && showPantsButton) {
            // Hàm để hiển thị các sản phẩm dựa trên loại (áo hoặc quần)
            function showProductsByType(productType) {
                productList.innerHTML = ""; // Xóa bỏ các sản phẩm hiện tại

                data[productType].forEach((product) => {
                    const productSection = document.createElement("section");
                    productSection.classList.add("cart");
                    productSection.innerHTML = `
                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            class="img-cart"
                        />
                        <h3 class="title">${product.name}</h3>
                        <span class="brand">Lavazza</span>
                        <div class="row">
                            <span class="price">$${product.price}</span>
                            <div class="row-price-star">
                                <img
                                    src="./asset/img/main-star.svg"
                                    alt=""
                                    class="star"
                                />
                                <span class="star-num">${product.star}</span>
                            </div>
                        </div>
                        <button class="add-to-cart-button" data-product-id="1">Add to Cart</button>
                    `;
                    productList.appendChild(productSection);
                    const addToCartButton = productSection.querySelector(".add-to-cart-button");
                    addToCartButton.addEventListener("click", () => addToCart(product));
                });
            }

            // Lắng nghe sự kiện khi nút "Hiện áo" được bấm
            showShirtsButton.addEventListener("click", () =>
                showProductsByType("sweater")
            );

            // Lắng nghe sự kiện khi nút "Hiện quần" được bấm
            showPantsButton.addEventListener("click", () =>
                showProductsByType("pants")
            );
            showProductsByType("sweater");
        } else {
            console.error(
                "Không tìm thấy phần tử có class 'list-show-product' hoặc nút 'showShirtsButton' hoặc 'showPantsButton'."
            );
        }
    })
    .catch((error) => {
        console.error("Lỗi khi tải dữ liệu JSON:", error);
    });
// Su kien click add to cart
    const cartItems = [];
    function addToCart(product) {
        const existingCartItem = cartItems.find((item) => item.id === product.id);
        
        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
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
    function updateCartDisplay() {
        const cartQuantity = document.getElementById("cart-quantity");
        const cartTotal = document.getElementById("cart-total");
        const cartItemsList = document.getElementById("cart-items");
    
        let totalQuantity = 0;
        let totalPrice = 0;
    
        cartItemsList.innerHTML = ""; // Xóa bỏ các sản phẩm trong giỏ hàng hiện tại
    
        cartItems.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="cart-item-image"
                />
                <div class="cart-item-details">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    <span class="cart-item-quantity">Quantity: ${item.quantity}</span>
                </div>
            `;
            cartItemsList.appendChild(cartItem);
    
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
    
        cartQuantity.textContent = totalQuantity;
        cartTotal.textContent = totalPrice.toFixed(2);
    }
    
    // Bắt sự kiện khi trang web được tải và cập nhật hiển thị giỏ hàng ban đầu
    document.addEventListener("DOMContentLoaded", function () {
        updateCartDisplay();
    });

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

// tìm  kiêms sản phẩm
document.addEventListener('DOMContentLoaded', function () {
 var searchInput = document.querySelector('.search-field')
     searchInput.addEventListener('input',function(e){
    let txtSearch= e.target.value.trim().toLowerCase()
    let listProductDom=document.querySelectorAll('.list-show-product .cart')
         listProductDom.forEach(item=>{
         if(item.innerText.toLowerCase().includes(txtSearch)){
            item.classList.remove('hide') // hide xóa khi không tìm thấy
        }
        else{
            item.classList.add('hide')   // hiển thị
        }
 })
 })
})

//Login button
document.querySelector('.icon-user').onclick=function(){
    Object.assign(document.querySelector('.loginBlock').style,{
        translate: '-350px'
    })
}
document.querySelector('.closeLoginBlock img').onclick=function(){
    Object.assign(document.querySelector('.loginBlock').style,{
        translate: '350px'
    })
}
const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
        document.querySelector(".tab-item.active").classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");
        this.classList.add("active");
        pane.classList.add("active");
  };
});
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
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }
        
        if (errorMessage) {
            errorElement.innerText = errorMessage; 
        } else {
            errorElement.innerText = '';
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
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
               // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                } 
            });
        });
    }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined :  message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message || 'Trường này phải là email';
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined :  message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}

