#include <iostream>
using namespace std;

int past(int h, int m, int s);

int main() {

	cout << past(0, 1, 1) << endl;
	
	return 0;
}


int past(int h, int m, int s) {
	int oneSecond = 1000;
	int oneMinute = 60 * oneSecond;
	int oneHour = 60 * oneMinute;
	return (h * oneHour) + (m * oneMinute) + (s * oneSecond);
}