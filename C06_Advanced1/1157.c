//https://www.acmicpc.net/problem/1157

#include <stdio.h>
#include <ctype.h>

int main() {
    char word[1000001];
    scanf("%s", word);

    for (int i = 0; word[i]; i++) 
    {
        word[i] = tolower(word[i]);
    }

    int count[26] = {0};
    int maxCount = 0;
    int maxCountChar = '?';

    for (int i = 0; word[i]; i++) 
    {
        count[word[i] - 'a']++;
        if (count[word[i] - 'a'] > maxCount) 
        {
            maxCount = count[word[i] - 'a'];
            maxCountChar = word[i];
        } 
        else if (count[word[i] - 'a'] == maxCount)
            maxCountChar = '?';
    }

    printf("%c\n", toupper(maxCountChar));

    return 0;
}
