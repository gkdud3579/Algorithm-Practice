//https://www.acmicpc.net/problem/11005

#include <stdio.h>

int main(void){
    long long B;
    long long N;
    char result[100];

    scanf("%lld", &N);
    scanf("%lld", &B);

    int index = 0;

    while(N > 0){
        long long remainder = N % B;
        if (remainder >= 10)
            result[index++] = remainder - 10 + 'A';
        else
            result[index++] = remainder + '0';
        N /= B;
    }

    for(int i = index - 1; i >= 0; i--)
        printf("%c", result[i]);

    return 0;
}