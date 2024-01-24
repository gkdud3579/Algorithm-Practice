function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const distanceA = Math.abs(a - n);
        const distanceB = Math.abs(b - n);
        
        if(distanceA === distanceB)
            return b - a;
        else
            return distanceA - distanceB;
    });
}