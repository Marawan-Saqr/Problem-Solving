#include <iostream>
#include <stdexcept>
using namespace std;

class Guesser {
private:
    int number;
    int lives;

public:

    //Parameterize Constructor
    Guesser(int number, int lives) : number(number), lives(lives) {
    
    }

    bool guess(int n) {

        if (lives == 0) {
            throw runtime_error("Out of lives. Game over.");
        }

        if (n == number) {
            return true;
        }
        else {
            lives--;
            return false;
        }
    }

};

int main() {

    Guesser g(10, 2);

    

    return 0;
}

