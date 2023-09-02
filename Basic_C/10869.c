//https://www.acmicpc.net/problem/10869

#include <stdio.h>

int main(void)
{
    int A, B;

    scanf("%d %d", &A, &B);

    printf("%d\n", A + B);
    printf("%d\n", A - B);
    printf("%d\n", A * B);

    if (B == 0)
    {
        printf("Cannot divide by zero.\n");
    }
    else
    {
        printf("%d\n", A / B);
        printf("%d\n", A % B);
    }

    return 0;
}
