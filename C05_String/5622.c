//https://www.acmicpc.net/problem/5622

#include <stdio.h>
#include <string.h>

int main() {
    char input[16];
    scanf("%s", input);

    int len = strlen(input);
    int total_time = 0;

    for (int i = 0; i < len; i++) {
        char c = input[i];
        if (c >= 'A' && c <= 'C') {
            total_time += 3;
        } else if (c >= 'D' && c <= 'F') {
            total_time += 4;
        } else if (c >= 'G' && c <= 'I') {
            total_time += 5;
        } else if (c >= 'J' && c <= 'L') {
            total_time += 6;
        } else if (c >= 'M' && c <= 'O') {
            total_time += 7;
        } else if (c >= 'P' && c <= 'S') {
            total_time += 8;
        } else if (c >= 'T' && c <= 'V') {
            total_time += 9;
        } else if (c >= 'W' && c <= 'Z') {
            total_time += 10;
        }
    }

    printf("%d\n", total_time);

    return 0;
}
