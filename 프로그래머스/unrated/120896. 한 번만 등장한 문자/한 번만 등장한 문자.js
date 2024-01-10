function solution(s) {
    let charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let singleChars = Object.keys(charCount).filter(char => charCount[char] === 1);
    singleChars.sort();

    return singleChars.join('');
}
