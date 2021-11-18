// có 3 dạng làm tròn trong js

// làm tròn xuống -> Math.floor()
// làm tròn lên -> Math.ceil()
// làm tròn theo quy tắc lấy mốc 0.5 làm chuẩn -> Math.round()


// ở đây ta truyển vào hai tham số đó là n: độ dài của mảng hay còn gọi là số phần tử trong bill
// tham số thứ 2 là max: khoảng random từ 0 -> max, như ở dưới là ramdom từ 0 -> 500
function randomArray(n, max) {
    var array = [];
    for (let index = 1; index < n; index++) {
        var num = Math.random() * max;
        num = Math.ceil(num);
        array.push(num);
    }
    return array;
}

// var bills = randomArray(5, 500);
// console.log(bills);

var calBonus = function () {
    this.bonus = [];
    this.allMoney = [];
    var length = this.bills.length;

    for (let index = 0; index < length; index++) {
        var percent;
        var bill = this.bills[index];
        if (bill < 50) {
            percent = 0.2;
        } else if (bill <= 200) {
            percent = 0.15;
        } else {
            percent = 0.1;
        }
        this.bonus[index] = percent * bill;
        this.allMoney[index] = this.bonus[index] + this.bills[index];

    }
}

var john = {
    name: 'john',
    bills: randomArray(6, 500),
    calBonus: calBonus
};

john.calBonus();
console.log(john);