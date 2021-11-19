// Truy xuất phần tử bằng Selector của CSS
// Yêu cầu phải nắm rõ phần Selector của CSS như là:
// #demo {}
// .classDemo{}
// Attribute Selector

// Có thể sử dụng cách này để thay thế cho việc truy xuất trong app.js

// document.getElementsByTagName
// document.getElementById
// document.getElementsByClassName

// querySelector() -> trả về cho mình một phần tử đầu tiên khớp với selector

// querySelectorAll() -> trả về tất cả phần tử khớp với Selector 

// Lưu ý: giá trị trả về cũng không phải là mảng, nên muốn nó là mảng thì làm tương tự là ép kiểu nó thành kiểu mảng

var demoId = document.querySelector('#demo');
console.log(demoId);

var demoClass = document.querySelectorAll('.demo2');
console.log(demoClass);

//ép kiểu về mảng:
console.log(Array.from(demoClass));

var buttonModal = document.querySelector("[data-toggle='modal']");
console.log(buttonModal);