#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

vector<int> flip(const char dir, const vector<int>& arr);

int main() {

    vector<int> numbers = { 3, 2, 1, 2 };
    vector<char> half = { 'R' };

    vector<int> result = flip('R', numbers); 

    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}

vector<int> flip(const char dir, const vector<int>& arr) {
    vector<int> result = arr;
    if (dir == 'R') {
        sort(result.begin(), result.end());
    }
    else {
        sort(result.end(), result.begin());
        reverse(result.begin(), result.end());
    }
    return result;
}