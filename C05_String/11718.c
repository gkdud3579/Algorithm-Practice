//https://www.acmicpc.net/problem/11718

#include <stdio.h>

int main() 
{
    char line[101];

    while (fgets(line, sizeof(line), stdin) != NULL) 
    {
        printf("%s", line);
    }

    return 0;
}
