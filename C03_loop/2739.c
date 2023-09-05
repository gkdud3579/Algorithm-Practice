//https://www.acmicpc.net/problem/2739

#include <stdio.h>

int main(void)
{
    int N;
    scanf("%d", &N);

    int i;
    i = 1;
    for(i <= 9, i++)
        printf("%d * %d = %d\n", N, i, N * i);

    return 0;
}