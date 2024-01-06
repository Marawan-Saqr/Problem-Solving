#include <iostream>
using namespace std;

bool is_digit(std::string s) {
    // Returns true if it is a valid single integer or floating number or false if it is not.

    for (unsigned i = 0; i < s.size(); i++) {
        char c = s[i];
        switch (c) {
        case '.': case '0' ... '9': continue;
        case '-': if (i == 0) continue;
        }
        return false;
    }

    return s.size();
}


int main()
{
    
    cout << is_digit("3") << endl;

    return 0;
}
