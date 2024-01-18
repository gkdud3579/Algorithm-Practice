function solution(dots) {
    let xCoords = dots.map(dot => dot[0]);
    let yCoords = dots.map(dot => dot[1]);

    let width = Math.max(...xCoords) - Math.min(...xCoords);
    let height = Math.max(...yCoords) - Math.min(...yCoords);

    return width * height;
}
