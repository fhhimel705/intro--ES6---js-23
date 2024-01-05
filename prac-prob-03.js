const numbers = [1, 2, 3, 4, 5, 6, 7];

const avrg = (numbers) => {
    let sum = 0;
    for(i=0; i<numbers.length; i++){
        const number = numbers[i];
        const sqr = Math.pow(number, 2);
        sum = sum + sqr;
    }
    const avg = sum/numbers.length;
    return avg;
}
console.log(avrg(numbers));