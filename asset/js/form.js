//Xử lý ẩn/hiện layout đăng nhập
loginBtn()
function loginBtn(){
document.querySelector(".icon-user").onclick = function () {
    Object.assign(document.querySelector(".loginBackground").style, {
        visibility: 'visible',      
        'animation-name': 'backgroundeffect1',
    });
    Object.assign(document.querySelector(".loginBlock").style, {
        display:'block',      
    });
};
document.querySelector(".btn").onclick = function () {
    Object.assign(document.querySelector(".loginBackground").style, {
        visibility: 'visible',      
        'animation-name': 'backgroundeffect1',
    });
    Object.assign(document.querySelector(".loginBlock").style, {
        display:'block',      
    });
};
document.querySelector(".closeLoginBlock img").onclick = function () {
    Object.assign(document.querySelector(".loginBackground").style, {
        'animation-name': 'backgroundefffect2',
        visibility: 'hidden',      
    });
    Object.assign(document.querySelector(".loginBlock").style, {
        display:'none',
    });
};
var loginBackgroundClickState = 1
document.querySelector('.loginBlock').onclick = function(){
    loginBackgroundClickState = 0
}
document.querySelector('.loginBackground').onclick = function(){
    if(loginBackgroundClickState === 1){
        Object.assign(document.querySelector(".loginBackground").style, {
            'animation-name': 'backgroundefffect2',
            visibility: 'hidden',      
        });
        Object.assign(document.querySelector(".loginBlock").style, {
            display:'none',
        });
    }
    loginBackgroundClickState = 1
}
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
kiemTra()
function kiemTra(){
document.addEventListener('DOMContentLoaded', function () {
    Validator({
        form: '#form-2',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email2'),
            Validator.minLength('#password2', 6),
            Validator.isRequired('#password_confirmation'),
            Validator.isConfirmed('#password_confirmation', function () {
                return document.querySelector('#form-2 #password2').value;
            }, 'Mật khẩu nhập lại không chính xác')
        ],
        onSubmit: function (data) {
            // Console.log ra dữ liệu đã nhập vào from đăng kí
            console.log(data);
        }
    });


    Validator({
        form: '#form-1',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email1'),
            Validator.isRequired('#password1'),
            Validator.minLength('#password1', 6),
        ],
        onSubmit: function (data) {
            // Console.log ra dữ liệu đã nhập vào from đăng nhập
            console.log(data);
        }
    });
});
}

showPassword1()
function showPassword1(){
var showPasswordState = 0
document.querySelector(".showPassword .password1").onclick = function(){
    if(showPasswordState === 0 ){
    document.querySelector(".showPassword .password1").setAttribute('src','./asset/img/show.png')
    document.querySelector(".showPassword #password1").setAttribute('type','text')
    showPasswordState = 1;
    }
    else{
    document.querySelector(".showPassword .password1").setAttribute('src','./asset/img/hide.png')
    document.querySelector(".showPassword #password1").setAttribute('type','password')
    showPasswordState = 0;
    }
}
}
showPassword2()
function showPassword2(){
var showPasswordState = 0
document.querySelector(".showPassword .password2").onclick = function(){
    if(showPasswordState === 0 ){
    document.querySelector(".showPassword .password2").setAttribute('src','./asset/img/show.png')
    document.querySelector(".showPassword #password2").setAttribute('type','text')
    showPasswordState = 1;
    }
    else{
    document.querySelector(".showPassword .password2").setAttribute('src','./asset/img/hide.png')
    document.querySelector(".showPassword #password2").setAttribute('type','password')
    showPasswordState = 0;
    }
}
}
showPassword3()
function showPassword3(){
var showPasswordState = 0
document.querySelector(".showPassword .password_confirmation").onclick = function(){
    if(showPasswordState === 0 ){
    document.querySelector(".showPassword .password_confirmation").setAttribute('src','./asset/img/show.png')
    document.querySelector(".showPassword #password_confirmation").setAttribute('type','text')
    showPasswordState = 1;
    }
    else{
    document.querySelector(".showPassword .password_confirmation").setAttribute('src','./asset/img/hide.png')
    document.querySelector(".showPassword #password_confirmation").setAttribute('type','password')
    showPasswordState = 0;
    }
}
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
       } else {
           errorElement.innerText = "";
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
                        return (values[input.name] = input.value) && values
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
               };
   }})}
}

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
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

Validator.isEmail = function (selector, message) {
   return {
       selector: selector,
       test: function (value) {
           var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           return regex.test(value)
               ? undefined
               : message || "Trường này phải là email";
       },
   };
};

Validator.minLength = function (selector, min, message) {
   return {
       selector: selector,
       test: function (value) {
           return value.length >= min
               ? undefined
               : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
       },
   };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
   return {
       selector: selector,
       test: function (value) {
           return value === getConfirmValue()
               ? undefined
               : message || "Giá trị nhập vào không chính xác";
       },
   };
};
