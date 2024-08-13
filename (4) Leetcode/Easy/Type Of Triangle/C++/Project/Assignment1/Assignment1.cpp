#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

string triangleType(vector<int>& nums);

int main() {
    
    vector<int> numbers = {5, 4, 5};
    string result = triangleType(numbers);
    cout << result << endl;

    return 0;
}

string triangleType(vector<int>& nums) {

    sort(nums.begin(), nums.end()); //{4, 5, 5}

    if ((nums[0] + nums[1] <= nums[2])) {
        return "none";
    }

    else if (nums[0] == nums[1] && nums[1] == nums[2]) {
        return "equilateral";  //متساوي الاضلاع
    }

    else if ((nums[0] == nums[1]) || (nums[1] == nums[2])) {
        return "isosceles";   //متساوي الساقين
    }

    return "scalene";
}