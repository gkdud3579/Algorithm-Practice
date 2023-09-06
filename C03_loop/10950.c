//https://www.acmicpc.net/problem/10950

#include <stdio.h>

int main(void)
{
    int T;
    scanf("%d", &T);

    for(int i = 0; i < T; i++;)
    {
        int A, B;
        scanf("%d %d", &A, &B);

        int result = A + B;
        printf("%d\n", result);
    }

    return 0;
}