//https://www.acmicpc.net/problem/10872

#include <stdio.h>

int main() 
{
    int N;
    scanf("%d", &N);

    int result = 1;
    for (int i = 2; i <= N; i++)
        result *= i;

    printf("%d\n", result);

    return 0;
}
