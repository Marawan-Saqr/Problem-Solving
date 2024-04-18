#include <iostream>
using namespace std;

string solve(string s);

int main() {
    
    cout << solve("your code rocks") << endl;
    return 0;
}

string solve(string s) {

    string result = "";
    for (int i = s.size() - 1; i >= 0; i--) {
        if (s[i] != ' ') {
            result += s[i];
        }

        if (s[result.length()] == ' ') {
            result += ' ';
        }
    }

    return result;    //  skcor edoc ruoy
}