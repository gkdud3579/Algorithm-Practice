//https://www.acmicpc.net/problem/2720

#include <stdio.h>

int main(void){
    int T;
    scanf("%d", &T);

    int count = 0;
    for(int i = 0; i < T; i++){
        int c;
        scanf("%d", &c);

        int quarters = c / 25;
        c %= 25;

        int dimes = c / 10;
        c %= 10;

        int nickels = c / 5;
        c %= 5;

        int pennies = c;
        
        printf("%d %d %d %d\n", quarters, dimes, nickels, pennies);
    }

    return 0;

}