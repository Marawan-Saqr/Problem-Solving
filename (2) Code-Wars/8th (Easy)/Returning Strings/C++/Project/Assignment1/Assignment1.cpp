#include <iostream>
#include <string>
using namespace std;

string greet(const string& n);

int main() {

    cout << greet("Ryan") << endl;

    return 0;
}

string greet(const string& n) {
    return "Hello, " + n + " how are you doing today?";
}
