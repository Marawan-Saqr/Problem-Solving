#include <iostream>
#include <string>
using namespace std;

string sum_str(const string& a, const string& b);

int main() {

	cout << sum_str("4", "5") << endl;
	
	return 0;
}

string sum_str(const string& a, const string& b) {
	int result = 0;
	if (a == "" && b== "") {
		return "0";
	}
	else {
		result = stoi(a) + stoi(b);
		return to_string(result);
	}
}
