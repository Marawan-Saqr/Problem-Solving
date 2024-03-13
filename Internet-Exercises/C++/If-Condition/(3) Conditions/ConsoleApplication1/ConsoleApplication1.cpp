#include<iostream>
using namespace std;

bool Enemy(bool canSeePlayer, bool playerPoweredUp);

int main() {

	bool canSee = true;
	bool playerPower = false;
	cout << Enemy(canSee, playerPower) << endl;

	return 0;
}

bool Enemy(bool canSeePlayer, bool playerPoweredUp) {
	if (canSeePlayer == true) {
		cout << "Yes He Says The Player" << endl;
		if (playerPoweredUp == true) {
			cout << "Yes Player Has The Weopeon" << endl;
			return true;
		}
		else {
			cout << "No Player Hasn't Found The Weopen" << endl;
			return false;
		}
	}
	else {
		cout << "No He Can't See The Player" << endl;
		return false;
	}
}