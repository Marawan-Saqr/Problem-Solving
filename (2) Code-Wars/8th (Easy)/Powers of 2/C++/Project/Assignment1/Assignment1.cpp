#include <iostream>
#include <vector>
#include <cstdint>
#include <cmath>
using namespace std;

int main() {

    vector<int> number = { 1 };


    return 0;
}

vector<uint64_t> powers_of_two(int n) {
    vector<uint64_t> result;
    for (int i = 0; i <= n; i++) {
        result.push_back(pow(2, i));
    }
    return result;
}