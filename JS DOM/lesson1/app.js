/*
Những điều mà JS DOM có thể làm được:
- Thêm hoặc xóa class.
- Thay đổi(sửa) attribute cho một phần tử.
- Thêm mới một attribute cho một phần tử.
- Bắt được sự kiện click chuột của người dùng.
- Thêm một phần tử mới gắn vào trong cấu trúc HTML.


-> Làm hiệu ứng động cho phần tử đó.
-> Phải xác định được mình áp dụng các công việc trên cho phần tử nào?

1. Học cách truy xuất phần tử bằng JS
        - truy xuất bằng id, class, tên thẻ, ...
        - truy xuất bằng selector của CSS
*/

var demoID = document.getElementById("demo"); // truy xuất bằng id sẽ trả về một phần tử html
console.log(demoID);

var demoClass = document.getElementsByClassName("demo2"); // truy xuất bằng class name sẽ trả về tập hợp phần html
console.log(demoClass);

// ở đây nó sẽ trả về HTMLCollection, nó là một đối tượng, ta cũng có thể truy xuất vào các phần tử của nó 
// nhưng bản chất của HTMLCollection không phải là mảng, nó chỉ gần giống mảng

console.log(demoClass[0]);
console.log(demoClass[1]);
console.log(demoClass[2]);
console.log(demoClass.length);

for (let index = 0; index < demoClass.length; index++) {
    console.log('Phần tử thứ ', [index], ':', demoClass[index]);

}

// nếu muốn sử dụng các methods, function của riêng mảng cho HTMLCollection thì phải ép kiểu nó về mảng
// -> dùng Array.from()

console.log(demoClass);

var demoClassArray = Array.from(demoClass);
demoClassArray.push(123);
console.log(demoClassArray);

var div = document.getElementsByTagName('div');
console.log(div);