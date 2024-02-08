const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N = 0;
let leftCounts = [];

rl.on('line', (line) => {
    if (N === 0) {
        N = parseInt(line);
    } else {
        leftCounts = line.split(' ').map(Number);
        rl.close();
    }
}).on('close', () => {
    console.log(lineup(N, leftCounts).join(' '));
    process.exit();
});

function lineup(N, leftCounts) {
    const lineup = Array(N).fill(0);
    for (let height = 1; height <= N; height++) {
        let space = leftCounts[height - 1];
        for (let i = 0; i < N; i++) {
            if (space === 0 && lineup[i] === 0) {
                lineup[i] = height;
                break;
            } else if (lineup[i] === 0) {
                space--;
            }
        }
    }
    return lineup;
}
