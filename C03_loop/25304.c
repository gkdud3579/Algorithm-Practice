//https://www.acmicpc.net/problem/25304

#include <stdio.h>

int main(void)
{
    int X;
    scanf("%d", &X);
    
    int N;
    scanf("%d", &N);

    int total = 0;

    for(int i = 0; i < N; i++)
    {
        int a, b;
        scanf("%d %d", &a, &b);

        total += a * b;
    }

    if(total == X)
        printf("Yes\n");
    else
        printf("No\n");

    return 0;
}