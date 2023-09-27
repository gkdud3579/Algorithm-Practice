//https://www.acmicpc.net/problem/2420

#include <stdio.h>
#include <stdlib.h>

int main() 
{
    long long N, M;
    if (scanf("%lld %lld", &N, &M) != 2) 
    {
        printf("입력 형식이 잘못되었습니다.\n");
        return 1;
    }

    long long difference = llabs(N - M);

    printf("%lld\n", difference);

    return 0;
}
