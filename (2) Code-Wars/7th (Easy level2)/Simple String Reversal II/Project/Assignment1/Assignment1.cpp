#include <iostream>
#include <algorithm>
using namespace std;

string solve(string s, int a, int b);

int main() {
    
    string word = "codewars";
    int positionOne = 1;
    int positionTwo = 5;
    cout << solve(word, positionOne, positionTwo) << endl;
    return 0;
}

string solve(string s, int a, int b) {
    string word = s.substr(a, b - a + 1);  // odewa
    reverse(word.begin(), word.end());     // awedo
    s.replace(a, b - a + 1, word);

    return s;
}
