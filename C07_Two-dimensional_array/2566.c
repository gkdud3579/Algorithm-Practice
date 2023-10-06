//https://www.acmicpc.net/problem/2566

#include <stdio.h>

int main() 
{
    int matrix[9][9];
    int maxRow, maxCol;
    int maxValue;

    scanf("%d", &matrix[0][0]);
    maxRow = 1;
    maxCol = 1;
    maxValue = matrix[0][0];

    for (int i = 0; i < 9; i++) 
    {
        for (int j = 0; j < 9; j++) 
        {
            if (i == 0 && j == 0) continue;
            scanf("%d", &matrix[i][j]);
            if (matrix[i][j] > maxValue) 
            {
                maxValue = matrix[i][j];
                maxRow = i + 1;
                maxCol = j + 1;
            }
        }
    }

    printf("%d\n%d %d\n", maxValue, maxRow, maxCol);

    return 0;
}
