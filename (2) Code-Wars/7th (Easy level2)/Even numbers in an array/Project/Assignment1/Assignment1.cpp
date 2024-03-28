#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> evenNumbers(vector<int> arr, int n);

int main() {
    
    vector<int> numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    int numbersNeeded = 3;
    vector<int> result = evenNumbers(numbers, numbersNeeded);

    for (int num : result) {
        cout << num << endl;
    }

    return 0;
}

vector<int> evenNumbers(vector<int> arr, int n) {
    
    vector<int> result;

    for (int i = arr.size() - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0) {
            result.push_back(arr[i]);      
            if (result.size() == n) { 
                break;
            }
        }
    }

    reverse(result.begin(), result.end());
    return result;
}