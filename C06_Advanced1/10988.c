//https://www.acmicpc.net/problem/10988

#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int main()
{
    char word[101];
    scanf("%s", word);

    int len = strlen(word);
    bool isPalindrome = true;

    for(int i = 0; i < len / 2; i++)
    {
        if(word[i] != word[len - i - 1])
        {
            isPalindrome = false;
            break;
        }
    }
    
    if(isPalindrome)
        printf("1\n");
    else
        printf("0\n");

    return 0;
}