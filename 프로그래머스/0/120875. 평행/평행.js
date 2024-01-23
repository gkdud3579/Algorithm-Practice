function solution(dots) {
    const slope = (p1, p2) => (p2[1] - p1[1]) / (p2[0] - p1[0]);
    
    let slope1 = slope(dots[0], dots[1]);
    let slope2 = slope(dots[2], dots[3]);
    
    if(slope1 === slope2)
        return 1;
    
    slope1 = slope(dots[0], dots[2]);
    slope2 = slope(dots[1], dots[3]);
    if(slope1 === slope2)
        return 1;
    
    slope1 = slope(dots[0], dots[3]);
    slope2 = slope(dots[1], dots[2]);
    if(slope1 === slope2)
        return 1;
    
    return 0;
}