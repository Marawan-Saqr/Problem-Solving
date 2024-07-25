#include <iostream>
#include <vector>
using namespace std;

vector<int> countBy(int x, int n);

int main() {
    int mainCounter = 2;
    vector<int> numbers = { 2, 4, 6, 8, 10 };

    vector<int> result = countBy(mainCounter, numbers.size());

    // Output the result
    cout << "Count By: ";
    for (int i = 0; i < result.size(); i++) {
        cout << result[i] << " ";
    }
    cout << endl;

    return 0;
}

vector<int> countBy(int x, int n) {
    vector<int> emptyArray;
    for (int i = x; i <= n; i++) {
        emptyArray.push_back(x * i);
    }
    return emptyArray;
}
