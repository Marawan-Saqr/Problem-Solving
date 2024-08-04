#include <iostream>
#include <vector>
using namespace std;

vector<int> oddOnesOut(const vector<int>& numbers);

int main() {
    

    return 0;
}

vector<int> oddOnesOut(const vector<int>& numbers) {
    vector<int> result;
    unordered_map<int, int> counts;
    for (int num : numbers) {
        counts[num]++;
    }

    for (int num : numbers) {
        if (counts[num] % 2 == 0) {
            result.push_back(num);
        }
    }
    return result;
}