var age = 22;
var point = 9;

console.log('age < 20', age < 20);
console.log('age > 20', age > 20);
console.log('!(age < 20)', !(age < 20));
console.log('age > 10 && age < 30', age > 10 && age < 30);
console.log('age > 10 || age < 30', age > 10 || age < 30);

if (point == 10) {
    console.log('Bạn xuất sắc');
} else if(point <= 9 && point >=8){
    console.log('Bạn giỏi');
} else if(point <= 7 && point >= 5){
    console.log('Bạn bình thường');
} else if(point <= 4 && point >= 2){
    console.log('Bạn kém');
} else{
    console.log('Bạn đúp');
}

var job = '';

switch (job) {
    case 'dev':
        console.log('Bạn là một dev');
        break;
    case 'des':
        console.log('Bạn là một des');
        break;      
    default: 
        console.log('Bạn thất nghiệp');
        break;
}

switch (true) {
    case point <= 9 && point >=8:
        console.log('Bạn giỏi');
        break;

    default:
        console.log('Bạn đúp');
        break;
}

var team1 = [97, 134, 101];
var team2 = [97, 134, 105];
var team3 = [97, 134, 105];

var medium1 = (team1[0] + team1[1] + team1[2])/3 ;
var medium2 = (team2[0] + team2[1] + team2[2])/3 ;
var medium3 = (team3[0] + team3[1] + team3[2])/3 ;

console.log(medium1, medium2, medium3);

if (medium1 > medium2 && medium1 > medium3) {
    console.log('Đội 1 thắng');
} else if(medium2 > medium1 && medium2 > medium3) {
    console.log('Đội 2 thắng');
}else if(medium3 > medium1 && medium3 > medium2){
    console.log('Đội 3 thắng')
}else if(medium1 == medium2 && medium1 == medium3){
    console.log('Ba đội hòa nhau');
}else if(medium1 == medium2){
    console.log('Đội 1 và Đội 2 hòa');
}else if(medium1 == medium3){
    console.log('1 và 3 hòa');
}else{
    console.log('2 và 3 hòa');
}