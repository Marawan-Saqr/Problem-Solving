#include <iostream>
using namespace std;

int seats_in_theater(int total_col, int total_row, int col, int row);

int main() {
    
    cout << seats_in_theater(16, 11, 5, 3) << endl;

    return 0;
}

int seats_in_theater(int total_col, int total_row, int col, int row) {
    return (total_col - (col - 1)) * (total_row - row);
}
