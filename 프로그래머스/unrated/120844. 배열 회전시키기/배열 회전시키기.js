function solution(numbers, direction) {
    if (direction === "left") {
        // 왼쪽으로 회전: 첫 번째 원소를 마지막으로 이동
        const firstElement = numbers.shift();
        numbers.push(firstElement);
    } else if (direction === "right") {
        // 오른쪽으로 회전: 마지막 원소를 첫 번째로 이동
        const lastElement = numbers.pop();
        numbers.unshift(lastElement);
    }

    return numbers;
}
