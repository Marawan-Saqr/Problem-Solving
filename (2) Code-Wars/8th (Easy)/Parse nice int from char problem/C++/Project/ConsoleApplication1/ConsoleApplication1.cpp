#include <iostream>
#include <string>
using namespace std;

int get_age(const string& she_said);

int main() {
    
    
    cout << get_age("5 Years Old") << endl;
    return 0;
}

int get_age(const string& she_said) {
    return stoi(she_said);
}
