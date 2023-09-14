//https://www.acmicpc.net/problem/10811

#include <stdio.h>

int main()
{
    int N, M;
    scanf("%d %d", &N, &M);

    int baskets[101];
    for(int i = 1; i <= N; i++)
        baskets[i] = i;

    for(int m = 0; m < M; m++)
    {
        int i, j;
        scanf("%d %d", &i, &j);

         while(i < j)
        {
            int temp = baskets[i];
            baskets[i] = baskets[j];
            baskets[j] = temp;
            i++;
            j--;    
        }
    }

    for(int i = 1; i <= N; i++)
        printf("%d ", baskets[i]);

    return 0;

}