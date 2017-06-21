#include <stdio.h>

int funcaoEuclides(int numero1, int numero2) {
    int z = 9999; 
    int dividendo; 
    int divisor;

    dividendo = numero1;
    divisor = numero2;

    while(z != 0) {
        z = dividendo % divisor;
        dividendo = divisor;
        divisor = z;
    }
    return dividendo;
}

int main() {
    int numero1 = 0;
    int numero2 = 0;

    printf("Digite numero 1:");
    scanf("%d", &numero1);
    printf("Digite numero 2:");
    scanf("%d", &numero2);

    printf("Resultado: %d \n\n", funcaoEuclides(numero1, numero2));
    return 0;
}