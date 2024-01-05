const names = ["jimmy", "tomm", "skye", "jerry", "rose"];
const oddEven = (names) => {
  const arr = [];
  for (i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.length % 2 == 0) {
      // console.log('even');
      arr.push(name);
    }
    // else{
    //      console.log('odd');

    // }
  }
  console.log(arr);
};
oddEven(names);
