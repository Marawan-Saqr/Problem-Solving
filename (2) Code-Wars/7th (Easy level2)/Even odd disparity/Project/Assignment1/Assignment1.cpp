#include <iostream>
#include <string>
#include <vector>
using namespace std;

int solve(vector<string> v);

int main() {
    
    vector<string> numbers = { "0","1","2","3","a","b" };
    int result = solve(numbers);
    cout << result << endl;

    return 0;
}

int solve(vector<string> v) {
    
    int result = 0;
    int evenResult = 0;
    int oddResult = 0;

    for (int i = 0; i < v.size(); i++) {
        if (isdigit(v[i][0])) {
            if (stoi(v[i]) % 2 == 0) {
                evenResult++;
            }
            else {
                oddResult++;
            }
        }
    }

    result = evenResult - oddResult;
    return result;
}
