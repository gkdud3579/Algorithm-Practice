//https://www.acmicpc.net/problem/2588

#include <stdio.h>

int main (void)
{
    int num1, num2;

    scanf("%d", &num1);
    scanf("%d", &num2);

    int result;
    result = num1 * num2;

    int step1, step2, step3;
    step1 = num1 * (num2 % 10); //1의 자리
    step2 = num1 * ((num2 / 10) % 10); //10의 자리
    step3 = num1 * (num2 / 100); //100의 자리

    printf("%d\n", step1);
    printf("%d\n", step2);
    printf("%d\n", step3);
    printf("%d\n", result);

    return 0;
}