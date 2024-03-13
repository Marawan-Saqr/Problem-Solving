#include <iostream>
#include <vector>
using namespace std;

bool betterThanAverage(vector<int> classPoints, int yourPoints);

int main() {

    vector<int> numbers = { 41, 75, 72, 56, 80, 82, 81, 33 };
    int points = 50;
    bool result = betterThanAverage(numbers, points);

    cout << result << endl;

    return 0;
}

bool betterThanAverage(std::vector<int> classPoints, int yourPoints) {
    int result = 0;
    int average = 0;
    for (int i = 0; i < classPoints.size(); i++) {
        result += classPoints[i];
    }

    average = result / classPoints.size();

    if (yourPoints > average) {
        return true;
    }
    else {
        return false;
    }
}