//https://www.acmicpc.net/problem/1546

#include <stdio.h>

int main()
{
    int N;
    scanf("%d", &N);

    int scores[N];
    int max_score = 0;
    double total = 0.0;

    for(int i = 0; i < N; i++)
    {
        scanf("%d", &scores[i]);
        if(scores[i] > max_score)
            max_score = scores[i];
    }

    for(int i = 0; i < N; i++)
        total += (double)scores[i] / max_score * 100.0;
    
    double new_average = total / N;

    printf("%.21f\n", new_average);

    return 0;
}