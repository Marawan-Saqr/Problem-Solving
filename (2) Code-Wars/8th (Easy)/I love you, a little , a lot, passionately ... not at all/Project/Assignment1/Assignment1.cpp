#include <iostream>
#include <string>
#include <vector>
using namespace std;

string how_much_i_love_you(int nb_petals);

int main() {

    cout << how_much_i_love_you(8) << endl;

    return 0;
}

string how_much_i_love_you(int nb_petals) {
    vector<string> names = { "I love you", "a little", "a lot", "passionately", "madly", "not at all" };
    return names[(nb_petals - 1) % 6];
}