//https://www.acmicpc.net/problem/10810

#include <stdio.h>

int main()
{
    int N, M;
    scanf("%d %d", &N, &M);

    int baskets[101] = {0};

    for(int m = 0; m < M; m++)
    {
        int i, j, k;
        scanf("%d %d %d", &i, &j, &k);

        for(int b = i; b <= j; b++)
            baskets[b] = k;
    }
    
}