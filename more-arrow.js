const add = (number1, number2) => number1 + number2;
// console.log(add(10 , 20));

const fullName = (firstName, lastName) => firstName + " " + lastName;
// console.log(fullName('karim','rahman'));

const multi = (number1, number2) => number1 * number2;
// console.log(multi(10 , 20));

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
// console.log(addAll(5, 5, 5, 5, 5, 5));

// no parameter arrow function
const getPie = () => 3.1416;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = (num) => num * 5;

const doMath = (x , y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const total = firstSum + secondSum;
    const multi = total / 2;
    return multi;
}



