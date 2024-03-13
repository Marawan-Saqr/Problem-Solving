#include <iostream>
#include <vector>
using namespace std;

vector<int> pipe_fix(const vector<int>& nums);

int main() {

    vector<int> numbers = { 1, 2, 3, 5, 6, 8, 9 };
    vector<int> fixedNumbers = pipe_fix(numbers);

    cout << "Fixed numbers:" << endl;
    for (int num : fixedNumbers) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}

vector<int> pipe_fix(const vector<int>& nums) {
    vector<int> fixedPipe;
    for (int i = nums[0]; i <= nums[nums.size() - 1]; i++) {
        bool found = false;
        for (int j = 0; j < nums.size(); j++) {
            if (nums[j] == i) {
                fixedPipe.push_back(i);
                found = true;
                break;
            }
        }
        if (!found) {
            fixedPipe.push_back(i);
        }
    }
    return fixedPipe;
}
