var firstName = 'hữu';
var age = 22;

console.log('Tên của tôi là', firstName);
console.log('Tôi', age, 'tuổi');

console.log(firstName + '' + age); //ép kiểu dữ liệu, khi ta nối chuỗi như này thì biến age đang ở dạng number sẽ thành string

var isMale;
isMale = false;

console.log(isMale);

age = 'hai mươi hai'; //đột biến dữ liệu, ở bên trên ta khai báo age là number, nhưng bên dưới ta vẫn có thể thay đổi kiểu dữ liệu của age về string

//alert('Bạn tên là ' + firstName + ' và bạn ' + age + ' tuổi');

// Toán tử typeof -> dùng để xác định kiểu dữ liệu của biến tại thời điểm đó

console.log('Kiểu dữ liệu của age là: ', typeof age);

// Toán tử so sánh -> tất cả các toán tử so sánh đều trả về true hoặc false

var mass, height;
mass = 65;
height = 1.78;

var BMI = mass/(height*height);

var mass1, height1;
mass1 = 70;
height1 = 1.81;

var BMI1 = mass/(height*height);

console.log('BMI là: ', BMI);
console.log('BMI1 là: ', BMI1);

console.log("BMI có lớn hơn BMI1? ", BMI > BMI1);