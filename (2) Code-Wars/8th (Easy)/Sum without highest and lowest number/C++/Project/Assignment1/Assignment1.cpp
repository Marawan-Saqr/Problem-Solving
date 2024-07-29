#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int sum(vector<int> numbers);

int main() {

    vector<int> numbersArray = { 1, 1, 11, 2, 3 };
    int result = sum(numbersArray);

    cout << result << endl;

    return 0;
}

int sum(vector<int> numbers) {
    if (numbers.size() <= 1) {
        return 0;
    }
    int result = 0;
    sort(numbers.begin(), numbers.end());
    for (int i = 1; i < numbers.size() - 1; i++) {
        result += numbers.at(i);
    }
    return result;
}