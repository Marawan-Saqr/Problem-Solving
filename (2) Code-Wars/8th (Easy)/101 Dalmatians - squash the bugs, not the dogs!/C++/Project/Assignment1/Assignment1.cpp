#include <iostream>
#include<vector>
#include<string>
using namespace std;

std::string howManyDalmatians(int number, std::vector<std::string> dogs = { "Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!" });

int main() {

	cout << howManyDalmatians() << endl;
	
	return 0;
}

std::string howManyDalmatians(int number, std::vector<std::string> dogs = { "Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!" }) {
	return (number <= 10) ? dogs[0] :
		(number <= 50) ? dogs[1] :
		(number == 101) ? dogs[2] : dogs[3];
}