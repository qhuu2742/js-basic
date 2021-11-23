// function handleClick(){
//     console.log("Hello");
// }

var colorSkin = document.getElementById('color-skin'); // truy xuất thẻ link có id là color-skin

// tạo một function có khả năng thay đổi thuộc tính href trong thẻ link, khi gọi hàm ở bên button, onclick sẽ truyền vào tham số href
// sau đó hàm sẽ thay đổi giá trị của href
function changeStyleColor(href) {
    colorSkin.setAttribute('href', href);
}

var containerDiv = document.querySelector(".container");

function changeContainer(type) {
    var newClass = "container " + type; // tạo biến mới để clas không bị thay thế hoàn toàn
    containerDiv.setAttribute('class', newClass);
}

var bodyBackground = document.getElementsByTagName("body")[0];

function changeBackground(fileName) {
    if (fileName) {
        valueStyle = "background-image: url('" + fileName + "')";
        // console.log(bodyBackground, fileName, valueStyle);
        bodyBackground.setAttribute("style", valueStyle);
    } else {
        bodyBackground.setAttribute("style", '');
    }
}

var image = document.querySelector('.image');
image.setAttribute('src', 'https://www.metasrc.com/ezoimgfmt/ddragon.leagueoflegends.com/cdn/11.23.1/img/item/3047.png?ezimgfmt=rs:42x42/rscb3/ng:webp/ngcb3')
function addClass(el, className) {
    var oldClass = el.getAttribute('class');
    console.log(oldClass);

    if (oldClass) {
        // Kiếm tra xem thêm chuỗi vào class có bị trùng không, ví dụ class="image" -> thêm image vào sẽ là class="image image" là sai
        // indexOf() sẽ trả về -1 nếu phân tử ta muốn tìm không tồn tại, nên ở đây nếu indexOf của oldClass mà = -1 thì mới thêm, còn không thì không làm gì
        if (oldClass.indexOf(className) === -1) {
            var newClass = oldClass + " " + className;
            el.setAttribute('class', newClass);
        }
    } else {
        el.setAttribute('class', className);
    }
}

function removeClass(el, className) {
    /*
    Nếu có sẵn một số class rồi -> kiếm tra logic remove
        Nếu className tồn tại trong oldClass -> tiến hành xử lý tiếp logic remove
            oldClass = "demo-class abc  demo-abc"
            className = "abc"
    
            Ta phải tách oldClass thành một mảng để dễ xác định vị trị của phần tử cần xóa
            -> [demo-class, abc, demo-abc] 
            -> muốn xóa abc -> xác định vị trí của nó
            -> [demo-class, abc, demo-abc].index('abc') -> trả về 1 
            -> tiến hành xóa -> [demo-class, abc, demo-abc].splice(1, 1) -> return về cái mình đã xóa ['abc']
            -> mảng gốc sẽ thành: [demo-class, demo-abc] 
            -> chuyển ngược lại mảng gốc về chuỗi -> setAttribute()    
        Nếu className không tồn tại trong oldClass -> không làm gì
    
    Nếu không có sẵn class nào -> không làm gì    
    */
    var oldClass = el.getAttribute('class');
    if (oldClass) {
        var arrayOldClass = oldClass.split(" ");
        var indexDelete = arrayOldClass.indexOf(className);
        // console.log("Mảng cũ trước khi xóa: ", arrayOldClass);
        if(indexDelete !== -1){
            arrayOldClass.splice(indexDelete, 1);
            el.setAttribute('class', arrayOldClass.join(" "))
            // console.log("Mảng cũ sau khi xóa: ", arrayOldClass);
            // console.log("Mảng cũ sau khi xóa và chuyển về chuỗi:", arrayOldClass.join(" "));
        }
    }

}



addClass(bodyBackground, 'wrapper-content');
addClass(image, 'image1');
removeClass(image, 'image1');
removeClass(image, 'image');

console.log("------------------------------------");
/*
slice(start, end) tạo ra một mảng mới từ index start -> index end nhưng nó không làm thay đổi mảng gốc.

splice(start, deleteCount) xóa(hoặc là thêm) bao nhiêu phần tử do mình chọn tính từ vị trị index start và nó làm thay đổi mảng gốc của mình
-> sau đó nó trả về một mảng bao gồm các phần tử đã xóa

*/


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(array.splice(0, 4));
console.log(array.slice(0, 3));
console.log('mảng cũ', array);




