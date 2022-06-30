let argv = process.argv.slice(2);

const pigLatinTranslator = function(str) {
  let arr = [];

  for (let word of str) {
    arr.push(word.substring(1) + word[0] + 'ay')
  }

  const latinArr = arr.forEach((e) => console.log(e))
  
  return latinArr;
};

pigLatinTranslator(argv);