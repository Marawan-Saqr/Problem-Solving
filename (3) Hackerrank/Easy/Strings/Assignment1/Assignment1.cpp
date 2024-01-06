#include <iostream>
#include <string>
using namespace std;

int main() {
	
	string a;
	string b;
	cin >> a >> b;

	cout << a.size() << " " << b.size() << endl;
	cout << a + b << endl;
	char s = a[0];
	char d = b[0];
	a[0] = d;
	b[0] = s;
	cout << a << " " << b << endl;

	return 0;
}