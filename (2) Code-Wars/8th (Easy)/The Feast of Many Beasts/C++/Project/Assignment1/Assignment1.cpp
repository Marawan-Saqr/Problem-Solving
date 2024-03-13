#include <iostream>
using namespace std;

bool feast(string beast, string dish);

int main() {


	cout << feast("maro", "maro") << endl;
	
	return 0;
}


bool feast(string beast, string dish) {
	if (beast[0] == dish[0] && beast[beast.length() - 1] == dish[dish.length() - 1]) {
		return true;
	}
	else {
		return false;
	}
}