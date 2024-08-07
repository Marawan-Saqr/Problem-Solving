#include <iostream>
#include <vector>
#include <string>
#include <sstream> // For std::istringstream
using namespace std;

int find_short(string str);

int main() {

    cout << find_short("Let's travel abroad shall we") << endl;

    return 0;
}

int find_short(string str) {

    // split the string by spaces
    istringstream iss(str);
    vector<string> words;
    string temp = "";
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ' ') {
            words.push_back(temp);
            temp = "";
        }
        else {
            temp += str[i];
        }
    }

    words.push_back(temp);
    
    // Find the length of the shortest word
    int shortest = words[0].length();
    for (int j = 1; j < words.size(); j++) {
        if (shortest > words[j].length()) {      
            shortest = words[j].length();
        }
    }

    return shortest;
}