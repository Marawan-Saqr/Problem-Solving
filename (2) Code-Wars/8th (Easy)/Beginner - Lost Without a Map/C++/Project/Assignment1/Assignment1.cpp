#include <iostream>
#include <vector>
using namespace std;

vector<int> maps(const vector<int>& values);

int main() {

	vector<int> doubledNumbers = {1, 2, 3};
	vector<int> result = maps(doubledNumbers);

	for (int number : result) {
		cout << number << endl;
	}

	return 0;
}

vector<int> maps(const std::vector<int>& values) {
	vector<int> result;
	for (int i = 0; i < values.size(); i++) {
		result.push_back(values[i] * 2);
	}
	return result;
}