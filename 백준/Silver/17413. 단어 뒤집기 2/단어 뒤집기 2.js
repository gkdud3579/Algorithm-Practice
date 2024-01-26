const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  console.log(reverseWords(input));
  rl.close();
});

function reverseWords(str) {
    let result = '';
    let word = '';
    let isTag = false;

    for (let char of str) {
        if (char === '<') {
            isTag = true;
            result += word.split('').reverse().join('') + char;
            word = '';
        } else if (char === '>') {
            isTag = false;
            result += char;
        } else if (isTag) {
            result += char;
        } else {
            if (char === ' ') {
                result += word.split('').reverse().join('') + char;
                word = '';
            } else {
                word += char;
            }
        }
    }
    return result + word.split('').reverse().join('');
}
