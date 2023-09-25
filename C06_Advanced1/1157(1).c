#include <stdio.h>

int main() 
{
    char str[1000000];
    scanf("%s", str);

    int count[26] = {0};

    for (int i = 0; str[i]; i++) 
    {
        char c = str[i];
        if (c >= 'a' && c <= 'z') 
        {
            count[c - 'a']++;
        } else if (c >= 'A' && c <= 'Z') 
        {
            count[c - 'A']++;
        }
    }

    int maxCount = 0;
    char maxCountChar = '?';

    for (int i = 0; i < 26; i++) 
    {
        if (count[i] > maxCount) 
        {
            maxCount = count[i];
            maxCountChar = 'A' + i;
        } else if (count[i] == maxCount) 
        {
            maxCountChar = '?';
        }
    }

    printf("%c\n", maxCountChar);

    return 0;
}