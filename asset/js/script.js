// Render san pham
fetch("./asset/js/data.json")
    .then((response) => response.json())
    .then((data) => {
        const productList = document.querySelector(".list-show-product");

        if (productList) {
            data.forEach((product) => {
                const productSection = document.createElement("section");
                productSection.innerHTML = `
                <section class="cart">
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
                            <span class="star-num">4.3</span>
                        </div>
                    </div>
                    <section>
                `;
                productList.appendChild(productSection);
            });
        } else {
            console.error(
                "Không tìm thấy phần tử có class 'list-show-product'."
            );
        }
    })
    .catch((error) => {
        console.error("Lỗi khi tải dữ liệu JSON:", error);
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

// document.addEventListener("DOMContentLoaded", function () {

//     const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
//     addToCartButtons.forEach(function (button) {
//       button.addEventListener("click", function () {
//         const productId = button.getAttribute("data-product-id");
//         const productName = button.getAttribute("data-product-name");
//         const productPrice = parseFloat(button.getAttribute("data-product-price"));

//         // Thêm sản phẩm vào giỏ hàng
//         addToCart(productId, productName, productPrice);
//       });
//     });

//     // Hàm thêm sản phẩm vào giỏ hàng
//     function addToCart(id, name, price) {
//       // Tạo một sản phẩm mới
//       const product = {
//         id: id,
//         name: name,
//         price: price,
//       };

//       // Thêm sản phẩm vào danh sách giỏ hàng
//       cartItems.push(product);

//       // Cập nhật giao diện người dùng
//       updateCartUI();

//       // Tính tổng tiền và cập nhật tổng tiền
//       calculateTotal();
//     }

//     // Hàm cập nhật giao diện giỏ hàng
//     function updateCartUI() {
//       const cartList = document.querySelector(".cart-items");
//       cartList.innerHTML = "";

//       cartItems.forEach(function (item) {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartList.appendChild(listItem);
//       });
//     }

//     // Hàm tính tổng tiền và cập nhật tổng tiền
//     function calculateTotal() {
//       const cartTotalElement = document.querySelector(".cart-total");
//       const total = cartItems.reduce(function (acc, item) {
//         return acc + item.price;
//       }, 0);

//       cartTotalElement.textContent = `$${total.toFixed(2)}`;
//     }

//     // Danh sách sản phẩm trong giỏ hàng
//     const cartItems = [];
//   });




// tìm kiếm sản phẩm
// const search=()=>{
//     const searchbox=document.getElementById("search-item").value.toUpperCase();
//     const sotoreitems=document.getElementById("product-list");
//     const product1=document.querySelectorAll(".product1");
//     const pname=document.getElementsByTagName("h2");
      
//       for(var i=0; i<pname.length; i++){
//       let match=product1[i].getElementsByTagName('h2')[0];
//         if(match){
//         let textvalue= match.textContent || match.innerHTML
//            if(textvalue.toUpperCase().indexOf(searchbox) >-1){
//            product1[i].style.display="";
//            }else{
//             product1[i].style.display="none";
//            }
//       }
//     }
//   }
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




