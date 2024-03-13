#include <iostream>
#include <vector>
using namespace std;

// Function prototype
vector<int> divisible_by(vector<int> numbers, int divisor);

int main() {

    vector<int> numbers = { 1, 2, 3, 4, 5, 6 };
    int mainDivider = 2;
    vector<int> result = divisible_by(numbers, mainDivider);

    // Output the result
    cout << "Numbers divisible by " << mainDivider << " are: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}

// Function definition
vector<int> divisible_by(vector<int> numbers, int divisor) {
    vector<int> neededNumbers;
    for (int i = 0; i < numbers.size(); i++) {
        if (numbers[i] % divisor == 0) {
            neededNumbers.push_back(numbers[i]);
        }
    }
    return neededNumbers;
}
