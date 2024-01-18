function solution(keyinput, board){
    let x = 0, y = 0;
    let maxX = Math.floor(board[0] / 2);
    let maxY = Math.floor(board[1] / 2);
    
    //키 값에 따라 배열 이동
    keyinput.forEach(key => {
        if(key === "up" && y < maxY) y++;
        else if(key === "down" && y > -maxY) y--;
        else if(key === "left" && x > -maxX) x--;
        else if(key === "right" && x < maxX) x++;
    });
    return [x, y];
}