var bills = [
    124,
    48,
    268
];
// debugger;
function bonusMoney(bill){
    var percent;
    if(bill < 50){
        percent = 0.2;
    } else if(bill <=200){
        percent = 0.15;
    } else{
        percent = 0.1;
    }
    return percent * bill;
}

var showBonusMoney = [
    bonusMoney(bills[0]),
    bonusMoney(bills[1]),
    bonusMoney(bills[2])
];

console.log(showBonusMoney);

//cách 2: Tạo một mảng rỗng xong dùng hàm push để đẩy tham số vào mảng

var showBonus = [];
showBonus.push(bonusMoney(bills[0]));
showBonus.push(bonusMoney(bills[1]));
showBonus.push(bonusMoney(bills[2]));

console.log(showBonus);

//cách 3:

var showBonus2 = [];
showBonus2[showBonus2.length] = bonusMoney(bills[0]);
showBonus2[showBonus2.length] = bonusMoney(bills[1]);
showBonus2[showBonus2.length] = bonusMoney(bills[2]);

console.log(showBonus2);

var allMoney = [
    bills[0] + showBonus[0],
    bills[1] + showBonus[1],
    bills[2] + showBonus[2]
];

console.log(allMoney);