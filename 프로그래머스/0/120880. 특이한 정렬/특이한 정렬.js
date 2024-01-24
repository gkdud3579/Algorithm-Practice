function solution(numlist, n) {
    return numlist.sort((a, b) => {
        // 두 수와 n과의 절대적 거리를 계산
        const distanceA = Math.abs(a - n);
        const distanceB = Math.abs(b - n);

        // 거리가 같으면 더 큰 수를 앞에 배치
        if (distanceA === distanceB) {
            return b - a;
        }

        // 거리가 다르면 더 가까운 수를 앞에 배치
        return distanceA - distanceB;
    });
}
