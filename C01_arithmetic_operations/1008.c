//https://www.acmicpc.net/problem/1008

#include <stdio.h>

int main(void)
{
    int A, B;

    scanf("%d %d", &A, &B);

    if (B == 0)
    {
        printf("Cannot divide by zero.\n");
    }
    else
    {
        double result = (double)A / B;
        printf("%.21f\n", result);
    }
    
    return 0;
}