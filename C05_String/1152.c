//https://www.acmicpc.net/problem/1152

#include <stdio.h>
#include <stdbool.h>

int main()
{
    char input[1000001];
    fgets(input, sizeof(input), stdin);

    int wordCount = 0;
    bool inWord = false;
    
    for(int i = 0; input[i] != '\0'; i++)
    {
        char c = input[i];

        if(c != ' ' && c != '\n')
            inWord = true;
        else {
            if(inWord)
            {
                wordCount++;
                inWord = false;
            }
        }
    }

    if(inWord)
        wordCount++;

    printf("%d\n", wordCount);

    return 0;
}