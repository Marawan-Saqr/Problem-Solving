#include <iostream>
#include <string>
using namespace std;

int basicOp(char op, int val1, int val2);

int main() {

	cout << basicOp('+', 4, 7) << endl;

	return 0;
}


int basicOp(char op, int val1, int val2) {
	int result = 0;
	switch (op) {
	case '+':
		return result = val1 + val2;
		break;
	case '-':
		return result = val1 - val2;
	case '*':
		return result = val1 * val2;
	case'/':
		return result = val1 / val2;
	}
}