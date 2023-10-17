//https://www.acmicpc.net/status?user_id=gkdud3579&problem_id=2869&from_mine=1

#include <stdio.h>

int main() {
    int A, B, V;
    scanf("%d %d %d", &A, &B, &V);

    int days = (V - A) / (A - B);
    if ((V - A) % (A - B) != 0) {
        days++;
    }
    days++;

    printf("%d\n", days);

    return 0;
}
