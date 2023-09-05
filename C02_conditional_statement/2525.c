//https://www.acmicpc.net/problem/2525

#include <stdio.h>

int main(void)
{
    int h, m, c;
    scanf("%d %d", &h, &m);
    scanf("%d", &c);

    m += c;

    if (m >= 60)
    {
        h += m / 60;
        m %= 60;
    }

    h %= 24;

    printf("%d %d\n", h, m);

    return 0;
}