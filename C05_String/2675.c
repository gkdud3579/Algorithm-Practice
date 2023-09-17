//https://www.acmicpc.net/problem/2675

#include <stdio.h>
#include <string.h>

int main() {
    int T;
    scanf("%d", &T);

    while (T--) {
        int R;
        char S[21];
        scanf("%d %s", &R, S);

        int len = strlen(S);

        for (int i = 0; i < len; i++) {
            for (int j = 0; j < R; j++) {
                printf("%c", S[i]);
            }
        }

        printf("\n");
    }

    return 0;
}