#include <iostream>
using namespace std;

char getGrade(int a, int b, int c);

int main() {
    
    cout << getGrade(95, 90, 93) << endl;

    return 0;
}

char getGrade(int a, int b, int c) {
    int result = (a + b + c) / 3;
    if (result >= 90 && result <= 100 ) {
        return 'A';
    }
    else if (result >= 80 && result < 90) {
        return 'B';
    }
    else if (result >= 70 && result < 80) {
        return 'C';
    }
    else if (result >= 60 && result < 70) {
        return 'D';
    }
    else {
        return 'F';
    }
}