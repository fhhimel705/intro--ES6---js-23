const arr1 = [11, 13, 55];
const arr2 = [66, 44, 99];

const combine = (arr1, arr2) =>{
    const combine = [...arr1, 506, ...arr2];
    // console.log(combine);
    const max = Math.max(...combine);
    console.log(max);
}
combine(arr1, arr2);