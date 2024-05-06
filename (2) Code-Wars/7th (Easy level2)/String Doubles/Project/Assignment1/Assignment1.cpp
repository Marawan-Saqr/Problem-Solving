#include <iostream>
#include <vector>
using namespace std;

string doubles(string s);

int main() {
    
    cout << doubles("abbbzz") << endl;
    return 0;
}

string doubles(string s) {

    string result = "";

    for (int i = 0; i < s.size(); i++) {
        if (result.empty() || s[i] != result.back()) {
            result.push_back(s[i]);
        }
        else {
            result.pop_back();
        }
    }

    return result;
}