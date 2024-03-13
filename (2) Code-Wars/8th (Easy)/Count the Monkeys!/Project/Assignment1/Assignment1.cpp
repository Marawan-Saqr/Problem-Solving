#include <iostream>
#include <vector>
using namespace std;

vector<int> MonkeyCount(int n);

int main() {

    int n = 3;
    vector<int> result = MonkeyCount(n);

    cout << "Monkey Count: ";
    for (int i = 0; i < result.size(); i++) {
        cout << result[i] << " ";
    }
    cout << endl;

    return 0;
}

vector<int> MonkeyCount(int n) {
    vector<int> emptyArray;
    for (int i = 1; i <= n; i++) {
        emptyArray.push_back(i);
    }
    return emptyArray;
}
