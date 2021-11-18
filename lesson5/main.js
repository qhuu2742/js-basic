var student = {
    fullName: 'Pham quang huu',
    dateOfBirth: 2000,
    scores: {
        maths: 9,
        english: 10,
        art: 7
    },
    calAvverage: function(){
        
        // console.log(this); this -> con trỏ this-> trỏ tới đối tượng hiện tại
        // console.log(this.scores.maths);

        var maths = this.scores.maths;
        var english = this.scores.english;
        var art = this.scores.art;

        return (maths + english + art)/3;   
    }
};

console.log(student);
console.log('Ten cua ban la: ', student.fullName);
console.log('diem 3 mon cua ban la cua ban la: ', student.scores);
console.log('diem art cua ban la cua ban la: ', student.scores.art);

var average = student.calAvverage();
console.log('điểm trung bình là: ', average);

console.log('-----------------------------------')

// cách khai báo object thứ 2 

var team = new Object();

team.name = 'Memory';
team.scores = {
    maths: 9,
    english: 10,
    art: 7
};

// kế thừa function calAverage ở object student, không phải viết lại function như bên dưới
team.calScores = student.calAvverage;

// team.calScores = function(){
//     var maths = this.scores.maths;
//         var english = this.scores.english;
//         var art = this.scores.art;

//         return (maths + english + art)/3;   
// };

console.log(team);

// var allScores = team.calScores();
console.log('điểm trung bình là: ', team.calScores());

console.log(team['name']); // một cách truy xuất khác vào các phần tử trong 1 object

