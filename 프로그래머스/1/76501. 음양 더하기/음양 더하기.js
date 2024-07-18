function solution(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            sum += absolutes[i]; // signs[i]가 true인 경우 양수로 더함
        } else {
            sum -= absolutes[i]; // signs[i]가 false인 경우 음수로 뺌
        }
    }
    return sum;
}