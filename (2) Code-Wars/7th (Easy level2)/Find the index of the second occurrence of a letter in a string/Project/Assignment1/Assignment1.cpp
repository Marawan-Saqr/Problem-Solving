#include <iostream>
#include <string>
using namespace std;

int secondSymbol(const string& str, char symbol);

int main() {

    cout << secondSymbol("Hello world!!!", 'l') << endl;

    return 0;
}

int secondSymbol(const string& str, char symbol) {
    size_t firstFound = str.find(symbol);
    if (firstFound != string::npos) {
        size_t secondFound = str.find(symbol, firstFound + 1);
        if (secondFound != string::npos) {
            return secondFound;
        }
    }
    return -1; 
}
