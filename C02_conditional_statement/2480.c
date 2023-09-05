//https://www.acmicpc.net/problem/2480

#include <stdio.h>

int main(void)
{
    int dice[3];

    scanf ("%d %d %d", &dice[0], &dice[1], &dice[2]);

    int prize;
    
    if(dice[0] == dice[1] && dice[1] == dice[2])
        prize = dice[0] * 1000 + 10000;
    else if(dice[0] == dice[1] || dice[1] == dice[2] || dice[0] == dice[2])
    {
        if(dice[0] == dice[1])
            prize = dice[0] * 100 + 1000;
        else if(dice[1] == dice[2])
            prize = dice[1] * 100 + 1000;
        else
            prize = dice[0] * 100 + 1000;
    }
    else
    {
        if(dice[0] > dice[1] && dice[0] > dice[2])
            prize = dice[0] * 100;
        else if(dice[1] > dice[0] && dice[1] > dice[2])
            prize = dice[1] * 100;
        else
            prize = dice[2] * 100;
    }
    
    printf("%d\n", prize);

    return 0;
}
