//https://www.acmicpc.net/problem/2908

#include <stdio.h>

int main()
{
    int A, B;
    scanf("%d %d", &A, &B);

    int reversedA = (A % 10) * 100 + ((A / 10) % 10) * 10 + (A / 100);
    int reversedB = (B % 10) * 100 + ((B / 10) % 10) * 10 + (B / 100);

    if(reversedA > reversedB)
        printf("%d\n", reversedA);
    else
        printf("%d\n", reversedB);

    return 0;
}