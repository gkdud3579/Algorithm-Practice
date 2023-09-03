//https://www.acmicpc.net/problem/11382

#include <stdio.h>

int main(void)
{
    long long A, B, C;
    
    scanf("%lld %lld %lld", &A, &B, &C);
    
    long long result;
    result = A + B + C;

    printf("%lld\n", result);

    return 0;
}