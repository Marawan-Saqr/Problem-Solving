#include <iostream>
using namespace std;

bool is_digit(string s);

int main()
{
    cout << is_digit("3") << endl;

    return 0;
}

bool is_digit(string s) {

    for (int i = 0; i < s.size(); i++) {
        char c = s[i];
        switch (c) {
        case '.': case '0' ... '9': continue;
        case '-': if (i == 0) continue;
        }
        return false;
    }

    return s.size();
}