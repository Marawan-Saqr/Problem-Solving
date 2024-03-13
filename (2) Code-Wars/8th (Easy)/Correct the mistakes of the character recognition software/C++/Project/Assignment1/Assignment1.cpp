#include <iostream>
#include <string>
using namespace std;

string correct(std::string str);

int main() {
    
    cout << correct("R0BERT MERLE - THE DAY 0F THE D0LPH1N") << endl;

    return 0;
}

string correct(string str) {
    
    int strLength = size(str);

    for (int i = 0; i < strLength; i++) {
        if (str[i] == '5') {
            str[i] = 'S';
        }
        else if (str[i] == '0') {
            str[i] = 'O';
        }
        else if (str[i] == '1') {
            str[i] = 'I';
        }
    }

    return str;
}