#include <iostream>
#include <vector>
using namespace std;

vector<int> climb(int n);

int main() {
    
    int number = 1;
    vector<int> result = climb(number);

    for (int num : result) {
        cout << num << endl;
    }
    return 0;
}

vector<int> climb(int n) {
    
    vector<int> result;

    while (n > 1) {
        result.insert(result.begin(), n);
        n = n / 2;
    }

    result.insert(result.begin(), n);
    return result;
}