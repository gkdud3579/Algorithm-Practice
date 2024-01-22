function solution(board) {
    const n = board.length;
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let marked = Array.from(Array(n), () => Array(n).fill(0));

    function isInBoard(x, y) {
        return x >= 0 && y >= 0 && x < n && y < n;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                marked[i][j] = 1;
                directions.forEach(([dx, dy]) => {
                    const newX = i + dx;
                    const newY = j + dy;
                    if (isInBoard(newX, newY)) {
                        marked[newX][newY] = 1;
                    }
                });
            }
        }
    }

    let safeAreaCount = marked.flat().filter(x => x === 0).length;
    return safeAreaCount;
}
