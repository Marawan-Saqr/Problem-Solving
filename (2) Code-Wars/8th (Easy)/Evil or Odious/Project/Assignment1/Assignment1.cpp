#include <iostream>
#include <bitset>
using namespace std;

string evil(int n)
{
    string answer = "";
    int countOnes = 0;

    // Count the number of 1s in the binary representation of n
    while (n > 0)
    {
        countOnes += n % 2;
        n /= 2;
    }

    if (countOnes % 2 == 0)
    {
        answer = "It's Evil!";
    }
    else
    {
        answer = "It's Odious!";
    }

    return answer;
}

int main()
{
    cout << evil(7) << endl;

    return 0;
}
