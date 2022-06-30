const argv = process.argv.slice(2);

const reverseString = function(arr) {

  for (let word of arr) {
    let newstr = ''
    for(let i = word.length - 1; i >= 0; i--) {
      newstr += word[i]
    }
    console.log(newstr)
  }
};

reverseString(argv);