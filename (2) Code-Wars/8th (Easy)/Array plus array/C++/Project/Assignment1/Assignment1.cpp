#include <iostream>
#include <vector>
using namespace std;

int arrayPlusArray(vector<int> a, vector<int> b);

int main() {

    vector<int> numbersOne = { 1, 2, 3 };
    vector<int> numbersTwo = { 4, 5, 6 };
    int result = arrayPlusArray(numbersOne, numbersTwo);
    cout << result << endl;

    return 0;
}

int arrayPlusArray(vector<int> a, vector<int> b) {

    int result = 0;

    for (int i = 0; i < a.size(); i++) {
        result += a[i];
    }

    for (int i = 0; i < b.size(); i++) {
        result += b[i];
    }

    return result;
}