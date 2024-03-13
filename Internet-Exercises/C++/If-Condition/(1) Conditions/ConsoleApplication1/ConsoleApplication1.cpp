#include<iostream>
using namespace std;

int main() {

	double balance = 0;
	balance = balance + 20;
	balance = balance - 25;
	balance = balance + 30;
	balance = balance - 25;
	if (balance < 0)
	{
		cout << "We’re in the red!" << endl;
	}
	else if (balance > 0)
	{
		cout << "We made a profit!" << endl;
	}
	else
	{
		cout << "We broke even." << endl;
	}
	
	"We’re in the red!";
	"We made a profit!";
	"We broke even.";        // This Is The Answer

	return 0;
}