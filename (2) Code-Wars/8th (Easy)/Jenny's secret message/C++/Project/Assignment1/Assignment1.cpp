#include <iostream>
using namespace std;

std::string greet(std::string name);

int main() {
   
    cout << greet("Johnny") << endl;

    return 0;
}

std::string greet(std::string name)
{
    if (name == "Johnny") {
        return "Hello, my love!";
    }
    else {
        return "Hello, " + name + "!";
    }
}