#include <iostream>
#include <string>
using namespace std;

bool isPalindrom(string str);

int main() {

    
    cout << isPalindrom("Abba") << endl;
   

    return 0;
}

bool isPalindrom(string str) {
    string lowerCaseWord = "";
    string result = "";
    for (int i = 0; i < str.length(); i++) {
        lowerCaseWord += tolower(str[i]);     
    }
    
    for (int j = lowerCaseWord.length() - 1; j >= 0; j--) {
        result += lowerCaseWord[j];
    }

    if (result == lowerCaseWord) {
        return true;
    }
    else {
        return false;
    }
}