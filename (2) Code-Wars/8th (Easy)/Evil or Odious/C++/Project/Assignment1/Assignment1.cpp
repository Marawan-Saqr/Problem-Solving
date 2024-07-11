#include <iostream>
#include <bitset>
using namespace std;

string evil(int n);

int main()
{
    cout << evil(7) << endl;

    return 0;
}

string evil(int n) {
    string answer = "";
    int countOnes = 0;

    while (n > 0) {
        countOnes += n % 2;
        n /= 2;
    }

    cout << countOnes << endl;

    if (countOnes % 2 == 0) {
        answer = "It's Evil!";
    }
    else {
        answer = "It's Odious!";
    }

    return answer;
}