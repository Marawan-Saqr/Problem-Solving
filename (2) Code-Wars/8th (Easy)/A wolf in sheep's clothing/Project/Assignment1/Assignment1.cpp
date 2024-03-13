#include <iostream>
#include <vector>
#include <string>
using namespace std;

string warn_the_sheep(const vector<string>& queue);

int main() {

	vector<string> sheepsLine = {"sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep"};
	string result = warn_the_sheep(sheepsLine);

	cout << result << endl;
	
	return 0;
}

string warn_the_sheep(const vector<string>& queue) {
    for (int i = 0; i < queue.size(); i++) {
        if (queue[i] == "wolf") {
            if (i == queue.size() - 1) {
                return "Pls go away and stop eating my sheep";
            }
            else {
                return "Oi! Sheep number " + to_string(queue.size() - i - 1) + "! You are about to be eaten by a wolf!";
            }
        }
    }
}
