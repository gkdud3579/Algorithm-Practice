function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = '';

    for (let char of my_string) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }

    return result;
}
