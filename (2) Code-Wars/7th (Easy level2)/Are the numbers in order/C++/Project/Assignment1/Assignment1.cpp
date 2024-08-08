#include <iostream>
#include <vector>
using namespace std;

bool isAscOrder(std::vector<int> arr);

int main() {

    vector<int> numbers = { 3, 2, 1 };
    bool result = isAscOrder(numbers);
    cout << result << endl;

    return 0;
}

bool isAscOrder(vector<int> arr) {
    for (int i = 0; i < arr.size() - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}