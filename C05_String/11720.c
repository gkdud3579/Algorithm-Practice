//https://www.acmicpc.net/problem/11720

#include <stdio.h>

int main()
{
    int N;
    scanf("%d", &N);

    int sum = 0;
    for(int i = 0; i < N; i++)
    {
        char digit;
        scanf(" %c", &digit);
        int number = digit - '0';
        sum += number;
    }

    printf("%d\n", sum);

    return 0;
}