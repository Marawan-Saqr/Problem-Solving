#include <iostream>
#include <string>
#include <cmath>
using namespace std;

bool valid_spacing(const string& s);

int main() {
    
    cout << valid_spacing("Hello  World") << endl;

    return 0;
}

bool valid_spacing(const string& s) {

    for (int i = 0; i < s.size(); i++) {
        if (s[i] == ' ' && s[i + 1] == ' ') {
            return false;
        }
    }
    
    if (s[0] == ' ') {                        //First Space
        return false;
    }

    else if (s[s.size() - 1] == ' ') {        //Last Space
        return false;
    }
    else {
        return true;
    }
}
