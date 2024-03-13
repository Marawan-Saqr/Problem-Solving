#include <iostream>
#include <cmath>
using namespace std;

int buses(const int kids, const int adults, const int places);

int main() {
    
    cout << buses(2, 2, 1) << endl;

    return 0;
}

int buses(const int kids, const int adults, const int places) {
    return places && (!kids || adults / 2 * (places - 2) >= kids) ? (kids + adults + places - 1) / places : 0;
}