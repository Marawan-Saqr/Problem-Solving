#include <iostream>
#include <vector>
using namespace std;

int elevator_distance(vector<int> array);

int main() {
    
    vector<int> numbers = { 5, 2, 8 };
    int result = elevator_distance(numbers);
    cout << result << endl;
    return 0;
}

int elevator_distance(vector<int> array) {
    
    int counter = 0;
    int result = 0;
    for (int i = 0; i < array.size() - 1; i++) {
        if (array[i] > array[i + 1]) {
            result = array[i] - array[i + 1];
            counter += result;
        }

        else if (array[i] < array[i + 1]) {
            result = array[i + 1] - array[i];
            counter += result;
        }
    }
    return counter;
}