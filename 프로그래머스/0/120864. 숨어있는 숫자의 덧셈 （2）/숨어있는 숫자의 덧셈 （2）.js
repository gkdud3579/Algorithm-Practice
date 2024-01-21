function solution(my_string) {
    let num = my_string.match(/\d+/g) || [];
    let sum = num.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    return sum; 
}