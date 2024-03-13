#include <iostream>
#include <string>
using namespace std;

bool solution(string const& str, string const& ending);

int main() {
    

    cout << solution("abcde", "cde") << endl;
    return 0;
}

bool solution(string const& str, string const& ending) {
    
    if (ending.length() > str.length()) {
        return false;
    }

    int strIndex = str.length() - 1;        //e
    int endingIndex = ending.length() - 1;  //e

    // Loop until either all characters in ending have been matched
    // or there is a mismatch between str and ending
    while (endingIndex >= 0) {
        // Check if characters at strIndex and endingIndex are equal
        if (str[strIndex] != ending[endingIndex]) {
            return false; // Mismatch, ending is not a substring of str
        }

        // Move to the previous character in both strings
        strIndex--;
        endingIndex--;
    }

    // If the loop completes without returning false, ending is a substring of str
    return true;
}
