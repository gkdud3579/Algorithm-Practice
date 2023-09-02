//https://www.acmicpc.net/problem/10926

#include <stdio.h>
#include <string.h>

int main(void)
{
    char username[51]; // 최대 길이가 50인 문자열을 저장할 수 있는 배열

    // 아이디 입력
    scanf("%s", username);

    // 아이디 뒤에 "??!"를 추가하여 출력
    strcat(username, "??!");
    printf("%s\n", username);

    return 0;
}