#include <iostream>
#include <vector>
using namespace std;

int positive_sum(vector<int> arr);

int main() {

    vector<int> numbersArray = { 1, -4, 7, 12 };
    int result = positive_sum(numbersArray);

    cout << result << endl;

    return 0;
}

int positive_sum(vector<int> arr) {
    int result = 0;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] < 0) {
            continue;
        }
        else {
            result += arr[i];
        }
    }
    return result;
}