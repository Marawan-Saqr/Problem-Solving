#include <iostream>
#include <utility>
using namespace std;


std::pair<int, int> swap_values(std::pair<int, int> values) {
	std::swap(values.first, values.second);
	return values;
}

int main() {


	return 0;
}