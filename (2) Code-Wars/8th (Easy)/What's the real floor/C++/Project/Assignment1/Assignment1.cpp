#include <iostream>
#include <string>
using namespace std;

std::string no_space(const std::string& x);

int main() {

	cout << no_space("8 j 8   mBliB8g  imjB8B8  jl  B") << endl;
	return 0;
}

std::string no_space(const std::string& x){
	string result = "";
	for (int i = 0; i < x.size(); i++) {
		if (x[i] == ' ') {
			continue;
		}
		else {
			result += x[i];
		}
	}
	return result;
}