//https://www.acmicpc.net/problem/10872

#include <stdio.h>

int factorial(int n) 
{
    if (n == 0 || n == 1) 
        return 1;
    else 
        return n * factorial(n - 1);
    
}

int main() 
{
    int N;
    scanf("%d", &N);

    int result = factorial(N);
    printf("%d\n", result);

    return 0;
}
