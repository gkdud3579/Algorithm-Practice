function solution(my_string) {
    return my_string.match(/\d/g).reduce((ac, cur) => ac + Number(cur), 0);
}
