#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

vector<int> squareOrSquareRoot(const vector<int>& array);

int main() {

    vector<int> numbersArray = { 4, 3, 9, 7, 2, 1 };
    vector<int> result = squareOrSquareRoot(numbersArray);

    for (int number : result) {
        cout << number << endl;
    }


    return 0;
}

vector<int> squareOrSquareRoot(const vector<int>& array) {
    vector<int> result;
    for (int i = 0; i < array.size(); i++) {
        double sqrtValue = sqrt(array[i]);
        if (sqrtValue == floor(sqrtValue)) {
            result.push_back(sqrtValue);
        } else {
            result.push_back(array[i] * array[i]);
        }
    }
    return result;
}