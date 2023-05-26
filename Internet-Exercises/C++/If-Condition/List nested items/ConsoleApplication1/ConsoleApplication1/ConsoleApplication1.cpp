#include<iostream>
using namespace std;
int main() {

	// Challenge : Display Products and under it display sizes in one line

	string products[] = {"Tv", "Playstation", "Fridge", "BaseBall"};
	string sizes[] = {"Red", "Blue", "Black"};

	int productsLength = sizeof(products) / sizeof(products[0]);
	int sizesLength = sizeof(sizes) / sizeof(sizes[0]);

	cout << "This Is Length Of Products" << endl;
	cout << "productsLength: " << productsLength << endl;
	cout << "sizesLength: " << sizesLength << endl;
	cout << "====================" << endl;

	// First Loop To Display Products
	cout << "The Main Products Is :" << endl;
	for (int i = 0; i < productsLength; i++) {
		cout << i + 1 << "-" << products[i] << endl;
		cout << "Colors: " << endl;
		for (int j = 0; j < sizesLength; j++) {
			cout << j + 1 << "-" << sizes[j] << " ";
		}
		cout << endl << "====================" << endl;
	}

	return 0;
}