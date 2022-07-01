const argv = process.argv.slice(2);

const passwordScramblerThing = function(str) {
  let newStr = '';

  for (let char of str[0].split('')) {
    if (char === 'a') {
      char = '4';
    }

    if (char === 'e') {
      char = '3';
    }

    if (char === 'o') {
      char = '0';
    }

    if (char === 'l') {
      char = '1';
    }

    newStr += char;
    
  }

  console.log(newStr)
  return(newStr);
}

passwordScramblerThing(argv);