function solution(chicken) {
    var answer = 0;

    while (chicken >= 10) {
        // 서비스 치킨 받기
        answer += Math.floor(chicken / 10);
        // 남은 치킨(서비스 치킨 포함)과 쿠폰 합산
        chicken = Math.floor(chicken / 10) + (chicken % 10);
    }

    return answer;
}
