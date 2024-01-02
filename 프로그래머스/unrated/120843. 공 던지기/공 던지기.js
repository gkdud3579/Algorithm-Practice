function solution(numbers, k) {
    // 현재 공을 가진 사람의 위치 (처음에는 0번 인덱스, 즉 1번 사람)
    let currentIndex = 0;

    // k번째까지 공을 던짐
    for (let i = 1; i < k; i++) {
        // 다음 사람의 위치: 오른쪽으로 2칸 이동
        currentIndex = (currentIndex + 2) % numbers.length;
    }

    // k번째로 공을 받는 사람의 번호 반환
    return numbers[currentIndex];
}
