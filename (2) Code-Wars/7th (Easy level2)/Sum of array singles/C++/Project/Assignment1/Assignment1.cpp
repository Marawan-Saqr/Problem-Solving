#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int repeats(const vector<int>& v);

int main() {

    vector<int> numbers = { 9, 10, 19, 13, 19, 13 };
    int result = repeats(numbers);

    cout << result << endl;

    return 0;
}

int repeats(const vector<int>& v) {
    unordered_map<int, int> countMap;
    int result = 0;

    // Count occurrences of each number
    for (int i = 0; i < v.size(); i++) {
        countMap[i]++;
    }

    // Sum the numbers that appear only once
    for (int num : v) {
        if (countMap[num] == 1) {
            result += num;
            countMap[num] = 0; // Mark the number as counted to avoid duplicates
        }
    }

    return result;
}


    