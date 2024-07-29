#include <iostream>
using namespace std;

string replace(const string s);

int main() {

    cout << replace("ABCDE") << endl;

    return 0;
}

string replace(string s) {
    for (int i = 0; i < s.length(); i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U') {
            s[i] = '!';
        }
    }
    return s;
}