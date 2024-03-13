#include <iostream>
#include <string>
using namespace std;

string gimme_the_letters(const string& sp);

int main() {

    cout << gimme_the_letters("a-z") << endl;

    return 0;
}

string gimme_the_letters(const string& sp) {
    string result = "";
    char startChar = sp[0];
    char endChar = sp[sp.length() - 1];

    // Iterate over the range of characters from startChar to endChar
    for (char c = startChar; c <= endChar; c++) {
        result += c;
    }

    return result;
}
