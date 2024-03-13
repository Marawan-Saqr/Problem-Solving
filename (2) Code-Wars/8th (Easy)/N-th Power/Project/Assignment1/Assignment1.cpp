#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int index(vector<int> vector, int n);

int main() {
    
    vector<int> numbers = { 5, 1, 3, 3 };
    int indexNumber = 3;
    int result = index(numbers, indexNumber);
    cout << index << endl;

    return 0;
}

int index(vector<int> vector, int n) {
    int result = 0;
    for (int i = 0; i < vector.size(); i++) {
        if (i == vector[n]) {
            result = pow(vector[n], n);
        }
        else {
            result = -1;
        }
    }
    return result;
}