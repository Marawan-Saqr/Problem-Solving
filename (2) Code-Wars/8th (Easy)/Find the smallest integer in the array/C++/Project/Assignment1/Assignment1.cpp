#include <iostream>
#include <vector>
using namespace std;

int findSmallest(vector <int> list);

int main() {

    vector<int> arrayOfNumbers = {3, 5, 2};
    int result = findSmallest(arrayOfNumbers);
    cout << result << endl;

    return 0;
}

int findSmallest(vector<int> list) {
    int smallestNumber = list[0];
    for (int i = 0; i < list.size(); i++) {
        if (smallestNumber > list[i]) {
            smallestNumber = list[i];
        }
    }
    return smallestNumber;
}