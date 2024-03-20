#include <iostream>
#include <vector>
using namespace std;

long elementsSum(const vector<vector<int>>& arr, int d = 0);

int main() {

    

    return 0;
}


long elementsSum(const vector<vector<int>>& arr, int d = 0) {
    
    int result = 0;

    int arr_count = arr.size();

    for (int i = 0; i < arr_count; i++) {
        int index_and_count = arr_count - 1 - i;
        if (arr[i].size() > index_and_count) {
            result += arr[i][index_and_count];
        }
        else {
            result += d;
        }
    }
    return result;
}

    