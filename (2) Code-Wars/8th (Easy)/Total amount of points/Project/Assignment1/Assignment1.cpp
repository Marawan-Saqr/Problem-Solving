#include <iostream>
#include <array>
using namespace std;

int points(const std::array<std::string, 10>& games);

int main() {
    
    

    return 0;
}

int points(const std::array<std::string, 10>& games) {
    int gamesLength = sizeof(games) / sizeof(games[0]);
    int result = 0;
    for (int i = 0; i < gamesLength; i++) {
        if (games[i][0] > games[i][2]) {
            result += 3;
        }
        else if (games[i][0] < games[i][2]) {
            result += 0;
        }
        else if (games[i][0] == games[i][2]) {
            result += 1;
        }
    }
    return result;
}
