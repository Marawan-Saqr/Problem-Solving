#include <iostream>
#include <algorithm> 
using namespace std;

string finalString(string s);

int main() {
    
    cout << finalString("poiinter") << endl;

    return 0;
}

string finalString(string s) {

    string result = "";

    for (int i = 0; i < s.length(); i++) {
        if (s[i] == 'i') {
            reverse(result.begin(), result.end());  //rts
        }
        else {
            result += s[i];    //rtsng
        }
    }
    return result;
}