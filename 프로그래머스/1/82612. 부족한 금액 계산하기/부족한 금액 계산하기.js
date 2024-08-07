function solution(price, money, count) {
    // 총 비용을 계산하기 위한 변수 초기화
    let totalCost = 0;

    // 놀이기구를 count번 타는 동안의 총 비용 계산
    for (let i = 1; i <= count; i++) {
        totalCost += price * i;
    }

    // 부족한 금액 계산
    let shortage = totalCost - money;

    // 부족한 금액이 없으면 0을 반환, 있으면 부족한 금액을 반환
    return shortage > 0 ? shortage : 0;
}