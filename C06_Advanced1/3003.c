//https://www.acmicpc.net/problem/3003

#include <stdio.h>

int main() {
    int whiteKing, whiteQueen, whiteRook, whiteBishop, whiteKnight, whitePawn;

    scanf("%d %d %d %d %d %d", &whiteKing, &whiteQueen, &whiteRook, &whiteBishop, &whiteKnight, &whitePawn);

    int correctPieces[] = {1, 1, 2, 2, 2, 8};

    for (int i = 0; i < 6; i++) {
        int diff = correctPieces[i] - (i == 0 ? whiteKing : (i == 1 ? whiteQueen : (i == 2 ? whiteRook : (i == 3 ? whiteBishop : (i == 4 ? whiteKnight : whitePawn)))));
        printf("%d ", diff);
    }

    return 0;
}
