#include <iostream>
#include <vector>
using namespace std;

vector<int> reverseListOrder(vector<int> numbers);

int main() {

    vector<int> numbers = { 1, 2, 3, 4, 5 };
    vector<int> result = reverseListOrder(numbers);

    for (int num : result) {
        cout << num << endl;
    }

    return 0;
}

vector<int> reverseListOrder(vector<int> numbers) {
    vector<int> result;

    for (int i = numbers.size() - 1; i >= 0; i--) {
        result.push_back(numbers[i]);
    }
    return result;
}