#include <iostream>
#include <unordered_map>
using namespace std;

int romanToInt(string s);

int main() {
    
    cout << romanToInt("III") << endl;

    return 0;
}

int romanToInt(string s) {
    unordered_map<char, int> romanMap = {
        {'I', 1},
        {'V', 5},
        {'X', 10},
        {'L', 50},
        {'C', 100},
        {'D', 500},
        {'M', 1000}
    };

    int result = 0;
    for (int i = 0; i < s.size(); i++) {
        if (i + 1 < s.size() && romanMap[s[i]] < romanMap[s[i + 1]]) {
            result -= romanMap[s[i]];
        }
        else {
            result += romanMap[s[i]];
        }
    }
    return result;
}