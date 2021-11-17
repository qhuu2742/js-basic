var myInfo = [
    'Hữu',
    'Frontend Dev',
    22,
    'Hữu',
    false
];

console.log(myInfo);
//Một số hàm trong mảng:
// Push() => Thêm phần tử mới vào cuối mảng
myInfo.push('Backend PHP');
console.log(myInfo);

// unshift() => Thêm phần tử vào vị trí đầu của mảng
myInfo.unshift('Phạm', 'Quang');
console.log(myInfo);

// Xóa phần tử cuối cùng trong mảng
myInfo.pop();
console.log(myInfo);

// Xóa phần tử đầu trong mảng
myInfo.shift();
console.log(myInfo);

// indexOf() => tìm vị trí xuất hiện đầu tiên của một phần tử,
// kiếm tra xem phần tử đó có tồn tại trong mảng hay không, có thì trả về vị trí của nó trong mảng, còn không thì trả về -1
console.log(myInfo.indexOf('Hữu'));

// lastIndexOf() => tìm vị trí xuất hiện cuối cùng của một phần tử, ví dụng mảng có hai phần tử trùng nhau thì nó sẽ trả về
// phần tử sau cùng, nếu như indexOf và lastIndexOf trả về cùng một giá trị, thì phần tử đó là duy nhất trong mảng
console.log(myInfo.lastIndexOf('Hữu'));

