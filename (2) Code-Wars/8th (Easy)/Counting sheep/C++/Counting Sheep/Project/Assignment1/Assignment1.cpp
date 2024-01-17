#include <iostream>
#include <vector>
using namespace std;

int count_sheep(vector<bool> arr);

int main() {

	vector<bool> sheepsNumbers = { true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true };
	cout << count_sheep(sheepsNumbers) << endl;

	return 0;
}

int count_sheep(vector<bool> arr){
	int result = 0;
	for (int i = 0; i < arr.size(); i++) {
		if (arr[i] == true) {
			result += arr[i];
		}
	}
	return result;
}