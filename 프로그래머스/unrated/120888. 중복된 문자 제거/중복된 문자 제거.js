function solution(my_string) {
    return Array.from(my_string)
        .filter((char, index, self) => self.indexOf(char) === index)
        .join('');
}
