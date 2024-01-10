function solution(my_string, num1, num2) {
    let chars = Array.from(my_string);
    return chars.map((char, index) => {
        if (index === num1) return chars[num2];
        if (index === num2) return chars[num1];
        return char;
    }).join('');
}
