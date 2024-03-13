#include<iostream>
using namespace std;

int main() {

	int dogs = 1;
	int cats = 2;
	if (dogs > 0 && cats == 0)
	{
		if (dogs > 1)
		{
			cout << "Dog lover" << endl;
		}
		else
		{
			cout << "Dog person" << endl;
		}
	}
	else if (cats > 0 && dogs == 0)
	{
		if (cats > 1)
		{
			cout << "Cat lover" << endl;
		}
		else
		{
			cout << "Cat person" << endl;
		}
	}
	else if (cats > 0 && dogs > 0)
	{
		if (dogs > cats)
		{
			cout << "I guess you like dogs more" << endl;
		}
		else if (dogs == cats)
		{
			cout << "I guess you like both equally" << endl;
		}
		else
		{
			cout << "I guess you like cats more" << endl;
		}
	}
	else
	{
		cout << "What, don’t you like pets?" << endl;
	}


	// The Answer Is "I guess you like cats more";

	return 0;
}