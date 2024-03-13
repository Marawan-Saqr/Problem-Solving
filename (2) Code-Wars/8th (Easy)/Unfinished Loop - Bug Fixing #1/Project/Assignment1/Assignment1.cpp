#include <iostream>
#include <vector>
using namespace std;

int main() {

	vector<int> createVector(const int n)
	{
		std::vector<int> res;

		for (int i = 1; i <= n;)
		{
			res.push_back(i);
		}

		return res;
	}

	return 0;
}

