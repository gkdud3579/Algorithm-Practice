function solution(a, b, n) {
    let totalCola = 0;
    while (n >= a) {
        // 빈 병 a개로 바꿀 수 있는 콜라의 수를 계산
        const exchangeCola = Math.floor(n / a) * b;
        totalCola += exchangeCola;

        // 콜라를 마시고 남은 빈 병의 총수를 업데이트
        n = n % a + exchangeCola;
    }
    return totalCola;
}