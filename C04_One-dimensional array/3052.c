//https://www.acmicpc.net/problem/3052

#include <stdio.h>

int main()
{
    int num[10];
    int remainders[42] = {0};

    for(int i = 0; i < 10; i++)
    {
        scanf("%d", &num[i]);
        int remainder = num[i] % 42;
        remainders[remainder] = 1;
    }

    int uniqueCount = 0;
    for(int i = 0; i < 42; i++)
    {
        if(remainders[i] == 1)
            uniqueCount++;
    }

    printf("%d\n", uniqueCount);

    return 0;
}