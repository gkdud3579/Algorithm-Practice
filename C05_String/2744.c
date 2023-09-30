//https://www.acmicpc.net/problem/2744

#include <stdio.h>

int main()
{
    char word[101];
    scanf("%s", word);

    for(int i = 0; word[i] != '\0'; i++)
    {
        if (word[i] >= 'a' && word[i] <= 'z')
        printf("%c", word[i] - 'a' + 'A');
        else if (word[i] >= 'A' && word[i] <= 'Z')
        printf("%c", word[i] - 'A' + 'a');
        else
        printf("%c", word[i]);
    }
    printf("\n");

    return 0;
}
