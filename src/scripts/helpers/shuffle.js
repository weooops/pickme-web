export default arr => {
  let ctr = arr.length;

  while (ctr > 0) {
    const index = Math.floor(Math.random() * ctr);

    ctr--;

    const temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

// TEST
// const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(myArray));
