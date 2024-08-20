#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int findLucky(vector<int>& arr);

int main() {
    
    vector<int> numbers = { 2, 2, 3, 4 };
    int result = findLucky(numbers);
    cout << result << endl;

    return 0;
}

int findLucky(vector<int>& arr) {

    unordered_map<int, int> freq;

    for (int i = 0; i < arr.size(); i++) {
        freq[arr[i]]++;
    }

    int maxLucky = -1;
    // Iterate through the map to find the largest lucky integer
    for (auto& pair : freq) {
        if (pair.first == pair.second) { // Check if it's a lucky integer
            maxLucky = max(maxLucky, pair.first);
        }
    }

    return maxLucky;
}