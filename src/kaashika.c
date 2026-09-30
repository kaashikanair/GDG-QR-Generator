#include<stdio.h>
int main ()
{
    int a, b , c
    printf("enter 3 numbers");
    scanf("%d%d%d"&a,&b,&c);
    if (a<b && c<b) 
        printf("the no %d is the largest",b);
    else if (a>b && a>c)
        printf("the no %d is the largest", a);
    else 
        printf("the no %d is the largest",c);
    return 0;
}