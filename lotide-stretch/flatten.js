const assertArraysEqual = function(equalArrays) {
  if (equalArrays) {
    console.log(`👌 👌 👌 Arrays are equal!`);
  } else {
    console.log(`☠️  ☠️  ☠️   Arrays are not equal.`);
  }
};

const eqArrays = function(array1, array2) {
  //check length
  if (array1.length !== array2.length) {
    return false
  }
  //loop through
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  //return true if no conflicts
  return true;
  
};


const flatten = function(arr) {
  let flatArr = []
  for (const item of arr) {
    if (Array.isArray(item)){
      for (const num of item) {
        flatArr.push(num);
      }
    } else {
      flatArr.push(item);
    }
  }
  console.log(flatArr)
  return flatArr;
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]













module.exports = eqArrays;
module.exports = assertArraysEqual;

