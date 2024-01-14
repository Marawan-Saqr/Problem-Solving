#include <iostream>
#include <vector>
using namespace std;

int min(vector<int> list);
int max(vector<int> list);


int main() {

    vector<int> minNumbers = { 4, 6, 2, 1, 9, 63, -134, 566 };
    cout << "Smallest Number Is " << min(minNumbers) << endl;
    
    vector<int> maxNumbers = { 4, 6, 2, 1, 9, 63, -134, 566 };
    cout << "Largest Number Is " << max(maxNumbers) << endl;


    return 0;
}

int min(vector<int> list) {
    int smallestNumber = list.at(0);
    for (int i = 0; i < list.size(); i++) {
        if (smallestNumber > list[i]) {
            smallestNumber = list[i];
        }
    }
    return smallestNumber;
}

int max(vector<int> list) {
    int largestNumber = list.at(0);
    for (int i = 0; i < list.size(); i++) {
        if (largestNumber < list[i]) {
            largestNumber = list[i];
        }
    }
    return largestNumber;
}