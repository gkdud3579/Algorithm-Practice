//https://www.acmicpc.net/problem/5597

#include <stdio.h>

int main()
{
    int submitted[31] = {0};

    for(int i = 0; i < 28; i++)
    {
        int n;
        scanf("%d", &n);
        submitted[n] = 1;
    }

    int missing1 = 0; int missing2 = 0;
    for(int i = 1; i <= 30; i++)
    {
        if(submitted[i] == 0)
        {
            if(missing1 == 0)
                missing1 = i;
            else
                missing2 = i;
                break;
        }
    }
    printf("%d\n%d\n", missing1, missing2);

    return 0;
}