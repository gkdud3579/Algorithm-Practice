//https://www.acmicpc.net/problem/2562

#include <stdio.h>

int main()
{
    int max = 0;
    int position = 0;

    for(int i = 1; i <= 9; i++)
    {
        int num;
        scanf("%d", &num);

        if(num > max)
        {
            max = num;
            position = i;
        }
    }

    printf("%d\n%d\n", max, position);

    return 0;
}