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
      console.log(calculateDifference(N, S));
      rl.close();
    }
  }
}).on('close', () => {
  process.exit();
});

function calculateDifference(N, S) {
    const combinations = getCombinations(Array.from({length: N}, (_, i) => i), N / 2);
    let minDifference = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < combinations.length / 2; i++) {
        const teamA = combinations[i];
        const teamB = combinations[combinations.length - 1 - i];

        const abilityA = calculateTeamAbility(teamA, S);
        const abilityB = calculateTeamAbility(teamB, S);
        const difference = Math.abs(abilityA - abilityB);

        minDifference = Math.min(minDifference, difference);
    }

    return minDifference;
}

function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map(value => [value]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map(combination => [fixed, ...combination]);
        results.push(...attached);
    });

    return results;
}

function calculateTeamAbility(team, S) {
    let ability = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = 0; j < team.length; j++) {
            if (i !== j) {
                ability += S[team[i]][team[j]];
            }
        }
    }
    return ability;
}
