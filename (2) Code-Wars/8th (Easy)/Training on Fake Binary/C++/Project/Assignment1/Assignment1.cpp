#include <iostream>
#include <string>
using namespace std;

string fakeBin(string str);

int main() {

    cout << fakeBin("45385593107843568") << endl;

    return 0;
}

string fakeBin(string str) {
    for (int i = 0; i < str.length(); i++) {
        if (str[i] < '5') {
            str[i] = '0';
        }
        else {
            str[i] = '1';
        }
    }
    return str;
}