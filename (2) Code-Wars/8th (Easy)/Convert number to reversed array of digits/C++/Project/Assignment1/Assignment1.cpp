#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

vector<int> digitize(unsigned long n);

int main() {

    vector<int> numbersArray = { 348597 };
    
   

    return 0;
}

vector<int> digitize(unsigned long n) {
    vector<int> result;
    vector<int> result2;
    string st = to_string(n);
    for (int i = 0; i < st.size(); i++) {
        result.push_back(st[i] - '0');
    }
    
    for (int j = result.size() - 1; j >= 0; j--) {
        result2.push_back(result[j]);
    }

    return result2;
}