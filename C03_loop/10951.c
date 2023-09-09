//https://www.acmicpc.net/problem/10951

#include <stdio.h>

int main(void)
{
    while(1)
    {
        int A, B;
        int input_count = scanf("%d %d", &A, &B);

        if(input_count != 2 || (A == 0 && B == 0))
            break;

        printf("%d\n", A + B);
    }
    return 0;
}