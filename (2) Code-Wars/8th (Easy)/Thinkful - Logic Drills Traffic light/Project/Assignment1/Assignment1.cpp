#include <iostream>
#include <string>
using namespace std;

string update_light(string current);

int main() {

    cout << update_light("Red") << endl;

    return 0;
}


string update_light(string current) {
    if (current == "red") {
        return "green";
    }
    else if (current == "yellow") {
        return "red";
    }
    else if (current == "green") {
        return "yellow";
    }
}