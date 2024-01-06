#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#define N 1000
using namespace std;


int main() {
    int arr[N], arrLength;
    cin >> arrLength;
    for (int i = 0; i < arrLength; i++) {
        cin >> arr[i];
    }
    for (int j = arrLength - 1; j >= 0; j--) {
        cout << arr[j] << ' ';
    }

    return 0;
}