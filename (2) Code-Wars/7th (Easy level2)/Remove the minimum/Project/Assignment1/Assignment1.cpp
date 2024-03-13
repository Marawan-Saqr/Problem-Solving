#include <iostream>
#include <vector>
using namespace std;

vector<unsigned int> removeSmallest(const vector<unsigned int>& numbers);

int main() {
    vector<unsigned int> numbers = { 5, 3, 2, 4 };
    vector<unsigned int> result = removeSmallest(numbers);

    for (int number : result) {
        cout << number << endl;
    }

    return 0;
}

vector<unsigned int> removeSmallest(const vector<unsigned int>& numbers) {

    vector<unsigned int> result(numbers);

    auto smallest_it = min_element(result.begin(), result.end());

    if (smallest_it != result.end()) { 
        result.erase(smallest_it);
    }

    return result;
}