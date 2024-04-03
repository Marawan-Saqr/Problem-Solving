#include <iostream>
#include <string>
#include <vector>
using namespace std;

vector<int> digits(int n);

int main() {

	int numbers = 156;
	vector<int> result = digits(numbers);

	for (int num : result) {
		cout << num << endl;
	}

	return 0;
}

vector<int> digits(int n) {
	
	string convertToString = to_string(n); //156
	vector<char> convertToStringVector;

	for (int i = 0; i < convertToString.length(); i++) {
		convertToStringVector.push_back(convertToString[i]); //['1', '5', '6']
	}

	vector<int> convertToIntVector;

	for (int j = 0; j < convertToStringVector.size(); j++) {
		convertToIntVector.push_back(convertToStringVector[j] - '0'); //[1, 5, 6]
	}

	vector<int> finalResult;

	for (int k = 0; k < convertToIntVector.size() - 1; k++) {
		for (int s = k + 1; s < convertToIntVector.size(); s++) {
			finalResult.push_back(convertToIntVector[k] + convertToIntVector[s]);
		}
	}

	return finalResult;
}