// year là tham số
// debugger; 

// cách khai báo function 1
function tinhTuoi(year){
    return 2021 - year;
}

var result = tinhTuoi(2000);
console.log(result);

// cách khai báo function 2
var tinhTuoi = function(year){
    return 2021 - year;
}

var result = tinhTuoi(2005);
console.log(result); 

// cách khai báo function 3 - arrow function
var tinhTuoi = (year) => {
    return 2021 - year;
}

var result = tinhTuoi(2003);
console.log(result); 

function showProfile(id, studentName){
    switch (studentName) {
        case 'Hữu':
            console.log('Sinh viên ' + studentName + ' có id là ' + id);
            break;
        case 'Vinh':
            console.log('Sinh viên ' + studentName + ' có id là ' + id);
            break;    
    
        default:
            console.log('Sinh viên Giang');
            break;
    }
}

showProfile(1, 'Hữu');
showProfile(2, 'Vinh');
showProfile(3, '');
