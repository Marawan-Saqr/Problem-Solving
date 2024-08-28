#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<int> solve(const vector<string>& arr);

int main() {
    
    vector<string> words = { "abode", "ABc", "xyzD" };
    vector<int> resultNumbers = solve(words);

    for (int num : resultNumbers) {
        cout << num << endl;
    }

    return 0;
}

vector<int> solve(const vector<string>& arr) {
    
    int counter = 0;
    vector<int> result;

    for (string word : arr) { //abode
        for (int i = 0; i < word.length(); i++) {
            if (word[i]  == i + 97 || word[i] == i + 65) {   // a
                counter++;
            }
        }
        result.push_back(counter);
        counter = 0;
    }
    return result;
};