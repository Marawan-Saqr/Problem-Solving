#include <iostream>
#include <string>
#include <vector>
using namespace std;

unsigned int most_frequent_item_count(const vector<int>& collection);

int main() {
    
    vector<int> items = { 3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3 };
    unsigned int result = most_frequent_item_count(items);
    cout << result << endl;
    return 0;
}

unsigned int most_frequent_item_count(const vector<int>& collection) {
    
    unsigned int result = 0;
    int counter = 0;

    for (int i = 0; i < collection.size(); i++) {
        counter = 0;
        for (int j = 0; j < collection.size(); j++) {
            if (collection[i] == collection[j]) {
                counter++;
            }
        }

        if (counter > result) {
            result = counter;
        }
    }

    return result;
}
