//https://www.acmicpc.net/problem/25314

#include <stdio.h>

int main(void)
{
    int N;
    scanf("%d", &N);

    if (N % 4 == 0)
    {
        for(int i = 0; i < N / 4; i++)
            printf("long");
        printf("int\n");
        else
            printf("No solution\n")
    }

    return 0;
}