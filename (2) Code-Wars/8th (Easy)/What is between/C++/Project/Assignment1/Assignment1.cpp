#include <iostream>
#include <vector>
using namespace std;

std::vector<int> between(int start, int end);

int main() {

	vector<int> result = between(1, 4);

	for (int num : result) {
		cout << num << " ";
	}

	cout << endl;

	return 0;
}


vector<int> between(int start, int end) {
	vector<int> newNumbers;
	for (int i = start; i <= end; i++) {
		newNumbers.push_back(i);
	}
	return newNumbers;
}