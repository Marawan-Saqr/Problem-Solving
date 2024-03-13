#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<int> reverseSeq(int n);

int main() {

	
	return 0;
}

vector<int> reverseSeq(int n) {
	vector<int> emptyArray;
	for (int i = n; i > 0; i--) {
		emptyArray.push_back(i);
	}
	return emptyArray;
}