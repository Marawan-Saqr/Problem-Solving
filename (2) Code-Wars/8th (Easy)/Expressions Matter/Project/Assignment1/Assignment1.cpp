#include <iostream>
#include <vector>
using namespace std;

unsigned short int expressionsMatter(unsigned short int a, unsigned short int b, unsigned short int c);

int main() {

    cout << expressionsMatter(1, 2, 3) << endl;

    // 1 * (2 + 3) = 5
    // 1 * 2 * 3 = 6
    // 1 + 2 * 3 = 7
    // (1 + 2) * 3 = 9

    return 0;
}

unsigned short int expressionsMatter(unsigned short int a, unsigned short int b, unsigned short int c) {
    int methodOne = a * (b + c);
    int methodTwo = a * b * c;
    int methodThree = a + b * c;
    int methodFour = (a + b) * c;
    int numbers[] = { methodOne , methodTwo, methodThree,  methodFour };
    int maxNumber = numbers[0];
    int smallNumber = numbers[0];
    int medNumber = 0;
    int numbersLength = sizeof(numbers) / sizeof(numbers[0]);
    for (int i = 0; i < numbersLength; i++) {
        if (maxNumber < numbers[i]) {
            maxNumber = numbers[i];
        }
        else if (smallNumber > numbers[i]) {
            smallNumber = numbers[i];
        }
        else {
            medNumber = numbers[i];
        }
    }
    return maxNumber;
}