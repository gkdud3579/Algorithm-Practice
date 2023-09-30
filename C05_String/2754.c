//https://www.acmicpc.net/problem/2754

#include <stdio.h>

int main() 
{
    char grade[3];
    double score;

    scanf("%s", grade);

    if (grade[0] == 'A') 
    {
        if (grade[1] == '+') 
        {
            score = 4.3;
        } else if (grade[1] == '0') 
        {
            score = 4.0;
        } else {
            score = 3.7;
        }
    } else if (grade[0] == 'B') 
    {
        if (grade[1] == '+') 
        {
            score = 3.3;
        } else if (grade[1] == '0') 
        {
            score = 3.0;
        } else {
            score = 2.7;
        }
    } else if (grade[0] == 'C') 
    {
        if (grade[1] == '+') 
        {
            score = 2.3;
        } else if (grade[1] == '0') 
        {
            score = 2.0;
        } else {
            score = 1.7;
        }
    } else if (grade[0] == 'D') 
    {
        if (grade[1] == '+') 
        {
            score = 1.3;
        } else if (grade[1] == '0') 
        {
            score = 1.0;
        } else {
            score = 0.7;
        }
    } else 
    {
        score = 0.0;
    }

    printf("%.1lf\n", score);

    return 0;
}
