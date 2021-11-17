// Array & Objects

// cách khai báo 1
var myTeam = [
    'Phạm Quang Hữu',
    'Phùng Quang Mùng',
    'Phùng Trường Cùng'
];

console.log(myTeam);
console.log('Độ dài của mảng là: ', myTeam.length);
console.log('Thằng cuối của mảng là: ',myTeam[myTeam.length -1]);

// cách khai báo 2
var myClass = new Array(
    'IT01',
    'IT02'
);

console.log(myClass);

// Lưu ý, mảng ở 1 số ngôn ngữ chỉ lưu trữ được 1 kiểu dữ liệu
// Bản chất của mảng bên JS là 1 Object

console.log(typeof myClass);

var myStat = [
    'Phạm Quang Hữu',
    'Lớp IT01',
    22,
    ['To', 'Cao']
];

console.log(myStat);
console.log('Thằng này', myStat[3][1]);