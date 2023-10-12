//https://www.acmicpc.net/problem/2903

#include <stdio.h>
#include <math.h>

int main(){
    int n;
    scanf("%d", &n);

    long long result = (long long)pow(pow(2, n) + 1, 2);
    printf("%lld\n", result);

    return 0;
}