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
