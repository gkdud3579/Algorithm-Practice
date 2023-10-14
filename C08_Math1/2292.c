//https://www.acmicpc.net/problem/2292

#include <stdio.h>

int main() {
    int N;
    scanf("%d", &N);

    int moves = 1;
    int current = 1;

    while (current < N) {
        current += 6 * moves;
        moves++;
    }

    printf("%d\n", moves);

    return 0;
}
