//https://www.acmicpc.net/problem/10952

#include <stdio.h>

int main(void)
{
    while (1)
    {
        int A, B;
        scanf("%d %d", &A, &B);

        if(A == 0 && B == 0)
            break;
    
        printf("%d\n", A + B);
    }

    return 0;
}