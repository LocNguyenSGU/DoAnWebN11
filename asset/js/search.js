// hien thi filter
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



document.addEventListener('DOMContentLoaded', function () {
  const filterToggle = document.querySelector('.filter-toggle');
  const filterForm = document.querySelector('.filter');

  // Ban đầu ẩn form
  filterForm.classList.add('hidde-form');

  // Theo dõi trạng thái hiện tại của form
  let isFormVisible = false;

  // Thêm sự kiện click vào phần tử "filter-toggle"
  filterToggle.addEventListener('click', function () {
      console.log("Click event fired"); 
      if (isFormVisible) {
          // Nếu form đang hiển thị, ẩn form
          filterForm.classList.add('hidde-form');
          isFormVisible = false;
      } else {
          // Nếu form đang ẩn, hiển thị form
          filterForm.classList.remove('hidde-form');
          isFormVisible = true;
      }
  });
});



// const itemSubmit = document.getElementById("item submit");
// itemSubmit.addEventListener("click", function () {
//   // Lưu thông tin giỏ hàng vào Local Storage trước khi chuyển hướng
//   localStorage.setItem("index", JSON.stringify(SearchItems));

//   // window.location.href = "index.html";
// });




function showProduct(productFilter) {
  // Clear the existing product list
  list.
 
innerHTML = '';

  // Check if any products are found after filtering
  if (productFilter.length === 0) {
    list.
    list
innerHTML = '<p>No products found.</p>';
  } else {
    // Update the product count
    count.
   
innerText = productFilter.length;

    

   
// Iterate through the filtered products and display them
    productFilter.
    product

   
forEach(item => {
      let newItem = document.createElement('div');
      newItem.classList.add('item');

      // Create image
      let newImage = new Image();
      newImage.src = item.image;
      newItem.
     
appendChild(newImage);

      

     


// Create product name
      
     
let newTitle = document.createElement('div');
      newTitle.classList.add('title');
      newTitle.innerText = item.name;
      newItem.
     
appendChild(newTitle);

      // Create price
      let newPrice = document.createElement('div');
      newPrice.classList.add('price');
      newPrice.innerText = item.price.toLocaleString() + ' đ';
      newItem.appendChild(newPrice);

      // Append the new item to the product list
      list.appendChild(newItem);
    });
  }
}
const SearchItems = [];
const itemSubmitButton = document.getElementById("item-submit");

if (itemSubmitButton) {
  itemSubmitButton.addEventListener("click", function () {
    localStorage.setItem("index", JSON.stringify(SearchItems));
  });
  
}


let list = document.getElementById('list');
let count = document.getElementById('count');
let filter = document.querySelector('.filter');
let productType;
filter.addEventListener('submit', function(event) {
  event.preventDefault();
  let valueFilter = event.target.elements.category.value;

  if (data[productType]) {
    let  productFilter = data[productType].filter(item => {
          if (valueFilter !== '') {
              return item.nature.type === valueFilter;
          }
          return true;
      });

      // Tiếp tục xử lý sản phẩm sau khi đã lọc
      showProduct(productFilter);
  } 
})





