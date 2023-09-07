//https://www.acmicpc.net/problem/11022

#include <stdio.h>

int main(void)
{
    int T;
    scanf("%d", &T);

    for(int i = 1; i <= T; i++)
    {
        int A, B;
        scanf("%d %d", &A, &B);
        
        int sum;
        sum = A + B;
        printf("Case #%d: %d + %d = %d\n", i, A, B, sum);
    }
    return 0;
}