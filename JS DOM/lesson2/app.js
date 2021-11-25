// var demoID = document.getElementById('demo');

// console.log(demoID.classList);

// demoID.classList.add("hot");
// demoID.classList.add('yumi', 'mikami');
// demoID.classList.remove('yumi', 'mikami');
// demoID.style.backgroundColor = "red";
// demoID.style.position = "relative";
var dropdownList = Array.from(document.querySelectorAll('.dropdown'));

dropdownList.forEach(
    function (el, index) { // ở đây el = từng phần tử, index là chỉ số thứ tự các phần tử trong mảng
        var btn = el.querySelector('.btn');

        btn.addEventListener('click', function (event) {
            if (el.classList.value.indexOf('open') === -1) {
                el.classList.add('open');
            } else {
                el.classList.remove('open');
            }
        });
    }
)


// child - con
// parent - cha
// sibling - anh chi em - chung parent

// var container = document.querySelector('.container');
// console.log(container.parentElement.parentElement.querySelector('.demo2').nextElementSibling);
// console.log(container.parentElement.parentElement.querySelector('.demo2').previousElementSibling);

var h1 = document.querySelector('h1');
h1.innerText = 'Huu dep trai'; // set 1 gia tri moi 
console.log(h1);
console.log('truy xuất nội dung của thẻ h1: ', h1.innerText);

h1.innerHTML = '<p>Hữu đẹp trai</p>';

console.log('truy xuất nội dung của thẻ h1: ', h1.innerText);
