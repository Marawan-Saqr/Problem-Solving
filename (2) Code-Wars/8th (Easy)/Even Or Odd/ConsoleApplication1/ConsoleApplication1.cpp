#include <iostream>
#include <string>
using namespace std;

string even_or_odd(int number)
{
    if (number % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

int main() {

    cout << even_or_odd(20) << endl;

	return 0;
}