#include <iostream>
#include <vector>
using namespace std;

int get_average(vector <int> marks);

int main() {

    vector<int> numbers = { 2, 2, 2, 2 };
    int result = get_average(numbers);

    cout << result << endl;

    return 0;
}

int get_average(vector <int> marks) {
    int result = 0;
    int total = 0;
    for (int i = 0; i < marks.size(); i++) {
        result += marks[i];
    }
    total = result / marks.size();
    return total;
}