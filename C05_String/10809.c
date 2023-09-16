//https://www.acmicpc.net/problem/10809

#include <stdio.h>
#include <string.h>

int main()
{
    char S[101];
    scanf("%s", S);

    int alphabet[26];
    memset(alphabet, -1, sizeof(int) * 26);

    for(int i = 0; S[i] != '\0'; i++)
    {
        int index = S[i] - 'a';
        if(alphabet[index] == -1)
            alphabet[index] = i;
    }

    for(int i = 0; i < 26; i++)
    {
        if(alphabet[i] == -1)
            printf("-1 ");
        else
            printf("%d ", alphabet[i]);
    }

    return 0;

}