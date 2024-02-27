const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {
    console.log(countIronRodPieces(line));
    rl.close();
}).on("close", function() {
    process.exit();
});

function countIronRodPieces(input) {
    let stack = [];
    let pieces = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            stack.push('(');
        } else {
            stack.pop();
            if (input[i - 1] === '(') {
                // 레이저인 경우
                pieces += stack.length;
            } else {
                // 쇠막대기의 끝인 경우
                pieces += 1;
            }
        }
    }

    return pieces;
}
