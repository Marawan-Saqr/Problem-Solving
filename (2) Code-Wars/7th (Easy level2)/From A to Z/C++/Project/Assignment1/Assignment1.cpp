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
    for (int i = sp[0]; i <= sp[sp.size() - 1]; i++) {
        result += i;
    }
    return result;
}