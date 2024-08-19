#include <iostream>
#include <string>
using namespace std;

int strStr(string haystack, string needle);

int main() {
    
    cout << strStr("sadbutsad", "sad") << endl;


    return 0;
}

int strStr(string haystack, string needle) {
    size_t found = haystack.find(needle);
    if (found != string::npos) {
        return found;
    }
    return -1; 
}

