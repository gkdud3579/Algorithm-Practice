//https://www.acmicpc.net/problem/3003

int main() {
    int whiteKing, whiteQueen, whiteRook, whiteBishop, whiteKnight, whitePawn;

    scanf("%d %d %d %d %d %d", &whiteKing, &whiteQueen, &whiteRook, &whiteBishop, &whiteKnight, &whitePawn);

    int correctPieces[] = {1, 1, 2, 2, 2, 8};

    for(int i = 0; i < 6; i++)
    {
        int diff;
        if (i == 0) {
            diff = correctPieces[i] - whiteKing;
        } else if (i == 1) {
            diff = correctPieces[i] - whiteQueen;
        } else if (i == 2) {
            diff = correctPieces[i] - whiteRook;
        } else if (i == 3) {
            diff = correctPieces[i] - whiteBishop;
        } else if (i == 4) {
            diff = correctPieces[i] - whiteKnight;
        } else {
            diff = correctPieces[i] - whitePawn;
        }
        printf("%d ", diff);
    }
    return 0;
}
