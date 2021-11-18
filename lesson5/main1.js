function calBMI() {
    var mass = this.mass;
    var height = this.height;

    return mass / (height * height);
}

var mark = {
    name: 'Mark',
    mass: 65,
    height: 1.75,
    BMI: calBMI
};

console.log('BMI của Mark là: ', mark.BMI());

var john = {
    name: 'John',
    mass: 75,
    height: 1.80,
    BMI: calBMI
};


console.log('BMI của John là: ', john.BMI());

if (mark.BMI() > john.BMI()) {
    console.log('BMI của Mark lớn hơn của John');
} else if (mark.BMI() < john.BMI()) {
    console.log('BMI của John lớn hơn của Mark');
} else {
    console.log('Hai người bằng nhau!')
}