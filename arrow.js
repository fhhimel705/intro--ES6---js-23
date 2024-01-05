// functin declaration
function add(first , second){
    const total = first + second;
    return total;
}
// console.log(add(10 , 20));

const number = 50;
// function expression
const add02 = function add02(first , second){
    const total = first + second;
    return total;
}
// function expression with anonymous function
const add03 = function(first , second){
    const total = first + second;
    return total;
}

function add04(first , second){
    return first + second;
    }
// console.log(add04(10 , 20));

// ----------- arrow function ------------------
const add05 = (first , second) => first + second;
// console.log(add05(10 , 50));

// -------------- one parameter arrow function ----------------
const add06 = first => first * first;
// console.log(add06(10));





