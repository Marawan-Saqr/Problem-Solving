#include<iostream>
using namespace std;
int main() {

	string name;
	int quantity;
	double discount = 10;
	int quantityDisscount = 1000;
	int quantityPrice = 100;
	cout << "Welcome To Our Shop You Will Have Discount 10% If You Buy more than 10 units From Us" << endl;
	cout << "Lets at first take your name" << endl;
	cin >> name;
	cout << "Ok " << name << " Please Enter The Quantity You Want " << endl;
	cin >> quantity;

	if (quantity >= quantityDisscount) {
		double totalPrice = quantity * quantityPrice;
		cout << totalPrice - (totalPrice * (discount / 100)) << endl;
	}
	else if (quantity < quantityDisscount) {
		cout << "Your Price Is " << quantity * quantityPrice;
	}
	else {
		cout << "Error" << endl;
	}
	

	return 0;
}