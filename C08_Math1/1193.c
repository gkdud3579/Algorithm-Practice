//https://www.acmicpc.net/status?user_id=gkdud3579&problem_id=1193&from_mine=1

#include <stdio.h>

int main() {
    int X;
    scanf("%d", &X);

    int diagonal = 1;
    while (X > diagonal) {
        X -= diagonal;
        diagonal++;
    }

    int numerator, denominator;
    if (diagonal % 2 == 0) {
        numerator = X;
        denominator = diagonal - X + 1;
    } else {
        numerator = diagonal - X + 1;
        denominator = X;
    }

    printf("%d/%d\n", numerator, denominator);

    return 0;
}
