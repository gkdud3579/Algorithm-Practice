const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N = 0;
const S = [];
let lineCount = 0;

rl.on('line', (line) => {
  if (N === 0) {
    N = parseInt(line);
  } else {
    S.push(line.split(' ').map(Number));
    lineCount++;
    if (lineCount === N) {
      console.log(calculateMinDifference(N, S));
      rl.close();
    }
  }
}).on('close', () => {
  process.exit();
});

function calculateMinDifference(N, S) {
    let minDifference = Number.MAX_SAFE_INTEGER;
    const team = new Array(N).fill(false);

    function backtrack(index, count) {
        if (count === N / 2) {
            const startTeam = [], linkTeam = [];
            for (let i = 0; i < N; i++) {
                if (team[i]) startTeam.push(i);
                else linkTeam.push(i);
            }

            const startAbility = calculateTeamAbility(startTeam, S);
            const linkAbility = calculateTeamAbility(linkTeam, S);
            minDifference = Math.min(minDifference, Math.abs(startAbility - linkAbility));
            return;
        }

        for (let i = index; i < N; i++) {
            team[i] = true;
            backtrack(i + 1, count + 1);
            team[i] = false;
        }
    }

    backtrack(0, 0);
    return minDifference;
}

function calculateTeamAbility(team, S) {
    let ability = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = i + 1; j < team.length; j++) {
            ability += S[team[i]][team[j]] + S[team[j]][team[i]];
        }
    }
    return ability;
}
