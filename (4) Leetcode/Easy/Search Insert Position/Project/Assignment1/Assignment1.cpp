#include <iostream>
#include <vector>
#include <iterator> 
#include <algorithm>
using namespace std;

int searchInsert(vector<int>& nums, int target);

int main() {
    
    vector<int> numbers = { 1, 3, 5, 6, 9, 8, 4 };
    int mainTarget = 7;
    int result = searchInsert(numbers, mainTarget);

    cout << result << endl;
    return 0;
}


class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int low = 0;
        int high = nums.size();
        int mid;
        if (target > nums[high - 1]) {
            return high;
        }
        while (low <= high) {
            mid = (low + high) / 2;
            if (nums[mid] == target) {
                return mid;
            }

            if (target < nums[mid]) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }

        }
        return  low;
    }
};
