#include <iostream>
#include <vector>
using namespace std;

vector<int> countPositivesSumNegatives(vector<int> input);

int main() {

    vector<int> mainNumbers = {};
    
    vector<int> result = countPositivesSumNegatives(mainNumbers);

    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}

vector<int> countPositivesSumNegatives(vector<int> input) {
    vector<int> result;
    int positiveCounter = 0;
    int negativeResult = 0;
    if (input.empty()) {
        return input;
    }
    else {
        for (int i = 0; i < input.size(); i++) {
            if (input[i] > 0) {
                positiveCounter++;
            }
            else if (input[i] < 0) {
                negativeResult += input[i];

            }
        }
        result.push_back(positiveCounter);
        result.push_back(negativeResult);
        return result;
    }
}