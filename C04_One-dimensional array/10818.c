//https://www.acmicpc.net/problem/10818

#include <stdio.h>

int main()
{
    int N;
    scanf("%d", &N);

     int min = 1000000;
    int max = -1000000;
    
    for(int i = 0; i < N; i++)
    {
        int num;
        scanf("%d", &num);

        if(num < min)
            min = num;
        if(num > max)
            max = num;
    }

    printf("%d %d\n", min, max);

    return 0;
}