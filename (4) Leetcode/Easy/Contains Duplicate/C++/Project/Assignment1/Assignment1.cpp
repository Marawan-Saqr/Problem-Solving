#include <iostream>
#include <vector>
#include <set>
using namespace std;

bool containsDuplicate(vector<int>& nums);

int main() {
    
    vector<int> numbers = { 1, 2, 3, 4 };
    bool result = containsDuplicate(numbers);
    cout << result << endl;
    return 0;
}

bool containsDuplicate(vector<int>& nums) {
    set<int> numSet;
    for (int num : nums) {
        if (numSet.find(num) != numSet.end()) {
            return true;
        }
        numSet.insert(num);
    }
    return false;
}