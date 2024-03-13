#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

string twoSort(vector<string> s);

int main() {

	

	
	return 0;
}


string twoSort(vector<string> s) {
	sort(s.begin(), s.end());
	string result = s.at(0);
	for (int i = 1; i < result.size(); i+= 4) {
		result.insert(i, "***");
	}
	return result;
}