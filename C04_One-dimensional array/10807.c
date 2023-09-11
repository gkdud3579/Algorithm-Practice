//https://www.acmicpc.net/problem/10807

#include <stdio.h>

int main(void)
{
    int N;
    scanf("%d", &N);

    int arr[N];

    for(int i = 0; i < N; i++)
        scanf("%d", &arr[i]);

    int v;
    scanf("%d", &v);

    int count = 0;

    for(int i = 0; i < N; i++)
    {
        if(arr[i] == v)
            count++;
    }
    printf("%d\n", count);

    return 0;
}