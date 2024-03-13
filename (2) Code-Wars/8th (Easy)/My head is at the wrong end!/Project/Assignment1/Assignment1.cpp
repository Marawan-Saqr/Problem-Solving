#include <iostream>
#include <array>
#include <string>
using namespace std;



int main() {

    

    return 0;
}

array<string, 3> fixTheMeerkat(array<string, 3> arr) {
    reverse(arr.begin(), arr.end());
    return arr;
}