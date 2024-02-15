const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const n = parseInt(input[0]); // 전체 사람 수
  const [person1, person2] = input[1].split(' ').map(Number); // 촌수를 계산할 두 사람
  const m = parseInt(input[2]); // 부모 자식간의 관계 수
  const relationships = input.slice(3, 3 + m).map(relation => relation.split(' ').map(Number));

  const graph = Array.from(Array(n + 1), () => []);
  relationships.forEach(([parent, child]) => {
    graph[parent].push(child);
    graph[child].push(parent); // 양방향으로 관계 설정
  });

  function dfs(current, target, visited = new Set(), count = 0) {
    if (current === target) return count;
    visited.add(current);

    for (let next of graph[current]) {
      if (!visited.has(next)) {
        const result = dfs(next, target, visited, count + 1);
        if (result !== undefined) return result;
      }
    }
  }

  const result = dfs(person1, person2);
  console.log(result !== undefined ? result : -1);
  process.exit();
});
