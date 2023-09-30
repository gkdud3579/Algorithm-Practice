https://www.acmicpc.net/problem/1316

#include <stdio.h>
#include <string.h>

int isGroupWord(char word[])
{
    int length = strlen(word);
    int alphabet[26] = {0};

    for (int i = 0; i < length; i++)
    {
        int idx = word[i] - 'a';

        if(alphabet[idx] == 1)
            return 0;

        alphabet[idx] = 1;
        while (i + 1 < length && word[i] == word[i + 1])
            i++;
    }
    return 1;
}

int main()
{
    int N;
    scanf("%d", &N);

    int groupWordCount = 0;

    for(int i = 0; i < N; i++)
    {
        char word[101];
        scanf("%s", word);

        if (isGroupWord(word))
            groupWordCount++;
    }
    printf("%d\n", groupWordCount);

    return 0;
}