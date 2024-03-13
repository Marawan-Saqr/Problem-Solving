#include <iostream>
#include <vector>
#include <string>
using namespace std;

string solve_rock_off(const vector<int>& alice, const vector<int>& bob);

int main() {
    
    vector<int> alice = { 47, 67, 22 };
    vector<int> bob = { 26, 47, 12 };
    string result = solve_rock_off(alice, bob);
    cout << result << endl;

    return 0;
}

string solve_rock_off(const vector<int>& alice, const vector<int>& bob) {
    int alicePoints = 0;
    int bobPoints = 0;
    for (int i = 0; i < alice.size(); i++) {
        if (alice[i] > bob[i]) {
            alicePoints++;
        }
        else if (alice[i] < bob[i]) {
            bobPoints++;
        }
        else {
            alicePoints;
            bobPoints;
        }
    }

    if (alicePoints == bobPoints) {
        return to_string(alicePoints) + ", " + to_string(bobPoints) + ": that looks like a \"draw\"! Rock on!";
    }
    else if (alicePoints < bobPoints) {
        return to_string(alicePoints) + ", " + to_string(bobPoints) + ": Bob made \"Jeff\" proud!";
    }
    else {
        return to_string(alicePoints) + ", " + to_string(bobPoints) + ": Alice made \"Kurt\" proud!";
    }
}
