#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(int x);

int main() {
    cout << isPalindrome(121) << endl;
    return 0;
}

bool isPalindrome(int x) {
    string converted = to_string(x);
    int convertedLength = converted.length();
    string rightResult = "";
    string leftResult = "";

    for (int i = 0; i < convertedLength; i++) { 
        rightResult += converted[i];
    }

    for (int j = convertedLength - 1; j >= 0; j--) { 
        leftResult += converted[j];
    }

    if (rightResult == leftResult) {
        return true;
    }
    else {
        return false;
    }
}