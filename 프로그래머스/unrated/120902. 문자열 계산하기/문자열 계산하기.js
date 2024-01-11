function solution(my_string) {
    let elements = my_string.split(' ');
    let result = parseInt(elements[0]);

    for (let i = 1; i < elements.length; i += 2) {
        let operator = elements[i];
        let nextNum = parseInt(elements[i + 1]);

        if (operator === '+') {
            result += nextNum;
        } else if (operator === '-') {
            result -= nextNum;
        }
    }

    return result;
}
