var img = "https://cdn.pixabay.com/photo/2017/05/12/09/26/bra-2306600_960_720.jpg";

// truy xuất vào thẻ img bằng class
var image = document.querySelector('.image');



//thay đổi thuộc tính có sẵn
// get-> lấy dữ liệu
// set-> thiết lập dữ liệu


//SET
image.setAttribute("src", img);
image.setAttribute("alt", "Đây là ngực");
image.setAttribute("width", 300); // có thể truyền vào một thuộc tính mới mà ban đầu vốn dĩ chưa có
image.setAttribute("title", "Tiêu đề của hình ảnh"); // có thể truyền vào một thuộc tính mới mà ban đầu vốn dĩ chưa có

//GET
var elementDataTitle = Array.from(document.querySelectorAll('[data-title]'));

var temp = '';
console.log('Temp ban đầu là: ', temp);
for (let index = 0; index < elementDataTitle.length; index++) {
    // console.log(elementDataTitle[index], index); // in ra các phần tử trong mảng elementDataTitle
    temp += elementDataTitle[index].getAttribute('data-title') + ' ';
    
}
console.log('Temp mới là: ' , temp);

// nối hai thuộc tính data-title của div xomg truyền vào thẻ div bên trên có id là demo
document.getElementById('demo').setAttribute('data-title', temp.trim()); // hàm trim sẽ cắt đi khoảng trắng ở đầu chuỗi và cuối chuỗi
// console.log(elementDataTitle);

console.log(image);

// truy xuất tên class của thẻ img
console.log('class của thẻ img là: ', image.getAttribute('class'));
