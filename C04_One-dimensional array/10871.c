//https://www.acmicpc.net/problem/10871

#include <stdio.h>

int main(void)
{
    int N, X;
    scanf("%d %d", &N, &X);

    for(int i = 0; i < N; i++)
    {
        int num;
        scanf("%d", &num);

        if(num < X)
            printf("%d", num);
    }
    return 0;
}