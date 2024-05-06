#include <iostream>
#include <string>
using namespace std;

string get_middle(string input);

int main() {
    
    cout << get_middle("testing") << endl;
    return 0;
}

string get_middle(string input) {
   
    string result = "";
    int lengthWord = input.length();
    int cutFrom = 0;

    for (int i = 0; i < input.size(); i++) {
        if (lengthWord % 2 == 0) {
            cutFrom = (lengthWord / 2) - 1;
            result = input.substr(cutFrom, 2);
        }
        else {
            cutFrom = (lengthWord - 1) / 2;
            result = input.substr(cutFrom, 1);
        }
    }

    return result;
}
