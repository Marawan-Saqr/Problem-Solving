#include <iostream>
#include <stack>
using namespace std;

bool isValid(string s);

int main() {
    
    cout << isValid("()") << endl;

    return 0;
}

bool isValid(string s) {
    stack<char> myStack;
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            myStack.push(s[i]);
        }
        else {
            if (myStack.empty()) return false; // If stack is empty, mismatched closing bracket
            char top = myStack.top();
            if ((s[i] == ')' && top != '(') ||
                (s[i] == ']' && top != '[') ||
                (s[i] == '}' && top != '{')) {
                return false; // Mismatched opening and closing brackets
            }
            myStack.pop();
        }
    }
    return myStack.empty(); // If stack is empty, all brackets were matched
}