function solution(my_string) {
    let numbers = my_string.split('').filter(char => !isNaN(char) && char !== ' ');

    return numbers.map(Number).sort((a, b) => a - b);
}
