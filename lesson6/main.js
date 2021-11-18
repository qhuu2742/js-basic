for (let index = 1; index <= 10; index++) {
    console.log('index: ', index);
}

var info = [
    'Hữu',
    22,
    'Hust'
];

for (let index = 0; index < info.length; index++) {
    console.log('Phần tử thứ ' + (index + 1) + ' =', info[index]);
};

function calAverage() {
    this.average = (this.maths + this.art) / 2;
    return this.average;
}

var students = [
    {
        name: 'Hữu',
        maths: 10,
        art: 10
    },
    {
        name: 'Vinh',
        maths: 1,
        art: 1
    },
    {
        name: 'Quao',
        maths: 1,
        art: 9
    },
    {
        name: 'Long',
        maths: 1,
        art: 1
    }
];

for (i = 0; i < students.length; i++) {
    // console.log(students[i]);
    students[i].calAverage = calAverage;
    students[i].calAverage();
}

console.log(students);

console.log('------------------------------------------------');

// bài toán là tính điểm trung bình của sinh viên, nhưng mỗi sinh viên sẽ có số lượng môn khác nhau
// cách giải quyết đó là tạo một function tính điểm trung bình, tính được tổng số môn và tổng số điểm của các môn trước
var calAverage = function () {
    var total = 0; // set tổng số môn ban đầu là 0
    var totalScores = 0; //  set tổng điểm tất cả các môn ban đầu là 0
    for (key in this.scores) { // key ở đây chính là các thuộc tính trong object scores 
        total += 1;
        totalScores += this.scores[key]; // ở đây nếu code là this.scores.maths hoặc .art vân vân thì sẽ sai logic, nên ta có thể truyền vào 
        // this một chuỗi this.scores['maths'], thay chuỗi này thành key như sau: this.scores[key] thì nó sẽ duyệt được tất các thông tin thay
        // vì in ra mỗi 1 thông tin của thuộc tính
        // console.log(key + '=', this.scores[key]);
    }
    // console.log('Tổng số môn là: ', total);
    // console.log('Tổng số điểm là: ', totalScores);
    return totalScores / total;
}

var studentA = {
    name: 'A',
    date: 2000,
    scores: {
        maths: 5,
        art: 8,
        english: 10
    },
    calAverage: calAverage
};

studentA.calAverage();

var studentB = {
    name: 'B',
    date: 2001,
    scores: {
        maths: 10,
        art: 8,
        english: 10,
        php: 5
    },
    calAverage: calAverage
};

console.log('Điểm trung bình của thằng A là: ', studentA.calAverage());
console.log('Điểm trung bình của thằng B là: ', studentB.calAverage());


// vòng lặp while sẽ kiểm tra điều kiện trước rồi mới thực thi code
var age = 0;
while (age <= 10) {
    console.log('bạn đủ tuổi');
    age++;
}

// do while thì sẽ thực thi 1 lần trước rồi mới kiểm tra điều kiện xem có thực thi code tiếp hay không
var i = 1;
do {
    console.log('câu lệnh đầu tiên')
} while (i <= -1);
