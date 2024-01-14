#include <iostream>
using namespace std;

int litres(double time);

int main() {

	
	cout << litres(3) << endl;



	return 0;
}



int litres(double time) {
	
	double litres = 0.5;
	return time * litres;
}