const car = {
  model: "bmw",
  hp: 1200,
  color : 'white',
  gearbox : 'manual'
};

// const model = car.model;
// console.log(model);

const {model} = car;
// console.log(model);

const {color} = car;
// console.log(color);

// ----------- array destructuring--------------
const [first, second] = [11, 22, 33, 44];
// console.log(first, second);

const numbers = [11, 22, 33, 44, 55, 66];
const [fst, scnd, thrd, frth] = numbers;
console.log(frth);

function getNames(){
    return [ 'jimmy', 'tommy'];
}
const [cat, dog] = getNames();
console.log(dog, cat);
