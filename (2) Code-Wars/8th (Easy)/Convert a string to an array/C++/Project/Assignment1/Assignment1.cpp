#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> string_to_array(const vector<string>& s);

int main() {

    vector<string> words = {"some value"};
    vector<string> result = string_to_array(words);

    return 0;
}



vector<string> string_to_array(const vector<string>& s) { 
    vector<string> result;
    string temp = "";
    for (int i = 0; i < s.size(); i++) {
        if (s[i] != " ") {
            temp += s[i];
        }
        else {
            result.push_back(temp);
            temp.clear();
        }
    }
    result.push_back(temp);
    return result;
}