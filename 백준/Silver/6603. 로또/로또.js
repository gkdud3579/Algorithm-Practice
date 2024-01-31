const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findCombinations(arr, path = [], start = 0) {
  if (path.length === 6) {
    console.log(path.join(' '));
    return;
  }

  for (let i = start; i < arr.length; i++) {
    findCombinations(arr, [...path, arr[i]], i + 1);
  }
}

let input = [];
rl.on('line', function (line) {
  if (line === '0') {
    rl.close();
  } else {
    input.push(line.split(' ').map(Number).slice(1));
  }
}).on('close', function () {
  input.forEach(arr => {
    findCombinations(arr);
    console.log('');
  });
  process.exit();
});
