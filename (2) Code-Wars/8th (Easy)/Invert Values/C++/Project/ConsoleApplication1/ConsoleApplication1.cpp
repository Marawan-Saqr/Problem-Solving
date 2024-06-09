#include <iostream>
#include <vector>
using namespace std;

vector<int> invert(vector<int> values) {
    for (int i = 0; i < values.size(); i++) {
        values[i] *= -1;
    }
    return values;
}

int main() {
    vector<int> nums = { 1, 2, 3, 4, 5 };
    vector<int> invertedNums = invert(nums);

    for (int i = 0; i < invertedNums.size(); i++) {
        cout << invertedNums[i] << " ";
    }
    cout << endl;

    return 0;
}