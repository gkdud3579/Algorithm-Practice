function solution(i, j, k) {
    const kStr = k.toString();
    return Array.from({length: j - i + 1}, (_, idx) => i + idx)
        .map(String)
        .join('')
        .split(kStr)
        .length - 1;
}
